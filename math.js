import { Color } from 'three'
import { getGoursatSimplex, intersect } from './math/hypermath'
import Simplex from './math/Simplex.js'
import { combinations } from './math/index.js'
import Edge from './math/Edge'
import Vertex from './math/Vertex'

// 1
// 0 -> 1
// 1 -> 0
// 2 -> 2
// 3 -> 3

// 2
// 0 -> 2
// 1 -> 1
// 2 -> 0
// 3 -> 3

const draw = (simplex, color, new_, coxeter) => {
  const activeVertices = simplex.vertices.filter((_, i) =>
    coxeter.activeMirrors.includes(i)
  )
  if (new_) {
    activeVertices.forEach(vertex => vertex.push(color))
  }

  if (simplex.parent) {
    const lastActiveVertices = simplex.parent.vertices.filter((_, i) =>
      coxeter.activeMirrors.includes(i)
    )
    const edge = new Edge(lastActiveVertices[0], activeVertices[0])
    edge.push(color)
  }
  // combinations(simplex.vertices).forEach(([v1, v2]) => {
  //   edges.push({
  //     vertices: [v1, v2],
  //     color,
  //   })
  // })
}

const renderFace = (simplex, color, coexeter) => {
  const faceRoots = []

  for (let j = 0; j < 2 * coexeter.p; j++) {
    simplex = simplex.reflect(j % 2)
    const new_ = simplex.project()

    draw(simplex, color, new_, coexeter)

    if (!new_) {
      continue
    }

    if (j % 2 === 0) {
      faceRoots.push(simplex)
    }
  }
  return faceRoots
}

const renderCell = (simplex, coxeter) => {
  const cellRoots = []
  let faceRoots = [simplex]

  let newFaceRoots
  let iterations = 0

  while (faceRoots.length > 0 && iterations++ < 10) {
    newFaceRoots = []
    for (let i = 0; i < faceRoots.length; i++) {
      const root = faceRoots[i]
      const color = new Color().setHSL(
        (i + 1) / (faceRoots.length + 2),
        0.5,
        0.5
      )
      let seed = iterations === 1 ? root : root.reflect(2)
      const new_ = seed.project()
      draw(seed, color, new_, coxeter)

      if (!new_) {
        continue
      }
      newFaceRoots.push(...renderFace(seed, color, coxeter))
    }

    faceRoots = newFaceRoots
  }
  return cellRoots
}

export const getHoneyComb = () => {
  const p = 5
  const q = 3
  const r = 4
  const activeMirrors = [1]

  const fundamental = getGoursatSimplex(p, 2, 2, q, 2, r)
  const fundamentalSimplex = new Simplex([
    intersect(fundamental[0], fundamental[1], fundamental[2], 1),
    intersect(fundamental[0], fundamental[2], fundamental[3], 1),
    intersect(fundamental[0], fundamental[3], fundamental[1], 1),
    intersect(fundamental[1], fundamental[3], fundamental[2], 1),
  ])

  renderCell(fundamentalSimplex, { p, q, r, activeMirrors })

  return { vertices: Vertex.all, edges: Edge.all }
}
