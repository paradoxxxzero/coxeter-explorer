import{r as s,ak as m,a8 as r,ae as l,ab as c,aj as d}from"./CoxeterDiagram-66e43a2d.js";function j(){const[e,a]=s.useState({dimensions:5,coxeter:[[1,4,2,3,3],[4,1,3,2,2],[2,3,1,5,2],[3,2,5,1,3],[3,2,2,3,1]],mirrors:[1,0,"s","ß",.5],stellation:[[1,1,1,1,1],[1,1,1,1,1],[1,1,1,2,1],[1,1,2,1,1],[1,1,1,1,1]],extended:!0}),o=s.useCallback((t,n)=>{const i=typeof t=="string"?{[t]:n}:t;a(x=>m({...x,...i}))},[]);return r.jsxs("main",{children:[r.jsx("div",{className:"parameters",children:r.jsx(l,{dimensions:e.dimensions,coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation,extended:e.extended,onChange:o})}),r.jsx(c,{coxeter:e.coxeter,mirrors:e.mirrors,stellation:e.stellation})]})}d.createRoot(document.getElementById("root")).render(r.jsx(j,{}));