import { Color } from 'three'
import Edge from './math/Edge'
import { cartesian, combinations } from './math/index.js'

export const draw = (simplex, color, coxeter, new_ = true) => {
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
      .filter((_, i) => simplex.mirror === i)
      .forEach(vertex => vertex.push(color))
  }

  if (coxeter.DEBUG) {
    simplex.vertices.forEach(vertex => vertex.push(color))
    combinations(simplex.vertices).forEach(([v1, v2]) => {
      const edge = new Edge(v1, v2)
      edge.push(color)
    })
    return
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
}

export const renderFace = (simplex, color, coxeter) => {
  const simplices = [simplex]

  color && draw(simplex, color, coxeter)

  for (let j = 1; j < 2 * coxeter.p; j++) {
    const newSimplex = simplex.reflect(1 - (j % 2))
    const new_ = newSimplex.isNew()

    color && draw(newSimplex, color, coxeter, new_)
    simplex = newSimplex
    if (!new_) {
      continue
    }

    simplices.push(simplex)
  }
  return simplices
}

export const renderCell = (simplex, color, coxeter, order) => {
  const cellRoots = []
  let faceRoots = [simplex]

  let newFaceRoots

  for (let j = 0; j < coxeter.subOrder && faceRoots.length; j++) {
    newFaceRoots = []
    for (let i = 0; i < faceRoots.length; i++) {
      const root = faceRoots[i]
      let seed
      if (j > 0) {
        seed = root.reflect(2)

        const new_ = seed.isNew()

        color && draw(seed, color, coxeter, new_)
        if (!new_) {
          continue
        }
        cellRoots.push(seed)
      } else {
        seed = root
        color && draw(seed, color, coxeter, false)
        if (order === 1) {
          cellRoots.push(seed)
        }
      }

      newFaceRoots.push(...renderFace(seed, color, coxeter, j))
    }

    faceRoots = newFaceRoots
  }
  return cellRoots
}

export const renderHoneyComb = (simplex, coxeter) => {
  let cellRoots = [simplex]

  let newCellRoots

  for (let j = 0; j < coxeter.order && cellRoots.length; j++) {
    const color = new Color().setHSL(j / 5, 0.5, 0.5)
    newCellRoots = []
    for (let i = 0; i < cellRoots.length; i++) {
      const root = cellRoots[i]
      let seed
      if (j === 0) {
        seed = root
        draw(seed, color, coxeter)
        newCellRoots = [simplex]
        continue
      }
      if (j === 1) {
        seed = root
      } else {
        seed = root.reflect(3)
      }

      const new_ = seed.isNew()
      draw(seed, color, coxeter, new_)

      if (!new_) {
        continue
      }
      newCellRoots.push(...renderCell(seed, color, coxeter, j))
    }

    cellRoots = newCellRoots
  }
}
