(function(){"use strict";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const di="150",bt="srgb",Sn="srgb-linear",Xi="display-p3",Yi="300 es";class nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fi=Math.PI/180,$i=180/Math.PI;function yn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[r&255]+Ke[r>>8&255]+Ke[r>>16&255]+Ke[r>>24&255]+"-"+Ke[e&255]+Ke[e>>8&255]+"-"+Ke[e>>16&15|64]+Ke[e>>24&255]+"-"+Ke[t&63|128]+Ke[t>>8&255]+"-"+Ke[t>>16&255]+Ke[t>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function es(r,e){return(r%e+e)%e}function pi(r,e,t){return(1-t)*r+t*e}function ji(r){return(r&r-1)===0&&r!==0}function ts(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],v=n[8],p=i[0],d=i[3],S=i[6],b=i[1],_=i[4],T=i[7],E=i[2],C=i[5],I=i[8];return s[0]=o*p+a*b+c*E,s[3]=o*d+a*_+c*C,s[6]=o*S+a*T+c*I,s[1]=l*p+u*b+f*E,s[4]=l*d+u*_+f*C,s[7]=l*S+u*T+f*I,s[2]=h*p+m*b+v*E,s[5]=h*d+m*_+v*C,s[8]=h*S+m*T+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,m=l*s-o*c,v=t*f+n*h+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=f*p,e[1]=(i*l-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=h*p,e[4]=(u*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mi.makeScale(e,t)),this}rotate(e){return this.premultiply(mi.makeRotation(-e)),this}translate(e,t){return this.premultiply(mi.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mi=new Qe;function Zi(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function zn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],m=s[o+1],v=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(f!==p||c!==h||l!==m||u!==v){let d=1-a;const S=c*h+l*m+u*v+f*p,b=S>=0?1:-1,_=1-S*S;if(_>Number.EPSILON){const E=Math.sqrt(_),C=Math.atan2(E,S*b);d=Math.sin(d*C)/E,a=Math.sin(a*C)/E}const T=a*b;if(c=c*d+h*T,l=l*d+m*T,u=u*d+v*T,f=f*d+p*T,d===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[o],h=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+u*f+c*m-l*h,e[t+1]=c*v+u*h+l*f-a*m,e[t+2]=l*v+u*m+a*h-c*f,e[t+3]=u*v-a*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(s/2),h=c(n/2),m=c(i/2),v=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*m*v,this._y=l*m*f-h*u*v,this._z=l*u*v+h*m*f,this._w=l*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+l*m*v,this._y=l*m*f-h*u*v,this._z=l*u*v-h*m*f,this._w=l*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-l*m*v,this._y=l*m*f+h*u*v,this._z=l*u*v+h*m*f,this._w=l*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-l*m*v,this._y=l*m*f+h*u*v,this._z=l*u*v-h*m*f,this._w=l*u*f+h*m*v;break;case"YZX":this._x=h*u*f+l*m*v,this._y=l*m*f+h*u*v,this._z=l*u*v-h*m*f,this._w=l*u*f-h*m*v;break;case"XZY":this._x=h*u*f-l*m*v,this._y=l*m*f-h*u*v,this._z=l*u*v+h*m*f,this._w=l*u*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ki.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ki.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-s*i,f=c*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=l*c+h*-s+u*-a-f*-o,this.y=u*c+h*-o+f*-s-l*-a,this.z=f*c+h*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gi.copy(this).projectOnVector(e),this.sub(gi)}reflect(e){return this.sub(gi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gi=new N,Ki=new bn;function rn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _i(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ns=new Qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),is=new Qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Bt=new N;function rs(r){return r.convertSRGBToLinear(),Bt.set(r.r,r.g,r.b).applyMatrix3(is),r.setRGB(Bt.x,Bt.y,Bt.z)}function ss(r){return Bt.set(r.r,r.g,r.b).applyMatrix3(ns),r.setRGB(Bt.x,Bt.y,Bt.z).convertLinearToSRGB()}const as={[Sn]:r=>r,[bt]:r=>r.convertSRGBToLinear(),[Xi]:rs},os={[Sn]:r=>r,[bt]:r=>r.convertLinearToSRGB(),[Xi]:ss},et={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Sn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=as[e],i=os[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let sn;class Ji{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sn===void 0&&(sn=zn("canvas")),sn.width=e.width,sn.height=e.height;const n=sn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=sn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zn("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=rn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rn(t[n]/255)*255):t[n]=rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Qi{constructor(e=null){this.isSource=!0,this.uuid=yn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(xi(i[o].image)):s.push(xi(i[o]))}else s=xi(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function xi(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ji.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ls=0;class ct extends nn{constructor(e=ct.DEFAULT_IMAGE,t=ct.DEFAULT_MAPPING,n=1001,i=1001,s=1006,o=1008,a=1023,c=1009,l=ct.DEFAULT_ANISOTROPY,u=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ls++}),this.uuid=yn(),this.name="",this.source=new Qi(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ct.DEFAULT_IMAGE=null,ct.DEFAULT_MAPPING=300,ct.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],v=c[9],p=c[2],d=c[6],S=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(v+d)<.1&&Math.abs(l+m+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,T=(m+1)/2,E=(S+1)/2,C=(u+h)/4,I=(f+p)/4,x=(v+d)/4;return _>T&&_>E?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=C/n,s=I/n):T>E?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=C/i,s=x/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=I/s,i=x/s),this.set(n,i,s,t),this}let b=Math.sqrt((d-v)*(d-v)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(d-v)/b,this.y=(f-p)/b,this.z=(h-u)/b,this.w=Math.acos((l+m+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wt extends nn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs extends ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],h=e[c+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),h=e.getZ(c);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Ht.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ht)}else n.boundingBox===null&&n.computeBoundingBox(),vi.copy(n.boundingBox),vi.applyMatrix4(e.matrixWorld),this.union(vi);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tn),On.subVectors(this.max,Tn),an.subVectors(e.a,Tn),on.subVectors(e.b,Tn),ln.subVectors(e.c,Tn),zt.subVectors(on,an),Ot.subVectors(ln,on),qt.subVectors(an,ln);let t=[0,-zt.z,zt.y,0,-Ot.z,Ot.y,0,-qt.z,qt.y,zt.z,0,-zt.x,Ot.z,0,-Ot.x,qt.z,0,-qt.x,-zt.y,zt.x,0,-Ot.y,Ot.x,0,-qt.y,qt.x,0];return!Mi(t,an,on,ln,On)||(t=[1,0,0,0,1,0,0,0,1],!Mi(t,an,on,ln,On))?!1:(Gn.crossVectors(zt,Ot),t=[Gn.x,Gn.y,Gn.z],Mi(t,an,on,ln,On))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rt=[new N,new N,new N,new N,new N,new N,new N,new N],Ht=new N,vi=new wn,an=new N,on=new N,ln=new N,zt=new N,Ot=new N,qt=new N,Tn=new N,On=new N,Gn=new N,Xt=new N;function Mi(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Xt.fromArray(r,s);const a=i.x*Math.abs(Xt.x)+i.y*Math.abs(Xt.y)+i.z*Math.abs(Xt.z),c=e.dot(Xt),l=t.dot(Xt),u=n.dot(Xt);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const us=new wn,En=new N,Si=new N;class yi{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):us.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;En.subVectors(e,this.center);const t=En.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(En,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Si.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(En.copy(e.center).add(Si)),this.expandByPoint(En.copy(e.center).sub(Si))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dt=new N,bi=new N,Vn=new N,Gt=new N,wi=new N,kn=new N,Ti=new N;class hs{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dt.copy(this.origin).addScaledVector(this.direction,t),Dt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){bi.copy(e).add(t).multiplyScalar(.5),Vn.copy(t).sub(e).normalize(),Gt.copy(this.origin).sub(bi);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Vn),a=Gt.dot(this.direction),c=-Gt.dot(Vn),l=Gt.lengthSq(),u=Math.abs(1-o*o);let f,h,m,v;if(u>0)if(f=o*c-a,h=o*a-c,v=s*u,f>=0)if(h>=-v)if(h<=v){const p=1/u;f*=p,h*=p,m=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=v?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(bi).addScaledVector(Vn,h),m}intersectSphere(e,t){Dt.subVectors(e.center,this.origin);const n=Dt.dot(this.direction),i=Dt.dot(Dt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dt)!==null}intersectTriangle(e,t,n,i,s){wi.subVectors(t,e),kn.subVectors(n,e),Ti.crossVectors(wi,kn);let o=this.direction.dot(Ti),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gt.subVectors(this.origin,e);const c=a*this.direction.dot(kn.crossVectors(Gt,kn));if(c<0)return null;const l=a*this.direction.dot(wi.cross(Gt));if(l<0||c+l>o)return null;const u=-a*Gt.dot(Ti);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,u,f,h,m,v,p,d){const S=this.elements;return S[0]=e,S[4]=t,S[8]=n,S[12]=i,S[1]=s,S[5]=o,S[9]=a,S[13]=c,S[2]=l,S[6]=u,S[10]=f,S[14]=h,S[3]=m,S[7]=v,S[11]=p,S[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/cn.setFromMatrixColumn(e,0).length(),s=1/cn.setFromMatrixColumn(e,1).length(),o=1/cn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,v=a*u,p=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+v*l,t[5]=h-p*l,t[9]=-a*c,t[2]=p-h*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,v=l*u,p=l*f;t[0]=h+p*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-v,t[6]=p+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,v=l*u,p=l*f;t[0]=h-p*a,t[4]=-o*f,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,m=o*f,v=a*u,p=a*f;t[0]=c*u,t[4]=v*l-m,t[8]=h*l+p,t[1]=c*f,t[5]=p*l+h,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,v=a*c,p=a*l;t[0]=c*u,t[4]=p-h*f,t[8]=v*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*f+v,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*c,m=o*l,v=a*c,p=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+p,t[5]=o*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ds,e,fs)}lookAt(e,t,n){const i=this.elements;return ut.subVectors(e,t),ut.lengthSq()===0&&(ut.z=1),ut.normalize(),Vt.crossVectors(n,ut),Vt.lengthSq()===0&&(Math.abs(n.z)===1?ut.x+=1e-4:ut.z+=1e-4,ut.normalize(),Vt.crossVectors(n,ut)),Vt.normalize(),Wn.crossVectors(ut,Vt),i[0]=Vt.x,i[4]=Wn.x,i[8]=ut.x,i[1]=Vt.y,i[5]=Wn.y,i[9]=ut.y,i[2]=Vt.z,i[6]=Wn.z,i[10]=ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],v=n[2],p=n[6],d=n[10],S=n[14],b=n[3],_=n[7],T=n[11],E=n[15],C=i[0],I=i[4],x=i[8],w=i[12],F=i[1],q=i[5],K=i[9],U=i[13],R=i[2],k=i[6],j=i[10],J=i[14],W=i[3],X=i[7],Z=i[11],de=i[15];return s[0]=o*C+a*F+c*R+l*W,s[4]=o*I+a*q+c*k+l*X,s[8]=o*x+a*K+c*j+l*Z,s[12]=o*w+a*U+c*J+l*de,s[1]=u*C+f*F+h*R+m*W,s[5]=u*I+f*q+h*k+m*X,s[9]=u*x+f*K+h*j+m*Z,s[13]=u*w+f*U+h*J+m*de,s[2]=v*C+p*F+d*R+S*W,s[6]=v*I+p*q+d*k+S*X,s[10]=v*x+p*K+d*j+S*Z,s[14]=v*w+p*U+d*J+S*de,s[3]=b*C+_*F+T*R+E*W,s[7]=b*I+_*q+T*k+E*X,s[11]=b*x+_*K+T*j+E*Z,s[15]=b*w+_*U+T*J+E*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],v=e[3],p=e[7],d=e[11],S=e[15];return v*(+s*c*f-i*l*f-s*a*h+n*l*h+i*a*m-n*c*m)+p*(+t*c*m-t*l*h+s*o*h-i*o*m+i*l*u-s*c*u)+d*(+t*l*f-t*a*m-s*o*f+n*o*m+s*a*u-n*l*u)+S*(-i*a*u-t*c*f+t*a*h+i*o*f-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],v=e[12],p=e[13],d=e[14],S=e[15],b=f*d*l-p*h*l+p*c*m-a*d*m-f*c*S+a*h*S,_=v*h*l-u*d*l-v*c*m+o*d*m+u*c*S-o*h*S,T=u*p*l-v*f*l+v*a*m-o*p*m-u*a*S+o*f*S,E=v*f*c-u*p*c-v*a*h+o*p*h+u*a*d-o*f*d,C=t*b+n*_+i*T+s*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=b*I,e[1]=(p*h*s-f*d*s-p*i*m+n*d*m+f*i*S-n*h*S)*I,e[2]=(a*d*s-p*c*s+p*i*l-n*d*l-a*i*S+n*c*S)*I,e[3]=(f*c*s-a*h*s-f*i*l+n*h*l+a*i*m-n*c*m)*I,e[4]=_*I,e[5]=(u*d*s-v*h*s+v*i*m-t*d*m-u*i*S+t*h*S)*I,e[6]=(v*c*s-o*d*s-v*i*l+t*d*l+o*i*S-t*c*S)*I,e[7]=(o*h*s-u*c*s+u*i*l-t*h*l-o*i*m+t*c*m)*I,e[8]=T*I,e[9]=(v*f*s-u*p*s-v*n*m+t*p*m+u*n*S-t*f*S)*I,e[10]=(o*p*s-v*a*s+v*n*l-t*p*l-o*n*S+t*a*S)*I,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*m-t*a*m)*I,e[12]=E*I,e[13]=(u*p*i-v*f*i+v*n*h-t*p*h-u*n*d+t*f*d)*I,e[14]=(v*a*i-o*p*i-v*n*c+t*p*c+o*n*d-t*a*d)*I,e[15]=(o*f*i-u*a*i+u*n*c-t*f*c-o*n*h+t*a*h)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,h=s*l,m=s*u,v=s*f,p=o*u,d=o*f,S=a*f,b=c*l,_=c*u,T=c*f,E=n.x,C=n.y,I=n.z;return i[0]=(1-(p+S))*E,i[1]=(m+T)*E,i[2]=(v-_)*E,i[3]=0,i[4]=(m-T)*C,i[5]=(1-(h+S))*C,i[6]=(d+b)*C,i[7]=0,i[8]=(v+_)*I,i[9]=(d-b)*I,i[10]=(1-(h+p))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=cn.set(i[0],i[1],i[2]).length();const o=cn.set(i[4],i[5],i[6]).length(),a=cn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_t.copy(this);const l=1/s,u=1/o,f=1/a;return _t.elements[0]*=l,_t.elements[1]*=l,_t.elements[2]*=l,_t.elements[4]*=u,_t.elements[5]*=u,_t.elements[6]*=u,_t.elements[8]*=f,_t.elements[9]*=f,_t.elements[10]*=f,t.setFromRotationMatrix(_t),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-s),f=(t+e)*c,h=(n+i)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cn=new N,_t=new Ze,ds=new N(0,0,0),fs=new N(1,1,1),Vt=new N,Wn=new N,ut=new N,tr=new Ze,nr=new bn;class Hn{constructor(e=0,t=0,n=0,i=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nr.setFromEuler(this),this.setFromQuaternion(nr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class ir{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ps=0;const rr=new N,un=new bn,Pt=new Ze,qn=new N,An=new N,ms=new N,gs=new bn,sr=new N(1,0,0),ar=new N(0,1,0),or=new N(0,0,1),_s={type:"added"},lr={type:"removed"};class pt extends nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ps++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new N,t=new Hn,n=new bn,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Qe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.multiply(un),this}rotateOnWorldAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.premultiply(un),this}rotateX(e){return this.rotateOnAxis(sr,e)}rotateY(e){return this.rotateOnAxis(ar,e)}rotateZ(e){return this.rotateOnAxis(or,e)}translateOnAxis(e,t){return rr.copy(e).applyQuaternion(this.quaternion),this.position.add(rr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sr,e)}translateY(e){return this.translateOnAxis(ar,e)}translateZ(e){return this.translateOnAxis(or,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qn.copy(e):qn.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),An.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pt.lookAt(An,qn,this.up):Pt.lookAt(qn,An,this.up),this.quaternion.setFromRotationMatrix(Pt),i&&(Pt.extractRotation(i.matrixWorld),un.setFromRotationMatrix(Pt),this.quaternion.premultiply(un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_s)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lr)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(lr)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,e,ms),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,gs,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new N(0,1,0),pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xt=new N,Ft=new N,Ei=new N,It=new N,hn=new N,dn=new N,cr=new N,Ai=new N,Ci=new N,Li=new N;class Nt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xt.subVectors(e,t),i.cross(xt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xt.subVectors(i,t),Ft.subVectors(n,t),Ei.subVectors(e,t);const o=xt.dot(xt),a=xt.dot(Ft),c=xt.dot(Ei),l=Ft.dot(Ft),u=Ft.dot(Ei),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(l*c-a*u)*h,v=(o*u-a*c)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,It),It.x>=0&&It.y>=0&&It.x+It.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,It),c.set(0,0),c.addScaledVector(s,It.x),c.addScaledVector(o,It.y),c.addScaledVector(a,It.z),c}static isFrontFacing(e,t,n,i){return xt.subVectors(n,t),Ft.subVectors(e,t),xt.cross(Ft).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xt.subVectors(this.c,this.b),Ft.subVectors(this.a,this.b),xt.cross(Ft).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Nt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;hn.subVectors(i,n),dn.subVectors(s,n),Ai.subVectors(e,n);const c=hn.dot(Ai),l=dn.dot(Ai);if(c<=0&&l<=0)return t.copy(n);Ci.subVectors(e,i);const u=hn.dot(Ci),f=dn.dot(Ci);if(u>=0&&f<=u)return t.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(hn,o);Li.subVectors(e,s);const m=hn.dot(Li),v=dn.dot(Li);if(v>=0&&m<=v)return t.copy(s);const p=m*l-c*v;if(p<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(dn,a);const d=u*v-m*f;if(d<=0&&f-u>=0&&m-v>=0)return cr.subVectors(s,i),a=(f-u)/(f-u+(m-v)),t.copy(i).addScaledVector(cr,a);const S=1/(d+p+h);return o=p*S,a=h*S,t.copy(n).addScaledVector(hn,o).addScaledVector(dn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let xs=0;class Xn extends nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xs++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ur={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vt={h:0,s:0,l:0},Yn={h:0,s:0,l:0};function Ri(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=es(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ri(o,s,e+1/3),this.g=Ri(o,s,e),this.b=Ri(o,s,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,et.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,et.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,et.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,et.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const n=ur[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rn(e.r),this.g=rn(e.g),this.b=rn(e.b),this}copyLinearToSRGB(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return et.fromWorkingColorSpace(Je.copy(this),e),ot(Je.r*255,0,255)<<16^ot(Je.g*255,0,255)<<8^ot(Je.b*255,0,255)<<0}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Je.copy(this),t);const n=Je.r,i=Je.g,s=Je.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Je.copy(this),t),e.r=Je.r,e.g=Je.g,e.b=Je.b,e}getStyle(e=bt){et.fromWorkingColorSpace(Je.copy(this),e);const t=Je.r,n=Je.g,i=Je.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(vt),vt.h+=e,vt.s+=t,vt.l+=n,this.setHSL(vt.h,vt.s,vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vt),e.getHSL(Yn);const n=pi(vt.h,Yn.h,t),i=pi(vt.s,Yn.s,t),s=pi(vt.l,Yn.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Ie;Ie.NAMES=ur;class hr extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ge=new N,$n=new Fe;class wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix3(e),this.setXY(t,$n.x,$n.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyMatrix3(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyMatrix4(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyNormalMatrix(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.transformDirection(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class dr extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fr extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vs=0;const mt=new Ze,Di=new pt,fn=new N,ht=new wn,Cn=new wn,qe=new N;class $t extends nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vs++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zi(e)?fr:dr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mt.makeRotationFromQuaternion(e),this.applyMatrix4(mt),this}rotateX(e){return mt.makeRotationX(e),this.applyMatrix4(mt),this}rotateY(e){return mt.makeRotationY(e),this.applyMatrix4(mt),this}rotateZ(e){return mt.makeRotationZ(e),this.applyMatrix4(mt),this}translate(e,t,n){return mt.makeTranslation(e,t,n),this.applyMatrix4(mt),this}scale(e,t,n){return mt.makeScale(e,t,n),this.applyMatrix4(mt),this}lookAt(e){return Di.lookAt(e),Di.updateMatrix(),this.applyMatrix4(Di.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fn).negate(),this.translate(fn.x,fn.y,fn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ht.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,ht.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,ht.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(ht.min),this.boundingBox.expandByPoint(ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Cn.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(ht.min,Cn.min),ht.expandByPoint(qe),qe.addVectors(ht.max,Cn.max),ht.expandByPoint(qe)):(ht.expandByPoint(Cn.min),ht.expandByPoint(Cn.max))}ht.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)qe.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(qe));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)qe.fromBufferAttribute(a,l),c&&(fn.fromBufferAttribute(e,l),qe.add(fn)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let F=0;F<a;F++)l[F]=new N,u[F]=new N;const f=new N,h=new N,m=new N,v=new Fe,p=new Fe,d=new Fe,S=new N,b=new N;function _(F,q,K){f.fromArray(i,F*3),h.fromArray(i,q*3),m.fromArray(i,K*3),v.fromArray(o,F*2),p.fromArray(o,q*2),d.fromArray(o,K*2),h.sub(f),m.sub(f),p.sub(v),d.sub(v);const U=1/(p.x*d.y-d.x*p.y);isFinite(U)&&(S.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(U),b.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(U),l[F].add(S),l[q].add(S),l[K].add(S),u[F].add(b),u[q].add(b),u[K].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let F=0,q=T.length;F<q;++F){const K=T[F],U=K.start,R=K.count;for(let k=U,j=U+R;k<j;k+=3)_(n[k+0],n[k+1],n[k+2])}const E=new N,C=new N,I=new N,x=new N;function w(F){I.fromArray(s,F*3),x.copy(I);const q=l[F];E.copy(q),E.sub(I.multiplyScalar(I.dot(q))).normalize(),C.crossVectors(x,q);const U=C.dot(u[F])<0?-1:1;c[F*4]=E.x,c[F*4+1]=E.y,c[F*4+2]=E.z,c[F*4+3]=U}for(let F=0,q=T.length;F<q;++F){const K=T[F],U=K.start,R=K.count;for(let k=U,j=U+R;k<j;k+=3)w(n[k+0]),w(n[k+1]),w(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qe.fromBufferAttribute(e,t),qe.normalize(),e.setXYZ(t,qe.x,qe.y,qe.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let m=0,v=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let S=0;S<u;S++)h[v++]=l[m++]}return new wt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pr=new Ze,Tt=new hs,jn=new yi,mr=new N,Ln=new N,Rn=new N,Dn=new N,Pi=new N,Zn=new N,Kn=new Fe,Jn=new Fe,Qn=new Fe,Fi=new N,ei=new N;class kt extends pt{constructor(e=new $t,t=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Zn.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(Pi.fromBufferAttribute(f,e),o?Zn.addScaledVector(Pi,u):Zn.addScaledVector(Pi.sub(t),u))}t.add(Zn)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),jn.copy(n.boundingSphere),jn.applyMatrix4(s),Tt.copy(e.ray).recast(e.near),jn.containsPoint(Tt.origin)===!1&&(Tt.intersectSphere(jn,mr)===null||Tt.origin.distanceToSquared(mr)>(e.far-e.near)**2))||(pr.copy(s).invert(),Tt.copy(e.ray).applyMatrix4(pr),n.boundingBox!==null&&Tt.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,v=f.length;m<v;m++){const p=f[m],d=i[p.materialIndex],S=Math.max(p.start,h.start),b=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let _=S,T=b;_<T;_+=3){const E=a.getX(_),C=a.getX(_+1),I=a.getX(_+2);o=ti(this,d,e,Tt,l,u,E,C,I),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let p=m,d=v;p<d;p+=3){const S=a.getX(p),b=a.getX(p+1),_=a.getX(p+2);o=ti(this,i,e,Tt,l,u,S,b,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,v=f.length;m<v;m++){const p=f[m],d=i[p.materialIndex],S=Math.max(p.start,h.start),b=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let _=S,T=b;_<T;_+=3){const E=_,C=_+1,I=_+2;o=ti(this,d,e,Tt,l,u,E,C,I),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let p=m,d=v;p<d;p+=3){const S=p,b=p+1,_=p+2;o=ti(this,i,e,Tt,l,u,S,b,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Ms(r,e,t,n,i,s,o,a){let c;if(e.side===1?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===0,a),c===null)return null;ei.copy(a),ei.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ei);return l<t.near||l>t.far?null:{distance:l,point:ei.clone(),object:r}}function ti(r,e,t,n,i,s,o,a,c){r.getVertexPosition(o,Ln),r.getVertexPosition(a,Rn),r.getVertexPosition(c,Dn);const l=Ms(r,e,t,n,Ln,Rn,Dn,Fi);if(l){i&&(Kn.fromBufferAttribute(i,o),Jn.fromBufferAttribute(i,a),Qn.fromBufferAttribute(i,c),l.uv=Nt.getUV(Fi,Ln,Rn,Dn,Kn,Jn,Qn,new Fe)),s&&(Kn.fromBufferAttribute(s,o),Jn.fromBufferAttribute(s,a),Qn.fromBufferAttribute(s,c),l.uv2=Nt.getUV(Fi,Ln,Rn,Dn,Kn,Jn,Qn,new Fe));const u={a:o,b:a,c,normal:new N,materialIndex:0};Nt.getNormal(Ln,Rn,Dn,u.normal),l.face=u}return l}class Pn extends $t{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function v(p,d,S,b,_,T,E,C,I,x,w){const F=T/I,q=E/x,K=T/2,U=E/2,R=C/2,k=I+1,j=x+1;let J=0,W=0;const X=new N;for(let Z=0;Z<j;Z++){const de=Z*q-U;for(let B=0;B<k;B++){const $=B*F-K;X[p]=$*b,X[d]=de*_,X[S]=R,l.push(X.x,X.y,X.z),X[p]=0,X[d]=0,X[S]=C>0?1:-1,u.push(X.x,X.y,X.z),f.push(B/I),f.push(1-Z/x),J+=1}}for(let Z=0;Z<x;Z++)for(let de=0;de<I;de++){const B=h+de+k*Z,$=h+de+k*(Z+1),ne=h+(de+1)+k*(Z+1),P=h+(de+1)+k*Z;c.push(B,$,P),c.push($,ne,P),W+=6}a.addGroup(m,W,w),m+=W,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tt(r){const e={};for(let t=0;t<r.length;t++){const n=pn(r[t]);for(const i in n)e[i]=n[i]}return e}function Ss(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function gr(r){return r.getRenderTarget()===null&&r.outputEncoding===3001?bt:Sn}const ys={clone:pn,merge:tt};var bs=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ws=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bs,this.fragmentShader=ws,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pn(e.uniforms),this.uniformsGroups=Ss(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _r extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mt extends _r{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mn=-90,gn=1;class Ts extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Mt(mn,gn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Mt(mn,gn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Mt(mn,gn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Mt(mn,gn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Mt(mn,gn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Mt(mn,gn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class xr extends ct{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Es extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pn(5,5,5),s=new jt({name:"CubemapFromEquirect",uniforms:pn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const o=new kt(i,s),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Ts(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ii=new N,As=new N,Cs=new Qe;class Zt{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ii.subVectors(n,t).cross(As.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ii),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cs.getNormalMatrix(e),i=this.coplanarPoint(Ii).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _n=new yi,ni=new N;class vr{constructor(e=new Zt,t=new Zt,n=new Zt,i=new Zt,s=new Zt,o=new Zt){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],m=n[9],v=n[10],p=n[11],d=n[12],S=n[13],b=n[14],_=n[15];return t[0].setComponents(a-i,f-c,p-h,_-d).normalize(),t[1].setComponents(a+i,f+c,p+h,_+d).normalize(),t[2].setComponents(a+s,f+l,p+m,_+S).normalize(),t[3].setComponents(a-s,f-l,p-m,_-S).normalize(),t[4].setComponents(a-o,f-u,p-v,_-b).normalize(),t[5].setComponents(a+o,f+u,p+v,_+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSprite(e){return _n.center.set(0,0,0),_n.radius=.7071067811865476,_n.applyMatrix4(e.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ni.x=i.normal.x>0?e.max.x:e.min.x,ni.y=i.normal.y>0?e.max.y:e.min.y,ni.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ni)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mr(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ls(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,h=l.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,h),l.onUploadCallback();let v;if(f instanceof Float32Array)v=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(f instanceof Int16Array)v=5122;else if(f instanceof Uint32Array)v=5125;else if(f instanceof Int32Array)v=5124;else if(f instanceof Int8Array)v=5120;else if(f instanceof Uint8Array)v=5121;else if(f instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const h=u.array,m=u.updateRange;r.bindBuffer(f,l),m.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class Ni extends $t{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,h=t/c,m=[],v=[],p=[],d=[];for(let S=0;S<u;S++){const b=S*h-o;for(let _=0;_<l;_++){const T=_*f-s;v.push(T,-b,0),p.push(0,0,1),d.push(_/a),d.push(1-S/c)}}for(let S=0;S<c;S++)for(let b=0;b<a;b++){const _=b+l*S,T=b+l*(S+1),E=b+1+l*(S+1),C=b+1+l*S;m.push(_,T,C),m.push(T,E,C)}this.setIndex(m),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rs=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ds=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ps=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fs=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Is=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ns=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Us="vec3 transformed = vec3( position );",Bs=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zs=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Os=`#ifdef USE_IRIDESCENCE
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
#endif`,Gs=`#ifdef USE_BUMPMAP
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
#endif`,Vs=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ks=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ws=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hs=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qs=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xs=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ys=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$s=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,js=`#define PI 3.141592653589793
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
}`,Zs=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ks=`vec3 transformedNormal = objectNormal;
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
#endif`,Js=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qs=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ea=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ta=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,na="gl_FragColor = linearToOutputTexel( gl_FragColor );",ia=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ra=`#ifdef USE_ENVMAP
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
#endif`,sa=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aa=`#ifdef USE_ENVMAP
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
#endif`,oa=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,la=`#ifdef USE_ENVMAP
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
#endif`,ca=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ua=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ha=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,da=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fa=`#ifdef USE_GRADIENTMAP
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
}`,pa=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ma=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ga=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_a=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xa=`uniform bool receiveShadow;
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
#endif`,va=`#if defined( USE_ENVMAP )
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
#endif`,Ma=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sa=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ya=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ba=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wa=`PhysicalMaterial material;
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
#endif`,Ta=`struct PhysicalMaterial {
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
}`,Ea=`
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
#endif`,Aa=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ca=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,La=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ra=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Da=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pa=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fa=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ia=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Na=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ua=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ba=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,za=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oa=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ga=`#ifdef USE_MORPHNORMALS
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
#endif`,Va=`#ifdef USE_MORPHTARGETS
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
#endif`,ka=`#ifdef USE_MORPHTARGETS
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
#endif`,Wa=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Ha=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,qa=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xa=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ya=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$a=`#ifdef USE_NORMALMAP
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
#endif`,ja=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Za=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ka=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ja=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qa=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eo=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,to=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,no=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,io=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ro=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,so=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ao=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oo=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lo=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,co=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uo=`float getShadowMask() {
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
}`,ho=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fo=`#ifdef USE_SKINNING
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
#endif`,po=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mo=`#ifdef USE_SKINNING
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
#endif`,go=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_o=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xo=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vo=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mo=`#ifdef USE_TRANSMISSION
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
#endif`,So=`#ifdef USE_TRANSMISSION
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
#endif`,yo=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,bo=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wo=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,To=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Eo=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ao=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Co=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ye={alphamap_fragment:Rs,alphamap_pars_fragment:Ds,alphatest_fragment:Ps,alphatest_pars_fragment:Fs,aomap_fragment:Is,aomap_pars_fragment:Ns,begin_vertex:Us,beginnormal_vertex:Bs,bsdfs:zs,iridescence_fragment:Os,bumpmap_pars_fragment:Gs,clipping_planes_fragment:Vs,clipping_planes_pars_fragment:ks,clipping_planes_pars_vertex:Ws,clipping_planes_vertex:Hs,color_fragment:qs,color_pars_fragment:Xs,color_pars_vertex:Ys,color_vertex:$s,common:js,cube_uv_reflection_fragment:Zs,defaultnormal_vertex:Ks,displacementmap_pars_vertex:Js,displacementmap_vertex:Qs,emissivemap_fragment:ea,emissivemap_pars_fragment:ta,encodings_fragment:na,encodings_pars_fragment:ia,envmap_fragment:ra,envmap_common_pars_fragment:sa,envmap_pars_fragment:aa,envmap_pars_vertex:oa,envmap_physical_pars_fragment:va,envmap_vertex:la,fog_vertex:ca,fog_pars_vertex:ua,fog_fragment:ha,fog_pars_fragment:da,gradientmap_pars_fragment:fa,lightmap_fragment:pa,lightmap_pars_fragment:ma,lights_lambert_fragment:ga,lights_lambert_pars_fragment:_a,lights_pars_begin:xa,lights_toon_fragment:Ma,lights_toon_pars_fragment:Sa,lights_phong_fragment:ya,lights_phong_pars_fragment:ba,lights_physical_fragment:wa,lights_physical_pars_fragment:Ta,lights_fragment_begin:Ea,lights_fragment_maps:Aa,lights_fragment_end:Ca,logdepthbuf_fragment:La,logdepthbuf_pars_fragment:Ra,logdepthbuf_pars_vertex:Da,logdepthbuf_vertex:Pa,map_fragment:Fa,map_pars_fragment:Ia,map_particle_fragment:Na,map_particle_pars_fragment:Ua,metalnessmap_fragment:Ba,metalnessmap_pars_fragment:za,morphcolor_vertex:Oa,morphnormal_vertex:Ga,morphtarget_pars_vertex:Va,morphtarget_vertex:ka,normal_fragment_begin:Wa,normal_fragment_maps:Ha,normal_pars_fragment:qa,normal_pars_vertex:Xa,normal_vertex:Ya,normalmap_pars_fragment:$a,clearcoat_normal_fragment_begin:ja,clearcoat_normal_fragment_maps:Za,clearcoat_pars_fragment:Ka,iridescence_pars_fragment:Ja,output_fragment:Qa,packing:eo,premultiplied_alpha_fragment:to,project_vertex:no,dithering_fragment:io,dithering_pars_fragment:ro,roughnessmap_fragment:so,roughnessmap_pars_fragment:ao,shadowmap_pars_fragment:oo,shadowmap_pars_vertex:lo,shadowmap_vertex:co,shadowmask_pars_fragment:uo,skinbase_vertex:ho,skinning_pars_vertex:fo,skinning_vertex:po,skinnormal_vertex:mo,specularmap_fragment:go,specularmap_pars_fragment:_o,tonemapping_fragment:xo,tonemapping_pars_fragment:vo,transmission_fragment:Mo,transmission_pars_fragment:So,uv_pars_fragment:yo,uv_pars_vertex:bo,uv_vertex:wo,uv2_pars_fragment:To,uv2_pars_vertex:Eo,uv2_vertex:Ao,worldpos_vertex:Co,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},te={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Qe},uv2Transform:{value:new Qe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qe}}},Et={basic:{uniforms:tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:tt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:tt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:tt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:tt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:tt([te.points,te.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:tt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:tt([te.common,te.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:tt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:tt([te.sprite,te.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:tt([te.common,te.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:tt([te.lights,te.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Et.physical={uniforms:tt([Et.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const ii={r:0,b:0,g:0};function Lo(r,e,t,n,i,s,o){const a=new Ie(0);let c=s===!0?0:1,l,u,f=null,h=0,m=null;function v(d,S){let b=!1,_=S.isScene===!0?S.background:null;_&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_));const T=r.xr,E=T.getSession&&T.getSession();E&&E.environmentBlendMode==="additive"&&(_=null),_===null?p(a,c):_&&_.isColor&&(p(_,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new kt(new Pn(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:pn(Et.backgroundCube.uniforms),vertexShader:Et.backgroundCube.vertexShader,fragmentShader:Et.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=_.encoding!==3001,(f!==_||h!==_.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new kt(new Ni(2,2),new jt({name:"BackgroundMaterial",uniforms:pn(Et.background.uniforms),vertexShader:Et.background.vertexShader,fragmentShader:Et.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=_.encoding!==3001,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,m=r.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,S){d.getRGB(ii,gr(r)),n.buffers.color.setClear(ii.r,ii.g,ii.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(d,S=1){a.set(d),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:v}}function Ro(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=d(null);let l=c,u=!1;function f(R,k,j,J,W){let X=!1;if(o){const Z=p(J,j,k);l!==Z&&(l=Z,m(l.object)),X=S(R,J,j,W),X&&b(R,J,j,W)}else{const Z=k.wireframe===!0;(l.geometry!==J.id||l.program!==j.id||l.wireframe!==Z)&&(l.geometry=J.id,l.program=j.id,l.wireframe=Z,X=!0)}W!==null&&t.update(W,34963),(X||u)&&(u=!1,x(R,k,j,J),W!==null&&r.bindBuffer(34963,t.get(W).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function v(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,k,j){const J=j.wireframe===!0;let W=a[R.id];W===void 0&&(W={},a[R.id]=W);let X=W[k.id];X===void 0&&(X={},W[k.id]=X);let Z=X[J];return Z===void 0&&(Z=d(h()),X[J]=Z),Z}function d(R){const k=[],j=[],J=[];for(let W=0;W<i;W++)k[W]=0,j[W]=0,J[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:j,attributeDivisors:J,object:R,attributes:{},index:null}}function S(R,k,j,J){const W=l.attributes,X=k.attributes;let Z=0;const de=j.getAttributes();for(const B in de)if(de[B].location>=0){const ne=W[B];let P=X[B];if(P===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(P=R.instanceColor)),ne===void 0||ne.attribute!==P||P&&ne.data!==P.data)return!0;Z++}return l.attributesNum!==Z||l.index!==J}function b(R,k,j,J){const W={},X=k.attributes;let Z=0;const de=j.getAttributes();for(const B in de)if(de[B].location>=0){let ne=X[B];ne===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const P={};P.attribute=ne,ne&&ne.data&&(P.data=ne.data),W[B]=P,Z++}l.attributes=W,l.attributesNum=Z,l.index=J}function _(){const R=l.newAttributes;for(let k=0,j=R.length;k<j;k++)R[k]=0}function T(R){E(R,0)}function E(R,k){const j=l.newAttributes,J=l.enabledAttributes,W=l.attributeDivisors;j[R]=1,J[R]===0&&(r.enableVertexAttribArray(R),J[R]=1),W[R]!==k&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,k),W[R]=k)}function C(){const R=l.newAttributes,k=l.enabledAttributes;for(let j=0,J=k.length;j<J;j++)k[j]!==R[j]&&(r.disableVertexAttribArray(j),k[j]=0)}function I(R,k,j,J,W,X){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(R,k,j,W,X):r.vertexAttribPointer(R,k,j,J,W,X)}function x(R,k,j,J){if(n.isWebGL2===!1&&(R.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const W=J.attributes,X=j.getAttributes(),Z=k.defaultAttributeValues;for(const de in X){const B=X[de];if(B.location>=0){let $=W[de];if($===void 0&&(de==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),de==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),$!==void 0){const ne=$.normalized,P=$.itemSize,le=t.get($);if(le===void 0)continue;const ae=le.buffer,ce=le.type,ue=le.bytesPerElement;if($.isInterleavedBufferAttribute){const _e=$.data,we=_e.stride,Ee=$.offset;if(_e.isInstancedInterleavedBuffer){for(let Pe=0;Pe<B.locationSize;Pe++)E(B.location+Pe,_e.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Pe=0;Pe<B.locationSize;Pe++)T(B.location+Pe);r.bindBuffer(34962,ae);for(let Pe=0;Pe<B.locationSize;Pe++)I(B.location+Pe,P/B.locationSize,ce,ne,we*ue,(Ee+P/B.locationSize*Pe)*ue)}else{if($.isInstancedBufferAttribute){for(let _e=0;_e<B.locationSize;_e++)E(B.location+_e,$.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<B.locationSize;_e++)T(B.location+_e);r.bindBuffer(34962,ae);for(let _e=0;_e<B.locationSize;_e++)I(B.location+_e,P/B.locationSize,ce,ne,P*ue,P/B.locationSize*_e*ue)}}else if(Z!==void 0){const ne=Z[de];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(B.location,ne);break;case 3:r.vertexAttrib3fv(B.location,ne);break;case 4:r.vertexAttrib4fv(B.location,ne);break;default:r.vertexAttrib1fv(B.location,ne)}}}}C()}function w(){K();for(const R in a){const k=a[R];for(const j in k){const J=k[j];for(const W in J)v(J[W].object),delete J[W];delete k[j]}delete a[R]}}function F(R){if(a[R.id]===void 0)return;const k=a[R.id];for(const j in k){const J=k[j];for(const W in J)v(J[W].object),delete J[W];delete k[j]}delete a[R.id]}function q(R){for(const k in a){const j=a[k];if(j[R.id]===void 0)continue;const J=j[R.id];for(const W in J)v(J[W].object),delete J[W];delete j[R.id]}}function K(){U(),u=!0,l!==c&&(l=c,m(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:K,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:F,releaseStatesOfProgram:q,initAttributes:_,enableAttribute:T,disableUnusedAttributes:C}}function Do(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function Po(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),v=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),S=r.getParameter(36348),b=r.getParameter(36349),_=h>0,T=o||e.has("OES_texture_float"),E=_&&T,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:d,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:C}}function Fo(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Zt,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||i;return i=h,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,S=r.get(f);if(!i||v===null||v.length===0||s&&!d)s?u(null):l();else{const b=s?0:n,_=b*4;let T=S.clippingState||null;c.value=T,T=u(v,h,_,m);for(let E=0;E!==_;++E)T[E]=t[E];S.clippingState=T,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,v){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=c.value,v!==!0||d===null){const S=m+p*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<S)&&(d=new Float32Array(S));for(let _=0,T=m;_!==p;++_,T+=4)o.copy(f[_]).applyMatrix4(b,a),o.normal.toArray(d,T),d[T+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Io(r){let e=new WeakMap;function t(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===303||a===304)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Es(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class No extends _r{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xn=4,Sr=[.125,.215,.35,.446,.526,.582],Kt=20,Ui=new No,yr=new Ie;let Bi=null;const Jt=(1+Math.sqrt(5))/2,vn=1/Jt,br=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Jt,vn),new N(0,Jt,-vn),new N(vn,0,Jt),new N(-vn,0,Jt),new N(Jt,vn,0),new N(-Jt,vn,0)];class wr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Bi=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ar(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Er(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bi),e.scissorTest=!1,ri(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bi=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},i=Tr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tr(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uo(s)),this._blurMaterial=Bo(s,e,t)}return i}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Ui)}_sceneToCubeUV(e,t,n,i){const a=new Mt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(yr),u.toneMapping=0,u.autoClear=!1;const m=new hr({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),v=new kt(new Pn,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(yr),p=!0);for(let S=0;S<6;S++){const b=S%3;b===0?(a.up.set(0,c[S],0),a.lookAt(l[S],0,0)):b===1?(a.up.set(0,0,c[S]),a.lookAt(0,l[S],0)):(a.up.set(0,c[S],0),a.lookAt(0,0,l[S]));const _=this._cubeSize;ri(i,b*_,S>2?_:0,_,_),u.setRenderTarget(i),p&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ar()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Er());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ri(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ui)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=br[(i-1)%br.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kt(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kt-1),p=s/v,d=isFinite(s)?1+Math.floor(u*p):Kt;d>Kt&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Kt}`);const S=[];let b=0;for(let I=0;I<Kt;++I){const x=I/p,w=Math.exp(-x*x/2);S.push(w),I===0?b+=w:I<d&&(b+=2*w)}for(let I=0;I<S.length;I++)S[I]=S[I]/b;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=S,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-n;const T=this._sizeLods[i],E=3*T*(i>_-xn?i-_+xn:0),C=4*(this._cubeSize-T);ri(t,E,C,3*T,2*T),c.setRenderTarget(t),c.render(f,Ui)}}function Uo(r){const e=[],t=[],n=[];let i=r;const s=r-xn+1+Sr.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-xn?c=Sr[o-r+xn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,p=3,d=2,S=1,b=new Float32Array(p*v*m),_=new Float32Array(d*v*m),T=new Float32Array(S*v*m);for(let C=0;C<m;C++){const I=C%3*2/3-1,x=C>2?0:-1,w=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];b.set(w,p*v*C),_.set(h,d*v*C);const F=[C,C,C,C,C,C];T.set(F,S*v*C)}const E=new $t;E.setAttribute("position",new wt(b,p)),E.setAttribute("uv",new wt(_,d)),E.setAttribute("faceIndex",new wt(T,S)),e.push(E),i>xn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tr(r,e,t){const n=new Wt(r,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ri(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Bo(r,e,t){const n=new Float32Array(Kt),i=new N(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:Kt,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Er(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ar(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zi(){return`

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
	`}function zo(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===303||c===304,u=c===301||c===302;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new wr(r)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new wr(r));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Oo(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Go(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const v in h)e.update(h[v],34962);const m=f.morphAttributes;for(const v in m){const p=m[v];for(let d=0,S=p.length;d<S;d++)e.update(p[d],34962)}}function l(f){const h=[],m=f.index,v=f.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let _=0,T=b.length;_<T;_+=3){const E=b[_+0],C=b[_+1],I=b[_+2];h.push(E,C,C,I,I,E)}}else{const b=v.array;p=v.version;for(let _=0,T=b.length/3-1;_<T;_+=3){const E=_+0,C=_+1,I=_+2;h.push(E,C,C,I,I,E)}}const d=new(Zi(h)?fr:dr)(h,1);d.version=p;const S=s.get(f);S&&e.remove(S),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Vo(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,m){r.drawElements(s,m,a,h*c),t.update(m,s,1)}function f(h,m,v){if(v===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,h*c,v),t.update(m,s,v)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function ko(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wo(r,e){return r[0]-e[0]}function Ho(r,e){return Math.abs(e[1])-Math.abs(r[1])}function qo(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new je,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let R=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",R)};p!==void 0&&p.texture.dispose();const b=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let x=0;b===!0&&(x=1),_===!0&&(x=2),T===!0&&(x=3);let w=u.attributes.position.count*x,F=1;w>e.maxTextureSize&&(F=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const q=new Float32Array(w*F*4*v),K=new er(q,w,F,v);K.type=1015,K.needsUpdate=!0;const U=x*4;for(let k=0;k<v;k++){const j=E[k],J=C[k],W=I[k],X=w*F*4*k;for(let Z=0;Z<j.count;Z++){const de=Z*U;b===!0&&(o.fromBufferAttribute(j,Z),q[X+de+0]=o.x,q[X+de+1]=o.y,q[X+de+2]=o.z,q[X+de+3]=0),_===!0&&(o.fromBufferAttribute(J,Z),q[X+de+4]=o.x,q[X+de+5]=o.y,q[X+de+6]=o.z,q[X+de+7]=0),T===!0&&(o.fromBufferAttribute(W,Z),q[X+de+8]=o.x,q[X+de+9]=o.y,q[X+de+10]=o.z,q[X+de+11]=W.itemSize===4?o.w:1)}}p={count:v,texture:K,size:new Fe(w,F)},s.set(u,p),u.addEventListener("dispose",R)}let d=0;for(let b=0;b<h.length;b++)d+=h[b];const S=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const m=h===void 0?0:h.length;let v=n[u.id];if(v===void 0||v.length!==m){v=[];for(let _=0;_<m;_++)v[_]=[_,0];n[u.id]=v}for(let _=0;_<m;_++){const T=v[_];T[0]=_,T[1]=h[_]}v.sort(Ho);for(let _=0;_<8;_++)_<m&&v[_][1]?(a[_][0]=v[_][0],a[_][1]=v[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Wo);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let S=0;for(let _=0;_<8;_++){const T=a[_],E=T[0],C=T[1];E!==Number.MAX_SAFE_INTEGER&&C?(p&&u.getAttribute("morphTarget"+_)!==p[E]&&u.setAttribute("morphTarget"+_,p[E]),d&&u.getAttribute("morphNormal"+_)!==d[E]&&u.setAttribute("morphNormal"+_,d[E]),i[_]=C,S+=C):(p&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),d&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const b=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Xo(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Cr=new ct,Lr=new er,Rr=new cs,Dr=new xr,Pr=[],Fr=[],Ir=new Float32Array(16),Nr=new Float32Array(9),Ur=new Float32Array(4);function Mn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Pr[i];if(s===void 0&&(s=new Float32Array(i),Pr[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function We(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function He(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function si(r,e){let t=Fr[e];t===void 0&&(t=new Int32Array(e),Fr[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Yo(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function $o(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2fv(this.addr,e),He(t,e)}}function jo(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(We(t,e))return;r.uniform3fv(this.addr,e),He(t,e)}}function Zo(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4fv(this.addr,e),He(t,e)}}function Ko(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),He(t,e)}else{if(We(t,n))return;Ur.set(n),r.uniformMatrix2fv(this.addr,!1,Ur),He(t,n)}}function Jo(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),He(t,e)}else{if(We(t,n))return;Nr.set(n),r.uniformMatrix3fv(this.addr,!1,Nr),He(t,n)}}function Qo(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),He(t,e)}else{if(We(t,n))return;Ir.set(n),r.uniformMatrix4fv(this.addr,!1,Ir),He(t,n)}}function el(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tl(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2iv(this.addr,e),He(t,e)}}function nl(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(We(t,e))return;r.uniform3iv(this.addr,e),He(t,e)}}function il(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4iv(this.addr,e),He(t,e)}}function rl(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sl(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2uiv(this.addr,e),He(t,e)}}function al(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(We(t,e))return;r.uniform3uiv(this.addr,e),He(t,e)}}function ol(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4uiv(this.addr,e),He(t,e)}}function ll(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Cr,i)}function cl(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rr,i)}function ul(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dr,i)}function hl(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lr,i)}function dl(r){switch(r){case 5126:return Yo;case 35664:return $o;case 35665:return jo;case 35666:return Zo;case 35674:return Ko;case 35675:return Jo;case 35676:return Qo;case 5124:case 35670:return el;case 35667:case 35671:return tl;case 35668:case 35672:return nl;case 35669:case 35673:return il;case 5125:return rl;case 36294:return sl;case 36295:return al;case 36296:return ol;case 35678:case 36198:case 36298:case 36306:case 35682:return ll;case 35679:case 36299:case 36307:return cl;case 35680:case 36300:case 36308:case 36293:return ul;case 36289:case 36303:case 36311:case 36292:return hl}}function fl(r,e){r.uniform1fv(this.addr,e)}function pl(r,e){const t=Mn(e,this.size,2);r.uniform2fv(this.addr,t)}function ml(r,e){const t=Mn(e,this.size,3);r.uniform3fv(this.addr,t)}function gl(r,e){const t=Mn(e,this.size,4);r.uniform4fv(this.addr,t)}function _l(r,e){const t=Mn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xl(r,e){const t=Mn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vl(r,e){const t=Mn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ml(r,e){r.uniform1iv(this.addr,e)}function Sl(r,e){r.uniform2iv(this.addr,e)}function yl(r,e){r.uniform3iv(this.addr,e)}function bl(r,e){r.uniform4iv(this.addr,e)}function wl(r,e){r.uniform1uiv(this.addr,e)}function Tl(r,e){r.uniform2uiv(this.addr,e)}function El(r,e){r.uniform3uiv(this.addr,e)}function Al(r,e){r.uniform4uiv(this.addr,e)}function Cl(r,e,t){const n=this.cache,i=e.length,s=si(t,i);We(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Cr,s[o])}function Ll(r,e,t){const n=this.cache,i=e.length,s=si(t,i);We(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Rr,s[o])}function Rl(r,e,t){const n=this.cache,i=e.length,s=si(t,i);We(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Dr,s[o])}function Dl(r,e,t){const n=this.cache,i=e.length,s=si(t,i);We(n,s)||(r.uniform1iv(this.addr,s),He(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Lr,s[o])}function Pl(r){switch(r){case 5126:return fl;case 35664:return pl;case 35665:return ml;case 35666:return gl;case 35674:return _l;case 35675:return xl;case 35676:return vl;case 5124:case 35670:return Ml;case 35667:case 35671:return Sl;case 35668:case 35672:return yl;case 35669:case 35673:return bl;case 5125:return wl;case 36294:return Tl;case 36295:return El;case 36296:return Al;case 35678:case 36198:case 36298:case 36306:case 35682:return Cl;case 35679:case 36299:case 36307:return Ll;case 35680:case 36300:case 36308:case 36293:return Rl;case 36289:case 36303:case 36311:case 36292:return Dl}}class Fl{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=dl(t.type)}}class Il{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Pl(t.type)}}class Nl{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Oi=/(\w+)(\])?(\[|\.)?/g;function Br(r,e){r.seq.push(e),r.map[e.id]=e}function Ul(r,e,t){const n=r.name,i=n.length;for(Oi.lastIndex=0;;){const s=Oi.exec(n),o=Oi.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Br(t,l===void 0?new Fl(a,r,e):new Il(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Nl(a),Br(t,f)),t=f}}}class ai{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ul(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function zr(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Bl=0;function zl(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ol(r){switch(r){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Or(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+zl(r.getShaderSource(e),o)}else return i}function Gl(r,e){const t=Ol(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Vl(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kl(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fn).join(`
`)}function Wl(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hl(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Fn(r){return r!==""}function Gr(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vr(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ql=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gi(r){return r.replace(ql,Xl)}function Xl(r,e){const t=ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Gi(t)}const Yl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kr(r){return r.replace(Yl,$l)}function $l(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wr(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jl(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Zl(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kl(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function Jl(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Ql(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ec(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=jl(t),l=Zl(t),u=Kl(t),f=Jl(t),h=Ql(t),m=t.isWebGL2?"":kl(t),v=Wl(s),p=i.createProgram();let d,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[v].filter(Fn).join(`
`),d.length>0&&(d+=`
`),S=[m,v].filter(Fn).join(`
`),S.length>0&&(S+=`
`)):(d=[Wr(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fn).join(`
`),S=[m,Wr(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?ye.tonemapping_pars_fragment:"",t.toneMapping!==0?Vl("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ye.encodings_pars_fragment,Gl("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fn).join(`
`)),o=Gi(o),o=Gr(o,t),o=Vr(o,t),a=Gi(a),a=Gr(a,t),a=Vr(a,t),o=kr(o),a=kr(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,S=["#define varying in",t.glslVersion===Yi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const _=b+d+o,T=b+S+a,E=zr(i,35633,_),C=zr(i,35632,T);if(i.attachShader(p,E),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(p).trim(),F=i.getShaderInfoLog(E).trim(),q=i.getShaderInfoLog(C).trim();let K=!0,U=!0;if(i.getProgramParameter(p,35714)===!1){K=!1;const R=Or(i,E,"vertex"),k=Or(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+R+`
`+k)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(F===""||q==="")&&(U=!1);U&&(this.diagnostics={runnable:K,programLog:w,vertexShader:{log:F,prefix:d},fragmentShader:{log:q,prefix:S}})}i.deleteShader(E),i.deleteShader(C);let I;this.getUniforms=function(){return I===void 0&&(I=new ai(i,p)),I};let x;return this.getAttributes=function(){return x===void 0&&(x=Hl(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Bl++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=C,this}let tc=0;class nc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ic(e),t.set(e,n)),n}}class ic{constructor(e){this.id=tc++,this.code=e,this.usedTimes=0}}function rc(r,e,t,n,i,s,o){const a=new ir,c=new nc,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,w,F,q,K){const U=q.fog,R=K.geometry,k=x.isMeshStandardMaterial?q.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),J=j&&j.mapping===306?j.image.height:null,W=v[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const X=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Z=X!==void 0?X.length:0;let de=0;R.morphAttributes.position!==void 0&&(de=1),R.morphAttributes.normal!==void 0&&(de=2),R.morphAttributes.color!==void 0&&(de=3);let B,$,ne,P;if(W){const we=Et[W];B=we.vertexShader,$=we.fragmentShader}else B=x.vertexShader,$=x.fragmentShader,c.update(x),ne=c.getVertexShaderID(x),P=c.getFragmentShaderID(x);const le=r.getRenderTarget(),ae=x.alphaTest>0,ce=x.clearcoat>0,ue=x.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:x.type,vertexShader:B,fragmentShader:$,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:P,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:h,outputEncoding:le===null?r.outputEncoding:le.isXRRenderTarget===!0?le.texture.encoding:3e3,map:!!x.map,matcap:!!x.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:J,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===1,tangentSpaceNormalMap:x.normalMapType===0,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===3001,clearcoat:ce,clearcoatMap:ce&&!!x.clearcoatMap,clearcoatRoughnessMap:ce&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!x.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!x.iridescenceMap,iridescenceThicknessMap:ue&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===1,alphaMap:!!x.alphaMap,alphaTest:ae,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!U,useFog:x.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:de,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:0,useLegacyLights:r.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===2,flipSided:x.side===1,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)w.push(F),w.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(S(w,x),b(w,x),w.push(r.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function S(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function b(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),x.push(a.mask)}function _(x){const w=v[x.type];let F;if(w){const q=Et[w];F=ys.clone(q.uniforms)}else F=x.uniforms;return F}function T(x,w){let F;for(let q=0,K=l.length;q<K;q++){const U=l[q];if(U.cacheKey===w){F=U,++F.usedTimes;break}}return F===void 0&&(F=new ec(r,w,x,s),l.push(F)),F}function E(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),x.destroy()}}function C(x){c.remove(x)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:_,acquireProgram:T,releaseProgram:E,releaseShaderCache:C,programs:l,dispose:I}}function sc(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ac(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hr(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qr(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,m,v,p,d){let S=r[e];return S===void 0?(S={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:p,group:d},r[e]=S):(S.id=f.id,S.object=f,S.geometry=h,S.material=m,S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=p,S.group=d),e++,S}function a(f,h,m,v,p,d){const S=o(f,h,m,v,p,d);m.transmission>0?n.push(S):m.transparent===!0?i.push(S):t.push(S)}function c(f,h,m,v,p,d){const S=o(f,h,m,v,p,d);m.transmission>0?n.unshift(S):m.transparent===!0?i.unshift(S):t.unshift(S)}function l(f,h){t.length>1&&t.sort(f||ac),n.length>1&&n.sort(h||Hr),i.length>1&&i.sort(h||Hr)}function u(){for(let f=e,h=r.length;f<h;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function oc(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new qr,r.set(n,[o])):i>=s.length?(o=new qr,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function lc(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ie};break;case"SpotLight":t={position:new N,direction:new N,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function cc(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let uc=0;function hc(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function dc(r,e){const t=new lc,n=cc(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const s=new N,o=new Ze,a=new Ze;function c(u,f){let h=0,m=0,v=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let p=0,d=0,S=0,b=0,_=0,T=0,E=0,C=0,I=0,x=0;u.sort(hc);const w=f===!0?Math.PI:1;for(let q=0,K=u.length;q<K;q++){const U=u[q],R=U.color,k=U.intensity,j=U.distance,J=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=R.r*k*w,m+=R.g*k*w,v+=R.b*k*w;else if(U.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],k);else if(U.isDirectionalLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const X=U.shadow,Z=n.get(U);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=U.shadow.matrix,T++}i.directional[p]=W,p++}else if(U.isSpotLight){const W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(R).multiplyScalar(k*w),W.distance=j,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[S]=W;const X=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,X.updateMatrices(U),U.castShadow&&x++),i.spotLightMatrix[S]=X.matrix,U.castShadow){const Z=n.get(U);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,i.spotShadow[S]=Z,i.spotShadowMap[S]=J,C++}S++}else if(U.isRectAreaLight){const W=t.get(U);W.color.copy(R).multiplyScalar(k),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[b]=W,b++}else if(U.isPointLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*w),W.distance=U.distance,W.decay=U.decay,U.castShadow){const X=U.shadow,Z=n.get(U);Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,i.pointShadow[d]=Z,i.pointShadowMap[d]=J,i.pointShadowMatrix[d]=U.shadow.matrix,E++}i.point[d]=W,d++}else if(U.isHemisphereLight){const W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(k*w),W.groundColor.copy(U.groundColor).multiplyScalar(k*w),i.hemi[_]=W,_++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=v;const F=i.hash;(F.directionalLength!==p||F.pointLength!==d||F.spotLength!==S||F.rectAreaLength!==b||F.hemiLength!==_||F.numDirectionalShadows!==T||F.numPointShadows!==E||F.numSpotShadows!==C||F.numSpotMaps!==I)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=b,i.point.length=d,i.hemi.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=C+I-x,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=x,F.directionalLength=p,F.pointLength=d,F.spotLength=S,F.rectAreaLength=b,F.hemiLength=_,F.numDirectionalShadows=T,F.numPointShadows=E,F.numSpotShadows=C,F.numSpotMaps=I,i.version=uc++)}function l(u,f){let h=0,m=0,v=0,p=0,d=0;const S=f.matrixWorldInverse;for(let b=0,_=u.length;b<_;b++){const T=u[b];if(T.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(S),h++}else if(T.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(S),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(S),v++}else if(T.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(S),a.identity(),o.copy(T.matrixWorld),o.premultiply(S),a.extractRotation(o),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),p++}else if(T.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(S),m++}else if(T.isHemisphereLight){const E=i.hemi[d];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(S),d++}}}return{setup:c,setupView:l,state:i}}function Xr(r,e){const t=new dc(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function fc(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Xr(r,e),t.set(s,[c])):o>=a.length?(c=new Xr(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class pc extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mc extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_c=`uniform sampler2D shadow_pass;
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
}`;function xc(r,e,t){let n=new vr;const i=new Fe,s=new Fe,o=new je,a=new pc({depthPacking:3201}),c=new mc,l={},u=t.maxTextureSize,f={[0]:1,[1]:0,[2]:2},h=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:gc,fragmentShader:_c}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new $t;v.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new kt(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(T,E,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;const I=r.getRenderTarget(),x=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),F=r.state;F.setBlending(0),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let q=0,K=T.length;q<K;q++){const U=T[q],R=U.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const k=R.getFrameExtents();if(i.multiply(k),s.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/k.x),i.x=s.x*k.x,R.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/k.y),i.y=s.y*k.y,R.mapSize.y=s.y)),R.map===null){const J=this.type!==3?{minFilter:1003,magFilter:1003}:{};R.map=new Wt(i.x,i.y,J),R.map.texture.name=U.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const j=R.getViewportCount();for(let J=0;J<j;J++){const W=R.getViewport(J);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),F.viewport(o),R.updateMatrices(U,J),n=R.getFrustum(),_(E,C,R.camera,U,this.type)}R.isPointLightShadow!==!0&&this.type===3&&S(R,C),R.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(I,x,w)};function S(T,E){const C=e.update(p);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wt(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,C,h,p,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,C,m,p,null)}function b(T,E,C,I,x,w){let F=null;const q=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(q!==void 0)F=q;else if(F=C.isPointLight===!0?c:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const K=F.uuid,U=E.uuid;let R=l[K];R===void 0&&(R={},l[K]=R);let k=R[U];k===void 0&&(k=F.clone(),R[U]=k),F=k}return F.visible=E.visible,F.wireframe=E.wireframe,w===3?F.side=E.shadowSide!==null?E.shadowSide:E.side:F.side=E.shadowSide!==null?E.shadowSide:f[E.side],F.alphaMap=E.alphaMap,F.alphaTest=E.alphaTest,F.map=E.map,F.clipShadows=E.clipShadows,F.clippingPlanes=E.clippingPlanes,F.clipIntersection=E.clipIntersection,F.displacementMap=E.displacementMap,F.displacementScale=E.displacementScale,F.displacementBias=E.displacementBias,F.wireframeLinewidth=E.wireframeLinewidth,F.linewidth=E.linewidth,C.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(C.matrixWorld),F.nearDistance=I,F.farDistance=x),F}function _(T,E,C,I,x){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const q=e.update(T),K=T.material;if(Array.isArray(K)){const U=q.groups;for(let R=0,k=U.length;R<k;R++){const j=U[R],J=K[j.materialIndex];if(J&&J.visible){const W=b(T,J,I,C.near,C.far,x);r.renderBufferDirect(C,null,q,W,T,j)}}}else if(K.visible){const U=b(T,K,I,C.near,C.far,x);r.renderBufferDirect(C,null,q,U,T,null)}}const F=T.children;for(let q=0,K=F.length;q<K;q++)_(F[q],E,C,I,x)}}function vc(r,e,t){const n=t.isWebGL2;function i(){let A=!1;const O=new je;let Y=null;const re=new je(0,0,0,0);return{setMask:function(oe){Y!==oe&&!A&&(r.colorMask(oe,oe,oe,oe),Y=oe)},setLocked:function(oe){A=oe},setClear:function(oe,Ne,Ye,rt,Ct){Ct===!0&&(oe*=rt,Ne*=rt,Ye*=rt),O.set(oe,Ne,Ye,rt),re.equals(O)===!1&&(r.clearColor(oe,Ne,Ye,rt),re.copy(O))},reset:function(){A=!1,Y=null,re.set(-1,0,0,0)}}}function s(){let A=!1,O=null,Y=null,re=null;return{setTest:function(oe){oe?ae(2929):ce(2929)},setMask:function(oe){O!==oe&&!A&&(r.depthMask(oe),O=oe)},setFunc:function(oe){if(Y!==oe){switch(oe){case 0:r.depthFunc(512);break;case 1:r.depthFunc(519);break;case 2:r.depthFunc(513);break;case 3:r.depthFunc(515);break;case 4:r.depthFunc(514);break;case 5:r.depthFunc(518);break;case 6:r.depthFunc(516);break;case 7:r.depthFunc(517);break;default:r.depthFunc(515)}Y=oe}},setLocked:function(oe){A=oe},setClear:function(oe){re!==oe&&(r.clearDepth(oe),re=oe)},reset:function(){A=!1,O=null,Y=null,re=null}}}function o(){let A=!1,O=null,Y=null,re=null,oe=null,Ne=null,Ye=null,rt=null,Ct=null;return{setTest:function(Oe){A||(Oe?ae(2960):ce(2960))},setMask:function(Oe){O!==Oe&&!A&&(r.stencilMask(Oe),O=Oe)},setFunc:function(Oe,gt,Lt){(Y!==Oe||re!==gt||oe!==Lt)&&(r.stencilFunc(Oe,gt,Lt),Y=Oe,re=gt,oe=Lt)},setOp:function(Oe,gt,Lt){(Ne!==Oe||Ye!==gt||rt!==Lt)&&(r.stencilOp(Oe,gt,Lt),Ne=Oe,Ye=gt,rt=Lt)},setLocked:function(Oe){A=Oe},setClear:function(Oe){Ct!==Oe&&(r.clearStencil(Oe),Ct=Oe)},reset:function(){A=!1,O=null,Y=null,re=null,oe=null,Ne=null,Ye=null,rt=null,Ct=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let h={},m={},v=new WeakMap,p=[],d=null,S=!1,b=null,_=null,T=null,E=null,C=null,I=null,x=null,w=!1,F=null,q=null,K=null,U=null,R=null;const k=r.getParameter(35661);let j=!1,J=0;const W=r.getParameter(7938);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=J>=2);let X=null,Z={};const de=r.getParameter(3088),B=r.getParameter(2978),$=new je().fromArray(de),ne=new je().fromArray(B);function P(A,O,Y){const re=new Uint8Array(4),oe=r.createTexture();r.bindTexture(A,oe),r.texParameteri(A,10241,9728),r.texParameteri(A,10240,9728);for(let Ne=0;Ne<Y;Ne++)r.texImage2D(O+Ne,0,6408,1,1,0,6408,5121,re);return oe}const le={};le[3553]=P(3553,3553,1),le[34067]=P(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ae(2929),c.setFunc(3),at(!1),it(1),ae(2884),nt(0);function ae(A){h[A]!==!0&&(r.enable(A),h[A]=!0)}function ce(A){h[A]!==!1&&(r.disable(A),h[A]=!1)}function ue(A,O){return m[A]!==O?(r.bindFramebuffer(A,O),m[A]=O,n&&(A===36009&&(m[36160]=O),A===36160&&(m[36009]=O)),!0):!1}function _e(A,O){let Y=p,re=!1;if(A)if(Y=v.get(O),Y===void 0&&(Y=[],v.set(O,Y)),A.isWebGLMultipleRenderTargets){const oe=A.texture;if(Y.length!==oe.length||Y[0]!==36064){for(let Ne=0,Ye=oe.length;Ne<Ye;Ne++)Y[Ne]=36064+Ne;Y.length=oe.length,re=!0}}else Y[0]!==36064&&(Y[0]=36064,re=!0);else Y[0]!==1029&&(Y[0]=1029,re=!0);re&&(t.isWebGL2?r.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function we(A){return d!==A?(r.useProgram(A),d=A,!0):!1}const Ee={[100]:32774,[101]:32778,[102]:32779};if(n)Ee[103]=32775,Ee[104]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(Ee[103]=A.MIN_EXT,Ee[104]=A.MAX_EXT)}const Pe={[200]:0,[201]:1,[202]:768,[204]:770,[210]:776,[208]:774,[206]:772,[203]:769,[205]:771,[209]:775,[207]:773};function nt(A,O,Y,re,oe,Ne,Ye,rt){if(A===0){S===!0&&(ce(3042),S=!1);return}if(S===!1&&(ae(3042),S=!0),A!==5){if(A!==b||rt!==w){if((_!==100||C!==100)&&(r.blendEquation(32774),_=100,C=100),rt)switch(A){case 1:r.blendFuncSeparate(1,771,1,771);break;case 2:r.blendFunc(1,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case 1:r.blendFuncSeparate(770,771,1,771);break;case 2:r.blendFunc(770,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}T=null,E=null,I=null,x=null,b=A,w=rt}return}oe=oe||O,Ne=Ne||Y,Ye=Ye||re,(O!==_||oe!==C)&&(r.blendEquationSeparate(Ee[O],Ee[oe]),_=O,C=oe),(Y!==T||re!==E||Ne!==I||Ye!==x)&&(r.blendFuncSeparate(Pe[Y],Pe[re],Pe[Ne],Pe[Ye]),T=Y,E=re,I=Ne,x=Ye),b=A,w=!1}function St(A,O){A.side===2?ce(2884):ae(2884);let Y=A.side===1;O&&(Y=!Y),at(Y),A.blending===1&&A.transparent===!1?nt(0):nt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);const re=A.stencilWrite;l.setTest(re),re&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Ue(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ae(32926):ce(32926)}function at(A){F!==A&&(A?r.frontFace(2304):r.frontFace(2305),F=A)}function it(A){A!==0?(ae(2884),A!==q&&(A===1?r.cullFace(1029):A===2?r.cullFace(1028):r.cullFace(1032))):ce(2884),q=A}function ze(A){A!==K&&(j&&r.lineWidth(A),K=A)}function Ue(A,O,Y){A?(ae(32823),(U!==O||R!==Y)&&(r.polygonOffset(O,Y),U=O,R=Y)):ce(32823)}function At(A){A?ae(3089):ce(3089)}function yt(A){A===void 0&&(A=33984+k-1),X!==A&&(r.activeTexture(A),X=A)}function y(A,O,Y){Y===void 0&&(X===null?Y=33984+k-1:Y=X);let re=Z[Y];re===void 0&&(re={type:void 0,texture:void 0},Z[Y]=re),(re.type!==A||re.texture!==O)&&(X!==Y&&(r.activeTexture(Y),X=Y),r.bindTexture(A,O||le[A]),re.type=A,re.texture=O)}function g(){const A=Z[X];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function G(){try{r.compressedTexImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{r.texSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ie(){try{r.texSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function H(){try{r.texStorage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{r.texStorage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(A){$.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),$.copy(A))}function fe(A){ne.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),ne.copy(A))}function Re(A,O){let Y=f.get(O);Y===void 0&&(Y=new WeakMap,f.set(O,Y));let re=Y.get(A);re===void 0&&(re=r.getUniformBlockIndex(O,A.name),Y.set(A,re))}function Be(A,O){const re=f.get(O).get(A);u.get(O)!==re&&(r.uniformBlockBinding(O,re,A.__bindingPointIndex),u.set(O,re))}function Xe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},X=null,Z={},m={},v=new WeakMap,p=[],d=null,S=!1,b=null,_=null,T=null,E=null,C=null,I=null,x=null,w=!1,F=null,q=null,K=null,U=null,R=null,$.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ae,disable:ce,bindFramebuffer:ue,drawBuffers:_e,useProgram:we,setBlending:nt,setMaterial:St,setFlipSided:at,setCullFace:it,setLineWidth:ze,setPolygonOffset:Ue,setScissorTest:At,activeTexture:yt,bindTexture:y,unbindTexture:g,compressedTexImage2D:G,compressedTexImage3D:Q,texImage2D:he,texImage3D:ve,updateUBOMapping:Re,uniformBlockBinding:Be,texStorage2D:H,texStorage3D:xe,texSubImage2D:ee,texSubImage3D:ie,compressedTexSubImage2D:pe,compressedTexSubImage3D:se,scissor:ge,viewport:fe,reset:Xe}}function Mc(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const d=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(y,g){return S?new OffscreenCanvas(y,g):zn("canvas")}function _(y,g,G,Q){let ee=1;if((y.width>Q||y.height>Q)&&(ee=Q/Math.max(y.width,y.height)),ee<1||g===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ie=g?ts:Math.floor,pe=ie(ee*y.width),se=ie(ee*y.height);p===void 0&&(p=b(pe,se));const H=G?b(pe,se):p;return H.width=pe,H.height=se,H.getContext("2d").drawImage(y,0,0,pe,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+pe+"x"+se+")."),H}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function T(y){return ji(y.width)&&ji(y.height)}function E(y){return a?!1:y.wrapS!==1001||y.wrapT!==1001||y.minFilter!==1003&&y.minFilter!==1006}function C(y,g){return y.generateMipmaps&&g&&y.minFilter!==1003&&y.minFilter!==1006}function I(y){r.generateMipmap(y)}function x(y,g,G,Q,ee=!1){if(a===!1)return g;if(y!==null){if(r[y]!==void 0)return r[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ie=g;return g===6403&&(G===5126&&(ie=33326),G===5131&&(ie=33325),G===5121&&(ie=33321)),g===33319&&(G===5126&&(ie=33328),G===5131&&(ie=33327),G===5121&&(ie=33323)),g===6408&&(G===5126&&(ie=34836),G===5131&&(ie=34842),G===5121&&(ie=Q===3001&&ee===!1?35907:32856),G===32819&&(ie=32854),G===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function w(y,g,G){return C(y,G)===!0||y.isFramebufferTexture&&y.minFilter!==1003&&y.minFilter!==1006?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function F(y){return y===1003||y===1004||y===1005?9728:9729}function q(y){const g=y.target;g.removeEventListener("dispose",q),U(g),g.isVideoTexture&&v.delete(g)}function K(y){const g=y.target;g.removeEventListener("dispose",K),k(g)}function U(y){const g=n.get(y);if(g.__webglInit===void 0)return;const G=y.source,Q=d.get(G);if(Q){const ee=Q[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(y),Object.keys(Q).length===0&&d.delete(G)}n.remove(y)}function R(y){const g=n.get(y);r.deleteTexture(g.__webglTexture);const G=y.source,Q=d.get(G);delete Q[g.__cacheKey],o.memory.textures--}function k(y){const g=y.texture,G=n.get(y),Q=n.get(g);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)r.deleteFramebuffer(G.__webglFramebuffer[ee]),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[ee]);else{if(r.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let ee=0,ie=g.length;ee<ie;ee++){const pe=n.get(g[ee]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(g[ee])}n.remove(g),n.remove(y)}let j=0;function J(){j=0}function W(){const y=j;return y>=c&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+c),j+=1,y}function X(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.encoding),g.join()}function Z(y,g){const G=n.get(y);if(y.isVideoTexture&&At(y),y.isRenderTargetTexture===!1&&y.version>0&&G.__version!==y.version){const Q=y.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,y,g);return}}t.bindTexture(3553,G.__webglTexture,33984+g)}function de(y,g){const G=n.get(y);if(y.version>0&&G.__version!==y.version){ce(G,y,g);return}t.bindTexture(35866,G.__webglTexture,33984+g)}function B(y,g){const G=n.get(y);if(y.version>0&&G.__version!==y.version){ce(G,y,g);return}t.bindTexture(32879,G.__webglTexture,33984+g)}function $(y,g){const G=n.get(y);if(y.version>0&&G.__version!==y.version){ue(G,y,g);return}t.bindTexture(34067,G.__webglTexture,33984+g)}const ne={[1e3]:10497,[1001]:33071,[1002]:33648},P={[1003]:9728,[1004]:9984,[1005]:9986,[1006]:9729,[1007]:9985,[1008]:9987};function le(y,g,G){if(G?(r.texParameteri(y,10242,ne[g.wrapS]),r.texParameteri(y,10243,ne[g.wrapT]),(y===32879||y===35866)&&r.texParameteri(y,32882,ne[g.wrapR]),r.texParameteri(y,10240,P[g.magFilter]),r.texParameteri(y,10241,P[g.minFilter])):(r.texParameteri(y,10242,33071),r.texParameteri(y,10243,33071),(y===32879||y===35866)&&r.texParameteri(y,32882,33071),(g.wrapS!==1001||g.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(y,10240,F(g.magFilter)),r.texParameteri(y,10241,F(g.minFilter)),g.minFilter!==1003&&g.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===1003||g.minFilter!==1005&&g.minFilter!==1008||g.type===1015&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(r.texParameterf(y,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function ae(y,g){let G=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",q));const Q=g.source;let ee=d.get(Q);ee===void 0&&(ee={},d.set(Q,ee));const ie=X(g);if(ie!==y.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[ie].usedTimes++;const pe=ee[y.__cacheKey];pe!==void 0&&(ee[y.__cacheKey].usedTimes--,pe.usedTimes===0&&R(g)),y.__cacheKey=ie,y.__webglTexture=ee[ie].texture}return G}function ce(y,g,G){let Q=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Q=35866),g.isData3DTexture&&(Q=32879);const ee=ae(y,g),ie=g.source;t.bindTexture(Q,y.__webglTexture,33984+G);const pe=n.get(ie);if(ie.version!==pe.__version||ee===!0){t.activeTexture(33984+G),r.pixelStorei(37440,g.flipY),r.pixelStorei(37441,g.premultiplyAlpha),r.pixelStorei(3317,g.unpackAlignment),r.pixelStorei(37443,0);const se=E(g)&&T(g.image)===!1;let H=_(g.image,se,!1,u);H=yt(g,H);const xe=T(H)||a,he=s.convert(g.format,g.encoding);let ve=s.convert(g.type),ge=x(g.internalFormat,he,ve,g.encoding,g.isVideoTexture);le(Q,g,xe);let fe;const Re=g.mipmaps,Be=a&&g.isVideoTexture!==!0,Xe=pe.__version===void 0||ee===!0,A=w(g,H,xe);if(g.isDepthTexture)ge=6402,a?g.type===1015?ge=36012:g.type===1014?ge=33190:g.type===1020?ge=35056:ge=33189:g.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===1026&&ge===6402&&g.type!==1012&&g.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=1014,ve=s.convert(g.type)),g.format===1027&&ge===6402&&(ge=34041,g.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=1020,ve=s.convert(g.type))),Xe&&(Be?t.texStorage2D(3553,1,ge,H.width,H.height):t.texImage2D(3553,0,ge,H.width,H.height,0,he,ve,null));else if(g.isDataTexture)if(Re.length>0&&xe){Be&&Xe&&t.texStorage2D(3553,A,ge,Re[0].width,Re[0].height);for(let O=0,Y=Re.length;O<Y;O++)fe=Re[O],Be?t.texSubImage2D(3553,O,0,0,fe.width,fe.height,he,ve,fe.data):t.texImage2D(3553,O,ge,fe.width,fe.height,0,he,ve,fe.data);g.generateMipmaps=!1}else Be?(Xe&&t.texStorage2D(3553,A,ge,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,he,ve,H.data)):t.texImage2D(3553,0,ge,H.width,H.height,0,he,ve,H.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Be&&Xe&&t.texStorage3D(35866,A,ge,Re[0].width,Re[0].height,H.depth);for(let O=0,Y=Re.length;O<Y;O++)fe=Re[O],g.format!==1023?he!==null?Be?t.compressedTexSubImage3D(35866,O,0,0,0,fe.width,fe.height,H.depth,he,fe.data,0,0):t.compressedTexImage3D(35866,O,ge,fe.width,fe.height,H.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,O,0,0,0,fe.width,fe.height,H.depth,he,ve,fe.data):t.texImage3D(35866,O,ge,fe.width,fe.height,H.depth,0,he,ve,fe.data)}else{Be&&Xe&&t.texStorage2D(3553,A,ge,Re[0].width,Re[0].height);for(let O=0,Y=Re.length;O<Y;O++)fe=Re[O],g.format!==1023?he!==null?Be?t.compressedTexSubImage2D(3553,O,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(3553,O,ge,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,O,0,0,fe.width,fe.height,he,ve,fe.data):t.texImage2D(3553,O,ge,fe.width,fe.height,0,he,ve,fe.data)}else if(g.isDataArrayTexture)Be?(Xe&&t.texStorage3D(35866,A,ge,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,he,ve,H.data)):t.texImage3D(35866,0,ge,H.width,H.height,H.depth,0,he,ve,H.data);else if(g.isData3DTexture)Be?(Xe&&t.texStorage3D(32879,A,ge,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,he,ve,H.data)):t.texImage3D(32879,0,ge,H.width,H.height,H.depth,0,he,ve,H.data);else if(g.isFramebufferTexture){if(Xe)if(Be)t.texStorage2D(3553,A,ge,H.width,H.height);else{let O=H.width,Y=H.height;for(let re=0;re<A;re++)t.texImage2D(3553,re,ge,O,Y,0,he,ve,null),O>>=1,Y>>=1}}else if(Re.length>0&&xe){Be&&Xe&&t.texStorage2D(3553,A,ge,Re[0].width,Re[0].height);for(let O=0,Y=Re.length;O<Y;O++)fe=Re[O],Be?t.texSubImage2D(3553,O,0,0,he,ve,fe):t.texImage2D(3553,O,ge,he,ve,fe);g.generateMipmaps=!1}else Be?(Xe&&t.texStorage2D(3553,A,ge,H.width,H.height),t.texSubImage2D(3553,0,0,0,he,ve,H)):t.texImage2D(3553,0,ge,he,ve,H);C(g,xe)&&I(Q),pe.__version=ie.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ue(y,g,G){if(g.image.length!==6)return;const Q=ae(y,g),ee=g.source;t.bindTexture(34067,y.__webglTexture,33984+G);const ie=n.get(ee);if(ee.version!==ie.__version||Q===!0){t.activeTexture(33984+G),r.pixelStorei(37440,g.flipY),r.pixelStorei(37441,g.premultiplyAlpha),r.pixelStorei(3317,g.unpackAlignment),r.pixelStorei(37443,0);const pe=g.isCompressedTexture||g.image[0].isCompressedTexture,se=g.image[0]&&g.image[0].isDataTexture,H=[];for(let O=0;O<6;O++)!pe&&!se?H[O]=_(g.image[O],!1,!0,l):H[O]=se?g.image[O].image:g.image[O],H[O]=yt(g,H[O]);const xe=H[0],he=T(xe)||a,ve=s.convert(g.format,g.encoding),ge=s.convert(g.type),fe=x(g.internalFormat,ve,ge,g.encoding),Re=a&&g.isVideoTexture!==!0,Be=ie.__version===void 0||Q===!0;let Xe=w(g,xe,he);le(34067,g,he);let A;if(pe){Re&&Be&&t.texStorage2D(34067,Xe,fe,xe.width,xe.height);for(let O=0;O<6;O++){A=H[O].mipmaps;for(let Y=0;Y<A.length;Y++){const re=A[Y];g.format!==1023?ve!==null?Re?t.compressedTexSubImage2D(34069+O,Y,0,0,re.width,re.height,ve,re.data):t.compressedTexImage2D(34069+O,Y,fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+O,Y,0,0,re.width,re.height,ve,ge,re.data):t.texImage2D(34069+O,Y,fe,re.width,re.height,0,ve,ge,re.data)}}}else{A=g.mipmaps,Re&&Be&&(A.length>0&&Xe++,t.texStorage2D(34067,Xe,fe,H[0].width,H[0].height));for(let O=0;O<6;O++)if(se){Re?t.texSubImage2D(34069+O,0,0,0,H[O].width,H[O].height,ve,ge,H[O].data):t.texImage2D(34069+O,0,fe,H[O].width,H[O].height,0,ve,ge,H[O].data);for(let Y=0;Y<A.length;Y++){const oe=A[Y].image[O].image;Re?t.texSubImage2D(34069+O,Y+1,0,0,oe.width,oe.height,ve,ge,oe.data):t.texImage2D(34069+O,Y+1,fe,oe.width,oe.height,0,ve,ge,oe.data)}}else{Re?t.texSubImage2D(34069+O,0,0,0,ve,ge,H[O]):t.texImage2D(34069+O,0,fe,ve,ge,H[O]);for(let Y=0;Y<A.length;Y++){const re=A[Y];Re?t.texSubImage2D(34069+O,Y+1,0,0,ve,ge,re.image[O]):t.texImage2D(34069+O,Y+1,fe,ve,ge,re.image[O])}}}C(g,he)&&I(34067),ie.__version=ee.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function _e(y,g,G,Q,ee){const ie=s.convert(G.format,G.encoding),pe=s.convert(G.type),se=x(G.internalFormat,ie,pe,G.encoding);n.get(g).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,se,g.width,g.height,g.depth,0,ie,pe,null):t.texImage2D(ee,0,se,g.width,g.height,0,ie,pe,null)),t.bindFramebuffer(36160,y),Ue(g)?h.framebufferTexture2DMultisampleEXT(36160,Q,ee,n.get(G).__webglTexture,0,ze(g)):(ee===3553||ee>=34069&&ee<=34074)&&r.framebufferTexture2D(36160,Q,ee,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(y,g,G){if(r.bindRenderbuffer(36161,y),g.depthBuffer&&!g.stencilBuffer){let Q=33189;if(G||Ue(g)){const ee=g.depthTexture;ee&&ee.isDepthTexture&&(ee.type===1015?Q=36012:ee.type===1014&&(Q=33190));const ie=ze(g);Ue(g)?h.renderbufferStorageMultisampleEXT(36161,ie,Q,g.width,g.height):r.renderbufferStorageMultisample(36161,ie,Q,g.width,g.height)}else r.renderbufferStorage(36161,Q,g.width,g.height);r.framebufferRenderbuffer(36160,36096,36161,y)}else if(g.depthBuffer&&g.stencilBuffer){const Q=ze(g);G&&Ue(g)===!1?r.renderbufferStorageMultisample(36161,Q,35056,g.width,g.height):Ue(g)?h.renderbufferStorageMultisampleEXT(36161,Q,35056,g.width,g.height):r.renderbufferStorage(36161,34041,g.width,g.height),r.framebufferRenderbuffer(36160,33306,36161,y)}else{const Q=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ee=0;ee<Q.length;ee++){const ie=Q[ee],pe=s.convert(ie.format,ie.encoding),se=s.convert(ie.type),H=x(ie.internalFormat,pe,se,ie.encoding),xe=ze(g);G&&Ue(g)===!1?r.renderbufferStorageMultisample(36161,xe,H,g.width,g.height):Ue(g)?h.renderbufferStorageMultisampleEXT(36161,xe,H,g.width,g.height):r.renderbufferStorage(36161,H,g.width,g.height)}}r.bindRenderbuffer(36161,null)}function Ee(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);const Q=n.get(g.depthTexture).__webglTexture,ee=ze(g);if(g.depthTexture.format===1026)Ue(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ee):r.framebufferTexture2D(36160,36096,3553,Q,0);else if(g.depthTexture.format===1027)Ue(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ee):r.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function Pe(y){const g=n.get(y),G=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ee(g.__webglFramebuffer,y)}else if(G){g.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,g.__webglFramebuffer[Q]),g.__webglDepthbuffer[Q]=r.createRenderbuffer(),we(g.__webglDepthbuffer[Q],y,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=r.createRenderbuffer(),we(g.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function nt(y,g,G){const Q=n.get(y);g!==void 0&&_e(Q.__webglFramebuffer,y,y.texture,36064,3553),G!==void 0&&Pe(y)}function St(y){const g=y.texture,G=n.get(y),Q=n.get(g);y.addEventListener("dispose",K),y.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=g.version,o.memory.textures++);const ee=y.isWebGLCubeRenderTarget===!0,ie=y.isWebGLMultipleRenderTargets===!0,pe=T(y)||a;if(ee){G.__webglFramebuffer=[];for(let se=0;se<6;se++)G.__webglFramebuffer[se]=r.createFramebuffer()}else{if(G.__webglFramebuffer=r.createFramebuffer(),ie)if(i.drawBuffers){const se=y.texture;for(let H=0,xe=se.length;H<xe;H++){const he=n.get(se[H]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&Ue(y)===!1){const se=ie?g:[g];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let H=0;H<se.length;H++){const xe=se[H];G.__webglColorRenderbuffer[H]=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer[H]);const he=s.convert(xe.format,xe.encoding),ve=s.convert(xe.type),ge=x(xe.internalFormat,he,ve,xe.encoding,y.isXRRenderTarget===!0),fe=ze(y);r.renderbufferStorageMultisample(36161,fe,ge,y.width,y.height),r.framebufferRenderbuffer(36160,36064+H,36161,G.__webglColorRenderbuffer[H])}r.bindRenderbuffer(36161,null),y.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),we(G.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,Q.__webglTexture),le(34067,g,pe);for(let se=0;se<6;se++)_e(G.__webglFramebuffer[se],y,g,36064,34069+se);C(g,pe)&&I(34067),t.unbindTexture()}else if(ie){const se=y.texture;for(let H=0,xe=se.length;H<xe;H++){const he=se[H],ve=n.get(he);t.bindTexture(3553,ve.__webglTexture),le(3553,he,pe),_e(G.__webglFramebuffer,y,he,36064+H,3553),C(he,pe)&&I(3553)}t.unbindTexture()}else{let se=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?se=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,Q.__webglTexture),le(se,g,pe),_e(G.__webglFramebuffer,y,g,36064,se),C(g,pe)&&I(se),t.unbindTexture()}y.depthBuffer&&Pe(y)}function at(y){const g=T(y)||a,G=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0,ee=G.length;Q<ee;Q++){const ie=G[Q];if(C(ie,g)){const pe=y.isWebGLCubeRenderTarget?34067:3553,se=n.get(ie).__webglTexture;t.bindTexture(pe,se),I(pe),t.unbindTexture()}}}function it(y){if(a&&y.samples>0&&Ue(y)===!1){const g=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],G=y.width,Q=y.height;let ee=16384;const ie=[],pe=y.stencilBuffer?33306:36096,se=n.get(y),H=y.isWebGLMultipleRenderTargets===!0;if(H)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,se.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,se.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){ie.push(36064+xe),y.depthBuffer&&ie.push(pe);const he=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(he===!1&&(y.depthBuffer&&(ee|=256),y.stencilBuffer&&(ee|=1024)),H&&r.framebufferRenderbuffer(36008,36064,36161,se.__webglColorRenderbuffer[xe]),he===!0&&(r.invalidateFramebuffer(36008,[pe]),r.invalidateFramebuffer(36009,[pe])),H){const ve=n.get(g[xe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ve,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,ee,9728),m&&r.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,se.__webglColorRenderbuffer[xe]);const he=n.get(g[xe]).__webglTexture;t.bindFramebuffer(36160,se.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,he,0)}t.bindFramebuffer(36009,se.__webglMultisampledFramebuffer)}}function ze(y){return Math.min(f,y.samples)}function Ue(y){const g=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function At(y){const g=o.render.frame;v.get(y)!==g&&(v.set(y,g),y.update())}function yt(y,g){const G=y.encoding,Q=y.format,ee=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===1035||G!==3e3&&(G===3001?a===!1?e.has("EXT_sRGB")===!0&&Q===1023?(y.format=1035,y.minFilter=1006,y.generateMipmaps=!1):g=Ji.sRGBToLinear(g):(Q!==1023||ee!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),g}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=Z,this.setTexture2DArray=de,this.setTexture3D=B,this.setTextureCube=$,this.rebindTextures=nt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ue}function Sc(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===1009)return 5121;if(s===1017)return 32819;if(s===1018)return 32820;if(s===1010)return 5120;if(s===1011)return 5122;if(s===1012)return 5123;if(s===1013)return 5124;if(s===1014)return 5125;if(s===1015)return 5126;if(s===1016)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===1021)return 6406;if(s===1023)return 6408;if(s===1024)return 6409;if(s===1025)return 6410;if(s===1026)return 6402;if(s===1027)return 34041;if(s===1035)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===1028)return 6403;if(s===1029)return 36244;if(s===1030)return 33319;if(s===1031)return 33320;if(s===1033)return 36249;if(s===33776||s===33777||s===33778||s===33779)if(o===3001)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===37492||s===37496)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===37492)return o===3001?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===37496)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===37808)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===37809)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===37810)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===37811)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===37812)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===37813)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===37814)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===37815)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===37816)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===37817)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===37818)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===37819)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===37820)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===37821)return o===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===36492)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===36492)return o===3001?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===36283||s===36284||s===36285||s===36286)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(s===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===1020?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class yc extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oi extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bc={type:"move"};class Vi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),S=this._getHandJoint(l,p);d!==null&&(S.matrix.fromArray(d.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.jointRadius=d.radius),S.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&h>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bc)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new oi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wc extends ct{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:1026,u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===1026&&(n=1014),n===void 0&&u===1027&&(n=1020),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1}}class Tc extends nn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,v=null;const p=t.getContextAttributes();let d=null,S=null;const b=[],_=[],T=new Set,E=new Map,C=new Mt;C.layers.enable(1),C.viewport=new je;const I=new Mt;I.layers.enable(2),I.viewport=new je;const x=[C,I],w=new yc;w.layers.enable(1),w.layers.enable(2);let F=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let $=b[B];return $===void 0&&($=new Vi,b[B]=$),$.getTargetRaySpace()},this.getControllerGrip=function(B){let $=b[B];return $===void 0&&($=new Vi,b[B]=$),$.getGripSpace()},this.getHand=function(B){let $=b[B];return $===void 0&&($=new Vi,b[B]=$),$.getHandSpace()};function K(B){const $=_.indexOf(B.inputSource);if($===-1)return;const ne=b[$];ne!==void 0&&ne.dispatchEvent({type:B.type,data:B.inputSource})}function U(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",R);for(let B=0;B<b.length;B++){const $=_[B];$!==null&&(_[B]=null,b[B].disconnect($))}F=null,q=null,e.setRenderTarget(d),m=null,h=null,f=null,i=null,S=null,de.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",U),i.addEventListener("inputsourceschange",R),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),S=new Wt(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let $=null,ne=null,P=null;p.depth&&(P=p.stencil?35056:33190,$=p.stencil?1027:1026,ne=p.stencil?1020:1014);const le={colorFormat:32856,depthFormat:P,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(le),i.updateRenderState({layers:[h]}),S=new Wt(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new wc(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const ae=e.properties.get(S);ae.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(B){for(let $=0;$<B.removed.length;$++){const ne=B.removed[$],P=_.indexOf(ne);P>=0&&(_[P]=null,b[P].disconnect(ne))}for(let $=0;$<B.added.length;$++){const ne=B.added[$];let P=_.indexOf(ne);if(P===-1){for(let ae=0;ae<b.length;ae++)if(ae>=_.length){_.push(ne),P=ae;break}else if(_[ae]===null){_[ae]=ne,P=ae;break}if(P===-1)break}const le=b[P];le&&le.connect(ne)}}const k=new N,j=new N;function J(B,$,ne){k.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(ne.matrixWorld);const P=k.distanceTo(j),le=$.projectionMatrix.elements,ae=ne.projectionMatrix.elements,ce=le[14]/(le[10]-1),ue=le[14]/(le[10]+1),_e=(le[9]+1)/le[5],we=(le[9]-1)/le[5],Ee=(le[8]-1)/le[0],Pe=(ae[8]+1)/ae[0],nt=ce*Ee,St=ce*Pe,at=P/(-Ee+Pe),it=at*-Ee;$.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(it),B.translateZ(at),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ze=ce+at,Ue=ue+at,At=nt-it,yt=St+(P-it),y=_e*ue/Ue*ze,g=we*ue/Ue*ze;B.projectionMatrix.makePerspective(At,yt,y,g,ze,Ue)}function W(B,$){$===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices($.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;w.near=I.near=C.near=B.near,w.far=I.far=C.far=B.far,(F!==w.near||q!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,q=w.far);const $=B.parent,ne=w.cameras;W(w,$);for(let le=0;le<ne.length;le++)W(ne[le],$);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),B.matrix.copy(w.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const P=B.children;for(let le=0,ae=P.length;le<ae;le++)P[le].updateMatrixWorld(!0);ne.length===2?J(w,C,I):w.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(B){c=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return T};let X=null;function Z(B,$){if(u=$.getViewerPose(l||o),v=$,u!==null){const ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let P=!1;ne.length!==w.cameras.length&&(w.cameras.length=0,P=!0);for(let le=0;le<ne.length;le++){const ae=ne[le];let ce=null;if(m!==null)ce=m.getViewport(ae);else{const _e=f.getViewSubImage(h,ae);ce=_e.viewport,le===0&&(e.setRenderTargetTextures(S,_e.colorTexture,h.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(S))}let ue=x[le];ue===void 0&&(ue=new Mt,ue.layers.enable(le),ue.viewport=new je,x[le]=ue),ue.matrix.fromArray(ae.transform.matrix),ue.projectionMatrix.fromArray(ae.projectionMatrix),ue.viewport.set(ce.x,ce.y,ce.width,ce.height),le===0&&w.matrix.copy(ue.matrix),P===!0&&w.cameras.push(ue)}}for(let ne=0;ne<b.length;ne++){const P=_[ne],le=b[ne];P!==null&&le!==void 0&&le.update(P,$,l||o)}if(X&&X(B,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ne=null;for(const P of T)$.detectedPlanes.has(P)||(ne===null&&(ne=[]),ne.push(P));if(ne!==null)for(const P of ne)T.delete(P),E.delete(P),n.dispatchEvent({type:"planeremoved",data:P});for(const P of $.detectedPlanes)if(!T.has(P))T.add(P),E.set(P,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:P});else{const le=E.get(P);P.lastChangedTime>le&&(E.set(P,P.lastChangedTime),n.dispatchEvent({type:"planechanged",data:P}))}}v=null}const de=new Mr;de.setAnimationLoop(Z),this.setAnimationLoop=function(B){X=B},this.dispose=function(){}}}function Ec(r,e){function t(p,d){d.color.getRGB(p.fogColor.value,gr(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,S,b,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,_)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),v(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,S,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===1&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===1&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const S=e.get(d).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const T=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*T}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let b;d.map?b=d.map:d.specularMap?b=d.specularMap:d.displacementMap?b=d.displacementMap:d.normalMap?b=d.normalMap:d.bumpMap?b=d.bumpMap:d.roughnessMap?b=d.roughnessMap:d.metalnessMap?b=d.metalnessMap:d.alphaMap?b=d.alphaMap:d.emissiveMap?b=d.emissiveMap:d.clearcoatMap?b=d.clearcoatMap:d.clearcoatNormalMap?b=d.clearcoatNormalMap:d.clearcoatRoughnessMap?b=d.clearcoatRoughnessMap:d.iridescenceMap?b=d.iridescenceMap:d.iridescenceThicknessMap?b=d.iridescenceThicknessMap:d.specularIntensityMap?b=d.specularIntensityMap:d.specularColorMap?b=d.specularColorMap:d.transmissionMap?b=d.transmissionMap:d.thicknessMap?b=d.thicknessMap:d.sheenColorMap?b=d.sheenColorMap:d.sheenRoughnessMap&&(b=d.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let _;d.aoMap?_=d.aoMap:d.lightMap&&(_=d.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,S,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*S,p.scale.value=b*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let S;d.map?S=d.map:d.alphaMap&&(S=d.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,S){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===1&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ac(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(b,_){const T=_.program;n.uniformBlockBinding(b,T)}function l(b,_){let T=i[b.id];T===void 0&&(v(b),T=u(b),i[b.id]=T,b.addEventListener("dispose",d));const E=_.program;n.updateUBOMapping(b,E);const C=e.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){const _=f();b.__bindingPointIndex=_;const T=r.createBuffer(),E=b.__size,C=b.usage;return r.bindBuffer(35345,T),r.bufferData(35345,E,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,T),T}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const _=i[b.id],T=b.uniforms,E=b.__cache;r.bindBuffer(35345,_);for(let C=0,I=T.length;C<I;C++){const x=T[C];if(m(x,C,E)===!0){const w=x.__offset,F=Array.isArray(x.value)?x.value:[x.value];let q=0;for(let K=0;K<F.length;K++){const U=F[K],R=p(U);typeof U=="number"?(x.__data[0]=U,r.bufferSubData(35345,w+q,x.__data)):U.isMatrix3?(x.__data[0]=U.elements[0],x.__data[1]=U.elements[1],x.__data[2]=U.elements[2],x.__data[3]=U.elements[0],x.__data[4]=U.elements[3],x.__data[5]=U.elements[4],x.__data[6]=U.elements[5],x.__data[7]=U.elements[0],x.__data[8]=U.elements[6],x.__data[9]=U.elements[7],x.__data[10]=U.elements[8],x.__data[11]=U.elements[0]):(U.toArray(x.__data,q),q+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,w,x.__data)}}r.bindBuffer(35345,null)}function m(b,_,T){const E=b.value;if(T[_]===void 0){if(typeof E=="number")T[_]=E;else{const C=Array.isArray(E)?E:[E],I=[];for(let x=0;x<C.length;x++)I.push(C[x].clone());T[_]=I}return!0}else if(typeof E=="number"){if(T[_]!==E)return T[_]=E,!0}else{const C=Array.isArray(T[_])?T[_]:[T[_]],I=Array.isArray(E)?E:[E];for(let x=0;x<C.length;x++){const w=C[x];if(w.equals(I[x])===!1)return w.copy(I[x]),!0}}return!1}function v(b){const _=b.uniforms;let T=0;const E=16;let C=0;for(let I=0,x=_.length;I<x;I++){const w=_[I],F={boundary:0,storage:0},q=Array.isArray(w.value)?w.value:[w.value];for(let K=0,U=q.length;K<U;K++){const R=q[K],k=p(R);F.boundary+=k.boundary,F.storage+=k.storage}if(w.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=T,I>0){C=T%E;const K=E-C;C!==0&&K-F.boundary<0&&(T+=E-C,w.__offset=T)}T+=F.storage}return C=T%E,C>0&&(T+=E-C),b.__size=T,b.__cache={},this}function p(b){const _={boundary:0,storage:0};return typeof b=="number"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function d(b){const _=b.target;_.removeEventListener("dispose",d);const T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function S(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:c,update:l,dispose:S}}function Cc(){const r=zn("canvas");return r.style.display="block",r}function Yr(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Cc(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.useLegacyLights=!0,this.toneMapping=0,this.toneMappingExposure=1;const p=this;let d=!1,S=0,b=0,_=null,T=-1,E=null;const C=new je,I=new je;let x=null,w=e.width,F=e.height,q=1,K=null,U=null;const R=new je(0,0,w,F),k=new je(0,0,w,F);let j=!1;const J=new vr;let W=!1,X=!1,Z=null;const de=new Ze,B=new N,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return _===null?q:1}let P=t;function le(M,D){for(let z=0;z<M.length;z++){const L=M[z],V=e.getContext(L,D);if(V!==null)return V}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${di}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",fe,!1),P===null){const D=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&D.shift(),P=le(D,M),P===null)throw le(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ae,ce,ue,_e,we,Ee,Pe,nt,St,at,it,ze,Ue,At,yt,y,g,G,Q,ee,ie,pe,se,H;function xe(){ae=new Oo(P),ce=new Po(P,ae,r),ae.init(ce),pe=new Sc(P,ae,ce),ue=new vc(P,ae,ce),_e=new ko,we=new sc,Ee=new Mc(P,ae,ue,we,ce,pe,_e),Pe=new Io(p),nt=new zo(p),St=new Ls(P,ce),se=new Ro(P,ae,St,ce),at=new Go(P,St,_e,se),it=new Xo(P,at,St,_e),Q=new qo(P,ce,Ee),y=new Fo(we),ze=new rc(p,Pe,nt,ae,ce,se,y),Ue=new Ec(p,we),At=new oc,yt=new fc(ae,ce),G=new Lo(p,Pe,nt,ue,it,u,o),g=new xc(p,it,ce),H=new Ac(P,_e,ce,ue),ee=new Do(P,ae,_e,ce),ie=new Vo(P,ae,_e,ce),_e.programs=ze.programs,p.capabilities=ce,p.extensions=ae,p.properties=we,p.renderLists=At,p.shadowMap=g,p.state=ue,p.info=_e}xe();const he=new Tc(p,P);this.xr=he,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(w,F,!1))},this.getSize=function(M){return M.set(w,F)},this.setSize=function(M,D,z=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=M,F=D,e.width=Math.floor(M*q),e.height=Math.floor(D*q),z===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(w*q,F*q).floor()},this.setDrawingBufferSize=function(M,D,z){w=M,F=D,q=z,e.width=Math.floor(M*z),e.height=Math.floor(D*z),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(R)},this.setViewport=function(M,D,z,L){M.isVector4?R.set(M.x,M.y,M.z,M.w):R.set(M,D,z,L),ue.viewport(C.copy(R).multiplyScalar(q).floor())},this.getScissor=function(M){return M.copy(k)},this.setScissor=function(M,D,z,L){M.isVector4?k.set(M.x,M.y,M.z,M.w):k.set(M,D,z,L),ue.scissor(I.copy(k).multiplyScalar(q).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(M){ue.setScissorTest(j=M)},this.setOpaqueSort=function(M){K=M},this.setTransparentSort=function(M){U=M},this.getClearColor=function(M){return M.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(M=!0,D=!0,z=!0){let L=0;M&&(L|=16384),D&&(L|=256),z&&(L|=1024),P.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),At.dispose(),yt.dispose(),we.dispose(),Pe.dispose(),nt.dispose(),it.dispose(),se.dispose(),H.dispose(),ze.dispose(),he.dispose(),he.removeEventListener("sessionstart",Y),he.removeEventListener("sessionend",re),Z&&(Z.dispose(),Z=null),oe.stop()};function ve(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const M=_e.autoReset,D=g.enabled,z=g.autoUpdate,L=g.needsUpdate,V=g.type;xe(),_e.autoReset=M,g.enabled=D,g.autoUpdate=z,g.needsUpdate=L,g.type=V}function fe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Re(M){const D=M.target;D.removeEventListener("dispose",Re),Be(D)}function Be(M){Xe(M),we.remove(M)}function Xe(M){const D=we.get(M).programs;D!==void 0&&(D.forEach(function(z){ze.releaseProgram(z)}),M.isShaderMaterial&&ze.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,z,L,V,me){D===null&&(D=$);const Se=V.isMesh&&V.matrixWorld.determinant()<0,be=eu(M,D,z,L,V);ue.setMaterial(L,Se);let Te=z.index,De=1;L.wireframe===!0&&(Te=at.getWireframeAttribute(z),De=2);const Ae=z.drawRange,Ce=z.attributes.position;let Ve=Ae.start*De,dt=(Ae.start+Ae.count)*De;me!==null&&(Ve=Math.max(Ve,me.start*De),dt=Math.min(dt,(me.start+me.count)*De)),Te!==null?(Ve=Math.max(Ve,0),dt=Math.min(dt,Te.count)):Ce!=null&&(Ve=Math.max(Ve,0),dt=Math.min(dt,Ce.count));const Ut=dt-Ve;if(Ut<0||Ut===1/0)return;se.setup(V,L,be,z,Te);let Qt,ke=ee;if(Te!==null&&(Qt=St.get(Te),ke=ie,ke.setIndex(Qt)),V.isMesh)L.wireframe===!0?(ue.setLineWidth(L.wireframeLinewidth*ne()),ke.setMode(1)):ke.setMode(4);else if(V.isLine){let Le=L.linewidth;Le===void 0&&(Le=1),ue.setLineWidth(Le*ne()),V.isLineSegments?ke.setMode(1):V.isLineLoop?ke.setMode(2):ke.setMode(3)}else V.isPoints?ke.setMode(0):V.isSprite&&ke.setMode(4);if(V.isInstancedMesh)ke.renderInstances(Ve,Ut,V.count);else if(z.isInstancedBufferGeometry){const Le=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ki=Math.min(z.instanceCount,Le);ke.renderInstances(Ve,Ut,ki)}else ke.render(Ve,Ut)},this.compile=function(M,D){function z(L,V,me){L.transparent===!0&&L.side===2&&L.forceSinglePass===!1?(L.side=1,L.needsUpdate=!0,gt(L,V,me),L.side=0,L.needsUpdate=!0,gt(L,V,me),L.side=2):gt(L,V,me)}h=yt.get(M),h.init(),v.push(h),M.traverseVisible(function(L){L.isLight&&L.layers.test(D.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights(p.useLegacyLights),M.traverse(function(L){const V=L.material;if(V)if(Array.isArray(V))for(let me=0;me<V.length;me++){const Se=V[me];z(Se,M,L)}else z(V,M,L)}),v.pop(),h=null};let A=null;function O(M){A&&A(M)}function Y(){oe.stop()}function re(){oe.start()}const oe=new Mr;oe.setAnimationLoop(O),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(M){A=M,he.setAnimationLoop(M),M===null?oe.stop():oe.start()},he.addEventListener("sessionstart",Y),he.addEventListener("sessionend",re),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(D),D=he.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,D,_),h=yt.get(M,v.length),h.init(),v.push(h),de.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),J.setFromProjectionMatrix(de),X=this.localClippingEnabled,W=y.init(this.clippingPlanes,X),f=At.get(M,m.length),f.init(),m.push(f),Ne(M,D,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(K,U),W===!0&&y.beginShadows();const z=h.state.shadowsArray;if(g.render(z,M,D),W===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(f,M),h.setupLights(p.useLegacyLights),D.isArrayCamera){const L=D.cameras;for(let V=0,me=L.length;V<me;V++){const Se=L[V];Ye(f,M,Se,Se.viewport)}}else Ye(f,M,D);_!==null&&(Ee.updateMultisampleRenderTarget(_),Ee.updateRenderTargetMipmap(_)),M.isScene===!0&&M.onAfterRender(p,M,D),se.resetDefaultState(),T=-1,E=null,v.pop(),v.length>0?h=v[v.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ne(M,D,z,L){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||J.intersectsSprite(M)){L&&B.setFromMatrixPosition(M.matrixWorld).applyMatrix4(de);const Se=it.update(M),be=M.material;be.visible&&f.push(M,Se,be,z,B.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==_e.render.frame&&(M.skeleton.update(),M.skeleton.frame=_e.render.frame),!M.frustumCulled||J.intersectsObject(M))){L&&B.setFromMatrixPosition(M.matrixWorld).applyMatrix4(de);const Se=it.update(M),be=M.material;if(Array.isArray(be)){const Te=Se.groups;for(let De=0,Ae=Te.length;De<Ae;De++){const Ce=Te[De],Ve=be[Ce.materialIndex];Ve&&Ve.visible&&f.push(M,Se,Ve,z,B.z,Ce)}}else be.visible&&f.push(M,Se,be,z,B.z,null)}}const me=M.children;for(let Se=0,be=me.length;Se<be;Se++)Ne(me[Se],D,z,L)}function Ye(M,D,z,L){const V=M.opaque,me=M.transmissive,Se=M.transparent;h.setupLightsView(z),W===!0&&y.setGlobalState(p.clippingPlanes,z),me.length>0&&rt(V,D,z),L&&ue.viewport(C.copy(L)),V.length>0&&Ct(V,D,z),me.length>0&&Ct(me,D,z),Se.length>0&&Ct(Se,D,z),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function rt(M,D,z){const L=ce.isWebGL2;Z===null&&(Z=new Wt(1024,1024,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:L&&s===!0?4:0}));const V=p.getRenderTarget();p.setRenderTarget(Z),p.clear();const me=p.toneMapping;p.toneMapping=0,Ct(M,D,z),p.toneMapping=me,Ee.updateMultisampleRenderTarget(Z),Ee.updateRenderTargetMipmap(Z),p.setRenderTarget(V)}function Ct(M,D,z){const L=D.isScene===!0?D.overrideMaterial:null;for(let V=0,me=M.length;V<me;V++){const Se=M[V],be=Se.object,Te=Se.geometry,De=L===null?Se.material:L,Ae=Se.group;be.layers.test(z.layers)&&Oe(be,D,z,Te,De,Ae)}}function Oe(M,D,z,L,V,me){M.onBeforeRender(p,D,z,L,V,me),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(p,D,z,L,M,me),V.transparent===!0&&V.side===2&&V.forceSinglePass===!1?(V.side=1,V.needsUpdate=!0,p.renderBufferDirect(z,D,L,V,M,me),V.side=0,V.needsUpdate=!0,p.renderBufferDirect(z,D,L,V,M,me),V.side=2):p.renderBufferDirect(z,D,L,V,M,me),M.onAfterRender(p,D,z,L,V,me)}function gt(M,D,z){D.isScene!==!0&&(D=$);const L=we.get(M),V=h.state.lights,me=h.state.shadowsArray,Se=V.state.version,be=ze.getParameters(M,V.state,me,D,z),Te=ze.getProgramCacheKey(be);let De=L.programs;L.environment=M.isMeshStandardMaterial?D.environment:null,L.fog=D.fog,L.envMap=(M.isMeshStandardMaterial?nt:Pe).get(M.envMap||L.environment),De===void 0&&(M.addEventListener("dispose",Re),De=new Map,L.programs=De);let Ae=De.get(Te);if(Ae!==void 0){if(L.currentProgram===Ae&&L.lightsStateVersion===Se)return Lt(M,be),Ae}else be.uniforms=ze.getUniforms(M),M.onBuild(z,be,p),M.onBeforeCompile(be,p),Ae=ze.acquireProgram(be,Te),De.set(Te,Ae),L.uniforms=be.uniforms;const Ce=L.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=y.uniform),Lt(M,be),L.needsLights=nu(M),L.lightsStateVersion=Se,L.needsLights&&(Ce.ambientLightColor.value=V.state.ambient,Ce.lightProbe.value=V.state.probe,Ce.directionalLights.value=V.state.directional,Ce.directionalLightShadows.value=V.state.directionalShadow,Ce.spotLights.value=V.state.spot,Ce.spotLightShadows.value=V.state.spotShadow,Ce.rectAreaLights.value=V.state.rectArea,Ce.ltc_1.value=V.state.rectAreaLTC1,Ce.ltc_2.value=V.state.rectAreaLTC2,Ce.pointLights.value=V.state.point,Ce.pointLightShadows.value=V.state.pointShadow,Ce.hemisphereLights.value=V.state.hemi,Ce.directionalShadowMap.value=V.state.directionalShadowMap,Ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ce.spotShadowMap.value=V.state.spotShadowMap,Ce.spotLightMatrix.value=V.state.spotLightMatrix,Ce.spotLightMap.value=V.state.spotLightMap,Ce.pointShadowMap.value=V.state.pointShadowMap,Ce.pointShadowMatrix.value=V.state.pointShadowMatrix);const Ve=Ae.getUniforms(),dt=ai.seqWithValue(Ve.seq,Ce);return L.currentProgram=Ae,L.uniformsList=dt,Ae}function Lt(M,D){const z=we.get(M);z.outputEncoding=D.outputEncoding,z.instancing=D.instancing,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function eu(M,D,z,L,V){D.isScene!==!0&&(D=$),Ee.resetTextureUnits();const me=D.fog,Se=L.isMeshStandardMaterial?D.environment:null,be=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:3e3,Te=(L.isMeshStandardMaterial?nt:Pe).get(L.envMap||Se),De=L.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ae=!!L.normalMap&&!!z.attributes.tangent,Ce=!!z.morphAttributes.position,Ve=!!z.morphAttributes.normal,dt=!!z.morphAttributes.color,Ut=L.toneMapped?p.toneMapping:0,Qt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ke=Qt!==void 0?Qt.length:0,Le=we.get(L),ki=h.state.lights;if(W===!0&&(X===!0||M!==E)){const ft=M===E&&L.id===T;y.setState(L,M,ft)}let $e=!1;L.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==ki.state.version||Le.outputEncoding!==be||V.isInstancedMesh&&Le.instancing===!1||!V.isInstancedMesh&&Le.instancing===!0||V.isSkinnedMesh&&Le.skinning===!1||!V.isSkinnedMesh&&Le.skinning===!0||Le.envMap!==Te||L.fog===!0&&Le.fog!==me||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==y.numPlanes||Le.numIntersection!==y.numIntersection)||Le.vertexAlphas!==De||Le.vertexTangents!==Ae||Le.morphTargets!==Ce||Le.morphNormals!==Ve||Le.morphColors!==dt||Le.toneMapping!==Ut||ce.isWebGL2===!0&&Le.morphTargetsCount!==ke)&&($e=!0):($e=!0,Le.__version=L.version);let en=Le.currentProgram;$e===!0&&(en=gt(L,D,V));let Jr=!1,Un=!1,Wi=!1;const st=en.getUniforms(),tn=Le.uniforms;if(ue.useProgram(en.program)&&(Jr=!0,Un=!0,Wi=!0),L.id!==T&&(T=L.id,Un=!0),Jr||E!==M){if(st.setValue(P,"projectionMatrix",M.projectionMatrix),ce.logarithmicDepthBuffer&&st.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),E!==M&&(E=M,Un=!0,Wi=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const ft=st.map.cameraPosition;ft!==void 0&&ft.setValue(P,B.setFromMatrixPosition(M.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&st.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||V.isSkinnedMesh)&&st.setValue(P,"viewMatrix",M.matrixWorldInverse)}if(V.isSkinnedMesh){st.setOptional(P,V,"bindMatrix"),st.setOptional(P,V,"bindMatrixInverse");const ft=V.skeleton;ft&&(ce.floatVertexTextures?(ft.boneTexture===null&&ft.computeBoneTexture(),st.setValue(P,"boneTexture",ft.boneTexture,Ee),st.setValue(P,"boneTextureSize",ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hi=z.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0&&ce.isWebGL2===!0)&&Q.update(V,z,en),(Un||Le.receiveShadow!==V.receiveShadow)&&(Le.receiveShadow=V.receiveShadow,st.setValue(P,"receiveShadow",V.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(tn.envMap.value=Te,tn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Un&&(st.setValue(P,"toneMappingExposure",p.toneMappingExposure),Le.needsLights&&tu(tn,Wi),me&&L.fog===!0&&Ue.refreshFogUniforms(tn,me),Ue.refreshMaterialUniforms(tn,L,q,F,Z),ai.upload(P,Le.uniformsList,tn,Ee)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(ai.upload(P,Le.uniformsList,tn,Ee),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&st.setValue(P,"center",V.center),st.setValue(P,"modelViewMatrix",V.modelViewMatrix),st.setValue(P,"normalMatrix",V.normalMatrix),st.setValue(P,"modelMatrix",V.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const ft=L.uniformsGroups;for(let qi=0,iu=ft.length;qi<iu;qi++)if(ce.isWebGL2){const Qr=ft[qi];H.update(Qr,en),H.bind(Qr,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function tu(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function nu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(M,D,z){we.get(M.texture).__webglTexture=D,we.get(M.depthTexture).__webglTexture=z;const L=we.get(M);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=z===void 0,L.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const z=we.get(M);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,z=0){_=M,S=D,b=z;let L=!0,V=null,me=!1,Se=!1;if(M){const Te=we.get(M);Te.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),L=!1):Te.__webglFramebuffer===void 0?Ee.setupRenderTarget(M):Te.__hasExternalTextures&&Ee.rebindTextures(M,we.get(M.texture).__webglTexture,we.get(M.depthTexture).__webglTexture);const De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Se=!0);const Ae=we.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(V=Ae[D],me=!0):ce.isWebGL2&&M.samples>0&&Ee.useMultisampledRTT(M)===!1?V=we.get(M).__webglMultisampledFramebuffer:V=Ae,C.copy(M.viewport),I.copy(M.scissor),x=M.scissorTest}else C.copy(R).multiplyScalar(q).floor(),I.copy(k).multiplyScalar(q).floor(),x=j;if(ue.bindFramebuffer(36160,V)&&ce.drawBuffers&&L&&ue.drawBuffers(M,V),ue.viewport(C),ue.scissor(I),ue.setScissorTest(x),me){const Te=we.get(M.texture);P.framebufferTexture2D(36160,36064,34069+D,Te.__webglTexture,z)}else if(Se){const Te=we.get(M.texture),De=D||0;P.framebufferTextureLayer(36160,36064,Te.__webglTexture,z||0,De)}T=-1},this.readRenderTargetPixels=function(M,D,z,L,V,me,Se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){ue.bindFramebuffer(36160,be);try{const Te=M.texture,De=Te.format,Ae=Te.type;if(De!==1023&&pe.convert(De)!==P.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ae===1016&&(ae.has("EXT_color_buffer_half_float")||ce.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ae!==1009&&pe.convert(Ae)!==P.getParameter(35738)&&!(Ae===1015&&(ce.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-L&&z>=0&&z<=M.height-V&&P.readPixels(D,z,L,V,pe.convert(De),pe.convert(Ae),me)}finally{const Te=_!==null?we.get(_).__webglFramebuffer:null;ue.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(M,D,z=0){const L=Math.pow(2,-z),V=Math.floor(D.image.width*L),me=Math.floor(D.image.height*L);Ee.setTexture2D(D,0),P.copyTexSubImage2D(3553,z,0,0,M.x,M.y,V,me),ue.unbindTexture()},this.copyTextureToTexture=function(M,D,z,L=0){const V=D.image.width,me=D.image.height,Se=pe.convert(z.format),be=pe.convert(z.type);Ee.setTexture2D(z,0),P.pixelStorei(37440,z.flipY),P.pixelStorei(37441,z.premultiplyAlpha),P.pixelStorei(3317,z.unpackAlignment),D.isDataTexture?P.texSubImage2D(3553,L,M.x,M.y,V,me,Se,be,D.image.data):D.isCompressedTexture?P.compressedTexSubImage2D(3553,L,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,Se,D.mipmaps[0].data):P.texSubImage2D(3553,L,M.x,M.y,Se,be,D.image),L===0&&z.generateMipmaps&&P.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(M,D,z,L,V=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=M.max.x-M.min.x+1,Se=M.max.y-M.min.y+1,be=M.max.z-M.min.z+1,Te=pe.convert(L.format),De=pe.convert(L.type);let Ae;if(L.isData3DTexture)Ee.setTexture3D(L,0),Ae=32879;else if(L.isDataArrayTexture)Ee.setTexture2DArray(L,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(37440,L.flipY),P.pixelStorei(37441,L.premultiplyAlpha),P.pixelStorei(3317,L.unpackAlignment);const Ce=P.getParameter(3314),Ve=P.getParameter(32878),dt=P.getParameter(3316),Ut=P.getParameter(3315),Qt=P.getParameter(32877),ke=z.isCompressedTexture?z.mipmaps[0]:z.image;P.pixelStorei(3314,ke.width),P.pixelStorei(32878,ke.height),P.pixelStorei(3316,M.min.x),P.pixelStorei(3315,M.min.y),P.pixelStorei(32877,M.min.z),z.isDataTexture||z.isData3DTexture?P.texSubImage3D(Ae,V,D.x,D.y,D.z,me,Se,be,Te,De,ke.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ae,V,D.x,D.y,D.z,me,Se,be,Te,ke.data)):P.texSubImage3D(Ae,V,D.x,D.y,D.z,me,Se,be,Te,De,ke),P.pixelStorei(3314,Ce),P.pixelStorei(32878,Ve),P.pixelStorei(3316,dt),P.pixelStorei(3315,Ut),P.pixelStorei(32877,Qt),V===0&&L.generateMipmaps&&P.generateMipmap(Ae),ue.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Ee.setTextureCube(M,0):M.isData3DTexture?Ee.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ee.setTexture2DArray(M,0):Ee.setTexture2D(M,0),ue.unbindTexture()},this.resetState=function(){S=0,b=0,_=null,ue.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Yr.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class Lc extends Yr{}Lc.prototype.isWebGL1Renderer=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:di}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=di);const{abs:li,cos:tf,sin:nf,cosh:rf,sinh:sf,acos:af,acosh:of,min:lf,max:cf,round:uf,sqrt:ci,sign:Rc,floor:hf,log:df,PI:ff}=Math,Me={p:5,q:2,r:2,s:3,t:2,u:4,x:1,y:0,z:0,w:0,dimensions:4,order:10,segments:16,vertices:!1,edges:!0,DEBUG:!1},Dc=["p","q","r","s","t","u","x","y","z","w","dimensions","order","segments","vertices","edges","DEBUG"],Pc=(r,e=!1)=>{Object.assign(Me,r),e&&(location.hash=btoa(JSON.stringify(Object.fromEntries(Object.entries(Me).filter(([t])=>Dc.includes(t))))))},Fc=100;let $r;const ui=(r,e)=>{const t=r.length-e.length;return t!==0?t:r<=e?-1:1},Ic=r=>{const e=new Map,t=Object.keys(r).sort(ui);for(let n=0;n<t.length;n++){const i=t[n],[s,o]=[i,r[i]].sort(ui);e.has(o)?e.set(o,[s,e.get(o)].sort()[0]):e.set(o,s)}return e},In=(r,e)=>{if(e.length===0||r.size===0)return e;const t=r._re_cache||new RegExp([...r.keys()].join("|"),"g");let n=e;do e=n,n=e.replace(t,i=>r.get(i));while(n!==e);return e},Nc=r=>{const e=new Map(r);for(r=[...r.entries()];r.length>0;){if(performance.now()-$r>5e3)throw new Error("Timeout");const[t,n]=r.pop();e.delete(t);const i=In(e,t),s=In(e,n);let o=!0;if(i===s)o=!1;else{const[a,c]=[i,s].sort(ui);c!==t&&a!==n&&(e.set(c,a),r.push([c,a]),o=!1)}o&&e.set(t,n)}return e},Uc=function(r,e){if(e.length===0)return null;const t=Math.max(0,r.length-e.length);for(let n=t;n<r.length;n++)if(r[n]===e[0]&&r.slice(n+1)===e.slice(1,r.length-n))return{prefix:r.slice(0,n),suffix:e.slice(r.length-n)}},Bc=function(r,e){if(e.length===0)return null;for(let t=0;t<r.length-e.length+1;t++)if(r.slice(t,t+e.length)===e)return{prefix:r.slice(0,t),suffix:r.slice(t+e.length)}},zc=(r,e,t,n)=>{const i=Uc(r,t);if(i)return{s1:i.prefix+n,s2:e+i.suffix};const s=Bc(r,t);if(s)return{s1:e,s2:s.prefix+n+s.suffix}},Oc=r=>{const e=new Map(r),t=[...r.entries()];for(let n=0;n<t.length;n++){const[i,s]=t[n];for(let o=0;o<t.length;o++){if(n===o)continue;const[a,c]=t[o],l=zc(i,s,a,c);if(l){const u=In(r,l.s1),f=In(r,l.s2);if(u!==f){const[h,m]=[u,f].sort(ui);e.set(m,h)}}}}return e},Gc=r=>Oc(Nc(r)),Vc=(r,e)=>{if(r.size!==e.size)return!1;const t=r.keys();for(;;){const{done:n,value:i}=t.next();if(n)return!0;if(r.get(i)!==e.get(i))return!1}},kc=r=>{$r=performance.now(),r=Ic(r);for(let e=0;e<Fc;e++){const t=Gc(r);if(Vc(t,r))return t._re_cache=new RegExp([...t.keys()].join("|"),"g"),t;if(r=t,r.size>200)throw new Error("Too many rules")}throw new Error("Max iterations reached")},Wc=()=>kc(Me.dimensions===3?{aa:"",bb:"",cc:"",["ab".repeat(Me.p)]:"",["ac".repeat(Me.q)]:"",["bc".repeat(Me.r)]:""}:{aa:"",bb:"",cc:"",dd:"",["ab".repeat(Me.p)]:"",["ac".repeat(Me.q)]:"",["ad".repeat(Me.r)]:"",["bc".repeat(Me.s)]:"",["bd".repeat(Me.t)]:"",["cd".repeat(Me.u)]:""}),Hc=r=>In(Me.runtime.rules,r),jr=(r,e,t=null)=>{const n=t===null?Me.curvature:t;let i=0;for(let s=0;s<r.length;s++)i+=r[s]*e[s]*(s===r.length-1&&n||1);return i},qc=(r,e)=>{r=r.slice();const t=2*jr(r,e);for(let n=0;n<r.length;n++)r[n]-=t*(Me.curvature||n!==r.length-1?e[n]:0);return r},Xc=r=>{if(r=r.slice(),Me.curvature===0){for(let t=0;t<r.length;t++)r[t]/=r[r.length-1];return r}const e=(Me.curvature===-1&&Rc(r[r.length-1])||1)/ci(li(jr(r,r)));for(let t=0;t<r.length;t++)r[t]*=e;return r},Yc=()=>{const{dimensions:r,curvature:e}=Me,t=new Array(r).fill().map(()=>new Array(r).fill(0));return t[0][0]=1,t[1][0]=Me.gram[1][0],t[1][1]=ci(1-t[1][0]*t[1][0]),t[2][0]=Me.gram[2][0],t[2][1]=(Me.gram[2][1]-t[2][0]*t[1][0])/t[1][1],t[2][2]=ci(li(1-t[2][0]*t[2][0]-t[2][1]*t[2][1])),r===4&&(t[3][0]=Me.gram[3][0],t[3][1]=(Me.gram[3][1]-t[3][0]*t[1][0])/t[1][1],t[3][2]=(Me.gram[3][2]-t[3][0]*t[2][0]-t[3][1]*t[2][1])/t[2][2],t[3][3]=ci(li(1-t[3][0]*t[3][0]-t[3][1]*t[3][1]-t[3][2]*t[3][2]))),t[t.length-1][t.length-1]=e?t[t.length-1][t.length-1]*e:1,t},Zr=(r,[e,t,n,i])=>{const s=new Array(Me.dimensions);return s[0]=e,s[1]=(t-r[1][0]*s[0])/r[1][1],s[2]=(n-r[2][0]*s[0]-r[2][1]*s[1])/r[2][2],Me.dimensions===4&&(s[3]=(i-r[3][0]*s[0]-r[3][1]*s[1]-r[3][2]*s[2])/r[3][3]),s[s.length-1]*=Me.curvature||1,Xc(s)},hi=new Ie,$c=(r,e)=>{for(let t=0;t<r.length;t++)if(li(r[t]-e[t])>1e-8)return!1;return!0},jc=()=>{const r=Me.runtime;r.vertices.push({vertex:r.rootVertex,color:hi.set(255).getHex()});for(let e=0;e<r.rootVertices.length;e++){r.vertices.push({vertex:r.rootVertices[e],color:hi.set(65280).getHex()});for(let t=0;t<e;t++)r.edges.push({vertex1:r.rootVertices[e],vertex2:r.rootVertices[t],color:hi.set(65280).getHex()})}},Zc=r=>{const e=Me.runtime;let t=e.rootVertex,i=r.split("").reverse().join("");for(let s=0;s<i.length;s++)t=qc(t,e.mirrors[i[s].charCodeAt(0)-97]);return t},Nn=r=>{let e="";for(let t=0;t<r.length;t++)e+=r[t].toString().slice(0,6),t<r.length-1&&(e+="|");return e},Kc=()=>{const r=Me.runtime={vertices:[],edges:[],reflections:new Map,words:new Map,edgeHashes:new Set,vertexHashes:new Set,lastOrder:0,wordsToConsider:[""],mirrors:Yc(),rootVertices:null,rootVertex:null};r.rootVertices=r.mirrors.map((e,t)=>Zr(r.mirrors,new Array(Me.dimensions).fill(0).map((n,i)=>t===i?Me.curvature||1:0))),r.rootVertex=Zr(r.mirrors,[Me.x?1:0,Me.y?1:0,Me.z?1:0,Me.w?1:0]),r.words.set("",r.rootVertex),Me.DEBUG&&jc();try{r.rules=Wc()}catch(e){console.log(e);return}},Jc=()=>{const r=Me.runtime;let e=[""];for(let t=r.lastOrder;t<Me.order;t++){let n;do{n=[];for(let i=0;i<r.wordsToConsider.length;i++){const s=r.wordsToConsider[i],o=r.words.get(s);for(let a=0;a<Me.dimensions-(t===0?1:0);a++){if(s.slice(-1)===String.fromCharCode(97+a))continue;const c=Hc(s+String.fromCharCode(97+a)),l=hi.setHSL(c.length*.17%1,.5,.5).getHex();if(r.words.has(c)){const u=r.words.get(c);Kr(s,c,o,u,l)}else{const u=Zc(c);r.words.set(c,u),Qc(u,l),Kr(s,c,o,u,l),n.push(c)}}}t===0&&(e.push(...n),r.wordsToConsider=n)}while(t===0&&n.length);if(t===0?r.wordsToConsider=e:r.wordsToConsider=n,!r.wordsToConsider.length){r.lastOrder=1/0;return}r.lastOrder=t+1}};function Qc(r,e){const t=Me.runtime,n=Nn(r);t.vertexHashes.has(n)||(t.vertexHashes.add(n),t.vertices.push({vertex:r,color:e}))}function Kr(r,e,t,n,i){const s=Me.runtime,o=r.length<e.length||r.length===e.length&&r<e?Nn(t)+"/"+Nn(n):Nn(n)+"/"+Nn(t);if(!s.edgeHashes.has(o)&&(s.edgeHashes.add(o),!$c(t,n)))return s.edges.push({vertex1:t,vertex2:n,color:i}),!0}onmessage=({data:r})=>{console.log("worker received",r.C.order);try{Pc(r.C),r.init&&Kc(),Jc(),console.log("worker posting",r.C.order),postMessage({C:Me,uuid:r.uuid})}catch(e){throw e.uuid=r.uuid,e}}})();
