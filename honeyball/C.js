export const defaultC = {
  p: 5,
  q: 2,
  r: 2,
  s: 3,
  t: 2,
  u: 4,
  pDiv: 1,
  qDiv: 1,
  rDiv: 1,
  sDiv: 1,
  tDiv: 1,
  uDiv: 1,

  // v:
  x: 1,
  y: 0,
  z: 0,
  w: 0,

  dimensions: 4,
  order: 10,
  segments: 32,
  curve: true,
  vertices: false,
  vertexThickness: 75,
  edges: true,
  edgeThickness: 25,
  stellation: false,

  projection: 'stereographic',
  controls: 'orbit',
  ambiance: 'neon',
  msaa: false,
  msaaSamples: 8,
}

export const C = { ...defaultC }

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
    window.history.pushState(null, null, '#' + btoa(JSON.stringify(C)))
  }
}
