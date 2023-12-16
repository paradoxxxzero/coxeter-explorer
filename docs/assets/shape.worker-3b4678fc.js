(function(){"use strict";const m=(n,e)=>n.length!==e.length?!1:n.every((f,l)=>Array.isArray(f)?m(f,e[l]):f===e[l]),U=(n,e)=>{if(e.left===e.right)return!1;for(;e.left!==e.right;){const f=n.normal[e.left_coset][e.rel[e.left]];if(f===4294967295)break;e.left++,e.left_coset=f}for(;e.left!==e.right;){const f=n.reverse[e.right_target][e.rel[e.right]];if(f===4294967295)break;e.right--,e.right_target=f}return e.left===e.right?(n.normal[e.left_coset][e.rel[e.right]]=e.right_target,n.reverse[e.right_target][e.rel[e.right]]=e.left_coset,!0):!1};function v(n){n.cosets||(n.cosets={normal:[],reverse:[]}),n.rows||(n.rows=[]),n.limit||(n.limit=1e3),n.done||(n.done=!1);const{gens:e,subgens:f,rels:l,cosets:i,rows:t,limit:A}=n,g=e.length,h=l.map(r=>[...r].map(a=>e.indexOf(a))),o=f.split("").map(r=>e.indexOf(r));if(i.normal.length===0){i.normal.push(new Uint32Array(g).fill(4294967295)),i.reverse.push(new Uint32Array(g).fill(4294967295));for(let r=0;r<o.length;r++)i.normal[0][o[r]]=0,i.reverse[0][o[r]]=0}for(t.length===0&&t.push(...h.map(r=>({rel:r,left:0,right:r.length-1,left_coset:0,right_target:0})));t.length&&i.normal.length<A;){for(;;){let s=!1;for(let c=t.length-1;c>=0;c--)U(i,t[c])&&(s=!0,t[c]=t[t.length-1],t.pop());if(!s)break}const r=i.normal.length;let a=!1;for(let s=0;s<i.normal.length;s++){const c=i.normal[s];for(let d=0;d<c.length;d++){let _=c[d];if(_===4294967295){_=i.normal.length,i.normal.push(new Uint32Array(g).fill(4294967295)),i.reverse.push(new Uint32Array(g).fill(4294967295)),i.normal[s][d]=_,i.reverse[_][d]=s,t.push(...h.map(N=>({rel:N,left:0,right:N.length-1,left_coset:r,right_target:r}))),a=!0;break}}if(a)break}}n.done=!t.length}const u=(n,e,f,l=1e3)=>{const i={gens:n,subgens:e,rels:f,limit:l};return v(i),i.done?i.cosets.normal.length:NaN};typeof window<"u"&&(window.bench=()=>{const n=performance.now(),e=u("abcdefgh","abdefgh",["aa","bb","cc","dd","ee","ff","gg","hh","ababab","acac","bcbcbc","adad","bdbd","cdcdcd","aeae","bebe","cecece","dede","afaf","bfbf","cfcf","dfdf","efefef","agag","bgbg","cgcg","dgdg","egeg","fgfgfg","ahah","bhbh","chch","dhdh","eheh","fhfh","ghghgh"],5e3);console.info(e,performance.now()-n)}),onmessage=({data:{shape:n,spaceType:e,limit:f}})=>{try{const l={},i=t=>{if(t!=null&&t.new){l[t.dimensions]||(l[t.dimensions]={dimensions:t.dimensions,count:0,detail:[]});let g=e.eigens.values.some(o=>o<=0)?1/0:n.dimensions===t.dimensions?1:isNaN(l[t.dimensions].count)?NaN:u(n.gens,t.subgens,n.rels,2**f);const h=l[t.dimensions].detail.find(({coxeter:o,stellation:r,mirrors:a})=>m(o,t.coxeter)&&m(r,t.stellation)&&m(a,t.mirrors));h?h.count+=g:l[t.dimensions].detail.push({count:g,...t}),l[t.dimensions].count+=g}t.children.forEach(i)};n.children.forEach(i),postMessage(l)}catch(l){postMessage({error:l.message})}}})();
