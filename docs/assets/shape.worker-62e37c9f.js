(function(){"use strict";const T=e=>e!==""&&e!=="x",xe=e=>e==="m"||e==="b"||e==="c"||e==="d",ye=e=>e==="c"||e==="d",q=e=>e==="s"||e==="b"||e==="d",I=(e,t=null,n=1,s=!1)=>{if(t===null&&(t=e,e=0),n===0)throw new Error("Step cannot be zero.");if(t<e&&n>0||t>e&&n<0){if(s)return[];n=-n}return new Array(Math.ceil((t-e)/n)).fill().map((f,d)=>e+d*n)},$=(e,t)=>e.length!==t.length?!1:e.every((n,s)=>Array.isArray(n)?$(n,t[s]):n===t[s]),R=(e,t)=>{let n=0;for(let s=0;s<e.length;s++)n+=e[s]*t[s];return n},D=(e,t)=>{const n=[];for(let s=0;s<e.length;s++)n[s]=e[s]+t[s];return n},ke=(e,t)=>{const n=[];for(let s=0;s<e.length;s++)n[s]=e[s]-t[s];return n},m=(e,t)=>{const n=[];for(let s=0;s<e.length;s++)n[s]=e[s]*t;return n},ze=e=>{const t=[];for(let n=0;n<e[0].length;n++){t.push([]);for(let s=0;s<e.length;s++)t[n].push(e[s][n])}return t},H=(e,t)=>{const n=new Array(e.length);for(let s=0;s<e.length;s++){let f=0;for(let d=0;d<e[0].length;d++)f+=e[s][d]*t[d];n[s]=f}return n},Se=e=>{const t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=new Array(e.length).fill(0),t[n][n]=e[n];return t},P=e=>{const t=new Array(e).fill(1);return Se(t)},X=(e,t)=>e.filter((n,s)=>!t.includes(s)),oe=(e,t)=>X(e,t).map(n=>X(n,t)),re=(e,t,n)=>ke(e,m(H(Ce(n),t),2*R(H(Ve(n),e),t))),ie=(e,t)=>t.some((n,s)=>n.some((f,d)=>s===d&&f===0))?m(e,1/e[e.length-1]):m(e,-1/Ae(ce(R(H(t,e),e)))),Ve=e=>e.map((t,n)=>t.map((s,f)=>n===f&&s===0?1:s)),Ce=e=>e.map(t=>t.map(n=>ce(n))),L=(e,t,n,s)=>{const f=G/e,d=G/t,g=G/n;return le(G/Me(-N(f)*N(g)+Q(f)*Q(g)*((N(d)-N(s*f)*N(g))/(Q(s*f)*Q(g)))))},{abs:ce,cos:N,sin:Q,tan:Qe,cosh:Ge,sinh:Je,acos:Me,acosh:Ke,atan:Xe,atan2:Ye,min:Ze,max:pe,round:le,sqrt:Ae,cbrt:et,sign:tt,ceil:nt,floor:st,log:ot,exp:rt,hypot:it,pow:We,PI:G}=Math,Oe=(...e)=>e.reduce((t,n)=>t+n,0)/e.length,fe=new ArrayBuffer(8),qe=new Float64Array(fe),ue=new Int32Array(fe);function Ee(e){return~~e===e?~~e:(qe[0]=e,ue[0]^ue[1])}const ge=10**4,Y=e=>{let t="";for(let n=0;n<e.length;n++)t+=Ee(le(e[n]*ge)/ge).toString(),n<e.length-1&&(t+="|");return t},M=e=>String.fromCharCode(97+e),de=e=>e.charCodeAt(0)-97,Z=(e,t="",n=[])=>{const s=[];for(let f=0;f<e.length;f++){const[d,g]=e[f],v=e.filter((c,w)=>w!==f);if(n.length){const c=n[n.length-1];if(g.some(w=>w===c)){const w=g[1]===c,i=w?d.toUpperCase():d,l=w?[...g].reverse():g;if(l[1]===n[0])return[t+i];v.length&&s.push(...Z(v,t+i,n.concat(l.slice(1))))}}else s.push(...Z(v,d,g))}return s},U=(e,t,n,s,f,d=[])=>{let g="";const v=s.map((r,o)=>d.includes(o)||r?"":M(o)).join(""),c={},w=[];for(let r=0;r<e;r++)if(!d.includes(r)){if(!q(s[r])){const o=M(r);g+=o,c[o]=[r],w.push(o.repeat(2))}for(let o=r+1;o<e;o++){if(d.includes(o))continue;const u=t[r][o];if(q(s[r])&&q(s[o])){const h=M((r+1)*e+o);g+=h,c[h]=[r,o],w.push(h.repeat(u))}else if(q(s[r])&&!q(s[o])){const h=M((r+1)*e+o);g+=h,c[h]=[r,o,r],w.push(h.repeat(2)),w.push((h+M(o)).repeat(u%2===0?u/2:u))}else if(!q(s[r])&&q(s[o])){const h=M((r+1)*e+o);g+=h,c[h]=[o,r,o],w.push(h.repeat(2)),w.push((h+M(r)).repeat(u%2===0?u/2:u))}else u>1&&w.push((M(r)+M(o)).repeat(u))}}const i=Object.entries(c).filter(([r,o])=>o.length===3),l=Object.entries(c).filter(([r,o])=>o.length===2);if(l.length>1){const r=Z(l);w.push(...r.map(o=>o.split("").reverse().join("")))}if(i.length>1)for(let r=0;r<i.length;r++){const[o,u]=i[r];for(let h=r+1;h<i.length;h++){const[b,k]=i[h];if(u[1]===k[1]){const y=l.find(([a,S])=>S[0]===u[0]&&S[1]===k[0]);if(y){const a=y[0];w.push(o.toUpperCase()+a.toUpperCase()+b+a)}}else if(u[0]===k[0]){const y=t[u[1]][k[1]];y>1&&w.push((o+b).repeat(y))}}}if(!s.some(r=>q(r))&&!n.every(r=>r.every(o=>o===1))&&f.curvature>0){if(e===4&&n[0][1]>1!=n[2][3]>1&&t[0][1]>3&&t[2][3]>3)[0,1,2,3].some(r=>d.includes(r))||(n[0][1]>1&&w.push("abcdcb".repeat(L(t[0][1],t[1][2],t[0][2],n[0][1]))),n[2][3]>1&&w.push("abcdcb".repeat(L(t[2][3],t[1][2],t[1][3],n[2][3]))));else for(let r=1;r<e;r++)for(let o=0;o<r;o++)if(n[o][r]>1){if(o+2<e){const u=L(t[o+1][r+1],t[o][r],t[o][r+1],n[o][r]);u&&!d.includes(o)&&!d.includes(r)&&!d.includes(o+2)&&w.push((M(o)+M(r)+M(o+2)+M(r)).repeat(u))}if(o-1>=0){const u=L(t[o-1][r-1],t[o][r],t[o-1][r],n[o][r]);u&&!d.includes(o)&&!d.includes(r)&&!d.includes(o-1)&&w.push((M(o)+M(r)+M(o)+M(o-1)).repeat(u))}}}return{gens:g,subgens:v,rels:w,transforms:c}},me=e=>{const t=e.toUpperCase();return e===t?e.toLowerCase():t},O=(e,t)=>{let n=t,s=0;for(;e.quotientMap[n];)s++,n=e.quotientMap[n];return s>1&&(e.quotientMap[t]=n),n},he=(e,t,n)=>{const s=t,f=[[t,n]];for(;f.length>0;)if([t,n]=f.pop(),t>n&&([t,n]=[n,t]),t=O(e,t),n=O(e,n),t!==n){e.quotientMap[n]=t,e.seen.has(n)&&!e.seen.has(t)&&e.seen.add(t);const d=e.cosets.get(t),g=e.cosets.get(n);e.cosets.delete(n);for(const[v,c]of g)d.has(v)?f.push([d.get(v),c]):d.set(v,c)}return O(e,s)},ae=(e,t,n,s)=>{t=O(e,t);const f=e.cosets.get(t);f.has(n)?he(e,f.get(n),s):f.set(n,s)},J=(e,t,n,s)=>{t=O(e,t);let f;const d=e.cosets.get(t);return d.has(n)?(f=O(e,d.get(n)),s!==void 0&&f!==s&&he(e,s,f)):(s?f=s:(f=e.nextVertex++,e.cosets.set(f,new Map),e.unvisited.push(f)),ae(e,t,n,f),ae(e,f,me(n),t)),f},ve=function(e,t,n){let s=n;for(let f=t.length-1;f>0;f--)s=J(e,s,t[f]);J(e,s,t[0],n)},Ie=function(e){if(!e.words){const t=O(e,1);e.words=new Map,e.words.set(t,""),e.currentWords=new Map,e.currentWords.set(t,""),e.lastCoset=t,e.remaining=[t],e.rootVertex&&e.rootNormals&&e.metric&&(e.vertices=new Map,e.vertices.set(t,e.rootVertex))}for(;e.remaining.length>0;){const t=e.remaining[0],n=O(e,t),s=e.cosets.get(n),f=e.words.get(n);if(s.size<e.gens.length*2)return;const d=[];for(let g=0;g<e.gens.length;g++){const v=e.gens[g],c=O(e,s.get(v));if(!e.words.has(c)){if(e.cosets.get(c).size<e.gens.length*2)return;d.push([v,c])}}e.remaining.shift();for(let g=0;g<d.length;g++){const[v,c]=d[g],w=v+f;if(e.words.set(c,w),e.currentWords.set(c,w),e.lastCoset=c,e.remaining.push(c),e.vertices){let i=e.vertices.get(n);for(let l=0;l<e.transforms[v].length;l++){const r=e.transforms[v][l];i=re(i,e.rootNormals[r],e.metric)}e.vertices.set(c,i)}}}},_=(e,t)=>{let n=O(e,1);for(let s=t.length-1;s>=0;s--){const f=e.cosets.get(n);if(f.size<e.gens.length*2||(n=O(e,f.get(t[s])),e.cosets.get(n).size<e.gens.length*2))return}return n},we=e=>{if(e.cosets)e.unvisited.splice(0,e.pointer),e.pointer=0;else{e.unvisited=[1],e.pointer=0,e.cosets=new Map([[1,new Map]]),e.nextVertex=2,e.seen=new Set,e.quotientMap={};for(let t=0;t<e.subgens.length;t++)ve(e,e.subgens[t],1)}e.limit=e.limit||1e3,e.done=!1;for(let t=0;t<e.limit;t++){let n=null;for(;e.unvisited.length-e.pointer>0;){const s=e.unvisited[e.pointer++],f=O(e,s);if(!e.seen.has(f)){e.seen.add(f),n=f;break}}if(n===null){e.done=!0;break}for(let s=0;s<e.gens.length;s++)J(e,n,e.gens[s].toUpperCase()),J(e,n,e.gens[s]);for(let s=0;s<e.rels.length;s++)ve(e,e.rels[s],n)}},Pe=e=>(we(e),e.cosets.size),be=e=>(we(e),Ie(e),e),_e=(e,t,n)=>{if(t===0)return!0;if(e.length<=t)return!1;const s=new Set;for(let f=0;f<e.length;f++){const d=e[f];if(d)for(let g=0;g<d.length;g++){const v=d[g];for(let c=0;c<n[v].length;c++){const w=M(n[v][c]);s.has(w)||s.add(w)}if(s.size>=t)return!0}}return!1},p=(e,t,n,s,f)=>{const d=I(n.length).filter(i=>!f.includes(i));let g="";const v=Object.entries(s),c=v.filter(([i,l])=>l.length===1),w=v.filter(([i,l])=>l.length===3);for(let i=0;i<v.length;i++){const[l,r]=v[i];if(r.length===1){const o=r[0];if(!f.includes(o)&&!w.some(([u,h])=>h[1]===o)){g+=l;continue}if(!T(e[o]))continue;!e[o]&&!d.some(u=>n[u][o]!==2)&&(g+=l)}else if(r.length===2){const o=r[0],u=r[1],h=n[o][u];if(t.gens.includes(l)&&(t.dimensions===1?h===2:h>2)){g+=l;continue}if(!T(e[o])||!T(e[u]))continue}else if(r.length===3&&f.length&&typeof f[f.length-1]=="string"&&f[f.length-1].includes("s")){const o=r[0],u=r[1],h=n[o][u],b=f[f.length-1].split("s").filter(k=>k);for(let k=0;k<b.length;k++){const y=b[k],a=s[Object.keys(s)[y]];if(a.length===3&&r[1]===a[1]){const S=n[a[0]][a[1]];if((t.dimensions===1?![2,4].includes(h)||[2,4].includes(S):h!==2)&&(g+=l),c.find(([x,V])=>a.every(z=>z!==V[0]))){const x=c.find(([V,z])=>z[0]===a[1]);x&&(g+=x[0])}}}}}return g},ee=(e,t,n,s,f,d=null,g=null,v=null,c=new Map)=>{const w=!g;s.every(i=>!i)&&(s=s.map(()=>1)),d=d||s.map((i,l)=>T(i)?null:l).filter(i=>i!==null),g=g||{new:!0,key:"",dimensions:e,coxeter:t,stellation:n,mirrors:s,skips:d,...U(e,t,n,s,f,d),quotient:"",facet:[""],children:[]},v=v||g.transforms;for(let i=0;i<e;i++){if(d.includes(i)||d.includes("s"))continue;const l=[...d,i],r=l.sort().join("-");let o=!1;if(!c.has(r)){o=!0;const b={key:r,dimensions:e-l.length,coxeter:oe(t,l),stellation:oe(n,l),mirrors:X(s,l),skips:l,...U(e,t,n,s,f,l)};if(b.gens===null)continue;be(b),c.set(r,b)}const u=c.get(r),h=Array.from(u.words.values());if(_e(h,u.dimensions,u.transforms)){let b=p(s,u,t,v,l),k={new:o,...u,quotient:b,facet:h,children:[]};u.dimensions>0&&(k=ee(e,t,n,s,f,l,k,v,c)),g.children.push(k)}}if(g.children.length===0&&e-d.length>1){console.debug("No leaf found, digging deeper",d);for(let i=0;i<e;i++){if(d.includes(i))continue;const l=[...d,i],r=l.sort().join("-");let u={new:!1,...c.get(r),quotient:"",facet:[""],children:[]};u=ee(e,t,n,s,f,l,u,v,c),g.children.push(u)}}if(w&&s.some(i=>q(i))){let i=[];for(let l=1;l<e;l++){const r=[...d,...I(e-l).map(()=>"s")],o=e-r.length;if(l===1){const u=[],h=j=>{j.children.forEach(h),j.dimensions===1&&j.new&&u.push(j)};h(g);const b=Object.entries(g.transforms).filter(([j,x])=>x.length!==1||s[x[0]]).filter(([j,x])=>x.length!==3||t[x[0]][x[1]]!==2).map(([j])=>j);for(let j=0;j<u.length;j++){const x=u[j];b.includes(x.gens)&&b.splice(b.indexOf(x.gens),1)}const k=i;i=[];const y=P(o).map((j,x)=>j.map((V,z)=>x===z?1:x===z+1||x===z-1?4:2)),a=P(o).map(j=>j.map(()=>1)),S=I(o).map(()=>"s");for(let j=0;j<b.length;j++){const x=b[j];r[r.length-1]=g.gens.indexOf(x)+"s";const V={key:r.join("-"),dimensions:o,coxeter:y,stellation:a,mirrors:S,skips:r,...U(o,y,a,S,f,r)};V.gens=x;const z={new:!0,...V,quotient:p(s,V,t,v,r),facet:["",x],children:j===0?k:[]};i.push(z)}}else if(l===2){const u=P(o).map((j,x)=>j.map((V,z)=>x===z?1:x===z+1||x===z-1?3:2)),h=P(o).map(j=>j.map(()=>1)),b=I(o).map(()=>"s"),k=[],y=Object.entries(g.transforms).filter(([j,x])=>x.length>=2).filter(([j,x])=>x.length!==3||t[x[0]][x[1]]!==2),a=Object.entries(g.transforms).filter(([j,x])=>x.length===1);for(let j=0;j<y.length;j++){const[x,V]=y[j];for(let z=j+1;z<y.length;z++){const[C,E]=y[z];V[V.length-1]===E[E.length-1]&&k.push(["",x,C]),V.length!==E.length&&(V.length===2&&V[0]===E[2]||V.length===3&&V[2]===E[0])&&k.push(["",x.toUpperCase(),C.toUpperCase()])}if(V.length===3)for(let z=0;z<a.length;z++){const[C,E]=a[z];V.every(se=>se!==E[0])&&k.push(["",x,C+x])}}const S=i;i=[],k.length||k.push([""]);for(let j=0;j<k.length;j++){const x=k[j];r[r.length-1]=x.length===1?"s":g.gens.indexOf(x[1].toLowerCase())+"s"+g.gens.indexOf(x[2].replace(x[1],"").toLowerCase());const V={key:r.join("-"),dimensions:o,coxeter:u,stellation:h,mirrors:b,skips:r,...U(o,u,h,b,f,r)},z={new:!0,...V,quotient:p(s,V,t,v,r),facet:x,children:j===0?S:[]};i.push(z)}}else{const u=P(o).map((a,S)=>a.map((j,x)=>S===x?1:2)),h=P(o).map(a=>a.map(()=>1)),b=I(o).map(()=>"s"),k=i;i=[];const y={new:!0,key:r.join("-"),dimensions:o,coxeter:u,stellation:h,mirrors:b,skips:r,...U(o,u,h,b,f,r),facet:[""],quotient:"",children:k};i.push(y)}}g.children.push(...i)}return g},B=["vertex","edge","face"],te=(e,t,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),A=(e,t,n)=>{let s,f,d;if(t===0)s=f=d=n;else{const g=n<.5?n*(1+t):n+t-n*t,v=2*n-g;s=te(v,g,e+1/3),f=te(v,g,e),d=te(v,g,e-1/3)}return[s,f,d]},K=[[10/360,.56,.91],[0/360,.59,.88],[316/360,.72,.86],[267/360,.84,.81],[343/360,.81,.75],[350/360,.65,.77],[23/360,.92,.75],[41/360,.86,.83],[115/360,.54,.76],[170/360,.57,.73],[189/360,.71,.73],[199/360,.76,.69],[217/360,.92,.76],[232/360,.97,.85]],Ne={background:[0,0,0,1],glow:!1,shading:"ads",diffuse:"lambert",specular:!1,shininess:32,opacity:1,ambient:.2,roughness:.85,gouraud:!1,transparency:"oit",color:({word:e})=>A(e.length*.03%1,.75,.7)},Ue=Object.fromEntries(Object.entries({neon:{background:[0,0,0,1],glow:{exposure:1.75,strength:2,offset:{up:2,down:2},steps:3,pow:2},shading:!1,face:{opacity:.025},transparency:"blend",color:({word:e,dual:t})=>A((e.length*.17-(t?.43:0))%1,.5,.6)},disco:{background:[0,0,0,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,diffuse:"fresnel",opacity:.025},transparency:"blend",color:({word:e})=>A(...K[e.length%K.length])},cathedral:{background:[.6,.6,.6,1],glow:{exposure:1.5,strength:2,offset:{up:2,down:2},steps:4,pow:2},face:{gouraud:!0,opacity:.9},transparency:"oit",color:({word:e,type:t})=>t==="face"?A(e.length*.3%1,1,.6):[0,0,0]},synthwave:{background:[...A(.77,.6,.04),1],glow:{exposure:1.5,strength:3,offset:{up:3,down:3},steps:3,pow:2},shading:!1,face:{opacity:.015},afterImage:.7,transparency:"blend",color:({word:e})=>A((.5-e.length*.05%.5+.65)%1,.4,.6)},colorful:{background:[1,1,1,1],diffuse:"oren-nayar",specular:"cook-torrance",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e,dual:t})=>A(e.length*.03%1-(t?.25:0),1,.8)},shiny:{background:[0,0,0,1],diffuse:"lambert",specular:"blinn-phong",shininess:32,opacity:1,ambient:.2,gouraud:!1,face:{gouraud:!0,opacity:.1,diffuse:"fresnel",specular:!1},transparency:"oit",color:({word:e})=>A(-(e.length*.07)%1,1,.8)},shape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({faceSize:e,type:t,idx:n,size:s})=>t==="face"?A((e-2)*.21%1,1,.8):A(n/s,.75,.5)},subShape:{background:[1,1,1,1],transparency:"oit",face:{gouraud:!0,opacity:.2,diffuse:"fresnel"},color:({subShape:e,type:t})=>t!=="vertex"?A(e*.21%1,1,.8):[1,1,1]},reflection:{background:[1,1,1,1],diffuse:"cel",face:{opacity:.6,gouraud:!1},transparency:"blend",color:({word:e,type:t,dimensions:n,draw:s})=>{const f=e.length?de(e[e.length-1])/n:0;return A(f%1,1,t==="face"?.6:s.face?0:.8)}},harlequin:{background:[...A(240/360,.23,.09),1],face:{opacity:.6},transparency:"oit",color:({word:e,idx:t,type:n})=>{const s=e.split("").map(d=>de(d)).reduce((d,g)=>d+g,0),f=[...K[s%K.length]];return t%2&&(f[2]*=.5),A(...f)}},pure:{background:[0,0,0,1],color:({word:e})=>A(e.length*.03%1,.75,.7)},facets:{background:[0,0,0,1],color:({faceIndex:e,faceSize:t})=>A(e/t,.75,.7)},monochrome:{background:[.12,.12,.12,1],diffuse:"reverse",ambient:0,face:{opacity:.1},transparency:"oit",color:()=>[1,1,1]},plain:{extended:!0,background:[1,1,1,1],glow:!1,shading:!1,color:({word:e,type:t,draw:n})=>A(e.length*.06%1,1,t==="face"?.6:n.face?.05:.5)},plainblack:{extended:!0,background:[1,1,1,1],shading:!1,color:({word:e,type:t})=>t==="face"?new Array(3).fill(1-We(.9,e.length+1)):[0,0,0]},normals:{extended:!0,background:[1,1,1,1],shading:"normal",color:()=>[0,0,0]},uvs:{extended:!0,background:[1,1,1,1],shading:"uv",color:()=>[0,0,0]}}).map(([e,t])=>[e,{...Ne,...t,transparent:{}}])),Be=(e,t,n,s)=>{const f=[],d=[],g=e>4?9:e;for(let v=0;v<t.length;v++){const c=t[v];if(!c){f.push(null),d.push(null);continue}const w=[new Float32Array(c.size*3)];for(let r=0;r<v+1;r++)w.push(new Float32Array(c.size*g));let i=0;const l=c.objects.concat(c.partials);for(let r=0;r<l.length;r++){const o=l[r];if(o)for(let u=0;u<o.length;u++){const h=o[u];for(let k=0;k<h.vertices.length;k++){const y=h.vertices[k];for(let a=0;a<y.length;a++)w[k+1][i*g+a]=y[a]}const b=Ue[n].color({word:h.word,key:h.key,subShape:r%c.objects.length,faceIndex:h.faceIndex,faceSize:h.faceSize,dimensions:e,draw:s,idx:i,size:c.size,type:B[v],dual:!!h.dual});w[0][i*3+0]=b[0],w[0][i*3+1]=b[1],w[0][i*3+2]=b[2],i++}}f.push(w),d.push({start:c.start,size:c.size})}return{infos:d,data:f}},Fe=(e,t,n=!1,s=!1)=>{if(n){if(s)return e;const f=e>0?1-e%2:0;return e>=t/2+f?2*(t-e)-1+f:2*e-f}return e>=t/2?2*(t-e)-1:2*e},Te=(e,t,n,s)=>{const f=[],d=[];if(e===0)for(const[g,v]of t.currentWords)f.push({word:v,vertices:[t.vertices.get(g)]}),t.currentWords.delete(g);else if(e===1)for(const[g,v]of t.currentWords){const c={word:v,vertices:[]};for(let w=0;w<t.facet.length;w++){const i=_(s.root,v+t.facet[w]);i&&s.root.vertices.has(i)&&c.vertices.push(s.root.vertices.get(i))}c.vertices.length<e+1||(f.push(c),t.currentWords.delete(g))}else if(e===2)for(const[g,v]of t.currentWords){const c=t.mirrors.every(u=>!!u),w=t.mirrors.every(u=>q(u)),i=v.length%2?0:1,l=[];for(let u=0;u<t.facet.length;u++){const h=Fe(u,t.facet.length,c,w),b=_(s.root,v+t.facet[h]);b&&s.root.vertices.has(b)&&l.push(s.root.vertices.get(b))}if(l.length<e+1)continue;const r=l.length<t.facet.length;if(l.length===3){i&&([l[2],l[1]]=[l[1],l[2]]);const u={word:v,vertices:l,faceIndex:0,faceSize:3,partial:r};r?d.push(u):(f.push(u),t.currentWords.delete(g));continue}let o=new Array(n.dimensions).fill(0);for(let u=0;u<l.length;u++){const h=l[u];o=D(o,h)}o=m(o,1/l.length);for(let u=0;u<l.length;u++){const h={word:v,vertices:[l[(u+i)%l.length],l[(u+(1-i))%l.length],o],faceIndex:u,faceSize:l.length,partial:r};r?d.push(h):(f.push(h),t.currentWords.delete(g))}}return{objects:f,partials:d}},ne=(e,t=null)=>{if(!e.length)return t||[];if(!t)return t=e[0],ne(e.slice(1),t);const n=t[t.length-1],s=e.find(d=>d[0]===n||d[1]===n);if(!s)return t;const f=e.indexOf(s);return e.splice(f,1),s[0]===n?t.push(s[1]):t.push(s[0]),ne(e,t)},$e=(e,t,n,s)=>{const f=[],d=t.children.find(c=>c.key===n.replace("d","")),g=[],v=c=>{c.dimensions===e&&g.push(c.facet),c.children.forEach(v)};v(d),t.children.filter(c=>c.key.includes("s")).forEach(v);for(let c=0;c<g.length;c++){const w=g[c];if(w.length<2)continue;const i=[];for(let r=0;r<w.length;r++){const o=_(s,w[r]);o&&s.vertices.has(o)&&i.push(s.vertices.get(o))}let l=new Array(i[0].length).fill(0);for(let r=0;r<i.length;r++){const o=i[r];l=D(l,o)}l=m(l,1/i.length),f.push(R(l,l))}return Oe(...f)},Re=(e,t,n,s,f,d)=>{var w,i,l;const{space:g}=s.root,v=[],c=[];if(e===0){s.root.dualVertices=s.root.dualVertices||new Map;for(const[r,o]of t.currentWords){const u=[];for(let y=0;y<t.facet.length;y++){const a=_(s.root,o+t.facet[y]);a&&s.root.vertices.has(a)&&u.push(a)}const h=u.length<t.facet.length;let b=new Array(n.dimensions).fill(0);for(let y=0;y<u.length;y++){const a=s.root.vertices.get(u[y]);b=D(b,a)}if(b=ie(b,g.metric),g.curvature){let y=0;if(f>=0){let a=1;f>0&&f<n.dimensions-1&&(t.midradius||(t.midradius=$e(f,n,d,s.root)),a=t.midradius);const S=H(g.metric,b);for(let j=0;j<u.length;j++){const x=s.root.vertices.get(u[j]);y+=R(S,x)}y/=a*u.length,f===n.dimensions-1&&(y=1/y)}else y=1;b=m(b,g.curvature/y)}const k={word:o,vertices:[b],dual:!0,partial:h};s.root.dualVertices.set(`${d}#${o}`,{vertex:b,facet:u,partial:h}),h?c.push(k):(v.push(k),t.currentWords.delete(r))}}else if(e===1){if(!((w=s.root.dualVertices)!=null&&w.size))return{objects:v,partials:c};s.root.dualEdges=s.root.dualEdges||new Map;for(const[r,o]of t.currentWords){const u=[];for(let y=0;y<t.facet.length;y++){const a=_(s.root,o+t.facet[y]);a&&s.root.vertices.has(a)&&u.push(a)}let h=u.length<t.facet.length;const b=[],k=[];for(const[y,{vertex:a,facet:S,partial:j}]of s.root.dualVertices.entries())if(u.every(x=>S.includes(x))&&(b.push(a),k.push(y)),h=h||j,b.length===2)break;if(b.length===2){const y={word:o,vertices:b,dual:!0,partial:h};s.root.dualEdges.set(`${d}#${o}`,{edge:k,partial:h}),h?c.push(y):(v.push(y),t.currentWords.delete(r))}}}else if(e===2){if(!((i=s.root.dualVertices)!=null&&i.size)||!((l=s.root.dualEdges)!=null&&l.size))return{objects:v,partials:c};for(const[r,o]of t.currentWords){const u=[];for(let z=0;z<t.facet.length;z++){const C=_(s.root,o+t.facet[z]);C&&s.root.vertices.has(C)&&u.push(C)}if(u.length<t.facet.length)continue;const h={},b=[];for(const[z,{vertex:C,facet:E}]of s.root.dualVertices.entries())u.every(se=>E.includes(se))&&(h[z]=C,b.push(z));if(b.length<3)continue;let k=!1;const y=[];for(const{edge:z,partial:C}of s.root.dualEdges.values())b.includes(z[0])&&b.includes(z[1])&&(k=k||C,y.push([...z]));if(y.length<3)continue;const a=[],S=ne(y);if(S.length<4)continue;let j=!0;S[0]===S[S.length-1]&&(S.pop(),j=k||!1);for(let z=0;z<S.length;z++){const C=S[z];a.push(h[C])}if(a.length===3){const z={word:o,vertices:a,dual:!0};v.push(z),t.currentWords.delete(r);continue}const x=o.length%2?0:1;let V=new Array(n.dimensions).fill(0);for(let z=0;z<a.length;z++){const C=a[z];V=D(V,C)}V=m(V,1/a.length);for(let z=0;z<a.length;z++){const C={word:o,vertices:[a[(z+x)%a.length],a[(z+(1-x))%a.length],V],dual:!0,faceIndex:z,faceSize:a.length,partial:j};j?c.push(C):(v.push(C),t.currentWords.delete(r))}}}return{objects:v,partials:c}},De=(e,t,n)=>{const s=[],f=[],d=[];for(const[g,v]of e.currentWords){let c;if(v===""){const w=ze(n.rootVertices);e.fundamentalVertices=new Map,c=I(t.dimensions).map(i=>ie(w[i],n.metric)),e.hashes={vertex:new Set,edge:new Set,face:new Set},e.fundamentalVertices.set("",c)}else{c=[...e.fundamentalVertices.get(v.slice(1))];const w=e.gens.indexOf(v[0]);for(let i=0;i<c.length;i++)c[i]=re(c[i],n.rootNormals[w],n.metric)}for(let w=0;w<c.length;w++){const i=Y(c[w]);e.hashes.vertex.has(i)||(s.push({word:v,cosetId:g,vertices:[c[w]]}),e.hashes.vertex.add(i));for(let l=w+1;l<c.length;l++){const r=[c[w],c[l]].sort((o,u)=>{for(let h=0;h<o.length;h++){if(o[h]<u[h])return-1;if(o[h]>u[h])return 1}return 0}).map(o=>Y(o)).join("-");e.hashes.edge.has(r)||(f.push({word:v,cosetId:g,vertices:[c[w],c[l]]}),e.hashes.edge.add(r));for(let o=l+1;o<c.length;o++){const u=[c[w],c[l],c[o]].sort((h,b)=>{for(let k=0;k<h.length;k++){if(h[k]<b[k])return-1;if(h[k]>b[k])return 1}return 0}).map(h=>Y(h)).join("-");e.hashes.face.has(u)||(d.push({word:v,cosetId:g,vertices:[c[w],c[l],c[o]]}),e.hashes.face.add(u))}}e.fundamentalVertices.set(v,c)}e.currentWords.delete(g)}return[s,f,d]},He=(e,t,n,s,f,d,g,v,c)=>{g.root.lasts||(g.root.lasts=new Array(3).fill(0));const w=[];if(f){const i=De(g.root,e,n);for(let l=0;l<i.length;l++)s[B[l]]?(w.push({start:g.root.lasts[l],size:i[l].length,objects:[i[l]],partials:[]}),g.root.lasts[l]+=i[l].length):w.push(null)}else for(let i=0;i<3;i++){if(!g[i]||!d&&!s[B[i]]){w.push(null);continue}const l={start:g.root.lasts[i],size:0,objects:[],partials:[]};for(let r=0;r<g[i].detail.length;r++){const o=g[i].detail[r];if(!o.dual&&v.includes(o.key)){l.objects.push(null),l.partials.push(null);continue}const u=t.get(o.key);if(u.currentWords.size){const{objects:h,partials:b}=o.dual?Re(i,u,e,g,c,o.key):Te(i,u,e,g);if(!s[B[i]]||v.includes(o.key))continue;l.objects.push(h),l.size+=h.length+b.length,g.root.lasts[i]+=h.length,l.partials.push(b)}}w.push(l)}return w},je=(e,t,n,s,f,d,g,v,c=[])=>{c.done=!0;const w=i=>{var h,b,k;const l=g?t.dimensions-i.dimensions-1:i.dimensions;i.children.forEach(w);const r=v[l],o=B[l],u=g?`d${i.key}`:i.key;if(i!=null&&i.new){c[l]||(c[l]={dimensions:l,processing:f[o]?0:void 0,count:0,detail:[],aggregated:[],done:!0});const y=s.eigens.values;if(n.has(u))n.get(u).keys.push(u);else{const j={...t,keys:[u],subgens:i.quotient,facet:i.facet,subdimensions:l,mirrors:i.mirrors,space:s,...i.dimensions===0&&!d?{rootVertex:s.rootVertex,rootNormals:s.rootNormals,metric:s.metric}:{}};n.set(u,j)}const a=n.get(u);i.dimensions===0&&(c.root=a),a.done||((h=c[0])!=null&&h.done&&(!f.edge||(b=c[1])!=null&&b.done)&&(!f.face||(k=c[2])!=null&&k.done)?a.limit=1e3:(a.limit=r?e:0,o==="edge"&&s.curvature===0&&(a.limit*=1.5)),r?(be(a),y.some(j=>j<=0)?a.count=1/0:a.count=a.cosets.size):y.some(j=>j<=0)?(a.count=1/0,a.done=!0):a.limit&&(a.count=Pe(a))),c[l].detail.push({key:u,coxeter:i.coxeter,stellation:i.stellation,mirrors:i.mirrors,dual:g,count:a.count,done:a.done});const S=c[l].aggregated.find(({coxeter:j,stellation:x,mirrors:V})=>$(j,i.coxeter)&&$(x,i.stellation)&&$(V,i.mirrors));S?(S.done=S.done&&a.done,S.count+=a.count,S.key+=","+u):c[l].aggregated.push({key:u,coxeter:i.coxeter,stellation:i.stellation,mirrors:i.mirrors,count:a.count,done:a.done}),f[o]&&a.words&&(c[l].processing+=a.words.size),c[l].count+=a.count,c[l].done=c[l].done&&a.done,c[l].dual=g,c.done=c.done&&a.done}};return t.children.forEach(w),c.size=d?c.root.words.size:c.root.vertices.size,c};let F,W;onmessage=({data:{first:e,space:t,dimensions:n,coxeter:s,stellation:f,mirrors:d,ambiance:g,draw:v,batch:c,hidden:w,reciprocation:i}})=>{try{e&&(F=new Map,W=ee(n,s,f,d,t));const l=d.every(a=>!a),r=d.some(a=>xe(a)),o=d.some(a=>ye(a)),u={[n-1]:r,0:!0,1:r||v.edge&&!l,2:r||v.face&&!l},h=je(c,W,F,t,v,l,r&&!o,u);o&&je(c,W,F,t,v,l,r,u,h),W.dimensions===2&&(W.currentWords=new Map([[1,""]]),W.facet=Array.from(h.root.words.values()),W.done=!0,F.set("",{...W,subgens:W.subgens,facet:W.facet,subdimensions:W.dimensions,mirrors:W.mirrors}),h[2]={dimensions:2,processing:1,count:0,detail:[{key:"",coxeter:W.coxeter,stellation:W.stellation,mirrors:W.mirrors,count:1,done:!0}],aggregated:[],done:!0});const b=He(W,F,t,v,l,r,h,w,i),{infos:k,data:y}=Be(W.dimensions,b,g,v);h.root=void 0,postMessage({polytope:h,infos:k,data:y},y.flat(1).filter(a=>a).map(a=>a.buffer))}catch(l){postMessage({error:l.message})}}})();
