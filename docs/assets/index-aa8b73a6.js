(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="150",Wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bf=0,Gl=1,Mf=2,pu=1,Sf=2,qr=3,pi=0,gn=1,ui=2,hi=0,lr=1,Ea=2,Vl=3,Hl=4,wf=5,or=100,Ef=101,Tf=102,Wl=103,jl=104,Af=200,Pf=201,Cf=202,Df=203,mu=204,gu=205,Lf=206,Rf=207,If=208,Of=209,Nf=210,zf=0,Ff=1,Uf=2,Ta=3,kf=4,Bf=5,Gf=6,Vf=7,za=0,Hf=1,Wf=2,Gn=0,jf=1,vu=2,qf=3,Xf=4,Yf=5,_u=300,dr=301,fr=302,rs=303,Aa=304,as=306,Ri=1e3,Pn=1001,Pa=1002,tn=1003,ql=1004,Gs=1005,bn=1006,Kf=1007,Zr=1008,Ii=1009,$f=1010,Zf=1011,xu=1012,Jf=1013,Ci=1014,Di=1015,Jr=1016,Qf=1017,eh=1018,cr=1020,th=1021,Cn=1023,nh=1024,ih=1025,Li=1026,hr=1027,rh=1028,oh=1029,sh=1030,ah=1031,lh=1033,Vs=33776,Hs=33777,Ws=33778,js=33779,Xl=35840,Yl=35841,Kl=35842,$l=35843,ch=36196,Zl=37492,Jl=37496,Ql=37808,ec=37809,tc=37810,nc=37811,ic=37812,rc=37813,oc=37814,sc=37815,ac=37816,lc=37817,cc=37818,uc=37819,dc=37820,fc=37821,qs=36492,uh=36283,hc=36284,pc=36285,mc=36286,Oi=3e3,mt=3001,dh=3200,fh=3201,Fa=0,hh=1,Un="srgb",Qr="srgb-linear",yu="display-p3",Xs=7680,ph=519,gc=35044,vc="300 es",Ca=1035;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,d=r.length;s<d;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,_c=180/Math.PI;function no(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[a&255]+qt[a>>8&255]+qt[a>>16&255]+qt[a>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function nn(a,e,t){return Math.max(e,Math.min(t,a))}function mh(a,e){return(a%e+e)%e}function Ks(a,e,t){return(1-t)*a+t*e}function xc(a){return(a&a-1)===0&&a!==0}function gh(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Oo(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function un(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,d=this.y-e.y;return this.x=s*n-d*r+e.x,this.y=s*r+d*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rn{constructor(){rn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,d,l,h,p){const m=this.elements;return m[0]=e,m[1]=r,m[2]=l,m[3]=t,m[4]=s,m[5]=h,m[6]=n,m[7]=d,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,d=n[0],l=n[3],h=n[6],p=n[1],m=n[4],g=n[7],v=n[2],M=n[5],C=n[8],b=r[0],y=r[3],P=r[6],O=r[1],A=r[4],F=r[7],R=r[2],B=r[5],K=r[8];return s[0]=d*b+l*O+h*R,s[3]=d*y+l*A+h*B,s[6]=d*P+l*F+h*K,s[1]=p*b+m*O+g*R,s[4]=p*y+m*A+g*B,s[7]=p*P+m*F+g*K,s[2]=v*b+M*O+C*R,s[5]=v*y+M*A+C*B,s[8]=v*P+M*F+C*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],d=e[4],l=e[5],h=e[6],p=e[7],m=e[8];return t*d*m-t*l*p-n*s*m+n*l*h+r*s*p-r*d*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],d=e[4],l=e[5],h=e[6],p=e[7],m=e[8],g=m*d-l*p,v=l*h-m*s,M=p*s-d*h,C=t*g+n*v+r*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=g*b,e[1]=(r*p-m*n)*b,e[2]=(l*n-r*d)*b,e[3]=v*b,e[4]=(m*t-r*h)*b,e[5]=(r*s-l*t)*b,e[6]=M*b,e[7]=(n*h-p*t)*b,e[8]=(d*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,d,l){const h=Math.cos(s),p=Math.sin(s);return this.set(n*h,n*p,-n*(h*d+p*l)+d+e,-r*p,r*h,-r*(-p*d+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply($s.makeScale(e,t)),this}rotate(e){return this.premultiply($s.makeRotation(-e)),this}translate(e,t){return this.premultiply($s.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new rn;function bu(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function eo(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}class Ni{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,d,l){let h=n[r+0],p=n[r+1],m=n[r+2],g=n[r+3];const v=s[d+0],M=s[d+1],C=s[d+2],b=s[d+3];if(l===0){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(l===1){e[t+0]=v,e[t+1]=M,e[t+2]=C,e[t+3]=b;return}if(g!==b||h!==v||p!==M||m!==C){let y=1-l;const P=h*v+p*M+m*C+g*b,O=P>=0?1:-1,A=1-P*P;if(A>Number.EPSILON){const R=Math.sqrt(A),B=Math.atan2(R,P*O);y=Math.sin(y*B)/R,l=Math.sin(l*B)/R}const F=l*O;if(h=h*y+v*F,p=p*y+M*F,m=m*y+C*F,g=g*y+b*F,y===1-l){const R=1/Math.sqrt(h*h+p*p+m*m+g*g);h*=R,p*=R,m*=R,g*=R}}e[t]=h,e[t+1]=p,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,s,d){const l=n[r],h=n[r+1],p=n[r+2],m=n[r+3],g=s[d],v=s[d+1],M=s[d+2],C=s[d+3];return e[t]=l*C+m*g+h*M-p*v,e[t+1]=h*C+m*v+p*g-l*M,e[t+2]=p*C+m*M+l*v-h*g,e[t+3]=m*C-l*g-h*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,d=e._order,l=Math.cos,h=Math.sin,p=l(n/2),m=l(r/2),g=l(s/2),v=h(n/2),M=h(r/2),C=h(s/2);switch(d){case"XYZ":this._x=v*m*g+p*M*C,this._y=p*M*g-v*m*C,this._z=p*m*C+v*M*g,this._w=p*m*g-v*M*C;break;case"YXZ":this._x=v*m*g+p*M*C,this._y=p*M*g-v*m*C,this._z=p*m*C-v*M*g,this._w=p*m*g+v*M*C;break;case"ZXY":this._x=v*m*g-p*M*C,this._y=p*M*g+v*m*C,this._z=p*m*C+v*M*g,this._w=p*m*g-v*M*C;break;case"ZYX":this._x=v*m*g-p*M*C,this._y=p*M*g+v*m*C,this._z=p*m*C-v*M*g,this._w=p*m*g+v*M*C;break;case"YZX":this._x=v*m*g+p*M*C,this._y=p*M*g+v*m*C,this._z=p*m*C-v*M*g,this._w=p*m*g-v*M*C;break;case"XZY":this._x=v*m*g-p*M*C,this._y=p*M*g-v*m*C,this._z=p*m*C+v*M*g,this._w=p*m*g+v*M*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],d=t[1],l=t[5],h=t[9],p=t[2],m=t[6],g=t[10],v=n+l+g;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(m-h)*M,this._y=(s-p)*M,this._z=(d-r)*M}else if(n>l&&n>g){const M=2*Math.sqrt(1+n-l-g);this._w=(m-h)/M,this._x=.25*M,this._y=(r+d)/M,this._z=(s+p)/M}else if(l>g){const M=2*Math.sqrt(1+l-n-g);this._w=(s-p)/M,this._x=(r+d)/M,this._y=.25*M,this._z=(h+m)/M}else{const M=2*Math.sqrt(1+g-n-l);this._w=(d-r)/M,this._x=(s+p)/M,this._y=(h+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,d=e._w,l=t._x,h=t._y,p=t._z,m=t._w;return this._x=n*m+d*l+r*p-s*h,this._y=r*m+d*h+s*l-n*p,this._z=s*m+d*p+n*h-r*l,this._w=d*m-n*l-r*h-s*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,d=this._w;let l=d*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=d,this._x=n,this._y=r,this._z=s,this;const h=1-l*l;if(h<=Number.EPSILON){const M=1-t;return this._w=M*d+t*this._w,this._x=M*n+t*this._x,this._y=M*r+t*this._y,this._z=M*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(h),m=Math.atan2(p,l),g=Math.sin((1-t)*m)/p,v=Math.sin(t*m)/p;return this._w=d*g+this._w*v,this._x=n*g+this._x*v,this._y=r*g+this._y*v,this._z=s*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,d=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*d,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*d,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*d,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,d=e.y,l=e.z,h=e.w,p=h*t+d*r-l*n,m=h*n+l*t-s*r,g=h*r+s*n-d*t,v=-s*t-d*n-l*r;return this.x=p*h+v*-s+m*-l-g*-d,this.y=m*h+v*-d+g*-s-p*-l,this.z=g*h+v*-l+p*-d-m*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,d=t.x,l=t.y,h=t.z;return this.x=r*h-s*l,this.y=s*d-n*h,this.z=n*l-r*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zs.copy(this).projectOnVector(e),this.sub(Zs)}reflect(e){return this.sub(Zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zs=new H,yc=new Ni;function ur(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Js(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const vh=new rn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),_h=new rn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),di=new H;function xh(a){return a.convertSRGBToLinear(),di.set(a.r,a.g,a.b).applyMatrix3(_h),a.setRGB(di.x,di.y,di.z)}function yh(a){return di.set(a.r,a.g,a.b).applyMatrix3(vh),a.setRGB(di.x,di.y,di.z).convertLinearToSRGB()}const bh={[Qr]:a=>a,[Un]:a=>a.convertSRGBToLinear(),[yu]:xh},Mh={[Qr]:a=>a,[Un]:a=>a.convertLinearToSRGB(),[yu]:yh},Jt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Qr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=bh[e],r=Mh[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let qi;class Mu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=eo("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let d=0;d<s.length;d++)s[d]=ur(s[d]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Su{constructor(e=null){this.isSource=!0,this.uuid=no(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let d=0,l=r.length;d<l;d++)r[d].isDataTexture?s.push(Qs(r[d].image)):s.push(Qs(r[d]))}else s=Qs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qs(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Mu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sh=0;class ln extends Fi{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Pn,r=Pn,s=bn,d=Zr,l=Cn,h=Ii,p=ln.DEFAULT_ANISOTROPY,m=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=no(),this.name="",this.source=new Su(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=d,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ri:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ri:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=_u;ln.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,d=e.elements;return this.x=d[0]*t+d[4]*n+d[8]*r+d[12]*s,this.y=d[1]*t+d[5]*n+d[9]*r+d[13]*s,this.z=d[2]*t+d[6]*n+d[10]*r+d[14]*s,this.w=d[3]*t+d[7]*n+d[11]*r+d[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const h=e.elements,p=h[0],m=h[4],g=h[8],v=h[1],M=h[5],C=h[9],b=h[2],y=h[6],P=h[10];if(Math.abs(m-v)<.01&&Math.abs(g-b)<.01&&Math.abs(C-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+b)<.1&&Math.abs(C+y)<.1&&Math.abs(p+M+P-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(p+1)/2,F=(M+1)/2,R=(P+1)/2,B=(m+v)/4,K=(g+b)/4,E=(C+y)/4;return A>F&&A>R?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=B/n,s=K/n):F>R?F<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(F),n=B/r,s=E/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=K/s,r=E/s),this.set(n,r,s,t),this}let O=Math.sqrt((y-C)*(y-C)+(g-b)*(g-b)+(v-m)*(v-m));return Math.abs(O)<.001&&(O=1),this.x=(y-C)/O,this.y=(g-b)/O,this.z=(v-m)/O,this.w=Math.acos((p+M+P-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ln extends Fi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new ln(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Su(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wu extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wh extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class io{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,d=-1/0,l=-1/0;for(let h=0,p=e.length;h<p;h+=3){const m=e[h],g=e[h+1],v=e[h+2];m<t&&(t=m),g<n&&(n=g),v<r&&(r=v),m>s&&(s=m),g>d&&(d=g),v>l&&(l=v)}return this.min.set(t,n,r),this.max.set(s,d,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,d=-1/0,l=-1/0;for(let h=0,p=e.count;h<p;h++){const m=e.getX(h),g=e.getY(h),v=e.getZ(h);m<t&&(t=m),g<n&&(n=g),v<r&&(r=v),m>s&&(s=m),g>d&&(d=g),v>l&&(l=v)}return this.min.set(t,n,r),this.max.set(s,d,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let d=0,l=s.count;d<l;d++)Si.fromBufferAttribute(s,d).applyMatrix4(e.matrixWorld),this.expandByPoint(Si)}else n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox),ea.applyMatrix4(e.matrixWorld),this.union(ea);const r=e.children;for(let s=0,d=r.length;s<d;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),No.subVectors(this.max,Nr),Xi.subVectors(e.a,Nr),Yi.subVectors(e.b,Nr),Ki.subVectors(e.c,Nr),oi.subVectors(Yi,Xi),si.subVectors(Ki,Yi),wi.subVectors(Xi,Ki);let t=[0,-oi.z,oi.y,0,-si.z,si.y,0,-wi.z,wi.y,oi.z,0,-oi.x,si.z,0,-si.x,wi.z,0,-wi.x,-oi.y,oi.x,0,-si.y,si.x,0,-wi.y,wi.x,0];return!ta(t,Xi,Yi,Ki,No)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,Xi,Yi,Ki,No))?!1:(zo.crossVectors(oi,si),t=[zo.x,zo.y,zo.z],ta(t,Xi,Yi,Ki,No))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new H,new H,new H,new H,new H,new H,new H,new H],Si=new H,ea=new io,Xi=new H,Yi=new H,Ki=new H,oi=new H,si=new H,wi=new H,Nr=new H,No=new H,zo=new H,Ei=new H;function ta(a,e,t,n,r){for(let s=0,d=a.length-3;s<=d;s+=3){Ei.fromArray(a,s);const l=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),h=e.dot(Ei),p=t.dot(Ei),m=n.dot(Ei);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>l)return!1}return!0}const Eh=new io,zr=new H,na=new H;class Ua{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,d=e.length;s<d;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(zr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(na)),this.expandByPoint(zr.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new H,ia=new H,Fo=new H,ai=new H,ra=new H,Uo=new H,oa=new H;class Th{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ia.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ia);const s=e.distanceTo(t)*.5,d=-this.direction.dot(Fo),l=ai.dot(this.direction),h=-ai.dot(Fo),p=ai.lengthSq(),m=Math.abs(1-d*d);let g,v,M,C;if(m>0)if(g=d*h-l,v=d*l-h,C=s*m,g>=0)if(v>=-C)if(v<=C){const b=1/m;g*=b,v*=b,M=g*(g+d*v+2*l)+v*(d*g+v+2*h)+p}else v=s,g=Math.max(0,-(d*v+l)),M=-g*g+v*(v+2*h)+p;else v=-s,g=Math.max(0,-(d*v+l)),M=-g*g+v*(v+2*h)+p;else v<=-C?(g=Math.max(0,-(-d*s+l)),v=g>0?-s:Math.min(Math.max(-s,-h),s),M=-g*g+v*(v+2*h)+p):v<=C?(g=0,v=Math.min(Math.max(-s,-h),s),M=v*(v+2*h)+p):(g=Math.max(0,-(d*s+l)),v=g>0?s:Math.min(Math.max(-s,-h),s),M=-g*g+v*(v+2*h)+p);else v=d>0?-s:s,g=Math.max(0,-(d*v+l)),M=-g*g+v*(v+2*h)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(ia).addScaledVector(Fo,v),M}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(r>s)return null;const d=Math.sqrt(s-r),l=n-d,h=n+d;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,d,l,h;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(n=(e.min.x-v.x)*p,r=(e.max.x-v.x)*p):(n=(e.max.x-v.x)*p,r=(e.min.x-v.x)*p),m>=0?(s=(e.min.y-v.y)*m,d=(e.max.y-v.y)*m):(s=(e.max.y-v.y)*m,d=(e.min.y-v.y)*m),n>d||s>r||((s>n||isNaN(n))&&(n=s),(d<r||isNaN(r))&&(r=d),g>=0?(l=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(l=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,r,s){ra.subVectors(t,e),Uo.subVectors(n,e),oa.crossVectors(ra,Uo);let d=this.direction.dot(oa),l;if(d>0){if(r)return null;l=1}else if(d<0)l=-1,d=-d;else return null;ai.subVectors(this.origin,e);const h=l*this.direction.dot(Uo.crossVectors(ai,Uo));if(h<0)return null;const p=l*this.direction.dot(ra.cross(ai));if(p<0||h+p>d)return null;const m=-l*ai.dot(oa);return m<0?null:this.at(m/d,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,d,l,h,p,m,g,v,M,C,b,y){const P=this.elements;return P[0]=e,P[4]=t,P[8]=n,P[12]=r,P[1]=s,P[5]=d,P[9]=l,P[13]=h,P[2]=p,P[6]=m,P[10]=g,P[14]=v,P[3]=M,P[7]=C,P[11]=b,P[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$i.setFromMatrixColumn(e,0).length(),s=1/$i.setFromMatrixColumn(e,1).length(),d=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*d,t[9]=n[9]*d,t[10]=n[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,d=Math.cos(n),l=Math.sin(n),h=Math.cos(r),p=Math.sin(r),m=Math.cos(s),g=Math.sin(s);if(e.order==="XYZ"){const v=d*m,M=d*g,C=l*m,b=l*g;t[0]=h*m,t[4]=-h*g,t[8]=p,t[1]=M+C*p,t[5]=v-b*p,t[9]=-l*h,t[2]=b-v*p,t[6]=C+M*p,t[10]=d*h}else if(e.order==="YXZ"){const v=h*m,M=h*g,C=p*m,b=p*g;t[0]=v+b*l,t[4]=C*l-M,t[8]=d*p,t[1]=d*g,t[5]=d*m,t[9]=-l,t[2]=M*l-C,t[6]=b+v*l,t[10]=d*h}else if(e.order==="ZXY"){const v=h*m,M=h*g,C=p*m,b=p*g;t[0]=v-b*l,t[4]=-d*g,t[8]=C+M*l,t[1]=M+C*l,t[5]=d*m,t[9]=b-v*l,t[2]=-d*p,t[6]=l,t[10]=d*h}else if(e.order==="ZYX"){const v=d*m,M=d*g,C=l*m,b=l*g;t[0]=h*m,t[4]=C*p-M,t[8]=v*p+b,t[1]=h*g,t[5]=b*p+v,t[9]=M*p-C,t[2]=-p,t[6]=l*h,t[10]=d*h}else if(e.order==="YZX"){const v=d*h,M=d*p,C=l*h,b=l*p;t[0]=h*m,t[4]=b-v*g,t[8]=C*g+M,t[1]=g,t[5]=d*m,t[9]=-l*m,t[2]=-p*m,t[6]=M*g+C,t[10]=v-b*g}else if(e.order==="XZY"){const v=d*h,M=d*p,C=l*h,b=l*p;t[0]=h*m,t[4]=-g,t[8]=p*m,t[1]=v*g+b,t[5]=d*m,t[9]=M*g-C,t[2]=C*g-M,t[6]=l*m,t[10]=b*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ah,e,Ph)}lookAt(e,t,n){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),li.crossVectors(n,dn),li.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),li.crossVectors(n,dn)),li.normalize(),ko.crossVectors(dn,li),r[0]=li.x,r[4]=ko.x,r[8]=dn.x,r[1]=li.y,r[5]=ko.y,r[9]=dn.y,r[2]=li.z,r[6]=ko.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,d=n[0],l=n[4],h=n[8],p=n[12],m=n[1],g=n[5],v=n[9],M=n[13],C=n[2],b=n[6],y=n[10],P=n[14],O=n[3],A=n[7],F=n[11],R=n[15],B=r[0],K=r[4],E=r[8],z=r[12],W=r[1],le=r[5],ue=r[9],J=r[13],j=r[2],V=r[6],ae=r[10],_e=r[14],ce=r[3],de=r[7],pe=r[11],Re=r[15];return s[0]=d*B+l*W+h*j+p*ce,s[4]=d*K+l*le+h*V+p*de,s[8]=d*E+l*ue+h*ae+p*pe,s[12]=d*z+l*J+h*_e+p*Re,s[1]=m*B+g*W+v*j+M*ce,s[5]=m*K+g*le+v*V+M*de,s[9]=m*E+g*ue+v*ae+M*pe,s[13]=m*z+g*J+v*_e+M*Re,s[2]=C*B+b*W+y*j+P*ce,s[6]=C*K+b*le+y*V+P*de,s[10]=C*E+b*ue+y*ae+P*pe,s[14]=C*z+b*J+y*_e+P*Re,s[3]=O*B+A*W+F*j+R*ce,s[7]=O*K+A*le+F*V+R*de,s[11]=O*E+A*ue+F*ae+R*pe,s[15]=O*z+A*J+F*_e+R*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],d=e[1],l=e[5],h=e[9],p=e[13],m=e[2],g=e[6],v=e[10],M=e[14],C=e[3],b=e[7],y=e[11],P=e[15];return C*(+s*h*g-r*p*g-s*l*v+n*p*v+r*l*M-n*h*M)+b*(+t*h*M-t*p*v+s*d*v-r*d*M+r*p*m-s*h*m)+y*(+t*p*g-t*l*M-s*d*g+n*d*M+s*l*m-n*p*m)+P*(-r*l*m-t*h*g+t*l*v+r*d*g-n*d*v+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],d=e[4],l=e[5],h=e[6],p=e[7],m=e[8],g=e[9],v=e[10],M=e[11],C=e[12],b=e[13],y=e[14],P=e[15],O=g*y*p-b*v*p+b*h*M-l*y*M-g*h*P+l*v*P,A=C*v*p-m*y*p-C*h*M+d*y*M+m*h*P-d*v*P,F=m*b*p-C*g*p+C*l*M-d*b*M-m*l*P+d*g*P,R=C*g*h-m*b*h-C*l*v+d*b*v+m*l*y-d*g*y,B=t*O+n*A+r*F+s*R;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/B;return e[0]=O*K,e[1]=(b*v*s-g*y*s-b*r*M+n*y*M+g*r*P-n*v*P)*K,e[2]=(l*y*s-b*h*s+b*r*p-n*y*p-l*r*P+n*h*P)*K,e[3]=(g*h*s-l*v*s-g*r*p+n*v*p+l*r*M-n*h*M)*K,e[4]=A*K,e[5]=(m*y*s-C*v*s+C*r*M-t*y*M-m*r*P+t*v*P)*K,e[6]=(C*h*s-d*y*s-C*r*p+t*y*p+d*r*P-t*h*P)*K,e[7]=(d*v*s-m*h*s+m*r*p-t*v*p-d*r*M+t*h*M)*K,e[8]=F*K,e[9]=(C*g*s-m*b*s-C*n*M+t*b*M+m*n*P-t*g*P)*K,e[10]=(d*b*s-C*l*s+C*n*p-t*b*p-d*n*P+t*l*P)*K,e[11]=(m*l*s-d*g*s-m*n*p+t*g*p+d*n*M-t*l*M)*K,e[12]=R*K,e[13]=(m*b*r-C*g*r+C*n*v-t*b*v-m*n*y+t*g*y)*K,e[14]=(C*l*r-d*b*r-C*n*h+t*b*h+d*n*y-t*l*y)*K,e[15]=(d*g*r-m*l*r+m*n*h-t*g*h-d*n*v+t*l*v)*K,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,d=e.x,l=e.y,h=e.z,p=s*d,m=s*l;return this.set(p*d+n,p*l-r*h,p*h+r*l,0,p*l+r*h,m*l+n,m*h-r*d,0,p*h-r*l,m*h+r*d,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,d){return this.set(1,n,s,0,e,1,d,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,d=t._y,l=t._z,h=t._w,p=s+s,m=d+d,g=l+l,v=s*p,M=s*m,C=s*g,b=d*m,y=d*g,P=l*g,O=h*p,A=h*m,F=h*g,R=n.x,B=n.y,K=n.z;return r[0]=(1-(b+P))*R,r[1]=(M+F)*R,r[2]=(C-A)*R,r[3]=0,r[4]=(M-F)*B,r[5]=(1-(v+P))*B,r[6]=(y+O)*B,r[7]=0,r[8]=(C+A)*K,r[9]=(y-O)*K,r[10]=(1-(v+b))*K,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=$i.set(r[0],r[1],r[2]).length();const d=$i.set(r[4],r[5],r[6]).length(),l=$i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const p=1/s,m=1/d,g=1/l;return wn.elements[0]*=p,wn.elements[1]*=p,wn.elements[2]*=p,wn.elements[4]*=m,wn.elements[5]*=m,wn.elements[6]*=m,wn.elements[8]*=g,wn.elements[9]*=g,wn.elements[10]*=g,t.setFromRotationMatrix(wn),n.x=s,n.y=d,n.z=l,this}makePerspective(e,t,n,r,s,d){const l=this.elements,h=2*s/(t-e),p=2*s/(n-r),m=(t+e)/(t-e),g=(n+r)/(n-r),v=-(d+s)/(d-s),M=-2*d*s/(d-s);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=p,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,d){const l=this.elements,h=1/(t-e),p=1/(n-r),m=1/(d-s),g=(t+e)*h,v=(n+r)*p,M=(d+s)*m;return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-g,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=-2*m,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new H,wn=new Rt,Ah=new H(0,0,0),Ph=new H(1,1,1),li=new H,ko=new H,dn=new H,bc=new Rt,Mc=new Ni;class ls{constructor(e=0,t=0,n=0,r=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],d=r[4],l=r[8],h=r[1],p=r[5],m=r[9],g=r[2],v=r[6],M=r[10];switch(t){case"XYZ":this._y=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-d,s)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-nn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class Eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ch=0;const Sc=new H,Zi=new Ni,Kn=new Rt,Bo=new H,Fr=new H,Dh=new H,Lh=new Ni,wc=new H(1,0,0),Ec=new H(0,1,0),Tc=new H(0,0,1),Rh={type:"added"},Ac={type:"removed"};class Wt extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new H,t=new ls,n=new Ni,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function d(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new rn}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(wc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Fr,Bo,this.up):Kn.lookAt(Bo,Fr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),Zi.setFromRotationMatrix(Kn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ac)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ac)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const d=this.children[n].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const d=this.children[r].getObjectsByProperty(e,t);d.length>0&&(n=n.concat(d))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,Dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,Lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,d=r.length;s<d;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const g=h[p];s(e.shapes,g)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,p=this.material.length;h<p;h++)l.push(s(e.materials,this.material[h]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(s(e.animations,h))}}if(t){const l=d(e.geometries),h=d(e.materials),p=d(e.textures),m=d(e.images),g=d(e.shapes),v=d(e.skeletons),M=d(e.animations),C=d(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),p.length>0&&(n.textures=p),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),M.length>0&&(n.animations=M),C.length>0&&(n.nodes=C)}return n.object=r,n;function d(l){const h=[];for(const p in l){const m=l[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new H(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new H,$n=new H,sa=new H,Zn=new H,Ji=new H,Qi=new H,Pc=new H,aa=new H,la=new H,ca=new H;class Qn{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),En.subVectors(e,t),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){En.subVectors(r,t),$n.subVectors(n,t),sa.subVectors(e,t);const d=En.dot(En),l=En.dot($n),h=En.dot(sa),p=$n.dot($n),m=$n.dot(sa),g=d*p-l*l;if(g===0)return s.set(-2,-1,-1);const v=1/g,M=(p*h-l*m)*v,C=(d*m-l*h)*v;return s.set(1-M-C,C,M)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,n,r,s,d,l,h){return this.getBarycoord(e,t,n,r,Zn),h.set(0,0),h.addScaledVector(s,Zn.x),h.addScaledVector(d,Zn.y),h.addScaledVector(l,Zn.z),h}static isFrontFacing(e,t,n,r){return En.subVectors(n,t),$n.subVectors(e,t),En.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Qn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let d,l;Ji.subVectors(r,n),Qi.subVectors(s,n),aa.subVectors(e,n);const h=Ji.dot(aa),p=Qi.dot(aa);if(h<=0&&p<=0)return t.copy(n);la.subVectors(e,r);const m=Ji.dot(la),g=Qi.dot(la);if(m>=0&&g<=m)return t.copy(r);const v=h*g-m*p;if(v<=0&&h>=0&&m<=0)return d=h/(h-m),t.copy(n).addScaledVector(Ji,d);ca.subVectors(e,s);const M=Ji.dot(ca),C=Qi.dot(ca);if(C>=0&&M<=C)return t.copy(s);const b=M*p-h*C;if(b<=0&&p>=0&&C<=0)return l=p/(p-C),t.copy(n).addScaledVector(Qi,l);const y=m*C-M*g;if(y<=0&&g-m>=0&&M-C>=0)return Pc.subVectors(s,r),l=(g-m)/(g-m+(M-C)),t.copy(r).addScaledVector(Pc,l);const P=1/(y+b+v);return d=b*P,l=v*P,t.copy(n).addScaledVector(Ji,d).addScaledVector(Qi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ih=0;class gr extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=no(),this.name="",this.type="Material",this.blending=lr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const d=[];for(const l in s){const h=s[l];delete h.metadata,d.push(h)}return d}if(t){const s=r(e.textures),d=r(e.images);s.length>0&&(n.textures=s),d.length>0&&(n.images=d)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Go={h:0,s:0,l:0};function ua(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Jt.workingColorSpace){if(e=mh(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,d=2*n-s;this.r=ua(d,s,e+1/3),this.g=ua(d,s,e),this.b=ua(d,s,e-1/3)}return Jt.toWorkingColorSpace(this,r),this}setStyle(e,t=Un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const d=r[1],l=r[2];switch(d){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Jt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Jt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const h=parseFloat(s[1])/360,p=parseFloat(s[2])/100,m=parseFloat(s[3])/100;return n(s[4]),this.setHSL(h,p,m,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],d=s.length;if(d===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Jt.toWorkingColorSpace(this,t),this;if(d===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Jt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const n=Tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Jt.fromWorkingColorSpace(Xt.copy(this),e),nn(Xt.r*255,0,255)<<16^nn(Xt.g*255,0,255)<<8^nn(Xt.b*255,0,255)<<0}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,r=Xt.g,s=Xt.b,d=Math.max(n,r,s),l=Math.min(n,r,s);let h,p;const m=(l+d)/2;if(l===d)h=0,p=0;else{const g=d-l;switch(p=m<=.5?g/(d+l):g/(2-d-l),d){case n:h=(r-s)/g+(r<s?6:0);break;case r:h=(s-n)/g+2;break;case s:h=(n-r)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Un){Jt.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,r=Xt.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(Tn),Tn.h+=e,Tn.s+=t,Tn.l+=n,this.setHSL(Tn.h,Tn.s,Tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(Go);const n=Ks(Tn.h,Go.h,t),r=Ks(Tn.s,Go.s,t),s=Ks(Tn.l,Go.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ze;Ze.NAMES=Tu;class zi extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new H,Vo=new ke;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Au extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pu extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Oh=0;const yn=new Rt,da=new Wt,er=new H,fn=new io,Ur=new io,Ft=new H;class In extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bu(e)?Pu:Au)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,d=t.length;s<d;s++){const l=t[s];Ur.setFromBufferAttribute(l),this.morphTargetsRelative?(Ft.addVectors(fn.min,Ur.min),fn.expandByPoint(Ft),Ft.addVectors(fn.max,Ur.max),fn.expandByPoint(Ft)):(fn.expandByPoint(Ur.min),fn.expandByPoint(Ur.max))}fn.getCenter(n);let r=0;for(let s=0,d=e.count;s<d;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let s=0,d=t.length;s<d;s++){const l=t[s],h=this.morphTargetsRelative;for(let p=0,m=l.count;p<m;p++)Ft.fromBufferAttribute(l,p),h&&(er.fromBufferAttribute(e,p),Ft.add(er)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,d=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*l),4));const h=this.getAttribute("tangent").array,p=[],m=[];for(let W=0;W<l;W++)p[W]=new H,m[W]=new H;const g=new H,v=new H,M=new H,C=new ke,b=new ke,y=new ke,P=new H,O=new H;function A(W,le,ue){g.fromArray(r,W*3),v.fromArray(r,le*3),M.fromArray(r,ue*3),C.fromArray(d,W*2),b.fromArray(d,le*2),y.fromArray(d,ue*2),v.sub(g),M.sub(g),b.sub(C),y.sub(C);const J=1/(b.x*y.y-y.x*b.y);isFinite(J)&&(P.copy(v).multiplyScalar(y.y).addScaledVector(M,-b.y).multiplyScalar(J),O.copy(M).multiplyScalar(b.x).addScaledVector(v,-y.x).multiplyScalar(J),p[W].add(P),p[le].add(P),p[ue].add(P),m[W].add(O),m[le].add(O),m[ue].add(O))}let F=this.groups;F.length===0&&(F=[{start:0,count:n.length}]);for(let W=0,le=F.length;W<le;++W){const ue=F[W],J=ue.start,j=ue.count;for(let V=J,ae=J+j;V<ae;V+=3)A(n[V+0],n[V+1],n[V+2])}const R=new H,B=new H,K=new H,E=new H;function z(W){K.fromArray(s,W*3),E.copy(K);const le=p[W];R.copy(le),R.sub(K.multiplyScalar(K.dot(le))).normalize(),B.crossVectors(E,le);const J=B.dot(m[W])<0?-1:1;h[W*4]=R.x,h[W*4+1]=R.y,h[W*4+2]=R.z,h[W*4+3]=J}for(let W=0,le=F.length;W<le;++W){const ue=F[W],J=ue.start,j=ue.count;for(let V=J,ae=J+j;V<ae;V+=3)z(n[V+0]),z(n[V+1]),z(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,M=n.count;v<M;v++)n.setXYZ(v,0,0,0);const r=new H,s=new H,d=new H,l=new H,h=new H,p=new H,m=new H,g=new H;if(e)for(let v=0,M=e.count;v<M;v+=3){const C=e.getX(v+0),b=e.getX(v+1),y=e.getX(v+2);r.fromBufferAttribute(t,C),s.fromBufferAttribute(t,b),d.fromBufferAttribute(t,y),m.subVectors(d,s),g.subVectors(r,s),m.cross(g),l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),p.fromBufferAttribute(n,y),l.add(m),h.add(m),p.add(m),n.setXYZ(C,l.x,l.y,l.z),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,M=t.count;v<M;v+=3)r.fromBufferAttribute(t,v+0),s.fromBufferAttribute(t,v+1),d.fromBufferAttribute(t,v+2),m.subVectors(d,s),g.subVectors(r,s),m.cross(g),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(l,h){const p=l.array,m=l.itemSize,g=l.normalized,v=new p.constructor(h.length*m);let M=0,C=0;for(let b=0,y=h.length;b<y;b++){l.isInterleavedBufferAttribute?M=h[b]*l.data.stride+l.offset:M=h[b]*m;for(let P=0;P<m;P++)v[C++]=p[M++]}return new Rn(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],p=e(h,n);t.setAttribute(l,p)}const s=this.morphAttributes;for(const l in s){const h=[],p=s[l];for(let m=0,g=p.length;m<g;m++){const v=p[m],M=e(v,n);h.push(M)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let l=0,h=d.length;l<h;l++){const p=d[l];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const p=n[h];e.data.attributes[h]=p.toJSON(e.data)}const r={};let s=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let g=0,v=p.length;g<v;g++){const M=p[g];m.push(M.toJSON(e.data))}m.length>0&&(r[h]=m,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const m=r[p];this.setAttribute(p,m.clone(t))}const s=e.morphAttributes;for(const p in s){const m=[],g=s[p];for(let v=0,M=g.length;v<M;v++)m.push(g[v].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,m=d.length;p<m;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new Rt,Fn=new Th,Ho=new Ua,Dc=new H,kr=new H,Br=new H,Gr=new H,fa=new H,Wo=new H,jo=new ke,qo=new ke,Xo=new ke,ha=new H,Yo=new H;class Dn extends Wt{constructor(e=new In,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,d=r.length;s<d;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,d=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Wo.set(0,0,0);for(let h=0,p=s.length;h<p;h++){const m=l[h],g=s[h];m!==0&&(fa.fromBufferAttribute(g,e),d?Wo.addScaledVector(fa,m):Wo.addScaledVector(fa.sub(t),m))}t.add(Wo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Fn.copy(e.ray).recast(e.near),Ho.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(Ho,Dc)===null||Fn.origin.distanceToSquared(Dc)>(e.far-e.near)**2))||(Cc.copy(s).invert(),Fn.copy(e.ray).applyMatrix4(Cc),n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1))return;let d;const l=n.index,h=n.attributes.position,p=n.attributes.uv,m=n.attributes.uv2,g=n.groups,v=n.drawRange;if(l!==null)if(Array.isArray(r))for(let M=0,C=g.length;M<C;M++){const b=g[M],y=r[b.materialIndex],P=Math.max(b.start,v.start),O=Math.min(l.count,Math.min(b.start+b.count,v.start+v.count));for(let A=P,F=O;A<F;A+=3){const R=l.getX(A),B=l.getX(A+1),K=l.getX(A+2);d=Ko(this,y,e,Fn,p,m,R,B,K),d&&(d.faceIndex=Math.floor(A/3),d.face.materialIndex=b.materialIndex,t.push(d))}}else{const M=Math.max(0,v.start),C=Math.min(l.count,v.start+v.count);for(let b=M,y=C;b<y;b+=3){const P=l.getX(b),O=l.getX(b+1),A=l.getX(b+2);d=Ko(this,r,e,Fn,p,m,P,O,A),d&&(d.faceIndex=Math.floor(b/3),t.push(d))}}else if(h!==void 0)if(Array.isArray(r))for(let M=0,C=g.length;M<C;M++){const b=g[M],y=r[b.materialIndex],P=Math.max(b.start,v.start),O=Math.min(h.count,Math.min(b.start+b.count,v.start+v.count));for(let A=P,F=O;A<F;A+=3){const R=A,B=A+1,K=A+2;d=Ko(this,y,e,Fn,p,m,R,B,K),d&&(d.faceIndex=Math.floor(A/3),d.face.materialIndex=b.materialIndex,t.push(d))}}else{const M=Math.max(0,v.start),C=Math.min(h.count,v.start+v.count);for(let b=M,y=C;b<y;b+=3){const P=b,O=b+1,A=b+2;d=Ko(this,r,e,Fn,p,m,P,O,A),d&&(d.faceIndex=Math.floor(b/3),t.push(d))}}}}function Nh(a,e,t,n,r,s,d,l){let h;if(e.side===gn?h=n.intersectTriangle(d,s,r,!0,l):h=n.intersectTriangle(r,s,d,e.side===pi,l),h===null)return null;Yo.copy(l),Yo.applyMatrix4(a.matrixWorld);const p=t.ray.origin.distanceTo(Yo);return p<t.near||p>t.far?null:{distance:p,point:Yo.clone(),object:a}}function Ko(a,e,t,n,r,s,d,l,h){a.getVertexPosition(d,kr),a.getVertexPosition(l,Br),a.getVertexPosition(h,Gr);const p=Nh(a,e,t,n,kr,Br,Gr,ha);if(p){r&&(jo.fromBufferAttribute(r,d),qo.fromBufferAttribute(r,l),Xo.fromBufferAttribute(r,h),p.uv=Qn.getUV(ha,kr,Br,Gr,jo,qo,Xo,new ke)),s&&(jo.fromBufferAttribute(s,d),qo.fromBufferAttribute(s,l),Xo.fromBufferAttribute(s,h),p.uv2=Qn.getUV(ha,kr,Br,Gr,jo,qo,Xo,new ke));const m={a:d,b:l,c:h,normal:new H,materialIndex:0};Qn.getNormal(kr,Br,Gr,m.normal),p.face=m}return p}class ro extends In{constructor(e=1,t=1,n=1,r=1,s=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:d};const l=this;r=Math.floor(r),s=Math.floor(s),d=Math.floor(d);const h=[],p=[],m=[],g=[];let v=0,M=0;C("z","y","x",-1,-1,n,t,e,d,s,0),C("z","y","x",1,-1,n,t,-e,d,s,1),C("x","z","y",1,1,e,n,t,r,d,2),C("x","z","y",1,-1,e,n,-t,r,d,3),C("x","y","z",1,-1,e,t,n,r,s,4),C("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new on(p,3)),this.setAttribute("normal",new on(m,3)),this.setAttribute("uv",new on(g,2));function C(b,y,P,O,A,F,R,B,K,E,z){const W=F/K,le=R/E,ue=F/2,J=R/2,j=B/2,V=K+1,ae=E+1;let _e=0,ce=0;const de=new H;for(let pe=0;pe<ae;pe++){const Re=pe*le-J;for(let ee=0;ee<V;ee++){const fe=ee*W-ue;de[b]=fe*O,de[y]=Re*A,de[P]=j,p.push(de.x,de.y,de.z),de[b]=0,de[y]=0,de[P]=B>0?1:-1,m.push(de.x,de.y,de.z),g.push(ee/K),g.push(1-pe/E),_e+=1}}for(let pe=0;pe<E;pe++)for(let Re=0;Re<K;Re++){const ee=v+Re+V*pe,fe=v+Re+V*(pe+1),te=v+(Re+1)+V*(pe+1),Z=v+(Re+1)+V*pe;h.push(ee,fe,Z),h.push(fe,te,Z),ce+=6}l.addGroup(M,ce,z),M+=ce,v+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const r=a[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qt(a){const e={};for(let t=0;t<a.length;t++){const n=pr(a[t]);for(const r in n)e[r]=n[r]}return e}function zh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Cu(a){return a.getRenderTarget()===null&&a.outputEncoding===mt?Un:Qr}const os={clone:pr,merge:Qt};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const d=this.uniforms[r].value;d&&d.isTexture?t.uniforms[r]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[r]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[r]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[r]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[r]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[r]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[r]={type:"m4",value:d.toArray()}:t.uniforms[r]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Du extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends Du{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_c*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,p=d.fullHeight;s+=d.offsetX*r/h,t-=d.offsetY*n/p,r*=d.width/h,n*=d.height/p}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class kh extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new pn(tr,nr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new pn(tr,nr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const d=new pn(tr,nr,e,t);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(0,1,0),this.add(d);const l=new pn(tr,nr,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(0,-1,0),this.add(l);const h=new pn(tr,nr,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,1),this.add(h);const p=new pn(tr,nr,e,t);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,-1),this.add(p)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,d,l,h,p]=this.children,m=e.getRenderTarget(),g=e.toneMapping,v=e.xr.enabled;e.toneMapping=Gn,e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,d),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5),e.render(t,p),e.setRenderTarget(m),e.toneMapping=g,e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Lu extends ln{constructor(e,t,n,r,s,d,l,h,p,m){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,r,s,d,l,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bh extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Lu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ro(5,5,5),s=new mn({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:hi});s.uniforms.tEquirect.value=t;const d=new Dn(r,s),l=t.minFilter;return t.minFilter===Zr&&(t.minFilter=bn),new kh(1,10,this).update(e,d),t.minFilter=l,d.geometry.dispose(),d.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,n,r);e.setRenderTarget(s)}}const pa=new H,Gh=new H,Vh=new rn;class Ti{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=pa.subVectors(n,t).cross(Gh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vh.getNormalMatrix(e),r=this.coplanarPoint(pa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Ua,$o=new H;class ka{constructor(e=new Ti,t=new Ti,n=new Ti,r=new Ti,s=new Ti,d=new Ti){this.planes=[e,t,n,r,s,d]}set(e,t,n,r,s,d){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(d),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],d=n[2],l=n[3],h=n[4],p=n[5],m=n[6],g=n[7],v=n[8],M=n[9],C=n[10],b=n[11],y=n[12],P=n[13],O=n[14],A=n[15];return t[0].setComponents(l-r,g-h,b-v,A-y).normalize(),t[1].setComponents(l+r,g+h,b+v,A+y).normalize(),t[2].setComponents(l+s,g+p,b+M,A+P).normalize(),t[3].setComponents(l-s,g-p,b-M,A-P).normalize(),t[4].setComponents(l-d,g-m,b-C,A-O).normalize(),t[5].setComponents(l+d,g+m,b+C,A+O).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($o.x=r.normal.x>0?e.max.x:e.min.x,$o.y=r.normal.y>0?e.max.y:e.min.y,$o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ru(){let a=null,e=!1,t=null,n=null;function r(s,d){t(s,d),n=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Hh(a,e){const t=e.isWebGL2,n=new WeakMap;function r(p,m){const g=p.array,v=p.usage,M=a.createBuffer();a.bindBuffer(m,M),a.bufferData(m,g,v),p.onUploadCallback();let C;if(g instanceof Float32Array)C=5126;else if(g instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)C=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else C=5123;else if(g instanceof Int16Array)C=5122;else if(g instanceof Uint32Array)C=5125;else if(g instanceof Int32Array)C=5124;else if(g instanceof Int8Array)C=5120;else if(g instanceof Uint8Array)C=5121;else if(g instanceof Uint8ClampedArray)C=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:C,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version}}function s(p,m,g){const v=m.array,M=m.updateRange;a.bindBuffer(g,p),M.count===-1?a.bufferSubData(g,0,v):(t?a.bufferSubData(g,M.offset*v.BYTES_PER_ELEMENT,v,M.offset,M.count):a.bufferSubData(g,M.offset*v.BYTES_PER_ELEMENT,v.subarray(M.offset,M.offset+M.count)),M.count=-1),m.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),n.get(p)}function l(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=n.get(p);m&&(a.deleteBuffer(m.buffer),n.delete(p))}function h(p,m){if(p.isGLBufferAttribute){const v=n.get(p);(!v||v.version<p.version)&&n.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const g=n.get(p);g===void 0?n.set(p,r(p,m)):g.version<p.version&&(s(g.buffer,p,m),g.version=p.version)}return{get:d,remove:l,update:h}}class Ba extends In{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,d=t/2,l=Math.floor(n),h=Math.floor(r),p=l+1,m=h+1,g=e/l,v=t/h,M=[],C=[],b=[],y=[];for(let P=0;P<m;P++){const O=P*v-d;for(let A=0;A<p;A++){const F=A*g-s;C.push(F,-O,0),b.push(0,0,1),y.push(A/l),y.push(1-P/h)}}for(let P=0;P<h;P++)for(let O=0;O<l;O++){const A=O+p*P,F=O+p*(P+1),R=O+1+p*(P+1),B=O+1+p*P;M.push(A,F,B),M.push(F,R,B)}this.setIndex(M),this.setAttribute("position",new on(C,3)),this.setAttribute("normal",new on(b,3)),this.setAttribute("uv",new on(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$h="vec3 transformed = vec3( position );",Zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Qh=`#ifdef USE_IRIDESCENCE
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
#endif`,ep=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cp=`#define PI 3.141592653589793
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
}`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dp=`vec3 transformedNormal = objectNormal;
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
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_p=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
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
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
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
#endif`,Ap=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#endif`,Ip=`#if defined( USE_ENVMAP )
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,kp=`struct PhysicalMaterial {
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
}`,Bp=`
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,em=`#ifdef USE_MORPHNORMALS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,rm=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lm=`#ifdef USE_NORMALMAP
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
#endif`,cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wm=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,zm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Fm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Um=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,km=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Bm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ym=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eg=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,ag=`#define MATCAP
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
}`,lg=`#define NORMAL
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
}`,cg=`#define NORMAL
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
}`,ug=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,hg=`#define STANDARD
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
}`,pg=`#define TOON
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
}`,mg=`#define TOON
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
}`,gg=`uniform float size;
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
}`,vg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,yg=`uniform float rotation;
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
}`,bg=`uniform vec3 diffuse;
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
}`,et={alphamap_fragment:Wh,alphamap_pars_fragment:jh,alphatest_fragment:qh,alphatest_pars_fragment:Xh,aomap_fragment:Yh,aomap_pars_fragment:Kh,begin_vertex:$h,beginnormal_vertex:Zh,bsdfs:Jh,iridescence_fragment:Qh,bumpmap_pars_fragment:ep,clipping_planes_fragment:tp,clipping_planes_pars_fragment:np,clipping_planes_pars_vertex:ip,clipping_planes_vertex:rp,color_fragment:op,color_pars_fragment:sp,color_pars_vertex:ap,color_vertex:lp,common:cp,cube_uv_reflection_fragment:up,defaultnormal_vertex:dp,displacementmap_pars_vertex:fp,displacementmap_vertex:hp,emissivemap_fragment:pp,emissivemap_pars_fragment:mp,encodings_fragment:gp,encodings_pars_fragment:vp,envmap_fragment:_p,envmap_common_pars_fragment:xp,envmap_pars_fragment:yp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Ip,envmap_vertex:Mp,fog_vertex:Sp,fog_pars_vertex:wp,fog_fragment:Ep,fog_pars_fragment:Tp,gradientmap_pars_fragment:Ap,lightmap_fragment:Pp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Rp,lights_toon_fragment:Op,lights_toon_pars_fragment:Np,lights_phong_fragment:zp,lights_phong_pars_fragment:Fp,lights_physical_fragment:Up,lights_physical_pars_fragment:kp,lights_fragment_begin:Bp,lights_fragment_maps:Gp,lights_fragment_end:Vp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:jp,logdepthbuf_vertex:qp,map_fragment:Xp,map_pars_fragment:Yp,map_particle_fragment:Kp,map_particle_pars_fragment:$p,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Jp,morphcolor_vertex:Qp,morphnormal_vertex:em,morphtarget_pars_vertex:tm,morphtarget_vertex:nm,normal_fragment_begin:im,normal_fragment_maps:rm,normal_pars_fragment:om,normal_pars_vertex:sm,normal_vertex:am,normalmap_pars_fragment:lm,clearcoat_normal_fragment_begin:cm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:dm,iridescence_pars_fragment:fm,output_fragment:hm,packing:pm,premultiplied_alpha_fragment:mm,project_vertex:gm,dithering_fragment:vm,dithering_pars_fragment:_m,roughnessmap_fragment:xm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:Mm,shadowmap_vertex:Sm,shadowmask_pars_fragment:wm,skinbase_vertex:Em,skinning_pars_vertex:Tm,skinning_vertex:Am,skinnormal_vertex:Pm,specularmap_fragment:Cm,specularmap_pars_fragment:Dm,tonemapping_fragment:Lm,tonemapping_pars_fragment:Rm,transmission_fragment:Im,transmission_pars_fragment:Om,uv_pars_fragment:Nm,uv_pars_vertex:zm,uv_vertex:Fm,uv2_pars_fragment:Um,uv2_pars_vertex:km,uv2_vertex:Bm,worldpos_vertex:Gm,background_vert:Vm,background_frag:Hm,backgroundCube_vert:Wm,backgroundCube_frag:jm,cube_vert:qm,cube_frag:Xm,depth_vert:Ym,depth_frag:Km,distanceRGBA_vert:$m,distanceRGBA_frag:Zm,equirect_vert:Jm,equirect_frag:Qm,linedashed_vert:eg,linedashed_frag:tg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:rg,meshlambert_frag:og,meshmatcap_vert:sg,meshmatcap_frag:ag,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:ug,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:hg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:vg,shadow_vert:_g,shadow_frag:xg,sprite_vert:yg,sprite_frag:bg},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new rn},uv2Transform:{value:new rn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rn}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rn}}},kn={basic:{uniforms:Qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Qt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Qt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Qt([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Qt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Qt([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Qt([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new rn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Qt([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Qt([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};kn.physical={uniforms:Qt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ke(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Zo={r:0,b:0,g:0};function Mg(a,e,t,n,r,s,d){const l=new Ze(0);let h=s===!0?0:1,p,m,g=null,v=0,M=null;function C(y,P){let O=!1,A=P.isScene===!0?P.background:null;A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A));const F=a.xr,R=F.getSession&&F.getSession();R&&R.environmentBlendMode==="additive"&&(A=null),A===null?b(l,h):A&&A.isColor&&(b(A,1),O=!0),(a.autoClear||O)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),A&&(A.isCubeTexture||A.mapping===as)?(m===void 0&&(m=new Dn(new ro(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:pr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,K,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=A,m.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=A.encoding!==mt,(g!==A||v!==A.version||M!==a.toneMapping)&&(m.material.needsUpdate=!0,g=A,v=A.version,M=a.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new Dn(new Ba(2,2),new mn({name:"BackgroundMaterial",uniforms:pr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=A.encoding!==mt,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||v!==A.version||M!==a.toneMapping)&&(p.material.needsUpdate=!0,g=A,v=A.version,M=a.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null))}function b(y,P){y.getRGB(Zo,Cu(a)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,P,d)}return{getClearColor:function(){return l},setClearColor:function(y,P=1){l.set(y),h=P,b(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,b(l,h)},render:C}}function Sg(a,e,t,n){const r=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),d=n.isWebGL2||s!==null,l={},h=y(null);let p=h,m=!1;function g(j,V,ae,_e,ce){let de=!1;if(d){const pe=b(_e,ae,V);p!==pe&&(p=pe,M(p.object)),de=P(j,_e,ae,ce),de&&O(j,_e,ae,ce)}else{const pe=V.wireframe===!0;(p.geometry!==_e.id||p.program!==ae.id||p.wireframe!==pe)&&(p.geometry=_e.id,p.program=ae.id,p.wireframe=pe,de=!0)}ce!==null&&t.update(ce,34963),(de||m)&&(m=!1,E(j,V,ae,_e),ce!==null&&a.bindBuffer(34963,t.get(ce).buffer))}function v(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function M(j){return n.isWebGL2?a.bindVertexArray(j):s.bindVertexArrayOES(j)}function C(j){return n.isWebGL2?a.deleteVertexArray(j):s.deleteVertexArrayOES(j)}function b(j,V,ae){const _e=ae.wireframe===!0;let ce=l[j.id];ce===void 0&&(ce={},l[j.id]=ce);let de=ce[V.id];de===void 0&&(de={},ce[V.id]=de);let pe=de[_e];return pe===void 0&&(pe=y(v()),de[_e]=pe),pe}function y(j){const V=[],ae=[],_e=[];for(let ce=0;ce<r;ce++)V[ce]=0,ae[ce]=0,_e[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ae,attributeDivisors:_e,object:j,attributes:{},index:null}}function P(j,V,ae,_e){const ce=p.attributes,de=V.attributes;let pe=0;const Re=ae.getAttributes();for(const ee in Re)if(Re[ee].location>=0){const te=ce[ee];let Z=de[ee];if(Z===void 0&&(ee==="instanceMatrix"&&j.instanceMatrix&&(Z=j.instanceMatrix),ee==="instanceColor"&&j.instanceColor&&(Z=j.instanceColor)),te===void 0||te.attribute!==Z||Z&&te.data!==Z.data)return!0;pe++}return p.attributesNum!==pe||p.index!==_e}function O(j,V,ae,_e){const ce={},de=V.attributes;let pe=0;const Re=ae.getAttributes();for(const ee in Re)if(Re[ee].location>=0){let te=de[ee];te===void 0&&(ee==="instanceMatrix"&&j.instanceMatrix&&(te=j.instanceMatrix),ee==="instanceColor"&&j.instanceColor&&(te=j.instanceColor));const Z={};Z.attribute=te,te&&te.data&&(Z.data=te.data),ce[ee]=Z,pe++}p.attributes=ce,p.attributesNum=pe,p.index=_e}function A(){const j=p.newAttributes;for(let V=0,ae=j.length;V<ae;V++)j[V]=0}function F(j){R(j,0)}function R(j,V){const ae=p.newAttributes,_e=p.enabledAttributes,ce=p.attributeDivisors;ae[j]=1,_e[j]===0&&(a.enableVertexAttribArray(j),_e[j]=1),ce[j]!==V&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,V),ce[j]=V)}function B(){const j=p.newAttributes,V=p.enabledAttributes;for(let ae=0,_e=V.length;ae<_e;ae++)V[ae]!==j[ae]&&(a.disableVertexAttribArray(ae),V[ae]=0)}function K(j,V,ae,_e,ce,de){n.isWebGL2===!0&&(ae===5124||ae===5125)?a.vertexAttribIPointer(j,V,ae,ce,de):a.vertexAttribPointer(j,V,ae,_e,ce,de)}function E(j,V,ae,_e){if(n.isWebGL2===!1&&(j.isInstancedMesh||_e.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const ce=_e.attributes,de=ae.getAttributes(),pe=V.defaultAttributeValues;for(const Re in de){const ee=de[Re];if(ee.location>=0){let fe=ce[Re];if(fe===void 0&&(Re==="instanceMatrix"&&j.instanceMatrix&&(fe=j.instanceMatrix),Re==="instanceColor"&&j.instanceColor&&(fe=j.instanceColor)),fe!==void 0){const te=fe.normalized,Z=fe.itemSize,Pe=t.get(fe);if(Pe===void 0)continue;const De=Pe.buffer,Le=Pe.type,Ce=Pe.bytesPerElement;if(fe.isInterleavedBufferAttribute){const Be=fe.data,He=Be.stride,Ye=fe.offset;if(Be.isInstancedInterleavedBuffer){for(let rt=0;rt<ee.locationSize;rt++)R(ee.location+rt,Be.meshPerAttribute);j.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let rt=0;rt<ee.locationSize;rt++)F(ee.location+rt);a.bindBuffer(34962,De);for(let rt=0;rt<ee.locationSize;rt++)K(ee.location+rt,Z/ee.locationSize,Le,te,He*Ce,(Ye+Z/ee.locationSize*rt)*Ce)}else{if(fe.isInstancedBufferAttribute){for(let Be=0;Be<ee.locationSize;Be++)R(ee.location+Be,fe.meshPerAttribute);j.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<ee.locationSize;Be++)F(ee.location+Be);a.bindBuffer(34962,De);for(let Be=0;Be<ee.locationSize;Be++)K(ee.location+Be,Z/ee.locationSize,Le,te,Z*Ce,Z/ee.locationSize*Be*Ce)}}else if(pe!==void 0){const te=pe[Re];if(te!==void 0)switch(te.length){case 2:a.vertexAttrib2fv(ee.location,te);break;case 3:a.vertexAttrib3fv(ee.location,te);break;case 4:a.vertexAttrib4fv(ee.location,te);break;default:a.vertexAttrib1fv(ee.location,te)}}}}B()}function z(){ue();for(const j in l){const V=l[j];for(const ae in V){const _e=V[ae];for(const ce in _e)C(_e[ce].object),delete _e[ce];delete V[ae]}delete l[j]}}function W(j){if(l[j.id]===void 0)return;const V=l[j.id];for(const ae in V){const _e=V[ae];for(const ce in _e)C(_e[ce].object),delete _e[ce];delete V[ae]}delete l[j.id]}function le(j){for(const V in l){const ae=l[V];if(ae[j.id]===void 0)continue;const _e=ae[j.id];for(const ce in _e)C(_e[ce].object),delete _e[ce];delete ae[j.id]}}function ue(){J(),m=!0,p!==h&&(p=h,M(p.object))}function J(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:g,reset:ue,resetDefaultState:J,dispose:z,releaseStatesOfGeometry:W,releaseStatesOfProgram:le,initAttributes:A,enableAttribute:F,disableUnusedAttributes:B}}function wg(a,e,t,n){const r=n.isWebGL2;let s;function d(p){s=p}function l(p,m){a.drawArrays(s,p,m),t.update(m,s,1)}function h(p,m,g){if(g===0)return;let v,M;if(r)v=a,M="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[M](s,p,m,g),t.update(m,s,g)}this.setMode=d,this.render=l,this.renderInstances=h}function Eg(a,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(K.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(K){if(K==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";K="mediump"}return K==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let l=t.precision!==void 0?t.precision:"highp";const h=s(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=d||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,g=a.getParameter(34930),v=a.getParameter(35660),M=a.getParameter(3379),C=a.getParameter(34076),b=a.getParameter(34921),y=a.getParameter(36347),P=a.getParameter(36348),O=a.getParameter(36349),A=v>0,F=d||e.has("OES_texture_float"),R=A&&F,B=d?a.getParameter(36183):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:C,maxAttributes:b,maxVertexUniforms:y,maxVaryings:P,maxFragmentUniforms:O,vertexTextures:A,floatFragmentTextures:F,floatVertexTextures:R,maxSamples:B}}function Tg(a){const e=this;let t=null,n=0,r=!1,s=!1;const d=new Ti,l=new rn,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const M=g.length!==0||v||n!==0||r;return r=v,n=g.length,M},this.beginShadows=function(){s=!0,m(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,M){const C=g.clippingPlanes,b=g.clipIntersection,y=g.clipShadows,P=a.get(g);if(!r||C===null||C.length===0||s&&!y)s?m(null):p();else{const O=s?0:n,A=O*4;let F=P.clippingState||null;h.value=F,F=m(C,v,A,M);for(let R=0;R!==A;++R)F[R]=t[R];P.clippingState=F,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,v,M,C){const b=g!==null?g.length:0;let y=null;if(b!==0){if(y=h.value,C!==!0||y===null){const P=M+b*4,O=v.matrixWorldInverse;l.getNormalMatrix(O),(y===null||y.length<P)&&(y=new Float32Array(P));for(let A=0,F=M;A!==b;++A,F+=4)d.copy(g[A]).applyMatrix4(O,l),d.normal.toArray(y,F),y[F+3]=d.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function Ag(a){let e=new WeakMap;function t(d,l){return l===rs?d.mapping=dr:l===Aa&&(d.mapping=fr),d}function n(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const l=d.mapping;if(l===rs||l===Aa)if(e.has(d)){const h=e.get(d).texture;return t(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const p=new Bh(h.height/2);return p.fromEquirectangularTexture(a,d),e.set(d,p),d.addEventListener("dispose",r),t(p.texture,d.mapping)}else return null}}return d}function r(d){const l=d.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ga extends Du{constructor(e=-1,t=1,n=1,r=-1,s=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,d=n+e,l=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=p*this.view.offsetX,d=s+p*this.view.width,l-=m*this.view.offsetY,h=l-m*this.view.height}this.projectionMatrix.makeOrthographic(s,d,l,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sr=4,Lc=[.125,.215,.35,.446,.526,.582],Pi=20,ma=new Ga,Rc=new Ze;let ga=null;const Ai=(1+Math.sqrt(5))/2,rr=1/Ai,Ic=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Ai,rr),new H(0,Ai,-rr),new H(rr,0,Ai),new H(-rr,0,Ai),new H(Ai,rr,0),new H(-Ai,rr,0)];class Oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ga=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ga),e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Jr,format:Cn,encoding:Oi,depthBuffer:!1},r=Nc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pg(s)),this._blurMaterial=Cg(s,e,t)}return r}_compileMaterial(e){const t=new Dn(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,r){const l=new pn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(Rc),m.toneMapping=Gn,m.autoClear=!1;const M=new zi({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),C=new Dn(new ro,M);let b=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,b=!0):(M.color.copy(Rc),b=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(l.up.set(0,h[P],0),l.lookAt(p[P],0,0)):O===1?(l.up.set(0,0,h[P]),l.lookAt(0,p[P],0)):(l.up.set(0,h[P],0),l.lookAt(0,0,p[P]));const A=this._cubeSize;Jo(r,O*A,P>2?A:0,A,A),m.setRenderTarget(r),b&&m.render(C,l),m.render(e,l)}C.geometry.dispose(),C.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===dr||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=r?this._cubemapMaterial:this._equirectMaterial,d=new Dn(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const h=this._cubeSize;Jo(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(d,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),d=Ic[(r-1)%Ic.length];this._blur(e,r-1,r,s,d)}t.autoClear=n}_blur(e,t,n,r,s){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,n,r,"latitudinal",s),this._halfBlur(d,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,d,l){const h=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Dn(this._lodPlanes[r],p),v=p.uniforms,M=this._sizeLods[n]-1,C=isFinite(s)?Math.PI/(2*M):2*Math.PI/(2*Pi-1),b=s/C,y=isFinite(s)?1+Math.floor(m*b):Pi;y>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Pi}`);const P=[];let O=0;for(let K=0;K<Pi;++K){const E=K/b,z=Math.exp(-E*E/2);P.push(z),K===0?O+=z:K<y&&(O+=2*z)}for(let K=0;K<P.length;K++)P[K]=P[K]/O;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=P,v.latitudinal.value=d==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:A}=this;v.dTheta.value=C,v.mipInt.value=A-n;const F=this._sizeLods[r],R=3*F*(r>A-sr?r-A+sr:0),B=4*(this._cubeSize-F);Jo(t,R,B,3*F,2*F),h.setRenderTarget(t),h.render(g,ma)}}function Pg(a){const e=[],t=[],n=[];let r=a;const s=a-sr+1+Lc.length;for(let d=0;d<s;d++){const l=Math.pow(2,r);t.push(l);let h=1/l;d>a-sr?h=Lc[d-a+sr-1]:d===0&&(h=0),n.push(h);const p=1/(l-2),m=-p,g=1+p,v=[m,m,g,m,g,g,m,m,g,g,m,g],M=6,C=6,b=3,y=2,P=1,O=new Float32Array(b*C*M),A=new Float32Array(y*C*M),F=new Float32Array(P*C*M);for(let B=0;B<M;B++){const K=B%3*2/3-1,E=B>2?0:-1,z=[K,E,0,K+2/3,E,0,K+2/3,E+1,0,K,E,0,K+2/3,E+1,0,K,E+1,0];O.set(z,b*C*B),A.set(v,y*C*B);const W=[B,B,B,B,B,B];F.set(W,P*C*B)}const R=new In;R.setAttribute("position",new Rn(O,b)),R.setAttribute("uv",new Rn(A,y)),R.setAttribute("faceIndex",new Rn(F,P)),e.push(R),r>sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nc(a,e,t){const n=new Ln(a,e,t);return n.texture.mapping=as,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(a,e,t,n,r){a.viewport.set(e,t,n,r),a.scissor.set(e,t,n,r)}function Cg(a,e,t){const n=new Float32Array(Pi),r=new H(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Va(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function zc(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Fc(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function Dg(a){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,p=h===rs||h===Aa,m=h===dr||h===fr;if(p||m)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let g=e.get(l);return t===null&&(t=new Oc(a)),g=p?t.fromEquirectangular(l,g):t.fromCubemap(l,g),e.set(l,g),g.texture}else{if(e.has(l))return e.get(l).texture;{const g=l.image;if(p&&g&&g.height>0||m&&g&&r(g)){t===null&&(t=new Oc(a));const v=p?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",s),v.texture}else return null}}}return l}function r(l){let h=0;const p=6;for(let m=0;m<p;m++)l[m]!==void 0&&h++;return h===p}function s(l){const h=l.target;h.removeEventListener("dispose",s);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:d}}function Lg(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Rg(a,e,t,n){const r={},s=new WeakMap;function d(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const C in v.attributes)e.remove(v.attributes[C]);v.removeEventListener("dispose",d),delete r[v.id];const M=s.get(v);M&&(e.remove(M),s.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(g,v){return r[v.id]===!0||(v.addEventListener("dispose",d),r[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const C in v)e.update(v[C],34962);const M=g.morphAttributes;for(const C in M){const b=M[C];for(let y=0,P=b.length;y<P;y++)e.update(b[y],34962)}}function p(g){const v=[],M=g.index,C=g.attributes.position;let b=0;if(M!==null){const O=M.array;b=M.version;for(let A=0,F=O.length;A<F;A+=3){const R=O[A+0],B=O[A+1],K=O[A+2];v.push(R,B,B,K,K,R)}}else{const O=C.array;b=C.version;for(let A=0,F=O.length/3-1;A<F;A+=3){const R=A+0,B=A+1,K=A+2;v.push(R,B,B,K,K,R)}}const y=new(bu(v)?Pu:Au)(v,1);y.version=b;const P=s.get(g);P&&e.remove(P),s.set(g,y)}function m(g){const v=s.get(g);if(v){const M=g.index;M!==null&&v.version<M.version&&p(g)}else p(g);return s.get(g)}return{get:l,update:h,getWireframeAttribute:m}}function Ig(a,e,t,n){const r=n.isWebGL2;let s;function d(v){s=v}let l,h;function p(v){l=v.type,h=v.bytesPerElement}function m(v,M){a.drawElements(s,M,l,v*h),t.update(M,s,1)}function g(v,M,C){if(C===0)return;let b,y;if(r)b=a,y="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[y](s,M,l,v*h,C),t.update(M,s,C)}this.setMode=d,this.setIndex=p,this.render=m,this.renderInstances=g}function Og(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,d,l){switch(t.calls++,d){case 4:t.triangles+=l*(s/3);break;case 1:t.lines+=l*(s/2);break;case 3:t.lines+=l*(s-1);break;case 2:t.lines+=l*s;break;case 0:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ng(a,e){return a[0]-e[0]}function zg(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Fg(a,e,t){const n={},r=new Float32Array(8),s=new WeakMap,d=new bt,l=[];for(let p=0;p<8;p++)l[p]=[p,0];function h(p,m,g){const v=p.morphTargetInfluences;if(e.isWebGL2===!0){const M=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,C=M!==void 0?M.length:0;let b=s.get(m);if(b===void 0||b.count!==C){let j=function(){ue.dispose(),s.delete(m),m.removeEventListener("dispose",j)};b!==void 0&&b.texture.dispose();const O=m.morphAttributes.position!==void 0,A=m.morphAttributes.normal!==void 0,F=m.morphAttributes.color!==void 0,R=m.morphAttributes.position||[],B=m.morphAttributes.normal||[],K=m.morphAttributes.color||[];let E=0;O===!0&&(E=1),A===!0&&(E=2),F===!0&&(E=3);let z=m.attributes.position.count*E,W=1;z>e.maxTextureSize&&(W=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const le=new Float32Array(z*W*4*C),ue=new wu(le,z,W,C);ue.type=Di,ue.needsUpdate=!0;const J=E*4;for(let V=0;V<C;V++){const ae=R[V],_e=B[V],ce=K[V],de=z*W*4*V;for(let pe=0;pe<ae.count;pe++){const Re=pe*J;O===!0&&(d.fromBufferAttribute(ae,pe),le[de+Re+0]=d.x,le[de+Re+1]=d.y,le[de+Re+2]=d.z,le[de+Re+3]=0),A===!0&&(d.fromBufferAttribute(_e,pe),le[de+Re+4]=d.x,le[de+Re+5]=d.y,le[de+Re+6]=d.z,le[de+Re+7]=0),F===!0&&(d.fromBufferAttribute(ce,pe),le[de+Re+8]=d.x,le[de+Re+9]=d.y,le[de+Re+10]=d.z,le[de+Re+11]=ce.itemSize===4?d.w:1)}}b={count:C,texture:ue,size:new ke(z,W)},s.set(m,b),m.addEventListener("dispose",j)}let y=0;for(let O=0;O<v.length;O++)y+=v[O];const P=m.morphTargetsRelative?1:1-y;g.getUniforms().setValue(a,"morphTargetBaseInfluence",P),g.getUniforms().setValue(a,"morphTargetInfluences",v),g.getUniforms().setValue(a,"morphTargetsTexture",b.texture,t),g.getUniforms().setValue(a,"morphTargetsTextureSize",b.size)}else{const M=v===void 0?0:v.length;let C=n[m.id];if(C===void 0||C.length!==M){C=[];for(let A=0;A<M;A++)C[A]=[A,0];n[m.id]=C}for(let A=0;A<M;A++){const F=C[A];F[0]=A,F[1]=v[A]}C.sort(zg);for(let A=0;A<8;A++)A<M&&C[A][1]?(l[A][0]=C[A][0],l[A][1]=C[A][1]):(l[A][0]=Number.MAX_SAFE_INTEGER,l[A][1]=0);l.sort(Ng);const b=m.morphAttributes.position,y=m.morphAttributes.normal;let P=0;for(let A=0;A<8;A++){const F=l[A],R=F[0],B=F[1];R!==Number.MAX_SAFE_INTEGER&&B?(b&&m.getAttribute("morphTarget"+A)!==b[R]&&m.setAttribute("morphTarget"+A,b[R]),y&&m.getAttribute("morphNormal"+A)!==y[R]&&m.setAttribute("morphNormal"+A,y[R]),r[A]=B,P+=B):(b&&m.hasAttribute("morphTarget"+A)===!0&&m.deleteAttribute("morphTarget"+A),y&&m.hasAttribute("morphNormal"+A)===!0&&m.deleteAttribute("morphNormal"+A),r[A]=0)}const O=m.morphTargetsRelative?1:1-P;g.getUniforms().setValue(a,"morphTargetBaseInfluence",O),g.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:h}}function Ug(a,e,t,n){let r=new WeakMap;function s(h){const p=n.render.frame,m=h.geometry,g=e.get(h,m);return r.get(g)!==p&&(e.update(g),r.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),g}function d(){r=new WeakMap}function l(h){const p=h.target;p.removeEventListener("dispose",l),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:s,dispose:d}}const Iu=new ln,Ou=new wu,Nu=new wh,zu=new Lu,Uc=[],kc=[],Bc=new Float32Array(16),Gc=new Float32Array(9),Vc=new Float32Array(4);function vr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const r=e*t;let s=Uc[r];if(s===void 0&&(s=new Float32Array(r),Uc[r]=s),e!==0){n.toArray(s,0);for(let d=1,l=0;d!==e;++d)l+=t,a[d].toArray(s,l)}return s}function Ot(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Nt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function cs(a,e){let t=kc[e];t===void 0&&(t=new Int32Array(e),kc[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function kg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Bg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;a.uniform2fv(this.addr,e),Nt(t,e)}}function Gg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;a.uniform3fv(this.addr,e),Nt(t,e)}}function Vg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;a.uniform4fv(this.addr,e),Nt(t,e)}}function Hg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;Vc.set(n),a.uniformMatrix2fv(this.addr,!1,Vc),Nt(t,n)}}function Wg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;Gc.set(n),a.uniformMatrix3fv(this.addr,!1,Gc),Nt(t,n)}}function jg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ot(t,n))return;Bc.set(n),a.uniformMatrix4fv(this.addr,!1,Bc),Nt(t,n)}}function qg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Xg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;a.uniform2iv(this.addr,e),Nt(t,e)}}function Yg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;a.uniform3iv(this.addr,e),Nt(t,e)}}function Kg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;a.uniform4iv(this.addr,e),Nt(t,e)}}function $g(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Zg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;a.uniform2uiv(this.addr,e),Nt(t,e)}}function Jg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;a.uniform3uiv(this.addr,e),Nt(t,e)}}function Qg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;a.uniform4uiv(this.addr,e),Nt(t,e)}}function ev(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Iu,r)}function tv(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nu,r)}function nv(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zu,r)}function iv(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ou,r)}function rv(a){switch(a){case 5126:return kg;case 35664:return Bg;case 35665:return Gg;case 35666:return Vg;case 35674:return Hg;case 35675:return Wg;case 35676:return jg;case 5124:case 35670:return qg;case 35667:case 35671:return Xg;case 35668:case 35672:return Yg;case 35669:case 35673:return Kg;case 5125:return $g;case 36294:return Zg;case 36295:return Jg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}function ov(a,e){a.uniform1fv(this.addr,e)}function sv(a,e){const t=vr(e,this.size,2);a.uniform2fv(this.addr,t)}function av(a,e){const t=vr(e,this.size,3);a.uniform3fv(this.addr,t)}function lv(a,e){const t=vr(e,this.size,4);a.uniform4fv(this.addr,t)}function cv(a,e){const t=vr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function uv(a,e){const t=vr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function dv(a,e){const t=vr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function fv(a,e){a.uniform1iv(this.addr,e)}function hv(a,e){a.uniform2iv(this.addr,e)}function pv(a,e){a.uniform3iv(this.addr,e)}function mv(a,e){a.uniform4iv(this.addr,e)}function gv(a,e){a.uniform1uiv(this.addr,e)}function vv(a,e){a.uniform2uiv(this.addr,e)}function _v(a,e){a.uniform3uiv(this.addr,e)}function xv(a,e){a.uniform4uiv(this.addr,e)}function yv(a,e,t){const n=this.cache,r=e.length,s=cs(t,r);Ot(n,s)||(a.uniform1iv(this.addr,s),Nt(n,s));for(let d=0;d!==r;++d)t.setTexture2D(e[d]||Iu,s[d])}function bv(a,e,t){const n=this.cache,r=e.length,s=cs(t,r);Ot(n,s)||(a.uniform1iv(this.addr,s),Nt(n,s));for(let d=0;d!==r;++d)t.setTexture3D(e[d]||Nu,s[d])}function Mv(a,e,t){const n=this.cache,r=e.length,s=cs(t,r);Ot(n,s)||(a.uniform1iv(this.addr,s),Nt(n,s));for(let d=0;d!==r;++d)t.setTextureCube(e[d]||zu,s[d])}function Sv(a,e,t){const n=this.cache,r=e.length,s=cs(t,r);Ot(n,s)||(a.uniform1iv(this.addr,s),Nt(n,s));for(let d=0;d!==r;++d)t.setTexture2DArray(e[d]||Ou,s[d])}function wv(a){switch(a){case 5126:return ov;case 35664:return sv;case 35665:return av;case 35666:return lv;case 35674:return cv;case 35675:return uv;case 35676:return dv;case 5124:case 35670:return fv;case 35667:case 35671:return hv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return vv;case 36295:return _v;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}class Ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=rv(t.type)}}class Tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=wv(t.type)}}class Av{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,d=r.length;s!==d;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Hc(a,e){a.seq.push(e),a.map[e.id]=e}function Pv(a,e,t){const n=a.name,r=n.length;for(va.lastIndex=0;;){const s=va.exec(n),d=va.lastIndex;let l=s[1];const h=s[2]==="]",p=s[3];if(h&&(l=l|0),p===void 0||p==="["&&d+2===r){Hc(t,p===void 0?new Ev(l,a,e):new Tv(l,a,e));break}else{let g=t.map[l];g===void 0&&(g=new Av(l),Hc(t,g)),t=g}}}class es{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),d=e.getUniformLocation(t,s.name);Pv(s,d,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,d=t.length;s!==d;++s){const l=t[s],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const d=e[r];d.id in t&&n.push(d)}return n}}function Wc(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Cv=0;function Dv(a,e){const t=a.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let d=r;d<s;d++){const l=d+1;n.push(`${l===e?">":" "} ${l}: ${t[d]}`)}return n.join(`
`)}function Lv(a){switch(a){case Oi:return["Linear","( value )"];case mt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function jc(a,e,t){const n=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const d=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dv(a.getShaderSource(e),d)}else return r}function Rv(a,e){const t=Lv(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Iv(a,e){let t;switch(e){case jf:t="Linear";break;case vu:t="Reinhard";break;case qf:t="OptimizedCineon";break;case Xf:t="ACESFilmic";break;case Yf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ov(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xr).join(`
`)}function Nv(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zv(a,e){const t={},n=a.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=a.getActiveAttrib(e,r),d=s.name;let l=1;s.type===35674&&(l=2),s.type===35675&&(l=3),s.type===35676&&(l=4),t[d]={type:s.type,location:a.getAttribLocation(e,d),locationSize:l}}return t}function Xr(a){return a!==""}function qc(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(a){return a.replace(Fv,Uv)}function Uv(a,e){const t=et[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Da(t)}const kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(a){return a.replace(kv,Bv)}function Bv(a,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kc(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gv(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Sf?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===qr&&(e="SHADOWMAP_TYPE_VSM"),e}function Vv(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case as:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hv(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function Wv(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case za:e="ENVMAP_BLENDING_MULTIPLY";break;case Hf:e="ENVMAP_BLENDING_MIX";break;case Wf:e="ENVMAP_BLENDING_ADD";break}return e}function jv(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qv(a,e,t,n){const r=a.getContext(),s=t.defines;let d=t.vertexShader,l=t.fragmentShader;const h=Gv(t),p=Vv(t),m=Hv(t),g=Wv(t),v=jv(t),M=t.isWebGL2?"":Ov(t),C=Nv(s),b=r.createProgram();let y,P,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[C].filter(Xr).join(`
`),y.length>0&&(y+=`
`),P=[M,C].filter(Xr).join(`
`),P.length>0&&(P+=`
`)):(y=[Kc(t),"#define SHADER_NAME "+t.shaderName,C,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),P=[M,Kc(t),"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?et.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Iv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.encodings_pars_fragment,Rv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),d=Da(d),d=qc(d,t),d=Xc(d,t),l=Da(l),l=qc(l,t),l=Xc(l,t),d=Yc(d),l=Yc(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,P=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const A=O+y+d,F=O+P+l,R=Wc(r,35633,A),B=Wc(r,35632,F);if(r.attachShader(b,R),r.attachShader(b,B),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b),a.debug.checkShaderErrors){const z=r.getProgramInfoLog(b).trim(),W=r.getShaderInfoLog(R).trim(),le=r.getShaderInfoLog(B).trim();let ue=!0,J=!0;if(r.getProgramParameter(b,35714)===!1){ue=!1;const j=jc(r,R,"vertex"),V=jc(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,35715)+`

Program Info Log: `+z+`
`+j+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(W===""||le==="")&&(J=!1);J&&(this.diagnostics={runnable:ue,programLog:z,vertexShader:{log:W,prefix:y},fragmentShader:{log:le,prefix:P}})}r.deleteShader(R),r.deleteShader(B);let K;this.getUniforms=function(){return K===void 0&&(K=new es(r,b)),K};let E;return this.getAttributes=function(){return E===void 0&&(E=zv(r,b)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=B,this}let Xv=0;class Yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),d=this._getShaderCacheForMaterial(e);return d.has(r)===!1&&(d.add(r),r.usedTimes++),d.has(s)===!1&&(d.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kv(e),t.set(e,n)),n}}class Kv{constructor(e){this.id=Xv++,this.code=e,this.usedTimes=0}}function $v(a,e,t,n,r,s,d){const l=new Eu,h=new Yv,p=[],m=r.isWebGL2,g=r.logarithmicDepthBuffer,v=r.vertexTextures;let M=r.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E,z,W,le,ue){const J=le.fog,j=ue.geometry,V=E.isMeshStandardMaterial?le.environment:null,ae=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),_e=ae&&ae.mapping===as?ae.image.height:null,ce=C[E.type];E.precision!==null&&(M=r.getMaxPrecision(E.precision),M!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",M,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pe=de!==void 0?de.length:0;let Re=0;j.morphAttributes.position!==void 0&&(Re=1),j.morphAttributes.normal!==void 0&&(Re=2),j.morphAttributes.color!==void 0&&(Re=3);let ee,fe,te,Z;if(ce){const He=kn[ce];ee=He.vertexShader,fe=He.fragmentShader}else ee=E.vertexShader,fe=E.fragmentShader,h.update(E),te=h.getVertexShaderID(E),Z=h.getFragmentShaderID(E);const Pe=a.getRenderTarget(),De=E.alphaTest>0,Le=E.clearcoat>0,Ce=E.iridescence>0;return{isWebGL2:m,shaderID:ce,shaderName:E.type,vertexShader:ee,fragmentShader:fe,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:M,instancing:ue.isInstancedMesh===!0,instancingColor:ue.isInstancedMesh===!0&&ue.instanceColor!==null,supportsVertexTextures:v,outputEncoding:Pe===null?a.outputEncoding:Pe.isXRRenderTarget===!0?Pe.texture.encoding:Oi,map:!!E.map,matcap:!!E.matcap,envMap:!!ae,envMapMode:ae&&ae.mapping,envMapCubeUVHeight:_e,lightMap:!!E.lightMap,aoMap:!!E.aoMap,emissiveMap:!!E.emissiveMap,bumpMap:!!E.bumpMap,normalMap:!!E.normalMap,objectSpaceNormalMap:E.normalMapType===hh,tangentSpaceNormalMap:E.normalMapType===Fa,decodeVideoTexture:!!E.map&&E.map.isVideoTexture===!0&&E.map.encoding===mt,clearcoat:Le,clearcoatMap:Le&&!!E.clearcoatMap,clearcoatRoughnessMap:Le&&!!E.clearcoatRoughnessMap,clearcoatNormalMap:Le&&!!E.clearcoatNormalMap,iridescence:Ce,iridescenceMap:Ce&&!!E.iridescenceMap,iridescenceThicknessMap:Ce&&!!E.iridescenceThicknessMap,displacementMap:!!E.displacementMap,roughnessMap:!!E.roughnessMap,metalnessMap:!!E.metalnessMap,specularMap:!!E.specularMap,specularIntensityMap:!!E.specularIntensityMap,specularColorMap:!!E.specularColorMap,opaque:E.transparent===!1&&E.blending===lr,alphaMap:!!E.alphaMap,alphaTest:De,gradientMap:!!E.gradientMap,sheen:E.sheen>0,sheenColorMap:!!E.sheenColorMap,sheenRoughnessMap:!!E.sheenRoughnessMap,transmission:E.transmission>0,transmissionMap:!!E.transmissionMap,thicknessMap:!!E.thicknessMap,combine:E.combine,vertexTangents:!!E.normalMap&&!!j.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUvs:!!E.map||!!E.bumpMap||!!E.normalMap||!!E.specularMap||!!E.alphaMap||!!E.emissiveMap||!!E.roughnessMap||!!E.metalnessMap||!!E.clearcoatMap||!!E.clearcoatRoughnessMap||!!E.clearcoatNormalMap||!!E.iridescenceMap||!!E.iridescenceThicknessMap||!!E.displacementMap||!!E.transmissionMap||!!E.thicknessMap||!!E.specularIntensityMap||!!E.specularColorMap||!!E.sheenColorMap||!!E.sheenRoughnessMap,uvsVertexOnly:!(E.map||E.bumpMap||E.normalMap||E.specularMap||E.alphaMap||E.emissiveMap||E.roughnessMap||E.metalnessMap||E.clearcoatNormalMap||E.iridescenceMap||E.iridescenceThicknessMap||E.transmission>0||E.transmissionMap||E.thicknessMap||E.specularIntensityMap||E.specularColorMap||E.sheen>0||E.sheenColorMap||E.sheenRoughnessMap)&&!!E.displacementMap,fog:!!J,useFog:E.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:!!E.flatShading,sizeAttenuation:E.sizeAttenuation,logarithmicDepthBuffer:g,skinning:ue.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Re,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&W.length>0,shadowMapType:a.shadowMap.type,toneMapping:E.toneMapped?a.toneMapping:Gn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ui,flipSided:E.side===gn,useDepthPacking:!!E.depthPacking,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:E.extensions&&E.extensions.derivatives,extensionFragDepth:E.extensions&&E.extensions.fragDepth,extensionDrawBuffers:E.extensions&&E.extensions.drawBuffers,extensionShaderTextureLOD:E.extensions&&E.extensions.shaderTextureLOD,rendererExtensionFragDepth:m||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function y(E){const z=[];if(E.shaderID?z.push(E.shaderID):(z.push(E.customVertexShaderID),z.push(E.customFragmentShaderID)),E.defines!==void 0)for(const W in E.defines)z.push(W),z.push(E.defines[W]);return E.isRawShaderMaterial===!1&&(P(z,E),O(z,E),z.push(a.outputEncoding)),z.push(E.customProgramCacheKey),z.join()}function P(E,z){E.push(z.precision),E.push(z.outputEncoding),E.push(z.envMapMode),E.push(z.envMapCubeUVHeight),E.push(z.combine),E.push(z.vertexUvs),E.push(z.fogExp2),E.push(z.sizeAttenuation),E.push(z.morphTargetsCount),E.push(z.morphAttributeCount),E.push(z.numDirLights),E.push(z.numPointLights),E.push(z.numSpotLights),E.push(z.numSpotLightMaps),E.push(z.numHemiLights),E.push(z.numRectAreaLights),E.push(z.numDirLightShadows),E.push(z.numPointLightShadows),E.push(z.numSpotLightShadows),E.push(z.numSpotLightShadowsWithMaps),E.push(z.shadowMapType),E.push(z.toneMapping),E.push(z.numClippingPlanes),E.push(z.numClipIntersection),E.push(z.depthPacking)}function O(E,z){l.disableAll(),z.isWebGL2&&l.enable(0),z.supportsVertexTextures&&l.enable(1),z.instancing&&l.enable(2),z.instancingColor&&l.enable(3),z.map&&l.enable(4),z.matcap&&l.enable(5),z.envMap&&l.enable(6),z.lightMap&&l.enable(7),z.aoMap&&l.enable(8),z.emissiveMap&&l.enable(9),z.bumpMap&&l.enable(10),z.normalMap&&l.enable(11),z.objectSpaceNormalMap&&l.enable(12),z.tangentSpaceNormalMap&&l.enable(13),z.clearcoat&&l.enable(14),z.clearcoatMap&&l.enable(15),z.clearcoatRoughnessMap&&l.enable(16),z.clearcoatNormalMap&&l.enable(17),z.iridescence&&l.enable(18),z.iridescenceMap&&l.enable(19),z.iridescenceThicknessMap&&l.enable(20),z.displacementMap&&l.enable(21),z.specularMap&&l.enable(22),z.roughnessMap&&l.enable(23),z.metalnessMap&&l.enable(24),z.gradientMap&&l.enable(25),z.alphaMap&&l.enable(26),z.alphaTest&&l.enable(27),z.vertexColors&&l.enable(28),z.vertexAlphas&&l.enable(29),z.vertexUvs&&l.enable(30),z.vertexTangents&&l.enable(31),z.uvsVertexOnly&&l.enable(32),E.push(l.mask),l.disableAll(),z.fog&&l.enable(0),z.useFog&&l.enable(1),z.flatShading&&l.enable(2),z.logarithmicDepthBuffer&&l.enable(3),z.skinning&&l.enable(4),z.morphTargets&&l.enable(5),z.morphNormals&&l.enable(6),z.morphColors&&l.enable(7),z.premultipliedAlpha&&l.enable(8),z.shadowMapEnabled&&l.enable(9),z.useLegacyLights&&l.enable(10),z.doubleSided&&l.enable(11),z.flipSided&&l.enable(12),z.useDepthPacking&&l.enable(13),z.dithering&&l.enable(14),z.specularIntensityMap&&l.enable(15),z.specularColorMap&&l.enable(16),z.transmission&&l.enable(17),z.transmissionMap&&l.enable(18),z.thicknessMap&&l.enable(19),z.sheen&&l.enable(20),z.sheenColorMap&&l.enable(21),z.sheenRoughnessMap&&l.enable(22),z.decodeVideoTexture&&l.enable(23),z.opaque&&l.enable(24),E.push(l.mask)}function A(E){const z=C[E.type];let W;if(z){const le=kn[z];W=os.clone(le.uniforms)}else W=E.uniforms;return W}function F(E,z){let W;for(let le=0,ue=p.length;le<ue;le++){const J=p[le];if(J.cacheKey===z){W=J,++W.usedTimes;break}}return W===void 0&&(W=new qv(a,z,E,s),p.push(W)),W}function R(E){if(--E.usedTimes===0){const z=p.indexOf(E);p[z]=p[p.length-1],p.pop(),E.destroy()}}function B(E){h.remove(E)}function K(){h.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:A,acquireProgram:F,releaseProgram:R,releaseShaderCache:B,programs:p,dispose:K}}function Zv(){let a=new WeakMap;function e(s){let d=a.get(s);return d===void 0&&(d={},a.set(s,d)),d}function t(s){a.delete(s)}function n(s,d,l){a.get(s)[d]=l}function r(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Jv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function $c(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Zc(){const a=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function d(g,v,M,C,b,y){let P=a[e];return P===void 0?(P={id:g.id,object:g,geometry:v,material:M,groupOrder:C,renderOrder:g.renderOrder,z:b,group:y},a[e]=P):(P.id=g.id,P.object=g,P.geometry=v,P.material=M,P.groupOrder=C,P.renderOrder=g.renderOrder,P.z=b,P.group=y),e++,P}function l(g,v,M,C,b,y){const P=d(g,v,M,C,b,y);M.transmission>0?n.push(P):M.transparent===!0?r.push(P):t.push(P)}function h(g,v,M,C,b,y){const P=d(g,v,M,C,b,y);M.transmission>0?n.unshift(P):M.transparent===!0?r.unshift(P):t.unshift(P)}function p(g,v){t.length>1&&t.sort(g||Jv),n.length>1&&n.sort(v||$c),r.length>1&&r.sort(v||$c)}function m(){for(let g=e,v=a.length;g<v;g++){const M=a[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:h,finish:m,sort:p}}function Qv(){let a=new WeakMap;function e(n,r){const s=a.get(n);let d;return s===void 0?(d=new Zc,a.set(n,[d])):r>=s.length?(d=new Zc,s.push(d)):d=s[r],d}function t(){a=new WeakMap}return{get:e,dispose:t}}function e0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ze};break;case"SpotLight":t={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return a[e.id]=t,t}}}function t0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let n0=0;function i0(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function r0(a,e){const t=new e0,n=t0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)r.probe.push(new H);const s=new H,d=new Rt,l=new Rt;function h(m,g){let v=0,M=0,C=0;for(let le=0;le<9;le++)r.probe[le].set(0,0,0);let b=0,y=0,P=0,O=0,A=0,F=0,R=0,B=0,K=0,E=0;m.sort(i0);const z=g===!0?Math.PI:1;for(let le=0,ue=m.length;le<ue;le++){const J=m[le],j=J.color,V=J.intensity,ae=J.distance,_e=J.shadow&&J.shadow.map?J.shadow.map.texture:null;if(J.isAmbientLight)v+=j.r*V*z,M+=j.g*V*z,C+=j.b*V*z;else if(J.isLightProbe)for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(J.sh.coefficients[ce],V);else if(J.isDirectionalLight){const ce=t.get(J);if(ce.color.copy(J.color).multiplyScalar(J.intensity*z),J.castShadow){const de=J.shadow,pe=n.get(J);pe.shadowBias=de.bias,pe.shadowNormalBias=de.normalBias,pe.shadowRadius=de.radius,pe.shadowMapSize=de.mapSize,r.directionalShadow[b]=pe,r.directionalShadowMap[b]=_e,r.directionalShadowMatrix[b]=J.shadow.matrix,F++}r.directional[b]=ce,b++}else if(J.isSpotLight){const ce=t.get(J);ce.position.setFromMatrixPosition(J.matrixWorld),ce.color.copy(j).multiplyScalar(V*z),ce.distance=ae,ce.coneCos=Math.cos(J.angle),ce.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),ce.decay=J.decay,r.spot[P]=ce;const de=J.shadow;if(J.map&&(r.spotLightMap[K]=J.map,K++,de.updateMatrices(J),J.castShadow&&E++),r.spotLightMatrix[P]=de.matrix,J.castShadow){const pe=n.get(J);pe.shadowBias=de.bias,pe.shadowNormalBias=de.normalBias,pe.shadowRadius=de.radius,pe.shadowMapSize=de.mapSize,r.spotShadow[P]=pe,r.spotShadowMap[P]=_e,B++}P++}else if(J.isRectAreaLight){const ce=t.get(J);ce.color.copy(j).multiplyScalar(V),ce.halfWidth.set(J.width*.5,0,0),ce.halfHeight.set(0,J.height*.5,0),r.rectArea[O]=ce,O++}else if(J.isPointLight){const ce=t.get(J);if(ce.color.copy(J.color).multiplyScalar(J.intensity*z),ce.distance=J.distance,ce.decay=J.decay,J.castShadow){const de=J.shadow,pe=n.get(J);pe.shadowBias=de.bias,pe.shadowNormalBias=de.normalBias,pe.shadowRadius=de.radius,pe.shadowMapSize=de.mapSize,pe.shadowCameraNear=de.camera.near,pe.shadowCameraFar=de.camera.far,r.pointShadow[y]=pe,r.pointShadowMap[y]=_e,r.pointShadowMatrix[y]=J.shadow.matrix,R++}r.point[y]=ce,y++}else if(J.isHemisphereLight){const ce=t.get(J);ce.skyColor.copy(J.color).multiplyScalar(V*z),ce.groundColor.copy(J.groundColor).multiplyScalar(V*z),r.hemi[A]=ce,A++}}O>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=v,r.ambient[1]=M,r.ambient[2]=C;const W=r.hash;(W.directionalLength!==b||W.pointLength!==y||W.spotLength!==P||W.rectAreaLength!==O||W.hemiLength!==A||W.numDirectionalShadows!==F||W.numPointShadows!==R||W.numSpotShadows!==B||W.numSpotMaps!==K)&&(r.directional.length=b,r.spot.length=P,r.rectArea.length=O,r.point.length=y,r.hemi.length=A,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=B+K-E,r.spotLightMap.length=K,r.numSpotLightShadowsWithMaps=E,W.directionalLength=b,W.pointLength=y,W.spotLength=P,W.rectAreaLength=O,W.hemiLength=A,W.numDirectionalShadows=F,W.numPointShadows=R,W.numSpotShadows=B,W.numSpotMaps=K,r.version=n0++)}function p(m,g){let v=0,M=0,C=0,b=0,y=0;const P=g.matrixWorldInverse;for(let O=0,A=m.length;O<A;O++){const F=m[O];if(F.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(P),v++}else if(F.isSpotLight){const R=r.spot[C];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(P),R.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(P),C++}else if(F.isRectAreaLight){const R=r.rectArea[b];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(P),l.identity(),d.copy(F.matrixWorld),d.premultiply(P),l.extractRotation(d),R.halfWidth.set(F.width*.5,0,0),R.halfHeight.set(0,F.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),b++}else if(F.isPointLight){const R=r.point[M];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(P),M++}else if(F.isHemisphereLight){const R=r.hemi[y];R.direction.setFromMatrixPosition(F.matrixWorld),R.direction.transformDirection(P),y++}}}return{setup:h,setupView:p,state:r}}function Jc(a,e){const t=new r0(a,e),n=[],r=[];function s(){n.length=0,r.length=0}function d(g){n.push(g)}function l(g){r.push(g)}function h(g){t.setup(n,g)}function p(g){t.setupView(n,g)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:h,setupLightsView:p,pushLight:d,pushShadow:l}}function o0(a,e){let t=new WeakMap;function n(s,d=0){const l=t.get(s);let h;return l===void 0?(h=new Jc(a,e),t.set(s,[h])):d>=l.length?(h=new Jc(a,e),l.push(h)):h=l[d],h}function r(){t=new WeakMap}return{get:n,dispose:r}}class s0 extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a0 extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
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
}`;function u0(a,e,t){let n=new ka;const r=new ke,s=new ke,d=new bt,l=new s0({depthPacking:fh}),h=new a0,p={},m=t.maxTextureSize,g={[pi]:gn,[gn]:pi,[ui]:ui},v=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const C=new In;C.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Dn(C,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu,this.render=function(F,R,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const K=a.getRenderTarget(),E=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),W=a.state;W.setBlending(hi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);for(let le=0,ue=F.length;le<ue;le++){const J=F[le],j=J.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const V=j.getFrameExtents();if(r.multiply(V),s.copy(j.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(s.x=Math.floor(m/V.x),r.x=s.x*V.x,j.mapSize.x=s.x),r.y>m&&(s.y=Math.floor(m/V.y),r.y=s.y*V.y,j.mapSize.y=s.y)),j.map===null){const _e=this.type!==qr?{minFilter:tn,magFilter:tn}:{};j.map=new Ln(r.x,r.y,_e),j.map.texture.name=J.name+".shadowMap",j.camera.updateProjectionMatrix()}a.setRenderTarget(j.map),a.clear();const ae=j.getViewportCount();for(let _e=0;_e<ae;_e++){const ce=j.getViewport(_e);d.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),W.viewport(d),j.updateMatrices(J,_e),n=j.getFrustum(),A(R,B,j.camera,J,this.type)}j.isPointLightShadow!==!0&&this.type===qr&&P(j,B),j.needsUpdate=!1}y.needsUpdate=!1,a.setRenderTarget(K,E,z)};function P(F,R){const B=e.update(b);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ln(r.x,r.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,a.setRenderTarget(F.mapPass),a.clear(),a.renderBufferDirect(R,null,B,v,b,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,a.setRenderTarget(F.map),a.clear(),a.renderBufferDirect(R,null,B,M,b,null)}function O(F,R,B,K,E,z){let W=null;const le=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(le!==void 0)W=le;else if(W=B.isPointLight===!0?h:l,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const ue=W.uuid,J=R.uuid;let j=p[ue];j===void 0&&(j={},p[ue]=j);let V=j[J];V===void 0&&(V=W.clone(),j[J]=V),W=V}return W.visible=R.visible,W.wireframe=R.wireframe,z===qr?W.side=R.shadowSide!==null?R.shadowSide:R.side:W.side=R.shadowSide!==null?R.shadowSide:g[R.side],W.alphaMap=R.alphaMap,W.alphaTest=R.alphaTest,W.map=R.map,W.clipShadows=R.clipShadows,W.clippingPlanes=R.clippingPlanes,W.clipIntersection=R.clipIntersection,W.displacementMap=R.displacementMap,W.displacementScale=R.displacementScale,W.displacementBias=R.displacementBias,W.wireframeLinewidth=R.wireframeLinewidth,W.linewidth=R.linewidth,B.isPointLight===!0&&W.isMeshDistanceMaterial===!0&&(W.referencePosition.setFromMatrixPosition(B.matrixWorld),W.nearDistance=K,W.farDistance=E),W}function A(F,R,B,K,E){if(F.visible===!1)return;if(F.layers.test(R.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&E===qr)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const le=e.update(F),ue=F.material;if(Array.isArray(ue)){const J=le.groups;for(let j=0,V=J.length;j<V;j++){const ae=J[j],_e=ue[ae.materialIndex];if(_e&&_e.visible){const ce=O(F,_e,K,B.near,B.far,E);a.renderBufferDirect(B,null,le,ce,F,ae)}}}else if(ue.visible){const J=O(F,ue,K,B.near,B.far,E);a.renderBufferDirect(B,null,le,J,F,null)}}const W=F.children;for(let le=0,ue=W.length;le<ue;le++)A(W[le],R,B,K,E)}}function d0(a,e,t){const n=t.isWebGL2;function r(){let G=!1;const re=new bt;let ge=null;const Ae=new bt(0,0,0,0);return{setMask:function(Te){ge!==Te&&!G&&(a.colorMask(Te,Te,Te,Te),ge=Te)},setLocked:function(Te){G=Te},setClear:function(Te,ft,_t,Ut,wt){wt===!0&&(Te*=Ut,ft*=Ut,_t*=Ut),re.set(Te,ft,_t,Ut),Ae.equals(re)===!1&&(a.clearColor(Te,ft,_t,Ut),Ae.copy(re))},reset:function(){G=!1,ge=null,Ae.set(-1,0,0,0)}}}function s(){let G=!1,re=null,ge=null,Ae=null;return{setTest:function(Te){Te?De(2929):Le(2929)},setMask:function(Te){re!==Te&&!G&&(a.depthMask(Te),re=Te)},setFunc:function(Te){if(ge!==Te){switch(Te){case zf:a.depthFunc(512);break;case Ff:a.depthFunc(519);break;case Uf:a.depthFunc(513);break;case Ta:a.depthFunc(515);break;case kf:a.depthFunc(514);break;case Bf:a.depthFunc(518);break;case Gf:a.depthFunc(516);break;case Vf:a.depthFunc(517);break;default:a.depthFunc(515)}ge=Te}},setLocked:function(Te){G=Te},setClear:function(Te){Ae!==Te&&(a.clearDepth(Te),Ae=Te)},reset:function(){G=!1,re=null,ge=null,Ae=null}}}function d(){let G=!1,re=null,ge=null,Ae=null,Te=null,ft=null,_t=null,Ut=null,wt=null;return{setTest:function(ct){G||(ct?De(2960):Le(2960))},setMask:function(ct){re!==ct&&!G&&(a.stencilMask(ct),re=ct)},setFunc:function(ct,Ct,cn){(ge!==ct||Ae!==Ct||Te!==cn)&&(a.stencilFunc(ct,Ct,cn),ge=ct,Ae=Ct,Te=cn)},setOp:function(ct,Ct,cn){(ft!==ct||_t!==Ct||Ut!==cn)&&(a.stencilOp(ct,Ct,cn),ft=ct,_t=Ct,Ut=cn)},setLocked:function(ct){G=ct},setClear:function(ct){wt!==ct&&(a.clearStencil(ct),wt=ct)},reset:function(){G=!1,re=null,ge=null,Ae=null,Te=null,ft=null,_t=null,Ut=null,wt=null}}}const l=new r,h=new s,p=new d,m=new WeakMap,g=new WeakMap;let v={},M={},C=new WeakMap,b=[],y=null,P=!1,O=null,A=null,F=null,R=null,B=null,K=null,E=null,z=!1,W=null,le=null,ue=null,J=null,j=null;const V=a.getParameter(35661);let ae=!1,_e=0;const ce=a.getParameter(7938);ce.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ae=_e>=1):ce.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ae=_e>=2);let de=null,pe={};const Re=a.getParameter(3088),ee=a.getParameter(2978),fe=new bt().fromArray(Re),te=new bt().fromArray(ee);function Z(G,re,ge){const Ae=new Uint8Array(4),Te=a.createTexture();a.bindTexture(G,Te),a.texParameteri(G,10241,9728),a.texParameteri(G,10240,9728);for(let ft=0;ft<ge;ft++)a.texImage2D(re+ft,0,6408,1,1,0,6408,5121,Ae);return Te}const Pe={};Pe[3553]=Z(3553,3553,1),Pe[34067]=Z(34067,34069,6),l.setClear(0,0,0,1),h.setClear(1),p.setClear(0),De(2929),h.setFunc(Ta),Tt(!1),At(Gl),De(2884),Et(hi);function De(G){v[G]!==!0&&(a.enable(G),v[G]=!0)}function Le(G){v[G]!==!1&&(a.disable(G),v[G]=!1)}function Ce(G,re){return M[G]!==re?(a.bindFramebuffer(G,re),M[G]=re,n&&(G===36009&&(M[36160]=re),G===36160&&(M[36009]=re)),!0):!1}function Be(G,re){let ge=b,Ae=!1;if(G)if(ge=C.get(re),ge===void 0&&(ge=[],C.set(re,ge)),G.isWebGLMultipleRenderTargets){const Te=G.texture;if(ge.length!==Te.length||ge[0]!==36064){for(let ft=0,_t=Te.length;ft<_t;ft++)ge[ft]=36064+ft;ge.length=Te.length,Ae=!0}}else ge[0]!==36064&&(ge[0]=36064,Ae=!0);else ge[0]!==1029&&(ge[0]=1029,Ae=!0);Ae&&(t.isWebGL2?a.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function He(G){return y!==G?(a.useProgram(G),y=G,!0):!1}const Ye={[or]:32774,[Ef]:32778,[Tf]:32779};if(n)Ye[Wl]=32775,Ye[jl]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(Ye[Wl]=G.MIN_EXT,Ye[jl]=G.MAX_EXT)}const rt={[Af]:0,[Pf]:1,[Cf]:768,[mu]:770,[Nf]:776,[If]:774,[Lf]:772,[Df]:769,[gu]:771,[Of]:775,[Rf]:773};function Et(G,re,ge,Ae,Te,ft,_t,Ut){if(G===hi){P===!0&&(Le(3042),P=!1);return}if(P===!1&&(De(3042),P=!0),G!==wf){if(G!==O||Ut!==z){if((A!==or||B!==or)&&(a.blendEquation(32774),A=or,B=or),Ut)switch(G){case lr:a.blendFuncSeparate(1,771,1,771);break;case Ea:a.blendFunc(1,1);break;case Vl:a.blendFuncSeparate(0,769,0,1);break;case Hl:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case lr:a.blendFuncSeparate(770,771,1,771);break;case Ea:a.blendFunc(770,1);break;case Vl:a.blendFuncSeparate(0,769,0,1);break;case Hl:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}F=null,R=null,K=null,E=null,O=G,z=Ut}return}Te=Te||re,ft=ft||ge,_t=_t||Ae,(re!==A||Te!==B)&&(a.blendEquationSeparate(Ye[re],Ye[Te]),A=re,B=Te),(ge!==F||Ae!==R||ft!==K||_t!==E)&&(a.blendFuncSeparate(rt[ge],rt[Ae],rt[ft],rt[_t]),F=ge,R=Ae,K=ft,E=_t),O=G,z=!1}function je(G,re){G.side===ui?Le(2884):De(2884);let ge=G.side===gn;re&&(ge=!ge),Tt(ge),G.blending===lr&&G.transparent===!1?Et(hi):Et(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ae=G.stencilWrite;p.setTest(Ae),Ae&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),dt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?De(32926):Le(32926)}function Tt(G){W!==G&&(G?a.frontFace(2304):a.frontFace(2305),W=G)}function At(G){G!==bf?(De(2884),G!==le&&(G===Gl?a.cullFace(1029):G===Mf?a.cullFace(1028):a.cullFace(1032))):Le(2884),le=G}function at(G){G!==ue&&(ae&&a.lineWidth(G),ue=G)}function dt(G,re,ge){G?(De(32823),(J!==re||j!==ge)&&(a.polygonOffset(re,ge),J=re,j=ge)):Le(32823)}function Kt(G){G?De(3089):Le(3089)}function It(G){G===void 0&&(G=33984+V-1),de!==G&&(a.activeTexture(G),de=G)}function I(G,re,ge){ge===void 0&&(de===null?ge=33984+V-1:ge=de);let Ae=pe[ge];Ae===void 0&&(Ae={type:void 0,texture:void 0},pe[ge]=Ae),(Ae.type!==G||Ae.texture!==re)&&(de!==ge&&(a.activeTexture(ge),de=ge),a.bindTexture(G,re||Pe[G]),Ae.type=G,Ae.texture=re)}function T(){const G=pe[de];G!==void 0&&G.type!==void 0&&(a.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ie(){try{a.compressedTexImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{a.compressedTexImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{a.texSubImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{a.texSubImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function U(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{a.texStorage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{a.texStorage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{a.texImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{a.texImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){fe.equals(G)===!1&&(a.scissor(G.x,G.y,G.z,G.w),fe.copy(G))}function ze(G){te.equals(G)===!1&&(a.viewport(G.x,G.y,G.z,G.w),te.copy(G))}function Ke(G,re){let ge=g.get(re);ge===void 0&&(ge=new WeakMap,g.set(re,ge));let Ae=ge.get(G);Ae===void 0&&(Ae=a.getUniformBlockIndex(re,G.name),ge.set(G,Ae))}function tt(G,re){const Ae=g.get(re).get(G);m.get(re)!==Ae&&(a.uniformBlockBinding(re,Ae,G.__bindingPointIndex),m.set(re,Ae))}function lt(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},de=null,pe={},M={},C=new WeakMap,b=[],y=null,P=!1,O=null,A=null,F=null,R=null,B=null,K=null,E=null,z=!1,W=null,le=null,ue=null,J=null,j=null,fe.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),l.reset(),h.reset(),p.reset()}return{buffers:{color:l,depth:h,stencil:p},enable:De,disable:Le,bindFramebuffer:Ce,drawBuffers:Be,useProgram:He,setBlending:Et,setMaterial:je,setFlipSided:Tt,setCullFace:At,setLineWidth:at,setPolygonOffset:dt,setScissorTest:Kt,activeTexture:It,bindTexture:I,unbindTexture:T,compressedTexImage2D:ie,compressedTexImage3D:ve,texImage2D:ye,texImage3D:Ie,updateUBOMapping:Ke,uniformBlockBinding:tt,texStorage2D:X,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:Se,compressedTexSubImage2D:Fe,compressedTexSubImage3D:U,scissor:Ne,viewport:ze,reset:lt}}function f0(a,e,t,n,r,s,d){const l=r.isWebGL2,h=r.maxTextures,p=r.maxCubemapSize,m=r.maxTextureSize,g=r.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),C=new WeakMap;let b;const y=new WeakMap;let P=!1;try{P=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(I,T){return P?new OffscreenCanvas(I,T):eo("canvas")}function A(I,T,ie,ve){let xe=1;if((I.width>ve||I.height>ve)&&(xe=ve/Math.max(I.width,I.height)),xe<1||T===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const Se=T?gh:Math.floor,Fe=Se(xe*I.width),U=Se(xe*I.height);b===void 0&&(b=O(Fe,U));const X=ie?O(Fe,U):b;return X.width=Fe,X.height=U,X.getContext("2d").drawImage(I,0,0,Fe,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Fe+"x"+U+")."),X}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function F(I){return xc(I.width)&&xc(I.height)}function R(I){return l?!1:I.wrapS!==Pn||I.wrapT!==Pn||I.minFilter!==tn&&I.minFilter!==bn}function B(I,T){return I.generateMipmaps&&T&&I.minFilter!==tn&&I.minFilter!==bn}function K(I){a.generateMipmap(I)}function E(I,T,ie,ve,xe=!1){if(l===!1)return T;if(I!==null){if(a[I]!==void 0)return a[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Se=T;return T===6403&&(ie===5126&&(Se=33326),ie===5131&&(Se=33325),ie===5121&&(Se=33321)),T===33319&&(ie===5126&&(Se=33328),ie===5131&&(Se=33327),ie===5121&&(Se=33323)),T===6408&&(ie===5126&&(Se=34836),ie===5131&&(Se=34842),ie===5121&&(Se=ve===mt&&xe===!1?35907:32856),ie===32819&&(Se=32854),ie===32820&&(Se=32855)),(Se===33325||Se===33326||Se===33327||Se===33328||Se===34842||Se===34836)&&e.get("EXT_color_buffer_float"),Se}function z(I,T,ie){return B(I,ie)===!0||I.isFramebufferTexture&&I.minFilter!==tn&&I.minFilter!==bn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function W(I){return I===tn||I===ql||I===Gs?9728:9729}function le(I){const T=I.target;T.removeEventListener("dispose",le),J(T),T.isVideoTexture&&C.delete(T)}function ue(I){const T=I.target;T.removeEventListener("dispose",ue),V(T)}function J(I){const T=n.get(I);if(T.__webglInit===void 0)return;const ie=I.source,ve=y.get(ie);if(ve){const xe=ve[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&j(I),Object.keys(ve).length===0&&y.delete(ie)}n.remove(I)}function j(I){const T=n.get(I);a.deleteTexture(T.__webglTexture);const ie=I.source,ve=y.get(ie);delete ve[T.__cacheKey],d.memory.textures--}function V(I){const T=I.texture,ie=n.get(I),ve=n.get(T);if(ve.__webglTexture!==void 0&&(a.deleteTexture(ve.__webglTexture),d.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)a.deleteFramebuffer(ie.__webglFramebuffer[xe]),ie.__webglDepthbuffer&&a.deleteRenderbuffer(ie.__webglDepthbuffer[xe]);else{if(a.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&a.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&a.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let xe=0;xe<ie.__webglColorRenderbuffer.length;xe++)ie.__webglColorRenderbuffer[xe]&&a.deleteRenderbuffer(ie.__webglColorRenderbuffer[xe]);ie.__webglDepthRenderbuffer&&a.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let xe=0,Se=T.length;xe<Se;xe++){const Fe=n.get(T[xe]);Fe.__webglTexture&&(a.deleteTexture(Fe.__webglTexture),d.memory.textures--),n.remove(T[xe])}n.remove(T),n.remove(I)}let ae=0;function _e(){ae=0}function ce(){const I=ae;return I>=h&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+h),ae+=1,I}function de(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.encoding),T.join()}function pe(I,T){const ie=n.get(I);if(I.isVideoTexture&&Kt(I),I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){const ve=I.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(ie,I,T);return}}t.bindTexture(3553,ie.__webglTexture,33984+T)}function Re(I,T){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){Le(ie,I,T);return}t.bindTexture(35866,ie.__webglTexture,33984+T)}function ee(I,T){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){Le(ie,I,T);return}t.bindTexture(32879,ie.__webglTexture,33984+T)}function fe(I,T){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){Ce(ie,I,T);return}t.bindTexture(34067,ie.__webglTexture,33984+T)}const te={[Ri]:10497,[Pn]:33071,[Pa]:33648},Z={[tn]:9728,[ql]:9984,[Gs]:9986,[bn]:9729,[Kf]:9985,[Zr]:9987};function Pe(I,T,ie){if(ie?(a.texParameteri(I,10242,te[T.wrapS]),a.texParameteri(I,10243,te[T.wrapT]),(I===32879||I===35866)&&a.texParameteri(I,32882,te[T.wrapR]),a.texParameteri(I,10240,Z[T.magFilter]),a.texParameteri(I,10241,Z[T.minFilter])):(a.texParameteri(I,10242,33071),a.texParameteri(I,10243,33071),(I===32879||I===35866)&&a.texParameteri(I,32882,33071),(T.wrapS!==Pn||T.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(I,10240,W(T.magFilter)),a.texParameteri(I,10241,W(T.minFilter)),T.minFilter!==tn&&T.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===tn||T.minFilter!==Gs&&T.minFilter!==Zr||T.type===Di&&e.has("OES_texture_float_linear")===!1||l===!1&&T.type===Jr&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(a.texParameterf(I,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function De(I,T){let ie=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",le));const ve=T.source;let xe=y.get(ve);xe===void 0&&(xe={},y.set(ve,xe));const Se=de(T);if(Se!==I.__cacheKey){xe[Se]===void 0&&(xe[Se]={texture:a.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),xe[Se].usedTimes++;const Fe=xe[I.__cacheKey];Fe!==void 0&&(xe[I.__cacheKey].usedTimes--,Fe.usedTimes===0&&j(T)),I.__cacheKey=Se,I.__webglTexture=xe[Se].texture}return ie}function Le(I,T,ie){let ve=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=35866),T.isData3DTexture&&(ve=32879);const xe=De(I,T),Se=T.source;t.bindTexture(ve,I.__webglTexture,33984+ie);const Fe=n.get(Se);if(Se.version!==Fe.__version||xe===!0){t.activeTexture(33984+ie),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const U=R(T)&&F(T.image)===!1;let X=A(T.image,U,!1,m);X=It(T,X);const Ee=F(X)||l,ye=s.convert(T.format,T.encoding);let Ie=s.convert(T.type),Ne=E(T.internalFormat,ye,Ie,T.encoding,T.isVideoTexture);Pe(ve,T,Ee);let ze;const Ke=T.mipmaps,tt=l&&T.isVideoTexture!==!0,lt=Fe.__version===void 0||xe===!0,G=z(T,X,Ee);if(T.isDepthTexture)Ne=6402,l?T.type===Di?Ne=36012:T.type===Ci?Ne=33190:T.type===cr?Ne=35056:Ne=33189:T.type===Di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Li&&Ne===6402&&T.type!==xu&&T.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ci,Ie=s.convert(T.type)),T.format===hr&&Ne===6402&&(Ne=34041,T.type!==cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=cr,Ie=s.convert(T.type))),lt&&(tt?t.texStorage2D(3553,1,Ne,X.width,X.height):t.texImage2D(3553,0,Ne,X.width,X.height,0,ye,Ie,null));else if(T.isDataTexture)if(Ke.length>0&&Ee){tt&&lt&&t.texStorage2D(3553,G,Ne,Ke[0].width,Ke[0].height);for(let re=0,ge=Ke.length;re<ge;re++)ze=Ke[re],tt?t.texSubImage2D(3553,re,0,0,ze.width,ze.height,ye,Ie,ze.data):t.texImage2D(3553,re,Ne,ze.width,ze.height,0,ye,Ie,ze.data);T.generateMipmaps=!1}else tt?(lt&&t.texStorage2D(3553,G,Ne,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,ye,Ie,X.data)):t.texImage2D(3553,0,Ne,X.width,X.height,0,ye,Ie,X.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){tt&&lt&&t.texStorage3D(35866,G,Ne,Ke[0].width,Ke[0].height,X.depth);for(let re=0,ge=Ke.length;re<ge;re++)ze=Ke[re],T.format!==Cn?ye!==null?tt?t.compressedTexSubImage3D(35866,re,0,0,0,ze.width,ze.height,X.depth,ye,ze.data,0,0):t.compressedTexImage3D(35866,re,Ne,ze.width,ze.height,X.depth,0,ze.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(35866,re,0,0,0,ze.width,ze.height,X.depth,ye,Ie,ze.data):t.texImage3D(35866,re,Ne,ze.width,ze.height,X.depth,0,ye,Ie,ze.data)}else{tt&&lt&&t.texStorage2D(3553,G,Ne,Ke[0].width,Ke[0].height);for(let re=0,ge=Ke.length;re<ge;re++)ze=Ke[re],T.format!==Cn?ye!==null?tt?t.compressedTexSubImage2D(3553,re,0,0,ze.width,ze.height,ye,ze.data):t.compressedTexImage2D(3553,re,Ne,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(3553,re,0,0,ze.width,ze.height,ye,Ie,ze.data):t.texImage2D(3553,re,Ne,ze.width,ze.height,0,ye,Ie,ze.data)}else if(T.isDataArrayTexture)tt?(lt&&t.texStorage3D(35866,G,Ne,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,ye,Ie,X.data)):t.texImage3D(35866,0,Ne,X.width,X.height,X.depth,0,ye,Ie,X.data);else if(T.isData3DTexture)tt?(lt&&t.texStorage3D(32879,G,Ne,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,ye,Ie,X.data)):t.texImage3D(32879,0,Ne,X.width,X.height,X.depth,0,ye,Ie,X.data);else if(T.isFramebufferTexture){if(lt)if(tt)t.texStorage2D(3553,G,Ne,X.width,X.height);else{let re=X.width,ge=X.height;for(let Ae=0;Ae<G;Ae++)t.texImage2D(3553,Ae,Ne,re,ge,0,ye,Ie,null),re>>=1,ge>>=1}}else if(Ke.length>0&&Ee){tt&&lt&&t.texStorage2D(3553,G,Ne,Ke[0].width,Ke[0].height);for(let re=0,ge=Ke.length;re<ge;re++)ze=Ke[re],tt?t.texSubImage2D(3553,re,0,0,ye,Ie,ze):t.texImage2D(3553,re,Ne,ye,Ie,ze);T.generateMipmaps=!1}else tt?(lt&&t.texStorage2D(3553,G,Ne,X.width,X.height),t.texSubImage2D(3553,0,0,0,ye,Ie,X)):t.texImage2D(3553,0,Ne,ye,Ie,X);B(T,Ee)&&K(ve),Fe.__version=Se.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Ce(I,T,ie){if(T.image.length!==6)return;const ve=De(I,T),xe=T.source;t.bindTexture(34067,I.__webglTexture,33984+ie);const Se=n.get(xe);if(xe.version!==Se.__version||ve===!0){t.activeTexture(33984+ie),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,X=[];for(let re=0;re<6;re++)!Fe&&!U?X[re]=A(T.image[re],!1,!0,p):X[re]=U?T.image[re].image:T.image[re],X[re]=It(T,X[re]);const Ee=X[0],ye=F(Ee)||l,Ie=s.convert(T.format,T.encoding),Ne=s.convert(T.type),ze=E(T.internalFormat,Ie,Ne,T.encoding),Ke=l&&T.isVideoTexture!==!0,tt=Se.__version===void 0||ve===!0;let lt=z(T,Ee,ye);Pe(34067,T,ye);let G;if(Fe){Ke&&tt&&t.texStorage2D(34067,lt,ze,Ee.width,Ee.height);for(let re=0;re<6;re++){G=X[re].mipmaps;for(let ge=0;ge<G.length;ge++){const Ae=G[ge];T.format!==Cn?Ie!==null?Ke?t.compressedTexSubImage2D(34069+re,ge,0,0,Ae.width,Ae.height,Ie,Ae.data):t.compressedTexImage2D(34069+re,ge,ze,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(34069+re,ge,0,0,Ae.width,Ae.height,Ie,Ne,Ae.data):t.texImage2D(34069+re,ge,ze,Ae.width,Ae.height,0,Ie,Ne,Ae.data)}}}else{G=T.mipmaps,Ke&&tt&&(G.length>0&&lt++,t.texStorage2D(34067,lt,ze,X[0].width,X[0].height));for(let re=0;re<6;re++)if(U){Ke?t.texSubImage2D(34069+re,0,0,0,X[re].width,X[re].height,Ie,Ne,X[re].data):t.texImage2D(34069+re,0,ze,X[re].width,X[re].height,0,Ie,Ne,X[re].data);for(let ge=0;ge<G.length;ge++){const Te=G[ge].image[re].image;Ke?t.texSubImage2D(34069+re,ge+1,0,0,Te.width,Te.height,Ie,Ne,Te.data):t.texImage2D(34069+re,ge+1,ze,Te.width,Te.height,0,Ie,Ne,Te.data)}}else{Ke?t.texSubImage2D(34069+re,0,0,0,Ie,Ne,X[re]):t.texImage2D(34069+re,0,ze,Ie,Ne,X[re]);for(let ge=0;ge<G.length;ge++){const Ae=G[ge];Ke?t.texSubImage2D(34069+re,ge+1,0,0,Ie,Ne,Ae.image[re]):t.texImage2D(34069+re,ge+1,ze,Ie,Ne,Ae.image[re])}}}B(T,ye)&&K(34067),Se.__version=xe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Be(I,T,ie,ve,xe){const Se=s.convert(ie.format,ie.encoding),Fe=s.convert(ie.type),U=E(ie.internalFormat,Se,Fe,ie.encoding);n.get(T).__hasExternalTextures||(xe===32879||xe===35866?t.texImage3D(xe,0,U,T.width,T.height,T.depth,0,Se,Fe,null):t.texImage2D(xe,0,U,T.width,T.height,0,Se,Fe,null)),t.bindFramebuffer(36160,I),dt(T)?v.framebufferTexture2DMultisampleEXT(36160,ve,xe,n.get(ie).__webglTexture,0,at(T)):(xe===3553||xe>=34069&&xe<=34074)&&a.framebufferTexture2D(36160,ve,xe,n.get(ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(I,T,ie){if(a.bindRenderbuffer(36161,I),T.depthBuffer&&!T.stencilBuffer){let ve=33189;if(ie||dt(T)){const xe=T.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Di?ve=36012:xe.type===Ci&&(ve=33190));const Se=at(T);dt(T)?v.renderbufferStorageMultisampleEXT(36161,Se,ve,T.width,T.height):a.renderbufferStorageMultisample(36161,Se,ve,T.width,T.height)}else a.renderbufferStorage(36161,ve,T.width,T.height);a.framebufferRenderbuffer(36160,36096,36161,I)}else if(T.depthBuffer&&T.stencilBuffer){const ve=at(T);ie&&dt(T)===!1?a.renderbufferStorageMultisample(36161,ve,35056,T.width,T.height):dt(T)?v.renderbufferStorageMultisampleEXT(36161,ve,35056,T.width,T.height):a.renderbufferStorage(36161,34041,T.width,T.height),a.framebufferRenderbuffer(36160,33306,36161,I)}else{const ve=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let xe=0;xe<ve.length;xe++){const Se=ve[xe],Fe=s.convert(Se.format,Se.encoding),U=s.convert(Se.type),X=E(Se.internalFormat,Fe,U,Se.encoding),Ee=at(T);ie&&dt(T)===!1?a.renderbufferStorageMultisample(36161,Ee,X,T.width,T.height):dt(T)?v.renderbufferStorageMultisampleEXT(36161,Ee,X,T.width,T.height):a.renderbufferStorage(36161,X,T.width,T.height)}}a.bindRenderbuffer(36161,null)}function Ye(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe(T.depthTexture,0);const ve=n.get(T.depthTexture).__webglTexture,xe=at(T);if(T.depthTexture.format===Li)dt(T)?v.framebufferTexture2DMultisampleEXT(36160,36096,3553,ve,0,xe):a.framebufferTexture2D(36160,36096,3553,ve,0);else if(T.depthTexture.format===hr)dt(T)?v.framebufferTexture2DMultisampleEXT(36160,33306,3553,ve,0,xe):a.framebufferTexture2D(36160,33306,3553,ve,0);else throw new Error("Unknown depthTexture format")}function rt(I){const T=n.get(I),ie=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Ye(T.__webglFramebuffer,I)}else if(ie){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(36160,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]=a.createRenderbuffer(),He(T.__webglDepthbuffer[ve],I,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=a.createRenderbuffer(),He(T.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function Et(I,T,ie){const ve=n.get(I);T!==void 0&&Be(ve.__webglFramebuffer,I,I.texture,36064,3553),ie!==void 0&&rt(I)}function je(I){const T=I.texture,ie=n.get(I),ve=n.get(T);I.addEventListener("dispose",ue),I.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture()),ve.__version=T.version,d.memory.textures++);const xe=I.isWebGLCubeRenderTarget===!0,Se=I.isWebGLMultipleRenderTargets===!0,Fe=F(I)||l;if(xe){ie.__webglFramebuffer=[];for(let U=0;U<6;U++)ie.__webglFramebuffer[U]=a.createFramebuffer()}else{if(ie.__webglFramebuffer=a.createFramebuffer(),Se)if(r.drawBuffers){const U=I.texture;for(let X=0,Ee=U.length;X<Ee;X++){const ye=n.get(U[X]);ye.__webglTexture===void 0&&(ye.__webglTexture=a.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&I.samples>0&&dt(I)===!1){const U=Se?T:[T];ie.__webglMultisampledFramebuffer=a.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer);for(let X=0;X<U.length;X++){const Ee=U[X];ie.__webglColorRenderbuffer[X]=a.createRenderbuffer(),a.bindRenderbuffer(36161,ie.__webglColorRenderbuffer[X]);const ye=s.convert(Ee.format,Ee.encoding),Ie=s.convert(Ee.type),Ne=E(Ee.internalFormat,ye,Ie,Ee.encoding,I.isXRRenderTarget===!0),ze=at(I);a.renderbufferStorageMultisample(36161,ze,Ne,I.width,I.height),a.framebufferRenderbuffer(36160,36064+X,36161,ie.__webglColorRenderbuffer[X])}a.bindRenderbuffer(36161,null),I.depthBuffer&&(ie.__webglDepthRenderbuffer=a.createRenderbuffer(),He(ie.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}}if(xe){t.bindTexture(34067,ve.__webglTexture),Pe(34067,T,Fe);for(let U=0;U<6;U++)Be(ie.__webglFramebuffer[U],I,T,36064,34069+U);B(T,Fe)&&K(34067),t.unbindTexture()}else if(Se){const U=I.texture;for(let X=0,Ee=U.length;X<Ee;X++){const ye=U[X],Ie=n.get(ye);t.bindTexture(3553,Ie.__webglTexture),Pe(3553,ye,Fe),Be(ie.__webglFramebuffer,I,ye,36064+X,3553),B(ye,Fe)&&K(3553)}t.unbindTexture()}else{let U=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(l?U=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(U,ve.__webglTexture),Pe(U,T,Fe),Be(ie.__webglFramebuffer,I,T,36064,U),B(T,Fe)&&K(U),t.unbindTexture()}I.depthBuffer&&rt(I)}function Tt(I){const T=F(I)||l,ie=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ve=0,xe=ie.length;ve<xe;ve++){const Se=ie[ve];if(B(Se,T)){const Fe=I.isWebGLCubeRenderTarget?34067:3553,U=n.get(Se).__webglTexture;t.bindTexture(Fe,U),K(Fe),t.unbindTexture()}}}function At(I){if(l&&I.samples>0&&dt(I)===!1){const T=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],ie=I.width,ve=I.height;let xe=16384;const Se=[],Fe=I.stencilBuffer?33306:36096,U=n.get(I),X=I.isWebGLMultipleRenderTargets===!0;if(X)for(let Ee=0;Ee<T.length;Ee++)t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,U.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,U.__webglFramebuffer);for(let Ee=0;Ee<T.length;Ee++){Se.push(36064+Ee),I.depthBuffer&&Se.push(Fe);const ye=U.__ignoreDepthValues!==void 0?U.__ignoreDepthValues:!1;if(ye===!1&&(I.depthBuffer&&(xe|=256),I.stencilBuffer&&(xe|=1024)),X&&a.framebufferRenderbuffer(36008,36064,36161,U.__webglColorRenderbuffer[Ee]),ye===!0&&(a.invalidateFramebuffer(36008,[Fe]),a.invalidateFramebuffer(36009,[Fe])),X){const Ie=n.get(T[Ee]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Ie,0)}a.blitFramebuffer(0,0,ie,ve,0,0,ie,ve,xe,9728),M&&a.invalidateFramebuffer(36008,Se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let Ee=0;Ee<T.length;Ee++){t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Ee,36161,U.__webglColorRenderbuffer[Ee]);const ye=n.get(T[Ee]).__webglTexture;t.bindFramebuffer(36160,U.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Ee,3553,ye,0)}t.bindFramebuffer(36009,U.__webglMultisampledFramebuffer)}}function at(I){return Math.min(g,I.samples)}function dt(I){const T=n.get(I);return l&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Kt(I){const T=d.render.frame;C.get(I)!==T&&(C.set(I,T),I.update())}function It(I,T){const ie=I.encoding,ve=I.format,xe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Ca||ie!==Oi&&(ie===mt?l===!1?e.has("EXT_sRGB")===!0&&ve===Cn?(I.format=Ca,I.minFilter=bn,I.generateMipmaps=!1):T=Mu.sRGBToLinear(T):(ve!==Cn||xe!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ie)),T}this.allocateTextureUnit=ce,this.resetTextureUnits=_e,this.setTexture2D=pe,this.setTexture2DArray=Re,this.setTexture3D=ee,this.setTextureCube=fe,this.rebindTextures=Et,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=dt}function h0(a,e,t){const n=t.isWebGL2;function r(s,d=null){let l;if(s===Ii)return 5121;if(s===Qf)return 32819;if(s===eh)return 32820;if(s===$f)return 5120;if(s===Zf)return 5122;if(s===xu)return 5123;if(s===Jf)return 5124;if(s===Ci)return 5125;if(s===Di)return 5126;if(s===Jr)return n?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===th)return 6406;if(s===Cn)return 6408;if(s===nh)return 6409;if(s===ih)return 6410;if(s===Li)return 6402;if(s===hr)return 34041;if(s===Ca)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===rh)return 6403;if(s===oh)return 36244;if(s===sh)return 33319;if(s===ah)return 33320;if(s===lh)return 36249;if(s===Vs||s===Hs||s===Ws||s===js)if(d===mt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Vs)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hs)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ws)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===js)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Vs)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hs)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ws)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===js)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xl||s===Yl||s===Kl||s===$l)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Xl)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yl)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kl)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$l)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ch)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zl||s===Jl)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Zl)return d===mt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Jl)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc||s===oc||s===sc||s===ac||s===lc||s===cc||s===uc||s===dc||s===fc)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Ql)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ec)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ic)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ac)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qs)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===qs)return d===mt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===uh||s===hc||s===pc||s===mc)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===qs)return l.COMPRESSED_RED_RGTC1_EXT;if(s===hc)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cr?n?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:r}}class p0 extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yr extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m0={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,d=null;const l=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,n),P=this._getHandJoint(p,b);y!==null&&(P.matrix.fromArray(y.transform.matrix),P.matrix.decompose(P.position,P.rotation,P.scale),P.jointRadius=y.radius),P.visible=y!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=m.position.distanceTo(g.position),M=.02,C=.005;p.inputState.pinching&&v>M+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=s!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class g0 extends ln{constructor(e,t,n,r,s,d,l,h,p,m){if(m=m!==void 0?m:Li,m!==Li&&m!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===Li&&(n=Ci),n===void 0&&m===hr&&(n=cr),super(null,r,s,d,l,h,m,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:tn,this.minFilter=h!==void 0?h:tn,this.flipY=!1,this.generateMipmaps=!1}}class v0 extends Fi{constructor(e,t){super();const n=this;let r=null,s=1,d=null,l="local-floor",h=1,p=null,m=null,g=null,v=null,M=null,C=null;const b=t.getContextAttributes();let y=null,P=null;const O=[],A=[],F=new Set,R=new Map,B=new pn;B.layers.enable(1),B.viewport=new bt;const K=new pn;K.layers.enable(2),K.viewport=new bt;const E=[B,K],z=new p0;z.layers.enable(1),z.layers.enable(2);let W=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=O[ee];return fe===void 0&&(fe=new _a,O[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=O[ee];return fe===void 0&&(fe=new _a,O[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=O[ee];return fe===void 0&&(fe=new _a,O[ee]=fe),fe.getHandSpace()};function ue(ee){const fe=A.indexOf(ee.inputSource);if(fe===-1)return;const te=O[fe];te!==void 0&&te.dispatchEvent({type:ee.type,data:ee.inputSource})}function J(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",j);for(let ee=0;ee<O.length;ee++){const fe=A[ee];fe!==null&&(A[ee]=null,O[ee].disconnect(fe))}W=null,le=null,e.setRenderTarget(y),M=null,v=null,g=null,r=null,P=null,Re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){l=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return g},this.getFrame=function(){return C},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",J),r.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?b.antialias:!0,alpha:b.alpha,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};M=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:M}),P=new Ln(M.framebufferWidth,M.framebufferHeight,{format:Cn,type:Ii,encoding:e.outputEncoding,stencilBuffer:b.stencil})}else{let fe=null,te=null,Z=null;b.depth&&(Z=b.stencil?35056:33190,fe=b.stencil?hr:Li,te=b.stencil?cr:Ci);const Pe={colorFormat:32856,depthFormat:Z,scaleFactor:s};g=new XRWebGLBinding(r,t),v=g.createProjectionLayer(Pe),r.updateRenderState({layers:[v]}),P=new Ln(v.textureWidth,v.textureHeight,{format:Cn,type:Ii,depthTexture:new g0(v.textureWidth,v.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,encoding:e.outputEncoding,samples:b.antialias?4:0});const De=e.properties.get(P);De.__ignoreDepthValues=v.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,d=await r.requestReferenceSpace(l),Re.setContext(r),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function j(ee){for(let fe=0;fe<ee.removed.length;fe++){const te=ee.removed[fe],Z=A.indexOf(te);Z>=0&&(A[Z]=null,O[Z].disconnect(te))}for(let fe=0;fe<ee.added.length;fe++){const te=ee.added[fe];let Z=A.indexOf(te);if(Z===-1){for(let De=0;De<O.length;De++)if(De>=A.length){A.push(te),Z=De;break}else if(A[De]===null){A[De]=te,Z=De;break}if(Z===-1)break}const Pe=O[Z];Pe&&Pe.connect(te)}}const V=new H,ae=new H;function _e(ee,fe,te){V.setFromMatrixPosition(fe.matrixWorld),ae.setFromMatrixPosition(te.matrixWorld);const Z=V.distanceTo(ae),Pe=fe.projectionMatrix.elements,De=te.projectionMatrix.elements,Le=Pe[14]/(Pe[10]-1),Ce=Pe[14]/(Pe[10]+1),Be=(Pe[9]+1)/Pe[5],He=(Pe[9]-1)/Pe[5],Ye=(Pe[8]-1)/Pe[0],rt=(De[8]+1)/De[0],Et=Le*Ye,je=Le*rt,Tt=Z/(-Ye+rt),At=Tt*-Ye;fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(At),ee.translateZ(Tt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const at=Le+Tt,dt=Ce+Tt,Kt=Et-At,It=je+(Z-At),I=Be*Ce/dt*at,T=He*Ce/dt*at;ee.projectionMatrix.makePerspective(Kt,It,I,T,at,dt)}function ce(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;z.near=K.near=B.near=ee.near,z.far=K.far=B.far=ee.far,(W!==z.near||le!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),W=z.near,le=z.far);const fe=ee.parent,te=z.cameras;ce(z,fe);for(let Pe=0;Pe<te.length;Pe++)ce(te[Pe],fe);z.matrixWorld.decompose(z.position,z.quaternion,z.scale),ee.matrix.copy(z.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale);const Z=ee.children;for(let Pe=0,De=Z.length;Pe<De;Pe++)Z[Pe].updateMatrixWorld(!0);te.length===2?_e(z,B,K):z.projectionMatrix.copy(B.projectionMatrix)},this.getCamera=function(){return z},this.getFoveation=function(){if(!(v===null&&M===null))return h},this.setFoveation=function(ee){h=ee,v!==null&&(v.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.getPlanes=function(){return F};let de=null;function pe(ee,fe){if(m=fe.getViewerPose(p||d),C=fe,m!==null){const te=m.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Z=!1;te.length!==z.cameras.length&&(z.cameras.length=0,Z=!0);for(let Pe=0;Pe<te.length;Pe++){const De=te[Pe];let Le=null;if(M!==null)Le=M.getViewport(De);else{const Be=g.getViewSubImage(v,De);Le=Be.viewport,Pe===0&&(e.setRenderTargetTextures(P,Be.colorTexture,v.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(P))}let Ce=E[Pe];Ce===void 0&&(Ce=new pn,Ce.layers.enable(Pe),Ce.viewport=new bt,E[Pe]=Ce),Ce.matrix.fromArray(De.transform.matrix),Ce.projectionMatrix.fromArray(De.projectionMatrix),Ce.viewport.set(Le.x,Le.y,Le.width,Le.height),Pe===0&&z.matrix.copy(Ce.matrix),Z===!0&&z.cameras.push(Ce)}}for(let te=0;te<O.length;te++){const Z=A[te],Pe=O[te];Z!==null&&Pe!==void 0&&Pe.update(Z,fe,p||d)}if(de&&de(ee,fe),fe.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:fe.detectedPlanes});let te=null;for(const Z of F)fe.detectedPlanes.has(Z)||(te===null&&(te=[]),te.push(Z));if(te!==null)for(const Z of te)F.delete(Z),R.delete(Z),n.dispatchEvent({type:"planeremoved",data:Z});for(const Z of fe.detectedPlanes)if(!F.has(Z))F.add(Z),R.set(Z,fe.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Z});else{const Pe=R.get(Z);Z.lastChangedTime>Pe&&(R.set(Z,Z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Z}))}}C=null}const Re=new Ru;Re.setAnimationLoop(pe),this.setAnimationLoop=function(ee){de=ee},this.dispose=function(){}}}function _0(a,e){function t(b,y){y.color.getRGB(b.fogColor.value,Cu(a)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function n(b,y,P,O,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?r(b,y):y.isMeshToonMaterial?(r(b,y),m(b,y)):y.isMeshPhongMaterial?(r(b,y),p(b,y)):y.isMeshStandardMaterial?(r(b,y),g(b,y),y.isMeshPhysicalMaterial&&v(b,y,A)):y.isMeshMatcapMaterial?(r(b,y),M(b,y)):y.isMeshDepthMaterial?r(b,y):y.isMeshDistanceMaterial?(r(b,y),C(b,y)):y.isMeshNormalMaterial?r(b,y):y.isLineBasicMaterial?(s(b,y),y.isLineDashedMaterial&&d(b,y)):y.isPointsMaterial?l(b,y,P,O):y.isSpriteMaterial?h(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function r(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map),y.alphaMap&&(b.alphaMap.value=y.alphaMap),y.bumpMap&&(b.bumpMap.value=y.bumpMap,b.bumpScale.value=y.bumpScale,y.side===gn&&(b.bumpScale.value*=-1)),y.displacementMap&&(b.displacementMap.value=y.displacementMap,b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap),y.normalMap&&(b.normalMap.value=y.normalMap,b.normalScale.value.copy(y.normalScale),y.side===gn&&b.normalScale.value.negate()),y.specularMap&&(b.specularMap.value=y.specularMap),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const P=e.get(y).envMap;if(P&&(b.envMap.value=P,b.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap){b.lightMap.value=y.lightMap;const F=a.useLegacyLights===!0?Math.PI:1;b.lightMapIntensity.value=y.lightMapIntensity*F}y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity);let O;y.map?O=y.map:y.specularMap?O=y.specularMap:y.displacementMap?O=y.displacementMap:y.normalMap?O=y.normalMap:y.bumpMap?O=y.bumpMap:y.roughnessMap?O=y.roughnessMap:y.metalnessMap?O=y.metalnessMap:y.alphaMap?O=y.alphaMap:y.emissiveMap?O=y.emissiveMap:y.clearcoatMap?O=y.clearcoatMap:y.clearcoatNormalMap?O=y.clearcoatNormalMap:y.clearcoatRoughnessMap?O=y.clearcoatRoughnessMap:y.iridescenceMap?O=y.iridescenceMap:y.iridescenceThicknessMap?O=y.iridescenceThicknessMap:y.specularIntensityMap?O=y.specularIntensityMap:y.specularColorMap?O=y.specularColorMap:y.transmissionMap?O=y.transmissionMap:y.thicknessMap?O=y.thicknessMap:y.sheenColorMap?O=y.sheenColorMap:y.sheenRoughnessMap&&(O=y.sheenRoughnessMap),O!==void 0&&(O.isWebGLRenderTarget&&(O=O.texture),O.matrixAutoUpdate===!0&&O.updateMatrix(),b.uvTransform.value.copy(O.matrix));let A;y.aoMap?A=y.aoMap:y.lightMap&&(A=y.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),b.uv2Transform.value.copy(A.matrix))}function s(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity}function d(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function l(b,y,P,O){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*P,b.scale.value=O*.5,y.map&&(b.map.value=y.map),y.alphaMap&&(b.alphaMap.value=y.alphaMap),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);let A;y.map?A=y.map:y.alphaMap&&(A=y.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),b.uvTransform.value.copy(A.matrix))}function h(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map),y.alphaMap&&(b.alphaMap.value=y.alphaMap),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);let P;y.map?P=y.map:y.alphaMap&&(P=y.alphaMap),P!==void 0&&(P.matrixAutoUpdate===!0&&P.updateMatrix(),b.uvTransform.value.copy(P.matrix))}function p(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function m(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function g(b,y){b.roughness.value=y.roughness,b.metalness.value=y.metalness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap),y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap),e.get(y).envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function v(b,y,P){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap)),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap),y.clearcoatNormalMap&&(b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),b.clearcoatNormalMap.value=y.clearcoatNormalMap,y.side===gn&&b.clearcoatNormalScale.value.negate())),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap)),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap)}function M(b,y){y.matcap&&(b.matcap.value=y.matcap)}function C(b,y){b.referencePosition.value.copy(y.referencePosition),b.nearDistance.value=y.nearDistance,b.farDistance.value=y.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function x0(a,e,t,n){let r={},s={},d=[];const l=t.isWebGL2?a.getParameter(35375):0;function h(O,A){const F=A.program;n.uniformBlockBinding(O,F)}function p(O,A){let F=r[O.id];F===void 0&&(C(O),F=m(O),r[O.id]=F,O.addEventListener("dispose",y));const R=A.program;n.updateUBOMapping(O,R);const B=e.render.frame;s[O.id]!==B&&(v(O),s[O.id]=B)}function m(O){const A=g();O.__bindingPointIndex=A;const F=a.createBuffer(),R=O.__size,B=O.usage;return a.bindBuffer(35345,F),a.bufferData(35345,R,B),a.bindBuffer(35345,null),a.bindBufferBase(35345,A,F),F}function g(){for(let O=0;O<l;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const A=r[O.id],F=O.uniforms,R=O.__cache;a.bindBuffer(35345,A);for(let B=0,K=F.length;B<K;B++){const E=F[B];if(M(E,B,R)===!0){const z=E.__offset,W=Array.isArray(E.value)?E.value:[E.value];let le=0;for(let ue=0;ue<W.length;ue++){const J=W[ue],j=b(J);typeof J=="number"?(E.__data[0]=J,a.bufferSubData(35345,z+le,E.__data)):J.isMatrix3?(E.__data[0]=J.elements[0],E.__data[1]=J.elements[1],E.__data[2]=J.elements[2],E.__data[3]=J.elements[0],E.__data[4]=J.elements[3],E.__data[5]=J.elements[4],E.__data[6]=J.elements[5],E.__data[7]=J.elements[0],E.__data[8]=J.elements[6],E.__data[9]=J.elements[7],E.__data[10]=J.elements[8],E.__data[11]=J.elements[0]):(J.toArray(E.__data,le),le+=j.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,z,E.__data)}}a.bindBuffer(35345,null)}function M(O,A,F){const R=O.value;if(F[A]===void 0){if(typeof R=="number")F[A]=R;else{const B=Array.isArray(R)?R:[R],K=[];for(let E=0;E<B.length;E++)K.push(B[E].clone());F[A]=K}return!0}else if(typeof R=="number"){if(F[A]!==R)return F[A]=R,!0}else{const B=Array.isArray(F[A])?F[A]:[F[A]],K=Array.isArray(R)?R:[R];for(let E=0;E<B.length;E++){const z=B[E];if(z.equals(K[E])===!1)return z.copy(K[E]),!0}}return!1}function C(O){const A=O.uniforms;let F=0;const R=16;let B=0;for(let K=0,E=A.length;K<E;K++){const z=A[K],W={boundary:0,storage:0},le=Array.isArray(z.value)?z.value:[z.value];for(let ue=0,J=le.length;ue<J;ue++){const j=le[ue],V=b(j);W.boundary+=V.boundary,W.storage+=V.storage}if(z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=F,K>0){B=F%R;const ue=R-B;B!==0&&ue-W.boundary<0&&(F+=R-B,z.__offset=F)}F+=W.storage}return B=F%R,B>0&&(F+=R-B),O.__size=F,O.__cache={},this}function b(O){const A={boundary:0,storage:0};return typeof O=="number"?(A.boundary=4,A.storage=4):O.isVector2?(A.boundary=8,A.storage=8):O.isVector3||O.isColor?(A.boundary=16,A.storage=12):O.isVector4?(A.boundary=16,A.storage=16):O.isMatrix3?(A.boundary=48,A.storage=48):O.isMatrix4?(A.boundary=64,A.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),A}function y(O){const A=O.target;A.removeEventListener("dispose",y);const F=d.indexOf(A.__bindingPointIndex);d.splice(F,1),a.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function P(){for(const O in r)a.deleteBuffer(r[O]);d=[],r={},s={}}return{bind:h,update:p,dispose:P}}function y0(){const a=eo("canvas");return a.style.display="block",a}function Ha(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:y0(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,r=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,d=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,l=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,h=a.powerPreference!==void 0?a.powerPreference:"default",p=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let m;t!==null?m=t.getContextAttributes().alpha:m=a.alpha!==void 0?a.alpha:!1;let g=null,v=null;const M=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Oi,this.useLegacyLights=!0,this.toneMapping=Gn,this.toneMappingExposure=1;const b=this;let y=!1,P=0,O=0,A=null,F=-1,R=null;const B=new bt,K=new bt;let E=null,z=e.width,W=e.height,le=1,ue=null,J=null;const j=new bt(0,0,z,W),V=new bt(0,0,z,W);let ae=!1;const _e=new ka;let ce=!1,de=!1,pe=null;const Re=new Rt,ee=new H,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return A===null?le:1}let Z=t;function Pe(L,$){for(let oe=0;oe<L.length;oe++){const Y=L[oe],ne=e.getContext(Y,$);if(ne!==null)return ne}return null}try{const L={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:d,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Na}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",ze,!1),Z===null){const $=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&$.shift(),Z=Pe($,L),Z===null)throw Pe($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let De,Le,Ce,Be,He,Ye,rt,Et,je,Tt,At,at,dt,Kt,It,I,T,ie,ve,xe,Se,Fe,U,X;function Ee(){De=new Lg(Z),Le=new Eg(Z,De,a),De.init(Le),Fe=new h0(Z,De,Le),Ce=new d0(Z,De,Le),Be=new Og,He=new Zv,Ye=new f0(Z,De,Ce,He,Le,Fe,Be),rt=new Ag(b),Et=new Dg(b),je=new Hh(Z,Le),U=new Sg(Z,De,je,Le),Tt=new Rg(Z,je,Be,U),At=new Ug(Z,Tt,je,Be),ve=new Fg(Z,Le,Ye),I=new Tg(He),at=new $v(b,rt,Et,De,Le,U,I),dt=new _0(b,He),Kt=new Qv,It=new o0(De,Le),ie=new Mg(b,rt,Et,Ce,At,m,d),T=new u0(b,At,Le),X=new x0(Z,Be,Le,Ce),xe=new wg(Z,De,Be,Le),Se=new Ig(Z,De,Be,Le),Be.programs=at.programs,b.capabilities=Le,b.extensions=De,b.properties=He,b.renderLists=Kt,b.shadowMap=T,b.state=Ce,b.info=Be}Ee();const ye=new v0(b,Z);this.xr=ye,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const L=De.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=De.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(L){L!==void 0&&(le=L,this.setSize(z,W,!1))},this.getSize=function(L){return L.set(z,W)},this.setSize=function(L,$,oe=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=L,W=$,e.width=Math.floor(L*le),e.height=Math.floor($*le),oe===!0&&(e.style.width=L+"px",e.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(z*le,W*le).floor()},this.setDrawingBufferSize=function(L,$,oe){z=L,W=$,le=oe,e.width=Math.floor(L*oe),e.height=Math.floor($*oe),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(B)},this.getViewport=function(L){return L.copy(j)},this.setViewport=function(L,$,oe,Y){L.isVector4?j.set(L.x,L.y,L.z,L.w):j.set(L,$,oe,Y),Ce.viewport(B.copy(j).multiplyScalar(le).floor())},this.getScissor=function(L){return L.copy(V)},this.setScissor=function(L,$,oe,Y){L.isVector4?V.set(L.x,L.y,L.z,L.w):V.set(L,$,oe,Y),Ce.scissor(K.copy(V).multiplyScalar(le).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(L){Ce.setScissorTest(ae=L)},this.setOpaqueSort=function(L){ue=L},this.setTransparentSort=function(L){J=L},this.getClearColor=function(L){return L.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(L=!0,$=!0,oe=!0){let Y=0;L&&(Y|=16384),$&&(Y|=256),oe&&(Y|=1024),Z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),Kt.dispose(),It.dispose(),He.dispose(),rt.dispose(),Et.dispose(),At.dispose(),U.dispose(),X.dispose(),at.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ge),ye.removeEventListener("sessionend",Ae),pe&&(pe.dispose(),pe=null),Te.stop()};function Ie(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const L=Be.autoReset,$=T.enabled,oe=T.autoUpdate,Y=T.needsUpdate,ne=T.type;Ee(),Be.autoReset=L,T.enabled=$,T.autoUpdate=oe,T.needsUpdate=Y,T.type=ne}function ze(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ke(L){const $=L.target;$.removeEventListener("dispose",Ke),tt($)}function tt(L){lt(L),He.remove(L)}function lt(L){const $=He.get(L).programs;$!==void 0&&($.forEach(function(oe){at.releaseProgram(oe)}),L.isShaderMaterial&&at.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,oe,Y,ne,Ue){$===null&&($=fe);const We=ne.isMesh&&ne.matrixWorld.determinant()<0,$e=ds(L,$,oe,Y,ne);Ce.setMaterial(Y,We);let Je=oe.index,Qe=1;Y.wireframe===!0&&(Je=Tt.getWireframeAttribute(oe),Qe=2);const nt=oe.drawRange,ot=oe.attributes.position;let Mt=nt.start*Qe,jt=(nt.start+nt.count)*Qe;Ue!==null&&(Mt=Math.max(Mt,Ue.start*Qe),jt=Math.min(jt,(Ue.start+Ue.count)*Qe)),Je!==null?(Mt=Math.max(Mt,0),jt=Math.min(jt,Je.count)):ot!=null&&(Mt=Math.max(Mt,0),jt=Math.min(jt,ot.count));const sn=jt-Mt;if(sn<0||sn===1/0)return;U.setup(ne,Y,$e,oe,Je);let On,xt=xe;if(Je!==null&&(On=je.get(Je),xt=Se,xt.setIndex(On)),ne.isMesh)Y.wireframe===!0?(Ce.setLineWidth(Y.wireframeLinewidth*te()),xt.setMode(1)):xt.setMode(4);else if(ne.isLine){let it=Y.linewidth;it===void 0&&(it=1),Ce.setLineWidth(it*te()),ne.isLineSegments?xt.setMode(1):ne.isLineLoop?xt.setMode(2):xt.setMode(3)}else ne.isPoints?xt.setMode(0):ne.isSprite&&xt.setMode(4);if(ne.isInstancedMesh)xt.renderInstances(Mt,sn,ne.count);else if(oe.isInstancedBufferGeometry){const it=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,xr=Math.min(oe.instanceCount,it);xt.renderInstances(Mt,sn,xr)}else xt.render(Mt,sn)},this.compile=function(L,$){function oe(Y,ne,Ue){Y.transparent===!0&&Y.side===ui&&Y.forceSinglePass===!1?(Y.side=gn,Y.needsUpdate=!0,Ct(Y,ne,Ue),Y.side=pi,Y.needsUpdate=!0,Ct(Y,ne,Ue),Y.side=ui):Ct(Y,ne,Ue)}v=It.get(L),v.init(),C.push(v),L.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights(b.useLegacyLights),L.traverse(function(Y){const ne=Y.material;if(ne)if(Array.isArray(ne))for(let Ue=0;Ue<ne.length;Ue++){const We=ne[Ue];oe(We,L,Y)}else oe(ne,L,Y)}),C.pop(),v=null};let G=null;function re(L){G&&G(L)}function ge(){Te.stop()}function Ae(){Te.start()}const Te=new Ru;Te.setAnimationLoop(re),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(L){G=L,ye.setAnimationLoop(L),L===null?Te.stop():Te.start()},ye.addEventListener("sessionstart",ge),ye.addEventListener("sessionend",Ae),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera($),$=ye.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,$,A),v=It.get(L,C.length),v.init(),C.push(v),Re.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),_e.setFromProjectionMatrix(Re),de=this.localClippingEnabled,ce=I.init(this.clippingPlanes,de),g=Kt.get(L,M.length),g.init(),M.push(g),ft(L,$,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(ue,J),ce===!0&&I.beginShadows();const oe=v.state.shadowsArray;if(T.render(oe,L,$),ce===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(g,L),v.setupLights(b.useLegacyLights),$.isArrayCamera){const Y=$.cameras;for(let ne=0,Ue=Y.length;ne<Ue;ne++){const We=Y[ne];_t(g,L,We,We.viewport)}}else _t(g,L,$);A!==null&&(Ye.updateMultisampleRenderTarget(A),Ye.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(b,L,$),U.resetDefaultState(),F=-1,R=null,C.pop(),C.length>0?v=C[C.length-1]:v=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function ft(L,$,oe,Y){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)v.pushLight(L),L.castShadow&&v.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||_e.intersectsSprite(L)){Y&&ee.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Re);const We=At.update(L),$e=L.material;$e.visible&&g.push(L,We,$e,oe,ee.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==Be.render.frame&&(L.skeleton.update(),L.skeleton.frame=Be.render.frame),!L.frustumCulled||_e.intersectsObject(L))){Y&&ee.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Re);const We=At.update(L),$e=L.material;if(Array.isArray($e)){const Je=We.groups;for(let Qe=0,nt=Je.length;Qe<nt;Qe++){const ot=Je[Qe],Mt=$e[ot.materialIndex];Mt&&Mt.visible&&g.push(L,We,Mt,oe,ee.z,ot)}}else $e.visible&&g.push(L,We,$e,oe,ee.z,null)}}const Ue=L.children;for(let We=0,$e=Ue.length;We<$e;We++)ft(Ue[We],$,oe,Y)}function _t(L,$,oe,Y){const ne=L.opaque,Ue=L.transmissive,We=L.transparent;v.setupLightsView(oe),ce===!0&&I.setGlobalState(b.clippingPlanes,oe),Ue.length>0&&Ut(ne,$,oe),Y&&Ce.viewport(B.copy(Y)),ne.length>0&&wt(ne,$,oe),Ue.length>0&&wt(Ue,$,oe),We.length>0&&wt(We,$,oe),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ut(L,$,oe){const Y=Le.isWebGL2;pe===null&&(pe=new Ln(1024,1024,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?Jr:Ii,minFilter:Zr,samples:Y&&s===!0?4:0}));const ne=b.getRenderTarget();b.setRenderTarget(pe),b.clear();const Ue=b.toneMapping;b.toneMapping=Gn,wt(L,$,oe),b.toneMapping=Ue,Ye.updateMultisampleRenderTarget(pe),Ye.updateRenderTargetMipmap(pe),b.setRenderTarget(ne)}function wt(L,$,oe){const Y=$.isScene===!0?$.overrideMaterial:null;for(let ne=0,Ue=L.length;ne<Ue;ne++){const We=L[ne],$e=We.object,Je=We.geometry,Qe=Y===null?We.material:Y,nt=We.group;$e.layers.test(oe.layers)&&ct($e,$,oe,Je,Qe,nt)}}function ct(L,$,oe,Y,ne,Ue){L.onBeforeRender(b,$,oe,Y,ne,Ue),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ne.onBeforeRender(b,$,oe,Y,L,Ue),ne.transparent===!0&&ne.side===ui&&ne.forceSinglePass===!1?(ne.side=gn,ne.needsUpdate=!0,b.renderBufferDirect(oe,$,Y,ne,L,Ue),ne.side=pi,ne.needsUpdate=!0,b.renderBufferDirect(oe,$,Y,ne,L,Ue),ne.side=ui):b.renderBufferDirect(oe,$,Y,ne,L,Ue),L.onAfterRender(b,$,oe,Y,ne,Ue)}function Ct(L,$,oe){$.isScene!==!0&&($=fe);const Y=He.get(L),ne=v.state.lights,Ue=v.state.shadowsArray,We=ne.state.version,$e=at.getParameters(L,ne.state,Ue,$,oe),Je=at.getProgramCacheKey($e);let Qe=Y.programs;Y.environment=L.isMeshStandardMaterial?$.environment:null,Y.fog=$.fog,Y.envMap=(L.isMeshStandardMaterial?Et:rt).get(L.envMap||Y.environment),Qe===void 0&&(L.addEventListener("dispose",Ke),Qe=new Map,Y.programs=Qe);let nt=Qe.get(Je);if(nt!==void 0){if(Y.currentProgram===nt&&Y.lightsStateVersion===We)return cn(L,$e),nt}else $e.uniforms=at.getUniforms(L),L.onBuild(oe,$e,b),L.onBeforeCompile($e,b),nt=at.acquireProgram($e,Je),Qe.set(Je,nt),Y.uniforms=$e.uniforms;const ot=Y.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ot.clippingPlanes=I.uniform),cn(L,$e),Y.needsLights=Ve(L),Y.lightsStateVersion=We,Y.needsLights&&(ot.ambientLightColor.value=ne.state.ambient,ot.lightProbe.value=ne.state.probe,ot.directionalLights.value=ne.state.directional,ot.directionalLightShadows.value=ne.state.directionalShadow,ot.spotLights.value=ne.state.spot,ot.spotLightShadows.value=ne.state.spotShadow,ot.rectAreaLights.value=ne.state.rectArea,ot.ltc_1.value=ne.state.rectAreaLTC1,ot.ltc_2.value=ne.state.rectAreaLTC2,ot.pointLights.value=ne.state.point,ot.pointLightShadows.value=ne.state.pointShadow,ot.hemisphereLights.value=ne.state.hemi,ot.directionalShadowMap.value=ne.state.directionalShadowMap,ot.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ot.spotShadowMap.value=ne.state.spotShadowMap,ot.spotLightMatrix.value=ne.state.spotLightMatrix,ot.spotLightMap.value=ne.state.spotLightMap,ot.pointShadowMap.value=ne.state.pointShadowMap,ot.pointShadowMatrix.value=ne.state.pointShadowMatrix);const Mt=nt.getUniforms(),jt=es.seqWithValue(Mt.seq,ot);return Y.currentProgram=nt,Y.uniformsList=jt,nt}function cn(L,$){const oe=He.get(L);oe.outputEncoding=$.outputEncoding,oe.instancing=$.instancing,oe.skinning=$.skinning,oe.morphTargets=$.morphTargets,oe.morphNormals=$.morphNormals,oe.morphColors=$.morphColors,oe.morphTargetsCount=$.morphTargetsCount,oe.numClippingPlanes=$.numClippingPlanes,oe.numIntersection=$.numClipIntersection,oe.vertexAlphas=$.vertexAlphas,oe.vertexTangents=$.vertexTangents,oe.toneMapping=$.toneMapping}function ds(L,$,oe,Y,ne){$.isScene!==!0&&($=fe),Ye.resetTextureUnits();const Ue=$.fog,We=Y.isMeshStandardMaterial?$.environment:null,$e=A===null?b.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Oi,Je=(Y.isMeshStandardMaterial?Et:rt).get(Y.envMap||We),Qe=Y.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,nt=!!Y.normalMap&&!!oe.attributes.tangent,ot=!!oe.morphAttributes.position,Mt=!!oe.morphAttributes.normal,jt=!!oe.morphAttributes.color,sn=Y.toneMapped?b.toneMapping:Gn,On=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,xt=On!==void 0?On.length:0,it=He.get(Y),xr=v.state.lights;if(ce===!0&&(de===!0||L!==R)){const $t=L===R&&Y.id===F;I.setState(Y,L,$t)}let Dt=!1;Y.version===it.__version?(it.needsLights&&it.lightsStateVersion!==xr.state.version||it.outputEncoding!==$e||ne.isInstancedMesh&&it.instancing===!1||!ne.isInstancedMesh&&it.instancing===!0||ne.isSkinnedMesh&&it.skinning===!1||!ne.isSkinnedMesh&&it.skinning===!0||it.envMap!==Je||Y.fog===!0&&it.fog!==Ue||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==I.numPlanes||it.numIntersection!==I.numIntersection)||it.vertexAlphas!==Qe||it.vertexTangents!==nt||it.morphTargets!==ot||it.morphNormals!==Mt||it.morphColors!==jt||it.toneMapping!==sn||Le.isWebGL2===!0&&it.morphTargetsCount!==xt)&&(Dt=!0):(Dt=!0,it.__version=Y.version);let vn=it.currentProgram;Dt===!0&&(vn=Ct(Y,$,ne));let co=!1,Nn=!1,mi=!1;const kt=vn.getUniforms(),Vn=it.uniforms;if(Ce.useProgram(vn.program)&&(co=!0,Nn=!0,mi=!0),Y.id!==F&&(F=Y.id,Nn=!0),co||R!==L){if(kt.setValue(Z,"projectionMatrix",L.projectionMatrix),Le.logarithmicDepthBuffer&&kt.setValue(Z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),R!==L&&(R=L,Nn=!0,mi=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const $t=kt.map.cameraPosition;$t!==void 0&&$t.setValue(Z,ee.setFromMatrixPosition(L.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&kt.setValue(Z,"isOrthographic",L.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||ne.isSkinnedMesh)&&kt.setValue(Z,"viewMatrix",L.matrixWorldInverse)}if(ne.isSkinnedMesh){kt.setOptional(Z,ne,"bindMatrix"),kt.setOptional(Z,ne,"bindMatrixInverse");const $t=ne.skeleton;$t&&(Le.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),kt.setValue(Z,"boneTexture",$t.boneTexture,Ye),kt.setValue(Z,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hn=oe.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0&&Le.isWebGL2===!0)&&ve.update(ne,oe,vn),(Nn||it.receiveShadow!==ne.receiveShadow)&&(it.receiveShadow=ne.receiveShadow,kt.setValue(Z,"receiveShadow",ne.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Vn.envMap.value=Je,Vn.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),Nn&&(kt.setValue(Z,"toneMappingExposure",b.toneMappingExposure),it.needsLights&&Mn(Vn,mi),Ue&&Y.fog===!0&&dt.refreshFogUniforms(Vn,Ue),dt.refreshMaterialUniforms(Vn,Y,le,W,pe),es.upload(Z,it.uniformsList,Vn,Ye)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(es.upload(Z,it.uniformsList,Vn,Ye),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&kt.setValue(Z,"center",ne.center),kt.setValue(Z,"modelViewMatrix",ne.modelViewMatrix),kt.setValue(Z,"normalMatrix",ne.normalMatrix),kt.setValue(Z,"modelMatrix",ne.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const $t=Y.uniformsGroups;for(let Sn=0,fs=$t.length;Sn<fs;Sn++)if(Le.isWebGL2){const uo=$t[Sn];X.update(uo,vn),X.bind(uo,vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vn}function Mn(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Ve(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,$,oe){He.get(L.texture).__webglTexture=$,He.get(L.depthTexture).__webglTexture=oe;const Y=He.get(L);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=oe===void 0,Y.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,$){const oe=He.get(L);oe.__webglFramebuffer=$,oe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,oe=0){A=L,P=$,O=oe;let Y=!0,ne=null,Ue=!1,We=!1;if(L){const Je=He.get(L);Je.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(36160,null),Y=!1):Je.__webglFramebuffer===void 0?Ye.setupRenderTarget(L):Je.__hasExternalTextures&&Ye.rebindTextures(L,He.get(L.texture).__webglTexture,He.get(L.depthTexture).__webglTexture);const Qe=L.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(We=!0);const nt=He.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(ne=nt[$],Ue=!0):Le.isWebGL2&&L.samples>0&&Ye.useMultisampledRTT(L)===!1?ne=He.get(L).__webglMultisampledFramebuffer:ne=nt,B.copy(L.viewport),K.copy(L.scissor),E=L.scissorTest}else B.copy(j).multiplyScalar(le).floor(),K.copy(V).multiplyScalar(le).floor(),E=ae;if(Ce.bindFramebuffer(36160,ne)&&Le.drawBuffers&&Y&&Ce.drawBuffers(L,ne),Ce.viewport(B),Ce.scissor(K),Ce.setScissorTest(E),Ue){const Je=He.get(L.texture);Z.framebufferTexture2D(36160,36064,34069+$,Je.__webglTexture,oe)}else if(We){const Je=He.get(L.texture),Qe=$||0;Z.framebufferTextureLayer(36160,36064,Je.__webglTexture,oe||0,Qe)}F=-1},this.readRenderTargetPixels=function(L,$,oe,Y,ne,Ue,We){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=He.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&We!==void 0&&($e=$e[We]),$e){Ce.bindFramebuffer(36160,$e);try{const Je=L.texture,Qe=Je.format,nt=Je.type;if(Qe!==Cn&&Fe.convert(Qe)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ot=nt===Jr&&(De.has("EXT_color_buffer_half_float")||Le.isWebGL2&&De.has("EXT_color_buffer_float"));if(nt!==Ii&&Fe.convert(nt)!==Z.getParameter(35738)&&!(nt===Di&&(Le.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-Y&&oe>=0&&oe<=L.height-ne&&Z.readPixels($,oe,Y,ne,Fe.convert(Qe),Fe.convert(nt),Ue)}finally{const Je=A!==null?He.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(36160,Je)}}},this.copyFramebufferToTexture=function(L,$,oe=0){const Y=Math.pow(2,-oe),ne=Math.floor($.image.width*Y),Ue=Math.floor($.image.height*Y);Ye.setTexture2D($,0),Z.copyTexSubImage2D(3553,oe,0,0,L.x,L.y,ne,Ue),Ce.unbindTexture()},this.copyTextureToTexture=function(L,$,oe,Y=0){const ne=$.image.width,Ue=$.image.height,We=Fe.convert(oe.format),$e=Fe.convert(oe.type);Ye.setTexture2D(oe,0),Z.pixelStorei(37440,oe.flipY),Z.pixelStorei(37441,oe.premultiplyAlpha),Z.pixelStorei(3317,oe.unpackAlignment),$.isDataTexture?Z.texSubImage2D(3553,Y,L.x,L.y,ne,Ue,We,$e,$.image.data):$.isCompressedTexture?Z.compressedTexSubImage2D(3553,Y,L.x,L.y,$.mipmaps[0].width,$.mipmaps[0].height,We,$.mipmaps[0].data):Z.texSubImage2D(3553,Y,L.x,L.y,We,$e,$.image),Y===0&&oe.generateMipmaps&&Z.generateMipmap(3553),Ce.unbindTexture()},this.copyTextureToTexture3D=function(L,$,oe,Y,ne=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ue=L.max.x-L.min.x+1,We=L.max.y-L.min.y+1,$e=L.max.z-L.min.z+1,Je=Fe.convert(Y.format),Qe=Fe.convert(Y.type);let nt;if(Y.isData3DTexture)Ye.setTexture3D(Y,0),nt=32879;else if(Y.isDataArrayTexture)Ye.setTexture2DArray(Y,0),nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,Y.flipY),Z.pixelStorei(37441,Y.premultiplyAlpha),Z.pixelStorei(3317,Y.unpackAlignment);const ot=Z.getParameter(3314),Mt=Z.getParameter(32878),jt=Z.getParameter(3316),sn=Z.getParameter(3315),On=Z.getParameter(32877),xt=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;Z.pixelStorei(3314,xt.width),Z.pixelStorei(32878,xt.height),Z.pixelStorei(3316,L.min.x),Z.pixelStorei(3315,L.min.y),Z.pixelStorei(32877,L.min.z),oe.isDataTexture||oe.isData3DTexture?Z.texSubImage3D(nt,ne,$.x,$.y,$.z,Ue,We,$e,Je,Qe,xt.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(nt,ne,$.x,$.y,$.z,Ue,We,$e,Je,xt.data)):Z.texSubImage3D(nt,ne,$.x,$.y,$.z,Ue,We,$e,Je,Qe,xt),Z.pixelStorei(3314,ot),Z.pixelStorei(32878,Mt),Z.pixelStorei(3316,jt),Z.pixelStorei(3315,sn),Z.pixelStorei(32877,On),ne===0&&Y.generateMipmaps&&Z.generateMipmap(nt),Ce.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Ye.setTextureCube(L,0):L.isData3DTexture?Ye.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ye.setTexture2DArray(L,0):Ye.setTexture2D(L,0),Ce.unbindTexture()},this.resetState=function(){P=0,O=0,A=null,Ce.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Ha.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class b0 extends Ha{}b0.prototype.isWebGL1Renderer=!0;class M0 extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Kr extends Rn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Wa extends In{constructor(e=1,t=1,n=1,r=32,s=1,d=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:d,thetaStart:l,thetaLength:h};const p=this;r=Math.floor(r),s=Math.floor(s);const m=[],g=[],v=[],M=[];let C=0;const b=[],y=n/2;let P=0;O(),d===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(m),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(M,2));function O(){const F=new H,R=new H;let B=0;const K=(t-e)/n;for(let E=0;E<=s;E++){const z=[],W=E/s,le=W*(t-e)+e;for(let ue=0;ue<=r;ue++){const J=ue/r,j=J*h+l,V=Math.sin(j),ae=Math.cos(j);R.x=le*V,R.y=-W*n+y,R.z=le*ae,g.push(R.x,R.y,R.z),F.set(V,K,ae).normalize(),v.push(F.x,F.y,F.z),M.push(J,1-W),z.push(C++)}b.push(z)}for(let E=0;E<r;E++)for(let z=0;z<s;z++){const W=b[z][E],le=b[z+1][E],ue=b[z+1][E+1],J=b[z][E+1];m.push(W,le,J),m.push(le,ue,J),B+=6}p.addGroup(P,B,0),P+=B}function A(F){const R=C,B=new ke,K=new H;let E=0;const z=F===!0?e:t,W=F===!0?1:-1;for(let ue=1;ue<=r;ue++)g.push(0,y*W,0),v.push(0,W,0),M.push(.5,.5),C++;const le=C;for(let ue=0;ue<=r;ue++){const j=ue/r*h+l,V=Math.cos(j),ae=Math.sin(j);K.x=z*ae,K.y=y*W,K.z=z*V,g.push(K.x,K.y,K.z),v.push(0,W,0),B.x=V*.5+.5,B.y=ae*.5*W+.5,M.push(B.x,B.y),C++}for(let ue=0;ue<r;ue++){const J=R+ue,j=le+ue;F===!0?m.push(j,j+1,J):m.push(j+1,j,J),E+=3}p.addGroup(P,E,F===!0?1:2),P+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ja extends In{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,d=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:d,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(d+l,Math.PI);let p=0;const m=[],g=new H,v=new H,M=[],C=[],b=[],y=[];for(let P=0;P<=n;P++){const O=[],A=P/n;let F=0;P==0&&d==0?F=.5/t:P==n&&h==Math.PI&&(F=-.5/t);for(let R=0;R<=t;R++){const B=R/t;g.x=-e*Math.cos(r+B*s)*Math.sin(d+A*l),g.y=e*Math.cos(d+A*l),g.z=e*Math.sin(r+B*s)*Math.sin(d+A*l),C.push(g.x,g.y,g.z),v.copy(g).normalize(),b.push(v.x,v.y,v.z),y.push(B+F,1-A),O.push(p++)}m.push(O)}for(let P=0;P<n;P++)for(let O=0;O<t;O++){const A=m[P][O+1],F=m[P][O],R=m[P+1][O],B=m[P+1][O+1];(P!==0||d>0)&&M.push(A,F,B),(P!==n-1||h<Math.PI)&&M.push(F,R,B)}this.setIndex(M),this.setAttribute("position",new on(C,3)),this.setAttribute("normal",new on(b,3)),this.setAttribute("uv",new on(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class S0 extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qc extends S0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class w0 extends gr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=za,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const eu={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class E0{constructor(e,t,n){const r=this;let s=!1,d=0,l=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(m){l++,s===!1&&r.onStart!==void 0&&r.onStart(m,d,l),s=!0},this.itemEnd=function(m){d++,r.onProgress!==void 0&&r.onProgress(m,d,l),d===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,g){return p.push(m,g),this},this.removeHandler=function(m){const g=p.indexOf(m);return g!==-1&&p.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=p.length;g<v;g+=2){const M=p[g],C=p[g+1];if(M.global&&(M.lastIndex=0),M.test(m))return C}return null}}}const T0=new E0;class Fu{constructor(e){this.manager=e!==void 0?e:T0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class A0 extends Fu{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,d=eu.get(e);if(d!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(d),s.manager.itemEnd(e)},0),d;const l=eo("img");function h(){m(),eu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function p(g){m(),r&&r(g),s.manager.itemError(e),s.manager.itemEnd(e)}function m(){l.removeEventListener("load",h,!1),l.removeEventListener("error",p,!1)}return l.addEventListener("load",h,!1),l.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class P0 extends Fu{constructor(e){super(e)}load(e,t,n,r){const s=new ln,d=new A0(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class us extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class tu extends us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const xa=new Rt,nu=new H,iu=new H;class Uu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(nu),iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iu),t.updateMatrixWorld(),xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ru=new Rt,Vr=new H,ya=new H;class C0 extends Uu{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vr),ya.copy(n.position),ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ya),n.updateMatrixWorld(),r.makeTranslation(-Vr.x,-Vr.y,-Vr.z),ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru)}}class ou extends us{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new C0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class D0 extends Uu{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class su extends us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new D0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class L0 extends us{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ku extends In{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class R0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=au();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function au(){return(typeof performance>"u"?Date:performance).now()}class lu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);const Bu={p:5,q:2,r:2,s:3,t:2,u:4,pDiv:1,qDiv:1,rDiv:1,sDiv:1,tDiv:1,uDiv:1,x:1,y:0,z:0,w:0,dimensions:4,order:10,segments:32,curve:!0,vertices:!1,edges:!0,stellation:!1,light:1.5,thickness:1,projection:"stereographic",controls:"orbit",ambiance:"neon"},we={...Bu},Gu=()=>{if(location.hash)try{const a=JSON.parse(atob(location.hash.slice(1)));Object.assign(we,a)}catch(a){console.warn(a),location.hash=""}},Vu=(a,e=!1)=>{Object.assign(we,a),e&&window.history.pushState(null,null,"#"+btoa(JSON.stringify(we)))};function I0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var La={},O0={get exports(){return La},set exports(a){La=a}};(function(a,e){(function(t){a.exports=t()})(function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(i){return!(!i||!i.Window)&&i instanceof i.Window};var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.getWindow=function(i){return(0,t.default)(i)?i:(i.ownerDocument||i).defaultView||s.window},n.init=d,n.window=n.realWindow=void 0;var r=void 0;n.realWindow=r;var s=void 0;function d(i){n.realWindow=r=i;var o=i.document.createTextNode("");o.ownerDocument!==i.document&&typeof i.wrap=="function"&&i.wrap(o)===o&&(i=i.wrap(i)),n.window=s=i}n.window=s,typeof window<"u"&&window&&d(window);var l={};function h(i){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},h(i)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var p=function(i){return!!i&&h(i)==="object"},m=function(i){return typeof i=="function"},g={window:function(i){return i===n.window||(0,t.default)(i)},docFrag:function(i){return p(i)&&i.nodeType===11},object:p,func:m,number:function(i){return typeof i=="number"},bool:function(i){return typeof i=="boolean"},string:function(i){return typeof i=="string"},element:function(i){if(!i||h(i)!=="object")return!1;var o=n.getWindow(i)||n.window;return/object|function/.test(typeof Element>"u"?"undefined":h(Element))?i instanceof Element||i instanceof o.Element:i.nodeType===1&&typeof i.nodeName=="string"},plainObject:function(i){return p(i)&&!!i.constructor&&/function Object\b/.test(i.constructor.toString())},array:function(i){return p(i)&&i.length!==void 0&&m(i.splice)}};l.default=g;var v={};function M(i){var o=i.interaction;if(o.prepared.name==="drag"){var c=o.prepared.axis;c==="x"?(o.coords.cur.page.y=o.coords.start.page.y,o.coords.cur.client.y=o.coords.start.client.y,o.coords.velocity.client.y=0,o.coords.velocity.page.y=0):c==="y"&&(o.coords.cur.page.x=o.coords.start.page.x,o.coords.cur.client.x=o.coords.start.client.x,o.coords.velocity.client.x=0,o.coords.velocity.page.x=0)}}function C(i){var o=i.iEvent,c=i.interaction;if(c.prepared.name==="drag"){var u=c.prepared.axis;if(u==="x"||u==="y"){var f=u==="x"?"y":"x";o.page[f]=c.coords.start.page[f],o.client[f]=c.coords.start.client[f],o.delta[f]=0}}}Object.defineProperty(v,"__esModule",{value:!0}),v.default=void 0;var b={id:"actions/drag",install:function(i){var o=i.actions,c=i.Interactable,u=i.defaults;c.prototype.draggable=b.draggable,o.map.drag=b,o.methodDict.drag="draggable",u.actions.drag=b.defaults},listeners:{"interactions:before-action-move":M,"interactions:action-resume":M,"interactions:action-move":C,"auto-start:check":function(i){var o=i.interaction,c=i.interactable,u=i.buttons,f=c.options.drag;if(f&&f.enabled&&(!o.pointerIsDown||!/mouse|pointer/.test(o.pointerType)||u&c.options.drag.mouseButtons))return i.action={name:"drag",axis:f.lockAxis==="start"?f.startAxis:f.lockAxis},!1}},draggable:function(i){return l.default.object(i)?(this.options.drag.enabled=i.enabled!==!1,this.setPerAction("drag",i),this.setOnEvents("drag",i),/^(xy|x|y|start)$/.test(i.lockAxis)&&(this.options.drag.lockAxis=i.lockAxis),/^(xy|x|y)$/.test(i.startAxis)&&(this.options.drag.startAxis=i.startAxis),this):l.default.bool(i)?(this.options.drag.enabled=i,this):this.options.drag},beforeMove:M,move:C,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},y=b;v.default=y;var P={};Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var O={init:function(i){var o=i;O.document=o.document,O.DocumentFragment=o.DocumentFragment||A,O.SVGElement=o.SVGElement||A,O.SVGSVGElement=o.SVGSVGElement||A,O.SVGElementInstance=o.SVGElementInstance||A,O.Element=o.Element||A,O.HTMLElement=o.HTMLElement||O.Element,O.Event=o.Event,O.Touch=o.Touch||A,O.PointerEvent=o.PointerEvent||o.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function A(){}var F=O;P.default=F;var R={};Object.defineProperty(R,"__esModule",{value:!0}),R.default=void 0;var B={init:function(i){var o=P.default.Element,c=i.navigator||{};B.supportsTouch="ontouchstart"in i||l.default.func(i.DocumentTouch)&&P.default.document instanceof i.DocumentTouch,B.supportsPointerEvent=c.pointerEnabled!==!1&&!!P.default.PointerEvent,B.isIOS=/iP(hone|od|ad)/.test(c.platform),B.isIOS7=/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),B.isIe9=/MSIE 9/.test(c.userAgent),B.isOperaMobile=c.appName==="Opera"&&B.supportsTouch&&/Presto/.test(c.userAgent),B.prefixedMatchesSelector="matches"in o.prototype?"matches":"webkitMatchesSelector"in o.prototype?"webkitMatchesSelector":"mozMatchesSelector"in o.prototype?"mozMatchesSelector":"oMatchesSelector"in o.prototype?"oMatchesSelector":"msMatchesSelector",B.pEventTypes=B.supportsPointerEvent?P.default.PointerEvent===i.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,B.wheelEvent=P.default.document&&"onmousewheel"in P.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},K=B;R.default=K;var E={};function z(i){var o=i.parentNode;if(l.default.docFrag(o)){for(;(o=o.host)&&l.default.docFrag(o););return o}return o}function W(i,o){return n.window!==n.realWindow&&(o=o.replace(/\/deep\//g," ")),i[R.default.prefixedMatchesSelector](o)}Object.defineProperty(E,"__esModule",{value:!0}),E.closest=function(i,o){for(;l.default.element(i);){if(W(i,o))return i;i=z(i)}return null},E.getActualElement=function(i){return i.correspondingUseElement||i},E.getElementClientRect=j,E.getElementRect=function(i){var o=j(i);if(!R.default.isIOS7&&o){var c=J(n.getWindow(i));o.left+=c.x,o.right+=c.x,o.top+=c.y,o.bottom+=c.y}return o},E.getPath=function(i){for(var o=[];i;)o.push(i),i=z(i);return o},E.getScrollXY=J,E.indexOfDeepestElement=function(i){for(var o,c=[],u=0;u<i.length;u++){var f=i[u],_=i[o];if(f&&u!==o)if(_){var w=le(f),x=le(_);if(w!==f.ownerDocument)if(x!==f.ownerDocument)if(w!==x){c=c.length?c:ue(_);var S=void 0;if(_ instanceof P.default.HTMLElement&&f instanceof P.default.SVGElement&&!(f instanceof P.default.SVGSVGElement)){if(f===x)continue;S=f.ownerSVGElement}else S=f;for(var D=ue(S,_.ownerDocument),N=0;D[N]&&D[N]===c[N];)N++;var k=[D[N-1],D[N],c[N]];if(k[0])for(var Q=k[0].lastChild;Q;){if(Q===k[1]){o=u,c=D;break}if(Q===k[2])break;Q=Q.previousSibling}}else se=f,q=_,(parseInt(n.getWindow(se).getComputedStyle(se).zIndex,10)||0)>=(parseInt(n.getWindow(q).getComputedStyle(q).zIndex,10)||0)&&(o=u);else o=u}else o=u}var se,q;return o},E.matchesSelector=W,E.matchesUpTo=function(i,o,c){for(;l.default.element(i);){if(W(i,o))return!0;if((i=z(i))===c)return W(i,o)}return!1},E.nodeContains=function(i,o){if(i.contains)return i.contains(o);for(;o;){if(o===i)return!0;o=o.parentNode}return!1},E.parentNode=z,E.trySelector=function(i){return!!l.default.string(i)&&(P.default.document.querySelector(i),!0)};var le=function(i){return i.parentNode||i.host};function ue(i,o){for(var c,u=[],f=i;(c=le(f))&&f!==o&&c!==f.ownerDocument;)u.unshift(f),f=c;return u}function J(i){return{x:(i=i||n.window).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop}}function j(i){var o=i instanceof P.default.SVGElement?i.getBoundingClientRect():i.getClientRects()[0];return o&&{left:o.left,right:o.right,top:o.top,bottom:o.bottom,width:o.width||o.right-o.left,height:o.height||o.bottom-o.top}}var V={};Object.defineProperty(V,"__esModule",{value:!0}),V.default=function(i,o){for(var c in o)i[c]=o[c];return i};var ae={};function _e(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}function ce(i,o,c){return i==="parent"?(0,E.parentNode)(c):i==="self"?o.getRect(c):(0,E.closest)(c,i)}Object.defineProperty(ae,"__esModule",{value:!0}),ae.addEdges=function(i,o,c){i.left&&(o.left+=c.x),i.right&&(o.right+=c.x),i.top&&(o.top+=c.y),i.bottom&&(o.bottom+=c.y),o.width=o.right-o.left,o.height=o.bottom-o.top},ae.getStringOptionResult=ce,ae.rectToXY=function(i){return i&&{x:"x"in i?i.x:i.left,y:"y"in i?i.y:i.top}},ae.resolveRectLike=function(i,o,c,u){var f,_=i;return l.default.string(_)?_=ce(_,o,c):l.default.func(_)&&(_=_.apply(void 0,function(w){if(Array.isArray(w))return _e(w)}(f=u)||function(w){if(typeof Symbol<"u"&&w[Symbol.iterator]!=null||w["@@iterator"]!=null)return Array.from(w)}(f)||function(w,x){if(w){if(typeof w=="string")return _e(w,x);var S=Object.prototype.toString.call(w).slice(8,-1);return S==="Object"&&w.constructor&&(S=w.constructor.name),S==="Map"||S==="Set"?Array.from(w):S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)?_e(w,x):void 0}}(f)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),l.default.element(_)&&(_=(0,E.getElementRect)(_)),_},ae.tlbrToXywh=function(i){return!i||"x"in i&&"y"in i||((i=(0,V.default)({},i)).x=i.left||0,i.y=i.top||0,i.width=i.width||(i.right||0)-i.x,i.height=i.height||(i.bottom||0)-i.y),i},ae.xywhToTlbr=function(i){return!i||"left"in i&&"top"in i||((i=(0,V.default)({},i)).left=i.x||0,i.top=i.y||0,i.right=i.right||i.left+i.width,i.bottom=i.bottom||i.top+i.height),i};var de={};Object.defineProperty(de,"__esModule",{value:!0}),de.default=function(i,o,c){var u=i.options[c],f=u&&u.origin||i.options.origin,_=(0,ae.resolveRectLike)(f,i,o,[i&&o]);return(0,ae.rectToXY)(_)||{x:0,y:0}};var pe={};function Re(i){return i.trim().split(/ +/)}Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=function i(o,c,u){if(u=u||{},l.default.string(o)&&o.search(" ")!==-1&&(o=Re(o)),l.default.array(o))return o.reduce(function(S,D){return(0,V.default)(S,i(D,c,u))},u);if(l.default.object(o)&&(c=o,o=""),l.default.func(c))u[o]=u[o]||[],u[o].push(c);else if(l.default.array(c))for(var f=0;f<c.length;f++){var _;_=c[f],i(o,_,u)}else if(l.default.object(c))for(var w in c){var x=Re(w).map(function(S){return"".concat(o).concat(S)});i(x,c[w],u)}return u};var ee={};Object.defineProperty(ee,"__esModule",{value:!0}),ee.default=void 0,ee.default=function(i,o){return Math.sqrt(i*i+o*o)};var fe={};Object.defineProperty(fe,"__esModule",{value:!0}),fe.default=function(i,o){i.__set||(i.__set={});var c=function(f){typeof i[f]!="function"&&f!=="__set"&&Object.defineProperty(i,f,{get:function(){return f in i.__set?i.__set[f]:i.__set[f]=o[f]},set:function(_){i.__set[f]=_},configurable:!0})};for(var u in o)c(u);return i};var te={};function Z(i){return i instanceof P.default.Event||i instanceof P.default.Touch}function Pe(i,o,c){return i=i||"page",(c=c||{}).x=o[i+"X"],c.y=o[i+"Y"],c}function De(i,o){return o=o||{x:0,y:0},R.default.isOperaMobile&&Z(i)?(Pe("screen",i,o),o.x+=window.scrollX,o.y+=window.scrollY):Pe("page",i,o),o}function Le(i,o){return o=o||{},R.default.isOperaMobile&&Z(i)?Pe("screen",i,o):Pe("client",i,o),o}function Ce(i){var o=[];return l.default.array(i)?(o[0]=i[0],o[1]=i[1]):i.type==="touchend"?i.touches.length===1?(o[0]=i.touches[0],o[1]=i.changedTouches[0]):i.touches.length===0&&(o[0]=i.changedTouches[0],o[1]=i.changedTouches[1]):(o[0]=i.touches[0],o[1]=i.touches[1]),o}function Be(i){for(var o={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},c=0;c<i.length;c++){var u=i[c];for(var f in o)o[f]+=u[f]}for(var _ in o)o[_]/=i.length;return o}Object.defineProperty(te,"__esModule",{value:!0}),te.coordsToEvent=function(i){return{coords:i,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},te.copyCoords=function(i,o){i.page=i.page||{},i.page.x=o.page.x,i.page.y=o.page.y,i.client=i.client||{},i.client.x=o.client.x,i.client.y=o.client.y,i.timeStamp=o.timeStamp},te.getClientXY=Le,te.getEventTargets=function(i){var o=l.default.func(i.composedPath)?i.composedPath():i.path;return[E.getActualElement(o?o[0]:i.target),E.getActualElement(i.currentTarget)]},te.getPageXY=De,te.getPointerId=function(i){return l.default.number(i.pointerId)?i.pointerId:i.identifier},te.getPointerType=function(i){return l.default.string(i.pointerType)?i.pointerType:l.default.number(i.pointerType)?[void 0,void 0,"touch","pen","mouse"][i.pointerType]:/touch/.test(i.type||"")||i instanceof P.default.Touch?"touch":"mouse"},te.getTouchPair=Ce,te.getXY=Pe,te.isNativePointer=Z,te.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},te.pointerAverage=Be,Object.defineProperty(te,"pointerExtend",{enumerable:!0,get:function(){return fe.default}}),te.setCoordDeltas=function(i,o,c){i.page.x=c.page.x-o.page.x,i.page.y=c.page.y-o.page.y,i.client.x=c.client.x-o.client.x,i.client.y=c.client.y-o.client.y,i.timeStamp=c.timeStamp-o.timeStamp},te.setCoordVelocity=function(i,o){var c=Math.max(o.timeStamp/1e3,.001);i.page.x=o.page.x/c,i.page.y=o.page.y/c,i.client.x=o.client.x/c,i.client.y=o.client.y/c,i.timeStamp=c},te.setCoords=function(i,o,c){var u=o.length>1?Be(o):o[0];De(u,i.page),Le(u,i.client),i.timeStamp=c},te.setZeroCoords=function(i){i.page.x=0,i.page.y=0,i.client.x=0,i.client.y=0},te.touchAngle=function(i,o){var c=o+"X",u=o+"Y",f=Ce(i),_=f[1][c]-f[0][c],w=f[1][u]-f[0][u];return 180*Math.atan2(w,_)/Math.PI},te.touchBBox=function(i){if(!i.length)return null;var o=Ce(i),c=Math.min(o[0].pageX,o[1].pageX),u=Math.min(o[0].pageY,o[1].pageY),f=Math.max(o[0].pageX,o[1].pageX),_=Math.max(o[0].pageY,o[1].pageY);return{x:c,y:u,left:c,top:u,right:f,bottom:_,width:f-c,height:_-u}},te.touchDistance=function(i,o){var c=o+"X",u=o+"Y",f=Ce(i),_=f[0][c]-f[1][c],w=f[0][u]-f[1][u];return(0,ee.default)(_,w)};var He={};function Ye(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function rt(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(He,"__esModule",{value:!0}),He.BaseEvent=void 0;var Et=function(){function i(u){(function(f,_){if(!(f instanceof _))throw new TypeError("Cannot call a class as a function")})(this,i),rt(this,"immediatePropagationStopped",!1),rt(this,"propagationStopped",!1),this._interaction=u}var o,c;return o=i,(c=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&Ye(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();He.BaseEvent=Et,Object.defineProperty(Et.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var je={};Object.defineProperty(je,"__esModule",{value:!0}),je.remove=je.merge=je.from=je.findIndex=je.find=je.contains=void 0,je.contains=function(i,o){return i.indexOf(o)!==-1},je.remove=function(i,o){return i.splice(i.indexOf(o),1)};var Tt=function(i,o){for(var c=0;c<o.length;c++){var u=o[c];i.push(u)}return i};je.merge=Tt,je.from=function(i){return Tt([],i)};var At=function(i,o){for(var c=0;c<i.length;c++)if(o(i[c],c,i))return c;return-1};je.findIndex=At,je.find=function(i,o){return i[At(i,o)]};var at={};function dt(i){return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},dt(i)}function Kt(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function It(i,o){return It=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},It(i,o)}function I(i,o){if(o&&(dt(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(i)}function T(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ie(i){return ie=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},ie(i)}function ve(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(at,"__esModule",{value:!0}),at.DropEvent=void 0;var xe=function(i){(function(x,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(S&&S.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),Object.defineProperty(x,"prototype",{writable:!1}),S&&It(x,S)})(w,i);var o,c,u,f,_=(u=w,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var x,S=ie(u);if(f){var D=ie(this).constructor;x=Reflect.construct(S,arguments,D)}else x=S.apply(this,arguments);return I(this,x)});function w(x,S,D){var N;(function(q,he){if(!(q instanceof he))throw new TypeError("Cannot call a class as a function")})(this,w),ve(T(N=_.call(this,S._interaction)),"dropzone",void 0),ve(T(N),"dragEvent",void 0),ve(T(N),"relatedTarget",void 0),ve(T(N),"draggable",void 0),ve(T(N),"propagationStopped",!1),ve(T(N),"immediatePropagationStopped",!1);var k=D==="dragleave"?x.prev:x.cur,Q=k.element,se=k.dropzone;return N.type=D,N.target=Q,N.currentTarget=Q,N.dropzone=se,N.dragEvent=S,N.relatedTarget=S.target,N.draggable=S.interactable,N.timeStamp=S.timeStamp,N}return o=w,(c=[{key:"reject",value:function(){var x=this,S=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&S.cur.dropzone===this.dropzone&&S.cur.element===this.target)if(S.prev.dropzone=this.dropzone,S.prev.element=this.target,S.rejected=!0,S.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var D=S.activeDrops,N=je.findIndex(D,function(Q){var se=Q.dropzone,q=Q.element;return se===x.dropzone&&q===x.target});S.activeDrops.splice(N,1);var k=new w(S,this.dragEvent,"dropdeactivate");k.dropzone=this.dropzone,k.target=this.target,this.dropzone.fire(k)}else this.dropzone.fire(new w(S,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&Kt(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),w}(He.BaseEvent);at.DropEvent=xe;var Se={};function Fe(i,o){for(var c=0;c<i.slice().length;c++){var u=i.slice()[c],f=u.dropzone,_=u.element;o.dropzone=f,o.target=_,f.fire(o),o.propagationStopped=o.immediatePropagationStopped=!1}}function U(i,o){for(var c=function(_,w){for(var x=_.interactables,S=[],D=0;D<x.list.length;D++){var N=x.list[D];if(N.options.drop.enabled){var k=N.options.drop.accept;if(!(l.default.element(k)&&k!==w||l.default.string(k)&&!E.matchesSelector(w,k)||l.default.func(k)&&!k({dropzone:N,draggableElement:w})))for(var Q=l.default.string(N.target)?N._context.querySelectorAll(N.target):l.default.array(N.target)?N.target:[N.target],se=0;se<Q.length;se++){var q=Q[se];q!==w&&S.push({dropzone:N,element:q,rect:N.getRect(q)})}}}return S}(i,o),u=0;u<c.length;u++){var f=c[u];f.rect=f.dropzone.getRect(f.element)}return c}function X(i,o,c){for(var u=i.dropState,f=i.interactable,_=i.element,w=[],x=0;x<u.activeDrops.length;x++){var S=u.activeDrops[x],D=S.dropzone,N=S.element,k=S.rect;w.push(D.dropCheck(o,c,f,_,N,k)?N:null)}var Q=E.indexOfDeepestElement(w);return u.activeDrops[Q]||null}function Ee(i,o,c){var u=i.dropState,f={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return c.type==="dragstart"&&(f.activate=new at.DropEvent(u,c,"dropactivate"),f.activate.target=null,f.activate.dropzone=null),c.type==="dragend"&&(f.deactivate=new at.DropEvent(u,c,"dropdeactivate"),f.deactivate.target=null,f.deactivate.dropzone=null),u.rejected||(u.cur.element!==u.prev.element&&(u.prev.dropzone&&(f.leave=new at.DropEvent(u,c,"dragleave"),c.dragLeave=f.leave.target=u.prev.element,c.prevDropzone=f.leave.dropzone=u.prev.dropzone),u.cur.dropzone&&(f.enter=new at.DropEvent(u,c,"dragenter"),c.dragEnter=u.cur.element,c.dropzone=u.cur.dropzone)),c.type==="dragend"&&u.cur.dropzone&&(f.drop=new at.DropEvent(u,c,"drop"),c.dropzone=u.cur.dropzone,c.relatedTarget=u.cur.element),c.type==="dragmove"&&u.cur.dropzone&&(f.move=new at.DropEvent(u,c,"dropmove"),f.move.dragmove=c,c.dropzone=u.cur.dropzone)),f}function ye(i,o){var c=i.dropState,u=c.activeDrops,f=c.cur,_=c.prev;o.leave&&_.dropzone.fire(o.leave),o.enter&&f.dropzone.fire(o.enter),o.move&&f.dropzone.fire(o.move),o.drop&&f.dropzone.fire(o.drop),o.deactivate&&Fe(u,o.deactivate),c.prev.dropzone=f.dropzone,c.prev.element=f.element}function Ie(i,o){var c=i.interaction,u=i.iEvent,f=i.event;if(u.type==="dragmove"||u.type==="dragend"){var _=c.dropState;o.dynamicDrop&&(_.activeDrops=U(o,c.element));var w=u,x=X(c,w,f);_.rejected=_.rejected&&!!x&&x.dropzone===_.cur.dropzone&&x.element===_.cur.element,_.cur.dropzone=x&&x.dropzone,_.cur.element=x&&x.element,_.events=Ee(c,0,w)}}Object.defineProperty(Se,"__esModule",{value:!0}),Se.default=void 0;var Ne={id:"actions/drop",install:function(i){var o=i.actions,c=i.interactStatic,u=i.Interactable,f=i.defaults;i.usePlugin(v.default),u.prototype.dropzone=function(_){return function(w,x){if(l.default.object(x)){if(w.options.drop.enabled=x.enabled!==!1,x.listeners){var S=(0,pe.default)(x.listeners),D=Object.keys(S).reduce(function(N,k){return N[/^(enter|leave)/.test(k)?"drag".concat(k):/^(activate|deactivate|move)/.test(k)?"drop".concat(k):k]=S[k],N},{});w.off(w.options.drop.listeners),w.on(D),w.options.drop.listeners=D}return l.default.func(x.ondrop)&&w.on("drop",x.ondrop),l.default.func(x.ondropactivate)&&w.on("dropactivate",x.ondropactivate),l.default.func(x.ondropdeactivate)&&w.on("dropdeactivate",x.ondropdeactivate),l.default.func(x.ondragenter)&&w.on("dragenter",x.ondragenter),l.default.func(x.ondragleave)&&w.on("dragleave",x.ondragleave),l.default.func(x.ondropmove)&&w.on("dropmove",x.ondropmove),/^(pointer|center)$/.test(x.overlap)?w.options.drop.overlap=x.overlap:l.default.number(x.overlap)&&(w.options.drop.overlap=Math.max(Math.min(1,x.overlap),0)),"accept"in x&&(w.options.drop.accept=x.accept),"checker"in x&&(w.options.drop.checker=x.checker),w}return l.default.bool(x)?(w.options.drop.enabled=x,w):w.options.drop}(this,_)},u.prototype.dropCheck=function(_,w,x,S,D,N){return function(k,Q,se,q,he,be,me){var Oe=!1;if(!(me=me||k.getRect(be)))return!!k.options.drop.checker&&k.options.drop.checker(Q,se,Oe,k,be,q,he);var Ge=k.options.drop.overlap;if(Ge==="pointer"){var Xe=(0,de.default)(q,he,"drag"),ut=te.getPageXY(Q);ut.x+=Xe.x,ut.y+=Xe.y;var gt=ut.x>me.left&&ut.x<me.right,st=ut.y>me.top&&ut.y<me.bottom;Oe=gt&&st}var pt=q.getRect(he);if(pt&&Ge==="center"){var xn=pt.left+pt.width/2,qn=pt.top+pt.height/2;Oe=xn>=me.left&&xn<=me.right&&qn>=me.top&&qn<=me.bottom}return pt&&l.default.number(Ge)&&(Oe=Math.max(0,Math.min(me.right,pt.right)-Math.max(me.left,pt.left))*Math.max(0,Math.min(me.bottom,pt.bottom)-Math.max(me.top,pt.top))/(pt.width*pt.height)>=Ge),k.options.drop.checker&&(Oe=k.options.drop.checker(Q,se,Oe,k,be,q,he)),Oe}(this,_,w,x,S,D,N)},c.dynamicDrop=function(_){return l.default.bool(_)?(i.dynamicDrop=_,c):i.dynamicDrop},(0,V.default)(o.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),o.methodDict.drop="dropzone",i.dynamicDrop=!1,f.actions.drop=Ne.defaults},listeners:{"interactions:before-action-start":function(i){var o=i.interaction;o.prepared.name==="drag"&&(o.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(i,o){var c=i.interaction,u=(i.event,i.iEvent);if(c.prepared.name==="drag"){var f=c.dropState;f.activeDrops=null,f.events=null,f.activeDrops=U(o,c.element),f.events=Ee(c,0,u),f.events.activate&&(Fe(f.activeDrops,f.events.activate),o.fire("actions/drop:start",{interaction:c,dragEvent:u}))}},"interactions:action-move":Ie,"interactions:after-action-move":function(i,o){var c=i.interaction,u=i.iEvent;c.prepared.name==="drag"&&(ye(c,c.dropState.events),o.fire("actions/drop:move",{interaction:c,dragEvent:u}),c.dropState.events={})},"interactions:action-end":function(i,o){if(i.interaction.prepared.name==="drag"){var c=i.interaction,u=i.iEvent;Ie(i,o),ye(c,c.dropState.events),o.fire("actions/drop:end",{interaction:c,dragEvent:u})}},"interactions:stop":function(i){var o=i.interaction;if(o.prepared.name==="drag"){var c=o.dropState;c&&(c.activeDrops=null,c.events=null,c.cur.dropzone=null,c.cur.element=null,c.prev.dropzone=null,c.prev.element=null,c.rejected=!1)}}},getActiveDrops:U,getDrop:X,getDropEvents:Ee,fireDropEvents:ye,defaults:{enabled:!1,accept:null,overlap:"pointer"}},ze=Ne;Se.default=ze;var Ke={};function tt(i){var o=i.interaction,c=i.iEvent,u=i.phase;if(o.prepared.name==="gesture"){var f=o.pointers.map(function(D){return D.pointer}),_=u==="start",w=u==="end",x=o.interactable.options.deltaSource;if(c.touches=[f[0],f[1]],_)c.distance=te.touchDistance(f,x),c.box=te.touchBBox(f),c.scale=1,c.ds=0,c.angle=te.touchAngle(f,x),c.da=0,o.gesture.startDistance=c.distance,o.gesture.startAngle=c.angle;else if(w){var S=o.prevEvent;c.distance=S.distance,c.box=S.box,c.scale=S.scale,c.ds=0,c.angle=S.angle,c.da=0}else c.distance=te.touchDistance(f,x),c.box=te.touchBBox(f),c.scale=c.distance/o.gesture.startDistance,c.angle=te.touchAngle(f,x),c.ds=c.scale-o.gesture.scale,c.da=c.angle-o.gesture.angle;o.gesture.distance=c.distance,o.gesture.angle=c.angle,l.default.number(c.scale)&&c.scale!==1/0&&!isNaN(c.scale)&&(o.gesture.scale=c.scale)}}Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.default=void 0;var lt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(i){var o=i.actions,c=i.Interactable,u=i.defaults;c.prototype.gesturable=function(f){return l.default.object(f)?(this.options.gesture.enabled=f.enabled!==!1,this.setPerAction("gesture",f),this.setOnEvents("gesture",f),this):l.default.bool(f)?(this.options.gesture.enabled=f,this):this.options.gesture},o.map.gesture=lt,o.methodDict.gesture="gesturable",u.actions.gesture=lt.defaults},listeners:{"interactions:action-start":tt,"interactions:action-move":tt,"interactions:action-end":tt,"interactions:new":function(i){i.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(i){if(!(i.interaction.pointers.length<2)){var o=i.interactable.options.gesture;if(o&&o.enabled)return i.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},G=lt;Ke.default=G;var re={};function ge(i,o,c,u,f,_,w){if(!o)return!1;if(o===!0){var x=l.default.number(_.width)?_.width:_.right-_.left,S=l.default.number(_.height)?_.height:_.bottom-_.top;if(w=Math.min(w,Math.abs((i==="left"||i==="right"?x:S)/2)),x<0&&(i==="left"?i="right":i==="right"&&(i="left")),S<0&&(i==="top"?i="bottom":i==="bottom"&&(i="top")),i==="left"){var D=x>=0?_.left:_.right;return c.x<D+w}if(i==="top"){var N=S>=0?_.top:_.bottom;return c.y<N+w}if(i==="right")return c.x>(x>=0?_.right:_.left)-w;if(i==="bottom")return c.y>(S>=0?_.bottom:_.top)-w}return!!l.default.element(u)&&(l.default.element(o)?o===u:E.matchesUpTo(u,o,f))}function Ae(i){var o=i.iEvent,c=i.interaction;if(c.prepared.name==="resize"&&c.resizeAxes){var u=o;c.interactable.options.resize.square?(c.resizeAxes==="y"?u.delta.x=u.delta.y:u.delta.y=u.delta.x,u.axes="xy"):(u.axes=c.resizeAxes,c.resizeAxes==="x"?u.delta.y=0:c.resizeAxes==="y"&&(u.delta.x=0))}}Object.defineProperty(re,"__esModule",{value:!0}),re.default=void 0;var Te={id:"actions/resize",before:["actions/drag"],install:function(i){var o=i.actions,c=i.browser,u=i.Interactable,f=i.defaults;Te.cursors=function(_){return _.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(c),Te.defaultMargin=c.supportsTouch||c.supportsPointerEvent?20:10,u.prototype.resizable=function(_){return function(w,x,S){return l.default.object(x)?(w.options.resize.enabled=x.enabled!==!1,w.setPerAction("resize",x),w.setOnEvents("resize",x),l.default.string(x.axis)&&/^x$|^y$|^xy$/.test(x.axis)?w.options.resize.axis=x.axis:x.axis===null&&(w.options.resize.axis=S.defaults.actions.resize.axis),l.default.bool(x.preserveAspectRatio)?w.options.resize.preserveAspectRatio=x.preserveAspectRatio:l.default.bool(x.square)&&(w.options.resize.square=x.square),w):l.default.bool(x)?(w.options.resize.enabled=x,w):w.options.resize}(this,_,i)},o.map.resize=Te,o.methodDict.resize="resizable",f.actions.resize=Te.defaults},listeners:{"interactions:new":function(i){i.interaction.resizeAxes="xy"},"interactions:action-start":function(i){(function(o){var c=o.iEvent,u=o.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var f=c,_=u.rect;u._rects={start:(0,V.default)({},_),corrected:(0,V.default)({},_),previous:(0,V.default)({},_),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},f.edges=u.prepared.edges,f.rect=u._rects.corrected,f.deltaRect=u._rects.delta}})(i),Ae(i)},"interactions:action-move":function(i){(function(o){var c=o.iEvent,u=o.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var f=c,_=u.interactable.options.resize.invert,w=_==="reposition"||_==="negate",x=u.rect,S=u._rects,D=S.start,N=S.corrected,k=S.delta,Q=S.previous;if((0,V.default)(Q,N),w){if((0,V.default)(N,x),_==="reposition"){if(N.top>N.bottom){var se=N.top;N.top=N.bottom,N.bottom=se}if(N.left>N.right){var q=N.left;N.left=N.right,N.right=q}}}else N.top=Math.min(x.top,D.bottom),N.bottom=Math.max(x.bottom,D.top),N.left=Math.min(x.left,D.right),N.right=Math.max(x.right,D.left);for(var he in N.width=N.right-N.left,N.height=N.bottom-N.top,N)k[he]=N[he]-Q[he];f.edges=u.prepared.edges,f.rect=N,f.deltaRect=k}})(i),Ae(i)},"interactions:action-end":function(i){var o=i.iEvent,c=i.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var u=o;u.edges=c.prepared.edges,u.rect=c._rects.corrected,u.deltaRect=c._rects.delta}},"auto-start:check":function(i){var o=i.interaction,c=i.interactable,u=i.element,f=i.rect,_=i.buttons;if(f){var w=(0,V.default)({},o.coords.cur.page),x=c.options.resize;if(x&&x.enabled&&(!o.pointerIsDown||!/mouse|pointer/.test(o.pointerType)||_&x.mouseButtons)){if(l.default.object(x.edges)){var S={left:!1,right:!1,top:!1,bottom:!1};for(var D in S)S[D]=ge(D,x.edges[D],w,o._latestPointer.eventTarget,u,f,x.margin||Te.defaultMargin);S.left=S.left&&!S.right,S.top=S.top&&!S.bottom,(S.left||S.right||S.top||S.bottom)&&(i.action={name:"resize",edges:S})}else{var N=x.axis!=="y"&&w.x>f.right-Te.defaultMargin,k=x.axis!=="x"&&w.y>f.bottom-Te.defaultMargin;(N||k)&&(i.action={name:"resize",axes:(N?"x":"")+(k?"y":"")})}return!i.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(i){var o=i.edges,c=i.axis,u=i.name,f=Te.cursors,_=null;if(c)_=f[u+c];else if(o){for(var w="",x=["top","bottom","left","right"],S=0;S<x.length;S++){var D=x[S];o[D]&&(w+=D)}_=f[w]}return _},defaultMargin:null},ft=Te;re.default=ft;var _t={};Object.defineProperty(_t,"__esModule",{value:!0}),_t.default=void 0;var Ut={id:"actions",install:function(i){i.usePlugin(Ke.default),i.usePlugin(re.default),i.usePlugin(v.default),i.usePlugin(Se.default)}};_t.default=Ut;var wt={};Object.defineProperty(wt,"__esModule",{value:!0}),wt.default=void 0;var ct,Ct,cn=0,ds={request:function(i){return ct(i)},cancel:function(i){return Ct(i)},init:function(i){if(ct=i.requestAnimationFrame,Ct=i.cancelAnimationFrame,!ct)for(var o=["ms","moz","webkit","o"],c=0;c<o.length;c++){var u=o[c];ct=i["".concat(u,"RequestAnimationFrame")],Ct=i["".concat(u,"CancelAnimationFrame")]||i["".concat(u,"CancelRequestAnimationFrame")]}ct=ct&&ct.bind(i),Ct=Ct&&Ct.bind(i),ct||(ct=function(f){var _=Date.now(),w=Math.max(0,16-(_-cn)),x=i.setTimeout(function(){f(_+w)},w);return cn=_+w,x},Ct=function(f){return clearTimeout(f)})}};wt.default=ds;var Mn={};Object.defineProperty(Mn,"__esModule",{value:!0}),Mn.default=void 0,Mn.getContainer=L,Mn.getScroll=$,Mn.getScrollSize=function(i){return l.default.window(i)&&(i=window.document.body),{x:i.scrollWidth,y:i.scrollHeight}},Mn.getScrollSizeDelta=function(i,o){var c=i.interaction,u=i.element,f=c&&c.interactable.options[c.prepared.name].autoScroll;if(!f||!f.enabled)return o(),{x:0,y:0};var _=L(f.container,c.interactable,u),w=$(_);o();var x=$(_);return{x:x.x-w.x,y:x.y-w.y}};var Ve={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(i){Ve.isScrolling=!0,wt.default.cancel(Ve.i),i.autoScroll=Ve,Ve.interaction=i,Ve.prevTime=Ve.now(),Ve.i=wt.default.request(Ve.scroll)},stop:function(){Ve.isScrolling=!1,Ve.interaction&&(Ve.interaction.autoScroll=null),wt.default.cancel(Ve.i)},scroll:function(){var i=Ve.interaction,o=i.interactable,c=i.element,u=i.prepared.name,f=o.options[u].autoScroll,_=L(f.container,o,c),w=Ve.now(),x=(w-Ve.prevTime)/1e3,S=f.speed*x;if(S>=1){var D={x:Ve.x*S,y:Ve.y*S};if(D.x||D.y){var N=$(_);l.default.window(_)?_.scrollBy(D.x,D.y):_&&(_.scrollLeft+=D.x,_.scrollTop+=D.y);var k=$(_),Q={x:k.x-N.x,y:k.y-N.y};(Q.x||Q.y)&&o.fire({type:"autoscroll",target:c,interactable:o,delta:Q,interaction:i,container:_})}Ve.prevTime=w}Ve.isScrolling&&(wt.default.cancel(Ve.i),Ve.i=wt.default.request(Ve.scroll))},check:function(i,o){var c;return(c=i.options[o].autoScroll)==null?void 0:c.enabled},onInteractionMove:function(i){var o=i.interaction,c=i.pointer;if(o.interacting()&&Ve.check(o.interactable,o.prepared.name))if(o.simulation)Ve.x=Ve.y=0;else{var u,f,_,w,x=o.interactable,S=o.element,D=o.prepared.name,N=x.options[D].autoScroll,k=L(N.container,x,S);if(l.default.window(k))w=c.clientX<Ve.margin,u=c.clientY<Ve.margin,f=c.clientX>k.innerWidth-Ve.margin,_=c.clientY>k.innerHeight-Ve.margin;else{var Q=E.getElementClientRect(k);w=c.clientX<Q.left+Ve.margin,u=c.clientY<Q.top+Ve.margin,f=c.clientX>Q.right-Ve.margin,_=c.clientY>Q.bottom-Ve.margin}Ve.x=f?1:w?-1:0,Ve.y=_?1:u?-1:0,Ve.isScrolling||(Ve.margin=N.margin,Ve.speed=N.speed,Ve.start(o))}}};function L(i,o,c){return(l.default.string(i)?(0,ae.getStringOptionResult)(i,o,c):i)||(0,n.getWindow)(c)}function $(i){return l.default.window(i)&&(i=window.document.body),{x:i.scrollLeft,y:i.scrollTop}}var oe={id:"auto-scroll",install:function(i){var o=i.defaults,c=i.actions;i.autoScroll=Ve,Ve.now=function(){return i.now()},c.phaselessTypes.autoscroll=!0,o.perAction.autoScroll=Ve.defaults},listeners:{"interactions:new":function(i){i.interaction.autoScroll=null},"interactions:destroy":function(i){i.interaction.autoScroll=null,Ve.stop(),Ve.interaction&&(Ve.interaction=null)},"interactions:stop":Ve.stop,"interactions:action-move":function(i){return Ve.onInteractionMove(i)}}},Y=oe;Mn.default=Y;var ne={};Object.defineProperty(ne,"__esModule",{value:!0}),ne.copyAction=function(i,o){return i.name=o.name,i.axis=o.axis,i.edges=o.edges,i},ne.sign=void 0,ne.warnOnce=function(i,o){var c=!1;return function(){return c||(n.window.console.warn(o),c=!0),i.apply(this,arguments)}},ne.sign=function(i){return i>=0?1:-1};var Ue={};function We(i){return l.default.bool(i)?(this.options.styleCursor=i,this):i===null?(delete this.options.styleCursor,this):this.options.styleCursor}function $e(i){return l.default.func(i)?(this.options.actionChecker=i,this):i===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.default=void 0;var Je={id:"auto-start/interactableMethods",install:function(i){var o=i.Interactable;o.prototype.getAction=function(c,u,f,_){var w=function(x,S,D,N,k){var Q=x.getRect(N),se={action:null,interactable:x,interaction:D,element:N,rect:Q,buttons:S.buttons||{0:1,1:4,3:8,4:16}[S.button]};return k.fire("auto-start:check",se),se.action}(this,u,f,_,i);return this.options.actionChecker?this.options.actionChecker(c,u,w,this,_,f):w},o.prototype.ignoreFrom=(0,ne.warnOnce)(function(c){return this._backCompatOption("ignoreFrom",c)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),o.prototype.allowFrom=(0,ne.warnOnce)(function(c){return this._backCompatOption("allowFrom",c)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),o.prototype.actionChecker=$e,o.prototype.styleCursor=We}};Ue.default=Je;var Qe={};function nt(i,o,c,u,f){return o.testIgnoreAllow(o.options[i.name],c,u)&&o.options[i.name].enabled&&sn(o,c,i,f)?i:null}function ot(i,o,c,u,f,_,w){for(var x=0,S=u.length;x<S;x++){var D=u[x],N=f[x],k=D.getAction(o,c,i,N);if(k){var Q=nt(k,D,N,_,w);if(Q)return{action:Q,interactable:D,element:N}}}return{action:null,interactable:null,element:null}}function Mt(i,o,c,u,f){var _=[],w=[],x=u;function S(N){_.push(N),w.push(x)}for(;l.default.element(x);){_=[],w=[],f.interactables.forEachMatch(x,S);var D=ot(i,o,c,_,w,u,f);if(D.action&&!D.interactable.options[D.action.name].manualStart)return D;x=E.parentNode(x)}return{action:null,interactable:null,element:null}}function jt(i,o,c){var u=o.action,f=o.interactable,_=o.element;u=u||{name:null},i.interactable=f,i.element=_,(0,ne.copyAction)(i.prepared,u),i.rect=f&&u.name?f.getRect(_):null,it(i,c),c.fire("autoStart:prepared",{interaction:i})}function sn(i,o,c,u){var f=i.options,_=f[c.name].max,w=f[c.name].maxPerElement,x=u.autoStart.maxInteractions,S=0,D=0,N=0;if(!(_&&w&&x))return!1;for(var k=0;k<u.interactions.list.length;k++){var Q=u.interactions.list[k],se=Q.prepared.name;if(Q.interacting()&&(++S>=x||Q.interactable===i&&((D+=se===c.name?1:0)>=_||Q.element===o&&(N++,se===c.name&&N>=w))))return!1}return x>0}function On(i,o){return l.default.number(i)?(o.autoStart.maxInteractions=i,this):o.autoStart.maxInteractions}function xt(i,o,c){var u=c.autoStart.cursorElement;u&&u!==i&&(u.style.cursor=""),i.ownerDocument.documentElement.style.cursor=o,i.style.cursor=o,c.autoStart.cursorElement=o?i:null}function it(i,o){var c=i.interactable,u=i.element,f=i.prepared;if(i.pointerType==="mouse"&&c&&c.options.styleCursor){var _="";if(f.name){var w=c.options[f.name].cursorChecker;_=l.default.func(w)?w(f,c,u,i._interacting):o.actions.map[f.name].getCursor(f)}xt(i.element,_||"",o)}else o.autoStart.cursorElement&&xt(o.autoStart.cursorElement,"",o)}Object.defineProperty(Qe,"__esModule",{value:!0}),Qe.default=void 0;var xr={id:"auto-start/base",before:["actions"],install:function(i){var o=i.interactStatic,c=i.defaults;i.usePlugin(Ue.default),c.base.actionChecker=null,c.base.styleCursor=!0,(0,V.default)(c.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),o.maxInteractions=function(u){return On(u,i)},i.autoStart={maxInteractions:1/0,withinInteractionLimit:sn,cursorElement:null}},listeners:{"interactions:down":function(i,o){var c=i.interaction,u=i.pointer,f=i.event,_=i.eventTarget;c.interacting()||jt(c,Mt(c,u,f,_,o),o)},"interactions:move":function(i,o){(function(c,u){var f=c.interaction,_=c.pointer,w=c.event,x=c.eventTarget;f.pointerType!=="mouse"||f.pointerIsDown||f.interacting()||jt(f,Mt(f,_,w,x,u),u)})(i,o),function(c,u){var f=c.interaction;if(f.pointerIsDown&&!f.interacting()&&f.pointerWasMoved&&f.prepared.name){u.fire("autoStart:before-start",c);var _=f.interactable,w=f.prepared.name;w&&_&&(_.options[w].manualStart||!sn(_,f.element,f.prepared,u)?f.stop():(f.start(f.prepared,_,f.element),it(f,u)))}}(i,o)},"interactions:stop":function(i,o){var c=i.interaction,u=c.interactable;u&&u.options.styleCursor&&xt(c.element,"",o)}},maxInteractions:On,withinInteractionLimit:sn,validateAction:nt},Dt=xr;Qe.default=Dt;var vn={};Object.defineProperty(vn,"__esModule",{value:!0}),vn.default=void 0;var co={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(i,o){var c=i.interaction,u=i.eventTarget,f=i.dx,_=i.dy;if(c.prepared.name==="drag"){var w=Math.abs(f),x=Math.abs(_),S=c.interactable.options.drag,D=S.startAxis,N=w>x?"x":w<x?"y":"xy";if(c.prepared.axis=S.lockAxis==="start"?N[0]:S.lockAxis,N!=="xy"&&D!=="xy"&&D!==N){c.prepared.name=null;for(var k=u,Q=function(q){if(q!==c.interactable){var he=c.interactable.options.drag;if(!he.manualStart&&q.testIgnoreAllow(he,k,u)){var be=q.getAction(c.downPointer,c.downEvent,c,k);if(be&&be.name==="drag"&&function(me,Oe){if(!Oe)return!1;var Ge=Oe.options.drag.startAxis;return me==="xy"||Ge==="xy"||Ge===me}(N,q)&&Qe.default.validateAction(be,q,k,u,o))return q}}};l.default.element(k);){var se=o.interactables.forEachMatch(k,Q);if(se){c.prepared.name="drag",c.interactable=se,c.element=k;break}k=(0,E.parentNode)(k)}}}}}};vn.default=co;var Nn={};function mi(i){var o=i.prepared&&i.prepared.name;if(!o)return null;var c=i.interactable.options;return c[o].hold||c[o].delay}Object.defineProperty(Nn,"__esModule",{value:!0}),Nn.default=void 0;var kt={id:"auto-start/hold",install:function(i){var o=i.defaults;i.usePlugin(Qe.default),o.perAction.hold=0,o.perAction.delay=0},listeners:{"interactions:new":function(i){i.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(i){var o=i.interaction,c=mi(o);c>0&&(o.autoStartHoldTimer=setTimeout(function(){o.start(o.prepared,o.interactable,o.element)},c))},"interactions:move":function(i){var o=i.interaction,c=i.duplicate;o.autoStartHoldTimer&&o.pointerWasMoved&&!c&&(clearTimeout(o.autoStartHoldTimer),o.autoStartHoldTimer=null)},"autoStart:before-start":function(i){var o=i.interaction;mi(o)>0&&(o.prepared.name=null)}},getHoldDuration:mi},Vn=kt;Nn.default=Vn;var Hn={};Object.defineProperty(Hn,"__esModule",{value:!0}),Hn.default=void 0;var $t={id:"auto-start",install:function(i){i.usePlugin(Qe.default),i.usePlugin(Nn.default),i.usePlugin(vn.default)}};Hn.default=$t;var Sn={};function fs(i){return/^(always|never|auto)$/.test(i)?(this.options.preventDefault=i,this):l.default.bool(i)?(this.options.preventDefault=i?"always":"never",this):this.options.preventDefault}function uo(i){var o=i.interaction,c=i.event;o.interactable&&o.interactable.checkAndPreventDefault(c)}function Ja(i){var o=i.Interactable;o.prototype.preventDefault=fs,o.prototype.checkAndPreventDefault=function(c){return function(u,f,_){var w=u.options.preventDefault;if(w!=="never")if(w!=="always"){if(f.events.supportsPassive&&/^touch(start|move)$/.test(_.type)){var x=(0,n.getWindow)(_.target).document,S=f.getDocOptions(x);if(!S||!S.events||S.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(_.type)||l.default.element(_.target)&&(0,E.matchesSelector)(_.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||_.preventDefault()}else _.preventDefault()}(this,i,c)},i.interactions.docEvents.push({type:"dragstart",listener:function(c){for(var u=0;u<i.interactions.list.length;u++){var f=i.interactions.list[u];if(f.element&&(f.element===c.target||(0,E.nodeContains)(f.element,c.target)))return void f.interactable.checkAndPreventDefault(c)}}})}Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.default=void 0,Sn.install=Ja;var Qu={id:"core/interactablePreventDefault",install:Ja,listeners:["down","move","up","cancel"].reduce(function(i,o){return i["interactions:".concat(o)]=uo,i},{})};Sn.default=Qu;var hs={};Object.defineProperty(hs,"__esModule",{value:!0}),hs.default=void 0,hs.default={};var yr,fo={};Object.defineProperty(fo,"__esModule",{value:!0}),fo.default=void 0,function(i){i.touchAction="touchAction",i.boxSizing="boxSizing",i.noListeners="noListeners"}(yr||(yr={})),yr.touchAction,yr.boxSizing,yr.noListeners;var ed={id:"dev-tools",install:function(){}};fo.default=ed;var gi={};Object.defineProperty(gi,"__esModule",{value:!0}),gi.default=function i(o){var c={};for(var u in o){var f=o[u];l.default.plainObject(f)?c[u]=i(f):l.default.array(f)?c[u]=je.from(f):c[u]=f}return c};var vi={};function Qa(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var _,w,x=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(_=f.next()).done)&&(x.push(_.value),!u||x.length!==u);S=!0);}catch(N){D=!0,w=N}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return x}}(i,o)||function(c,u){if(c){if(typeof c=="string")return el(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?el(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function el(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}function td(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function _i(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(vi,"__esModule",{value:!0}),vi.default=void 0,vi.getRectOffset=tl;var nd=function(){function i(u){(function(f,_){if(!(f instanceof _))throw new TypeError("Cannot call a class as a function")})(this,i),_i(this,"states",[]),_i(this,"startOffset",{left:0,right:0,top:0,bottom:0}),_i(this,"startDelta",void 0),_i(this,"result",void 0),_i(this,"endResult",void 0),_i(this,"edges",void 0),_i(this,"interaction",void 0),this.interaction=u,this.result=ho()}var o,c;return o=i,(c=[{key:"start",value:function(u,f){var _=u.phase,w=this.interaction,x=function(D){var N=D.interactable.options[D.prepared.name],k=N.modifiers;return k&&k.length?k:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(Q){var se=N[Q];return se&&se.enabled&&{options:se,methods:se._methods}}).filter(function(Q){return!!Q})}(w);this.prepareStates(x),this.edges=(0,V.default)({},w.edges),this.startOffset=tl(w.rect,f),this.startDelta={x:0,y:0};var S=this.fillArg({phase:_,pageCoords:f,preEnd:!1});return this.result=ho(),this.startAll(S),this.result=this.setAll(S)}},{key:"fillArg",value:function(u){var f=this.interaction;return u.interaction=f,u.interactable=f.interactable,u.element=f.element,u.rect=u.rect||f.rect,u.edges=this.edges,u.startOffset=this.startOffset,u}},{key:"startAll",value:function(u){for(var f=0;f<this.states.length;f++){var _=this.states[f];_.methods.start&&(u.state=_,_.methods.start(u))}}},{key:"setAll",value:function(u){var f=u.phase,_=u.preEnd,w=u.skipModifiers,x=u.rect;u.coords=(0,V.default)({},u.pageCoords),u.rect=(0,V.default)({},x);for(var S=w?this.states.slice(w):this.states,D=ho(u.coords,u.rect),N=0;N<S.length;N++){var k,Q=S[N],se=Q.options,q=(0,V.default)({},u.coords),he=null;(k=Q.methods)!=null&&k.set&&this.shouldDo(se,_,f)&&(u.state=Q,he=Q.methods.set(u),ae.addEdges(this.interaction.edges,u.rect,{x:u.coords.x-q.x,y:u.coords.y-q.y})),D.eventProps.push(he)}D.delta.x=u.coords.x-u.pageCoords.x,D.delta.y=u.coords.y-u.pageCoords.y,D.rectDelta.left=u.rect.left-x.left,D.rectDelta.right=u.rect.right-x.right,D.rectDelta.top=u.rect.top-x.top,D.rectDelta.bottom=u.rect.bottom-x.bottom;var be=this.result.coords,me=this.result.rect;if(be&&me){var Oe=D.rect.left!==me.left||D.rect.right!==me.right||D.rect.top!==me.top||D.rect.bottom!==me.bottom;D.changed=Oe||be.x!==D.coords.x||be.y!==D.coords.y}return D}},{key:"applyToInteraction",value:function(u){var f=this.interaction,_=u.phase,w=f.coords.cur,x=f.coords.start,S=this.result,D=this.startDelta,N=S.delta;_==="start"&&(0,V.default)(this.startDelta,S.delta);for(var k=0;k<[[x,D],[w,N]].length;k++){var Q=Qa([[x,D],[w,N]][k],2),se=Q[0],q=Q[1];se.page.x+=q.x,se.page.y+=q.y,se.client.x+=q.x,se.client.y+=q.y}var he=this.result.rectDelta,be=u.rect||f.rect;be.left+=he.left,be.right+=he.right,be.top+=he.top,be.bottom+=he.bottom,be.width=be.right-be.left,be.height=be.bottom-be.top}},{key:"setAndApply",value:function(u){var f=this.interaction,_=u.phase,w=u.preEnd,x=u.skipModifiers,S=this.setAll(this.fillArg({preEnd:w,phase:_,pageCoords:u.modifiedCoords||f.coords.cur.page}));if(this.result=S,!S.changed&&(!x||x<this.states.length)&&f.interacting())return!1;if(u.modifiedCoords){var D=f.coords.cur.page,N={x:u.modifiedCoords.x-D.x,y:u.modifiedCoords.y-D.y};S.coords.x+=N.x,S.coords.y+=N.y,S.delta.x+=N.x,S.delta.y+=N.y}this.applyToInteraction(u)}},{key:"beforeEnd",value:function(u){var f=u.interaction,_=u.event,w=this.states;if(w&&w.length){for(var x=!1,S=0;S<w.length;S++){var D=w[S];u.state=D;var N=D.options,k=D.methods,Q=k.beforeEnd&&k.beforeEnd(u);if(Q)return this.endResult=Q,!1;x=x||!x&&this.shouldDo(N,!0,u.phase,!0)}x&&f.move({event:_,preEnd:!0})}}},{key:"stop",value:function(u){var f=u.interaction;if(this.states&&this.states.length){var _=(0,V.default)({states:this.states,interactable:f.interactable,element:f.element,rect:null},u);this.fillArg(_);for(var w=0;w<this.states.length;w++){var x=this.states[w];_.state=x,x.methods.stop&&x.methods.stop(_)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(u){this.states=[];for(var f=0;f<u.length;f++){var _=u[f],w=_.options,x=_.methods,S=_.name;this.states.push({options:w,methods:x,index:f,name:S})}return this.states}},{key:"restoreInteractionCoords",value:function(u){var f=u.interaction,_=f.coords,w=f.rect,x=f.modification;if(x.result){for(var S=x.startDelta,D=x.result,N=D.delta,k=D.rectDelta,Q=[[_.start,S],[_.cur,N]],se=0;se<Q.length;se++){var q=Qa(Q[se],2),he=q[0],be=q[1];he.page.x-=be.x,he.page.y-=be.y,he.client.x-=be.x,he.client.y-=be.y}w.left-=k.left,w.right-=k.right,w.top-=k.top,w.bottom-=k.bottom}}},{key:"shouldDo",value:function(u,f,_,w){return!(!u||u.enabled===!1||w&&!u.endOnly||u.endOnly&&!f||_==="start"&&!u.setStart)}},{key:"copyFrom",value:function(u){this.startOffset=u.startOffset,this.startDelta=u.startDelta,this.edges=u.edges,this.states=u.states.map(function(f){return(0,gi.default)(f)}),this.result=ho((0,V.default)({},u.result.coords),(0,V.default)({},u.result.rect))}},{key:"destroy",value:function(){for(var u in this)this[u]=null}}])&&td(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();function ho(i,o){return{rect:o,coords:i,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function tl(i,o){return i?{left:o.x-i.left,top:o.y-i.top,right:i.right-o.x,bottom:i.bottom-o.y}:{left:0,top:0,right:0,bottom:0}}vi.default=nd;var Bt={};function po(i){var o=i.iEvent,c=i.interaction.modification.result;c&&(o.modifiers=c.eventProps)}Object.defineProperty(Bt,"__esModule",{value:!0}),Bt.addEventModifiers=po,Bt.default=void 0,Bt.makeModifier=function(i,o){var c=i.defaults,u={start:i.start,set:i.set,beforeEnd:i.beforeEnd,stop:i.stop},f=function(_){var w=_||{};for(var x in w.enabled=w.enabled!==!1,c)x in w||(w[x]=c[x]);var S={options:w,methods:u,name:o,enable:function(){return w.enabled=!0,S},disable:function(){return w.enabled=!1,S}};return S};return o&&typeof o=="string"&&(f._defaults=c,f._methods=u),f};var id={id:"modifiers/base",before:["actions"],install:function(i){i.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(i){var o=i.interaction;o.modification=new vi.default(o)},"interactions:before-action-start":function(i){var o=i.interaction.modification;o.start(i,i.interaction.coords.start.page),i.interaction.edges=o.edges,o.applyToInteraction(i)},"interactions:before-action-move":function(i){return i.interaction.modification.setAndApply(i)},"interactions:before-action-end":function(i){return i.interaction.modification.beforeEnd(i)},"interactions:action-start":po,"interactions:action-move":po,"interactions:action-end":po,"interactions:after-action-start":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:after-action-move":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:stop":function(i){return i.interaction.modification.stop(i)}}},rd=id;Bt.default=rd;var br={};Object.defineProperty(br,"__esModule",{value:!0}),br.defaults=void 0,br.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var Mr={};function ps(i){return ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ps(i)}function od(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function ms(i,o){return ms=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},ms(i,o)}function sd(i,o){if(o&&(ps(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ht(i)}function ht(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function mo(i){return mo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},mo(i)}function vt(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Mr,"__esModule",{value:!0}),Mr.InteractEvent=void 0;var nl=function(i){(function(x,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(S&&S.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),Object.defineProperty(x,"prototype",{writable:!1}),S&&ms(x,S)})(w,i);var o,c,u,f,_=(u=w,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var x,S=mo(u);if(f){var D=mo(this).constructor;x=Reflect.construct(S,arguments,D)}else x=S.apply(this,arguments);return sd(this,x)});function w(x,S,D,N,k,Q,se){var q;(function(gt,st){if(!(gt instanceof st))throw new TypeError("Cannot call a class as a function")})(this,w),vt(ht(q=_.call(this,x)),"relatedTarget",null),vt(ht(q),"screenX",void 0),vt(ht(q),"screenY",void 0),vt(ht(q),"button",void 0),vt(ht(q),"buttons",void 0),vt(ht(q),"ctrlKey",void 0),vt(ht(q),"shiftKey",void 0),vt(ht(q),"altKey",void 0),vt(ht(q),"metaKey",void 0),vt(ht(q),"page",void 0),vt(ht(q),"client",void 0),vt(ht(q),"delta",void 0),vt(ht(q),"rect",void 0),vt(ht(q),"x0",void 0),vt(ht(q),"y0",void 0),vt(ht(q),"t0",void 0),vt(ht(q),"dt",void 0),vt(ht(q),"duration",void 0),vt(ht(q),"clientX0",void 0),vt(ht(q),"clientY0",void 0),vt(ht(q),"velocity",void 0),vt(ht(q),"speed",void 0),vt(ht(q),"swipe",void 0),vt(ht(q),"axes",void 0),vt(ht(q),"preEnd",void 0),k=k||x.element;var he=x.interactable,be=(he&&he.options||br.defaults).deltaSource,me=(0,de.default)(he,k,D),Oe=N==="start",Ge=N==="end",Xe=Oe?ht(q):x.prevEvent,ut=Oe?x.coords.start:Ge?{page:Xe.page,client:Xe.client,timeStamp:x.coords.cur.timeStamp}:x.coords.cur;return q.page=(0,V.default)({},ut.page),q.client=(0,V.default)({},ut.client),q.rect=(0,V.default)({},x.rect),q.timeStamp=ut.timeStamp,Ge||(q.page.x-=me.x,q.page.y-=me.y,q.client.x-=me.x,q.client.y-=me.y),q.ctrlKey=S.ctrlKey,q.altKey=S.altKey,q.shiftKey=S.shiftKey,q.metaKey=S.metaKey,q.button=S.button,q.buttons=S.buttons,q.target=k,q.currentTarget=k,q.preEnd=Q,q.type=se||D+(N||""),q.interactable=he,q.t0=Oe?x.pointers[x.pointers.length-1].downTime:Xe.t0,q.x0=x.coords.start.page.x-me.x,q.y0=x.coords.start.page.y-me.y,q.clientX0=x.coords.start.client.x-me.x,q.clientY0=x.coords.start.client.y-me.y,q.delta=Oe||Ge?{x:0,y:0}:{x:q[be].x-Xe[be].x,y:q[be].y-Xe[be].y},q.dt=x.coords.delta.timeStamp,q.duration=q.timeStamp-q.t0,q.velocity=(0,V.default)({},x.coords.velocity[be]),q.speed=(0,ee.default)(q.velocity.x,q.velocity.y),q.swipe=Ge||N==="inertiastart"?q.getSwipe():null,q}return o=w,(c=[{key:"getSwipe",value:function(){var x=this._interaction;if(x.prevEvent.speed<600||this.timeStamp-x.prevEvent.timeStamp>150)return null;var S=180*Math.atan2(x.prevEvent.velocityY,x.prevEvent.velocityX)/Math.PI;S<0&&(S+=360);var D=112.5<=S&&S<247.5,N=202.5<=S&&S<337.5;return{up:N,down:!N&&22.5<=S&&S<157.5,left:D,right:!D&&(292.5<=S||S<67.5),angle:S,speed:x.prevEvent.speed,velocity:{x:x.prevEvent.velocityX,y:x.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&od(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),w}(He.BaseEvent);Mr.InteractEvent=nl,Object.defineProperties(nl.prototype,{pageX:{get:function(){return this.page.x},set:function(i){this.page.x=i}},pageY:{get:function(){return this.page.y},set:function(i){this.page.y=i}},clientX:{get:function(){return this.client.x},set:function(i){this.client.x=i}},clientY:{get:function(){return this.client.y},set:function(i){this.client.y=i}},dx:{get:function(){return this.delta.x},set:function(i){this.delta.x=i}},dy:{get:function(){return this.delta.y},set:function(i){this.delta.y=i}},velocityX:{get:function(){return this.velocity.x},set:function(i){this.velocity.x=i}},velocityY:{get:function(){return this.velocity.y},set:function(i){this.velocity.y=i}}});var Sr={};function il(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function ad(i,o,c){return o&&il(i.prototype,o),c&&il(i,c),Object.defineProperty(i,"prototype",{writable:!1}),i}function wr(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Sr,"__esModule",{value:!0}),Sr.PointerInfo=void 0;var ld=ad(function i(o,c,u,f,_){(function(w,x){if(!(w instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),wr(this,"id",void 0),wr(this,"pointer",void 0),wr(this,"event",void 0),wr(this,"downTime",void 0),wr(this,"downTarget",void 0),this.id=o,this.pointer=c,this.event=u,this.downTime=f,this.downTarget=_});Sr.PointerInfo=ld;var go,vo,an={};function cd(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function St(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(an,"__esModule",{value:!0}),an.Interaction=void 0,Object.defineProperty(an,"PointerInfo",{enumerable:!0,get:function(){return Sr.PointerInfo}}),an.default=an._ProxyValues=an._ProxyMethods=void 0,an._ProxyValues=go,function(i){i.interactable="",i.element="",i.prepared="",i.pointerIsDown="",i.pointerWasMoved="",i._proxy=""}(go||(an._ProxyValues=go={})),an._ProxyMethods=vo,function(i){i.start="",i.move="",i.end="",i.stop="",i.interacting=""}(vo||(an._ProxyMethods=vo={}));var ud=0,rl=function(){function i(u){var f=this,_=u.pointerType,w=u.scopeFire;(function(Q,se){if(!(Q instanceof se))throw new TypeError("Cannot call a class as a function")})(this,i),St(this,"interactable",null),St(this,"element",null),St(this,"rect",null),St(this,"_rects",void 0),St(this,"edges",null),St(this,"_scopeFire",void 0),St(this,"prepared",{name:null,axis:null,edges:null}),St(this,"pointerType",void 0),St(this,"pointers",[]),St(this,"downEvent",null),St(this,"downPointer",{}),St(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),St(this,"prevEvent",null),St(this,"pointerIsDown",!1),St(this,"pointerWasMoved",!1),St(this,"_interacting",!1),St(this,"_ending",!1),St(this,"_stopped",!0),St(this,"_proxy",null),St(this,"simulation",null),St(this,"doMove",(0,ne.warnOnce)(function(Q){this.move(Q)},"The interaction.doMove() method has been renamed to interaction.move()")),St(this,"coords",{start:te.newCoords(),prev:te.newCoords(),cur:te.newCoords(),delta:te.newCoords(),velocity:te.newCoords()}),St(this,"_id",ud++),this._scopeFire=w,this.pointerType=_;var x=this;this._proxy={};var S=function(Q){Object.defineProperty(f._proxy,Q,{get:function(){return x[Q]}})};for(var D in go)S(D);var N=function(Q){Object.defineProperty(f._proxy,Q,{value:function(){return x[Q].apply(x,arguments)}})};for(var k in vo)N(k);this._scopeFire("interactions:new",{interaction:this})}var o,c;return o=i,c=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(u,f,_){var w=this.updatePointer(u,f,_,!0),x=this.pointers[w];this._scopeFire("interactions:down",{pointer:u,event:f,eventTarget:_,pointerIndex:w,pointerInfo:x,type:"down",interaction:this})}},{key:"start",value:function(u,f,_){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(u.name==="gesture"?2:1)||!f.options[u.name].enabled)&&((0,ne.copyAction)(this.prepared,u),this.interactable=f,this.element=_,this.rect=f.getRect(_),this.edges=this.prepared.edges?(0,V.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(u,f,_){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(u,f,_,!1);var w,x,S=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(w=this.coords.cur.client.x-this.coords.start.client.x,x=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,ee.default)(w,x)>this.pointerMoveTolerance);var D=this.getPointerIndex(u),N={pointer:u,pointerIndex:D,pointerInfo:this.pointers[D],event:f,type:"move",eventTarget:_,dx:w,dy:x,duplicate:S,interaction:this};S||te.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",N),S||this.simulation||(this.interacting()&&(N.type=null,this.move(N)),this.pointerWasMoved&&te.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(u){u&&u.event||te.setZeroCoords(this.coords.delta),(u=(0,V.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},u||{})).phase="move",this._doPhase(u)}},{key:"pointerUp",value:function(u,f,_,w){var x=this.getPointerIndex(u);x===-1&&(x=this.updatePointer(u,f,_,!1));var S=/cancel$/i.test(f.type)?"cancel":"up";this._scopeFire("interactions:".concat(S),{pointer:u,pointerIndex:x,pointerInfo:this.pointers[x],event:f,eventTarget:_,type:S,curEventTarget:w,interaction:this}),this.simulation||this.end(f),this.removePointer(u,f)}},{key:"documentBlur",value:function(u){this.end(u),this._scopeFire("interactions:blur",{event:u,type:"blur",interaction:this})}},{key:"end",value:function(u){var f;this._ending=!0,u=u||this._latestPointer.event,this.interacting()&&(f=this._doPhase({event:u,interaction:this,phase:"end"})),this._ending=!1,f===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(u){var f=te.getPointerId(u);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:je.findIndex(this.pointers,function(_){return _.id===f})}},{key:"getPointerInfo",value:function(u){return this.pointers[this.getPointerIndex(u)]}},{key:"updatePointer",value:function(u,f,_,w){var x=te.getPointerId(u),S=this.getPointerIndex(u),D=this.pointers[S];return w=w!==!1&&(w||/(down|start)$/i.test(f.type)),D?D.pointer=u:(D=new Sr.PointerInfo(x,u,f,null,null),S=this.pointers.length,this.pointers.push(D)),te.setCoords(this.coords.cur,this.pointers.map(function(N){return N.pointer}),this._now()),te.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),w&&(this.pointerIsDown=!0,D.downTime=this.coords.cur.timeStamp,D.downTarget=_,te.pointerExtend(this.downPointer,u),this.interacting()||(te.copyCoords(this.coords.start,this.coords.cur),te.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=f,this.pointerWasMoved=!1)),this._updateLatestPointer(u,f,_),this._scopeFire("interactions:update-pointer",{pointer:u,event:f,eventTarget:_,down:w,pointerInfo:D,pointerIndex:S,interaction:this}),S}},{key:"removePointer",value:function(u,f){var _=this.getPointerIndex(u);if(_!==-1){var w=this.pointers[_];this._scopeFire("interactions:remove-pointer",{pointer:u,event:f,eventTarget:null,pointerIndex:_,pointerInfo:w,interaction:this}),this.pointers.splice(_,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(u,f,_){this._latestPointer.pointer=u,this._latestPointer.event=f,this._latestPointer.eventTarget=_}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(u,f,_,w){return new Mr.InteractEvent(this,u,this.prepared.name,f,this.element,_,w)}},{key:"_fireEvent",value:function(u){var f;(f=this.interactable)==null||f.fire(u),(!this.prevEvent||u.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=u)}},{key:"_doPhase",value:function(u){var f=u.event,_=u.phase,w=u.preEnd,x=u.type,S=this.rect;if(S&&_==="move"&&(ae.addEdges(this.edges,S,this.coords.delta[this.interactable.options.deltaSource]),S.width=S.right-S.left,S.height=S.bottom-S.top),this._scopeFire("interactions:before-action-".concat(_),u)===!1)return!1;var D=u.iEvent=this._createPreparedEvent(f,_,w,x);return this._scopeFire("interactions:action-".concat(_),u),_==="start"&&(this.prevEvent=D),this._fireEvent(D),this._scopeFire("interactions:after-action-".concat(_),u),!0}},{key:"_now",value:function(){return Date.now()}}],c&&cd(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();an.Interaction=rl;var dd=rl;an.default=dd;var ti={};function ol(i){i.pointerIsDown&&(vs(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)}function sl(i){gs(i.interaction)}function gs(i){if(!function(c){return!(!c.offset.pending.x&&!c.offset.pending.y)}(i))return!1;var o=i.offset.pending;return vs(i.coords.cur,o),vs(i.coords.delta,o),ae.addEdges(i.edges,i.rect,o),o.x=0,o.y=0,!0}function fd(i){var o=i.x,c=i.y;this.offset.pending.x+=o,this.offset.pending.y+=c,this.offset.total.x+=o,this.offset.total.y+=c}function vs(i,o){var c=i.page,u=i.client,f=o.x,_=o.y;c.x+=f,c.y+=_,u.x+=f,u.y+=_}Object.defineProperty(ti,"__esModule",{value:!0}),ti.addTotal=ol,ti.applyPending=gs,ti.default=void 0,an._ProxyMethods.offsetBy="";var hd={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(i){i.Interaction.prototype.offsetBy=fd},listeners:{"interactions:new":function(i){i.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(i){return ol(i.interaction)},"interactions:before-action-start":sl,"interactions:before-action-move":sl,"interactions:before-action-end":function(i){var o=i.interaction;if(gs(o))return o.move({offset:!0}),o.end(),!1},"interactions:stop":function(i){var o=i.interaction;o.offset.total.x=0,o.offset.total.y=0,o.offset.pending.x=0,o.offset.pending.y=0}}},pd=hd;ti.default=pd;var xi={};function md(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function zt(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(xi,"__esModule",{value:!0}),xi.default=xi.InertiaState=void 0;var al=function(){function i(u){(function(f,_){if(!(f instanceof _))throw new TypeError("Cannot call a class as a function")})(this,i),zt(this,"active",!1),zt(this,"isModified",!1),zt(this,"smoothEnd",!1),zt(this,"allowResume",!1),zt(this,"modification",void 0),zt(this,"modifierCount",0),zt(this,"modifierArg",void 0),zt(this,"startCoords",void 0),zt(this,"t0",0),zt(this,"v0",0),zt(this,"te",0),zt(this,"targetOffset",void 0),zt(this,"modifiedOffset",void 0),zt(this,"currentOffset",void 0),zt(this,"lambda_v0",0),zt(this,"one_ve_v0",0),zt(this,"timeout",void 0),zt(this,"interaction",void 0),this.interaction=u}var o,c;return o=i,(c=[{key:"start",value:function(u){var f=this.interaction,_=_o(f);if(!_||!_.enabled)return!1;var w=f.coords.velocity.client,x=(0,ee.default)(w.x,w.y),S=this.modification||(this.modification=new vi.default(f));if(S.copyFrom(f.modification),this.t0=f._now(),this.allowResume=_.allowResume,this.v0=x,this.currentOffset={x:0,y:0},this.startCoords=f.coords.cur.page,this.modifierArg=S.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-f.coords.cur.timeStamp<50&&x>_.minSpeed&&x>_.endSpeed)this.startInertia();else{if(S.result=S.setAll(this.modifierArg),!S.result.changed)return!1;this.startSmoothEnd()}return f.modification.result.rect=null,f.offsetBy(this.targetOffset),f._doPhase({interaction:f,event:u,phase:"inertiastart"}),f.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),f.modification.result.rect=null,this.active=!0,f.simulation=this,!0}},{key:"startInertia",value:function(){var u=this,f=this.interaction.coords.velocity.client,_=_o(this.interaction),w=_.resistance,x=-Math.log(_.endSpeed/this.v0)/w;this.targetOffset={x:(f.x-x)/w,y:(f.y-x)/w},this.te=x,this.lambda_v0=w/this.v0,this.one_ve_v0=1-_.endSpeed/this.v0;var S=this.modification,D=this.modifierArg;D.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},S.result=S.setAll(D),S.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+S.result.delta.x,y:this.targetOffset.y+S.result.delta.y}),this.onNextFrame(function(){return u.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var u=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return u.smoothEndTick()})}},{key:"onNextFrame",value:function(u){var f=this;this.timeout=wt.default.request(function(){f.active&&u()})}},{key:"inertiaTick",value:function(){var u,f,_,w,x,S=this,D=this.interaction,N=_o(D).resistance,k=(D._now()-this.t0)/1e3;if(k<this.te){var Q,se=1-(Math.exp(-N*k)-this.lambda_v0)/this.one_ve_v0;this.isModified?(u=this.targetOffset.x,f=this.targetOffset.y,_=this.modifiedOffset.x,w=this.modifiedOffset.y,Q={x:ll(x=se,0,u,_),y:ll(x,0,f,w)}):Q={x:this.targetOffset.x*se,y:this.targetOffset.y*se};var q={x:Q.x-this.currentOffset.x,y:Q.y-this.currentOffset.y};this.currentOffset.x+=q.x,this.currentOffset.y+=q.y,D.offsetBy(q),D.move(),this.onNextFrame(function(){return S.inertiaTick()})}else D.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var u=this,f=this.interaction,_=f._now()-this.t0,w=_o(f).smoothEndDuration;if(_<w){var x={x:cl(_,0,this.targetOffset.x,w),y:cl(_,0,this.targetOffset.y,w)},S={x:x.x-this.currentOffset.x,y:x.y-this.currentOffset.y};this.currentOffset.x+=S.x,this.currentOffset.y+=S.y,f.offsetBy(S),f.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return u.smoothEndTick()})}else f.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(u){var f=u.pointer,_=u.event,w=u.eventTarget,x=this.interaction;x.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),x.updatePointer(f,_,w,!0),x._doPhase({interaction:x,event:_,phase:"resume"}),(0,te.copyCoords)(x.coords.prev,x.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,wt.default.cancel(this.timeout)}}])&&md(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();function _o(i){var o=i.interactable,c=i.prepared;return o&&o.options&&c.name&&o.options[c.name].inertia}xi.InertiaState=al;var gd={id:"inertia",before:["modifiers","actions"],install:function(i){var o=i.defaults;i.usePlugin(ti.default),i.usePlugin(Bt.default),i.actions.phases.inertiastart=!0,i.actions.phases.resume=!0,o.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(i){var o=i.interaction;o.inertia=new al(o)},"interactions:before-action-end":function(i){var o=i.interaction,c=i.event;return(!o._interacting||o.simulation||!o.inertia.start(c))&&null},"interactions:down":function(i){var o=i.interaction,c=i.eventTarget,u=o.inertia;if(u.active)for(var f=c;l.default.element(f);){if(f===o.element){u.resume(i);break}f=E.parentNode(f)}},"interactions:stop":function(i){var o=i.interaction.inertia;o.active&&o.stop()},"interactions:before-action-resume":function(i){var o=i.interaction.modification;o.stop(i),o.start(i,i.interaction.coords.cur.page),o.applyToInteraction(i)},"interactions:before-action-inertiastart":function(i){return i.interaction.modification.setAndApply(i)},"interactions:action-resume":Bt.addEventModifiers,"interactions:action-inertiastart":Bt.addEventModifiers,"interactions:after-action-inertiastart":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:after-action-resume":function(i){return i.interaction.modification.restoreInteractionCoords(i)}}};function ll(i,o,c,u){var f=1-i;return f*f*o+2*f*i*c+i*i*u}function cl(i,o,c,u){return-c*(i/=u)*(i-2)+o}var vd=gd;xi.default=vd;var Er={};function _d(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Tr(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}function ul(i,o){for(var c=0;c<o.length;c++){var u=o[c];if(i.immediatePropagationStopped)break;u(i)}}Object.defineProperty(Er,"__esModule",{value:!0}),Er.Eventable=void 0;var xd=function(){function i(u){(function(f,_){if(!(f instanceof _))throw new TypeError("Cannot call a class as a function")})(this,i),Tr(this,"options",void 0),Tr(this,"types",{}),Tr(this,"propagationStopped",!1),Tr(this,"immediatePropagationStopped",!1),Tr(this,"global",void 0),this.options=(0,V.default)({},u||{})}var o,c;return o=i,(c=[{key:"fire",value:function(u){var f,_=this.global;(f=this.types[u.type])&&ul(u,f),!u.propagationStopped&&_&&(f=_[u.type])&&ul(u,f)}},{key:"on",value:function(u,f){var _=(0,pe.default)(u,f);for(u in _)this.types[u]=je.merge(this.types[u]||[],_[u])}},{key:"off",value:function(u,f){var _=(0,pe.default)(u,f);for(u in _){var w=this.types[u];if(w&&w.length)for(var x=0;x<_[u].length;x++){var S=_[u][x],D=w.indexOf(S);D!==-1&&w.splice(D,1)}}}},{key:"getRect",value:function(u){return null}}])&&_d(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();Er.Eventable=xd;var Ar={};Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.default=function(i,o){if(o.phaselessTypes[i])return!0;for(var c in o.map)if(i.indexOf(c)===0&&i.substr(c.length)in o.phases)return!0;return!1};var _s={};Object.defineProperty(_s,"__esModule",{value:!0}),_s.createInteractStatic=function(i){var o=function c(u,f){var _=i.interactables.get(u,f);return _||((_=i.interactables.new(u,f)).events.global=c.globalEvents),_};return o.getPointerAverage=te.pointerAverage,o.getTouchBBox=te.touchBBox,o.getTouchDistance=te.touchDistance,o.getTouchAngle=te.touchAngle,o.getElementRect=E.getElementRect,o.getElementClientRect=E.getElementClientRect,o.matchesSelector=E.matchesSelector,o.closest=E.closest,o.globalEvents={},o.version="1.10.17",o.scope=i,o.use=function(c,u){return this.scope.usePlugin(c,u),this},o.isSet=function(c,u){return!!this.scope.interactables.get(c,u&&u.context)},o.on=(0,ne.warnOnce)(function(c,u,f){if(l.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),l.default.array(c)){for(var _=0;_<c.length;_++){var w=c[_];this.on(w,u,f)}return this}if(l.default.object(c)){for(var x in c)this.on(x,c[x],u);return this}return(0,Ar.default)(c,this.scope.actions)?this.globalEvents[c]?this.globalEvents[c].push(u):this.globalEvents[c]=[u]:this.scope.events.add(this.scope.document,c,u,{options:f}),this},"The interact.on() method is being deprecated"),o.off=(0,ne.warnOnce)(function(c,u,f){if(l.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),l.default.array(c)){for(var _=0;_<c.length;_++){var w=c[_];this.off(w,u,f)}return this}if(l.default.object(c)){for(var x in c)this.off(x,c[x],u);return this}var S;return(0,Ar.default)(c,this.scope.actions)?c in this.globalEvents&&(S=this.globalEvents[c].indexOf(u))!==-1&&this.globalEvents[c].splice(S,1):this.scope.events.remove(this.scope.document,c,u,f),this},"The interact.off() method is being deprecated"),o.debug=function(){return this.scope},o.supportsTouch=function(){return R.default.supportsTouch},o.supportsPointerEvent=function(){return R.default.supportsPointerEvent},o.stop=function(){for(var c=0;c<this.scope.interactions.list.length;c++)this.scope.interactions.list[c].stop();return this},o.pointerMoveTolerance=function(c){return l.default.number(c)?(this.scope.interactions.pointerMoveTolerance=c,this):this.scope.interactions.pointerMoveTolerance},o.addDocument=function(c,u){this.scope.addDocument(c,u)},o.removeDocument=function(c){this.scope.removeDocument(c)},o};var xo={};function yd(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Wn(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(xo,"__esModule",{value:!0}),xo.Interactable=void 0;var bd=function(){function i(u,f,_,w){(function(x,S){if(!(x instanceof S))throw new TypeError("Cannot call a class as a function")})(this,i),Wn(this,"options",void 0),Wn(this,"_actions",void 0),Wn(this,"target",void 0),Wn(this,"events",new Er.Eventable),Wn(this,"_context",void 0),Wn(this,"_win",void 0),Wn(this,"_doc",void 0),Wn(this,"_scopeEvents",void 0),Wn(this,"_rectChecker",void 0),this._actions=f.actions,this.target=u,this._context=f.context||_,this._win=(0,n.getWindow)((0,E.trySelector)(u)?this._context:u),this._doc=this._win.document,this._scopeEvents=w,this.set(f)}var o,c;return o=i,(c=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(u,f){return l.default.func(f.onstart)&&this.on("".concat(u,"start"),f.onstart),l.default.func(f.onmove)&&this.on("".concat(u,"move"),f.onmove),l.default.func(f.onend)&&this.on("".concat(u,"end"),f.onend),l.default.func(f.oninertiastart)&&this.on("".concat(u,"inertiastart"),f.oninertiastart),this}},{key:"updatePerActionListeners",value:function(u,f,_){(l.default.array(f)||l.default.object(f))&&this.off(u,f),(l.default.array(_)||l.default.object(_))&&this.on(u,_)}},{key:"setPerAction",value:function(u,f){var _=this._defaults;for(var w in f){var x=w,S=this.options[u],D=f[x];x==="listeners"&&this.updatePerActionListeners(u,S.listeners,D),l.default.array(D)?S[x]=je.from(D):l.default.plainObject(D)?(S[x]=(0,V.default)(S[x]||{},(0,gi.default)(D)),l.default.object(_.perAction[x])&&"enabled"in _.perAction[x]&&(S[x].enabled=D.enabled!==!1)):l.default.bool(D)&&l.default.object(_.perAction[x])?S[x].enabled=D:S[x]=D}}},{key:"getRect",value:function(u){return u=u||(l.default.element(this.target)?this.target:null),l.default.string(this.target)&&(u=u||this._context.querySelector(this.target)),(0,E.getElementRect)(u)}},{key:"rectChecker",value:function(u){var f=this;return l.default.func(u)?(this._rectChecker=u,this.getRect=function(_){var w=(0,V.default)({},f._rectChecker(_));return"width"in w||(w.width=w.right-w.left,w.height=w.bottom-w.top),w},this):u===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(u,f){if((0,E.trySelector)(f)||l.default.object(f)){for(var _ in this.options[u]=f,this._actions.map)this.options[_][u]=f;return this}return this.options[u]}},{key:"origin",value:function(u){return this._backCompatOption("origin",u)}},{key:"deltaSource",value:function(u){return u==="page"||u==="client"?(this.options.deltaSource=u,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(u){return this._context===u.ownerDocument||(0,E.nodeContains)(this._context,u)}},{key:"testIgnoreAllow",value:function(u,f,_){return!this.testIgnore(u.ignoreFrom,f,_)&&this.testAllow(u.allowFrom,f,_)}},{key:"testAllow",value:function(u,f,_){return!u||!!l.default.element(_)&&(l.default.string(u)?(0,E.matchesUpTo)(_,u,f):!!l.default.element(u)&&(0,E.nodeContains)(u,_))}},{key:"testIgnore",value:function(u,f,_){return!(!u||!l.default.element(_))&&(l.default.string(u)?(0,E.matchesUpTo)(_,u,f):!!l.default.element(u)&&(0,E.nodeContains)(u,_))}},{key:"fire",value:function(u){return this.events.fire(u),this}},{key:"_onOff",value:function(u,f,_,w){l.default.object(f)&&!l.default.array(f)&&(w=_,_=null);var x=u==="on"?"add":"remove",S=(0,pe.default)(f,_);for(var D in S){D==="wheel"&&(D=R.default.wheelEvent);for(var N=0;N<S[D].length;N++){var k=S[D][N];(0,Ar.default)(D,this._actions)?this.events[u](D,k):l.default.string(this.target)?this._scopeEvents["".concat(x,"Delegate")](this.target,this._context,D,k,w):this._scopeEvents[x](this.target,D,k,w)}}return this}},{key:"on",value:function(u,f,_){return this._onOff("on",u,f,_)}},{key:"off",value:function(u,f,_){return this._onOff("off",u,f,_)}},{key:"set",value:function(u){var f=this._defaults;for(var _ in l.default.object(u)||(u={}),this.options=(0,gi.default)(f.base),this._actions.methodDict){var w=_,x=this._actions.methodDict[w];this.options[w]={},this.setPerAction(w,(0,V.default)((0,V.default)({},f.perAction),f.actions[w])),this[x](u[w])}for(var S in u)l.default.func(this[S])&&this[S](u[S]);return this}},{key:"unset",value:function(){if(l.default.string(this.target))for(var u in this._scopeEvents.delegatedEvents)for(var f=this._scopeEvents.delegatedEvents[u],_=f.length-1;_>=0;_--){var w=f[_],x=w.selector,S=w.context,D=w.listeners;x===this.target&&S===this._context&&f.splice(_,1);for(var N=D.length-1;N>=0;N--)this._scopeEvents.removeDelegate(this.target,this._context,u,D[N][0],D[N][1])}else this._scopeEvents.remove(this.target,"all")}}])&&yd(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();xo.Interactable=bd;var yo={};function Md(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function xs(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(yo,"__esModule",{value:!0}),yo.InteractableSet=void 0;var Sd=function(){function i(u){var f=this;(function(_,w){if(!(_ instanceof w))throw new TypeError("Cannot call a class as a function")})(this,i),xs(this,"list",[]),xs(this,"selectorMap",{}),xs(this,"scope",void 0),this.scope=u,u.addListeners({"interactable:unset":function(_){var w=_.interactable,x=w.target,S=w._context,D=l.default.string(x)?f.selectorMap[x]:x[f.scope.id],N=je.findIndex(D,function(k){return k.context===S});D[N]&&(D[N].context=null,D[N].interactable=null),D.splice(N,1)}})}var o,c;return o=i,(c=[{key:"new",value:function(u,f){f=(0,V.default)(f||{},{actions:this.scope.actions});var _=new this.scope.Interactable(u,f,this.scope.document,this.scope.events),w={context:_._context,interactable:_};return this.scope.addDocument(_._doc),this.list.push(_),l.default.string(u)?(this.selectorMap[u]||(this.selectorMap[u]=[]),this.selectorMap[u].push(w)):(_.target[this.scope.id]||Object.defineProperty(u,this.scope.id,{value:[],configurable:!0}),u[this.scope.id].push(w)),this.scope.fire("interactable:new",{target:u,options:f,interactable:_,win:this.scope._win}),_}},{key:"get",value:function(u,f){var _=f&&f.context||this.scope.document,w=l.default.string(u),x=w?this.selectorMap[u]:u[this.scope.id];if(!x)return null;var S=je.find(x,function(D){return D.context===_&&(w||D.interactable.inContext(u))});return S&&S.interactable}},{key:"forEachMatch",value:function(u,f){for(var _=0;_<this.list.length;_++){var w=this.list[_],x=void 0;if((l.default.string(w.target)?l.default.element(u)&&E.matchesSelector(u,w.target):u===w.target)&&w.inContext(u)&&(x=f(w)),x!==void 0)return x}}}])&&Md(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();yo.InteractableSet=Sd;var bo={};function wd(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function ys(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}function bs(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var _,w,x=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(_=f.next()).done)&&(x.push(_.value),!u||x.length!==u);S=!0);}catch(N){D=!0,w=N}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return x}}(i,o)||function(c,u){if(c){if(typeof c=="string")return dl(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?dl(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function dl(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}Object.defineProperty(bo,"__esModule",{value:!0}),bo.default=void 0;var Ed=function(){function i(u){(function(f,_){if(!(f instanceof _))throw new TypeError("Cannot call a class as a function")})(this,i),ys(this,"currentTarget",void 0),ys(this,"originalEvent",void 0),ys(this,"type",void 0),this.originalEvent=u,(0,fe.default)(this,u)}var o,c;return o=i,(c=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&wd(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();function Pr(i){if(!l.default.object(i))return{capture:!!i,passive:!1};var o=(0,V.default)({},i);return o.capture=!!i.capture,o.passive=!!i.passive,o}var Td={id:"events",install:function(i){var o,c=[],u={},f=[],_={add:w,remove:x,addDelegate:function(N,k,Q,se,q){var he=Pr(q);if(!u[Q]){u[Q]=[];for(var be=0;be<f.length;be++){var me=f[be];w(me,Q,S),w(me,Q,D,!0)}}var Oe=u[Q],Ge=je.find(Oe,function(Xe){return Xe.selector===N&&Xe.context===k});Ge||(Ge={selector:N,context:k,listeners:[]},Oe.push(Ge)),Ge.listeners.push([se,he])},removeDelegate:function(N,k,Q,se,q){var he,be=Pr(q),me=u[Q],Oe=!1;if(me)for(he=me.length-1;he>=0;he--){var Ge=me[he];if(Ge.selector===N&&Ge.context===k){for(var Xe=Ge.listeners,ut=Xe.length-1;ut>=0;ut--){var gt=bs(Xe[ut],2),st=gt[0],pt=gt[1],xn=pt.capture,qn=pt.passive;if(st===se&&xn===be.capture&&qn===be.passive){Xe.splice(ut,1),Xe.length||(me.splice(he,1),x(k,Q,S),x(k,Q,D,!0)),Oe=!0;break}}if(Oe)break}}},delegateListener:S,delegateUseCapture:D,delegatedEvents:u,documents:f,targets:c,supportsOptions:!1,supportsPassive:!1};function w(N,k,Q,se){var q=Pr(se),he=je.find(c,function(be){return be.eventTarget===N});he||(he={eventTarget:N,events:{}},c.push(he)),he.events[k]||(he.events[k]=[]),N.addEventListener&&!je.contains(he.events[k],Q)&&(N.addEventListener(k,Q,_.supportsOptions?q:q.capture),he.events[k].push(Q))}function x(N,k,Q,se){var q=Pr(se),he=je.findIndex(c,function(ut){return ut.eventTarget===N}),be=c[he];if(be&&be.events)if(k!=="all"){var me=!1,Oe=be.events[k];if(Oe){if(Q==="all"){for(var Ge=Oe.length-1;Ge>=0;Ge--)x(N,k,Oe[Ge],q);return}for(var Xe=0;Xe<Oe.length;Xe++)if(Oe[Xe]===Q){N.removeEventListener(k,Q,_.supportsOptions?q:q.capture),Oe.splice(Xe,1),Oe.length===0&&(delete be.events[k],me=!0);break}}me&&!Object.keys(be.events).length&&c.splice(he,1)}else for(k in be.events)be.events.hasOwnProperty(k)&&x(N,k,"all")}function S(N,k){for(var Q=Pr(k),se=new Ed(N),q=u[N.type],he=bs(te.getEventTargets(N),1)[0],be=he;l.default.element(be);){for(var me=0;me<q.length;me++){var Oe=q[me],Ge=Oe.selector,Xe=Oe.context;if(E.matchesSelector(be,Ge)&&E.nodeContains(Xe,he)&&E.nodeContains(Xe,be)){var ut=Oe.listeners;se.currentTarget=be;for(var gt=0;gt<ut.length;gt++){var st=bs(ut[gt],2),pt=st[0],xn=st[1],qn=xn.capture,Bs=xn.passive;qn===Q.capture&&Bs===Q.passive&&pt(se)}}}be=E.parentNode(be)}}function D(N){return S(N,!0)}return(o=i.document)==null||o.createElement("div").addEventListener("test",null,{get capture(){return _.supportsOptions=!0},get passive(){return _.supportsPassive=!0}}),i.events=_,_}};bo.default=Td;var Mo={};Object.defineProperty(Mo,"__esModule",{value:!0}),Mo.default=void 0;var So={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(i){for(var o=0;o<So.methodOrder.length;o++){var c;c=So.methodOrder[o];var u=So[c](i);if(u)return u}return null},simulationResume:function(i){var o=i.pointerType,c=i.eventType,u=i.eventTarget,f=i.scope;if(!/down|start/i.test(c))return null;for(var _=0;_<f.interactions.list.length;_++){var w=f.interactions.list[_],x=u;if(w.simulation&&w.simulation.allowResume&&w.pointerType===o)for(;x;){if(x===w.element)return w;x=E.parentNode(x)}}return null},mouseOrPen:function(i){var o,c=i.pointerId,u=i.pointerType,f=i.eventType,_=i.scope;if(u!=="mouse"&&u!=="pen")return null;for(var w=0;w<_.interactions.list.length;w++){var x=_.interactions.list[w];if(x.pointerType===u){if(x.simulation&&!fl(x,c))continue;if(x.interacting())return x;o||(o=x)}}if(o)return o;for(var S=0;S<_.interactions.list.length;S++){var D=_.interactions.list[S];if(!(D.pointerType!==u||/down/i.test(f)&&D.simulation))return D}return null},hasPointer:function(i){for(var o=i.pointerId,c=i.scope,u=0;u<c.interactions.list.length;u++){var f=c.interactions.list[u];if(fl(f,o))return f}return null},idle:function(i){for(var o=i.pointerType,c=i.scope,u=0;u<c.interactions.list.length;u++){var f=c.interactions.list[u];if(f.pointers.length===1){var _=f.interactable;if(_&&(!_.options.gesture||!_.options.gesture.enabled))continue}else if(f.pointers.length>=2)continue;if(!f.interacting()&&o===f.pointerType)return f}return null}};function fl(i,o){return i.pointers.some(function(c){return c.id===o})}var Ad=So;Mo.default=Ad;var wo={};function Ms(i){return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ms(i)}function hl(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var _,w,x=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(_=f.next()).done)&&(x.push(_.value),!u||x.length!==u);S=!0);}catch(N){D=!0,w=N}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return x}}(i,o)||function(c,u){if(c){if(typeof c=="string")return pl(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?pl(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function pl(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}function Pd(i,o){if(!(i instanceof o))throw new TypeError("Cannot call a class as a function")}function Cd(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Ss(i,o){return Ss=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Ss(i,o)}function Dd(i,o){if(o&&(Ms(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(i)}function Eo(i){return Eo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},Eo(i)}Object.defineProperty(wo,"__esModule",{value:!0}),wo.default=void 0;var ws=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function ml(i,o){return function(c){var u=o.interactions.list,f=te.getPointerType(c),_=hl(te.getEventTargets(c),2),w=_[0],x=_[1],S=[];if(/^touch/.test(c.type)){o.prevTouchTime=o.now();for(var D=0;D<c.changedTouches.length;D++){var N=c.changedTouches[D],k={pointer:N,pointerId:te.getPointerId(N),pointerType:f,eventType:c.type,eventTarget:w,curEventTarget:x,scope:o},Q=gl(k);S.push([k.pointer,k.eventTarget,k.curEventTarget,Q])}}else{var se=!1;if(!R.default.supportsPointerEvent&&/mouse/.test(c.type)){for(var q=0;q<u.length&&!se;q++)se=u[q].pointerType!=="mouse"&&u[q].pointerIsDown;se=se||o.now()-o.prevTouchTime<500||c.timeStamp===0}if(!se){var he={pointer:c,pointerId:te.getPointerId(c),pointerType:f,eventType:c.type,curEventTarget:x,eventTarget:w,scope:o},be=gl(he);S.push([he.pointer,he.eventTarget,he.curEventTarget,be])}}for(var me=0;me<S.length;me++){var Oe=hl(S[me],4),Ge=Oe[0],Xe=Oe[1],ut=Oe[2];Oe[3][i](Ge,c,Xe,ut)}}}function gl(i){var o=i.pointerType,c=i.scope,u={interaction:Mo.default.search(i),searchDetails:i};return c.fire("interactions:find",u),u.interaction||c.interactions.new({pointerType:o})}function Es(i,o){var c=i.doc,u=i.scope,f=i.options,_=u.interactions.docEvents,w=u.events,x=w[o];for(var S in u.browser.isIOS&&!f.events&&(f.events={passive:!1}),w.delegatedEvents)x(c,S,w.delegateListener),x(c,S,w.delegateUseCapture,!0);for(var D=f&&f.events,N=0;N<_.length;N++){var k=_[N];x(c,k.type,k.listener,D)}}var Ld={id:"core/interactions",install:function(i){for(var o={},c=0;c<ws.length;c++){var u=ws[c];o[u]=ml(u,i)}var f,_=R.default.pEventTypes;function w(){for(var x=0;x<i.interactions.list.length;x++){var S=i.interactions.list[x];if(S.pointerIsDown&&S.pointerType==="touch"&&!S._interacting)for(var D=function(){var k=S.pointers[N];i.documents.some(function(Q){var se=Q.doc;return(0,E.nodeContains)(se,k.downTarget)})||S.removePointer(k.pointer,k.event)},N=0;N<S.pointers.length;N++)D()}}(f=P.default.PointerEvent?[{type:_.down,listener:w},{type:_.down,listener:o.pointerDown},{type:_.move,listener:o.pointerMove},{type:_.up,listener:o.pointerUp},{type:_.cancel,listener:o.pointerUp}]:[{type:"mousedown",listener:o.pointerDown},{type:"mousemove",listener:o.pointerMove},{type:"mouseup",listener:o.pointerUp},{type:"touchstart",listener:w},{type:"touchstart",listener:o.pointerDown},{type:"touchmove",listener:o.pointerMove},{type:"touchend",listener:o.pointerUp},{type:"touchcancel",listener:o.pointerUp}]).push({type:"blur",listener:function(x){for(var S=0;S<i.interactions.list.length;S++)i.interactions.list[S].documentBlur(x)}}),i.prevTouchTime=0,i.Interaction=function(x){(function(q,he){if(typeof he!="function"&&he!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(he&&he.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),he&&Ss(q,he)})(se,x);var S,D,N,k,Q=(N=se,k=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var q,he=Eo(N);if(k){var be=Eo(this).constructor;q=Reflect.construct(he,arguments,be)}else q=he.apply(this,arguments);return Dd(this,q)});function se(){return Pd(this,se),Q.apply(this,arguments)}return S=se,(D=[{key:"pointerMoveTolerance",get:function(){return i.interactions.pointerMoveTolerance},set:function(q){i.interactions.pointerMoveTolerance=q}},{key:"_now",value:function(){return i.now()}}])&&Cd(S.prototype,D),Object.defineProperty(S,"prototype",{writable:!1}),se}(an.default),i.interactions={list:[],new:function(x){x.scopeFire=function(D,N){return i.fire(D,N)};var S=new i.Interaction(x);return i.interactions.list.push(S),S},listeners:o,docEvents:f,pointerMoveTolerance:1},i.usePlugin(Sn.default)},listeners:{"scope:add-document":function(i){return Es(i,"add")},"scope:remove-document":function(i){return Es(i,"remove")},"interactable:unset":function(i,o){for(var c=i.interactable,u=o.interactions.list.length-1;u>=0;u--){var f=o.interactions.list[u];f.interactable===c&&(f.stop(),o.fire("interactions:destroy",{interaction:f}),f.destroy(),o.interactions.list.length>2&&o.interactions.list.splice(u,1))}}},onDocSignal:Es,doOnInteractions:ml,methodNames:ws},Rd=Ld;wo.default=Rd;var Cr={};function Ts(i){return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Ts(i)}function Dr(){return Dr=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(i,o,c){var u=Id(i,o);if(u){var f=Object.getOwnPropertyDescriptor(u,o);return f.get?f.get.call(arguments.length<3?i:c):f.value}},Dr.apply(this,arguments)}function Id(i,o){for(;!Object.prototype.hasOwnProperty.call(i,o)&&(i=ni(i))!==null;);return i}function As(i,o){return As=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},As(i,o)}function Od(i,o){if(o&&(Ts(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(i)}function ni(i){return ni=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},ni(i)}function vl(i,o){if(!(i instanceof o))throw new TypeError("Cannot call a class as a function")}function _l(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function xl(i,o,c){return o&&_l(i.prototype,o),c&&_l(i,c),Object.defineProperty(i,"prototype",{writable:!1}),i}function Gt(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Cr,"__esModule",{value:!0}),Cr.Scope=void 0,Cr.initScope=yl;var Nd=function(){function i(){var o=this;vl(this,i),Gt(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),Gt(this,"isInitialized",!1),Gt(this,"listenerMaps",[]),Gt(this,"browser",R.default),Gt(this,"defaults",(0,gi.default)(br.defaults)),Gt(this,"Eventable",Er.Eventable),Gt(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),Gt(this,"interactStatic",(0,_s.createInteractStatic)(this)),Gt(this,"InteractEvent",Mr.InteractEvent),Gt(this,"Interactable",void 0),Gt(this,"interactables",new yo.InteractableSet(this)),Gt(this,"_win",void 0),Gt(this,"document",void 0),Gt(this,"window",void 0),Gt(this,"documents",[]),Gt(this,"_plugins",{list:[],map:{}}),Gt(this,"onWindowUnload",function(u){return o.removeDocument(u.target)});var c=this;this.Interactable=function(u){(function(S,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(D&&D.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),D&&As(S,D)})(x,u);var f,_,w=(f=x,_=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var S,D=ni(f);if(_){var N=ni(this).constructor;S=Reflect.construct(D,arguments,N)}else S=D.apply(this,arguments);return Od(this,S)});function x(){return vl(this,x),w.apply(this,arguments)}return xl(x,[{key:"_defaults",get:function(){return c.defaults}},{key:"set",value:function(S){return Dr(ni(x.prototype),"set",this).call(this,S),c.fire("interactable:set",{options:S,interactable:this}),this}},{key:"unset",value:function(){Dr(ni(x.prototype),"unset",this).call(this);var S=c.interactables.list.indexOf(this);S<0||(Dr(ni(x.prototype),"unset",this).call(this),c.interactables.list.splice(S,1),c.fire("interactable:unset",{interactable:this}))}}]),x}(xo.Interactable)}return xl(i,[{key:"addListeners",value:function(o,c){this.listenerMaps.push({id:c,map:o})}},{key:"fire",value:function(o,c){for(var u=0;u<this.listenerMaps.length;u++){var f=this.listenerMaps[u].map[o];if(f&&f(c,this,o)===!1)return!1}}},{key:"init",value:function(o){return this.isInitialized?this:yl(this,o)}},{key:"pluginIsInstalled",value:function(o){return this._plugins.map[o.id]||this._plugins.list.indexOf(o)!==-1}},{key:"usePlugin",value:function(o,c){if(!this.isInitialized)return this;if(this.pluginIsInstalled(o))return this;if(o.id&&(this._plugins.map[o.id]=o),this._plugins.list.push(o),o.install&&o.install(this,c),o.listeners&&o.before){for(var u=0,f=this.listenerMaps.length,_=o.before.reduce(function(x,S){return x[S]=!0,x[bl(S)]=!0,x},{});u<f;u++){var w=this.listenerMaps[u].id;if(_[w]||_[bl(w)])break}this.listenerMaps.splice(u,0,{id:o.id,map:o.listeners})}else o.listeners&&this.listenerMaps.push({id:o.id,map:o.listeners});return this}},{key:"addDocument",value:function(o,c){if(this.getDocIndex(o)!==-1)return!1;var u=n.getWindow(o);c=c?(0,V.default)({},c):{},this.documents.push({doc:o,options:c}),this.events.documents.push(o),o!==this.document&&this.events.add(u,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:o,window:u,scope:this,options:c})}},{key:"removeDocument",value:function(o){var c=this.getDocIndex(o),u=n.getWindow(o),f=this.documents[c].options;this.events.remove(u,"unload",this.onWindowUnload),this.documents.splice(c,1),this.events.documents.splice(c,1),this.fire("scope:remove-document",{doc:o,window:u,scope:this,options:f})}},{key:"getDocIndex",value:function(o){for(var c=0;c<this.documents.length;c++)if(this.documents[c].doc===o)return c;return-1}},{key:"getDocOptions",value:function(o){var c=this.getDocIndex(o);return c===-1?null:this.documents[c].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),i}();function yl(i,o){return i.isInitialized=!0,l.default.window(o)&&n.init(o),P.default.init(o),R.default.init(o),wt.default.init(o),i.window=o,i.document=o.document,i.usePlugin(wo.default),i.usePlugin(bo.default),i}function bl(i){return i&&i.replace(/\/.*$/,"")}Cr.Scope=Nd;var Vt={};Object.defineProperty(Vt,"__esModule",{value:!0}),Vt.default=void 0;var Ml=new Cr.Scope,zd=Ml.interactStatic;Vt.default=zd;var Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;Ml.init(Fd);var To={};Object.defineProperty(To,"__esModule",{value:!0}),To.default=void 0,To.default=function(){};var Ao={};Object.defineProperty(Ao,"__esModule",{value:!0}),Ao.default=void 0,Ao.default=function(){};var Po={};function Sl(i,o){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var _,w,x=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(_=f.next()).done)&&(x.push(_.value),!u||x.length!==u);S=!0);}catch(N){D=!0,w=N}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return x}}(i,o)||function(c,u){if(c){if(typeof c=="string")return wl(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?wl(c,u):void 0}}(i,o)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function wl(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}Object.defineProperty(Po,"__esModule",{value:!0}),Po.default=void 0,Po.default=function(i){var o=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(u){var f=Sl(u,2),_=f[0],w=f[1];return _ in i||w in i}),c=function(u,f){for(var _=i.range,w=i.limits,x=w===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:w,S=i.offset,D=S===void 0?{x:0,y:0}:S,N={range:_,grid:i,x:null,y:null},k=0;k<o.length;k++){var Q=Sl(o[k],2),se=Q[0],q=Q[1],he=Math.round((u-D.x)/i[se]),be=Math.round((f-D.y)/i[q]);N[se]=Math.max(x.left,Math.min(x.right,he*i[se]+D.x)),N[q]=Math.max(x.top,Math.min(x.bottom,be*i[q]+D.y))}return N};return c.grid=i,c.coordFields=o,c};var Lr={};Object.defineProperty(Lr,"__esModule",{value:!0}),Object.defineProperty(Lr,"edgeTarget",{enumerable:!0,get:function(){return To.default}}),Object.defineProperty(Lr,"elements",{enumerable:!0,get:function(){return Ao.default}}),Object.defineProperty(Lr,"grid",{enumerable:!0,get:function(){return Po.default}});var Co={};Object.defineProperty(Co,"__esModule",{value:!0}),Co.default=void 0;var Ud={id:"snappers",install:function(i){var o=i.interactStatic;o.snappers=(0,V.default)(o.snappers||{},Lr),o.createSnapGrid=o.snappers.grid}},kd=Ud;Co.default=kd;var Ui={};function El(i,o){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);o&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(i,f).enumerable})),c.push.apply(c,u)}return c}function Ps(i){for(var o=1;o<arguments.length;o++){var c=arguments[o]!=null?arguments[o]:{};o%2?El(Object(c),!0).forEach(function(u){Bd(i,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(c)):El(Object(c)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(c,u))})}return i}function Bd(i,o,c){return o in i?Object.defineProperty(i,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[o]=c,i}Object.defineProperty(Ui,"__esModule",{value:!0}),Ui.default=Ui.aspectRatio=void 0;var Tl={start:function(i){var o=i.state,c=i.rect,u=i.edges,f=i.pageCoords,_=o.options.ratio,w=o.options,x=w.equalDelta,S=w.modifiers;_==="preserve"&&(_=c.width/c.height),o.startCoords=(0,V.default)({},f),o.startRect=(0,V.default)({},c),o.ratio=_,o.equalDelta=x;var D=o.linkedEdges={top:u.top||u.left&&!u.bottom,left:u.left||u.top&&!u.right,bottom:u.bottom||u.right&&!u.top,right:u.right||u.bottom&&!u.left};if(o.xIsPrimaryAxis=!(!u.left&&!u.right),o.equalDelta){var N=(D.left?1:-1)*(D.top?1:-1);o.edgeSign={x:N,y:N}}else o.edgeSign={x:D.left?-1:1,y:D.top?-1:1};if((0,V.default)(i.edges,D),S&&S.length){var k=new vi.default(i.interaction);k.copyFrom(i.interaction.modification),k.prepareStates(S),o.subModification=k,k.startAll(Ps({},i))}},set:function(i){var o=i.state,c=i.rect,u=i.coords,f=(0,V.default)({},u),_=o.equalDelta?Gd:Vd;if(_(o,o.xIsPrimaryAxis,u,c),!o.subModification)return null;var w=(0,V.default)({},c);(0,ae.addEdges)(o.linkedEdges,w,{x:u.x-f.x,y:u.y-f.y});var x=o.subModification.setAll(Ps(Ps({},i),{},{rect:w,edges:o.linkedEdges,pageCoords:u,prevCoords:u,prevRect:w})),S=x.delta;return x.changed&&(_(o,Math.abs(S.x)>Math.abs(S.y),x.coords,x.rect),(0,V.default)(u,x.coords)),x.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function Gd(i,o,c){var u=i.startCoords,f=i.edgeSign;o?c.y=u.y+(c.x-u.x)*f.y:c.x=u.x+(c.y-u.y)*f.x}function Vd(i,o,c,u){var f=i.startRect,_=i.startCoords,w=i.ratio,x=i.edgeSign;if(o){var S=u.width/w;c.y=_.y+(S-f.height)*x.y}else{var D=u.height*w;c.x=_.x+(D-f.width)*x.x}}Ui.aspectRatio=Tl;var Hd=(0,Bt.makeModifier)(Tl,"aspectRatio");Ui.default=Hd;var yi={};Object.defineProperty(yi,"__esModule",{value:!0}),yi.default=void 0;var Al=function(){};Al._defaults={};var Wd=Al;yi.default=Wd;var Cs={};Object.defineProperty(Cs,"__esModule",{value:!0}),Object.defineProperty(Cs,"default",{enumerable:!0,get:function(){return yi.default}});var Zt={};function Ds(i,o,c){return l.default.func(i)?ae.resolveRectLike(i,o.interactable,o.element,[c.x,c.y,o]):ae.resolveRectLike(i,o.interactable,o.element)}Object.defineProperty(Zt,"__esModule",{value:!0}),Zt.default=void 0,Zt.getRestrictionRect=Ds,Zt.restrict=void 0;var Pl={start:function(i){var o=i.rect,c=i.startOffset,u=i.state,f=i.interaction,_=i.pageCoords,w=u.options,x=w.elementRect,S=(0,V.default)({left:0,top:0,right:0,bottom:0},w.offset||{});if(o&&x){var D=Ds(w.restriction,f,_);if(D){var N=D.right-D.left-o.width,k=D.bottom-D.top-o.height;N<0&&(S.left+=N,S.right+=N),k<0&&(S.top+=k,S.bottom+=k)}S.left+=c.left-o.width*x.left,S.top+=c.top-o.height*x.top,S.right+=c.right-o.width*(1-x.right),S.bottom+=c.bottom-o.height*(1-x.bottom)}u.offset=S},set:function(i){var o=i.coords,c=i.interaction,u=i.state,f=u.options,_=u.offset,w=Ds(f.restriction,c,o);if(w){var x=ae.xywhToTlbr(w);o.x=Math.max(Math.min(x.right-_.right,o.x),x.left+_.left),o.y=Math.max(Math.min(x.bottom-_.bottom,o.y),x.top+_.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Zt.restrict=Pl;var jd=(0,Bt.makeModifier)(Pl,"restrict");Zt.default=jd;var zn={};Object.defineProperty(zn,"__esModule",{value:!0}),zn.restrictEdges=zn.default=void 0;var Cl={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Dl={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Ll(i,o){for(var c=["top","left","bottom","right"],u=0;u<c.length;u++){var f=c[u];f in i||(i[f]=o[f])}return i}var Rl={noInner:Cl,noOuter:Dl,start:function(i){var o,c=i.interaction,u=i.startOffset,f=i.state,_=f.options;if(_){var w=(0,Zt.getRestrictionRect)(_.offset,c,c.coords.start.page);o=ae.rectToXY(w)}o=o||{x:0,y:0},f.offset={top:o.y+u.top,left:o.x+u.left,bottom:o.y-u.bottom,right:o.x-u.right}},set:function(i){var o=i.coords,c=i.edges,u=i.interaction,f=i.state,_=f.offset,w=f.options;if(c){var x=(0,V.default)({},o),S=(0,Zt.getRestrictionRect)(w.inner,u,x)||{},D=(0,Zt.getRestrictionRect)(w.outer,u,x)||{};Ll(S,Cl),Ll(D,Dl),c.top?o.y=Math.min(Math.max(D.top+_.top,x.y),S.top+_.top):c.bottom&&(o.y=Math.max(Math.min(D.bottom+_.bottom,x.y),S.bottom+_.bottom)),c.left?o.x=Math.min(Math.max(D.left+_.left,x.x),S.left+_.left):c.right&&(o.x=Math.max(Math.min(D.right+_.right,x.x),S.right+_.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};zn.restrictEdges=Rl;var qd=(0,Bt.makeModifier)(Rl,"restrictEdges");zn.default=qd;var ki={};Object.defineProperty(ki,"__esModule",{value:!0}),ki.restrictRect=ki.default=void 0;var Xd=(0,V.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(i){}},Zt.restrict.defaults),Il={start:Zt.restrict.start,set:Zt.restrict.set,defaults:Xd};ki.restrictRect=Il;var Yd=(0,Bt.makeModifier)(Il,"restrictRect");ki.default=Yd;var Bi={};Object.defineProperty(Bi,"__esModule",{value:!0}),Bi.restrictSize=Bi.default=void 0;var Kd={width:-1/0,height:-1/0},$d={width:1/0,height:1/0},Ol={start:function(i){return zn.restrictEdges.start(i)},set:function(i){var o=i.interaction,c=i.state,u=i.rect,f=i.edges,_=c.options;if(f){var w=ae.tlbrToXywh((0,Zt.getRestrictionRect)(_.min,o,i.coords))||Kd,x=ae.tlbrToXywh((0,Zt.getRestrictionRect)(_.max,o,i.coords))||$d;c.options={endOnly:_.endOnly,inner:(0,V.default)({},zn.restrictEdges.noInner),outer:(0,V.default)({},zn.restrictEdges.noOuter)},f.top?(c.options.inner.top=u.bottom-w.height,c.options.outer.top=u.bottom-x.height):f.bottom&&(c.options.inner.bottom=u.top+w.height,c.options.outer.bottom=u.top+x.height),f.left?(c.options.inner.left=u.right-w.width,c.options.outer.left=u.right-x.width):f.right&&(c.options.inner.right=u.left+w.width,c.options.outer.right=u.left+x.width),zn.restrictEdges.set(i),c.options=_}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Bi.restrictSize=Ol;var Zd=(0,Bt.makeModifier)(Ol,"restrictSize");Bi.default=Zd;var Ls={};Object.defineProperty(Ls,"__esModule",{value:!0}),Object.defineProperty(Ls,"default",{enumerable:!0,get:function(){return yi.default}});var ii={};Object.defineProperty(ii,"__esModule",{value:!0}),ii.snap=ii.default=void 0;var Nl={start:function(i){var o,c=i.interaction,u=i.interactable,f=i.element,_=i.rect,w=i.state,x=i.startOffset,S=w.options,D=S.offsetWithOrigin?function(Q){var se=Q.interaction.element;return(0,ae.rectToXY)((0,ae.resolveRectLike)(Q.state.options.origin,null,null,[se]))||(0,de.default)(Q.interactable,se,Q.interaction.prepared.name)}(i):{x:0,y:0};if(S.offset==="startCoords")o={x:c.coords.start.page.x,y:c.coords.start.page.y};else{var N=(0,ae.resolveRectLike)(S.offset,u,f,[c]);(o=(0,ae.rectToXY)(N)||{x:0,y:0}).x+=D.x,o.y+=D.y}var k=S.relativePoints;w.offsets=_&&k&&k.length?k.map(function(Q,se){return{index:se,relativePoint:Q,x:x.left-_.width*Q.x+o.x,y:x.top-_.height*Q.y+o.y}}):[{index:0,relativePoint:null,x:o.x,y:o.y}]},set:function(i){var o=i.interaction,c=i.coords,u=i.state,f=u.options,_=u.offsets,w=(0,de.default)(o.interactable,o.element,o.prepared.name),x=(0,V.default)({},c),S=[];f.offsetWithOrigin||(x.x-=w.x,x.y-=w.y);for(var D=0;D<_.length;D++)for(var N=_[D],k=x.x-N.x,Q=x.y-N.y,se=0,q=f.targets.length;se<q;se++){var he,be=f.targets[se];(he=l.default.func(be)?be(k,Q,o._proxy,N,se):be)&&S.push({x:(l.default.number(he.x)?he.x:k)+N.x,y:(l.default.number(he.y)?he.y:Q)+N.y,range:l.default.number(he.range)?he.range:f.range,source:be,index:se,offset:N})}for(var me={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Oe=0;Oe<S.length;Oe++){var Ge=S[Oe],Xe=Ge.range,ut=Ge.x-x.x,gt=Ge.y-x.y,st=(0,ee.default)(ut,gt),pt=st<=Xe;Xe===1/0&&me.inRange&&me.range!==1/0&&(pt=!1),me.target&&!(pt?me.inRange&&Xe!==1/0?st/Xe<me.distance/me.range:Xe===1/0&&me.range!==1/0||st<me.distance:!me.inRange&&st<me.distance)||(me.target=Ge,me.distance=st,me.range=Xe,me.inRange=pt,me.delta.x=ut,me.delta.y=gt)}return me.inRange&&(c.x=me.target.x,c.y=me.target.y),u.closest=me,me},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};ii.snap=Nl;var Jd=(0,Bt.makeModifier)(Nl,"snap");ii.default=Jd;var jn={};function zl(i,o){(o==null||o>i.length)&&(o=i.length);for(var c=0,u=Array(o);c<o;c++)u[c]=i[c];return u}Object.defineProperty(jn,"__esModule",{value:!0}),jn.snapSize=jn.default=void 0;var Fl={start:function(i){var o=i.state,c=i.edges,u=o.options;if(!c)return null;i.state={options:{targets:null,relativePoints:[{x:c.left?0:1,y:c.top?0:1}],offset:u.offset||"self",origin:{x:0,y:0},range:u.range}},o.targetFields=o.targetFields||[["width","height"],["x","y"]],ii.snap.start(i),o.offsets=i.state.offsets,i.state=o},set:function(i){var o,c,u=i.interaction,f=i.state,_=i.coords,w=f.options,x=f.offsets,S={x:_.x-x[0].x,y:_.y-x[0].y};f.options=(0,V.default)({},w),f.options.targets=[];for(var D=0;D<(w.targets||[]).length;D++){var N=(w.targets||[])[D],k=void 0;if(k=l.default.func(N)?N(S.x,S.y,u):N){for(var Q=0;Q<f.targetFields.length;Q++){var se=(o=f.targetFields[Q],c=2,function(me){if(Array.isArray(me))return me}(o)||function(me,Oe){var Ge=me==null?null:typeof Symbol<"u"&&me[Symbol.iterator]||me["@@iterator"];if(Ge!=null){var Xe,ut,gt=[],st=!0,pt=!1;try{for(Ge=Ge.call(me);!(st=(Xe=Ge.next()).done)&&(gt.push(Xe.value),!Oe||gt.length!==Oe);st=!0);}catch(xn){pt=!0,ut=xn}finally{try{st||Ge.return==null||Ge.return()}finally{if(pt)throw ut}}return gt}}(o,c)||function(me,Oe){if(me){if(typeof me=="string")return zl(me,Oe);var Ge=Object.prototype.toString.call(me).slice(8,-1);return Ge==="Object"&&me.constructor&&(Ge=me.constructor.name),Ge==="Map"||Ge==="Set"?Array.from(me):Ge==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ge)?zl(me,Oe):void 0}}(o,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),q=se[0],he=se[1];if(q in k||he in k){k.x=k[q],k.y=k[he];break}}f.options.targets.push(k)}}var be=ii.snap.set(i);return f.options=w,be},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};jn.snapSize=Fl;var Qd=(0,Bt.makeModifier)(Fl,"snapSize");jn.default=Qd;var Gi={};Object.defineProperty(Gi,"__esModule",{value:!0}),Gi.snapEdges=Gi.default=void 0;var Ul={start:function(i){var o=i.edges;return o?(i.state.targetFields=i.state.targetFields||[[o.left?"left":"right",o.top?"top":"bottom"]],jn.snapSize.start(i)):null},set:jn.snapSize.set,defaults:(0,V.default)((0,gi.default)(jn.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};Gi.snapEdges=Ul;var ef=(0,Bt.makeModifier)(Ul,"snapEdges");Gi.default=ef;var Rs={};Object.defineProperty(Rs,"__esModule",{value:!0}),Object.defineProperty(Rs,"default",{enumerable:!0,get:function(){return yi.default}});var Is={};Object.defineProperty(Is,"__esModule",{value:!0}),Object.defineProperty(Is,"default",{enumerable:!0,get:function(){return yi.default}});var Vi={};Object.defineProperty(Vi,"__esModule",{value:!0}),Vi.default=void 0;var tf={aspectRatio:Ui.default,restrictEdges:zn.default,restrict:Zt.default,restrictRect:ki.default,restrictSize:Bi.default,snapEdges:Gi.default,snap:ii.default,snapSize:jn.default,spring:Rs.default,avoid:Cs.default,transform:Is.default,rubberband:Ls.default};Vi.default=tf;var Rr={};Object.defineProperty(Rr,"__esModule",{value:!0}),Rr.default=void 0;var nf={id:"modifiers",install:function(i){var o=i.interactStatic;for(var c in i.usePlugin(Bt.default),i.usePlugin(Co.default),o.modifiers=Vi.default,Vi.default){var u=Vi.default[c],f=u._defaults,_=u._methods;f._methods=_,i.defaults.perAction[c]=f}}},rf=nf;Rr.default=rf;var bi={};function Os(i){return Os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Os(i)}function of(i,o){for(var c=0;c<o.length;c++){var u=o[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Ns(i,o){return Ns=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Ns(i,o)}function sf(i,o){if(o&&(Os(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return zs(i)}function zs(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Do(i){return Do=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},Do(i)}Object.defineProperty(bi,"__esModule",{value:!0}),bi.default=bi.PointerEvent=void 0;var af=function(i){(function(x,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");x.prototype=Object.create(S&&S.prototype,{constructor:{value:x,writable:!0,configurable:!0}}),Object.defineProperty(x,"prototype",{writable:!1}),S&&Ns(x,S)})(w,i);var o,c,u,f,_=(u=w,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var x,S=Do(u);if(f){var D=Do(this).constructor;x=Reflect.construct(S,arguments,D)}else x=S.apply(this,arguments);return sf(this,x)});function w(x,S,D,N,k,Q){var se;if(function(be,me){if(!(be instanceof me))throw new TypeError("Cannot call a class as a function")}(this,w),se=_.call(this,k),te.pointerExtend(zs(se),D),D!==S&&te.pointerExtend(zs(se),S),se.timeStamp=Q,se.originalEvent=D,se.type=x,se.pointerId=te.getPointerId(S),se.pointerType=te.getPointerType(S),se.target=N,se.currentTarget=null,x==="tap"){var q=k.getPointerIndex(S);se.dt=se.timeStamp-k.pointers[q].downTime;var he=se.timeStamp-k.tapTime;se.double=!!k.prevTap&&k.prevTap.type!=="doubletap"&&k.prevTap.target===se.target&&he<500}else x==="doubletap"&&(se.dt=S.timeStamp-k.tapTime,se.double=!0);return se}return o=w,(c=[{key:"_subtractOrigin",value:function(x){var S=x.x,D=x.y;return this.pageX-=S,this.pageY-=D,this.clientX-=S,this.clientY-=D,this}},{key:"_addOrigin",value:function(x){var S=x.x,D=x.y;return this.pageX+=S,this.pageY+=D,this.clientX+=S,this.clientY+=D,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&of(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),w}(He.BaseEvent);bi.PointerEvent=bi.default=af;var Ir={};Object.defineProperty(Ir,"__esModule",{value:!0}),Ir.default=void 0;var Lo={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(i){i.pointerEvents=Lo,i.defaults.actions.pointerEvents=Lo.defaults,(0,V.default)(i.actions.phaselessTypes,Lo.types)},listeners:{"interactions:new":function(i){var o=i.interaction;o.prevTap=null,o.tapTime=0},"interactions:update-pointer":function(i){var o=i.down,c=i.pointerInfo;!o&&c.hold||(c.hold={duration:1/0,timeout:null})},"interactions:move":function(i,o){var c=i.interaction,u=i.pointer,f=i.event,_=i.eventTarget;i.duplicate||c.pointerIsDown&&!c.pointerWasMoved||(c.pointerIsDown&&Fs(i),ri({interaction:c,pointer:u,event:f,eventTarget:_,type:"move"},o))},"interactions:down":function(i,o){(function(c,u){for(var f=c.interaction,_=c.pointer,w=c.event,x=c.eventTarget,S=c.pointerIndex,D=f.pointers[S].hold,N=E.getPath(x),k={interaction:f,pointer:_,event:w,eventTarget:x,type:"hold",targets:[],path:N,node:null},Q=0;Q<N.length;Q++){var se=N[Q];k.node=se,u.fire("pointerEvents:collect-targets",k)}if(k.targets.length){for(var q=1/0,he=0;he<k.targets.length;he++){var be=k.targets[he].eventable.options.holdDuration;be<q&&(q=be)}D.duration=q,D.timeout=setTimeout(function(){ri({interaction:f,eventTarget:x,pointer:_,event:w,type:"hold"},u)},q)}})(i,o),ri(i,o)},"interactions:up":function(i,o){Fs(i),ri(i,o),function(c,u){var f=c.interaction,_=c.pointer,w=c.event,x=c.eventTarget;f.pointerWasMoved||ri({interaction:f,eventTarget:x,pointer:_,event:w,type:"tap"},u)}(i,o)},"interactions:cancel":function(i,o){Fs(i),ri(i,o)}},PointerEvent:bi.PointerEvent,fire:ri,collectEventTargets:kl,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function ri(i,o){var c=i.interaction,u=i.pointer,f=i.event,_=i.eventTarget,w=i.type,x=i.targets,S=x===void 0?kl(i,o):x,D=new bi.PointerEvent(w,u,f,_,c,o.now());o.fire("pointerEvents:new",{pointerEvent:D});for(var N={interaction:c,pointer:u,event:f,eventTarget:_,targets:S,type:w,pointerEvent:D},k=0;k<S.length;k++){var Q=S[k];for(var se in Q.props||{})D[se]=Q.props[se];var q=(0,de.default)(Q.eventable,Q.node);if(D._subtractOrigin(q),D.eventable=Q.eventable,D.currentTarget=Q.node,Q.eventable.fire(D),D._addOrigin(q),D.immediatePropagationStopped||D.propagationStopped&&k+1<S.length&&S[k+1].node!==D.currentTarget)break}if(o.fire("pointerEvents:fired",N),w==="tap"){var he=D.double?ri({interaction:c,pointer:u,event:f,eventTarget:_,type:"doubletap"},o):D;c.prevTap=he,c.tapTime=he.timeStamp}return D}function kl(i,o){var c=i.interaction,u=i.pointer,f=i.event,_=i.eventTarget,w=i.type,x=c.getPointerIndex(u),S=c.pointers[x];if(w==="tap"&&(c.pointerWasMoved||!S||S.downTarget!==_))return[];for(var D=E.getPath(_),N={interaction:c,pointer:u,event:f,eventTarget:_,type:w,path:D,targets:[],node:null},k=0;k<D.length;k++){var Q=D[k];N.node=Q,o.fire("pointerEvents:collect-targets",N)}return w==="hold"&&(N.targets=N.targets.filter(function(se){var q;return se.eventable.options.holdDuration===((q=c.pointers[x])==null?void 0:q.hold.duration)})),N.targets}function Fs(i){var o=i.interaction,c=i.pointerIndex,u=o.pointers[c].hold;u&&u.timeout&&(clearTimeout(u.timeout),u.timeout=null)}var lf=Lo;Ir.default=lf;var Ro={};function cf(i){var o=i.interaction;o.holdIntervalHandle&&(clearInterval(o.holdIntervalHandle),o.holdIntervalHandle=null)}Object.defineProperty(Ro,"__esModule",{value:!0}),Ro.default=void 0;var uf={id:"pointer-events/holdRepeat",install:function(i){i.usePlugin(Ir.default);var o=i.pointerEvents;o.defaults.holdRepeatInterval=0,o.types.holdrepeat=i.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(i,o){return i["pointerEvents:".concat(o)]=cf,i},{"pointerEvents:new":function(i){var o=i.pointerEvent;o.type==="hold"&&(o.count=(o.count||0)+1)},"pointerEvents:fired":function(i,o){var c=i.interaction,u=i.pointerEvent,f=i.eventTarget,_=i.targets;if(u.type==="hold"&&_.length){var w=_[0].eventable.options.holdRepeatInterval;w<=0||(c.holdIntervalHandle=setTimeout(function(){o.pointerEvents.fire({interaction:c,eventTarget:f,type:"hold",pointer:u,event:u},o)},w))}}})},df=uf;Ro.default=df;var Io={};function ff(i){return(0,V.default)(this.events.options,i),this}Object.defineProperty(Io,"__esModule",{value:!0}),Io.default=void 0;var hf={id:"pointer-events/interactableTargets",install:function(i){var o=i.Interactable;o.prototype.pointerEvents=ff;var c=o.prototype._backCompatOption;o.prototype._backCompatOption=function(u,f){var _=c.call(this,u,f);return _===this&&(this.events.options[u]=f),_}},listeners:{"pointerEvents:collect-targets":function(i,o){var c=i.targets,u=i.node,f=i.type,_=i.eventTarget;o.interactables.forEachMatch(u,function(w){var x=w.events,S=x.options;x.types[f]&&x.types[f].length&&w.testIgnoreAllow(S,u,_)&&c.push({node:u,eventable:x,props:{interactable:w}})})},"interactable:new":function(i){var o=i.interactable;o.events.getRect=function(c){return o.getRect(c)}},"interactable:set":function(i,o){var c=i.interactable,u=i.options;(0,V.default)(c.events.options,o.pointerEvents.defaults),(0,V.default)(c.events.options,u.pointerEvents||{})}}},pf=hf;Io.default=pf;var Or={};Object.defineProperty(Or,"__esModule",{value:!0}),Or.default=void 0;var mf={id:"pointer-events",install:function(i){i.usePlugin(Ir),i.usePlugin(Ro.default),i.usePlugin(Io.default)}},gf=mf;Or.default=gf;var Hi={};function Bl(i){var o=i.Interactable;i.actions.phases.reflow=!0,o.prototype.reflow=function(c){return function(u,f,_){for(var w=l.default.string(u.target)?je.from(u._context.querySelectorAll(u.target)):[u.target],x=_.window.Promise,S=x?[]:null,D=function(){var k=w[N],Q=u.getRect(k);if(!Q)return"break";var se=je.find(_.interactions.list,function(Oe){return Oe.interacting()&&Oe.interactable===u&&Oe.element===k&&Oe.prepared.name===f.name}),q=void 0;if(se)se.move(),S&&(q=se._reflowPromise||new x(function(Oe){se._reflowResolve=Oe}));else{var he=(0,ae.tlbrToXywh)(Q),be={page:{x:he.x,y:he.y},client:{x:he.x,y:he.y},timeStamp:_.now()},me=te.coordsToEvent(be);q=function(Oe,Ge,Xe,ut,gt){var st=Oe.interactions.new({pointerType:"reflow"}),pt={interaction:st,event:gt,pointer:gt,eventTarget:Xe,phase:"reflow"};st.interactable=Ge,st.element=Xe,st.prevEvent=gt,st.updatePointer(gt,gt,Xe,!0),te.setZeroCoords(st.coords.delta),(0,ne.copyAction)(st.prepared,ut),st._doPhase(pt);var xn=Oe.window.Promise,qn=xn?new xn(function(Bs){st._reflowResolve=Bs}):void 0;return st._reflowPromise=qn,st.start(ut,Ge,Xe),st._interacting?(st.move(pt),st.end(gt)):(st.stop(),st._reflowResolve()),st.removePointer(gt,gt),qn}(_,u,k,f,me)}S&&S.push(q)},N=0;N<w.length&&D()!=="break";N++);return S&&x.all(S).then(function(){return u})}(this,c,i)}}Object.defineProperty(Hi,"__esModule",{value:!0}),Hi.default=void 0,Hi.install=Bl;var vf={id:"reflow",install:Bl,listeners:{"interactions:stop":function(i,o){var c=i.interaction;c.pointerType==="reflow"&&(c._reflowResolve&&c._reflowResolve(),je.remove(o.interactions.list,c))}}},_f=vf;Hi.default=_f;var _n={exports:{}};function Us(i){return Us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Us(i)}Object.defineProperty(_n.exports,"__esModule",{value:!0}),_n.exports.default=void 0,Vt.default.use(Sn.default),Vt.default.use(ti.default),Vt.default.use(Or.default),Vt.default.use(xi.default),Vt.default.use(Rr.default),Vt.default.use(Hn.default),Vt.default.use(_t.default),Vt.default.use(Mn.default),Vt.default.use(Hi.default);var xf=Vt.default;if(_n.exports.default=xf,Us(_n)==="object"&&_n)try{_n.exports=Vt.default}catch{}Vt.default.default=Vt.default,_t.default,Mn.default,Hn.default,Sn.default,fo.default,xi.default,Vt.default,Rr.default,ti.default,Or.default,Hi.default,_n=_n.exports;var Mi={exports:{}};function ks(i){return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ks(i)}Object.defineProperty(Mi.exports,"__esModule",{value:!0}),Mi.exports.default=void 0;var yf=_n.default;if(Mi.exports.default=yf,ks(Mi)==="object"&&Mi)try{Mi.exports=_n.default}catch{}return _n.default.default=_n.default,Mi.exports})})(O0);const N0=I0(La),{abs:n_,cos:z0,sin:F0,cosh:i_,sinh:r_,acos:o_,acosh:s_,min:a_,max:Ra,round:l_,sqrt:ts,sign:c_,floor:u_,log:d_,PI:Qo}=Math,qe={curvature:0,edges:[],vertices:[],ranges:[]},U0=a=>{Object.assign(qe,a)},k0=(a,e,t=null)=>{const n=t===null?qe.curvature:t;let r=0;for(let s=0;s<a.length;s++)r+=a[s]*e[s]*(s===a.length-1&&n||1);return r},ba=(a,e)=>{const[t,n]=a,r=z0(e),s=F0(e);a[0]=t*r-n*s,a[1]=t*s+n*r},Ma=(a,e)=>{if(qe.curvature!==0){const t=e/ts(k0(a,a,1)),n=new Array(we.dimensions-1);for(let r=0;r<we.dimensions-1;r++)n[r]=a[r]*t;ns(a,n)}else for(let t=0;t<we.dimensions;t++)a[t]*=1-e},ns=(a,e)=>{const[t,n,r,s]=a,[d,l,h]=e,p=qe.curvature,m=ts(1-p*d*d),g=ts(1-p*l*l),v=d,M=l;if(p!==0)if(we.dimensions===3)a[0]=t*m+n*v*M+r*v*g,a[1]=+n*g-p*r*M,a[2]=-p*t*v+n*m*M+r*m*g;else if(h){const C=ts(1-p*h*h),b=h;a[0]=t*m-p*s*v,a[1]=-p*t*v*M+n*g-p*s*m*M,a[2]=-p*t*g*v*b-p*n*M*b+r*C-p*s*m*g*b,a[3]=t*g*C*v+n*C*M+r*b+s*m*g*C}else a[0]=t*m-p*s*v,a[1]=-p*t*v*M+n*g-p*s*m*M,a[3]=t*g*v+n*M+s*m*g;else a[0]=t+d,a[1]=n+l,h&&(a[2]=r+h)},cu={type:"change"},Sa={type:"start"},uu={type:"end"};class B0 extends Fi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:ji.ROTATE,TWO:ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",It),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",It),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(cu),n.update(),s=r.NONE},this.update=function(){const U=new H,X=new Ni().setFromUnitVectors(e.up,new H(0,1,0)),Ee=X.clone().invert(),ye=new H,Ie=new Ni,Ne=2*Math.PI;return function(){const Ke=n.object.position;U.copy(Ke).sub(n.target),U.applyQuaternion(X),l.setFromVector3(U),n.autoRotate&&s===r.NONE&&z(K()),n.enableDamping?(l.theta+=h.theta*n.dampingFactor,l.phi+=h.phi*n.dampingFactor):(l.theta+=h.theta,l.phi+=h.phi);let tt=n.minAzimuthAngle,lt=n.maxAzimuthAngle;return isFinite(tt)&&isFinite(lt)&&(tt<-Math.PI?tt+=Ne:tt>Math.PI&&(tt-=Ne),lt<-Math.PI?lt+=Ne:lt>Math.PI&&(lt-=Ne),tt<=lt?l.theta=Math.max(tt,Math.min(lt,l.theta)):l.theta=l.theta>(tt+lt)/2?Math.max(tt,l.theta):Math.min(lt,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=p,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),U.setFromSpherical(l),U.applyQuaternion(Ee),Ke.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),m.set(0,0,0)),p=1,g||ye.distanceToSquared(n.object.position)>d||8*(1-Ie.dot(n.object.quaternion))>d?(n.dispatchEvent(cu),ye.copy(n.object.position),Ie.copy(n.object.quaternion),g=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ie),n.domElement.removeEventListener("pointerdown",Et),n.domElement.removeEventListener("pointercancel",At),n.domElement.removeEventListener("wheel",Kt),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Tt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",It),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const d=1e-6,l=new lu,h=new lu;let p=1;const m=new H;let g=!1;const v=new ke,M=new ke,C=new ke,b=new ke,y=new ke,P=new ke,O=new ke,A=new ke,F=new ke,R=[],B={};function K(){return 2*Math.PI/60/60*n.autoRotateSpeed}function E(){return Math.pow(.95,n.zoomSpeed)}function z(U){h.theta-=U}function W(U){h.phi-=U}const le=function(){const U=new H;return function(Ee,ye){U.setFromMatrixColumn(ye,0),U.multiplyScalar(-Ee),m.add(U)}}(),ue=function(){const U=new H;return function(Ee,ye){n.screenSpacePanning===!0?U.setFromMatrixColumn(ye,1):(U.setFromMatrixColumn(ye,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(Ee),m.add(U)}}(),J=function(){const U=new H;return function(Ee,ye){const Ie=n.domElement;if(n.object.isPerspectiveCamera){const Ne=n.object.position;U.copy(Ne).sub(n.target);let ze=U.length();ze*=Math.tan(n.object.fov/2*Math.PI/180),le(2*Ee*ze/Ie.clientHeight,n.object.matrix),ue(2*ye*ze/Ie.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(le(Ee*(n.object.right-n.object.left)/n.object.zoom/Ie.clientWidth,n.object.matrix),ue(ye*(n.object.top-n.object.bottom)/n.object.zoom/Ie.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(U){n.object.isPerspectiveCamera?p/=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*U)),n.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(U){n.object.isPerspectiveCamera?p*=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/U)),n.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ae(U){v.set(U.clientX,U.clientY)}function _e(U){O.set(U.clientX,U.clientY)}function ce(U){b.set(U.clientX,U.clientY)}function de(U){M.set(U.clientX,U.clientY),C.subVectors(M,v).multiplyScalar(n.rotateSpeed);const X=n.domElement;z(2*Math.PI*C.x/X.clientHeight),W(2*Math.PI*C.y/X.clientHeight),v.copy(M),n.update()}function pe(U){A.set(U.clientX,U.clientY),F.subVectors(A,O),F.y>0?j(E()):F.y<0&&V(E()),O.copy(A),n.update()}function Re(U){y.set(U.clientX,U.clientY),P.subVectors(y,b).multiplyScalar(n.panSpeed),J(P.x,P.y),b.copy(y),n.update()}function ee(U){U.deltaY<0?V(E()):U.deltaY>0&&j(E()),n.update()}function fe(U){let X=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):J(-n.keyPanSpeed,0),X=!0;break}X&&(U.preventDefault(),n.update())}function te(){if(R.length===1)v.set(R[0].pageX,R[0].pageY);else{const U=.5*(R[0].pageX+R[1].pageX),X=.5*(R[0].pageY+R[1].pageY);v.set(U,X)}}function Z(){if(R.length===1)b.set(R[0].pageX,R[0].pageY);else{const U=.5*(R[0].pageX+R[1].pageX),X=.5*(R[0].pageY+R[1].pageY);b.set(U,X)}}function Pe(){const U=R[0].pageX-R[1].pageX,X=R[0].pageY-R[1].pageY,Ee=Math.sqrt(U*U+X*X);O.set(0,Ee)}function De(){n.enableZoom&&Pe(),n.enablePan&&Z()}function Le(){n.enableZoom&&Pe(),n.enableRotate&&te()}function Ce(U){if(R.length==1)M.set(U.pageX,U.pageY);else{const Ee=Fe(U),ye=.5*(U.pageX+Ee.x),Ie=.5*(U.pageY+Ee.y);M.set(ye,Ie)}C.subVectors(M,v).multiplyScalar(n.rotateSpeed);const X=n.domElement;z(2*Math.PI*C.x/X.clientHeight),W(2*Math.PI*C.y/X.clientHeight),v.copy(M)}function Be(U){if(R.length===1)y.set(U.pageX,U.pageY);else{const X=Fe(U),Ee=.5*(U.pageX+X.x),ye=.5*(U.pageY+X.y);y.set(Ee,ye)}P.subVectors(y,b).multiplyScalar(n.panSpeed),J(P.x,P.y),b.copy(y)}function He(U){const X=Fe(U),Ee=U.pageX-X.x,ye=U.pageY-X.y,Ie=Math.sqrt(Ee*Ee+ye*ye);A.set(0,Ie),F.set(0,Math.pow(A.y/O.y,n.zoomSpeed)),j(F.y),O.copy(A)}function Ye(U){n.enableZoom&&He(U),n.enablePan&&Be(U)}function rt(U){n.enableZoom&&He(U),n.enableRotate&&Ce(U)}function Et(U){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",je),n.domElement.addEventListener("pointerup",Tt)),ve(U),U.pointerType==="touch"?I(U):at(U))}function je(U){n.enabled!==!1&&(U.pointerType==="touch"?T(U):dt(U))}function Tt(U){xe(U),R.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Tt)),n.dispatchEvent(uu),s=r.NONE}function At(U){xe(U)}function at(U){let X;switch(U.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Wi.DOLLY:if(n.enableZoom===!1)return;_e(U),s=r.DOLLY;break;case Wi.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;ce(U),s=r.PAN}else{if(n.enableRotate===!1)return;ae(U),s=r.ROTATE}break;case Wi.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;ae(U),s=r.ROTATE}else{if(n.enablePan===!1)return;ce(U),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Sa)}function dt(U){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;de(U);break;case r.DOLLY:if(n.enableZoom===!1)return;pe(U);break;case r.PAN:if(n.enablePan===!1)return;Re(U);break}}function Kt(U){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(U.preventDefault(),n.dispatchEvent(Sa),ee(U),n.dispatchEvent(uu))}function It(U){n.enabled===!1||n.enablePan===!1||fe(U)}function I(U){switch(Se(U),R.length){case 1:switch(n.touches.ONE){case ji.ROTATE:if(n.enableRotate===!1)return;te(),s=r.TOUCH_ROTATE;break;case ji.PAN:if(n.enablePan===!1)return;Z(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ji.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(),s=r.TOUCH_DOLLY_PAN;break;case ji.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Sa)}function T(U){switch(Se(U),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(U),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Be(U),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ye(U),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;rt(U),n.update();break;default:s=r.NONE}}function ie(U){n.enabled!==!1&&U.preventDefault()}function ve(U){R.push(U)}function xe(U){delete B[U.pointerId];for(let X=0;X<R.length;X++)if(R[X].pointerId==U.pointerId){R.splice(X,1);return}}function Se(U){let X=B[U.pointerId];X===void 0&&(X=new ke,B[U.pointerId]=X),X.set(U.pageX,U.pageY)}function Fe(U){const X=U.pointerId===R[0].pointerId?R[1]:R[0];return B[X.pointerId]}n.domElement.addEventListener("contextmenu",ie),n.domElement.addEventListener("pointerdown",Et),n.domElement.addEventListener("pointercancel",At),n.domElement.addEventListener("wheel",Kt,{passive:!1}),this.update()}}const Hu={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class oo{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const G0=new Ga(-1,1,1,-1,0,1),qa=new In;qa.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3));qa.setAttribute("uv",new on([0,2,0,0,2,0],2));class Wu{constructor(e){this._mesh=new Dn(qa,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,G0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ju extends oo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=os.clone(e.uniforms),this.material=new mn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class du extends oo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let d,l;this.inverse?(d=0,l=1):(d=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,d,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class V0 extends oo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class H0{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new ke);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Ln(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ju(Hu),this.clock=new R0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const d=this.passes[r];if(d.enabled!==!1){if(d.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),d.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),d.needsSwap){if(n){const l=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}du!==void 0&&(d instanceof du?n=!0:d instanceof V0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class W0 extends oo{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,d;this.overrideMaterial!==void 0&&(d=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=d),e.autoClear=r}}const j0={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class mr extends oo{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new ke(e.x,e.y):new ke(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);this.renderTargetBright=new Ln(s,d),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new Ln(s,d);v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const M=new Ln(s,d);M.texture.name="UnrealBloomPass.v"+g,M.texture.generateMipmaps=!1,this.renderTargetsVertical.push(M),s=Math.round(s/2),d=Math.round(d/2)}const l=j0;this.highPassUniforms=os.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mn({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];s=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[g])),this.separableBlurMaterials[g].uniforms.texSize.value=new ke(s,d),s=Math.round(s/2),d=Math.round(d/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const m=Hu;this.copyUniforms=os.clone(m.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new mn({uniforms:this.copyUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,blending:Ea,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new zi,this.fsQuad=new Wu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.texSize.value=new ke(n,r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const d=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[h].uniforms.direction.value=mr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=mr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=d}getSeperableBlurMaterial(e){return new mn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ke(.5,.5)},direction:{value:new ke(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new mn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}mr.BlurDirectionX=new ke(1,0);mr.BlurDirectionY=new ke(0,1);const q0={uniforms:{tDiffuse:{value:null},resolution:{value:new ke(1/1024,1/512)}},vertexShader:`

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
	`};var fu=`/* BEGIN HEADER */
uniform float curvature;
uniform float thickness;
uniform float segments;

attribute vec4 instancePositionStart;
attribute vec4 instancePositionEnd;
attribute vec3 instanceColor;

const float radial = 8.;
const float TAU = 6.28318530717958647692528676655900576;

/* END HEADER */

void main() {
  /* BEGIN MAIN */
  
  vColor.rgb = instanceColor.rgb;
  float vid = float(gl_VertexID);
  float h = floor(vid / (radial + 1.)) / (segments);
  float r = mod(vid, radial + 1.) / (radial);

  vec4 pos = mix(instancePositionStart, instancePositionEnd, h);
  vec4 next = mix(instancePositionStart, instancePositionEnd, h + .001);

  
  

  
  

  
  
  
  
  
  

  
  pos = xnormalize(pos);
  next = xnormalize(next);

  vec3 p = xproject(pos);
  vec3 n = xproject(next);

  vec3 k = normalize(n - p); 

  
  vec3 u = normalize(cross(n, p));
  if(isnan(u.x)) {
    u = normalize(vec3(3., 8., -128.));
  }
  
  vec3 v = normalize(cross(u, k));

  vec3 norm = v * cos(r * TAU) + cross(v, k) * sin(r * TAU);
  norm = normalize(norm);

  
  vec3 transformed = xproject(pos);
  transformed += .025 * thickness * norm / max(1., length(pos));

  
  vec3 objectNormal = norm;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}`,qu=`/* BEGIN INCLUDE */
mat4 findRotationMatrix(in vec4 u, in vec4 v) {
  vec4 w = u + v;
  if(length(w) < 0.0001) {
    return mat4(-1.);
  }

  return 2. * outerProduct(w, w) / dot(w, w) - mat4(1.);
}
mat3 findRotationMatrix(in vec3 u, in vec3 v) {
  vec3 w = u + v;
  if(length(w) < 0.0001) {
    return mat3(-1.);
  }

  return 2. * outerProduct(w, w) / dot(w, w) - mat3(1.);
}

float invert(in float v) {
  float sign_v = sign(v);
  float sign_v_sq = sign_v * sign_v;
  return sign_v_sq / (v + sign_v_sq - 1.0);
}

float xdot(in vec4 v) {
  #ifdef D_4
  return dot(v.xyz, v.xyz) + curvature * v.w * v.w;
  #else 
  return dot(v.xy, v.xy) + curvature * v.z * v.z;
  #endif
}

vec4 xnormalize(in vec4 v) {
  if(curvature == 0.0) {
    return v;
  }
  #ifdef D_4
  return v.xyzw * invert(sqrt(abs(xdot(v))));
  #else 
  return vec4(v.xyz * invert(sqrt(abs(xdot(v)))), 1.);
  #endif
}

vec3 xproject(in vec4 v) {
  #ifdef D_4
  #ifdef P_STEREOGRAPHIC
  return v.xyz * invert(v.w - curvature);
  #endif
  #ifdef P_ORTHOGRAPHIC
  return v.xyz;
  #endif
  #ifdef P_KLEIN
  return v.xyz * invert(v.w);
  #endif
  #ifdef P_INVERTED
  return v.xyz * invert(v.w + curvature);
  #endif
  #ifdef P_JEMISPHERE
  return v.xyz;
  #endif
  #ifdef P_UPPERHALF
  v.xyz *= invert(v.w);
  v.w = invert(v.w);

  v.xzw *= 2. * invert(1. + v.y);
  v.w *= -1.;
  return v.xzw;
  #endif
  #else
  #ifdef P_STEREOGRAPHIC
  
  
  return v.xyz;
  #endif
  #ifdef P_ORTHOGRAPHIC
  return vec3(v.xy, 0.);
  #endif
  #ifdef P_KLEIN
  return vec3(v.xy * invert(v.z), 0.);
  #endif
  #ifdef P_INVERTED
  return vec3(v.xy * invert(curvature + v.z), 1.);
  #endif
  #ifdef P_JEMISPHERE
  return vec3(v.xy * invert(v.z), invert(v.z));
  #endif
  #ifdef P_UPPERHALF
  v.xy *= invert(v.z);
  v.z = invert(v.z);

  v.xz *= 2. * invert(1. + v.y);
  v.y = 1.;
  return v.xzy;
  #endif
  #endif
  return v.xyz;
}

vec3 xprojectnormal(in vec4 n, in vec4 p, in vec3 pp) {
  #ifdef D_4

  vec4 np = p + n;
  vec3 npp = xproject(np);

  return npp - pp;
  #else
  return n.xyz;
  #endif
}

/* END INCLUDE */`;const Xu=a=>(a.vertexColors=!0,a._dimensions=we.dimensions,a.uniforms={curvature:{value:0},thickness:{value:0},segments:{value:3}},a.onBeforeCompile=e=>{const t=[`#define D_${we.dimensions}`,`#define P_${we.projection.toUpperCase()}`];Object.assign(e.uniforms,a.uniforms),a instanceof zi&&(e.vertexShader=e.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif","")),e.vertexShader=[...t,fu.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],qu.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],e.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",fu.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1])].join(`
`)},a.customProgramCacheKey=()=>`edge_${we.dimensions}_${we.projection}`,a);var hu=`/* BEGIN HEADER */
uniform float curvature;
uniform float thickness;

attribute vec4 instancePosition;
attribute vec3 instanceColor;
/* END HEADER */

void main() {
  /* BEGIN MAIN */
  
  vColor.rgb = instanceColor.rgb;

  vec4 pos = vec4(instancePosition);

  
  vec3 transformed = xproject(pos);

  vec3 norm = vec3(normal);
  transformed += .1 * thickness * norm / max(1., length(pos));

  
  vec3 objectNormal = norm;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}`;const Yu=a=>(a.vertexColors=!0,a.uniforms={curvature:{value:0},thickness:{value:0}},a.onBeforeCompile=e=>{const t=[`#define D_${we.dimensions}`,`#define P_${we.projection.toUpperCase()}`];Object.assign(e.uniforms,a.uniforms),a instanceof zi&&(e.vertexShader=e.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif","")),e.vertexShader=[...t,hu.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],qu.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],e.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",hu.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1])].join(`
`)},a.customProgramCacheKey=()=>`vertex_${we.dimensions}_${we.projection}`,a);let Ht,en,ei,An,Jn,wa,is,Hr;const so=new Yr,Yt=new Ze,Xa=new P0,_r=Xa.load("Carbon.png");_r.encoding=mt;_r.wrapS=Ri;_r.wrapT=Ri;_r.repeat.x=10;_r.repeat.y=10;const Ya=Xa.load("Carbon_Normal.png");Ya.wrapS=Ri;Ya.wrapT=Ri;const Ka=Xa.load("ocean.jpg");Ka.encoding=mt;Ka.mapping=rs;const ao={neon:{background:0,bloom:!0,material:new zi,lights:[],colorVertex:({word:a})=>Yt.setHSL(a.length*.17%1,.5,.5),colorEdge:({word:a})=>Yt.setHSL(a.length*.17%1,.5,.5)},museum:{background:16777215,bloom:!1,material:new Qc({roughness:.5,clearcoat:1,clearcoatRoughness:.1,map:_r,normalMap:Ya}),lights:[new su,new tu],cameraLights:[new ou],colorVertex:()=>Yt.set(11184810),colorEdge:()=>Yt.set(11184810)},colorful:{background:16777215,bloom:!1,material:new w0({}),lights:[new L0(16777215,.5)],cameraLights:[new ou(16777215,1)],colorVertex:({word:a})=>Yt.setHSL(a.length*.17%1,.5,.5),colorEdge:({word:a})=>Yt.setHSL(a.length*.17%1,.5,.5)},glass:{background:0,env:Ka,bloom:!1,material:new Qc({premultipliedAlpha:!1,reflectivity:0,metalness:0,roughness:0,transmission:1,clearcoat:1,clearcoatRoughness:.1,thickness:1,ior:1.5}),lights:[new su,new tu],colorVertex:()=>Yt.set(11184810),colorEdge:()=>Yt.set(11184810)},wireframe:{background:0,bloom:!1,material:new zi({wireframe:!0}),lights:[],colorVertex:({word:a})=>Yt.setHSL(a.length*.17%1,.5,.5),colorEdge:({word:a})=>Yt.setHSL(a.length*.17%1,.5,.5)}},X0=()=>{Ht=new Ha,Ht.setPixelRatio(window.devicePixelRatio),Ht.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Ht.domElement),en=new pn(90,window.innerWidth/window.innerHeight,.001,1e3),en.position.set(0,0,-1),en.up.set(0,1,0),en.lookAt(0,0,0),en.zoom=Math.min(1,window.innerWidth/window.innerHeight),en.updateProjectionMatrix(),ei=new M0,ei.add(so),en.updateProjectionMatrix(),ei.add(en),An=new B0(en,Ht.domElement),An.target.set(0,0,0),An.minDistance=0,An.maxDistance=100,An.addEventListener("change",Bn),An.update(),An.enabled=!1,Ht.domElement.addEventListener("dblclick",()=>{An.position0.set(0,0,An.position0.z===-1?-.25:-1,0,0),An.reset()}),Jn=new H0(Ht),Jn.setPixelRatio(window.devicePixelRatio),wa=new W0(ei,en),Jn.addPass(wa),Hr=new ju(q0);const a=Ht.getPixelRatio();return Hr.material.uniforms.resolution.value.x=1/(window.innerWidth*a),Hr.material.uniforms.resolution.value.y=1/(window.innerHeight*a),Jn.addPass(Hr),is=new mr(new ke(window.innerWidth,window.innerHeight),1.5,0,0),Jn.addPass(is),$u(),Ku(),Zu(),{composer:Jn,renderer:Ht,scene:ei,camera:en,controls:An,renderPass:wa,bloomPass:is,fxaaPass:Hr}};let Pt=null,yt=null,ss=5e3,$r=5e4;const Ku=()=>{const a=ao[we.ambiance],e=new ja(1e-7,16,16);e.attributes.position.array.fill(0);const t=new ku().copy(e);t.setAttribute("instancePosition",new Kr(new Float32Array(ss*4),4)),t.setAttribute("instanceColor",new Kr(new Float32Array(ss*3),3)),Pt=new Dn(t,Yu(a.material.clone())),Pt.geometry.instanceCount=0,so.add(Pt)},$u=()=>{const a=ao[we.ambiance],e=new Wa(0,0,1,8,we.curve?we.segments:1,!0),t=new ku().copy(e);t.setAttribute("instancePositionStart",new Kr(new Float32Array($r*4),4)),t.setAttribute("instancePositionEnd",new Kr(new Float32Array($r*4),4)),t.setAttribute("instanceColor",new Kr(new Float32Array($r*3),3)),yt=new Dn(t,Xu(a.material.clone())),yt.geometry.instanceCount=0,so.add(yt)},Y0=([a,e])=>{const t=ao[we.ambiance];e>ss&&(ss=e,so.remove(Pt),Pt.geometry.dispose(),Pt.material.dispose(),Ku(),to(),a=0),Pt.geometry.instanceCount=e;for(let n=a;n<e;n++){const r=qe.vertices[n],s=Pt.geometry.attributes.instancePosition.array;s[n*4+0]=r.vertex[0],s[n*4+1]=r.vertex[1],s[n*4+2]=r.vertex[2],s[n*4+3]=we.dimensions===3?1:r.vertex[3];const d=Pt.geometry.attributes.instanceColor.array;t.colorVertex(r),d[n*3+0]=Yt.r,d[n*3+1]=Yt.g,d[n*3+2]=Yt.b}Pt.geometry.attributes.instancePosition.needsUpdate=!0,Pt.geometry.attributes.instanceColor.needsUpdate=!0},K0=([a,e],t=!1)=>{const n=ao[we.ambiance];(e>$r||t)&&($r=e,yt.geometry.dispose(),yt.material.dispose(),so.remove(yt),$u(),to(),a=0),yt.geometry.instanceCount=e;for(let r=a;r<e;r++){const s=qe.edges[r],d=yt.geometry.attributes.instancePositionStart.array;d[r*4+0]=s.start[0],d[r*4+1]=s.start[1],d[r*4+2]=s.start[2],d[r*4+3]=we.dimensions===3?1:s.start[3];const l=yt.geometry.attributes.instancePositionEnd.array;l[r*4+0]=s.end[0],l[r*4+1]=s.end[1],l[r*4+2]=s.end[2],l[r*4+3]=we.dimensions===3?1:s.end[3];const h=yt.geometry.attributes.instanceColor.array;n.colorEdge(s),h[r*3+0]=Yt.r,h[r*3+1]=Yt.g,h[r*3+2]=Yt.b}yt.geometry.attributes.instancePositionStart.needsUpdate=!0,yt.geometry.attributes.instancePositionEnd.needsUpdate=!0,yt.geometry.attributes.instanceColor.needsUpdate=!0},fi=(a,e=!1)=>{let t,n;a===!0?(t=[0,qe.vertices.length],n=[0,qe.edges.length]):(t=a.vertices,n=a.edges),Pt.visible=we.vertices,we.vertices&&Y0(t),yt.visible=we.edges,we.edges&&K0(n,e)},Zu=()=>{const a=ao[we.ambiance];a.env?ei.background=a.env:ei.background=null,Ht.setClearColor(new Ze(a.background),1);const e=[];ei.traverse(t=>{t.isLight&&e.push(t)}),e.forEach(t=>{t.parent.remove(t)}),(a.lights||[]).forEach(t=>{ei.add(t)}),(a.cameraLights||[]).forEach(t=>{en.add(t)}),Ht.toneMapping=a.bloom?vu:Gn,Ht.toneMappingExposure=a.bloom?1.5:1,is.enabled=a.bloom,Pt.material=Yu(a.material.clone()),yt.material=Xu(a.material.clone()),to(),fi(!0),Bn()},to=()=>{Pt&&(Pt.material.uniforms.curvature.value=qe.curvature,Pt.material.uniforms.thickness.value=we.thickness,(we.dimensions!==Pt.material._dimensions||we.projection!==Pt.material._projection)&&(Pt.material._dimensions=we.dimensions,Pt.material._projection=we.projection,Pt.material.needsUpdate=!0)),yt&&(yt.material.uniforms.curvature.value=qe.curvature,yt.material.uniforms.thickness.value=we.thickness,(we.dimensions!==yt.material._dimensions||we.projection!==yt.material._projection)&&(yt.material._dimensions=we.dimensions,yt.material._projection=we.projection,yt.material.needsUpdate=!0),yt.material.uniforms.segments.value=we.curve?we.segments:1)},Bn=()=>{Jn.render()},ci=a=>{for(let e=0;e<qe.vertices.length;e++){const{vertex:t}=qe.vertices[e];ns(t,a)}for(let e=0;e<qe.edges.length;e++){const{start:t,end:n}=qe.edges[e];ns(t,a),ns(n,a)}},Wr=a=>{for(let e=0;e<qe.vertices.length;e++){const{vertex:t}=qe.vertices[e];ba(t,a)}for(let e=0;e<qe.edges.length;e++){const{start:t,end:n}=qe.edges[e];ba(t,a),ba(n,a)}},jr=a=>{for(let e=0;e<qe.vertices.length;e++){const{vertex:t}=qe.vertices[e];Ma(t,a)}for(let e=0;e<qe.edges.length;e++){const{start:t,end:n}=qe.edges[e];Ma(t,a),Ma(n,a)}},$0=()=>{const a=[];document.querySelector("canvas").addEventListener("pointerdown",e=>{a.push(e.pointerId)}),document.querySelector("canvas").addEventListener("pointerup",e=>{const t=a.indexOf(e.pointerId);t>-1&&a.splice(t,1)}),N0("canvas").draggable({listeners:{move:e=>{if(we.controls!=="free")return;const t=window.innerWidth/2,n=window.innerHeight/2,r=Math.min(t,n)*.9;if(e.ctrlKey)Wr(-e.dx/(2*r)),jr(-e.dy/(2*r));else{const s=-e.dx/t,d=-e.dy/n;e.shiftKey||a.length>2?ci([0,0,d]):ci([s,d,0])}fi(!0),Bn()}}}).gesturable({onmove:e=>{we.controls!=="free"||a.length>2||(Wr(Qo*e.da/180),jr(e.ds),fi(!0),Bn())}}),document.addEventListener("wheel",e=>{if(we.controls!=="free")return;const t=window.innerWidth/2,n=window.innerHeight/2,r=Math.min(t,n)*.9,s=10*(e.deltaMode===1?e.deltaY*10:e.deltaY)/r;e.ctrlKey?Wr(Qo*s/180):jr(-s/100),fi(!0),Bn()}),document.addEventListener("keydown",e=>{if(we.controls!=="free")return;const{code:t}=e,n=.01;t==="ArrowLeft"||t==="KeyA"?ci([-n,0,0]):t==="ArrowRight"||t==="KeyD"?ci([n,0,0]):t==="ArrowUp"||t==="KeyW"?ci([0,0,-n]):t==="ArrowDown"||t==="KeyS"?ci([0,0,n]):t==="PageUp"||t==="KeyQ"?ci([0,-n,0]):t==="PageDown"||t==="KeyE"?ci([0,n,0]):t==="Digit1"?Wr(-(Qo*5)/180):t==="Digit3"?Wr(Qo*5/180):t==="KeyZ"?jr(-n):t==="KeyC"&&jr(n),fi(!0),Bn()})};function Ju(){return new Worker(""+new URL("tiling.worker-7aa55aea.js",import.meta.url).href)}let hn=0,ar=()=>{};const Z0=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const e=Math.random()*16|0;return(a==="x"?e:e&3|8).toString(16)}),J0=a=>{ar=a},Q0=a=>{a.terminate(),hn=0,ar(hn)},e_=async(a,e)=>(e.uuid=Z0(),hn++,ar(hn),a.postMessage(e),new Promise((t,n)=>{const r=d=>{d.data.uuid===e.uuid&&(a.removeEventListener("message",r),hn--,ar(hn),t(d.data))},s=d=>{if(!d.uuid){if(a.removeEventListener("error",s),hn<=0)return;hn--,hn=Ra(0,hn),ar(hn,!0),console.error("Can't call web worker",d);return}d.uuid===e.uuid&&(a.removeEventListener("error",s),hn--,ar(hn,!0),n(d))};a.addEventListener("message",r),a.addEventListener("error",s)}));let Ia=new Ju;const t_=()=>{const e=window.innerWidth*1,t=window.innerHeight*1,n=Ht.domElement;if(n.width!==e||n.height!==t){en.aspect=e/t,en.zoom=Math.min(1,e/t),en.updateProjectionMatrix(),Ht.setSize(e,t),Jn.setSize(e,t);const r=Ht.getPixelRatio();Jn.setPixelRatio(r),window.bloomPass.resolution=new ke(e,t),window.fxaaPass.material.uniforms.resolution.value.x=1/(e*Ht.getPixelRatio()),window.fxaaPass.material.uniforms.resolution.value.y=1/(t*Ht.getPixelRatio()),n.style.width=e+"px",n.style.height=t+"px"}Bn()};window.ondeviceorientation=window.onresize=t_;J0((a,e)=>{a?(document.body.classList.add("processing"),document.querySelectorAll("input").forEach(t=>t.disabled=!0)):(document.body.classList.remove("processing"),document.querySelectorAll("input").forEach(t=>t.disabled=!1)),e?document.body.classList.add("error"):document.body.classList.remove("error")});const $a="⇹",Oa="↭",Za=()=>{document.querySelector("#d4").checked=we.dimensions===4,document.querySelectorAll(".d4").forEach(a=>{a.style.display=we.dimensions===4?"block":"none"}),document.querySelectorAll(".d3").forEach(a=>{a.style.display=we.dimensions===3?"block":"none"}),document.querySelector("#segments").style.display=we.curve?"inline":"none",document.querySelector("#stellation").checked=we.stellation,document.querySelectorAll(".stellation").forEach(a=>{a.style.display=we.stellation?"inline":"none"}),"pqrstu".split("").forEach(a=>{document.querySelector(`#${a}`).value=we[a],document.querySelector(`#${a}-div`).value=we[`${a}Div`]}),"xyzw".split("").forEach(a=>{document.querySelector(`#mirror-${a}`).checked=!!we[a]}),document.querySelector("#order").value=we.order,document.querySelector("#segments").value=we.segments,document.querySelector("#curve").checked=we.curve,document.querySelector("#projection").value=we.projection,document.querySelector("#vertices").checked=we.vertices,document.querySelector("#edges").checked=we.edges,document.querySelector("#light").value=we.light,document.querySelector("#thickness").value=we.thickness,document.querySelector("#ambiance").value=we.ambiance,document.querySelector("#controls").innerHTML=we.controls==="orbit"?$a:Oa},lo=async a=>{const e=a==null?void 0:a.target.id,t={};if(t.dimensions=document.querySelector("#d4").checked?4:3,t.light=+document.querySelector("#light").value,t.thickness=+document.querySelector("#thickness").value,t.projection=document.querySelector("#projection").value,t.ambiance=document.querySelector("#ambiance").value,t.stellation=document.querySelector("#stellation").checked,window.bloomPass.strength=t.light,t.controls=document.querySelector("#controls").innerHTML===$a?"orbit":"free",window.controls.enabled=t.controls==="orbit",e==="curve"&&(document.querySelector("#segments").style.display=document.querySelector("#curve").checked?"inline":"none"),e==="stellation"&&document.querySelectorAll(".stellation").forEach(d=>{d.style.display=t.stellation?"inline":"none"}),e==="d4"){const d=(h,p)=>{document.querySelector(`#${h}`).value=p},l=h=>+document.querySelector(`#${h}`).value;document.querySelectorAll(".d4").forEach(h=>{h.style.display=t.dimensions===4?"block":"none"}),document.querySelectorAll(".d3").forEach(h=>{h.style.display=t.dimensions===3?"block":"none"}),t.dimensions===4?(d("s",l("q")),d("u",l("r")),d("q",2),d("r",2),d("t",2)):t.dimensions===3&&(d("q",Ra(l("s"),l("q"))),d("r",Ra(l("r"),l("t"),l("u"))),d("s",2),d("u",2),d("t",2),document.querySelector("#mirror-w").checked=!1)}e!=null&&e.startsWith("mirror-")&&"xyzw".split("").every(d=>!document.querySelector(`#mirror-${d}`).checked)&&(document.querySelector("#mirror-x").checked=!0),"pqrstu".split("").forEach(d=>{t[d]=+document.querySelector(`#${d}`).value,t[`${d}Div`]=+document.querySelector(`#${d}-div`).value}),"xyzw".split("").forEach(d=>{t[d]=document.querySelector(`#mirror-${d}`).checked}),t.order=+document.querySelector("#order").value,t.curve=document.querySelector("#curve").checked,t.segments=+document.querySelector("#segments").value,t.vertices=document.querySelector("#vertices").checked,t.edges=document.querySelector("#edges").checked;const n=Object.keys(t).filter(d=>t[d]!==we[d]),r=we.order;let s=!e;if((s||["p","q","r","s","t","u","pDiv","qDiv","rDiv","sDiv","tDiv","uDiv","stellation","dimensions"].some(d=>n.includes(d)))&&(s=!0),Vu(t,!!a),window.C=we,to(),s||["x","y","z","w","order"].some(d=>n.includes(d)))if(e==="order"&&qe.ranges[we.order-1])fi(qe.ranges[we.order-1]),Bn();else{const d=e==="order"?r:0;for(let l=d;l<we.order;l++){const{R:h,vertices:p,edges:m}=await e_(Ia,{C:we,order:l});if(l===0&&(U0({...h,ranges:{}}),window.R=qe,to(),document.querySelector("#space").innerHTML=`${qe.curvature===0?"&#x1D53C":qe.curvature>0?"&#x1D54A":"&#x210D"}<sup>${we.dimensions-1}</sup>`),p.length||m.length){const g=qe.vertices.length;qe.vertices=qe.vertices.concat(p);const v=qe.vertices.length,M=qe.edges.length;qe.edges=qe.edges.concat(m);const C=qe.edges.length;qe.ranges[l]={vertices:[g,v],edges:[M,C]},fi(qe.ranges[l]),Bn()}else qe.ranges[l]={vertices:[qe.vertices.length,qe.vertices.length],edges:[qe.edges.length,qe.edges.length]}}}else["edges","vertices","thickness","projection","curve","segments"].some(d=>n.includes(d))&&fi(!0,n.includes("segments")||n.includes("curve"));if(n.includes("ambiance")||s){Zu();return}Bn()};document.querySelectorAll("input,select").forEach(a=>{a.addEventListener("change",lo)});document.getElementById("space").addEventListener("dblclick",()=>{document.body.classList.contains("processing")&&(Q0(Ia),document.body.classList.remove("processing"),Ia=new Ju,Vu(Bu,!0)),Za(),lo()});document.getElementById("space").addEventListener("click",()=>{document.body.classList.toggle("real-estate")});document.getElementById("controls").addEventListener("click",()=>{document.getElementById("controls").innerHTML=document.getElementById("controls").innerHTML===Oa?$a:Oa,lo({target:{id:"controls"}})});Gu();Za();Object.assign(window,X0());lo();window.addEventListener("popstate",()=>{Gu(),Za(),lo()});$0();
