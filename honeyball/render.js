import {
  BackSide,
  Clock,
  Color,
  CylinderGeometry,
  Group,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  Mesh,
  MeshDepthMaterial,
  MeshDistanceMaterial,
  MeshPhongMaterial,
  NoToneMapping,
  PCFShadowMap,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  ReinhardToneMapping,
  RGBADepthPacking,
  Scene,
  SphereGeometry,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three'
// import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { LuminosityShader } from 'three/examples/jsm/shaders/LuminosityShader.js'
import { SobelOperatorShader } from 'three/examples/jsm/shaders/SobelOperatorShader.js'
import { ambiances } from '../statics'
import { C } from './C'
import { R } from './R'
import { GodRayPass } from './shader/GodRayPass'
import { hyperMathMaterial } from './shader/hyperMathMaterial'

export let stats,
  renderer,
  camera,
  scene,
  controls,
  clock,
  composer,
  renderPass,
  ground

const group = new Group()

export const initialize3d = () => {
  // Hack for strict mode
  if (renderer) {
    return {
      composer,
      renderer,
      camera,
      controls,
    }
  }
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

  // changeAmbiance()

  return {
    composer,
    renderer,
    camera,
    controls,
    first: true,
  }
}

let instancedVertex = null
let instancedEdge = null
let currentVerticesMax = 5000
let currentEdgesMax = 50000

const initVertex = () => {
  const ambiance = ambiances[C.ambiance]
  const vertex3dGeometry = new SphereGeometry(1e-7, 32, 32)
  vertex3dGeometry.attributes.position.array.fill(0)
  const vertexGeometry = new InstancedBufferGeometry().copy(vertex3dGeometry)
  const arity = C.dimensions > 4 ? 9 : C.dimensions
  vertexGeometry.setAttribute(
    'instancePosition',
    new InstancedBufferAttribute(
      new Float32Array(currentVerticesMax * arity),
      arity
    )
  )
  vertexGeometry.setAttribute(
    'instanceTarget',
    new InstancedBufferAttribute(
      new Float32Array(currentVerticesMax * arity),
      arity
    )
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
  instancedVertex.frustumCulled = false
  instancedVertex.customDepthMaterial = hyperMathMaterial(
    new MeshDepthMaterial({ depthPacking: RGBADepthPacking })
  )
  instancedVertex.customDistanceMaterial = hyperMathMaterial(
    new MeshDistanceMaterial()
  )
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
  const arity = C.dimensions > 4 ? 9 : C.dimensions
  edgeGeometry.setAttribute(
    'instancePosition',
    new InstancedBufferAttribute(
      new Float32Array(currentEdgesMax * arity),
      arity
    )
  )
  edgeGeometry.setAttribute(
    'instanceTarget',
    new InstancedBufferAttribute(
      new Float32Array(currentEdgesMax * arity),
      arity
    )
  )
  edgeGeometry.setAttribute(
    'instanceColor',
    new InstancedBufferAttribute(new Float32Array(currentEdgesMax * 3), 3)
  )

  instancedEdge = new Mesh(edgeGeometry, hyperMathMaterial(ambiance.material))
  instancedEdge.geometry.instanceCount = 0
  instancedEdge.frustumCulled = false
  instancedEdge.customDepthMaterial = hyperMathMaterial(
    new MeshDepthMaterial({ depthPacking: RGBADepthPacking })
  )
  instancedEdge.customDistanceMaterial = hyperMathMaterial(
    new MeshDistanceMaterial()
  )
  group.add(instancedEdge)
}

const plotVertices = ([start, stop], reinit = false) => {
  const ambiance = ambiances[C.ambiance]
  // console.info(`Plotting [${start},${stop}] vertices`)
  if (stop > currentVerticesMax || reinit) {
    currentVerticesMax = stop
    group.remove(instancedVertex)
    instancedVertex.geometry.dispose()
    instancedVertex.material.dispose()
    initVertex()

    instancedVertex.castShadow = ambiance.shadow
    updateMaterials()
    start = 0
  }
  const arity = C.dimensions > 4 ? 9 : C.dimensions
  instancedVertex.geometry.instanceCount = stop
  for (let i = start; i < stop; i++) {
    const vertex = R.vertices[i]
    const ipos = instancedVertex.geometry.attributes.instancePosition.array
    for (let j = 0; j < C.dimensions; j++) {
      ipos[i * arity + j] = vertex.vertex[j]
    }
    const icolor = instancedVertex.geometry.attributes.instanceColor.array
    const c = ambiance.color(vertex, 'vertex')
    icolor[i * 3 + 0] = c.r
    icolor[i * 3 + 1] = c.g
    icolor[i * 3 + 2] = c.b
  }
  instancedVertex.geometry.attributes.instancePosition.needsUpdate = true
  instancedVertex.geometry.attributes.instanceColor.needsUpdate = true
}

const plotEdges = ([start, stop], reinit = false) => {
  const ambiance = ambiances[C.ambiance]
  // console.info(`Plotting [${start},${stop}] edges (${allStop})`)

  if (stop > currentEdgesMax || reinit) {
    currentEdgesMax = stop
    instancedEdge.geometry.dispose()
    instancedEdge.material.dispose()
    group.remove(instancedEdge)
    initEdge()
    instancedEdge.castShadow = ambiance.shadow
    updateMaterials()
    start = 0
  }
  const arity = C.dimensions > 4 ? 9 : C.dimensions
  instancedEdge.geometry.instanceCount = stop
  for (let i = start; i < stop; i++) {
    const edge = R.edges[i]
    const iposstart = instancedEdge.geometry.attributes.instancePosition.array
    for (let j = 0; j < C.dimensions; j++) {
      iposstart[i * arity + j] = edge.start[j]
    }

    const iposend = instancedEdge.geometry.attributes.instanceTarget.array
    for (let j = 0; j < C.dimensions; j++) {
      iposend[i * arity + j] = edge.end[j]
    }

    const icolor = instancedEdge.geometry.attributes.instanceColor.array
    const c = ambiance.color(edge, 'edge')
    icolor[i * 3 + 0] = c.r
    icolor[i * 3 + 1] = c.g
    icolor[i * 3 + 2] = c.b
  }

  instancedEdge.geometry.attributes.instancePosition.needsUpdate = true
  instancedEdge.geometry.attributes.instanceTarget.needsUpdate = true
  instancedEdge.geometry.attributes.instanceColor.needsUpdate = true
}

export const plot = (arg, reinit = false) => {
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
    plotVertices(vertices, reinit)
  }
  instancedEdge.visible = C.edges
  if (C.edges) {
    plotEdges(edges, reinit)
  }
}

export const resetComposerTarget = () => {
  const size = renderer.getDrawingBufferSize(new Vector2())
  const renderTarget = new WebGLRenderTarget(size.width, size.height, {
    samples: C.msaa ? C.msaaSamples : 0,
  })
  composer.reset(renderTarget)
}

export const changeAmbiance = () => {
  const ambiance = ambiances[C.ambiance]
  if (ambiance.env) {
    scene.environment = ambiance.env
  } else {
    scene.environment = null
  }
  if (typeof ambiance.background !== 'number') {
    scene.background = ambiance.background
  } else {
    scene.background = null
    renderer.setClearColor(new Color(ambiance.background), 1)
  }
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
  if (ground) {
    ground.geometry.dispose()
    ground.material.dispose()
    scene.remove(ground)
  }
  if (ambiance.shadow) {
    renderer.shadowMap.type = PCFShadowMap
    if (ambiance.ground === 'sphere') {
      ground = new Mesh(
        new SphereGeometry(20, 32, 32),
        new MeshPhongMaterial({
          color: 0xffffff,
          side: BackSide,
          depthWrite: false,
        })
      )
    } else if (ambiance.ground === 'plane') {
      ground = new Mesh(
        new PlaneGeometry(1000, 1000),
        new MeshPhongMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.5,
          // blending: MultiplyBlending,
          depthWrite: false,
        })
      )
      ground.rotation.x = -Math.PI / 2
      ground.position.y = -3
    }
    ground.receiveShadow = true
    scene.add(ground)
  } else {
    ground = null
  }

  renderer.shadowMap.enabled = ambiance.shadow
  renderer.shadowMap.type = PCFSoftShadowMap
  instancedEdge.castShadow = ambiance.shadow
  instancedVertex.castShadow = ambiance.shadow
  // Add new lights
  const castShadow = ambiance.shadow
    ? light => {
        if (!light.shadow) {
          return
        }
        light.castShadow = true
        light.shadow.mapSize.width = 2048
        light.shadow.mapSize.height = 2048
        light.shadow.camera.near = camera.near
        light.shadow.camera.far = camera.far
        light.shadow.camera.fov = camera.fov
      }
    : () => {}

  ;(ambiance.lights || []).forEach(light => {
    castShadow(light)
    scene.add(light)
  })
  ;(ambiance.cameraLights || []).forEach(light => {
    castShadow(light)
    camera.add(light)
  })
  const fxs = ambiance.fx || ['copy']
  renderer.toneMapping = fxs.includes('bloom')
    ? ReinhardToneMapping
    : NoToneMapping
  renderer.toneMappingExposure = fxs.includes('bloom') ? 1.5 : 1
  composer.passes.slice(1).forEach(pass => {
    composer.removePass(pass)
    pass.dispose()
  })
  fxs.forEach(fx => {
    if (fx === 'copy') {
      composer.addPass(composer.copyPass)
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
  plot(true, true)
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
  update(instancedVertex.customDepthMaterial)
  update(instancedVertex.customDistanceMaterial)
  update(instancedEdge.customDepthMaterial)
  update(instancedEdge.customDistanceMaterial)
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
