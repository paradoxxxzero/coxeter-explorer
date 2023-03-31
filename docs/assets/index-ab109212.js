(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rl="150",Qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uf=0,cc=1,Nf=2,sl=1,Ru=2,Jr=3,_i=0,gn=1,gi=2,Ht=0,mr=1,qa=2,uc=3,dc=4,yo=5,mi=100,Ff=101,zf=102,fc=103,hc=104,Xa=200,kf=201,Bf=202,Gf=203,Lu=204,Iu=205,Ou=206,Vf=207,Uu=208,Hf=209,Wf=210,jf=0,qf=1,Xf=2,Ya=3,Yf=4,Zf=5,Kf=6,$f=7,So=0,Qf=1,Jf=2,Xn=0,eh=1,Nu=2,th=3,nh=4,ih=5,Fu=300,_r=301,yr=302,bo=303,Za=304,wo=306,Gi=1e3,Nn=1001,Ka=1002,Ft=1003,pc=1004,oa=1005,Cn=1006,rh=1007,os=1008,Vi=1009,sh=1010,oh=1011,ol=1012,ah=1013,Fi=1014,zi=1015,as=1016,lh=1017,ch=1018,gr=1020,uh=1021,Fn=1023,dh=1024,fh=1025,ki=1026,br=1027,hh=1028,ph=1029,mh=1030,gh=1031,vh=1033,aa=33776,la=33777,ca=33778,ua=33779,mc=35840,gc=35841,vc=35842,xc=35843,xh=36196,_c=37492,yc=37496,bc=37808,Mc=37809,Sc=37810,wc=37811,Ec=37812,Tc=37813,Cc=37814,Pc=37815,Ac=37816,Dc=37817,Rc=37818,Lc=37819,Ic=37820,Oc=37821,da=36492,_h=36283,Uc=36284,Nc=36285,Fc=36286,Hi=3e3,mt=3001,yh=3200,hs=3201,ps=0,bh=1,Wn="srgb",ls="srgb-linear",zu="display-p3",fa=7680,Mh=519,zc=35044,kc="300 es",$a=1035;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,d=r.length;o<d;o++)r[o].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,Qa=180/Math.PI;function ms(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[a&255]+Qt[a>>8&255]+Qt[a>>16&255]+Qt[a>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function an(a,e,t){return Math.max(e,Math.min(t,a))}function Sh(a,e){return(a%e+e)%e}function pa(a,e,t){return(1-t)*a+t*e}function Bc(a){return(a&a-1)===0&&a!==0}function wh(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Xs(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function _n(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,d=this.y-e.y;return this.x=o*n-d*r+e.x,this.y=o*r+d*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ln{constructor(){ln.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,o,d,l,p,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=l,m[3]=t,m[4]=o,m[5]=p,m[6]=n,m[7]=d,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,d=n[0],l=n[3],p=n[6],h=n[1],m=n[4],g=n[7],v=n[2],M=n[5],A=n[8],b=r[0],y=r[3],P=r[6],O=r[1],C=r[4],F=r[7],L=r[2],B=r[5],Z=r[8];return o[0]=d*b+l*O+p*L,o[3]=d*y+l*C+p*B,o[6]=d*P+l*F+p*Z,o[1]=h*b+m*O+g*L,o[4]=h*y+m*C+g*B,o[7]=h*P+m*F+g*Z,o[2]=v*b+M*O+A*L,o[5]=v*y+M*C+A*B,o[8]=v*P+M*F+A*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],d=e[4],l=e[5],p=e[6],h=e[7],m=e[8];return t*d*m-t*l*h-n*o*m+n*l*p+r*o*h-r*d*p}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],d=e[4],l=e[5],p=e[6],h=e[7],m=e[8],g=m*d-l*h,v=l*p-m*o,M=h*o-d*p,A=t*g+n*v+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=g*b,e[1]=(r*h-m*n)*b,e[2]=(l*n-r*d)*b,e[3]=v*b,e[4]=(m*t-r*p)*b,e[5]=(r*o-l*t)*b,e[6]=M*b,e[7]=(n*p-h*t)*b,e[8]=(d*t-n*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,d,l){const p=Math.cos(o),h=Math.sin(o);return this.set(n*p,n*h,-n*(p*d+h*l)+d+e,-r*h,r*p,-r*(-h*d+p*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new ln;function ku(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function cs(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}class Wi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,d,l){let p=n[r+0],h=n[r+1],m=n[r+2],g=n[r+3];const v=o[d+0],M=o[d+1],A=o[d+2],b=o[d+3];if(l===0){e[t+0]=p,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(l===1){e[t+0]=v,e[t+1]=M,e[t+2]=A,e[t+3]=b;return}if(g!==b||p!==v||h!==M||m!==A){let y=1-l;const P=p*v+h*M+m*A+g*b,O=P>=0?1:-1,C=1-P*P;if(C>Number.EPSILON){const L=Math.sqrt(C),B=Math.atan2(L,P*O);y=Math.sin(y*B)/L,l=Math.sin(l*B)/L}const F=l*O;if(p=p*y+v*F,h=h*y+M*F,m=m*y+A*F,g=g*y+b*F,y===1-l){const L=1/Math.sqrt(p*p+h*h+m*m+g*g);p*=L,h*=L,m*=L,g*=L}}e[t]=p,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,o,d){const l=n[r],p=n[r+1],h=n[r+2],m=n[r+3],g=o[d],v=o[d+1],M=o[d+2],A=o[d+3];return e[t]=l*A+m*g+p*M-h*v,e[t+1]=p*A+m*v+h*g-l*M,e[t+2]=h*A+m*M+l*v-p*g,e[t+3]=m*A-l*g-p*v-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,o=e._z,d=e._order,l=Math.cos,p=Math.sin,h=l(n/2),m=l(r/2),g=l(o/2),v=p(n/2),M=p(r/2),A=p(o/2);switch(d){case"XYZ":this._x=v*m*g+h*M*A,this._y=h*M*g-v*m*A,this._z=h*m*A+v*M*g,this._w=h*m*g-v*M*A;break;case"YXZ":this._x=v*m*g+h*M*A,this._y=h*M*g-v*m*A,this._z=h*m*A-v*M*g,this._w=h*m*g+v*M*A;break;case"ZXY":this._x=v*m*g-h*M*A,this._y=h*M*g+v*m*A,this._z=h*m*A+v*M*g,this._w=h*m*g-v*M*A;break;case"ZYX":this._x=v*m*g-h*M*A,this._y=h*M*g+v*m*A,this._z=h*m*A-v*M*g,this._w=h*m*g+v*M*A;break;case"YZX":this._x=v*m*g+h*M*A,this._y=h*M*g+v*m*A,this._z=h*m*A-v*M*g,this._w=h*m*g-v*M*A;break;case"XZY":this._x=v*m*g-h*M*A,this._y=h*M*g-v*m*A,this._z=h*m*A+v*M*g,this._w=h*m*g+v*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],d=t[1],l=t[5],p=t[9],h=t[2],m=t[6],g=t[10],v=n+l+g;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(m-p)*M,this._y=(o-h)*M,this._z=(d-r)*M}else if(n>l&&n>g){const M=2*Math.sqrt(1+n-l-g);this._w=(m-p)/M,this._x=.25*M,this._y=(r+d)/M,this._z=(o+h)/M}else if(l>g){const M=2*Math.sqrt(1+l-n-g);this._w=(o-h)/M,this._x=(r+d)/M,this._y=.25*M,this._z=(p+m)/M}else{const M=2*Math.sqrt(1+g-n-l);this._w=(d-r)/M,this._x=(o+h)/M,this._y=(p+m)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,d=e._w,l=t._x,p=t._y,h=t._z,m=t._w;return this._x=n*m+d*l+r*h-o*p,this._y=r*m+d*p+o*l-n*h,this._z=o*m+d*h+n*p-r*l,this._w=d*m-n*l-r*p-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,d=this._w;let l=d*e._w+n*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=d,this._x=n,this._y=r,this._z=o,this;const p=1-l*l;if(p<=Number.EPSILON){const M=1-t;return this._w=M*d+t*this._w,this._x=M*n+t*this._x,this._y=M*r+t*this._y,this._z=M*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(p),m=Math.atan2(h,l),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=d*g+this._w*v,this._x=n*g+this._x*v,this._y=r*g+this._y*v,this._z=o*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(o),n*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,d=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*d,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*d,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*d,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,d=e.y,l=e.z,p=e.w,h=p*t+d*r-l*n,m=p*n+l*t-o*r,g=p*r+o*n-d*t,v=-o*t-d*n-l*r;return this.x=h*p+v*-o+m*-l-g*-d,this.y=m*p+v*-d+g*-o-h*-l,this.z=g*p+v*-l+h*-d-m*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,d=t.x,l=t.y,p=t.z;return this.x=r*p-o*l,this.y=o*d-n*p,this.z=n*l-r*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new H,Gc=new Wi;function vr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function va(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Eh=new ln().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Th=new ln().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),vi=new H;function Ch(a){return a.convertSRGBToLinear(),vi.set(a.r,a.g,a.b).applyMatrix3(Th),a.setRGB(vi.x,vi.y,vi.z)}function Ph(a){return vi.set(a.r,a.g,a.b).applyMatrix3(Eh),a.setRGB(vi.x,vi.y,vi.z).convertLinearToSRGB()}const Ah={[ls]:a=>a,[Wn]:a=>a.convertSRGBToLinear(),[zu]:Ch},Dh={[ls]:a=>a,[Wn]:a=>a.convertLinearToSRGB(),[zu]:Ph},rn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return ls},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=Ah[e],r=Dh[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let er;class Bu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=cs("canvas")),er.width=e.width,er.height=e.height;const n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let d=0;d<o.length;d++)o[d]=vr(o[d]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vr(t[n]/255)*255):t[n]=vr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Gu{constructor(e=null){this.isSource=!0,this.uuid=ms(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let d=0,l=r.length;d<l;d++)r[d].isDataTexture?o.push(xa(r[d].image)):o.push(xa(r[d]))}else o=xa(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function xa(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Bu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rh=0;class vn extends ji{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,n=Nn,r=Nn,o=Cn,d=os,l=Fn,p=Vi,h=vn.DEFAULT_ANISOTROPY,m=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ms(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=d,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=p,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ln,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Fu;vn.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,d=e.elements;return this.x=d[0]*t+d[4]*n+d[8]*r+d[12]*o,this.y=d[1]*t+d[5]*n+d[9]*r+d[13]*o,this.z=d[2]*t+d[6]*n+d[10]*r+d[14]*o,this.w=d[3]*t+d[7]*n+d[11]*r+d[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const p=e.elements,h=p[0],m=p[4],g=p[8],v=p[1],M=p[5],A=p[9],b=p[2],y=p[6],P=p[10];if(Math.abs(m-v)<.01&&Math.abs(g-b)<.01&&Math.abs(A-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+b)<.1&&Math.abs(A+y)<.1&&Math.abs(h+M+P-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,F=(M+1)/2,L=(P+1)/2,B=(m+v)/4,Z=(g+b)/4,E=(A+y)/4;return C>F&&C>L?C<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(C),r=B/n,o=Z/n):F>L?F<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(F),n=B/r,o=E/r):L<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),n=Z/o,r=E/o),this.set(n,r,o,t),this}let O=Math.sqrt((y-A)*(y-A)+(g-b)*(g-b)+(v-m)*(v-m));return Math.abs(O)<.001&&(O=1),this.x=(y-A)/O,this.y=(g-b)/O,this.z=(v-m)/O,this.w=Math.acos((h+M+P-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jt extends ji{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vu extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lh extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,o=-1/0,d=-1/0,l=-1/0;for(let p=0,h=e.length;p<h;p+=3){const m=e[p],g=e[p+1],v=e[p+2];m<t&&(t=m),g<n&&(n=g),v<r&&(r=v),m>o&&(o=m),g>d&&(d=g),v>l&&(l=v)}return this.min.set(t,n,r),this.max.set(o,d,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,o=-1/0,d=-1/0,l=-1/0;for(let p=0,h=e.count;p<h;p++){const m=e.getX(p),g=e.getY(p),v=e.getZ(p);m<t&&(t=m),g<n&&(n=g),v<r&&(r=v),m>o&&(o=m),g>d&&(d=g),v>l&&(l=v)}return this.min.set(t,n,r),this.max.set(o,d,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const o=n.attributes.position;for(let d=0,l=o.count;d<l;d++)Ri.fromBufferAttribute(o,d).applyMatrix4(e.matrixWorld),this.expandByPoint(Ri)}else n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox),_a.applyMatrix4(e.matrixWorld),this.union(_a);const r=e.children;for(let o=0,d=r.length;o<d;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Ys.subVectors(this.max,Vr),tr.subVectors(e.a,Vr),nr.subVectors(e.b,Vr),ir.subVectors(e.c,Vr),ci.subVectors(nr,tr),ui.subVectors(ir,nr),Li.subVectors(tr,ir);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Li.z,Li.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Li.z,0,-Li.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Li.y,Li.x,0];return!ya(t,tr,nr,ir,Ys)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,tr,nr,ir,Ys))?!1:(Zs.crossVectors(ci,ui),t=[Zs.x,Zs.y,Zs.z],ya(t,tr,nr,ir,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new H,new H,new H,new H,new H,new H,new H,new H],Ri=new H,_a=new gs,tr=new H,nr=new H,ir=new H,ci=new H,ui=new H,Li=new H,Vr=new H,Ys=new H,Zs=new H,Ii=new H;function ya(a,e,t,n,r){for(let o=0,d=a.length-3;o<=d;o+=3){Ii.fromArray(a,o);const l=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),p=e.dot(Ii),h=t.dot(Ii),m=n.dot(Ii);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>l)return!1}return!0}const Ih=new gs,Hr=new H,ba=new H;class al{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ih.setFromPoints(e).getCenter(n);let r=0;for(let o=0,d=e.length;o<d;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Hr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(ba)),this.expandByPoint(Hr.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new H,Ma=new H,Ks=new H,di=new H,Sa=new H,$s=new H,wa=new H;class Oh{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ma.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Ma);const o=e.distanceTo(t)*.5,d=-this.direction.dot(Ks),l=di.dot(this.direction),p=-di.dot(Ks),h=di.lengthSq(),m=Math.abs(1-d*d);let g,v,M,A;if(m>0)if(g=d*p-l,v=d*l-p,A=o*m,g>=0)if(v>=-A)if(v<=A){const b=1/m;g*=b,v*=b,M=g*(g+d*v+2*l)+v*(d*g+v+2*p)+h}else v=o,g=Math.max(0,-(d*v+l)),M=-g*g+v*(v+2*p)+h;else v=-o,g=Math.max(0,-(d*v+l)),M=-g*g+v*(v+2*p)+h;else v<=-A?(g=Math.max(0,-(-d*o+l)),v=g>0?-o:Math.min(Math.max(-o,-p),o),M=-g*g+v*(v+2*p)+h):v<=A?(g=0,v=Math.min(Math.max(-o,-p),o),M=v*(v+2*p)+h):(g=Math.max(0,-(d*o+l)),v=g>0?o:Math.min(Math.max(-o,-p),o),M=-g*g+v*(v+2*p)+h);else v=d>0?-o:o,g=Math.max(0,-(d*v+l)),M=-g*g+v*(v+2*p)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Ma).addScaledVector(Ks,v),M}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),r=ei.dot(ei)-n*n,o=e.radius*e.radius;if(r>o)return null;const d=Math.sqrt(o-r),l=n-d,p=n+d;return p<0?null:l<0?this.at(p,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,d,l,p;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(n=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(n=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),m>=0?(o=(e.min.y-v.y)*m,d=(e.max.y-v.y)*m):(o=(e.max.y-v.y)*m,d=(e.min.y-v.y)*m),n>d||o>r||((o>n||isNaN(n))&&(n=o),(d<r||isNaN(r))&&(r=d),g>=0?(l=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(l=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),n>p||l>r)||((l>n||n!==n)&&(n=l),(p<r||r!==r)&&(r=p),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,r,o){Sa.subVectors(t,e),$s.subVectors(n,e),wa.crossVectors(Sa,$s);let d=this.direction.dot(wa),l;if(d>0){if(r)return null;l=1}else if(d<0)l=-1,d=-d;else return null;di.subVectors(this.origin,e);const p=l*this.direction.dot($s.crossVectors(di,$s));if(p<0)return null;const h=l*this.direction.dot(Sa.cross(di));if(h<0||p+h>d)return null;const m=-l*di.dot(wa);return m<0?null:this.at(m/d,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,o,d,l,p,h,m,g,v,M,A,b,y){const P=this.elements;return P[0]=e,P[4]=t,P[8]=n,P[12]=r,P[1]=o,P[5]=d,P[9]=l,P[13]=p,P[2]=h,P[6]=m,P[10]=g,P[14]=v,P[3]=M,P[7]=A,P[11]=b,P[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),o=1/rr.setFromMatrixColumn(e,1).length(),d=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*d,t[9]=n[9]*d,t[10]=n[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,d=Math.cos(n),l=Math.sin(n),p=Math.cos(r),h=Math.sin(r),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const v=d*m,M=d*g,A=l*m,b=l*g;t[0]=p*m,t[4]=-p*g,t[8]=h,t[1]=M+A*h,t[5]=v-b*h,t[9]=-l*p,t[2]=b-v*h,t[6]=A+M*h,t[10]=d*p}else if(e.order==="YXZ"){const v=p*m,M=p*g,A=h*m,b=h*g;t[0]=v+b*l,t[4]=A*l-M,t[8]=d*h,t[1]=d*g,t[5]=d*m,t[9]=-l,t[2]=M*l-A,t[6]=b+v*l,t[10]=d*p}else if(e.order==="ZXY"){const v=p*m,M=p*g,A=h*m,b=h*g;t[0]=v-b*l,t[4]=-d*g,t[8]=A+M*l,t[1]=M+A*l,t[5]=d*m,t[9]=b-v*l,t[2]=-d*h,t[6]=l,t[10]=d*p}else if(e.order==="ZYX"){const v=d*m,M=d*g,A=l*m,b=l*g;t[0]=p*m,t[4]=A*h-M,t[8]=v*h+b,t[1]=p*g,t[5]=b*h+v,t[9]=M*h-A,t[2]=-h,t[6]=l*p,t[10]=d*p}else if(e.order==="YZX"){const v=d*p,M=d*h,A=l*p,b=l*h;t[0]=p*m,t[4]=b-v*g,t[8]=A*g+M,t[1]=g,t[5]=d*m,t[9]=-l*m,t[2]=-h*m,t[6]=M*g+A,t[10]=v-b*g}else if(e.order==="XZY"){const v=d*p,M=d*h,A=l*p,b=l*h;t[0]=p*m,t[4]=-g,t[8]=h*m,t[1]=v*g+b,t[5]=d*m,t[9]=M*g-A,t[2]=A*g-M,t[6]=l*m,t[10]=b*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uh,e,Nh)}lookAt(e,t,n){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),fi.crossVectors(n,yn),fi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),fi.crossVectors(n,yn)),fi.normalize(),Qs.crossVectors(yn,fi),r[0]=fi.x,r[4]=Qs.x,r[8]=yn.x,r[1]=fi.y,r[5]=Qs.y,r[9]=yn.y,r[2]=fi.z,r[6]=Qs.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,d=n[0],l=n[4],p=n[8],h=n[12],m=n[1],g=n[5],v=n[9],M=n[13],A=n[2],b=n[6],y=n[10],P=n[14],O=n[3],C=n[7],F=n[11],L=n[15],B=r[0],Z=r[4],E=r[8],N=r[12],W=r[1],le=r[5],ue=r[9],Q=r[13],j=r[2],V=r[6],ae=r[10],xe=r[14],ce=r[3],de=r[7],pe=r[11],Ie=r[15];return o[0]=d*B+l*W+p*j+h*ce,o[4]=d*Z+l*le+p*V+h*de,o[8]=d*E+l*ue+p*ae+h*pe,o[12]=d*N+l*Q+p*xe+h*Ie,o[1]=m*B+g*W+v*j+M*ce,o[5]=m*Z+g*le+v*V+M*de,o[9]=m*E+g*ue+v*ae+M*pe,o[13]=m*N+g*Q+v*xe+M*Ie,o[2]=A*B+b*W+y*j+P*ce,o[6]=A*Z+b*le+y*V+P*de,o[10]=A*E+b*ue+y*ae+P*pe,o[14]=A*N+b*Q+y*xe+P*Ie,o[3]=O*B+C*W+F*j+L*ce,o[7]=O*Z+C*le+F*V+L*de,o[11]=O*E+C*ue+F*ae+L*pe,o[15]=O*N+C*Q+F*xe+L*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],d=e[1],l=e[5],p=e[9],h=e[13],m=e[2],g=e[6],v=e[10],M=e[14],A=e[3],b=e[7],y=e[11],P=e[15];return A*(+o*p*g-r*h*g-o*l*v+n*h*v+r*l*M-n*p*M)+b*(+t*p*M-t*h*v+o*d*v-r*d*M+r*h*m-o*p*m)+y*(+t*h*g-t*l*M-o*d*g+n*d*M+o*l*m-n*h*m)+P*(-r*l*m-t*p*g+t*l*v+r*d*g-n*d*v+n*p*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],d=e[4],l=e[5],p=e[6],h=e[7],m=e[8],g=e[9],v=e[10],M=e[11],A=e[12],b=e[13],y=e[14],P=e[15],O=g*y*h-b*v*h+b*p*M-l*y*M-g*p*P+l*v*P,C=A*v*h-m*y*h-A*p*M+d*y*M+m*p*P-d*v*P,F=m*b*h-A*g*h+A*l*M-d*b*M-m*l*P+d*g*P,L=A*g*p-m*b*p-A*l*v+d*b*v+m*l*y-d*g*y,B=t*O+n*C+r*F+o*L;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/B;return e[0]=O*Z,e[1]=(b*v*o-g*y*o-b*r*M+n*y*M+g*r*P-n*v*P)*Z,e[2]=(l*y*o-b*p*o+b*r*h-n*y*h-l*r*P+n*p*P)*Z,e[3]=(g*p*o-l*v*o-g*r*h+n*v*h+l*r*M-n*p*M)*Z,e[4]=C*Z,e[5]=(m*y*o-A*v*o+A*r*M-t*y*M-m*r*P+t*v*P)*Z,e[6]=(A*p*o-d*y*o-A*r*h+t*y*h+d*r*P-t*p*P)*Z,e[7]=(d*v*o-m*p*o+m*r*h-t*v*h-d*r*M+t*p*M)*Z,e[8]=F*Z,e[9]=(A*g*o-m*b*o-A*n*M+t*b*M+m*n*P-t*g*P)*Z,e[10]=(d*b*o-A*l*o+A*n*h-t*b*h-d*n*P+t*l*P)*Z,e[11]=(m*l*o-d*g*o-m*n*h+t*g*h+d*n*M-t*l*M)*Z,e[12]=L*Z,e[13]=(m*b*r-A*g*r+A*n*v-t*b*v-m*n*y+t*g*y)*Z,e[14]=(A*l*r-d*b*r-A*n*p+t*b*p+d*n*y-t*l*y)*Z,e[15]=(d*g*r-m*l*r+m*n*p-t*g*p-d*n*v+t*l*v)*Z,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,d=e.x,l=e.y,p=e.z,h=o*d,m=o*l;return this.set(h*d+n,h*l-r*p,h*p+r*l,0,h*l+r*p,m*l+n,m*p-r*d,0,h*p-r*l,m*p+r*d,o*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,d){return this.set(1,n,o,0,e,1,d,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,d=t._y,l=t._z,p=t._w,h=o+o,m=d+d,g=l+l,v=o*h,M=o*m,A=o*g,b=d*m,y=d*g,P=l*g,O=p*h,C=p*m,F=p*g,L=n.x,B=n.y,Z=n.z;return r[0]=(1-(b+P))*L,r[1]=(M+F)*L,r[2]=(A-C)*L,r[3]=0,r[4]=(M-F)*B,r[5]=(1-(v+P))*B,r[6]=(y+O)*B,r[7]=0,r[8]=(A+C)*Z,r[9]=(y-O)*Z,r[10]=(1-(v+b))*Z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=rr.set(r[0],r[1],r[2]).length();const d=rr.set(r[4],r[5],r[6]).length(),l=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const h=1/o,m=1/d,g=1/l;return Rn.elements[0]*=h,Rn.elements[1]*=h,Rn.elements[2]*=h,Rn.elements[4]*=m,Rn.elements[5]*=m,Rn.elements[6]*=m,Rn.elements[8]*=g,Rn.elements[9]*=g,Rn.elements[10]*=g,t.setFromRotationMatrix(Rn),n.x=o,n.y=d,n.z=l,this}makePerspective(e,t,n,r,o,d){const l=this.elements,p=2*o/(t-e),h=2*o/(n-r),m=(t+e)/(t-e),g=(n+r)/(n-r),v=-(d+o)/(d-o),M=-2*d*o/(d-o);return l[0]=p,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=h,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,d){const l=this.elements,p=1/(t-e),h=1/(n-r),m=1/(d-o),g=(t+e)*p,v=(n+r)*h,M=(d+o)*m;return l[0]=2*p,l[4]=0,l[8]=0,l[12]=-g,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=-2*m,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rr=new H,Rn=new Tt,Uh=new H(0,0,0),Nh=new H(1,1,1),fi=new H,Qs=new H,yn=new H,Vc=new Tt,Hc=new Wi;class Eo{constructor(e=0,t=0,n=0,r=Eo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],d=r[4],l=r[8],p=r[1],h=r[5],m=r[9],g=r[2],v=r[6],M=r[10];switch(t){case"XYZ":this._y=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,M),this._z=Math.atan2(-d,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-an(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(an(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-an(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(an(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-m,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Eo.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fh=0;const Wc=new H,sr=new Wi,ti=new Tt,Js=new H,Wr=new H,zh=new H,kh=new Wi,jc=new H(1,0,0),qc=new H(0,1,0),Xc=new H(0,0,1),Bh={type:"added"},Yc={type:"removed"};class zt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new H,t=new Eo,n=new Wi,r=new H(1,1,1);function o(){n.setFromEuler(t,!1)}function d(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new ln}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Wc.copy(e).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Js.copy(e):Js.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Wr,Js,this.up):ti.lookAt(Js,Wr,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(ti),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Yc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const d=this.children[n].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectsByProperty(e,t);d.length>0&&(n=n.concat(d))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,d=r.length;o<d;o++){const l=r[o];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(l,p){return l[p.uuid]===void 0&&(l[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const p=l.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const g=p[h];o(e.shapes,g)}else o(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let p=0,h=this.material.length;p<h;p++)l.push(o(e.materials,this.material[p]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const p=this.animations[l];r.animations.push(o(e.animations,p))}}if(t){const l=d(e.geometries),p=d(e.materials),h=d(e.textures),m=d(e.images),g=d(e.shapes),v=d(e.skeletons),M=d(e.animations),A=d(e.nodes);l.length>0&&(n.geometries=l),p.length>0&&(n.materials=p),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),M.length>0&&(n.animations=M),A.length>0&&(n.nodes=A)}return n.object=r,n;function d(l){const p=[];for(const h in l){const m=l[h];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}zt.DEFAULT_UP=new H(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new H,ni=new H,Ea=new H,ii=new H,or=new H,ar=new H,Zc=new H,Ta=new H,Ca=new H,Pa=new H;class ri{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Ln.subVectors(r,t),ni.subVectors(n,t),Ea.subVectors(e,t);const d=Ln.dot(Ln),l=Ln.dot(ni),p=Ln.dot(Ea),h=ni.dot(ni),m=ni.dot(Ea),g=d*h-l*l;if(g===0)return o.set(-2,-1,-1);const v=1/g,M=(h*p-l*m)*v,A=(d*m-l*p)*v;return o.set(1-M-A,A,M)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ii),ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(e,t,n,r,o,d,l,p){return this.getBarycoord(e,t,n,r,ii),p.set(0,0),p.addScaledVector(o,ii.x),p.addScaledVector(d,ii.y),p.addScaledVector(l,ii.z),p}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),ni.subVectors(e,t),Ln.cross(ni).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,o){return ri.getUV(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let d,l;or.subVectors(r,n),ar.subVectors(o,n),Ta.subVectors(e,n);const p=or.dot(Ta),h=ar.dot(Ta);if(p<=0&&h<=0)return t.copy(n);Ca.subVectors(e,r);const m=or.dot(Ca),g=ar.dot(Ca);if(m>=0&&g<=m)return t.copy(r);const v=p*g-m*h;if(v<=0&&p>=0&&m<=0)return d=p/(p-m),t.copy(n).addScaledVector(or,d);Pa.subVectors(e,o);const M=or.dot(Pa),A=ar.dot(Pa);if(A>=0&&M<=A)return t.copy(o);const b=M*h-p*A;if(b<=0&&h>=0&&A<=0)return l=h/(h-A),t.copy(n).addScaledVector(ar,l);const y=m*A-M*g;if(y<=0&&g-m>=0&&M-A>=0)return Zc.subVectors(o,r),l=(g-m)/(g-m+(M-A)),t.copy(r).addScaledVector(Zc,l);const P=1/(y+b+v);return d=b*P,l=v*P,t.copy(n).addScaledVector(or,d).addScaledVector(ar,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gh=0;class bi extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=mr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lu,this.blendDst=Iu,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const d=[];for(const l in o){const p=o[l];delete p.metadata,d.push(p)}return d}if(t){const o=r(e.textures),d=r(e.images);o.length>0&&(n.textures=o),d.length>0&&(n.images=d)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Aa(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=rn.workingColorSpace){return this.r=e,this.g=t,this.b=n,rn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=rn.workingColorSpace){if(e=Sh(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,d=2*n-o;this.r=Aa(d,o,e+1/3),this.g=Aa(d,o,e),this.b=Aa(d,o,e-1/3)}return rn.toWorkingColorSpace(this,r),this}setStyle(e,t=Wn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const d=r[1],l=r[2];switch(d){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,rn.toWorkingColorSpace(this,t),n(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,rn.toWorkingColorSpace(this,t),n(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const p=parseFloat(o[1])/360,h=parseFloat(o[2])/100,m=parseFloat(o[3])/100;return n(o[4]),this.setHSL(p,h,m,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],d=o.length;if(d===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,rn.toWorkingColorSpace(this,t),this;if(d===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,rn.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const n=Wu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}copyLinearToSRGB(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return rn.fromWorkingColorSpace(Jt.copy(this),e),an(Jt.r*255,0,255)<<16^an(Jt.g*255,0,255)<<8^an(Jt.b*255,0,255)<<0}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rn.workingColorSpace){rn.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,r=Jt.g,o=Jt.b,d=Math.max(n,r,o),l=Math.min(n,r,o);let p,h;const m=(l+d)/2;if(l===d)p=0,h=0;else{const g=d-l;switch(h=m<=.5?g/(d+l):g/(2-d-l),d){case n:p=(r-o)/g+(r<o?6:0);break;case r:p=(o-n)/g+2;break;case o:p=(n-r)/g+4;break}p/=6}return e.h=p,e.s=h,e.l=m,e}getRGB(e,t=rn.workingColorSpace){return rn.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Wn){rn.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,r=Jt.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(In),In.h+=e,In.s+=t,In.l+=n,this.setHSL(In.h,In.s,In.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(eo);const n=pa(In.h,eo.h,t),r=pa(In.s,eo.s,t),o=pa(In.l,eo.l,t);return this.setHSL(n,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new We;We.NAMES=Wu;class Bi extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new H,to=new Re;class zn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array),o=_n(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ju extends zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qu extends zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cn extends zn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vh=0;const Tn=new Tt,Da=new zt,lr=new H,bn=new gs,jr=new gs,Vt=new H;class kn extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ku(e)?qu:ju)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ln().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];bn.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let o=0,d=t.length;o<d;o++){const l=t[o];jr.setFromBufferAttribute(l),this.morphTargetsRelative?(Vt.addVectors(bn.min,jr.min),bn.expandByPoint(Vt),Vt.addVectors(bn.max,jr.max),bn.expandByPoint(Vt)):(bn.expandByPoint(jr.min),bn.expandByPoint(jr.max))}bn.getCenter(n);let r=0;for(let o=0,d=e.count;o<d;o++)Vt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Vt));if(t)for(let o=0,d=t.length;o<d;o++){const l=t[o],p=this.morphTargetsRelative;for(let h=0,m=l.count;h<m;h++)Vt.fromBufferAttribute(l,h),p&&(lr.fromBufferAttribute(e,h),Vt.add(lr)),r=Math.max(r,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,o=t.normal.array,d=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*l),4));const p=this.getAttribute("tangent").array,h=[],m=[];for(let W=0;W<l;W++)h[W]=new H,m[W]=new H;const g=new H,v=new H,M=new H,A=new Re,b=new Re,y=new Re,P=new H,O=new H;function C(W,le,ue){g.fromArray(r,W*3),v.fromArray(r,le*3),M.fromArray(r,ue*3),A.fromArray(d,W*2),b.fromArray(d,le*2),y.fromArray(d,ue*2),v.sub(g),M.sub(g),b.sub(A),y.sub(A);const Q=1/(b.x*y.y-y.x*b.y);isFinite(Q)&&(P.copy(v).multiplyScalar(y.y).addScaledVector(M,-b.y).multiplyScalar(Q),O.copy(M).multiplyScalar(b.x).addScaledVector(v,-y.x).multiplyScalar(Q),h[W].add(P),h[le].add(P),h[ue].add(P),m[W].add(O),m[le].add(O),m[ue].add(O))}let F=this.groups;F.length===0&&(F=[{start:0,count:n.length}]);for(let W=0,le=F.length;W<le;++W){const ue=F[W],Q=ue.start,j=ue.count;for(let V=Q,ae=Q+j;V<ae;V+=3)C(n[V+0],n[V+1],n[V+2])}const L=new H,B=new H,Z=new H,E=new H;function N(W){Z.fromArray(o,W*3),E.copy(Z);const le=h[W];L.copy(le),L.sub(Z.multiplyScalar(Z.dot(le))).normalize(),B.crossVectors(E,le);const Q=B.dot(m[W])<0?-1:1;p[W*4]=L.x,p[W*4+1]=L.y,p[W*4+2]=L.z,p[W*4+3]=Q}for(let W=0,le=F.length;W<le;++W){const ue=F[W],Q=ue.start,j=ue.count;for(let V=Q,ae=Q+j;V<ae;V+=3)N(n[V+0]),N(n[V+1]),N(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,M=n.count;v<M;v++)n.setXYZ(v,0,0,0);const r=new H,o=new H,d=new H,l=new H,p=new H,h=new H,m=new H,g=new H;if(e)for(let v=0,M=e.count;v<M;v+=3){const A=e.getX(v+0),b=e.getX(v+1),y=e.getX(v+2);r.fromBufferAttribute(t,A),o.fromBufferAttribute(t,b),d.fromBufferAttribute(t,y),m.subVectors(d,o),g.subVectors(r,o),m.cross(g),l.fromBufferAttribute(n,A),p.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),l.add(m),p.add(m),h.add(m),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(b,p.x,p.y,p.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,M=t.count;v<M;v+=3)r.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),d.fromBufferAttribute(t,v+2),m.subVectors(d,o),g.subVectors(r,o),m.cross(g),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(l,p){const h=l.array,m=l.itemSize,g=l.normalized,v=new h.constructor(p.length*m);let M=0,A=0;for(let b=0,y=p.length;b<y;b++){l.isInterleavedBufferAttribute?M=p[b]*l.data.stride+l.offset:M=p[b]*m;for(let P=0;P<m;P++)v[A++]=h[M++]}return new zn(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,r=this.attributes;for(const l in r){const p=r[l],h=e(p,n);t.setAttribute(l,h)}const o=this.morphAttributes;for(const l in o){const p=[],h=o[l];for(let m=0,g=h.length;m<g;m++){const v=h[m],M=e(v,n);p.push(M)}t.morphAttributes[l]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let l=0,p=d.length;l<p;l++){const h=d[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const h=n[p];e.data.attributes[p]=h.toJSON(e.data)}const r={};let o=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let g=0,v=h.length;g<v;g++){const M=h[g];m.push(M.toJSON(e.data))}m.length>0&&(r[p]=m,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(t))}const o=e.morphAttributes;for(const h in o){const m=[],g=o[h];for(let v=0,M=g.length;v<M;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,m=d.length;h<m;h++){const g=d[h];this.addGroup(g.start,g.count,g.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kc=new Tt,Hn=new Oh,no=new al,$c=new H,qr=new H,Xr=new H,Yr=new H,Ra=new H,io=new H,ro=new Re,so=new Re,oo=new Re,La=new H,ao=new H;class mn extends zt{constructor(e=new kn,t=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,d=r.length;o<d;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,d=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){io.set(0,0,0);for(let p=0,h=o.length;p<h;p++){const m=l[p],g=o[p];m!==0&&(Ra.fromBufferAttribute(g,e),d?io.addScaledVector(Ra,m):io.addScaledVector(Ra.sub(t),m))}t.add(io)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(o),Hn.copy(e.ray).recast(e.near),no.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(no,$c)===null||Hn.origin.distanceToSquared($c)>(e.far-e.near)**2))||(Kc.copy(o).invert(),Hn.copy(e.ray).applyMatrix4(Kc),n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1))return;let d;const l=n.index,p=n.attributes.position,h=n.attributes.uv,m=n.attributes.uv2,g=n.groups,v=n.drawRange;if(l!==null)if(Array.isArray(r))for(let M=0,A=g.length;M<A;M++){const b=g[M],y=r[b.materialIndex],P=Math.max(b.start,v.start),O=Math.min(l.count,Math.min(b.start+b.count,v.start+v.count));for(let C=P,F=O;C<F;C+=3){const L=l.getX(C),B=l.getX(C+1),Z=l.getX(C+2);d=lo(this,y,e,Hn,h,m,L,B,Z),d&&(d.faceIndex=Math.floor(C/3),d.face.materialIndex=b.materialIndex,t.push(d))}}else{const M=Math.max(0,v.start),A=Math.min(l.count,v.start+v.count);for(let b=M,y=A;b<y;b+=3){const P=l.getX(b),O=l.getX(b+1),C=l.getX(b+2);d=lo(this,r,e,Hn,h,m,P,O,C),d&&(d.faceIndex=Math.floor(b/3),t.push(d))}}else if(p!==void 0)if(Array.isArray(r))for(let M=0,A=g.length;M<A;M++){const b=g[M],y=r[b.materialIndex],P=Math.max(b.start,v.start),O=Math.min(p.count,Math.min(b.start+b.count,v.start+v.count));for(let C=P,F=O;C<F;C+=3){const L=C,B=C+1,Z=C+2;d=lo(this,y,e,Hn,h,m,L,B,Z),d&&(d.faceIndex=Math.floor(C/3),d.face.materialIndex=b.materialIndex,t.push(d))}}else{const M=Math.max(0,v.start),A=Math.min(p.count,v.start+v.count);for(let b=M,y=A;b<y;b+=3){const P=b,O=b+1,C=b+2;d=lo(this,r,e,Hn,h,m,P,O,C),d&&(d.faceIndex=Math.floor(b/3),t.push(d))}}}}function Hh(a,e,t,n,r,o,d,l){let p;if(e.side===gn?p=n.intersectTriangle(d,o,r,!0,l):p=n.intersectTriangle(r,o,d,e.side===_i,l),p===null)return null;ao.copy(l),ao.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(ao);return h<t.near||h>t.far?null:{distance:h,point:ao.clone(),object:a}}function lo(a,e,t,n,r,o,d,l,p){a.getVertexPosition(d,qr),a.getVertexPosition(l,Xr),a.getVertexPosition(p,Yr);const h=Hh(a,e,t,n,qr,Xr,Yr,La);if(h){r&&(ro.fromBufferAttribute(r,d),so.fromBufferAttribute(r,l),oo.fromBufferAttribute(r,p),h.uv=ri.getUV(La,qr,Xr,Yr,ro,so,oo,new Re)),o&&(ro.fromBufferAttribute(o,d),so.fromBufferAttribute(o,l),oo.fromBufferAttribute(o,p),h.uv2=ri.getUV(La,qr,Xr,Yr,ro,so,oo,new Re));const m={a:d,b:l,c:p,normal:new H,materialIndex:0};ri.getNormal(qr,Xr,Yr,m.normal),h.face=m}return h}class vs extends kn{constructor(e=1,t=1,n=1,r=1,o=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:d};const l=this;r=Math.floor(r),o=Math.floor(o),d=Math.floor(d);const p=[],h=[],m=[],g=[];let v=0,M=0;A("z","y","x",-1,-1,n,t,e,d,o,0),A("z","y","x",1,-1,n,t,-e,d,o,1),A("x","z","y",1,1,e,n,t,r,d,2),A("x","z","y",1,-1,e,n,-t,r,d,3),A("x","y","z",1,-1,e,t,n,r,o,4),A("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(p),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(m,3)),this.setAttribute("uv",new cn(g,2));function A(b,y,P,O,C,F,L,B,Z,E,N){const W=F/Z,le=L/E,ue=F/2,Q=L/2,j=B/2,V=Z+1,ae=E+1;let xe=0,ce=0;const de=new H;for(let pe=0;pe<ae;pe++){const Ie=pe*le-Q;for(let ee=0;ee<V;ee++){const fe=ee*W-ue;de[b]=fe*O,de[y]=Ie*C,de[P]=j,h.push(de.x,de.y,de.z),de[b]=0,de[y]=0,de[P]=B>0?1:-1,m.push(de.x,de.y,de.z),g.push(ee/Z),g.push(1-pe/E),xe+=1}}for(let pe=0;pe<E;pe++)for(let Ie=0;Ie<Z;Ie++){const ee=v+Ie+V*pe,fe=v+Ie+V*(pe+1),te=v+(Ie+1)+V*(pe+1),$=v+(Ie+1)+V*pe;p.push(ee,fe,$),p.push(fe,te,$),ce+=6}l.addGroup(M,ce,N),M+=ce,v+=xe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const r=a[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function sn(a){const e={};for(let t=0;t<a.length;t++){const n=Mr(a[t]);for(const r in n)e[r]=n[r]}return e}function Wh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Xu(a){return a.getRenderTarget()===null&&a.outputEncoding===mt?Wn:ls}const pn={clone:Mr,merge:sn};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _t extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=Wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const d=this.uniforms[r].value;d&&d.isTexture?t.uniforms[r]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[r]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[r]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[r]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[r]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[r]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[r]={type:"m4",value:d.toArray()}:t.uniforms[r]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yu extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends Yu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,o,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,h=d.fullHeight;o+=d.offsetX*r/p,t-=d.offsetY*n/h,r*=d.width/p,n*=d.height/h}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cr=-90,ur=1;class Xh extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new hn(cr,ur,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new hn(cr,ur,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const d=new hn(cr,ur,e,t);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(0,1,0),this.add(d);const l=new hn(cr,ur,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(0,-1,0),this.add(l);const p=new hn(cr,ur,e,t);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,1),this.add(p);const h=new hn(cr,ur,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,o,d,l,p,h]=this.children,m=e.getRenderTarget(),g=e.toneMapping,v=e.xr.enabled;e.toneMapping=Xn,e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,o),e.setRenderTarget(n,2),e.render(t,d),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,p),n.texture.generateMipmaps=M,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(m),e.toneMapping=g,e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Zu extends vn{constructor(e,t,n,r,o,d,l,p,h,m){e=e!==void 0?e:[],t=t!==void 0?t:_r,super(e,t,n,r,o,d,l,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yh extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vs(5,5,5),o=new _t({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ht});o.uniforms.tEquirect.value=t;const d=new mn(r,o),l=t.minFilter;return t.minFilter===os&&(t.minFilter=Cn),new Xh(1,10,this).update(e,d),t.minFilter=l,d.geometry.dispose(),d.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,n,r);e.setRenderTarget(o)}}const Ia=new H,Zh=new H,Kh=new ln;class Oi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ia.subVectors(n,t).cross(Zh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ia),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kh.getNormalMatrix(e),r=this.coplanarPoint(Ia).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new al,co=new H;class ll{constructor(e=new Oi,t=new Oi,n=new Oi,r=new Oi,o=new Oi,d=new Oi){this.planes=[e,t,n,r,o,d]}set(e,t,n,r,o,d){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(o),l[5].copy(d),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],o=n[1],d=n[2],l=n[3],p=n[4],h=n[5],m=n[6],g=n[7],v=n[8],M=n[9],A=n[10],b=n[11],y=n[12],P=n[13],O=n[14],C=n[15];return t[0].setComponents(l-r,g-p,b-v,C-y).normalize(),t[1].setComponents(l+r,g+p,b+v,C+y).normalize(),t[2].setComponents(l+o,g+h,b+M,C+P).normalize(),t[3].setComponents(l-o,g-h,b-M,C-P).normalize(),t[4].setComponents(l-d,g-m,b-A,C-O).normalize(),t[5].setComponents(l+d,g+m,b+A,C+O).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(co.x=r.normal.x>0?e.max.x:e.min.x,co.y=r.normal.y>0?e.max.y:e.min.y,co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ku(){let a=null,e=!1,t=null,n=null;function r(o,d){t(o,d),n=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function $h(a,e){const t=e.isWebGL2,n=new WeakMap;function r(h,m){const g=h.array,v=h.usage,M=a.createBuffer();a.bindBuffer(m,M),a.bufferData(m,g,v),h.onUploadCallback();let A;if(g instanceof Float32Array)A=5126;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)A=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=5123;else if(g instanceof Int16Array)A=5122;else if(g instanceof Uint32Array)A=5125;else if(g instanceof Int32Array)A=5124;else if(g instanceof Int8Array)A=5120;else if(g instanceof Uint8Array)A=5121;else if(g instanceof Uint8ClampedArray)A=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:M,type:A,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version}}function o(h,m,g){const v=m.array,M=m.updateRange;a.bindBuffer(g,h),M.count===-1?a.bufferSubData(g,0,v):(t?a.bufferSubData(g,M.offset*v.BYTES_PER_ELEMENT,v,M.offset,M.count):a.bufferSubData(g,M.offset*v.BYTES_PER_ELEMENT,v.subarray(M.offset,M.offset+M.count)),M.count=-1),m.onUploadCallback()}function d(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=n.get(h);m&&(a.deleteBuffer(m.buffer),n.delete(h))}function p(h,m){if(h.isGLBufferAttribute){const v=n.get(h);(!v||v.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=n.get(h);g===void 0?n.set(h,r(h,m)):g.version<h.version&&(o(g.buffer,h,m),g.version=h.version)}return{get:d,remove:l,update:p}}class xs extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,d=t/2,l=Math.floor(n),p=Math.floor(r),h=l+1,m=p+1,g=e/l,v=t/p,M=[],A=[],b=[],y=[];for(let P=0;P<m;P++){const O=P*v-d;for(let C=0;C<h;C++){const F=C*g-o;A.push(F,-O,0),b.push(0,0,1),y.push(C/l),y.push(1-P/p)}}for(let P=0;P<p;P++)for(let O=0;O<l;O++){const C=O+h*P,F=O+h*(P+1),L=O+1+h*(P+1),B=O+1+h*P;M.push(C,F,B),M.push(F,L,B)}this.setIndex(M),this.setAttribute("position",new cn(A,3)),this.setAttribute("normal",new cn(b,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp="vec3 transformed = vec3( position );",sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,ap=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vp=`#define PI 3.141592653589793
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
}`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_p=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ep=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Np=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
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
#endif`,Gp=`#if defined( USE_ENVMAP )
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,Xp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,fm=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Wm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,qm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Xm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ym=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,rg=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
}`,og=`varying vec3 vWorldDirection;
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
	#include <encodings_fragment>
}`,lg=`uniform float scale;
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
}`,cg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
}`,pg=`#define MATCAP
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
}`,mg=`#define MATCAP
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
}`,gg=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,bg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,Sg=`#define TOON
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
}`,wg=`uniform float size;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Cg=`uniform vec3 color;
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
}`,Pg=`uniform float rotation;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,et={alphamap_fragment:Qh,alphamap_pars_fragment:Jh,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,begin_vertex:rp,beginnormal_vertex:sp,bsdfs:op,iridescence_fragment:ap,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:dp,clipping_planes_vertex:fp,color_fragment:hp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:vp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:_p,displacementmap_pars_vertex:yp,displacementmap_vertex:bp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,encodings_fragment:wp,encodings_pars_fragment:Ep,envmap_fragment:Tp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Gp,envmap_vertex:Dp,fog_vertex:Rp,fog_pars_vertex:Lp,fog_fragment:Ip,fog_pars_fragment:Op,gradientmap_pars_fragment:Up,lightmap_fragment:Np,lightmap_pars_fragment:Fp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:kp,lights_pars_begin:Bp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Wp,lights_phong_pars_fragment:jp,lights_physical_fragment:qp,lights_physical_pars_fragment:Xp,lights_fragment_begin:Yp,lights_fragment_maps:Zp,lights_fragment_end:Kp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:em,map_fragment:tm,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:rm,metalnessmap_fragment:sm,metalnessmap_pars_fragment:om,morphcolor_vertex:am,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:um,normal_fragment_begin:dm,normal_fragment_maps:fm,normal_pars_fragment:hm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:ym,output_fragment:bm,packing:Mm,premultiplied_alpha_fragment:Sm,project_vertex:wm,dithering_fragment:Em,dithering_pars_fragment:Tm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Dm,shadowmap_vertex:Rm,shadowmask_pars_fragment:Lm,skinbase_vertex:Im,skinning_pars_vertex:Om,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Fm,specularmap_pars_fragment:zm,tonemapping_fragment:km,tonemapping_pars_fragment:Bm,transmission_fragment:Gm,transmission_pars_fragment:Vm,uv_pars_fragment:Hm,uv_pars_vertex:Wm,uv_vertex:jm,uv2_pars_fragment:qm,uv2_pars_vertex:Xm,uv2_vertex:Ym,worldpos_vertex:Zm,background_vert:Km,background_frag:$m,backgroundCube_vert:Qm,backgroundCube_frag:Jm,cube_vert:eg,cube_frag:tg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:rg,distanceRGBA_frag:sg,equirect_vert:og,equirect_frag:ag,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:ug,meshbasic_frag:dg,meshlambert_vert:fg,meshlambert_frag:hg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:vg,meshphong_vert:xg,meshphong_frag:_g,meshphysical_vert:yg,meshphysical_frag:bg,meshtoon_vert:Mg,meshtoon_frag:Sg,points_vert:wg,points_frag:Eg,shadow_vert:Tg,shadow_frag:Cg,sprite_vert:Pg,sprite_frag:Ag},Me={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ln},uv2Transform:{value:new ln},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ln}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ln}}},jn={basic:{uniforms:sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new We(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:sn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:sn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:sn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new We(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:sn([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:sn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:sn([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:sn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:sn([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new ln},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:sn([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:sn([Me.lights,Me.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};jn.physical={uniforms:sn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Re(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const uo={r:0,b:0,g:0};function Dg(a,e,t,n,r,o,d){const l=new We(0);let p=o===!0?0:1,h,m,g=null,v=0,M=null;function A(y,P){let O=!1,C=P.isScene===!0?P.background:null;C&&C.isTexture&&(C=(P.backgroundBlurriness>0?t:e).get(C));const F=a.xr,L=F.getSession&&F.getSession();L&&L.environmentBlendMode==="additive"&&(C=null),C===null?b(l,p):C&&C.isColor&&(b(C,1),O=!0),(a.autoClear||O)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),C&&(C.isCubeTexture||C.mapping===wo)?(m===void 0&&(m=new mn(new vs(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:Mr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,Z,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=C.encoding!==mt,(g!==C||v!==C.version||M!==a.toneMapping)&&(m.material.needsUpdate=!0,g=C,v=C.version,M=a.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new mn(new xs(2,2),new _t({name:"BackgroundMaterial",uniforms:Mr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=C.encoding!==mt,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||M!==a.toneMapping)&&(h.material.needsUpdate=!0,g=C,v=C.version,M=a.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function b(y,P){y.getRGB(uo,Xu(a)),n.buffers.color.setClear(uo.r,uo.g,uo.b,P,d)}return{getClearColor:function(){return l},setClearColor:function(y,P=1){l.set(y),p=P,b(l,p)},getClearAlpha:function(){return p},setClearAlpha:function(y){p=y,b(l,p)},render:A}}function Rg(a,e,t,n){const r=a.getParameter(34921),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),d=n.isWebGL2||o!==null,l={},p=y(null);let h=p,m=!1;function g(j,V,ae,xe,ce){let de=!1;if(d){const pe=b(xe,ae,V);h!==pe&&(h=pe,M(h.object)),de=P(j,xe,ae,ce),de&&O(j,xe,ae,ce)}else{const pe=V.wireframe===!0;(h.geometry!==xe.id||h.program!==ae.id||h.wireframe!==pe)&&(h.geometry=xe.id,h.program=ae.id,h.wireframe=pe,de=!0)}ce!==null&&t.update(ce,34963),(de||m)&&(m=!1,E(j,V,ae,xe),ce!==null&&a.bindBuffer(34963,t.get(ce).buffer))}function v(){return n.isWebGL2?a.createVertexArray():o.createVertexArrayOES()}function M(j){return n.isWebGL2?a.bindVertexArray(j):o.bindVertexArrayOES(j)}function A(j){return n.isWebGL2?a.deleteVertexArray(j):o.deleteVertexArrayOES(j)}function b(j,V,ae){const xe=ae.wireframe===!0;let ce=l[j.id];ce===void 0&&(ce={},l[j.id]=ce);let de=ce[V.id];de===void 0&&(de={},ce[V.id]=de);let pe=de[xe];return pe===void 0&&(pe=y(v()),de[xe]=pe),pe}function y(j){const V=[],ae=[],xe=[];for(let ce=0;ce<r;ce++)V[ce]=0,ae[ce]=0,xe[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ae,attributeDivisors:xe,object:j,attributes:{},index:null}}function P(j,V,ae,xe){const ce=h.attributes,de=V.attributes;let pe=0;const Ie=ae.getAttributes();for(const ee in Ie)if(Ie[ee].location>=0){const te=ce[ee];let $=de[ee];if($===void 0&&(ee==="instanceMatrix"&&j.instanceMatrix&&($=j.instanceMatrix),ee==="instanceColor"&&j.instanceColor&&($=j.instanceColor)),te===void 0||te.attribute!==$||$&&te.data!==$.data)return!0;pe++}return h.attributesNum!==pe||h.index!==xe}function O(j,V,ae,xe){const ce={},de=V.attributes;let pe=0;const Ie=ae.getAttributes();for(const ee in Ie)if(Ie[ee].location>=0){let te=de[ee];te===void 0&&(ee==="instanceMatrix"&&j.instanceMatrix&&(te=j.instanceMatrix),ee==="instanceColor"&&j.instanceColor&&(te=j.instanceColor));const $={};$.attribute=te,te&&te.data&&($.data=te.data),ce[ee]=$,pe++}h.attributes=ce,h.attributesNum=pe,h.index=xe}function C(){const j=h.newAttributes;for(let V=0,ae=j.length;V<ae;V++)j[V]=0}function F(j){L(j,0)}function L(j,V){const ae=h.newAttributes,xe=h.enabledAttributes,ce=h.attributeDivisors;ae[j]=1,xe[j]===0&&(a.enableVertexAttribArray(j),xe[j]=1),ce[j]!==V&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,V),ce[j]=V)}function B(){const j=h.newAttributes,V=h.enabledAttributes;for(let ae=0,xe=V.length;ae<xe;ae++)V[ae]!==j[ae]&&(a.disableVertexAttribArray(ae),V[ae]=0)}function Z(j,V,ae,xe,ce,de){n.isWebGL2===!0&&(ae===5124||ae===5125)?a.vertexAttribIPointer(j,V,ae,ce,de):a.vertexAttribPointer(j,V,ae,xe,ce,de)}function E(j,V,ae,xe){if(n.isWebGL2===!1&&(j.isInstancedMesh||xe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const ce=xe.attributes,de=ae.getAttributes(),pe=V.defaultAttributeValues;for(const Ie in de){const ee=de[Ie];if(ee.location>=0){let fe=ce[Ie];if(fe===void 0&&(Ie==="instanceMatrix"&&j.instanceMatrix&&(fe=j.instanceMatrix),Ie==="instanceColor"&&j.instanceColor&&(fe=j.instanceColor)),fe!==void 0){const te=fe.normalized,$=fe.itemSize,Ce=t.get(fe);if(Ce===void 0)continue;const De=Ce.buffer,Le=Ce.type,Ae=Ce.bytesPerElement;if(fe.isInterleavedBufferAttribute){const Be=fe.data,He=Be.stride,Ze=fe.offset;if(Be.isInstancedInterleavedBuffer){for(let rt=0;rt<ee.locationSize;rt++)L(ee.location+rt,Be.meshPerAttribute);j.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let rt=0;rt<ee.locationSize;rt++)F(ee.location+rt);a.bindBuffer(34962,De);for(let rt=0;rt<ee.locationSize;rt++)Z(ee.location+rt,$/ee.locationSize,Le,te,He*Ae,(Ze+$/ee.locationSize*rt)*Ae)}else{if(fe.isInstancedBufferAttribute){for(let Be=0;Be<ee.locationSize;Be++)L(ee.location+Be,fe.meshPerAttribute);j.isInstancedMesh!==!0&&xe._maxInstanceCount===void 0&&(xe._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<ee.locationSize;Be++)F(ee.location+Be);a.bindBuffer(34962,De);for(let Be=0;Be<ee.locationSize;Be++)Z(ee.location+Be,$/ee.locationSize,Le,te,$*Ae,$/ee.locationSize*Be*Ae)}}else if(pe!==void 0){const te=pe[Ie];if(te!==void 0)switch(te.length){case 2:a.vertexAttrib2fv(ee.location,te);break;case 3:a.vertexAttrib3fv(ee.location,te);break;case 4:a.vertexAttrib4fv(ee.location,te);break;default:a.vertexAttrib1fv(ee.location,te)}}}}B()}function N(){ue();for(const j in l){const V=l[j];for(const ae in V){const xe=V[ae];for(const ce in xe)A(xe[ce].object),delete xe[ce];delete V[ae]}delete l[j]}}function W(j){if(l[j.id]===void 0)return;const V=l[j.id];for(const ae in V){const xe=V[ae];for(const ce in xe)A(xe[ce].object),delete xe[ce];delete V[ae]}delete l[j.id]}function le(j){for(const V in l){const ae=l[V];if(ae[j.id]===void 0)continue;const xe=ae[j.id];for(const ce in xe)A(xe[ce].object),delete xe[ce];delete ae[j.id]}}function ue(){Q(),m=!0,h!==p&&(h=p,M(h.object))}function Q(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:g,reset:ue,resetDefaultState:Q,dispose:N,releaseStatesOfGeometry:W,releaseStatesOfProgram:le,initAttributes:C,enableAttribute:F,disableUnusedAttributes:B}}function Lg(a,e,t,n){const r=n.isWebGL2;let o;function d(h){o=h}function l(h,m){a.drawArrays(o,h,m),t.update(m,o,1)}function p(h,m,g){if(g===0)return;let v,M;if(r)v=a,M="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[M](o,h,m,g),t.update(m,o,g)}this.setMode=d,this.render=l,this.renderInstances=p}function Ig(a,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(Z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(Z){if(Z==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";Z="mediump"}return Z==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let l=t.precision!==void 0?t.precision:"highp";const p=o(l);p!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);const h=d||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,g=a.getParameter(34930),v=a.getParameter(35660),M=a.getParameter(3379),A=a.getParameter(34076),b=a.getParameter(34921),y=a.getParameter(36347),P=a.getParameter(36348),O=a.getParameter(36349),C=v>0,F=d||e.has("OES_texture_float"),L=C&&F,B=d?a.getParameter(36183):0;return{isWebGL2:d,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:m,maxTextures:g,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:A,maxAttributes:b,maxVertexUniforms:y,maxVaryings:P,maxFragmentUniforms:O,vertexTextures:C,floatFragmentTextures:F,floatVertexTextures:L,maxSamples:B}}function Og(a){const e=this;let t=null,n=0,r=!1,o=!1;const d=new Oi,l=new ln,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const M=g.length!==0||v||n!==0||r;return r=v,n=g.length,M},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,M){const A=g.clippingPlanes,b=g.clipIntersection,y=g.clipShadows,P=a.get(g);if(!r||A===null||A.length===0||o&&!y)o?m(null):h();else{const O=o?0:n,C=O*4;let F=P.clippingState||null;p.value=F,F=m(A,v,C,M);for(let L=0;L!==C;++L)F[L]=t[L];P.clippingState=F,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,v,M,A){const b=g!==null?g.length:0;let y=null;if(b!==0){if(y=p.value,A!==!0||y===null){const P=M+b*4,O=v.matrixWorldInverse;l.getNormalMatrix(O),(y===null||y.length<P)&&(y=new Float32Array(P));for(let C=0,F=M;C!==b;++C,F+=4)d.copy(g[C]).applyMatrix4(O,l),d.normal.toArray(y,F),y[F+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function Ug(a){let e=new WeakMap;function t(d,l){return l===bo?d.mapping=_r:l===Za&&(d.mapping=yr),d}function n(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const l=d.mapping;if(l===bo||l===Za)if(e.has(d)){const p=e.get(d).texture;return t(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const h=new Yh(p.height/2);return h.fromEquirectangularTexture(a,d),e.set(d,h),d.addEventListener("dispose",r),t(h.texture,d.mapping)}else return null}}return d}function r(d){const l=d.target;l.removeEventListener("dispose",r);const p=e.get(l);p!==void 0&&(e.delete(l),p.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class To extends Yu{constructor(e=-1,t=1,n=1,r=-1,o=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,d=n+e,l=r+t,p=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,d=o+h*this.view.width,l-=m*this.view.offsetY,p=l-m*this.view.height}this.projectionMatrix.makeOrthographic(o,d,l,p,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hr=4,Qc=[.125,.215,.35,.446,.526,.582],Ni=20,Oa=new To,Jc=new We;let Ua=null;const Ui=(1+Math.sqrt(5))/2,fr=1/Ui,eu=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Ui,fr),new H(0,Ui,-fr),new H(fr,0,Ui),new H(-fr,0,Ui),new H(Ui,fr,0),new H(-Ui,fr,0)];class tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ua=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua),e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:as,format:Fn,encoding:Hi,depthBuffer:!1},r=nu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ng(o)),this._blurMaterial=Fg(o,e,t)}return r}_compileMaterial(e){const t=new mn(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,n,r){const l=new hn(90,1,t,n),p=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(Jc),m.toneMapping=Xn,m.autoClear=!1;const M=new Bi({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),A=new mn(new vs,M);let b=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,b=!0):(M.color.copy(Jc),b=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(l.up.set(0,p[P],0),l.lookAt(h[P],0,0)):O===1?(l.up.set(0,0,p[P]),l.lookAt(0,h[P],0)):(l.up.set(0,p[P],0),l.lookAt(0,0,h[P]));const C=this._cubeSize;fo(r,O*C,P>2?C:0,C,C),m.setRenderTarget(r),b&&m.render(A,l),m.render(e,l)}A.geometry.dispose(),A.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===_r||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const o=r?this._cubemapMaterial:this._equirectMaterial,d=new mn(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const p=this._cubeSize;fo(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(d,Oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),d=eu[(r-1)%eu.length];this._blur(e,r-1,r,o,d)}t.autoClear=n}_blur(e,t,n,r,o){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,n,r,"latitudinal",o),this._halfBlur(d,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,d,l){const p=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new mn(this._lodPlanes[r],h),v=h.uniforms,M=this._sizeLods[n]-1,A=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*Ni-1),b=o/A,y=isFinite(o)?1+Math.floor(m*b):Ni;y>Ni&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ni}`);const P=[];let O=0;for(let Z=0;Z<Ni;++Z){const E=Z/b,N=Math.exp(-E*E/2);P.push(N),Z===0?O+=N:Z<y&&(O+=2*N)}for(let Z=0;Z<P.length;Z++)P[Z]=P[Z]/O;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=P,v.latitudinal.value=d==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:C}=this;v.dTheta.value=A,v.mipInt.value=C-n;const F=this._sizeLods[r],L=3*F*(r>C-hr?r-C+hr:0),B=4*(this._cubeSize-F);fo(t,L,B,3*F,2*F),p.setRenderTarget(t),p.render(g,Oa)}}function Ng(a){const e=[],t=[],n=[];let r=a;const o=a-hr+1+Qc.length;for(let d=0;d<o;d++){const l=Math.pow(2,r);t.push(l);let p=1/l;d>a-hr?p=Qc[d-a+hr-1]:d===0&&(p=0),n.push(p);const h=1/(l-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],M=6,A=6,b=3,y=2,P=1,O=new Float32Array(b*A*M),C=new Float32Array(y*A*M),F=new Float32Array(P*A*M);for(let B=0;B<M;B++){const Z=B%3*2/3-1,E=B>2?0:-1,N=[Z,E,0,Z+2/3,E,0,Z+2/3,E+1,0,Z,E,0,Z+2/3,E+1,0,Z,E+1,0];O.set(N,b*A*B),C.set(v,y*A*B);const W=[B,B,B,B,B,B];F.set(W,P*A*B)}const L=new kn;L.setAttribute("position",new zn(O,b)),L.setAttribute("uv",new zn(C,y)),L.setAttribute("faceIndex",new zn(F,P)),e.push(L),r>hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nu(a,e,t){const n=new jt(a,e,t);return n.texture.mapping=wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(a,e,t,n,r){a.viewport.set(e,t,n,r),a.scissor.set(e,t,n,r)}function Fg(a,e,t){const n=new Float32Array(Ni),r=new H(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function iu(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function ru(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ht,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function zg(a){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const p=l.mapping,h=p===bo||p===Za,m=p===_r||p===yr;if(h||m)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let g=e.get(l);return t===null&&(t=new tu(a)),g=h?t.fromEquirectangular(l,g):t.fromCubemap(l,g),e.set(l,g),g.texture}else{if(e.has(l))return e.get(l).texture;{const g=l.image;if(h&&g&&g.height>0||m&&g&&r(g)){t===null&&(t=new tu(a));const v=h?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",o),v.texture}else return null}}}return l}function r(l){let p=0;const h=6;for(let m=0;m<h;m++)l[m]!==void 0&&p++;return p===h}function o(l){const p=l.target;p.removeEventListener("dispose",o);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:d}}function kg(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Bg(a,e,t,n){const r={},o=new WeakMap;function d(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const A in v.attributes)e.remove(v.attributes[A]);v.removeEventListener("dispose",d),delete r[v.id];const M=o.get(v);M&&(e.remove(M),o.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(g,v){return r[v.id]===!0||(v.addEventListener("dispose",d),r[v.id]=!0,t.memory.geometries++),v}function p(g){const v=g.attributes;for(const A in v)e.update(v[A],34962);const M=g.morphAttributes;for(const A in M){const b=M[A];for(let y=0,P=b.length;y<P;y++)e.update(b[y],34962)}}function h(g){const v=[],M=g.index,A=g.attributes.position;let b=0;if(M!==null){const O=M.array;b=M.version;for(let C=0,F=O.length;C<F;C+=3){const L=O[C+0],B=O[C+1],Z=O[C+2];v.push(L,B,B,Z,Z,L)}}else{const O=A.array;b=A.version;for(let C=0,F=O.length/3-1;C<F;C+=3){const L=C+0,B=C+1,Z=C+2;v.push(L,B,B,Z,Z,L)}}const y=new(ku(v)?qu:ju)(v,1);y.version=b;const P=o.get(g);P&&e.remove(P),o.set(g,y)}function m(g){const v=o.get(g);if(v){const M=g.index;M!==null&&v.version<M.version&&h(g)}else h(g);return o.get(g)}return{get:l,update:p,getWireframeAttribute:m}}function Gg(a,e,t,n){const r=n.isWebGL2;let o;function d(v){o=v}let l,p;function h(v){l=v.type,p=v.bytesPerElement}function m(v,M){a.drawElements(o,M,l,v*p),t.update(M,o,1)}function g(v,M,A){if(A===0)return;let b,y;if(r)b=a,y="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[y](o,M,l,v*p,A),t.update(M,o,A)}this.setMode=d,this.setIndex=h,this.render=m,this.renderInstances=g}function Vg(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,d,l){switch(t.calls++,d){case 4:t.triangles+=l*(o/3);break;case 1:t.lines+=l*(o/2);break;case 3:t.lines+=l*(o-1);break;case 2:t.lines+=l*o;break;case 0:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Hg(a,e){return a[0]-e[0]}function Wg(a,e){return Math.abs(e[1])-Math.abs(a[1])}function jg(a,e,t){const n={},r=new Float32Array(8),o=new WeakMap,d=new xt,l=[];for(let h=0;h<8;h++)l[h]=[h,0];function p(h,m,g){const v=h.morphTargetInfluences;if(e.isWebGL2===!0){const M=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,A=M!==void 0?M.length:0;let b=o.get(m);if(b===void 0||b.count!==A){let j=function(){ue.dispose(),o.delete(m),m.removeEventListener("dispose",j)};b!==void 0&&b.texture.dispose();const O=m.morphAttributes.position!==void 0,C=m.morphAttributes.normal!==void 0,F=m.morphAttributes.color!==void 0,L=m.morphAttributes.position||[],B=m.morphAttributes.normal||[],Z=m.morphAttributes.color||[];let E=0;O===!0&&(E=1),C===!0&&(E=2),F===!0&&(E=3);let N=m.attributes.position.count*E,W=1;N>e.maxTextureSize&&(W=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const le=new Float32Array(N*W*4*A),ue=new Vu(le,N,W,A);ue.type=zi,ue.needsUpdate=!0;const Q=E*4;for(let V=0;V<A;V++){const ae=L[V],xe=B[V],ce=Z[V],de=N*W*4*V;for(let pe=0;pe<ae.count;pe++){const Ie=pe*Q;O===!0&&(d.fromBufferAttribute(ae,pe),le[de+Ie+0]=d.x,le[de+Ie+1]=d.y,le[de+Ie+2]=d.z,le[de+Ie+3]=0),C===!0&&(d.fromBufferAttribute(xe,pe),le[de+Ie+4]=d.x,le[de+Ie+5]=d.y,le[de+Ie+6]=d.z,le[de+Ie+7]=0),F===!0&&(d.fromBufferAttribute(ce,pe),le[de+Ie+8]=d.x,le[de+Ie+9]=d.y,le[de+Ie+10]=d.z,le[de+Ie+11]=ce.itemSize===4?d.w:1)}}b={count:A,texture:ue,size:new Re(N,W)},o.set(m,b),m.addEventListener("dispose",j)}let y=0;for(let O=0;O<v.length;O++)y+=v[O];const P=m.morphTargetsRelative?1:1-y;g.getUniforms().setValue(a,"morphTargetBaseInfluence",P),g.getUniforms().setValue(a,"morphTargetInfluences",v),g.getUniforms().setValue(a,"morphTargetsTexture",b.texture,t),g.getUniforms().setValue(a,"morphTargetsTextureSize",b.size)}else{const M=v===void 0?0:v.length;let A=n[m.id];if(A===void 0||A.length!==M){A=[];for(let C=0;C<M;C++)A[C]=[C,0];n[m.id]=A}for(let C=0;C<M;C++){const F=A[C];F[0]=C,F[1]=v[C]}A.sort(Wg);for(let C=0;C<8;C++)C<M&&A[C][1]?(l[C][0]=A[C][0],l[C][1]=A[C][1]):(l[C][0]=Number.MAX_SAFE_INTEGER,l[C][1]=0);l.sort(Hg);const b=m.morphAttributes.position,y=m.morphAttributes.normal;let P=0;for(let C=0;C<8;C++){const F=l[C],L=F[0],B=F[1];L!==Number.MAX_SAFE_INTEGER&&B?(b&&m.getAttribute("morphTarget"+C)!==b[L]&&m.setAttribute("morphTarget"+C,b[L]),y&&m.getAttribute("morphNormal"+C)!==y[L]&&m.setAttribute("morphNormal"+C,y[L]),r[C]=B,P+=B):(b&&m.hasAttribute("morphTarget"+C)===!0&&m.deleteAttribute("morphTarget"+C),y&&m.hasAttribute("morphNormal"+C)===!0&&m.deleteAttribute("morphNormal"+C),r[C]=0)}const O=m.morphTargetsRelative?1:1-P;g.getUniforms().setValue(a,"morphTargetBaseInfluence",O),g.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:p}}function qg(a,e,t,n){let r=new WeakMap;function o(p){const h=n.render.frame,m=p.geometry,g=e.get(p,m);return r.get(g)!==h&&(e.update(g),r.set(g,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",l)===!1&&p.addEventListener("dispose",l),t.update(p.instanceMatrix,34962),p.instanceColor!==null&&t.update(p.instanceColor,34962)),g}function d(){r=new WeakMap}function l(p){const h=p.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:d}}const $u=new vn,Qu=new Vu,Ju=new Lh,ed=new Zu,su=[],ou=[],au=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function wr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const r=e*t;let o=su[r];if(o===void 0&&(o=new Float32Array(r),su[r]=o),e!==0){n.toArray(o,0);for(let d=1,l=0;d!==e;++d)l+=t,a[d].toArray(o,l)}return o}function kt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Bt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Co(a,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Xg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Yg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;a.uniform2fv(this.addr,e),Bt(t,e)}}function Zg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;a.uniform3fv(this.addr,e),Bt(t,e)}}function Kg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;a.uniform4fv(this.addr,e),Bt(t,e)}}function $g(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;cu.set(n),a.uniformMatrix2fv(this.addr,!1,cu),Bt(t,n)}}function Qg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;lu.set(n),a.uniformMatrix3fv(this.addr,!1,lu),Bt(t,n)}}function Jg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;au.set(n),a.uniformMatrix4fv(this.addr,!1,au),Bt(t,n)}}function ev(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function tv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;a.uniform2iv(this.addr,e),Bt(t,e)}}function nv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;a.uniform3iv(this.addr,e),Bt(t,e)}}function iv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;a.uniform4iv(this.addr,e),Bt(t,e)}}function rv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function sv(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;a.uniform2uiv(this.addr,e),Bt(t,e)}}function ov(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;a.uniform3uiv(this.addr,e),Bt(t,e)}}function av(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;a.uniform4uiv(this.addr,e),Bt(t,e)}}function lv(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||$u,r)}function cv(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ju,r)}function uv(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ed,r)}function dv(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Qu,r)}function fv(a){switch(a){case 5126:return Xg;case 35664:return Yg;case 35665:return Zg;case 35666:return Kg;case 35674:return $g;case 35675:return Qg;case 35676:return Jg;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return rv;case 36294:return sv;case 36295:return ov;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return dv}}function hv(a,e){a.uniform1fv(this.addr,e)}function pv(a,e){const t=wr(e,this.size,2);a.uniform2fv(this.addr,t)}function mv(a,e){const t=wr(e,this.size,3);a.uniform3fv(this.addr,t)}function gv(a,e){const t=wr(e,this.size,4);a.uniform4fv(this.addr,t)}function vv(a,e){const t=wr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function xv(a,e){const t=wr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function _v(a,e){const t=wr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function yv(a,e){a.uniform1iv(this.addr,e)}function bv(a,e){a.uniform2iv(this.addr,e)}function Mv(a,e){a.uniform3iv(this.addr,e)}function Sv(a,e){a.uniform4iv(this.addr,e)}function wv(a,e){a.uniform1uiv(this.addr,e)}function Ev(a,e){a.uniform2uiv(this.addr,e)}function Tv(a,e){a.uniform3uiv(this.addr,e)}function Cv(a,e){a.uniform4uiv(this.addr,e)}function Pv(a,e,t){const n=this.cache,r=e.length,o=Co(t,r);kt(n,o)||(a.uniform1iv(this.addr,o),Bt(n,o));for(let d=0;d!==r;++d)t.setTexture2D(e[d]||$u,o[d])}function Av(a,e,t){const n=this.cache,r=e.length,o=Co(t,r);kt(n,o)||(a.uniform1iv(this.addr,o),Bt(n,o));for(let d=0;d!==r;++d)t.setTexture3D(e[d]||Ju,o[d])}function Dv(a,e,t){const n=this.cache,r=e.length,o=Co(t,r);kt(n,o)||(a.uniform1iv(this.addr,o),Bt(n,o));for(let d=0;d!==r;++d)t.setTextureCube(e[d]||ed,o[d])}function Rv(a,e,t){const n=this.cache,r=e.length,o=Co(t,r);kt(n,o)||(a.uniform1iv(this.addr,o),Bt(n,o));for(let d=0;d!==r;++d)t.setTexture2DArray(e[d]||Qu,o[d])}function Lv(a){switch(a){case 5126:return hv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return vv;case 35675:return xv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return bv;case 35668:case 35672:return Mv;case 35669:case 35673:return Sv;case 5125:return wv;case 36294:return Ev;case 36295:return Tv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Rv}}class Iv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=fv(t.type)}}class Ov{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Lv(t.type)}}class Uv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,d=r.length;o!==d;++o){const l=r[o];l.setValue(e,t[l.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function uu(a,e){a.seq.push(e),a.map[e.id]=e}function Nv(a,e,t){const n=a.name,r=n.length;for(Na.lastIndex=0;;){const o=Na.exec(n),d=Na.lastIndex;let l=o[1];const p=o[2]==="]",h=o[3];if(p&&(l=l|0),h===void 0||h==="["&&d+2===r){uu(t,h===void 0?new Iv(l,a,e):new Ov(l,a,e));break}else{let g=t.map[l];g===void 0&&(g=new Uv(l),uu(t,g)),t=g}}}class go{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),d=e.getUniformLocation(t,o.name);Nv(o,d,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,d=t.length;o!==d;++o){const l=t[o],p=n[l.id];p.needsUpdate!==!1&&l.setValue(e,p.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const d=e[r];d.id in t&&n.push(d)}return n}}function du(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Fv=0;function zv(a,e){const t=a.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let d=r;d<o;d++){const l=d+1;n.push(`${l===e?">":" "} ${l}: ${t[d]}`)}return n.join(`
`)}function kv(a){switch(a){case Hi:return["Linear","( value )"];case mt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function fu(a,e,t){const n=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const d=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+zv(a.getShaderSource(e),d)}else return r}function Bv(a,e){const t=kv(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gv(a,e){let t;switch(e){case eh:t="Linear";break;case Nu:t="Reinhard";break;case th:t="OptimizedCineon";break;case nh:t="ACESFilmic";break;case ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vv(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(es).join(`
`)}function Hv(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wv(a,e){const t={},n=a.getProgramParameter(e,35721);for(let r=0;r<n;r++){const o=a.getActiveAttrib(e,r),d=o.name;let l=1;o.type===35674&&(l=2),o.type===35675&&(l=3),o.type===35676&&(l=4),t[d]={type:o.type,location:a.getAttribLocation(e,d),locationSize:l}}return t}function es(a){return a!==""}function hu(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(a){return a.replace(jv,qv)}function qv(a,e){const t=et[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ja(t)}const Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(a){return a.replace(Xv,Yv)}function Yv(a,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function gu(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zv(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Jr&&(e="SHADOWMAP_TYPE_VSM"),e}function Kv(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case _r:case yr:e="ENVMAP_TYPE_CUBE";break;case wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $v(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function Qv(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case So:e="ENVMAP_BLENDING_MULTIPLY";break;case Qf:e="ENVMAP_BLENDING_MIX";break;case Jf:e="ENVMAP_BLENDING_ADD";break}return e}function Jv(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function e0(a,e,t,n){const r=a.getContext(),o=t.defines;let d=t.vertexShader,l=t.fragmentShader;const p=Zv(t),h=Kv(t),m=$v(t),g=Qv(t),v=Jv(t),M=t.isWebGL2?"":Vv(t),A=Hv(o),b=r.createProgram();let y,P,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[A].filter(es).join(`
`),y.length>0&&(y+=`
`),P=[M,A].filter(es).join(`
`),P.length>0&&(P+=`
`)):(y=[gu(t),"#define SHADER_NAME "+t.shaderName,A,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),P=[M,gu(t),"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?et.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.encodings_pars_fragment,Bv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),d=Ja(d),d=hu(d,t),d=pu(d,t),l=Ja(l),l=hu(l,t),l=pu(l,t),d=mu(d),l=mu(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,P=["#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const C=O+y+d,F=O+P+l,L=du(r,35633,C),B=du(r,35632,F);if(r.attachShader(b,L),r.attachShader(b,B),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b),a.debug.checkShaderErrors){const N=r.getProgramInfoLog(b).trim(),W=r.getShaderInfoLog(L).trim(),le=r.getShaderInfoLog(B).trim();let ue=!0,Q=!0;if(r.getProgramParameter(b,35714)===!1){ue=!1;const j=fu(r,L,"vertex"),V=fu(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,35715)+`

Program Info Log: `+N+`
`+j+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(W===""||le==="")&&(Q=!1);Q&&(this.diagnostics={runnable:ue,programLog:N,vertexShader:{log:W,prefix:y},fragmentShader:{log:le,prefix:P}})}r.deleteShader(L),r.deleteShader(B);let Z;this.getUniforms=function(){return Z===void 0&&(Z=new go(r,b)),Z};let E;return this.getAttributes=function(){return E===void 0&&(E=Wv(r,b)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.name=t.shaderName,this.id=Fv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=B,this}let t0=0;class n0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),d=this._getShaderCacheForMaterial(e);return d.has(r)===!1&&(d.add(r),r.usedTimes++),d.has(o)===!1&&(d.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new i0(e),t.set(e,n)),n}}class i0{constructor(e){this.id=t0++,this.code=e,this.usedTimes=0}}function r0(a,e,t,n,r,o,d){const l=new Hu,p=new n0,h=[],m=r.isWebGL2,g=r.logarithmicDepthBuffer,v=r.vertexTextures;let M=r.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E,N,W,le,ue){const Q=le.fog,j=ue.geometry,V=E.isMeshStandardMaterial?le.environment:null,ae=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),xe=ae&&ae.mapping===wo?ae.image.height:null,ce=A[E.type];E.precision!==null&&(M=r.getMaxPrecision(E.precision),M!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",M,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pe=de!==void 0?de.length:0;let Ie=0;j.morphAttributes.position!==void 0&&(Ie=1),j.morphAttributes.normal!==void 0&&(Ie=2),j.morphAttributes.color!==void 0&&(Ie=3);let ee,fe,te,$;if(ce){const He=jn[ce];ee=He.vertexShader,fe=He.fragmentShader}else ee=E.vertexShader,fe=E.fragmentShader,p.update(E),te=p.getVertexShaderID(E),$=p.getFragmentShaderID(E);const Ce=a.getRenderTarget(),De=E.alphaTest>0,Le=E.clearcoat>0,Ae=E.iridescence>0;return{isWebGL2:m,shaderID:ce,shaderName:E.type,vertexShader:ee,fragmentShader:fe,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:M,instancing:ue.isInstancedMesh===!0,instancingColor:ue.isInstancedMesh===!0&&ue.instanceColor!==null,supportsVertexTextures:v,outputEncoding:Ce===null?a.outputEncoding:Ce.isXRRenderTarget===!0?Ce.texture.encoding:Hi,map:!!E.map,matcap:!!E.matcap,envMap:!!ae,envMapMode:ae&&ae.mapping,envMapCubeUVHeight:xe,lightMap:!!E.lightMap,aoMap:!!E.aoMap,emissiveMap:!!E.emissiveMap,bumpMap:!!E.bumpMap,normalMap:!!E.normalMap,objectSpaceNormalMap:E.normalMapType===bh,tangentSpaceNormalMap:E.normalMapType===ps,decodeVideoTexture:!!E.map&&E.map.isVideoTexture===!0&&E.map.encoding===mt,clearcoat:Le,clearcoatMap:Le&&!!E.clearcoatMap,clearcoatRoughnessMap:Le&&!!E.clearcoatRoughnessMap,clearcoatNormalMap:Le&&!!E.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!E.iridescenceMap,iridescenceThicknessMap:Ae&&!!E.iridescenceThicknessMap,displacementMap:!!E.displacementMap,roughnessMap:!!E.roughnessMap,metalnessMap:!!E.metalnessMap,specularMap:!!E.specularMap,specularIntensityMap:!!E.specularIntensityMap,specularColorMap:!!E.specularColorMap,opaque:E.transparent===!1&&E.blending===mr,alphaMap:!!E.alphaMap,alphaTest:De,gradientMap:!!E.gradientMap,sheen:E.sheen>0,sheenColorMap:!!E.sheenColorMap,sheenRoughnessMap:!!E.sheenRoughnessMap,transmission:E.transmission>0,transmissionMap:!!E.transmissionMap,thicknessMap:!!E.thicknessMap,combine:E.combine,vertexTangents:!!E.normalMap&&!!j.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUvs:!!E.map||!!E.bumpMap||!!E.normalMap||!!E.specularMap||!!E.alphaMap||!!E.emissiveMap||!!E.roughnessMap||!!E.metalnessMap||!!E.clearcoatMap||!!E.clearcoatRoughnessMap||!!E.clearcoatNormalMap||!!E.iridescenceMap||!!E.iridescenceThicknessMap||!!E.displacementMap||!!E.transmissionMap||!!E.thicknessMap||!!E.specularIntensityMap||!!E.specularColorMap||!!E.sheenColorMap||!!E.sheenRoughnessMap,uvsVertexOnly:!(E.map||E.bumpMap||E.normalMap||E.specularMap||E.alphaMap||E.emissiveMap||E.roughnessMap||E.metalnessMap||E.clearcoatNormalMap||E.iridescenceMap||E.iridescenceThicknessMap||E.transmission>0||E.transmissionMap||E.thicknessMap||E.specularIntensityMap||E.specularColorMap||E.sheen>0||E.sheenColorMap||E.sheenRoughnessMap)&&!!E.displacementMap,fog:!!Q,useFog:E.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:!!E.flatShading,sizeAttenuation:E.sizeAttenuation,logarithmicDepthBuffer:g,skinning:ue.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ie,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&W.length>0,shadowMapType:a.shadowMap.type,toneMapping:E.toneMapped?a.toneMapping:Xn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gi,flipSided:E.side===gn,useDepthPacking:!!E.depthPacking,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:E.extensions&&E.extensions.derivatives,extensionFragDepth:E.extensions&&E.extensions.fragDepth,extensionDrawBuffers:E.extensions&&E.extensions.drawBuffers,extensionShaderTextureLOD:E.extensions&&E.extensions.shaderTextureLOD,rendererExtensionFragDepth:m||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function y(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const W in E.defines)N.push(W),N.push(E.defines[W]);return E.isRawShaderMaterial===!1&&(P(N,E),O(N,E),N.push(a.outputEncoding)),N.push(E.customProgramCacheKey),N.join()}function P(E,N){E.push(N.precision),E.push(N.outputEncoding),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.combine),E.push(N.vertexUvs),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function O(E,N){l.disableAll(),N.isWebGL2&&l.enable(0),N.supportsVertexTextures&&l.enable(1),N.instancing&&l.enable(2),N.instancingColor&&l.enable(3),N.map&&l.enable(4),N.matcap&&l.enable(5),N.envMap&&l.enable(6),N.lightMap&&l.enable(7),N.aoMap&&l.enable(8),N.emissiveMap&&l.enable(9),N.bumpMap&&l.enable(10),N.normalMap&&l.enable(11),N.objectSpaceNormalMap&&l.enable(12),N.tangentSpaceNormalMap&&l.enable(13),N.clearcoat&&l.enable(14),N.clearcoatMap&&l.enable(15),N.clearcoatRoughnessMap&&l.enable(16),N.clearcoatNormalMap&&l.enable(17),N.iridescence&&l.enable(18),N.iridescenceMap&&l.enable(19),N.iridescenceThicknessMap&&l.enable(20),N.displacementMap&&l.enable(21),N.specularMap&&l.enable(22),N.roughnessMap&&l.enable(23),N.metalnessMap&&l.enable(24),N.gradientMap&&l.enable(25),N.alphaMap&&l.enable(26),N.alphaTest&&l.enable(27),N.vertexColors&&l.enable(28),N.vertexAlphas&&l.enable(29),N.vertexUvs&&l.enable(30),N.vertexTangents&&l.enable(31),N.uvsVertexOnly&&l.enable(32),E.push(l.mask),l.disableAll(),N.fog&&l.enable(0),N.useFog&&l.enable(1),N.flatShading&&l.enable(2),N.logarithmicDepthBuffer&&l.enable(3),N.skinning&&l.enable(4),N.morphTargets&&l.enable(5),N.morphNormals&&l.enable(6),N.morphColors&&l.enable(7),N.premultipliedAlpha&&l.enable(8),N.shadowMapEnabled&&l.enable(9),N.useLegacyLights&&l.enable(10),N.doubleSided&&l.enable(11),N.flipSided&&l.enable(12),N.useDepthPacking&&l.enable(13),N.dithering&&l.enable(14),N.specularIntensityMap&&l.enable(15),N.specularColorMap&&l.enable(16),N.transmission&&l.enable(17),N.transmissionMap&&l.enable(18),N.thicknessMap&&l.enable(19),N.sheen&&l.enable(20),N.sheenColorMap&&l.enable(21),N.sheenRoughnessMap&&l.enable(22),N.decodeVideoTexture&&l.enable(23),N.opaque&&l.enable(24),E.push(l.mask)}function C(E){const N=A[E.type];let W;if(N){const le=jn[N];W=pn.clone(le.uniforms)}else W=E.uniforms;return W}function F(E,N){let W;for(let le=0,ue=h.length;le<ue;le++){const Q=h[le];if(Q.cacheKey===N){W=Q,++W.usedTimes;break}}return W===void 0&&(W=new e0(a,N,E,o),h.push(W)),W}function L(E){if(--E.usedTimes===0){const N=h.indexOf(E);h[N]=h[h.length-1],h.pop(),E.destroy()}}function B(E){p.remove(E)}function Z(){p.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:C,acquireProgram:F,releaseProgram:L,releaseShaderCache:B,programs:h,dispose:Z}}function s0(){let a=new WeakMap;function e(o){let d=a.get(o);return d===void 0&&(d={},a.set(o,d)),d}function t(o){a.delete(o)}function n(o,d,l){a.get(o)[d]=l}function r(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function o0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function vu(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function xu(){const a=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function d(g,v,M,A,b,y){let P=a[e];return P===void 0?(P={id:g.id,object:g,geometry:v,material:M,groupOrder:A,renderOrder:g.renderOrder,z:b,group:y},a[e]=P):(P.id=g.id,P.object=g,P.geometry=v,P.material=M,P.groupOrder=A,P.renderOrder=g.renderOrder,P.z=b,P.group=y),e++,P}function l(g,v,M,A,b,y){const P=d(g,v,M,A,b,y);M.transmission>0?n.push(P):M.transparent===!0?r.push(P):t.push(P)}function p(g,v,M,A,b,y){const P=d(g,v,M,A,b,y);M.transmission>0?n.unshift(P):M.transparent===!0?r.unshift(P):t.unshift(P)}function h(g,v){t.length>1&&t.sort(g||o0),n.length>1&&n.sort(v||vu),r.length>1&&r.sort(v||vu)}function m(){for(let g=e,v=a.length;g<v;g++){const M=a[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:p,finish:m,sort:h}}function a0(){let a=new WeakMap;function e(n,r){const o=a.get(n);let d;return o===void 0?(d=new xu,a.set(n,[d])):r>=o.length?(d=new xu,o.push(d)):d=o[r],d}function t(){a=new WeakMap}return{get:e,dispose:t}}function l0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new We};break;case"SpotLight":t={position:new H,direction:new H,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new H,halfWidth:new H,halfHeight:new H};break}return a[e.id]=t,t}}}function c0(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let u0=0;function d0(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function f0(a,e){const t=new l0,n=c0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)r.probe.push(new H);const o=new H,d=new Tt,l=new Tt;function p(m,g){let v=0,M=0,A=0;for(let le=0;le<9;le++)r.probe[le].set(0,0,0);let b=0,y=0,P=0,O=0,C=0,F=0,L=0,B=0,Z=0,E=0;m.sort(d0);const N=g===!0?Math.PI:1;for(let le=0,ue=m.length;le<ue;le++){const Q=m[le],j=Q.color,V=Q.intensity,ae=Q.distance,xe=Q.shadow&&Q.shadow.map?Q.shadow.map.texture:null;if(Q.isAmbientLight)v+=j.r*V*N,M+=j.g*V*N,A+=j.b*V*N;else if(Q.isLightProbe)for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(Q.sh.coefficients[ce],V);else if(Q.isDirectionalLight){const ce=t.get(Q);if(ce.color.copy(Q.color).multiplyScalar(Q.intensity*N),Q.castShadow){const de=Q.shadow,pe=n.get(Q);pe.shadowBias=de.bias,pe.shadowNormalBias=de.normalBias,pe.shadowRadius=de.radius,pe.shadowMapSize=de.mapSize,r.directionalShadow[b]=pe,r.directionalShadowMap[b]=xe,r.directionalShadowMatrix[b]=Q.shadow.matrix,F++}r.directional[b]=ce,b++}else if(Q.isSpotLight){const ce=t.get(Q);ce.position.setFromMatrixPosition(Q.matrixWorld),ce.color.copy(j).multiplyScalar(V*N),ce.distance=ae,ce.coneCos=Math.cos(Q.angle),ce.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),ce.decay=Q.decay,r.spot[P]=ce;const de=Q.shadow;if(Q.map&&(r.spotLightMap[Z]=Q.map,Z++,de.updateMatrices(Q),Q.castShadow&&E++),r.spotLightMatrix[P]=de.matrix,Q.castShadow){const pe=n.get(Q);pe.shadowBias=de.bias,pe.shadowNormalBias=de.normalBias,pe.shadowRadius=de.radius,pe.shadowMapSize=de.mapSize,r.spotShadow[P]=pe,r.spotShadowMap[P]=xe,B++}P++}else if(Q.isRectAreaLight){const ce=t.get(Q);ce.color.copy(j).multiplyScalar(V),ce.halfWidth.set(Q.width*.5,0,0),ce.halfHeight.set(0,Q.height*.5,0),r.rectArea[O]=ce,O++}else if(Q.isPointLight){const ce=t.get(Q);if(ce.color.copy(Q.color).multiplyScalar(Q.intensity*N),ce.distance=Q.distance,ce.decay=Q.decay,Q.castShadow){const de=Q.shadow,pe=n.get(Q);pe.shadowBias=de.bias,pe.shadowNormalBias=de.normalBias,pe.shadowRadius=de.radius,pe.shadowMapSize=de.mapSize,pe.shadowCameraNear=de.camera.near,pe.shadowCameraFar=de.camera.far,r.pointShadow[y]=pe,r.pointShadowMap[y]=xe,r.pointShadowMatrix[y]=Q.shadow.matrix,L++}r.point[y]=ce,y++}else if(Q.isHemisphereLight){const ce=t.get(Q);ce.skyColor.copy(Q.color).multiplyScalar(V*N),ce.groundColor.copy(Q.groundColor).multiplyScalar(V*N),r.hemi[C]=ce,C++}}O>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=v,r.ambient[1]=M,r.ambient[2]=A;const W=r.hash;(W.directionalLength!==b||W.pointLength!==y||W.spotLength!==P||W.rectAreaLength!==O||W.hemiLength!==C||W.numDirectionalShadows!==F||W.numPointShadows!==L||W.numSpotShadows!==B||W.numSpotMaps!==Z)&&(r.directional.length=b,r.spot.length=P,r.rectArea.length=O,r.point.length=y,r.hemi.length=C,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=B+Z-E,r.spotLightMap.length=Z,r.numSpotLightShadowsWithMaps=E,W.directionalLength=b,W.pointLength=y,W.spotLength=P,W.rectAreaLength=O,W.hemiLength=C,W.numDirectionalShadows=F,W.numPointShadows=L,W.numSpotShadows=B,W.numSpotMaps=Z,r.version=u0++)}function h(m,g){let v=0,M=0,A=0,b=0,y=0;const P=g.matrixWorldInverse;for(let O=0,C=m.length;O<C;O++){const F=m[O];if(F.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(P),v++}else if(F.isSpotLight){const L=r.spot[A];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(P),L.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(P),A++}else if(F.isRectAreaLight){const L=r.rectArea[b];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(P),l.identity(),d.copy(F.matrixWorld),d.premultiply(P),l.extractRotation(d),L.halfWidth.set(F.width*.5,0,0),L.halfHeight.set(0,F.height*.5,0),L.halfWidth.applyMatrix4(l),L.halfHeight.applyMatrix4(l),b++}else if(F.isPointLight){const L=r.point[M];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(P),M++}else if(F.isHemisphereLight){const L=r.hemi[y];L.direction.setFromMatrixPosition(F.matrixWorld),L.direction.transformDirection(P),y++}}}return{setup:p,setupView:h,state:r}}function _u(a,e){const t=new f0(a,e),n=[],r=[];function o(){n.length=0,r.length=0}function d(g){n.push(g)}function l(g){r.push(g)}function p(g){t.setup(n,g)}function h(g){t.setupView(n,g)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:p,setupLightsView:h,pushLight:d,pushShadow:l}}function h0(a,e){let t=new WeakMap;function n(o,d=0){const l=t.get(o);let p;return l===void 0?(p=new _u(a,e),t.set(o,[p])):d>=l.length?(p=new _u(a,e),l.push(p)):p=l[d],p}function r(){t=new WeakMap}return{get:n,dispose:r}}class yi extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class us extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m0=`uniform sampler2D shadow_pass;
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
}`;function g0(a,e,t){let n=new ll;const r=new Re,o=new Re,d=new xt,l=new yi({depthPacking:hs}),p=new us,h={},m=t.maxTextureSize,g={[_i]:gn,[gn]:_i,[gi]:gi},v=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:p0,fragmentShader:m0}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const A=new kn;A.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new mn(A,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl,this.render=function(F,L,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const Z=a.getRenderTarget(),E=a.getActiveCubeFace(),N=a.getActiveMipmapLevel(),W=a.state;W.setBlending(Ht),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);for(let le=0,ue=F.length;le<ue;le++){const Q=F[le],j=Q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const V=j.getFrameExtents();if(r.multiply(V),o.copy(j.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(o.x=Math.floor(m/V.x),r.x=o.x*V.x,j.mapSize.x=o.x),r.y>m&&(o.y=Math.floor(m/V.y),r.y=o.y*V.y,j.mapSize.y=o.y)),j.map===null){const xe=this.type!==Jr?{minFilter:Ft,magFilter:Ft}:{};j.map=new jt(r.x,r.y,xe),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}a.setRenderTarget(j.map),a.clear();const ae=j.getViewportCount();for(let xe=0;xe<ae;xe++){const ce=j.getViewport(xe);d.set(o.x*ce.x,o.y*ce.y,o.x*ce.z,o.y*ce.w),W.viewport(d),j.updateMatrices(Q,xe),n=j.getFrustum(),C(L,B,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===Jr&&P(j,B),j.needsUpdate=!1}y.needsUpdate=!1,a.setRenderTarget(Z,E,N)};function P(F,L){const B=e.update(b);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new jt(r.x,r.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,a.setRenderTarget(F.mapPass),a.clear(),a.renderBufferDirect(L,null,B,v,b,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,a.setRenderTarget(F.map),a.clear(),a.renderBufferDirect(L,null,B,M,b,null)}function O(F,L,B,Z,E,N){let W=null;const le=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(le!==void 0)W=le;else if(W=B.isPointLight===!0?p:l,a.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const ue=W.uuid,Q=L.uuid;let j=h[ue];j===void 0&&(j={},h[ue]=j);let V=j[Q];V===void 0&&(V=W.clone(),j[Q]=V),W=V}return W.visible=L.visible,W.wireframe=L.wireframe,N===Jr?W.side=L.shadowSide!==null?L.shadowSide:L.side:W.side=L.shadowSide!==null?L.shadowSide:g[L.side],W.alphaMap=L.alphaMap,W.alphaTest=L.alphaTest,W.map=L.map,W.clipShadows=L.clipShadows,W.clippingPlanes=L.clippingPlanes,W.clipIntersection=L.clipIntersection,W.displacementMap=L.displacementMap,W.displacementScale=L.displacementScale,W.displacementBias=L.displacementBias,W.wireframeLinewidth=L.wireframeLinewidth,W.linewidth=L.linewidth,B.isPointLight===!0&&W.isMeshDistanceMaterial===!0&&(W.referencePosition.setFromMatrixPosition(B.matrixWorld),W.nearDistance=Z,W.farDistance=E),W}function C(F,L,B,Z,E){if(F.visible===!1)return;if(F.layers.test(L.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&E===Jr)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const le=e.update(F),ue=F.material;if(Array.isArray(ue)){const Q=le.groups;for(let j=0,V=Q.length;j<V;j++){const ae=Q[j],xe=ue[ae.materialIndex];if(xe&&xe.visible){const ce=O(F,xe,Z,B.near,B.far,E);a.renderBufferDirect(B,null,le,ce,F,ae)}}}else if(ue.visible){const Q=O(F,ue,Z,B.near,B.far,E);a.renderBufferDirect(B,null,le,Q,F,null)}}const W=F.children;for(let le=0,ue=W.length;le<ue;le++)C(W[le],L,B,Z,E)}}function v0(a,e,t){const n=t.isWebGL2;function r(){let G=!1;const re=new xt;let ge=null;const Te=new xt(0,0,0,0);return{setMask:function(Ee){ge!==Ee&&!G&&(a.colorMask(Ee,Ee,Ee,Ee),ge=Ee)},setLocked:function(Ee){G=Ee},setClear:function(Ee,ft,yt,qt,Et){Et===!0&&(Ee*=qt,ft*=qt,yt*=qt),re.set(Ee,ft,yt,qt),Te.equals(re)===!1&&(a.clearColor(Ee,ft,yt,qt),Te.copy(re))},reset:function(){G=!1,ge=null,Te.set(-1,0,0,0)}}}function o(){let G=!1,re=null,ge=null,Te=null;return{setTest:function(Ee){Ee?De(2929):Le(2929)},setMask:function(Ee){re!==Ee&&!G&&(a.depthMask(Ee),re=Ee)},setFunc:function(Ee){if(ge!==Ee){switch(Ee){case jf:a.depthFunc(512);break;case qf:a.depthFunc(519);break;case Xf:a.depthFunc(513);break;case Ya:a.depthFunc(515);break;case Yf:a.depthFunc(514);break;case Zf:a.depthFunc(518);break;case Kf:a.depthFunc(516);break;case $f:a.depthFunc(517);break;default:a.depthFunc(515)}ge=Ee}},setLocked:function(Ee){G=Ee},setClear:function(Ee){Te!==Ee&&(a.clearDepth(Ee),Te=Ee)},reset:function(){G=!1,re=null,ge=null,Te=null}}}function d(){let G=!1,re=null,ge=null,Te=null,Ee=null,ft=null,yt=null,qt=null,Et=null;return{setTest:function(ct){G||(ct?De(2960):Le(2960))},setMask:function(ct){re!==ct&&!G&&(a.stencilMask(ct),re=ct)},setFunc:function(ct,Lt,xn){(ge!==ct||Te!==Lt||Ee!==xn)&&(a.stencilFunc(ct,Lt,xn),ge=ct,Te=Lt,Ee=xn)},setOp:function(ct,Lt,xn){(ft!==ct||yt!==Lt||qt!==xn)&&(a.stencilOp(ct,Lt,xn),ft=ct,yt=Lt,qt=xn)},setLocked:function(ct){G=ct},setClear:function(ct){Et!==ct&&(a.clearStencil(ct),Et=ct)},reset:function(){G=!1,re=null,ge=null,Te=null,Ee=null,ft=null,yt=null,qt=null,Et=null}}}const l=new r,p=new o,h=new d,m=new WeakMap,g=new WeakMap;let v={},M={},A=new WeakMap,b=[],y=null,P=!1,O=null,C=null,F=null,L=null,B=null,Z=null,E=null,N=!1,W=null,le=null,ue=null,Q=null,j=null;const V=a.getParameter(35661);let ae=!1,xe=0;const ce=a.getParameter(7938);ce.indexOf("WebGL")!==-1?(xe=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ae=xe>=1):ce.indexOf("OpenGL ES")!==-1&&(xe=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ae=xe>=2);let de=null,pe={};const Ie=a.getParameter(3088),ee=a.getParameter(2978),fe=new xt().fromArray(Ie),te=new xt().fromArray(ee);function $(G,re,ge){const Te=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(G,Ee),a.texParameteri(G,10241,9728),a.texParameteri(G,10240,9728);for(let ft=0;ft<ge;ft++)a.texImage2D(re+ft,0,6408,1,1,0,6408,5121,Te);return Ee}const Ce={};Ce[3553]=$(3553,3553,1),Ce[34067]=$(34067,34069,6),l.setClear(0,0,0,1),p.setClear(1),h.setClear(0),De(2929),p.setFunc(Ya),Pt(!1),At(cc),De(2884),Ct(Ht);function De(G){v[G]!==!0&&(a.enable(G),v[G]=!0)}function Le(G){v[G]!==!1&&(a.disable(G),v[G]=!1)}function Ae(G,re){return M[G]!==re?(a.bindFramebuffer(G,re),M[G]=re,n&&(G===36009&&(M[36160]=re),G===36160&&(M[36009]=re)),!0):!1}function Be(G,re){let ge=b,Te=!1;if(G)if(ge=A.get(re),ge===void 0&&(ge=[],A.set(re,ge)),G.isWebGLMultipleRenderTargets){const Ee=G.texture;if(ge.length!==Ee.length||ge[0]!==36064){for(let ft=0,yt=Ee.length;ft<yt;ft++)ge[ft]=36064+ft;ge.length=Ee.length,Te=!0}}else ge[0]!==36064&&(ge[0]=36064,Te=!0);else ge[0]!==1029&&(ge[0]=1029,Te=!0);Te&&(t.isWebGL2?a.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function He(G){return y!==G?(a.useProgram(G),y=G,!0):!1}const Ze={[mi]:32774,[Ff]:32778,[zf]:32779};if(n)Ze[fc]=32775,Ze[hc]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(Ze[fc]=G.MIN_EXT,Ze[hc]=G.MAX_EXT)}const rt={[Xa]:0,[kf]:1,[Bf]:768,[Lu]:770,[Wf]:776,[Uu]:774,[Ou]:772,[Gf]:769,[Iu]:771,[Hf]:775,[Vf]:773};function Ct(G,re,ge,Te,Ee,ft,yt,qt){if(G===Ht){P===!0&&(Le(3042),P=!1);return}if(P===!1&&(De(3042),P=!0),G!==yo){if(G!==O||qt!==N){if((C!==mi||B!==mi)&&(a.blendEquation(32774),C=mi,B=mi),qt)switch(G){case mr:a.blendFuncSeparate(1,771,1,771);break;case qa:a.blendFunc(1,1);break;case uc:a.blendFuncSeparate(0,769,0,1);break;case dc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case mr:a.blendFuncSeparate(770,771,1,771);break;case qa:a.blendFunc(770,1);break;case uc:a.blendFuncSeparate(0,769,0,1);break;case dc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}F=null,L=null,Z=null,E=null,O=G,N=qt}return}Ee=Ee||re,ft=ft||ge,yt=yt||Te,(re!==C||Ee!==B)&&(a.blendEquationSeparate(Ze[re],Ze[Ee]),C=re,B=Ee),(ge!==F||Te!==L||ft!==Z||yt!==E)&&(a.blendFuncSeparate(rt[ge],rt[Te],rt[ft],rt[yt]),F=ge,L=Te,Z=ft,E=yt),O=G,N=!1}function qe(G,re){G.side===gi?Le(2884):De(2884);let ge=G.side===gn;re&&(ge=!ge),Pt(ge),G.blending===mr&&G.transparent===!1?Ct(Ht):Ct(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),p.setFunc(G.depthFunc),p.setTest(G.depthTest),p.setMask(G.depthWrite),l.setMask(G.colorWrite);const Te=G.stencilWrite;h.setTest(Te),Te&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),dt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?De(32926):Le(32926)}function Pt(G){W!==G&&(G?a.frontFace(2304):a.frontFace(2305),W=G)}function At(G){G!==Uf?(De(2884),G!==le&&(G===cc?a.cullFace(1029):G===Nf?a.cullFace(1028):a.cullFace(1032))):Le(2884),le=G}function at(G){G!==ue&&(ae&&a.lineWidth(G),ue=G)}function dt(G,re,ge){G?(De(32823),(Q!==re||j!==ge)&&(a.polygonOffset(re,ge),Q=re,j=ge)):Le(32823)}function en(G){G?De(3089):Le(3089)}function Ut(G){G===void 0&&(G=33984+V-1),de!==G&&(a.activeTexture(G),de=G)}function I(G,re,ge){ge===void 0&&(de===null?ge=33984+V-1:ge=de);let Te=pe[ge];Te===void 0&&(Te={type:void 0,texture:void 0},pe[ge]=Te),(Te.type!==G||Te.texture!==re)&&(de!==ge&&(a.activeTexture(ge),de=ge),a.bindTexture(G,re||Ce[G]),Te.type=G,Te.texture=re)}function T(){const G=pe[de];G!==void 0&&G.type!==void 0&&(a.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ie(){try{a.compressedTexImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{a.compressedTexImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{a.texSubImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{a.texSubImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function z(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function X(){try{a.texStorage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{a.texStorage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{a.texImage2D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{a.texImage3D.apply(a,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){fe.equals(G)===!1&&(a.scissor(G.x,G.y,G.z,G.w),fe.copy(G))}function Fe(G){te.equals(G)===!1&&(a.viewport(G.x,G.y,G.z,G.w),te.copy(G))}function Ke(G,re){let ge=g.get(re);ge===void 0&&(ge=new WeakMap,g.set(re,ge));let Te=ge.get(G);Te===void 0&&(Te=a.getUniformBlockIndex(re,G.name),ge.set(G,Te))}function tt(G,re){const Te=g.get(re).get(G);m.get(re)!==Te&&(a.uniformBlockBinding(re,Te,G.__bindingPointIndex),m.set(re,Te))}function lt(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},de=null,pe={},M={},A=new WeakMap,b=[],y=null,P=!1,O=null,C=null,F=null,L=null,B=null,Z=null,E=null,N=!1,W=null,le=null,ue=null,Q=null,j=null,fe.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),l.reset(),p.reset(),h.reset()}return{buffers:{color:l,depth:p,stencil:h},enable:De,disable:Le,bindFramebuffer:Ae,drawBuffers:Be,useProgram:He,setBlending:Ct,setMaterial:qe,setFlipSided:Pt,setCullFace:At,setLineWidth:at,setPolygonOffset:dt,setScissorTest:en,activeTexture:Ut,bindTexture:I,unbindTexture:T,compressedTexImage2D:ie,compressedTexImage3D:ve,texImage2D:ye,texImage3D:Oe,updateUBOMapping:Ke,uniformBlockBinding:tt,texStorage2D:X,texStorage3D:we,texSubImage2D:_e,texSubImage3D:Se,compressedTexSubImage2D:ze,compressedTexSubImage3D:z,scissor:Ne,viewport:Fe,reset:lt}}function x0(a,e,t,n,r,o,d){const l=r.isWebGL2,p=r.maxTextures,h=r.maxCubemapSize,m=r.maxTextureSize,g=r.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,M=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new WeakMap;let b;const y=new WeakMap;let P=!1;try{P=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(I,T){return P?new OffscreenCanvas(I,T):cs("canvas")}function C(I,T,ie,ve){let _e=1;if((I.width>ve||I.height>ve)&&(_e=ve/Math.max(I.width,I.height)),_e<1||T===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const Se=T?wh:Math.floor,ze=Se(_e*I.width),z=Se(_e*I.height);b===void 0&&(b=O(ze,z));const X=ie?O(ze,z):b;return X.width=ze,X.height=z,X.getContext("2d").drawImage(I,0,0,ze,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+ze+"x"+z+")."),X}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function F(I){return Bc(I.width)&&Bc(I.height)}function L(I){return l?!1:I.wrapS!==Nn||I.wrapT!==Nn||I.minFilter!==Ft&&I.minFilter!==Cn}function B(I,T){return I.generateMipmaps&&T&&I.minFilter!==Ft&&I.minFilter!==Cn}function Z(I){a.generateMipmap(I)}function E(I,T,ie,ve,_e=!1){if(l===!1)return T;if(I!==null){if(a[I]!==void 0)return a[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Se=T;return T===6403&&(ie===5126&&(Se=33326),ie===5131&&(Se=33325),ie===5121&&(Se=33321)),T===33319&&(ie===5126&&(Se=33328),ie===5131&&(Se=33327),ie===5121&&(Se=33323)),T===6408&&(ie===5126&&(Se=34836),ie===5131&&(Se=34842),ie===5121&&(Se=ve===mt&&_e===!1?35907:32856),ie===32819&&(Se=32854),ie===32820&&(Se=32855)),(Se===33325||Se===33326||Se===33327||Se===33328||Se===34842||Se===34836)&&e.get("EXT_color_buffer_float"),Se}function N(I,T,ie){return B(I,ie)===!0||I.isFramebufferTexture&&I.minFilter!==Ft&&I.minFilter!==Cn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function W(I){return I===Ft||I===pc||I===oa?9728:9729}function le(I){const T=I.target;T.removeEventListener("dispose",le),Q(T),T.isVideoTexture&&A.delete(T)}function ue(I){const T=I.target;T.removeEventListener("dispose",ue),V(T)}function Q(I){const T=n.get(I);if(T.__webglInit===void 0)return;const ie=I.source,ve=y.get(ie);if(ve){const _e=ve[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&j(I),Object.keys(ve).length===0&&y.delete(ie)}n.remove(I)}function j(I){const T=n.get(I);a.deleteTexture(T.__webglTexture);const ie=I.source,ve=y.get(ie);delete ve[T.__cacheKey],d.memory.textures--}function V(I){const T=I.texture,ie=n.get(I),ve=n.get(T);if(ve.__webglTexture!==void 0&&(a.deleteTexture(ve.__webglTexture),d.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)a.deleteFramebuffer(ie.__webglFramebuffer[_e]),ie.__webglDepthbuffer&&a.deleteRenderbuffer(ie.__webglDepthbuffer[_e]);else{if(a.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&a.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&a.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let _e=0;_e<ie.__webglColorRenderbuffer.length;_e++)ie.__webglColorRenderbuffer[_e]&&a.deleteRenderbuffer(ie.__webglColorRenderbuffer[_e]);ie.__webglDepthRenderbuffer&&a.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let _e=0,Se=T.length;_e<Se;_e++){const ze=n.get(T[_e]);ze.__webglTexture&&(a.deleteTexture(ze.__webglTexture),d.memory.textures--),n.remove(T[_e])}n.remove(T),n.remove(I)}let ae=0;function xe(){ae=0}function ce(){const I=ae;return I>=p&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+p),ae+=1,I}function de(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.encoding),T.join()}function pe(I,T){const ie=n.get(I);if(I.isVideoTexture&&en(I),I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){const ve=I.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(ie,I,T);return}}t.bindTexture(3553,ie.__webglTexture,33984+T)}function Ie(I,T){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){Le(ie,I,T);return}t.bindTexture(35866,ie.__webglTexture,33984+T)}function ee(I,T){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){Le(ie,I,T);return}t.bindTexture(32879,ie.__webglTexture,33984+T)}function fe(I,T){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){Ae(ie,I,T);return}t.bindTexture(34067,ie.__webglTexture,33984+T)}const te={[Gi]:10497,[Nn]:33071,[Ka]:33648},$={[Ft]:9728,[pc]:9984,[oa]:9986,[Cn]:9729,[rh]:9985,[os]:9987};function Ce(I,T,ie){if(ie?(a.texParameteri(I,10242,te[T.wrapS]),a.texParameteri(I,10243,te[T.wrapT]),(I===32879||I===35866)&&a.texParameteri(I,32882,te[T.wrapR]),a.texParameteri(I,10240,$[T.magFilter]),a.texParameteri(I,10241,$[T.minFilter])):(a.texParameteri(I,10242,33071),a.texParameteri(I,10243,33071),(I===32879||I===35866)&&a.texParameteri(I,32882,33071),(T.wrapS!==Nn||T.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(I,10240,W(T.magFilter)),a.texParameteri(I,10241,W(T.minFilter)),T.minFilter!==Ft&&T.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ft||T.minFilter!==oa&&T.minFilter!==os||T.type===zi&&e.has("OES_texture_float_linear")===!1||l===!1&&T.type===as&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(a.texParameterf(I,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function De(I,T){let ie=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",le));const ve=T.source;let _e=y.get(ve);_e===void 0&&(_e={},y.set(ve,_e));const Se=de(T);if(Se!==I.__cacheKey){_e[Se]===void 0&&(_e[Se]={texture:a.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),_e[Se].usedTimes++;const ze=_e[I.__cacheKey];ze!==void 0&&(_e[I.__cacheKey].usedTimes--,ze.usedTimes===0&&j(T)),I.__cacheKey=Se,I.__webglTexture=_e[Se].texture}return ie}function Le(I,T,ie){let ve=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=35866),T.isData3DTexture&&(ve=32879);const _e=De(I,T),Se=T.source;t.bindTexture(ve,I.__webglTexture,33984+ie);const ze=n.get(Se);if(Se.version!==ze.__version||_e===!0){t.activeTexture(33984+ie),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const z=L(T)&&F(T.image)===!1;let X=C(T.image,z,!1,m);X=Ut(T,X);const we=F(X)||l,ye=o.convert(T.format,T.encoding);let Oe=o.convert(T.type),Ne=E(T.internalFormat,ye,Oe,T.encoding,T.isVideoTexture);Ce(ve,T,we);let Fe;const Ke=T.mipmaps,tt=l&&T.isVideoTexture!==!0,lt=ze.__version===void 0||_e===!0,G=N(T,X,we);if(T.isDepthTexture)Ne=6402,l?T.type===zi?Ne=36012:T.type===Fi?Ne=33190:T.type===gr?Ne=35056:Ne=33189:T.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ki&&Ne===6402&&T.type!==ol&&T.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Fi,Oe=o.convert(T.type)),T.format===br&&Ne===6402&&(Ne=34041,T.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=gr,Oe=o.convert(T.type))),lt&&(tt?t.texStorage2D(3553,1,Ne,X.width,X.height):t.texImage2D(3553,0,Ne,X.width,X.height,0,ye,Oe,null));else if(T.isDataTexture)if(Ke.length>0&&we){tt&&lt&&t.texStorage2D(3553,G,Ne,Ke[0].width,Ke[0].height);for(let re=0,ge=Ke.length;re<ge;re++)Fe=Ke[re],tt?t.texSubImage2D(3553,re,0,0,Fe.width,Fe.height,ye,Oe,Fe.data):t.texImage2D(3553,re,Ne,Fe.width,Fe.height,0,ye,Oe,Fe.data);T.generateMipmaps=!1}else tt?(lt&&t.texStorage2D(3553,G,Ne,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,ye,Oe,X.data)):t.texImage2D(3553,0,Ne,X.width,X.height,0,ye,Oe,X.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){tt&&lt&&t.texStorage3D(35866,G,Ne,Ke[0].width,Ke[0].height,X.depth);for(let re=0,ge=Ke.length;re<ge;re++)Fe=Ke[re],T.format!==Fn?ye!==null?tt?t.compressedTexSubImage3D(35866,re,0,0,0,Fe.width,Fe.height,X.depth,ye,Fe.data,0,0):t.compressedTexImage3D(35866,re,Ne,Fe.width,Fe.height,X.depth,0,Fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(35866,re,0,0,0,Fe.width,Fe.height,X.depth,ye,Oe,Fe.data):t.texImage3D(35866,re,Ne,Fe.width,Fe.height,X.depth,0,ye,Oe,Fe.data)}else{tt&&lt&&t.texStorage2D(3553,G,Ne,Ke[0].width,Ke[0].height);for(let re=0,ge=Ke.length;re<ge;re++)Fe=Ke[re],T.format!==Fn?ye!==null?tt?t.compressedTexSubImage2D(3553,re,0,0,Fe.width,Fe.height,ye,Fe.data):t.compressedTexImage2D(3553,re,Ne,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(3553,re,0,0,Fe.width,Fe.height,ye,Oe,Fe.data):t.texImage2D(3553,re,Ne,Fe.width,Fe.height,0,ye,Oe,Fe.data)}else if(T.isDataArrayTexture)tt?(lt&&t.texStorage3D(35866,G,Ne,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,ye,Oe,X.data)):t.texImage3D(35866,0,Ne,X.width,X.height,X.depth,0,ye,Oe,X.data);else if(T.isData3DTexture)tt?(lt&&t.texStorage3D(32879,G,Ne,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,ye,Oe,X.data)):t.texImage3D(32879,0,Ne,X.width,X.height,X.depth,0,ye,Oe,X.data);else if(T.isFramebufferTexture){if(lt)if(tt)t.texStorage2D(3553,G,Ne,X.width,X.height);else{let re=X.width,ge=X.height;for(let Te=0;Te<G;Te++)t.texImage2D(3553,Te,Ne,re,ge,0,ye,Oe,null),re>>=1,ge>>=1}}else if(Ke.length>0&&we){tt&&lt&&t.texStorage2D(3553,G,Ne,Ke[0].width,Ke[0].height);for(let re=0,ge=Ke.length;re<ge;re++)Fe=Ke[re],tt?t.texSubImage2D(3553,re,0,0,ye,Oe,Fe):t.texImage2D(3553,re,Ne,ye,Oe,Fe);T.generateMipmaps=!1}else tt?(lt&&t.texStorage2D(3553,G,Ne,X.width,X.height),t.texSubImage2D(3553,0,0,0,ye,Oe,X)):t.texImage2D(3553,0,Ne,ye,Oe,X);B(T,we)&&Z(ve),ze.__version=Se.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Ae(I,T,ie){if(T.image.length!==6)return;const ve=De(I,T),_e=T.source;t.bindTexture(34067,I.__webglTexture,33984+ie);const Se=n.get(_e);if(_e.version!==Se.__version||ve===!0){t.activeTexture(33984+ie),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const ze=T.isCompressedTexture||T.image[0].isCompressedTexture,z=T.image[0]&&T.image[0].isDataTexture,X=[];for(let re=0;re<6;re++)!ze&&!z?X[re]=C(T.image[re],!1,!0,h):X[re]=z?T.image[re].image:T.image[re],X[re]=Ut(T,X[re]);const we=X[0],ye=F(we)||l,Oe=o.convert(T.format,T.encoding),Ne=o.convert(T.type),Fe=E(T.internalFormat,Oe,Ne,T.encoding),Ke=l&&T.isVideoTexture!==!0,tt=Se.__version===void 0||ve===!0;let lt=N(T,we,ye);Ce(34067,T,ye);let G;if(ze){Ke&&tt&&t.texStorage2D(34067,lt,Fe,we.width,we.height);for(let re=0;re<6;re++){G=X[re].mipmaps;for(let ge=0;ge<G.length;ge++){const Te=G[ge];T.format!==Fn?Oe!==null?Ke?t.compressedTexSubImage2D(34069+re,ge,0,0,Te.width,Te.height,Oe,Te.data):t.compressedTexImage2D(34069+re,ge,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(34069+re,ge,0,0,Te.width,Te.height,Oe,Ne,Te.data):t.texImage2D(34069+re,ge,Fe,Te.width,Te.height,0,Oe,Ne,Te.data)}}}else{G=T.mipmaps,Ke&&tt&&(G.length>0&&lt++,t.texStorage2D(34067,lt,Fe,X[0].width,X[0].height));for(let re=0;re<6;re++)if(z){Ke?t.texSubImage2D(34069+re,0,0,0,X[re].width,X[re].height,Oe,Ne,X[re].data):t.texImage2D(34069+re,0,Fe,X[re].width,X[re].height,0,Oe,Ne,X[re].data);for(let ge=0;ge<G.length;ge++){const Ee=G[ge].image[re].image;Ke?t.texSubImage2D(34069+re,ge+1,0,0,Ee.width,Ee.height,Oe,Ne,Ee.data):t.texImage2D(34069+re,ge+1,Fe,Ee.width,Ee.height,0,Oe,Ne,Ee.data)}}else{Ke?t.texSubImage2D(34069+re,0,0,0,Oe,Ne,X[re]):t.texImage2D(34069+re,0,Fe,Oe,Ne,X[re]);for(let ge=0;ge<G.length;ge++){const Te=G[ge];Ke?t.texSubImage2D(34069+re,ge+1,0,0,Oe,Ne,Te.image[re]):t.texImage2D(34069+re,ge+1,Fe,Oe,Ne,Te.image[re])}}}B(T,ye)&&Z(34067),Se.__version=_e.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Be(I,T,ie,ve,_e){const Se=o.convert(ie.format,ie.encoding),ze=o.convert(ie.type),z=E(ie.internalFormat,Se,ze,ie.encoding);n.get(T).__hasExternalTextures||(_e===32879||_e===35866?t.texImage3D(_e,0,z,T.width,T.height,T.depth,0,Se,ze,null):t.texImage2D(_e,0,z,T.width,T.height,0,Se,ze,null)),t.bindFramebuffer(36160,I),dt(T)?v.framebufferTexture2DMultisampleEXT(36160,ve,_e,n.get(ie).__webglTexture,0,at(T)):(_e===3553||_e>=34069&&_e<=34074)&&a.framebufferTexture2D(36160,ve,_e,n.get(ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(I,T,ie){if(a.bindRenderbuffer(36161,I),T.depthBuffer&&!T.stencilBuffer){let ve=33189;if(ie||dt(T)){const _e=T.depthTexture;_e&&_e.isDepthTexture&&(_e.type===zi?ve=36012:_e.type===Fi&&(ve=33190));const Se=at(T);dt(T)?v.renderbufferStorageMultisampleEXT(36161,Se,ve,T.width,T.height):a.renderbufferStorageMultisample(36161,Se,ve,T.width,T.height)}else a.renderbufferStorage(36161,ve,T.width,T.height);a.framebufferRenderbuffer(36160,36096,36161,I)}else if(T.depthBuffer&&T.stencilBuffer){const ve=at(T);ie&&dt(T)===!1?a.renderbufferStorageMultisample(36161,ve,35056,T.width,T.height):dt(T)?v.renderbufferStorageMultisampleEXT(36161,ve,35056,T.width,T.height):a.renderbufferStorage(36161,34041,T.width,T.height),a.framebufferRenderbuffer(36160,33306,36161,I)}else{const ve=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let _e=0;_e<ve.length;_e++){const Se=ve[_e],ze=o.convert(Se.format,Se.encoding),z=o.convert(Se.type),X=E(Se.internalFormat,ze,z,Se.encoding),we=at(T);ie&&dt(T)===!1?a.renderbufferStorageMultisample(36161,we,X,T.width,T.height):dt(T)?v.renderbufferStorageMultisampleEXT(36161,we,X,T.width,T.height):a.renderbufferStorage(36161,X,T.width,T.height)}}a.bindRenderbuffer(36161,null)}function Ze(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe(T.depthTexture,0);const ve=n.get(T.depthTexture).__webglTexture,_e=at(T);if(T.depthTexture.format===ki)dt(T)?v.framebufferTexture2DMultisampleEXT(36160,36096,3553,ve,0,_e):a.framebufferTexture2D(36160,36096,3553,ve,0);else if(T.depthTexture.format===br)dt(T)?v.framebufferTexture2DMultisampleEXT(36160,33306,3553,ve,0,_e):a.framebufferTexture2D(36160,33306,3553,ve,0);else throw new Error("Unknown depthTexture format")}function rt(I){const T=n.get(I),ie=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Ze(T.__webglFramebuffer,I)}else if(ie){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(36160,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]=a.createRenderbuffer(),He(T.__webglDepthbuffer[ve],I,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=a.createRenderbuffer(),He(T.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function Ct(I,T,ie){const ve=n.get(I);T!==void 0&&Be(ve.__webglFramebuffer,I,I.texture,36064,3553),ie!==void 0&&rt(I)}function qe(I){const T=I.texture,ie=n.get(I),ve=n.get(T);I.addEventListener("dispose",ue),I.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture()),ve.__version=T.version,d.memory.textures++);const _e=I.isWebGLCubeRenderTarget===!0,Se=I.isWebGLMultipleRenderTargets===!0,ze=F(I)||l;if(_e){ie.__webglFramebuffer=[];for(let z=0;z<6;z++)ie.__webglFramebuffer[z]=a.createFramebuffer()}else{if(ie.__webglFramebuffer=a.createFramebuffer(),Se)if(r.drawBuffers){const z=I.texture;for(let X=0,we=z.length;X<we;X++){const ye=n.get(z[X]);ye.__webglTexture===void 0&&(ye.__webglTexture=a.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&I.samples>0&&dt(I)===!1){const z=Se?T:[T];ie.__webglMultisampledFramebuffer=a.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer);for(let X=0;X<z.length;X++){const we=z[X];ie.__webglColorRenderbuffer[X]=a.createRenderbuffer(),a.bindRenderbuffer(36161,ie.__webglColorRenderbuffer[X]);const ye=o.convert(we.format,we.encoding),Oe=o.convert(we.type),Ne=E(we.internalFormat,ye,Oe,we.encoding,I.isXRRenderTarget===!0),Fe=at(I);a.renderbufferStorageMultisample(36161,Fe,Ne,I.width,I.height),a.framebufferRenderbuffer(36160,36064+X,36161,ie.__webglColorRenderbuffer[X])}a.bindRenderbuffer(36161,null),I.depthBuffer&&(ie.__webglDepthRenderbuffer=a.createRenderbuffer(),He(ie.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}}if(_e){t.bindTexture(34067,ve.__webglTexture),Ce(34067,T,ze);for(let z=0;z<6;z++)Be(ie.__webglFramebuffer[z],I,T,36064,34069+z);B(T,ze)&&Z(34067),t.unbindTexture()}else if(Se){const z=I.texture;for(let X=0,we=z.length;X<we;X++){const ye=z[X],Oe=n.get(ye);t.bindTexture(3553,Oe.__webglTexture),Ce(3553,ye,ze),Be(ie.__webglFramebuffer,I,ye,36064+X,3553),B(ye,ze)&&Z(3553)}t.unbindTexture()}else{let z=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(l?z=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,ve.__webglTexture),Ce(z,T,ze),Be(ie.__webglFramebuffer,I,T,36064,z),B(T,ze)&&Z(z),t.unbindTexture()}I.depthBuffer&&rt(I)}function Pt(I){const T=F(I)||l,ie=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ve=0,_e=ie.length;ve<_e;ve++){const Se=ie[ve];if(B(Se,T)){const ze=I.isWebGLCubeRenderTarget?34067:3553,z=n.get(Se).__webglTexture;t.bindTexture(ze,z),Z(ze),t.unbindTexture()}}}function At(I){if(l&&I.samples>0&&dt(I)===!1){const T=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],ie=I.width,ve=I.height;let _e=16384;const Se=[],ze=I.stencilBuffer?33306:36096,z=n.get(I),X=I.isWebGLMultipleRenderTargets===!0;if(X)for(let we=0;we<T.length;we++)t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,z.__webglFramebuffer),a.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,z.__webglFramebuffer);for(let we=0;we<T.length;we++){Se.push(36064+we),I.depthBuffer&&Se.push(ze);const ye=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(ye===!1&&(I.depthBuffer&&(_e|=256),I.stencilBuffer&&(_e|=1024)),X&&a.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[we]),ye===!0&&(a.invalidateFramebuffer(36008,[ze]),a.invalidateFramebuffer(36009,[ze])),X){const Oe=n.get(T[we]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Oe,0)}a.blitFramebuffer(0,0,ie,ve,0,0,ie,ve,_e,9728),M&&a.invalidateFramebuffer(36008,Se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let we=0;we<T.length;we++){t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+we,36161,z.__webglColorRenderbuffer[we]);const ye=n.get(T[we]).__webglTexture;t.bindFramebuffer(36160,z.__webglFramebuffer),a.framebufferTexture2D(36009,36064+we,3553,ye,0)}t.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function at(I){return Math.min(g,I.samples)}function dt(I){const T=n.get(I);return l&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function en(I){const T=d.render.frame;A.get(I)!==T&&(A.set(I,T),I.update())}function Ut(I,T){const ie=I.encoding,ve=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===$a||ie!==Hi&&(ie===mt?l===!1?e.has("EXT_sRGB")===!0&&ve===Fn?(I.format=$a,I.minFilter=Cn,I.generateMipmaps=!1):T=Bu.sRGBToLinear(T):(ve!==Fn||_e!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ie)),T}this.allocateTextureUnit=ce,this.resetTextureUnits=xe,this.setTexture2D=pe,this.setTexture2DArray=Ie,this.setTexture3D=ee,this.setTextureCube=fe,this.rebindTextures=Ct,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=dt}function _0(a,e,t){const n=t.isWebGL2;function r(o,d=null){let l;if(o===Vi)return 5121;if(o===lh)return 32819;if(o===ch)return 32820;if(o===sh)return 5120;if(o===oh)return 5122;if(o===ol)return 5123;if(o===ah)return 5124;if(o===Fi)return 5125;if(o===zi)return 5126;if(o===as)return n?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(o===uh)return 6406;if(o===Fn)return 6408;if(o===dh)return 6409;if(o===fh)return 6410;if(o===ki)return 6402;if(o===br)return 34041;if(o===$a)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(o===hh)return 6403;if(o===ph)return 36244;if(o===mh)return 33319;if(o===gh)return 33320;if(o===vh)return 36249;if(o===aa||o===la||o===ca||o===ua)if(d===mt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===aa)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===la)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ca)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===ua)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===aa)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===la)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ca)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===ua)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===mc||o===gc||o===vc||o===xc)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===mc)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===gc)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===vc)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===xc)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===xh)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===_c||o===yc)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===_c)return d===mt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===yc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===bc||o===Mc||o===Sc||o===wc||o===Ec||o===Tc||o===Cc||o===Pc||o===Ac||o===Dc||o===Rc||o===Lc||o===Ic||o===Oc)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===bc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Mc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Sc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===wc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Ec)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Tc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Cc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Pc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Ac)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Dc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Rc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Lc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Ic)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Oc)return d===mt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===da)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===da)return d===mt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===_h||o===Uc||o===Nc||o===Fc)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===da)return l.COMPRESSED_RED_RGTC1_EXT;if(o===Uc)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Nc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Fc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===gr?n?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):a[o]!==void 0?a[o]:null}return{convert:r}}class y0 extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ts extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b0={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,d=null;const l=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,n),P=this._getHandJoint(h,b);y!==null&&(P.matrix.fromArray(y.transform.matrix),P.matrix.decompose(P.position,P.rotation,P.scale),P.jointRadius=y.radius),P.visible=y!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),M=.02,A=.005;h.inputState.pinching&&v>M+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=M-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return l!==null&&(l.visible=r!==null),p!==null&&(p.visible=o!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ts;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class td extends vn{constructor(e,t,n,r,o,d,l,p,h,m){if(m=m!==void 0?m:ki,m!==ki&&m!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===ki&&(n=Fi),n===void 0&&m===br&&(n=gr),super(null,r,o,d,l,p,m,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Ft,this.minFilter=p!==void 0?p:Ft,this.flipY=!1,this.generateMipmaps=!1}}class M0 extends ji{constructor(e,t){super();const n=this;let r=null,o=1,d=null,l="local-floor",p=1,h=null,m=null,g=null,v=null,M=null,A=null;const b=t.getContextAttributes();let y=null,P=null;const O=[],C=[],F=new Set,L=new Map,B=new hn;B.layers.enable(1),B.viewport=new xt;const Z=new hn;Z.layers.enable(2),Z.viewport=new xt;const E=[B,Z],N=new y0;N.layers.enable(1),N.layers.enable(2);let W=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=O[ee];return fe===void 0&&(fe=new Fa,O[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=O[ee];return fe===void 0&&(fe=new Fa,O[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=O[ee];return fe===void 0&&(fe=new Fa,O[ee]=fe),fe.getHandSpace()};function ue(ee){const fe=C.indexOf(ee.inputSource);if(fe===-1)return;const te=O[fe];te!==void 0&&te.dispatchEvent({type:ee.type,data:ee.inputSource})}function Q(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",j);for(let ee=0;ee<O.length;ee++){const fe=C[ee];fe!==null&&(C[ee]=null,O[ee].disconnect(fe))}W=null,le=null,e.setRenderTarget(y),M=null,v=null,g=null,r=null,P=null,Ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){l=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return g},this.getFrame=function(){return A},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?b.antialias:!0,alpha:b.alpha,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:M}),P=new jt(M.framebufferWidth,M.framebufferHeight,{format:Fn,type:Vi,encoding:e.outputEncoding,stencilBuffer:b.stencil})}else{let fe=null,te=null,$=null;b.depth&&($=b.stencil?35056:33190,fe=b.stencil?br:ki,te=b.stencil?gr:Fi);const Ce={colorFormat:32856,depthFormat:$,scaleFactor:o};g=new XRWebGLBinding(r,t),v=g.createProjectionLayer(Ce),r.updateRenderState({layers:[v]}),P=new jt(v.textureWidth,v.textureHeight,{format:Fn,type:Vi,depthTexture:new td(v.textureWidth,v.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,encoding:e.outputEncoding,samples:b.antialias?4:0});const De=e.properties.get(P);De.__ignoreDepthValues=v.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(p),h=null,d=await r.requestReferenceSpace(l),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function j(ee){for(let fe=0;fe<ee.removed.length;fe++){const te=ee.removed[fe],$=C.indexOf(te);$>=0&&(C[$]=null,O[$].disconnect(te))}for(let fe=0;fe<ee.added.length;fe++){const te=ee.added[fe];let $=C.indexOf(te);if($===-1){for(let De=0;De<O.length;De++)if(De>=C.length){C.push(te),$=De;break}else if(C[De]===null){C[De]=te,$=De;break}if($===-1)break}const Ce=O[$];Ce&&Ce.connect(te)}}const V=new H,ae=new H;function xe(ee,fe,te){V.setFromMatrixPosition(fe.matrixWorld),ae.setFromMatrixPosition(te.matrixWorld);const $=V.distanceTo(ae),Ce=fe.projectionMatrix.elements,De=te.projectionMatrix.elements,Le=Ce[14]/(Ce[10]-1),Ae=Ce[14]/(Ce[10]+1),Be=(Ce[9]+1)/Ce[5],He=(Ce[9]-1)/Ce[5],Ze=(Ce[8]-1)/Ce[0],rt=(De[8]+1)/De[0],Ct=Le*Ze,qe=Le*rt,Pt=$/(-Ze+rt),At=Pt*-Ze;fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(At),ee.translateZ(Pt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const at=Le+Pt,dt=Ae+Pt,en=Ct-At,Ut=qe+($-At),I=Be*Ae/dt*at,T=He*Ae/dt*at;ee.projectionMatrix.makePerspective(en,Ut,I,T,at,dt)}function ce(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;N.near=Z.near=B.near=ee.near,N.far=Z.far=B.far=ee.far,(W!==N.near||le!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,le=N.far);const fe=ee.parent,te=N.cameras;ce(N,fe);for(let Ce=0;Ce<te.length;Ce++)ce(te[Ce],fe);N.matrixWorld.decompose(N.position,N.quaternion,N.scale),ee.matrix.copy(N.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale);const $=ee.children;for(let Ce=0,De=$.length;Ce<De;Ce++)$[Ce].updateMatrixWorld(!0);te.length===2?xe(N,B,Z):N.projectionMatrix.copy(B.projectionMatrix)},this.getCamera=function(){return N},this.getFoveation=function(){if(!(v===null&&M===null))return p},this.setFoveation=function(ee){p=ee,v!==null&&(v.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.getPlanes=function(){return F};let de=null;function pe(ee,fe){if(m=fe.getViewerPose(h||d),A=fe,m!==null){const te=m.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let $=!1;te.length!==N.cameras.length&&(N.cameras.length=0,$=!0);for(let Ce=0;Ce<te.length;Ce++){const De=te[Ce];let Le=null;if(M!==null)Le=M.getViewport(De);else{const Be=g.getViewSubImage(v,De);Le=Be.viewport,Ce===0&&(e.setRenderTargetTextures(P,Be.colorTexture,v.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(P))}let Ae=E[Ce];Ae===void 0&&(Ae=new hn,Ae.layers.enable(Ce),Ae.viewport=new xt,E[Ce]=Ae),Ae.matrix.fromArray(De.transform.matrix),Ae.projectionMatrix.fromArray(De.projectionMatrix),Ae.viewport.set(Le.x,Le.y,Le.width,Le.height),Ce===0&&N.matrix.copy(Ae.matrix),$===!0&&N.cameras.push(Ae)}}for(let te=0;te<O.length;te++){const $=C[te],Ce=O[te];$!==null&&Ce!==void 0&&Ce.update($,fe,h||d)}if(de&&de(ee,fe),fe.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:fe.detectedPlanes});let te=null;for(const $ of F)fe.detectedPlanes.has($)||(te===null&&(te=[]),te.push($));if(te!==null)for(const $ of te)F.delete($),L.delete($),n.dispatchEvent({type:"planeremoved",data:$});for(const $ of fe.detectedPlanes)if(!F.has($))F.add($),L.set($,fe.lastChangedTime),n.dispatchEvent({type:"planeadded",data:$});else{const Ce=L.get($);$.lastChangedTime>Ce&&(L.set($,$.lastChangedTime),n.dispatchEvent({type:"planechanged",data:$}))}}A=null}const Ie=new Ku;Ie.setAnimationLoop(pe),this.setAnimationLoop=function(ee){de=ee},this.dispose=function(){}}}function S0(a,e){function t(b,y){y.color.getRGB(b.fogColor.value,Xu(a)),y.isFog?(b.fogNear.value=y.near,b.fogFar.value=y.far):y.isFogExp2&&(b.fogDensity.value=y.density)}function n(b,y,P,O,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?r(b,y):y.isMeshToonMaterial?(r(b,y),m(b,y)):y.isMeshPhongMaterial?(r(b,y),h(b,y)):y.isMeshStandardMaterial?(r(b,y),g(b,y),y.isMeshPhysicalMaterial&&v(b,y,C)):y.isMeshMatcapMaterial?(r(b,y),M(b,y)):y.isMeshDepthMaterial?r(b,y):y.isMeshDistanceMaterial?(r(b,y),A(b,y)):y.isMeshNormalMaterial?r(b,y):y.isLineBasicMaterial?(o(b,y),y.isLineDashedMaterial&&d(b,y)):y.isPointsMaterial?l(b,y,P,O):y.isSpriteMaterial?p(b,y):y.isShadowMaterial?(b.color.value.copy(y.color),b.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function r(b,y){b.opacity.value=y.opacity,y.color&&b.diffuse.value.copy(y.color),y.emissive&&b.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(b.map.value=y.map),y.alphaMap&&(b.alphaMap.value=y.alphaMap),y.bumpMap&&(b.bumpMap.value=y.bumpMap,b.bumpScale.value=y.bumpScale,y.side===gn&&(b.bumpScale.value*=-1)),y.displacementMap&&(b.displacementMap.value=y.displacementMap,b.displacementScale.value=y.displacementScale,b.displacementBias.value=y.displacementBias),y.emissiveMap&&(b.emissiveMap.value=y.emissiveMap),y.normalMap&&(b.normalMap.value=y.normalMap,b.normalScale.value.copy(y.normalScale),y.side===gn&&b.normalScale.value.negate()),y.specularMap&&(b.specularMap.value=y.specularMap),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);const P=e.get(y).envMap;if(P&&(b.envMap.value=P,b.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=y.reflectivity,b.ior.value=y.ior,b.refractionRatio.value=y.refractionRatio),y.lightMap){b.lightMap.value=y.lightMap;const F=a.useLegacyLights===!0?Math.PI:1;b.lightMapIntensity.value=y.lightMapIntensity*F}y.aoMap&&(b.aoMap.value=y.aoMap,b.aoMapIntensity.value=y.aoMapIntensity);let O;y.map?O=y.map:y.specularMap?O=y.specularMap:y.displacementMap?O=y.displacementMap:y.normalMap?O=y.normalMap:y.bumpMap?O=y.bumpMap:y.roughnessMap?O=y.roughnessMap:y.metalnessMap?O=y.metalnessMap:y.alphaMap?O=y.alphaMap:y.emissiveMap?O=y.emissiveMap:y.clearcoatMap?O=y.clearcoatMap:y.clearcoatNormalMap?O=y.clearcoatNormalMap:y.clearcoatRoughnessMap?O=y.clearcoatRoughnessMap:y.iridescenceMap?O=y.iridescenceMap:y.iridescenceThicknessMap?O=y.iridescenceThicknessMap:y.specularIntensityMap?O=y.specularIntensityMap:y.specularColorMap?O=y.specularColorMap:y.transmissionMap?O=y.transmissionMap:y.thicknessMap?O=y.thicknessMap:y.sheenColorMap?O=y.sheenColorMap:y.sheenRoughnessMap&&(O=y.sheenRoughnessMap),O!==void 0&&(O.isWebGLRenderTarget&&(O=O.texture),O.matrixAutoUpdate===!0&&O.updateMatrix(),b.uvTransform.value.copy(O.matrix));let C;y.aoMap?C=y.aoMap:y.lightMap&&(C=y.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),b.uv2Transform.value.copy(C.matrix))}function o(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity}function d(b,y){b.dashSize.value=y.dashSize,b.totalSize.value=y.dashSize+y.gapSize,b.scale.value=y.scale}function l(b,y,P,O){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.size.value=y.size*P,b.scale.value=O*.5,y.map&&(b.map.value=y.map),y.alphaMap&&(b.alphaMap.value=y.alphaMap),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);let C;y.map?C=y.map:y.alphaMap&&(C=y.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),b.uvTransform.value.copy(C.matrix))}function p(b,y){b.diffuse.value.copy(y.color),b.opacity.value=y.opacity,b.rotation.value=y.rotation,y.map&&(b.map.value=y.map),y.alphaMap&&(b.alphaMap.value=y.alphaMap),y.alphaTest>0&&(b.alphaTest.value=y.alphaTest);let P;y.map?P=y.map:y.alphaMap&&(P=y.alphaMap),P!==void 0&&(P.matrixAutoUpdate===!0&&P.updateMatrix(),b.uvTransform.value.copy(P.matrix))}function h(b,y){b.specular.value.copy(y.specular),b.shininess.value=Math.max(y.shininess,1e-4)}function m(b,y){y.gradientMap&&(b.gradientMap.value=y.gradientMap)}function g(b,y){b.roughness.value=y.roughness,b.metalness.value=y.metalness,y.roughnessMap&&(b.roughnessMap.value=y.roughnessMap),y.metalnessMap&&(b.metalnessMap.value=y.metalnessMap),e.get(y).envMap&&(b.envMapIntensity.value=y.envMapIntensity)}function v(b,y,P){b.ior.value=y.ior,y.sheen>0&&(b.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),b.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(b.sheenColorMap.value=y.sheenColorMap),y.sheenRoughnessMap&&(b.sheenRoughnessMap.value=y.sheenRoughnessMap)),y.clearcoat>0&&(b.clearcoat.value=y.clearcoat,b.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(b.clearcoatMap.value=y.clearcoatMap),y.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap),y.clearcoatNormalMap&&(b.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),b.clearcoatNormalMap.value=y.clearcoatNormalMap,y.side===gn&&b.clearcoatNormalScale.value.negate())),y.iridescence>0&&(b.iridescence.value=y.iridescence,b.iridescenceIOR.value=y.iridescenceIOR,b.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(b.iridescenceMap.value=y.iridescenceMap),y.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=y.iridescenceThicknessMap)),y.transmission>0&&(b.transmission.value=y.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(b.transmissionMap.value=y.transmissionMap),b.thickness.value=y.thickness,y.thicknessMap&&(b.thicknessMap.value=y.thicknessMap),b.attenuationDistance.value=y.attenuationDistance,b.attenuationColor.value.copy(y.attenuationColor)),b.specularIntensity.value=y.specularIntensity,b.specularColor.value.copy(y.specularColor),y.specularIntensityMap&&(b.specularIntensityMap.value=y.specularIntensityMap),y.specularColorMap&&(b.specularColorMap.value=y.specularColorMap)}function M(b,y){y.matcap&&(b.matcap.value=y.matcap)}function A(b,y){b.referencePosition.value.copy(y.referencePosition),b.nearDistance.value=y.nearDistance,b.farDistance.value=y.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function w0(a,e,t,n){let r={},o={},d=[];const l=t.isWebGL2?a.getParameter(35375):0;function p(O,C){const F=C.program;n.uniformBlockBinding(O,F)}function h(O,C){let F=r[O.id];F===void 0&&(A(O),F=m(O),r[O.id]=F,O.addEventListener("dispose",y));const L=C.program;n.updateUBOMapping(O,L);const B=e.render.frame;o[O.id]!==B&&(v(O),o[O.id]=B)}function m(O){const C=g();O.__bindingPointIndex=C;const F=a.createBuffer(),L=O.__size,B=O.usage;return a.bindBuffer(35345,F),a.bufferData(35345,L,B),a.bindBuffer(35345,null),a.bindBufferBase(35345,C,F),F}function g(){for(let O=0;O<l;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const C=r[O.id],F=O.uniforms,L=O.__cache;a.bindBuffer(35345,C);for(let B=0,Z=F.length;B<Z;B++){const E=F[B];if(M(E,B,L)===!0){const N=E.__offset,W=Array.isArray(E.value)?E.value:[E.value];let le=0;for(let ue=0;ue<W.length;ue++){const Q=W[ue],j=b(Q);typeof Q=="number"?(E.__data[0]=Q,a.bufferSubData(35345,N+le,E.__data)):Q.isMatrix3?(E.__data[0]=Q.elements[0],E.__data[1]=Q.elements[1],E.__data[2]=Q.elements[2],E.__data[3]=Q.elements[0],E.__data[4]=Q.elements[3],E.__data[5]=Q.elements[4],E.__data[6]=Q.elements[5],E.__data[7]=Q.elements[0],E.__data[8]=Q.elements[6],E.__data[9]=Q.elements[7],E.__data[10]=Q.elements[8],E.__data[11]=Q.elements[0]):(Q.toArray(E.__data,le),le+=j.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,N,E.__data)}}a.bindBuffer(35345,null)}function M(O,C,F){const L=O.value;if(F[C]===void 0){if(typeof L=="number")F[C]=L;else{const B=Array.isArray(L)?L:[L],Z=[];for(let E=0;E<B.length;E++)Z.push(B[E].clone());F[C]=Z}return!0}else if(typeof L=="number"){if(F[C]!==L)return F[C]=L,!0}else{const B=Array.isArray(F[C])?F[C]:[F[C]],Z=Array.isArray(L)?L:[L];for(let E=0;E<B.length;E++){const N=B[E];if(N.equals(Z[E])===!1)return N.copy(Z[E]),!0}}return!1}function A(O){const C=O.uniforms;let F=0;const L=16;let B=0;for(let Z=0,E=C.length;Z<E;Z++){const N=C[Z],W={boundary:0,storage:0},le=Array.isArray(N.value)?N.value:[N.value];for(let ue=0,Q=le.length;ue<Q;ue++){const j=le[ue],V=b(j);W.boundary+=V.boundary,W.storage+=V.storage}if(N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=F,Z>0){B=F%L;const ue=L-B;B!==0&&ue-W.boundary<0&&(F+=L-B,N.__offset=F)}F+=W.storage}return B=F%L,B>0&&(F+=L-B),O.__size=F,O.__cache={},this}function b(O){const C={boundary:0,storage:0};return typeof O=="number"?(C.boundary=4,C.storage=4):O.isVector2?(C.boundary=8,C.storage=8):O.isVector3||O.isColor?(C.boundary=16,C.storage=12):O.isVector4?(C.boundary=16,C.storage=16):O.isMatrix3?(C.boundary=48,C.storage=48):O.isMatrix4?(C.boundary=64,C.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),C}function y(O){const C=O.target;C.removeEventListener("dispose",y);const F=d.indexOf(C.__bindingPointIndex);d.splice(F,1),a.deleteBuffer(r[C.id]),delete r[C.id],delete o[C.id]}function P(){for(const O in r)a.deleteBuffer(r[O]);d=[],r={},o={}}return{bind:p,update:h,dispose:P}}function E0(){const a=cs("canvas");return a.style.display="block",a}function ul(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:E0(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,r=a.stencil!==void 0?a.stencil:!0,o=a.antialias!==void 0?a.antialias:!1,d=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,l=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,p=a.powerPreference!==void 0?a.powerPreference:"default",h=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let m;t!==null?m=t.getContextAttributes().alpha:m=a.alpha!==void 0?a.alpha:!1;let g=null,v=null;const M=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Hi,this.useLegacyLights=!0,this.toneMapping=Xn,this.toneMappingExposure=1;const b=this;let y=!1,P=0,O=0,C=null,F=-1,L=null;const B=new xt,Z=new xt;let E=null,N=e.width,W=e.height,le=1,ue=null,Q=null;const j=new xt(0,0,N,W),V=new xt(0,0,N,W);let ae=!1;const xe=new ll;let ce=!1,de=!1,pe=null;const Ie=new Tt,ee=new H,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return C===null?le:1}let $=t;function Ce(R,K){for(let se=0;se<R.length;se++){const Y=R[se],ne=e.getContext(Y,K);if(ne!==null)return ne}return null}try{const R={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:d,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rl}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),$===null){const K=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&K.shift(),$=Ce(K,R),$===null)throw Ce(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let De,Le,Ae,Be,He,Ze,rt,Ct,qe,Pt,At,at,dt,en,Ut,I,T,ie,ve,_e,Se,ze,z,X;function we(){De=new kg($),Le=new Ig($,De,a),De.init(Le),ze=new _0($,De,Le),Ae=new v0($,De,Le),Be=new Vg,He=new s0,Ze=new x0($,De,Ae,He,Le,ze,Be),rt=new Ug(b),Ct=new zg(b),qe=new $h($,Le),z=new Rg($,De,qe,Le),Pt=new Bg($,qe,Be,z),At=new qg($,Pt,qe,Be),ve=new jg($,Le,Ze),I=new Og(He),at=new r0(b,rt,Ct,De,Le,z,I),dt=new S0(b,He),en=new a0,Ut=new h0(De,Le),ie=new Dg(b,rt,Ct,Ae,At,m,d),T=new g0(b,At,Le),X=new w0($,Be,Le,Ae),_e=new Lg($,De,Be,Le),Se=new Gg($,De,Be,Le),Be.programs=at.programs,b.capabilities=Le,b.extensions=De,b.properties=He,b.renderLists=en,b.shadowMap=T,b.state=Ae,b.info=Be}we();const ye=new M0(b,$);this.xr=ye,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const R=De.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=De.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(R){R!==void 0&&(le=R,this.setSize(N,W,!1))},this.getSize=function(R){return R.set(N,W)},this.setSize=function(R,K,se=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,W=K,e.width=Math.floor(R*le),e.height=Math.floor(K*le),se===!0&&(e.style.width=R+"px",e.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(N*le,W*le).floor()},this.setDrawingBufferSize=function(R,K,se){N=R,W=K,le=se,e.width=Math.floor(R*se),e.height=Math.floor(K*se),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(j)},this.setViewport=function(R,K,se,Y){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,K,se,Y),Ae.viewport(B.copy(j).multiplyScalar(le).floor())},this.getScissor=function(R){return R.copy(V)},this.setScissor=function(R,K,se,Y){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,K,se,Y),Ae.scissor(Z.copy(V).multiplyScalar(le).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(R){Ae.setScissorTest(ae=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(R=!0,K=!0,se=!0){let Y=0;R&&(Y|=16384),K&&(Y|=256),se&&(Y|=1024),$.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),en.dispose(),Ut.dispose(),He.dispose(),rt.dispose(),Ct.dispose(),At.dispose(),z.dispose(),X.dispose(),at.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ge),ye.removeEventListener("sessionend",Te),pe&&(pe.dispose(),pe=null),Ee.stop()};function Oe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=Be.autoReset,K=T.enabled,se=T.autoUpdate,Y=T.needsUpdate,ne=T.type;we(),Be.autoReset=R,T.enabled=K,T.autoUpdate=se,T.needsUpdate=Y,T.type=ne}function Fe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ke(R){const K=R.target;K.removeEventListener("dispose",Ke),tt(K)}function tt(R){lt(R),He.remove(R)}function lt(R){const K=He.get(R).programs;K!==void 0&&(K.forEach(function(se){at.releaseProgram(se)}),R.isShaderMaterial&&at.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,se,Y,ne,ke){K===null&&(K=fe);const je=ne.isMesh&&ne.matrixWorld.determinant()<0,$e=Do(R,K,se,Y,ne);Ae.setMaterial(Y,je);let Qe=se.index,Je=1;Y.wireframe===!0&&(Qe=Pt.getWireframeAttribute(se),Je=2);const nt=se.drawRange,st=se.attributes.position;let Mt=nt.start*Je,$t=(nt.start+nt.count)*Je;ke!==null&&(Mt=Math.max(Mt,ke.start*Je),$t=Math.min($t,(ke.start+ke.count)*Je)),Qe!==null?(Mt=Math.max(Mt,0),$t=Math.min($t,Qe.count)):st!=null&&(Mt=Math.max(Mt,0),$t=Math.min($t,st.count));const un=$t-Mt;if(un<0||un===1/0)return;z.setup(ne,Y,$e,se,Qe);let Bn,bt=_e;if(Qe!==null&&(Bn=qe.get(Qe),bt=Se,bt.setIndex(Bn)),ne.isMesh)Y.wireframe===!0?(Ae.setLineWidth(Y.wireframeLinewidth*te()),bt.setMode(1)):bt.setMode(4);else if(ne.isLine){let it=Y.linewidth;it===void 0&&(it=1),Ae.setLineWidth(it*te()),ne.isLineSegments?bt.setMode(1):ne.isLineLoop?bt.setMode(2):bt.setMode(3)}else ne.isPoints?bt.setMode(0):ne.isSprite&&bt.setMode(4);if(ne.isInstancedMesh)bt.renderInstances(Mt,un,ne.count);else if(se.isInstancedBufferGeometry){const it=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Tr=Math.min(se.instanceCount,it);bt.renderInstances(Mt,un,Tr)}else bt.render(Mt,un)},this.compile=function(R,K){function se(Y,ne,ke){Y.transparent===!0&&Y.side===gi&&Y.forceSinglePass===!1?(Y.side=gn,Y.needsUpdate=!0,Lt(Y,ne,ke),Y.side=_i,Y.needsUpdate=!0,Lt(Y,ne,ke),Y.side=gi):Lt(Y,ne,ke)}v=Ut.get(R),v.init(),A.push(v),R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(K.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights(b.useLegacyLights),R.traverse(function(Y){const ne=Y.material;if(ne)if(Array.isArray(ne))for(let ke=0;ke<ne.length;ke++){const je=ne[ke];se(je,R,Y)}else se(ne,R,Y)}),A.pop(),v=null};let G=null;function re(R){G&&G(R)}function ge(){Ee.stop()}function Te(){Ee.start()}const Ee=new Ku;Ee.setAnimationLoop(re),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(R){G=R,ye.setAnimationLoop(R),R===null?Ee.stop():Ee.start()},ye.addEventListener("sessionstart",ge),ye.addEventListener("sessionend",Te),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(K),K=ye.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,K,C),v=Ut.get(R,A.length),v.init(),A.push(v),Ie.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),xe.setFromProjectionMatrix(Ie),de=this.localClippingEnabled,ce=I.init(this.clippingPlanes,de),g=en.get(R,M.length),g.init(),M.push(g),ft(R,K,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(ue,Q),ce===!0&&I.beginShadows();const se=v.state.shadowsArray;if(T.render(se,R,K),ce===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(g,R),v.setupLights(b.useLegacyLights),K.isArrayCamera){const Y=K.cameras;for(let ne=0,ke=Y.length;ne<ke;ne++){const je=Y[ne];yt(g,R,je,je.viewport)}}else yt(g,R,K);C!==null&&(Ze.updateMultisampleRenderTarget(C),Ze.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(b,R,K),z.resetDefaultState(),F=-1,L=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function ft(R,K,se,Y){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||xe.intersectsSprite(R)){Y&&ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ie);const je=At.update(R),$e=R.material;$e.visible&&g.push(R,je,$e,se,ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Be.render.frame&&(R.skeleton.update(),R.skeleton.frame=Be.render.frame),!R.frustumCulled||xe.intersectsObject(R))){Y&&ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ie);const je=At.update(R),$e=R.material;if(Array.isArray($e)){const Qe=je.groups;for(let Je=0,nt=Qe.length;Je<nt;Je++){const st=Qe[Je],Mt=$e[st.materialIndex];Mt&&Mt.visible&&g.push(R,je,Mt,se,ee.z,st)}}else $e.visible&&g.push(R,je,$e,se,ee.z,null)}}const ke=R.children;for(let je=0,$e=ke.length;je<$e;je++)ft(ke[je],K,se,Y)}function yt(R,K,se,Y){const ne=R.opaque,ke=R.transmissive,je=R.transparent;v.setupLightsView(se),ce===!0&&I.setGlobalState(b.clippingPlanes,se),ke.length>0&&qt(ne,K,se),Y&&Ae.viewport(B.copy(Y)),ne.length>0&&Et(ne,K,se),ke.length>0&&Et(ke,K,se),je.length>0&&Et(je,K,se),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function qt(R,K,se){const Y=Le.isWebGL2;pe===null&&(pe=new jt(1024,1024,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?as:Vi,minFilter:os,samples:Y&&o===!0?4:0}));const ne=b.getRenderTarget();b.setRenderTarget(pe),b.clear();const ke=b.toneMapping;b.toneMapping=Xn,Et(R,K,se),b.toneMapping=ke,Ze.updateMultisampleRenderTarget(pe),Ze.updateRenderTargetMipmap(pe),b.setRenderTarget(ne)}function Et(R,K,se){const Y=K.isScene===!0?K.overrideMaterial:null;for(let ne=0,ke=R.length;ne<ke;ne++){const je=R[ne],$e=je.object,Qe=je.geometry,Je=Y===null?je.material:Y,nt=je.group;$e.layers.test(se.layers)&&ct($e,K,se,Qe,Je,nt)}}function ct(R,K,se,Y,ne,ke){R.onBeforeRender(b,K,se,Y,ne,ke),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(b,K,se,Y,R,ke),ne.transparent===!0&&ne.side===gi&&ne.forceSinglePass===!1?(ne.side=gn,ne.needsUpdate=!0,b.renderBufferDirect(se,K,Y,ne,R,ke),ne.side=_i,ne.needsUpdate=!0,b.renderBufferDirect(se,K,Y,ne,R,ke),ne.side=gi):b.renderBufferDirect(se,K,Y,ne,R,ke),R.onAfterRender(b,K,se,Y,ne,ke)}function Lt(R,K,se){K.isScene!==!0&&(K=fe);const Y=He.get(R),ne=v.state.lights,ke=v.state.shadowsArray,je=ne.state.version,$e=at.getParameters(R,ne.state,ke,K,se),Qe=at.getProgramCacheKey($e);let Je=Y.programs;Y.environment=R.isMeshStandardMaterial?K.environment:null,Y.fog=K.fog,Y.envMap=(R.isMeshStandardMaterial?Ct:rt).get(R.envMap||Y.environment),Je===void 0&&(R.addEventListener("dispose",Ke),Je=new Map,Y.programs=Je);let nt=Je.get(Qe);if(nt!==void 0){if(Y.currentProgram===nt&&Y.lightsStateVersion===je)return xn(R,$e),nt}else $e.uniforms=at.getUniforms(R),R.onBuild(se,$e,b),R.onBeforeCompile($e,b),nt=at.acquireProgram($e,Qe),Je.set(Qe,nt),Y.uniforms=$e.uniforms;const st=Y.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=I.uniform),xn(R,$e),Y.needsLights=Ve(R),Y.lightsStateVersion=je,Y.needsLights&&(st.ambientLightColor.value=ne.state.ambient,st.lightProbe.value=ne.state.probe,st.directionalLights.value=ne.state.directional,st.directionalLightShadows.value=ne.state.directionalShadow,st.spotLights.value=ne.state.spot,st.spotLightShadows.value=ne.state.spotShadow,st.rectAreaLights.value=ne.state.rectArea,st.ltc_1.value=ne.state.rectAreaLTC1,st.ltc_2.value=ne.state.rectAreaLTC2,st.pointLights.value=ne.state.point,st.pointLightShadows.value=ne.state.pointShadow,st.hemisphereLights.value=ne.state.hemi,st.directionalShadowMap.value=ne.state.directionalShadowMap,st.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,st.spotShadowMap.value=ne.state.spotShadowMap,st.spotLightMatrix.value=ne.state.spotLightMatrix,st.spotLightMap.value=ne.state.spotLightMap,st.pointShadowMap.value=ne.state.pointShadowMap,st.pointShadowMatrix.value=ne.state.pointShadowMatrix);const Mt=nt.getUniforms(),$t=go.seqWithValue(Mt.seq,st);return Y.currentProgram=nt,Y.uniformsList=$t,nt}function xn(R,K){const se=He.get(R);se.outputEncoding=K.outputEncoding,se.instancing=K.instancing,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function Do(R,K,se,Y,ne){K.isScene!==!0&&(K=fe),Ze.resetTextureUnits();const ke=K.fog,je=Y.isMeshStandardMaterial?K.environment:null,$e=C===null?b.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:Hi,Qe=(Y.isMeshStandardMaterial?Ct:rt).get(Y.envMap||je),Je=Y.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!Y.normalMap&&!!se.attributes.tangent,st=!!se.morphAttributes.position,Mt=!!se.morphAttributes.normal,$t=!!se.morphAttributes.color,un=Y.toneMapped?b.toneMapping:Xn,Bn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,bt=Bn!==void 0?Bn.length:0,it=He.get(Y),Tr=v.state.lights;if(ce===!0&&(de===!0||R!==L)){const tn=R===L&&Y.id===F;I.setState(Y,R,tn)}let It=!1;Y.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Tr.state.version||it.outputEncoding!==$e||ne.isInstancedMesh&&it.instancing===!1||!ne.isInstancedMesh&&it.instancing===!0||ne.isSkinnedMesh&&it.skinning===!1||!ne.isSkinnedMesh&&it.skinning===!0||it.envMap!==Qe||Y.fog===!0&&it.fog!==ke||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==I.numPlanes||it.numIntersection!==I.numIntersection)||it.vertexAlphas!==Je||it.vertexTangents!==nt||it.morphTargets!==st||it.morphNormals!==Mt||it.morphColors!==$t||it.toneMapping!==un||Le.isWebGL2===!0&&it.morphTargetsCount!==bt)&&(It=!0):(It=!0,it.__version=Y.version);let Sn=it.currentProgram;It===!0&&(Sn=Lt(Y,K,ne));let Ss=!1,Gn=!1,Si=!1;const Xt=Sn.getUniforms(),Yn=it.uniforms;if(Ae.useProgram(Sn.program)&&(Ss=!0,Gn=!0,Si=!0),Y.id!==F&&(F=Y.id,Gn=!0),Ss||L!==R){if(Xt.setValue($,"projectionMatrix",R.projectionMatrix),Le.logarithmicDepthBuffer&&Xt.setValue($,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),L!==R&&(L=R,Gn=!0,Si=!0),Y.isShaderMaterial||Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshStandardMaterial||Y.envMap){const tn=Xt.map.cameraPosition;tn!==void 0&&tn.setValue($,ee.setFromMatrixPosition(R.matrixWorld))}(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Xt.setValue($,"isOrthographic",R.isOrthographicCamera===!0),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial||Y.isShadowMaterial||ne.isSkinnedMesh)&&Xt.setValue($,"viewMatrix",R.matrixWorldInverse)}if(ne.isSkinnedMesh){Xt.setOptional($,ne,"bindMatrix"),Xt.setOptional($,ne,"bindMatrixInverse");const tn=ne.skeleton;tn&&(Le.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Xt.setValue($,"boneTexture",tn.boneTexture,Ze),Xt.setValue($,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zn=se.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0&&Le.isWebGL2===!0)&&ve.update(ne,se,Sn),(Gn||it.receiveShadow!==ne.receiveShadow)&&(it.receiveShadow=ne.receiveShadow,Xt.setValue($,"receiveShadow",ne.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Yn.envMap.value=Qe,Yn.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),Gn&&(Xt.setValue($,"toneMappingExposure",b.toneMappingExposure),it.needsLights&&An(Yn,Si),ke&&Y.fog===!0&&dt.refreshFogUniforms(Yn,ke),dt.refreshMaterialUniforms(Yn,Y,le,W,pe),go.upload($,it.uniformsList,Yn,Ze)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(go.upload($,it.uniformsList,Yn,Ze),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Xt.setValue($,"center",ne.center),Xt.setValue($,"modelViewMatrix",ne.modelViewMatrix),Xt.setValue($,"normalMatrix",ne.normalMatrix),Xt.setValue($,"modelMatrix",ne.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const tn=Y.uniformsGroups;for(let Dn=0,Ro=tn.length;Dn<Ro;Dn++)if(Le.isWebGL2){const ws=tn[Dn];X.update(ws,Sn),X.bind(ws,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function An(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Ve(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,K,se){He.get(R.texture).__webglTexture=K,He.get(R.depthTexture).__webglTexture=se;const Y=He.get(R);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=se===void 0,Y.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,K){const se=He.get(R);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,se=0){C=R,P=K,O=se;let Y=!0,ne=null,ke=!1,je=!1;if(R){const Qe=He.get(R);Qe.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(36160,null),Y=!1):Qe.__webglFramebuffer===void 0?Ze.setupRenderTarget(R):Qe.__hasExternalTextures&&Ze.rebindTextures(R,He.get(R.texture).__webglTexture,He.get(R.depthTexture).__webglTexture);const Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(je=!0);const nt=He.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ne=nt[K],ke=!0):Le.isWebGL2&&R.samples>0&&Ze.useMultisampledRTT(R)===!1?ne=He.get(R).__webglMultisampledFramebuffer:ne=nt,B.copy(R.viewport),Z.copy(R.scissor),E=R.scissorTest}else B.copy(j).multiplyScalar(le).floor(),Z.copy(V).multiplyScalar(le).floor(),E=ae;if(Ae.bindFramebuffer(36160,ne)&&Le.drawBuffers&&Y&&Ae.drawBuffers(R,ne),Ae.viewport(B),Ae.scissor(Z),Ae.setScissorTest(E),ke){const Qe=He.get(R.texture);$.framebufferTexture2D(36160,36064,34069+K,Qe.__webglTexture,se)}else if(je){const Qe=He.get(R.texture),Je=K||0;$.framebufferTextureLayer(36160,36064,Qe.__webglTexture,se||0,Je)}F=-1},this.readRenderTargetPixels=function(R,K,se,Y,ne,ke,je){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=He.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e){Ae.bindFramebuffer(36160,$e);try{const Qe=R.texture,Je=Qe.format,nt=Qe.type;if(Je!==Fn&&ze.convert(Je)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=nt===as&&(De.has("EXT_color_buffer_half_float")||Le.isWebGL2&&De.has("EXT_color_buffer_float"));if(nt!==Vi&&ze.convert(nt)!==$.getParameter(35738)&&!(nt===zi&&(Le.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-Y&&se>=0&&se<=R.height-ne&&$.readPixels(K,se,Y,ne,ze.convert(Je),ze.convert(nt),ke)}finally{const Qe=C!==null?He.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(36160,Qe)}}},this.copyFramebufferToTexture=function(R,K,se=0){const Y=Math.pow(2,-se),ne=Math.floor(K.image.width*Y),ke=Math.floor(K.image.height*Y);Ze.setTexture2D(K,0),$.copyTexSubImage2D(3553,se,0,0,R.x,R.y,ne,ke),Ae.unbindTexture()},this.copyTextureToTexture=function(R,K,se,Y=0){const ne=K.image.width,ke=K.image.height,je=ze.convert(se.format),$e=ze.convert(se.type);Ze.setTexture2D(se,0),$.pixelStorei(37440,se.flipY),$.pixelStorei(37441,se.premultiplyAlpha),$.pixelStorei(3317,se.unpackAlignment),K.isDataTexture?$.texSubImage2D(3553,Y,R.x,R.y,ne,ke,je,$e,K.image.data):K.isCompressedTexture?$.compressedTexSubImage2D(3553,Y,R.x,R.y,K.mipmaps[0].width,K.mipmaps[0].height,je,K.mipmaps[0].data):$.texSubImage2D(3553,Y,R.x,R.y,je,$e,K.image),Y===0&&se.generateMipmaps&&$.generateMipmap(3553),Ae.unbindTexture()},this.copyTextureToTexture3D=function(R,K,se,Y,ne=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ke=R.max.x-R.min.x+1,je=R.max.y-R.min.y+1,$e=R.max.z-R.min.z+1,Qe=ze.convert(Y.format),Je=ze.convert(Y.type);let nt;if(Y.isData3DTexture)Ze.setTexture3D(Y,0),nt=32879;else if(Y.isDataArrayTexture)Ze.setTexture2DArray(Y,0),nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,Y.flipY),$.pixelStorei(37441,Y.premultiplyAlpha),$.pixelStorei(3317,Y.unpackAlignment);const st=$.getParameter(3314),Mt=$.getParameter(32878),$t=$.getParameter(3316),un=$.getParameter(3315),Bn=$.getParameter(32877),bt=se.isCompressedTexture?se.mipmaps[0]:se.image;$.pixelStorei(3314,bt.width),$.pixelStorei(32878,bt.height),$.pixelStorei(3316,R.min.x),$.pixelStorei(3315,R.min.y),$.pixelStorei(32877,R.min.z),se.isDataTexture||se.isData3DTexture?$.texSubImage3D(nt,ne,K.x,K.y,K.z,ke,je,$e,Qe,Je,bt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(nt,ne,K.x,K.y,K.z,ke,je,$e,Qe,bt.data)):$.texSubImage3D(nt,ne,K.x,K.y,K.z,ke,je,$e,Qe,Je,bt),$.pixelStorei(3314,st),$.pixelStorei(32878,Mt),$.pixelStorei(3316,$t),$.pixelStorei(3315,un),$.pixelStorei(32877,Bn),ne===0&&Y.generateMipmaps&&$.generateMipmap(nt),Ae.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Ze.setTextureCube(R,0):R.isData3DTexture?Ze.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ze.setTexture2DArray(R,0):Ze.setTexture2D(R,0),Ae.unbindTexture()},this.resetState=function(){P=0,O=0,C=null,Ae.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(ul.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(a){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!a}}});class T0 extends ul{}T0.prototype.isWebGL1Renderer=!0;class nd extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class xr extends zn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class dl extends kn{constructor(e=1,t=1,n=1,r=32,o=1,d=!1,l=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:d,thetaStart:l,thetaLength:p};const h=this;r=Math.floor(r),o=Math.floor(o);const m=[],g=[],v=[],M=[];let A=0;const b=[],y=n/2;let P=0;O(),d===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(m),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(M,2));function O(){const F=new H,L=new H;let B=0;const Z=(t-e)/n;for(let E=0;E<=o;E++){const N=[],W=E/o,le=W*(t-e)+e;for(let ue=0;ue<=r;ue++){const Q=ue/r,j=Q*p+l,V=Math.sin(j),ae=Math.cos(j);L.x=le*V,L.y=-W*n+y,L.z=le*ae,g.push(L.x,L.y,L.z),F.set(V,Z,ae).normalize(),v.push(F.x,F.y,F.z),M.push(Q,1-W),N.push(A++)}b.push(N)}for(let E=0;E<r;E++)for(let N=0;N<o;N++){const W=b[N][E],le=b[N+1][E],ue=b[N+1][E+1],Q=b[N][E+1];m.push(W,le,Q),m.push(le,ue,Q),B+=6}h.addGroup(P,B,0),P+=B}function C(F){const L=A,B=new Re,Z=new H;let E=0;const N=F===!0?e:t,W=F===!0?1:-1;for(let ue=1;ue<=r;ue++)g.push(0,y*W,0),v.push(0,W,0),M.push(.5,.5),A++;const le=A;for(let ue=0;ue<=r;ue++){const j=ue/r*p+l,V=Math.cos(j),ae=Math.sin(j);Z.x=N*ae,Z.y=y*W,Z.z=N*V,g.push(Z.x,Z.y,Z.z),v.push(0,W,0),B.x=V*.5+.5,B.y=ae*.5*W+.5,M.push(B.x,B.y),A++}for(let ue=0;ue<r;ue++){const Q=L+ue,j=le+ue;F===!0?m.push(j,j+1,Q):m.push(j+1,j,Q),E+=3}h.addGroup(P,E,F===!0?1:2),P+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Po extends kn{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,d=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:d,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const p=Math.min(d+l,Math.PI);let h=0;const m=[],g=new H,v=new H,M=[],A=[],b=[],y=[];for(let P=0;P<=n;P++){const O=[],C=P/n;let F=0;P==0&&d==0?F=.5/t:P==n&&p==Math.PI&&(F=-.5/t);for(let L=0;L<=t;L++){const B=L/t;g.x=-e*Math.cos(r+B*o)*Math.sin(d+C*l),g.y=e*Math.cos(d+C*l),g.z=e*Math.sin(r+B*o)*Math.sin(d+C*l),A.push(g.x,g.y,g.z),v.copy(g).normalize(),b.push(v.x,v.y,v.z),y.push(B+F,1-C),O.push(h++)}m.push(O)}for(let P=0;P<n;P++)for(let O=0;O<t;O++){const C=m[P][O+1],F=m[P][O],L=m[P+1][O],B=m[P+1][O+1];(P!==0||d>0)&&M.push(C,F,B),(P!==n-1||p<Math.PI)&&M.push(F,L,B)}this.setIndex(M),this.setAttribute("position",new cn(A,3)),this.setAttribute("normal",new cn(b,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class C0 extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yu extends C0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ns extends bi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class id extends bi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class P0 extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const bu={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class A0{constructor(e,t,n){const r=this;let o=!1,d=0,l=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(m){l++,o===!1&&r.onStart!==void 0&&r.onStart(m,d,l),o=!0},this.itemEnd=function(m){d++,r.onProgress!==void 0&&r.onProgress(m,d,l),d===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=h.length;g<v;g+=2){const M=h[g],A=h[g+1];if(M.global&&(M.lastIndex=0),M.test(m))return A}return null}}}const D0=new A0;class rd{constructor(e){this.manager=e!==void 0?e:D0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class R0 extends rd{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,d=bu.get(e);if(d!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(d),o.manager.itemEnd(e)},0),d;const l=cs("img");function p(){m(),bu.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(g){m(),r&&r(g),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){l.removeEventListener("load",p,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",p,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}}class L0 extends rd{constructor(e){super(e)}load(e,t,n,r){const o=new vn,d=new R0(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class _s extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class I0 extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const za=new Tt,Mu=new H,Su=new H;class fl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mu),Su.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Su),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O0 extends fl{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Qa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ka extends _s{constructor(e,t,n=0,r=Math.PI/3,o=0,d=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=r,this.penumbra=o,this.decay=d,this.map=null,this.shadow=new O0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wu=new Tt,Zr=new H,Ba=new H;class U0 extends fl{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zr),Ba.copy(n.position),Ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ba),n.updateMatrixWorld(),r.makeTranslation(-Zr.x,-Zr.y,-Zr.z),wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu)}}class Kr extends _s{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new U0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class N0 extends fl{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F0 extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new N0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ho extends _s{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sd extends kn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class z0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Eu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Eu(){return(typeof performance>"u"?Date:performance).now()}class Tu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(an(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);const od={p:5,q:2,r:2,s:3,t:2,u:4,pDiv:1,qDiv:1,rDiv:1,sDiv:1,tDiv:1,uDiv:1,x:1,y:0,z:0,w:0,dimensions:4,order:10,segments:32,curve:!0,vertices:!1,vertexThickness:75,edges:!0,edgeThickness:25,stellation:!1,projection:"stereographic",controls:"orbit",ambiance:"neon"},Pe={...od},ad=()=>{if(location.hash)try{const a=JSON.parse(atob(location.hash.slice(1)));Object.assign(Pe,a)}catch(a){console.warn(a),location.hash=""}},ld=(a,e=!1)=>{Object.assign(Pe,a),e&&window.history.pushState(null,null,"#"+btoa(JSON.stringify(Pe)))};function k0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var el={},B0={get exports(){return el},set exports(a){el=a}};(function(a,e){(function(t){a.exports=t()})(function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(i){return!(!i||!i.Window)&&i instanceof i.Window};var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.getWindow=function(i){return(0,t.default)(i)?i:(i.ownerDocument||i).defaultView||o.window},n.init=d,n.window=n.realWindow=void 0;var r=void 0;n.realWindow=r;var o=void 0;function d(i){n.realWindow=r=i;var s=i.document.createTextNode("");s.ownerDocument!==i.document&&typeof i.wrap=="function"&&i.wrap(s)===s&&(i=i.wrap(i)),n.window=o=i}n.window=o,typeof window<"u"&&window&&d(window);var l={};function p(i){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},p(i)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var h=function(i){return!!i&&p(i)==="object"},m=function(i){return typeof i=="function"},g={window:function(i){return i===n.window||(0,t.default)(i)},docFrag:function(i){return h(i)&&i.nodeType===11},object:h,func:m,number:function(i){return typeof i=="number"},bool:function(i){return typeof i=="boolean"},string:function(i){return typeof i=="string"},element:function(i){if(!i||p(i)!=="object")return!1;var s=n.getWindow(i)||n.window;return/object|function/.test(typeof Element>"u"?"undefined":p(Element))?i instanceof Element||i instanceof s.Element:i.nodeType===1&&typeof i.nodeName=="string"},plainObject:function(i){return h(i)&&!!i.constructor&&/function Object\b/.test(i.constructor.toString())},array:function(i){return h(i)&&i.length!==void 0&&m(i.splice)}};l.default=g;var v={};function M(i){var s=i.interaction;if(s.prepared.name==="drag"){var c=s.prepared.axis;c==="x"?(s.coords.cur.page.y=s.coords.start.page.y,s.coords.cur.client.y=s.coords.start.client.y,s.coords.velocity.client.y=0,s.coords.velocity.page.y=0):c==="y"&&(s.coords.cur.page.x=s.coords.start.page.x,s.coords.cur.client.x=s.coords.start.client.x,s.coords.velocity.client.x=0,s.coords.velocity.page.x=0)}}function A(i){var s=i.iEvent,c=i.interaction;if(c.prepared.name==="drag"){var u=c.prepared.axis;if(u==="x"||u==="y"){var f=u==="x"?"y":"x";s.page[f]=c.coords.start.page[f],s.client[f]=c.coords.start.client[f],s.delta[f]=0}}}Object.defineProperty(v,"__esModule",{value:!0}),v.default=void 0;var b={id:"actions/drag",install:function(i){var s=i.actions,c=i.Interactable,u=i.defaults;c.prototype.draggable=b.draggable,s.map.drag=b,s.methodDict.drag="draggable",u.actions.drag=b.defaults},listeners:{"interactions:before-action-move":M,"interactions:action-resume":M,"interactions:action-move":A,"auto-start:check":function(i){var s=i.interaction,c=i.interactable,u=i.buttons,f=c.options.drag;if(f&&f.enabled&&(!s.pointerIsDown||!/mouse|pointer/.test(s.pointerType)||u&c.options.drag.mouseButtons))return i.action={name:"drag",axis:f.lockAxis==="start"?f.startAxis:f.lockAxis},!1}},draggable:function(i){return l.default.object(i)?(this.options.drag.enabled=i.enabled!==!1,this.setPerAction("drag",i),this.setOnEvents("drag",i),/^(xy|x|y|start)$/.test(i.lockAxis)&&(this.options.drag.lockAxis=i.lockAxis),/^(xy|x|y)$/.test(i.startAxis)&&(this.options.drag.startAxis=i.startAxis),this):l.default.bool(i)?(this.options.drag.enabled=i,this):this.options.drag},beforeMove:M,move:A,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},y=b;v.default=y;var P={};Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var O={init:function(i){var s=i;O.document=s.document,O.DocumentFragment=s.DocumentFragment||C,O.SVGElement=s.SVGElement||C,O.SVGSVGElement=s.SVGSVGElement||C,O.SVGElementInstance=s.SVGElementInstance||C,O.Element=s.Element||C,O.HTMLElement=s.HTMLElement||O.Element,O.Event=s.Event,O.Touch=s.Touch||C,O.PointerEvent=s.PointerEvent||s.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function C(){}var F=O;P.default=F;var L={};Object.defineProperty(L,"__esModule",{value:!0}),L.default=void 0;var B={init:function(i){var s=P.default.Element,c=i.navigator||{};B.supportsTouch="ontouchstart"in i||l.default.func(i.DocumentTouch)&&P.default.document instanceof i.DocumentTouch,B.supportsPointerEvent=c.pointerEnabled!==!1&&!!P.default.PointerEvent,B.isIOS=/iP(hone|od|ad)/.test(c.platform),B.isIOS7=/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),B.isIe9=/MSIE 9/.test(c.userAgent),B.isOperaMobile=c.appName==="Opera"&&B.supportsTouch&&/Presto/.test(c.userAgent),B.prefixedMatchesSelector="matches"in s.prototype?"matches":"webkitMatchesSelector"in s.prototype?"webkitMatchesSelector":"mozMatchesSelector"in s.prototype?"mozMatchesSelector":"oMatchesSelector"in s.prototype?"oMatchesSelector":"msMatchesSelector",B.pEventTypes=B.supportsPointerEvent?P.default.PointerEvent===i.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,B.wheelEvent=P.default.document&&"onmousewheel"in P.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},Z=B;L.default=Z;var E={};function N(i){var s=i.parentNode;if(l.default.docFrag(s)){for(;(s=s.host)&&l.default.docFrag(s););return s}return s}function W(i,s){return n.window!==n.realWindow&&(s=s.replace(/\/deep\//g," ")),i[L.default.prefixedMatchesSelector](s)}Object.defineProperty(E,"__esModule",{value:!0}),E.closest=function(i,s){for(;l.default.element(i);){if(W(i,s))return i;i=N(i)}return null},E.getActualElement=function(i){return i.correspondingUseElement||i},E.getElementClientRect=j,E.getElementRect=function(i){var s=j(i);if(!L.default.isIOS7&&s){var c=Q(n.getWindow(i));s.left+=c.x,s.right+=c.x,s.top+=c.y,s.bottom+=c.y}return s},E.getPath=function(i){for(var s=[];i;)s.push(i),i=N(i);return s},E.getScrollXY=Q,E.indexOfDeepestElement=function(i){for(var s,c=[],u=0;u<i.length;u++){var f=i[u],x=i[s];if(f&&u!==s)if(x){var w=le(f),_=le(x);if(w!==f.ownerDocument)if(_!==f.ownerDocument)if(w!==_){c=c.length?c:ue(x);var S=void 0;if(x instanceof P.default.HTMLElement&&f instanceof P.default.SVGElement&&!(f instanceof P.default.SVGSVGElement)){if(f===_)continue;S=f.ownerSVGElement}else S=f;for(var D=ue(S,x.ownerDocument),U=0;D[U]&&D[U]===c[U];)U++;var k=[D[U-1],D[U],c[U]];if(k[0])for(var J=k[0].lastChild;J;){if(J===k[1]){s=u,c=D;break}if(J===k[2])break;J=J.previousSibling}}else oe=f,q=x,(parseInt(n.getWindow(oe).getComputedStyle(oe).zIndex,10)||0)>=(parseInt(n.getWindow(q).getComputedStyle(q).zIndex,10)||0)&&(s=u);else s=u}else s=u}var oe,q;return s},E.matchesSelector=W,E.matchesUpTo=function(i,s,c){for(;l.default.element(i);){if(W(i,s))return!0;if((i=N(i))===c)return W(i,s)}return!1},E.nodeContains=function(i,s){if(i.contains)return i.contains(s);for(;s;){if(s===i)return!0;s=s.parentNode}return!1},E.parentNode=N,E.trySelector=function(i){return!!l.default.string(i)&&(P.default.document.querySelector(i),!0)};var le=function(i){return i.parentNode||i.host};function ue(i,s){for(var c,u=[],f=i;(c=le(f))&&f!==s&&c!==f.ownerDocument;)u.unshift(f),f=c;return u}function Q(i){return{x:(i=i||n.window).scrollX||i.document.documentElement.scrollLeft,y:i.scrollY||i.document.documentElement.scrollTop}}function j(i){var s=i instanceof P.default.SVGElement?i.getBoundingClientRect():i.getClientRects()[0];return s&&{left:s.left,right:s.right,top:s.top,bottom:s.bottom,width:s.width||s.right-s.left,height:s.height||s.bottom-s.top}}var V={};Object.defineProperty(V,"__esModule",{value:!0}),V.default=function(i,s){for(var c in s)i[c]=s[c];return i};var ae={};function xe(i,s){(s==null||s>i.length)&&(s=i.length);for(var c=0,u=Array(s);c<s;c++)u[c]=i[c];return u}function ce(i,s,c){return i==="parent"?(0,E.parentNode)(c):i==="self"?s.getRect(c):(0,E.closest)(c,i)}Object.defineProperty(ae,"__esModule",{value:!0}),ae.addEdges=function(i,s,c){i.left&&(s.left+=c.x),i.right&&(s.right+=c.x),i.top&&(s.top+=c.y),i.bottom&&(s.bottom+=c.y),s.width=s.right-s.left,s.height=s.bottom-s.top},ae.getStringOptionResult=ce,ae.rectToXY=function(i){return i&&{x:"x"in i?i.x:i.left,y:"y"in i?i.y:i.top}},ae.resolveRectLike=function(i,s,c,u){var f,x=i;return l.default.string(x)?x=ce(x,s,c):l.default.func(x)&&(x=x.apply(void 0,function(w){if(Array.isArray(w))return xe(w)}(f=u)||function(w){if(typeof Symbol<"u"&&w[Symbol.iterator]!=null||w["@@iterator"]!=null)return Array.from(w)}(f)||function(w,_){if(w){if(typeof w=="string")return xe(w,_);var S=Object.prototype.toString.call(w).slice(8,-1);return S==="Object"&&w.constructor&&(S=w.constructor.name),S==="Map"||S==="Set"?Array.from(w):S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S)?xe(w,_):void 0}}(f)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),l.default.element(x)&&(x=(0,E.getElementRect)(x)),x},ae.tlbrToXywh=function(i){return!i||"x"in i&&"y"in i||((i=(0,V.default)({},i)).x=i.left||0,i.y=i.top||0,i.width=i.width||(i.right||0)-i.x,i.height=i.height||(i.bottom||0)-i.y),i},ae.xywhToTlbr=function(i){return!i||"left"in i&&"top"in i||((i=(0,V.default)({},i)).left=i.x||0,i.top=i.y||0,i.right=i.right||i.left+i.width,i.bottom=i.bottom||i.top+i.height),i};var de={};Object.defineProperty(de,"__esModule",{value:!0}),de.default=function(i,s,c){var u=i.options[c],f=u&&u.origin||i.options.origin,x=(0,ae.resolveRectLike)(f,i,s,[i&&s]);return(0,ae.rectToXY)(x)||{x:0,y:0}};var pe={};function Ie(i){return i.trim().split(/ +/)}Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=function i(s,c,u){if(u=u||{},l.default.string(s)&&s.search(" ")!==-1&&(s=Ie(s)),l.default.array(s))return s.reduce(function(S,D){return(0,V.default)(S,i(D,c,u))},u);if(l.default.object(s)&&(c=s,s=""),l.default.func(c))u[s]=u[s]||[],u[s].push(c);else if(l.default.array(c))for(var f=0;f<c.length;f++){var x;x=c[f],i(s,x,u)}else if(l.default.object(c))for(var w in c){var _=Ie(w).map(function(S){return"".concat(s).concat(S)});i(_,c[w],u)}return u};var ee={};Object.defineProperty(ee,"__esModule",{value:!0}),ee.default=void 0,ee.default=function(i,s){return Math.sqrt(i*i+s*s)};var fe={};Object.defineProperty(fe,"__esModule",{value:!0}),fe.default=function(i,s){i.__set||(i.__set={});var c=function(f){typeof i[f]!="function"&&f!=="__set"&&Object.defineProperty(i,f,{get:function(){return f in i.__set?i.__set[f]:i.__set[f]=s[f]},set:function(x){i.__set[f]=x},configurable:!0})};for(var u in s)c(u);return i};var te={};function $(i){return i instanceof P.default.Event||i instanceof P.default.Touch}function Ce(i,s,c){return i=i||"page",(c=c||{}).x=s[i+"X"],c.y=s[i+"Y"],c}function De(i,s){return s=s||{x:0,y:0},L.default.isOperaMobile&&$(i)?(Ce("screen",i,s),s.x+=window.scrollX,s.y+=window.scrollY):Ce("page",i,s),s}function Le(i,s){return s=s||{},L.default.isOperaMobile&&$(i)?Ce("screen",i,s):Ce("client",i,s),s}function Ae(i){var s=[];return l.default.array(i)?(s[0]=i[0],s[1]=i[1]):i.type==="touchend"?i.touches.length===1?(s[0]=i.touches[0],s[1]=i.changedTouches[0]):i.touches.length===0&&(s[0]=i.changedTouches[0],s[1]=i.changedTouches[1]):(s[0]=i.touches[0],s[1]=i.touches[1]),s}function Be(i){for(var s={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},c=0;c<i.length;c++){var u=i[c];for(var f in s)s[f]+=u[f]}for(var x in s)s[x]/=i.length;return s}Object.defineProperty(te,"__esModule",{value:!0}),te.coordsToEvent=function(i){return{coords:i,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},te.copyCoords=function(i,s){i.page=i.page||{},i.page.x=s.page.x,i.page.y=s.page.y,i.client=i.client||{},i.client.x=s.client.x,i.client.y=s.client.y,i.timeStamp=s.timeStamp},te.getClientXY=Le,te.getEventTargets=function(i){var s=l.default.func(i.composedPath)?i.composedPath():i.path;return[E.getActualElement(s?s[0]:i.target),E.getActualElement(i.currentTarget)]},te.getPageXY=De,te.getPointerId=function(i){return l.default.number(i.pointerId)?i.pointerId:i.identifier},te.getPointerType=function(i){return l.default.string(i.pointerType)?i.pointerType:l.default.number(i.pointerType)?[void 0,void 0,"touch","pen","mouse"][i.pointerType]:/touch/.test(i.type||"")||i instanceof P.default.Touch?"touch":"mouse"},te.getTouchPair=Ae,te.getXY=Ce,te.isNativePointer=$,te.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},te.pointerAverage=Be,Object.defineProperty(te,"pointerExtend",{enumerable:!0,get:function(){return fe.default}}),te.setCoordDeltas=function(i,s,c){i.page.x=c.page.x-s.page.x,i.page.y=c.page.y-s.page.y,i.client.x=c.client.x-s.client.x,i.client.y=c.client.y-s.client.y,i.timeStamp=c.timeStamp-s.timeStamp},te.setCoordVelocity=function(i,s){var c=Math.max(s.timeStamp/1e3,.001);i.page.x=s.page.x/c,i.page.y=s.page.y/c,i.client.x=s.client.x/c,i.client.y=s.client.y/c,i.timeStamp=c},te.setCoords=function(i,s,c){var u=s.length>1?Be(s):s[0];De(u,i.page),Le(u,i.client),i.timeStamp=c},te.setZeroCoords=function(i){i.page.x=0,i.page.y=0,i.client.x=0,i.client.y=0},te.touchAngle=function(i,s){var c=s+"X",u=s+"Y",f=Ae(i),x=f[1][c]-f[0][c],w=f[1][u]-f[0][u];return 180*Math.atan2(w,x)/Math.PI},te.touchBBox=function(i){if(!i.length)return null;var s=Ae(i),c=Math.min(s[0].pageX,s[1].pageX),u=Math.min(s[0].pageY,s[1].pageY),f=Math.max(s[0].pageX,s[1].pageX),x=Math.max(s[0].pageY,s[1].pageY);return{x:c,y:u,left:c,top:u,right:f,bottom:x,width:f-c,height:x-u}},te.touchDistance=function(i,s){var c=s+"X",u=s+"Y",f=Ae(i),x=f[0][c]-f[1][c],w=f[0][u]-f[1][u];return(0,ee.default)(x,w)};var He={};function Ze(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function rt(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}Object.defineProperty(He,"__esModule",{value:!0}),He.BaseEvent=void 0;var Ct=function(){function i(u){(function(f,x){if(!(f instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),rt(this,"immediatePropagationStopped",!1),rt(this,"propagationStopped",!1),this._interaction=u}var s,c;return s=i,(c=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&Ze(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),i}();He.BaseEvent=Ct,Object.defineProperty(Ct.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var qe={};Object.defineProperty(qe,"__esModule",{value:!0}),qe.remove=qe.merge=qe.from=qe.findIndex=qe.find=qe.contains=void 0,qe.contains=function(i,s){return i.indexOf(s)!==-1},qe.remove=function(i,s){return i.splice(i.indexOf(s),1)};var Pt=function(i,s){for(var c=0;c<s.length;c++){var u=s[c];i.push(u)}return i};qe.merge=Pt,qe.from=function(i){return Pt([],i)};var At=function(i,s){for(var c=0;c<i.length;c++)if(s(i[c],c,i))return c;return-1};qe.findIndex=At,qe.find=function(i,s){return i[At(i,s)]};var at={};function dt(i){return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},dt(i)}function en(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Ut(i,s){return Ut=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Ut(i,s)}function I(i,s){if(s&&(dt(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(i)}function T(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ie(i){return ie=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},ie(i)}function ve(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}Object.defineProperty(at,"__esModule",{value:!0}),at.DropEvent=void 0;var _e=function(i){(function(_,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(S&&S.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),S&&Ut(_,S)})(w,i);var s,c,u,f,x=(u=w,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var _,S=ie(u);if(f){var D=ie(this).constructor;_=Reflect.construct(S,arguments,D)}else _=S.apply(this,arguments);return I(this,_)});function w(_,S,D){var U;(function(q,he){if(!(q instanceof he))throw new TypeError("Cannot call a class as a function")})(this,w),ve(T(U=x.call(this,S._interaction)),"dropzone",void 0),ve(T(U),"dragEvent",void 0),ve(T(U),"relatedTarget",void 0),ve(T(U),"draggable",void 0),ve(T(U),"propagationStopped",!1),ve(T(U),"immediatePropagationStopped",!1);var k=D==="dragleave"?_.prev:_.cur,J=k.element,oe=k.dropzone;return U.type=D,U.target=J,U.currentTarget=J,U.dropzone=oe,U.dragEvent=S,U.relatedTarget=S.target,U.draggable=S.interactable,U.timeStamp=S.timeStamp,U}return s=w,(c=[{key:"reject",value:function(){var _=this,S=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&S.cur.dropzone===this.dropzone&&S.cur.element===this.target)if(S.prev.dropzone=this.dropzone,S.prev.element=this.target,S.rejected=!0,S.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var D=S.activeDrops,U=qe.findIndex(D,function(J){var oe=J.dropzone,q=J.element;return oe===_.dropzone&&q===_.target});S.activeDrops.splice(U,1);var k=new w(S,this.dragEvent,"dropdeactivate");k.dropzone=this.dropzone,k.target=this.target,this.dropzone.fire(k)}else this.dropzone.fire(new w(S,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&en(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),w}(He.BaseEvent);at.DropEvent=_e;var Se={};function ze(i,s){for(var c=0;c<i.slice().length;c++){var u=i.slice()[c],f=u.dropzone,x=u.element;s.dropzone=f,s.target=x,f.fire(s),s.propagationStopped=s.immediatePropagationStopped=!1}}function z(i,s){for(var c=function(x,w){for(var _=x.interactables,S=[],D=0;D<_.list.length;D++){var U=_.list[D];if(U.options.drop.enabled){var k=U.options.drop.accept;if(!(l.default.element(k)&&k!==w||l.default.string(k)&&!E.matchesSelector(w,k)||l.default.func(k)&&!k({dropzone:U,draggableElement:w})))for(var J=l.default.string(U.target)?U._context.querySelectorAll(U.target):l.default.array(U.target)?U.target:[U.target],oe=0;oe<J.length;oe++){var q=J[oe];q!==w&&S.push({dropzone:U,element:q,rect:U.getRect(q)})}}}return S}(i,s),u=0;u<c.length;u++){var f=c[u];f.rect=f.dropzone.getRect(f.element)}return c}function X(i,s,c){for(var u=i.dropState,f=i.interactable,x=i.element,w=[],_=0;_<u.activeDrops.length;_++){var S=u.activeDrops[_],D=S.dropzone,U=S.element,k=S.rect;w.push(D.dropCheck(s,c,f,x,U,k)?U:null)}var J=E.indexOfDeepestElement(w);return u.activeDrops[J]||null}function we(i,s,c){var u=i.dropState,f={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return c.type==="dragstart"&&(f.activate=new at.DropEvent(u,c,"dropactivate"),f.activate.target=null,f.activate.dropzone=null),c.type==="dragend"&&(f.deactivate=new at.DropEvent(u,c,"dropdeactivate"),f.deactivate.target=null,f.deactivate.dropzone=null),u.rejected||(u.cur.element!==u.prev.element&&(u.prev.dropzone&&(f.leave=new at.DropEvent(u,c,"dragleave"),c.dragLeave=f.leave.target=u.prev.element,c.prevDropzone=f.leave.dropzone=u.prev.dropzone),u.cur.dropzone&&(f.enter=new at.DropEvent(u,c,"dragenter"),c.dragEnter=u.cur.element,c.dropzone=u.cur.dropzone)),c.type==="dragend"&&u.cur.dropzone&&(f.drop=new at.DropEvent(u,c,"drop"),c.dropzone=u.cur.dropzone,c.relatedTarget=u.cur.element),c.type==="dragmove"&&u.cur.dropzone&&(f.move=new at.DropEvent(u,c,"dropmove"),f.move.dragmove=c,c.dropzone=u.cur.dropzone)),f}function ye(i,s){var c=i.dropState,u=c.activeDrops,f=c.cur,x=c.prev;s.leave&&x.dropzone.fire(s.leave),s.enter&&f.dropzone.fire(s.enter),s.move&&f.dropzone.fire(s.move),s.drop&&f.dropzone.fire(s.drop),s.deactivate&&ze(u,s.deactivate),c.prev.dropzone=f.dropzone,c.prev.element=f.element}function Oe(i,s){var c=i.interaction,u=i.iEvent,f=i.event;if(u.type==="dragmove"||u.type==="dragend"){var x=c.dropState;s.dynamicDrop&&(x.activeDrops=z(s,c.element));var w=u,_=X(c,w,f);x.rejected=x.rejected&&!!_&&_.dropzone===x.cur.dropzone&&_.element===x.cur.element,x.cur.dropzone=_&&_.dropzone,x.cur.element=_&&_.element,x.events=we(c,0,w)}}Object.defineProperty(Se,"__esModule",{value:!0}),Se.default=void 0;var Ne={id:"actions/drop",install:function(i){var s=i.actions,c=i.interactStatic,u=i.Interactable,f=i.defaults;i.usePlugin(v.default),u.prototype.dropzone=function(x){return function(w,_){if(l.default.object(_)){if(w.options.drop.enabled=_.enabled!==!1,_.listeners){var S=(0,pe.default)(_.listeners),D=Object.keys(S).reduce(function(U,k){return U[/^(enter|leave)/.test(k)?"drag".concat(k):/^(activate|deactivate|move)/.test(k)?"drop".concat(k):k]=S[k],U},{});w.off(w.options.drop.listeners),w.on(D),w.options.drop.listeners=D}return l.default.func(_.ondrop)&&w.on("drop",_.ondrop),l.default.func(_.ondropactivate)&&w.on("dropactivate",_.ondropactivate),l.default.func(_.ondropdeactivate)&&w.on("dropdeactivate",_.ondropdeactivate),l.default.func(_.ondragenter)&&w.on("dragenter",_.ondragenter),l.default.func(_.ondragleave)&&w.on("dragleave",_.ondragleave),l.default.func(_.ondropmove)&&w.on("dropmove",_.ondropmove),/^(pointer|center)$/.test(_.overlap)?w.options.drop.overlap=_.overlap:l.default.number(_.overlap)&&(w.options.drop.overlap=Math.max(Math.min(1,_.overlap),0)),"accept"in _&&(w.options.drop.accept=_.accept),"checker"in _&&(w.options.drop.checker=_.checker),w}return l.default.bool(_)?(w.options.drop.enabled=_,w):w.options.drop}(this,x)},u.prototype.dropCheck=function(x,w,_,S,D,U){return function(k,J,oe,q,he,be,me){var Ue=!1;if(!(me=me||k.getRect(be)))return!!k.options.drop.checker&&k.options.drop.checker(J,oe,Ue,k,be,q,he);var Ge=k.options.drop.overlap;if(Ge==="pointer"){var Xe=(0,de.default)(q,he,"drag"),ut=te.getPageXY(J);ut.x+=Xe.x,ut.y+=Xe.y;var gt=ut.x>me.left&&ut.x<me.right,ot=ut.y>me.top&&ut.y<me.bottom;Ue=gt&&ot}var pt=q.getRect(he);if(pt&&Ge==="center"){var En=pt.left+pt.width/2,Qn=pt.top+pt.height/2;Ue=En>=me.left&&En<=me.right&&Qn>=me.top&&Qn<=me.bottom}return pt&&l.default.number(Ge)&&(Ue=Math.max(0,Math.min(me.right,pt.right)-Math.max(me.left,pt.left))*Math.max(0,Math.min(me.bottom,pt.bottom)-Math.max(me.top,pt.top))/(pt.width*pt.height)>=Ge),k.options.drop.checker&&(Ue=k.options.drop.checker(J,oe,Ue,k,be,q,he)),Ue}(this,x,w,_,S,D,U)},c.dynamicDrop=function(x){return l.default.bool(x)?(i.dynamicDrop=x,c):i.dynamicDrop},(0,V.default)(s.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),s.methodDict.drop="dropzone",i.dynamicDrop=!1,f.actions.drop=Ne.defaults},listeners:{"interactions:before-action-start":function(i){var s=i.interaction;s.prepared.name==="drag"&&(s.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(i,s){var c=i.interaction,u=(i.event,i.iEvent);if(c.prepared.name==="drag"){var f=c.dropState;f.activeDrops=null,f.events=null,f.activeDrops=z(s,c.element),f.events=we(c,0,u),f.events.activate&&(ze(f.activeDrops,f.events.activate),s.fire("actions/drop:start",{interaction:c,dragEvent:u}))}},"interactions:action-move":Oe,"interactions:after-action-move":function(i,s){var c=i.interaction,u=i.iEvent;c.prepared.name==="drag"&&(ye(c,c.dropState.events),s.fire("actions/drop:move",{interaction:c,dragEvent:u}),c.dropState.events={})},"interactions:action-end":function(i,s){if(i.interaction.prepared.name==="drag"){var c=i.interaction,u=i.iEvent;Oe(i,s),ye(c,c.dropState.events),s.fire("actions/drop:end",{interaction:c,dragEvent:u})}},"interactions:stop":function(i){var s=i.interaction;if(s.prepared.name==="drag"){var c=s.dropState;c&&(c.activeDrops=null,c.events=null,c.cur.dropzone=null,c.cur.element=null,c.prev.dropzone=null,c.prev.element=null,c.rejected=!1)}}},getActiveDrops:z,getDrop:X,getDropEvents:we,fireDropEvents:ye,defaults:{enabled:!1,accept:null,overlap:"pointer"}},Fe=Ne;Se.default=Fe;var Ke={};function tt(i){var s=i.interaction,c=i.iEvent,u=i.phase;if(s.prepared.name==="gesture"){var f=s.pointers.map(function(D){return D.pointer}),x=u==="start",w=u==="end",_=s.interactable.options.deltaSource;if(c.touches=[f[0],f[1]],x)c.distance=te.touchDistance(f,_),c.box=te.touchBBox(f),c.scale=1,c.ds=0,c.angle=te.touchAngle(f,_),c.da=0,s.gesture.startDistance=c.distance,s.gesture.startAngle=c.angle;else if(w){var S=s.prevEvent;c.distance=S.distance,c.box=S.box,c.scale=S.scale,c.ds=0,c.angle=S.angle,c.da=0}else c.distance=te.touchDistance(f,_),c.box=te.touchBBox(f),c.scale=c.distance/s.gesture.startDistance,c.angle=te.touchAngle(f,_),c.ds=c.scale-s.gesture.scale,c.da=c.angle-s.gesture.angle;s.gesture.distance=c.distance,s.gesture.angle=c.angle,l.default.number(c.scale)&&c.scale!==1/0&&!isNaN(c.scale)&&(s.gesture.scale=c.scale)}}Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.default=void 0;var lt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(i){var s=i.actions,c=i.Interactable,u=i.defaults;c.prototype.gesturable=function(f){return l.default.object(f)?(this.options.gesture.enabled=f.enabled!==!1,this.setPerAction("gesture",f),this.setOnEvents("gesture",f),this):l.default.bool(f)?(this.options.gesture.enabled=f,this):this.options.gesture},s.map.gesture=lt,s.methodDict.gesture="gesturable",u.actions.gesture=lt.defaults},listeners:{"interactions:action-start":tt,"interactions:action-move":tt,"interactions:action-end":tt,"interactions:new":function(i){i.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(i){if(!(i.interaction.pointers.length<2)){var s=i.interactable.options.gesture;if(s&&s.enabled)return i.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},G=lt;Ke.default=G;var re={};function ge(i,s,c,u,f,x,w){if(!s)return!1;if(s===!0){var _=l.default.number(x.width)?x.width:x.right-x.left,S=l.default.number(x.height)?x.height:x.bottom-x.top;if(w=Math.min(w,Math.abs((i==="left"||i==="right"?_:S)/2)),_<0&&(i==="left"?i="right":i==="right"&&(i="left")),S<0&&(i==="top"?i="bottom":i==="bottom"&&(i="top")),i==="left"){var D=_>=0?x.left:x.right;return c.x<D+w}if(i==="top"){var U=S>=0?x.top:x.bottom;return c.y<U+w}if(i==="right")return c.x>(_>=0?x.right:x.left)-w;if(i==="bottom")return c.y>(S>=0?x.bottom:x.top)-w}return!!l.default.element(u)&&(l.default.element(s)?s===u:E.matchesUpTo(u,s,f))}function Te(i){var s=i.iEvent,c=i.interaction;if(c.prepared.name==="resize"&&c.resizeAxes){var u=s;c.interactable.options.resize.square?(c.resizeAxes==="y"?u.delta.x=u.delta.y:u.delta.y=u.delta.x,u.axes="xy"):(u.axes=c.resizeAxes,c.resizeAxes==="x"?u.delta.y=0:c.resizeAxes==="y"&&(u.delta.x=0))}}Object.defineProperty(re,"__esModule",{value:!0}),re.default=void 0;var Ee={id:"actions/resize",before:["actions/drag"],install:function(i){var s=i.actions,c=i.browser,u=i.Interactable,f=i.defaults;Ee.cursors=function(x){return x.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(c),Ee.defaultMargin=c.supportsTouch||c.supportsPointerEvent?20:10,u.prototype.resizable=function(x){return function(w,_,S){return l.default.object(_)?(w.options.resize.enabled=_.enabled!==!1,w.setPerAction("resize",_),w.setOnEvents("resize",_),l.default.string(_.axis)&&/^x$|^y$|^xy$/.test(_.axis)?w.options.resize.axis=_.axis:_.axis===null&&(w.options.resize.axis=S.defaults.actions.resize.axis),l.default.bool(_.preserveAspectRatio)?w.options.resize.preserveAspectRatio=_.preserveAspectRatio:l.default.bool(_.square)&&(w.options.resize.square=_.square),w):l.default.bool(_)?(w.options.resize.enabled=_,w):w.options.resize}(this,x,i)},s.map.resize=Ee,s.methodDict.resize="resizable",f.actions.resize=Ee.defaults},listeners:{"interactions:new":function(i){i.interaction.resizeAxes="xy"},"interactions:action-start":function(i){(function(s){var c=s.iEvent,u=s.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var f=c,x=u.rect;u._rects={start:(0,V.default)({},x),corrected:(0,V.default)({},x),previous:(0,V.default)({},x),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},f.edges=u.prepared.edges,f.rect=u._rects.corrected,f.deltaRect=u._rects.delta}})(i),Te(i)},"interactions:action-move":function(i){(function(s){var c=s.iEvent,u=s.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var f=c,x=u.interactable.options.resize.invert,w=x==="reposition"||x==="negate",_=u.rect,S=u._rects,D=S.start,U=S.corrected,k=S.delta,J=S.previous;if((0,V.default)(J,U),w){if((0,V.default)(U,_),x==="reposition"){if(U.top>U.bottom){var oe=U.top;U.top=U.bottom,U.bottom=oe}if(U.left>U.right){var q=U.left;U.left=U.right,U.right=q}}}else U.top=Math.min(_.top,D.bottom),U.bottom=Math.max(_.bottom,D.top),U.left=Math.min(_.left,D.right),U.right=Math.max(_.right,D.left);for(var he in U.width=U.right-U.left,U.height=U.bottom-U.top,U)k[he]=U[he]-J[he];f.edges=u.prepared.edges,f.rect=U,f.deltaRect=k}})(i),Te(i)},"interactions:action-end":function(i){var s=i.iEvent,c=i.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var u=s;u.edges=c.prepared.edges,u.rect=c._rects.corrected,u.deltaRect=c._rects.delta}},"auto-start:check":function(i){var s=i.interaction,c=i.interactable,u=i.element,f=i.rect,x=i.buttons;if(f){var w=(0,V.default)({},s.coords.cur.page),_=c.options.resize;if(_&&_.enabled&&(!s.pointerIsDown||!/mouse|pointer/.test(s.pointerType)||x&_.mouseButtons)){if(l.default.object(_.edges)){var S={left:!1,right:!1,top:!1,bottom:!1};for(var D in S)S[D]=ge(D,_.edges[D],w,s._latestPointer.eventTarget,u,f,_.margin||Ee.defaultMargin);S.left=S.left&&!S.right,S.top=S.top&&!S.bottom,(S.left||S.right||S.top||S.bottom)&&(i.action={name:"resize",edges:S})}else{var U=_.axis!=="y"&&w.x>f.right-Ee.defaultMargin,k=_.axis!=="x"&&w.y>f.bottom-Ee.defaultMargin;(U||k)&&(i.action={name:"resize",axes:(U?"x":"")+(k?"y":"")})}return!i.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(i){var s=i.edges,c=i.axis,u=i.name,f=Ee.cursors,x=null;if(c)x=f[u+c];else if(s){for(var w="",_=["top","bottom","left","right"],S=0;S<_.length;S++){var D=_[S];s[D]&&(w+=D)}x=f[w]}return x},defaultMargin:null},ft=Ee;re.default=ft;var yt={};Object.defineProperty(yt,"__esModule",{value:!0}),yt.default=void 0;var qt={id:"actions",install:function(i){i.usePlugin(Ke.default),i.usePlugin(re.default),i.usePlugin(v.default),i.usePlugin(Se.default)}};yt.default=qt;var Et={};Object.defineProperty(Et,"__esModule",{value:!0}),Et.default=void 0;var ct,Lt,xn=0,Do={request:function(i){return ct(i)},cancel:function(i){return Lt(i)},init:function(i){if(ct=i.requestAnimationFrame,Lt=i.cancelAnimationFrame,!ct)for(var s=["ms","moz","webkit","o"],c=0;c<s.length;c++){var u=s[c];ct=i["".concat(u,"RequestAnimationFrame")],Lt=i["".concat(u,"CancelAnimationFrame")]||i["".concat(u,"CancelRequestAnimationFrame")]}ct=ct&&ct.bind(i),Lt=Lt&&Lt.bind(i),ct||(ct=function(f){var x=Date.now(),w=Math.max(0,16-(x-xn)),_=i.setTimeout(function(){f(x+w)},w);return xn=x+w,_},Lt=function(f){return clearTimeout(f)})}};Et.default=Do;var An={};Object.defineProperty(An,"__esModule",{value:!0}),An.default=void 0,An.getContainer=R,An.getScroll=K,An.getScrollSize=function(i){return l.default.window(i)&&(i=window.document.body),{x:i.scrollWidth,y:i.scrollHeight}},An.getScrollSizeDelta=function(i,s){var c=i.interaction,u=i.element,f=c&&c.interactable.options[c.prepared.name].autoScroll;if(!f||!f.enabled)return s(),{x:0,y:0};var x=R(f.container,c.interactable,u),w=K(x);s();var _=K(x);return{x:_.x-w.x,y:_.y-w.y}};var Ve={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(i){Ve.isScrolling=!0,Et.default.cancel(Ve.i),i.autoScroll=Ve,Ve.interaction=i,Ve.prevTime=Ve.now(),Ve.i=Et.default.request(Ve.scroll)},stop:function(){Ve.isScrolling=!1,Ve.interaction&&(Ve.interaction.autoScroll=null),Et.default.cancel(Ve.i)},scroll:function(){var i=Ve.interaction,s=i.interactable,c=i.element,u=i.prepared.name,f=s.options[u].autoScroll,x=R(f.container,s,c),w=Ve.now(),_=(w-Ve.prevTime)/1e3,S=f.speed*_;if(S>=1){var D={x:Ve.x*S,y:Ve.y*S};if(D.x||D.y){var U=K(x);l.default.window(x)?x.scrollBy(D.x,D.y):x&&(x.scrollLeft+=D.x,x.scrollTop+=D.y);var k=K(x),J={x:k.x-U.x,y:k.y-U.y};(J.x||J.y)&&s.fire({type:"autoscroll",target:c,interactable:s,delta:J,interaction:i,container:x})}Ve.prevTime=w}Ve.isScrolling&&(Et.default.cancel(Ve.i),Ve.i=Et.default.request(Ve.scroll))},check:function(i,s){var c;return(c=i.options[s].autoScroll)==null?void 0:c.enabled},onInteractionMove:function(i){var s=i.interaction,c=i.pointer;if(s.interacting()&&Ve.check(s.interactable,s.prepared.name))if(s.simulation)Ve.x=Ve.y=0;else{var u,f,x,w,_=s.interactable,S=s.element,D=s.prepared.name,U=_.options[D].autoScroll,k=R(U.container,_,S);if(l.default.window(k))w=c.clientX<Ve.margin,u=c.clientY<Ve.margin,f=c.clientX>k.innerWidth-Ve.margin,x=c.clientY>k.innerHeight-Ve.margin;else{var J=E.getElementClientRect(k);w=c.clientX<J.left+Ve.margin,u=c.clientY<J.top+Ve.margin,f=c.clientX>J.right-Ve.margin,x=c.clientY>J.bottom-Ve.margin}Ve.x=f?1:w?-1:0,Ve.y=x?1:u?-1:0,Ve.isScrolling||(Ve.margin=U.margin,Ve.speed=U.speed,Ve.start(s))}}};function R(i,s,c){return(l.default.string(i)?(0,ae.getStringOptionResult)(i,s,c):i)||(0,n.getWindow)(c)}function K(i){return l.default.window(i)&&(i=window.document.body),{x:i.scrollLeft,y:i.scrollTop}}var se={id:"auto-scroll",install:function(i){var s=i.defaults,c=i.actions;i.autoScroll=Ve,Ve.now=function(){return i.now()},c.phaselessTypes.autoscroll=!0,s.perAction.autoScroll=Ve.defaults},listeners:{"interactions:new":function(i){i.interaction.autoScroll=null},"interactions:destroy":function(i){i.interaction.autoScroll=null,Ve.stop(),Ve.interaction&&(Ve.interaction=null)},"interactions:stop":Ve.stop,"interactions:action-move":function(i){return Ve.onInteractionMove(i)}}},Y=se;An.default=Y;var ne={};Object.defineProperty(ne,"__esModule",{value:!0}),ne.copyAction=function(i,s){return i.name=s.name,i.axis=s.axis,i.edges=s.edges,i},ne.sign=void 0,ne.warnOnce=function(i,s){var c=!1;return function(){return c||(n.window.console.warn(s),c=!0),i.apply(this,arguments)}},ne.sign=function(i){return i>=0?1:-1};var ke={};function je(i){return l.default.bool(i)?(this.options.styleCursor=i,this):i===null?(delete this.options.styleCursor,this):this.options.styleCursor}function $e(i){return l.default.func(i)?(this.options.actionChecker=i,this):i===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(ke,"__esModule",{value:!0}),ke.default=void 0;var Qe={id:"auto-start/interactableMethods",install:function(i){var s=i.Interactable;s.prototype.getAction=function(c,u,f,x){var w=function(_,S,D,U,k){var J=_.getRect(U),oe={action:null,interactable:_,interaction:D,element:U,rect:J,buttons:S.buttons||{0:1,1:4,3:8,4:16}[S.button]};return k.fire("auto-start:check",oe),oe.action}(this,u,f,x,i);return this.options.actionChecker?this.options.actionChecker(c,u,w,this,x,f):w},s.prototype.ignoreFrom=(0,ne.warnOnce)(function(c){return this._backCompatOption("ignoreFrom",c)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),s.prototype.allowFrom=(0,ne.warnOnce)(function(c){return this._backCompatOption("allowFrom",c)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),s.prototype.actionChecker=$e,s.prototype.styleCursor=je}};ke.default=Qe;var Je={};function nt(i,s,c,u,f){return s.testIgnoreAllow(s.options[i.name],c,u)&&s.options[i.name].enabled&&un(s,c,i,f)?i:null}function st(i,s,c,u,f,x,w){for(var _=0,S=u.length;_<S;_++){var D=u[_],U=f[_],k=D.getAction(s,c,i,U);if(k){var J=nt(k,D,U,x,w);if(J)return{action:J,interactable:D,element:U}}}return{action:null,interactable:null,element:null}}function Mt(i,s,c,u,f){var x=[],w=[],_=u;function S(U){x.push(U),w.push(_)}for(;l.default.element(_);){x=[],w=[],f.interactables.forEachMatch(_,S);var D=st(i,s,c,x,w,u,f);if(D.action&&!D.interactable.options[D.action.name].manualStart)return D;_=E.parentNode(_)}return{action:null,interactable:null,element:null}}function $t(i,s,c){var u=s.action,f=s.interactable,x=s.element;u=u||{name:null},i.interactable=f,i.element=x,(0,ne.copyAction)(i.prepared,u),i.rect=f&&u.name?f.getRect(x):null,it(i,c),c.fire("autoStart:prepared",{interaction:i})}function un(i,s,c,u){var f=i.options,x=f[c.name].max,w=f[c.name].maxPerElement,_=u.autoStart.maxInteractions,S=0,D=0,U=0;if(!(x&&w&&_))return!1;for(var k=0;k<u.interactions.list.length;k++){var J=u.interactions.list[k],oe=J.prepared.name;if(J.interacting()&&(++S>=_||J.interactable===i&&((D+=oe===c.name?1:0)>=x||J.element===s&&(U++,oe===c.name&&U>=w))))return!1}return _>0}function Bn(i,s){return l.default.number(i)?(s.autoStart.maxInteractions=i,this):s.autoStart.maxInteractions}function bt(i,s,c){var u=c.autoStart.cursorElement;u&&u!==i&&(u.style.cursor=""),i.ownerDocument.documentElement.style.cursor=s,i.style.cursor=s,c.autoStart.cursorElement=s?i:null}function it(i,s){var c=i.interactable,u=i.element,f=i.prepared;if(i.pointerType==="mouse"&&c&&c.options.styleCursor){var x="";if(f.name){var w=c.options[f.name].cursorChecker;x=l.default.func(w)?w(f,c,u,i._interacting):s.actions.map[f.name].getCursor(f)}bt(i.element,x||"",s)}else s.autoStart.cursorElement&&bt(s.autoStart.cursorElement,"",s)}Object.defineProperty(Je,"__esModule",{value:!0}),Je.default=void 0;var Tr={id:"auto-start/base",before:["actions"],install:function(i){var s=i.interactStatic,c=i.defaults;i.usePlugin(ke.default),c.base.actionChecker=null,c.base.styleCursor=!0,(0,V.default)(c.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),s.maxInteractions=function(u){return Bn(u,i)},i.autoStart={maxInteractions:1/0,withinInteractionLimit:un,cursorElement:null}},listeners:{"interactions:down":function(i,s){var c=i.interaction,u=i.pointer,f=i.event,x=i.eventTarget;c.interacting()||$t(c,Mt(c,u,f,x,s),s)},"interactions:move":function(i,s){(function(c,u){var f=c.interaction,x=c.pointer,w=c.event,_=c.eventTarget;f.pointerType!=="mouse"||f.pointerIsDown||f.interacting()||$t(f,Mt(f,x,w,_,u),u)})(i,s),function(c,u){var f=c.interaction;if(f.pointerIsDown&&!f.interacting()&&f.pointerWasMoved&&f.prepared.name){u.fire("autoStart:before-start",c);var x=f.interactable,w=f.prepared.name;w&&x&&(x.options[w].manualStart||!un(x,f.element,f.prepared,u)?f.stop():(f.start(f.prepared,x,f.element),it(f,u)))}}(i,s)},"interactions:stop":function(i,s){var c=i.interaction,u=c.interactable;u&&u.options.styleCursor&&bt(c.element,"",s)}},maxInteractions:Bn,withinInteractionLimit:un,validateAction:nt},It=Tr;Je.default=It;var Sn={};Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.default=void 0;var Ss={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(i,s){var c=i.interaction,u=i.eventTarget,f=i.dx,x=i.dy;if(c.prepared.name==="drag"){var w=Math.abs(f),_=Math.abs(x),S=c.interactable.options.drag,D=S.startAxis,U=w>_?"x":w<_?"y":"xy";if(c.prepared.axis=S.lockAxis==="start"?U[0]:S.lockAxis,U!=="xy"&&D!=="xy"&&D!==U){c.prepared.name=null;for(var k=u,J=function(q){if(q!==c.interactable){var he=c.interactable.options.drag;if(!he.manualStart&&q.testIgnoreAllow(he,k,u)){var be=q.getAction(c.downPointer,c.downEvent,c,k);if(be&&be.name==="drag"&&function(me,Ue){if(!Ue)return!1;var Ge=Ue.options.drag.startAxis;return me==="xy"||Ge==="xy"||Ge===me}(U,q)&&Je.default.validateAction(be,q,k,u,s))return q}}};l.default.element(k);){var oe=s.interactables.forEachMatch(k,J);if(oe){c.prepared.name="drag",c.interactable=oe,c.element=k;break}k=(0,E.parentNode)(k)}}}}}};Sn.default=Ss;var Gn={};function Si(i){var s=i.prepared&&i.prepared.name;if(!s)return null;var c=i.interactable.options;return c[s].hold||c[s].delay}Object.defineProperty(Gn,"__esModule",{value:!0}),Gn.default=void 0;var Xt={id:"auto-start/hold",install:function(i){var s=i.defaults;i.usePlugin(Je.default),s.perAction.hold=0,s.perAction.delay=0},listeners:{"interactions:new":function(i){i.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(i){var s=i.interaction,c=Si(s);c>0&&(s.autoStartHoldTimer=setTimeout(function(){s.start(s.prepared,s.interactable,s.element)},c))},"interactions:move":function(i){var s=i.interaction,c=i.duplicate;s.autoStartHoldTimer&&s.pointerWasMoved&&!c&&(clearTimeout(s.autoStartHoldTimer),s.autoStartHoldTimer=null)},"autoStart:before-start":function(i){var s=i.interaction;Si(s)>0&&(s.prepared.name=null)}},getHoldDuration:Si},Yn=Xt;Gn.default=Yn;var Zn={};Object.defineProperty(Zn,"__esModule",{value:!0}),Zn.default=void 0;var tn={id:"auto-start",install:function(i){i.usePlugin(Je.default),i.usePlugin(Gn.default),i.usePlugin(Sn.default)}};Zn.default=tn;var Dn={};function Ro(i){return/^(always|never|auto)$/.test(i)?(this.options.preventDefault=i,this):l.default.bool(i)?(this.options.preventDefault=i?"always":"never",this):this.options.preventDefault}function ws(i){var s=i.interaction,c=i.event;s.interactable&&s.interactable.checkAndPreventDefault(c)}function yl(i){var s=i.Interactable;s.prototype.preventDefault=Ro,s.prototype.checkAndPreventDefault=function(c){return function(u,f,x){var w=u.options.preventDefault;if(w!=="never")if(w!=="always"){if(f.events.supportsPassive&&/^touch(start|move)$/.test(x.type)){var _=(0,n.getWindow)(x.target).document,S=f.getDocOptions(_);if(!S||!S.events||S.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(x.type)||l.default.element(x.target)&&(0,E.matchesSelector)(x.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||x.preventDefault()}else x.preventDefault()}(this,i,c)},i.interactions.docEvents.push({type:"dragstart",listener:function(c){for(var u=0;u<i.interactions.list.length;u++){var f=i.interactions.list[u];if(f.element&&(f.element===c.target||(0,E.nodeContains)(f.element,c.target)))return void f.interactable.checkAndPreventDefault(c)}}})}Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.default=void 0,Dn.install=yl;var hd={id:"core/interactablePreventDefault",install:yl,listeners:["down","move","up","cancel"].reduce(function(i,s){return i["interactions:".concat(s)]=ws,i},{})};Dn.default=hd;var Lo={};Object.defineProperty(Lo,"__esModule",{value:!0}),Lo.default=void 0,Lo.default={};var Cr,Es={};Object.defineProperty(Es,"__esModule",{value:!0}),Es.default=void 0,function(i){i.touchAction="touchAction",i.boxSizing="boxSizing",i.noListeners="noListeners"}(Cr||(Cr={})),Cr.touchAction,Cr.boxSizing,Cr.noListeners;var pd={id:"dev-tools",install:function(){}};Es.default=pd;var wi={};Object.defineProperty(wi,"__esModule",{value:!0}),wi.default=function i(s){var c={};for(var u in s){var f=s[u];l.default.plainObject(f)?c[u]=i(f):l.default.array(f)?c[u]=qe.from(f):c[u]=f}return c};var Ei={};function bl(i,s){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var x,w,_=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(x=f.next()).done)&&(_.push(x.value),!u||_.length!==u);S=!0);}catch(U){D=!0,w=U}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return _}}(i,s)||function(c,u){if(c){if(typeof c=="string")return Ml(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?Ml(c,u):void 0}}(i,s)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Ml(i,s){(s==null||s>i.length)&&(s=i.length);for(var c=0,u=Array(s);c<s;c++)u[c]=i[c];return u}function md(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Ti(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}Object.defineProperty(Ei,"__esModule",{value:!0}),Ei.default=void 0,Ei.getRectOffset=Sl;var gd=function(){function i(u){(function(f,x){if(!(f instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),Ti(this,"states",[]),Ti(this,"startOffset",{left:0,right:0,top:0,bottom:0}),Ti(this,"startDelta",void 0),Ti(this,"result",void 0),Ti(this,"endResult",void 0),Ti(this,"edges",void 0),Ti(this,"interaction",void 0),this.interaction=u,this.result=Ts()}var s,c;return s=i,(c=[{key:"start",value:function(u,f){var x=u.phase,w=this.interaction,_=function(D){var U=D.interactable.options[D.prepared.name],k=U.modifiers;return k&&k.length?k:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(J){var oe=U[J];return oe&&oe.enabled&&{options:oe,methods:oe._methods}}).filter(function(J){return!!J})}(w);this.prepareStates(_),this.edges=(0,V.default)({},w.edges),this.startOffset=Sl(w.rect,f),this.startDelta={x:0,y:0};var S=this.fillArg({phase:x,pageCoords:f,preEnd:!1});return this.result=Ts(),this.startAll(S),this.result=this.setAll(S)}},{key:"fillArg",value:function(u){var f=this.interaction;return u.interaction=f,u.interactable=f.interactable,u.element=f.element,u.rect=u.rect||f.rect,u.edges=this.edges,u.startOffset=this.startOffset,u}},{key:"startAll",value:function(u){for(var f=0;f<this.states.length;f++){var x=this.states[f];x.methods.start&&(u.state=x,x.methods.start(u))}}},{key:"setAll",value:function(u){var f=u.phase,x=u.preEnd,w=u.skipModifiers,_=u.rect;u.coords=(0,V.default)({},u.pageCoords),u.rect=(0,V.default)({},_);for(var S=w?this.states.slice(w):this.states,D=Ts(u.coords,u.rect),U=0;U<S.length;U++){var k,J=S[U],oe=J.options,q=(0,V.default)({},u.coords),he=null;(k=J.methods)!=null&&k.set&&this.shouldDo(oe,x,f)&&(u.state=J,he=J.methods.set(u),ae.addEdges(this.interaction.edges,u.rect,{x:u.coords.x-q.x,y:u.coords.y-q.y})),D.eventProps.push(he)}D.delta.x=u.coords.x-u.pageCoords.x,D.delta.y=u.coords.y-u.pageCoords.y,D.rectDelta.left=u.rect.left-_.left,D.rectDelta.right=u.rect.right-_.right,D.rectDelta.top=u.rect.top-_.top,D.rectDelta.bottom=u.rect.bottom-_.bottom;var be=this.result.coords,me=this.result.rect;if(be&&me){var Ue=D.rect.left!==me.left||D.rect.right!==me.right||D.rect.top!==me.top||D.rect.bottom!==me.bottom;D.changed=Ue||be.x!==D.coords.x||be.y!==D.coords.y}return D}},{key:"applyToInteraction",value:function(u){var f=this.interaction,x=u.phase,w=f.coords.cur,_=f.coords.start,S=this.result,D=this.startDelta,U=S.delta;x==="start"&&(0,V.default)(this.startDelta,S.delta);for(var k=0;k<[[_,D],[w,U]].length;k++){var J=bl([[_,D],[w,U]][k],2),oe=J[0],q=J[1];oe.page.x+=q.x,oe.page.y+=q.y,oe.client.x+=q.x,oe.client.y+=q.y}var he=this.result.rectDelta,be=u.rect||f.rect;be.left+=he.left,be.right+=he.right,be.top+=he.top,be.bottom+=he.bottom,be.width=be.right-be.left,be.height=be.bottom-be.top}},{key:"setAndApply",value:function(u){var f=this.interaction,x=u.phase,w=u.preEnd,_=u.skipModifiers,S=this.setAll(this.fillArg({preEnd:w,phase:x,pageCoords:u.modifiedCoords||f.coords.cur.page}));if(this.result=S,!S.changed&&(!_||_<this.states.length)&&f.interacting())return!1;if(u.modifiedCoords){var D=f.coords.cur.page,U={x:u.modifiedCoords.x-D.x,y:u.modifiedCoords.y-D.y};S.coords.x+=U.x,S.coords.y+=U.y,S.delta.x+=U.x,S.delta.y+=U.y}this.applyToInteraction(u)}},{key:"beforeEnd",value:function(u){var f=u.interaction,x=u.event,w=this.states;if(w&&w.length){for(var _=!1,S=0;S<w.length;S++){var D=w[S];u.state=D;var U=D.options,k=D.methods,J=k.beforeEnd&&k.beforeEnd(u);if(J)return this.endResult=J,!1;_=_||!_&&this.shouldDo(U,!0,u.phase,!0)}_&&f.move({event:x,preEnd:!0})}}},{key:"stop",value:function(u){var f=u.interaction;if(this.states&&this.states.length){var x=(0,V.default)({states:this.states,interactable:f.interactable,element:f.element,rect:null},u);this.fillArg(x);for(var w=0;w<this.states.length;w++){var _=this.states[w];x.state=_,_.methods.stop&&_.methods.stop(x)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(u){this.states=[];for(var f=0;f<u.length;f++){var x=u[f],w=x.options,_=x.methods,S=x.name;this.states.push({options:w,methods:_,index:f,name:S})}return this.states}},{key:"restoreInteractionCoords",value:function(u){var f=u.interaction,x=f.coords,w=f.rect,_=f.modification;if(_.result){for(var S=_.startDelta,D=_.result,U=D.delta,k=D.rectDelta,J=[[x.start,S],[x.cur,U]],oe=0;oe<J.length;oe++){var q=bl(J[oe],2),he=q[0],be=q[1];he.page.x-=be.x,he.page.y-=be.y,he.client.x-=be.x,he.client.y-=be.y}w.left-=k.left,w.right-=k.right,w.top-=k.top,w.bottom-=k.bottom}}},{key:"shouldDo",value:function(u,f,x,w){return!(!u||u.enabled===!1||w&&!u.endOnly||u.endOnly&&!f||x==="start"&&!u.setStart)}},{key:"copyFrom",value:function(u){this.startOffset=u.startOffset,this.startDelta=u.startDelta,this.edges=u.edges,this.states=u.states.map(function(f){return(0,wi.default)(f)}),this.result=Ts((0,V.default)({},u.result.coords),(0,V.default)({},u.result.rect))}},{key:"destroy",value:function(){for(var u in this)this[u]=null}}])&&md(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),i}();function Ts(i,s){return{rect:s,coords:i,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Sl(i,s){return i?{left:s.x-i.left,top:s.y-i.top,right:i.right-s.x,bottom:i.bottom-s.y}:{left:0,top:0,right:0,bottom:0}}Ei.default=gd;var Yt={};function Cs(i){var s=i.iEvent,c=i.interaction.modification.result;c&&(s.modifiers=c.eventProps)}Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.addEventModifiers=Cs,Yt.default=void 0,Yt.makeModifier=function(i,s){var c=i.defaults,u={start:i.start,set:i.set,beforeEnd:i.beforeEnd,stop:i.stop},f=function(x){var w=x||{};for(var _ in w.enabled=w.enabled!==!1,c)_ in w||(w[_]=c[_]);var S={options:w,methods:u,name:s,enable:function(){return w.enabled=!0,S},disable:function(){return w.enabled=!1,S}};return S};return s&&typeof s=="string"&&(f._defaults=c,f._methods=u),f};var vd={id:"modifiers/base",before:["actions"],install:function(i){i.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(i){var s=i.interaction;s.modification=new Ei.default(s)},"interactions:before-action-start":function(i){var s=i.interaction.modification;s.start(i,i.interaction.coords.start.page),i.interaction.edges=s.edges,s.applyToInteraction(i)},"interactions:before-action-move":function(i){return i.interaction.modification.setAndApply(i)},"interactions:before-action-end":function(i){return i.interaction.modification.beforeEnd(i)},"interactions:action-start":Cs,"interactions:action-move":Cs,"interactions:action-end":Cs,"interactions:after-action-start":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:after-action-move":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:stop":function(i){return i.interaction.modification.stop(i)}}},xd=vd;Yt.default=xd;var Pr={};Object.defineProperty(Pr,"__esModule",{value:!0}),Pr.defaults=void 0,Pr.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var Ar={};function Io(i){return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Io(i)}function _d(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Oo(i,s){return Oo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Oo(i,s)}function yd(i,s){if(s&&(Io(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ht(i)}function ht(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Ps(i){return Ps=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},Ps(i)}function vt(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.InteractEvent=void 0;var wl=function(i){(function(_,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(S&&S.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),S&&Oo(_,S)})(w,i);var s,c,u,f,x=(u=w,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var _,S=Ps(u);if(f){var D=Ps(this).constructor;_=Reflect.construct(S,arguments,D)}else _=S.apply(this,arguments);return yd(this,_)});function w(_,S,D,U,k,J,oe){var q;(function(gt,ot){if(!(gt instanceof ot))throw new TypeError("Cannot call a class as a function")})(this,w),vt(ht(q=x.call(this,_)),"relatedTarget",null),vt(ht(q),"screenX",void 0),vt(ht(q),"screenY",void 0),vt(ht(q),"button",void 0),vt(ht(q),"buttons",void 0),vt(ht(q),"ctrlKey",void 0),vt(ht(q),"shiftKey",void 0),vt(ht(q),"altKey",void 0),vt(ht(q),"metaKey",void 0),vt(ht(q),"page",void 0),vt(ht(q),"client",void 0),vt(ht(q),"delta",void 0),vt(ht(q),"rect",void 0),vt(ht(q),"x0",void 0),vt(ht(q),"y0",void 0),vt(ht(q),"t0",void 0),vt(ht(q),"dt",void 0),vt(ht(q),"duration",void 0),vt(ht(q),"clientX0",void 0),vt(ht(q),"clientY0",void 0),vt(ht(q),"velocity",void 0),vt(ht(q),"speed",void 0),vt(ht(q),"swipe",void 0),vt(ht(q),"axes",void 0),vt(ht(q),"preEnd",void 0),k=k||_.element;var he=_.interactable,be=(he&&he.options||Pr.defaults).deltaSource,me=(0,de.default)(he,k,D),Ue=U==="start",Ge=U==="end",Xe=Ue?ht(q):_.prevEvent,ut=Ue?_.coords.start:Ge?{page:Xe.page,client:Xe.client,timeStamp:_.coords.cur.timeStamp}:_.coords.cur;return q.page=(0,V.default)({},ut.page),q.client=(0,V.default)({},ut.client),q.rect=(0,V.default)({},_.rect),q.timeStamp=ut.timeStamp,Ge||(q.page.x-=me.x,q.page.y-=me.y,q.client.x-=me.x,q.client.y-=me.y),q.ctrlKey=S.ctrlKey,q.altKey=S.altKey,q.shiftKey=S.shiftKey,q.metaKey=S.metaKey,q.button=S.button,q.buttons=S.buttons,q.target=k,q.currentTarget=k,q.preEnd=J,q.type=oe||D+(U||""),q.interactable=he,q.t0=Ue?_.pointers[_.pointers.length-1].downTime:Xe.t0,q.x0=_.coords.start.page.x-me.x,q.y0=_.coords.start.page.y-me.y,q.clientX0=_.coords.start.client.x-me.x,q.clientY0=_.coords.start.client.y-me.y,q.delta=Ue||Ge?{x:0,y:0}:{x:q[be].x-Xe[be].x,y:q[be].y-Xe[be].y},q.dt=_.coords.delta.timeStamp,q.duration=q.timeStamp-q.t0,q.velocity=(0,V.default)({},_.coords.velocity[be]),q.speed=(0,ee.default)(q.velocity.x,q.velocity.y),q.swipe=Ge||U==="inertiastart"?q.getSwipe():null,q}return s=w,(c=[{key:"getSwipe",value:function(){var _=this._interaction;if(_.prevEvent.speed<600||this.timeStamp-_.prevEvent.timeStamp>150)return null;var S=180*Math.atan2(_.prevEvent.velocityY,_.prevEvent.velocityX)/Math.PI;S<0&&(S+=360);var D=112.5<=S&&S<247.5,U=202.5<=S&&S<337.5;return{up:U,down:!U&&22.5<=S&&S<157.5,left:D,right:!D&&(292.5<=S||S<67.5),angle:S,speed:_.prevEvent.speed,velocity:{x:_.prevEvent.velocityX,y:_.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&_d(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),w}(He.BaseEvent);Ar.InteractEvent=wl,Object.defineProperties(wl.prototype,{pageX:{get:function(){return this.page.x},set:function(i){this.page.x=i}},pageY:{get:function(){return this.page.y},set:function(i){this.page.y=i}},clientX:{get:function(){return this.client.x},set:function(i){this.client.x=i}},clientY:{get:function(){return this.client.y},set:function(i){this.client.y=i}},dx:{get:function(){return this.delta.x},set:function(i){this.delta.x=i}},dy:{get:function(){return this.delta.y},set:function(i){this.delta.y=i}},velocityX:{get:function(){return this.velocity.x},set:function(i){this.velocity.x=i}},velocityY:{get:function(){return this.velocity.y},set:function(i){this.velocity.y=i}}});var Dr={};function El(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function bd(i,s,c){return s&&El(i.prototype,s),c&&El(i,c),Object.defineProperty(i,"prototype",{writable:!1}),i}function Rr(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.PointerInfo=void 0;var Md=bd(function i(s,c,u,f,x){(function(w,_){if(!(w instanceof _))throw new TypeError("Cannot call a class as a function")})(this,i),Rr(this,"id",void 0),Rr(this,"pointer",void 0),Rr(this,"event",void 0),Rr(this,"downTime",void 0),Rr(this,"downTarget",void 0),this.id=s,this.pointer=c,this.event=u,this.downTime=f,this.downTarget=x});Dr.PointerInfo=Md;var As,Ds,dn={};function Sd(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function St(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}Object.defineProperty(dn,"__esModule",{value:!0}),dn.Interaction=void 0,Object.defineProperty(dn,"PointerInfo",{enumerable:!0,get:function(){return Dr.PointerInfo}}),dn.default=dn._ProxyValues=dn._ProxyMethods=void 0,dn._ProxyValues=As,function(i){i.interactable="",i.element="",i.prepared="",i.pointerIsDown="",i.pointerWasMoved="",i._proxy=""}(As||(dn._ProxyValues=As={})),dn._ProxyMethods=Ds,function(i){i.start="",i.move="",i.end="",i.stop="",i.interacting=""}(Ds||(dn._ProxyMethods=Ds={}));var wd=0,Tl=function(){function i(u){var f=this,x=u.pointerType,w=u.scopeFire;(function(J,oe){if(!(J instanceof oe))throw new TypeError("Cannot call a class as a function")})(this,i),St(this,"interactable",null),St(this,"element",null),St(this,"rect",null),St(this,"_rects",void 0),St(this,"edges",null),St(this,"_scopeFire",void 0),St(this,"prepared",{name:null,axis:null,edges:null}),St(this,"pointerType",void 0),St(this,"pointers",[]),St(this,"downEvent",null),St(this,"downPointer",{}),St(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),St(this,"prevEvent",null),St(this,"pointerIsDown",!1),St(this,"pointerWasMoved",!1),St(this,"_interacting",!1),St(this,"_ending",!1),St(this,"_stopped",!0),St(this,"_proxy",null),St(this,"simulation",null),St(this,"doMove",(0,ne.warnOnce)(function(J){this.move(J)},"The interaction.doMove() method has been renamed to interaction.move()")),St(this,"coords",{start:te.newCoords(),prev:te.newCoords(),cur:te.newCoords(),delta:te.newCoords(),velocity:te.newCoords()}),St(this,"_id",wd++),this._scopeFire=w,this.pointerType=x;var _=this;this._proxy={};var S=function(J){Object.defineProperty(f._proxy,J,{get:function(){return _[J]}})};for(var D in As)S(D);var U=function(J){Object.defineProperty(f._proxy,J,{value:function(){return _[J].apply(_,arguments)}})};for(var k in Ds)U(k);this._scopeFire("interactions:new",{interaction:this})}var s,c;return s=i,c=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(u,f,x){var w=this.updatePointer(u,f,x,!0),_=this.pointers[w];this._scopeFire("interactions:down",{pointer:u,event:f,eventTarget:x,pointerIndex:w,pointerInfo:_,type:"down",interaction:this})}},{key:"start",value:function(u,f,x){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(u.name==="gesture"?2:1)||!f.options[u.name].enabled)&&((0,ne.copyAction)(this.prepared,u),this.interactable=f,this.element=x,this.rect=f.getRect(x),this.edges=this.prepared.edges?(0,V.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(u,f,x){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(u,f,x,!1);var w,_,S=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(w=this.coords.cur.client.x-this.coords.start.client.x,_=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,ee.default)(w,_)>this.pointerMoveTolerance);var D=this.getPointerIndex(u),U={pointer:u,pointerIndex:D,pointerInfo:this.pointers[D],event:f,type:"move",eventTarget:x,dx:w,dy:_,duplicate:S,interaction:this};S||te.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",U),S||this.simulation||(this.interacting()&&(U.type=null,this.move(U)),this.pointerWasMoved&&te.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(u){u&&u.event||te.setZeroCoords(this.coords.delta),(u=(0,V.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},u||{})).phase="move",this._doPhase(u)}},{key:"pointerUp",value:function(u,f,x,w){var _=this.getPointerIndex(u);_===-1&&(_=this.updatePointer(u,f,x,!1));var S=/cancel$/i.test(f.type)?"cancel":"up";this._scopeFire("interactions:".concat(S),{pointer:u,pointerIndex:_,pointerInfo:this.pointers[_],event:f,eventTarget:x,type:S,curEventTarget:w,interaction:this}),this.simulation||this.end(f),this.removePointer(u,f)}},{key:"documentBlur",value:function(u){this.end(u),this._scopeFire("interactions:blur",{event:u,type:"blur",interaction:this})}},{key:"end",value:function(u){var f;this._ending=!0,u=u||this._latestPointer.event,this.interacting()&&(f=this._doPhase({event:u,interaction:this,phase:"end"})),this._ending=!1,f===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(u){var f=te.getPointerId(u);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:qe.findIndex(this.pointers,function(x){return x.id===f})}},{key:"getPointerInfo",value:function(u){return this.pointers[this.getPointerIndex(u)]}},{key:"updatePointer",value:function(u,f,x,w){var _=te.getPointerId(u),S=this.getPointerIndex(u),D=this.pointers[S];return w=w!==!1&&(w||/(down|start)$/i.test(f.type)),D?D.pointer=u:(D=new Dr.PointerInfo(_,u,f,null,null),S=this.pointers.length,this.pointers.push(D)),te.setCoords(this.coords.cur,this.pointers.map(function(U){return U.pointer}),this._now()),te.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),w&&(this.pointerIsDown=!0,D.downTime=this.coords.cur.timeStamp,D.downTarget=x,te.pointerExtend(this.downPointer,u),this.interacting()||(te.copyCoords(this.coords.start,this.coords.cur),te.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=f,this.pointerWasMoved=!1)),this._updateLatestPointer(u,f,x),this._scopeFire("interactions:update-pointer",{pointer:u,event:f,eventTarget:x,down:w,pointerInfo:D,pointerIndex:S,interaction:this}),S}},{key:"removePointer",value:function(u,f){var x=this.getPointerIndex(u);if(x!==-1){var w=this.pointers[x];this._scopeFire("interactions:remove-pointer",{pointer:u,event:f,eventTarget:null,pointerIndex:x,pointerInfo:w,interaction:this}),this.pointers.splice(x,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(u,f,x){this._latestPointer.pointer=u,this._latestPointer.event=f,this._latestPointer.eventTarget=x}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(u,f,x,w){return new Ar.InteractEvent(this,u,this.prepared.name,f,this.element,x,w)}},{key:"_fireEvent",value:function(u){var f;(f=this.interactable)==null||f.fire(u),(!this.prevEvent||u.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=u)}},{key:"_doPhase",value:function(u){var f=u.event,x=u.phase,w=u.preEnd,_=u.type,S=this.rect;if(S&&x==="move"&&(ae.addEdges(this.edges,S,this.coords.delta[this.interactable.options.deltaSource]),S.width=S.right-S.left,S.height=S.bottom-S.top),this._scopeFire("interactions:before-action-".concat(x),u)===!1)return!1;var D=u.iEvent=this._createPreparedEvent(f,x,w,_);return this._scopeFire("interactions:action-".concat(x),u),x==="start"&&(this.prevEvent=D),this._fireEvent(D),this._scopeFire("interactions:after-action-".concat(x),u),!0}},{key:"_now",value:function(){return Date.now()}}],c&&Sd(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),i}();dn.Interaction=Tl;var Ed=Tl;dn.default=Ed;var si={};function Cl(i){i.pointerIsDown&&(No(i.coords.cur,i.offset.total),i.offset.pending.x=0,i.offset.pending.y=0)}function Pl(i){Uo(i.interaction)}function Uo(i){if(!function(c){return!(!c.offset.pending.x&&!c.offset.pending.y)}(i))return!1;var s=i.offset.pending;return No(i.coords.cur,s),No(i.coords.delta,s),ae.addEdges(i.edges,i.rect,s),s.x=0,s.y=0,!0}function Td(i){var s=i.x,c=i.y;this.offset.pending.x+=s,this.offset.pending.y+=c,this.offset.total.x+=s,this.offset.total.y+=c}function No(i,s){var c=i.page,u=i.client,f=s.x,x=s.y;c.x+=f,c.y+=x,u.x+=f,u.y+=x}Object.defineProperty(si,"__esModule",{value:!0}),si.addTotal=Cl,si.applyPending=Uo,si.default=void 0,dn._ProxyMethods.offsetBy="";var Cd={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(i){i.Interaction.prototype.offsetBy=Td},listeners:{"interactions:new":function(i){i.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(i){return Cl(i.interaction)},"interactions:before-action-start":Pl,"interactions:before-action-move":Pl,"interactions:before-action-end":function(i){var s=i.interaction;if(Uo(s))return s.move({offset:!0}),s.end(),!1},"interactions:stop":function(i){var s=i.interaction;s.offset.total.x=0,s.offset.total.y=0,s.offset.pending.x=0,s.offset.pending.y=0}}},Pd=Cd;si.default=Pd;var Ci={};function Ad(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Gt(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}Object.defineProperty(Ci,"__esModule",{value:!0}),Ci.default=Ci.InertiaState=void 0;var Al=function(){function i(u){(function(f,x){if(!(f instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),Gt(this,"active",!1),Gt(this,"isModified",!1),Gt(this,"smoothEnd",!1),Gt(this,"allowResume",!1),Gt(this,"modification",void 0),Gt(this,"modifierCount",0),Gt(this,"modifierArg",void 0),Gt(this,"startCoords",void 0),Gt(this,"t0",0),Gt(this,"v0",0),Gt(this,"te",0),Gt(this,"targetOffset",void 0),Gt(this,"modifiedOffset",void 0),Gt(this,"currentOffset",void 0),Gt(this,"lambda_v0",0),Gt(this,"one_ve_v0",0),Gt(this,"timeout",void 0),Gt(this,"interaction",void 0),this.interaction=u}var s,c;return s=i,(c=[{key:"start",value:function(u){var f=this.interaction,x=Rs(f);if(!x||!x.enabled)return!1;var w=f.coords.velocity.client,_=(0,ee.default)(w.x,w.y),S=this.modification||(this.modification=new Ei.default(f));if(S.copyFrom(f.modification),this.t0=f._now(),this.allowResume=x.allowResume,this.v0=_,this.currentOffset={x:0,y:0},this.startCoords=f.coords.cur.page,this.modifierArg=S.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-f.coords.cur.timeStamp<50&&_>x.minSpeed&&_>x.endSpeed)this.startInertia();else{if(S.result=S.setAll(this.modifierArg),!S.result.changed)return!1;this.startSmoothEnd()}return f.modification.result.rect=null,f.offsetBy(this.targetOffset),f._doPhase({interaction:f,event:u,phase:"inertiastart"}),f.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),f.modification.result.rect=null,this.active=!0,f.simulation=this,!0}},{key:"startInertia",value:function(){var u=this,f=this.interaction.coords.velocity.client,x=Rs(this.interaction),w=x.resistance,_=-Math.log(x.endSpeed/this.v0)/w;this.targetOffset={x:(f.x-_)/w,y:(f.y-_)/w},this.te=_,this.lambda_v0=w/this.v0,this.one_ve_v0=1-x.endSpeed/this.v0;var S=this.modification,D=this.modifierArg;D.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},S.result=S.setAll(D),S.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+S.result.delta.x,y:this.targetOffset.y+S.result.delta.y}),this.onNextFrame(function(){return u.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var u=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return u.smoothEndTick()})}},{key:"onNextFrame",value:function(u){var f=this;this.timeout=Et.default.request(function(){f.active&&u()})}},{key:"inertiaTick",value:function(){var u,f,x,w,_,S=this,D=this.interaction,U=Rs(D).resistance,k=(D._now()-this.t0)/1e3;if(k<this.te){var J,oe=1-(Math.exp(-U*k)-this.lambda_v0)/this.one_ve_v0;this.isModified?(u=this.targetOffset.x,f=this.targetOffset.y,x=this.modifiedOffset.x,w=this.modifiedOffset.y,J={x:Dl(_=oe,0,u,x),y:Dl(_,0,f,w)}):J={x:this.targetOffset.x*oe,y:this.targetOffset.y*oe};var q={x:J.x-this.currentOffset.x,y:J.y-this.currentOffset.y};this.currentOffset.x+=q.x,this.currentOffset.y+=q.y,D.offsetBy(q),D.move(),this.onNextFrame(function(){return S.inertiaTick()})}else D.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var u=this,f=this.interaction,x=f._now()-this.t0,w=Rs(f).smoothEndDuration;if(x<w){var _={x:Rl(x,0,this.targetOffset.x,w),y:Rl(x,0,this.targetOffset.y,w)},S={x:_.x-this.currentOffset.x,y:_.y-this.currentOffset.y};this.currentOffset.x+=S.x,this.currentOffset.y+=S.y,f.offsetBy(S),f.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return u.smoothEndTick()})}else f.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(u){var f=u.pointer,x=u.event,w=u.eventTarget,_=this.interaction;_.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),_.updatePointer(f,x,w,!0),_._doPhase({interaction:_,event:x,phase:"resume"}),(0,te.copyCoords)(_.coords.prev,_.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,Et.default.cancel(this.timeout)}}])&&Ad(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),i}();function Rs(i){var s=i.interactable,c=i.prepared;return s&&s.options&&c.name&&s.options[c.name].inertia}Ci.InertiaState=Al;var Dd={id:"inertia",before:["modifiers","actions"],install:function(i){var s=i.defaults;i.usePlugin(si.default),i.usePlugin(Yt.default),i.actions.phases.inertiastart=!0,i.actions.phases.resume=!0,s.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(i){var s=i.interaction;s.inertia=new Al(s)},"interactions:before-action-end":function(i){var s=i.interaction,c=i.event;return(!s._interacting||s.simulation||!s.inertia.start(c))&&null},"interactions:down":function(i){var s=i.interaction,c=i.eventTarget,u=s.inertia;if(u.active)for(var f=c;l.default.element(f);){if(f===s.element){u.resume(i);break}f=E.parentNode(f)}},"interactions:stop":function(i){var s=i.interaction.inertia;s.active&&s.stop()},"interactions:before-action-resume":function(i){var s=i.interaction.modification;s.stop(i),s.start(i,i.interaction.coords.cur.page),s.applyToInteraction(i)},"interactions:before-action-inertiastart":function(i){return i.interaction.modification.setAndApply(i)},"interactions:action-resume":Yt.addEventModifiers,"interactions:action-inertiastart":Yt.addEventModifiers,"interactions:after-action-inertiastart":function(i){return i.interaction.modification.restoreInteractionCoords(i)},"interactions:after-action-resume":function(i){return i.interaction.modification.restoreInteractionCoords(i)}}};function Dl(i,s,c,u){var f=1-i;return f*f*s+2*f*i*c+i*i*u}function Rl(i,s,c,u){return-c*(i/=u)*(i-2)+s}var Rd=Dd;Ci.default=Rd;var Lr={};function Ld(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Ir(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}function Ll(i,s){for(var c=0;c<s.length;c++){var u=s[c];if(i.immediatePropagationStopped)break;u(i)}}Object.defineProperty(Lr,"__esModule",{value:!0}),Lr.Eventable=void 0;var Id=function(){function i(u){(function(f,x){if(!(f instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),Ir(this,"options",void 0),Ir(this,"types",{}),Ir(this,"propagationStopped",!1),Ir(this,"immediatePropagationStopped",!1),Ir(this,"global",void 0),this.options=(0,V.default)({},u||{})}var s,c;return s=i,(c=[{key:"fire",value:function(u){var f,x=this.global;(f=this.types[u.type])&&Ll(u,f),!u.propagationStopped&&x&&(f=x[u.type])&&Ll(u,f)}},{key:"on",value:function(u,f){var x=(0,pe.default)(u,f);for(u in x)this.types[u]=qe.merge(this.types[u]||[],x[u])}},{key:"off",value:function(u,f){var x=(0,pe.default)(u,f);for(u in x){var w=this.types[u];if(w&&w.length)for(var _=0;_<x[u].length;_++){var S=x[u][_],D=w.indexOf(S);D!==-1&&w.splice(D,1)}}}},{key:"getRect",value:function(u){return null}}])&&Ld(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),i}();Lr.Eventable=Id;var Or={};Object.defineProperty(Or,"__esModule",{value:!0}),Or.default=function(i,s){if(s.phaselessTypes[i])return!0;for(var c in s.map)if(i.indexOf(c)===0&&i.substr(c.length)in s.phases)return!0;return!1};var Fo={};Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.createInteractStatic=function(i){var s=function c(u,f){var x=i.interactables.get(u,f);return x||((x=i.interactables.new(u,f)).events.global=c.globalEvents),x};return s.getPointerAverage=te.pointerAverage,s.getTouchBBox=te.touchBBox,s.getTouchDistance=te.touchDistance,s.getTouchAngle=te.touchAngle,s.getElementRect=E.getElementRect,s.getElementClientRect=E.getElementClientRect,s.matchesSelector=E.matchesSelector,s.closest=E.closest,s.globalEvents={},s.version="1.10.17",s.scope=i,s.use=function(c,u){return this.scope.usePlugin(c,u),this},s.isSet=function(c,u){return!!this.scope.interactables.get(c,u&&u.context)},s.on=(0,ne.warnOnce)(function(c,u,f){if(l.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),l.default.array(c)){for(var x=0;x<c.length;x++){var w=c[x];this.on(w,u,f)}return this}if(l.default.object(c)){for(var _ in c)this.on(_,c[_],u);return this}return(0,Or.default)(c,this.scope.actions)?this.globalEvents[c]?this.globalEvents[c].push(u):this.globalEvents[c]=[u]:this.scope.events.add(this.scope.document,c,u,{options:f}),this},"The interact.on() method is being deprecated"),s.off=(0,ne.warnOnce)(function(c,u,f){if(l.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),l.default.array(c)){for(var x=0;x<c.length;x++){var w=c[x];this.off(w,u,f)}return this}if(l.default.object(c)){for(var _ in c)this.off(_,c[_],u);return this}var S;return(0,Or.default)(c,this.scope.actions)?c in this.globalEvents&&(S=this.globalEvents[c].indexOf(u))!==-1&&this.globalEvents[c].splice(S,1):this.scope.events.remove(this.scope.document,c,u,f),this},"The interact.off() method is being deprecated"),s.debug=function(){return this.scope},s.supportsTouch=function(){return L.default.supportsTouch},s.supportsPointerEvent=function(){return L.default.supportsPointerEvent},s.stop=function(){for(var c=0;c<this.scope.interactions.list.length;c++)this.scope.interactions.list[c].stop();return this},s.pointerMoveTolerance=function(c){return l.default.number(c)?(this.scope.interactions.pointerMoveTolerance=c,this):this.scope.interactions.pointerMoveTolerance},s.addDocument=function(c,u){this.scope.addDocument(c,u)},s.removeDocument=function(c){this.scope.removeDocument(c)},s};var Ls={};function Od(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Kn(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}Object.defineProperty(Ls,"__esModule",{value:!0}),Ls.Interactable=void 0;var Ud=function(){function i(u,f,x,w){(function(_,S){if(!(_ instanceof S))throw new TypeError("Cannot call a class as a function")})(this,i),Kn(this,"options",void 0),Kn(this,"_actions",void 0),Kn(this,"target",void 0),Kn(this,"events",new Lr.Eventable),Kn(this,"_context",void 0),Kn(this,"_win",void 0),Kn(this,"_doc",void 0),Kn(this,"_scopeEvents",void 0),Kn(this,"_rectChecker",void 0),this._actions=f.actions,this.target=u,this._context=f.context||x,this._win=(0,n.getWindow)((0,E.trySelector)(u)?this._context:u),this._doc=this._win.document,this._scopeEvents=w,this.set(f)}var s,c;return s=i,(c=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(u,f){return l.default.func(f.onstart)&&this.on("".concat(u,"start"),f.onstart),l.default.func(f.onmove)&&this.on("".concat(u,"move"),f.onmove),l.default.func(f.onend)&&this.on("".concat(u,"end"),f.onend),l.default.func(f.oninertiastart)&&this.on("".concat(u,"inertiastart"),f.oninertiastart),this}},{key:"updatePerActionListeners",value:function(u,f,x){(l.default.array(f)||l.default.object(f))&&this.off(u,f),(l.default.array(x)||l.default.object(x))&&this.on(u,x)}},{key:"setPerAction",value:function(u,f){var x=this._defaults;for(var w in f){var _=w,S=this.options[u],D=f[_];_==="listeners"&&this.updatePerActionListeners(u,S.listeners,D),l.default.array(D)?S[_]=qe.from(D):l.default.plainObject(D)?(S[_]=(0,V.default)(S[_]||{},(0,wi.default)(D)),l.default.object(x.perAction[_])&&"enabled"in x.perAction[_]&&(S[_].enabled=D.enabled!==!1)):l.default.bool(D)&&l.default.object(x.perAction[_])?S[_].enabled=D:S[_]=D}}},{key:"getRect",value:function(u){return u=u||(l.default.element(this.target)?this.target:null),l.default.string(this.target)&&(u=u||this._context.querySelector(this.target)),(0,E.getElementRect)(u)}},{key:"rectChecker",value:function(u){var f=this;return l.default.func(u)?(this._rectChecker=u,this.getRect=function(x){var w=(0,V.default)({},f._rectChecker(x));return"width"in w||(w.width=w.right-w.left,w.height=w.bottom-w.top),w},this):u===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(u,f){if((0,E.trySelector)(f)||l.default.object(f)){for(var x in this.options[u]=f,this._actions.map)this.options[x][u]=f;return this}return this.options[u]}},{key:"origin",value:function(u){return this._backCompatOption("origin",u)}},{key:"deltaSource",value:function(u){return u==="page"||u==="client"?(this.options.deltaSource=u,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(u){return this._context===u.ownerDocument||(0,E.nodeContains)(this._context,u)}},{key:"testIgnoreAllow",value:function(u,f,x){return!this.testIgnore(u.ignoreFrom,f,x)&&this.testAllow(u.allowFrom,f,x)}},{key:"testAllow",value:function(u,f,x){return!u||!!l.default.element(x)&&(l.default.string(u)?(0,E.matchesUpTo)(x,u,f):!!l.default.element(u)&&(0,E.nodeContains)(u,x))}},{key:"testIgnore",value:function(u,f,x){return!(!u||!l.default.element(x))&&(l.default.string(u)?(0,E.matchesUpTo)(x,u,f):!!l.default.element(u)&&(0,E.nodeContains)(u,x))}},{key:"fire",value:function(u){return this.events.fire(u),this}},{key:"_onOff",value:function(u,f,x,w){l.default.object(f)&&!l.default.array(f)&&(w=x,x=null);var _=u==="on"?"add":"remove",S=(0,pe.default)(f,x);for(var D in S){D==="wheel"&&(D=L.default.wheelEvent);for(var U=0;U<S[D].length;U++){var k=S[D][U];(0,Or.default)(D,this._actions)?this.events[u](D,k):l.default.string(this.target)?this._scopeEvents["".concat(_,"Delegate")](this.target,this._context,D,k,w):this._scopeEvents[_](this.target,D,k,w)}}return this}},{key:"on",value:function(u,f,x){return this._onOff("on",u,f,x)}},{key:"off",value:function(u,f,x){return this._onOff("off",u,f,x)}},{key:"set",value:function(u){var f=this._defaults;for(var x in l.default.object(u)||(u={}),this.options=(0,wi.default)(f.base),this._actions.methodDict){var w=x,_=this._actions.methodDict[w];this.options[w]={},this.setPerAction(w,(0,V.default)((0,V.default)({},f.perAction),f.actions[w])),this[_](u[w])}for(var S in u)l.default.func(this[S])&&this[S](u[S]);return this}},{key:"unset",value:function(){if(l.default.string(this.target))for(var u in this._scopeEvents.delegatedEvents)for(var f=this._scopeEvents.delegatedEvents[u],x=f.length-1;x>=0;x--){var w=f[x],_=w.selector,S=w.context,D=w.listeners;_===this.target&&S===this._context&&f.splice(x,1);for(var U=D.length-1;U>=0;U--)this._scopeEvents.removeDelegate(this.target,this._context,u,D[U][0],D[U][1])}else this._scopeEvents.remove(this.target,"all")}}])&&Od(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),i}();Ls.Interactable=Ud;var Is={};function Nd(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function zo(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}Object.defineProperty(Is,"__esModule",{value:!0}),Is.InteractableSet=void 0;var Fd=function(){function i(u){var f=this;(function(x,w){if(!(x instanceof w))throw new TypeError("Cannot call a class as a function")})(this,i),zo(this,"list",[]),zo(this,"selectorMap",{}),zo(this,"scope",void 0),this.scope=u,u.addListeners({"interactable:unset":function(x){var w=x.interactable,_=w.target,S=w._context,D=l.default.string(_)?f.selectorMap[_]:_[f.scope.id],U=qe.findIndex(D,function(k){return k.context===S});D[U]&&(D[U].context=null,D[U].interactable=null),D.splice(U,1)}})}var s,c;return s=i,(c=[{key:"new",value:function(u,f){f=(0,V.default)(f||{},{actions:this.scope.actions});var x=new this.scope.Interactable(u,f,this.scope.document,this.scope.events),w={context:x._context,interactable:x};return this.scope.addDocument(x._doc),this.list.push(x),l.default.string(u)?(this.selectorMap[u]||(this.selectorMap[u]=[]),this.selectorMap[u].push(w)):(x.target[this.scope.id]||Object.defineProperty(u,this.scope.id,{value:[],configurable:!0}),u[this.scope.id].push(w)),this.scope.fire("interactable:new",{target:u,options:f,interactable:x,win:this.scope._win}),x}},{key:"get",value:function(u,f){var x=f&&f.context||this.scope.document,w=l.default.string(u),_=w?this.selectorMap[u]:u[this.scope.id];if(!_)return null;var S=qe.find(_,function(D){return D.context===x&&(w||D.interactable.inContext(u))});return S&&S.interactable}},{key:"forEachMatch",value:function(u,f){for(var x=0;x<this.list.length;x++){var w=this.list[x],_=void 0;if((l.default.string(w.target)?l.default.element(u)&&E.matchesSelector(u,w.target):u===w.target)&&w.inContext(u)&&(_=f(w)),_!==void 0)return _}}}])&&Nd(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),i}();Is.InteractableSet=Fd;var Os={};function zd(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function ko(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}function Bo(i,s){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var x,w,_=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(x=f.next()).done)&&(_.push(x.value),!u||_.length!==u);S=!0);}catch(U){D=!0,w=U}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return _}}(i,s)||function(c,u){if(c){if(typeof c=="string")return Il(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?Il(c,u):void 0}}(i,s)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Il(i,s){(s==null||s>i.length)&&(s=i.length);for(var c=0,u=Array(s);c<s;c++)u[c]=i[c];return u}Object.defineProperty(Os,"__esModule",{value:!0}),Os.default=void 0;var kd=function(){function i(u){(function(f,x){if(!(f instanceof x))throw new TypeError("Cannot call a class as a function")})(this,i),ko(this,"currentTarget",void 0),ko(this,"originalEvent",void 0),ko(this,"type",void 0),this.originalEvent=u,(0,fe.default)(this,u)}var s,c;return s=i,(c=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&zd(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),i}();function Ur(i){if(!l.default.object(i))return{capture:!!i,passive:!1};var s=(0,V.default)({},i);return s.capture=!!i.capture,s.passive=!!i.passive,s}var Bd={id:"events",install:function(i){var s,c=[],u={},f=[],x={add:w,remove:_,addDelegate:function(U,k,J,oe,q){var he=Ur(q);if(!u[J]){u[J]=[];for(var be=0;be<f.length;be++){var me=f[be];w(me,J,S),w(me,J,D,!0)}}var Ue=u[J],Ge=qe.find(Ue,function(Xe){return Xe.selector===U&&Xe.context===k});Ge||(Ge={selector:U,context:k,listeners:[]},Ue.push(Ge)),Ge.listeners.push([oe,he])},removeDelegate:function(U,k,J,oe,q){var he,be=Ur(q),me=u[J],Ue=!1;if(me)for(he=me.length-1;he>=0;he--){var Ge=me[he];if(Ge.selector===U&&Ge.context===k){for(var Xe=Ge.listeners,ut=Xe.length-1;ut>=0;ut--){var gt=Bo(Xe[ut],2),ot=gt[0],pt=gt[1],En=pt.capture,Qn=pt.passive;if(ot===oe&&En===be.capture&&Qn===be.passive){Xe.splice(ut,1),Xe.length||(me.splice(he,1),_(k,J,S),_(k,J,D,!0)),Ue=!0;break}}if(Ue)break}}},delegateListener:S,delegateUseCapture:D,delegatedEvents:u,documents:f,targets:c,supportsOptions:!1,supportsPassive:!1};function w(U,k,J,oe){var q=Ur(oe),he=qe.find(c,function(be){return be.eventTarget===U});he||(he={eventTarget:U,events:{}},c.push(he)),he.events[k]||(he.events[k]=[]),U.addEventListener&&!qe.contains(he.events[k],J)&&(U.addEventListener(k,J,x.supportsOptions?q:q.capture),he.events[k].push(J))}function _(U,k,J,oe){var q=Ur(oe),he=qe.findIndex(c,function(ut){return ut.eventTarget===U}),be=c[he];if(be&&be.events)if(k!=="all"){var me=!1,Ue=be.events[k];if(Ue){if(J==="all"){for(var Ge=Ue.length-1;Ge>=0;Ge--)_(U,k,Ue[Ge],q);return}for(var Xe=0;Xe<Ue.length;Xe++)if(Ue[Xe]===J){U.removeEventListener(k,J,x.supportsOptions?q:q.capture),Ue.splice(Xe,1),Ue.length===0&&(delete be.events[k],me=!0);break}}me&&!Object.keys(be.events).length&&c.splice(he,1)}else for(k in be.events)be.events.hasOwnProperty(k)&&_(U,k,"all")}function S(U,k){for(var J=Ur(k),oe=new kd(U),q=u[U.type],he=Bo(te.getEventTargets(U),1)[0],be=he;l.default.element(be);){for(var me=0;me<q.length;me++){var Ue=q[me],Ge=Ue.selector,Xe=Ue.context;if(E.matchesSelector(be,Ge)&&E.nodeContains(Xe,he)&&E.nodeContains(Xe,be)){var ut=Ue.listeners;oe.currentTarget=be;for(var gt=0;gt<ut.length;gt++){var ot=Bo(ut[gt],2),pt=ot[0],En=ot[1],Qn=En.capture,sa=En.passive;Qn===J.capture&&sa===J.passive&&pt(oe)}}}be=E.parentNode(be)}}function D(U){return S(U,!0)}return(s=i.document)==null||s.createElement("div").addEventListener("test",null,{get capture(){return x.supportsOptions=!0},get passive(){return x.supportsPassive=!0}}),i.events=x,x}};Os.default=Bd;var Us={};Object.defineProperty(Us,"__esModule",{value:!0}),Us.default=void 0;var Ns={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(i){for(var s=0;s<Ns.methodOrder.length;s++){var c;c=Ns.methodOrder[s];var u=Ns[c](i);if(u)return u}return null},simulationResume:function(i){var s=i.pointerType,c=i.eventType,u=i.eventTarget,f=i.scope;if(!/down|start/i.test(c))return null;for(var x=0;x<f.interactions.list.length;x++){var w=f.interactions.list[x],_=u;if(w.simulation&&w.simulation.allowResume&&w.pointerType===s)for(;_;){if(_===w.element)return w;_=E.parentNode(_)}}return null},mouseOrPen:function(i){var s,c=i.pointerId,u=i.pointerType,f=i.eventType,x=i.scope;if(u!=="mouse"&&u!=="pen")return null;for(var w=0;w<x.interactions.list.length;w++){var _=x.interactions.list[w];if(_.pointerType===u){if(_.simulation&&!Ol(_,c))continue;if(_.interacting())return _;s||(s=_)}}if(s)return s;for(var S=0;S<x.interactions.list.length;S++){var D=x.interactions.list[S];if(!(D.pointerType!==u||/down/i.test(f)&&D.simulation))return D}return null},hasPointer:function(i){for(var s=i.pointerId,c=i.scope,u=0;u<c.interactions.list.length;u++){var f=c.interactions.list[u];if(Ol(f,s))return f}return null},idle:function(i){for(var s=i.pointerType,c=i.scope,u=0;u<c.interactions.list.length;u++){var f=c.interactions.list[u];if(f.pointers.length===1){var x=f.interactable;if(x&&(!x.options.gesture||!x.options.gesture.enabled))continue}else if(f.pointers.length>=2)continue;if(!f.interacting()&&s===f.pointerType)return f}return null}};function Ol(i,s){return i.pointers.some(function(c){return c.id===s})}var Gd=Ns;Us.default=Gd;var Fs={};function Go(i){return Go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Go(i)}function Ul(i,s){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var x,w,_=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(x=f.next()).done)&&(_.push(x.value),!u||_.length!==u);S=!0);}catch(U){D=!0,w=U}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return _}}(i,s)||function(c,u){if(c){if(typeof c=="string")return Nl(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?Nl(c,u):void 0}}(i,s)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Nl(i,s){(s==null||s>i.length)&&(s=i.length);for(var c=0,u=Array(s);c<s;c++)u[c]=i[c];return u}function Vd(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")}function Hd(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Vo(i,s){return Vo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Vo(i,s)}function Wd(i,s){if(s&&(Go(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(i)}function zs(i){return zs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},zs(i)}Object.defineProperty(Fs,"__esModule",{value:!0}),Fs.default=void 0;var Ho=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Fl(i,s){return function(c){var u=s.interactions.list,f=te.getPointerType(c),x=Ul(te.getEventTargets(c),2),w=x[0],_=x[1],S=[];if(/^touch/.test(c.type)){s.prevTouchTime=s.now();for(var D=0;D<c.changedTouches.length;D++){var U=c.changedTouches[D],k={pointer:U,pointerId:te.getPointerId(U),pointerType:f,eventType:c.type,eventTarget:w,curEventTarget:_,scope:s},J=zl(k);S.push([k.pointer,k.eventTarget,k.curEventTarget,J])}}else{var oe=!1;if(!L.default.supportsPointerEvent&&/mouse/.test(c.type)){for(var q=0;q<u.length&&!oe;q++)oe=u[q].pointerType!=="mouse"&&u[q].pointerIsDown;oe=oe||s.now()-s.prevTouchTime<500||c.timeStamp===0}if(!oe){var he={pointer:c,pointerId:te.getPointerId(c),pointerType:f,eventType:c.type,curEventTarget:_,eventTarget:w,scope:s},be=zl(he);S.push([he.pointer,he.eventTarget,he.curEventTarget,be])}}for(var me=0;me<S.length;me++){var Ue=Ul(S[me],4),Ge=Ue[0],Xe=Ue[1],ut=Ue[2];Ue[3][i](Ge,c,Xe,ut)}}}function zl(i){var s=i.pointerType,c=i.scope,u={interaction:Us.default.search(i),searchDetails:i};return c.fire("interactions:find",u),u.interaction||c.interactions.new({pointerType:s})}function Wo(i,s){var c=i.doc,u=i.scope,f=i.options,x=u.interactions.docEvents,w=u.events,_=w[s];for(var S in u.browser.isIOS&&!f.events&&(f.events={passive:!1}),w.delegatedEvents)_(c,S,w.delegateListener),_(c,S,w.delegateUseCapture,!0);for(var D=f&&f.events,U=0;U<x.length;U++){var k=x[U];_(c,k.type,k.listener,D)}}var jd={id:"core/interactions",install:function(i){for(var s={},c=0;c<Ho.length;c++){var u=Ho[c];s[u]=Fl(u,i)}var f,x=L.default.pEventTypes;function w(){for(var _=0;_<i.interactions.list.length;_++){var S=i.interactions.list[_];if(S.pointerIsDown&&S.pointerType==="touch"&&!S._interacting)for(var D=function(){var k=S.pointers[U];i.documents.some(function(J){var oe=J.doc;return(0,E.nodeContains)(oe,k.downTarget)})||S.removePointer(k.pointer,k.event)},U=0;U<S.pointers.length;U++)D()}}(f=P.default.PointerEvent?[{type:x.down,listener:w},{type:x.down,listener:s.pointerDown},{type:x.move,listener:s.pointerMove},{type:x.up,listener:s.pointerUp},{type:x.cancel,listener:s.pointerUp}]:[{type:"mousedown",listener:s.pointerDown},{type:"mousemove",listener:s.pointerMove},{type:"mouseup",listener:s.pointerUp},{type:"touchstart",listener:w},{type:"touchstart",listener:s.pointerDown},{type:"touchmove",listener:s.pointerMove},{type:"touchend",listener:s.pointerUp},{type:"touchcancel",listener:s.pointerUp}]).push({type:"blur",listener:function(_){for(var S=0;S<i.interactions.list.length;S++)i.interactions.list[S].documentBlur(_)}}),i.prevTouchTime=0,i.Interaction=function(_){(function(q,he){if(typeof he!="function"&&he!==null)throw new TypeError("Super expression must either be null or a function");q.prototype=Object.create(he&&he.prototype,{constructor:{value:q,writable:!0,configurable:!0}}),Object.defineProperty(q,"prototype",{writable:!1}),he&&Vo(q,he)})(oe,_);var S,D,U,k,J=(U=oe,k=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var q,he=zs(U);if(k){var be=zs(this).constructor;q=Reflect.construct(he,arguments,be)}else q=he.apply(this,arguments);return Wd(this,q)});function oe(){return Vd(this,oe),J.apply(this,arguments)}return S=oe,(D=[{key:"pointerMoveTolerance",get:function(){return i.interactions.pointerMoveTolerance},set:function(q){i.interactions.pointerMoveTolerance=q}},{key:"_now",value:function(){return i.now()}}])&&Hd(S.prototype,D),Object.defineProperty(S,"prototype",{writable:!1}),oe}(dn.default),i.interactions={list:[],new:function(_){_.scopeFire=function(D,U){return i.fire(D,U)};var S=new i.Interaction(_);return i.interactions.list.push(S),S},listeners:s,docEvents:f,pointerMoveTolerance:1},i.usePlugin(Dn.default)},listeners:{"scope:add-document":function(i){return Wo(i,"add")},"scope:remove-document":function(i){return Wo(i,"remove")},"interactable:unset":function(i,s){for(var c=i.interactable,u=s.interactions.list.length-1;u>=0;u--){var f=s.interactions.list[u];f.interactable===c&&(f.stop(),s.fire("interactions:destroy",{interaction:f}),f.destroy(),s.interactions.list.length>2&&s.interactions.list.splice(u,1))}}},onDocSignal:Wo,doOnInteractions:Fl,methodNames:Ho},qd=jd;Fs.default=qd;var Nr={};function jo(i){return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},jo(i)}function Fr(){return Fr=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(i,s,c){var u=Xd(i,s);if(u){var f=Object.getOwnPropertyDescriptor(u,s);return f.get?f.get.call(arguments.length<3?i:c):f.value}},Fr.apply(this,arguments)}function Xd(i,s){for(;!Object.prototype.hasOwnProperty.call(i,s)&&(i=oi(i))!==null;);return i}function qo(i,s){return qo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},qo(i,s)}function Yd(i,s){if(s&&(jo(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(i)}function oi(i){return oi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},oi(i)}function kl(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")}function Bl(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function Gl(i,s,c){return s&&Bl(i.prototype,s),c&&Bl(i,c),Object.defineProperty(i,"prototype",{writable:!1}),i}function Zt(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}Object.defineProperty(Nr,"__esModule",{value:!0}),Nr.Scope=void 0,Nr.initScope=Vl;var Zd=function(){function i(){var s=this;kl(this,i),Zt(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),Zt(this,"isInitialized",!1),Zt(this,"listenerMaps",[]),Zt(this,"browser",L.default),Zt(this,"defaults",(0,wi.default)(Pr.defaults)),Zt(this,"Eventable",Lr.Eventable),Zt(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),Zt(this,"interactStatic",(0,Fo.createInteractStatic)(this)),Zt(this,"InteractEvent",Ar.InteractEvent),Zt(this,"Interactable",void 0),Zt(this,"interactables",new Is.InteractableSet(this)),Zt(this,"_win",void 0),Zt(this,"document",void 0),Zt(this,"window",void 0),Zt(this,"documents",[]),Zt(this,"_plugins",{list:[],map:{}}),Zt(this,"onWindowUnload",function(u){return s.removeDocument(u.target)});var c=this;this.Interactable=function(u){(function(S,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(D&&D.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),Object.defineProperty(S,"prototype",{writable:!1}),D&&qo(S,D)})(_,u);var f,x,w=(f=_,x=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var S,D=oi(f);if(x){var U=oi(this).constructor;S=Reflect.construct(D,arguments,U)}else S=D.apply(this,arguments);return Yd(this,S)});function _(){return kl(this,_),w.apply(this,arguments)}return Gl(_,[{key:"_defaults",get:function(){return c.defaults}},{key:"set",value:function(S){return Fr(oi(_.prototype),"set",this).call(this,S),c.fire("interactable:set",{options:S,interactable:this}),this}},{key:"unset",value:function(){Fr(oi(_.prototype),"unset",this).call(this);var S=c.interactables.list.indexOf(this);S<0||(Fr(oi(_.prototype),"unset",this).call(this),c.interactables.list.splice(S,1),c.fire("interactable:unset",{interactable:this}))}}]),_}(Ls.Interactable)}return Gl(i,[{key:"addListeners",value:function(s,c){this.listenerMaps.push({id:c,map:s})}},{key:"fire",value:function(s,c){for(var u=0;u<this.listenerMaps.length;u++){var f=this.listenerMaps[u].map[s];if(f&&f(c,this,s)===!1)return!1}}},{key:"init",value:function(s){return this.isInitialized?this:Vl(this,s)}},{key:"pluginIsInstalled",value:function(s){return this._plugins.map[s.id]||this._plugins.list.indexOf(s)!==-1}},{key:"usePlugin",value:function(s,c){if(!this.isInitialized)return this;if(this.pluginIsInstalled(s))return this;if(s.id&&(this._plugins.map[s.id]=s),this._plugins.list.push(s),s.install&&s.install(this,c),s.listeners&&s.before){for(var u=0,f=this.listenerMaps.length,x=s.before.reduce(function(_,S){return _[S]=!0,_[Hl(S)]=!0,_},{});u<f;u++){var w=this.listenerMaps[u].id;if(x[w]||x[Hl(w)])break}this.listenerMaps.splice(u,0,{id:s.id,map:s.listeners})}else s.listeners&&this.listenerMaps.push({id:s.id,map:s.listeners});return this}},{key:"addDocument",value:function(s,c){if(this.getDocIndex(s)!==-1)return!1;var u=n.getWindow(s);c=c?(0,V.default)({},c):{},this.documents.push({doc:s,options:c}),this.events.documents.push(s),s!==this.document&&this.events.add(u,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:s,window:u,scope:this,options:c})}},{key:"removeDocument",value:function(s){var c=this.getDocIndex(s),u=n.getWindow(s),f=this.documents[c].options;this.events.remove(u,"unload",this.onWindowUnload),this.documents.splice(c,1),this.events.documents.splice(c,1),this.fire("scope:remove-document",{doc:s,window:u,scope:this,options:f})}},{key:"getDocIndex",value:function(s){for(var c=0;c<this.documents.length;c++)if(this.documents[c].doc===s)return c;return-1}},{key:"getDocOptions",value:function(s){var c=this.getDocIndex(s);return c===-1?null:this.documents[c].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),i}();function Vl(i,s){return i.isInitialized=!0,l.default.window(s)&&n.init(s),P.default.init(s),L.default.init(s),Et.default.init(s),i.window=s,i.document=s.document,i.usePlugin(Fs.default),i.usePlugin(Os.default),i}function Hl(i){return i&&i.replace(/\/.*$/,"")}Nr.Scope=Zd;var Kt={};Object.defineProperty(Kt,"__esModule",{value:!0}),Kt.default=void 0;var Wl=new Nr.Scope,Kd=Wl.interactStatic;Kt.default=Kd;var $d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;Wl.init($d);var ks={};Object.defineProperty(ks,"__esModule",{value:!0}),ks.default=void 0,ks.default=function(){};var Bs={};Object.defineProperty(Bs,"__esModule",{value:!0}),Bs.default=void 0,Bs.default=function(){};var Gs={};function jl(i,s){return function(c){if(Array.isArray(c))return c}(i)||function(c,u){var f=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(f!=null){var x,w,_=[],S=!0,D=!1;try{for(f=f.call(c);!(S=(x=f.next()).done)&&(_.push(x.value),!u||_.length!==u);S=!0);}catch(U){D=!0,w=U}finally{try{S||f.return==null||f.return()}finally{if(D)throw w}}return _}}(i,s)||function(c,u){if(c){if(typeof c=="string")return ql(c,u);var f=Object.prototype.toString.call(c).slice(8,-1);return f==="Object"&&c.constructor&&(f=c.constructor.name),f==="Map"||f==="Set"?Array.from(c):f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)?ql(c,u):void 0}}(i,s)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function ql(i,s){(s==null||s>i.length)&&(s=i.length);for(var c=0,u=Array(s);c<s;c++)u[c]=i[c];return u}Object.defineProperty(Gs,"__esModule",{value:!0}),Gs.default=void 0,Gs.default=function(i){var s=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(u){var f=jl(u,2),x=f[0],w=f[1];return x in i||w in i}),c=function(u,f){for(var x=i.range,w=i.limits,_=w===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:w,S=i.offset,D=S===void 0?{x:0,y:0}:S,U={range:x,grid:i,x:null,y:null},k=0;k<s.length;k++){var J=jl(s[k],2),oe=J[0],q=J[1],he=Math.round((u-D.x)/i[oe]),be=Math.round((f-D.y)/i[q]);U[oe]=Math.max(_.left,Math.min(_.right,he*i[oe]+D.x)),U[q]=Math.max(_.top,Math.min(_.bottom,be*i[q]+D.y))}return U};return c.grid=i,c.coordFields=s,c};var zr={};Object.defineProperty(zr,"__esModule",{value:!0}),Object.defineProperty(zr,"edgeTarget",{enumerable:!0,get:function(){return ks.default}}),Object.defineProperty(zr,"elements",{enumerable:!0,get:function(){return Bs.default}}),Object.defineProperty(zr,"grid",{enumerable:!0,get:function(){return Gs.default}});var Vs={};Object.defineProperty(Vs,"__esModule",{value:!0}),Vs.default=void 0;var Qd={id:"snappers",install:function(i){var s=i.interactStatic;s.snappers=(0,V.default)(s.snappers||{},zr),s.createSnapGrid=s.snappers.grid}},Jd=Qd;Vs.default=Jd;var qi={};function Xl(i,s){var c=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);s&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(i,f).enumerable})),c.push.apply(c,u)}return c}function Xo(i){for(var s=1;s<arguments.length;s++){var c=arguments[s]!=null?arguments[s]:{};s%2?Xl(Object(c),!0).forEach(function(u){ef(i,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(c)):Xl(Object(c)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(c,u))})}return i}function ef(i,s,c){return s in i?Object.defineProperty(i,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[s]=c,i}Object.defineProperty(qi,"__esModule",{value:!0}),qi.default=qi.aspectRatio=void 0;var Yl={start:function(i){var s=i.state,c=i.rect,u=i.edges,f=i.pageCoords,x=s.options.ratio,w=s.options,_=w.equalDelta,S=w.modifiers;x==="preserve"&&(x=c.width/c.height),s.startCoords=(0,V.default)({},f),s.startRect=(0,V.default)({},c),s.ratio=x,s.equalDelta=_;var D=s.linkedEdges={top:u.top||u.left&&!u.bottom,left:u.left||u.top&&!u.right,bottom:u.bottom||u.right&&!u.top,right:u.right||u.bottom&&!u.left};if(s.xIsPrimaryAxis=!(!u.left&&!u.right),s.equalDelta){var U=(D.left?1:-1)*(D.top?1:-1);s.edgeSign={x:U,y:U}}else s.edgeSign={x:D.left?-1:1,y:D.top?-1:1};if((0,V.default)(i.edges,D),S&&S.length){var k=new Ei.default(i.interaction);k.copyFrom(i.interaction.modification),k.prepareStates(S),s.subModification=k,k.startAll(Xo({},i))}},set:function(i){var s=i.state,c=i.rect,u=i.coords,f=(0,V.default)({},u),x=s.equalDelta?tf:nf;if(x(s,s.xIsPrimaryAxis,u,c),!s.subModification)return null;var w=(0,V.default)({},c);(0,ae.addEdges)(s.linkedEdges,w,{x:u.x-f.x,y:u.y-f.y});var _=s.subModification.setAll(Xo(Xo({},i),{},{rect:w,edges:s.linkedEdges,pageCoords:u,prevCoords:u,prevRect:w})),S=_.delta;return _.changed&&(x(s,Math.abs(S.x)>Math.abs(S.y),_.coords,_.rect),(0,V.default)(u,_.coords)),_.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function tf(i,s,c){var u=i.startCoords,f=i.edgeSign;s?c.y=u.y+(c.x-u.x)*f.y:c.x=u.x+(c.y-u.y)*f.x}function nf(i,s,c,u){var f=i.startRect,x=i.startCoords,w=i.ratio,_=i.edgeSign;if(s){var S=u.width/w;c.y=x.y+(S-f.height)*_.y}else{var D=u.height*w;c.x=x.x+(D-f.width)*_.x}}qi.aspectRatio=Yl;var rf=(0,Yt.makeModifier)(Yl,"aspectRatio");qi.default=rf;var Pi={};Object.defineProperty(Pi,"__esModule",{value:!0}),Pi.default=void 0;var Zl=function(){};Zl._defaults={};var sf=Zl;Pi.default=sf;var Yo={};Object.defineProperty(Yo,"__esModule",{value:!0}),Object.defineProperty(Yo,"default",{enumerable:!0,get:function(){return Pi.default}});var nn={};function Zo(i,s,c){return l.default.func(i)?ae.resolveRectLike(i,s.interactable,s.element,[c.x,c.y,s]):ae.resolveRectLike(i,s.interactable,s.element)}Object.defineProperty(nn,"__esModule",{value:!0}),nn.default=void 0,nn.getRestrictionRect=Zo,nn.restrict=void 0;var Kl={start:function(i){var s=i.rect,c=i.startOffset,u=i.state,f=i.interaction,x=i.pageCoords,w=u.options,_=w.elementRect,S=(0,V.default)({left:0,top:0,right:0,bottom:0},w.offset||{});if(s&&_){var D=Zo(w.restriction,f,x);if(D){var U=D.right-D.left-s.width,k=D.bottom-D.top-s.height;U<0&&(S.left+=U,S.right+=U),k<0&&(S.top+=k,S.bottom+=k)}S.left+=c.left-s.width*_.left,S.top+=c.top-s.height*_.top,S.right+=c.right-s.width*(1-_.right),S.bottom+=c.bottom-s.height*(1-_.bottom)}u.offset=S},set:function(i){var s=i.coords,c=i.interaction,u=i.state,f=u.options,x=u.offset,w=Zo(f.restriction,c,s);if(w){var _=ae.xywhToTlbr(w);s.x=Math.max(Math.min(_.right-x.right,s.x),_.left+x.left),s.y=Math.max(Math.min(_.bottom-x.bottom,s.y),_.top+x.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};nn.restrict=Kl;var of=(0,Yt.makeModifier)(Kl,"restrict");nn.default=of;var Vn={};Object.defineProperty(Vn,"__esModule",{value:!0}),Vn.restrictEdges=Vn.default=void 0;var $l={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Ql={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Jl(i,s){for(var c=["top","left","bottom","right"],u=0;u<c.length;u++){var f=c[u];f in i||(i[f]=s[f])}return i}var ec={noInner:$l,noOuter:Ql,start:function(i){var s,c=i.interaction,u=i.startOffset,f=i.state,x=f.options;if(x){var w=(0,nn.getRestrictionRect)(x.offset,c,c.coords.start.page);s=ae.rectToXY(w)}s=s||{x:0,y:0},f.offset={top:s.y+u.top,left:s.x+u.left,bottom:s.y-u.bottom,right:s.x-u.right}},set:function(i){var s=i.coords,c=i.edges,u=i.interaction,f=i.state,x=f.offset,w=f.options;if(c){var _=(0,V.default)({},s),S=(0,nn.getRestrictionRect)(w.inner,u,_)||{},D=(0,nn.getRestrictionRect)(w.outer,u,_)||{};Jl(S,$l),Jl(D,Ql),c.top?s.y=Math.min(Math.max(D.top+x.top,_.y),S.top+x.top):c.bottom&&(s.y=Math.max(Math.min(D.bottom+x.bottom,_.y),S.bottom+x.bottom)),c.left?s.x=Math.min(Math.max(D.left+x.left,_.x),S.left+x.left):c.right&&(s.x=Math.max(Math.min(D.right+x.right,_.x),S.right+x.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Vn.restrictEdges=ec;var af=(0,Yt.makeModifier)(ec,"restrictEdges");Vn.default=af;var Xi={};Object.defineProperty(Xi,"__esModule",{value:!0}),Xi.restrictRect=Xi.default=void 0;var lf=(0,V.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(i){}},nn.restrict.defaults),tc={start:nn.restrict.start,set:nn.restrict.set,defaults:lf};Xi.restrictRect=tc;var cf=(0,Yt.makeModifier)(tc,"restrictRect");Xi.default=cf;var Yi={};Object.defineProperty(Yi,"__esModule",{value:!0}),Yi.restrictSize=Yi.default=void 0;var uf={width:-1/0,height:-1/0},df={width:1/0,height:1/0},nc={start:function(i){return Vn.restrictEdges.start(i)},set:function(i){var s=i.interaction,c=i.state,u=i.rect,f=i.edges,x=c.options;if(f){var w=ae.tlbrToXywh((0,nn.getRestrictionRect)(x.min,s,i.coords))||uf,_=ae.tlbrToXywh((0,nn.getRestrictionRect)(x.max,s,i.coords))||df;c.options={endOnly:x.endOnly,inner:(0,V.default)({},Vn.restrictEdges.noInner),outer:(0,V.default)({},Vn.restrictEdges.noOuter)},f.top?(c.options.inner.top=u.bottom-w.height,c.options.outer.top=u.bottom-_.height):f.bottom&&(c.options.inner.bottom=u.top+w.height,c.options.outer.bottom=u.top+_.height),f.left?(c.options.inner.left=u.right-w.width,c.options.outer.left=u.right-_.width):f.right&&(c.options.inner.right=u.left+w.width,c.options.outer.right=u.left+_.width),Vn.restrictEdges.set(i),c.options=x}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Yi.restrictSize=nc;var ff=(0,Yt.makeModifier)(nc,"restrictSize");Yi.default=ff;var Ko={};Object.defineProperty(Ko,"__esModule",{value:!0}),Object.defineProperty(Ko,"default",{enumerable:!0,get:function(){return Pi.default}});var ai={};Object.defineProperty(ai,"__esModule",{value:!0}),ai.snap=ai.default=void 0;var ic={start:function(i){var s,c=i.interaction,u=i.interactable,f=i.element,x=i.rect,w=i.state,_=i.startOffset,S=w.options,D=S.offsetWithOrigin?function(J){var oe=J.interaction.element;return(0,ae.rectToXY)((0,ae.resolveRectLike)(J.state.options.origin,null,null,[oe]))||(0,de.default)(J.interactable,oe,J.interaction.prepared.name)}(i):{x:0,y:0};if(S.offset==="startCoords")s={x:c.coords.start.page.x,y:c.coords.start.page.y};else{var U=(0,ae.resolveRectLike)(S.offset,u,f,[c]);(s=(0,ae.rectToXY)(U)||{x:0,y:0}).x+=D.x,s.y+=D.y}var k=S.relativePoints;w.offsets=x&&k&&k.length?k.map(function(J,oe){return{index:oe,relativePoint:J,x:_.left-x.width*J.x+s.x,y:_.top-x.height*J.y+s.y}}):[{index:0,relativePoint:null,x:s.x,y:s.y}]},set:function(i){var s=i.interaction,c=i.coords,u=i.state,f=u.options,x=u.offsets,w=(0,de.default)(s.interactable,s.element,s.prepared.name),_=(0,V.default)({},c),S=[];f.offsetWithOrigin||(_.x-=w.x,_.y-=w.y);for(var D=0;D<x.length;D++)for(var U=x[D],k=_.x-U.x,J=_.y-U.y,oe=0,q=f.targets.length;oe<q;oe++){var he,be=f.targets[oe];(he=l.default.func(be)?be(k,J,s._proxy,U,oe):be)&&S.push({x:(l.default.number(he.x)?he.x:k)+U.x,y:(l.default.number(he.y)?he.y:J)+U.y,range:l.default.number(he.range)?he.range:f.range,source:be,index:oe,offset:U})}for(var me={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Ue=0;Ue<S.length;Ue++){var Ge=S[Ue],Xe=Ge.range,ut=Ge.x-_.x,gt=Ge.y-_.y,ot=(0,ee.default)(ut,gt),pt=ot<=Xe;Xe===1/0&&me.inRange&&me.range!==1/0&&(pt=!1),me.target&&!(pt?me.inRange&&Xe!==1/0?ot/Xe<me.distance/me.range:Xe===1/0&&me.range!==1/0||ot<me.distance:!me.inRange&&ot<me.distance)||(me.target=Ge,me.distance=ot,me.range=Xe,me.inRange=pt,me.delta.x=ut,me.delta.y=gt)}return me.inRange&&(c.x=me.target.x,c.y=me.target.y),u.closest=me,me},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};ai.snap=ic;var hf=(0,Yt.makeModifier)(ic,"snap");ai.default=hf;var $n={};function rc(i,s){(s==null||s>i.length)&&(s=i.length);for(var c=0,u=Array(s);c<s;c++)u[c]=i[c];return u}Object.defineProperty($n,"__esModule",{value:!0}),$n.snapSize=$n.default=void 0;var sc={start:function(i){var s=i.state,c=i.edges,u=s.options;if(!c)return null;i.state={options:{targets:null,relativePoints:[{x:c.left?0:1,y:c.top?0:1}],offset:u.offset||"self",origin:{x:0,y:0},range:u.range}},s.targetFields=s.targetFields||[["width","height"],["x","y"]],ai.snap.start(i),s.offsets=i.state.offsets,i.state=s},set:function(i){var s,c,u=i.interaction,f=i.state,x=i.coords,w=f.options,_=f.offsets,S={x:x.x-_[0].x,y:x.y-_[0].y};f.options=(0,V.default)({},w),f.options.targets=[];for(var D=0;D<(w.targets||[]).length;D++){var U=(w.targets||[])[D],k=void 0;if(k=l.default.func(U)?U(S.x,S.y,u):U){for(var J=0;J<f.targetFields.length;J++){var oe=(s=f.targetFields[J],c=2,function(me){if(Array.isArray(me))return me}(s)||function(me,Ue){var Ge=me==null?null:typeof Symbol<"u"&&me[Symbol.iterator]||me["@@iterator"];if(Ge!=null){var Xe,ut,gt=[],ot=!0,pt=!1;try{for(Ge=Ge.call(me);!(ot=(Xe=Ge.next()).done)&&(gt.push(Xe.value),!Ue||gt.length!==Ue);ot=!0);}catch(En){pt=!0,ut=En}finally{try{ot||Ge.return==null||Ge.return()}finally{if(pt)throw ut}}return gt}}(s,c)||function(me,Ue){if(me){if(typeof me=="string")return rc(me,Ue);var Ge=Object.prototype.toString.call(me).slice(8,-1);return Ge==="Object"&&me.constructor&&(Ge=me.constructor.name),Ge==="Map"||Ge==="Set"?Array.from(me):Ge==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ge)?rc(me,Ue):void 0}}(s,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),q=oe[0],he=oe[1];if(q in k||he in k){k.x=k[q],k.y=k[he];break}}f.options.targets.push(k)}}var be=ai.snap.set(i);return f.options=w,be},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};$n.snapSize=sc;var pf=(0,Yt.makeModifier)(sc,"snapSize");$n.default=pf;var Zi={};Object.defineProperty(Zi,"__esModule",{value:!0}),Zi.snapEdges=Zi.default=void 0;var oc={start:function(i){var s=i.edges;return s?(i.state.targetFields=i.state.targetFields||[[s.left?"left":"right",s.top?"top":"bottom"]],$n.snapSize.start(i)):null},set:$n.snapSize.set,defaults:(0,V.default)((0,wi.default)($n.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};Zi.snapEdges=oc;var mf=(0,Yt.makeModifier)(oc,"snapEdges");Zi.default=mf;var $o={};Object.defineProperty($o,"__esModule",{value:!0}),Object.defineProperty($o,"default",{enumerable:!0,get:function(){return Pi.default}});var Qo={};Object.defineProperty(Qo,"__esModule",{value:!0}),Object.defineProperty(Qo,"default",{enumerable:!0,get:function(){return Pi.default}});var Ki={};Object.defineProperty(Ki,"__esModule",{value:!0}),Ki.default=void 0;var gf={aspectRatio:qi.default,restrictEdges:Vn.default,restrict:nn.default,restrictRect:Xi.default,restrictSize:Yi.default,snapEdges:Zi.default,snap:ai.default,snapSize:$n.default,spring:$o.default,avoid:Yo.default,transform:Qo.default,rubberband:Ko.default};Ki.default=gf;var kr={};Object.defineProperty(kr,"__esModule",{value:!0}),kr.default=void 0;var vf={id:"modifiers",install:function(i){var s=i.interactStatic;for(var c in i.usePlugin(Yt.default),i.usePlugin(Vs.default),s.modifiers=Ki.default,Ki.default){var u=Ki.default[c],f=u._defaults,x=u._methods;f._methods=x,i.defaults.perAction[c]=f}}},xf=vf;kr.default=xf;var Ai={};function Jo(i){return Jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Jo(i)}function _f(i,s){for(var c=0;c<s.length;c++){var u=s[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(i,u.key,u)}}function ea(i,s){return ea=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},ea(i,s)}function yf(i,s){if(s&&(Jo(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ta(i)}function ta(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Hs(i){return Hs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},Hs(i)}Object.defineProperty(Ai,"__esModule",{value:!0}),Ai.default=Ai.PointerEvent=void 0;var bf=function(i){(function(_,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function");_.prototype=Object.create(S&&S.prototype,{constructor:{value:_,writable:!0,configurable:!0}}),Object.defineProperty(_,"prototype",{writable:!1}),S&&ea(_,S)})(w,i);var s,c,u,f,x=(u=w,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var _,S=Hs(u);if(f){var D=Hs(this).constructor;_=Reflect.construct(S,arguments,D)}else _=S.apply(this,arguments);return yf(this,_)});function w(_,S,D,U,k,J){var oe;if(function(be,me){if(!(be instanceof me))throw new TypeError("Cannot call a class as a function")}(this,w),oe=x.call(this,k),te.pointerExtend(ta(oe),D),D!==S&&te.pointerExtend(ta(oe),S),oe.timeStamp=J,oe.originalEvent=D,oe.type=_,oe.pointerId=te.getPointerId(S),oe.pointerType=te.getPointerType(S),oe.target=U,oe.currentTarget=null,_==="tap"){var q=k.getPointerIndex(S);oe.dt=oe.timeStamp-k.pointers[q].downTime;var he=oe.timeStamp-k.tapTime;oe.double=!!k.prevTap&&k.prevTap.type!=="doubletap"&&k.prevTap.target===oe.target&&he<500}else _==="doubletap"&&(oe.dt=S.timeStamp-k.tapTime,oe.double=!0);return oe}return s=w,(c=[{key:"_subtractOrigin",value:function(_){var S=_.x,D=_.y;return this.pageX-=S,this.pageY-=D,this.clientX-=S,this.clientY-=D,this}},{key:"_addOrigin",value:function(_){var S=_.x,D=_.y;return this.pageX+=S,this.pageY+=D,this.clientX+=S,this.clientY+=D,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&_f(s.prototype,c),Object.defineProperty(s,"prototype",{writable:!1}),w}(He.BaseEvent);Ai.PointerEvent=Ai.default=bf;var Br={};Object.defineProperty(Br,"__esModule",{value:!0}),Br.default=void 0;var Ws={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(i){i.pointerEvents=Ws,i.defaults.actions.pointerEvents=Ws.defaults,(0,V.default)(i.actions.phaselessTypes,Ws.types)},listeners:{"interactions:new":function(i){var s=i.interaction;s.prevTap=null,s.tapTime=0},"interactions:update-pointer":function(i){var s=i.down,c=i.pointerInfo;!s&&c.hold||(c.hold={duration:1/0,timeout:null})},"interactions:move":function(i,s){var c=i.interaction,u=i.pointer,f=i.event,x=i.eventTarget;i.duplicate||c.pointerIsDown&&!c.pointerWasMoved||(c.pointerIsDown&&na(i),li({interaction:c,pointer:u,event:f,eventTarget:x,type:"move"},s))},"interactions:down":function(i,s){(function(c,u){for(var f=c.interaction,x=c.pointer,w=c.event,_=c.eventTarget,S=c.pointerIndex,D=f.pointers[S].hold,U=E.getPath(_),k={interaction:f,pointer:x,event:w,eventTarget:_,type:"hold",targets:[],path:U,node:null},J=0;J<U.length;J++){var oe=U[J];k.node=oe,u.fire("pointerEvents:collect-targets",k)}if(k.targets.length){for(var q=1/0,he=0;he<k.targets.length;he++){var be=k.targets[he].eventable.options.holdDuration;be<q&&(q=be)}D.duration=q,D.timeout=setTimeout(function(){li({interaction:f,eventTarget:_,pointer:x,event:w,type:"hold"},u)},q)}})(i,s),li(i,s)},"interactions:up":function(i,s){na(i),li(i,s),function(c,u){var f=c.interaction,x=c.pointer,w=c.event,_=c.eventTarget;f.pointerWasMoved||li({interaction:f,eventTarget:_,pointer:x,event:w,type:"tap"},u)}(i,s)},"interactions:cancel":function(i,s){na(i),li(i,s)}},PointerEvent:Ai.PointerEvent,fire:li,collectEventTargets:ac,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function li(i,s){var c=i.interaction,u=i.pointer,f=i.event,x=i.eventTarget,w=i.type,_=i.targets,S=_===void 0?ac(i,s):_,D=new Ai.PointerEvent(w,u,f,x,c,s.now());s.fire("pointerEvents:new",{pointerEvent:D});for(var U={interaction:c,pointer:u,event:f,eventTarget:x,targets:S,type:w,pointerEvent:D},k=0;k<S.length;k++){var J=S[k];for(var oe in J.props||{})D[oe]=J.props[oe];var q=(0,de.default)(J.eventable,J.node);if(D._subtractOrigin(q),D.eventable=J.eventable,D.currentTarget=J.node,J.eventable.fire(D),D._addOrigin(q),D.immediatePropagationStopped||D.propagationStopped&&k+1<S.length&&S[k+1].node!==D.currentTarget)break}if(s.fire("pointerEvents:fired",U),w==="tap"){var he=D.double?li({interaction:c,pointer:u,event:f,eventTarget:x,type:"doubletap"},s):D;c.prevTap=he,c.tapTime=he.timeStamp}return D}function ac(i,s){var c=i.interaction,u=i.pointer,f=i.event,x=i.eventTarget,w=i.type,_=c.getPointerIndex(u),S=c.pointers[_];if(w==="tap"&&(c.pointerWasMoved||!S||S.downTarget!==x))return[];for(var D=E.getPath(x),U={interaction:c,pointer:u,event:f,eventTarget:x,type:w,path:D,targets:[],node:null},k=0;k<D.length;k++){var J=D[k];U.node=J,s.fire("pointerEvents:collect-targets",U)}return w==="hold"&&(U.targets=U.targets.filter(function(oe){var q;return oe.eventable.options.holdDuration===((q=c.pointers[_])==null?void 0:q.hold.duration)})),U.targets}function na(i){var s=i.interaction,c=i.pointerIndex,u=s.pointers[c].hold;u&&u.timeout&&(clearTimeout(u.timeout),u.timeout=null)}var Mf=Ws;Br.default=Mf;var js={};function Sf(i){var s=i.interaction;s.holdIntervalHandle&&(clearInterval(s.holdIntervalHandle),s.holdIntervalHandle=null)}Object.defineProperty(js,"__esModule",{value:!0}),js.default=void 0;var wf={id:"pointer-events/holdRepeat",install:function(i){i.usePlugin(Br.default);var s=i.pointerEvents;s.defaults.holdRepeatInterval=0,s.types.holdrepeat=i.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(i,s){return i["pointerEvents:".concat(s)]=Sf,i},{"pointerEvents:new":function(i){var s=i.pointerEvent;s.type==="hold"&&(s.count=(s.count||0)+1)},"pointerEvents:fired":function(i,s){var c=i.interaction,u=i.pointerEvent,f=i.eventTarget,x=i.targets;if(u.type==="hold"&&x.length){var w=x[0].eventable.options.holdRepeatInterval;w<=0||(c.holdIntervalHandle=setTimeout(function(){s.pointerEvents.fire({interaction:c,eventTarget:f,type:"hold",pointer:u,event:u},s)},w))}}})},Ef=wf;js.default=Ef;var qs={};function Tf(i){return(0,V.default)(this.events.options,i),this}Object.defineProperty(qs,"__esModule",{value:!0}),qs.default=void 0;var Cf={id:"pointer-events/interactableTargets",install:function(i){var s=i.Interactable;s.prototype.pointerEvents=Tf;var c=s.prototype._backCompatOption;s.prototype._backCompatOption=function(u,f){var x=c.call(this,u,f);return x===this&&(this.events.options[u]=f),x}},listeners:{"pointerEvents:collect-targets":function(i,s){var c=i.targets,u=i.node,f=i.type,x=i.eventTarget;s.interactables.forEachMatch(u,function(w){var _=w.events,S=_.options;_.types[f]&&_.types[f].length&&w.testIgnoreAllow(S,u,x)&&c.push({node:u,eventable:_,props:{interactable:w}})})},"interactable:new":function(i){var s=i.interactable;s.events.getRect=function(c){return s.getRect(c)}},"interactable:set":function(i,s){var c=i.interactable,u=i.options;(0,V.default)(c.events.options,s.pointerEvents.defaults),(0,V.default)(c.events.options,u.pointerEvents||{})}}},Pf=Cf;qs.default=Pf;var Gr={};Object.defineProperty(Gr,"__esModule",{value:!0}),Gr.default=void 0;var Af={id:"pointer-events",install:function(i){i.usePlugin(Br),i.usePlugin(js.default),i.usePlugin(qs.default)}},Df=Af;Gr.default=Df;var $i={};function lc(i){var s=i.Interactable;i.actions.phases.reflow=!0,s.prototype.reflow=function(c){return function(u,f,x){for(var w=l.default.string(u.target)?qe.from(u._context.querySelectorAll(u.target)):[u.target],_=x.window.Promise,S=_?[]:null,D=function(){var k=w[U],J=u.getRect(k);if(!J)return"break";var oe=qe.find(x.interactions.list,function(Ue){return Ue.interacting()&&Ue.interactable===u&&Ue.element===k&&Ue.prepared.name===f.name}),q=void 0;if(oe)oe.move(),S&&(q=oe._reflowPromise||new _(function(Ue){oe._reflowResolve=Ue}));else{var he=(0,ae.tlbrToXywh)(J),be={page:{x:he.x,y:he.y},client:{x:he.x,y:he.y},timeStamp:x.now()},me=te.coordsToEvent(be);q=function(Ue,Ge,Xe,ut,gt){var ot=Ue.interactions.new({pointerType:"reflow"}),pt={interaction:ot,event:gt,pointer:gt,eventTarget:Xe,phase:"reflow"};ot.interactable=Ge,ot.element=Xe,ot.prevEvent=gt,ot.updatePointer(gt,gt,Xe,!0),te.setZeroCoords(ot.coords.delta),(0,ne.copyAction)(ot.prepared,ut),ot._doPhase(pt);var En=Ue.window.Promise,Qn=En?new En(function(sa){ot._reflowResolve=sa}):void 0;return ot._reflowPromise=Qn,ot.start(ut,Ge,Xe),ot._interacting?(ot.move(pt),ot.end(gt)):(ot.stop(),ot._reflowResolve()),ot.removePointer(gt,gt),Qn}(x,u,k,f,me)}S&&S.push(q)},U=0;U<w.length&&D()!=="break";U++);return S&&_.all(S).then(function(){return u})}(this,c,i)}}Object.defineProperty($i,"__esModule",{value:!0}),$i.default=void 0,$i.install=lc;var Rf={id:"reflow",install:lc,listeners:{"interactions:stop":function(i,s){var c=i.interaction;c.pointerType==="reflow"&&(c._reflowResolve&&c._reflowResolve(),qe.remove(s.interactions.list,c))}}},Lf=Rf;$i.default=Lf;var wn={exports:{}};function ia(i){return ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ia(i)}Object.defineProperty(wn.exports,"__esModule",{value:!0}),wn.exports.default=void 0,Kt.default.use(Dn.default),Kt.default.use(si.default),Kt.default.use(Gr.default),Kt.default.use(Ci.default),Kt.default.use(kr.default),Kt.default.use(Zn.default),Kt.default.use(yt.default),Kt.default.use(An.default),Kt.default.use($i.default);var If=Kt.default;if(wn.exports.default=If,ia(wn)==="object"&&wn)try{wn.exports=Kt.default}catch{}Kt.default.default=Kt.default,yt.default,An.default,Zn.default,Dn.default,Es.default,Ci.default,Kt.default,kr.default,si.default,Gr.default,$i.default,wn=wn.exports;var Di={exports:{}};function ra(i){return ra=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ra(i)}Object.defineProperty(Di.exports,"__esModule",{value:!0}),Di.exports.default=void 0;var Of=wn.default;if(Di.exports.default=Of,ra(Di)==="object"&&Di)try{Di.exports=wn.default}catch{}return wn.default.default=wn.default,Di.exports})})(B0);const G0=k0(el),{abs:bx,cos:V0,sin:H0,cosh:Mx,sinh:Sx,acos:wx,acosh:Ex,min:Tx,max:tl,round:Cx,sqrt:vo,sign:Px,floor:Ax,log:Dx,PI:po}=Math,Ye={curvature:0,edges:[],vertices:[],ranges:[]},W0=a=>{Object.assign(Ye,a)},j0=(a,e,t=null)=>{const n=t===null?Ye.curvature:t;let r=0;for(let o=0;o<a.length;o++)r+=a[o]*e[o]*(o===a.length-1&&n||1);return r},Ga=(a,e)=>{const[t,n]=a,r=V0(e),o=H0(e);a[0]=t*r-n*o,a[1]=t*o+n*r},Va=(a,e)=>{if(Ye.curvature!==0){const t=e/vo(j0(a,a,1)),n=new Array(Pe.dimensions-1);for(let r=0;r<Pe.dimensions-1;r++)n[r]=a[r]*t;xo(a,n)}else for(let t=0;t<Pe.dimensions;t++)a[t]*=1-e},xo=(a,e)=>{const[t,n,r,o]=a,[d,l,p]=e,h=Ye.curvature,m=vo(1-h*d*d),g=vo(1-h*l*l),v=d,M=l;if(h!==0)if(Pe.dimensions===3)a[0]=t*m+n*v*M+r*v*g,a[1]=+n*g-h*r*M,a[2]=-h*t*v+n*m*M+r*m*g;else if(p){const A=vo(1-h*p*p),b=p;a[0]=t*m-h*o*v,a[1]=-h*t*v*M+n*g-h*o*m*M,a[2]=-h*t*g*v*b-h*n*M*b+r*A-h*o*m*g*b,a[3]=t*g*A*v+n*A*M+r*b+o*m*g*A}else a[0]=t*m-h*o*v,a[1]=-h*t*v*M+n*g-h*o*m*M,a[3]=t*g*v+n*M+o*m*g;else a[0]=t+d,a[1]=n+l,p&&(a[2]=r+p)},Cu={type:"change"},Ha={type:"start"},Pu={type:"end"};class q0 extends ji{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",Ut),this._domElementKeyEvents=z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ut),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cu),n.update(),o=r.NONE},this.update=function(){const z=new H,X=new Wi().setFromUnitVectors(e.up,new H(0,1,0)),we=X.clone().invert(),ye=new H,Oe=new Wi,Ne=2*Math.PI;return function(){const Ke=n.object.position;z.copy(Ke).sub(n.target),z.applyQuaternion(X),l.setFromVector3(z),n.autoRotate&&o===r.NONE&&N(Z()),n.enableDamping?(l.theta+=p.theta*n.dampingFactor,l.phi+=p.phi*n.dampingFactor):(l.theta+=p.theta,l.phi+=p.phi);let tt=n.minAzimuthAngle,lt=n.maxAzimuthAngle;return isFinite(tt)&&isFinite(lt)&&(tt<-Math.PI?tt+=Ne:tt>Math.PI&&(tt-=Ne),lt<-Math.PI?lt+=Ne:lt>Math.PI&&(lt-=Ne),tt<=lt?l.theta=Math.max(tt,Math.min(lt,l.theta)):l.theta=l.theta>(tt+lt)/2?Math.max(tt,l.theta):Math.min(lt,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=h,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),z.setFromSpherical(l),z.applyQuaternion(we),Ke.copy(n.target).add(z),n.object.lookAt(n.target),n.enableDamping===!0?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),m.set(0,0,0)),h=1,g||ye.distanceToSquared(n.object.position)>d||8*(1-Oe.dot(n.object.quaternion))>d?(n.dispatchEvent(Cu),ye.copy(n.object.position),Oe.copy(n.object.quaternion),g=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ie),n.domElement.removeEventListener("pointerdown",Ct),n.domElement.removeEventListener("pointercancel",At),n.domElement.removeEventListener("wheel",en),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",Pt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ut),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const d=1e-6,l=new Tu,p=new Tu;let h=1;const m=new H;let g=!1;const v=new Re,M=new Re,A=new Re,b=new Re,y=new Re,P=new Re,O=new Re,C=new Re,F=new Re,L=[],B={};function Z(){return 2*Math.PI/60/60*n.autoRotateSpeed}function E(){return Math.pow(.95,n.zoomSpeed)}function N(z){p.theta-=z}function W(z){p.phi-=z}const le=function(){const z=new H;return function(we,ye){z.setFromMatrixColumn(ye,0),z.multiplyScalar(-we),m.add(z)}}(),ue=function(){const z=new H;return function(we,ye){n.screenSpacePanning===!0?z.setFromMatrixColumn(ye,1):(z.setFromMatrixColumn(ye,0),z.crossVectors(n.object.up,z)),z.multiplyScalar(we),m.add(z)}}(),Q=function(){const z=new H;return function(we,ye){const Oe=n.domElement;if(n.object.isPerspectiveCamera){const Ne=n.object.position;z.copy(Ne).sub(n.target);let Fe=z.length();Fe*=Math.tan(n.object.fov/2*Math.PI/180),le(2*we*Fe/Oe.clientHeight,n.object.matrix),ue(2*ye*Fe/Oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(le(we*(n.object.right-n.object.left)/n.object.zoom/Oe.clientWidth,n.object.matrix),ue(ye*(n.object.top-n.object.bottom)/n.object.zoom/Oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(z){n.object.isPerspectiveCamera?h/=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*z)),n.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(z){n.object.isPerspectiveCamera?h*=z:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/z)),n.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ae(z){v.set(z.clientX,z.clientY)}function xe(z){O.set(z.clientX,z.clientY)}function ce(z){b.set(z.clientX,z.clientY)}function de(z){M.set(z.clientX,z.clientY),A.subVectors(M,v).multiplyScalar(n.rotateSpeed);const X=n.domElement;N(2*Math.PI*A.x/X.clientHeight),W(2*Math.PI*A.y/X.clientHeight),v.copy(M),n.update()}function pe(z){C.set(z.clientX,z.clientY),F.subVectors(C,O),F.y>0?j(E()):F.y<0&&V(E()),O.copy(C),n.update()}function Ie(z){y.set(z.clientX,z.clientY),P.subVectors(y,b).multiplyScalar(n.panSpeed),Q(P.x,P.y),b.copy(y),n.update()}function ee(z){z.deltaY<0?V(E()):z.deltaY>0&&j(E()),n.update()}function fe(z){let X=!1;switch(z.code){case n.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(-n.keyPanSpeed,0),X=!0;break}X&&(z.preventDefault(),n.update())}function te(){if(L.length===1)v.set(L[0].pageX,L[0].pageY);else{const z=.5*(L[0].pageX+L[1].pageX),X=.5*(L[0].pageY+L[1].pageY);v.set(z,X)}}function $(){if(L.length===1)b.set(L[0].pageX,L[0].pageY);else{const z=.5*(L[0].pageX+L[1].pageX),X=.5*(L[0].pageY+L[1].pageY);b.set(z,X)}}function Ce(){const z=L[0].pageX-L[1].pageX,X=L[0].pageY-L[1].pageY,we=Math.sqrt(z*z+X*X);O.set(0,we)}function De(){n.enableZoom&&Ce(),n.enablePan&&$()}function Le(){n.enableZoom&&Ce(),n.enableRotate&&te()}function Ae(z){if(L.length==1)M.set(z.pageX,z.pageY);else{const we=ze(z),ye=.5*(z.pageX+we.x),Oe=.5*(z.pageY+we.y);M.set(ye,Oe)}A.subVectors(M,v).multiplyScalar(n.rotateSpeed);const X=n.domElement;N(2*Math.PI*A.x/X.clientHeight),W(2*Math.PI*A.y/X.clientHeight),v.copy(M)}function Be(z){if(L.length===1)y.set(z.pageX,z.pageY);else{const X=ze(z),we=.5*(z.pageX+X.x),ye=.5*(z.pageY+X.y);y.set(we,ye)}P.subVectors(y,b).multiplyScalar(n.panSpeed),Q(P.x,P.y),b.copy(y)}function He(z){const X=ze(z),we=z.pageX-X.x,ye=z.pageY-X.y,Oe=Math.sqrt(we*we+ye*ye);C.set(0,Oe),F.set(0,Math.pow(C.y/O.y,n.zoomSpeed)),j(F.y),O.copy(C)}function Ze(z){n.enableZoom&&He(z),n.enablePan&&Be(z)}function rt(z){n.enableZoom&&He(z),n.enableRotate&&Ae(z)}function Ct(z){n.enabled!==!1&&(L.length===0&&(n.domElement.setPointerCapture(z.pointerId),n.domElement.addEventListener("pointermove",qe),n.domElement.addEventListener("pointerup",Pt)),ve(z),z.pointerType==="touch"?I(z):at(z))}function qe(z){n.enabled!==!1&&(z.pointerType==="touch"?T(z):dt(z))}function Pt(z){_e(z),L.length===0&&(n.domElement.releasePointerCapture(z.pointerId),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",Pt)),n.dispatchEvent(Pu),o=r.NONE}function At(z){_e(z)}function at(z){let X;switch(z.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case Qi.DOLLY:if(n.enableZoom===!1)return;xe(z),o=r.DOLLY;break;case Qi.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enablePan===!1)return;ce(z),o=r.PAN}else{if(n.enableRotate===!1)return;ae(z),o=r.ROTATE}break;case Qi.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(n.enableRotate===!1)return;ae(z),o=r.ROTATE}else{if(n.enablePan===!1)return;ce(z),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(Ha)}function dt(z){switch(o){case r.ROTATE:if(n.enableRotate===!1)return;de(z);break;case r.DOLLY:if(n.enableZoom===!1)return;pe(z);break;case r.PAN:if(n.enablePan===!1)return;Ie(z);break}}function en(z){n.enabled===!1||n.enableZoom===!1||o!==r.NONE||(z.preventDefault(),n.dispatchEvent(Ha),ee(z),n.dispatchEvent(Pu))}function Ut(z){n.enabled===!1||n.enablePan===!1||fe(z)}function I(z){switch(Se(z),L.length){case 1:switch(n.touches.ONE){case Ji.ROTATE:if(n.enableRotate===!1)return;te(),o=r.TOUCH_ROTATE;break;case Ji.PAN:if(n.enablePan===!1)return;$(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(n.touches.TWO){case Ji.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(),o=r.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(Ha)}function T(z){switch(Se(z),o){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ae(z),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Be(z),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ze(z),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;rt(z),n.update();break;default:o=r.NONE}}function ie(z){n.enabled!==!1&&z.preventDefault()}function ve(z){L.push(z)}function _e(z){delete B[z.pointerId];for(let X=0;X<L.length;X++)if(L[X].pointerId==z.pointerId){L.splice(X,1);return}}function Se(z){let X=B[z.pointerId];X===void 0&&(X=new Re,B[z.pointerId]=X),X.set(z.pageX,z.pageY)}function ze(z){const X=z.pointerId===L[0].pointerId?L[1]:L[0];return B[X.pointerId]}n.domElement.addEventListener("contextmenu",ie),n.domElement.addEventListener("pointerdown",Ct),n.domElement.addEventListener("pointercancel",At),n.domElement.addEventListener("wheel",en,{passive:!1}),this.update()}}class Mi{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const X0=new To(-1,1,1,-1,0,1),hl=new kn;hl.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3));hl.setAttribute("uv",new cn([0,2,0,0,2,0],2));class Ao{constructor(e){this._mesh=new mn(hl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,X0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Y0={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class Z0 extends Mi{constructor(e,t,n){super(),this.scene=e,this.camera=t;const r=n.focus!==void 0?n.focus:1,o=n.aspect!==void 0?n.aspect:t.aspect,d=n.aperture!==void 0?n.aperture:.025,l=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new jt(1,1,{minFilter:Ft,magFilter:Ft}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new yi,this.materialDepth.depthPacking=hs,this.materialDepth.blending=Ht;const p=Y0,h=pn.clone(p.uniforms);h.tDepth.value=this.renderTargetDepth.texture,h.focus.value=r,h.aspect.value=o,h.aperture.value=d,h.maxblur.value=l,h.nearClip.value=t.near,h.farClip.value=t.far,this.materialBokeh=new _t({defines:Object.assign({},p.defines),uniforms:h,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}),this.uniforms=h,this.needsSwap=!1,this.fsQuad=new Ao(this.materialBokeh),this._oldClearColor=new We}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=o}setSize(e,t){this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const is={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _o extends Mi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pn.clone(e.uniforms),this.material=new _t({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ao(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Au extends Mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let d,l;this.inverse?(d=0,l=1):(d=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,d,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class K0 extends Mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $0{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Re);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _o(is),this.clock=new z0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,o=this.passes.length;r<o;r++){const d=this.passes[r];if(d.enabled!==!1){if(d.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),d.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),d.needsSwap){if(n){const l=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Au!==void 0&&(d instanceof Au?n=!0:d instanceof K0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Q0 extends Mi{constructor(e,t,n,r,o){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let o,d;this.overrideMaterial!==void 0&&(d=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=d),e.autoClear=r}}const mo={defines:{NUM_SAMPLES:7,NUM_RINGS:4,NORMAL_TEXTURE:0,DIFFUSE_TEXTURE:0,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},tDiffuse:{value:null},tNormal:{value:null},size:{value:new Re(512,512)},cameraNear:{value:1},cameraFar:{value:100},cameraProjectionMatrix:{value:new Tt},cameraInverseProjectionMatrix:{value:new Tt},scale:{value:1},intensity:{value:.1},bias:{value:.5},minResolution:{value:0},kernelRadius:{value:100},randomSeed:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		#if DIFFUSE_TEXTURE == 1
		uniform sampler2D tDiffuse;
		#endif

		uniform sampler2D tDepth;

		#if NORMAL_TEXTURE == 1
		uniform sampler2D tNormal;
		#endif

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float scale;
		uniform float intensity;
		uniform float bias;
		uniform float kernelRadius;
		uniform float minResolution;
		uniform vec2 size;
		uniform float randomSeed;

		// RGBA depth

		#include <packing>

		vec4 getDefaultColor( const in vec2 screenPosition ) {
			#if DIFFUSE_TEXTURE == 1
			return texture2D( tDiffuse, vUv );
			#else
			return vec4( 1.0 );
			#endif
		}

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {
			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];
			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );
			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;
		}

		vec3 getViewNormal( const in vec3 viewPosition, const in vec2 screenPosition ) {
			#if NORMAL_TEXTURE == 1
			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );
			#else
			return normalize( cross( dFdx( viewPosition ), dFdy( viewPosition ) ) );
			#endif
		}

		float scaleDividedByCameraFar;
		float minResolutionMultipliedByCameraFar;

		float getOcclusion( const in vec3 centerViewPosition, const in vec3 centerViewNormal, const in vec3 sampleViewPosition ) {
			vec3 viewDelta = sampleViewPosition - centerViewPosition;
			float viewDistance = length( viewDelta );
			float scaledScreenDistance = scaleDividedByCameraFar * viewDistance;

			return max(0.0, (dot(centerViewNormal, viewDelta) - minResolutionMultipliedByCameraFar) / scaledScreenDistance - bias) / (1.0 + pow2( scaledScreenDistance ) );
		}

		// moving costly divides into consts
		const float ANGLE_STEP = PI2 * float( NUM_RINGS ) / float( NUM_SAMPLES );
		const float INV_NUM_SAMPLES = 1.0 / float( NUM_SAMPLES );

		float getAmbientOcclusion( const in vec3 centerViewPosition ) {
			// precompute some variables require in getOcclusion.
			scaleDividedByCameraFar = scale / cameraFar;
			minResolutionMultipliedByCameraFar = minResolution * cameraFar;
			vec3 centerViewNormal = getViewNormal( centerViewPosition, vUv );

			// jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/
			float angle = rand( vUv + randomSeed ) * PI2;
			vec2 radius = vec2( kernelRadius * INV_NUM_SAMPLES ) / size;
			vec2 radiusStep = radius;

			float occlusionSum = 0.0;
			float weightSum = 0.0;

			for( int i = 0; i < NUM_SAMPLES; i ++ ) {
				vec2 sampleUv = vUv + vec2( cos( angle ), sin( angle ) ) * radius;
				radius += radiusStep;
				angle += ANGLE_STEP;

				float sampleDepth = getDepth( sampleUv );
				if( sampleDepth >= ( 1.0 - EPSILON ) ) {
					continue;
				}

				float sampleViewZ = getViewZ( sampleDepth );
				vec3 sampleViewPosition = getViewPosition( sampleUv, sampleDepth, sampleViewZ );
				occlusionSum += getOcclusion( centerViewPosition, centerViewNormal, sampleViewPosition );
				weightSum += 1.0;
			}

			if( weightSum == 0.0 ) discard;

			return occlusionSum * ( intensity / weightSum );
		}

		void main() {
			float centerDepth = getDepth( vUv );
			if( centerDepth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = getViewZ( centerDepth );
			vec3 viewPosition = getViewPosition( vUv, centerDepth, centerViewZ );

			float ambientOcclusion = getAmbientOcclusion( viewPosition );

			gl_FragColor = getDefaultColor( vUv );
			gl_FragColor.xyz *=  1.0 - ambientOcclusion;
		}`},hi={defines:{KERNEL_RADIUS:4,DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tDiffuse:{value:null},size:{value:new Re(512,512)},sampleUvOffsets:{value:[new Re(0,0)]},sampleWeights:{value:[1]},tDepth:{value:null},cameraNear:{value:10},cameraFar:{value:1e3},depthCutoff:{value:10}},vertexShader:`

		#include <common>

		uniform vec2 size;

		varying vec2 vUv;
		varying vec2 vInvSize;

		void main() {
			vUv = uv;
			vInvSize = 1.0 / size;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		#include <common>
		#include <packing>

		uniform sampler2D tDiffuse;
		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform float depthCutoff;

		uniform vec2 sampleUvOffsets[ KERNEL_RADIUS + 1 ];
		uniform float sampleWeights[ KERNEL_RADIUS + 1 ];

		varying vec2 vUv;
		varying vec2 vInvSize;

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
			return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}

		void main() {
			float depth = getDepth( vUv );
			if( depth >= ( 1.0 - EPSILON ) ) {
				discard;
			}

			float centerViewZ = -getViewZ( depth );
			bool rBreak = false, lBreak = false;

			float weightSum = sampleWeights[0];
			vec4 diffuseSum = texture2D( tDiffuse, vUv ) * weightSum;

			for( int i = 1; i <= KERNEL_RADIUS; i ++ ) {

				float sampleWeight = sampleWeights[i];
				vec2 sampleUvOffset = sampleUvOffsets[i] * vInvSize;

				vec2 sampleUv = vUv + sampleUvOffset;
				float viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) rBreak = true;

				if( ! rBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

				sampleUv = vUv - sampleUvOffset;
				viewZ = -getViewZ( getDepth( sampleUv ) );

				if( abs( viewZ - centerViewZ ) > depthCutoff ) lBreak = true;

				if( ! lBreak ) {
					diffuseSum += texture2D( tDiffuse, sampleUv ) * sampleWeight;
					weightSum += sampleWeight;
				}

			}

			gl_FragColor = diffuseSum / weightSum;
		}`},Mo={createSampleWeights:function(a,e){const t=[];for(let n=0;n<=a;n++)t.push(J0(n,e));return t},createSampleOffsets:function(a,e){const t=[];for(let n=0;n<=a;n++)t.push(e.clone().multiplyScalar(n));return t},configure:function(a,e,t,n){a.defines.KERNEL_RADIUS=e,a.uniforms.sampleUvOffsets.value=Mo.createSampleOffsets(e,n),a.uniforms.sampleWeights.value=Mo.createSampleWeights(e,t),a.needsUpdate=!0}};function J0(a,e){return Math.exp(-(a*a)/(2*(e*e)))/(Math.sqrt(2*Math.PI)*e)}const Wa={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		#include <packing>

		void main() {

			float depth = 1.0 - unpackRGBAToDepth( texture2D( tDiffuse, vUv ) );
			gl_FragColor = vec4( vec3( depth ), opacity );

		}`};class nl extends Mi{constructor(e,t,n=!1,r=!1,o=new Re(256,256)){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.supportsDepthTextureExtension=n,this.supportsNormalTexture=r,this.originalClearColor=new We,this._oldClearColor=new We,this.oldClearAlpha=1,this.params={output:0,saoBias:.5,saoIntensity:.18,saoScale:1,saoKernelRadius:100,saoMinResolution:0,saoBlur:!0,saoBlurRadius:8,saoBlurStdDev:4,saoBlurDepthCutoff:.01},this.resolution=new Re(o.x,o.y),this.saoRenderTarget=new jt(this.resolution.x,this.resolution.y),this.blurIntermediateRenderTarget=this.saoRenderTarget.clone(),this.beautyRenderTarget=this.saoRenderTarget.clone(),this.normalRenderTarget=new jt(this.resolution.x,this.resolution.y,{minFilter:Ft,magFilter:Ft}),this.depthRenderTarget=this.normalRenderTarget.clone();let d;this.supportsDepthTextureExtension&&(d=new td,d.type=ol,this.beautyRenderTarget.depthTexture=d,this.beautyRenderTarget.depthBuffer=!0),this.depthMaterial=new yi,this.depthMaterial.depthPacking=hs,this.depthMaterial.blending=Ht,this.normalMaterial=new id,this.normalMaterial.blending=Ht,this.saoMaterial=new _t({defines:Object.assign({},mo.defines),fragmentShader:mo.fragmentShader,vertexShader:mo.vertexShader,uniforms:pn.clone(mo.uniforms)}),this.saoMaterial.extensions.derivatives=!0,this.saoMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.saoMaterial.defines.NORMAL_TEXTURE=this.supportsNormalTexture?1:0,this.saoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.saoMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?d:this.depthRenderTarget.texture,this.saoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.saoMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.blending=Ht,this.vBlurMaterial=new _t({uniforms:pn.clone(hi.uniforms),defines:Object.assign({},hi.defines),vertexShader:hi.vertexShader,fragmentShader:hi.fragmentShader}),this.vBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.vBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.vBlurMaterial.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.vBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?d:this.depthRenderTarget.texture,this.vBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.vBlurMaterial.blending=Ht,this.hBlurMaterial=new _t({uniforms:pn.clone(hi.uniforms),defines:Object.assign({},hi.defines),vertexShader:hi.vertexShader,fragmentShader:hi.fragmentShader}),this.hBlurMaterial.defines.DEPTH_PACKING=this.supportsDepthTextureExtension?0:1,this.hBlurMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.hBlurMaterial.uniforms.tDiffuse.value=this.blurIntermediateRenderTarget.texture,this.hBlurMaterial.uniforms.tDepth.value=this.supportsDepthTextureExtension?d:this.depthRenderTarget.texture,this.hBlurMaterial.uniforms.size.value.set(this.resolution.x,this.resolution.y),this.hBlurMaterial.blending=Ht,this.materialCopy=new _t({uniforms:pn.clone(is.uniforms),vertexShader:is.vertexShader,fragmentShader:is.fragmentShader,blending:Ht}),this.materialCopy.transparent=!0,this.materialCopy.depthTest=!1,this.materialCopy.depthWrite=!1,this.materialCopy.blending=yo,this.materialCopy.blendSrc=Uu,this.materialCopy.blendDst=Xa,this.materialCopy.blendEquation=mi,this.materialCopy.blendSrcAlpha=Ou,this.materialCopy.blendDstAlpha=Xa,this.materialCopy.blendEquationAlpha=mi,this.depthCopy=new _t({uniforms:pn.clone(Wa.uniforms),vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader,blending:Ht}),this.fsQuad=new Ao(null)}render(e,t,n){if(this.renderToScreen&&(this.materialCopy.blending=Ht,this.materialCopy.uniforms.tDiffuse.value=n.texture,this.materialCopy.needsUpdate=!0,this.renderPass(e,this.materialCopy,null)),this.params.output===1)return;e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setRenderTarget(this.depthRenderTarget),e.clear(),this.saoMaterial.uniforms.bias.value=this.params.saoBias,this.saoMaterial.uniforms.intensity.value=this.params.saoIntensity,this.saoMaterial.uniforms.scale.value=this.params.saoScale,this.saoMaterial.uniforms.kernelRadius.value=this.params.saoKernelRadius,this.saoMaterial.uniforms.minResolution.value=this.params.saoMinResolution,this.saoMaterial.uniforms.cameraNear.value=this.camera.near,this.saoMaterial.uniforms.cameraFar.value=this.camera.far;const o=this.params.saoBlurDepthCutoff*(this.camera.far-this.camera.near);this.vBlurMaterial.uniforms.depthCutoff.value=o,this.hBlurMaterial.uniforms.depthCutoff.value=o,this.vBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.vBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.hBlurMaterial.uniforms.cameraNear.value=this.camera.near,this.hBlurMaterial.uniforms.cameraFar.value=this.camera.far,this.params.saoBlurRadius=Math.floor(this.params.saoBlurRadius),(this.prevStdDev!==this.params.saoBlurStdDev||this.prevNumSamples!==this.params.saoBlurRadius)&&(Mo.configure(this.vBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Re(0,1)),Mo.configure(this.hBlurMaterial,this.params.saoBlurRadius,this.params.saoBlurStdDev,new Re(1,0)),this.prevStdDev=this.params.saoBlurStdDev,this.prevNumSamples=this.params.saoBlurRadius),e.setClearColor(0),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.supportsDepthTextureExtension||this.renderOverride(e,this.depthMaterial,this.depthRenderTarget,0,1),this.supportsNormalTexture&&this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.renderPass(e,this.saoMaterial,this.saoRenderTarget,16777215,1),this.params.saoBlur&&(this.renderPass(e,this.vBlurMaterial,this.blurIntermediateRenderTarget,16777215,1),this.renderPass(e,this.hBlurMaterial,this.saoRenderTarget,16777215,1));let d=this.materialCopy;this.params.output===3?this.supportsDepthTextureExtension?(this.materialCopy.uniforms.tDiffuse.value=this.beautyRenderTarget.depthTexture,this.materialCopy.needsUpdate=!0):(this.depthCopy.uniforms.tDiffuse.value=this.depthRenderTarget.texture,this.depthCopy.needsUpdate=!0,d=this.depthCopy):this.params.output===4?(this.materialCopy.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.materialCopy.needsUpdate=!0):(this.materialCopy.uniforms.tDiffuse.value=this.saoRenderTarget.texture,this.materialCopy.needsUpdate=!0),this.params.output===0?d.blending=yo:d.blending=Ht,this.renderPass(e,d,this.renderToScreen?null:n),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}renderPass(e,t,n,r,o){e.getClearColor(this.originalClearColor);const d=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=l,e.setClearColor(this.originalClearColor),e.setClearAlpha(d)}renderOverride(e,t,n,r,o){e.getClearColor(this.originalClearColor);const d=e.getClearAlpha(),l=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,o=t.clearAlpha||o,r!=null&&(e.setClearColor(r),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=l,e.setClearColor(this.originalClearColor),e.setClearAlpha(d)}setSize(e,t){this.beautyRenderTarget.setSize(e,t),this.saoRenderTarget.setSize(e,t),this.blurIntermediateRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.depthRenderTarget.setSize(e,t),this.saoMaterial.uniforms.size.value.set(e,t),this.saoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.saoMaterial.uniforms.cameraProjectionMatrix.value=this.camera.projectionMatrix,this.saoMaterial.needsUpdate=!0,this.vBlurMaterial.uniforms.size.value.set(e,t),this.vBlurMaterial.needsUpdate=!0,this.hBlurMaterial.uniforms.size.value.set(e,t),this.hBlurMaterial.needsUpdate=!0}dispose(){this.saoRenderTarget.dispose(),this.blurIntermediateRenderTarget.dispose(),this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.depthRenderTarget.dispose(),this.depthMaterial.dispose(),this.normalMaterial.dispose(),this.saoMaterial.dispose(),this.vBlurMaterial.dispose(),this.hBlurMaterial.dispose(),this.materialCopy.dispose(),this.depthCopy.dispose(),this.fsQuad.dispose()}}nl.OUTPUT={Beauty:1,Default:0,SAO:2,Depth:3,Normal:4};const ex={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Sr extends Mi{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new We(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(o,d),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new jt(o,d);v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const M=new jt(o,d);M.texture.name="UnrealBloomPass.v"+g,M.texture.generateMipmaps=!1,this.renderTargetsVertical.push(M),o=Math.round(o/2),d=Math.round(d/2)}const l=ex;this.highPassUniforms=pn.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];o=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(p[g])),this.separableBlurMaterials[g].uniforms.texSize.value=new Re(o,d),o=Math.round(o/2),d=Math.round(d/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const m=is;this.copyUniforms=pn.clone(m.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new _t({uniforms:this.copyUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,blending:qa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new We,this.oldClearAlpha=1,this.basic=new Bi,this.fsQuad=new Ao(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,r),this.renderTargetsVertical[o].setSize(n,r),this.separableBlurMaterials[o].uniforms.texSize.value=new Re(n,r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const d=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this.fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[p].uniforms.direction.value=Sr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=Sr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[p];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=d}getSeperableBlurMaterial(e){return new _t({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Sr.BlurDirectionX=new Re(1,0);Sr.BlurDirectionY=new Re(0,1);const tx={uniforms:{tDiffuse:{value:null},resolution:{value:new Re(1/1024,1/512)}},vertexShader:`

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
	`},nx={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float l = luminance( texel.rgb );

			gl_FragColor = vec4( l, l, l, texel.w );

		}`},ix={uniforms:{tDiffuse:{value:null},resolution:{value:new Re}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		void main() {

			vec2 texel = vec2( 1.0 / resolution.x, 1.0 / resolution.y );

		// kernel definition (in glsl matrices are filled in column-major order)

			const mat3 Gx = mat3( -1, -2, -1, 0, 0, 0, 1, 2, 1 ); // x direction kernel
			const mat3 Gy = mat3( -1, 0, 1, -2, 0, 2, -1, 0, 1 ); // y direction kernel

		// fetch the 3x3 neighbourhood of a fragment

		// first column

			float tx0y0 = texture2D( tDiffuse, vUv + texel * vec2( -1, -1 ) ).r;
			float tx0y1 = texture2D( tDiffuse, vUv + texel * vec2( -1,  0 ) ).r;
			float tx0y2 = texture2D( tDiffuse, vUv + texel * vec2( -1,  1 ) ).r;

		// second column

			float tx1y0 = texture2D( tDiffuse, vUv + texel * vec2(  0, -1 ) ).r;
			float tx1y1 = texture2D( tDiffuse, vUv + texel * vec2(  0,  0 ) ).r;
			float tx1y2 = texture2D( tDiffuse, vUv + texel * vec2(  0,  1 ) ).r;

		// third column

			float tx2y0 = texture2D( tDiffuse, vUv + texel * vec2(  1, -1 ) ).r;
			float tx2y1 = texture2D( tDiffuse, vUv + texel * vec2(  1,  0 ) ).r;
			float tx2y2 = texture2D( tDiffuse, vUv + texel * vec2(  1,  1 ) ).r;

		// gradient value in x direction

			float valueGx = Gx[0][0] * tx0y0 + Gx[1][0] * tx1y0 + Gx[2][0] * tx2y0 +
				Gx[0][1] * tx0y1 + Gx[1][1] * tx1y1 + Gx[2][1] * tx2y1 +
				Gx[0][2] * tx0y2 + Gx[1][2] * tx1y2 + Gx[2][2] * tx2y2;

		// gradient value in y direction

			float valueGy = Gy[0][0] * tx0y0 + Gy[1][0] * tx1y0 + Gy[2][0] * tx2y0 +
				Gy[0][1] * tx0y1 + Gy[1][1] * tx1y1 + Gy[2][1] * tx2y1 +
				Gy[0][2] * tx0y2 + Gy[1][2] * tx1y2 + Gy[2][2] * tx2y2;

		// magnitute of the total gradient

			float G = sqrt( ( valueGx * valueGx ) + ( valueGy * valueGy ) );

			gl_FragColor = vec4( vec3( G ), 1 );

		}`},rx={uniforms:{tInput:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tInput;

		void main() {

			gl_FragColor = vec4( 1.0 ) - texture2D( tInput, vUv );

		}`},sx={uniforms:{tInput:{value:null},fStepSize:{value:1},vSunPositionScreenSpace:{value:new H}},vertexShader:`

		varying vec2 vUv;

		void main() {

		 vUv = uv;
		 gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

	 }`,fragmentShader:`

		#define TAPS_PER_PASS 6.0

		varying vec2 vUv;

		uniform sampler2D tInput;

		uniform vec3 vSunPositionScreenSpace;
		uniform float fStepSize; // filter step size

		void main() {

		// delta from current pixel to "sun" position

			vec2 delta = vSunPositionScreenSpace.xy - vUv;
			float dist = length( delta );

		// Step vector (uv space)

			vec2 stepv = fStepSize * delta / dist;

		// Number of iterations between pixel and sun

			float iters = dist/fStepSize;

			vec2 uv = vUv.xy;
			float col = 0.0;

		// This breaks ANGLE in Chrome 22
		//	- see http://code.google.com/p/chromium/issues/detail?id=153105

		/*
		// Unrolling didnt do much on my hardware (ATI Mobility Radeon 3450),
		// so i've just left the loop

		"for ( float i = 0.0; i < TAPS_PER_PASS; i += 1.0 ) {",

		// Accumulate samples, making sure we dont walk past the light source.

		// The check for uv.y < 1 would not be necessary with "border" UV wrap
		// mode, with a black border color. I don't think this is currently
		// exposed by three.js. As a result there might be artifacts when the
		// sun is to the left, right or bottom of screen as these cases are
		// not specifically handled.

		"	col += ( i <= iters && uv.y < 1.0 ? texture2D( tInput, uv ).r : 0.0 );",
		"	uv += stepv;",

		"}",
		*/

		// Unrolling loop manually makes it work in ANGLE

			float f = min( 1.0, max( vSunPositionScreenSpace.z / 1000.0, 0.0 ) ); // used to fade out godrays

			if ( 0.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 1.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 2.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 3.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 4.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

			if ( 5.0 <= iters && uv.y < 1.0 ) col += texture2D( tInput, uv ).r * f;
			uv += stepv;

		// Should technically be dividing by 'iters but 'TAPS_PER_PASS' smooths out
		// objectionable artifacts, in particular near the sun position. The side
		// effect is that the result is darker than it should be around the sun, as
		// TAPS_PER_PASS is greater than the number of samples actually accumulated.
		// When the result is inverted (in the shader 'godrays_combine this produces
		// a slight bright spot at the position of the sun, even when it is occluded.

			gl_FragColor = vec4( col/TAPS_PER_PASS );
			gl_FragColor.a = 1.0;

		}`},ox={uniforms:{tColors:{value:null},tGodRays:{value:null},fGodRayIntensity:{value:.69}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tColors;
		uniform sampler2D tGodRays;

		uniform float fGodRayIntensity;

		void main() {

		// Since THREE.MeshDepthMaterial renders foreground objects white and background
		// objects black, the god-rays will be white streaks. Therefore value is inverted
		// before being combined with tColors

			gl_FragColor = texture2D( tColors, vUv ) + fGodRayIntensity * vec4( 1.0 - texture2D( tGodRays, vUv ).r );
			gl_FragColor.a = 1.0;

		}`},ax={uniforms:{vSunPositionScreenSpace:{value:new H},fAspect:{value:1},sunColor:{value:new We(16772608)},bgColor:{value:new We(0)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		varying vec2 vUv;

		uniform vec3 vSunPositionScreenSpace;
		uniform float fAspect;

		uniform vec3 sunColor;
		uniform vec3 bgColor;

		void main() {

			vec2 diff = vUv - vSunPositionScreenSpace.xy;

		// Correct for aspect ratio

			diff.x *= fAspect;

			float prop = clamp( length( diff ) / 0.5, 0.0, 1.0 );
			prop = 0.35 * pow( 1.0 - prop, 3.0 );

			gl_FragColor.xyz = ( vSunPositionScreenSpace.z > 0.0 ) ? mix( sunColor, bgColor, 1.0 - prop ) : bgColor;
			gl_FragColor.w = 1.0;

		}`};class lx extends Mi{constructor(e,t,n={}){super(),this.scene=e,this.camera=t,this.orthoScene=new nd,this.orthoCamera=new To(-.5,.5,.5,-.5,-1e4,1e4),this.orthoCamera.position.z=100,this.orthoScene.add(this.orthoCamera),this.background=n.background||1297,this.sunColor=n.sunColor||16776960,this.multiplier=n.multiplier||.25,this.clipPosition=new xt,this.sunPosition=n.sunPosition||new H(0,1e3,1e3),this.screenSpacePosition=new H,this.rtTextureDepth=new jt(1,1),this.rtTextureDepthMask=new jt(1,1),this.rtTextureGodRays1=new jt(1,1),this.rtTextureGodRays2=new jt(1,1),this.materialDepth=new yi;const r=rx;this.godrayMaskUniforms=pn.clone(r.uniforms),this.materialGodraysDepthMask=new _t({uniforms:this.godrayMaskUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader});const o=sx;this.godrayGenUniforms=pn.clone(o.uniforms),this.materialGodraysGenerate=new _t({uniforms:this.godrayGenUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader});const d=ox;this.godrayCombineUniforms=pn.clone(d.uniforms),this.materialGodraysCombine=new _t({uniforms:this.godrayCombineUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader});const l=ax;this.godraysFakeSunUniforms=pn.clone(l.uniforms),this.materialGodraysFakeSun=new _t({uniforms:this.godraysFakeSunUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.godraysFakeSunUniforms.bgColor.value.setHex(this.background),this.godraysFakeSunUniforms.sunColor.value.setHex(this.sunColor),this.godrayCombineUniforms.fGodRayIntensity.value=.75,this.fsQuad=new mn(new xs(1,1),this.materialGodraysGenerate),this.fsQuad.position.z=-9900,this.orthoScene.add(this.fsQuad),this.needsSwap=!1}filterGodRays(e,t,n,r){this.orthoScene.overrideMaterial=this.materialGodraysGenerate,this.godrayGenUniforms.fStepSize.value=r,this.godrayGenUniforms.tInput.value=t,e.setRenderTarget(n),e.render(this.orthoScene,this.orthoCamera),this.orthoScene.overrideMaterial=null}render(e,t,n){this.clipPosition.x=this.sunPosition.x,this.clipPosition.y=this.sunPosition.y,this.clipPosition.z=this.sunPosition.z,this.clipPosition.w=1,this.clipPosition.applyMatrix4(this.camera.matrixWorldInverse).applyMatrix4(this.camera.projectionMatrix),this.clipPosition.x/=this.clipPosition.w,this.clipPosition.y/=this.clipPosition.w,this.screenSpacePosition.x=(this.clipPosition.x+1)/2,this.screenSpacePosition.y=(this.clipPosition.y+1)/2,this.screenSpacePosition.z=this.clipPosition.z,this.godrayGenUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition),this.godraysFakeSunUniforms.vSunPositionScreenSpace.value.copy(this.screenSpacePosition);const r=.74*window.innerHeight,o=.74*window.innerHeight;this.screenSpacePosition.x*=window.innerWidth,this.screenSpacePosition.y*=window.innerHeight,e.setScissor(this.screenSpacePosition.x-o/2,this.screenSpacePosition.y-r/2,o,r),e.setScissorTest(!0),this.godraysFakeSunUniforms.fAspect.value=this.camera.aspect,this.orthoScene.overrideMaterial=this.materialGodraysFakeSun,e.setRenderTarget(n),e.render(this.orthoScene,this.orthoCamera),e.setScissorTest(!1),this.scene.overrideMaterial=this.materialDepth,e.setRenderTarget(this.rtTextureDepth),e.clear(),e.render(this.scene,this.camera),this.scene.overrideMaterial=null,this.godrayMaskUniforms.tInput.value=this.rtTextureDepth.texture,this.orthoScene.overrideMaterial=this.materialGodraysDepthMask,e.setRenderTarget(this.rtTextureDepthMask),e.render(this.orthoScene,this.orthoCamera),this.filterGodRays(e,this.rtTextureDepthMask.texture,this.rtTextureGodRays2,1/6),this.filterGodRays(e,this.rtTextureGodRays2.texture,this.rtTextureGodRays1,1/(6*6)),this.filterGodRays(e,this.rtTextureGodRays1.texture,this.rtTextureGodRays2,1/(6*6*6)),this.godrayCombineUniforms.tColors.value=n.texture,this.godrayCombineUniforms.tGodRays.value=this.rtTextureGodRays2.texture,this.orthoScene.overrideMaterial=this.materialGodraysCombine,this.renderToScreen?(e.setRenderTarget(null),e.render(this.orthoScene,this.orthoCamera)):(e.setRenderTarget(t),e.clear(),e.render(this.orthoScene,this.orthoCamera)),this.orthoScene.overrideMaterial=null}setSize(e,t){this.rtTextureDepth.setSize(e,t),this.rtTextureDepthMask.setSize(e,t);const n=e*this.multiplier,r=t*this.multiplier;this.rtTextureGodRays1.setSize(n,r),this.rtTextureGodRays2.setSize(n,r)}dispose(){this.orthoScene.remove(this.orthoCamera),this.orthoScene.remove(this.fsQuad),this.rtTextureDepth.dispose(),this.rtTextureDepthMask.dispose(),this.rtTextureGodRays1.dispose(),this.rtTextureGodRays2.dispose(),this.materialDepth.dispose(),this.materialGodraysDepthMask.dispose(),this.materialGodraysFakeSun.dispose(),this.materialGodraysCombine.dispose(),this.materialGodraysGenerate.dispose()}}var cd=`/* BEGIN HEADER */
uniform float curvature;
uniform float vertexThickness;
uniform float edgeThickness;
uniform float segments;

attribute vec4 instancePosition;
attribute vec4 instanceTarget;
attribute vec3 instanceColor;

const float radial = 8.;
const float TAU = 6.28318530717958647692528676655900576;

/* END HEADER */

void main() {
  /* BEGIN MAIN */
  

  #if defined( USE_COLOR_ALPHA ) || defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
  vColor.rgb = instanceColor.rgb;
  #endif

  vec4 pos;
  vec3 norm;
  float sizeFactor;

  if(!isnan(instanceTarget.x)) {
    float vid = float(gl_VertexID);
    float h = floor(vid / (radial + 1.)) / (segments);
    float r = mod(vid, radial + 1.) / (radial);

    pos = mix(instancePosition, instanceTarget, h);
    vec4 next = mix(instancePosition, instanceTarget, h + .001);

  
  

  
  

  
  
  
  
  
  

  
    pos = xnormalize(pos);
    next = xnormalize(next);

    vec3 p = xproject(pos);
    vec3 n = xproject(next);

    vec3 k = normalize(n - p); 

  
    vec3 u = cross(n, p);
    if(length(u) < .000001) {
      u = p + vec3(n.y, 0, n.z);
    }
    u = normalize(u);
    vec3 v = normalize(cross(u, k));

    norm = v * cos(r * TAU) + cross(v, k) * sin(r * TAU);
    norm = normalize(norm);
    sizeFactor = .001 * edgeThickness;
  } else {
    pos = instancePosition;
    norm = normal;
    sizeFactor = .001 * vertexThickness;
  }
  
  vec3 transformed = xproject(pos);
  transformed += sizeFactor * norm / max(1., length(pos));

  
  vec3 objectNormal = norm;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}`,cx=`/* BEGIN INCLUDE */
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
  return v.xyzw / (sqrt(abs(xdot(v))));
  #else 
  return vec4(v.xyz / (sqrt(abs(xdot(v)))), 1.);
  #endif
}

vec3 xproject(in vec4 v) {
  #ifdef D_4
  #ifdef P_STEREOGRAPHIC
  return v.xyz / (v.w - curvature);
  #endif
  #ifdef P_ORTHOGRAPHIC
  return v.xyz;
  #endif
  #ifdef P_KLEIN
  return v.xyz / v.w;
  #endif
  #ifdef P_INVERTED
  return v.xyz / (v.w + curvature);
  #endif
  #ifdef P_JEMISPHERE
  return v.xyz;
  #endif
  #ifdef P_UPPERHALF
  v.xyz /= v.w;
  v.w = 1. / v.w;

  v.xyw *= 2. / (1. + v.z);
  v.w -= 1.;
  return v.xwy;
  #endif
  #else
  #ifdef P_STEREOGRAPHIC
  
  
  return v.xyz;
  #endif
  #ifdef P_ORTHOGRAPHIC
  return vec3(v.xy, 0.);
  #endif
  #ifdef P_KLEIN
  return vec3(v.xy / v.z, 0.);
  #endif
  #ifdef P_INVERTED
  return vec3(v.xy / (curvature + v.z), 1.);
  #endif
  #ifdef P_JEMISPHERE
  return vec3(v.xy / v.z, 1. / v.z);
  #endif
  #ifdef P_UPPERHALF
  v.xy /= v.z;
  v.z = 1. / v.z;

  v.xz *= 2. / (1. + v.y);
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

/* END INCLUDE */`;const ux=cd.match(/\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m)[1],Du=cd.match(/\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m)[1],dx=cx.match(/\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m)[1],Pn=a=>(a=a.clone(),a.vertexColors=![yi,_t,id,us].find(e=>a instanceof e),a._dimensions=Pe.dimensions,a.uniforms={...a.uniforms||{},curvature:{value:0},edgeThickness:{value:0},vertexThickness:{value:0},segments:{value:3}},a.onBeforeCompile=e=>{const t=[`#define D_${Pe.dimensions}`,`#define P_${Pe.projection.toUpperCase()}`];Object.assign(e.uniforms,a.uniforms),a instanceof Bi?e.vertexShader=e.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","").replace("#endif",""):a instanceof yi||a instanceof us?e.vertexShader=e.vertexShader.replace("#ifdef USE_DISPLACEMENTMAP","").replace("#endif",""):a instanceof _t&&(e.vertexShader=e.vertexShader.replace("gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",Du+"gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );")),e.vertexShader=[...t,ux,dx,e.vertexShader.replace("#include <begin_vertex>","").replace("#include <beginnormal_vertex>",Du)].join(`
`)},a.customProgramCacheKey=()=>`hypermath_${a.constructor.name}_${Pe.dimensions}_${Pe.projection}`,a);let Nt,Dt,fn,On,Wt,ja,Un;const ys=new ts,on=new We,pl=new L0,Er=pl.load("Carbon.png");Er.encoding=mt;Er.wrapS=Gi;Er.wrapT=Gi;Er.repeat.x=10;Er.repeat.y=10;const ml=pl.load("Carbon_Normal.png");ml.wrapS=Gi;ml.wrapT=Gi;const gl=pl.load("ocean.jpg");gl.encoding=mt;gl.mapping=bo;const bs={neon:{background:0,fx:["fxaa","bloom"],shadow:!1,material:new Bi,lights:[],color:({word:a})=>on.setHSL(a.length*.17%1,.5,.5)},museum:{background:16777215,fx:["fxaa"],shadow:!0,ground:"plane",material:new yu({roughness:.5,clearcoat:1,clearcoatRoughness:.1,map:Er,normalMap:ml}),lights:[(()=>{const a=new ka(16777215,.2);return a.position.set(0,4,-6),a})(),(()=>{const a=new ka(16777215,.2);return a.position.set(8,7,0),a})(),(()=>{const a=new ka(16777215,.2);return a.position.set(-4,6,2),a})(),new ho(11184810,.4)],cameraLights:[(()=>{const a=new Kr(16777215,2.5,5,5);return a.shadow=null,a})()],color:()=>on.set(11184810)},projection:{background:16777215,fx:["fxaa"],ground:"sphere",shadow:!0,material:new ns({transparent:!0,opacity:.75,blending:yo}),lights:[new Kr],color:({word:a})=>on.setHSL(a.length*.17%1,.5,.5)},bw:{background:0,fx:["fxaa","sobel"],shadow:!1,material:new ns,lights:[new ho(13421772,.4)],cameraLights:[new Kr(16777215,1)],color:()=>on.set(16776960)},colorful:{background:16777215,fx:["fxaa","bokeh"],shadow:!1,material:new ns,lights:[new ho(16777215,.5)],cameraLights:[new Kr(16777215,1)],color:({word:a})=>on.setHSL(a.length*.17%1,.5,.5)},pure:{background:16777215,fx:["fxaa","sao"],shadow:!1,material:new P0,lights:[new ho(0,.5)],cameraLights:[new Kr(16777215,1)],color:({word:a})=>on.setHSL(a.length*.03%1,.75,.7)},transcendent:{background:16777215,fx:["godray"],shadow:!1,material:new Bi,color:()=>on.set(0)},glass:{background:0,env:gl,fx:["fxaa"],shadow:!1,material:new yu({premultipliedAlpha:!1,reflectivity:0,metalness:0,roughness:0,transmission:1,clearcoat:1,clearcoatRoughness:.1,thickness:1,ior:1.5}),lights:[new F0,new I0],color:()=>on.set(11184810)},wireframe:{background:0,fx:["fxaa"],shadow:!1,material:new Bi({wireframe:!0}),lights:[],color:({word:a})=>on.setHSL(a.length*.17%1,.5,.5)}},fx=()=>(Nt=new ul,Nt.autoClear=!1,Nt.setPixelRatio(window.devicePixelRatio),Nt.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Nt.domElement),Dt=new hn(90,window.innerWidth/window.innerHeight,.01,100),Dt.position.set(0,0,-1),Dt.up.set(0,1,0),Dt.lookAt(0,0,0),Dt.zoom=Math.min(1,window.innerWidth/window.innerHeight),Dt.updateProjectionMatrix(),fn=new nd,fn.add(ys),Dt.updateProjectionMatrix(),fn.add(Dt),On=new q0(Dt,Nt.domElement),On.target.set(0,0,0),On.minDistance=0,On.maxDistance=100,On.addEventListener("change",qn),On.update(),On.enabled=!1,Nt.domElement.addEventListener("dblclick",()=>{On.position0.set(0,0,On.position0.z===-1?-.25:-1,0,0),On.reset()}),Wt=new $0(Nt),Wt.setPixelRatio(window.devicePixelRatio),ja=new Q0(fn,Dt),Wt.addPass(ja),dd(),ud(),{composer:Wt,renderer:Nt,scene:fn,camera:Dt,controls:On,renderPass:ja});let Rt=null,wt=null,rs=5e3,ss=5e4;const ud=()=>{const a=bs[Pe.ambiance],e=new Po(1e-7,32,32);e.attributes.position.array.fill(0);const t=new sd().copy(e);t.setAttribute("instancePosition",new xr(new Float32Array(rs*4),4)),t.setAttribute("instanceTarget",new xr(new Float32Array(rs*4),4)),t.setAttribute("instanceColor",new xr(new Float32Array(rs*3),3)),Rt=new mn(t,Pn(a.material)),t.attributes.instanceTarget.array.fill(NaN),Rt.geometry.instanceCount=0,Rt.frustumCulled=!1,Rt.customDepthMaterial=Pn(new yi({depthPacking:hs})),Rt.customDistanceMaterial=Pn(new us),ys.add(Rt)},dd=()=>{const a=bs[Pe.ambiance],e=new dl(0,0,1,8,Pe.curve?Pe.segments:1,!0),t=new sd().copy(e);t.setAttribute("instancePosition",new xr(new Float32Array(ss*4),4)),t.setAttribute("instanceTarget",new xr(new Float32Array(ss*4),4)),t.setAttribute("instanceColor",new xr(new Float32Array(ss*3),3)),wt=new mn(t,Pn(a.material)),wt.geometry.instanceCount=0,wt.frustumCulled=!1,wt.customDepthMaterial=Pn(new yi({depthPacking:hs})),wt.customDistanceMaterial=Pn(new us),ys.add(wt)},hx=([a,e])=>{const t=bs[Pe.ambiance];e>rs&&(rs=e,ys.remove(Rt),Rt.geometry.dispose(),Rt.material.dispose(),ud(),Rt.castShadow=t.shadow,ds(),a=0),Rt.geometry.instanceCount=e;for(let n=a;n<e;n++){const r=Ye.vertices[n],o=Rt.geometry.attributes.instancePosition.array;o[n*4+0]=r.vertex[0],o[n*4+1]=r.vertex[1],o[n*4+2]=r.vertex[2],o[n*4+3]=Pe.dimensions===3?1:r.vertex[3];const d=Rt.geometry.attributes.instanceColor.array;t.color(r,"vertex"),d[n*3+0]=on.r,d[n*3+1]=on.g,d[n*3+2]=on.b}Rt.geometry.attributes.instancePosition.needsUpdate=!0,Rt.geometry.attributes.instanceColor.needsUpdate=!0},px=([a,e],t=!1)=>{const n=bs[Pe.ambiance];(e>ss||t)&&(ss=e,wt.geometry.dispose(),wt.material.dispose(),ys.remove(wt),dd(),wt.castShadow=n.shadow,ds(),a=0),wt.geometry.instanceCount=e;for(let r=a;r<e;r++){const o=Ye.edges[r],d=wt.geometry.attributes.instancePosition.array;d[r*4+0]=o.start[0],d[r*4+1]=o.start[1],d[r*4+2]=o.start[2],d[r*4+3]=Pe.dimensions===3?1:o.start[3];const l=wt.geometry.attributes.instanceTarget.array;l[r*4+0]=o.end[0],l[r*4+1]=o.end[1],l[r*4+2]=o.end[2],l[r*4+3]=Pe.dimensions===3?1:o.end[3];const p=wt.geometry.attributes.instanceColor.array;n.color(o,"edge"),p[r*3+0]=on.r,p[r*3+1]=on.g,p[r*3+2]=on.b}wt.geometry.attributes.instancePosition.needsUpdate=!0,wt.geometry.attributes.instanceTarget.needsUpdate=!0,wt.geometry.attributes.instanceColor.needsUpdate=!0},xi=(a,e=!1)=>{let t,n;a===!0?(t=[0,Ye.vertices.length],n=[0,Ye.edges.length]):(t=a.vertices,n=a.edges),Rt.visible=Pe.vertices,Pe.vertices&&hx(t),wt.visible=Pe.edges,Pe.edges&&px(n,e)},mx=()=>{const a=bs[Pe.ambiance];a.env?fn.background=a.env:fn.background=null,Nt.setClearColor(new We(a.background),1);const e=[];fn.traverse(n=>{n.isLight&&e.push(n)}),e.forEach(n=>{n.parent.remove(n)}),Un&&(Un.geometry.dispose(),Un.material.dispose(),fn.remove(Un)),a.shadow?(Nt.shadowMap.type=sl,a.ground==="sphere"?Un=new mn(new Po(20,32,32),new ns({color:16777215,side:gn,depthWrite:!1})):a.ground==="plane"&&(Un=new mn(new xs(1e3,1e3),new ns({color:16777215,depthWrite:!1})),Un.rotation.x=-Math.PI/2,Un.position.y=-3),Un.receiveShadow=!0,fn.add(Un)):Un=null,Nt.shadowMap.enabled=a.shadow,Nt.shadowMap.type=Ru,wt.castShadow=a.shadow,Rt.castShadow=a.shadow;const t=a.shadow?n=>{n.shadow&&(n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=Dt.near,n.shadow.camera.far=Dt.far,n.shadow.camera.fov=Dt.fov)}:()=>{};(a.lights||[]).forEach(n=>{t(n),fn.add(n)}),(a.cameraLights||[]).forEach(n=>{t(n),Dt.add(n)}),Nt.toneMapping=a.fx.includes("bloom")?Nu:Xn,Nt.toneMappingExposure=a.fx.includes("bloom")?1.5:1,Wt.passes.slice(1).forEach(n=>{Wt.removePass(n),n.dispose()}),a.fx.forEach(n=>{if(n==="fxaa"){const r=new _o(tx),o=Nt.getPixelRatio();r.material.uniforms.resolution.value.x=1/(window.innerWidth*o),r.material.uniforms.resolution.value.y=1/(window.innerHeight*o),Wt.addPass(r)}else if(n==="sao"){const r=new nl(fn,Dt,!1,!0);r.depthMaterial=Pn(r.depthMaterial),r.normalMaterial=Pn(r.normalMaterial),r.params.output=nl.OUTPUT.Default,r.params.saoIntensity=.1,r.params.saoScale=10,r.params.saoKernelRadius=10,r.params.saoMinResolution=0,r.params.saoBlur=!0,r.params.saoBlurRadius=8,r.params.saoBlurStdDev=4,r.params.saoBlurDepthCutoff=.01,Wt.addPass(r)}else if(n==="bokeh"){const r=new Z0(fn,Dt,{focus:.5,aperture:.005,maxblur:.005});r.materialDepth=Pn(r.materialDepth),Wt.addPass(r)}else if(n==="sobel"){const r=new _o(nx);Wt.addPass(r);const o=new _o(ix);o.uniforms.resolution.value.x=window.innerWidth*window.devicePixelRatio,o.uniforms.resolution.value.y=window.innerHeight*window.devicePixelRatio,Wt.addPass(o)}else if(n==="bloom"){const r=new Sr(new Re(window.innerWidth,window.innerHeight),1.5,0,0);Wt.addPass(r)}else if(n==="godray"){const r=new lx(fn,Dt);r.materialDepth=Pn(r.materialDepth),Wt.addPass(r)}}),Rt.material=Pn(a.material),wt.material=Pn(a.material),ds(),xi(!0),qn()},ds=()=>{const a=e=>{e!=null&&e._dimensions&&(e.uniforms.curvature.value=Ye.curvature,e.uniforms.vertexThickness.value=Pe.vertexThickness,e.uniforms.edgeThickness.value=Pe.edgeThickness,(Pe.dimensions!==e._dimensions||Pe.projection!==e._projection)&&(e._dimensions=Pe.dimensions,e._projection=Pe.projection,e.needsUpdate=!0),e.uniforms.segments.value=Pe.curve?Pe.segments:1)};a(Rt.material),a(wt.material),Wt.passes.forEach(e=>Object.values(e).filter(t=>t==null?void 0:t.isMaterial).forEach(t=>a(t))),a(Rt.customDepthMaterial),a(Rt.customDistanceMaterial),a(wt.customDepthMaterial),a(wt.customDistanceMaterial)},qn=()=>{Wt.render()},pi=a=>{for(let e=0;e<Ye.vertices.length;e++){const{vertex:t}=Ye.vertices[e];xo(t,a)}for(let e=0;e<Ye.edges.length;e++){const{start:t,end:n}=Ye.edges[e];xo(t,a),xo(n,a)}},$r=a=>{for(let e=0;e<Ye.vertices.length;e++){const{vertex:t}=Ye.vertices[e];Ga(t,a)}for(let e=0;e<Ye.edges.length;e++){const{start:t,end:n}=Ye.edges[e];Ga(t,a),Ga(n,a)}},Qr=a=>{for(let e=0;e<Ye.vertices.length;e++){const{vertex:t}=Ye.vertices[e];Va(t,a)}for(let e=0;e<Ye.edges.length;e++){const{start:t,end:n}=Ye.edges[e];Va(t,a),Va(n,a)}},gx=()=>{const a=[];document.querySelector("canvas").addEventListener("pointerdown",e=>{a.push(e.pointerId)}),document.querySelector("canvas").addEventListener("pointerup",e=>{const t=a.indexOf(e.pointerId);t>-1&&a.splice(t,1)}),G0("canvas").draggable({listeners:{move:e=>{if(Pe.controls!=="free")return;const t=window.innerWidth/2,n=window.innerHeight/2,r=Math.min(t,n)*.9;if(e.ctrlKey)$r(-e.dx/(2*r)),Qr(-e.dy/(2*r));else{const o=-e.dx/t,d=-e.dy/n;e.shiftKey||a.length>2?pi([0,0,d]):pi([o,d,0])}xi(!0),qn()}}}).gesturable({onmove:e=>{Pe.controls!=="free"||a.length>2||($r(po*e.da/180),Qr(e.ds),xi(!0),qn())}}),document.addEventListener("wheel",e=>{if(Pe.controls!=="free")return;const t=window.innerWidth/2,n=window.innerHeight/2,r=Math.min(t,n)*.9,o=10*(e.deltaMode===1?e.deltaY*10:e.deltaY)/r;e.ctrlKey?$r(po*o/180):Qr(-o/100),xi(!0),qn()}),document.addEventListener("keydown",e=>{if(Pe.controls!=="free")return;const{code:t}=e,n=.01;t==="ArrowLeft"||t==="KeyA"?pi([-n,0,0]):t==="ArrowRight"||t==="KeyD"?pi([n,0,0]):t==="ArrowUp"||t==="KeyW"?pi([0,0,-n]):t==="ArrowDown"||t==="KeyS"?pi([0,0,n]):t==="PageUp"||t==="KeyQ"?pi([0,-n,0]):t==="PageDown"||t==="KeyE"?pi([0,n,0]):t==="Digit1"?$r(-(po*5)/180):t==="Digit3"?$r(po*5/180):t==="KeyZ"?Qr(-n):t==="KeyC"&&Qr(n),xi(!0),qn()})};function vl(){return new Worker(""+new URL("tiling.worker-00e2892f.js",import.meta.url).href)}let Mn=0,pr=()=>{};const vx=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const e=Math.random()*16|0;return(a==="x"?e:e&3|8).toString(16)}),xx=a=>{pr=a},fd=a=>{a.terminate(),Mn=0,pr(Mn)},_x=async(a,e)=>(e.uuid=vx(),Mn++,pr(Mn),a.postMessage(e),new Promise((t,n)=>{const r=d=>{d.data.uuid===e.uuid&&(a.removeEventListener("message",r),Mn--,pr(Mn),t(d.data))},o=d=>{if(!d.uuid){if(a.removeEventListener("error",o),Mn<=0)return;Mn--,Mn=tl(0,Mn),pr(Mn,!0),console.error("Can't call web worker",d);return}d.uuid===e.uuid&&(a.removeEventListener("error",o),Mn--,pr(Mn,!0),n(d))};a.addEventListener("message",r),a.addEventListener("error",o)}));let fs=new vl;const yx=()=>{const e=window.innerWidth*1,t=window.innerHeight*1,n=Nt.domElement;if(n.width!==e||n.height!==t){Dt.aspect=e/t,Dt.zoom=Math.min(1,e/t),Dt.updateProjectionMatrix(),Nt.setSize(e,t),Wt.setSize(e,t);const r=Nt.getPixelRatio();Wt.setPixelRatio(r);const o=e*r,d=t*r;Wt.passes.forEach(l=>{var p,h;if((h=(p=l.material)==null?void 0:p.uniforms)!=null&&h.resolution){let m=o,g=d;l.material.uniforms.resolution.value.x<=1&&(m=1/m,g=1/g),l.material.uniforms.resolution.value.x=m,l.material.uniforms.resolution.value.y=g}l.resolution&&(l.resolution=new Re(e,t))}),n.style.width=e+"px",n.style.height=t+"px"}qn()};window.ondeviceorientation=window.onresize=yx;xx((a,e)=>{a?(document.body.classList.add("processing"),document.querySelectorAll("input").forEach(t=>t.disabled=!0)):(document.body.classList.remove("processing"),document.querySelectorAll("input").forEach(t=>t.disabled=!1)),e?document.body.classList.add("error"):document.body.classList.remove("error")});const xl="⇹",il="↭",_l=()=>{document.querySelector("#d4").checked=Pe.dimensions===4,document.querySelectorAll(".d4").forEach(a=>{a.style.display=Pe.dimensions===4?"block":"none"}),document.querySelectorAll(".d3").forEach(a=>{a.style.display=Pe.dimensions===3?"block":"none"}),document.querySelector("#segments").style.display=Pe.curve?"inline":"none",document.querySelector("#stellation").checked=Pe.stellation,document.querySelectorAll(".stellation").forEach(a=>{a.style.display=Pe.stellation?"inline":"none"}),"pqrstu".split("").forEach(a=>{document.querySelector(`#${a}`).value=Pe[a],document.querySelector(`#${a}-div`).value=Pe[`${a}Div`]}),"xyzw".split("").forEach(a=>{document.querySelector(`#mirror-${a}`).checked=!!Pe[a]}),document.querySelector("#order").value=Pe.order,document.querySelector("#segments").value=Pe.segments,document.querySelector("#curve").checked=Pe.curve,document.querySelector("#projection").value=Pe.projection,document.querySelector("#vertices").checked=Pe.vertices,document.querySelector("#edges").checked=Pe.edges,document.querySelector("#vertexThickness").value=Pe.vertexThickness,document.querySelector("#vertexThickness").style.display=Pe.vertices?"inline":"none",document.querySelector("#edgeThickness").value=Pe.edgeThickness,document.querySelector("#edgeThickness").style.display=Pe.edges?"inline":"none",document.querySelector("#ambiance").value=Pe.ambiance,document.querySelector("#controls").innerHTML=Pe.controls==="orbit"?xl:il},Ms=async a=>{const e=a==null?void 0:a.target.id,t={};if(t.dimensions=document.querySelector("#d4").checked?4:3,t.vertexThickness=+document.querySelector("#vertexThickness").value,t.edgeThickness=+document.querySelector("#edgeThickness").value,t.projection=document.querySelector("#projection").value,t.ambiance=document.querySelector("#ambiance").value,t.stellation=document.querySelector("#stellation").checked,t.controls=document.querySelector("#controls").innerHTML===xl?"orbit":"free",window.controls.enabled=t.controls==="orbit",t.curve=document.querySelector("#curve").checked,t.vertices=document.querySelector("#vertices").checked,t.edges=document.querySelector("#edges").checked,t.order=+document.querySelector("#order").value,t.segments=+document.querySelector("#segments").value,e==="curve"&&(document.querySelector("#segments").style.display=t.curve?"inline":"none"),e==="vertices"&&(document.querySelector("#vertexThickness").style.display=t.vertices?"inline":"none"),e==="edges"&&(document.querySelector("#edgeThickness").style.display=t.edges?"inline":"none"),e==="stellation"&&document.querySelectorAll(".stellation").forEach(d=>{d.style.display=t.stellation?"inline":"none"}),e==="d4"){const d=(p,h)=>{document.querySelector(`#${p}`).value=h},l=p=>+document.querySelector(`#${p}`).value;document.querySelectorAll(".d4").forEach(p=>{p.style.display=t.dimensions===4?"block":"none"}),document.querySelectorAll(".d3").forEach(p=>{p.style.display=t.dimensions===3?"block":"none"}),t.dimensions===4?(d("s",l("q")),d("u",l("r")),d("q",2),d("r",2),d("t",2)):t.dimensions===3&&(d("q",tl(l("s"),l("q"))),d("r",tl(l("r"),l("t"),l("u"))),d("s",2),d("u",2),d("t",2),document.querySelector("#mirror-w").checked=!1)}e!=null&&e.startsWith("mirror-")&&"xyzw".split("").every(d=>!document.querySelector(`#mirror-${d}`).checked)&&(document.querySelector("#mirror-x").checked=!0),"pqrstu".split("").forEach(d=>{t[d]=+document.querySelector(`#${d}`).value,t[`${d}Div`]=+document.querySelector(`#${d}-div`).value}),"xyzw".split("").forEach(d=>{t[d]=document.querySelector(`#mirror-${d}`).checked});const n=Object.keys(t).filter(d=>t[d]!==Pe[d]),r=Pe.order;let o=!e;if((o||["p","q","r","s","t","u","pDiv","qDiv","rDiv","sDiv","tDiv","uDiv","stellation","dimensions"].some(d=>n.includes(d)))&&(o=!0),ld(t,!!a),window.C=Pe,ds(),o||["x","y","z","w","order"].some(d=>n.includes(d)))if(e==="order"&&Ye.ranges[Pe.order-1])xi(Ye.ranges[Pe.order-1]),qn();else{const d=e==="order"?r:0;for(let l=d;l<Pe.order;l++){const{R:p,vertices:h,edges:m}=await _x(fs,{C:Pe,order:l});if(l===0&&(W0({...p,ranges:{}}),window.R=Ye,ds(),document.querySelector("#space").innerHTML=`${Ye.curvature===0?"&#x1D53C":Ye.curvature>0?"&#x1D54A":"&#x210D"}<sup>${Pe.dimensions-1}</sup>`),h.length||m.length){const g=Ye.vertices.length;Ye.vertices=Ye.vertices.concat(h);const v=Ye.vertices.length,M=Ye.edges.length;Ye.edges=Ye.edges.concat(m);const A=Ye.edges.length;Ye.ranges[l]={vertices:[g,v],edges:[M,A]},xi(Ye.ranges[l]),qn()}else Ye.ranges[l]={vertices:[Ye.vertices.length,Ye.vertices.length],edges:[Ye.edges.length,Ye.edges.length]}}}else["edges","vertices","vertexThickness","edgeThickness","projection","curve","segments"].some(d=>n.includes(d))&&xi(!0,n.includes("segments")||n.includes("curve"));if(n.includes("ambiance")||o){mx();return}qn()};document.querySelectorAll("input,select").forEach(a=>{a.addEventListener("change",Ms)});document.getElementById("space").addEventListener("dblclick",()=>{document.body.classList.contains("processing")?(fd(fs),document.body.classList.remove("processing"),fs=new vl):document.body.classList.contains("error")&&(ld(od,!0),_l(),Ms())});document.getElementById("space").addEventListener("click",()=>{document.body.classList.contains("processing")?(fd(fs),document.body.classList.remove("processing"),fs=new vl):document.body.classList.toggle("real-estate")});document.getElementById("controls").addEventListener("click",()=>{document.getElementById("controls").innerHTML=document.getElementById("controls").innerHTML===il?xl:il,Ms({target:{id:"controls"}})});ad();_l();Object.assign(window,fx());Ms();window.addEventListener("popstate",()=>{ad(),_l(),Ms()});gx();
