import{r as a,a0 as x,a1 as p,K as t,S as u,O as g,_ as j}from"./CoxeterMatrix-4ea3b729.js";const f=()=>{const r=localStorage.getItem("diagram");return r?JSON.parse(r):{dimensions:5,coxeter:[[1,4,2,3,3],[4,1,3,2,2],[2,3,1,5,2],[3,2,5,1,3],[3,2,2,3,1]],mirrors:[1,0,"s","c",.5],stellation:[[1,1,1,1,1],[1,1,1,1,1],[1,1,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],extended:!0}};function h(){const[r,n]=a.useState(!1),[e,i]=a.useState(f),c=a.useCallback((s,l)=>{const m=typeof s=="string"?{[s]:l}:s;i(d=>{const o=x({...d,...m});return localStorage.setItem("diagram",JSON.stringify(o)),o})},[]);return a.useEffect(()=>{n(p(e.coxeter))},[e]),t.jsxs("main",{children:[t.jsx("div",{className:"parameters",children:t.jsx(u,{dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation,extended:e.extended,onChange:c})}),t.jsx(g,{coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation}),r&&r.type!=="other"?t.jsxs("div",{className:"groupType",children:[r.description," ",r.group.join(", ")," ",t.jsxs("small",{children:["(",r.pairs.map(s=>s.join("")).join(", "),")"]})]}):null]})}j.createRoot(document.getElementById("root")).render(t.jsx(h,{}));
