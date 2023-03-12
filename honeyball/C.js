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
  order: 10,
  segments: 5,
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
const SAVED = [
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'x',
  'y',
  'z',
  'w',
  'dimensions',
  'order',
  'segments',
  'vertices',
  'edges',
  'DEBUG',
]
export const getC = () => {
  if (location.hash) {
    try {
      const hash = JSON.parse(atob(location.hash.slice(1)))
      Object.assign(C, hash)
    } catch (e) {
      console.warn(e)
      location.hash = ''
    }
  }
}

export const setC = newC => {
  Object.assign(C, newC)

  location.hash = btoa(
    JSON.stringify(
      Object.fromEntries(
        Object.entries(C).filter(([k, v]) => SAVED.includes(k))
      )
    )
  )

  C.runtime = {
    vertices: [],
    edges: [],
  }
}
