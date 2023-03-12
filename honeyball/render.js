import Stats from 'stats.js'
import {
  Clock,
  Color,
  CylinderGeometry,
  Group,
  InstancedMesh,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer,
  AmbientLight,
  Vector2,
  ReinhardToneMapping,
  BufferGeometry,
  BufferAttribute,
  LineBasicMaterial,
  LineSegments,
} from 'three'
// import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass'
import { C } from './C'
import { poincare, dot, xlerp } from './math/hypermath'
import { sqrt } from './math/index'

import { tile } from './tiling'
export let stats, renderer, camera, scene, controls, clock, composer

const colors = {
  background: 0x000000,
  edges: 0x3949ab,
  vertices: 0x03a9f4,
}

export const initialize3d = () => {
  clock = new Clock()
  stats = new Stats()
  document.body.appendChild(stats.dom)
  renderer = new WebGLRenderer({
    antialias: true,
  })

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
  // scene.background = new Color(colors.background)

  // scene.fog = new Fog(colors.background, 1, size)

  const ambientLight = new AmbientLight(0xffffff, 0.75)
  scene.add(ambientLight)

  const pointLight = new PointLight(0xffffff)
  camera.add(pointLight)
  camera.updateProjectionMatrix()

  scene.add(camera)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0)
  controls.minDistance = 0
  controls.maxDistance = 100
  controls.addEventListener('change', render)
  controls.update()

  renderer.domElement.addEventListener('dblclick', () => {
    controls.position0.set(0, 0, controls.position0.z <= -1 ? -0.25 : -1, 0, 0)
    controls.reset()
  })

  composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))

  renderer.toneMapping = ReinhardToneMapping
  renderer.toneMappingExposure = 1.75
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

  return {
    composer,
    renderer,
    scene,
    camera,
    controls,
  }
}

const dummy = new Object3D()
const vertexRadius = 0.06
const edgeRadius = 0.025
const materialProps = {
  roughness: 0.5,
  metalness: 0.5,
  // clearcoat: 1,
  // reflectivity: 1,
  transparent: true,
  opacity: 0.75,
}

let group = new Group()
export const clear = () => {
  group.children.forEach(child => {
    child.dispose()
  })
  scene.remove(group)
  group = new Group()
  scene.add(group)
}

const plotVertices = () => {
  const { vertices } = C.runtime
  const vertexGeometry = new SphereGeometry(vertexRadius, 16, 16)
  const instancedVertex = new InstancedMesh(
    vertexGeometry,
    new MeshStandardMaterial({
      ...materialProps,
      roughness: 0.7,
    }),
    vertices.length
  )
  console.info('Plotting', vertices.length, 'vertices')
  for (let i = 0; i < vertices.length; i++) {
    const { vertex, color } = vertices[i]
    dummy.matrix.identity()
    dummy.matrixWorld.identity()
    dummy.quaternion.identity()
    dummy.position.set(...(C.dimensions === 4 ? poincare(vertex) : vertex))
    if (C.dimensions === 4) {
      const len = sqrt(dot(vertex, vertex, 1))
      dummy.scale.setScalar(1 / (1 + len))
    } else {
      dummy.scale.setScalar(1)
    }
    dummy.updateMatrix()
    instancedVertex.setMatrixAt(i, dummy.matrix)
    instancedVertex.setColorAt(i, color)
  }
  // instancedVertex.instanceMatrix.setUsage(StreamDrawUsage)
  // instancedVertex.instanceColor.setUsage(StreamDrawUsage)
  group.add(instancedVertex)
}

// // const MAX = 1000000
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

const plotEdges = () => {
  const { edges } = C.runtime
  const segments = 10
  const segmentedEdges = []
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i]
    const segmented = xlerp(edge.vertex1, edge.vertex2, 1 / segments)
    for (let j = 0; j < segmented.length - 1; j++) {
      segmentedEdges.push({
        vertex1: segmented[j],
        vertex2: segmented[j + 1],
        color: edge.color,
      })
    }
  }
  console.info(
    'Plotting',
    edges.length,
    'edges, segmented in',
    segmentedEdges.length,
    'segments'
  )

  const edgeGeometry = new CylinderGeometry(
    edgeRadius,
    edgeRadius,
    1,
    4,
    1,
    !true
  )
  edgeGeometry.translate(0, 0.5, 0)
  edgeGeometry.rotateX(Math.PI / 2)
  const instancedEdge = new InstancedMesh(
    edgeGeometry,
    new MeshStandardMaterial({
      ...materialProps,
    }),
    segmentedEdges.length
  )

  for (let i = 0; i < segmentedEdges.length; i++) {
    const edge = segmentedEdges[i]
    const vertex3d1 = C.dimensions === 4 ? poincare(edge.vertex1) : edge.vertex1
    const vertex3d2 = C.dimensions === 4 ? poincare(edge.vertex2) : edge.vertex2
    const dx = vertex3d2[0] - vertex3d1[0]
    const dy = vertex3d2[1] - vertex3d1[1]
    const dz = vertex3d2[2] - vertex3d1[2]
    dummy.matrix.identity()
    dummy.matrixWorld.identity()
    dummy.quaternion.identity()
    dummy.position.set(...vertex3d1)
    let len1, len2
    if (C.dimensions === 4) {
      len1 = sqrt(dot(edge.vertex1, edge.vertex1, 1))
      len2 = sqrt(dot(edge.vertex2, edge.vertex2, 1))
    } else {
      len1 = 1
      len2 = 1
    }
    dummy.scale.set(
      1 / (1 + len1),
      1 / (1 + len2),
      sqrt(dx * dx + dy * dy + dz * dz)
    )
    dummy.lookAt(...vertex3d2)
    dummy.updateMatrix()
    instancedEdge.setMatrixAt(i, dummy.matrix)
    instancedEdge.setColorAt(i, edge.color)
  }
  group.add(instancedEdge)
}

export const generate = () => {
  tile()

  if (C.vertices) {
    plotVertices()
  }
  if (C.edges) {
    plotEdges()
  }
}

export const render = () => {
  // const delta = clock.getDelta()
  stats.begin()
  composer.render()
  // controls.update(delta)
  stats.end()
}

export const animate = () => {
  requestAnimationFrame(animate)
  render()
}
