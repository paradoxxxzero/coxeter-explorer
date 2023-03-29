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
} from 'three'
// import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { C } from './C'

import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { R } from './R'
import { wrapEdgeMaterial } from './shader/wrapEdgeMaterial'
import { wrapVertexMaterial } from './shader/wrapVertexMaterial'

export let stats,
  renderer,
  camera,
  scene,
  controls,
  clock,
  composer,
  renderPass,
  bloomPass,
  fxaaPass

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
    bloom: true,
    material: new MeshBasicMaterial(),
    lights: [],
    colorVertex: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.5, 0.5)
    },
    colorEdge: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.5, 0.5)
    },
  },
  museum: {
    background: 0xffffff,
    bloom: false,
    material: new MeshPhysicalMaterial({
      roughness: 0.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      map: diffuse,
      normalMap: normalMap,
    }),
    lights: [new DirectionalLight(), new HemisphereLight()],
    cameraLights: [new PointLight()],
    colorVertex: () => {
      return _color.set(0xaaaaaa)
    },
    colorEdge: () => {
      return _color.set(0xaaaaaa)
    },
  },
  colorful: {
    background: 0xffffff,
    bloom: false,
    material: new MeshPhongMaterial({
      // transparent: true,
      // opacity: 0.75,
    }),
    lights: [new AmbientLight(0xff0000, 0.5)],
    cameraLights: [new PointLight(0xffff00, 1)],
    colorVertex: () => {
      return _color.set(0xffffff)
    },
    colorEdge: () => {
      return _color.set(0xffffff)
    },
  },
  glass: {
    background: 0x000000,
    env: ocean,
    bloom: false,
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
    colorVertex: () => {
      return _color.set(0xaaaaaa)
    },
    colorEdge: () => {
      return _color.set(0xaaaaaa)
    },
  },
  wireframe: {
    background: 0x000000,
    bloom: false,
    material: new MeshBasicMaterial({
      wireframe: true,
    }),
    lights: [],
    colorVertex: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.5, 0.5)
    },
    colorEdge: ({ word }) => {
      return _color.setHSL((word.length * 0.17) % 1, 0.5, 0.5)
    },
  },
}

export const initialize3d = () => {
  clock = new Clock()
  // stats = new Stats()
  // document.body.appendChild(stats.dom)
  renderer = new WebGLRenderer()

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)
  camera = new PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.001,
    1000
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

  fxaaPass = new ShaderPass(FXAAShader)
  const pixelRatio = renderer.getPixelRatio()
  fxaaPass.material.uniforms['resolution'].value.x =
    1 / (window.innerWidth * pixelRatio)
  fxaaPass.material.uniforms['resolution'].value.y =
    1 / (window.innerHeight * pixelRatio)
  composer.addPass(fxaaPass)

  bloomPass = new UnrealBloomPass(
    new Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0,
    0
  )
  composer.addPass(bloomPass)

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
    bloomPass,
    fxaaPass,
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

  // vertexGeometry.setAttribute("position", new BufferAttribute(new Float32Array(currentVerticesMax * 4), 4)
  vertexGeometry.setAttribute(
    'instancePosition',
    new InstancedBufferAttribute(new Float32Array(currentVerticesMax * 4), 4)
  )
  vertexGeometry.setAttribute(
    'instanceColor',
    new InstancedBufferAttribute(new Float32Array(currentVerticesMax * 3), 3)
  )

  // const vertexGeometry = new SphereGeometry(vertexRadius, 16, 16)
  instancedVertex = new Mesh(
    vertexGeometry,
    wrapVertexMaterial(ambiance.material.clone())
  )

  // instancedVertex.setColorAt(0, new Color())
  instancedVertex.geometry.instanceCount = 0
  // instancedVertex.instanceMatrix.setUsage(StreamDrawUsage)
  // instancedVertex.instanceColor.setUsage(StreamDrawUsage)
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
    'instancePositionStart',
    new InstancedBufferAttribute(new Float32Array(currentEdgesMax * 4), 4)
  )
  edgeGeometry.setAttribute(
    'instancePositionEnd',
    new InstancedBufferAttribute(new Float32Array(currentEdgesMax * 4), 4)
  )
  edgeGeometry.setAttribute(
    'instanceColor',
    new InstancedBufferAttribute(new Float32Array(currentEdgesMax * 3), 3)
  )

  instancedEdge = new Mesh(
    edgeGeometry,
    wrapEdgeMaterial(ambiance.material.clone())
  )
  // instancedEdge.setColorAt(0, new Color())
  instancedEdge.geometry.instanceCount = 0
  // instancedEdge.instanceMatrix.setUsage(StreamDrawUsage)
  // instancedEdge.instanceColor.setUsage(StreamDrawUsage)
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
    // dummy.matrix.identity()
    // dummy.matrixWorld.identity()
    // dummy.quaternion.identity()
    // dummy.position.set(...xproject(vertex.vertex))
    // // if (C.dimensions === 4) {
    //   dummy.scale.setScalar(C.thickness / max(1, abs(vertex.vertex[3])))
    // } else {
    //   // dummy.scale.setScalar(C.thickness)
    // }
    // dummy.updateMatrix()
    // instancedVertex.setMatrixAt(i, dummy.matrix)
    const ipos = instancedVertex.geometry.attributes.instancePosition.array
    ipos[i * 4 + 0] = vertex.vertex[0]
    ipos[i * 4 + 1] = vertex.vertex[1]
    ipos[i * 4 + 2] = vertex.vertex[2]
    ipos[i * 4 + 3] = C.dimensions === 3 ? 1 : vertex.vertex[3]

    const icolor = instancedVertex.geometry.attributes.instanceColor.array
    ambiance.colorVertex(vertex)
    icolor[i * 3 + 0] = _color.r
    icolor[i * 3 + 1] = _color.g
    icolor[i * 3 + 2] = _color.b

    // instancedVertex.setColorAt(i, ambiance.colorVertex(vertex))
  }
  instancedVertex.geometry.attributes.instancePosition.needsUpdate = true
  instancedVertex.geometry.attributes.instanceColor.needsUpdate = true
  // instancedVertex.instanceMatrix.needsUpdate = true
  // instancedVertex.instanceColor.needsUpdate = true
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
    const iposstart =
      instancedEdge.geometry.attributes.instancePositionStart.array
    iposstart[i * 4 + 0] = edge.start[0]
    iposstart[i * 4 + 1] = edge.start[1]
    iposstart[i * 4 + 2] = edge.start[2]
    iposstart[i * 4 + 3] = C.dimensions === 3 ? 1 : edge.start[3]
    const iposend = instancedEdge.geometry.attributes.instancePositionEnd.array
    iposend[i * 4 + 0] = edge.end[0]
    iposend[i * 4 + 1] = edge.end[1]
    iposend[i * 4 + 2] = edge.end[2]
    iposend[i * 4 + 3] = C.dimensions === 3 ? 1 : edge.end[3]

    const icolor = instancedEdge.geometry.attributes.instanceColor.array
    ambiance.colorEdge(edge)
    icolor[i * 3 + 0] = _color.r
    icolor[i * 3 + 1] = _color.g
    icolor[i * 3 + 2] = _color.b

    // const p1 = edge.start
    // const p2 = edge.end

    // // const u = xproject(p1)
    // // const v = xproject(p2)
    // const up = [0, 1, 0]
    // const u = [...p1]
    // const v = [...p2]
    // _matrix.identity()
    // _matrix.setPosition(...u)

    // const z = new Array(C.dimensions)
    // for (let i = 0; i < C.dimensions; i++) {
    //   z[i] = v[i] - u[i]
    // }

    // const norm = v => {
    //   let sum = 0
    //   for (let i = 0; i < C.dimensions; i++) {
    //     sum += v[i] * v[i]
    //   }
    //   sum = sqrt(sum)
    //   for (let i = 0; i < C.dimensions; i++) {
    //     v[i] /= sum
    //   }
    // }

    // norm(z)
    // const x = xcross(up, z, 1)
    // norm(x)
    // const y = xcross(z, x, 1)

    // _matrix.elements[0] = x[0]
    // _matrix.elements[1] = x[1]
    // _matrix.elements[2] = x[2]
    // _matrix.elements[4] = y[0]
    // _matrix.elements[5] = y[1]
    // _matrix.elements[6] = y[2]
    // _matrix.elements[8] = z[0]
    // _matrix.elements[9] = z[1]
    // _matrix.elements[10] = z[2]

    // // _matrix.lookAt(v, u, _up)
    // // const dw = v[3] - u[3]
    // let s = 0
    // for (let i = 0; i < C.dimensions; i++) {
    //   s += (v[i] - u[i]) ** 2
    // }
    // s = sqrt(s)
    // _matrix.elements[8] *= s
    // _matrix.elements[9] *= s
    // _matrix.elements[10] *= s
    // _matrix.elements[11] *= s
    // // dummy.matrix.identity()
    // // dummy.matrixWorld.identity()
    // // dummy.quaternion.identity()
    // // dummy.position.set(...u)
    // // const dx = v[0] - u[0]
    // // const dy = v[1] - u[1]
    // // const dz = v[2] - u[2]
    // // // const dw = v[3] - u[3]
    // // dummy.scale.set(1, 1, sqrt(dx * dx + dy * dy + dz * dz /*+ dw * dw*/))

    // // dummy.lookAt(...v)
    // // dummy.updateMatrix()

    // // const u = new Array(C.dimensions).fill(0)
    // // const v = new Array(C.dimensions).fill(0)
    // // const w = new Array(C.dimensions).fill(0)

    // // u[2] = 1
    // // for (let j = 0; j < C.dimensions; j++) {
    // //   v[j] = p2[j] - p1[j]
    // //   w[j] = u[j] + v[j]
    // // }
    // // const nr = 1 / (1 + xdot(u, v))

    // // for (let j = 0; j < 4; j++) {
    // //   for (let k = 0; k < 4; k++) {
    // //     const p = 4 * k + j
    // //     if (C.dimensions === 3 && (j === 3 || k === 3)) {
    // //       _matrix.elements[p] = j === k ? 1 : 0
    // //     } else {
    // //       _matrix.elements[p] = 1 - w[j] * w[k] * nr + 2 * u[j] * v[k]
    // //     }
    // //   }
    // // }

    // // // _matrix.transpose()
    // // _matrix.elements[12] = p1[0]
    // // _matrix.elements[13] = p1[1]
    // // _matrix.elements[14] = p1[2]
    // // console.log(_matrix.elements)
    // // _matrix.elements[15] += p1[3]
    // // R = I - ((w) / (1 + u.v)) * (w)t + 2 * v * ut
    // // const R00 = 1 - w[0] * w[0] * nr + 2 * u[0] * v[0]
    // // const R01 = 1 - w[0] * w[1] * nr + 2 * u[0] * v[1]
    // // const R02 = 1 - w[0] * w[2] * nr + 2 * u[0] * v[2]
    // // const R03 = 1 - w[0] * w[3] * nr + 2 * u[0] * v[3]
    // // const R10 = 1 - w[1] * w[0] * nr + 2 * u[1] * v[0]
    // // const R11 = 1 - w[1] * w[1] * nr + 2 * u[1] * v[1]
    // // const R12 = 1 - w[1] * w[2] * nr + 2 * u[1] * v[2]
    // // const R13 = 1 - w[1] * w[3] * nr + 2 * u[1] * v[3]
    // // const R20 = 1 - w[2] * w[0] * nr + 2 * u[2] * v[0]
    // // const R21 = 1 - w[2] * w[1] * nr + 2 * u[2] * v[1]
    // // const R22 = 1 - w[2] * w[2] * nr + 2 * u[2] * v[2]
    // // const R23 = 1 - w[2] * w[3] * nr + 2 * u[2] * v[3]
    // // const R30 = 1 - w[3] * w[0] * nr + 2 * u[3] * v[0]
    // // const R31 = 1 - w[3] * w[1] * nr + 2 * u[3] * v[1]
    // // const R32 = 1 - w[3] * w[2] * nr + 2 * u[3] * v[2]
    // // const R33 = 1 - w[3] * w[3] * nr + 2 * u[3] * v[3]
    // // // prettier-ignore
    // // _matrix.set(
    // //   R00, R01, R02, R03,
    // //   R10, R11, R12, R13,
    // //   R20, R21, R22, R23,
    // //   R30, R31, R32, R33,
    // // )
    // // instancedEdge.setMatrixAt(i, _matrix)
    // instancedEdge.setMatrixAt(i, _matrix)
    // instancedEdge.setColorAt(i, ambiance.colorEdge(edge))
  }

  instancedEdge.geometry.attributes.instancePositionStart.needsUpdate = true
  instancedEdge.geometry.attributes.instancePositionEnd.needsUpdate = true
  instancedEdge.geometry.attributes.instanceColor.needsUpdate = true
  // instancedEdge.instanceMatrix.needsUpdate = true
  // instancedEdge.instanceColor.needsUpdate = true
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
  renderer.toneMapping = ambiance.bloom ? ReinhardToneMapping : NoToneMapping
  renderer.toneMappingExposure = ambiance.bloom ? 1.5 : 1
  bloomPass.enabled = ambiance.bloom

  // Update materials
  instancedVertex.material = wrapVertexMaterial(ambiance.material.clone())
  instancedEdge.material = wrapEdgeMaterial(ambiance.material.clone())
  updateMaterials()
  plot(true)
  render()
}

export const updateMaterials = () => {
  if (instancedVertex) {
    instancedVertex.material.uniforms.curvature.value = R.curvature
    instancedVertex.material.uniforms.thickness.value = C.thickness
    if (
      C.dimensions !== instancedVertex.material._dimensions ||
      C.projection !== instancedVertex.material._projection
    ) {
      instancedVertex.material._dimensions = C.dimensions
      instancedVertex.material._projection = C.projection
      instancedVertex.material.needsUpdate = true
    }
  }
  if (instancedEdge) {
    instancedEdge.material.uniforms.curvature.value = R.curvature
    instancedEdge.material.uniforms.thickness.value = C.thickness
    if (
      C.dimensions !== instancedEdge.material._dimensions ||
      C.projection !== instancedEdge.material._projection
    ) {
      instancedEdge.material._dimensions = C.dimensions
      instancedEdge.material._projection = C.projection
      instancedEdge.material.needsUpdate = true
    }
    instancedEdge.material.uniforms.segments.value = C.curve ? C.segments : 1
  }
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

// Draw edges as lines:
//
// const MAX = 1000000
// const plotEdges = () => {
//   const { edges } = C.runtime
//   const lineIndex = []
//   const lineGeometry = new BufferGeometry()
//   const linePositions = new Float32Array(3 * 2 * edges.length)
//   lineGeometry.setAttribute(
//     'position',
//     new BufferAttribute(linePositions, 3) //.setUsage(StreamDrawUsage)
//   )
//   const lineColors = new Float32Array(3 * 2 * edges.length)
//   lineGeometry.setAttribute(
//     'color',
//     new BufferAttribute(lineColors, 3) //.setUsage(StreamDrawUsage)
//   )
//   const lineMaterial = new LineBasicMaterial({
//     vertexColors: true,
//   })
//   lineMaterial.linewidth = 5

//   const lines = new LineSegments(lineGeometry, lineMaterial)
//   // lines.scale.setScalar(0.999)

//   for (let i = 0; i < edges.length; i++) {
//     const edge = edges[i]

//     const vertex3d1 = C.dimensions === 4 ? poincare(edge.vertex1) : edge.vertex1
//     const vertex3d2 = C.dimensions === 4 ? poincare(edge.vertex2) : edge.vertex2
//     linePositions[i * 6 + 0] = vertex3d1[0]
//     linePositions[i * 6 + 1] = vertex3d1[1]
//     linePositions[i * 6 + 2] = vertex3d1[2]
//     linePositions[i * 6 + 3] = vertex3d2[0]
//     linePositions[i * 6 + 4] = vertex3d2[1]
//     linePositions[i * 6 + 5] = vertex3d2[2]

//     lineColors[i * 6 + 0] = edge.color.r
//     lineColors[i * 6 + 1] = edge.color.g
//     lineColors[i * 6 + 2] = edge.color.b
//     lineColors[i * 6 + 3] = edge.color.r
//     lineColors[i * 6 + 4] = edge.color.g
//     lineColors[i * 6 + 5] = edge.color.b

//     lineIndex.push(i * 2, i * 2 + 1)
//   }

//   lines.geometry.setIndex(lineIndex)
//   lines.geometry.setDrawRange(0, lineIndex.length)
//   lines.geometry.attributes.position.needsUpdate = true
//   lines.geometry.attributes.color.needsUpdate = true
//   lines.geometry.computeBoundingSphere()
//   group.add(lines)
// }
