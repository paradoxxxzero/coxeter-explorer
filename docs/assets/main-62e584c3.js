import{r as g,m as Re,a as Le,p as We,c as q,i as Y,b as X,d as B,e as je,T as Ie,s as ue,P as K,t as Xe,f as pn,g as vn,h as De,j as J,k as qe,l as Ye,n as ie,o as hn,q as gn,u as fe,v as xn,w as bn,x as En,y as wn,z as Nn,A as ke,B as Sn,C as yn,D as r,E as me,F as Te,G as Ze,H as Qe,I as jn,N as V,J as pe,K as In,L as Tn,M as On,O as _e}from"./CoxeterMatrix-fc4e0c17.js";var An=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const Dn="xyzwvutsrqponmlkjihgfedcba",en=["perspective","stereographic","orthographic","klein","inverted","scale","joukowsky","half","upperhalf","halfsphere","band","cross","heart","teardrop","square","ring","sinusoidal","spiral","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],Cn=["ads","normal","position","uv"],Fn=["lambert","oren-nayar","minnaert","cel","fresnel","reverse"],zn=["phong","blinn-phong","cook-torrance","ward-anisotropic"],Z=["lowest","lower","low","lowish","medium","highish","high","higher","ultra"],Oe=["vertex","edge","face"],Pn=(e,t)=>{const n=g.useRef({previous:null,anteprevious:null,start:null,stable:!1});g.useEffect(()=>{const o=16.666666666666668;if(e.adaptative){let a=null,i=null,s=[];const l=20,f=10,c=d=>{if(i===null){n.current.start===null&&(n.current.start=d),i=d,a=requestAnimationFrame(c);return}if(s.push(d-i),i=d,s.length>Re(l,f)&&s.shift(),s.length>=f&&s.slice(-f).reduce((h,v)=>h+v,0)/f>(n.current.stable?2.01:1.51)*o){s=[],n.current.stable=!1;const h=Z.indexOf(e.detail);if(h>1){n.current.anteprevious=n.current.previous,n.current.previous=e.detail;const v=Z[h-1];t(p=>({...p,detail:v}))}}if(s.length>=l&&s.slice(-l).reduce((h,v)=>h+v,0)/l<(n.current.stable?1.001:1.01)*o){s=[],n.current.stable=!1;const h=Z.indexOf(e.detail);if(h<Z.length-2){const v=Z[h+1];v===n.current.previous&&e.detail===n.current.anteprevious&&d-n.current.start>1e3?n.current.stable=!0:(n.current.anteprevious=n.current.previous,n.current.previous=e.detail,t(p=>({...p,detail:v})))}}a=requestAnimationFrame(c)};return a=requestAnimationFrame(c),()=>cancelAnimationFrame(a)}},[e.detail,e.adaptative,e.ambiance,e.space,t]),g.useEffect(()=>{n.current={previous:null,anteprevious:null,stable:!1,start:null}},[e.space,e.shaper,e.ambiance])};class xe extends g.Component{constructor(t){super(t),this.state={error:!1}}static getDerivedStateFromError(t){return{error:!0}}static getDerivedStateFromProps(t){return{error:t.error}}componentDidCatch(t,n){this.props.onError(t,n)}render(){return this.state.error?null:this.props.children}}var nn={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(An,function(){var n=function(){function o(v){return s.appendChild(v.dom),v}function a(v){for(var p=0;p<s.children.length;p++)s.children[p].style.display=p===v?"block":"none";i=v}var i=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(v){v.preventDefault(),a(++i%s.children.length)},!1);var l=(performance||Date).now(),f=l,c=0,d=o(new n.Panel("FPS","#0ff","#002")),m=o(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=o(new n.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:s,addPanel:o,showPanel:a,begin:function(){l=(performance||Date).now()},end:function(){c++;var v=(performance||Date).now();if(m.update(v-l,200),v>f+1e3&&(d.update(1e3*c/(v-f),100),f=v,c=0,h)){var p=performance.memory;h.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return v},update:function(){l=this.end()},domElement:s,setMode:a}};return n.Panel=function(o,a,i){var s=1/0,l=0,f=Math.round,c=f(window.devicePixelRatio||1),d=80*c,m=48*c,h=3*c,v=2*c,p=3*c,E=15*c,A=74*c,S=30*c,R=document.createElement("canvas");R.width=d,R.height=m,R.style.cssText="width:80px;height:48px";var y=R.getContext("2d");return y.font="bold "+9*c+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=i,y.fillRect(0,0,d,m),y.fillStyle=a,y.fillText(o,h,v),y.fillRect(p,E,A,S),y.fillStyle=i,y.globalAlpha=.9,y.fillRect(p,E,A,S),{dom:R,update:function(F,H){s=Math.min(s,F),l=Math.max(l,F),y.fillStyle=i,y.globalAlpha=1,y.fillRect(0,0,d,E),y.fillStyle=a,y.fillText(f(F)+" "+o+" ("+f(s)+"-"+f(l)+")",h,v),y.drawImage(R,p+c,E,A-c,S,p,E,A-c,S),y.fillRect(p+A-c,E,c,S),y.fillStyle=i,y.globalAlpha=.9,y.fillRect(p+A-c,E,c,f((1-F/H)*S))}}},n})})(nn);var Mn=nn.exports;const Ln=Rn(Mn),kn=`const vec2 cone = vec2(1., 0);
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
`,_n=`// Global vertex uniforms

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
`,Hn=`#version 300 es
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
`,Un=`#loopN2
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
`,Bn=`const float ambient = AMBIENT;
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
`,$n=`#include helpers
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
`,Vn=`#ifdef OIT
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
`,Gn=`gl_Position = viewProject(proj);

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
`,Jn=`#ifdef SHADING
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
`,be=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),z=(e,t,n)=>{let o,a,i;if(t===0)o=a=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;o=be(l,s,e+1/3),a=be(l,s,e),i=be(l,s,e-1/3)}return[o,a,i]},ce=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],Kn={background:[0,0,0,1],glow:!1,shading:"ads",diffuse:"lambert",specular:!1,shininess:32,opacity:1,ambient:.2,roughness:.85,gouraud:!1,transparency:"oit",color:({word:e})=>z(e.length*.03%1,.75,.7)},ee=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},shading:!1,face:{opacity:.025},transparency:"blend",color:({word:e,dual:t})=>z((e.length*.17-(t?.43:0))%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,diffuse:"fresnel",opacity:.025},transparency:"blend",color:({word:e})=>z(...ce[e.length%ce.length])},cathedral:{background:[.6,.6,.6,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},shading:!1,face:{opacity:.9},transparency:"oit",color:({word:e,subShape:t,type:n})=>n==="face"?z((t*.23+e.length*.07)%1,1,.58):[0,0,0]},synthwave:{background:[...z(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},shading:!1,face:{opacity:.015},afterImage:.7,transparency:"blend",color:({word:e})=>z((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e,dual:t})=>z(e.length*.03%1-(t?.25:0),1,.8)},shiny:{background:[0,0,0,1],diffuse:"lambert",specular:"blinn-phong",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>z(-(e.length*.07)%1,1,.8)},shape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({faceSize:e,type:t,idx:n,size:o})=>t==="face"?z((e-2)*.21%1,1,.8):z(n/o,.75,.5)},subShape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({subShape:e,type:t})=>t!=="vertex"?z(e*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],diffuse:"cel",face:{opacity:.6,gouraud:!1},transparency:"blend",color:({word:e,type:t,dimensions:n,draw:o})=>{const a=e.length?Le(e[e.length-1])/n:0;return z(a%1,1,t==="face"?.6:o.face?0:.8)}},harlequin:{background:[...z(240/360,.23,.09),1],face:{opacity:.6},transparency:"oit",color:({word:e,idx:t,type:n})=>{const o=e.split("").map(i=>Le(i)).reduce((i,s)=>i+s,0),a=[...ce[o%ce.length]];return t%2&&(a[2]*=.5),z(...a)}},pure:{background:[0,0,0,1],color:({word:e})=>z(e.length*.03%1,.75,.7)},facets:{background:[0,0,0,1],color:({faceIndex:e,faceSize:t})=>z((e||0)/(t||1),.75,.7)},monochrome:{background:[.12,.12,.12,1],diffuse:"reverse",ambient:0,face:{opacity:.1},transparency:"oit",color:()=>[1,1,1]},glass:{background:[0,0,0,1],transparency:"blend",opacity:.2,ambient:0,diffuse:"fresnel",specular:"blinn-phong",face:{shininess:16,diffuse:!1},color:({subShape:e,word:t,type:n})=>n!=="vertex"?z((e*.21+t.length*.03)%1,1,.8):[1,1,1]},plain:{extended:!0,background:[1,1,1,1],glow:!1,shading:!1,color:({word:e,type:t,draw:n})=>z(e.length*.06%1,1,t==="face"?.6:n.face?.05:.5)},plainblack:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e,type:t})=>t==="face"?new Array(3).fill(1-We(.9,e.length+1)):[0,0,0]},normals:{extended:!0,background:[1,1,1,1],shading:"normal",color:()=>[0,0,0]},uvs:{extended:!0,background:[1,1,1,1],shading:"uv",color:()=>[0,0,0]}}).map(([e,t])=>[e,{...Kn,...t,transparent:{}}])),Wn={globals:Hn,dimensions:_n,project:$n,helpers:Un,complex:kn,fragment:Vn,vertexouthead:Jn,lighting:Bn,vertexout:Gn},Xn=(e,t,n)=>{t=n?1:t||1,t=Math.max(0,t);const o=n?n.width:e.clientWidth*t|0,a=n?n.height:e.clientHeight*t|0;return e.width!==o||e.height!==a?(e.width=o,e.height=a,!0):!!n},Ee=(e,t)=>e.replace(/\bvecN\b/g,`vec${t}`).replace(/\bmatN\b/g,`mat${t}`).replace(/\bfovN\b/g,`fov${t}`).replace(/\bvecN_1\b/g,`vec${t-1}`).replace(/\bvec1\b/g,"float").replace(/\b_N_\b/g,`${t}`).replace(/\b_Nf_\b/g,`${t}.`).replace(/\PROJECTION_N\b/g,`PROJECTION${t}`),qn=(e,t)=>Ee(e.replace(/#loopN(\d)(.+?)#endloopN/gs,(n,o,a)=>{const i=[];for(let s=o;s<=t;s++)i.push(Ee(a.replace(/#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,(l,f,c,d,m)=>f===`${s}`?Ee(c,s):m||""),s));return i.join(`
`)}),t),He=(e,t,n,o)=>{var f;const a=ee[e.ambiance];let i="";const s=c=>c.toString().includes(".")?c:`${c}.`;Object.entries({shading:c=>Cn.indexOf(c),diffuse:c=>Fn.indexOf(c),specular:c=>zn.indexOf(c),ambient:c=>s(c),shininess:c=>s(c),roughness:c=>s(c),opacity:c=>s(c),gouraud:c=>""}).forEach(([c,d])=>{const m=Object.keys(a).includes(o)&&Object.keys(a[o]).includes(c)?a[o][c]:a[c];m!==!1&&(i+=`#define ${c.toUpperCase()} ${d(m)}
`),c==="opacity"&&m<1&&(a.transparent[o]=!0,i+=`#define TRANSPARENT
`,a.transparency==="oit"&&(i+=`#define OIT
`))}),i+=`#define DIMENSIONS ${e.dimensions}
`;for(let c=3;c<=e.dimensions;c++)i+=`#define PROJECTION${c} ${en.indexOf(e[`projection${c}`])-1}
`;return i+=`#define CURVATURE ${((f=e.space)==null?void 0:f.curvature)||0}
`,e.curve&&(i+=`#define SEGMENTS
`),Object.entries({...Wn,config:i}).forEach(([c,d])=>{t=t.replace(`#include ${c}`,d),n=n.replace(`#include ${c}`,d)}),[t,n].map(c=>qn(c,e.dimensions))},le=(e,t,n,o,a)=>{if(e.gl.shaderSource(a,o),e.gl.compileShader(a),!e.gl.getShaderParameter(a,e.gl.COMPILE_STATUS)){const s=e.gl.getShaderInfoLog(a);return console.error(`An error occurred compiling the ${t}->${n} shader: ${s}`,{shaderSource:o}),s}},Ue=(e,t,n)=>{const{gl:o}=e;if(o.linkProgram(n),!o.getProgramParameter(n,o.LINK_STATUS)){const i=o.getProgramInfoLog(n);return console.error(`Unable to initialize the ${t} shader program: ${i}`),i}},tn=(e,t,n,o,a=[])=>{const{gl:i}=e,s=i.createProgram(),l=i.createShader(i.VERTEX_SHADER),f=i.createShader(i.FRAGMENT_SHADER);if(le(e,t,"vertex",n,l)||le(e,t,"fragment",o,f)||(i.attachShader(s,l),i.attachShader(s,f),Ue(e,t,s)))return;const c={program:s,vertexShader:l,fragmentShader:f,uniformsDef:a,recompile(d,m,h,v=null){le(d,t,"vertex",m,this.vertexShader)||le(d,t,"fragment",h,this.fragmentShader)||Ue(d,t,this.program)||(v&&(this.uniformsDef=v),this.bindUniforms(d))},bindUniforms(d){this.uniforms={},this.uniformsDef.forEach(({name:m,type:h,value:v})=>{this.uniforms[m]=Yn(d,this.program,m,h),this.uniforms[m].update(v)})}};return c.bindUniforms(e),c},re=(e,t,n,o,a,i=null,s=null)=>{const{gl:l}=e;s=s||l.FLOAT;const f=s===l.FLOAT?4:2,c={name:n,mesh:t,indices:rn,instances:i,data:a,size:o,type:s,update(d=null,m=null,h=null){l.bindVertexArray(this.mesh.vao),l.bindBuffer(l.ARRAY_BUFFER,this.buffer),d===null&&m===null&&h===null?l.bufferData(l.ARRAY_BUFFER,this.data,l.STATIC_DRAW):(this.data.set(d,m*this.size),l.bufferSubData(l.ARRAY_BUFFER,m*this.size*f,this.data,m*this.size,h*this.size))},extend(d,m,h=!1){if(l.bindVertexArray(this.mesh.vao),this.size=d,m&&(h&&m.length>=this.data.length&&m.set(this.data),this.data=m),this.location=l.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;l.bindBuffer(l.ARRAY_BUFFER,this.buffer);const v=d>4?3:1;for(let p=0;p<v;p++)l.enableVertexAttribArray(this.location+p);for(let p=0;p<v;p++)l.vertexAttribPointer(this.location+p,d/v,this.type,!1,d*f,d/v*p*f);for(let p=0;p<v;p++)l.vertexAttribDivisor(this.location+p,this.instances||0);this.update()},get(){l.bindVertexArray(this.mesh.vao),l.bindBuffer(l.ARRAY_BUFFER,this.buffer);const d=new Float32Array(this.data.length);return l.getBufferSubData(l.ARRAY_BUFFER,0,d),d}};return c.buffer=l.createBuffer(),c.extend(o),c},rn=(e,t,n)=>{const{gl:o}=e;o.bindVertexArray(t);const a=o.createBuffer();return o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,a),o.bufferData(o.ELEMENT_ARRAY_BUFFER,n,o.STATIC_DRAW),{buffer:a,vao:t,indices:n,count:n.length,update(i){o.bindVertexArray(this.vao),this.indices=i,this.count=i.length,o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,this.buffer),o.bufferData(o.ELEMENT_ARRAY_BUFFER,i,o.STATIC_DRAW)}}},Yn=(e,t,n,o)=>{const{gl:a}=e;return{program:t,update(s){if(a.useProgram(this.program),o.startsWith("m")){const l=parseInt(o.slice(1,2));if(l>4)for(let f=0;f<l;f++){const c=a.getUniformLocation(t,`${n}.c${f+1}.v`);if(c!==null&&a.uniform4fv(c,s[f][0]),l-4===1){const d=a.getUniformLocation(t,`${n}.c${f+1}.u`);d!==null&&a.uniform1f(d,s[f][1])}else if(l-4>1){const d=a.getUniformLocation(t,`${n}.c${f+1}.u`);if(d!==null&&a[`uniform${B(l-4,4)}fv`](d,s[f][1]),l-8===1){const m=a.getUniformLocation(t,`${n}.c${f+1}.t`);m!==null&&a.uniform1f(m,s[f][2])}}}else{const f=a.getUniformLocation(t,n);f!==null&&a[`uniformMatrix${o.slice(1)}`](f,!1,s)}}else{const l=a.getUniformLocation(t,n);l!==null&&a[`uniform${o}`](l,s)}},get(){a.useProgram(this.program);const s=a.getUniformLocation(t,n);if(s!==null)return a.getUniform(this.program,s)}}},G=(e,t,n=null)=>{const{gl:o}=e,a=n?~~(n*o.drawingBufferWidth):o.drawingBufferWidth,i=n?~~(n*o.drawingBufferHeight):o.drawingBufferHeight,s=o.createTexture();return o.bindTexture(o.TEXTURE_2D,s),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,n?o.LINEAR:o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,n?o.LINEAR:o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texStorage2D(o.TEXTURE_2D,1,t,a,i),{texture:s,width:a,height:i}},ae=(e,t,n,o,a=[])=>{const i={name:t,vertex:n,fragment:o,...tn(e,t,n,o,a),recompileProgram(s){this.recompile(s,this.vertex,this.fragment,a)}};return{[t]:i}},we=(e,t,n,o,a,i,s,l=["position"])=>{var h;const{gl:f}=e,c=a(((h=e.space)==null?void 0:h.curvature)&&e.curve,e.detail),d=v=>[{name:"viewProjection",type:"m4fv",value:q(Y(4))},{name:"matrix",type:`m${v.dimensions}fv`,value:q(v.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${v.dimensions}fv`,value:q(Y(v.dimensions))},{name:"zoom",type:"1f",value:1},...["vertex","edge"].includes(t)?[{name:"thickness",type:"1f",value:0}]:[],...X(3,v.dimensions+1,1,!0).map(p=>({name:`fov${p}`,type:"1f",value:v[`fov${p}`]}))];s=s>4?9:s;const m={attributes:{},varying:l,vertex:n,type:t,fragment:o,...tn(e,t,...He(e,n,o,t),d(e)),recompileProgram(v){const[p,E]=He(v,this.vertex,this.fragment,this.type);this.recompile(v,p,E,d(v))},changeArity(v){v=v>4?9:v,this.arity!==v&&(this.arity=v,this.extendAttributes(this.instances))},extendAttributes(v){this.instances=v,l.forEach(p=>{this.attributes[p].extend(this.arity,new Float32Array(v*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(v*3),!0)},updateGeometry(v){const p=a(v.space.curvature&&v.curve,v.detail);this.indices.update(new Uint16Array(p.indices)),this.attributes.vertex.extend(3,new Float32Array(p.vertices)),this.attributes.uv.extend(2,new Float32Array(p.uvs)),this.attributes.normal.extend(3,new Float32Array(p.normals))},fillData(v,p){if(!p){this.count=0;return}this.count=p.start+p.size,this.instances<this.count&&this.extendAttributes(this.count),this.attributes.color.update(v[0],p.start,p.size);for(let E=0;E<this.varying.length;E++){const A=this.varying[E];this.attributes[A].update(v[E+1],p.start,p.size)}},render(v){this.count&&(f.useProgram(this.program),f.bindVertexArray(this.vao),f.drawElementsInstanced(f.TRIANGLES,this.indices.count,f.UNSIGNED_SHORT,0,this.count))}};return m.vao=f.createVertexArray(),m.indices=rn(e,m.vao,new Uint16Array(c.indices)),m.attributes.vertex=re(e,m,"vertex",3,new Float32Array(c.vertices)),m.attributes.uv=re(e,m,"uv",2,new Float32Array(c.uvs)),m.attributes.normal=re(e,m,"normal",3,new Float32Array(c.normals)),m.attributes.color=re(e,m,"color",3,new Float32Array(i*3),1),l.forEach(v=>{m.attributes[v]=re(e,m,v,s,new Float32Array(i*s),1)}),m.type=t,m.arity=s,m.instances=i,m.count=0,{[t]:m}},Ne=(e,t,n,o)=>{const{gl:a}=e;a.bindRenderbuffer(a.RENDERBUFFER,t),o?a.renderbufferStorageMultisample(a.RENDERBUFFER,o,n,a.drawingBufferWidth,a.drawingBufferHeight):a.renderbufferStorage(a.RENDERBUFFER,n,a.drawingBufferWidth,a.drawingBufferHeight),a.bindRenderbuffer(a.RENDERBUFFER,null)},Zn=({radius:e=1,widthSegments:t=16,segments:n=16}={})=>{const o=[],a=[],i=[],s=[];let l=0;const f=[];for(let c=0;c<=n;c++){const d=[],m=c/n;let h=0;c===0?h=.5/t:c===n&&(h=-.5/t);for(let v=0;v<=t;v++){const p=v/t,E=[-e*je(p*Ie)*ue(m*K),e*je(m*K),e*ue(p*Ie)*ue(m*K)];a.push(...E);const A=(E[0]**2+E[1]**2+E[2]**2)**-.5;i.push(...E.map(S=>S*A)),s.push(p+h,1-m),d.push(l++)}f.push(d)}for(let c=0;c<n;c++)for(let d=0;d<t;d++){const m=f[c][d+1],h=f[c][d],v=f[c+1][d],p=f[c+1][d+1];c!==0&&o.push(m,h,p),c!==n-1&&o.push(h,v,p)}return{vertices:a,normals:i,uvs:s,indices:o}},Qn=({radius:e=null,radiusTop:t=1,radiusBottom:n=1,height:o=1,radialSegments:a=8,segments:i=1}={})=>{const s=[],l=[],f=[],c=[];e!==null&&(t=e,n=e);let d=0;const m=[],h=o/2,v=(n-t)/o;for(let p=0;p<=i;p++){const E=[],A=p/i,S=A*(n-t)+t;for(let R=0;R<=a;R++){const y=R/a,F=y*Ie,H=ue(F),L=je(F),ne=[S*H,-A*o+h,S*L];l.push(...ne);const P=[H,v,L],k=(P[0]**2+P[1]**2+P[2]**2)**-.5;f.push(...P.map(se=>se*k)),c.push(y,1-A),E.push(d++)}m.push(E)}for(let p=0;p<a;p++)for(let E=0;E<i;E++){const A=m[E][p],S=m[E+1][p],R=m[E+1][p+1],y=m[E][p+1];s.push(A,S,y),s.push(S,R,y)}return{vertices:l,normals:f,uvs:c,indices:s}},et=({segments:e=3}={})=>{const t=[],n=[],o=[],a=[],i=1/e;for(let s=0;s<e+1;s++)for(let l=0;l<s+1;l++)n.push((2*l-s)*i/2,s*i,0),o.push(0,0,1),a.push(i*l,1-i*s);for(let s=1;s<e+1;s++)for(let l=0;l<s;l++){const f=s*(s+1)/2+l,c=s*(s-1)/2+l;if(t.push(f,c,f+1),s<e){const d=(s+1)*(s+2)/2+l;t.push(d+1,f,f+1)}}return{vertices:n,normals:o,uvs:a,indices:t}},nt=`#include globals
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

#define STABLE 0

void main() {
  vecN positionN = multiplyMatrix(matrix, adapt(position));
  vecN targetN = multiplyMatrix(matrix, adapt(target));

  vecN pos = nmix(positionN, targetN, uv.y);
  vecN next = nmix(positionN, targetN, uv.y + DT);
  // Position segments on hypersurface

  #if defined(SEGMENTS) && CURVATURE != 0
  pos = xnormalize(pos);
  next = xnormalize(next);
  #endif

  vec3 proj = xproject(pos);
  vec3 nextProj = xproject(next) + NOISE;
  vec3 tangent = normalize(proj - nextProj);

  #if STABLE == 0
  vec3 norm = cross(nextProj, proj);
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
  if(length(norm) < 0.001) {
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
`,rt=`#include globals
#include fragment
`,at=`#include globals
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
  vec3 drdx = xproject(next) - proj;
  vec3 drdy = xproject(other) - proj;

  vec3 norm = normalize(cross(drdx, drdy));
  #include vertexout
}
`,ot=`#include globals
#include fragment
`,st=`#include globals
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
`,Se={vertex:(e,t)=>Zn({lowest:{widthSegments:6,segments:2},lower:{widthSegments:8,segments:4},low:{widthSegments:8,segments:8},lowish:{widthSegments:12,segments:8},medium:{widthSegments:16,segments:16},highish:{widthSegments:32,segments:16},high:{widthSegments:32,segments:32},higher:{widthSegments:64,segments:32},ultra:{widthSegments:128,segments:64}}[t||"medium"]),edge:(e,t)=>Qn({lowest:{segments:e?4:1,radialSegments:4},lower:{segments:e?8:1,radialSegments:5},low:{segments:e?12:1,radialSegments:6},lowish:{segments:e?14:1,radialSegments:7},medium:{segments:e?16:1,radialSegments:8},highish:{segments:e?24:1,radialSegments:10},high:{segments:e?32:1,radialSegments:12},higher:{segments:e?64:1,radialSegments:16},ultra:{segments:e?128:1,radialSegments:32}}[t||"medium"]),face:(e,t)=>et({lowest:{segments:e?4:1},lower:{segments:e?8:1},low:{segments:e?12:1},lowish:{segments:e?14:1},medium:{segments:e?16:1},highish:{segments:e?24:1},high:{segments:e?32:1},higher:{segments:e?64:1},ultra:{segments:e?128:1}}[t||"medium"])};function it(e){return{meshes:Oe,...we(e,"vertex",st,ot,Se.vertex,1024,e.dimensions),...we(e,"edge",tt,nt,Se.edge,1024,e.dimensions,["position","target"]),...we(e,"face",at,rt,Se.face,1024,e.dimensions,["position","target","center"]),reset(){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].count=0},changeArity(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].changeArity(t)},updateGeometries(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].updateGeometry(t)},recompilePrograms(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].recompileProgram(t)},updateUniforms(t,n=!1,o=null){for(let a=0;a<this.meshes.length;a++){const i=this.meshes[a],s=this[i];if(!n){s.uniforms.metric.update(q(t.space.metric)),s.uniforms.matrix.update(q(t.matrix));for(let l=4;l<=t.dimensions;l++)s.uniforms[`fov${l}`].update(1/Xe(K*t[`fov${l}`]*.5/180));i==="vertex"?s.uniforms.thickness.update(t.sizeVertex):i==="edge"&&s.uniforms.thickness.update(t.sizeEdge)}s.uniforms.viewProjection.update(t.camera.viewProjection),s.uniforms.zoom.update(n?o:t.zoom),s.uniforms.eye.update(t.camera.eye)}},fillData(t){for(let n=0;n<this.meshes.length;n++){const o=this.meshes[n];this[o].fillData(t.data[n],t.infos[n])}}}}const ct=`#version 300 es
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
`,dt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,ft=`#version 300 es
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
`,mt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,pt=`#version 300 es
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
`;function xt(e){return{...ae(e,"oit",vt,pt,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...ae(e,"down",mt,ft,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...ae(e,"up",gt,ht,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...ae(e,"afterImage",lt,ct,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...ae(e,"bloom",dt,ut,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function an(e){const{gl:t}=e,n=ee[e.ambiance],o=e.msaa?B(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(t.bindFramebuffer(t.FRAMEBUFFER,e.fb.base),Ne(e,e.rb.base,t.RGBA8,o),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,e.rb.base),Ne(e,e.rb.depth,t.DEPTH_COMPONENT24,o),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),e.fb.oit&&(t.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(t.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(t.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&t.deleteRenderbuffer(e.rb.depth_copy),n.transparency==="oit"&&(e.fb.oit=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.oit),o?(e.rb.depth_copy=t.createRenderbuffer(),Ne(e,e.rb.depth_copy,t.DEPTH_COMPONENT24),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth_copy)):t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),e.textures.oitAccum=G(e,t.RGBA16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=G(e,t.R16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT1,t.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(t.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(t.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(t.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(t.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),n.afterImage&&(e.fb.afterImage=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=G(e,t.RGBA8),e.textures.afterImageScreen=G(e,t.RGBA8),e.textures.afterImageOutScreen=G(e,t.RGBA8)),e.fb.kawase&&(t.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(t.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let a=0;a<e.textures.kawase.length;a++)t.deleteTexture(e.textures.kawase[a].texture);e.textures.kawase=null}if(e.textures.blur&&(t.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(t.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),n.glow){e.fb.kawase=t.createFramebuffer(),e.fb.bloom=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let a=0;a<n.glow.steps;a++)e.textures.kawase[a]=G(e,t.RGBA8,n.glow.pow**-a);e.textures.blur=G(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.blur.texture,0),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=G(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.bloom.texture,0)}}const on=window.location.search.includes("stats");let de;on&&(de=new Ln,de.dom.id="stats",document.body.appendChild(de.dom));const bt=e=>{const t=document.createElement("canvas");t.id="webgl2",document.body.insertBefore(t,document.body.firstChild);const n=t.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:n},!n){console.error("Unable to initialize WebGL. Your browser may not support it.");return}n.getExtension("EXT_color_buffer_float"),n.enable(n.DEPTH_TEST);const o={zoom:1,fov:K/3,eye:[0,0,-e.zoom],near:.01,far:1e3,update(c){const d=Y(4);d[0][3]=this.eye[0],d[1][3]=this.eye[1],d[2][3]=this.eye[2],d[0][0]=-1,d[2][2]=-1;const m=pn(d);this.aspect=c?c.fullWidth/c.fullHeight:n.canvas.clientWidth/n.canvas.clientHeight,this.zoom=B(this.aspect,1);const h={left:0,right:0,top:0,bottom:0,near:this.near,far:this.far};h.top=this.near*Xe(this.fov/2)/this.zoom;let v=2*h.top,p=this.aspect*v;h.left=-.5*p,c&&(h.left+=c.x*p/c.fullWidth,h.top-=c.y*v/c.fullHeight,p*=c.width/c.fullWidth,v*=c.height/c.fullHeight),h.bottom=h.top-v,h.right=h.left+p;const E=vn(h);this.viewProjection=q(De(E,m))}};o.update();const a=xt(e),i=it(e),s={base:n.createRenderbuffer(),depth:n.createRenderbuffer()},l={base:n.createFramebuffer()};return{...e,gl:n,camera:o,meshes:i,passes:a,rb:s,fb:l,textures:{}}},ve=(e,t=null)=>{e.camera.fov=e.fov3?K*e.fov3/180:1,t!==null&&(e.camera.eye[2]=t===null?-e.zoom:-t),e.camera.update(),e.meshes.updateUniforms(e,!0,t)},Et=e=>{const t=ee[e.ambiance];e.gl.clearColor(...t.background),t.glow&&(e.passes.bloom.uniforms.exposure.update(t.glow.exposure),e.passes.bloom.uniforms.strength.update(t.glow.strength),e.passes.down.uniforms.offset.update(t.glow.offset.down),e.passes.up.uniforms.offset.update(t.glow.offset.up)),t.afterImage&&e.passes.afterImage.uniforms.strength.update(t.afterImage)},Q=(e,t)=>{on&&de.update();const{gl:n}=e,o=e.msaa?B(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,a=ee[e.ambiance];Xn(n.canvas,e.subsampling,t)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),an(e),e.camera.update(t),e.meshes.updateUniforms(e,!0,e.zoom)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),a.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),a.transparent.vertex||e.meshes.vertex.render(e),a.transparent.edge||e.meshes.edge.render(e),a.transparent.face||e.meshes.face.render(e),(e.drawVertex&&a.transparent.vertex||e.drawEdge&&a.transparent.edge||e.drawFace&&a.transparent.face)&&(a.transparency==="oit"?(o&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):a.transparency==="blend"&&(n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e)));const i=a.afterImage?e.fb.afterImage:a.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,i),a.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let s=e.textures.bloom;if(a.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),a.glow?s=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),a.glow){n.disable(n.BLEND),a.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let l=0;l<a.glow.steps;l++){const f=l===0?s:e.textures.kawase[l-1],c=e.textures.kawase[l];n.viewport(0,0,c.width,c.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,c.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let l=a.glow.steps-1;l>=0;l--){const f=e.textures.kawase[l],c=l===0?e.textures.blur:e.textures.kawase[l-1];n.viewport(0,0,c.width,c.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,c.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,s.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=Q;const oe=.9,wt=.95,Nt=10,sn=(e,t,n,o,a,i,s)=>{const{combinations:l}=n,f=[[],[]],c=(m,h)=>{qe(o,De(Ye(m,h,a,i,gn(s)),o))},d=2*t+1>l.length-1?[t*2]:[t*2+1,t*2];for(let m=0;m<d.length;m++){const h=d[m];if(f[m].push(h),n.lock&&l[h][0]>=0&&l[h][1]>=0)for(let v=0;v<l.length;v++)l[v][0]<0||l[v][1]<0||!l[h].some(p=>l[v].includes(p))&&(!(m>0)||v!==d[1-m])&&f[m].push(v)}for(let m=0;m<f.length;m++){const h=f[m];for(let v=0;v<h.length;v++){const p=h[v];c(e[m],l[p])}}return f},St=(e,t,n,o,a,i,s)=>{const{code:l}=e,f=.1;if(e.altKey||e.ctrlKey||e.metaKey)return;const c=(d,m,h)=>sn([d,m],h,t,n,o,a,s);if(l==="ArrowLeft"||l==="KeyA")c(f,0,0);else if(l==="ArrowRight"||l==="KeyD")c(-f,0,0);else if(l==="ArrowUp"||l==="KeyW")c(0,f,0);else if(l==="ArrowDown"||l==="KeyS")c(0,-f,0);else if(l==="PageUp"||l==="KeyQ")c(f,0,1);else if(l==="PageDown"||l==="KeyE")c(-f,0,1);else if(l==="Digit1")c(0,f,1);else if(l==="Digit3")c(0,-f,1);else if(l==="KeyZ")c(f,0,2);else if(l==="KeyC")c(-f,0,2);else if(l==="ControlLeft")i("shift",(t.shift+1)%t.maxShift);else return;return!0},yt=(e,t,n,o)=>{const a=g.useRef(null),i=g.useRef({pause:new Set,speed:null,zoom:null,t:null}),s=g.useRef({matrix:e.matrix,zoom:e.zoom,pointers:new Map});g.useEffect(()=>{s.current.matrix=e.matrix},[e.matrix]),g.useEffect(()=>{s.current.zoom=e.zoom,i.current.zoom=null},[e.zoom]);const l=g.useCallback(({matrix:c,zoom:d}={matrix:!0,zoom:!0})=>{if(!e.matrix._reset){if(c)for(let m=0;m<Oe.length;m++)e.meshes[Oe[m]].uniforms.matrix.update(q(s.current.matrix));d&&ve(e,s.current.zoom)}},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.drawVertex,e.drawEdge,e.drawFace,e.error,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,e.stellation,e.subsampling,e.zoom]);g.useEffect(()=>{i.current.speed=new Array(t.combinations.length).fill(0)},[t.combinations.length]),g.useEffect(()=>{e.matrix._reset&&(delete e.matrix._reset,i.current.speed=new Array(t.combinations.length).fill(0))},[t.combinations.length,e.matrix]);const f=g.useCallback(()=>{const{pause:c,speed:d,zoom:m}=i.current;i.current.t||(i.current.t=performance.now());const h=performance.now()-i.current.t;let v=!1;for(let p=0;p<d.length;p++)if(d[p]!==0&&(v=!0,t.auto==="damp"&&(d[p]*=wt,J(d[p])<1e-6&&(d[p]=0)),!c.has(p))){const E=Re(B(d[p]*h,.5),-.5);qe(s.current.matrix,De(Ye(E,t.combinations[p],e.dimensions,e.space.metric,i.current.zoom||s.current.zoom),s.current.matrix))}if(v&&l({matrix:!0}),m){const p=ie(s.current.zoom)/ie(oe),E=ie(m)/ie(oe);s.current.zoom*=We(oe,(E-p)*B(1,h*.001*2)),J(m-s.current.zoom)<m*.001&&(s.current.zoom=m,i.current.zoom=null),v=!0,l({zoom:!0})}if(d.reduce((p,E)=>J(p)+J(E),0)===0&&i.current.zoom===null&&!e.matrix._reset){o({matrix:s.current.matrix,zoom:s.current.zoom}),a.current=null,i.current.t=null;return}v&&Q(e),i.current.t=performance.now(),a.current=requestAnimationFrame(f)},[l,t.auto,t.combinations,e.dimensions,e.space]);g.useEffect(()=>{i.current.speed.reduce((S,R)=>J(S)+J(R),0)>0&&(a.current=requestAnimationFrame(f));let c=null,d=null;const m=[],h=()=>{const S=s.current.pointers.values(),R=S.next().value,y=S.next().value;return hn(R[0]-y[0],R[1]-y[1])},v=S=>{S.button!==0||S.target.tagName!=="CANVAS"||(t.auto&&(d=performance.now(),s.current.pointers.size===1?(i.current.pause.delete(t.shift*2),i.current.pause.delete(t.shift*2+1)):(i.current.pause.add(t.shift*2),i.current.pause.add(t.shift*2+1))),s.current.pointers.set(S.pointerId,[S.clientX,S.clientY]))},p=S=>{if(!s.current.pointers.has(S.pointerId))return;const R=s.current.pointers.get(S.pointerId),y=[-(S.clientX-R[0])/window.innerHeight,-(S.clientY-R[1])/window.innerHeight];if(s.current.pointers.set(S.pointerId,[S.clientX,S.clientY]),s.current.pointers.size>1){if(c===null){c=h(),i.current.zoom=s.current.zoom;return}const L=h();s.current.zoom*=c/L,c=L,ve(e,s.current.zoom),i.current.zoom=null,Q(e);return}let F=t.shift;!F&&S.shiftKey?F=1:!F&&S.altKey?F=2:!F&&S.ctrKey?F=3:!F&&S.metaKey&&(F=4);const H=sn([K*y[0],K*y[1]],F,t,s.current.matrix,e.dimensions,e.space.metric,i.current.zoom||s.current.zoom);if(t.auto){const L=B(50,performance.now()-d);d=performance.now(),m.push([y[0]*1.5/L,y[1]*1.5/L]),m.length>Nt&&m.shift();const ne=m.reduce((P,k)=>[P[0]+k[0],P[1]+k[1]],[0,0]);for(let P=0;P<2;P++)for(let k=0;k<H[P].length;k++)i.current.speed[H[P][k]]=ne[P]/m.length;a.current||(a.current=requestAnimationFrame(f))}l({matrix:!0})},E=S=>{s.current.pointers.clear(),t.auto&&(m.length=0,d=null,i.current.pause.delete(t.shift*2),i.current.pause.delete(t.shift*2+1)),c=null};document.addEventListener("pointerdown",v),document.addEventListener("pointermove",p),document.addEventListener("pointerup",E);const A=i.current;return()=>{document.removeEventListener("pointerdown",v),document.removeEventListener("pointermove",p),document.removeEventListener("pointerup",E),a.current&&(cancelAnimationFrame(a.current),a.current=null,A.t=null)}},[t,e.dimensions,e.space,e.camera,f,l]),g.useEffect(()=>{const c=d=>{d.target===document.body&&St(d,t,s.current.matrix,e.dimensions,e.space.metric,n,i.current.zoom||s.current.zoom)&&(l({matrix:!0}),Q(e))};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[l,t,e.space,e.dimensions,n]),g.useEffect(()=>{const c=d=>{if(d.target.tagName!=="CANVAS")return;const m=i.current.zoom===null?s.current.zoom:i.current.zoom;i.current.zoom=m*(d.deltaY<0?oe:1/oe),a.current||(a.current=requestAnimationFrame(f))};return document.addEventListener("wheel",c),()=>{document.removeEventListener("wheel",c)}},[f]),g.useEffect(()=>{const c=d=>{if(d.button!==0||d.target.tagName!=="CANVAS")return;const m=i.current.zoom===null?s.current.zoom:i.current.zoom,h=m<.5?5:m<2?.25:1;i.current.zoom=h,a.current||(a.current=requestAnimationFrame(f))};return document.addEventListener("dblclick",c),()=>{document.removeEventListener("dblclick",c)}},[f])};function jt({runtime:e,rotations:t,updateRotations:n,updateParams:o}){return yt(e,t,n,o),null}function It(){return new Worker(""+new URL("shape.worker-8dc583bf.js",import.meta.url).href)}const Tt=e=>{for(e=e.replace(/\s/g,""),e=e.replace(/(\w)(\^-?\d+)/g,"($1)$2");;){let t=e.replace(/\((\w+)\)\^(-?\d+)/g,(n,o,a)=>(a=parseInt(a),a<0&&(o=o.split("").reverse().map(i=>fe(i)).join(""),a=-a),o.repeat(a)));if(t===e)break;e=t}return e},he=e=>{for(e=e.replace(/\s/g,"");;){let t=e.replace(/(\w+)(\1)+/g,(n,o)=>{const a=n.length/o.length;return`(${o})^${a}`});if(t=t.replace(/\(\((\w+)\)\^(\d+)\)\^(\d+)/g,(n,o,a,i)=>`(${o})^${parseInt(a)*parseInt(i)}`),t=t.replace(/\((\w+)\)\^(\d+)(\1)/g,(n,o,a)=>`(${o})^${parseInt(a)+1}`),t=t.replace(/(\w+)\(\1\)\^(\d+)/g,(n,o,a)=>`(${o})^${parseInt(a)+1}`),t===e)break;e=t}return e=e.replace(/\(([A-Z]+)\)\^(\d+)/g,(t,n,o)=>(n=n.split("").reverse().map(a=>fe(a)).join(""),`(${n})^-${o}`)),e=e.replace(/([A-Z]+)/g,(t,n)=>(n=n.split("").reverse().map(o=>fe(o)).join(""),`(${n})^-1`)),e=e.replace(/\((\w)\)(\^-?\d+)/g,"$1$2"),e};typeof window<"u"&&(window.factor=he);const Ot=(e,t)=>{g.useEffect(()=>{t(n=>{n.meshes.reset();const o=xn(n.coxeter,n.stellation),a=bn(o),{vertices:i,normals:s}=En(a,n.centered),f=n.mirrors.every(d=>!d)?n.mirrors.map(()=>1):n.mirrors.map(d=>wn(d)),c=Nn(ke(i,f),a.metric);return a.rootVertex=c,a.rootVertices=i,a.rootNormals=s,a.boundnesses=Sn(i).map(d=>yn(ke(a.metric,d),d)).map(d=>J(d)<1e-9?"ideal":a.curvature*d<-1e-9?"ultraideal":"inside"),{...n,space:a,error:null}})},[e.dimensions,e.coxeter,e.mirrors,e.stellation,e.centered,t]),g.useEffect(()=>{t(n=>{var a;const o={...n,iteration:-1,paused:!1};return n.processing&&((a=n.shaper)==null||a.terminate(),o.shaper=new It),o})},[e.space,e.ambiance,e.extrarels,e.drawVertex,e.drawEdge,e.drawFace,e.hidden,e.reciprocation,t]),g.useEffect(()=>{t(n=>{const o={...n};return n.polytope.size>n.limit&&(o.paused=!0),o})},[e.polytope.size,e.limit,t]),g.useEffect(()=>{t(n=>({...n,paused:!1}))},[e.limit,t]),g.useEffect(()=>{t(n=>n.iteration===0?n:(n.shaper.postMessage({first:n.iteration===-1,space:n.space,dimensions:n.dimensions,coxeter:n.coxeter,stellation:n.stellation,mirrors:n.mirrors,ambiance:n.ambiance,draw:{vertex:n.drawVertex,edge:n.drawEdge,face:n.drawFace},batch:n.iteration===-1?Re(1,~~(n.batch/10)):n.batch,hidden:n.hidden,reciprocation:n.reciprocation,extrarels:n.extrarels}),{...n,iteration:n.iteration===-1?0:n.iteration,processing:!0}))},[e.iteration,e.limit,e.ambiance,e.drawVertex,e.drawEdge,e.drawFace,e.extrarels,e.batch,e.shaper,e.space,e.hidden,e.reciprocation,t]),g.useEffect(()=>{t(n=>({...n,iteration:n.paused?n.iteration:n.iteration+1}))},[e.paused,t]),g.useEffect(()=>{if(!e.shaper)return;const n=({data:o})=>{o.error?console.error(o.error):t(a=>{var s;a.meshes.fillData(o);const i={...a,processing:!o.polytope.done,iteration:a.paused||o.polytope.done?a.iteration:a.iteration+1,polytope:o.polytope};if(!a.extrarels&&((s=o.polytope.root.extrarels)!=null&&s.length)){const l=o.polytope.root.extrarels.map(f=>he(f)).join(", ");l&&(i.extrarels=l)}return i})};return e.shaper.addEventListener("message",n),()=>{e.shaper.removeEventListener("message",n)}},[e.shaper,e.paused,t])};function At({runtime:e,setRuntime:t}){return Ot(e,t),null}const Rt=(e,t)=>{g.useEffect(()=>{t(n=>(ve(n,n.zoom),n))},[e.zoom,t]),g.useEffect(()=>{t(n=>(ve(n),n))},[e.fov3,e.camera,t]),g.useEffect(()=>{t(n=>(Et(n),an(n),n))},[e.ambiance,e.msaa,e.msaaSamples,t]),g.useEffect(()=>{t(n=>(n.meshes.recompilePrograms(n),n))},[e.ambiance,e.curve,e.dimensions,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{t(n=>(n.meshes.changeArity(n.dimensions),n))},[e.dimensions,t]),g.useEffect(()=>{t(n=>(n.meshes.updateGeometries(n),n))},[e.space,e.curve,e.detail,t]),g.useEffect(()=>{t(n=>(n.meshes.updateUniforms(n),n))},[e.ambiance,e.curve,e.dimensions,e.sizeVertex,e.sizeEdge,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.detail,e.matrix,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{const n=new ResizeObserver(()=>{Q(e)});return n.observe(e.gl.canvas,{box:"content-box"}),()=>n.disconnect()},[e.gl.canvas]),g.useEffect(()=>{t(n=>(Q(n),n))},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.edge,e.error,e.face,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.iteration,e.detail,e.matrix,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.ranges,e.space,e.stellation,e.subsampling,e.sizeVertex,e.sizeEdge,e.polytope,e.vertex,e.zoom])};function Dt({runtime:e,setRuntime:t}){return Rt(e,t),null}function Ct({runtime:e,setRuntime:t,rotations:n,updateRotations:o,updateParams:a}){var s,l,f;window.rt=e,window.ro=n;const i=g.useCallback(c=>d=>{t(m=>({...m,error:{[c]:d.message}}))},[t]);return Pn(e,t),r.jsxs(r.Fragment,{children:[r.jsx(xe,{error:(s=e.error)==null?void 0:s.process,onError:i("process"),children:r.jsx(At,{runtime:e,setRuntime:t})}),e.space?r.jsxs(r.Fragment,{children:[r.jsx(xe,{error:(l=e.error)==null?void 0:l.render,onError:i("render"),children:r.jsx(Dt,{runtime:e,setRuntime:t})}),r.jsx(xe,{error:(f=e.error)==null?void 0:f.interact,onError:i("interact"),children:r.jsx(jt,{runtime:e,rotations:n,updateRotations:o,updateParams:a})})]}):null]})}const Ft="modulepreload",zt=function(e,t){return new URL(e,t).href},Be={},Pt=function(t,n,o){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=zt(i,o),i in Be)return;Be[i]=!0;const s=i.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!o)for(let d=a.length-1;d>=0;d--){const m=a[d];if(m.href===i&&(!s||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Ft,s||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),s)return new Promise((d,m)=>{c.addEventListener("load",d),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})},cn=r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",strokeWidth:"3",children:[r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m31.376 13.781l-2.673-7.659c-1.554-4.453-7.852-4.453-9.406 0l-4.56 13.067c-.922 2.644 1.04 5.408 3.841 5.408H24"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m15.993 14.24l-8.11.175c-4.716.102-6.663 6.092-2.907 8.946l11.018 8.374c2.23 1.695 5.465.682 6.33-1.982L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m11.675 29.012l-2.34 7.767c-1.36 4.517 3.736 8.219 7.611 5.53l11.369-7.892c2.3-1.597 2.337-4.987.071-6.633L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m24.39 37.683l6.664 4.625c3.875 2.69 8.971-1.012 7.61-5.53l-3.992-13.25c-.807-2.681-4.02-3.764-6.286-2.118L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m36.566 28.27l6.458-4.908c3.756-2.855 1.81-8.845-2.907-8.947l-13.836-.298c-2.8-.06-4.822 2.66-3.956 5.324L24 24.597"})]}),ln=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("g",{id:"feTarget0",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:r.jsx("g",{id:"feTarget1",fill:"currentColor",fillRule:"nonzero",children:r.jsx("path",{id:"feTarget2",d:"M19.938 13A8.004 8.004 0 0 1 13 19.938V22h-2v-2.062A8.004 8.004 0 0 1 4.062 13H2v-2h2.062A8.004 8.004 0 0 1 11 4.062V2h2v2.062A8.004 8.004 0 0 1 19.938 11H22v2h-2.062ZM12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"})})})}),Mt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"})}),Lt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20.777a8.942 8.942 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a8.961 8.961 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A8.954 8.954 0 0 1 10 3.223"})}),kt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",children:r.jsxs("g",{fill:"none",stroke:"currentColor",children:[r.jsx("path",{strokeLinecap:"round",d:"M13.326 8.5a6.5 6.5 0 1 1-.558-4.5"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 2v2.5H11"})]})}),_t=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:r.jsx("path",{fill:"currentColor",d:"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"})}),Ht=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 6v1h.75A3.25 3.25 0 0 1 20 10.25v7.5A3.25 3.25 0 0 1 16.75 21h-9.5A3.25 3.25 0 0 1 4 17.75v-7.5A3.25 3.25 0 0 1 7.25 7H8V6a4 4 0 1 1 8 0ZM9.5 6v1h5V6a2.5 2.5 0 0 0-5 0Zm2.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"})}),Ut=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 5a2.5 2.5 0 0 1 5 0v.25a.75.75 0 0 0 1.5 0V5a4 4 0 0 0-8 0v2H7.25A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21h9.5A3.25 3.25 0 0 0 20 17.75v-7.5A3.25 3.25 0 0 0 16.75 7H16V5Zm-4 10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"})}),Bt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})}),$t=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),Vt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),Gt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),Jt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),Kt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),Wt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M14 19V5h4v14zm-8 0V5h4v14z"})}),Xt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"})}),qt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"})}),Yt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"})});function N({type:e,subtype:t,order:n,dimensions:o}){return r.jsxs("span",{className:"space",title:`${e} ${t}${n>1?`of order ${n}`:""}`,children:[e===null||e==="indefinite"?"𝕏":e==="affine"?"𝔼":e==="finite"?"𝕊":"ℍ",o?r.jsxs("sup",{children:[o-1,n>1?r.jsx("sup",{children:n}):null]}):null,e==="hyperbolic"?r.jsx("sub",{children:{compact:" ",paracompact:"*",hypercompact:"+"}[t]}):null]})}const Zt=(...e)=>{if(Array.isArray(e[0]))return{coxeter:e,dimensions:e.length,extended:!0};const t=e.length+1;return{coxeter:new Array(t).fill().map((o,a)=>new Array(t).fill().map((i,s)=>a===s?1:a===s+1||s===a+1?e[B(a,s)]:2)),dimensions:t}},Qt=(...e)=>{if(Array.isArray(e[0]))return{stellation:e};const t=e.length+1;return{stellation:new Array(t).fill().map((o,a)=>new Array(t).fill().map((i,s)=>a===s?1:a===s+1||s===a+1?e[B(a,s)]:1))}},u=(e,t,n,o)=>{const a=Zt(...e);n&&!Array.isArray(n)&&(o=n,n=null);const{dimensions:i}=a,s={...me,...a,drawVertex:i<=4,drawFace:i<=4,curve:i>3,ambiance:"colorful",matrix:Y(i),zoom:i<=3?2:i>4?3:5,centered:!0,...Object.fromEntries(X(3,i+1).map(l=>[`projection${l}`,Te(l,i)])),...o||{}};return t?s.mirrors=t:s.mirrors=new Array(i).fill().map((l,f)=>f===0?1:0),n?s.stellation=Qt(...n).stellation:s.stellation=new Array(i).fill().map((l,f)=>new Array(i).fill(1)),s},O=e=>({...e,subforms:Object.entries(er(e.params.dimensions)).map(([t,n])=>({name:`${t} ${e.name}`,params:{...e.params,mirrors:n}}))}),M={0:"Apeirogonal",3:"Triangular",4:"Square",5:"Pentagonal",6:"Hexagonal",7:"Heptagonal",8:"Octagonal",9:"Nonagonal",10:"Decagonal",11:"Hendecagonal",12:"Dodecagonal"},D={0:"Apeiro",3:"Tri",4:"Tetra",5:"Penta",6:"Hexa",7:"Hepta",8:"Octa",9:"Nona",10:"Deca",11:"Hendeca",12:"Dodeca"},j=([e,t,n])=>{const o=l=>l===0?"infinite":l,a=(l,f,c)=>`${D[l]}${D[f].toLowerCase()}${D[c].toLowerCase()}gonal`,i=(l,f,c)=>`Di${D[l].toLowerCase()}gonal ${D[f]}${D[c].toLowerCase()}gonal`,s=n?[[1,e,n],[e,1,t],[n,t,1]]:[e,t];return{name:(n?`Di${D[t].toLowerCase()}gonal ${D[n]}${D[e].toLowerCase()}gonal`:e===t?`${D[e]}${M[t].toLowerCase()}`:`${M[e]} ${M[t]}`).replace(/aa/g,"a"),params:C(s,[1,0,0]),subforms:[{name:n?a(n,t,e):`Truncated Order-${o(t)} ${M[e]}`,params:C(s,[1,1,0])},{name:n?i(n,t,e):`${D[t]}${M[e].toLowerCase()}`,params:C(s,[0,1,0])},{name:n?a(n,e,t):`Truncated Order-${o(e)} ${M[t]}`,params:C(s,[0,1,1])},{name:n?i(e,n,t):`Order-${o(e)} ${M[t]}`,params:C(s,[0,0,1])},{name:n?a(t,e,n):`Rhombi${D[t].toLowerCase()}${M[e].toLowerCase()}`,params:C(s,[1,0,1])},{name:n?`${D[n]}gonally Truncated ${D[t]}${D[e].toLowerCase()}gonal`:`Truncated ${D[t]}${M[e].toLowerCase()}`,params:C(s,[1,1,1])},{name:n?`Snub ${a(n,t,e)}`:`Order-${o(t)} Snub ${M[e]}`,params:C(s,["s","s","s"])},{name:n?`${a(n,t,e)} Dual`:`Order-${o(e)} ${D[t]}akis ${M[t]}`,params:C(s,["m","m",0])},{name:n?`${i(n,t,e)} Dual`:`Order-${o(e)}-${o(t)} Rhombille`,params:C(s,[0,"m",0])},{name:n?`${a(n,e,t)} Dual`:`Order-${o(t)} ${D[e]}kis ${M[e]}`,params:C(s,[0,"m","m"])},{name:n?`${a(t,e,n)} Dual`:`Deltoidal ${D[t]}${M[e].toLowerCase()}`,params:C(s,["m",0,"m"])},{name:n?`${D[n]}gonally Truncated ${D[t]}${D[e].toLowerCase()}gonal Dual`:`Order-${o(t)}-${o(e)} Kisrhombille`,params:C(s,["m","m","m"])},{name:n?`Snub ${a(n,t,e)} Dual`:`Order-${o(e)}-${o(t)} Floret Pentagonal`,params:C(s,["b","b","b"])}].map(({name:l,params:f})=>({name:l.replace(/aa/g,"a"),params:f}))}},C=(e,t,n,o)=>(n&&!Array.isArray(n)&&(o=n,n=null),{...u(e,t,n),ambiance:"cathedral",sizeEdge:40,sizeVertex:50,drawVertex:!1,curve:!0,zoom:1,...o}),I=(e,t,n,o)=>(n&&!Array.isArray(n)&&(o=n,n=null),{...u(e,t,n),ambiance:"neon",drawFace:!1,drawVertex:!1,centered:!1,sizeEdge:20,zoom:2,...o}),b=(e,t,n,o)=>{n&&!Array.isArray(n)&&(o=n,n=null);const a=u(e,t,n),i=a.matrix.length;return{...a,ambiance:"neon",drawFace:!1,drawVertex:!1,curve:!0,centered:!1,sizeEdge:i>4?15:25,zoom:1.5,...o}},er=e=>{if(e===4)return{Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1],Omnisnub:["s","s","s","s"]};if(e===5)return{Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1],Omnisnub:["s","s","s","s","s"]};if(e===6)return{Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(e===7)return{Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(e===8)return{Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(e===9)return{Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},W=[{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite",dimensions:4})," Tesseract"]}),params:u([4,3,3],[1,0,0,0],{drawVertex:!0,sizeVertex:40,drawFace:!0,curve:!0,ambiance:"neon",zoom:4.2})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",dimensions:3})," Heptagonal Tiling"]}),params:C([7,3],[1,0,0],{drawVertex:!1,drawFace:!0,curve:!0,ambiance:"neon"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:3})," Ideal Triangles"]}),params:C([[1,0,0],[0,1,0],[0,0,1]],[0,0,0],{drawVertex:!1,drawFace:!0,curve:!0,ambiance:"neon",centered:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",dimensions:4})," Inverted Alternated Order-5 Cubic Honeycomb"]}),params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{projection4:"inverted",ambiance:"disco",zoom:3})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite",dimensions:8})," E6 (1",r.jsx("sub",{children:"22"}),")"]}),params:u([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0],{sizeVertex:25,sizeEdge:15,ambiance:"colorful",drawVertex:!0,projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite",dimensions:8})," E8 (4",r.jsx("sub",{children:"21"}),")"]}),params:u([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1],{sizeVertex:20,sizeEdge:6,curve:!1,ambiance:"neon",drawVertex:!0,projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",projection7:"orthographic",projection8:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Tetrahedron"]}),params:C([3,3,6],[1,0,0,""],{drawVertex:!1,drawFace:!0,curve:!0,centered:!0,ambiance:"pure"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Horoball"]}),params:C([6,3,4],[1,0,0,""],{drawVertex:!1,drawFace:!0,curve:!0,centered:!1,ambiance:"colorful"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",dimensions:4})," Order-4 Dodecahedral Honeycomb"]}),params:b([5,3,4],[1,0,0,0],{zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"hypercompact",dimensions:4})," ","Hypercompact Order 3-6 Heptagonal Honeycomb"]}),params:b([7,3,3],[1,0,0,0],{zoom:1.5,drawFace:!0,drawVertex:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Pentahedron"]}),params:C([5,3,6],[1,0,0,""],{drawVertex:!1,drawFace:!0,curve:!0,centered:!0,ambiance:"pure",zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite",dimensions:4})," Flat Torus"]}),params:u([32,2,32],[1,0,0,1],{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",zoom:3,sizeEdge:10})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"affine",dimensions:5})," Tesseract Stack"]}),params:u([[1,2,2,2,0],[2,1,2,2,2],[2,2,1,2,2],[2,2,2,1,2],[0,2,2,2,1]],[1,1,1,1,0],{drawVertex:!1,drawFace:!0,ambiance:"neon",sizeEdge:20,projection4:"sterographic"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"hypercompact",order:2,dimensions:4})," ","Ultra-Hyperbolic Surface (Anti-de Sitter Ads3)"]}),params:u([-1,2,-1],[1,0,0,1],[10,1,10],{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,sizeEdge:15,zoom:1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"hypercompact",order:2,dimensions:5})," ","Ultra-Hyperbolic Honeycomb (Anti-de Sitter Ads4)"]}),params:u([-1,3,3,-1],[1,0,0,0,1],[10,1,1,10],{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,zoom:2})},{name:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"hypercompact",order:3,dimensions:6})," ","Ultra-Ultra-Hyperbolic"]}),params:u([-1,2,-1,2,-1],[0,0,0,0,0,0],[10,1,10,1,10],{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,zoom:2,sizeEdge:15})},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite"})," Spherical Space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Triangular Prism",params:u([3,2],[0,1,1]),subforms:[{name:"Square Prism",params:u([4,2],[0,1,1])},{name:"Pentagonal Prism",params:u([5,2],[0,1,1])},{name:"Hexagonal Prism",params:u([6,2],[0,1,1])},{name:"Square Bipyramid",params:u([4,2],[0,"m","m"],{reciprocation:1})},{name:"Pentagonal Bipyramid",params:u([5,2],[0,"m","m"],{reciprocation:1})},{name:"Hexagonal Bipyramid",params:u([6,2],[0,"m","m"],{reciprocation:1})},{name:"Pentagrammic Prism",params:u([5,2],[1,0,1],[2,1])},{name:"Heptagrammic Prism",params:u([7,2],[1,0,1],[2,1])},{name:"Octagrammic Prism",params:u([8,2],[1,0,1],[3,1])},{name:"Pentagrammic Bipyramid",params:u([5,2],["m",0,"m"],[2,1],{reciprocation:1})},{name:"Heptagrammic Bipyramid",params:u([7,2],["m",0,"m"],[2,1],{reciprocation:1})},{name:"Octagrammic Bipyramid",params:u([8,2],["m",0,"m"],[3,1],{reciprocation:1})}]},{name:"Triangular Antiprism",params:u([3,2],["s","s","s"]),subforms:[{name:"Square Antiprism",params:u([4,2],["s","s","s"])},{name:"Pentagonal Antiprism",params:u([5,2],["s","s","s"])},{name:"Hexagonal Antiprism",params:u([6,2],["s","s","s"])},{name:"Pentagrammic Antiprism",params:u([5,2],["s","s","s"],[2,1])},{name:"Penatagrammic Crossed Antiprism",params:u([5,2],["s","s","s"],[3,1])},{name:"Heptagrammic Antiprism",params:u([7,2],["s","s","s"],[2,1])},{name:"Heptagrammic Crossed Antiprism",params:u([7,2],["s","s","s"],[4,1])},{name:"Octagrammic Antiprism",params:u([8,2],["s","s","s"],[3,1])},{name:"Octagrammic Crossed Antiprism",params:u([8,2],["s","s","s"],[5,1])}]},{name:"Tetrahedron",params:u([3,3]),subforms:[{name:"Truncated Tetrahedron",params:u([3,3],[1,1,0])},{name:"Triakis Tetrahedron",params:u([3,3],["m","m",0],{reciprocation:1})},{name:"Two Tetrahedra Compound",params:u([3,3],["c",0,0],{reciprocation:1})},{name:"Snub Tetrahedron",params:u([3,3],["s","s","s"])},{name:"Tetrahemihexahedron",params:u([3,3],[1,0,1],[2,1,1])}]},{name:"Cube",params:u([4,3]),subforms:[{name:"Cuboctahedron",params:u([4,3],[0,1,0])},{name:"Truncated Cube",params:u([4,3],[1,1,0])},{name:"Rhombicuboctahedron",params:u([4,3],[1,0,1])},{name:"Truncated Octahedron",params:u([3,4],[1,1,0])},{name:"Truncated Cuboctahedron",params:u([4,3],[1,1,1])},{name:"Octahedron",params:u([3,4])},{name:"Snub Cube",params:u([4,3],["s","s","s"])},{name:"Snub Octahedron",params:u([3,4],["s","s",0])},{name:"Rhombic Dodecahedron",params:u([4,3],[0,"m",0],{reciprocation:1})},{name:"Triakis Octahedron",params:u([4,3],["m","m",0],{reciprocation:1})},{name:"Triakis Hexahedron",params:u([3,4],["m","m",0],{reciprocation:1})},{name:"Deltoidal Icositetrahedron",params:u([4,3],["m",0,"m"],{reciprocation:1})},{name:"Disdyakis Dodecahedron",params:u([4,3],["m","m","m"],{reciprocation:1})},{name:"Pentagonal Icositetrahedron",params:u([4,3],["b","b","b"],{reciprocation:1})},{name:"Cube Octahedron Compound",params:u([4,3],["c",0,0],{reciprocation:1})},{name:"Hemi-Cube",params:u([4,3],[1,0,0],{extrarels:"(abc)^3"})},{name:"Hemi-Octahedron",params:u([3,4],[1,0,0],{extrarels:"(abc)^3"})},{name:"Octahemioctahedron",params:u([[1,3,3],[3,1,3],[3,3,1]],[0,1,1],[[1,2,1],[2,1,1],[1,1,1]],{extrarels:"(abcb)^2"})},{name:"Cubohemioctahedron",params:u([[1,4,4],[4,1,3],[4,3,1]],[0,1,1],[[1,3,1],[3,1,1],[1,1,1]],{extrarels:"(abcb)^2"})}]},{name:"Dodecahedron",params:u([5,3]),subforms:[{name:"Icosidodecahedron",params:u([5,3],[0,1,0])},{name:"Truncate Dodecahedron",params:u([5,3],[1,1,0])},{name:"Rhombicosidodecahedron",params:u([5,3],[1,0,1])},{name:"Truncate Icosahedron",params:u([3,5],[1,1,0])},{name:"Truncated Icosidodecahedron",params:u([5,3],[1,1,1])},{name:"Icosahedron",params:u([3,5])},{name:"Snub Dodecahedron",params:u([5,3],["s","s","s"])},{name:"Rhombic Triacontahedron",params:u([5,3],[0,"m",0],{reciprocation:1})},{name:"Triakis Icosahedron",params:u([5,3],["m","m",0],{reciprocation:1})},{name:"Pentakis Docecahedron",params:u([3,5],["m","m",0],{reciprocation:1})},{name:"Deltoidal Hexecontahedron",params:u([5,3],["m",0,"m"],{reciprocation:1})},{name:"Disdyakis Triacontahedron",params:u([5,3],["m","m","m"],{reciprocation:1})},{name:"Pentagonal Hexecontahedron",params:u([5,3],["b","b","b"],{reciprocation:1})},{name:"Dodecahedron Icosahedron Compound",params:u([5,3],["c",0,0],{reciprocation:1})},{name:"Hemi-Dodecahedron",params:u([5,3],[1,0,0],{extrarels:"(abc)^5"})},{name:"Hemi-Icosahedron",params:u([3,5],[1,0,0],{extrarels:"(abc)^5"})},{name:"Small Dodecahemidodecahedron",params:u([[1,5,5],[5,1,5],[5,5,1]],[0,1,1],[[1,4,1],[4,1,1],[1,1,1]],{extrarels:"(abcb)^2"})},{name:"Small Icosihemidodecahedron",params:u([[1,3,3],[3,1,5],[4,5,1]],[0,1,1],[[1,2,1],[2,1,1],[1,1,1]],{extrarels:"(abcb)^3"})},{name:"Great Dodecahemicosahedron",params:u([[1,5,3],[5,1,5],[3,5,1]],[1,0,1],[[1,4,1],[4,1,1],[1,1,1]],{extrarels:"(abcb)^3"})},{name:"Small Dodecahemicosahedron",params:u([[1,5,3],[5,1,5],[3,5,1]],[0,1,1],[[1,2,1],[2,1,3],[1,3,1]],{extrarels:"(abcb)^3"})},{name:"Great Icosihemidodecahedron",params:u([[1,3,3],[3,1,5],[3,5,1]],[0,1,1],[[1,2,1],[2,1,3],[1,3,1]],{extrarels:"(abcb)^3"})},{name:"Great Dodecahemidodecahedron",params:u([[1,5,5],[5,1,5],[5,5,1]],[0,1,1],[[1,3,2],[3,1,3],[2,3,1]],{extrarels:"(abcb)^2"})}]},{name:"Great Dodecahedron",params:u([5,5],[1,0,0],[1,2]),subforms:[{name:"Small Stellated Docecahedron Great Docecahedron Compound",params:u([5,5],["c",0,0],[1,2],{reciprocation:1})}]},{name:"Great Icosahedron",params:u([3,5],[1,0,0],[1,2]),subforms:[{name:"Great Icosahedron Great Stellated Dodecahedron Compound",params:u([3,5],["c",0,0],[1,2],{reciprocation:1})}]},{name:"Small Stellated Dodecahedron",params:u([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:u([5,3],[1,0,0],[2,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite",dimensions:4})," Polychora"]})},{name:"Tetrahedral Prism",params:u([3,3,2],[1,0,0,1]),subforms:[{name:"Truncated Tetrahedral Prism",params:u([3,3,2],[1,1,0,1])},{name:"Snub Tetrahedral Prism",params:u([3,3,2],["s","s","s",1])},{name:"Omnisnub Tetrahedral Antiprism",params:u([3,3,2],["s","s","s","s"])},{name:"Cubic Prism",params:u([4,3,2],[1,0,0,1])},{name:"Cuboctahedral Prism",params:u([4,3,2],[0,1,0,1])},{name:"Rhombicubochedral Prism",params:u([4,3,2],[1,0,1,1])},{name:"Truncated Cubic Prism",params:u([4,3,2],[1,1,0,1])},{name:"Octahedral Prism",params:u([4,3,2],[0,0,1,1])},{name:"Truncated Octahedral Prism",params:u([4,3,2],[0,1,1,1])},{name:"Truncated Cuboctahedral Prism",params:u([4,3,2],[1,1,1,1])},{name:"Snub Cubic Prism",params:u([4,3,2],["s","s","s",1])},{name:"Omnisnub Cubic Antiprism",params:u([4,3,2],["s","s","s","s"])},{name:"Snub Rhombicubochedral 24-cell",params:u([2,4,3],["s","s",0,1])},{name:"Dodecahedral Prism",params:u([5,3,2],[1,0,0,1])},{name:"Icosidodecahedral Prism",params:u([5,3,2],[0,1,0,1])},{name:"Icosahedral Prism",params:u([5,3,2],[0,0,1,1])},{name:"Truncated Dodacahedral Prism",params:u([5,3,2],[1,1,0,1])},{name:"Rhombicosidodecahedral Prism",params:u([5,3,2],[1,0,1,1])},{name:"Truncated Icosahedral Prism",params:u([5,3,2],[0,1,1,1])},{name:"Truncated Icosidodecahedral Prism",params:u([5,3,2],[1,1,1,1])},{name:"Snub Dodecahedral Prism",params:u([5,3,2],["s","s","s",1])},{name:"Omnisnub Dodecahedral Antiprism",params:u([5,3,2],["s","s","s","s"])},{name:"Great Dodecahedral Prism",params:u([5,5,2],[1,0,0,1],[1,2,1])},{name:"Great Icosahedral Prism",params:u([3,5,2],[1,0,0,1],[1,2,1])},{name:"Small Stellated Dodecahedral Prism",params:u([5,5,2],[1,0,0,1],[2,1,1])},{name:"Great Stellated Dodecahedral Prism",params:u([5,3,2],[1,0,0,1],[2,1,1])}]},{name:"Square Antiprismatic Prism",params:u([4,2,2],["s","s","s",1]),subforms:[{name:"Petagonal Antiprismatic Prism",params:u([5,2,2],["s","s","s",1])},{name:"Hexagonal Antiprismatic Prism",params:u([6,2,2],["s","s","s",1])},{name:"Heptaogonal Antiprismatic Prism",params:u([7,2,2],["s","s","s",1])},{name:"Octagonal Antiprismatic Prism",params:u([8,2,2],["s","s","s",1])}]},{name:"Triangular Triangular Duoprism",params:u([3,2,3],[1,0,1,0]),subforms:[{name:"Triangular Cubic Duoprism",params:u([3,2,4],[1,0,1,0])},{name:"Triangular Pentagonal Duoprism",params:u([3,2,5],[1,0,1,0])},{name:"Triangular Hexagonal Duoprism",params:u([3,2,6],[1,0,1,0])},{name:"Cubic Cubic Duoprism",params:u([4,2,4],[1,0,1,0])},{name:"Cubic Pentagonal Duoprism",params:u([4,2,5],[1,0,1,0])},{name:"Cubic Hexagonal Duoprism",params:u([4,2,6],[1,0,1,0])},{name:"Pentagonal Pentagonal Duoprism",params:u([5,2,5],[1,0,1,0])},{name:"Pentagonal Hexagonal Duoprism",params:u([5,2,6],[1,0,1,0])},{name:"Hexagonal Hexagonal Duoprism",params:u([6,2,6],[1,0,1,0])},{name:"Triangular Cubic Duopyramid",params:u([3,2,4],["m",0,"m",0],{reciprocation:1})},{name:"Triangular Pentagonal Duopyramid",params:u([3,2,5],["m",0,"m",0],{reciprocation:1})},{name:"Triangular Hexagonal Duopyramid",params:u([3,2,6],["m",0,"m",0],{reciprocation:1})},{name:"Cubic Cubic Duopyramid",params:u([4,2,4],["m",0,"m",0],{reciprocation:1})},{name:"Cubic Pentagonal Duopyramid",params:u([4,2,5],["m",0,"m",0],{reciprocation:1})},{name:"Cubic Hexagonal Duopyramid",params:u([4,2,6],["m",0,"m",0],{reciprocation:1})},{name:"Pentagonal Pentagonal Duopyramid",params:u([5,2,5],["m",0,"m",0],{reciprocation:1})},{name:"Pentagonal Hexagonal Duopyramid",params:u([5,2,6],["m",0,"m",0],{reciprocation:1})},{name:"Hexagonal Hexagonal Duopyramid",params:u([6,2,6],["m",0,"m",0],{reciprocation:1})}]},O({name:"5-cell",params:u([3,3,3])}),O({name:"8-cell",params:u([4,3,3])}),O({name:"16-cell",params:u([3,3,4])}),O({name:"24-cell",params:u([3,4,3])}),O({name:"120-cell",params:u([5,3,3])}),O({name:"600-cell",params:u([3,3,5])}),{name:"Snub 24-cell",params:u([[1,3,2,2],[3,1,3,3],[2,3,1,2],[2,3,2,1]],["s","s","s","s"])},{name:"Snub Runcitruncated 24-cell",params:u([3,4,3],["s","s",0,1])},{name:"Icosahedral 120-cell",params:u([3,5,5],[1,0,0,0],[1,1,2],{curve:!1}),subforms:[{name:"Small Stellated 120-cell",params:u([3,5,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Great 120-cell",params:u([5,5,5],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Grand 120-cell",params:u([5,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{name:"Great Stellated 120-cell",params:u([5,3,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Grand Stellated 120-cell",params:u([5,5,5],[1,0,0,0],[2,1,2],{curve:!1})},{name:"Great grand 120-cell",params:u([5,5,3],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Great Icosahedral 120-cell",params:u([5,5,3],[0,0,0,1],[1,2,1],{curve:!1})},{name:"Great grand Stellated 120-cell",params:u([5,3,3],[1,0,0,0],[2,1,1],{curve:!1})}]},{name:"Grand 600-cell",params:u([3,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite",dimensions:5})," Polytera"]})},O({name:"5-simplex",params:u([3,3,3,3])}),O({name:"5-cube",params:u([4,3,3,3])}),O({name:"5-orthoplex",params:u([3,3,3,4])}),O({name:"5-demicube",params:u([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]])}),{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite",dimensions:6})," Polypeta"]})},O({name:"6-simplex",params:u([3,3,3,3,3])}),O({name:"6-cube",params:u([4,3,3,3,3])}),O({name:"6-orthoplex",params:u([3,3,3,3,4])}),O({name:"6-demicube",params:u([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"21"})]}),params:u([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"22"})]}),params:u([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite",dimensions:7})," Polyexa"]})},O({name:"7-simplex",params:u([3,3,3,3,3,3])}),O({name:"7-cube",params:u([4,3,3,3,3,3])}),O({name:"7-orthoplex",params:u([3,3,3,3,3,4])}),O({name:"7-demicube",params:u([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"21"})]}),params:u([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"31"})]}),params:u([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"32"})]}),params:u([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite",dimensions:8})," Polyzetta"]})},O({name:"8-simplex",params:u([3,3,3,3,3,3,3])}),O({name:"8-cube",params:u([4,3,3,3,3,3,3])}),O({name:"8-orthoplex",params:u([3,3,3,3,3,3,4])}),O({name:"8-demicube",params:u([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"42"})]}),params:u([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"41"})]}),params:u([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["4",r.jsx("sub",{children:"21"})]}),params:u([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"finite",dimensions:9})," Polyyotta"]})},O({name:"9-simplex",params:u([3,3,3,3,3,3,3,3])}),O({name:"9-cube",params:u([4,3,3,3,3,3,3,3])}),O({name:"9-orthoplex",params:u([3,3,3,3,3,3,3,4])}),O({name:"9-demicube",params:u([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]])}),{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"affine"})," Euclidean Space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:u([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:u([4,4],[1,0,0])},{name:"Hexagonal",params:u([6,3],[1,0,0])},{name:"Snub Square",params:C([4,4],["s","s",0])},{name:"Snub Trihexagonal",params:C([6,3],["s","s","s"])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:I([4,3,4],[1,0,0,0])},{name:"Octet",params:I([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter Cubic",params:I([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:I([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:I([3,3,4,3],[1,0,0,0,0])},{name:"24-cellic",params:I([3,4,3,3],[1,0,0,0,0])},{name:"4-simpletic",params:I([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0])},{name:"Quarter Tesseractic",params:I([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"affine",dimensions:6})," 5-Honeycombs"]})},{name:"5-simplex",params:I([[1,3,2,2,2,3],[3,1,3,2,2,2],[2,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[3,2,2,2,3,1]],[1,0,0,0,0,0])},{name:"5-cubic",params:I([4,3,3,3,4],[1,0,0,0,0,0])},{name:"5-demicubic",params:I([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,4],[2,2,2,2,4,1]],[1,0,0,0,0,0])},{name:"Quarter 5-cubic",params:I([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,3],[2,2,2,3,1,2],[2,2,2,3,2,1]],[1,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"affine",dimensions:7})," 6-Honeycombs"]})},{name:"6-simplex",params:I([[1,3,2,2,2,2,3],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[3,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:"6-cubic",params:I([4,3,3,3,3,4],[1,0,0,0,0,0,0])},{name:"6-demicubic",params:I([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,4],[2,2,2,2,2,4,1]],[1,0,0,0,0,0,0])},{name:"Quarter 6-cubic",params:I([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,3],[2,2,2,2,3,1,2],[2,2,2,2,3,2,1]],[1,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"22"})]}),params:I([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,3,2],[2,2,3,1,3,2,2],[2,2,2,3,1,2,2],[2,2,3,2,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"affine",dimensions:8})," 7-Honeycombs"]})},{name:"7-simplex",params:I([[1,3,2,2,2,2,2,3],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[3,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:"7-cubic",params:I([4,3,3,3,3,3,4],[1,0,0,0,0,0,0,0])},{name:"7-demicubic",params:I([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,4],[2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0])},{name:"Quarter 7-cubic",params:I([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,3,3,1,3,2,2],[2,2,2,2,3,1,3,3],[2,2,2,2,2,3,1,2],[2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"33"})]}),params:I([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,1,0,0,0])},{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"31"})]}),params:I([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"affine",dimensions:9})," 8-Honeycombs"]})},{name:"8-simplex",params:I([[1,3,2,2,2,2,2,2,3],[3,1,3,2,2,2,2,2,2],[2,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[3,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:"8-cubic",params:I([4,3,3,3,3,3,3,4],[1,0,0,0,0,0,0,0,0])},{name:"8-demicubic",params:I([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,4],[2,2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0,0])},{name:"Quarter 8-cubic",params:I([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,3],[2,2,2,2,2,2,3,1,2],[2,2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"52"})]}),params:I([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"51"})]}),params:I([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["5",r.jsx("sub",{children:"21"})]}),params:I([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,0,1])},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic"})," Hyperbolic Space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",dimensions:3})," Tilings"]})},j([7,3]),j([8,3]),j([5,4]),j([6,4]),j([7,4]),j([8,4]),j([6,5]),j([6,6]),j([8,6]),j([7,7]),j([8,8]),j([0,3]),j([0,4]),j([0,5]),j([0,0]),j([4,3,3]),j([4,4,3]),j([4,4,4]),j([5,3,3]),j([5,4,3]),j([5,4,4]),j([6,3,3]),j([6,4,3]),j([6,4,4]),j([0,3,3]),j([0,4,3]),j([0,4,4]),j([0,0,3]),j([0,0,4]),j([0,0,0]),{name:"Infinite Order Apeirogonal",params:C([0,0],[1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"compact",dimensions:4})," Compact Hyperbolic Honeycombs"]})},{name:"Icosahedral",params:b([3,5,3],[1,0,0,0])},{name:"Order-4 Dodecahedral",params:b([5,3,4],[1,0,0,0])},{name:"Order-5 Dodecahedral",params:b([5,3,5],[1,0,0,0])},{name:"Alternated Order-5 Cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral Cubic",params:b([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],{})},{name:"Tetrahedral Dodecahedral",params:b([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],{})},{name:"Cubic Octahedral",params:b([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Dodcahedral",params:b([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Icosahedral",params:b([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Paracompact Hyperbolic Honeycombs"]})},{name:"Triangular",params:b([3,6,3],[1,0,0,0])},{name:"Hexagonal",params:b([6,3,3],[1,0,0,0])},{name:"Order-6 Tetrahedral",params:b([3,3,6],[1,0,0,0])},{name:"Alternated Order-6 Cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],{})},{name:"Order-5 Hexagonal",params:b([6,3,5],[1,0,0,0])},{name:"Alternated Order-5 Hexagonal",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{})},{name:"Order-6 Hexagonal",params:b([6,3,6],[0,0,0,1])},{name:"Square",params:b([4,4,3],[1,0,0,0])},{name:"Alternated Square",params:b([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],{})},{name:"Order-4 Square",params:b([4,4,4],[0,1,0,0])},{name:"Tetrahedral Square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],{})},{name:"Cubic Square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],{})},{name:"Alternated Cubic Square",params:b([[1,2,4,3],[2,1,3,2],[4,3,1,4],[3,2,4,1]],[1,0,0,0],{})},{name:"Quarter order Square",params:b([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],{})},{name:"Tetrahedral Hexagonal",params:b([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Hexagonal",params:b([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Icosahedral Hexagonal",params:b([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Hexagonal Triangular",params:b([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[0,0,0,1],{})},{name:"Alternated Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],{})},{name:"Alternated Order-4 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],{})},{name:"Alternated Order-5 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{})},{name:"Runcic Order-6 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],{})},{name:"Quarter Order-4 Hexagonal",params:b([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],{})},{name:"Hexagonal",params:b([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"hypercompact",dimensions:4})," ","Hypercompact Hyperbolic Honeycombs"]})},{name:"Order 7-3 Triangular",params:b([3,7,3],[1,0,0,0])},{name:"Order 3-6 Heptagonal",params:b([7,3,6],[1,0,0,0])},{name:"Order-7 Dodecahedral",params:b([5,3,7],[1,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",dimensions:5})," Compact Hyperbolic 4-Honeycombs"]})},{name:"Order-5 5-cell",params:b([3,3,3,5],[1,0,0,0,0])},{name:"120-cell",params:b([5,3,3,3],[1,0,0,0,0])},{name:"Order-5 Tesseratic",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-4 120-cell",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-5 120-cell",params:b([5,3,3,5],[1,0,0,0,0])},{name:"Small Stellated 120-cell",params:b([5,5,3,3],[1,0,0,0,0],[2,1,1,1])},{name:"Pentagrammic-order 600-cell",params:b([3,3,5,5],[1,0,0,0,0],[1,1,1,2])},{name:"Order-5 Icosahedral 120-cell",params:b([3,5,5,5],[1,0,0,0,0],[1,1,2,1])},{name:"Great 120-cell",params:b([5,5,5,3],[1,0,0,0,0],[1,2,1,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:5})," ","Paracompact Hyperbolic 4-Honeycombs"]})},{name:"Order-4 24-cell",params:b([3,4,3,4],[1,0,0,0,0])},{name:"Cubic Honeycomb",params:b([4,3,4,3],[1,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(N,{type:"hyperbolic",subtype:"paracompact",dimensions:6})," ","Paracompact Hyperbolic 5-Honeycombs"]})},{name:"5-orthoplex",params:b([3,3,3,4,3],[1,0,0,0,0,0])},{name:"24-cell Honeycomb",params:b([3,4,3,3,3],[1,0,0,0,0,0])},{name:"16-cell Honeycomb",params:b([3,3,4,3,3],[1,0,0,0,0,0])},{name:"Order-4 24-cell Honeycomb",params:b([3,4,3,3,4],[1,0,0,0,0,0])},{name:"Tesseratic Honeycomb",params:b([4,3,3,4,3],[1,0,0,0,0,0])}];function ye({allowNull:e,name:t,value:n,onChange:o,...a}){const i=g.useCallback(l=>{let{name:f,checked:c}=l.target,d;e?d=n===!1?!0:n?null:!1:d=c,o(f,d)},[e,o,n]),s=g.useRef(null);return g.useLayoutEffect(()=>{e&&s.current&&(n===null?s.current.indeterminate=!0:s.current.indeterminate=!1)},[n,e]),r.jsx("input",{type:"checkbox",ref:s,name:t,checked:n||!1,onChange:i})}const Ae=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(Ae).join("");if(typeof e=="object"&&e)return Ae(e.props.children)},$e=(e,t)=>typeof e=="string"?Ae(e).toLowerCase().includes(t.toLowerCase()):!1,nr=g.memo(function e({name:t,index:n,params:o,search:a,subforms:i=[],sub:s=!1,onPreset:l}){const[f,c]=g.useState(!0),[d,m]=g.useState(!1);return g.useEffect(()=>{if(!a){c(!0),m(!1);return}if($e(t,a)){c(!0);return}if(i.length&&i.some(({name:h})=>$e(h,a))){c(!0),m(!0);return}c(!1),m(!1)},[t,a,i]),f?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`preset${s?" sub":""}`,onClick:()=>l(o,n),children:[r.jsxs("div",{className:`preset-header preset-name-${i.length?"button":"only"}`,children:[i.length?r.jsx("button",{className:`preset-toggle ${d?"open":"closed"}`,onClick:h=>{h.stopPropagation(),m(!d)},children:d?"-":"+"}):null,r.jsx("span",{className:"preset-name",children:t})]}),r.jsx(Ze,{coxeter:o.coxeter,mirrors:o.mirrors,stellation:o.stellation})]}),d&&i.map((h,v)=>r.jsx(e,{...h,sub:!0,search:a,onPreset:l},v))]}):null});function tr({open:e,onPreset:t,onExportImage:n,closePresets:o}){const[a,i]=g.useState(""),[s,l]=g.useState(""),f=g.useCallback(c=>{l(c.target.value),Qe(i(c.target.value),50)},[]);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`presets-overlay ${e?"shown":"hidden"}`,onClick:o}),r.jsx("div",{className:`presets ${e?"shown":"hidden"}`,children:r.jsxs("div",{className:"presets-modal",children:[r.jsxs("div",{className:"presets-header",children:[r.jsxs("div",{className:"presets-search",children:[r.jsx("input",{type:"text",placeholder:"Search",value:s,onChange:f}),r.jsx("button",{className:"presets-clear",onClick:()=>{i(""),l("")},children:Vt})]}),r.jsxs("div",{className:"presets-actions",children:[r.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:Gt}),r.jsx("button",{className:"presets-action",onClick:n,children:Jt}),r.jsx("button",{className:"presets-action",onClick:o,children:Kt})]})]}),r.jsx("div",{className:"presets-list",children:W.map(({type:c,content:d,name:m,params:h,subforms:v},p)=>r.jsx(g.Fragment,{children:c==="title"?r.jsx("h2",{children:d}):c==="group"?r.jsx("h4",{children:d}):r.jsx(nr,{name:m,index:p,params:h,search:a,subforms:v,onPreset:t})},p))})]})})]})}const Ve=g.memo(function({rotations:t,space:n,axis:o}){if(!n)return null;const a=n.gram.length,i=t.shift*2+o;if(i>=t.combinations.length)return null;let s=t.combinations[i];const l=s.some(d=>d<0)?"parabolic":s.some(d=>n.eigens.values[d]<0)?"hyperbolic":s.some(d=>n.eigens.values[d]===0)?"translation":"spheric",f=Dn.slice(0,a).split(""),c=l==="parabolic"?s.map(d=>f[J(d)]).join("->"):f.filter((d,m)=>!s.includes(m));return r.jsxs("aside",{className:`${o?"y":"x"}-rotation`,children:[c,l==="parabolic"?r.jsx("sup",{children:"∞"}):l==="hyperbolic"?r.jsx("sup",{children:"†"}):l==="translation"?r.jsx("sup",{children:"0"}):""]})}),rr=e=>e<4?[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7 2m12 9H5v2h14z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})})][e]:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9"}),r.jsx("text",{x:"12",y:"13.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",children:e})]});function ar({runtime:e,setRuntime:t,showUI:n,updateParams:o}){const a=g.useCallback(()=>{e.paused&&e.polytope.size>e.limit&&o({limit:e.limit+e.start}),t(d=>({...d,paused:!d.paused}))},[e.paused,e.polytope.size,e.limit,e.start,t,o]),i=g.useCallback(d=>{const h=d.target.closest("button").dataset.key.split(","),v=!h.some(E=>e.hidden.includes(E)),p=e.hidden.filter(E=>!h.includes(E));o({hidden:v?[...p,...h]:p})},[e.hidden,o]),s=g.useCallback(d=>{const m=+d.target.closest("button").dataset.key;o({reciprocation:m})},[o]),l=e.polytope.every(d=>d.detail.length<2),f=d=>isFinite(d)?d.toLocaleString():"∞";if(n==="empty")return null;const c=n==="full"?"detail":"aggregated";return r.jsxs("aside",{className:"shape",children:[e.processing?r.jsx("div",{className:"buttons",children:e.paused?r.jsx("button",{className:"iterate button",onClick:a,title:"Resume enumeration",children:Xt}):r.jsx("button",{className:"iterate button",onClick:a,title:"Pause enumeration",children:Wt})}):null,r.jsx("div",{className:`shape-info${e.processing&&!e.paused?" shape-processing":""}${["advanced","full"].includes(n)?" shape-info-expanded":""}`,children:[...e.polytope].reverse().filter(d=>d).filter(d=>d.count>0).map(d=>r.jsxs(g.Fragment,{children:[r.jsxs("div",{className:"shape-icon",style:{gridRow:`span ${d[c].length}`},children:[rr(d.dimensions),d.dual&&!e.curve?r.jsx("button",{className:"shape-reciprocation button","data-key":e.reciprocation===d.dimensions?-1:d.dimensions,onClick:s,children:e.reciprocation===d.dimensions?cn:ln}):null]}),r.jsxs("div",{className:"shape-count",style:{gridRow:`span ${d[c].length}`},children:[d.done||d.processing===void 0?null:`${d.processing} / `,f(d.count)]}),r.jsx("div",{className:d.dimensions>0&&["advanced","full"].includes(n)&&d[c].length>1?" shape-split":"",style:{gridRow:`span ${d[c].length}`}}),["advanced","full"].includes(n)?d[c].map(({count:m,coxeter:h,stellation:v,mirrors:p,key:E})=>r.jsxs(g.Fragment,{children:[r.jsx("div",{className:"shape-count shape-detail-count",title:E,children:!l&&d[c].length>1?f(m):null}),r.jsxs("div",{className:`shape-view-diagram ${E.startsWith("s")?" shape-snub":""}`,children:[[1,2].includes(d.dimensions)&&!d.fundamental?r.jsx("button",{className:"shape-hidden button","data-key":E,title:E,onClick:i,children:E.split(",").some(A=>e.hidden.includes(A))?Yt:qt}):null,h?r.jsx("button",{className:"shape-detail-button",onClick:()=>o({coxeter:h,stellation:v,mirrors:p,dimensions:h.length,matrix:Y(h.length)}),children:r.jsx(Ze,{coxeter:h,stellation:v,mirrors:p})}):null]})]},E)):null]},`shape-${d.dimensions}`))})]})}const or=()=>{try{return localStorage.getItem("showUI")||"simple"}catch(e){return console.error(e),"simple"}};function sr({runtime:e,params:t,rotations:n,setRuntime:o,updateParams:a,updateRotations:i}){var Fe,ze,Pe,Me;const[s,l]=g.useState(or),[f,c]=g.useState(!1),[d,m]=g.useState(0),h=g.useCallback(()=>{c(!1)},[]),v=g.useCallback(x=>{let{name:w,value:T}=x.target;a({[w]:T})},[a]),p=g.useCallback((x,w)=>{a({[x]:w})},[a]),E=g.useCallback(()=>l(x=>{const w={simple:"advanced",advanced:"full",full:"empty",empty:"simple"}[x];try{localStorage.setItem("showUI",w)}catch(T){console.error(T)}return w}),[]),A=g.useCallback((x,w)=>{a(x,!0),m(w),h()},[a,h]),S=g.useCallback(()=>{const x=Y(e.dimensions);x._reset=!0,a({matrix:x,centered:!0})},[a,e.dimensions]),R=g.useCallback(()=>{const x=Y(e.dimensions);x._reset=!0,a({matrix:x,centered:!1})},[a,e.dimensions]),y=g.useCallback(()=>{a(Object.fromEntries(X(3,e.dimensions+1).map(x=>[[`projection${x}`,"orthographic"],[`fov${x}`,90]]).flat()))},[a,e.dimensions]),F=g.useCallback(()=>{a(Object.fromEntries(X(3,e.dimensions+1).map(x=>[`projection${x}`,Te(x,e.dimensions)])))},[a,e.dimensions]),H=g.useCallback(x=>{i("shift",(n.shift+1)%n.maxShift)},[n.maxShift,n.shift,i]),L=g.useCallback(x=>{i("lock",!n.lock)},[n.lock,i]),ne=g.useCallback(x=>{i("auto",n.auto==="free"?"damp":"free")},[n.auto,i]),P=g.useCallback(Qe(x=>{var T;if(!((T=e.polytope)!=null&&T.root))return;const w=$=>{const te=Tt($);return te.split("").every(U=>e.polytope.root.gens.includes(U))?he(te):$};a({extrarels:x.split(",").map($=>w($)).join(", ")})},2e3),[a]),k=g.useCallback(x=>{const{value:w}=x.target;a({extrarels:w}),P(w)},[a,P]),se=g.useMemo(()=>{var x,w;return(w=(x=e.polytope)==null?void 0:x.root)==null?void 0:w.rels.map(T=>he(T)).join(", ")},[(ze=(Fe=e.polytope)==null?void 0:Fe.root)==null?void 0:ze.rels.join(",")]),fn=g.useCallback(async()=>{h();const x=window.prompt("Select image resolution","5000x5000");if(!x||!x.includes("x")){console.error("Invalid resolution");return}const[w,T]=x.split("x").map(U=>parseInt(U));if(isNaN(w)||isNaN(T)){console.error("Invalid resolution");return}const te=await(await Pt(()=>import("./export-d1ab3de3.js"),["./export-d1ab3de3.js","./CoxeterMatrix-fc4e0c17.js"],import.meta.url)).makeBigPng(e,w,T);if(te){const U=document.createElement("a");document.body.appendChild(U),U.style.display="none";const mn=window.URL.createObjectURL(te);U.href=mn,U.download=`${document.title}-${w}x${T}`,U.click()}},[h,e]),Ce=g.useMemo(()=>({square:X(3,e.dimensions+1).some(x=>t[`projection${x}`]!=="orthographic"),cube:X(3,e.dimensions+1).some(x=>t[`projection${x}`]!==Te(x,e.dimensions))}),[t.projection3,t.projection4,t.projection5,t.projection6,t.projection7,t.projection8,t.projection9,e.dimensions]);return g.useEffect(()=>{const x=w=>{if(w.target.tagName!=="INPUT"){if(w.key==="ArrowLeft"&&w.ctrlKey&&d>0){let T=d-1;for(;W[T].type;){if(T<2)return;T--}A(W[T].params,T)}else if(w.key==="ArrowRight"&&w.ctrlKey&&d<W.length-1){let T=d+1;for(;W[T].type;){if(T>W.length-2)return;T++}A(W[T].params,T)}}};return window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[A,d]),r.jsxs(r.Fragment,{children:[r.jsx(tr,{open:f,onPreset:A,onExportImage:fn,closePresets:h}),r.jsxs("main",{className:e.error?"error ui":"ui",title:e.error,children:[r.jsxs("div",{className:"ui-row ui-row-top",children:[["simple","advanced","full"].includes(s)?r.jsxs("aside",{className:"controls",children:[r.jsxs("button",{className:"rotation-button button",onClick:H,title:"Rotation Mode",children:[r.jsx("div",{className:"rotation",style:{transform:`rotate(${n.shift/n.maxShift*360}deg)`},children:kt}),r.jsx("sup",{children:n.shift+1}),r.jsx(Ve,{rotations:n,space:e.space,axis:0}),r.jsx(Ve,{rotations:n,space:e.space,axis:1})]}),r.jsxs("div",{className:"subcontrols",children:[r.jsx("button",{className:"button",onClick:L,children:n.lock?Ht:Ut}),r.jsx("button",{className:"button anim-view",onClick:ne,title:"Animate rotations",children:n.auto==="free"?Mt:n.auto==="damp"?Lt:"?"}),r.jsx("button",{className:"button",onClick:S,title:"Center View",children:ln}),r.jsx("button",{className:"button",onClick:R,title:"Coxeter View",children:cn}),["advanced","full"].includes(s)?r.jsxs(r.Fragment,{children:[Ce.square&&r.jsx("button",{className:"button",onClick:y,title:"Orthographic",children:$t}),Ce.cube&&r.jsx("button",{className:"button",onClick:F,title:"Stereographic",children:Bt})]}):null]})]}):null,["simple","advanced","full"].includes(s)&&r.jsx(jn,{dimensions:t.dimensions,coxeter:t.coxeter,mirrors:t.mirrors,stellation:t.stellation,extended:t.extended,space:e.space,onChange:p,preview:!0})]}),r.jsxs("div",{className:"ui-row ui-row-middle",children:[r.jsx(ar,{runtime:e,setRuntime:o,showUI:s,updateParams:a}),["advanced","full"].includes(s)&&r.jsxs("aside",{className:"view",children:[r.jsx(V,{name:"msaaSamples",label:"MSAA",min:0,step:1,max:me.msaaSamples,value:t.msaaSamples,toggler:t.msaa,togglerName:"msaa",onChange:p}),r.jsx("div",{className:"projection",children:r.jsxs("label",{className:"number-label",children:[r.jsx("span",{className:"number-label",children:"Detail"}),r.jsxs("label",{className:"boolean-label",children:[r.jsx(ye,{name:"adaptative",value:t.adaptative,onChange:p}),"Auto"]}),r.jsx("select",{name:"detail",value:e.detail,onChange:x=>o(w=>({...w,detail:x.target.value})),children:Z.map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,w=>w.toUpperCase())},x))})]})}),s==="full"&&r.jsx(V,{name:"subsampling",label:"subsampling",min:.1,step:.1,value:t.subsampling,onChange:p}),t.dimensions>=3?X(3,t.dimensions+1).map(x=>r.jsxs("div",{className:"projection",children:[s==="full"&&r.jsx(V,{label:`${x}D FOV`,name:`fov${x}`,step:1,value:t[`fov${x}`],onChange:p}),r.jsxs("label",{className:"number",children:[r.jsxs("span",{className:"number-label",children:[x,"D Projection"]}),r.jsx("select",{name:`projection${x}`,value:t[`projection${x}`],onChange:v,children:[...en.filter((w,T)=>{var $;return x===3&&e.dimensions===3&&(($=e.space)==null?void 0:$.curvature)<0||T<9})].map(w=>r.jsx("option",{value:w,children:w.replace(/_/g," ").replace(/./,T=>T.toUpperCase())},w))})]})]},x)):null]})]}),r.jsxs("div",{className:"ui-row ui-row-bottom",children:[["simple","advanced","full"].includes(s)?r.jsx("button",{className:"preset-button button",onClick:()=>c(x=>!x),title:"Presets",children:_t}):null,["advanced","full"].includes(s)&&r.jsxs("aside",{className:"parameters",children:[s==="full"&&((Pe=e.polytope)==null?void 0:Pe.root)&&r.jsxs("label",{className:"rels","data-autosize":t.extrarels||e.extrarels,children:[r.jsxs("span",{children:[e.polytope.root.gens.split("").map(x=>r.jsxs("span",{className:"generator",children:[x,r.jsx("sub",{children:e.polytope.root.transforms[x]})]},x)).reduce((x,w)=>[x,", ",w])," ","/ ",e.polytope.root.subgens.split("").join(", ")," |"," "]}),r.jsx("input",{name:"extrarels",size:4,title:se,placeholder:se,value:t.extrarels||e.extrarels,onChange:k})]}),(Me=e.space)!=null&&Me.curvature?r.jsxs("label",{className:"boolean-label",children:["Normalize",r.jsx(ye,{name:"curve",value:t.curve,onChange:p})]}):null,r.jsx(V,{name:"sizeVertex",label:"Vertices",min:0,step:1,value:t.sizeVertex,toggler:t.drawVertex,togglerName:"drawVertex",onChange:p}),r.jsx(V,{name:"sizeEdge",label:"Edges",min:0,step:1,value:t.sizeEdge,toggler:t.drawEdge,togglerName:"drawEdge",onChange:p}),r.jsxs("label",{className:"boolean-label",children:["Faces",r.jsx(ye,{name:"drawFace",value:t.drawFace,onChange:p})]}),r.jsxs("label",{className:"select-label",children:["Ambiance",r.jsx("select",{name:"ambiance",value:t.ambiance,onChange:v,children:(s==="full"?Object.keys(ee):Object.entries(ee).filter(([x,{extended:w}])=>!w||x===t.ambiance).map(([x])=>x)).map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,w=>w.toUpperCase())},x))})]}),window.location.search.includes("debug")&&s==="full"&&r.jsxs(r.Fragment,{children:[r.jsx(V,{name:"start",label:"Start",min:0,step:1,value:t.start,onChange:p}),r.jsx(V,{name:"limit",label:"Limit",min:0,step:1,value:t.limit,onChange:p}),r.jsx(V,{name:"batch",label:"Batch",min:0,step:1,value:t.batch,onChange:p})]})]}),s==="empty"?r.jsx("div",{className:"spacer"}):null,r.jsx("button",{className:`space-button button${e.processing&&!e.paused?" processing":""}${s==="empty"?" empty":""}`,onClick:E,children:r.jsx(N,{...e.space||{},dimensions:e.dimensions})})]})]})]})}function ir({params:e,updateParams:t}){const[n,o]=g.useState({...e,space:null,shape:null,processing:!0,detail:"medium",iteration:0,polytope:[],shaper:null,paused:!1,error:null});g.useEffect(()=>{o(l=>{try{return l.gl?l:bt(l)}catch(f){return console.error(f),{...l,error:f.message}}})},[n.gl]);const[a,i]=g.useState({shift:0,maxShift:0,combinations:[],auto:"damp",lock:!1});g.useEffect(()=>{o(l=>({...l,...pe(e).params}))},[e]),g.useEffect(()=>{n.space&&i(l=>({...l,shift:0,...In(e.dimensions,n.space)}))},[e.dimensions,n.space]);const s=g.useCallback((l,f)=>{i(c=>({...c,[l]:f}))},[i]);return n.gl?r.jsxs(r.Fragment,{children:[r.jsx(sr,{runtime:n,params:e,rotations:a,setRuntime:o,updateRotations:s,updateParams:t}),r.jsx(Ct,{runtime:n,rotations:a,setRuntime:o,updateRotations:s,updateParams:t})]}):null}const _=(e,t)=>{let n=t,o=0;for(;e.quotientMap[n];)o++,n=e.quotientMap[n];return o>1&&(e.quotientMap[t]=n),n},un=(e,t,n)=>{const o=t,a=[[t,n]];for(;a.length>0;)if([t,n]=a.pop(),t>n&&([t,n]=[n,t]),t=_(e,t),n=_(e,n),t!==n){e.quotientMap[n]=t,e.seen.has(n)&&!e.seen.has(t)&&e.seen.add(t);const i=e.cosets.get(t),s=e.cosets.get(n);e.cosets.delete(n);for(const[l,f]of s)i.has(l)?a.push([i.get(l),f]):i.set(l,f)}return _(e,o)},Ge=(e,t,n,o)=>{t=_(e,t);const a=e.cosets.get(t);a.has(n)?un(e,a.get(n),o):a.set(n,o)},ge=(e,t,n,o)=>{t=_(e,t);let a;const i=e.cosets.get(t);return i.has(n)?(a=_(e,i.get(n)),o!==void 0&&a!==o&&un(e,o,a)):(o?a=o:(a=e.nextVertex++,e.cosets.set(a,new Map),e.unvisited.push(a)),Ge(e,t,n,a),Ge(e,a,fe(n),t)),a},Je=function(e,t,n){let o=n;for(let a=t.length-1;a>0;a--)o=ge(e,o,t[a]);ge(e,o,t[0],n)},cr=function(e){if(!e.words){const n=_(e,1);e.words=new Map,e.words.set(n,""),e.currentWords=new Map,e.currentWords.set(n,""),e.lastCoset=n,e.remaining=[n],e.rootVertex&&e.rootNormals&&e.metric&&(e.vertices=new Map,e.vertices.set(n,e.rootVertex))}const t=new Set;for(;e.remaining.length>0;){const n=e.remaining[0],o=_(e,n),a=e.cosets.get(o),i=e.words.get(o);if(i===void 0){if(t.has(n)){console.warn("Failed to find word for coset",n);return}e.remaining.push(e.remaining.shift()),t.add(n);continue}if(a.size<e.gens.length*2)return;const s=[];for(let l=0;l<e.gens.length;l++){const f=e.gens[l],c=_(e,a.get(f));if(!e.words.has(c)){if(e.cosets.get(c).size<e.gens.length*2)return;s.push([f,c])}}e.remaining.shift();for(let l=0;l<s.length;l++){const[f,c]=s[l],d=f+i;if(e.words.set(c,d),e.currentWords.set(c,d),e.lastCoset=c,e.remaining.push(c),e.vertices){let m=e.vertices.get(o);for(let h=0;h<e.transforms[f].length;h++){const v=e.transforms[f][h];m=Tn(m,e.rootNormals[v],e.metric)}e.vertices.set(c,m)}}}},lr=e=>{if(e.cosets)e.unvisited.splice(0,e.pointer),e.pointer=0;else{e.unvisited=[1],e.pointer=0,e.cosets=new Map([[1,new Map]]),e.nextVertex=2,e.seen=new Set,e.quotientMap={};for(let t=0;t<e.subgens.length;t++)Je(e,e.subgens[t],1)}e.limit=e.limit||1e3,e.done=!1;for(let t=0;t<e.limit;t++){let n=null;for(;e.unvisited.length-e.pointer>0;){const o=e.unvisited[e.pointer++],a=_(e,o);if(!e.seen.has(a)){e.seen.add(a),n=a;break}}if(n===null){e.done=!0;break}for(let o=0;o<e.gens.length;o++)ge(e,n,e.gens[o].toUpperCase()),ge(e,n,e.gens[o]);for(let o=0;o<e.rels.length;o++)Je(e,e.rels[o],n)}},dn=e=>(lr(e),cr(e),e),Ke=()=>{const{location:e}=window;if(e.hash)try{const t=JSON.parse(atob(e.hash.slice(1)));return pe({...me,...t}).params}catch(t){console.warn(t),e.hash=""}return pe(me).params},ur=(e,t=!1)=>{const n="#"+btoa(JSON.stringify(e));window.history[t?"replaceState":"pushState"](null,null,n)},dr=()=>{const[e,t]=g.useState(Ke()),n=g.useCallback(a=>{const i=Ke();i&&(Object.entries(i).forEach(([s,l])=>{Array.isArray(l)&&_e(l,e[s])&&(i[s]=e[s])}),t(i))},[e]),o=g.useCallback((a,i=!1)=>{t(s=>{if(!Object.entries(a).filter(([c,d])=>Array.isArray(d)&&!d._reset?!_e(d,s[c]):s[c]!==d).length)return s;const{params:l,badParams:f}=pe(i?a:{...s,...a},i?[]:Object.keys(a),s);return f.length||ur(l,Object.keys(a).length===1&&a.matrix),l})},[]);return g.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),r.jsx(ir,{params:e,updateParams:o})};On.createRoot(document.getElementById("root")).render(r.jsx(dr,{}));window.ToddCoxeter=dn;window.bench=()=>{const e=performance.now(),t=dn({gens:"abcdef",subgens:"c",rels:["aa","bb","cc","dd","ee","ff","abababab","acac","bcbcbc","adad","bdbd","cdcdcd","aeae","bebe","cece","dedede","afaf","bfbf","cfcf","dfdf","efefef"],limit:1e5});return console.warn(performance.now()-e,t.words.length),t.tc};export{An as c,Q as r};
