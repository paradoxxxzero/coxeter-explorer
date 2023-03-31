import {
  AmbientLight,
  Clock,
  Color,
  CylinderGeometry,
  DirectionalLight,
  EquirectangularReflectionMapping,
  Group,
  HemisphereLight,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  NoToneMapping,
  PerspectiveCamera,
  PointLight,
  ReinhardToneMapping,
  RepeatWrapping,
  Scene,
  SphereGeometry,
  sRGBEncoding,
  TextureLoader,
  Vector2,
  WebGLRenderer,
  MeshLambertMaterial,
} from 'three'
// import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { LuminosityShader } from 'three/examples/jsm/shaders/LuminosityShader.js'
import { SobelOperatorShader } from 'three/examples/jsm/shaders/SobelOperatorShader.js'
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass'
import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { C } from './C'
import { R } from './R'
import { hyperMathMaterial } from './shader/hyperMathMaterial'
import { GodRayPass } from './shader/GodRayPass'

export let stats, renderer, camera, scene, controls, clock, composer, renderPass

const group = new Group()
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

const ambiances = {
  neon: {
    background: 0x000000,
    fx: ['fxaa', 'bloom'],
    material: new MeshBasicMaterial(),
    lights: [],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.5, 0.5)
    },
  },
  museum: {
    background: 0xffffff,
    fx: ['fxaa'],
    // material: new MeshDepthMaterial(),
    material: new MeshPhysicalMaterial({
      roughness: 0.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      map: diffuse,
      normalMap: normalMap,
    }),
    lights: [new DirectionalLight(), new HemisphereLight()],
    cameraLights: [new PointLight()],
    color: () => {
      return _color.set(0xaaaaaa)
    },
  },
  bw: {
    background: 0x000000,
    fx: ['fxaa', 'sobel'],
    material: new MeshPhongMaterial(),
    lights: [new AmbientLight(0xcccccc, 0.4)],
    cameraLights: [new PointLight(0xffffff, 1)],
    color: () => {
      return _color.set(0xffff00)
    },
  },
  colorful: {
    background: 0xffffff,
    fx: ['fxaa', 'bokeh'],
    material: new MeshPhongMaterial(),
    lights: [new AmbientLight(0xffffff, 0.5)],
    cameraLights: [new PointLight(0xffffff, 1)],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.5, 0.5)
    },
  },
  pure: {
    background: 0xffffff,
    fx: ['fxaa', 'sao'],
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
    material: new MeshBasicMaterial(),
    color: () => {
      return _color.set(0x000000)
    },
  },
  glass: {
    background: 0x000000,
    env: ocean,
    fx: ['fxaa'],
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
    fx: ['fxaa'],
    material: new MeshBasicMaterial({
      wireframe: true,
    }),
    lights: [],
    color: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.5, 0.5)
    },
  },
}

export const initialize3d = () => {
  clock = new Clock()
  // stats = new Stats()
  // document.body.appendChild(stats.dom)
  renderer = new WebGLRenderer()
  renderer.autoClear = false
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)
  camera = new PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.01,
    100
  )
  camera.position.set(0, 0, -1)
  camera.up.set(0, 1, 0)
  camera.lookAt(0, 0, 0)
  camera.zoom = Math.min(1, window.innerWidth / window.innerHeight)
  camera.updateProjectionMatrix()

  scene = new Scene()
  scene.add(group)

  // scene.fog = new Fog(colors.background, 1, size)

  camera.updateProjectionMatrix()
  scene.add(camera)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0)
  controls.minDistance = 0
  controls.maxDistance = 100
  controls.addEventListener('change', render)
  controls.update()
  controls.enabled = false

  renderer.domElement.addEventListener('dblclick', () => {
    controls.position0.set(0, 0, controls.position0.z === -1 ? -0.25 : -1, 0, 0)
    controls.reset()
  })

  composer = new EffectComposer(renderer)
  composer.setPixelRatio(window.devicePixelRatio)
  renderPass = new RenderPass(scene, camera)
  composer.addPass(renderPass)

  // controls = new FirstPersonControls(camera, renderer.domElement)
  // controls.lookSpeed = 0.2
  // animate()

  initEdge()
  initVertex()

  changeAmbiance()

  return {
    composer,
    renderer,
    scene,
    camera,
    controls,
    renderPass,
  }
}

let instancedVertex = null
let instancedEdge = null
let currentVerticesMax = 5000
let currentEdgesMax = 50000

const initVertex = () => {
  const ambiance = ambiances[C.ambiance]
  const vertex3dGeometry = new SphereGeometry(1e-7, 16, 16)
  vertex3dGeometry.attributes.position.array.fill(0)
  const vertexGeometry = new InstancedBufferGeometry().copy(vertex3dGeometry)

  vertexGeometry.setAttribute(
    'instancePosition',
    new InstancedBufferAttribute(new Float32Array(currentVerticesMax * 4), 4)
  )
  vertexGeometry.setAttribute(
    'instanceTarget',
    new InstancedBufferAttribute(new Float32Array(currentVerticesMax * 4), 4)
  )
  vertexGeometry.setAttribute(
    'instanceColor',
    new InstancedBufferAttribute(new Float32Array(currentVerticesMax * 3), 3)
  )

  instancedVertex = new Mesh(
    vertexGeometry,
    hyperMathMaterial(ambiance.material)
  )
  vertexGeometry.attributes.instanceTarget.array.fill(NaN)
  instancedVertex.geometry.instanceCount = 0
  group.add(instancedVertex)
}

const initEdge = () => {
  const ambiance = ambiances[C.ambiance]
  const edge3dGeometry = new CylinderGeometry(
    0,
    0,
    1,
    8,
    C.curve ? C.segments : 1,
    true
  )
  const edgeGeometry = new InstancedBufferGeometry().copy(edge3dGeometry)

  edgeGeometry.setAttribute(
    'instancePosition',
    new InstancedBufferAttribute(new Float32Array(currentEdgesMax * 4), 4)
  )
  edgeGeometry.setAttribute(
    'instanceTarget',
    new InstancedBufferAttribute(new Float32Array(currentEdgesMax * 4), 4)
  )
  edgeGeometry.setAttribute(
    'instanceColor',
    new InstancedBufferAttribute(new Float32Array(currentEdgesMax * 3), 3)
  )

  instancedEdge = new Mesh(edgeGeometry, hyperMathMaterial(ambiance.material))
  instancedEdge.geometry.instanceCount = 0
  group.add(instancedEdge)
}

const plotVertices = ([start, stop]) => {
  const ambiance = ambiances[C.ambiance]
  // console.info(`Plotting [${start},${stop}] vertices`)
  if (stop > currentVerticesMax) {
    currentVerticesMax = stop
    group.remove(instancedVertex)
    instancedVertex.geometry.dispose()
    instancedVertex.material.dispose()
    initVertex()
    updateMaterials()
    start = 0
  }
  instancedVertex.geometry.instanceCount = stop
  for (let i = start; i < stop; i++) {
    const vertex = R.vertices[i]
    const ipos = instancedVertex.geometry.attributes.instancePosition.array
    ipos[i * 4 + 0] = vertex.vertex[0]
    ipos[i * 4 + 1] = vertex.vertex[1]
    ipos[i * 4 + 2] = vertex.vertex[2]
    ipos[i * 4 + 3] = C.dimensions === 3 ? 1 : vertex.vertex[3]

    const icolor = instancedVertex.geometry.attributes.instanceColor.array
    ambiance.color(vertex, 'vertex')
    icolor[i * 3 + 0] = _color.r
    icolor[i * 3 + 1] = _color.g
    icolor[i * 3 + 2] = _color.b
  }
  instancedVertex.geometry.attributes.instancePosition.needsUpdate = true
  instancedVertex.geometry.attributes.instanceColor.needsUpdate = true
}

const plotEdges = ([start, stop], segmentsChanged = false) => {
  const ambiance = ambiances[C.ambiance]
  // console.info(`Plotting [${start},${stop}] edges (${allStop})`)

  if (stop > currentEdgesMax || segmentsChanged) {
    currentEdgesMax = stop
    instancedEdge.geometry.dispose()
    instancedEdge.material.dispose()
    group.remove(instancedEdge)
    initEdge()
    updateMaterials()
    start = 0
  }
  instancedEdge.geometry.instanceCount = stop
  for (let i = start; i < stop; i++) {
    const edge = R.edges[i]
    const iposstart = instancedEdge.geometry.attributes.instancePosition.array
    iposstart[i * 4 + 0] = edge.start[0]
    iposstart[i * 4 + 1] = edge.start[1]
    iposstart[i * 4 + 2] = edge.start[2]
    iposstart[i * 4 + 3] = C.dimensions === 3 ? 1 : edge.start[3]
    const iposend = instancedEdge.geometry.attributes.instanceTarget.array
    iposend[i * 4 + 0] = edge.end[0]
    iposend[i * 4 + 1] = edge.end[1]
    iposend[i * 4 + 2] = edge.end[2]
    iposend[i * 4 + 3] = C.dimensions === 3 ? 1 : edge.end[3]

    const icolor = instancedEdge.geometry.attributes.instanceColor.array
    ambiance.color(edge, 'edge')
    icolor[i * 3 + 0] = _color.r
    icolor[i * 3 + 1] = _color.g
    icolor[i * 3 + 2] = _color.b
  }

  instancedEdge.geometry.attributes.instancePosition.needsUpdate = true
  instancedEdge.geometry.attributes.instanceTarget.needsUpdate = true
  instancedEdge.geometry.attributes.instanceColor.needsUpdate = true
}

export const plot = (arg, segmentsChanged = false) => {
  let vertices, edges
  if (arg === true) {
    vertices = [0, R.vertices.length]
    edges = [0, R.edges.length]
  } else {
    vertices = arg.vertices
    edges = arg.edges
  }
  instancedVertex.visible = C.vertices
  if (C.vertices) {
    plotVertices(vertices)
  }
  instancedEdge.visible = C.edges
  if (C.edges) {
    plotEdges(edges, segmentsChanged)
  }
}
export const changeAmbiance = () => {
  const ambiance = ambiances[C.ambiance]
  if (ambiance.env) {
    scene.background = ambiance.env
  } else {
    scene.background = null
  }
  renderer.setClearColor(new Color(ambiance.background), 1)
  // Remove all lights
  const lightsToRemove = []
  scene.traverse(child => {
    if (child.isLight) {
      lightsToRemove.push(child)
    }
  })
  lightsToRemove.forEach(light => {
    light.parent.remove(light)
  })
  // Add new lights
  ;(ambiance.lights || []).forEach(light => {
    scene.add(light)
  })
  ;(ambiance.cameraLights || []).forEach(light => {
    camera.add(light)
  })
  renderer.toneMapping = ambiance.fx.includes('bloom')
    ? ReinhardToneMapping
    : NoToneMapping
  renderer.toneMappingExposure = ambiance.fx.includes('bloom') ? 1.5 : 1
  composer.passes.slice(1).forEach(pass => {
    composer.removePass(pass)
    pass.dispose()
  })
  ambiance.fx.forEach(fx => {
    if (fx === 'fxaa') {
      const fxaaPass = new ShaderPass(FXAAShader)
      const pixelRatio = renderer.getPixelRatio()
      fxaaPass.material.uniforms['resolution'].value.x =
        1 / (window.innerWidth * pixelRatio)
      fxaaPass.material.uniforms['resolution'].value.y =
        1 / (window.innerHeight * pixelRatio)
      composer.addPass(fxaaPass)
    } else if (fx === 'sao') {
      const saoPass = new SAOPass(scene, camera, false, true)
      saoPass.depthMaterial = hyperMathMaterial(saoPass.depthMaterial)
      saoPass.normalMaterial = hyperMathMaterial(saoPass.normalMaterial)
      saoPass.params.output = SAOPass.OUTPUT.Default

      saoPass.params.saoIntensity = 0.1
      saoPass.params.saoScale = 10
      saoPass.params.saoKernelRadius = 10
      saoPass.params.saoMinResolution = 0
      saoPass.params.saoBlur = true
      saoPass.params.saoBlurRadius = 8
      saoPass.params.saoBlurStdDev = 4
      saoPass.params.saoBlurDepthCutoff = 0.01
      composer.addPass(saoPass)
    } else if (fx === 'bokeh') {
      const bokehPass = new BokehPass(scene, camera, {
        focus: 0.5,
        aperture: 0.005,
        maxblur: 0.005,
      })
      bokehPass.materialDepth = hyperMathMaterial(bokehPass.materialDepth)
      composer.addPass(bokehPass)
    } else if (fx === 'sobel') {
      const effectGrayScale = new ShaderPass(LuminosityShader)
      composer.addPass(effectGrayScale)

      // you might want to use a gaussian blur filter before
      // the next pass to improve the result of the Sobel operator

      // Sobel operator

      const effectSobel = new ShaderPass(SobelOperatorShader)
      effectSobel.uniforms['resolution'].value.x =
        window.innerWidth * window.devicePixelRatio
      effectSobel.uniforms['resolution'].value.y =
        window.innerHeight * window.devicePixelRatio
      composer.addPass(effectSobel)
    } else if (fx === 'bloom') {
      const bloomPass = new UnrealBloomPass(
        new Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0,
        0
      )
      composer.addPass(bloomPass)
    } else if (fx === 'godray') {
      const godrayPass = new GodRayPass(scene, camera)
      godrayPass.materialDepth = hyperMathMaterial(godrayPass.materialDepth)
      composer.addPass(godrayPass)
    }
  })

  // Update materials
  instancedVertex.material = hyperMathMaterial(ambiance.material)
  instancedEdge.material = hyperMathMaterial(ambiance.material)
  updateMaterials()
  plot(true)
  render()
}

export const updateMaterials = () => {
  const update = material => {
    if (!material?._dimensions) {
      return
    }
    material.uniforms.curvature.value = R.curvature
    material.uniforms.vertexThickness.value = C.vertexThickness
    material.uniforms.edgeThickness.value = C.edgeThickness
    if (
      C.dimensions !== material._dimensions ||
      C.projection !== material._projection
    ) {
      material._dimensions = C.dimensions
      material._projection = C.projection
      material.needsUpdate = true
    }
    material.uniforms.segments.value = C.curve ? C.segments : 1
  }

  update(instancedVertex.material)
  update(instancedEdge.material)
  composer.passes.forEach(pass =>
    Object.values(pass)
      .filter(value => value?.isMaterial)
      .forEach(value => update(value))
  )
}

export const render = () => {
  // const delta = clock.getDelta()
  // stats.begin()
  composer.render()
  // controls.update(delta)
  // stats.end()
}

export const animate = () => {
  requestAnimationFrame(animate)
  render()
}
