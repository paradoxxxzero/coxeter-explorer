import {
  Clock,
  Color,
  CylinderGeometry,
  DirectionalLight,
  Group,
  HemisphereLight,
  InstancedMesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  NoToneMapping,
  Object3D,
  PerspectiveCamera,
  ReinhardToneMapping,
  Scene,
  SphereGeometry,
  StreamDrawUsage,
  Vector2,
  WebGLRenderer,
  MeshPhysicalMaterial,
  TextureLoader,
  sRGBEncoding,
  EquirectangularReflectionMapping,
} from 'three'
// import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { C } from './C'
import { xproject } from './math/hypermath'
import { abs, max, sqrt } from './math/index'

import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { R } from './R'
export let stats,
  renderer,
  camera,
  scene,
  controls,
  clock,
  composer,
  bloomPass,
  ssaoPass,
  fxaaPass

const group = new Group()
const _color = new Color()
const loader = new TextureLoader()

const ambiances = {
  neon: {
    background: 0x000000,
    bloom: true,
    material: new MeshBasicMaterial(),
    lights: [],
    ao: false,
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
    material: new MeshLambertMaterial({
      // roughness: 0.5,
      // metalness: 0.5,
      // clearcoat: 0.5,
    }),
    lights: [new DirectionalLight(), new HemisphereLight()],
    ao: true,
    colorVertex: () => {
      return _color.set(0xaaaaaa)
    },
    colorEdge: () => {
      return _color.set(0xaaaaaa)
    },
  },
  glass: {
    background: 0x000000,
    env: () =>
      new Promise(resolve =>
        loader.load('ocean.jpg', texture => {
          texture.encoding = sRGBEncoding
          texture.mapping = EquirectangularReflectionMapping
          resolve(texture)
        })
      ),
    bloom: false,
    material: new MeshPhysicalMaterial({
      premultipliedAlpha: false,
      reflectivity: 1,
      refractionRatio: 0,
      shininess: 0,
      metalness: 0,
      roughness: 0,
      transmission: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      thickness: 1,
      ior: 1.5,
    }),
    lights: [new DirectionalLight(), new HemisphereLight()],
    ao: false,
    colorVertex: () => {
      return _color.set(0xaaaaaa)
    },
    colorEdge: () => {
      return _color.set(0xaaaaaa)
    },
  },
}

export const initialize3d = () => {
  clock = new Clock()
  // stats = new Stats()
  // document.body.appendChild(stats.dom)
  renderer = new WebGLRenderer()

  // renderer.setPixelRatio(window.devicePixelRatio)
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
  composer.addPass(new RenderPass(scene, camera))

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

  ssaoPass = new SSAOPass(scene, camera, window.innerWidth, window.innerHeight)
  ssaoPass.kernelRadius = 16
  ssaoPass.minDistance = 0.1
  ssaoPass.maxDistance = 2
  // ssaoPass.output = SSAOPass.OUTPUT.Beauty
  // ssaoPass.output = SSAOPass.OUTPUT.SSAO
  composer.addPass(ssaoPass)
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
    bloomPass,
    ssaoPass,
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
  const ambiance = ambiances[C.ambiance]
  instancedVertex = new InstancedMesh(
    vertexGeometry,
    ambiance.material,
    currentVerticesMax
  )
  instancedVertex.setColorAt(0, new Color())
  instancedVertex.count = 0
  instancedVertex.instanceMatrix.setUsage(StreamDrawUsage)
  instancedVertex.instanceColor.setUsage(StreamDrawUsage)
  group.add(instancedVertex)
}

const initEdge = () => {
  const ambiance = ambiances[C.ambiance]
  instancedEdge = new InstancedMesh(
    edgeGeometry,
    ambiance.material,
    currentEdgesMax
  )
  instancedEdge.setColorAt(0, new Color())
  instancedEdge.count = 0
  instancedEdge.instanceMatrix.setUsage(StreamDrawUsage)
  instancedEdge.instanceColor.setUsage(StreamDrawUsage)
  group.add(instancedEdge)
}

const plotVertices = ([start, stop]) => {
  const ambiance = ambiances[C.ambiance]
  // console.info(`Plotting [${start},${stop}] vertices`)
  if (stop > currentVerticesMax) {
    currentVerticesMax = stop
    instancedVertex.dispose()
    group.remove(instancedVertex)
    initVertex()
    start = 0
  }
  instancedVertex.count = stop
  for (let i = start; i < stop; i++) {
    const vertex = R.vertices[i]
    dummy.matrix.identity()
    dummy.matrixWorld.identity()
    dummy.quaternion.identity()
    dummy.position.set(...xproject(vertex.vertex))
    if (C.dimensions === 4) {
      dummy.scale.setScalar(C.thickness / max(1, abs(vertex.vertex[3])))
    } else {
      dummy.scale.setScalar(C.thickness)
    }
    dummy.updateMatrix()
    instancedVertex.setMatrixAt(i, dummy.matrix)
    instancedVertex.setColorAt(i, ambiance.colorVertex(vertex))
  }
  instancedVertex.instanceMatrix.needsUpdate = true
  instancedVertex.instanceColor.needsUpdate = true
}

const plotEdges = ([start, stop]) => {
  const ambiance = ambiances[C.ambiance]
  const segments = C.curve ? C.segments : 1
  const allStop = stop * segments
  // console.info(`Plotting [${start},${stop}] edges (${allStop})`)

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

    for (let j = 0; j < segments; j++) {
      const v1 = xproject(u)
      const v2 = xproject(v)
      //

      dummy.matrix.identity()
      dummy.matrixWorld.identity()
      dummy.quaternion.identity()
      dummy.position.set(...v1)
      let sx, sy
      if (C.dimensions === 4) {
        sx = sy = C.thickness / max(1, abs(edge.start[3]), abs(edge.end[3]))
      } else {
        sx = sy = C.thickness
      }
      const dx = v2[0] - v1[0]
      const dy = v2[1] - v1[1]
      const dz = v2[2] - v1[2]
      dummy.scale.set(sx, sy, sqrt(dx * dx + dy * dy + dz * dz))
      dummy.lookAt(...v2)
      dummy.updateMatrix()
      instancedEdge.setMatrixAt(i * segments + j, dummy.matrix)
      instancedEdge.setColorAt(i * segments + j, ambiance.colorEdge(edge))
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
export const changeAmbiance = async () => {
  const ambiance = ambiances[C.ambiance]
  if (ambiance.env) {
    scene.background = await ambiance.env()
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
    scene.remove(light)
  })
  // Add new lights
  ambiance.lights.forEach(light => {
    scene.add(light)
  })
  renderer.toneMapping = ambiance.bloom ? ReinhardToneMapping : NoToneMapping
  renderer.toneMappingExposure = ambiance.bloom ? 1.5 : 1
  bloomPass.enabled = ambiance.bloom
  ssaoPass.enabled = ambiance.ao

  // Update materials
  instancedVertex.material = ambiance.material
  instancedEdge.material = ambiance.material
  plot(true)
  render()
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
