const canvas = document.createElement('canvas')
const tempGL = canvas.getContext('webgl2')
const MSAA_MAX = tempGL.getParameter(tempGL.MAX_SAMPLES)

export const defaultParams = {
  dimensions: 4,
  coxeter: [
    [1, 5, 2, 2],
    [5, 1, 3, 2],
    [2, 3, 1, 4],
    [2, 2, 4, 1],
  ],
  stellation: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  matrix: [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ],
  mirrors: [1, 0, 0, 0],
  extended: false,

  curve: true,
  adaptative: true,
  sizeVertex: 40,
  sizeEdge: 25,
  drawVertex: true,
  drawEdge: true,
  drawFace: false,
  controls: 'space',
  ambiance: 'neon',
  centered: false,
  fov3: 90,
  projection3: 'perspective',
  fov4: 90,
  projection4: 'stereographic',
  zoom: 1.5,

  hidden: [],
  reciprocation: 0,

  start: 1000,
  limit: 1000,
  batch: 750,

  msaa: window.devicePixelRatio <= 1,
  msaaSamples: MSAA_MAX,
  subsampling: window.devicePixelRatio,

  extrarels: '',
}
