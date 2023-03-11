import { setCurvature } from './math/hypermath'
export const C = {
  // coxeter
  p: 5,
  q: 3,
  r: 4,
  s: 2,
  t: 2,
  u: 2,

  // v:
  x: 1,
  y: 1,
  z: 1,
  w: 0,

  dimensions: 3,
  order: 6,
  vertices: false,
  edges: true,
  DEBUG: false,
  //
  curvature: -1,
  //
  runtime: {
    vertices: [],
    edges: [],
  },
}

export const setC = newC => {
  Object.assign(C, newC)
  setCurvature()
  C.runtime = {
    vertices: [],
    edges: [],
  }
}
