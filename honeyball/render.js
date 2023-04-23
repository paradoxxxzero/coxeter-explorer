import {
  BackSide,
  Color,
  CylinderGeometry,
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
import { GodRayPass } from './shader/GodRayPass'
import { hyperMathMaterial } from './shader/hyperMathMaterial'

export const initializeGl = () => {
  // stats = new Stats()
  // document.body.appendChild(stats.dom)
  const renderer = new WebGLRenderer()
  renderer.autoClear = false
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  const camera = new PerspectiveCamera(
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

  const scene = new Scene()
  // scene.fog = new Fog(colors.background, 1, size)

  camera.updateProjectionMatrix()
  scene.add(camera)

  const orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.target.set(0, 0, 0)
  orbitControls.minDistance = 0
  orbitControls.maxDistance = 100
  orbitControls.addEventListener('change', () => composer.render())
  orbitControls.update()
  orbitControls.enabled = false

  renderer.domElement.addEventListener('dblclick', () => {
    orbitControls.position0.set(
      0,
      0,
      orbitControls.position0.z === -1 ? -0.25 : -1,
      0,
      0
    )
    orbitControls.reset()
  })

  const composer = new EffectComposer(renderer)
  composer.setPixelRatio(window.devicePixelRatio)
  const renderPass = new RenderPass(scene, camera)
  composer.addPass(renderPass)

  return {
    composer,
    camera,
    scene,
    orbitControls,
  }
}

export const initVertex = rt => {
  // Handle hot reload
  let existingVertex = rt.scene.getObjectByName('instanced-vertex')
  if (existingVertex) {
    console.warn('Vertex already exists, skipping init')
    return existingVertex
  }
  const ambiance = ambiances[rt.ambiance]
  const { dimensions, projection } = rt

  const vertex3dGeometry = new SphereGeometry(1e-7, 32, 32)
  vertex3dGeometry.attributes.position.array.fill(0)
  const vertexGeometry = new InstancedBufferGeometry().copy(vertex3dGeometry)
  const arity = dimensions > 4 ? 9 : dimensions
  vertexGeometry.setAttribute(
    'instancePosition',
    new InstancedBufferAttribute(
      new Float32Array(rt.maxVertices * arity),
      arity
    )
  )
  vertexGeometry.setAttribute(
    'instanceTarget',
    new InstancedBufferAttribute(
      new Float32Array(rt.maxVertices * arity),
      arity
    )
  )
  vertexGeometry.setAttribute(
    'instanceColor',
    new InstancedBufferAttribute(new Float32Array(rt.maxVertices * 3), 3)
  )

  const instancedVertex = new Mesh(
    vertexGeometry,
    hyperMathMaterial(ambiance.material, dimensions, projection)
  )
  vertexGeometry.attributes.instanceTarget.array.fill(NaN)
  instancedVertex.geometry.instanceCount = 0
  instancedVertex.frustumCulled = false
  instancedVertex.customDepthMaterial = hyperMathMaterial(
    new MeshDepthMaterial({ depthPacking: RGBADepthPacking }),
    dimensions,
    projection
  )
  instancedVertex.customDistanceMaterial = hyperMathMaterial(
    new MeshDistanceMaterial(),
    dimensions,
    projection
  )
  instancedVertex.castShadow = ambiance.shadow
  instancedVertex.name = 'instanced-vertex'
  instancedVertex.visible = rt.showVertices
  rt.scene.add(instancedVertex)
  return instancedVertex
}

export const initEdge = rt => {
  let existingEdge = rt.scene.getObjectByName('instanced-edge')
  if (existingEdge) {
    console.warn('Edge already exists, skipping init')
    return existingEdge
  }
  const ambiance = ambiances[rt.ambiance]
  const { dimensions, curve, segments, projection } = rt
  const edge3dGeometry = new CylinderGeometry(
    0,
    0,
    1,
    8,
    curve ? segments : 1,
    true
  )
  const edgeGeometry = new InstancedBufferGeometry().copy(edge3dGeometry)
  const arity = dimensions > 4 ? 9 : dimensions
  edgeGeometry.setAttribute(
    'instancePosition',
    new InstancedBufferAttribute(new Float32Array(rt.maxEdges * arity), arity)
  )
  edgeGeometry.setAttribute(
    'instanceTarget',
    new InstancedBufferAttribute(new Float32Array(rt.maxEdges * arity), arity)
  )
  edgeGeometry.setAttribute(
    'instanceColor',
    new InstancedBufferAttribute(new Float32Array(rt.maxEdges * 3), 3)
  )

  const instancedEdge = new Mesh(
    edgeGeometry,
    hyperMathMaterial(ambiance.material, dimensions, projection)
  )
  instancedEdge.geometry.instanceCount = 0
  instancedEdge.frustumCulled = false
  instancedEdge.customDepthMaterial = hyperMathMaterial(
    new MeshDepthMaterial({ depthPacking: RGBADepthPacking }),
    dimensions,
    projection
  )
  instancedEdge.customDistanceMaterial = hyperMathMaterial(
    new MeshDistanceMaterial(),
    dimensions,
    projection
  )
  instancedEdge.castShadow = ambiance.shadow
  instancedEdge.name = 'instanced-edge'
  instancedEdge.visible = rt.showEdges
  rt.scene.add(instancedEdge)
  return instancedEdge
}

export const reinitVertex = rt => {
  const oldInstancedVertex = rt.scene.getObjectByName('instanced-vertex')
  rt.scene.remove(oldInstancedVertex)
  oldInstancedVertex.geometry.dispose()
  oldInstancedVertex.material.dispose()
  const instancedVertex = initVertex(rt)
  updateMaterials({ ...rt, instancedVertex })
  return instancedVertex
}

export const reinitEdge = rt => {
  const oldInstancedEdge = rt.scene.getObjectByName('instanced-edge')
  rt.scene.remove(oldInstancedEdge)
  oldInstancedEdge.geometry.dispose()
  oldInstancedEdge.material.dispose()
  const instancedEdge = initEdge(rt)
  updateMaterials({ ...rt, instancedEdge })
  return instancedEdge
}

const plotVertices = (rt, range = null) => {
  const ambiance = ambiances[rt.ambiance]
  const instancedVertex = rt.scene.getObjectByName('instanced-vertex')
  const { dimensions } = rt
  let start = range ? range[0] : 0
  let stop = range ? range[1] : rt.vertices.length

  const arity = dimensions > 4 ? 9 : dimensions
  instancedVertex.geometry.instanceCount = stop
  for (let i = start; i < stop; i++) {
    const vertex = rt.vertices[i]
    const ipos = instancedVertex.geometry.attributes.instancePosition.array
    for (let j = 0; j < dimensions; j++) {
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

const plotEdges = (rt, range = null) => {
  const ambiance = ambiances[rt.ambiance]
  const instancedEdge = rt.scene.getObjectByName('instanced-edge')
  const { dimensions } = rt
  let start = range ? range[0] : 0
  let stop = range ? range[1] : rt.edges.length

  const arity = dimensions > 4 ? 9 : dimensions
  instancedEdge.geometry.instanceCount = stop
  for (let i = start; i < stop; i++) {
    const edge = rt.edges[i]
    const iposstart = instancedEdge.geometry.attributes.instancePosition.array
    for (let j = 0; j < dimensions; j++) {
      iposstart[i * arity + j] = edge.start[j]
    }

    const iposend = instancedEdge.geometry.attributes.instanceTarget.array
    for (let j = 0; j < dimensions; j++) {
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

export const show = (rt, name) => {
  const obj = rt.scene.getObjectByName(`instanced-${name}`)
  obj.visible = rt[name === 'vertex' ? 'showVertices' : 'showEdges']
}

export const plot = (rt, order = null) => {
  if (
    (order === null && rt.ranges.length === 0) ||
    (order !== null && order >= rt.ranges.length)
  ) {
    return
  }
  const range =
    order !== null
      ? rt.ranges[order]
      : {
          vertices: [
            rt.ranges[0].vertices[0],
            rt.ranges[rt.currentOrder - 1].vertices[1],
          ],
          edges: [
            rt.ranges[0].edges[0],
            rt.ranges[rt.currentOrder - 1].edges[1],
          ],
        }
  if (rt.scene.getObjectByName('instanced-vertex').visible) {
    plotVertices(rt, range.vertices)
  }
  if (rt.scene.getObjectByName('instanced-edge').visible) {
    plotEdges(rt, range.edges)
  }
  rt.composer.render()
  document.title = `Honeyball^${rt.dimensions} - ${rt.vertices.length} vertices, ${rt.edges.length} edges`
}

export const resetComposerTarget = rt => {
  const size = rt.composer.renderer.getDrawingBufferSize(new Vector2())
  const renderTarget = new WebGLRenderTarget(size.width, size.height, {
    samples: rt.msaa ? rt.msaaSamples : 0,
  })
  rt.composer.reset(renderTarget)
  rt.composer.render()
}

export const changeAmbiance = rt => {
  const ambiance = ambiances[rt.ambiance]
  const { scene, composer, camera, dimensions, projection } = rt
  const instancedVertex = rt.scene.getObjectByName('instanced-vertex')
  const instancedEdge = rt.scene.getObjectByName('instanced-edge')

  instancedVertex.material = hyperMathMaterial(
    ambiance.material,
    dimensions,
    projection
  )
  instancedEdge.material = hyperMathMaterial(
    ambiance.material,
    dimensions,
    projection
  )

  if (ambiance.env) {
    scene.environment = ambiance.env
  } else {
    scene.environment = null
  }
  if (typeof ambiance.background !== 'number') {
    scene.background = ambiance.background
  } else {
    scene.background = null
    composer.renderer.setClearColor(new Color(ambiance.background), 1)
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
  let ground = scene.getObjectByName('ground')

  if (ground) {
    ground.geometry.dispose()
    ground.material.dispose()
    scene.remove(ground)
  }

  if (ambiance.shadow) {
    composer.renderer.shadowMap.type = PCFShadowMap
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
    ground.name = 'ground'
    ground.receiveShadow = true
    scene.add(ground)
  }

  composer.renderer.shadowMap.enabled = ambiance.shadow
  composer.renderer.shadowMap.type = PCFSoftShadowMap
  instancedVertex.castShadow = ambiance.shadow
  instancedEdge.castShadow = ambiance.shadow
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
  composer.renderer.toneMapping = fxs.includes('bloom')
    ? ReinhardToneMapping
    : NoToneMapping
  composer.renderer.toneMappingExposure = fxs.includes('bloom') ? 1.5 : 1
  composer.passes.slice(1).forEach(pass => {
    composer.removePass(pass)
    pass.dispose()
  })
  fxs.forEach(fx => {
    if (fx === 'copy') {
      composer.addPass(composer.copyPass)
    } else if (fx === 'sao') {
      const saoPass = new SAOPass(scene, camera, false, true)
      saoPass.depthMaterial = hyperMathMaterial(
        saoPass.depthMaterial,
        dimensions,
        projection
      )
      saoPass.normalMaterial = hyperMathMaterial(
        saoPass.normalMaterial,
        dimensions,
        projection
      )
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
      bokehPass.materialDepth = hyperMathMaterial(
        bokehPass.materialDepth,
        dimensions,
        projection
      )
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
      godrayPass.materialDepth = hyperMathMaterial(
        godrayPass.materialDepth,
        dimensions,
        projection
      )
      composer.addPass(godrayPass)
    }
  })
  updateMaterials(rt)
  composer.render()
}

export const updateMaterials = ({
  composer,
  scene,
  dimensions,
  curvature,
  projection,
  curve,
  segments,
  vertexThickness,
  edgeThickness,
}) => {
  segments = curve ? segments : 1
  const instancedVertex = scene.getObjectByName('instanced-vertex')
  const instancedEdge = scene.getObjectByName('instanced-edge')
  const update = material => {
    if (!material?._dimensions) {
      return
    }
    material.uniforms.curvature.value = curvature
    material.uniforms.vertexThickness.value = vertexThickness
    material.uniforms.edgeThickness.value = edgeThickness
    if (
      dimensions !== material._dimensions ||
      projection !== material._projection
    ) {
      material._dimensions = dimensions
      material._projection = projection
      material.needsUpdate = true
    }
    material.uniforms.segments.value = segments
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
