import{r as g,c as he,a as dn,s as mn,m as ye,d as Ve,b as le,e as D,f as B,g as vn,h as pn,i as ue,P as H,j as qe,k as hn,l as gn,n as k,o as Ge,p as V,t as Ce,q as G,u as xn,v as re,w as bn,x as ze,y as $e,z as K,T as Ie,A as Je,B as En,C as Ke,D as We,E as oe,F as Nn,G as wn,H as r,I as fe,J as je,K as Xe,L as Sn,N as Q,M as de,O as yn}from"./CoxeterDiagram-2e728edf.js";var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const On="xyzwvutsrqponmlkjihgfedcba",Ye=["perspective","stereographic","orthographic","klein","inverted","scale","joukowsky","half","upperhalf","halfsphere","band","cross","heart","teardrop","square","ring","sinusoidal","spiral","SC_Triangle","SC_Square","SC_Pentagon","SC_Hexagon"],Ze=["linear","sine","quadratic","cubic","quartic","quintic","exponential","circular","back","elastic","bounce","inverse_sine","inverse_quadratic","inverse_cubic","inverse_quartic","inverse_quintic"],An=["ads","normal","position","uv"],Tn=["lambert","oren-nayar","minnaert","cel","fresnel","reverse"],Rn=["phong","blinn-phong","cook-torrance","ward-anisotropic"],W=["lowest","lower","low","lowish","medium","highish","high","higher","ultra"],Oe=["vertex","edge","face"];class ge extends g.Component{constructor(t){super(t),this.state={error:!1}}static getDerivedStateFromError(t){return{error:!0}}static getDerivedStateFromProps(t){return{error:t.error}}componentDidCatch(t,n){this.props.onError(t,n)}render(){return this.state.error?null:this.props.children}}const Fn=(e,t)=>{let n;return(...i)=>(clearTimeout(n),n=setTimeout(()=>e(...i),t),()=>clearTimeout(n))},_=(e,t=null,n=1,i=!1)=>{if(t===null&&(t=e,e=0),n===0)throw new Error("Step cannot be zero.");if(t<e&&n>0||t>e&&n<0){if(i)return[];n=-n}return new Array(Math.ceil((t-e)/n)).fill().map((a,o)=>e+o*n)},Ae=(e,t)=>e.length!==t.length?!1:e.every((n,i)=>Array.isArray(n)?Ae(n,t[i]):n===t[i]),Dn=(e,t,n)=>mn(e,ye(le(Pn(n),t),2*Ve(le(Re(n),e),t))),Cn=(e,t)=>t.some((n,i)=>n.some((a,o)=>i===o&&a===0))?ye(e,1/e[e.length-1]):ye(e,-1/D(B(Ve(le(t,e),e)))),zn=(e,t)=>vn(e.map((n,i)=>n.map((a,o)=>a<0?-pn(-a/10):a===0?-1:-ue(t[i][o]*H/a)))),Qe=e=>{const t=xn(e);return{"+":t.values.filter(n=>n>0).length,"-":t.values.filter(n=>n<0).length,0:t.values.filter(n=>n===0).length,eigens:t}},en=(e,t=[],n=0,i=10)=>{t[n]=t[n]||[];for(let a=0;a<e.length;a++){const o=e.filter((s,c)=>c!==a).map(s=>s.filter((c,f)=>f!==a));t[n].push(Qe(o)),o.length>1&&n+1<i&&en(o,t,n+1,i)}return t},Mn=e=>{const t=Qe(e),n=t.eigens,i=qe(n.values.map(c=>hn(c))),a={eigens:n,gram:e,metric:i};if(t["-"]===0&&t[0]===0)return{...a,type:"finite",curvature:1};if(t["-"]===0&&t[0]>0)return{...a,type:"affine",curvature:0};if(t["-"]>1)return{...a,type:"hyperbolic",subtype:"superhyperbolic",level:t["-"],curvature:-1};const o=en(e,[],0,3),s=o[0];if(s.every(c=>c["-"]===0&&c[0]===0))return{...a,type:"hyperbolic",subtype:"compact",curvature:-1};if(s.every(c=>c["-"]===0))return{...a,type:"hyperbolic",subtype:"paracompact",curvature:-1};for(let c=1;c<o.length;c++)if(o[c].every(l=>l["-"]===0))return{...a,type:"hyperbolic",subtype:"lorentzian",curvature:-1,level:c+1};return console.info("indefinite",o),{...a,type:"indefinite",curvature:-1}},Te=1,Re=e=>e.map((t,n)=>t.map((i,a)=>n===a&&i===0?Te:i)),Pn=e=>e.map(t=>t.map(n=>B(n))),_n=(e,t)=>{const n=e.eigens,i=e.metric;if(t){const{L:v,D:b}=gn(e.gram);let j;if(b.some((E,I)=>isNaN(b[I][I])))console.warn("Can’t cholesky"),j=Un(e,t);else{const E=k(i,b).map((I,S)=>I.map((R,M)=>S===M?D(R):0));i.forEach((I,S)=>{I[S]===0&&(E[S][S]=Te)}),j=k(v,E)}if(j){const E=k(j,Re(i)),I=Ge(E);if(!I.some(S=>S.some(R=>isNaN(R))))return{normals:j,vertices:I}}console.warn("Can’t center")}const a=n.values.slice(),o=n.vectors.slice(),s=V(...a.filter(v=>v>0)),c=a.indexOf(s);[i[c][c],i[1][1]]=[i[1][1],i[c][c]],o.splice(1,0,o.splice(c,1)[0]),a.splice(c,1),a.splice(1,0,s),a.forEach((v,b)=>{v===0&&(a[b]=.05)});const f=Ce(o),l=qe(a),u=k(i,l).map((v,b)=>v.map((j,E)=>b===E?D(j):0));i.forEach((v,b)=>{v[b]===0&&(u[b][b]=Te)});const d=u.map((v,b)=>v.map((j,E)=>b===E?j!==0?1/j:1:0)),m=k(f,u),p=k(k(Re(i),d),Ce(f));return{normals:m,vertices:p}},Ln=e=>e.sort((t,n)=>{const[i,a]=t,[o,s]=n;return i===0&&a===1?1:o===0&&s===1||i<2&&o>=2?-1:o<2&&i>=2?1:i<2&&o<2?a===s?o-i:a-s:i===o?s-a:o-i}),kn=(e,t)=>{const n=Ln(he(_(e),2));if(t.metric.filter((i,a)=>t.metric[a][a]<0).length===1){const i=[...he(_(e-1),2),...he(_(e-1),2).map(([a,o])=>[o,a])].sort((a,o)=>a[0]-o[0]||(a[0]<a[1]?a[1]-o[1]:o[1]-a[1])).map(([a,o])=>[-a,-o]);if(n.length%2){const a=n.pop();n.push(...i,a)}else n.push(...i)}return{combinations:n,maxShift:~~dn(n.length/2)}},nn=(e,[t,n],i,a)=>{const o=G(i);if(t<0||n<0){const u=-t;t=-n,n=_(i).find(m=>a[m][m]<0);const d=.5*e*e;return o[u][u]=1-d,o[n][n]=1+d,o[u][t]=e,o[t][u]=-e,o[t][n]=e,o[n][t]=e,o[u][n]=d,o[n][u]=-d,o}if(a[t][t]*a[n][n]===0)return a[t][t]===0&&(o[n][t]=e),a[n][n]===0&&(o[t][n]=e),o;const s=a[t][t]*a[n][n],f=(s>0?re:bn)(e),l=D(1-s*f*f);return o[t][t]=l,o[n][n]=l,o[t][n]=-s*f,o[n][t]=f,o},Un=(e,t)=>{const n=e.gram,i=n.length,a=e.curvature;let o=null;const s=n.every((c,f)=>c.every((l,u)=>f===u||l<=-1));if(t||s){if(o=new Array(i).fill(0).map(()=>new Array(i).fill(0)),i===2){const c=(n[0][1]+1)/2;return o[0][0]=D(c-n[0][1]),o[1][0]=-D(c-n[0][1]),o[0][1]=o[1][1]=D((a||1)*c),a===0&&(o[1][1]=.5),o}else if(i===3){const c=n[0][1],f=n[1][2],l=n[0][2],u=(c*c+f*f+l*l-2*c*f*l-1)/(c*c+f*f+l*l-2*c*f-2*c*l-2*f*l+2*c+2*f+2*l-3);return o[0][2]=o[1][2]=o[2][2]=D(a*u),o[2][1]=-D(1-u),o[1][1]=(f-u)/o[2][1],o[0][1]=(l-u)/o[2][1],o[1][0]=-D(1-o[1][1]**2-u),o[0][0]=D(1-o[0][1]**2-u),a===0&&(o[2][2]=.5),o}else if(i===4){const c=n[0][1],f=n[1][2],l=n[2][3],u=n[0][2],d=n[1][3],m=n[0][3],p=(c*c*l*l+f*f*m*m+u*u*d*d-c*c-f*f-l*l-u*u-d*d-m*m+2*c*d*m+2*c*f*u+2*f*l*d+2*l*u*m-2*f*u*d*m-2*c*f*l*m-2*c*l*u*d+1)/(2*(c*c*l+f*f*m+l*l*c+u*u*d+d*d*u+m*m*f-c*c-f*f-l*l-u*u-d*d-m*m-c*f*l-c*f*m-c*l*u-c*l*d-c*l*m-c*u*d-f*l*m-f*u*d-f*u*m-f*d*m-l*u*d-u*d*m+c*f*u+c*d*m+f*l*d+l*u*m+c*f+c*u+c*d+c*m+f*l+f*u+f*d+l*u+l*d+l*m+u*m+d*m-c-f-l-u-d-m+2));return o[0][3]=o[1][3]=o[2][3]=o[3][3]=D(a*p),o[3][2]=-D(1-p),o[2][2]=(l-p)/o[3][2],o[1][2]=(d-p)/o[3][2],o[0][2]=(m-p)/o[3][2],o[2][1]=-D(1-p-o[2][2]**2),o[1][1]=(f-p-o[1][2]*o[2][2])/o[2][1],o[0][1]=(u-p-o[0][2]*o[2][2])/o[2][1],o[1][0]=-D(1-p-o[1][1]**2-o[1][2]**2),o[0][0]=D(1-p-o[0][1]**2-o[0][2]**2),a===0&&(o[3][3]=.5),o}if(n.every((c,f)=>c.every((l,u)=>f===u||l===-1))){const c=[0];for(let f=1;f<i;f++)c[f]=(c[f-1]+1)/(3-c[f-1]);o[0][0]=1,o[1][0]=-1,o[0][1]=D(c[1]),o[1][1]=D(c[1]);for(let f=0;f<i;f++)for(let l=0;l<i;l++)f<2&&l<2||(o[f][l]=l<f-1?0:l===f-1?f*D(c[l]-c[l-1]):l<i-1?D(c[l]-c[l-1]):D(c[l-1]));return o}}};var tn={exports:{}};(function(e,t){(function(n,i){e.exports=i()})(In,function(){var n=function(){function i(p){return s.appendChild(p.dom),p}function a(p){for(var v=0;v<s.children.length;v++)s.children[v].style.display=v===p?"block":"none";o=p}var o=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(p){p.preventDefault(),a(++o%s.children.length)},!1);var c=(performance||Date).now(),f=c,l=0,u=i(new n.Panel("FPS","#0ff","#002")),d=i(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var m=i(new n.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:s,addPanel:i,showPanel:a,begin:function(){c=(performance||Date).now()},end:function(){l++;var p=(performance||Date).now();if(d.update(p-c,200),p>f+1e3&&(u.update(1e3*l/(p-f),100),f=p,l=0,m)){var v=performance.memory;m.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return p},update:function(){c=this.end()},domElement:s,setMode:a}};return n.Panel=function(i,a,o){var s=1/0,c=0,f=Math.round,l=f(window.devicePixelRatio||1),u=80*l,d=48*l,m=3*l,p=2*l,v=3*l,b=15*l,j=74*l,E=30*l,I=document.createElement("canvas");I.width=u,I.height=d,I.style.cssText="width:80px;height:48px";var S=I.getContext("2d");return S.font="bold "+9*l+"px Helvetica,Arial,sans-serif",S.textBaseline="top",S.fillStyle=o,S.fillRect(0,0,u,d),S.fillStyle=a,S.fillText(i,m,p),S.fillRect(v,b,j,E),S.fillStyle=o,S.globalAlpha=.9,S.fillRect(v,b,j,E),{dom:I,update:function(R,M){s=Math.min(s,R),c=Math.max(c,R),S.fillStyle=o,S.globalAlpha=1,S.fillRect(0,0,u,b),S.fillStyle=a,S.fillText(f(R)+" "+i+" ("+f(s)+"-"+f(c)+")",m,p),S.drawImage(I,v+l,b,j-l,E,v,b,j-l,E),S.fillRect(v+j-l,b,l,E),S.fillStyle=o,S.globalAlpha=.9,S.fillRect(v+j-l,b,l,f((1-R/M)*E))}}},n})})(tn);var Bn=tn.exports;const Hn=jn(Bn),Vn=`const vec2 cone = vec2(1., 0);
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
`,qn=`// Global vertex uniforms

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
`,$n=`#version 300 es
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
const float DT = .005f;
`,Jn=`#loopN2
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
`,Wn=`#include helpers
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
`,Xn=`#ifdef OIT
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
`,Yn=`gl_Position = viewProject(proj);

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
`,Zn=`#ifdef SHADING
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
`,xe=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),C=(e,t,n)=>{let i,a,o;if(t===0)i=a=o=n;else{const s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;i=xe(c,s,e+1/3),a=xe(c,s,e),o=xe(c,s,e-1/3)}return[i,a,o]},ie=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],Qn={background:[0,0,0,1],glow:!1,shading:"ads",diffuse:"lambert",specular:!1,shininess:32,opacity:1,ambient:.2,roughness:.85,gouraud:!1,transparency:"oit",color:({word:e})=>C(e.length*.03%1,.75,.7)},Y=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},shading:!1,face:{opacity:.025},transparency:"blend",color:({word:e})=>C(e.length*.17%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,diffuse:"fresnel",opacity:.025},transparency:"blend",color:({word:e})=>C(...ie[e.length%ie.length])},cathedral:{background:[.6,.6,.6,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,opacity:.9},transparency:"oit",color:({word:e,type:t})=>t==="face"?C(e.length*.3%1,1,.6):[0,0,0]},synthwave:{background:[...C(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},shading:!1,face:{opacity:.015},afterImage:.7,transparency:"blend",color:({word:e})=>C((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>C(e.length*.03%1,1,.8)},shiny:{background:[0,0,0,1],diffuse:"lambert",specular:"blinn-phong",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>C(-(e.length*.07)%1,1,.8)},shape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({faceSize:e,type:t,idx:n,size:i})=>t==="face"?C((e-2)*.21%1,1,.8):C(n/i,.75,.5)},subShape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({subShape:e,type:t})=>t!=="vertex"?C(e*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],diffuse:"cel",face:{opacity:.6,gouraud:!1},transparency:"blend",color:({word:e,type:t,dimensions:n,draw:i})=>{const a=e.length?ze(e[e.length-1])/n:0;return C(a%1,1,t==="face"?.6:i.face?0:.8)}},harlequin:{background:[...C(240/360,.23,.09),1],face:{opacity:.6},transparency:"oit",color:({word:e,idx:t,type:n})=>{const i=e.split("").map(o=>ze(o)).reduce((o,s)=>o+s,0),a=[...ie[i%ie.length]];return t%2&&(a[2]*=.5),C(...a)}},pure:{background:[0,0,0,1],color:({word:e})=>C(e.length*.03%1,.75,.7)},facets:{background:[0,0,0,1],color:({faceIndex:e,faceSize:t})=>C(e/t,.75,.7)},monochrome:{background:[.12,.12,.12,1],diffuse:"reverse",ambient:0,face:{opacity:.1},transparency:"oit",color:()=>[1,1,1]},plain:{extended:!0,background:[1,1,1,1],glow:!1,shading:!1,color:({word:e,type:t,draw:n})=>C(e.length*.06%1,1,t==="face"?.6:n.face?.05:.5)},plainblack:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e,type:t})=>t==="face"?new Array(3).fill(1-$e(.9,e.length+1)):[0,0,0]},normals:{extended:!0,background:[1,1,1,1],shading:"normal",color:()=>[0,0,0]},uvs:{extended:!0,background:[1,1,1,1],shading:"uv",color:()=>[0,0,0]}}).map(([e,t])=>[e,{...Qn,...t,transparent:{}}])),et={globals:$n,dimensions:qn,project:Wn,helpers:Jn,complex:Vn,ease:Gn,fragment:Xn,vertexouthead:Zn,lighting:Kn,vertexout:Yn},nt=(e,t,n)=>{t=n?1:t||1,t=Math.max(0,t);const i=n?n.width:e.clientWidth*t|0,a=n?n.height:e.clientHeight*t|0;return e.width!==i||e.height!==a?(e.width=i,e.height=a,!0):!!n},be=(e,t)=>e.replace(/\bvecN\b/g,`vec${t}`).replace(/\bmatN\b/g,`mat${t}`).replace(/\bfovN\b/g,`fov${t}`).replace(/\bvecN_1\b/g,`vec${t-1}`).replace(/\bvec1\b/g,"float").replace(/\b_N_\b/g,`${t}`).replace(/\b_Nf_\b/g,`${t}.`).replace(/\PROJECTION_N\b/g,`PROJECTION${t}`),tt=(e,t)=>be(e.replace(/#loopN(\d)(.+?)#endloopN/gs,(n,i,a)=>{const o=[];for(let s=i;s<=t;s++)o.push(be(a.replace(/#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,(c,f,l,u,d)=>f===`${s}`?be(l,s):d||""),s));return o.join(`
`)}),t),Me=(e,t,n,i)=>{var l;const a=Y[e.ambiance];let o="";const s=u=>u.toString().includes(".")?u:`${u}.`;Object.entries({shading:u=>An.indexOf(u),diffuse:u=>Tn.indexOf(u),specular:u=>Rn.indexOf(u),ambient:u=>s(u),shininess:u=>s(u),roughness:u=>s(u),opacity:u=>s(u),gouraud:u=>""}).forEach(([u,d])=>{const m=Object.keys(a).includes(i)&&Object.keys(a[i]).includes(u)?a[i][u]:a[u];m!==!1&&(o+=`#define ${u.toUpperCase()} ${d(m)}
`),u==="opacity"&&m<1&&(a.transparent[i]=!0,o+=`#define TRANSPARENT
`,a.transparency==="oit"&&(o+=`#define OIT
`))});const f=e.easing;o+=`#define DIMENSIONS ${e.dimensions}
`;for(let u=3;u<=e.dimensions;u++)o+=`#define PROJECTION${u} ${Ye.indexOf(e[`projection${u}`])-1}
`;return o+=`#define CURVATURE ${((l=e.space)==null?void 0:l.curvature)||0}
`,e.curve&&(o+=`#define SEGMENTS
`),o+=`#define EASING ${Ze.indexOf(f)}
`,Object.entries({...et,config:o}).forEach(([u,d])=>{t=t.replace(`#include ${u}`,d),n=n.replace(`#include ${u}`,d)}),[t,n].map(u=>tt(u,e.dimensions))},se=(e,t,n,i,a)=>{if(e.gl.shaderSource(a,i),e.gl.compileShader(a),!e.gl.getShaderParameter(a,e.gl.COMPILE_STATUS)){const s=e.gl.getShaderInfoLog(a);return console.error(`An error occurred compiling the ${t}->${n} shader: ${s}`,{shaderSource:i}),s}},Pe=(e,t,n)=>{const{gl:i}=e;if(i.linkProgram(n),!i.getProgramParameter(n,i.LINK_STATUS)){const o=i.getProgramInfoLog(n);return console.error(`Unable to initialize the ${t} shader program: ${o}`),o}},rn=(e,t,n,i,a=[])=>{const{gl:o}=e,s=o.createProgram(),c=o.createShader(o.VERTEX_SHADER),f=o.createShader(o.FRAGMENT_SHADER);if(se(e,t,"vertex",n,c)||se(e,t,"fragment",i,f)||(o.attachShader(s,c),o.attachShader(s,f),Pe(e,t,s)))return;const l={program:s,vertexShader:c,fragmentShader:f,uniformsDef:a,recompile(u,d,m,p=null){se(u,t,"vertex",d,this.vertexShader)||se(u,t,"fragment",m,this.fragmentShader)||Pe(u,t,this.program)||(p&&(this.uniformsDef=p),this.bindUniforms(u))},bindUniforms(u){this.uniforms={},this.uniformsDef.forEach(({name:d,type:m,value:p})=>{this.uniforms[d]=rt(u,this.program,d,m),this.uniforms[d].update(p)})}};return l.bindUniforms(e),l},ee=(e,t,n,i,a,o=null,s=null)=>{const{gl:c}=e;s=s||c.FLOAT;const f=s===c.FLOAT?4:2,l={name:n,mesh:t,indices:an,instances:o,data:a,size:i,type:s,update(u=null,d=null,m=null){c.bindVertexArray(this.mesh.vao),c.bindBuffer(c.ARRAY_BUFFER,this.buffer),u===null&&d===null&&m===null?c.bufferData(c.ARRAY_BUFFER,this.data,c.STATIC_DRAW):(this.data.set(u,d*this.size),c.bufferSubData(c.ARRAY_BUFFER,d*this.size*f,this.data,d*this.size,m*this.size))},extend(u,d,m=!1){if(c.bindVertexArray(this.mesh.vao),this.size=u,d&&(m&&d.length>=this.data.length&&d.set(this.data),this.data=d),this.location=c.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;c.bindBuffer(c.ARRAY_BUFFER,this.buffer);const p=u>4?3:1;for(let v=0;v<p;v++)c.enableVertexAttribArray(this.location+v);for(let v=0;v<p;v++)c.vertexAttribPointer(this.location+v,u/p,this.type,!1,u*f,u/p*v*f);for(let v=0;v<p;v++)c.vertexAttribDivisor(this.location+v,this.instances||0);this.update()},get(){c.bindVertexArray(this.mesh.vao),c.bindBuffer(c.ARRAY_BUFFER,this.buffer);const u=new Float32Array(this.data.length);return c.getBufferSubData(c.ARRAY_BUFFER,0,u),u}};return l.buffer=c.createBuffer(),l.extend(i),l},an=(e,t,n)=>{const{gl:i}=e;i.bindVertexArray(t);const a=i.createBuffer();return i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,a),i.bufferData(i.ELEMENT_ARRAY_BUFFER,n,i.STATIC_DRAW),{buffer:a,vao:t,indices:n,count:n.length,update(o){i.bindVertexArray(this.vao),this.indices=o,this.count=o.length,i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,this.buffer),i.bufferData(i.ELEMENT_ARRAY_BUFFER,o,i.STATIC_DRAW)}}},rt=(e,t,n,i)=>{const{gl:a}=e;return{program:t,update(s){if(a.useProgram(this.program),i.startsWith("m")){const c=parseInt(i.slice(1,2));if(c>4)for(let f=0;f<c;f++){const l=a.getUniformLocation(t,`${n}.c${f+1}.v`);if(l!==null&&a.uniform4fv(l,s[f][0]),c-4===1){const u=a.getUniformLocation(t,`${n}.c${f+1}.u`);u!==null&&a.uniform1f(u,s[f][1])}else if(c-4>1){const u=a.getUniformLocation(t,`${n}.c${f+1}.u`);if(u!==null&&a[`uniform${V(c-4,4)}fv`](u,s[f][1]),c-8===1){const d=a.getUniformLocation(t,`${n}.c${f+1}.t`);d!==null&&a.uniform1f(d,s[f][2])}}}else{const f=a.getUniformLocation(t,n);f!==null&&a[`uniformMatrix${i.slice(1)}`](f,!1,s)}}else{const c=a.getUniformLocation(t,n);c!==null&&a[`uniform${i}`](c,s)}},get(){a.useProgram(this.program);const s=a.getUniformLocation(t,n);if(s!==null)return a.getUniform(this.program,s)}}},q=(e,t,n=null)=>{const{gl:i}=e,a=n?~~(n*i.drawingBufferWidth):i.drawingBufferWidth,o=n?~~(n*i.drawingBufferHeight):i.drawingBufferHeight,s=i.createTexture();return i.bindTexture(i.TEXTURE_2D,s),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,n?i.LINEAR:i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,n?i.LINEAR:i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texStorage2D(i.TEXTURE_2D,1,t,a,o),{texture:s,width:a,height:o}},ne=(e,t,n,i,a=[])=>{const o={name:t,vertex:n,fragment:i,...rn(e,t,n,i,a),recompileProgram(s){this.recompile(s,this.vertex,this.fragment,a)}};return{[t]:o}},Ee=(e,t,n,i,a,o,s,c=["position"])=>{var m;const{gl:f}=e,l=a(((m=e.space)==null?void 0:m.curvature)&&e.curve,e.detail),u=p=>[{name:"viewProjection",type:"m4fv",value:K(G(4))},{name:"matrix",type:`m${p.dimensions}fv`,value:K(p.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${p.dimensions}fv`,value:K(G(p.dimensions))},{name:"zoom",type:"1f",value:1},...["vertex","edge"].includes(t)?[{name:"thickness",type:"1f",value:0}]:[],..._(3,p.dimensions+1,1,!0).map(v=>({name:`fov${v}`,type:"1f",value:p[`fov${v}`]}))];s=s>4?9:s;const d={attributes:{},varying:c,vertex:n,type:t,fragment:i,...rn(e,t,...Me(e,n,i,t),u(e)),recompileProgram(p){const[v,b]=Me(p,this.vertex,this.fragment,this.type);this.recompile(p,v,b,u(p))},changeArity(p){p=p>4?9:p,this.arity!==p&&(this.arity=p,this.extendAttributes(this.instances))},extendAttributes(p){this.instances=p,c.forEach(v=>{this.attributes[v].extend(this.arity,new Float32Array(p*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(p*3),!0)},updateGeometry(p){const v=a(p.space.curvature&&p.curve,p.detail);this.indices.update(new Uint16Array(v.indices)),this.attributes.vertex.extend(3,new Float32Array(v.vertices)),this.attributes.uv.extend(2,new Float32Array(v.uvs)),this.attributes.normal.extend(3,new Float32Array(v.normals))},render(p){this.count&&(f.useProgram(this.program),f.bindVertexArray(this.vao),f.drawElementsInstanced(f.TRIANGLES,this.indices.count,f.UNSIGNED_SHORT,0,this.count))}};return d.vao=f.createVertexArray(),d.indices=an(e,d.vao,new Uint16Array(l.indices)),d.attributes.vertex=ee(e,d,"vertex",3,new Float32Array(l.vertices)),d.attributes.uv=ee(e,d,"uv",2,new Float32Array(l.uvs)),d.attributes.normal=ee(e,d,"normal",3,new Float32Array(l.normals)),d.attributes.color=ee(e,d,"color",3,new Float32Array(o*3),1),c.forEach(p=>{d.attributes[p]=ee(e,d,p,s,new Float32Array(o*s),1)}),d.type=t,d.arity=s,d.instances=o,d.count=0,{[t]:d}},Ne=(e,t,n,i)=>{const{gl:a}=e;a.bindRenderbuffer(a.RENDERBUFFER,t),i?a.renderbufferStorageMultisample(a.RENDERBUFFER,i,n,a.drawingBufferWidth,a.drawingBufferHeight):a.renderbufferStorage(a.RENDERBUFFER,n,a.drawingBufferWidth,a.drawingBufferHeight),a.bindRenderbuffer(a.RENDERBUFFER,null)},at=({radius:e=1,widthSegments:t=16,segments:n=16}={})=>{const i=[],a=[],o=[],s=[];let c=0;const f=[];for(let l=0;l<=n;l++){const u=[],d=l/n;let m=0;l===0?m=.5/t:l===n&&(m=-.5/t);for(let p=0;p<=t;p++){const v=p/t,b=[-e*ue(v*Ie)*re(d*H),e*ue(d*H),e*re(v*Ie)*re(d*H)];a.push(...b);const j=(b[0]**2+b[1]**2+b[2]**2)**-.5;o.push(...b.map(E=>E*j)),s.push(v+m,1-d),u.push(c++)}f.push(u)}for(let l=0;l<n;l++)for(let u=0;u<t;u++){const d=f[l][u+1],m=f[l][u],p=f[l+1][u],v=f[l+1][u+1];l!==0&&i.push(d,m,v),l!==n-1&&i.push(m,p,v)}return{vertices:a,normals:o,uvs:s,indices:i}},ot=({radius:e=null,radiusTop:t=1,radiusBottom:n=1,height:i=1,radialSegments:a=8,segments:o=1}={})=>{const s=[],c=[],f=[],l=[];e!==null&&(t=e,n=e);let u=0;const d=[],m=i/2,p=(n-t)/i;for(let v=0;v<=o;v++){const b=[],j=v/o,E=j*(n-t)+t;for(let I=0;I<=a;I++){const S=I/a,R=S*Ie,M=re(R),L=ue(R),Z=[E*M,-j*i+m,E*L];c.push(...Z);const z=[M,p,L],P=(z[0]**2+z[1]**2+z[2]**2)**-.5;f.push(...z.map(ae=>ae*P)),l.push(S,1-j),b.push(u++)}d.push(b)}for(let v=0;v<a;v++)for(let b=0;b<o;b++){const j=d[b][v],E=d[b+1][v],I=d[b+1][v+1],S=d[b][v+1];s.push(j,E,S),s.push(E,I,S)}return{vertices:c,normals:f,uvs:l,indices:s}},it=({segments:e=3}={})=>{const t=[],n=[],i=[],a=[],o=1/e;for(let s=0;s<e+1;s++)for(let c=0;c<s+1;c++)n.push((2*c-s)*o/2,s*o,0),i.push(0,0,1),a.push(o*c,1-o*s);for(let s=1;s<e+1;s++)for(let c=0;c<s;c++){const f=s*(s+1)/2+c,l=s*(s-1)/2+c;if(t.push(f,l,f+1),s<e){const u=(s+1)*(s+2)/2+c;t.push(u+1,f,f+1)}}return{vertices:n,normals:i,uvs:a,indices:t}},st=`#include globals
#include fragment
`,ct=`#include globals
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
`,lt=`#include globals
#include fragment
`,ut=`#include globals
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
`,ft=`#include globals
#include fragment
`,dt=`#include globals
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
`,we={vertex:(e,t)=>at({lowest:{widthSegments:6,segments:2},lower:{widthSegments:8,segments:4},low:{widthSegments:8,segments:8},lowish:{widthSegments:12,segments:8},medium:{widthSegments:16,segments:16},highish:{widthSegments:32,segments:16},high:{widthSegments:32,segments:32},higher:{widthSegments:64,segments:32},ultra:{widthSegments:128,segments:64}}[t||"medium"]),edge:(e,t)=>ot({lowest:{segments:e?4:1,radialSegments:4},lower:{segments:e?8:1,radialSegments:5},low:{segments:e?12:1,radialSegments:6},lowish:{segments:e?14:1,radialSegments:7},medium:{segments:e?16:1,radialSegments:8},highish:{segments:e?24:1,radialSegments:10},high:{segments:e?32:1,radialSegments:12},higher:{segments:e?64:1,radialSegments:16},ultra:{segments:e?128:1,radialSegments:32}}[t||"medium"]),face:(e,t)=>it({lowest:{segments:e?4:1},lower:{segments:e?8:1},low:{segments:e?12:1},lowish:{segments:e?14:1},medium:{segments:e?16:1},highish:{segments:e?24:1},high:{segments:e?32:1},higher:{segments:e?64:1},ultra:{segments:e?128:1}}[t||"medium"])};function mt(e){return{meshes:Oe,...Ee(e,"vertex",dt,ft,we.vertex,1024,e.dimensions),...Ee(e,"edge",ct,st,we.edge,1024,e.dimensions,["position","target"]),...Ee(e,"face",ut,lt,we.face,1024,e.dimensions,["position","target","center"]),changeArity(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].changeArity(t)},updateGeometries(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].updateGeometry(t)},recompilePrograms(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].recompileProgram(t)},updateUniforms(t,n=!1,i=null){for(let a=0;a<this.meshes.length;a++){const o=this.meshes[a],s=this[o];if(!n){s.uniforms.metric.update(K(t.space.metric)),s.uniforms.matrix.update(K(t.matrix));for(let c=4;c<=t.dimensions;c++)s.uniforms[`fov${c}`].update(1/Je(H*t[`fov${c}`]*.5/180));o==="vertex"?s.uniforms.thickness.update(t.sizeVertex):o==="edge"&&s.uniforms.thickness.update(t.sizeEdge)}s.uniforms.viewProjection.update(t.camera.viewProjection),s.uniforms.zoom.update(n?i:t.zoom),s.uniforms.eye.update(t.camera.eye)}}}}const vt=`#version 300 es
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
`,pt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,ht=`#version 300 es
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
`,gt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,xt=`#version 300 es
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
`,bt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,Et=`#version 300 es
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
`,Nt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`,wt=`#version 300 es
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
`,St=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0f + -1.0f, 0.0f, 1.0f);
}
`;function yt(e){return{...ne(e,"oit",Nt,Et,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...ne(e,"down",bt,xt,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...ne(e,"up",St,wt,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...ne(e,"afterImage",pt,vt,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...ne(e,"bloom",gt,ht,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}])}}function on(e){const{gl:t}=e,n=Y[e.ambiance],i=e.msaa?V(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(t.bindFramebuffer(t.FRAMEBUFFER,e.fb.base),Ne(e,e.rb.base,t.RGBA8,i),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,e.rb.base),Ne(e,e.rb.depth,t.DEPTH_COMPONENT24,i),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),e.fb.oit&&(t.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(t.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(t.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&t.deleteRenderbuffer(e.rb.depth_copy),n.transparency==="oit"&&(e.fb.oit=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.oit),i?(e.rb.depth_copy=t.createRenderbuffer(),Ne(e,e.rb.depth_copy,t.DEPTH_COMPONENT24),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth_copy)):t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),e.textures.oitAccum=q(e,t.RGBA16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=q(e,t.R16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT1,t.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(t.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(t.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(t.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(t.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),n.afterImage&&(e.fb.afterImage=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=q(e,t.RGBA8),e.textures.afterImageScreen=q(e,t.RGBA8),e.textures.afterImageOutScreen=q(e,t.RGBA8)),e.fb.kawase&&(t.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(t.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let a=0;a<e.textures.kawase.length;a++)t.deleteTexture(e.textures.kawase[a].texture);e.textures.kawase=null}if(e.textures.blur&&(t.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(t.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),n.glow){e.fb.kawase=t.createFramebuffer(),e.fb.bloom=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let a=0;a<n.glow.steps;a++)e.textures.kawase[a]=q(e,t.RGBA8,n.glow.pow**-a);e.textures.blur=q(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.blur.texture,0),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=q(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.bloom.texture,0)}}const sn=window.location.search.includes("stats");let ce;sn&&(ce=new Hn,ce.dom.id="stats",document.body.appendChild(ce.dom));const It=e=>{const t=document.createElement("canvas");t.id="webgl2",document.body.insertBefore(t,document.body.firstChild);const n=t.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(e={...e,gl:n},!n){console.error("Unable to initialize WebGL. Your browser may not support it.");return}n.getExtension("EXT_color_buffer_float"),n.enable(n.DEPTH_TEST);const i={zoom:1,fov:H/3,eye:[0,0,-e.zoom],near:.01,far:1e3,update(l){const u=G(4);u[0][3]=this.eye[0],u[1][3]=this.eye[1],u[2][3]=this.eye[2],u[0][0]=-1,u[2][2]=-1;const d=Ge(u);this.aspect=l?l.fullWidth/l.fullHeight:n.canvas.clientWidth/n.canvas.clientHeight,this.zoom=V(this.aspect,1);const m={left:0,right:0,top:0,bottom:0,near:this.near,far:this.far};m.top=this.near*Je(this.fov/2)/this.zoom;let p=2*m.top,v=this.aspect*p;m.left=-.5*v,l&&(m.left+=l.x*v/l.fullWidth,m.top-=l.y*p/l.fullHeight,v*=l.width/l.fullWidth,p*=l.height/l.fullHeight),m.bottom=m.top-p,m.right=m.left+v;const b=En(m);this.viewProjection=K(k(b,d))}};i.update();const a=yt(e),o=mt(e),s={base:n.createRenderbuffer(),depth:n.createRenderbuffer()},c={base:n.createFramebuffer()};return{...e,gl:n,camera:i,meshes:o,passes:a,rb:s,fb:c,textures:{}}},me=(e,t=null)=>{e.camera.fov=e.fov3?H*e.fov3/180:1,t!==null&&(e.camera.eye[2]=t===null?-e.zoom:-t),e.camera.update(),e.meshes.updateUniforms(e,!0,t)},jt=e=>{const t=Y[e.ambiance];e.gl.clearColor(...t.background),t.glow&&(e.passes.bloom.uniforms.exposure.update(t.glow.exposure),e.passes.bloom.uniforms.strength.update(t.glow.strength),e.passes.down.uniforms.offset.update(t.glow.offset.down),e.passes.up.uniforms.offset.update(t.glow.offset.up)),t.afterImage&&e.passes.afterImage.uniforms.strength.update(t.afterImage)},X=(e,t)=>{sn&&ce.update();const{gl:n}=e,i=e.msaa?V(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,a=Y[e.ambiance];nt(n.canvas,e.subsampling,t)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),on(e),e.camera.update(t),e.meshes.updateUniforms(e,!0,e.zoom)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),a.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),a.transparent.vertex||e.meshes.vertex.render(e),a.transparent.edge||e.meshes.edge.render(e),a.transparent.face||e.meshes.face.render(e),(e.drawVertex&&a.transparent.vertex||e.drawEdge&&a.transparent.edge||e.drawFace&&a.transparent.face)&&(a.transparency==="oit"?(i&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):a.transparency==="blend"&&(n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e)));const o=a.afterImage?e.fb.afterImage:a.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,o),a.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let s=e.textures.bloom;if(a.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),a.glow?s=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),a.glow){n.disable(n.BLEND),a.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let c=0;c<a.glow.steps;c++){const f=c===0?s:e.textures.kawase[c-1],l=e.textures.kawase[c];n.viewport(0,0,l.width,l.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,l.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let c=a.glow.steps-1;c>=0;c--){const f=e.textures.kawase[c],l=c===0?e.textures.blur:e.textures.kawase[c-1];n.viewport(0,0,l.width,l.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,l.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,s.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=X;const te=.9,Ot=.95,At=10,cn=(e,t,n,i,a,o)=>{const{combinations:s}=n,c=[[],[]],f=(u,d)=>{We(i,k(nn(u,d,a,o),i))},l=2*t+1>s.length-1?[t*2]:[t*2+1,t*2];for(let u=0;u<l.length;u++){const d=l[u];if(c[u].push(d),n.lock&&s[d][0]>=0&&s[d][1]>=0)for(let m=0;m<s.length;m++)s[m][0]<0||s[m][1]<0||!s[d].some(p=>s[m].includes(p))&&(!(u>0)||m!==l[1-u])&&c[u].push(m)}for(let u=0;u<c.length;u++){const d=c[u];for(let m=0;m<d.length;m++){const p=d[m];f(e[u],s[p])}}return c},Tt=(e,t,n,i,a,o)=>{const{code:s}=e,c=.1;if(e.altKey||e.ctrlKey||e.metaKey)return;const f=(l,u,d)=>cn([l,u],d,t,n,i,a);if(s==="ArrowLeft"||s==="KeyA")f(c,0,0);else if(s==="ArrowRight"||s==="KeyD")f(-c,0,0);else if(s==="ArrowUp"||s==="KeyW")f(0,c,0);else if(s==="ArrowDown"||s==="KeyS")f(0,-c,0);else if(s==="PageUp"||s==="KeyQ")f(c,0,1);else if(s==="PageDown"||s==="KeyE")f(-c,0,1);else if(s==="Digit1")f(0,c,1);else if(s==="Digit3")f(0,-c,1);else if(s==="KeyZ")f(c,0,2);else if(s==="KeyC")f(-c,0,2);else if(s==="ControlLeft")o("shift",(t.shift+1)%t.maxShift);else return;return!0},Rt=(e,t,n,i)=>{const a=g.useRef(null),o=g.useRef({pause:new Set,speed:null,zoom:null,t:null}),s=g.useRef({matrix:e.matrix,zoom:e.zoom,pointers:new Map});g.useEffect(()=>{s.current.matrix=e.matrix},[e.matrix]),g.useEffect(()=>{s.current.zoom=e.zoom,o.current.zoom=null},[e.zoom]);const c=g.useCallback(({matrix:l,zoom:u}={matrix:!0,zoom:!0})=>{if(!e.matrix._reset){if(l)for(let d=0;d<Oe.length;d++)e.meshes[Oe[d]].uniforms.matrix.update(K(s.current.matrix));u&&me(e,s.current.zoom)}},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.drawVertex,e.drawEdge,e.drawFace,e.easing,e.error,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,e.stellation,e.subsampling,e.zoom]);g.useEffect(()=>{o.current.speed=new Array(t.combinations.length).fill(0)},[t.combinations.length]),g.useEffect(()=>{e.matrix._reset&&(delete e.matrix._reset,o.current.speed=new Array(t.combinations.length).fill(0))},[t.combinations.length,e.matrix]);const f=g.useCallback(()=>{const{pause:l,speed:u,zoom:d}=o.current;o.current.t||(o.current.t=performance.now());const m=performance.now()-o.current.t;let p=!1;for(let v=0;v<u.length;v++)if(u[v]!==0&&(p=!0,t.auto==="damp"&&(u[v]*=Ot,B(u[v])<1e-6&&(u[v]=0)),!l.has(v))){const b=Ke(V(u[v]*m,.5),-.5);We(s.current.matrix,k(nn(b,t.combinations[v],e.dimensions,e.space.metric),s.current.matrix))}if(p&&c({matrix:!0}),d){const v=oe(s.current.zoom)/oe(te),b=oe(d)/oe(te);s.current.zoom*=$e(te,(b-v)*V(1,m*.001*2)),B(d-s.current.zoom)<d*.001&&(s.current.zoom=d,o.current.zoom=null),p=!0,c({zoom:!0})}if(u.reduce((v,b)=>B(v)+B(b),0)===0&&o.current.zoom===null&&!e.matrix._reset){i({matrix:s.current.matrix,zoom:s.current.zoom}),a.current=null,o.current.t=null;return}p&&X(e),o.current.t=performance.now(),a.current=requestAnimationFrame(f)},[c,t.auto,t.combinations,e.dimensions,e.space]);g.useEffect(()=>{o.current.speed.reduce((E,I)=>B(E)+B(I),0)>0&&(a.current=requestAnimationFrame(f));let l=null,u=null;const d=[],m=()=>{const E=s.current.pointers.values(),I=E.next().value,S=E.next().value;return Nn(I[0]-S[0],I[1]-S[1])},p=E=>{E.button!==0||E.target.tagName!=="CANVAS"||(t.auto&&(u=performance.now(),s.current.pointers.size===1?(o.current.pause.delete(t.shift*2),o.current.pause.delete(t.shift*2+1)):(o.current.pause.add(t.shift*2),o.current.pause.add(t.shift*2+1))),s.current.pointers.set(E.pointerId,[E.clientX,E.clientY]))},v=E=>{if(!s.current.pointers.has(E.pointerId))return;const I=s.current.pointers.get(E.pointerId),S=[-(E.clientX-I[0])/window.innerHeight,-(E.clientY-I[1])/window.innerHeight];if(s.current.pointers.set(E.pointerId,[E.clientX,E.clientY]),s.current.pointers.size>1){if(l===null){l=m(),o.current.zoom=s.current.zoom;return}const L=m();s.current.zoom*=l/L,l=L,me(e,s.current.zoom),o.current.zoom=null,X(e);return}let R=t.shift;!R&&E.shiftKey?R=1:!R&&E.altKey?R=2:!R&&E.ctrKey?R=3:!R&&E.metaKey&&(R=4);const M=cn([H*S[0],H*S[1]],R,t,s.current.matrix,e.dimensions,e.space.metric);if(t.auto){const L=performance.now()-u;u=performance.now(),d.push([S[0]*1.5/L,S[1]*1.5/L]),d.length>At&&d.shift();const Z=d.reduce((z,P)=>[z[0]+P[0],z[1]+P[1]],[0,0]);for(let z=0;z<2;z++)for(let P=0;P<M[z].length;P++)o.current.speed[M[z][P]]=Z[z]/d.length;a.current||(a.current=requestAnimationFrame(f))}c({matrix:!0})},b=E=>{s.current.pointers.clear(),t.auto&&(d.length=0,u=null,o.current.pause.delete(t.shift*2),o.current.pause.delete(t.shift*2+1)),l=null};document.addEventListener("pointerdown",p),document.addEventListener("pointermove",v),document.addEventListener("pointerup",b);const j=o.current;return()=>{document.removeEventListener("pointerdown",p),document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",b),a.current&&(cancelAnimationFrame(a.current),a.current=null,j.t=null)}},[t,e.dimensions,e.space,e.camera,f,c]),g.useEffect(()=>{const l=u=>{u.target===document.body&&Tt(u,t,s.current.matrix,e.dimensions,e.space.metric,n)&&(c({matrix:!0}),X(e))};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[c,t,e.space,e.dimensions,n]),g.useEffect(()=>{const l=u=>{if(u.target.tagName!=="CANVAS")return;const d=o.current.zoom===null?s.current.zoom:o.current.zoom;o.current.zoom=d*(u.deltaY<0?te:1/te),a.current||(a.current=requestAnimationFrame(f))};return document.addEventListener("wheel",l),()=>{document.removeEventListener("wheel",l)}},[f]),g.useEffect(()=>{const l=u=>{if(u.button!==0||u.target.tagName!=="CANVAS")return;const d=o.current.zoom===null?s.current.zoom:o.current.zoom,m=d<.5?5:d<2?.25:1;o.current.zoom=m,a.current||(a.current=requestAnimationFrame(f))};return document.addEventListener("dblclick",l),()=>{document.removeEventListener("dblclick",l)}},[f])};function Ft({runtime:e,rotations:t,updateRotations:n,updateParams:i}){return Rt(e,t,n,i),null}function Dt(){return new Worker(""+new URL("shape.worker-3b178303.js",import.meta.url).href)}const Ct=(e,t)=>{g.useEffect(()=>{t(n=>{const i=zn(n.coxeter,n.stellation),a=Mn(i),{vertices:o,normals:s}=_n(a,n.centered),c=n.mirrors.every(l=>!l)?n.mirrors.map(()=>1):n.mirrors.map(l=>wn(l)),f=Cn(le(o,c),a.metric);return a.rootVertex=f,a.rootVertices=o,a.rootNormals=s,{...n,space:a,error:null}})},[e.dimensions,e.coxeter,e.mirrors,e.stellation,e.centered,t]),g.useEffect(()=>{t(n=>{var a;const i={...n,iteration:-1,paused:!1};return n.processing&&((a=n.shaper)==null||a.terminate(),i.shaper=new Dt),i})},[e.space,e.ambiance,e.drawVertex,e.drawEdge,e.drawFace,e.hidden,t]),g.useEffect(()=>{t(n=>{const i={...n};return n.polytope.size>n.limit&&(i.paused=!0),i})},[e.polytope.size,e.limit,t]),g.useEffect(()=>{t(n=>({...n,paused:!1}))},[e.limit,t]),g.useEffect(()=>{t(n=>!n.iteration<0?n:(n.shaper.postMessage({first:n.iteration===-1,space:n.space,dimensions:n.dimensions,coxeter:n.coxeter,stellation:n.stellation,mirrors:n.mirrors,ambiance:n.ambiance,draw:{vertex:n.drawVertex,edge:n.drawEdge,face:n.drawFace},batch:n.batch,hidden:n.hidden}),{...n,iteration:n.iteration===-1?0:n.iteration,processing:!0}))},[e.iteration,e.limit,e.ambiance,e.drawVertex,e.drawEdge,e.drawFace,e.shaper,e.space,e.hidden,t]),g.useEffect(()=>{t(n=>({...n,iteration:n.paused?n.iteration:n.iteration+1}))},[e.paused,t]),g.useEffect(()=>{if(!e.shaper)return;const n=({data:i})=>{i.error?console.error(i.error):t(a=>{for(let o=0;o<i.infos.length;o++){const s=a.meshes[a.meshes.meshes[o]],c=i.infos[o];if(!c){s.count=0;continue}s.count=c.start+c.size,s.instances<s.count&&s.extendAttributes(s.count),s.attributes.color.update(i.data[o][0],c.start,c.size);for(let f=0;f<s.varying.length;f++){const l=s.varying[f];s.attributes[l].update(i.data[o][f+1],c.start,c.size)}}return{...a,processing:!i.polytope.done,iteration:a.paused||i.polytope.done?a.iteration:a.iteration+1,polytope:i.polytope}})};return e.shaper.addEventListener("message",n),()=>{e.shaper.removeEventListener("message",n)}},[e.shaper,e.paused,t])};function zt({runtime:e,setRuntime:t}){return Ct(e,t),null}const Mt=(e,t)=>{g.useEffect(()=>{t(n=>(me(n,n.zoom),n))},[e.zoom,t]),g.useEffect(()=>{t(n=>(me(n),n))},[e.fov3,e.camera,t]),g.useEffect(()=>{t(n=>(jt(n),on(n),n))},[e.ambiance,e.msaa,e.msaaSamples,t]),g.useEffect(()=>{t(n=>(n.meshes.recompilePrograms(n),n))},[e.ambiance,e.curve,e.dimensions,e.easing,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{t(n=>(n.meshes.changeArity(n.dimensions),n))},[e.dimensions,t]),g.useEffect(()=>{t(n=>(n.meshes.updateGeometries(n),n))},[e.space,e.curve,e.detail,t]),g.useEffect(()=>{t(n=>(n.meshes.updateUniforms(n),n))},[e.ambiance,e.curve,e.dimensions,e.easing,e.sizeVertex,e.sizeEdge,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.detail,e.matrix,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{const n=new ResizeObserver(()=>{X(e)});return n.observe(e.gl.canvas,{box:"content-box"}),()=>n.disconnect()},[e.gl.canvas]),g.useEffect(()=>{t(n=>(X(n),n))},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.dimensions,e.easing,e.edge,e.error,e.face,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.iteration,e.detail,e.matrix,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.ranges,e.space,e.stellation,e.subsampling,e.sizeVertex,e.sizeEdge,e.polytope,e.vertex,e.zoom])};function Pt({runtime:e,setRuntime:t}){return Mt(e,t),null}function _t({runtime:e,setRuntime:t,rotations:n,updateRotations:i,updateParams:a}){var s,c,f;window.rt=e,window.ro=n;const o=g.useCallback(l=>u=>{t(d=>({...d,error:{[l]:u.message}}))},[t]);return r.jsxs(r.Fragment,{children:[r.jsx(ge,{error:(s=e.error)==null?void 0:s.process,onError:o("process"),children:r.jsx(zt,{runtime:e,setRuntime:t})}),e.space?r.jsxs(r.Fragment,{children:[r.jsx(ge,{error:(c=e.error)==null?void 0:c.render,onError:o("render"),children:r.jsx(Pt,{runtime:e,setRuntime:t})}),r.jsx(ge,{error:(f=e.error)==null?void 0:f.interact,onError:o("interact"),children:r.jsx(Ft,{runtime:e,rotations:n,updateRotations:i,updateParams:a})})]}):null]})}const Lt="modulepreload",kt=function(e,t){return new URL(e,t).href},_e={},Ut=function(t,n,i){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=kt(o,i),o in _e)return;_e[o]=!0;const s=o.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!i)for(let u=a.length-1;u>=0;u--){const d=a[u];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":Lt,s||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),s)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},Bt=r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",strokeWidth:"3",children:[r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m31.376 13.781l-2.673-7.659c-1.554-4.453-7.852-4.453-9.406 0l-4.56 13.067c-.922 2.644 1.04 5.408 3.841 5.408H24"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m15.993 14.24l-8.11.175c-4.716.102-6.663 6.092-2.907 8.946l11.018 8.374c2.23 1.695 5.465.682 6.33-1.982L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m11.675 29.012l-2.34 7.767c-1.36 4.517 3.736 8.219 7.611 5.53l11.369-7.892c2.3-1.597 2.337-4.987.071-6.633L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m24.39 37.683l6.664 4.625c3.875 2.69 8.971-1.012 7.61-5.53l-3.992-13.25c-.807-2.681-4.02-3.764-6.286-2.118L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m36.566 28.27l6.458-4.908c3.756-2.855 1.81-8.845-2.907-8.947l-13.836-.298c-2.8-.06-4.822 2.66-3.956 5.324L24 24.597"})]}),Ht=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("g",{id:"feTarget0",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:r.jsx("g",{id:"feTarget1",fill:"currentColor",fillRule:"nonzero",children:r.jsx("path",{id:"feTarget2",d:"M19.938 13A8.004 8.004 0 0 1 13 19.938V22h-2v-2.062A8.004 8.004 0 0 1 4.062 13H2v-2h2.062A8.004 8.004 0 0 1 11 4.062V2h2v2.062A8.004 8.004 0 0 1 19.938 11H22v2h-2.062ZM12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"})})})}),Vt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"})}),qt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20.777a8.942 8.942 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a8.961 8.961 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A8.954 8.954 0 0 1 10 3.223"})}),Gt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",children:r.jsxs("g",{fill:"none",stroke:"currentColor",children:[r.jsx("path",{strokeLinecap:"round",d:"M13.326 8.5a6.5 6.5 0 1 1-.558-4.5"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 2v2.5H11"})]})}),$t=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:r.jsx("path",{fill:"currentColor",d:"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"})}),Jt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 6v1h.75A3.25 3.25 0 0 1 20 10.25v7.5A3.25 3.25 0 0 1 16.75 21h-9.5A3.25 3.25 0 0 1 4 17.75v-7.5A3.25 3.25 0 0 1 7.25 7H8V6a4 4 0 1 1 8 0ZM9.5 6v1h5V6a2.5 2.5 0 0 0-5 0Zm2.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"})}),Kt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 5a2.5 2.5 0 0 1 5 0v.25a.75.75 0 0 0 1.5 0V5a4 4 0 0 0-8 0v2H7.25A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21h9.5A3.25 3.25 0 0 0 20 17.75v-7.5A3.25 3.25 0 0 0 16.75 7H16V5Zm-4 10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"})}),Wt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})}),Xt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),Yt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),Zt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),Qt=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),er=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),nr=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M14 19V5h4v14zm-8 0V5h4v14z"})}),tr=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"})}),rr=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"})}),ar=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"})});function Se({allowNull:e,name:t,value:n,onChange:i,...a}){const o=g.useCallback(c=>{let{name:f,checked:l}=c.target,u;e?u=n===!1?!0:n?null:!1:u=l,i(f,u)},[e,i,n]),s=g.useRef(null);return g.useLayoutEffect(()=>{e&&s.current&&(n===null?s.current.indeterminate=!0:s.current.indeterminate=!1)},[n,e]),r.jsx("input",{type:"checkbox",ref:s,name:t,checked:n||!1,onChange:o})}function y({type:e,subtype:t,level:n,dimensions:i}){return r.jsxs("span",{className:"space",children:[e===null||e==="indefinite"?"𝕏":e==="affine"?"𝔼":e==="finite"?"𝕊":"ℍ",i?r.jsx("sup",{children:i-1}):null,e==="hyperbolic"?r.jsxs("sub",{children:[{compact:" ",paracompact:"*",lorentzian:"L",superhyperbolic:"**"}[t],n]}):null]})}const or=(...e)=>{if(Array.isArray(e[0]))return{coxeter:e,dimensions:e.length,extended:!0};const t=e.length+1;return{coxeter:new Array(t).fill().map((i,a)=>new Array(t).fill().map((o,s)=>a===s?1:a===s+1||s===a+1?e[V(a,s)]:2)),dimensions:t}},ir=(...e)=>{const t=e.length+1;return{stellation:new Array(t).fill().map((i,a)=>new Array(t).fill().map((o,s)=>a===s?1:a===s+1||s===a+1?e[V(a,s)]:1))}},h=(e,t,n,i)=>{const a=or(...e),{dimensions:o}=a,s={...fe,...a,detail:o>4?"medium":"high",drawVertex:o<=3,drawFace:o<=4,curve:o>3,ambiance:"colorful",matrix:G(o),zoom:o<=3?2:o>4?3:5,centered:!0,...Object.fromEntries(_(3,o+1).map(c=>[`projection${c}`,je(c,o)])),...i||{}};return t?s.mirrors=t:s.mirrors=new Array(o).fill().map((c,f)=>f===0?1:0),n?s.stellation=ir(...n).stellation:s.stellation=new Array(o).fill().map((c,f)=>new Array(o).fill(1)),s},T=e=>({...e,subforms:Object.entries(sr(e.params.dimensions)).map(([t,n])=>({name:`${t} ${e.name}`,params:{...e.params,mirrors:n}}))}),w=(e,t,n,i)=>({...h(e,t,n),ambiance:"plain",drawVertex:!1,curve:!0,detail:"medium",zoom:1,...i}),A=(e,t,n,i)=>({...h(e,t,n),ambiance:"neon",drawFace:!1,drawVertex:!1,centered:!1,sizeEdge:15,zoom:2,...i}),N=(e,t,n,i)=>{const a=h(e,t,n),o=a.matrix.length;return{...a,ambiance:"neon",detail:"medium",drawFace:!1,drawVertex:!1,curve:!0,centered:!1,sizeEdge:o>4?15:25,zoom:1.5,...i}},sr=e=>{if(e===4)return{Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1]};if(e===5)return{Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1]};if(e===6)return{Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(e===7)return{Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(e===8)return{Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(e===9)return{Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},J=[{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:4})," Tesseract"]}),params:h([4,3,3],[1,0,0,0],null,{drawVertex:!0,sizeVertex:40,drawFace:!0,curve:!0,ambiance:"neon",zoom:4.2})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",dimensions:3})," 7-3-2 tiling"]}),params:w([7,3],[1,0,0],null,{drawVertex:!1,drawFace:!0,curve:!0,ambiance:"neon"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:3})," Ideal triangles"]}),params:w([[1,0,0],[0,1,0],[0,0,1]],[0,0,0],null,{drawVertex:!1,drawFace:!0,curve:!0,easing:"quintic",ambiance:"neon",centered:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",dimensions:4})," Inverted honeycomb"]}),params:N([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{projection4:"inverted",ambiance:"disco",zoom:3})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:8})," E6 (1",r.jsx("sub",{children:"22"}),")"]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0],null,{sizeVertex:25,sizeEdge:15,ambiance:"colorful",drawVertex:!0,projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:8})," E8 (4",r.jsx("sub",{children:"21"}),")"]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1],null,{sizeVertex:20,sizeEdge:6,curve:!1,ambiance:"neon",drawVertex:!0,detail:"low",projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",projection7:"orthographic",projection8:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal tetrahedron"]}),params:w([3,3,6],[1,0,0,""],null,{drawVertex:!1,drawFace:!0,curve:!0,centered:!0,detail:"high",easing:"quartic",ambiance:"pure"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Horoball"]}),params:w([6,3,4],[1,0,0,""],null,{drawVertex:!1,drawFace:!0,curve:!0,centered:!1,ambiance:"colorful"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",dimensions:4})," 5-3-4 honeycomb"]}),params:N([5,3,4],[1,0,0,0],null,{zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"lorentzian",level:2,dimensions:4})," ","7-3-3 paracompact honeycomb"]}),params:N([7,3,3],[1,0,0,0],null,{zoom:1.5,drawFace:!0,drawVertex:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Pentahedron"]}),params:w([5,3,6],[1,0,0,""],null,{drawVertex:!1,drawFace:!0,curve:!0,centered:!0,detail:"high",easing:"quartic",ambiance:"pure",zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:4})," Flat Torus"]}),params:h([32,2,32],[1,0,0,1],null,{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",zoom:3,sizeEdge:10})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:5})," Tesseract stack"]}),params:h([[1,2,2,2,0],[2,1,2,2,2],[2,2,1,2,2],[2,2,2,1,2],[0,2,2,2,1]],[1,1,1,1,0],null,{drawVertex:!1,drawFace:!0,ambiance:"neon",sizeEdge:20,projection4:"sterographic"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"superhyperbolic",dimensions:4})," ","Ultrahyperbolic surface (Anti-de Sitter Ads3)"]}),params:h([-1,2,-1],[1,0,0,1],null,{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,sizeEdge:15,zoom:1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"superhyperbolic",dimensions:5})," ","Ultrahyperbolic honeycomb (Anti-de Sitter Ads4)"]}),params:h([-1,3,3,-1],[1,0,0,0,1],null,{drawVertex:!1,drawFace:!1,curve:!0,ambiance:"neon",centered:!1,zoom:2})},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite"})," Spherical space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Tetrahedron",params:h([3,3]),subforms:[{name:"Truncated Tetrahedron",params:h([3,3],[1,1,0])}]},{name:"Cube",params:h([4,3]),subforms:[{name:"Cuboctahedron",params:h([4,3],[0,1,0])},{name:"Truncated Cube",params:h([4,3],[1,1,0])},{name:"Rhombicuboctahedron",params:h([4,3],[1,0,1])},{name:"Truncated Octahedron",params:h([3,4],[1,1,0])},{name:"Truncated Cuboctahedron",params:h([4,3],[1,1,1])},{name:"Octahedron",params:h([3,4])}]},{name:"Dodecahedron",params:h([5,3]),subforms:[{name:"Icosidodecahedron",params:h([5,3],[0,1,0])},{name:"Truncate Dodecahedron",params:h([5,3],[1,1,0])},{name:"Rhombicosidodecahedron",params:h([5,3],[1,0,1])},{name:"Truncate Icosahedron",params:h([3,5],[1,1,0])},{name:"Truncated Icosidodecahedron",params:h([5,3],[1,1,1])},{name:"Icosahedron",params:h([3,5])}]},{name:"Snub Cube",params:h([4,3],["s","s","s"])},{name:"Snub Dodecahedron",params:h([5,3],["s","s","s"])},{name:"Great Dodecahedron",params:h([5,5],[1,0,0],[1,2])},{name:"Great Icosahedron",params:h([3,5],[1,0,0],[1,2])},{name:"Small Stellated Dodecahedron",params:h([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:h([5,3],[1,0,0],[2,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:4})," Polychora"]})},T({name:"5-cell",params:h([3,3,3])}),T({name:"8-cell",params:h([4,3,3])}),T({name:"16-cell",params:h([3,3,4])}),T({name:"24-cell",params:h([3,4,3])}),T({name:"120-cell",params:h([5,3,3])}),T({name:"600-cell",params:h([3,3,5])}),{name:"Snub 24-cell",params:h([[1,3,2,2],[3,1,3,3],[2,3,1,2],[2,3,2,1]],["s","s","s","s"])},{name:"Icosahedral 120-cell",params:h([3,5,5],[1,0,0,0],[1,1,2],{curve:!1}),subforms:[{name:"Small stellated 120-cell",params:h([3,5,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Great 120-cell",params:h([5,5,5],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Grand 120-cell",params:h([5,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{name:"Great stellated 120-cell",params:h([5,3,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Grand stellated 120-cell",params:h([5,5,5],[1,0,0,0],[2,1,2],{curve:!1})},{name:"Great grand 120-cell",params:h([5,5,3],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Great icosahedral 120-cell",params:h([5,5,3],[0,0,0,1],[1,2,1],{curve:!1})},{name:"Great grand stellated 120-cell",params:h([5,3,3],[1,0,0,0],[2,1,1],{curve:!1})}]},{name:"Grand 600-cell",params:h([3,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:5})," Polytera"]})},T({name:"5-simplex",params:h([3,3,3,3])}),T({name:"5-cube",params:h([4,3,3,3])}),T({name:"5-orthoplex",params:h([3,3,3,4])}),T({name:"5-demicube",params:h([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]])}),{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:6})," Polypeta"]})},T({name:"6-simplex",params:h([3,3,3,3,3])}),T({name:"6-cube",params:h([4,3,3,3,3])}),T({name:"6-orthoplex",params:h([3,3,3,3,4])}),T({name:"6-demicube",params:h([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"22"})]}),params:h([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:7})," Polyexa"]})},T({name:"7-simplex",params:h([3,3,3,3,3,3])}),T({name:"7-cube",params:h([4,3,3,3,3,3])}),T({name:"7-orthoplex",params:h([3,3,3,3,3,4])}),T({name:"7-demicube",params:h([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"31"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"32"})]}),params:h([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:8})," Polyzetta"]})},T({name:"8-simplex",params:h([3,3,3,3,3,3,3])}),T({name:"8-cube",params:h([4,3,3,3,3,3,3])}),T({name:"8-orthoplex",params:h([3,3,3,3,3,3,4])}),T({name:"8-demicube",params:h([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"42"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"41"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["4",r.jsx("sub",{children:"21"})]}),params:h([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"finite",dimensions:9}),"Polyyotta"]})},T({name:"9-simplex",params:h([3,3,3,3,3,3,3,3])}),T({name:"9-cube",params:h([4,3,3,3,3,3,3,3])}),T({name:"9-orthoplex",params:h([3,3,3,3,3,3,3,4])}),T({name:"9-demicube",params:h([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]])}),{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine"})," Euclidean space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangle",params:h([[1,3,3],[3,1,3],[3,3,1]],[1,0,0])},{name:"Square",params:h([4,4],[1,0,0])},{name:"Hexagonal",params:h([6,3],[1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:A([4,3,4],[1,0,0,0])},{name:"Octet",params:A([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter cubic",params:A([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:A([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:A([3,3,4,3],[1,0,0,0,0],null,{})},{name:"24-cellic",params:A([3,4,3,3],[1,0,0,0,0],null,{})},{name:"4-simpletic",params:A([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0])},{name:"Quarter tesseractic",params:A([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:6})," 5-Honeycombs"]})},{name:"5-simplex",params:A([[1,3,2,2,2,3],[3,1,3,2,2,2],[2,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[3,2,2,2,3,1]],[1,0,0,0,0,0])},{name:"5-cubic",params:A([4,3,3,3,4],[1,0,0,0,0,0])},{name:"5-demicubic",params:A([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,4],[2,2,2,2,4,1]],[1,0,0,0,0,0])},{name:"Quarter 5-cubic",params:A([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,3],[2,2,2,3,1,2],[2,2,2,3,2,1]],[1,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:7})," 6-Honeycombs"]})},{name:"6-simplex",params:A([[1,3,2,2,2,2,3],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[3,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:"6-cubic",params:A([4,3,3,3,3,4],[1,0,0,0,0,0,0])},{name:"6-demicubic",params:A([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,4],[2,2,2,2,2,4,1]],[1,0,0,0,0,0,0])},{name:"Quarter 6-cubic",params:A([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,3],[2,2,2,2,3,1,2],[2,2,2,2,3,2,1]],[1,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"22"})]}),params:A([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,3,2],[2,2,3,1,3,2,2],[2,2,2,3,1,2,2],[2,2,3,2,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:8})," 7-Honeycombs"]})},{name:"7-simplex",params:A([[1,3,2,2,2,2,2,3],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[3,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:"7-cubic",params:A([4,3,3,3,3,3,4],[1,0,0,0,0,0,0,0])},{name:"7-demicubic",params:A([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,4],[2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0])},{name:"Quarter 7-cubic",params:A([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,3,3,1,3,2,2],[2,2,2,2,3,1,3,3],[2,2,2,2,2,3,1,2],[2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"33"})]}),params:A([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,1,0,0,0])},{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"31"})]}),params:A([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"affine",dimensions:9})," 8-Honeycombs"]})},{name:"8-simplex",params:A([[1,3,2,2,2,2,2,2,3],[3,1,3,2,2,2,2,2,2],[2,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[3,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:"8-cubic",params:A([4,3,3,3,3,3,3,4],[1,0,0,0,0,0,0,0,0])},{name:"8-demicubic",params:A([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,4],[2,2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0,0])},{name:"Quarter 8-cubic",params:A([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,3],[2,2,2,2,2,2,3,1,2],[2,2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"52"})]}),params:A([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"51"})]}),params:A([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["5",r.jsx("sub",{children:"21"})]}),params:A([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,0,1])},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic"})," Hyperbolic space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",dimensions:3})," Tilings"]})},{name:"Order-7 triangular",params:w([3,7],[1,0,0])},{name:"Order-8 triangular",params:w([3,8],[1,0,0])},{name:"Infinite Order triangular",params:w([3,0],[1,0,0],null,{easing:"quintic",detail:"high"})},{name:"Order-5 square",params:w([4,5],[1,0,0])},{name:"Order-6 square",params:w([4,6],[1,0,0])},{name:"Order-7 square",params:w([4,7],[1,0,0])},{name:"Order-8 square",params:w([4,8],[1,0,0])},{name:"Infinite Order square",params:w([4,0],[1,0,0])},{name:"Order-4 pentagonal",params:w([5,4],[1,0,0])},{name:"Order-5 pentagonal",params:w([5,5],[1,0,0])},{name:"Order-6 pentagonal",params:w([5,6],[1,0,0])},{name:"Order-7 pentagonal",params:w([5,7],[1,0,0])},{name:"Order-8 pentagonal",params:w([5,8],[1,0,0])},{name:"Infinite Order pentagonal",params:w([5,0],[1,0,0])},{name:"Order-4 hexagonal",params:w([6,4],[1,0,0])},{name:"Order-5 hexagonal",params:w([6,5],[1,0,0])},{name:"Order-6 hexagonal",params:w([6,6],[1,0,0])},{name:"Order-7 hexagonal",params:w([6,7],[1,0,0])},{name:"Order-8 hexagonal",params:w([6,8],[1,0,0])},{name:"Infinite Order hexagonal",params:w([6,0],[1,0,0])},{name:"Order-3 heptagonal",params:w([7,3],[1,0,0])},{name:"Order-4 heptagonal",params:w([7,4],[1,0,0])},{name:"Order-5 heptagonal",params:w([7,5],[1,0,0])},{name:"Order-6 heptagonal",params:w([7,6],[1,0,0])},{name:"Order-7 heptagonal",params:w([7,7],[1,0,0])},{name:"Order-8 heptagonal",params:w([7,8],[1,0,0])},{name:"Infinite Order heptagonal",params:w([7,0],[1,0,0])},{name:"Order-3 octagonal",params:w([8,3],[1,0,0])},{name:"Order-4 octagonal",params:w([8,4],[1,0,0])},{name:"Order-5 octagonal",params:w([8,5],[1,0,0])},{name:"Order-6 octagonal",params:w([8,6],[1,0,0])},{name:"Order-7 octagonal",params:w([8,7],[1,0,0])},{name:"Order-8 octagonal",params:w([8,8],[1,0,0])},{name:"Infinite Order octagonal",params:w([8,0],[1,0,0])},{name:"Order-3 apeirogonal",params:w([0,3],[1,0,0])},{name:"Order-4 apeirogonal",params:w([0,4],[1,0,0])},{name:"Order-5 apeirogonal",params:w([0,5],[1,0,0])},{name:"Order-6 apeirogonal",params:w([0,6],[1,0,0])},{name:"Order-7 apeirogonal",params:w([0,7],[1,0,0])},{name:"Order-8 apeirogonal",params:w([0,8],[1,0,0])},{name:"Infinite Order apeirogonal",params:w([0,0],[1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"compact",dimensions:4})," Compact Hyperbolic Honeycombs"]})},{name:"Icosahedral",params:N([3,5,3],[1,0,0,0])},{name:"Order-4 dodecahedral",params:N([5,3,4],[1,0,0,0])},{name:"Order-5 dodecahedral",params:N([5,3,5],[1,0,0,0],null,{})},{name:"Alternated Order-5 cubic",params:N([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral cubic",params:N([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],null,{})},{name:"Tetrahedral dodecahedral",params:N([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],null,{})},{name:"Cubic octahedral",params:N([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],null,{})},{name:"Octahedral Dodcahedral",params:N([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],null,{})},{name:"Octahedral Icosahedral",params:N([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],null,{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Paracompact Hyperbolic Honeycombs"]})},{name:"Triangular",params:N([3,6,3],[1,0,0,0],null,{easing:"quintic"})},{name:"Hexagonal",params:N([6,3,3],[1,0,0,0],null,{})},{name:"Order-6 tetrahedral",params:N([3,3,6],[1,0,0,0],null,{easing:"quintic"})},{name:"Alternated Order-6 cubic",params:N([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],null,{easing:"quintic"})},{name:"Order-5 hexagonal",params:N([6,3,5],[1,0,0,0],null,{})},{name:"Alternated Order-5 hexagonal",params:N([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{})},{name:"Order-6 hexagonal",params:N([6,3,6],[0,0,0,1],null,{easing:"quintic"})},{name:"Square",params:N([4,4,3],[1,0,0,0],null,{})},{name:"Alternated square",params:N([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],null,{})},{name:"Order-4 square",params:N([4,4,4],[0,1,0,0],null,{})},{name:"Tetrahedral square",params:N([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],null,{})},{name:"Cubic square",params:N([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],null,{})},{name:"Quarter order square",params:N([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],null,{easing:"quintic"})},{name:"Tetrahedral Hexagonal",params:N([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],null,{})},{name:"Octahedral Hexagonal",params:N([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],null,{})},{name:"Icosahedral Hexagonal",params:N([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],null,{})},{name:"Hexagonal Triangular",params:N([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[0,0,0,1],null,{easing:"quintic"})},{name:"Alternated Hexagonal",params:N([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],null,{})},{name:"Alternated Order-4 Hexagonal",params:N([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],null,{})},{name:"Alternated Order-5 Hexagonal",params:N([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],null,{})},{name:"Runcic Order-6 Hexagonal",params:N([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],null,{})},{name:"Quarter Order-4 hexagonal",params:N([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],null,{})},{name:"Hexagonal",params:N([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],null,{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"lorentzian",level:2,dimensions:4})," ","Level-2 Lorentzian Hyperbolic Honeycombs"]})},{name:"3-3-7",params:N([3,3,7],[1,0,0,0],null,{})},{name:"3-4-7",params:N([3,3,7],[1,0,0,0],null,{})},{name:"3-5-7",params:N([3,5,7],[1,0,0,0],null,{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",dimensions:5})," Compact Hyperbolic 4-Honeycombs"]})},{name:"Order-5 5-cell",params:N([3,3,3,5],[1,0,0,0,0])},{name:"120-cell",params:N([5,3,3,3],[1,0,0,0,0])},{name:"Order-5 tesseratic",params:N([4,3,3,5],[1,0,0,0,0])},{name:"Order-4 120-cell",params:N([4,3,3,5],[1,0,0,0,0])},{name:"Order-5 120-cell",params:N([5,3,3,5],[1,0,0,0,0])},{name:"Small stellated 120-cell",params:N([5,5,3,3],[1,0,0,0,0],[2,1,1,1])},{name:"Pentagrammic-order 600-cell",params:N([3,3,5,5],[1,0,0,0,0],[1,1,1,2])},{name:"Order-5 icosahedral 120-cell",params:N([3,5,5,5],[1,0,0,0,0],[1,1,2,1])},{name:"Great 120-cell",params:N([5,5,5,3],[1,0,0,0,0],[1,2,1,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:5})," ","Paracompact Hyperbolic 4-Honeycombs"]})},{name:"Order-4 24-cell",params:N([3,4,3,4],[1,0,0,0,0],null,{easing:"quintic"})},{name:"Cubic honeycomb",params:N([4,3,4,3],[1,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(y,{type:"hyperbolic",subtype:"paracompact",dimensions:6})," ","Paracompact Hyperbolic 5-Honeycombs"]})},{name:"5-orthoplex",params:N([3,3,3,4,3],[1,0,0,0,0,0],null,{easing:"quintic"})},{name:"24-cell honeycomb",params:N([3,4,3,3,3],[1,0,0,0,0,0])},{name:"16-cell honeycomb",params:N([3,3,4,3,3],[1,0,0,0,0,0],null,{easing:"quintic"})},{name:"Order-4 24-cell honeycomb",params:N([3,4,3,3,4],[1,0,0,0,0,0],null,{easing:"quintic"})},{name:"Tesseratic honeycomb",params:N([4,3,3,4,3],[1,0,0,0,0,0],null,{easing:"quintic"})}],Fe=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(Fe).join("");if(typeof e=="object"&&e)return Fe(e.props.children)},Le=(e,t)=>typeof e=="string"?Fe(e).toLowerCase().includes(t.toLowerCase()):!1,cr=g.memo(function e({name:t,index:n,params:i,search:a,subforms:o=[],sub:s=!1,onPreset:c}){const[f,l]=g.useState(!0),[u,d]=g.useState(!1);return g.useEffect(()=>{if(!a){l(!0),d(!1);return}if(Le(t,a)){l(!0);return}if(o.length&&o.some(({name:m})=>Le(m,a))){l(!0),d(!0);return}l(!1),d(!1)},[t,a,o]),f?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`preset${s?" sub":""}`,onClick:()=>c(i,n),children:[r.jsxs("div",{className:`preset-header preset-name-${o.length?"button":"only"}`,children:[o.length?r.jsx("button",{className:`preset-toggle ${u?"open":"closed"}`,onClick:m=>{m.stopPropagation(),d(!u)},children:u?"-":"+"}):null,r.jsx("span",{className:"preset-name",children:t})]}),r.jsx(Xe,{coxeter:i.coxeter,mirrors:i.mirrors,stellation:i.stellation})]}),u&&o.map((m,p)=>r.jsx(e,{...m,sub:!0,search:a,onPreset:c},p))]}):null});function lr({open:e,onPreset:t,onExportImage:n,closePresets:i}){const[a,o]=g.useState(""),[s,c]=g.useState(""),f=g.useCallback(l=>{c(l.target.value),Fn(o(l.target.value),50)},[]);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`presets-overlay ${e?"shown":"hidden"}`,onClick:i}),r.jsx("div",{className:`presets ${e?"shown":"hidden"}`,children:r.jsxs("div",{className:"presets-modal",children:[r.jsxs("div",{className:"presets-header",children:[r.jsxs("div",{className:"presets-search",children:[r.jsx("input",{type:"text",placeholder:"Search",value:s,onChange:f}),r.jsx("button",{className:"presets-clear",onClick:()=>{o(""),c("")},children:Yt})]}),r.jsxs("div",{className:"presets-actions",children:[r.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:Zt}),r.jsx("button",{className:"presets-action",onClick:n,children:Qt}),r.jsx("button",{className:"presets-action",onClick:i,children:er})]})]}),r.jsx("div",{className:"presets-list",children:J.map(({type:l,content:u,name:d,params:m,subforms:p},v)=>r.jsx(g.Fragment,{children:l==="title"?r.jsx("h2",{children:u}):l==="group"?r.jsx("h4",{children:u}):r.jsx(cr,{name:d,index:v,params:m,search:a,subforms:p,onPreset:t})},v))})]})})]})}const ke=g.memo(function({rotations:t,space:n,axis:i}){if(!n)return null;const a=n.gram.length,o=t.shift*2+i;if(o>=t.combinations.length)return null;let s=t.combinations[o];const c=s.some(u=>u<0)?"parabolic":s.some(u=>n.eigens.values[u]<0)?"hyperbolic":s.some(u=>n.eigens.values[u]===0)?"translation":"spheric",f=On.slice(0,a).split(""),l=c==="parabolic"?s.map(u=>f[B(u)]).join("->"):f.filter((u,d)=>!s.includes(d));return r.jsxs("aside",{className:`${i?"y":"x"}-rotation`,children:[l,c==="parabolic"?r.jsx("sup",{children:"∞"}):c==="hyperbolic"?r.jsx("sup",{children:"†"}):c==="translation"?r.jsx("sup",{children:"0"}):""]})}),ur=e=>e<4?[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7 2m12 9H5v2h14z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})})][e]:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9"}),r.jsx("text",{x:"12",y:"13.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",children:e})]});function fr({runtime:e,setRuntime:t,showUI:n,updateParams:i}){const a=g.useCallback(()=>{e.paused&&e.polytope.size>e.limit&&i({limit:e.limit+e.start}),t(l=>({...l,paused:!l.paused}))},[e.paused,e.polytope.size,e.limit,e.start,t,i]),o=g.useCallback(l=>{const d=l.target.closest("button").dataset.key.split(","),m=!d.some(v=>e.hidden.includes(v)),p=e.hidden.filter(v=>!d.includes(v));i({hidden:m?[...p,...d]:p})},[e.hidden,i]),s=e.polytope.every(l=>l.detail.length<2),c=l=>isFinite(l)?l.toLocaleString():"∞";if(n==="empty")return null;const f=n==="full"?"detail":"aggregated";return r.jsxs("aside",{className:"shape",children:[e.processing?r.jsx("div",{className:"buttons",children:e.paused?r.jsx("button",{className:"iterate button",onClick:a,title:"Resume enumeration",children:tr}):r.jsx("button",{className:"iterate button",onClick:a,title:"Pause enumeration",children:nr})}):null,r.jsx("div",{className:`shape-info${e.processing&&!e.paused?" shape-processing":""}${["advanced","full"].includes(n)?" shape-info-expanded":""}`,children:[...e.polytope].reverse().filter(l=>l).map(l=>r.jsxs(g.Fragment,{children:[r.jsx("div",{className:"shape-icon",style:{gridRow:`span ${l[f].length}`},children:ur(l.dimensions)}),r.jsxs("div",{className:"shape-count",style:{gridRow:`span ${l[f].length}`},children:[l.done||l.processing===void 0?null:`${l.processing} / `,c(l.count)]}),r.jsx("div",{className:l.dimensions>0&&["advanced","full"].includes(n)&&l[f].length>1?" shape-split":"",style:{gridRow:`span ${l[f].length}`}}),["advanced","full"].includes(n)?l[f].map(({count:u,coxeter:d,stellation:m,mirrors:p,key:v})=>r.jsxs(g.Fragment,{children:[r.jsx("div",{className:"shape-count shape-detail-count",title:v,children:!s&&l[f].length>1?c(u):null}),l.dimensions>0?r.jsxs("div",{children:[[1,2].includes(l.dimensions)?r.jsx("button",{className:"shape-hidden button","data-key":v,title:v,onClick:o,children:v.split(",").some(b=>e.hidden.includes(b))?ar:rr}):null,r.jsx("button",{className:"shape-detail-button",disabled:l.dimensions<2,onClick:()=>i({coxeter:d,stellation:m,mirrors:p,dimensions:l.dimensions,matrix:G(l.dimensions)}),children:r.jsx(Xe,{coxeter:d,stellation:m,mirrors:p})})]}):null]},v)):null]},`shape-${l.dimensions}`))})]})}const dr=()=>{try{return localStorage.getItem("showUI")||"simple"}catch(e){return console.error(e),"simple"}};function mr({runtime:e,params:t,rotations:n,setRuntime:i,updateParams:a,updateRotations:o}){var ae;const[s,c]=g.useState(dr),[f,l]=g.useState(!1),[u,d]=g.useState(0),m=g.useCallback(()=>{l(!1)},[]),p=g.useCallback(x=>{let{name:O,value:F}=x.target;a({[O]:F})},[a]),v=g.useCallback((x,O)=>{a({[x]:O})},[a]),b=g.useCallback(()=>c(x=>{const O={simple:"advanced",advanced:"full",full:"empty",empty:"simple"}[x];try{localStorage.setItem("showUI",O)}catch(F){console.error(F)}return O}),[]),j=g.useCallback((x,O)=>{a(x,!0),d(O),m()},[a,m]),E=g.useCallback(()=>{const x=G(e.dimensions);x._reset=!0,a({matrix:x,centered:!0})},[a,e.dimensions]),I=g.useCallback(()=>{const x=G(e.dimensions);x._reset=!0,a({matrix:x,centered:!1})},[a,e.dimensions]),S=g.useCallback(()=>{a(Object.fromEntries(_(3,e.dimensions+1).map(x=>[[`projection${x}`,"orthographic"],[`fov${x}`,90]]).flat()))},[a,e.dimensions]),R=g.useCallback(()=>{a(Object.fromEntries(_(3,e.dimensions+1).map(x=>[`projection${x}`,je(x,e.dimensions)])))},[a,e.dimensions]),M=g.useCallback(x=>{o("shift",(n.shift+1)%n.maxShift)},[n.maxShift,n.shift,o]),L=g.useCallback(x=>{o("lock",!n.lock)},[n.lock,o]),Z=g.useCallback(x=>{o("auto",n.auto==="free"?"damp":"free")},[n.auto,o]),z=g.useCallback(async()=>{m();const x=window.prompt("Select image resolution","5000x5000");if(!x||!x.includes("x")){console.error("Invalid resolution");return}const[O,F]=x.split("x").map($=>parseInt($));if(isNaN(O)||isNaN(F)){console.error("Invalid resolution");return}const De=await(await Ut(()=>import("./export-9709215e.js"),["./export-9709215e.js","./CoxeterDiagram-2e728edf.js"],import.meta.url)).makeBigPng(e,O,F);if(De){const $=document.createElement("a");document.body.appendChild($),$.style.display="none";const fn=window.URL.createObjectURL(De);$.href=fn,$.download=`${document.title}-${O}x${F}`,$.click()}},[m,e]),P=g.useMemo(()=>({square:_(3,e.dimensions+1).some(x=>t[`projection${x}`]!=="orthographic"),cube:_(3,e.dimensions+1).some(x=>t[`projection${x}`]!==je(x,e.dimensions))}),[t.projection3,t.projection4,t.projection5,t.projection6,t.projection7,t.projection8,t.projection9,e.dimensions]);return g.useEffect(()=>{const x=O=>{if(O.key==="ArrowLeft"&&O.ctrlKey&&u>0){let F=u-1;for(;J[F].type;){if(F<2)return;F--}j(J[F].params,F)}else if(O.key==="ArrowRight"&&O.ctrlKey&&u<J.length-1){let F=u+1;for(;J[F].type;){if(F>J.length-2)return;F++}j(J[F].params,F)}};return window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[j,u]),r.jsxs(r.Fragment,{children:[r.jsx(lr,{open:f,onPreset:j,onExportImage:z,closePresets:m}),r.jsxs("main",{className:e.error?"error ui":"ui",title:e.error,children:[r.jsxs("div",{className:"ui-row ui-row-top",children:[["simple","advanced","full"].includes(s)?r.jsxs("aside",{className:"controls",children:[r.jsxs("button",{className:"rotation-button button",onClick:M,title:"Rotation Mode",children:[r.jsx("div",{className:"rotation",style:{transform:`rotate(${n.shift/n.maxShift*360}deg)`},children:Gt}),r.jsx("sup",{children:n.shift+1}),r.jsx(ke,{rotations:n,space:e.space,axis:0}),r.jsx(ke,{rotations:n,space:e.space,axis:1})]}),r.jsxs("div",{className:"subcontrols",children:[r.jsx("button",{className:"button",onClick:L,children:n.lock?Jt:Kt}),r.jsx("button",{className:"button anim-view",onClick:Z,title:"Animate rotations",children:n.auto==="free"?Vt:n.auto==="damp"?qt:"?"}),r.jsx("button",{className:"button",onClick:E,title:"Center View",children:Ht}),r.jsx("button",{className:"button",onClick:I,title:"Coxeter View",children:Bt}),["advanced","full"].includes(s)?r.jsxs(r.Fragment,{children:[P.square&&r.jsx("button",{className:"button",onClick:S,title:"Orthographic",children:Xt}),P.cube&&r.jsx("button",{className:"button",onClick:R,title:"Stereographic",children:Wt})]}):null]})]}):null,["simple","advanced","full"].includes(s)&&r.jsx(Sn,{dimensions:t.dimensions,coxeter:t.coxeter,mirrors:t.mirrors,stellation:t.stellation,extended:t.extended,onChange:v})]}),r.jsxs("div",{className:"ui-row ui-row-middle",children:[r.jsx(fr,{runtime:e,setRuntime:i,showUI:s,updateParams:a}),["advanced","full"].includes(s)&&r.jsxs("aside",{className:"view",children:[r.jsx(Q,{name:"msaaSamples",label:"MSAA",min:0,step:1,max:fe.msaaSamples,value:t.msaaSamples,toggler:t.msaa,togglerName:"msaa",onChange:v}),r.jsx("div",{className:"projection",children:r.jsxs("label",{className:"number-label",children:[r.jsx("span",{className:"number-label",children:"Detail"}),r.jsxs("label",{className:"boolean-label",children:[r.jsx(Se,{name:"adaptative",value:t.adaptative,onChange:v}),"Auto"]}),r.jsx("select",{name:"detail",value:t.detail,onChange:p,children:W.map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,O=>O.toUpperCase())},x))})]})}),s==="full"&&r.jsx(Q,{name:"subsampling",label:"subsampling",min:.1,step:.1,value:t.subsampling,onChange:v}),t.dimensions>=3?_(3,t.dimensions+1).map(x=>r.jsxs("div",{className:"projection",children:[s==="full"&&r.jsx(Q,{label:`${x}D FOV`,name:`fov${x}`,step:1,value:t[`fov${x}`],onChange:v}),r.jsxs("label",{className:"number",children:[r.jsxs("span",{className:"number-label",children:[x,"D Projection"]}),r.jsx("select",{name:`projection${x}`,value:t[`projection${x}`],onChange:p,children:[...Ye.filter((O,F)=>{var pe;return x===3&&e.dimensions===3&&((pe=e.space)==null?void 0:pe.curvature)<0||F<8})].map(O=>r.jsx("option",{value:O,children:O.replace(/_/g," ").replace(/./,F=>F.toUpperCase())},O))})]})]},x)):null]})]}),r.jsxs("div",{className:"ui-row ui-row-bottom",children:[["simple","advanced","full"].includes(s)?r.jsx("button",{className:"preset-button button",onClick:()=>l(x=>!x),title:"Presets",children:$t}):null,["advanced","full"].includes(s)&&r.jsxs("aside",{className:"parameters",children:[(ae=e.space)!=null&&ae.curvature?r.jsxs("label",{className:"boolean-label",children:["Normalize",r.jsx(Se,{name:"curve",value:t.curve,onChange:v})]}):null,s==="full"&&r.jsxs("label",{className:"select-label",children:["Easing",r.jsx("select",{name:"easing",value:t.easing,onChange:p,children:Ze.map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/\b./g,O=>O.toUpperCase())},x))})]}),r.jsx(Q,{name:"sizeVertex",label:"Vertices",min:0,step:1,value:t.sizeVertex,toggler:t.drawVertex,togglerName:"drawVertex",onChange:v}),r.jsx(Q,{name:"sizeEdge",label:"Edges",min:0,step:1,value:t.sizeEdge,toggler:t.drawEdge,togglerName:"drawEdge",onChange:v}),r.jsxs("label",{className:"boolean-label",children:["Faces",r.jsx(Se,{name:"drawFace",value:t.drawFace,onChange:v})]}),r.jsxs("label",{className:"select-label",children:["Ambiance",r.jsx("select",{name:"ambiance",value:t.ambiance,onChange:p,children:(s==="full"?Object.keys(Y):Object.entries(Y).filter(([x,{extended:O}])=>!O||x===t.ambiance).map(([x])=>x)).map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,O=>O.toUpperCase())},x))})]})]}),s==="empty"?r.jsx("div",{className:"spacer"}):null,r.jsx("button",{className:`space-button button${e.processing&&!e.paused?" processing":""}${s==="empty"?" empty":""}`,onClick:b,children:r.jsx(y,{...e.space||{},dimensions:e.dimensions})})]})]})]})}function vr({params:e,updateParams:t}){const[n,i]=g.useState({...e,space:null,shape:null,processing:!0,iteration:0,polytope:[],shaper:null,paused:!1,error:null});g.useEffect(()=>{i(f=>{try{return f.gl?f:It(f)}catch(l){return console.error(l),{...f,error:l.message}}})},[n.gl]);const[a,o]=g.useState({shift:0,maxShift:0,combinations:[],auto:"damp",lock:!1});g.useEffect(()=>{i(f=>({...f,...de(e).params}))},[e]),g.useEffect(()=>{n.space&&o(f=>({...f,shift:0,...kn(e.dimensions,n.space)}))},[e.dimensions,n.space]);const s=g.useCallback((f,l)=>{o(u=>({...u,[f]:l}))},[o]),c=g.useRef({previous:null,anteprevious:null,start:null,stable:!1});return g.useEffect(()=>{c.current={previous:null,anteprevious:null,stable:!1,start:null}},[n.space,n.shaper,e.ambiance]),g.useEffect(()=>{const f=16.666666666666668;if(e.adaptative){let l=null,u=null,d=[];const m=20,p=10,v=b=>{if(u===null){c.current.start===null&&(c.current.start=b),u=b,l=requestAnimationFrame(v);return}if(d.push(b-u),u=b,d.length>Ke(m,p)&&d.shift(),d.length>=p&&d.slice(-p).reduce((E,I)=>E+I,0)/p>(c.current.stable?2.01:1.51)*f){d=[],c.current.stable=!1;const E=W.indexOf(e.detail);E>1&&(c.current.anteprevious=c.current.previous,c.current.previous=e.detail,t({detail:W[E-1]}))}if(d.length>=m&&d.slice(-m).reduce((E,I)=>E+I,0)/m<(c.current.stable?1.001:1.01)*f){d=[],c.current.stable=!1;const E=W.indexOf(e.detail);if(E<W.length-2){const I=W[E+1];I===c.current.previous&&e.detail===c.current.anteprevious&&b-c.current.start>1e3?c.current.stable=!0:(c.current.anteprevious=c.current.previous,c.current.previous=e.detail,t({detail:I}))}}l=requestAnimationFrame(v)};return l=requestAnimationFrame(v),()=>cancelAnimationFrame(l)}},[e.detail,e.adaptative,e.ambiance,n.space,t]),n.gl?r.jsxs(r.Fragment,{children:[r.jsx(mr,{runtime:n,params:e,rotations:a,setRuntime:i,updateRotations:s,updateParams:t}),r.jsx(_t,{runtime:n,rotations:a,setRuntime:i,updateRotations:s,updateParams:t})]}):null}const pr=e=>{const t=e.toUpperCase();return e===t?e.toLowerCase():t},U=(e,t)=>{let n=t,i=0;for(;e.quotientMap[n];)i++,n=e.quotientMap[n];return i>1&&(e.quotientMap[t]=n),n},ln=(e,t,n)=>{const i=t,a=[[t,n]];for(;a.length>0;)if([t,n]=a.pop(),t>n&&([t,n]=[n,t]),t=U(e,t),n=U(e,n),t!==n){e.quotientMap[n]=t,e.seen.has(n)&&!e.seen.has(t)&&e.seen.add(t);const o=e.cosets.get(t),s=e.cosets.get(n);e.cosets.delete(n);for(const[c,f]of s)o.has(c)?a.push([o.get(c),f]):o.set(c,f)}return U(e,i)},Ue=(e,t,n,i)=>{t=U(e,t);const a=e.cosets.get(t);a.has(n)?ln(e,a.get(n),i):a.set(n,i)},ve=(e,t,n,i)=>{t=U(e,t);let a;const o=e.cosets.get(t);return o.has(n)?(a=U(e,o.get(n)),i!==void 0&&a!==i&&ln(e,i,a)):(i?a=i:(a=e.nextVertex++,e.cosets.set(a,new Map),e.unvisited.push(a)),Ue(e,t,n,a),Ue(e,a,pr(n),t)),a},Be=function(e,t,n){let i=n;for(let a=t.length-1;a>0;a--)i=ve(e,i,t[a]);ve(e,i,t[0],n)},hr=function(e){if(!e.words){const t=U(e,1);e.words=new Map,e.words.set(t,""),e.currentWords=new Map,e.currentWords.set(t,""),e.lastCoset=t,e.remaining=[t],e.rootVertex&&e.rootNormals&&e.metric&&(e.vertices=new Map,e.vertices.set(t,e.rootVertex))}for(;e.remaining.length>0;){const t=e.remaining[0],n=U(e,t),i=e.cosets.get(n),a=e.words.get(n);if(i.size<e.gens.length*2)return;const o=[];for(let s=0;s<e.gens.length;s++){const c=e.gens[s],f=U(e,i.get(c));if(!e.words.has(f)){if(e.cosets.get(f).size<e.gens.length*2)return;o.push([c,f])}}e.remaining.shift();for(let s=0;s<o.length;s++){const[c,f]=o[s],l=c+a;if(e.words.set(f,l),e.currentWords.set(f,l),e.lastCoset=f,e.remaining.push(f),e.vertices){let u=e.vertices.get(n);for(let d=0;d<e.transforms[c].length;d++){const m=e.transforms[c][d];u=Dn(u,e.rootNormals[m],e.metric)}e.vertices.set(f,u)}}}},gr=e=>{if(!e.cosets){e.unvisited=[1],e.cosets=new Map([[1,new Map]]),e.nextVertex=2,e.seen=new Set,e.quotientMap={};for(let t=0;t<e.subgens.length;t++)Be(e,e.subgens[t],1)}e.limit=e.limit||1e3,e.done=!1;for(let t=0;t<e.limit;t++){let n=null;for(;e.unvisited.length>0;){const i=U(e,e.unvisited.shift());if(!e.seen.has(i)){e.seen.add(i),n=i;break}}if(n===null){e.done=!0;break}for(let i=0;i<e.gens.length;i++)ve(e,n,e.gens[i].toUpperCase()),ve(e,n,e.gens[i]);for(let i=0;i<e.rels.length;i++)Be(e,e.rels[i],n)}},un=e=>(gr(e),hr(e),e),He=()=>{const{location:e}=window;if(e.hash)try{const t=JSON.parse(atob(e.hash.slice(1)));return de({...fe,...t}).params}catch(t){console.warn(t),e.hash=""}return de(fe).params},xr=e=>{const t="#"+btoa(JSON.stringify(Object.fromEntries(Object.entries(e).filter(([n,i])=>!["matrix","detail"].includes(n)))));t!==window.location.hash&&window.history.pushState(null,null,t)},br=()=>{const[e,t]=g.useState(He()),n=g.useCallback(a=>{const o=He();o&&(Object.entries(o).forEach(([s,c])=>{Array.isArray(c)&&Ae(c,e[s])&&(o[s]=e[s])}),t(o))},[e]),i=g.useCallback((a,o=!1)=>{t(s=>{if(!Object.entries(a).filter(([l,u])=>Array.isArray(u)&&!u._reset?!Ae(u,s[l]):s[l]!==u).length)return s;const{params:c,badParams:f}=de(o?a:{...s,...a},o?[]:Object.keys(a),s);return f.length||xr(c),c})},[]);return g.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),r.jsx(vr,{params:e,updateParams:i})};yn.createRoot(document.getElementById("root")).render(r.jsx(br,{}));window.ToddCoxeter=un;window.bench=()=>{const e=performance.now(),t=un({gens:"abcdef",subgens:"c",rels:["aa","bb","cc","dd","ee","ff","abababab","acac","bcbcbc","adad","bdbd","cdcdcd","aeae","bebe","cece","dedede","afaf","bfbf","cfcf","dfdf","efefef"],limit:1e5});return console.log(performance.now()-e,t.words.length),t.tc};export{In as c,X as r};
