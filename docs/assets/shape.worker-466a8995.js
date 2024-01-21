(function(){"use strict";const{abs:q,cos:Xe,sin:Ye,tan:et,cosh:tt,sinh:nt,acos:st,acosh:rt,atan:ot,atan2:it,min:lt,max:ct,round:xe,sqrt:je,cbrt:ft,sign:ut,ceil:gt,floor:dt,log:ht,exp:at,hypot:vt,pow:ke,PI:wt}=Math,Ve=(...e)=>e.reduce((t,s)=>t+s,0)/e.length,oe=new ArrayBuffer(8),Se=new Float64Array(oe),ie=new Int32Array(oe);function ze(e){return~~e===e?~~e:(Se[0]=e,ie[0]^ie[1])}const le=10**4,X=e=>{let t="";for(let s=0;s<e.length;s++)t+=ze(xe(e[s]*le)/le).toString(),s<e.length-1&&(t+="|");return t},P=e=>String.fromCharCode(97+e),ce=e=>e.charCodeAt(0)-97,W=e=>{const t=e.toUpperCase();return e===t?e.toLowerCase():t},fe=(e,t=null,s=1,n=!1)=>{if(t===null&&(t=e,e=0),s===0)throw new Error("Step cannot be zero.");if(t<e&&s>0||t>e&&s<0){if(n)return[];s=-s}return new Array(Math.ceil((t-e)/s)).fill().map((i,b)=>e+b*s)},B=(e,t)=>e.length!==t.length?!1:e.every((s,n)=>Array.isArray(s)?B(s,t[n]):s===t[n]),ue=e=>e!==""&&e!=="x",Ae=e=>e==="m"||e==="b"||e==="c"||e==="d",Oe=e=>e==="c"||e==="d",$=e=>e==="s"||e==="b"||e==="d",H=(e,t)=>{let s=0;for(let n=0;n<e.length;n++)s+=e[n]*t[n];return s},Ce=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],N=(e,t)=>{const s=[];for(let n=0;n<e.length;n++)s[n]=e[n]+t[n];return s},Me=(e,t)=>{const s=[];for(let n=0;n<e.length;n++)s[n]=e[n]-t[n];return s},_=(e,t)=>{const s=[];for(let n=0;n<e.length;n++)s[n]=e[n]*t;return s},Y=e=>{const t=[];for(let s=0;s<e[0].length;s++){t.push([]);for(let n=0;n<e.length;n++)t[s].push(e[n][s])}return t},D=(e,t)=>{const s=new Array(e.length);for(let n=0;n<e.length;n++){let i=0;for(let b=0;b<e[0].length;b++)i+=e[n][b]*t[b];s[n]=i}return s},pe=e=>{const t=new Array(e.length);for(let s=0;s<e.length;s++)t[s]=new Array(e.length).fill(0),t[s][s]=e[s];return t},I=e=>{const t=new Array(e).fill(1);return pe(t)},ee=(e,t)=>e.filter((s,n)=>!t.includes(n)),ge=(e,t)=>ee(e,t).map(s=>ee(s,t)),F=(e,t,s)=>Me(e,_(D($e(s),t),2*H(D(We(s),e),t))),L=(e,t)=>{if(t.some((n,i)=>n.some((b,g)=>i===g&&b===0)))return e[e.length-1]===0&&(e[e.length-1]=1e-16),_(e,1/e[e.length-1]);let s=H(D(t,e),e);return s===0&&(s=1e-16),_(e,-1/je(q(s)))},Ee=1,We=e=>e.map((t,s)=>t.map((n,i)=>s===i&&n===0?Ee:n)),$e=e=>e.map(t=>t.map(s=>q(s))),ye=e=>{const t=[];for(let g=0;g<e.length;g++)for(let h=g+1;h<e.length;h++)e[g][h]!==2&&t.push([g,h]);if(t.length!==e.length-1)return;const s=new Array(e.length).fill(0);if(t.forEach(([g,h])=>{s[g]++,s[h]++}),s.some(g=>g>3)||s.filter(g=>g===1).length!==2)return;const i=[s.indexOf(1)],b=[];for(let g=0;g<e.length-1;g++){const h=i[i.length-1],c=t.findIndex(v=>v.includes(h));let l=t[c];t.splice(c,1),l[0]===h&&l.reverse(),i.push(l[0]),b.push(l.reverse())}return{group:i,pairs:b}},_e=e=>{const t=new Array(e.length).fill(0);for(let i=0;i<e.length;i++)for(let b=i+1;b<e.length;b++)e[i][b]!==2&&(t[i]++,t[b]++);if(t.filter(i=>i===3).length!==1||t.filter(i=>i===1).length!==e.length-1)return;const s=t.indexOf(3),n=t.map((i,b)=>[b,s]).filter(([i,b])=>i!==b);return{group:[s],pairs:n}},Ie=e=>{const t=ye(e);if(t)return{type:"c",description:"C-Group",...t};const s=_e(e);return s?{type:"star",description:"Star Group",...s}:{type:"other",description:"Other Group"}},te=(e,t="",s=[])=>{const n=[];for(let i=0;i<e.length;i++){const[b,g]=e[i],h=e.filter((c,l)=>l!==i);if(s.length){const c=s[s.length-1];if(g.some(l=>l===c)){const l=g[1]===c,v=l?b.toUpperCase():b,a=l?[...g].reverse():g;if(a[1]===s[0])return[t+v];h.length&&n.push(...te(h,t+v,s.concat(a.slice(1))))}}else n.push(...te(h,b,g))}return n},Fe=(e,t,s)=>{var l,v;const n=[],i=Object.entries(e),b=i.filter(([a,d])=>d.length===1),g=i.filter(([a,d])=>d.length===2),h=i.filter(([a,d])=>d.length===3),c=Object.fromEntries(b.map(([a,d])=>[d[0],a]));for(let a=0;a<i.length;a++){const[d,r]=i[a];if([1,3].includes(r.length)&&n.push(d.repeat(2)),r.length===2){const o=t[r[0]][r[1]];o>1&&n.push(d.repeat(o))}if(r.length===1){const o=r[0];for(let f=0;f<b.length;f++){const[u,m]=b[f];if(m>o){const x=t[o][m];x>1&&n.push((d+u).repeat(x))}}}if(r.length===3){const o=t[r[0]][r[1]];if(o>1){const f=c[r[1]];f?n.push((d+f).repeat(o%2===0?o/2:o)):console.warn("No conjugate conjugate reflection",d,r)}for(let f=0;f<h.length;f++){const[u,m]=h[f];if(m[1]===r[1]&&m[0]>r[0]){let x=(l=g.find(([w,j])=>j[0]===r[0]&&j[1]===m[0]))==null?void 0:l[0];x||(x=W((v=g.find(([w,j])=>j[1]===r[0]&&j[0]===m[0]))==null?void 0:v[0])),x&&n.push(W(d)+W(x)+u+x)}if(m[0]===r[0]&&m[1]>r[1]){const x=t[r[1]][m[1]];x>1&&n.push((d+u).repeat(x))}}}}if(g.length>1){const a=te(g);n.push(...a.map(d=>d.split("").reverse().join("")))}if(t.length>2&&t.length<6&&s.some((a,d)=>a.some((r,o)=>r>1&&t[d][o]>1))){const a=Ie(t),d=[];a.type==="c"?d.push(...Pe(t,s,a.group,a.pairs)):a.type==="star"&&d.push(...Ne(t,s,a.group,a.pairs));const r=Object.fromEntries(Object.entries(e).filter(([f,u])=>u.length===1).map(([f,u])=>[u[0],f])),o=Object.entries(e).filter(([f,u])=>u.length===2).map(([f,u])=>[[u,f],[[...u].reverse(),W(f)]]).flat();for(let f=0;f<d.length;f++){const u=d[f];let m="",x=!1;for(let w=0;w<u.length;w++){const j=u[w],S=r[j];if(S)m+=S;else{const V=o.find(([k,z])=>k[0]===j&&w<u.length-1&&k[1]===u[w+1]);if(V)m+=V[1],w++;else{x=!0;break}}}x||n.push(m)}}return n},G=(e,t)=>Array(e).fill(t).flat(),Pe=(e,t,s,n)=>{const i=[];if(!n.filter(([r,o])=>t[r][o]>1).map(([r,o])=>e[r][o]===5))return i;const g=n.map(([r,o])=>e[r][o]);if(g.filter(r=>r!==3&&r!==5).length>(e.length===3?0:1))return i;if(g.filter(r=>r!==3&&r!==5).length===1){const r=g.findIndex(o=>o!==3&&o!==5);if(![0,g.length-1].includes(r))return i}const h=[g,[...g].reverse()],c=n.map(([r,o])=>t[r][o]),l=[c,[...c].reverse()],v=({m:r,s:o})=>{if(r.length!==e.length-1)return!1;for(let f=0;f<h.length;f++){const u=h[f],m=l[f];if(u.every((x,w)=>x===r[w]||r[w]===null)&&m.every((x,w)=>x===o[w]||o[w]===null))return!0}};if(v({m:[null,5,5],s:[null,1,2]})&&(g[c[0]===2?g.length-1:0]=0),[{m:[null,3,5,5],s:[null,1,1,2]},{m:[null,5,5,5],s:[null,1,2,1]},{m:[null,5,3,5],s:[null,1,1,2]}].some(v)||(v({m:[5,5,5,3],s:[1,1,2,1]})&&(g[c[1]===2?g.length-1:0]=0),g.filter(r=>r===3).length>e.length-3))return i;const a=[];let d=[];for(let r=0;r<g.length;r++)g[r]===5&&(d.length?(d.push(r),a.push(d),d=[r]):d.push(r));for(let r=0;r<a.length;r++){const[o,f]=a[r],u=[];for(let m=o;m<f+2;m++)u.push(s[m]);u.push(...u.slice(1,u.length-1).reverse()),i.push(G(3,u))}return i},Ne=(e,t,s,n)=>{const i=[];if(e.length!==4||!n.filter(([l,v])=>t[l][v]>1).map(([l,v])=>e[l][v]===5))return i;const g=n.map(([l,v])=>e[l][v]);if(g.find(l=>l!==3&&l!==5)||g.filter(l=>l===3).length!==1)return i;const h=n[g.findIndex(l=>l===3)],c=n.filter(([l,v])=>e[l][v]===5);return i.push(G(3,[...c[0],...c[1]])),i.push(G(2,[...G(3,[c[1][0],...h].reverse()),...G(2,[...c[0]].reverse())])),i},Ge=e=>{for(e=e.replace(/\s/g,""),e=e.replace(/(\w)(\^-?\d+)/g,"($1)$2");;){let t=e.replace(/\((\w+)\)\^(-?\d+)/g,(s,n,i)=>(i=parseInt(i),i<0&&(n=n.split("").reverse().map(b=>W(b)).join(""),i=-i),n.repeat(i)));if(t===e)break;e=t}return e},Re=e=>{for(e=e.replace(/\s/g,"");;){let t=e.replace(/(\w+)(\1)+/g,(s,n)=>{const i=s.length/n.length;return`(${n})^${i}`});if(t=t.replace(/\(\((\w+)\)\^(\d+)\)\^(\d+)/g,(s,n,i,b)=>`(${n})^${parseInt(i)*parseInt(b)}`),t=t.replace(/\((\w+)\)\^(\d+)(\1)/g,(s,n,i)=>`(${n})^${parseInt(i)+1}`),t=t.replace(/(\w+)\(\1\)\^(\d+)/g,(s,n,i)=>`(${n})^${parseInt(i)+1}`),t===e)break;e=t}return e=e.replace(/\(([A-Z]+)\)\^(\d+)/g,(t,s,n)=>(s=s.split("").reverse().map(i=>W(i)).join(""),`(${s})^-${n}`)),e=e.replace(/([A-Z]+)/g,(t,s)=>(s=s.split("").reverse().map(n=>W(n)).join(""),`(${s})^-1`)),e=e.replace(/\((\w)\)(\^-?\d+)/g,"$1$2"),e};typeof window<"u"&&(window.factor=Re);const p=(e,t)=>{let s=t,n=0;for(;e.quotientMap[s];)n++,s=e.quotientMap[s];return n>1&&(e.quotientMap[t]=s),s},de=(e,t,s)=>{const n=t,i=[[t,s]];for(;i.length>0;)if([t,s]=i.pop(),t>s&&([t,s]=[s,t]),t=p(e,t),s=p(e,s),t!==s){e.quotientMap[s]=t,e.seen.has(s)&&!e.seen.has(t)&&e.seen.add(t);const b=e.cosets.get(t),g=e.cosets.get(s);e.cosets.delete(s);for(const[h,c]of g)b.has(h)?i.push([b.get(h),c]):b.set(h,c)}return p(e,n)},he=(e,t,s,n)=>{t=p(e,t);const i=e.cosets.get(t);i.has(s)?de(e,i.get(s),n):i.set(s,n)},U=(e,t,s,n)=>{t=p(e,t);let i;const b=e.cosets.get(t);return b.has(s)?(i=p(e,b.get(s)),n!==void 0&&i!==n&&de(e,n,i)):(n?i=n:(i=e.nextVertex++,e.cosets.set(i,new Map),e.unvisited.push(i)),he(e,t,s,i),he(e,i,W(s),t)),i},ae=function(e,t,s){let n=s;for(let i=t.length-1;i>0;i--)n=U(e,n,t[i]);U(e,n,t[0],s)},Te=function(e){if(!e.words){const s=p(e,1);e.words=new Map,e.words.set(s,""),e.currentWords=new Map,e.currentWords.set(s,""),e.lastCoset=s,e.remaining=[s],e.rootVertex&&e.rootNormals&&e.metric&&(e.vertices=new Map,e.vertices.set(s,e.rootVertex))}const t=new Set;for(;e.remaining.length>0;){const s=e.remaining[0],n=p(e,s),i=e.cosets.get(n),b=e.words.get(n);if(b===void 0){if(t.has(s)){console.warn("Failed to find word for coset",s);return}e.remaining.push(e.remaining.shift()),t.add(s);continue}if(i.size<e.gens.length*2)return;const g=[];for(let h=0;h<e.gens.length;h++){const c=e.gens[h],l=p(e,i.get(c));if(!e.words.has(l)){if(e.cosets.get(l).size<e.gens.length*2)return;g.push([c,l])}}e.remaining.shift();for(let h=0;h<g.length;h++){const[c,l]=g[h],v=c+b;if(e.words.set(l,v),e.currentWords.set(l,v),e.lastCoset=l,e.remaining.push(l),e.vertices){let a=e.vertices.get(n);for(let d=0;d<e.transforms[c].length;d++){const r=e.transforms[c][d];a=F(a,e.rootNormals[r],e.metric)}e.vertices.set(l,a)}}}},y=(e,t)=>{let s=p(e,1);for(let n=t.length-1;n>=0;n--){const i=e.cosets.get(s);if(i.size<e.gens.length*2||(s=p(e,i.get(t[n])),e.cosets.get(s).size<e.gens.length*2))return}return s},ve=e=>{if(e.cosets)e.unvisited.splice(0,e.pointer),e.pointer=0;else{e.unvisited=[1],e.pointer=0,e.cosets=new Map([[1,new Map]]),e.nextVertex=2,e.seen=new Set,e.quotientMap={};for(let t=0;t<e.subgens.length;t++)ae(e,e.subgens[t],1)}e.limit=e.limit||1e3,e.done=!1;for(let t=0;t<e.limit;t++){let s=null;for(;e.unvisited.length-e.pointer>0;){const n=e.unvisited[e.pointer++],i=p(e,n);if(!e.seen.has(i)){e.seen.add(i),s=i;break}}if(s===null){e.done=!0;break}for(let n=0;n<e.gens.length;n++)U(e,s,e.gens[n].toUpperCase()),U(e,s,e.gens[n]);for(let n=0;n<e.rels.length;n++)ae(e,e.rels[n],s)}},qe=e=>(ve(e),e.cosets.size),we=e=>(ve(e),Te(e),e),be=(e,t,s)=>{if(s){t%2&&t--;const n=e>0?1-e%2:0;return e>=t/2+n?2*(t-e)-1+n:2*e-n}return e>=t/2?2*(t-e)-1:2*e},Be=(e,t,s)=>{if(t===0)return!0;if(e.length<=t)return!1;const n=new Set;for(let i=0;i<e.length;i++){const b=e[i];if(b)for(let g=0;g<b.length;g++){const h=b[g];for(let c=0;c<s[h].length;c++){const l=P(s[h][c]);n.has(l)||n.add(l)}if(n.size>=t)return!0}}return!1},ne=(e,t,s,n,i,b,g=null,h=null)=>{if(!g){n.every(o=>!o)&&(n=n.map(()=>1));let l="",v=0;const a={};for(let o=0;o<e;o++)if(ue(n[o])){if(!$(n[o])){const f=P(v++);l+=f,a[f]=[o]}for(let f=o+1;f<e;f++)if(ue(n[f])){if($(n[o])&&$(n[f])){const u=P(v++);l+=u,a[u]=[o,f]}else if($(n[o])&&!$(n[f])){const u=P(v++);l+=u,a[u]=[o,f,o]}else if(!$(n[o])&&$(n[f])){const u=P(v++);l+=u,a[u]=[f,o,f]}}}const d=Object.entries(a).filter(([o,f])=>f.every(u=>!n[u])).map(([o])=>o).join(""),r=Fe(a,t,s);if(b){const o=b.split(",");for(let f=0;f<o.length;f++){let u=o[f];u=u.replace(/\s/g,""),u&&(u=Ge(u),u.split("").every(m=>l.includes(m.toLowerCase()))&&r.push(u))}}if(g={new:!0,key:"",dimensions:e,coxeter:t,stellation:s,mirrors:n,gens:l,subgens:d,transforms:a,rels:r,facet:[""],removed:[],children:[]},h=g,h.solved=new Map,n.filter(o=>o).length===1){const o=n.findIndex(f=>f);if(t[o].every((f,u)=>o===u||f===2)){const f=o===e-1?e-2:o+1,[u]=Object.entries(g.transforms).find(([m,x])=>x.includes(f));h.hosotope={gen:u,index:f}}}}const c=[];for(let l=0;l<e;l++){if(g.removed.includes(l))continue;let v=g.gens.split("").filter(u=>!g.transforms[u].includes(l)).join("");const a=[...g.removed,l],d=a.sort().join("-");let r=!1;if(!h.solved.has(d)){r=!0;const u={dimensions:g.dimensions-1,coxeter:ge(h.coxeter,a),stellation:ge(h.stellation,a),mirrors:ee(h.mirrors,a),gens:v,subgens:h.subgens.split("").filter(m=>v.includes(m)).join(""),rels:h.rels.filter(m=>m.toLowerCase().split("").every(x=>v.includes(x))),transforms:Object.fromEntries(Object.entries(g.transforms).filter(([m])=>v.includes(m))),removed:a,key:d,limit:i.curvature>0?2500:1e3};we(u),u.facet=Array.from(u.words.values()),u.dimensions===1&&(u.coxeter=[[1,2],[2,1]],u.stellation=[[1,1],[1,1]],u.mirrors=[1,0]),u.dimensions===0&&(u.coxeter=[[1,2],[2,1]],u.stellation=[[1,1],[1,1]],u.mirrors=["s",0]),h.solved.set(d,u)}const o=h.solved.get(d),f=h.hosotope&&o.removed.length&&o.removed[0]===h.hosotope.index&&o.removed.every((u,m)=>m===0||u===(o.removed[m-1]+1)%e);if(Be(o.facet,o.dimensions,h.transforms)||f){if(r&&o.dimensions===2){const m=[...o.facet],x=o.gens.split("").every(j=>h.mirrors[h.transforms[j][0]]),w=o.gens.split("").every(j=>h.transforms[j].length===2);for(let j=0;j<m.length;j++)o.facet[j]=m[w?j:be(j,o.facet.length,x)]}const u={new:r,children:[],...o};u.removed.length<e?g.children.push(ne(e,t,s,n,i,b,u,h)):g.children.push(u)}else c.push(o)}if(g.children.length===0&&g.dimensions>0){console.debug("No leaf found, digging deeper",g.gens);for(let l=0;l<c.length;l++){const v=c[l],a={new:!1,children:[],...v};a.removed.length<e?g.children.push(ne(e,t,s,n,i,b,a,h)):g.children.push(a)}}if(g===h&&n.some(l=>$(l))){let l="",v=[];for(let a=1;a<e;a++)if(a===1){const d=[],r=w=>{w.dimensions===1?w.new&&d.push(w):w.children.forEach(r)};r(g);const o=Object.entries(h.transforms).filter(([w,j])=>j.length!==1||n[j[0]]).filter(([w,j])=>j.length!==3||t[j[0]][j[1]]!==2).map(([w])=>w);for(let w=0;w<d.length;w++){const j=d[w];o.includes(j.gens)&&o.splice(o.indexOf(j.gens),1)}const f=v;v=[];const u=I(1).map((w,j)=>w.map((S,V)=>j===V?1:j===V+1||j===V-1?4:2)),m=I(1).map(w=>w.map(()=>1)),x=fe(1).map(()=>"s");for(let w=0;w<o.length;w++){const j=o[w],S={dimensions:1,coxeter:u,stellation:m,mirrors:x};S.gens=j;const V={new:!0,done:!0,key:`se-${j}`,...S,facet:["",j],children:w===0?f:[]};v.push(V)}}else if(a===2){const d=S=>I(2).map((V,k)=>V.map((z,O)=>k===O?1:k===O+1||k===O-1?S:2)),r=S=>I(2).map(V=>V.map(()=>S)),o={},f=Object.entries(h.transforms).filter(([S,V])=>V.length===2),u=Object.entries(h.transforms).filter(([S,V])=>V.length===3);let m="";const x=S=>{S.dimensions===2?S.new&&S.gens.length===1&&(m+=S.gens):S.children.forEach(x)};x(g),l+=m;for(let S=0;S<f.length;S++){const[V,k]=f[S];for(let z=S+1;z<f.length;z++){const[O,C]=f[z];k[k.length-1]===C[C.length-1]&&(o[V+O]={facet:["",V,O]},l+=V+O)}}for(let S=0;S<u.length;S++){const[V,k]=u[S];for(let z=S+1;z<u.length;z++){const[O,C]=u[z];if(k[0]===C[0]&&t[k[1]][C[1]]!==2&&(t[k[1]][k[0]]!==2||t[k[0]][C[1]]!==2)){const E=t[k[1]][C[1]],J=n[C[1]]||t[k[0]][C[1]]!==2,K=[];for(let Q=0;Q<E;Q++)J&&K.push(V+(O+V).repeat(E-Q)),K.push((O+V).repeat(Q));o[V+O]={facet:K,snubCoxeter:d(K.length),snubMirrors:["s",J?1:0]},l+=V+O}}for(let z=0;z<f.length;z++){const[O,C]=f[z];k[0]===C[1]&&(t[k[1]][C[0]]!==2||t[k[1]][C[1]]!==2||n[k[1]])&&(n[k[1]]||t[k[1]][C[0]]!==2&&t[k[1]][C[1]]!==2?o[V+O]={facet:["",V,V+O,O],snubCoxeter:d(4)}:t[k[1]][C[0]]!==2?o[V+O]={facet:["",O,V+O]}:o[V+O]={facet:["",V,O]},l+=V+O)}}const w=v;v=[],Object.keys(o).length||(o[""]={facet:[""]});const j=Object.entries(o);for(let S=0;S<j.length;S++){const[V,{facet:k,snubCoxeter:z,snubStellation:O,snubMirrors:C}]=j[S],E={dimensions:2,coxeter:z||d(3),stellation:O||r(1),mirrors:C||["s","s"]};E.gens=V;const J={new:k.length!==1,done:!0,key:`sf-${V}`,...E,facet:k,children:S===0?w:[]};v.push(J)}}else{const d=I(a).map((x,w)=>x.map((j,S)=>w===S?1:2)),r=I(a).map(x=>x.map(()=>1)),o=fe(a).map(()=>"s"),f=v;v=[];let u=l;const m={new:!0,done:!0,key:`s${a}`,gens:g.gens.split("").filter(x=>!u.includes(x)).join(""),dimensions:a,coxeter:d,stellation:r,mirrors:o,facet:[],children:f};v.push(m)}g.children.push(...v)}return g},R=["vertex","edge","face"],se=(e,t,s)=>(s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*6*s:s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e),M=(e,t,s)=>{let n,i,b;if(t===0)n=i=b=s;else{const g=s<.5?s*(1+t):s+t-s*t,h=2*s-g;n=se(h,g,e+1/3),i=se(h,g,e),b=se(h,g,e-1/3)}return[n,i,b]},Z=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],He={background:[0,0,0,1],glow:!1,shading:"ads",diffuse:"lambert",specular:!1,shininess:32,opacity:1,ambient:.2,roughness:.85,gouraud:!1,transparency:"oit",color:({word:e})=>M(e.length*.03%1,.75,.7)},De=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},shading:!1,face:{opacity:.025},transparency:"blend",color:({word:e,dual:t})=>M((e.length*.17-(t?.43:0))%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,diffuse:"fresnel",opacity:.025},transparency:"blend",color:({word:e})=>M(...Z[e.length%Z.length])},cathedral:{background:[.6,.6,.6,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},shading:!1,face:{opacity:.9},transparency:"oit",color:({word:e,subShape:t,type:s})=>s==="face"?M((t*.23+e.length*.07)%1,1,.58):[0,0,0]},synthwave:{background:[...M(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},shading:!1,face:{opacity:.015},afterImage:.7,transparency:"blend",color:({word:e})=>M((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e,dual:t})=>M(e.length*.03%1-(t?.25:0),1,.8)},shiny:{background:[0,0,0,1],diffuse:"lambert",specular:"blinn-phong",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>M(-(e.length*.07)%1,1,.8)},shape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({faceSize:e,type:t,idx:s,size:n})=>t==="face"?M((e-2)*.21%1,1,.8):M(s/n,.75,.5)},subShape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({subShape:e,type:t})=>t!=="vertex"?M(e*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],diffuse:"cel",face:{opacity:.6,gouraud:!1},transparency:"blend",color:({word:e,type:t,dimensions:s,draw:n})=>{const i=e.length?ce(e[e.length-1])/s:0;return M(i%1,1,t==="face"?.6:n.face?0:.8)}},harlequin:{background:[...M(240/360,.23,.09),1],face:{opacity:.6},transparency:"oit",color:({word:e,idx:t,type:s})=>{const n=e.split("").map(b=>ce(b)).reduce((b,g)=>b+g,0),i=[...Z[n%Z.length]];return t%2&&(i[2]*=.5),M(...i)}},pure:{background:[0,0,0,1],color:({word:e})=>M(e.length*.03%1,.75,.7)},facets:{background:[0,0,0,1],color:({faceIndex:e,faceSize:t})=>M((e||0)/(t||1),.75,.7)},monochrome:{background:[.12,.12,.12,1],diffuse:"reverse",ambient:0,face:{opacity:.1},transparency:"oit",color:()=>[1,1,1]},glass:{background:[0,0,0,1],transparency:"blend",opacity:.2,ambient:0,diffuse:"fresnel",specular:"blinn-phong",face:{shininess:16,diffuse:!1},color:({subShape:e,word:t,type:s})=>s!=="vertex"?M((e*.21+t.length*.03)%1,1,.8):[1,1,1]},plain:{extended:!0,background:[1,1,1,1],glow:!1,shading:!1,color:({word:e,type:t,draw:s})=>M(e.length*.06%1,1,t==="face"?.6:s.face?.05:.5)},plainblack:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e,type:t})=>t==="face"?new Array(3).fill(1-ke(.9,e.length+1)):[0,0,0]},normals:{extended:!0,background:[1,1,1,1],shading:"normal",color:()=>[0,0,0]},uvs:{extended:!0,background:[1,1,1,1],shading:"uv",color:()=>[0,0,0]}}).map(([e,t])=>[e,{...He,...t,transparent:{}}])),Le=(e,t,s,n)=>{const i=[],b=[],g=e>4?9:e;for(let h=0;h<t.length;h++){const c=t[h];if(!c){i.push(null),b.push(null);continue}const l=[new Float32Array(c.size*3)];for(let d=0;d<h+1;d++)l.push(new Float32Array(c.size*g));let v=0;const a=c.objects.concat(c.partials);for(let d=0;d<a.length;d++){const r=a[d];if(r)for(let o=0;o<r.length;o++){const f=r[o];for(let m=0;m<f.vertices.length;m++){const x=f.vertices[m];for(let w=0;w<x.length;w++)l[m+1][v*g+w]=x[w]}const u=De[s].color({word:f.word,key:f.key,subShape:d%c.objects.length,faceIndex:f.faceIndex,faceSize:f.faceSize,dimensions:e,draw:n,idx:v,size:c.size,type:R[h],dual:!!f.dual});l[0][v*3+0]=u[0],l[0][v*3+1]=u[1],l[0][v*3+2]=u[2],v++}}i.push(l),b.push({start:c.start,size:c.size})}return{infos:b,data:i}},Ue=(e,t,s,n)=>{const i=[],b=[];if(e===0)for(const[g,h]of t.currentWords)i.push({word:h,vertices:[t.vertices.get(g)]}),t.currentWords.delete(g);else if(e===1)for(const[g,h]of t.currentWords){const c={word:h,vertices:[]};for(let l=0;l<t.facet.length;l++){const v=y(n.root,h+t.facet[l]);v&&n.root.vertices.has(v)&&c.vertices.push(n.root.vertices.get(v))}if(n.root.hosotope&&n.root.vertices.size===1&&c.vertices.push(F(c.vertices[0],n.root.rootNormals[n.root.hosotope.index-1],n.root.metric)),!(c.vertices.length<e+1)){if(n.root.hosotope){let l;if(n.root.hosotopeVertex?l=h.split("").reverse().reduce((v,a)=>F(v,n.root.rootNormals[n.root.gens.indexOf(a)],n.root.metric),n.root.hosotopeVertex):(n.root.hosotopeVertex=L(Y(n.root.rootVertices)[n.root.hosotope.index],n.root.metric),l=n.root.hosotopeVertex),i.push({...c,vertices:[c.vertices[0],l]}),i.push({...c,vertices:[l,c.vertices[1]]}),n.root.vertices.size===1){const v=l.map(a=>-a);i.push({...c,vertices:[c.vertices[0],v]}),i.push({...c,vertices:[v,c.vertices[1]]})}}else i.push(c);t.currentWords.delete(g)}}else if(e===2){n.root.hosotopePair=null;for(const[g,h]of t.currentWords){const c=h.length%2?0:1,l=[];for(let r=0;r<t.facet.length;r++){const o=y(n.root,h+t.facet[r]);o&&n.root.vertices.has(o)&&l.push(n.root.vertices.get(o))}if(n.root.hosotope){n.root.vertices.size===1&&l.push(l[0].map(o=>-o));let r;if(n.root.hosotopePair)r=n.root.hosotopePair.map(o=>h.split("").reverse().reduce((f,u)=>F(f,n.root.rootNormals[n.root.gens.indexOf(u)],n.root.metric),o));else{const o=L(Y(n.root.rootVertices)[n.root.hosotope.index],n.root.metric);n.root.hosotopePair=[o,F(o,n.root.rootNormals[n.root.hosotope.index],n.root.metric)],r=n.root.hosotopePair}l.splice(1,0,r[0]),l.push(r[1]),n.root.vertices.size===1&&(l[3]=l[1].map(o=>-o))}if(l.length<e+1)continue;const v=l.length<t.facet.length;if(v||t.currentWords.delete(g),l.length===3&&!l.reduce((r,o)=>N(r,o),new Array(s.dimensions).fill(0)).every(r=>q(r)<1e-12)){c&&([l[2],l[1]]=[l[1],l[2]]);const r={word:h,vertices:l,faceIndex:0,faceSize:3,partial:v};v?b.push(r):i.push(r);continue}let a=new Array(s.dimensions).fill(0);for(let r=0;r<l.length;r++){const o=l[r];a=N(a,o)}a=_(a,1/l.length);const d=[];if(n.root.hosotope&&a.every(r=>q(r)<1e-12)){const r=Ce(l[0],l[1]),o=new Array(s.dimensions).fill(0);r.map((f,u)=>o[u]=f),d.push(o),d.push(o.map(f=>-f));for(let f=3;f<s.dimensions;f++){const u=[...o];u[2]=0,u[f]=o[2],d.push(u),d.push(u.map(m=>-m))}}else d.push(a);for(let r=0;r<l.length;r++)for(let o=0;o<d.length;o++){const f={word:h,vertices:[l[(r+c)%l.length],l[(r+(1-c))%l.length],d[o]],faceIndex:r,faceSize:l.length,partial:v};v?b.push(f):i.push(f)}}}return{objects:i,partials:b}},re=(e,t=null)=>{if(!e.length)return t||[];if(!t)return t=e[0],re(e.slice(1),t);const s=t[t.length-1],n=e.find(b=>b[0]===s||b[1]===s);if(!n)return t;const i=e.indexOf(n);return e.splice(i,1),n[0]===s?t.push(n[1]):t.push(n[0]),re(e,t)},Ze=(e,t,s,n)=>{const i=[],b=t.children.find(c=>c.key===s.replace("d","")),g=[],h=c=>{c.dimensions===e&&g.push(c.facet),c.children.forEach(h)};h(b),t.children.filter(c=>c.key.includes("s")).forEach(h);for(let c=0;c<g.length;c++){const l=g[c];if(l.length<2)continue;const v=[];for(let d=0;d<l.length;d++){const r=y(n,l[d]);r&&n.vertices.has(r)&&v.push(n.vertices.get(r))}let a=new Array(v[0].length).fill(0);for(let d=0;d<v.length;d++){const r=v[d];a=N(a,r)}a=_(a,1/v.length),i.push(H(a,a))}return Ve(...i)},Je=(e,t,s,n,i,b)=>{var l,v,a;const{space:g}=n.root,h=[],c=[];if(e===0){n.root.dualVertices=n.root.dualVertices||new Map;for(const[d,r]of t.currentWords){const o=[];for(let x=0;x<t.facet.length;x++){const w=y(n.root,r+t.facet[x]);w&&n.root.vertices.has(w)&&o.push(w)}if(o.length<2)continue;const f=o.length<t.facet.length;let u=new Array(s.dimensions).fill(0);for(let x=0;x<o.length;x++){const w=n.root.vertices.get(o[x]);u=N(u,w)}if(u=L(u,g.metric),g.curvature){let x=0;if(i>=0){let w=1;i>0&&i<s.dimensions-1&&(t.midradius||(t.midradius=Ze(i,s,b,n.root)),w=t.midradius);const j=D(g.metric,u);for(let S=0;S<o.length;S++){const V=n.root.vertices.get(o[S]);x+=H(j,V)}x/=w*o.length,i===s.dimensions-1&&(x=1/x)}else x=1;u=_(u,g.curvature/x)}const m={word:r,vertices:[u],dual:!0,partial:f};n.root.dualVertices.set(`${b}#${r}`,{vertex:u,facet:o,partial:f}),f?c.push(m):(h.push(m),t.currentWords.delete(d))}}else if(e===1){if(!((l=n.root.dualVertices)!=null&&l.size))return{objects:h,partials:c};n.root.dualEdges=n.root.dualEdges||new Map;for(const[d,r]of t.currentWords){const o=[];for(let w=0;w<t.facet.length;w++){const j=y(n.root,r+t.facet[w]);j&&n.root.vertices.has(j)&&o.push(j)}if(!o.length)continue;let f=o.length<t.facet.length;const u=[],m=[];for(const[w,{vertex:j,facet:S,partial:V}]of n.root.dualVertices.entries())if(o.every(k=>S.includes(k))&&(u.push(j),m.push(w)),f=f||V,u.length===2)break;if(u.length!==2)continue;const x={word:r,vertices:u,dual:!0,partial:f};n.root.dualEdges.set(`${b}#${r}`,{edge:m,partial:f}),f?c.push(x):(h.push(x),t.currentWords.delete(d))}}else if(e===2){if(!((v=n.root.dualVertices)!=null&&v.size)||!((a=n.root.dualEdges)!=null&&a.size))return{objects:h,partials:c};for(const[d,r]of t.currentWords){const o=[];for(let k=0;k<t.facet.length;k++){const z=y(n.root,r+t.facet[k]);z&&n.root.vertices.has(z)&&o.push(z)}if(o.length<t.facet.length)continue;let f=!1;const u={},m=[];for(const[k,{vertex:z,facet:O,partial:C}]of n.root.dualVertices.entries())(o.every(E=>O.includes(E))||s.dimensions===2)&&(u[k]=z,m.push(k),f=f||C);if(m.length<3)continue;const x=[];for(const{edge:k,partial:z}of n.root.dualEdges.values())m.includes(k[0])&&m.includes(k[1])&&(f=f||z,x.push([...k]));if(x.length<3)continue;const w=[],j=re(x);if(j.length<4)continue;j[0]===j[j.length-1]&&j.pop();for(let k=0;k<j.length;k++){const z=j[k];w.push(u[z])}if(w.length===3){const k={word:r,vertices:w,dual:!0,partial:f};f?c.push(k):(h.push(k),t.currentWords.delete(d));continue}const S=r.length%2?0:1;let V=new Array(s.dimensions).fill(0);for(let k=0;k<w.length;k++){const z=w[k];V=N(V,z)}V=_(V,1/w.length);for(let k=0;k<w.length;k++){const z={word:r,vertices:[w[(k+S)%w.length],w[(k+(1-S))%w.length],V],dual:!0,faceIndex:k,faceSize:w.length,partial:f};f?c.push(z):(h.push(z),t.currentWords.delete(d))}}}return{objects:h,partials:c}},Ke=(e,t,s)=>{const n=[],i=[],b=[];for(const[g,h]of e.currentWords){let c;if(h===""){const l=Y(s.rootVertices);e.fundamentalVertices=new Map,c=l.map(v=>L(v,s.metric)),e.hashes={vertex:new Set,edge:new Set,face:new Set},e.fundamentalVertices.set("",c)}else{c=[...e.fundamentalVertices.get(h.slice(1))];const l=e.gens.indexOf(h[0]);for(let v=0;v<c.length;v++)c[v]=F(c[v],s.rootNormals[l],s.metric)}for(let l=0;l<c.length;l++){const v=X(c[l]);e.hashes.vertex.has(v)||(n.push({word:h,cosetId:g,vertices:[c[l]]}),e.hashes.vertex.add(v));for(let a=l+1;a<c.length;a++){const d=[c[l],c[a]].sort((r,o)=>{for(let f=0;f<r.length;f++){if(r[f]<o[f])return-1;if(r[f]>o[f])return 1}return 0}).map(r=>X(r)).join("-");e.hashes.edge.has(d)||(i.push({word:h,cosetId:g,vertices:[c[l],c[a]]}),e.hashes.edge.add(d));for(let r=a+1;r<c.length;r++){const o=[c[l],c[a],c[r]].sort((f,u)=>{for(let m=0;m<f.length;m++){if(f[m]<u[m])return-1;if(f[m]>u[m])return 1}return 0}).map(f=>X(f)).join("-");e.hashes.face.has(o)||(b.push({word:h,cosetId:g,vertices:[c[l],c[a],c[r]]}),e.hashes.face.add(o))}}e.fundamentalVertices.set(h,c)}e.currentWords.delete(g)}return[n,i,b]},Qe=(e,t,s,n,i,b,g,h,c)=>{g.root.lasts||(g.root.lasts=new Array(3).fill(0));const l=[];if(i){const v=Ke(g.root,e,s);for(let a=0;a<v.length;a++)n[R[a]]?(l.push({start:g.root.lasts[a],size:v[a].length,objects:[v[a]],partials:[]}),g.root.lasts[a]+=v[a].length):l.push(null)}else for(let v=0;v<3;v++){if(!g[v]||!b&&!n[R[v]]){l.push(null);continue}const a={start:g.root.lasts[v],size:0,objects:[],partials:[]};for(let d=0;d<g[v].detail.length;d++){const r=g[v].detail[d],o=t.get(r.key);if(!r.dual&&h.includes(r.key)||!o.compute||!o.currentWords.size){a.objects.push(null),a.partials.push(null);continue}const{objects:f,partials:u}=r.dual?Je(v,o,e,g,c,r.key):Ue(v,o,e,g);!n[R[v]]||h.includes(r.key)||(a.objects.push(f),a.size+=f.length+u.length,g.root.lasts[v]+=f.length,a.partials.push(u))}l.push(a)}return l},me=(e,t,s,n,i,b,g,h,c=[])=>{c.done=!0;let l=!0;for(const d of s.values())if(d.compute&&!d.done){l=!1;break}const v=(d,r,o)=>{if(r.done===!1||r.facet.length===0)return r.gens.includes(d);const f=[],u=[];for(const m of r.facet){const x=y(o,m);if(!x)return null;const w=y(o,d+m);if(!w)return null;f.push(x),u.push(w)}return f.sort((m,x)=>m-x),u.sort((m,x)=>m-x),f.every((m,x)=>m===u[x])},a=d=>{var m;const r=g||b?t.dimensions-d.dimensions-1:d.dimensions;d.children.forEach(a);const o=h[r],f=R[r],u=`${g?"d":b?"f":""}${d.key}`;if(d!=null&&d.new){c[r]||(c[r]={dimensions:r,processing:i[f]?0:void 0,count:0,detail:[],aggregated:[],done:!0});const x=n.eigens.values;if(!s.has(u)){let V="";if(d.dimensions===0)V=t.subgens;else for(let z=0;z<t.gens.length;z++){const O=v(t.gens[z],d,c.root);if(O===null)return;O&&(V+=t.gens[z])}if((m=c.root)!=null&&m.hosotope){if(d.dimensions===1)V=V.replace(c.root.hosotope.gen,"");else if(d.dimensions===2){let z=c.root.coxeter[c.root.hosotope.index].findIndex((C,E)=>E!==c.root.hosotope.index&&C!==2);z<0&&(z=c.root.hosotope.index<c.root.dimensions-1?c.root.hosotope.index+1:0);const O=Object.entries(c.root.transforms).find(([C,E])=>E.includes(z))[0];V=V.replace(O,c.root.hosotope.gen)}}const k={...t,key:u,subgens:V,facet:d.facet,subdimensions:r,mirrors:d.mirrors,compute:o,space:n,...d.dimensions===0&&!b?{rootVertex:n.rootVertex,rootNormals:n.rootNormals,rootVertices:n.rootVertices,metric:n.metric}:{}};s.set(u,k)}const w=s.get(u);d.dimensions===0&&(c.root=w),w.done||(w.limit=o?e:l?1e3:1,f==="edge"&&n.curvature<=0&&(w.limit*=1.75),o?(we(w),x.some(V=>V<=0)?w.count=1/0:w.count=w.cosets.size):x.some(V=>V<=0)?(w.count=1/0,w.done=!0):w.limit&&(w.count=qe(w)));const j=b?d.mirrors.map(()=>0):d.mirrors;c[r].detail.push({key:u,coxeter:d.coxeter,stellation:d.stellation,mirrors:j,dual:g,fundamental:b,count:w.count,done:w.done});const S=c[r].aggregated.find(({coxeter:V,stellation:k,mirrors:z})=>B(V,d.coxeter)&&B(k,d.stellation)&&B(z,j));S?(S.done=S.done&&w.done,S.count+=w.count,S.key+=","+u):c[r].aggregated.push({key:u,coxeter:d.coxeter,stellation:d.stellation,mirrors:j,count:w.count,done:w.done}),i[f]&&w.words&&(c[r].processing+=w.words.size),c[r].count+=w.count,c[r].done=c[r].done&&w.done,c[r].dual=g,c[r].fundamental=b,c.done=c.done&&w.done}};return t.children.forEach(a),c.size=b?c.root.words.size:c.root.vertices.size,c};let T,A;onmessage=({data:{first:e,space:t,dimensions:s,coxeter:n,stellation:i,mirrors:b,ambiance:g,draw:h,batch:c,hidden:l,reciprocation:v,extrarels:a}})=>{try{e&&(T=new Map,A=ne(s,n,i,b,t,a),self.shape=A);const d=b.every(j=>!j),r=b.some(j=>Ae(j)),o=b.some(j=>Oe(j)),f=d?{[s-1]:!0}:r?{[s-1]:!0,[s-2]:h.edge||h.face,[s-3]:h.face,0:!0}:{0:!0,1:h.edge,2:h.face},u=me(c,A,T,t,h,d,r&&!o,f);if(o&&me(c,A,T,t,h,d,r,f,u),A.dimensions===2){A.currentWords=new Map([[1,""]]);const j=A.gens.split("").every(k=>A.mirrors[A.transforms[k][0]]),S=A.gens.split("").every(k=>A.transforms[k].length===2),V=Array.from(u.root.words.values());A.facet=new Array(V.length);for(let k=0;k<V.length;k++)A.facet[k]=V[S?k:be(k,A.facet.length,j)];A.done=!0,T.set("f",{...A,subgens:A.subgens,facet:A.facet,subdimensions:A.dimensions,mirrors:A.mirrors,compute:!0}),u[2]={dimensions:2,processing:1,count:0,detail:[{key:"f",coxeter:A.coxeter,stellation:A.stellation,mirrors:A.mirrors,dual:r,count:0,done:!0}],aggregated:[{key:"f",coxeter:A.coxeter,stellation:A.stellation,mirrors:A.mirrors,dual:r,count:0,done:!0}],done:!0}}const m=Qe(A,T,t,h,d,r,u,l,v),{infos:x,data:w}=Le(A.dimensions,m,g,h);u.root={gens:A.gens,subgens:A.subgens,rels:A.rels},postMessage({polytope:u,infos:x,data:w},w.flat(1).filter(j=>j).map(j=>j.buffer))}catch(d){postMessage({error:d.message})}}})();
