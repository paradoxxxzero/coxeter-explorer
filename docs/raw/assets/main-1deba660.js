import{c as W,P as C,s as S,i as Ae,a as V,m as P,e as De,b as Me,d as G,r as p,T as J,f as H,g as $,h as ie,t as U,l as Re,p as Pe,j as ae,k as X,n as z,o as K,u as I,q as $e,v as _e,w as Z,x as he,y as ee,z as Le,A as Be,B as c,C as ge,D as xe,E as Ue,F as Ve,N as M,G as ze,H as He,I as qe,J as ve,K as We,L as Xe,M as Ge,O as Ke}from"./CoxeterDiagram-e3e05c78.js";var Ze=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const Ye=(e,n)=>e.map((r,t)=>r.map((s,a)=>-W(n[t][a]*C/s))),be=e=>{const n=De(e).values;return{"+":n.filter(r=>r>0).length,"-":n.filter(r=>r<0).length,0:n.filter(r=>r===0).length}},we=(e,n=[],r=0,t=2)=>{n[r]=n[r]||[];for(let s=0;s<e.length;s++){const a=e.filter((o,i)=>i!==s).map(o=>o.filter((i,f)=>f!==s));n[r].push(be(a)),a.length>1&&r+1<t&&we(a,n,r+1)}return n},Je=e=>{const n=be(e);if(n["-"]===0&&n[0]===0)return"finite";if(n["-"]===0&&n[0]===1)return"affine";const r=we(e),t=r[0];if(t.every(s=>s["-"]===0&&s[0]===0))return"hyperbolic-compact";if(t.every(s=>s["-"]===0))return"hyperbolic-paracompact";for(let s=1;s<r.length;s++)if(r[s].every(o=>o["-"]===0))return"hyperbolic-lorentzian-level-"+(s+1);return"indefinite"},ce=(e,n,r)=>{let t=0;for(let s=0;s<e.length;s++)t+=e[s]*n[s]*(s===e.length-1&&r||1);return t},Ee=(e,n)=>ce(e,e,n),en=(e,n,r)=>{e=e.slice();const t=2*ce(e,n,r);for(let s=0;s<e.length;s++)e[s]-=t*(r||s!==e.length-1?n[s]:0);return e},ye=(e,n)=>{if(e=e.slice(),n===0){for(let t=0;t<e.length;t++)e[t]/=e[e.length-1];return e}const r=(n===-1&&Me(e[e.length-1])||1)/S(V(Ee(e,n)));for(let t=0;t<e.length;t++)e[t]*=r;return e},nn=e=>e.sort((n,r)=>{const[t,s]=n,[a,o]=r;return t===0&&s===1?1:a===0&&o===1||t<2&&a>=2?-1:a<2&&t>=2?1:t<2&&a<2?s===o?a-t:s-o:t===a?o-s:a-t}),ne=(e,n,r,t,s)=>{const a=G(t);if(n>r.length-1||V(e)>1)return a;const[o,i]=r[n],f=i===t-1&&s||1,l=S(1-f*e*e),d=e;return a[o][o]=l,a[i][i]=l,a[o][i]=-f*d,a[i][o]=d,a},rn=(e,n,r)=>{const t=n[0].length,s=new Array(t).fill().map(()=>new Array(t).fill(0));s[e][0]=1;for(let o=1;o<t;o++){const i=(o+e)%t;for(let f=0;f<o;f++){const l=(f+e)%t;s[i][f]=(n[i][l]-ce(s[i].slice(0,f),s[l].slice(0,f)))/s[l][f]}if(s[i][o]=S(V(1-Ee(s[i].slice(0,o)))),s[i][o]<1e-6&&o<t-1)return null}const a=(t-1+e)%t;return r===0?s[a][t-1]=.5:s[a][t-1]*=r,s},Te=(e,n,r=!1)=>{const t=e[0].length;let s=null;const a=e.every((o,i)=>o.every((f,l)=>f===(i===l?1:-1)));if(r||a){if(s=new Array(t).fill(0).map(()=>new Array(t).fill(0)),t===2){const o=(e[0][1]+1)/2;return s[0][0]=S(o-e[0][1]),s[1][0]=-S(o-e[0][1]),s[0][1]=s[1][1]=S((n||1)*o),n===0&&(s[1][1]=.5),s}else if(t===3){const o=e[0][1],i=e[1][2],f=e[0][2],l=(o*o+i*i+f*f-2*o*i*f-1)/(o*o+i*i+f*f-2*o*i-2*o*f-2*i*f+2*o+2*i+2*f-3);return s[0][2]=s[1][2]=s[2][2]=n*S(n*l),s[2][1]=-S(1-l),s[1][1]=(i-l)/s[2][1],s[0][1]=(f-l)/s[2][1],s[1][0]=-S(1-s[1][1]**2-l),s[0][0]=S(1-s[0][1]**2-l),n===0&&(s[2][2]=.5),s}else if(t===4){const o=e[0][1],i=e[1][2],f=e[2][3],l=e[0][2],d=e[1][3],u=e[0][3],v=(o*o*f*f+i*i*u*u+l*l*d*d-o*o-i*i-f*f-l*l-d*d-u*u+2*o*d*u+2*o*i*l+2*i*f*d+2*f*l*u-2*i*l*d*u-2*o*i*f*u-2*o*f*l*d+1)/(2*(o*o*f+i*i*u+f*f*o+l*l*d+d*d*l+u*u*i-o*o-i*i-f*f-l*l-d*d-u*u-o*i*f-o*i*u-o*f*l-o*f*d-o*f*u-o*l*d-i*f*u-i*l*d-i*l*u-i*d*u-f*l*d-l*d*u+o*i*l+o*d*u+i*f*d+f*l*u+o*i+o*l+o*d+o*u+i*f+i*l+i*d+f*l+f*d+f*u+l*u+d*u-o-i-f-l-d-u+2));return s[0][3]=s[1][3]=s[2][3]=s[3][3]=n*S(n*v),s[3][2]=-S(1-v),s[2][2]=(f-v)/s[3][2],s[1][2]=(d-v)/s[3][2],s[0][2]=(u-v)/s[3][2],s[2][1]=-S(1-v-s[2][2]**2),s[1][1]=(i-v-s[1][2]*s[2][2])/s[2][1],s[0][1]=(l-v-s[0][2]*s[2][2])/s[2][1],s[1][0]=-S(1-v-s[1][1]**2-s[1][2]**2),s[0][0]=S(1-v-s[0][1]**2-s[0][2]**2),n===0&&(s[3][3]=.5),s}if(a){const o=[0];for(let i=1;i<t;i++)o[i]=(o[i-1]+1)/(3-o[i-1]);s[0][0]=1,s[1][0]=-1,s[0][1]=S(o[1]),s[1][1]=S(o[1]);for(let i=0;i<t;i++)for(let f=0;f<t;f++)i<2&&f<2||(s[i][f]=f<i-1?0:f===i-1?-(i*S(o[f]-o[f-1])):f<t-1?S(o[f]-o[f-1]):S(o[f-1]));return s}}for(let o=0;o<t&&(s=rn(o,e,n),!s);o++);if(!s&&!r)return Te(e,n,!0);if(s&&r){const o=je(new Array(t).fill(1),s,n);if(n!==0){const i=ye(o.slice().map((f,l)=>l===t-1?f-1:f),n);for(let f=0;f<t;f++)s[f]=en(s[f],i,n)}}return s},je=(e,n,r)=>{let t=e.map(i=>isNaN(i)?1:+i),s=n.slice(),a;for(let i=0;i<t.length&&(a=Ae(s),a.some(f=>f.some(l=>isNaN(l)||V(l)>1e8)));i++){console.warn("Non invertible matrix, retrying by shifting mirrors"),s.push(s.shift()),t.push(t.shift());if(i===t.length-1)return console.warn("Non invertible matrix, returning default value"),[0,0,1]}const o=P(a,t);return o[o.length-1]*=r||1,ye(o,r)};class tn extends p.Component{componentDidCatch(n,r){this.props.onError(n,r)}render(){return this.props.error?null:this.props.children}}const re=(e,n)=>{let r;return(...t)=>(clearTimeout(r),r=setTimeout(()=>e(...t),n),()=>clearTimeout(r))};var Oe={exports:{}};(function(e,n){(function(r,t){e.exports=t()})(Ze,function(){var r=function(){function t(x){return o.appendChild(x.dom),x}function s(x){for(var b=0;b<o.children.length;b++)o.children[b].style.display=b===x?"block":"none";a=x}var a=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(x){x.preventDefault(),s(++a%o.children.length)},!1);var i=(performance||Date).now(),f=i,l=0,d=t(new r.Panel("FPS","#0ff","#002")),u=t(new r.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=t(new r.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:o,addPanel:t,showPanel:s,begin:function(){i=(performance||Date).now()},end:function(){l++;var x=(performance||Date).now();if(u.update(x-i,200),x>f+1e3&&(d.update(1e3*l/(x-f),100),f=x,l=0,v)){var b=performance.memory;v.update(b.usedJSHeapSize/1048576,b.jsHeapSizeLimit/1048576)}return x},update:function(){i=this.end()},domElement:o,setMode:s}};return r.Panel=function(t,s,a){var o=1/0,i=0,f=Math.round,l=f(window.devicePixelRatio||1),d=80*l,u=48*l,v=3*l,x=2*l,b=3*l,w=15*l,y=74*l,E=30*l,m=document.createElement("canvas");m.width=d,m.height=u,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*l+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=a,g.fillRect(0,0,d,u),g.fillStyle=s,g.fillText(t,v,x),g.fillRect(b,w,y,E),g.fillStyle=a,g.globalAlpha=.9,g.fillRect(b,w,y,E),{dom:m,update:function(O,A){o=Math.min(o,O),i=Math.max(i,O),g.fillStyle=a,g.globalAlpha=1,g.fillRect(0,0,d,w),g.fillStyle=s,g.fillText(f(O)+" "+t+" ("+f(o)+"-"+f(i)+")",v,x),g.drawImage(m,b+l,w,y-l,E,b,w,y-l,E),g.fillRect(b+y-l,w,l,E),g.fillStyle=a,g.globalAlpha=.9,g.fillRect(b+y-l,w,l,f((1-O/A)*E))}}},r})})(Oe);var sn=Oe.exports;const on=Qe(sn),an=({radius:e=1,widthSegments:n=16,segments:r=16}={})=>{const t=[],s=[],a=[],o=[];let i=0;const f=[];for(let l=0;l<=r;l++){const d=[],u=l/r;let v=0;l===0?v=.5/n:l===r&&(v=-.5/n);for(let x=0;x<=n;x++){const b=x/n,w=[-e*W(b*J)*H(u*C),e*W(u*C),e*H(b*J)*H(u*C)];s.push(...w);const y=(w[0]**2+w[1]**2+w[2]**2)**-.5;a.push(...w.map(E=>E*y)),o.push(b+v,1-u),d.push(i++)}f.push(d)}for(let l=0;l<r;l++)for(let d=0;d<n;d++){const u=f[l][d+1],v=f[l][d],x=f[l+1][d],b=f[l+1][d+1];l!==0&&t.push(u,v,b),l!==r-1&&t.push(v,x,b)}return{vertices:s,normals:a,uvs:o,indices:t}},cn=({radius:e=null,radiusTop:n=1,radiusBottom:r=1,height:t=1,radialSegments:s=8,segments:a=1}={})=>{const o=[],i=[],f=[],l=[];e!==null&&(n=e,r=e);let d=0;const u=[],v=t/2,x=(r-n)/t;for(let b=0;b<=a;b++){const w=[],y=b/a,E=y*(r-n)+n;for(let m=0;m<=s;m++){const g=m/s,O=g*J,A=H(O),D=W(O),k=[E*A,-y*t+v,E*D];i.push(...k);const _=[A,x,D],ke=(_[0]**2+_[1]**2+_[2]**2)**-.5;f.push(..._.map(Ce=>Ce*ke)),l.push(g,1-y),w.push(d++)}u.push(w)}for(let b=0;b<s;b++)for(let w=0;w<a;w++){const y=u[w][b],E=u[w+1][b],m=u[w+1][b+1],g=u[w][b+1];o.push(y,E,g),o.push(E,m,g)}return{vertices:i,normals:f,uvs:l,indices:o}},ln=({segments:e=3}={})=>{const n=[],r=[],t=[],s=[],a=1/e;for(let o=0;o<e+1;o++)for(let i=0;i<o+1;i++)r.push((2*i-o)*a/2,o*a,0),t.push(0,0,1),s.push(a*i,1-a*o);for(let o=1;o<e+1;o++)for(let i=0;i<o;i++){const f=o*(o+1)/2+i,l=o*(o-1)/2+i;if(n.push(l,f,f+1),o<e){const d=(o+1)*(o+2)/2+i;n.push(d+1,f,f+1)}}return{vertices:r,normals:t,uvs:s,indices:n}},fn=`#version 300 es
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
`,dn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,un=`#version 300 es
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
`,pn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,mn=`#version 300 es
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
`,hn=`#version 300 es
precision highp float;

#include config
#include globals

uniform mat4 viewProjection;
uniform float curvature;
uniform float thickness;
uniform float segments;

#if DIMENSIONS >= 4
uniform float fov4;
#endif
#if DIMENSIONS >= 5
uniform float fov5;
#endif
#if DIMENSIONS >= 6
uniform float fov6;
#endif
#if DIMENSIONS >= 7
uniform float fov7;
#endif
#if DIMENSIONS >= 8
uniform float fov8;
#endif
#if DIMENSIONS >= 9
uniform float fov9;
#endif

#if DIMENSIONS == 2
uniform mat2 matrix;
in vec2 position;
in vec2 target;
#elif DIMENSIONS == 3
uniform mat3 matrix;
in vec3 position;
in vec3 target;
#elif DIMENSIONS == 4
uniform mat4 matrix;
in vec4 position;
in vec4 target;
#elif DIMENSIONS >= 5
in mat3 position;
in mat3 target;

struct vec5 {
  vec4 v;
  float u;
};
#endif
#if DIMENSIONS >= 6
struct vec6 {
  vec4 v;
  vec2 u;
};
#endif
#if DIMENSIONS >= 7
struct vec7 {
  vec4 v;
  vec3 u;
};
#endif
#if DIMENSIONS >= 8
struct vec8 {
  vec4 v;
  vec4 u;
};
#endif
#if DIMENSIONS >= 9
struct vec9 {
  vec4 v;
  vec4 u;
  float t;
};
#endif
in vec2 uv;
in vec3 normal;

in vec3 color;

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include ease
#include project

void main() {
  #if DIMENSIONS > 4
  vecN iPosition = fromMat(position);
  vecN iTarget = fromMat(target);
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
`,gn=`#version 300 es
precision highp float;

#include config

uniform vec3 eye;

in vec3 vNormal;
in vec3 vPosition;
flat in vec3 vColor;

layout(location = 0) out vec4 accumColor;
layout(location = 1) out float accumAlpha;

float weight(float z, float a) {
  return clamp(pow(min(1.0f, a * 10.0f) + 0.01f, 3.0f) * 1e8f * pow(1.0f - z * 0.9f, 3.0f), 1e-2f, 3e3f);
}

#include lighting

void main() {
  vec4 color = light(vec4(vColor, .2f), .5f, 40.f);

  float w = weight(gl_FragCoord.z, color.a);
  accumColor = vec4(color.rgb * color.a * w, color.a);
  accumAlpha = color.a * w;
}
`,xn=`#version 300 es
precision highp float;

#include config
#include globals

uniform float curvature;
uniform mat4 viewProjection;
uniform float segments;

#if DIMENSIONS >= 4
uniform float fov4;
#endif
#if DIMENSIONS >= 5
uniform float fov5;
#endif
#if DIMENSIONS >= 6
uniform float fov6;
#endif
#if DIMENSIONS >= 7
uniform float fov7;
#endif
#if DIMENSIONS >= 8
uniform float fov8;
#endif
#if DIMENSIONS >= 9
uniform float fov9;
#endif

#if DIMENSIONS == 2
uniform mat2 matrix;
in vec2 position;
in vec2 target;
in vec2 center;
#elif DIMENSIONS == 3
uniform mat3 matrix;
in vec3 position;
in vec3 target;
in vec3 center;
#elif DIMENSIONS == 4
uniform mat4 matrix;
in vec4 position;
in vec4 target;
in vec4 center;
#elif DIMENSIONS >= 5
in mat3 position;
in mat3 target;
in mat3 center;

struct vec5 {
  vec4 v;
  float u;
};
#endif
#if DIMENSIONS >= 6
struct vec6 {
  vec4 v;
  vec2 u;
};
#endif
#if DIMENSIONS >= 7
struct vec7 {
  vec4 v;
  vec3 u;
};
#endif
#if DIMENSIONS >= 8
struct vec8 {
  vec4 v;
  vec4 u;
};
#endif
#if DIMENSIONS >= 9
struct vec9 {
  vec4 v;
  vec4 u;
  float t;
};
#endif

in vec2 uv;
in vec3 normal;

in vec3 color;

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include ease
#include project

void main() {
  #if DIMENSIONS > 4
  vecN iPosition = fromMat(position);
  vecN iTarget = fromMat(target);
  vecN iCenter = fromMat(center);
  #else
  vecN iPosition = matrix * position;
  vecN iTarget = matrix * target;
  vecN iCenter = matrix * center;
  #endif

  vec2 t = ease(uv);
  vecN pos = trix(iPosition, iCenter, iTarget, t);
  vecN next = trix(iPosition, iCenter, iTarget, t + vec2(EPS, 0.f));
  vecN other = trix(iPosition, iCenter, iTarget, t + vec2(0.f, EPS));

  if(length(t) != 0.f || segments > 1.f) {
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
`,vn=`#version 300 es
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
`,bn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,wn=`#version 300 es
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
`,En=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,yn=`#version 300 es
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
`,Tn=`#version 300 es
precision highp float;

#include config
#include globals

uniform float curvature;
uniform float thickness;
uniform mat4 viewProjection;

#if DIMENSIONS >= 4
uniform float fov4;
#endif
#if DIMENSIONS >= 5
uniform float fov5;
#endif
#if DIMENSIONS >= 6
uniform float fov6;
#endif
#if DIMENSIONS >= 7
uniform float fov7;
#endif
#if DIMENSIONS >= 8
uniform float fov8;
#endif
#if DIMENSIONS >= 9
uniform float fov9;
#endif

#if DIMENSIONS == 2
uniform mat2 matrix;
in vec2 position;
#elif DIMENSIONS == 3
uniform mat3 matrix;
in vec3 position;
#elif DIMENSIONS == 4
uniform mat4 matrix;
in vec4 position;
#elif DIMENSIONS >= 5
in mat3 position;

struct vec5 {
  vec4 v;
  float u;
};
#endif
#if DIMENSIONS >= 6
struct vec6 {
  vec4 v;
  vec2 u;
};
#endif
#if DIMENSIONS >= 7
struct vec7 {
  vec4 v;
  vec3 u;
};
#endif
#if DIMENSIONS >= 8
struct vec8 {
  vec4 v;
  vec4 u;
};
#endif
#if DIMENSIONS >= 9
struct vec9 {
  vec4 v;
  vec4 u;
  float t;
};
#endif

in vec2 uv;
in vec3 normal;

in vec3 color;

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include ease
#include project

void main() {
  #if DIMENSIONS > 4
  vecN pos = fromMat(position);
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
`;function Ne(e){const{gl:n}=e,r=$[e.ambiance];if(ie(e,e.rb.depth,n.DEPTH_COMPONENT24),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.opaque),ie(e,e.rb.opaque,n.RGBA8),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,e.rb.opaque),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,e.rb.depth),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.transparent),n.drawBuffers([n.COLOR_ATTACHMENT0,n.COLOR_ATTACHMENT1]),e.passes.oit.accumTexture&&n.deleteTexture(e.passes.oit.accumTexture.texture),e.passes.oit.accumTexture=U(e,n.RGBA16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.oit.accumTexture.texture,0),e.passes.oit.revealTexture&&n.deleteTexture(e.passes.oit.revealTexture.texture),e.passes.oit.revealTexture=U(e,n.R16F),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT1,n.TEXTURE_2D,e.passes.oit.revealTexture.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),e.passes.kawase.textures)for(let t=0;t<e.passes.kawase.textures.length;t++)n.deleteTexture(e.passes.kawase.textures[t].texture);e.passes.kawase.textures=[];for(let t=0;t<r.glow.steps;t++)e.passes.kawase.textures[t]=U(e,n.RGBA8,r.glow.pow**-t);e.passes.kawase.texture&&n.deleteTexture(e.passes.kawase.texture.texture),e.passes.kawase.texture=U(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.kawase.texture.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.bloom),e.passes.bloom.texture&&n.deleteTexture(e.passes.bloom.texture.texture),e.passes.bloom.texture=U(e,n.RGBA8),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.passes.bloom.texture.texture,0),n.bindFramebuffer(n.FRAMEBUFFER,null)}const Se=window.location.search.includes("stats");let q;Se&&(q=new on,q.dom.id="stats",document.body.appendChild(q.dom));const jn=e=>{if(document.getElementById("webgl2"))return console.error("WebGL already initialized"),e;const n=document.createElement("canvas");n.id="webgl2",document.body.appendChild(n);const r=n.getContext("webgl2",{antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:r},!r){console.error("Unable to initialize WebGL. Your browser may not support it.");return}r.getExtension("EXT_color_buffer_float"),r.enable(r.DEPTH_TEST);const t={zoom:1,fov:C/3,position:{z:2}},s={};t.update=()=>{const d=r.canvas.clientWidth/r.canvas.clientHeight,u=[0,0,t.position.z*t.zoom],v=Re(u,[0,0,0],[0,1,0]),x=Pe(t.fov,d,.001,1e3),b=ae(X(x,v));Object.values(s).forEach(w=>{w.uniforms.viewProjection.update(b),w.uniforms.eye.update(u)})};const a={kawase:{}};a.oit={attributes:{},uniforms:{},...z(e,"oit",bn,vn)},a.kawase.down={attributes:{},uniforms:{},...z(e,"kawase/down",pn,un)},a.kawase.up={attributes:{},uniforms:{},...z(e,"kawase/up",En,wn)},a.bloom={attributes:{},uniforms:{},...z(e,"bloom",dn,fn)};const o={};o.opaque=r.createRenderbuffer(),o.transparent=r.createRenderbuffer(),o.depth=r.createRenderbuffer();const i={};i.transparent=r.createFramebuffer(),i.opaque=r.createFramebuffer(),i.bloom=r.createFramebuffer(),i.kawase=r.createFramebuffer();const f=e.dimensions>4?9:e.dimensions,l={vertex:()=>an(),edge:d=>cn({segments:d}),face:d=>ln({segments:d})};return s.vertex=K(e,"vertex",Tn,yn,l.vertex,e.maxVertices,f),s.vertex.visible=e.showVertices,s.edge=K(e,"edge",hn,mn,l.edge,e.maxEdges,f,["position","target"]),s.edge.visible=e.showEdges,s.face=K(e,"face",xn,gn,l.face,e.maxFaces,f,["position","center","target"]),s.face.visible=e.showFaces,a.kawase.down.uniforms.screen=I(e,a.kawase.down.program,"screen","1i"),a.kawase.down.uniforms.offset=I(e,a.kawase.down.program,"offset","1f"),a.kawase.down.uniforms.screen.update(0),a.kawase.up.uniforms.screen=I(e,a.kawase.up.program,"screen","1i"),a.kawase.up.uniforms.offset=I(e,a.kawase.up.program,"offset","1f"),a.kawase.up.uniforms.screen.update(0),r.useProgram(a.bloom.program),a.bloom.uniforms.screen=I(e,a.bloom.program,"screen","1i"),a.bloom.uniforms.bloom=I(e,a.bloom.program,"bloom","1i"),a.bloom.uniforms.exposure=I(e,a.bloom.program,"exposure","1f"),a.bloom.uniforms.strength=I(e,a.bloom.program,"strength","1f"),a.bloom.uniforms.screen.update(0),a.bloom.uniforms.bloom.update(1),a.oit.uniforms.accum=I(e,a.oit.program,"accumTexture","1i"),a.oit.uniforms.accumAlpha=I(e,a.oit.program,"revealageTexture","1i"),a.oit.uniforms.accum.update(0),a.oit.uniforms.accumAlpha.update(1),t.update(),{...e,gl:r,camera:t,meshes:s,passes:a,rb:o,fb:i}},On=(e,n=null)=>{const{dimensions:r}=e,t=$[e.ambiance],s=e.meshes.vertex.attributes.position.data,a=e.meshes.vertex.attributes.color.data;let o=n?n[0]:0,i=n?n[1]:e.vertices.length;const f=r>4?9:r;e.meshes.vertex.count=i;for(let l=o;l<i;l++){let d=e.vertices[l].vertex;r>4&&(d=P(e.matrix,d));for(let v=0;v<r;v++)s[l*f+v]=d[v];const u=t.color(e.vertices[l],"vertex",r);a[l*3+0]=u[0],a[l*3+1]=u[1],a[l*3+2]=u[2]}e.meshes.vertex.attributes.position.update(),e.meshes.vertex.attributes.color.update()},Nn=(e,n=null)=>{const r=$[e.ambiance],t=e.meshes.edge.attributes.position.data,s=e.meshes.edge.attributes.target.data,a=e.meshes.edge.attributes.color.data,{dimensions:o}=e;let i=n?n[0]:0,f=n?n[1]:e.edges.length;const l=o>4?9:o;e.meshes.edge.count=f;for(let d=i;d<f;d++){const u=e.edges[d];let v=e.vertices[u.start].vertex,x=e.vertices[u.end].vertex;o>4&&(v=P(e.matrix,v),x=P(e.matrix,x));for(let w=0;w<o;w++)t[d*l+w]=v[w],s[d*l+w]=x[w];const b=r.color(u,"edge",o);a[d*3+0]=b[0],a[d*3+1]=b[1],a[d*3+2]=b[2]}e.meshes.edge.attributes.position.update(),e.meshes.edge.attributes.target.update(),e.meshes.edge.attributes.color.update()},Sn=(e,n=null)=>{const r=$[e.ambiance],t=e.meshes.face.attributes.position.data,s=e.meshes.face.attributes.target.data,a=e.meshes.face.attributes.center.data,o=e.meshes.face.attributes.color.data,{dimensions:i}=e;let f=n?n[0]:0,l=n?n[1]:e.faces.length,d=0;for(let v=0;v<f;v++){const x=e.faces[v].vertices.length;d+=x<3?0:x===3?1:x}const u=i>4?9:i;for(let v=f;v<l;v++){const x=e.faces[v];if(x.vertices.length<3)continue;let b;if(x.vertices.length===3)b=[[e.vertices[x.vertices[0]].vertex,e.vertices[x.vertices[1]].vertex,e.vertices[x.vertices[2]].vertex]],i>4&&(b[0][0]=P(e.matrix,b[0][0]),b[0][1]=P(e.matrix,b[0][1]),b[0][2]=P(e.matrix,b[0][2]));else{const w=new Array(x.vertices.length);for(let E=0;E<x.vertices.length;E++)w[E]=e.vertices[x.vertices[E]].vertex,i>4&&(w[E]=P(e.matrix,w[E]));const y=new Array(i).fill(0);for(let E=0;E<w.length;E++){const m=w[E];for(let g=0;g<i;g++)y[g]+=m[g]}for(let E=0;E<i;E++)y[E]/=w.length;b=new Array(w.length);for(let E=0;E<w.length;E++)b[E]=[y,w[E],w[(E+1)%w.length]]}for(let w=0;w<b.length;w++){let[y,E,m]=b[w];x.word.length%2===(e.curvature>0?0:1)&&([E,m]=[m,E]);for(let O=0;O<i;O++)a[d*u+O]=y[O],t[d*u+O]=E[O],s[d*u+O]=m[O];const g=r.color(x,"face",i);o[d*3+0]=g[0],o[d*3+1]=g[1],o[d*3+2]=g[2],d++}}e.meshes.face.count=d,e.meshes.face.attributes.position.update(),e.meshes.face.attributes.target.update(),e.meshes.face.attributes.center.update(),e.meshes.face.attributes.color.update()},Q=(e,n)=>{e.meshes[n].visible=e[n==="vertex"?"showVertices":n==="edge"?"showEdges":"showFaces"]},te=(e,n=null)=>{if(e.currentOrder===0||n===null&&e.ranges.length===0||n!==null&&n>=e.ranges.length)return;const r=n!==null?e.ranges[n]:{vertices:[e.ranges[0].vertices[0],e.ranges[e.currentOrder-1].vertices[1]],edges:[e.ranges[0].edges[0],e.ranges[e.currentOrder-1].edges[1]],faces:[e.ranges[0].faces[0],e.ranges[e.currentOrder-1].faces[1]]};e.meshes.vertex.visible&&(e.gl.useProgram(e.meshes.vertex.program),e.gl.bindVertexArray(e.meshes.vertex.vao),On(e,r.vertices)),e.meshes.edge.visible&&(e.gl.useProgram(e.meshes.edge.program),e.gl.bindVertexArray(e.meshes.edge.vao),Nn(e,r.edges)),e.meshes.face.visible&&(e.gl.useProgram(e.meshes.face.program),e.gl.bindVertexArray(e.meshes.face.vao),Sn(e,r.faces)),document.title=`Coxeter Explorer - ${e.spaceType==="finite"?"S":e.spaceType==="affine"?"E":"H"}^${e.dimensions} ${e.currentOrder<e.order?`(${e.currentOrder}/${e.order})…`:""}- ${e.vertices.length} vertices, ${e.edges.length} edges, ${e.faces.length} faces`},Fn=e=>{e.camera.fov=C*e.fov3/180,e.camera.update()},In=e=>{const n=$[e.ambiance];e.gl.clearColor(...n.background),n.glow&&(e.passes.bloom.uniforms.exposure.update(n.glow.exposure),e.passes.bloom.uniforms.strength.update(n.glow.strength),e.passes.kawase.down.uniforms.offset.update(n.glow.offset.down),e.passes.kawase.up.uniforms.offset.update(n.glow.offset.up))},kn=e=>{Object.values(e.meshes).forEach(n=>{n.recompile(e)})},Cn=e=>{const n=e.curve?e.segments:1;Object.entries(e.meshes).forEach(([r,t])=>{t.uniforms.curvature.update(e.curvature),e.dimensions<5&&t.uniforms.matrix.update(ae(e.matrix));for(let s=4;s<=e.dimensions;s++)t.uniforms[`fov${s}`].update($e(C*e[`fov${s}`]*.5/180));r==="vertex"?t.uniforms.thickness.update(e.vertexThickness):r==="edge"&&t.uniforms.thickness.update(e.edgeThickness),["edge","face"].includes(r)&&t.uniforms.segments.update(n)}),e.camera.update()},B=e=>{Se&&q.update();const{gl:n}=e,r=$[e.ambiance];if(_e(n.canvas)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),Ne(e),e.camera.update()),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.opaque),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),e.meshes.vertex.visible&&Z(e,"vertex"),e.meshes.edge.visible&&Z(e,"edge"),e.meshes.face.visible&&(n.enable(n.BLEND),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.transparent),n.clear(n.COLOR_BUFFER_BIT),Z(e,"face"),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.opaque),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.passes.oit.accumTexture.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.passes.oit.revealTexture.texture),n.drawArrays(n.TRIANGLES,0,3)),n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.opaque),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,r.glow?e.fb.bloom:null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST),r.glow){n.disable(n.BLEND),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.kawase.down.program);for(let t=0;t<r.glow.steps;t++){const s=t===0?e.passes.bloom.texture:e.passes.kawase.textures[t-1],a=e.passes.kawase.textures[t];n.viewport(0,0,a.width,a.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,s.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,a.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.kawase.up.program);for(let t=r.glow.steps-1;t>=0;t--){const s=e.passes.kawase.textures[t],a=t===0?e.passes.kawase.texture:e.passes.kawase.textures[t-1];n.viewport(0,0,a.width,a.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,s.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,a.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.passes.bloom.texture.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.passes.kawase.texture.texture),n.drawArrays(n.TRIANGLES,0,3)}},le=.95,fe=25,F=(e,n,r,t,s,a,o)=>{ee(s,X(ne(e,r*2+1,t.combinations,a,o),s)),ee(s,X(ne(n,r*2,t.combinations,a,o),s))},An=(e,n,r,t,s)=>{const{code:a}=e,o=.01;if(a==="ArrowLeft"||a==="KeyA")F(-o,0,0,n,r,t,s);else if(a==="ArrowRight"||a==="KeyD")F(o,0,0,n,r,t,s);else if(a==="ArrowUp"||a==="KeyW")F(0,-o,1,n,r,t,s);else if(a==="ArrowDown"||a==="KeyS")F(0,o,1,n,r,t,s);else if(a==="PageUp"||a==="KeyQ")F(-o,0,2,n,r,t,s);else if(a==="PageDown"||a==="KeyE")F(o,0,2,n,r,t,s);else if(a==="Digit1")F(0,-o,2,n,r,t,s);else if(a==="Digit3")F(0,o,2,n,r,t,s);else if(a==="KeyZ")F(-o,0,3,n,r,t,s);else if(a==="KeyC")F(o,0,3,n,r,t,s);else return;return!0},Dn=(e,n,r)=>{const t=p.useCallback(re(l=>r({matrix:l}),100),[]),s=p.useCallback(re(l=>r({zoom:l}),100),[]),a=p.useRef(null),o=p.useRef({pause:new Set,speed:null}),i=p.useRef(e.matrix.map(l=>l.slice()));p.useEffect(()=>{i.current=e.matrix.map(l=>l.slice())},[e.matrix]);const f=p.useCallback(()=>{e.dimensions>4?te({gl:e.gl,currentOrder:e.currentOrder,dimensions:e.dimensions,curvature:e.curvature,ranges:e.ranges,matrix:i.current,spaceType:e.spaceType,vertices:e.vertices,edges:e.edges,faces:e.faces,ambiance:e.ambiance,meshes:e.meshes}):Object.values(e.meshes).forEach(l=>{l.uniforms.matrix.update(ae(i.current))}),B(e)},[e.dimensions,e.curvature,e.ranges,e.meshes,e.currentOrder,e.spaceType,e.vertices,e.edges,e.faces,e.ambiance]);p.useEffect(()=>{o.current.speed=new Array(n.combinations.length).fill(0)},[n.combinations]),p.useEffect(()=>{he(e.matrix)&&(o.current.speed=new Array(n.combinations.length).fill(0))},[n.combinations.length,e.matrix]),p.useEffect(()=>{const l=()=>{const{pause:d,speed:u}=o.current;let v=!1;for(let x=0;x<u.length;x++)u[x]===0||n.auto==="damp"&&d.has(x)||(v=!0,n.auto==="damp"&&(u[x]*=.96,V(u[x])<1e-4&&(u[x]=0,t(i.current))),ee(i.current,X(ne(u[x],x,n.combinations,e.dimensions,e.curvature),i.current)));v&&f(),a.current!==null&&(a.current=requestAnimationFrame(l))};return n.auto&&(a.current=requestAnimationFrame(l)),()=>{a.current&&(cancelAnimationFrame(a.current),a.current=null),t(i.current)}},[n.auto,n.combinations,e.dimensions,e.curvature,t,f]),p.useEffect(()=>{e.camera.position.z=-e.zoom,e.camera.update()},[e.camera,e.zoom]),p.useEffect(()=>{const l=new Map;let d=null,u=null;const v=()=>{const y=l.values(),E=y.next().value,m=y.next().value;return Le(E[0]-m[0],E[1]-m[1])},x=y=>{y.button!==0||y.target.tagName!=="CANVAS"||(n.auto&&(u=performance.now(),o.current.pause.add(n.shift*2),o.current.pause.add(n.shift*2+1),o.current.speed[n.shift*2]=0,o.current.speed[n.shift*2+1]=0),l.set(y.pointerId,[y.clientX,y.clientY]))},b=y=>{if(!l.has(y.pointerId))return;let E=l.get(y.pointerId);const m=[-(y.clientX-E[0])/window.innerHeight,-(y.clientY-E[1])/window.innerHeight];if(n.auto){const O=performance.now(),A=O-u;u=O;const D=[fe*m[0]/A,fe*m[1]/A];o.current.speed[n.shift*2]=D[1],o.current.speed[n.shift*2+1]=D[0]}if(l.set(y.pointerId,[y.clientX,y.clientY]),l.size===2){if(d===null){d=v();return}const O=v();e.camera.position.z*=d/O,e.camera.update(),d=O,B(e),s(-e.camera.position.z);return}let g=n.shift;!g&&y.shiftKey?g=1:!g&&y.altKey?g=2:!g&&y.ctrKey?g=3:!g&&y.metaKey&&(g=4),l.size>2&&(g+=l.size-2),F(C*m[0],C*m[1],g,{combinations:n.combinations,auto:n.auto,shift:n.shift},i.current,e.dimensions,e.curvature),f(),t(i.current)},w=y=>{l.has(y.pointerId)&&(n.auto&&(performance.now()-u>100?(o.current.speed[n.shift*2]=0,o.current.speed[n.shift*2+1]=0):n.auto==="free"&&(o.current.speed[n.shift*2]*=.5,o.current.speed[n.shift*2+1]*=.5),o.current.pause.delete(n.shift*2),o.current.pause.delete(n.shift*2+1)),d=null,l.delete(y.pointerId))};return document.addEventListener("pointerdown",x),document.addEventListener("pointermove",b),document.addEventListener("pointerup",w),()=>{document.removeEventListener("pointerdown",x),document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",w)}},[n.auto,n.combinations,n.shift,e.dimensions,e.curvature,e.camera,f,t,s]),p.useEffect(()=>{const l=d=>{d.target===document.body&&An(d,{combinations:n.combinations,auto:n.auto,shift:n.shift},i.current,e.dimensions,e.curvature)&&(f(),t(i.current))};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[f,n.auto,n.combinations,n.shift,e.curvature,e.dimensions,t]),p.useEffect(()=>{const l=d=>{d.target.tagName==="CANVAS"&&(e.camera.position.z*=d.deltaY<0?le:1/le,e.camera.update(),B(e),s(-e.camera.position.z))};return document.addEventListener("wheel",l),()=>{document.removeEventListener("wheel",l)}},[e,s]),p.useEffect(()=>{const l=d=>{if(d.button!==0||d.target.tagName!=="CANVAS")return;const u=-e.camera.position.z,v=u<.5?5:u<2?.25:1;e.camera.position.z=-v,e.camera.update(),B(e),s(v)};return document.addEventListener("dblclick",l),()=>{document.removeEventListener("dblclick",l)}},[e,s])};function Mn({runtime:e,rotations:n,updateParams:r}){return Dn(e,n,r),null}const Rn=(e,n)=>{p.useEffect(()=>{n(r=>(Fn(r),r))},[e.fov3,e.camera,n]),p.useEffect(()=>{n(r=>(Object.values(r.meshes).forEach(t=>{t.updateGeometry(r)}),r))},[e.dimensions,e.curve,e.segments,n]),p.useEffect(()=>{n(r=>(r.vertices.length&&(console.warn(`Extending vertex buffer to ${r.maxVertices}`),r.meshes.vertex.extendAttributes(r,r.maxVertices)),r))},[e.maxVertices,n]),p.useEffect(()=>{n(r=>(r.edges.length&&(console.warn(`Extending edge buffer to ${r.maxEdges}`),r.meshes.edge.extendAttributes(r,r.maxEdges)),r))},[e.maxEdges,n]),p.useEffect(()=>{n(r=>(r.faces.length&&(console.warn(`Extending edge buffer to ${r.maxFaces}`),r.meshes.face.extendAttributes(r,r.maxFaces)),r))},[e.maxFaces,n]),p.useEffect(()=>{n(r=>(r.meshes.vertex.extendAttributes(r,r.maxVertices),r.meshes.edge.extendAttributes(r,r.maxEdges),r.meshes.face.extendAttributes(r,r.maxFaces),r))},[e.dimensions,n]),p.useEffect(()=>{n(r=>(In(r),r))},[e.ambiance,e.msaa,e.msaaSamples,n]),p.useEffect(()=>{n(r=>(Ne(r),r))},[e.ambiance,e.msaa,e.msaaSamples,n]),p.useEffect(()=>{n(r=>(Q(r,"vertex"),Q(r,"edge"),Q(r,"face"),r))},[e.showVertices,e.showEdges,e.showFaces,n]),p.useEffect(()=>{n(r=>{if(!(r.currentOrder<0))return te(r,r.currentOrder-1),r})},[e.currentOrder,e.vertices,e.edges,e.ranges,e.showVertices,e.showEdges,e.showFaces,n]),p.useEffect(()=>{n(r=>(kn(r),r))},[e.ambiance,e.spaceType,e.easing,e.projection,e.dimensions,n]),p.useEffect(()=>{n(r=>(te(r),r))},[e.ambiance,e.showVertices,e.showEdges,e.showFaces,e.maxVertices,e.maxEdges,e.curve,e.segments,e.matrix,n]),p.useEffect(()=>{n(r=>(Cn(r),r))},[e.ambiance,e.spaceType,e.easing,e.projection,e.dimensions,e.ambiance,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.vertexThickness,e.edgeThickness,e.curvature,e.curve,e.segments,e.maxVertices,e.maxEdges,e.matrix,n]),p.useEffect(()=>{n(r=>(B(r),r))},[e,n]),p.useEffect(()=>{const r=new ResizeObserver(()=>B(e));return r.observe(e.gl.canvas,{box:"content-box"}),()=>r.disconnect()},[e])};function Pn({runtime:e,setRuntime:n}){return Rn(e,n),null}function $n(){return new Worker(""+new URL("knuthbendix-tiling.worker-dbafa931.js",import.meta.url).href)}function _n(){return new Worker(""+new URL("toddcoxeter-tiling.worker-6f68cc6a.js",import.meta.url).href)}function Ln(){return new Worker(""+new URL("fundamental.worker-575cdf7f.js",import.meta.url).href)}let Y=class Fe{constructor(n,r){this.workerClass=r,this.name=n,this.init(),this.times={}}static uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const r=Math.random()*16|0;return(n==="x"?r:r&3|8).toString(16)})}init(){this.processing=0,this.worker=new this.workerClass}kill(){this.processing>0&&(console.debug(`Killing worker ${this.name} (${this.processing})`),this.worker.terminate(),this.init())}process(n){return n.uuid=Fe.uuid4(),this.processing++,this.times[n.uuid]=performance.now(),this.worker.postMessage(n),new Promise((r,t)=>{const s=o=>{if(o.data.uuid!==n.uuid)return;const i=performance.now()-this.times[n.uuid];if(delete this.times[n.uuid],console.debug(`Worker ${this.name} took ${i}ms`),this.processing--,this.worker.removeEventListener("message",s),this.worker.removeEventListener("error",a),o.data.error){t(o.data.error);return}r(o.data)},a=o=>{this.worker.removeEventListener("message",s),this.worker.removeEventListener("error",a),!(this.processing<=0)&&(delete this.times[n.uuid],this.processing--,this.processing=Be(0,this.processing),console.error(`Can't call web worker ${this.name}`,o))};this.worker.addEventListener("message",s),this.worker.addEventListener("error",a)})}};const Bn=()=>Object.values(Ie).filter(e=>e.processing>0).forEach(e=>e.kill()),Ie={knuthbendix:new Y("knuthbendix",$n),toddcoxeter:new Y("toddcoxeter",_n),fundamental:new Y("toddcoxeter",Ln)},de=async(e,n,r)=>{const t=Ie[e.grouper.replace(/^auto-/,"")];if(e.currentOrder===0&&(Bn(),n.current=!1),n.current===e.currentOrder){console.log("already processing at ",e.currentOrder);return}try{n.current=e.currentOrder;const{vertices:s,edges:a,faces:o,order:i}=await t.process({order:e.currentOrder,coxeter:e.coxeter,curvature:e.curvature,stellation:e.stellation,mirrors:e.mirrors,mirrorsPlanes:e.mirrorsPlanes,rootVertex:e.rootVertex,dimensions:e.dimensions});n.current=!1,r(f=>f.currentOrder!==i?(console.warn("Mismatched order, ignoring",f.currentOrder,i),{...f,currentOrder:0,vertices:[],edges:[],faces:[],ranges:[],renderError:null,processing:!0,error:"Mismatch Order"}):{...f,ranges:[...f.ranges,{vertices:[f.vertices.length,f.vertices.length+s.length],edges:[f.edges.length,f.edges.length+a.length],faces:[f.faces.length,f.faces.length+o.length]}],vertices:f.vertices.concat(s),edges:f.edges.concat(a),faces:f.faces.concat(o),currentOrder:i+1,processing:!1,error:null})}catch(s){n.current=!1,console.error(s);const a={...e,currentOrder:e.order,error:s.message,processing:!1};r(a)}},Un=(e,n)=>{const r=p.useRef(!1);p.useEffect(()=>{n(t=>t.order<t.currentOrder?{...t,currentOrder:t.order}:t)},[e.order,e.currentOrder,n]),p.useEffect(()=>{n(t=>{const s=Ye(t.coxeter,t.stellation),a=Je(s);if(!a)return{...t,spaceType:a};const o=a==="finite"?1:a==="affine"?0:-1,i=t.grouper===""||t.grouper.startsWith("auto-")?"auto-toddcoxeter":t.grouper,f=Te(s,o,t.centered===null?i.replace(/^auto-/,"")==="toddcoxeter"&&o<=0||s.some(u=>u.some(v=>v===-1)):t.centered),l=je(t.mirrors,f,o),d={...t,currentOrder:0,grouper:i,vertices:[],edges:[],faces:[],ranges:[],spaceType:a,curvature:o,mirrorsPlanes:f,rootVertex:l,renderError:null,processing:!0,error:null};return de(d,r,n),d})},[e.dimensions,e.coxeter,e.mirrors,e.stellation,e.centered,e.grouper,n]),p.useEffect(()=>{n(t=>{var s;return t.order<=t.currentOrder?t:(s=t.ranges)!=null&&s[t.order]?{...t,currentOrder:t.order,askedOrder:null}:(de(t,r,n),{...t,error:null,processing:!0})})},[n,e.order,e.currentOrder]),p.useEffect(()=>{n(t=>t.vertices.length>t.maxVertices?{...t,maxVertices:t.vertices.length}:t)},[e.vertices,n]),p.useEffect(()=>{n(t=>t.edges.length>t.maxEdges?{...t,maxEdges:t.edges.length}:t)},[e.edges,n]),p.useEffect(()=>{n(t=>{let s=0;for(let a=0;a<t.faces.length;a++){const o=t.faces[a].vertices.length;s+=o===3?1:o}return s>t.maxFaces?{...t,maxFaces:s}:t})},[e.faces,n])};function Vn({runtime:e,setRuntime:n}){return Un(e,n),null}function zn({runtime:e,setRuntime:n,rotations:r,updateParams:t}){window.rt=e;const s=p.useCallback(a=>{n(o=>({...o,renderError:a.message}))},[n]);return p.useEffect(()=>()=>{e.curvature!==null&&t({matrix:G(e.dimensions)})},[e.curvature]),c.jsx(c.Fragment,{children:c.jsxs(tn,{error:e.renderError,onError:s,children:[c.jsx(Vn,{runtime:e,setRuntime:n}),c.jsx(Pn,{runtime:e,setRuntime:n}),c.jsx(Mn,{runtime:e,rotations:r,updateParams:t})]})})}const Hn="modulepreload",qn=function(e,n){return new URL(e,n).href},ue={},Wn=function(n,r,t){if(!r||r.length===0)return n();const s=document.getElementsByTagName("link");return Promise.all(r.map(a=>{if(a=qn(a,t),a in ue)return;ue[a]=!0;const o=a.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(!!t)for(let d=s.length-1;d>=0;d--){const u=s[d];if(u.href===a&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${i}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Hn,o||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),o)return new Promise((d,u)=>{l.addEventListener("load",d),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>n()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})};function pe({allowNull:e,name:n,value:r,onChange:t,...s}){const a=p.useCallback(i=>{let{name:f,checked:l}=i.target,d;e?d=r===!1?!0:r?null:!1:d=l,t(f,d)},[e,t,r]),o=p.useRef(null);return p.useLayoutEffect(()=>{e&&o.current&&(r===null?o.current.indeterminate=!0:o.current.indeterminate=!1)},[r,e]),c.jsx("input",{type:"checkbox",ref:o,name:n,checked:r||!1,onChange:a})}function N({type:e,dimensions:n}){return c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"space",children:e===null||e==="indefinite"?"𝕏":e==="affine"?"𝔼":e==="finite"?"𝕊":"ℍ"}),n?c.jsx("sup",{children:n-1}):null,e!=null&&e.startsWith("hyperbolic")?c.jsx("sub",{children:{compact:" ",paracompact:"*"}[e.replace(/^hyperbolic-/,"")]||(e.startsWith("hyperbolic-lorentzian")?`L${e.replace(/^hyperbolic-lorentzian-level-/,"")}`:null)}):null]})}const Xn=(...e)=>{if(Array.isArray(e[0]))return{coxeter:e,dimensions:e.length,extended:!0};const n=e.length+1;return{coxeter:new Array(n).fill().map((t,s)=>new Array(n).fill().map((a,o)=>s===o?1:s===o+1||o===s+1?e[xe(s,o)]:2)),dimensions:n}},Gn=(...e)=>{const n=e.length+1;return{stellation:new Array(n).fill().map((t,s)=>new Array(n).fill().map((a,o)=>s===o?1:s===o+1||o===s+1?e[xe(s,o)]:1))}},h=(e,n,r,t)=>{const s=Xn(...e),{dimensions:a}=s,o={...ge,...s,showVertices:a<=3,showFaces:a<=4,curve:a>3,grouper:"toddcoxeter",ambiance:"colorful",matrix:G(a),zoom:a<=3?2:a>4?3:5,...t||{}};if(n?o.mirrors=n:o.mirrors=new Array(a).fill().map((i,f)=>f===0?1:0),r?o.stellation=Gn(...r).stellation:o.stellation=new Array(a).fill().map((i,f)=>new Array(a).fill(1)),a>4)for(let i=4;i<=a;i++)o[`fov${i}`]=(10-i)*10;return o},T=(e,n,r,t)=>({...h(e,n,r),ambiance:"plain",showVertices:!1,curve:!0,zoom:1,...t}),R=(e,n,r,t)=>({...h(e,n,r),ambiance:"neon",showFaces:!1,showVertices:!1,grouper:"",edgeThickness:10,zoom:2,...t}),j=(e,n,r,t)=>({...h(e,n,r),ambiance:"neon",showFaces:!1,showVertices:!1,curve:!0,grouper:"",edgeThickness:10,zoom:1.5,...t}),L=e=>{if(e===4)return{"":[1,0,0,0],Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1]};if(e===5)return{"":[1,0,0,0,0],Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1]};if(e===6)return{"":[1,0,0,0,0,0],Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(e===7)return{"":[1,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(e===8)return{"":[1,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(e===9)return{"":[1,0,0,0,0,0,0,0,0],Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},Kn=[{type:"title",content:c.jsxs(c.Fragment,{children:[c.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"finite",dimensions:4})," Tesseract"]}),params:h([4,3,3],[1,0,0,0],null,{showVertices:!0,vertexThickness:150,showFaces:!0,curve:!0,ambiance:"neon",centered:!1,zoom:4.2})},{name:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic",dimensions:3})," 7-3-2 tiling"]}),params:T([7,3],[1,0,0],null,{showVertices:!1,showFaces:!0,curve:!0,ambiance:"neon"})},{name:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic",dimensions:3})," Ideal triangles"]}),params:T([[1,1/0,1/0],[1/0,1,1/0],[1/0,1/0,1]],[1,1,1],null,{grouper:"fundamental",showVertices:!1,showFaces:!0,curve:!0,segments:64,easing:"quartic",ambiance:"neon"})},{name:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic",dimensions:4})," Ideal tetrahedron"]}),params:T([3,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:64,easing:"quartic",ambiance:"pure"})},{name:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic",dimensions:4})," Horoball"]}),params:T([6,3,4],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:20,centered:!1,ambiance:"colorful"})},{name:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic",dimensions:4})," 5-3-4 honeycomb"]}),params:j([5,3,4],[1,0,0,0],null,{zoom:1.5})},{name:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic",dimensions:4})," 7-3-3 paracompact honeycomb"]}),params:j([7,3,3],[1,0,0,0],null,{zoom:1.5,showFaces:!0,showVertices:!0,segments:16})},{name:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic",dimensions:4})," Ideal Pentahedron"]}),params:T([5,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,order:1,centered:!1,segments:32,easing:"quartic",ambiance:"pure",zoom:1.5})},{name:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"finite",dimensions:4})," Flat Torus"]}),params:h([32,2,32],[1,0,0,1],null,{showVertices:!1,showFaces:!1,curve:!0,ambiance:"neon",zoom:3,edgeThickness:5})},{type:"title",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"finite"})," Spherical space"]})},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Tetrahedron",params:h([3,3])},{name:"Cube",params:h([4,3])},{name:"Octahedron",params:h([3,4])},{name:"Dodecahedron",params:h([5,3])},{name:"Icosahedron",params:h([3,5])},{name:"Cuboctahedron",params:h([4,3],[0,1,0])},{name:"Icosidodecahedron",params:h([5,3],[0,1,0])},{name:"Truncated Tetrahedron",params:h([3,3],[1,1,0])},{name:"Truncated Cube",params:h([4,3],[1,1,0])},{name:"Truncate Octahedron",params:h([3,4],[1,1,0])},{name:"Truncate Dodecahedron",params:h([5,3],[1,1,0])},{name:"Truncate Icosahedron",params:h([3,5],[1,1,0])},{name:"Rhombicuboctahedron",params:h([4,3],[1,0,1])},{name:"Rhombicosidodecahedron",params:h([5,3],[1,0,1])},{name:"Truncated Cuboctahedron",params:h([4,3],[1,1,1])},{name:"Truncated Icosidodecahedron",params:h([5,3],[1,1,1])},{name:"Snub Cube",params:h([4,3],["s","s","s"])},{name:"Snub Dodecahedron",params:h([5,3],["s","s","s"])},{name:"Great Dodecahedron",params:h([5,5],[1,0,0],[1,2])},{name:"Great Icosahedron",params:h([3,5],[1,0,0],[1,2])},{name:"Small Stellated Dodecahedron",params:h([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:h([5,3],[1,0,0],[2,1])},{name:"Stellated Octahedron",params:h([2,2],["ß","ß","ß"])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"finite",dimensions:4})," Polychora"]})},...Object.entries(L(4)).map(([e,n])=>[{name:`${e?`${e} `:""}5-cell`,params:h([3,3,3],n)},{name:`${e?`${e} `:""}8-cell`,params:h([4,3,3],n)},{name:`${e?`${e} `:""}16-cell`,params:h([3,3,4],n)},{name:`${e?`${e} `:""}24-cell`,params:h([3,4,3],n)},{name:`${e?`${e} `:""}120-cell`,params:h([5,3,3],n)},{name:`${e?`${e} `:""}600-cell`,params:h([3,3,5],n)}]).flat(),{name:"Snub 24-cell",params:h([3,4,3],["s","s",0,0])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"finite",dimensions:5})," Polytera"]})},...Object.entries(L(5)).map(([e,n])=>[{name:`${e?`${e} `:""}5-simplex`,params:h([3,3,3,3],n)},{name:`${e?`${e} `:""}5-cube`,params:h([4,3,3,3],n)},{name:`${e?`${e} `:""}5-orthoplex`,params:h([3,3,3,4],n)},{name:`${e?`${e} `:""}5-demicube`,params:h([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]],n)}]).flat(),{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"finite",dimensions:6})," Polypeta"]})},...Object.entries(L(6)).map(([e,n])=>[{name:`${e?`${e} `:""}6-simplex`,params:h([3,3,3,3,3],n)},{name:`${e?`${e} `:""}6-cube`,params:h([4,3,3,3,3],n)},{name:`${e?`${e} `:""}6-orthoplex`,params:h([3,3,3,3,4],n)},{name:`${e?`${e} `:""}6-demicube`,params:h([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]],n)}]).flat(),{name:c.jsxs(c.Fragment,{children:["2",c.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:c.jsxs(c.Fragment,{children:["1",c.jsx("sub",{children:"22"})]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"finite",dimensions:7})," Polyexa"]})},...Object.entries(L(7)).map(([e,n])=>[{name:`${e?`${e} `:""}7-simplex`,params:h([3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}7-cube`,params:h([4,3,3,3,3,3],n)},{name:`${e?`${e} `:""}7-orthoplex`,params:h([3,3,3,3,3,4],n)},{name:`${e?`${e} `:""}7-demicube`,params:h([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]],n)}]).flat(),{name:c.jsxs(c.Fragment,{children:["3",c.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:c.jsxs(c.Fragment,{children:["2",c.jsx("sub",{children:"31"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:c.jsxs(c.Fragment,{children:["1",c.jsx("sub",{children:"32"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"finite",dimensions:8})," Polyzetta"]})},...Object.entries(L(8)).map(([e,n])=>[{name:`${e?`${e} `:""}8-simplex`,params:h([3,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}8-cube`,params:h([4,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}8-orthoplex`,params:h([3,3,3,3,3,3,4],n)},{name:`${e?`${e} `:""}8-demicube`,params:h([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],n)}]).flat(),{name:c.jsxs(c.Fragment,{children:["1",c.jsx("sub",{children:"42"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,1,0,0,0,0,0])},{name:c.jsxs(c.Fragment,{children:["2",c.jsx("sub",{children:"41"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:c.jsxs(c.Fragment,{children:["4",c.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"finite",dimensions:9}),"Polyyotta"]})},...Object.entries(L(9)).map(([e,n])=>[{name:`${e?`${e} `:""}9-simplex`,params:h([3,3,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}9-cube`,params:h([4,3,3,3,3,3,3,3],n)},{name:`${e?`${e} `:""}9-orthoplex`,params:h([3,3,3,3,3,3,3,4],n)},{name:`${e?`${e} `:""}9-demicube`,params:h([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],n)}]).flat(),{type:"title",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"affine"})," Euclidean space"]})},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:h([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:h([4,4],[1,0,0])},{name:"Hexagonal",params:h([6,3],[1,0,0])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:R([4,3,4],[1,0,0,0])},{name:"Octet",params:R([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter cubic",params:R([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:R([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:R([3,3,4,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"24-cellic",params:R([3,4,3,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"4-simpletic",params:R([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter tesseractic",params:R([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0],null,{grouper:"toddcoxeter"})},{type:"title",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic"})," Hyperbolic space"]})},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic",dimensions:3})," Tilings"]})},{name:"Order-7 triangular",params:T([3,7],[1,0,0])},{name:"Order-8 triangular",params:T([3,8],[1,0,0])},{name:"Infinite Order triangular",params:T([3,1/0],[1,0,0])},{name:"Order-5 square",params:T([4,5],[1,0,0])},{name:"Order-6 square",params:T([4,6],[1,0,0])},{name:"Order-7 square",params:T([4,7],[1,0,0])},{name:"Order-8 square",params:T([4,8],[1,0,0])},{name:"Infinite Order square",params:T([4,1/0],[1,0,0])},{name:"Order-4 pentagonal",params:T([5,4],[1,0,0])},{name:"Order-5 pentagonal",params:T([5,5],[1,0,0])},{name:"Order-6 pentagonal",params:T([5,6],[1,0,0])},{name:"Order-7 pentagonal",params:T([5,7],[1,0,0])},{name:"Order-8 pentagonal",params:T([5,8],[1,0,0])},{name:"Infinite Order pentagonal",params:T([5,1/0],[1,0,0])},{name:"Order-4 hexagonal",params:T([6,4],[1,0,0])},{name:"Order-5 hexagonal",params:T([6,5],[1,0,0])},{name:"Order-6 hexagonal",params:T([6,6],[1,0,0])},{name:"Order-7 hexagonal",params:T([6,7],[1,0,0])},{name:"Order-8 hexagonal",params:T([6,8],[1,0,0])},{name:"Infinite Order hexagonal",params:T([6,1/0],[1,0,0])},{name:"Order-3 heptagonal",params:T([7,3],[1,0,0])},{name:"Order-4 heptagonal",params:T([7,4],[1,0,0])},{name:"Order-5 heptagonal",params:T([7,5],[1,0,0])},{name:"Order-6 heptagonal",params:T([7,6],[1,0,0])},{name:"Order-7 heptagonal",params:T([7,7],[1,0,0])},{name:"Order-8 heptagonal",params:T([7,8],[1,0,0])},{name:"Infinite Order heptagonal",params:T([7,1/0],[1,0,0])},{name:"Order-3 octagonal",params:T([8,3],[1,0,0])},{name:"Order-4 octagonal",params:T([8,4],[1,0,0])},{name:"Order-5 octagonal",params:T([8,5],[1,0,0])},{name:"Order-6 octagonal",params:T([8,6],[1,0,0])},{name:"Order-7 octagonal",params:T([8,7],[1,0,0])},{name:"Order-8 octagonal",params:T([8,8],[1,0,0])},{name:"Infinite Order octagonal",params:T([8,1/0],[1,0,0])},{name:"Order-3 apeirogonal",params:T([1/0,3],[1,0,0])},{name:"Order-4 apeirogonal",params:T([1/0,4],[1,0,0])},{name:"Order-5 apeirogonal",params:T([1/0,5],[1,0,0])},{name:"Order-6 apeirogonal",params:T([1/0,6],[1,0,0])},{name:"Order-7 apeirogonal",params:T([1/0,7],[1,0,0])},{name:"Order-8 apeirogonal",params:T([1/0,8],[1,0,0])},{name:"Infinite Order apeirogonal",params:T([1/0,1/0],[1,0,0])},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic-compact",dimensions:4})," Honeycombs compacts"]})},{name:"Icosahedral",params:j([3,5,3],[1,0,0,0])},{name:"Order-4 dodecahedral",params:j([5,3,4],[1,0,0,0])},{name:"Order-5 dodecahedral",params:j([5,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 cubic",params:j([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral cubic",params:j([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral dodecahedral",params:j([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic octahedral",params:j([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Dodcahedral",params:j([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Icosahedral",params:j([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic-paracompact",dimensions:4})," Honeycombs paracompacts"]})},{name:"Triangular",params:j([3,6,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:j([6,3,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 tetrahedral",params:j([3,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-6 cubic",params:j([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-5 hexagonal",params:j([6,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 hexagonal",params:j([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 hexagonal",params:j([6,3,6],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Square",params:j([4,4,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated square",params:j([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-4 square",params:j([4,4,4],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral square",params:j([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic square",params:j([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter order square",params:j([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral Hexagonal",params:j([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Hexagonal",params:j([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Icosahedral Hexagonal",params:j([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal Triangular",params:j([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Hexagonal",params:j([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-4 Hexagonal",params:j([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 Hexagonal",params:j([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Runcic Order-6 Hexagonal",params:j([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],null,{grouper:"toddcoxeter"})},{name:"Quarter Order-4 hexagonal",params:j([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:j([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],null,{grouper:"toddcoxeter"})},{type:"group",content:c.jsxs(c.Fragment,{children:[c.jsx(N,{type:"hyperbolic-lorentzian-level-2",dimensions:4})," Honeycombs lorentzians"]})},{name:"3-3-7",params:j([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-4-7",params:j([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"3-5-7",params:j([3,5,7],[1,0,0,0],null,{grouper:"toddcoxeter"})}],Zn=p.memo(function({name:n,params:r,onPreset:t}){return c.jsxs("div",{className:"preset",onClick:()=>t(r),children:[c.jsx("span",{className:"preset-name",children:n}),c.jsx(Ue,{coxeter:r.coxeter,mirrors:r.mirrors,stellation:r.stellation})]})}),Qn=c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:c.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),Yn=c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:c.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),Jn=c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:c.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),er=c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:c.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),se=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(se).join("");if(typeof e=="object"&&e)return se(e.props.children)};function nr({open:e,onPreset:n,onExportImage:r,closePresets:t}){const[s,a]=p.useState(""),[o,i]=p.useState(""),f=p.useCallback(l=>{i(l.target.value),re(a(l.target.value),50)},[]);return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:`presets-overlay ${e?"shown":"hidden"}`,onClick:t}),c.jsx("div",{className:`presets ${e?"shown":"hidden"}`,children:c.jsxs("div",{className:"presets-modal",children:[c.jsxs("div",{className:"presets-header",children:[c.jsxs("div",{className:"presets-search",children:[c.jsx("input",{type:"text",placeholder:"Search",value:o,onChange:f}),c.jsx("button",{className:"presets-clear",onClick:()=>{a(""),i("")},children:Qn})]}),c.jsxs("div",{className:"presets-actions",children:[c.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:Yn}),c.jsx("button",{className:"presets-action",onClick:r,children:Jn}),c.jsx("button",{className:"presets-action",onClick:t,children:er})]})]}),c.jsx("div",{className:"presets-list",children:Kn.map(({type:l,content:d,name:u,params:v},x)=>c.jsx(p.Fragment,{children:l==="title"?c.jsx("h2",{children:d}):l==="group"?c.jsx("h4",{children:d}):!s||se(u).toLowerCase().includes(s.toLowerCase())?c.jsx(Zn,{name:u,params:v,search:s,onPreset:n}):null},x))})]})})]})}function rr({runtime:e,params:n,rotations:r,updateParams:t,updateRotations:s}){const[a,o]=p.useState("simple"),[i,f]=p.useState(!1),l=p.useCallback(()=>{f(!1)},[]),d=p.useCallback(m=>{let{name:g,value:O}=m.target;t({[g]:O})},[t]),u=p.useCallback((m,g)=>{t({[m]:g})},[t]),v=p.useCallback(()=>o(m=>({simple:"advanced",advanced:"full",full:"empty",empty:"simple"})[m]),[]),x=p.useCallback(m=>{t(m),l()},[t,l]),b=p.useCallback(()=>{t({matrix:G(e.dimensions)})},[t,e.dimensions]),w=p.useCallback(m=>{s("shift",(r.shift+1)%r.maxShift)},[r.maxShift,r.shift,s]),y=p.useCallback(m=>{s("auto",r.auto==="free"?"damp":"free")},[r.auto,s]),E=p.useCallback(async()=>{const m=window.prompt("Select image resolution","5000x5000");if(!m||!m.includes("x")){console.error("Invalid resolution");return}const[g,O]=m.split("x").map(k=>parseInt(k));if(isNaN(g)||isNaN(O)){console.error("Invalid resolution");return}const D=await(await Wn(()=>import("./export-902100eb.js"),[],import.meta.url)).makeBigPng(e,g,O);if(D){const k=document.createElement("a");document.body.appendChild(k),k.style.display="none";const _=window.URL.createObjectURL(D);k.href=_,k.download=`${document.title}-${g}x${O}`,k.click()}},[e]);return c.jsxs(c.Fragment,{children:[c.jsx(nr,{open:i,onPreset:x,onExportImage:E,closePresets:l}),c.jsxs("div",{className:e.error?"error":"",title:e.error,children:[e.currentOrder<e.order?c.jsxs("aside",{className:"processing-counter",children:[e.currentOrder,"/",e.order]}):null,["simple","advanced","full"].includes(a)?c.jsx("button",{className:"preset-button button",onClick:()=>f(m=>!m),title:"Presets",children:"◭"}):null,["simple","advanced","full"].includes(a)?c.jsxs("aside",{className:"controls",children:[c.jsxs("button",{className:"controls-button button",onClick:w,title:"Rotation Mode",children:[c.jsx("span",{style:{display:"inline-block",transform:`rotate(${r.shift/r.maxShift*360}deg)`},children:"⥁"}),c.jsx("sup",{children:r.shift+1})]}),c.jsxs("div",{className:"subcontrols",children:[c.jsx("button",{className:"button anim-view",onClick:y,title:"Animate rotations",children:r.auto==="free"?"⤞":r.auto==="damp"?"↠":"?"}),!he(e.matrix)&&c.jsx("button",{className:"button reset-view",onClick:b,title:"Reset View",children:"⌖"})]})]}):null,c.jsx("button",{className:`space-button button${e.processing?" processing":""}${a==="empty"?" empty":""}`,onClick:v,title:`Space ${e.spaceType}`,children:c.jsx(N,{type:e.spaceType,dimensions:e.dimensions})}),["advanced","full"].includes(a)&&c.jsxs("aside",{className:"parameters",children:[(a==="full"||n.grouper!=="")&&c.jsxs("label",{className:"select-label",children:["Grouper",c.jsx("select",{name:"grouper",value:n.grouper,onChange:d,children:Ve.map(m=>c.jsx("option",{value:m,children:m===""?n.grouper===""?`Auto [${e.grouper.replace(/^auto-/,"")}]`:"Auto":m.replace(/_/g," ").replace(/\b./g,g=>g.toUpperCase())},m))})]}),(a==="full"||n.grouper)&&c.jsxs("label",{className:"boolean-label",children:["inCentered",c.jsx(pe,{name:"centered",allowNull:!0,value:n.centered,onChange:u})]}),(a==="full"||e.curvature<=0)&&c.jsx(M,{name:"order",label:"Precision",min:1,step:1,value:n.order,onChange:u}),c.jsx(M,{name:"segments",label:"Segments",min:1,step:1,value:n.segments,toggler:n.curve,togglerName:"curve",onChange:u}),c.jsxs("label",{className:"select-label",children:["Easing",c.jsx("select",{name:"easing",value:n.easing,onChange:d,children:ze.map(m=>c.jsx("option",{value:m,children:m.replace(/_/g," ").replace(/\b./g,g=>g.toUpperCase())},m))})]}),c.jsx(M,{name:"dimensions",label:"Dimensions",min:2,max:9,step:1,value:n.dimensions,onChange:u}),c.jsxs("label",{className:"select-label",children:["Projection",c.jsx("select",{name:"projection",value:n.projection,onChange:d,children:He.map(m=>c.jsx("option",{value:m,children:m.replace(/_/g," ").replace(/./,g=>g.toUpperCase())},m))})]}),c.jsx(M,{name:"vertexThickness",label:"Vertices",min:0,step:1,value:n.vertexThickness,toggler:n.showVertices,togglerName:"showVertices",onChange:u}),c.jsx(M,{name:"edgeThickness",label:"Edges",min:0,step:1,value:n.edgeThickness,toggler:n.showEdges,togglerName:"showEdges",onChange:u}),(e.grouper.replace(/^auto-/,"")==="toddcoxeter"||e.grouper==="fundamental")&&c.jsxs("label",{className:"boolean-label",children:["Faces",c.jsx(pe,{name:"showFaces",value:n.showFaces,onChange:u})]}),c.jsxs("label",{className:"select-label",children:["Ambiance",c.jsx("select",{name:"ambiance",value:n.ambiance,onChange:d,children:(a==="full"?Object.keys($):Object.entries($).filter(([m,{extended:g}])=>!g).map(([m])=>m)).map(m=>c.jsx("option",{value:m,children:m.replace(/_/g," ").replace(/./,g=>g.toUpperCase())},m))})]})]}),["advanced","full"].includes(a)&&c.jsxs("aside",{className:"view",children:[c.jsx(M,{name:"msaaSamples",label:"MSAA",min:0,step:1,value:n.msaaSamples,toggler:n.msaa,togglerName:"msaa",onChange:u}),c.jsx(M,{name:"fov3",label:"FOV3",min:0,step:1,value:n.fov3,onChange:u}),n.dimensions>3?[...Array(n.dimensions-3).keys()].map(m=>c.jsx(M,{label:`FOV${m+4}`,name:`fov${m+4}`,step:1,value:n[`fov${m+4}`],onChange:u},m)):null]}),["simple","advanced","full"].includes(a)&&c.jsx(qe,{dimensions:n.dimensions,coxeter:n.coxeter,mirrors:n.mirrors,stellation:n.stellation,extended:n.extended,onChange:u})]})]})}function tr({params:e,updateParams:n}){window.p=e;const[r,t]=p.useState(()=>({...e,currentOrder:0,askedOrder:null,spaceType:null,curvature:null,mirrorsPlanes:null,rootVertex:null,vertices:[],edges:[],ranges:[],faces:[],maxVertices:3e4,maxEdges:5e4,maxFaces:5e4,processing:!0,error:null,renderError:null}));p.useEffect(()=>{t(i=>{try{return jn(i)}catch(f){return console.error(f),{...i,error:f.message}}})},[]);const[s,a]=p.useState({shift:0,maxShift:0,combinations:[],auto:"damp"});p.useEffect(()=>{t(i=>({...i,...ve({order:e.order,ambiance:e.ambiance,showVertices:e.showVertices,showEdges:e.showEdges,showFaces:e.showFaces,vertexThickness:e.vertexThickness,edgeThickness:e.edgeThickness,projection:e.projection,msaa:e.msaa,msaaSamples:e.msaaSamples,matrix:e.matrix,fov3:e.fov3,fov4:e.fov4,fov5:e.fov5,fov6:e.fov6,fov7:e.fov7,fov8:e.fov8,fov9:e.fov9,zoom:e.zoom,curve:e.curve,segments:e.segments,easing:e.easing,dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation,centered:e.centered}).params}))},[e.order,e.ambiance,e.centered,e.coxeter,e.curve,e.dimensions,e.edgeThickness,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.matrix,e.mirrors,e.msaa,e.msaaSamples,e.projection,e.segments,e.easing,e.showEdges,e.showFaces,e.showVertices,e.stellation,e.vertexThickness,e.zoom]),p.useEffect(()=>{a(i=>({...i,shift:0,maxShift:~~We(Xe(e.dimensions,2)/2),combinations:nn(Ge(new Array(e.dimensions).fill().map((f,l)=>l),2)),auto:"damp"}))},[e.dimensions]),p.useEffect(()=>{t(i=>e.grouper===""&&i.grouper.startsWith("auto-")?i:{...i,grouper:e.grouper})},[e.grouper]);const o=p.useCallback((i,f)=>{a(l=>({...l,[i]:f}))},[a]);return r.gl?c.jsxs("div",{className:r.error||r.renderError?"error":"",title:r.error||r.renderError,children:[c.jsx(rr,{runtime:r,params:e,rotations:s,updateRotations:o,updateParams:n}),c.jsx(zn,{runtime:r,rotations:s,setRuntime:t,updateParams:n})]}):null}const sr=e=>JSON.parse(e,(r,t)=>t==="Infinity"?1/0:t),or=e=>JSON.stringify(e,(r,t)=>t===1/0?"Infinity":t),me=(e=null)=>{const{location:n}=window;if(n.hash)try{return sr(atob(n.hash.slice(1)))}catch(r){console.warn(r),n.hash=""}return e},ar=e=>{window.history.pushState(null,null,"#"+btoa(or(e)))},oe=(e,n)=>e.length!==n.length?!1:e.every((r,t)=>Array.isArray(r)?oe(r,n[t]):r===n[t]),cr=()=>{const[e,n]=p.useState(me(ge)),r=p.useCallback(()=>{const s=me();s&&(Object.entries(s).forEach(([a,o])=>{Array.isArray(o)&&oe(o,e[a])&&(s[a]=e[a])}),n(s))},[e]),t=p.useCallback(s=>{n(a=>{if(!Object.entries(s).filter(([f,l])=>Array.isArray(l)?!oe(l,a[f]):a[f]!==l).length)return a;const{params:o,badParams:i}=ve({...a,...s});return i.length||ar(o),o})},[]);return p.useEffect(()=>(window.addEventListener("popstate",r),()=>{window.removeEventListener("popstate",r)}),[r]),c.jsx(tr,{params:e,updateParams:t})};Ke.createRoot(document.getElementById("root")).render(c.jsx(cr,{}));
