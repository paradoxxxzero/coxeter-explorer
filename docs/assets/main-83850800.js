import{c as X,P as N,s as C,i as Ie,a as V,m as Pe,e as _e,b as Me,d as G,r as m,T as Y,f as z,g as R,h as ie,t as P,j as U,k as K,l as ae,n as De,o as Be,p as H,q as te,u as $e,v as Le,w as q,x as J,y as he,z as ee,A as Ue,B as Ve,C as o,D as oe,E as He,F as ze,N as _,G as We,H as Xe,I as qe,J as xe,K as Ge,L as Ke,M as Ze,O as Qe}from"./CoxeterDiagram-4e9f3e00.js";var Ye=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Je(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const en=(e,n)=>e.map((s,a)=>s.map((t,i)=>-X(n[a][i]*N/t))),ve=e=>{const n=_e(e).values;return{"+":n.filter(s=>s>0).length,"-":n.filter(s=>s<0).length,0:n.filter(s=>s===0).length}},be=(e,n=[],s=0,a=2)=>{n[s]=n[s]||[];for(let t=0;t<e.length;t++){const i=e.filter((r,c)=>c!==t).map(r=>r.filter((c,f)=>f!==t));n[s].push(ve(i)),i.length>1&&s+1<a&&be(i,n,s+1)}return n},nn=e=>{const n=ve(e);if(n["-"]===0&&n[0]===0)return"finite";if(n["-"]===0&&n[0]===1)return"affine";const s=be(e),a=s[0];if(a.every(t=>t["-"]===0&&t[0]===0))return"hyperbolic-compact";if(a.every(t=>t["-"]===0))return"hyperbolic-paracompact";for(let t=1;t<s.length;t++)if(s[t].every(r=>r["-"]===0))return"hyperbolic-lorentzian-level-"+(t+1);return"indefinite"},ce=(e,n,s)=>{let a=0;for(let t=0;t<e.length;t++)a+=e[t]*n[t]*(t===e.length-1&&s||1);return a},we=(e,n)=>ce(e,e,n),sn=(e,n,s)=>{e=e.slice();const a=2*ce(e,n,s);for(let t=0;t<e.length;t++)e[t]-=a*(s||t!==e.length-1?n[t]:0);return e},Ee=(e,n)=>{if(e=e.slice(),n===0){for(let a=0;a<e.length;a++)e[a]/=e[e.length-1];return e}const s=(n===-1&&Me(e[e.length-1])||1)/C(V(we(e,n)));for(let a=0;a<e.length;a++)e[a]*=s;return e},rn=e=>e.sort((n,s)=>{const[a,t]=n,[i,r]=s;return a===0&&t===1?1:i===0&&r===1||a<2&&i>=2?-1:i<2&&a>=2?1:a<2&&i<2?t===r?i-a:t-r:a===i?r-t:i-a}),ne=(e,n,s,a,t)=>{const i=G(a);if(n>s.length-1||V(e)>1)return i;const[r,c]=s[n],f=c===a-1&&t||1,l=C(1-f*e*e),d=e;return i[r][r]=l,i[c][c]=l,i[r][c]=-f*d,i[c][r]=d,i},an=(e,n,s)=>{const a=n[0].length,t=new Array(a).fill().map(()=>new Array(a).fill(0));t[e][0]=1;for(let r=1;r<a;r++){const c=(r+e)%a;for(let f=0;f<r;f++){const l=(f+e)%a;t[c][f]=(n[c][l]-ce(t[c].slice(0,f),t[l].slice(0,f)))/t[l][f]}if(t[c][r]=C(V(1-we(t[c].slice(0,r)))),t[c][r]<1e-6&&r<a-1)return null}const i=(a-1+e)%a;return s===0?t[i][a-1]=.5:t[i][a-1]*=s,t},ye=(e,n,s=!1)=>{const a=e[0].length;let t=null;const i=e.every((r,c)=>r.every((f,l)=>f===(c===l?1:-1)));if(s||i){if(t=new Array(a).fill(0).map(()=>new Array(a).fill(0)),a===2){const r=(e[0][1]+1)/2;return t[0][0]=C(r-e[0][1]),t[1][0]=-C(r-e[0][1]),t[0][1]=t[1][1]=C((n||1)*r),n===0&&(t[1][1]=.5),t}else if(a===3){const r=e[0][1],c=e[1][2],f=e[0][2],l=(r*r+c*c+f*f-2*r*c*f-1)/(r*r+c*c+f*f-2*r*c-2*r*f-2*c*f+2*r+2*c+2*f-3);return t[0][2]=t[1][2]=t[2][2]=n*C(n*l),t[2][1]=-C(1-l),t[1][1]=(c-l)/t[2][1],t[0][1]=(f-l)/t[2][1],t[1][0]=-C(1-t[1][1]**2-l),t[0][0]=C(1-t[0][1]**2-l),n===0&&(t[2][2]=.5),t}else if(a===4){const r=e[0][1],c=e[1][2],f=e[2][3],l=e[0][2],d=e[1][3],u=e[0][3],b=(r*r*f*f+c*c*u*u+l*l*d*d-r*r-c*c-f*f-l*l-d*d-u*u+2*r*d*u+2*r*c*l+2*c*f*d+2*f*l*u-2*c*l*d*u-2*r*c*f*u-2*r*f*l*d+1)/(2*(r*r*f+c*c*u+f*f*r+l*l*d+d*d*l+u*u*c-r*r-c*c-f*f-l*l-d*d-u*u-r*c*f-r*c*u-r*f*l-r*f*d-r*f*u-r*l*d-c*f*u-c*l*d-c*l*u-c*d*u-f*l*d-l*d*u+r*c*l+r*d*u+c*f*d+f*l*u+r*c+r*l+r*d+r*u+c*f+c*l+c*d+f*l+f*d+f*u+l*u+d*u-r-c-f-l-d-u+2));return t[0][3]=t[1][3]=t[2][3]=t[3][3]=n*C(n*b),t[3][2]=-C(1-b),t[2][2]=(f-b)/t[3][2],t[1][2]=(d-b)/t[3][2],t[0][2]=(u-b)/t[3][2],t[2][1]=-C(1-b-t[2][2]**2),t[1][1]=(c-b-t[1][2]*t[2][2])/t[2][1],t[0][1]=(l-b-t[0][2]*t[2][2])/t[2][1],t[1][0]=-C(1-b-t[1][1]**2-t[1][2]**2),t[0][0]=C(1-b-t[0][1]**2-t[0][2]**2),n===0&&(t[3][3]=.5),t}if(i){const r=[0];for(let c=1;c<a;c++)r[c]=(r[c-1]+1)/(3-r[c-1]);t[0][0]=1,t[1][0]=-1,t[0][1]=C(r[1]),t[1][1]=C(r[1]);for(let c=0;c<a;c++)for(let f=0;f<a;f++)c<2&&f<2||(t[c][f]=f<c-1?0:f===c-1?-(c*C(r[f]-r[f-1])):f<a-1?C(r[f]-r[f-1]):C(r[f-1]));return t}}for(let r=0;r<a&&(t=an(r,e,n),!t);r++);if(!t&&!s)return ye(e,n,!0);if(t&&s){const r=Te(new Array(a).fill(1),t,n);if(n!==0){const c=Ee(r.slice().map((f,l)=>l===a-1?f-1:f),n);for(let f=0;f<a;f++)t[f]=sn(t[f],c,n)}}return t},Te=(e,n,s)=>{let a=e.map(c=>isNaN(c)?1:+c),t=n.slice(),i;for(let c=0;c<a.length&&(i=Ie(t),i.some(f=>f.some(l=>isNaN(l)||V(l)>1e8)));c++){console.warn("Non invertible matrix, retrying by shifting mirrors"),t.push(t.shift()),a.push(a.shift());if(c===a.length-1)return console.warn("Non invertible matrix, returning default value"),[0,0,1]}const r=Pe(i,a);return r[r.length-1]*=s||1,Ee(r,s)};class tn extends m.Component{componentDidCatch(n,s){this.props.onError(n,s)}render(){return this.props.error?null:this.props.children}}var je={exports:{}};(function(e,n){(function(s,a){e.exports=a()})(Ye,function(){var s=function(){function a(w){return r.appendChild(w.dom),w}function t(w){for(var x=0;x<r.children.length;x++)r.children[x].style.display=x===w?"block":"none";i=w}var i=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(w){w.preventDefault(),t(++i%r.children.length)},!1);var c=(performance||Date).now(),f=c,l=0,d=a(new s.Panel("FPS","#0ff","#002")),u=a(new s.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var b=a(new s.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:r,addPanel:a,showPanel:t,begin:function(){c=(performance||Date).now()},end:function(){l++;var w=(performance||Date).now();if(u.update(w-c,200),w>f+1e3&&(d.update(1e3*l/(w-f),100),f=w,l=0,b)){var x=performance.memory;b.update(x.usedJSHeapSize/1048576,x.jsHeapSizeLimit/1048576)}return w},update:function(){c=this.end()},domElement:r,setMode:t}};return s.Panel=function(a,t,i){var r=1/0,c=0,f=Math.round,l=f(window.devicePixelRatio||1),d=80*l,u=48*l,b=3*l,w=2*l,x=3*l,y=15*l,v=74*l,j=30*l,p=document.createElement("canvas");p.width=d,p.height=u,p.style.cssText="width:80px;height:48px";var h=p.getContext("2d");return h.font="bold "+9*l+"px Helvetica,Arial,sans-serif",h.textBaseline="top",h.fillStyle=i,h.fillRect(0,0,d,u),h.fillStyle=t,h.fillText(a,b,w),h.fillRect(x,y,v,j),h.fillStyle=i,h.globalAlpha=.9,h.fillRect(x,y,v,j),{dom:p,update:function(F,A){r=Math.min(r,F),c=Math.max(c,F),h.fillStyle=i,h.globalAlpha=1,h.fillRect(0,0,d,y),h.fillStyle=t,h.fillText(f(F)+" "+a+" ("+f(r)+"-"+f(c)+")",b,w),h.drawImage(p,x+l,y,v-l,j,x,y,v-l,j),h.fillRect(x+v-l,y,l,j),h.fillStyle=i,h.globalAlpha=.9,h.fillRect(x+v-l,y,l,f((1-F/A)*j))}}},s})})(je);var on=je.exports;const cn=Je(on),ln=({radius:e=1,widthSegments:n=16,segments:s=16}={})=>{const a=[],t=[],i=[],r=[];let c=0;const f=[];for(let l=0;l<=s;l++){const d=[],u=l/s;let b=0;l===0?b=.5/n:l===s&&(b=-.5/n);for(let w=0;w<=n;w++){const x=w/n,y=[-e*X(x*Y)*z(u*N),e*X(u*N),e*z(x*Y)*z(u*N)];t.push(...y);const v=(y[0]**2+y[1]**2+y[2]**2)**-.5;i.push(...y.map(j=>j*v)),r.push(x+b,1-u),d.push(c++)}f.push(d)}for(let l=0;l<s;l++)for(let d=0;d<n;d++){const u=f[l][d+1],b=f[l][d],w=f[l+1][d],x=f[l+1][d+1];l!==0&&a.push(u,b,x),l!==s-1&&a.push(b,w,x)}return{vertices:t,normals:i,uvs:r,indices:a}},fn=({radius:e=null,radiusTop:n=1,radiusBottom:s=1,height:a=1,radialSegments:t=8,segments:i=1}={})=>{const r=[],c=[],f=[],l=[];e!==null&&(n=e,s=e);let d=0;const u=[],b=a/2,w=(s-n)/a;for(let x=0;x<=i;x++){const y=[],v=x/i,j=v*(s-n)+n;for(let p=0;p<=t;p++){const h=p/t,F=h*Y,A=z(F),I=X(F),S=[j*A,-v*a+b,j*I];c.push(...S);const D=[A,w,I],Ne=(D[0]**2+D[1]**2+D[2]**2)**-.5;f.push(...D.map(Re=>Re*Ne)),l.push(h,1-v),y.push(d++)}u.push(y)}for(let x=0;x<t;x++)for(let y=0;y<i;y++){const v=u[y][x],j=u[y+1][x],p=u[y+1][x+1],h=u[y][x+1];r.push(v,j,h),r.push(j,p,h)}return{vertices:c,normals:f,uvs:l,indices:r}},dn=({segments:e=3}={})=>{const n=[],s=[],a=[],t=[],i=1/e;for(let r=0;r<e+1;r++)for(let c=0;c<r+1;c++)s.push((2*c-r)*i/2,r*i,0),a.push(0,0,1),t.push(i*c,1-i*r);for(let r=1;r<e+1;r++)for(let c=0;c<r;c++){const f=r*(r+1)/2+c,l=r*(r-1)/2+c;if(n.push(l,f,f+1),r<e){const d=(r+1)*(r+2)/2+c;n.push(d+1,f,f+1)}}return{vertices:s,normals:a,uvs:t,indices:n}},un=`#version 300 es
precision highp float;

uniform sampler2D screen;
uniform sampler2D bloom;
uniform float exposure;
uniform float strength;

in vec2 uv;
out vec4 fragColor;
void main() {
  vec3 color = texture(screen, uv).rgb;
  vec3 blooming = texture(bloom, uv).rgb;
  color = color + blooming * strength;
  // color = vec3(1.f) - exp(-color);
  color /= color + vec3(1.f);
  color *= exposure;
  fragColor = vec4(color, 1.f);
}
`,pn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,mn=`#version 300 es
precision highp float;

uniform sampler2D screen;
uniform sampler2D afterImage;
uniform float strength;

in vec2 uv;
out vec4 fragColor;

void main() {
  vec3 color = texture(screen, uv).rgb;
  vec3 prevColor = texture(afterImage, uv).rgb;
  prevColor *= max(sign(prevColor - 0.02f), 0.f);
  fragColor = vec4(max(color, prevColor * strength), 1.f);
}
`,gn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,hn=`#version 300 es
precision highp float;

uniform float offset;
uniform sampler2D screen;

in vec2 uv;
out vec4 fragColor;

void main() {
  vec2 halfpixel = offset * .5f / vec2(textureSize(screen, 0));
  vec4 sum = texture(screen, uv) * 4.0f;
  sum += texture(screen, uv - halfpixel);
  sum += texture(screen, uv + halfpixel);
  sum += texture(screen, uv + vec2(halfpixel.x, -halfpixel.y));
  sum += texture(screen, uv - vec2(halfpixel.x, -halfpixel.y));
  fragColor = sum / 8.0f;
}
`,xn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,vn=`#version 300 es
precision highp float;

#include config

uniform vec3 eye;

in vec3 vNormal;
in vec3 vPosition;
flat in vec3 vColor;
out vec4 outColor;

#include lighting

void main() {
  outColor = light(vec4(vColor, 1.f), .2f, 20.f);
}
`,bn=`#version 300 es
precision highp float;

#include config
#include globals

uniform mat4 viewProjection;
uniform float curvature;
uniform float thickness;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS == 2
in vec2 position;
in vec2 target;
#elif DIMENSIONS == 3
in vec3 position;
in vec3 target;
#elif DIMENSIONS == 4
in vec4 position;
in vec4 target;
#elif DIMENSIONS >= 5
in mat3 position;
in mat3 target;
#endif

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include ease
#include project

void main() {
  #if DIMENSIONS > 4
  vecN iPosition = multiplyMatrix(matrix, fromMat(position));
  vecN iTarget = multiplyMatrix(matrix, fromMat(target));
  #else
  vecN iPosition = matrix * position;
  vecN iTarget = matrix * target;
  #endif

  float t = ease(uv.y);
  vecN pos = mix(iPosition, iTarget, t);
  vecN next = mix(iPosition, iTarget, t + EPS);

  // Position segments on hypersurface
  pos = xnormalize(pos);
  next = xnormalize(next);

  vec3 position = xproject(pos);

  vec3 n = xproject(next) + NOISE; // Avoid collinearity
  vec3 k = normalize(position - n); // current segment direction

  // Rodrigues' rotation formula
  // To rotate v around axis k by angle r:
  float r = (1.f - uv.x) * TAU;
  vec3 v = normalize(cross(n, position));
  vec3 normal = normalize(v * cos(r) + cross(k, v) * sin(r)); // + k * dot(k, v) * (1. - cos(r));

  position = inflate(position, pos, normal, thickness, 0.f);

  gl_Position = viewProjection * vec4(position, 1.f);

  vPosition = position;
  vNormal = normal;
  vColor = color;
}
`,wn=`#version 300 es
precision highp float;

#include config

uniform vec3 eye;
uniform float opacity;

in vec3 vNormal;
in vec3 vPosition;
flat in vec3 vColor;

#ifdef OIT
layout(location = 0) out vec4 accumColor;
layout(location = 1) out float accumAlpha;

float weight(float z, float a) {
  return clamp(pow(min(1.0f, a * 10.0f) + 0.01f, 3.0f) * 1e8f * pow(1.0f - z * 0.9f, 3.0f), 1e-2f, 3e3f);
}

#else
out vec4 outColor;
#endif

#include lighting

void main() {
  vec4 color = light(vec4(vColor, opacity), .2f, 40.f);

  #ifdef OIT
  float w = weight(gl_FragCoord.z, color.a);
  accumColor = vec4(color.rgb * color.a * w, color.a);
  accumAlpha = color.a * w;
  #else
  outColor = color;
  #endif
}
`,En=`#version 300 es
precision highp float;

#include config
#include globals

uniform float curvature;
uniform float segments;
uniform mat4 viewProjection;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS == 2
in vec2 position;
in vec2 target;
in vec2 center;
#elif DIMENSIONS == 3
in vec3 position;
in vec3 target;
in vec3 center;
#elif DIMENSIONS == 4
in vec4 position;
in vec4 target;
in vec4 center;
#elif DIMENSIONS >= 5
in mat3 position;
in mat3 target;
in mat3 center;
#endif

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include ease
#include project

void main() {
  #if DIMENSIONS > 4
  vecN iPosition = multiplyMatrix(matrix, fromMat(position));
  vecN iTarget = multiplyMatrix(matrix, fromMat(target));
  vecN iCenter = multiplyMatrix(matrix, fromMat(center));
  #else
  vecN iPosition = matrix * position;
  vecN iTarget = matrix * target;
  vecN iCenter = matrix * center;
  #endif

  vec2 t = ease(uv);
  vecN pos = trix(iPosition, iCenter, iTarget, t);
  vecN next = trix(iPosition, iCenter, iTarget, t + vec2(EPS, 0.f));
  vecN other = trix(iPosition, iCenter, iTarget, t + vec2(0.f, EPS));

  if(segments > 1.f) {
    pos = xnormalize(pos);
    next = xnormalize(next);
    other = xnormalize(other);
  }

  vec3 position = xproject(pos);
  vec3 nn = xproject(next) - position;
  vec3 oo = xproject(other) - position;

  // Refine if near collinearity
  //   if(length(nn) < .0001 || length(oo) < .0001) {
  //     next = trix(iCenter, iPosition, iTarget, t + vec2(.1, 0.));
  //     other = trix(iCenter, iPosition, iTarget, t + vec2(0., .1));

  //     if(length(t) != 0. || segments > 1.) {
  //       next = xnormalize(next);
  //       other = xnormalize(other);
  //     }

  //     nn = xproject(next) - position;
  //     oo = xproject(other) - position;
  //   }

  gl_Position = viewProjection * vec4(position, 1.f);

  vColor = color;
  vPosition = position;
  vNormal = normalize(cross(nn, oo));
}
`,yn=`#version 300 es
precision highp float;

uniform sampler2D accumTexture;
uniform sampler2D revealageTexture;

in vec2 uv;
out vec4 fragColor;

void main() {
  vec4 accum = texture(accumTexture, uv);
  float r = accum.a;
  accum.a = texture(revealageTexture, uv).r;
  fragColor = vec4(accum.rgb / clamp(accum.a, 1e-4f, 5e4f), r);
}
`,Tn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,jn=`#version 300 es
precision highp float;

uniform float offset;
uniform sampler2D screen;

in vec2 uv;
out vec4 fragColor;

void main() {
  vec2 halfpixel = offset * .5f / vec2(textureSize(screen, 0));
  vec4 sum = texture(screen, uv + vec2(-halfpixel.x * 2.0f, 0.0f));
  sum += texture(screen, uv + vec2(-halfpixel.x, halfpixel.y)) * 2.0f;
  sum += texture(screen, uv + vec2(0.0f, halfpixel.y * 2.0f));
  sum += texture(screen, uv + vec2(halfpixel.x, halfpixel.y)) * 2.0f;
  sum += texture(screen, uv + vec2(halfpixel.x * 2.0f, 0.0f));
  sum += texture(screen, uv + vec2(halfpixel.x, -halfpixel.y)) * 2.0f;
  sum += texture(screen, uv + vec2(0.0f, -halfpixel.y * 2.0f));
  sum += texture(screen, uv + vec2(-halfpixel.x, -halfpixel.y)) * 2.0f;
  fragColor = sum / 12.0f;
}
`,Fn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,On=`#version 300 es
precision highp float;

#include config

uniform vec3 eye;

in vec3 vNormal;
in vec3 vPosition;
flat in vec3 vColor;
out vec4 outColor;

#include lighting

void main() {
  outColor = light(vec4(vColor, 1.f), .2f, 20.f);
}
`,Cn=`#version 300 es
precision highp float;

#include config
#include globals

uniform float curvature;
uniform float thickness;
uniform mat4 viewProjection;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS == 2
in vec2 position;
#elif DIMENSIONS == 3
in vec3 position;
#elif DIMENSIONS == 4
in vec4 position;
#elif DIMENSIONS >= 5
in mat3 position;
#endif

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include ease
#include project

void main() {
  #if DIMENSIONS > 4
  vecN pos = multiplyMatrix(matrix, fromMat(position));
  #else
  vecN pos = matrix * position;
  #endif
  pos = xnormalize(pos);

  vec3 position = xproject(pos);
  position = inflate(position, pos, normal, thickness, .01f);

  gl_Position = viewProjection * vec4(position, 1.f);

  vPosition = position;
  vColor = color;
  vNormal = normal;
}
`;function Fe(e){const{gl:n}=e,s=R[e.ambiance];if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),ie(e,e.rb.base,n.RGBA8),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),ie(e,e.rb.depth,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.passes.oit.accumTexture&&(n.deleteTexture(e.passes.oit.accumTexture.texture),e.passes.oit.accumTexture=null),e.passes.oit.revealTexture&&(n.deleteTexture(e.passes.oit.revealTexture.texture),e.passes.oit.revealTexture=null),e.meshes.face.visible&&s.opacity<1&&s.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.passes.oit.accumTexture=P(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.oit.accumTexture.texture,0),e.passes.oit.revealTexture=P(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.passes.oit.revealTexture.texture,0)),e.fb.afterimage&&(n.deleteFramebuffer(e.fb.afterimage),e.fb.afterimage=null),e.passes.afterimage.lastScreen&&(n.deleteTexture(e.passes.afterimage.lastScreen.texture),e.passes.afterimage.lastScreen=null),e.passes.afterimage.screen&&(n.deleteTexture(e.passes.afterimage.screen.texture),e.passes.afterimage.screen=null),e.passes.afterimage.outScreen&&(n.deleteTexture(e.passes.afterimage.outScreen.texture),e.passes.afterimage.outScreen=null),s.afterImage&&(e.fb.afterimage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterimage),e.passes.afterimage.lastScreen=P(e,n.RGBA8),e.passes.afterimage.screen=P(e,n.RGBA8),e.passes.afterimage.outScreen=P(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.passes.kawase.textures){for(let a=0;a<e.passes.kawase.textures.length;a++)n.deleteTexture(e.passes.kawase.textures[a].texture);e.passes.kawase.textures=null}if(e.passes.kawase.blur&&(n.deleteTexture(e.passes.kawase.blur.texture),e.passes.kawase.blur=null),e.passes.bloom.screen&&(n.deleteTexture(e.passes.bloom.screen.texture),e.passes.bloom.screen=null),s.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.passes.kawase.textures=[];for(let a=0;a<s.glow.steps;a++)e.passes.kawase.textures[a]=P(e,n.RGBA8,s.glow.pow**-a);e.passes.kawase.blur=P(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.kawase.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.passes.bloom.screen=P(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.bloom.screen.texture,0)}}const Oe=window.location.search.includes("stats");let W;Oe&&(W=new cn,W.dom.id="stats",document.body.appendChild(W.dom));const An=e=>{if(document.getElementById("webgl2"))return console.warn("WebGL already initialized"),Ae(e),Ce(e),L(e),$(e),e;const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const s=n.getContext("webgl2",{antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:s},!s){console.error("Unable to initialize WebGL. Your browser may not support it.");return}s.getExtension("EXT_color_buffer_float"),s.enable(s.DEPTH_TEST);const a={zoom:1,fov:N/3,position:[0,0,2],update(){const d=s.canvas.clientWidth/s.canvas.clientHeight;this.zoom=te(s.canvas.clientWidth/s.canvas.clientHeight,1),this.eye=[0,0,this.position[2]/this.zoom];const u=$e(this.eye,[0,0,0],[0,1,0]),b=Le(this.fov,d,.001,1e3);this.viewProjection=ae(q(b,u))}};a.update();const t={oit:{attributes:{},...U(e,"oit",Tn,yn,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}])},kawase:{down:{attributes:{},...U(e,"kawase/down",xn,hn,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}])},up:{attributes:{},...U(e,"kawase/up",Fn,jn,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}])}},afterimage:{attributes:{},...U(e,"afterimage",gn,mn,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}])},bloom:{attributes:{},...U(e,"bloom",pn,un,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}},i={base:s.createRenderbuffer(),depth:s.createRenderbuffer()},r={base:s.createFramebuffer()},c=e.dimensions>4?9:e.dimensions,f={vertex:()=>ln(),edge:d=>fn({segments:d}),face:d=>dn({segments:d})},l={vertex:K(e,"vertex",Cn,On,f.vertex,e.maxVertices,c),edge:K(e,"edge",bn,vn,f.edge,e.maxEdges,c,["position","target"]),face:K(e,"face",En,wn,f.face,e.maxFaces,c,["position","target","center"])};return l.edge.visible=e.showEdges,l.vertex.visible=e.showVertices,l.face.visible=e.showFaces,{...e,gl:s,camera:a,meshes:l,passes:t,rb:i,fb:r}},kn=(e,n=null)=>{const{dimensions:s}=e,a=R[e.ambiance],t=e.meshes.vertex.attributes.position.data,i=e.meshes.vertex.attributes.color.data;let r=n?n[0]:0,c=n?n[1]:e.vertices.length;const f=s>4?9:s;e.meshes.vertex.count=c;for(let l=r;l<c;l++){let d=e.vertices[l].vertex;for(let b=0;b<s;b++)t[l*f+b]=d[b];const u=a.color(e.vertices[l],"vertex",s);i[l*3+0]=u[0],i[l*3+1]=u[1],i[l*3+2]=u[2]}e.meshes.vertex.attributes.position.update(r,c),e.meshes.vertex.attributes.color.update(r,c)},Sn=(e,n=null)=>{const s=R[e.ambiance],a=e.meshes.edge.attributes.position.data,t=e.meshes.edge.attributes.target.data,i=e.meshes.edge.attributes.color.data,{dimensions:r}=e;let c=n?n[0]:0,f=n?n[1]:e.edges.length;const l=r>4?9:r;e.meshes.edge.count=f;for(let d=c;d<f;d++){const u=e.edges[d];let b=e.vertices[u.start].vertex,w=e.vertices[u.end].vertex;for(let y=0;y<r;y++)a[d*l+y]=b[y],t[d*l+y]=w[y];const x=s.color(u,"edge",r);i[d*3+0]=x[0],i[d*3+1]=x[1],i[d*3+2]=x[2]}e.meshes.edge.attributes.position.update(c,f),e.meshes.edge.attributes.target.update(c,f),e.meshes.edge.attributes.color.update(c,f)},Nn=(e,n=null)=>{const s=R[e.ambiance],a=e.meshes.face.attributes.position.data,t=e.meshes.face.attributes.target.data,i=e.meshes.face.attributes.center.data,r=e.meshes.face.attributes.color.data,{dimensions:c}=e;let f=n?n[0]:0,l=n?n[1]:e.faces.length,d=0;for(let w=0;w<f;w++){const x=e.faces[w].vertices.length;d+=x<3?0:x===3?1:x}const u=d,b=c>4?9:c;for(let w=f;w<l;w++){const x=e.faces[w];if(x.vertices.length<3)continue;let y;if(x.vertices.length===3)y=[[e.vertices[x.vertices[0]].vertex,e.vertices[x.vertices[1]].vertex,e.vertices[x.vertices[2]].vertex]];else{const v=new Array(x.vertices.length);for(let p=0;p<x.vertices.length;p++)v[p]=e.vertices[x.vertices[p]].vertex;const j=new Array(c).fill(0);for(let p=0;p<v.length;p++){const h=v[p];for(let F=0;F<c;F++)j[F]+=h[F]}for(let p=0;p<c;p++)j[p]/=v.length;y=new Array(v.length);for(let p=0;p<v.length;p++)y[p]=[j,v[p],v[(p+1)%v.length]]}for(let v=0;v<y.length;v++){let[j,p,h]=y[v];x.word.length%2===(e.curvature>0?0:1)&&([p,h]=[h,p]);for(let A=0;A<c;A++)i[d*b+A]=j[A],a[d*b+A]=p[A],t[d*b+A]=h[A];const F=s.color(x,"face",c);r[d*3+0]=F[0],r[d*3+1]=F[1],r[d*3+2]=F[2],d++}}e.meshes.face.count=d,e.meshes.face.attributes.position.update(u,d),e.meshes.face.attributes.target.update(u,d),e.meshes.face.attributes.center.update(u,d),e.meshes.face.attributes.color.update(u,d)},Z=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},le=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const s=n!==null?e.ranges[n]:{vertices:[e.ranges[0].vertices[0],e.ranges[e.currentOrder-1].vertices[1]],edges:[e.ranges[0].edges[0],e.ranges[e.currentOrder-1].edges[1]],faces:[e.ranges[0].faces[0],e.ranges[e.currentOrder-1].faces[1]]};e.meshes.vertex.visible&&(e.gl.useProgram(e.meshes.vertex.program),e.gl.bindVertexArray(e.meshes.vertex.vao),kn(e,s.vertices)),e.meshes.edge.visible&&(e.gl.useProgram(e.meshes.edge.program),e.gl.bindVertexArray(e.meshes.edge.vao),Sn(e,s.edges)),e.meshes.face.visible&&(e.gl.useProgram(e.meshes.face.program),e.gl.bindVertexArray(e.meshes.face.vao),Nn(e,s.faces)),document.title=`Coxeter Explorer - ${e.spaceType==="finite"?"S":e.spaceType==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertices.length} vertices, ${e.edges.length} edges, ${e.faces.length} faces`},Rn=e=>{e.camera.fov=N*e.fov3/180,e.camera.update()},Ce=e=>{const n=R[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.kawase.down.uniforms.offset.update(n.glow.offset.down),e.passes.kawase.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterimage.uniforms.strength.update(n.afterImage)},Ae=e=>{Object.values(e.meshes).forEach(n=>{n.recompileProgram(e)})},L=(e,n=!1)=>{Object.entries(e.meshes).forEach(([s,a])=>{if(!n){a.uniforms.curvature.update(e.curvature),a.uniforms.matrix.update(ae(e.matrix));for(let t=4;t<=e.dimensions;t++)a.uniforms[`fov${t}`].update(De(N*e[`fov${t}`]*.5/180));s==="vertex"?a.uniforms.thickness.update(e.vertexThickness):s==="edge"?a.uniforms.thickness.update(e.edgeThickness):(a.uniforms.segments.update(e.curve?e.segments:1),a.uniforms.opacity.update(R[e.ambiance].opacity))}a.uniforms.viewProjection.update(e.camera.viewProjection),a.uniforms.eye&&a.uniforms.eye.update(e.camera.eye)})},$=e=>{Oe&&W.update();const{gl:n}=e,s=R[e.ambiance];Be(n.canvas,e.subsampling)&&(console.log(e.subsampling),n.viewport(0,0,n.canvas.width,n.canvas.height),Fe(e),e.camera.update(),L(e,!0)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),H(e,"vertex"),H(e,"edge"),e.meshes.face.visible&&s.opacity<1&&s.transparency==="oit"?(n.enable(n.BLEND),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),H(e,"face"),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.passes.oit.accumTexture.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.passes.oit.revealTexture.texture),n.drawArrays(n.TRIANGLES,0,3)):(s.opacity<1&&s.transparency==="blend"&&(n.enable(n.BLEND),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)),H(e,"face"));const a=s.afterImage?e.fb.afterimage:s.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,a),s.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.afterimage.screen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let t=e.passes.bloom.screen;if(s.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterimage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.afterimage.outScreen.texture,0),n.useProgram(e.passes.afterimage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.passes.afterimage.screen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.passes.afterimage.lastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),s.glow?t=e.passes.afterimage.outScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterimage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.afterimage.outScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.passes.afterimage.outScreen,e.passes.afterimage.lastScreen]=[e.passes.afterimage.lastScreen,e.passes.afterimage.outScreen]),s.glow){n.disable(n.BLEND),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.kawase.down.program);for(let i=0;i<s.glow.steps;i++){const r=i===0?t:e.passes.kawase.textures[i-1],c=e.passes.kawase.textures[i];n.viewport(0,0,c.width,c.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,r.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,c.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.kawase.up.program);for(let i=s.glow.steps-1;i>=0;i--){const r=e.passes.kawase.textures[i],c=i===0?e.passes.kawase.blur:e.passes.kawase.textures[i-1];n.viewport(0,0,c.width,c.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,r.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,c.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,t.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.passes.kawase.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}},fe=.95,de=25,k=(e,n,s,a,t,i,r)=>{ee(t,q(ne(e,s*2+1,a.combinations,i,r),t)),ee(t,q(ne(n,s*2,a.combinations,i,r),t))},In=(e,n,s,a,t)=>{const{code:i}=e,r=.01;if(i==="ArrowLeft"||i==="KeyA")k(-r,0,0,n,s,a,t);else if(i==="ArrowRight"||i==="KeyD")k(r,0,0,n,s,a,t);else if(i==="ArrowUp"||i==="KeyW")k(0,-r,1,n,s,a,t);else if(i==="ArrowDown"||i==="KeyS")k(0,r,1,n,s,a,t);else if(i==="PageUp"||i==="KeyQ")k(-r,0,2,n,s,a,t);else if(i==="PageDown"||i==="KeyE")k(r,0,2,n,s,a,t);else if(i==="Digit1")k(0,-r,2,n,s,a,t);else if(i==="Digit3")k(0,r,2,n,s,a,t);else if(i==="KeyZ")k(-r,0,3,n,s,a,t);else if(i==="KeyC")k(r,0,3,n,s,a,t);else return;return!0},Pn=(e,n,s)=>{const a=m.useCallback(J(l=>s({matrix:l}),100),[]),t=m.useCallback(J(l=>s({zoom:l}),100),[]),i=m.useRef(null),r=m.useRef({pause:new Set,speed:null}),c=m.useRef(e.matrix.map(l=>l.slice()));m.useEffect(()=>{c.current=e.matrix.map(l=>l.slice())},[e.matrix]);const f=m.useCallback(()=>{Object.values(e.meshes).forEach(l=>{l.uniforms.matrix.update(ae(c.current))}),$(e)},[e.ambiance,e.camera,e.centered,e.coxeter,e.currentOrder,e.curvature,e.curve,e.dimensions,e.easing,e.edges,e.edgeThickness,e.error,e.faces,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.grouper,e.maxEdges,e.maxFaces,e.maxVertices,e.msaa,e.msaaSamples,e.projection,e.ranges,e.renderError,e.segments,e.showEdges,e.showFaces,e.showVertices,e.spaceType,e.stellation,e.subsampling,e.vertexThickness,e.vertices,e.zoom]);m.useEffect(()=>{r.current.speed=new Array(n.combinations.length).fill(0)},[n.combinations]),m.useEffect(()=>{he(e.matrix)&&(r.current.speed=new Array(n.combinations.length).fill(0))},[n.combinations.length,e.matrix]),m.useEffect(()=>{const l=()=>{const{pause:d,speed:u}=r.current;let b=!1;for(let w=0;w<u.length;w++)u[w]===0||n.auto==="damp"&&d.has(w)||(b=!0,n.auto==="damp"&&(u[w]*=.96,V(u[w])<1e-4&&(u[w]=0,a(c.current))),ee(c.current,q(ne(u[w],w,n.combinations,e.dimensions,e.curvature),c.current)));b&&f(),i.current!==null&&(i.current=requestAnimationFrame(l))};return n.auto&&(i.current=requestAnimationFrame(l)),()=>{i.current&&(cancelAnimationFrame(i.current),i.current=null),a(c.current)}},[n.auto,n.combinations,e.dimensions,e.curvature,a,f]),m.useEffect(()=>{e.camera.position[2]=-e.zoom,e.camera.update()},[e.camera,e.zoom]),m.useEffect(()=>{const l=new Map;let d=null,u=null;const b=()=>{const v=l.values(),j=v.next().value,p=v.next().value;return Ue(j[0]-p[0],j[1]-p[1])},w=v=>{v.button!==0||v.target.tagName!=="CANVAS"||(n.auto&&(u=performance.now(),r.current.pause.add(n.shift*2),r.current.pause.add(n.shift*2+1),r.current.speed[n.shift*2]=0,r.current.speed[n.shift*2+1]=0),l.set(v.pointerId,[v.clientX,v.clientY]))},x=v=>{if(!l.has(v.pointerId))return;let j=l.get(v.pointerId);const p=[-(v.clientX-j[0])/window.innerHeight,-(v.clientY-j[1])/window.innerHeight];if(n.auto){const F=performance.now(),A=F-u;u=F;const I=[de*p[0]/A,de*p[1]/A];r.current.speed[n.shift*2]=I[1],r.current.speed[n.shift*2+1]=I[0]}if(l.set(v.pointerId,[v.clientX,v.clientY]),l.size===2){if(d===null){d=b();return}const F=b();e.camera.position[2]*=d/F,e.camera.update(),L(e,!0),d=F,$(e),t(-e.camera.position[2]);return}let h=n.shift;!h&&v.shiftKey?h=1:!h&&v.altKey?h=2:!h&&v.ctrKey?h=3:!h&&v.metaKey&&(h=4),l.size>2&&(h+=l.size-2),k(N*p[0],N*p[1],h,{combinations:n.combinations,auto:n.auto,shift:n.shift},c.current,e.dimensions,e.curvature),f(),a(c.current)},y=v=>{l.has(v.pointerId)&&(n.auto&&(performance.now()-u>100?(r.current.speed[n.shift*2]=0,r.current.speed[n.shift*2+1]=0):n.auto==="free"&&(r.current.speed[n.shift*2]*=.5,r.current.speed[n.shift*2+1]*=.5),r.current.pause.delete(n.shift*2),r.current.pause.delete(n.shift*2+1)),d=null,l.delete(v.pointerId))};return document.addEventListener("pointerdown",w),document.addEventListener("pointermove",x),document.addEventListener("pointerup",y),()=>{document.removeEventListener("pointerdown",w),document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",y)}},[n.auto,n.combinations,n.shift,e.dimensions,e.curvature,e.camera,f,a,t]),m.useEffect(()=>{const l=d=>{d.target===document.body&&In(d,{combinations:n.combinations,auto:n.auto,shift:n.shift},c.current,e.dimensions,e.curvature)&&(f(),a(c.current))};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[f,n.auto,n.combinations,n.shift,e.curvature,e.dimensions,a]),m.useEffect(()=>{const l=d=>{d.target.tagName==="CANVAS"&&(e.camera.position[2]*=d.deltaY<0?fe:1/fe,e.camera.update(),L(e,!0),$(e),t(-e.camera.position[2]))};return document.addEventListener("wheel",l),()=>{document.removeEventListener("wheel",l)}},[e,t]),m.useEffect(()=>{const l=d=>{if(d.button!==0||d.target.tagName!=="CANVAS")return;const u=-e.camera.position[2],b=u<.5?5:u<2?.25:1;e.camera.position[2]=-b,e.camera.update(),L(e,!0),$(e),t(b)};return document.addEventListener("dblclick",l),()=>{document.removeEventListener("dblclick",l)}},[e,t])};function _n({runtime:e,rotations:n,updateParams:s}){return Pn(e,n,s),null}const Mn=(e,n)=>{m.useEffect(()=>{n(s=>(Rn(s),s))},[e.fov3,e.camera,n]),m.useEffect(()=>{n(s=>(Object.values(s.meshes).forEach(a=>{a.updateGeometry(s)}),s))},[e.dimensions,e.curve,e.segments,n]),m.useEffect(()=>{n(s=>(s.vertices.length&&(console.warn(`Extending vertex buffer to ${s.maxVertices}`),s.meshes.vertex.extendAttributes(s,s.maxVertices)),s))},[e.maxVertices,n]),m.useEffect(()=>{n(s=>(s.edges.length&&(console.warn(`Extending edge buffer to ${s.maxEdges}`),s.meshes.edge.extendAttributes(s,s.maxEdges)),s))},[e.maxEdges,n]),m.useEffect(()=>{n(s=>(s.faces.length&&(console.warn(`Extending edge buffer to ${s.maxFaces}`),s.meshes.face.extendAttributes(s,s.maxFaces)),s))},[e.maxFaces,n]),m.useEffect(()=>{n(s=>(s.meshes.vertex.extendAttributes(s,s.maxVertices,!1),s.meshes.edge.extendAttributes(s,s.maxEdges,!1),s.meshes.face.extendAttributes(s,s.maxFaces,!1),s))},[e.dimensions,n]),m.useEffect(()=>{n(s=>(Ce(s),s))},[e.ambiance,e.msaa,e.msaaSamples,n]),m.useEffect(()=>{n(s=>(Fe(s),s))},[e.ambiance,e.msaa,e.msaaSamples,n]),m.useEffect(()=>{n(s=>(Z(s,"vertex"),Z(s,"edge"),Z(s,"face"),s))},[e.showVertices,e.showEdges,e.showFaces,n]),m.useEffect(()=>{n(s=>{if(!(s.currentOrder<0))return le(s,s.currentOrder-1),s})},[e.currentOrder,e.edges,e.ranges,e.showEdges,e.showFaces,e.showVertices,e.vertices,n]),m.useEffect(()=>{n(s=>(Ae(s),s))},[e.ambiance,e.dimensions,e.easing,e.projection,e.spaceType,n]),m.useEffect(()=>{n(s=>(le(s),s))},[e.ambiance,e.curve,e.maxEdges,e.maxVertices,e.segments,e.showEdges,e.showFaces,e.showVertices,n]),m.useEffect(()=>{n(s=>(L(s),s))},[e.ambiance,e.ambiance,e.curvature,e.curve,e.dimensions,e.easing,e.edgeThickness,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.matrix,e.maxEdges,e.maxVertices,e.projection,e.segments,e.spaceType,e.vertexThickness,n]),m.useEffect(()=>{const s=new ResizeObserver(()=>{$(e)});return s.observe(e.gl.canvas,{box:"content-box"}),()=>s.disconnect()},[e.ambiance,e.camera,e.centered,e.coxeter,e.currentOrder,e.curvature,e.curve,e.dimensions,e.easing,e.edges,e.edgeThickness,e.error,e.faces,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.grouper,e.matrix,e.maxEdges,e.maxFaces,e.maxVertices,e.msaa,e.msaaSamples,e.projection,e.ranges,e.renderError,e.segments,e.showEdges,e.showFaces,e.showVertices,e.spaceType,e.stellation,e.subsampling,e.vertexThickness,e.vertices,e.zoom])};function Dn({runtime:e,setRuntime:n}){return Mn(e,n),null}function Bn(){return new Worker(""+new URL("knuthbendix-tiling.worker-dbafa931.js",import.meta.url).href)}function $n(){return new Worker(""+new URL("toddcoxeter-tiling.worker-6f68cc6a.js",import.meta.url).href)}function Ln(){return new Worker(""+new URL("fundamental.worker-575cdf7f.js",import.meta.url).href)}let Q=class ke{constructor(n,s){this.workerClass=s,this.name=n,this.init(),this.times={}}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const s=Math.random()*16|0;return(n==="x"?s:s&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.debug(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(n){return n.uuid=ke.uuid4(),this.processing++,this.times[n.uuid]=performance.now(),this.worker.postMessage(n),new Promise((s,a)=>{const t=r=>{if(r.data.uuid!==n.uuid)return;const c=performance.now()-this.times[n.uuid];if(delete this.times[n.uuid],console.debug(`Worker ${this.name} took ${c}ms`),this.processing--,this.worker.removeEventListener("message",t),this.worker.removeEventListener("error",i),r.data.error){a(r.data.error);return}s(r.data)},i=r=>{this.worker.removeEventListener("message",t),this.worker.removeEventListener("error",i),!(this.processing<=0)&&(delete this.times[n.uuid],this.processing--,this.processing=Ve(0,this.processing),console.error(`Can't call web worker ${this.name}`,r))};this.worker.addEventListener("message",t),this.worker.addEventListener("error",i)})}};const Un=()=>Object.values(Se).filter(e=>e.processing>0).forEach(e=>e.kill()),Se={knuthbendix:new Q("knuthbendix",Bn),toddcoxeter:new Q("toddcoxeter",$n),fundamental:new Q("toddcoxeter",Ln)},ue=async(e,n,s)=>{const a=Se[e.grouper.replace(/^auto-/,"")];if(e.currentOrder===0&&(Un(),n.current=!1),n.current===e.currentOrder){console.log("already processing at ",e.currentOrder);return}try{n.current=e.currentOrder;const{vertices:t,edges:i,faces:r,order:c}=await a.process({order:e.currentOrder,coxeter:e.coxeter,curvature:e.curvature,stellation:e.stellation,mirrors:e.mirrors,mirrorsPlanes:e.mirrorsPlanes,rootVertex:e.rootVertex,dimensions:e.dimensions});n.current=!1,s(f=>f.currentOrder!==c?(console.warn("Mismatched order, ignoring",f.currentOrder,c),{...f,currentOrder:0,vertices:[],edges:[],faces:[],ranges:[],renderError:null,processing:!0,error:"Mismatch Order"}):{...f,ranges:[...f.ranges,{vertices:[f.vertices.length,f.vertices.length+t.length],edges:[f.edges.length,f.edges.length+i.length],faces:[f.faces.length,f.faces.length+r.length]}],vertices:f.vertices.concat(t),edges:f.edges.concat(i),faces:f.faces.concat(r),currentOrder:c+1,processing:!1,error:null})}catch(t){n.current=!1,console.error(t);const i={...e,currentOrder:e.order,error:t.message,processing:!1};s(i)}},Vn=(e,n)=>{const s=m.useRef(!1);m.useEffect(()=>{n(a=>a.order<a.currentOrder?{...a,currentOrder:a.order}:a)},[e.order,e.currentOrder,n]),m.useEffect(()=>{n(a=>{const t=en(a.coxeter,a.stellation),i=nn(t);if(!i)return{...a,spaceType:i};const r=i==="finite"?1:i==="affine"?0:-1,c=a.grouper===""||a.grouper.startsWith("auto-")?"auto-toddcoxeter":a.grouper,f=ye(t,r,a.centered===null?c.replace(/^auto-/,"")==="toddcoxeter"&&r<=0||t.some(u=>u.some(b=>b===-1)):a.centered),l=Te(a.mirrors,f,r),d={...a,currentOrder:0,grouper:c,vertices:[],edges:[],faces:[],ranges:[],spaceType:i,curvature:r,mirrorsPlanes:f,rootVertex:l,renderError:null,processing:!0,error:null};return ue(d,s,n),d})},[e.dimensions,e.coxeter,e.mirrors,e.stellation,e.centered,e.grouper,n]),m.useEffect(()=>{n(a=>{var t;return a.order<=a.currentOrder?a:(t=a.ranges)!=null&&t[a.order]?{...a,currentOrder:a.order,askedOrder:null}:(ue(a,s,n),{...a,error:null,processing:!0})})},[n,e.order,e.currentOrder]),m.useEffect(()=>{n(a=>a.vertices.length>a.maxVertices?{...a,maxVertices:a.vertices.length}:a)},[e.vertices,n]),m.useEffect(()=>{n(a=>a.edges.length>a.maxEdges?{...a,maxEdges:a.edges.length}:a)},[e.edges,n]),m.useEffect(()=>{n(a=>{let t=0;for(let i=0;i<a.faces.length;i++){const r=a.faces[i].vertices.length;t+=r===3?1:r}return t>a.maxFaces?{...a,maxFaces:t}:a})},[e.faces,n])};function Hn({runtime:e,setRuntime:n}){return Vn(e,n),null}function zn({runtime:e,setRuntime:n,rotations:s,updateParams:a}){window.rt=e;const t=m.useCallback(i=>{n(r=>({...r,renderError:i.message}))},[n]);return m.useEffect(()=>()=>{e.curvature!==null&&a({matrix:G(e.dimensions)})},[e.curvature]),o.jsx(o.Fragment,{children:o.jsxs(tn,{error:e.renderError,onError:t,children:[o.jsx(Hn,{runtime:e,setRuntime:n}),o.jsx(Dn,{runtime:e,setRuntime:n}),e.curvature!==null?o.jsx(_n,{runtime:e,rotations:s,updateParams:a}):null]})})}const Wn="modulepreload",Xn=function(e,n){return new URL(e,n).href},pe={},qn=function(n,s,a){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(i=>{if(i=Xn(i,a),i in pe)return;pe[i]=!0;const r=i.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!a)for(let d=t.length-1;d>=0;d--){const u=t[d];if(u.href===i&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":Wn,r||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),r)return new Promise((d,u)=>{l.addEventListener("load",d),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>n()).catch(i=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i})};function me({allowNull:e,name:n,value:s,onChange:a,...t}){const i=m.useCallback(c=>{let{name:f,checked:l}=c.target,d;e?d=s===!1?!0:s?null:!1:d=l,a(f,d)},[e,a,s]),r=m.useRef(null);return m.useLayoutEffect(()=>{e&&r.current&&(s===null?r.current.indeterminate=!0:r.current.indeterminate=!1)},[s,e]),o.jsx("input",{type:"checkbox",ref:r,name:n,checked:s||!1,onChange:i})}function O({type:e,dimensions:n}){return o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"space",children:e===null||e==="indefinite"?"𝕏":e==="affine"?"𝔼":e==="finite"?"𝕊":"ℍ"}),n?o.jsx("sup",{children:n-1}):null,e!=null&&e.startsWith("hyperbolic")?o.jsx("sub",{children:{compact:" ",paracompact:"*"}[e.replace(/^hyperbolic-/,"")]||(e.startsWith("hyperbolic-lorentzian")?`L${e.replace(/^hyperbolic-lorentzian-level-/,"")}`:null)}):null]})}const Gn=(...e)=>{if(Array.isArray(e[0]))return{coxeter:e,dimensions:e.length,extended:!0};const n=e.length+1;return{coxeter:new Array(n).fill().map((a,t)=>new Array(n).fill().map((i,r)=>t===r?1:t===r+1||r===t+1?e[te(t,r)]:2)),dimensions:n}},Kn=(...e)=>{const n=e.length+1;return{stellation:new Array(n).fill().map((a,t)=>new Array(n).fill().map((i,r)=>t===r?1:t===r+1||r===t+1?e[te(t,r)]:1))}},g=(e,n,s,a)=>{const t=Gn(...e),{dimensions:i}=t,r={...oe,...t,showVertices:i<=3,showFaces:i<=4,curve:i>3,grouper:"toddcoxeter",ambiance:"colorful",matrix:G(i),zoom:i<=3?2:i>4?3:5,...a||{}};if(n?r.mirrors=n:r.mirrors=new Array(i).fill().map((c,f)=>f===0?1:0),s?r.stellation=Kn(...s).stellation:r.stellation=new Array(i).fill().map((c,f)=>new Array(i).fill(1)),i>4)for(let c=4;c<=i;c++)r[`fov${c}`]=(10-c)*10;return r},E=(e,n,s,a)=>({...g(e,n,s),ambiance:"plain",showVertices:!1,curve:!0,zoom:1,...a}),M=(e,n,s,a)=>({...g(e,n,s),ambiance:"neon",showFaces:!1,showVertices:!1,grouper:"",edgeThickness:10,zoom:2,...a}),T=(e,n,s,a)=>({...g(e,n,s),ambiance:"neon",showFaces:!1,showVertices:!1,curve:!0,grouper:"",edgeThickness:10,zoom:1.5,...a}),B=e=>{if(e===4)return{"":[1,0,0,0],Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1]};if(e===5)return{"":[1,0,0,0,0],Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1]};if(e===6)return{"":[1,0,0,0,0,0],Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(e===7)return{"":[1,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(e===8)return{"":[1,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(e===9)return{"":[1,0,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},Zn=[{type:"title",content:o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:4})," Tesseract"]}),params:g([4,3,3],[1,0,0,0],null,{showVertices:!0,vertexThickness:150,showFaces:!0,curve:!0,ambiance:"neon",centered:!1,zoom:4.2})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:3})," 7-3-2 tiling"]}),params:E([7,3],[1,0,0],null,{showVertices:!1,showFaces:!0,curve:!0,ambiance:"neon"})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:3})," Ideal triangles"]}),params:E([[1,1/0,1/0],[1/0,1,1/0],[1/0,1/0,1]],[1,1,1],null,{grouper:"fundamental",showVertices:!1,showFaces:!0,curve:!0,segments:64,easing:"quartic",ambiance:"neon"})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:4})," Ideal tetrahedron"]}),params:E([3,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:64,easing:"quartic",ambiance:"pure"})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:4})," Horoball"]}),params:E([6,3,4],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:20,centered:!1,ambiance:"colorful"})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:4})," 5-3-4 honeycomb"]}),params:T([5,3,4],[1,0,0,0],null,{zoom:1.5})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:4})," 7-3-3 paracompact honeycomb"]}),params:T([7,3,3],[1,0,0,0],null,{zoom:1.5,showFaces:!0,showVertices:!0,segments:16})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:4})," Ideal Pentahedron"]}),params:E([5,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:32,easing:"quartic",ambiance:"pure",zoom:1.5})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:4})," Flat Torus"]}),params:g([32,2,32],[1,0,0,1],null,{showVertices:!1,showFaces:!1,curve:!0,ambiance:"neon",zoom:3,edgeThickness:5})},{type:"title",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite"})," Spherical space"]})},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Tetrahedron",params:g([3,3])},{name:"Cube",params:g([4,3])},{name:"Octahedron",params:g([3,4])},{name:"Dodecahedron",params:g([5,3])},{name:"Icosahedron",params:g([3,5])},{name:"Cuboctahedron",params:g([4,3],[0,1,0])},{name:"Icosidodecahedron",params:g([5,3],[0,1,0])},{name:"Truncated Tetrahedron",params:g([3,3],[1,1,0])},{name:"Truncated Cube",params:g([4,3],[1,1,0])},{name:"Truncate Octahedron",params:g([3,4],[1,1,0])},{name:"Truncate Dodecahedron",params:g([5,3],[1,1,0])},{name:"Truncate Icosahedron",params:g([3,5],[1,1,0])},{name:"Rhombicuboctahedron",params:g([4,3],[1,0,1])},{name:"Rhombicosidodecahedron",params:g([5,3],[1,0,1])},{name:"Truncated Cuboctahedron",params:g([4,3],[1,1,1])},{name:"Truncated Icosidodecahedron",params:g([5,3],[1,1,1])},{name:"Snub Cube",params:g([4,3],["s","s","s"])},{name:"Snub Dodecahedron",params:g([5,3],["s","s","s"])},{name:"Great Dodecahedron",params:g([5,5],[1,0,0],[1,2])},{name:"Great Icosahedron",params:g([3,5],[1,0,0],[1,2])},{name:"Small Stellated Dodecahedron",params:g([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:g([5,3],[1,0,0],[2,1])},{name:"Stellated Octahedron",params:g([2,2],["ß","ß","ß"])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:4})," Polychora"]})},...Object.entries(B(4)).map(([e,n])=>[{name:`${e?`${e} `:""}5-cell`,params:g([3,3,3],n)},{name:`${e?`${e} `:""}8-cell`,params:g([4,3,3],n)},{name:`${e?`${e} `:""}16-cell`,params:g([3,3,4],n)},{name:`${e?`${e} `:""}24-cell`,params:g([3,4,3],n)},{name:`${e?`${e} `:""}120-cell`,params:g([5,3,3],n)},{name:`${e?`${e} `:""}600-cell`,params:g([3,3,5],n)}]).flat(),{name:"Snub 24-cell",params:g([3,4,3],["s","s",0,0])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:5})," Polytera"]})},...Object.entries(B(5)).map(([e,n])=>[{name:`${e?`${e} `:""}5-simplex`,params:g([3,3,3,3],n)},{name:`${e?`${e} `:""}5-cube`,params:g([4,3,3,3],n)},{name:`${e?`${e} `:""}5-orthoplex`,params:g([3,3,3,4],n)},{name:`${e?`${e} `:""}5-demicube`,params:g([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]],n)}]).flat(),{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:6})," Polypeta"]})},...Object.entries(B(6)).map(([e,n])=>[{name:`${e?`${e} `:""}6-simplex`,params:g([3,3,3,3,3],n)},{name:`${e?`${e} `:""}6-cube`,params:g([4,3,3,3,3],n)},{name:`${e?`${e} `:""}6-orthoplex`,params:g([3,3,3,3,4],n)},{name:`${e?`${e} `:""}6-demicube`,params:g([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]],n)}]).flat(),{name:o.jsxs(o.Fragment,{children:["2",o.jsx("sub",{children:"21"})]}),params:g([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:o.jsxs(o.Fragment,{children:["1",o.jsx("sub",{children:"22"})]}),params:g([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:7})," Polyexa"]})},...Object.entries(B(7)).map(([e,n])=>[{name:`${e?`${e} `:""}7-simplex`,params:g([3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}7-cube`,params:g([4,3,3,3,3,3],n)},{name:`${e?`${e} `:""}7-orthoplex`,params:g([3,3,3,3,3,4],n)},{name:`${e?`${e} `:""}7-demicube`,params:g([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]],n)}]).flat(),{name:o.jsxs(o.Fragment,{children:["3",o.jsx("sub",{children:"21"})]}),params:g([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:o.jsxs(o.Fragment,{children:["2",o.jsx("sub",{children:"31"})]}),params:g([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:o.jsxs(o.Fragment,{children:["1",o.jsx("sub",{children:"32"})]}),params:g([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:8})," Polyzetta"]})},...Object.entries(B(8)).map(([e,n])=>[{name:`${e?`${e} `:""}8-simplex`,params:g([3,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}8-cube`,params:g([4,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}8-orthoplex`,params:g([3,3,3,3,3,3,4],n)},{name:`${e?`${e} `:""}8-demicube`,params:g([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],n)}]).flat(),{name:o.jsxs(o.Fragment,{children:["1",o.jsx("sub",{children:"42"})]}),params:g([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,1,0,0,0,0,0])},{name:o.jsxs(o.Fragment,{children:["2",o.jsx("sub",{children:"41"})]}),params:g([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:o.jsxs(o.Fragment,{children:["4",o.jsx("sub",{children:"21"})]}),params:g([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:9}),"Polyyotta"]})},...Object.entries(B(9)).map(([e,n])=>[{name:`${e?`${e} `:""}9-simplex`,params:g([3,3,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}9-cube`,params:g([4,3,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}9-orthoplex`,params:g([3,3,3,3,3,3,3,4],n)},{name:`${e?`${e} `:""}9-demicube`,params:g([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],n)}]).flat(),{type:"title",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"affine"})," Euclidean space"]})},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:g([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:g([4,4],[1,0,0])},{name:"Hexagonal",params:g([6,3],[1,0,0])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:M([4,3,4],[1,0,0,0])},{name:"Octet",params:M([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter cubic",params:M([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:M([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:M([3,3,4,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"24-cellic",params:M([3,4,3,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"4-simpletic",params:M([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter tesseractic",params:M([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0],null,{grouper:"toddcoxeter"})},{type:"title",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic"})," Hyperbolic space"]})},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:3})," Tilings"]})},{name:"Order-7 triangular",params:E([3,7],[1,0,0])},{name:"Order-8 triangular",params:E([3,8],[1,0,0])},{name:"Infinite Order triangular",params:E([3,1/0],[1,0,0])},{name:"Order-5 square",params:E([4,5],[1,0,0])},{name:"Order-6 square",params:E([4,6],[1,0,0])},{name:"Order-7 square",params:E([4,7],[1,0,0])},{name:"Order-8 square",params:E([4,8],[1,0,0])},{name:"Infinite Order square",params:E([4,1/0],[1,0,0])},{name:"Order-4 pentagonal",params:E([5,4],[1,0,0])},{name:"Order-5 pentagonal",params:E([5,5],[1,0,0])},{name:"Order-6 pentagonal",params:E([5,6],[1,0,0])},{name:"Order-7 pentagonal",params:E([5,7],[1,0,0])},{name:"Order-8 pentagonal",params:E([5,8],[1,0,0])},{name:"Infinite Order pentagonal",params:E([5,1/0],[1,0,0])},{name:"Order-4 hexagonal",params:E([6,4],[1,0,0])},{name:"Order-5 hexagonal",params:E([6,5],[1,0,0])},{name:"Order-6 hexagonal",params:E([6,6],[1,0,0])},{name:"Order-7 hexagonal",params:E([6,7],[1,0,0])},{name:"Order-8 hexagonal",params:E([6,8],[1,0,0])},{name:"Infinite Order hexagonal",params:E([6,1/0],[1,0,0])},{name:"Order-3 heptagonal",params:E([7,3],[1,0,0])},{name:"Order-4 heptagonal",params:E([7,4],[1,0,0])},{name:"Order-5 heptagonal",params:E([7,5],[1,0,0])},{name:"Order-6 heptagonal",params:E([7,6],[1,0,0])},{name:"Order-7 heptagonal",params:E([7,7],[1,0,0])},{name:"Order-8 heptagonal",params:E([7,8],[1,0,0])},{name:"Infinite Order heptagonal",params:E([7,1/0],[1,0,0])},{name:"Order-3 octagonal",params:E([8,3],[1,0,0])},{name:"Order-4 octagonal",params:E([8,4],[1,0,0])},{name:"Order-5 octagonal",params:E([8,5],[1,0,0])},{name:"Order-6 octagonal",params:E([8,6],[1,0,0])},{name:"Order-7 octagonal",params:E([8,7],[1,0,0])},{name:"Order-8 octagonal",params:E([8,8],[1,0,0])},{name:"Infinite Order octagonal",params:E([8,1/0],[1,0,0])},{name:"Order-3 apeirogonal",params:E([1/0,3],[1,0,0])},{name:"Order-4 apeirogonal",params:E([1/0,4],[1,0,0])},{name:"Order-5 apeirogonal",params:E([1/0,5],[1,0,0])},{name:"Order-6 apeirogonal",params:E([1/0,6],[1,0,0])},{name:"Order-7 apeirogonal",params:E([1/0,7],[1,0,0])},{name:"Order-8 apeirogonal",params:E([1/0,8],[1,0,0])},{name:"Infinite Order apeirogonal",params:E([1/0,1/0],[1,0,0])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic-compact",dimensions:4})," Honeycombs compacts"]})},{name:"Icosahedral",params:T([3,5,3],[1,0,0,0])},{name:"Order-4 dodecahedral",params:T([5,3,4],[1,0,0,0])},{name:"Order-5 dodecahedral",params:T([5,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 cubic",params:T([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral cubic",params:T([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral dodecahedral",params:T([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic octahedral",params:T([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Dodcahedral",params:T([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Icosahedral",params:T([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic-paracompact",dimensions:4})," Honeycombs paracompacts"]})},{name:"Triangular",params:T([3,6,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:T([6,3,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 tetrahedral",params:T([3,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-6 cubic",params:T([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-5 hexagonal",params:T([6,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 hexagonal",params:T([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 hexagonal",params:T([6,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Square",params:T([4,4,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated square",params:T([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-4 square",params:T([4,4,4],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral square",params:T([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic square",params:T([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter order square",params:T([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral Hexagonal",params:T([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Hexagonal",params:T([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Icosahedral Hexagonal",params:T([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal Triangular",params:T([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Hexagonal",params:T([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-4 Hexagonal",params:T([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 Hexagonal",params:T([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Runcic Order-6 Hexagonal",params:T([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],null,{grouper:"toddcoxeter"})},{name:"Quarter Order-4 hexagonal",params:T([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:T([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],null,{grouper:"toddcoxeter"})},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic-lorentzian-level-2",dimensions:4})," Honeycombs lorentzians"]})},{name:"3-3-7",params:T([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-4-7",params:T([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-5-7",params:T([3,5,7],[1,0,0,0],null,{grouper:"toddcoxeter"})}],Qn=m.memo(function({name:n,params:s,onPreset:a}){return o.jsxs("div",{className:"preset",onClick:()=>a(s),children:[o.jsx("span",{className:"preset-name",children:n}),o.jsx(He,{coxeter:s.coxeter,mirrors:s.mirrors,stellation:s.stellation})]})}),Yn=o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:o.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),Jn=o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:o.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),es=o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:o.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),ns=o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:o.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),se=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(se).join("");if(typeof e=="object"&&e)return se(e.props.children)};function ss({open:e,onPreset:n,onExportImage:s,closePresets:a}){const[t,i]=m.useState(""),[r,c]=m.useState(""),f=m.useCallback(l=>{c(l.target.value),J(i(l.target.value),50)},[]);return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:`presets-overlay ${e?"shown":"hidden"}`,onClick:a}),o.jsx("div",{className:`presets ${e?"shown":"hidden"}`,children:o.jsxs("div",{className:"presets-modal",children:[o.jsxs("div",{className:"presets-header",children:[o.jsxs("div",{className:"presets-search",children:[o.jsx("input",{type:"text",placeholder:"Search",value:r,onChange:f}),o.jsx("button",{className:"presets-clear",onClick:()=>{i(""),c("")},children:Yn})]}),o.jsxs("div",{className:"presets-actions",children:[o.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:Jn}),o.jsx("button",{className:"presets-action",onClick:s,children:es}),o.jsx("button",{className:"presets-action",onClick:a,children:ns})]})]}),o.jsx("div",{className:"presets-list",children:Zn.map(({type:l,content:d,name:u,params:b},w)=>o.jsx(m.Fragment,{children:l==="title"?o.jsx("h2",{children:d}):l==="group"?o.jsx("h4",{children:d}):!t||se(u).toLowerCase().includes(t.toLowerCase())?o.jsx(Qn,{name:u,params:b,search:t,onPreset:n}):null},w))})]})})]})}function rs({runtime:e,params:n,rotations:s,updateParams:a,updateRotations:t}){const[i,r]=m.useState("simple"),[c,f]=m.useState(!1),l=m.useCallback(()=>{f(!1)},[]),d=m.useCallback(p=>{let{name:h,value:F}=p.target;a({[h]:F})},[a]),u=m.useCallback((p,h)=>{a({[p]:h})},[a]),b=m.useCallback(()=>r(p=>({simple:"advanced",advanced:"full",full:"empty",empty:"simple"})[p]),[]),w=m.useCallback(p=>{a(p),l()},[a,l]),x=m.useCallback(()=>{a({matrix:G(e.dimensions)})},[a,e.dimensions]),y=m.useCallback(p=>{t("shift",(s.shift+1)%s.maxShift)},[s.maxShift,s.shift,t]),v=m.useCallback(p=>{t("auto",s.auto==="free"?"damp":"free")},[s.auto,t]),j=m.useCallback(async()=>{const p=window.prompt("Select image resolution","5000x5000");if(!p||!p.includes("x")){console.error("Invalid resolution");return}const[h,F]=p.split("x").map(S=>parseInt(S));if(isNaN(h)||isNaN(F)){console.error("Invalid resolution");return}const I=await(await qn(()=>import("./export-902100eb.js"),[],import.meta.url)).makeBigPng(e,h,F);if(I){const S=document.createElement("a");document.body.appendChild(S),S.style.display="none";const D=window.URL.createObjectURL(I);S.href=D,S.download=`${document.title}-${h}x${F}`,S.click()}},[e]);return o.jsxs(o.Fragment,{children:[o.jsx(ss,{open:c,onPreset:w,onExportImage:j,closePresets:l}),o.jsxs("div",{className:e.error?"error":"",title:e.error,children:[e.currentOrder<e.order?o.jsxs("aside",{className:"processing-counter",children:[e.currentOrder,"/",e.order]}):null,["simple","advanced","full"].includes(i)?o.jsx("button",{className:"preset-button button",onClick:()=>f(p=>!p),title:"Presets",children:"◭"}):null,["simple","advanced","full"].includes(i)?o.jsxs("aside",{className:"controls",children:[o.jsxs("button",{className:"controls-button button",onClick:y,title:"Rotation Mode",children:[o.jsx("span",{style:{display:"inline-block",transform:`rotate(${s.shift/s.maxShift*360}deg)`},children:"⥁"}),o.jsx("sup",{children:s.shift+1})]}),o.jsxs("div",{className:"subcontrols",children:[o.jsx("button",{className:"button anim-view",onClick:v,title:"Animate rotations",children:s.auto==="free"?"⤞":s.auto==="damp"?"↠":"?"}),!he(e.matrix)&&o.jsx("button",{className:"button reset-view",onClick:x,title:"Reset View",children:"⌖"})]})]}):null,o.jsx("button",{className:`space-button button${e.processing?" processing":""}${i==="empty"?" empty":""}`,onClick:b,title:`Space ${e.spaceType}`,children:o.jsx(O,{type:e.spaceType,dimensions:e.dimensions})}),["advanced","full"].includes(i)&&o.jsxs("aside",{className:"parameters",children:[(i==="full"||n.grouper!=="")&&o.jsxs("label",{className:"select-label",children:["Grouper",o.jsx("select",{name:"grouper",value:n.grouper,onChange:d,children:ze.map(p=>o.jsx("option",{value:p,children:p===""?n.grouper===""?`Auto [${e.grouper.replace(/^auto-/,"")}]`:"Auto":p.replace(/_/g," ").replace(/\b./g,h=>h.toUpperCase())},p))})]}),(i==="full"||n.grouper)&&o.jsxs("label",{className:"boolean-label",children:["inCentered",o.jsx(me,{name:"centered",allowNull:!0,value:n.centered,onChange:u})]}),(i==="full"||e.curvature<=0)&&o.jsx(_,{name:"order",label:"Precision",min:1,step:1,value:n.order,onChange:u}),o.jsx(_,{name:"segments",label:"Segments",min:1,step:1,value:n.segments,toggler:n.curve,togglerName:"curve",onChange:u}),o.jsxs("label",{className:"select-label",children:["Easing",o.jsx("select",{name:"easing",value:n.easing,onChange:d,children:We.map(p=>o.jsx("option",{value:p,children:p.replace(/_/g," ").replace(/\b./g,h=>h.toUpperCase())},p))})]}),o.jsxs("label",{className:"select-label",children:["Projection",o.jsx("select",{name:"projection",value:n.projection,onChange:d,children:Xe.map(p=>o.jsx("option",{value:p,children:p.replace(/_/g," ").replace(/./,h=>h.toUpperCase())},p))})]}),o.jsx(_,{name:"vertexThickness",label:"Vertices",min:0,step:1,value:n.vertexThickness,toggler:n.showVertices,togglerName:"showVertices",onChange:u}),o.jsx(_,{name:"edgeThickness",label:"Edges",min:0,step:1,value:n.edgeThickness,toggler:n.showEdges,togglerName:"showEdges",onChange:u}),(e.grouper.replace(/^auto-/,"")==="toddcoxeter"||e.grouper==="fundamental")&&o.jsxs("label",{className:"boolean-label",children:["Faces",o.jsx(me,{name:"showFaces",value:n.showFaces,onChange:u})]}),o.jsxs("label",{className:"select-label",children:["Ambiance",o.jsx("select",{name:"ambiance",value:n.ambiance,onChange:d,children:(i==="full"?Object.keys(R):Object.entries(R).filter(([p,{extended:h}])=>!h).map(([p])=>p)).map(p=>o.jsx("option",{value:p,children:p.replace(/_/g," ").replace(/./,h=>h.toUpperCase())},p))})]})]}),["advanced","full"].includes(i)&&o.jsxs("aside",{className:"view",children:[o.jsx(_,{name:"msaaSamples",label:"MSAA",min:0,step:1,max:oe.msaaSamples,value:n.msaaSamples,toggler:n.msaa,togglerName:"msaa",onChange:u}),i==="full"&&o.jsx(_,{name:"subsampling",label:"subsampling",min:.1,step:.1,value:n.subsampling,onChange:u}),o.jsx(_,{name:"fov3",label:"FOV3",min:0,step:1,value:n.fov3,onChange:u}),n.dimensions>3?[...Array(n.dimensions-3).keys()].map(p=>o.jsx(_,{label:`FOV${p+4}`,name:`fov${p+4}`,step:1,value:n[`fov${p+4}`],onChange:u},p)):null]}),["simple","advanced","full"].includes(i)&&o.jsx(qe,{dimensions:n.dimensions,coxeter:n.coxeter,mirrors:n.mirrors,stellation:n.stellation,extended:n.extended,onChange:u})]})]})}function as({params:e,updateParams:n}){window.p=e;const[s,a]=m.useState(()=>({...e,currentOrder:0,askedOrder:null,spaceType:null,curvature:null,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[],faces:[],maxVertices:3e4,maxEdges:5e4,maxFaces:5e4,processing:!0,error:null,renderError:null}));m.useEffect(()=>{a(c=>{try{return An(c)}catch(f){return console.error(f),{...c,error:f.message}}})},[]);const[t,i]=m.useState({shift:0,maxShift:0,combinations:[],auto:"damp"});m.useEffect(()=>{a(c=>({...c,...xe({order:e.order,ambiance:e.ambiance,showVertices:e.showVertices,showEdges:e.showEdges,showFaces:e.showFaces,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection,msaa:e.msaa,msaaSamples:e.msaaSamples,subsampling:e.subsampling,matrix:e.matrix,fov3:e.fov3,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9,zoom:e.zoom,curve:e.curve,segments:e.segments,easing:e.easing,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation,centered:e.centered}).params}))},[e.order,e.ambiance,e.centered,e.coxeter,e.curve,e.dimensions,e.edgeThickness,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.matrix,e.mirrors,e.msaa,e.msaaSamples,e.projection,e.segments,e.easing,e.showEdges,e.showFaces,e.showVertices,e.stellation,e.subsampling,e.vertexThickness,e.zoom]),m.useEffect(()=>{i(c=>({...c,shift:0,maxShift:~~Ge(Ke(e.dimensions,2)/2),combinations:rn(Ze(new Array(e.dimensions).fill().map((f,l)=>l),2)),auto:"damp"}))},[e.dimensions]),m.useEffect(()=>{a(c=>e.grouper===""&&c.grouper.startsWith("auto-")?c:{...c,grouper:e.grouper})},[e.grouper]);const r=m.useCallback((c,f)=>{i(l=>({...l,[c]:f}))},[i]);return s.gl?o.jsxs("div",{className:s.error||s.renderError?"error":"",title:s.error||s.renderError,children:[o.jsx(rs,{runtime:s,params:e,rotations:t,updateRotations:r,updateParams:n}),o.jsx(zn,{runtime:s,rotations:t,setRuntime:a,updateParams:n})]}):null}const ts=e=>JSON.parse(e,(s,a)=>a==="Infinity"?1/0:a),os=e=>JSON.stringify(e,(s,a)=>a===1/0?"Infinity":a),ge=(e=null)=>{const{location:n}=window;if(n.hash)try{return ts(atob(n.hash.slice(1)))}catch(s){console.warn(s),n.hash=""}return e},cs=e=>{window.history.pushState(null,null,"#"+btoa(os(e)))},re=(e,n)=>e.length!==n.length?!1:e.every((s,a)=>Array.isArray(s)?re(s,n[a]):s===n[a]),is=()=>{const[e,n]=m.useState(ge(oe)),s=m.useCallback(()=>{const t=ge();t&&(Object.entries(t).forEach(([i,r])=>{Array.isArray(r)&&re(r,e[i])&&(t[i]=e[i])}),n(t))},[e]),a=m.useCallback(t=>{n(i=>{if(!Object.entries(t).filter(([f,l])=>Array.isArray(l)?!re(l,i[f]):i[f]!==l).length)return i;const{params:r,badParams:c}=xe({...i,...t});return c.length||cs(r),r})},[]);return m.useEffect(()=>(window.addEventListener("popstate",s),()=>{window.removeEventListener("popstate",s)}),[s]),o.jsx(as,{params:e,updateParams:a})};Qe.createRoot(document.getElementById("root")).render(o.jsx(is,{}));
