import Stats from 'stats.js'
import {
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
  Clock,
  AmbientLight,
} from 'three'
// import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './style.css'
import { getHoneyComb } from './math'

export let stats, renderer, camera, scene, controls, clock

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
    size + 1
  )
  camera.position.set(-1, 1, 1)
  camera.up.set(0, 1, 0)
  camera.lookAt(0, 0, 0)
  camera.zoom = Math.min(1, window.innerWidth / window.innerHeight)
  camera.updateProjectionMatrix()

  scene = new Scene()
  scene.background = new Color(colors.background)

  scene.fog = new Fog(colors.background, 1, size)

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
  // controls = new FirstPersonControls(camera, renderer.domElement)
  // controls.lookSpeed = 0.2
  // animate()

  return {
    renderer,
    scene,
    camera,
    controls,
  }
}

const dummy = new Object3D()
const materialProps = {
  roughness: 0.5,
  metalness: 0.5,
  // clearcoat: 1,
  // reflectivity: 1,
}

export const set = () => {
  const { vertices, edges } = getHoneyComb(size)

  const vertexGeometry = new SphereGeometry(0.075, 16, 16)
  const instancedVertex = new InstancedMesh(
    vertexGeometry,
    new MeshStandardMaterial({
      // color: colors.vertices,
      ...materialProps,
      roughness: 0.7,
    }),
    vertices.length
  )
  vertices.forEach(({ vertex, order }, i) => {
    console.log(vertex)
    dummy.position.copy(vertex)
    dummy.updateMatrix()
    instancedVertex.setMatrixAt(i, dummy.matrix)
    instancedVertex.setColorAt(
      i,
      new Color(colors.vertices).offsetHSL((order - 1) / 4, 0, 0)
    )
  })

  // instancedVertex.instanceMatrix.setUsage(StreamDrawUsage)
  // instancedVertex.instanceColor.setUsage(StreamDrawUsage)
  scene.add(instancedVertex)

  const edgeGeometry = new CylinderGeometry(0.025, 0.025, 1, 16, 1, true)
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

  edges.forEach(([i1, i2], i) => {
    const v1 = vertices[i1]
    const v2 = vertices[i2]
    dummy.position.copy(v1.vertex)
    dummy.scale.set(1, 1, v1.vertex.distanceTo(v2.vertex))
    dummy.lookAt(v2.vertex)
    dummy.updateMatrix()
    instancedEdge.setMatrixAt(i, dummy.matrix)
    instancedEdge.setColorAt(
      i,
      new Color(colors.edges).offsetHSL((v1.order - 1) / 4, 0, 0)
    )
  })
  scene.add(instancedEdge)
}

export const render = () => {
  // const delta = clock.getDelta()
  stats.begin()
  renderer.render(scene, camera)
  // controls.update(delta)
  stats.end()
}

export const animate = () => {
  requestAnimationFrame(animate)
  render()
}
