(function(){"use strict";const{abs:I,cos:fe,sin:he,cosh:ue,sinh:ae,acos:ge,acosh:pe,tan:me,min:we,max:de,round:P,sqrt:xe,sign:ye,floor:be,log:ke,exp:E,PI:Ce}=Math,g=e=>String.fromCharCode(97+e),q=(e,n,t,r)=>{const s=[];for(let o=0;o<e;o++)s.push(g(o).repeat(2));for(let o=1;o<e;o++)for(let l=0;l<o;l++)s.push((g(l)+g(o)).repeat(n[o][l]));return s},L=(e,n,t,r)=>Object.fromEntries(q(e,n).map(s=>[s,""])),K=(e,n)=>{const t=e.length-n.length;return t!==0?Math.sign(t):e<=n?-1:1},N=(e,n)=>{const t=e.length-n.length;return t!==0?Math.sign(t):e<=n?1:-1},D=(e,n)=>{const t=new Map,r=Object.keys(e).sort(n);for(let s=0;s<r.length;s++){const o=r[s],[l,c]=[o,e[o]].sort(n);t.has(c)?t.set(c,[l,t.get(c)].sort()[0]):t.set(c,l)}return t},x=(e,n)=>{if(n.length===0||e.size===0)return n;const t=e._re_cache||new RegExp([...e.keys()].join("|"),"g");let r=n;do n=r,r=n.replace(t,s=>e.get(s));while(r!==n);return n},G=(e,n)=>{const t=new Map(e);for(e=[...e.entries()];e.length>0;){H();const[r,s]=e.pop();t.delete(r);const o=x(t,r),l=x(t,s);let c=!0;if(o===l)c=!1;else{const[i,u]=[o,l].sort(n);u!==r&&i!==s&&(t.set(u,i),e.push([u,i]),c=!1)}c&&t.set(r,s)}return t},J=function(e,n){if(n.length===0)return null;const t=Math.max(0,e.length-n.length);for(let r=t;r<e.length;r++)if(e[r]===n[0]&&e.slice(r+1)===n.slice(1,e.length-r))return{prefix:e.slice(0,r),suffix:n.slice(e.length-r)}},Q=function(e,n){if(n.length===0)return null;for(let t=0;t<e.length-n.length+1;t++)if(e.slice(t,t+n.length)===n)return{prefix:e.slice(0,t),suffix:e.slice(t+n.length)}},U=(e,n,t,r)=>{const s=J(e,t);if(s)return{s1:s.prefix+r,s2:n+s.suffix};const o=Q(e,t);if(o)return{s1:n,s2:o.prefix+r+o.suffix}},X=(e,n)=>{const t=new Map(e),r=[...e.entries()];for(let s=0;s<r.length;s++){H();const[o,l]=r[s];for(let c=0;c<r.length;c++){if(s===c)continue;const[i,u]=r[c],f=U(o,l,i,u);if(f){const h=x(e,f.s1),m=x(e,f.s2);if(h!==m){const[S,j]=[h,m].sort(n);t.set(j,S)}}}}return t},Y=(e,n)=>X(G(e,n),n),Z=(e,n)=>{if(e.size!==n.size)return!1;const t=e.keys();for(;;){const{done:r,value:s}=t.next();if(r)return!0;if(e.get(s)!==n.get(s))return!1}},V=(e,n)=>{for(e=D(e,n);;){const t=Y(e,n);if(Z(t,e))return t._re_cache=new RegExp([...t.keys()].join("|"),"g"),t;e=t}};let W,A;const H=()=>{if(performance.now()-W>A)throw new Error("Timeout")},ee=(e,n)=>{const t=[50,100,E(n)*4,E(n)*10].map(r=>[r,r]).flat();for(let r=0;r<t.length;r++){A=t[r];try{return W=performance.now(),V(e,r%2?K:N)}catch(s){if(s.message!=="Timeout")throw s}}throw new Error("Timeout")},y=(e,n)=>x(e,n),te=(e,n,t)=>{let r=0;for(let s=0;s<e.length;s++)r+=e[s]*n[s]*(s===e.length-1&&t||1);return r},ne=(e,n,t)=>{e=e.slice();const r=2*te(e,n,t);for(let s=0;s<e.length;s++)e[s]-=r*(t||s!==e.length-1?n[s]:0);return e};let T=new Set,v=new Set,b=[],k=[],p=new Map,w=[],C=null,d=!1,a=null;const $=(e,n,t)=>{T.clear(),v.clear(),p.clear(),p.set("",e),b=[],k=[],w=[""],C=t,a=n;const r=C.map((s,o)=>s==="s"?g(o):"").join("");d=r.length>0?new RegExp(`[^${r}]`,"g"):null},re=(e,n)=>{for(let t=0;t<e.length;t++)if(I(e[t]-n[t])>1e-8)return!1;return!0},z=new ArrayBuffer(8),se=new Float64Array(z),_=new Int32Array(z);function oe(e){return~~e===e?~~e:(se[0]=e,_[0]^_[1])}const O=10**4,B=e=>{let n="";for(let t=0;t<e.length;t++)n+=oe(P(e[t]*O)/O).toString(),t<e.length-1&&(n+="|");return n},le=(e,n)=>{const{rootVertex:t,mirrorsPlanes:r,curvature:s}=e;let o=t;for(let l=n.length-1;l>=0;l--)o=ne(o,r[n.charCodeAt(l)-97],s);return o};function R(e){const n=p.get(e),t=B(n);if(!T.has(t))return T.add(t),b.push({vertex:n,word:e}),!0}function F(e,n){const t=p.get(e),r=p.get(n);if(t===r)return;const s=B(t),o=B(r);if(s===o)return;const l=s>o?`${o}/${s}`:`${s}/${o}`;if(!v.has(l)&&(v.add(l),!re(t,r))){const c=t.slice(),i=r.slice();return k.push({start:c,end:i,word:e,newWord:n}),!0}}const M=(e,n,t)=>{if(n!==t){if(p.has(t)){F(n,t);return}return p.set(t,le(e,t)),R(t),F(n,t),t}},ce=e=>{const{dimensions:n}=e;let t;t=[];for(let r=0;r<w.length;r++){const s=w[r];for(let o=0;o<n;o++){const l=g(o),c=y(a,s+l);if(d&&c.replace(d,"").length%2)for(let i=0;i<C.length;i++){const u=g(i),f=y(a,c+u);if(f.replace(d,"").length%2)for(let h=0;h<C.length;h++){const m=g(h),S=y(a,f+m);if(S.replace(d,"").length%2)continue;const j=M(e,s,S);j&&t.push(j)}else{const h=M(e,s,f);h&&t.push(h)}}else{const i=M(e,s,c);i&&t.push(i)}}}return t},ie=e=>{const{dimensions:n}=e;let t=[""],r;const s=1e4;let o=w;do{r=[];for(let l=0;l<o.length;l++){const c=o[l];for(let i=0;i<n-1;i++){const u=g(i),f=y(a,c+u),h=M(e,c,f);h&&r.push(h)}}t=t.concat(r),o=r}while(r.length&&t.length<=s);if(t.length>s)throw new Error("Could not tile fundamental chamber");return t};onmessage=({data:{order:e,curvature:n,coxeter:t,stellated:r,stellation:s,mirrors:o,mirrorsPlanes:l,rootVertex:c,dimensions:i,uuid:u}})=>{try{let f=!1;if(e===0){const h=L(i,t,r?s:null,o);try{a=ee(h,i)}catch{a=new Map(Object.entries(h))}if($(c,a,o),R(""),d)f=!0;else try{w=ie({curvature:n,mirrorsPlanes:l,rootVertex:c,dimensions:i})}catch(m){f=!0,$(c,a,o),R(""),console.warn(m)}}(e>0||f)&&(w=ce({curvature:n,mirrorsPlanes:l,rootVertex:c,dimensions:i})),postMessage({vertices:b,edges:k,uuid:u}),b=[],k=[]}catch(f){postMessage({error:f.message,uuid:u})}}})();
