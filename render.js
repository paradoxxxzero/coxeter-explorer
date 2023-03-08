import Stats from 'stats.js'
import {
  AmbientLight,
  Clock,
  Color,
  CylinderGeometry,
  Fog,
  InstancedMesh,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer,
  Group,
} from 'three'
// import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
// import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass'
import { SAOPass } from 'three/examples/jsm/postprocessing/SAOPass'
import Edge from './math/Edge'
import { dot, getGoursatSimplex, poincare } from './math/hypermath'
import Simplex from './math/Simplex'
import Vertex from './math/Vertex'
import './style.css'
import { renderHoneyComb } from './math'
import { getRules } from './math/group'
import { sqrt } from './math/index'
export let stats, renderer, camera, scene, controls, clock, composer

const colors = {
  background: 0x000000,
  edges: 0x3949ab,
  vertices: 0x03a9f4,
}

const size = 10

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
    10
  )
  camera.position.set(0, 0, -1.05)
  camera.up.set(0, 1, 0)
  camera.lookAt(0, 0, 0)
  camera.zoom = Math.min(1, window.innerWidth / window.innerHeight)
  camera.updateProjectionMatrix()

  scene = new Scene()
  // scene.background = new Color(colors.background)

  // scene.fog = new Fog(colors.background, 1, size)

  // const ambientLight = new AmbientLight(0xffffff, 0.75)
  // scene.add(ambientLight)

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
    controls.position0.set(controls.position0.x < -1 ? -0.25 : -1.5, 0, 0)
    controls.reset()
  })

  composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  // const ssaoPass = new SAOPass(
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
const vertexRadius = 0.15
const edgeRadius = 0.025
const materialProps = {
  roughness: 0.5,
  metalness: 0.5,
  // clearcoat: 1,
  // reflectivity: 1,
  transparent: true,
  // opacity: 0.5,
}

let group = new Group()

export const set = coxeter => {
  group.children.forEach(child => {
    child.dispose()
  })
  scene.remove(group)
  group = new Group()
  coxeter.rules = getRules(coxeter)
  coxeter.vertices = []
  coxeter.edges = []

  // testKnuthBendix()
  renderHoneyComb(getGoursatSimplex(coxeter), coxeter)
  // renderHoneyCombNew(getGoursatSimplex(coxeter), coxeter)
  // renderHoneyCombManual(getGoursatSimplex(coxeter), coxeter)
  // const { vertices, edges } = getHoneyCombNewAPI(size)
  // const { vertices, edges } = getHoneyCombManual(size)
  // const { vertices, edges } = getTestHoneyComb(size)
  // const { vertices, edges } = getHoneyCombExpanded(size)
  // const { vertices, edges } = getHoneyCombAllFaces(size)
  const { vertices, edges } = coxeter
  console.log(
    'Rendering',
    vertices.length,
    'vertices and',
    edges.length,
    'edges'
  )
  const vertexGeometry = new SphereGeometry(vertexRadius, 16, 16)
  const instancedVertex = new InstancedMesh(
    vertexGeometry,
    new MeshStandardMaterial({
      // color: colors.vertices,
      ...materialProps,
      roughness: 0.7,
    }),
    vertices.length
  )
  for (let i = 0; i < vertices.length; i++) {
    const { vertex, color } = vertices[i]
    const len = sqrt(dot(vertex, vertex, 1))
    dummy.position.set(...poincare(vertex))
    dummy.scale.setScalar(1 / (1 + len))
    dummy.updateMatrix()
    instancedVertex.setMatrixAt(i, dummy.matrix)
    instancedVertex.setColorAt(i, color)
  }

  // instancedVertex.instanceMatrix.setUsage(StreamDrawUsage)
  // instancedVertex.instanceColor.setUsage(StreamDrawUsage)
  group.add(instancedVertex)

  const edgeGeometry = new CylinderGeometry(
    edgeRadius,
    edgeRadius,
    1,
    16,
    1,
    true
  )
  edgeGeometry.translate(0, 0.5, 0)
  edgeGeometry.rotateX(Math.PI / 2)
  const instancedEdge = new InstancedMesh(
    edgeGeometry,
    new MeshStandardMaterial({
      // color: colors.edges,
      ...materialProps,
    }),
    edges.length
  )

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i]
    const len1 = sqrt(dot(edge.vertex1, edge.vertex1, 1))
    const len2 = sqrt(dot(edge.vertex2, edge.vertex2, 1))
    const vertex3d1 = poincare(edge.vertex1)
    const vertex3d2 = poincare(edge.vertex2)
    const dx = vertex3d2[0] - vertex3d1[0]
    const dy = vertex3d2[1] - vertex3d1[1]
    const dz = vertex3d2[2] - vertex3d1[2]
    dummy.position.set(...vertex3d1)
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
  scene.add(group)
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

Object.assign(window, {
  Vertex,
  Edge,
  Simplex,
})
