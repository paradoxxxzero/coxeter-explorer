export const C = {
  // coxeter
  p: 5,
  q: 2,
  r: 2,
  s: 3,
  t: 2,
  u: 4,

  // v:
  x: 1,
  y: 0,
  z: 0,
  w: 0,

  dimensions: 4,
  order: 10,
  segments: 16,
  vertices: false,
  edges: true,
  DEBUG: false,
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

export const setC = (newC, sync = false) => {
  Object.assign(C, newC)
  if (sync) {
    location.hash = btoa(
      JSON.stringify(
        Object.fromEntries(Object.entries(C).filter(([k]) => SAVED.includes(k)))
      )
    )
  }
}
