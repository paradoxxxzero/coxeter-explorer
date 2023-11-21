import { hsl } from './explorer/helpers'
import { atoi, min, pow } from './explorer/math'
import { coxeterToGram, getSpaceType } from './explorer/math/hypermath'
import { ident } from './explorer/math/matrix'
import { mirrorChars } from './explorer/mirrors'

const canvas = document.createElement('canvas')
const tempGL = canvas.getContext('webgl2')
const MSAA_MAX = tempGL.getParameter(tempGL.MAX_SAMPLES)

export const projections = [
  'perspective',
  'stereographic',
  'orthographic',
  'klein',
  'inverted',
  'joukowsky',
  'upperhalf',
  'band',
  'cross',
  'heart',
  'teardrop',
  'square',
  'ring',
  'sinusoidal',
  'SC_Triangle',
  'SC_Square',
  'SC_Pentagon',
  'SC_Hexagon',
]
export const easings = [
  'auto',
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
export const groupers = ['', 'knuthbendix', 'toddcoxeter', 'fundamental']
export const lightings = ['lambert', 'phong', 'blinn-phong', 'toon']
export const ambiances = {
  neon: {
    background: [0, 0, 0, 1],
    glow: {
      exposure: 1.75,
      strength: 2,
      offset: {
        up: 2,
        down: 2,
      },
      steps: 3,
      pow: 2,
    },
    exposure: 0.75,
    lighting: false,
    opacity: 0.05,
    transparency: 'blend',
    color: ({ word }) => hsl((word.length * 0.17) % 1, 0.5, 0.6),
  },
  synthwave: {
    background: [...hsl(0.77, 0.6, 0.04), 1],
    glow: {
      exposure: 1.5,
      strength: 3,
      offset: {
        up: 3,
        down: 3,
      },
      steps: 3,
      pow: 2,
    },
    exposure: 0.75,
    lighting: false,
    opacity: 0.12,
    afterImage: 0.7,
    transparency: 'blend',
    color: ({ word }) =>
      hsl((0.5 - ((word.length * 0.05) % 0.5) + 0.65) % 1, 0.4, 0.6),
  },
  colorful: {
    background: [1, 1, 1, 1],
    glow: false,
    lighting: 'blinn-phong',
    opacity: 0.4,
    transparency: 'oit',
    color: ({ word }) => hsl((word.length * 0.03) % 1, 1, 0.8),
    // culling: true,
  },
  shape: {
    background: [1, 1, 1, 1],
    glow: false,
    lighting: 'lambert',
    opacity: 0.75,
    transparency: 'oit',
    color: ({ word, len, vertices }, type) =>
      type === 'face'
        ? hsl((((len || vertices.length) - 2) * 0.21) % 1, 1, 0.8)
        : [1, 1, 1],
    // culling: true,
  },
  reflection: {
    background: [1, 1, 1, 1],
    glow: false,
    lighting: 'toon',
    opacity: 0.6,
    transparency: 'blend',
    color: ({ word }, type, { dimensions, showFaces }) => {
      const h = word.length ? atoi(word[word.length - 1]) / dimensions : 0
      return hsl(h % 1, 1, type === 'face' ? 0.6 : showFaces ? 0.05 : 0.8)
    },
  },
  pure: {
    background: [0, 0, 0, 1],
    glow: false,
    lighting: 'lambert',
    opacity: 1,
    color: ({ word }) => hsl((word.length * 0.03) % 1, 0.75, 0.7),
  },
  plain: {
    extended: true,
    background: [1, 1, 1, 1],
    glow: false,
    lighting: false,
    opacity: 1,
    color: ({ word }) => hsl((word.length * 0.06) % 1, 0.7, 0.6),
  },
  plainblack: {
    extended: true,
    background: [1, 1, 1, 1],
    glow: false,
    lighting: false,
    opacity: 1,
    color: ({ word }, type) =>
      type === 'face'
        ? new Array(3).fill(1 - pow(0.9, word.length + 1))
        : [0, 0, 0],
  },
}

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

  order: 10,
  curve: true,
  segments: 32,
  easing: 'auto',
  showVertices: false,
  vertexThickness: 75,
  showEdges: true,
  edgeThickness: 25,
  showFaces: false,

  grouper: '',
  controls: 'space',
  ambiance: 'neon',
  centered: null,

  zoom: 1.5,
  fov3: 90,
  projection3: 'perspective',
  fov4: 90,
  projection4: 'stereographic',

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
  if (params.matrix._preset) {
    delete params.matrix._preset
  } else if (
    params.matrix.length !== params.dimensions ||
    params.matrix.some(r => r.length !== params.dimensions) ||
    ((changed.includes('coxeter') || changed.includes('stellation')) &&
      getSpaceType(coxeterToGram(params.coxeter, params.stellation))
        .curvature !==
        getSpaceType(coxeterToGram(oldParams.coxeter, oldParams.stellation))
          .curvature)
  ) {
    params.matrix = ident(params.dimensions)
  }
  if (
    changed.includes('dimensions') &&
    !changed.some(k => k.startsWith('projection')) &&
    params.dimensions >= 4
  ) {
    params[`projection3`] = 'perspective'
  }
  for (let i = 4; i <= 9; i++) {
    if (
      i <= params.dimensions &&
      !params[`fov${i}`] &&
      !badParams.includes(`fov${i}`)
    ) {
      params[`fov${i}`] = 90
    }
    if (
      i <= params.dimensions &&
      (!params[`projection${i}`] ||
        (changed.includes('dimensions') &&
          !changed.includes(`projection${i}`))) &&
      !badParams.includes(`projection${i}`)
    ) {
      params[`projection${i}`] =
        i === params.dimensions
          ? params[`projection${i + 1}`] || 'stereographic'
          : 'perspective'
    }
    if (i > params.dimensions && params[`fov${i}`]) {
      delete params[`fov${i}`]
    }
    if (i > params.dimensions && params[`projection${i}`]) {
      delete params[`projection${i}`]
    }
  }
  return { params, badParams }
}
