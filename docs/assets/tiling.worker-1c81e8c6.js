(function(){"use strict";const{abs:d,cos:O,sin:ce,cosh:le,sinh:ae,acos:ue,acosh:he,min:fe,max:ge,round:de,sqrt:y,sign:T,floor:we,log:pe,PI:A}=Math,i={coxeter:null,vertices:[],edges:[],words:new Map,rules:new Set,edgeHashes:new Set,vertexHashes:new Set,wordsToConsider:[],rootVertices:null,rootVertex:null,gram:null,mirrors:null},E=e=>{Object.assign(i,e)},W=(e,t)=>{const n=e.length-t.length;return n!==0?Math.sign(n):e<=t?-1:1},B=(e,t)=>{const n=e.length-t.length;return n!==0?Math.sign(n):e<=t?1:-1},F=(e,t)=>{const n=new Map,s=Object.keys(e).sort(t);for(let r=0;r<s.length;r++){const o=s[r],[c,l]=[o,e[o]].sort(t);n.has(l)?n.set(l,[c,n.get(l)].sort()[0]):n.set(l,c)}return n},w=(e,t)=>{if(t.length===0||e.size===0)return t;const n=e._re_cache||new RegExp([...e.keys()].join("|"),"g");let s=t;do t=s,s=t.replace(n,r=>e.get(r));while(s!==t);return t},L=(e,t)=>{const n=new Map(e);for(e=[...e.entries()];e.length>0;){M();const[s,r]=e.pop();n.delete(s);const o=w(n,s),c=w(n,r);let l=!0;if(o===c)l=!1;else{const[f,g]=[o,c].sort(t);g!==s&&f!==r&&(n.set(g,f),e.push([g,f]),l=!1)}l&&n.set(s,r)}return n},I=function(e,t){if(t.length===0)return null;const n=Math.max(0,e.length-t.length);for(let s=n;s<e.length;s++)if(e[s]===t[0]&&e.slice(s+1)===t.slice(1,e.length-s))return{prefix:e.slice(0,s),suffix:t.slice(e.length-s)}},J=function(e,t){if(t.length===0)return null;for(let n=0;n<e.length-t.length+1;n++)if(e.slice(n,n+t.length)===t)return{prefix:e.slice(0,n),suffix:e.slice(n+t.length)}},K=(e,t,n,s)=>{const r=I(e,n);if(r)return{s1:r.prefix+s,s2:t+r.suffix};const o=J(e,n);if(o)return{s1:t,s2:o.prefix+s+o.suffix}},N=(e,t)=>{const n=new Map(e),s=[...e.entries()];for(let r=0;r<s.length;r++){M();const[o,c]=s[r];for(let l=0;l<s.length;l++){if(r===l)continue;const[f,g]=s[l],x=K(o,c,f,g);if(x){const a=w(e,x.s1),C=w(e,x.s2);if(a!==C){const[b,z]=[a,C].sort(t);n.set(z,b)}}}}return n},P=(e,t)=>N(L(e,t),t),$=(e,t)=>{if(e.size!==t.size)return!1;const n=e.keys();for(;;){const{done:s,value:r}=n.next();if(s)return!0;if(e.get(r)!==t.get(r))return!1}},D=(e,t)=>{for(e=F(e,t);;){const n=P(e,t);if($(n,e))return n._re_cache=new RegExp([...n.keys()].join("|"),"g"),n;e=n}};let k,v;const M=()=>{if(performance.now()-k>v)throw new Error("Timeout")},G=e=>{const t=[50,100,250].map(n=>[n,n]).flat();for(let n=0;n<t.length;n++){v=t[n];try{return k=performance.now(),D(e,n%2?W:B)}catch(s){if(s.message!=="Timeout")throw s}}throw new Error("Timeout")},Q=(e,t,n,s,r,o,c)=>G(e===3?{aa:"",bb:"",cc:"",["ab".repeat(t)]:"",["ac".repeat(n)]:"",["bc".repeat(s)]:""}:{aa:"",bb:"",cc:"",dd:"",["ab".repeat(t)]:"",["ac".repeat(n)]:"",["ad".repeat(s)]:"",["bc".repeat(r)]:"",["bd".repeat(o)]:"",["cd".repeat(c)]:""}),U=e=>w(i.rules,e),u={...{p:5,q:2,r:2,s:3,t:2,u:4,x:1,y:0,z:0,w:0,dimensions:4,order:10,segments:32,curve:!0,vertices:!1,edges:!0,light:1.5,thickness:1,projection:"stereographic",controls:"orbit",ambiance:"neon"}},X=(e,t=!1)=>{Object.assign(u,e),t&&window.history.pushState(null,null,"#"+btoa(JSON.stringify(u)))},h={curvature:0,edges:[],vertices:[],ranges:[]},Y=e=>{Object.assign(h,e)},Z=e=>{if(e.length===3)return e[0][0]*e[1][1]*e[2][2]+e[0][1]*e[1][2]*e[2][0]+e[0][2]*e[1][0]*e[2][1]-e[0][2]*e[1][1]*e[2][0]-e[0][1]*e[1][0]*e[2][2]-e[0][0]*e[1][2]*e[2][1];if(e.length===4)return e[0][0]*(e[1][1]*e[2][2]*e[3][3]+e[1][2]*e[2][3]*e[3][1]+e[1][3]*e[2][1]*e[3][2]-e[1][3]*e[2][2]*e[3][1]-e[1][2]*e[2][1]*e[3][3]-e[1][1]*e[2][3]*e[3][2])+e[0][1]*(e[1][0]*e[2][3]*e[3][2]+e[1][2]*e[2][0]*e[3][3]+e[1][3]*e[2][2]*e[3][0]-e[1][3]*e[2][0]*e[3][2]-e[1][2]*e[2][3]*e[3][0]-e[1][0]*e[2][2]*e[3][3])+e[0][2]*(e[1][0]*e[2][1]*e[3][3]+e[1][1]*e[2][3]*e[3][0]+e[1][3]*e[2][0]*e[3][1]-e[1][3]*e[2][1]*e[3][0]-e[1][1]*e[2][0]*e[3][3]-e[1][0]*e[2][3]*e[3][1])+e[0][3]*(e[1][0]*e[2][2]*e[3][1]+e[1][1]*e[2][0]*e[3][2]+e[1][2]*e[2][1]*e[3][0]-e[1][2]*e[2][0]*e[3][1]-e[1][1]*e[2][2]*e[3][0]-e[1][0]*e[2][1]*e[3][2])},q=e=>{const t=Z(e);return d(t)<1e-8?0:T(t)},S=(e,t,n=null)=>{const s=n===null?h.curvature:n;let r=0;for(let o=0;o<e.length;o++)r+=e[o]*t[o]*(o===e.length-1&&s||1);return r},m=(e,t)=>{e=e.slice();const n=2*S(e,t);for(let s=0;s<e.length;s++)e[s]-=n*(h.curvature||s!==e.length-1?t[s]:0);return e},ee=e=>{if(e=e.slice(),h.curvature===0){for(let n=0;n<e.length;n++)e[n]/=e[e.length-1];return e}const t=(h.curvature===-1&&T(e[e.length-1])||1)/y(d(S(e,e)));for(let n=0;n<e.length;n++)e[n]*=t;return e},te=e=>{const t=new Array(u.dimensions).fill().map(()=>new Array(u.dimensions).fill(0));return t[0][0]=1,t[1][0]=e[1][0],t[1][1]=y(1-t[1][0]*t[1][0]),t[2][0]=e[2][0],t[2][1]=(e[2][1]-t[2][0]*t[1][0])/t[1][1],t[2][2]=y(d(1-t[2][0]*t[2][0]-t[2][1]*t[2][1])),u.dimensions===4&&(t[3][0]=e[3][0],t[3][1]=(e[3][1]-t[3][0]*t[1][0])/t[1][1],t[3][2]=(e[3][2]-t[3][0]*t[2][0]-t[3][1]*t[2][1])/t[2][2],t[3][3]=y(d(1-t[3][0]*t[3][0]-t[3][1]*t[3][1]-t[3][2]*t[3][2]))),t[t.length-1][t.length-1]=h.curvature?t[t.length-1][t.length-1]*h.curvature:1,t},j=(e,[t,n,s,r])=>{const o=new Array(u.dimensions);return o[0]=t,o[1]=(n-e[1][0]*o[0])/e[1][1],o[2]=(s-e[2][0]*o[0]-e[2][1]*o[1])/e[2][2],u.dimensions===4&&(o[3]=(r-e[3][0]*o[0]-e[3][1]*o[1]-e[3][2]*o[2])/e[3][3]),o[o.length-1]*=h.curvature||1,ee(o)},ne=(e,t)=>{for(let n=0;n<e.length;n++)if(d(e[n]-t[n])>1e-8)return!1;return!0},se=e=>{let t=i.rootVertex;for(let n=e.length-1;n>=0;n--)t=m(t,i.mirrors[e.charCodeAt(n)-97]);return t},p=e=>{let t="";for(let n=0;n<e.length;n++)t+=e[n].toString().slice(0,6),n<e.length-1&&(t+="|");return t},H=({dimensions:e,p:t,q:n,r:s,s:r,t:o,u:c,x:l,y:f,z:g,w:x})=>{const a={coxeter:e===3?[[-1,t,n],[t,-1,s],[n,s,-1]]:e===4?[[-1,t,n,s],[t,-1,r,o],[n,r,-1,c],[s,o,c,-1]]:null,vertices:[],edges:[],words:new Map,edgeHashes:new Set,vertexHashes:new Set,wordsToConsider:[""],rootVertices:null,rootVertex:null};a.gram=a.coxeter.map(C=>C.map(b=>-O(A/b))),Y({curvature:q(a.gram)}),a.mirrors=te(a.gram),a.rootVertices=a.mirrors.map((C,b)=>j(a.mirrors,new Array(e).fill(0).map((z,ie)=>b===ie?a.curvature||1:0))),a.rootVertex=j(a.mirrors,[l?1:0,f?1:0,g?1:0,x?1:0]),a.words.set("",a.rootVertex),a.rules=Q(e,t,n,s,r,o,c),E(a)},V=(e,t,n)=>{const s=String.fromCharCode(97+t);if(e.slice(-1)===s)return;const r=U(e+s);if(i.words.has(r)){const c=i.words.get(r);_(e,r,n,c);return}const o=se(r);return i.words.set(r,o),R(o,e),_(e,r,n,o),r},re=()=>{let e=[""],t,n=25;R(i.rootVertex,"");do{t=[];for(let s=0;s<i.wordsToConsider.length;s++){const r=i.wordsToConsider[s],o=i.words.get(r);for(let c=0;c<u.dimensions-1;c++){const l=V(r,c,o);l&&t.push(l)}}e.push(...t),i.wordsToConsider=t}while(t.length&&n--);if(n<0)throw new Error("Could not tile fundamental chamber");i.wordsToConsider=e},oe=()=>{let e;e=[];for(let t=0;t<i.wordsToConsider.length;t++){const n=i.wordsToConsider[t],s=i.words.get(n);for(let r=0;r<u.dimensions;r++){const o=V(n,r,s);o&&e.push(o)}}i.wordsToConsider=e};function R(e,t){const n=p(e);i.vertexHashes.has(n)||(i.vertexHashes.add(n),i.vertices.push({vertex:e,word:t}))}function _(e,t,n,s){const r=e.length<t.length||e.length===t.length&&e<t?p(n)+"/"+p(s):p(s)+"/"+p(n);if(!i.edgeHashes.has(r)&&(i.edgeHashes.add(r),!ne(n,s))){const o=n.slice(),c=s.slice();return i.edges.push({start:o,end:c,word:e,newWord:t}),!0}}onmessage=({data:{C:e,order:t,uuid:n}})=>{try{if(X(e),t===0){H(e);try{re()}catch(s){s.message==="Could not tile fundamental chamber"&&H(e)}}else i.vertices=[],i.edges=[],oe();postMessage({R:h,vertices:i.vertices,edges:i.edges,uuid:n})}catch(s){throw s.uuid=n,s}}})();
