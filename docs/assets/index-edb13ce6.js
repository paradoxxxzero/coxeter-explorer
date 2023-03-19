(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="150",Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rf=0,Rl=1,of=2,Jc=1,sf=2,Gr=3,di=0,pn=1,li=2,ui=0,or=1,ga=2,Il=3,Ol=4,af=5,nr=100,lf=101,cf=102,Fl=103,zl=104,uf=200,df=201,ff=202,hf=203,eu=204,tu=205,pf=206,mf=207,gf=208,vf=209,_f=210,xf=0,yf=1,bf=2,va=3,Mf=4,Sf=5,wf=6,Ef=7,nu=0,Tf=1,Af=2,Qn=0,Pf=1,iu=2,Cf=3,Df=4,Lf=5,ru=300,lr=301,cr=302,_a=303,xa=304,Jo=306,ya=1e3,Pn=1001,ba=1002,$t=1003,Nl=1004,Os=1005,yn=1006,Rf=1007,jr=1008,Li=1009,If=1010,Of=1011,ou=1012,Ff=1013,Ai=1014,Pi=1015,qr=1016,zf=1017,Nf=1018,sr=1020,Uf=1021,Cn=1023,kf=1024,Bf=1025,Di=1026,ur=1027,Gf=1028,Vf=1029,Hf=1030,Wf=1031,jf=1033,Fs=33776,zs=33777,Ns=33778,Us=33779,Ul=35840,kl=35841,Bl=35842,Gl=35843,qf=36196,Vl=37492,Hl=37496,Wl=37808,jl=37809,ql=37810,Xl=37811,Yl=37812,Zl=37813,Kl=37814,$l=37815,Ql=37816,Jl=37817,ec=37818,tc=37819,nc=37820,ic=37821,ks=36492,Xf=36283,rc=36284,oc=36285,sc=36286,Ri=3e3,vt=3001,Yf=3200,Zf=3201,Kf=0,$f=1,Nn="srgb",Xr="srgb-linear",su="display-p3",Bs=7680,Qf=519,ac=35044,Ko=35040,lc="300 es",Ma=1035;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,d=r.length;s<d;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gs=Math.PI/180,cc=180/Math.PI;function Zr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[a&255]+Ht[a>>8&255]+Ht[a>>16&255]+Ht[a>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function sn(a,e,t){return Math.max(e,Math.min(t,a))}function Jf(a,e){return(a%e+e)%e}function Vs(a,e,t){return(1-t)*a+t*e}function uc(a){return(a&a-1)===0&&a!==0}function eh(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function To(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function cn(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,d=this.y-e.y;return this.x=s*n-d*r+e.x,this.y=s*r+d*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,d,l,h,p){const m=this.elements;return m[0]=e,m[1]=r,m[2]=l,m[3]=t,m[4]=s,m[5]=h,m[6]=n,m[7]=d,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,d=n[0],l=n[3],h=n[6],p=n[1],m=n[4],v=n[7],g=n[2],M=n[5],P=n[8],y=r[0],b=r[3],C=r[6],O=r[1],A=r[4],N=r[7],R=r[2],B=r[5],Y=r[8];return s[0]=d*y+l*O+h*R,s[3]=d*b+l*A+h*B,s[6]=d*C+l*N+h*Y,s[1]=p*y+m*O+v*R,s[4]=p*b+m*A+v*B,s[7]=p*C+m*N+v*Y,s[2]=g*y+M*O+P*R,s[5]=g*b+M*A+P*B,s[8]=g*C+M*N+P*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],d=e[4],l=e[5],h=e[6],p=e[7],m=e[8];return t*d*m-t*l*p-n*s*m+n*l*h+r*s*p-r*d*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],d=e[4],l=e[5],h=e[6],p=e[7],m=e[8],v=m*d-l*p,g=l*h-m*s,M=p*s-d*h,P=t*v+n*g+r*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/P;return e[0]=v*y,e[1]=(r*p-m*n)*y,e[2]=(l*n-r*d)*y,e[3]=g*y,e[4]=(m*t-r*h)*y,e[5]=(r*s-l*t)*y,e[6]=M*y,e[7]=(n*h-p*t)*y,e[8]=(d*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,d,l){const h=Math.cos(s),p=Math.sin(s);return this.set(n*h,n*p,-n*(h*d+p*l)+d+e,-r*p,r*h,-r*(-p*d+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new Qt;function au(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function $o(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}class Ii{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,d,l){let h=n[r+0],p=n[r+1],m=n[r+2],v=n[r+3];const g=s[d+0],M=s[d+1],P=s[d+2],y=s[d+3];if(l===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(l===1){e[t+0]=g,e[t+1]=M,e[t+2]=P,e[t+3]=y;return}if(v!==y||h!==g||p!==M||m!==P){let b=1-l;const C=h*g+p*M+m*P+v*y,O=C>=0?1:-1,A=1-C*C;if(A>Number.EPSILON){const R=Math.sqrt(A),B=Math.atan2(R,C*O);b=Math.sin(b*B)/R,l=Math.sin(l*B)/R}const N=l*O;if(h=h*b+g*N,p=p*b+M*N,m=m*b+P*N,v=v*b+y*N,b===1-l){const R=1/Math.sqrt(h*h+p*p+m*m+v*v);h*=R,p*=R,m*=R,v*=R}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,s,d){const l=n[r],h=n[r+1],p=n[r+2],m=n[r+3],v=s[d],g=s[d+1],M=s[d+2],P=s[d+3];return e[t]=l*P+m*v+h*M-p*g,e[t+1]=h*P+m*g+p*v-l*M,e[t+2]=p*P+m*M+l*g-h*v,e[t+3]=m*P-l*v-h*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,d=e._order,l=Math.cos,h=Math.sin,p=l(n/2),m=l(r/2),v=l(s/2),g=h(n/2),M=h(r/2),P=h(s/2);switch(d){case"XYZ":this._x=g*m*v+p*M*P,this._y=p*M*v-g*m*P,this._z=p*m*P+g*M*v,this._w=p*m*v-g*M*P;break;case"YXZ":this._x=g*m*v+p*M*P,this._y=p*M*v-g*m*P,this._z=p*m*P-g*M*v,this._w=p*m*v+g*M*P;break;case"ZXY":this._x=g*m*v-p*M*P,this._y=p*M*v+g*m*P,this._z=p*m*P+g*M*v,this._w=p*m*v-g*M*P;break;case"ZYX":this._x=g*m*v-p*M*P,this._y=p*M*v+g*m*P,this._z=p*m*P-g*M*v,this._w=p*m*v+g*M*P;break;case"YZX":this._x=g*m*v+p*M*P,this._y=p*M*v+g*m*P,this._z=p*m*P-g*M*v,this._w=p*m*v-g*M*P;break;case"XZY":this._x=g*m*v-p*M*P,this._y=p*M*v-g*m*P,this._z=p*m*P+g*M*v,this._w=p*m*v+g*M*P;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],d=t[1],l=t[5],h=t[9],p=t[2],m=t[6],v=t[10],g=n+l+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(m-h)*M,this._y=(s-p)*M,this._z=(d-r)*M}else if(n>l&&n>v){const M=2*Math.sqrt(1+n-l-v);this._w=(m-h)/M,this._x=.25*M,this._y=(r+d)/M,this._z=(s+p)/M}else if(l>v){const M=2*Math.sqrt(1+l-n-v);this._w=(s-p)/M,this._x=(r+d)/M,this._y=.25*M,this._z=(h+m)/M}else{const M=2*Math.sqrt(1+v-n-l);this._w=(d-r)/M,this._x=(s+p)/M,this._y=(h+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,d=e._w,l=t._x,h=t._y,p=t._z,m=t._w;return this._x=n*m+d*l+r*p-s*h,this._y=r*m+d*h+s*l-n*p,this._z=s*m+d*p+n*h-r*l,this._w=d*m-n*l-r*h-s*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,d=this._w;let l=d*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=d,this._x=n,this._y=r,this._z=s,this;const h=1-l*l;if(h<=Number.EPSILON){const M=1-t;return this._w=M*d+t*this._w,this._x=M*n+t*this._x,this._y=M*r+t*this._y,this._z=M*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(h),m=Math.atan2(p,l),v=Math.sin((1-t)*m)/p,g=Math.sin(t*m)/p;return this._w=d*v+this._w*g,this._x=n*v+this._x*g,this._y=r*v+this._y*g,this._z=s*v+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,d=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*d,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*d,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*d,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,d=e.y,l=e.z,h=e.w,p=h*t+d*r-l*n,m=h*n+l*t-s*r,v=h*r+s*n-d*t,g=-s*t-d*n-l*r;return this.x=p*h+g*-s+m*-l-v*-d,this.y=m*h+g*-d+v*-s-p*-l,this.z=v*h+g*-l+p*-d-m*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,d=t.x,l=t.y,h=t.z;return this.x=r*h-s*l,this.y=s*d-n*h,this.z=n*l-r*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new K,dc=new Ii;function ar(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function js(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const th=new Qt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),nh=new Qt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),ci=new K;function ih(a){return a.convertSRGBToLinear(),ci.set(a.r,a.g,a.b).applyMatrix3(nh),a.setRGB(ci.x,ci.y,ci.z)}function rh(a){return ci.set(a.r,a.g,a.b).applyMatrix3(th),a.setRGB(ci.x,ci.y,ci.z).convertLinearToSRGB()}const oh={[Xr]:a=>a,[Nn]:a=>a.convertSRGBToLinear(),[su]:ih},sh={[Xr]:a=>a,[Nn]:a=>a.convertLinearToSRGB(),[su]:rh},Zt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Xr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=oh[e],r=sh[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let Hi;class lu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hi===void 0&&(Hi=$o("canvas")),Hi.width=e.width,Hi.height=e.height;const n=Hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$o("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let d=0;d<s.length;d++)s[d]=ar(s[d]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ar(t[n]/255)*255):t[n]=ar(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class cu{constructor(e=null){this.isSource=!0,this.uuid=Zr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let d=0,l=r.length;d<l;d++)r[d].isDataTexture?s.push(qs(r[d].image)):s.push(qs(r[d]))}else s=qs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function qs(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?lu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ah=0;class mn extends Oi{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Pn,r=Pn,s=yn,d=jr,l=Cn,h=Li,p=mn.DEFAULT_ANISOTROPY,m=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Zr(),this.name="",this.source=new cu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=d,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=ru;mn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,n=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,d=e.elements;return this.x=d[0]*t+d[4]*n+d[8]*r+d[12]*s,this.y=d[1]*t+d[5]*n+d[9]*r+d[13]*s,this.z=d[2]*t+d[6]*n+d[10]*r+d[14]*s,this.w=d[3]*t+d[7]*n+d[11]*r+d[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const h=e.elements,p=h[0],m=h[4],v=h[8],g=h[1],M=h[5],P=h[9],y=h[2],b=h[6],C=h[10];if(Math.abs(m-g)<.01&&Math.abs(v-y)<.01&&Math.abs(P-b)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+y)<.1&&Math.abs(P+b)<.1&&Math.abs(p+M+C-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(p+1)/2,N=(M+1)/2,R=(C+1)/2,B=(m+g)/4,Y=(v+y)/4,E=(P+b)/4;return A>N&&A>R?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=B/n,s=Y/n):N>R?N<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(N),n=B/r,s=E/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=Y/s,r=E/s),this.set(n,r,s,t),this}let O=Math.sqrt((b-P)*(b-P)+(v-y)*(v-y)+(g-m)*(g-m));return Math.abs(O)<.001&&(O=1),this.x=(b-P)/O,this.y=(v-y)/O,this.z=(g-m)/O,this.w=Math.acos((p+M+C-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ln extends Oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new mn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uu extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lh extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,d=-1/0,l=-1/0;for(let h=0,p=e.length;h<p;h+=3){const m=e[h],v=e[h+1],g=e[h+2];m<t&&(t=m),v<n&&(n=v),g<r&&(r=g),m>s&&(s=m),v>d&&(d=v),g>l&&(l=g)}return this.min.set(t,n,r),this.max.set(s,d,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,d=-1/0,l=-1/0;for(let h=0,p=e.count;h<p;h++){const m=e.getX(h),v=e.getY(h),g=e.getZ(h);m<t&&(t=m),v<n&&(n=v),g<r&&(r=g),m>s&&(s=m),v>d&&(d=v),g>l&&(l=g)}return this.min.set(t,n,r),this.max.set(s,d,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let d=0,l=s.count;d<l;d++)yi.fromBufferAttribute(s,d).applyMatrix4(e.matrixWorld),this.expandByPoint(yi)}else n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox),Xs.applyMatrix4(e.matrixWorld),this.union(Xs);const r=e.children;for(let s=0,d=r.length;s<d;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Ao.subVectors(this.max,Dr),Wi.subVectors(e.a,Dr),ji.subVectors(e.b,Dr),qi.subVectors(e.c,Dr),ii.subVectors(ji,Wi),ri.subVectors(qi,ji),bi.subVectors(Wi,qi);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-bi.z,bi.y,ii.z,0,-ii.x,ri.z,0,-ri.x,bi.z,0,-bi.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-bi.y,bi.x,0];return!Ys(t,Wi,ji,qi,Ao)||(t=[1,0,0,0,1,0,0,0,1],!Ys(t,Wi,ji,qi,Ao))?!1:(Po.crossVectors(ii,ri),t=[Po.x,Po.y,Po.z],Ys(t,Wi,ji,qi,Ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new K,new K,new K,new K,new K,new K,new K,new K],yi=new K,Xs=new Kr,Wi=new K,ji=new K,qi=new K,ii=new K,ri=new K,bi=new K,Dr=new K,Ao=new K,Po=new K,Mi=new K;function Ys(a,e,t,n,r){for(let s=0,d=a.length-3;s<=d;s+=3){Mi.fromArray(a,s);const l=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),h=e.dot(Mi),p=t.dot(Mi),m=n.dot(Mi);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>l)return!1}return!0}const ch=new Kr,Lr=new K,Zs=new K;class Ra{constructor(e=new K,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ch.setFromPoints(e).getCenter(n);let r=0;for(let s=0,d=e.length;s<d;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Lr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Zs)),this.expandByPoint(Lr.copy(e.center).sub(Zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new K,Ks=new K,Co=new K,oi=new K,$s=new K,Do=new K,Qs=new K;class uh{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ks.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Ks);const s=e.distanceTo(t)*.5,d=-this.direction.dot(Co),l=oi.dot(this.direction),h=-oi.dot(Co),p=oi.lengthSq(),m=Math.abs(1-d*d);let v,g,M,P;if(m>0)if(v=d*h-l,g=d*l-h,P=s*m,v>=0)if(g>=-P)if(g<=P){const y=1/m;v*=y,g*=y,M=v*(v+d*g+2*l)+g*(d*v+g+2*h)+p}else g=s,v=Math.max(0,-(d*g+l)),M=-v*v+g*(g+2*h)+p;else g=-s,v=Math.max(0,-(d*g+l)),M=-v*v+g*(g+2*h)+p;else g<=-P?(v=Math.max(0,-(-d*s+l)),g=v>0?-s:Math.min(Math.max(-s,-h),s),M=-v*v+g*(g+2*h)+p):g<=P?(v=0,g=Math.min(Math.max(-s,-h),s),M=g*(g+2*h)+p):(v=Math.max(0,-(d*s+l)),g=v>0?s:Math.min(Math.max(-s,-h),s),M=-v*v+g*(g+2*h)+p);else g=d>0?-s:s,v=Math.max(0,-(d*g+l)),M=-v*v+g*(g+2*h)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(Ks).addScaledVector(Co,g),M}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=e.radius*e.radius;if(r>s)return null;const d=Math.sqrt(s-r),l=n-d,h=n+d;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,d,l,h;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(n=(e.min.x-g.x)*p,r=(e.max.x-g.x)*p):(n=(e.max.x-g.x)*p,r=(e.min.x-g.x)*p),m>=0?(s=(e.min.y-g.y)*m,d=(e.max.y-g.y)*m):(s=(e.max.y-g.y)*m,d=(e.min.y-g.y)*m),n>d||s>r||((s>n||isNaN(n))&&(n=s),(d<r||isNaN(r))&&(r=d),v>=0?(l=(e.min.z-g.z)*v,h=(e.max.z-g.z)*v):(l=(e.max.z-g.z)*v,h=(e.min.z-g.z)*v),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,s){$s.subVectors(t,e),Do.subVectors(n,e),Qs.crossVectors($s,Do);let d=this.direction.dot(Qs),l;if(d>0){if(r)return null;l=1}else if(d<0)l=-1,d=-d;else return null;oi.subVectors(this.origin,e);const h=l*this.direction.dot(Do.crossVectors(oi,Do));if(h<0)return null;const p=l*this.direction.dot($s.cross(oi));if(p<0||h+p>d)return null;const m=-l*oi.dot(Qs);return m<0?null:this.at(m/d,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,d,l,h,p,m,v,g,M,P,y,b){const C=this.elements;return C[0]=e,C[4]=t,C[8]=n,C[12]=r,C[1]=s,C[5]=d,C[9]=l,C[13]=h,C[2]=p,C[6]=m,C[10]=v,C[14]=g,C[3]=M,C[7]=P,C[11]=y,C[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Xi.setFromMatrixColumn(e,0).length(),s=1/Xi.setFromMatrixColumn(e,1).length(),d=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*d,t[9]=n[9]*d,t[10]=n[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,d=Math.cos(n),l=Math.sin(n),h=Math.cos(r),p=Math.sin(r),m=Math.cos(s),v=Math.sin(s);if(e.order==="XYZ"){const g=d*m,M=d*v,P=l*m,y=l*v;t[0]=h*m,t[4]=-h*v,t[8]=p,t[1]=M+P*p,t[5]=g-y*p,t[9]=-l*h,t[2]=y-g*p,t[6]=P+M*p,t[10]=d*h}else if(e.order==="YXZ"){const g=h*m,M=h*v,P=p*m,y=p*v;t[0]=g+y*l,t[4]=P*l-M,t[8]=d*p,t[1]=d*v,t[5]=d*m,t[9]=-l,t[2]=M*l-P,t[6]=y+g*l,t[10]=d*h}else if(e.order==="ZXY"){const g=h*m,M=h*v,P=p*m,y=p*v;t[0]=g-y*l,t[4]=-d*v,t[8]=P+M*l,t[1]=M+P*l,t[5]=d*m,t[9]=y-g*l,t[2]=-d*p,t[6]=l,t[10]=d*h}else if(e.order==="ZYX"){const g=d*m,M=d*v,P=l*m,y=l*v;t[0]=h*m,t[4]=P*p-M,t[8]=g*p+y,t[1]=h*v,t[5]=y*p+g,t[9]=M*p-P,t[2]=-p,t[6]=l*h,t[10]=d*h}else if(e.order==="YZX"){const g=d*h,M=d*p,P=l*h,y=l*p;t[0]=h*m,t[4]=y-g*v,t[8]=P*v+M,t[1]=v,t[5]=d*m,t[9]=-l*m,t[2]=-p*m,t[6]=M*v+P,t[10]=g-y*v}else if(e.order==="XZY"){const g=d*h,M=d*p,P=l*h,y=l*p;t[0]=h*m,t[4]=-v,t[8]=p*m,t[1]=g*v+y,t[5]=d*m,t[9]=M*v-P,t[2]=P*v-M,t[6]=l*m,t[10]=y*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dh,e,fh)}lookAt(e,t,n){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),si.crossVectors(n,un),si.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),si.crossVectors(n,un)),si.normalize(),Lo.crossVectors(un,si),r[0]=si.x,r[4]=Lo.x,r[8]=un.x,r[1]=si.y,r[5]=Lo.y,r[9]=un.y,r[2]=si.z,r[6]=Lo.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,d=n[0],l=n[4],h=n[8],p=n[12],m=n[1],v=n[5],g=n[9],M=n[13],P=n[2],y=n[6],b=n[10],C=n[14],O=n[3],A=n[7],N=n[11],R=n[15],B=r[0],Y=r[4],E=r[8],z=r[12],H=r[1],le=r[5],ue=r[9],Q=r[13],W=r[2],V=r[6],ae=r[10],_e=r[14],ce=r[3],de=r[7],pe=r[11],Le=r[15];return s[0]=d*B+l*H+h*W+p*ce,s[4]=d*Y+l*le+h*V+p*de,s[8]=d*E+l*ue+h*ae+p*pe,s[12]=d*z+l*Q+h*_e+p*Le,s[1]=m*B+v*H+g*W+M*ce,s[5]=m*Y+v*le+g*V+M*de,s[9]=m*E+v*ue+g*ae+M*pe,s[13]=m*z+v*Q+g*_e+M*Le,s[2]=P*B+y*H+b*W+C*ce,s[6]=P*Y+y*le+b*V+C*de,s[10]=P*E+y*ue+b*ae+C*pe,s[14]=P*z+y*Q+b*_e+C*Le,s[3]=O*B+A*H+N*W+R*ce,s[7]=O*Y+A*le+N*V+R*de,s[11]=O*E+A*ue+N*ae+R*pe,s[15]=O*z+A*Q+N*_e+R*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],d=e[1],l=e[5],h=e[9],p=e[13],m=e[2],v=e[6],g=e[10],M=e[14],P=e[3],y=e[7],b=e[11],C=e[15];return P*(+s*h*v-r*p*v-s*l*g+n*p*g+r*l*M-n*h*M)+y*(+t*h*M-t*p*g+s*d*g-r*d*M+r*p*m-s*h*m)+b*(+t*p*v-t*l*M-s*d*v+n*d*M+s*l*m-n*p*m)+C*(-r*l*m-t*h*v+t*l*g+r*d*v-n*d*g+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],d=e[4],l=e[5],h=e[6],p=e[7],m=e[8],v=e[9],g=e[10],M=e[11],P=e[12],y=e[13],b=e[14],C=e[15],O=v*b*p-y*g*p+y*h*M-l*b*M-v*h*C+l*g*C,A=P*g*p-m*b*p-P*h*M+d*b*M+m*h*C-d*g*C,N=m*y*p-P*v*p+P*l*M-d*y*M-m*l*C+d*v*C,R=P*v*h-m*y*h-P*l*g+d*y*g+m*l*b-d*v*b,B=t*O+n*A+r*N+s*R;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/B;return e[0]=O*Y,e[1]=(y*g*s-v*b*s-y*r*M+n*b*M+v*r*C-n*g*C)*Y,e[2]=(l*b*s-y*h*s+y*r*p-n*b*p-l*r*C+n*h*C)*Y,e[3]=(v*h*s-l*g*s-v*r*p+n*g*p+l*r*M-n*h*M)*Y,e[4]=A*Y,e[5]=(m*b*s-P*g*s+P*r*M-t*b*M-m*r*C+t*g*C)*Y,e[6]=(P*h*s-d*b*s-P*r*p+t*b*p+d*r*C-t*h*C)*Y,e[7]=(d*g*s-m*h*s+m*r*p-t*g*p-d*r*M+t*h*M)*Y,e[8]=N*Y,e[9]=(P*v*s-m*y*s-P*n*M+t*y*M+m*n*C-t*v*C)*Y,e[10]=(d*y*s-P*l*s+P*n*p-t*y*p-d*n*C+t*l*C)*Y,e[11]=(m*l*s-d*v*s-m*n*p+t*v*p+d*n*M-t*l*M)*Y,e[12]=R*Y,e[13]=(m*y*r-P*v*r+P*n*g-t*y*g-m*n*b+t*v*b)*Y,e[14]=(P*l*r-d*y*r-P*n*h+t*y*h+d*n*b-t*l*b)*Y,e[15]=(d*v*r-m*l*r+m*n*h-t*v*h-d*n*g+t*l*g)*Y,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,d=e.x,l=e.y,h=e.z,p=s*d,m=s*l;return this.set(p*d+n,p*l-r*h,p*h+r*l,0,p*l+r*h,m*l+n,m*h-r*d,0,p*h-r*l,m*h+r*d,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,d){return this.set(1,n,s,0,e,1,d,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,d=t._y,l=t._z,h=t._w,p=s+s,m=d+d,v=l+l,g=s*p,M=s*m,P=s*v,y=d*m,b=d*v,C=l*v,O=h*p,A=h*m,N=h*v,R=n.x,B=n.y,Y=n.z;return r[0]=(1-(y+C))*R,r[1]=(M+N)*R,r[2]=(P-A)*R,r[3]=0,r[4]=(M-N)*B,r[5]=(1-(g+C))*B,r[6]=(b+O)*B,r[7]=0,r[8]=(P+A)*Y,r[9]=(b-O)*Y,r[10]=(1-(g+y))*Y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Xi.set(r[0],r[1],r[2]).length();const d=Xi.set(r[4],r[5],r[6]).length(),l=Xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const p=1/s,m=1/d,v=1/l;return wn.elements[0]*=p,wn.elements[1]*=p,wn.elements[2]*=p,wn.elements[4]*=m,wn.elements[5]*=m,wn.elements[6]*=m,wn.elements[8]*=v,wn.elements[9]*=v,wn.elements[10]*=v,t.setFromRotationMatrix(wn),n.x=s,n.y=d,n.z=l,this}makePerspective(e,t,n,r,s,d){const l=this.elements,h=2*s/(t-e),p=2*s/(n-r),m=(t+e)/(t-e),v=(n+r)/(n-r),g=-(d+s)/(d-s),M=-2*d*s/(d-s);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=p,l[9]=v,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,d){const l=this.elements,h=1/(t-e),p=1/(n-r),m=1/(d-s),v=(t+e)*h,g=(n+r)*p,M=(d+s)*m;return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-v,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=-2*m,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xi=new K,wn=new Ct,dh=new K(0,0,0),fh=new K(1,1,1),si=new K,Lo=new K,un=new K,fc=new Ct,hc=new Ii;class es{constructor(e=0,t=0,n=0,r=es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],d=r[4],l=r[8],h=r[1],p=r[5],m=r[9],v=r[2],g=r[6],M=r[10];switch(t){case"XYZ":this._y=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-d,s)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-sn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,s)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hc.setFromEuler(this),this.setFromQuaternion(hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hh=0;const pc=new K,Yi=new Ii,Xn=new Ct,Ro=new K,Rr=new K,ph=new K,mh=new Ii,mc=new K(1,0,0),gc=new K(0,1,0),vc=new K(0,0,1),gh={type:"added"},_c={type:"removed"};class an extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new K,t=new es,n=new Ii,r=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function d(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Qt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(mc,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(vc,e)}translateOnAxis(e,t){return pc.copy(e).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mc,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ro.copy(e):Ro.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Rr,Ro,this.up):Xn.lookAt(Ro,Rr,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_c)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_c)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const d=this.children[n].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const d=this.children[r].getObjectsByProperty(e,t);d.length>0&&(n=n.concat(d))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,ph),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,d=r.length;s<d;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const v=h[p];s(e.shapes,v)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,p=this.material.length;h<p;h++)l.push(s(e.materials,this.material[h]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(s(e.animations,h))}}if(t){const l=d(e.geometries),h=d(e.materials),p=d(e.textures),m=d(e.images),v=d(e.shapes),g=d(e.skeletons),M=d(e.animations),P=d(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),p.length>0&&(n.textures=p),m.length>0&&(n.images=m),v.length>0&&(n.shapes=v),g.length>0&&(n.skeletons=g),M.length>0&&(n.animations=M),P.length>0&&(n.nodes=P)}return n.object=r,n;function d(l){const h=[];for(const p in l){const m=l[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}an.DEFAULT_UP=new K(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new K,Yn=new K,Js=new K,Zn=new K,Zi=new K,Ki=new K,xc=new K,ea=new K,ta=new K,na=new K;class Kn{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),En.subVectors(e,t),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){En.subVectors(r,t),Yn.subVectors(n,t),Js.subVectors(e,t);const d=En.dot(En),l=En.dot(Yn),h=En.dot(Js),p=Yn.dot(Yn),m=Yn.dot(Js),v=d*p-l*l;if(v===0)return s.set(-2,-1,-1);const g=1/v,M=(p*h-l*m)*g,P=(d*m-l*h)*g;return s.set(1-M-P,P,M)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,n,r,s,d,l,h){return this.getBarycoord(e,t,n,r,Zn),h.set(0,0),h.addScaledVector(s,Zn.x),h.addScaledVector(d,Zn.y),h.addScaledVector(l,Zn.z),h}static isFrontFacing(e,t,n,r){return En.subVectors(n,t),Yn.subVectors(e,t),En.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),En.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Kn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let d,l;Zi.subVectors(r,n),Ki.subVectors(s,n),ea.subVectors(e,n);const h=Zi.dot(ea),p=Ki.dot(ea);if(h<=0&&p<=0)return t.copy(n);ta.subVectors(e,r);const m=Zi.dot(ta),v=Ki.dot(ta);if(m>=0&&v<=m)return t.copy(r);const g=h*v-m*p;if(g<=0&&h>=0&&m<=0)return d=h/(h-m),t.copy(n).addScaledVector(Zi,d);na.subVectors(e,s);const M=Zi.dot(na),P=Ki.dot(na);if(P>=0&&M<=P)return t.copy(s);const y=M*p-h*P;if(y<=0&&p>=0&&P<=0)return l=p/(p-P),t.copy(n).addScaledVector(Ki,l);const b=m*P-M*v;if(b<=0&&v-m>=0&&M-P>=0)return xc.subVectors(s,r),l=(v-m)/(v-m+(M-P)),t.copy(r).addScaledVector(xc,l);const C=1/(b+y+g);return d=y*C,l=g*C,t.copy(n).addScaledVector(Zi,d).addScaledVector(Ki,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vh=0;class ts extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Zr(),this.name="",this.type="Material",this.blending=or,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const d=[];for(const l in s){const h=s[l];delete h.metadata,d.push(h)}return d}if(t){const s=r(e.textures),d=r(e.images);s.length>0&&(n.textures=s),d.length>0&&(n.images=d)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Io={h:0,s:0,l:0};function ia(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Zt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Zt.workingColorSpace){if(e=Jf(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,d=2*n-s;this.r=ia(d,s,e+1/3),this.g=ia(d,s,e),this.b=ia(d,s,e-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(e,t=Nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const d=r[1],l=r[2];switch(d){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Zt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Zt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const h=parseFloat(s[1])/360,p=parseFloat(s[2])/100,m=parseFloat(s[3])/100;return n(s[4]),this.setHSL(h,p,m,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],d=s.length;if(d===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Zt.toWorkingColorSpace(this,t),this;if(d===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Zt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const n=fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Zt.fromWorkingColorSpace(Wt.copy(this),e),sn(Wt.r*255,0,255)<<16^sn(Wt.g*255,0,255)<<8^sn(Wt.b*255,0,255)<<0}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,r=Wt.g,s=Wt.b,d=Math.max(n,r,s),l=Math.min(n,r,s);let h,p;const m=(l+d)/2;if(l===d)h=0,p=0;else{const v=d-l;switch(p=m<=.5?v/(d+l):v/(2-d-l),d){case n:h=(r-s)/v+(r<s?6:0);break;case r:h=(s-n)/v+2;break;case s:h=(n-r)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Nn){Zt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,r=Wt.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(Tn),Tn.h+=e,Tn.s+=t,Tn.l+=n,this.setHSL(Tn.h,Tn.s,Tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(Io);const n=Vs(Tn.h,Io.h,t),r=Vs(Tn.s,Io.s,t),s=Vs(Tn.l,Io.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new lt;lt.NAMES=fu;class $r extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new K,Oo=new Ve;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ac,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=To(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=To(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=To(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=To(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class hu extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pu extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _h=0;const xn=new Ct,ra=new an,$i=new K,dn=new Kr,Ir=new Kr,Ot=new K;class kn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Zr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(au(e)?pu:hu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ra);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,d=t.length;s<d;s++){const l=t[s];Ir.setFromBufferAttribute(l),this.morphTargetsRelative?(Ot.addVectors(dn.min,Ir.min),dn.expandByPoint(Ot),Ot.addVectors(dn.max,Ir.max),dn.expandByPoint(Ot)):(dn.expandByPoint(Ir.min),dn.expandByPoint(Ir.max))}dn.getCenter(n);let r=0;for(let s=0,d=e.count;s<d;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,d=t.length;s<d;s++){const l=t[s],h=this.morphTargetsRelative;for(let p=0,m=l.count;p<m;p++)Ot.fromBufferAttribute(l,p),h&&($i.fromBufferAttribute(e,p),Ot.add($i)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,d=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*l),4));const h=this.getAttribute("tangent").array,p=[],m=[];for(let H=0;H<l;H++)p[H]=new K,m[H]=new K;const v=new K,g=new K,M=new K,P=new Ve,y=new Ve,b=new Ve,C=new K,O=new K;function A(H,le,ue){v.fromArray(r,H*3),g.fromArray(r,le*3),M.fromArray(r,ue*3),P.fromArray(d,H*2),y.fromArray(d,le*2),b.fromArray(d,ue*2),g.sub(v),M.sub(v),y.sub(P),b.sub(P);const Q=1/(y.x*b.y-b.x*y.y);isFinite(Q)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(M,-y.y).multiplyScalar(Q),O.copy(M).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(Q),p[H].add(C),p[le].add(C),p[ue].add(C),m[H].add(O),m[le].add(O),m[ue].add(O))}let N=this.groups;N.length===0&&(N=[{start:0,count:n.length}]);for(let H=0,le=N.length;H<le;++H){const ue=N[H],Q=ue.start,W=ue.count;for(let V=Q,ae=Q+W;V<ae;V+=3)A(n[V+0],n[V+1],n[V+2])}const R=new K,B=new K,Y=new K,E=new K;function z(H){Y.fromArray(s,H*3),E.copy(Y);const le=p[H];R.copy(le),R.sub(Y.multiplyScalar(Y.dot(le))).normalize(),B.crossVectors(E,le);const Q=B.dot(m[H])<0?-1:1;h[H*4]=R.x,h[H*4+1]=R.y,h[H*4+2]=R.z,h[H*4+3]=Q}for(let H=0,le=N.length;H<le;++H){const ue=N[H],Q=ue.start,W=ue.count;for(let V=Q,ae=Q+W;V<ae;V+=3)z(n[V+0]),z(n[V+1]),z(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,M=n.count;g<M;g++)n.setXYZ(g,0,0,0);const r=new K,s=new K,d=new K,l=new K,h=new K,p=new K,m=new K,v=new K;if(e)for(let g=0,M=e.count;g<M;g+=3){const P=e.getX(g+0),y=e.getX(g+1),b=e.getX(g+2);r.fromBufferAttribute(t,P),s.fromBufferAttribute(t,y),d.fromBufferAttribute(t,b),m.subVectors(d,s),v.subVectors(r,s),m.cross(v),l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,y),p.fromBufferAttribute(n,b),l.add(m),h.add(m),p.add(m),n.setXYZ(P,l.x,l.y,l.z),n.setXYZ(y,h.x,h.y,h.z),n.setXYZ(b,p.x,p.y,p.z)}else for(let g=0,M=t.count;g<M;g+=3)r.fromBufferAttribute(t,g+0),s.fromBufferAttribute(t,g+1),d.fromBufferAttribute(t,g+2),m.subVectors(d,s),v.subVectors(r,s),m.cross(v),n.setXYZ(g+0,m.x,m.y,m.z),n.setXYZ(g+1,m.x,m.y,m.z),n.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(l,h){const p=l.array,m=l.itemSize,v=l.normalized,g=new p.constructor(h.length*m);let M=0,P=0;for(let y=0,b=h.length;y<b;y++){l.isInterleavedBufferAttribute?M=h[y]*l.data.stride+l.offset:M=h[y]*m;for(let C=0;C<m;C++)g[P++]=p[M++]}return new Rn(g,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],p=e(h,n);t.setAttribute(l,p)}const s=this.morphAttributes;for(const l in s){const h=[],p=s[l];for(let m=0,v=p.length;m<v;m++){const g=p[m],M=e(g,n);h.push(M)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let l=0,h=d.length;l<h;l++){const p=d[l];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const p=n[h];e.data.attributes[h]=p.toJSON(e.data)}const r={};let s=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let v=0,g=p.length;v<g;v++){const M=p[v];m.push(M.toJSON(e.data))}m.length>0&&(r[h]=m,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const m=r[p];this.setAttribute(p,m.clone(t))}const s=e.morphAttributes;for(const p in s){const m=[],v=s[p];for(let g=0,M=v.length;g<M;g++)m.push(v[g].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,m=d.length;p<m;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new Ct,zn=new uh,Fo=new Ra,bc=new K,Or=new K,Fr=new K,zr=new K,oa=new K,zo=new K,No=new Ve,Uo=new Ve,ko=new Ve,sa=new K,Bo=new K;class Dn extends an{constructor(e=new kn,t=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,d=r.length;s<d;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,d=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){zo.set(0,0,0);for(let h=0,p=s.length;h<p;h++){const m=l[h],v=s[h];m!==0&&(oa.fromBufferAttribute(v,e),d?zo.addScaledVector(oa,m):zo.addScaledVector(oa.sub(t),m))}t.add(zo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),zn.copy(e.ray).recast(e.near),Fo.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Fo,bc)===null||zn.origin.distanceToSquared(bc)>(e.far-e.near)**2))||(yc.copy(s).invert(),zn.copy(e.ray).applyMatrix4(yc),n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1))return;let d;const l=n.index,h=n.attributes.position,p=n.attributes.uv,m=n.attributes.uv2,v=n.groups,g=n.drawRange;if(l!==null)if(Array.isArray(r))for(let M=0,P=v.length;M<P;M++){const y=v[M],b=r[y.materialIndex],C=Math.max(y.start,g.start),O=Math.min(l.count,Math.min(y.start+y.count,g.start+g.count));for(let A=C,N=O;A<N;A+=3){const R=l.getX(A),B=l.getX(A+1),Y=l.getX(A+2);d=Go(this,b,e,zn,p,m,R,B,Y),d&&(d.faceIndex=Math.floor(A/3),d.face.materialIndex=y.materialIndex,t.push(d))}}else{const M=Math.max(0,g.start),P=Math.min(l.count,g.start+g.count);for(let y=M,b=P;y<b;y+=3){const C=l.getX(y),O=l.getX(y+1),A=l.getX(y+2);d=Go(this,r,e,zn,p,m,C,O,A),d&&(d.faceIndex=Math.floor(y/3),t.push(d))}}else if(h!==void 0)if(Array.isArray(r))for(let M=0,P=v.length;M<P;M++){const y=v[M],b=r[y.materialIndex],C=Math.max(y.start,g.start),O=Math.min(h.count,Math.min(y.start+y.count,g.start+g.count));for(let A=C,N=O;A<N;A+=3){const R=A,B=A+1,Y=A+2;d=Go(this,b,e,zn,p,m,R,B,Y),d&&(d.faceIndex=Math.floor(A/3),d.face.materialIndex=y.materialIndex,t.push(d))}}else{const M=Math.max(0,g.start),P=Math.min(h.count,g.start+g.count);for(let y=M,b=P;y<b;y+=3){const C=y,O=y+1,A=y+2;d=Go(this,r,e,zn,p,m,C,O,A),d&&(d.faceIndex=Math.floor(y/3),t.push(d))}}}}function xh(a,e,t,n,r,s,d,l){let h;if(e.side===pn?h=n.intersectTriangle(d,s,r,!0,l):h=n.intersectTriangle(r,s,d,e.side===di,l),h===null)return null;Bo.copy(l),Bo.applyMatrix4(a.matrixWorld);const p=t.ray.origin.distanceTo(Bo);return p<t.near||p>t.far?null:{distance:p,point:Bo.clone(),object:a}}function Go(a,e,t,n,r,s,d,l,h){a.getVertexPosition(d,Or),a.getVertexPosition(l,Fr),a.getVertexPosition(h,zr);const p=xh(a,e,t,n,Or,Fr,zr,sa);if(p){r&&(No.fromBufferAttribute(r,d),Uo.fromBufferAttribute(r,l),ko.fromBufferAttribute(r,h),p.uv=Kn.getUV(sa,Or,Fr,zr,No,Uo,ko,new Ve)),s&&(No.fromBufferAttribute(s,d),Uo.fromBufferAttribute(s,l),ko.fromBufferAttribute(s,h),p.uv2=Kn.getUV(sa,Or,Fr,zr,No,Uo,ko,new Ve));const m={a:d,b:l,c:h,normal:new K,materialIndex:0};Kn.getNormal(Or,Fr,zr,m.normal),p.face=m}return p}class Qr extends kn{constructor(e=1,t=1,n=1,r=1,s=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:d};const l=this;r=Math.floor(r),s=Math.floor(s),d=Math.floor(d);const h=[],p=[],m=[],v=[];let g=0,M=0;P("z","y","x",-1,-1,n,t,e,d,s,0),P("z","y","x",1,-1,n,t,-e,d,s,1),P("x","z","y",1,1,e,n,t,r,d,2),P("x","z","y",1,-1,e,n,-t,r,d,3),P("x","y","z",1,-1,e,t,n,r,s,4),P("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(m,3)),this.setAttribute("uv",new Jt(v,2));function P(y,b,C,O,A,N,R,B,Y,E,z){const H=N/Y,le=R/E,ue=N/2,Q=R/2,W=B/2,V=Y+1,ae=E+1;let _e=0,ce=0;const de=new K;for(let pe=0;pe<ae;pe++){const Le=pe*le-Q;for(let ee=0;ee<V;ee++){const fe=ee*H-ue;de[y]=fe*O,de[b]=Le*A,de[C]=W,p.push(de.x,de.y,de.z),de[y]=0,de[b]=0,de[C]=B>0?1:-1,m.push(de.x,de.y,de.z),v.push(ee/Y),v.push(1-pe/E),_e+=1}}for(let pe=0;pe<E;pe++)for(let Le=0;Le<Y;Le++){const ee=g+Le+V*pe,fe=g+Le+V*(pe+1),te=g+(Le+1)+V*(pe+1),$=g+(Le+1)+V*pe;h.push(ee,fe,$),h.push(fe,te,$),ce+=6}l.addGroup(M,ce,z),M+=ce,g+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dr(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const r=a[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Kt(a){const e={};for(let t=0;t<a.length;t++){const n=dr(a[t]);for(const r in n)e[r]=n[r]}return e}function yh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function mu(a){return a.getRenderTarget()===null&&a.outputEncoding===vt?Nn:Xr}const Qo={clone:dr,merge:Kt};var bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bh,this.fragmentShader=Mh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=yh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const d=this.uniforms[r].value;d&&d.isTexture?t.uniforms[r]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[r]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[r]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[r]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[r]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[r]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[r]={type:"m4",value:d.toArray()}:t.uniforms[r]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gu extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends gu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,p=d.fullHeight;s+=d.offsetX*r/h,t-=d.offsetY*n/p,r*=d.width/h,n*=d.height/p}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,Ji=1;class Sh extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new bn(Qi,Ji,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new bn(Qi,Ji,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const d=new bn(Qi,Ji,e,t);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(0,1,0),this.add(d);const l=new bn(Qi,Ji,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(0,-1,0),this.add(l);const h=new bn(Qi,Ji,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,1),this.add(h);const p=new bn(Qi,Ji,e,t);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,-1),this.add(p)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,d,l,h,p]=this.children,m=e.getRenderTarget(),v=e.toneMapping,g=e.xr.enabled;e.toneMapping=Qn,e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,d),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5),e.render(t,p),e.setRenderTarget(m),e.toneMapping=v,e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vu extends mn{constructor(e,t,n,r,s,d,l,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,n,r,s,d,l,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wh extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qr(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:ui});s.uniforms.tEquirect.value=t;const d=new Dn(r,s),l=t.minFilter;return t.minFilter===jr&&(t.minFilter=yn),new Sh(1,10,this).update(e,d),t.minFilter=l,d.geometry.dispose(),d.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,n,r);e.setRenderTarget(s)}}const aa=new K,Eh=new K,Th=new Qt;class Si{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=aa.subVectors(n,t).cross(Eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(aa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Th.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Ra,Vo=new K;class _u{constructor(e=new Si,t=new Si,n=new Si,r=new Si,s=new Si,d=new Si){this.planes=[e,t,n,r,s,d]}set(e,t,n,r,s,d){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(d),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],d=n[2],l=n[3],h=n[4],p=n[5],m=n[6],v=n[7],g=n[8],M=n[9],P=n[10],y=n[11],b=n[12],C=n[13],O=n[14],A=n[15];return t[0].setComponents(l-r,v-h,y-g,A-b).normalize(),t[1].setComponents(l+r,v+h,y+g,A+b).normalize(),t[2].setComponents(l+s,v+p,y+M,A+C).normalize(),t[3].setComponents(l-s,v-p,y-M,A-C).normalize(),t[4].setComponents(l-d,v-m,y-P,A-O).normalize(),t[5].setComponents(l+d,v+m,y+P,A+O).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Vo.x=r.normal.x>0?e.max.x:e.min.x,Vo.y=r.normal.y>0?e.max.y:e.min.y,Vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xu(){let a=null,e=!1,t=null,n=null;function r(s,d){t(s,d),n=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Ah(a,e){const t=e.isWebGL2,n=new WeakMap;function r(p,m){const v=p.array,g=p.usage,M=a.createBuffer();a.bindBuffer(m,M),a.bufferData(m,v,g),p.onUploadCallback();let P;if(v instanceof Float32Array)P=5126;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)P=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else P=5123;else if(v instanceof Int16Array)P=5122;else if(v instanceof Uint32Array)P=5125;else if(v instanceof Int32Array)P=5124;else if(v instanceof Int8Array)P=5120;else if(v instanceof Uint8Array)P=5121;else if(v instanceof Uint8ClampedArray)P=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:M,type:P,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version}}function s(p,m,v){const g=m.array,M=m.updateRange;a.bindBuffer(v,p),M.count===-1?a.bufferSubData(v,0,g):(t?a.bufferSubData(v,M.offset*g.BYTES_PER_ELEMENT,g,M.offset,M.count):a.bufferSubData(v,M.offset*g.BYTES_PER_ELEMENT,g.subarray(M.offset,M.offset+M.count)),M.count=-1),m.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),n.get(p)}function l(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=n.get(p);m&&(a.deleteBuffer(m.buffer),n.delete(p))}function h(p,m){if(p.isGLBufferAttribute){const g=n.get(p);(!g||g.version<p.version)&&n.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=n.get(p);v===void 0?n.set(p,r(p,m)):v.version<p.version&&(s(v.buffer,p,m),v.version=p.version)}return{get:d,remove:l,update:h}}class Ia extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,d=t/2,l=Math.floor(n),h=Math.floor(r),p=l+1,m=h+1,v=e/l,g=t/h,M=[],P=[],y=[],b=[];for(let C=0;C<m;C++){const O=C*g-d;for(let A=0;A<p;A++){const N=A*v-s;P.push(N,-O,0),y.push(0,0,1),b.push(A/l),b.push(1-C/h)}}for(let C=0;C<h;C++)for(let O=0;O<l;O++){const A=O+p*C,N=O+p*(C+1),R=O+1+p*(C+1),B=O+1+p*C;M.push(A,N,B),M.push(N,R,B)}this.setIndex(M),this.setAttribute("position",new Jt(P,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ch=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oh="vec3 transformed = vec3( position );",Fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Nh=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Uh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
    
    vec2 lodFudge = pow( 1.95, lod ) / fullSize;
	return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
		   g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
}
vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
	vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
	vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
	vec2 fLodSizeInv = 1.0 / fLodSize;
	vec2 cLodSizeInv = 1.0 / cLodSize;
	vec2 fullSize = vec2( textureSize( sampler, 0 ) );
	vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
	vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
	return mix( fSample, cSample, fract( lod ) );
}`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
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
}`,fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,vp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Sp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,wp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Np=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Vp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,_m=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,xm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ym=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Mm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Sm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Fm=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,jm=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Zm=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,$m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,ig=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,rg=`uniform float rotation;
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
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Je={alphamap_fragment:Ph,alphamap_pars_fragment:Ch,alphatest_fragment:Dh,alphatest_pars_fragment:Lh,aomap_fragment:Rh,aomap_pars_fragment:Ih,begin_vertex:Oh,beginnormal_vertex:Fh,bsdfs:zh,iridescence_fragment:Nh,bumpmap_pars_fragment:Uh,clipping_planes_fragment:kh,clipping_planes_pars_fragment:Bh,clipping_planes_pars_vertex:Gh,clipping_planes_vertex:Vh,color_fragment:Hh,color_pars_fragment:Wh,color_pars_vertex:jh,color_vertex:qh,common:Xh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:Zh,displacementmap_pars_vertex:Kh,displacementmap_vertex:$h,emissivemap_fragment:Qh,emissivemap_pars_fragment:Jh,encodings_fragment:ep,encodings_pars_fragment:tp,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:rp,envmap_pars_vertex:op,envmap_physical_pars_fragment:vp,envmap_vertex:sp,fog_vertex:ap,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:up,gradientmap_pars_fragment:dp,lightmap_fragment:fp,lightmap_pars_fragment:hp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:_p,lights_toon_pars_fragment:xp,lights_phong_fragment:yp,lights_phong_pars_fragment:bp,lights_physical_fragment:Mp,lights_physical_pars_fragment:Sp,lights_fragment_begin:wp,lights_fragment_maps:Ep,lights_fragment_end:Tp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Pp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Dp,map_fragment:Lp,map_pars_fragment:Rp,map_particle_fragment:Ip,map_particle_pars_fragment:Op,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:zp,morphcolor_vertex:Np,morphnormal_vertex:Up,morphtarget_pars_vertex:kp,morphtarget_vertex:Bp,normal_fragment_begin:Gp,normal_fragment_maps:Vp,normal_pars_fragment:Hp,normal_pars_vertex:Wp,normal_vertex:jp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Xp,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:Kp,output_fragment:$p,packing:Qp,premultiplied_alpha_fragment:Jp,project_vertex:em,dithering_fragment:tm,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:sm,shadowmap_vertex:am,shadowmask_pars_fragment:lm,skinbase_vertex:cm,skinning_pars_vertex:um,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:hm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:vm,transmission_pars_fragment:_m,uv_pars_fragment:xm,uv_pars_vertex:ym,uv_vertex:bm,uv2_pars_fragment:Mm,uv2_pars_vertex:Sm,uv2_vertex:wm,worldpos_vertex:Em,background_vert:Tm,background_frag:Am,backgroundCube_vert:Pm,backgroundCube_frag:Cm,cube_vert:Dm,cube_frag:Lm,depth_vert:Rm,depth_frag:Im,distanceRGBA_vert:Om,distanceRGBA_frag:Fm,equirect_vert:zm,equirect_frag:Nm,linedashed_vert:Um,linedashed_frag:km,meshbasic_vert:Bm,meshbasic_frag:Gm,meshlambert_vert:Vm,meshlambert_frag:Hm,meshmatcap_vert:Wm,meshmatcap_frag:jm,meshnormal_vert:qm,meshnormal_frag:Xm,meshphong_vert:Ym,meshphong_frag:Zm,meshphysical_vert:Km,meshphysical_frag:$m,meshtoon_vert:Qm,meshtoon_frag:Jm,points_vert:eg,points_frag:tg,shadow_vert:ng,shadow_frag:ig,sprite_vert:rg,sprite_frag:og},Me={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Qt},uv2Transform:{value:new Qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}}},Un={basic:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new lt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Kt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Kt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new lt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Kt([Me.points,Me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Kt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Kt([Me.common,Me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Kt([Me.sprite,Me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Kt([Me.common,Me.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Kt([Me.lights,Me.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Un.physical={uniforms:Kt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ho={r:0,b:0,g:0};function sg(a,e,t,n,r,s,d){const l=new lt(0);let h=s===!0?0:1,p,m,v=null,g=0,M=null;function P(b,C){let O=!1,A=C.isScene===!0?C.background:null;A&&A.isTexture&&(A=(C.backgroundBlurriness>0?t:e).get(A));const N=a.xr,R=N.getSession&&N.getSession();R&&R.environmentBlendMode==="additive"&&(A=null),A===null?y(l,h):A&&A.isColor&&(y(A,1),O=!0),(a.autoClear||O)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Jo)?(m===void 0&&(m=new Dn(new Qr(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:dr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,Y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=A,m.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=A.encoding!==vt,(v!==A||g!==A.version||M!==a.toneMapping)&&(m.material.needsUpdate=!0,v=A,g=A.version,M=a.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new Dn(new Ia(2,2),new hn({name:"BackgroundMaterial",uniforms:dr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=A.encoding!==vt,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||g!==A.version||M!==a.toneMapping)&&(p.material.needsUpdate=!0,v=A,g=A.version,M=a.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function y(b,C){b.getRGB(Ho,mu(a)),n.buffers.color.setClear(Ho.r,Ho.g,Ho.b,C,d)}return{getClearColor:function(){return l},setClearColor:function(b,C=1){l.set(b),h=C,y(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,y(l,h)},render:P}}function ag(a,e,t,n){const r=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),d=n.isWebGL2||s!==null,l={},h=b(null);let p=h,m=!1;function v(W,V,ae,_e,ce){let de=!1;if(d){const pe=y(_e,ae,V);p!==pe&&(p=pe,M(p.object)),de=C(W,_e,ae,ce),de&&O(W,_e,ae,ce)}else{const pe=V.wireframe===!0;(p.geometry!==_e.id||p.program!==ae.id||p.wireframe!==pe)&&(p.geometry=_e.id,p.program=ae.id,p.wireframe=pe,de=!0)}ce!==null&&t.update(ce,34963),(de||m)&&(m=!1,E(W,V,ae,_e),ce!==null&&a.bindBuffer(34963,t.get(ce).buffer))}function g(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function M(W){return n.isWebGL2?a.bindVertexArray(W):s.bindVertexArrayOES(W)}function P(W){return n.isWebGL2?a.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function y(W,V,ae){const _e=ae.wireframe===!0;let ce=l[W.id];ce===void 0&&(ce={},l[W.id]=ce);let de=ce[V.id];de===void 0&&(de={},ce[V.id]=de);let pe=de[_e];return pe===void 0&&(pe=b(g()),de[_e]=pe),pe}function b(W){const V=[],ae=[],_e=[];for(let ce=0;ce<r;ce++)V[ce]=0,ae[ce]=0,_e[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ae,attributeDivisors:_e,object:W,attributes:{},index:null}}function C(W,V,ae,_e){const ce=p.attributes,de=V.attributes;let pe=0;const Le=ae.getAttributes();for(const ee in Le)if(Le[ee].location>=0){const te=ce[ee];let $=de[ee];if($===void 0&&(ee==="instanceMatrix"&&W.instanceMatrix&&($=W.instanceMatrix),ee==="instanceColor"&&W.instanceColor&&($=W.instanceColor)),te===void 0||te.attribute!==$||$&&te.data!==$.data)return!0;pe++}return p.attributesNum!==pe||p.index!==_e}function O(W,V,ae,_e){const ce={},de=V.attributes;let pe=0;const Le=ae.getAttributes();for(const ee in Le)if(Le[ee].location>=0){let te=de[ee];te===void 0&&(ee==="instanceMatrix"&&W.instanceMatrix&&(te=W.instanceMatrix),ee==="instanceColor"&&W.instanceColor&&(te=W.instanceColor));const $={};$.attribute=te,te&&te.data&&($.data=te.data),ce[ee]=$,pe++}p.attributes=ce,p.attributesNum=pe,p.index=_e}function A(){const W=p.newAttributes;for(let V=0,ae=W.length;V<ae;V++)W[V]=0}function N(W){R(W,0)}function R(W,V){const ae=p.newAttributes,_e=p.enabledAttributes,ce=p.attributeDivisors;ae[W]=1,_e[W]===0&&(a.enableVertexAttribArray(W),_e[W]=1),ce[W]!==V&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,V),ce[W]=V)}function B(){const W=p.newAttributes,V=p.enabledAttributes;for(let ae=0,_e=V.length;ae<_e;ae++)V[ae]!==W[ae]&&(a.disableVertexAttribArray(ae),V[ae]=0)}function Y(W,V,ae,_e,ce,de){n.isWebGL2===!0&&(ae===5124||ae===5125)?a.vertexAttribIPointer(W,V,ae,ce,de):a.vertexAttribPointer(W,V,ae,_e,ce,de)}function E(W,V,ae,_e){if(n.isWebGL2===!1&&(W.isInstancedMesh||_e.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const ce=_e.attributes,de=ae.getAttributes(),pe=V.defaultAttributeValues;for(const Le in de){const ee=de[Le];if(ee.location>=0){let fe=ce[Le];if(fe===void 0&&(Le==="instanceMatrix"&&W.instanceMatrix&&(fe=W.instanceMatrix),Le==="instanceColor"&&W.instanceColor&&(fe=W.instanceColor)),fe!==void 0){const te=fe.normalized,$=fe.itemSize,Ae=t.get(fe);if(Ae===void 0)continue;const Ce=Ae.buffer,De=Ae.type,Pe=Ae.bytesPerElement;if(fe.isInterleavedBufferAttribute){const ke=fe.data,He=ke.stride,Ye=fe.offset;if(ke.isInstancedInterleavedBuffer){for(let it=0;it<ee.locationSize;it++)R(ee.location+it,ke.meshPerAttribute);W.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let it=0;it<ee.locationSize;it++)N(ee.location+it);a.bindBuffer(34962,Ce);for(let it=0;it<ee.locationSize;it++)Y(ee.location+it,$/ee.locationSize,De,te,He*Pe,(Ye+$/ee.locationSize*it)*Pe)}else{if(fe.isInstancedBufferAttribute){for(let ke=0;ke<ee.locationSize;ke++)R(ee.location+ke,fe.meshPerAttribute);W.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<ee.locationSize;ke++)N(ee.location+ke);a.bindBuffer(34962,Ce);for(let ke=0;ke<ee.locationSize;ke++)Y(ee.location+ke,$/ee.locationSize,De,te,$*Pe,$/ee.locationSize*ke*Pe)}}else if(pe!==void 0){const te=pe[Le];if(te!==void 0)switch(te.length){case 2:a.vertexAttrib2fv(ee.location,te);break;case 3:a.vertexAttrib3fv(ee.location,te);break;case 4:a.vertexAttrib4fv(ee.location,te);break;default:a.vertexAttrib1fv(ee.location,te)}}}}B()}function z(){ue();for(const W in l){const V=l[W];for(const ae in V){const _e=V[ae];for(const ce in _e)P(_e[ce].object),delete _e[ce];delete V[ae]}delete l[W]}}function H(W){if(l[W.id]===void 0)return;const V=l[W.id];for(const ae in V){const _e=V[ae];for(const ce in _e)P(_e[ce].object),delete _e[ce];delete V[ae]}delete l[W.id]}function le(W){for(const V in l){const ae=l[V];if(ae[W.id]===void 0)continue;const _e=ae[W.id];for(const ce in _e)P(_e[ce].object),delete _e[ce];delete ae[W.id]}}function ue(){Q(),m=!0,p!==h&&(p=h,M(p.object))}function Q(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:v,reset:ue,resetDefaultState:Q,dispose:z,releaseStatesOfGeometry:H,releaseStatesOfProgram:le,initAttributes:A,enableAttribute:N,disableUnusedAttributes:B}}function lg(a,e,t,n){const r=n.isWebGL2;let s;function d(p){s=p}function l(p,m){a.drawArrays(s,p,m),t.update(m,s,1)}function h(p,m,v){if(v===0)return;let g,M;if(r)g=a,M="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[M](s,p,m,v),t.update(m,s,v)}this.setMode=d,this.render=l,this.renderInstances=h}function cg(a,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(Y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(Y){if(Y==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";Y="mediump"}return Y==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let l=t.precision!==void 0?t.precision:"highp";const h=s(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=d||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,v=a.getParameter(34930),g=a.getParameter(35660),M=a.getParameter(3379),P=a.getParameter(34076),y=a.getParameter(34921),b=a.getParameter(36347),C=a.getParameter(36348),O=a.getParameter(36349),A=g>0,N=d||e.has("OES_texture_float"),R=A&&N,B=d?a.getParameter(36183):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:m,maxTextures:v,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:P,maxAttributes:y,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:O,vertexTextures:A,floatFragmentTextures:N,floatVertexTextures:R,maxSamples:B}}function ug(a){const e=this;let t=null,n=0,r=!1,s=!1;const d=new Si,l=new Qt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||n!==0||r;return r=g,n=v.length,M},this.beginShadows=function(){s=!0,m(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(v,g){t=m(v,g,0)},this.setState=function(v,g,M){const P=v.clippingPlanes,y=v.clipIntersection,b=v.clipShadows,C=a.get(v);if(!r||P===null||P.length===0||s&&!b)s?m(null):p();else{const O=s?0:n,A=O*4;let N=C.clippingState||null;h.value=N,N=m(P,g,A,M);for(let R=0;R!==A;++R)N[R]=t[R];C.clippingState=N,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(v,g,M,P){const y=v!==null?v.length:0;let b=null;if(y!==0){if(b=h.value,P!==!0||b===null){const C=M+y*4,O=g.matrixWorldInverse;l.getNormalMatrix(O),(b===null||b.length<C)&&(b=new Float32Array(C));for(let A=0,N=M;A!==y;++A,N+=4)d.copy(v[A]).applyMatrix4(O,l),d.normal.toArray(b,N),b[N+3]=d.constant}h.value=b,h.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,b}}function dg(a){let e=new WeakMap;function t(d,l){return l===_a?d.mapping=lr:l===xa&&(d.mapping=cr),d}function n(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const l=d.mapping;if(l===_a||l===xa)if(e.has(d)){const h=e.get(d).texture;return t(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const p=new wh(h.height/2);return p.fromEquirectangularTexture(a,d),e.set(d,p),d.addEventListener("dispose",r),t(p.texture,d.mapping)}else return null}}return d}function r(d){const l=d.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class yu extends gu{constructor(e=-1,t=1,n=1,r=-1,s=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,d=n+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=p*this.view.offsetX,d=s+p*this.view.width,l-=m*this.view.offsetY,h=l-m*this.view.height}this.projectionMatrix.makeOrthographic(s,d,l,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ir=4,Mc=[.125,.215,.35,.446,.526,.582],Ei=20,la=new yu,Sc=new lt;let ca=null;const wi=(1+Math.sqrt(5))/2,tr=1/wi,wc=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,wi,tr),new K(0,wi,-tr),new K(tr,0,wi),new K(-tr,0,wi),new K(wi,tr,0),new K(-wi,tr,0)];class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ca=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca),e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:qr,format:Cn,encoding:Ri,depthBuffer:!1},r=Tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(s)),this._blurMaterial=hg(s,e,t)}return r}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,r){const l=new bn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,g=m.toneMapping;m.getClearColor(Sc),m.toneMapping=Qn,m.autoClear=!1;const M=new $r({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),P=new Dn(new Qr,M);let y=!1;const b=e.background;b?b.isColor&&(M.color.copy(b),e.background=null,y=!0):(M.color.copy(Sc),y=!0);for(let C=0;C<6;C++){const O=C%3;O===0?(l.up.set(0,h[C],0),l.lookAt(p[C],0,0)):O===1?(l.up.set(0,0,h[C]),l.lookAt(0,p[C],0)):(l.up.set(0,h[C],0),l.lookAt(0,0,p[C]));const A=this._cubeSize;Wo(r,O*A,C>2?A:0,A,A),m.setRenderTarget(r),y&&m.render(P,l),m.render(e,l)}P.geometry.dispose(),P.material.dispose(),m.toneMapping=g,m.autoClear=v,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===lr||e.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const s=r?this._cubemapMaterial:this._equirectMaterial,d=new Dn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const h=this._cubeSize;Wo(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(d,la)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),d=wc[(r-1)%wc.length];this._blur(e,r-1,r,s,d)}t.autoClear=n}_blur(e,t,n,r,s){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,n,r,"latitudinal",s),this._halfBlur(d,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,d,l){const h=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Dn(this._lodPlanes[r],p),g=p.uniforms,M=this._sizeLods[n]-1,P=isFinite(s)?Math.PI/(2*M):2*Math.PI/(2*Ei-1),y=s/P,b=isFinite(s)?1+Math.floor(m*y):Ei;b>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Ei}`);const C=[];let O=0;for(let Y=0;Y<Ei;++Y){const E=Y/y,z=Math.exp(-E*E/2);C.push(z),Y===0?O+=z:Y<b&&(O+=2*z)}for(let Y=0;Y<C.length;Y++)C[Y]=C[Y]/O;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=C,g.latitudinal.value=d==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:A}=this;g.dTheta.value=P,g.mipInt.value=A-n;const N=this._sizeLods[r],R=3*N*(r>A-ir?r-A+ir:0),B=4*(this._cubeSize-N);Wo(t,R,B,3*N,2*N),h.setRenderTarget(t),h.render(v,la)}}function fg(a){const e=[],t=[],n=[];let r=a;const s=a-ir+1+Mc.length;for(let d=0;d<s;d++){const l=Math.pow(2,r);t.push(l);let h=1/l;d>a-ir?h=Mc[d-a+ir-1]:d===0&&(h=0),n.push(h);const p=1/(l-2),m=-p,v=1+p,g=[m,m,v,m,v,v,m,m,v,v,m,v],M=6,P=6,y=3,b=2,C=1,O=new Float32Array(y*P*M),A=new Float32Array(b*P*M),N=new Float32Array(C*P*M);for(let B=0;B<M;B++){const Y=B%3*2/3-1,E=B>2?0:-1,z=[Y,E,0,Y+2/3,E,0,Y+2/3,E+1,0,Y,E,0,Y+2/3,E+1,0,Y,E+1,0];O.set(z,y*P*B),A.set(g,b*P*B);const H=[B,B,B,B,B,B];N.set(H,C*P*B)}const R=new kn;R.setAttribute("position",new Rn(O,y)),R.setAttribute("uv",new Rn(A,b)),R.setAttribute("faceIndex",new Rn(N,C)),e.push(R),r>ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tc(a,e,t){const n=new Ln(a,e,t);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(a,e,t,n,r){a.viewport.set(e,t,n,r),a.scissor.set(e,t,n,r)}function hg(a,e,t){const n=new Float32Array(Ei),r=new K(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ac(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Pc(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}function pg(a){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,p=h===_a||h===xa,m=h===lr||h===cr;if(p||m)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let v=e.get(l);return t===null&&(t=new Ec(a)),v=p?t.fromEquirectangular(l,v):t.fromCubemap(l,v),e.set(l,v),v.texture}else{if(e.has(l))return e.get(l).texture;{const v=l.image;if(p&&v&&v.height>0||m&&v&&r(v)){t===null&&(t=new Ec(a));const g=p?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,g),l.addEventListener("dispose",s),g.texture}else return null}}}return l}function r(l){let h=0;const p=6;for(let m=0;m<p;m++)l[m]!==void 0&&h++;return h===p}function s(l){const h=l.target;h.removeEventListener("dispose",s);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:d}}function mg(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function gg(a,e,t,n){const r={},s=new WeakMap;function d(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const P in g.attributes)e.remove(g.attributes[P]);g.removeEventListener("dispose",d),delete r[g.id];const M=s.get(g);M&&(e.remove(M),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(v,g){return r[g.id]===!0||(g.addEventListener("dispose",d),r[g.id]=!0,t.memory.geometries++),g}function h(v){const g=v.attributes;for(const P in g)e.update(g[P],34962);const M=v.morphAttributes;for(const P in M){const y=M[P];for(let b=0,C=y.length;b<C;b++)e.update(y[b],34962)}}function p(v){const g=[],M=v.index,P=v.attributes.position;let y=0;if(M!==null){const O=M.array;y=M.version;for(let A=0,N=O.length;A<N;A+=3){const R=O[A+0],B=O[A+1],Y=O[A+2];g.push(R,B,B,Y,Y,R)}}else{const O=P.array;y=P.version;for(let A=0,N=O.length/3-1;A<N;A+=3){const R=A+0,B=A+1,Y=A+2;g.push(R,B,B,Y,Y,R)}}const b=new(au(g)?pu:hu)(g,1);b.version=y;const C=s.get(v);C&&e.remove(C),s.set(v,b)}function m(v){const g=s.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&p(v)}else p(v);return s.get(v)}return{get:l,update:h,getWireframeAttribute:m}}function vg(a,e,t,n){const r=n.isWebGL2;let s;function d(g){s=g}let l,h;function p(g){l=g.type,h=g.bytesPerElement}function m(g,M){a.drawElements(s,M,l,g*h),t.update(M,s,1)}function v(g,M,P){if(P===0)return;let y,b;if(r)y=a,b="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),b="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[b](s,M,l,g*h,P),t.update(M,s,P)}this.setMode=d,this.setIndex=p,this.render=m,this.renderInstances=v}function _g(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,d,l){switch(t.calls++,d){case 4:t.triangles+=l*(s/3);break;case 1:t.lines+=l*(s/2);break;case 3:t.lines+=l*(s-1);break;case 2:t.lines+=l*s;break;case 0:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xg(a,e){return a[0]-e[0]}function yg(a,e){return Math.abs(e[1])-Math.abs(a[1])}function bg(a,e,t){const n={},r=new Float32Array(8),s=new WeakMap,d=new Gt,l=[];for(let p=0;p<8;p++)l[p]=[p,0];function h(p,m,v){const g=p.morphTargetInfluences;if(e.isWebGL2===!0){const M=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,P=M!==void 0?M.length:0;let y=s.get(m);if(y===void 0||y.count!==P){let W=function(){ue.dispose(),s.delete(m),m.removeEventListener("dispose",W)};y!==void 0&&y.texture.dispose();const O=m.morphAttributes.position!==void 0,A=m.morphAttributes.normal!==void 0,N=m.morphAttributes.color!==void 0,R=m.morphAttributes.position||[],B=m.morphAttributes.normal||[],Y=m.morphAttributes.color||[];let E=0;O===!0&&(E=1),A===!0&&(E=2),N===!0&&(E=3);let z=m.attributes.position.count*E,H=1;z>e.maxTextureSize&&(H=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const le=new Float32Array(z*H*4*P),ue=new uu(le,z,H,P);ue.type=Pi,ue.needsUpdate=!0;const Q=E*4;for(let V=0;V<P;V++){const ae=R[V],_e=B[V],ce=Y[V],de=z*H*4*V;for(let pe=0;pe<ae.count;pe++){const Le=pe*Q;O===!0&&(d.fromBufferAttribute(ae,pe),le[de+Le+0]=d.x,le[de+Le+1]=d.y,le[de+Le+2]=d.z,le[de+Le+3]=0),A===!0&&(d.fromBufferAttribute(_e,pe),le[de+Le+4]=d.x,le[de+Le+5]=d.y,le[de+Le+6]=d.z,le[de+Le+7]=0),N===!0&&(d.fromBufferAttribute(ce,pe),le[de+Le+8]=d.x,le[de+Le+9]=d.y,le[de+Le+10]=d.z,le[de+Le+11]=ce.itemSize===4?d.w:1)}}y={count:P,texture:ue,size:new Ve(z,H)},s.set(m,y),m.addEventListener("dispose",W)}let b=0;for(let O=0;O<g.length;O++)b+=g[O];const C=m.morphTargetsRelative?1:1-b;v.getUniforms().setValue(a,"morphTargetBaseInfluence",C),v.getUniforms().setValue(a,"morphTargetInfluences",g),v.getUniforms().setValue(a,"morphTargetsTexture",y.texture,t),v.getUniforms().setValue(a,"morphTargetsTextureSize",y.size)}else{const M=g===void 0?0:g.length;let P=n[m.id];if(P===void 0||P.length!==M){P=[];for(let A=0;A<M;A++)P[A]=[A,0];n[m.id]=P}for(let A=0;A<M;A++){const N=P[A];N[0]=A,N[1]=g[A]}P.sort(yg);for(let A=0;A<8;A++)A<M&&P[A][1]?(l[A][0]=P[A][0],l[A][1]=P[A][1]):(l[A][0]=Number.MAX_SAFE_INTEGER,l[A][1]=0);l.sort(xg);const y=m.morphAttributes.position,b=m.morphAttributes.normal;let C=0;for(let A=0;A<8;A++){const N=l[A],R=N[0],B=N[1];R!==Number.MAX_SAFE_INTEGER&&B?(y&&m.getAttribute("morphTarget"+A)!==y[R]&&m.setAttribute("morphTarget"+A,y[R]),b&&m.getAttribute("morphNormal"+A)!==b[R]&&m.setAttribute("morphNormal"+A,b[R]),r[A]=B,C+=B):(y&&m.hasAttribute("morphTarget"+A)===!0&&m.deleteAttribute("morphTarget"+A),b&&m.hasAttribute("morphNormal"+A)===!0&&m.deleteAttribute("morphNormal"+A),r[A]=0)}const O=m.morphTargetsRelative?1:1-C;v.getUniforms().setValue(a,"morphTargetBaseInfluence",O),v.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:h}}function Mg(a,e,t,n){let r=new WeakMap;function s(h){const p=n.render.frame,m=h.geometry,v=e.get(h,m);return r.get(v)!==p&&(e.update(v),r.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),v}function d(){r=new WeakMap}function l(h){const p=h.target;p.removeEventListener("dispose",l),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:s,dispose:d}}const bu=new mn,Mu=new uu,Su=new lh,wu=new vu,Cc=[],Dc=[],Lc=new Float32Array(16),Rc=new Float32Array(9),Ic=new Float32Array(4);function hr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const r=e*t;let s=Cc[r];if(s===void 0&&(s=new Float32Array(r),Cc[r]=s),e!==0){n.toArray(s,0);for(let d=1,l=0;d!==e;++d)l+=t,a[d].toArray(s,l)}return s}function Lt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Rt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function ns(a,e){let t=Dc[e];t===void 0&&(t=new Int32Array(e),Dc[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Sg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function wg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;a.uniform2fv(this.addr,e),Rt(t,e)}}function Eg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;a.uniform3fv(this.addr,e),Rt(t,e)}}function Tg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;a.uniform4fv(this.addr,e),Rt(t,e)}}function Ag(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,n))return;Ic.set(n),a.uniformMatrix2fv(this.addr,!1,Ic),Rt(t,n)}}function Pg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,n))return;Rc.set(n),a.uniformMatrix3fv(this.addr,!1,Rc),Rt(t,n)}}function Cg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Lt(t,n))return;Lc.set(n),a.uniformMatrix4fv(this.addr,!1,Lc),Rt(t,n)}}function Dg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Lg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;a.uniform2iv(this.addr,e),Rt(t,e)}}function Rg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;a.uniform3iv(this.addr,e),Rt(t,e)}}function Ig(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;a.uniform4iv(this.addr,e),Rt(t,e)}}function Og(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Fg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;a.uniform2uiv(this.addr,e),Rt(t,e)}}function zg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;a.uniform3uiv(this.addr,e),Rt(t,e)}}function Ng(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;a.uniform4uiv(this.addr,e),Rt(t,e)}}function Ug(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||bu,r)}function kg(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Su,r)}function Bg(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||wu,r)}function Gg(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Mu,r)}function Vg(a){switch(a){case 5126:return Sg;case 35664:return wg;case 35665:return Eg;case 35666:return Tg;case 35674:return Ag;case 35675:return Pg;case 35676:return Cg;case 5124:case 35670:return Dg;case 35667:case 35671:return Lg;case 35668:case 35672:return Rg;case 35669:case 35673:return Ig;case 5125:return Og;case 36294:return Fg;case 36295:return zg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return Gg}}function Hg(a,e){a.uniform1fv(this.addr,e)}function Wg(a,e){const t=hr(e,this.size,2);a.uniform2fv(this.addr,t)}function jg(a,e){const t=hr(e,this.size,3);a.uniform3fv(this.addr,t)}function qg(a,e){const t=hr(e,this.size,4);a.uniform4fv(this.addr,t)}function Xg(a,e){const t=hr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Yg(a,e){const t=hr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Zg(a,e){const t=hr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Kg(a,e){a.uniform1iv(this.addr,e)}function $g(a,e){a.uniform2iv(this.addr,e)}function Qg(a,e){a.uniform3iv(this.addr,e)}function Jg(a,e){a.uniform4iv(this.addr,e)}function ev(a,e){a.uniform1uiv(this.addr,e)}function tv(a,e){a.uniform2uiv(this.addr,e)}function nv(a,e){a.uniform3uiv(this.addr,e)}function iv(a,e){a.uniform4uiv(this.addr,e)}function rv(a,e,t){const n=this.cache,r=e.length,s=ns(t,r);Lt(n,s)||(a.uniform1iv(this.addr,s),Rt(n,s));for(let d=0;d!==r;++d)t.setTexture2D(e[d]||bu,s[d])}function ov(a,e,t){const n=this.cache,r=e.length,s=ns(t,r);Lt(n,s)||(a.uniform1iv(this.addr,s),Rt(n,s));for(let d=0;d!==r;++d)t.setTexture3D(e[d]||Su,s[d])}function sv(a,e,t){const n=this.cache,r=e.length,s=ns(t,r);Lt(n,s)||(a.uniform1iv(this.addr,s),Rt(n,s));for(let d=0;d!==r;++d)t.setTextureCube(e[d]||wu,s[d])}function av(a,e,t){const n=this.cache,r=e.length,s=ns(t,r);Lt(n,s)||(a.uniform1iv(this.addr,s),Rt(n,s));for(let d=0;d!==r;++d)t.setTexture2DArray(e[d]||Mu,s[d])}function lv(a){switch(a){case 5126:return Hg;case 35664:return Wg;case 35665:return jg;case 35666:return qg;case 35674:return Xg;case 35675:return Yg;case 35676:return Zg;case 5124:case 35670:return Kg;case 35667:case 35671:return $g;case 35668:case 35672:return Qg;case 35669:case 35673:return Jg;case 5125:return ev;case 36294:return tv;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return av}}class cv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Vg(t.type)}}class uv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=lv(t.type)}}class dv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,d=r.length;s!==d;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Oc(a,e){a.seq.push(e),a.map[e.id]=e}function fv(a,e,t){const n=a.name,r=n.length;for(ua.lastIndex=0;;){const s=ua.exec(n),d=ua.lastIndex;let l=s[1];const h=s[2]==="]",p=s[3];if(h&&(l=l|0),p===void 0||p==="["&&d+2===r){Oc(t,p===void 0?new cv(l,a,e):new uv(l,a,e));break}else{let v=t.map[l];v===void 0&&(v=new dv(l),Oc(t,v)),t=v}}}class Xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),d=e.getUniformLocation(t,s.name);fv(s,d,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,d=t.length;s!==d;++s){const l=t[s],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const d=e[r];d.id in t&&n.push(d)}return n}}function Fc(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let hv=0;function pv(a,e){const t=a.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let d=r;d<s;d++){const l=d+1;n.push(`${l===e?">":" "} ${l}: ${t[d]}`)}return n.join(`
`)}function mv(a){switch(a){case Ri:return["Linear","( value )"];case vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function zc(a,e,t){const n=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const d=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+pv(a.getShaderSource(e),d)}else return r}function gv(a,e){const t=mv(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vv(a,e){let t;switch(e){case Pf:t="Linear";break;case iu:t="Reinhard";break;case Cf:t="OptimizedCineon";break;case Df:t="ACESFilmic";break;case Lf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _v(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function xv(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yv(a,e){const t={},n=a.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=a.getActiveAttrib(e,r),d=s.name;let l=1;s.type===35674&&(l=2),s.type===35675&&(l=3),s.type===35676&&(l=4),t[d]={type:s.type,location:a.getAttribLocation(e,d),locationSize:l}}return t}function Vr(a){return a!==""}function Nc(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(a){return a.replace(bv,Mv)}function Mv(a,e){const t=Je[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Sa(t)}const Sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(a){return a.replace(Sv,wv)}function wv(a,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bc(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ev(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===sf?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Gr&&(e="SHADOWMAP_TYPE_VSM"),e}function Tv(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case Jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Av(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function Pv(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case nu:e="ENVMAP_BLENDING_MULTIPLY";break;case Tf:e="ENVMAP_BLENDING_MIX";break;case Af:e="ENVMAP_BLENDING_ADD";break}return e}function Cv(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dv(a,e,t,n){const r=a.getContext(),s=t.defines;let d=t.vertexShader,l=t.fragmentShader;const h=Ev(t),p=Tv(t),m=Av(t),v=Pv(t),g=Cv(t),M=t.isWebGL2?"":_v(t),P=xv(s),y=r.createProgram();let b,C,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=[P].filter(Vr).join(`
`),b.length>0&&(b+=`
`),C=[M,P].filter(Vr).join(`
`),C.length>0&&(C+=`
`)):(b=[Bc(t),"#define SHADER_NAME "+t.shaderName,P,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),C=[M,Bc(t),"#define SHADER_NAME "+t.shaderName,P,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Qn?vv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.encodings_pars_fragment,gv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),d=Sa(d),d=Nc(d,t),d=Uc(d,t),l=Sa(l),l=Nc(l,t),l=Uc(l,t),d=kc(d),l=kc(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,b=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,C=["#define varying in",t.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);const A=O+b+d,N=O+C+l,R=Fc(r,35633,A),B=Fc(r,35632,N);if(r.attachShader(y,R),r.attachShader(y,B),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),a.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),H=r.getShaderInfoLog(R).trim(),le=r.getShaderInfoLog(B).trim();let ue=!0,Q=!0;if(r.getProgramParameter(y,35714)===!1){ue=!1;const W=zc(r,R,"vertex"),V=zc(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,35715)+`

Program Info Log: `+z+`
`+W+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||le==="")&&(Q=!1);Q&&(this.diagnostics={runnable:ue,programLog:z,vertexShader:{log:H,prefix:b},fragmentShader:{log:le,prefix:C}})}r.deleteShader(R),r.deleteShader(B);let Y;this.getUniforms=function(){return Y===void 0&&(Y=new Xo(r,y)),Y};let E;return this.getAttributes=function(){return E===void 0&&(E=yv(r,y)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=hv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=B,this}let Lv=0;class Rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),d=this._getShaderCacheForMaterial(e);return d.has(r)===!1&&(d.add(r),r.usedTimes++),d.has(s)===!1&&(d.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Iv(e),t.set(e,n)),n}}class Iv{constructor(e){this.id=Lv++,this.code=e,this.usedTimes=0}}function Ov(a,e,t,n,r,s,d){const l=new du,h=new Rv,p=[],m=r.isWebGL2,v=r.logarithmicDepthBuffer,g=r.vertexTextures;let M=r.precision;const P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E,z,H,le,ue){const Q=le.fog,W=ue.geometry,V=E.isMeshStandardMaterial?le.environment:null,ae=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),_e=ae&&ae.mapping===Jo?ae.image.height:null,ce=P[E.type];E.precision!==null&&(M=r.getMaxPrecision(E.precision),M!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",M,"instead."));const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=de!==void 0?de.length:0;let Le=0;W.morphAttributes.position!==void 0&&(Le=1),W.morphAttributes.normal!==void 0&&(Le=2),W.morphAttributes.color!==void 0&&(Le=3);let ee,fe,te,$;if(ce){const He=Un[ce];ee=He.vertexShader,fe=He.fragmentShader}else ee=E.vertexShader,fe=E.fragmentShader,h.update(E),te=h.getVertexShaderID(E),$=h.getFragmentShaderID(E);const Ae=a.getRenderTarget(),Ce=E.alphaTest>0,De=E.clearcoat>0,Pe=E.iridescence>0;return{isWebGL2:m,shaderID:ce,shaderName:E.type,vertexShader:ee,fragmentShader:fe,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:M,instancing:ue.isInstancedMesh===!0,instancingColor:ue.isInstancedMesh===!0&&ue.instanceColor!==null,supportsVertexTextures:g,outputEncoding:Ae===null?a.outputEncoding:Ae.isXRRenderTarget===!0?Ae.texture.encoding:Ri,map:!!E.map,matcap:!!E.matcap,envMap:!!ae,envMapMode:ae&&ae.mapping,envMapCubeUVHeight:_e,lightMap:!!E.lightMap,aoMap:!!E.aoMap,emissiveMap:!!E.emissiveMap,bumpMap:!!E.bumpMap,normalMap:!!E.normalMap,objectSpaceNormalMap:E.normalMapType===$f,tangentSpaceNormalMap:E.normalMapType===Kf,decodeVideoTexture:!!E.map&&E.map.isVideoTexture===!0&&E.map.encoding===vt,clearcoat:De,clearcoatMap:De&&!!E.clearcoatMap,clearcoatRoughnessMap:De&&!!E.clearcoatRoughnessMap,clearcoatNormalMap:De&&!!E.clearcoatNormalMap,iridescence:Pe,iridescenceMap:Pe&&!!E.iridescenceMap,iridescenceThicknessMap:Pe&&!!E.iridescenceThicknessMap,displacementMap:!!E.displacementMap,roughnessMap:!!E.roughnessMap,metalnessMap:!!E.metalnessMap,specularMap:!!E.specularMap,specularIntensityMap:!!E.specularIntensityMap,specularColorMap:!!E.specularColorMap,opaque:E.transparent===!1&&E.blending===or,alphaMap:!!E.alphaMap,alphaTest:Ce,gradientMap:!!E.gradientMap,sheen:E.sheen>0,sheenColorMap:!!E.sheenColorMap,sheenRoughnessMap:!!E.sheenRoughnessMap,transmission:E.transmission>0,transmissionMap:!!E.transmissionMap,thicknessMap:!!E.thicknessMap,combine:E.combine,vertexTangents:!!E.normalMap&&!!W.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUvs:!!E.map||!!E.bumpMap||!!E.normalMap||!!E.specularMap||!!E.alphaMap||!!E.emissiveMap||!!E.roughnessMap||!!E.metalnessMap||!!E.clearcoatMap||!!E.clearcoatRoughnessMap||!!E.clearcoatNormalMap||!!E.iridescenceMap||!!E.iridescenceThicknessMap||!!E.displacementMap||!!E.transmissionMap||!!E.thicknessMap||!!E.specularIntensityMap||!!E.specularColorMap||!!E.sheenColorMap||!!E.sheenRoughnessMap,uvsVertexOnly:!(E.map||E.bumpMap||E.normalMap||E.specularMap||E.alphaMap||E.emissiveMap||E.roughnessMap||E.metalnessMap||E.clearcoatNormalMap||E.iridescenceMap||E.iridescenceThicknessMap||E.transmission>0||E.transmissionMap||E.thicknessMap||E.specularIntensityMap||E.specularColorMap||E.sheen>0||E.sheenColorMap||E.sheenRoughnessMap)&&!!E.displacementMap,fog:!!Q,useFog:E.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:!!E.flatShading,sizeAttenuation:E.sizeAttenuation,logarithmicDepthBuffer:v,skinning:ue.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Le,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:E.toneMapped?a.toneMapping:Qn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===li,flipSided:E.side===pn,useDepthPacking:!!E.depthPacking,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:E.extensions&&E.extensions.derivatives,extensionFragDepth:E.extensions&&E.extensions.fragDepth,extensionDrawBuffers:E.extensions&&E.extensions.drawBuffers,extensionShaderTextureLOD:E.extensions&&E.extensions.shaderTextureLOD,rendererExtensionFragDepth:m||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function b(E){const z=[];if(E.shaderID?z.push(E.shaderID):(z.push(E.customVertexShaderID),z.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)z.push(H),z.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(C(z,E),O(z,E),z.push(a.outputEncoding)),z.push(E.customProgramCacheKey),z.join()}function C(E,z){E.push(z.precision),E.push(z.outputEncoding),E.push(z.envMapMode),E.push(z.envMapCubeUVHeight),E.push(z.combine),E.push(z.vertexUvs),E.push(z.fogExp2),E.push(z.sizeAttenuation),E.push(z.morphTargetsCount),E.push(z.morphAttributeCount),E.push(z.numDirLights),E.push(z.numPointLights),E.push(z.numSpotLights),E.push(z.numSpotLightMaps),E.push(z.numHemiLights),E.push(z.numRectAreaLights),E.push(z.numDirLightShadows),E.push(z.numPointLightShadows),E.push(z.numSpotLightShadows),E.push(z.numSpotLightShadowsWithMaps),E.push(z.shadowMapType),E.push(z.toneMapping),E.push(z.numClippingPlanes),E.push(z.numClipIntersection),E.push(z.depthPacking)}function O(E,z){l.disableAll(),z.isWebGL2&&l.enable(0),z.supportsVertexTextures&&l.enable(1),z.instancing&&l.enable(2),z.instancingColor&&l.enable(3),z.map&&l.enable(4),z.matcap&&l.enable(5),z.envMap&&l.enable(6),z.lightMap&&l.enable(7),z.aoMap&&l.enable(8),z.emissiveMap&&l.enable(9),z.bumpMap&&l.enable(10),z.normalMap&&l.enable(11),z.objectSpaceNormalMap&&l.enable(12),z.tangentSpaceNormalMap&&l.enable(13),z.clearcoat&&l.enable(14),z.clearcoatMap&&l.enable(15),z.clearcoatRoughnessMap&&l.enable(16),z.clearcoatNormalMap&&l.enable(17),z.iridescence&&l.enable(18),z.iridescenceMap&&l.enable(19),z.iridescenceThicknessMap&&l.enable(20),z.displacementMap&&l.enable(21),z.specularMap&&l.enable(22),z.roughnessMap&&l.enable(23),z.metalnessMap&&l.enable(24),z.gradientMap&&l.enable(25),z.alphaMap&&l.enable(26),z.alphaTest&&l.enable(27),z.vertexColors&&l.enable(28),z.vertexAlphas&&l.enable(29),z.vertexUvs&&l.enable(30),z.vertexTangents&&l.enable(31),z.uvsVertexOnly&&l.enable(32),E.push(l.mask),l.disableAll(),z.fog&&l.enable(0),z.useFog&&l.enable(1),z.flatShading&&l.enable(2),z.logarithmicDepthBuffer&&l.enable(3),z.skinning&&l.enable(4),z.morphTargets&&l.enable(5),z.morphNormals&&l.enable(6),z.morphColors&&l.enable(7),z.premultipliedAlpha&&l.enable(8),z.shadowMapEnabled&&l.enable(9),z.useLegacyLights&&l.enable(10),z.doubleSided&&l.enable(11),z.flipSided&&l.enable(12),z.useDepthPacking&&l.enable(13),z.dithering&&l.enable(14),z.specularIntensityMap&&l.enable(15),z.specularColorMap&&l.enable(16),z.transmission&&l.enable(17),z.transmissionMap&&l.enable(18),z.thicknessMap&&l.enable(19),z.sheen&&l.enable(20),z.sheenColorMap&&l.enable(21),z.sheenRoughnessMap&&l.enable(22),z.decodeVideoTexture&&l.enable(23),z.opaque&&l.enable(24),E.push(l.mask)}function A(E){const z=P[E.type];let H;if(z){const le=Un[z];H=Qo.clone(le.uniforms)}else H=E.uniforms;return H}function N(E,z){let H;for(let le=0,ue=p.length;le<ue;le++){const Q=p[le];if(Q.cacheKey===z){H=Q,++H.usedTimes;break}}return H===void 0&&(H=new Dv(a,z,E,s),p.push(H)),H}function R(E){if(--E.usedTimes===0){const z=p.indexOf(E);p[z]=p[p.length-1],p.pop(),E.destroy()}}function B(E){h.remove(E)}function Y(){h.dispose()}return{getParameters:y,getProgramCacheKey:b,getUniforms:A,acquireProgram:N,releaseProgram:R,releaseShaderCache:B,programs:p,dispose:Y}}function Fv(){let a=new WeakMap;function e(s){let d=a.get(s);return d===void 0&&(d={},a.set(s,d)),d}function t(s){a.delete(s)}function n(s,d,l){a.get(s)[d]=l}function r(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function zv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Gc(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Vc(){const a=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function d(v,g,M,P,y,b){let C=a[e];return C===void 0?(C={id:v.id,object:v,geometry:g,material:M,groupOrder:P,renderOrder:v.renderOrder,z:y,group:b},a[e]=C):(C.id=v.id,C.object=v,C.geometry=g,C.material=M,C.groupOrder=P,C.renderOrder=v.renderOrder,C.z=y,C.group=b),e++,C}function l(v,g,M,P,y,b){const C=d(v,g,M,P,y,b);M.transmission>0?n.push(C):M.transparent===!0?r.push(C):t.push(C)}function h(v,g,M,P,y,b){const C=d(v,g,M,P,y,b);M.transmission>0?n.unshift(C):M.transparent===!0?r.unshift(C):t.unshift(C)}function p(v,g){t.length>1&&t.sort(v||zv),n.length>1&&n.sort(g||Gc),r.length>1&&r.sort(g||Gc)}function m(){for(let v=e,g=a.length;v<g;v++){const M=a[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:h,finish:m,sort:p}}function Nv(){let a=new WeakMap;function e(n,r){const s=a.get(n);let d;return s===void 0?(d=new Vc,a.set(n,[d])):r>=s.length?(d=new Vc,s.push(d)):d=s[r],d}function t(){a=new WeakMap}return{get:e,dispose:t}}function Uv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new lt};break;case"SpotLight":t={position:new K,direction:new K,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new K,halfWidth:new K,halfHeight:new K};break}return a[e.id]=t,t}}}function kv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Bv=0;function Gv(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Vv(a,e){const t=new Uv,n=kv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)r.probe.push(new K);const s=new K,d=new Ct,l=new Ct;function h(m,v){let g=0,M=0,P=0;for(let le=0;le<9;le++)r.probe[le].set(0,0,0);let y=0,b=0,C=0,O=0,A=0,N=0,R=0,B=0,Y=0,E=0;m.sort(Gv);const z=v===!0?Math.PI:1;for(let le=0,ue=m.length;le<ue;le++){const Q=m[le],W=Q.color,V=Q.intensity,ae=Q.distance,_e=Q.shadow&&Q.shadow.map?Q.shadow.map.texture:null;if(Q.isAmbientLight)g+=W.r*V*z,M+=W.g*V*z,P+=W.b*V*z;else if(Q.isLightProbe)for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(Q.sh.coefficients[ce],V);else if(Q.isDirectionalLight){const ce=t.get(Q);if(ce.color.copy(Q.color).multiplyScalar(Q.intensity*z),Q.castShadow){const de=Q.shadow,pe=n.get(Q);pe.shadowBias=de.bias,pe.shadowNormalBias=de.normalBias,pe.shadowRadius=de.radius,pe.shadowMapSize=de.mapSize,r.directionalShadow[y]=pe,r.directionalShadowMap[y]=_e,r.directionalShadowMatrix[y]=Q.shadow.matrix,N++}r.directional[y]=ce,y++}else if(Q.isSpotLight){const ce=t.get(Q);ce.position.setFromMatrixPosition(Q.matrixWorld),ce.color.copy(W).multiplyScalar(V*z),ce.distance=ae,ce.coneCos=Math.cos(Q.angle),ce.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),ce.decay=Q.decay,r.spot[C]=ce;const de=Q.shadow;if(Q.map&&(r.spotLightMap[Y]=Q.map,Y++,de.updateMatrices(Q),Q.castShadow&&E++),r.spotLightMatrix[C]=de.matrix,Q.castShadow){const pe=n.get(Q);pe.shadowBias=de.bias,pe.shadowNormalBias=de.normalBias,pe.shadowRadius=de.radius,pe.shadowMapSize=de.mapSize,r.spotShadow[C]=pe,r.spotShadowMap[C]=_e,B++}C++}else if(Q.isRectAreaLight){const ce=t.get(Q);ce.color.copy(W).multiplyScalar(V),ce.halfWidth.set(Q.width*.5,0,0),ce.halfHeight.set(0,Q.height*.5,0),r.rectArea[O]=ce,O++}else if(Q.isPointLight){const ce=t.get(Q);if(ce.color.copy(Q.color).multiplyScalar(Q.intensity*z),ce.distance=Q.distance,ce.decay=Q.decay,Q.castShadow){const de=Q.shadow,pe=n.get(Q);pe.shadowBias=de.bias,pe.shadowNormalBias=de.normalBias,pe.shadowRadius=de.radius,pe.shadowMapSize=de.mapSize,pe.shadowCameraNear=de.camera.near,pe.shadowCameraFar=de.camera.far,r.pointShadow[b]=pe,r.pointShadowMap[b]=_e,r.pointShadowMatrix[b]=Q.shadow.matrix,R++}r.point[b]=ce,b++}else if(Q.isHemisphereLight){const ce=t.get(Q);ce.skyColor.copy(Q.color).multiplyScalar(V*z),ce.groundColor.copy(Q.groundColor).multiplyScalar(V*z),r.hemi[A]=ce,A++}}O>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=g,r.ambient[1]=M,r.ambient[2]=P;const H=r.hash;(H.directionalLength!==y||H.pointLength!==b||H.spotLength!==C||H.rectAreaLength!==O||H.hemiLength!==A||H.numDirectionalShadows!==N||H.numPointShadows!==R||H.numSpotShadows!==B||H.numSpotMaps!==Y)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=O,r.point.length=b,r.hemi.length=A,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=B+Y-E,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=E,H.directionalLength=y,H.pointLength=b,H.spotLength=C,H.rectAreaLength=O,H.hemiLength=A,H.numDirectionalShadows=N,H.numPointShadows=R,H.numSpotShadows=B,H.numSpotMaps=Y,r.version=Bv++)}function p(m,v){let g=0,M=0,P=0,y=0,b=0;const C=v.matrixWorldInverse;for(let O=0,A=m.length;O<A;O++){const N=m[O];if(N.isDirectionalLight){const R=r.directional[g];R.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(C),g++}else if(N.isSpotLight){const R=r.spot[P];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(C),R.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(C),P++}else if(N.isRectAreaLight){const R=r.rectArea[y];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(C),l.identity(),d.copy(N.matrixWorld),d.premultiply(C),l.extractRotation(d),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),y++}else if(N.isPointLight){const R=r.point[M];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(C),M++}else if(N.isHemisphereLight){const R=r.hemi[b];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(C),b++}}}return{setup:h,setupView:p,state:r}}function Hc(a,e){const t=new Vv(a,e),n=[],r=[];function s(){n.length=0,r.length=0}function d(v){n.push(v)}function l(v){r.push(v)}function h(v){t.setup(n,v)}function p(v){t.setupView(n,v)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:h,setupLightsView:p,pushLight:d,pushShadow:l}}function Hv(a,e){let t=new WeakMap;function n(s,d=0){const l=t.get(s);let h;return l===void 0?(h=new Hc(a,e),t.set(s,[h])):d>=l.length?(h=new Hc(a,e),l.push(h)):h=l[d],h}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wv extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jv extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new K,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xv=`uniform sampler2D shadow_pass;
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
}`;function Yv(a,e,t){let n=new _u;const r=new Ve,s=new Ve,d=new Gt,l=new Wv({depthPacking:Zf}),h=new jv,p={},m=t.maxTextureSize,v={[di]:pn,[pn]:di,[li]:li},g=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:qv,fragmentShader:Xv}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const P=new kn;P.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Dn(P,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc,this.render=function(N,R,B){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||N.length===0)return;const Y=a.getRenderTarget(),E=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),H=a.state;H.setBlending(ui),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let le=0,ue=N.length;le<ue;le++){const Q=N[le],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const V=W.getFrameExtents();if(r.multiply(V),s.copy(W.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(s.x=Math.floor(m/V.x),r.x=s.x*V.x,W.mapSize.x=s.x),r.y>m&&(s.y=Math.floor(m/V.y),r.y=s.y*V.y,W.mapSize.y=s.y)),W.map===null){const _e=this.type!==Gr?{minFilter:$t,magFilter:$t}:{};W.map=new Ln(r.x,r.y,_e),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}a.setRenderTarget(W.map),a.clear();const ae=W.getViewportCount();for(let _e=0;_e<ae;_e++){const ce=W.getViewport(_e);d.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),H.viewport(d),W.updateMatrices(Q,_e),n=W.getFrustum(),A(R,B,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===Gr&&C(W,B),W.needsUpdate=!1}b.needsUpdate=!1,a.setRenderTarget(Y,E,z)};function C(N,R){const B=e.update(y);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ln(r.x,r.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(R,null,B,g,y,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(R,null,B,M,y,null)}function O(N,R,B,Y,E,z){let H=null;const le=B.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(le!==void 0)H=le;else if(H=B.isPointLight===!0?h:l,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const ue=H.uuid,Q=R.uuid;let W=p[ue];W===void 0&&(W={},p[ue]=W);let V=W[Q];V===void 0&&(V=H.clone(),W[Q]=V),H=V}return H.visible=R.visible,H.wireframe=R.wireframe,z===Gr?H.side=R.shadowSide!==null?R.shadowSide:R.side:H.side=R.shadowSide!==null?R.shadowSide:v[R.side],H.alphaMap=R.alphaMap,H.alphaTest=R.alphaTest,H.map=R.map,H.clipShadows=R.clipShadows,H.clippingPlanes=R.clippingPlanes,H.clipIntersection=R.clipIntersection,H.displacementMap=R.displacementMap,H.displacementScale=R.displacementScale,H.displacementBias=R.displacementBias,H.wireframeLinewidth=R.wireframeLinewidth,H.linewidth=R.linewidth,B.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(H.referencePosition.setFromMatrixPosition(B.matrixWorld),H.nearDistance=Y,H.farDistance=E),H}function A(N,R,B,Y,E){if(N.visible===!1)return;if(N.layers.test(R.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&E===Gr)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,N.matrixWorld);const le=e.update(N),ue=N.material;if(Array.isArray(ue)){const Q=le.groups;for(let W=0,V=Q.length;W<V;W++){const ae=Q[W],_e=ue[ae.materialIndex];if(_e&&_e.visible){const ce=O(N,_e,Y,B.near,B.far,E);a.renderBufferDirect(B,null,le,ce,N,ae)}}}else if(ue.visible){const Q=O(N,ue,Y,B.near,B.far,E);a.renderBufferDirect(B,null,le,Q,N,null)}}const H=N.children;for(let le=0,ue=H.length;le<ue;le++)A(H[le],R,B,Y,E)}}function Zv(a,e,t){const n=t.isWebGL2;function r(){let G=!1;const re=new Gt;let ge=null;const Te=new Gt(0,0,0,0);return{setMask:function(Ee){ge!==Ee&&!G&&(a.colorMask(Ee,Ee,Ee,Ee),ge=Ee)},setLocked:function(Ee){G=Ee},setClear:function(Ee,ft,_t,Ft,Mt){Mt===!0&&(Ee*=Ft,ft*=Ft,_t*=Ft),re.set(Ee,ft,_t,Ft),Te.equals(re)===!1&&(a.clearColor(Ee,ft,_t,Ft),Te.copy(re))},reset:function(){G=!1,ge=null,Te.set(-1,0,0,0)}}}function s(){let G=!1,re=null,ge=null,Te=null;return{setTest:function(Ee){Ee?Ce(2929):De(2929)},setMask:function(Ee){re!==Ee&&!G&&(a.depthMask(Ee),re=Ee)},setFunc:function(Ee){if(ge!==Ee){switch(Ee){case xf:a.depthFunc(512);break;case yf:a.depthFunc(519);break;case bf:a.depthFunc(513);break;case va:a.depthFunc(515);break;case Mf:a.depthFunc(514);break;case Sf:a.depthFunc(518);break;case wf:a.depthFunc(516);break;case Ef:a.depthFunc(517);break;default:a.depthFunc(515)}ge=Ee}},setLocked:function(Ee){G=Ee},setClear:function(Ee){Te!==Ee&&(a.clearDepth(Ee),Te=Ee)},reset:function(){G=!1,re=null,ge=null,Te=null}}}function d(){let G=!1,re=null,ge=null,Te=null,Ee=null,ft=null,_t=null,Ft=null,Mt=null;return{setTest:function(ct){G||(ct?Ce(2960):De(2960))},setMask:function(ct){re!==ct&&!G&&(a.stencilMask(ct),re=ct)},setFunc:function(ct,Tt,ln){(ge!==ct||Te!==Tt||Ee!==ln)&&(a.stencilFunc(ct,Tt,ln),ge=ct,Te=Tt,Ee=ln)},setOp:function(ct,Tt,ln){(ft!==ct||_t!==Tt||Ft!==ln)&&(a.stencilOp(ct,Tt,ln),ft=ct,_t=Tt,Ft=ln)},setLocked:function(ct){G=ct},setClear:function(ct){Mt!==ct&&(a.clearStencil(ct),Mt=ct)},reset:function(){G=!1,re=null,ge=null,Te=null,Ee=null,ft=null,_t=null,Ft=null,Mt=null}}}const l=new r,h=new s,p=new d,m=new WeakMap,v=new WeakMap;let g={},M={},P=new WeakMap,y=[],b=null,C=!1,O=null,A=null,N=null,R=null,B=null,Y=null,E=null,z=!1,H=null,le=null,ue=null,Q=null,W=null;const V=a.getParameter(35661);let ae=!1,_e=0;const ce=a.getParameter(7938);ce.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ae=_e>=1):ce.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ae=_e>=2);let de=null,pe={};const Le=a.getParameter(3088),ee=a.getParameter(2978),fe=new Gt().fromArray(Le),te=new Gt().fromArray(ee);function $(G,re,ge){const Te=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(G,Ee),a.texParameteri(G,10241,9728),a.texParameteri(G,10240,9728);for(let ft=0;ft<ge;ft++)a.texImage2D(re+ft,0,6408,1,1,0,6408,5121,Te);return Ee}const Ae={};Ae[3553]=$(3553,3553,1),Ae[34067]=$(34067,34069,6),l.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Ce(2929),h.setFunc(va),wt(!1),Et(Rl),Ce(2884),St(ui);function Ce(G){g[G]!==!0&&(a.enable(G),g[G]=!0)}function De(G){g[G]!==!1&&(a.disable(G),g[G]=!1)}function Pe(G,re){return M[G]!==re?(a.bindFramebuffer(G,re),M[G]=re,n&&(G===36009&&(M[36160]=re),G===36160&&(M[36009]=re)),!0):!1}function ke(G,re){let ge=y,Te=!1;if(G)if(ge=P.get(re),ge===void 0&&(ge=[],P.set(re,ge)),G.isWebGLMultipleRenderTargets){const Ee=G.texture;if(ge.length!==Ee.length||ge[0]!==36064){for(let ft=0,_t=Ee.length;ft<_t;ft++)ge[ft]=36064+ft;ge.length=Ee.length,Te=!0}}else ge[0]!==36064&&(ge[0]=36064,Te=!0);else ge[0]!==1029&&(ge[0]=1029,Te=!0);Te&&(t.isWebGL2?a.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function He(G){return b!==G?(a.useProgram(G),b=G,!0):!1}const Ye={[nr]:32774,[lf]:32778,[cf]:32779};if(n)Ye[Fl]=32775,Ye[zl]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(Ye[Fl]=G.MIN_EXT,Ye[zl]=G.MAX_EXT)}const it={[uf]:0,[df]:1,[ff]:768,[eu]:770,[_f]:776,[gf]:774,[pf]:772,[hf]:769,[tu]:771,[vf]:775,[mf]:773};function St(G,re,ge,Te,Ee,ft,_t,Ft){if(G===ui){C===!0&&(De(3042),C=!1);return}if(C===!1&&(Ce(3042),C=!0),G!==af){if(G!==O||Ft!==z){if((A!==nr||B!==nr)&&(a.blendEquation(32774),A=nr,B=nr),Ft)switch(G){case or:a.blendFuncSeparate(1,771,1,771);break;case ga:a.blendFunc(1,1);break;case Il:a.blendFuncSeparate(0,769,0,1);break;case Ol:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case or:a.blendFuncSeparate(770,771,1,771);break;case ga:a.blendFunc(770,1);break;case Il:a.blendFuncSeparate(0,769,0,1);break;case Ol:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}N=null,R=null,Y=null,E=null,O=G,z=Ft}return}Ee=Ee||re,ft=ft||ge,_t=_t||Te,(re!==A||Ee!==B)&&(a.blendEquationSeparate(Ye[re],Ye[Ee]),A=re,B=Ee),(ge!==N||Te!==R||ft!==Y||_t!==E)&&(a.blendFuncSeparate(it[ge],it[Te],it[ft],it[_t]),N=ge,R=Te,Y=ft,E=_t),O=G,z=!1}function qe(G,re){G.side===li?De(2884):Ce(2884);let ge=G.side===pn;re&&(ge=!ge),wt(ge),G.blending===or&&G.transparent===!1?St(ui):St(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),l.setMask(G.colorWrite);const Te=G.stencilWrite;p.setTest(Te),Te&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),dt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ce(32926):De(32926)}function wt(G){H!==G&&(G?a.frontFace(2304):a.frontFace(2305),H=G)}function Et(G){G!==rf?(Ce(2884),G!==le&&(G===Rl?a.cullFace(1029):G===of?a.cullFace(1028):a.cullFace(1032))):De(2884),le=G}function st(G){G!==ue&&(ae&&a.lineWidth(G),ue=G)}function dt(G,re,ge){G?(Ce(32823),(Q!==re||W!==ge)&&(a.polygonOffset(re,ge),Q=re,W=ge)):De(32823)}function qt(G){G?Ce(3089):De(3089)}function Dt(G){G===void 0&&(G=33984+V-1),de!==G&&(a.activeTexture(G),de=G)}function I(G,re,ge){ge===void 0&&(de===null?ge=33984+V-1:ge=de);let Te=pe[ge];Te===void 0&&(Te={type:void 0,texture:void 0},pe[ge]=Te),(Te.type!==G||Te.texture!==re)&&(de!==ge&&(a.activeTexture(ge),de=ge),a.bindTexture(G,re||Ae[G]),Te.type=G,Te.texture=re)}function T(){const G=pe[de];G!==void 0&&G.type!==void 0&&(a.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ie(){try{a.compressedTexImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{a.compressedTexImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{a.texSubImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{a.texSubImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function U(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{a.texStorage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{a.texStorage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{a.texImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{a.texImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(G){fe.equals(G)===!1&&(a.scissor(G.x,G.y,G.z,G.w),fe.copy(G))}function ze(G){te.equals(G)===!1&&(a.viewport(G.x,G.y,G.z,G.w),te.copy(G))}function Ze(G,re){let ge=v.get(re);ge===void 0&&(ge=new WeakMap,v.set(re,ge));let Te=ge.get(G);Te===void 0&&(Te=a.getUniformBlockIndex(re,G.name),ge.set(G,Te))}function et(G,re){const Te=v.get(re).get(G);m.get(re)!==Te&&(a.uniformBlockBinding(re,Te,G.__bindingPointIndex),m.set(re,Te))}function at(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},de=null,pe={},M={},P=new WeakMap,y=[],b=null,C=!1,O=null,A=null,N=null,R=null,B=null,Y=null,E=null,z=!1,H=null,le=null,ue=null,Q=null,W=null,fe.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),l.reset(),h.reset(),p.reset()}return{buffers:{color:l,depth:h,stencil:p},enable:Ce,disable:De,bindFramebuffer:Pe,drawBuffers:ke,useProgram:He,setBlending:St,setMaterial:qe,setFlipSided:wt,setCullFace:Et,setLineWidth:st,setPolygonOffset:dt,setScissorTest:qt,activeTexture:Dt,bindTexture:I,unbindTexture:T,compressedTexImage2D:ie,compressedTexImage3D:ve,texImage2D:ye,texImage3D:Re,updateUBOMapping:Ze,uniformBlockBinding:et,texStorage2D:q,texStorage3D:we,texSubImage2D:xe,texSubImage3D:Se,compressedTexSubImage2D:Ne,compressedTexSubImage3D:U,scissor:Fe,viewport:ze,reset:at}}function Kv(a,e,t,n,r,s,d){const l=r.isWebGL2,h=r.maxTextures,p=r.maxCubemapSize,m=r.maxTextureSize,v=r.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),P=new WeakMap;let y;const b=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(I,T){return C?new OffscreenCanvas(I,T):$o("canvas")}function A(I,T,ie,ve){let xe=1;if((I.width>ve||I.height>ve)&&(xe=ve/Math.max(I.width,I.height)),xe<1||T===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const Se=T?eh:Math.floor,Ne=Se(xe*I.width),U=Se(xe*I.height);y===void 0&&(y=O(Ne,U));const q=ie?O(Ne,U):y;return q.width=Ne,q.height=U,q.getContext("2d").drawImage(I,0,0,Ne,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Ne+"x"+U+")."),q}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function N(I){return uc(I.width)&&uc(I.height)}function R(I){return l?!1:I.wrapS!==Pn||I.wrapT!==Pn||I.minFilter!==$t&&I.minFilter!==yn}function B(I,T){return I.generateMipmaps&&T&&I.minFilter!==$t&&I.minFilter!==yn}function Y(I){a.generateMipmap(I)}function E(I,T,ie,ve,xe=!1){if(l===!1)return T;if(I!==null){if(a[I]!==void 0)return a[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Se=T;return T===6403&&(ie===5126&&(Se=33326),ie===5131&&(Se=33325),ie===5121&&(Se=33321)),T===33319&&(ie===5126&&(Se=33328),ie===5131&&(Se=33327),ie===5121&&(Se=33323)),T===6408&&(ie===5126&&(Se=34836),ie===5131&&(Se=34842),ie===5121&&(Se=ve===vt&&xe===!1?35907:32856),ie===32819&&(Se=32854),ie===32820&&(Se=32855)),(Se===33325||Se===33326||Se===33327||Se===33328||Se===34842||Se===34836)&&e.get("EXT_color_buffer_float"),Se}function z(I,T,ie){return B(I,ie)===!0||I.isFramebufferTexture&&I.minFilter!==$t&&I.minFilter!==yn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function H(I){return I===$t||I===Nl||I===Os?9728:9729}function le(I){const T=I.target;T.removeEventListener("dispose",le),Q(T),T.isVideoTexture&&P.delete(T)}function ue(I){const T=I.target;T.removeEventListener("dispose",ue),V(T)}function Q(I){const T=n.get(I);if(T.__webglInit===void 0)return;const ie=I.source,ve=b.get(ie);if(ve){const xe=ve[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&W(I),Object.keys(ve).length===0&&b.delete(ie)}n.remove(I)}function W(I){const T=n.get(I);a.deleteTexture(T.__webglTexture);const ie=I.source,ve=b.get(ie);delete ve[T.__cacheKey],d.memory.textures--}function V(I){const T=I.texture,ie=n.get(I),ve=n.get(T);if(ve.__webglTexture!==void 0&&(a.deleteTexture(ve.__webglTexture),d.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)a.deleteFramebuffer(ie.__webglFramebuffer[xe]),ie.__webglDepthbuffer&&a.deleteRenderbuffer(ie.__webglDepthbuffer[xe]);else{if(a.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&a.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&a.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let xe=0;xe<ie.__webglColorRenderbuffer.length;xe++)ie.__webglColorRenderbuffer[xe]&&a.deleteRenderbuffer(ie.__webglColorRenderbuffer[xe]);ie.__webglDepthRenderbuffer&&a.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let xe=0,Se=T.length;xe<Se;xe++){const Ne=n.get(T[xe]);Ne.__webglTexture&&(a.deleteTexture(Ne.__webglTexture),d.memory.textures--),n.remove(T[xe])}n.remove(T),n.remove(I)}let ae=0;function _e(){ae=0}function ce(){const I=ae;return I>=h&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+h),ae+=1,I}function de(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.encoding),T.join()}function pe(I,T){const ie=n.get(I);if(I.isVideoTexture&&qt(I),I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){const ve=I.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(ie,I,T);return}}t.bindTexture(3553,ie.__webglTexture,33984+T)}function Le(I,T){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){De(ie,I,T);return}t.bindTexture(35866,ie.__webglTexture,33984+T)}function ee(I,T){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){De(ie,I,T);return}t.bindTexture(32879,ie.__webglTexture,33984+T)}function fe(I,T){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){Pe(ie,I,T);return}t.bindTexture(34067,ie.__webglTexture,33984+T)}const te={[ya]:10497,[Pn]:33071,[ba]:33648},$={[$t]:9728,[Nl]:9984,[Os]:9986,[yn]:9729,[Rf]:9985,[jr]:9987};function Ae(I,T,ie){if(ie?(a.texParameteri(I,10242,te[T.wrapS]),a.texParameteri(I,10243,te[T.wrapT]),(I===32879||I===35866)&&a.texParameteri(I,32882,te[T.wrapR]),a.texParameteri(I,10240,$[T.magFilter]),a.texParameteri(I,10241,$[T.minFilter])):(a.texParameteri(I,10242,33071),a.texParameteri(I,10243,33071),(I===32879||I===35866)&&a.texParameteri(I,32882,33071),(T.wrapS!==Pn||T.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(I,10240,H(T.magFilter)),a.texParameteri(I,10241,H(T.minFilter)),T.minFilter!==$t&&T.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===$t||T.minFilter!==Os&&T.minFilter!==jr||T.type===Pi&&e.has("OES_texture_float_linear")===!1||l===!1&&T.type===qr&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(a.texParameterf(I,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Ce(I,T){let ie=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",le));const ve=T.source;let xe=b.get(ve);xe===void 0&&(xe={},b.set(ve,xe));const Se=de(T);if(Se!==I.__cacheKey){xe[Se]===void 0&&(xe[Se]={texture:a.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),xe[Se].usedTimes++;const Ne=xe[I.__cacheKey];Ne!==void 0&&(xe[I.__cacheKey].usedTimes--,Ne.usedTimes===0&&W(T)),I.__cacheKey=Se,I.__webglTexture=xe[Se].texture}return ie}function De(I,T,ie){let ve=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=35866),T.isData3DTexture&&(ve=32879);const xe=Ce(I,T),Se=T.source;t.bindTexture(ve,I.__webglTexture,33984+ie);const Ne=n.get(Se);if(Se.version!==Ne.__version||xe===!0){t.activeTexture(33984+ie),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const U=R(T)&&N(T.image)===!1;let q=A(T.image,U,!1,m);q=Dt(T,q);const we=N(q)||l,ye=s.convert(T.format,T.encoding);let Re=s.convert(T.type),Fe=E(T.internalFormat,ye,Re,T.encoding,T.isVideoTexture);Ae(ve,T,we);let ze;const Ze=T.mipmaps,et=l&&T.isVideoTexture!==!0,at=Ne.__version===void 0||xe===!0,G=z(T,q,we);if(T.isDepthTexture)Fe=6402,l?T.type===Pi?Fe=36012:T.type===Ai?Fe=33190:T.type===sr?Fe=35056:Fe=33189:T.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Di&&Fe===6402&&T.type!==ou&&T.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ai,Re=s.convert(T.type)),T.format===ur&&Fe===6402&&(Fe=34041,T.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=sr,Re=s.convert(T.type))),at&&(et?t.texStorage2D(3553,1,Fe,q.width,q.height):t.texImage2D(3553,0,Fe,q.width,q.height,0,ye,Re,null));else if(T.isDataTexture)if(Ze.length>0&&we){et&&at&&t.texStorage2D(3553,G,Fe,Ze[0].width,Ze[0].height);for(let re=0,ge=Ze.length;re<ge;re++)ze=Ze[re],et?t.texSubImage2D(3553,re,0,0,ze.width,ze.height,ye,Re,ze.data):t.texImage2D(3553,re,Fe,ze.width,ze.height,0,ye,Re,ze.data);T.generateMipmaps=!1}else et?(at&&t.texStorage2D(3553,G,Fe,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,ye,Re,q.data)):t.texImage2D(3553,0,Fe,q.width,q.height,0,ye,Re,q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){et&&at&&t.texStorage3D(35866,G,Fe,Ze[0].width,Ze[0].height,q.depth);for(let re=0,ge=Ze.length;re<ge;re++)ze=Ze[re],T.format!==Cn?ye!==null?et?t.compressedTexSubImage3D(35866,re,0,0,0,ze.width,ze.height,q.depth,ye,ze.data,0,0):t.compressedTexImage3D(35866,re,Fe,ze.width,ze.height,q.depth,0,ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(35866,re,0,0,0,ze.width,ze.height,q.depth,ye,Re,ze.data):t.texImage3D(35866,re,Fe,ze.width,ze.height,q.depth,0,ye,Re,ze.data)}else{et&&at&&t.texStorage2D(3553,G,Fe,Ze[0].width,Ze[0].height);for(let re=0,ge=Ze.length;re<ge;re++)ze=Ze[re],T.format!==Cn?ye!==null?et?t.compressedTexSubImage2D(3553,re,0,0,ze.width,ze.height,ye,ze.data):t.compressedTexImage2D(3553,re,Fe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(3553,re,0,0,ze.width,ze.height,ye,Re,ze.data):t.texImage2D(3553,re,Fe,ze.width,ze.height,0,ye,Re,ze.data)}else if(T.isDataArrayTexture)et?(at&&t.texStorage3D(35866,G,Fe,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,ye,Re,q.data)):t.texImage3D(35866,0,Fe,q.width,q.height,q.depth,0,ye,Re,q.data);else if(T.isData3DTexture)et?(at&&t.texStorage3D(32879,G,Fe,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,ye,Re,q.data)):t.texImage3D(32879,0,Fe,q.width,q.height,q.depth,0,ye,Re,q.data);else if(T.isFramebufferTexture){if(at)if(et)t.texStorage2D(3553,G,Fe,q.width,q.height);else{let re=q.width,ge=q.height;for(let Te=0;Te<G;Te++)t.texImage2D(3553,Te,Fe,re,ge,0,ye,Re,null),re>>=1,ge>>=1}}else if(Ze.length>0&&we){et&&at&&t.texStorage2D(3553,G,Fe,Ze[0].width,Ze[0].height);for(let re=0,ge=Ze.length;re<ge;re++)ze=Ze[re],et?t.texSubImage2D(3553,re,0,0,ye,Re,ze):t.texImage2D(3553,re,Fe,ye,Re,ze);T.generateMipmaps=!1}else et?(at&&t.texStorage2D(3553,G,Fe,q.width,q.height),t.texSubImage2D(3553,0,0,0,ye,Re,q)):t.texImage2D(3553,0,Fe,ye,Re,q);B(T,we)&&Y(ve),Ne.__version=Se.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Pe(I,T,ie){if(T.image.length!==6)return;const ve=Ce(I,T),xe=T.source;t.bindTexture(34067,I.__webglTexture,33984+ie);const Se=n.get(xe);if(xe.version!==Se.__version||ve===!0){t.activeTexture(33984+ie),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,q=[];for(let re=0;re<6;re++)!Ne&&!U?q[re]=A(T.image[re],!1,!0,p):q[re]=U?T.image[re].image:T.image[re],q[re]=Dt(T,q[re]);const we=q[0],ye=N(we)||l,Re=s.convert(T.format,T.encoding),Fe=s.convert(T.type),ze=E(T.internalFormat,Re,Fe,T.encoding),Ze=l&&T.isVideoTexture!==!0,et=Se.__version===void 0||ve===!0;let at=z(T,we,ye);Ae(34067,T,ye);let G;if(Ne){Ze&&et&&t.texStorage2D(34067,at,ze,we.width,we.height);for(let re=0;re<6;re++){G=q[re].mipmaps;for(let ge=0;ge<G.length;ge++){const Te=G[ge];T.format!==Cn?Re!==null?Ze?t.compressedTexSubImage2D(34069+re,ge,0,0,Te.width,Te.height,Re,Te.data):t.compressedTexImage2D(34069+re,ge,ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(34069+re,ge,0,0,Te.width,Te.height,Re,Fe,Te.data):t.texImage2D(34069+re,ge,ze,Te.width,Te.height,0,Re,Fe,Te.data)}}}else{G=T.mipmaps,Ze&&et&&(G.length>0&&at++,t.texStorage2D(34067,at,ze,q[0].width,q[0].height));for(let re=0;re<6;re++)if(U){Ze?t.texSubImage2D(34069+re,0,0,0,q[re].width,q[re].height,Re,Fe,q[re].data):t.texImage2D(34069+re,0,ze,q[re].width,q[re].height,0,Re,Fe,q[re].data);for(let ge=0;ge<G.length;ge++){const Ee=G[ge].image[re].image;Ze?t.texSubImage2D(34069+re,ge+1,0,0,Ee.width,Ee.height,Re,Fe,Ee.data):t.texImage2D(34069+re,ge+1,ze,Ee.width,Ee.height,0,Re,Fe,Ee.data)}}else{Ze?t.texSubImage2D(34069+re,0,0,0,Re,Fe,q[re]):t.texImage2D(34069+re,0,ze,Re,Fe,q[re]);for(let ge=0;ge<G.length;ge++){const Te=G[ge];Ze?t.texSubImage2D(34069+re,ge+1,0,0,Re,Fe,Te.image[re]):t.texImage2D(34069+re,ge+1,ze,Re,Fe,Te.image[re])}}}B(T,ye)&&Y(34067),Se.__version=xe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ke(I,T,ie,ve,xe){const Se=s.convert(ie.format,ie.encoding),Ne=s.convert(ie.type),U=E(ie.internalFormat,Se,Ne,ie.encoding);n.get(T).__hasExternalTextures||(xe===32879||xe===35866?t.texImage3D(xe,0,U,T.width,T.height,T.depth,0,Se,Ne,null):t.texImage2D(xe,0,U,T.width,T.height,0,Se,Ne,null)),t.bindFramebuffer(36160,I),dt(T)?g.framebufferTexture2DMultisampleEXT(36160,ve,xe,n.get(ie).__webglTexture,0,st(T)):(xe===3553||xe>=34069&&xe<=34074)&&a.framebufferTexture2D(36160,ve,xe,n.get(ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(I,T,ie){if(a.bindRenderbuffer(36161,I),T.depthBuffer&&!T.stencilBuffer){let ve=33189;if(ie||dt(T)){const xe=T.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Pi?ve=36012:xe.type===Ai&&(ve=33190));const Se=st(T);dt(T)?g.renderbufferStorageMultisampleEXT(36161,Se,ve,T.width,T.height):a.renderbufferStorageMultisample(36161,Se,ve,T.width,T.height)}else a.renderbufferStorage(36161,ve,T.width,T.height);a.framebufferRenderbuffer(36160,36096,36161,I)}else if(T.depthBuffer&&T.stencilBuffer){const ve=st(T);ie&&dt(T)===!1?a.renderbufferStorageMultisample(36161,ve,35056,T.width,T.height):dt(T)?g.renderbufferStorageMultisampleEXT(36161,ve,35056,T.width,T.height):a.renderbufferStorage(36161,34041,T.width,T.height),a.framebufferRenderbuffer(36160,33306,36161,I)}else{const ve=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let xe=0;xe<ve.length;xe++){const Se=ve[xe],Ne=s.convert(Se.format,Se.encoding),U=s.convert(Se.type),q=E(Se.internalFormat,Ne,U,Se.encoding),we=st(T);ie&&dt(T)===!1?a.renderbufferStorageMultisample(36161,we,q,T.width,T.height):dt(T)?g.renderbufferStorageMultisampleEXT(36161,we,q,T.width,T.height):a.renderbufferStorage(36161,q,T.width,T.height)}}a.bindRenderbuffer(36161,null)}function Ye(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe(T.depthTexture,0);const ve=n.get(T.depthTexture).__webglTexture,xe=st(T);if(T.depthTexture.format===Di)dt(T)?g.framebufferTexture2DMultisampleEXT(36160,36096,3553,ve,0,xe):a.framebufferTexture2D(36160,36096,3553,ve,0);else if(T.depthTexture.format===ur)dt(T)?g.framebufferTexture2DMultisampleEXT(36160,33306,3553,ve,0,xe):a.framebufferTexture2D(36160,33306,3553,ve,0);else throw new Error("Unknown depthTexture format")}function it(I){const T=n.get(I),ie=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Ye(T.__webglFramebuffer,I)}else if(ie){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(36160,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]=a.createRenderbuffer(),He(T.__webglDepthbuffer[ve],I,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=a.createRenderbuffer(),He(T.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function St(I,T,ie){const ve=n.get(I);T!==void 0&&ke(ve.__webglFramebuffer,I,I.texture,36064,3553),ie!==void 0&&it(I)}function qe(I){const T=I.texture,ie=n.get(I),ve=n.get(T);I.addEventListener("dispose",ue),I.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture()),ve.__version=T.version,d.memory.textures++);const xe=I.isWebGLCubeRenderTarget===!0,Se=I.isWebGLMultipleRenderTargets===!0,Ne=N(I)||l;if(xe){ie.__webglFramebuffer=[];for(let U=0;U<6;U++)ie.__webglFramebuffer[U]=a.createFramebuffer()}else{if(ie.__webglFramebuffer=a.createFramebuffer(),Se)if(r.drawBuffers){const U=I.texture;for(let q=0,we=U.length;q<we;q++){const ye=n.get(U[q]);ye.__webglTexture===void 0&&(ye.__webglTexture=a.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&I.samples>0&&dt(I)===!1){const U=Se?T:[T];ie.__webglMultisampledFramebuffer=a.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer);for(let q=0;q<U.length;q++){const we=U[q];ie.__webglColorRenderbuffer[q]=a.createRenderbuffer(),a.bindRenderbuffer(36161,ie.__webglColorRenderbuffer[q]);const ye=s.convert(we.format,we.encoding),Re=s.convert(we.type),Fe=E(we.internalFormat,ye,Re,we.encoding,I.isXRRenderTarget===!0),ze=st(I);a.renderbufferStorageMultisample(36161,ze,Fe,I.width,I.height),a.framebufferRenderbuffer(36160,36064+q,36161,ie.__webglColorRenderbuffer[q])}a.bindRenderbuffer(36161,null),I.depthBuffer&&(ie.__webglDepthRenderbuffer=a.createRenderbuffer(),He(ie.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}}if(xe){t.bindTexture(34067,ve.__webglTexture),Ae(34067,T,Ne);for(let U=0;U<6;U++)ke(ie.__webglFramebuffer[U],I,T,36064,34069+U);B(T,Ne)&&Y(34067),t.unbindTexture()}else if(Se){const U=I.texture;for(let q=0,we=U.length;q<we;q++){const ye=U[q],Re=n.get(ye);t.bindTexture(3553,Re.__webglTexture),Ae(3553,ye,Ne),ke(ie.__webglFramebuffer,I,ye,36064+q,3553),B(ye,Ne)&&Y(3553)}t.unbindTexture()}else{let U=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(l?U=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(U,ve.__webglTexture),Ae(U,T,Ne),ke(ie.__webglFramebuffer,I,T,36064,U),B(T,Ne)&&Y(U),t.unbindTexture()}I.depthBuffer&&it(I)}function wt(I){const T=N(I)||l,ie=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ve=0,xe=ie.length;ve<xe;ve++){const Se=ie[ve];if(B(Se,T)){const Ne=I.isWebGLCubeRenderTarget?34067:3553,U=n.get(Se).__webglTexture;t.bindTexture(Ne,U),Y(Ne),t.unbindTexture()}}}function Et(I){if(l&&I.samples>0&&dt(I)===!1){const T=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],ie=I.width,ve=I.height;let xe=16384;const Se=[],Ne=I.stencilBuffer?33306:36096,U=n.get(I),q=I.isWebGLMultipleRenderTargets===!0;if(q)for(let we=0;we<T.length;we++)t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,U.__webglFramebuffer),a.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,U.__webglFramebuffer);for(let we=0;we<T.length;we++){Se.push(36064+we),I.depthBuffer&&Se.push(Ne);const ye=U.__ignoreDepthValues!==void 0?U.__ignoreDepthValues:!1;if(ye===!1&&(I.depthBuffer&&(xe|=256),I.stencilBuffer&&(xe|=1024)),q&&a.framebufferRenderbuffer(36008,36064,36161,U.__webglColorRenderbuffer[we]),ye===!0&&(a.invalidateFramebuffer(36008,[Ne]),a.invalidateFramebuffer(36009,[Ne])),q){const Re=n.get(T[we]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Re,0)}a.blitFramebuffer(0,0,ie,ve,0,0,ie,ve,xe,9728),M&&a.invalidateFramebuffer(36008,Se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let we=0;we<T.length;we++){t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+we,36161,U.__webglColorRenderbuffer[we]);const ye=n.get(T[we]).__webglTexture;t.bindFramebuffer(36160,U.__webglFramebuffer),a.framebufferTexture2D(36009,36064+we,3553,ye,0)}t.bindFramebuffer(36009,U.__webglMultisampledFramebuffer)}}function st(I){return Math.min(v,I.samples)}function dt(I){const T=n.get(I);return l&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qt(I){const T=d.render.frame;P.get(I)!==T&&(P.set(I,T),I.update())}function Dt(I,T){const ie=I.encoding,ve=I.format,xe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Ma||ie!==Ri&&(ie===vt?l===!1?e.has("EXT_sRGB")===!0&&ve===Cn?(I.format=Ma,I.minFilter=yn,I.generateMipmaps=!1):T=lu.sRGBToLinear(T):(ve!==Cn||xe!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ie)),T}this.allocateTextureUnit=ce,this.resetTextureUnits=_e,this.setTexture2D=pe,this.setTexture2DArray=Le,this.setTexture3D=ee,this.setTextureCube=fe,this.rebindTextures=St,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=dt}function $v(a,e,t){const n=t.isWebGL2;function r(s,d=null){let l;if(s===Li)return 5121;if(s===zf)return 32819;if(s===Nf)return 32820;if(s===If)return 5120;if(s===Of)return 5122;if(s===ou)return 5123;if(s===Ff)return 5124;if(s===Ai)return 5125;if(s===Pi)return 5126;if(s===qr)return n?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===Uf)return 6406;if(s===Cn)return 6408;if(s===kf)return 6409;if(s===Bf)return 6410;if(s===Di)return 6402;if(s===ur)return 34041;if(s===Ma)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===Gf)return 6403;if(s===Vf)return 36244;if(s===Hf)return 33319;if(s===Wf)return 33320;if(s===jf)return 36249;if(s===Fs||s===zs||s===Ns||s===Us)if(d===vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Fs)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zs)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ns)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Us)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Fs)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zs)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ns)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Us)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ul||s===kl||s===Bl||s===Gl)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Ul)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kl)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bl)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gl)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qf)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vl||s===Hl)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Vl)return d===vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Hl)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wl||s===jl||s===ql||s===Xl||s===Yl||s===Zl||s===Kl||s===$l||s===Ql||s===Jl||s===ec||s===tc||s===nc||s===ic)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Wl)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jl)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ql)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xl)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yl)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zl)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kl)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$l)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ql)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jl)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ec)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tc)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nc)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ic)return d===vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ks)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===ks)return d===vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Xf||s===rc||s===oc||s===sc)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===ks)return l.COMPRESSED_RED_RGTC1_EXT;if(s===rc)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===oc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sr?n?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:r}}class Qv extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hr extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jv={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,d=null;const l=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const y of e.hand.values()){const b=t.getJointPose(y,n),C=this._getHandJoint(p,y);b!==null&&(C.matrix.fromArray(b.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.jointRadius=b.radius),C.visible=b!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=m.position.distanceTo(v.position),M=.02,P=.005;p.inputState.pinching&&g>M+P?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-P&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=s!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class e0 extends mn{constructor(e,t,n,r,s,d,l,h,p,m){if(m=m!==void 0?m:Di,m!==Di&&m!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===Di&&(n=Ai),n===void 0&&m===ur&&(n=sr),super(null,r,s,d,l,h,m,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:$t,this.minFilter=h!==void 0?h:$t,this.flipY=!1,this.generateMipmaps=!1}}class t0 extends Oi{constructor(e,t){super();const n=this;let r=null,s=1,d=null,l="local-floor",h=1,p=null,m=null,v=null,g=null,M=null,P=null;const y=t.getContextAttributes();let b=null,C=null;const O=[],A=[],N=new Set,R=new Map,B=new bn;B.layers.enable(1),B.viewport=new Gt;const Y=new bn;Y.layers.enable(2),Y.viewport=new Gt;const E=[B,Y],z=new Qv;z.layers.enable(1),z.layers.enable(2);let H=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=O[ee];return fe===void 0&&(fe=new da,O[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=O[ee];return fe===void 0&&(fe=new da,O[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=O[ee];return fe===void 0&&(fe=new da,O[ee]=fe),fe.getHandSpace()};function ue(ee){const fe=A.indexOf(ee.inputSource);if(fe===-1)return;const te=O[fe];te!==void 0&&te.dispatchEvent({type:ee.type,data:ee.inputSource})}function Q(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",W);for(let ee=0;ee<O.length;ee++){const fe=A[ee];fe!==null&&(A[ee]=null,O[ee].disconnect(fe))}H=null,le=null,e.setRenderTarget(b),M=null,g=null,v=null,r=null,C=null,Le.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){l=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v},this.getFrame=function(){return P},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};M=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:M}),C=new Ln(M.framebufferWidth,M.framebufferHeight,{format:Cn,type:Li,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let fe=null,te=null,$=null;y.depth&&($=y.stencil?35056:33190,fe=y.stencil?ur:Di,te=y.stencil?sr:Ai);const Ae={colorFormat:32856,depthFormat:$,scaleFactor:s};v=new XRWebGLBinding(r,t),g=v.createProjectionLayer(Ae),r.updateRenderState({layers:[g]}),C=new Ln(g.textureWidth,g.textureHeight,{format:Cn,type:Li,depthTexture:new e0(g.textureWidth,g.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const Ce=e.properties.get(C);Ce.__ignoreDepthValues=g.ignoreDepthValues}C.isXRRenderTarget=!0,this.setFoveation(h),p=null,d=await r.requestReferenceSpace(l),Le.setContext(r),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function W(ee){for(let fe=0;fe<ee.removed.length;fe++){const te=ee.removed[fe],$=A.indexOf(te);$>=0&&(A[$]=null,O[$].disconnect(te))}for(let fe=0;fe<ee.added.length;fe++){const te=ee.added[fe];let $=A.indexOf(te);if($===-1){for(let Ce=0;Ce<O.length;Ce++)if(Ce>=A.length){A.push(te),$=Ce;break}else if(A[Ce]===null){A[Ce]=te,$=Ce;break}if($===-1)break}const Ae=O[$];Ae&&Ae.connect(te)}}const V=new K,ae=new K;function _e(ee,fe,te){V.setFromMatrixPosition(fe.matrixWorld),ae.setFromMatrixPosition(te.matrixWorld);const $=V.distanceTo(ae),Ae=fe.projectionMatrix.elements,Ce=te.projectionMatrix.elements,De=Ae[14]/(Ae[10]-1),Pe=Ae[14]/(Ae[10]+1),ke=(Ae[9]+1)/Ae[5],He=(Ae[9]-1)/Ae[5],Ye=(Ae[8]-1)/Ae[0],it=(Ce[8]+1)/Ce[0],St=De*Ye,qe=De*it,wt=$/(-Ye+it),Et=wt*-Ye;fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Et),ee.translateZ(wt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const st=De+wt,dt=Pe+wt,qt=St-Et,Dt=qe+($-Et),I=ke*Pe/dt*st,T=He*Pe/dt*st;ee.projectionMatrix.makePerspective(qt,Dt,I,T,st,dt)}function ce(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;z.near=Y.near=B.near=ee.near,z.far=Y.far=B.far=ee.far,(H!==z.near||le!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,le=z.far);const fe=ee.parent,te=z.cameras;ce(z,fe);for(let Ae=0;Ae<te.length;Ae++)ce(te[Ae],fe);z.matrixWorld.decompose(z.position,z.quaternion,z.scale),ee.matrix.copy(z.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale);const $=ee.children;for(let Ae=0,Ce=$.length;Ae<Ce;Ae++)$[Ae].updateMatrixWorld(!0);te.length===2?_e(z,B,Y):z.projectionMatrix.copy(B.projectionMatrix)},this.getCamera=function(){return z},this.getFoveation=function(){if(!(g===null&&M===null))return h},this.setFoveation=function(ee){h=ee,g!==null&&(g.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.getPlanes=function(){return N};let de=null;function pe(ee,fe){if(m=fe.getViewerPose(p||d),P=fe,m!==null){const te=m.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let $=!1;te.length!==z.cameras.length&&(z.cameras.length=0,$=!0);for(let Ae=0;Ae<te.length;Ae++){const Ce=te[Ae];let De=null;if(M!==null)De=M.getViewport(Ce);else{const ke=v.getViewSubImage(g,Ce);De=ke.viewport,Ae===0&&(e.setRenderTargetTextures(C,ke.colorTexture,g.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(C))}let Pe=E[Ae];Pe===void 0&&(Pe=new bn,Pe.layers.enable(Ae),Pe.viewport=new Gt,E[Ae]=Pe),Pe.matrix.fromArray(Ce.transform.matrix),Pe.projectionMatrix.fromArray(Ce.projectionMatrix),Pe.viewport.set(De.x,De.y,De.width,De.height),Ae===0&&z.matrix.copy(Pe.matrix),$===!0&&z.cameras.push(Pe)}}for(let te=0;te<O.length;te++){const $=A[te],Ae=O[te];$!==null&&Ae!==void 0&&Ae.update($,fe,p||d)}if(de&&de(ee,fe),fe.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:fe.detectedPlanes});let te=null;for(const $ of N)fe.detectedPlanes.has($)||(te===null&&(te=[]),te.push($));if(te!==null)for(const $ of te)N.delete($),R.delete($),n.dispatchEvent({type:"planeremoved",data:$});for(const $ of fe.detectedPlanes)if(!N.has($))N.add($),R.set($,fe.lastChangedTime),n.dispatchEvent({type:"planeadded",data:$});else{const Ae=R.get($);$.lastChangedTime>Ae&&(R.set($,$.lastChangedTime),n.dispatchEvent({type:"planechanged",data:$}))}}P=null}const Le=new xu;Le.setAnimationLoop(pe),this.setAnimationLoop=function(ee){de=ee},this.dispose=function(){}}}function n0(a,e){function t(y,b){b.color.getRGB(y.fogColor.value,mu(a)),b.isFog?(y.fogNear.value=b.near,y.fogFar.value=b.far):b.isFogExp2&&(y.fogDensity.value=b.density)}function n(y,b,C,O,A){b.isMeshBasicMaterial||b.isMeshLambertMaterial?r(y,b):b.isMeshToonMaterial?(r(y,b),m(y,b)):b.isMeshPhongMaterial?(r(y,b),p(y,b)):b.isMeshStandardMaterial?(r(y,b),v(y,b),b.isMeshPhysicalMaterial&&g(y,b,A)):b.isMeshMatcapMaterial?(r(y,b),M(y,b)):b.isMeshDepthMaterial?r(y,b):b.isMeshDistanceMaterial?(r(y,b),P(y,b)):b.isMeshNormalMaterial?r(y,b):b.isLineBasicMaterial?(s(y,b),b.isLineDashedMaterial&&d(y,b)):b.isPointsMaterial?l(y,b,C,O):b.isSpriteMaterial?h(y,b):b.isShadowMaterial?(y.color.value.copy(b.color),y.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function r(y,b){y.opacity.value=b.opacity,b.color&&y.diffuse.value.copy(b.color),b.emissive&&y.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(y.map.value=b.map),b.alphaMap&&(y.alphaMap.value=b.alphaMap),b.bumpMap&&(y.bumpMap.value=b.bumpMap,y.bumpScale.value=b.bumpScale,b.side===pn&&(y.bumpScale.value*=-1)),b.displacementMap&&(y.displacementMap.value=b.displacementMap,y.displacementScale.value=b.displacementScale,y.displacementBias.value=b.displacementBias),b.emissiveMap&&(y.emissiveMap.value=b.emissiveMap),b.normalMap&&(y.normalMap.value=b.normalMap,y.normalScale.value.copy(b.normalScale),b.side===pn&&y.normalScale.value.negate()),b.specularMap&&(y.specularMap.value=b.specularMap),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest);const C=e.get(b).envMap;if(C&&(y.envMap.value=C,y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=b.reflectivity,y.ior.value=b.ior,y.refractionRatio.value=b.refractionRatio),b.lightMap){y.lightMap.value=b.lightMap;const N=a.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=b.lightMapIntensity*N}b.aoMap&&(y.aoMap.value=b.aoMap,y.aoMapIntensity.value=b.aoMapIntensity);let O;b.map?O=b.map:b.specularMap?O=b.specularMap:b.displacementMap?O=b.displacementMap:b.normalMap?O=b.normalMap:b.bumpMap?O=b.bumpMap:b.roughnessMap?O=b.roughnessMap:b.metalnessMap?O=b.metalnessMap:b.alphaMap?O=b.alphaMap:b.emissiveMap?O=b.emissiveMap:b.clearcoatMap?O=b.clearcoatMap:b.clearcoatNormalMap?O=b.clearcoatNormalMap:b.clearcoatRoughnessMap?O=b.clearcoatRoughnessMap:b.iridescenceMap?O=b.iridescenceMap:b.iridescenceThicknessMap?O=b.iridescenceThicknessMap:b.specularIntensityMap?O=b.specularIntensityMap:b.specularColorMap?O=b.specularColorMap:b.transmissionMap?O=b.transmissionMap:b.thicknessMap?O=b.thicknessMap:b.sheenColorMap?O=b.sheenColorMap:b.sheenRoughnessMap&&(O=b.sheenRoughnessMap),O!==void 0&&(O.isWebGLRenderTarget&&(O=O.texture),O.matrixAutoUpdate===!0&&O.updateMatrix(),y.uvTransform.value.copy(O.matrix));let A;b.aoMap?A=b.aoMap:b.lightMap&&(A=b.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),y.uv2Transform.value.copy(A.matrix))}function s(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity}function d(y,b){y.dashSize.value=b.dashSize,y.totalSize.value=b.dashSize+b.gapSize,y.scale.value=b.scale}function l(y,b,C,O){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.size.value=b.size*C,y.scale.value=O*.5,b.map&&(y.map.value=b.map),b.alphaMap&&(y.alphaMap.value=b.alphaMap),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest);let A;b.map?A=b.map:b.alphaMap&&(A=b.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),y.uvTransform.value.copy(A.matrix))}function h(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.rotation.value=b.rotation,b.map&&(y.map.value=b.map),b.alphaMap&&(y.alphaMap.value=b.alphaMap),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest);let C;b.map?C=b.map:b.alphaMap&&(C=b.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),y.uvTransform.value.copy(C.matrix))}function p(y,b){y.specular.value.copy(b.specular),y.shininess.value=Math.max(b.shininess,1e-4)}function m(y,b){b.gradientMap&&(y.gradientMap.value=b.gradientMap)}function v(y,b){y.roughness.value=b.roughness,y.metalness.value=b.metalness,b.roughnessMap&&(y.roughnessMap.value=b.roughnessMap),b.metalnessMap&&(y.metalnessMap.value=b.metalnessMap),e.get(b).envMap&&(y.envMapIntensity.value=b.envMapIntensity)}function g(y,b,C){y.ior.value=b.ior,b.sheen>0&&(y.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),y.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(y.sheenColorMap.value=b.sheenColorMap),b.sheenRoughnessMap&&(y.sheenRoughnessMap.value=b.sheenRoughnessMap)),b.clearcoat>0&&(y.clearcoat.value=b.clearcoat,y.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(y.clearcoatMap.value=b.clearcoatMap),b.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap),b.clearcoatNormalMap&&(y.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),y.clearcoatNormalMap.value=b.clearcoatNormalMap,b.side===pn&&y.clearcoatNormalScale.value.negate())),b.iridescence>0&&(y.iridescence.value=b.iridescence,y.iridescenceIOR.value=b.iridescenceIOR,y.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(y.iridescenceMap.value=b.iridescenceMap),b.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=b.iridescenceThicknessMap)),b.transmission>0&&(y.transmission.value=b.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),b.transmissionMap&&(y.transmissionMap.value=b.transmissionMap),y.thickness.value=b.thickness,b.thicknessMap&&(y.thicknessMap.value=b.thicknessMap),y.attenuationDistance.value=b.attenuationDistance,y.attenuationColor.value.copy(b.attenuationColor)),y.specularIntensity.value=b.specularIntensity,y.specularColor.value.copy(b.specularColor),b.specularIntensityMap&&(y.specularIntensityMap.value=b.specularIntensityMap),b.specularColorMap&&(y.specularColorMap.value=b.specularColorMap)}function M(y,b){b.matcap&&(y.matcap.value=b.matcap)}function P(y,b){y.referencePosition.value.copy(b.referencePosition),y.nearDistance.value=b.nearDistance,y.farDistance.value=b.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function i0(a,e,t,n){let r={},s={},d=[];const l=t.isWebGL2?a.getParameter(35375):0;function h(O,A){const N=A.program;n.uniformBlockBinding(O,N)}function p(O,A){let N=r[O.id];N===void 0&&(P(O),N=m(O),r[O.id]=N,O.addEventListener("dispose",b));const R=A.program;n.updateUBOMapping(O,R);const B=e.render.frame;s[O.id]!==B&&(g(O),s[O.id]=B)}function m(O){const A=v();O.__bindingPointIndex=A;const N=a.createBuffer(),R=O.__size,B=O.usage;return a.bindBuffer(35345,N),a.bufferData(35345,R,B),a.bindBuffer(35345,null),a.bindBufferBase(35345,A,N),N}function v(){for(let O=0;O<l;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(O){const A=r[O.id],N=O.uniforms,R=O.__cache;a.bindBuffer(35345,A);for(let B=0,Y=N.length;B<Y;B++){const E=N[B];if(M(E,B,R)===!0){const z=E.__offset,H=Array.isArray(E.value)?E.value:[E.value];let le=0;for(let ue=0;ue<H.length;ue++){const Q=H[ue],W=y(Q);typeof Q=="number"?(E.__data[0]=Q,a.bufferSubData(35345,z+le,E.__data)):Q.isMatrix3?(E.__data[0]=Q.elements[0],E.__data[1]=Q.elements[1],E.__data[2]=Q.elements[2],E.__data[3]=Q.elements[0],E.__data[4]=Q.elements[3],E.__data[5]=Q.elements[4],E.__data[6]=Q.elements[5],E.__data[7]=Q.elements[0],E.__data[8]=Q.elements[6],E.__data[9]=Q.elements[7],E.__data[10]=Q.elements[8],E.__data[11]=Q.elements[0]):(Q.toArray(E.__data,le),le+=W.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,z,E.__data)}}a.bindBuffer(35345,null)}function M(O,A,N){const R=O.value;if(N[A]===void 0){if(typeof R=="number")N[A]=R;else{const B=Array.isArray(R)?R:[R],Y=[];for(let E=0;E<B.length;E++)Y.push(B[E].clone());N[A]=Y}return!0}else if(typeof R=="number"){if(N[A]!==R)return N[A]=R,!0}else{const B=Array.isArray(N[A])?N[A]:[N[A]],Y=Array.isArray(R)?R:[R];for(let E=0;E<B.length;E++){const z=B[E];if(z.equals(Y[E])===!1)return z.copy(Y[E]),!0}}return!1}function P(O){const A=O.uniforms;let N=0;const R=16;let B=0;for(let Y=0,E=A.length;Y<E;Y++){const z=A[Y],H={boundary:0,storage:0},le=Array.isArray(z.value)?z.value:[z.value];for(let ue=0,Q=le.length;ue<Q;ue++){const W=le[ue],V=y(W);H.boundary+=V.boundary,H.storage+=V.storage}if(z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=N,Y>0){B=N%R;const ue=R-B;B!==0&&ue-H.boundary<0&&(N+=R-B,z.__offset=N)}N+=H.storage}return B=N%R,B>0&&(N+=R-B),O.__size=N,O.__cache={},this}function y(O){const A={boundary:0,storage:0};return typeof O=="number"?(A.boundary=4,A.storage=4):O.isVector2?(A.boundary=8,A.storage=8):O.isVector3||O.isColor?(A.boundary=16,A.storage=12):O.isVector4?(A.boundary=16,A.storage=16):O.isMatrix3?(A.boundary=48,A.storage=48):O.isMatrix4?(A.boundary=64,A.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),A}function b(O){const A=O.target;A.removeEventListener("dispose",b);const N=d.indexOf(A.__bindingPointIndex);d.splice(N,1),a.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function C(){for(const O in r)a.deleteBuffer(r[O]);d=[],r={},s={}}return{bind:h,update:p,dispose:C}}function r0(){const a=$o("canvas");return a.style.display="block",a}function Fa(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:r0(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,r=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,d=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,l=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,h=a.powerPreference!==void 0?a.powerPreference:"default",p=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let m;t!==null?m=t.getContextAttributes().alpha:m=a.alpha!==void 0?a.alpha:!1;let v=null,g=null;const M=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ri,this.useLegacyLights=!0,this.toneMapping=Qn,this.toneMappingExposure=1;const y=this;let b=!1,C=0,O=0,A=null,N=-1,R=null;const B=new Gt,Y=new Gt;let E=null,z=e.width,H=e.height,le=1,ue=null,Q=null;const W=new Gt(0,0,z,H),V=new Gt(0,0,z,H);let ae=!1;const _e=new _u;let ce=!1,de=!1,pe=null;const Le=new Ct,ee=new K,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return A===null?le:1}let $=t;function Ae(L,Z){for(let oe=0;oe<L.length;oe++){const X=L[oe],ne=e.getContext(X,Z);if(ne!==null)return ne}return null}try{const L={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:d,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${La}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",ze,!1),$===null){const Z=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Z.shift(),$=Ae(Z,L),$===null)throw Ae(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ce,De,Pe,ke,He,Ye,it,St,qe,wt,Et,st,dt,qt,Dt,I,T,ie,ve,xe,Se,Ne,U,q;function we(){Ce=new mg($),De=new cg($,Ce,a),Ce.init(De),Ne=new $v($,Ce,De),Pe=new Zv($,Ce,De),ke=new _g,He=new Fv,Ye=new Kv($,Ce,Pe,He,De,Ne,ke),it=new dg(y),St=new pg(y),qe=new Ah($,De),U=new ag($,Ce,qe,De),wt=new gg($,qe,ke,U),Et=new Mg($,wt,qe,ke),ve=new bg($,De,Ye),I=new ug(He),st=new Ov(y,it,St,Ce,De,U,I),dt=new n0(y,He),qt=new Nv,Dt=new Hv(Ce,De),ie=new sg(y,it,St,Pe,Et,m,d),T=new Yv(y,Et,De),q=new i0($,ke,De,Pe),xe=new lg($,Ce,ke,De),Se=new vg($,Ce,ke,De),ke.programs=st.programs,y.capabilities=De,y.extensions=Ce,y.properties=He,y.renderLists=qt,y.shadowMap=T,y.state=Pe,y.info=ke}we();const ye=new t0(y,$);this.xr=ye,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const L=Ce.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ce.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(L){L!==void 0&&(le=L,this.setSize(z,H,!1))},this.getSize=function(L){return L.set(z,H)},this.setSize=function(L,Z,oe=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=L,H=Z,e.width=Math.floor(L*le),e.height=Math.floor(Z*le),oe===!0&&(e.style.width=L+"px",e.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(z*le,H*le).floor()},this.setDrawingBufferSize=function(L,Z,oe){z=L,H=Z,le=oe,e.width=Math.floor(L*oe),e.height=Math.floor(Z*oe),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(B)},this.getViewport=function(L){return L.copy(W)},this.setViewport=function(L,Z,oe,X){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,Z,oe,X),Pe.viewport(B.copy(W).multiplyScalar(le).floor())},this.getScissor=function(L){return L.copy(V)},this.setScissor=function(L,Z,oe,X){L.isVector4?V.set(L.x,L.y,L.z,L.w):V.set(L,Z,oe,X),Pe.scissor(Y.copy(V).multiplyScalar(le).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(L){Pe.setScissorTest(ae=L)},this.setOpaqueSort=function(L){ue=L},this.setTransparentSort=function(L){Q=L},this.getClearColor=function(L){return L.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(L=!0,Z=!0,oe=!0){let X=0;L&&(X|=16384),Z&&(X|=256),oe&&(X|=1024),$.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),qt.dispose(),Dt.dispose(),He.dispose(),it.dispose(),St.dispose(),Et.dispose(),U.dispose(),q.dispose(),st.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ge),ye.removeEventListener("sessionend",Te),pe&&(pe.dispose(),pe=null),Ee.stop()};function Re(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const L=ke.autoReset,Z=T.enabled,oe=T.autoUpdate,X=T.needsUpdate,ne=T.type;we(),ke.autoReset=L,T.enabled=Z,T.autoUpdate=oe,T.needsUpdate=X,T.type=ne}function ze(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ze(L){const Z=L.target;Z.removeEventListener("dispose",Ze),et(Z)}function et(L){at(L),He.remove(L)}function at(L){const Z=He.get(L).programs;Z!==void 0&&(Z.forEach(function(oe){st.releaseProgram(oe)}),L.isShaderMaterial&&st.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,oe,X,ne,Ue){Z===null&&(Z=fe);const We=ne.isMesh&&ne.matrixWorld.determinant()<0,Ke=rs(L,Z,oe,X,ne);Pe.setMaterial(X,We);let $e=oe.index,Qe=1;X.wireframe===!0&&($e=wt.getWireframeAttribute(oe),Qe=2);const tt=oe.drawRange,rt=oe.attributes.position;let yt=tt.start*Qe,Vt=(tt.start+tt.count)*Qe;Ue!==null&&(yt=Math.max(yt,Ue.start*Qe),Vt=Math.min(Vt,(Ue.start+Ue.count)*Qe)),$e!==null?(yt=Math.max(yt,0),Vt=Math.min(Vt,$e.count)):rt!=null&&(yt=Math.max(yt,0),Vt=Math.min(Vt,rt.count));const en=Vt-yt;if(en<0||en===1/0)return;U.setup(ne,X,Ke,oe,$e);let In,xt=xe;if($e!==null&&(In=qe.get($e),xt=Se,xt.setIndex(In)),ne.isMesh)X.wireframe===!0?(Pe.setLineWidth(X.wireframeLinewidth*te()),xt.setMode(1)):xt.setMode(4);else if(ne.isLine){let nt=X.linewidth;nt===void 0&&(nt=1),Pe.setLineWidth(nt*te()),ne.isLineSegments?xt.setMode(1):ne.isLineLoop?xt.setMode(2):xt.setMode(3)}else ne.isPoints?xt.setMode(0):ne.isSprite&&xt.setMode(4);if(ne.isInstancedMesh)xt.renderInstances(yt,en,ne.count);else if(oe.isInstancedBufferGeometry){const nt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,pr=Math.min(oe.instanceCount,nt);xt.renderInstances(yt,en,pr)}else xt.render(yt,en)},this.compile=function(L,Z){function oe(X,ne,Ue){X.transparent===!0&&X.side===li&&X.forceSinglePass===!1?(X.side=pn,X.needsUpdate=!0,Tt(X,ne,Ue),X.side=di,X.needsUpdate=!0,Tt(X,ne,Ue),X.side=li):Tt(X,ne,Ue)}g=Dt.get(L),g.init(),P.push(g),L.traverseVisible(function(X){X.isLight&&X.layers.test(Z.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights(y.useLegacyLights),L.traverse(function(X){const ne=X.material;if(ne)if(Array.isArray(ne))for(let Ue=0;Ue<ne.length;Ue++){const We=ne[Ue];oe(We,L,X)}else oe(ne,L,X)}),P.pop(),g=null};let G=null;function re(L){G&&G(L)}function ge(){Ee.stop()}function Te(){Ee.start()}const Ee=new xu;Ee.setAnimationLoop(re),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(L){G=L,ye.setAnimationLoop(L),L===null?Ee.stop():Ee.start()},ye.addEventListener("sessionstart",ge),ye.addEventListener("sessionend",Te),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(Z),Z=ye.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,Z,A),g=Dt.get(L,P.length),g.init(),P.push(g),Le.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),_e.setFromProjectionMatrix(Le),de=this.localClippingEnabled,ce=I.init(this.clippingPlanes,de),v=qt.get(L,M.length),v.init(),M.push(v),ft(L,Z,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(ue,Q),ce===!0&&I.beginShadows();const oe=g.state.shadowsArray;if(T.render(oe,L,Z),ce===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(v,L),g.setupLights(y.useLegacyLights),Z.isArrayCamera){const X=Z.cameras;for(let ne=0,Ue=X.length;ne<Ue;ne++){const We=X[ne];_t(v,L,We,We.viewport)}}else _t(v,L,Z);A!==null&&(Ye.updateMultisampleRenderTarget(A),Ye.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(y,L,Z),U.resetDefaultState(),N=-1,R=null,P.pop(),P.length>0?g=P[P.length-1]:g=null,M.pop(),M.length>0?v=M[M.length-1]:v=null};function ft(L,Z,oe,X){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||_e.intersectsSprite(L)){X&&ee.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Le);const We=Et.update(L),Ke=L.material;Ke.visible&&v.push(L,We,Ke,oe,ee.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==ke.render.frame&&(L.skeleton.update(),L.skeleton.frame=ke.render.frame),!L.frustumCulled||_e.intersectsObject(L))){X&&ee.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Le);const We=Et.update(L),Ke=L.material;if(Array.isArray(Ke)){const $e=We.groups;for(let Qe=0,tt=$e.length;Qe<tt;Qe++){const rt=$e[Qe],yt=Ke[rt.materialIndex];yt&&yt.visible&&v.push(L,We,yt,oe,ee.z,rt)}}else Ke.visible&&v.push(L,We,Ke,oe,ee.z,null)}}const Ue=L.children;for(let We=0,Ke=Ue.length;We<Ke;We++)ft(Ue[We],Z,oe,X)}function _t(L,Z,oe,X){const ne=L.opaque,Ue=L.transmissive,We=L.transparent;g.setupLightsView(oe),ce===!0&&I.setGlobalState(y.clippingPlanes,oe),Ue.length>0&&Ft(ne,Z,oe),X&&Pe.viewport(B.copy(X)),ne.length>0&&Mt(ne,Z,oe),Ue.length>0&&Mt(Ue,Z,oe),We.length>0&&Mt(We,Z,oe),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Ft(L,Z,oe){const X=De.isWebGL2;pe===null&&(pe=new Ln(1024,1024,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?qr:Li,minFilter:jr,samples:X&&s===!0?4:0}));const ne=y.getRenderTarget();y.setRenderTarget(pe),y.clear();const Ue=y.toneMapping;y.toneMapping=Qn,Mt(L,Z,oe),y.toneMapping=Ue,Ye.updateMultisampleRenderTarget(pe),Ye.updateRenderTargetMipmap(pe),y.setRenderTarget(ne)}function Mt(L,Z,oe){const X=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,Ue=L.length;ne<Ue;ne++){const We=L[ne],Ke=We.object,$e=We.geometry,Qe=X===null?We.material:X,tt=We.group;Ke.layers.test(oe.layers)&&ct(Ke,Z,oe,$e,Qe,tt)}}function ct(L,Z,oe,X,ne,Ue){L.onBeforeRender(y,Z,oe,X,ne,Ue),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ne.onBeforeRender(y,Z,oe,X,L,Ue),ne.transparent===!0&&ne.side===li&&ne.forceSinglePass===!1?(ne.side=pn,ne.needsUpdate=!0,y.renderBufferDirect(oe,Z,X,ne,L,Ue),ne.side=di,ne.needsUpdate=!0,y.renderBufferDirect(oe,Z,X,ne,L,Ue),ne.side=li):y.renderBufferDirect(oe,Z,X,ne,L,Ue),L.onAfterRender(y,Z,oe,X,ne,Ue)}function Tt(L,Z,oe){Z.isScene!==!0&&(Z=fe);const X=He.get(L),ne=g.state.lights,Ue=g.state.shadowsArray,We=ne.state.version,Ke=st.getParameters(L,ne.state,Ue,Z,oe),$e=st.getProgramCacheKey(Ke);let Qe=X.programs;X.environment=L.isMeshStandardMaterial?Z.environment:null,X.fog=Z.fog,X.envMap=(L.isMeshStandardMaterial?St:it).get(L.envMap||X.environment),Qe===void 0&&(L.addEventListener("dispose",Ze),Qe=new Map,X.programs=Qe);let tt=Qe.get($e);if(tt!==void 0){if(X.currentProgram===tt&&X.lightsStateVersion===We)return ln(L,Ke),tt}else Ke.uniforms=st.getUniforms(L),L.onBuild(oe,Ke,y),L.onBeforeCompile(Ke,y),tt=st.acquireProgram(Ke,$e),Qe.set($e,tt),X.uniforms=Ke.uniforms;const rt=X.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(rt.clippingPlanes=I.uniform),ln(L,Ke),X.needsLights=Ge(L),X.lightsStateVersion=We,X.needsLights&&(rt.ambientLightColor.value=ne.state.ambient,rt.lightProbe.value=ne.state.probe,rt.directionalLights.value=ne.state.directional,rt.directionalLightShadows.value=ne.state.directionalShadow,rt.spotLights.value=ne.state.spot,rt.spotLightShadows.value=ne.state.spotShadow,rt.rectAreaLights.value=ne.state.rectArea,rt.ltc_1.value=ne.state.rectAreaLTC1,rt.ltc_2.value=ne.state.rectAreaLTC2,rt.pointLights.value=ne.state.point,rt.pointLightShadows.value=ne.state.pointShadow,rt.hemisphereLights.value=ne.state.hemi,rt.directionalShadowMap.value=ne.state.directionalShadowMap,rt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,rt.spotShadowMap.value=ne.state.spotShadowMap,rt.spotLightMatrix.value=ne.state.spotLightMatrix,rt.spotLightMap.value=ne.state.spotLightMap,rt.pointShadowMap.value=ne.state.pointShadowMap,rt.pointShadowMatrix.value=ne.state.pointShadowMatrix);const yt=tt.getUniforms(),Vt=Xo.seqWithValue(yt.seq,rt);return X.currentProgram=tt,X.uniformsList=Vt,tt}function ln(L,Z){const oe=He.get(L);oe.outputEncoding=Z.outputEncoding,oe.instancing=Z.instancing,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function rs(L,Z,oe,X,ne){Z.isScene!==!0&&(Z=fe),Ye.resetTextureUnits();const Ue=Z.fog,We=X.isMeshStandardMaterial?Z.environment:null,Ke=A===null?y.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Ri,$e=(X.isMeshStandardMaterial?St:it).get(X.envMap||We),Qe=X.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,tt=!!X.normalMap&&!!oe.attributes.tangent,rt=!!oe.morphAttributes.position,yt=!!oe.morphAttributes.normal,Vt=!!oe.morphAttributes.color,en=X.toneMapped?y.toneMapping:Qn,In=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,xt=In!==void 0?In.length:0,nt=He.get(X),pr=g.state.lights;if(ce===!0&&(de===!0||L!==R)){const Xt=L===R&&X.id===N;I.setState(X,L,Xt)}let At=!1;X.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==pr.state.version||nt.outputEncoding!==Ke||ne.isInstancedMesh&&nt.instancing===!1||!ne.isInstancedMesh&&nt.instancing===!0||ne.isSkinnedMesh&&nt.skinning===!1||!ne.isSkinnedMesh&&nt.skinning===!0||nt.envMap!==$e||X.fog===!0&&nt.fog!==Ue||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==I.numPlanes||nt.numIntersection!==I.numIntersection)||nt.vertexAlphas!==Qe||nt.vertexTangents!==tt||nt.morphTargets!==rt||nt.morphNormals!==yt||nt.morphColors!==Vt||nt.toneMapping!==en||De.isWebGL2===!0&&nt.morphTargetsCount!==xt)&&(At=!0):(At=!0,nt.__version=X.version);let gn=nt.currentProgram;At===!0&&(gn=Tt(X,Z,ne));let to=!1,On=!1,fi=!1;const zt=gn.getUniforms(),Bn=nt.uniforms;if(Pe.useProgram(gn.program)&&(to=!0,On=!0,fi=!0),X.id!==N&&(N=X.id,On=!0),to||R!==L){if(zt.setValue($,"projectionMatrix",L.projectionMatrix),De.logarithmicDepthBuffer&&zt.setValue($,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),R!==L&&(R=L,On=!0,fi=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const Xt=zt.map.cameraPosition;Xt!==void 0&&Xt.setValue($,ee.setFromMatrixPosition(L.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&zt.setValue($,"isOrthographic",L.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ne.isSkinnedMesh)&&zt.setValue($,"viewMatrix",L.matrixWorldInverse)}if(ne.isSkinnedMesh){zt.setOptional($,ne,"bindMatrix"),zt.setOptional($,ne,"bindMatrixInverse");const Xt=ne.skeleton;Xt&&(De.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),zt.setValue($,"boneTexture",Xt.boneTexture,Ye),zt.setValue($,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gn=oe.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0&&De.isWebGL2===!0)&&ve.update(ne,oe,gn),(On||nt.receiveShadow!==ne.receiveShadow)&&(nt.receiveShadow=ne.receiveShadow,zt.setValue($,"receiveShadow",ne.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Bn.envMap.value=$e,Bn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),On&&(zt.setValue($,"toneMappingExposure",y.toneMappingExposure),nt.needsLights&&Mn(Bn,fi),Ue&&X.fog===!0&&dt.refreshFogUniforms(Bn,Ue),dt.refreshMaterialUniforms(Bn,X,le,H,pe),Xo.upload($,nt.uniformsList,Bn,Ye)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Xo.upload($,nt.uniformsList,Bn,Ye),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&zt.setValue($,"center",ne.center),zt.setValue($,"modelViewMatrix",ne.modelViewMatrix),zt.setValue($,"normalMatrix",ne.normalMatrix),zt.setValue($,"modelMatrix",ne.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Xt=X.uniformsGroups;for(let Sn=0,os=Xt.length;Sn<os;Sn++)if(De.isWebGL2){const no=Xt[Sn];q.update(no,gn),q.bind(no,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function Mn(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function Ge(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,Z,oe){He.get(L.texture).__webglTexture=Z,He.get(L.depthTexture).__webglTexture=oe;const X=He.get(L);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=oe===void 0,X.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,Z){const oe=He.get(L);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(L,Z=0,oe=0){A=L,C=Z,O=oe;let X=!0,ne=null,Ue=!1,We=!1;if(L){const $e=He.get(L);$e.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(36160,null),X=!1):$e.__webglFramebuffer===void 0?Ye.setupRenderTarget(L):$e.__hasExternalTextures&&Ye.rebindTextures(L,He.get(L.texture).__webglTexture,He.get(L.depthTexture).__webglTexture);const Qe=L.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(We=!0);const tt=He.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ne=tt[Z],Ue=!0):De.isWebGL2&&L.samples>0&&Ye.useMultisampledRTT(L)===!1?ne=He.get(L).__webglMultisampledFramebuffer:ne=tt,B.copy(L.viewport),Y.copy(L.scissor),E=L.scissorTest}else B.copy(W).multiplyScalar(le).floor(),Y.copy(V).multiplyScalar(le).floor(),E=ae;if(Pe.bindFramebuffer(36160,ne)&&De.drawBuffers&&X&&Pe.drawBuffers(L,ne),Pe.viewport(B),Pe.scissor(Y),Pe.setScissorTest(E),Ue){const $e=He.get(L.texture);$.framebufferTexture2D(36160,36064,34069+Z,$e.__webglTexture,oe)}else if(We){const $e=He.get(L.texture),Qe=Z||0;$.framebufferTextureLayer(36160,36064,$e.__webglTexture,oe||0,Qe)}N=-1},this.readRenderTargetPixels=function(L,Z,oe,X,ne,Ue,We){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=He.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&We!==void 0&&(Ke=Ke[We]),Ke){Pe.bindFramebuffer(36160,Ke);try{const $e=L.texture,Qe=$e.format,tt=$e.type;if(Qe!==Cn&&Ne.convert(Qe)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=tt===qr&&(Ce.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(tt!==Li&&Ne.convert(tt)!==$.getParameter(35738)&&!(tt===Pi&&(De.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-X&&oe>=0&&oe<=L.height-ne&&$.readPixels(Z,oe,X,ne,Ne.convert(Qe),Ne.convert(tt),Ue)}finally{const $e=A!==null?He.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(36160,$e)}}},this.copyFramebufferToTexture=function(L,Z,oe=0){const X=Math.pow(2,-oe),ne=Math.floor(Z.image.width*X),Ue=Math.floor(Z.image.height*X);Ye.setTexture2D(Z,0),$.copyTexSubImage2D(3553,oe,0,0,L.x,L.y,ne,Ue),Pe.unbindTexture()},this.copyTextureToTexture=function(L,Z,oe,X=0){const ne=Z.image.width,Ue=Z.image.height,We=Ne.convert(oe.format),Ke=Ne.convert(oe.type);Ye.setTexture2D(oe,0),$.pixelStorei(37440,oe.flipY),$.pixelStorei(37441,oe.premultiplyAlpha),$.pixelStorei(3317,oe.unpackAlignment),Z.isDataTexture?$.texSubImage2D(3553,X,L.x,L.y,ne,Ue,We,Ke,Z.image.data):Z.isCompressedTexture?$.compressedTexSubImage2D(3553,X,L.x,L.y,Z.mipmaps[0].width,Z.mipmaps[0].height,We,Z.mipmaps[0].data):$.texSubImage2D(3553,X,L.x,L.y,We,Ke,Z.image),X===0&&oe.generateMipmaps&&$.generateMipmap(3553),Pe.unbindTexture()},this.copyTextureToTexture3D=function(L,Z,oe,X,ne=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=L.max.x-L.min.x+1,We=L.max.y-L.min.y+1,Ke=L.max.z-L.min.z+1,$e=Ne.convert(X.format),Qe=Ne.convert(X.type);let tt;if(X.isData3DTexture)Ye.setTexture3D(X,0),tt=32879;else if(X.isDataArrayTexture)Ye.setTexture2DArray(X,0),tt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,X.flipY),$.pixelStorei(37441,X.premultiplyAlpha),$.pixelStorei(3317,X.unpackAlignment);const rt=$.getParameter(3314),yt=$.getParameter(32878),Vt=$.getParameter(3316),en=$.getParameter(3315),In=$.getParameter(32877),xt=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;$.pixelStorei(3314,xt.width),$.pixelStorei(32878,xt.height),$.pixelStorei(3316,L.min.x),$.pixelStorei(3315,L.min.y),$.pixelStorei(32877,L.min.z),oe.isDataTexture||oe.isData3DTexture?$.texSubImage3D(tt,ne,Z.x,Z.y,Z.z,Ue,We,Ke,$e,Qe,xt.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(tt,ne,Z.x,Z.y,Z.z,Ue,We,Ke,$e,xt.data)):$.texSubImage3D(tt,ne,Z.x,Z.y,Z.z,Ue,We,Ke,$e,Qe,xt),$.pixelStorei(3314,rt),$.pixelStorei(32878,yt),$.pixelStorei(3316,Vt),$.pixelStorei(3315,en),$.pixelStorei(32877,In),ne===0&&X.generateMipmaps&&$.generateMipmap(tt),Pe.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Ye.setTextureCube(L,0):L.isData3DTexture?Ye.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ye.setTexture2DArray(L,0):Ye.setTexture2D(L,0),Pe.unbindTexture()},this.resetState=function(){C=0,O=0,A=null,Pe.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Fa.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class o0 extends Fa{}o0.prototype.isWebGL1Renderer=!0;class s0 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Wc extends Rn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const jc=new Ct,qc=new Ct,jo=[],a0=new Ct,Nr=new Dn;class Eu extends Dn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let r=0;r<n;r++)this.setMatrixAt(r,a0)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,jc),qc.multiplyMatrices(n,jc),Nr.matrixWorld=qc,Nr.raycast(e,jo);for(let d=0,l=jo.length;d<l;d++){const h=jo[d];h.instanceId=s,h.object=this,t.push(h)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class za extends kn{constructor(e=1,t=1,n=1,r=32,s=1,d=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:d,thetaStart:l,thetaLength:h};const p=this;r=Math.floor(r),s=Math.floor(s);const m=[],v=[],g=[],M=[];let P=0;const y=[],b=n/2;let C=0;O(),d===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(m),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(M,2));function O(){const N=new K,R=new K;let B=0;const Y=(t-e)/n;for(let E=0;E<=s;E++){const z=[],H=E/s,le=H*(t-e)+e;for(let ue=0;ue<=r;ue++){const Q=ue/r,W=Q*h+l,V=Math.sin(W),ae=Math.cos(W);R.x=le*V,R.y=-H*n+b,R.z=le*ae,v.push(R.x,R.y,R.z),N.set(V,Y,ae).normalize(),g.push(N.x,N.y,N.z),M.push(Q,1-H),z.push(P++)}y.push(z)}for(let E=0;E<r;E++)for(let z=0;z<s;z++){const H=y[z][E],le=y[z+1][E],ue=y[z+1][E+1],Q=y[z][E+1];m.push(H,le,Q),m.push(le,ue,Q),B+=6}p.addGroup(C,B,0),C+=B}function A(N){const R=P,B=new Ve,Y=new K;let E=0;const z=N===!0?e:t,H=N===!0?1:-1;for(let ue=1;ue<=r;ue++)v.push(0,b*H,0),g.push(0,H,0),M.push(.5,.5),P++;const le=P;for(let ue=0;ue<=r;ue++){const W=ue/r*h+l,V=Math.cos(W),ae=Math.sin(W);Y.x=z*ae,Y.y=b*H,Y.z=z*V,v.push(Y.x,Y.y,Y.z),g.push(0,H,0),B.x=V*.5+.5,B.y=ae*.5*H+.5,M.push(B.x,B.y),P++}for(let ue=0;ue<r;ue++){const Q=R+ue,W=le+ue;N===!0?m.push(W,W+1,Q):m.push(W+1,W,Q),E+=3}p.addGroup(C,E,N===!0?1:2),C+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Na extends kn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,d=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:d,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(d+l,Math.PI);let p=0;const m=[],v=new K,g=new K,M=[],P=[],y=[],b=[];for(let C=0;C<=n;C++){const O=[],A=C/n;let N=0;C==0&&d==0?N=.5/t:C==n&&h==Math.PI&&(N=-.5/t);for(let R=0;R<=t;R++){const B=R/t;v.x=-e*Math.cos(r+B*s)*Math.sin(d+A*l),v.y=e*Math.cos(d+A*l),v.z=e*Math.sin(r+B*s)*Math.sin(d+A*l),P.push(v.x,v.y,v.z),g.copy(v).normalize(),y.push(g.x,g.y,g.z),b.push(B+N,1-A),O.push(p++)}m.push(O)}for(let C=0;C<n;C++)for(let O=0;O<t;O++){const A=m[C][O+1],N=m[C][O],R=m[C+1][O],B=m[C+1][O+1];(C!==0||d>0)&&M.push(A,N,B),(C!==n-1||h<Math.PI)&&M.push(N,R,B)}this.setIndex(M),this.setAttribute("position",new Jt(P,3)),this.setAttribute("normal",new Jt(y,3)),this.setAttribute("uv",new Jt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class l0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xc(){return(typeof performance>"u"?Date:performance).now()}class Yc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(sn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);const Tu={p:5,q:2,r:2,s:3,t:2,u:4,x:1,y:0,z:0,w:0,dimensions:4,order:10,segments:16,curve:!0,vertices:!1,edges:!0,light:1.5,thickness:1,projection:"stereographic",controls:"orbit"},Oe={...Tu},c0=()=>{if(location.hash)try{const a=JSON.parse(atob(location.hash.slice(1)));Object.assign(Oe,a)}catch(a){console.warn(a),location.hash=""}},Au=(a,e=!1)=>{Object.assign(Oe,a),e&&(location.hash=btoa(JSON.stringify(Oe)))},Zc={type:"change"},fa={type:"start"},Kc={type:"end"};class u0 extends Oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Dt),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Dt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zc),n.update(),s=r.NONE},this.update=function(){const U=new K,q=new Ii().setFromUnitVectors(e.up,new K(0,1,0)),we=q.clone().invert(),ye=new K,Re=new Ii,Fe=2*Math.PI;return function(){const Ze=n.object.position;U.copy(Ze).sub(n.target),U.applyQuaternion(q),l.setFromVector3(U),n.autoRotate&&s===r.NONE&&z(Y()),n.enableDamping?(l.theta+=h.theta*n.dampingFactor,l.phi+=h.phi*n.dampingFactor):(l.theta+=h.theta,l.phi+=h.phi);let et=n.minAzimuthAngle,at=n.maxAzimuthAngle;return isFinite(et)&&isFinite(at)&&(et<-Math.PI?et+=Fe:et>Math.PI&&(et-=Fe),at<-Math.PI?at+=Fe:at>Math.PI&&(at-=Fe),et<=at?l.theta=Math.max(et,Math.min(at,l.theta)):l.theta=l.theta>(et+at)/2?Math.max(et,l.theta):Math.min(at,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=p,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),U.setFromSpherical(l),U.applyQuaternion(we),Ze.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),m.set(0,0,0)),p=1,v||ye.distanceToSquared(n.object.position)>d||8*(1-Re.dot(n.object.quaternion))>d?(n.dispatchEvent(Zc),ye.copy(n.object.position),Re.copy(n.object.quaternion),v=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ie),n.domElement.removeEventListener("pointerdown",St),n.domElement.removeEventListener("pointercancel",Et),n.domElement.removeEventListener("wheel",qt),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",wt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Dt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const d=1e-6,l=new Yc,h=new Yc;let p=1;const m=new K;let v=!1;const g=new Ve,M=new Ve,P=new Ve,y=new Ve,b=new Ve,C=new Ve,O=new Ve,A=new Ve,N=new Ve,R=[],B={};function Y(){return 2*Math.PI/60/60*n.autoRotateSpeed}function E(){return Math.pow(.95,n.zoomSpeed)}function z(U){h.theta-=U}function H(U){h.phi-=U}const le=function(){const U=new K;return function(we,ye){U.setFromMatrixColumn(ye,0),U.multiplyScalar(-we),m.add(U)}}(),ue=function(){const U=new K;return function(we,ye){n.screenSpacePanning===!0?U.setFromMatrixColumn(ye,1):(U.setFromMatrixColumn(ye,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(we),m.add(U)}}(),Q=function(){const U=new K;return function(we,ye){const Re=n.domElement;if(n.object.isPerspectiveCamera){const Fe=n.object.position;U.copy(Fe).sub(n.target);let ze=U.length();ze*=Math.tan(n.object.fov/2*Math.PI/180),le(2*we*ze/Re.clientHeight,n.object.matrix),ue(2*ye*ze/Re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(le(we*(n.object.right-n.object.left)/n.object.zoom/Re.clientWidth,n.object.matrix),ue(ye*(n.object.top-n.object.bottom)/n.object.zoom/Re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function W(U){n.object.isPerspectiveCamera?p/=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*U)),n.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(U){n.object.isPerspectiveCamera?p*=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/U)),n.object.updateProjectionMatrix(),v=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ae(U){g.set(U.clientX,U.clientY)}function _e(U){O.set(U.clientX,U.clientY)}function ce(U){y.set(U.clientX,U.clientY)}function de(U){M.set(U.clientX,U.clientY),P.subVectors(M,g).multiplyScalar(n.rotateSpeed);const q=n.domElement;z(2*Math.PI*P.x/q.clientHeight),H(2*Math.PI*P.y/q.clientHeight),g.copy(M),n.update()}function pe(U){A.set(U.clientX,U.clientY),N.subVectors(A,O),N.y>0?W(E()):N.y<0&&V(E()),O.copy(A),n.update()}function Le(U){b.set(U.clientX,U.clientY),C.subVectors(b,y).multiplyScalar(n.panSpeed),Q(C.x,C.y),y.copy(b),n.update()}function ee(U){U.deltaY<0?V(E()):U.deltaY>0&&W(E()),n.update()}function fe(U){let q=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(-n.keyPanSpeed,0),q=!0;break}q&&(U.preventDefault(),n.update())}function te(){if(R.length===1)g.set(R[0].pageX,R[0].pageY);else{const U=.5*(R[0].pageX+R[1].pageX),q=.5*(R[0].pageY+R[1].pageY);g.set(U,q)}}function $(){if(R.length===1)y.set(R[0].pageX,R[0].pageY);else{const U=.5*(R[0].pageX+R[1].pageX),q=.5*(R[0].pageY+R[1].pageY);y.set(U,q)}}function Ae(){const U=R[0].pageX-R[1].pageX,q=R[0].pageY-R[1].pageY,we=Math.sqrt(U*U+q*q);O.set(0,we)}function Ce(){n.enableZoom&&Ae(),n.enablePan&&$()}function De(){n.enableZoom&&Ae(),n.enableRotate&&te()}function Pe(U){if(R.length==1)M.set(U.pageX,U.pageY);else{const we=Ne(U),ye=.5*(U.pageX+we.x),Re=.5*(U.pageY+we.y);M.set(ye,Re)}P.subVectors(M,g).multiplyScalar(n.rotateSpeed);const q=n.domElement;z(2*Math.PI*P.x/q.clientHeight),H(2*Math.PI*P.y/q.clientHeight),g.copy(M)}function ke(U){if(R.length===1)b.set(U.pageX,U.pageY);else{const q=Ne(U),we=.5*(U.pageX+q.x),ye=.5*(U.pageY+q.y);b.set(we,ye)}C.subVectors(b,y).multiplyScalar(n.panSpeed),Q(C.x,C.y),y.copy(b)}function He(U){const q=Ne(U),we=U.pageX-q.x,ye=U.pageY-q.y,Re=Math.sqrt(we*we+ye*ye);A.set(0,Re),N.set(0,Math.pow(A.y/O.y,n.zoomSpeed)),W(N.y),O.copy(A)}function Ye(U){n.enableZoom&&He(U),n.enablePan&&ke(U)}function it(U){n.enableZoom&&He(U),n.enableRotate&&Pe(U)}function St(U){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",qe),n.domElement.addEventListener("pointerup",wt)),ve(U),U.pointerType==="touch"?I(U):st(U))}function qe(U){n.enabled!==!1&&(U.pointerType==="touch"?T(U):dt(U))}function wt(U){xe(U),R.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",wt)),n.dispatchEvent(Kc),s=r.NONE}function Et(U){xe(U)}function st(U){let q;switch(U.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case Gi.DOLLY:if(n.enableZoom===!1)return;_e(U),s=r.DOLLY;break;case Gi.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;ce(U),s=r.PAN}else{if(n.enableRotate===!1)return;ae(U),s=r.ROTATE}break;case Gi.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;ae(U),s=r.ROTATE}else{if(n.enablePan===!1)return;ce(U),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(fa)}function dt(U){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;de(U);break;case r.DOLLY:if(n.enableZoom===!1)return;pe(U);break;case r.PAN:if(n.enablePan===!1)return;Le(U);break}}function qt(U){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(U.preventDefault(),n.dispatchEvent(fa),ee(U),n.dispatchEvent(Kc))}function Dt(U){n.enabled===!1||n.enablePan===!1||fe(U)}function I(U){switch(Se(U),R.length){case 1:switch(n.touches.ONE){case Vi.ROTATE:if(n.enableRotate===!1)return;te(),s=r.TOUCH_ROTATE;break;case Vi.PAN:if(n.enablePan===!1)return;$(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),s=r.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;De(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(fa)}function T(U){switch(Se(U),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Pe(U),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ke(U),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ye(U),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;it(U),n.update();break;default:s=r.NONE}}function ie(U){n.enabled!==!1&&U.preventDefault()}function ve(U){R.push(U)}function xe(U){delete B[U.pointerId];for(let q=0;q<R.length;q++)if(R[q].pointerId==U.pointerId){R.splice(q,1);return}}function Se(U){let q=B[U.pointerId];q===void 0&&(q=new Ve,B[U.pointerId]=q),q.set(U.pageX,U.pageY)}function Ne(U){const q=U.pointerId===R[0].pointerId?R[1]:R[0];return B[q.pointerId]}n.domElement.addEventListener("contextmenu",ie),n.domElement.addEventListener("pointerdown",St),n.domElement.addEventListener("pointercancel",Et),n.domElement.addEventListener("wheel",qt,{passive:!1}),this.update()}}const Pu={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Jr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const d0=new yu(-1,1,1,-1,0,1),Ua=new kn;Ua.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3));Ua.setAttribute("uv",new Jt([0,2,0,0,2,0],2));class Cu{constructor(e){this._mesh=new Dn(Ua,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,d0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Du extends Jr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qo.clone(e.uniforms),this.material=new hn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Cu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $c extends Jr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let d,l;this.inverse?(d=0,l=1):(d=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,d,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class f0 extends Jr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class h0{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ve);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Ln(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Du(Pu),this.clock=new l0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const d=this.passes[r];if(d.enabled!==!1){if(d.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),d.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),d.needsSwap){if(n){const l=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}$c!==void 0&&(d instanceof $c?n=!0:d instanceof f0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class p0 extends Jr{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new lt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,d;this.overrideMaterial!==void 0&&(d=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=d),e.autoClear=r}}const m0={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new lt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class fr extends Jr{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Ve(e.x,e.y):new Ve(256,256),this.clearColor=new lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);this.renderTargetBright=new Ln(s,d),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const g=new Ln(s,d);g.texture.name="UnrealBloomPass.h"+v,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const M=new Ln(s,d);M.texture.name="UnrealBloomPass.v"+v,M.texture.generateMipmaps=!1,this.renderTargetsVertical.push(M),s=Math.round(s/2),d=Math.round(d/2)}const l=m0;this.highPassUniforms=Qo.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new hn({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];s=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[v])),this.separableBlurMaterials[v].uniforms.texSize.value=new Ve(s,d),s=Math.round(s/2),d=Math.round(d/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const m=Pu;this.copyUniforms=Qo.clone(m.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new hn({uniforms:this.copyUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,blending:ga,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new lt,this.oldClearAlpha=1,this.basic=new $r,this.fsQuad=new Cu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.texSize.value=new Ve(n,r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const d=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[h].uniforms.direction.value=fr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=fr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=d}getSeperableBlurMaterial(e){return new hn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ve(.5,.5)},direction:{value:new Ve(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new hn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}fr.BlurDirectionX=new Ve(1,0);fr.BlurDirectionY=new Ve(0,1);const g0={uniforms:{tDiffuse:{value:null},resolution:{value:new Ve(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`},{abs:wa,cos:v0,sin:Yo,cosh:U0,sinh:ha,acos:_0,acosh:x0,min:k0,max:Yr,round:B0,sqrt:Wr,sign:G0,floor:V0,log:H0,PI:qo}=Math,je={curvature:0,edges:[],vertices:[],ranges:[]},y0=a=>{Object.assign(je,a)},ka=(a,e,t=null)=>{const n=t===null?je.curvature:t;let r=0;for(let s=0;s<a.length;s++)r+=a[s]*e[s]*(s===a.length-1&&n||1);return r},Ea=a=>{if(Oe.dimensions===3&&Oe.projection==="stereographic")return a;if(a=a.slice(),Oe.projection==="orthographic")return a[a.length-1]=0,a;const t=1/((-je.curvature*{stereographic:1,klein:0,inverted:-1}[Oe.projection]||0)+a[a.length-1]);for(let n=0;n<a.length-1;n++)a[n]*=t;if(a[a.length-1]=["jemisphere","upperhalf"].includes(Oe.projection)?1/(1+a[a.length-1]):0,Oe.projection==="upperhalf"){const n=2/(1+a[0]);for(let r=1;r<a.length;r++)a[r-1]=a[r]*n;Oe.dimensions===4&&(a[2]*=-1),a[a.length-1]=0}return a},b0=(a,e,t)=>{const n=_0(ka(a,e)),r=Yo(n);if(r===0)return[];const s=[];for(let d=t;d<1;d+=t){const l=Yo((1-d)*n)/r,h=Yo(d*n)/r,p=new Array(Oe.dimensions);for(let m=0;m<Oe.dimensions;m++)p[m]=a[m]*l+e[m]*h;s.push(p)}return s},M0=(a,e,t)=>{const n=x0(-ka(a,e)),r=ha(n);if(r===0)return[];const s=[];for(let d=t;d<1;d+=t){const l=ha((1-d)*n)/r,h=ha(d*n)/r,p=new Array(Oe.dimensions);for(let m=0;m<Oe.dimensions;m++)p[m]=a[m]*l+e[m]*h;s.push(p)}return s},Ba=(a,e)=>{if(Oe.segments===0||!Oe.curve)return[];const t=1/Oe.segments;return je.curvature>0?b0(a,e,t):je.curvature<0?M0(a,e,t):[]},pa=(a,e)=>{const[t,n]=a,r=v0(e),s=Yo(e);a[0]=t*r-n*s,a[1]=t*s+n*r},ma=(a,e)=>{if(je.curvature!==0){const t=e/Wr(ka(a,a,1)),n=new Array(Oe.dimensions-1);for(let r=0;r<Oe.dimensions-1;r++)n[r]=a[r]*t;Zo(a,n)}else for(let t=0;t<Oe.dimensions;t++)a[t]*=1-e},Zo=(a,e)=>{const[t,n,r,s]=a,[d,l,h]=e,p=je.curvature,m=Wr(1-p*d*d),v=Wr(1-p*l*l),g=d,M=l;if(p!==0)if(Oe.dimensions===3)a[0]=t*m+n*g*M+r*g*v,a[1]=+n*v-p*r*M,a[2]=-p*t*g+n*m*M+r*m*v;else if(h){const P=Wr(1-p*h*h),y=h;a[0]=t*m-p*s*g,a[1]=-p*t*g*M+n*v-p*s*m*M,a[2]=-p*t*v*g*y-p*n*M*y+r*P-p*s*m*v*y,a[3]=t*v*P*g+n*P*M+r*y+s*m*v*P}else a[0]=t*m-p*s*g,a[1]=-p*t*g*M+n*v-p*s*m*M,a[3]=t*v*g+n*M+s*m*v;else a[0]=t+d,a[1]=n+l,h&&(a[2]=r+h)};let Bt,nn,Ur,An,Ti;const eo=new Hr,S0={background:0,edges:3754411,vertices:240116},Lu=new lt,w0=()=>{Bt=new Fa,Bt.setPixelRatio(window.devicePixelRatio),Bt.setSize(window.innerWidth,window.innerHeight),Bt.setClearColor(new lt(S0.background),1),Bt.domElement.id="c3d",document.body.appendChild(Bt.domElement),nn=new bn(90,window.innerWidth/window.innerHeight,.001,1e5),nn.position.set(0,0,-1),nn.up.set(0,1,0),nn.lookAt(0,0,0),nn.zoom=Math.min(1,window.innerWidth/window.innerHeight),nn.updateProjectionMatrix(),Ur=new s0,Ur.add(eo),nn.updateProjectionMatrix(),Ur.add(nn),An=new u0(nn,Bt.domElement),An.target.set(0,0,0),An.minDistance=0,An.maxDistance=100,An.addEventListener("change",$n),An.update(),An.enabled=!1,Bt.domElement.addEventListener("dblclick",()=>{An.position0.set(0,0,An.position0.z===-1?-.25:-1,0,0),An.reset()}),Ti=new h0(Bt),Ti.addPass(new p0(Ur,nn));const a=new Du(g0),e=Bt.getPixelRatio();a.material.uniforms.resolution.value.x=1/(window.innerWidth*e),a.material.uniforms.resolution.value.y=1/(window.innerHeight*e),Ti.addPass(a),Bt.toneMapping=iu,Bt.toneMappingExposure=1.5;const t=new fr(new Ve(window.innerWidth,window.innerHeight),1.5,0,0);return Ti.addPass(t),Iu(),Ru(),{composer:Ti,renderer:Bt,scene:Ur,camera:nn,controls:An,bloomPass:t,fxaaPass:a}},jt=new an,E0=.06,Qc=.025,T0=new Na(E0,16,16),Ga=new za(Qc,Qc,1,8,1,!1);Ga.translate(0,.5,0);Ga.rotateX(Math.PI/2);let rn=null,on=null,Ta=5e3,Aa=5e4;const Ru=()=>{rn=new Eu(T0,new $r,Ta),rn.setColorAt(0,new lt),rn.count=0,rn.instanceMatrix.setUsage(Ko),rn.instanceColor.setUsage(Ko),eo.add(rn)},Iu=()=>{on=new Eu(Ga,new $r,Aa),on.setColorAt(0,new lt),on.count=0,on.instanceMatrix.setUsage(Ko),on.instanceColor.setUsage(Ko),eo.add(on)},A0=([a,e])=>{e>Ta&&(Ta=e,rn.dispose(),eo.remove(rn),Ru(),a=0),rn.count=e;for(let t=a;t<e;t++){const{vertex:n,color:r}=je.vertices[t];jt.matrix.identity(),jt.matrixWorld.identity(),jt.quaternion.identity(),jt.position.set(...Ea(n)),Oe.dimensions===4?jt.scale.setScalar(Oe.thickness/Yr(1,wa(n[3]))):jt.scale.setScalar(Oe.thickness),jt.updateMatrix(),rn.setMatrixAt(t,jt.matrix),rn.setColorAt(t,Lu.set(r))}rn.instanceMatrix.needsUpdate=!0,rn.instanceColor.needsUpdate=!0},P0=([a,e])=>{const t=Oe.curve?Oe.segments:1,n=e*t;n>Aa&&(Aa=n,on.dispose(),eo.remove(on),Iu(),a=0),on.count=n;for(let r=a;r<e;r++){const s=je.edges[r];let d=s.start,l=s.segments[0]||s.end;for(let h=0;h<t;h++){const p=Ea(d),m=Ea(l);jt.matrix.identity(),jt.matrixWorld.identity(),jt.quaternion.identity(),jt.position.set(...p);let v,g;Oe.dimensions===4?v=g=Oe.thickness/Yr(1,wa(s.start[3]),wa(s.end[3])):v=g=Oe.thickness;const M=m[0]-p[0],P=m[1]-p[1],y=m[2]-p[2];jt.scale.set(v,g,Wr(M*M+P*P+y*y)),jt.lookAt(...m),jt.updateMatrix(),on.setMatrixAt(r*t+h,jt.matrix),on.setColorAt(r*t+h,Lu.set(s.color)),d=l,l=s.segments[h+1]||s.end}}on.instanceMatrix.needsUpdate=!0,on.instanceColor.needsUpdate=!0},Ci=a=>{let e,t;a===!0?(e=[0,je.vertices.length],t=[0,je.edges.length]):(e=a.vertices,t=a.edges),rn.visible=Oe.vertices,Oe.vertices&&A0(e),on.visible=Oe.edges,Oe.edges&&P0(t)},$n=()=>{Ti.render()};function C0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Pa={},D0={get exports(){return Pa},set exports(a){Pa=a}};(function(a,e){(function(t){a.exports=t()})(function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(i){return!(!i||!i.Window)&&i instanceof i.Window};var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.getWindow=function(i){return(0,t.default)(i)?i:(i.ownerDocument||i).defaultView||s.window},n.init=d,n.window=n.realWindow=void 0;var r=void 0;n.realWindow=r;var s=void 0;function d(i){n.realWindow=r=i;var o=i.document.createTextNode("");o.ownerDocument!==i.document&&typeof i.wrap=="function"&&i.wrap(o)===o&&(i=i.wrap(i)),n.window=s=i}n.window=s,typeof window<"u"&&window&&d(window);var l={};function h(i){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},h(i)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var p=function(i){return!!i&&h(i)==="object"},m=function(i){return typeof i=="function"},v={window:function(i){return i===n.window||(0,t.default)(i)},docFrag:function(i){return p(i)&&i.nodeType===11},object:p,func:m,number:function(i){return typeof i=="number"},bool:function(i){return typeof i=="boolean"},string:function(i){return typeof i=="string"},element:function(i){if(!i||h(i)!=="object")return!1;var o=n.getWindow(i)||n.window;return/object|function/.test(typeof Element>"u"?"undefined":h(Element))?i instanceof Element||i instanceof o.Element:i.nodeType===1&&typeof i.nodeName=="string"},plainObject:function(i){return p(i)&&!!i.constructor&&/function Object\b/.test(i.constructor.toString())},array:function(i){return p(i)&&i.length!==void 0&&m(i.splice)}};l.default=v;var g={};function M(i){var o=i.interaction;if(o.prepared.name==="drag"){var c=o.prepared.axis;c==="x"?(o.coords.cur.page.y=o.coords.start.page.y,o.coords.cur.client.y=o.coords.start.client.y,o.coords.velocity.client.y=0,o.coords.velocity.page.y=0):c==="y"&&(o.coords.cur.page.x=o.coords.start.page.x,o.coords.cur.client.x=o.coords.start.client.x,o.coords.velocity.client.x=0,o.coords.velocity.page.x=0)}}function P(i){var o=i.iEvent,c=i.interaction;if(c.prepared.name==="drag"){var u=c.prepared.axis;if(u==="x"||u==="y"){var f=u==="x"?"y":"x";o.page[f]=c.coords.start.page[f],o.client[f]=c.coords.start.client[f],o.delta[f]=0}}}Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var y={id:"actions/drag",install:function(i){var o=i.actions,c=i.Interactable,u=i.defaults;c.prototype.draggable=y.draggable,o.map.drag=y,o.methodDict.drag="draggable",u.actions.drag=y.defaults},listeners:{"interactions:before-action-move":M,"interactions:action-resume":M,"interactions:action-move":P,"auto-start:check":function(i){var o=i.interaction,c=i.interactable,u=i.buttons,f=c.options.drag;if(f&&f.enabled&&(!o.pointerIsDown||!/mouse|pointer/.test(o.pointerType)||u&c.options.drag.mouseButtons))return i.action={name:"drag",axis:f.lockAxis==="start"?f.startAxis:f.lockAxis},!1}},draggable:function(i){return l.default.object(i)?(this.options.drag.enabled=i.enabled!==!1,this.setPerAction("drag",i),this.setOnEvents("drag",i),/^(xy|x|y|start)$/.test(i.lockAxis)&&(this.options.drag.lockAxis=i.lockAxis),/^(xy|x|y)$/.test(i.startAxis)&&(this.options.drag.startAxis=i.startAxis),this):l.default.bool(i)?(this.options.drag.enabled=i,this):this.options.drag},beforeMove:M,move:P,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},b=y;g.default=b;var C={};Object.defineProperty(C,"__esModule",{value:!0}),C.default=void 0;var O={init:function(i){var o=i;O.document=o.document,O.DocumentFragment=o.DocumentFragment||A,O.SVGElement=o.SVGElement||A,O.SVGSVGElement=o.SVGSVGElement||A,O.SVGElementInstance=o.SVGElementInstance||A,O.Element=o.Element||A,O.HTMLElement=o.HTMLElement||O.Element,O.Event=o.Event,O.Touch=o.Touch||A,O.PointerEvent=o.PointerEvent||o.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function A(){}var N=O;C.default=N;var R={};Object.defineProperty(R,"__esModule",{value:!0}),R.default=void 0;var B={init:function(i){var o=C.default.Element,c=i.navigator||{};B.supportsTouch="ontouchstart"in i||l.default.func(i.DocumentTouch)&&C.default.document instanceof i.DocumentTouch,B.supportsPointerEvent=c.pointerEnabled!==!1&&!!C.default.PointerEvent,B.isIOS=/iP(hone|od|ad)/.test(c.platform),B.isIOS7=/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),B.isIe9=/MSIE 9/.test(c.userAgent),B.isOperaMobile=c.appName==="Opera"&&B.supportsTouch&&/Presto/.test(c.userAgent),B.prefixedMatchesSelector="matches"in o.prototype?"matches":"webkitMatchesSelector"in o.prototype?"webkitMatchesSelector":"mozMatchesSelector"in o.prototype?"mozMatchesSelector":"oMatchesSelector"in o.prototype?"oMatchesSelector":"msMatchesSelector",B.pEventTypes=B.supportsPointerEvent?C.default.PointerEvent===i.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,B.wheelEvent=C.default.document&&"onmousewheel"in C.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},Y=B;R.default=Y;var E={};function z(i){var o=i.parentNode;if(l.default.docFrag(o)){for(;(o=o.host)&&l.default.docFrag(o););return o}return o}function H(i,o){return n.window!==n.realWindow&&(o=o.replace(/\/deep\//g," ")),i[R.default.prefixedMatchesSelector](o)}Object.defineProperty(E,"__esModule",{value:!0}),E.closest=function(i,o){for(;l.default.element(i);){if(H(i,o))return i;i=z(i)}return null},E.getActualElement=function(i){return i.correspondingUseElement||i},E.getElementClientRect=W,E.getElementRect=function(i){var o=W(i);if(!R.default.isIOS7&&o){var c=Q(n.getWindow(i));o.left+=c.x,o.right+=c.x,o.top+=c.y,o.bottom+=c.y}return o},E.getPath=function(i){for(var o=[];i;)o.push(i),i=z(i);return o},E.getScrollXY=Q,E.indexOfDeepestElement=function(i){for(var o,c=[],u=0;u<i.length;u++){var f=i[u],_=i[o];if(f&&u!==o)if(_){var w=le(f),x=le(_);if(w!==f.ownerDocument)if(x!==f.ownerDocument)if(w!==x){c=c.length?c:ue(_);var S=void 0;if(_ instanceof C.default.HTMLElement&&f instanceof C.default.SVGElement&&!(f instanceof C.default.SVGSVGElement)){if(f===x)continue;S=f.ownerSVGElement}else S=f;for(var D=ue(S,_.ownerDocument),F=0;D[F]&&D[F]===c[F];)F++;var k=[D[F-1],D[F],c[F]];if(k[0])for(var J=k[0].lastChild;J;){if(J===k[1]){o=u,c=D;break}if(J===k[2])break;J=J.previousSibling}}else se=f,j=_,(parseInt(n.getWindow(se).getComputedStyle(se).zIndex,10)||0)>=(parseInt(n.getWindow(j).getComputedStyle(j).zIndex,10)||0)&&(o=u);else o=u}else o=u}var se,j;return o},E.matchesSelector=H,E.matchesUpTo=function(i,o,c){for(;l.default.element(i);){if(H(i,o))return!0;if((i=z(i))===c)return H(i,o)}return!1},E.nodeContains=function(i,o){if(i.contains)return i.contains(o);for(;o;){if(o===i)return!0;o=o.parentNode}return!1},E.parentNode=z,E.trySelector=function(i){return!!l.default.string(i)&&(C.default.document.querySelector(i),!0)};var le=function(i){return i.parentNode||i.host};function ue(i,o){for(var c,u=[],f=i;(c=le(f))&&f!==o&&c!==f.ownerDocument;)u.unshift(f),f=c;return u}function Q(i){return{x:(i=i||n.window).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop}}function W(i){var o=i instanceof C.default.SVGElement?i.getBoundingClientRect():i.getClientRects()[0];return o&&{left:o.left,right:o.right,top:o.top,bottom:o.bottom,width:o.width||o.right-o.left,height:o.height||o.bottom-o.top}}var V={};Object.defineProperty(V,"__esModule",{value:!0}),V.default=function(i,o){for(var c in o)i[c]=o[c];return i};var ae={};function _e(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}function ce(i,o,c){return i==="parent"?(0,E.parentNode)(c):i==="self"?o.getRect(c):(0,E.closest)(c,i)}Object.defineProperty(ae,"__esModule",{value:!0}),ae.addEdges=function(i,o,c){i.left&&(o.left+=c.x),i.right&&(o.right+=c.x),i.top&&(o.top+=c.y),i.bottom&&(o.bottom+=c.y),o.width=o.right-o.left,o.height=o.bottom-o.top},ae.getStringOptionResult=ce,ae.rectToXY=function(i){return i&&{x:"x"in i?i.x:i.left,y:"y"in i?i.y:i.top}},ae.resolveRectLike=function(i,o,c,u){var f,_=i;return l.default.string(_)?_=ce(_,o,c):l.default.func(_)&&(_=_.apply(void 0,function(w){if(Array.isArray(w))return _e(w)}(f=u)||function(w){if(typeof Symbol<"u"&&w[Symbol.iterator]!=null||w["@@iterator"]!=null)return Array.from(w)}(f)||function(w,x){if(w){if(typeof w=="string")return _e(w,x);var S=Object.prototype.toString.call(w).slice(8,-1);return S==="Object"&&w.constructor&&(S=w.constructor.name),S==="Map"||S==="Set"?Array.from(w):S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)?_e(w,x):void 0}}(f)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),l.default.element(_)&&(_=(0,E.getElementRect)(_)),_},ae.tlbrToXywh=function(i){return!i||"x"in i&&"y"in i||((i=(0,V.default)({},i)).x=i.left||0,i.y=i.top||0,i.width=i.width||(i.right||0)-i.x,i.height=i.height||(i.bottom||0)-i.y),i},ae.xywhToTlbr=function(i){return!i||"left"in i&&"top"in i||((i=(0,V.default)({},i)).left=i.x||0,i.top=i.y||0,i.right=i.right||i.left+i.width,i.bottom=i.bottom||i.top+i.height),i};var de={};Object.defineProperty(de,"__esModule",{value:!0}),de.default=function(i,o,c){var u=i.options[c],f=u&&u.origin||i.options.origin,_=(0,ae.resolveRectLike)(f,i,o,[i&&o]);return(0,ae.rectToXY)(_)||{x:0,y:0}};var pe={};function Le(i){return i.trim().split(/ +/)}Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=function i(o,c,u){if(u=u||{},l.default.string(o)&&o.search(" ")!==-1&&(o=Le(o)),l.default.array(o))return o.reduce(function(S,D){return(0,V.default)(S,i(D,c,u))},u);if(l.default.object(o)&&(c=o,o=""),l.default.func(c))u[o]=u[o]||[],u[o].push(c);else if(l.default.array(c))for(var f=0;f<c.length;f++){var _;_=c[f],i(o,_,u)}else if(l.default.object(c))for(var w in c){var x=Le(w).map(function(S){return"".concat(o).concat(S)});i(x,c[w],u)}return u};var ee={};Object.defineProperty(ee,"__esModule",{value:!0}),ee.default=void 0,ee.default=function(i,o){return Math.sqrt(i*i+o*o)};var fe={};Object.defineProperty(fe,"__esModule",{value:!0}),fe.default=function(i,o){i.__set||(i.__set={});var c=function(f){typeof i[f]!="function"&&f!=="__set"&&Object.defineProperty(i,f,{get:function(){return f in i.__set?i.__set[f]:i.__set[f]=o[f]},set:function(_){i.__set[f]=_},configurable:!0})};for(var u in o)c(u);return i};var te={};function $(i){return i instanceof C.default.Event||i instanceof C.default.Touch}function Ae(i,o,c){return i=i||"page",(c=c||{}).x=o[i+"X"],c.y=o[i+"Y"],c}function Ce(i,o){return o=o||{x:0,y:0},R.default.isOperaMobile&&$(i)?(Ae("screen",i,o),o.x+=window.scrollX,o.y+=window.scrollY):Ae("page",i,o),o}function De(i,o){return o=o||{},R.default.isOperaMobile&&$(i)?Ae("screen",i,o):Ae("client",i,o),o}function Pe(i){var o=[];return l.default.array(i)?(o[0]=i[0],o[1]=i[1]):i.type==="touchend"?i.touches.length===1?(o[0]=i.touches[0],o[1]=i.changedTouches[0]):i.touches.length===0&&(o[0]=i.changedTouches[0],o[1]=i.changedTouches[1]):(o[0]=i.touches[0],o[1]=i.touches[1]),o}function ke(i){for(var o={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},c=0;c<i.length;c++){var u=i[c];for(var f in o)o[f]+=u[f]}for(var _ in o)o[_]/=i.length;return o}Object.defineProperty(te,"__esModule",{value:!0}),te.coordsToEvent=function(i){return{coords:i,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},te.copyCoords=function(i,o){i.page=i.page||{},i.page.x=o.page.x,i.page.y=o.page.y,i.client=i.client||{},i.client.x=o.client.x,i.client.y=o.client.y,i.timeStamp=o.timeStamp},te.getClientXY=De,te.getEventTargets=function(i){var o=l.default.func(i.composedPath)?i.composedPath():i.path;return[E.getActualElement(o?o[0]:i.target),E.getActualElement(i.currentTarget)]},te.getPageXY=Ce,te.getPointerId=function(i){return l.default.number(i.pointerId)?i.pointerId:i.identifier},te.getPointerType=function(i){return l.default.string(i.pointerType)?i.pointerType:l.default.number(i.pointerType)?[void 0,void 0,"touch","pen","mouse"][i.pointerType]:/touch/.test(i.type||"")||i instanceof C.default.Touch?"touch":"mouse"},te.getTouchPair=Pe,te.getXY=Ae,te.isNativePointer=$,te.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},te.pointerAverage=ke,Object.defineProperty(te,"pointerExtend",{enumerable:!0,get:function(){return fe.default}}),te.setCoordDeltas=function(i,o,c){i.page.x=c.page.x-o.page.x,i.page.y=c.page.y-o.page.y,i.client.x=c.client.x-o.client.x,i.client.y=c.client.y-o.client.y,i.timeStamp=c.timeStamp-o.timeStamp},te.setCoordVelocity=function(i,o){var c=Math.max(o.timeStamp/1e3,.001);i.page.x=o.page.x/c,i.page.y=o.page.y/c,i.client.x=o.client.x/c,i.client.y=o.client.y/c,i.timeStamp=c},te.setCoords=function(i,o,c){var u=o.length>1?ke(o):o[0];Ce(u,i.page),De(u,i.client),i.timeStamp=c},te.setZeroCoords=function(i){i.page.x=0,i.page.y=0,i.client.x=0,i.client.y=0},te.touchAngle=function(i,o){var c=o+"X",u=o+"Y",f=Pe(i),_=f[1][c]-f[0][c],w=f[1][u]-f[0][u];return 180*Math.atan2(w,_)/Math.PI},te.touchBBox=function(i){if(!i.length)return null;var o=Pe(i),c=Math.min(o[0].pageX,o[1].pageX),u=Math.min(o[0].pageY,o[1].pageY),f=Math.max(o[0].pageX,o[1].pageX),_=Math.max(o[0].pageY,o[1].pageY);return{x:c,y:u,left:c,top:u,right:f,bottom:_,width:f-c,height:_-u}},te.touchDistance=function(i,o){var c=o+"X",u=o+"Y",f=Pe(i),_=f[0][c]-f[1][c],w=f[0][u]-f[1][u];return(0,ee.default)(_,w)};var He={};function Ye(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function it(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(He,"__esModule",{value:!0}),He.BaseEvent=void 0;var St=function(){function i(u){(function(f,_){if(!(f instanceof _))throw new TypeError("Cannot call a class as a function")})(this,i),it(this,"immediatePropagationStopped",!1),it(this,"propagationStopped",!1),this._interaction=u}var o,c;return o=i,(c=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&Ye(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();He.BaseEvent=St,Object.defineProperty(St.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var qe={};Object.defineProperty(qe,"__esModule",{value:!0}),qe.remove=qe.merge=qe.from=qe.findIndex=qe.find=qe.contains=void 0,qe.contains=function(i,o){return i.indexOf(o)!==-1},qe.remove=function(i,o){return i.splice(i.indexOf(o),1)};var wt=function(i,o){for(var c=0;c<o.length;c++){var u=o[c];i.push(u)}return i};qe.merge=wt,qe.from=function(i){return wt([],i)};var Et=function(i,o){for(var c=0;c<i.length;c++)if(o(i[c],c,i))return c;return-1};qe.findIndex=Et,qe.find=function(i,o){return i[Et(i,o)]};var st={};function dt(i){return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},dt(i)}function qt(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Dt(i,o){return Dt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Dt(i,o)}function I(i,o){if(o&&(dt(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(i)}function T(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ie(i){return ie=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},ie(i)}function ve(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(st,"__esModule",{value:!0}),st.DropEvent=void 0;var xe=function(i){(function(x,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(S&&S.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),Object.defineProperty(x,"prototype",{writable:!1}),S&&Dt(x,S)})(w,i);var o,c,u,f,_=(u=w,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var x,S=ie(u);if(f){var D=ie(this).constructor;x=Reflect.construct(S,arguments,D)}else x=S.apply(this,arguments);return I(this,x)});function w(x,S,D){var F;(function(j,he){if(!(j instanceof he))throw new TypeError("Cannot call a class as a function")})(this,w),ve(T(F=_.call(this,S._interaction)),"dropzone",void 0),ve(T(F),"dragEvent",void 0),ve(T(F),"relatedTarget",void 0),ve(T(F),"draggable",void 0),ve(T(F),"propagationStopped",!1),ve(T(F),"immediatePropagationStopped",!1);var k=D==="dragleave"?x.prev:x.cur,J=k.element,se=k.dropzone;return F.type=D,F.target=J,F.currentTarget=J,F.dropzone=se,F.dragEvent=S,F.relatedTarget=S.target,F.draggable=S.interactable,F.timeStamp=S.timeStamp,F}return o=w,(c=[{key:"reject",value:function(){var x=this,S=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&S.cur.dropzone===this.dropzone&&S.cur.element===this.target)if(S.prev.dropzone=this.dropzone,S.prev.element=this.target,S.rejected=!0,S.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var D=S.activeDrops,F=qe.findIndex(D,function(J){var se=J.dropzone,j=J.element;return se===x.dropzone&&j===x.target});S.activeDrops.splice(F,1);var k=new w(S,this.dragEvent,"dropdeactivate");k.dropzone=this.dropzone,k.target=this.target,this.dropzone.fire(k)}else this.dropzone.fire(new w(S,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&qt(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),w}(He.BaseEvent);st.DropEvent=xe;var Se={};function Ne(i,o){for(var c=0;c<i.slice().length;c++){var u=i.slice()[c],f=u.dropzone,_=u.element;o.dropzone=f,o.target=_,f.fire(o),o.propagationStopped=o.immediatePropagationStopped=!1}}function U(i,o){for(var c=function(_,w){for(var x=_.interactables,S=[],D=0;D<x.list.length;D++){var F=x.list[D];if(F.options.drop.enabled){var k=F.options.drop.accept;if(!(l.default.element(k)&&k!==w||l.default.string(k)&&!E.matchesSelector(w,k)||l.default.func(k)&&!k({dropzone:F,draggableElement:w})))for(var J=l.default.string(F.target)?F._context.querySelectorAll(F.target):l.default.array(F.target)?F.target:[F.target],se=0;se<J.length;se++){var j=J[se];j!==w&&S.push({dropzone:F,element:j,rect:F.getRect(j)})}}}return S}(i,o),u=0;u<c.length;u++){var f=c[u];f.rect=f.dropzone.getRect(f.element)}return c}function q(i,o,c){for(var u=i.dropState,f=i.interactable,_=i.element,w=[],x=0;x<u.activeDrops.length;x++){var S=u.activeDrops[x],D=S.dropzone,F=S.element,k=S.rect;w.push(D.dropCheck(o,c,f,_,F,k)?F:null)}var J=E.indexOfDeepestElement(w);return u.activeDrops[J]||null}function we(i,o,c){var u=i.dropState,f={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return c.type==="dragstart"&&(f.activate=new st.DropEvent(u,c,"dropactivate"),f.activate.target=null,f.activate.dropzone=null),c.type==="dragend"&&(f.deactivate=new st.DropEvent(u,c,"dropdeactivate"),f.deactivate.target=null,f.deactivate.dropzone=null),u.rejected||(u.cur.element!==u.prev.element&&(u.prev.dropzone&&(f.leave=new st.DropEvent(u,c,"dragleave"),c.dragLeave=f.leave.target=u.prev.element,c.prevDropzone=f.leave.dropzone=u.prev.dropzone),u.cur.dropzone&&(f.enter=new st.DropEvent(u,c,"dragenter"),c.dragEnter=u.cur.element,c.dropzone=u.cur.dropzone)),c.type==="dragend"&&u.cur.dropzone&&(f.drop=new st.DropEvent(u,c,"drop"),c.dropzone=u.cur.dropzone,c.relatedTarget=u.cur.element),c.type==="dragmove"&&u.cur.dropzone&&(f.move=new st.DropEvent(u,c,"dropmove"),f.move.dragmove=c,c.dropzone=u.cur.dropzone)),f}function ye(i,o){var c=i.dropState,u=c.activeDrops,f=c.cur,_=c.prev;o.leave&&_.dropzone.fire(o.leave),o.enter&&f.dropzone.fire(o.enter),o.move&&f.dropzone.fire(o.move),o.drop&&f.dropzone.fire(o.drop),o.deactivate&&Ne(u,o.deactivate),c.prev.dropzone=f.dropzone,c.prev.element=f.element}function Re(i,o){var c=i.interaction,u=i.iEvent,f=i.event;if(u.type==="dragmove"||u.type==="dragend"){var _=c.dropState;o.dynamicDrop&&(_.activeDrops=U(o,c.element));var w=u,x=q(c,w,f);_.rejected=_.rejected&&!!x&&x.dropzone===_.cur.dropzone&&x.element===_.cur.element,_.cur.dropzone=x&&x.dropzone,_.cur.element=x&&x.element,_.events=we(c,0,w)}}Object.defineProperty(Se,"__esModule",{value:!0}),Se.default=void 0;var Fe={id:"actions/drop",install:function(i){var o=i.actions,c=i.interactStatic,u=i.Interactable,f=i.defaults;i.usePlugin(g.default),u.prototype.dropzone=function(_){return function(w,x){if(l.default.object(x)){if(w.options.drop.enabled=x.enabled!==!1,x.listeners){var S=(0,pe.default)(x.listeners),D=Object.keys(S).reduce(function(F,k){return F[/^(enter|leave)/.test(k)?"drag".concat(k):/^(activate|deactivate|move)/.test(k)?"drop".concat(k):k]=S[k],F},{});w.off(w.options.drop.listeners),w.on(D),w.options.drop.listeners=D}return l.default.func(x.ondrop)&&w.on("drop",x.ondrop),l.default.func(x.ondropactivate)&&w.on("dropactivate",x.ondropactivate),l.default.func(x.ondropdeactivate)&&w.on("dropdeactivate",x.ondropdeactivate),l.default.func(x.ondragenter)&&w.on("dragenter",x.ondragenter),l.default.func(x.ondragleave)&&w.on("dragleave",x.ondragleave),l.default.func(x.ondropmove)&&w.on("dropmove",x.ondropmove),/^(pointer|center)$/.test(x.overlap)?w.options.drop.overlap=x.overlap:l.default.number(x.overlap)&&(w.options.drop.overlap=Math.max(Math.min(1,x.overlap),0)),"accept"in x&&(w.options.drop.accept=x.accept),"checker"in x&&(w.options.drop.checker=x.checker),w}return l.default.bool(x)?(w.options.drop.enabled=x,w):w.options.drop}(this,_)},u.prototype.dropCheck=function(_,w,x,S,D,F){return function(k,J,se,j,he,be,me){var Ie=!1;if(!(me=me||k.getRect(be)))return!!k.options.drop.checker&&k.options.drop.checker(J,se,Ie,k,be,j,he);var Be=k.options.drop.overlap;if(Be==="pointer"){var Xe=(0,de.default)(j,he,"drag"),ut=te.getPageXY(J);ut.x+=Xe.x,ut.y+=Xe.y;var mt=ut.x>me.left&&ut.x<me.right,ot=ut.y>me.top&&ut.y<me.bottom;Ie=mt&&ot}var pt=j.getRect(he);if(pt&&Be==="center"){var _n=pt.left+pt.width/2,Wn=pt.top+pt.height/2;Ie=_n>=me.left&&_n<=me.right&&Wn>=me.top&&Wn<=me.bottom}return pt&&l.default.number(Be)&&(Ie=Math.max(0,Math.min(me.right,pt.right)-Math.max(me.left,pt.left))*Math.max(0,Math.min(me.bottom,pt.bottom)-Math.max(me.top,pt.top))/(pt.width*pt.height)>=Be),k.options.drop.checker&&(Ie=k.options.drop.checker(J,se,Ie,k,be,j,he)),Ie}(this,_,w,x,S,D,F)},c.dynamicDrop=function(_){return l.default.bool(_)?(i.dynamicDrop=_,c):i.dynamicDrop},(0,V.default)(o.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),o.methodDict.drop="dropzone",i.dynamicDrop=!1,f.actions.drop=Fe.defaults},listeners:{"interactions:before-action-start":function(i){var o=i.interaction;o.prepared.name==="drag"&&(o.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(i,o){var c=i.interaction,u=(i.event,i.iEvent);if(c.prepared.name==="drag"){var f=c.dropState;f.activeDrops=null,f.events=null,f.activeDrops=U(o,c.element),f.events=we(c,0,u),f.events.activate&&(Ne(f.activeDrops,f.events.activate),o.fire("actions/drop:start",{interaction:c,dragEvent:u}))}},"interactions:action-move":Re,"interactions:after-action-move":function(i,o){var c=i.interaction,u=i.iEvent;c.prepared.name==="drag"&&(ye(c,c.dropState.events),o.fire("actions/drop:move",{interaction:c,dragEvent:u}),c.dropState.events={})},"interactions:action-end":function(i,o){if(i.interaction.prepared.name==="drag"){var c=i.interaction,u=i.iEvent;Re(i,o),ye(c,c.dropState.events),o.fire("actions/drop:end",{interaction:c,dragEvent:u})}},"interactions:stop":function(i){var o=i.interaction;if(o.prepared.name==="drag"){var c=o.dropState;c&&(c.activeDrops=null,c.events=null,c.cur.dropzone=null,c.cur.element=null,c.prev.dropzone=null,c.prev.element=null,c.rejected=!1)}}},getActiveDrops:U,getDrop:q,getDropEvents:we,fireDropEvents:ye,defaults:{enabled:!1,accept:null,overlap:"pointer"}},ze=Fe;Se.default=ze;var Ze={};function et(i){var o=i.interaction,c=i.iEvent,u=i.phase;if(o.prepared.name==="gesture"){var f=o.pointers.map(function(D){return D.pointer}),_=u==="start",w=u==="end",x=o.interactable.options.deltaSource;if(c.touches=[f[0],f[1]],_)c.distance=te.touchDistance(f,x),c.box=te.touchBBox(f),c.scale=1,c.ds=0,c.angle=te.touchAngle(f,x),c.da=0,o.gesture.startDistance=c.distance,o.gesture.startAngle=c.angle;else if(w){var S=o.prevEvent;c.distance=S.distance,c.box=S.box,c.scale=S.scale,c.ds=0,c.angle=S.angle,c.da=0}else c.distance=te.touchDistance(f,x),c.box=te.touchBBox(f),c.scale=c.distance/o.gesture.startDistance,c.angle=te.touchAngle(f,x),c.ds=c.scale-o.gesture.scale,c.da=c.angle-o.gesture.angle;o.gesture.distance=c.distance,o.gesture.angle=c.angle,l.default.number(c.scale)&&c.scale!==1/0&&!isNaN(c.scale)&&(o.gesture.scale=c.scale)}}Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.default=void 0;var at={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(i){var o=i.actions,c=i.Interactable,u=i.defaults;c.prototype.gesturable=function(f){return l.default.object(f)?(this.options.gesture.enabled=f.enabled!==!1,this.setPerAction("gesture",f),this.setOnEvents("gesture",f),this):l.default.bool(f)?(this.options.gesture.enabled=f,this):this.options.gesture},o.map.gesture=at,o.methodDict.gesture="gesturable",u.actions.gesture=at.defaults},listeners:{"interactions:action-start":et,"interactions:action-move":et,"interactions:action-end":et,"interactions:new":function(i){i.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(i){if(!(i.interaction.pointers.length<2)){var o=i.interactable.options.gesture;if(o&&o.enabled)return i.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},G=at;Ze.default=G;var re={};function ge(i,o,c,u,f,_,w){if(!o)return!1;if(o===!0){var x=l.default.number(_.width)?_.width:_.right-_.left,S=l.default.number(_.height)?_.height:_.bottom-_.top;if(w=Math.min(w,Math.abs((i==="left"||i==="right"?x:S)/2)),x<0&&(i==="left"?i="right":i==="right"&&(i="left")),S<0&&(i==="top"?i="bottom":i==="bottom"&&(i="top")),i==="left"){var D=x>=0?_.left:_.right;return c.x<D+w}if(i==="top"){var F=S>=0?_.top:_.bottom;return c.y<F+w}if(i==="right")return c.x>(x>=0?_.right:_.left)-w;if(i==="bottom")return c.y>(S>=0?_.bottom:_.top)-w}return!!l.default.element(u)&&(l.default.element(o)?o===u:E.matchesUpTo(u,o,f))}function Te(i){var o=i.iEvent,c=i.interaction;if(c.prepared.name==="resize"&&c.resizeAxes){var u=o;c.interactable.options.resize.square?(c.resizeAxes==="y"?u.delta.x=u.delta.y:u.delta.y=u.delta.x,u.axes="xy"):(u.axes=c.resizeAxes,c.resizeAxes==="x"?u.delta.y=0:c.resizeAxes==="y"&&(u.delta.x=0))}}Object.defineProperty(re,"__esModule",{value:!0}),re.default=void 0;var Ee={id:"actions/resize",before:["actions/drag"],install:function(i){var o=i.actions,c=i.browser,u=i.Interactable,f=i.defaults;Ee.cursors=function(_){return _.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(c),Ee.defaultMargin=c.supportsTouch||c.supportsPointerEvent?20:10,u.prototype.resizable=function(_){return function(w,x,S){return l.default.object(x)?(w.options.resize.enabled=x.enabled!==!1,w.setPerAction("resize",x),w.setOnEvents("resize",x),l.default.string(x.axis)&&/^x$|^y$|^xy$/.test(x.axis)?w.options.resize.axis=x.axis:x.axis===null&&(w.options.resize.axis=S.defaults.actions.resize.axis),l.default.bool(x.preserveAspectRatio)?w.options.resize.preserveAspectRatio=x.preserveAspectRatio:l.default.bool(x.square)&&(w.options.resize.square=x.square),w):l.default.bool(x)?(w.options.resize.enabled=x,w):w.options.resize}(this,_,i)},o.map.resize=Ee,o.methodDict.resize="resizable",f.actions.resize=Ee.defaults},listeners:{"interactions:new":function(i){i.interaction.resizeAxes="xy"},"interactions:action-start":function(i){(function(o){var c=o.iEvent,u=o.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var f=c,_=u.rect;u._rects={start:(0,V.default)({},_),corrected:(0,V.default)({},_),previous:(0,V.default)({},_),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},f.edges=u.prepared.edges,f.rect=u._rects.corrected,f.deltaRect=u._rects.delta}})(i),Te(i)},"interactions:action-move":function(i){(function(o){var c=o.iEvent,u=o.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var f=c,_=u.interactable.options.resize.invert,w=_==="reposition"||_==="negate",x=u.rect,S=u._rects,D=S.start,F=S.corrected,k=S.delta,J=S.previous;if((0,V.default)(J,F),w){if((0,V.default)(F,x),_==="reposition"){if(F.top>F.bottom){var se=F.top;F.top=F.bottom,F.bottom=se}if(F.left>F.right){var j=F.left;F.left=F.right,F.right=j}}}else F.top=Math.min(x.top,D.bottom),F.bottom=Math.max(x.bottom,D.top),F.left=Math.min(x.left,D.right),F.right=Math.max(x.right,D.left);for(var he in F.width=F.right-F.left,F.height=F.bottom-F.top,F)k[he]=F[he]-J[he];f.edges=u.prepared.edges,f.rect=F,f.deltaRect=k}})(i),Te(i)},"interactions:action-end":function(i){var o=i.iEvent,c=i.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var u=o;u.edges=c.prepared.edges,u.rect=c._rects.corrected,u.deltaRect=c._rects.delta}},"auto-start:check":function(i){var o=i.interaction,c=i.interactable,u=i.element,f=i.rect,_=i.buttons;if(f){var w=(0,V.default)({},o.coords.cur.page),x=c.options.resize;if(x&&x.enabled&&(!o.pointerIsDown||!/mouse|pointer/.test(o.pointerType)||_&x.mouseButtons)){if(l.default.object(x.edges)){var S={left:!1,right:!1,top:!1,bottom:!1};for(var D in S)S[D]=ge(D,x.edges[D],w,o._latestPointer.eventTarget,u,f,x.margin||Ee.defaultMargin);S.left=S.left&&!S.right,S.top=S.top&&!S.bottom,(S.left||S.right||S.top||S.bottom)&&(i.action={name:"resize",edges:S})}else{var F=x.axis!=="y"&&w.x>f.right-Ee.defaultMargin,k=x.axis!=="x"&&w.y>f.bottom-Ee.defaultMargin;(F||k)&&(i.action={name:"resize",axes:(F?"x":"")+(k?"y":"")})}return!i.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(i){var o=i.edges,c=i.axis,u=i.name,f=Ee.cursors,_=null;if(c)_=f[u+c];else if(o){for(var w="",x=["top","bottom","left","right"],S=0;S<x.length;S++){var D=x[S];o[D]&&(w+=D)}_=f[w]}return _},defaultMargin:null},ft=Ee;re.default=ft;var _t={};Object.defineProperty(_t,"__esModule",{value:!0}),_t.default=void 0;var Ft={id:"actions",install:function(i){i.usePlugin(Ze.default),i.usePlugin(re.default),i.usePlugin(g.default),i.usePlugin(Se.default)}};_t.default=Ft;var Mt={};Object.defineProperty(Mt,"__esModule",{value:!0}),Mt.default=void 0;var ct,Tt,ln=0,rs={request:function(i){return ct(i)},cancel:function(i){return Tt(i)},init:function(i){if(ct=i.requestAnimationFrame,Tt=i.cancelAnimationFrame,!ct)for(var o=["ms","moz","webkit","o"],c=0;c<o.length;c++){var u=o[c];ct=i["".concat(u,"RequestAnimationFrame")],Tt=i["".concat(u,"CancelAnimationFrame")]||i["".concat(u,"CancelRequestAnimationFrame")]}ct=ct&&ct.bind(i),Tt=Tt&&Tt.bind(i),ct||(ct=function(f){var _=Date.now(),w=Math.max(0,16-(_-ln)),x=i.setTimeout(function(){f(_+w)},w);return ln=_+w,x},Tt=function(f){return clearTimeout(f)})}};Mt.default=rs;var Mn={};Object.defineProperty(Mn,"__esModule",{value:!0}),Mn.default=void 0,Mn.getContainer=L,Mn.getScroll=Z,Mn.getScrollSize=function(i){return l.default.window(i)&&(i=window.document.body),{x:i.scrollWidth,y:i.scrollHeight}},Mn.getScrollSizeDelta=function(i,o){var c=i.interaction,u=i.element,f=c&&c.interactable.options[c.prepared.name].autoScroll;if(!f||!f.enabled)return o(),{x:0,y:0};var _=L(f.container,c.interactable,u),w=Z(_);o();var x=Z(_);return{x:x.x-w.x,y:x.y-w.y}};var Ge={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(i){Ge.isScrolling=!0,Mt.default.cancel(Ge.i),i.autoScroll=Ge,Ge.interaction=i,Ge.prevTime=Ge.now(),Ge.i=Mt.default.request(Ge.scroll)},stop:function(){Ge.isScrolling=!1,Ge.interaction&&(Ge.interaction.autoScroll=null),Mt.default.cancel(Ge.i)},scroll:function(){var i=Ge.interaction,o=i.interactable,c=i.element,u=i.prepared.name,f=o.options[u].autoScroll,_=L(f.container,o,c),w=Ge.now(),x=(w-Ge.prevTime)/1e3,S=f.speed*x;if(S>=1){var D={x:Ge.x*S,y:Ge.y*S};if(D.x||D.y){var F=Z(_);l.default.window(_)?_.scrollBy(D.x,D.y):_&&(_.scrollLeft+=D.x,_.scrollTop+=D.y);var k=Z(_),J={x:k.x-F.x,y:k.y-F.y};(J.x||J.y)&&o.fire({type:"autoscroll",target:c,interactable:o,delta:J,interaction:i,container:_})}Ge.prevTime=w}Ge.isScrolling&&(Mt.default.cancel(Ge.i),Ge.i=Mt.default.request(Ge.scroll))},check:function(i,o){var c;return(c=i.options[o].autoScroll)==null?void 0:c.enabled},onInteractionMove:function(i){var o=i.interaction,c=i.pointer;if(o.interacting()&&Ge.check(o.interactable,o.prepared.name))if(o.simulation)Ge.x=Ge.y=0;else{var u,f,_,w,x=o.interactable,S=o.element,D=o.prepared.name,F=x.options[D].autoScroll,k=L(F.container,x,S);if(l.default.window(k))w=c.clientX<Ge.margin,u=c.clientY<Ge.margin,f=c.clientX>k.innerWidth-Ge.margin,_=c.clientY>k.innerHeight-Ge.margin;else{var J=E.getElementClientRect(k);w=c.clientX<J.left+Ge.margin,u=c.clientY<J.top+Ge.margin,f=c.clientX>J.right-Ge.margin,_=c.clientY>J.bottom-Ge.margin}Ge.x=f?1:w?-1:0,Ge.y=_?1:u?-1:0,Ge.isScrolling||(Ge.margin=F.margin,Ge.speed=F.speed,Ge.start(o))}}};function L(i,o,c){return(l.default.string(i)?(0,ae.getStringOptionResult)(i,o,c):i)||(0,n.getWindow)(c)}function Z(i){return l.default.window(i)&&(i=window.document.body),{x:i.scrollLeft,y:i.scrollTop}}var oe={id:"auto-scroll",install:function(i){var o=i.defaults,c=i.actions;i.autoScroll=Ge,Ge.now=function(){return i.now()},c.phaselessTypes.autoscroll=!0,o.perAction.autoScroll=Ge.defaults},listeners:{"interactions:new":function(i){i.interaction.autoScroll=null},"interactions:destroy":function(i){i.interaction.autoScroll=null,Ge.stop(),Ge.interaction&&(Ge.interaction=null)},"interactions:stop":Ge.stop,"interactions:action-move":function(i){return Ge.onInteractionMove(i)}}},X=oe;Mn.default=X;var ne={};Object.defineProperty(ne,"__esModule",{value:!0}),ne.copyAction=function(i,o){return i.name=o.name,i.axis=o.axis,i.edges=o.edges,i},ne.sign=void 0,ne.warnOnce=function(i,o){var c=!1;return function(){return c||(n.window.console.warn(o),c=!0),i.apply(this,arguments)}},ne.sign=function(i){return i>=0?1:-1};var Ue={};function We(i){return l.default.bool(i)?(this.options.styleCursor=i,this):i===null?(delete this.options.styleCursor,this):this.options.styleCursor}function Ke(i){return l.default.func(i)?(this.options.actionChecker=i,this):i===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.default=void 0;var $e={id:"auto-start/interactableMethods",install:function(i){var o=i.Interactable;o.prototype.getAction=function(c,u,f,_){var w=function(x,S,D,F,k){var J=x.getRect(F),se={action:null,interactable:x,interaction:D,element:F,rect:J,buttons:S.buttons||{0:1,1:4,3:8,4:16}[S.button]};return k.fire("auto-start:check",se),se.action}(this,u,f,_,i);return this.options.actionChecker?this.options.actionChecker(c,u,w,this,_,f):w},o.prototype.ignoreFrom=(0,ne.warnOnce)(function(c){return this._backCompatOption("ignoreFrom",c)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),o.prototype.allowFrom=(0,ne.warnOnce)(function(c){return this._backCompatOption("allowFrom",c)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),o.prototype.actionChecker=Ke,o.prototype.styleCursor=We}};Ue.default=$e;var Qe={};function tt(i,o,c,u,f){return o.testIgnoreAllow(o.options[i.name],c,u)&&o.options[i.name].enabled&&en(o,c,i,f)?i:null}function rt(i,o,c,u,f,_,w){for(var x=0,S=u.length;x<S;x++){var D=u[x],F=f[x],k=D.getAction(o,c,i,F);if(k){var J=tt(k,D,F,_,w);if(J)return{action:J,interactable:D,element:F}}}return{action:null,interactable:null,element:null}}function yt(i,o,c,u,f){var _=[],w=[],x=u;function S(F){_.push(F),w.push(x)}for(;l.default.element(x);){_=[],w=[],f.interactables.forEachMatch(x,S);var D=rt(i,o,c,_,w,u,f);if(D.action&&!D.interactable.options[D.action.name].manualStart)return D;x=E.parentNode(x)}return{action:null,interactable:null,element:null}}function Vt(i,o,c){var u=o.action,f=o.interactable,_=o.element;u=u||{name:null},i.interactable=f,i.element=_,(0,ne.copyAction)(i.prepared,u),i.rect=f&&u.name?f.getRect(_):null,nt(i,c),c.fire("autoStart:prepared",{interaction:i})}function en(i,o,c,u){var f=i.options,_=f[c.name].max,w=f[c.name].maxPerElement,x=u.autoStart.maxInteractions,S=0,D=0,F=0;if(!(_&&w&&x))return!1;for(var k=0;k<u.interactions.list.length;k++){var J=u.interactions.list[k],se=J.prepared.name;if(J.interacting()&&(++S>=x||J.interactable===i&&((D+=se===c.name?1:0)>=_||J.element===o&&(F++,se===c.name&&F>=w))))return!1}return x>0}function In(i,o){return l.default.number(i)?(o.autoStart.maxInteractions=i,this):o.autoStart.maxInteractions}function xt(i,o,c){var u=c.autoStart.cursorElement;u&&u!==i&&(u.style.cursor=""),i.ownerDocument.documentElement.style.cursor=o,i.style.cursor=o,c.autoStart.cursorElement=o?i:null}function nt(i,o){var c=i.interactable,u=i.element,f=i.prepared;if(i.pointerType==="mouse"&&c&&c.options.styleCursor){var _="";if(f.name){var w=c.options[f.name].cursorChecker;_=l.default.func(w)?w(f,c,u,i._interacting):o.actions.map[f.name].getCursor(f)}xt(i.element,_||"",o)}else o.autoStart.cursorElement&&xt(o.autoStart.cursorElement,"",o)}Object.defineProperty(Qe,"__esModule",{value:!0}),Qe.default=void 0;var pr={id:"auto-start/base",before:["actions"],install:function(i){var o=i.interactStatic,c=i.defaults;i.usePlugin(Ue.default),c.base.actionChecker=null,c.base.styleCursor=!0,(0,V.default)(c.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),o.maxInteractions=function(u){return In(u,i)},i.autoStart={maxInteractions:1/0,withinInteractionLimit:en,cursorElement:null}},listeners:{"interactions:down":function(i,o){var c=i.interaction,u=i.pointer,f=i.event,_=i.eventTarget;c.interacting()||Vt(c,yt(c,u,f,_,o),o)},"interactions:move":function(i,o){(function(c,u){var f=c.interaction,_=c.pointer,w=c.event,x=c.eventTarget;f.pointerType!=="mouse"||f.pointerIsDown||f.interacting()||Vt(f,yt(f,_,w,x,u),u)})(i,o),function(c,u){var f=c.interaction;if(f.pointerIsDown&&!f.interacting()&&f.pointerWasMoved&&f.prepared.name){u.fire("autoStart:before-start",c);var _=f.interactable,w=f.prepared.name;w&&_&&(_.options[w].manualStart||!en(_,f.element,f.prepared,u)?f.stop():(f.start(f.prepared,_,f.element),nt(f,u)))}}(i,o)},"interactions:stop":function(i,o){var c=i.interaction,u=c.interactable;u&&u.options.styleCursor&&xt(c.element,"",o)}},maxInteractions:In,withinInteractionLimit:en,validateAction:tt},At=pr;Qe.default=At;var gn={};Object.defineProperty(gn,"__esModule",{value:!0}),gn.default=void 0;var to={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(i,o){var c=i.interaction,u=i.eventTarget,f=i.dx,_=i.dy;if(c.prepared.name==="drag"){var w=Math.abs(f),x=Math.abs(_),S=c.interactable.options.drag,D=S.startAxis,F=w>x?"x":w<x?"y":"xy";if(c.prepared.axis=S.lockAxis==="start"?F[0]:S.lockAxis,F!=="xy"&&D!=="xy"&&D!==F){c.prepared.name=null;for(var k=u,J=function(j){if(j!==c.interactable){var he=c.interactable.options.drag;if(!he.manualStart&&j.testIgnoreAllow(he,k,u)){var be=j.getAction(c.downPointer,c.downEvent,c,k);if(be&&be.name==="drag"&&function(me,Ie){if(!Ie)return!1;var Be=Ie.options.drag.startAxis;return me==="xy"||Be==="xy"||Be===me}(F,j)&&Qe.default.validateAction(be,j,k,u,o))return j}}};l.default.element(k);){var se=o.interactables.forEachMatch(k,J);if(se){c.prepared.name="drag",c.interactable=se,c.element=k;break}k=(0,E.parentNode)(k)}}}}}};gn.default=to;var On={};function fi(i){var o=i.prepared&&i.prepared.name;if(!o)return null;var c=i.interactable.options;return c[o].hold||c[o].delay}Object.defineProperty(On,"__esModule",{value:!0}),On.default=void 0;var zt={id:"auto-start/hold",install:function(i){var o=i.defaults;i.usePlugin(Qe.default),o.perAction.hold=0,o.perAction.delay=0},listeners:{"interactions:new":function(i){i.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(i){var o=i.interaction,c=fi(o);c>0&&(o.autoStartHoldTimer=setTimeout(function(){o.start(o.prepared,o.interactable,o.element)},c))},"interactions:move":function(i){var o=i.interaction,c=i.duplicate;o.autoStartHoldTimer&&o.pointerWasMoved&&!c&&(clearTimeout(o.autoStartHoldTimer),o.autoStartHoldTimer=null)},"autoStart:before-start":function(i){var o=i.interaction;fi(o)>0&&(o.prepared.name=null)}},getHoldDuration:fi},Bn=zt;On.default=Bn;var Gn={};Object.defineProperty(Gn,"__esModule",{value:!0}),Gn.default=void 0;var Xt={id:"auto-start",install:function(i){i.usePlugin(Qe.default),i.usePlugin(On.default),i.usePlugin(gn.default)}};Gn.default=Xt;var Sn={};function os(i){return/^(always|never|auto)$/.test(i)?(this.options.preventDefault=i,this):l.default.bool(i)?(this.options.preventDefault=i?"always":"never",this):this.options.preventDefault}function no(i){var o=i.interaction,c=i.event;o.interactable&&o.interactable.checkAndPreventDefault(c)}function Ha(i){var o=i.Interactable;o.prototype.preventDefault=os,o.prototype.checkAndPreventDefault=function(c){return function(u,f,_){var w=u.options.preventDefault;if(w!=="never")if(w!=="always"){if(f.events.supportsPassive&&/^touch(start|move)$/.test(_.type)){var x=(0,n.getWindow)(_.target).document,S=f.getDocOptions(x);if(!S||!S.events||S.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(_.type)||l.default.element(_.target)&&(0,E.matchesSelector)(_.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||_.preventDefault()}else _.preventDefault()}(this,i,c)},i.interactions.docEvents.push({type:"dragstart",listener:function(c){for(var u=0;u<i.interactions.list.length;u++){var f=i.interactions.list[u];if(f.element&&(f.element===c.target||(0,E.nodeContains)(f.element,c.target)))return void f.interactable.checkAndPreventDefault(c)}}})}Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.default=void 0,Sn.install=Ha;var zu={id:"core/interactablePreventDefault",install:Ha,listeners:["down","move","up","cancel"].reduce(function(i,o){return i["interactions:".concat(o)]=no,i},{})};Sn.default=zu;var ss={};Object.defineProperty(ss,"__esModule",{value:!0}),ss.default=void 0,ss.default={};var mr,io={};Object.defineProperty(io,"__esModule",{value:!0}),io.default=void 0,function(i){i.touchAction="touchAction",i.boxSizing="boxSizing",i.noListeners="noListeners"}(mr||(mr={})),mr.touchAction,mr.boxSizing,mr.noListeners;var Nu={id:"dev-tools",install:function(){}};io.default=Nu;var hi={};Object.defineProperty(hi,"__esModule",{value:!0}),hi.default=function i(o){var c={};for(var u in o){var f=o[u];l.default.plainObject(f)?c[u]=i(f):l.default.array(f)?c[u]=qe.from(f):c[u]=f}return c};var pi={};function Wa(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var _,w,x=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(_=f.next()).done)&&(x.push(_.value),!u||x.length!==u);S=!0);}catch(F){D=!0,w=F}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return x}}(i,o)||function(c,u){if(c){if(typeof c=="string")return ja(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?ja(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ja(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}function Uu(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function mi(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(pi,"__esModule",{value:!0}),pi.default=void 0,pi.getRectOffset=qa;var ku=function(){function i(u){(function(f,_){if(!(f instanceof _))throw new TypeError("Cannot call a class as a function")})(this,i),mi(this,"states",[]),mi(this,"startOffset",{left:0,right:0,top:0,bottom:0}),mi(this,"startDelta",void 0),mi(this,"result",void 0),mi(this,"endResult",void 0),mi(this,"edges",void 0),mi(this,"interaction",void 0),this.interaction=u,this.result=ro()}var o,c;return o=i,(c=[{key:"start",value:function(u,f){var _=u.phase,w=this.interaction,x=function(D){var F=D.interactable.options[D.prepared.name],k=F.modifiers;return k&&k.length?k:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(J){var se=F[J];return se&&se.enabled&&{options:se,methods:se._methods}}).filter(function(J){return!!J})}(w);this.prepareStates(x),this.edges=(0,V.default)({},w.edges),this.startOffset=qa(w.rect,f),this.startDelta={x:0,y:0};var S=this.fillArg({phase:_,pageCoords:f,preEnd:!1});return this.result=ro(),this.startAll(S),this.result=this.setAll(S)}},{key:"fillArg",value:function(u){var f=this.interaction;return u.interaction=f,u.interactable=f.interactable,u.element=f.element,u.rect=u.rect||f.rect,u.edges=this.edges,u.startOffset=this.startOffset,u}},{key:"startAll",value:function(u){for(var f=0;f<this.states.length;f++){var _=this.states[f];_.methods.start&&(u.state=_,_.methods.start(u))}}},{key:"setAll",value:function(u){var f=u.phase,_=u.preEnd,w=u.skipModifiers,x=u.rect;u.coords=(0,V.default)({},u.pageCoords),u.rect=(0,V.default)({},x);for(var S=w?this.states.slice(w):this.states,D=ro(u.coords,u.rect),F=0;F<S.length;F++){var k,J=S[F],se=J.options,j=(0,V.default)({},u.coords),he=null;(k=J.methods)!=null&&k.set&&this.shouldDo(se,_,f)&&(u.state=J,he=J.methods.set(u),ae.addEdges(this.interaction.edges,u.rect,{x:u.coords.x-j.x,y:u.coords.y-j.y})),D.eventProps.push(he)}D.delta.x=u.coords.x-u.pageCoords.x,D.delta.y=u.coords.y-u.pageCoords.y,D.rectDelta.left=u.rect.left-x.left,D.rectDelta.right=u.rect.right-x.right,D.rectDelta.top=u.rect.top-x.top,D.rectDelta.bottom=u.rect.bottom-x.bottom;var be=this.result.coords,me=this.result.rect;if(be&&me){var Ie=D.rect.left!==me.left||D.rect.right!==me.right||D.rect.top!==me.top||D.rect.bottom!==me.bottom;D.changed=Ie||be.x!==D.coords.x||be.y!==D.coords.y}return D}},{key:"applyToInteraction",value:function(u){var f=this.interaction,_=u.phase,w=f.coords.cur,x=f.coords.start,S=this.result,D=this.startDelta,F=S.delta;_==="start"&&(0,V.default)(this.startDelta,S.delta);for(var k=0;k<[[x,D],[w,F]].length;k++){var J=Wa([[x,D],[w,F]][k],2),se=J[0],j=J[1];se.page.x+=j.x,se.page.y+=j.y,se.client.x+=j.x,se.client.y+=j.y}var he=this.result.rectDelta,be=u.rect||f.rect;be.left+=he.left,be.right+=he.right,be.top+=he.top,be.bottom+=he.bottom,be.width=be.right-be.left,be.height=be.bottom-be.top}},{key:"setAndApply",value:function(u){var f=this.interaction,_=u.phase,w=u.preEnd,x=u.skipModifiers,S=this.setAll(this.fillArg({preEnd:w,phase:_,pageCoords:u.modifiedCoords||f.coords.cur.page}));if(this.result=S,!S.changed&&(!x||x<this.states.length)&&f.interacting())return!1;if(u.modifiedCoords){var D=f.coords.cur.page,F={x:u.modifiedCoords.x-D.x,y:u.modifiedCoords.y-D.y};S.coords.x+=F.x,S.coords.y+=F.y,S.delta.x+=F.x,S.delta.y+=F.y}this.applyToInteraction(u)}},{key:"beforeEnd",value:function(u){var f=u.interaction,_=u.event,w=this.states;if(w&&w.length){for(var x=!1,S=0;S<w.length;S++){var D=w[S];u.state=D;var F=D.options,k=D.methods,J=k.beforeEnd&&k.beforeEnd(u);if(J)return this.endResult=J,!1;x=x||!x&&this.shouldDo(F,!0,u.phase,!0)}x&&f.move({event:_,preEnd:!0})}}},{key:"stop",value:function(u){var f=u.interaction;if(this.states&&this.states.length){var _=(0,V.default)({states:this.states,interactable:f.interactable,element:f.element,rect:null},u);this.fillArg(_);for(var w=0;w<this.states.length;w++){var x=this.states[w];_.state=x,x.methods.stop&&x.methods.stop(_)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(u){this.states=[];for(var f=0;f<u.length;f++){var _=u[f],w=_.options,x=_.methods,S=_.name;this.states.push({options:w,methods:x,index:f,name:S})}return this.states}},{key:"restoreInteractionCoords",value:function(u){var f=u.interaction,_=f.coords,w=f.rect,x=f.modification;if(x.result){for(var S=x.startDelta,D=x.result,F=D.delta,k=D.rectDelta,J=[[_.start,S],[_.cur,F]],se=0;se<J.length;se++){var j=Wa(J[se],2),he=j[0],be=j[1];he.page.x-=be.x,he.page.y-=be.y,he.client.x-=be.x,he.client.y-=be.y}w.left-=k.left,w.right-=k.right,w.top-=k.top,w.bottom-=k.bottom}}},{key:"shouldDo",value:function(u,f,_,w){return!(!u||u.enabled===!1||w&&!u.endOnly||u.endOnly&&!f||_==="start"&&!u.setStart)}},{key:"copyFrom",value:function(u){this.startOffset=u.startOffset,this.startDelta=u.startDelta,this.edges=u.edges,this.states=u.states.map(function(f){return(0,hi.default)(f)}),this.result=ro((0,V.default)({},u.result.coords),(0,V.default)({},u.result.rect))}},{key:"destroy",value:function(){for(var u in this)this[u]=null}}])&&Uu(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();function ro(i,o){return{rect:o,coords:i,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function qa(i,o){return i?{left:o.x-i.left,top:o.y-i.top,right:i.right-o.x,bottom:i.bottom-o.y}:{left:0,top:0,right:0,bottom:0}}pi.default=ku;var Nt={};function oo(i){var o=i.iEvent,c=i.interaction.modification.result;c&&(o.modifiers=c.eventProps)}Object.defineProperty(Nt,"__esModule",{value:!0}),Nt.addEventModifiers=oo,Nt.default=void 0,Nt.makeModifier=function(i,o){var c=i.defaults,u={start:i.start,set:i.set,beforeEnd:i.beforeEnd,stop:i.stop},f=function(_){var w=_||{};for(var x in w.enabled=w.enabled!==!1,c)x in w||(w[x]=c[x]);var S={options:w,methods:u,name:o,enable:function(){return w.enabled=!0,S},disable:function(){return w.enabled=!1,S}};return S};return o&&typeof o=="string"&&(f._defaults=c,f._methods=u),f};var Bu={id:"modifiers/base",before:["actions"],install:function(i){i.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(i){var o=i.interaction;o.modification=new pi.default(o)},"interactions:before-action-start":function(i){var o=i.interaction.modification;o.start(i,i.interaction.coords.start.page),i.interaction.edges=o.edges,o.applyToInteraction(i)},"interactions:before-action-move":function(i){return i.interaction.modification.setAndApply(i)},"interactions:before-action-end":function(i){return i.interaction.modification.beforeEnd(i)},"interactions:action-start":oo,"interactions:action-move":oo,"interactions:action-end":oo,"interactions:after-action-start":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:after-action-move":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:stop":function(i){return i.interaction.modification.stop(i)}}},Gu=Bu;Nt.default=Gu;var gr={};Object.defineProperty(gr,"__esModule",{value:!0}),gr.defaults=void 0,gr.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var vr={};function as(i){return as=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},as(i)}function Vu(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function ls(i,o){return ls=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},ls(i,o)}function Hu(i,o){if(o&&(as(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ht(i)}function ht(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function so(i){return so=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},so(i)}function gt(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(vr,"__esModule",{value:!0}),vr.InteractEvent=void 0;var Xa=function(i){(function(x,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(S&&S.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),Object.defineProperty(x,"prototype",{writable:!1}),S&&ls(x,S)})(w,i);var o,c,u,f,_=(u=w,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var x,S=so(u);if(f){var D=so(this).constructor;x=Reflect.construct(S,arguments,D)}else x=S.apply(this,arguments);return Hu(this,x)});function w(x,S,D,F,k,J,se){var j;(function(mt,ot){if(!(mt instanceof ot))throw new TypeError("Cannot call a class as a function")})(this,w),gt(ht(j=_.call(this,x)),"relatedTarget",null),gt(ht(j),"screenX",void 0),gt(ht(j),"screenY",void 0),gt(ht(j),"button",void 0),gt(ht(j),"buttons",void 0),gt(ht(j),"ctrlKey",void 0),gt(ht(j),"shiftKey",void 0),gt(ht(j),"altKey",void 0),gt(ht(j),"metaKey",void 0),gt(ht(j),"page",void 0),gt(ht(j),"client",void 0),gt(ht(j),"delta",void 0),gt(ht(j),"rect",void 0),gt(ht(j),"x0",void 0),gt(ht(j),"y0",void 0),gt(ht(j),"t0",void 0),gt(ht(j),"dt",void 0),gt(ht(j),"duration",void 0),gt(ht(j),"clientX0",void 0),gt(ht(j),"clientY0",void 0),gt(ht(j),"velocity",void 0),gt(ht(j),"speed",void 0),gt(ht(j),"swipe",void 0),gt(ht(j),"axes",void 0),gt(ht(j),"preEnd",void 0),k=k||x.element;var he=x.interactable,be=(he&&he.options||gr.defaults).deltaSource,me=(0,de.default)(he,k,D),Ie=F==="start",Be=F==="end",Xe=Ie?ht(j):x.prevEvent,ut=Ie?x.coords.start:Be?{page:Xe.page,client:Xe.client,timeStamp:x.coords.cur.timeStamp}:x.coords.cur;return j.page=(0,V.default)({},ut.page),j.client=(0,V.default)({},ut.client),j.rect=(0,V.default)({},x.rect),j.timeStamp=ut.timeStamp,Be||(j.page.x-=me.x,j.page.y-=me.y,j.client.x-=me.x,j.client.y-=me.y),j.ctrlKey=S.ctrlKey,j.altKey=S.altKey,j.shiftKey=S.shiftKey,j.metaKey=S.metaKey,j.button=S.button,j.buttons=S.buttons,j.target=k,j.currentTarget=k,j.preEnd=J,j.type=se||D+(F||""),j.interactable=he,j.t0=Ie?x.pointers[x.pointers.length-1].downTime:Xe.t0,j.x0=x.coords.start.page.x-me.x,j.y0=x.coords.start.page.y-me.y,j.clientX0=x.coords.start.client.x-me.x,j.clientY0=x.coords.start.client.y-me.y,j.delta=Ie||Be?{x:0,y:0}:{x:j[be].x-Xe[be].x,y:j[be].y-Xe[be].y},j.dt=x.coords.delta.timeStamp,j.duration=j.timeStamp-j.t0,j.velocity=(0,V.default)({},x.coords.velocity[be]),j.speed=(0,ee.default)(j.velocity.x,j.velocity.y),j.swipe=Be||F==="inertiastart"?j.getSwipe():null,j}return o=w,(c=[{key:"getSwipe",value:function(){var x=this._interaction;if(x.prevEvent.speed<600||this.timeStamp-x.prevEvent.timeStamp>150)return null;var S=180*Math.atan2(x.prevEvent.velocityY,x.prevEvent.velocityX)/Math.PI;S<0&&(S+=360);var D=112.5<=S&&S<247.5,F=202.5<=S&&S<337.5;return{up:F,down:!F&&22.5<=S&&S<157.5,left:D,right:!D&&(292.5<=S||S<67.5),angle:S,speed:x.prevEvent.speed,velocity:{x:x.prevEvent.velocityX,y:x.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Vu(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),w}(He.BaseEvent);vr.InteractEvent=Xa,Object.defineProperties(Xa.prototype,{pageX:{get:function(){return this.page.x},set:function(i){this.page.x=i}},pageY:{get:function(){return this.page.y},set:function(i){this.page.y=i}},clientX:{get:function(){return this.client.x},set:function(i){this.client.x=i}},clientY:{get:function(){return this.client.y},set:function(i){this.client.y=i}},dx:{get:function(){return this.delta.x},set:function(i){this.delta.x=i}},dy:{get:function(){return this.delta.y},set:function(i){this.delta.y=i}},velocityX:{get:function(){return this.velocity.x},set:function(i){this.velocity.x=i}},velocityY:{get:function(){return this.velocity.y},set:function(i){this.velocity.y=i}}});var _r={};function Ya(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Wu(i,o,c){return o&&Ya(i.prototype,o),c&&Ya(i,c),Object.defineProperty(i,"prototype",{writable:!1}),i}function xr(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(_r,"__esModule",{value:!0}),_r.PointerInfo=void 0;var ju=Wu(function i(o,c,u,f,_){(function(w,x){if(!(w instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),xr(this,"id",void 0),xr(this,"pointer",void 0),xr(this,"event",void 0),xr(this,"downTime",void 0),xr(this,"downTarget",void 0),this.id=o,this.pointer=c,this.event=u,this.downTime=f,this.downTarget=_});_r.PointerInfo=ju;var ao,lo,tn={};function qu(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function bt(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(tn,"__esModule",{value:!0}),tn.Interaction=void 0,Object.defineProperty(tn,"PointerInfo",{enumerable:!0,get:function(){return _r.PointerInfo}}),tn.default=tn._ProxyValues=tn._ProxyMethods=void 0,tn._ProxyValues=ao,function(i){i.interactable="",i.element="",i.prepared="",i.pointerIsDown="",i.pointerWasMoved="",i._proxy=""}(ao||(tn._ProxyValues=ao={})),tn._ProxyMethods=lo,function(i){i.start="",i.move="",i.end="",i.stop="",i.interacting=""}(lo||(tn._ProxyMethods=lo={}));var Xu=0,Za=function(){function i(u){var f=this,_=u.pointerType,w=u.scopeFire;(function(J,se){if(!(J instanceof se))throw new TypeError("Cannot call a class as a function")})(this,i),bt(this,"interactable",null),bt(this,"element",null),bt(this,"rect",null),bt(this,"_rects",void 0),bt(this,"edges",null),bt(this,"_scopeFire",void 0),bt(this,"prepared",{name:null,axis:null,edges:null}),bt(this,"pointerType",void 0),bt(this,"pointers",[]),bt(this,"downEvent",null),bt(this,"downPointer",{}),bt(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),bt(this,"prevEvent",null),bt(this,"pointerIsDown",!1),bt(this,"pointerWasMoved",!1),bt(this,"_interacting",!1),bt(this,"_ending",!1),bt(this,"_stopped",!0),bt(this,"_proxy",null),bt(this,"simulation",null),bt(this,"doMove",(0,ne.warnOnce)(function(J){this.move(J)},"The interaction.doMove() method has been renamed to interaction.move()")),bt(this,"coords",{start:te.newCoords(),prev:te.newCoords(),cur:te.newCoords(),delta:te.newCoords(),velocity:te.newCoords()}),bt(this,"_id",Xu++),this._scopeFire=w,this.pointerType=_;var x=this;this._proxy={};var S=function(J){Object.defineProperty(f._proxy,J,{get:function(){return x[J]}})};for(var D in ao)S(D);var F=function(J){Object.defineProperty(f._proxy,J,{value:function(){return x[J].apply(x,arguments)}})};for(var k in lo)F(k);this._scopeFire("interactions:new",{interaction:this})}var o,c;return o=i,c=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(u,f,_){var w=this.updatePointer(u,f,_,!0),x=this.pointers[w];this._scopeFire("interactions:down",{pointer:u,event:f,eventTarget:_,pointerIndex:w,pointerInfo:x,type:"down",interaction:this})}},{key:"start",value:function(u,f,_){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(u.name==="gesture"?2:1)||!f.options[u.name].enabled)&&((0,ne.copyAction)(this.prepared,u),this.interactable=f,this.element=_,this.rect=f.getRect(_),this.edges=this.prepared.edges?(0,V.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(u,f,_){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(u,f,_,!1);var w,x,S=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(w=this.coords.cur.client.x-this.coords.start.client.x,x=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,ee.default)(w,x)>this.pointerMoveTolerance);var D=this.getPointerIndex(u),F={pointer:u,pointerIndex:D,pointerInfo:this.pointers[D],event:f,type:"move",eventTarget:_,dx:w,dy:x,duplicate:S,interaction:this};S||te.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",F),S||this.simulation||(this.interacting()&&(F.type=null,this.move(F)),this.pointerWasMoved&&te.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(u){u&&u.event||te.setZeroCoords(this.coords.delta),(u=(0,V.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},u||{})).phase="move",this._doPhase(u)}},{key:"pointerUp",value:function(u,f,_,w){var x=this.getPointerIndex(u);x===-1&&(x=this.updatePointer(u,f,_,!1));var S=/cancel$/i.test(f.type)?"cancel":"up";this._scopeFire("interactions:".concat(S),{pointer:u,pointerIndex:x,pointerInfo:this.pointers[x],event:f,eventTarget:_,type:S,curEventTarget:w,interaction:this}),this.simulation||this.end(f),this.removePointer(u,f)}},{key:"documentBlur",value:function(u){this.end(u),this._scopeFire("interactions:blur",{event:u,type:"blur",interaction:this})}},{key:"end",value:function(u){var f;this._ending=!0,u=u||this._latestPointer.event,this.interacting()&&(f=this._doPhase({event:u,interaction:this,phase:"end"})),this._ending=!1,f===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(u){var f=te.getPointerId(u);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:qe.findIndex(this.pointers,function(_){return _.id===f})}},{key:"getPointerInfo",value:function(u){return this.pointers[this.getPointerIndex(u)]}},{key:"updatePointer",value:function(u,f,_,w){var x=te.getPointerId(u),S=this.getPointerIndex(u),D=this.pointers[S];return w=w!==!1&&(w||/(down|start)$/i.test(f.type)),D?D.pointer=u:(D=new _r.PointerInfo(x,u,f,null,null),S=this.pointers.length,this.pointers.push(D)),te.setCoords(this.coords.cur,this.pointers.map(function(F){return F.pointer}),this._now()),te.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),w&&(this.pointerIsDown=!0,D.downTime=this.coords.cur.timeStamp,D.downTarget=_,te.pointerExtend(this.downPointer,u),this.interacting()||(te.copyCoords(this.coords.start,this.coords.cur),te.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=f,this.pointerWasMoved=!1)),this._updateLatestPointer(u,f,_),this._scopeFire("interactions:update-pointer",{pointer:u,event:f,eventTarget:_,down:w,pointerInfo:D,pointerIndex:S,interaction:this}),S}},{key:"removePointer",value:function(u,f){var _=this.getPointerIndex(u);if(_!==-1){var w=this.pointers[_];this._scopeFire("interactions:remove-pointer",{pointer:u,event:f,eventTarget:null,pointerIndex:_,pointerInfo:w,interaction:this}),this.pointers.splice(_,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(u,f,_){this._latestPointer.pointer=u,this._latestPointer.event=f,this._latestPointer.eventTarget=_}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(u,f,_,w){return new vr.InteractEvent(this,u,this.prepared.name,f,this.element,_,w)}},{key:"_fireEvent",value:function(u){var f;(f=this.interactable)==null||f.fire(u),(!this.prevEvent||u.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=u)}},{key:"_doPhase",value:function(u){var f=u.event,_=u.phase,w=u.preEnd,x=u.type,S=this.rect;if(S&&_==="move"&&(ae.addEdges(this.edges,S,this.coords.delta[this.interactable.options.deltaSource]),S.width=S.right-S.left,S.height=S.bottom-S.top),this._scopeFire("interactions:before-action-".concat(_),u)===!1)return!1;var D=u.iEvent=this._createPreparedEvent(f,_,w,x);return this._scopeFire("interactions:action-".concat(_),u),_==="start"&&(this.prevEvent=D),this._fireEvent(D),this._scopeFire("interactions:after-action-".concat(_),u),!0}},{key:"_now",value:function(){return Date.now()}}],c&&qu(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();tn.Interaction=Za;var Yu=Za;tn.default=Yu;var Jn={};function Ka(i){i.pointerIsDown&&(us(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)}function $a(i){cs(i.interaction)}function cs(i){if(!function(c){return!(!c.offset.pending.x&&!c.offset.pending.y)}(i))return!1;var o=i.offset.pending;return us(i.coords.cur,o),us(i.coords.delta,o),ae.addEdges(i.edges,i.rect,o),o.x=0,o.y=0,!0}function Zu(i){var o=i.x,c=i.y;this.offset.pending.x+=o,this.offset.pending.y+=c,this.offset.total.x+=o,this.offset.total.y+=c}function us(i,o){var c=i.page,u=i.client,f=o.x,_=o.y;c.x+=f,c.y+=_,u.x+=f,u.y+=_}Object.defineProperty(Jn,"__esModule",{value:!0}),Jn.addTotal=Ka,Jn.applyPending=cs,Jn.default=void 0,tn._ProxyMethods.offsetBy="";var Ku={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(i){i.Interaction.prototype.offsetBy=Zu},listeners:{"interactions:new":function(i){i.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(i){return Ka(i.interaction)},"interactions:before-action-start":$a,"interactions:before-action-move":$a,"interactions:before-action-end":function(i){var o=i.interaction;if(cs(o))return o.move({offset:!0}),o.end(),!1},"interactions:stop":function(i){var o=i.interaction;o.offset.total.x=0,o.offset.total.y=0,o.offset.pending.x=0,o.offset.pending.y=0}}},$u=Ku;Jn.default=$u;var gi={};function Qu(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function It(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(gi,"__esModule",{value:!0}),gi.default=gi.InertiaState=void 0;var Qa=function(){function i(u){(function(f,_){if(!(f instanceof _))throw new TypeError("Cannot call a class as a function")})(this,i),It(this,"active",!1),It(this,"isModified",!1),It(this,"smoothEnd",!1),It(this,"allowResume",!1),It(this,"modification",void 0),It(this,"modifierCount",0),It(this,"modifierArg",void 0),It(this,"startCoords",void 0),It(this,"t0",0),It(this,"v0",0),It(this,"te",0),It(this,"targetOffset",void 0),It(this,"modifiedOffset",void 0),It(this,"currentOffset",void 0),It(this,"lambda_v0",0),It(this,"one_ve_v0",0),It(this,"timeout",void 0),It(this,"interaction",void 0),this.interaction=u}var o,c;return o=i,(c=[{key:"start",value:function(u){var f=this.interaction,_=co(f);if(!_||!_.enabled)return!1;var w=f.coords.velocity.client,x=(0,ee.default)(w.x,w.y),S=this.modification||(this.modification=new pi.default(f));if(S.copyFrom(f.modification),this.t0=f._now(),this.allowResume=_.allowResume,this.v0=x,this.currentOffset={x:0,y:0},this.startCoords=f.coords.cur.page,this.modifierArg=S.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-f.coords.cur.timeStamp<50&&x>_.minSpeed&&x>_.endSpeed)this.startInertia();else{if(S.result=S.setAll(this.modifierArg),!S.result.changed)return!1;this.startSmoothEnd()}return f.modification.result.rect=null,f.offsetBy(this.targetOffset),f._doPhase({interaction:f,event:u,phase:"inertiastart"}),f.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),f.modification.result.rect=null,this.active=!0,f.simulation=this,!0}},{key:"startInertia",value:function(){var u=this,f=this.interaction.coords.velocity.client,_=co(this.interaction),w=_.resistance,x=-Math.log(_.endSpeed/this.v0)/w;this.targetOffset={x:(f.x-x)/w,y:(f.y-x)/w},this.te=x,this.lambda_v0=w/this.v0,this.one_ve_v0=1-_.endSpeed/this.v0;var S=this.modification,D=this.modifierArg;D.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},S.result=S.setAll(D),S.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+S.result.delta.x,y:this.targetOffset.y+S.result.delta.y}),this.onNextFrame(function(){return u.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var u=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return u.smoothEndTick()})}},{key:"onNextFrame",value:function(u){var f=this;this.timeout=Mt.default.request(function(){f.active&&u()})}},{key:"inertiaTick",value:function(){var u,f,_,w,x,S=this,D=this.interaction,F=co(D).resistance,k=(D._now()-this.t0)/1e3;if(k<this.te){var J,se=1-(Math.exp(-F*k)-this.lambda_v0)/this.one_ve_v0;this.isModified?(u=this.targetOffset.x,f=this.targetOffset.y,_=this.modifiedOffset.x,w=this.modifiedOffset.y,J={x:Ja(x=se,0,u,_),y:Ja(x,0,f,w)}):J={x:this.targetOffset.x*se,y:this.targetOffset.y*se};var j={x:J.x-this.currentOffset.x,y:J.y-this.currentOffset.y};this.currentOffset.x+=j.x,this.currentOffset.y+=j.y,D.offsetBy(j),D.move(),this.onNextFrame(function(){return S.inertiaTick()})}else D.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var u=this,f=this.interaction,_=f._now()-this.t0,w=co(f).smoothEndDuration;if(_<w){var x={x:el(_,0,this.targetOffset.x,w),y:el(_,0,this.targetOffset.y,w)},S={x:x.x-this.currentOffset.x,y:x.y-this.currentOffset.y};this.currentOffset.x+=S.x,this.currentOffset.y+=S.y,f.offsetBy(S),f.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return u.smoothEndTick()})}else f.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(u){var f=u.pointer,_=u.event,w=u.eventTarget,x=this.interaction;x.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),x.updatePointer(f,_,w,!0),x._doPhase({interaction:x,event:_,phase:"resume"}),(0,te.copyCoords)(x.coords.prev,x.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Mt.default.cancel(this.timeout)}}])&&Qu(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();function co(i){var o=i.interactable,c=i.prepared;return o&&o.options&&c.name&&o.options[c.name].inertia}gi.InertiaState=Qa;var Ju={id:"inertia",before:["modifiers","actions"],install:function(i){var o=i.defaults;i.usePlugin(Jn.default),i.usePlugin(Nt.default),i.actions.phases.inertiastart=!0,i.actions.phases.resume=!0,o.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(i){var o=i.interaction;o.inertia=new Qa(o)},"interactions:before-action-end":function(i){var o=i.interaction,c=i.event;return(!o._interacting||o.simulation||!o.inertia.start(c))&&null},"interactions:down":function(i){var o=i.interaction,c=i.eventTarget,u=o.inertia;if(u.active)for(var f=c;l.default.element(f);){if(f===o.element){u.resume(i);break}f=E.parentNode(f)}},"interactions:stop":function(i){var o=i.interaction.inertia;o.active&&o.stop()},"interactions:before-action-resume":function(i){var o=i.interaction.modification;o.stop(i),o.start(i,i.interaction.coords.cur.page),o.applyToInteraction(i)},"interactions:before-action-inertiastart":function(i){return i.interaction.modification.setAndApply(i)},"interactions:action-resume":Nt.addEventModifiers,"interactions:action-inertiastart":Nt.addEventModifiers,"interactions:after-action-inertiastart":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:after-action-resume":function(i){return i.interaction.modification.restoreInteractionCoords(i)}}};function Ja(i,o,c,u){var f=1-i;return f*f*o+2*f*i*c+i*i*u}function el(i,o,c,u){return-c*(i/=u)*(i-2)+o}var ed=Ju;gi.default=ed;var yr={};function td(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function br(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}function tl(i,o){for(var c=0;c<o.length;c++){var u=o[c];if(i.immediatePropagationStopped)break;u(i)}}Object.defineProperty(yr,"__esModule",{value:!0}),yr.Eventable=void 0;var nd=function(){function i(u){(function(f,_){if(!(f instanceof _))throw new TypeError("Cannot call a class as a function")})(this,i),br(this,"options",void 0),br(this,"types",{}),br(this,"propagationStopped",!1),br(this,"immediatePropagationStopped",!1),br(this,"global",void 0),this.options=(0,V.default)({},u||{})}var o,c;return o=i,(c=[{key:"fire",value:function(u){var f,_=this.global;(f=this.types[u.type])&&tl(u,f),!u.propagationStopped&&_&&(f=_[u.type])&&tl(u,f)}},{key:"on",value:function(u,f){var _=(0,pe.default)(u,f);for(u in _)this.types[u]=qe.merge(this.types[u]||[],_[u])}},{key:"off",value:function(u,f){var _=(0,pe.default)(u,f);for(u in _){var w=this.types[u];if(w&&w.length)for(var x=0;x<_[u].length;x++){var S=_[u][x],D=w.indexOf(S);D!==-1&&w.splice(D,1)}}}},{key:"getRect",value:function(u){return null}}])&&td(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();yr.Eventable=nd;var Mr={};Object.defineProperty(Mr,"__esModule",{value:!0}),Mr.default=function(i,o){if(o.phaselessTypes[i])return!0;for(var c in o.map)if(i.indexOf(c)===0&&i.substr(c.length)in o.phases)return!0;return!1};var ds={};Object.defineProperty(ds,"__esModule",{value:!0}),ds.createInteractStatic=function(i){var o=function c(u,f){var _=i.interactables.get(u,f);return _||((_=i.interactables.new(u,f)).events.global=c.globalEvents),_};return o.getPointerAverage=te.pointerAverage,o.getTouchBBox=te.touchBBox,o.getTouchDistance=te.touchDistance,o.getTouchAngle=te.touchAngle,o.getElementRect=E.getElementRect,o.getElementClientRect=E.getElementClientRect,o.matchesSelector=E.matchesSelector,o.closest=E.closest,o.globalEvents={},o.version="1.10.17",o.scope=i,o.use=function(c,u){return this.scope.usePlugin(c,u),this},o.isSet=function(c,u){return!!this.scope.interactables.get(c,u&&u.context)},o.on=(0,ne.warnOnce)(function(c,u,f){if(l.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),l.default.array(c)){for(var _=0;_<c.length;_++){var w=c[_];this.on(w,u,f)}return this}if(l.default.object(c)){for(var x in c)this.on(x,c[x],u);return this}return(0,Mr.default)(c,this.scope.actions)?this.globalEvents[c]?this.globalEvents[c].push(u):this.globalEvents[c]=[u]:this.scope.events.add(this.scope.document,c,u,{options:f}),this},"The interact.on() method is being deprecated"),o.off=(0,ne.warnOnce)(function(c,u,f){if(l.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),l.default.array(c)){for(var _=0;_<c.length;_++){var w=c[_];this.off(w,u,f)}return this}if(l.default.object(c)){for(var x in c)this.off(x,c[x],u);return this}var S;return(0,Mr.default)(c,this.scope.actions)?c in this.globalEvents&&(S=this.globalEvents[c].indexOf(u))!==-1&&this.globalEvents[c].splice(S,1):this.scope.events.remove(this.scope.document,c,u,f),this},"The interact.off() method is being deprecated"),o.debug=function(){return this.scope},o.supportsTouch=function(){return R.default.supportsTouch},o.supportsPointerEvent=function(){return R.default.supportsPointerEvent},o.stop=function(){for(var c=0;c<this.scope.interactions.list.length;c++)this.scope.interactions.list[c].stop();return this},o.pointerMoveTolerance=function(c){return l.default.number(c)?(this.scope.interactions.pointerMoveTolerance=c,this):this.scope.interactions.pointerMoveTolerance},o.addDocument=function(c,u){this.scope.addDocument(c,u)},o.removeDocument=function(c){this.scope.removeDocument(c)},o};var uo={};function id(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Vn(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(uo,"__esModule",{value:!0}),uo.Interactable=void 0;var rd=function(){function i(u,f,_,w){(function(x,S){if(!(x instanceof S))throw new TypeError("Cannot call a class as a function")})(this,i),Vn(this,"options",void 0),Vn(this,"_actions",void 0),Vn(this,"target",void 0),Vn(this,"events",new yr.Eventable),Vn(this,"_context",void 0),Vn(this,"_win",void 0),Vn(this,"_doc",void 0),Vn(this,"_scopeEvents",void 0),Vn(this,"_rectChecker",void 0),this._actions=f.actions,this.target=u,this._context=f.context||_,this._win=(0,n.getWindow)((0,E.trySelector)(u)?this._context:u),this._doc=this._win.document,this._scopeEvents=w,this.set(f)}var o,c;return o=i,(c=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(u,f){return l.default.func(f.onstart)&&this.on("".concat(u,"start"),f.onstart),l.default.func(f.onmove)&&this.on("".concat(u,"move"),f.onmove),l.default.func(f.onend)&&this.on("".concat(u,"end"),f.onend),l.default.func(f.oninertiastart)&&this.on("".concat(u,"inertiastart"),f.oninertiastart),this}},{key:"updatePerActionListeners",value:function(u,f,_){(l.default.array(f)||l.default.object(f))&&this.off(u,f),(l.default.array(_)||l.default.object(_))&&this.on(u,_)}},{key:"setPerAction",value:function(u,f){var _=this._defaults;for(var w in f){var x=w,S=this.options[u],D=f[x];x==="listeners"&&this.updatePerActionListeners(u,S.listeners,D),l.default.array(D)?S[x]=qe.from(D):l.default.plainObject(D)?(S[x]=(0,V.default)(S[x]||{},(0,hi.default)(D)),l.default.object(_.perAction[x])&&"enabled"in _.perAction[x]&&(S[x].enabled=D.enabled!==!1)):l.default.bool(D)&&l.default.object(_.perAction[x])?S[x].enabled=D:S[x]=D}}},{key:"getRect",value:function(u){return u=u||(l.default.element(this.target)?this.target:null),l.default.string(this.target)&&(u=u||this._context.querySelector(this.target)),(0,E.getElementRect)(u)}},{key:"rectChecker",value:function(u){var f=this;return l.default.func(u)?(this._rectChecker=u,this.getRect=function(_){var w=(0,V.default)({},f._rectChecker(_));return"width"in w||(w.width=w.right-w.left,w.height=w.bottom-w.top),w},this):u===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(u,f){if((0,E.trySelector)(f)||l.default.object(f)){for(var _ in this.options[u]=f,this._actions.map)this.options[_][u]=f;return this}return this.options[u]}},{key:"origin",value:function(u){return this._backCompatOption("origin",u)}},{key:"deltaSource",value:function(u){return u==="page"||u==="client"?(this.options.deltaSource=u,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(u){return this._context===u.ownerDocument||(0,E.nodeContains)(this._context,u)}},{key:"testIgnoreAllow",value:function(u,f,_){return!this.testIgnore(u.ignoreFrom,f,_)&&this.testAllow(u.allowFrom,f,_)}},{key:"testAllow",value:function(u,f,_){return!u||!!l.default.element(_)&&(l.default.string(u)?(0,E.matchesUpTo)(_,u,f):!!l.default.element(u)&&(0,E.nodeContains)(u,_))}},{key:"testIgnore",value:function(u,f,_){return!(!u||!l.default.element(_))&&(l.default.string(u)?(0,E.matchesUpTo)(_,u,f):!!l.default.element(u)&&(0,E.nodeContains)(u,_))}},{key:"fire",value:function(u){return this.events.fire(u),this}},{key:"_onOff",value:function(u,f,_,w){l.default.object(f)&&!l.default.array(f)&&(w=_,_=null);var x=u==="on"?"add":"remove",S=(0,pe.default)(f,_);for(var D in S){D==="wheel"&&(D=R.default.wheelEvent);for(var F=0;F<S[D].length;F++){var k=S[D][F];(0,Mr.default)(D,this._actions)?this.events[u](D,k):l.default.string(this.target)?this._scopeEvents["".concat(x,"Delegate")](this.target,this._context,D,k,w):this._scopeEvents[x](this.target,D,k,w)}}return this}},{key:"on",value:function(u,f,_){return this._onOff("on",u,f,_)}},{key:"off",value:function(u,f,_){return this._onOff("off",u,f,_)}},{key:"set",value:function(u){var f=this._defaults;for(var _ in l.default.object(u)||(u={}),this.options=(0,hi.default)(f.base),this._actions.methodDict){var w=_,x=this._actions.methodDict[w];this.options[w]={},this.setPerAction(w,(0,V.default)((0,V.default)({},f.perAction),f.actions[w])),this[x](u[w])}for(var S in u)l.default.func(this[S])&&this[S](u[S]);return this}},{key:"unset",value:function(){if(l.default.string(this.target))for(var u in this._scopeEvents.delegatedEvents)for(var f=this._scopeEvents.delegatedEvents[u],_=f.length-1;_>=0;_--){var w=f[_],x=w.selector,S=w.context,D=w.listeners;x===this.target&&S===this._context&&f.splice(_,1);for(var F=D.length-1;F>=0;F--)this._scopeEvents.removeDelegate(this.target,this._context,u,D[F][0],D[F][1])}else this._scopeEvents.remove(this.target,"all")}}])&&id(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();uo.Interactable=rd;var fo={};function od(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function fs(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(fo,"__esModule",{value:!0}),fo.InteractableSet=void 0;var sd=function(){function i(u){var f=this;(function(_,w){if(!(_ instanceof w))throw new TypeError("Cannot call a class as a function")})(this,i),fs(this,"list",[]),fs(this,"selectorMap",{}),fs(this,"scope",void 0),this.scope=u,u.addListeners({"interactable:unset":function(_){var w=_.interactable,x=w.target,S=w._context,D=l.default.string(x)?f.selectorMap[x]:x[f.scope.id],F=qe.findIndex(D,function(k){return k.context===S});D[F]&&(D[F].context=null,D[F].interactable=null),D.splice(F,1)}})}var o,c;return o=i,(c=[{key:"new",value:function(u,f){f=(0,V.default)(f||{},{actions:this.scope.actions});var _=new this.scope.Interactable(u,f,this.scope.document,this.scope.events),w={context:_._context,interactable:_};return this.scope.addDocument(_._doc),this.list.push(_),l.default.string(u)?(this.selectorMap[u]||(this.selectorMap[u]=[]),this.selectorMap[u].push(w)):(_.target[this.scope.id]||Object.defineProperty(u,this.scope.id,{value:[],configurable:!0}),u[this.scope.id].push(w)),this.scope.fire("interactable:new",{target:u,options:f,interactable:_,win:this.scope._win}),_}},{key:"get",value:function(u,f){var _=f&&f.context||this.scope.document,w=l.default.string(u),x=w?this.selectorMap[u]:u[this.scope.id];if(!x)return null;var S=qe.find(x,function(D){return D.context===_&&(w||D.interactable.inContext(u))});return S&&S.interactable}},{key:"forEachMatch",value:function(u,f){for(var _=0;_<this.list.length;_++){var w=this.list[_],x=void 0;if((l.default.string(w.target)?l.default.element(u)&&E.matchesSelector(u,w.target):u===w.target)&&w.inContext(u)&&(x=f(w)),x!==void 0)return x}}}])&&od(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();fo.InteractableSet=sd;var ho={};function ad(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function hs(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}function ps(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var _,w,x=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(_=f.next()).done)&&(x.push(_.value),!u||x.length!==u);S=!0);}catch(F){D=!0,w=F}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return x}}(i,o)||function(c,u){if(c){if(typeof c=="string")return nl(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?nl(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function nl(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}Object.defineProperty(ho,"__esModule",{value:!0}),ho.default=void 0;var ld=function(){function i(u){(function(f,_){if(!(f instanceof _))throw new TypeError("Cannot call a class as a function")})(this,i),hs(this,"currentTarget",void 0),hs(this,"originalEvent",void 0),hs(this,"type",void 0),this.originalEvent=u,(0,fe.default)(this,u)}var o,c;return o=i,(c=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&ad(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();function Sr(i){if(!l.default.object(i))return{capture:!!i,passive:!1};var o=(0,V.default)({},i);return o.capture=!!i.capture,o.passive=!!i.passive,o}var cd={id:"events",install:function(i){var o,c=[],u={},f=[],_={add:w,remove:x,addDelegate:function(F,k,J,se,j){var he=Sr(j);if(!u[J]){u[J]=[];for(var be=0;be<f.length;be++){var me=f[be];w(me,J,S),w(me,J,D,!0)}}var Ie=u[J],Be=qe.find(Ie,function(Xe){return Xe.selector===F&&Xe.context===k});Be||(Be={selector:F,context:k,listeners:[]},Ie.push(Be)),Be.listeners.push([se,he])},removeDelegate:function(F,k,J,se,j){var he,be=Sr(j),me=u[J],Ie=!1;if(me)for(he=me.length-1;he>=0;he--){var Be=me[he];if(Be.selector===F&&Be.context===k){for(var Xe=Be.listeners,ut=Xe.length-1;ut>=0;ut--){var mt=ps(Xe[ut],2),ot=mt[0],pt=mt[1],_n=pt.capture,Wn=pt.passive;if(ot===se&&_n===be.capture&&Wn===be.passive){Xe.splice(ut,1),Xe.length||(me.splice(he,1),x(k,J,S),x(k,J,D,!0)),Ie=!0;break}}if(Ie)break}}},delegateListener:S,delegateUseCapture:D,delegatedEvents:u,documents:f,targets:c,supportsOptions:!1,supportsPassive:!1};function w(F,k,J,se){var j=Sr(se),he=qe.find(c,function(be){return be.eventTarget===F});he||(he={eventTarget:F,events:{}},c.push(he)),he.events[k]||(he.events[k]=[]),F.addEventListener&&!qe.contains(he.events[k],J)&&(F.addEventListener(k,J,_.supportsOptions?j:j.capture),he.events[k].push(J))}function x(F,k,J,se){var j=Sr(se),he=qe.findIndex(c,function(ut){return ut.eventTarget===F}),be=c[he];if(be&&be.events)if(k!=="all"){var me=!1,Ie=be.events[k];if(Ie){if(J==="all"){for(var Be=Ie.length-1;Be>=0;Be--)x(F,k,Ie[Be],j);return}for(var Xe=0;Xe<Ie.length;Xe++)if(Ie[Xe]===J){F.removeEventListener(k,J,_.supportsOptions?j:j.capture),Ie.splice(Xe,1),Ie.length===0&&(delete be.events[k],me=!0);break}}me&&!Object.keys(be.events).length&&c.splice(he,1)}else for(k in be.events)be.events.hasOwnProperty(k)&&x(F,k,"all")}function S(F,k){for(var J=Sr(k),se=new ld(F),j=u[F.type],he=ps(te.getEventTargets(F),1)[0],be=he;l.default.element(be);){for(var me=0;me<j.length;me++){var Ie=j[me],Be=Ie.selector,Xe=Ie.context;if(E.matchesSelector(be,Be)&&E.nodeContains(Xe,he)&&E.nodeContains(Xe,be)){var ut=Ie.listeners;se.currentTarget=be;for(var mt=0;mt<ut.length;mt++){var ot=ps(ut[mt],2),pt=ot[0],_n=ot[1],Wn=_n.capture,Is=_n.passive;Wn===J.capture&&Is===J.passive&&pt(se)}}}be=E.parentNode(be)}}function D(F){return S(F,!0)}return(o=i.document)==null||o.createElement("div").addEventListener("test",null,{get capture(){return _.supportsOptions=!0},get passive(){return _.supportsPassive=!0}}),i.events=_,_}};ho.default=cd;var po={};Object.defineProperty(po,"__esModule",{value:!0}),po.default=void 0;var mo={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(i){for(var o=0;o<mo.methodOrder.length;o++){var c;c=mo.methodOrder[o];var u=mo[c](i);if(u)return u}return null},simulationResume:function(i){var o=i.pointerType,c=i.eventType,u=i.eventTarget,f=i.scope;if(!/down|start/i.test(c))return null;for(var _=0;_<f.interactions.list.length;_++){var w=f.interactions.list[_],x=u;if(w.simulation&&w.simulation.allowResume&&w.pointerType===o)for(;x;){if(x===w.element)return w;x=E.parentNode(x)}}return null},mouseOrPen:function(i){var o,c=i.pointerId,u=i.pointerType,f=i.eventType,_=i.scope;if(u!=="mouse"&&u!=="pen")return null;for(var w=0;w<_.interactions.list.length;w++){var x=_.interactions.list[w];if(x.pointerType===u){if(x.simulation&&!il(x,c))continue;if(x.interacting())return x;o||(o=x)}}if(o)return o;for(var S=0;S<_.interactions.list.length;S++){var D=_.interactions.list[S];if(!(D.pointerType!==u||/down/i.test(f)&&D.simulation))return D}return null},hasPointer:function(i){for(var o=i.pointerId,c=i.scope,u=0;u<c.interactions.list.length;u++){var f=c.interactions.list[u];if(il(f,o))return f}return null},idle:function(i){for(var o=i.pointerType,c=i.scope,u=0;u<c.interactions.list.length;u++){var f=c.interactions.list[u];if(f.pointers.length===1){var _=f.interactable;if(_&&(!_.options.gesture||!_.options.gesture.enabled))continue}else if(f.pointers.length>=2)continue;if(!f.interacting()&&o===f.pointerType)return f}return null}};function il(i,o){return i.pointers.some(function(c){return c.id===o})}var ud=mo;po.default=ud;var go={};function ms(i){return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ms(i)}function rl(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var _,w,x=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(_=f.next()).done)&&(x.push(_.value),!u||x.length!==u);S=!0);}catch(F){D=!0,w=F}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return x}}(i,o)||function(c,u){if(c){if(typeof c=="string")return ol(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?ol(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ol(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}function dd(i,o){if(!(i instanceof o))throw new TypeError("Cannot call a class as a function")}function fd(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function gs(i,o){return gs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},gs(i,o)}function hd(i,o){if(o&&(ms(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(i)}function vo(i){return vo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},vo(i)}Object.defineProperty(go,"__esModule",{value:!0}),go.default=void 0;var vs=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function sl(i,o){return function(c){var u=o.interactions.list,f=te.getPointerType(c),_=rl(te.getEventTargets(c),2),w=_[0],x=_[1],S=[];if(/^touch/.test(c.type)){o.prevTouchTime=o.now();for(var D=0;D<c.changedTouches.length;D++){var F=c.changedTouches[D],k={pointer:F,pointerId:te.getPointerId(F),pointerType:f,eventType:c.type,eventTarget:w,curEventTarget:x,scope:o},J=al(k);S.push([k.pointer,k.eventTarget,k.curEventTarget,J])}}else{var se=!1;if(!R.default.supportsPointerEvent&&/mouse/.test(c.type)){for(var j=0;j<u.length&&!se;j++)se=u[j].pointerType!=="mouse"&&u[j].pointerIsDown;se=se||o.now()-o.prevTouchTime<500||c.timeStamp===0}if(!se){var he={pointer:c,pointerId:te.getPointerId(c),pointerType:f,eventType:c.type,curEventTarget:x,eventTarget:w,scope:o},be=al(he);S.push([he.pointer,he.eventTarget,he.curEventTarget,be])}}for(var me=0;me<S.length;me++){var Ie=rl(S[me],4),Be=Ie[0],Xe=Ie[1],ut=Ie[2];Ie[3][i](Be,c,Xe,ut)}}}function al(i){var o=i.pointerType,c=i.scope,u={interaction:po.default.search(i),searchDetails:i};return c.fire("interactions:find",u),u.interaction||c.interactions.new({pointerType:o})}function _s(i,o){var c=i.doc,u=i.scope,f=i.options,_=u.interactions.docEvents,w=u.events,x=w[o];for(var S in u.browser.isIOS&&!f.events&&(f.events={passive:!1}),w.delegatedEvents)x(c,S,w.delegateListener),x(c,S,w.delegateUseCapture,!0);for(var D=f&&f.events,F=0;F<_.length;F++){var k=_[F];x(c,k.type,k.listener,D)}}var pd={id:"core/interactions",install:function(i){for(var o={},c=0;c<vs.length;c++){var u=vs[c];o[u]=sl(u,i)}var f,_=R.default.pEventTypes;function w(){for(var x=0;x<i.interactions.list.length;x++){var S=i.interactions.list[x];if(S.pointerIsDown&&S.pointerType==="touch"&&!S._interacting)for(var D=function(){var k=S.pointers[F];i.documents.some(function(J){var se=J.doc;return(0,E.nodeContains)(se,k.downTarget)})||S.removePointer(k.pointer,k.event)},F=0;F<S.pointers.length;F++)D()}}(f=C.default.PointerEvent?[{type:_.down,listener:w},{type:_.down,listener:o.pointerDown},{type:_.move,listener:o.pointerMove},{type:_.up,listener:o.pointerUp},{type:_.cancel,listener:o.pointerUp}]:[{type:"mousedown",listener:o.pointerDown},{type:"mousemove",listener:o.pointerMove},{type:"mouseup",listener:o.pointerUp},{type:"touchstart",listener:w},{type:"touchstart",listener:o.pointerDown},{type:"touchmove",listener:o.pointerMove},{type:"touchend",listener:o.pointerUp},{type:"touchcancel",listener:o.pointerUp}]).push({type:"blur",listener:function(x){for(var S=0;S<i.interactions.list.length;S++)i.interactions.list[S].documentBlur(x)}}),i.prevTouchTime=0,i.Interaction=function(x){(function(j,he){if(typeof he!="function"&&he!==null)throw new TypeError("Super expression must either be null or a function");j.prototype=Object.create(he&&he.prototype,{constructor:{value:j,writable:!0,configurable:!0}}),Object.defineProperty(j,"prototype",{writable:!1}),he&&gs(j,he)})(se,x);var S,D,F,k,J=(F=se,k=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var j,he=vo(F);if(k){var be=vo(this).constructor;j=Reflect.construct(he,arguments,be)}else j=he.apply(this,arguments);return hd(this,j)});function se(){return dd(this,se),J.apply(this,arguments)}return S=se,(D=[{key:"pointerMoveTolerance",get:function(){return i.interactions.pointerMoveTolerance},set:function(j){i.interactions.pointerMoveTolerance=j}},{key:"_now",value:function(){return i.now()}}])&&fd(S.prototype,D),Object.defineProperty(S,"prototype",{writable:!1}),se}(tn.default),i.interactions={list:[],new:function(x){x.scopeFire=function(D,F){return i.fire(D,F)};var S=new i.Interaction(x);return i.interactions.list.push(S),S},listeners:o,docEvents:f,pointerMoveTolerance:1},i.usePlugin(Sn.default)},listeners:{"scope:add-document":function(i){return _s(i,"add")},"scope:remove-document":function(i){return _s(i,"remove")},"interactable:unset":function(i,o){for(var c=i.interactable,u=o.interactions.list.length-1;u>=0;u--){var f=o.interactions.list[u];f.interactable===c&&(f.stop(),o.fire("interactions:destroy",{interaction:f}),f.destroy(),o.interactions.list.length>2&&o.interactions.list.splice(u,1))}}},onDocSignal:_s,doOnInteractions:sl,methodNames:vs},md=pd;go.default=md;var wr={};function xs(i){return xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},xs(i)}function Er(){return Er=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(i,o,c){var u=gd(i,o);if(u){var f=Object.getOwnPropertyDescriptor(u,o);return f.get?f.get.call(arguments.length<3?i:c):f.value}},Er.apply(this,arguments)}function gd(i,o){for(;!Object.prototype.hasOwnProperty.call(i,o)&&(i=ei(i))!==null;);return i}function ys(i,o){return ys=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},ys(i,o)}function vd(i,o){if(o&&(xs(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(i)}function ei(i){return ei=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},ei(i)}function ll(i,o){if(!(i instanceof o))throw new TypeError("Cannot call a class as a function")}function cl(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function ul(i,o,c){return o&&cl(i.prototype,o),c&&cl(i,c),Object.defineProperty(i,"prototype",{writable:!1}),i}function Ut(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(wr,"__esModule",{value:!0}),wr.Scope=void 0,wr.initScope=dl;var _d=function(){function i(){var o=this;ll(this,i),Ut(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),Ut(this,"isInitialized",!1),Ut(this,"listenerMaps",[]),Ut(this,"browser",R.default),Ut(this,"defaults",(0,hi.default)(gr.defaults)),Ut(this,"Eventable",yr.Eventable),Ut(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),Ut(this,"interactStatic",(0,ds.createInteractStatic)(this)),Ut(this,"InteractEvent",vr.InteractEvent),Ut(this,"Interactable",void 0),Ut(this,"interactables",new fo.InteractableSet(this)),Ut(this,"_win",void 0),Ut(this,"document",void 0),Ut(this,"window",void 0),Ut(this,"documents",[]),Ut(this,"_plugins",{list:[],map:{}}),Ut(this,"onWindowUnload",function(u){return o.removeDocument(u.target)});var c=this;this.Interactable=function(u){(function(S,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(D&&D.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),D&&ys(S,D)})(x,u);var f,_,w=(f=x,_=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var S,D=ei(f);if(_){var F=ei(this).constructor;S=Reflect.construct(D,arguments,F)}else S=D.apply(this,arguments);return vd(this,S)});function x(){return ll(this,x),w.apply(this,arguments)}return ul(x,[{key:"_defaults",get:function(){return c.defaults}},{key:"set",value:function(S){return Er(ei(x.prototype),"set",this).call(this,S),c.fire("interactable:set",{options:S,interactable:this}),this}},{key:"unset",value:function(){Er(ei(x.prototype),"unset",this).call(this);var S=c.interactables.list.indexOf(this);S<0||(Er(ei(x.prototype),"unset",this).call(this),c.interactables.list.splice(S,1),c.fire("interactable:unset",{interactable:this}))}}]),x}(uo.Interactable)}return ul(i,[{key:"addListeners",value:function(o,c){this.listenerMaps.push({id:c,map:o})}},{key:"fire",value:function(o,c){for(var u=0;u<this.listenerMaps.length;u++){var f=this.listenerMaps[u].map[o];if(f&&f(c,this,o)===!1)return!1}}},{key:"init",value:function(o){return this.isInitialized?this:dl(this,o)}},{key:"pluginIsInstalled",value:function(o){return this._plugins.map[o.id]||this._plugins.list.indexOf(o)!==-1}},{key:"usePlugin",value:function(o,c){if(!this.isInitialized)return this;if(this.pluginIsInstalled(o))return this;if(o.id&&(this._plugins.map[o.id]=o),this._plugins.list.push(o),o.install&&o.install(this,c),o.listeners&&o.before){for(var u=0,f=this.listenerMaps.length,_=o.before.reduce(function(x,S){return x[S]=!0,x[fl(S)]=!0,x},{});u<f;u++){var w=this.listenerMaps[u].id;if(_[w]||_[fl(w)])break}this.listenerMaps.splice(u,0,{id:o.id,map:o.listeners})}else o.listeners&&this.listenerMaps.push({id:o.id,map:o.listeners});return this}},{key:"addDocument",value:function(o,c){if(this.getDocIndex(o)!==-1)return!1;var u=n.getWindow(o);c=c?(0,V.default)({},c):{},this.documents.push({doc:o,options:c}),this.events.documents.push(o),o!==this.document&&this.events.add(u,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:o,window:u,scope:this,options:c})}},{key:"removeDocument",value:function(o){var c=this.getDocIndex(o),u=n.getWindow(o),f=this.documents[c].options;this.events.remove(u,"unload",this.onWindowUnload),this.documents.splice(c,1),this.events.documents.splice(c,1),this.fire("scope:remove-document",{doc:o,window:u,scope:this,options:f})}},{key:"getDocIndex",value:function(o){for(var c=0;c<this.documents.length;c++)if(this.documents[c].doc===o)return c;return-1}},{key:"getDocOptions",value:function(o){var c=this.getDocIndex(o);return c===-1?null:this.documents[c].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),i}();function dl(i,o){return i.isInitialized=!0,l.default.window(o)&&n.init(o),C.default.init(o),R.default.init(o),Mt.default.init(o),i.window=o,i.document=o.document,i.usePlugin(go.default),i.usePlugin(ho.default),i}function fl(i){return i&&i.replace(/\/.*$/,"")}wr.Scope=_d;var kt={};Object.defineProperty(kt,"__esModule",{value:!0}),kt.default=void 0;var hl=new wr.Scope,xd=hl.interactStatic;kt.default=xd;var yd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;hl.init(yd);var _o={};Object.defineProperty(_o,"__esModule",{value:!0}),_o.default=void 0,_o.default=function(){};var xo={};Object.defineProperty(xo,"__esModule",{value:!0}),xo.default=void 0,xo.default=function(){};var yo={};function pl(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var _,w,x=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(_=f.next()).done)&&(x.push(_.value),!u||x.length!==u);S=!0);}catch(F){D=!0,w=F}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return x}}(i,o)||function(c,u){if(c){if(typeof c=="string")return ml(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?ml(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ml(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}Object.defineProperty(yo,"__esModule",{value:!0}),yo.default=void 0,yo.default=function(i){var o=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(u){var f=pl(u,2),_=f[0],w=f[1];return _ in i||w in i}),c=function(u,f){for(var _=i.range,w=i.limits,x=w===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:w,S=i.offset,D=S===void 0?{x:0,y:0}:S,F={range:_,grid:i,x:null,y:null},k=0;k<o.length;k++){var J=pl(o[k],2),se=J[0],j=J[1],he=Math.round((u-D.x)/i[se]),be=Math.round((f-D.y)/i[j]);F[se]=Math.max(x.left,Math.min(x.right,he*i[se]+D.x)),F[j]=Math.max(x.top,Math.min(x.bottom,be*i[j]+D.y))}return F};return c.grid=i,c.coordFields=o,c};var Tr={};Object.defineProperty(Tr,"__esModule",{value:!0}),Object.defineProperty(Tr,"edgeTarget",{enumerable:!0,get:function(){return _o.default}}),Object.defineProperty(Tr,"elements",{enumerable:!0,get:function(){return xo.default}}),Object.defineProperty(Tr,"grid",{enumerable:!0,get:function(){return yo.default}});var bo={};Object.defineProperty(bo,"__esModule",{value:!0}),bo.default=void 0;var bd={id:"snappers",install:function(i){var o=i.interactStatic;o.snappers=(0,V.default)(o.snappers||{},Tr),o.createSnapGrid=o.snappers.grid}},Md=bd;bo.default=Md;var Fi={};function gl(i,o){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);o&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(i,f).enumerable})),c.push.apply(c,u)}return c}function bs(i){for(var o=1;o<arguments.length;o++){var c=arguments[o]!=null?arguments[o]:{};o%2?gl(Object(c),!0).forEach(function(u){Sd(i,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(c)):gl(Object(c)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(c,u))})}return i}function Sd(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Fi,"__esModule",{value:!0}),Fi.default=Fi.aspectRatio=void 0;var vl={start:function(i){var o=i.state,c=i.rect,u=i.edges,f=i.pageCoords,_=o.options.ratio,w=o.options,x=w.equalDelta,S=w.modifiers;_==="preserve"&&(_=c.width/c.height),o.startCoords=(0,V.default)({},f),o.startRect=(0,V.default)({},c),o.ratio=_,o.equalDelta=x;var D=o.linkedEdges={top:u.top||u.left&&!u.bottom,left:u.left||u.top&&!u.right,bottom:u.bottom||u.right&&!u.top,right:u.right||u.bottom&&!u.left};if(o.xIsPrimaryAxis=!(!u.left&&!u.right),o.equalDelta){var F=(D.left?1:-1)*(D.top?1:-1);o.edgeSign={x:F,y:F}}else o.edgeSign={x:D.left?-1:1,y:D.top?-1:1};if((0,V.default)(i.edges,D),S&&S.length){var k=new pi.default(i.interaction);k.copyFrom(i.interaction.modification),k.prepareStates(S),o.subModification=k,k.startAll(bs({},i))}},set:function(i){var o=i.state,c=i.rect,u=i.coords,f=(0,V.default)({},u),_=o.equalDelta?wd:Ed;if(_(o,o.xIsPrimaryAxis,u,c),!o.subModification)return null;var w=(0,V.default)({},c);(0,ae.addEdges)(o.linkedEdges,w,{x:u.x-f.x,y:u.y-f.y});var x=o.subModification.setAll(bs(bs({},i),{},{rect:w,edges:o.linkedEdges,pageCoords:u,prevCoords:u,prevRect:w})),S=x.delta;return x.changed&&(_(o,Math.abs(S.x)>Math.abs(S.y),x.coords,x.rect),(0,V.default)(u,x.coords)),x.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function wd(i,o,c){var u=i.startCoords,f=i.edgeSign;o?c.y=u.y+(c.x-u.x)*f.y:c.x=u.x+(c.y-u.y)*f.x}function Ed(i,o,c,u){var f=i.startRect,_=i.startCoords,w=i.ratio,x=i.edgeSign;if(o){var S=u.width/w;c.y=_.y+(S-f.height)*x.y}else{var D=u.height*w;c.x=_.x+(D-f.width)*x.x}}Fi.aspectRatio=vl;var Td=(0,Nt.makeModifier)(vl,"aspectRatio");Fi.default=Td;var vi={};Object.defineProperty(vi,"__esModule",{value:!0}),vi.default=void 0;var _l=function(){};_l._defaults={};var Ad=_l;vi.default=Ad;var Ms={};Object.defineProperty(Ms,"__esModule",{value:!0}),Object.defineProperty(Ms,"default",{enumerable:!0,get:function(){return vi.default}});var Yt={};function Ss(i,o,c){return l.default.func(i)?ae.resolveRectLike(i,o.interactable,o.element,[c.x,c.y,o]):ae.resolveRectLike(i,o.interactable,o.element)}Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.default=void 0,Yt.getRestrictionRect=Ss,Yt.restrict=void 0;var xl={start:function(i){var o=i.rect,c=i.startOffset,u=i.state,f=i.interaction,_=i.pageCoords,w=u.options,x=w.elementRect,S=(0,V.default)({left:0,top:0,right:0,bottom:0},w.offset||{});if(o&&x){var D=Ss(w.restriction,f,_);if(D){var F=D.right-D.left-o.width,k=D.bottom-D.top-o.height;F<0&&(S.left+=F,S.right+=F),k<0&&(S.top+=k,S.bottom+=k)}S.left+=c.left-o.width*x.left,S.top+=c.top-o.height*x.top,S.right+=c.right-o.width*(1-x.right),S.bottom+=c.bottom-o.height*(1-x.bottom)}u.offset=S},set:function(i){var o=i.coords,c=i.interaction,u=i.state,f=u.options,_=u.offset,w=Ss(f.restriction,c,o);if(w){var x=ae.xywhToTlbr(w);o.x=Math.max(Math.min(x.right-_.right,o.x),x.left+_.left),o.y=Math.max(Math.min(x.bottom-_.bottom,o.y),x.top+_.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Yt.restrict=xl;var Pd=(0,Nt.makeModifier)(xl,"restrict");Yt.default=Pd;var Fn={};Object.defineProperty(Fn,"__esModule",{value:!0}),Fn.restrictEdges=Fn.default=void 0;var yl={top:1/0,left:1/0,bottom:-1/0,right:-1/0},bl={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Ml(i,o){for(var c=["top","left","bottom","right"],u=0;u<c.length;u++){var f=c[u];f in i||(i[f]=o[f])}return i}var Sl={noInner:yl,noOuter:bl,start:function(i){var o,c=i.interaction,u=i.startOffset,f=i.state,_=f.options;if(_){var w=(0,Yt.getRestrictionRect)(_.offset,c,c.coords.start.page);o=ae.rectToXY(w)}o=o||{x:0,y:0},f.offset={top:o.y+u.top,left:o.x+u.left,bottom:o.y-u.bottom,right:o.x-u.right}},set:function(i){var o=i.coords,c=i.edges,u=i.interaction,f=i.state,_=f.offset,w=f.options;if(c){var x=(0,V.default)({},o),S=(0,Yt.getRestrictionRect)(w.inner,u,x)||{},D=(0,Yt.getRestrictionRect)(w.outer,u,x)||{};Ml(S,yl),Ml(D,bl),c.top?o.y=Math.min(Math.max(D.top+_.top,x.y),S.top+_.top):c.bottom&&(o.y=Math.max(Math.min(D.bottom+_.bottom,x.y),S.bottom+_.bottom)),c.left?o.x=Math.min(Math.max(D.left+_.left,x.x),S.left+_.left):c.right&&(o.x=Math.max(Math.min(D.right+_.right,x.x),S.right+_.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Fn.restrictEdges=Sl;var Cd=(0,Nt.makeModifier)(Sl,"restrictEdges");Fn.default=Cd;var zi={};Object.defineProperty(zi,"__esModule",{value:!0}),zi.restrictRect=zi.default=void 0;var Dd=(0,V.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(i){}},Yt.restrict.defaults),wl={start:Yt.restrict.start,set:Yt.restrict.set,defaults:Dd};zi.restrictRect=wl;var Ld=(0,Nt.makeModifier)(wl,"restrictRect");zi.default=Ld;var Ni={};Object.defineProperty(Ni,"__esModule",{value:!0}),Ni.restrictSize=Ni.default=void 0;var Rd={width:-1/0,height:-1/0},Id={width:1/0,height:1/0},El={start:function(i){return Fn.restrictEdges.start(i)},set:function(i){var o=i.interaction,c=i.state,u=i.rect,f=i.edges,_=c.options;if(f){var w=ae.tlbrToXywh((0,Yt.getRestrictionRect)(_.min,o,i.coords))||Rd,x=ae.tlbrToXywh((0,Yt.getRestrictionRect)(_.max,o,i.coords))||Id;c.options={endOnly:_.endOnly,inner:(0,V.default)({},Fn.restrictEdges.noInner),outer:(0,V.default)({},Fn.restrictEdges.noOuter)},f.top?(c.options.inner.top=u.bottom-w.height,c.options.outer.top=u.bottom-x.height):f.bottom&&(c.options.inner.bottom=u.top+w.height,c.options.outer.bottom=u.top+x.height),f.left?(c.options.inner.left=u.right-w.width,c.options.outer.left=u.right-x.width):f.right&&(c.options.inner.right=u.left+w.width,c.options.outer.right=u.left+x.width),Fn.restrictEdges.set(i),c.options=_}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Ni.restrictSize=El;var Od=(0,Nt.makeModifier)(El,"restrictSize");Ni.default=Od;var ws={};Object.defineProperty(ws,"__esModule",{value:!0}),Object.defineProperty(ws,"default",{enumerable:!0,get:function(){return vi.default}});var ti={};Object.defineProperty(ti,"__esModule",{value:!0}),ti.snap=ti.default=void 0;var Tl={start:function(i){var o,c=i.interaction,u=i.interactable,f=i.element,_=i.rect,w=i.state,x=i.startOffset,S=w.options,D=S.offsetWithOrigin?function(J){var se=J.interaction.element;return(0,ae.rectToXY)((0,ae.resolveRectLike)(J.state.options.origin,null,null,[se]))||(0,de.default)(J.interactable,se,J.interaction.prepared.name)}(i):{x:0,y:0};if(S.offset==="startCoords")o={x:c.coords.start.page.x,y:c.coords.start.page.y};else{var F=(0,ae.resolveRectLike)(S.offset,u,f,[c]);(o=(0,ae.rectToXY)(F)||{x:0,y:0}).x+=D.x,o.y+=D.y}var k=S.relativePoints;w.offsets=_&&k&&k.length?k.map(function(J,se){return{index:se,relativePoint:J,x:x.left-_.width*J.x+o.x,y:x.top-_.height*J.y+o.y}}):[{index:0,relativePoint:null,x:o.x,y:o.y}]},set:function(i){var o=i.interaction,c=i.coords,u=i.state,f=u.options,_=u.offsets,w=(0,de.default)(o.interactable,o.element,o.prepared.name),x=(0,V.default)({},c),S=[];f.offsetWithOrigin||(x.x-=w.x,x.y-=w.y);for(var D=0;D<_.length;D++)for(var F=_[D],k=x.x-F.x,J=x.y-F.y,se=0,j=f.targets.length;se<j;se++){var he,be=f.targets[se];(he=l.default.func(be)?be(k,J,o._proxy,F,se):be)&&S.push({x:(l.default.number(he.x)?he.x:k)+F.x,y:(l.default.number(he.y)?he.y:J)+F.y,range:l.default.number(he.range)?he.range:f.range,source:be,index:se,offset:F})}for(var me={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Ie=0;Ie<S.length;Ie++){var Be=S[Ie],Xe=Be.range,ut=Be.x-x.x,mt=Be.y-x.y,ot=(0,ee.default)(ut,mt),pt=ot<=Xe;Xe===1/0&&me.inRange&&me.range!==1/0&&(pt=!1),me.target&&!(pt?me.inRange&&Xe!==1/0?ot/Xe<me.distance/me.range:Xe===1/0&&me.range!==1/0||ot<me.distance:!me.inRange&&ot<me.distance)||(me.target=Be,me.distance=ot,me.range=Xe,me.inRange=pt,me.delta.x=ut,me.delta.y=mt)}return me.inRange&&(c.x=me.target.x,c.y=me.target.y),u.closest=me,me},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};ti.snap=Tl;var Fd=(0,Nt.makeModifier)(Tl,"snap");ti.default=Fd;var Hn={};function Al(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}Object.defineProperty(Hn,"__esModule",{value:!0}),Hn.snapSize=Hn.default=void 0;var Pl={start:function(i){var o=i.state,c=i.edges,u=o.options;if(!c)return null;i.state={options:{targets:null,relativePoints:[{x:c.left?0:1,y:c.top?0:1}],offset:u.offset||"self",origin:{x:0,y:0},range:u.range}},o.targetFields=o.targetFields||[["width","height"],["x","y"]],ti.snap.start(i),o.offsets=i.state.offsets,i.state=o},set:function(i){var o,c,u=i.interaction,f=i.state,_=i.coords,w=f.options,x=f.offsets,S={x:_.x-x[0].x,y:_.y-x[0].y};f.options=(0,V.default)({},w),f.options.targets=[];for(var D=0;D<(w.targets||[]).length;D++){var F=(w.targets||[])[D],k=void 0;if(k=l.default.func(F)?F(S.x,S.y,u):F){for(var J=0;J<f.targetFields.length;J++){var se=(o=f.targetFields[J],c=2,function(me){if(Array.isArray(me))return me}(o)||function(me,Ie){var Be=me==null?null:typeof Symbol<"u"&&me[Symbol.iterator]||me["@@iterator"];if(Be!=null){var Xe,ut,mt=[],ot=!0,pt=!1;try{for(Be=Be.call(me);!(ot=(Xe=Be.next()).done)&&(mt.push(Xe.value),!Ie||mt.length!==Ie);ot=!0);}catch(_n){pt=!0,ut=_n}finally{try{ot||Be.return==null||Be.return()}finally{if(pt)throw ut}}return mt}}(o,c)||function(me,Ie){if(me){if(typeof me=="string")return Al(me,Ie);var Be=Object.prototype.toString.call(me).slice(8,-1);return Be==="Object"&&me.constructor&&(Be=me.constructor.name),Be==="Map"||Be==="Set"?Array.from(me):Be==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Be)?Al(me,Ie):void 0}}(o,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),j=se[0],he=se[1];if(j in k||he in k){k.x=k[j],k.y=k[he];break}}f.options.targets.push(k)}}var be=ti.snap.set(i);return f.options=w,be},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};Hn.snapSize=Pl;var zd=(0,Nt.makeModifier)(Pl,"snapSize");Hn.default=zd;var Ui={};Object.defineProperty(Ui,"__esModule",{value:!0}),Ui.snapEdges=Ui.default=void 0;var Cl={start:function(i){var o=i.edges;return o?(i.state.targetFields=i.state.targetFields||[[o.left?"left":"right",o.top?"top":"bottom"]],Hn.snapSize.start(i)):null},set:Hn.snapSize.set,defaults:(0,V.default)((0,hi.default)(Hn.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};Ui.snapEdges=Cl;var Nd=(0,Nt.makeModifier)(Cl,"snapEdges");Ui.default=Nd;var Es={};Object.defineProperty(Es,"__esModule",{value:!0}),Object.defineProperty(Es,"default",{enumerable:!0,get:function(){return vi.default}});var Ts={};Object.defineProperty(Ts,"__esModule",{value:!0}),Object.defineProperty(Ts,"default",{enumerable:!0,get:function(){return vi.default}});var ki={};Object.defineProperty(ki,"__esModule",{value:!0}),ki.default=void 0;var Ud={aspectRatio:Fi.default,restrictEdges:Fn.default,restrict:Yt.default,restrictRect:zi.default,restrictSize:Ni.default,snapEdges:Ui.default,snap:ti.default,snapSize:Hn.default,spring:Es.default,avoid:Ms.default,transform:Ts.default,rubberband:ws.default};ki.default=Ud;var Ar={};Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.default=void 0;var kd={id:"modifiers",install:function(i){var o=i.interactStatic;for(var c in i.usePlugin(Nt.default),i.usePlugin(bo.default),o.modifiers=ki.default,ki.default){var u=ki.default[c],f=u._defaults,_=u._methods;f._methods=_,i.defaults.perAction[c]=f}}},Bd=kd;Ar.default=Bd;var _i={};function As(i){return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},As(i)}function Gd(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Ps(i,o){return Ps=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Ps(i,o)}function Vd(i,o){if(o&&(As(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Cs(i)}function Cs(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Mo(i){return Mo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},Mo(i)}Object.defineProperty(_i,"__esModule",{value:!0}),_i.default=_i.PointerEvent=void 0;var Hd=function(i){(function(x,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(S&&S.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),Object.defineProperty(x,"prototype",{writable:!1}),S&&Ps(x,S)})(w,i);var o,c,u,f,_=(u=w,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var x,S=Mo(u);if(f){var D=Mo(this).constructor;x=Reflect.construct(S,arguments,D)}else x=S.apply(this,arguments);return Vd(this,x)});function w(x,S,D,F,k,J){var se;if(function(be,me){if(!(be instanceof me))throw new TypeError("Cannot call a class as a function")}(this,w),se=_.call(this,k),te.pointerExtend(Cs(se),D),D!==S&&te.pointerExtend(Cs(se),S),se.timeStamp=J,se.originalEvent=D,se.type=x,se.pointerId=te.getPointerId(S),se.pointerType=te.getPointerType(S),se.target=F,se.currentTarget=null,x==="tap"){var j=k.getPointerIndex(S);se.dt=se.timeStamp-k.pointers[j].downTime;var he=se.timeStamp-k.tapTime;se.double=!!k.prevTap&&k.prevTap.type!=="doubletap"&&k.prevTap.target===se.target&&he<500}else x==="doubletap"&&(se.dt=S.timeStamp-k.tapTime,se.double=!0);return se}return o=w,(c=[{key:"_subtractOrigin",value:function(x){var S=x.x,D=x.y;return this.pageX-=S,this.pageY-=D,this.clientX-=S,this.clientY-=D,this}},{key:"_addOrigin",value:function(x){var S=x.x,D=x.y;return this.pageX+=S,this.pageY+=D,this.clientX+=S,this.clientY+=D,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&Gd(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),w}(He.BaseEvent);_i.PointerEvent=_i.default=Hd;var Pr={};Object.defineProperty(Pr,"__esModule",{value:!0}),Pr.default=void 0;var So={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(i){i.pointerEvents=So,i.defaults.actions.pointerEvents=So.defaults,(0,V.default)(i.actions.phaselessTypes,So.types)},listeners:{"interactions:new":function(i){var o=i.interaction;o.prevTap=null,o.tapTime=0},"interactions:update-pointer":function(i){var o=i.down,c=i.pointerInfo;!o&&c.hold||(c.hold={duration:1/0,timeout:null})},"interactions:move":function(i,o){var c=i.interaction,u=i.pointer,f=i.event,_=i.eventTarget;i.duplicate||c.pointerIsDown&&!c.pointerWasMoved||(c.pointerIsDown&&Ds(i),ni({interaction:c,pointer:u,event:f,eventTarget:_,type:"move"},o))},"interactions:down":function(i,o){(function(c,u){for(var f=c.interaction,_=c.pointer,w=c.event,x=c.eventTarget,S=c.pointerIndex,D=f.pointers[S].hold,F=E.getPath(x),k={interaction:f,pointer:_,event:w,eventTarget:x,type:"hold",targets:[],path:F,node:null},J=0;J<F.length;J++){var se=F[J];k.node=se,u.fire("pointerEvents:collect-targets",k)}if(k.targets.length){for(var j=1/0,he=0;he<k.targets.length;he++){var be=k.targets[he].eventable.options.holdDuration;be<j&&(j=be)}D.duration=j,D.timeout=setTimeout(function(){ni({interaction:f,eventTarget:x,pointer:_,event:w,type:"hold"},u)},j)}})(i,o),ni(i,o)},"interactions:up":function(i,o){Ds(i),ni(i,o),function(c,u){var f=c.interaction,_=c.pointer,w=c.event,x=c.eventTarget;f.pointerWasMoved||ni({interaction:f,eventTarget:x,pointer:_,event:w,type:"tap"},u)}(i,o)},"interactions:cancel":function(i,o){Ds(i),ni(i,o)}},PointerEvent:_i.PointerEvent,fire:ni,collectEventTargets:Dl,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function ni(i,o){var c=i.interaction,u=i.pointer,f=i.event,_=i.eventTarget,w=i.type,x=i.targets,S=x===void 0?Dl(i,o):x,D=new _i.PointerEvent(w,u,f,_,c,o.now());o.fire("pointerEvents:new",{pointerEvent:D});for(var F={interaction:c,pointer:u,event:f,eventTarget:_,targets:S,type:w,pointerEvent:D},k=0;k<S.length;k++){var J=S[k];for(var se in J.props||{})D[se]=J.props[se];var j=(0,de.default)(J.eventable,J.node);if(D._subtractOrigin(j),D.eventable=J.eventable,D.currentTarget=J.node,J.eventable.fire(D),D._addOrigin(j),D.immediatePropagationStopped||D.propagationStopped&&k+1<S.length&&S[k+1].node!==D.currentTarget)break}if(o.fire("pointerEvents:fired",F),w==="tap"){var he=D.double?ni({interaction:c,pointer:u,event:f,eventTarget:_,type:"doubletap"},o):D;c.prevTap=he,c.tapTime=he.timeStamp}return D}function Dl(i,o){var c=i.interaction,u=i.pointer,f=i.event,_=i.eventTarget,w=i.type,x=c.getPointerIndex(u),S=c.pointers[x];if(w==="tap"&&(c.pointerWasMoved||!S||S.downTarget!==_))return[];for(var D=E.getPath(_),F={interaction:c,pointer:u,event:f,eventTarget:_,type:w,path:D,targets:[],node:null},k=0;k<D.length;k++){var J=D[k];F.node=J,o.fire("pointerEvents:collect-targets",F)}return w==="hold"&&(F.targets=F.targets.filter(function(se){var j;return se.eventable.options.holdDuration===((j=c.pointers[x])==null?void 0:j.hold.duration)})),F.targets}function Ds(i){var o=i.interaction,c=i.pointerIndex,u=o.pointers[c].hold;u&&u.timeout&&(clearTimeout(u.timeout),u.timeout=null)}var Wd=So;Pr.default=Wd;var wo={};function jd(i){var o=i.interaction;o.holdIntervalHandle&&(clearInterval(o.holdIntervalHandle),o.holdIntervalHandle=null)}Object.defineProperty(wo,"__esModule",{value:!0}),wo.default=void 0;var qd={id:"pointer-events/holdRepeat",install:function(i){i.usePlugin(Pr.default);var o=i.pointerEvents;o.defaults.holdRepeatInterval=0,o.types.holdrepeat=i.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(i,o){return i["pointerEvents:".concat(o)]=jd,i},{"pointerEvents:new":function(i){var o=i.pointerEvent;o.type==="hold"&&(o.count=(o.count||0)+1)},"pointerEvents:fired":function(i,o){var c=i.interaction,u=i.pointerEvent,f=i.eventTarget,_=i.targets;if(u.type==="hold"&&_.length){var w=_[0].eventable.options.holdRepeatInterval;w<=0||(c.holdIntervalHandle=setTimeout(function(){o.pointerEvents.fire({interaction:c,eventTarget:f,type:"hold",pointer:u,event:u},o)},w))}}})},Xd=qd;wo.default=Xd;var Eo={};function Yd(i){return(0,V.default)(this.events.options,i),this}Object.defineProperty(Eo,"__esModule",{value:!0}),Eo.default=void 0;var Zd={id:"pointer-events/interactableTargets",install:function(i){var o=i.Interactable;o.prototype.pointerEvents=Yd;var c=o.prototype._backCompatOption;o.prototype._backCompatOption=function(u,f){var _=c.call(this,u,f);return _===this&&(this.events.options[u]=f),_}},listeners:{"pointerEvents:collect-targets":function(i,o){var c=i.targets,u=i.node,f=i.type,_=i.eventTarget;o.interactables.forEachMatch(u,function(w){var x=w.events,S=x.options;x.types[f]&&x.types[f].length&&w.testIgnoreAllow(S,u,_)&&c.push({node:u,eventable:x,props:{interactable:w}})})},"interactable:new":function(i){var o=i.interactable;o.events.getRect=function(c){return o.getRect(c)}},"interactable:set":function(i,o){var c=i.interactable,u=i.options;(0,V.default)(c.events.options,o.pointerEvents.defaults),(0,V.default)(c.events.options,u.pointerEvents||{})}}},Kd=Zd;Eo.default=Kd;var Cr={};Object.defineProperty(Cr,"__esModule",{value:!0}),Cr.default=void 0;var $d={id:"pointer-events",install:function(i){i.usePlugin(Pr),i.usePlugin(wo.default),i.usePlugin(Eo.default)}},Qd=$d;Cr.default=Qd;var Bi={};function Ll(i){var o=i.Interactable;i.actions.phases.reflow=!0,o.prototype.reflow=function(c){return function(u,f,_){for(var w=l.default.string(u.target)?qe.from(u._context.querySelectorAll(u.target)):[u.target],x=_.window.Promise,S=x?[]:null,D=function(){var k=w[F],J=u.getRect(k);if(!J)return"break";var se=qe.find(_.interactions.list,function(Ie){return Ie.interacting()&&Ie.interactable===u&&Ie.element===k&&Ie.prepared.name===f.name}),j=void 0;if(se)se.move(),S&&(j=se._reflowPromise||new x(function(Ie){se._reflowResolve=Ie}));else{var he=(0,ae.tlbrToXywh)(J),be={page:{x:he.x,y:he.y},client:{x:he.x,y:he.y},timeStamp:_.now()},me=te.coordsToEvent(be);j=function(Ie,Be,Xe,ut,mt){var ot=Ie.interactions.new({pointerType:"reflow"}),pt={interaction:ot,event:mt,pointer:mt,eventTarget:Xe,phase:"reflow"};ot.interactable=Be,ot.element=Xe,ot.prevEvent=mt,ot.updatePointer(mt,mt,Xe,!0),te.setZeroCoords(ot.coords.delta),(0,ne.copyAction)(ot.prepared,ut),ot._doPhase(pt);var _n=Ie.window.Promise,Wn=_n?new _n(function(Is){ot._reflowResolve=Is}):void 0;return ot._reflowPromise=Wn,ot.start(ut,Be,Xe),ot._interacting?(ot.move(pt),ot.end(mt)):(ot.stop(),ot._reflowResolve()),ot.removePointer(mt,mt),Wn}(_,u,k,f,me)}S&&S.push(j)},F=0;F<w.length&&D()!=="break";F++);return S&&x.all(S).then(function(){return u})}(this,c,i)}}Object.defineProperty(Bi,"__esModule",{value:!0}),Bi.default=void 0,Bi.install=Ll;var Jd={id:"reflow",install:Ll,listeners:{"interactions:stop":function(i,o){var c=i.interaction;c.pointerType==="reflow"&&(c._reflowResolve&&c._reflowResolve(),qe.remove(o.interactions.list,c))}}},ef=Jd;Bi.default=ef;var vn={exports:{}};function Ls(i){return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ls(i)}Object.defineProperty(vn.exports,"__esModule",{value:!0}),vn.exports.default=void 0,kt.default.use(Sn.default),kt.default.use(Jn.default),kt.default.use(Cr.default),kt.default.use(gi.default),kt.default.use(Ar.default),kt.default.use(Gn.default),kt.default.use(_t.default),kt.default.use(Mn.default),kt.default.use(Bi.default);var tf=kt.default;if(vn.exports.default=tf,Ls(vn)==="object"&&vn)try{vn.exports=kt.default}catch{}kt.default.default=kt.default,_t.default,Mn.default,Gn.default,Sn.default,io.default,gi.default,kt.default,Ar.default,Jn.default,Cr.default,Bi.default,vn=vn.exports;var xi={exports:{}};function Rs(i){return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Rs(i)}Object.defineProperty(xi.exports,"__esModule",{value:!0}),xi.exports.default=void 0;var nf=vn.default;if(xi.exports.default=nf,Rs(xi)==="object"&&xi)try{xi.exports=vn.default}catch{}return vn.default.default=vn.default,xi.exports})})(D0);const L0=C0(Pa),ai=a=>{for(let e=0;e<je.vertices.length;e++){const{vertex:t}=je.vertices[e];Zo(t,a)}for(let e=0;e<je.edges.length;e++){const{start:t,end:n}=je.edges[e];Zo(t,a),Zo(n,a),je.edges[e].segments=Ba(t,n)}},kr=a=>{for(let e=0;e<je.vertices.length;e++){const{vertex:t}=je.vertices[e];pa(t,a)}for(let e=0;e<je.edges.length;e++){const{start:t,end:n}=je.edges[e];pa(t,a),pa(n,a),je.edges[e].segments=Ba(t,n)}},Br=a=>{for(let e=0;e<je.vertices.length;e++){const{vertex:t}=je.vertices[e];ma(t,a)}for(let e=0;e<je.edges.length;e++){const{start:t,end:n}=je.edges[e];ma(t,a),ma(n,a),je.edges[e].segments=Ba(t,n)}},R0=()=>{const a=[];document.querySelector("canvas").addEventListener("pointerdown",e=>{a.push(e.pointerId)}),document.querySelector("canvas").addEventListener("pointerup",e=>{const t=a.indexOf(e.pointerId);t>-1&&a.splice(t,1)}),L0("canvas").draggable({listeners:{move:e=>{if(Oe.controls!=="free")return;const t=window.innerWidth/2,n=window.innerHeight/2,r=Math.min(t,n)*.9;if(e.ctrlKey)kr(-e.dx/(2*r)),Br(-e.dy/(2*r));else{const s=-e.dx/t,d=-e.dy/n;e.shiftKey||a.length>2?ai([0,0,d]):ai([s,d,0])}Ci(!0),$n()}}}).gesturable({onmove:e=>{Oe.controls!=="free"||a.length>2||(kr(qo*e.da/180),Br(e.ds),Ci(!0),$n())}}),document.addEventListener("wheel",e=>{if(Oe.controls!=="free")return;const t=window.innerWidth/2,n=window.innerHeight/2,r=Math.min(t,n)*.9,s=10*(e.deltaMode===1?e.deltaY*10:e.deltaY)/r;e.ctrlKey?kr(qo*s/180):Br(-s/100),Ci(!0),$n()}),document.addEventListener("keydown",e=>{if(Oe.controls!=="free")return;const{code:t}=e,n=.01;t==="ArrowLeft"||t==="KeyA"?ai([-n,0,0]):t==="ArrowRight"||t==="KeyD"?ai([n,0,0]):t==="ArrowUp"||t==="KeyW"?ai([0,0,-n]):t==="ArrowDown"||t==="KeyS"?ai([0,0,n]):t==="PageUp"||t==="KeyQ"?ai([0,-n,0]):t==="PageDown"||t==="KeyE"?ai([0,n,0]):t==="Digit1"?kr(-(qo*5)/180):t==="Digit3"?kr(qo*5/180):t==="KeyZ"?Br(-n):t==="KeyC"&&Br(n),Ci(!0),$n()})};function Ou(){return new Worker(""+new URL("tiling.worker-99b58a0d.js",import.meta.url).href)}let fn=0,rr=()=>{};const I0=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const e=Math.random()*16|0;return(a==="x"?e:e&3|8).toString(16)}),O0=a=>{rr=a},F0=a=>{a.terminate(),fn=0,rr(fn)},z0=async(a,e)=>(e.uuid=I0(),fn++,rr(fn),a.postMessage(e),new Promise((t,n)=>{const r=d=>{d.data.uuid===e.uuid&&(a.removeEventListener("message",r),fn--,rr(fn),t(d.data))},s=d=>{if(!d.uuid){if(a.removeEventListener("error",s),fn<=0)return;fn--,fn=Yr(0,fn),rr(fn,!0),console.error("Can't call web worker",d);return}d.uuid===e.uuid&&(a.removeEventListener("error",s),fn--,rr(fn,!0),n(d))};a.addEventListener("message",r),a.addEventListener("error",s)}));let Ca=new Ou;window.C=Oe;Object.assign(window,w0());const N0=()=>{const e=window.innerWidth*1,t=window.innerHeight*1,n=Bt.domElement;(n.width!==e||n.height!==t)&&(nn.aspect=e/t,nn.zoom=Math.min(1,e/t),nn.updateProjectionMatrix(),Bt.setSize(e,t),Ti.setSize(e,t),window.bloomPass.resolution=new Ve(e,t),window.fxaaPass.material.uniforms.resolution.value.x=1/(e*Bt.getPixelRatio()),window.fxaaPass.material.uniforms.resolution.value.y=1/(t*Bt.getPixelRatio()),n.style.width=e+"px",n.style.height=t+"px"),$n()};window.ondeviceorientation=window.onresize=N0;O0((a,e)=>{a?(document.body.classList.add("processing"),document.querySelectorAll("input").forEach(t=>t.disabled=!0)):(document.body.classList.remove("processing"),document.querySelectorAll("input").forEach(t=>t.disabled=!1)),e?document.body.classList.add("error"):document.body.classList.remove("error")});const Va="⇹",Da="↭",Fu=()=>{document.querySelector("#d4").checked=Oe.dimensions===4,document.querySelectorAll(".d4").forEach(a=>{a.style.display=Oe.dimensions===4?"block":"none"}),document.querySelectorAll(".d3").forEach(a=>{a.style.display=Oe.dimensions===3?"block":"none"}),document.querySelector("#segments").style.display=Oe.curve?"inline":"none","pqrstu".split("").forEach(a=>{document.querySelector(`#${a}`).value=Oe[a]}),"xyzw".split("").forEach(a=>{document.querySelector(`#mirror-${a}`).checked=!!Oe[a]}),document.querySelector("#order").value=Oe.order,document.querySelector("#segments").value=Oe.segments,document.querySelector("#curve").checked=Oe.curve,document.querySelector("#projection").value=Oe.projection,document.querySelector("#vertices").checked=Oe.vertices,document.querySelector("#edges").checked=Oe.edges,document.querySelector("#light").value=Oe.light,document.querySelector("#thickness").value=Oe.thickness,document.querySelector("#controls").innerHTML=Oe.controls==="orbit"?Va:Da},is=async a=>{const e=a==null?void 0:a.target.id,t={};if(t.dimensions=document.querySelector("#d4").checked?4:3,t.light=+document.querySelector("#light").value,t.thickness=+document.querySelector("#thickness").value,t.projection=document.querySelector("#projection").value,window.bloomPass.strength=t.light,t.controls=document.querySelector("#controls").innerHTML===Va?"orbit":"free",window.controls.enabled=t.controls==="orbit",e==="curve"&&(document.querySelector("#segments").style.display=document.querySelector("#curve").checked?"inline":"none"),e==="d4"){const d=(h,p)=>{document.querySelector(`#${h}`).value=p},l=h=>+document.querySelector(`#${h}`).value;document.querySelectorAll(".d4").forEach(h=>{h.style.display=t.dimensions===4?"block":"none"}),document.querySelectorAll(".d3").forEach(h=>{h.style.display=t.dimensions===3?"block":"none"}),t.dimensions===4?(d("s",l("q")),d("u",l("r")),d("q",2),d("r",2),d("t",2)):t.dimensions===3&&(d("q",Yr(l("s"),l("q"))),d("r",Yr(l("r"),l("t"),l("u"))),d("s",2),d("u",2),d("t",2),document.querySelector("#mirror-w").checked=!1)}e!=null&&e.startsWith("mirror-")&&"xyzw".split("").every(d=>!document.querySelector(`#mirror-${d}`).checked)&&(document.querySelector("#mirror-x").checked=!0),"pqrstu".split("").forEach(d=>{t[d]=+document.querySelector(`#${d}`).value}),"xyzw".split("").forEach(d=>{t[d]=document.querySelector(`#mirror-${d}`).checked}),t.order=+document.querySelector("#order").value,t.curve=document.querySelector("#curve").checked,t.segments=+document.querySelector("#segments").value,t.vertices=document.querySelector("#vertices").checked,t.edges=document.querySelector("#edges").checked;const n=Object.keys(t).filter(d=>t[d]!==Oe[d]),r=Oe.order;let s=!e;if((s||["p","q","r","s","t","u","dimensions"].some(d=>n.includes(d)))&&(s=!0),Au(t,!0),s||["x","y","z","w","order","segments","curve"].some(d=>n.includes(d)))if(e==="order"&&je.ranges[Oe.order-1])Ci(je.ranges[Oe.order-1]),$n();else{const d=e==="order"?r:0;for(let l=d;l<Oe.order;l++){const{R:h,vertices:p,edges:m}=await z0(Ca,{C:Oe,order:l});if(l===0&&(y0({...h,ranges:{}}),document.querySelector("#space").innerHTML=`${je.curvature===0?"&#x1D53C":je.curvature>0?"&#x1D54A":"&#x210D"}<sup>${Oe.dimensions-1}</sup>`),p.length||m.length){const v=je.vertices.length;je.vertices=je.vertices.concat(p);const g=je.vertices.length,M=je.edges.length;je.edges=je.edges.concat(m);const P=je.edges.length;je.ranges[l]={vertices:[v,g],edges:[M,P]},Ci(je.ranges[l]),$n()}else je.ranges[l]={vertices:[je.vertices.length,je.vertices.length],edges:[je.edges.length,je.edges.length]}}}else["edges","vertices","thickness","projection"].some(d=>n.includes(d))&&Ci(!0);$n()};document.querySelectorAll("input,select").forEach(a=>{a.addEventListener("change",is)});document.getElementById("space").addEventListener("dblclick",()=>{document.body.classList.contains("processing")&&(F0(Ca),document.body.classList.remove("processing"),Ca=new Ou,Au(Tu,!0)),Fu(),is()});document.getElementById("space").addEventListener("click",()=>{document.body.classList.toggle("real-estate")});document.getElementById("controls").addEventListener("click",()=>{document.getElementById("controls").innerHTML=document.getElementById("controls").innerHTML===Da?Va:Da,is({target:{id:"controls"}})});c0();Fu();is();R0();
