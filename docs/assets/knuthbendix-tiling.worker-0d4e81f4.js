(function(){"use strict";const{abs:E,cos:ct,sin:lt,cosh:it,sinh:ft,acos:ht,acosh:at,tan:ut,min:gt,max:pt,round:_,sqrt:wt,sign:mt,floor:dt,log:xt,exp:C,PI:kt}=Math,$=(t,e)=>{const n=t.length-e.length;return n!==0?Math.sign(n):t<=e?-1:1},F=(t,e)=>{const n=t.length-e.length;return n!==0?Math.sign(n):t<=e?1:-1},I=(t,e)=>{const n=new Map,r=Object.keys(t).sort(e);for(let s=0;s<r.length;s++){const o=r[s],[c,l]=[o,t[o]].sort(e);n.has(l)?n.set(l,[c,n.get(l)].sort()[0]):n.set(l,c)}return n},p=(t,e)=>{if(e.length===0||t.size===0)return e;const n=t._re_cache||new RegExp([...t.keys()].join("|"),"g");let r=e;do e=r,r=e.replace(n,s=>t.get(s));while(r!==e);return e},O=(t,e)=>{const n=new Map(t);for(t=[...t.entries()];t.length>0;){v();const[r,s]=t.pop();n.delete(r);const o=p(n,r),c=p(n,s);let l=!0;if(o===c)l=!1;else{const[i,f]=[o,c].sort(e);f!==r&&i!==s&&(n.set(f,i),t.push([f,i]),l=!1)}l&&n.set(r,s)}return n},q=function(t,e){if(e.length===0)return null;const n=Math.max(0,t.length-e.length);for(let r=n;r<t.length;r++)if(t[r]===e[0]&&t.slice(r+1)===e.slice(1,t.length-r))return{prefix:t.slice(0,r),suffix:e.slice(t.length-r)}},L=function(t,e){if(e.length===0)return null;for(let n=0;n<t.length-e.length+1;n++)if(t.slice(n,n+e.length)===e)return{prefix:t.slice(0,n),suffix:t.slice(n+e.length)}},K=(t,e,n,r)=>{const s=q(t,n);if(s)return{s1:s.prefix+r,s2:e+s.suffix};const o=L(t,n);if(o)return{s1:e,s2:o.prefix+r+o.suffix}},N=(t,e)=>{const n=new Map(t),r=[...t.entries()];for(let s=0;s<r.length;s++){v();const[o,c]=r[s];for(let l=0;l<r.length;l++){if(s===l)continue;const[i,f]=r[l],a=K(o,c,i,f);if(a){const w=p(t,a.s1),z=p(t,a.s2);if(w!==z){const[st,ot]=[w,z].sort(e);n.set(ot,st)}}}}return n},P=(t,e)=>N(O(t,e),e),D=(t,e)=>{if(t.size!==e.size)return!1;const n=t.keys();for(;;){const{done:r,value:s}=n.next();if(r)return!0;if(t.get(s)!==e.get(s))return!1}},G=(t,e)=>{for(t=I(t,e);;){const n=P(t,e);if(D(n,t))return n._re_cache=new RegExp([...n.keys()].join("|"),"g"),n;t=n}};let B,j;const v=()=>{if(performance.now()-B>j)throw new Error("Timeout")},J=(t,e)=>{const n=[50,100,C(e)*4,C(e)*10].map(r=>[r,r]).flat();for(let r=0;r<n.length;r++){j=n[r];try{return B=performance.now(),G(t,r%2?$:F)}catch(s){if(s.message!=="Timeout")throw s}}throw new Error("Timeout")},x=t=>String.fromCharCode(97+t),Q=(t,e)=>{const n={};for(let r=0;r<t;r++)n[x(r).repeat(2)]="";for(let r=1;r<t;r++)for(let s=0;s<r;s++)n[(x(s)+x(r)).repeat(e[r][s])]="";return n},U=(t,e)=>p(t,e),X=(t,e,n)=>{let r=0;for(let s=0;s<t.length;s++)r+=t[s]*e[s]*(s===t.length-1&&n||1);return r},Y=(t,e,n)=>{t=t.slice();const r=2*X(t,e,n);for(let s=0;s<t.length;s++)t[s]-=r*(n||s!==t.length-1?e[s]:0);return t};let k=new Set,y=new Set,m=[],d=[],h=new Map,u=[],g=null;const S=(t,e)=>{k.clear(),y.clear(),h.clear(),h.set("",t),m=[],d=[],u=[""],g=e},Z=(t,e)=>{for(let n=0;n<t.length;n++)if(E(t[n]-e[n])>1e-8)return!1;return!0},R=new ArrayBuffer(8),V=new Float64Array(R),W=new Int32Array(R);function tt(t){return~~t===t?~~t:(V[0]=t,W[0]^W[1])}const b=10**4,M=t=>{let e="";for(let n=0;n<t.length;n++)e+=tt(_(t[n]*b)/b).toString(),n<t.length-1&&(e+="|");return e},et=(t,e)=>{const{rootVertex:n,mirrorsPlanes:r,curvature:s}=t;let o=n;for(let c=e.length-1;c>=0;c--)o=Y(o,r[e.charCodeAt(c)-97],s);return o};function A(t,e){const n=M(t);if(!k.has(n))return k.add(n),m.push({vertex:t,word:e}),!0}function H(t,e,n){const r=M(e),s=M(n);if(r===s)return;const o=r>s?`${s}/${r}`:`${r}/${s}`;if(!y.has(o)&&(y.add(o),!Z(e,n))){const c=e.slice(),l=n.slice();return d.push({start:c,end:l,word:t}),!0}}const T=(t,e,n,r)=>{const s=String.fromCharCode(97+n);if(e.slice(-1)===s)return;let o=e+s;if(o=U(g,o),h.has(o)){const l=h.get(o);H(e,r,l);return}const c=et(t,o);return h.set(o,c),A(c,o)&&H(e,r,c),o},nt=t=>{const{rootVertex:e}=t;let n=[""],r;const s=1e4,o=e.length;A(e,"");let c=u;do{r=[];for(let l=0;l<c.length;l++){const i=c[l],f=h.get(i);for(let a=0;a<o-1;a++){const w=T(t,i,a,f);w&&r.push(w)}}n=n.concat(r),c=r}while(r.length&&n.length<=s);if(n.length>s)throw new Error("Could not tile fundamental chamber");return n},rt=t=>{let e;e=[];for(let n=0;n<u.length;n++){const r=u[n],s=h.get(r);for(let o=0;o<s.length;o++){const c=T(t,r,o,s);c&&e.push(c)}}return e};onmessage=({data:{order:t,curvature:e,coxeter:n,mirrorsPlanes:r,rootVertex:s,dimensions:o,uuid:c}})=>{try{let l=!1;if(t===0){const i=Q(o,n);try{g=J(i,o)}catch{g=new Map(Object.entries(i))}S(s,g);try{u=nt({curvature:e,mirrorsPlanes:r,rootVertex:s,dimensions:o})}catch(f){l=!0,S(s,g),console.warn(f)}}(t>0||l)&&(u=rt({curvature:e,mirrorsPlanes:r,rootVertex:s,dimensions:o})),postMessage({vertices:m,edges:d,uuid:c}),m=[],d=[]}catch(l){postMessage({error:l.message,uuid:c})}}})();