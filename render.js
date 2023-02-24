import {
  Color,
  Curve,
  Fog,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  TubeGeometry,
  Vector3,
  WebGLRenderer,
  InstancedMesh,
  Object3D,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'stats.js'
import './style.css'

export let stats, renderer, camera, scene, raycaster, controls

const colors = {
  background: 0x000000,
  edges: 0x303f9f,
  vertices: 0x03a9f4,
}

const size = 7

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
  // const ambientLight = new AmbientLight(0xffffff)
  // scene.add(ambientLight)

  const pointLight = new PointLight(0xffffff)
  camera.add(pointLight)
  camera.updateProjectionMatrix()

  scene.add(camera)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0)
  controls.minDistance = 0
  controls.maxDistance = 100
  controls.addEventListener('change', () => render())
  controls.update()

  return {
    renderer,
    scene,
    camera,
    controls,
    raycaster,
  }
}

const vertices = []
const links = []

for (let i = -size; i < size; i++) {
  for (let j = -size; j < size; j++) {
    for (let k = -size; k < size; k++) {
      vertices.push(new Vector3(i + 0.5, j + 0.5, k + 0.5))
    }
  }
}
for (let i = 0; i < vertices.length; i++) {
  for (let j = i + 1; j < vertices.length; j++) {
    const a = vertices[i]
    const b = vertices[j]
    if (a.distanceTo(b) < 1.1) {
      links.push([i, j])
    }
  }
}

class SegmentCurve extends Curve {
  constructor(v1, v2, scale = 1) {
    super()
    this.v1 = v1
    this.v2 = v2
    this.scale = scale
  }

  getPoint(t, optionalTarget = new Vector3()) {
    const tx = this.v1.x + t * (this.v2.x - this.v1.x)
    const ty = this.v1.y + t * (this.v2.y - this.v1.y)
    const tz = this.v1.z + t * (this.v2.z - this.v1.z)

    return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale)
  }
}
const dummy = new Object3D()

export const set = () => {
  const vertexGeometry = new SphereGeometry(0.075, 16, 16)
  const vertex = new InstancedMesh(
    vertexGeometry,
    new MeshStandardMaterial({ color: colors.vertices }),
    vertices.length
  )
  vertices.forEach((v, i) => {
    dummy.position.copy(v)
    dummy.updateMatrix()
    vertex.setMatrixAt(i, dummy.matrix)
  })
  scene.add(vertex)
  links.forEach(([i, j]) => {
    const a = vertices[i]
    const b = vertices[j]
    const path = new SegmentCurve(a, b)

    const line = new Mesh(
      new TubeGeometry(path, 5, 0.025, 16),
      new MeshStandardMaterial({ color: colors.edges })
    )
    scene.add(line)
  })
}

export const render = () => {
  stats.begin()
  renderer.render(scene, camera)
  stats.end()
}

window.render = render
