import{r as g,m as Ce,d as ee,a as Le,p as Qe,b as en,c as Z,i as Q,e as J,s as xn,f as bn,g as En,h as V,j as je,T as Te,k as de,P as K,t as $,l as nn,n as Nn,o as Sn,q as Re,u as W,v as tn,w as an,x as ce,y as wn,z as yn,A as In,B as jn,C as Tn,D as On,E as An,F as ke,G as Dn,H as Cn,I as a,J as me,K as pe,L as Oe,M as rn,N as Rn,O as on,Q as Fn,R as B,S as ve,U as zn,V as Pn,W as Mn,X as _e}from"./CoxeterMatrix-74a7972d.js";var Ln=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const _n=(e,t)=>{const n=g.useRef({previous:null,anteprevious:null,start:null,stable:!1});g.useEffect(()=>{const o=16.666666666666668;if(e.adaptative){let r=null,i=null,s=[];const u=20,m=10,c=l=>{if(i===null){n.current.start===null&&(n.current.start=l),i=l,r=requestAnimationFrame(c);return}if(s.push(l-i),i=l,s.length>Ce(u,m)&&s.shift(),s.length>=m&&s.slice(-m).reduce((h,v)=>h+v,0)/m>(n.current.stable?2.01:1.51)*o){s=[],n.current.stable=!1;const h=ee.indexOf(e.detail);if(h>1){n.current.anteprevious=n.current.previous,n.current.previous=e.detail;const v=ee[h-1];t(p=>({...p,detail:v}))}}if(s.length>=u&&s.slice(-u).reduce((h,v)=>h+v,0)/u<(n.current.stable?1.001:1.01)*o){s=[],n.current.stable=!1;const h=ee.indexOf(e.detail);if(h<ee.length-2){const v=ee[h+1];v===n.current.previous&&e.detail===n.current.anteprevious&&l-n.current.start>1e3?n.current.stable=!0:(n.current.anteprevious=n.current.previous,n.current.previous=e.detail,t(p=>({...p,detail:v})))}}r=requestAnimationFrame(c)};return r=requestAnimationFrame(c),()=>cancelAnimationFrame(r)}},[e.detail,e.adaptative,e.ambiance,e.space,t]),g.useEffect(()=>{n.current={previous:null,anteprevious:null,stable:!1,start:null}},[e.space,e.shaper,e.ambiance])};class be extends g.Component{constructor(t){super(t),this.state={error:!1}}static getDerivedStateFromError(t){return{error:!0}}static getDerivedStateFromProps(t){return{error:t.error}}componentDidCatch(t,n){this.props.onError(t,n)}render(){return this.state.error?null:this.props.children}}var sn={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(Ln,function(){var n=function(){function o(v){return s.appendChild(v.dom),v}function r(v){for(var p=0;p<s.children.length;p++)s.children[p].style.display=p===v?"block":"none";i=v}var i=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(v){v.preventDefault(),r(++i%s.children.length)},!1);var u=(performance||Date).now(),m=u,c=0,l=o(new n.Panel("FPS","#0ff","#002")),f=o(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=o(new n.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:s,addPanel:o,showPanel:r,begin:function(){u=(performance||Date).now()},end:function(){c++;var v=(performance||Date).now();if(f.update(v-u,200),v>m+1e3&&(l.update(1e3*c/(v-m),100),m=v,c=0,h)){var p=performance.memory;h.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return v},update:function(){u=this.end()},domElement:s,setMode:r}};return n.Panel=function(o,r,i){var s=1/0,u=0,m=Math.round,c=m(window.devicePixelRatio||1),l=80*c,f=48*c,h=3*c,v=2*c,p=3*c,E=15*c,D=74*c,w=30*c,C=document.createElement("canvas");C.width=l,C.height=f,C.style.cssText="width:80px;height:48px";var y=C.getContext("2d");return y.font="bold "+9*c+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=i,y.fillRect(0,0,l,f),y.fillStyle=r,y.fillText(o,h,v),y.fillRect(p,E,D,w),y.fillStyle=i,y.globalAlpha=.9,y.fillRect(p,E,D,w),{dom:C,update:function(z,U){s=Math.min(s,z),u=Math.max(u,z),y.fillStyle=i,y.globalAlpha=1,y.fillRect(0,0,l,E),y.fillStyle=r,y.fillText(m(z)+" "+o+" ("+m(s)+"-"+m(u)+")",h,v),y.drawImage(C,p+c,E,D-c,w,p,E,D-c,w),y.fillRect(p+D-c,E,c,w),y.fillStyle=i,y.globalAlpha=.9,y.fillRect(p+D-c,E,c,m((1-z/U)*w))}}},n})})(sn);var Hn=sn.exports;const Un=kn(Hn),Ee=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),P=(e,t,n)=>{let o,r,i;if(t===0)o=r=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,u=2*n-s;o=Ee(u,s,e+1/3),r=Ee(u,s,e),i=Ee(u,s,e-1/3)}return[o,r,i]},le=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],Bn={background:[0,0,0,1],glow:!1,shading:"ads",diffuse:"lambert",specular:!1,shininess:32,opacity:1,ambient:.2,roughness:.85,gouraud:!1,transparency:"oit",color:({word:e})=>P(e.length*.03%1,.75,.7)},te=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},shading:!1,face:{opacity:.025},transparency:"blend",color:({word:e,dual:t})=>P((e.length*.17-(t?.43:0))%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,diffuse:"fresnel",opacity:.025},transparency:"blend",color:({word:e})=>P(...le[e.length%le.length])},cathedral:{background:[.6,.6,.6,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},shading:!1,face:{opacity:.9},transparency:"oit",color:({word:e,subShape:t,type:n})=>n==="face"?P((t*.23+e.length*.07)%1,1,.58):[0,0,0]},synthwave:{background:[...P(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},shading:!1,face:{opacity:.015},afterImage:.7,transparency:"blend",color:({word:e})=>P((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e,dual:t})=>P(e.length*.03%1-(t?.25:0),1,.8)},shiny:{background:[0,0,0,1],diffuse:"lambert",specular:"blinn-phong",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>P(-(e.length*.07)%1,1,.8)},flare:{background:[1,1,1,1],transparency:"blend",diffuse:"cel",face:{opacity:.6,gouraud:!1},color:({word:e})=>P(e.length*.09%1,1,.8)},shape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({subShape:e,type:t})=>t!=="vertex"?P(e*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],transparency:"blend",diffuse:"cel",face:{opacity:.6,gouraud:!1},color:({word:e,type:t,dimensions:n,hidden:o})=>{const r=e.length?Le(e[e.length-1])/n:0;return P(r%1,1,t==="face"?.6:o.includes("face")?.8:0)}},harlequin:{background:[...P(240/360,.23,.09),1],face:{opacity:.6},transparency:"oit",color:({word:e,idx:t,type:n})=>{const o=e.split("").map(i=>Le(i)).reduce((i,s)=>i+s,0),r=[...le[o%le.length]];return t%2&&(r[2]*=.5),P(...r)}},pure:{background:[0,0,0,1],color:({word:e})=>P(e.length*.03%1,.75,.7)},facets:{background:[0,0,0,1],color:({faceIndex:e,faceSize:t})=>P((e||0)/(t||1),.75,.7)},monochrome:{background:[.12,.12,.12,1],diffuse:"reverse",ambient:0,face:{opacity:.1},transparency:"oit",color:()=>[1,1,1]},glass:{background:[0,0,0,1],transparency:"blend",opacity:.2,ambient:0,diffuse:"fresnel",specular:"blinn-phong",face:{shininess:16,diffuse:!1},color:({subShape:e,word:t,type:n})=>n!=="vertex"?P((e*.21+t.length*.03)%1,1,.8):[1,1,1]},plain:{extended:!0,background:[1,1,1,1],glow:!1,shading:!1,color:({word:e,type:t,hidden:n})=>P(e.length*.06%1,1,t==="face"?.6:n.includes("face")?.5:.05)},plainblack:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e,type:t})=>t==="face"?new Array(3).fill(1-Qe(.9,e.length+1)):[0,0,0]},normals:{extended:!0,background:[1,1,1,1],shading:"normal",color:()=>[0,0,0]},uvs:{extended:!0,background:[1,1,1,1],shading:"uv",color:()=>[0,0,0]}}).map(([e,t])=>[e,{...Bn,...t,transparent:{}}])),$n=`const vec2 cone = vec2(1., 0);
const vec2 ci = vec2(0., 1.);
const vec2 conei = vec2(1., 1.);

vec2 cmul(vec2 z, vec2 w) {
  return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x);
}

vec2 cinv(vec2 z) {
  return z * vec2(1, -1) / dot(z, z);
}

vec2 cdiv(in vec2 z0, in vec2 z1) {
  return cmul(z0, cinv(z1));
}

vec2 expi(in float x) {
  return vec2(cos(x), sin(x));
}

vec2 cexp(in vec2 z) {
  return exp(z.x) * expi(z.y);
}

vec2 csqrt(in vec2 z) {
  float r = length(z);
  return vec2(sqrt(0.5 * (r + z.x)), sign(z.y) * sqrt(0.5 * (r - z.x)));
}

vec2 clog(in vec2 z) {
  return vec2(log(length(z)), atan(z.y, z.x));
}

vec2 csin(in vec2 z) {
  return cdiv(cexp(vec2(-z.y, z.x)) - cexp(vec2(z.y, -z.x)), vec2(0, 2.0));
}

vec2 cpow(in vec2 z, in float k) {
  return cexp(k * clog(z));
}

vec2 cacos(in vec2 z) {
  return -cmul(ci, clog(z + cmul(ci, csqrt(cone - cmul(z, z)))));
}

void sncndn(
  float u,
  float k2,
  out float sn,
  out float cn,
  out float dn
) {
  float emc = 1.0 - k2;
  float a, b, c;
  const int N = 4;
  float em[N], en[N];
  a = 1.0;
  dn = 1.0;
  for(int i = 0; i < N; i++) {
    em[i] = a;
    emc = sqrt(emc);
    en[i] = emc;
    c = 0.5 * (a + emc);
    emc = a * emc;
    a = c;
  }
  // Nothing up to here depends on u, so
  // could be precalculated.
  u = c * u;
  sn = sin(u);
  cn = cos(u);
  if(sn != 0.0) {
    a = cn / sn;
    c = a * c;
    for(int i = N - 1; i >= 0; i--) {
      b = em[i];
      a = c * a;
      c = dn * c;
      dn = (en[i] + a) / (b + a);
      a = c / b;
    }
    a = 1.0 / sqrt(c * c + 1.0);
    if(sn < 0.0)
      sn = -a;
    else
      sn = a;
    cn = c * sn;
  }
}

vec2 sn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(snu * dnv, cnu * dnu * snv * cnv);
}

vec2 cn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(cnu * cnv, -snu * dnu * snv * dnv);
}

vec2 dn(vec2 z, float k2) {
  float snu, cnu, dnu, snv, cnv, dnv;
  sncndn(z.x, k2, snu, cnu, dnu);
  sncndn(z.y, 1.0 - k2, snv, cnv, dnv);
  float a = 1.0 / (1.0 - dnu * dnu * snv * snv);
  return a * vec2(dnu * cnv * dnv, -k2 * snu * cnu * snv);
}
const float P[11] = float[](1.37982864606273237150E-4, 2.28025724005875567385E-3, 7.97404013220415179367E-3, 9.85821379021226008714E-3, 6.87489687449949877925E-3, 6.18901033637687613229E-3, 8.79078273952743772254E-3, 1.49380448916805252718E-2, 3.08851465246711995998E-2, 9.65735902811690126535E-2, 1.38629436111989062502E0);
const float Q[11] = float[](2.94078955048598507511E-5, 9.14184723865917226571E-4, 5.94058303753167793257E-3, 1.54850516649762399335E-2, 2.39089602715924892727E-2, 3.01204715227604046988E-2, 3.73774314173823228969E-2, 4.88280347570998239232E-2, 7.03124996963957469739E-2, 1.24999999999870820058E-1, 4.99999999999999999821E-1);

float polevl(float x, float[11] coef) {
  float ans = coef[0];

  for(int i = 0; i < 11; i++) {
    ans = ans * x + coef[i];
  }
  return ans;
}

float ellpk(in float x) {
  if(x > 0.) {
    return (polevl(x, P) - log(x) * polevl(x, Q));
  } else {
    return (1.3862943611198906188E0 - 0.5 * log(x));
  }
}

float ellik(in float phi, in float m) {
  float a = 1.;
  float b = sqrt(1. - m);
  float c = sqrt(m);
  float d = 1.;
  for(int i = 0; abs(c) > 1e-6; i++) {
    if(mod(phi, PI) != 0.) {
      float dPhi = atan((b * tan(phi)), a);
      if(dPhi < 0.) {
        dPhi += PI;
      }
      phi += dPhi + floor(phi / PI) * PI;
    } else {
      phi += phi;
    }
    c = (a + b) / 2.;
    b = sqrt(a * b);
    a = c;
    c = (a - b) / 2.;
    d += d;
  }
  return phi / (d * a);
}

float ellipticF(in float phi, in float m) {
  float b = sqrt(1. - m);
  float t = tan(phi);

  if(abs(t) > 10.) {
    float e = 1.0 / (b * t);
    phi = atan(e);
    return ellpk(1. - m) - ellik(phi, m);
  }
  return ellik(phi, m);
}

vec2 ellipticFi(in vec2 z, in float m) {
  float r = abs(z.x);
  float i = abs(z.y);
  if(r == 0.) {
    return vec2(0., ellipticF(0., 1. - m) * sign(z.y));
  }
  if(abs(r - ETA) < .001) {
    r = ETA - .001;
  }

  float sinhPsi2 = pow(sinh(i), 2.);
  float cscPhi2 = 1. / (sin(r) * sin(r));
  float cotPhi2 = 1. / (tan(r) * tan(r));
  float b = -(cotPhi2 + m * (sinhPsi2 * cscPhi2) - 1. + m);
  float c = (m - 1.) * cotPhi2;
  float cotLambda2 = (-b + sqrt(max(0., b * b - 4. * c))) / 2.;
  r = ellipticF(atan(1. / sqrt(max(0., cotLambda2))), m) * sign(z.x);
  i = ellipticF(atan(sqrt(max(0., (cotLambda2 / cotPhi2 - 1.) / m))), 1. - m) * sign(z.y);
  return vec2(r, i);
}
float gamma(float z) {
  const float[8] p = float[](676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7);
  z -= 1.0;
  float x = 0.99999999999980993; // Unnecessary precision
  for(int i = 0; i < 8; i++) {
    float pval = p[i];
    x += pval / (z + float(i + 1));
  }
  float t = z + 8.0 - 0.5;
  return sqrt(2.0 * PI) * pow(t, z + 0.5) * exp(-t) * x;
}
float B(float a, float b) {
  return (gamma(a) * gamma(b)) / gamma(a + b);
}

float binomial(float a, int n) {
  float s = 1.0;
  for(int i = n; i >= 1; i--, a--) {
    s *= float(a) / float(i);
  }
  return s;
}

vec2 sc(vec2 w, int K) {
  // https://fr.scribd.com/document/480603019/circletopolygon 2.14
  vec2 sum = vec2(0.);
  for(int n = 0; n < 10; n++) {
    sum += binomial(float(n) - 1.0 + 2.0 / float(K), n) / float(1 + n * K) * cpow(w, float(n * K));
  }
  return cmul(w, sum);
}

vec2 sc2(vec2 w, int K) {
  // https://fr.scribd.com/document/480603019/circletopolygon A
  float Kinv = 1. / float(K);
  float k = 0.;
  vec2 zk = (1. - Kinv) * B(1. + Kinv, 1. - 2. * Kinv) * cexp(TAU * k * Kinv * ci);

  vec2 sum = vec2(0.);
  for(int n = 0; n <= 6; n++) {
    sum += binomial(float(n) - 1.0 * Kinv, n) / float(1 + n - 2 / K) * cpow(cone - cpow(w, float(K)), 1. + float(n) - 2. * Kinv);
  }
  return cmul(zk, 1. - (1. / B(1. - 2. * Kinv, Kinv)) * sum);
}
`,Vn=`// Global vertex uniforms

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
uniform float zoom;

// Structures for >4 vec and mat
#if DIMENSIONS >= 5
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

#if DIMENSIONS == 5
struct mat5 {
  vec5 c1, c2, c3, c4, c5;
};
#elif DIMENSIONS == 6
struct mat6 {
  vec6 c1, c2, c3, c4, c5, c6;
};
#elif DIMENSIONS == 7
struct mat7 {
  vec7 c1, c2, c3, c4, c5, c6, c7;
};
#elif DIMENSIONS == 8
struct mat8 {
  vec8 c1, c2, c3, c4, c5, c6, c7, c8;
};
#elif DIMENSIONS == 9
struct mat9 {
  vec9 c1, c2, c3, c4, c5, c6, c7, c8, c9;
};
#endif

bool nan(in float v) {
  return isnan(v);
}
bool nan(in vec2 v) {
  return isnan(v.x) || isnan(v.y);
}

bool nan(in vec3 v) {
  return nan(v.xy) || isnan(v.z);
}

bool nan(in vec4 v) {
  return nan(v.xyz) || isnan(v.w);
}

#if DIMENSIONS >= 5
bool nan(in vec5 v) {
  return nan(v.v) || isnan(v.u);
}
#endif

#if DIMENSIONS >= 6
bool nan(in vec6 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 7
bool nan(in vec7 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 8
bool nan(in vec8 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 9
bool nan(in vec9 v) {
  return nan(v.v) || nan(v.u) || isnan(v.t);
}
#endif

float ndot(in float v, in float w) {
  return v * w;
}
float nadd(in float v, in float w) {
  return v + w;
}
float nsub(in float v, in float w) {
  return v - w;
}
float nmul(in float v, in float s) {
  return v * s;
}
float nonlast(in float v) {
  return v;
}
#if DIMENSIONS >= 2
float ndot(in vec2 v, in vec2 w) {
  return dot(v, w);
}
vec2 nadd(in vec2 v, in vec2 w) {
  return v + w;
}
vec2 nsub(in vec2 v, in vec2 w) {
  return v - w;
}
vec2 nmul(in vec2 v, in float s) {
  return v * s;
}
float nonlast(in vec2 v) {
  return v.x;
}
#endif
#if DIMENSIONS >= 3
float ndot(in vec3 v, in vec3 w) {
  return dot(v, w);
}
vec3 nadd(in vec3 v, in vec3 w) {
  return v + w;
}
vec3 nsub(in vec3 v, in vec3 w) {
  return v - w;
}
vec3 nmul(in vec3 v, in float s) {
  return v * s;
}
vec2 nonlast(in vec3 v) {
  return v.xy;
}
#endif
#if DIMENSIONS >= 4
float ndot(in vec4 v, in vec4 w) {
  return dot(v, w);
}
vec4 nadd(in vec4 v, in vec4 w) {
  return v + w;
}
vec4 nsub(in vec4 v, in vec4 w) {
  return v - w;
}
vec4 nmul(in vec4 v, in float s) {
  return v * s;
}
vec3 nonlast(in vec4 v) {
  return v.xyz;
}
#endif
#if DIMENSIONS >= 5
float ndot(in vec5 v, in vec5 w) {
  return dot(v.v, w.v) + v.u * w.u;
}
vec5 nadd(in vec5 v, in vec5 w) {
  return vec5(v.v + w.v, v.u + w.u);
}
vec5 nsub(in vec5 v, in vec5 w) {
  return vec5(v.v - w.v, v.u - w.u);
}
vec5 nmul(in vec5 v, in float s) {
  return vec5(v.v * s, v.u * s);
}
vec4 nonlast(in vec5 v) {
  return v.v;
}
#endif
#if DIMENSIONS >= 6
float ndot(in vec6 v, in vec6 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
vec6 nadd(in vec6 v, in vec6 w) {
  return vec6(v.v + w.v, v.u + w.u);
}
vec6 nsub(in vec6 v, in vec6 w) {
  return vec6(v.v - w.v, v.u - w.u);
}
vec6 nmul(in vec6 v, in float s) {
  return vec6(v.v * s, v.u * s);
}
vec5 nonlast(in vec6 v) {
  return vec5(v.v, v.u.x);
}
#endif
#if DIMENSIONS >= 7
float ndot(in vec7 v, in vec7 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
vec7 nadd(in vec7 v, in vec7 w) {
  return vec7(v.v + w.v, v.u + w.u);
}
vec7 nsub(in vec7 v, in vec7 w) {
  return vec7(v.v - w.v, v.u - w.u);
}
vec7 nmul(in vec7 v, in float s) {
  return vec7(v.v * s, v.u * s);
}
vec6 nonlast(in vec7 v) {
  return vec6(v.v, v.u.xy);
}
#endif
#if DIMENSIONS >= 8
float ndot(in vec8 v, in vec8 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
vec8 nadd(in vec8 v, in vec8 w) {
  return vec8(v.v + w.v, v.u + w.u);
}
vec8 nsub(in vec8 v, in vec8 w) {
  return vec8(v.v - w.v, v.u - w.u);
}
vec8 nmul(in vec8 v, in float s) {
  return vec8(v.v * s, v.u * s);
}
vec7 nonlast(in vec8 v) {
  return vec7(v.v, v.u.xyz);
}
#endif
#if DIMENSIONS >= 9
float ndot(in vec9 v, in vec9 w) {
  return dot(v.v, w.v) + dot(v.u, w.u) + v.t * w.t;
}
vec9 nadd(in vec9 v, in vec9 w) {
  return vec9(v.v + w.v, v.u + w.u, v.t + w.t);
}
vec9 nsub(in vec9 v, in vec9 w) {
  return vec9(v.v - w.v, v.u - w.u, v.t - w.t);
}
vec9 nmul(in vec9 v, in float s) {
  return vec9(v.v * s, v.u * s, v.t * s);
}
vec8 nonlast(in vec9 v) {
  return vec8(v.v, v.u);
}
#endif

float adapt(in float m) {
  return m;
}
vec2 adapt(in vec2 m) {
  return m;
}
#if DIMENSIONS == 3
vec3 adapt(in vec3 m) {
  return m;
}
#elif DIMENSIONS == 4
vec4 adapt(in vec4 m) {
  return m;
}
#elif DIMENSIONS == 5
vec5 adapt(in mat3 m) {
  return vec5(vec4(m[0], m[1][0]), m[1][1]);
}
#elif DIMENSIONS == 6
vec6 adapt(in mat3 m) {
  return vec6(vec4(m[0], m[1][0]), vec2(m[1][1], m[1][2]));
}
#elif DIMENSIONS == 7
vec7 adapt(in mat3 m) {
  return vec7(vec4(m[0], m[1][0]), vec3(m[1][1], m[1][2], m[2][0]));
}
#elif DIMENSIONS == 8
vec8 adapt(in mat3 m) {
  return vec8(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]));
}
#elif DIMENSIONS == 9
vec9 adapt(in mat3 m) {
  return vec9(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]), m[2][2]);
}
#endif

#if DIMENSIONS == 0
float multiplyMatrix(float m, float v) {
  return m * v;
}
#elif DIMENSIONS == 1
float multiplyMatrix(float m, float v) {
  return m * v;
}
#elif DIMENSIONS == 2
vec2 multiplyMatrix(mat2 m, vec2 v) {
  return m * v;
}
#elif DIMENSIONS == 3
vec3 multiplyMatrix(mat3 m, vec3 v) {
  return m * v;
}
#elif DIMENSIONS == 4
vec4 multiplyMatrix(mat4 m, vec4 v) {
  return m * v;
}
#elif DIMENSIONS == 5
vec5 multiplyMatrix(mat5 m, vec5 v) {
  return vec5(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), ndot(m.c5, v));
}
#elif DIMENSIONS == 6
vec6 multiplyMatrix(mat6 m, vec6 v) {
  return vec6(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec2(ndot(m.c5, v), ndot(m.c6, v)));
}
#elif DIMENSIONS == 7
vec7 multiplyMatrix(mat7 m, vec7 v) {
  return vec7(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec3(ndot(m.c5, v), ndot(m.c6, v), ndot(m.c7, v)));
}
#elif DIMENSIONS == 8
vec8 multiplyMatrix(mat8 m, vec8 v) {
  return vec8(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec4(ndot(m.c5, v), ndot(m.c6, v), ndot(m.c7, v), ndot(m.c8, v)));
}
#elif DIMENSIONS == 9
vec9 multiplyMatrix(mat9 m, vec9 v) {
  return vec9(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec4(ndot(m.c5, v), ndot(m.c6, v), ndot(m.c7, v), ndot(m.c8, v)), ndot(m.c9, v));
}
#endif

float nget(in float v, in int i) {
  return v;
}
float nget(in vec2 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  return v[i];
}
#if DIMENSIONS >= 3
float nget(in vec3 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  return v[i];
}
#endif
#if DIMENSIONS >= 4
float nget(in vec4 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  return v[i];
}
#endif
#if DIMENSIONS >= 5
float nget(in vec5 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u;
  }
}
#endif
#if DIMENSIONS >= 6
float nget(in vec6 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u[i - 4];
  }
}
#endif
#if DIMENSIONS >= 7
float nget(in vec7 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u[i - 4];
  }
}
#endif
#if DIMENSIONS >= 8
float nget(in vec8 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else {
    return v.u[i - 4];
  }
}
#endif
#if DIMENSIONS >= 9
float nget(in vec9 v, in int i) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    return v.v[i];
  } else if(i < 8) {
    return v.u[i - 4];
  } else {
    return v.t;
  }
}
#endif

void nset(inout float v, in int i, in float x) {
  v = x;
}
void nset(inout vec2 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  v[i] = x;
}
#if DIMENSIONS >= 3
void nset(inout vec3 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  v[i] = x;
}
#endif
#if DIMENSIONS >= 4
void nset(inout vec4 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  v[i] = x;
}
#endif
#if DIMENSIONS >= 5
void nset(inout vec5 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u = x;
  }
}
#endif
#if DIMENSIONS >= 6
void nset(inout vec6 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u[i - 4] = x;
  }
}
#endif
#if DIMENSIONS >= 7
void nset(inout vec7 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u[i - 4] = x;
  }
}
#endif
#if DIMENSIONS >= 8
void nset(inout vec8 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else {
    v.u[i - 4] = x;
  }
}
#endif
#if DIMENSIONS >= 9
void nset(inout vec9 v, in int i, in float x) {
  i = (i + DIMENSIONS) % DIMENSIONS;
  if(i < 4) {
    v.v[i] = x;
  } else if(i < 8) {
    v.u[i - 4] = x;
  } else {
    v.t = x;
  }
}
#endif
`,Gn=`#ifdef OIT
layout(location = 0) out vec4 accumColor;
layout(location = 1) out float accumAlpha;

float weight(float z, float a) {
  float b = min(1.0, a * 10.0) + 0.01;
  float c = 1.0 - z * 0.9;
  return clamp(b * b * b * 1e8 * c * c * c, 1e-2, 3e3);
}

#else
out vec4 outColor;
#endif

#if defined(SHADING) && !defined(GOURAUD)
#include lighting
in vec3 vNormal;
in vec3 vPosition;
in vec2 vUv;
#endif

#if defined(GOURAUD)
in vec4 vColor;
#else
flat in vec3 vColor;
#endif

void main() {
  #ifdef GOURAUD
  vec4 color = vColor;
  #elif !defined(SHADING)
  vec4 color = vec4(vColor, OPACITY);
  #else
  vec4 color = light(vPosition, vNormal, vColor, vUv);
  #endif

  #ifdef OIT
  float w = weight(gl_FragCoord.z, color.a);
  accumColor = vec4(color.rgb * color.a * w, color.a);
  accumAlpha = color.a * w;
  #else
  outColor = color;
  #endif
}
`,Jn=`#version 300 es
precision highp float;

uniform mat4 viewProjection;
uniform vec3 eye;

#include config

// Constants
const float PI = 3.14159265358979323846264338327950288f;
const float TAU = 2.f * PI;
const float ETA = PI / 2.f;
const float LN2 = 0.693147180559945309417232121458176568f;
const float LN10 = 2.302585092994045684017991454684364208f;
const vec3 NOISE = vec3(.000003f, -.000002f, .000017f);
const float NaN = intBitsToFloat(-1);
const float SCALE = TAU;
const float curvature = float(CURVATURE);
const float DT = curvature == 0.f ? .05f : .001f;
`,Wn=`float len(in float v) {
  return 1.;
}

#loopN2
float len(in vecN v) {
  return sqrt(ndot(v, v));
}
#endloopN

float xdot(in vecN v) {
  return ndot(multiplyMatrix(metric, v), v);
}

vecN xnormalize(in vecN v) {
  float x = xdot(v);
  if(x == 0.) {
    return v;
  }
  float n = 1. / sqrt(curvature * xdot(v));
  return nmul(v, n);
}

#loopN3
vecN halff(in vecN v, in float k) {
  nset(v, -1, 1. / nget(v, -1)); // Invert last

  float nr = nget(v, -1);
  for(int i = 0; i < _N_ - 1; i++) { // Normalize by last
    nset(v, i, nget(v, i) * nr);
  }

  nr = 2. / (1. + k * nget(v, 1));
  for(int i = 0; i < _N_; i++) {
    nset(v, i, nget(v, i) * nr);

  }

  float temp = nget(v, 1);
  for(int i = 1; i < _N_ - 1; i++) {
    nset(v, i, nget(v, i + 1));
  }
  nset(v, -1, temp);
  return v;
}
vecN_1 halfv(in vecN v) {
  return nonlast(halff(v, 1.));
}
#endloopN

float easeInOut(in float t, in float order) {
  return t < 0.5 ? .5 * pow(2. * t, order) : 1. - .5 * pow(2. * (1. - t), order);
}
float getOrder(in float len) {
  return floor(log(len) / LN10);
}
const float idealBound = 1e4;

vecN nmix(in vecN a, in vecN b, in float t) {
  #if CURVATURE < 0
  // When a point is ideal we can't be linear in intrapolation
  float lena = len(a);
  float lenb = len(b);
  float order = getOrder(max(lena, lenb));

  if(lena > idealBound && lenb > idealBound) {
    t = easeInOut(t, order);
  } else if(lena > idealBound) {
    t = 1. - pow(t, order + 4.);
    // WTF, without this useless line it does not work
    return nadd(nmul(a, (1. - t)), nmul(b, t));
  } else if(lenb > idealBound) {
    t = pow(t, order + 4.);
  }
  #endif
  return nadd(nmul(a, (1. - t)), nmul(b, t));
}

vecN trix(in vecN a, in vecN b, in vecN c, in vec2 t) {
  #if CURVATURE < 0
  float lena = len(a);
  float lenb = len(b);
  float lenc = len(c);
  if(lena > idealBound && lenb < idealBound) {
    vecN t = a;
    a = b;
    b = t;
  }
  if(lena > idealBound && lenc < idealBound) {
    vecN t = a;
    a = c;
    c = t;
  }

  float order = getOrder(max(max(lena, lenb), lenc));

  if(lena > idealBound || lenb > idealBound || lenc > idealBound) {
    t.x = easeInOut(t.x, order);
    t.y = easeInOut(t.y, order);
  }
  #endif

  return nadd(nadd(nmul(b, t.x), nmul(c, t.y)), nmul(a, 1. - t.x - t.y));
}
`,Kn=`const float ambient = AMBIENT;
const float shininess = SHININESS;
const float roughness = ROUGHNESS;
const float opacity = OPACITY;

float getDiffuse(in vec3 normal, in vec3 lightDirection, in vec3 eyeDirection, inout vec4 color) {
  #ifdef DIFFUSE
  // Diffuse
  #if DIFFUSE == 0
  // Lambert
  return abs(dot(normal, lightDirection));
  #elif DIFFUSE == 1
  // Oren-Nayar

  const float albedo = 1.;

  float LdotV = dot(lightDirection, eyeDirection);
  float NdotL = dot(lightDirection, normal);
  float NdotV = dot(normal, eyeDirection);

  float s = LdotV - NdotL * NdotV;
  float t = mix(1.0, max(NdotL, NdotV), step(0.0, s));
  float sigma2 = roughness * roughness;
  float A = 1.0 + sigma2 * (albedo / (sigma2 + 0.13) + 0.5 / (sigma2 + 0.33));
  float B = 0.45 * sigma2 / (sigma2 + 0.09);

  return albedo * max(0.0, NdotL) * (A + B * s / t) / 3.1415926535897932384626433832795;
  #elif DIFFUSE == 2
  // Minnaert
  float diffuse = abs(dot(normal, lightDirection));
  return diffuse * diffuse;
  #elif DIFFUSE == 3
  // Cel
  float diffuse = abs(dot(normal, lightDirection));
  return floor(diffuse * 4.) / 4.;
  #elif DIFFUSE == 4
  // Fresnel
  float diffuse = abs(dot(normal, lightDirection));
  float p = 1. - diffuse;
  color.a = clamp(p * p * p, color.a, 1.);
  return 1. - ambient;
  #elif DIFFUSE == 5
  // Reverse
  float diffuse = abs(dot(normal, lightDirection));
  float p = 1. - diffuse;
  return p * p;
  #endif
  #endif
  return 0.;
}

float getSpecular(in vec3 normal, in vec3 lightDirection, in vec3 eyeDirection, in vec4 color) {
  #ifdef SPECULAR
  #if SPECULAR == 0
  // Phong
  vec3 reflectDirection = reflect(-lightDirection, normal);
  return pow(max(dot(eyeDirection, reflectDirection), 0.), shininess * .25);

  #elif SPECULAR == 1
  // Blinn-phong
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  return pow(abs(dot(normal, halfVector)), shininess);

  #elif SPECULAR == 2
  // Cook-Torrance
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  const float fresnel = 1.;

  float NdotL = dot(normal, lightDirection);
  float NdotV = dot(normal, eyeDirection);
  float NdotH = dot(normal, halfVector);
  float VdotH = dot(eyeDirection, halfVector);

  float sigma2 = roughness * roughness;
  float cos2alpha = NdotH * NdotH;
  float D = exp((cos2alpha - 1.) / (cos2alpha * sigma2)) / (PI * sigma2 * cos2alpha * cos2alpha);

  float F = fresnel + (1. - fresnel) * pow(1. - NdotV, 5.);
  float G = min(1., min(2. * NdotH * NdotV / VdotH, 2. * NdotH * NdotL / VdotH));
  return D * F * G / (4. * NdotV * NdotL);

  #elif SPECULAR == 3
  // Ward anisotropic
  // TODO

  #endif
  #endif
  return 0.;
}

vec4 light(vec3 position, vec3 normal, vec3 rgb, vec2 uv) {
  #if SHADING == 0
  vec4 color = vec4(rgb, opacity);
  #if !defined(DIFFUSE) && !defined(SPECULAR)
  return color;
  #else 
  float diffuse = 0.;
  float specular = 0.;

  vec3 eyeDirection = eye - position;

  eyeDirection = normalize(eyeDirection);
  vec3 lightDirection = eyeDirection;

  // ADS Ambient, Diffuse, Specular
  diffuse = getDiffuse(normal, lightDirection, eyeDirection, color);
  specular = getSpecular(normal, lightDirection, eyeDirection, color);

  #ifdef DIFFUSE
  #if DIFFUSE == 4
  color.a += specular;
  #endif
  #endif

  return vec4((ambient + diffuse + specular) * color.rgb, color.a);
  #endif
  #elif SHADING == 1
  // Normal
  return vec4(normal * .5 + .5, opacity);
  #elif SHADING == 2
  // Position
  return vec4(position * .5 + .5, opacity);
  #elif SHADING == 3
  // Uvs
  return vec4(uv, .5, opacity);
  #endif
  return vec4(rgb, opacity);
}
`,Xn=`#include helpers
#include complex

#if DIMENSIONS >= 3
vec3 project(in vec3 v, in float k) {
  float nr = 1. / (v.z + k);
  if(nr < 1e-9 || nr > 4e2) {
    nr = NaN;
  }
  return vec3(v.xy * nr, 0.);
}
#endif
#if DIMENSIONS >= 4
// Duplicate to avoid useless function call
vec3 project(in vec4 v, in float k) {
  float nr = fov4 / (v.w + k);
  if(nr < 1e-9 || nr > 4e2) {
    nr = NaN;
  }
  return vec3(v.xyz * nr);
}
#endif

#loopN5
vecN_1 project(in vecN v, in float k) {
  float nr = fovN / (nget(v, -1) + k);
  if(nr < 1e-9 || nr > 4e2) {
    nr = NaN;
  }
  return nmul(nonlast(v), nr);
}
#endloopN

vec4 viewProject(vec3 position) {
  return viewProjection * vec4(position, 1.);
}

vec3 xproject(in float v) {
  return vec3(v, 0., 0.);
}

vec3 xproject(in vec2 v) {
  return vec3(v, 0.);
}

vec3 pureproject(in float v) {
  return vec3(v, 1., 1.);
}

vec3 pureproject(in vec2 v) {
  return vec3(v, 1.);
}

#if DIMENSIONS >= 3
vec3 xproject(in vec3 v) {
  #if PROJECTION3 == 0 // STEREOGRAPHIC
  return project(v, 1.);
  #elif PROJECTION3 == 1 // ORTHOGRAPHIC
  return vec3(v.xy, 0.);
  #elif PROJECTION3 == 2 // KLEIN
  return project(v, 0.);
  #elif PROJECTION3 == 3 // INVERTED
  return project(v, -1.);
  #elif PROJECTION3 == 4 // SCALE
  return SCALE * project(v, SCALE);
  #elif PROJECTION3 == 5 // JOUKOWSKY
  vec2 z = project(v, 1.).xy;
  return vec3(.5 * (z + cinv(z)), 0.);
  #elif PROJECTION3 == 6 // HALF
  vec2 z = halfv(v);
  if(len(z) > 24.) {
    return vec3(NaN);
  }
  return xproject(z);
  #elif PROJECTION3 == 7 // UPPERHALF
  vec2 z = halfv(v);
  if(len(z) > 24.) {
    return vec3(NaN);
  }
  nset(z, -1, nget(z, -1) - zoom); // Lower the plane for better perspectize
  return xproject(z);
  #elif PROJECTION3 == 8 // HALFSPHERE
  v = halff(v, -1.);
  if(len(v.xy) > 24.) {
    return vec3(NaN);
  }
  v.y -= 1.;
  return v * .5;

  #elif PROJECTION3 >= 9 // Transforms
  vec2 z = project(v, 1.).xy;

  #if PROJECTION3 == 9 // BAND
  return vec3((2. / PI) * ((clog(cone + z)) - clog(cone - z)), 0.);
  #elif PROJECTION3 == 10 // CROSS
  // Sum of angles
  // float o = -.5 * PI;
  // vec2 a = vec2(cos(o), sin(o));
  return vec3((2. / PI) * .5 * (clog(cone + z) - clog(cone - z) + cmul(ci, clog(cone - cmul(ci, z))) + cmul(-ci, clog(cone - cmul(-ci, z)))), 0.);
  #elif PROJECTION3 == 11 // HEART
  return vec3(-z.y * z.x + z.x, -.5 * (z.y * z.y - z.x * z.x - 2. * z.y - 0.75), 0.);
  #elif PROJECTION3 == 12 // TEARDROP
  return vec3(sign(z.x) *
    sqrt((sqrt((1. - z.y) * (1. - z.y) + z.x * z.x) - (1. - z.y)) / 2.), -(sqrt((sqrt((1. - z.y) * (1. - z.y) + z.x * z.x) + (1. - z.y)) / 2.) - 0.75), 0.);
  #elif PROJECTION3 == 13 // SQUARE
  float Ke = 1.854;
  z = cmul(conei / sqrt(2.), z);
  z = cacos(z);
  vec2 w = ellipticFi(z, .5);
  if(z.x > PI / 2.) {
    w.x = 2. * Ke - w.x;
  }
  w = cmul(vec2(1., -1.) / -Ke, w) + vec2(1., -1.);
  return vec3(w, 0.);
  #elif PROJECTION3 == 14 // RING
  z = (2. / PI) * ((clog(cone + z)) - clog(cone - z));
  float k = 4.;
  float P = 1.1393;
  return vec3(cexp(TAU * cmul(ci, (z.xy + ci)) / (k * P)), 0.);
  #elif PROJECTION3 == 15 // SINUSOIDAL
  return vec3(csin(1.5 * z), 0.);
  #elif PROJECTION3 == 16 // SPIRAL
  z = ((clog(cone + z)) - clog(cone - z));
  z = cmul(z, conei);
  return vec3(cexp(z), 0.);
  #elif PROJECTION3 >= 17 // TRIANGLE

  #if PROJECTION3 == 17
  z = cmul(z, cexp(-ci * PI / 2.));
  #elif PROJECTION3 == 18
  z = cmul(z, cexp(-ci * PI / 4.));
  #elif PROJECTION3 == 19
  z = cmul(z, cexp(-ci * PI / 10.));
  #endif

  vec2 w = sc(z, PROJECTION3 - 14);

  #if PROJECTION3 == 17
  w = cmul(w, cexp(ci * PI / 2.));
  #elif PROJECTION3 == 18
  w = cmul(w, cexp(ci * PI / 4.));
  #elif PROJECTION3 == 19
  w = cmul(w, cexp(ci * PI / 10.));
  #endif

  return vec3(w, 0.);

  #endif

  // LAMBERT
  // float nr = sqrt(2. / (1. + v.z));
  // return vec3(v.xy * nr, 0.);
  #else
  return v;
  #endif
}

vec3 pureproject(in vec3 v) {
  #if PROJECTION3 == 0 // STEREOGRAPHIC
  return project(v, 1.);
  #elif PROJECTION3 == 1 // ORTHOGRAPHIC
  return vec3(v.xy, 0.);
  #elif PROJECTION3 == 2 // KLEIN
  return project(v, 0.);
  #elif PROJECTION3 == 3 // INVERTED
  return project(v, -1.);
  #elif PROJECTION3 == 4 // SCALE
  return SCALE * project(v, SCALE);
  #elif PROJECTION3 == 8 // HALFSPHERE
  return halff(v, 0.);
  #elif PROJECTION3 != -1
  return project(v, 1.);
  #else
  return v;
  #endif
}
#endif

#loopN4
vec3 xproject(in vecN v) {
  #if PROJECTION_N == 0 // STEREOGRAPHIC
  return xproject(project(v, 1.));
  #elif PROJECTION_N == 1 // ORTHOGRAPHIC
  return xproject(nmul(nonlast(v), fovN));
  #elif PROJECTION_N == 2 // KLEIN
  return xproject(project(v, 0.));
  #elif PROJECTION_N == 3 // INVERTED
  return xproject(project(v, -1.));
  #elif PROJECTION_N == 4 // SCALE
  return xproject(nmul(project(v, SCALE), SCALE));
  #elif PROJECTION_N == 5 // JOUKOWSKY
  vecN_1 z = project(v, 1.);
  float r = len(z);
  float nr = 1. / (r * r);
  float k = (_Nf_ - 2.) / (_Nf_ - 1.);
  nset(z, 1, nget(z, 1) * (nr - r) / (r / (_Nf_ - 2.) + nr));
  z = nmul(z, k * (r / (_Nf_ - 2.) + nr));
  return xproject(z);
  #elif PROJECTION_N == 6 // HALF
  return xproject(halfv(v));
  #elif PROJECTION_N == 7 // UPPERHALF
  vecN_1 z = halfv(v);
  nset(z, -1, nget(z, -1) - 1.); // Lower the plane for better perspectize
  for(int i = 1; i < _N_ / 2; i++) {
    float temp = nget(z, -i);
    nset(z, -i, nget(z, i));
    nset(z, i, temp);
  }
  return xproject(z);
  #else
  return xproject(project(v, zoom));
  #endif
}
vec3 pureproject(in vecN v) {
  #if PROJECTION_N == 0 // STEREOGRAPHIC
  return pureproject(project(v, 1.));
  #elif PROJECTION_N == 1 // ORTHOGRAPHIC
  return pureproject(nmul(nonlast(v), fovN));
  #elif PROJECTION_N == 2 // KLEIN
  return pureproject(project(v, 0.));
  #elif PROJECTION_N == 3 // INVERTED
  return pureproject(project(v, -1.));
  #elif PROJECTION_N == 4 // SCALE
  return pureproject(nmul(project(v, SCALE), SCALE));
  #elif PROJECTION_N != -1
  return pureproject(project(v, 1.));
  #else
  return pureproject(project(v, zoom));
  #endif
}
#endloopN

vec3 inflate(in vec3 point, in vecN pos, in vec3 norm, in float size) {
  // Removing 3d length in perspective computation
  #if DIMENSIONS >= 2
  #if DIMENSIONS < 5
  pos.xy = vec2(1.);
  #if DIMENSIONS >= 3 && PROJECTION3 == -1
  pos.z = 1.;
  #endif
  #else
  pos.v.xyz = vec3(1.);
  #endif
  #else
  pos = 1.;
  #endif
  vec3 inv = clamp(abs(pureproject(pos)), 0.01, 16.);
  size = size * .01;
  size = size * size * size;
  return size * norm * inv + point;
}
`,qn=`gl_Position = viewProject(proj);

#if defined(SHADING) && defined(GOURAUD)
vColor = light(proj, norm, color, uv);
#else
vColor = color;

#ifdef SHADING
vPosition = proj;
vNormal = norm;
vUv = uv;
#endif
#endif
`,Yn=`#ifdef SHADING
#ifdef GOURAUD
#include lighting
#endif

out vec3 vPosition;
out vec3 vNormal;
out vec2 vUv;
#endif

#if defined(GOURAUD)
out vec4 vColor;
#else
flat out vec3 vColor;
#endif
`,He=e=>e>4?9:e<1?1:e,Zn={globals:Jn,dimensions:Vn,project:Xn,helpers:Wn,complex:$n,fragment:Gn,vertexouthead:Yn,lighting:Kn,vertexout:qn},Qn=(e,t,n)=>{t=n?1:t||1,t=Math.max(0,t);const o=n?n.width:e.clientWidth*t|0,r=n?n.height:e.clientHeight*t|0;return e.width!==o||e.height!==r?(e.width=o,e.height=r,!0):!!n},Ne=(e,t)=>e.replace(/\bvecN\b/g,`vec${t}`).replace(/\bmatN\b/g,`mat${t}`).replace(/\bfovN\b/g,`fov${t}`).replace(/\bvecN_1\b/g,`vec${t-1}`).replace(/\bvec1\b/g,"float").replace(/\b_N_\b/g,`${t}`).replace(/\b_Nf_\b/g,`${t}.`).replace(/\PROJECTION_N\b/g,`PROJECTION${t}`).replace(/\bvec[01]\b/g,"float").replace(/\bmat[01]\b/g,"float"),et=(e,t)=>Ne(e.replace(/#loopN(\d)(.+?)#endloopN/gs,(n,o,r)=>{const i=[];for(let s=o;s<=t;s++)i.push(Ne(r.replace(/#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,(u,m,c,l,f)=>m===`${s}`?Ne(c,s):f||""),s));return i.join(`
`)}),t),Ue=(e,t,n,o)=>{var m;const r=te[e.ambiance];let i="";const s=c=>c.toString().includes(".")?c:`${c}.`;Object.entries({shading:c=>xn.indexOf(c),diffuse:c=>bn.indexOf(c),specular:c=>En.indexOf(c),ambient:c=>s(c),shininess:c=>s(c),roughness:c=>s(c),opacity:c=>s(c),gouraud:c=>""}).forEach(([c,l])=>{const f=Object.keys(r).includes(o)&&Object.keys(r[o]).includes(c)?r[o][c]:r[c];f!==!1&&(i+=`#define ${c.toUpperCase()} ${l(f)}
`),c==="opacity"&&f<1&&(r.transparent[o]=!0,i+=`#define TRANSPARENT
`,r.transparency==="oit"&&(i+=`#define OIT
`))}),i+=`#define DIMENSIONS ${e.dimensions}
`;for(let c=3;c<=e.dimensions;c++)i+=`#define PROJECTION${c} ${en.indexOf(e[`projection${c}`])-1}
`;return i+=`#define CURVATURE ${((m=e.space)==null?void 0:m.curvature)||0}
`,e.curve&&(i+=`#define SEGMENTS
`),Object.entries({...Zn,config:i}).forEach(([c,l])=>{t=t.replace(`#include ${c}`,l),n=n.replace(`#include ${c}`,l)}),[t,n].map(c=>et(c,e.dimensions))},ue=(e,t,n,o,r)=>{if(e.gl.shaderSource(r,o),e.gl.compileShader(r),!e.gl.getShaderParameter(r,e.gl.COMPILE_STATUS)){const s=e.gl.getShaderInfoLog(r);return console.error(`An error occurred compiling the ${t}->${n} shader: ${s}`,{shaderSource:o}),s}},Be=(e,t,n)=>{const{gl:o}=e;if(o.linkProgram(n),!o.getProgramParameter(n,o.LINK_STATUS)){const i=o.getProgramInfoLog(n);return console.error(`Unable to initialize the ${t} shader program: ${i}`),i}},cn=(e,t,n,o,r=[])=>{const{gl:i}=e,s=i.createProgram(),u=i.createShader(i.VERTEX_SHADER),m=i.createShader(i.FRAGMENT_SHADER);if(ue(e,t,"vertex",n,u)||ue(e,t,"fragment",o,m)||(i.attachShader(s,u),i.attachShader(s,m),Be(e,t,s)))return;const c={program:s,vertexShader:u,fragmentShader:m,uniformsDef:r,recompile(l,f,h,v=null){ue(l,t,"vertex",f,this.vertexShader)||ue(l,t,"fragment",h,this.fragmentShader)||Be(l,t,this.program)||(v&&(this.uniformsDef=v),this.bindUniforms(l))},bindUniforms(l){this.uniforms={},this.uniformsDef.forEach(({name:f,type:h,value:v})=>{this.uniforms[f]=nt(l,this.program,f,h),this.uniforms[f].update(v)})}};return c.bindUniforms(e),c},re=(e,t,n,o,r,i=null,s=null)=>{const{gl:u}=e;s=s||u.FLOAT;const m=s===u.FLOAT?4:2,c={name:n,mesh:t,indices:ln,instances:i,data:r,size:o,type:s,update(l=null,f=null,h=null){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),l===null&&f===null&&h===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):(this.data.set(l,f*this.size),u.bufferSubData(u.ARRAY_BUFFER,f*this.size*m,this.data,f*this.size,h*this.size))},extend(l,f,h=!1){if(u.bindVertexArray(this.mesh.vao),this.size=l,f&&(h&&f.length>=this.data.length&&f.set(this.data),this.data=f),this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const v=l>4?3:1;for(let p=0;p<v;p++)u.enableVertexAttribArray(this.location+p);for(let p=0;p<v;p++)u.vertexAttribPointer(this.location+p,l/v,this.type,!1,l*m,l/v*p*m);for(let p=0;p<v;p++)u.vertexAttribDivisor(this.location+p,this.instances||0);this.update()},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const l=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,l),l}};return c.buffer=u.createBuffer(),c.extend(o),c},ln=(e,t,n)=>{const{gl:o}=e;o.bindVertexArray(t);const r=o.createBuffer();return o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,r),o.bufferData(o.ELEMENT_ARRAY_BUFFER,n,o.STATIC_DRAW),{buffer:r,vao:t,indices:n,count:n.length,update(i){o.bindVertexArray(this.vao),this.indices=i,this.count=i.length,o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,this.buffer),o.bufferData(o.ELEMENT_ARRAY_BUFFER,i,o.STATIC_DRAW)}}},nt=(e,t,n,o)=>{const{gl:r}=e;return{program:t,update(s){if(r.useProgram(this.program),!o.startsWith("m0"))if(o.startsWith("m1")&&(o=o.replace("m","")),o.startsWith("m")){const u=parseInt(o.slice(1,2));if(u>4)for(let m=0;m<u;m++){const c=r.getUniformLocation(t,`${n}.c${m+1}.v`);if(c!==null&&r.uniform4fv(c,s[m][0]),u-4===1){const l=r.getUniformLocation(t,`${n}.c${m+1}.u`);l!==null&&r.uniform1f(l,s[m][1])}else if(u-4>1){const l=r.getUniformLocation(t,`${n}.c${m+1}.u`);if(l!==null&&r[`uniform${V(u-4,4)}fv`](l,s[m][1]),u-8===1){const f=r.getUniformLocation(t,`${n}.c${m+1}.t`);f!==null&&r.uniform1f(f,s[m][2])}}}else{const m=r.getUniformLocation(t,n);m!==null&&r[`uniformMatrix${o.slice(1)}`](m,!1,s)}}else{const u=r.getUniformLocation(t,n);u!==null&&r[`uniform${o}`](u,s)}},get(){r.useProgram(this.program);const s=r.getUniformLocation(t,n);if(s!==null)return r.getUniform(this.program,s)}}},G=(e,t,n=null)=>{const{gl:o}=e,r=n?~~(n*o.drawingBufferWidth):o.drawingBufferWidth,i=n?~~(n*o.drawingBufferHeight):o.drawingBufferHeight,s=o.createTexture();return o.bindTexture(o.TEXTURE_2D,s),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,n?o.LINEAR:o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,n?o.LINEAR:o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texStorage2D(o.TEXTURE_2D,1,t,r,i),{texture:s,width:r,height:i}},oe=(e,t,n,o,r=[])=>{const i={name:t,vertex:n,fragment:o,...cn(e,t,n,o,r),recompileProgram(s){this.recompile(s,this.vertex,this.fragment,r)}};return{[t]:i}},Se=(e,t,n,o,r,i,s,u=["position"])=>{var h;const{gl:m}=e,c=r(((h=e.space)==null?void 0:h.curvature)&&e.curve,e.detail),l=v=>[{name:"viewProjection",type:"m4fv",value:Z(Q(4))},{name:"matrix",type:`m${v.dimensions}fv`,value:Z(v.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${v.dimensions}fv`,value:Z(Q(v.dimensions))},{name:"zoom",type:"1f",value:1},...["vertex","edge"].includes(t)?[{name:"thickness",type:"1f",value:0}]:[],...J(3,v.dimensions+1,1,!0).map(p=>({name:`fov${p}`,type:"1f",value:v[`fov${p}`]}))];s=He(s);const f={attributes:{},varying:u,vertex:n,type:t,fragment:o,...cn(e,t,...Ue(e,n,o,t),l(e)),recompileProgram(v){const[p,E]=Ue(v,this.vertex,this.fragment,this.type);this.recompile(v,p,E,l(v))},changeArity(v){v=He(v),this.arity!==v&&(this.arity=v,this.extendAttributes(this.instances))},extendAttributes(v){this.instances=v,u.forEach(p=>{this.attributes[p].extend(this.arity,new Float32Array(v*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(v*3),!0)},updateGeometry(v){const p=r(v.space.curvature&&v.curve,v.detail);this.indices.update(new Uint16Array(p.indices)),this.attributes.vertex.extend(3,new Float32Array(p.vertices)),this.attributes.uv.extend(2,new Float32Array(p.uvs)),this.attributes.normal.extend(3,new Float32Array(p.normals))},fillGeometry(v,p){if(p.arity!==this.arity){console.warn("Wrong arity",p.arity,this.arity);return}this.count=p.start+p.size,this.instances<this.count&&this.extendAttributes(this.count);for(let E=0;E<this.varying.length;E++){const D=this.varying[E];this.attributes[D].update(v[E],p.start,p.size)}},fillColor(v,p){if(p.arity!==this.arity){console.warn("Wrong arity",p.arity,this.arity);return}this.count=p.start+p.size,this.instances<this.count&&this.extendAttributes(this.count),this.attributes.color.update(v,p.start,p.size)},render(v){this.count&&(m.useProgram(this.program),m.bindVertexArray(this.vao),m.drawElementsInstanced(m.TRIANGLES,this.indices.count,m.UNSIGNED_SHORT,0,this.count))}};return f.vao=m.createVertexArray(),f.indices=ln(e,f.vao,new Uint16Array(c.indices)),f.attributes.vertex=re(e,f,"vertex",3,new Float32Array(c.vertices)),f.attributes.uv=re(e,f,"uv",2,new Float32Array(c.uvs)),f.attributes.normal=re(e,f,"normal",3,new Float32Array(c.normals)),f.attributes.color=re(e,f,"color",3,new Float32Array(i*3),1),u.forEach(v=>{f.attributes[v]=re(e,f,v,s,new Float32Array(i*s),1)}),f.type=t,f.arity=s,f.instances=i,f.count=0,{[t]:f}},we=(e,t,n,o)=>{const{gl:r}=e;r.bindRenderbuffer(r.RENDERBUFFER,t),o?r.renderbufferStorageMultisample(r.RENDERBUFFER,o,n,r.drawingBufferWidth,r.drawingBufferHeight):r.renderbufferStorage(r.RENDERBUFFER,n,r.drawingBufferWidth,r.drawingBufferHeight),r.bindRenderbuffer(r.RENDERBUFFER,null)},tt=({radius:e=1,widthSegments:t=16,segments:n=16}={})=>{const o=[],r=[],i=[],s=[];let u=0;const m=[];for(let c=0;c<=n;c++){const l=[],f=c/n;let h=0;c===0?h=.5/t:c===n&&(h=-.5/t);for(let v=0;v<=t;v++){const p=v/t,E=[-e*je(p*Te)*de(f*K),e*je(f*K),e*de(p*Te)*de(f*K)];r.push(...E);const D=(E[0]**2+E[1]**2+E[2]**2)**-.5;i.push(...E.map(w=>w*D)),s.push(p+h,1-f),l.push(u++)}m.push(l)}for(let c=0;c<n;c++)for(let l=0;l<t;l++){const f=m[c][l+1],h=m[c][l],v=m[c+1][l],p=m[c+1][l+1];c!==0&&o.push(f,h,p),c!==n-1&&o.push(h,v,p)}return{vertices:r,normals:i,uvs:s,indices:o}},at=({radius:e=null,radiusTop:t=1,radiusBottom:n=1,height:o=1,radialSegments:r=8,segments:i=1}={})=>{const s=[],u=[],m=[],c=[];e!==null&&(t=e,n=e);let l=0;const f=[],h=o/2,v=(n-t)/o;for(let p=0;p<=i;p++){const E=[],D=p/i,w=D*(n-t)+t;for(let C=0;C<=r;C++){const y=C/r,z=y*Te,U=de(z),k=je(z),ae=[w*U,-D*o+h,w*k];u.push(...ae);const M=[U,v,k],_=(M[0]**2+M[1]**2+M[2]**2)**-.5;m.push(...M.map(xe=>xe*_)),c.push(y,1-D),E.push(l++)}f.push(E)}for(let p=0;p<r;p++)for(let E=0;E<i;E++){const D=f[E][p],w=f[E+1][p],C=f[E+1][p+1],y=f[E][p+1];s.push(D,w,y),s.push(w,C,y)}return{vertices:u,normals:m,uvs:c,indices:s}},rt=({segments:e=3}={})=>{const t=[],n=[],o=[],r=[],i=1/e;for(let s=0;s<e+1;s++)for(let u=0;u<s+1;u++)n.push((2*u-s)*i/2,s*i,0),o.push(0,0,1),r.push(i*u,1-i*s);for(let s=1;s<e+1;s++)for(let u=0;u<s;u++){const m=s*(s+1)/2+u,c=s*(s-1)/2+u;if(t.push(m,c,m+1),s<e){const l=(s+1)*(s+2)/2+u;t.push(l+1,m,m+1)}}return{vertices:n,normals:o,uvs:r,indices:t}},ot=`#include globals
#include fragment
`,st=`#include globals
#include dimensions

uniform float thickness;

uniform matN metric;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS < 2
in float position;
in float target;
#elif DIMENSIONS == 2
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

#include vertexouthead
#include project

#define STABLE 0

void main() {
  vecN positionN = multiplyMatrix(matrix, adapt(position));
  vecN targetN = multiplyMatrix(matrix, adapt(target));

  vecN pos = nmix(positionN, targetN, uv.y);
  vecN next = nmix(positionN, targetN, uv.y + DT);
  // Position segments on hypersurface

  #if defined(SEGMENTS) && CURVATURE != 0 && DIMENSIONS >= 2
  pos = xnormalize(pos);
  next = xnormalize(next);
  #endif

  vec3 proj = xproject(pos);
  vec3 nextProj = xproject(next);
  vec3 tangent = proj - nextProj;
  if(length(tangent) < 1e-6) {
    tangent = xproject(positionN) - xproject(targetN);
  }
  tangent = normalize(tangent);

  #if DIMENSIONS < 3 || (PROJECTION3 != -1 && PROJECTION3 != 8)
  vec3 norm = vec3(0, 0, -1);
  #elif STABLE == 0
  vec3 norm = cross(nextProj + NOISE, proj);
  #else
  // Find a stable norm for the whole tube
  vecN mid = nmix(positionN, targetN, .5);

  vec3 start = xproject(positionN);
  vec3 end = xproject(targetN);
  #if defined(SEGMENTS) && CURVATURE != 0
  mid = xnormalize(mid);
  #endif
  vec3 middle = xproject(mid);
  vec3 norm = cross(end - start, middle - start);

  // If there is no curvature the tube will be straight:
  if(length(norm) < 1e-4) {
    middle += NOISE;
    norm = cross(end - start, middle - start);
  }
  #endif

  // Rodrigues' rotation formula: rotate norm around tangent by angle r:
  float r = uv.x * TAU;
  norm = normalize(norm * cos(r) + cross(tangent, norm) * sin(r));
  proj = inflate(proj, pos, norm, thickness);
  #include vertexout
}
`,it=`#include globals
#include fragment
`,ct=`#include globals
#include dimensions

uniform matN metric;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS < 2
in float position;
in float target;
in float center;
#elif DIMENSIONS == 2
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

#include vertexouthead
#include project

void main() {
  vecN positionN = multiplyMatrix(matrix, adapt(position));
  vecN targetN = multiplyMatrix(matrix, adapt(target));
  vecN centerN = multiplyMatrix(matrix, adapt(center));

  vecN pos = trix(centerN, positionN, targetN, uv);
  vecN next = trix(centerN, positionN, targetN, uv - vec2(NOISE.x, DT));
  vecN other = trix(centerN, positionN, targetN, uv - vec2(DT, NOISE.z));

  #if defined(SEGMENTS) && CURVATURE != 0
  if(ndot(pos, pos) > 1e-6) {
    pos = xnormalize(pos);
  }
  next = xnormalize(next);
  other = xnormalize(other);
  #endif

  vec3 proj = xproject(pos);
  #if DIMENSIONS < 3
  vec3 norm = vec3(0, 0, -1);
  #else
  vec3 drdx = xproject(next) - proj;
  vec3 drdy = xproject(other) - proj;

  vec3 norm = normalize(cross(drdx, drdy));
  #endif
  #include vertexout
}
`,lt=`#include globals
#include fragment
`,ut=`#include globals
#include dimensions

uniform float thickness;
uniform matN metric;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS < 2
in float position;
#elif DIMENSIONS == 2
in vec2 position;
#elif DIMENSIONS == 3
in vec3 position;
#elif DIMENSIONS == 4
in vec4 position;
#elif DIMENSIONS >= 5
in mat3 position;
#endif

#include vertexouthead
#include project

void main() {
  vecN pos = multiplyMatrix(matrix, adapt(position));

  #if defined(SEGMENTS) && CURVATURE != 0 && DIMENSIONS >= 2
    // Normalization is done mainly to remove OOD points
  pos = xnormalize(pos);
  #endif

  vec3 proj = xproject(pos);
  vec3 norm = normal;
  proj = inflate(proj, pos, normal, thickness);
  #include vertexout
}
`,ye={vertex:(e,t)=>tt({lowest:{widthSegments:6,segments:2},lower:{widthSegments:8,segments:4},low:{widthSegments:8,segments:8},lowish:{widthSegments:12,segments:8},medium:{widthSegments:16,segments:16},highish:{widthSegments:32,segments:16},high:{widthSegments:32,segments:32},higher:{widthSegments:64,segments:32},ultra:{widthSegments:128,segments:64}}[t||"medium"]),edge:(e,t)=>at({lowest:{segments:e?4:1,radialSegments:4},lower:{segments:e?8:1,radialSegments:5},low:{segments:e?12:1,radialSegments:6},lowish:{segments:e?14:1,radialSegments:7},medium:{segments:e?16:1,radialSegments:8},highish:{segments:e?24:1,radialSegments:10},high:{segments:e?32:1,radialSegments:12},higher:{segments:e?64:1,radialSegments:16},ultra:{segments:e?128:1,radialSegments:32}}[t||"medium"]),face:(e,t)=>rt({lowest:{segments:e?4:1},lower:{segments:e?8:1},low:{segments:e?12:1},lowish:{segments:e?14:1},medium:{segments:e?16:1},highish:{segments:e?24:1},high:{segments:e?32:1},higher:{segments:e?64:1},ultra:{segments:e?128:1}}[t||"medium"])};function dt(e){return{meshes:$.slice(0,3),...Se(e,"vertex",ut,lt,ye.vertex,1024,e.dimensions),...Se(e,"edge",st,ot,ye.edge,1024,e.dimensions,["position","target"]),...Se(e,"face",ct,it,ye.face,1024,e.dimensions,["position","target","center"]),reset(){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].count=0},changeArity(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].changeArity(t)},updateGeometries(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].updateGeometry(t)},recompilePrograms(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].recompileProgram(t)},updateUniforms(t,n=!1,o=null){for(let r=0;r<this.meshes.length;r++){const i=this.meshes[r],s=this[i];if(!n){s.uniforms.metric.update(Z(t.space.metric)),s.uniforms.matrix.update(Z(t.matrix));for(let u=4;u<=t.dimensions;u++)s.uniforms[`fov${u}`].update(1/nn(K*t[`fov${u}`]*.5/180));i==="vertex"?s.uniforms.thickness.update(t.sizeVertex):i==="edge"&&s.uniforms.thickness.update(t.sizeEdge)}s.uniforms.viewProjection.update(t.camera.viewProjection),s.uniforms.zoom.update(n?o:t.zoom),s.uniforms.eye.update(t.camera.eye)}},fillGeometry(t){for(let n=0;n<this.meshes.length;n++){const o=this.meshes[n],r=this[o];t.data[n]&&r.fillGeometry(t.data[n],t.infos[n])}},fillColor(t){for(let n=0;n<this.meshes.length;n++){const o=this.meshes[n],r=this[o];t.data[n]&&r.fillColor(t.data[n],t.infos[n])}}}}const ft=`#version 300 es
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
`,mt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,pt=`#version 300 es
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
`,vt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,ht=`#version 300 es
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
`,gt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,xt=`#version 300 es
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
`,bt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Et=`#version 300 es
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
`,Nt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function St(e){return{...oe(e,"oit",bt,xt,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...oe(e,"down",gt,ht,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...oe(e,"up",Nt,Et,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...oe(e,"afterImage",mt,ft,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...oe(e,"bloom",vt,pt,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function un(e){const{gl:t}=e,n=te[e.ambiance],o=e.msaa?V(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(t.bindFramebuffer(t.FRAMEBUFFER,e.fb.base),we(e,e.rb.base,t.RGBA8,o),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,e.rb.base),we(e,e.rb.depth,t.DEPTH_COMPONENT24,o),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),e.fb.oit&&(t.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(t.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(t.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&t.deleteRenderbuffer(e.rb.depth_copy),n.transparency==="oit"&&(e.fb.oit=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.oit),o?(e.rb.depth_copy=t.createRenderbuffer(),we(e,e.rb.depth_copy,t.DEPTH_COMPONENT24),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth_copy)):t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),e.textures.oitAccum=G(e,t.RGBA16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=G(e,t.R16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT1,t.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(t.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(t.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(t.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(t.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),n.afterImage&&(e.fb.afterImage=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=G(e,t.RGBA8),e.textures.afterImageScreen=G(e,t.RGBA8),e.textures.afterImageOutScreen=G(e,t.RGBA8)),e.fb.kawase&&(t.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(t.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let r=0;r<e.textures.kawase.length;r++)t.deleteTexture(e.textures.kawase[r].texture);e.textures.kawase=null}if(e.textures.blur&&(t.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(t.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),n.glow){e.fb.kawase=t.createFramebuffer(),e.fb.bloom=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let r=0;r<n.glow.steps;r++)e.textures.kawase[r]=G(e,t.RGBA8,n.glow.pow**-r);e.textures.blur=G(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.blur.texture,0),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=G(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.bloom.texture,0)}}const dn=window.location.search.includes("stats");let fe;dn&&(fe=new Un,fe.dom.id="stats",document.body.appendChild(fe.dom));const wt=e=>{const t=document.createElement("canvas");t.id="webgl2",document.body.insertBefore(t,document.body.firstChild);const n=t.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:n},!n){console.error("Unable to initialize WebGL. Your browser may not support it.");return}n.getExtension("EXT_color_buffer_float"),n.enable(n.DEPTH_TEST);const o={zoom:1,fov:K/3,eye:[0,0,-e.zoom],near:.01,far:1e3,update(c){const l=Q(4);l[0][3]=this.eye[0],l[1][3]=this.eye[1],l[2][3]=this.eye[2],l[0][0]=-1,l[2][2]=-1;const f=Nn(l);this.aspect=c?c.fullWidth/c.fullHeight:n.canvas.clientWidth/n.canvas.clientHeight,this.zoom=V(this.aspect,1);const h={left:0,right:0,top:0,bottom:0,near:this.near,far:this.far};h.top=this.near*nn(this.fov/2)/this.zoom;let v=2*h.top,p=this.aspect*v;h.left=-.5*p,c&&(h.left+=c.x*p/c.fullWidth,h.top-=c.y*v/c.fullHeight,p*=c.width/c.fullWidth,v*=c.height/c.fullHeight),h.bottom=h.top-v,h.right=h.left+p;const E=Sn(h);this.viewProjection=Z(Re(E,f))}};o.update();const r=St(e),i=dt(e),s={base:n.createRenderbuffer(),depth:n.createRenderbuffer()},u={base:n.createFramebuffer()};return{...e,gl:n,camera:o,meshes:i,passes:r,rb:s,fb:u,textures:{}}},he=(e,t=null)=>{e.camera.fov=e.fov3?K*e.fov3/180:1,t!==null&&(e.camera.eye[2]=t===null?-e.zoom:-t),e.camera.update(),e.meshes.updateUniforms(e,!0,t)},yt=e=>{const t=te[e.ambiance];e.gl.clearColor(...t.background),t.glow&&(e.passes.bloom.uniforms.exposure.update(t.glow.exposure),e.passes.bloom.uniforms.strength.update(t.glow.strength),e.passes.down.uniforms.offset.update(t.glow.offset.down),e.passes.up.uniforms.offset.update(t.glow.offset.up)),t.afterImage&&e.passes.afterImage.uniforms.strength.update(t.afterImage)},ne=(e,t)=>{dn&&fe.update();const{gl:n}=e,o=e.msaa?V(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,r=te[e.ambiance];Qn(n.canvas,e.subsampling,t)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),un(e),e.camera.update(t),e.meshes.updateUniforms(e,!0,e.zoom)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),r.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),r.transparent.vertex||e.meshes.vertex.render(e),r.transparent.edge||e.meshes.edge.render(e),r.transparent.face||e.meshes.face.render(e),(!e.hidden.includes("vertex")&&r.transparent.vertex||!e.hidden.includes("edge")&&r.transparent.edge||!e.hidden.includes("face")&&r.transparent.face)&&(r.transparency==="oit"?(o&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),r.transparent.vertex&&e.meshes.vertex.render(e),r.transparent.edge&&e.meshes.edge.render(e),r.transparent.face&&e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):r.transparency==="blend"&&(n.enable(n.BLEND),r.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),r.transparent.vertex&&e.meshes.vertex.render(e),r.transparent.edge&&e.meshes.edge.render(e),r.transparent.face&&e.meshes.face.render(e)));const i=r.afterImage?e.fb.afterImage:r.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,i),r.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let s=e.textures.bloom;if(r.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),r.glow?s=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),r.glow){n.disable(n.BLEND),r.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let u=0;u<r.glow.steps;u++){const m=u===0?s:e.textures.kawase[u-1],c=e.textures.kawase[u];n.viewport(0,0,c.width,c.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,m.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,c.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let u=r.glow.steps-1;u>=0;u--){const m=e.textures.kawase[u],c=u===0?e.textures.blur:e.textures.kawase[u-1];n.viewport(0,0,c.width,c.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,m.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,c.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,s.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=ne;const se=.9,It=.95,jt=10,fn=(e,t,n,o,r,i,s)=>{if(r<2)return[[],[]];const{combinations:u}=n,m=[[],[]],c=(f,h)=>{tn(o,Re(an(f,h,r,i,yn(s)),o))},l=2*t+1>u.length-1?[t*2]:[t*2+1,t*2];for(let f=0;f<l.length;f++){const h=l[f];if(m[f].push(h),n.lock&&u[h][0]>=0&&u[h][1]>=0)for(let v=0;v<u.length;v++)u[v][0]<0||u[v][1]<0||!u[h].some(p=>u[v].includes(p))&&(!(f>0)||v!==l[1-f])&&m[f].push(v)}for(let f=0;f<m.length;f++){const h=m[f];for(let v=0;v<h.length;v++){const p=h[v];c(e[f],u[p])}}return m},Tt=(e,t,n,o,r,i,s)=>{const{code:u}=e,m=.1;if(e.altKey||e.ctrlKey||e.metaKey)return;const c=(l,f,h)=>fn([l,f],o<3?0:h,t,n,o,r,s);if(u==="ArrowLeft"||u==="KeyA")c(m,0,0);else if(u==="ArrowRight"||u==="KeyD")c(-m,0,0);else if(u==="ArrowUp"||u==="KeyW")c(0,m,0);else if(u==="ArrowDown"||u==="KeyS")c(0,-m,0);else if(u==="PageUp"||u==="KeyQ")c(m,0,1);else if(u==="PageDown"||u==="KeyE")c(-m,0,1);else if(u==="Digit1")c(0,m,1);else if(u==="Digit3")c(0,-m,1);else if(u==="KeyZ")c(m,0,2);else if(u==="KeyC")c(-m,0,2);else if(u==="ControlLeft")i("shift",(t.shift+1)%t.maxShift);else return;return!0},Ot=(e,t,n,o)=>{const r=g.useRef(null),i=g.useRef({pause:new Set,speed:null,zoom:null,t:null}),s=g.useRef({matrix:e.matrix,zoom:e.zoom,pointers:new Map});g.useEffect(()=>{s.current.matrix=e.matrix},[e.matrix]),g.useEffect(()=>{s.current.zoom=e.zoom,i.current.zoom=null},[e.zoom]);const u=g.useCallback(({matrix:c,zoom:l}={matrix:!0,zoom:!0})=>{if(!e.matrix._reset){if(c)for(let f=0;f<e.meshes.meshes.length;f++)e.meshes[e.meshes.meshes[f]].uniforms.matrix.update(Z(s.current.matrix));l&&he(e,s.current.zoom)}},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.error,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,e.stellation,e.subsampling,e.zoom]);g.useEffect(()=>{i.current.speed=new Array(t.combinations.length).fill(0)},[t.combinations.length]),g.useEffect(()=>{e.matrix._reset&&(delete e.matrix._reset,i.current.speed=new Array(t.combinations.length).fill(0))},[t.combinations.length,e.matrix]);const m=g.useCallback(()=>{const{pause:c,speed:l,zoom:f}=i.current;i.current.t||(i.current.t=performance.now());const h=performance.now()-i.current.t;let v=!1;for(let p=0;p<l.length;p++)if(l[p]!==0&&(v=!0,t.auto==="damp"&&(l[p]*=It,W(l[p])<1e-6&&(l[p]=0)),!c.has(p))){const E=Ce(V(l[p]*h,.5),-.5);tn(s.current.matrix,Re(an(E,t.combinations[p],e.dimensions,e.space.metric,i.current.zoom||s.current.zoom),s.current.matrix))}if(v&&u({matrix:!0}),f){const p=ce(s.current.zoom)/ce(se),E=ce(f)/ce(se);s.current.zoom*=Qe(se,(E-p)*V(1,h*.001*2)),W(f-s.current.zoom)<f*.001&&(s.current.zoom=f,i.current.zoom=null),v=!0,u({zoom:!0})}if(l.reduce((p,E)=>W(p)+W(E),0)===0&&i.current.zoom===null&&!e.matrix._reset){o({matrix:s.current.matrix,zoom:s.current.zoom}),r.current=null,i.current.t=null;return}v&&ne(e),i.current.t=performance.now(),r.current=requestAnimationFrame(m)},[u,t.auto,t.combinations,e.dimensions,e.space]);g.useEffect(()=>{i.current.speed.reduce((w,C)=>W(w)+W(C),0)>0&&(r.current=requestAnimationFrame(m));let c=null,l=null;const f=[],h=()=>{const w=s.current.pointers.values(),C=w.next().value,y=w.next().value;return wn(C[0]-y[0],C[1]-y[1])},v=w=>{w.button!==0||w.target.tagName!=="CANVAS"||(t.auto&&(l=performance.now(),s.current.pointers.size===1?(i.current.pause.delete(t.shift*2),i.current.pause.delete(t.shift*2+1)):(i.current.pause.add(t.shift*2),i.current.pause.add(t.shift*2+1))),s.current.pointers.set(w.pointerId,[w.clientX,w.clientY]))},p=w=>{if(!s.current.pointers.has(w.pointerId))return;const C=s.current.pointers.get(w.pointerId),y=[-(w.clientX-C[0])/window.innerHeight,-(w.clientY-C[1])/window.innerHeight];if(s.current.pointers.set(w.pointerId,[w.clientX,w.clientY]),s.current.pointers.size>1){if(c===null){c=h(),i.current.zoom=s.current.zoom;return}const k=h();s.current.zoom*=c/k,c=k,he(e,s.current.zoom),i.current.zoom=null,ne(e);return}let z=t.shift;!z&&w.shiftKey?z=1:!z&&w.altKey?z=2:!z&&w.ctrKey?z=3:!z&&w.metaKey&&(z=4);const U=fn([K*y[0],K*y[1]],z,t,s.current.matrix,e.dimensions,e.space.metric,i.current.zoom||s.current.zoom);if(t.auto){const k=V(50,performance.now()-l);l=performance.now(),f.push([y[0]*1.5/k,y[1]*1.5/k]),f.length>jt&&f.shift();const ae=f.reduce((M,_)=>[M[0]+_[0],M[1]+_[1]],[0,0]);for(let M=0;M<2;M++)for(let _=0;_<U[M].length;_++)i.current.speed[U[M][_]]=ae[M]/f.length;r.current||(r.current=requestAnimationFrame(m))}u({matrix:!0})},E=w=>{s.current.pointers.clear(),t.auto&&(f.length=0,l=null,i.current.pause.delete(t.shift*2),i.current.pause.delete(t.shift*2+1)),c=null};document.addEventListener("pointerdown",v),document.addEventListener("pointermove",p),document.addEventListener("pointerup",E);const D=i.current;return()=>{document.removeEventListener("pointerdown",v),document.removeEventListener("pointermove",p),document.removeEventListener("pointerup",E),r.current&&(cancelAnimationFrame(r.current),r.current=null,D.t=null)}},[t,e.dimensions,e.space,e.camera,m,u]),g.useEffect(()=>{const c=l=>{l.target===document.body&&Tt(l,t,s.current.matrix,e.dimensions,e.space.metric,n,i.current.zoom||s.current.zoom)&&(u({matrix:!0}),ne(e))};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[u,t,e.space,e.dimensions,n]),g.useEffect(()=>{const c=l=>{if(l.target.tagName!=="CANVAS")return;const f=i.current.zoom===null?s.current.zoom:i.current.zoom;i.current.zoom=f*(l.deltaY<0?se:1/se),r.current||(r.current=requestAnimationFrame(m))};return document.addEventListener("wheel",c),()=>{document.removeEventListener("wheel",c)}},[m]),g.useEffect(()=>{const c=l=>{if(l.button!==0||l.target.tagName!=="CANVAS")return;const f=i.current.zoom===null?s.current.zoom:i.current.zoom,h=f<.5?5:f<2?.25:1;i.current.zoom=h,r.current||(r.current=requestAnimationFrame(m))};return document.addEventListener("dblclick",c),()=>{document.removeEventListener("dblclick",c)}},[m])};function At({runtime:e,rotations:t,updateRotations:n,updateParams:o}){return Ot(e,t,n,o),null}function Dt(){return new Worker(""+new URL("shape.worker-713f94f1.js",import.meta.url).href)}const Ct=(e,t)=>{g.useEffect(()=>{t(n=>{n.meshes.reset();const o=In(n.coxeter,n.stellation),r=jn(o),{vertices:i,normals:s}=Tn(r,n.centered),m=n.mirrors.every(l=>!l)?n.mirrors.map(()=>1):n.mirrors.map(l=>On(l)),c=An(ke(i,m),r.metric);return r.rootVertex=c,r.rootVertices=i,r.rootNormals=s,r.boundnesses=Dn(i).map(l=>Cn(ke(r.metric,l),l)).map(l=>W(l)<1e-9?"ideal":r.curvature*l<-1e-9?"ultraideal":"inside"),{...n,space:r,error:null}})},[e.dimensions,e.coxeter,e.mirrors,e.stellation,e.centered,t]),g.useEffect(()=>{t(n=>{var r;const o={...n,iteration:-1,paused:!1,done:!1};return(n.processing||n.error)&&((r=n.shaper)==null||r.terminate(),o.shaper=new Dt),o})},[e.crosssection,e.space,e.extrarels,e.reciprocation,t]),g.useEffect(()=>{t(n=>{var r;const o={...n};return((r=n.polytope)==null?void 0:r.size)>n.limit&&(o.paused=!0),o})},[e.polytope,e.limit,t]),g.useEffect(()=>{t(n=>({...n,paused:!1}))},[e.limit,t]),g.useEffect(()=>{t(n=>n.iteration===0?n:(n.shaper.postMessage({type:"iterate",space:n.space,dimensions:n.dimensions,coxeter:n.coxeter,stellation:n.stellation,mirrors:n.mirrors,ambiance:n.ambiance,batch:n.iteration===-1?Ce(1,~~(n.batch/10)):n.batch,hidden:n.hidden,reciprocation:n.reciprocation,extrarels:n.extrarels,section:n.crosssection?n.section:null,iteration:n.iteration}),{...n,iteration:n.iteration===-1?0:n.iteration,processing:!0}))},[e.crosssection,e.iteration,e.limit,e.extrarels,e.batch,e.shaper,e.space,e.reciprocation,t]),g.useEffect(()=>{t(n=>n.iteration<0?n:(n.shaper.postMessage({type:"paint",ambiance:n.ambiance,hidden:n.hidden}),{...n,processing:!0}))},[e.ambiance,t]),g.useEffect(()=>{t(n=>n.iteration<0?n:(n.shaper.postMessage({type:"section",section:n.crosssection?n.section:null,ambiance:n.ambiance,hidden:n.hidden}),{...n,processing:!0}))},[e.crosssection?e.section:null,t]),g.useEffect(()=>{t(n=>n.iteration<0?n:(n.shaper.postMessage({type:"display",ambiance:n.ambiance,hidden:n.hidden}),{...n,processing:!0}))},[e.hidden,t]),g.useEffect(()=>{t(n=>({...n,iteration:n.paused?n.iteration:n.iteration+1}))},[e.paused,t]),g.useEffect(()=>{if(!e.shaper)return;const n=({data:r})=>{r.error?console.error(r.error):t(i=>{const s={...i,processing:!1};return r.polytope&&(s.done=r.polytope.done,s.polytope=r.polytope,s.iteration=i.paused||r.polytope.done?i.iteration:i.iteration+1),r.geometry&&s.meshes.fillGeometry(r.geometry),r.color&&s.meshes.fillColor(r.color),s})},o=r=>{console.error(r),t(i=>({...i,error:r,processing:!1,done:!0,iteration:0}))};return e.shaper.addEventListener("message",n),e.shaper.addEventListener("error",o),()=>{e.shaper.removeEventListener("message",n),e.shaper.removeEventListener("error",o)}},[e.shaper,e.paused,t])};function Rt({runtime:e,setRuntime:t}){return Ct(e,t),null}const Ft=(e,t)=>{g.useEffect(()=>{t(n=>(he(n,n.zoom),n))},[e.zoom,t]),g.useEffect(()=>{t(n=>(he(n),n))},[e.fov3,e.camera,t]),g.useEffect(()=>{t(n=>(yt(n),un(n),n))},[e.ambiance,e.msaa,e.msaaSamples,t]),g.useEffect(()=>{t(n=>(n.meshes.recompilePrograms(n),n))},[e.ambiance,e.curve,e.dimensions,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{t(n=>(n.meshes.changeArity(n.dimensions),n))},[e.dimensions,t]),g.useEffect(()=>{t(n=>(n.meshes.updateGeometries(n),n))},[e.space,e.curve,e.detail,t]),g.useEffect(()=>{t(n=>(n.meshes.updateUniforms(n),n))},[e.ambiance,e.curve,e.dimensions,e.sizeVertex,e.sizeEdge,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.detail,e.matrix,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{const n=new ResizeObserver(()=>{ne(e)});return n.observe(e.gl.canvas,{box:"content-box"}),()=>n.disconnect()},[e.gl.canvas]),g.useEffect(()=>{t(n=>(ne(n),n))},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.edge,e.error,e.face,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.iteration,e.detail,e.matrix,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.processing,e.ranges,e.space,e.stellation,e.subsampling,e.sizeVertex,e.sizeEdge,e.polytope,e.vertex,e.zoom])};function zt({runtime:e,setRuntime:t}){return Ft(e,t),null}function Pt({runtime:e,setRuntime:t,rotations:n,updateRotations:o,updateParams:r}){var s,u,m;window.rt=e,window.ro=n;const i=g.useCallback(c=>l=>{t(f=>({...f,error:{[c]:l.message}}))},[t]);return _n(e,t),a.jsxs(a.Fragment,{children:[a.jsx(be,{error:(s=e.error)==null?void 0:s.process,onError:i("process"),children:a.jsx(Rt,{runtime:e,setRuntime:t})}),e.space?a.jsxs(a.Fragment,{children:[a.jsx(be,{error:(u=e.error)==null?void 0:u.render,onError:i("render"),children:a.jsx(zt,{runtime:e,setRuntime:t})}),a.jsx(be,{error:(m=e.error)==null?void 0:m.interact,onError:i("interact"),children:a.jsx(At,{runtime:e,rotations:n,updateRotations:o,updateParams:r})})]}):null]})}const Mt="modulepreload",Lt=function(e,t){return new URL(e,t).href},$e={},kt=function(t,n,o){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Lt(i,o),i in $e)return;$e[i]=!0;const s=i.endsWith(".css"),u=s?'[rel="stylesheet"]':"";if(!!o)for(let l=r.length-1;l>=0;l--){const f=r[l];if(f.href===i&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Mt,s||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),s)return new Promise((l,f)=>{c.addEventListener("load",l),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})},mn=a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",strokeWidth:"3",children:[a.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m31.376 13.781l-2.673-7.659c-1.554-4.453-7.852-4.453-9.406 0l-4.56 13.067c-.922 2.644 1.04 5.408 3.841 5.408H24"}),a.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m15.993 14.24l-8.11.175c-4.716.102-6.663 6.092-2.907 8.946l11.018 8.374c2.23 1.695 5.465.682 6.33-1.982L24 24.597"}),a.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m11.675 29.012l-2.34 7.767c-1.36 4.517 3.736 8.219 7.611 5.53l11.369-7.892c2.3-1.597 2.337-4.987.071-6.633L24 24.597"}),a.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m24.39 37.683l6.664 4.625c3.875 2.69 8.971-1.012 7.61-5.53l-3.992-13.25c-.807-2.681-4.02-3.764-6.286-2.118L24 24.597"}),a.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m36.566 28.27l6.458-4.908c3.756-2.855 1.81-8.845-2.907-8.947l-13.836-.298c-2.8-.06-4.822 2.66-3.956 5.324L24 24.597"})]}),pn=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("g",{id:"feTarget0",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:a.jsx("g",{id:"feTarget1",fill:"currentColor",fillRule:"nonzero",children:a.jsx("path",{id:"feTarget2",d:"M19.938 13A8.004 8.004 0 0 1 13 19.938V22h-2v-2.062A8.004 8.004 0 0 1 4.062 13H2v-2h2.062A8.004 8.004 0 0 1 11 4.062V2h2v2.062A8.004 8.004 0 0 1 19.938 11H22v2h-2.062ZM12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"})})})}),_t=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"})}),Ht=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20.777a8.942 8.942 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a8.961 8.961 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A8.954 8.954 0 0 1 10 3.223"})}),Ut=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",children:a.jsxs("g",{fill:"none",stroke:"currentColor",children:[a.jsx("path",{strokeLinecap:"round",d:"M13.326 8.5a6.5 6.5 0 1 1-.558-4.5"}),a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 2v2.5H11"})]})}),Bt=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:a.jsx("path",{fill:"currentColor",d:"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"})}),$t=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M16 6v1h.75A3.25 3.25 0 0 1 20 10.25v7.5A3.25 3.25 0 0 1 16.75 21h-9.5A3.25 3.25 0 0 1 4 17.75v-7.5A3.25 3.25 0 0 1 7.25 7H8V6a4 4 0 1 1 8 0ZM9.5 6v1h5V6a2.5 2.5 0 0 0-5 0Zm2.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"})}),Vt=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M16 5a2.5 2.5 0 0 1 5 0v.25a.75.75 0 0 0 1.5 0V5a4 4 0 0 0-8 0v2H7.25A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21h9.5A3.25 3.25 0 0 0 20 17.75v-7.5A3.25 3.25 0 0 0 16.75 7H16V5Zm-4 10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"})}),Gt=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})}),Jt=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),Wt=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),Kt=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),Xt=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),qt=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),Yt=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M14 19V5h4v14zm-8 0V5h4v14z"})}),Zt=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"})}),Ve=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"})}),Ge=a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"})}),Qt=e=>{for(e=e.replace(/\s/g,""),e=e.replace(/(\w)(\^-?\d+)/g,"($1)$2");;){let t=e.replace(/\((\w+)\)\^(-?\d+)/g,(n,o,r)=>(r=parseInt(r),r<0&&(o=o.split("").reverse().map(i=>me(i)).join(""),r=-r),o.repeat(r)));if(t===e)break;e=t}return e},Ae=e=>{for(e=e.replace(/\s/g,"");;){let t=e.replace(/(\w+)(\1)+/g,(n,o)=>{const r=n.length/o.length;return`(${o})^${r}`});if(t=t.replace(/\(\((\w+)\)\^(\d+)\)\^(\d+)/g,(n,o,r,i)=>`(${o})^${parseInt(r)*parseInt(i)}`),t=t.replace(/\((\w+)\)\^(\d+)(\1)/g,(n,o,r)=>`(${o})^${parseInt(r)+1}`),t=t.replace(/(\w+)\(\1\)\^(\d+)/g,(n,o,r)=>`(${o})^${parseInt(r)+1}`),t===e)break;e=t}return e=e.replace(/\(([A-Z]+)\)\^(\d+)/g,(t,n,o)=>(n=n.split("").reverse().map(r=>me(r)).join(""),`(${n})^-${o}`)),e=e.replace(/([A-Z]+)/g,(t,n)=>(n=n.split("").reverse().map(o=>me(o)).join(""),`(${n})^-1`)),e=e.replace(/\((\w)\)(\^-?\d+)/g,"$1$2"),e};typeof window<"u"&&(window.factor=Ae);function N({type:e,subtype:t,order:n,dimensions:o}){return a.jsxs("span",{className:"space",title:`${e} ${t}${n>1?`of order ${n}`:""}`,children:[e===null||e==="indefinite"||e==="empty"?"𝕏":e==="affine"?"𝔼":e==="finite"?"𝕊":"ℍ",o!==void 0?a.jsxs("sup",{children:[o-1,n>1?a.jsx("sup",{children:n}):null]}):null,e==="hyperbolic"?a.jsx("sub",{children:{compact:" ",paracompact:"*",hypercompact:"+"}[t]}):null]})}const ea=(...e)=>{if(Array.isArray(e[0]))return{coxeter:e,dimensions:e.length,extended:!0};const t=e.length+1;return{coxeter:new Array(t).fill().map((o,r)=>new Array(t).fill().map((i,s)=>r===s?1:r===s+1||s===r+1?e[V(r,s)]:2)),dimensions:t}},na=(...e)=>{if(Array.isArray(e[0]))return{stellation:e};const t=e.length+1;return{stellation:new Array(t).fill().map((o,r)=>new Array(t).fill().map((i,s)=>r===s?1:r===s+1||s===r+1?e[V(r,s)]:1))}},d=(e,t,n,o)=>{const r=ea(...e);n&&!Array.isArray(n)&&(o=n,n=null);const{dimensions:i}=r,s={...pe,...r,hidden:i<=4?[]:["vertex","face"],curve:i>3,ambiance:"colorful",matrix:Q(i),zoom:i<=3?2:i>4?3:5,centered:!0,...Object.fromEntries(J(3,i+1).map(u=>[`projection${u}`,Oe(u,i)])),...o||{}};return t?s.mirrors=t:s.mirrors=new Array(i).fill().map((u,m)=>m===0?1:0),n?s.stellation=na(...n).stellation:s.stellation=new Array(i).fill().map((u,m)=>new Array(i).fill(1)),s},A=(e,t=[])=>({...e,subforms:[...Object.entries(ta(e.params.dimensions)).map(([n,o])=>({name:`${n} ${e.name}`,params:{...e.params,mirrors:o}})),...t]}),F=(e,t,n,o)=>(n&&!Array.isArray(n)&&(o=n,n=null),{...d(e,t,n),ambiance:"cathedral",sizeEdge:40,sizeVertex:50,hidden:["vertex"],curve:!0,zoom:1,...o}),I=(e,t,n,o)=>(n&&!Array.isArray(n)&&(o=n,n=null),{...d(e,t,n),ambiance:"cathedral",sizeEdge:40,sizeVertex:50,hidden:["vertex"],curve:!0,zoom:8,...o}),j=(e,t,n,o)=>(n&&!Array.isArray(n)&&(o=n,n=null),{...d(e,t,n),ambiance:"neon",hidden:["vertex","face"],centered:!1,sizeEdge:25,zoom:2,...o}),b=(e,t,n,o)=>{n&&!Array.isArray(n)&&(o=n,n=null);const r=d(e,t,n),i=r.dimemsions;return{...r,ambiance:"neon",hidden:["vertex","face"],curve:!0,centered:!1,sizeEdge:i>4?15:25,zoom:1.5,...o}},ta=e=>{if(e===3)return{Rectified:[0,1,0],Truncated:[1,1,0],Cantellated:[1,0,1],Runcitruncated:[1,1,0],Bitruncated:[0,1,1],Omnitruncated:[1,1,1],Snub:["s","s","s"]};if(e===4)return{Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1],Omnisnub:["s","s","s","s"]};if(e===5)return{Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1],Omnisnub:["s","s","s","s","s"]};if(e===6)return{Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(e===7)return{Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(e===8)return{Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(e===9)return{Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},L={0:"Apeirogonal",3:"Triangular",4:"Square",5:"Pentagonal",6:"Hexagonal",7:"Heptagonal",8:"Octagonal",9:"Nonagonal",10:"Decagonal",11:"Hendecagonal",12:"Dodecagonal"},R={0:"Apeiro",3:"Tri",4:"Tetra",5:"Penta",6:"Hexa",7:"Hepta",8:"Octa",9:"Nona",10:"Deca",11:"Hendeca",12:"Dodeca"},T=([e,t,n])=>{const o=u=>u===0?"infinite":u,r=(u,m,c)=>`${R[u]}${R[m].toLowerCase()}${R[c].toLowerCase()}gonal`,i=(u,m,c)=>`Di${R[u].toLowerCase()}gonal ${R[m]}${R[c].toLowerCase()}gonal`,s=n?[[1,e,n],[e,1,t],[n,t,1]]:[e,t];return{name:(n?`Di${R[t].toLowerCase()}gonal ${R[n]}${R[e].toLowerCase()}gonal`:e===t?`${R[e]}${L[t].toLowerCase()}`:`${L[e]} ${L[t]}`).replace(/aa/g,"a"),params:F(s,[1,0,0]),subforms:[{name:n?r(n,t,e):`Truncated Order-${o(t)} ${L[e]}`,params:F(s,[1,1,0])},{name:n?i(n,t,e):`${R[t]}${L[e].toLowerCase()}`,params:F(s,[0,1,0])},{name:n?r(n,e,t):`Truncated Order-${o(e)} ${L[t]}`,params:F(s,[0,1,1])},{name:n?i(e,n,t):`Order-${o(e)} ${L[t]}`,params:F(s,[0,0,1])},{name:n?r(t,e,n):`Rhombi${R[t].toLowerCase()}${L[e].toLowerCase()}`,params:F(s,[1,0,1])},{name:n?`${R[n]}gonally Truncated ${R[t]}${R[e].toLowerCase()}gonal`:`Truncated ${R[t]}${L[e].toLowerCase()}`,params:F(s,[1,1,1])},{name:n?`Snub ${r(n,t,e)}`:`Order-${o(t)} Snub ${L[e]}`,params:F(s,["s","s","s"])},{name:n?`${r(n,t,e)} Dual`:`Order-${o(e)} ${R[t]}akis ${L[t]}`,params:F(s,["m","m",0])},{name:n?`${i(n,t,e)} Dual`:`Order-${o(e)}-${o(t)} Rhombille`,params:F(s,[0,"m",0])},{name:n?`${r(n,e,t)} Dual`:`Order-${o(t)} ${R[e]}kis ${L[e]}`,params:F(s,[0,"m","m"])},{name:n?`${r(t,e,n)} Dual`:`Deltoidal ${R[t]}${L[e].toLowerCase()}`,params:F(s,["m",0,"m"])},{name:n?`${R[n]}gonally Truncated ${R[t]}${R[e].toLowerCase()}gonal Dual`:`Order-${o(t)}-${o(e)} Kisrhombille`,params:F(s,["m","m","m"])},{name:n?`Snub ${r(n,t,e)} Dual`:`Order-${o(e)}-${o(t)} Floret Pentagonal`,params:F(s,["b","b","b"])}].map(({name:u,params:m})=>({name:u.replace(/aa/g,"a"),params:m}))}},Y=[{type:"title",content:a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite",dimensions:4})," Tesseract"]}),params:d([4,3,3],[1,0,0,0],{hidden:[],sizeVertex:40,curve:!0,ambiance:"neon",zoom:4.2})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",dimensions:3})," Heptagonal Tiling"]}),params:F([7,3],[1,0,0],{hidden:["vertex"],curve:!0,sizeEdge:25,ambiance:"neon"})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"affine",dimensions:3})," Floret Pentagonal Tiling"]}),params:I([6,3],["b","b","b"],{ambiance:"reflection"})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:3})," Ideal Triangles"]}),params:F([[1,0,0],[0,1,0],[0,0,1]],[0,0,0],{hidden:["vertex"],curve:!0,sizeEdge:25,ambiance:"neon",centered:!0})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",dimensions:4})," Inverted Alternated Order-5 Cubic Honeycomb"]}),params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{projection4:"inverted",ambiance:"disco",zoom:3})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite",dimensions:8})," E6 (1",a.jsx("sub",{children:"22"}),")"]}),params:d([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0],{hidden:["face"],sizeVertex:25,sizeEdge:15,ambiance:"synthwave",projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",zoom:1,centered:!1})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite",dimensions:8})," E8 (4",a.jsx("sub",{children:"21"}),")"]}),params:d([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1],{hidden:["face"],sizeVertex:20,sizeEdge:6,curve:!1,ambiance:"neon",projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",projection7:"orthographic",projection8:"orthographic",zoom:1,centered:!1})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Tetrahedron"]}),params:F([3,3,6],[1,0,0,0],{hidden:["vertex"],curve:!0,centered:!0,ambiance:"pure",extrarels:"d",zoom:2})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Horoball"]}),params:F([6,3,4],[1,0,0,0],{hidden:["vertex"],curve:!0,centered:!1,ambiance:"colorful",extrarels:"d",zoom:2})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",dimensions:4})," Order-4 Dodecahedral Honeycomb"]}),params:b([5,3,4],[1,0,0,0],{zoom:1.5})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"hypercompact",dimensions:4})," ","Hypercompact Order 3-6 Heptagonal Honeycomb"]}),params:b([7,3,3],[1,0,0,0],{hidden:[],zoom:1.5})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Pentahedron"]}),params:F([5,3,6],[1,0,0,0],{hidden:["vertex"],curve:!0,centered:!0,ambiance:"pure",zoom:1.5,extrarels:"d"})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite",dimensions:4})," Clifford Torus"]}),params:d([32,2,32],[1,0,0,1],{hidden:["vertex","face"],curve:!0,ambiance:"glass",zoom:3,sizeEdge:20})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"affine",dimensions:5})," Tesseract Stack"]}),params:d([[1,2,2,2,0],[2,1,2,2,2],[2,2,1,2,2],[2,2,2,1,2],[0,2,2,2,1]],[1,1,1,1,0],{hidden:["vertex"],ambiance:"neon",sizeEdge:20,projection4:"sterographic"})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"hypercompact",order:2,dimensions:4})," ","Ultra-Hyperbolic Surface (Anti-de Sitter Ads3)"]}),params:d([-1,2,-1],[1,0,0,1],[10,1,10],{hidden:["vertex","face"],curve:!0,ambiance:"neon",centered:!1,sizeEdge:15,zoom:1})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"hypercompact",order:2,dimensions:5})," ","Ultra-Hyperbolic Honeycomb (Anti-de Sitter Ads4)"]}),params:d([-1,3,3,-1],[1,0,0,0,1],[10,1,1,10],{hidden:["vertex","face"],curve:!0,ambiance:"neon",centered:!1,zoom:2})},{name:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"hypercompact",order:3,dimensions:6})," ","Ultra-Ultra-Hyperbolic"]}),params:d([-1,2,-1,2,-1],[0,0,0,0,0,0],[10,1,10,1,10],{hidden:["vertex","face"],curve:!0,ambiance:"neon",centered:!1,zoom:2,sizeEdge:15})},{type:"title",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite"})," Spherical Space"]})},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Triangular Prism",params:d([3,2],[0,1,1]),subforms:[{name:"Square Prism",params:d([4,2],[0,1,1])},{name:"Pentagonal Prism",params:d([5,2],[0,1,1])},{name:"Hexagonal Prism",params:d([6,2],[0,1,1])},{name:"Square Bipyramid",params:d([4,2],[0,"m","m"],{reciprocation:1})},{name:"Pentagonal Bipyramid",params:d([5,2],[0,"m","m"],{reciprocation:1})},{name:"Hexagonal Bipyramid",params:d([6,2],[0,"m","m"],{reciprocation:1})},{name:"Pentagrammic Prism",params:d([5,2],[1,0,1],[2,1])},{name:"Heptagrammic Prism",params:d([7,2],[1,0,1],[2,1])},{name:"Octagrammic Prism",params:d([8,2],[1,0,1],[3,1])},{name:"Pentagrammic Bipyramid",params:d([5,2],["m",0,"m"],[2,1],{reciprocation:1})},{name:"Heptagrammic Bipyramid",params:d([7,2],["m",0,"m"],[2,1],{reciprocation:1})},{name:"Octagrammic Bipyramid",params:d([8,2],["m",0,"m"],[3,1],{reciprocation:1})}]},{name:"Triangular Antiprism",params:d([3,2],["s","s","s"]),subforms:[{name:"Square Antiprism",params:d([4,2],["s","s","s"])},{name:"Pentagonal Antiprism",params:d([5,2],["s","s","s"])},{name:"Hexagonal Antiprism",params:d([6,2],["s","s","s"])},{name:"Pentagrammic Antiprism",params:d([5,2],["s","s","s"],[2,1])},{name:"Penatagrammic Crossed Antiprism",params:d([5,2],["s","s","s"],[3,1])},{name:"Heptagrammic Antiprism",params:d([7,2],["s","s","s"],[2,1])},{name:"Heptagrammic Crossed Antiprism",params:d([7,2],["s","s","s"],[4,1])},{name:"Octagrammic Antiprism",params:d([8,2],["s","s","s"],[3,1])},{name:"Octagrammic Crossed Antiprism",params:d([8,2],["s","s","s"],[5,1])}]},{name:"Tetrahedron",params:d([3,3]),subforms:[{name:"Truncated Tetrahedron",params:d([3,3],[1,1,0])},{name:"Triakis Tetrahedron",params:d([3,3],["m","m",0],{reciprocation:1})},{name:"Two Tetrahedra Compound",params:d([3,3],["c",0,0],{reciprocation:1})},{name:"Snub Tetrahedron",params:d([3,3],["s","s","s"])},{name:"Tetrahemihexahedron",params:d([3,3],[1,0,1],[2,1,1])}]},{name:"Cube",params:d([4,3]),subforms:[{name:"Cuboctahedron",params:d([4,3],[0,1,0])},{name:"Truncated Cube",params:d([4,3],[1,1,0])},{name:"Rhombicuboctahedron",params:d([4,3],[1,0,1])},{name:"Truncated Octahedron",params:d([3,4],[1,1,0])},{name:"Truncated Cuboctahedron",params:d([4,3],[1,1,1])},{name:"Octahedron",params:d([3,4])},{name:"Snub Cube",params:d([4,3],["s","s","s"])},{name:"Snub Octahedron",params:d([3,4],["s","s",0])},{name:"Rhombic Dodecahedron",params:d([4,3],[0,"m",0],{reciprocation:1})},{name:"Triakis Octahedron",params:d([4,3],["m","m",0],{reciprocation:1})},{name:"Triakis Hexahedron",params:d([3,4],["m","m",0],{reciprocation:1})},{name:"Deltoidal Icositetrahedron",params:d([4,3],["m",0,"m"],{reciprocation:1})},{name:"Disdyakis Dodecahedron",params:d([4,3],["m","m","m"],{reciprocation:1})},{name:"Pentagonal Icositetrahedron",params:d([4,3],["b","b","b"],{reciprocation:1})},{name:"Cube Octahedron Compound",params:d([4,3],["c",0,0],{reciprocation:1})},{name:"Hemi-Cube",params:d([4,3],[1,0,0],{extrarels:"(abc)^3"})},{name:"Hemi-Octahedron",params:d([3,4],[1,0,0],{extrarels:"(abc)^3"})},{name:"Octahemioctahedron",params:d([[1,3,3],[3,1,3],[3,3,1]],[0,1,1],[[1,2,1],[2,1,1],[1,1,1]],{extrarels:"(abcb)^2"})},{name:"Cubohemioctahedron",params:d([[1,4,4],[4,1,3],[4,3,1]],[0,1,1],[[1,3,1],[3,1,1],[1,1,1]],{extrarels:"(abcb)^2"})}]},{name:"Dodecahedron",params:d([5,3]),subforms:[{name:"Icosidodecahedron",params:d([5,3],[0,1,0])},{name:"Truncated Dodecahedron",params:d([5,3],[1,1,0])},{name:"Rhombicosidodecahedron",params:d([5,3],[1,0,1])},{name:"Truncate Icosahedron",params:d([3,5],[1,1,0])},{name:"Truncated Icosidodecahedron",params:d([5,3],[1,1,1])},{name:"Icosahedron",params:d([3,5])},{name:"Snub Dodecahedron",params:d([5,3],["s","s","s"])},{name:"Rhombic Triacontahedron",params:d([5,3],[0,"m",0],{reciprocation:1})},{name:"Triakis Icosahedron",params:d([5,3],["m","m",0],{reciprocation:1})},{name:"Pentakis Docecahedron",params:d([3,5],["m","m",0],{reciprocation:1})},{name:"Deltoidal Hexecontahedron",params:d([5,3],["m",0,"m"],{reciprocation:1})},{name:"Disdyakis Triacontahedron",params:d([5,3],["m","m","m"],{reciprocation:1})},{name:"Pentagonal Hexecontahedron",params:d([5,3],["b","b","b"],{reciprocation:1})},{name:"Dodecahedron Icosahedron Compound",params:d([5,3],["c",0,0],{reciprocation:1})},{name:"Hemi-Dodecahedron",params:d([5,3],[1,0,0],{extrarels:"(abc)^5"})},{name:"Hemi-Icosahedron",params:d([3,5],[1,0,0],{extrarels:"(abc)^5"})},{name:"Small Dodecahemidodecahedron",params:d([[1,5,5],[5,1,5],[5,5,1]],[0,1,1],[[1,4,1],[4,1,1],[1,1,1]],{extrarels:"(abcb)^2"})},{name:"Small Icosihemidodecahedron",params:d([[1,3,3],[3,1,5],[4,5,1]],[0,1,1],[[1,2,1],[2,1,1],[1,1,1]],{extrarels:"(abcb)^3"})},{name:"Great Dodecahemicosahedron",params:d([[1,5,3],[5,1,5],[3,5,1]],[1,0,1],[[1,4,1],[4,1,1],[1,1,1]],{extrarels:"(abcb)^3"})},{name:"Small Dodecahemicosahedron",params:d([[1,5,3],[5,1,5],[3,5,1]],[0,1,1],[[1,2,1],[2,1,3],[1,3,1]],{extrarels:"(abcb)^3"})},{name:"Great Icosihemidodecahedron",params:d([[1,3,3],[3,1,5],[3,5,1]],[0,1,1],[[1,2,1],[2,1,3],[1,3,1]],{extrarels:"(abcb)^3"})},{name:"Great Dodecahemidodecahedron",params:d([[1,5,5],[5,1,5],[5,5,1]],[0,1,1],[[1,3,2],[3,1,3],[2,3,1]],{extrarels:"(abcb)^2"})}]},{name:"Great Dodecahedron",params:d([5,5],[1,0,0],[1,2]),subforms:[{name:"Small Stellated Docecahedron Great Docecahedron Compound",params:d([5,5],["c",0,0],[1,2],{reciprocation:1})}]},{name:"Great Icosahedron",params:d([3,5],[1,0,0],[1,2]),subforms:[{name:"Great Icosahedron Great Stellated Dodecahedron Compound",params:d([3,5],["c",0,0],[1,2],{reciprocation:1})}]},{name:"Small Stellated Dodecahedron",params:d([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:d([5,3],[1,0,0],[2,1])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite",dimensions:4})," Polychora"]})},{name:"Tetrahedral Prism",params:d([3,3,2],[1,0,0,1]),subforms:[{name:"Truncated Tetrahedral Prism",params:d([3,3,2],[1,1,0,1])},{name:"Snub Tetrahedral Prism",params:d([3,3,2],["s","s","s",1])},{name:"Omnisnub Tetrahedral Antiprism",params:d([3,3,2],["s","s","s","s"])},{name:"Cubic Prism",params:d([4,3,2],[1,0,0,1])},{name:"Cuboctahedral Prism",params:d([4,3,2],[0,1,0,1])},{name:"Rhombicubochedral Prism",params:d([4,3,2],[1,0,1,1])},{name:"Truncated Cubic Prism",params:d([4,3,2],[1,1,0,1])},{name:"Octahedral Prism",params:d([4,3,2],[0,0,1,1])},{name:"Truncated Octahedral Prism",params:d([4,3,2],[0,1,1,1])},{name:"Truncated Cuboctahedral Prism",params:d([4,3,2],[1,1,1,1])},{name:"Snub Cubic Prism",params:d([4,3,2],["s","s","s",1])},{name:"Omnisnub Cubic Antiprism",params:d([4,3,2],["s","s","s","s"])},{name:"Snub Rhombicubochedral 24-cell",params:d([2,4,3],["s","s",0,1])},{name:"Dodecahedral Prism",params:d([5,3,2],[1,0,0,1])},{name:"Icosidodecahedral Prism",params:d([5,3,2],[0,1,0,1])},{name:"Icosahedral Prism",params:d([5,3,2],[0,0,1,1])},{name:"Truncated Dodacahedral Prism",params:d([5,3,2],[1,1,0,1])},{name:"Rhombicosidodecahedral Prism",params:d([5,3,2],[1,0,1,1])},{name:"Truncated Icosahedral Prism",params:d([5,3,2],[0,1,1,1])},{name:"Truncated Icosidodecahedral Prism",params:d([5,3,2],[1,1,1,1])},{name:"Snub Dodecahedral Prism",params:d([5,3,2],["s","s","s",1])},{name:"Omnisnub Dodecahedral Antiprism",params:d([5,3,2],["s","s","s","s"])},{name:"Great Dodecahedral Prism",params:d([5,5,2],[1,0,0,1],[1,2,1])},{name:"Great Icosahedral Prism",params:d([3,5,2],[1,0,0,1],[1,2,1])},{name:"Small Stellated Dodecahedral Prism",params:d([5,5,2],[1,0,0,1],[2,1,1])},{name:"Great Stellated Dodecahedral Prism",params:d([5,3,2],[1,0,0,1],[2,1,1])}]},{name:"Square Antiprismatic Prism",params:d([4,2,2],["s","s","s",1]),subforms:[{name:"Petagonal Antiprismatic Prism",params:d([5,2,2],["s","s","s",1])},{name:"Hexagonal Antiprismatic Prism",params:d([6,2,2],["s","s","s",1])},{name:"Heptaogonal Antiprismatic Prism",params:d([7,2,2],["s","s","s",1])},{name:"Octagonal Antiprismatic Prism",params:d([8,2,2],["s","s","s",1])}]},{name:"Triangular Triangular Duoprism",params:d([3,2,3],[1,0,1,0]),subforms:[{name:"Triangular Cubic Duoprism",params:d([3,2,4],[1,0,1,0])},{name:"Triangular Pentagonal Duoprism",params:d([3,2,5],[1,0,1,0])},{name:"Triangular Hexagonal Duoprism",params:d([3,2,6],[1,0,1,0])},{name:"Cubic Cubic Duoprism",params:d([4,2,4],[1,0,1,0])},{name:"Cubic Pentagonal Duoprism",params:d([4,2,5],[1,0,1,0])},{name:"Cubic Hexagonal Duoprism",params:d([4,2,6],[1,0,1,0])},{name:"Pentagonal Pentagonal Duoprism",params:d([5,2,5],[1,0,1,0])},{name:"Pentagonal Hexagonal Duoprism",params:d([5,2,6],[1,0,1,0])},{name:"Hexagonal Hexagonal Duoprism",params:d([6,2,6],[1,0,1,0])},{name:"Triangular Cubic Duopyramid",params:d([3,2,4],["m",0,"m",0],{reciprocation:1})},{name:"Triangular Pentagonal Duopyramid",params:d([3,2,5],["m",0,"m",0],{reciprocation:1})},{name:"Triangular Hexagonal Duopyramid",params:d([3,2,6],["m",0,"m",0],{reciprocation:1})},{name:"Cubic Cubic Duopyramid",params:d([4,2,4],["m",0,"m",0],{reciprocation:1})},{name:"Cubic Pentagonal Duopyramid",params:d([4,2,5],["m",0,"m",0],{reciprocation:1})},{name:"Cubic Hexagonal Duopyramid",params:d([4,2,6],["m",0,"m",0],{reciprocation:1})},{name:"Pentagonal Pentagonal Duopyramid",params:d([5,2,5],["m",0,"m",0],{reciprocation:1})},{name:"Pentagonal Hexagonal Duopyramid",params:d([5,2,6],["m",0,"m",0],{reciprocation:1})},{name:"Hexagonal Hexagonal Duopyramid",params:d([6,2,6],["m",0,"m",0],{reciprocation:1})}]},A({name:"5-cell",params:d([3,3,3])}),A({name:"8-cell",params:d([4,3,3])}),A({name:"16-cell",params:d([3,3,4])}),A({name:"24-cell",params:d([3,4,3])}),A({name:"120-cell",params:d([5,3,3])}),A({name:"600-cell",params:d([3,3,5])}),{name:"Snub 24-cell",params:d([[1,3,2,2],[3,1,3,3],[2,3,1,2],[2,3,2,1]],["s","s","s","s"])},{name:"Snub Runcitruncated 24-cell",params:d([3,4,3],["s","s",0,1])},{name:"Icosahedral 120-cell",params:d([3,5,5],[1,0,0,0],[1,1,2],{curve:!1}),subforms:[{name:"Small Stellated 120-cell",params:d([3,5,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Great 120-cell",params:d([5,5,5],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Grand 120-cell",params:d([5,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{name:"Great Stellated 120-cell",params:d([5,3,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Grand Stellated 120-cell",params:d([5,5,5],[1,0,0,0],[2,1,2],{curve:!1})},{name:"Great grand 120-cell",params:d([5,5,3],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Great Icosahedral 120-cell",params:d([5,5,3],[0,0,0,1],[1,2,1],{curve:!1})},{name:"Great grand Stellated 120-cell",params:d([5,3,3],[1,0,0,0],[2,1,1],{curve:!1})}]},{name:"Grand 600-cell",params:d([3,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite",dimensions:5})," Polytera"]})},A({name:"5-simplex",params:d([3,3,3,3])}),A({name:"5-cube",params:d([4,3,3,3])}),A({name:"5-orthoplex",params:d([3,3,3,4])}),A({name:"5-demicube",params:d([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]])}),{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite",dimensions:6})," Polypeta"]})},A({name:"6-simplex",params:d([3,3,3,3,3])}),A({name:"6-cube",params:d([4,3,3,3,3])}),A({name:"6-orthoplex",params:d([3,3,3,3,4])}),A({name:"6-demicube",params:d([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]])}),{name:a.jsxs(a.Fragment,{children:["2",a.jsx("sub",{children:"21"})]}),params:d([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:a.jsxs(a.Fragment,{children:["1",a.jsx("sub",{children:"22"})]}),params:d([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite",dimensions:7})," Polyexa"]})},A({name:"7-simplex",params:d([3,3,3,3,3,3])}),A({name:"7-cube",params:d([4,3,3,3,3,3])}),A({name:"7-orthoplex",params:d([3,3,3,3,3,4])}),A({name:"7-demicube",params:d([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]])}),{name:a.jsxs(a.Fragment,{children:["3",a.jsx("sub",{children:"21"})]}),params:d([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:a.jsxs(a.Fragment,{children:["2",a.jsx("sub",{children:"31"})]}),params:d([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:a.jsxs(a.Fragment,{children:["1",a.jsx("sub",{children:"32"})]}),params:d([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite",dimensions:8})," Polyzetta"]})},A({name:"8-simplex",params:d([3,3,3,3,3,3,3])}),A({name:"8-cube",params:d([4,3,3,3,3,3,3])}),A({name:"8-orthoplex",params:d([3,3,3,3,3,3,4])}),A({name:"8-demicube",params:d([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]])}),{name:a.jsxs(a.Fragment,{children:["1",a.jsx("sub",{children:"42"})]}),params:d([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0])},{name:a.jsxs(a.Fragment,{children:["2",a.jsx("sub",{children:"41"})]}),params:d([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:a.jsxs(a.Fragment,{children:["4",a.jsx("sub",{children:"21"})]}),params:d([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"finite",dimensions:9})," Polyyotta"]})},A({name:"9-simplex",params:d([3,3,3,3,3,3,3,3])}),A({name:"9-cube",params:d([4,3,3,3,3,3,3,3])}),A({name:"9-orthoplex",params:d([3,3,3,3,3,3,3,4])}),A({name:"9-demicube",params:d([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]])}),{type:"title",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"affine"})," Euclidean Space"]})},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangular",params:I([[1,3,3],[3,1,3],[3,3,1]],[1,0,0]),subforms:[{name:"Truncated Triangular",params:I([[1,3,3],[3,1,3],[3,3,1]],[1,1,0])},{name:"Snub Triangular",params:I([[1,3,3],[3,1,3],[3,3,1]],["s","s","s"])},{name:"Rhobille",params:I([[1,3,3],[3,1,3],[3,3,1]],["m","m","s"])}]},{name:"Square",params:I([4,4],[1,0,0]),subforms:[{name:"Truncated Square",params:I([4,4],[1,1,0])},{name:"Rectified Square",params:I([4,4],[0,1,0])},{name:"Cantellated Square",params:I([4,4],[1,0,1])},{name:"Triakis Square",params:I([4,4],["m","m",0])},{name:"Snub Square",params:I([4,4],["s","s","s"])},{name:"Cairo Pentagonal",params:I([4,4],["b","b","b"])},{name:"Snub Square (2)",params:I([4,4],["s","s",0])},{name:"Snub Square (3)",params:I([4,4],["s","s",1])},{name:"Snub Square (4)",params:I([4,4],["s",1,0])},{name:"Snub Square (5)",params:I([4,4],["s",0,1])},{name:"Snub Square (6)",params:I([4,4],["s",1,1])}]},A({name:"Hexagonal",params:I([6,3],[1,0,0])},[{name:"Triakis Triangular",params:I([6,3],["m","m",0])},{name:"Deltaoidal Trihexagonal",params:I([6,3],["m",0,"m"])},{name:"Kisrhombille",params:I([6,3],["m","m","m"])},{name:"Floret Pentagonal",params:I([6,3],["b","b","b"])},{name:"Snub Hexagonal (2)",params:I([6,3],["s","s",0])},{name:"Snub Hexagonal (3)",params:I([6,3],["s","s",1])},{name:"Snub Hexagonal (4)",params:I([6,3],["s",1,0])},{name:"Snub Hexagonal (5)",params:I([6,3],["s",0,1])},{name:"Snub Hexagonal (6)",params:I([6,3],["s",1,1])}]),{name:"Apeirogonal Hosohedron",params:I([2,0],[1,0,0]),subforms:[{name:"Apeirogonal Dihedron",params:I([2,0],[0,0,1])},{name:"Apeirogonal Prism",params:I([2,0],[1,1,0])},{name:"Apeirogonal Antiprism",params:I([2,0],["s","s",0])},{name:"Apeirogonal Deltohedron",params:I([2,0],["b","b",0])}]},{name:"Elongated Triangular",params:I([0,2,0],[0,"s","s",1])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:j([4,3,4],[1,0,0,0])},{name:"Octet",params:j([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter Cubic",params:j([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:j([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:j([3,3,4,3],[1,0,0,0,0])},{name:"24-cellic",params:j([3,4,3,3],[1,0,0,0,0])},{name:"4-simpletic",params:j([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0])},{name:"Quarter Tesseractic",params:j([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"affine",dimensions:6})," 5-Honeycombs"]})},{name:"5-simplex",params:j([[1,3,2,2,2,3],[3,1,3,2,2,2],[2,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[3,2,2,2,3,1]],[1,0,0,0,0,0])},{name:"5-cubic",params:j([4,3,3,3,4],[1,0,0,0,0,0])},{name:"5-demicubic",params:j([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,4],[2,2,2,2,4,1]],[1,0,0,0,0,0])},{name:"Quarter 5-cubic",params:j([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,3],[2,2,2,3,1,2],[2,2,2,3,2,1]],[1,0,0,0,0,1])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"affine",dimensions:7})," 6-Honeycombs"]})},{name:"6-simplex",params:j([[1,3,2,2,2,2,3],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[3,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:"6-cubic",params:j([4,3,3,3,3,4],[1,0,0,0,0,0,0])},{name:"6-demicubic",params:j([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,4],[2,2,2,2,2,4,1]],[1,0,0,0,0,0,0])},{name:"Quarter 6-cubic",params:j([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,3],[2,2,2,2,3,1,2],[2,2,2,2,3,2,1]],[1,0,0,0,0,0,1])},{name:a.jsxs(a.Fragment,{children:["2",a.jsx("sub",{children:"22"})]}),params:j([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,3,2],[2,2,3,1,3,2,2],[2,2,2,3,1,2,2],[2,2,3,2,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"affine",dimensions:8})," 7-Honeycombs"]})},{name:"7-simplex",params:j([[1,3,2,2,2,2,2,3],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[3,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:"7-cubic",params:j([4,3,3,3,3,3,4],[1,0,0,0,0,0,0,0])},{name:"7-demicubic",params:j([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,4],[2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0])},{name:"Quarter 7-cubic",params:j([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,3,3,1,3,2,2],[2,2,2,2,3,1,3,3],[2,2,2,2,2,3,1,2],[2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,1])},{name:a.jsxs(a.Fragment,{children:["1",a.jsx("sub",{children:"33"})]}),params:j([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,1,0,0,0])},{name:a.jsxs(a.Fragment,{children:["3",a.jsx("sub",{children:"31"})]}),params:j([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"affine",dimensions:9})," 8-Honeycombs"]})},{name:"8-simplex",params:j([[1,3,2,2,2,2,2,2,3],[3,1,3,2,2,2,2,2,2],[2,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[3,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:"8-cubic",params:j([4,3,3,3,3,3,3,4],[1,0,0,0,0,0,0,0,0])},{name:"8-demicubic",params:j([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,4],[2,2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0,0])},{name:"Quarter 8-cubic",params:j([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,3],[2,2,2,2,2,2,3,1,2],[2,2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,0,1])},{name:a.jsxs(a.Fragment,{children:["1",a.jsx("sub",{children:"52"})]}),params:j([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0,0])},{name:a.jsxs(a.Fragment,{children:["2",a.jsx("sub",{children:"51"})]}),params:j([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:a.jsxs(a.Fragment,{children:["5",a.jsx("sub",{children:"21"})]}),params:j([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,0,1])},{type:"title",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic"})," Hyperbolic Space"]})},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",dimensions:3})," Tilings"]})},T([7,3]),T([8,3]),T([5,4]),T([6,4]),T([7,4]),T([8,4]),T([6,5]),T([6,6]),T([8,6]),T([7,7]),T([8,8]),T([0,3]),T([0,4]),T([0,5]),T([0,0]),T([4,3,3]),T([4,4,3]),T([4,4,4]),T([5,3,3]),T([5,4,3]),T([5,4,4]),T([6,3,3]),T([6,4,3]),T([6,4,4]),T([0,3,3]),T([0,4,3]),T([0,4,4]),T([0,0,3]),T([0,0,4]),T([0,0,0]),{name:"Infinite Order Apeirogonal",params:F([0,0],[1,0,0])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"compact",dimensions:4})," Compact Hyperbolic Honeycombs"]})},{name:"Icosahedral",params:b([3,5,3],[1,0,0,0])},{name:"Order-4 Dodecahedral",params:b([5,3,4],[1,0,0,0])},{name:"Order-5 Dodecahedral",params:b([5,3,5],[1,0,0,0])},{name:"Alternated Order-5 Cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral Cubic",params:b([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],{})},{name:"Tetrahedral Dodecahedral",params:b([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],{})},{name:"Cubic Octahedral",params:b([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Dodcahedral",params:b([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Icosahedral",params:b([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],{})},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Paracompact Hyperbolic Honeycombs"]})},{name:"Triangular",params:b([3,6,3],[1,0,0,0])},{name:"Hexagonal",params:b([6,3,3],[1,0,0,0])},{name:"Order-6 Tetrahedral",params:b([3,3,6],[1,0,0,0])},{name:"Alternated Order-6 Cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],{})},{name:"Order-5 Hexagonal",params:b([6,3,5],[1,0,0,0])},{name:"Alternated Order-5 Hexagonal",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{})},{name:"Order-6 Hexagonal",params:b([6,3,6],[0,0,0,1])},{name:"Square",params:b([4,4,3],[1,0,0,0])},{name:"Alternated Square",params:b([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],{})},{name:"Order-4 Square",params:b([4,4,4],[0,1,0,0])},{name:"Tetrahedral Square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],{})},{name:"Cubic Square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],{})},{name:"Alternated Cubic Square",params:b([[1,2,4,3],[2,1,3,2],[4,3,1,4],[3,2,4,1]],[1,0,0,0],{})},{name:"Quarter order Square",params:b([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],{})},{name:"Tetrahedral Hexagonal",params:b([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Hexagonal",params:b([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Icosahedral Hexagonal",params:b([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Hexagonal Triangular",params:b([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[0,0,0,1],{})},{name:"Alternated Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],{})},{name:"Alternated Order-4 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],{})},{name:"Alternated Order-5 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{})},{name:"Runcic Order-6 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],{})},{name:"Quarter Order-4 Hexagonal",params:b([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],{})},{name:"Hexagonal",params:b([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],{})},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"hypercompact",dimensions:4})," ","Hypercompact Hyperbolic Honeycombs"]})},{name:"Order 7-3 Triangular",params:b([3,7,3],[1,0,0,0])},{name:"Order 3-6 Heptagonal",params:b([7,3,6],[1,0,0,0])},{name:"Order-7 Dodecahedral",params:b([5,3,7],[1,0,0,0])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",dimensions:5})," Compact Hyperbolic 4-Honeycombs"]})},{name:"Order-5 5-cell",params:b([3,3,3,5],[1,0,0,0,0])},{name:"120-cell",params:b([5,3,3,3],[1,0,0,0,0])},{name:"Order-5 Tesseratic",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-4 120-cell",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-5 120-cell",params:b([5,3,3,5],[1,0,0,0,0])},{name:"Small Stellated 120-cell",params:b([5,5,3,3],[1,0,0,0,0],[2,1,1,1])},{name:"Pentagrammic-order 600-cell",params:b([3,3,5,5],[1,0,0,0,0],[1,1,1,2])},{name:"Order-5 Icosahedral 120-cell",params:b([3,5,5,5],[1,0,0,0,0],[1,1,2,1])},{name:"Great 120-cell",params:b([5,5,5,3],[1,0,0,0,0],[1,2,1,1])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:5})," ","Paracompact Hyperbolic 4-Honeycombs"]})},{name:"Order-4 24-cell",params:b([3,4,3,4],[1,0,0,0,0])},{name:"Cubic Honeycomb",params:b([4,3,4,3],[1,0,0,0,0])},{type:"group",content:a.jsxs(a.Fragment,{children:[a.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:6})," ","Paracompact Hyperbolic 5-Honeycombs"]})},{name:"5-orthoplex",params:b([3,3,3,4,3],[1,0,0,0,0,0])},{name:"24-cell Honeycomb",params:b([3,4,3,3,3],[1,0,0,0,0,0])},{name:"16-cell Honeycomb",params:b([3,3,4,3,3],[1,0,0,0,0,0])},{name:"Order-4 24-cell Honeycomb",params:b([3,4,3,3,4],[1,0,0,0,0,0])},{name:"Tesseratic Honeycomb",params:b([4,3,3,4,3],[1,0,0,0,0,0])}];function Ie({allowNull:e,name:t,value:n,onChange:o,...r}){const i=g.useCallback(u=>{let{name:m,checked:c}=u.target,l;e?l=n===!1?!0:n?null:!1:l=c,o(m,l)},[e,o,n]),s=g.useRef(null);return g.useLayoutEffect(()=>{e&&s.current&&(n===null?s.current.indeterminate=!0:s.current.indeterminate=!1)},[n,e]),a.jsx("input",{type:"checkbox",ref:s,name:t,checked:n||!1,onChange:i})}const De=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(De).join("");if(typeof e=="object"&&e)return De(e.props.children)},Je=(e,t)=>typeof e=="string"?De(e).toLowerCase().includes(t.toLowerCase()):!1,aa=g.memo(function e({name:t,index:n,params:o,search:r,subforms:i=[],sub:s=!1,onPreset:u}){const[m,c]=g.useState(!0),[l,f]=g.useState(!1);return g.useEffect(()=>{if(!r){c(!0),f(!1);return}if(Je(t,r)){c(!0);return}if(i.length&&i.some(({name:h})=>Je(h,r))){c(!0),f(!0);return}c(!1),f(!1)},[t,r,i]),m?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:`preset${s?" sub":""}`,onClick:()=>u(o,n),children:[a.jsxs("div",{className:`preset-header preset-name-${i.length?"button":"only"}`,children:[i.length?a.jsx("button",{className:`preset-toggle ${l?"open":"closed"}`,onClick:h=>{h.stopPropagation(),f(!l)},children:l?"-":"+"}):null,a.jsx("span",{className:"preset-name",children:t})]}),a.jsx(rn,{coxeter:o.coxeter,mirrors:o.mirrors,stellation:o.stellation})]}),l&&i.map((h,v)=>a.jsx(e,{...h,sub:!0,search:r,onPreset:u},v))]}):null});function ra({open:e,onPreset:t,onExportImage:n,closePresets:o}){const[r,i]=g.useState(""),[s,u]=g.useState(""),m=g.useCallback(c=>{u(c.target.value),Rn(i(c.target.value),50)},[]);return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:`presets-overlay ${e?"shown":"hidden"}`,onClick:o}),a.jsx("div",{className:`presets ${e?"shown":"hidden"}`,children:a.jsxs("div",{className:"presets-modal",children:[a.jsxs("div",{className:"presets-header",children:[a.jsxs("div",{className:"presets-search",children:[a.jsx("input",{type:"text",placeholder:"Search",value:s,onChange:m}),a.jsx("button",{className:"presets-clear",onClick:()=>{i(""),u("")},children:Wt})]}),a.jsxs("div",{className:"presets-actions",children:[a.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:Kt}),a.jsx("button",{className:"presets-action",onClick:n,children:Xt}),a.jsx("button",{className:"presets-action",onClick:o,children:qt})]})]}),a.jsx("div",{className:"presets-list",children:Y.map(({type:c,content:l,name:f,params:h,subforms:v},p)=>a.jsx(g.Fragment,{children:c==="title"?a.jsx("h2",{children:l}):c==="group"?a.jsx("h4",{children:l}):a.jsx(aa,{name:f,index:p,params:h,search:r,subforms:v,onPreset:t})},p))})]})})]})}const We=g.memo(function({rotations:t,space:n,axis:o}){if(!n)return null;const r=n.gram.length,i=t.shift*2+o;if(i>=t.combinations.length)return null;let s=t.combinations[i];const u=s.some(l=>l<0)?"parabolic":s.some(l=>n.eigens.values[l]<0)?"hyperbolic":s.some(l=>n.eigens.values[l]===0)?"translation":"spheric",m=on.slice(0,r).split(""),c=u==="parabolic"?s.map(l=>m[W(l)]).join("->"):m.filter((l,f)=>!s.includes(f));return a.jsxs("aside",{className:`${o?"y":"x"}-rotation`,children:[c,u==="parabolic"?a.jsx("sup",{children:"∞"}):u==="hyperbolic"?a.jsx("sup",{children:"†"}):u==="translation"?a.jsx("sup",{children:"0"}):""]})}),oa=e=>e<4?[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"})}),a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M7 2m12 9H5v2h14z"})}),a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})})][e]:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[a.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9"}),a.jsx("text",{x:"12",y:"13.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",children:e})]}),Ke=(e,t,n)=>{if(!$.includes(t)){const o=t.split(/_/)[0],r=n.facets[$.indexOf(o)].parts.map(({key:i})=>i);if(e.includes(o))return e.concat(r).filter(i=>![o,t].includes(i));r.every(i=>e.includes(i)||i===t)&&(e=e.concat(o))}return e.concat(t)},Xe=(e,t,n)=>{if($.includes(t)){const o=n.facets[$.indexOf(t)].parts.map(({key:r})=>r);o.every(r=>e.includes(r))&&(e=e.filter(r=>!o.includes(r)))}else{const o=t.split(/_/)[0];e=e.filter(r=>r!==o)}return e.filter(o=>o!==t)};function sa({runtime:e,setRuntime:t,showUI:n,updateParams:o}){const r=g.useCallback(()=>{var l;e.paused&&((l=e.polytope)==null?void 0:l.size)>e.limit&&o({limit:e.limit+e.start}),t(f=>({...f,paused:!f.paused}))},[e.paused,e.polytope,e.limit,e.start,t,o]),i=g.useCallback(l=>{const h=+l.target.closest("button").dataset.rank,v=$[h],E=!e.hidden.includes(v)?Ke(e.hidden,v,e.polytope):Xe(e.hidden,v,e.polytope);o({hidden:E})},[e.hidden,e.polytope,o]),s=g.useCallback(l=>{const h=l.target.closest("button").dataset.key,p=!e.hidden.includes(h)?Ke(e.hidden,h,e.polytope):Xe(e.hidden,h,e.polytope);o({hidden:p})},[e.hidden,e.polytope,o]),u=g.useCallback(l=>{const f=+l.target.closest("button").dataset.key;o({reciprocation:f})},[o]);if(!e.polytope)return a.jsx("aside",{className:"shape"});const m=e.polytope.facets.every(l=>l.parts.length<2),c=l=>{if(!isFinite(l))return"∞";if(l===0)return e.polytope.infinite?"∞":"";let f=l.toLocaleString();return e.polytope.infinite&&(f+=" (∞)"),f};return n==="empty"?null:a.jsxs("aside",{className:"shape",children:[e.done?null:a.jsx("div",{className:"buttons",children:e.paused?a.jsx("button",{className:"iterate button",onClick:r,title:"Resume enumeration",children:Zt}):a.jsx("button",{className:"iterate button",onClick:r,title:"Pause enumeration",children:Yt})}),a.jsx("div",{className:`shape-info${e.processing?" shape-processing":""}${["advanced","full"].includes(n)&&!e.polytope.fundamental?" shape-info-expanded":""}`,children:[...e.polytope.facets].reverse().filter(l=>l).map(l=>a.jsxs(g.Fragment,{children:[a.jsxs("div",{className:"shape-icon",style:{gridRow:`span ${l.parts.length}`},children:[oa(l.dimensions),e.polytope.dual&&!e.curve?a.jsx("button",{className:"shape-reciprocation button","data-key":e.reciprocation===l.dimensions?-1:l.dimensions,onClick:u,children:e.reciprocation===l.dimensions?mn:pn}):null,l.dimensions<3?a.jsx("button",{title:$[l.dimensions],className:"shape-hidden button","data-rank":l.dimensions,onClick:i,children:e.hidden.includes($[l.dimensions])?Ge:Ve}):null]}),a.jsxs("div",{className:"shape-count",style:{gridRow:`span ${l.parts.length}`},children:[l.processing&&l.processing!==l.count?a.jsxs("small",{children:[c(l.processing)," / "]}):null,c(l.count)]}),a.jsx("div",{className:l.dimensions>0&&["advanced","full"].includes(n)&&!l.fundamental&&l.parts.length>1?" shape-split":"",style:{gridRow:`span ${l.parts.length}`}}),["advanced","full"].includes(n)&&!e.polytope.fundamental?l.parts.map(({count:f,coxeter:h,stellation:v,mirrors:p,key:E})=>a.jsxs(g.Fragment,{children:[a.jsx("div",{className:"shape-count shape-detail-count",title:E,children:!m&&l.parts.length>1?c(f):null}),a.jsxs("div",{className:`shape-view-diagram ${E.startsWith("s")?" shape-snub":""}`,children:[l.dimensions<3&&l.parts.length>1?a.jsx("button",{className:"shape-hidden button","data-key":E,title:E,onClick:s,children:e.hidden.includes(E)||e.hidden.includes($[l.dimensions])?Ge:Ve}):a.jsx("div",{}),h&&l.count?a.jsx("button",{className:"shape-detail-button",onClick:()=>o({coxeter:h,stellation:v,mirrors:p,dimensions:h.length,matrix:Q(h.length)}),children:a.jsx(rn,{coxeter:h,stellation:v,mirrors:p})}):null]})]},E)):null]},`shape-${l.dimensions}`))})]})}const ia=()=>{try{return localStorage.getItem("showUI")||"simple"}catch(e){return console.error(e),"simple"}};function ca({runtime:e,params:t,rotations:n,setRuntime:o,updateParams:r,updateRotations:i}){var ze,Pe,Me;const[s,u]=g.useState(ia),[m,c]=g.useState(!1),[l,f]=g.useState(0),h=g.useCallback(()=>{c(!1)},[]),v=g.useCallback(x=>{let{name:S,value:O}=x.target;r({[S]:O})},[r]),p=g.useCallback((x,S)=>{r({[x]:S})},[r]),E=g.useCallback(()=>u(x=>{const S={simple:"advanced",advanced:"full",full:"empty",empty:"simple"}[x];try{localStorage.setItem("showUI",S)}catch(O){console.error(O)}return S}),[]),D=g.useCallback((x,S)=>{r(x,!0),f(S),h()},[r,h]),w=g.useCallback(()=>{const x=Q(e.dimensions);x._reset=!0,r({matrix:x,centered:!0})},[r,e.dimensions]),C=g.useCallback(()=>{const x=Q(e.dimensions);x._reset=!0,r({matrix:x,centered:!1})},[r,e.dimensions]),y=g.useCallback(()=>{r(Object.fromEntries(J(3,e.dimensions+1).map(x=>[[`projection${x}`,"orthographic"],[`fov${x}`,90]]).flat()))},[r,e.dimensions]),z=g.useCallback(()=>{r(Object.fromEntries(J(3,e.dimensions+1).map(x=>[`projection${x}`,Oe(x,e.dimensions)])))},[r,e.dimensions]),U=g.useCallback(x=>{i("shift",(n.shift+1)%n.maxShift)},[n.maxShift,n.shift,i]),k=g.useCallback(x=>{i("lock",!n.lock)},[n.lock,i]),ae=g.useCallback(x=>{i("auto",n.auto==="free"?"damp":"free")},[n.auto,i]),M=g.useCallback(()=>{if(!e.polytope||!t.extrarels)return;const x=S=>{const O=Qt(S);return O.split("").every(X=>e.polytope.gens.includes(X))?Ae(O):S};r({extrarels:t.extrarels.split(",").map(S=>x(S)).join(", ")})},[t.extrarels,e.polytope,r]),_=g.useMemo(()=>{var x;return(x=e.polytope)==null?void 0:x.rels.map(S=>Ae(S)).join(", ")},[(ze=e.polytope)==null?void 0:ze.rels.join(",")]),xe=g.useCallback(async()=>{h();const x=window.prompt("Select image resolution","5000x5000");if(!x||!x.includes("x")){console.error("Invalid resolution");return}const[S,O]=x.split("x").map(q=>parseInt(q));if(isNaN(S)||isNaN(O)){console.error("Invalid resolution");return}const ie=await(await kt(()=>import("./export-98a1e647.js"),["./export-98a1e647.js","./CoxeterMatrix-74a7972d.js"],import.meta.url)).makeBigPng(e,S,O);if(ie){const q=document.createElement("a");document.body.appendChild(q),q.style.display="none";const gn=window.URL.createObjectURL(ie);q.href=gn,q.download=`${document.title}-${S}x${O}`,q.click()}},[h,e]),Fe=g.useMemo(()=>({square:J(3,e.dimensions+1).some(x=>t[`projection${x}`]!=="orthographic"),cube:J(3,e.dimensions+1).some(x=>t[`projection${x}`]!==Oe(x,e.dimensions))}),[t.projection3,t.projection4,t.projection5,t.projection6,t.projection7,t.projection8,t.projection9,e.dimensions]);return g.useEffect(()=>{const x=S=>{if(S.target.tagName!=="INPUT"){if(S.key==="ArrowLeft"&&S.ctrlKey&&l>0){let O=l-1;for(;Y[O].type;){if(O<2)return;O--}D(Y[O].params,O)}else if(S.key==="ArrowRight"&&S.ctrlKey&&l<Y.length-1){let O=l+1;for(;Y[O].type;){if(O>Y.length-2)return;O++}D(Y[O].params,O)}}};return window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[D,l]),a.jsxs(a.Fragment,{children:[a.jsx(ra,{open:m,onPreset:D,onExportImage:xe,closePresets:h}),a.jsxs("main",{className:e.error?"error ui":"ui",title:e.error,children:[a.jsxs("div",{className:"ui-row ui-row-top",children:[["simple","advanced","full"].includes(s)?a.jsxs("aside",{className:"controls",children:[n.maxShift>1?a.jsxs("button",{className:"rotation-button button",onClick:U,title:"Rotation Mode",children:[a.jsx("div",{className:"rotation",style:{transform:`rotate(${n.shift/n.maxShift*360}deg)`},children:Ut}),a.jsx("sup",{children:n.shift+1}),a.jsx(We,{rotations:n,space:e.space,axis:0}),a.jsx(We,{rotations:n,space:e.space,axis:1})]}):null,a.jsxs("div",{className:"subcontrols",children:[a.jsx("button",{className:"button",onClick:k,children:n.lock?$t:Vt}),a.jsx("button",{className:"button anim-view",onClick:ae,title:"Animate rotations",children:n.auto==="free"?_t:n.auto==="damp"?Ht:"?"}),a.jsx("button",{className:"button",onClick:w,title:"Center View",children:pn}),a.jsx("button",{className:"button",onClick:C,title:"Coxeter View",children:mn}),["advanced","full"].includes(s)?a.jsxs(a.Fragment,{children:[Fe.square&&a.jsx("button",{className:"button",onClick:y,title:"Orthographic",children:Jt}),Fe.cube&&a.jsx("button",{className:"button",onClick:z,title:"Stereographic",children:Gt})]}):null]})]}):null,["simple","advanced","full"].includes(s)&&a.jsx(Fn,{dimensions:t.dimensions,coxeter:t.coxeter,mirrors:t.mirrors,stellation:t.stellation,extended:t.extended,space:e.space,onChange:p,preview:!0})]}),a.jsxs("div",{className:"ui-row ui-row-middle",children:[a.jsx(sa,{runtime:e,setRuntime:o,showUI:s,updateParams:r}),["advanced","full"].includes(s)&&a.jsxs("aside",{className:"view",children:[a.jsx(B,{name:"msaaSamples",label:"MSAA",min:0,step:1,max:pe.msaaSamples,value:t.msaaSamples,toggler:t.msaa,togglerName:"msaa",onChange:p}),a.jsx("div",{className:"projection",children:a.jsxs("label",{className:"number-label",children:[a.jsx("span",{className:"number-label",children:"Detail"}),a.jsxs("label",{className:"boolean-label",children:[a.jsx(Ie,{name:"adaptative",value:t.adaptative,onChange:p}),"Auto"]}),a.jsx("select",{name:"detail",value:e.detail,onChange:x=>o(S=>({...S,detail:x.target.value})),children:ee.map(x=>a.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,S=>S.toUpperCase())},x))})]})}),s==="full"&&a.jsx(B,{name:"subsampling",label:"subsampling",min:.1,step:.1,value:t.subsampling,onChange:p}),t.dimensions>=3?J(3,t.dimensions+1).map(x=>a.jsxs("div",{className:"projection",children:[s==="full"&&a.jsx(B,{label:`${x}D FOV`,name:`fov${x}`,step:1,value:t[`fov${x}`],onChange:p}),a.jsxs("label",{className:"number",children:[a.jsxs("span",{className:"number-label",children:[x,"D Projection"]}),a.jsx("select",{name:`projection${x}`,value:t[`projection${x}`],onChange:v,children:[...en.filter((S,O)=>{var X;return x===3&&e.dimensions===3&&((X=e.space)==null?void 0:X.curvature)<0||O<9})].map(S=>a.jsx("option",{value:S,children:S.replace(/_/g," ").replace(/./,O=>O.toUpperCase())},S))})]})]},x)):null,s==="full"&&a.jsxs(a.Fragment,{children:[a.jsxs("label",{className:"boolean-label",children:["CrossSection",a.jsx(Ie,{name:"crosssection",value:t.crosssection,onChange:p})]}),t.crosssection?J(t.dimensions+1).map(x=>a.jsx("div",{className:"plane",children:a.jsx(B,{name:`section[${x}]`,label:x===t.dimensions?"d":on[x],min:-1/0,step:.1,value:t.section[x],onChange:(S,O)=>p("section",t.section.map((X,ie)=>x===ie?O:X))})},x)):null]})]})]}),a.jsxs("div",{className:"ui-row ui-row-bottom",children:[["simple","advanced","full"].includes(s)?a.jsx("button",{className:"preset-button button",onClick:()=>c(x=>!x),title:"Presets",children:Bt}):null,["advanced","full"].includes(s)&&a.jsxs("aside",{className:"parameters",children:[(s==="full"||s==="advanced"&&t.extrarels)&&((Pe=e.polytope)!=null&&Pe.gens.length)?a.jsxs("div",{className:"rels",children:[a.jsxs("label",{className:"number-label",children:[a.jsxs("span",{children:[e.polytope.gens.split("").map(x=>a.jsxs("span",{className:"generator",children:[x,a.jsx("sub",{children:e.polytope.transforms[x]})]},x)).reduce((x,S)=>[x,", ",S])," ","/ ",e.polytope.subgens.split("").join(", ")," |"," "]}),a.jsx("div",{"data-autosize":t.extrarels||e.polytope.extrarels,children:a.jsx("input",{name:"extrarels",size:4,title:_,placeholder:e.polytope.extrarels,value:t.extrarels,onChange:v})})]}),t.extrarels&&a.jsx("button",{className:"button clean-rels-button",onClick:M,title:"Clean",children:"^n"})]}):null,(Me=e.space)!=null&&Me.curvature?a.jsxs("label",{className:"boolean-label",children:["Normalize",a.jsx(Ie,{name:"curve",value:t.curve,onChange:p})]}):null,!e.hidden.includes("vertex")&&a.jsx(B,{name:"sizeVertex",label:"Vertices",min:0,step:1,value:t.sizeVertex,onChange:p}),!e.hidden.includes("edge")&&a.jsx(B,{name:"sizeEdge",label:"Edges",min:0,step:1,value:t.sizeEdge,onChange:p}),a.jsxs("label",{className:"select-label",children:["Ambiance",a.jsx("select",{name:"ambiance",value:t.ambiance,onChange:v,children:(s==="full"?Object.keys(te):Object.entries(te).filter(([x,{extended:S}])=>!S||x===t.ambiance).map(([x])=>x)).map(x=>a.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,S=>S.toUpperCase())},x))})]}),window.location.search.includes("debug")&&s==="full"&&a.jsxs(a.Fragment,{children:[a.jsx(B,{name:"start",label:"Start",min:0,step:1,value:t.start,onChange:p}),a.jsx(B,{name:"limit",label:"Limit",min:0,step:1,value:t.limit,onChange:p}),a.jsx(B,{name:"batch",label:"Batch",min:0,step:1,value:t.batch,onChange:p})]})]}),s==="empty"?a.jsx("div",{className:"spacer"}):null,a.jsx("button",{className:`space-button button${e.processing?" processing":""}${s==="empty"?" empty":""}`,onClick:E,children:a.jsx(N,{...e.space||{},dimensions:e.dimensions})})]})]})]})}function la({params:e,updateParams:t}){const[n,o]=g.useState({...e,space:null,shape:null,processing:!0,detail:"medium",iteration:0,polytope:null,shaper:null,paused:!1,error:null});g.useEffect(()=>{o(u=>{try{return u.gl?u:wt(u)}catch(m){return console.error(m),{...u,error:m.message}}})},[n.gl]);const[r,i]=g.useState({shift:0,maxShift:0,combinations:[],auto:"damp",lock:!1});g.useEffect(()=>{o(u=>({...u,...ve(e).params}))},[e]),g.useEffect(()=>{n.space&&i(u=>({...u,shift:0,...zn(e.dimensions,n.space)}))},[e.dimensions,n.space]);const s=g.useCallback((u,m)=>{i(c=>({...c,[u]:m}))},[i]);return n.gl?a.jsxs(a.Fragment,{children:[a.jsx(ca,{runtime:n,params:e,rotations:r,setRuntime:o,updateRotations:s,updateParams:t}),a.jsx(Pt,{runtime:n,rotations:r,setRuntime:o,updateRotations:s,updateParams:t})]}):null}const H=(e,t)=>{let n=t,o=0;for(;e.quotientMap[n];)o++,n=e.quotientMap[n];return o>1&&(e.quotientMap[t]=n),n},vn=(e,t,n)=>{const o=t,r=[[t,n]];for(;r.length>0;)if([t,n]=r.pop(),t>n&&([t,n]=[n,t]),t=H(e,t),n=H(e,n),t!==n){e.quotientMap[n]=t,e.seen.has(n)&&!e.seen.has(t)&&e.seen.add(t);const i=e.cosets.get(t),s=e.cosets.get(n);e.cosets.delete(n);for(const[u,m]of s)i.has(u)?r.push([i.get(u),m]):i.set(u,m)}return H(e,o)},qe=(e,t,n,o)=>{t=H(e,t);const r=e.cosets.get(t);r.has(n)?vn(e,r.get(n),o):r.set(n,o)},ge=(e,t,n,o)=>{t=H(e,t);let r;const i=e.cosets.get(t);return i.has(n)?(r=H(e,i.get(n)),o!==void 0&&r!==o&&vn(e,o,r)):(o?r=o:(r=e.nextVertex++,e.cosets.set(r,new Map),e.unvisited.push(r)),qe(e,t,n,r),qe(e,r,me(n),t)),r},Ye=function(e,t,n){let o=n;for(let r=t.length-1;r>0;r--)o=ge(e,o,t[r]);ge(e,o,t[0],n)},ua=function(e){var n,o;if(!e.words){const r=H(e,1);e.words=new Map,e.words.set(r,""),(e.compound||!e.dual)&&(e.currentWords=new Map,e.currentWords.set(r,"")),(e.compound||e.dual)&&(e.dualCurrentWords=new Map,e.dualCurrentWords.set(r,"")),e.lastCoset=r,e.remaining=[r],e.rootVertex&&e.rootNormals&&e.metric&&(e.vertices=new Map,e.vertices.set(r,e.rootVertex))}const t=new Set;for(;e.remaining.length>0;){const r=e.remaining[0],i=H(e,r),s=e.cosets.get(i),u=e.words.get(i);if(u===void 0){if(t.has(r)){console.warn("Failed to find word for coset",r);return}e.remaining.push(e.remaining.shift()),t.add(r);continue}if(s.size<e.gens.length*2)return;const m=[];for(let c=0;c<e.gens.length;c++){const l=e.gens[c],f=H(e,s.get(l));if(!e.words.has(f)){if(e.cosets.get(f).size<e.gens.length*2)return;m.push([l,f])}}e.remaining.shift();for(let c=0;c<m.length;c++){const[l,f]=m[c],h=l+u;if(e.words.set(f,h),(n=e.currentWords)==null||n.set(f,h),(o=e.dualCurrentWords)==null||o.set(f,h),e.lastCoset=f,e.remaining.push(f),e.vertices){let v=e.vertices.get(i);for(let p=0;p<e.transforms[l].length;p++){const E=e.transforms[l][p];v=Pn(v,e.rootNormals[E],e.metric)}e.vertices.set(f,v)}}}},da=e=>{if(e.cosets)e.unvisited.splice(0,e.pointer),e.pointer=0;else{e.unvisited=[1],e.pointer=0,e.cosets=new Map([[1,new Map]]),e.nextVertex=2,e.seen=new Set,e.quotientMap={};for(let t=0;t<e.subgens.length;t++)Ye(e,e.subgens[t],1)}e.limit=e.limit||1e3,e.done=!1;for(let t=0;t<e.limit;t++){let n=null;for(;e.unvisited.length-e.pointer>0;){const o=e.unvisited[e.pointer++],r=H(e,o);if(!e.seen.has(r)){e.seen.add(r),n=r;break}}if(n===null){e.done=!0;break}for(let o=0;o<e.gens.length;o++)ge(e,n,e.gens[o].toUpperCase()),ge(e,n,e.gens[o]);for(let o=0;o<e.rels.length;o++)Ye(e,e.rels[o],n)}},hn=e=>(da(e),ua(e),e),Ze=()=>{const{location:e}=window;if(e.hash)try{const t=JSON.parse(atob(e.hash.slice(1)));return ve({...pe,...t}).params}catch(t){console.warn(t),e.hash=""}return ve(pe).params},fa=(e,t=!1)=>{const n="#"+btoa(JSON.stringify(e));window.history[t?"replaceState":"pushState"](null,null,n)},ma=()=>{const[e,t]=g.useState(Ze()),n=g.useCallback(r=>{const i=Ze();i&&(Object.entries(i).forEach(([s,u])=>{Array.isArray(u)&&_e(u,e[s])&&(i[s]=e[s])}),t(i))},[e]),o=g.useCallback((r,i=!1)=>{t(s=>{if(!Object.entries(r).filter(([c,l])=>Array.isArray(l)&&!l._reset?!_e(l,s[c]):s[c]!==l).length)return s;const{params:u,badParams:m}=ve(i?r:{...s,...r},i?[]:Object.keys(r),s);return m.length||fa(u,Object.keys(r).length===1&&r.matrix),u})},[]);return g.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),a.jsx(la,{params:e,updateParams:o})};Mn.createRoot(document.getElementById("root")).render(a.jsx(ma,{}));window.ToddCoxeter=hn;window.bench=()=>{const e=performance.now(),t=hn({gens:"abcdef",subgens:"c",rels:["aa","bb","cc","dd","ee","ff","abababab","acac","bcbcbc","adad","bdbd","cdcdcd","aeae","bebe","cece","dedede","afaf","bfbf","cfcf","dfdf","efefef"],limit:1e5});return console.warn(performance.now()-e,t.words.length),t.tc};export{Ln as c,ne as r};
