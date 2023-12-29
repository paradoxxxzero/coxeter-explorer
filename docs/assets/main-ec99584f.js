import{c as de,a as cn,s as ln,m as be,d as Ue,b as ie,e as C,f as H,g as un,h as fn,i as ce,P as V,j as Be,k as dn,l as mn,n as k,o as He,p as U,t as Re,q,r as vn,u as te,v as pn,w as g,x as Fe,y as Ve,z as K,T as Ee,A as Ge,B as hn,C as gn,D as qe,E as re,F as xn,G as bn,H as En,I as r,J as Ae,K as Ne,L as $e,M as Nn,N as W,O as we,Q as wn}from"./CoxeterDiagram-3f4deaa6.js";var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const In=(e,t)=>{let n;return(...s)=>(clearTimeout(n),n=setTimeout(()=>e(...s),t),()=>clearTimeout(n))},L=(e,t=null,n=1,s=!1)=>{if(t===null&&(t=e,e=0),n===0)throw new Error("Step cannot be zero.");if(t<e&&n>0||t>e&&n<0){if(s)return[];n=-n}return new Array(Math.ceil((t-e)/n)).fill().map((a,o)=>e+o*n)},Se=(e,t)=>e.length!==t.length?!1:e.every((n,s)=>Array.isArray(n)?Se(n,t[s]):n===t[s]),jn=(e,t,n)=>ln(e,be(ie(Rn(n),t),2*Ue(ie(Ie(n),e),t))),On=(e,t)=>t.some((n,s)=>n.some((a,o)=>s===o&&a===0))?be(e,1/e[e.length-1]):be(e,-1/C(H(Ue(ie(t,e),e)))),An=(e,t)=>un(e.map((n,s)=>n.map((a,o)=>a<0?-fn(-a/10):a===0?-1:-ce(t[s][o]*V/a)))),Je=e=>{const t=vn(e);return{"+":t.values.filter(n=>n>0).length,"-":t.values.filter(n=>n<0).length,0:t.values.filter(n=>n===0).length,eigens:t}},Ke=(e,t=[],n=0,s=10)=>{t[n]=t[n]||[];for(let a=0;a<e.length;a++){const o=e.filter((i,c)=>c!==a).map(i=>i.filter((c,f)=>f!==a));t[n].push(Je(o)),o.length>1&&n+1<s&&Ke(o,t,n+1,s)}return t},Tn=e=>{const t=Je(e),n=t.eigens,s=Be(n.values.map(c=>dn(c))),a={eigens:n,gram:e,metric:s};if(t["-"]===0&&t[0]===0)return{...a,type:"finite",curvature:1};if(t["-"]===0&&t[0]>0)return{...a,type:"affine",curvature:0};if(t["-"]>1)return{...a,type:"hyperbolic",subtype:"superhyperbolic",level:t["-"],curvature:-1};const o=Ke(e,[],0,3),i=o[0];if(i.every(c=>c["-"]===0&&c[0]===0))return{...a,type:"hyperbolic",subtype:"compact",curvature:-1};if(i.every(c=>c["-"]===0))return{...a,type:"hyperbolic",subtype:"paracompact",curvature:-1};for(let c=1;c<o.length;c++)if(o[c].every(l=>l["-"]===0))return{...a,type:"hyperbolic",subtype:"lorentzian",curvature:-1,level:c+1};return console.info("indefinite",o),{...a,type:"indefinite",curvature:-1}},ye=1,Ie=e=>e.map((t,n)=>t.map((s,a)=>n===a&&s===0?ye:s)),Rn=e=>e.map(t=>t.map(n=>H(n))),Fn=(e,t)=>{const n=e.eigens,s=e.metric;if(t){const{L:v,D:E}=mn(e.gram);let I;if(E.some((N,j)=>isNaN(E[j][j])))console.warn("Can’t cholesky"),I=zn(e,t);else{const N=k(s,E).map((j,S)=>j.map((R,P)=>S===P?C(R):0));s.forEach((j,S)=>{j[S]===0&&(N[S][S]=ye)}),I=k(v,N)}if(I){const N=k(I,Ie(s)),j=He(N);if(!j.some(S=>S.some(R=>isNaN(R))))return{normals:I,vertices:j}}console.warn("Can’t center")}const a=n.values.slice(),o=n.vectors.slice(),i=U(...a.filter(v=>v>0)),c=a.indexOf(i);[s[c][c],s[1][1]]=[s[1][1],s[c][c]],o.splice(1,0,o.splice(c,1)[0]),a.splice(c,1),a.splice(1,0,i),a.forEach((v,E)=>{v===0&&(a[E]=.05)});const f=Re(o),l=Be(a),u=k(s,l).map((v,E)=>v.map((I,N)=>E===N?C(I):0));s.forEach((v,E)=>{v[E]===0&&(u[E][E]=ye)});const d=u.map((v,E)=>v.map((I,N)=>E===N?I!==0?1/I:1:0)),m=k(f,u),p=k(k(Ie(s),d),Re(f));return{normals:m,vertices:p}},Cn=e=>e.sort((t,n)=>{const[s,a]=t,[o,i]=n;return s===0&&a===1?1:o===0&&i===1||s<2&&o>=2?-1:o<2&&s>=2?1:s<2&&o<2?a===i?o-s:a-i:s===o?i-a:o-s}),Dn=(e,t)=>{const n=Cn(de(L(e),2));if(t.metric.filter((s,a)=>t.metric[a][a]<0).length===1){const s=[...de(L(e-1),2),...de(L(e-1),2).map(([a,o])=>[o,a])].sort((a,o)=>a[0]-o[0]||(a[0]<a[1]?a[1]-o[1]:o[1]-a[1])).map(([a,o])=>[-a,-o]);if(n.length%2){const a=n.pop();n.push(...s,a)}else n.push(...s)}return{combinations:n,maxShift:~~cn(n.length/2)}},We=(e,[t,n],s,a)=>{const o=q(s);if(t<0||n<0){const u=-t;t=-n,n=L(s).find(m=>a[m][m]<0);const d=.5*e*e;return o[u][u]=1-d,o[n][n]=1+d,o[u][t]=e,o[t][u]=-e,o[t][n]=e,o[n][t]=e,o[u][n]=d,o[n][u]=-d,o}if(a[t][t]*a[n][n]===0)return a[t][t]===0&&(o[n][t]=e),a[n][n]===0&&(o[t][n]=e),o;const i=a[t][t]*a[n][n],f=(i>0?te:pn)(e),l=C(1-i*f*f);return o[t][t]=l,o[n][n]=l,o[t][n]=-i*f,o[n][t]=f,o},zn=(e,t)=>{const n=e.gram,s=n.length,a=e.curvature;let o=null;const i=n.every((c,f)=>c.every((l,u)=>f===u||l<=-1));if(t||i){if(o=new Array(s).fill(0).map(()=>new Array(s).fill(0)),s===2){const c=(n[0][1]+1)/2;return o[0][0]=C(c-n[0][1]),o[1][0]=-C(c-n[0][1]),o[0][1]=o[1][1]=C((a||1)*c),a===0&&(o[1][1]=.5),o}else if(s===3){const c=n[0][1],f=n[1][2],l=n[0][2],u=(c*c+f*f+l*l-2*c*f*l-1)/(c*c+f*f+l*l-2*c*f-2*c*l-2*f*l+2*c+2*f+2*l-3);return o[0][2]=o[1][2]=o[2][2]=C(a*u),o[2][1]=-C(1-u),o[1][1]=(f-u)/o[2][1],o[0][1]=(l-u)/o[2][1],o[1][0]=-C(1-o[1][1]**2-u),o[0][0]=C(1-o[0][1]**2-u),a===0&&(o[2][2]=.5),o}else if(s===4){const c=n[0][1],f=n[1][2],l=n[2][3],u=n[0][2],d=n[1][3],m=n[0][3],p=(c*c*l*l+f*f*m*m+u*u*d*d-c*c-f*f-l*l-u*u-d*d-m*m+2*c*d*m+2*c*f*u+2*f*l*d+2*l*u*m-2*f*u*d*m-2*c*f*l*m-2*c*l*u*d+1)/(2*(c*c*l+f*f*m+l*l*c+u*u*d+d*d*u+m*m*f-c*c-f*f-l*l-u*u-d*d-m*m-c*f*l-c*f*m-c*l*u-c*l*d-c*l*m-c*u*d-f*l*m-f*u*d-f*u*m-f*d*m-l*u*d-u*d*m+c*f*u+c*d*m+f*l*d+l*u*m+c*f+c*u+c*d+c*m+f*l+f*u+f*d+l*u+l*d+l*m+u*m+d*m-c-f-l-u-d-m+2));return o[0][3]=o[1][3]=o[2][3]=o[3][3]=C(a*p),o[3][2]=-C(1-p),o[2][2]=(l-p)/o[3][2],o[1][2]=(d-p)/o[3][2],o[0][2]=(m-p)/o[3][2],o[2][1]=-C(1-p-o[2][2]**2),o[1][1]=(f-p-o[1][2]*o[2][2])/o[2][1],o[0][1]=(u-p-o[0][2]*o[2][2])/o[2][1],o[1][0]=-C(1-p-o[1][1]**2-o[1][2]**2),o[0][0]=C(1-p-o[0][1]**2-o[0][2]**2),a===0&&(o[3][3]=.5),o}if(n.every((c,f)=>c.every((l,u)=>f===u||l===-1))){const c=[0];for(let f=1;f<s;f++)c[f]=(c[f-1]+1)/(3-c[f-1]);o[0][0]=1,o[1][0]=-1,o[0][1]=C(c[1]),o[1][1]=C(c[1]);for(let f=0;f<s;f++)for(let l=0;l<s;l++)f<2&&l<2||(o[f][l]=l<f-1?0:l===f-1?f*C(c[l]-c[l-1]):l<s-1?C(c[l]-c[l-1]):C(c[l-1]));return o}}};class me extends g.Component{constructor(t){super(t),this.state={error:!1}}static getDerivedStateFromError(t){return{error:!0}}static getDerivedStateFromProps(t){return{error:t.error}}componentDidCatch(t,n){this.props.onError(t,n)}render(){return this.state.error?null:this.props.children}}var Xe={exports:{}};(function(e,t){(function(n,s){e.exports=s()})(Sn,function(){var n=function(){function s(p){return i.appendChild(p.dom),p}function a(p){for(var v=0;v<i.children.length;v++)i.children[v].style.display=v===p?"block":"none";o=p}var o=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",function(p){p.preventDefault(),a(++o%i.children.length)},!1);var c=(performance||Date).now(),f=c,l=0,u=s(new n.Panel("FPS","#0ff","#002")),d=s(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var m=s(new n.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:i,addPanel:s,showPanel:a,begin:function(){c=(performance||Date).now()},end:function(){l++;var p=(performance||Date).now();if(d.update(p-c,200),p>f+1e3&&(u.update(1e3*l/(p-f),100),f=p,l=0,m)){var v=performance.memory;m.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return p},update:function(){c=this.end()},domElement:i,setMode:a}};return n.Panel=function(s,a,o){var i=1/0,c=0,f=Math.round,l=f(window.devicePixelRatio||1),u=80*l,d=48*l,m=3*l,p=2*l,v=3*l,E=15*l,I=74*l,N=30*l,j=document.createElement("canvas");j.width=u,j.height=d,j.style.cssText="width:80px;height:48px";var S=j.getContext("2d");return S.font="bold "+9*l+"px Helvetica,Arial,sans-serif",S.textBaseline="top",S.fillStyle=o,S.fillRect(0,0,u,d),S.fillStyle=a,S.fillText(s,m,p),S.fillRect(v,E,I,N),S.fillStyle=o,S.globalAlpha=.9,S.fillRect(v,E,I,N),{dom:j,update:function(R,P){i=Math.min(i,R),c=Math.max(c,R),S.fillStyle=o,S.globalAlpha=1,S.fillRect(0,0,u,E),S.fillStyle=a,S.fillText(f(R)+" "+s+" ("+f(i)+"-"+f(c)+")",m,p),S.drawImage(j,v+l,E,I-l,N,v,E,I-l,N),S.fillRect(v+I-l,E,l,N),S.fillStyle=o,S.globalAlpha=.9,S.fillRect(v+I-l,E,l,f((1-R/P)*N))}}},n})})(Xe);var Mn=Xe.exports;const Pn=yn(Mn),_n="xyzwvutsrqponmlkjihgfedcba",Ye=["perspective","stereographic","orthographic","klein","inverted","scale","joukowsky","half","upperhalf","halfsphere","band","cross","heart","teardrop","square","ring","sinusoidal","spiral","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],Ze=["linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],Ln=["ads","normal","position","uv"],kn=["lambert","oren-nayar","minnaert","cel","fresnel","reverse"],Un=["phong","blinn-phong","cook-torrance","ward-anisotropic"],Bn=["low","medium","high","ultra"],je=["vertex","edge","face"],Hn=`const vec2 cone = vec2(1., 0);
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
`,Gn=`float ease(float t) {
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
`,qn=`#version 300 es
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
`,$n=`#loopN2
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
`,Jn=`const float ambient = AMBIENT;
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
`,Kn=`#include helpers
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
`,Wn=`#ifdef OIT
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
`,Xn=`gl_Position = viewProject(proj);

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
`,ve=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),D=(e,t,n)=>{let s,a,o;if(t===0)s=a=o=n;else{const i=n<.5?n*(1+t):n+t-n*t,c=2*n-i;s=ve(c,i,e+1/3),a=ve(c,i,e),o=ve(c,i,e-1/3)}return[s,a,o]},ae=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],Zn={background:[0,0,0,1],glow:!1,shading:"ads",diffuse:"lambert",specular:!1,shininess:32,opacity:1,ambient:.2,roughness:.85,gouraud:!1,transparency:"oit",color:({word:e})=>D(e.length*.03%1,.75,.7)},Y=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},shading:!1,face:{opacity:.025},transparency:"blend",color:({word:e})=>D(e.length*.17%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,diffuse:"fresnel",opacity:.025},transparency:"blend",color:({word:e})=>D(...ae[e.length%ae.length])},synthwave:{background:[...D(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},shading:!1,face:{opacity:.015},afterImage:.7,transparency:"blend",color:({word:e})=>D((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>D(e.length*.03%1,1,.8)},shiny:{background:[0,0,0,1],diffuse:"lambert",specular:"blinn-phong",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>D(-(e.length*.07)%1,1,.8)},shape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({faceSize:e,type:t,idx:n,size:s})=>t==="face"?D((e-2)*.21%1,1,.8):D(n/s,.75,.5)},subShape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({subShape:e,type:t})=>t!=="vertex"?D(e*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],diffuse:"cel",face:{opacity:.6,gouraud:!1},transparency:"blend",color:({word:e,type:t,dimensions:n,draw:s})=>{const a=e.length?Fe(e[e.length-1])/n:0;return D(a%1,1,t==="face"?.6:s.face?0:.8)}},harlequin:{background:[...D(240/360,.23,.09),1],face:{opacity:.6},transparency:"oit",color:({word:e,idx:t,type:n})=>{const s=e.split("").map(o=>Fe(o)).reduce((o,i)=>o+i,0),a=[...ae[s%ae.length]];return t%2&&(a[2]*=.5),D(...a)}},pure:{background:[0,0,0,1],color:({word:e})=>D(e.length*.03%1,.75,.7)},facets:{background:[0,0,0,1],color:({faceIndex:e,faceSize:t})=>D(e/t,.75,.7)},monochrome:{background:[.12,.12,.12,1],diffuse:"reverse",ambient:0,face:{opacity:.1},transparency:"oit",color:()=>[1,1,1]},plain:{extended:!0,background:[1,1,1,1],glow:!1,shading:!1,color:({word:e,type:t,draw:n})=>D(e.length*.06%1,1,t==="face"?.6:n.face?.05:.5)},plainblack:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e,type:t})=>t==="face"?new Array(3).fill(1-Ve(.9,e.length+1)):[0,0,0]},normals:{extended:!0,background:[1,1,1,1],shading:"normal",color:()=>[0,0,0]},uvs:{extended:!0,background:[1,1,1,1],shading:"uv",color:()=>[0,0,0]}}).map(([e,t])=>[e,{...Zn,...t,transparent:{}}])),Qn={globals:qn,dimensions:Vn,project:Kn,helpers:$n,complex:Hn,ease:Gn,fragment:Wn,vertexouthead:Yn,lighting:Jn,vertexout:Xn},et=(e,t,n)=>{t=n?1:t||1,t=Math.max(0,t);const s=n?n.width:e.clientWidth*t|0,a=n?n.height:e.clientHeight*t|0;return e.width!==s||e.height!==a?(e.width=s,e.height=a,!0):!!n},pe=(e,t)=>e.replace(/\bvecN\b/g,`vec${t}`).replace(/\bmatN\b/g,`mat${t}`).replace(/\bfovN\b/g,`fov${t}`).replace(/\bvecN_1\b/g,`vec${t-1}`).replace(/\bvec1\b/g,"float").replace(/\b_N_\b/g,`${t}`).replace(/\b_Nf_\b/g,`${t}.`).replace(/\PROJECTION_N\b/g,`PROJECTION${t}`),nt=(e,t)=>pe(e.replace(/#loopN(\d)(.+?)#endloopN/gs,(n,s,a)=>{const o=[];for(let i=s;i<=t;i++)o.push(pe(a.replace(/#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,(c,f,l,u,d)=>f===`${i}`?pe(l,i):d||""),i));return o.join(`
`)}),t),Ce=(e,t,n,s)=>{var l;const a=Y[e.ambiance];let o="";const i=u=>u.toString().includes(".")?u:`${u}.`;Object.entries({shading:u=>Ln.indexOf(u),diffuse:u=>kn.indexOf(u),specular:u=>Un.indexOf(u),ambient:u=>i(u),shininess:u=>i(u),roughness:u=>i(u),opacity:u=>i(u),gouraud:u=>""}).forEach(([u,d])=>{const m=Object.keys(a).includes(s)&&Object.keys(a[s]).includes(u)?a[s][u]:a[u];m!==!1&&(o+=`#define ${u.toUpperCase()} ${d(m)}
`),u==="opacity"&&m<1&&(a.transparent[s]=!0,o+=`#define TRANSPARENT
`,a.transparency==="oit"&&(o+=`#define OIT
`))});const f=e.easing;o+=`#define DIMENSIONS ${e.dimensions}
`;for(let u=3;u<=e.dimensions;u++)o+=`#define PROJECTION${u} ${Ye.indexOf(e[`projection${u}`])-1}
`;return o+=`#define CURVATURE ${((l=e.space)==null?void 0:l.curvature)||0}
`,e.curve&&e.segments>1&&(o+=`#define SEGMENTS ${e.segments}
`),o+=`#define EASING ${Ze.indexOf(f)}
`,Object.entries({...Qn,config:o}).forEach(([u,d])=>{t=t.replace(`#include ${u}`,d),n=n.replace(`#include ${u}`,d)}),[t,n].map(u=>nt(u,e.dimensions))},oe=(e,t,n,s,a)=>{if(e.gl.shaderSource(a,s),e.gl.compileShader(a),!e.gl.getShaderParameter(a,e.gl.COMPILE_STATUS)){const i=e.gl.getShaderInfoLog(a);return console.error(`An error occurred compiling the ${t}->${n} shader: ${i}`,{shaderSource:s}),i}},De=(e,t,n)=>{const{gl:s}=e;if(s.linkProgram(n),!s.getProgramParameter(n,s.LINK_STATUS)){const o=s.getProgramInfoLog(n);return console.error(`Unable to initialize the ${t} shader program: ${o}`),o}},Qe=(e,t,n,s,a=[])=>{const{gl:o}=e,i=o.createProgram(),c=o.createShader(o.VERTEX_SHADER),f=o.createShader(o.FRAGMENT_SHADER);if(oe(e,t,"vertex",n,c)||oe(e,t,"fragment",s,f)||(o.attachShader(i,c),o.attachShader(i,f),De(e,t,i)))return;const l={program:i,vertexShader:c,fragmentShader:f,uniformsDef:a,recompile(u,d,m,p=null){oe(u,t,"vertex",d,this.vertexShader)||oe(u,t,"fragment",m,this.fragmentShader)||De(u,t,this.program)||(p&&(this.uniformsDef=p),this.bindUniforms(u))},bindUniforms(u){this.uniforms={},this.uniformsDef.forEach(({name:d,type:m,value:p})=>{this.uniforms[d]=tt(u,this.program,d,m),this.uniforms[d].update(p)})}};return l.bindUniforms(e),l},Q=(e,t,n,s,a,o=null,i=null)=>{const{gl:c}=e;i=i||c.FLOAT;const f=i===c.FLOAT?4:2,l={name:n,mesh:t,indices:en,instances:o,data:a,size:s,type:i,update(u=null,d=null,m=null){c.bindVertexArray(this.mesh.vao),c.bindBuffer(c.ARRAY_BUFFER,this.buffer),u===null&&d===null&&m===null?c.bufferData(c.ARRAY_BUFFER,this.data,c.STATIC_DRAW):(this.data.set(u,d*this.size),c.bufferSubData(c.ARRAY_BUFFER,d*this.size*f,this.data,d*this.size,m*this.size))},extend(u,d,m=!1){if(c.bindVertexArray(this.mesh.vao),this.size=u,d&&(m&&d.length>=this.data.length&&d.set(this.data),this.data=d),this.location=c.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;c.bindBuffer(c.ARRAY_BUFFER,this.buffer);const p=u>4?3:1;this.name==="target"&&(this.location=u>4?6:4),this.name==="center"&&(this.location=u>4?9:5);for(let v=0;v<p;v++)c.enableVertexAttribArray(this.location+v);for(let v=0;v<p;v++)c.vertexAttribPointer(this.location+v,u/p,this.type,!1,u*f,u/p*v*f);if(this.instances)for(let v=0;v<p;v++)c.vertexAttribDivisor(this.location+v,this.instances);this.update()},get(){c.bindVertexArray(this.mesh.vao),c.bindBuffer(c.ARRAY_BUFFER,this.buffer);const u=new Float32Array(this.data.length);return c.getBufferSubData(c.ARRAY_BUFFER,0,u),u}};return l.buffer=c.createBuffer(),l.extend(s),l},en=(e,t,n)=>{const{gl:s}=e;s.bindVertexArray(t);const a=s.createBuffer();return s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,a),s.bufferData(s.ELEMENT_ARRAY_BUFFER,n,s.STATIC_DRAW),{buffer:a,vao:t,indices:n,count:n.length,update(o){s.bindVertexArray(this.vao),this.indices=o,this.count=o.length,s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,this.buffer),s.bufferData(s.ELEMENT_ARRAY_BUFFER,o,s.STATIC_DRAW)}}},tt=(e,t,n,s)=>{const{gl:a}=e;return{program:t,update(i){if(a.useProgram(this.program),s.startsWith("m")){const c=parseInt(s.slice(1,2));if(c>4)for(let f=0;f<c;f++){const l=a.getUniformLocation(t,`${n}.c${f+1}.v`);if(l!==null&&a.uniform4fv(l,i[f][0]),c-4===1){const u=a.getUniformLocation(t,`${n}.c${f+1}.u`);u!==null&&a.uniform1f(u,i[f][1])}else if(c-4>1){const u=a.getUniformLocation(t,`${n}.c${f+1}.u`);if(u!==null&&a[`uniform${U(c-4,4)}fv`](u,i[f][1]),c-8===1){const d=a.getUniformLocation(t,`${n}.c${f+1}.t`);d!==null&&a.uniform1f(d,i[f][2])}}}else{const f=a.getUniformLocation(t,n);f!==null&&a[`uniformMatrix${s.slice(1)}`](f,!1,i)}}else{const c=a.getUniformLocation(t,n);c!==null&&a[`uniform${s}`](c,i)}},get(){a.useProgram(this.program);const i=a.getUniformLocation(t,n);if(i!==null)return a.getUniform(this.program,i)}}},G=(e,t,n=null)=>{const{gl:s}=e,a=n?~~(n*s.drawingBufferWidth):s.drawingBufferWidth,o=n?~~(n*s.drawingBufferHeight):s.drawingBufferHeight,i=s.createTexture();return s.bindTexture(s.TEXTURE_2D,i),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,n?s.LINEAR:s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,n?s.LINEAR:s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texStorage2D(s.TEXTURE_2D,1,t,a,o),{texture:i,width:a,height:o}},ee=(e,t,n,s,a=[])=>{const o={name:t,vertex:n,fragment:s,...Qe(e,t,n,s,a),recompileProgram(i){this.recompile(i,this.vertex,this.fragment,a)}};return{[t]:o}},he=(e,t,n,s,a,o,i,c=["position"])=>{const{gl:f}=e,l=a(e.curve?e.segments:1,e.detail),u=m=>[{name:"viewProjection",type:"m4fv",value:K(q(4))},{name:"matrix",type:`m${m.dimensions}fv`,value:K(m.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${m.dimensions}fv`,value:K(q(m.dimensions))},{name:"zoom",type:"1f",value:1},...["vertex","edge"].includes(t)?[{name:"thickness",type:"1f",value:0}]:[],...L(3,m.dimensions+1,1,!0).map(p=>({name:`fov${p}`,type:"1f",value:m[`fov${p}`]}))];i=i>4?9:i;const d={attributes:{},varying:c,vertex:n,type:t,fragment:s,...Qe(e,t,...Ce(e,n,s,t),u(e)),recompileProgram(m){const[p,v]=Ce(m,this.vertex,this.fragment,this.type);this.recompile(m,p,v,u(m))},changeArity(m){m=m>4?9:m,this.arity!==m&&(this.arity=m,c.forEach(p=>{this.attributes[p].extend(m,new Float32Array(this.instances*m),!1)}))},extendAttributes(m){this.instances=m,c.forEach(p=>{this.attributes[p].extend(this.arity,new Float32Array(m*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(m*3),!0)},updateGeometry(m){const p=a(m.space.curvature&&m.curve?m.segments:1,m.detail);this.indices.update(new Uint16Array(p.indices)),this.attributes.vertex.extend(3,new Float32Array(p.vertices)),this.attributes.uv.extend(2,new Float32Array(p.uvs)),this.attributes.normal.extend(3,new Float32Array(p.normals))},render(m){this.count&&(f.useProgram(this.program),f.bindVertexArray(this.vao),f.drawElementsInstanced(f.TRIANGLES,this.indices.count,f.UNSIGNED_SHORT,0,this.count))}};return d.vao=f.createVertexArray(),d.indices=en(e,d.vao,new Uint16Array(l.indices)),d.attributes.vertex=Q(e,d,"vertex",3,new Float32Array(l.vertices)),d.attributes.uv=Q(e,d,"uv",2,new Float32Array(l.uvs)),d.attributes.normal=Q(e,d,"normal",3,new Float32Array(l.normals)),d.attributes.color=Q(e,d,"color",3,new Float32Array(o*3),1),c.forEach(m=>{d.attributes[m]=Q(e,d,m,i,new Float32Array(o*i),1)}),d.type=t,d.arity=i,d.instances=o,d.count=0,{[t]:d}},ge=(e,t,n,s)=>{const{gl:a}=e;a.bindRenderbuffer(a.RENDERBUFFER,t),s?a.renderbufferStorageMultisample(a.RENDERBUFFER,s,n,a.drawingBufferWidth,a.drawingBufferHeight):a.renderbufferStorage(a.RENDERBUFFER,n,a.drawingBufferWidth,a.drawingBufferHeight),a.bindRenderbuffer(a.RENDERBUFFER,null)},rt=({radius:e=1,widthSegments:t=16,segments:n=16}={})=>{const s=[],a=[],o=[],i=[];let c=0;const f=[];for(let l=0;l<=n;l++){const u=[],d=l/n;let m=0;l===0?m=.5/t:l===n&&(m=-.5/t);for(let p=0;p<=t;p++){const v=p/t,E=[-e*ce(v*Ee)*te(d*V),e*ce(d*V),e*te(v*Ee)*te(d*V)];a.push(...E);const I=(E[0]**2+E[1]**2+E[2]**2)**-.5;o.push(...E.map(N=>N*I)),i.push(v+m,1-d),u.push(c++)}f.push(u)}for(let l=0;l<n;l++)for(let u=0;u<t;u++){const d=f[l][u+1],m=f[l][u],p=f[l+1][u],v=f[l+1][u+1];l!==0&&s.push(d,m,v),l!==n-1&&s.push(m,p,v)}return{vertices:a,normals:o,uvs:i,indices:s}},at=({radius:e=null,radiusTop:t=1,radiusBottom:n=1,height:s=1,radialSegments:a=8,segments:o=1}={})=>{const i=[],c=[],f=[],l=[];e!==null&&(t=e,n=e);let u=0;const d=[],m=s/2,p=(n-t)/s;for(let v=0;v<=o;v++){const E=[],I=v/o,N=I*(n-t)+t;for(let j=0;j<=a;j++){const S=j/a,R=S*Ee,P=te(R),M=ce(R),Z=[N*P,-I*s+m,N*M];c.push(...Z);const z=[P,p,M],_=(z[0]**2+z[1]**2+z[2]**2)**-.5;f.push(...z.map(x=>x*_)),l.push(S,1-I),E.push(u++)}d.push(E)}for(let v=0;v<a;v++)for(let E=0;E<o;E++){const I=d[E][v],N=d[E+1][v],j=d[E+1][v+1],S=d[E][v+1];i.push(I,N,S),i.push(N,j,S)}return{vertices:c,normals:f,uvs:l,indices:i}},ot=({segments:e=3}={})=>{const t=[],n=[],s=[],a=[],o=1/e;for(let i=0;i<e+1;i++)for(let c=0;c<i+1;c++)n.push((2*c-i)*o/2,i*o,0),s.push(0,0,1),a.push(o*c,1-o*i);for(let i=1;i<e+1;i++)for(let c=0;c<i;c++){const f=i*(i+1)/2+c,l=i*(i-1)/2+c;if(t.push(f,l,f+1),i<e){const u=(i+1)*(i+2)/2+c;t.push(u+1,f,f+1)}}return{vertices:n,normals:s,uvs:a,indices:t}},st=`#include globals
#include fragment
`,it=`#include globals
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
`,ct=`#include globals
#include fragment
`,lt=`#include globals
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
`,ut=`#include globals
#include fragment
`,ft=`#include globals
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
`,xe={vertex:(e,t)=>rt({low:{widthSegments:16,segments:8},medium:{widthSegments:32,segments:16},high:{widthSegments:64,segments:32},ultra:{widthSegments:128,segments:64}}[t||"medium"]),edge:(e,t)=>at({low:{segments:e,radialSegments:4},medium:{segments:e,radialSegments:8},high:{segments:e,radialSegments:16},ultra:{segments:e,radialSegments:32}}[t||"medium"]),face:(e,t)=>ot({low:{segments:~~hn(e)},medium:{segments:~~C(e)},high:{segments:e},ultra:{segments:3*e}}[t||"medium"])};function dt(e){return{meshes:je,...he(e,"vertex",ft,ut,xe.vertex,1024,e.dimensions),...he(e,"edge",it,st,xe.edge,1024,e.dimensions,["position","target"]),...he(e,"face",lt,ct,xe.face,1024,e.dimensions,["position","target","center"]),changeArity(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].changeArity(t)},updateGeometries(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].updateGeometry(t)},recompilePrograms(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].recompileProgram(t)},updateUniforms(t,n=!1,s=null){for(let a=0;a<this.meshes.length;a++){const o=this.meshes[a],i=this[o];if(!n){i.uniforms.metric.update(K(t.space.metric)),i.uniforms.matrix.update(K(t.matrix));for(let c=4;c<=t.dimensions;c++)i.uniforms[`fov${c}`].update(1/Ge(V*t[`fov${c}`]*.5/180));o==="vertex"?i.uniforms.thickness.update(t.sizeVertex):o==="edge"&&i.uniforms.thickness.update(t.sizeEdge)}i.uniforms.viewProjection.update(t.camera.viewProjection),i.uniforms.zoom.update(n?s:t.zoom),i.uniforms.eye.update(t.camera.eye)}}}}const mt=`#version 300 es
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
`,vt=`#version 300 es

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
`,ht=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,gt=`#version 300 es
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
`,xt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,bt=`#version 300 es
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
`,Et=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Nt=`#version 300 es
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
`,wt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function St(e){return{...ee(e,"oit",Et,bt,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...ee(e,"down",xt,gt,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...ee(e,"up",wt,Nt,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...ee(e,"afterImage",vt,mt,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...ee(e,"bloom",ht,pt,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function nn(e){const{gl:t}=e,n=Y[e.ambiance],s=e.msaa?U(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(t.bindFramebuffer(t.FRAMEBUFFER,e.fb.base),ge(e,e.rb.base,t.RGBA8,s),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,e.rb.base),ge(e,e.rb.depth,t.DEPTH_COMPONENT24,s),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),e.fb.oit&&(t.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(t.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(t.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&t.deleteRenderbuffer(e.rb.depth_copy),n.transparency==="oit"&&(e.fb.oit=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.oit),s?(e.rb.depth_copy=t.createRenderbuffer(),ge(e,e.rb.depth_copy,t.DEPTH_COMPONENT24),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth_copy)):t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),e.textures.oitAccum=G(e,t.RGBA16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=G(e,t.R16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT1,t.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(t.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(t.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(t.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(t.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),n.afterImage&&(e.fb.afterImage=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=G(e,t.RGBA8),e.textures.afterImageScreen=G(e,t.RGBA8),e.textures.afterImageOutScreen=G(e,t.RGBA8)),e.fb.kawase&&(t.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(t.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let a=0;a<e.textures.kawase.length;a++)t.deleteTexture(e.textures.kawase[a].texture);e.textures.kawase=null}if(e.textures.blur&&(t.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(t.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),n.glow){e.fb.kawase=t.createFramebuffer(),e.fb.bloom=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let a=0;a<n.glow.steps;a++)e.textures.kawase[a]=G(e,t.RGBA8,n.glow.pow**-a);e.textures.blur=G(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.blur.texture,0),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=G(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.bloom.texture,0)}}const tn=window.location.search.includes("stats");let se;tn&&(se=new Pn,se.dom.id="stats",document.body.appendChild(se.dom));const yt=e=>{const t=document.createElement("canvas");t.id="webgl2",document.body.insertBefore(t,document.body.firstChild);const n=t.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:n},!n){console.error("Unable to initialize WebGL. Your browser may not support it.");return}n.getExtension("EXT_color_buffer_float"),n.enable(n.DEPTH_TEST);const s={zoom:1,fov:V/3,eye:[0,0,-e.zoom],near:.01,far:1e3,update(l){const u=q(4);u[0][3]=this.eye[0],u[1][3]=this.eye[1],u[2][3]=this.eye[2],u[0][0]=-1,u[2][2]=-1;const d=He(u);this.aspect=l?l.fullWidth/l.fullHeight:n.canvas.clientWidth/n.canvas.clientHeight,this.zoom=U(this.aspect,1);const m={left:0,right:0,top:0,bottom:0,near:this.near,far:this.far};m.top=this.near*Ge(this.fov/2)/this.zoom;let p=2*m.top,v=this.aspect*p;m.left=-.5*v,l&&(m.left+=l.x*v/l.fullWidth,m.top-=l.y*p/l.fullHeight,v*=l.width/l.fullWidth,p*=l.height/l.fullHeight),m.bottom=m.top-p,m.right=m.left+v;const E=gn(m);this.viewProjection=K(k(E,d))}};s.update();const a=St(e),o=dt(e),i={base:n.createRenderbuffer(),depth:n.createRenderbuffer()},c={base:n.createFramebuffer()};return{...e,gl:n,camera:s,meshes:o,passes:a,rb:i,fb:c,textures:{}}},le=(e,t=null)=>{e.camera.fov=e.fov3?V*e.fov3/180:1,t!==null&&(e.camera.eye[2]=t===null?-e.zoom:-t),e.camera.update(),e.meshes.updateUniforms(e,!0,t)},It=e=>{const t=Y[e.ambiance];e.gl.clearColor(...t.background),t.glow&&(e.passes.bloom.uniforms.exposure.update(t.glow.exposure),e.passes.bloom.uniforms.strength.update(t.glow.strength),e.passes.down.uniforms.offset.update(t.glow.offset.down),e.passes.up.uniforms.offset.update(t.glow.offset.up)),t.afterImage&&e.passes.afterImage.uniforms.strength.update(t.afterImage)},X=(e,t)=>{tn&&se.update();const{gl:n}=e,s=e.msaa?U(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,a=Y[e.ambiance];et(n.canvas,e.subsampling,t)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),nn(e),e.camera.update(t),e.meshes.updateUniforms(e,!0,e.zoom)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),a.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),a.transparent.vertex||e.meshes.vertex.render(e),a.transparent.edge||e.meshes.edge.render(e),a.transparent.face||e.meshes.face.render(e),(e.drawVertex&&a.transparent.vertex||e.drawEdge&&a.transparent.edge||e.drawFace&&a.transparent.face)&&(a.transparency==="oit"?(s&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):a.transparency==="blend"&&(n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e)));const o=a.afterImage?e.fb.afterImage:a.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,o),a.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let i=e.textures.bloom;if(a.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),a.glow?i=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),a.glow){n.disable(n.BLEND),a.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let c=0;c<a.glow.steps;c++){const f=c===0?i:e.textures.kawase[c-1],l=e.textures.kawase[c];n.viewport(0,0,l.width,l.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,l.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let c=a.glow.steps-1;c>=0;c--){const f=e.textures.kawase[c],l=c===0?e.textures.blur:e.textures.kawase[c-1];n.viewport(0,0,l.width,l.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,l.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,i.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=X;const ne=.9,jt=.95,Ot=10,rn=(e,t,n,s,a,o)=>{const{combinations:i}=n,c=[[],[]],f=(u,d)=>{qe(s,k(We(u,d,a,o),s))},l=2*t+1>i.length-1?[t*2]:[t*2+1,t*2];for(let u=0;u<l.length;u++){const d=l[u];if(c[u].push(d),n.lock&&i[d][0]>=0&&i[d][1]>=0)for(let m=0;m<i.length;m++)i[m][0]<0||i[m][1]<0||!i[d].some(p=>i[m].includes(p))&&(!(u>0)||m!==l[1-u])&&c[u].push(m)}for(let u=0;u<c.length;u++){const d=c[u];for(let m=0;m<d.length;m++){const p=d[m];f(e[u],i[p])}}return c},At=(e,t,n,s,a,o)=>{const{code:i}=e,c=.1;if(e.altKey||e.ctrlKey||e.metaKey)return;const f=(l,u,d)=>rn([l,u],d,t,n,s,a);if(i==="ArrowLeft"||i==="KeyA")f(c,0,0);else if(i==="ArrowRight"||i==="KeyD")f(-c,0,0);else if(i==="ArrowUp"||i==="KeyW")f(0,c,0);else if(i==="ArrowDown"||i==="KeyS")f(0,-c,0);else if(i==="PageUp"||i==="KeyQ")f(c,0,1);else if(i==="PageDown"||i==="KeyE")f(-c,0,1);else if(i==="Digit1")f(0,c,1);else if(i==="Digit3")f(0,-c,1);else if(i==="KeyZ")f(c,0,2);else if(i==="KeyC")f(-c,0,2);else if(i==="ControlLeft")o("shift",(t.shift+1)%t.maxShift);else return;return!0},Tt=(e,t,n,s)=>{const a=g.useRef(null),o=g.useRef({pause:new Set,speed:null,zoom:null,t:null}),i=g.useRef({matrix:e.matrix.map(l=>l.slice()),zoom:e.zoom,pointers:new Map});g.useEffect(()=>{i.current.matrix=e.matrix.map(l=>l.slice())},[e.matrix]),g.useEffect(()=>{i.current.zoom=e.zoom,o.current.zoom=null},[e.zoom]);const c=g.useCallback(({matrix:l,zoom:u}={matrix:!0,zoom:!0})=>{if(!e.matrix._reset){if(l)for(let d=0;d<je.length;d++)e.meshes[je[d]].uniforms.matrix.update(K(i.current.matrix));u&&le(e,i.current.zoom)}},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.drawVertex,e.drawEdge,e.drawFace,e.easing,e.error,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.segments,e.space,e.stellation,e.subsampling,e.zoom]);g.useEffect(()=>{o.current.speed=new Array(t.combinations.length).fill(0)},[t.combinations.length]),g.useEffect(()=>{e.matrix._reset&&(delete e.matrix._reset,o.current.speed=new Array(t.combinations.length).fill(0))},[t.combinations.length,e.matrix]);const f=g.useCallback(()=>{const{pause:l,speed:u,zoom:d}=o.current;o.current.t||(o.current.t=performance.now());const m=U(performance.now()-o.current.t,100);let p=!1;for(let v=0;v<u.length;v++)u[v]!==0&&(p=!0,t.auto==="damp"&&(u[v]*=jt,H(u[v])<1e-6&&(u[v]=0)),l.has(v)||qe(i.current.matrix,k(We(u[v]*m,t.combinations[v],e.dimensions,e.space.metric),i.current.matrix)));if(p&&c({matrix:!0}),d){const v=re(i.current.zoom)/re(ne),E=re(d)/re(ne);i.current.zoom*=Ve(ne,(E-v)*U(1,m*.001*2)),H(d-i.current.zoom)<d*.001&&(i.current.zoom=d,o.current.zoom=null),p=!0,c({zoom:!0})}if(u.reduce((v,E)=>H(v)+H(E),0)===0&&o.current.zoom===null&&!e.matrix._reset){s({matrix:i.current.matrix,zoom:i.current.zoom}),a.current=null,o.current.t=null;return}p&&X(e),o.current.t=performance.now(),a.current=requestAnimationFrame(f)},[c,t.auto,t.combinations,e.dimensions,e.space]);g.useEffect(()=>{o.current.speed.reduce((N,j)=>H(N)+H(j),0)>0&&(a.current=requestAnimationFrame(f));let l=null,u=null;const d=[],m=()=>{const N=i.current.pointers.values(),j=N.next().value,S=N.next().value;return bn(j[0]-S[0],j[1]-S[1])},p=N=>{N.button!==0||N.target.tagName!=="CANVAS"||(t.auto&&(u=performance.now(),i.current.pointers.size===1?(o.current.pause.delete(t.shift*2),o.current.pause.delete(t.shift*2+1)):(o.current.pause.add(t.shift*2),o.current.pause.add(t.shift*2+1))),i.current.pointers.set(N.pointerId,[N.clientX,N.clientY]))},v=N=>{if(!i.current.pointers.has(N.pointerId))return;const j=i.current.pointers.get(N.pointerId),S=[-(N.clientX-j[0])/window.innerHeight,-(N.clientY-j[1])/window.innerHeight].map(M=>xn(U(M,.01),-.01));if(i.current.pointers.set(N.pointerId,[N.clientX,N.clientY]),i.current.pointers.size>1){if(l===null){l=m(),o.current.zoom=i.current.zoom;return}const M=m();i.current.zoom*=l/M,l=M,le(e,i.current.zoom),o.current.zoom=null,X(e);return}let R=t.shift;!R&&N.shiftKey?R=1:!R&&N.altKey?R=2:!R&&N.ctrKey?R=3:!R&&N.metaKey&&(R=4);const P=rn([V*S[0],V*S[1]],R,t,i.current.matrix,e.dimensions,e.space.metric);if(t.auto){const M=performance.now()-u;u=performance.now(),d.push([S[0]*1.5/M,S[1]*1.5/M]),d.length>Ot&&d.shift();const Z=d.reduce((z,_)=>[z[0]+_[0],z[1]+_[1]],[0,0]);for(let z=0;z<2;z++)for(let _=0;_<P[z].length;_++)o.current.speed[P[z][_]]=Z[z]/d.length;a.current||(a.current=requestAnimationFrame(f))}c({matrix:!0})},E=N=>{i.current.pointers.clear(),t.auto&&(d.length=0,u=null,o.current.pause.delete(t.shift*2),o.current.pause.delete(t.shift*2+1)),l=null};document.addEventListener("pointerdown",p),document.addEventListener("pointermove",v),document.addEventListener("pointerup",E);const I=o.current;return()=>{document.removeEventListener("pointerdown",p),document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",E),a.current&&(cancelAnimationFrame(a.current),a.current=null,I.t=null)}},[t,e.dimensions,e.space,e.camera,f,c]),g.useEffect(()=>{const l=u=>{u.target===document.body&&At(u,t,i.current.matrix,e.dimensions,e.space.metric,n)&&(c({matrix:!0}),X(e))};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[c,t,e.space,e.dimensions,n]),g.useEffect(()=>{const l=u=>{if(u.target.tagName!=="CANVAS")return;const d=o.current.zoom===null?i.current.zoom:o.current.zoom;o.current.zoom=d*(u.deltaY<0?ne:1/ne),a.current||(a.current=requestAnimationFrame(f))};return document.addEventListener("wheel",l),()=>{document.removeEventListener("wheel",l)}},[f]),g.useEffect(()=>{const l=u=>{if(u.button!==0||u.target.tagName!=="CANVAS")return;const d=o.current.zoom===null?i.current.zoom:o.current.zoom,m=d<.5?5:d<2?.25:1;o.current.zoom=m,a.current||(a.current=requestAnimationFrame(f))};return document.addEventListener("dblclick",l),()=>{document.removeEventListener("dblclick",l)}},[f])};function Rt({runtime:e,rotations:t,updateRotations:n,updateParams:s}){return Tt(e,t,n,s),null}const Ft=(e,t)=>{g.useEffect(()=>{t(n=>(le(n,n.zoom),n))},[e.zoom,t]),g.useEffect(()=>{t(n=>(le(n),n))},[e.fov3,e.camera,t]),g.useEffect(()=>{t(n=>(n.meshes.updateGeometries(n),n))},[e.space,e.curve,e.segments,e.detail,t]),g.useEffect(()=>{t(n=>(n.meshes.changeArity(n.dimensions),n))},[e.dimensions,t]),g.useEffect(()=>{t(n=>(It(n),nn(n),n))},[e.ambiance,e.msaa,e.msaaSamples,t]),g.useEffect(()=>{t(n=>(n.meshes.recompilePrograms(n),n))},[e.ambiance,e.curve,e.dimensions,e.easing,e.detail,e.segments,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{t(n=>(n.meshes.updateUniforms(n),n))},[e.ambiance,e.curve,e.dimensions,e.easing,e.sizeVertex,e.sizeEdge,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.detail,e.matrix,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.segments,e.space,t]),g.useEffect(()=>{const n=new ResizeObserver(()=>{X(e)});return n.observe(e.gl.canvas,{box:"content-box"}),()=>n.disconnect()},[e.gl.canvas]),g.useEffect(()=>{t(n=>(X(n),n))},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.easing,e.edge,e.error,e.face,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.iteration,e.detail,e.matrix,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.ranges,e.segments,e.space,e.stellation,e.subsampling,e.sizeVertex,e.sizeEdge,e.polytope,e.vertex,e.zoom])};function Ct({runtime:e,setRuntime:t}){return Ft(e,t),null}function Dt(){return new Worker(""+new URL("shape.worker-e3b3da14.js",import.meta.url).href)}const zt=(e,t)=>{g.useEffect(()=>{t(n=>{const s=An(n.coxeter,n.stellation),a=Tn(s),{vertices:o,normals:i}=Fn(a,n.centered),c=n.mirrors.every(l=>!l)?n.mirrors.map(()=>1):n.mirrors.map(l=>En(l)),f=On(ie(o,c),a.metric);return a.rootVertex=f,a.rootVertices=o,a.rootNormals=i,{...n,space:a,error:null}})},[e.dimensions,e.coxeter,e.mirrors,e.stellation,e.centered,t]),g.useEffect(()=>{t(n=>{var a;const s={...n,iteration:-1,paused:!1};return n.processing&&((a=n.shaper)==null||a.terminate(),s.shaper=new Dt),s})},[e.space,e.ambiance,e.drawVertex,e.drawEdge,e.drawFace,e.hidden,t]),g.useEffect(()=>{t(n=>{const s={...n};return n.polytope.size>n.limit&&(s.paused=!0),s})},[e.polytope.size,e.limit,t]),g.useEffect(()=>{t(n=>({...n,paused:!1}))},[e.limit,t]),g.useEffect(()=>{t(n=>!n.iteration<0?n:(n.shaper.postMessage({first:n.iteration===-1,space:n.space,dimensions:n.dimensions,coxeter:n.coxeter,stellation:n.stellation,mirrors:n.mirrors,ambiance:n.ambiance,draw:{vertex:n.drawVertex,edge:n.drawEdge,face:n.drawFace},batch:n.batch,hidden:n.hidden}),{...n,iteration:n.iteration===-1?0:n.iteration,processing:!0}))},[e.iteration,e.limit,e.ambiance,e.drawVertex,e.drawEdge,e.drawFace,e.shaper,e.space,e.hidden,t]),g.useEffect(()=>{t(n=>({...n,iteration:n.paused?n.iteration:n.iteration+1}))},[e.paused,t]),g.useEffect(()=>{if(!e.shaper)return;const n=({data:s})=>{s.error?console.error(s.error):t(a=>{for(let o=0;o<s.infos.length;o++){const i=a.meshes[a.meshes.meshes[o]],c=s.infos[o];if(!c){i.count=0;continue}i.count=c.start+c.size,i.instances<i.count&&i.extendAttributes(i.count),i.attributes.color.update(s.data[o][0],c.start,c.size);for(let f=0;f<i.varying.length;f++){const l=i.varying[f];i.attributes[l].update(s.data[o][f+1],c.start,c.size)}}return{...a,processing:!s.polytope.done,iteration:a.paused||s.polytope.done?a.iteration:a.iteration+1,polytope:s.polytope}})};return e.shaper.addEventListener("message",n),()=>{e.shaper.removeEventListener("message",n)}},[e.shaper,e.paused,t])};function Mt({runtime:e,setRuntime:t}){return zt(e,t),null}function Pt({runtime:e,setRuntime:t,rotations:n,updateRotations:s,updateParams:a}){var i,c,f,l;window.rt=e,window.ro=n;const o=g.useCallback(u=>d=>{t(m=>({...m,error:{[u]:d.message}}))},[t]);return g.useEffect(()=>()=>{if(e.space&&e.space.curvature!==null){const u=q(e.dimensions);u._reset=!0,a({matrix:u})}},[(i=e.space)==null?void 0:i.curvature]),r.jsxs(r.Fragment,{children:[r.jsx(me,{error:(c=e.error)==null?void 0:c.process,onError:o("process"),children:r.jsx(Mt,{runtime:e,setRuntime:t})}),e.space?r.jsxs(r.Fragment,{children:[r.jsx(me,{error:(f=e.error)==null?void 0:f.render,onError:o("render"),children:r.jsx(Ct,{runtime:e,setRuntime:t})}),r.jsx(me,{error:(l=e.error)==null?void 0:l.interact,onError:o("interact"),children:r.jsx(Rt,{runtime:e,rotations:n,updateRotations:s,updateParams:a})})]}):null]})}const _t="modulepreload",Lt=function(e,t){return new URL(e,t).href},ze={},kt=function(t,n,s){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Lt(o,s),o in ze)return;ze[o]=!0;const i=o.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!s)for(let u=a.length-1;u>=0;u--){const d=a[u];if(d.href===o&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":_t,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},Ut=r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",strokeWidth:"3",children:[r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m31.376 13.781l-2.673-7.659c-1.554-4.453-7.852-4.453-9.406 0l-4.56 13.067c-.922 2.644 1.04 5.408 3.841 5.408H24"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m15.993 14.24l-8.11.175c-4.716.102-6.663 6.092-2.907 8.946l11.018 8.374c2.23 1.695 5.465.682 6.33-1.982L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m11.675 29.012l-2.34 7.767c-1.36 4.517 3.736 8.219 7.611 5.53l11.369-7.892c2.3-1.597 2.337-4.987.071-6.633L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m24.39 37.683l6.664 4.625c3.875 2.69 8.971-1.012 7.61-5.53l-3.992-13.25c-.807-2.681-4.02-3.764-6.286-2.118L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m36.566 28.27l6.458-4.908c3.756-2.855 1.81-8.845-2.907-8.947l-13.836-.298c-2.8-.06-4.822 2.66-3.956 5.324L24 24.597"})]}),Bt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("g",{id:"feTarget0",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:r.jsx("g",{id:"feTarget1",fill:"currentColor",fillRule:"nonzero",children:r.jsx("path",{id:"feTarget2",d:"M19.938 13A8.004 8.004 0 0 1 13 19.938V22h-2v-2.062A8.004 8.004 0 0 1 4.062 13H2v-2h2.062A8.004 8.004 0 0 1 11 4.062V2h2v2.062A8.004 8.004 0 0 1 19.938 11H22v2h-2.062ZM12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"})})})}),Ht=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"})}),Vt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20.777a8.942 8.942 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a8.961 8.961 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A8.954 8.954 0 0 1 10 3.223"})}),Gt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",children:r.jsxs("g",{fill:"none",stroke:"currentColor",children:[r.jsx("path",{strokeLinecap:"round",d:"M13.326 8.5a6.5 6.5 0 1 1-.558-4.5"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 2v2.5H11"})]})}),qt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:r.jsx("path",{fill:"currentColor",d:"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"})}),$t=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 6v1h.75A3.25 3.25 0 0 1 20 10.25v7.5A3.25 3.25 0 0 1 16.75 21h-9.5A3.25 3.25 0 0 1 4 17.75v-7.5A3.25 3.25 0 0 1 7.25 7H8V6a4 4 0 1 1 8 0ZM9.5 6v1h5V6a2.5 2.5 0 0 0-5 0Zm2.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"})}),Jt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 5a2.5 2.5 0 0 1 5 0v.25a.75.75 0 0 0 1.5 0V5a4 4 0 0 0-8 0v2H7.25A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21h9.5A3.25 3.25 0 0 0 20 17.75v-7.5A3.25 3.25 0 0 0 16.75 7H16V5Zm-4 10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"})}),Kt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})}),Wt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),Xt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),Yt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),Zt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),Qt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),er=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M14 19V5h4v14zm-8 0V5h4v14z"})}),nr=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"})}),tr=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"})}),rr=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"})});function ar({allowNull:e,name:t,value:n,onChange:s,...a}){const o=g.useCallback(c=>{let{name:f,checked:l}=c.target,u;e?u=n===!1?!0:n?null:!1:u=l,s(f,u)},[e,s,n]),i=g.useRef(null);return g.useLayoutEffect(()=>{e&&i.current&&(n===null?i.current.indeterminate=!0:i.current.indeterminate=!1)},[n,e]),r.jsx("input",{type:"checkbox",ref:i,name:t,checked:n||!1,onChange:o})}function y({type:e,subtype:t,level:n,dimensions:s}){return r.jsxs("span",{className:"space",children:[e===null||e==="indefinite"?"𝕏":e==="affine"?"𝔼":e==="finite"?"𝕊":"ℍ",s?r.jsx("sup",{children:s-1}):null,e==="hyperbolic"?r.jsxs("sub",{children:[{compact:" ",paracompact:"*",lorentzian:"L",superhyperbolic:"**"}[t],n]}):null]})}const or=(...e)=>{if(Array.isArray(e[0]))return{coxeter:e,dimensions:e.length,extended:!0};const t=e.length+1;return{coxeter:new Array(t).fill().map((s,a)=>new Array(t).fill().map((o,i)=>a===i?1:a===i+1||i===a+1?e[U(a,i)]:2)),dimensions:t}},sr=(...e)=>{const t=e.length+1;return{stellation:new Array(t).fill().map((s,a)=>new Array(t).fill().map((o,i)=>a===i?1:a===i+1||i===a+1?e[U(a,i)]:1))}},h=(e,t,n,s)=>{const a=or(...e),{dimensions:o}=a,i={...Ae,...a,detail:o>4?"medium":"high",drawVertex:o<=3,drawFace:o<=4,curve:o>3,ambiance:"colorful",segments:32,matrix:q(o),zoom:o<=3?2:o>4?3:5,centered:!0,...Object.fromEntries(L(3,o+1).map(c=>[`projection${c}`,Ne(c,o)])),...s||{}};return t?i.mirrors=t:i.mirrors=new Array(o).fill().map((c,f)=>f===0?1:0),n?i.stellation=sr(...n).stellation:i.stellation=new Array(o).fill().map((c,f)=>new Array(o).fill(1)),i},T=e=>({...e,subforms:Object.entries(ir(e.params.dimensions)).map(([t,n])=>({name:`${t} ${e.name}`,params:{...e.params,mirrors:n}}))}),w=(e,t,n,s)=>({...h(e,t,n),ambiance:"plain",drawVertex:!1,curve:!0,detail:"medium",zoom:1,segments:32,...s}),A=(e,t,n,s)=>({...h(e,t,n),ambiance:"neon",drawFace:!1,drawVertex:!1,centered:!1,sizeEdge:15,segments:16,zoom:2,...s}),b=(e,t,n,s)=>{const a=h(e,t,n),o=a.matrix.length;return{...a,ambiance:"neon",detail:"medium",drawFace:!1,drawVertex:!1,curve:!0,centered:!1,sizeEdge:o>4?15:25,segments:16,zoom:1.5,...s}},ir=e=>{if(e===4)return{Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1]};if(e===5)return{Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1]};if(e===6)return{Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(e===7)return{Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(e===8)return{Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(e===9)return{Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},J=[{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:4})," Tesseract"]}),params:h([4,3,3],[1,0,0,0],null,{drawVertex:!0,sizeVertex:40,drawFace:!0,curve:!0,ambiance:"neon",zoom:4.2,segments:64})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",dimensions:3})," 7-3-2 tiling"]}),params:w([7,3],[1,0,0],null,{drawVertex:!1,drawFace:!0,curve:!0,ambiance:"neon"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:3})," Ideal triangles"]}),params:w([[1,0,0],[0,1,0],[0,0,1]],[0,0,0],null,{drawVertex:!1,drawFace:!0,curve:!0,segments:64,easing:"quintic",ambiance:"neon",centered:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",dimensions:4})," Inverted honeycomb"]}),params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{projection4:"inverted",ambiance:"disco",zoom:3,segments:32})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:8})," E6 (1",r.jsx("sub",{children:"22"}),")"]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0],null,{sizeVertex:25,sizeEdge:15,ambiance:"colorful",drawVertex:!0,projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:8})," E8 (4",r.jsx("sub",{children:"21"}),")"]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1],null,{sizeVertex:20,sizeEdge:6,curve:!1,ambiance:"neon",drawVertex:!0,detail:"low",projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",projection7:"orthographic",projection8:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal tetrahedron"]}),params:w([3,3,6],[1,0,0,""],null,{drawVertex:!1,drawFace:!0,curve:!0,centered:!0,segments:64,detail:"high",easing:"quartic",ambiance:"pure"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Horoball"]}),params:w([6,3,4],[1,0,0,""],null,{drawVertex:!1,drawFace:!0,curve:!0,centered:!1,ambiance:"colorful"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",dimensions:4})," 5-3-4 honeycomb"]}),params:b([5,3,4],[1,0,0,0],null,{zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"lorentzian",level:2,dimensions:4})," ","7-3-3 paracompact honeycomb"]}),params:b([7,3,3],[1,0,0,0],null,{zoom:1.5,drawFace:!0,drawVertex:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Pentahedron"]}),params:w([5,3,6],[1,0,0,""],null,{drawVertex:!1,drawFace:!0,curve:!0,centered:!0,detail:"high",segments:32,easing:"quartic",ambiance:"pure",zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:4})," Flat Torus"]}),params:h([32,2,32],[1,0,0,1],null,{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",zoom:3,sizeEdge:10})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:5})," Tesseract stack"]}),params:h([[1,2,2,2,0],[2,1,2,2,2],[2,2,1,2,2],[2,2,2,1,2],[0,2,2,2,1]],[1,1,1,1,0],null,{drawVertex:!1,drawFace:!0,ambiance:"neon",sizeEdge:20,projection4:"sterographic"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"superhyperbolic",dimensions:4})," ","Ultrahyperbolic surface (Anti-de Sitter Ads3)"]}),params:h([-1,2,-1],[1,0,0,1],null,{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,sizeEdge:15,zoom:1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"superhyperbolic",dimensions:5})," ","Ultrahyperbolic honeycomb (Anti-de Sitter Ads4)"]}),params:h([-1,3,3,-1],[1,0,0,0,1],null,{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,zoom:2})},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite"})," Spherical space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Tetrahedron",params:h([3,3]),subforms:[{name:"Truncated Tetrahedron",params:h([3,3],[1,1,0])}]},{name:"Cube",params:h([4,3]),subforms:[{name:"Cuboctahedron",params:h([4,3],[0,1,0])},{name:"Truncated Cube",params:h([4,3],[1,1,0])},{name:"Rhombicuboctahedron",params:h([4,3],[1,0,1])},{name:"Truncated Octahedron",params:h([3,4],[1,1,0])},{name:"Truncated Cuboctahedron",params:h([4,3],[1,1,1])},{name:"Octahedron",params:h([3,4])}]},{name:"Dodecahedron",params:h([5,3]),subforms:[{name:"Icosidodecahedron",params:h([5,3],[0,1,0])},{name:"Truncate Dodecahedron",params:h([5,3],[1,1,0])},{name:"Rhombicosidodecahedron",params:h([5,3],[1,0,1])},{name:"Truncate Icosahedron",params:h([3,5],[1,1,0])},{name:"Truncated Icosidodecahedron",params:h([5,3],[1,1,1])},{name:"Icosahedron",params:h([3,5])}]},{name:"Snub Cube",params:h([4,3],["s","s","s"])},{name:"Snub Dodecahedron",params:h([5,3],["s","s","s"])},{name:"Great Dodecahedron",params:h([5,5],[1,0,0],[1,2])},{name:"Great Icosahedron",params:h([3,5],[1,0,0],[1,2])},{name:"Small Stellated Dodecahedron",params:h([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:h([5,3],[1,0,0],[2,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:4})," Polychora"]})},T({name:"5-cell",params:h([3,3,3])}),T({name:"8-cell",params:h([4,3,3])}),T({name:"16-cell",params:h([3,3,4])}),T({name:"24-cell",params:h([3,4,3])}),T({name:"120-cell",params:h([5,3,3])}),T({name:"600-cell",params:h([3,3,5])}),{name:"Snub 24-cell",params:h([3,4,3],["s","s",0,0])},{name:"Icosahedral 120-cell",params:h([3,5,5],[1,0,0,0],[1,1,2],{curve:!1}),subforms:[{name:"Small stellated 120-cell",params:h([3,5,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Great 120-cell",params:h([5,5,5],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Grand 120-cell",params:h([5,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{name:"Great stellated 120-cell",params:h([5,3,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Grand stellated 120-cell",params:h([5,5,5],[1,0,0,0],[2,1,2],{curve:!1})},{name:"Great grand 120-cell",params:h([5,5,3],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Great icosahedral 120-cell",params:h([5,5,3],[0,0,0,1],[1,2,1],{curve:!1})},{name:"Great grand stellated 120-cell",params:h([5,3,3],[1,0,0,0],[2,1,1],{curve:!1})}]},{name:"Grand 600-cell",params:h([3,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:5})," Polytera"]})},T({name:"5-simplex",params:h([3,3,3,3])}),T({name:"5-cube",params:h([4,3,3,3])}),T({name:"5-orthoplex",params:h([3,3,3,4])}),T({name:"5-demicube",params:h([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]])}),{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:6})," Polypeta"]})},T({name:"6-simplex",params:h([3,3,3,3,3])}),T({name:"6-cube",params:h([4,3,3,3,3])}),T({name:"6-orthoplex",params:h([3,3,3,3,4])}),T({name:"6-demicube",params:h([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"22"})]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:7})," Polyexa"]})},T({name:"7-simplex",params:h([3,3,3,3,3,3])}),T({name:"7-cube",params:h([4,3,3,3,3,3])}),T({name:"7-orthoplex",params:h([3,3,3,3,3,4])}),T({name:"7-demicube",params:h([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"31"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"32"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:8})," Polyzetta"]})},T({name:"8-simplex",params:h([3,3,3,3,3,3,3])}),T({name:"8-cube",params:h([4,3,3,3,3,3,3])}),T({name:"8-orthoplex",params:h([3,3,3,3,3,3,4])}),T({name:"8-demicube",params:h([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"42"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"41"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["4",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:9}),"Polyyotta"]})},T({name:"9-simplex",params:h([3,3,3,3,3,3,3,3])}),T({name:"9-cube",params:h([4,3,3,3,3,3,3,3])}),T({name:"9-orthoplex",params:h([3,3,3,3,3,3,3,4])}),T({name:"9-demicube",params:h([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]])}),{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine"})," Euclidean space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:h([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:h([4,4],[1,0,0])},{name:"Hexagonal",params:h([6,3],[1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:A([4,3,4],[1,0,0,0])},{name:"Octet",params:A([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter cubic",params:A([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:A([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:A([3,3,4,3],[1,0,0,0,0],null,{})},{name:"24-cellic",params:A([3,4,3,3],[1,0,0,0,0],null,{})},{name:"4-simpletic",params:A([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0])},{name:"Quarter tesseractic",params:A([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:6})," 5-Honeycombs"]})},{name:"5-simplex",params:A([[1,3,2,2,2,3],[3,1,3,2,2,2],[2,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[3,2,2,2,3,1]],[1,0,0,0,0,0])},{name:"5-cubic",params:A([4,3,3,3,4],[1,0,0,0,0,0])},{name:"5-demicubic",params:A([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,4],[2,2,2,2,4,1]],[1,0,0,0,0,0])},{name:"Quarter 5-cubic",params:A([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,3],[2,2,2,3,1,2],[2,2,2,3,2,1]],[1,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:7})," 6-Honeycombs"]})},{name:"6-simplex",params:A([[1,3,2,2,2,2,3],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[3,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:"6-cubic",params:A([4,3,3,3,3,4],[1,0,0,0,0,0,0])},{name:"6-demicubic",params:A([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,4],[2,2,2,2,2,4,1]],[1,0,0,0,0,0,0])},{name:"Quarter 6-cubic",params:A([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,3],[2,2,2,2,3,1,2],[2,2,2,2,3,2,1]],[1,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"22"})]}),params:A([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,3,2],[2,2,3,1,3,2,2],[2,2,2,3,1,2,2],[2,2,3,2,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:8})," 7-Honeycombs"]})},{name:"7-simplex",params:A([[1,3,2,2,2,2,2,3],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[3,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:"7-cubic",params:A([4,3,3,3,3,3,4],[1,0,0,0,0,0,0,0])},{name:"7-demicubic",params:A([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,4],[2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0])},{name:"Quarter 7-cubic",params:A([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,3,3,1,3,2,2],[2,2,2,2,3,1,3,3],[2,2,2,2,2,3,1,2],[2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"33"})]}),params:A([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,1,0,0,0])},{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"31"})]}),params:A([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:9})," 8-Honeycombs"]})},{name:"8-simplex",params:A([[1,3,2,2,2,2,2,2,3],[3,1,3,2,2,2,2,2,2],[2,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[3,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:"8-cubic",params:A([4,3,3,3,3,3,3,4],[1,0,0,0,0,0,0,0,0])},{name:"8-demicubic",params:A([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,4],[2,2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0,0])},{name:"Quarter 8-cubic",params:A([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,3],[2,2,2,2,2,2,3,1,2],[2,2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"52"})]}),params:A([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"51"})]}),params:A([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["5",r.jsx("sub",{children:"21"})]}),params:A([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,0,1])},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic"})," Hyperbolic space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",dimensions:3})," Tilings"]})},{name:"Order-7 triangular",params:w([3,7],[1,0,0])},{name:"Order-8 triangular",params:w([3,8],[1,0,0])},{name:"Infinite Order triangular",params:w([3,0],[1,0,0],null,{easing:"quintic",detail:"high"})},{name:"Order-5 square",params:w([4,5],[1,0,0])},{name:"Order-6 square",params:w([4,6],[1,0,0])},{name:"Order-7 square",params:w([4,7],[1,0,0])},{name:"Order-8 square",params:w([4,8],[1,0,0])},{name:"Infinite Order square",params:w([4,0],[1,0,0])},{name:"Order-4 pentagonal",params:w([5,4],[1,0,0])},{name:"Order-5 pentagonal",params:w([5,5],[1,0,0])},{name:"Order-6 pentagonal",params:w([5,6],[1,0,0])},{name:"Order-7 pentagonal",params:w([5,7],[1,0,0])},{name:"Order-8 pentagonal",params:w([5,8],[1,0,0])},{name:"Infinite Order pentagonal",params:w([5,0],[1,0,0])},{name:"Order-4 hexagonal",params:w([6,4],[1,0,0])},{name:"Order-5 hexagonal",params:w([6,5],[1,0,0])},{name:"Order-6 hexagonal",params:w([6,6],[1,0,0])},{name:"Order-7 hexagonal",params:w([6,7],[1,0,0])},{name:"Order-8 hexagonal",params:w([6,8],[1,0,0])},{name:"Infinite Order hexagonal",params:w([6,0],[1,0,0])},{name:"Order-3 heptagonal",params:w([7,3],[1,0,0])},{name:"Order-4 heptagonal",params:w([7,4],[1,0,0])},{name:"Order-5 heptagonal",params:w([7,5],[1,0,0])},{name:"Order-6 heptagonal",params:w([7,6],[1,0,0])},{name:"Order-7 heptagonal",params:w([7,7],[1,0,0])},{name:"Order-8 heptagonal",params:w([7,8],[1,0,0])},{name:"Infinite Order heptagonal",params:w([7,0],[1,0,0])},{name:"Order-3 octagonal",params:w([8,3],[1,0,0])},{name:"Order-4 octagonal",params:w([8,4],[1,0,0])},{name:"Order-5 octagonal",params:w([8,5],[1,0,0])},{name:"Order-6 octagonal",params:w([8,6],[1,0,0])},{name:"Order-7 octagonal",params:w([8,7],[1,0,0])},{name:"Order-8 octagonal",params:w([8,8],[1,0,0])},{name:"Infinite Order octagonal",params:w([8,0],[1,0,0])},{name:"Order-3 apeirogonal",params:w([0,3],[1,0,0])},{name:"Order-4 apeirogonal",params:w([0,4],[1,0,0])},{name:"Order-5 apeirogonal",params:w([0,5],[1,0,0])},{name:"Order-6 apeirogonal",params:w([0,6],[1,0,0])},{name:"Order-7 apeirogonal",params:w([0,7],[1,0,0])},{name:"Order-8 apeirogonal",params:w([0,8],[1,0,0])},{name:"Infinite Order apeirogonal",params:w([0,0],[1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"compact",dimensions:4})," Compact Hyperbolic Honeycombs"]})},{name:"Icosahedral",params:b([3,5,3],[1,0,0,0])},{name:"Order-4 dodecahedral",params:b([5,3,4],[1,0,0,0])},{name:"Order-5 dodecahedral",params:b([5,3,5],[1,0,0,0],null,{})},{name:"Alternated Order-5 cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral cubic",params:b([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],null,{})},{name:"Tetrahedral dodecahedral",params:b([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],null,{})},{name:"Cubic octahedral",params:b([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],null,{})},{name:"Octahedral Dodcahedral",params:b([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],null,{})},{name:"Octahedral Icosahedral",params:b([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],null,{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Paracompact Hyperbolic Honeycombs"]})},{name:"Triangular",params:b([3,6,3],[1,0,0,0],null,{easing:"quintic",segments:32})},{name:"Hexagonal",params:b([6,3,3],[1,0,0,0],null,{})},{name:"Order-6 tetrahedral",params:b([3,3,6],[1,0,0,0],null,{easing:"quintic",segments:32})},{name:"Alternated Order-6 cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],null,{easing:"quintic",segments:32})},{name:"Order-5 hexagonal",params:b([6,3,5],[1,0,0,0],null,{})},{name:"Alternated Order-5 hexagonal",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{})},{name:"Order-6 hexagonal",params:b([6,3,6],[0,0,0,1],null,{easing:"quintic",segments:32})},{name:"Square",params:b([4,4,3],[1,0,0,0],null,{})},{name:"Alternated square",params:b([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],null,{})},{name:"Order-4 square",params:b([4,4,4],[0,1,0,0],null,{})},{name:"Tetrahedral square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],null,{})},{name:"Cubic square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],null,{})},{name:"Quarter order square",params:b([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],null,{easing:"quintic",segments:32})},{name:"Tetrahedral Hexagonal",params:b([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],null,{})},{name:"Octahedral Hexagonal",params:b([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],null,{})},{name:"Icosahedral Hexagonal",params:b([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],null,{})},{name:"Hexagonal Triangular",params:b([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[0,0,0,1],null,{easing:"quintic",segments:32})},{name:"Alternated Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],null,{})},{name:"Alternated Order-4 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],null,{})},{name:"Alternated Order-5 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{})},{name:"Runcic Order-6 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],null,{})},{name:"Quarter Order-4 hexagonal",params:b([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],null,{})},{name:"Hexagonal",params:b([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],null,{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"lorentzian",level:2,dimensions:4})," ","Level-2 Lorentzian Hyperbolic Honeycombs"]})},{name:"3-3-7",params:b([3,3,7],[1,0,0,0],null,{segments:64})},{name:"3-4-7",params:b([3,3,7],[1,0,0,0],null,{segments:64})},{name:"3-5-7",params:b([3,5,7],[1,0,0,0],null,{segments:64})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",dimensions:5})," Compact Hyperbolic 4-Honeycombs"]})},{name:"Order-5 5-cell",params:b([3,3,3,5],[1,0,0,0,0])},{name:"120-cell",params:b([5,3,3,3],[1,0,0,0,0])},{name:"Order-5 tesseratic",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-4 120-cell",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-5 120-cell",params:b([5,3,3,5],[1,0,0,0,0])},{name:"Small stellated 120-cell",params:b([5,5,3,3],[1,0,0,0,0],[2,1,1,1])},{name:"Pentagrammic-order 600-cell",params:b([3,3,5,5],[1,0,0,0,0],[1,1,1,2])},{name:"Order-5 icosahedral 120-cell",params:b([3,5,5,5],[1,0,0,0,0],[1,1,2,1])},{name:"Great 120-cell",params:b([5,5,5,3],[1,0,0,0,0],[1,2,1,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:5})," ","Paracompact Hyperbolic 4-Honeycombs"]})},{name:"Order-4 24-cell",params:b([3,4,3,4],[1,0,0,0,0],null,{easing:"quintic",segments:32})},{name:"Cubic honeycomb",params:b([4,3,4,3],[1,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:6})," ","Paracompact Hyperbolic 5-Honeycombs"]})},{name:"5-orthoplex",params:b([3,3,3,4,3],[1,0,0,0,0,0],null,{easing:"quintic",segments:32})},{name:"24-cell honeycomb",params:b([3,4,3,3,3],[1,0,0,0,0,0])},{name:"16-cell honeycomb",params:b([3,3,4,3,3],[1,0,0,0,0,0],null,{easing:"quintic",segments:32})},{name:"Order-4 24-cell honeycomb",params:b([3,4,3,3,4],[1,0,0,0,0,0],null,{easing:"quintic",segments:32})},{name:"Tesseratic honeycomb",params:b([4,3,3,4,3],[1,0,0,0,0,0],null,{easing:"quintic",segments:32})}],Oe=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(Oe).join("");if(typeof e=="object"&&e)return Oe(e.props.children)},Me=(e,t)=>typeof e=="string"?Oe(e).toLowerCase().includes(t.toLowerCase()):!1,cr=g.memo(function e({name:t,index:n,params:s,search:a,subforms:o=[],sub:i=!1,onPreset:c}){const[f,l]=g.useState(!0),[u,d]=g.useState(!1);return g.useEffect(()=>{if(!a){l(!0),d(!1);return}if(Me(t,a)){l(!0);return}if(o.length&&o.some(({name:m})=>Me(m,a))){l(!0),d(!0);return}l(!1),d(!1)},[t,a,o]),f?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`preset${i?" sub":""}`,onClick:()=>c(s,n),children:[r.jsxs("div",{className:`preset-header preset-name-${o.length?"button":"only"}`,children:[o.length?r.jsx("button",{className:`preset-toggle ${u?"open":"closed"}`,onClick:m=>{m.stopPropagation(),d(!u)},children:u?"-":"+"}):null,r.jsx("span",{className:"preset-name",children:t})]}),r.jsx($e,{coxeter:s.coxeter,mirrors:s.mirrors,stellation:s.stellation})]}),u&&o.map((m,p)=>r.jsx(e,{...m,sub:!0,search:a,onPreset:c},p))]}):null});function lr({open:e,onPreset:t,onExportImage:n,closePresets:s}){const[a,o]=g.useState(""),[i,c]=g.useState(""),f=g.useCallback(l=>{c(l.target.value),In(o(l.target.value),50)},[]);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`presets-overlay ${e?"shown":"hidden"}`,onClick:s}),r.jsx("div",{className:`presets ${e?"shown":"hidden"}`,children:r.jsxs("div",{className:"presets-modal",children:[r.jsxs("div",{className:"presets-header",children:[r.jsxs("div",{className:"presets-search",children:[r.jsx("input",{type:"text",placeholder:"Search",value:i,onChange:f}),r.jsx("button",{className:"presets-clear",onClick:()=>{o(""),c("")},children:Xt})]}),r.jsxs("div",{className:"presets-actions",children:[r.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:Yt}),r.jsx("button",{className:"presets-action",onClick:n,children:Zt}),r.jsx("button",{className:"presets-action",onClick:s,children:Qt})]})]}),r.jsx("div",{className:"presets-list",children:J.map(({type:l,content:u,name:d,params:m,subforms:p},v)=>r.jsx(g.Fragment,{children:l==="title"?r.jsx("h2",{children:u}):l==="group"?r.jsx("h4",{children:u}):r.jsx(cr,{name:d,index:v,params:m,search:a,subforms:p,onPreset:t})},v))})]})})]})}const Pe=g.memo(function({rotations:t,space:n,axis:s}){if(!n)return null;const a=n.gram.length,o=t.shift*2+s;if(o>=t.combinations.length)return null;let i=t.combinations[o];const c=i.some(u=>u<0)?"parabolic":i.some(u=>n.eigens.values[u]<0)?"hyperbolic":i.some(u=>n.eigens.values[u]===0)?"translation":"spheric",f=_n.slice(0,a).split(""),l=c==="parabolic"?i.map(u=>f[H(u)]).join("->"):f.filter((u,d)=>!i.includes(d));return r.jsxs("aside",{className:`${s?"y":"x"}-rotation`,children:[l,c==="parabolic"?r.jsx("sup",{children:"∞"}):c==="hyperbolic"?r.jsx("sup",{children:"†"}):c==="translation"?r.jsx("sup",{children:"0"}):""]})}),ur=e=>e<4?[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7 2m12 9H5v2h14z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})})][e]:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9"}),r.jsx("text",{x:"12",y:"13.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",children:e})]});function fr({runtime:e,setRuntime:t,showUI:n,updateParams:s}){const a=g.useCallback(()=>{e.paused&&e.polytope.size>e.limit&&s({limit:e.limit+e.start}),t(l=>({...l,paused:!l.paused}))},[e.paused,e.polytope.size,e.limit,e.start,t,s]),o=g.useCallback(l=>{const d=l.target.closest("button").dataset.key.split(","),m=!d.some(v=>e.hidden.includes(v)),p=e.hidden.filter(v=>!d.includes(v));s({hidden:m?[...p,...d]:p})},[e.hidden,s]),i=e.polytope.every(l=>l.detail.length<2),c=l=>isFinite(l)?l.toLocaleString():"∞";if(n==="empty")return null;const f=n==="full"?"detail":"aggregated";return r.jsxs("aside",{className:"shape",children:[e.processing?r.jsx("div",{className:"buttons",children:e.paused?r.jsx("button",{className:"iterate button",onClick:a,title:"Resume enumeration",children:nr}):r.jsx("button",{className:"iterate button",onClick:a,title:"Pause enumeration",children:er})}):null,r.jsx("div",{className:`shape-info${e.processing&&!e.paused?" shape-processing":""}${["advanced","full"].includes(n)?" shape-info-expanded":""}`,children:[...e.polytope].reverse().filter(l=>l).map(l=>r.jsxs(g.Fragment,{children:[r.jsx("div",{className:"shape-icon",style:{gridRow:`span ${l[f].length}`},children:ur(l.dimensions)}),r.jsxs("div",{className:"shape-count",style:{gridRow:`span ${l[f].length}`},children:[l.done||l.processing===void 0?null:`${l.processing} / `,c(l.count)]}),r.jsx("div",{className:l.dimensions>0&&["advanced","full"].includes(n)&&l[f].length>1?" shape-split":"",style:{gridRow:`span ${l[f].length}`}}),["advanced","full"].includes(n)?l[f].map(({count:u,coxeter:d,stellation:m,mirrors:p,key:v})=>r.jsxs(g.Fragment,{children:[r.jsx("div",{className:"shape-count shape-detail-count",title:v,children:!i&&l[f].length>1?c(u):null}),l.dimensions>0?r.jsxs("div",{children:[[1,2].includes(l.dimensions)?r.jsx("button",{className:"shape-hidden button","data-key":v,title:v,onClick:o,children:v.split(",").some(E=>e.hidden.includes(E))?rr:tr}):null,r.jsx("button",{className:"shape-detail-button",disabled:l.dimensions<2,onClick:()=>s({coxeter:d,stellation:m,mirrors:p,dimensions:l.dimensions}),children:r.jsx($e,{coxeter:d,stellation:m,mirrors:p})})]}):null]},v)):null]},`shape-${l.dimensions}`))})]})}const dr=()=>{try{return localStorage.getItem("showUI")||"simple"}catch(e){return console.error(e),"simple"}};function mr({runtime:e,params:t,rotations:n,setRuntime:s,updateParams:a,updateRotations:o}){const[i,c]=g.useState(dr),[f,l]=g.useState(!1),[u,d]=g.useState(0),m=g.useCallback(()=>{l(!1)},[]),p=g.useCallback(x=>{let{name:O,value:F}=x.target;a({[O]:F})},[a]),v=g.useCallback((x,O)=>{a({[x]:O})},[a]),E=g.useCallback(()=>c(x=>{const O={simple:"advanced",advanced:"full",full:"empty",empty:"simple"}[x];try{localStorage.setItem("showUI",O)}catch(F){console.error(F)}return O}),[]),I=g.useCallback((x,O)=>{a(x,!0),d(O),m()},[a,m]),N=g.useCallback(()=>{const x=q(e.dimensions);x._reset=!0,a({matrix:x,centered:!0})},[a,e.dimensions]),j=g.useCallback(()=>{const x=q(e.dimensions);x._reset=!0,a({matrix:x,centered:!1})},[a,e.dimensions]),S=g.useCallback(()=>{a(Object.fromEntries(L(3,e.dimensions+1).map(x=>[[`projection${x}`,"orthographic"],[`fov${x}`,90]]).flat()))},[a,e.dimensions]),R=g.useCallback(()=>{a(Object.fromEntries(L(3,e.dimensions+1).map(x=>[`projection${x}`,Ne(x,e.dimensions)])))},[a,e.dimensions]),P=g.useCallback(x=>{o("shift",(n.shift+1)%n.maxShift)},[n.maxShift,n.shift,o]),M=g.useCallback(x=>{o("lock",!n.lock)},[n.lock,o]),Z=g.useCallback(x=>{o("auto",n.auto==="free"?"damp":"free")},[n.auto,o]),z=g.useCallback(async()=>{m();const x=window.prompt("Select image resolution","5000x5000");if(!x||!x.includes("x")){console.error("Invalid resolution");return}const[O,F]=x.split("x").map($=>parseInt($));if(isNaN(O)||isNaN(F)){console.error("Invalid resolution");return}const Te=await(await kt(()=>import("./export-6a9c49c5.js"),["./export-6a9c49c5.js","./CoxeterDiagram-3f4deaa6.js"],import.meta.url)).makeBigPng(e,O,F);if(Te){const $=document.createElement("a");document.body.appendChild($),$.style.display="none";const sn=window.URL.createObjectURL(Te);$.href=sn,$.download=`${document.title}-${O}x${F}`,$.click()}},[m,e]),_=g.useMemo(()=>({square:L(3,e.dimensions+1).some(x=>t[`projection${x}`]!=="orthographic"),cube:L(3,e.dimensions+1).some(x=>t[`projection${x}`]!==Ne(x,e.dimensions))}),[t.projection3,t.projection4,t.projection5,t.projection6,t.projection7,t.projection8,t.projection9,e.dimensions]);return g.useEffect(()=>{const x=O=>{if(O.key==="ArrowLeft"&&O.ctrlKey&&u>0){let F=u-1;for(;J[F].type;){if(F<2)return;F--}I(J[F].params,F)}else if(O.key==="ArrowRight"&&O.ctrlKey&&u<J.length-1){let F=u+1;for(;J[F].type;){if(F>J.length-2)return;F++}I(J[F].params,F)}};return window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[I,u]),r.jsxs(r.Fragment,{children:[r.jsx(lr,{open:f,onPreset:I,onExportImage:z,closePresets:m}),r.jsxs("main",{className:e.error?"error ui":"ui",title:e.error,children:[r.jsxs("div",{className:"ui-row ui-row-top",children:[["simple","advanced","full"].includes(i)?r.jsxs("aside",{className:"controls",children:[r.jsxs("button",{className:"rotation-button button",onClick:P,title:"Rotation Mode",children:[r.jsx("div",{className:"rotation",style:{transform:`rotate(${n.shift/n.maxShift*360}deg)`},children:Gt}),r.jsx("sup",{children:n.shift+1}),r.jsx(Pe,{rotations:n,space:e.space,axis:0}),r.jsx(Pe,{rotations:n,space:e.space,axis:1})]}),r.jsxs("div",{className:"subcontrols",children:[r.jsx("button",{className:"button",onClick:M,children:n.lock?$t:Jt}),r.jsx("button",{className:"button anim-view",onClick:Z,title:"Animate rotations",children:n.auto==="free"?Ht:n.auto==="damp"?Vt:"?"}),r.jsx("button",{className:"button",onClick:N,title:"Center View",children:Bt}),r.jsx("button",{className:"button",onClick:j,title:"Coxeter View",children:Ut}),["advanced","full"].includes(i)?r.jsxs(r.Fragment,{children:[_.square&&r.jsx("button",{className:"button",onClick:S,title:"Orthographic",children:Wt}),_.cube&&r.jsx("button",{className:"button",onClick:R,title:"Stereographic",children:Kt})]}):null]})]}):null,["simple","advanced","full"].includes(i)&&r.jsx(Nn,{dimensions:t.dimensions,coxeter:t.coxeter,mirrors:t.mirrors,stellation:t.stellation,extended:t.extended,onChange:v})]}),r.jsxs("div",{className:"ui-row ui-row-middle",children:[r.jsx(fr,{runtime:e,setRuntime:s,showUI:i,updateParams:a}),["advanced","full"].includes(i)&&r.jsxs("aside",{className:"view",children:[r.jsx(W,{name:"msaaSamples",label:"MSAA",min:0,step:1,max:Ae.msaaSamples,value:t.msaaSamples,toggler:t.msaa,togglerName:"msaa",onChange:v}),r.jsx("div",{className:"projection",children:r.jsxs("label",{className:"number-label",children:[r.jsx("span",{className:"number-label",children:"Detail"}),r.jsx("select",{name:"detail",value:t.detail,onChange:p,children:Bn.map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,O=>O.toUpperCase())},x))})]})}),i==="full"&&r.jsx(W,{name:"subsampling",label:"subsampling",min:.1,step:.1,value:t.subsampling,onChange:v}),t.dimensions>=3?L(3,t.dimensions+1).map(x=>r.jsxs("div",{className:"projection",children:[i==="full"&&r.jsx(W,{label:`${x}D FOV`,name:`fov${x}`,step:1,value:t[`fov${x}`],onChange:v}),r.jsxs("label",{className:"number",children:[r.jsxs("span",{className:"number-label",children:[x,"D Projection"]}),r.jsx("select",{name:`projection${x}`,value:t[`projection${x}`],onChange:p,children:[...Ye.filter((O,F)=>{var fe;return x===3&&e.dimensions===3&&((fe=e.space)==null?void 0:fe.curvature)<0||F<8})].map(O=>r.jsx("option",{value:O,children:O.replace(/_/g," ").replace(/./,F=>F.toUpperCase())},O))})]})]},x)):null]})]}),r.jsxs("div",{className:"ui-row ui-row-bottom",children:[["simple","advanced","full"].includes(i)?r.jsx("button",{className:"preset-button button",onClick:()=>l(x=>!x),title:"Presets",children:qt}):null,["advanced","full"].includes(i)&&r.jsxs("aside",{className:"parameters",children:[r.jsx(W,{name:"segments",label:"Segments",min:1,step:1,value:t.segments,toggler:t.curve,togglerName:"curve",onChange:v}),i==="full"&&r.jsxs("label",{className:"select-label",children:["Easing",r.jsx("select",{name:"easing",value:t.easing,onChange:p,children:Ze.map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/\b./g,O=>O.toUpperCase())},x))})]}),r.jsx(W,{name:"sizeVertex",label:"Vertices",min:0,step:1,value:t.sizeVertex,toggler:t.drawVertex,togglerName:"drawVertex",onChange:v}),r.jsx(W,{name:"sizeEdge",label:"Edges",min:0,step:1,value:t.sizeEdge,toggler:t.drawEdge,togglerName:"drawEdge",onChange:v}),r.jsxs("label",{className:"boolean-label",children:["Faces",r.jsx(ar,{name:"drawFace",value:t.drawFace,onChange:v})]}),r.jsxs("label",{className:"select-label",children:["Ambiance",r.jsx("select",{name:"ambiance",value:t.ambiance,onChange:p,children:(i==="full"?Object.keys(Y):Object.entries(Y).filter(([x,{extended:O}])=>!O||x===t.ambiance).map(([x])=>x)).map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,O=>O.toUpperCase())},x))})]})]}),i==="empty"?r.jsx("div",{className:"spacer"}):null,r.jsx("button",{className:`space-button button${e.processing&&!e.paused?" processing":""}${i==="empty"?" empty":""}`,onClick:E,children:r.jsx(y,{...e.space||{},dimensions:e.dimensions})})]})]})]})}function vr({params:e,updateParams:t}){const[n,s]=g.useState({...e,space:null,shape:null,processing:!0,iteration:0,polytope:[],shaper:null,paused:!1,error:null});g.useEffect(()=>{s(c=>{try{return c.gl?c:yt(c)}catch(f){return console.error(f),{...c,error:f.message}}})},[n.gl]);const[a,o]=g.useState({shift:0,maxShift:0,combinations:[],auto:"damp",lock:!1});g.useEffect(()=>{s(c=>({...c,...we(e).params}))},[e]),g.useEffect(()=>{n.space&&o(c=>({...c,shift:0,...Dn(e.dimensions,n.space)}))},[e.dimensions,n.space]);const i=g.useCallback((c,f)=>{o(l=>({...l,[c]:f}))},[o]);return n.gl?r.jsxs(r.Fragment,{children:[r.jsx(mr,{runtime:n,params:e,rotations:a,setRuntime:s,updateRotations:i,updateParams:t}),r.jsx(Pt,{runtime:n,rotations:a,setRuntime:s,updateRotations:i,updateParams:t})]}):null}const pr=e=>{const t=e.toUpperCase();return e===t?e.toLowerCase():t},B=(e,t)=>{let n=t,s=0;for(;e.quotientMap[n];)s++,n=e.quotientMap[n];return s>1&&(e.quotientMap[t]=n),n},an=(e,t,n)=>{const s=t,a=[[t,n]];for(;a.length>0;)if([t,n]=a.pop(),t>n&&([t,n]=[n,t]),t=B(e,t),n=B(e,n),t!==n){e.quotientMap[n]=t,e.seen.has(n)&&!e.seen.has(t)&&e.seen.add(t);const o=e.cosets.get(t),i=e.cosets.get(n);e.cosets.delete(n);for(const[c,f]of i)o.has(c)?a.push([o.get(c),f]):o.set(c,f)}return B(e,s)},_e=(e,t,n,s)=>{t=B(e,t);const a=e.cosets.get(t);a.has(n)?an(e,a.get(n),s):a.set(n,s)},ue=(e,t,n,s)=>{t=B(e,t);let a;const o=e.cosets.get(t);return o.has(n)?(a=B(e,o.get(n)),s!==void 0&&a!==s&&an(e,s,a)):(s?a=s:(a=e.nextVertex++,e.cosets.set(a,new Map),e.unvisited.push(a)),_e(e,t,n,a),_e(e,a,pr(n),t)),a},Le=function(e,t,n){let s=n;for(let a=t.length-1;a>0;a--)s=ue(e,s,t[a]);ue(e,s,t[0],n)},hr=function(e){if(!e.words){const t=B(e,1);e.words=new Map,e.words.set(t,""),e.currentWords=new Map,e.currentWords.set(t,""),e.lastWord="",e.lastCoset=t,e.remaining=[t],e.rootVertex&&e.rootNormals&&e.metric&&(e.vertices=new Map,e.vertices.set(t,e.rootVertex))}for(;e.remaining.length>0;){const t=e.remaining[0],n=B(e,t),s=e.cosets.get(n),a=e.words.get(n);if(s.size<e.gens.length*2)return;const o=[];for(let i=0;i<e.gens.length;i++){const c=e.gens[i],f=B(e,s.get(c));if(!e.words.has(f)){if(e.cosets.get(f).size<e.gens.length*2)return;o.push([c,f])}}e.remaining.shift();for(let i=0;i<o.length;i++){const[c,f]=o[i],l=c+a;if(e.words.set(f,l),e.currentWords.set(f,l),e.lastCoset=f,e.lastWord=l,e.remaining.push(f),e.vertices){let u=e.vertices.get(n);for(let d=0;d<e.transforms[c].length;d++){const m=e.transforms[c][d];u=jn(u,e.rootNormals[m],e.metric)}e.vertices.set(f,u)}}}},gr=e=>{if(!e.cosets){e.unvisited=[1],e.cosets=new Map([[1,new Map]]),e.nextVertex=2,e.seen=new Set,e.quotientMap={};for(let t=0;t<e.subgens.length;t++)Le(e,e.subgens[t],1)}e.limit=e.limit||1e3,e.done=!1;for(let t=0;t<e.limit;t++){let n=null;for(;e.unvisited.length>0;){const s=B(e,e.unvisited.shift());if(!e.seen.has(s)){e.seen.add(s),n=s;break}}if(n===null){e.done=!0;break}for(let s=0;s<e.gens.length;s++)ue(e,n,e.gens[s].toUpperCase()),ue(e,n,e.gens[s]);for(let s=0;s<e.rels.length;s++)Le(e,e.rels[s],n)}},on=e=>(gr(e),hr(e),e),ke=(e=null)=>{const{location:t}=window;if(t.hash)try{return JSON.parse(atob(t.hash.slice(1)))}catch(n){console.warn(n),t.hash=""}return e},xr=e=>{window.history.pushState(null,null,"#"+btoa(JSON.stringify(e)))},br=()=>{const[e,t]=g.useState(ke(we(Ae).params)),n=g.useCallback(a=>{const o=ke();o&&(Object.entries(o).forEach(([i,c])=>{Array.isArray(c)&&Se(c,e[i])&&(o[i]=e[i])}),t(o))},[e]),s=g.useCallback((a,o=!1)=>{t(i=>{if(!Object.entries(a).filter(([l,u])=>Array.isArray(u)&&!u._reset?!Se(u,i[l]):i[l]!==u).length)return i;const{params:c,badParams:f}=we(o?a:{...i,...a},o?[]:Object.keys(a),i);return f.length||xr(c),c})},[]);return g.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),r.jsx(vr,{params:e,updateParams:s})};wn.createRoot(document.getElementById("root")).render(r.jsx(br,{}));window.ToddCoxeter=on;window.bench=()=>{const e=performance.now(),t=on({gens:"abcdef",subgens:"c",rels:["aa","bb","cc","dd","ee","ff","abababab","acac","bcbcbc","adad","bdbd","cdcdcd","aeae","bebe","cece","dedede","afaf","bfbf","cfcf","dfdf","efefef"],limit:1e5});return console.log(performance.now()-e,t.words.length),t.tc};export{Sn as c,X as r};
