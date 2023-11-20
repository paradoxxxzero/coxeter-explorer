(function(){"use strict";const I=t=>t!==""&&t!=="x",U=(t,e)=>{const r=new Array(t.length);for(let n=0;n<t.length;n++){let l=0;for(let o=0;o<t[0].length;o++)l+=t[n][o]*e[o];r[n]=l}return r},W=t=>{const e=new Array(t);for(let r=0;r<t;r++)e[r]=new Array(t).fill(0),e[r][r]=1;return e},E=t=>{const e=t.length,r=[];for(let n=0;n<e;n++)r.push([...t[n],...W(e)[n]]);for(let n=0;n<e;n++){const l=r[n][n];for(let o=n+1;o<e;o++){const a=r[o][n]/l;for(let s=n;s<2*e;s++)r[o][s]-=a*r[n][s]}}for(let n=e-1;n>=0;n--){const l=r[n][n];for(let o=n-1;o>=0;o--){const a=r[o][n]/l;for(let s=0;s<2*e;s++)r[o][s]-=a*r[n][s]}for(let o=e;o<2*e;o++)r[n][o]/=l}return r.map(n=>n.slice(e))},D=(t,e,r)=>{let n=0;for(let l=0;l<t.length;l++)n+=t[l]*e[l]*(l===t.length-1&&r||1);return n},J=(t,e)=>D(t,t,e),K=(t,e,r)=>{t=t.slice();const n=2*D(t,e,r);for(let l=0;l<t.length;l++)t[l]-=n*(r||l!==t.length-1?e[l]:0);return t},Q=(t,e)=>{if(t=t.slice(),e===0){for(let n=0;n<t.length;n++)t[n]/=t[t.length-1];return t}const r=(e===-1&&z(t[t.length-1])||1)/v(Z(1e-32,F(J(t,e))));for(let n=0;n<t.length;n++)t[n]*=r;return t},X=(t,e,r)=>{let n=t.map(s=>isNaN(s)?1:+s),l=e.slice(),o;for(let s=0;s<n.length&&(o=E(l),o.some(i=>i.some(d=>isNaN(d)||F(d)>1e8)));s++){console.warn("Non invertible matrix, retrying by shifting mirrors"),l.push(l.shift()),n.push(n.shift());if(s===n.length-1)return console.warn("Non invertible matrix, returning default value"),[0,0,1]}const a=U(o,n);return a[a.length-1]*=r||1,Q(a,r)},C=(t,e,r,n)=>{const l=N/t,o=N/e,a=N/r;return O(N/Y(-S(l)*S(a)+H(l)*H(a)*((S(o)-S(n*l)*S(a))/(H(n*l)*H(a)))))},{abs:F,cos:S,sin:H,tan:ue,cosh:de,sinh:pe,acos:Y,acosh:me,atan:ye,atan2:be,min:Ae,max:Z,round:O,sqrt:v,sign:z,ceil:_e,floor:we,log:je,exp:ke,hypot:xe,pow:Ie,PI:N}=Math,G=new ArrayBuffer(8),ee=new Float64Array(G),R=new Int32Array(G);function te(t){return~~t===t?~~t:(ee[0]=t,R[0]^R[1])}const q=10**4,ne=t=>{let e="";for(let r=0;r<t.length;r++)e+=te(O(t[r]*q)/q).toString(),r<t.length-1&&(e+="|");return e};function*re(t,e){if(e<0||t.length<e)return;const r=Array.from(Array(e).keys());for(;;){yield r.map(l=>t[l]);let n=e-1;for(;n>=0&&r[n]>=t.length-e+n;)n--;if(n<0)return;for(let l=r[n]+1;n<e;n++,l++)r[n]=l}}const L=(t,e=2)=>Array.from(re(t,e)),u=t=>String.fromCharCode(97+t),le=(t,e,r,n,l,o=[])=>{const a=[];for(let s=0;s<t;s++)I(n[s])&&!o.includes(s)&&a.push(u(s).repeat(2));for(let s=1;s<t;s++)for(let i=0;i<s;i++)!o.includes(s)&&!o.includes(i)&&e[s][i]>1&&I(n[s])&&I(n[i])&&a.push((u(i)+u(s)).repeat(e[s][i]));if(r&&!r.every(s=>s.every(i=>i===1))&&l>0){if(t===4&&(r[0][1]>1||r[2][3]>1)&&e[0][1]>3&&e[2][3]>3)r[0][1]>1&&a.push("abcdcb".repeat(C(e[0][1],e[1][2],e[0][2],r[0][1]))),r[2][3]>1&&a.push("abcdcb".repeat(C(e[2][3],e[1][2],e[1][3],r[2][3])));else for(let s=1;s<t;s++)for(let i=0;i<s;i++)if(r[i][s]>1){if(i+2<t){const d=C(e[i+1][s+1],e[i][s],e[i][s+1],r[i][s]);a.push((u(i)+u(s)+u(i+2)+u(s)).repeat(d))}if(i-1>=0){const d=C(e[i-1][s-1],e[i][s],e[i-1][s],r[i][s]);a.push((u(i)+u(s)+u(i)+u(i-1)).repeat(d))}}}return a},se=(t,e=[])=>t.map((r,n)=>!e.includes(n)&&I(r)?u(n):"").join(""),oe=(t,e=[])=>t.map((r,n)=>e.includes(n)||r||!I(r)?"":u(n)).join(""),ie=(t,e,r,n,l)=>{const o=le(t,e,r,n,l),a=se(n),s=oe(n);return{gens:a,subgens:s,rels:o}},ae=(t,e)=>{if(e.left===e.right)return!1;for(;e.left!==e.right;){const r=t.normal[e.left_coset][e.rel[e.left]];if(r===void 0)break;e.left++,e.left_coset=r}for(;e.left!==e.right;){const r=t.reverse[e.right_target][e.rel[e.right]];if(r===void 0)break;e.right--,e.right_target=r}return e.left===e.right?(t.normal[e.left_coset][e.rel[e.right]]=e.right_target,t.reverse[e.right_target][e.rel[e.right]]=e.left_coset,!0):!1},fe=t=>{const{gens:e,subgens:r,rels:n,cosets:l,rows:o,words:a,limit:s}=t,i=e.length,d=n.map(f=>[...f].map(y=>e.indexOf(y))),w=r.split("").map(f=>e.indexOf(f));if(l.normal.length===0){l.normal.push(new Array(i).fill()),l.reverse.push(new Array(i).fill());for(let f=0;f<w.length;f++)l.normal[0][w[f]]=0,l.reverse[0][w[f]]=0}for(o.length===0&&o.push(...d.map(f=>({rel:f,left:0,right:f.length-1,left_coset:0,right_target:0})));o.length&&l.normal.length<s;){for(;;){let c=!1;for(let h=o.length-1;h>=0;h--)ae(l,o[h])&&(c=!0,o.splice(h,1));if(!c)break}const f=l.normal.length;let y=!1;for(let c=0;c<l.normal.length;c++){const h=l.normal[c];for(let m=0;m<h.length;m++){let g=h[m];if(g===void 0){g=l.normal.length,l.normal.push(new Array(i).fill()),l.reverse.push(new Array(i).fill()),l.normal[c][m]=g,l.reverse[g][m]=c,o.push(...d.map(b=>({rel:b,left:0,right:b.length-1,left_coset:f,right_target:f}))),y=!0;break}}if(y)break}}o.length||(t.done=!0),a.length===0&&(a[0]="");let k=!0,p=l.normal.length;for(;ce(l.normal.length,a)&&k&&--p;){k=!1;for(let f=0;f<a.length;f++){if(a[f]===void 0)continue;const y=l.normal[f];for(let c=0;c<y.length;c++){const h=y[c];h===void 0||a[h]!==void 0||(a[h]=a[f]+e[c],k=!0)}}}return k||console.warn("Hole in the cosets"),p===0&&console.warn("Max iterations reached"),{cosets:l,rows:o,words:a}},ce=(t,e)=>{for(let r=0;r<t;r++)if(e[r]===void 0)return!0;return!1};let _=null,V=null,P=null,B=null,M=null,$=0;const he=(t,e,r,n,l,o)=>{const a=()=>({cosets:{normal:[],reverse:[]},rows:[],words:[],done:!1,lastDrawn:0});V=new Array(t).fill().map((s,i)=>X(new Array(t).fill().map((d,w)=>w===i?1:0),l,o)),_={...ie(t,e,r,new Array(t).fill(1),o),...a()},P=new Map,B=new Set,M=new Set,$=0},ge=(t,e)=>{const{rootVertex:r,mirrorsPlanes:n,curvature:l}=t;let o=r;for(let a=0;a<e.length;a++)o=K(o,n[e.charCodeAt(a)-97],l);return o};onmessage=({data:{order:t,curvature:e,mirrorsPlanes:r,coxeter:n,stellation:l,mirrors:o,rootVertex:a,dimensions:s,uuid:i}})=>{t===0&&he(s,n,l,o,r,e);const d=t===0?1:(t+1)*10,w=L(new Array(V.length).fill().map((p,f)=>f)),k=L(new Array(V.length).fill().map((p,f)=>f),3);try{let p=[],f=[],y=[];if(!_.done){_.limit=d,fe(_);for(let c=_.lastDrawn;c<_.words.length;c++){const h=_.words[c];if(h===void 0)continue;const m=[];for(let g=0;g<V.length;g++){const b=V[g],j=ge({rootVertex:b,mirrorsPlanes:r,curvature:e},h),A=ne(j);if(P.has(A))m.push(P.get(A));else{p.push({vertex:j,word:h,i:c});const x=$+p.length-1;P.set(A,x),m.push(x)}}_.lastDrawn=c+1;for(let g=0;g<w.length;g++){const[b,j]=w[g],[A,x]=[m[b],m[j]],T=b<j?`${A}-${x}`:`${x}-${A}`;B.has(T)||(f.push({start:A,end:x,word:h}),B.add(T))}for(let g=0;g<k.length;g++){const b=k[g].map(A=>m[A]),j=b.sort().join("-");M.has(j)||(y.push({vertices:b,word:h}),M.add(j))}}}$+=p.length,postMessage({vertices:p,edges:f,faces:y,order:t,uuid:i})}catch(p){postMessage({error:p.message,uuid:i})}}})();
