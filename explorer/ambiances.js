import { atoi, pow } from './math'

export const hueToRgb = (p, q, t) => {
  if (t < 0) t += 1
  if (t > 1) t -= 1
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t
  }
  if (t < 1 / 2) {
    return q
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6
  }
  return p
}

export const hsl = (h, s, l) => {
  let r, g, b

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hueToRgb(p, q, h + 1 / 3)
    g = hueToRgb(p, q, h)
    b = hueToRgb(p, q, h - 1 / 3)
  }

  return [r, g, b]
}

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
      color: ({ word, dual }) =>
        hsl((word.length * 0.17 - (dual ? 0.43 : 0)) % 1, 0.5, 0.6),
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
    cathedral: {
      background: [0.6, 0.6, 0.6, 1],
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
        opacity: 0.9,
      },
      transparency: 'oit',
      color: ({ word, type }) =>
        type === 'face' ? hsl((word.length * 0.3) % 1, 1, 0.6) : [0, 0, 0],
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
      color: ({ word, dual }) =>
        hsl(((word.length * 0.03) % 1) - (dual ? 0.25 : 0), 1, 0.8),
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
        opacity: 0.2,
        diffuse: 'fresnel',
      },
      color: ({ faceSize, type, idx, size }) =>
        type === 'face'
          ? hsl(((faceSize - 2) * 0.21) % 1, 1, 0.8)
          : hsl(idx / size, 0.75, 0.5),
    },
    subShape: {
      background: [1, 1, 1, 1],
      transparency: 'oit',
      face: {
        gouraud: true,
        opacity: 0.2,
        diffuse: 'fresnel',
      },
      color: ({ subShape, type }) =>
        type !== 'vertex' ? hsl((subShape * 0.21) % 1, 1, 0.8) : [1, 1, 1],
    },
    reflection: {
      background: [1, 1, 1, 1],
      diffuse: 'cel',
      face: {
        opacity: 0.6,
        gouraud: false,
      },
      transparency: 'blend',
      color: ({ word, type, dimensions, draw }) => {
        const h = word.length ? atoi(word[word.length - 1]) / dimensions : 0
        return hsl(h % 1, 1, type === 'face' ? 0.6 : draw.face ? 0 : 0.8)
      },
    },
    harlequin: {
      background: [...hsl(240 / 360, 0.23, 0.09), 1],
      face: {
        opacity: 0.6,
      },

      transparency: 'oit',
      color: ({ word, idx, type }) => {
        const l = word
          .split('')
          .map(c => atoi(c))
          .reduce((a, b) => a + b, 0)

        const color = [...catpuccin[l % catpuccin.length]]
        if (idx % 2) {
          color[2] *= 0.5
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
      color: ({ faceIndex, faceSize }) =>
        hsl((faceIndex || 0) / (faceSize || 1), 0.75, 0.7),
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
    glass: {
      background: [0, 0, 0, 1],
      transparency: 'blend',
      opacity: 0.2,
      ambient: 0,
      diffuse: 'fresnel',
      specular: 'blinn-phong',
      face: {
        shininess: 16,
        diffuse: false,
      },
      color: ({ subShape, word, type }) =>
        type !== 'vertex'
          ? hsl((subShape * 0.21 + word.length * 0.03) % 1, 1, 0.8)
          : [1, 1, 1],
    },
    plain: {
      extended: true,
      background: [1, 1, 1, 1],
      glow: false,
      shading: false,

      color: ({ word, type, draw }) => {
        return hsl(
          (word.length * 0.06) % 1,
          1,
          type === 'face' ? 0.6 : draw.face ? 0.05 : 0.5
        )
      },
    },
    plainblack: {
      extended: true,
      background: [1, 1, 1, 1],
      shading: false,
      color: ({ word, type }) =>
        type === 'face'
          ? new Array(3).fill(1 - pow(0.9, word.length + 1))
          : [0, 0, 0],
    },
    normals: {
      extended: true,
      background: [1, 1, 1, 1],
      shading: 'normal',
      color: () => [0, 0, 0],
    },
    uvs: {
      extended: true,
      background: [1, 1, 1, 1],
      shading: 'uv',
      color: () => [0, 0, 0],
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
