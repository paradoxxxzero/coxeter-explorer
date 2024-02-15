import{r as g,m as Le,d as se,a as qe,p as vn,b as hn,s as _n,c as Fn,e as Mn,f as X,g as Ce,T as _e,h as pe,P as Y,t as G,i as q,j as xn,k as ae,l as J,n as he,o as Pn,q as Fe,u as We,v as ce,w as zn,x as K,y as xe,z as gn,A as fe,B as Un,C as kn,D as Ln,E as Hn,F as Bn,G as $n,H as Vn,I as Gn,J as Xn,K as r,L as ge,M as be,N as Me,O as bn,Q as qn,R as En,S as Wn,U as V,V as Je,W as Jn,X as Ee,Y as Kn,Z as Yn,_ as Zn,$ as Ke}from"./CoxeterMatrix-62799d22.js";var Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function et(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const nt=(e,t)=>{const n=g.useRef({previous:null,anteprevious:null,start:null,stable:!1});g.useEffect(()=>{const o=16.666666666666668;if(e.adaptative){let a=null,i=null,s=[];const u=20,f=10,c=l=>{if(i===null){n.current.start===null&&(n.current.start=l),i=l,a=requestAnimationFrame(c);return}if(s.push(l-i),i=l,s.length>Le(u,f)&&s.shift(),s.length>=f&&s.slice(-f).reduce((p,v)=>p+v,0)/f>(n.current.stable?2.01:1.51)*o){s=[],n.current.stable=!1;const p=se.indexOf(e.detail);if(p>1){n.current.anteprevious=n.current.previous,n.current.previous=e.detail;const v=se[p-1];t(h=>({...h,detail:v}))}}if(s.length>=u&&s.slice(-u).reduce((p,v)=>p+v,0)/u<(n.current.stable?1.001:1.01)*o){s=[],n.current.stable=!1;const p=se.indexOf(e.detail);if(p<se.length-2){const v=se[p+1];v===n.current.previous&&e.detail===n.current.anteprevious&&l-n.current.start>1e3?n.current.stable=!0:(n.current.anteprevious=n.current.previous,n.current.previous=e.detail,t(h=>({...h,detail:v})))}}a=requestAnimationFrame(c)};return a=requestAnimationFrame(c),()=>cancelAnimationFrame(a)}},[e.detail,e.adaptative,e.ambiance,e.space,t]),g.useEffect(()=>{n.current={previous:null,anteprevious:null,stable:!1,start:null}},[e.space,e.shaper,e.ambiance])};class Se extends g.Component{constructor(t){super(t),this.state={error:!1}}static getDerivedStateFromError(t){return{error:!0}}static getDerivedStateFromProps(t){return{error:t.error}}componentDidCatch(t,n){this.props.onError(t,n)}render(){return this.state.error?null:this.props.children}}var Nn={exports:{}};(function(e,t){(function(n,o){e.exports=o()})(Qn,function(){var n=function(){function o(v){return s.appendChild(v.dom),v}function a(v){for(var h=0;h<s.children.length;h++)s.children[h].style.display=h===v?"block":"none";i=v}var i=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(v){v.preventDefault(),a(++i%s.children.length)},!1);var u=(performance||Date).now(),f=u,c=0,l=o(new n.Panel("FPS","#0ff","#002")),m=o(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=o(new n.Panel("MB","#f08","#201"));return a(0),{REVISION:16,dom:s,addPanel:o,showPanel:a,begin:function(){u=(performance||Date).now()},end:function(){c++;var v=(performance||Date).now();if(m.update(v-u,200),v>f+1e3&&(l.update(1e3*c/(v-f),100),f=v,c=0,p)){var h=performance.memory;p.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return v},update:function(){u=this.end()},domElement:s,setMode:a}};return n.Panel=function(o,a,i){var s=1/0,u=0,f=Math.round,c=f(window.devicePixelRatio||1),l=80*c,m=48*c,p=3*c,v=2*c,h=3*c,E=15*c,w=74*c,N=30*c,R=document.createElement("canvas");R.width=l,R.height=m,R.style.cssText="width:80px;height:48px";var I=R.getContext("2d");return I.font="bold "+9*c+"px Helvetica,Arial,sans-serif",I.textBaseline="top",I.fillStyle=i,I.fillRect(0,0,l,m),I.fillStyle=a,I.fillText(o,p,v),I.fillRect(h,E,w,N),I.fillStyle=i,I.globalAlpha=.9,I.fillRect(h,E,w,N),{dom:R,update:function(_,$){s=Math.min(s,_),u=Math.max(u,_),I.fillStyle=i,I.globalAlpha=1,I.fillRect(0,0,l,E),I.fillStyle=a,I.fillText(f(_)+" "+o+" ("+f(s)+"-"+f(u)+")",p,v),I.drawImage(R,h+c,E,w-c,N,h,E,w-c,N),I.fillRect(h+w-c,E,c,N),I.fillStyle=i,I.globalAlpha=.9,I.fillRect(h+w-c,E,c,f((1-_/$)*N))}}},n})})(Nn);var tt=Nn.exports;const at=et(tt),Ie=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),P=(e,t,n)=>{let o,a,i;if(t===0)o=a=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,u=2*n-s;o=Ie(u,s,e+1/3),a=Ie(u,s,e),i=Ie(u,s,e-1/3)}return[o,a,i]},me=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],rt={background:[0,0,0,1],glow:!1,shading:"ads",diffuse:"lambert",specular:!1,shininess:32,opacity:1,ambient:.2,metalness:.2,roughness:.85,gouraud:!1,transparency:"oit",color:({word:e})=>P(e.length*.03%1,.75,.7)},k=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},shading:!1,face:{opacity:.025},transparency:"blend",color:({word:e,dual:t})=>P((e.length*.17-(t?.43:0))%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,diffuse:"fresnel",opacity:.025},transparency:"blend",color:({word:e})=>P(...me[e.length%me.length])},cathedral:{background:[.6,.6,.6,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},shading:!1,face:{opacity:.9},transparency:"oit",color:({word:e,subShape:t,type:n})=>n==="face"?P((t*.23+e.length*.07)%1,1,.58):[0,0,0]},lights:{background:[.6,.6,.6,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},envmap:"lights",metalness:1,color:()=>[0,0,0]},synthwave:{background:[...P(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},shading:!1,face:{opacity:.015},afterImage:.7,transparency:"blend",color:({word:e})=>P((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e,dual:t})=>P(e.length*.03%1-(t?.25:0),1,.8)},shiny:{background:[0,0,0,1],diffuse:"lambert",specular:"blinn-phong",shininess:32,opacity:1,ambient:.2,gouraud:!1,envmap:"home",metalness:1,skybox:"home",color:()=>[0,0,0]},flare:{background:[1,1,1,1],transparency:"blend",diffuse:"cel",face:{opacity:.6,gouraud:!1},color:({word:e})=>P(e.length*.09%1,1,.8)},shape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({subShape:e,type:t})=>t!=="vertex"?P(e*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],transparency:"blend",diffuse:"cel",face:{opacity:.6,gouraud:!1},color:({word:e,type:t,dimensions:n,hidden:o})=>{const a=e.length?qe(e[e.length-1])/n:0;return P(a%1,1,t==="face"?.6:o.includes("face")?.8:0)}},harlequin:{background:[...P(240/360,.23,.09),1],face:{opacity:.6},transparency:"oit",tesselation:"full",color:({word:e,faceIndex:t})=>{const n=e.split("").map(a=>qe(a)).reduce((a,i)=>a+i,0),o=[...me[n%me.length]];return t%2===e.length%2&&(o[2]*=.5),P(...o)}},pure:{background:[0,0,0,1],color:({word:e})=>P(e.length*.03%1,.75,.7)},fabric:{background:[1,1,1,1],texture:"fabric",ambient:.4,color:({word:e,type:t,hidden:n})=>P(e.length*.06%1,1,t==="face"?.6:n.includes("face")?.8:.05)},bricks:{background:[1,1,1,1],glow:!1,texture:"bricks",ambient:.4,diffuse:"oren-nayar",specular:"cook-torrance",color:()=>[1,1,1]},facets:{background:[0,0,0,1],color:({faceIndex:e,faceSize:t})=>P((e||0)/(t||1),.75,.7)},monochrome:{background:[.12,.12,.12,1],diffuse:"reverse",ambient:0,face:{opacity:.1},transparency:"oit",color:()=>[1,1,1]},glass:{background:[0,0,0,1],transparency:"blend",opacity:.2,ambient:0,diffuse:"fresnel",specular:"blinn-phong",face:{shininess:16,diffuse:!1},color:({subShape:e,word:t,type:n})=>n!=="vertex"?P((e*.21+t.length*.03)%1,1,.8):[1,1,1]},checkerboard:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",ambient:.3,shininess:32,reversed:!0,tesselation:"full",color:({parity:e})=>e?[0,0,0]:[1,1,1]},plain:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e,type:t,hidden:n})=>P(e.length*.06%1,1,t==="face"?.6:n.includes("face")?.5:.05)},plainblack:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e,type:t})=>t==="face"?new Array(3).fill(1-vn(.9,e.length+1)):[0,0,0]},normals:{extended:!0,background:[1,1,1,1],shading:"normal",color:()=>[0,0,0]},uvs:{extended:!0,background:[1,1,1,1],shading:"uv",color:()=>[0,0,0]}}).map(([e,t])=>[e,{...rt,...t,transparent:{}}])),y=(e,t)=>t==="env"?`https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/${e}.jpg`:`https://dl.polyhaven.org/file/ph-assets/Textures/jpg/4k/${e}/${e}_${t}_4k.jpg`,ot={fabric:{albedo:y("fabric_pattern_07","col_1"),normal:y("fabric_pattern_07","nor_gl"),arm:y("fabric_pattern_07","arm")},rag:{albedo:y("fabric_pattern_05","col_01"),normal:y("fabric_pattern_05","nor_gl"),arm:y("fabric_pattern_05","arm")},bricks:{albedo:y("random_bricks_thick","diff"),normal:y("random_bricks_thick","nor_gl"),displacement:y("random_bricks_thick","disp"),arm:y("random_bricks_thick","arm")},denim:{albedo:y("denmin_fabric_02","diff"),normal:y("denmin_fabric_02","nor_gl"),arm:y("denmin_fabric_02","arm")},plank:{albedo:y("brown_planks_07","diff"),normal:y("brown_planks_07","nor_gl"),displacement:y("brown_planks_07","disp"),arm:y("brown_planks_07","arm")},rock:{albedo:y("aerial_rocks_02","diff"),normal:y("aerial_rocks_02","nor_gl"),displacement:y("aerial_rocks_02","disp"),arm:y("aerial_rocks_02","arm")},wood:{albedo:y("wood_cabinet_worn_long","diff"),normal:y("wood_cabinet_worn_long","nor_gl"),displacement:y("wood_cabinet_worn_long","disp"),arm:y("wood_cabinet_worn_long","arm")},leather:{albedo:y("brown_leather","albedo"),normal:y("brown_leather","nor_gl"),displacement:y("brown_leather","disp"),arm:y("brown_leather","arm")},pebbles:{albedo:y("ganges_river_pebbles","diff"),normal:y("ganges_river_pebbles","nor_gl"),displacement:y("ganges_river_pebbles","disp"),arm:y("ganges_river_pebbles","arm")},metal:{albedo:y("metal_plate","diff"),normal:y("metal_plate","nor_gl"),displacement:y("metal_plate","disp"),arm:y("metal_plate","arm")}},st={bay:y("golden_bay","env"),circus:y("circus_arena","env"),corridor:y("large_corridor","env"),garden:y("studio_garden","env"),home:y("cayley_interior","env"),lights:y("studio_small_02","env"),lounge:y("aft_lounge","env"),night:y("moonless_golf","env"),pool:y("pool","env"),room:y("small_empty_room_1","env"),shell:y("acoustical_shell","env"),sky:y("kloofendal_48d_partly_cloudy_puresky","env"),studio:y("neon_photostudio","env"),teufelsberg:y("teufelsberg_roof","env"),umbrellas:y("outdoor_umbrellas","env")},it=`const vec2 cone = vec2(1., 0);
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
`,ct=`// Global vertex uniforms

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

vecN vecNFromVec3(in vec3 v) {
  vecN r;
  nset(r, 0, v.x);
  nset(r, 1, v.y);
  nset(r, 2, v.z);
  return r;
}

vec3 vec3FromVecN(in vecN v) {
  return vec3(nget(v, 0), nget(v, 1), nget(v, 2));
}
`,lt=`#ifdef OIT
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
`,dt=`#version 300 es
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
`,ut=`float len(in float v) {
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
const float idealBound = 1e6;

vecN nmix(in vecN a, in vecN b, in float t) {
  #if CURVATURE < 0
  // When a point is ideal we can't be linear in intrapolation
  float lena = len(a);
  float lenb = len(b);
  float order = getOrder(max(lena, lenb));

  if(lena > idealBound && lenb > idealBound) {
    t = easeInOut(t, order);
    return nadd(nmul(a, (1. - t)), nmul(b, t));
  }
  if(lena > idealBound) {
    t = 1. - pow(t, order + 4.);
    // WTF, without this useless line it does not work
    return nadd(nmul(a, (1. - t)), nmul(b, t));
  }
  if(lenb > idealBound) {
    t = pow(t, order + 4.);
    return nadd(nmul(a, (1. - t)), nmul(b, t));
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
    // a, b, c -> b, c, a
    vecN tmp = a;
    a = b;
    b = c;
    c = tmp;

  } else if(lena > idealBound && lenc < idealBound) {
    // a, b, c -> c, a, b
    vecN tmp = a;
    a = c;
    c = b;
    b = tmp;
  }
  float lenmax = max(max(lena, lenb), lenc);
  float order = getOrder(lenmax);

  if(lenmax > idealBound) {
    t.x = easeInOut(t.x, order);
    t.y = easeInOut(t.y, order);
  }
  #endif

  vecN ab = nsub(b, a);
  vecN ac = nsub(c, a);
  return nadd(a, nadd(nmul(ab, t.x), nmul(ac, t.y)));
}
`,ft=`#ifdef ENVMAP
uniform samplerCube envMap;
#endif

#ifdef TEXTURE
uniform sampler2D albedoMap;
uniform sampler2D normalMap;
uniform sampler2D armMap;
#endif

const float ambient = AMBIENT;
const float shininess = SHININESS;
const float opacity = OPACITY;

vec3 rgbToHsl(vec3 c) {
  vec4 K = vec4(0., -1. / 3., 2. / 3., -1.);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6. * d + e)), d / (q.x + e), (q.x + q.y) * .5);
}

vec3 hslToRgb(vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6. + vec3(0., 4., 2.), 6.) - 3.) - 1., 0., 1.);
  return c.z + c.y * (rgb - .5) * (1. - abs(2. * c.z - 1.));
}

vec3 hueRotate(vec3 color, float hue) {
  vec3 hsl = rgbToHsl(color);
  hsl.x += hue;
  return hslToRgb(hsl);
}

#ifdef TEXTURE
mat3 getTangentFrame(vec3 eye_pos, vec3 normal, vec2 uv) {
	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180
  vec3 q0 = dFdx(eye_pos);
  vec3 q1 = dFdy(eye_pos);
  vec2 st0 = dFdx(uv);
  vec2 st1 = dFdy(uv);

  vec3 N = normal;

  vec3 q1perp = cross(q1, N);
  vec3 q0perp = cross(N, q0);

  vec3 T = q1perp * st0.x + q0perp * st1.x;
  vec3 B = q1perp * st0.y + q0perp * st1.y;

  float det = max(dot(T, T), dot(B, B));
  float scale = (det == 0.0) ? 0.0 : inversesqrt(det);

  return mat3(T * scale, B * scale, N);
}
#endif

float getDiffuse(in vec3 normal, in vec2 uv, in vec3 lightDirection, in vec3 eyeDirection, inout vec4 color) {
  #ifdef DIFFUSE
  // Diffuse
  #if DIFFUSE == 0
  // Lambert
  return abs(dot(normal, lightDirection));
  #elif DIFFUSE == 1
  // Oren-Nayar

  const float albedo = 1.;

  float LdotV = abs(dot(lightDirection, eyeDirection));
  float NdotL = abs(dot(lightDirection, normal));
  float NdotV = abs(dot(normal, eyeDirection));

  float s = LdotV - NdotL * NdotV;
  float t = mix(1.0, max(NdotL, NdotV), step(0.0, s));
  #ifdef TEXTURE
  float roughness = texture(armMap, uv).g;
  #else
  float roughness = ROUGHNESS;
  #endif
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

float getSpecular(in vec3 normal, in vec2 uv, in vec3 lightDirection, in vec3 eyeDirection, in vec4 color) {
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

  #ifdef TEXTURE
  float roughness = texture(armMap, uv).g;
  #else
  float roughness = ROUGHNESS;
  #endif
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
  vec4 albedo = vec4(rgb, opacity);

  vec3 eyeDirection = eye - position;
  eyeDirection = normalize(eyeDirection);

  #ifdef REVERSED
  if(dot(eyeDirection, normal) < 0.) {
    albedo.xyz = vec3(1.) - rgb;
  }
  #endif

  #ifdef ENVMAP
  vec4 envColor = texture(envMap, reflect(-eyeDirection, normal));
  // #ifdef TEXTURE
  // float metalness = texture(armMap, uv).b;
  // #else
  float metalness = METALNESS;
  // #endif
  albedo = vec4(mix(albedo.xyz, envColor.xyz, metalness), albedo.a);
  #endif
  #ifdef TEXTURE
  vec4 texAlbedo = texture(albedoMap, uv);
  // Get albedo hue
  if(albedo.rgb != vec3(1.)) {
    vec3 hsl = rgbToHsl(albedo.rgb);
  // Apply albedo hue to texture albedo
    vec3 texHsl = rgbToHsl(texAlbedo.rgb);
    texHsl.r = hsl.r;
    albedo.rgb = hslToRgb(texHsl);
  } else {
    albedo.rgb = texAlbedo.rgb;
  }
  mat3 tbn = getTangentFrame(eyeDirection, normal, uv);
  vec3 map = texture(normalMap, uv).xyz * 2. - 1.;
  normal = normalize(tbn * map);
  #endif
  #if !defined(DIFFUSE) && !defined(SPECULAR)
  return albedo;
  #else 
  float diffuse = 0.;
  float specular = 0.;
  vec3 lightDirection = eyeDirection;

  // ADS Ambient, Diffuse, Specular
  diffuse = getDiffuse(normal, uv, lightDirection, eyeDirection, albedo);
  specular = getSpecular(normal, uv, lightDirection, eyeDirection, albedo);

  #ifdef DIFFUSE
  #if DIFFUSE == 4
  albedo.a += specular;
  #endif
  #endif

  vec4 color = vec4((ambient + diffuse + specular) * albedo.rgb, albedo.a);
  #ifdef TEXTURE
  vec4 arm = texture(armMap, uv);
  color.rgb *= arm.r;
  #endif
  return color;
  #endif
  #elif SHADING == 1
  // Normal
  return vec4(normal * .5 + .5, opacity);
  #elif SHADING == 2
  // Position
  return vec4(position * .5 + .5, opacity);
  #elif SHADING == 3
  // Uvs
  return vec4(uv.xy, 0., opacity);
  #endif
  return vec4(rgb, opacity);
}
`,mt=`#include helpers
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
`,pt=`#ifdef SHADING
vPosition = proj;
vNormal = norm;
vUv = uv;

#if (defined(TEXTURE) || (defined(SHADING) && SHADING > 0)) && DIMENSIONS >= 2
#ifdef EDGE
if(thickness < 45.) {
float repeat = 45. - thickness;
vUv.y = (2. * abs(vUv.y * repeat - floor(vUv.y * repeat + .5)));
}
#endif

#ifdef FACE
vec2 thetas = TAU * triangulation;
vec2 u = vec2(cos(thetas.x), sin(thetas.x));
vec2 v = vec2(cos(thetas.y), sin(thetas.y));

#if TESSELATION == 1
// We have right triangles so we need to adjust the u and v vectors
float f = cos(thetas.y - thetas.x);
if(gl_InstanceID % 2 == (sign(thetas.y - thetas.x) > 0. ? 1 : 0)) {
u *= f;
} else {
v *= f;
}
#endif

vec2 p = vUv.x * u + vUv.y * v;
vUv = .5 * (p + 1.);
#endif

#endif

#ifdef FACE
#ifdef TEXTURE
vPosition += vNormal * texture(displacementMap, vUv).r * .05;
#endif
#endif

gl_Position = viewProject(vPosition);
#else 
gl_Position = viewProject(proj);
#endif

#if defined(SHADING) && defined(GOURAUD)
vColor = light(vPosition, vNormal, color, vUv);
#else
vColor = color;

#endif
`,vt=`#ifdef TEXTURE
uniform sampler2D displacementMap;
#endif

#ifdef SHADING
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
`,ht=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`,xt=`#version 300 es
precision highp float;

uniform sampler2D hdri;
uniform int part;

in vec2 uv;
out vec4 fragColor;
const float PI = 3.14159265359;

vec3 uvToXYZ(int face, vec2 uv) {
  if(face == 0)
    return vec3(1., uv.y, -uv.x);

  else if(face == 1)
    return vec3(-1., uv.y, uv.x);

  else if(face == 2)
    return vec3(+uv.x, -1., +uv.y);

  else if(face == 3)
    return vec3(+uv.x, 1., -uv.y);

  else if(face == 4)
    return vec3(+uv.x, uv.y, 1.);

  else //if(face == 5)
  {
    return vec3(-uv.x, +uv.y, -1.);
  }
}
vec2 dirToUV(vec3 dir) {
  return vec2(0.5 + 0.5 * atan(dir.z, dir.x) / PI, 1. - acos(dir.y) / PI);
}

void main() {
  vec3 scan = uvToXYZ(part, uv * 2. - 1.);
  vec3 direction = normalize(scan);
  vec2 src = dirToUV(direction);

  fragColor = vec4(texture(hdri, src).rgb, 1.);
}
`,gt={globals:dt,dimensions:ct,project:mt,helpers:ut,complex:it,fragment:lt,vertexouthead:vt,lighting:ft,vertexout:pt},bt=(e,t,n)=>{t=n?1:t||1,t=Math.max(0,t);const o=n?n.width:e.clientWidth*t|0,a=n?n.height:e.clientHeight*t|0;return e.width!==o||e.height!==a?(e.width=o,e.height=a,!0):!!n},je=(e,t)=>e.replace(/\bvecN\b/g,`vec${t}`).replace(/\bmatN\b/g,`mat${t}`).replace(/\bfovN\b/g,`fov${t}`).replace(/\bvecN_1\b/g,`vec${t-1}`).replace(/\bvec1\b/g,"float").replace(/\b_N_\b/g,`${t}`).replace(/\b_Nf_\b/g,`${t}.`).replace(/\PROJECTION_N\b/g,`PROJECTION${t}`).replace(/\bvec[01]\b/g,"float").replace(/\bmat[01]\b/g,"float"),Et=(e,t)=>je(e.replace(/#loopN(\d)(.+?)#endloopN/gs,(n,o,a)=>{const i=[];for(let s=o;s<=t;s++)i.push(je(a.replace(/#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,(u,f,c,l,m)=>f===`${s}`?je(c,s):m||""),s));return i.join(`
`)}),t),Ye=(e,t,n,o)=>{var f;const a=k[e.ambiance];let i="";const s=c=>c.toString().includes(".")?c:`${c}.`;Object.entries({shading:c=>_n.indexOf(c),diffuse:c=>Fn.indexOf(c),specular:c=>Mn.indexOf(c),ambient:c=>s(c),shininess:c=>s(c),metalness:c=>s(c),roughness:c=>s(c),opacity:c=>s(c),gouraud:c=>"",envmap:c=>c?!0:null,texture:c=>c?!0:null,reversed:c=>c?!0:null,tesselation:c=>c==="full"?1:0}).forEach(([c,l])=>{const m=Object.keys(a).includes(o)&&Object.keys(a[o]).includes(c)?a[o][c]:a[c];if(m!==!1){let p=l(m);p===!0&&(p=""),p!==null&&(i+=`#define ${c.toUpperCase()} ${p}
`)}c==="opacity"&&m<1&&(a.transparent[o]=!0,i+=`#define TRANSPARENT
`,a.transparency==="oit"&&(i+=`#define OIT
`))}),i+=`#define DIMENSIONS ${e.dimensions}
`;for(let c=3;c<=e.dimensions;c++)i+=`#define PROJECTION${c} ${hn.indexOf(e[`projection${c}`])-1}
`;return i+=`#define CURVATURE ${((f=e.space)==null?void 0:f.curvature)||0}
`,e.curve&&(i+=`#define SEGMENTS
`),Object.entries({...gt,config:i}).forEach(([c,l])=>{t=t.replace(`#include ${c}`,l),n=n.replace(`#include ${c}`,l)}),[t,n].map(c=>Et(c,e.dimensions))},ie=(e,t,n,o,a)=>{if(e.shaderSource(a,o),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const s=e.getShaderInfoLog(a);return console.error(`An error occurred compiling the ${t}->${n} shader: ${s}`,{shaderSource:o}),s}},Pe=(e,t,n)=>{if(e.linkProgram(n),!e.getProgramParameter(n,e.LINK_STATUS)){const a=e.getProgramInfoLog(n);return console.error(`Unable to initialize the ${t} shader program: ${a}`),a}},yn=(e,t,n,o,a=[])=>{const{gl:i}=e,s=i.createProgram(),u=i.createShader(i.VERTEX_SHADER),f=i.createShader(i.FRAGMENT_SHADER);if(ie(i,t,"vertex",n,u)||ie(i,t,"fragment",o,f)||(i.attachShader(s,u),i.attachShader(s,f),Pe(i,t,s)))return;const c={program:s,vertexShader:u,fragmentShader:f,uniformsDef:a,recompile(l,m,p,v=null){ie(i,t,"vertex",m,this.vertexShader)||ie(i,t,"fragment",p,this.fragmentShader)||Pe(i,t,this.program)||(v&&(this.uniformsDef=v),this.bindUniforms(l))},bindUniforms(l){this.uniforms={},this.uniformsDef.forEach(({name:m,type:p,value:v})=>{this.uniforms[m]=Nt(l,this.program,m,p),this.uniforms[m].update(v)})}};return c.bindUniforms(e),c},re=(e,t,n,o,a,i=null,s=null)=>{const{gl:u}=e;s=s||u.FLOAT;const f=s===u.FLOAT?4:2,c={name:n,mesh:t,indices:wn,instances:i,data:a,size:o,type:s,update(l=null,m=null,p=null){this.location!==-1&&(u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer),l===null&&m===null&&p===null?u.bufferData(u.ARRAY_BUFFER,this.data,u.STATIC_DRAW):(this.data.set(l,m*this.size),u.bufferSubData(u.ARRAY_BUFFER,m*this.size*f,this.data,m*this.size,p*this.size)))},extend(l,m,p=!1){if(u.bindVertexArray(this.mesh.vao),this.size=l,m&&(p&&m.length>=this.data.length&&m.set(this.data),this.data=m),this.location=u.getAttribLocation(this.mesh.program,this.name),this.location===-1)return;u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const v=l>4?3:1;for(let h=0;h<v;h++)u.enableVertexAttribArray(this.location+h);for(let h=0;h<v;h++)u.vertexAttribPointer(this.location+h,l/v,this.type,!1,l*f,l/v*h*f);for(let h=0;h<v;h++)u.vertexAttribDivisor(this.location+h,this.instances||0);this.update()},refresh(){this.extend(this.size,this.data)},get(){u.bindVertexArray(this.mesh.vao),u.bindBuffer(u.ARRAY_BUFFER,this.buffer);const l=new Float32Array(this.data.length);return u.getBufferSubData(u.ARRAY_BUFFER,0,l),l}};return c.buffer=u.createBuffer(),c.extend(o),c},wn=(e,t,n)=>{const{gl:o}=e;o.bindVertexArray(t);const a=o.createBuffer();return o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,a),o.bufferData(o.ELEMENT_ARRAY_BUFFER,n,o.STATIC_DRAW),{buffer:a,vao:t,indices:n,count:n.length,update(i){o.bindVertexArray(this.vao),this.indices=i,this.count=i.length,o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,this.buffer),o.bufferData(o.ELEMENT_ARRAY_BUFFER,i,o.STATIC_DRAW)}}},Nt=(e,t,n,o)=>{const{gl:a}=e;return{program:t,update(s){if(a.useProgram(this.program),!o.startsWith("m0"))if(o.startsWith("m1")&&(o=o.replace("m","")),o.startsWith("m")){const u=parseInt(o.slice(1,2));if(u>4)for(let f=0;f<u;f++){const c=a.getUniformLocation(t,`${n}.c${f+1}.v`);if(c!==null&&a.uniform4fv(c,s[f][0]),u-4===1){const l=a.getUniformLocation(t,`${n}.c${f+1}.u`);l!==null&&a.uniform1f(l,s[f][1])}else if(u-4>1){const l=a.getUniformLocation(t,`${n}.c${f+1}.u`);if(l!==null&&a[`uniform${X(u-4,4)}fv`](l,s[f][1]),u-8===1){const m=a.getUniformLocation(t,`${n}.c${f+1}.t`);m!==null&&a.uniform1f(m,s[f][2])}}}else{const f=a.getUniformLocation(t,n);f!==null&&a[`uniformMatrix${o.slice(1)}`](f,!1,s)}}else{const u=a.getUniformLocation(t,n);u!==null&&a[`uniform${o}`](u,s)}},get(){a.useProgram(this.program);const s=a.getUniformLocation(t,n);if(s!==null)return a.getUniform(this.program,s)}}},W=(e,t,n=null)=>{const{gl:o}=e,a=n?~~(n*o.drawingBufferWidth):o.drawingBufferWidth,i=n?~~(n*o.drawingBufferHeight):o.drawingBufferHeight,s=o.createTexture();return o.bindTexture(o.TEXTURE_2D,s),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,n?o.LINEAR:o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,n?o.LINEAR:o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texStorage2D(o.TEXTURE_2D,1,t,a,i),{texture:s,width:a,height:i}},te={},Ne=["albedo","normal","arm","displacement"],yt=(e,t,n)=>{const{gl:o}=e,a={width:4096,height:4096,listeners:[],index:n};for(let i=0;i<Ne.length;i++){const s=Ne[i];o.activeTexture(o.TEXTURE0+a.index+i);const u=ot[t][s];a[s]=o.createTexture(),o.bindTexture(o.TEXTURE_2D,a[s]);let f=u&&te[u]||null;if(o.texImage2D(o.TEXTURE_2D,0,o.RGBA,a.width,a.height,0,o.RGBA,o.UNSIGNED_BYTE,f!=null&&f.src&&(f!=null&&f.complete)?f:null),o.generateMipmap(o.TEXTURE_2D),!u)return a;if(f||(f=new Image,f.crossOrigin="anonymous",te[u]=f),!f.src||!f.complete){const c=()=>{a.listeners.splice(a.listeners.findIndex(([l])=>l===f),1),te[u]=f,o.activeTexture(o.TEXTURE0+a.index+i),o.bindTexture(o.TEXTURE_2D,a[s]),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,f),o.generateMipmap(o.TEXTURE_2D),Z(e)};f.addEventListener("load",c),f.src=u,a.listeners.push([f,c])}}return a},wt=(e,t)=>{const{gl:n}=e;for(let o=0;o<Ne.length;o++){const a=Ne[o];n.deleteTexture(t[a])}},Ze=(e,t,n)=>{const{gl:o}=e,a={texture:o.createTexture(),width:2048,height:2048,index:n,listeners:[]},i=st[t];o.activeTexture(o.TEXTURE0+a.index),o.bindTexture(o.TEXTURE_CUBE_MAP,a.texture);for(let u=0;u<6;u++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+u,0,o.RGBA,a.width,a.height,0,o.RGBA,o.UNSIGNED_BYTE,null);let s=te[i];if(s!=null&&s.src&&(s!=null&&s.complete)&&(Qe(e.gl,s,a),o.bindTexture(o.TEXTURE_CUBE_MAP,a.texture),o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MIN_FILTER,o.LINEAR_MIPMAP_LINEAR),o.generateMipmap(o.TEXTURE_CUBE_MAP)),te[i]||(s=new Image,s.crossOrigin="anonymous",te[i]=s),!s.src||!s.complete){const u=()=>{a.listeners.splice(a.listeners.findIndex(([f])=>f===s),1),o.activeTexture(o.TEXTURE0+a.index),o.bindTexture(o.TEXTURE_CUBE_MAP,a.texture),Qe(e.gl,s,a),o.activeTexture(o.TEXTURE0+a.index),o.bindTexture(o.TEXTURE_CUBE_MAP,a.texture),o.generateMipmap(o.TEXTURE_CUBE_MAP),te[i]=s,Z(e)};s.addEventListener("load",u),s.src=i,a.listeners.push([s,u])}return a},ze=e=>{e.listeners.forEach(([t,n])=>{t.removeEventListener("load",n)}),e.listeners=[]},oe=(e,t,n,o,a=[])=>{const i={name:t,vertex:n,fragment:o,...yn(e,t,n,o,a),recompileProgram(s){this.recompile(s,this.vertex,this.fragment,a)}};return{[t]:i}},Qe=(e,t,n)=>{const o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o);const a=e.createTexture();e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,8192,4096,0,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D);const i=e.createProgram(),s=e.createShader(e.VERTEX_SHADER),u=e.createShader(e.FRAGMENT_SHADER);if(!ie(e,"hdritocube","vertex",ht,s)&&!ie(e,"hdritocube","fragment",xt,u)){e.attachShader(i,s),e.attachShader(i,u),Pe(e,"hdritocube",i),e.useProgram(i),e.uniform1i(e.getUniformLocation(i,"hdri"),0),e.uniform1i(e.getUniformLocation(i,"part"),0),e.viewport(0,0,n.width,n.height);for(let f=0;f<6;f++)e.uniform1i(e.getUniformLocation(i,"part"),f),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+f,n.texture,0),e.uniform1i(e.getUniformLocation(i,"face"),f),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.drawArrays(e.TRIANGLES,0,3);e.deleteTexture(a),e.deleteFramebuffer(o),e.viewport(0,0,e.canvas.width,e.canvas.height)}},Re=(e,t,n,o)=>{const{gl:a}=e;a.bindRenderbuffer(a.RENDERBUFFER,t),o?a.renderbufferStorageMultisample(a.RENDERBUFFER,o,n,a.drawingBufferWidth,a.drawingBufferHeight):a.renderbufferStorage(a.RENDERBUFFER,n,a.drawingBufferWidth,a.drawingBufferHeight),a.bindRenderbuffer(a.RENDERBUFFER,null)},Tt=({radius:e=1,widthSegments:t=16,segments:n=16}={})=>{const o=[],a=[],i=[],s=[];let u=0;const f=[];for(let c=0;c<=n;c++){const l=[],m=c/n;let p=0;c===0?p=.5/t:c===n&&(p=-.5/t);for(let v=0;v<=t;v++){const h=v/t,E=[-e*Ce(h*_e)*pe(m*Y),e*Ce(m*Y),e*pe(h*_e)*pe(m*Y)];a.push(...E);const w=(E[0]**2+E[1]**2+E[2]**2)**-.5;i.push(...E.map(N=>N*w)),s.push(h+p,1-m),l.push(u++)}f.push(l)}for(let c=0;c<n;c++)for(let l=0;l<t;l++){const m=f[c][l+1],p=f[c][l],v=f[c+1][l],h=f[c+1][l+1];c!==0&&o.push(m,p,h),c!==n-1&&o.push(p,v,h)}return{vertices:a,normals:i,uvs:s,indices:o}},St=({radius:e=null,radiusTop:t=1,radiusBottom:n=1,height:o=1,radialSegments:a=8,segments:i=1}={})=>{const s=[],u=[],f=[],c=[];e!==null&&(t=e,n=e);let l=0;const m=[],p=o/2,v=(n-t)/o;for(let h=0;h<=i;h++){const E=[],w=h/i,N=w*(n-t)+t;for(let R=0;R<=a;R++){const I=R/a,_=I*_e,$=pe(_),L=Ce(_),le=[N*$,-w*o+p,N*L];u.push(...le);const z=[$,v,L],H=(z[0]**2+z[1]**2+z[2]**2)**-.5;f.push(...z.map(Te=>Te*H)),c.push(I,1-w),E.push(l++)}m.push(E)}for(let h=0;h<a;h++)for(let E=0;E<i;E++){const w=m[E][h],N=m[E+1][h],R=m[E+1][h+1],I=m[E][h+1];s.push(w,N,I),s.push(N,R,I)}return{vertices:u,normals:f,uvs:c,indices:s}},It=({segments:e=3}={})=>{const t=[],n=[],o=[],a=[],i=1/e;for(let s=0;s<e+1;s++)for(let u=0;u<s+1;u++)n.push((2*u-s)*i/2,s*i,0),o.push(0,0,1),a.push(i*(s-u),i*u);for(let s=1;s<e+1;s++)for(let u=0;u<s;u++){const f=s*(s+1)/2+u,c=s*(s-1)/2+u;if(t.push(f,c,f+1),s<e){const l=(s+1)*(s+2)/2+u;t.push(l+1,f,f+1)}}return{vertices:n,normals:o,uvs:a,indices:t}},jt=`#include globals
#include fragment
`,Rt=`#include globals
#include dimensions
#define EDGE
#define EDGE_METHOD 0

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
  #elif EDGE_METHOD == 0
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

  float size = thickness;
  #ifdef TEXTURE
  if(thickness > 45.) {
    size += texture(displacementMap, uv).r;
  }
  #endif
  proj = inflate(proj, pos, norm, size);
  #include vertexout
}
`,Ot=`#include globals
#include fragment
`,At=`#include globals
#include dimensions
#define FACE

uniform matN metric;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;
in vec2 triangulation;

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
`,Dt=`#include globals
#include fragment
`,Ct=`#include globals
#include dimensions
#define VERTEX

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
  #if (defined(TEXTURE) || (defined(SHADING) && SHADING == 3)) && DIMENSIONS >= 2
  vecN normN = multiplyMatrix(matrix, vecNFromVec3(normal));
  norm = normalize(pureproject(normN));
  #endif
  float size = thickness;
  #ifdef TEXTURE
  size += texture(displacementMap, uv).r;
  #endif
  proj = inflate(proj, pos, norm, size);
  #include vertexout
}
`,en=e=>e>4?9:e<1?1:e,Oe={vertex:(e,t)=>Tt({lowest:{widthSegments:6,segments:2},lower:{widthSegments:8,segments:4},low:{widthSegments:8,segments:8},lowish:{widthSegments:12,segments:8},medium:{widthSegments:16,segments:16},highish:{widthSegments:32,segments:16},high:{widthSegments:32,segments:32},higher:{widthSegments:64,segments:32},ultra:{widthSegments:128,segments:64}}[t||"medium"]),edge:(e,t)=>St({lowest:{segments:e?4:1,radialSegments:4},lower:{segments:e?8:1,radialSegments:5},low:{segments:e?12:1,radialSegments:6},lowish:{segments:e?14:1,radialSegments:7},medium:{segments:e?16:1,radialSegments:8},highish:{segments:e?24:1,radialSegments:10},high:{segments:e?32:1,radialSegments:12},higher:{segments:e?64:1,radialSegments:16},ultra:{segments:e?128:1,radialSegments:32}}[t||"medium"]),face:(e,t)=>It({lowest:{segments:e?4:1},lower:{segments:e?8:1},low:{segments:e?12:1},lowish:{segments:e?14:1},medium:{segments:e?16:1},highish:{segments:e?24:1},high:{segments:e?32:1},higher:{segments:e?64:1},ultra:{segments:e?128:1}}[t||"medium"])},Ae=(e,t,n,o,a,i,s,u=["position"])=>{const{gl:f}=e,c=a(e.curve,e.detail),l=p=>[{name:"viewProjection",type:"m4fv",value:q(ae(4))},{name:"matrix",type:`m${p.dimensions}fv`,value:q(p.matrix)},{name:"eye",type:"3fv",value:[0,0,0]},{name:"metric",type:`m${p.dimensions}fv`,value:q(ae(p.dimensions))},{name:"zoom",type:"1f",value:1},{name:"envMap",type:"1i",value:1},{name:"albedoMap",type:"1i",value:2},{name:"normalMap",type:"1i",value:3},{name:"armMap",type:"1i",value:4},{name:"displacementMap",type:"1i",value:5},...["vertex","edge"].includes(t)?[{name:"thickness",type:"1f",value:0}]:[],...J(3,p.dimensions+1,1,!0).map(v=>({name:`fov${v}`,type:"1f",value:p[`fov${v}`]}))];s=en(s);const m={attributes:{},varying:u,vertex:n,type:t,fragment:o,...yn(e,t,...Ye(e,n,o,t),l(e)),recompileProgram(p){const[v,h]=Ye(p,this.vertex,this.fragment,this.type);this.recompile(p,v,h,l(p)),Object.entries(this.attributes).forEach(([E,w])=>{w.refresh()})},changeArity(p){p=en(p),this.arity!==p&&(this.arity=p,this.extendAttributes(this.instances))},extendAttributes(p){var v;this.instances=p,u.forEach(h=>{this.attributes[h].extend(this.arity,new Float32Array(p*this.arity),!0)}),this.attributes.color.extend(3,new Float32Array(p*3),!0),(v=this.attributes.triangulation)==null||v.extend(2,new Float32Array(p*2),!0)},updateGeometry(p){const v=a(p.curve,p.detail);this.indices.update(new Uint16Array(v.indices)),this.attributes.vertex.extend(3,new Float32Array(v.vertices)),this.attributes.uv.extend(2,new Float32Array(v.uvs)),this.attributes.normal.extend(3,new Float32Array(v.normals))},fillGeometry(p,v){if(v.arity===this.arity){this.count=v.start+v.size,this.instances<this.count&&this.extendAttributes(this.count);for(let h=0;h<this.varying.length;h++){const E=this.varying[h];this.attributes[E].update(p[h],v.start,v.size)}}},fillColor(p,v){v.arity===this.arity&&(this.count=v.start+v.size,this.instances<this.count&&this.extendAttributes(this.count),this.attributes.color.update(p,v.start,v.size))},fillTriangulation(p,v){v.arity===this.arity&&(this.count=v.start+v.size,this.instances<this.count&&this.extendAttributes(this.count),this.attributes.triangulation.update(p,v.start,v.size))},render(p){if(!this.count)return;const{gl:v}=p;v.useProgram(this.program),v.bindVertexArray(this.vao),v.drawElementsInstanced(v.TRIANGLES,this.indices.count,v.UNSIGNED_SHORT,0,this.count)}};return m.vao=f.createVertexArray(),m.indices=wn(e,m.vao,new Uint16Array(c.indices)),m.attributes.vertex=re(e,m,"vertex",3,new Float32Array(c.vertices)),m.attributes.uv=re(e,m,"uv",2,new Float32Array(c.uvs)),m.attributes.normal=re(e,m,"normal",3,new Float32Array(c.normals)),m.attributes.color=re(e,m,"color",3,new Float32Array(i*3),1),t==="face"&&(m.attributes.triangulation=re(e,m,"triangulation",2,new Float32Array(i*2),1)),u.forEach(p=>{m.attributes[p]=re(e,m,p,s,new Float32Array(i*s),1)}),m.type=t,m.arity=s,m.instances=i,m.count=0,{[t]:m}};function _t(e){return{meshes:G.slice(0,3),...Ae(e,"vertex",Ct,Dt,Oe.vertex,1024,e.dimensions),...Ae(e,"edge",Rt,jt,Oe.edge,1024,e.dimensions,["position","target"]),...Ae(e,"face",At,Ot,Oe.face,1024,e.dimensions,["position","target","center"]),reset(){for(let t=0;t<this.meshes.length;t++)this[this.meshes[t]].count=0},changeArity(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].changeArity(t)},updateGeometries(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].updateGeometry(t)},recompilePrograms(t){for(let n=0;n<this.meshes.length;n++)this[this.meshes[n]].recompileProgram(t)},updateUniforms(t,n=!1,o=null){for(let a=0;a<this.meshes.length;a++){const i=this.meshes[a],s=this[i];if(!n){s.uniforms.metric.update(q(t.space.metric)),s.uniforms.matrix.update(q(t.matrix));for(let u=4;u<=t.dimensions;u++)s.uniforms[`fov${u}`].update(1/xn(Y*t[`fov${u}`]*.5/180));i==="vertex"?s.uniforms.thickness.update(t.sizeVertex):i==="edge"&&s.uniforms.thickness.update(t.sizeEdge)}s.uniforms.viewProjection.update(t.camera.viewProjection),s.uniforms.zoom.update(n?o:t.zoom),s.uniforms.eye.update(t.camera.eye)}},fillGeometry(t){for(let n=0;n<this.meshes.length;n++){const o=this.meshes[n],a=this[o];t.data[n]&&a.fillGeometry(t.data[n],t.infos[n])}},fillColor(t){for(let n=0;n<this.meshes.length;n++){const o=this.meshes[n],a=this[o];t.data[n]&&a.fillColor(t.data[n],t.infos[n]),t.infos[n].nextIsTri&&(a.fillTriangulation(t.data[n+1],t.infos[n]),n++)}}}}const Ft=`#version 300 es
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
`,Mt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`,Pt=`#version 300 es
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
`,zt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`,Ut=`#version 300 es
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
`,kt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`,Lt=`#version 300 es
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
`,Ht=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`,Bt=`#version 300 es
precision highp float;

uniform samplerCube cubeMap;
uniform mat4 viewProjectionInverse;

in vec2 uv;
out vec4 fragColor;

void main() {
  vec4 position = vec4(2.0 * uv - 1.0, 1.0, 1.0);
  vec4 t = viewProjectionInverse * position;
  vec3 dir = normalize(t.xyz / t.w);
  fragColor = texture(cubeMap, dir);
}
`,$t=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 1.0, 1.0);
}
`,Vt=`#version 300 es
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
`,Gt=`#version 300 es

out vec2 uv;

void main() {
  uv = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
}
`;function Xt(e){return{...oe(e,"oit",Ht,Lt,[{name:"accumTexture",type:"1i",value:0},{name:"revealageTexture",type:"1i",value:1}]),...oe(e,"down",kt,Ut,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...oe(e,"up",Gt,Vt,[{name:"screen",type:"1i",value:0},{name:"offset",type:"1f",value:0}]),...oe(e,"afterImage",Mt,Ft,[{name:"screen",type:"1i",value:0},{name:"afterImage",type:"1i",value:1},{name:"strength",type:"1f",value:1}]),...oe(e,"bloom",zt,Pt,[{name:"screen",type:"1i",value:0},{name:"bloom",type:"1i",value:1},{name:"exposure",type:"1f",value:1},{name:"strength",type:"1f",value:1}]),...oe(e,"skybox",$t,Bt,[{name:"cubeMap",type:"1i",value:0},{name:"viewProjectionInverse",type:"m4fv",value:q(ae(4))}]),updateUniforms(t){this.skybox.uniforms.viewProjectionInverse.update(t.camera.viewProjectionInverse)}}}const Tn=e=>{const{gl:t}=e,n=k[e.ambiance],o=e.msaa?X(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0;if(t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.base),Re(e,e.rb.base,t.RGBA8,o),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,e.rb.base),Re(e,e.rb.depth,t.DEPTH_COMPONENT24,o),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),e.fb.oit&&(t.deleteFramebuffer(e.fb.oit),e.fb.oit=null),e.textures.oitAccum&&(t.deleteTexture(e.textures.oitAccum.texture),e.textures.oitAccum=null),e.textures.oitReveal&&(t.deleteTexture(e.textures.oitReveal.texture),e.textures.oitReveal=null),e.rb.depth_copy&&t.deleteRenderbuffer(e.rb.depth_copy),n.transparency==="oit"&&(e.fb.oit=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.oit),o?(e.rb.depth_copy=t.createRenderbuffer(),Re(e,e.rb.depth_copy,t.DEPTH_COMPONENT24),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth_copy)):t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,e.rb.depth),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),e.textures.oitAccum=W(e,t.RGBA16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.oitAccum.texture,0),e.textures.oitReveal=W(e,t.R16F),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT1,t.TEXTURE_2D,e.textures.oitReveal.texture,0)),e.fb.afterImage&&(t.deleteFramebuffer(e.fb.afterImage),e.fb.afterImage=null),e.textures.afterImageLastScreen&&(t.deleteTexture(e.textures.afterImageLastScreen.texture),e.textures.afterImageLastScreen=null),e.textures.afterImageScreen&&(t.deleteTexture(e.textures.afterImageScreen.texture),e.textures.afterImageScreen=null),e.textures.afterImageOutScreen&&(t.deleteTexture(e.textures.afterImageOutScreen.texture),e.textures.afterImageOutScreen=null),n.afterImage&&(e.fb.afterImage=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.afterImage),e.textures.afterImageLastScreen=W(e,t.RGBA8),e.textures.afterImageScreen=W(e,t.RGBA8),e.textures.afterImageOutScreen=W(e,t.RGBA8)),e.fb.kawase&&(t.deleteFramebuffer(e.fb.kawase),e.fb.kawase=null),e.fb.bloom&&(t.deleteFramebuffer(e.fb.bloom),e.fb.bloom=null),e.textures.kawase){for(let a=0;a<e.textures.kawase.length;a++)t.deleteTexture(e.textures.kawase[a].texture);e.textures.kawase=null}if(e.textures.blur&&(t.deleteTexture(e.textures.blur.texture),e.textures.blur=null),e.textures.bloom&&(t.deleteTexture(e.textures.bloom.texture),e.textures.bloom=null),n.glow){e.fb.kawase=t.createFramebuffer(),e.fb.bloom=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.kawase),e.textures.kawase=[];for(let a=0;a<n.glow.steps;a++)e.textures.kawase[a]=W(e,t.RGBA8,n.glow.pow**-a);e.textures.blur=W(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.blur.texture,0),t.bindFramebuffer(t.FRAMEBUFFER,e.fb.bloom),e.textures.bloom=W(e,t.RGBA8),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e.textures.bloom.texture,0)}},nn=e=>{const{gl:t}=e,n=k[e.ambiance];e.textures.skybox&&(t.deleteTexture(e.textures.skybox.texture),ze(e.textures.skybox),e.textures.skybox=null),n.skybox&&e.skybox!=="none"&&(e.textures.skybox=Ze(e,e.skybox||n.skybox,0)),e.textures.envmap&&(t.deleteTexture(e.textures.envmap.texture),ze(e.textures.envmap),e.textures.envmap=null),n.envmap&&e.envmap!=="none"&&(e.textures.envmap=Ze(e,e.envmap||n.envmap,1))},tn=e=>{const t=k[e.ambiance];e.textures.mesh&&(ze(e.textures.mesh),wt(e,e.textures.mesh),e.textures.mesh=null),t.texture&&e.texture!=="none"&&(e.textures.mesh=yt(e,e.texture||t.texture,2))},Sn=window.location.search.includes("stats");let ve;Sn&&(ve=new at,ve.dom.id="stats",document.body.appendChild(ve.dom));const an=(e,t,n)=>{let o=document.getElementById("webgl2");o||(o=document.createElement("canvas"),o.id="webgl2",document.body.insertBefore(o,document.body.firstChild));const a=o.getContext("webgl2",{alpha:!0,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(o.addEventListener("webglcontextlost",t,!1),o.addEventListener("webglcontextrestored",n,!1),e={...e,gl:a},!a){console.error("Unable to initialize WebGL. Your browser may not support it.");return}a.getExtension("EXT_color_buffer_float"),a.enable(a.DEPTH_TEST);const i={zoom:e.zoom,fov:Y/3,eye:[0,0,0],rotation:he(0,Math.PI),near:.01,far:1e3,update(m){const p=Pn(0,0,this.zoom),v=[0,0,this.zoom,0];this.eye=Fe(this.rotation,v).slice(0,3);const h=We(ce(this.rotation,p));this.aspect=m?m.fullWidth/m.fullHeight:a.canvas.clientWidth/a.canvas.clientHeight;const E=X(this.aspect,1),w={left:0,right:0,top:0,bottom:0,near:this.near,far:this.far};w.top=this.near*xn(this.fov/2)/E;let N=2*w.top,R=this.aspect*N;w.left=-.5*R,m&&(w.left+=m.x*R/m.fullWidth,w.top-=m.y*N/m.fullHeight,R*=m.width/m.fullWidth,N*=m.height/m.fullHeight),w.bottom=w.top-N,w.right=w.left+R;const I=zn(w),_=ce(I,h);this.viewProjection=q(_),this.viewProjectionInverse=q(We(_))},center(){this.eye=[0,0,0],this.rotation=he(0,Math.PI),this.update()}};i.update();const s=Xt(e),u=_t(e),f={base:a.createRenderbuffer(),depth:a.createRenderbuffer()},c={base:a.createFramebuffer()};return{...e,gl:a,camera:i,meshes:u,passes:s,rb:f,fb:c,textures:{}}},ye=(e,t=null)=>{e.camera.fov=e.fov3?Y*e.fov3/180:1,t!==null&&(e.camera.zoom=t===null?e.zoom:t),e.camera.update(),e.meshes.updateUniforms(e,!0,t),e.passes.updateUniforms(e)},qt=e=>{const t=k[e.ambiance];e.gl.clearColor(...t.background),t.glow&&(e.passes.bloom.uniforms.exposure.update(t.glow.exposure),e.passes.bloom.uniforms.strength.update(t.glow.strength),e.passes.down.uniforms.offset.update(t.glow.offset.down),e.passes.up.uniforms.offset.update(t.glow.offset.up)),t.afterImage&&e.passes.afterImage.uniforms.strength.update(t.afterImage)},Z=(e,t)=>{if(!e.gl)return;Sn&&ve.update();const{gl:n}=e,o=e.msaa?X(e.msaaSamples,e.gl.getParameter(e.gl.MAX_SAMPLES)):0,a=k[e.ambiance];bt(n.canvas,e.subsampling,t)&&(n.viewport(0,0,n.canvas.width,n.canvas.height),Tn(e),e.camera.update(t),e.meshes.updateUniforms(e,!0,e.zoom)),n.disable(n.BLEND),n.enable(n.DEPTH_TEST),a.culling&&n.enable(n.CULL_FACE),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),a.transparent.vertex||e.meshes.vertex.render(e),a.transparent.edge||e.meshes.edge.render(e),a.transparent.face||e.meshes.face.render(e),(!e.hidden.includes("vertex")&&a.transparent.vertex||!e.hidden.includes("edge")&&a.transparent.edge||!e.hidden.includes("face")&&a.transparent.face)&&(a.transparency==="oit"?(o&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,e.fb.oit),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.DEPTH_BUFFER_BIT,n.NEAREST)),n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFuncSeparate(n.ONE,n.ONE,n.ZERO,n.ONE_MINUS_SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.oit),n.clear(n.COLOR_BUFFER_BIT),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e),n.depthMask(!0),n.depthFunc(n.ALWAYS),n.blendFunc(n.ONE_MINUS_SRC_ALPHA,n.SRC_ALPHA),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.base),n.useProgram(e.passes.oit.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.oitAccum.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.oitReveal.texture),n.drawArrays(n.TRIANGLES,0,3)):a.transparency==="blend"&&(n.enable(n.BLEND),a.culling&&n.disable(n.CULL_FACE),n.depthMask(!1),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),a.transparent.vertex&&e.meshes.vertex.render(e),a.transparent.edge&&e.meshes.edge.render(e),a.transparent.face&&e.meshes.face.render(e))),a.skybox&&(n.useProgram(e.passes.skybox.program),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LEQUAL),n.drawArrays(n.TRIANGLES,0,3));const i=a.afterImage?e.fb.afterImage:a.glow?e.fb.bloom:null;n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.base),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,i),a.afterImage&&n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageScreen.texture,0),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST);let s=e.textures.bloom;if(a.afterImage&&(n.bindFramebuffer(n.FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.useProgram(e.passes.afterImage.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageScreen.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.afterImageLastScreen.texture),n.drawArrays(n.TRIANGLES,0,3),a.glow?s=e.textures.afterImageOutScreen:(n.bindFramebuffer(n.READ_FRAMEBUFFER,e.fb.afterImage),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e.textures.afterImageOutScreen.texture,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.blitFramebuffer(0,0,n.drawingBufferWidth,n.drawingBufferHeight,0,0,n.drawingBufferWidth,n.drawingBufferHeight,n.COLOR_BUFFER_BIT,n.NEAREST)),[e.textures.afterImageOutScreen,e.textures.afterImageLastScreen]=[e.textures.afterImageLastScreen,e.textures.afterImageOutScreen]),a.glow){n.disable(n.BLEND),a.culling&&n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.depthMask(!0),n.depthFunc(n.LESS),n.bindFramebuffer(n.FRAMEBUFFER,e.fb.kawase),n.useProgram(e.passes.down.program);for(let u=0;u<a.glow.steps;u++){const f=u===0?s:e.textures.kawase[u-1],c=e.textures.kawase[u];n.viewport(0,0,c.width,c.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,c.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.useProgram(e.passes.up.program);for(let u=a.glow.steps-1;u>=0;u--){const f=e.textures.kawase[u],c=u===0?e.textures.blur:e.textures.kawase[u-1];n.viewport(0,0,c.width,c.height),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,f.texture),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,c.texture,0),n.drawArrays(n.TRIANGLES,0,3)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.useProgram(e.passes.bloom.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,s.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,e.textures.blur.texture),n.drawArrays(n.TRIANGLES,0,3)}};window.render=Z;const de=.9,Wt=.95,Jt=10,In=(e,t,n,o,a,i,s,u)=>{if(a<2)return[[],[]];if(n.camera)return xe(u.rotation,ce(u.rotation,he(e[1],e[0]))),[[n.combinations.length+1],[n.combinations.length]];const{combinations:f}=n,c=[[],[]],l=(p,v)=>{xe(o,ce(gn(p,v,a,i,kn(s)),o))},m=2*t+1>f.length-1?[t*2]:[t*2+1,t*2];for(let p=0;p<m.length;p++){const v=m[p];if(c[p].push(v),n.lock&&f[v][0]>=0&&f[v][1]>=0)for(let h=0;h<f.length;h++)f[h][0]<0||f[h][1]<0||!f[v].some(E=>f[h].includes(E))&&(!(p>0)||h!==m[1-p])&&c[p].push(h)}for(let p=0;p<c.length;p++){const v=c[p];for(let h=0;h<v.length;h++){const E=v[h];l(e[p],f[E])}}return c},Kt=(e,t,n,o,a,i,s,u)=>{const{code:f}=e,c=.1;if(e.altKey||e.ctrlKey||e.metaKey)return;const l=(m,p,v)=>In([m,p],o<3?0:v,t,n,o,a,s,u);if(f==="ArrowLeft"||f==="KeyA")l(c,0,0);else if(f==="ArrowRight"||f==="KeyD")l(-c,0,0);else if(f==="ArrowUp"||f==="KeyW")l(0,c,0);else if(f==="ArrowDown"||f==="KeyS")l(0,-c,0);else if(f==="PageUp"||f==="KeyQ")l(c,0,1);else if(f==="PageDown"||f==="KeyE")l(-c,0,1);else if(f==="Digit1")l(0,c,1);else if(f==="Digit3")l(0,-c,1);else if(f==="KeyZ")l(c,0,2);else if(f==="KeyC")l(-c,0,2);else if(f==="ControlLeft")i("shift",(t.shift+1)%t.maxShift);else return;return!0},Yt=(e,t,n,o)=>{const a=g.useRef(null),i=g.useRef({pause:new Set,speed:null,zoom:null,t:null}),s=g.useRef({matrix:e.matrix,zoom:e.zoom,pointers:new Map});g.useEffect(()=>{s.current.matrix=e.matrix},[e.matrix]),g.useEffect(()=>{s.current.zoom=e.zoom,i.current.zoom=null},[e.zoom]);const u=g.useCallback(({matrix:c,zoom:l,camera:m}={matrix:!0,zoom:!0,camera:!0})=>{if(!e.matrix._reset){if(c)for(let p=0;p<e.meshes.meshes.length;p++)e.meshes[e.meshes.meshes[p]].uniforms.matrix.update(q(s.current.matrix));(l||m)&&ye(e,s.current.zoom)}},[e.ambiance,e.camera,e.centered,e.coxeter,e.curve,e.crosssection,e.dimensions,e.error,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.hidden,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.section,e.space,e.stellation,e.subsampling,e.zoom,t.camera]);g.useEffect(()=>{i.current.speed=new Array(t.combinations.length+2).fill(0)},[t.combinations.length]),g.useEffect(()=>{e.matrix._reset&&(delete e.matrix._reset,i.current.speed=new Array(t.combinations.length+2).fill(0))},[t.combinations.length,e.matrix]);const f=g.useCallback(()=>{const{pause:c,speed:l,zoom:m}=i.current;i.current.t||(i.current.t=performance.now());const p=performance.now()-i.current.t;let v=!1,h=!1,E=!1;for(let w=0;w<l.length;w++)if(l[w]!==0&&(t.auto==="damp"&&(l[w]*=Wt,K(l[w])<1e-6&&(l[w]=0)),w>=t.combinations.length?h=!0:v=!0,!c.has(w))){const N=Le(X(l[w]*p,.5),-.5);if(w>=t.combinations.length){const R=[0,0];R[w-t.combinations.length]=N,xe(e.camera.rotation,ce(e.camera.rotation,he(...R)))}else xe(s.current.matrix,ce(gn(N,t.combinations[w],e.dimensions,e.space.metric,i.current.zoom||s.current.zoom),s.current.matrix))}if(m){const w=fe(s.current.zoom)/fe(de),N=fe(m)/fe(de);s.current.zoom*=vn(de,(N-w)*X(1,p*.001*2)),K(m-s.current.zoom)<m*.001&&(s.current.zoom=m,i.current.zoom=null),E=!0}if(u({matrix:v,camera:h,zoom:E}),l.reduce((w,N)=>K(w)+K(N),0)===0&&i.current.zoom===null&&!e.matrix._reset){o({matrix:s.current.matrix,zoom:s.current.zoom}),a.current=null,i.current.t=null;return}(v||h||E)&&Z(e),i.current.t=performance.now(),a.current=requestAnimationFrame(f)},[u,t.auto,t.combinations,e.dimensions,e.camera,e.space]);g.useEffect(()=>{i.current.speed.reduce((N,R)=>K(N)+K(R),0)>0&&(a.current=requestAnimationFrame(f));let c=null,l=null;const m=[],p=()=>{const N=s.current.pointers.values(),R=N.next().value,I=N.next().value;return Un(R[0]-I[0],R[1]-I[1])},v=N=>{N.button!==0||N.target.tagName!=="CANVAS"||(t.auto&&(l=performance.now(),s.current.pointers.size===1?(i.current.pause.delete(t.shift*2),i.current.pause.delete(t.shift*2+1)):(i.current.pause.add(t.shift*2),i.current.pause.add(t.shift*2+1))),s.current.pointers.set(N.pointerId,[N.clientX,N.clientY]))},h=N=>{if(!s.current.pointers.has(N.pointerId)||!t.combinations.length)return;const R=s.current.pointers.get(N.pointerId),I=[(N.clientX-R[0])/window.innerHeight,-(N.clientY-R[1])/window.innerHeight];if(t.camera||(I[0]*=-1),s.current.pointers.set(N.pointerId,[N.clientX,N.clientY]),s.current.pointers.size>1){if(c===null){c=p(),i.current.zoom=s.current.zoom;return}const L=p();s.current.zoom*=c/L,c=L,ye(e,s.current.zoom),i.current.zoom=null,Z(e);return}let _=t.shift;!_&&N.shiftKey?_=1:!_&&N.altKey?_=2:!_&&N.ctrKey?_=3:!_&&N.metaKey&&(_=4);const $=In([Y*I[0],Y*I[1]],_,t,s.current.matrix,e.dimensions,e.space.metric,i.current.zoom||s.current.zoom,e.camera);if(t.auto){const L=X(50,performance.now()-l);l=performance.now(),m.push([I[0]*1.5/L,I[1]*1.5/L]),m.length>Jt&&m.shift();const le=m.reduce((z,H)=>[z[0]+H[0],z[1]+H[1]],[0,0]);for(let z=0;z<2;z++)for(let H=0;H<$[z].length;H++)i.current.speed[$[z][H]]=le[z]/m.length;a.current||(a.current=requestAnimationFrame(f))}u({matrix:!0})},E=N=>{s.current.pointers.clear(),t.auto&&(m.length=0,l=null,i.current.pause.delete(t.shift*2),i.current.pause.delete(t.shift*2+1)),c=null};document.addEventListener("pointerdown",v),document.addEventListener("pointermove",h),document.addEventListener("pointerup",E);const w=i.current;return()=>{document.removeEventListener("pointerdown",v),document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",E),a.current&&(cancelAnimationFrame(a.current),a.current=null,w.t=null)}},[t,e.dimensions,e.space,e.camera,f,u]),g.useEffect(()=>{const c=l=>{l.target===document.body&&Kt(l,t,s.current.matrix,e.dimensions,e.space.metric,n,i.current.zoom||s.current.zoom,e.camera)&&(u({matrix:!0}),Z(e))};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[u,t,e.space,e.dimensions,e.camera,n]),g.useEffect(()=>{const c=l=>{if(l.target.tagName!=="CANVAS")return;const m=i.current.zoom===null?s.current.zoom:i.current.zoom;i.current.zoom=m*(l.deltaY<0?de:1/de),a.current||(a.current=requestAnimationFrame(f))};return document.addEventListener("wheel",c),()=>{document.removeEventListener("wheel",c)}},[f]),g.useEffect(()=>{const c=l=>{if(l.button!==0||l.target.tagName!=="CANVAS")return;const m=i.current.zoom===null?s.current.zoom:i.current.zoom,p=m<.5?5:m<2?.25:1;i.current.zoom=p,a.current||(a.current=requestAnimationFrame(f))};return document.addEventListener("dblclick",c),()=>{document.removeEventListener("dblclick",c)}},[f])};function Zt({runtime:e,rotations:t,updateRotations:n,updateParams:o}){return Yt(e,t,n,o),null}function Qt(){return new Worker(""+new URL("shape.worker-69728767.js",import.meta.url).href)}const ea=(e,t)=>{g.useEffect(()=>{t(n=>{n.meshes.reset();const o=Ln(n.coxeter,n.stellation),a=Hn(o),{vertices:i,normals:s}=Bn(a,n.centered),f=n.mirrors.every(l=>!l)?n.mirrors.map(()=>1):n.mirrors.map(l=>$n(l)),c=Vn(Fe(i,f),a.metric);return a.rootVertex=c,a.rootVertices=i,a.rootNormals=s,a.boundnesses=Gn(i).map(l=>Xn(Fe(a.metric,l),l)).map(l=>K(l)<1e-9?"ideal":a.curvature*l<-1e-9?"ultraideal":"inside"),{...n,space:a,error:null}})},[e.dimensions,e.coxeter,e.mirrors,e.stellation,e.centered,t]),g.useEffect(()=>{t(n=>{var a;const o={...n,iteration:-1,paused:!1,done:!1};return(n.processing||n.error)&&((a=n.shaper)==null||a.terminate(),o.shaper=new Qt),o})},[e.crosssection,e.space,e.extrarels,e.reciprocation,t]),g.useEffect(()=>{t(n=>{var a;const o={...n};return((a=n.polytope)==null?void 0:a.size)>n.limit&&(o.paused=!0),o})},[e.polytope,e.limit,t]),g.useEffect(()=>{t(n=>({...n,paused:!1}))},[e.limit,t]),g.useEffect(()=>{t(n=>n.iteration===0?n:(n.shaper.postMessage({type:"iterate",space:n.space,dimensions:n.dimensions,coxeter:n.coxeter,stellation:n.stellation,mirrors:n.mirrors,ambiance:n.ambiance,batch:n.iteration===-1?Le(1,~~(n.batch/10)):n.batch,hidden:n.hidden,reciprocation:n.reciprocation,extrarels:n.extrarels,section:n.crosssection?n.section:null,iteration:n.iteration}),{...n,iteration:n.iteration===-1?0:n.iteration,processing:!0}))},[e.crosssection,e.iteration,e.limit,e.extrarels,e.batch,e.shaper,e.space,e.reciprocation,t]),g.useEffect(()=>{t(n=>n.iteration<0?n:(n.shaper.postMessage({type:"tesselate",section:n.crosssection?n.section:null,ambiance:n.ambiance,hidden:n.hidden}),{...n,processing:!0}))},[k[e.ambiance].tesselation,e.crosssection?e.section:null,t]),g.useEffect(()=>{t(n=>n.iteration<0?n:(n.shaper.postMessage({type:"paint",ambiance:n.ambiance,hidden:n.hidden}),{...n,processing:!0}))},[e.ambiance,t]),g.useEffect(()=>{t(n=>n.iteration<0?n:(n.shaper.postMessage({type:"display",ambiance:n.ambiance,hidden:n.hidden}),{...n,processing:!0}))},[e.hidden,t]),g.useEffect(()=>{t(n=>({...n,iteration:n.paused?n.iteration:n.iteration+1}))},[e.paused,t]),g.useEffect(()=>{if(!e.shaper)return;const n=a=>{console.error(a),t(i=>({...i,error:a,processing:!1,done:!0,iteration:0}))},o=({data:a})=>{a.error?n(a.error):t(i=>{const s={...i,processing:!1};return a.polytope&&(s.done=a.polytope.done,s.polytope=a.polytope,s.iteration=i.paused||a.polytope.done?i.iteration:i.iteration+1),a.geometry&&s.meshes.fillGeometry(a.geometry),a.color&&s.meshes.fillColor(a.color),s})};return e.shaper.addEventListener("message",o),e.shaper.addEventListener("error",n),()=>{e.shaper.removeEventListener("message",o),e.shaper.removeEventListener("error",n)}},[e.shaper,e.paused,t])};function na({runtime:e,setRuntime:t}){return ea(e,t),null}const ta=(e,t)=>{g.useEffect(()=>{t(n=>(ye(n,n.zoom),n))},[e.zoom,t]),g.useEffect(()=>{t(n=>(ye(n),n))},[e.fov3,e.camera,t]),g.useEffect(()=>{t(n=>(nn(n),n))},[e.envmap,e.skybox,t]),g.useEffect(()=>{t(n=>(tn(n),n))},[e.texture,t]),g.useEffect(()=>{t(n=>(qt(n),Tn(n),nn(n),tn(n),n))},[e.ambiance,e.msaa,e.msaaSamples,t]),g.useEffect(()=>{t(n=>(n.meshes.recompilePrograms(n),n))},[e.ambiance,e.curve,e.dimensions,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{t(n=>(n.meshes.changeArity(n.dimensions),n))},[e.dimensions,t]),g.useEffect(()=>{t(n=>(n.meshes.updateGeometries(n),n))},[e.space,e.curve,e.detail,t]),g.useEffect(()=>{t(n=>(n.meshes.updateUniforms(n),n))},[e.ambiance,e.curve,e.dimensions,e.sizeVertex,e.sizeEdge,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.detail,e.matrix,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.space,t]),g.useEffect(()=>{if(!e.gl.canvas)return;const n=new ResizeObserver(()=>{Z(e)});return n.observe(e.gl.canvas,{box:"content-box"}),()=>n.disconnect()},[e.gl.canvas]),g.useEffect(()=>{t(n=>(Z(n),n))},[e.ambiance,e.camera,e.centered,e.coxeter,e.crosssection,e.curve,e.dimensions,e.edge,e.error,e.face,e.fov3,e.fov4,e.fov5,e.fov6,e.fov7,e.fov8,e.fov9,e.hidden,e.iteration,e.detail,e.matrix,e.msaa,e.msaaSamples,e.projection3,e.projection4,e.projection5,e.projection6,e.projection7,e.projection8,e.projection9,e.processing,e.ranges,e.space,e.section,e.stellation,e.subsampling,e.sizeVertex,e.sizeEdge,e.polytope,e.vertex,e.zoom])};function aa({runtime:e,setRuntime:t}){return ta(e,t),null}function ra({runtime:e,setRuntime:t,rotations:n,updateRotations:o,updateParams:a}){var s,u,f;window.rt=e,window.ro=n;const i=g.useCallback(c=>l=>{l.type=c,t(m=>({...m,error:l}))},[t]);return nt(e,t),r.jsxs(r.Fragment,{children:[r.jsx(Se,{error:(s=e.error)==null?void 0:s.process,onError:i("process"),children:r.jsx(na,{runtime:e,setRuntime:t})}),e.space?r.jsxs(r.Fragment,{children:[r.jsx(Se,{error:(u=e.error)==null?void 0:u.render,onError:i("render"),children:r.jsx(aa,{runtime:e,setRuntime:t})}),r.jsx(Se,{error:(f=e.error)==null?void 0:f.interact,onError:i("interact"),children:r.jsx(Zt,{runtime:e,rotations:n,updateRotations:o,updateParams:a})})]}):null]})}const oa="modulepreload",sa=function(e,t){return new URL(e,t).href},rn={},ia=function(t,n,o){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=sa(i,o),i in rn)return;rn[i]=!0;const s=i.endsWith(".css"),u=s?'[rel="stylesheet"]':"";if(!!o)for(let l=a.length-1;l>=0;l--){const m=a[l];if(m.href===i&&(!s||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":oa,s||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),s)return new Promise((l,m)=>{c.addEventListener("load",l),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})},jn=r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",strokeWidth:"3",children:[r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m31.376 13.781l-2.673-7.659c-1.554-4.453-7.852-4.453-9.406 0l-4.56 13.067c-.922 2.644 1.04 5.408 3.841 5.408H24"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m15.993 14.24l-8.11.175c-4.716.102-6.663 6.092-2.907 8.946l11.018 8.374c2.23 1.695 5.465.682 6.33-1.982L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m11.675 29.012l-2.34 7.767c-1.36 4.517 3.736 8.219 7.611 5.53l11.369-7.892c2.3-1.597 2.337-4.987.071-6.633L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m24.39 37.683l6.664 4.625c3.875 2.69 8.971-1.012 7.61-5.53l-3.992-13.25c-.807-2.681-4.02-3.764-6.286-2.118L24 24.597"}),r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m36.566 28.27l6.458-4.908c3.756-2.855 1.81-8.845-2.907-8.947l-13.836-.298c-2.8-.06-4.822 2.66-3.956 5.324L24 24.597"})]}),Rn=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("g",{id:"feTarget0",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:r.jsx("g",{id:"feTarget1",fill:"currentColor",fillRule:"nonzero",children:r.jsx("path",{id:"feTarget2",d:"M19.938 13A8.004 8.004 0 0 1 13 19.938V22h-2v-2.062A8.004 8.004 0 0 1 4.062 13H2v-2h2.062A8.004 8.004 0 0 1 11 4.062V2h2v2.062A8.004 8.004 0 0 1 19.938 11H22v2h-2.062ZM12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"})})})}),ca=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"})}),la=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20.777a8.942 8.942 0 0 1-2.48-.969M14 3.223a9.003 9.003 0 0 1 0 17.554m-9.421-3.684a8.961 8.961 0 0 1-1.227-2.592M3.124 10.5c.16-.95.468-1.85.9-2.675l.169-.305m2.714-2.941A8.954 8.954 0 0 1 10 3.223"})}),da=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14",children:r.jsxs("g",{fill:"none",stroke:"currentColor",children:[r.jsx("path",{strokeLinecap:"round",d:"M13.326 8.5a6.5 6.5 0 1 1-.558-4.5"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 2v2.5H11"})]})}),ua=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",children:r.jsx("path",{fill:"currentColor",d:"M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017a.162.162 0 0 0 .054-.06a.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"})}),fa=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 6v1h.75A3.25 3.25 0 0 1 20 10.25v7.5A3.25 3.25 0 0 1 16.75 21h-9.5A3.25 3.25 0 0 1 4 17.75v-7.5A3.25 3.25 0 0 1 7.25 7H8V6a4 4 0 1 1 8 0ZM9.5 6v1h5V6a2.5 2.5 0 0 0-5 0Zm2.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"})}),ma=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M16 5a2.5 2.5 0 0 1 5 0v.25a.75.75 0 0 0 1.5 0V5a4 4 0 0 0-8 0v2H7.25A3.25 3.25 0 0 0 4 10.25v7.5A3.25 3.25 0 0 0 7.25 21h9.5A3.25 3.25 0 0 0 20 17.75v-7.5A3.25 3.25 0 0 0 16.75 7H16V5Zm-4 10.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"})}),pa=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})}),va=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),ha=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"})}),xa=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"})}),ga=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"})}),ba=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"})}),Ea=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M14 19V5h4v14zm-8 0V5h4v14z"})}),Na=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M8 5.14v14l11-7z"})}),on=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"})}),sn=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"})}),ya=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M6.025 16h7.95q.325 0 .463-.275t-.063-.525l-2.425-3.175q-.075-.1-.175-.15t-.225-.05q-.125 0-.225.05t-.175.15l-1.5 1.95q-.075.1-.175.15t-.225.05q-.125 0-.225-.05t-.175-.15L8.1 13q-.075-.1-.175-.138t-.225-.037q-.125 0-.225.038T7.3 13l-1.675 2.2q-.2.25-.062.525t.462.275M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l3.15-3.15q.25-.25.55-.125t.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413T16 20zm0-2h12V6H4zm0 0V6z"})}),wa=r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"m22 17.5l-4-4v1.675l-2-2V6H8.825l-2-2H18v6.5l4-4zm-1.45 5.85L.65 3.45l1.4-1.4l19.9 19.9zM4 4l2 2H4v12h12v-2l2 2v2H2V4zm2 12v-.55q0-1.1 1.1-1.775T10 13q1.8 0 2.9.675T14 15.45V16z"})}),Ta=e=>{for(e=e.replace(/\s/g,""),e=e.replace(/(\w)(\^-?\d+)/g,"($1)$2");;){let t=e.replace(/\((\w+)\)\^(-?\d+)/g,(n,o,a)=>(a=parseInt(a),a<0&&(o=o.split("").reverse().map(i=>ge(i)).join(""),a=-a),o.repeat(a)));if(t===e)break;e=t}return e},Ue=e=>{for(e=e.replace(/\s/g,"");;){let t=e.replace(/(\w+)(\1)+/g,(n,o)=>{const a=n.length/o.length;return`(${o})^${a}`});if(t=t.replace(/\(\((\w+)\)\^(\d+)\)\^(\d+)/g,(n,o,a,i)=>`(${o})^${parseInt(a)*parseInt(i)}`),t=t.replace(/\((\w+)\)\^(\d+)(\1)/g,(n,o,a)=>`(${o})^${parseInt(a)+1}`),t=t.replace(/(\w+)\(\1\)\^(\d+)/g,(n,o,a)=>`(${o})^${parseInt(a)+1}`),t===e)break;e=t}return e=e.replace(/\(([A-Z]+)\)\^(\d+)/g,(t,n,o)=>(n=n.split("").reverse().map(a=>ge(a)).join(""),`(${n})^-${o}`)),e=e.replace(/([A-Z]+)/g,(t,n)=>(n=n.split("").reverse().map(o=>ge(o)).join(""),`(${n})^-1`)),e=e.replace(/\((\w)\)(\^-?\d+)/g,"$1$2"),e};typeof window<"u"&&(window.factor=Ue);function S({type:e,subtype:t,order:n,dimensions:o}){return r.jsxs("span",{className:"space",title:`${e} ${t}${n>1?`of order ${n}`:""}`,children:[e===null||e==="indefinite"||e==="empty"?"𝕏":e==="affine"?"𝔼":e==="finite"?"𝕊":"ℍ",o!==void 0?r.jsxs("sup",{children:[o-1,n>1?r.jsx("sup",{children:n}):null]}):null,e==="hyperbolic"?r.jsx("sub",{children:{compact:" ",paracompact:"*",hypercompact:"+"}[t]}):null]})}const Sa=(...e)=>{if(Array.isArray(e[0]))return{coxeter:e,dimensions:e.length,extended:!0};const t=e.length+1;return{coxeter:new Array(t).fill().map((o,a)=>new Array(t).fill().map((i,s)=>a===s?1:a===s+1||s===a+1?e[X(a,s)]:2)),dimensions:t}},Ia=(...e)=>{if(Array.isArray(e[0]))return{stellation:e};const t=e.length+1;return{stellation:new Array(t).fill().map((o,a)=>new Array(t).fill().map((i,s)=>a===s?1:a===s+1||s===a+1?e[X(a,s)]:1))}},d=(e,t,n,o)=>{const a=Sa(...e);n&&!Array.isArray(n)&&(o=n,n=null);const{dimensions:i}=a,s=new Array(i).fill(0);s[s.length-1]=1;const u={...be,...a,hidden:i<=4?[]:["vertex","face"],curve:i>3,ambiance:"colorful",matrix:ae(i),zoom:i<=3?2:i>4?3:5,centered:!0,section:s,...Object.fromEntries(J(3,i+1).map(f=>[`projection${f}`,Me(f,i)])),...o||{}};return t?u.mirrors=t:u.mirrors=new Array(i).fill().map((f,c)=>c===0?1:0),n?u.stellation=Ia(...n).stellation:u.stellation=new Array(i).fill().map((f,c)=>new Array(i).fill(1)),u},C=(e,t=[])=>({...e,subforms:[...Object.entries(ja(e.params.dimensions)).map(([n,o])=>({name:`${n} ${e.name}`,params:{...e.params,mirrors:o}})),...t]}),M=(e,t,n,o)=>{n&&!Array.isArray(n)&&(o=n,n=null);const a=new Array(e.length).fill(0);return a[a.length-2]=2,a[a.length-1]=1,{...d(e,t,n),ambiance:"cathedral",sizeEdge:40,sizeVertex:50,hidden:["vertex"],curve:!0,section:a,zoom:1,...o}},j=(e,t,n,o)=>{n&&!Array.isArray(n)&&(o=n,n=null);const a=new Array(e.length).fill(0);return a[a.length-1]=1,{...d(e,t,n),ambiance:"cathedral",sizeEdge:40,sizeVertex:50,hidden:["vertex"],curve:!1,section:a,zoom:8,...o}},O=(e,t,n,o)=>{n&&!Array.isArray(n)&&(o=n,n=null);const a=new Array(e.length).fill(0);return a[a.length-1]=1,{...d(e,t,n),ambiance:"neon",hidden:["vertex","face"],centered:!1,section:a,sizeEdge:25,zoom:2,curve:!1,...o}},b=(e,t,n,o)=>{n&&!Array.isArray(n)&&(o=n,n=null);const a=d(e,t,n),i=a.dimemsions,s=new Array(e.length).fill(0);return s[s.length-2]=2,s[s.length-1]=1,{...a,ambiance:"neon",hidden:["vertex","face"],curve:!0,centered:!1,sizeEdge:i>4?15:25,zoom:1.5,...o}},ja=e=>{if(e===3)return{Rectified:[0,1,0],Truncated:[1,1,0],Cantellated:[1,0,1],Runcitruncated:[1,1,0],Bitruncated:[0,1,1],Omnitruncated:[1,1,1],Snub:["s","s","s"]};if(e===4)return{Rectified:[0,1,0,0],Truncated:[1,1,0,0],Cantellated:[1,0,1,0],Cantitruncated:[1,1,1,0],Runcitruncated:[1,1,0,1],Runcinated:[1,0,0,1],Bitruncated:[0,1,1,0],Omnitruncated:[1,1,1,1],Omnisnub:["s","s","s","s"]};if(e===5)return{Rectified:[0,1,0,0,0],Birectified:[0,0,1,0,0],Truncated:[1,1,0,0,0],Cantellated:[1,0,1,0,0],Runcinated:[1,0,0,1,0],Stericated:[1,0,0,0,1],Omnitruncated:[1,1,1,1,1],Omnisnub:["s","s","s","s","s"]};if(e===6)return{Rectified:[0,1,0,0,0,0],Birectified:[0,0,1,0,0,0],Truncated:[1,1,0,0,0,0],Bitruncated:[0,1,1,0,0,0],Tritruncated:[0,0,1,1,0,0],Cantellated:[1,0,1,0,0,0],Bicantellated:[0,1,0,1,0,0],Runcinated:[1,0,0,1,0,0],Biruncinated:[0,1,0,0,1,0],Stericated:[1,0,0,0,1,0],Pentellated:[1,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1]};if(e===7)return{Rectified:[0,1,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0],Truncated:[1,1,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0],Biruncinated:[0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0],Pentellated:[1,0,0,0,0,1,0],Hexicated:[1,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1]};if(e===8)return{Rectified:[0,1,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0],Cantellated:[1,0,1,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0],Runcinated:[1,0,0,1,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0],Stericated:[1,0,0,0,1,0,0,0],Pentellated:[1,0,0,0,0,1,0,0],Hexicated:[1,0,0,0,0,0,1,0],Heptellated:[1,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1]};if(e===9)return{Rectified:[0,1,0,0,0,0,0,0,0],Birectified:[0,0,1,0,0,0,0,0,0],Truncated:[1,1,0,0,0,0,0,0,0],Bitruncated:[0,1,1,0,0,0,0,0,0],Tritruncated:[0,0,1,1,0,0,0,0,0],Quadritruncated:[0,0,0,1,1,0,0,0,0],Cantellated:[1,0,1,0,0,0,0,0,0],Bicantellated:[0,1,0,1,0,0,0,0,0],Tricantellated:[0,0,1,0,1,0,0,0,0],Runcinated:[1,0,0,1,0,0,0,0,0],Biruncinated:[0,1,0,0,1,0,0,0,0],Triruncinated:[0,0,1,0,0,1,0,0,0],Stericated:[1,0,0,0,1,0,0,0,0],Pentellated:[1,0,0,0,0,1,0,0,0],Hexicated:[1,0,0,0,0,0,1,0,0],Heptellated:[1,0,0,0,0,0,0,1,0],Octellated:[1,0,0,0,0,0,0,0,1],Omnitruncated:[1,1,1,1,1,1,1,1,1]}},U={0:"Apeirogonal",3:"Triangular",4:"Square",5:"Pentagonal",6:"Hexagonal",7:"Heptagonal",8:"Octagonal",9:"Nonagonal",10:"Decagonal",11:"Hendecagonal",12:"Dodecagonal"},F={0:"Apeiro",3:"Tri",4:"Tetra",5:"Penta",6:"Hexa",7:"Hepta",8:"Octa",9:"Nona",10:"Deca",11:"Hendeca",12:"Dodeca"},A=([e,t,n])=>{const o=u=>u===0?"infinite":u,a=(u,f,c)=>`${F[u]}${F[f].toLowerCase()}${F[c].toLowerCase()}gonal`,i=(u,f,c)=>`Di${F[u].toLowerCase()}gonal ${F[f]}${F[c].toLowerCase()}gonal`,s=n?[[1,e,n],[e,1,t],[n,t,1]]:[e,t];return{name:(n?`Di${F[t].toLowerCase()}gonal ${F[n]}${F[e].toLowerCase()}gonal`:e===t?`${F[e]}${U[t].toLowerCase()}`:`${U[e]} ${U[t]}`).replace(/aa/g,"a"),params:M(s,[1,0,0]),subforms:[{name:n?a(n,t,e):`Truncated Order-${o(t)} ${U[e]}`,params:M(s,[1,1,0])},{name:n?i(n,t,e):`${F[t]}${U[e].toLowerCase()}`,params:M(s,[0,1,0])},{name:n?a(n,e,t):`Truncated Order-${o(e)} ${U[t]}`,params:M(s,[0,1,1])},{name:n?i(e,n,t):`Order-${o(e)} ${U[t]}`,params:M(s,[0,0,1])},{name:n?a(t,e,n):`Rhombi${F[t].toLowerCase()}${U[e].toLowerCase()}`,params:M(s,[1,0,1])},{name:n?`${F[n]}gonally Truncated ${F[t]}${F[e].toLowerCase()}gonal`:`Truncated ${F[t]}${U[e].toLowerCase()}`,params:M(s,[1,1,1])},{name:n?`Snub ${a(n,t,e)}`:`Order-${o(t)} Snub ${U[e]}`,params:M(s,["s","s","s"])},{name:n?`${a(n,t,e)} Dual`:`Order-${o(e)} ${F[t]}akis ${U[t]}`,params:M(s,["m","m",0])},{name:n?`${i(n,t,e)} Dual`:`Order-${o(e)}-${o(t)} Rhombille`,params:M(s,[0,"m",0])},{name:n?`${a(n,e,t)} Dual`:`Order-${o(t)} ${F[e]}kis ${U[e]}`,params:M(s,[0,"m","m"])},{name:n?`${a(t,e,n)} Dual`:`Deltoidal ${F[t]}${U[e].toLowerCase()}`,params:M(s,["m",0,"m"])},{name:n?`${F[n]}gonally Truncated ${F[t]}${F[e].toLowerCase()}gonal Dual`:`Order-${o(t)}-${o(e)} Kisrhombille`,params:M(s,["m","m","m"])},{name:n?`Snub ${a(n,t,e)} Dual`:`Order-${o(e)}-${o(t)} Floret Pentagonal`,params:M(s,["b","b","b"])}].map(({name:u,params:f})=>({name:u.replace(/aa/g,"a"),params:f}))}},ne=[{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{color:"orange"},children:"★"})," Highlights"]})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:4})," Tesseract"]}),params:d([4,3,3],[1,0,0,0],{hidden:[],sizeVertex:40,curve:!0,ambiance:"neon",zoom:4.2})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",dimensions:3})," Heptagonal Tiling"]}),params:M([7,3],[1,0,0],{hidden:["vertex"],curve:!0,sizeEdge:25,ambiance:"neon"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:3})," Floret Pentagonal Tiling"]}),params:j([6,3],["b","b","b"],{ambiance:"reflection",curve:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:3})," Ideal Triangles"]}),params:M([[1,0,0],[0,1,0],[0,0,1]],[0,0,0],{hidden:["vertex"],curve:!0,sizeEdge:25,ambiance:"neon",centered:!0})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",dimensions:4})," Inverted Alternated Order-5 Cubic Honeycomb"]}),params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{projection4:"inverted",ambiance:"disco",zoom:3})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:3})," 120-cell Cross Section"]}),params:d([5,3,3],[1,0,0,0],{crosssection:!0,section:[0,0,0,1,0],ambiance:"flare",curve:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:8})," E6 (1",r.jsx("sub",{children:"22"}),")"]}),params:d([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0],{hidden:["face"],sizeVertex:25,sizeEdge:15,ambiance:"synthwave",projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:8})," E8 (4",r.jsx("sub",{children:"21"}),")"]}),params:d([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1],{hidden:["face"],sizeVertex:20,sizeEdge:6,curve:!1,ambiance:"neon",projection3:"orthographic",projection4:"orthographic",projection5:"orthographic",projection6:"orthographic",projection7:"orthographic",projection8:"orthographic",zoom:1,centered:!1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Tetrahedron"]}),params:M([3,3,6],[1,0,0,0],{hidden:["vertex"],curve:!0,centered:!0,ambiance:"pure",extrarels:"d",zoom:2})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Horoball"]}),params:M([6,3,4],[1,0,0,0],{hidden:["vertex"],curve:!0,centered:!1,ambiance:"colorful",extrarels:"d",zoom:2})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",dimensions:4})," Order-4 Dodecahedral Honeycomb"]}),params:b([5,3,4],[1,0,0,0],{zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"hypercompact",dimensions:4})," ","Hypercompact Order 3-6 Heptagonal Honeycomb"]}),params:b([7,3,3],[1,0,0,0],{hidden:[],zoom:1.5})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," Ideal Pentahedron"]}),params:M([5,3,6],[1,0,0,0],{hidden:["vertex"],curve:!0,centered:!0,ambiance:"pure",zoom:1.5,extrarels:"d"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:4})," Clifford Torus"]}),params:d([32,2,32],[1,0,0,1],{hidden:["vertex","face"],curve:!0,ambiance:"glass",zoom:3,sizeEdge:20})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:5})," Tesseract Stack"]}),params:d([[1,2,2,2,0],[2,1,2,2,2],[2,2,1,2,2],[2,2,2,1,2],[0,2,2,2,1]],[1,1,1,1,0],{hidden:["vertex"],ambiance:"neon",curve:!1,sizeEdge:20,projection4:"sterographic"})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"hypercompact",order:2,dimensions:4})," ","Ultra-Hyperbolic Surface (Anti-de Sitter Ads3)"]}),params:d([-1,2,-1],[1,0,0,1],[10,1,10],{hidden:["vertex","face"],curve:!0,ambiance:"neon",centered:!1,sizeEdge:15,zoom:1})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"hypercompact",order:2,dimensions:5})," ","Ultra-Hyperbolic Honeycomb (Anti-de Sitter Ads4)"]}),params:d([-1,3,3,-1],[1,0,0,0,1],[10,1,1,10],{hidden:["vertex","face"],curve:!0,ambiance:"neon",centered:!1,zoom:2})},{name:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"hypercompact",order:3,dimensions:6})," ","Ultra-Ultra-Hyperbolic"]}),params:d([-1,2,-1,2,-1],[0,0,0,0,0,0],[10,1,10,1,10],{hidden:["vertex","face"],curve:!0,ambiance:"neon",centered:!1,zoom:2,sizeEdge:15})},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite"})," Spherical Space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:3})," Polyedra"]})},{name:"Triangular Prism",params:d([3,2],[0,1,1]),subforms:[{name:"Square Prism",params:d([4,2],[0,1,1])},{name:"Pentagonal Prism",params:d([5,2],[0,1,1])},{name:"Hexagonal Prism",params:d([6,2],[0,1,1])},{name:"Square Bipyramid",params:d([4,2],[0,"m","m"],{reciprocation:1})},{name:"Pentagonal Bipyramid",params:d([5,2],[0,"m","m"],{reciprocation:1})},{name:"Hexagonal Bipyramid",params:d([6,2],[0,"m","m"],{reciprocation:1})},{name:"Pentagrammic Prism",params:d([5,2],[1,0,1],[2,1])},{name:"Heptagrammic Prism",params:d([7,2],[1,0,1],[2,1])},{name:"Octagrammic Prism",params:d([8,2],[1,0,1],[3,1])},{name:"Pentagrammic Bipyramid",params:d([5,2],["m",0,"m"],[2,1],{reciprocation:1})},{name:"Heptagrammic Bipyramid",params:d([7,2],["m",0,"m"],[2,1],{reciprocation:1})},{name:"Octagrammic Bipyramid",params:d([8,2],["m",0,"m"],[3,1],{reciprocation:1})}]},{name:"Triangular Antiprism",params:d([3,2],["s","s","s"]),subforms:[{name:"Square Antiprism",params:d([4,2],["s","s","s"])},{name:"Pentagonal Antiprism",params:d([5,2],["s","s","s"])},{name:"Hexagonal Antiprism",params:d([6,2],["s","s","s"])},{name:"Pentagrammic Antiprism",params:d([5,2],["s","s","s"],[2,1])},{name:"Penatagrammic Crossed Antiprism",params:d([5,2],["s","s","s"],[3,1])},{name:"Heptagrammic Antiprism",params:d([7,2],["s","s","s"],[2,1])},{name:"Heptagrammic Crossed Antiprism",params:d([7,2],["s","s","s"],[4,1])},{name:"Octagrammic Antiprism",params:d([8,2],["s","s","s"],[3,1])},{name:"Octagrammic Crossed Antiprism",params:d([8,2],["s","s","s"],[5,1])}]},{name:"Tetrahedron",params:d([3,3]),subforms:[{name:"Truncated Tetrahedron",params:d([3,3],[1,1,0])},{name:"Triakis Tetrahedron",params:d([3,3],["m","m",0],{reciprocation:1})},{name:"Two Tetrahedra Compound",params:d([3,3],["c",0,0],{reciprocation:1})},{name:"Snub Tetrahedron",params:d([3,3],["s","s","s"])},{name:"Tetrahemihexahedron",params:d([3,3],[1,0,1],[2,1,1])}]},{name:"Cube",params:d([4,3]),subforms:[{name:"Cuboctahedron",params:d([4,3],[0,1,0])},{name:"Truncated Cube",params:d([4,3],[1,1,0])},{name:"Rhombicuboctahedron",params:d([4,3],[1,0,1])},{name:"Truncated Octahedron",params:d([3,4],[1,1,0])},{name:"Truncated Cuboctahedron",params:d([4,3],[1,1,1])},{name:"Octahedron",params:d([3,4])},{name:"Snub Cube",params:d([4,3],["s","s","s"])},{name:"Snub Octahedron",params:d([3,4],["s","s",0])},{name:"Rhombic Dodecahedron",params:d([4,3],[0,"m",0],{reciprocation:1})},{name:"Triakis Octahedron",params:d([4,3],["m","m",0],{reciprocation:1})},{name:"Triakis Hexahedron",params:d([3,4],["m","m",0],{reciprocation:1})},{name:"Deltoidal Icositetrahedron",params:d([4,3],["m",0,"m"],{reciprocation:1})},{name:"Disdyakis Dodecahedron",params:d([4,3],["m","m","m"],{reciprocation:1})},{name:"Pentagonal Icositetrahedron",params:d([4,3],["b","b","b"],{reciprocation:1})},{name:"Cube Octahedron Compound",params:d([4,3],["c",0,0],{reciprocation:1})},{name:"Hemi-Cube",params:d([4,3],[1,0,0],{extrarels:"(abc)^3"})},{name:"Hemi-Octahedron",params:d([3,4],[1,0,0],{extrarels:"(abc)^3"})},{name:"Octahemioctahedron",params:d([[1,3,3],[3,1,3],[3,3,1]],[0,1,1],[[1,2,1],[2,1,1],[1,1,1]],{extrarels:"(abcb)^2"})},{name:"Cubohemioctahedron",params:d([[1,4,4],[4,1,3],[4,3,1]],[0,1,1],[[1,3,1],[3,1,1],[1,1,1]],{extrarels:"(abcb)^2"})}]},{name:"Dodecahedron",params:d([5,3]),subforms:[{name:"Icosidodecahedron",params:d([5,3],[0,1,0])},{name:"Truncated Dodecahedron",params:d([5,3],[1,1,0])},{name:"Rhombicosidodecahedron",params:d([5,3],[1,0,1])},{name:"Truncate Icosahedron",params:d([3,5],[1,1,0])},{name:"Truncated Icosidodecahedron",params:d([5,3],[1,1,1])},{name:"Icosahedron",params:d([3,5])},{name:"Snub Dodecahedron",params:d([5,3],["s","s","s"])},{name:"Rhombic Triacontahedron",params:d([5,3],[0,"m",0],{reciprocation:1})},{name:"Triakis Icosahedron",params:d([5,3],["m","m",0],{reciprocation:1})},{name:"Pentakis Docecahedron",params:d([3,5],["m","m",0],{reciprocation:1})},{name:"Deltoidal Hexecontahedron",params:d([5,3],["m",0,"m"],{reciprocation:1})},{name:"Disdyakis Triacontahedron",params:d([5,3],["m","m","m"],{reciprocation:1})},{name:"Pentagonal Hexecontahedron",params:d([5,3],["b","b","b"],{reciprocation:1})},{name:"Dodecahedron Icosahedron Compound",params:d([5,3],["c",0,0],{reciprocation:1})},{name:"Hemi-Dodecahedron",params:d([5,3],[1,0,0],{extrarels:"(abc)^5"})},{name:"Hemi-Icosahedron",params:d([3,5],[1,0,0],{extrarels:"(abc)^5"})},{name:"Small Dodecahemidodecahedron",params:d([[1,5,5],[5,1,5],[5,5,1]],[0,1,1],[[1,4,1],[4,1,1],[1,1,1]],{extrarels:"(abcb)^2"})},{name:"Small Icosihemidodecahedron",params:d([[1,3,3],[3,1,5],[4,5,1]],[0,1,1],[[1,2,1],[2,1,1],[1,1,1]],{extrarels:"(abcb)^3"})},{name:"Great Dodecahemicosahedron",params:d([[1,5,3],[5,1,5],[3,5,1]],[1,0,1],[[1,4,1],[4,1,1],[1,1,1]],{extrarels:"(abcb)^3"})},{name:"Small Dodecahemicosahedron",params:d([[1,5,3],[5,1,5],[3,5,1]],[0,1,1],[[1,2,1],[2,1,3],[1,3,1]],{extrarels:"(abcb)^3"})},{name:"Great Icosihemidodecahedron",params:d([[1,3,3],[3,1,5],[3,5,1]],[0,1,1],[[1,2,1],[2,1,3],[1,3,1]],{extrarels:"(abcb)^3"})},{name:"Great Dodecahemidodecahedron",params:d([[1,5,5],[5,1,5],[5,5,1]],[0,1,1],[[1,3,2],[3,1,3],[2,3,1]],{extrarels:"(abcb)^2"})}]},{name:"Great Dodecahedron",params:d([5,5],[1,0,0],[1,2]),subforms:[{name:"Small Stellated Docecahedron Great Docecahedron Compound",params:d([5,5],["c",0,0],[1,2],{reciprocation:1})}]},{name:"Great Icosahedron",params:d([3,5],[1,0,0],[1,2]),subforms:[{name:"Great Icosahedron Great Stellated Dodecahedron Compound",params:d([3,5],["c",0,0],[1,2],{reciprocation:1})}]},{name:"Small Stellated Dodecahedron",params:d([5,5],[1,0,0],[2,1])},{name:"Great Stellated Dodecahedron",params:d([5,3],[1,0,0],[2,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:4})," Polychora"]})},{name:"Tetrahedral Prism",params:d([3,3,2],[1,0,0,1]),subforms:[{name:"Truncated Tetrahedral Prism",params:d([3,3,2],[1,1,0,1])},{name:"Snub Tetrahedral Prism",params:d([3,3,2],["s","s","s",1])},{name:"Omnisnub Tetrahedral Antiprism",params:d([3,3,2],["s","s","s","s"])},{name:"Cubic Prism",params:d([4,3,2],[1,0,0,1])},{name:"Cuboctahedral Prism",params:d([4,3,2],[0,1,0,1])},{name:"Rhombicubochedral Prism",params:d([4,3,2],[1,0,1,1])},{name:"Truncated Cubic Prism",params:d([4,3,2],[1,1,0,1])},{name:"Octahedral Prism",params:d([4,3,2],[0,0,1,1])},{name:"Truncated Octahedral Prism",params:d([4,3,2],[0,1,1,1])},{name:"Truncated Cuboctahedral Prism",params:d([4,3,2],[1,1,1,1])},{name:"Snub Cubic Prism",params:d([4,3,2],["s","s","s",1])},{name:"Omnisnub Cubic Antiprism",params:d([4,3,2],["s","s","s","s"])},{name:"Snub Rhombicubochedral 24-cell",params:d([2,4,3],["s","s",0,1])},{name:"Dodecahedral Prism",params:d([5,3,2],[1,0,0,1])},{name:"Icosidodecahedral Prism",params:d([5,3,2],[0,1,0,1])},{name:"Icosahedral Prism",params:d([5,3,2],[0,0,1,1])},{name:"Truncated Dodacahedral Prism",params:d([5,3,2],[1,1,0,1])},{name:"Rhombicosidodecahedral Prism",params:d([5,3,2],[1,0,1,1])},{name:"Truncated Icosahedral Prism",params:d([5,3,2],[0,1,1,1])},{name:"Truncated Icosidodecahedral Prism",params:d([5,3,2],[1,1,1,1])},{name:"Snub Dodecahedral Prism",params:d([5,3,2],["s","s","s",1])},{name:"Omnisnub Dodecahedral Antiprism",params:d([5,3,2],["s","s","s","s"])},{name:"Great Dodecahedral Prism",params:d([5,5,2],[1,0,0,1],[1,2,1])},{name:"Great Icosahedral Prism",params:d([3,5,2],[1,0,0,1],[1,2,1])},{name:"Small Stellated Dodecahedral Prism",params:d([5,5,2],[1,0,0,1],[2,1,1])},{name:"Great Stellated Dodecahedral Prism",params:d([5,3,2],[1,0,0,1],[2,1,1])}]},{name:"Square Antiprismatic Prism",params:d([4,2,2],["s","s","s",1]),subforms:[{name:"Petagonal Antiprismatic Prism",params:d([5,2,2],["s","s","s",1])},{name:"Hexagonal Antiprismatic Prism",params:d([6,2,2],["s","s","s",1])},{name:"Heptaogonal Antiprismatic Prism",params:d([7,2,2],["s","s","s",1])},{name:"Octagonal Antiprismatic Prism",params:d([8,2,2],["s","s","s",1])}]},{name:"Triangular Triangular Duoprism",params:d([3,2,3],[1,0,1,0]),subforms:[{name:"Triangular Cubic Duoprism",params:d([3,2,4],[1,0,1,0])},{name:"Triangular Pentagonal Duoprism",params:d([3,2,5],[1,0,1,0])},{name:"Triangular Hexagonal Duoprism",params:d([3,2,6],[1,0,1,0])},{name:"Cubic Cubic Duoprism",params:d([4,2,4],[1,0,1,0])},{name:"Cubic Pentagonal Duoprism",params:d([4,2,5],[1,0,1,0])},{name:"Cubic Hexagonal Duoprism",params:d([4,2,6],[1,0,1,0])},{name:"Pentagonal Pentagonal Duoprism",params:d([5,2,5],[1,0,1,0])},{name:"Pentagonal Hexagonal Duoprism",params:d([5,2,6],[1,0,1,0])},{name:"Hexagonal Hexagonal Duoprism",params:d([6,2,6],[1,0,1,0])},{name:"Triangular Cubic Duopyramid",params:d([3,2,4],["m",0,"m",0],{reciprocation:1})},{name:"Triangular Pentagonal Duopyramid",params:d([3,2,5],["m",0,"m",0],{reciprocation:1})},{name:"Triangular Hexagonal Duopyramid",params:d([3,2,6],["m",0,"m",0],{reciprocation:1})},{name:"Cubic Cubic Duopyramid",params:d([4,2,4],["m",0,"m",0],{reciprocation:1})},{name:"Cubic Pentagonal Duopyramid",params:d([4,2,5],["m",0,"m",0],{reciprocation:1})},{name:"Cubic Hexagonal Duopyramid",params:d([4,2,6],["m",0,"m",0],{reciprocation:1})},{name:"Pentagonal Pentagonal Duopyramid",params:d([5,2,5],["m",0,"m",0],{reciprocation:1})},{name:"Pentagonal Hexagonal Duopyramid",params:d([5,2,6],["m",0,"m",0],{reciprocation:1})},{name:"Hexagonal Hexagonal Duopyramid",params:d([6,2,6],["m",0,"m",0],{reciprocation:1})}]},C({name:"5-cell",params:d([3,3,3])}),C({name:"8-cell",params:d([4,3,3])}),C({name:"16-cell",params:d([3,3,4])}),C({name:"24-cell",params:d([3,4,3])}),C({name:"120-cell",params:d([5,3,3])}),C({name:"600-cell",params:d([3,3,5])}),{name:"Snub 24-cell",params:d([[1,3,2,2],[3,1,3,3],[2,3,1,2],[2,3,2,1]],["s","s","s","s"])},{name:"Snub Runcitruncated 24-cell",params:d([3,4,3],["s","s",0,1])},{name:"Icosahedral 120-cell",params:d([3,5,5],[1,0,0,0],[1,1,2],{curve:!1}),subforms:[{name:"Small Stellated 120-cell",params:d([3,5,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Great 120-cell",params:d([5,5,5],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Grand 120-cell",params:d([5,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{name:"Great Stellated 120-cell",params:d([5,3,5],[0,0,0,1],[1,1,2],{curve:!1})},{name:"Grand Stellated 120-cell",params:d([5,5,5],[1,0,0,0],[2,1,2],{curve:!1})},{name:"Great grand 120-cell",params:d([5,5,3],[1,0,0,0],[1,2,1],{curve:!1})},{name:"Great Icosahedral 120-cell",params:d([5,5,3],[0,0,0,1],[1,2,1],{curve:!1})},{name:"Great grand Stellated 120-cell",params:d([5,3,3],[1,0,0,0],[2,1,1],{curve:!1})}]},{name:"Grand 600-cell",params:d([3,3,5],[1,0,0,0],[1,1,2],{curve:!1})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:5})," Polytera"]})},C({name:"5-simplex",params:d([3,3,3,3])}),C({name:"5-cube",params:d([4,3,3,3])}),C({name:"5-orthoplex",params:d([3,3,3,4])}),C({name:"5-demicube",params:d([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,2],[2,2,3,1,3],[2,2,2,3,1]])}),{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:6})," Polypeta"]})},C({name:"6-simplex",params:d([3,3,3,3,3])}),C({name:"6-cube",params:d([4,3,3,3,3])}),C({name:"6-orthoplex",params:d([3,3,3,3,4])}),C({name:"6-demicube",params:d([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"21"})]}),params:d([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"22"})]}),params:d([[1,3,2,2,2,2],[3,1,3,2,2,2],[2,3,1,3,3,2],[2,2,3,1,2,2],[2,2,3,2,1,3],[2,2,2,2,3,1]],[0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:7})," Polyexa"]})},C({name:"7-simplex",params:d([3,3,3,3,3,3])}),C({name:"7-cube",params:d([4,3,3,3,3,3])}),C({name:"7-orthoplex",params:d([3,3,3,3,3,4])}),C({name:"7-demicube",params:d([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"21"})]}),params:d([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"31"})]}),params:d([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"32"})]}),params:d([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,3,2],[2,2,2,3,1,2,2],[2,2,2,3,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:8})," Polyzetta"]})},C({name:"8-simplex",params:d([3,3,3,3,3,3,3])}),C({name:"8-cube",params:d([4,3,3,3,3,3,3])}),C({name:"8-orthoplex",params:d([3,3,3,3,3,3,4])}),C({name:"8-demicube",params:d([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]])}),{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"42"})]}),params:d([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"41"})]}),params:d([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["4",r.jsx("sub",{children:"21"})]}),params:d([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,3,2,2,2],[2,2,3,1,2,2,2,2],[2,2,3,2,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"finite",dimensions:9})," Polyyotta"]})},C({name:"9-simplex",params:d([3,3,3,3,3,3,3,3])}),C({name:"9-cube",params:d([4,3,3,3,3,3,3,3])}),C({name:"9-orthoplex",params:d([3,3,3,3,3,3,3,4])}),C({name:"9-demicube",params:d([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]])}),{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine"})," Euclidean Space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:3})," Tilings"]})},{name:"Triangular",params:j([[1,3,3],[3,1,3],[3,3,1]],[1,0,0]),subforms:[{name:"Truncated Triangular",params:j([[1,3,3],[3,1,3],[3,3,1]],[1,1,0])},{name:"Snub Triangular",params:j([[1,3,3],[3,1,3],[3,3,1]],["s","s","s"])},{name:"Rhobille",params:j([[1,3,3],[3,1,3],[3,3,1]],["m","m","s"])}]},{name:"Square",params:j([4,4],[1,0,0]),subforms:[{name:"Truncated Square",params:j([4,4],[1,1,0])},{name:"Rectified Square",params:j([4,4],[0,1,0])},{name:"Cantellated Square",params:j([4,4],[1,0,1])},{name:"Triakis Square",params:j([4,4],["m","m",0])},{name:"Snub Square",params:j([4,4],["s","s","s"])},{name:"Cairo Pentagonal",params:j([4,4],["b","b","b"])},{name:"Snub Square (2)",params:j([4,4],["s","s",0])},{name:"Snub Square (3)",params:j([4,4],["s","s",1])},{name:"Snub Square (4)",params:j([4,4],["s",1,0])},{name:"Snub Square (5)",params:j([4,4],["s",0,1])},{name:"Snub Square (6)",params:j([4,4],["s",1,1])}]},C({name:"Hexagonal",params:j([6,3],[1,0,0])},[{name:"Triakis Triangular",params:j([6,3],["m","m",0])},{name:"Deltaoidal Trihexagonal",params:j([6,3],["m",0,"m"])},{name:"Kisrhombille",params:j([6,3],["m","m","m"])},{name:"Floret Pentagonal",params:j([6,3],["b","b","b"])},{name:"Snub Hexagonal (2)",params:j([6,3],["s","s",0])},{name:"Snub Hexagonal (3)",params:j([6,3],["s","s",1])},{name:"Snub Hexagonal (4)",params:j([6,3],["s",1,0])},{name:"Snub Hexagonal (5)",params:j([6,3],["s",0,1])},{name:"Snub Hexagonal (6)",params:j([6,3],["s",1,1])}]),{name:"Apeirogonal Hosohedron",params:j([2,0],[1,0,0]),subforms:[{name:"Apeirogonal Dihedron",params:j([2,0],[0,0,1])},{name:"Apeirogonal Prism",params:j([2,0],[1,1,0])},{name:"Apeirogonal Antiprism",params:j([2,0],["s","s",0])},{name:"Apeirogonal Deltohedron",params:j([2,0],["b","b",0])}]},{name:"Elongated Triangular",params:j([0,2,0],[0,"s","s",1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:4})," Honeycombs"]})},{name:"Cubic",params:O([4,3,4],[1,0,0,0])},{name:"Octet",params:O([[1,3,2,2],[3,1,3,4],[2,3,1,2],[2,4,2,1]],[1,0,0,0])},{name:"Quarter Cubic",params:O([[1,3,2,3],[3,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:5})," 4-Honeycombs"]})},{name:"Tesseractic",params:O([4,3,3,4],[1,0,0,0,0])},{name:"16-cellic",params:O([3,3,4,3],[1,0,0,0,0])},{name:"24-cellic",params:O([3,4,3,3],[1,0,0,0,0])},{name:"4-simpletic",params:O([[1,3,2,2,3],[3,1,3,2,2],[2,3,1,3,2],[2,2,3,1,3],[3,2,2,3,1]],[1,0,0,0,0])},{name:"Quarter Tesseractic",params:O([[1,2,3,2,2],[2,1,3,2,2],[3,3,1,3,3],[2,2,3,1,2],[2,2,3,2,1]],[1,0,0,1,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:6})," 5-Honeycombs"]})},{name:"5-simplex",params:O([[1,3,2,2,2,3],[3,1,3,2,2,2],[2,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,3],[3,2,2,2,3,1]],[1,0,0,0,0,0])},{name:"5-cubic",params:O([4,3,3,3,4],[1,0,0,0,0,0])},{name:"5-demicubic",params:O([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,2],[2,2,2,3,1,4],[2,2,2,2,4,1]],[1,0,0,0,0,0])},{name:"Quarter 5-cubic",params:O([[1,2,3,2,2,2],[2,1,3,2,2,2],[3,3,1,3,2,2],[2,2,3,1,3,3],[2,2,2,3,1,2],[2,2,2,3,2,1]],[1,0,0,0,0,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:7})," 6-Honeycombs"]})},{name:"6-simplex",params:O([[1,3,2,2,2,2,3],[3,1,3,2,2,2,2],[2,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,3],[3,2,2,2,2,3,1]],[1,0,0,0,0,0,0])},{name:"6-cubic",params:O([4,3,3,3,3,4],[1,0,0,0,0,0,0])},{name:"6-demicubic",params:O([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,2],[2,2,2,2,3,1,4],[2,2,2,2,2,4,1]],[1,0,0,0,0,0,0])},{name:"Quarter 6-cubic",params:O([[1,2,3,2,2,2,2],[2,1,3,2,2,2,2],[3,3,1,3,2,2,2],[2,2,3,1,3,2,2],[2,2,2,3,1,3,3],[2,2,2,2,3,1,2],[2,2,2,2,3,2,1]],[1,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"22"})]}),params:O([[1,3,2,2,2,2,2],[3,1,3,2,2,2,2],[2,3,1,3,2,3,2],[2,2,3,1,3,2,2],[2,2,2,3,1,2,2],[2,2,3,2,2,1,3],[2,2,2,2,2,3,1]],[0,0,0,0,1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:8})," 7-Honeycombs"]})},{name:"7-simplex",params:O([[1,3,2,2,2,2,2,3],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,3],[3,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{name:"7-cubic",params:O([4,3,3,3,3,3,4],[1,0,0,0,0,0,0,0])},{name:"7-demicubic",params:O([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,2,3,1,3,2,2],[2,2,2,2,3,1,3,2],[2,2,2,2,2,3,1,4],[2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0])},{name:"Quarter 7-cubic",params:O([[1,2,3,2,2,2,2,2],[2,1,3,2,2,2,2,2],[3,3,1,3,2,2,2,2],[2,2,3,1,3,2,2,2],[2,2,3,3,1,3,2,2],[2,2,2,2,3,1,3,3],[2,2,2,2,2,3,1,2],[2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"33"})]}),params:O([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[0,0,0,0,1,0,0,0])},{name:r.jsxs(r.Fragment,{children:["3",r.jsx("sub",{children:"31"})]}),params:O([[1,3,2,2,2,2,2,2],[3,1,3,2,2,2,2,2],[2,3,1,3,2,2,2,2],[2,2,3,1,3,3,2,2],[2,2,2,3,1,2,2,2],[2,2,2,3,2,1,3,2],[2,2,2,2,2,3,1,3],[2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"affine",dimensions:9})," 8-Honeycombs"]})},{name:"8-simplex",params:O([[1,3,2,2,2,2,2,2,3],[3,1,3,2,2,2,2,2,2],[2,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[3,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:"8-cubic",params:O([4,3,3,3,3,3,3,4],[1,0,0,0,0,0,0,0,0])},{name:"8-demicubic",params:O([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,4],[2,2,2,2,2,2,2,4,1]],[1,0,0,0,0,0,0,0,0])},{name:"Quarter 8-cubic",params:O([[1,2,3,2,2,2,2,2,2],[2,1,3,2,2,2,2,2,2],[3,3,1,3,2,2,2,2,2],[2,2,3,1,3,2,2,2,2],[2,2,2,3,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,3],[2,2,2,2,2,2,3,1,2],[2,2,2,2,2,2,3,2,1]],[1,0,0,0,0,0,0,0,1])},{name:r.jsxs(r.Fragment,{children:["1",r.jsx("sub",{children:"52"})]}),params:O([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,1,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["2",r.jsx("sub",{children:"51"})]}),params:O([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[1,0,0,0,0,0,0,0,0])},{name:r.jsxs(r.Fragment,{children:["5",r.jsx("sub",{children:"21"})]}),params:O([[1,3,2,2,2,2,2,2,2],[3,1,3,2,2,2,2,2,2],[2,3,1,3,3,2,2,2,2],[2,2,3,1,2,2,2,2,2],[2,2,3,2,1,3,2,2,2],[2,2,2,2,3,1,3,2,2],[2,2,2,2,2,3,1,3,2],[2,2,2,2,2,2,3,1,3],[2,2,2,2,2,2,2,3,1]],[0,0,0,0,0,0,0,0,1])},{type:"title",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic"})," Hyperbolic Space"]})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",dimensions:3})," Tilings"]})},A([7,3]),A([8,3]),A([5,4]),A([6,4]),A([7,4]),A([8,4]),A([6,5]),A([6,6]),A([8,6]),A([7,7]),A([8,8]),A([0,3]),A([0,4]),A([0,5]),A([0,0]),A([4,3,3]),A([4,4,3]),A([4,4,4]),A([5,3,3]),A([5,4,3]),A([5,4,4]),A([6,3,3]),A([6,4,3]),A([6,4,4]),A([0,3,3]),A([0,4,3]),A([0,4,4]),A([0,0,3]),A([0,0,4]),A([0,0,0]),{name:"Infinite Order Apeirogonal",params:M([0,0],[1,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"compact",dimensions:4})," Compact Hyperbolic Honeycombs"]})},{name:"Icosahedral",params:b([3,5,3],[1,0,0,0])},{name:"Order-4 Dodecahedral",params:b([5,3,4],[1,0,0,0])},{name:"Order-5 Dodecahedral",params:b([5,3,5],[1,0,0,0])},{name:"Alternated Order-5 Cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0])},{name:"Tetrahedral Cubic",params:b([[1,4,2,3],[4,1,3,2],[2,3,1,3],[3,2,3,1]],[1,0,0,0],{})},{name:"Tetrahedral Dodecahedral",params:b([[1,3,2,5],[3,1,3,2],[2,3,1,3],[5,2,3,1]],[1,0,0,0],{})},{name:"Cubic Octahedral",params:b([[1,3,2,4],[3,1,4,2],[2,4,1,3],[4,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Dodcahedral",params:b([[1,3,2,5],[3,1,4,2],[2,4,1,3],[5,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Icosahedral",params:b([[1,3,2,5],[3,1,5,2],[2,5,1,3],[5,2,3,1]],[1,0,0,0],{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:4})," ","Paracompact Hyperbolic Honeycombs"]})},{name:"Triangular",params:b([3,6,3],[1,0,0,0])},{name:"Hexagonal",params:b([6,3,3],[1,0,0,0])},{name:"Order-6 Tetrahedral",params:b([3,3,6],[1,0,0,0])},{name:"Alternated Order-6 Cubic",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,0],{})},{name:"Order-5 Hexagonal",params:b([6,3,5],[1,0,0,0])},{name:"Alternated Order-5 Hexagonal",params:b([[1,2,3,2],[2,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{})},{name:"Order-6 Hexagonal",params:b([6,3,6],[0,0,0,1])},{name:"Square",params:b([4,4,3],[1,0,0,0])},{name:"Alternated Square",params:b([[1,2,4,2],[2,1,4,2],[4,4,1,3],[2,2,3,1]],[1,0,0,0],{})},{name:"Order-4 Square",params:b([4,4,4],[0,1,0,0])},{name:"Tetrahedral Square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,3],[4,2,3,1]],[0,1,0,0],{})},{name:"Cubic Square",params:b([[1,4,2,4],[4,1,3,2],[2,3,1,4],[4,2,4,1]],[1,0,0,0],{})},{name:"Alternated Cubic Square",params:b([[1,2,4,3],[2,1,3,2],[4,3,1,4],[3,2,4,1]],[1,0,0,0],{})},{name:"Quarter order Square",params:b([[1,4,2,4],[4,1,4,2],[2,4,1,4],[4,2,4,1]],[1,0,0,0],{})},{name:"Tetrahedral Hexagonal",params:b([[1,3,2,6],[3,1,3,2],[2,3,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Octahedral Hexagonal",params:b([[1,3,2,6],[3,1,4,2],[2,4,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Icosahedral Hexagonal",params:b([[1,3,2,6],[3,1,5,2],[2,5,1,3],[6,2,3,1]],[1,0,0,0],{})},{name:"Hexagonal Triangular",params:b([[1,3,2,6],[3,1,6,2],[2,6,1,3],[6,2,3,1]],[0,0,0,1],{})},{name:"Alternated Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,3],[2,2,3,1]],[1,0,0,0],{})},{name:"Alternated Order-4 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,4],[2,2,4,1]],[1,0,0,0],{})},{name:"Alternated Order-5 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,5],[2,2,5,1]],[1,0,0,0],{})},{name:"Runcic Order-6 Hexagonal",params:b([[1,3,3,2],[3,1,3,2],[3,3,1,6],[2,2,6,1]],[1,0,0,1],{})},{name:"Quarter Order-4 Hexagonal",params:b([[1,3,3,2],[3,1,3,3],[3,3,1,3],[2,3,3,1]],[1,1,0,0],{})},{name:"Hexagonal",params:b([[1,3,3,3],[3,1,3,3],[3,3,1,3],[3,3,3,1]],[1,1,1,1],{})},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"hypercompact",dimensions:4})," ","Hypercompact Hyperbolic Honeycombs"]})},{name:"Order 7-3 Triangular",params:b([3,7,3],[1,0,0,0])},{name:"Order 3-6 Heptagonal",params:b([7,3,6],[1,0,0,0])},{name:"Order-7 Dodecahedral",params:b([5,3,7],[1,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",dimensions:5})," Compact Hyperbolic 4-Honeycombs"]})},{name:"Order-5 5-cell",params:b([3,3,3,5],[1,0,0,0,0])},{name:"120-cell",params:b([5,3,3,3],[1,0,0,0,0])},{name:"Order-5 Tesseratic",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-4 120-cell",params:b([4,3,3,5],[1,0,0,0,0])},{name:"Order-5 120-cell",params:b([5,3,3,5],[1,0,0,0,0])},{name:"Small Stellated 120-cell",params:b([5,5,3,3],[1,0,0,0,0],[2,1,1,1])},{name:"Pentagrammic-order 600-cell",params:b([3,3,5,5],[1,0,0,0,0],[1,1,1,2])},{name:"Order-5 Icosahedral 120-cell",params:b([3,5,5,5],[1,0,0,0,0],[1,1,2,1])},{name:"Great 120-cell",params:b([5,5,5,3],[1,0,0,0,0],[1,2,1,1])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:5})," ","Paracompact Hyperbolic 4-Honeycombs"]})},{name:"Order-4 24-cell",params:b([3,4,3,4],[1,0,0,0,0])},{name:"Cubic Honeycomb",params:b([4,3,4,3],[1,0,0,0,0])},{type:"group",content:r.jsxs(r.Fragment,{children:[r.jsx(S,{type:"hyperbolic",subtype:"paracompact",dimensions:6})," ","Paracompact Hyperbolic 5-Honeycombs"]})},{name:"5-orthoplex",params:b([3,3,3,4,3],[1,0,0,0,0,0])},{name:"24-cell Honeycomb",params:b([3,4,3,3,3],[1,0,0,0,0,0])},{name:"16-cell Honeycomb",params:b([3,3,4,3,3],[1,0,0,0,0,0])},{name:"Order-4 24-cell Honeycomb",params:b([3,4,3,3,4],[1,0,0,0,0,0])},{name:"Tesseratic Honeycomb",params:b([4,3,3,4,3],[1,0,0,0,0,0])}];function De({allowNull:e,name:t,value:n,onChange:o,...a}){const i=g.useCallback(u=>{let{name:f,checked:c}=u.target,l;e?l=n===!1?!0:n?null:!1:l=c,o(f,l)},[e,o,n]),s=g.useRef(null);return g.useLayoutEffect(()=>{e&&s.current&&(n===null?s.current.indeterminate=!0:s.current.indeterminate=!1)},[n,e]),r.jsx("input",{type:"checkbox",ref:s,name:t,checked:n||!1,onChange:i})}const ke=e=>{if(["string","number"].includes(typeof e))return e;if(e instanceof Array)return e.map(ke).join("");if(typeof e=="object"&&e)return ke(e.props.children)},cn=(e,t)=>typeof e=="string"?ke(e).toLowerCase().includes(t.toLowerCase()):!1,Ra=g.memo(function e({name:t,index:n,params:o,search:a,subforms:i=[],sub:s=!1,onPreset:u}){const[f,c]=g.useState(!0),[l,m]=g.useState(!1);return g.useEffect(()=>{if(!a){c(!0),m(!1);return}if(cn(t,a)){c(!0);return}if(i.length&&i.some(({name:p})=>cn(p,a))){c(!0),m(!0);return}c(!1),m(!1)},[t,a,i]),f?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`preset${s?" sub":""}`,onClick:()=>u(o,n),children:[r.jsxs("div",{className:`preset-header preset-name-${i.length?"button":"only"}`,children:[i.length?r.jsx("button",{className:`preset-toggle ${l?"open":"closed"}`,onClick:p=>{p.stopPropagation(),m(!l)},children:l?"-":"+"}):null,r.jsx("span",{className:"preset-name",children:t})]}),r.jsx(bn,{coxeter:o.coxeter,mirrors:o.mirrors,stellation:o.stellation})]}),l&&i.map((p,v)=>r.jsx(e,{...p,sub:!0,search:a,onPreset:u},v))]}):null});function Oa({open:e,onPreset:t,onExportImage:n,closePresets:o}){const[a,i]=g.useState(""),[s,u]=g.useState(""),f=g.useCallback(c=>{u(c.target.value),qn(i(c.target.value),50)},[]);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`presets-overlay ${e?"shown":"hidden"}`,onClick:o}),r.jsx("div",{className:`presets ${e?"shown":"hidden"}`,children:r.jsxs("div",{className:"presets-modal",children:[r.jsxs("div",{className:"presets-header",children:[r.jsxs("div",{className:"presets-search",children:[r.jsx("input",{type:"text",placeholder:"Search",value:s,onChange:f}),r.jsx("button",{className:"presets-clear",onClick:()=>{i(""),u("")},children:ha})]}),r.jsxs("div",{className:"presets-actions",children:[r.jsx("a",{className:"presets-action",href:"https://florian.mounier.dev/",children:xa}),r.jsx("button",{className:"presets-action",onClick:n,children:ga}),r.jsx("button",{className:"presets-action",onClick:o,children:ba})]})]}),r.jsx("div",{className:"presets-list",children:ne.map(({type:c,content:l,name:m,params:p,subforms:v},h)=>r.jsx(g.Fragment,{children:c==="title"?r.jsx("h2",{children:l}):c==="group"?r.jsx("h4",{children:l}):r.jsx(Ra,{name:m,index:h,params:p,search:a,subforms:v,onPreset:t})},h))})]})})]})}const ln=g.memo(function({rotations:t,space:n,axis:o}){if(!n)return null;const a=n.gram.length,i=t.shift*2+o;if(i>=t.combinations.length)return null;let s=t.combinations[i];const u=s.some(l=>l<0)?"parabolic":s.some(l=>n.eigens.values[l]<0)?"hyperbolic":s.some(l=>n.eigens.values[l]===0)?"translation":"spheric",f=En.slice(0,a).split(""),c=u==="parabolic"?s.map(l=>f[K(l)]).join("->"):f.filter((l,m)=>!s.includes(m));return r.jsxs("aside",{className:`${o?"y":"x"}-rotation`,children:[c,u==="parabolic"?r.jsx("sup",{children:"∞"}):u==="hyperbolic"?r.jsx("sup",{children:"†"}):u==="translation"?r.jsx("sup",{children:"0"}):""]})}),Aa=e=>e<4?[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M7 2m12 9H5v2h14z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"})}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"})})][e]:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[r.jsx("path",{fill:"currentColor",d:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9"}),r.jsx("text",{x:"12",y:"13.5",dominantBaseline:"middle",textAnchor:"middle",fontSize:"14",children:e})]}),dn=(e,t,n)=>{if(!G.includes(t)){const o=t.split(/_/)[0],a=n.facets[G.indexOf(o)].parts.map(({key:i})=>i);if(e.includes(o))return e.concat(a).filter(i=>![o,t].includes(i));a.every(i=>e.includes(i)||i===t)&&(e=e.concat(o))}return e.concat(t)},un=(e,t,n)=>{if(G.includes(t)){const o=n.facets[G.indexOf(t)].parts.map(({key:a})=>a);o.every(a=>e.includes(a))&&(e=e.filter(a=>!o.includes(a)))}else{const o=t.split(/_/)[0];e=e.filter(a=>a!==o)}return e.filter(o=>o!==t)};function Da({runtime:e,setRuntime:t,showUI:n,updateParams:o}){const a=g.useCallback(()=>{var l;e.paused&&((l=e.polytope)==null?void 0:l.size)>e.limit&&o({limit:e.limit+e.start}),t(m=>({...m,paused:!m.paused}))},[e.paused,e.polytope,e.limit,e.start,t,o]),i=g.useCallback(l=>{const p=+l.target.closest("button").dataset.rank,v=G[p],E=!e.hidden.includes(v)?dn(e.hidden,v,e.polytope):un(e.hidden,v,e.polytope);o({hidden:E})},[e.hidden,e.polytope,o]),s=g.useCallback(l=>{const p=l.target.closest("button").dataset.key,h=!e.hidden.includes(p)?dn(e.hidden,p,e.polytope):un(e.hidden,p,e.polytope);o({hidden:h})},[e.hidden,e.polytope,o]),u=g.useCallback(l=>{const m=+l.target.closest("button").dataset.key;o({reciprocation:m})},[o]);if(!e.polytope)return r.jsx("aside",{className:"shape"});const f=e.polytope.facets.every(l=>l.parts.length<2),c=l=>{if(!isFinite(l))return"∞";if(l===0)return e.polytope.infinite?"∞":"";let m=l.toLocaleString();return e.polytope.infinite&&(m+=" (∞)"),m};return n==="empty"?null:r.jsxs("aside",{className:"shape",children:[e.done?null:r.jsx("div",{className:"buttons",children:e.paused?r.jsx("button",{className:"iterate button",onClick:a,title:"Resume enumeration",children:Na}):r.jsx("button",{className:"iterate button",onClick:a,title:"Pause enumeration",children:Ea})}),r.jsx("div",{className:`shape-info${e.processing?" shape-processing":""}${["advanced","full"].includes(n)&&!e.polytope.fundamental?" shape-info-expanded":""}`,children:[...e.polytope.facets].reverse().filter(l=>l).map(l=>r.jsxs(g.Fragment,{children:[r.jsxs("div",{className:"shape-icon",style:{gridRow:`span ${l.parts.length}`},children:[Aa(l.dimensions),e.polytope.dual&&!e.curve?r.jsx("button",{className:"shape-reciprocation button","data-key":e.reciprocation===l.dimensions?-1:l.dimensions,onClick:u,children:e.reciprocation===l.dimensions?jn:Rn}):null,l.dimensions<3?r.jsx("button",{title:G[l.dimensions],className:"shape-hidden button","data-rank":l.dimensions,onClick:i,children:e.hidden.includes(G[l.dimensions])?sn:on}):null]}),r.jsxs("div",{className:"shape-count",style:{gridRow:`span ${l.parts.length}`},children:[l.processing&&l.processing!==l.count?r.jsxs("small",{children:[c(l.processing)," / "]}):null,c(l.count)]}),r.jsx("div",{className:l.dimensions>0&&["advanced","full"].includes(n)&&!l.fundamental&&l.parts.length>1?" shape-split":"",style:{gridRow:`span ${l.parts.length}`}}),["advanced","full"].includes(n)&&!e.polytope.fundamental?l.parts.map(({count:m,coxeter:p,stellation:v,mirrors:h,key:E})=>r.jsxs(g.Fragment,{children:[r.jsx("div",{className:"shape-count shape-detail-count",title:E,children:!f&&l.parts.length>1?c(m):null}),r.jsxs("div",{className:`shape-view-diagram ${E.startsWith("s")?" shape-snub":""}`,children:[l.dimensions<3&&l.parts.length>1?r.jsx("button",{className:"shape-hidden button","data-key":E,title:E,onClick:s,children:e.hidden.includes(E)||e.hidden.includes(G[l.dimensions])?sn:on}):r.jsx("div",{}),p&&l.count?r.jsx("button",{className:"shape-detail-button",onClick:()=>o({coxeter:p,stellation:v,mirrors:h,dimensions:p.length,matrix:ae(p.length)}),children:r.jsx(bn,{coxeter:p,stellation:v,mirrors:h})}):null]})]},E)):null]},`shape-${l.dimensions}`))})]})}const Ca=()=>{try{return localStorage.getItem("showUI")||"simple"}catch(e){return console.error(e),"simple"}};function _a({runtime:e,params:t,rotations:n,setRuntime:o,updateParams:a,updateRotations:i}){var Be,$e,Ve,Ge,Xe;const[s,u]=g.useState(Ca),[f,c]=g.useState(!1),[l,m]=g.useState(0),p=g.useCallback(()=>{c(!1)},[]),v=g.useCallback(x=>{let{name:T,value:D}=x.target;a({[T]:D})},[a]),h=g.useCallback((x,T)=>{a({[x]:T})},[a]),E=g.useCallback(()=>u(x=>{const T={simple:"advanced",advanced:"full",full:"empty",empty:"simple"}[x];try{localStorage.setItem("showUI",T)}catch(D){console.error(D)}return T}),[]),w=g.useCallback((x,T)=>{a(x,!0),m(T),p()},[a,p]),N=g.useCallback(()=>{const x=ae(e.dimensions);x._reset=!0,e.camera.center(),a({matrix:x,centered:!0})},[e.dimensions,e.camera,a]),R=g.useCallback(()=>{const x=ae(e.dimensions);x._reset=!0,e.camera.center(),a({matrix:x,centered:!1})},[e.dimensions,e.camera,a]),I=g.useCallback(()=>{a(Object.fromEntries(J(3,e.dimensions+1).map(x=>[[`projection${x}`,"orthographic"],[`fov${x}`,90]]).flat()))},[a,e.dimensions]),_=g.useCallback(()=>{a(Object.fromEntries(J(3,e.dimensions+1).map(x=>[`projection${x}`,Me(x,e.dimensions)])))},[a,e.dimensions]),$=g.useCallback(x=>{i("shift",(n.shift+1)%n.maxShift)},[n.maxShift,n.shift,i]),L=g.useCallback(x=>{i("camera",!n.camera)},[n.camera,i]),le=g.useCallback(x=>{i("lock",!n.lock)},[n.lock,i]),z=g.useCallback(x=>{i("auto",n.auto==="free"?"damp":"free")},[n.auto,i]),H=g.useCallback(()=>{if(!e.polytope||!t.extrarels)return;const x=T=>{const D=Ta(T);return D.split("").every(Q=>e.polytope.gens.includes(Q))?Ue(D):T};a({extrarels:t.extrarels.split(",").map(T=>x(T)).join(", ")})},[t.extrarels,e.polytope,a]),Te=g.useMemo(()=>{var x;return(x=e.polytope)==null?void 0:x.rels.map(T=>Ue(T)).join(", ")},[(Be=e.polytope)==null?void 0:Be.rels.join(",")]),Dn=g.useCallback(async()=>{p();const x=window.prompt("Select image resolution","5000x5000");if(!x||!x.includes("x")){console.error("Invalid resolution");return}const[T,D]=x.split("x").map(ee=>parseInt(ee));if(isNaN(T)||isNaN(D)){console.error("Invalid resolution");return}const ue=await(await ia(()=>import("./export-8e036379.js"),["./export-8e036379.js","./CoxeterMatrix-62799d22.js"],import.meta.url)).makeBigPng(e,T,D);if(ue){const ee=document.createElement("a");document.body.appendChild(ee),ee.style.display="none";const Cn=window.URL.createObjectURL(ue);ee.href=Cn,ee.download=`${document.title}-${T}x${D}`,ee.click()}},[p,e]),He=g.useMemo(()=>({square:J(3,e.dimensions+1).some(x=>t[`projection${x}`]!=="orthographic"),cube:J(3,e.dimensions+1).some(x=>t[`projection${x}`]!==Me(x,e.dimensions))}),[t.projection3,t.projection4,t.projection5,t.projection6,t.projection7,t.projection8,t.projection9,e.dimensions]);return g.useEffect(()=>{const x=T=>{if(T.target.tagName!=="INPUT"){if(T.key==="ArrowLeft"&&T.ctrlKey&&l>0){let D=l-1;for(;ne[D].type;){if(D<2)return;D--}w(ne[D].params,D)}else if(T.key==="ArrowRight"&&T.ctrlKey&&l<ne.length-1){let D=l+1;for(;ne[D].type;){if(D>ne.length-2)return;D++}w(ne[D].params,D)}}};return window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[w,l]),r.jsxs(r.Fragment,{children:[r.jsx(Oa,{open:f,onPreset:w,onExportImage:Dn,closePresets:p}),r.jsxs("main",{className:e.error?"error ui":"ui",title:e.error,children:[r.jsxs("div",{className:"ui-row ui-row-top",children:[["simple","advanced","full"].includes(s)?r.jsxs("aside",{className:"controls",children:[n.maxShift>1?r.jsxs("button",{className:"rotation-button button",onClick:$,title:"Rotation Mode",children:[r.jsx("div",{className:"rotation",style:{transform:`rotate(${n.shift/n.maxShift*360}deg)`},children:da}),r.jsx("sup",{children:n.shift+1}),r.jsx(ln,{rotations:n,space:e.space,axis:0}),r.jsx(ln,{rotations:n,space:e.space,axis:1})]}):null,r.jsxs("div",{className:"subcontrols",children:[r.jsx("button",{className:"button",onClick:le,children:n.lock?fa:ma}),r.jsx("button",{className:"button anim-view",onClick:z,title:"Animate rotations",children:n.auto==="free"?ca:n.auto==="damp"?la:"?"}),r.jsx("button",{className:"button",onClick:N,title:"Center View",children:Rn}),r.jsx("button",{className:"button",onClick:R,title:"Coxeter View",children:jn}),["advanced","full"].includes(s)?r.jsxs(r.Fragment,{children:[He.square&&r.jsx("button",{className:"button",onClick:I,title:"Orthographic",children:va}),He.cube&&r.jsx("button",{className:"button",onClick:_,title:"Stereographic",children:pa})]}):null,r.jsx("button",{className:"button",onClick:L,title:"Rotate camera",children:n.camera?ya:wa})]})]}):null,["simple","advanced","full"].includes(s)&&r.jsx(Wn,{dimensions:t.dimensions,coxeter:t.coxeter,mirrors:t.mirrors,stellation:t.stellation,extended:t.extended,space:e.space,onChange:h,preview:!0})]}),r.jsxs("div",{className:"ui-row ui-row-middle",children:[r.jsx(Da,{runtime:e,setRuntime:o,showUI:s,updateParams:a}),["advanced","full"].includes(s)&&r.jsxs("aside",{className:"view",children:[r.jsx(V,{name:"msaaSamples",label:"MSAA",min:0,step:1,max:be.msaaSamples,value:t.msaaSamples,toggler:t.msaa,togglerName:"msaa",onChange:h}),r.jsx("div",{className:"projection",children:r.jsxs("label",{className:"number-label",children:[r.jsx("span",{className:"number-label",children:"Detail"}),r.jsxs("label",{className:"boolean-label",children:[r.jsx(De,{name:"adaptative",value:t.adaptative,onChange:h}),"Auto"]}),r.jsx("select",{name:"detail",value:e.detail,onChange:x=>o(T=>({...T,detail:x.target.value})),children:se.map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,T=>T.toUpperCase())},x))})]})}),s==="full"&&r.jsx(V,{name:"subsampling",label:"subsampling",min:.1,step:.1,value:t.subsampling,onChange:h}),t.dimensions>=3?J(3,t.dimensions+1).map(x=>r.jsxs("div",{className:"projection",children:[s==="full"&&r.jsx(V,{label:`${x}D FOV`,name:`fov${x}`,step:1,value:t[`fov${x}`],onChange:h}),r.jsxs("label",{className:"number",children:[r.jsxs("span",{className:"number-label",children:[x,"D Projection"]}),r.jsx("select",{name:`projection${x}`,value:t[`projection${x}`],onChange:v,children:[...hn.filter((T,D)=>{var Q;return x===3&&e.dimensions===3&&((Q=e.space)==null?void 0:Q.curvature)<0||D<9})].map(T=>r.jsx("option",{value:T,children:T.replace(/_/g," ").replace(/./,D=>D.toUpperCase())},T))})]})]},x)):null,s==="full"&&r.jsxs(r.Fragment,{children:[r.jsxs("label",{className:"boolean-label",children:["CrossSection",r.jsx(De,{name:"crosssection",value:t.crosssection,onChange:h})]}),t.crosssection?J(t.dimensions+1).map(x=>r.jsx("div",{className:"plane",children:r.jsx(V,{name:`section[${x}]`,label:x===t.dimensions?"d":En[x],min:-1/0,step:.1,value:t.section[x],onChange:(T,D)=>h("section",t.section.map((Q,ue)=>x===ue?D:Q))})},x)):null]})]})]}),r.jsxs("div",{className:"ui-row ui-row-bottom",children:[["simple","advanced","full"].includes(s)?r.jsx("button",{className:"preset-button button",onClick:()=>c(x=>!x),title:"Presets",children:ua}):null,["advanced","full"].includes(s)&&r.jsxs("aside",{className:"parameters",children:[(s==="full"||s==="advanced"&&t.extrarels)&&(($e=e.polytope)!=null&&$e.gens.length)?r.jsxs("div",{className:"rels",children:[r.jsxs("label",{className:"number-label",children:[r.jsxs("span",{children:[e.polytope.gens.split("").map(x=>r.jsxs("span",{className:"generator",children:[x,r.jsx("sub",{children:e.polytope.transforms[x]})]},x)).reduce((x,T)=>[x,", ",T])," ","/ ",e.polytope.subgens.split("").join(", ")," |"," "]}),r.jsx("div",{"data-autosize":t.extrarels||e.polytope.extrarels,children:r.jsx("input",{name:"extrarels",size:4,title:Te,placeholder:e.polytope.extrarels,value:t.extrarels,onChange:v})})]}),t.extrarels&&r.jsx("button",{className:"button clean-rels-button",onClick:H,title:"Clean",children:"^n"})]}):null,r.jsxs("label",{className:"boolean-label",children:["Normalize",r.jsx(De,{name:"curve",value:t.curve,onChange:h})]}),!e.hidden.includes("vertex")&&r.jsx(V,{name:"sizeVertex",label:"Vertices",min:0,step:1,value:t.sizeVertex,onChange:h}),!e.hidden.includes("edge")&&r.jsx(V,{name:"sizeEdge",label:"Edges",min:0,step:1,value:t.sizeEdge,onChange:h}),r.jsxs("label",{className:"select-label",children:["Ambiance",r.jsx("select",{name:"ambiance",value:t.ambiance,onChange:v,children:(s==="full"?Object.keys(k):Object.entries(k).filter(([x,{extended:T}])=>!T||x===t.ambiance).map(([x])=>x)).map(x=>r.jsx("option",{value:x,children:x.replace(/_/g," ").replace(/./,T=>T.toUpperCase())},x))})]}),s==="full"&&((Ve=k[t.ambiance])==null?void 0:Ve.envmap)&&r.jsxs("label",{className:"select-label",children:["Envmap",r.jsx("select",{name:"envmap",value:t.envmap,onChange:v,children:Je.map(x=>r.jsx("option",{value:x,children:(x||"default").replace(/_/g," ").replace(/./,T=>T.toUpperCase())},x))})]}),s==="full"&&((Ge=k[t.ambiance])==null?void 0:Ge.skybox)&&r.jsxs("label",{className:"select-label",children:["Skybox",r.jsx("select",{name:"skybox",value:t.skybox,onChange:v,children:Je.map(x=>r.jsx("option",{value:x,children:(x||"default").replace(/_/g," ").replace(/./,T=>T.toUpperCase())},x))})]}),s==="full"&&((Xe=k[t.ambiance])==null?void 0:Xe.texture)&&r.jsxs("label",{className:"select-label",children:["Texture",r.jsx("select",{name:"texture",value:t.texture,onChange:v,children:Jn.map(x=>r.jsx("option",{value:x,children:(x||"default").replace(/_/g," ").replace(/./,T=>T.toUpperCase())},x))})]}),window.location.search.includes("debug")&&s==="full"&&r.jsxs(r.Fragment,{children:[r.jsx(V,{name:"start",label:"Start",min:0,step:1,value:t.start,onChange:h}),r.jsx(V,{name:"limit",label:"Limit",min:0,step:1,value:t.limit,onChange:h}),r.jsx(V,{name:"batch",label:"Batch",min:0,step:1,value:t.batch,onChange:h})]})]}),s==="empty"?r.jsx("div",{className:"spacer"}):null,r.jsx("button",{className:`space-button button${e.processing?" processing":""}${s==="empty"?" empty":""}`,onClick:E,children:r.jsx(S,{...e.space||{},dimensions:e.dimensions})})]})]})]})}function Fa({params:e,updateParams:t}){const[n,o]=g.useState({...e,space:null,shape:null,processing:!0,detail:"medium",iteration:0,polytope:null,shaper:null,paused:!1,error:null}),[a,i]=g.useState(!1);g.useEffect(()=>{if(!n.gl&&n.error)return;const c=m=>{console.error("WebGL context lost",m),o(p=>({...p,gl:null,error:new Error("WebGL context lost")})),m.preventDefault()},l=()=>{console.warn("WebGL context restored"),o(m=>({...m,...an(m,c,l),error:null}))};o(m=>{try{return m.gl?m:an(m,c,l)}catch(p){return console.error(p),{...m,error:p}}})},[n.gl,n.error]);const[s,u]=g.useState({shift:0,maxShift:0,combinations:[],auto:"damp",lock:!1});g.useEffect(()=>{o(c=>({...c,...Ee(e).params}))},[e]),g.useEffect(()=>{n.space&&u(c=>({...c,shift:0,...Kn(e.dimensions,n.space)}))},[e.dimensions,n.space]);const f=g.useCallback((c,l)=>{u(m=>({...m,[c]:l}))},[u]);return r.jsxs(r.Fragment,{children:[n.error?r.jsxs("aside",{className:"global-error",children:[r.jsxs("div",{children:[n.error.toString()," ",r.jsxs("button",{onClick:()=>i(c=>!c),children:[a?"Hide":"Show"," stack"]})]}),n.error.stack&&a?r.jsx("pre",{children:n.error.stack}):null]}):null,n.gl?r.jsxs(r.Fragment,{children:[r.jsx(_a,{runtime:n,params:e,rotations:s,setRuntime:o,updateRotations:f,updateParams:t}),r.jsx(ra,{runtime:n,rotations:s,setRuntime:o,updateRotations:f,updateParams:t})]}):null]})}const B=(e,t)=>{let n=t,o=0;for(;e.quotientMap[n];)o++,n=e.quotientMap[n];return o>1&&(e.quotientMap[t]=n),n},On=(e,t,n)=>{const o=t,a=[[t,n]];for(;a.length>0;)if([t,n]=a.pop(),t>n&&([t,n]=[n,t]),t=B(e,t),n=B(e,n),t!==n){e.quotientMap[n]=t,e.seen.has(n)&&!e.seen.has(t)&&e.seen.add(t);const i=e.cosets.get(t),s=e.cosets.get(n);e.cosets.delete(n);for(const[u,f]of s)i.has(u)?a.push([i.get(u),f]):i.set(u,f)}return B(e,o)},fn=(e,t,n,o)=>{t=B(e,t);const a=e.cosets.get(t);a.has(n)?On(e,a.get(n),o):a.set(n,o)},we=(e,t,n,o)=>{t=B(e,t);let a;const i=e.cosets.get(t);return i.has(n)?(a=B(e,i.get(n)),o!==void 0&&a!==o&&On(e,o,a)):(o?a=o:(a=e.nextVertex++,e.cosets.set(a,new Map),e.unvisited.push(a)),fn(e,t,n,a),fn(e,a,ge(n),t)),a},mn=function(e,t,n){let o=n;for(let a=t.length-1;a>0;a--)o=we(e,o,t[a]);we(e,o,t[0],n)},Ma=function(e){var n,o;if(!e.words){const a=B(e,1);e.words=new Map,e.words.set(a,""),(e.compound||!e.dual)&&(e.currentWords=new Map,e.currentWords.set(a,"")),(e.compound||e.dual)&&(e.dualCurrentWords=new Map,e.dualCurrentWords.set(a,"")),e.lastCoset=a,e.remaining=[a],e.rootVertex&&e.rootNormals&&e.metric&&(e.vertices=new Map,e.vertices.set(a,e.rootVertex))}const t=new Set;for(;e.remaining.length>0;){const a=e.remaining[0],i=B(e,a),s=e.cosets.get(i),u=e.words.get(i);if(u===void 0){if(t.has(a)){console.warn("Failed to find word for coset",a);return}e.remaining.push(e.remaining.shift()),t.add(a);continue}if(s.size<e.gens.length*2)return;const f=[];for(let c=0;c<e.gens.length;c++){const l=e.gens[c],m=B(e,s.get(l));if(!e.words.has(m)){if(e.cosets.get(m).size<e.gens.length*2)return;f.push([l,m])}}e.remaining.shift();for(let c=0;c<f.length;c++){const[l,m]=f[c],p=l+u;if(e.words.set(m,p),(n=e.currentWords)==null||n.set(m,p),(o=e.dualCurrentWords)==null||o.set(m,p),e.lastCoset=m,e.remaining.push(m),e.vertices){let v=e.vertices.get(i);for(let h=0;h<e.transforms[l].length;h++){const E=e.transforms[l][h];v=Yn(v,e.rootNormals[E],e.metric)}e.vertices.set(m,v)}}}},Pa=e=>{if(e.cosets)e.unvisited.splice(0,e.pointer),e.pointer=0;else{e.unvisited=[1],e.pointer=0,e.cosets=new Map([[1,new Map]]),e.nextVertex=2,e.seen=new Set,e.quotientMap={};for(let t=0;t<e.subgens.length;t++)mn(e,e.subgens[t],1)}e.limit=e.limit||1e3,e.done=!1;for(let t=0;t<e.limit;t++){let n=null;for(;e.unvisited.length-e.pointer>0;){const o=e.unvisited[e.pointer++],a=B(e,o);if(!e.seen.has(a)){e.seen.add(a),n=a;break}}if(n===null){e.done=!0;break}for(let o=0;o<e.gens.length;o++)we(e,n,e.gens[o].toUpperCase()),we(e,n,e.gens[o]);for(let o=0;o<e.rels.length;o++)mn(e,e.rels[o],n)}},An=e=>(Pa(e),Ma(e),e),pn=()=>{const{location:e}=window;if(e.hash)try{const t=JSON.parse(atob(e.hash.slice(1)));return Ee({...be,...t}).params}catch(t){console.warn(t),e.hash=""}return Ee(be).params},za=(e,t=!1)=>{const n="#"+btoa(JSON.stringify(e));window.history[t?"replaceState":"pushState"](null,null,n)},Ua=()=>{const[e,t]=g.useState(pn()),n=g.useCallback(a=>{const i=pn();i&&(Object.entries(i).forEach(([s,u])=>{Array.isArray(u)&&Ke(u,e[s])&&(i[s]=e[s])}),t(i))},[e]),o=g.useCallback((a,i=!1)=>{t(s=>{if(!Object.entries(a).filter(([c,l])=>Array.isArray(l)&&!l._reset?!Ke(l,s[c]):s[c]!==l).length)return s;const{params:u,badParams:f}=Ee(i?a:{...s,...a},i?[]:Object.keys(a),s);return f.length||za(u,Object.keys(a).length===1&&a.matrix),u})},[]);return g.useEffect(()=>(window.addEventListener("popstate",n),()=>{window.removeEventListener("popstate",n)}),[n]),r.jsx(Fa,{params:e,updateParams:o})};Zn.createRoot(document.getElementById("root")).render(r.jsx(Ua,{}));window.ToddCoxeter=An;window.bench=()=>{const e=performance.now(),t=An({gens:"abcdef",subgens:"c",rels:["aa","bb","cc","dd","ee","ff","abababab","acac","bcbcbc","adad","bdbd","cdcdcd","aeae","bebe","cece","dedede","afaf","bfbf","cfcf","dfdf","efefef"],limit:1e5});return console.warn(performance.now()-e,t.words.length),t.tc};export{Qn as c,Z as r};
