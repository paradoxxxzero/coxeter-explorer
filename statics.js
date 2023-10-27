import {
  AddEquation,
  AmbientLight,
  Color,
  CustomBlending,
  DirectionalLight,
  DoubleSide,
  EquirectangularReflectionMapping,
  Euler,
  HemisphereLight,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  MeshToonMaterial,
  OneMinusSrcAlphaFactor,
  PointLight,
  RepeatWrapping,
  SpotLight,
  SrcAlphaFactor,
  SRGBColorSpace,
  TextureLoader,
} from 'three'
import { atoi, itoa, min, PI } from './explorer/math'
import { ident } from './explorer/math/matrix'
import { mirrorChars } from './explorer/mirrors'

export const projections = [
  'stereographic',
  'orthographic',
  'klein',
  'inverted',
  'jemisphere',
  'upperhalf',
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

const _color = new Color()
const loader = new TextureLoader()

const diffuse = loader.load('Carbon.png')
diffuse.colorSpace = SRGBColorSpace
diffuse.wrapS = RepeatWrapping
diffuse.wrapT = RepeatWrapping
diffuse.repeat.x = 10
diffuse.repeat.y = 10

const normalMap = loader.load('Carbon_Normal.png')
normalMap.wrapS = RepeatWrapping
normalMap.wrapT = RepeatWrapping

const ocean = loader.load('ocean.jpg')
ocean.colorSpace = SRGBColorSpace
ocean.mapping = EquirectangularReflectionMapping

const dimensionsRegExps = [...new Array(10).keys()].map(
  i => new RegExp(itoa(i), 'g')
)

export const ambiances = {
  neon: {
    background: 0x000000,
    fx: ['bloom'],
    shadow: false,
    material: new MeshBasicMaterial(),
    lights: [],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.5, 0.5)
    },
  },
  colorful: {
    background: 0xffffff,
    shadow: false,
    material: new MeshPhongMaterial(),
    lights: [new AmbientLight(0xffffff, 0.5)],
    cameraLights: [new PointLight(0xffffff, 2.5, 0, 0)],
    color: ({ word }, type, dimensions) => {
      return _color.setHSL((word.length * 0.03) % 1, 1, 0.8)
      // const i = word.match(dimensionsRegExps[dimensions - 1])?.length || 0
      // return _color.setHSL((i * 0.07) % 1, 0.5, 0.5)
    },
    faceMaterial: new MeshPhongMaterial({
      side: DoubleSide,
      transparent: true,
      opacity: 0.75,
    }),
  },
  reflection: {
    background: 0xffffff,
    shadow: false,
    material: new MeshToonMaterial(),
    lights: [new AmbientLight(0xffffff, 0.75)],
    cameraLights: [new PointLight(0xffffff, 2.5, 0, 0)],
    color: ({ word }, type, dimensions) => {
      // const h = word.length ? atoi(word[0]) / dimensions : 0

      // let h = 0
      // for (let i = 0; i < dimensions; i++) {
      //   const count = (word.match(dimensiosRegExps[i]) || []).length
      //   h += ((count / 10) * i) / dimensions
      // }

      // Get the character with the highest count
      // const counts = dimensionsRegExps.map(r => (word.match(r) || []).length)
      // const max = Math.max(...counts)
      // const h = counts.indexOf(max) / dimensions
      const h = word.length ? atoi(word[word.length - 1]) / dimensions : 0

      return _color.setHSL(h % 1, 1, 0.8)
    },
  },
  projection: {
    background: 0xffffff,
    ground: 'sphere',
    shadow: true,
    material: new MeshPhongMaterial({
      transparent: true,
      opacity: 0.75,
      blending: CustomBlending,
    }),

    lights: [new PointLight(0xffffff, 4, 0, 0)],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.5, 0.5)
    },
  },
  bw: {
    background: 0x000000,
    fx: ['sobel'],
    shadow: false,
    material: new MeshPhongMaterial(),
    lights: [new AmbientLight(0xcccccc)],
    cameraLights: [new PointLight(0xffffff, 3, 0, 0)],
    color: () => {
      return _color.set(0xffff00)
    },
  },
  pure: {
    background: 0,
    fx: ['sao'],
    shadow: false,
    material: new MeshLambertMaterial(),
    cameraLights: [new PointLight(0xffffff, 3)],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.03) % 1, 0.75, 0.7)
    },
    faceMaterial: new MeshLambertMaterial({
      side: DoubleSide,
    }),
  },
  glass: {
    extended: true,
    background: ocean,
    env: ocean,
    shadow: false,
    material: new MeshPhysicalMaterial({
      premultipliedAlpha: false,
      reflectivity: 0,
      metalness: 0,
      roughness: 0,
      transmission: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      thickness: 1,
      ior: 1.5,
    }),
    lights: [new DirectionalLight(), new HemisphereLight()],
    color: () => {
      return _color.set(0xeeeeee)
    },
  },
  museum: {
    extended: true,
    background: 0xbbbbbb,
    env: ocean,
    shadow: true,
    ground: 'plane',
    material: new MeshPhysicalMaterial({
      roughness: 0.5,
      reflectivity: 0.25,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      map: diffuse,
      normalMap: normalMap,
    }),
    lights: [
      ...new Array(3).fill().map((_, i, a) => {
        const angle = (2 * PI) / a.length
        const r = 6
        const light = new SpotLight(0xffffff, 60)
        light.position.set(3, 0, r)
        light.position.applyEuler(new Euler(angle * i, PI / 6, 0, 'YXZ'))
        light.lookAt(0, 0, 0)
        return light
      }),
      new AmbientLight(0xffffff, 1.25),
    ],
    color: () => {
      return _color.set(0xffffff)
    },
  },
  bokeh: {
    extended: true,
    background: 0xffffff,
    fx: ['bokeh'],
    shadow: false,
    material: new MeshPhongMaterial(),
    lights: [new AmbientLight(0xffffff, 1.5)],
    cameraLights: [new PointLight(0xffffff, 3)],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.7, 0.5)
    },
  },
  // transcendent: {
  //   extended: true,
  //   background: 0xffffff,
  //   fx: ['godray'],
  //   shadow: false,
  //   material: new MeshBasicMaterial(),
  //   color: () => {
  //     return _color.set(0x000000)
  //   },
  // },
  plain: {
    extended: true,
    background: 0xffffff,
    shadow: false,
    material: new MeshBasicMaterial(),
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.06) % 1, 0.7, 0.5)
    },
  },
  wireframe: {
    extended: true,
    background: 0x000000,
    shadow: false,
    material: new MeshBasicMaterial({
      wireframe: true,
    }),
    lights: [],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.5, 0.5)
    },
  },
}
Object.values(ambiances).forEach(ambiance => {
  if (!ambiance.vertexMaterial) {
    ambiance.vertexMaterial = ambiance.material
  }
  if (!ambiance.edgeMaterial) {
    ambiance.edgeMaterial = ambiance.material
  }
  if (!ambiance.faceMaterial) {
    ambiance.faceMaterial = ambiance.material.clone()
    ambiance.faceMaterial.side = DoubleSide
    ambiance.faceMaterial.transparent = true
    ambiance.faceMaterial.opacity = 0.5
    ambiance.faceMaterial.blending = CustomBlending
    ambiance.faceMaterial.blendEquation = AddEquation
    ambiance.faceMaterial.blendSrc = SrcAlphaFactor
    ambiance.faceMaterial.blendDst = OneMinusSrcAlphaFactor

    ambiance.faceMaterial.depthWrite = false
    // ambiance.faceMaterial.depthTest = false
  }
})

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
  projection: 'stereographic',
  controls: 'space',
  ambiance: 'neon',
  centered: null,

  zoom: 1.5,
  fov3: 90,
  fov4: 90,

  msaa: window.devicePixelRatio <= 1,
  msaaSamples: 8,
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

export const filterParams = maybeBadParams => {
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
        if (value.find(c => c.find(d => value === '' || isNaN(d)))) {
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
  normalizeCoxeter(params)

  if (
    params.matrix.length !== params.dimensions ||
    params.matrix.some(r => r.length !== params.dimensions)
  ) {
    params.matrix = ident(params.dimensions)
  }
  for (let i = 4; i <= 9; i++) {
    if (
      i <= params.dimensions &&
      !params[`fov${i}`] &&
      !badParams.includes(`fov${i}`)
    ) {
      params[`fov${i}`] = i === 4 ? 90 : 45
    }
    if (i > params.dimensions && params[`fov${i}`]) {
      delete params[`fov${i}`]
    }
  }
  return { params, badParams }
}
