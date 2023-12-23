import{r as g,a as Oe,p as Ve,b as Ge,e as qe,c as $,i as J,d as U,s as sn,f as an,g as cn,m as P,h as ge,T as xe,j as oe,P as B,n as $e,k as ae,l as K,t as Je,o as ln,q as un,u as fn,v as dn,w as vn,x as mn,y as Se,z as G,A as We,B as Ke,C as ne,D as pn,E as hn,F as gn,G as Te,H as Ae,I as Re,J as Fe,K as xn,L as bn,M as En,N as wn,O as Nn,Q as r,R as Ie,S as be,U as Xe,V as Sn,W as In,X as jn,Y as W,Z as yn,_ as On,$ as Ee,a0 as Tn,a1 as An,a2 as De}from"./CoxeterDiagram-05f6fe7f.js";var Rn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}class ue extends g.Component{constructor(t){super(t),this.state={error:!1}}static getDerivedStateFromError(t){return{error:!0}}static getDerivedStateFromProps(t){return{error:t.error}}componentDidCatch(t,n){this.props.onError(t,n)}render(){return this.state.error?null:this.props.children}}var Ye={exports:{}};(function(e,t){(function(n,a){e.exports=a()})(Rn,function(){var n=function(){function a(m){return s.appendChild(m.dom),m}function o(m){for(var p=0;p<s.children.length;p++)s.children[p].style.display=p===m?"block":"none";i=m}var i=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(m){m.preventDefault(),o(++i%s.children.length)},!1);var l=(performance||Date).now(),f=l,d=0,c=a(new n.Panel("FPS","#0ff","#002")),u=a(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=a(new n.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:s,addPanel:a,showPanel:o,begin:function(){l=(performance||Date).now()},end:function(){d++;var m=(performance||Date).now();if(u.update(m-l,200),m>f+1e3&&(c.update(1e3*d/(m-f),100),f=m,d=0,v)){var p=performance.memory;v.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return m},update:function(){l=this.end()},domElement:s,setMode:o}};return n.Panel=function(a,o,i){var s=1/0,l=0,f=Math.round,d=f(window.devicePixelRatio||1),c=80*d,u=48*d,v=3*d,m=2*d,p=3*d,x=15*d,E=74*d,T=30*d,S=document.createElement("canvas");S.width=c,S.height=u,S.style.cssText="width:80px;height:48px";var j=S.getContext("2d");return j.font="bold "+9*d+"px Helvetica,Arial,sans-serif",j.textBaseline="top",j.fillStyle=i,j.fillRect(0,0,c,u),j.fillStyle=o,j.fillText(a,v,m),j.fillRect(p,x,E,T),j.fillStyle=i,j.globalAlpha=.9,j.fillRect(p,x,E,T),{dom:S,update:function(F,D){s=Math.min(s,F),l=Math.max(l,F),j.fillStyle=i,j.globalAlpha=1,j.fillRect(0,0,c,x),j.fillStyle=o,j.fillText(f(F)+" "+a+" ("+f(s)+"-"+f(l)+")",v,m),j.drawImage(S,p+d,x,E-d,T,p,x,E-d,T),j.fillRect(p+E-d,x,d,T),j.fillStyle=i,j.globalAlpha=.9,j.fillRect(p+E-d,x,d,f((1-F/D)*T))}}},n})})(Ye);var Dn=Ye.exports;const Cn=Fn(Dn),Mn=`const vec2 cone = vec2(1., 0);
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
`,zn=`// Global vertex uniforms

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

float trix(in float c, in float p, in float t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec2 trix(in vec2 c, in vec2 p, in vec2 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec3 trix(in vec3 c, in vec3 p, in vec3 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec4 trix(in vec4 c, in vec4 p, in vec4 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}

#if DIMENSIONS == 5
vec5 mix(in vec5 a, in vec5 b, in float t) {
  return vec5(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec5 trix(in vec5 c, in vec5 p, in vec5 t, in vec2 a) {
  return vec5(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 6
vec6 mix(in vec6 a, in vec6 b, in float t) {
  return vec6(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec6 trix(in vec6 c, in vec6 p, in vec6 t, in vec2 a) {
  return vec6(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 7
vec7 mix(in vec7 a, in vec7 b, in float t) {
  return vec7(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec7 trix(in vec7 c, in vec7 p, in vec7 t, in vec2 a) {
  return vec7(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 8
vec8 mix(in vec8 a, in vec8 b, in float t) {
  return vec8(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec8 trix(in vec8 c, in vec8 p, in vec8 t, in vec2 a) {
  return vec8(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 9
vec9 mix(in vec9 a, in vec9 b, in float t) {
  return vec9(mix(a.v, b.v, t), mix(a.u, b.u, t), mix(a.t, b.t, t));
}
vec9 trix(in vec9 c, in vec9 p, in vec9 t, in vec2 a) {
  return vec9(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a), trix(c.t, p.t, t.t, a));
}
#endif

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

#if DIMENSIONS == 2
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
`,kn=`float ease(float t) {
  if(t < 0. || t > 1.) {
    return t;
  }
  #if EASING == 0  // linear
  return t;
  #elif EASING == 1 // sine
  return -0.5 * (cos(PI * t) - 1.);
  #elif EASING == 2 // quadratic
  float p = 2. * t * t;
  return t < 0.5 ? p : -p + (4. * t) - 1.;
  #elif EASING == 3 // cubic
  return t < 0.5 ? 4. * pow(t, 3.) : 1. - pow(-2. * t + 2., 3.) / 2.;
  #elif EASING == 4 // quartic
  return t < 0.5 ? 8. * pow(t, 4.) : -8. * pow(t - 1., 4.) + 1.;
  #elif EASING == 5 // quint6ic
  return t < 0.5 ? 16. * pow(t, 5.) : 1. - pow(-2. * t + 2., 5.) / 2.;
  #elif EASING == 6 // exponential
  return t == 0. || t == 1. ? t : t < 0.5 ? +0.5 * pow(2., (20. * t) - 10.) : -0.5 * pow(2., 10. - (t * 20.)) + 1.;
  #elif EASING == 7 // circular
  return t < 0.5 ? 0.5 * (1. - sqrt(1. - 4. * t * t)) : 0.5 * (sqrt((3. - 2. * t) * (2. * t - 1.)) + 1.);
  #elif EASING == 8 // back
  const float c1 = 1.70158;
  const float c2 = c1 * 1.525;
  return .5 * (t < 0.5 ? (pow(2. * t, 2.) * ((c2 + 1.) * 2. * t - c2)) : (pow(2. * t - 2., 2.) * ((c2 + 1.) * (t * 2. - 2.) + c2) + 2.));
  #elif EASING == 9 // elastic
  const float c5 = (TAU) / 4.5;
  return t == 0. ? 0. : t == 1. ? 1. : t < 0.5 ? -(pow(2., 20. * t - 10.) * sin((20. * t - 11.125) * c5)) / 2. : (pow(2., -20. * t + 10.) * sin((20. * t - 11.125) * c5)) / 2. + 1.;
  #elif EASING == 10 // bounce
  float s = 7.5625;
  float p = 2.75;
  float l;
  if(t < (1. / p)) {
    l = s * pow(t, 2.);
  } else {
    if(t < (2. / p)) {
      t -= (1.5 / p);
      l = s * pow(t, 2.) + 0.75;
    } else {
      if(t < (2.5 / p)) {
        t -= (2.25 / p);
        l = s * pow(t, 2.) + 0.9375;
      } else {
        t -= (2.625 / p);
        l = s * pow(t, 2.) + 0.984375;
      }
    }
  }
  return l;
  #elif EASING == 11 // inverse_sine
  return (t < 1e-3 || t > 1. - 1e-3) ? t : acos(1. - (2. * t)) / PI;
  #elif EASING == 12 // inverse_quadratic
  return (t < 1e-3 || t > 1. - 1e-3) ? t : t < .5 ? sqrt(t / 2.) : .5 * (2. - sqrt(2.) * sqrt(1. - t));
  #elif EASING == 13 // inverse_cubic
  return (t < 1e-3 || t > 1. - 1e-3) ? t : t < 0.5 ? pow(t / 4., 1. / 3.) : 1. - pow((1. - t) / 4., 1. / 3.);
  #elif EASING == 14 // inverse_quartic
  return (t < 1e-3 || t > 1. - 1e-3) ? t : t < .5 ? pow(t / 8., 1. / 4.) : 1. - pow((1. - t) / 8., 1. / 4.);
  #elif EASING == 15 // inverse_quintic
  return (t < 1e-3 || t > 1. - 1e-3) ? t : t < .5 ? pow(t / 16., 1. / 5.) : 1. - pow((1. - t) / 16., 1. / 5.);
  #else
  return t;
  #endif
}

vec2 ease(vec2 t) {
  return vec2(ease(t.x), ease(t.y));
}
`,Pn=`#version 300 es
precision highp float;

uniform mat4 viewProjection;
uniform vec3 eye;

#include config

// Constants
const float PI = 3.14159265358979323846264338327950288f;
const float TAU = 2.f * PI;
const float ETA = PI / 2.f;
const vec3 NOISE = vec3(.000003f, -.000002f, .000017f);
const float NaN = intBitsToFloat(-1);
const float SCALE = TAU;
const float curvature = float(CURVATURE);
#ifdef SEGMENTS
const float segments = float(SEGMENTS);
#else
const float segments = 1.f;
#endif
const float DT = .1f / segments;
`,_n=`#loopN2
float len(in vecN v) {
  return sqrt(ndot(v, v));
}
#endloopN

float xdot(in vecN v) {
  return ndot(multiplyMatrix(metric, v), v);
}

vecN xnormalize(in vecN v) {
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
`,Ln=`const float ambient = AMBIENT;
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
}
`,Un=`#include helpers
#include ease
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

vec3 xproject(in vec2 v) {
  return vec3(v, 0.);
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
  nset(z, -1, nget(z, -1) - 1.); // Lower the plane for better perspectize
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
  #if DIMENSIONS < 5
  pos.xy = vec2(1.);
  #if DIMENSIONS >= 3 && PROJECTION3 == -1
  pos.z = 1.;
  #endif
  #else
  pos.v.xyz = vec3(1.);
  #endif
  vec3 inv = clamp(abs(pureproject(pos)), 0.01, 16.);
  size = size * .01;
  size = size * size * size;
  return size * norm * inv + point;
}
`,Bn=`#ifdef OIT
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
`,Hn=`gl_Position = viewProject(proj);

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
`,Vn=`#ifdef SHADING
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
`,fe=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),C=(e,t,n)=>{let a,o,i;if(t===0)a=o=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;a=fe(l,s,e+1/3),o=fe(l,s,e),i=fe(l,s,e-1/3)}return[a,o,i]},te=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],Gn={background:[0,0,0,1],glow:!1,shading:"ads",diffuse:"lambert",specular:!1,shininess:32,opacity:1,ambient:.2,roughness:.85,gouraud:!1,transparency:"oit",color:({word:e})=>C(e.length*.03%1,.75,.7)},X=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},shading:!1,face:{opacity:.025},transparency:"blend",color:({word:e})=>C(e.length*.17%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,diffuse:"fresnel",opacity:.025},transparency:"blend",color:({word:e})=>C(...te[e.length%te.length])},synthwave:{background:[...C(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},shading:!1,face:{opacity:.015},afterImage:.7,transparency:"blend",color:({word:e})=>C((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>C(e.length*.03%1,1,.8)},shiny:{background:[0,0,0,1],diffuse:"lambert",specular:"blinn-phong",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>C(-(e.length*.07)%1,1,.8)},shape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.1,diffuse:"fresnel"},color:({len:e,vertices:t},n)=>n==="face"?C(((e||t.length)-2)*.21%1,1,.8):[1,1,1]},subShape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({subShape:e},t)=>t!=="vertex"?C(e*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],diffuse:"cel",face:{opacity:.6,gouraud:!1},transparency:"blend",color:({word:e},t,{dimensions:n,showFaces:a})=>{const o=e.length?Oe(e[e.length-1])/n:0;return C(o%1,1,t==="face"?.6:a?0:.8)}},harlequin:{background:[...C(240/360,.23,.09),1],face:{opacity:.6},transparency:"oit",color:({word:e,index:t},n,{dimensions:a,showFaces:o})=>{const i=e.split("").map(l=>Oe(l)).reduce((l,f)=>l+f,0),s=[...te[i%te.length]];return n==="face"&&t%2&&(s[2]*=.5),C(...s)}},pure:{background:[0,0,0,1],color:({word:e})=>C(e.length*.03%1,.75,.7)},facets:{background:[0,0,0,1],color:({word:e,index:t})=>C((t||0)*.13%1,.75,.7)},monochrome:{background:[.12,.12,.12,1],diffuse:"reverse",ambient:0,face:{opacity:.1},transparency:"oit",color:()=>[1,1,1]},plain:{extended:!0,background:[1,1,1,1],glow:!1,shading:!1,color:({word:e},t,{dimensions:n,showFaces:a})=>C(e.length*.06%1,1,t==="face"?.6:a?.05:.5)},plainblack:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e},t)=>t==="face"?new Array(3).fill(1-Ve(.9,e.length+1)):[0,0,0]},normals:{extended:!0,background:[1,1,1,1],shading:"normal",color:e=>[0,0,0]},uvs:{extended:!0,background:[1,1,1,1],shading:"uv",color:e=>[0,0,0]}}).map(([e,t])=>[e,{...Gn,...t,transparent:{}}])),qn={globals:Pn,dimensions:zn,project:Un,helpers:_n,complex:Mn,ease:kn,fragment:Bn,vertexouthead:Vn,lighting:Ln,vertexout:Hn},$n=(e,t,n)=>{t=n?1:t||1,t=Math.max(0,t);const a=n?n.width:e.clientWidth*t|0,o=n?n.height:e.clientHeight*t|0;return e.width!==a||e.height!==o?(e.width=a,e.height=o,!0):!!n},de=(e,t)=>e.replace(/\bvecN\b/g,`vec${t}`).replace(/\bmatN\b/g,`mat${t}`).replace(/\bfovN\b/g,`fov${t}`).replace(/\bvecN_1\b/g,`vec${t-1}`).replace(/\bvec1\b/g,"float").replace(/\b_N_\b/g,`${t}`).replace(/\b_Nf_\b/g,`${t}.`).replace(/\PROJECTION_N\b/g,`PROJECTION${t}`),Jn=(e,t)=>de(e.replace(/#loopN(\d)(.+?)#endloopN/gs,(n,a,o)=>{const i=[];for(let s=a;s<=t;s++)i.push(de(o.replace(/#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,(l,f,d,c,u)=>f===`${s}`?de(d,s):u||""),s));return i.join(`
`)}),t),Ce=(e,t,n,a)=>{var d;const o=X[e.ambiance];let i="";const s=c=>c.toString().includes(".")?c:`${c}.`;Object.entries({shading:c=>sn.indexOf(c),diffuse:c=>an.indexOf(c),specular:c=>cn.indexOf(c),ambient:c=>s(c),shininess:c=>s(c),roughness:c=>s(c),opacity:c=>s(c),gouraud:c=>""}).forEach(([c,u])=>{const v=Object.keys(o).includes(a)&&Object.keys(o[a]).includes(c)?o[a][c]:o[c];v!==!1&&(i+=`#define ${c.toUpperCase()} ${u(v)}
`),c==="opacity"&&v<1&&(o.transparent[a]=!0,i+=`#define TRANSPARENT
`,o.transparency==="oit"&&(i+=`#define OIT
`))});const f=e.easing;i+=`#define DIMENSIONS ${e.dimensions}
`;for(let c=3;c<=e.dimensions;c++)i+=`#define PROJECTION${c} ${Ge.indexOf(e[`projection${c}`])-1}
`;return i+=`#define CURVATURE ${((d=e.space)==null?void 0:d.curvature)||0}
`,e.curve&&e.segments>1&&(i+=`#define SEGMENTS ${e.segments}
`),i+=`#define EASING ${qe.indexOf(f)}
`,Object.entries({...qn,config:i}).forEach(([c,u])=>{t=t.replace(`#include ${c}`,u),n=n.replace(`#include ${c}`,u)}),[t,n].map(c=>Jn(c,e.dimensions))},re=(e,t,n,a,o)=>{if(e.gl.shaderSource(o,a),e.gl.compileShader(o),!e.gl.getShaderParameter(o,e.gl.COMPILE_STATUS)){const s=e.gl.getShaderInfoLog(o);return console.error(`An error occurred compiling the ${t}->${n} shader: ${s}`,{shaderSource:a}),s}},Me=(e,t,n)=>{const{gl:a}=e;if(a.linkProgram(n),!a.getProgramParameter(n,a.LINK_STATUS)){const i=a.getProgramInfoLog(n);return console.error(`Unable to initialize the ${t} shader program: ${i}`),i}},Ze=(e,t,n,a,o=[])=>{const{gl:i}=e,s=i.createProgram(),l=i.createShader(i.VERTEX_SHADER),f=i.createShader(i.FRAGMENT_SHADER);if(re(e,t,"vertex",n,l)||re(e,t,"fragment",a,f)||(i.attachShader(s,l),i.attachShader(s,f),Me(e,t,s)))return;const d={program:s,vertexShader:l,fragmentShader:f,uniformsDef:o,recompile(c,u,v,m=null){re(c,t,"vertex",u,this.vertexShader)||re(c,t,"fragment",v,this.fragmentShader)||Me(c,t,this.program)||(m&&(this.uniformsDef=m),this.bindUniforms(c))},bindUniforms(c){this.uniforms={},this.uniformsDef.forEach(({name:u,type:v,value:m})=>{this.uniforms[u]=Wn(c,this.program,u,v),this.uniforms[u].update(m)})}};return d.bindUniforms(e),d},Y=(e,t,n,a,o,i=null,s=null)=>{const{gl:l}=e;s=s||l.FLOAT;const f=s===l.FLOAT?4:2,d={name:n,mesh:t,indices:Qe,instances:i,data:o,size:a,type:s,update(c=null,u=null,v=null){l.bindVertexArray(this.mesh.vao),l.bindBuffer(l.ARRAY_BUFFER,this.buffer),c===null&&u===null&&v===null?l.bufferData(l.ARRAY_BUFFER,this.data,l.STATIC_DRAW):(this.data.set(c,u*this.size),l.bufferSubData(l.ARRAY_BUFFER,u*this.size*f,this.data,u*this.size,v*this.size))},extend(c,u,v=!1){if(l.bindVertexArray(this.mesh.vao),this.size=c,u&&(v&&u.length>=this.data.length&&u.set(this.data),this.data=u),this.location=l.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;l.bindBuffer(l.ARRAY_BUFFER,this.buffer);const m=c>4?3:1;this.name==="target"&&(this.location=c>4?6:4),this.name==="center"&&(this.location=c>4?9:5);for(let p=0;p<m;p++)l.enableVertexAttribArray(this.location+p);for(let p=0;p<m;p++)l.vertexAttribPointer(this.location+p,c/m,this.type,!1,c*f,c/m*p*f);if(this.instances)for(let p=0;p<m;p++)l.vertexAttribDivisor(this.location+p,this.instances);this.update()},get(){l.bindVertexArray(this.mesh.vao),l.bindBuffer(l.ARRAY_BUFFER,this.buffer);const c=new Float32Array(this.data.length);return l.getBufferSubData(l.ARRAY_BUFFER,0,c),c}};return d.buffer=l.createBuffer(),d.extend(a),d},Qe=(e,t,n)=>{const{gl:a}=e;a.bindVertexArray(t);const o=a.createBuffer();return a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,o),a.bufferData(a.ELEMENT_ARRAY_BUFFER,n,a.STATIC_DRAW),{buffer:o,vao:t,indices:n,count:n.length,update(i){a.bindVertexArray(this.vao),this.indices=i,this.count=i.length,a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,this.buffer),a.bufferData(a.ELEMENT_ARRAY_BUFFER,i,a.STATIC_DRAW)}}},Wn=(e,t,n,a)=>{const{gl:o}=e;return{program:t,update(s){if(o.useProgram(this.program),a.startsWith("m")){const l=parseInt(a.slice(1,2));if(l>4)for(let f=0;f<l;f++){const d=o.getUniformLocation(t,`${n}.c${f+1}.v`);if(d!==null&&o.uniform4fv(d,s[f][0]),l-4===1){const c=o.getUniformLocation(t,`${n}.c${f+1}.u`);c!==null&&o.uniform1f(c,s[f][1])}else if(l-4>1){const c=o.getUniformLocation(t,`${n}.c${f+1}.u`);if(c!==null&&o[`uniform${P(l-4,4)}fv`](c,s[f][1]),l-8===1){const u=o.getUniformLocation(t,`${n}.c${f+1}.t`);u!==null&&o.uniform1f(u,s[f][2])}}}else{const f=o.getUniformLocation(t,n);f!==null&&o[`uniformMatrix${a.slice(1)}`](f,!1,s)}}else{const l=o.getUniformLocation(t,n);l!==null&&o[`uniform${a}`](l,s)}},get(){o.useProgram(this.program);const s=o.getUniformLocation(t,n);if(s!==null)return o.getUniform(this.program,s)}}},L=(e,t,n=null)=>{const{gl:a}=e,o=n?~~(n*a.drawingBufferWidth):a.drawingBufferWidth,i=n?~~(n*a.drawingBufferHeight):a.drawingBufferHeight,s=a.createTexture();return a.bindTexture(a.TEXTURE_2D,s),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,n?a.LINEAR:a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,n?a.LINEAR:a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texStorage2D(a.TEXTURE_2D,1,t,o,i),{texture:s,width:o,height:i}},Z=(e,t,n,a,o=[])=>{const i={name:t,vertex:n,fragment:a,...Ze(e,t,n,a,o),recompileProgram(s){this.recompile(s,this.vertex,this.fragment,o)}};return{[t]:i}},ve=(e,t,n,a,o,i,s,l=!0,f=["position"])=>{const{gl:d}=e,c=o(e.curve?e.segments:1,e.detail),u=m=>[{name:"viewProjection",type:"m4fv",value:$(J(4))},{name:"matrix",type:`m${m.dimensions}fv`,value:$(m.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${m.dimensions}fv`,value:$(J(m.dimensions))},{name:"zoom",type:"1f",value:1},...["vertex","edge"].includes(t)?[{name:"thickness",type:"1f",value:0}]:[],...U(3,m.dimensions+1,1,!0).map(p=>({name:`fov${p}`,type:"1f",value:m[`fov${p}`]}))];s=s>4?9:s;const v={attributes:{},varying:f,vertex:n,type:t,fragment:a,...Ze(e,t,...Ce(e,n,a,t),u(e)),recompileProgram(m){const[p,x]=Ce(m,this.vertex,this.fragment,this.type);this.recompile(m,p,x,u(m))},changeArity(m){m=m>4?9:m,this.arity!==m&&(this.arity=m,f.forEach(p=>{this.attributes[p].extend(m,new Float32Array(this.instances*m),!1)}))},extendAttributes(m){this.instances=m,f.forEach(p=>{this.attributes[p].extend(this.arity,new Float32Array(m*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(m*3),!0)},updateGeometry(m){const p=o(m.space.curvature&&m.curve?m.segments:1,m.detail);this.indices.update(new Uint16Array(p.indices)),this.attributes.vertex.extend(3,new Float32Array(p.vertices)),this.attributes.uv.extend(2,new Float32Array(p.uvs)),this.attributes.normal.extend(3,new Float32Array(p.normals))},render(m){!this.count||!this.visible||(d.useProgram(this.program),d.bindVertexArray(this.vao),d.drawElementsInstanced(d.TRIANGLES,this.indices.count,d.UNSIGNED_SHORT,0,this.count))}};return v.visible=l,v.vao=d.createVertexArray(),v.indices=Qe(e,v.vao,new Uint16Array(c.indices)),v.attributes.vertex=Y(e,v,"vertex",3,new Float32Array(c.vertices)),v.attributes.uv=Y(e,v,"uv",2,new Float32Array(c.uvs)),v.attributes.normal=Y(e,v,"normal",3,new Float32Array(c.normals)),v.attributes.color=Y(e,v,"color",3,new Float32Array(i*3),1),f.forEach(m=>{v.attributes[m]=Y(e,v,m,s,new Float32Array(i*s),1)}),v.type=t,v.arity=s,v.instances=i,v.count=0,{[t]:v}},me=(e,t,n,a)=>{const{gl:o}=e;o.bindRenderbuffer(o.RENDERBUFFER,t),a?o.renderbufferStorageMultisample(o.RENDERBUFFER,a,n,o.drawingBufferWidth,o.drawingBufferHeight):o.renderbufferStorage(o.RENDERBUFFER,n,o.drawingBufferWidth,o.drawingBufferHeight),o.bindRenderbuffer(o.RENDERBUFFER,null)},Kn=({radius:e=1,widthSegments:t=16,segments:n=16}={})=>{const a=[],o=[],i=[],s=[];let l=0;const f=[];for(let d=0;d<=n;d++){const c=[],u=d/n;let v=0;d===0?v=.5/t:d===n&&(v=-.5/t);for(let m=0;m<=t;m++){const p=m/t,x=[-e*ge(p*xe)*oe(u*B),e*ge(u*B),e*oe(p*xe)*oe(u*B)];o.push(...x);const E=(x[0]**2+x[1]**2+x[2]**2)**-.5;i.push(...x.map(T=>T*E)),s.push(p+v,1-u),c.push(l++)}f.push(c)}for(let d=0;d<n;d++)for(let c=0;c<t;c++){const u=f[d][c+1],v=f[d][c],m=f[d+1][c],p=f[d+1][c+1];d!==0&&a.push(u,v,p),d!==n-1&&a.push(v,m,p)}return{vertices:o,normals:i,uvs:s,indices:a}},Xn=({radius:e=null,radiusTop:t=1,radiusBottom:n=1,height:a=1,radialSegments:o=8,segments:i=1}={})=>{const s=[],l=[],f=[],d=[];e!==null&&(t=e,n=e);let c=0;const u=[],v=a/2,m=(n-t)/a;for(let p=0;p<=i;p++){const x=[],E=p/i,T=E*(n-t)+t;for(let S=0;S<=o;S++){const j=S/o,F=j*xe,D=oe(F),H=ge(F),z=[T*D,-E*a+v,T*H];l.push(...z);const _=[D,m,H],M=(_[0]**2+_[1]**2+_[2]**2)**-.5;f.push(..._.map(b=>b*M)),d.push(j,1-E),x.push(c++)}u.push(x)}for(let p=0;p<o;p++)for(let x=0;x<i;x++){const E=u[x][p],T=u[x+1][p],S=u[x+1][p+1],j=u[x][p+1];s.push(E,T,j),s.push(T,S,j)}return{vertices:l,normals:f,uvs:d,indices:s}},Yn=({segments:e=3}={})=>{const t=[],n=[],a=[],o=[],i=1/e;for(let s=0;s<e+1;s++)for(let l=0;l<s+1;l++)n.push((2*l-s)*i/2,s*i,0),a.push(0,0,1),o.push(i*l,1-i*s);for(let s=1;s<e+1;s++)for(let l=0;l<s;l++){const f=s*(s+1)/2+l,d=s*(s-1)/2+l;if(t.push(f,d,f+1),s<e){const c=(s+1)*(s+2)/2+l;t.push(c+1,f,f+1)}}return{vertices:n,normals:a,uvs:o,indices:t}},Zn=(e,t,n,a)=>{const o=[],i=[],s=[];for(let f=0;f<e.ranges.face[1];f++){const d=e.face[f],c=new Array(n).fill(0);for(let u=0;u<d.vertices.length;u++){const v=e.vertex[d.vertices[u]];for(let m=0;m<n;m++)c[m]+=v.vertex[m]}for(let u=0;u<n;u++)c[u]/=d.vertices.length;o.push({vertex:$e(c,a),word:d.word})}const l=new Map;for(let f=0;f<e.ranges.face[1];f++)for(let d=f+1;d<e.ranges.face[1];d++){const c=e.face[f],u=e.face[d];c.vertices.filter(m=>u.vertices.includes(m)).length>1&&(i.push({start:f,end:d,word:c.word}),l.has(f)||l.set(f,[]),l.has(d)||l.set(d,[]),l.get(f).push(d),l.get(d).push(f))}for(let f=0;f<e.ranges.vertex[1];f++){const d=[];for(let v=0;v<e.ranges.face[1];v++)e.face[v].vertices.includes(f)&&d.push(v);const c=[d.shift()];let u=!1;for(;d.length>1;){const v=c[c.length-1],m=l.get(v);if(!m){u=!0;break}const p=d.find(x=>m.includes(x));if(!p){u=!0;break}d.splice(d.indexOf(p),1),c.push(p)}u||(c.push(d[0]),s.push({vertices:c,word:e.vertex[f].word}))}return{vertex:o,edge:i,face:s,ranges:{vertex:[0,o.length],edge:[0,i.length],face:[0,s.length]}}},Qn=(e,t,n,a)=>{const o=new Map,i=[],s=[],l=[],f=t.map((u,v)=>ae(u)?K(v):"").join(""),d=f.length>0?new RegExp(`[^${f}]`,"g"):null;for(let u=0;u<e.ranges.vertex[1];u++){const v=e.vertex[u];v.word.replace(d,"").length%2===1?(v.vertex=NaN,o.set(u,[])):i.push(v)}for(let u=0;u<e.ranges.edge[1];u++)if(o.has(e.edge[u].start)){const v=o.get(e.edge[u].start);v.push(e.edge[u].end),v.word||(v.word=e.edge[u].word),o.get(e.edge[u].start).push(e.edge[u].end)}else if(o.has(e.edge[u].end)){const v=o.get(e.edge[u].end);v.push(e.edge[u].start),v.word||(v.word=e.edge[u].word),o.get(e.edge[u].end).push(e.edge[u].start)}else s.push(e.edge[u]);const c=Array.from(o.keys());for(let u=0;u<o.size;u++){const v=c[u],m=o.get(v),p=o.get(v);for(let x=0;x<m.length;x++)for(let E=0;E<p.length;E++)m[x]<=p[E]||s.push({start:m[x],end:p[E],word:p.word})}for(let u=0;u<s.length;u++){const v=s[u];for(let m=0;m<2;m++){const p=m?"start":"end",x=v[p];for(let E=0;E<o.size&&!(c[E]>x);E++)v[p]--}}for(let u=0;u<e.ranges.face[1];u++){const v=e.face[u],m=[];for(let p=0;p<v.vertices.length;p++)o.has(v.vertices[p])||m.push(v.vertices[p]);l.push({...v,vertices:m})}for(let u=0;u<o.size;u++){const v=c[u],m=o.get(v);l.push({vertices:m,word:m.word})}for(let u=0;u<l.length;u++){const v=l[u];for(let m=0;m<v.vertices.length;m++){const p=v.vertices[m];for(let x=0;x<o.size&&!(c[x]>p);x++)v.vertices[m]--}}return{vertex:i,edge:s,face:l,ranges:{vertex:[0,i.length],edge:[0,s.length],face:[0,l.length]}}},et=(e,t,n,a)=>{const o=[new Map,new Map],i=[],s=[],l=[],f=t.map((u,v)=>u==="ß"?K(v):"").join(""),d=f.length>0?new RegExp(`[^${f}]`,"g"):null;for(let u=0;u<e.ranges.vertex[1];u++){const v=e.vertex[u];o[v.word.replace(d,"").length%2].set(v.i,[])}i.push(...e.vertex);const c=[new Map,new Map];for(let u=0;u<2;u++){for(let m=0;m<e.ranges.edge[1];m++)if(o[u].has(e.edge[m].start)){c[u].has(e.edge[m].start)||c[u].set(e.edge[m].start,[]);const p=o[u].get(e.edge[m].start);p.push(e.edge[m].end),p.word||(p.word=e.edge[m].word),c[u].get(e.edge[m].start).push(e.edge[m].end)}else if(o[u].has(e.edge[m].end)){c[u].has(e.edge[m].end)||c[u].set(e.edge[m].end,[]);const p=o[u].get(e.edge[m].end);p.push(e.edge[m].start),p.word||(p.word=e.edge[m].word),c[u].get(e.edge[m].end).push(e.edge[m].start)}else s.push(e.edge[m]);const v=Array.from(c[u].keys());for(let m=0;m<c[u].size;m++){const p=v[m],x=c[u].get(p),E=o[u].get(p);for(let T=0;T<x.length;T++)for(let S=0;S<E.length;S++)x[T]<=E[S]||s.push({start:x[T],end:E[S],word:E.word})}}for(let u=0;u<2;u++){const v=Array.from(c[u].keys());for(let m=0;m<e.ranges.face[1];m++){const p=e.face[m],x=[];for(let E=0;E<p.vertices.length;E++)o[u].has(p.vertices[E])||x.push(p.vertices[E]);l.push({...p,vertices:x})}for(let m=0;m<c[u].size;m++){const p=v[m],x=o[u].get(p);l.push({vertices:x,word:x.word})}}return{vertex:i,edge:s,face:l,ranges:{vertex:[0,i.length],edge:[0,s.length],face:[0,l.length]}}},nt=`#include globals
#include fragment
`,tt=`#include globals
#include dimensions

uniform float thickness;
uniform matN metric;
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

#include vertexouthead
#include project

void main() {
  vecN positionN = multiplyMatrix(matrix, adapt(position));
  vecN targetN = multiplyMatrix(matrix, adapt(target));

  float t = ease(uv.y);
  float s = ease(uv.y - DT);
  vecN pos = mix(positionN, targetN, t);
  vecN next = mix(positionN, targetN, s);
  // Position segments on hypersurface

  #if defined(SEGMENTS) && CURVATURE != 0
  pos = xnormalize(pos);
  next = xnormalize(next);
  #endif

  vec3 proj = xproject(pos);
  vec3 nextProj = xproject(next) + NOISE;
  vec3 tangent = normalize(proj - nextProj);

  vec3 norm = cross(nextProj, proj);

  // // Find a stable norm for the whole tube
  // vecN mid = mix(positionN, targetN, .5f);

  // vec3 start = xproject(positionN);
  // vec3 end = xproject(targetN);
  // vec3 middle = xproject(xnormalize(mid));
  // vec3 norm = cross(end - start, middle - start);

  // // If there is no curvature the tube will be straight:
  // if(length(norm) < 0.001f) {
  //   middle += NOISE;
  //   norm = cross(end - start, middle - start);
  // }

  // Rodrigues' rotation formula: rotate norm around tangent by angle r:
  float r = uv.x * TAU;
  norm = normalize(norm * cos(r) + cross(tangent, norm) * sin(r));

  proj = inflate(proj, pos, norm, thickness);
  #include vertexout
}
`,rt=`#include globals
#include fragment
`,ot=`#include globals
#include dimensions

uniform matN metric;
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

#include vertexouthead
#include project

void main() {
  vecN positionN = multiplyMatrix(matrix, adapt(position));
  vecN targetN = multiplyMatrix(matrix, adapt(target));
  vecN centerN = multiplyMatrix(matrix, adapt(center));

  vec2 t = ease(uv);
  vec2 s = ease(uv - vec2(NOISE.x, DT));
  vec2 r = ease(uv - vec2(DT, NOISE.z));

  vecN pos = trix(centerN, positionN, targetN, t);
  vecN next = trix(centerN, positionN, targetN, s);
  vecN other = trix(centerN, positionN, targetN, r);

  #if defined(SEGMENTS) && CURVATURE != 0
  if(ndot(pos, pos) > 1e-6) {
    pos = xnormalize(pos);
  }
  next = xnormalize(next);
  other = xnormalize(other);
  #endif

  vec3 proj = xproject(pos);
  vec3 drdx = xproject(next) - proj;
  vec3 drdy = xproject(other) - proj;

  vec3 norm = normalize(cross(drdx, drdy));
  #include vertexout
}
`,st=`#include globals
#include fragment
`,at=`#include globals
#include dimensions

uniform float thickness;
uniform matN metric;
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

#include vertexouthead
#include project

void main() {
  vecN pos = multiplyMatrix(matrix, adapt(position));

  #if defined(SEGMENTS) && CURVATURE != 0
    // Normalization is done mainly to remove OOD points
  pos = xnormalize(pos);
  #endif

  vec3 proj = xproject(pos);
  vec3 norm = normal;
  proj = inflate(proj, pos, normal, thickness);
  #include vertexout
}
`,pe={vertex:(e,t)=>Kn({low:{widthSegments:16,segments:8},medium:{widthSegments:32,segments:16},high:{widthSegments:64,segments:32},ultra:{widthSegments:128,segments:64}}[t||"medium"]),edge:(e,t)=>Xn({low:{segments:e,radialSegments:4},medium:{segments:e,radialSegments:8},high:{segments:e,radialSegments:16},ultra:{segments:e,radialSegments:32}}[t||"medium"]),face:(e,t)=>Yn({low:{segments:~~fn(e)},medium:{segments:~~dn(e)},high:{segments:e},ultra:{segments:3*e}}[t||"medium"])};function it(e){return{meshes:["vertex","edge","face"],...ve(e,"vertex",at,st,pe.vertex,1024,e.dimensions,e.showVertices),...ve(e,"edge",tt,nt,pe.edge,1024,e.dimensions,e.showEdges,["position","target"]),...ve(e,"face",ot,rt,pe.face,1024,e.dimensions,e.showFaces,["position","target","center"]),changeArity(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].changeArity(t)},updateGeometries(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].updateGeometry(t)},recompilePrograms(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].recompileProgram(t)},updateUniforms(t,n=!1,a=null){for(let o=0;o<this.meshes.length;o++){const i=this.meshes[o],s=this[i];if(!n){s.uniforms.metric.update($(t.space.metric)),s.uniforms.matrix.update($(t.matrix));for(let l=4;l<=t.dimensions;l++)s.uniforms[`fov${l}`].update(1/Je(B*t[`fov${l}`]*.5/180));i==="vertex"?s.uniforms.thickness.update(t.vertexThickness):i==="edge"&&s.uniforms.thickness.update(t.edgeThickness)}s.uniforms.viewProjection.update(t.camera.viewProjection),s.uniforms.zoom.update(n?a:t.zoom),s.uniforms.eye.update(t.camera.eye)}},preprocess(t,n){return t.mirrors.some(a=>ae(a))&&(n=Qn(n,t.mirrors,t.dimensions,t.space.metric)),t.mirrors.some(a=>ln(a))&&(n=et(n,t.mirrors,t.dimensions,t.space.metric)),t.mirrors.some(a=>un(a))&&(n=Zn(n,t.mirrors,t.dimensions,t.space.metric)),n}}}const ct=`#version 300 es
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
`,lt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,ut=`#version 300 es
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
`,ft=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,dt=`#version 300 es
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
`,vt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,mt=`#version 300 es
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
`,pt=`#version 300 es

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
`,gt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function xt(e){return{...Z(e,"oit",pt,mt,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...Z(e,"down",vt,dt,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Z(e,"up",gt,ht,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Z(e,"afterImage",lt,ct,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...Z(e,"bloom",ft,ut,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function en(e){const{gl:t}=e,n=X[e.ambiance],a=e.msaa?P(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(t.bindFramebuffer(t.FRAMEBUFFER,e.fb.base),me(e,e.rb.base,t.RGBA8,a),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,e.rb.base),me(e,e.rb.depth,t.DEPTH_COMPONENT24,a),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),e.fb.oit&&(t.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(t.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(t.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&t.deleteRenderbuffer(e.rb.depth_copy),n.transparency==="oit"&&(e.fb.oit=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.oit),a?(e.rb.depth_copy=t.createRenderbuffer(),me(e,e.rb.depth_copy,t.DEPTH_COMPONENT24),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth_copy)):t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),e.textures.oitAccum=L(e,t.RGBA16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=L(e,t.R16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT1,t.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(t.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(t.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(t.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(t.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),n.afterImage&&(e.fb.afterImage=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=L(e,t.RGBA8),e.textures.afterImageScreen=L(e,t.RGBA8),e.textures.afterImageOutScreen=L(e,t.RGBA8)),e.fb.kawase&&(t.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(t.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let o=0;o<e.textures.kawase.length;o++)t.deleteTexture(e.textures.kawase[o].texture);e.textures.kawase=null}if(e.textures.blur&&(t.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(t.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),n.glow){e.fb.kawase=t.createFramebuffer(),e.fb.bloom=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let o=0;o<n.glow.steps;o++)e.textures.kawase[o]=L(e,t.RGBA8,n.glow.pow**-o);e.textures.blur=L(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.blur.texture,0),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=L(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.bloom.texture,0)}}const nn=window.location.search.includes("stats");let se;nn&&(se=new Cn,se.dom.id="stats",document.body.appendChild(se.dom));const bt=e=>{const t=document.createElement("canvas");t.id="webgl2",document.body.insertBefore(t,document.body.firstChild);const n=t.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:n},!n){console.error("Unable to initialize WebGL. Your browser may not support it.");return}n.getExtension("EXT_color_buffer_float"),n.enable(n.DEPTH_TEST);const a={zoom:1,fov:B/3,eye:[0,0,-e.zoom],near:.01,far:1e3,update(d){const c=J(4);c[0][3]=this.eye[0],c[1][3]=this.eye[1],c[2][3]=this.eye[2],c[0][0]=-1,c[2][2]=-1;const u=vn(c);this.aspect=d?d.fullWidth/d.fullHeight:n.canvas.clientWidth/n.canvas.clientHeight,this.zoom=P(this.aspect,1);const v={left:0,right:0,top:0,bottom:0,near:this.near,far:this.far};v.top=this.near*Je(this.fov/2)/this.zoom;let m=2*v.top,p=this.aspect*m;v.left=-.5*p,d&&(v.left+=d.x*p/d.fullWidth,v.top-=d.y*m/d.fullHeight,p*=d.width/d.fullWidth,m*=d.height/d.fullHeight),v.bottom=v.top-m,v.right=v.left+p;const x=mn(v);this.viewProjection=$(Se(x,u))}};a.update();const o=xt(e),i=it(e),s={base:n.createRenderbuffer(),depth:n.createRenderbuffer()},l={base:n.createFramebuffer()};return{...e,gl:n,camera:a,meshes:i,passes:o,rb:s,fb:l,textures:{}}},he=(e,t)=>{e.meshes[t].visible=e[t==="vertex"?"showVertices":t==="edge"?"showEdges":"showFaces"]},ie=(e,t=null)=>{e.camera.fov=e.fov3?B*e.fov3/180:1,t!==null&&(e.camera.eye[2]=t===null?-e.zoom:-t),e.camera.update(),e.meshes.updateUniforms(e,!0,t)},Et=e=>{const t=X[e.ambiance];e.gl.clearColor(...t.background),t.glow&&(e.passes.bloom.uniforms.exposure.update(t.glow.exposure),e.passes.bloom.uniforms.strength.update(t.glow.strength),e.passes.down.uniforms.offset.update(t.glow.offset.down),e.passes.up.uniforms.offset.update(t.glow.offset.up)),t.afterImage&&e.passes.afterImage.uniforms.strength.update(t.afterImage)},ee=(e,t)=>{nn&&se.update();const{gl:n}=e,a=e.msaa?P(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,o=X[e.ambiance];$n(n.canvas,e.subsampling,t)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),en(e),e.camera.update(t),e.meshes.updateUniforms(e,!0,e.zoom)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),o.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),o.transparent.vertex||e.meshes.vertex.render(e),o.transparent.edge||e.meshes.edge.render(e),o.transparent.face||e.meshes.face.render(e),(e.showVertices&&o.transparent.vertex||e.showEdges&&o.transparent.edge||e.showFaces&&o.transparent.face)&&(o.transparency==="oit"?(a&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),o.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),o.transparent.vertex&&e.meshes.vertex.render(e),o.transparent.edge&&e.meshes.edge.render(e),o.transparent.face&&e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):o.transparency==="blend"&&(n.enable(n.BLEND),o.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),o.transparent.vertex&&e.meshes.vertex.render(e),o.transparent.edge&&e.meshes.edge.render(e),o.transparent.face&&e.meshes.face.render(e)));const i=o.afterImage?e.fb.afterImage:o.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,i),o.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let s=e.textures.bloom;if(o.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),o.glow?s=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),o.glow){n.disable(n.BLEND),o.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let l=0;l<o.glow.steps;l++){const f=l===0?s:e.textures.kawase[l-1],d=e.textures.kawase[l];n.viewport(0,0,d.width,d.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,d.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let l=o.glow.steps-1;l>=0;l--){const f=e.textures.kawase[l],d=l===0?e.textures.blur:e.textures.kawase[l-1];n.viewport(0,0,d.width,d.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,d.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,s.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=ee;const Q=.9,wt=.95,Nt=10,tn=(e,t,n,a,o,i)=>{const{combinations:s}=n,l=[[],[]],f=(c,u)=>{We(a,Se(Ke(c,u,o,i),a))},d=2*t+1>s.length-1?[t*2]:[t*2+1,t*2];for(let c=0;c<d.length;c++){const u=d[c];if(l[c].push(u),n.lock&&s[u][0]>=0&&s[u][1]>=0)for(let v=0;v<s.length;v++)s[v][0]<0||s[v][1]<0||!s[u].some(m=>s[v].includes(m))&&(!(c>0)||v!==d[1-c])&&l[c].push(v)}for(let c=0;c<l.length;c++){const u=l[c];for(let v=0;v<u.length;v++){const m=u[v];f(e[c],s[m])}}return l},St=(e,t,n,a,o,i)=>{const{code:s}=e,l=.1;if(e.altKey||e.ctrlKey||e.metaKey)return;const f=(d,c,u)=>tn([d,c],u,t,n,a,o);if(s==="ArrowLeft"||s==="KeyA")f(l,0,0);else if(s==="ArrowRight"||s==="KeyD")f(-l,0,0);else if(s==="ArrowUp"||s==="KeyW")f(0,l,0);else if(s==="ArrowDown"||s==="KeyS")f(0,-l,0);else if(s==="PageUp"||s==="KeyQ")f(l,0,1);else if(s==="PageDown"||s==="KeyE")f(-l,0,1);else if(s==="Digit1")f(0,l,1);else if(s==="Digit3")f(0,-l,1);else if(s==="KeyZ")f(l,0,2);else if(s==="KeyC")f(-l,0,2);else if(s==="ControlLeft")i("shift",(t.shift+1)%t.maxShift);else return;return!0},It=(e,t,n,a)=>{const o=g.useRef(null),i=g.useRef({pause:new Set,speed:null,zoom:null,t:null}),s=g.useRef({matrix:e.matrix.map(c=>c.slice()),zoom:e.zoom,pointers:new Map});g.useEffect(()=>{s.current.matrix=e.matrix.map(c=>c.slice())},[e.matrix]),g.useEffect(()=>{s.current.zoom=e.zoom,i.current.zoom=null},[e.zoom]);const l=g.useCallback(()=>{if(e.matrix._reset)return;const c=["vertex","edge","face"];for(let u=0;u<c.length;u++)e.meshes[c[u]].uniforms.matrix.update($(s.current.matrix))},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.easing,e.edgeThickness,e.error,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.grouper,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.segments,e.showEdges,e.showFaces,e.showVertices,e.space,e.shape,e.stellation,e.subsampling,e.vertexThickness,e.zoom]),f=g.useCallback(()=>{e.matrix._reset||ie(e,s.current.zoom)},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.easing,e.edgeThickness,e.error,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.grouper,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.segments,e.showEdges,e.showFaces,e.showVertices,e.space,e.shape,e.stellation,e.subsampling,e.vertexThickness,e.zoom]);g.useEffect(()=>{i.current.speed=new Array(t.combinations.length).fill(0)},[t.combinations.length]),g.useEffect(()=>{e.matrix._reset&&(delete e.matrix._reset,i.current.speed=new Array(t.combinations.length).fill(0))},[t.combinations.length,e.matrix]);const d=g.useCallback(()=>{const{pause:c,speed:u,zoom:v}=i.current;i.current.t||(i.current.t=performance.now());const m=P(performance.now()-i.current.t,100);let p=!1;for(let x=0;x<u.length;x++)u[x]!==0&&(p=!0,t.auto==="damp"&&(u[x]*=wt,G(u[x])<1e-6&&(u[x]=0)),c.has(x)||We(s.current.matrix,Se(Ke(u[x]*m,t.combinations[x],e.dimensions,e.space.metric),s.current.matrix)));if(p&&l(),v){const x=ne(s.current.zoom)/ne(Q),E=ne(v)/ne(Q);s.current.zoom*=Ve(Q,(E-x)*P(1,m*.001*2)),G(v-s.current.zoom)<v*.001&&(s.current.zoom=v,i.current.zoom=null),p=!0,f()}if(u.reduce((x,E)=>G(x)+G(E),0)===0&&i.current.zoom===null&&!e.matrix._reset){a({matrix:s.current.matrix,zoom:s.current.zoom}),o.current=null,i.current.t=null;return}p&&ee(e),i.current.t=performance.now(),o.current=requestAnimationFrame(d)},[l,t.auto,t.combinations,e.dimensions,e.space]);g.useEffect(()=>{i.current.speed.reduce((S,j)=>G(S)+G(j),0)>0&&(o.current=requestAnimationFrame(d));let c=null,u=null;const v=[],m=()=>{const S=s.current.pointers.values(),j=S.next().value,F=S.next().value;return hn(j[0]-F[0],j[1]-F[1])},p=S=>{S.button!==0||S.target.tagName!=="CANVAS"||(t.auto&&(u=performance.now(),s.current.pointers.size===1?(i.current.pause.delete(t.shift*2),i.current.pause.delete(t.shift*2+1)):(i.current.pause.add(t.shift*2),i.current.pause.add(t.shift*2+1))),s.current.pointers.set(S.pointerId,[S.clientX,S.clientY]))},x=S=>{if(!s.current.pointers.has(S.pointerId))return;const j=s.current.pointers.get(S.pointerId),F=[-(S.clientX-j[0])/window.innerHeight,-(S.clientY-j[1])/window.innerHeight].map(z=>pn(P(z,.01),-.01));if(s.current.pointers.set(S.pointerId,[S.clientX,S.clientY]),s.current.pointers.size>1){if(c===null){c=m(),i.current.zoom=s.current.zoom;return}const z=m();s.current.zoom*=c/z,c=z,ie(e,s.current.zoom),i.current.zoom=null,ee(e);return}let D=t.shift;!D&&S.shiftKey?D=1:!D&&S.altKey?D=2:!D&&S.ctrKey?D=3:!D&&S.metaKey&&(D=4);const H=tn([B*F[0],B*F[1]],D,t,s.current.matrix,e.dimensions,e.space.metric);if(t.auto){const z=performance.now()-u;u=performance.now(),v.push([F[0]*1.5/z,F[1]*1.5/z]),v.length>Nt&&v.shift();const _=v.reduce((M,b)=>[M[0]+b[0],M[1]+b[1]],[0,0]);for(let M=0;M<2;M++)for(let b=0;b<H[M].length;b++)i.current.speed[H[M][b]]=_[M]/v.length;o.current||(o.current=requestAnimationFrame(d))}l()},E=S=>{s.current.pointers.clear(),t.auto&&(v.length=0,u=null,i.current.pause.delete(t.shift*2),i.current.pause.delete(t.shift*2+1)),c=null};document.addEventListener("pointerdown",p),document.addEventListener("pointermove",x),document.addEventListener("pointerup",E);const T=i.current;return()=>{document.removeEventListener("pointerdown",p),document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",E),o.current&&(cancelAnimationFrame(o.current),o.current=null,T.t=null)}},[t,e.dimensions,e.space,e.camera,d,l]),g.useEffect(()=>{const c=u=>{u.target===document.body&&St(u,t,s.current.matrix,e.dimensions,e.space.metric,n)&&(l(),ee(e))};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[l,t,e.space,e.dimensions,n]),g.useEffect(()=>{const c=u=>{if(u.target.tagName!=="CANVAS")return;const v=i.current.zoom===null?s.current.zoom:i.current.zoom;i.current.zoom=v*(u.deltaY<0?Q:1/Q),o.current||(o.current=requestAnimationFrame(d))};return document.addEventListener("wheel",c),()=>{document.removeEventListener("wheel",c)}},[d]),g.useEffect(()=>{const c=u=>{if(u.button!==0||u.target.tagName!=="CANVAS")return;const v=i.current.zoom===null?s.current.zoom:i.current.zoom,m=v<.5?5:v<2?.25:1;i.current.zoom=m,o.current||(o.current=requestAnimationFrame(d))};return document.addEventListener("dblclick",c),()=>{document.removeEventListener("dblclick",c)}},[d])};function jt({runtime:e,rotations:t,updateRotations:n,updateParams:a}){return It(e,t,n,a),null}const yt=(e,t)=>{g.useEffect(()=>{t(n=>(ie(n,n.zoom),n))},[e.zoom,t]),g.useEffect(()=>{t(n=>(ie(n),n))},[e.fov3,e.camera,t]),g.useEffect(()=>{t(n=>(n.meshes.updateGeometries(n),n))},[e.space,e.curve,e.segments,e.detail,t]),g.useEffect(()=>{t(n=>(n.meshes.changeArity(n.dimensions),n))},[e.dimensions,t]),g.useEffect(()=>{t(n=>(Et(n),n))},[e.ambiance,e.msaa,e.msaaSamples,t]),g.useEffect(()=>{t(n=>(en(n),n))},[e.ambiance,e.msaa,e.msaaSamples,t]),g.useEffect(()=>{t(n=>(he(n,"vertex"),he(n,"edge"),he(n,"face"),n))},[e.showVertices,e.showEdges,e.showFaces,t]),g.useEffect(()=>{t(n=>(n.meshes.recompilePrograms(n),n))},[e.ambiance,e.curve,e.dimensions,e.easing,e.detail,e.segments,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{t(n=>(n.meshes.updateUniforms(n),n))},[e.ambiance,e.curve,e.dimensions,e.easing,e.edgeThickness,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.detail,e.matrix,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.segments,e.vertexThickness,e.space,t]),g.useEffect(()=>{const n=new ResizeObserver(()=>{ee(e)});return n.observe(e.gl.canvas,{box:"content-box"}),()=>n.disconnect()},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.easing,e.edge,e.edgeThickness,e.error,e.face,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.grouper,e.iteration,e.detail,e.matrix,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.ranges,e.segments,e.showEdges,e.showFaces,e.showVertices,e.space,e.stellation,e.subsampling,e.vertexThickness,e.vertex,e.visit,e.zoom])};function Ot({runtime:e,setRuntime:t}){return yt(e,t),null}const Tt=e=>{const t=e.toUpperCase();return e===t?e.toLowerCase():t},k=(e,t)=>{let n=t,a=0;for(;e.quotientMap[n];)a++,n=e.quotientMap[n];return a>1&&(e.quotientMap[t]=n),n},rn=(e,t,n)=>{const a=t,o=[[t,n]];for(;o.length>0;)if([t,n]=o.pop(),t=k(e,t),n=k(e,n),t!==n){e.quotientMap[n]=t,e.seen.has(n)&&!e.seen.has(t)&&e.seen.add(t);const i=e.cosets.get(t),s=e.cosets.get(n);e.cosets.delete(n);for(const[l,f]of s)i.has(l)?o.push([i.get(l),f]):i.set(l,f)}return k(e,a)},ze=(e,t,n,a)=>{t=k(e,t);const o=e.cosets.get(t);o.has(n)?rn(e,o.get(n),a):o.set(n,a)},ce=(e,t,n,a)=>{t=k(e,t);let o;const i=e.cosets.get(t);return i.has(n)?(o=k(e,i.get(n)),a!==void 0&&o!==a&&rn(e,a,o)):(a?o=a:(o=e.nextVertex++,e.cosets.set(o,new Map),e.unvisited.push(o)),ze(e,t,n,o),ze(e,o,Tt(n),t)),o},ke=function(e,t,n){let a=n;for(let o=t.length-1;o>0;o--)a=ce(e,a,t[o]);ce(e,a,t[0],n)},At=function(e){if(!e.words){const t=k(e,1);e.words=new Map,e.words.set(t,""),e.currentWords=new Map,e.currentWords.set(t,""),e.lastWord="",e.lastCoset=t,e.remaining=[t],e.rootVertex&&e.rootNormals&&e.metric&&(e.vertices=new Map,e.vertices.set(1,e.rootVertex))}for(;e.remaining.length>0;){const t=e.remaining[0],n=k(e,t),a=e.cosets.get(n);if(a.size<e.gens.length*2)return;for(let o=0;o<e.gens.length;o++){const i=e.gens[o],s=k(e,a.get(i));if(!e.words.has(s)&&e.cosets.get(s).size<e.gens.length*2)return}e.remaining.shift();for(let o=0;o<e.gens.length;o++){const i=e.gens[o],s=k(e,a.get(i));if(e.words.has(s))continue;const l=i+e.words.get(n);if(e.words.set(s,l),e.currentWords.set(s,l),e.lastCoset=s,e.lastWord=l,e.remaining.push(s),e.vertices){const f=gn(e.vertices.get(n),e.rootNormals[o],e.metric);e.vertices.set(s,f)}}}},Rt=e=>{if(!e.cosets){e.unvisited=[1],e.cosets=new Map([[1,new Map]]),e.nextVertex=2,e.seen=new Set,e.quotientMap={};for(let t=0;t<e.subgens.length;t++)ke(e,e.subgens[t],1)}e.limit=e.limit||1e3,e.done=!1;for(let t=0;t<e.limit;t++){let n=null;for(;e.unvisited.length>0;){const a=k(e,e.unvisited.shift());if(!e.seen.has(a)){e.seen.add(a),n=a;break}}if(n===null){e.done=!0;break}for(let a=0;a<e.gens.length;a++)ce(e,n,e.gens[a].toUpperCase()),ce(e,n,e.gens[a]);for(let a=0;a<e.rels.length;a++)ke(e,e.rels[a],n)}},je=e=>(Rt(e),At(e),e),Pe=(e,t=[])=>e.map((n,a)=>t.includes(a)?"":K(a)).join(""),_e=(e,t=[])=>e.map((n,a)=>t.includes(a)||n?"":K(a)).join(""),Ft=e=>{if(e.dimensions===0)return!0;const t=new Set;for(let n=0;n<e.lastWord.length;n++){const a=e.lastWord[n];if(!(!a||t.has(a))&&(t.add(a),t.size===e.dimensions))return!0}return!1},we=(e,t,n,a,o=null,i=null,s=new Map)=>{o=o||a.map((l,f)=>Te(l)?null:f).filter(l=>l!==null),i=i||{new:!0,dimensions:e,coxeter:t,stellation:n,mirrors:a,skips:o,gens:Pe(a,o),subgens:_e(a,o),rels:Ae(e,t,n,o),quotient:"",space:[""],snub:a.some(ae),children:[]};for(let l=0;l<e;l++){if(o.includes(l))continue;const f=[...o,l],d=U(e).filter(p=>!f.includes(p)),c=f.sort().join("-");let u=!1;if(!s.has(c)){u=!0;const p={key:c,dimensions:e-f.length,coxeter:Re(t,f),stellation:Re(n,f),mirrors:Fe(a,f),skips:f,gens:Pe(a,f),subgens:_e(a,f),rels:Ae(e,t,n,f),snub:Fe(a,f).some(ae)};je(p),s.set(c,p)}const v=s.get(c),m=Array.from(v.words.values());if(Ft(v)){let p="";if(v.snub&&m.length<=v.dimensions)console.warn("TODO"),m.push(...f.map(K));else for(let E=0;E<e;E++)(!f.includes(E)||Te(a[E])&&!a[E]&&!d.some(T=>t[T][E]!==2))&&(p+=K(E));let x={new:u,...v,quotient:p,space:m,children:[]};v.dimensions>0&&(x=we(e,t,n,a,f,x,s)),i.children.push(x)}}if(i.children.length===0){console.info("No leaf found, digging deeper",o);for(let l=0;l<e;l++){if(o.includes(l))continue;const f=[...o,l];i.children.push(we(e,t,n,a,f,{children:[]},s))}}return i};function Dt(){return new Worker(""+new URL("shape.worker-361059ad.js",import.meta.url).href)}const Ct=(e,t)=>{const[n,a]=g.useState(()=>new Dt);g.useEffect(()=>{t(o=>{const i=xn(o.coxeter,o.stellation),s=bn(i),{vertices:l,normals:f}=En(s,o.centered),d=$e(wn(l,o.mirrors.map(u=>Nn(u))),s.metric);s.rootVertex=d,s.rootVertices=l,s.rootNormals=f;const c=we(o.dimensions,o.coxeter,o.stellation,o.mirrors);return{...o,space:s,shape:c,error:null}})},[e.dimensions,e.coxeter,e.mirrors,e.stellation,e.centered,e.grouper,t]),g.useEffect(()=>{t(o=>({...o,iteration:0,paused:!1,limit:1e3}))},[e.shape,e.ambiance,t]),g.useEffect(()=>{t(o=>!o.shape||o.iteration<0?o:(n.postMessage({space:o.space,shape:o.shape,first:o.iteration===0,ambiance:o.ambiance}),{...o,processing:!0}))},[e.iteration,e.limit,e.shape,n,e.space,t]),g.useEffect(()=>{t(i=>({...i,iteration:i.paused?i.iteration:i.iteration+1}));const o=({data:i})=>{i.error?console.error(i.error):t(s=>{for(let l=0;l<i.infos.length;l++){const f=s.meshes[s.meshes.meshes[l]],d=i.infos[l];f.count=d.start+d.size,f.instances<f.count&&f.extendAttributes(f.count),f.attributes.color.update(i.data[l][0],d.start,d.size);for(let c=0;c<f.varying.length;c++){const u=f.varying[c];f.attributes[u].update(i.data[l][c+1],d.start,d.size)}}return{...s,processing:!i.visit.done,iteration:s.paused||i.visit.done?s.iteration:s.iteration+1,visit:i.visit}})};return n.addEventListener("message",o),()=>{n.removeEventListener("message",o)}},[n,e.paused,t]),g.useEffect(()=>{t(o=>{const i={...o};return o.visit.top>o.limit&&(i.paused=!0),i})},[e.visit,e.limit,t])};function Mt({runtime:e,setRuntime:t}){return Ct(e,t),null}function zt({runtime:e,setRuntime:t,rotations:n,updateRotations:a,updateParams:o}){var s,l,f,d;window.rt=e,window.ro=n;const i=g.useCallback(c=>u=>{t(v=>({...v,error:{[c]:u.message}}))},[t]);return g.useEffect(()=>()=>{if(e.space&&e.space.curvature!==null){const c=J(e.dimensions);c._reset=!0,o({matrix:c})}},[(s=e.space)==null?void 0:s.curvature]),r.jsxs(r.Fragment,{children:[r.jsx(ue,{error:(l=e.error)==null?void 0:l.process,onError:i("process"),children:r.jsx(Mt,{runtime:e,setRuntime:t})}),e.space?r.jsxs(r.Fragment,{children:[r.jsx(ue,{error:(f=e.error)==null?void 0:f.render,onError:i("render"),children:r.jsx(Ot,{runtime:e,setRuntime:t})}),r.jsx(ue,{error:(d=e.error)==null?void 0:d.interact,onError:i("interact"),children:r.jsx(jt,{runtime:e,rotations:n,updateRotations:a,updateParams:o})})]}):null]})}const kt="modulepreload",Pt=function(e,t){return new URL(e,t).href},Le={},_t=function(t,n,a){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Pt(i,a),i in Le)return;Le[i]=!0;const s=i.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!a)for(let c=o.length-1;c>=0;c--){const u=o[c];if(u.href===i&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const d=document.createElement("link");if(d.rel=s?"stylesheet":kt,s||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),s)return new Promise((c,u)=>{d.addEventListener("load",c),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})},Lt=r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",strokeWidth:"3",children:[r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m31.376 13.781l-2.673-7.659c-1.554-4.453-7.852-4.453-9.406 0l-4.56 13.067c-.922 2.644 1.04 5.408 3.841 5.408H24"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m15.993 14.24l-8.11.175c-4.716.102-6.663 6.092-2.907 8.946l11.018 8.374c2.23 1.695 5.465.682 6.33-1.982L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m11.675 29.012l-2.34 7.767c-1.36 4.517 3.736 8.219 7.611 5.53l11.369-7.892c2.3-1.597 2.337-4.987.071-6.633L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m24.39 37.683l6.664 4.625c3.875 2.69 8.971-1.012 7.61-5.53l-3.992-13.25c-.807-2.681-4.02-3.764-6.286-2.118L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m36.566 28.27l6.458-4.908c3.756-2.855 1.81-8.845-2.907-8.947l-13.836-.298c-2.8-.06-4.822 2.66-3.956 5.324L24 24.597"})]}),Ut=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("g",{id:"feTarget0",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:r.jsx("g",{id:"feTarget1",fill:"currentColor",fillRule:"nonzero",children:r.jsx("path",{id:"feTarget2",d:"M19.938 13A8.004 8.004 0 0 1 13 19.938V22h-2v-2.062A8.004 8.004 0 0 1 4.062 13H2v-2h2.062A8.004 8.004 0 0 1 11 4.062V2h2v2.062A8.004 8.004 0 0 1 19.938 11H22v2h-2.062ZM12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"})})})}),Bt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"})}),Ht=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20.777a8.942 8.942 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a8.961 8.961 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A8.954 8.954 0 0 1 10 3.223"})}),Vt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",children:r.jsxs("g",{fill:"none",stroke:"currentColor",children:[r.jsx("path",{strokeLinecap:"round",d:"M13.326 8.5a6.5 6.5 0 1 1-.558-4.5"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 2v2.5H11"})]})}),Gt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:r.jsx("path",{fill:"currentColor",d:"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"})}),qt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 6v1h.75A3.25 3.25 0 0 1 20 10.25v7.5A3.25 3.25 0 0 1 16.75 21h-9.5A3.25 3.25 0 0 1 4 17.75v-7.5A3.25 3.25 0 0 1 7.25 7H8V6a4 4 0 1 1 8 0ZM9.5 6v1h5V6a2.5 2.5 0 0 0-5 0Zm2.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"})}),$t=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 5a2.5 2.5 0 0 1 5 0v.25a.75.75 0 0 0 1.5 0V5a4 4 0 0 0-8 0v2H7.25A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21h9.5A3.25 3.25 0 0 0 20 17.75v-7.5A3.25 3.25 0 0 0 16.75 7H16V5Zm-4 10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"})}),Jt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})}),Wt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),Kt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),Xt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),Yt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),Zt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),Qt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M14 19V5h4v14zm-8 0V5h4v14z"})}),er=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"})});function nr({allowNull:e,name:t,value:n,onChange:a,...o}){const i=g.useCallback(l=>{let{name:f,checked:d}=l.target,c;e?c=n===!1?!0:n?null:!1:c=d,a(f,c)},[e,a,n]),s=g.useRef(null);return g.useLayoutEffect(()=>{e&&s.current&&(n===null?s.current.indeterminate=!0:s.current.indeterminate=!1)},[n,e]),r.jsx("input",{type:"checkbox",ref:s,name:t,checked:n||!1,onChange:i})}function I({type:e,subtype:t,level:n,dimensions:a}){return r.jsxs("span",{className:"space",children:[e===null||e==="indefinite"?"𝕏":e==="affine"?"𝔼":e==="finite"?"𝕊":"ℍ",a?r.jsx("sup",{children:a-1}):null,e==="hyperbolic"?r.jsxs("sub",{children:[{compact:" ",paracompact:"*",lorentzian:"L",superhyperbolic:"**"}[t],n]}):null]})}const tr=(...e)=>{if(Array.isArray(e[0]))return{coxeter:e,dimensions:e.length,extended:!0};const t=e.length+1;return{coxeter:new Array(t).fill().map((a,o)=>new Array(t).fill().map((i,s)=>o===s?1:o===s+1||s===o+1?e[P(o,s)]:2)),dimensions:t}},rr=(...e)=>{const t=e.length+1;return{stellation:new Array(t).fill().map((a,o)=>new Array(t).fill().map((i,s)=>o===s?1:o===s+1||s===o+1?e[P(o,s)]:1))}},h=(e,t,n,a)=>{const o=tr(...e),{dimensions:i}=o,s={...Ie,...o,detail:i>4?"medium":"high",showVertices:i<=3,showFaces:i<=4,curve:i>3,grouper:"toddcoxeter",ambiance:"colorful",segments:32,matrix:J(i),zoom:i<=3?2:i>4?3:5,centered:!0,...Object.fromEntries(U(3,i+1).map(l=>[`projection${l}`,be(l,i)])),...a||{}};return t?s.mirrors=t:s.mirrors=new Array(i).fill().map((l,f)=>f===0?1:0),n?s.stellation=rr(...n).stellation:s.stellation=new Array(i).fill().map((l,f)=>new Array(i).fill(1)),s},A=e=>({...e,subforms:Object.entries(or(e.params.dimensions)).map(([t,n])=>({name:`${t} ${e.name}`,params:{...e.params,mirrors:n}}))}),N=(e,t,n,a)=>({...h(e,t,n),ambiance:"plain",showVertices:!1,curve:!0,detail:"medium",zoom:1,segments:32,...a}),O=(e,t,n,a)=>({...h(e,t,n),ambiance:"neon",showFaces:!1,showVertices:!1,grouper:"toddcoxeter",centered:!1,edgeThickness:15,segments:16,zoom:2,...a}),w=(e,t,n,a)=>{const o=h(e,t,n),i=o.matrix.length;return{...o,ambiance:"neon",detail:"medium",showFaces:!1,showVertices:!1,curve:!0,grouper:"toddcoxeter",centered:!1,edgeThickness:i>4?15:25,segments:16,zoom:1.5,...a}},or=e=>{if(e===4)return{Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1]};if(e===5)return{Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1]};if(e===6)return{Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(e===7)return{Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(e===8)return{Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(e===9)return{Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},q=[{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite",dimensions:4})," Tesseract"]}),params:h([4,3,3],[1,0,0,0],null,{showVertices:!0,vertexThickness:40,showFaces:!0,curve:!0,ambiance:"neon",zoom:4.2,segments:64})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",dimensions:3})," 7-3-2 tiling"]}),params:N([7,3],[1,0,0],null,{showVertices:!1,showFaces:!0,curve:!0,ambiance:"neon"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"paracompact",dimensions:3})," Ideal triangles"]}),params:N([[1,0,0],[0,1,0],[0,0,1]],[1,1,1],null,{grouper:"fundamental",showVertices:!1,showFaces:!0,curve:!0,segments:64,easing:"quintic",ambiance:"neon",centered:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",dimensions:4})," Inverted honeycomb"]}),params:w([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{projection4:"inverted",ambiance:"disco",zoom:3,segments:32})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite",dimensions:8})," E6 (1",r.jsx("sub",{children:"22"}),")"]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0],null,{vertexThickness:25,edgeThickness:15,ambiance:"colorful",showVertices:!0,projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite",dimensions:8})," E8 (4",r.jsx("sub",{children:"21"}),")"]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1],null,{vertexThickness:20,edgeThickness:6,curve:!1,ambiance:"neon",showVertices:!0,detail:"low",projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",projection7:"orthographic",projection8:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal tetrahedron"]}),params:N([3,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,centered:!0,segments:64,detail:"high",easing:"quartic",ambiance:"pure"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Horoball"]}),params:N([6,3,4],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,centered:!1,ambiance:"colorful"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",dimensions:4})," 5-3-4 honeycomb"]}),params:w([5,3,4],[1,0,0,0],null,{zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"lorentzian",level:2,dimensions:4})," ","7-3-3 paracompact honeycomb"]}),params:w([7,3,3],[1,0,0,0],null,{zoom:1.5,showFaces:!0,showVertices:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Pentahedron"]}),params:N([5,3,6],[1,0,0,""],null,{showVertices:!1,showFaces:!0,curve:!0,centered:!0,detail:"high",segments:32,easing:"quartic",ambiance:"pure",zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite",dimensions:4})," Flat Torus"]}),params:h([32,2,32],[1,0,0,1],null,{showVertices:!1,showFaces:!1,curve:!0,ambiance:"neon",zoom:3,edgeThickness:10})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"affine",dimensions:5})," Tesseract stack"]}),params:h([[1,2,2,2,0],[2,1,2,2,2],[2,2,1,2,2],[2,2,2,1,2],[0,2,2,2,1]],[1,1,1,1,0],null,{showVertices:!1,showFaces:!0,ambiance:"neon",edgeThickness:20,projection4:"sterographic"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"superhyperbolic",dimensions:4})," ","Ultrahyperbolic surface (Anti-de Sitter Ads3)"]}),params:h([-1,2,-1],[1,0,0,1],null,{showVertices:!1,showFaces:!1,curve:!0,ambiance:"neon",centered:!1,edgeThickness:15,zoom:1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"superhyperbolic",dimensions:5})," ","Ultrahyperbolic honeycomb (Anti-de Sitter Ads4)"]}),params:h([-1,3,3,-1],[1,0,0,0,1],null,{showVertices:!1,showFaces:!1,curve:!0,ambiance:"neon",centered:!1,zoom:2})},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite"})," Spherical space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Tetrahedron",params:h([3,3]),subforms:[{name:"Truncated Tetrahedron",params:h([3,3],[1,1,0])}]},{name:"Cube",params:h([4,3]),subforms:[{name:"Cuboctahedron",params:h([4,3],[0,1,0])},{name:"Truncated Cube",params:h([4,3],[1,1,0])},{name:"Rhombicuboctahedron",params:h([4,3],[1,0,1])},{name:"Truncated Octahedron",params:h([3,4],[1,1,0])},{name:"Truncated Cuboctahedron",params:h([4,3],[1,1,1])},{name:"Octahedron",params:h([3,4])}]},{name:"Dodecahedron",params:h([5,3]),subforms:[{name:"Icosidodecahedron",params:h([5,3],[0,1,0])},{name:"Truncate Dodecahedron",params:h([5,3],[1,1,0])},{name:"Rhombicosidodecahedron",params:h([5,3],[1,0,1])},{name:"Truncate Icosahedron",params:h([3,5],[1,1,0])},{name:"Truncated Icosidodecahedron",params:h([5,3],[1,1,1])},{name:"Icosahedron",params:h([3,5])}]},{name:"Snub Cube",params:h([4,3],["s","s","s"])},{name:"Snub Dodecahedron",params:h([5,3],["s","s","s"])},{name:"Great Dodecahedron",params:h([5,5],[1,0,0],[1,2])},{name:"Great Icosahedron",params:h([3,5],[1,0,0],[1,2])},{name:"Small Stellated Dodecahedron",params:h([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:h([5,3],[1,0,0],[2,1])},{name:"Stellated Octahedron",params:h([2,2],["ß","ß","ß"])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite",dimensions:4})," Polychora"]})},A({name:"5-cell",params:h([3,3,3])}),A({name:"8-cell",params:h([4,3,3])}),A({name:"16-cell",params:h([3,3,4])}),A({name:"24-cell",params:h([3,4,3])}),A({name:"120-cell",params:h([5,3,3])}),A({name:"600-cell",params:h([3,3,5])}),{name:"Snub 24-cell",params:h([3,4,3],["s","s",0,0])},{name:"Icosahedral 120-cell",params:h([3,5,5],[1,0,0,0],[1,1,2],{curve:!1}),subforms:[{name:"Small stellated 120-cell",params:h([3,5,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Great 120-cell",params:h([5,5,5],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Grand 120-cell",params:h([5,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{name:"Great stellated 120-cell",params:h([5,3,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Grand stellated 120-cell",params:h([5,5,5],[1,0,0,0],[2,1,2],{curve:!1})},{name:"Great grand 120-cell",params:h([5,5,3],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Great icosahedral 120-cell",params:h([5,5,3],[0,0,0,1],[1,2,1],{curve:!1})},{name:"Great grand stellated 120-cell",params:h([5,3,3],[1,0,0,0],[2,1,1],{curve:!1})}]},{name:"Grand 600-cell",params:h([3,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite",dimensions:5})," Polytera"]})},A({name:"5-simplex",params:h([3,3,3,3])}),A({name:"5-cube",params:h([4,3,3,3])}),A({name:"5-orthoplex",params:h([3,3,3,4])}),A({name:"5-demicube",params:h([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]])}),{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite",dimensions:6})," Polypeta"]})},A({name:"6-simplex",params:h([3,3,3,3,3])}),A({name:"6-cube",params:h([4,3,3,3,3])}),A({name:"6-orthoplex",params:h([3,3,3,3,4])}),A({name:"6-demicube",params:h([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"22"})]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite",dimensions:7})," Polyexa"]})},A({name:"7-simplex",params:h([3,3,3,3,3,3])}),A({name:"7-cube",params:h([4,3,3,3,3,3])}),A({name:"7-orthoplex",params:h([3,3,3,3,3,4])}),A({name:"7-demicube",params:h([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"31"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"32"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite",dimensions:8})," Polyzetta"]})},A({name:"8-simplex",params:h([3,3,3,3,3,3,3])}),A({name:"8-cube",params:h([4,3,3,3,3,3,3])}),A({name:"8-orthoplex",params:h([3,3,3,3,3,3,4])}),A({name:"8-demicube",params:h([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"42"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"41"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["4",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"finite",dimensions:9}),"Polyyotta"]})},A({name:"9-simplex",params:h([3,3,3,3,3,3,3,3])}),A({name:"9-cube",params:h([4,3,3,3,3,3,3,3])}),A({name:"9-orthoplex",params:h([3,3,3,3,3,3,3,4])}),A({name:"9-demicube",params:h([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]])}),{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"affine"})," Euclidean space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:h([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:h([4,4],[1,0,0])},{name:"Hexagonal",params:h([6,3],[1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:O([4,3,4],[1,0,0,0])},{name:"Octet",params:O([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter cubic",params:O([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:O([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:O([3,3,4,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"24-cellic",params:O([3,4,3,3],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"4-simpletic",params:O([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter tesseractic",params:O([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0],null,{grouper:"toddcoxeter"})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"affine",dimensions:6})," 5-Honeycombs"]})},{name:"5-simplex",params:O([[1,3,2,2,2,3],[3,1,3,2,2,2],[2,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[3,2,2,2,3,1]],[1,0,0,0,0,0])},{name:"5-cubic",params:O([4,3,3,3,4],[1,0,0,0,0,0])},{name:"5-demicubic",params:O([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,4],[2,2,2,2,4,1]],[1,0,0,0,0,0])},{name:"Quarter 5-cubic",params:O([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,3],[2,2,2,3,1,2],[2,2,2,3,2,1]],[1,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"affine",dimensions:7})," 6-Honeycombs"]})},{name:"6-simplex",params:O([[1,3,2,2,2,2,3],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[3,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:"6-cubic",params:O([4,3,3,3,3,4],[1,0,0,0,0,0,0])},{name:"6-demicubic",params:O([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,4],[2,2,2,2,2,4,1]],[1,0,0,0,0,0,0])},{name:"Quarter 6-cubic",params:O([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,3],[2,2,2,2,3,1,2],[2,2,2,2,3,2,1]],[1,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"22"})]}),params:O([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,3,2],[2,2,3,1,3,2,2],[2,2,2,3,1,2,2],[2,2,3,2,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"affine",dimensions:8})," 7-Honeycombs"]})},{name:"7-simplex",params:O([[1,3,2,2,2,2,2,3],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[3,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:"7-cubic",params:O([4,3,3,3,3,3,4],[1,0,0,0,0,0,0,0])},{name:"7-demicubic",params:O([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,4],[2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0])},{name:"Quarter 7-cubic",params:O([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,3,3,1,3,2,2],[2,2,2,2,3,1,3,3],[2,2,2,2,2,3,1,2],[2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"33"})]}),params:O([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,1,0,0,0])},{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"31"})]}),params:O([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"affine",dimensions:9})," 8-Honeycombs"]})},{name:"8-simplex",params:O([[1,3,2,2,2,2,2,2,3],[3,1,3,2,2,2,2,2,2],[2,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[3,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:"8-cubic",params:O([4,3,3,3,3,3,3,4],[1,0,0,0,0,0,0,0,0])},{name:"8-demicubic",params:O([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,4],[2,2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0,0])},{name:"Quarter 8-cubic",params:O([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,3],[2,2,2,2,2,2,3,1,2],[2,2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"52"})]}),params:O([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"51"})]}),params:O([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["5",r.jsx("sub",{children:"21"})]}),params:O([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,0,1])},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic"})," Hyperbolic space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",dimensions:3})," Tilings"]})},{name:"Order-7 triangular",params:N([3,7],[1,0,0])},{name:"Order-8 triangular",params:N([3,8],[1,0,0])},{name:"Infinite Order triangular",params:N([3,0],[1,0,0],null,{easing:"quintic",detail:"high"})},{name:"Order-5 square",params:N([4,5],[1,0,0])},{name:"Order-6 square",params:N([4,6],[1,0,0])},{name:"Order-7 square",params:N([4,7],[1,0,0])},{name:"Order-8 square",params:N([4,8],[1,0,0])},{name:"Infinite Order square",params:N([4,0],[1,0,0])},{name:"Order-4 pentagonal",params:N([5,4],[1,0,0])},{name:"Order-5 pentagonal",params:N([5,5],[1,0,0])},{name:"Order-6 pentagonal",params:N([5,6],[1,0,0])},{name:"Order-7 pentagonal",params:N([5,7],[1,0,0])},{name:"Order-8 pentagonal",params:N([5,8],[1,0,0])},{name:"Infinite Order pentagonal",params:N([5,0],[1,0,0])},{name:"Order-4 hexagonal",params:N([6,4],[1,0,0])},{name:"Order-5 hexagonal",params:N([6,5],[1,0,0])},{name:"Order-6 hexagonal",params:N([6,6],[1,0,0])},{name:"Order-7 hexagonal",params:N([6,7],[1,0,0])},{name:"Order-8 hexagonal",params:N([6,8],[1,0,0])},{name:"Infinite Order hexagonal",params:N([6,0],[1,0,0])},{name:"Order-3 heptagonal",params:N([7,3],[1,0,0])},{name:"Order-4 heptagonal",params:N([7,4],[1,0,0])},{name:"Order-5 heptagonal",params:N([7,5],[1,0,0])},{name:"Order-6 heptagonal",params:N([7,6],[1,0,0])},{name:"Order-7 heptagonal",params:N([7,7],[1,0,0])},{name:"Order-8 heptagonal",params:N([7,8],[1,0,0])},{name:"Infinite Order heptagonal",params:N([7,0],[1,0,0])},{name:"Order-3 octagonal",params:N([8,3],[1,0,0])},{name:"Order-4 octagonal",params:N([8,4],[1,0,0])},{name:"Order-5 octagonal",params:N([8,5],[1,0,0])},{name:"Order-6 octagonal",params:N([8,6],[1,0,0])},{name:"Order-7 octagonal",params:N([8,7],[1,0,0])},{name:"Order-8 octagonal",params:N([8,8],[1,0,0])},{name:"Infinite Order octagonal",params:N([8,0],[1,0,0])},{name:"Order-3 apeirogonal",params:N([0,3],[1,0,0])},{name:"Order-4 apeirogonal",params:N([0,4],[1,0,0])},{name:"Order-5 apeirogonal",params:N([0,5],[1,0,0])},{name:"Order-6 apeirogonal",params:N([0,6],[1,0,0])},{name:"Order-7 apeirogonal",params:N([0,7],[1,0,0])},{name:"Order-8 apeirogonal",params:N([0,8],[1,0,0])},{name:"Infinite Order apeirogonal",params:N([0,0],[1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"compact",dimensions:4})," Compact Hyperbolic Honeycombs"]})},{name:"Icosahedral",params:w([3,5,3],[1,0,0,0])},{name:"Order-4 dodecahedral",params:w([5,3,4],[1,0,0,0])},{name:"Order-5 dodecahedral",params:w([5,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 cubic",params:w([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral cubic",params:w([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral dodecahedral",params:w([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic octahedral",params:w([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Dodcahedral",params:w([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Icosahedral",params:w([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Paracompact Hyperbolic Honeycombs"]})},{name:"Triangular",params:w([3,6,3],[1,0,0,0],null,{grouper:"toddcoxeter",easing:"quintic",segments:32})},{name:"Hexagonal",params:w([6,3,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 tetrahedral",params:w([3,3,6],[1,0,0,0],null,{grouper:"toddcoxeter",easing:"quintic",segments:32})},{name:"Alternated Order-6 cubic",params:w([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],null,{grouper:"toddcoxeter",easing:"quintic",segments:32})},{name:"Order-5 hexagonal",params:w([6,3,5],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 hexagonal",params:w([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-6 hexagonal",params:w([6,3,6],[0,0,0,1],null,{grouper:"toddcoxeter",easing:"quintic",segments:32})},{name:"Square",params:w([4,4,3],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated square",params:w([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Order-4 square",params:w([4,4,4],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Tetrahedral square",params:w([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Cubic square",params:w([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Quarter order square",params:w([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter",easing:"quintic",segments:32})},{name:"Tetrahedral Hexagonal",params:w([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Octahedral Hexagonal",params:w([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Icosahedral Hexagonal",params:w([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal Triangular",params:w([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[0,0,0,1],null,{grouper:"toddcoxeter",easing:"quintic",segments:32})},{name:"Alternated Hexagonal",params:w([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-4 Hexagonal",params:w([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Alternated Order-5 Hexagonal",params:w([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{grouper:"toddcoxeter"})},{name:"Runcic Order-6 Hexagonal",params:w([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],null,{grouper:"toddcoxeter"})},{name:"Quarter Order-4 hexagonal",params:w([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],null,{grouper:"toddcoxeter"})},{name:"Hexagonal",params:w([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],null,{grouper:"toddcoxeter"})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"lorentzian",level:2,dimensions:4})," ","Level-2 Lorentzian Hyperbolic Honeycombs"]})},{name:"3-3-7",params:w([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter",segments:64})},{name:"3-4-7",params:w([3,3,7],[1,0,0,0],null,{grouper:"toddcoxeter",segments:64})},{name:"3-5-7",params:w([3,5,7],[1,0,0,0],null,{grouper:"toddcoxeter",segments:64})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",dimensions:5})," Compact Hyperbolic 4-Honeycombs"]})},{name:"Order-5 5-cell",params:w([3,3,3,5],[1,0,0,0,0])},{name:"120-cell",params:w([5,3,3,3],[1,0,0,0,0])},{name:"Order-5 tesseratic",params:w([4,3,3,5],[1,0,0,0,0])},{name:"Order-4 120-cell",params:w([4,3,3,5],[1,0,0,0,0])},{name:"Order-5 120-cell",params:w([5,3,3,5],[1,0,0,0,0])},{name:"Small stellated 120-cell",params:w([5,5,3,3],[1,0,0,0,0],[2,1,1,1])},{name:"Pentagrammic-order 600-cell",params:w([3,3,5,5],[1,0,0,0,0],[1,1,1,2])},{name:"Order-5 icosahedral 120-cell",params:w([3,5,5,5],[1,0,0,0,0],[1,1,2,1])},{name:"Great 120-cell",params:w([5,5,5,3],[1,0,0,0,0],[1,2,1,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"paracompact",dimensions:5})," ","Paracompact Hyperbolic 4-Honeycombs"]})},{name:"Order-4 24-cell",params:w([3,4,3,4],[1,0,0,0,0],null,{easing:"quintic",segments:32})},{name:"Cubic honeycomb",params:w([4,3,4,3],[1,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(I,{type:"hyperbolic",subtype:"paracompact",dimensions:6})," ","Paracompact Hyperbolic 5-Honeycombs"]})},{name:"5-orthoplex",params:w([3,3,3,4,3],[1,0,0,0,0,0],null,{easing:"quintic",segments:32})},{name:"24-cell honeycomb",params:w([3,4,3,3,3],[1,0,0,0,0,0])},{name:"16-cell honeycomb",params:w([3,3,4,3,3],[1,0,0,0,0,0],null,{easing:"quintic",segments:32})},{name:"Order-4 24-cell honeycomb",params:w([3,4,3,3,4],[1,0,0,0,0,0],null,{easing:"quintic",segments:32})},{name:"Tesseratic honeycomb",params:w([4,3,3,4,3],[1,0,0,0,0,0],null,{easing:"quintic",segments:32})}],Ne=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(Ne).join("");if(typeof e=="object"&&e)return Ne(e.props.children)},Ue=(e,t)=>typeof e=="string"?Ne(e).toLowerCase().includes(t.toLowerCase()):!1,sr=g.memo(function e({name:t,index:n,params:a,search:o,subforms:i=[],sub:s=!1,onPreset:l}){const[f,d]=g.useState(!0),[c,u]=g.useState(!1);return g.useEffect(()=>{if(!o){d(!0),u(!1);return}if(Ue(t,o)){d(!0);return}if(i.length&&i.some(({name:v})=>Ue(v,o))){d(!0),u(!0);return}d(!1),u(!1)},[t,o,i]),f?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`preset${s?" sub":""}`,onClick:()=>l(a,n),children:[r.jsxs("div",{className:`preset-header preset-name-${i.length?"button":"only"}`,children:[i.length?r.jsx("button",{className:`preset-toggle ${c?"open":"closed"}`,onClick:v=>{v.stopPropagation(),u(!c)},children:c?"-":"+"}):null,r.jsx("span",{className:"preset-name",children:t})]}),r.jsx(Xe,{coxeter:a.coxeter,mirrors:a.mirrors,stellation:a.stellation})]}),c&&i.map((v,m)=>r.jsx(e,{...v,sub:!0,search:o,onPreset:l},m))]}):null});function ar({open:e,onPreset:t,onExportImage:n,closePresets:a}){const[o,i]=g.useState(""),[s,l]=g.useState(""),f=g.useCallback(d=>{l(d.target.value),Sn(i(d.target.value),50)},[]);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`presets-overlay ${e?"shown":"hidden"}`,onClick:a}),r.jsx("div",{className:`presets ${e?"shown":"hidden"}`,children:r.jsxs("div",{className:"presets-modal",children:[r.jsxs("div",{className:"presets-header",children:[r.jsxs("div",{className:"presets-search",children:[r.jsx("input",{type:"text",placeholder:"Search",value:s,onChange:f}),r.jsx("button",{className:"presets-clear",onClick:()=>{i(""),l("")},children:Kt})]}),r.jsxs("div",{className:"presets-actions",children:[r.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:Xt}),r.jsx("button",{className:"presets-action",onClick:n,children:Yt}),r.jsx("button",{className:"presets-action",onClick:a,children:Zt})]})]}),r.jsx("div",{className:"presets-list",children:q.map(({type:d,content:c,name:u,params:v,subforms:m},p)=>r.jsx(g.Fragment,{children:d==="title"?r.jsx("h2",{children:c}):d==="group"?r.jsx("h4",{children:c}):r.jsx(sr,{name:u,index:p,params:v,search:o,subforms:m,onPreset:t})},p))})]})})]})}const Be=g.memo(function({rotations:t,space:n,axis:a}){if(!n)return null;const o=n.gram.length,i=t.shift*2+a;if(i>=t.combinations.length)return null;let s=t.combinations[i];const l=s.some(c=>c<0)?"parabolic":s.some(c=>n.eigens.values[c]<0)?"hyperbolic":s.some(c=>n.eigens.values[c]===0)?"translation":"spheric",f=In.slice(0,o).split(""),d=l==="parabolic"?s.map(c=>f[G(c)]).join("->"):f.filter((c,u)=>!s.includes(u));return r.jsxs("aside",{className:`${a?"y":"x"}-rotation`,children:[d,l==="parabolic"?r.jsx("sup",{children:"∞"}):l==="hyperbolic"?r.jsx("sup",{children:"†"}):l==="translation"?r.jsx("sup",{children:"0"}):""]})}),ir=e=>e<4?[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7 2m12 9H5v2h14z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})})][e]:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9"}),r.jsx("text",{x:"12",y:"13.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",children:e})]});function cr({runtime:e,setRuntime:t,showUI:n,updateParams:a}){const o=g.useCallback(()=>{t(f=>({...f,limit:f.paused&&f.visit.top>f.limit?2*f.limit:f.limit,paused:!f.paused}))},[t]),i=e.visit.every(f=>f.detail.length<2),s=f=>isFinite(f)?f.toLocaleString():"∞";if(n==="empty")return null;const l=n==="full"?"detail":"aggregated";return r.jsxs("aside",{className:"shape",children:[e.processing?r.jsx("div",{className:"buttons",children:e.paused?r.jsx("button",{className:"iterate button",onClick:o,title:"Resume enumeration",children:er}):r.jsx("button",{className:"iterate button",onClick:o,title:"Pause enumeration",children:Qt})}):null,r.jsx("div",{className:`shape-info${e.processing&&!e.paused?" shape-processing":""}`,children:[...e.visit].reverse().filter(f=>f).map(f=>r.jsxs(g.Fragment,{children:[r.jsxs("div",{className:"shape-count",children:[ir(f.dimensions),f.done||f.processing===void 0?null:`${f.processing} / `,s(f.count)]}),r.jsx("div",{className:`shape-detail${f.dimensions>0&&["advanced","full"].includes(n)?" shape-detail-split":""}`,children:["advanced","full"].includes(n)&&f.dimensions>0?f[l].map(({count:d,coxeter:c,stellation:u,mirrors:v,done:m,key:p},x)=>r.jsxs("div",{className:"shape-detail-line",title:p,children:[r.jsx("div",{className:"shape-count",children:i?null:s(d)}),f.dimensions>0?r.jsx("button",{className:"shape-detail-button",disabled:f.dimensions<2,onClick:()=>a({coxeter:c,stellation:u,mirrors:v,dimensions:f.dimensions}),children:r.jsx(Xe,{coxeter:c,stellation:u,mirrors:v})}):null]},p)):null})]},`shape-${f.dimensions}`))})]})}const lr=()=>{try{return localStorage.getItem("showUI")||"simple"}catch(e){return console.error(e),"simple"}};function ur({runtime:e,params:t,rotations:n,setRuntime:a,updateParams:o,updateRotations:i}){const[s,l]=g.useState(lr),[f,d]=g.useState(!1),[c,u]=g.useState(0),v=g.useCallback(()=>{d(!1)},[]),m=g.useCallback(b=>{let{name:y,value:R}=b.target;o({[y]:R})},[o]),p=g.useCallback((b,y)=>{o({[b]:y})},[o]),x=g.useCallback(()=>l(b=>{const y={simple:"advanced",advanced:"full",full:"empty",empty:"simple"}[b];try{localStorage.setItem("showUI",y)}catch(R){console.error(R)}return y}),[]),E=g.useCallback((b,y)=>{o(b,!0),u(y),v()},[o,v]),T=g.useCallback(()=>{const b=J(e.dimensions);b._reset=!0,o({matrix:b,centered:!0})},[o,e.dimensions]),S=g.useCallback(()=>{const b=J(e.dimensions);b._reset=!0,o({matrix:b,centered:!1})},[o,e.dimensions]),j=g.useCallback(()=>{o(Object.fromEntries(U(3,e.dimensions+1).map(b=>[[`projection${b}`,"orthographic"],[`fov${b}`,90]]).flat()))},[o,e.dimensions]),F=g.useCallback(()=>{o(Object.fromEntries(U(3,e.dimensions+1).map(b=>[`projection${b}`,be(b,e.dimensions)])))},[o,e.dimensions]),D=g.useCallback(b=>{i("shift",(n.shift+1)%n.maxShift)},[n.maxShift,n.shift,i]),H=g.useCallback(b=>{i("lock",!n.lock)},[n.lock,i]),z=g.useCallback(b=>{i("auto",n.auto==="free"?"damp":"free")},[n.auto,i]),_=g.useCallback(async()=>{v();const b=window.prompt("Select image resolution","5000x5000");if(!b||!b.includes("x")){console.error("Invalid resolution");return}const[y,R]=b.split("x").map(V=>parseInt(V));if(isNaN(y)||isNaN(R)){console.error("Invalid resolution");return}const ye=await(await _t(()=>import("./export-2d76ac00.js"),["./export-2d76ac00.js","./CoxeterDiagram-05f6fe7f.js"],import.meta.url)).makeBigPng(e,y,R);if(ye){const V=document.createElement("a");document.body.appendChild(V),V.style.display="none";const on=window.URL.createObjectURL(ye);V.href=on,V.download=`${document.title}-${y}x${R}`,V.click()}},[v,e]),M=g.useMemo(()=>({square:U(3,e.dimensions+1).some(b=>t[`projection${b}`]!=="orthographic"),cube:U(3,e.dimensions+1).some(b=>t[`projection${b}`]!==be(b,e.dimensions))}),[t.projection3,t.projection4,t.projection5,t.projection6,t.projection7,t.projection8,t.projection9,e.dimensions]);return g.useEffect(()=>{const b=y=>{if(y.key==="ArrowLeft"&&y.ctrlKey&&c>0){let R=c-1;for(;q[R].type;){if(R<2)return;R--}E(q[R].params,R)}else if(y.key==="ArrowRight"&&y.ctrlKey&&c<q.length-1){let R=c+1;for(;q[R].type;){if(R>q.length-2)return;R++}E(q[R].params,R)}};return window.addEventListener("keydown",b),()=>{window.removeEventListener("keydown",b)}},[E,c]),r.jsxs(r.Fragment,{children:[r.jsx(ar,{open:f,onPreset:E,onExportImage:_,closePresets:v}),r.jsxs("main",{className:e.error?"error ui":"ui",title:e.error,children:[r.jsxs("div",{className:"ui-row ui-row-top",children:[["simple","advanced","full"].includes(s)?r.jsxs("aside",{className:"controls",children:[r.jsxs("button",{className:"rotation-button button",onClick:D,title:"Rotation Mode",children:[r.jsx("div",{className:"rotation",style:{transform:`rotate(${n.shift/n.maxShift*360}deg)`},children:Vt}),r.jsx("sup",{children:n.shift+1}),r.jsx(Be,{rotations:n,space:e.space,axis:0}),r.jsx(Be,{rotations:n,space:e.space,axis:1})]}),r.jsxs("div",{className:"subcontrols",children:[r.jsx("button",{className:"button",onClick:H,children:n.lock?qt:$t}),r.jsx("button",{className:"button anim-view",onClick:z,title:"Animate rotations",children:n.auto==="free"?Bt:n.auto==="damp"?Ht:"?"}),r.jsx("button",{className:"button",onClick:T,title:"Center View",children:Ut}),r.jsx("button",{className:"button",onClick:S,title:"Coxeter View",children:Lt}),["advanced","full"].includes(s)?r.jsxs(r.Fragment,{children:[M.square&&r.jsx("button",{className:"button",onClick:j,title:"Orthographic",children:Wt}),M.cube&&r.jsx("button",{className:"button",onClick:F,title:"Stereographic",children:Jt})]}):null]})]}):null,["simple","advanced","full"].includes(s)&&r.jsx(jn,{dimensions:t.dimensions,coxeter:t.coxeter,mirrors:t.mirrors,stellation:t.stellation,extended:t.extended,onChange:p})]}),r.jsxs("div",{className:"ui-row ui-row-middle",children:[r.jsx(cr,{runtime:e,setRuntime:a,showUI:s,updateParams:o}),["advanced","full"].includes(s)&&r.jsxs("aside",{className:"view",children:[r.jsx(W,{name:"msaaSamples",label:"MSAA",min:0,step:1,max:Ie.msaaSamples,value:t.msaaSamples,toggler:t.msaa,togglerName:"msaa",onChange:p}),r.jsx("div",{className:"projection",children:r.jsxs("label",{className:"number-label",children:[r.jsx("span",{className:"number-label",children:"Detail"}),r.jsx("select",{name:"detail",value:t.detail,onChange:m,children:yn.map(b=>r.jsx("option",{value:b,children:b.replace(/_/g," ").replace(/./,y=>y.toUpperCase())},b))})]})}),s==="full"&&r.jsx(W,{name:"subsampling",label:"subsampling",min:.1,step:.1,value:t.subsampling,onChange:p}),t.dimensions>=3?U(3,t.dimensions+1).map(b=>r.jsxs("div",{className:"projection",children:[s==="full"&&r.jsx(W,{label:`${b}D FOV`,name:`fov${b}`,step:1,value:t[`fov${b}`],onChange:p}),r.jsxs("label",{className:"number",children:[r.jsxs("span",{className:"number-label",children:[b,"D Projection"]}),r.jsx("select",{name:`projection${b}`,value:t[`projection${b}`],onChange:m,children:[...Ge.filter((y,R)=>{var le;return b===3&&e.dimensions===3&&((le=e.space)==null?void 0:le.curvature)<0||R<8})].map(y=>r.jsx("option",{value:y,children:y.replace(/_/g," ").replace(/./,R=>R.toUpperCase())},y))})]})]},b)):null]})]}),r.jsxs("div",{className:"ui-row ui-row-bottom",children:[["simple","advanced","full"].includes(s)?r.jsx("button",{className:"preset-button button",onClick:()=>d(b=>!b),title:"Presets",children:Gt}):null,["advanced","full"].includes(s)&&r.jsxs("aside",{className:"parameters",children:[s==="full"&&r.jsxs("label",{className:"select-label",children:["Grouper",r.jsx("select",{name:"grouper",value:t.grouper,onChange:m,children:On.map(b=>r.jsx("option",{value:b,children:b.replace(/_/g," ").replace(/\b./g,y=>y.toUpperCase())},b))})]}),r.jsx(W,{name:"segments",label:"Segments",min:1,step:1,value:t.segments,toggler:t.curve,togglerName:"curve",onChange:p}),s==="full"&&r.jsxs("label",{className:"select-label",children:["Easing",r.jsx("select",{name:"easing",value:t.easing,onChange:m,children:qe.map(b=>r.jsx("option",{value:b,children:b.replace(/_/g," ").replace(/\b./g,y=>y.toUpperCase())},b))})]}),r.jsx(W,{name:"vertexThickness",label:"Vertices",min:0,step:1,value:t.vertexThickness,toggler:t.showVertices,togglerName:"showVertices",onChange:p}),r.jsx(W,{name:"edgeThickness",label:"Edges",min:0,step:1,value:t.edgeThickness,toggler:t.showEdges,togglerName:"showEdges",onChange:p}),["toddcoxeter","fundamental"].includes(e.grouper)&&r.jsxs("label",{className:"boolean-label",children:["Faces",r.jsx(nr,{name:"showFaces",value:t.showFaces,onChange:p})]}),r.jsxs("label",{className:"select-label",children:["Ambiance",r.jsx("select",{name:"ambiance",value:t.ambiance,onChange:m,children:(s==="full"?Object.keys(X):Object.entries(X).filter(([b,{extended:y}])=>!y||b===t.ambiance).map(([b])=>b)).map(b=>r.jsx("option",{value:b,children:b.replace(/_/g," ").replace(/./,y=>y.toUpperCase())},b))})]})]}),s==="empty"?r.jsx("div",{className:"spacer"}):null,r.jsx("button",{className:`space-button button${e.processing&&!e.paused?" processing":""}${s==="empty"?" empty":""}`,onClick:x,children:r.jsx(I,{...e.space||{},dimensions:e.dimensions})})]})]})]})}function fr({params:e,updateParams:t}){const[n,a]=g.useState({...e,space:null,shape:null,processing:!0,limit:1e3,iteration:0,visit:[],paused:!1,error:null});g.useEffect(()=>{a(l=>{try{return l.gl?l:bt(l)}catch(f){return console.error(f),{...l,error:f.message}}})},[n.gl]);const[o,i]=g.useState({shift:0,maxShift:0,combinations:[],auto:"damp",lock:!1});g.useEffect(()=>{a(l=>({...l,...Ee(e).params}))},[e]),g.useEffect(()=>{n.space&&i(l=>({...l,shift:0,...Tn(e.dimensions,n.space)}))},[e.dimensions,n.space]),g.useEffect(()=>{a(l=>e.grouper===""&&l.grouper.startsWith("auto-")?l:{...l,grouper:e.grouper})},[e.grouper]);const s=g.useCallback((l,f)=>{i(d=>({...d,[l]:f}))},[i]);return n.gl?r.jsxs(r.Fragment,{children:[r.jsx(ur,{runtime:n,params:e,rotations:o,setRuntime:a,updateRotations:s,updateParams:t}),r.jsx(zt,{runtime:n,rotations:o,setRuntime:a,updateRotations:s,updateParams:t})]}):null}const He=(e=null)=>{const{location:t}=window;if(t.hash)try{return JSON.parse(atob(t.hash.slice(1)))}catch(n){console.warn(n),t.hash=""}return e},dr=e=>{window.history.pushState(null,null,"#"+btoa(JSON.stringify(e)))},vr=()=>{const[e,t]=g.useState(He(Ee(Ie).params)),n=g.useCallback(o=>{const i=He();i&&(Object.entries(i).forEach(([s,l])=>{Array.isArray(l)&&De(l,e[s])&&(i[s]=e[s])}),t(i))},[e]),a=g.useCallback((o,i=!1)=>{t(s=>{if(!Object.entries(o).filter(([d,c])=>Array.isArray(c)&&!c._reset?!De(c,s[d]):s[d]!==c).length)return s;const{params:l,badParams:f}=Ee(i?o:{...s,...o},i?[]:Object.keys(o),s);return f.length||dr(l),l})},[]);return g.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),r.jsx(fr,{params:e,updateParams:a})};An.createRoot(document.getElementById("root")).render(r.jsx(vr,{}));window.ToddCoxeter=je;window.bench=()=>{const e=performance.now(),t=je({gens:"abcdef",subgens:"c",rels:["aa","bb","cc","dd","ee","ff","abababab","acac","bcbcbc","adad","bdbd","cdcdcd","aeae","bebe","cece","dedede","afaf","bfbf","cfcf","dfdf","efefef"],limit:1e5});return console.log(performance.now()-e,t.words.size),t.tc};export{Rn as c,ee as r};
