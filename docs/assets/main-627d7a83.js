import{c as Y,P as M,s as S,i as Me,a as G,m as Be,e as Ue,b as Le,d as ee,r as x,T as ae,f as Q,g as z,h as q,j as ne,t as L,l as $e,p as He,k as oe,n as J,o as X,q as re,u as ze,v as Ve,w as K,x as ie,y as ye,z as ce,A as We,B as Xe,C as o,D as ue,E as Ge,F as qe,N as H,G as Ke,H as Qe,I as Ze,J as Ye,K as Te,L as Je,M as en,O as nn,Q as rn}from"./CoxeterDiagram-39fa3861.js";var tn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const an=(e,n)=>e.map((s,a)=>s.map((t,c)=>-Y(n[a][c]*M/t))),je=e=>{const n=Ue(e).values;return{"+":n.filter(s=>s>0).length,"-":n.filter(s=>s<0).length,0:n.filter(s=>s===0).length}},Fe=(e,n=[],s=0,a=2)=>{n[s]=n[s]||[];for(let t=0;t<e.length;t++){const c=e.filter((r,i)=>i!==t).map(r=>r.filter((i,f)=>f!==t));n[s].push(je(c)),c.length>1&&s+1<a&&Fe(c,n,s+1)}return n},on=e=>{const n=je(e);if(n["-"]===0&&n[0]===0)return"finite";if(n["-"]===0&&n[0]===1)return"affine";const s=Fe(e),a=s[0];if(a.every(t=>t["-"]===0&&t[0]===0))return"hyperbolic-compact";if(a.every(t=>t["-"]===0))return"hyperbolic-paracompact";for(let t=1;t<s.length;t++)if(s[t].every(r=>r["-"]===0))return"hyperbolic-lorentzian-level-"+(t+1);return"indefinite"},pe=(e,n,s)=>{let a=0;for(let t=0;t<e.length;t++)a+=e[t]*n[t]*(t===e.length-1&&s||1);return a},Oe=(e,n)=>pe(e,e,n),cn=(e,n,s)=>{e=e.slice();const a=2*pe(e,n,s);for(let t=0;t<e.length;t++)e[t]-=a*(s||t!==e.length-1?n[t]:0);return e},Re=(e,n)=>{if(e=e.slice(),n===0){for(let a=0;a<e.length;a++)e[a]/=e[e.length-1];return e}const s=(n===-1&&Le(e[e.length-1])||1)/S(G(Oe(e,n)));for(let a=0;a<e.length;a++)e[a]*=s;return e},ln=e=>e.sort((n,s)=>{const[a,t]=n,[c,r]=s;return a===0&&t===1?1:c===0&&r===1||a<2&&c>=2?-1:c<2&&a>=2?1:a<2&&c<2?t===r?c-a:t-r:a===c?r-t:c-a}),le=(e,n,s,a,t)=>{const c=ee(a);if(n>s.length-1||G(e)>1)return c;const[r,i]=s[n],f=i===a-1&&t||1,l=S(1-f*e*e),d=e;return c[r][r]=l,c[i][i]=l,c[r][i]=-f*d,c[i][r]=d,c},fn=(e,n,s)=>{const a=n[0].length,t=new Array(a).fill().map(()=>new Array(a).fill(0));t[e][0]=1;for(let r=1;r<a;r++){const i=(r+e)%a;for(let f=0;f<r;f++){const l=(f+e)%a;t[i][f]=(n[i][l]-pe(t[i].slice(0,f),t[l].slice(0,f)))/t[l][f]}if(t[i][r]=S(G(1-Oe(t[i].slice(0,r)))),t[i][r]<1e-6&&r<a-1)return null}const c=(a-1+e)%a;return s===0?t[c][a-1]=.5:t[c][a-1]*=s,t},Ce=(e,n,s=!1)=>{const a=e[0].length;let t=null;const c=e.every((r,i)=>r.every((f,l)=>f===(i===l?1:-1)));if(s||c){if(t=new Array(a).fill(0).map(()=>new Array(a).fill(0)),a===2){const r=(e[0][1]+1)/2;return t[0][0]=S(r-e[0][1]),t[1][0]=-S(r-e[0][1]),t[0][1]=t[1][1]=S((n||1)*r),n===0&&(t[1][1]=.5),t}else if(a===3){const r=e[0][1],i=e[1][2],f=e[0][2],l=(r*r+i*i+f*f-2*r*i*f-1)/(r*r+i*i+f*f-2*r*i-2*r*f-2*i*f+2*r+2*i+2*f-3);return t[0][2]=t[1][2]=t[2][2]=n*S(n*l),t[2][1]=-S(1-l),t[1][1]=(i-l)/t[2][1],t[0][1]=(f-l)/t[2][1],t[1][0]=-S(1-t[1][1]**2-l),t[0][0]=S(1-t[0][1]**2-l),n===0&&(t[2][2]=.5),t}else if(a===4){const r=e[0][1],i=e[1][2],f=e[2][3],l=e[0][2],d=e[1][3],u=e[0][3],h=(r*r*f*f+i*i*u*u+l*l*d*d-r*r-i*i-f*f-l*l-d*d-u*u+2*r*d*u+2*r*i*l+2*i*f*d+2*f*l*u-2*i*l*d*u-2*r*i*f*u-2*r*f*l*d+1)/(2*(r*r*f+i*i*u+f*f*r+l*l*d+d*d*l+u*u*i-r*r-i*i-f*f-l*l-d*d-u*u-r*i*f-r*i*u-r*f*l-r*f*d-r*f*u-r*l*d-i*f*u-i*l*d-i*l*u-i*d*u-f*l*d-l*d*u+r*i*l+r*d*u+i*f*d+f*l*u+r*i+r*l+r*d+r*u+i*f+i*l+i*d+f*l+f*d+f*u+l*u+d*u-r-i-f-l-d-u+2));return t[0][3]=t[1][3]=t[2][3]=t[3][3]=n*S(n*h),t[3][2]=-S(1-h),t[2][2]=(f-h)/t[3][2],t[1][2]=(d-h)/t[3][2],t[0][2]=(u-h)/t[3][2],t[2][1]=-S(1-h-t[2][2]**2),t[1][1]=(i-h-t[1][2]*t[2][2])/t[2][1],t[0][1]=(l-h-t[0][2]*t[2][2])/t[2][1],t[1][0]=-S(1-h-t[1][1]**2-t[1][2]**2),t[0][0]=S(1-h-t[0][1]**2-t[0][2]**2),n===0&&(t[3][3]=.5),t}if(c){const r=[0];for(let i=1;i<a;i++)r[i]=(r[i-1]+1)/(3-r[i-1]);t[0][0]=1,t[1][0]=-1,t[0][1]=S(r[1]),t[1][1]=S(r[1]);for(let i=0;i<a;i++)for(let f=0;f<a;f++)i<2&&f<2||(t[i][f]=f<i-1?0:f===i-1?-(i*S(r[f]-r[f-1])):f<a-1?S(r[f]-r[f-1]):S(r[f-1]));return t}}for(let r=0;r<a&&(t=fn(r,e,n),!t);r++);if(!t&&!s)return Ce(e,n,!0);if(t&&s){const r=Ae(new Array(a).fill(1),t,n);if(n!==0){const i=Re(r.slice().map((f,l)=>l===a-1?f-1:f),n);for(let f=0;f<a;f++)t[f]=cn(t[f],i,n)}}return t},Ae=(e,n,s)=>{let a=e.map(i=>isNaN(i)?1:+i),t=n.slice(),c;for(let i=0;i<a.length&&(c=Me(t),c.some(f=>f.some(l=>isNaN(l)||G(l)>1e8)));i++){console.warn("Non invertible matrix, retrying by shifting mirrors"),t.push(t.shift()),a.push(a.shift());if(i===a.length-1)return console.warn("Non invertible matrix, returning default value"),[0,0,1]}const r=Be(c,a);return r[r.length-1]*=s||1,Re(r,s)};class dn extends x.Component{componentDidCatch(n,s){this.props.onError(n,s)}render(){return this.props.error?null:this.props.children}}var Se={exports:{}};(function(e,n){(function(s,a){e.exports=a()})(tn,function(){var s=function(){function a(g){return r.appendChild(g.dom),g}function t(g){for(var b=0;b<r.children.length;b++)r.children[b].style.display=b===g?"block":"none";c=g}var c=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(g){g.preventDefault(),t(++c%r.children.length)},!1);var i=(performance||Date).now(),f=i,l=0,d=a(new s.Panel("FPS","#0ff","#002")),u=a(new s.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=a(new s.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:r,addPanel:a,showPanel:t,begin:function(){i=(performance||Date).now()},end:function(){l++;var g=(performance||Date).now();if(u.update(g-i,200),g>f+1e3&&(d.update(1e3*l/(g-f),100),f=g,l=0,h)){var b=performance.memory;h.update(b.usedJSHeapSize/1048576,b.jsHeapSizeLimit/1048576)}return g},update:function(){i=this.end()},domElement:r,setMode:t}};return s.Panel=function(a,t,c){var r=1/0,i=0,f=Math.round,l=f(window.devicePixelRatio||1),d=80*l,u=48*l,h=3*l,g=2*l,b=3*l,w=15*l,E=74*l,j=30*l,p=document.createElement("canvas");p.width=d,p.height=u,p.style.cssText="width:80px;height:48px";var v=p.getContext("2d");return v.font="bold "+9*l+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=c,v.fillRect(0,0,d,u),v.fillStyle=t,v.fillText(a,h,g),v.fillRect(b,w,E,j),v.fillStyle=c,v.globalAlpha=.9,v.fillRect(b,w,E,j),{dom:p,update:function(F,D){r=Math.min(r,F),i=Math.max(i,F),v.fillStyle=c,v.globalAlpha=1,v.fillRect(0,0,d,w),v.fillStyle=t,v.fillText(f(F)+" "+a+" ("+f(r)+"-"+f(i)+")",h,g),v.drawImage(p,b+l,w,E-l,j,b,w,E-l,j),v.fillRect(b+E-l,w,l,j),v.fillStyle=c,v.globalAlpha=.9,v.fillRect(b+E-l,w,l,f((1-F/D)*j))}}},s})})(Se);var un=Se.exports;const pn=sn(un),mn=({radius:e=1,widthSegments:n=16,segments:s=16}={})=>{const a=[],t=[],c=[],r=[];let i=0;const f=[];for(let l=0;l<=s;l++){const d=[],u=l/s;let h=0;l===0?h=.5/n:l===s&&(h=-.5/n);for(let g=0;g<=n;g++){const b=g/n,w=[-e*Y(b*ae)*Q(u*M),e*Y(u*M),e*Q(b*ae)*Q(u*M)];t.push(...w);const E=(w[0]**2+w[1]**2+w[2]**2)**-.5;c.push(...w.map(j=>j*E)),r.push(b+h,1-u),d.push(i++)}f.push(d)}for(let l=0;l<s;l++)for(let d=0;d<n;d++){const u=f[l][d+1],h=f[l][d],g=f[l+1][d],b=f[l+1][d+1];l!==0&&a.push(u,h,b),l!==s-1&&a.push(h,g,b)}return{vertices:t,normals:c,uvs:r,indices:a}},hn=({radius:e=null,radiusTop:n=1,radiusBottom:s=1,height:a=1,radialSegments:t=8,segments:c=1}={})=>{const r=[],i=[],f=[],l=[];e!==null&&(n=e,s=e);let d=0;const u=[],h=a/2,g=(s-n)/a;for(let b=0;b<=c;b++){const w=[],E=b/c,j=E*(s-n)+n;for(let p=0;p<=t;p++){const v=p/t,F=v*ae,D=Q(F),I=Y(F),N=[j*D,-E*a+h,j*I];i.push(...N);const C=[D,g,I],R=(C[0]**2+C[1]**2+C[2]**2)**-.5;f.push(...C.map(k=>k*R)),l.push(v,1-E),w.push(d++)}u.push(w)}for(let b=0;b<t;b++)for(let w=0;w<c;w++){const E=u[w][b],j=u[w+1][b],p=u[w+1][b+1],v=u[w][b+1];r.push(E,j,v),r.push(j,p,v)}return{vertices:i,normals:f,uvs:l,indices:r}},gn=({segments:e=3}={})=>{const n=[],s=[],a=[],t=[],c=1/e;for(let r=0;r<e+1;r++)for(let i=0;i<r+1;i++)s.push((2*i-r)*c/2,r*c,0),a.push(0,0,1),t.push(c*i,1-c*r);for(let r=1;r<e+1;r++)for(let i=0;i<r;i++){const f=r*(r+1)/2+i,l=r*(r-1)/2+i;if(n.push(l,f,f+1),r<e){const d=(r+1)*(r+2)/2+i;n.push(d+1,f,f+1)}}return{vertices:s,normals:a,uvs:t,indices:n}},xn=`#version 300 es
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
`,vn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,bn=`#version 300 es
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
`,wn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,En=`#version 300 es
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
`,yn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Tn=`#version 300 es
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
`,jn=`#version 300 es
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
  if(len(position) > BOUNDS) {
    gl_Position = OOB;
    vColor = vec3(0.f);
    vPosition = vec3(0.f);
    vNormal = vec3(0.f);
  } else {

    vec3 n = xproject(next) + NOISE; // Avoid collinearity
    vec3 k = normalize(position - n); // current segment direction

  // Rodrigues' rotation formula
  // To rotate v around axis k by angle r:
    float r = (1.f - uv.x) * TAU;
    vec3 v = normalize(cross(n, position));
    vec3 normal = normalize(v * cos(r) + cross(k, v) * sin(r)); // + k * dot(k, v) * (1. - cos(r));

    position = inflate(position, pos, normal, thickness, 0.f);

    gl_Position = viewProjection * vec4(position, 1.f);

    vColor = color;
    vPosition = position;
    vNormal = normal;
  }
}
`,Fn=`#version 300 es
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
`,On=`#version 300 es
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
  if(len(position) > BOUNDS) {
    gl_Position = OOB;
    vColor = vec3(0.f);
    vPosition = vec3(0.f);
    vNormal = vec3(0.f);
  } else {

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
}
`,Rn=`#version 300 es
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
`,Cn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,An=`#version 300 es
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
`,Sn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Nn=`#version 300 es
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
`,kn=`#version 300 es
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
  if(len(position) > BOUNDS) {
    gl_Position = OOB;
    vColor = vec3(0.f);
    vPosition = vec3(0.f);
    vNormal = vec3(0.f);
  } else {

    position = inflate(position, pos, normal, thickness, .01f);

    gl_Position = viewProjection * vec4(position, 1.f);

    vColor = color;
    vPosition = position;
    vNormal = normal;
  }
}
`;function Ne(e){const{gl:n}=e,s=z[e.ambiance],a=e.msaa?q(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),ne(e,e.rb.base,n.RGBA8,a),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.base),ne(e,e.rb.depth,n.DEPTH_COMPONENT24,a),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),e.fb.oit&&(n.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.passes.oit.accumTexture&&(n.deleteTexture(e.passes.oit.accumTexture.texture),e.passes.oit.accumTexture=null),e.passes.oit.revealTexture&&(n.deleteTexture(e.passes.oit.revealTexture.texture),e.passes.oit.revealTexture=null),e.rb.depth_copy&&n.deleteRenderbuffer(e.rb.depth_copy),e.meshes.face.visible&&s.opacity<1&&s.transparency==="oit"&&(e.fb.oit=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),a?(e.rb.depth_copy=n.createRenderbuffer(),ne(e,e.rb.depth_copy,n.DEPTH_COMPONENT24),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth_copy)):n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.passes.oit.accumTexture=L(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.oit.accumTexture.texture,0),e.passes.oit.revealTexture=L(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.passes.oit.revealTexture.texture,0)),e.fb.afterimage&&(n.deleteFramebuffer(e.fb.afterimage),e.fb.afterimage=null),e.passes.afterimage.lastScreen&&(n.deleteTexture(e.passes.afterimage.lastScreen.texture),e.passes.afterimage.lastScreen=null),e.passes.afterimage.screen&&(n.deleteTexture(e.passes.afterimage.screen.texture),e.passes.afterimage.screen=null),e.passes.afterimage.outScreen&&(n.deleteTexture(e.passes.afterimage.outScreen.texture),e.passes.afterimage.outScreen=null),s.afterImage&&(e.fb.afterimage=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterimage),e.passes.afterimage.lastScreen=L(e,n.RGBA8),e.passes.afterimage.screen=L(e,n.RGBA8),e.passes.afterimage.outScreen=L(e,n.RGBA8)),e.fb.kawase&&(n.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(n.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.passes.kawase.textures){for(let t=0;t<e.passes.kawase.textures.length;t++)n.deleteTexture(e.passes.kawase.textures[t].texture);e.passes.kawase.textures=null}if(e.passes.kawase.blur&&(n.deleteTexture(e.passes.kawase.blur.texture),e.passes.kawase.blur=null),e.passes.bloom.screen&&(n.deleteTexture(e.passes.bloom.screen.texture),e.passes.bloom.screen=null),s.glow){e.fb.kawase=n.createFramebuffer(),e.fb.bloom=n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.passes.kawase.textures=[];for(let t=0;t<s.glow.steps;t++)e.passes.kawase.textures[t]=L(e,n.RGBA8,s.glow.pow**-t);e.passes.kawase.blur=L(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.kawase.blur.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.passes.bloom.screen=L(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.bloom.screen.texture,0)}}const ke=window.location.search.includes("stats");let Z;ke&&(Z=new pn,Z.dom.id="stats",document.body.appendChild(Z.dom));const In=e=>{if(document.getElementById("webgl2"))return console.warn("WebGL already initialized"),Ie(e),e.meshes.recompilePrograms(e),e.meshes.updateGeometries(e),Pe(e),e.meshes.updateUniforms(e,!0),W(e),e;const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const s=n.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:s},!s){console.error("Unable to initialize WebGL. Your browser may not support it.");return}s.getExtension("EXT_color_buffer_float"),s.enable(s.DEPTH_TEST);const a={zoom:1,fov:M/3,position:[0,0,-e.zoom],update(){const d=s.canvas.clientWidth/s.canvas.clientHeight;this.zoom=q(s.canvas.clientWidth/s.canvas.clientHeight,1),this.eye=[0,0,this.position[2]/this.zoom];const u=$e(this.eye,[0,0,0],[0,1,0]),h=He(this.fov,d,.001,1e3);this.viewProjection=oe(J(h,u))}};a.update();const t={oit:{attributes:{},...X(e,"oit",Cn,Rn,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}])},kawase:{down:{attributes:{},...X(e,"kawase/down",yn,En,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}])},up:{attributes:{},...X(e,"kawase/up",Sn,An,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}])}},afterimage:{attributes:{},...X(e,"afterimage",vn,xn,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}])},bloom:{attributes:{},...X(e,"bloom",wn,bn,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}},c={base:s.createRenderbuffer(),depth:s.createRenderbuffer()},r={base:s.createFramebuffer()},i=e.dimensions>4?9:e.dimensions,f={vertex:()=>mn(),edge:d=>hn({segments:d}),face:d=>gn({segments:d})},l={vertex:re(e,"vertex",kn,Nn,f.vertex,1e4,i),edge:re(e,"edge",jn,Tn,f.edge,1e4,i,["position","target"]),face:re(e,"face",On,Fn,f.face,1e4,i,["position","target","center"]),changeArity(d){const u=["vertex","edge","face"];for(let h=0;h<u.length;h++)this[u[h]].changeArity(d)},updateGeometries(d){const u=["vertex","edge","face"];for(let h=0;h<u.length;h++)this[u[h]].updateGeometry(d)},recompilePrograms(d){const u=["vertex","edge","face"];for(let h=0;h<u.length;h++)this[u[h]].recompileProgram(d)},updateUniforms(d,u=!1){const h=["vertex","edge","face"];for(let g=0;g<h.length;g++){const b=h[g],w=this[b];if(!u){w.uniforms.curvature.update(d.curvature),w.uniforms.matrix.update(oe(d.matrix));for(let E=4;E<=d.dimensions;E++)w.uniforms[`fov${E}`].update(ze(M*d[`fov${E}`]*.5/180));b==="vertex"?w.uniforms.thickness.update(d.vertexThickness):b==="edge"?w.uniforms.thickness.update(d.edgeThickness):(w.uniforms.segments.update(d.curve?d.segments:1),w.uniforms.opacity.update(z[d.ambiance].opacity))}w.uniforms.viewProjection.update(d.camera.viewProjection),w.uniforms.eye&&w.uniforms.eye.update(d.camera.eye)}},plotType(d,u,h){const g=this[u],b=d[u],{dimensions:w}=d,E=z[d.ambiance];let j=h?h[0]:0,p=h?h[1]:b.length;if(j===p)return;let v=j,F=p;if(u==="face"){let N=0;for(let C=0;C<j;C++){const R=b[C].vertices.length;N+=R<3?0:R===3?1:R}v=N;for(let C=j;C<p;C++){const R=b[C].vertices.length;N+=R<3?0:R===3?1:R}F=N}g.instances<F&&g.extendAttributes(F),g.count=F;const D=w>4?9:w;let I=v;for(let N=j;N<p;N++){let C=[];const R=b[N];if(u==="vertex")C.push({...R,position:R.vertex,type:u});else if(u==="edge")C.push({...R,position:d.vertex[R.start].vertex,target:d.vertex[R.end].vertex,type:u});else{if(R.vertices.length<3)continue;if(R.vertices.length===3)C.push({...R,position:d.vertex[R.vertices[0]].vertex,target:d.vertex[R.vertices[1]].vertex,center:d.vertex[R.vertices[2]].vertex});else{const k=new Array(R.vertices.length);for(let A=0;A<R.vertices.length;A++)k[A]=d.vertex[R.vertices[A]].vertex;const B=new Array(w).fill(0);for(let A=0;A<k.length;A++){const P=k[A];for(let U=0;U<w;U++)B[U]+=P[U]}for(let A=0;A<w;A++)B[A]/=k.length;for(let A=0;A<k.length;A++){const P={...R,position:k[A],target:k[(A+1)%k.length],center:B};R.word.length%2===(d.curvature>0?0:1)&&([P.position,P.target]=[P.target,P.position]),C.push(P)}}}for(let k=0;k<C.length;k++){const B=C[k];for(let P=0;P<w;P++)for(let U=0;U<g.varying.length;U++){const me=g.varying[U];g.attributes[me].data[I*D+P]=B[me][P]}const A=E.color(B,u,d);g.attributes.color.data[I*3+0]=A[0],g.attributes.color.data[I*3+1]=A[1],g.attributes.color.data[I*3+2]=A[2],I++}for(let k=0;k<g.varying.length;k++){const B=g.varying[k];g.attributes[B].update(v,F)}g.attributes.color.update(v,F)}},plot(d,u){const h=["vertex","edge","face"];for(let g=0;g<h.length;g++){const b=h[g];this[b].visible&&this.plotType(d,b,u[b])}}};return l.edge.visible=e.showEdges,l.vertex.visible=e.showVertices,l.face.visible=e.showFaces,{...e,gl:s,camera:a,meshes:l,passes:t,rb:c,fb:r}},te=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},he=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const s=n!==null?e.ranges[n]:{vertex:[e.ranges[0].vertex[0],e.ranges[e.currentOrder-1].vertex[1]],edge:[e.ranges[0].edge[0],e.ranges[e.currentOrder-1].edge[1]],face:[e.ranges[0].face[0],e.ranges[e.currentOrder-1].face[1]]};e.meshes.plot(e,s),document.title=`Coxeter Explorer - ${e.spaceType==="finite"?"S":e.spaceType==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertex.length} vertices, ${e.edge.length} edges, ${e.face.length} faces`},Ie=e=>{e.camera.fov=M*e.fov3/180,e.camera.update(),e.meshes.updateUniforms(e,!0)},Pe=e=>{const n=z[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.kawase.down.uniforms.offset.update(n.glow.offset.down),e.passes.kawase.up.uniforms.offset.update(n.glow.offset.up)),n.afterImage&&e.passes.afterimage.uniforms.strength.update(n.afterImage)},W=e=>{ke&&Z.update();const{gl:n}=e,s=e.msaa?q(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,a=z[e.ambiance];Ve(n.canvas,e.subsampling)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),Ne(e),e.camera.update(),e.meshes.updateUniforms(e,!0)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),K(e,"vertex"),K(e,"edge"),e.meshes.face.visible&&a.opacity<1&&a.transparency==="oit"?(s&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),K(e,"face"),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.passes.oit.accumTexture.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.passes.oit.revealTexture.texture),n.drawArrays(n.TRIANGLES,0,3)):(a.opacity<1&&a.transparency==="blend"&&(n.enable(n.BLEND),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)),K(e,"face"));const t=a.afterImage?e.fb.afterimage:a.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,t),a.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.afterimage.screen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let c=e.passes.bloom.screen;if(a.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterimage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.afterimage.outScreen.texture,0),n.useProgram(e.passes.afterimage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.passes.afterimage.screen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.passes.afterimage.lastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),a.glow?c=e.passes.afterimage.outScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterimage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.afterimage.outScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.passes.afterimage.outScreen,e.passes.afterimage.lastScreen]=[e.passes.afterimage.lastScreen,e.passes.afterimage.outScreen]),a.glow){n.disable(n.BLEND),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.kawase.down.program);for(let r=0;r<a.glow.steps;r++){const i=r===0?c:e.passes.kawase.textures[r-1],f=e.passes.kawase.textures[r];n.viewport(0,0,f.width,f.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,i.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,f.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.kawase.up.program);for(let r=a.glow.steps-1;r>=0;r--){const i=e.passes.kawase.textures[r],f=r===0?e.passes.kawase.blur:e.passes.kawase.textures[r-1];n.viewport(0,0,f.width,f.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,i.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,f.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,c.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.passes.kawase.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}},ge=.95,xe=25,_=(e,n,s,a,t,c,r)=>{ce(t,J(le(e,s*2+1,a.combinations,c,r),t)),ce(t,J(le(n,s*2,a.combinations,c,r),t))},Pn=(e,n,s,a,t)=>{const{code:c}=e,r=.01;if(c==="ArrowLeft"||c==="KeyA")_(-r,0,0,n,s,a,t);else if(c==="ArrowRight"||c==="KeyD")_(r,0,0,n,s,a,t);else if(c==="ArrowUp"||c==="KeyW")_(0,-r,1,n,s,a,t);else if(c==="ArrowDown"||c==="KeyS")_(0,r,1,n,s,a,t);else if(c==="PageUp"||c==="KeyQ")_(-r,0,2,n,s,a,t);else if(c==="PageDown"||c==="KeyE")_(r,0,2,n,s,a,t);else if(c==="Digit1")_(0,-r,2,n,s,a,t);else if(c==="Digit3")_(0,r,2,n,s,a,t);else if(c==="KeyZ")_(-r,0,3,n,s,a,t);else if(c==="KeyC")_(r,0,3,n,s,a,t);else return;return!0},_n=(e,n,s)=>{const a=x.useCallback(ie(l=>s({matrix:l}),100),[]),t=x.useCallback(ie(l=>s({zoom:l}),100),[]),c=x.useRef(null),r=x.useRef({pause:new Set,speed:null}),i=x.useRef(e.matrix.map(l=>l.slice()));x.useEffect(()=>{i.current=e.matrix.map(l=>l.slice())},[e.matrix]);const f=x.useCallback(()=>{const l=["vertex","edge","face"];for(let d=0;d<l.length;d++)e.meshes[l[d]].uniforms.matrix.update(oe(i.current));W(e)},[e.ambiance,e.camera,e.centered,e.coxeter,e.currentOrder,e.curvature,e.curve,e.dimensions,e.easing,e.edge,e.edgeThickness,e.error,e.face,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.grouper,e.msaa,e.msaaSamples,e.projection,e.ranges,e.renderError,e.segments,e.showEdges,e.showFaces,e.showVertices,e.spaceType,e.stellation,e.subsampling,e.vertexThickness,e.vertex,e.zoom]);x.useEffect(()=>{r.current.speed=new Array(n.combinations.length).fill(0)},[n.combinations]),x.useEffect(()=>{ye(e.matrix)&&(r.current.speed=new Array(n.combinations.length).fill(0))},[n.combinations.length,e.matrix]),x.useEffect(()=>{const l=()=>{const{pause:d,speed:u}=r.current;let h=!1;for(let g=0;g<u.length;g++)u[g]===0||n.auto==="damp"&&d.has(g)||(h=!0,n.auto==="damp"&&(u[g]*=.96,G(u[g])<1e-4&&(u[g]=0,a(i.current))),ce(i.current,J(le(u[g],g,n.combinations,e.dimensions,e.curvature),i.current)));h&&f(),c.current!==null&&(c.current=requestAnimationFrame(l))};return n.auto&&(c.current=requestAnimationFrame(l)),()=>{c.current&&(cancelAnimationFrame(c.current),c.current=null),a(i.current)}},[n.auto,n.combinations,e.dimensions,e.curvature,a,f]),x.useEffect(()=>{e.camera.position[2]=-e.zoom,e.camera.update()},[e.camera,e.zoom]),x.useEffect(()=>{const l=new Map;let d=null,u=null;const h=()=>{const E=l.values(),j=E.next().value,p=E.next().value;return We(j[0]-p[0],j[1]-p[1])},g=E=>{E.button!==0||E.target.tagName!=="CANVAS"||(n.auto&&(u=performance.now(),r.current.pause.add(n.shift*2),r.current.pause.add(n.shift*2+1),r.current.speed[n.shift*2]=0,r.current.speed[n.shift*2+1]=0),l.set(E.pointerId,[E.clientX,E.clientY]))},b=E=>{if(!l.has(E.pointerId))return;let j=l.get(E.pointerId);const p=[-(E.clientX-j[0])/window.innerHeight,-(E.clientY-j[1])/window.innerHeight];if(n.auto){const F=performance.now(),D=F-u;u=F;const I=[xe*p[0]/D,xe*p[1]/D];r.current.speed[n.shift*2]=I[1],r.current.speed[n.shift*2+1]=I[0]}if(l.set(E.pointerId,[E.clientX,E.clientY]),l.size===2){if(d===null){d=h();return}const F=h();e.camera.position[2]*=d/F,e.camera.update(),e.meshes.updateUniforms(e,!0),d=F,W(e),t(-e.camera.position[2]);return}let v=n.shift;!v&&E.shiftKey?v=1:!v&&E.altKey?v=2:!v&&E.ctrKey?v=3:!v&&E.metaKey&&(v=4),l.size>2&&(v+=l.size-2),_(M*p[0],M*p[1],v,{combinations:n.combinations,auto:n.auto,shift:n.shift},i.current,e.dimensions,e.curvature),f(),a(i.current)},w=E=>{l.has(E.pointerId)&&(n.auto&&(performance.now()-u>100?(r.current.speed[n.shift*2]=0,r.current.speed[n.shift*2+1]=0):n.auto==="free"&&(r.current.speed[n.shift*2]*=.5,r.current.speed[n.shift*2+1]*=.5),r.current.pause.delete(n.shift*2),r.current.pause.delete(n.shift*2+1)),d=null,l.delete(E.pointerId))};return document.addEventListener("pointerdown",g),document.addEventListener("pointermove",b),document.addEventListener("pointerup",w),()=>{document.removeEventListener("pointerdown",g),document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",w)}},[n.auto,n.combinations,n.shift,e.dimensions,e.curvature,e.camera,f,a,t]),x.useEffect(()=>{const l=d=>{d.target===document.body&&Pn(d,{combinations:n.combinations,auto:n.auto,shift:n.shift},i.current,e.dimensions,e.curvature)&&(f(),a(i.current))};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[f,n.auto,n.combinations,n.shift,e.curvature,e.dimensions,a]),x.useEffect(()=>{const l=d=>{d.target.tagName==="CANVAS"&&(e.camera.position[2]*=d.deltaY<0?ge:1/ge,e.camera.update(),e.meshes.updateUniforms(e,!0),W(e),t(-e.camera.position[2]))};return document.addEventListener("wheel",l),()=>{document.removeEventListener("wheel",l)}},[e,t]),x.useEffect(()=>{const l=d=>{if(d.button!==0||d.target.tagName!=="CANVAS")return;const u=-e.camera.position[2],h=u<.5?5:u<2?.25:1;e.camera.position[2]=-h,e.camera.update(),e.meshes.updateUniforms(e,!0),W(e),t(h)};return document.addEventListener("dblclick",l),()=>{document.removeEventListener("dblclick",l)}},[e,t])};function Dn({runtime:e,rotations:n,updateParams:s}){return _n(e,n,s),null}const Mn=(e,n)=>{x.useEffect(()=>{n(s=>(Ie(s),s))},[e.fov3,e.camera,n]),x.useEffect(()=>{n(s=>(s.meshes.updateGeometries(s),s))},[e.curve,e.segments,n]),x.useEffect(()=>{n(s=>(s.meshes.changeArity(s.dimensions>4?9:s.dimensions),s))},[e.dimensions,n]),x.useEffect(()=>{n(s=>(Pe(s),s))},[e.ambiance,e.msaa,e.msaaSamples,n]),x.useEffect(()=>{n(s=>(Ne(s),s))},[e.ambiance,e.msaa,e.msaaSamples,n]),x.useEffect(()=>{n(s=>(te(s,"vertex"),te(s,"edge"),te(s,"face"),s))},[e.showVertices,e.showEdges,e.showFaces,n]),x.useEffect(()=>{n(s=>{if(!(s.currentOrder<0))return he(s,s.currentOrder-1),s})},[e.currentOrder,e.edge,e.face,e.ranges,e.showEdges,e.showFaces,e.showVertices,e.vertex,n]),x.useEffect(()=>{n(s=>(s.meshes.recompilePrograms(s),s))},[e.ambiance,e.dimensions,e.easing,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.spaceType,n]),x.useEffect(()=>{n(s=>(he(s),s))},[e.ambiance,e.curve,e.segments,e.showEdges,e.showFaces,e.showVertices,n]),x.useEffect(()=>{n(s=>(s.meshes.updateUniforms(s),s))},[e.ambiance,e.ambiance,e.curvature,e.curve,e.dimensions,e.easing,e.edgeThickness,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.matrix,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.segments,e.spaceType,e.vertexThickness,n]),x.useEffect(()=>{const s=new ResizeObserver(()=>{W(e)});return s.observe(e.gl.canvas,{box:"content-box"}),()=>s.disconnect()},[e.ambiance,e.camera,e.centered,e.coxeter,e.currentOrder,e.curvature,e.curve,e.dimensions,e.easing,e.edge,e.edgeThickness,e.error,e.face,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.grouper,e.matrix,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.ranges,e.renderError,e.segments,e.showEdges,e.showFaces,e.showVertices,e.spaceType,e.stellation,e.subsampling,e.vertexThickness,e.vertex,e.zoom])};function Bn({runtime:e,setRuntime:n}){return Mn(e,n),null}function Un(){return new Worker(""+new URL("knuthbendix-tiling.worker-dbafa931.js",import.meta.url).href)}function Ln(){return new Worker(""+new URL("toddcoxeter-tiling.worker-6f68cc6a.js",import.meta.url).href)}function $n(){return new Worker(""+new URL("fundamental.worker-575cdf7f.js",import.meta.url).href)}let se=class _e{constructor(n,s){this.workerClass=s,this.name=n,this.init(),this.times={}}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const s=Math.random()*16|0;return(n==="x"?s:s&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.debug(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(n){return n.uuid=_e.uuid4(),this.processing++,this.times[n.uuid]=performance.now(),this.worker.postMessage(n),new Promise((s,a)=>{const t=r=>{if(r.data.uuid!==n.uuid)return;const i=performance.now()-this.times[n.uuid];if(delete this.times[n.uuid],console.debug(`Worker ${this.name} took ${i}ms`),this.processing--,this.worker.removeEventListener("message",t),this.worker.removeEventListener("error",c),r.data.error){a(r.data.error);return}s(r.data)},c=r=>{this.worker.removeEventListener("message",t),this.worker.removeEventListener("error",c),!(this.processing<=0)&&(delete this.times[n.uuid],this.processing--,this.processing=Xe(0,this.processing),console.error(`Can't call web worker ${this.name}`,r))};this.worker.addEventListener("message",t),this.worker.addEventListener("error",c)})}};const Hn=()=>Object.values(De).filter(e=>e.processing>0).forEach(e=>e.kill()),De={knuthbendix:new se("knuthbendix",Un),toddcoxeter:new se("toddcoxeter",Ln),fundamental:new se("toddcoxeter",$n)},ve=async(e,n,s)=>{const a=De[e.grouper.replace(/^auto-/,"")];if(e.currentOrder===0&&(Hn(),n.current=!1),n.current===e.currentOrder){console.log("already processing at ",e.currentOrder);return}try{n.current=e.currentOrder;const{vertices:t,edges:c,faces:r,order:i}=await a.process({order:e.currentOrder,coxeter:e.coxeter,curvature:e.curvature,stellation:e.stellation,mirrors:e.mirrors,mirrorsPlanes:e.mirrorsPlanes,rootVertex:e.rootVertex,dimensions:e.dimensions});n.current=!1,s(f=>f.currentOrder!==i?(console.warn("Mismatched order, ignoring",f.currentOrder,i),{...f,currentOrder:0,vertex:[],edge:[],face:[],ranges:[],renderError:null,processing:!0,error:"Mismatch Order"}):{...f,ranges:[...f.ranges,{vertex:[f.vertex.length,f.vertex.length+t.length],edge:[f.edge.length,f.edge.length+c.length],face:[f.face.length,f.face.length+r.length]}],vertex:f.vertex.concat(t),edge:f.edge.concat(c),face:f.face.concat(r),currentOrder:i+1,processing:!1,error:null})}catch(t){n.current=!1,console.error(t);const c={...e,currentOrder:e.order,error:t.message,processing:!1};s(c)}},zn=(e,n)=>{const s=x.useRef(!1);x.useEffect(()=>{n(a=>a.order<a.currentOrder?{...a,currentOrder:a.order}:a)},[e.order,e.currentOrder,n]),x.useEffect(()=>{n(a=>{const t=an(a.coxeter,a.stellation),c=on(t);if(!c)return{...a,spaceType:c};const r=c==="finite"?1:c==="affine"?0:-1,i=a.grouper===""||a.grouper.startsWith("auto-")?"auto-toddcoxeter":a.grouper,f=Ce(t,r,a.centered===null?i.replace(/^auto-/,"")==="toddcoxeter"&&r<=0||t.some(u=>u.some(h=>h===-1)):a.centered),l=Ae(a.mirrors,f,r),d={...a,currentOrder:0,grouper:i,vertex:[],edge:[],face:[],ranges:[],spaceType:c,curvature:r,mirrorsPlanes:f,rootVertex:l,renderError:null,processing:!0,error:null};return ve(d,s,n),d})},[e.dimensions,e.coxeter,e.mirrors,e.stellation,e.centered,e.grouper,n]),x.useEffect(()=>{n(a=>{var t;return a.order<=a.currentOrder?a:(t=a.ranges)!=null&&t[a.order]?{...a,currentOrder:a.order,askedOrder:null}:(ve(a,s,n),{...a,error:null,processing:!0})})},[n,e.order,e.currentOrder])};function Vn({runtime:e,setRuntime:n}){return zn(e,n),null}function Wn({runtime:e,setRuntime:n,rotations:s,updateParams:a}){window.rt=e;const t=x.useCallback(c=>{n(r=>({...r,renderError:c.message}))},[n]);return x.useEffect(()=>()=>{e.curvature!==null&&a({matrix:ee(e.dimensions)})},[e.curvature]),o.jsx(o.Fragment,{children:o.jsxs(dn,{error:e.renderError,onError:t,children:[o.jsx(Vn,{runtime:e,setRuntime:n}),o.jsx(Bn,{runtime:e,setRuntime:n}),e.curvature!==null?o.jsx(Dn,{runtime:e,rotations:s,updateParams:a}):null]})})}const Xn="modulepreload",Gn=function(e,n){return new URL(e,n).href},be={},qn=function(n,s,a){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(c=>{if(c=Gn(c,a),c in be)return;be[c]=!0;const r=c.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(!!a)for(let d=t.length-1;d>=0;d--){const u=t[d];if(u.href===c&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${i}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":Xn,r||(l.as="script",l.crossOrigin=""),l.href=c,document.head.appendChild(l),r)return new Promise((d,u)=>{l.addEventListener("load",d),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>n()).catch(c=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=c,window.dispatchEvent(r),!r.defaultPrevented)throw c})};function we({allowNull:e,name:n,value:s,onChange:a,...t}){const c=x.useCallback(i=>{let{name:f,checked:l}=i.target,d;e?d=s===!1?!0:s?null:!1:d=l,a(f,d)},[e,a,s]),r=x.useRef(null);return x.useLayoutEffect(()=>{e&&r.current&&(s===null?r.current.indeterminate=!0:r.current.indeterminate=!1)},[s,e]),o.jsx("input",{type:"checkbox",ref:r,name:n,checked:s||!1,onChange:c})}function O({type:e,dimensions:n}){return o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"space",children:e===null||e==="indefinite"?"𝕏":e==="affine"?"𝔼":e==="finite"?"𝕊":"ℍ"}),n?o.jsx("sup",{children:n-1}):null,e!=null&&e.startsWith("hyperbolic")?o.jsx("sub",{children:{compact:" ",paracompact:"*"}[e.replace(/^hyperbolic-/,"")]||(e.startsWith("hyperbolic-lorentzian")?`L${e.replace(/^hyperbolic-lorentzian-level-/,"")}`:null)}):null]})}const Kn=(...e)=>{if(Array.isArray(e[0]))return{coxeter:e,dimensions:e.length,extended:!0};const n=e.length+1;return{coxeter:new Array(n).fill().map((a,t)=>new Array(n).fill().map((c,r)=>t===r?1:t===r+1||r===t+1?e[q(t,r)]:2)),dimensions:n}},Qn=(...e)=>{const n=e.length+1;return{stellation:new Array(n).fill().map((a,t)=>new Array(n).fill().map((c,r)=>t===r?1:t===r+1||r===t+1?e[q(t,r)]:1))}},m=(e,n,s,a)=>{const t=Kn(...e),{dimensions:c}=t,r={...ue,...t,showVertices:c<=3,showFaces:c<=4,curve:c>3,grouper:"toddcoxeter",ambiance:"colorful",matrix:ee(c),zoom:c<=3?2:c>4?3:5,...a||{}};if(n?r.mirrors=n:r.mirrors=new Array(c).fill().map((i,f)=>f===0?1:0),s?r.stellation=Qn(...s).stellation:r.stellation=new Array(c).fill().map((i,f)=>new Array(c).fill(1)),c>4)for(let i=4;i<=c;i++)r[`fov${i}`]=(10-i)*10;return r},y=(e,n,s,a)=>({...m(e,n,s),ambiance:"plain",showVertices:!1,curve:!0,zoom:1,...a}),$=(e,n,s,a)=>({...m(e,n,s),ambiance:"neon",showFaces:!1,showVertices:!1,grouper:"",edgeThickness:10,zoom:2,...a}),T=(e,n,s,a)=>({...m(e,n,s),ambiance:"neon",showFaces:!1,showVertices:!1,curve:!0,grouper:"",edgeThickness:10,zoom:1.5,...a}),V=e=>{if(e===4)return{"":[1,0,0,0],Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1]};if(e===5)return{"":[1,0,0,0,0],Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1]};if(e===6)return{"":[1,0,0,0,0,0],Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(e===7)return{"":[1,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(e===8)return{"":[1,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(e===9)return{"":[1,0,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},Zn=[{type:"title",content:o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:4})," Tesseract"]}),params:m([4,3,3],[1,0,0,0],null,{showVertices:!0,vertexThickness:150,showFaces:!0,curve:!0,ambiance:"neon",centered:!1,zoom:4.2})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:3})," 7-3-2 tiling"]}),params:y([7,3],[1,0,0],null,{showVertices:!1,showFaces:!0,curve:!0,ambiance:"neon"})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:3})," Ideal triangles"]}),params:y([[1,1/0,1/0],[1/0,1,1/0],[1/0,1/0,1]],[1,1,1],null,{grouper:"fundamental",showVertices:!1,showFaces:!0,curve:!0,segments:64,easing:"quartic",ambiance:"neon"})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:4})," Ideal tetrahedron"]}),params:y([3,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:64,easing:"quartic",ambiance:"pure"})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:4})," Horoball"]}),params:y([6,3,4],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:20,centered:!1,ambiance:"colorful"})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:4})," 5-3-4 honeycomb"]}),params:T([5,3,4],[1,0,0,0],null,{zoom:1.5})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:4})," 7-3-3 paracompact honeycomb"]}),params:T([7,3,3],[1,0,0,0],null,{zoom:1.5,showFaces:!0,showVertices:!0,segments:16})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:4})," Ideal Pentahedron"]}),params:y([5,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:32,easing:"quartic",ambiance:"pure",zoom:1.5})},{name:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:4})," Flat Torus"]}),params:m([32,2,32],[1,0,0,1],null,{showVertices:!1,showFaces:!1,curve:!0,ambiance:"neon",zoom:3,edgeThickness:5})},{type:"title",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite"})," Spherical space"]})},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Tetrahedron",params:m([3,3])},{name:"Cube",params:m([4,3])},{name:"Octahedron",params:m([3,4])},{name:"Dodecahedron",params:m([5,3])},{name:"Icosahedron",params:m([3,5])},{name:"Cuboctahedron",params:m([4,3],[0,1,0])},{name:"Icosidodecahedron",params:m([5,3],[0,1,0])},{name:"Truncated Tetrahedron",params:m([3,3],[1,1,0])},{name:"Truncated Cube",params:m([4,3],[1,1,0])},{name:"Truncate Octahedron",params:m([3,4],[1,1,0])},{name:"Truncate Dodecahedron",params:m([5,3],[1,1,0])},{name:"Truncate Icosahedron",params:m([3,5],[1,1,0])},{name:"Rhombicuboctahedron",params:m([4,3],[1,0,1])},{name:"Rhombicosidodecahedron",params:m([5,3],[1,0,1])},{name:"Truncated Cuboctahedron",params:m([4,3],[1,1,1])},{name:"Truncated Icosidodecahedron",params:m([5,3],[1,1,1])},{name:"Snub Cube",params:m([4,3],["s","s","s"])},{name:"Snub Dodecahedron",params:m([5,3],["s","s","s"])},{name:"Great Dodecahedron",params:m([5,5],[1,0,0],[1,2])},{name:"Great Icosahedron",params:m([3,5],[1,0,0],[1,2])},{name:"Small Stellated Dodecahedron",params:m([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:m([5,3],[1,0,0],[2,1])},{name:"Stellated Octahedron",params:m([2,2],["ß","ß","ß"])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:4})," Polychora"]})},...Object.entries(V(4)).map(([e,n])=>[{name:`${e?`${e} `:""}5-cell`,params:m([3,3,3],n)},{name:`${e?`${e} `:""}8-cell`,params:m([4,3,3],n)},{name:`${e?`${e} `:""}16-cell`,params:m([3,3,4],n)},{name:`${e?`${e} `:""}24-cell`,params:m([3,4,3],n)},{name:`${e?`${e} `:""}120-cell`,params:m([5,3,3],n)},{name:`${e?`${e} `:""}600-cell`,params:m([3,3,5],n)}]).flat(),{name:"Snub 24-cell",params:m([3,4,3],["s","s",0,0])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:5})," Polytera"]})},...Object.entries(V(5)).map(([e,n])=>[{name:`${e?`${e} `:""}5-simplex`,params:m([3,3,3,3],n)},{name:`${e?`${e} `:""}5-cube`,params:m([4,3,3,3],n)},{name:`${e?`${e} `:""}5-orthoplex`,params:m([3,3,3,4],n)},{name:`${e?`${e} `:""}5-demicube`,params:m([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]],n)}]).flat(),{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:6})," Polypeta"]})},...Object.entries(V(6)).map(([e,n])=>[{name:`${e?`${e} `:""}6-simplex`,params:m([3,3,3,3,3],n)},{name:`${e?`${e} `:""}6-cube`,params:m([4,3,3,3,3],n)},{name:`${e?`${e} `:""}6-orthoplex`,params:m([3,3,3,3,4],n)},{name:`${e?`${e} `:""}6-demicube`,params:m([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]],n)}]).flat(),{name:o.jsxs(o.Fragment,{children:["2",o.jsx("sub",{children:"21"})]}),params:m([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:o.jsxs(o.Fragment,{children:["1",o.jsx("sub",{children:"22"})]}),params:m([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:7})," Polyexa"]})},...Object.entries(V(7)).map(([e,n])=>[{name:`${e?`${e} `:""}7-simplex`,params:m([3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}7-cube`,params:m([4,3,3,3,3,3],n)},{name:`${e?`${e} `:""}7-orthoplex`,params:m([3,3,3,3,3,4],n)},{name:`${e?`${e} `:""}7-demicube`,params:m([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]],n)}]).flat(),{name:o.jsxs(o.Fragment,{children:["3",o.jsx("sub",{children:"21"})]}),params:m([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:o.jsxs(o.Fragment,{children:["2",o.jsx("sub",{children:"31"})]}),params:m([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:o.jsxs(o.Fragment,{children:["1",o.jsx("sub",{children:"32"})]}),params:m([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:8})," Polyzetta"]})},...Object.entries(V(8)).map(([e,n])=>[{name:`${e?`${e} `:""}8-simplex`,params:m([3,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}8-cube`,params:m([4,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}8-orthoplex`,params:m([3,3,3,3,3,3,4],n)},{name:`${e?`${e} `:""}8-demicube`,params:m([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],n)}]).flat(),{name:o.jsxs(o.Fragment,{children:["1",o.jsx("sub",{children:"42"})]}),params:m([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,1,0,0,0,0,0])},{name:o.jsxs(o.Fragment,{children:["2",o.jsx("sub",{children:"41"})]}),params:m([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:o.jsxs(o.Fragment,{children:["4",o.jsx("sub",{children:"21"})]}),params:m([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"finite",dimensions:9}),"Polyyotta"]})},...Object.entries(V(9)).map(([e,n])=>[{name:`${e?`${e} `:""}9-simplex`,params:m([3,3,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}9-cube`,params:m([4,3,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}9-orthoplex`,params:m([3,3,3,3,3,3,3,4],n)},{name:`${e?`${e} `:""}9-demicube`,params:m([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],n)}]).flat(),{type:"title",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"affine"})," Euclidean space"]})},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:m([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:m([4,4],[1,0,0])},{name:"Hexagonal",params:m([6,3],[1,0,0])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:$([4,3,4],[1,0,0,0])},{name:"Octet",params:$([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter cubic",params:$([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:$([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:$([3,3,4,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"24-cellic",params:$([3,4,3,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"4-simpletic",params:$([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter tesseractic",params:$([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0],null,{grouper:"toddcoxeter"})},{type:"title",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic"})," Hyperbolic space"]})},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic",dimensions:3})," Tilings"]})},{name:"Order-7 triangular",params:y([3,7],[1,0,0])},{name:"Order-8 triangular",params:y([3,8],[1,0,0])},{name:"Infinite Order triangular",params:y([3,1/0],[1,0,0])},{name:"Order-5 square",params:y([4,5],[1,0,0])},{name:"Order-6 square",params:y([4,6],[1,0,0])},{name:"Order-7 square",params:y([4,7],[1,0,0])},{name:"Order-8 square",params:y([4,8],[1,0,0])},{name:"Infinite Order square",params:y([4,1/0],[1,0,0])},{name:"Order-4 pentagonal",params:y([5,4],[1,0,0])},{name:"Order-5 pentagonal",params:y([5,5],[1,0,0])},{name:"Order-6 pentagonal",params:y([5,6],[1,0,0])},{name:"Order-7 pentagonal",params:y([5,7],[1,0,0])},{name:"Order-8 pentagonal",params:y([5,8],[1,0,0])},{name:"Infinite Order pentagonal",params:y([5,1/0],[1,0,0])},{name:"Order-4 hexagonal",params:y([6,4],[1,0,0])},{name:"Order-5 hexagonal",params:y([6,5],[1,0,0])},{name:"Order-6 hexagonal",params:y([6,6],[1,0,0])},{name:"Order-7 hexagonal",params:y([6,7],[1,0,0])},{name:"Order-8 hexagonal",params:y([6,8],[1,0,0])},{name:"Infinite Order hexagonal",params:y([6,1/0],[1,0,0])},{name:"Order-3 heptagonal",params:y([7,3],[1,0,0])},{name:"Order-4 heptagonal",params:y([7,4],[1,0,0])},{name:"Order-5 heptagonal",params:y([7,5],[1,0,0])},{name:"Order-6 heptagonal",params:y([7,6],[1,0,0])},{name:"Order-7 heptagonal",params:y([7,7],[1,0,0])},{name:"Order-8 heptagonal",params:y([7,8],[1,0,0])},{name:"Infinite Order heptagonal",params:y([7,1/0],[1,0,0])},{name:"Order-3 octagonal",params:y([8,3],[1,0,0])},{name:"Order-4 octagonal",params:y([8,4],[1,0,0])},{name:"Order-5 octagonal",params:y([8,5],[1,0,0])},{name:"Order-6 octagonal",params:y([8,6],[1,0,0])},{name:"Order-7 octagonal",params:y([8,7],[1,0,0])},{name:"Order-8 octagonal",params:y([8,8],[1,0,0])},{name:"Infinite Order octagonal",params:y([8,1/0],[1,0,0])},{name:"Order-3 apeirogonal",params:y([1/0,3],[1,0,0])},{name:"Order-4 apeirogonal",params:y([1/0,4],[1,0,0])},{name:"Order-5 apeirogonal",params:y([1/0,5],[1,0,0])},{name:"Order-6 apeirogonal",params:y([1/0,6],[1,0,0])},{name:"Order-7 apeirogonal",params:y([1/0,7],[1,0,0])},{name:"Order-8 apeirogonal",params:y([1/0,8],[1,0,0])},{name:"Infinite Order apeirogonal",params:y([1/0,1/0],[1,0,0])},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic-compact",dimensions:4})," Honeycombs compacts"]})},{name:"Icosahedral",params:T([3,5,3],[1,0,0,0])},{name:"Order-4 dodecahedral",params:T([5,3,4],[1,0,0,0])},{name:"Order-5 dodecahedral",params:T([5,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 cubic",params:T([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral cubic",params:T([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral dodecahedral",params:T([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic octahedral",params:T([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Dodcahedral",params:T([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Icosahedral",params:T([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic-paracompact",dimensions:4})," Honeycombs paracompacts"]})},{name:"Triangular",params:T([3,6,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:T([6,3,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 tetrahedral",params:T([3,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-6 cubic",params:T([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-5 hexagonal",params:T([6,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 hexagonal",params:T([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 hexagonal",params:T([6,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Square",params:T([4,4,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated square",params:T([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-4 square",params:T([4,4,4],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral square",params:T([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic square",params:T([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter order square",params:T([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral Hexagonal",params:T([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Hexagonal",params:T([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Icosahedral Hexagonal",params:T([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal Triangular",params:T([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Hexagonal",params:T([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-4 Hexagonal",params:T([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 Hexagonal",params:T([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Runcic Order-6 Hexagonal",params:T([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],null,{grouper:"toddcoxeter"})},{name:"Quarter Order-4 hexagonal",params:T([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:T([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],null,{grouper:"toddcoxeter"})},{type:"group",content:o.jsxs(o.Fragment,{children:[o.jsx(O,{type:"hyperbolic-lorentzian-level-2",dimensions:4})," Honeycombs lorentzians"]})},{name:"3-3-7",params:T([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-4-7",params:T([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-5-7",params:T([3,5,7],[1,0,0,0],null,{grouper:"toddcoxeter"})}],Yn=x.memo(function({name:n,params:s,onPreset:a}){return o.jsxs("div",{className:"preset",onClick:()=>a(s),children:[o.jsx("span",{className:"preset-name",children:n}),o.jsx(Ge,{coxeter:s.coxeter,mirrors:s.mirrors,stellation:s.stellation})]})}),Jn=o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:o.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),er=o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:o.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),nr=o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:o.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),rr=o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:o.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),fe=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(fe).join("");if(typeof e=="object"&&e)return fe(e.props.children)};function tr({open:e,onPreset:n,onExportImage:s,closePresets:a}){const[t,c]=x.useState(""),[r,i]=x.useState(""),f=x.useCallback(l=>{i(l.target.value),ie(c(l.target.value),50)},[]);return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:`presets-overlay ${e?"shown":"hidden"}`,onClick:a}),o.jsx("div",{className:`presets ${e?"shown":"hidden"}`,children:o.jsxs("div",{className:"presets-modal",children:[o.jsxs("div",{className:"presets-header",children:[o.jsxs("div",{className:"presets-search",children:[o.jsx("input",{type:"text",placeholder:"Search",value:r,onChange:f}),o.jsx("button",{className:"presets-clear",onClick:()=>{c(""),i("")},children:Jn})]}),o.jsxs("div",{className:"presets-actions",children:[o.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:er}),o.jsx("button",{className:"presets-action",onClick:s,children:nr}),o.jsx("button",{className:"presets-action",onClick:a,children:rr})]})]}),o.jsx("div",{className:"presets-list",children:Zn.map(({type:l,content:d,name:u,params:h},g)=>o.jsx(x.Fragment,{children:l==="title"?o.jsx("h2",{children:d}):l==="group"?o.jsx("h4",{children:d}):!t||fe(u).toLowerCase().includes(t.toLowerCase())?o.jsx(Yn,{name:u,params:h,search:t,onPreset:n}):null},g))})]})})]})}function sr({runtime:e,params:n,rotations:s,updateParams:a,updateRotations:t}){const[c,r]=x.useState("simple"),[i,f]=x.useState(!1),l=x.useCallback(()=>{f(!1)},[]),d=x.useCallback(p=>{let{name:v,value:F}=p.target;a({[v]:F})},[a]),u=x.useCallback((p,v)=>{a({[p]:v})},[a]),h=x.useCallback(()=>r(p=>({simple:"advanced",advanced:"full",full:"empty",empty:"simple"})[p]),[]),g=x.useCallback(p=>{a(p),l()},[a,l]),b=x.useCallback(()=>{a({matrix:ee(e.dimensions)})},[a,e.dimensions]),w=x.useCallback(p=>{t("shift",(s.shift+1)%s.maxShift)},[s.maxShift,s.shift,t]),E=x.useCallback(p=>{t("auto",s.auto==="free"?"damp":"free")},[s.auto,t]),j=x.useCallback(async()=>{const p=window.prompt("Select image resolution","5000x5000");if(!p||!p.includes("x")){console.error("Invalid resolution");return}const[v,F]=p.split("x").map(N=>parseInt(N));if(isNaN(v)||isNaN(F)){console.error("Invalid resolution");return}const I=await(await qn(()=>import("./export-902100eb.js"),[],import.meta.url)).makeBigPng(e,v,F);if(I){const N=document.createElement("a");document.body.appendChild(N),N.style.display="none";const C=window.URL.createObjectURL(I);N.href=C,N.download=`${document.title}-${v}x${F}`,N.click()}},[e]);return o.jsxs(o.Fragment,{children:[o.jsx(tr,{open:i,onPreset:g,onExportImage:j,closePresets:l}),o.jsxs("div",{className:e.error?"error":"",title:e.error,children:[e.currentOrder<e.order?o.jsxs("aside",{className:"processing-counter",children:[e.currentOrder,"/",e.order]}):null,["simple","advanced","full"].includes(c)?o.jsx("button",{className:"preset-button button",onClick:()=>f(p=>!p),title:"Presets",children:"◭"}):null,["simple","advanced","full"].includes(c)?o.jsxs("aside",{className:"controls",children:[o.jsxs("button",{className:"controls-button button",onClick:w,title:"Rotation Mode",children:[o.jsx("span",{style:{display:"inline-block",transform:`rotate(${s.shift/s.maxShift*360}deg)`},children:"⥁"}),o.jsx("sup",{children:s.shift+1})]}),o.jsxs("div",{className:"subcontrols",children:[o.jsx("button",{className:"button anim-view",onClick:E,title:"Animate rotations",children:s.auto==="free"?"⤞":s.auto==="damp"?"↠":"?"}),!ye(e.matrix)&&o.jsx("button",{className:"button reset-view",onClick:b,title:"Reset View",children:"⌖"})]})]}):null,o.jsx("button",{className:`space-button button${e.processing?" processing":""}${c==="empty"?" empty":""}`,onClick:h,title:`Space ${e.spaceType}`,children:o.jsx(O,{type:e.spaceType,dimensions:e.dimensions})}),["advanced","full"].includes(c)&&o.jsxs("aside",{className:"parameters",children:[(c==="full"||n.grouper!=="")&&o.jsxs("label",{className:"select-label",children:["Grouper",o.jsx("select",{name:"grouper",value:n.grouper,onChange:d,children:qe.map(p=>o.jsx("option",{value:p,children:p===""?n.grouper===""?`Auto [${e.grouper.replace(/^auto-/,"")}]`:"Auto":p.replace(/_/g," ").replace(/\b./g,v=>v.toUpperCase())},p))})]}),(c==="full"||n.grouper)&&o.jsxs("label",{className:"boolean-label",children:["inCentered",o.jsx(we,{name:"centered",allowNull:!0,value:n.centered,onChange:u})]}),(c==="full"||e.curvature<=0)&&o.jsx(H,{name:"order",label:"Precision",min:1,step:1,value:n.order,onChange:u}),o.jsx(H,{name:"segments",label:"Segments",min:1,step:1,value:n.segments,toggler:n.curve,togglerName:"curve",onChange:u}),o.jsxs("label",{className:"select-label",children:["Easing",o.jsx("select",{name:"easing",value:n.easing,onChange:d,children:Ke.map(p=>o.jsx("option",{value:p,children:p.replace(/_/g," ").replace(/\b./g,v=>v.toUpperCase())},p))})]}),o.jsx(H,{name:"vertexThickness",label:"Vertices",min:0,step:1,value:n.vertexThickness,toggler:n.showVertices,togglerName:"showVertices",onChange:u}),o.jsx(H,{name:"edgeThickness",label:"Edges",min:0,step:1,value:n.edgeThickness,toggler:n.showEdges,togglerName:"showEdges",onChange:u}),(e.grouper.replace(/^auto-/,"")==="toddcoxeter"||e.grouper==="fundamental")&&o.jsxs("label",{className:"boolean-label",children:["Faces",o.jsx(we,{name:"showFaces",value:n.showFaces,onChange:u})]}),o.jsxs("label",{className:"select-label",children:["Ambiance",o.jsx("select",{name:"ambiance",value:n.ambiance,onChange:d,children:(c==="full"?Object.keys(z):Object.entries(z).filter(([p,{extended:v}])=>!v||p===n.ambiance).map(([p])=>p)).map(p=>o.jsx("option",{value:p,children:p.replace(/_/g," ").replace(/./,v=>v.toUpperCase())},p))})]})]}),["advanced","full"].includes(c)&&o.jsxs("aside",{className:"view",children:[o.jsx(H,{name:"msaaSamples",label:"MSAA",min:0,step:1,max:ue.msaaSamples,value:n.msaaSamples,toggler:n.msaa,togglerName:"msaa",onChange:u}),c==="full"&&o.jsx(H,{name:"subsampling",label:"subsampling",min:.1,step:.1,value:n.subsampling,onChange:u}),n.dimensions>=3?Qe(3,n.dimensions+1).map(p=>o.jsxs("div",{className:"projection",children:[o.jsx(H,{label:`${p}D FOV`,name:`fov${p}`,step:1,value:n[`fov${p}`],onChange:u}),o.jsxs("label",{className:"number",children:[o.jsxs("span",{className:"number-label",children:[p,"D Projection"]}),o.jsx("select",{name:`projection${p}`,value:n[`projection${p}`],onChange:d,children:[...p===3?["native"]:[],...Ze].map(v=>o.jsx("option",{value:v,children:v.replace(/_/g," ").replace(/./,F=>F.toUpperCase())},v))})]})]},p)):null]}),["simple","advanced","full"].includes(c)&&o.jsx(Ye,{dimensions:n.dimensions,coxeter:n.coxeter,mirrors:n.mirrors,stellation:n.stellation,extended:n.extended,onChange:u})]})]})}function ar({params:e,updateParams:n}){window.p=e;const[s,a]=x.useState(()=>({...e,currentOrder:0,askedOrder:null,spaceType:null,curvature:null,mirrorsPlanes:null,rootVertex:null,vertex:[],edge:[],ranges:[],face:[],processing:!0,error:null,renderError:null}));x.useEffect(()=>{a(i=>{try{return In(i)}catch(f){return console.error(f),{...i,error:f.message}}})},[]);const[t,c]=x.useState({shift:0,maxShift:0,combinations:[],auto:"damp"});x.useEffect(()=>{a(i=>({...i,...Te({order:e.order,ambiance:e.ambiance,showVertices:e.showVertices,showEdges:e.showEdges,showFaces:e.showFaces,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection3:e.projection3,projection4:e.projection4,projection5:e.projection5,projection6:e.projection6,projection7:e.projection7,projection8:e.projection8,projection9:e.projection9,msaa:e.msaa,msaaSamples:e.msaaSamples,subsampling:e.subsampling,matrix:e.matrix,fov3:e.fov3,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9,zoom:e.zoom,curve:e.curve,segments:e.segments,easing:e.easing,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation,centered:e.centered}).params}))},[e.order,e.ambiance,e.centered,e.coxeter,e.curve,e.dimensions,e.edgeThickness,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.matrix,e.mirrors,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.segments,e.easing,e.showEdges,e.showFaces,e.showVertices,e.stellation,e.subsampling,e.vertexThickness,e.zoom]),x.useEffect(()=>{c(i=>({...i,shift:0,maxShift:~~Je(en(e.dimensions,2)/2),combinations:ln(nn(new Array(e.dimensions).fill().map((f,l)=>l),2)),auto:"damp"}))},[e.dimensions]),x.useEffect(()=>{a(i=>e.grouper===""&&i.grouper.startsWith("auto-")?i:{...i,grouper:e.grouper})},[e.grouper]);const r=x.useCallback((i,f)=>{c(l=>({...l,[i]:f}))},[c]);return s.gl?o.jsxs("div",{className:s.error||s.renderError?"error":"",title:s.error||s.renderError,children:[o.jsx(sr,{runtime:s,params:e,rotations:t,updateRotations:r,updateParams:n}),o.jsx(Wn,{runtime:s,rotations:t,setRuntime:a,updateParams:n})]}):null}const or=e=>JSON.parse(e,(s,a)=>a==="Infinity"?1/0:a),ir=e=>JSON.stringify(e,(s,a)=>a===1/0?"Infinity":a),Ee=(e=null)=>{const{location:n}=window;if(n.hash)try{return or(atob(n.hash.slice(1)))}catch(s){console.warn(s),n.hash=""}return e},cr=e=>{window.history.pushState(null,null,"#"+btoa(ir(e)))},de=(e,n)=>e.length!==n.length?!1:e.every((s,a)=>Array.isArray(s)?de(s,n[a]):s===n[a]),lr=()=>{const[e,n]=x.useState(Ee(ue)),s=x.useCallback(()=>{const t=Ee();t&&(Object.entries(t).forEach(([c,r])=>{Array.isArray(r)&&de(r,e[c])&&(t[c]=e[c])}),n(t))},[e]),a=x.useCallback(t=>{n(c=>{if(!Object.entries(t).filter(([f,l])=>Array.isArray(l)?!de(l,c[f]):c[f]!==l).length)return c;const{params:r,badParams:i}=Te({...c,...t});return i.length||cr(r),r})},[]);return x.useEffect(()=>(window.addEventListener("popstate",s),()=>{window.removeEventListener("popstate",s)}),[s]),o.jsx(ar,{params:e,updateParams:a})};rn.createRoot(document.getElementById("root")).render(o.jsx(lr,{}));
