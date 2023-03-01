import { Color } from 'three'
import { getGoursatSimplex, intersect } from './math/hypermath'
import Simplex from './math/Simplex.js'
import { combinations } from './math/index.js'

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

export const getHoneyComb = (order = 1) => {
  const p = 5
  const q = 3
  const r = 4

  const activeMirrors = [1]
  const vertices = []
  const edges = []

  const fundamental = getGoursatSimplex(p, 2, 2, q, 2, r)
  const fundamentalSimplex = new Simplex([
    intersect(fundamental[0], fundamental[1], fundamental[2], 1),
    intersect(fundamental[0], fundamental[2], fundamental[3], 1),
    intersect(fundamental[0], fundamental[3], fundamental[1], 1),
    intersect(fundamental[1], fundamental[3], fundamental[2], 1),
  ])

  const draw = (simplex, color, new_) => {
    const activeVertices = simplex.vertices.filter((_, i) =>
      activeMirrors.includes(i)
    )
    if (new_) {
      activeVertices.forEach(vertex => {
        vertices.push({
          vertex,
          color,
        })
      })
    }

    if (simplex.parent) {
      const lastActiveVertices = simplex.parent.vertices.filter((_, i) =>
        activeMirrors.includes(i)
      )
      const edge = [lastActiveVertices[0], activeVertices[0]]
      edges.push({
        vertices: edge,
        color,
      })
    }
    // combinations(simplex.vertices).forEach(([v1, v2]) => {
    //   edges.push({
    //     vertices: [v1, v2],
    //     color,
    //   })
    // })
  }

  const renderFace = (simplex, color) => {
    const faceRoots = []

    for (let j = 0; j < 2 * p; j++) {
      simplex = simplex.reflect(j % 2)
      const new_ = simplex.project()

      draw(simplex, color, new_)

      if (!new_) {
        continue
      }

      if (j % 2 === 0) {
        faceRoots.push(simplex)
      }
    }
    return faceRoots
  }

  const renderCell = simplex => {
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

        if (!seed.project()) {
          continue
        }
        draw(seed, color)

        newFaceRoots.push(...renderFace(seed, color))
      }

      faceRoots = newFaceRoots
    }
    return cellRoots
  }

  renderCell(fundamentalSimplex)

  return { vertices, edges }
}
