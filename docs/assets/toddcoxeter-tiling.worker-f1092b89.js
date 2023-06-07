(function(){"use strict";const D=t=>t!==""&&t!=="x",B=(t,e,o)=>{let f=0;for(let l=0;l<t.length;l++)f+=t[l]*e[l]*(l===t.length-1&&o||1);return f},G=(t,e,o)=>{t=t.slice();const f=2*B(t,e,o);for(let l=0;l<t.length;l++)t[l]-=f*(o||l!==t.length-1?e[l]:0);return t},V=(t,e,o,f)=>{const l=F/t,d=F/e,s=F/o;return L(F/H(-R(l)*R(s)+E(l)*E(s)*((R(d)-R(f*l)*R(s))/(E(f*l)*E(s)))))},{abs:te,cos:R,sin:E,tan:ne,cosh:se,sinh:le,acos:H,acosh:re,atan:oe,atan2:ae,min:fe,max:ie,round:L,sqrt:ce,sign:he,ceil:ge,floor:ue,log:de,exp:pe,hypot:we,pow:me,PI:F}=Math;function*T(t,e){if(e<0||t.length<e)return;const o=Array.from(Array(e).keys());for(;;){yield o.map(l=>t[l]);let f=e-1;for(;f>=0&&o[f]>=t.length-e+f;)f--;if(f<0)return;for(let l=o[f]+1;f<e;f++,l++)o[f]=l}}const U=(t,e=2)=>Array.from(T(t,e)),y=t=>String.fromCharCode(97+t),J=t=>t.charCodeAt(0)-97,x=(t,e,o,f,l)=>{const d=[];for(let s=0;s<t;s++)D(f[s])&&d.push(y(s).repeat(2));for(let s=1;s<t;s++)for(let u=0;u<s;u++)e[s][u]<1/0&&D(f[s])&&D(f[u])&&d.push((y(u)+y(s)).repeat(e[s][u]));if(o&&!o.every(s=>s.every(u=>u===1))&&l>0){if(t===4&&(o[0][1]>1||o[2][3]>1)&&e[0][1]>3&&e[2][3]>3)o[0][1]>1&&d.push("abcdcb".repeat(V(e[0][1],e[1][2],e[0][2],o[0][1]))),o[2][3]>1&&d.push("abcdcb".repeat(V(e[2][3],e[1][2],e[1][3],o[2][3])));else for(let s=1;s<t;s++)for(let u=0;u<s;u++)if(o[u][s]>1){if(u+2<t){const k=V(e[u+1][s+1],e[u][s],e[u][s+1],o[u][s]);d.push((y(u)+y(s)+y(u+2)+y(s)).repeat(k))}if(u-1>=0){const k=V(e[u-1][s-1],e[u][s],e[u-1][s],o[u][s]);d.push((y(u)+y(s)+y(u)+y(u-1)).repeat(k))}}}return d},O=t=>t.map((e,o)=>D(e)?y(o):"").join(""),K=(t,e,o,f,l)=>{const d=x(t,e,o,f,l),s=O(f),u=f.map((k,A)=>k||!D(k)?"":y(A)).join("");return{gens:s,subgens:u,rels:d}},Q=(t,e,o,f,l)=>{const d=x(t,e,o,f,l),s=O(f),u=[];for(let k=0;k<f.length;k++)if(f[k]){let A=y(k);for(let w=0;w<t;w++)e[k][w]===2&&(f[w]||(A+=y(w)));u.push({gens:s,subgens:A,rels:d,pair:[0,y(k)]})}return u},X=(t,e,o,f,l)=>{const d=x(t,e,o,f,l),s=O(f),u=[],k=U([...Array(t).keys()]);for(let A=0;A<k.length;A++){const w=k[A],i=e[w[0]][w[1]],j=[];if(f[w[0]]&&f[w[1]]&&isFinite(i))for(let a=0;a<i;a++){const p=w.map(g=>y(g)).join("").repeat(a);j.push(p),j.push(y(w[1])+p)}else if((f[w[0]]||f[w[1]])&&isFinite(i)&&i>2)for(let a=0;a<i;a++){const p=w.map(g=>y(g)).join("").repeat(a);j.push(p)}else continue;let h=y(w[0])+y(w[1]);for(let a=0;a<t;a++)e[w[0]][a]===2&&e[w[1]][a]===2&&(f[a]||(h+=y(a)));u.push({gens:s,subgens:h,rels:d,face:j})}return u},Y=(t,e)=>{if(e.left===e.right)return!1;for(;e.left!==e.right;){const o=t.normal[e.left_coset][e.rel[e.left]];if(o===void 0)break;e.left++,e.left_coset=o}for(;e.left!==e.right;){const o=t.reverse[e.right_target][e.rel[e.right]];if(o===void 0)break;e.right--,e.right_target=o}return e.left===e.right?(t.normal[e.left_coset][e.rel[e.right]]=e.right_target,t.reverse[e.right_target][e.rel[e.right]]=e.left_coset,!0):!1},W=t=>{const{gens:e,subgens:o,rels:f,cosets:l,rows:d,words:s,limit:u}=t,k=e.length,A=f.map(h=>[...h].map(a=>e.indexOf(a))),w=o.split("").map(h=>e.indexOf(h));if(l.normal.length===0){l.normal.push(new Array(k).fill()),l.reverse.push(new Array(k).fill());for(let h=0;h<w.length;h++)l.normal[0][w[h]]=0,l.reverse[0][w[h]]=0}for(d.length===0&&d.push(...A.map(h=>({rel:h,left:0,right:h.length-1,left_coset:0,right_target:0})));d.length&&l.normal.length<u;){for(;;){let p=!1;for(let g=d.length-1;g>=0;g--)Y(l,d[g])&&(p=!0,d.splice(g,1));if(!p)break}const h=l.normal.length;let a=!1;for(let p=0;p<l.normal.length;p++){const g=l.normal[p];for(let b=0;b<g.length;b++){let c=g[b];if(c===void 0){c=l.normal.length,l.normal.push(new Array(k).fill()),l.reverse.push(new Array(k).fill()),l.normal[p][b]=c,l.reverse[c][b]=p,d.push(...A.map(r=>({rel:r,left:0,right:r.length-1,left_coset:h,right_target:h}))),a=!0;break}}if(a)break}}d.length||(t.done=!0),s.length===0&&(s[0]="");let i=!0,j=l.normal.length;for(;Z(l.normal.length,s)&&i&&--j;){i=!1;for(let h=0;h<s.length;h++){if(s[h]===void 0)continue;const a=l.normal[h];for(let p=0;p<a.length;p++){const g=a[p];g===void 0||s[g]!==void 0||(s[g]=s[h]+y(p),i=!0)}}}return i||console.warn("Hole in the cosets"),j===0&&console.warn("Max iterations reached"),{cosets:l,rows:d,words:s}},Z=(t,e)=>{for(let o=0;o<t;o++)if(e[o]===void 0)return!0;return!1};let P=null,$=null,q=null,C=null,I=null;const z=(t,e,o,f,l)=>{const d=()=>({cosets:{normal:[],reverse:[]},rows:[],words:[],done:!1,lastDrawn:0});P={...K(t,e,o,f,l),...d()},$=Q(t,e,o,f,l).map(s=>({...s,...d()})),q=X(t,e,o,f,l).map(s=>({...s,...d()})),C=new Map,I=[new Map,new Map]},ee=(t,e)=>{const{rootVertex:o,mirrorsPlanes:f,curvature:l}=t;let d=o;for(let s=0;s<e.length;s++)d=G(d,f[e.charCodeAt(s)-97],l);return d},S=(t,e=0)=>{for(let o=0;o<t.length;o++){const f=J(t[o]),l=P.cosets.normal[e][f];if(l===void 0)return;e=l}return e};onmessage=({data:{order:t,curvature:e,mirrorsPlanes:o,coxeter:f,stellation:l,mirrors:d,rootVertex:s,dimensions:u,uuid:k}})=>{t===0&&z(u,f,l,d,e);const A=(t+1)*(e>0?500:100);try{let w=[],i=[],j=[];if(!P.done){P.limit=A,W(P);for(let h=P.lastDrawn;h<P.words.length;h++){const a=P.words[h];if(a===void 0){w.push({vertex:new Array(u).fill(NaN),word:""});continue}const p=ee({rootVertex:s,mirrorsPlanes:o,curvature:e},a);w.push({vertex:p,word:a,i:h}),P.lastDrawn=h+1}}for(let h=0;h<$.length;h++){const a=$[h];a.done||(a.limit=A*(e>0?1:e<0?1.5:3),W(a));const p=a.pair[0],g=S(a.pair[1]);for(let b=a.lastDrawn;b<a.words.length;b++){const c=a.words[b];if(c===void 0)continue;const r=S(c,p),n=S(c,g);if(r===void 0||n===void 0){a.lastDrawn=b;break}i.push({start:r,end:n,word:c}),a.lastDrawn=b+1}}for(let h=0;h<q.length;h++){const a=q[h];a.done||(a.limit=A*(e>0?1:e<0?1.5:2.5),W(a));let p=!1;const g=[];for(let b=0;b<a.face.length;b++){const c=a.face[b],r=S(c);if(r===void 0){p=!0;break}g.push(r)}if(p)break;for(let b=a.lastDrawn;b<a.words.length;b++){const c=a.words[b];if(c===void 0)continue;const r=[];for(let n=0;n<g.length;n++){const m=S(c,g[n]);if(m===void 0){p=!0;break}r.push(m)}if(p){a.lastDrawn=b;break}j.push({vertices:r,word:c}),a.lastDrawn=b+1}}if(d.some(h=>h==="s")){const h=d.map((r,n)=>r==="s"?y(n):"").join(""),a=h.length>0?new RegExp(`[^${h}]`,"g"):null;for(let r=0;r<w.length;r++){const n=w[r];n.word.replace(a,"").length%2===1&&(n.vertex=NaN,C.set(n.i,[]))}const p=[],g=new Map;for(let r=0;r<i.length;r++)if(C.has(i[r].start)){g.has(i[r].start)||g.set(i[r].start,[]);const n=C.get(i[r].start);n.push(i[r].end),n.word||(n.word=i[r].word),g.get(i[r].start).push(i[r].end)}else if(C.has(i[r].end)){g.has(i[r].end)||g.set(i[r].end,[]);const n=C.get(i[r].end);n.push(i[r].start),n.word||(n.word=i[r].word),g.get(i[r].end).push(i[r].start)}else p.push(i[r]);const b=Array.from(g.keys());for(let r=0;r<g.size;r++){const n=b[r],m=g.get(n),v=C.get(n);for(let _=0;_<m.length;_++)for(let M=0;M<v.length;M++)m[_]<=v[M]||p.push({start:m[_],end:v[M],word:v.word})}i=p;const c=[];for(let r=0;r<j.length;r++){const n=j[r],m=[];for(let v=0;v<n.vertices.length;v++)C.has(n.vertices[v])||m.push(n.vertices[v]);c.push({...n,vertices:m})}for(let r=0;r<g.size;r++){const n=b[r],m=C.get(n);c.push({vertices:m,word:m.word})}j=c}if(d.some(h=>h==="ß")){const h=d.map((c,r)=>c==="ß"?y(r):"").join(""),a=h.length>0?new RegExp(`[^${h}]`,"g"):null;for(let c=0;c<w.length;c++){const r=w[c];I[r.word.replace(a,"").length%2].set(r.i,[])}const p=[],g=[new Map,new Map];for(let c=0;c<2;c++){for(let n=0;n<i.length;n++)if(I[c].has(i[n].start)){g[c].has(i[n].start)||g[c].set(i[n].start,[]);const m=I[c].get(i[n].start);m.push(i[n].end),m.word||(m.word=i[n].word),g[c].get(i[n].start).push(i[n].end)}else if(I[c].has(i[n].end)){g[c].has(i[n].end)||g[c].set(i[n].end,[]);const m=I[c].get(i[n].end);m.push(i[n].start),m.word||(m.word=i[n].word),g[c].get(i[n].end).push(i[n].start)}else p.push(i[n]);const r=Array.from(g[c].keys());for(let n=0;n<g[c].size;n++){const m=r[n],v=g[c].get(m),_=I[c].get(m);for(let M=0;M<v.length;M++)for(let N=0;N<_.length;N++)v[M]<=_[N]||p.push({start:v[M],end:_[N],word:_.word})}}i=p;const b=[];for(let c=0;c<2;c++){const r=Array.from(g[c].keys());for(let n=0;n<j.length;n++){const m=j[n],v=[];for(let _=0;_<m.vertices.length;_++)I[c].has(m.vertices[_])||v.push(m.vertices[_]);b.push({...m,vertices:v})}for(let n=0;n<g[c].size;n++){const m=r[n],v=I[c].get(m);b.push({vertices:v,word:v.word})}}j=b}postMessage({vertices:w,edges:i,faces:j,order:t,uuid:k})}catch(w){postMessage({error:w.message,uuid:k})}}})();
