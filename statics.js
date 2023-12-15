import { hsl } from './explorer/helpers'
import { atoi, min, pow, sign } from './explorer/math'
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
const catpuccin = [
  [10 / 360, 0.56, 0.91],
  [0 / 360, 0.59, 0.88],
  [316 / 360, 0.72, 0.86],
  [267 / 360, 0.84, 0.81],
  [343 / 360, 0.81, 0.75],
  [350 / 360, 0.65, 0.77],
  [23 / 360, 0.92, 0.75],
  [41 / 360, 0.86, 0.83],
  [115 / 360, 0.54, 0.76],
  [170 / 360, 0.57, 0.73],
  [189 / 360, 0.71, 0.73],
  [199 / 360, 0.76, 0.69],
  [217 / 360, 0.92, 0.76],
  [232 / 360, 0.97, 0.85],
]
export const defaultProjection = (dimension, dimensions) =>
  dimension === 3
    ? 'perspective'
    : dimension === dimensions
    ? 'stereographic'
    : 'orthographic'

const defaults = {
  background: [0, 0, 0, 1],
  glow: false,
  shading: 'ads',
  diffuse: 'lambert',
  specular: false,
  shininess: 32,
  opacity: 1,
  ambient: 0.2,
  roughness: 0.85,
  gouraud: false,
  transparency: 'oit',
  color: ({ word }) => hsl((word.length * 0.03) % 1, 0.75, 0.7),
}

export const ambiances = Object.fromEntries(
  Object.entries({
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
      shading: false,
      face: {
        opacity: 0.025,
      },
      transparency: 'blend',
      color: ({ word }) => hsl((word.length * 0.17) % 1, 0.5, 0.6),
    },
    disco: {
      background: [0, 0, 0, 1],
      glow: {
        exposure: 1.5,
        strength: 2,
        offset: {
          up: 2,
          down: 2,
        },
        steps: 4,
        pow: 2,
      },

      face: {
        gouraud: true,
        diffuse: 'fresnel',
        opacity: 0.025,
      },
      transparency: 'blend',
      color: ({ word }) => hsl(...catpuccin[word.length % catpuccin.length]),
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
      shading: false,
      face: {
        opacity: 0.015,
      },

      afterImage: 0.7,
      transparency: 'blend',
      color: ({ word }) =>
        hsl((0.5 - ((word.length * 0.05) % 0.5) + 0.65) % 1, 0.4, 0.6),
    },
    colorful: {
      background: [1, 1, 1, 1],
      diffuse: 'oren-nayar',
      specular: 'cook-torrance',
      shininess: 32,
      opacity: 1,
      ambient: 0.2,
      gouraud: false,
      face: {
        gouraud: true,
        opacity: 0.1,
        diffuse: 'fresnel',
        specular: false,
      },

      transparency: 'oit',
      color: ({ word }) => hsl((word.length * 0.03) % 1, 1, 0.8),
      // culling: true,
    },
    shiny: {
      background: [0, 0, 0, 1],
      diffuse: 'lambert',
      specular: 'blinn-phong',
      shininess: 32,
      opacity: 1,
      ambient: 0.2,
      gouraud: false,
      face: {
        gouraud: true,
        opacity: 0.1,
        diffuse: 'fresnel',
        specular: false,
      },

      transparency: 'oit',
      color: ({ word }) => hsl(-(word.length * 0.07) % 1, 1, 0.8),
      // culling: true,
    },
    shape: {
      background: [1, 1, 1, 1],
      transparency: 'oit',
      face: {
        gouraud: true,
        opacity: 0.1,
        diffuse: 'fresnel',
      },
      color: ({ word, len, vertices }, type) =>
        type === 'face'
          ? hsl((((len || vertices.length) - 2) * 0.21) % 1, 1, 0.8)
          : [1, 1, 1],
    },
    reflection: {
      background: [1, 1, 1, 1],
      diffuse: 'cel',
      face: {
        opacity: 0.6,
        gouraud: false,
      },
      transparency: 'blend',
      color: ({ word }, type, { dimensions, showFaces }) => {
        const h = word.length ? atoi(word[word.length - 1]) / dimensions : 0
        return hsl(h % 1, 1, type === 'face' ? 0.6 : showFaces ? 0 : 0.8)
      },
    },
    harlequin: {
      background: [...hsl(240 / 360, 0.23, 0.09), 1],
      face: {
        opacity: 0.6,
      },

      transparency: 'oit',
      color: ({ word, index }, type, { dimensions, showFaces }) => {
        const l = word
          .split('')
          .map(c => atoi(c))
          .reduce((a, b) => a + b, 0)

        const color = [...catpuccin[l % catpuccin.length]]
        if (type === 'face') {
          if (index % 2) {
            color[2] *= 0.5
          }
        }
        return hsl(...color)
      },
    },
    pure: {
      background: [0, 0, 0, 1],
      color: ({ word }) => hsl((word.length * 0.03) % 1, 0.75, 0.7),
    },
    facets: {
      background: [0, 0, 0, 1],
      color: ({ word, index }) => hsl(((index || 0) * 0.13) % 1, 0.75, 0.7),
    },
    monochrome: {
      background: [0.12, 0.12, 0.12, 1],
      diffuse: 'reverse',
      ambient: 0,
      face: {
        opacity: 0.1,
      },

      transparency: 'oit',
      color: () => [1, 1, 1],
    },
    plain: {
      extended: true,
      background: [1, 1, 1, 1],
      glow: false,
      shading: false,

      color: ({ word }, type, { dimensions, showFaces }) => {
        return hsl(
          (word.length * 0.06) % 1,
          1,
          type === 'face' ? 0.6 : showFaces ? 0.05 : 0.5
        )
      },
    },
    plainblack: {
      extended: true,
      background: [1, 1, 1, 1],
      shading: false,
      color: ({ word }, type) =>
        type === 'face'
          ? new Array(3).fill(1 - pow(0.9, word.length + 1))
          : [0, 0, 0],
    },
    normals: {
      extended: true,
      background: [1, 1, 1, 1],
      shading: 'normal',
      color: type => [0, 0, 0],
    },
    uvs: {
      extended: true,
      background: [1, 1, 1, 1],
      shading: 'uv',
      color: type => [0, 0, 0],
    },
  }).map(([name, ambiance]) => [
    name,
    {
      ...defaults,
      ...ambiance,
      transparent: {},
    },
  ])
)

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

  order: 25,
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
        i + s === 3 ? 'orthographic' : oldParams[`projection${i + s}`]
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
