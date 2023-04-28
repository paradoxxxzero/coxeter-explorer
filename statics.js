import {
  AmbientLight,
  Color,
  CustomBlending,
  DirectionalLight,
  EquirectangularReflectionMapping,
  HemisphereLight,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  PointLight,
  RepeatWrapping,
  SpotLight,
  sRGBEncoding,
  TextureLoader,
} from 'three'

export const projections = [
  'stereographic',
  'orthographic',
  'klein',
  'inverted',
  'jemisphere',
  'upperhalf',
]

export const groupers = ['knuthbendix', 'toddcoxeter']

const _color = new Color()
const loader = new TextureLoader()

const diffuse = loader.load('Carbon.png')
diffuse.encoding = sRGBEncoding
diffuse.wrapS = RepeatWrapping
diffuse.wrapT = RepeatWrapping
diffuse.repeat.x = 10
diffuse.repeat.y = 10

const normalMap = loader.load('Carbon_Normal.png')
normalMap.wrapS = RepeatWrapping
normalMap.wrapT = RepeatWrapping

const ocean = loader.load('ocean.jpg')
ocean.encoding = sRGBEncoding
ocean.mapping = EquirectangularReflectionMapping

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
  museum: {
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
      (() => {
        const light = new SpotLight(0xffffff, 0.2)
        light.position.set(0, 4, -6)
        return light
      })(),
      (() => {
        const light = new SpotLight(0xffffff, 0.2)
        light.position.set(8, 7, 0)
        return light
      })(),
      (() => {
        const light = new SpotLight(0xffffff, 0.2)
        light.position.set(-4, 6, 2)
        return light
      })(),
      new AmbientLight(0xffffff, 0.4),
    ],
    cameraLights: [
      (() => {
        const light = new PointLight(0xffffff, 2.5, 5, 5)
        light.shadow = null
        return light
      })(),
    ],
    color: () => {
      return _color.set(0xffffff)
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

    lights: [new PointLight()],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.5, 0.5)
    },
  },
  bw: {
    background: 0x000000,
    fx: ['sobel'],
    shadow: false,
    material: new MeshPhongMaterial(),
    lights: [new AmbientLight(0xcccccc, 0.4)],
    cameraLights: [new PointLight(0xffffff, 1)],
    color: () => {
      return _color.set(0xffff00)
    },
  },
  colorful: {
    background: 0xffffff,
    shadow: false,
    material: new MeshPhongMaterial(),
    lights: [new AmbientLight(0xffffff, 1)],
    cameraLights: [new PointLight(0xffffff, 0.5)],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.03) % 1, 0.5, 0.5)
    },
  },
  bokeh: {
    background: 0xffffff,
    fx: ['bokeh'],
    shadow: false,
    material: new MeshPhongMaterial(),
    lights: [new AmbientLight(0xffffff, 0.5)],
    cameraLights: [new PointLight(0xffffff, 1)],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.7, 0.5)
    },
  },
  pure: {
    background: 0xffffff,
    fx: ['sao'],
    shadow: false,
    material: new MeshLambertMaterial(),
    lights: [new AmbientLight(0x000000, 0.5)],
    cameraLights: [new PointLight(0xffffff, 1)],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.03) % 1, 0.75, 0.7)
    },
  },
  transcendent: {
    background: 0xffffff,
    fx: ['godray'],
    shadow: false,
    material: new MeshBasicMaterial(),
    color: () => {
      return _color.set(0x000000)
    },
  },
  glass: {
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
      return _color.set(0xaaaaaa)
    },
  },
  wireframe: {
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

export const defaultParams = {
  dimensions: 4,
  coxeter: [
    [-1, 5, 2, 2],
    [5, -1, 3, 2],
    [2, 3, -1, 4],
    [2, 2, 4, -1],
  ],
  stellation: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  mirrors: [1, 0, 0, 0],
  extended: false,
  stellated: false,

  order: 10,
  segments: 32,
  curve: true,
  showVertices: false,
  vertexThickness: 75,
  showEdges: true,
  edgeThickness: 25,

  grouper: 'knuthbendix',
  projection: 'stereographic',
  controls: 'orbit',
  controlsShift: 0,
  ambiance: 'neon',

  fov3: 90,
  fov4: 90,
  msaa: window.devicePixelRatio <= 1,
  msaaSamples: 8,
}

export const filterParams = maybeBadParams => {
  const params = {
    ...maybeBadParams,
  }
  // Remove bad params
  Object.entries(params).map(([key, value]) => {
    if (typeof defaultParams[key] === 'number') {
      if (!value || isNaN(value)) {
        delete params[key]
      }
    } else if (Array.isArray(defaultParams[key])) {
      // arrays of arrays of numbers
      if (Array.isArray(value[0])) {
        if (value.find(c => c.find(d => !value || isNaN(d)))) {
          delete params[key]
        }
      } else {
        // arrays of numbers
        if (value.find(c => !value || isNaN(c))) {
          delete params[key]
        }
      }
    }
  })
  return params
}
