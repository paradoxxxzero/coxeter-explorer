(function(){"use strict";const{abs:O,cos:H,sin:J,cosh:K,sinh:N,acos:Q,acosh:T,tan:U,min:X,max:Y,round:Z,sqrt:$,sign:ee,floor:te,log:ne,exp:se,PI:le}=Math,R=t=>[].concat(...t.map((e,s)=>t.slice(s+1).map(r=>[e,r]))),d=t=>String.fromCharCode(97+t),S=t=>t.charCodeAt(0)-97,C=(t,e,s,r)=>{const n=[];for(let l=0;l<t;l++)n.push(d(l).repeat(2));for(let l=1;l<t;l++)for(let i=0;i<l;i++)n.push((d(i)+d(l)).repeat(e[l][i]));return n},V=(t,e,s,r)=>{const n=C(t,e),l=[...Array(t).keys()].map(c=>d(c)).join(""),i=r.map((c,p)=>c?"":d(O(p))).join("");return{gens:l,subgens:i,rels:n}},q=(t,e,s,r)=>{const n=C(t,e),l=[...Array(t).keys()].map(c=>d(c)).join(""),i=[];for(let c=0;c<r.length;c++)if(r[c]){let p=d(c);for(let g=0;g<t;g++)e[c][g]===2&&(r[g]||(p+=d(g)));i.push({gens:l,subgens:p,rels:n,pair:[0,d(c)]})}return i},E=(t,e,s,r)=>{const n=C(t,e),l=[...Array(t).keys()].map(p=>d(p)).join(""),i=[],c=R([...Array(t).keys()]);for(let p=0;p<c.length;p++){const g=c[p],_=e[g[0]][g[1]],f=[];if(r[g[0]]&&r[g[1]])for(let a=0;a<_;a++){const u=g.map(h=>d(h)).join("").repeat(a);f.push(u),f.push(d(g[1])+u)}else if((r[g[0]]||r[g[1]])&&_>2)for(let a=0;a<_;a++){const u=g.map(h=>d(h)).join("").repeat(a);f.push(u)}else continue;let m=d(g[0])+d(g[1]);for(let a=0;a<t;a++)e[g[0]][a]===2&&e[g[1]][a]===2&&(r[a]||(m+=d(a)));i.push({gens:l,subgens:m,rels:n,face:f})}return i},F=(t,e)=>{if(e.left===e.right)return!1;for(;e.left!==e.right;){const s=t.normal[e.left_coset][e.rel[e.left]];if(s===void 0)break;e.left++,e.left_coset=s}for(;e.left!==e.right;){const s=t.reverse[e.right_target][e.rel[e.right]];if(s===void 0)break;e.right--,e.right_target=s}return e.left===e.right?(t.normal[e.left_coset][e.rel[e.right]]=e.right_target,t.reverse[e.right_target][e.rel[e.right]]=e.left_coset,!0):!1},x=t=>{const{gens:e,subgens:s,rels:r,cosets:n,rows:l,words:i,limit:c}=t,p=e.length,g=r.map(f=>[...f].map(m=>e.indexOf(m))),_=s.split("").map(f=>e.indexOf(f));if(n.normal.length===0){n.normal.push(new Array(p).fill()),n.reverse.push(new Array(p).fill());for(let f=0;f<_.length;f++)n.normal[0][_[f]]=0,n.reverse[0][_[f]]=0}for(l.length===0&&l.push(...g.map(f=>({rel:f,left:0,right:f.length-1,left_coset:0,right_target:0})));l.length&&n.normal.length<c;){for(;;){let a=!1;for(let u=l.length-1;u>=0;u--)F(n,l[u])&&(a=!0,l.splice(u,1));if(!a)break}const f=n.normal.length;let m=!1;for(let a=0;a<n.normal.length;a++){const u=n.normal[a];for(let h=0;h<u.length;h++){let o=u[h];if(o===void 0){o=n.normal.length,n.normal.push(new Array(p).fill()),n.reverse.push(new Array(p).fill()),n.normal[a][h]=o,n.reverse[o][h]=a,l.push(...g.map(k=>({rel:k,left:0,right:k.length-1,left_coset:f,right_target:f}))),m=!0;break}}if(m)break}}for(l.length||(t.done=!0),i.length===0&&(i[0]="");L(n.normal.length,i);)for(let f=0;f<i.length;f++){if(i[f]===void 0)continue;const m=n.normal[f];for(let a=0;a<m.length;a++){const u=m[a];u===void 0||i[u]!==void 0||(i[u]=i[f]+d(a))}}return{cosets:n,rows:l,words:i}},L=(t,e)=>{for(let s=0;s<t;s++)if(e[s]===void 0)return!0;return!1},W=(t,e,s)=>{let r=0;for(let n=0;n<t.length;n++)r+=t[n]*e[n]*(n===t.length-1&&s||1);return r},z=(t,e,s)=>{t=t.slice();const r=2*W(t,e,s);for(let n=0;n<t.length;n++)t[n]-=r*(s||n!==t.length-1?e[n]:0);return t};let j=null,I=null,w=null;const B=(t,e,s,r)=>{const n=()=>({cosets:{normal:[],reverse:[]},rows:[],words:[],done:!1,lastDrawn:0});j={...V(t,e,s,r),...n()},I=q(t,e,s,r).map(l=>({...l,...n()})),w=E(t,e,s,r).map(l=>({...l,...n()}))},G=(t,e,s)=>{s&&(e=e.replace(/./g,c=>c==="a"?"ab":"bc"));const{rootVertex:r,mirrorsPlanes:n,curvature:l}=t;let i=r;for(let c=0;c<e.length;c++)i=z(i,n[e.charCodeAt(c)-97],l);return i},D=(t,e=0)=>{for(let s=0;s<t.length;s++){const r=S(t[s]),n=j.cosets.normal[e][r];if(n===void 0)return;e=n}return e};onmessage=({data:{order:t,curvature:e,mirrorsPlanes:s,coxeter:r,stellated:n,stellation:l,mirrors:i,rootVertex:c,dimensions:p,uuid:g}})=>{const _=i.some(m=>m==="s");t===0&&B(p,r,n?l:null,i);const f=(t+1)*(e>0?1e3:250);try{let m=[],a=[],u=[];if(!j.done){j.limit=f,x(j);for(let h=j.lastDrawn;h<j.words.length;h++){const o=j.words[h],k=G({rootVertex:c,mirrorsPlanes:s,curvature:e},o,_);m.push({vertex:k,word:o}),j.lastDrawn=h+1}}for(let h=0;h<I.length;h++){const o=I[h];if(o.done)continue;o.limit=f,x(o);const k=o.pair[0],v=D(o.pair[1]);for(let b=o.lastDrawn;b<o.words.length;b++){const y=o.words[b],P=D(y,k),A=D(y,v);if(P===void 0||A===void 0){o.lastDrawn=b;break}a.push({start:P,end:A,word:y}),o.lastDrawn=b+1}}for(let h=0;h<w.length;h++){const o=w[h];if(o.done)continue;o.limit=f,x(o);let k=!1;const v=[];for(let b=0;b<o.face.length;b++){const y=o.face[b],P=D(y);if(P===void 0){k=!0;break}v.push(P)}if(k)break;for(let b=o.lastDrawn;b<o.words.length;b++){const y=o.words[b];if(y===void 0){o.lastDrawn=b;break}const P=[];for(let A=0;A<v.length;A++){const M=D(y,v[A]);if(M===void 0){k=!0;break}P.push(M)}if(k){o.lastDrawn=b;break}u.push({vertices:P,word:y}),o.lastDrawn=b+1}}postMessage({vertices:m,edges:a,faces:u,order:t,uuid:g})}catch(m){postMessage({error:m.message,uuid:g})}}})();
