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
  Vector3,
  WebGLRenderer,
  Clock,
  AmbientLight,
} from 'three'
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import './style.css'

export let stats, renderer, camera, scene, controls, clock

const colors = {
  background: 0x000000,
  edges: 0x3949ab,
  vertices: 0x03a9f4,
}

const size = 10

export const initialize3d = () => {
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
  camera.position.set(0, 0, -1)
  camera.up.set(0, 1, 0)
  camera.lookAt(0, 0, 1)
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

  // controls = new OrbitControls(camera, renderer.domElement)
  // controls.target.set(0, 0, 0)
  // controls.minDistance = 0
  // controls.maxDistance = 100
  // controls.addEventListener('change', render())
  // controls.update()
  controls = new FirstPersonControls(camera, renderer.domElement)
  controls.lookSpeed = 0.2
  clock = new Clock()
  animate()

  return {
    renderer,
    scene,
    camera,
    controls,
  }
}

const vertices = []
const links = []

for (let i = -size; i < size; i++) {
  for (let j = -size; j < size; j++) {
    for (let k = -size; k < size; k++) {
      vertices.push({
        vertex: new Vector3(i + 0.5, j + 0.5, k + 0.5),
        order: Math.abs(i + 0.5) + Math.abs(j + 0.5) + Math.abs(k + 0.5),
      })
    }
  }
}
for (let i = 0; i < vertices.length; i++) {
  for (let j = i + 1; j < vertices.length; j++) {
    const a = vertices[i].vertex
    const b = vertices[j].vertex
    if (a.distanceTo(b) < 1.1) {
      links.push([i, j])
    }
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
  const vertexGeometry = new SphereGeometry(0.075, 16, 16)
  const instancedVertex = new InstancedMesh(
    vertexGeometry,
    new MeshStandardMaterial({
      color: colors.vertices,
      ...materialProps,
      roughness: 0.7,
    }),
    vertices.length
  )
  vertices.forEach(({ vertex, order }, i) => {
    dummy.position.copy(vertex)
    dummy.updateMatrix()
    instancedVertex.setMatrixAt(i, dummy.matrix)
    // instancedVertex.setColorAt(
    //   i,
    //   new Color(colors.vertices).offsetHSL(order / (3 * size), 0, 0)
    // )
  })

  // instancedVertex.instanceMatrix.setUsage(StreamDrawUsage)
  // instancedVertex.instanceColor.setUsage(StreamDrawUsage)
  scene.add(instancedVertex)

  const edgeGeometry = new CylinderGeometry(0.025, 0.025, 0.9, 16, 1, true)
  edgeGeometry.translate(0, 0.5, 0)
  edgeGeometry.rotateX(Math.PI / 2)
  const instancedEdge = new InstancedMesh(
    edgeGeometry,
    new MeshStandardMaterial({
      color: colors.edges,
      ...materialProps,
    }),
    links.length
  )

  links.forEach(([i1, i2], i) => {
    const v1 = vertices[i1]
    const v2 = vertices[i2]
    dummy.position.copy(v1.vertex)
    dummy.lookAt(v2.vertex)
    dummy.updateMatrix()
    instancedEdge.setMatrixAt(i, dummy.matrix)
    // instancedEdge.setColorAt(
    //   i,
    //   new Color(colors.edges).offsetHSL(
    //     (0.5 * (v1.order + v2.order)) / (3 * size),
    //     0,
    //     0
    //   )
    // )
  })
  scene.add(instancedEdge)
}

export const render = () => {
  const delta = clock.getDelta()
  stats.begin()
  renderer.render(scene, camera)
  controls.update(delta)
  stats.end()
}

export const animate = () => {
  requestAnimationFrame(animate)
  render()
}
