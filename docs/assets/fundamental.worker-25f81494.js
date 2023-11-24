(function(){"use strict";const R=(t,e=null,n=1,r=!1)=>{if(e===null&&(e=t,t=0),n===0)throw new Error("Step cannot be zero.");if(e<t&&n>0||e>t&&n<0){if(r)return[];n=-n}return new Array(Math.ceil((e-t)/n)).fill().map((l,a)=>t+a*n)},T=t=>{const e=[];for(let n=0;n<t[0].length;n++){e.push([]);for(let r=0;r<t.length;r++)e[n].push(t[r][n])}return e},$=(t,e,n)=>{let r=0;for(let l=0;l<t.length;l++)r+=t[l]*e[l]*(l===t.length-1&&n||1);return r},q=(t,e)=>$(t,t,e),L=(t,e,n)=>{t=t.slice();const r=2*$(t,e,n);for(let l=0;l<t.length;l++)t[l]-=r*(n||l!==t.length-1?e[l]:0);return t},U=(t,e)=>{if(t=t.slice(),e===0){for(let r=0;r<t.length;r++)t[r]/=t[t.length-1];return t}const n=(e===-1&&X(t[t.length-1])||1)/Q(K(1e-32,W(q(t,e))));for(let r=0;r<t.length;r++)t[r]*=n;return t},C=(t,e,n,r)=>{const l=x/t,a=x/e,i=x/n;return D(x/J(-I(l)*I(i)+H(l)*H(i)*((I(a)-I(r*l)*I(i))/(H(r*l)*H(i)))))},{abs:W,cos:I,sin:H,tan:ce,cosh:he,sinh:ge,acos:J,acosh:ue,atan:de,atan2:me,min:pe,max:K,round:D,sqrt:Q,sign:X,ceil:be,floor:ye,log:Ae,exp:_e,hypot:we,pow:je,PI:x}=Math,O=new ArrayBuffer(8),Y=new Float64Array(O),E=new Int32Array(O);function Z(t){return~~t===t?~~t:(Y[0]=t,E[0]^E[1])}const F=10**4,z=t=>{let e="";for(let n=0;n<t.length;n++)e+=Z(D(t[n]*F)/F).toString(),n<t.length-1&&(e+="|");return e};function*v(t,e){if(e<0||t.length<e)return;const n=Array.from(Array(e).keys());for(;;){yield n.map(l=>t[l]);let r=e-1;for(;r>=0&&n[r]>=t.length-e+r;)r--;if(r<0)return;for(let l=n[r]+1;r<e;r++,l++)n[r]=l}}const G=(t,e=2)=>Array.from(v(t,e)),d=t=>String.fromCharCode(97+t),ee=(t,e,n,r,l,a=[])=>{const i=[];for(let s=0;s<t;s++)a.includes(s)||i.push(d(s).repeat(2));for(let s=1;s<t;s++)for(let o=0;o<s;o++)!a.includes(s)&&!a.includes(o)&&e[s][o]>1&&i.push((d(o)+d(s)).repeat(e[s][o]));if(!a.length&&n&&!n.every(s=>s.every(o=>o===1))&&l>0){if(t===4&&n[0][1]>1!=n[2][3]>1&&e[0][1]>3&&e[2][3]>3)n[0][1]>1&&i.push("abcdcb".repeat(C(e[0][1],e[1][2],e[0][2],n[0][1]))),n[2][3]>1&&i.push("abcdcb".repeat(C(e[2][3],e[1][2],e[1][3],n[2][3])));else for(let s=1;s<t;s++)for(let o=0;o<s;o++)if(n[o][s]>1){if(o+2<t){const u=C(e[o+1][s+1],e[o][s],e[o][s+1],n[o][s]);i.push((d(o)+d(s)+d(o+2)+d(s)).repeat(u))}if(o-1>=0){const u=C(e[o-1][s-1],e[o][s],e[o-1][s],n[o][s]);i.push((d(o)+d(s)+d(o)+d(o-1)).repeat(u))}}}return i},te=t=>t!==""&&t!=="x",ne=(t,e=[])=>t.map((n,r)=>e.includes(r)?"":d(r)).join(""),le=(t,e=[])=>t.map((n,r)=>e.includes(r)||n?"":d(r)).join(""),re=(t,e,n,r,l)=>{const a=r.map((u,j)=>te(u)?null:j).filter(u=>u),i=ee(t,e,n,r,l,a),s=ne(r,a),o=le(r,a);return{gens:s,subgens:o,rels:i}},se=(t,e)=>{if(e.left===e.right)return!1;for(;e.left!==e.right;){const n=t.normal[e.left_coset][e.rel[e.left]];if(n===void 0)break;e.left++,e.left_coset=n}for(;e.left!==e.right;){const n=t.reverse[e.right_target][e.rel[e.right]];if(n===void 0)break;e.right--,e.right_target=n}return e.left===e.right?(t.normal[e.left_coset][e.rel[e.right]]=e.right_target,t.reverse[e.right_target][e.rel[e.right]]=e.left_coset,!0):!1},oe=t=>{const{gens:e,subgens:n,rels:r,cosets:l,rows:a,words:i,limit:s}=t,o=e.length,u=r.map(f=>[...f].map(p=>e.indexOf(p))),j=n.split("").map(f=>e.indexOf(f));if(l.normal.length===0){l.normal.push(new Array(o).fill()),l.reverse.push(new Array(o).fill());for(let f=0;f<j.length;f++)l.normal[0][j[f]]=0,l.reverse[0][j[f]]=0}for(a.length===0&&a.push(...u.map(f=>({rel:f,left:0,right:f.length-1,left_coset:0,right_target:0})));a.length&&l.normal.length<s;){for(;;){let c=!1;for(let h=a.length-1;h>=0;h--)se(l,a[h])&&(c=!0,a.splice(h,1));if(!c)break}const f=l.normal.length;let p=!1;for(let c=0;c<l.normal.length;c++){const h=l.normal[c];for(let g=0;g<h.length;g++){let b=h[g];if(b===void 0){b=l.normal.length,l.normal.push(new Array(o).fill()),l.reverse.push(new Array(o).fill()),l.normal[c][g]=b,l.reverse[b][g]=c,a.push(...u.map(y=>({rel:y,left:0,right:y.length-1,left_coset:f,right_target:f}))),p=!0;break}}if(p)break}}a.length||(t.done=!0),i.length===0&&(i[0]="");let m=!0,A=l.normal.length;for(;ie(l.normal.length,i)&&m&&--A;){m=!1;for(let f=0;f<i.length;f++){if(i[f]===void 0)continue;const p=l.normal[f];for(let c=0;c<p.length;c++){const h=p[c];h===void 0||i[h]!==void 0||(i[h]=i[f]+e[c],m=!0)}}}return m||console.warn("Hole in the cosets"),A===0&&console.warn("Max iterations reached"),{cosets:l,rows:a,words:i}},ie=(t,e)=>{for(let n=0;n<t;n++)if(e[n]===void 0)return!0;return!1};let w=null,k=null,M=null,P=null,V=null,B=0;const ae=(t,e,n,r,l)=>{const a=()=>({cosets:{normal:[],reverse:[]},rows:[],words:[],done:!1,lastDrawn:0}),i=T(r);k=R(t).map(s=>U(i[s],l)),w={...re(t,e,n,new Array(t).fill(1),l),...a()},M=new Map,P=new Set,V=new Set,B=0},fe=(t,e)=>{const{rootVertex:n,rootNormals:r,curvature:l}=t;let a=n;for(let i=0;i<e.length;i++)a=L(a,r[e.charCodeAt(i)-97],l);return a};onmessage=({data:{order:t,curvature:e,rootNormals:n,coxeter:r,stellation:l,rootVertices:a,dimensions:i,uuid:s}})=>{t===0&&ae(i,r,l,a,e);const o=t===0?1:(t+1)*10,u=G(new Array(k.length).fill().map((m,A)=>A)),j=G(new Array(k.length).fill().map((m,A)=>A),3);try{let m=[],A=[],f=[];if(!w.done){w.limit=o,oe(w);for(let p=w.lastDrawn;p<w.words.length;p++){const c=w.words[p];if(c===void 0)continue;const h=[];for(let g=0;g<k.length;g++){const b=k[g],y=fe({rootVertex:b,rootNormals:n,curvature:e},c),_=z(y);if(M.has(_))h.push(M.get(_));else{m.push({vertex:y,word:c,i:p});const S=B+m.length-1;M.set(_,S),h.push(S)}}w.lastDrawn=p+1;for(let g=0;g<u.length;g++){const[b,y]=u[g],[_,S]=[h[b],h[y]],N=b<y?`${_}-${S}`:`${S}-${_}`;P.has(N)||(A.push({start:_,end:S,word:c}),P.add(N))}for(let g=0;g<j.length;g++){const b=j[g].map(_=>h[_]),y=b.sort().join("-");V.has(y)||(f.push({vertices:b,word:c}),V.add(y))}}}B+=m.length,postMessage({vertices:m,edges:A,faces:f,order:t,uuid:s})}catch(m){postMessage({error:m.message,uuid:s})}}})();
