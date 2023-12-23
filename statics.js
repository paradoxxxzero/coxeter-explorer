import { min, sign } from './explorer/math'
import { ident } from './explorer/math/matrix'
import { mirrorChars } from './explorer/mirrors'

const canvas = document.createElement('canvas')
const tempGL = canvas.getContext('webgl2')
const MSAA_MAX = tempGL.getParameter(tempGL.MAX_SAMPLES)
export const spaceLetters = 'xyzwvutsrqponmlkjihgfedcba'

export const projections = [
  'perspective',
  'stereographic',
  'orthographic',
  'klein',
  'inverted',
  'scale',
  'joukowsky',
  'half',
  'upperhalf',
  'halfsphere',
  'band',
  'cross',
  'heart',
  'teardrop',
  'square',
  'ring',
  'sinusoidal',
  'spiral',
  'SC_Triangle',
  'SC_Square',
  'SC_Pentagon',
  'SC_Hexagon',
]
export const easings = [
  'linear',
  'sine',
  'quadratic',
  'cubic',
  'quartic',
  'quintic',
  'exponential',
  'circular',
  'back',
  'elastic',
  'bounce',
  'inverse_sine',
  'inverse_quadratic',
  'inverse_cubic',
  'inverse_quartic',
  'inverse_quintic',
]
export const groupers = ['toddcoxeter', 'knuthbendix', 'fundamental']
export const shadings = ['ads', 'normal', 'position', 'uv']
export const diffuseLight = [
  'lambert',
  'oren-nayar',
  'minnaert',
  'cel',
  'fresnel',
  'reverse',
]
export const specularLight = [
  'phong',
  'blinn-phong',
  'cook-torrance',
  'ward-anisotropic',
]

export const details = ['low', 'medium', 'high', 'ultra']

export const defaultProjection = (dimension, dimensions) =>
  dimension === 3
    ? 'perspective'
    : dimension === dimensions
    ? 'stereographic'
    : 'scale'

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
  detail: 'medium',
  segments: 16,
  easing: 'linear',
  showVertices: false,
  vertexThickness: 50,
  showEdges: true,
  edgeThickness: 25,
  showFaces: false,

  grouper: 'toddcoxeter',
  controls: 'space',
  ambiance: 'neon',
  centered: false,
  fov3: 90,
  projection3: 'perspective',
  fov4: 90,
  projection4: 'stereographic',

  zoom: 1.5,

  msaa: window.devicePixelRatio <= 1,
  msaaSamples: MSAA_MAX,
  subsampling: window.devicePixelRatio,
}

export const normalizeCoxeter = params => {
  if (
    params.coxeter.length !== params.dimensions ||
    params.coxeter.some(r => r.length !== params.dimensions)
  ) {
    const oldCoxeter = params.coxeter
    params.coxeter = new Array(params.dimensions)
      .fill()
      .map((row, i) =>
        new Array(params.dimensions)
          .fill()
          .map((_, j) => (i === j ? 1 : i === j + 1 || i + 1 === j ? 3 : 2))
      )

    for (let i = 0; i < min(oldCoxeter.length, params.dimensions); i++) {
      for (let j = 0; j < i; j++) {
        params.coxeter[i][j] = oldCoxeter[i][j]
        params.coxeter[j][i] = oldCoxeter[i][j]
      }
    }
  }
  if (params.mirrors.length !== params.dimensions) {
    const oldMirrors = params.mirrors
    params.mirrors = new Array(params.dimensions).fill(0)

    for (let i = 0; i < min(oldMirrors.length, params.dimensions); i++) {
      params.mirrors[i] = oldMirrors[i]
    }
  }
  if (
    params.stellation.length !== params.dimensions ||
    params.stellation.some(r => r.length !== params.dimensions)
  ) {
    const oldStellation = params.stellation
    params.stellation = new Array(params.dimensions)
      .fill()
      .map(() => new Array(params.dimensions).fill(1))

    for (let i = 0; i < min(oldStellation.length, params.dimensions); i++) {
      for (let j = 0; j < i; j++) {
        params.stellation[i][j] = oldStellation[i][j]
        params.stellation[j][i] = oldStellation[j][i]
      }
    }
  }
  return params
}

export const filterParams = (maybeBadParams, changed = [], oldParams) => {
  const params = {
    ...maybeBadParams,
  }
  const badParams = []
  // Remove bad params
  Object.entries(params).forEach(([key, value]) => {
    if (typeof defaultParams[key] === 'number' || key.startsWith('fov')) {
      if (value === '' || isNaN(value)) {
        delete params[key]
        badParams.push(key)
      }
    } else if (Array.isArray(defaultParams[key])) {
      // arrays of arrays of numbers
      if (Array.isArray(value[0])) {
        if (
          value.find(c =>
            c.find(d => value === '' || (key !== 'coxeter' && isNaN(d)))
          )
        ) {
          delete params[key]
          badParams.push(key)
        }
      } else {
        // arrays of numbers
        if (
          value.find(
            c =>
              value === '' ||
              (isNaN(c) && !(key === 'mirrors' && mirrorChars.includes(c)))
          )
        ) {
          delete params[key]
          badParams.push(key)
        }
      }
    }
  })

  // Normalize params
  if (!badParams.includes('coxeter')) {
    normalizeCoxeter(params)
  }
  if (
    params.matrix.length !== params.dimensions ||
    params.matrix.some(r => r.length !== params.dimensions)
  ) {
    params.matrix = ident(params.dimensions)
  }
  for (let i = 3; i <= 9; i++) {
    if (i <= params.dimensions) {
      if (!params[`fov${i}`] && !badParams.includes(`fov${i}`)) {
        params[`fov${i}`] = 90
      }
      if (!params[`projection${i}`] && !badParams.includes(`projection${i}`)) {
        params[`projection${i}`] = 'perspective'
      }
    } else {
      if (`fov${i}` in params) {
        delete params[`fov${i}`]
      }
      if (`projection${i}` in params) {
        delete params[`projection${i}`]
      }
    }
  }

  if (oldParams && changed.includes('dimensions')) {
    // Shift projections from smallest
    const s = sign(oldParams.dimensions - params.dimensions)
    for (let i = 4; i <= params.dimensions; i++) {
      params[`projection${i}`] =
        i + s === 3 ? 'scale' : oldParams[`projection${i + s}`]
    }
    if (params.dimensions !== 3) {
      params.projection3 = 'perspective'
    }
    if (
      params.dimensions === 4 &&
      oldParams.dimensions === 3 &&
      oldParams.projection3 === 'perspective'
    ) {
      params.projection4 = 'stereographic'
    }
  }

  return { params, badParams }
}
