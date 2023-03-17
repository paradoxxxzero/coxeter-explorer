import {
  Clock,
  Color,
  CylinderGeometry,
  Group,
  InstancedMesh,
  MeshBasicMaterial,
  Object3D,
  PerspectiveCamera,
  ReinhardToneMapping,
  Scene,
  SphereGeometry,
  Vector2,
  WebGLRenderer,
  StreamDrawUsage,
} from 'three'
// import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { C } from './C'
import { poincare } from './math/hypermath'
import { abs, max, min, sqrt } from './math/index'

import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { R } from './R'
export let stats, renderer, camera, scene, controls, clock, composer

const group = new Group()

const colors = {
  background: 0x000000,
  edges: 0x3949ab,
  vertices: 0x03a9f4,
}
const _color = new Color()

export const initialize3d = () => {
  clock = new Clock()
  // stats = new Stats()
  // document.body.appendChild(stats.dom)
  renderer = new WebGLRenderer()

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(new Color(colors.background), 1)

  renderer.domElement.id = 'c3d'

  document.body.appendChild(renderer.domElement)
  camera = new PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.001,
    100000
  )
  camera.position.set(0, 0, -1)
  camera.up.set(0, 1, 0)
  camera.lookAt(0, 0, 0)
  camera.zoom = Math.min(1, window.innerWidth / window.innerHeight)
  camera.updateProjectionMatrix()

  scene = new Scene()
  scene.add(group)
  // scene.background = new Color(colors.background)

  // scene.fog = new Fog(colors.background, 1, size)

  // const ambientLight = new AmbientLight(0xffffff, 0.75)
  // scene.add(ambientLight)

  // const pointLight = new PointLight(0xffffff)
  // camera.add(pointLight)
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
  composer.addPass(new RenderPass(scene, camera))

  const fxaaPass = new ShaderPass(FXAAShader)
  const pixelRatio = renderer.getPixelRatio()
  fxaaPass.material.uniforms['resolution'].value.x =
    1 / (window.innerWidth * pixelRatio)
  fxaaPass.material.uniforms['resolution'].value.y =
    1 / (window.innerHeight * pixelRatio)
  composer.addPass(fxaaPass)

  renderer.toneMapping = ReinhardToneMapping
  renderer.toneMappingExposure = 1.5
  const bloomPass = new UnrealBloomPass(
    new Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0,
    0
  )
  composer.addPass(bloomPass)
  // const ssaoPass = new SSAOPass(
  //   scene,
  //   camera,
  //   false,
  //   true
  //   // window.innerWidth,
  //   // window.innerHeight
  // )
  // ssaoPass.kernelRadius = 4
  // composer.addPass(ssaoPass)
  // controls = new FirstPersonControls(camera, renderer.domElement)
  // controls.lookSpeed = 0.2
  // animate()

  initEdge()
  initVertex()

  return {
    composer,
    renderer,
    scene,
    camera,
    controls,
    bloomPass,
    // ssaoPass,
    fxaaPass,
  }
}

const dummy = new Object3D()
const vertexRadius = 0.06
const edgeRadius = 0.025
const vertexGeometry = new SphereGeometry(vertexRadius, 16, 16)
const edgeGeometry = new CylinderGeometry(
  edgeRadius,
  edgeRadius,
  1,
  8,
  1,
  false
)
edgeGeometry.translate(0, 0.5, 0)
edgeGeometry.rotateX(Math.PI / 2)

let instancedVertex = null
let instancedEdge = null
let currentVerticesMax = 5000
let currentEdgesMax = 50000

const initVertex = () => {
  instancedVertex = new InstancedMesh(
    vertexGeometry,
    new MeshBasicMaterial(),
    currentVerticesMax
  )
  instancedVertex.setColorAt(0, new Color())
  instancedVertex.count = 0
  instancedVertex.instanceMatrix.setUsage(StreamDrawUsage)
  instancedVertex.instanceColor.setUsage(StreamDrawUsage)
  group.add(instancedVertex)
}

const initEdge = () => {
  instancedEdge = new InstancedMesh(
    edgeGeometry,
    new MeshBasicMaterial(),
    currentEdgesMax
  )
  instancedEdge.setColorAt(0, new Color())
  instancedEdge.count = 0
  instancedEdge.instanceMatrix.setUsage(StreamDrawUsage)
  instancedEdge.instanceColor.setUsage(StreamDrawUsage)
  group.add(instancedEdge)
}

const plotVertices = ([start, stop]) => {
  console.info(`Plotting [${start},${stop}] vertices`)
  if (stop > currentVerticesMax) {
    currentVerticesMax = stop
    instancedVertex.dispose()
    group.remove(instancedVertex)
    initVertex()
    start = 0
  }
  instancedVertex.count = stop
  for (let i = start; i < stop; i++) {
    const { vertex, color } = R.vertices[i]
    dummy.matrix.identity()
    dummy.matrixWorld.identity()
    dummy.quaternion.identity()
    dummy.position.set(...(C.dimensions === 4 ? poincare(vertex) : vertex))
    if (C.dimensions === 4) {
      dummy.scale.setScalar(C.thickness / max(1, abs(vertex[3])))
    } else {
      dummy.scale.setScalar(C.thickness)
    }
    dummy.updateMatrix()
    instancedVertex.setMatrixAt(i, dummy.matrix)
    instancedVertex.setColorAt(i, _color.set(color))
  }
  instancedVertex.instanceMatrix.needsUpdate = true
  instancedVertex.instanceColor.needsUpdate = true
}

const plotEdges = ([start, stop]) => {
  console.info(`Plotting [${start},${stop}] edges`)
  const allStop = stop * (C.curve ? C.segments : 1)

  if (allStop > currentEdgesMax) {
    currentEdgesMax = allStop
    instancedEdge.dispose()
    group.remove(instancedEdge)
    initEdge()
    start = 0
  }
  instancedEdge.count = allStop
  for (let i = start; i < stop; i++) {
    const edge = R.edges[i]
    let u = edge.start
    let v = edge.segments[0] || edge.end

    for (let j = 0; j < C.segments + 1; j++) {
      const vertex3d1 = C.dimensions === 4 ? poincare(u) : u
      const vertex3d2 = C.dimensions === 4 ? poincare(v) : v
      const dx = vertex3d2[0] - vertex3d1[0]
      const dy = vertex3d2[1] - vertex3d1[1]
      const dz = vertex3d2[2] - vertex3d1[2]
      dummy.matrix.identity()
      dummy.matrixWorld.identity()
      dummy.quaternion.identity()
      dummy.position.set(...vertex3d1)
      let sx, sy
      if (C.dimensions === 4) {
        sx = sy = C.thickness / max(1, abs(edge.start[3]), abs(edge.end[3]))
      } else {
        sx = sy = C.thickness
      }
      dummy.scale.set(sx, sy, sqrt(dx * dx + dy * dy + dz * dz))
      dummy.lookAt(...vertex3d2)
      dummy.updateMatrix()
      instancedEdge.setMatrixAt(i * C.segments + j, dummy.matrix)
      instancedEdge.setColorAt(i * C.segments + j, _color.set(edge.color))
      u = v
      v = edge.segments[j + 1] || edge.end
    }
  }
  instancedEdge.instanceMatrix.needsUpdate = true
  instancedEdge.instanceColor.needsUpdate = true
}

export const plot = arg => {
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
    plotEdges(edges)
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
