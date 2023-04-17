export const defaultC = {
  dimensions: 4,
  coxeter: [
    [-1, 5, 2, 2],
    [5, -1, 3, 2],
    [2, 3, -1, 4],
    [2, 2, 4, -1],
  ],
  coxeterDiv: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  mirrors: [1, 0, 0, 0],
  extended: true,
  stellation: false,

  order: 10,
  segments: 32,
  curve: true,
  vertices: false,
  vertexThickness: 75,
  edges: true,
  edgeThickness: 25,

  projection: 'stereographic',
  controls: 'orbit',
  ambiance: 'neon',
  msaa: false,
  msaaSamples: 8,
}

export const C = { ...defaultC }

export const getC = () => {
  const { location } = window
  if (location.hash) {
    try {
      const hash = JSON.parse(atob(location.hash.slice(1)))
      // Object.assign(C, hash)
      return hash
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
