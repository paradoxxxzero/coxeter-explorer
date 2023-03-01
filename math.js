import { Color } from 'three'
import Edge from './math/Edge'
import { cartesian, combinations } from './math/index.js'

export const draw = (simplex, color, new_, coxeter) => {
  if (
    simplex.vertices.some(vertex =>
      'xyz'.split('').some(c => isNaN(vertex.vertex[c]))
    )
  ) {
    return
  }
  const activeVertices = simplex.vertices.map((_, i) =>
    coxeter.activeMirrors.includes(i) ? simplex.vertices[i] : null
  )
  if (new_) {
    activeVertices
      .filter(vertex => vertex)
      .forEach(vertex => vertex.push(color))
  }

  if (simplex.parent) {
    const lastActiveVertices = simplex.parent.vertices.map((_, i) =>
      coxeter.activeMirrors.includes(i) ? simplex.parent.vertices[i] : null
    )

    cartesian(coxeter.activeMirrors, coxeter.activeMirrors).forEach(
      ([i, j]) => {
        const edge = new Edge(lastActiveVertices[i], activeVertices[j])
        edge.push(color)
      }
    )
  }
  if (coxeter.DEBUG) {
    color = color.clone().offsetHSL(0, -0.3, -0.3)
    simplex.vertices.forEach(vertex => vertex.push(color))
    combinations(simplex.vertices).forEach(([v1, v2]) => {
      const edge = new Edge(v1, v2)
      edge.push(color)
    })
  }
}

const renderFace = (simplex, color, coxeter) => {
  const faceRoots = []

  for (let j = 0; j < 2 * coxeter.p; j++) {
    const newSimplex = simplex.reflect(1 - (j % 2))
    const new_ = newSimplex.isNew()

    draw(newSimplex, color, new_, coxeter)
    simplex = newSimplex
    if (!new_) {
      continue
    }

    if (j % 2 == 0 && j <= coxeter.p) {
      faceRoots.push(simplex)
    }
  }
  return faceRoots
}

const renderCell = (simplex, coxeter, color) => {
  const maxIterations = 4
  const cellRoots = []
  let faceRoots = [simplex]

  let newFaceRoots

  for (let j = 0; j < maxIterations && faceRoots.length; j++) {
    newFaceRoots = []
    for (let i = 0; i < faceRoots.length; i++) {
      const root = faceRoots[i]
      let seed
      if (j > 0) {
        seed = root.reflect(2)

        const new_ = seed.isNew()

        draw(seed, color, new_, coxeter)
        if (!new_) {
          continue
        }
      } else {
        seed = root
        draw(seed, color, false, coxeter)
      }
      cellRoots.push(seed)

      newFaceRoots.push(...renderFace(seed, color, coxeter))
    }

    faceRoots = newFaceRoots
  }
  return cellRoots
}

export const renderHoneyComb = (simplex, coxeter) => {
  const maxIterations = 4
  let cellRoots = [simplex]

  let newCellRoots

  for (let j = 0; j < maxIterations && cellRoots.length; j++) {
    newCellRoots = []
    for (let i = 0; i < cellRoots.length; i++) {
      const root = cellRoots[i]
      const color = new Color().setHSL(j / maxIterations, 0.5, 0.5)
      let seed
      if (j > 1) {
        seed = root.reflect(3)

        const new_ = seed.isNew()
        draw(seed, color, new_, coxeter)

        if (!new_) {
          continue
        }
      } else {
        seed = root
        draw(seed, color, true, coxeter)
      }
      newCellRoots.push(...renderCell(seed, coxeter, color))
    }

    cellRoots = newCellRoots
  }
}
