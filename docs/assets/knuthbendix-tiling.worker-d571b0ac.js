(function(){"use strict";const D=(e,n,t)=>{let s=0;for(let r=0;r<e.length;r++)s+=e[r]*n[r]*(r===e.length-1&&t||1);return s},G=(e,n,t)=>{e=e.slice();const s=2*D(e,n,t);for(let r=0;r<e.length;r++)e[r]-=s*(t||r!==e.length-1?n[r]:0);return e},M=(e,n,t,s)=>{const r=x/e,l=x/n,o=x/t;return z(x/J(-b(r)*b(o)+k(r)*k(o)*((b(l)-b(s*r)*b(o))/(k(s*r)*k(o)))))},{abs:pe,cos:b,sin:k,tan:me,cosh:we,sinh:de,acos:J,acosh:be,atan:ye,min:Me,max:ke,round:z,sqrt:xe,sign:Ce,ceil:Se,floor:je,log:Be,exp:I,PI:x}=Math,f=e=>String.fromCharCode(97+e),Q=(e,n,t,s,r)=>{const l=[];for(let o=0;o<e;o++)l.push(f(o).repeat(2));for(let o=1;o<e;o++)for(let c=0;c<o;c++)n[o][c]<1/0&&l.push((f(c)+f(o)).repeat(n[o][c]));if(t&&!t.every(o=>o.every(c=>c===1))&&r>0){if(e===4&&(t[0][1]>1||t[2][3]>1)&&n[0][1]>3&&n[2][3]>3)t[0][1]>1&&l.push("abcdcb".repeat(M(n[0][1],n[1][2],n[0][2],t[0][1]))),t[2][3]>1&&l.push("abcdcb".repeat(M(n[2][3],n[1][2],n[1][3],t[2][3])));else for(let o=1;o<e;o++)for(let c=0;c<o;c++)if(t[c][o]>1){if(c+2<e){const i=M(n[c][o],n[c+1][o+1],n[c][o+1],t[c][o]);l.push((f(c)+f(o)+f(c+2)+f(o)).repeat(i))}if(c-1>=0){const i=M(n[c][o],n[c-1][o-1],n[c-1][o],t[c][o]);l.push((f(c)+f(o)+f(c)+f(c-1)).repeat(i))}}}return l},U=(e,n,t,s,r)=>Object.fromEntries(Q(e,n,null,null,r).map(l=>[l,""])),V=(e,n)=>{const t=e.length-n.length;return t!==0?Math.sign(t):e<=n?-1:1},X=(e,n)=>{const t=e.length-n.length;return t!==0?Math.sign(t):e<=n?1:-1},Y=(e,n)=>{const t=new Map,s=Object.keys(e).sort(n);for(let r=0;r<s.length;r++){const l=s[r],[o,c]=[l,e[l]].sort(n);t.has(c)?t.set(c,[o,t.get(c)].sort()[0]):t.set(c,o)}return t},y=(e,n)=>{if(n.length===0||e.size===0)return n;const t=e._re_cache||new RegExp([...e.keys()].join("|"),"g");let s=n;do n=s,s=n.replace(t,r=>e.get(r));while(s!==n);return n},Z=(e,n)=>{const t=new Map(e);for(e=[...e.entries()];e.length>0;){F();const[s,r]=e.pop();t.delete(s);const l=y(t,s),o=y(t,r);let c=!0;if(l===o)c=!1;else{const[i,h]=[l,o].sort(n);h!==s&&i!==r&&(t.set(h,i),e.push([h,i]),c=!1)}c&&t.set(s,r)}return t},ee=function(e,n){if(n.length===0)return null;const t=Math.max(0,e.length-n.length);for(let s=t;s<e.length;s++)if(e[s]===n[0]&&e.slice(s+1)===n.slice(1,e.length-s))return{prefix:e.slice(0,s),suffix:n.slice(e.length-s)}},te=function(e,n){if(n.length===0)return null;for(let t=0;t<e.length-n.length+1;t++)if(e.slice(t,t+n.length)===n)return{prefix:e.slice(0,t),suffix:e.slice(t+n.length)}},ne=(e,n,t,s)=>{const r=ee(e,t);if(r)return{s1:r.prefix+s,s2:n+r.suffix};const l=te(e,t);if(l)return{s1:n,s2:l.prefix+s+l.suffix}},se=(e,n)=>{const t=new Map(e),s=[...e.entries()];for(let r=0;r<s.length;r++){F();const[l,o]=s[r];for(let c=0;c<s.length;c++){if(r===c)continue;const[i,h]=s[c],a=ne(l,o,i,h);if(a){const u=y(e,a.s1),R=y(e,a.s2);if(u!==R){const[v,A]=[u,R].sort(n);t.set(A,v)}}}}return t},re=(e,n)=>se(Z(e,n),n),oe=(e,n)=>{if(e.size!==n.size)return!1;const t=e.keys();for(;;){const{done:s,value:r}=t.next();if(s)return!0;if(e.get(r)!==n.get(r))return!1}},ce=(e,n)=>{for(e=Y(e,n);;){const t=re(e,n);if(oe(t,e))return t._re_cache=new RegExp([...t.keys()].join("|"),"g"),t;e=t}};let O,_;const F=()=>{if(performance.now()-O>_)throw new Error("Timeout")},le=(e,n)=>{const t=[50,100,I(n)*4,I(n)*10].map(s=>[s,s]).flat();for(let s=0;s<t.length;s++){_=t[s];try{return O=performance.now(),ce(e,s%2?V:X)}catch(r){if(r.message!=="Timeout")throw r}}throw new Error("Timeout")},C=(e,n)=>y(e,n);let S=new Map,E=new Set,p=[],j=[],W=[],$=0,m=new Map,w=[],B=null,d=!1,g=null;const H=(e,n,t)=>{$=0,p=[],j=[],W=[],S.clear(),E.clear(),m.clear(),m.set("",K("",e)),w=[""],B=t,g=n;const s=B.map((r,l)=>r==="s"?f(l):"").join("");d=s.length>0?new RegExp(`[^${s}]`,"g"):null},P=new ArrayBuffer(8),ie=new Float64Array(P),q=new Int32Array(P);function fe(e){return~~e===e?~~e:(ie[0]=e,q[0]^q[1])}const L=10**4,he=e=>{let n="";for(let t=0;t<e.length;t++)n+=fe(z(e[t]*L)/L).toString(),t<e.length-1&&(n+="|");return n},ue=(e,n)=>{const{rootVertex:t,mirrorsPlanes:s,curvature:r}=e;let l=t;for(let o=n.length-1;o>=0;o--)l=G(l,s[n.charCodeAt(o)-97],r);return l};function K(e,n){const t=he(n);if(S.has(t))return S.get(t);{const s=$+p.length;return S.set(t,s),p.push({vertex:n,word:e}),s}}function N(e,n){const t=m.get(e),s=m.get(n);if(t===s)return;const r=t>s?`${s}-${t}`:`${t}-${s}`;if(!E.has(r))return E.add(r),j.push({start:t,end:s,word:e,newWord:n}),!0}const T=(e,n,t)=>{if(n===t)return;if(m.has(t)){N(n,t);return}const s=ue(e,t),r=K(t,s);return m.set(t,r),N(n,t),t},ae=e=>{const{dimensions:n}=e;let t;t=[];for(let s=0;s<w.length;s++){const r=w[s];for(let l=0;l<n;l++){const o=f(l),c=C(g,r+o);if(d&&c.replace(d,"").length%2)for(let i=0;i<B.length;i++){const h=f(i),a=C(g,c+h);if(a.replace(d,"").length%2)for(let u=0;u<B.length;u++){const R=f(u),v=C(g,a+R);if(v.replace(d,"").length%2)continue;const A=T(e,r,v);A&&t.push(A)}else{const u=T(e,r,a);u&&t.push(u)}}else{const i=T(e,r,c);i&&t.push(i)}}}return t},ge=e=>{const{dimensions:n}=e;let t=[""],s;const r=1e4;let l=w;do{s=[];for(let o=0;o<l.length;o++){const c=l[o];for(let i=0;i<n-1;i++){const h=f(i),a=C(g,c+h),u=T(e,c,a);u&&s.push(u)}}t=t.concat(s),l=s}while(s.length&&t.length<=r);if(t.length>r)throw new Error("Could not tile fundamental chamber");return t};onmessage=({data:{order:e,curvature:n,coxeter:t,stellation:s,mirrors:r,mirrorsPlanes:l,rootVertex:o,dimensions:c,uuid:i}})=>{try{let h=!1;if(e===0){const a=U(c,t,s,r,n);try{g=le(a,c)}catch{g=new Map(Object.entries(a))}if(H(o,g,r),d)h=!0;else try{w=ge({curvature:n,mirrorsPlanes:l,rootVertex:o,dimensions:c})}catch(u){h=!0,H(o,g,r),console.warn(u)}}(e>0||h)&&(w=ae({curvature:n,mirrorsPlanes:l,rootVertex:o,dimensions:c})),postMessage({vertices:p,edges:j,faces:W,order:e,uuid:i}),$+=p.length,p=[],j=[],W=[]}catch(h){postMessage({error:h.message,uuid:i})}}})();