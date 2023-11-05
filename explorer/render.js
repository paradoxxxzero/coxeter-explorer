import {
  BackSide,
  BufferGeometry,
  Color,
  CylinderGeometry,
  Float32BufferAttribute,
  HalfFloatType,
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
  SRGBColorSpace,
  Vector2,
  WebGLRenderer,
  WebGLRenderTarget,
  LinearSRGBColorSpace,
} from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { LuminosityShader } from 'three/examples/jsm/shaders/LuminosityShader.js'
import { SobelOperatorShader } from 'three/examples/jsm/shaders/SobelOperatorShader.js'
import { degToRad } from 'three/src/math/MathUtils'
import { ambiances } from '../statics'
import { tan } from './math'
import { columnMajor, multiplyVector } from './math/matrix'
import { GodRayPass } from './shader/GodRayPass'
import { hyperMaterial, hyperMaterials } from './shader/hyperMaterial'

const showStats = window.location.search.includes('stats')

export const initializeGl = () => {
  let stats
  if (showStats) {
    stats = new Stats()
    stats.dom.id = 'stats'
    document.body.appendChild(stats.dom)
  }
  const renderer = new WebGLRenderer({
    stencil: false,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  const camera = new PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  )
  camera.position.set(0, 0, -1)
  camera.up.set(1, 0, 0)
  camera.lookAt(0, 0, 0)
  camera.zoom = Math.min(1, window.innerWidth / window.innerHeight)
  camera.updateProjectionMatrix()

  const scene = new Scene()

  camera.updateProjectionMatrix()
  scene.add(camera)

  // scene.add(
  //   new Mesh(
  //     new SphereGeometry(1, 32, 32),
  //     new MeshPhongMaterial({
  //       color: 0xff0000,
  //       transparent: true,
  //       opacity: 0.25,
  //       side: DoubleSide,
  //     })
  //   )
  // )

  const composer = new EffectComposer(renderer)
  composer.setPixelRatio(window.devicePixelRatio)
  const renderPass = new RenderPass(scene, camera)
  composer.addPass(renderPass)

  const render = showStats
    ? () => {
        stats.update()
        composer.render()
        // stats.end()
      }
    : () => composer.render()

  return {
    composer,
    camera,
    scene,
    render,
  }
}

export const initVertex = rt => {
  let existingVertex = rt.scene.getObjectByName('instanced-vertex')
  if (existingVertex) {
    rt.scene.remove(existingVertex)
    existingVertex.geometry.dispose()
    existingVertex.material.dispose()
    existingVertex.customDepthMaterial.dispose()
    existingVertex.customDistanceMaterial.dispose()
  }
  const ambiance = ambiances[rt.ambiance]
  const { dimensions } = rt

  const vertex3dGeometry = new SphereGeometry(1, 32, 32)
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
    'instanceCentroid',
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
    hyperMaterial(ambiance.vertexMaterial, rt, 'vertex')
  )
  instancedVertex.matrixAutoUpdate = false
  instancedVertex.matrixWorldAutoUpdate = false
  vertexGeometry.attributes.instanceTarget.array.fill(NaN)
  vertexGeometry.attributes.instanceCentroid.array.fill(NaN)
  instancedVertex.geometry.instanceCount = 0
  instancedVertex.frustumCulled = false
  instancedVertex.customDepthMaterial = hyperMaterial(
    new MeshDepthMaterial({ depthPacking: RGBADepthPacking }),
    rt,
    'vertex'
  )
  instancedVertex.customDistanceMaterial = hyperMaterial(
    new MeshDistanceMaterial(),
    rt,
    'vertex'
  )
  instancedVertex.castShadow = ambiance.shadow
  instancedVertex.name = 'instanced-vertex'
  instancedVertex.visible = rt.showVertices
  rt.scene.add(instancedVertex)
}

export const initEdge = rt => {
  let existingEdge = rt.scene.getObjectByName('instanced-edge')
  if (existingEdge) {
    rt.scene.remove(existingEdge)
    existingEdge.geometry.dispose()
    existingEdge.material.dispose()
    existingEdge.customDepthMaterial.dispose()
    existingEdge.customDistanceMaterial.dispose()
  }
  const ambiance = ambiances[rt.ambiance]
  const { dimensions, curve, segments: rawSegments } = rt
  const segments = curve ? rawSegments : 1
  const edge3dGeometry = new CylinderGeometry(1, 1, 1, 8, segments, true)
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
    'instanceCentroid',
    new InstancedBufferAttribute(new Float32Array(rt.maxEdges * arity), arity)
  )
  edgeGeometry.setAttribute(
    'instanceColor',
    new InstancedBufferAttribute(new Float32Array(rt.maxEdges * 3), 3)
  )

  const instancedEdge = new Mesh(
    edgeGeometry,
    hyperMaterial(ambiance.edgeMaterial, rt, 'edge')
  )
  instancedEdge.matrixAutoUpdate = false
  instancedEdge.matrixWorldAutoUpdate = false
  edgeGeometry.attributes.instanceCentroid.array.fill(NaN)
  instancedEdge.geometry.instanceCount = 0
  instancedEdge.frustumCulled = false
  instancedEdge.customDepthMaterial = hyperMaterial(
    new MeshDepthMaterial({ depthPacking: RGBADepthPacking }),
    rt,
    'edge'
  )
  instancedEdge.customDistanceMaterial = hyperMaterial(
    new MeshDistanceMaterial(),
    rt,
    'edge'
  )
  instancedEdge.castShadow = ambiance.shadow
  instancedEdge.name = 'instanced-edge'
  instancedEdge.visible = rt.showEdges
  rt.scene.add(instancedEdge)
}

export const initFace = rt => {
  let overridenOpacity = null
  let existingFace = rt.scene.getObjectByName('instanced-face')
  if (existingFace) {
    overridenOpacity = existingFace.material.opacity
    rt.scene.remove(existingFace)
    existingFace.geometry.dispose()
    existingFace.material.dispose()
    existingFace.customDepthMaterial.dispose()
    existingFace.customDistanceMaterial.dispose()
  }
  const ambiance = ambiances[rt.ambiance]
  const { dimensions, curve, segments: rawSegments } = rt
  const face3dGeometry = new BufferGeometry()
  const indices = []
  const vertices = []
  const normals = []
  const uvs = []

  //       0
  //       /\          ----> x
  //    1 /__\ 2       |
  //     /\  /\        |
  //  3 /__\/__\ 5      v y
  //   /\  /4  /\
  //  /__\/__\/__\
  // ...   segments

  const segments = curve ? rawSegments : 1
  const part = 1 / segments
  for (let i = 0; i < segments + 1; i++) {
    for (let j = 0; j < i + 1; j++) {
      vertices.push(((2 * j - i) * part) / 2, i * part, 0)
      normals.push(0, 0, 1)
      uvs.push(part * j, 1 - part * i)
    }
  }
  for (let i = 1; i < segments + 1; i++) {
    for (let j = 0; j < i; j++) {
      const k = (i * (i + 1)) / 2 + j

      // Up triangle
      const p = (i * (i - 1)) / 2 + j
      indices.push(p, k, k + 1)
      // Down triangle
      if (i < segments) {
        const n = ((i + 1) * (i + 2)) / 2 + j
        indices.push(n + 1, k + 1, k)
      }
    }
  }

  face3dGeometry.setIndex(indices)
  face3dGeometry.setAttribute(
    'position',
    new Float32BufferAttribute(vertices, 3)
  )
  face3dGeometry.setAttribute('normal', new Float32BufferAttribute(normals, 3))
  face3dGeometry.setAttribute('uv', new Float32BufferAttribute(uvs, 2))

  const faceGeometry = new InstancedBufferGeometry().copy(face3dGeometry)
  const arity = dimensions > 4 ? 9 : dimensions
  faceGeometry.setAttribute(
    'instanceCentroid',
    new InstancedBufferAttribute(new Float32Array(rt.maxFaces * arity), arity)
  )
  faceGeometry.setAttribute(
    'instancePosition',
    new InstancedBufferAttribute(new Float32Array(rt.maxFaces * arity), arity)
  )
  faceGeometry.setAttribute(
    'instanceTarget',
    new InstancedBufferAttribute(new Float32Array(rt.maxFaces * arity), arity)
  )
  faceGeometry.setAttribute(
    'instanceColor',
    new InstancedBufferAttribute(new Float32Array(rt.maxFaces * 3), 3)
  )
  const instancedFace = new Mesh(
    faceGeometry,
    hyperMaterial(ambiance.faceMaterial, rt, 'face')
  )
  instancedFace.matrixAutoUpdate = false
  instancedFace.matrixWorldAutoUpdate = false
  instancedFace.geometry.instanceCount = 0
  instancedFace.frustumCulled = false
  instancedFace.customDepthMaterial = hyperMaterial(
    new MeshDepthMaterial({ depthPacking: RGBADepthPacking }),
    rt,
    'face'
  )
  instancedFace.customDistanceMaterial = hyperMaterial(
    new MeshDistanceMaterial(),
    rt,
    'face'
  )
  // instancedFace.castShadow = ambiance.shadow
  instancedFace.name = 'instanced-face'
  instancedFace.visible = rt.showFaces
  instancedFace.renderOrder = 1
  if (overridenOpacity) {
    instancedFace.material.opacity = overridenOpacity
  }
  rt.scene.add(instancedFace)
}

const plotVertices = (rt, range = null) => {
  const ambiance = ambiances[rt.ambiance]
  const instancedVertex = rt.scene.getObjectByName('instanced-vertex')
  const ipos = instancedVertex.geometry.attributes.instancePosition.array
  const { dimensions } = rt
  let start = range ? range[0] : 0
  let stop = range ? range[1] : rt.vertices.length

  const arity = dimensions > 4 ? 9 : dimensions
  instancedVertex.geometry.instanceCount = stop
  for (let i = start; i < stop; i++) {
    let vertex = rt.vertices[i].vertex
    if (dimensions > 4) {
      vertex = multiplyVector(rt.matrix, vertex)
    }
    for (let j = 0; j < dimensions; j++) {
      ipos[i * arity + j] = vertex[j]
    }
    const icolor = instancedVertex.geometry.attributes.instanceColor.array
    const c = ambiance.color(rt.vertices[i], 'vertex', dimensions)
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
  const iposstart = instancedEdge.geometry.attributes.instancePosition.array
  const iposend = instancedEdge.geometry.attributes.instanceTarget.array

  const { dimensions } = rt
  let start = range ? range[0] : 0
  let stop = range ? range[1] : rt.edges.length

  const arity = dimensions > 4 ? 9 : dimensions
  instancedEdge.geometry.instanceCount = stop
  for (let i = start; i < stop; i++) {
    const edge = rt.edges[i]

    let start = rt.vertices[edge.start].vertex
    let end = rt.vertices[edge.end].vertex

    if (dimensions > 4) {
      start = multiplyVector(rt.matrix, start)
      end = multiplyVector(rt.matrix, end)
    }
    for (let j = 0; j < dimensions; j++) {
      iposstart[i * arity + j] = start[j]
      iposend[i * arity + j] = end[j]
    }

    const icolor = instancedEdge.geometry.attributes.instanceColor.array
    const c = ambiance.color(edge, 'edge', dimensions)
    icolor[i * 3 + 0] = c.r
    icolor[i * 3 + 1] = c.g
    icolor[i * 3 + 2] = c.b
  }

  instancedEdge.geometry.attributes.instancePosition.needsUpdate = true
  instancedEdge.geometry.attributes.instanceTarget.needsUpdate = true
  instancedEdge.geometry.attributes.instanceColor.needsUpdate = true
}

const plotFaces = (rt, range = null) => {
  const ambiance = ambiances[rt.ambiance]
  const instancedFace = rt.scene.getObjectByName('instanced-face')
  const icentroid = instancedFace.geometry.attributes.instanceCentroid.array
  const ipos = instancedFace.geometry.attributes.instancePosition.array
  const itarget = instancedFace.geometry.attributes.instanceTarget.array
  const { dimensions } = rt
  let start = range ? range[0] : 0
  let stop = range ? range[1] : rt.faces.length
  let idx = 0
  for (let i = 0; i < start; i++) {
    const vertices = rt.faces[i].vertices.length
    idx += vertices < 3 ? 0 : vertices === 3 ? 1 : vertices
  }
  const arity = dimensions > 4 ? 9 : dimensions
  for (let i = start; i < stop; i++) {
    const face = rt.faces[i]
    if (face.vertices.length < 3) {
      continue
    }
    let vertices
    if (face.vertices.length === 3) {
      vertices = [
        [
          rt.vertices[face.vertices[0]].vertex,
          rt.vertices[face.vertices[1]].vertex,
          rt.vertices[face.vertices[2]].vertex,
        ],
      ]
      if (dimensions > 4) {
        vertices[0][0] = multiplyVector(rt.matrix, vertices[0][0])
        vertices[0][1] = multiplyVector(rt.matrix, vertices[0][1])
        vertices[0][2] = multiplyVector(rt.matrix, vertices[0][2])
      }
    } else {
      const faceVertices = new Array(face.vertices.length)
      for (let j = 0; j < face.vertices.length; j++) {
        faceVertices[j] = rt.vertices[face.vertices[j]].vertex

        if (dimensions > 4) {
          faceVertices[j] = multiplyVector(rt.matrix, faceVertices[j])
        }
      }
      const centroid = new Array(dimensions).fill(0)
      for (let j = 0; j < faceVertices.length; j++) {
        const vertex = faceVertices[j]
        for (let k = 0; k < dimensions; k++) {
          centroid[k] += vertex[k]
        }
      }
      for (let j = 0; j < dimensions; j++) {
        centroid[j] /= faceVertices.length
      }
      vertices = new Array(faceVertices.length)
      for (let j = 0; j < faceVertices.length; j++) {
        vertices[j] = [
          centroid,
          faceVertices[j],
          faceVertices[(j + 1) % faceVertices.length],
        ]
      }
    }

    for (let j = 0; j < vertices.length; j++) {
      let [centroid, pos, target] = vertices[j]
      if (face.word.length % 2 === (rt.curvature > 0 ? 0 : 1)) {
        ;[pos, target] = [target, pos]
      }
      for (let k = 0; k < dimensions; k++) {
        icentroid[idx * arity + k] = centroid[k]
        ipos[idx * arity + k] = pos[k]
        itarget[idx * arity + k] = target[k]
      }
      const icolor = instancedFace.geometry.attributes.instanceColor.array
      const c = ambiance.color(face, 'face', dimensions)
      icolor[idx * 3 + 0] = c.r
      icolor[idx * 3 + 1] = c.g
      icolor[idx * 3 + 2] = c.b
      idx++
    }
  }
  instancedFace.geometry.instanceCount = idx
  instancedFace.geometry.attributes.instancePosition.needsUpdate = true
  instancedFace.geometry.attributes.instanceTarget.needsUpdate = true
  instancedFace.geometry.attributes.instanceCentroid.needsUpdate = true
  instancedFace.geometry.attributes.instanceColor.needsUpdate = true
}

export const show = (rt, name) => {
  const obj = rt.scene.getObjectByName(`instanced-${name}`)
  obj.visible =
    rt[
      name === 'vertex'
        ? 'showVertices'
        : name === 'edge'
        ? 'showEdges'
        : 'showFaces'
    ]
}

export const plot = (rt, order = null) => {
  if (rt.currentOrder === 0) {
    return
  }
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
          faces: [
            rt.ranges[0].faces[0],
            rt.ranges[rt.currentOrder - 1].faces[1],
          ],
        }
  if (rt.scene.getObjectByName('instanced-vertex').visible) {
    plotVertices(rt, range.vertices)
  }
  if (rt.scene.getObjectByName('instanced-edge').visible) {
    plotEdges(rt, range.edges)
  }
  if (rt.scene.getObjectByName('instanced-face').visible) {
    plotFaces(rt, range.faces)
  }
  rt.render()
  document.title = `Coxeter Explorer - ${
    rt.spaceType === 'finite' ? 'S' : rt.spaceType === 'affine' ? 'E' : 'H'
  }^${rt.dimensions} ${
    rt.currentOrder < rt.order ? `(${rt.currentOrder}/${rt.order})…` : ''
  }- ${rt.vertices.length} vertices, ${rt.edges.length} edges, ${
    rt.faces.length
  } faces`
}

export const updateCameraFov = rt => {
  rt.camera.fov = rt.fov3
  rt.camera.updateProjectionMatrix()
  rt.render()
}

const fxaa = new ShaderPass(FXAAShader)
export const resetComposerTarget = rt => {
  const { composer, msaa, msaaSamples } = rt
  const size = composer.renderer.getDrawingBufferSize(new Vector2())
  const renderTarget = new WebGLRenderTarget(size.width, size.height, {
    samples: msaa ? msaaSamples : 0,
    type: HalfFloatType,
  })
  composer.reset(renderTarget)
  changeAmbiance(rt)
}

export const changeAmbiance = rt => {
  const ambiance = ambiances[rt.ambiance]
  const { scene, composer, camera } = rt
  const instancedVertex = rt.scene.getObjectByName('instanced-vertex')
  const instancedEdge = rt.scene.getObjectByName('instanced-edge')
  const instancedFace = rt.scene.getObjectByName('instanced-face')
  instancedVertex.material.dispose()
  instancedEdge.material.dispose()
  instancedFace.material.dispose()

  instancedVertex.material = hyperMaterial(
    ambiance.vertexMaterial,
    rt,
    'vertex'
  )
  instancedEdge.material = hyperMaterial(ambiance.edgeMaterial, rt, 'edge')
  instancedFace.material = hyperMaterial(ambiance.faceMaterial, rt, 'face')

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
      ground.rotation.y = (2 * Math.PI) / 3
      ground.position.x = -4
    }
    ground.name = 'ground'
    ground.receiveShadow = true
    scene.add(ground)
  }

  composer.renderer.shadowMap.enabled = ambiance.shadow
  composer.renderer.shadowMap.type = PCFSoftShadowMap
  instancedVertex.castShadow = ambiance.shadow
  instancedEdge.castShadow = ambiance.shadow
  // instancedFace.castShadow = ambiance.shadow
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
  composer.renderer.toneMapping = ambiance.toneMapping || NoToneMapping
  composer.renderer.outputColorSpace = ambiance.colorSpace || SRGBColorSpace
  composer.renderer.toneMappingExposure = ambiance.exposure || 1

  composer.passes.slice(1).forEach(pass => {
    composer.removePass(pass)
    pass.dispose()
  })
  fxs.forEach(fx => {
    if (fx === 'copy') {
      composer.addPass(composer.copyPass)
    } else if (fx === 'sao') {
      const saoPass = new SAOPass(scene, camera, false, true)
      saoPass.normalMaterial = hyperMaterial(saoPass.normalMaterial, rt)

      saoPass.params.output = SAOPass.OUTPUT.Default
      saoPass.params.saoBias = 0.5
      saoPass.params.saoIntensity = 0.000001
      saoPass.params.saoScale = 10
      saoPass.params.saoKernelRadius = 50
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
      bokehPass.materialDepth = hyperMaterial(bokehPass.materialDepth, rt)
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
        0.75,
        0,
        0
      )
      composer.addPass(bloomPass)
    } else if (fx === 'godray') {
      const godrayPass = new GodRayPass(scene, camera)
      godrayPass.materialDepth = hyperMaterial(godrayPass.materialDepth, rt)
      composer.addPass(godrayPass)
    } else if (fx === 'fxaa' && !rt.msaa) {
      const pixelRatio = composer.renderer.getPixelRatio()
      fxaa.material.uniforms['resolution'].value.x =
        1 / (window.innerWidth * pixelRatio)
      fxaa.material.uniforms['resolution'].value.y =
        1 / (window.innerHeight * pixelRatio)
      composer.addPass(fxaa)
    } else if (fx === 'output') {
      composer.addPass(new OutputPass())
    }
  })

  updateMaterials(rt)
  rt.render()
}

export const updateMaterials = rt => {
  const {
    dimensions,
    curvature,
    projection,
    easing,
    vertexThickness,
    edgeThickness,
  } = rt
  const segments = rt.curve ? rt.segments : 1

  const it = hyperMaterials.values()
  for (let i = 0; i < hyperMaterials.size; i++) {
    const material = it.next().value

    material.uniforms.curvature.value = curvature
    material.uniforms.vertexThickness.value = vertexThickness
    material.uniforms.edgeThickness.value = edgeThickness
    material.needsUpdate =
      dimensions !== material._rt.dimensions ||
      projection !== material._rt.projection ||
      easing !== material._rt.easing
    material._rt = rt
    material.uniforms.segments.value = segments
    for (let i = 4; i <= dimensions; i++) {
      if (!material.uniforms[`fov${i}`]) {
        material.uniforms[`fov${i}`] = { value: 1 }
      }
      material.uniforms[`fov${i}`].value = tan(degToRad(rt[`fov${i}`]) * 0.5)
    }
    if (rt.dimensions < 5) {
      material.uniforms.rotationMatrix.value = columnMajor(rt.matrix)
    }
  }
}
