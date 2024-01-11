import{r as g,m as Pe,a as je,p as _e,c as $,i as J,b as q,d as B,e as be,T as Ee,s as oe,P as U,t as Le,f as nn,g as tn,h as Ie,j as V,k as ke,l as Ue,n as te,o as rn,q as an,u as on,v as sn,w as cn,x as ln,y as un,z as r,A as se,B as Ne,C as Be,D as fn,E as dn,N as L,F as ce,G as vn,H as mn,I as pn,J as Oe}from"./CoxeterDiagram-a6109f30.js";var hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const xn="xyzwvutsrqponmlkjihgfedcba",He=["perspective","stereographic","orthographic","klein","inverted","scale","joukowsky","half","upperhalf","halfsphere","band","cross","heart","teardrop","square","ring","sinusoidal","spiral","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],Ve=["linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],bn=["ads","normal","position","uv"],En=["lambert","oren-nayar","minnaert","cel","fresnel","reverse"],Nn=["phong","blinn-phong","cook-torrance","ward-anisotropic"],K=["lowest","lower","low","lowish","medium","highish","high","higher","ultra"],we=["vertex","edge","face"],wn=(e,t)=>{const n=g.useRef({previous:null,anteprevious:null,start:null,stable:!1});g.useEffect(()=>{const i=16.666666666666668;if(e.adaptative){let a=null,c=null,o=[];const l=20,f=10,u=s=>{if(c===null){n.current.start===null&&(n.current.start=s),c=s,a=requestAnimationFrame(u);return}if(o.push(s-c),c=s,o.length>Pe(l,f)&&o.shift(),o.length>=f&&o.slice(-f).reduce((p,m)=>p+m,0)/f>(n.current.stable?2.01:1.51)*i){o=[],n.current.stable=!1;const p=K.indexOf(e.detail);if(p>1){n.current.anteprevious=n.current.previous,n.current.previous=e.detail;const m=K[p-1];t(v=>({...v,detail:m}))}}if(o.length>=l&&o.slice(-l).reduce((p,m)=>p+m,0)/l<(n.current.stable?1.001:1.01)*i){o=[],n.current.stable=!1;const p=K.indexOf(e.detail);if(p<K.length-2){const m=K[p+1];m===n.current.previous&&e.detail===n.current.anteprevious&&s-n.current.start>1e3?n.current.stable=!0:(n.current.anteprevious=n.current.previous,n.current.previous=e.detail,t(v=>({...v,detail:m})))}}a=requestAnimationFrame(u)};return a=requestAnimationFrame(u),()=>cancelAnimationFrame(a)}},[e.detail,e.adaptative,e.ambiance,e.space,t]),g.useEffect(()=>{n.current={previous:null,anteprevious:null,stable:!1,start:null}},[e.space,e.shaper,e.ambiance])};class de extends g.Component{constructor(t){super(t),this.state={error:!1}}static getDerivedStateFromError(t){return{error:!0}}static getDerivedStateFromProps(t){return{error:t.error}}componentDidCatch(t,n){this.props.onError(t,n)}render(){return this.state.error?null:this.props.children}}var Ge={exports:{}};(function(e,t){(function(n,i){e.exports=i()})(hn,function(){var n=function(){function i(m){return o.appendChild(m.dom),m}function a(m){for(var v=0;v<o.children.length;v++)o.children[v].style.display=v===m?"block":"none";c=m}var c=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(m){m.preventDefault(),a(++c%o.children.length)},!1);var l=(performance||Date).now(),f=l,u=0,s=i(new n.Panel("FPS","#0ff","#002")),d=i(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=i(new n.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:o,addPanel:i,showPanel:a,begin:function(){l=(performance||Date).now()},end:function(){u++;var m=(performance||Date).now();if(d.update(m-l,200),m>f+1e3&&(s.update(1e3*u/(m-f),100),f=m,u=0,p)){var v=performance.memory;p.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return m},update:function(){l=this.end()},domElement:o,setMode:a}};return n.Panel=function(i,a,c){var o=1/0,l=0,f=Math.round,u=f(window.devicePixelRatio||1),s=80*u,d=48*u,p=3*u,m=2*u,v=3*u,E=15*u,A=74*u,w=30*u,R=document.createElement("canvas");R.width=s,R.height=d,R.style.cssText="width:80px;height:48px";var I=R.getContext("2d");return I.font="bold "+9*u+"px Helvetica,Arial,sans-serif",I.textBaseline="top",I.fillStyle=c,I.fillRect(0,0,s,d),I.fillStyle=a,I.fillText(i,p,m),I.fillRect(v,E,A,w),I.fillStyle=c,I.globalAlpha=.9,I.fillRect(v,E,A,w),{dom:R,update:function(F,_){o=Math.min(o,F),l=Math.max(l,F),I.fillStyle=c,I.globalAlpha=1,I.fillRect(0,0,s,E),I.fillStyle=a,I.fillText(f(F)+" "+i+" ("+f(o)+"-"+f(l)+")",p,m),I.drawImage(R,v+u,E,A-u,w,v,E,A-u,w),I.fillRect(v+A-u,E,u,w),I.fillStyle=c,I.globalAlpha=.9,I.fillRect(v+A-u,E,u,f((1-F/_)*w))}}},n})})(Ge);var Sn=Ge.exports;const In=gn(Sn),yn=`const vec2 cone = vec2(1., 0);
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
`,jn=`// Global vertex uniforms

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
`,On=`float ease(float t) {
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
`,An=`#version 300 es
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
const float DT = curvature == 0.f ? .05f : .001f;
`,Tn=`#loopN2
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
`,Rn=`const float ambient = AMBIENT;
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
`,Fn=`#include helpers
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
`,Cn=`#ifdef OIT
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
`,Dn=`gl_Position = viewProject(proj);

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
`,zn=`#ifdef SHADING
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
`,ve=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),C=(e,t,n)=>{let i,a,c;if(t===0)i=a=c=n;else{const o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;i=ve(l,o,e+1/3),a=ve(l,o,e),c=ve(l,o,e-1/3)}return[i,a,c]},re=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],Mn={background:[0,0,0,1],glow:!1,shading:"ads",diffuse:"lambert",specular:!1,shininess:32,opacity:1,ambient:.2,roughness:.85,gouraud:!1,transparency:"oit",color:({word:e})=>C(e.length*.03%1,.75,.7)},X=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},shading:!1,face:{opacity:.025},transparency:"blend",color:({word:e,dual:t})=>C((e.length*.17-(t?.43:0))%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,diffuse:"fresnel",opacity:.025},transparency:"blend",color:({word:e})=>C(...re[e.length%re.length])},cathedral:{background:[.6,.6,.6,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,opacity:.9},transparency:"oit",color:({word:e,type:t})=>t==="face"?C(e.length*.3%1,1,.6):[0,0,0]},synthwave:{background:[...C(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},shading:!1,face:{opacity:.015},afterImage:.7,transparency:"blend",color:({word:e})=>C((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e,dual:t})=>C(e.length*.03%1-(t?.25:0),1,.8)},shiny:{background:[0,0,0,1],diffuse:"lambert",specular:"blinn-phong",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>C(-(e.length*.07)%1,1,.8)},shape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({faceSize:e,type:t,idx:n,size:i})=>t==="face"?C((e-2)*.21%1,1,.8):C(n/i,.75,.5)},subShape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({subShape:e,type:t})=>t!=="vertex"?C(e*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],diffuse:"cel",face:{opacity:.6,gouraud:!1},transparency:"blend",color:({word:e,type:t,dimensions:n,draw:i})=>{const a=e.length?je(e[e.length-1])/n:0;return C(a%1,1,t==="face"?.6:i.face?0:.8)}},harlequin:{background:[...C(240/360,.23,.09),1],face:{opacity:.6},transparency:"oit",color:({word:e,idx:t,type:n})=>{const i=e.split("").map(c=>je(c)).reduce((c,o)=>c+o,0),a=[...re[i%re.length]];return t%2&&(a[2]*=.5),C(...a)}},pure:{background:[0,0,0,1],color:({word:e})=>C(e.length*.03%1,.75,.7)},facets:{background:[0,0,0,1],color:({faceIndex:e,faceSize:t})=>C(e/t,.75,.7)},monochrome:{background:[.12,.12,.12,1],diffuse:"reverse",ambient:0,face:{opacity:.1},transparency:"oit",color:()=>[1,1,1]},plain:{extended:!0,background:[1,1,1,1],glow:!1,shading:!1,color:({word:e,type:t,draw:n})=>C(e.length*.06%1,1,t==="face"?.6:n.face?.05:.5)},plainblack:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e,type:t})=>t==="face"?new Array(3).fill(1-_e(.9,e.length+1)):[0,0,0]},normals:{extended:!0,background:[1,1,1,1],shading:"normal",color:()=>[0,0,0]},uvs:{extended:!0,background:[1,1,1,1],shading:"uv",color:()=>[0,0,0]}}).map(([e,t])=>[e,{...Mn,...t,transparent:{}}])),Pn={globals:An,dimensions:jn,project:Fn,helpers:Tn,complex:yn,ease:On,fragment:Cn,vertexouthead:zn,lighting:Rn,vertexout:Dn},_n=(e,t,n)=>{t=n?1:t||1,t=Math.max(0,t);const i=n?n.width:e.clientWidth*t|0,a=n?n.height:e.clientHeight*t|0;return e.width!==i||e.height!==a?(e.width=i,e.height=a,!0):!!n},me=(e,t)=>e.replace(/\bvecN\b/g,`vec${t}`).replace(/\bmatN\b/g,`mat${t}`).replace(/\bfovN\b/g,`fov${t}`).replace(/\bvecN_1\b/g,`vec${t-1}`).replace(/\bvec1\b/g,"float").replace(/\b_N_\b/g,`${t}`).replace(/\b_Nf_\b/g,`${t}.`).replace(/\PROJECTION_N\b/g,`PROJECTION${t}`),Ln=(e,t)=>me(e.replace(/#loopN(\d)(.+?)#endloopN/gs,(n,i,a)=>{const c=[];for(let o=i;o<=t;o++)c.push(me(a.replace(/#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,(l,f,u,s,d)=>f===`${o}`?me(u,o):d||""),o));return c.join(`
`)}),t),Ae=(e,t,n,i)=>{var u;const a=X[e.ambiance];let c="";const o=s=>s.toString().includes(".")?s:`${s}.`;Object.entries({shading:s=>bn.indexOf(s),diffuse:s=>En.indexOf(s),specular:s=>Nn.indexOf(s),ambient:s=>o(s),shininess:s=>o(s),roughness:s=>o(s),opacity:s=>o(s),gouraud:s=>""}).forEach(([s,d])=>{const p=Object.keys(a).includes(i)&&Object.keys(a[i]).includes(s)?a[i][s]:a[s];p!==!1&&(c+=`#define ${s.toUpperCase()} ${d(p)}
`),s==="opacity"&&p<1&&(a.transparent[i]=!0,c+=`#define TRANSPARENT
`,a.transparency==="oit"&&(c+=`#define OIT
`))});const f=e.easing;c+=`#define DIMENSIONS ${e.dimensions}
`;for(let s=3;s<=e.dimensions;s++)c+=`#define PROJECTION${s} ${He.indexOf(e[`projection${s}`])-1}
`;return c+=`#define CURVATURE ${((u=e.space)==null?void 0:u.curvature)||0}
`,e.curve&&(c+=`#define SEGMENTS
`),c+=`#define EASING ${Ve.indexOf(f)}
`,Object.entries({...Pn,config:c}).forEach(([s,d])=>{t=t.replace(`#include ${s}`,d),n=n.replace(`#include ${s}`,d)}),[t,n].map(s=>Ln(s,e.dimensions))},ae=(e,t,n,i,a)=>{if(e.gl.shaderSource(a,i),e.gl.compileShader(a),!e.gl.getShaderParameter(a,e.gl.COMPILE_STATUS)){const o=e.gl.getShaderInfoLog(a);return console.error(`An error occurred compiling the ${t}->${n} shader: ${o}`,{shaderSource:i}),o}},Te=(e,t,n)=>{const{gl:i}=e;if(i.linkProgram(n),!i.getProgramParameter(n,i.LINK_STATUS)){const c=i.getProgramInfoLog(n);return console.error(`Unable to initialize the ${t} shader program: ${c}`),c}},qe=(e,t,n,i,a=[])=>{const{gl:c}=e,o=c.createProgram(),l=c.createShader(c.VERTEX_SHADER),f=c.createShader(c.FRAGMENT_SHADER);if(ae(e,t,"vertex",n,l)||ae(e,t,"fragment",i,f)||(c.attachShader(o,l),c.attachShader(o,f),Te(e,t,o)))return;const u={program:o,vertexShader:l,fragmentShader:f,uniformsDef:a,recompile(s,d,p,m=null){ae(s,t,"vertex",d,this.vertexShader)||ae(s,t,"fragment",p,this.fragmentShader)||Te(s,t,this.program)||(m&&(this.uniformsDef=m),this.bindUniforms(s))},bindUniforms(s){this.uniforms={},this.uniformsDef.forEach(({name:d,type:p,value:m})=>{this.uniforms[d]=kn(s,this.program,d,p),this.uniforms[d].update(m)})}};return u.bindUniforms(e),u},Z=(e,t,n,i,a,c=null,o=null)=>{const{gl:l}=e;o=o||l.FLOAT;const f=o===l.FLOAT?4:2,u={name:n,mesh:t,indices:$e,instances:c,data:a,size:i,type:o,update(s=null,d=null,p=null){l.bindVertexArray(this.mesh.vao),l.bindBuffer(l.ARRAY_BUFFER,this.buffer),s===null&&d===null&&p===null?l.bufferData(l.ARRAY_BUFFER,this.data,l.STATIC_DRAW):(this.data.set(s,d*this.size),l.bufferSubData(l.ARRAY_BUFFER,d*this.size*f,this.data,d*this.size,p*this.size))},extend(s,d,p=!1){if(l.bindVertexArray(this.mesh.vao),this.size=s,d&&(p&&d.length>=this.data.length&&d.set(this.data),this.data=d),this.location=l.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;l.bindBuffer(l.ARRAY_BUFFER,this.buffer);const m=s>4?3:1;for(let v=0;v<m;v++)l.enableVertexAttribArray(this.location+v);for(let v=0;v<m;v++)l.vertexAttribPointer(this.location+v,s/m,this.type,!1,s*f,s/m*v*f);for(let v=0;v<m;v++)l.vertexAttribDivisor(this.location+v,this.instances||0);this.update()},get(){l.bindVertexArray(this.mesh.vao),l.bindBuffer(l.ARRAY_BUFFER,this.buffer);const s=new Float32Array(this.data.length);return l.getBufferSubData(l.ARRAY_BUFFER,0,s),s}};return u.buffer=l.createBuffer(),u.extend(i),u},$e=(e,t,n)=>{const{gl:i}=e;i.bindVertexArray(t);const a=i.createBuffer();return i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,a),i.bufferData(i.ELEMENT_ARRAY_BUFFER,n,i.STATIC_DRAW),{buffer:a,vao:t,indices:n,count:n.length,update(c){i.bindVertexArray(this.vao),this.indices=c,this.count=c.length,i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,this.buffer),i.bufferData(i.ELEMENT_ARRAY_BUFFER,c,i.STATIC_DRAW)}}},kn=(e,t,n,i)=>{const{gl:a}=e;return{program:t,update(o){if(a.useProgram(this.program),i.startsWith("m")){const l=parseInt(i.slice(1,2));if(l>4)for(let f=0;f<l;f++){const u=a.getUniformLocation(t,`${n}.c${f+1}.v`);if(u!==null&&a.uniform4fv(u,o[f][0]),l-4===1){const s=a.getUniformLocation(t,`${n}.c${f+1}.u`);s!==null&&a.uniform1f(s,o[f][1])}else if(l-4>1){const s=a.getUniformLocation(t,`${n}.c${f+1}.u`);if(s!==null&&a[`uniform${B(l-4,4)}fv`](s,o[f][1]),l-8===1){const d=a.getUniformLocation(t,`${n}.c${f+1}.t`);d!==null&&a.uniform1f(d,o[f][2])}}}else{const f=a.getUniformLocation(t,n);f!==null&&a[`uniformMatrix${i.slice(1)}`](f,!1,o)}}else{const l=a.getUniformLocation(t,n);l!==null&&a[`uniform${i}`](l,o)}},get(){a.useProgram(this.program);const o=a.getUniformLocation(t,n);if(o!==null)return a.getUniform(this.program,o)}}},k=(e,t,n=null)=>{const{gl:i}=e,a=n?~~(n*i.drawingBufferWidth):i.drawingBufferWidth,c=n?~~(n*i.drawingBufferHeight):i.drawingBufferHeight,o=i.createTexture();return i.bindTexture(i.TEXTURE_2D,o),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,n?i.LINEAR:i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,n?i.LINEAR:i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texStorage2D(i.TEXTURE_2D,1,t,a,c),{texture:o,width:a,height:c}},Q=(e,t,n,i,a=[])=>{const c={name:t,vertex:n,fragment:i,...qe(e,t,n,i,a),recompileProgram(o){this.recompile(o,this.vertex,this.fragment,a)}};return{[t]:c}},pe=(e,t,n,i,a,c,o,l=["position"])=>{var p;const{gl:f}=e,u=a(((p=e.space)==null?void 0:p.curvature)&&e.curve,e.detail),s=m=>[{name:"viewProjection",type:"m4fv",value:$(J(4))},{name:"matrix",type:`m${m.dimensions}fv`,value:$(m.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${m.dimensions}fv`,value:$(J(m.dimensions))},{name:"zoom",type:"1f",value:1},...["vertex","edge"].includes(t)?[{name:"thickness",type:"1f",value:0}]:[],...q(3,m.dimensions+1,1,!0).map(v=>({name:`fov${v}`,type:"1f",value:m[`fov${v}`]}))];o=o>4?9:o;const d={attributes:{},varying:l,vertex:n,type:t,fragment:i,...qe(e,t,...Ae(e,n,i,t),s(e)),recompileProgram(m){const[v,E]=Ae(m,this.vertex,this.fragment,this.type);this.recompile(m,v,E,s(m))},changeArity(m){m=m>4?9:m,this.arity!==m&&(this.arity=m,this.extendAttributes(this.instances))},extendAttributes(m){this.instances=m,l.forEach(v=>{this.attributes[v].extend(this.arity,new Float32Array(m*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(m*3),!0)},updateGeometry(m){const v=a(m.space.curvature&&m.curve,m.detail);this.indices.update(new Uint16Array(v.indices)),this.attributes.vertex.extend(3,new Float32Array(v.vertices)),this.attributes.uv.extend(2,new Float32Array(v.uvs)),this.attributes.normal.extend(3,new Float32Array(v.normals))},fillData(m,v){if(!v){this.count=0;return}this.count=v.start+v.size,this.instances<this.count&&this.extendAttributes(this.count),this.attributes.color.update(m[0],v.start,v.size);for(let E=0;E<this.varying.length;E++){const A=this.varying[E];this.attributes[A].update(m[E+1],v.start,v.size)}},render(m){this.count&&(f.useProgram(this.program),f.bindVertexArray(this.vao),f.drawElementsInstanced(f.TRIANGLES,this.indices.count,f.UNSIGNED_SHORT,0,this.count))}};return d.vao=f.createVertexArray(),d.indices=$e(e,d.vao,new Uint16Array(u.indices)),d.attributes.vertex=Z(e,d,"vertex",3,new Float32Array(u.vertices)),d.attributes.uv=Z(e,d,"uv",2,new Float32Array(u.uvs)),d.attributes.normal=Z(e,d,"normal",3,new Float32Array(u.normals)),d.attributes.color=Z(e,d,"color",3,new Float32Array(c*3),1),l.forEach(m=>{d.attributes[m]=Z(e,d,m,o,new Float32Array(c*o),1)}),d.type=t,d.arity=o,d.instances=c,d.count=0,{[t]:d}},he=(e,t,n,i)=>{const{gl:a}=e;a.bindRenderbuffer(a.RENDERBUFFER,t),i?a.renderbufferStorageMultisample(a.RENDERBUFFER,i,n,a.drawingBufferWidth,a.drawingBufferHeight):a.renderbufferStorage(a.RENDERBUFFER,n,a.drawingBufferWidth,a.drawingBufferHeight),a.bindRenderbuffer(a.RENDERBUFFER,null)},Un=({radius:e=1,widthSegments:t=16,segments:n=16}={})=>{const i=[],a=[],c=[],o=[];let l=0;const f=[];for(let u=0;u<=n;u++){const s=[],d=u/n;let p=0;u===0?p=.5/t:u===n&&(p=-.5/t);for(let m=0;m<=t;m++){const v=m/t,E=[-e*be(v*Ee)*oe(d*U),e*be(d*U),e*oe(v*Ee)*oe(d*U)];a.push(...E);const A=(E[0]**2+E[1]**2+E[2]**2)**-.5;c.push(...E.map(w=>w*A)),o.push(v+p,1-d),s.push(l++)}f.push(s)}for(let u=0;u<n;u++)for(let s=0;s<t;s++){const d=f[u][s+1],p=f[u][s],m=f[u+1][s],v=f[u+1][s+1];u!==0&&i.push(d,p,v),u!==n-1&&i.push(p,m,v)}return{vertices:a,normals:c,uvs:o,indices:i}},Bn=({radius:e=null,radiusTop:t=1,radiusBottom:n=1,height:i=1,radialSegments:a=8,segments:c=1}={})=>{const o=[],l=[],f=[],u=[];e!==null&&(t=e,n=e);let s=0;const d=[],p=i/2,m=(n-t)/i;for(let v=0;v<=c;v++){const E=[],A=v/c,w=A*(n-t)+t;for(let R=0;R<=a;R++){const I=R/a,F=I*Ee,_=oe(F),M=be(F),Y=[w*_,-A*i+p,w*M];l.push(...Y);const D=[_,m,M],z=(D[0]**2+D[1]**2+D[2]**2)**-.5;f.push(...D.map(ne=>ne*z)),u.push(I,1-A),E.push(s++)}d.push(E)}for(let v=0;v<a;v++)for(let E=0;E<c;E++){const A=d[E][v],w=d[E+1][v],R=d[E+1][v+1],I=d[E][v+1];o.push(A,w,I),o.push(w,R,I)}return{vertices:l,normals:f,uvs:u,indices:o}},Hn=({segments:e=3}={})=>{const t=[],n=[],i=[],a=[],c=1/e;for(let o=0;o<e+1;o++)for(let l=0;l<o+1;l++)n.push((2*l-o)*c/2,o*c,0),i.push(0,0,1),a.push(c*l,1-c*o);for(let o=1;o<e+1;o++)for(let l=0;l<o;l++){const f=o*(o+1)/2+l,u=o*(o-1)/2+l;if(t.push(f,u,f+1),o<e){const s=(o+1)*(o+2)/2+l;t.push(s+1,f,f+1)}}return{vertices:n,normals:i,uvs:a,indices:t}},Vn=`#include globals
#include fragment
`,Gn=`#include globals
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
`,qn=`#include globals
#include fragment
`,$n=`#include globals
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
`,Jn=`#include globals
#include fragment
`,Kn=`#include globals
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
`,ge={vertex:(e,t)=>Un({lowest:{widthSegments:6,segments:2},lower:{widthSegments:8,segments:4},low:{widthSegments:8,segments:8},lowish:{widthSegments:12,segments:8},medium:{widthSegments:16,segments:16},highish:{widthSegments:32,segments:16},high:{widthSegments:32,segments:32},higher:{widthSegments:64,segments:32},ultra:{widthSegments:128,segments:64}}[t||"medium"]),edge:(e,t)=>Bn({lowest:{segments:e?4:1,radialSegments:4},lower:{segments:e?8:1,radialSegments:5},low:{segments:e?12:1,radialSegments:6},lowish:{segments:e?14:1,radialSegments:7},medium:{segments:e?16:1,radialSegments:8},highish:{segments:e?24:1,radialSegments:10},high:{segments:e?32:1,radialSegments:12},higher:{segments:e?64:1,radialSegments:16},ultra:{segments:e?128:1,radialSegments:32}}[t||"medium"]),face:(e,t)=>Hn({lowest:{segments:e?4:1},lower:{segments:e?8:1},low:{segments:e?12:1},lowish:{segments:e?14:1},medium:{segments:e?16:1},highish:{segments:e?24:1},high:{segments:e?32:1},higher:{segments:e?64:1},ultra:{segments:e?128:1}}[t||"medium"])};function Wn(e){return{meshes:we,...pe(e,"vertex",Kn,Jn,ge.vertex,1024,e.dimensions),...pe(e,"edge",Gn,Vn,ge.edge,1024,e.dimensions,["position","target"]),...pe(e,"face",$n,qn,ge.face,1024,e.dimensions,["position","target","center"]),reset(){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].count=0},changeArity(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].changeArity(t)},updateGeometries(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].updateGeometry(t)},recompilePrograms(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].recompileProgram(t)},updateUniforms(t,n=!1,i=null){for(let a=0;a<this.meshes.length;a++){const c=this.meshes[a],o=this[c];if(!n){o.uniforms.metric.update($(t.space.metric)),o.uniforms.matrix.update($(t.matrix));for(let l=4;l<=t.dimensions;l++)o.uniforms[`fov${l}`].update(1/Le(U*t[`fov${l}`]*.5/180));c==="vertex"?o.uniforms.thickness.update(t.sizeVertex):c==="edge"&&o.uniforms.thickness.update(t.sizeEdge)}o.uniforms.viewProjection.update(t.camera.viewProjection),o.uniforms.zoom.update(n?i:t.zoom),o.uniforms.eye.update(t.camera.eye)}},fillData(t){for(let n=0;n<this.meshes.length;n++){const i=this.meshes[n];this[i].fillData(t.data[n],t.infos[n])}}}}const Xn=`#version 300 es
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
`,Yn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Zn=`#version 300 es
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
`,Qn=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,et=`#version 300 es
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
`,nt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,tt=`#version 300 es
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
`,rt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,at=`#version 300 es
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
`,ot=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function it(e){return{...Q(e,"oit",rt,tt,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...Q(e,"down",nt,et,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Q(e,"up",ot,at,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Q(e,"afterImage",Yn,Xn,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...Q(e,"bloom",Qn,Zn,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function Je(e){const{gl:t}=e,n=X[e.ambiance],i=e.msaa?B(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(t.bindFramebuffer(t.FRAMEBUFFER,e.fb.base),he(e,e.rb.base,t.RGBA8,i),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,e.rb.base),he(e,e.rb.depth,t.DEPTH_COMPONENT24,i),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),e.fb.oit&&(t.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(t.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(t.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&t.deleteRenderbuffer(e.rb.depth_copy),n.transparency==="oit"&&(e.fb.oit=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.oit),i?(e.rb.depth_copy=t.createRenderbuffer(),he(e,e.rb.depth_copy,t.DEPTH_COMPONENT24),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth_copy)):t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),e.textures.oitAccum=k(e,t.RGBA16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=k(e,t.R16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT1,t.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(t.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(t.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(t.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(t.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),n.afterImage&&(e.fb.afterImage=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=k(e,t.RGBA8),e.textures.afterImageScreen=k(e,t.RGBA8),e.textures.afterImageOutScreen=k(e,t.RGBA8)),e.fb.kawase&&(t.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(t.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let a=0;a<e.textures.kawase.length;a++)t.deleteTexture(e.textures.kawase[a].texture);e.textures.kawase=null}if(e.textures.blur&&(t.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(t.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),n.glow){e.fb.kawase=t.createFramebuffer(),e.fb.bloom=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let a=0;a<n.glow.steps;a++)e.textures.kawase[a]=k(e,t.RGBA8,n.glow.pow**-a);e.textures.blur=k(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.blur.texture,0),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=k(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.bloom.texture,0)}}const Ke=window.location.search.includes("stats");let ie;Ke&&(ie=new In,ie.dom.id="stats",document.body.appendChild(ie.dom));const st=e=>{const t=document.createElement("canvas");t.id="webgl2",document.body.insertBefore(t,document.body.firstChild);const n=t.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:n},!n){console.error("Unable to initialize WebGL. Your browser may not support it.");return}n.getExtension("EXT_color_buffer_float"),n.enable(n.DEPTH_TEST);const i={zoom:1,fov:U/3,eye:[0,0,-e.zoom],near:.01,far:1e3,update(u){const s=J(4);s[0][3]=this.eye[0],s[1][3]=this.eye[1],s[2][3]=this.eye[2],s[0][0]=-1,s[2][2]=-1;const d=nn(s);this.aspect=u?u.fullWidth/u.fullHeight:n.canvas.clientWidth/n.canvas.clientHeight,this.zoom=B(this.aspect,1);const p={left:0,right:0,top:0,bottom:0,near:this.near,far:this.far};p.top=this.near*Le(this.fov/2)/this.zoom;let m=2*p.top,v=this.aspect*m;p.left=-.5*v,u&&(p.left+=u.x*v/u.fullWidth,p.top-=u.y*m/u.fullHeight,v*=u.width/u.fullWidth,m*=u.height/u.fullHeight),p.bottom=p.top-m,p.right=p.left+v;const E=tn(p);this.viewProjection=$(Ie(E,d))}};i.update();const a=it(e),c=Wn(e),o={base:n.createRenderbuffer(),depth:n.createRenderbuffer()},l={base:n.createFramebuffer()};return{...e,gl:n,camera:i,meshes:c,passes:a,rb:o,fb:l,textures:{}}},le=(e,t=null)=>{e.camera.fov=e.fov3?U*e.fov3/180:1,t!==null&&(e.camera.eye[2]=t===null?-e.zoom:-t),e.camera.update(),e.meshes.updateUniforms(e,!0,t)},ct=e=>{const t=X[e.ambiance];e.gl.clearColor(...t.background),t.glow&&(e.passes.bloom.uniforms.exposure.update(t.glow.exposure),e.passes.bloom.uniforms.strength.update(t.glow.strength),e.passes.down.uniforms.offset.update(t.glow.offset.down),e.passes.up.uniforms.offset.update(t.glow.offset.up)),t.afterImage&&e.passes.afterImage.uniforms.strength.update(t.afterImage)},W=(e,t)=>{Ke&&ie.update();const{gl:n}=e,i=e.msaa?B(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,a=X[e.ambiance];_n(n.canvas,e.subsampling,t)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),Je(e),e.camera.update(t),e.meshes.updateUniforms(e,!0,e.zoom)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),a.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),a.transparent.vertex||e.meshes.vertex.render(e),a.transparent.edge||e.meshes.edge.render(e),a.transparent.face||e.meshes.face.render(e),(e.drawVertex&&a.transparent.vertex||e.drawEdge&&a.transparent.edge||e.drawFace&&a.transparent.face)&&(a.transparency==="oit"?(i&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):a.transparency==="blend"&&(n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e)));const c=a.afterImage?e.fb.afterImage:a.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,c),a.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let o=e.textures.bloom;if(a.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),a.glow?o=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),a.glow){n.disable(n.BLEND),a.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let l=0;l<a.glow.steps;l++){const f=l===0?o:e.textures.kawase[l-1],u=e.textures.kawase[l];n.viewport(0,0,u.width,u.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,u.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let l=a.glow.steps-1;l>=0;l--){const f=e.textures.kawase[l],u=l===0?e.textures.blur:e.textures.kawase[l-1];n.viewport(0,0,u.width,u.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,u.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,o.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=W;const ee=.9,lt=.95,ut=10,We=(e,t,n,i,a,c)=>{const{combinations:o}=n,l=[[],[]],f=(s,d)=>{ke(i,Ie(Ue(s,d,a,c),i))},u=2*t+1>o.length-1?[t*2]:[t*2+1,t*2];for(let s=0;s<u.length;s++){const d=u[s];if(l[s].push(d),n.lock&&o[d][0]>=0&&o[d][1]>=0)for(let p=0;p<o.length;p++)o[p][0]<0||o[p][1]<0||!o[d].some(m=>o[p].includes(m))&&(!(s>0)||p!==u[1-s])&&l[s].push(p)}for(let s=0;s<l.length;s++){const d=l[s];for(let p=0;p<d.length;p++){const m=d[p];f(e[s],o[m])}}return l},ft=(e,t,n,i,a,c)=>{const{code:o}=e,l=.1;if(e.altKey||e.ctrlKey||e.metaKey)return;const f=(u,s,d)=>We([u,s],d,t,n,i,a);if(o==="ArrowLeft"||o==="KeyA")f(l,0,0);else if(o==="ArrowRight"||o==="KeyD")f(-l,0,0);else if(o==="ArrowUp"||o==="KeyW")f(0,l,0);else if(o==="ArrowDown"||o==="KeyS")f(0,-l,0);else if(o==="PageUp"||o==="KeyQ")f(l,0,1);else if(o==="PageDown"||o==="KeyE")f(-l,0,1);else if(o==="Digit1")f(0,l,1);else if(o==="Digit3")f(0,-l,1);else if(o==="KeyZ")f(l,0,2);else if(o==="KeyC")f(-l,0,2);else if(o==="ControlLeft")c("shift",(t.shift+1)%t.maxShift);else return;return!0},dt=(e,t,n,i)=>{const a=g.useRef(null),c=g.useRef({pause:new Set,speed:null,zoom:null,t:null}),o=g.useRef({matrix:e.matrix,zoom:e.zoom,pointers:new Map});g.useEffect(()=>{o.current.matrix=e.matrix},[e.matrix]),g.useEffect(()=>{o.current.zoom=e.zoom,c.current.zoom=null},[e.zoom]);const l=g.useCallback(({matrix:u,zoom:s}={matrix:!0,zoom:!0})=>{if(!e.matrix._reset){if(u)for(let d=0;d<we.length;d++)e.meshes[we[d]].uniforms.matrix.update($(o.current.matrix));s&&le(e,o.current.zoom)}},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.drawVertex,e.drawEdge,e.drawFace,e.easing,e.error,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,e.stellation,e.subsampling,e.zoom]);g.useEffect(()=>{c.current.speed=new Array(t.combinations.length).fill(0)},[t.combinations.length]),g.useEffect(()=>{e.matrix._reset&&(delete e.matrix._reset,c.current.speed=new Array(t.combinations.length).fill(0))},[t.combinations.length,e.matrix]);const f=g.useCallback(()=>{const{pause:u,speed:s,zoom:d}=c.current;c.current.t||(c.current.t=performance.now());const p=performance.now()-c.current.t;let m=!1;for(let v=0;v<s.length;v++)if(s[v]!==0&&(m=!0,t.auto==="damp"&&(s[v]*=lt,V(s[v])<1e-6&&(s[v]=0)),!u.has(v))){const E=Pe(B(s[v]*p,.5),-.5);ke(o.current.matrix,Ie(Ue(E,t.combinations[v],e.dimensions,e.space.metric),o.current.matrix))}if(m&&l({matrix:!0}),d){const v=te(o.current.zoom)/te(ee),E=te(d)/te(ee);o.current.zoom*=_e(ee,(E-v)*B(1,p*.001*2)),V(d-o.current.zoom)<d*.001&&(o.current.zoom=d,c.current.zoom=null),m=!0,l({zoom:!0})}if(s.reduce((v,E)=>V(v)+V(E),0)===0&&c.current.zoom===null&&!e.matrix._reset){i({matrix:o.current.matrix,zoom:o.current.zoom}),a.current=null,c.current.t=null;return}m&&W(e),c.current.t=performance.now(),a.current=requestAnimationFrame(f)},[l,t.auto,t.combinations,e.dimensions,e.space]);g.useEffect(()=>{c.current.speed.reduce((w,R)=>V(w)+V(R),0)>0&&(a.current=requestAnimationFrame(f));let u=null,s=null;const d=[],p=()=>{const w=o.current.pointers.values(),R=w.next().value,I=w.next().value;return rn(R[0]-I[0],R[1]-I[1])},m=w=>{w.button!==0||w.target.tagName!=="CANVAS"||(t.auto&&(s=performance.now(),o.current.pointers.size===1?(c.current.pause.delete(t.shift*2),c.current.pause.delete(t.shift*2+1)):(c.current.pause.add(t.shift*2),c.current.pause.add(t.shift*2+1))),o.current.pointers.set(w.pointerId,[w.clientX,w.clientY]))},v=w=>{if(!o.current.pointers.has(w.pointerId))return;const R=o.current.pointers.get(w.pointerId),I=[-(w.clientX-R[0])/window.innerHeight,-(w.clientY-R[1])/window.innerHeight];if(o.current.pointers.set(w.pointerId,[w.clientX,w.clientY]),o.current.pointers.size>1){if(u===null){u=p(),c.current.zoom=o.current.zoom;return}const M=p();o.current.zoom*=u/M,u=M,le(e,o.current.zoom),c.current.zoom=null,W(e);return}let F=t.shift;!F&&w.shiftKey?F=1:!F&&w.altKey?F=2:!F&&w.ctrKey?F=3:!F&&w.metaKey&&(F=4);const _=We([U*I[0],U*I[1]],F,t,o.current.matrix,e.dimensions,e.space.metric);if(t.auto){const M=performance.now()-s;s=performance.now(),d.push([I[0]*1.5/M,I[1]*1.5/M]),d.length>ut&&d.shift();const Y=d.reduce((D,z)=>[D[0]+z[0],D[1]+z[1]],[0,0]);for(let D=0;D<2;D++)for(let z=0;z<_[D].length;z++)c.current.speed[_[D][z]]=Y[D]/d.length;a.current||(a.current=requestAnimationFrame(f))}l({matrix:!0})},E=w=>{o.current.pointers.clear(),t.auto&&(d.length=0,s=null,c.current.pause.delete(t.shift*2),c.current.pause.delete(t.shift*2+1)),u=null};document.addEventListener("pointerdown",m),document.addEventListener("pointermove",v),document.addEventListener("pointerup",E);const A=c.current;return()=>{document.removeEventListener("pointerdown",m),document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",E),a.current&&(cancelAnimationFrame(a.current),a.current=null,A.t=null)}},[t,e.dimensions,e.space,e.camera,f,l]),g.useEffect(()=>{const u=s=>{s.target===document.body&&ft(s,t,o.current.matrix,e.dimensions,e.space.metric,n)&&(l({matrix:!0}),W(e))};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[l,t,e.space,e.dimensions,n]),g.useEffect(()=>{const u=s=>{if(s.target.tagName!=="CANVAS")return;const d=c.current.zoom===null?o.current.zoom:c.current.zoom;c.current.zoom=d*(s.deltaY<0?ee:1/ee),a.current||(a.current=requestAnimationFrame(f))};return document.addEventListener("wheel",u),()=>{document.removeEventListener("wheel",u)}},[f]),g.useEffect(()=>{const u=s=>{if(s.button!==0||s.target.tagName!=="CANVAS")return;const d=c.current.zoom===null?o.current.zoom:c.current.zoom,p=d<.5?5:d<2?.25:1;c.current.zoom=p,a.current||(a.current=requestAnimationFrame(f))};return document.addEventListener("dblclick",u),()=>{document.removeEventListener("dblclick",u)}},[f])};function vt({runtime:e,rotations:t,updateRotations:n,updateParams:i}){return dt(e,t,n,i),null}function mt(){return new Worker(""+new URL("shape.worker-b664d3f7.js",import.meta.url).href)}const pt=(e,t)=>{g.useEffect(()=>{t(n=>{n.meshes.reset();const i=an(n.coxeter,n.stellation),a=on(i),{vertices:c,normals:o}=sn(a,n.centered),l=n.mirrors.every(u=>!u)?n.mirrors.map(()=>1):n.mirrors.map(u=>cn(u)),f=ln(un(c,l),a.metric);return a.rootVertex=f,a.rootVertices=c,a.rootNormals=o,{...n,space:a,error:null}})},[e.dimensions,e.coxeter,e.mirrors,e.stellation,e.centered,t]),g.useEffect(()=>{t(n=>{var a;const i={...n,iteration:-1,paused:!1};return n.processing&&((a=n.shaper)==null||a.terminate(),i.shaper=new mt),i})},[e.space,e.ambiance,e.drawVertex,e.drawEdge,e.drawFace,e.hidden,e.reciprocation,t]),g.useEffect(()=>{t(n=>{const i={...n};return n.polytope.size>n.limit&&(i.paused=!0),i})},[e.polytope.size,e.limit,t]),g.useEffect(()=>{t(n=>({...n,paused:!1}))},[e.limit,t]),g.useEffect(()=>{t(n=>n.iteration===0?n:(n.shaper.postMessage({first:n.iteration===-1,space:n.space,dimensions:n.dimensions,coxeter:n.coxeter,stellation:n.stellation,mirrors:n.mirrors,ambiance:n.ambiance,draw:{vertex:n.drawVertex,edge:n.drawEdge,face:n.drawFace},batch:n.iteration===-1?100:n.batch,hidden:n.hidden,reciprocation:n.reciprocation}),{...n,iteration:n.iteration===-1?0:n.iteration,processing:!0}))},[e.iteration,e.limit,e.ambiance,e.drawVertex,e.drawEdge,e.drawFace,e.batch,e.shaper,e.space,e.hidden,e.reciprocation,t]),g.useEffect(()=>{t(n=>({...n,iteration:n.paused?n.iteration:n.iteration+1}))},[e.paused,t]),g.useEffect(()=>{if(!e.shaper)return;const n=({data:i})=>{i.error?console.error(i.error):t(a=>(a.meshes.fillData(i),{...a,processing:!i.polytope.done,iteration:a.paused||i.polytope.done?a.iteration:a.iteration+1,polytope:i.polytope}))};return e.shaper.addEventListener("message",n),()=>{e.shaper.removeEventListener("message",n)}},[e.shaper,e.paused,t])};function ht({runtime:e,setRuntime:t}){return pt(e,t),null}const gt=(e,t)=>{g.useEffect(()=>{t(n=>(le(n,n.zoom),n))},[e.zoom,t]),g.useEffect(()=>{t(n=>(le(n),n))},[e.fov3,e.camera,t]),g.useEffect(()=>{t(n=>(ct(n),Je(n),n))},[e.ambiance,e.msaa,e.msaaSamples,t]),g.useEffect(()=>{t(n=>(n.meshes.recompilePrograms(n),n))},[e.ambiance,e.curve,e.dimensions,e.easing,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{t(n=>(n.meshes.changeArity(n.dimensions),n))},[e.dimensions,t]),g.useEffect(()=>{t(n=>(n.meshes.updateGeometries(n),n))},[e.space,e.curve,e.detail,t]),g.useEffect(()=>{t(n=>(n.meshes.updateUniforms(n),n))},[e.ambiance,e.curve,e.dimensions,e.easing,e.sizeVertex,e.sizeEdge,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.detail,e.matrix,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{const n=new ResizeObserver(()=>{W(e)});return n.observe(e.gl.canvas,{box:"content-box"}),()=>n.disconnect()},[e.gl.canvas]),g.useEffect(()=>{t(n=>(W(n),n))},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.easing,e.edge,e.error,e.face,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.iteration,e.detail,e.matrix,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.ranges,e.space,e.stellation,e.subsampling,e.sizeVertex,e.sizeEdge,e.polytope,e.vertex,e.zoom])};function xt({runtime:e,setRuntime:t}){return gt(e,t),null}function bt({runtime:e,setRuntime:t,rotations:n,updateRotations:i,updateParams:a}){var o,l,f;window.rt=e,window.ro=n;const c=g.useCallback(u=>s=>{t(d=>({...d,error:{[u]:s.message}}))},[t]);return wn(e,t),r.jsxs(r.Fragment,{children:[r.jsx(de,{error:(o=e.error)==null?void 0:o.process,onError:c("process"),children:r.jsx(ht,{runtime:e,setRuntime:t})}),e.space?r.jsxs(r.Fragment,{children:[r.jsx(de,{error:(l=e.error)==null?void 0:l.render,onError:c("render"),children:r.jsx(xt,{runtime:e,setRuntime:t})}),r.jsx(de,{error:(f=e.error)==null?void 0:f.interact,onError:c("interact"),children:r.jsx(vt,{runtime:e,rotations:n,updateRotations:i,updateParams:a})})]}):null]})}const Et="modulepreload",Nt=function(e,t){return new URL(e,t).href},Re={},wt=function(t,n,i){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(c=>{if(c=Nt(c,i),c in Re)return;Re[c]=!0;const o=c.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!i)for(let s=a.length-1;s>=0;s--){const d=a[s];if(d.href===c&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Et,o||(u.as="script",u.crossOrigin=""),u.href=c,document.head.appendChild(u),o)return new Promise((s,d)=>{u.addEventListener("load",s),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>t()).catch(c=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=c,window.dispatchEvent(o),!o.defaultPrevented)throw c})},Xe=r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",strokeWidth:"3",children:[r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m31.376 13.781l-2.673-7.659c-1.554-4.453-7.852-4.453-9.406 0l-4.56 13.067c-.922 2.644 1.04 5.408 3.841 5.408H24"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m15.993 14.24l-8.11.175c-4.716.102-6.663 6.092-2.907 8.946l11.018 8.374c2.23 1.695 5.465.682 6.33-1.982L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m11.675 29.012l-2.34 7.767c-1.36 4.517 3.736 8.219 7.611 5.53l11.369-7.892c2.3-1.597 2.337-4.987.071-6.633L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m24.39 37.683l6.664 4.625c3.875 2.69 8.971-1.012 7.61-5.53l-3.992-13.25c-.807-2.681-4.02-3.764-6.286-2.118L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m36.566 28.27l6.458-4.908c3.756-2.855 1.81-8.845-2.907-8.947l-13.836-.298c-2.8-.06-4.822 2.66-3.956 5.324L24 24.597"})]}),Ye=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("g",{id:"feTarget0",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:r.jsx("g",{id:"feTarget1",fill:"currentColor",fillRule:"nonzero",children:r.jsx("path",{id:"feTarget2",d:"M19.938 13A8.004 8.004 0 0 1 13 19.938V22h-2v-2.062A8.004 8.004 0 0 1 4.062 13H2v-2h2.062A8.004 8.004 0 0 1 11 4.062V2h2v2.062A8.004 8.004 0 0 1 19.938 11H22v2h-2.062ZM12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"})})})}),St=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"})}),It=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20.777a8.942 8.942 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a8.961 8.961 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A8.954 8.954 0 0 1 10 3.223"})}),yt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",children:r.jsxs("g",{fill:"none",stroke:"currentColor",children:[r.jsx("path",{strokeLinecap:"round",d:"M13.326 8.5a6.5 6.5 0 1 1-.558-4.5"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 2v2.5H11"})]})}),jt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:r.jsx("path",{fill:"currentColor",d:"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"})}),Ot=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 6v1h.75A3.25 3.25 0 0 1 20 10.25v7.5A3.25 3.25 0 0 1 16.75 21h-9.5A3.25 3.25 0 0 1 4 17.75v-7.5A3.25 3.25 0 0 1 7.25 7H8V6a4 4 0 1 1 8 0ZM9.5 6v1h5V6a2.5 2.5 0 0 0-5 0Zm2.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"})}),At=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 5a2.5 2.5 0 0 1 5 0v.25a.75.75 0 0 0 1.5 0V5a4 4 0 0 0-8 0v2H7.25A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21h9.5A3.25 3.25 0 0 0 20 17.75v-7.5A3.25 3.25 0 0 0 16.75 7H16V5Zm-4 10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"})}),Tt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})}),Rt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),Ft=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),Ct=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),Dt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),zt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),Mt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M14 19V5h4v14zm-8 0V5h4v14z"})}),Pt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"})}),_t=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"})}),Lt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"})});function xe({allowNull:e,name:t,value:n,onChange:i,...a}){const c=g.useCallback(l=>{let{name:f,checked:u}=l.target,s;e?s=n===!1?!0:n?null:!1:s=u,i(f,s)},[e,i,n]),o=g.useRef(null);return g.useLayoutEffect(()=>{e&&o.current&&(n===null?o.current.indeterminate=!0:o.current.indeterminate=!1)},[n,e]),r.jsx("input",{type:"checkbox",ref:o,name:t,checked:n||!1,onChange:c})}function S({type:e,subtype:t,level:n,dimensions:i}){return r.jsxs("span",{className:"space",children:[e===null||e==="indefinite"?"𝕏":e==="affine"?"𝔼":e==="finite"?"𝕊":"ℍ",i?r.jsx("sup",{children:i-1}):null,e==="hyperbolic"?r.jsxs("sub",{children:[{compact:" ",paracompact:"*",lorentzian:"L",superhyperbolic:"**"}[t],n]}):null]})}const kt=(...e)=>{if(Array.isArray(e[0]))return{coxeter:e,dimensions:e.length,extended:!0};const t=e.length+1;return{coxeter:new Array(t).fill().map((i,a)=>new Array(t).fill().map((c,o)=>a===o?1:a===o+1||o===a+1?e[B(a,o)]:2)),dimensions:t}},Ut=(...e)=>{const t=e.length+1;return{stellation:new Array(t).fill().map((i,a)=>new Array(t).fill().map((c,o)=>a===o?1:a===o+1||o===a+1?e[B(a,o)]:1))}},h=(e,t,n,i)=>{const a=kt(...e),{dimensions:c}=a,o={...se,...a,drawVertex:c<=3,drawFace:c<=4,curve:c>3,ambiance:"colorful",matrix:J(c),zoom:c<=3?2:c>4?3:5,centered:!0,...Object.fromEntries(q(3,c+1).map(l=>[`projection${l}`,Ne(l,c)])),...i||{}};return t?o.mirrors=t:o.mirrors=new Array(c).fill().map((l,f)=>f===0?1:0),n?o.stellation=Ut(...n).stellation:o.stellation=new Array(c).fill().map((l,f)=>new Array(c).fill(1)),o},O=e=>({...e,subforms:Object.entries(Bt(e.params.dimensions)).map(([t,n])=>({name:`${t} ${e.name}`,params:{...e.params,mirrors:n}}))}),N=(e,t,n,i)=>({...h(e,t,n),ambiance:"plain",drawVertex:!1,curve:!0,zoom:1,...i}),j=(e,t,n,i)=>({...h(e,t,n),ambiance:"neon",drawFace:!1,drawVertex:!1,centered:!1,sizeEdge:15,zoom:2,...i}),b=(e,t,n,i)=>{const a=h(e,t,n),c=a.matrix.length;return{...a,ambiance:"neon",drawFace:!1,drawVertex:!1,curve:!0,centered:!1,sizeEdge:c>4?15:25,zoom:1.5,...i}},Bt=e=>{if(e===4)return{Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1]};if(e===5)return{Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1]};if(e===6)return{Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(e===7)return{Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(e===8)return{Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(e===9)return{Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},G=[{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:4})," Tesseract"]}),params:h([4,3,3],[1,0,0,0],null,{drawVertex:!0,sizeVertex:40,drawFace:!0,curve:!0,ambiance:"neon",zoom:4.2})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",dimensions:3})," 7-3-2 tiling"]}),params:N([7,3],[1,0,0],null,{drawVertex:!1,drawFace:!0,curve:!0,ambiance:"neon"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:3})," Ideal triangles"]}),params:N([[1,0,0],[0,1,0],[0,0,1]],[0,0,0],null,{drawVertex:!1,drawFace:!0,curve:!0,easing:"quintic",ambiance:"neon",centered:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",dimensions:4})," Inverted honeycomb"]}),params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{projection4:"inverted",ambiance:"disco",zoom:3})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:8})," E6 (1",r.jsx("sub",{children:"22"}),")"]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0],null,{sizeVertex:25,sizeEdge:15,ambiance:"colorful",drawVertex:!0,projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:8})," E8 (4",r.jsx("sub",{children:"21"}),")"]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1],null,{sizeVertex:20,sizeEdge:6,curve:!1,ambiance:"neon",drawVertex:!0,projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",projection7:"orthographic",projection8:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal tetrahedron"]}),params:N([3,3,6],[1,0,0,""],null,{drawVertex:!1,drawFace:!0,curve:!0,centered:!0,easing:"quartic",ambiance:"pure"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Horoball"]}),params:N([6,3,4],[1,0,0,""],null,{drawVertex:!1,drawFace:!0,curve:!0,centered:!1,ambiance:"colorful"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",dimensions:4})," 5-3-4 honeycomb"]}),params:b([5,3,4],[1,0,0,0],null,{zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"lorentzian",level:2,dimensions:4})," ","7-3-3 paracompact honeycomb"]}),params:b([7,3,3],[1,0,0,0],null,{zoom:1.5,drawFace:!0,drawVertex:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Pentahedron"]}),params:N([5,3,6],[1,0,0,""],null,{drawVertex:!1,drawFace:!0,curve:!0,centered:!0,easing:"quartic",ambiance:"pure",zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:4})," Flat Torus"]}),params:h([32,2,32],[1,0,0,1],null,{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",zoom:3,sizeEdge:10})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:5})," Tesseract stack"]}),params:h([[1,2,2,2,0],[2,1,2,2,2],[2,2,1,2,2],[2,2,2,1,2],[0,2,2,2,1]],[1,1,1,1,0],null,{drawVertex:!1,drawFace:!0,ambiance:"neon",sizeEdge:20,projection4:"sterographic"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"superhyperbolic",dimensions:4})," ","Ultrahyperbolic surface (Anti-de Sitter Ads3)"]}),params:h([-1,2,-1],[1,0,0,1],null,{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,sizeEdge:15,zoom:1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"superhyperbolic",dimensions:5})," ","Ultrahyperbolic honeycomb (Anti-de Sitter Ads4)"]}),params:h([-1,3,3,-1],[1,0,0,0,1],null,{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,zoom:2})},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite"})," Spherical space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Tetrahedron",params:h([3,3]),subforms:[{name:"Truncated Tetrahedron",params:h([3,3],[1,1,0])}]},{name:"Cube",params:h([4,3]),subforms:[{name:"Cuboctahedron",params:h([4,3],[0,1,0])},{name:"Truncated Cube",params:h([4,3],[1,1,0])},{name:"Rhombicuboctahedron",params:h([4,3],[1,0,1])},{name:"Truncated Octahedron",params:h([3,4],[1,1,0])},{name:"Truncated Cuboctahedron",params:h([4,3],[1,1,1])},{name:"Octahedron",params:h([3,4])}]},{name:"Dodecahedron",params:h([5,3]),subforms:[{name:"Icosidodecahedron",params:h([5,3],[0,1,0])},{name:"Truncate Dodecahedron",params:h([5,3],[1,1,0])},{name:"Rhombicosidodecahedron",params:h([5,3],[1,0,1])},{name:"Truncate Icosahedron",params:h([3,5],[1,1,0])},{name:"Truncated Icosidodecahedron",params:h([5,3],[1,1,1])},{name:"Icosahedron",params:h([3,5])}]},{name:"Snub Cube",params:h([4,3],["s","s","s"])},{name:"Snub Dodecahedron",params:h([5,3],["s","s","s"])},{name:"Great Dodecahedron",params:h([5,5],[1,0,0],[1,2])},{name:"Great Icosahedron",params:h([3,5],[1,0,0],[1,2])},{name:"Small Stellated Dodecahedron",params:h([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:h([5,3],[1,0,0],[2,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:4})," Polychora"]})},O({name:"5-cell",params:h([3,3,3])}),O({name:"8-cell",params:h([4,3,3])}),O({name:"16-cell",params:h([3,3,4])}),O({name:"24-cell",params:h([3,4,3])}),O({name:"120-cell",params:h([5,3,3])}),O({name:"600-cell",params:h([3,3,5])}),{name:"Snub 24-cell",params:h([[1,3,2,2],[3,1,3,3],[2,3,1,2],[2,3,2,1]],["s","s","s","s"])},{name:"Icosahedral 120-cell",params:h([3,5,5],[1,0,0,0],[1,1,2],{curve:!1}),subforms:[{name:"Small stellated 120-cell",params:h([3,5,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Great 120-cell",params:h([5,5,5],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Grand 120-cell",params:h([5,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{name:"Great stellated 120-cell",params:h([5,3,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Grand stellated 120-cell",params:h([5,5,5],[1,0,0,0],[2,1,2],{curve:!1})},{name:"Great grand 120-cell",params:h([5,5,3],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Great icosahedral 120-cell",params:h([5,5,3],[0,0,0,1],[1,2,1],{curve:!1})},{name:"Great grand stellated 120-cell",params:h([5,3,3],[1,0,0,0],[2,1,1],{curve:!1})}]},{name:"Grand 600-cell",params:h([3,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:5})," Polytera"]})},O({name:"5-simplex",params:h([3,3,3,3])}),O({name:"5-cube",params:h([4,3,3,3])}),O({name:"5-orthoplex",params:h([3,3,3,4])}),O({name:"5-demicube",params:h([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]])}),{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:6})," Polypeta"]})},O({name:"6-simplex",params:h([3,3,3,3,3])}),O({name:"6-cube",params:h([4,3,3,3,3])}),O({name:"6-orthoplex",params:h([3,3,3,3,4])}),O({name:"6-demicube",params:h([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"22"})]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:7})," Polyexa"]})},O({name:"7-simplex",params:h([3,3,3,3,3,3])}),O({name:"7-cube",params:h([4,3,3,3,3,3])}),O({name:"7-orthoplex",params:h([3,3,3,3,3,4])}),O({name:"7-demicube",params:h([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"31"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"32"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:8})," Polyzetta"]})},O({name:"8-simplex",params:h([3,3,3,3,3,3,3])}),O({name:"8-cube",params:h([4,3,3,3,3,3,3])}),O({name:"8-orthoplex",params:h([3,3,3,3,3,3,4])}),O({name:"8-demicube",params:h([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"42"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"41"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["4",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:9}),"Polyyotta"]})},O({name:"9-simplex",params:h([3,3,3,3,3,3,3,3])}),O({name:"9-cube",params:h([4,3,3,3,3,3,3,3])}),O({name:"9-orthoplex",params:h([3,3,3,3,3,3,3,4])}),O({name:"9-demicube",params:h([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]])}),{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine"})," Euclidean space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:h([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:h([4,4],[1,0,0])},{name:"Hexagonal",params:h([6,3],[1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:j([4,3,4],[1,0,0,0])},{name:"Octet",params:j([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter cubic",params:j([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:j([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:j([3,3,4,3],[1,0,0,0,0],null,{})},{name:"24-cellic",params:j([3,4,3,3],[1,0,0,0,0],null,{})},{name:"4-simpletic",params:j([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0])},{name:"Quarter tesseractic",params:j([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:6})," 5-Honeycombs"]})},{name:"5-simplex",params:j([[1,3,2,2,2,3],[3,1,3,2,2,2],[2,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[3,2,2,2,3,1]],[1,0,0,0,0,0])},{name:"5-cubic",params:j([4,3,3,3,4],[1,0,0,0,0,0])},{name:"5-demicubic",params:j([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,4],[2,2,2,2,4,1]],[1,0,0,0,0,0])},{name:"Quarter 5-cubic",params:j([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,3],[2,2,2,3,1,2],[2,2,2,3,2,1]],[1,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:7})," 6-Honeycombs"]})},{name:"6-simplex",params:j([[1,3,2,2,2,2,3],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[3,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:"6-cubic",params:j([4,3,3,3,3,4],[1,0,0,0,0,0,0])},{name:"6-demicubic",params:j([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,4],[2,2,2,2,2,4,1]],[1,0,0,0,0,0,0])},{name:"Quarter 6-cubic",params:j([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,3],[2,2,2,2,3,1,2],[2,2,2,2,3,2,1]],[1,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"22"})]}),params:j([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,3,2],[2,2,3,1,3,2,2],[2,2,2,3,1,2,2],[2,2,3,2,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:8})," 7-Honeycombs"]})},{name:"7-simplex",params:j([[1,3,2,2,2,2,2,3],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[3,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:"7-cubic",params:j([4,3,3,3,3,3,4],[1,0,0,0,0,0,0,0])},{name:"7-demicubic",params:j([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,4],[2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0])},{name:"Quarter 7-cubic",params:j([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,3,3,1,3,2,2],[2,2,2,2,3,1,3,3],[2,2,2,2,2,3,1,2],[2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"33"})]}),params:j([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,1,0,0,0])},{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"31"})]}),params:j([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:9})," 8-Honeycombs"]})},{name:"8-simplex",params:j([[1,3,2,2,2,2,2,2,3],[3,1,3,2,2,2,2,2,2],[2,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[3,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:"8-cubic",params:j([4,3,3,3,3,3,3,4],[1,0,0,0,0,0,0,0,0])},{name:"8-demicubic",params:j([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,4],[2,2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0,0])},{name:"Quarter 8-cubic",params:j([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,3],[2,2,2,2,2,2,3,1,2],[2,2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"52"})]}),params:j([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"51"})]}),params:j([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["5",r.jsx("sub",{children:"21"})]}),params:j([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,0,1])},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic"})," Hyperbolic space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",dimensions:3})," Tilings"]})},{name:"Order-7 triangular",params:N([3,7],[1,0,0])},{name:"Order-8 triangular",params:N([3,8],[1,0,0])},{name:"Infinite Order triangular",params:N([3,0],[1,0,0],null,{easing:"quintic"})},{name:"Order-5 square",params:N([4,5],[1,0,0])},{name:"Order-6 square",params:N([4,6],[1,0,0])},{name:"Order-7 square",params:N([4,7],[1,0,0])},{name:"Order-8 square",params:N([4,8],[1,0,0])},{name:"Infinite Order square",params:N([4,0],[1,0,0])},{name:"Order-4 pentagonal",params:N([5,4],[1,0,0])},{name:"Order-5 pentagonal",params:N([5,5],[1,0,0])},{name:"Order-6 pentagonal",params:N([5,6],[1,0,0])},{name:"Order-7 pentagonal",params:N([5,7],[1,0,0])},{name:"Order-8 pentagonal",params:N([5,8],[1,0,0])},{name:"Infinite Order pentagonal",params:N([5,0],[1,0,0])},{name:"Order-4 hexagonal",params:N([6,4],[1,0,0])},{name:"Order-5 hexagonal",params:N([6,5],[1,0,0])},{name:"Order-6 hexagonal",params:N([6,6],[1,0,0])},{name:"Order-7 hexagonal",params:N([6,7],[1,0,0])},{name:"Order-8 hexagonal",params:N([6,8],[1,0,0])},{name:"Infinite Order hexagonal",params:N([6,0],[1,0,0])},{name:"Order-3 heptagonal",params:N([7,3],[1,0,0])},{name:"Order-4 heptagonal",params:N([7,4],[1,0,0])},{name:"Order-5 heptagonal",params:N([7,5],[1,0,0])},{name:"Order-6 heptagonal",params:N([7,6],[1,0,0])},{name:"Order-7 heptagonal",params:N([7,7],[1,0,0])},{name:"Order-8 heptagonal",params:N([7,8],[1,0,0])},{name:"Infinite Order heptagonal",params:N([7,0],[1,0,0])},{name:"Order-3 octagonal",params:N([8,3],[1,0,0])},{name:"Order-4 octagonal",params:N([8,4],[1,0,0])},{name:"Order-5 octagonal",params:N([8,5],[1,0,0])},{name:"Order-6 octagonal",params:N([8,6],[1,0,0])},{name:"Order-7 octagonal",params:N([8,7],[1,0,0])},{name:"Order-8 octagonal",params:N([8,8],[1,0,0])},{name:"Infinite Order octagonal",params:N([8,0],[1,0,0])},{name:"Order-3 apeirogonal",params:N([0,3],[1,0,0])},{name:"Order-4 apeirogonal",params:N([0,4],[1,0,0])},{name:"Order-5 apeirogonal",params:N([0,5],[1,0,0])},{name:"Order-6 apeirogonal",params:N([0,6],[1,0,0])},{name:"Order-7 apeirogonal",params:N([0,7],[1,0,0])},{name:"Order-8 apeirogonal",params:N([0,8],[1,0,0])},{name:"Infinite Order apeirogonal",params:N([0,0],[1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"compact",dimensions:4})," Compact Hyperbolic Honeycombs"]})},{name:"Icosahedral",params:b([3,5,3],[1,0,0,0])},{name:"Order-4 dodecahedral",params:b([5,3,4],[1,0,0,0])},{name:"Order-5 dodecahedral",params:b([5,3,5],[1,0,0,0],null,{})},{name:"Alternated Order-5 cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral cubic",params:b([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],null,{})},{name:"Tetrahedral dodecahedral",params:b([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],null,{})},{name:"Cubic octahedral",params:b([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],null,{})},{name:"Octahedral Dodcahedral",params:b([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],null,{})},{name:"Octahedral Icosahedral",params:b([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],null,{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Paracompact Hyperbolic Honeycombs"]})},{name:"Triangular",params:b([3,6,3],[1,0,0,0],null,{easing:"quintic"})},{name:"Hexagonal",params:b([6,3,3],[1,0,0,0],null,{})},{name:"Order-6 tetrahedral",params:b([3,3,6],[1,0,0,0],null,{easing:"quintic"})},{name:"Alternated Order-6 cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],null,{easing:"quintic"})},{name:"Order-5 hexagonal",params:b([6,3,5],[1,0,0,0],null,{})},{name:"Alternated Order-5 hexagonal",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{})},{name:"Order-6 hexagonal",params:b([6,3,6],[0,0,0,1],null,{easing:"quintic"})},{name:"Square",params:b([4,4,3],[1,0,0,0],null,{})},{name:"Alternated square",params:b([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],null,{})},{name:"Order-4 square",params:b([4,4,4],[0,1,0,0],null,{})},{name:"Tetrahedral square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],null,{})},{name:"Cubic square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],null,{})},{name:"Quarter order square",params:b([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],null,{easing:"quintic"})},{name:"Tetrahedral Hexagonal",params:b([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],null,{})},{name:"Octahedral Hexagonal",params:b([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],null,{})},{name:"Icosahedral Hexagonal",params:b([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],null,{})},{name:"Hexagonal Triangular",params:b([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[0,0,0,1],null,{easing:"quintic"})},{name:"Alternated Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],null,{})},{name:"Alternated Order-4 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],null,{})},{name:"Alternated Order-5 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{})},{name:"Runcic Order-6 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],null,{})},{name:"Quarter Order-4 hexagonal",params:b([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],null,{})},{name:"Hexagonal",params:b([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],null,{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"lorentzian",level:2,dimensions:4})," ","Level-2 Lorentzian Hyperbolic Honeycombs"]})},{name:"3-3-7",params:b([3,3,7],[1,0,0,0],null,{})},{name:"3-4-7",params:b([3,3,7],[1,0,0,0],null,{})},{name:"3-5-7",params:b([3,5,7],[1,0,0,0],null,{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",dimensions:5})," Compact Hyperbolic 4-Honeycombs"]})},{name:"Order-5 5-cell",params:b([3,3,3,5],[1,0,0,0,0])},{name:"120-cell",params:b([5,3,3,3],[1,0,0,0,0])},{name:"Order-5 tesseratic",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-4 120-cell",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-5 120-cell",params:b([5,3,3,5],[1,0,0,0,0])},{name:"Small stellated 120-cell",params:b([5,5,3,3],[1,0,0,0,0],[2,1,1,1])},{name:"Pentagrammic-order 600-cell",params:b([3,3,5,5],[1,0,0,0,0],[1,1,1,2])},{name:"Order-5 icosahedral 120-cell",params:b([3,5,5,5],[1,0,0,0,0],[1,1,2,1])},{name:"Great 120-cell",params:b([5,5,5,3],[1,0,0,0,0],[1,2,1,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:5})," ","Paracompact Hyperbolic 4-Honeycombs"]})},{name:"Order-4 24-cell",params:b([3,4,3,4],[1,0,0,0,0],null,{easing:"quintic"})},{name:"Cubic honeycomb",params:b([4,3,4,3],[1,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:6})," ","Paracompact Hyperbolic 5-Honeycombs"]})},{name:"5-orthoplex",params:b([3,3,3,4,3],[1,0,0,0,0,0],null,{easing:"quintic"})},{name:"24-cell honeycomb",params:b([3,4,3,3,3],[1,0,0,0,0,0])},{name:"16-cell honeycomb",params:b([3,3,4,3,3],[1,0,0,0,0,0],null,{easing:"quintic"})},{name:"Order-4 24-cell honeycomb",params:b([3,4,3,3,4],[1,0,0,0,0,0],null,{easing:"quintic"})},{name:"Tesseratic honeycomb",params:b([4,3,3,4,3],[1,0,0,0,0,0],null,{easing:"quintic"})}],Se=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(Se).join("");if(typeof e=="object"&&e)return Se(e.props.children)},Fe=(e,t)=>typeof e=="string"?Se(e).toLowerCase().includes(t.toLowerCase()):!1,Ht=g.memo(function e({name:t,index:n,params:i,search:a,subforms:c=[],sub:o=!1,onPreset:l}){const[f,u]=g.useState(!0),[s,d]=g.useState(!1);return g.useEffect(()=>{if(!a){u(!0),d(!1);return}if(Fe(t,a)){u(!0);return}if(c.length&&c.some(({name:p})=>Fe(p,a))){u(!0),d(!0);return}u(!1),d(!1)},[t,a,c]),f?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`preset${o?" sub":""}`,onClick:()=>l(i,n),children:[r.jsxs("div",{className:`preset-header preset-name-${c.length?"button":"only"}`,children:[c.length?r.jsx("button",{className:`preset-toggle ${s?"open":"closed"}`,onClick:p=>{p.stopPropagation(),d(!s)},children:s?"-":"+"}):null,r.jsx("span",{className:"preset-name",children:t})]}),r.jsx(Be,{coxeter:i.coxeter,mirrors:i.mirrors,stellation:i.stellation})]}),s&&c.map((p,m)=>r.jsx(e,{...p,sub:!0,search:a,onPreset:l},m))]}):null});function Vt({open:e,onPreset:t,onExportImage:n,closePresets:i}){const[a,c]=g.useState(""),[o,l]=g.useState(""),f=g.useCallback(u=>{l(u.target.value),fn(c(u.target.value),50)},[]);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`presets-overlay ${e?"shown":"hidden"}`,onClick:i}),r.jsx("div",{className:`presets ${e?"shown":"hidden"}`,children:r.jsxs("div",{className:"presets-modal",children:[r.jsxs("div",{className:"presets-header",children:[r.jsxs("div",{className:"presets-search",children:[r.jsx("input",{type:"text",placeholder:"Search",value:o,onChange:f}),r.jsx("button",{className:"presets-clear",onClick:()=>{c(""),l("")},children:Ft})]}),r.jsxs("div",{className:"presets-actions",children:[r.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:Ct}),r.jsx("button",{className:"presets-action",onClick:n,children:Dt}),r.jsx("button",{className:"presets-action",onClick:i,children:zt})]})]}),r.jsx("div",{className:"presets-list",children:G.map(({type:u,content:s,name:d,params:p,subforms:m},v)=>r.jsx(g.Fragment,{children:u==="title"?r.jsx("h2",{children:s}):u==="group"?r.jsx("h4",{children:s}):r.jsx(Ht,{name:d,index:v,params:p,search:a,subforms:m,onPreset:t})},v))})]})})]})}const Ce=g.memo(function({rotations:t,space:n,axis:i}){if(!n)return null;const a=n.gram.length,c=t.shift*2+i;if(c>=t.combinations.length)return null;let o=t.combinations[c];const l=o.some(s=>s<0)?"parabolic":o.some(s=>n.eigens.values[s]<0)?"hyperbolic":o.some(s=>n.eigens.values[s]===0)?"translation":"spheric",f=xn.slice(0,a).split(""),u=l==="parabolic"?o.map(s=>f[V(s)]).join("->"):f.filter((s,d)=>!o.includes(d));return r.jsxs("aside",{className:`${i?"y":"x"}-rotation`,children:[u,l==="parabolic"?r.jsx("sup",{children:"∞"}):l==="hyperbolic"?r.jsx("sup",{children:"†"}):l==="translation"?r.jsx("sup",{children:"0"}):""]})}),Gt=e=>e<4?[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7 2m12 9H5v2h14z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})})][e]:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9"}),r.jsx("text",{x:"12",y:"13.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",children:e})]});function qt({runtime:e,setRuntime:t,showUI:n,updateParams:i}){const a=g.useCallback(()=>{e.paused&&e.polytope.size>e.limit&&i({limit:e.limit+e.start}),t(s=>({...s,paused:!s.paused}))},[e.paused,e.polytope.size,e.limit,e.start,t,i]),c=g.useCallback(s=>{const p=s.target.closest("button").dataset.key.split(","),m=!p.some(E=>e.hidden.includes(E)),v=e.hidden.filter(E=>!p.includes(E));i({hidden:m?[...v,...p]:v})},[e.hidden,i]),o=g.useCallback(s=>{const d=+s.target.closest("button").dataset.key;i({reciprocation:d})},[i]),l=e.polytope.every(s=>s.detail.length<2),f=s=>isFinite(s)?s.toLocaleString():"∞";if(n==="empty")return null;const u=n==="full"?"detail":"aggregated";return r.jsxs("aside",{className:"shape",children:[e.processing?r.jsx("div",{className:"buttons",children:e.paused?r.jsx("button",{className:"iterate button",onClick:a,title:"Resume enumeration",children:Pt}):r.jsx("button",{className:"iterate button",onClick:a,title:"Pause enumeration",children:Mt})}):null,r.jsx("div",{className:`shape-info${e.processing&&!e.paused?" shape-processing":""}${["advanced","full"].includes(n)?" shape-info-expanded":""}`,children:[...e.polytope].reverse().filter(s=>s).map(s=>r.jsxs(g.Fragment,{children:[r.jsxs("div",{className:"shape-icon",style:{gridRow:`span ${s[u].length}`},children:[Gt(s.dimensions),s.dual&&!e.curve?r.jsx("button",{className:"shape-reciprocation button","data-key":e.reciprocation===s.dimensions?-1:s.dimensions,onClick:o,children:e.reciprocation===s.dimensions?Xe:Ye}):null]}),r.jsxs("div",{className:"shape-count",style:{gridRow:`span ${s[u].length}`},children:[s.done||s.processing===void 0?null:`${s.processing} / `,f(s.count)]}),r.jsx("div",{className:s.dimensions>0&&["advanced","full"].includes(n)&&s[u].length>1?" shape-split":"",style:{gridRow:`span ${s[u].length}`}}),["advanced","full"].includes(n)?s[u].map(({count:d,coxeter:p,stellation:m,mirrors:v,key:E})=>r.jsxs(g.Fragment,{children:[r.jsx("div",{className:"shape-count shape-detail-count",title:E,children:!l&&s[u].length>1?f(d):null}),r.jsxs("div",{children:[[1,2].includes(s.dimensions)?r.jsx("button",{className:"shape-hidden button","data-key":E,title:E,onClick:c,children:E.split(",").some(A=>e.hidden.includes(A))?Lt:_t}):null,r.jsx("button",{className:"shape-detail-button",disabled:p.length<2,onClick:()=>i({coxeter:p,stellation:m,mirrors:v,dimensions:p.length,matrix:J(p.length)}),children:r.jsx(Be,{coxeter:p,stellation:m,mirrors:v})})]})]},E)):null]},`shape-${s.dimensions}`))})]})}const $t=()=>{try{return localStorage.getItem("showUI")||"simple"}catch(e){return console.error(e),"simple"}};function Jt({runtime:e,params:t,rotations:n,setRuntime:i,updateParams:a,updateRotations:c}){var ne;const[o,l]=g.useState($t),[f,u]=g.useState(!1),[s,d]=g.useState(0),p=g.useCallback(()=>{u(!1)},[]),m=g.useCallback(x=>{let{name:y,value:T}=x.target;a({[y]:T})},[a]),v=g.useCallback((x,y)=>{a({[x]:y})},[a]),E=g.useCallback(()=>l(x=>{const y={simple:"advanced",advanced:"full",full:"empty",empty:"simple"}[x];try{localStorage.setItem("showUI",y)}catch(T){console.error(T)}return y}),[]),A=g.useCallback((x,y)=>{a(x,!0),d(y),p()},[a,p]),w=g.useCallback(()=>{const x=J(e.dimensions);x._reset=!0,a({matrix:x,centered:!0})},[a,e.dimensions]),R=g.useCallback(()=>{const x=J(e.dimensions);x._reset=!0,a({matrix:x,centered:!1})},[a,e.dimensions]),I=g.useCallback(()=>{a(Object.fromEntries(q(3,e.dimensions+1).map(x=>[[`projection${x}`,"orthographic"],[`fov${x}`,90]]).flat()))},[a,e.dimensions]),F=g.useCallback(()=>{a(Object.fromEntries(q(3,e.dimensions+1).map(x=>[`projection${x}`,Ne(x,e.dimensions)])))},[a,e.dimensions]),_=g.useCallback(x=>{c("shift",(n.shift+1)%n.maxShift)},[n.maxShift,n.shift,c]),M=g.useCallback(x=>{c("lock",!n.lock)},[n.lock,c]),Y=g.useCallback(x=>{c("auto",n.auto==="free"?"damp":"free")},[n.auto,c]),D=g.useCallback(async()=>{p();const x=window.prompt("Select image resolution","5000x5000");if(!x||!x.includes("x")){console.error("Invalid resolution");return}const[y,T]=x.split("x").map(H=>parseInt(H));if(isNaN(y)||isNaN(T)){console.error("Invalid resolution");return}const ye=await(await wt(()=>import("./export-d0980c42.js"),["./export-d0980c42.js","./CoxeterDiagram-a6109f30.js"],import.meta.url)).makeBigPng(e,y,T);if(ye){const H=document.createElement("a");document.body.appendChild(H),H.style.display="none";const en=window.URL.createObjectURL(ye);H.href=en,H.download=`${document.title}-${y}x${T}`,H.click()}},[p,e]),z=g.useMemo(()=>({square:q(3,e.dimensions+1).some(x=>t[`projection${x}`]!=="orthographic"),cube:q(3,e.dimensions+1).some(x=>t[`projection${x}`]!==Ne(x,e.dimensions))}),[t.projection3,t.projection4,t.projection5,t.projection6,t.projection7,t.projection8,t.projection9,e.dimensions]);return g.useEffect(()=>{const x=y=>{if(y.key==="ArrowLeft"&&y.ctrlKey&&s>0){let T=s-1;for(;G[T].type;){if(T<2)return;T--}A(G[T].params,T)}else if(y.key==="ArrowRight"&&y.ctrlKey&&s<G.length-1){let T=s+1;for(;G[T].type;){if(T>G.length-2)return;T++}A(G[T].params,T)}};return window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[A,s]),r.jsxs(r.Fragment,{children:[r.jsx(Vt,{open:f,onPreset:A,onExportImage:D,closePresets:p}),r.jsxs("main",{className:e.error?"error ui":"ui",title:e.error,children:[r.jsxs("div",{className:"ui-row ui-row-top",children:[["simple","advanced","full"].includes(o)?r.jsxs("aside",{className:"controls",children:[r.jsxs("button",{className:"rotation-button button",onClick:_,title:"Rotation Mode",children:[r.jsx("div",{className:"rotation",style:{transform:`rotate(${n.shift/n.maxShift*360}deg)`},children:yt}),r.jsx("sup",{children:n.shift+1}),r.jsx(Ce,{rotations:n,space:e.space,axis:0}),r.jsx(Ce,{rotations:n,space:e.space,axis:1})]}),r.jsxs("div",{className:"subcontrols",children:[r.jsx("button",{className:"button",onClick:M,children:n.lock?Ot:At}),r.jsx("button",{className:"button anim-view",onClick:Y,title:"Animate rotations",children:n.auto==="free"?St:n.auto==="damp"?It:"?"}),r.jsx("button",{className:"button",onClick:w,title:"Center View",children:Ye}),r.jsx("button",{className:"button",onClick:R,title:"Coxeter View",children:Xe}),["advanced","full"].includes(o)?r.jsxs(r.Fragment,{children:[z.square&&r.jsx("button",{className:"button",onClick:I,title:"Orthographic",children:Rt}),z.cube&&r.jsx("button",{className:"button",onClick:F,title:"Stereographic",children:Tt})]}):null]})]}):null,["simple","advanced","full"].includes(o)&&r.jsx(dn,{dimensions:t.dimensions,coxeter:t.coxeter,mirrors:t.mirrors,stellation:t.stellation,extended:t.extended,onChange:v})]}),r.jsxs("div",{className:"ui-row ui-row-middle",children:[r.jsx(qt,{runtime:e,setRuntime:i,showUI:o,updateParams:a}),["advanced","full"].includes(o)&&r.jsxs("aside",{className:"view",children:[r.jsx(L,{name:"msaaSamples",label:"MSAA",min:0,step:1,max:se.msaaSamples,value:t.msaaSamples,toggler:t.msaa,togglerName:"msaa",onChange:v}),r.jsx("div",{className:"projection",children:r.jsxs("label",{className:"number-label",children:[r.jsx("span",{className:"number-label",children:"Detail"}),r.jsxs("label",{className:"boolean-label",children:[r.jsx(xe,{name:"adaptative",value:t.adaptative,onChange:v}),"Auto"]}),r.jsx("select",{name:"detail",value:e.detail,onChange:x=>i(y=>({...y,detail:x.target.value})),children:K.map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,y=>y.toUpperCase())},x))})]})}),o==="full"&&r.jsx(L,{name:"subsampling",label:"subsampling",min:.1,step:.1,value:t.subsampling,onChange:v}),t.dimensions>=3?q(3,t.dimensions+1).map(x=>r.jsxs("div",{className:"projection",children:[o==="full"&&r.jsx(L,{label:`${x}D FOV`,name:`fov${x}`,step:1,value:t[`fov${x}`],onChange:v}),r.jsxs("label",{className:"number",children:[r.jsxs("span",{className:"number-label",children:[x,"D Projection"]}),r.jsx("select",{name:`projection${x}`,value:t[`projection${x}`],onChange:m,children:[...He.filter((y,T)=>{var fe;return x===3&&e.dimensions===3&&((fe=e.space)==null?void 0:fe.curvature)<0||T<8})].map(y=>r.jsx("option",{value:y,children:y.replace(/_/g," ").replace(/./,T=>T.toUpperCase())},y))})]})]},x)):null]})]}),r.jsxs("div",{className:"ui-row ui-row-bottom",children:[["simple","advanced","full"].includes(o)?r.jsx("button",{className:"preset-button button",onClick:()=>u(x=>!x),title:"Presets",children:jt}):null,["advanced","full"].includes(o)&&r.jsxs("aside",{className:"parameters",children:[(ne=e.space)!=null&&ne.curvature?r.jsxs("label",{className:"boolean-label",children:["Normalize",r.jsx(xe,{name:"curve",value:t.curve,onChange:v})]}):null,r.jsx(L,{name:"sizeVertex",label:"Vertices",min:0,step:1,value:t.sizeVertex,toggler:t.drawVertex,togglerName:"drawVertex",onChange:v}),r.jsx(L,{name:"sizeEdge",label:"Edges",min:0,step:1,value:t.sizeEdge,toggler:t.drawEdge,togglerName:"drawEdge",onChange:v}),r.jsxs("label",{className:"boolean-label",children:["Faces",r.jsx(xe,{name:"drawFace",value:t.drawFace,onChange:v})]}),r.jsxs("label",{className:"select-label",children:["Ambiance",r.jsx("select",{name:"ambiance",value:t.ambiance,onChange:m,children:(o==="full"?Object.keys(X):Object.entries(X).filter(([x,{extended:y}])=>!y||x===t.ambiance).map(([x])=>x)).map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,y=>y.toUpperCase())},x))})]}),window.location.search.includes("debug")&&o==="full"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{className:"select-label",children:["Easing",r.jsx("select",{name:"easing",value:t.easing,onChange:m,children:Ve.map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/\b./g,y=>y.toUpperCase())},x))})]}),r.jsx(L,{name:"start",label:"Start",min:0,step:1,value:t.start,onChange:v}),r.jsx(L,{name:"limit",label:"Limit",min:0,step:1,value:t.limit,onChange:v}),r.jsx(L,{name:"batch",label:"Batch",min:0,step:1,value:t.batch,onChange:v})]})]}),o==="empty"?r.jsx("div",{className:"spacer"}):null,r.jsx("button",{className:`space-button button${e.processing&&!e.paused?" processing":""}${o==="empty"?" empty":""}`,onClick:E,children:r.jsx(S,{...e.space||{},dimensions:e.dimensions})})]})]})]})}function Kt({params:e,updateParams:t}){const[n,i]=g.useState({...e,space:null,shape:null,processing:!0,detail:"medium",iteration:0,polytope:[],shaper:null,paused:!1,error:null});g.useEffect(()=>{i(l=>{try{return l.gl?l:st(l)}catch(f){return console.error(f),{...l,error:f.message}}})},[n.gl]);const[a,c]=g.useState({shift:0,maxShift:0,combinations:[],auto:"damp",lock:!1});g.useEffect(()=>{i(l=>({...l,...ce(e).params}))},[e]),g.useEffect(()=>{n.space&&c(l=>({...l,shift:0,...vn(e.dimensions,n.space)}))},[e.dimensions,n.space]);const o=g.useCallback((l,f)=>{c(u=>({...u,[l]:f}))},[c]);return n.gl?r.jsxs(r.Fragment,{children:[r.jsx(Jt,{runtime:n,params:e,rotations:a,setRuntime:i,updateRotations:o,updateParams:t}),r.jsx(bt,{runtime:n,rotations:a,setRuntime:i,updateRotations:o,updateParams:t})]}):null}const Wt=e=>{const t=e.toUpperCase();return e===t?e.toLowerCase():t},P=(e,t)=>{let n=t,i=0;for(;e.quotientMap[n];)i++,n=e.quotientMap[n];return i>1&&(e.quotientMap[t]=n),n},Ze=(e,t,n)=>{const i=t,a=[[t,n]];for(;a.length>0;)if([t,n]=a.pop(),t>n&&([t,n]=[n,t]),t=P(e,t),n=P(e,n),t!==n){e.quotientMap[n]=t,e.seen.has(n)&&!e.seen.has(t)&&e.seen.add(t);const c=e.cosets.get(t),o=e.cosets.get(n);e.cosets.delete(n);for(const[l,f]of o)c.has(l)?a.push([c.get(l),f]):c.set(l,f)}return P(e,i)},De=(e,t,n,i)=>{t=P(e,t);const a=e.cosets.get(t);a.has(n)?Ze(e,a.get(n),i):a.set(n,i)},ue=(e,t,n,i)=>{t=P(e,t);let a;const c=e.cosets.get(t);return c.has(n)?(a=P(e,c.get(n)),i!==void 0&&a!==i&&Ze(e,i,a)):(i?a=i:(a=e.nextVertex++,e.cosets.set(a,new Map),e.unvisited.push(a)),De(e,t,n,a),De(e,a,Wt(n),t)),a},ze=function(e,t,n){let i=n;for(let a=t.length-1;a>0;a--)i=ue(e,i,t[a]);ue(e,i,t[0],n)},Xt=function(e){if(!e.words){const t=P(e,1);e.words=new Map,e.words.set(t,""),e.currentWords=new Map,e.currentWords.set(t,""),e.lastCoset=t,e.remaining=[t],e.rootVertex&&e.rootNormals&&e.metric&&(e.vertices=new Map,e.vertices.set(t,e.rootVertex))}for(;e.remaining.length>0;){const t=e.remaining[0],n=P(e,t),i=e.cosets.get(n),a=e.words.get(n);if(i.size<e.gens.length*2)return;const c=[];for(let o=0;o<e.gens.length;o++){const l=e.gens[o],f=P(e,i.get(l));if(!e.words.has(f)){if(e.cosets.get(f).size<e.gens.length*2)return;c.push([l,f])}}e.remaining.shift();for(let o=0;o<c.length;o++){const[l,f]=c[o],u=l+a;if(e.words.set(f,u),e.currentWords.set(f,u),e.lastCoset=f,e.remaining.push(f),e.vertices){let s=e.vertices.get(n);for(let d=0;d<e.transforms[l].length;d++){const p=e.transforms[l][d];s=mn(s,e.rootNormals[p],e.metric)}e.vertices.set(f,s)}}}},Yt=e=>{if(e.cosets)e.unvisited.splice(0,e.pointer),e.pointer=0;else{e.unvisited=[1],e.pointer=0,e.cosets=new Map([[1,new Map]]),e.nextVertex=2,e.seen=new Set,e.quotientMap={};for(let t=0;t<e.subgens.length;t++)ze(e,e.subgens[t],1)}e.limit=e.limit||1e3,e.done=!1;for(let t=0;t<e.limit;t++){let n=null;for(;e.unvisited.length-e.pointer>0;){const i=e.unvisited[e.pointer++],a=P(e,i);if(!e.seen.has(a)){e.seen.add(a),n=a;break}}if(n===null){e.done=!0;break}for(let i=0;i<e.gens.length;i++)ue(e,n,e.gens[i].toUpperCase()),ue(e,n,e.gens[i]);for(let i=0;i<e.rels.length;i++)ze(e,e.rels[i],n)}},Qe=e=>(Yt(e),Xt(e),e),Me=()=>{const{location:e}=window;if(e.hash)try{const t=JSON.parse(atob(e.hash.slice(1)));return ce({...se,...t}).params}catch(t){console.warn(t),e.hash=""}return ce(se).params},Zt=(e,t=!1)=>{const n="#"+btoa(JSON.stringify(e));window.history[t?"replaceState":"pushState"](null,null,n)},Qt=()=>{const[e,t]=g.useState(Me()),n=g.useCallback(a=>{const c=Me();c&&(Object.entries(c).forEach(([o,l])=>{Array.isArray(l)&&Oe(l,e[o])&&(c[o]=e[o])}),t(c))},[e]),i=g.useCallback((a,c=!1)=>{t(o=>{if(!Object.entries(a).filter(([u,s])=>Array.isArray(s)&&!s._reset?!Oe(s,o[u]):o[u]!==s).length)return o;const{params:l,badParams:f}=ce(c?a:{...o,...a},c?[]:Object.keys(a),o);return f.length||Zt(l,Object.keys(a).length===1&&a.matrix),l})},[]);return g.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),r.jsx(Kt,{params:e,updateParams:i})};pn.createRoot(document.getElementById("root")).render(r.jsx(Qt,{}));window.ToddCoxeter=Qe;window.bench=()=>{const e=performance.now(),t=Qe({gens:"abcdef",subgens:"c",rels:["aa","bb","cc","dd","ee","ff","abababab","acac","bcbcbc","adad","bdbd","cdcdcd","aeae","bebe","cece","dedede","afaf","bfbf","cfcf","dfdf","efefef"],limit:1e5});return console.warn(performance.now()-e,t.words.length),t.tc};export{hn as c,W as r};
