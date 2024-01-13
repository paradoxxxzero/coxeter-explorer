import{r as g,m as ye,a as Oe,p as ke,c as q,i as J,b as $,d as B,e as be,T as Ee,s as oe,P as H,t as _e,f as nn,g as tn,h as je,j as U,k as Ue,l as He,n as te,o as rn,q as an,u as on,v as sn,w as cn,x as ln,y as Te,z as fn,A as un,B as r,C as ie,D as Ne,E as Be,F as dn,G as mn,N as k,H as ce,I as pn,J as vn,K as hn,L as Ae}from"./params-f524dcaf.js";var gn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const bn="xyzwvutsrqponmlkjihgfedcba",Ve=["perspective","stereographic","orthographic","klein","inverted","scale","joukowsky","half","upperhalf","halfsphere","band","cross","heart","teardrop","square","ring","sinusoidal","spiral","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],En=["ads","normal","position","uv"],Nn=["lambert","oren-nayar","minnaert","cel","fresnel","reverse"],wn=["phong","blinn-phong","cook-torrance","ward-anisotropic"],K=["lowest","lower","low","lowish","medium","highish","high","higher","ultra"],we=["vertex","edge","face"],Sn=(e,t)=>{const n=g.useRef({previous:null,anteprevious:null,start:null,stable:!1});g.useEffect(()=>{const s=16.666666666666668;if(e.adaptative){let a=null,i=null,o=[];const f=20,u=10,l=c=>{if(i===null){n.current.start===null&&(n.current.start=c),i=c,a=requestAnimationFrame(l);return}if(o.push(c-i),i=c,o.length>ye(f,u)&&o.shift(),o.length>=u&&o.slice(-u).reduce((h,p)=>h+p,0)/u>(n.current.stable?2.01:1.51)*s){o=[],n.current.stable=!1;const h=K.indexOf(e.detail);if(h>1){n.current.anteprevious=n.current.previous,n.current.previous=e.detail;const p=K[h-1];t(m=>({...m,detail:p}))}}if(o.length>=f&&o.slice(-f).reduce((h,p)=>h+p,0)/f<(n.current.stable?1.001:1.01)*s){o=[],n.current.stable=!1;const h=K.indexOf(e.detail);if(h<K.length-2){const p=K[h+1];p===n.current.previous&&e.detail===n.current.anteprevious&&c-n.current.start>1e3?n.current.stable=!0:(n.current.anteprevious=n.current.previous,n.current.previous=e.detail,t(m=>({...m,detail:p})))}}a=requestAnimationFrame(l)};return a=requestAnimationFrame(l),()=>cancelAnimationFrame(a)}},[e.detail,e.adaptative,e.ambiance,e.space,t]),g.useEffect(()=>{n.current={previous:null,anteprevious:null,stable:!1,start:null}},[e.space,e.shaper,e.ambiance])};class de extends g.Component{constructor(t){super(t),this.state={error:!1}}static getDerivedStateFromError(t){return{error:!0}}static getDerivedStateFromProps(t){return{error:t.error}}componentDidCatch(t,n){this.props.onError(t,n)}render(){return this.state.error?null:this.props.children}}var Ge={exports:{}};(function(e,t){(function(n,s){e.exports=s()})(gn,function(){var n=function(){function s(p){return o.appendChild(p.dom),p}function a(p){for(var m=0;m<o.children.length;m++)o.children[m].style.display=m===p?"block":"none";i=p}var i=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),a(++i%o.children.length)},!1);var f=(performance||Date).now(),u=f,l=0,c=s(new n.Panel("FPS","#0ff","#002")),d=s(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=s(new n.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:o,addPanel:s,showPanel:a,begin:function(){f=(performance||Date).now()},end:function(){l++;var p=(performance||Date).now();if(d.update(p-f,200),p>u+1e3&&(c.update(1e3*l/(p-u),100),u=p,l=0,h)){var m=performance.memory;h.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return p},update:function(){f=this.end()},domElement:o,setMode:a}};return n.Panel=function(s,a,i){var o=1/0,f=0,u=Math.round,l=u(window.devicePixelRatio||1),c=80*l,d=48*l,h=3*l,p=2*l,m=3*l,E=15*l,T=74*l,S=30*l,R=document.createElement("canvas");R.width=c,R.height=d,R.style.cssText="width:80px;height:48px";var y=R.getContext("2d");return y.font="bold "+9*l+"px Helvetica,Arial,sans-serif",y.textBaseline="top",y.fillStyle=i,y.fillRect(0,0,c,d),y.fillStyle=a,y.fillText(s,h,p),y.fillRect(m,E,T,S),y.fillStyle=i,y.globalAlpha=.9,y.fillRect(m,E,T,S),{dom:R,update:function(C,L){o=Math.min(o,C),f=Math.max(f,C),y.fillStyle=i,y.globalAlpha=1,y.fillRect(0,0,c,E),y.fillStyle=a,y.fillText(u(C)+" "+s+" ("+u(o)+"-"+u(f)+")",h,p),y.drawImage(R,m+l,E,T-l,S,m,E,T-l,S),y.fillRect(m+T-l,E,l,S),y.fillStyle=i,y.globalAlpha=.9,y.fillRect(m+T-l,E,l,u((1-C/L)*S))}}},n})})(Ge);var yn=Ge.exports;const jn=xn(yn),In=`const vec2 cone = vec2(1., 0);
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
`,On=`// Global vertex uniforms

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
`,Tn=`#version 300 es
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
`,An=`#loopN2
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
`,Cn=`#include helpers
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
`,Fn=`#ifdef OIT
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
`,me=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),F=(e,t,n)=>{let s,a,i;if(t===0)s=a=i=n;else{const o=n<.5?n*(1+t):n+t-n*t,f=2*n-o;s=me(f,o,e+1/3),a=me(f,o,e),i=me(f,o,e-1/3)}return[s,a,i]},re=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],Mn={background:[0,0,0,1],glow:!1,shading:"ads",diffuse:"lambert",specular:!1,shininess:32,opacity:1,ambient:.2,roughness:.85,gouraud:!1,transparency:"oit",color:({word:e})=>F(e.length*.03%1,.75,.7)},X=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},shading:!1,face:{opacity:.025},transparency:"blend",color:({word:e,dual:t})=>F((e.length*.17-(t?.43:0))%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,diffuse:"fresnel",opacity:.025},transparency:"blend",color:({word:e})=>F(...re[e.length%re.length])},cathedral:{background:[.6,.6,.6,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,opacity:.9},transparency:"oit",color:({word:e,type:t})=>t==="face"?F(e.length*.3%1,1,.6):[0,0,0]},synthwave:{background:[...F(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},shading:!1,face:{opacity:.015},afterImage:.7,transparency:"blend",color:({word:e})=>F((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e,dual:t})=>F(e.length*.03%1-(t?.25:0),1,.8)},shiny:{background:[0,0,0,1],diffuse:"lambert",specular:"blinn-phong",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>F(-(e.length*.07)%1,1,.8)},shape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({faceSize:e,type:t,idx:n,size:s})=>t==="face"?F((e-2)*.21%1,1,.8):F(n/s,.75,.5)},subShape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({subShape:e,type:t})=>t!=="vertex"?F(e*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],diffuse:"cel",face:{opacity:.6,gouraud:!1},transparency:"blend",color:({word:e,type:t,dimensions:n,draw:s})=>{const a=e.length?Oe(e[e.length-1])/n:0;return F(a%1,1,t==="face"?.6:s.face?0:.8)}},harlequin:{background:[...F(240/360,.23,.09),1],face:{opacity:.6},transparency:"oit",color:({word:e,idx:t,type:n})=>{const s=e.split("").map(i=>Oe(i)).reduce((i,o)=>i+o,0),a=[...re[s%re.length]];return t%2&&(a[2]*=.5),F(...a)}},pure:{background:[0,0,0,1],color:({word:e})=>F(e.length*.03%1,.75,.7)},facets:{background:[0,0,0,1],color:({faceIndex:e,faceSize:t})=>F(e/t,.75,.7)},monochrome:{background:[.12,.12,.12,1],diffuse:"reverse",ambient:0,face:{opacity:.1},transparency:"oit",color:()=>[1,1,1]},plain:{extended:!0,background:[1,1,1,1],glow:!1,shading:!1,color:({word:e,type:t,draw:n})=>F(e.length*.06%1,1,t==="face"?.6:n.face?.05:.5)},plainblack:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e,type:t})=>t==="face"?new Array(3).fill(1-ke(.9,e.length+1)):[0,0,0]},normals:{extended:!0,background:[1,1,1,1],shading:"normal",color:()=>[0,0,0]},uvs:{extended:!0,background:[1,1,1,1],shading:"uv",color:()=>[0,0,0]}}).map(([e,t])=>[e,{...Mn,...t,transparent:{}}])),Pn={globals:Tn,dimensions:On,project:Cn,helpers:An,complex:In,fragment:Fn,vertexouthead:zn,lighting:Rn,vertexout:Dn},Ln=(e,t,n)=>{t=n?1:t||1,t=Math.max(0,t);const s=n?n.width:e.clientWidth*t|0,a=n?n.height:e.clientHeight*t|0;return e.width!==s||e.height!==a?(e.width=s,e.height=a,!0):!!n},pe=(e,t)=>e.replace(/\bvecN\b/g,`vec${t}`).replace(/\bmatN\b/g,`mat${t}`).replace(/\bfovN\b/g,`fov${t}`).replace(/\bvecN_1\b/g,`vec${t-1}`).replace(/\bvec1\b/g,"float").replace(/\b_N_\b/g,`${t}`).replace(/\b_Nf_\b/g,`${t}.`).replace(/\PROJECTION_N\b/g,`PROJECTION${t}`),kn=(e,t)=>pe(e.replace(/#loopN(\d)(.+?)#endloopN/gs,(n,s,a)=>{const i=[];for(let o=s;o<=t;o++)i.push(pe(a.replace(/#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,(f,u,l,c,d)=>u===`${o}`?pe(l,o):d||""),o));return i.join(`
`)}),t),Re=(e,t,n,s)=>{var u;const a=X[e.ambiance];let i="";const o=l=>l.toString().includes(".")?l:`${l}.`;Object.entries({shading:l=>En.indexOf(l),diffuse:l=>Nn.indexOf(l),specular:l=>wn.indexOf(l),ambient:l=>o(l),shininess:l=>o(l),roughness:l=>o(l),opacity:l=>o(l),gouraud:l=>""}).forEach(([l,c])=>{const d=Object.keys(a).includes(s)&&Object.keys(a[s]).includes(l)?a[s][l]:a[l];d!==!1&&(i+=`#define ${l.toUpperCase()} ${c(d)}
`),l==="opacity"&&d<1&&(a.transparent[s]=!0,i+=`#define TRANSPARENT
`,a.transparency==="oit"&&(i+=`#define OIT
`))}),i+=`#define DIMENSIONS ${e.dimensions}
`;for(let l=3;l<=e.dimensions;l++)i+=`#define PROJECTION${l} ${Ve.indexOf(e[`projection${l}`])-1}
`;return i+=`#define CURVATURE ${((u=e.space)==null?void 0:u.curvature)||0}
`,e.curve&&(i+=`#define SEGMENTS
`),Object.entries({...Pn,config:i}).forEach(([l,c])=>{t=t.replace(`#include ${l}`,c),n=n.replace(`#include ${l}`,c)}),[t,n].map(l=>kn(l,e.dimensions))},ae=(e,t,n,s,a)=>{if(e.gl.shaderSource(a,s),e.gl.compileShader(a),!e.gl.getShaderParameter(a,e.gl.COMPILE_STATUS)){const o=e.gl.getShaderInfoLog(a);return console.error(`An error occurred compiling the ${t}->${n} shader: ${o}`,{shaderSource:s}),o}},Ce=(e,t,n)=>{const{gl:s}=e;if(s.linkProgram(n),!s.getProgramParameter(n,s.LINK_STATUS)){const i=s.getProgramInfoLog(n);return console.error(`Unable to initialize the ${t} shader program: ${i}`),i}},$e=(e,t,n,s,a=[])=>{const{gl:i}=e,o=i.createProgram(),f=i.createShader(i.VERTEX_SHADER),u=i.createShader(i.FRAGMENT_SHADER);if(ae(e,t,"vertex",n,f)||ae(e,t,"fragment",s,u)||(i.attachShader(o,f),i.attachShader(o,u),Ce(e,t,o)))return;const l={program:o,vertexShader:f,fragmentShader:u,uniformsDef:a,recompile(c,d,h,p=null){ae(c,t,"vertex",d,this.vertexShader)||ae(c,t,"fragment",h,this.fragmentShader)||Ce(c,t,this.program)||(p&&(this.uniformsDef=p),this.bindUniforms(c))},bindUniforms(c){this.uniforms={},this.uniformsDef.forEach(({name:d,type:h,value:p})=>{this.uniforms[d]=_n(c,this.program,d,h),this.uniforms[d].update(p)})}};return l.bindUniforms(e),l},Z=(e,t,n,s,a,i=null,o=null)=>{const{gl:f}=e;o=o||f.FLOAT;const u=o===f.FLOAT?4:2,l={name:n,mesh:t,indices:qe,instances:i,data:a,size:s,type:o,update(c=null,d=null,h=null){f.bindVertexArray(this.mesh.vao),f.bindBuffer(f.ARRAY_BUFFER,this.buffer),c===null&&d===null&&h===null?f.bufferData(f.ARRAY_BUFFER,this.data,f.STATIC_DRAW):(this.data.set(c,d*this.size),f.bufferSubData(f.ARRAY_BUFFER,d*this.size*u,this.data,d*this.size,h*this.size))},extend(c,d,h=!1){if(f.bindVertexArray(this.mesh.vao),this.size=c,d&&(h&&d.length>=this.data.length&&d.set(this.data),this.data=d),this.location=f.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;f.bindBuffer(f.ARRAY_BUFFER,this.buffer);const p=c>4?3:1;for(let m=0;m<p;m++)f.enableVertexAttribArray(this.location+m);for(let m=0;m<p;m++)f.vertexAttribPointer(this.location+m,c/p,this.type,!1,c*u,c/p*m*u);for(let m=0;m<p;m++)f.vertexAttribDivisor(this.location+m,this.instances||0);this.update()},get(){f.bindVertexArray(this.mesh.vao),f.bindBuffer(f.ARRAY_BUFFER,this.buffer);const c=new Float32Array(this.data.length);return f.getBufferSubData(f.ARRAY_BUFFER,0,c),c}};return l.buffer=f.createBuffer(),l.extend(s),l},qe=(e,t,n)=>{const{gl:s}=e;s.bindVertexArray(t);const a=s.createBuffer();return s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,a),s.bufferData(s.ELEMENT_ARRAY_BUFFER,n,s.STATIC_DRAW),{buffer:a,vao:t,indices:n,count:n.length,update(i){s.bindVertexArray(this.vao),this.indices=i,this.count=i.length,s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,this.buffer),s.bufferData(s.ELEMENT_ARRAY_BUFFER,i,s.STATIC_DRAW)}}},_n=(e,t,n,s)=>{const{gl:a}=e;return{program:t,update(o){if(a.useProgram(this.program),s.startsWith("m")){const f=parseInt(s.slice(1,2));if(f>4)for(let u=0;u<f;u++){const l=a.getUniformLocation(t,`${n}.c${u+1}.v`);if(l!==null&&a.uniform4fv(l,o[u][0]),f-4===1){const c=a.getUniformLocation(t,`${n}.c${u+1}.u`);c!==null&&a.uniform1f(c,o[u][1])}else if(f-4>1){const c=a.getUniformLocation(t,`${n}.c${u+1}.u`);if(c!==null&&a[`uniform${B(f-4,4)}fv`](c,o[u][1]),f-8===1){const d=a.getUniformLocation(t,`${n}.c${u+1}.t`);d!==null&&a.uniform1f(d,o[u][2])}}}else{const u=a.getUniformLocation(t,n);u!==null&&a[`uniformMatrix${s.slice(1)}`](u,!1,o)}}else{const f=a.getUniformLocation(t,n);f!==null&&a[`uniform${s}`](f,o)}},get(){a.useProgram(this.program);const o=a.getUniformLocation(t,n);if(o!==null)return a.getUniform(this.program,o)}}},_=(e,t,n=null)=>{const{gl:s}=e,a=n?~~(n*s.drawingBufferWidth):s.drawingBufferWidth,i=n?~~(n*s.drawingBufferHeight):s.drawingBufferHeight,o=s.createTexture();return s.bindTexture(s.TEXTURE_2D,o),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,n?s.LINEAR:s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,n?s.LINEAR:s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texStorage2D(s.TEXTURE_2D,1,t,a,i),{texture:o,width:a,height:i}},Q=(e,t,n,s,a=[])=>{const i={name:t,vertex:n,fragment:s,...$e(e,t,n,s,a),recompileProgram(o){this.recompile(o,this.vertex,this.fragment,a)}};return{[t]:i}},ve=(e,t,n,s,a,i,o,f=["position"])=>{var h;const{gl:u}=e,l=a(((h=e.space)==null?void 0:h.curvature)&&e.curve,e.detail),c=p=>[{name:"viewProjection",type:"m4fv",value:q(J(4))},{name:"matrix",type:`m${p.dimensions}fv`,value:q(p.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${p.dimensions}fv`,value:q(J(p.dimensions))},{name:"zoom",type:"1f",value:1},...["vertex","edge"].includes(t)?[{name:"thickness",type:"1f",value:0}]:[],...$(3,p.dimensions+1,1,!0).map(m=>({name:`fov${m}`,type:"1f",value:p[`fov${m}`]}))];o=o>4?9:o;const d={attributes:{},varying:f,vertex:n,type:t,fragment:s,...$e(e,t,...Re(e,n,s,t),c(e)),recompileProgram(p){const[m,E]=Re(p,this.vertex,this.fragment,this.type);this.recompile(p,m,E,c(p))},changeArity(p){p=p>4?9:p,this.arity!==p&&(this.arity=p,this.extendAttributes(this.instances))},extendAttributes(p){this.instances=p,f.forEach(m=>{this.attributes[m].extend(this.arity,new Float32Array(p*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(p*3),!0)},updateGeometry(p){const m=a(p.space.curvature&&p.curve,p.detail);this.indices.update(new Uint16Array(m.indices)),this.attributes.vertex.extend(3,new Float32Array(m.vertices)),this.attributes.uv.extend(2,new Float32Array(m.uvs)),this.attributes.normal.extend(3,new Float32Array(m.normals))},fillData(p,m){if(!m){this.count=0;return}this.count=m.start+m.size,this.instances<this.count&&this.extendAttributes(this.count),this.attributes.color.update(p[0],m.start,m.size);for(let E=0;E<this.varying.length;E++){const T=this.varying[E];this.attributes[T].update(p[E+1],m.start,m.size)}},render(p){this.count&&(u.useProgram(this.program),u.bindVertexArray(this.vao),u.drawElementsInstanced(u.TRIANGLES,this.indices.count,u.UNSIGNED_SHORT,0,this.count))}};return d.vao=u.createVertexArray(),d.indices=qe(e,d.vao,new Uint16Array(l.indices)),d.attributes.vertex=Z(e,d,"vertex",3,new Float32Array(l.vertices)),d.attributes.uv=Z(e,d,"uv",2,new Float32Array(l.uvs)),d.attributes.normal=Z(e,d,"normal",3,new Float32Array(l.normals)),d.attributes.color=Z(e,d,"color",3,new Float32Array(i*3),1),f.forEach(p=>{d.attributes[p]=Z(e,d,p,o,new Float32Array(i*o),1)}),d.type=t,d.arity=o,d.instances=i,d.count=0,{[t]:d}},he=(e,t,n,s)=>{const{gl:a}=e;a.bindRenderbuffer(a.RENDERBUFFER,t),s?a.renderbufferStorageMultisample(a.RENDERBUFFER,s,n,a.drawingBufferWidth,a.drawingBufferHeight):a.renderbufferStorage(a.RENDERBUFFER,n,a.drawingBufferWidth,a.drawingBufferHeight),a.bindRenderbuffer(a.RENDERBUFFER,null)},Un=({radius:e=1,widthSegments:t=16,segments:n=16}={})=>{const s=[],a=[],i=[],o=[];let f=0;const u=[];for(let l=0;l<=n;l++){const c=[],d=l/n;let h=0;l===0?h=.5/t:l===n&&(h=-.5/t);for(let p=0;p<=t;p++){const m=p/t,E=[-e*be(m*Ee)*oe(d*H),e*be(d*H),e*oe(m*Ee)*oe(d*H)];a.push(...E);const T=(E[0]**2+E[1]**2+E[2]**2)**-.5;i.push(...E.map(S=>S*T)),o.push(m+h,1-d),c.push(f++)}u.push(c)}for(let l=0;l<n;l++)for(let c=0;c<t;c++){const d=u[l][c+1],h=u[l][c],p=u[l+1][c],m=u[l+1][c+1];l!==0&&s.push(d,h,m),l!==n-1&&s.push(h,p,m)}return{vertices:a,normals:i,uvs:o,indices:s}},Hn=({radius:e=null,radiusTop:t=1,radiusBottom:n=1,height:s=1,radialSegments:a=8,segments:i=1}={})=>{const o=[],f=[],u=[],l=[];e!==null&&(t=e,n=e);let c=0;const d=[],h=s/2,p=(n-t)/s;for(let m=0;m<=i;m++){const E=[],T=m/i,S=T*(n-t)+t;for(let R=0;R<=a;R++){const y=R/a,C=y*Ee,L=oe(C),M=be(C),Y=[S*L,-T*s+h,S*M];f.push(...Y);const D=[L,p,M],z=(D[0]**2+D[1]**2+D[2]**2)**-.5;u.push(...D.map(ne=>ne*z)),l.push(y,1-T),E.push(c++)}d.push(E)}for(let m=0;m<a;m++)for(let E=0;E<i;E++){const T=d[E][m],S=d[E+1][m],R=d[E+1][m+1],y=d[E][m+1];o.push(T,S,y),o.push(S,R,y)}return{vertices:f,normals:u,uvs:l,indices:o}},Bn=({segments:e=3}={})=>{const t=[],n=[],s=[],a=[],i=1/e;for(let o=0;o<e+1;o++)for(let f=0;f<o+1;f++)n.push((2*f-o)*i/2,o*i,0),s.push(0,0,1),a.push(i*f,1-i*o);for(let o=1;o<e+1;o++)for(let f=0;f<o;f++){const u=o*(o+1)/2+f,l=o*(o-1)/2+f;if(t.push(u,l,u+1),o<e){const c=(o+1)*(o+2)/2+f;t.push(c+1,u,u+1)}}return{vertices:n,normals:s,uvs:a,indices:t}},Vn=`#include globals
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
`,$n=`#include globals
#include fragment
`,qn=`#include globals
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
`,ge={vertex:(e,t)=>Un({lowest:{widthSegments:6,segments:2},lower:{widthSegments:8,segments:4},low:{widthSegments:8,segments:8},lowish:{widthSegments:12,segments:8},medium:{widthSegments:16,segments:16},highish:{widthSegments:32,segments:16},high:{widthSegments:32,segments:32},higher:{widthSegments:64,segments:32},ultra:{widthSegments:128,segments:64}}[t||"medium"]),edge:(e,t)=>Hn({lowest:{segments:e?4:1,radialSegments:4},lower:{segments:e?8:1,radialSegments:5},low:{segments:e?12:1,radialSegments:6},lowish:{segments:e?14:1,radialSegments:7},medium:{segments:e?16:1,radialSegments:8},highish:{segments:e?24:1,radialSegments:10},high:{segments:e?32:1,radialSegments:12},higher:{segments:e?64:1,radialSegments:16},ultra:{segments:e?128:1,radialSegments:32}}[t||"medium"]),face:(e,t)=>Bn({lowest:{segments:e?4:1},lower:{segments:e?8:1},low:{segments:e?12:1},lowish:{segments:e?14:1},medium:{segments:e?16:1},highish:{segments:e?24:1},high:{segments:e?32:1},higher:{segments:e?64:1},ultra:{segments:e?128:1}}[t||"medium"])};function Wn(e){return{meshes:we,...ve(e,"vertex",Kn,Jn,ge.vertex,1024,e.dimensions),...ve(e,"edge",Gn,Vn,ge.edge,1024,e.dimensions,["position","target"]),...ve(e,"face",qn,$n,ge.face,1024,e.dimensions,["position","target","center"]),reset(){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].count=0},changeArity(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].changeArity(t)},updateGeometries(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].updateGeometry(t)},recompilePrograms(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].recompileProgram(t)},updateUniforms(t,n=!1,s=null){for(let a=0;a<this.meshes.length;a++){const i=this.meshes[a],o=this[i];if(!n){o.uniforms.metric.update(q(t.space.metric)),o.uniforms.matrix.update(q(t.matrix));for(let f=4;f<=t.dimensions;f++)o.uniforms[`fov${f}`].update(1/_e(H*t[`fov${f}`]*.5/180));i==="vertex"?o.uniforms.thickness.update(t.sizeVertex):i==="edge"&&o.uniforms.thickness.update(t.sizeEdge)}o.uniforms.viewProjection.update(t.camera.viewProjection),o.uniforms.zoom.update(n?s:t.zoom),o.uniforms.eye.update(t.camera.eye)}},fillData(t){for(let n=0;n<this.meshes.length;n++){const s=this.meshes[n];this[s].fillData(t.data[n],t.infos[n])}}}}const Xn=`#version 300 es
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
`;function st(e){return{...Q(e,"oit",rt,tt,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...Q(e,"down",nt,et,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Q(e,"up",ot,at,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...Q(e,"afterImage",Yn,Xn,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...Q(e,"bloom",Qn,Zn,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function Je(e){const{gl:t}=e,n=X[e.ambiance],s=e.msaa?B(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(t.bindFramebuffer(t.FRAMEBUFFER,e.fb.base),he(e,e.rb.base,t.RGBA8,s),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,e.rb.base),he(e,e.rb.depth,t.DEPTH_COMPONENT24,s),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),e.fb.oit&&(t.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(t.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(t.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&t.deleteRenderbuffer(e.rb.depth_copy),n.transparency==="oit"&&(e.fb.oit=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.oit),s?(e.rb.depth_copy=t.createRenderbuffer(),he(e,e.rb.depth_copy,t.DEPTH_COMPONENT24),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth_copy)):t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),e.textures.oitAccum=_(e,t.RGBA16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=_(e,t.R16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT1,t.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(t.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(t.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(t.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(t.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),n.afterImage&&(e.fb.afterImage=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=_(e,t.RGBA8),e.textures.afterImageScreen=_(e,t.RGBA8),e.textures.afterImageOutScreen=_(e,t.RGBA8)),e.fb.kawase&&(t.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(t.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let a=0;a<e.textures.kawase.length;a++)t.deleteTexture(e.textures.kawase[a].texture);e.textures.kawase=null}if(e.textures.blur&&(t.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(t.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),n.glow){e.fb.kawase=t.createFramebuffer(),e.fb.bloom=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let a=0;a<n.glow.steps;a++)e.textures.kawase[a]=_(e,t.RGBA8,n.glow.pow**-a);e.textures.blur=_(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.blur.texture,0),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=_(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.bloom.texture,0)}}const Ke=window.location.search.includes("stats");let se;Ke&&(se=new jn,se.dom.id="stats",document.body.appendChild(se.dom));const it=e=>{const t=document.createElement("canvas");t.id="webgl2",document.body.insertBefore(t,document.body.firstChild);const n=t.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:n},!n){console.error("Unable to initialize WebGL. Your browser may not support it.");return}n.getExtension("EXT_color_buffer_float"),n.enable(n.DEPTH_TEST);const s={zoom:1,fov:H/3,eye:[0,0,-e.zoom],near:.01,far:1e3,update(l){const c=J(4);c[0][3]=this.eye[0],c[1][3]=this.eye[1],c[2][3]=this.eye[2],c[0][0]=-1,c[2][2]=-1;const d=nn(c);this.aspect=l?l.fullWidth/l.fullHeight:n.canvas.clientWidth/n.canvas.clientHeight,this.zoom=B(this.aspect,1);const h={left:0,right:0,top:0,bottom:0,near:this.near,far:this.far};h.top=this.near*_e(this.fov/2)/this.zoom;let p=2*h.top,m=this.aspect*p;h.left=-.5*m,l&&(h.left+=l.x*m/l.fullWidth,h.top-=l.y*p/l.fullHeight,m*=l.width/l.fullWidth,p*=l.height/l.fullHeight),h.bottom=h.top-p,h.right=h.left+m;const E=tn(h);this.viewProjection=q(je(E,d))}};s.update();const a=st(e),i=Wn(e),o={base:n.createRenderbuffer(),depth:n.createRenderbuffer()},f={base:n.createFramebuffer()};return{...e,gl:n,camera:s,meshes:i,passes:a,rb:o,fb:f,textures:{}}},le=(e,t=null)=>{e.camera.fov=e.fov3?H*e.fov3/180:1,t!==null&&(e.camera.eye[2]=t===null?-e.zoom:-t),e.camera.update(),e.meshes.updateUniforms(e,!0,t)},ct=e=>{const t=X[e.ambiance];e.gl.clearColor(...t.background),t.glow&&(e.passes.bloom.uniforms.exposure.update(t.glow.exposure),e.passes.bloom.uniforms.strength.update(t.glow.strength),e.passes.down.uniforms.offset.update(t.glow.offset.down),e.passes.up.uniforms.offset.update(t.glow.offset.up)),t.afterImage&&e.passes.afterImage.uniforms.strength.update(t.afterImage)},W=(e,t)=>{Ke&&se.update();const{gl:n}=e,s=e.msaa?B(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,a=X[e.ambiance];Ln(n.canvas,e.subsampling,t)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),Je(e),e.camera.update(t),e.meshes.updateUniforms(e,!0,e.zoom)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),a.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),a.transparent.vertex||e.meshes.vertex.render(e),a.transparent.edge||e.meshes.edge.render(e),a.transparent.face||e.meshes.face.render(e),(e.drawVertex&&a.transparent.vertex||e.drawEdge&&a.transparent.edge||e.drawFace&&a.transparent.face)&&(a.transparency==="oit"?(s&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):a.transparency==="blend"&&(n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e)));const i=a.afterImage?e.fb.afterImage:a.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,i),a.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let o=e.textures.bloom;if(a.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),a.glow?o=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),a.glow){n.disable(n.BLEND),a.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let f=0;f<a.glow.steps;f++){const u=f===0?o:e.textures.kawase[f-1],l=e.textures.kawase[f];n.viewport(0,0,l.width,l.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,l.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let f=a.glow.steps-1;f>=0;f--){const u=e.textures.kawase[f],l=f===0?e.textures.blur:e.textures.kawase[f-1];n.viewport(0,0,l.width,l.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,l.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,o.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=W;const ee=.9,lt=.95,ft=10,We=(e,t,n,s,a,i)=>{const{combinations:o}=n,f=[[],[]],u=(c,d)=>{Ue(s,je(He(c,d,a,i),s))},l=2*t+1>o.length-1?[t*2]:[t*2+1,t*2];for(let c=0;c<l.length;c++){const d=l[c];if(f[c].push(d),n.lock&&o[d][0]>=0&&o[d][1]>=0)for(let h=0;h<o.length;h++)o[h][0]<0||o[h][1]<0||!o[d].some(p=>o[h].includes(p))&&(!(c>0)||h!==l[1-c])&&f[c].push(h)}for(let c=0;c<f.length;c++){const d=f[c];for(let h=0;h<d.length;h++){const p=d[h];u(e[c],o[p])}}return f},ut=(e,t,n,s,a,i)=>{const{code:o}=e,f=.1;if(e.altKey||e.ctrlKey||e.metaKey)return;const u=(l,c,d)=>We([l,c],d,t,n,s,a);if(o==="ArrowLeft"||o==="KeyA")u(f,0,0);else if(o==="ArrowRight"||o==="KeyD")u(-f,0,0);else if(o==="ArrowUp"||o==="KeyW")u(0,f,0);else if(o==="ArrowDown"||o==="KeyS")u(0,-f,0);else if(o==="PageUp"||o==="KeyQ")u(f,0,1);else if(o==="PageDown"||o==="KeyE")u(-f,0,1);else if(o==="Digit1")u(0,f,1);else if(o==="Digit3")u(0,-f,1);else if(o==="KeyZ")u(f,0,2);else if(o==="KeyC")u(-f,0,2);else if(o==="ControlLeft")i("shift",(t.shift+1)%t.maxShift);else return;return!0},dt=(e,t,n,s)=>{const a=g.useRef(null),i=g.useRef({pause:new Set,speed:null,zoom:null,t:null}),o=g.useRef({matrix:e.matrix,zoom:e.zoom,pointers:new Map});g.useEffect(()=>{o.current.matrix=e.matrix},[e.matrix]),g.useEffect(()=>{o.current.zoom=e.zoom,i.current.zoom=null},[e.zoom]);const f=g.useCallback(({matrix:l,zoom:c}={matrix:!0,zoom:!0})=>{if(!e.matrix._reset){if(l)for(let d=0;d<we.length;d++)e.meshes[we[d]].uniforms.matrix.update(q(o.current.matrix));c&&le(e,o.current.zoom)}},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.drawVertex,e.drawEdge,e.drawFace,e.error,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,e.stellation,e.subsampling,e.zoom]);g.useEffect(()=>{i.current.speed=new Array(t.combinations.length).fill(0)},[t.combinations.length]),g.useEffect(()=>{e.matrix._reset&&(delete e.matrix._reset,i.current.speed=new Array(t.combinations.length).fill(0))},[t.combinations.length,e.matrix]);const u=g.useCallback(()=>{const{pause:l,speed:c,zoom:d}=i.current;i.current.t||(i.current.t=performance.now());const h=performance.now()-i.current.t;let p=!1;for(let m=0;m<c.length;m++)if(c[m]!==0&&(p=!0,t.auto==="damp"&&(c[m]*=lt,U(c[m])<1e-6&&(c[m]=0)),!l.has(m))){const E=ye(B(c[m]*h,.5),-.5);Ue(o.current.matrix,je(He(E,t.combinations[m],e.dimensions,e.space.metric),o.current.matrix))}if(p&&f({matrix:!0}),d){const m=te(o.current.zoom)/te(ee),E=te(d)/te(ee);o.current.zoom*=ke(ee,(E-m)*B(1,h*.001*2)),U(d-o.current.zoom)<d*.001&&(o.current.zoom=d,i.current.zoom=null),p=!0,f({zoom:!0})}if(c.reduce((m,E)=>U(m)+U(E),0)===0&&i.current.zoom===null&&!e.matrix._reset){s({matrix:o.current.matrix,zoom:o.current.zoom}),a.current=null,i.current.t=null;return}p&&W(e),i.current.t=performance.now(),a.current=requestAnimationFrame(u)},[f,t.auto,t.combinations,e.dimensions,e.space]);g.useEffect(()=>{i.current.speed.reduce((S,R)=>U(S)+U(R),0)>0&&(a.current=requestAnimationFrame(u));let l=null,c=null;const d=[],h=()=>{const S=o.current.pointers.values(),R=S.next().value,y=S.next().value;return rn(R[0]-y[0],R[1]-y[1])},p=S=>{S.button!==0||S.target.tagName!=="CANVAS"||(t.auto&&(c=performance.now(),o.current.pointers.size===1?(i.current.pause.delete(t.shift*2),i.current.pause.delete(t.shift*2+1)):(i.current.pause.add(t.shift*2),i.current.pause.add(t.shift*2+1))),o.current.pointers.set(S.pointerId,[S.clientX,S.clientY]))},m=S=>{if(!o.current.pointers.has(S.pointerId))return;const R=o.current.pointers.get(S.pointerId),y=[-(S.clientX-R[0])/window.innerHeight,-(S.clientY-R[1])/window.innerHeight];if(o.current.pointers.set(S.pointerId,[S.clientX,S.clientY]),o.current.pointers.size>1){if(l===null){l=h(),i.current.zoom=o.current.zoom;return}const M=h();o.current.zoom*=l/M,l=M,le(e,o.current.zoom),i.current.zoom=null,W(e);return}let C=t.shift;!C&&S.shiftKey?C=1:!C&&S.altKey?C=2:!C&&S.ctrKey?C=3:!C&&S.metaKey&&(C=4);const L=We([H*y[0],H*y[1]],C,t,o.current.matrix,e.dimensions,e.space.metric);if(t.auto){const M=performance.now()-c;c=performance.now(),d.push([y[0]*1.5/M,y[1]*1.5/M]),d.length>ft&&d.shift();const Y=d.reduce((D,z)=>[D[0]+z[0],D[1]+z[1]],[0,0]);for(let D=0;D<2;D++)for(let z=0;z<L[D].length;z++)i.current.speed[L[D][z]]=Y[D]/d.length;a.current||(a.current=requestAnimationFrame(u))}f({matrix:!0})},E=S=>{o.current.pointers.clear(),t.auto&&(d.length=0,c=null,i.current.pause.delete(t.shift*2),i.current.pause.delete(t.shift*2+1)),l=null};document.addEventListener("pointerdown",p),document.addEventListener("pointermove",m),document.addEventListener("pointerup",E);const T=i.current;return()=>{document.removeEventListener("pointerdown",p),document.removeEventListener("pointermove",m),document.removeEventListener("pointerup",E),a.current&&(cancelAnimationFrame(a.current),a.current=null,T.t=null)}},[t,e.dimensions,e.space,e.camera,u,f]),g.useEffect(()=>{const l=c=>{c.target===document.body&&ut(c,t,o.current.matrix,e.dimensions,e.space.metric,n)&&(f({matrix:!0}),W(e))};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[f,t,e.space,e.dimensions,n]),g.useEffect(()=>{const l=c=>{if(c.target.tagName!=="CANVAS")return;const d=i.current.zoom===null?o.current.zoom:i.current.zoom;i.current.zoom=d*(c.deltaY<0?ee:1/ee),a.current||(a.current=requestAnimationFrame(u))};return document.addEventListener("wheel",l),()=>{document.removeEventListener("wheel",l)}},[u]),g.useEffect(()=>{const l=c=>{if(c.button!==0||c.target.tagName!=="CANVAS")return;const d=i.current.zoom===null?o.current.zoom:i.current.zoom,h=d<.5?5:d<2?.25:1;i.current.zoom=h,a.current||(a.current=requestAnimationFrame(u))};return document.addEventListener("dblclick",l),()=>{document.removeEventListener("dblclick",l)}},[u])};function mt({runtime:e,rotations:t,updateRotations:n,updateParams:s}){return dt(e,t,n,s),null}function pt(){return new Worker(""+new URL("shape.worker-6db00a3c.js",import.meta.url).href)}const vt=(e,t)=>{g.useEffect(()=>{t(n=>{n.meshes.reset();const s=an(n.coxeter,n.stellation),a=on(s),{vertices:i,normals:o}=sn(a,n.centered),u=n.mirrors.every(c=>!c)?n.mirrors.map(()=>1):n.mirrors.map(c=>cn(c)),l=ln(Te(i,u),a.metric);return a.rootVertex=l,a.rootVertices=i,a.rootNormals=o,a.boundnesses=fn(i).map(c=>un(Te(a.metric,c),c)).map(c=>U(c)<1e-9?"ideal":a.curvature*c<-1e-9?"ultraideal":"inside"),{...n,space:a,error:null}})},[e.dimensions,e.coxeter,e.mirrors,e.stellation,e.centered,t]),g.useEffect(()=>{t(n=>{var a;const s={...n,iteration:-1,paused:!1};return n.processing&&((a=n.shaper)==null||a.terminate(),s.shaper=new pt),s})},[e.space,e.ambiance,e.drawVertex,e.drawEdge,e.drawFace,e.hidden,e.reciprocation,t]),g.useEffect(()=>{t(n=>{const s={...n};return n.polytope.size>n.limit&&(s.paused=!0),s})},[e.polytope.size,e.limit,t]),g.useEffect(()=>{t(n=>({...n,paused:!1}))},[e.limit,t]),g.useEffect(()=>{t(n=>n.iteration===0?n:(n.shaper.postMessage({first:n.iteration===-1,space:n.space,dimensions:n.dimensions,coxeter:n.coxeter,stellation:n.stellation,mirrors:n.mirrors,ambiance:n.ambiance,draw:{vertex:n.drawVertex,edge:n.drawEdge,face:n.drawFace},batch:n.iteration===-1?ye(1,~~(n.batch/10)):n.batch,hidden:n.hidden,reciprocation:n.reciprocation}),{...n,iteration:n.iteration===-1?0:n.iteration,processing:!0}))},[e.iteration,e.limit,e.ambiance,e.drawVertex,e.drawEdge,e.drawFace,e.batch,e.shaper,e.space,e.hidden,e.reciprocation,t]),g.useEffect(()=>{t(n=>({...n,iteration:n.paused?n.iteration:n.iteration+1}))},[e.paused,t]),g.useEffect(()=>{if(!e.shaper)return;const n=({data:s})=>{s.error?console.error(s.error):t(a=>(a.meshes.fillData(s),{...a,processing:!s.polytope.done,iteration:a.paused||s.polytope.done?a.iteration:a.iteration+1,polytope:s.polytope}))};return e.shaper.addEventListener("message",n),()=>{e.shaper.removeEventListener("message",n)}},[e.shaper,e.paused,t])};function ht({runtime:e,setRuntime:t}){return vt(e,t),null}const gt=(e,t)=>{g.useEffect(()=>{t(n=>(le(n,n.zoom),n))},[e.zoom,t]),g.useEffect(()=>{t(n=>(le(n),n))},[e.fov3,e.camera,t]),g.useEffect(()=>{t(n=>(ct(n),Je(n),n))},[e.ambiance,e.msaa,e.msaaSamples,t]),g.useEffect(()=>{t(n=>(n.meshes.recompilePrograms(n),n))},[e.ambiance,e.curve,e.dimensions,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{t(n=>(n.meshes.changeArity(n.dimensions),n))},[e.dimensions,t]),g.useEffect(()=>{t(n=>(n.meshes.updateGeometries(n),n))},[e.space,e.curve,e.detail,t]),g.useEffect(()=>{t(n=>(n.meshes.updateUniforms(n),n))},[e.ambiance,e.curve,e.dimensions,e.sizeVertex,e.sizeEdge,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.detail,e.matrix,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{const n=new ResizeObserver(()=>{W(e)});return n.observe(e.gl.canvas,{box:"content-box"}),()=>n.disconnect()},[e.gl.canvas]),g.useEffect(()=>{t(n=>(W(n),n))},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.edge,e.error,e.face,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.iteration,e.detail,e.matrix,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.ranges,e.space,e.stellation,e.subsampling,e.sizeVertex,e.sizeEdge,e.polytope,e.vertex,e.zoom])};function xt({runtime:e,setRuntime:t}){return gt(e,t),null}function bt({runtime:e,setRuntime:t,rotations:n,updateRotations:s,updateParams:a}){var o,f,u;window.rt=e,window.ro=n;const i=g.useCallback(l=>c=>{t(d=>({...d,error:{[l]:c.message}}))},[t]);return Sn(e,t),r.jsxs(r.Fragment,{children:[r.jsx(de,{error:(o=e.error)==null?void 0:o.process,onError:i("process"),children:r.jsx(ht,{runtime:e,setRuntime:t})}),e.space?r.jsxs(r.Fragment,{children:[r.jsx(de,{error:(f=e.error)==null?void 0:f.render,onError:i("render"),children:r.jsx(xt,{runtime:e,setRuntime:t})}),r.jsx(de,{error:(u=e.error)==null?void 0:u.interact,onError:i("interact"),children:r.jsx(mt,{runtime:e,rotations:n,updateRotations:s,updateParams:a})})]}):null]})}const Et="modulepreload",Nt=function(e,t){return new URL(e,t).href},Fe={},wt=function(t,n,s){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Nt(i,s),i in Fe)return;Fe[i]=!0;const o=i.endsWith(".css"),f=o?'[rel="stylesheet"]':"";if(!!s)for(let c=a.length-1;c>=0;c--){const d=a[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${f}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Et,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((c,d)=>{l.addEventListener("load",c),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Xe=r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",strokeWidth:"3",children:[r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m31.376 13.781l-2.673-7.659c-1.554-4.453-7.852-4.453-9.406 0l-4.56 13.067c-.922 2.644 1.04 5.408 3.841 5.408H24"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m15.993 14.24l-8.11.175c-4.716.102-6.663 6.092-2.907 8.946l11.018 8.374c2.23 1.695 5.465.682 6.33-1.982L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m11.675 29.012l-2.34 7.767c-1.36 4.517 3.736 8.219 7.611 5.53l11.369-7.892c2.3-1.597 2.337-4.987.071-6.633L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m24.39 37.683l6.664 4.625c3.875 2.69 8.971-1.012 7.61-5.53l-3.992-13.25c-.807-2.681-4.02-3.764-6.286-2.118L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m36.566 28.27l6.458-4.908c3.756-2.855 1.81-8.845-2.907-8.947l-13.836-.298c-2.8-.06-4.822 2.66-3.956 5.324L24 24.597"})]}),Ye=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("g",{id:"feTarget0",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:r.jsx("g",{id:"feTarget1",fill:"currentColor",fillRule:"nonzero",children:r.jsx("path",{id:"feTarget2",d:"M19.938 13A8.004 8.004 0 0 1 13 19.938V22h-2v-2.062A8.004 8.004 0 0 1 4.062 13H2v-2h2.062A8.004 8.004 0 0 1 11 4.062V2h2v2.062A8.004 8.004 0 0 1 19.938 11H22v2h-2.062ZM12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"})})})}),St=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"})}),yt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20.777a8.942 8.942 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a8.961 8.961 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A8.954 8.954 0 0 1 10 3.223"})}),jt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",children:r.jsxs("g",{fill:"none",stroke:"currentColor",children:[r.jsx("path",{strokeLinecap:"round",d:"M13.326 8.5a6.5 6.5 0 1 1-.558-4.5"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 2v2.5H11"})]})}),It=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:r.jsx("path",{fill:"currentColor",d:"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"})}),Ot=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 6v1h.75A3.25 3.25 0 0 1 20 10.25v7.5A3.25 3.25 0 0 1 16.75 21h-9.5A3.25 3.25 0 0 1 4 17.75v-7.5A3.25 3.25 0 0 1 7.25 7H8V6a4 4 0 1 1 8 0ZM9.5 6v1h5V6a2.5 2.5 0 0 0-5 0Zm2.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"})}),Tt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 5a2.5 2.5 0 0 1 5 0v.25a.75.75 0 0 0 1.5 0V5a4 4 0 0 0-8 0v2H7.25A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21h9.5A3.25 3.25 0 0 0 20 17.75v-7.5A3.25 3.25 0 0 0 16.75 7H16V5Zm-4 10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"})}),At=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})}),Rt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),Ct=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),Ft=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),Dt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),zt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),Mt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M14 19V5h4v14zm-8 0V5h4v14z"})}),Pt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"})}),Lt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"})}),kt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"})});function xe({allowNull:e,name:t,value:n,onChange:s,...a}){const i=g.useCallback(f=>{let{name:u,checked:l}=f.target,c;e?c=n===!1?!0:n?null:!1:c=l,s(u,c)},[e,s,n]),o=g.useRef(null);return g.useLayoutEffect(()=>{e&&o.current&&(n===null?o.current.indeterminate=!0:o.current.indeterminate=!1)},[n,e]),r.jsx("input",{type:"checkbox",ref:o,name:t,checked:n||!1,onChange:i})}function w({type:e,subtype:t,order:n,dimensions:s}){return r.jsxs("span",{className:"space",title:`${e} ${t}${n>1?`of order ${n}`:""}`,children:[e===null||e==="indefinite"?"𝕏":e==="affine"?"𝔼":e==="finite"?"𝕊":"ℍ",s?r.jsxs("sup",{children:[s-1,n>1?r.jsx("sup",{children:n}):null]}):null,e==="hyperbolic"?r.jsx("sub",{children:{compact:" ",paracompact:"*",hypercompact:"+"}[t]}):null]})}const _t=(...e)=>{if(Array.isArray(e[0]))return{coxeter:e,dimensions:e.length,extended:!0};const t=e.length+1;return{coxeter:new Array(t).fill().map((s,a)=>new Array(t).fill().map((i,o)=>a===o?1:a===o+1||o===a+1?e[B(a,o)]:2)),dimensions:t}},Ut=(...e)=>{const t=e.length+1;return{stellation:new Array(t).fill().map((s,a)=>new Array(t).fill().map((i,o)=>a===o?1:a===o+1||o===a+1?e[B(a,o)]:1))}},v=(e,t,n,s)=>{const a=_t(...e);n&&!Array.isArray(n)&&(s=n,n=null);const{dimensions:i}=a,o={...ie,...a,drawVertex:i<=3,drawFace:i<=4,curve:i>3,ambiance:"colorful",matrix:J(i),zoom:i<=3?2:i>4?3:5,centered:!0,...Object.fromEntries($(3,i+1).map(f=>[`projection${f}`,Ne(f,i)])),...s||{}};return t?o.mirrors=t:o.mirrors=new Array(i).fill().map((f,u)=>u===0?1:0),n?o.stellation=Ut(...n).stellation:o.stellation=new Array(i).fill().map((f,u)=>new Array(i).fill(1)),o},O=e=>({...e,subforms:Object.entries(Ht(e.params.dimensions)).map(([t,n])=>({name:`${t} ${e.name}`,params:{...e.params,mirrors:n}}))}),N=(e,t,n,s)=>({...v(e,t,n),ambiance:"plain",drawVertex:!1,curve:!0,zoom:1,...s}),I=(e,t,n,s)=>({...v(e,t,n),ambiance:"neon",drawFace:!1,drawVertex:!1,centered:!1,sizeEdge:20,zoom:2,...s}),b=(e,t,n,s)=>{const a=v(e,t,n),i=a.matrix.length;return{...a,ambiance:"neon",drawFace:!1,drawVertex:!1,curve:!0,centered:!1,sizeEdge:i>4?15:25,zoom:1.5,...s}},Ht=e=>{if(e===4)return{Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1]};if(e===5)return{Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1]};if(e===6)return{Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(e===7)return{Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(e===8)return{Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(e===9)return{Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},G=[{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite",dimensions:4})," Tesseract"]}),params:v([4,3,3],[1,0,0,0],{drawVertex:!0,sizeVertex:40,drawFace:!0,curve:!0,ambiance:"neon",zoom:4.2})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",dimensions:3})," Heptagonal Tiling"]}),params:N([7,3],[1,0,0],{drawVertex:!1,drawFace:!0,curve:!0,ambiance:"neon"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"paracompact",dimensions:3})," Ideal Triangles"]}),params:N([[1,0,0],[0,1,0],[0,0,1]],[0,0,0],{drawVertex:!1,drawFace:!0,curve:!0,ambiance:"neon",centered:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",dimensions:4})," Inverted Alternated Order-5 Cubic Honeycomb"]}),params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{projection4:"inverted",ambiance:"disco",zoom:3})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite",dimensions:8})," E6 (1",r.jsx("sub",{children:"22"}),")"]}),params:v([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0],{sizeVertex:25,sizeEdge:15,ambiance:"colorful",drawVertex:!0,projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite",dimensions:8})," E8 (4",r.jsx("sub",{children:"21"}),")"]}),params:v([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1],{sizeVertex:20,sizeEdge:6,curve:!1,ambiance:"neon",drawVertex:!0,projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",projection7:"orthographic",projection8:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Tetrahedron"]}),params:N([3,3,6],[1,0,0,""],{drawVertex:!1,drawFace:!0,curve:!0,centered:!0,ambiance:"pure"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Horoball"]}),params:N([6,3,4],[1,0,0,""],{drawVertex:!1,drawFace:!0,curve:!0,centered:!1,ambiance:"colorful"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",dimensions:4})," Order-4 Dodecahedral Honeycomb"]}),params:b([5,3,4],[1,0,0,0],{zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"hypercompact",dimensions:4}),"Hypercompact Order 3-6 Heptagonal Honeycomb"]}),params:b([7,3,3],[1,0,0,0],{zoom:1.5,drawFace:!0,drawVertex:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Pentahedron"]}),params:N([5,3,6],[1,0,0,""],{drawVertex:!1,drawFace:!0,curve:!0,centered:!0,ambiance:"pure",zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite",dimensions:4})," Flat Torus"]}),params:v([32,2,32],[1,0,0,1],{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",zoom:3,sizeEdge:10})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"affine",dimensions:5})," Tesseract Stack"]}),params:v([[1,2,2,2,0],[2,1,2,2,2],[2,2,1,2,2],[2,2,2,1,2],[0,2,2,2,1]],[1,1,1,1,0],{drawVertex:!1,drawFace:!0,ambiance:"neon",sizeEdge:20,projection4:"sterographic"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"hypercompact",order:2,dimensions:4})," ","Ultrahyperbolic Surface (Anti-de Sitter Ads3)"]}),params:v([-1,2,-1],[1,0,0,1],{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,sizeEdge:15,zoom:1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"hypercompact",order:2,dimensions:5})," ","Ultrahyperbolic Honeycomb (Anti-de Sitter Ads4)"]}),params:v([-1,3,3,-1],[1,0,0,0,1],{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,zoom:2})},{name:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"hypercompact",order:3,dimensions:6})," ","Ultraultrahyperbolic"]}),params:v([-1,2,-1,2,-1],[0,0,0,0,0,0],{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,zoom:2,sizeEdge:15})},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite"})," Spherical Space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Tetrahedron",params:v([3,3]),subforms:[{name:"Truncated Tetrahedron",params:v([3,3],[1,1,0])},{name:"Triakis Tetrahedron",params:v([3,3],["m","m",0],{reciprocation:1})},{name:"Two Tetrahedra Compound",params:v([3,3],["c",0,0],{reciprocation:1})}]},{name:"Cube",params:v([4,3]),subforms:[{name:"Cuboctahedron",params:v([4,3],[0,1,0])},{name:"Truncated Cube",params:v([4,3],[1,1,0])},{name:"Rhombicuboctahedron",params:v([4,3],[1,0,1])},{name:"Truncated Octahedron",params:v([3,4],[1,1,0])},{name:"Truncated Cuboctahedron",params:v([4,3],[1,1,1])},{name:"Octahedron",params:v([3,4])},{name:"Snub Cube",params:v([4,3],["s","s","s"])},{name:"Rhombic Dodecahedron",params:v([4,3],[0,"m",0],{reciprocation:1})},{name:"Triakis Octahedron",params:v([4,3],["m","m",0],{reciprocation:1})},{name:"Triakis Hexahedron",params:v([3,4],["m","m",0],{reciprocation:1})},{name:"Deltoidal Icositetrahedron",params:v([4,3],["m",0,"m"],{reciprocation:1})},{name:"Disdyakis Dodecahedron",params:v([4,3],["m","m","m"],{reciprocation:1})},{name:"Pentagonal Icositetrahedron",params:v([4,3],["b","b","b"],{reciprocation:1})},{name:"Cube Octahedron Compound",params:v([4,3],["c",0,0],{reciprocation:1})}]},{name:"Dodecahedron",params:v([5,3]),subforms:[{name:"Icosidodecahedron",params:v([5,3],[0,1,0])},{name:"Truncate Dodecahedron",params:v([5,3],[1,1,0])},{name:"Rhombicosidodecahedron",params:v([5,3],[1,0,1])},{name:"Truncate Icosahedron",params:v([3,5],[1,1,0])},{name:"Truncated Icosidodecahedron",params:v([5,3],[1,1,1])},{name:"Icosahedron",params:v([3,5])},{name:"Snub Dodecahedron",params:v([5,3],["s","s","s"])},{name:"Rhombic Triacontahedron",params:v([5,3],[0,"m",0],{reciprocation:1})},{name:"Triakis Icosahedron",params:v([5,3],["m","m",0],{reciprocation:1})},{name:"Pentakis Docecahedron",params:v([3,5],["m","m",0],{reciprocation:1})},{name:"Deltoidal Hexecontahedron",params:v([5,3],["m",0,"m"],{reciprocation:1})},{name:"Disdyakis Triacontahedron",params:v([5,3],["m","m","m"],{reciprocation:1})},{name:"Pentagonal Hexecontahedron",params:v([5,3],["b","b","b"],{reciprocation:1})},{name:"Dodecahedron Icosahedron Compound",params:v([5,3],["c",0,0],{reciprocation:1})}]},{name:"Great Dodecahedron",params:v([5,5],[1,0,0],[1,2]),subforms:[{name:"Small Stellated Docecahedron Great Docecahedron Compound",params:v([5,5],["c",0,0],[1,2],{reciprocation:1})}]},{name:"Great Icosahedron",params:v([3,5],[1,0,0],[1,2]),subforms:[{name:"Great Icosahedron Great Stellated Dodecahedron Compound",params:v([3,5],["c",0,0],[1,2],{reciprocation:1})}]},{name:"Small Stellated Dodecahedron",params:v([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:v([5,3],[1,0,0],[2,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite",dimensions:4})," Polychora"]})},O({name:"5-cell",params:v([3,3,3])}),O({name:"8-cell",params:v([4,3,3])}),O({name:"16-cell",params:v([3,3,4])}),O({name:"24-cell",params:v([3,4,3])}),O({name:"120-cell",params:v([5,3,3])}),O({name:"600-cell",params:v([3,3,5])}),{name:"Snub 24-cell",params:v([[1,3,2,2],[3,1,3,3],[2,3,1,2],[2,3,2,1]],["s","s","s","s"])},{name:"Icosahedral 120-cell",params:v([3,5,5],[1,0,0,0],[1,1,2],{curve:!1}),subforms:[{name:"Small Stellated 120-cell",params:v([3,5,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Great 120-cell",params:v([5,5,5],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Grand 120-cell",params:v([5,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{name:"Great Stellated 120-cell",params:v([5,3,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Grand Stellated 120-cell",params:v([5,5,5],[1,0,0,0],[2,1,2],{curve:!1})},{name:"Great grand 120-cell",params:v([5,5,3],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Great Icosahedral 120-cell",params:v([5,5,3],[0,0,0,1],[1,2,1],{curve:!1})},{name:"Great grand Stellated 120-cell",params:v([5,3,3],[1,0,0,0],[2,1,1],{curve:!1})}]},{name:"Grand 600-cell",params:v([3,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite",dimensions:5})," Polytera"]})},O({name:"5-simplex",params:v([3,3,3,3])}),O({name:"5-cube",params:v([4,3,3,3])}),O({name:"5-orthoplex",params:v([3,3,3,4])}),O({name:"5-demicube",params:v([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]])}),{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite",dimensions:6})," Polypeta"]})},O({name:"6-simplex",params:v([3,3,3,3,3])}),O({name:"6-cube",params:v([4,3,3,3,3])}),O({name:"6-orthoplex",params:v([3,3,3,3,4])}),O({name:"6-demicube",params:v([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"21"})]}),params:v([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"22"})]}),params:v([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite",dimensions:7})," Polyexa"]})},O({name:"7-simplex",params:v([3,3,3,3,3,3])}),O({name:"7-cube",params:v([4,3,3,3,3,3])}),O({name:"7-orthoplex",params:v([3,3,3,3,3,4])}),O({name:"7-demicube",params:v([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"21"})]}),params:v([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"31"})]}),params:v([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"32"})]}),params:v([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite",dimensions:8})," Polyzetta"]})},O({name:"8-simplex",params:v([3,3,3,3,3,3,3])}),O({name:"8-cube",params:v([4,3,3,3,3,3,3])}),O({name:"8-orthoplex",params:v([3,3,3,3,3,3,4])}),O({name:"8-demicube",params:v([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"42"})]}),params:v([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"41"})]}),params:v([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["4",r.jsx("sub",{children:"21"})]}),params:v([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"finite",dimensions:9})," Polyyotta"]})},O({name:"9-simplex",params:v([3,3,3,3,3,3,3,3])}),O({name:"9-cube",params:v([4,3,3,3,3,3,3,3])}),O({name:"9-orthoplex",params:v([3,3,3,3,3,3,3,4])}),O({name:"9-demicube",params:v([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]])}),{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"affine"})," Euclidean Space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:v([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:v([4,4],[1,0,0])},{name:"Hexagonal",params:v([6,3],[1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:I([4,3,4],[1,0,0,0])},{name:"Octet",params:I([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter Cubic",params:I([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:I([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:I([3,3,4,3],[1,0,0,0,0])},{name:"24-cellic",params:I([3,4,3,3],[1,0,0,0,0])},{name:"4-simpletic",params:I([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0])},{name:"Quarter Tesseractic",params:I([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"affine",dimensions:6})," 5-Honeycombs"]})},{name:"5-simplex",params:I([[1,3,2,2,2,3],[3,1,3,2,2,2],[2,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[3,2,2,2,3,1]],[1,0,0,0,0,0])},{name:"5-cubic",params:I([4,3,3,3,4],[1,0,0,0,0,0])},{name:"5-demicubic",params:I([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,4],[2,2,2,2,4,1]],[1,0,0,0,0,0])},{name:"Quarter 5-cubic",params:I([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,3],[2,2,2,3,1,2],[2,2,2,3,2,1]],[1,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"affine",dimensions:7})," 6-Honeycombs"]})},{name:"6-simplex",params:I([[1,3,2,2,2,2,3],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[3,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:"6-cubic",params:I([4,3,3,3,3,4],[1,0,0,0,0,0,0])},{name:"6-demicubic",params:I([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,4],[2,2,2,2,2,4,1]],[1,0,0,0,0,0,0])},{name:"Quarter 6-cubic",params:I([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,3],[2,2,2,2,3,1,2],[2,2,2,2,3,2,1]],[1,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"22"})]}),params:I([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,3,2],[2,2,3,1,3,2,2],[2,2,2,3,1,2,2],[2,2,3,2,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"affine",dimensions:8})," 7-Honeycombs"]})},{name:"7-simplex",params:I([[1,3,2,2,2,2,2,3],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[3,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:"7-cubic",params:I([4,3,3,3,3,3,4],[1,0,0,0,0,0,0,0])},{name:"7-demicubic",params:I([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,4],[2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0])},{name:"Quarter 7-cubic",params:I([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,3,3,1,3,2,2],[2,2,2,2,3,1,3,3],[2,2,2,2,2,3,1,2],[2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"33"})]}),params:I([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,1,0,0,0])},{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"31"})]}),params:I([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"affine",dimensions:9})," 8-Honeycombs"]})},{name:"8-simplex",params:I([[1,3,2,2,2,2,2,2,3],[3,1,3,2,2,2,2,2,2],[2,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[3,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:"8-cubic",params:I([4,3,3,3,3,3,3,4],[1,0,0,0,0,0,0,0,0])},{name:"8-demicubic",params:I([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,4],[2,2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0,0])},{name:"Quarter 8-cubic",params:I([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,3],[2,2,2,2,2,2,3,1,2],[2,2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"52"})]}),params:I([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"51"})]}),params:I([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["5",r.jsx("sub",{children:"21"})]}),params:I([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,0,1])},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic"})," Hyperbolic Space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",dimensions:3})," Tilings"]})},{name:"Order-7 Triangular",params:N([3,7],[1,0,0])},{name:"Order-8 Triangular",params:N([3,8],[1,0,0])},{name:"Infinite Order Triangular",params:N([3,0],[1,0,0])},{name:"Order-5 Square",params:N([4,5],[1,0,0])},{name:"Order-6 Square",params:N([4,6],[1,0,0])},{name:"Order-7 Square",params:N([4,7],[1,0,0])},{name:"Order-8 Square",params:N([4,8],[1,0,0])},{name:"Infinite Order Square",params:N([4,0],[1,0,0])},{name:"Order-4 pentagonal",params:N([5,4],[1,0,0])},{name:"Order-5 pentagonal",params:N([5,5],[1,0,0])},{name:"Order-6 pentagonal",params:N([5,6],[1,0,0])},{name:"Order-7 pentagonal",params:N([5,7],[1,0,0])},{name:"Order-8 pentagonal",params:N([5,8],[1,0,0])},{name:"Infinite Order pentagonal",params:N([5,0],[1,0,0])},{name:"Order-4 Hexagonal",params:N([6,4],[1,0,0])},{name:"Order-5 Hexagonal",params:N([6,5],[1,0,0])},{name:"Order-6 Hexagonal",params:N([6,6],[1,0,0])},{name:"Order-7 Hexagonal",params:N([6,7],[1,0,0])},{name:"Order-8 Hexagonal",params:N([6,8],[1,0,0])},{name:"Infinite Order Hexagonal",params:N([6,0],[1,0,0])},{name:"Order-3 Heptagonal",params:N([7,3],[1,0,0])},{name:"Order-4 Heptagonal",params:N([7,4],[1,0,0])},{name:"Order-5 Heptagonal",params:N([7,5],[1,0,0])},{name:"Order-6 Heptagonal",params:N([7,6],[1,0,0])},{name:"Order-7 Heptagonal",params:N([7,7],[1,0,0])},{name:"Order-8 Heptagonal",params:N([7,8],[1,0,0])},{name:"Infinite Order Heptagonal",params:N([7,0],[1,0,0])},{name:"Order-3 Octagonal",params:N([8,3],[1,0,0])},{name:"Order-4 Octagonal",params:N([8,4],[1,0,0])},{name:"Order-5 Octagonal",params:N([8,5],[1,0,0])},{name:"Order-6 Octagonal",params:N([8,6],[1,0,0])},{name:"Order-7 Octagonal",params:N([8,7],[1,0,0])},{name:"Order-8 Octagonal",params:N([8,8],[1,0,0])},{name:"Infinite Order Octagonal",params:N([8,0],[1,0,0])},{name:"Order-3 Apeirogonal",params:N([0,3],[1,0,0])},{name:"Order-4 Apeirogonal",params:N([0,4],[1,0,0])},{name:"Order-5 Apeirogonal",params:N([0,5],[1,0,0])},{name:"Order-6 Apeirogonal",params:N([0,6],[1,0,0])},{name:"Order-7 Apeirogonal",params:N([0,7],[1,0,0])},{name:"Order-8 Apeirogonal",params:N([0,8],[1,0,0])},{name:"Infinite Order Apeirogonal",params:N([0,0],[1,0,0])},{name:"Snub Square",params:N([4,4],["s","s",0])},{name:"Snub Trihexagonal",params:N([6,3],["s","s","s"])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"compact",dimensions:4})," Compact Hyperbolic Honeycombs"]})},{name:"Icosahedral",params:b([3,5,3],[1,0,0,0])},{name:"Order-4 Dodecahedral",params:b([5,3,4],[1,0,0,0])},{name:"Order-5 Dodecahedral",params:b([5,3,5],[1,0,0,0])},{name:"Alternated Order-5 Cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral Cubic",params:b([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],{})},{name:"Tetrahedral Dodecahedral",params:b([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],{})},{name:"Cubic Octahedral",params:b([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Dodcahedral",params:b([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Icosahedral",params:b([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Paracompact Hyperbolic Honeycombs"]})},{name:"Triangular",params:b([3,6,3],[1,0,0,0])},{name:"Hexagonal",params:b([6,3,3],[1,0,0,0])},{name:"Order-6 Tetrahedral",params:b([3,3,6],[1,0,0,0])},{name:"Alternated Order-6 Cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],{})},{name:"Order-5 Hexagonal",params:b([6,3,5],[1,0,0,0])},{name:"Alternated Order-5 Hexagonal",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{})},{name:"Order-6 Hexagonal",params:b([6,3,6],[0,0,0,1])},{name:"Square",params:b([4,4,3],[1,0,0,0])},{name:"Alternated Square",params:b([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],{})},{name:"Order-4 Square",params:b([4,4,4],[0,1,0,0])},{name:"Tetrahedral Square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],{})},{name:"Cubic Square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],{})},{name:"Alternated Cubic Square",params:b([[1,2,4,3],[2,1,3,2],[4,3,1,4],[3,2,4,1]],[1,0,0,0],{})},{name:"Quarter order Square",params:b([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],{})},{name:"Tetrahedral Hexagonal",params:b([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Hexagonal",params:b([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Icosahedral Hexagonal",params:b([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Hexagonal Triangular",params:b([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[0,0,0,1],{})},{name:"Alternated Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],{})},{name:"Alternated Order-4 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],{})},{name:"Alternated Order-5 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{})},{name:"Runcic Order-6 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],{})},{name:"Quarter Order-4 Hexagonal",params:b([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],{})},{name:"Hexagonal",params:b([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"hypercompact",dimensions:4})," ","Hypercompact Hyperbolic Honeycombs"]})},{name:"Order 7-3 Triangular",params:b([3,7,3],[1,0,0,0])},{name:"Order 3-6 Heptagonal",params:b([7,3,6],[1,0,0,0])},{name:"Order-7 Dodecahedral",params:b([5,3,7],[1,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",dimensions:5})," Compact Hyperbolic 4-Honeycombs"]})},{name:"Order-5 5-cell",params:b([3,3,3,5],[1,0,0,0,0])},{name:"120-cell",params:b([5,3,3,3],[1,0,0,0,0])},{name:"Order-5 Tesseratic",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-4 120-cell",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-5 120-cell",params:b([5,3,3,5],[1,0,0,0,0])},{name:"Small Stellated 120-cell",params:b([5,5,3,3],[1,0,0,0,0],[2,1,1,1])},{name:"Pentagrammic-order 600-cell",params:b([3,3,5,5],[1,0,0,0,0],[1,1,1,2])},{name:"Order-5 Icosahedral 120-cell",params:b([3,5,5,5],[1,0,0,0,0],[1,1,2,1])},{name:"Great 120-cell",params:b([5,5,5,3],[1,0,0,0,0],[1,2,1,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"paracompact",dimensions:5})," ","Paracompact Hyperbolic 4-Honeycombs"]})},{name:"Order-4 24-cell",params:b([3,4,3,4],[1,0,0,0,0])},{name:"Cubic Honeycomb",params:b([4,3,4,3],[1,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(w,{type:"hyperbolic",subtype:"paracompact",dimensions:6})," ","Paracompact Hyperbolic 5-Honeycombs"]})},{name:"5-orthoplex",params:b([3,3,3,4,3],[1,0,0,0,0,0])},{name:"24-cell Honeycomb",params:b([3,4,3,3,3],[1,0,0,0,0,0])},{name:"16-cell Honeycomb",params:b([3,3,4,3,3],[1,0,0,0,0,0])},{name:"Order-4 24-cell Honeycomb",params:b([3,4,3,3,4],[1,0,0,0,0,0])},{name:"Tesseratic Honeycomb",params:b([4,3,3,4,3],[1,0,0,0,0,0])}],Se=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(Se).join("");if(typeof e=="object"&&e)return Se(e.props.children)},De=(e,t)=>typeof e=="string"?Se(e).toLowerCase().includes(t.toLowerCase()):!1,Bt=g.memo(function e({name:t,index:n,params:s,search:a,subforms:i=[],sub:o=!1,onPreset:f}){const[u,l]=g.useState(!0),[c,d]=g.useState(!1);return g.useEffect(()=>{if(!a){l(!0),d(!1);return}if(De(t,a)){l(!0);return}if(i.length&&i.some(({name:h})=>De(h,a))){l(!0),d(!0);return}l(!1),d(!1)},[t,a,i]),u?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`preset${o?" sub":""}`,onClick:()=>f(s,n),children:[r.jsxs("div",{className:`preset-header preset-name-${i.length?"button":"only"}`,children:[i.length?r.jsx("button",{className:`preset-toggle ${c?"open":"closed"}`,onClick:h=>{h.stopPropagation(),d(!c)},children:c?"-":"+"}):null,r.jsx("span",{className:"preset-name",children:t})]}),r.jsx(Be,{coxeter:s.coxeter,mirrors:s.mirrors,stellation:s.stellation})]}),c&&i.map((h,p)=>r.jsx(e,{...h,sub:!0,search:a,onPreset:f},p))]}):null});function Vt({open:e,onPreset:t,onExportImage:n,closePresets:s}){const[a,i]=g.useState(""),[o,f]=g.useState(""),u=g.useCallback(l=>{f(l.target.value),dn(i(l.target.value),50)},[]);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`presets-overlay ${e?"shown":"hidden"}`,onClick:s}),r.jsx("div",{className:`presets ${e?"shown":"hidden"}`,children:r.jsxs("div",{className:"presets-modal",children:[r.jsxs("div",{className:"presets-header",children:[r.jsxs("div",{className:"presets-search",children:[r.jsx("input",{type:"text",placeholder:"Search",value:o,onChange:u}),r.jsx("button",{className:"presets-clear",onClick:()=>{i(""),f("")},children:Ct})]}),r.jsxs("div",{className:"presets-actions",children:[r.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:Ft}),r.jsx("button",{className:"presets-action",onClick:n,children:Dt}),r.jsx("button",{className:"presets-action",onClick:s,children:zt})]})]}),r.jsx("div",{className:"presets-list",children:G.map(({type:l,content:c,name:d,params:h,subforms:p},m)=>r.jsx(g.Fragment,{children:l==="title"?r.jsx("h2",{children:c}):l==="group"?r.jsx("h4",{children:c}):r.jsx(Bt,{name:d,index:m,params:h,search:a,subforms:p,onPreset:t})},m))})]})})]})}const ze=g.memo(function({rotations:t,space:n,axis:s}){if(!n)return null;const a=n.gram.length,i=t.shift*2+s;if(i>=t.combinations.length)return null;let o=t.combinations[i];const f=o.some(c=>c<0)?"parabolic":o.some(c=>n.eigens.values[c]<0)?"hyperbolic":o.some(c=>n.eigens.values[c]===0)?"translation":"spheric",u=bn.slice(0,a).split(""),l=f==="parabolic"?o.map(c=>u[U(c)]).join("->"):u.filter((c,d)=>!o.includes(d));return r.jsxs("aside",{className:`${s?"y":"x"}-rotation`,children:[l,f==="parabolic"?r.jsx("sup",{children:"∞"}):f==="hyperbolic"?r.jsx("sup",{children:"†"}):f==="translation"?r.jsx("sup",{children:"0"}):""]})}),Gt=e=>e<4?[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7 2m12 9H5v2h14z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})})][e]:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9"}),r.jsx("text",{x:"12",y:"13.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",children:e})]});function $t({runtime:e,setRuntime:t,showUI:n,updateParams:s}){const a=g.useCallback(()=>{e.paused&&e.polytope.size>e.limit&&s({limit:e.limit+e.start}),t(c=>({...c,paused:!c.paused}))},[e.paused,e.polytope.size,e.limit,e.start,t,s]),i=g.useCallback(c=>{const h=c.target.closest("button").dataset.key.split(","),p=!h.some(E=>e.hidden.includes(E)),m=e.hidden.filter(E=>!h.includes(E));s({hidden:p?[...m,...h]:m})},[e.hidden,s]),o=g.useCallback(c=>{const d=+c.target.closest("button").dataset.key;s({reciprocation:d})},[s]),f=e.polytope.every(c=>c.detail.length<2),u=c=>isFinite(c)?c.toLocaleString():"∞";if(n==="empty")return null;const l=n==="full"?"detail":"aggregated";return r.jsxs("aside",{className:"shape",children:[e.processing?r.jsx("div",{className:"buttons",children:e.paused?r.jsx("button",{className:"iterate button",onClick:a,title:"Resume enumeration",children:Pt}):r.jsx("button",{className:"iterate button",onClick:a,title:"Pause enumeration",children:Mt})}):null,r.jsx("div",{className:`shape-info${e.processing&&!e.paused?" shape-processing":""}${["advanced","full"].includes(n)?" shape-info-expanded":""}`,children:[...e.polytope].reverse().filter(c=>c).map(c=>r.jsxs(g.Fragment,{children:[r.jsxs("div",{className:"shape-icon",style:{gridRow:`span ${c[l].length}`},children:[Gt(c.dimensions),c.dual&&!e.curve?r.jsx("button",{className:"shape-reciprocation button","data-key":e.reciprocation===c.dimensions?-1:c.dimensions,onClick:o,children:e.reciprocation===c.dimensions?Xe:Ye}):null]}),r.jsxs("div",{className:"shape-count",style:{gridRow:`span ${c[l].length}`},children:[c.done||c.processing===void 0?null:`${c.processing} / `,u(c.count)]}),r.jsx("div",{className:c.dimensions>0&&["advanced","full"].includes(n)&&c[l].length>1?" shape-split":"",style:{gridRow:`span ${c[l].length}`}}),["advanced","full"].includes(n)?c[l].map(({count:d,coxeter:h,stellation:p,mirrors:m,key:E})=>r.jsxs(g.Fragment,{children:[r.jsx("div",{className:"shape-count shape-detail-count",title:E,children:!f&&c[l].length>1?u(d):null}),r.jsxs("div",{children:[[1,2].includes(c.dimensions)?r.jsx("button",{className:"shape-hidden button","data-key":E,title:E,onClick:i,children:E.split(",").some(T=>e.hidden.includes(T))?kt:Lt}):null,r.jsx("button",{className:"shape-detail-button",disabled:h.length<2,onClick:()=>s({coxeter:h,stellation:p,mirrors:m,dimensions:h.length,matrix:J(h.length)}),children:r.jsx(Be,{coxeter:h,stellation:p,mirrors:m})})]})]},E)):null]},`shape-${c.dimensions}`))})]})}const qt=()=>{try{return localStorage.getItem("showUI")||"simple"}catch(e){return console.error(e),"simple"}};function Jt({runtime:e,params:t,rotations:n,setRuntime:s,updateParams:a,updateRotations:i}){var ne;const[o,f]=g.useState(qt),[u,l]=g.useState(!1),[c,d]=g.useState(0),h=g.useCallback(()=>{l(!1)},[]),p=g.useCallback(x=>{let{name:j,value:A}=x.target;a({[j]:A})},[a]),m=g.useCallback((x,j)=>{a({[x]:j})},[a]),E=g.useCallback(()=>f(x=>{const j={simple:"advanced",advanced:"full",full:"empty",empty:"simple"}[x];try{localStorage.setItem("showUI",j)}catch(A){console.error(A)}return j}),[]),T=g.useCallback((x,j)=>{a(x,!0),d(j),h()},[a,h]),S=g.useCallback(()=>{const x=J(e.dimensions);x._reset=!0,a({matrix:x,centered:!0})},[a,e.dimensions]),R=g.useCallback(()=>{const x=J(e.dimensions);x._reset=!0,a({matrix:x,centered:!1})},[a,e.dimensions]),y=g.useCallback(()=>{a(Object.fromEntries($(3,e.dimensions+1).map(x=>[[`projection${x}`,"orthographic"],[`fov${x}`,90]]).flat()))},[a,e.dimensions]),C=g.useCallback(()=>{a(Object.fromEntries($(3,e.dimensions+1).map(x=>[`projection${x}`,Ne(x,e.dimensions)])))},[a,e.dimensions]),L=g.useCallback(x=>{i("shift",(n.shift+1)%n.maxShift)},[n.maxShift,n.shift,i]),M=g.useCallback(x=>{i("lock",!n.lock)},[n.lock,i]),Y=g.useCallback(x=>{i("auto",n.auto==="free"?"damp":"free")},[n.auto,i]),D=g.useCallback(async()=>{h();const x=window.prompt("Select image resolution","5000x5000");if(!x||!x.includes("x")){console.error("Invalid resolution");return}const[j,A]=x.split("x").map(V=>parseInt(V));if(isNaN(j)||isNaN(A)){console.error("Invalid resolution");return}const Ie=await(await wt(()=>import("./export-3df914de.js"),["./export-3df914de.js","./params-f524dcaf.js"],import.meta.url)).makeBigPng(e,j,A);if(Ie){const V=document.createElement("a");document.body.appendChild(V),V.style.display="none";const en=window.URL.createObjectURL(Ie);V.href=en,V.download=`${document.title}-${j}x${A}`,V.click()}},[h,e]),z=g.useMemo(()=>({square:$(3,e.dimensions+1).some(x=>t[`projection${x}`]!=="orthographic"),cube:$(3,e.dimensions+1).some(x=>t[`projection${x}`]!==Ne(x,e.dimensions))}),[t.projection3,t.projection4,t.projection5,t.projection6,t.projection7,t.projection8,t.projection9,e.dimensions]);return g.useEffect(()=>{const x=j=>{if(j.key==="ArrowLeft"&&j.ctrlKey&&c>0){let A=c-1;for(;G[A].type;){if(A<2)return;A--}T(G[A].params,A)}else if(j.key==="ArrowRight"&&j.ctrlKey&&c<G.length-1){let A=c+1;for(;G[A].type;){if(A>G.length-2)return;A++}T(G[A].params,A)}};return window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[T,c]),r.jsxs(r.Fragment,{children:[r.jsx(Vt,{open:u,onPreset:T,onExportImage:D,closePresets:h}),r.jsxs("main",{className:e.error?"error ui":"ui",title:e.error,children:[r.jsxs("div",{className:"ui-row ui-row-top",children:[["simple","advanced","full"].includes(o)?r.jsxs("aside",{className:"controls",children:[r.jsxs("button",{className:"rotation-button button",onClick:L,title:"Rotation Mode",children:[r.jsx("div",{className:"rotation",style:{transform:`rotate(${n.shift/n.maxShift*360}deg)`},children:jt}),r.jsx("sup",{children:n.shift+1}),r.jsx(ze,{rotations:n,space:e.space,axis:0}),r.jsx(ze,{rotations:n,space:e.space,axis:1})]}),r.jsxs("div",{className:"subcontrols",children:[r.jsx("button",{className:"button",onClick:M,children:n.lock?Ot:Tt}),r.jsx("button",{className:"button anim-view",onClick:Y,title:"Animate rotations",children:n.auto==="free"?St:n.auto==="damp"?yt:"?"}),r.jsx("button",{className:"button",onClick:S,title:"Center View",children:Ye}),r.jsx("button",{className:"button",onClick:R,title:"Coxeter View",children:Xe}),["advanced","full"].includes(o)?r.jsxs(r.Fragment,{children:[z.square&&r.jsx("button",{className:"button",onClick:y,title:"Orthographic",children:Rt}),z.cube&&r.jsx("button",{className:"button",onClick:C,title:"Stereographic",children:At})]}):null]})]}):null,["simple","advanced","full"].includes(o)&&r.jsx(mn,{dimensions:t.dimensions,coxeter:t.coxeter,mirrors:t.mirrors,stellation:t.stellation,extended:t.extended,space:e.space,onChange:m,preview:!0})]}),r.jsxs("div",{className:"ui-row ui-row-middle",children:[r.jsx($t,{runtime:e,setRuntime:s,showUI:o,updateParams:a}),["advanced","full"].includes(o)&&r.jsxs("aside",{className:"view",children:[r.jsx(k,{name:"msaaSamples",label:"MSAA",min:0,step:1,max:ie.msaaSamples,value:t.msaaSamples,toggler:t.msaa,togglerName:"msaa",onChange:m}),r.jsx("div",{className:"projection",children:r.jsxs("label",{className:"number-label",children:[r.jsx("span",{className:"number-label",children:"Detail"}),r.jsxs("label",{className:"boolean-label",children:[r.jsx(xe,{name:"adaptative",value:t.adaptative,onChange:m}),"Auto"]}),r.jsx("select",{name:"detail",value:e.detail,onChange:x=>s(j=>({...j,detail:x.target.value})),children:K.map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,j=>j.toUpperCase())},x))})]})}),o==="full"&&r.jsx(k,{name:"subsampling",label:"subsampling",min:.1,step:.1,value:t.subsampling,onChange:m}),t.dimensions>=3?$(3,t.dimensions+1).map(x=>r.jsxs("div",{className:"projection",children:[o==="full"&&r.jsx(k,{label:`${x}D FOV`,name:`fov${x}`,step:1,value:t[`fov${x}`],onChange:m}),r.jsxs("label",{className:"number",children:[r.jsxs("span",{className:"number-label",children:[x,"D Projection"]}),r.jsx("select",{name:`projection${x}`,value:t[`projection${x}`],onChange:p,children:[...Ve.filter((j,A)=>{var ue;return x===3&&e.dimensions===3&&((ue=e.space)==null?void 0:ue.curvature)<0||A<9})].map(j=>r.jsx("option",{value:j,children:j.replace(/_/g," ").replace(/./,A=>A.toUpperCase())},j))})]})]},x)):null]})]}),r.jsxs("div",{className:"ui-row ui-row-bottom",children:[["simple","advanced","full"].includes(o)?r.jsx("button",{className:"preset-button button",onClick:()=>l(x=>!x),title:"Presets",children:It}):null,["advanced","full"].includes(o)&&r.jsxs("aside",{className:"parameters",children:[(ne=e.space)!=null&&ne.curvature?r.jsxs("label",{className:"boolean-label",children:["Normalize",r.jsx(xe,{name:"curve",value:t.curve,onChange:m})]}):null,r.jsx(k,{name:"sizeVertex",label:"Vertices",min:0,step:1,value:t.sizeVertex,toggler:t.drawVertex,togglerName:"drawVertex",onChange:m}),r.jsx(k,{name:"sizeEdge",label:"Edges",min:0,step:1,value:t.sizeEdge,toggler:t.drawEdge,togglerName:"drawEdge",onChange:m}),r.jsxs("label",{className:"boolean-label",children:["Faces",r.jsx(xe,{name:"drawFace",value:t.drawFace,onChange:m})]}),r.jsxs("label",{className:"select-label",children:["Ambiance",r.jsx("select",{name:"ambiance",value:t.ambiance,onChange:p,children:(o==="full"?Object.keys(X):Object.entries(X).filter(([x,{extended:j}])=>!j||x===t.ambiance).map(([x])=>x)).map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,j=>j.toUpperCase())},x))})]}),window.location.search.includes("debug")&&o==="full"&&r.jsxs(r.Fragment,{children:[r.jsx(k,{name:"start",label:"Start",min:0,step:1,value:t.start,onChange:m}),r.jsx(k,{name:"limit",label:"Limit",min:0,step:1,value:t.limit,onChange:m}),r.jsx(k,{name:"batch",label:"Batch",min:0,step:1,value:t.batch,onChange:m})]})]}),o==="empty"?r.jsx("div",{className:"spacer"}):null,r.jsx("button",{className:`space-button button${e.processing&&!e.paused?" processing":""}${o==="empty"?" empty":""}`,onClick:E,children:r.jsx(w,{...e.space||{},dimensions:e.dimensions})})]})]})]})}function Kt({params:e,updateParams:t}){const[n,s]=g.useState({...e,space:null,shape:null,processing:!0,detail:"medium",iteration:0,polytope:[],shaper:null,paused:!1,error:null});g.useEffect(()=>{s(f=>{try{return f.gl?f:it(f)}catch(u){return console.error(u),{...f,error:u.message}}})},[n.gl]);const[a,i]=g.useState({shift:0,maxShift:0,combinations:[],auto:"damp",lock:!1});g.useEffect(()=>{s(f=>({...f,...ce(e).params}))},[e]),g.useEffect(()=>{n.space&&i(f=>({...f,shift:0,...pn(e.dimensions,n.space)}))},[e.dimensions,n.space]);const o=g.useCallback((f,u)=>{i(l=>({...l,[f]:u}))},[i]);return n.gl?r.jsxs(r.Fragment,{children:[r.jsx(Jt,{runtime:n,params:e,rotations:a,setRuntime:s,updateRotations:o,updateParams:t}),r.jsx(bt,{runtime:n,rotations:a,setRuntime:s,updateRotations:o,updateParams:t})]}):null}const Wt=e=>{const t=e.toUpperCase();return e===t?e.toLowerCase():t},P=(e,t)=>{let n=t,s=0;for(;e.quotientMap[n];)s++,n=e.quotientMap[n];return s>1&&(e.quotientMap[t]=n),n},Ze=(e,t,n)=>{const s=t,a=[[t,n]];for(;a.length>0;)if([t,n]=a.pop(),t>n&&([t,n]=[n,t]),t=P(e,t),n=P(e,n),t!==n){e.quotientMap[n]=t,e.seen.has(n)&&!e.seen.has(t)&&e.seen.add(t);const i=e.cosets.get(t),o=e.cosets.get(n);e.cosets.delete(n);for(const[f,u]of o)i.has(f)?a.push([i.get(f),u]):i.set(f,u)}return P(e,s)},Me=(e,t,n,s)=>{t=P(e,t);const a=e.cosets.get(t);a.has(n)?Ze(e,a.get(n),s):a.set(n,s)},fe=(e,t,n,s)=>{t=P(e,t);let a;const i=e.cosets.get(t);return i.has(n)?(a=P(e,i.get(n)),s!==void 0&&a!==s&&Ze(e,s,a)):(s?a=s:(a=e.nextVertex++,e.cosets.set(a,new Map),e.unvisited.push(a)),Me(e,t,n,a),Me(e,a,Wt(n),t)),a},Pe=function(e,t,n){let s=n;for(let a=t.length-1;a>0;a--)s=fe(e,s,t[a]);fe(e,s,t[0],n)},Xt=function(e){if(!e.words){const t=P(e,1);e.words=new Map,e.words.set(t,""),e.currentWords=new Map,e.currentWords.set(t,""),e.lastCoset=t,e.remaining=[t],e.rootVertex&&e.rootNormals&&e.metric&&(e.vertices=new Map,e.vertices.set(t,e.rootVertex))}for(;e.remaining.length>0;){const t=e.remaining[0],n=P(e,t),s=e.cosets.get(n),a=e.words.get(n);if(s.size<e.gens.length*2)return;const i=[];for(let o=0;o<e.gens.length;o++){const f=e.gens[o],u=P(e,s.get(f));if(!e.words.has(u)){if(e.cosets.get(u).size<e.gens.length*2)return;i.push([f,u])}}e.remaining.shift();for(let o=0;o<i.length;o++){const[f,u]=i[o],l=f+a;if(e.words.set(u,l),e.currentWords.set(u,l),e.lastCoset=u,e.remaining.push(u),e.vertices){let c=e.vertices.get(n);for(let d=0;d<e.transforms[f].length;d++){const h=e.transforms[f][d];c=vn(c,e.rootNormals[h],e.metric)}e.vertices.set(u,c)}}}},Yt=e=>{if(e.cosets)e.unvisited.splice(0,e.pointer),e.pointer=0;else{e.unvisited=[1],e.pointer=0,e.cosets=new Map([[1,new Map]]),e.nextVertex=2,e.seen=new Set,e.quotientMap={};for(let t=0;t<e.subgens.length;t++)Pe(e,e.subgens[t],1)}e.limit=e.limit||1e3,e.done=!1;for(let t=0;t<e.limit;t++){let n=null;for(;e.unvisited.length-e.pointer>0;){const s=e.unvisited[e.pointer++],a=P(e,s);if(!e.seen.has(a)){e.seen.add(a),n=a;break}}if(n===null){e.done=!0;break}for(let s=0;s<e.gens.length;s++)fe(e,n,e.gens[s].toUpperCase()),fe(e,n,e.gens[s]);for(let s=0;s<e.rels.length;s++)Pe(e,e.rels[s],n)}},Qe=e=>(Yt(e),Xt(e),e),Le=()=>{const{location:e}=window;if(e.hash)try{const t=JSON.parse(atob(e.hash.slice(1)));return ce({...ie,...t}).params}catch(t){console.warn(t),e.hash=""}return ce(ie).params},Zt=(e,t=!1)=>{const n="#"+btoa(JSON.stringify(e));window.history[t?"replaceState":"pushState"](null,null,n)},Qt=()=>{const[e,t]=g.useState(Le()),n=g.useCallback(a=>{const i=Le();i&&(Object.entries(i).forEach(([o,f])=>{Array.isArray(f)&&Ae(f,e[o])&&(i[o]=e[o])}),t(i))},[e]),s=g.useCallback((a,i=!1)=>{t(o=>{if(!Object.entries(a).filter(([l,c])=>Array.isArray(c)&&!c._reset?!Ae(c,o[l]):o[l]!==c).length)return o;const{params:f,badParams:u}=ce(i?a:{...o,...a},i?[]:Object.keys(a),o);return u.length||Zt(f,Object.keys(a).length===1&&a.matrix),f})},[]);return g.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),r.jsx(Kt,{params:e,updateParams:s})};hn.createRoot(document.getElementById("root")).render(r.jsx(Qt,{}));window.ToddCoxeter=Qe;window.bench=()=>{const e=performance.now(),t=Qe({gens:"abcdef",subgens:"c",rels:["aa","bb","cc","dd","ee","ff","abababab","acac","bcbcbc","adad","bdbd","cdcdcd","aeae","bebe","cece","dedede","afaf","bfbf","cfcf","dfdf","efefef"],limit:1e5});return console.warn(performance.now()-e,t.words.length),t.tc};export{gn as c,W as r};
