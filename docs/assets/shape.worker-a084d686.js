(function(){"use strict";const w=(n,e)=>n.length!==e.length?!1:n.every((t,i)=>Array.isArray(t)?w(t,e[i]):t===e[i]),x=n=>{const e=n.toUpperCase();return n===e?n.toLowerCase():e},s=(n,e)=>{let t=e;for(;n.quotientMap[t];)t=n.quotientMap[t];return t},q=(n,e,t)=>{const i=e,o=[[e,t]];for(;o.length>0;)if([e,t]=o.pop(),e=s(n,e),t=s(n,t),e!==t){n.quotientMap[t]=e,n.seen.has(t)&&!n.seen.has(e)&&n.seen.add(e);const c=n.cosets.get(e),l=n.cosets.get(t);n.cosets.delete(t);for(const[u,f]of l)c.has(u)?o.push([c.get(u),f]):c.set(u,f)}return s(n,i)},k=(n,e,t,i)=>{e=s(n,e);const o=n.cosets.get(e);o.has(t)?q(n,o.get(t),i):o.set(t,i)},M=(n,e,t,i)=>{e=s(n,e);let o;const c=n.cosets.get(e);return c.has(t)?(o=s(n,c.get(t)),i!==void 0&&o!==i&&q(n,i,o)):(i?o=i:(o=n.nextVertex++,n.cosets.set(o,new Map),n.unvisited.push(o)),k(n,e,t,o),k(n,o,x(t),e)),o},E=function(n,e,t){let i=t;for(let o=e.length-1;o>0;o--)i=M(n,i,e[o]);M(n,i,e[0],t)},A=n=>{if(!n.cosets){n.unvisited=[1],n.cosets=new Map([[1,new Map]]),n.nextVertex=2,n.seen=new Set,n.quotientMap={};for(let e=0;e<n.subgens.length;e++)E(n,n.subgens[e],1)}n.limit=n.limit||1e3,n.done=!1;for(let e=0;e<n.limit;e++){let t=null;for(;n.unvisited.length>0;){const i=s(n,n.unvisited.shift());if(!n.seen.has(i)){n.seen.add(i),t=i;break}}if(t===null){n.done=!0;break}for(let i=0;i<n.gens.length;i++)M(n,t,n.gens[i].toUpperCase()),M(n,t,n.gens[i]);for(let i=0;i<n.rels.length;i++)E(n,n.rels[i],t)}},S=n=>(A(n),n.cosets.size);let v;onmessage=({data:{shape:n,spaceType:e,first:t}})=>{try{const i={};let o=!0;t&&(v=new Map);const c=l=>{if(l!=null&&l.new){i[l.dimensions]||(i[l.dimensions]={dimensions:l.dimensions,count:0,detail:[],done:!0});const u=e.eigens.values;let f,d=!0;if(u.some(g=>g<=0))f=1/0;else if(n.dimensions===l.dimensions)f=1;else{v.has(l.key)||v.set(l.key,{...n,subgens:l.quotient,limit:100});const g=v.get(l.key);g.done||(g.count=S(g),d=g.done),f=g.count}const y=i[l.dimensions].detail.find(({coxeter:g,stellation:U,mirrors:V})=>w(g,l.coxeter)&&w(U,l.stellation)&&w(V,l.mirrors));y?(y.done=y.done&&d,y.count+=f):i[l.dimensions].detail.push({...l,count:f,done:d}),i[l.dimensions].count+=f,i[l.dimensions].done=i[l.dimensions].done&&d,o=o&&d}l.children.forEach(c)};n.children.forEach(c),postMessage({visit:i,done:o})}catch(i){postMessage({error:i.message})}}})();
