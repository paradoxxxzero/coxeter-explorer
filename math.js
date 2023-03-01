import { Color } from 'three'
import Edge from './math/Edge'
import { cartesian, combinations } from './math/index.js'

export const draw = (simplex, color, new_, coxeter) => {
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
    simplex = simplex.reflect(1 - (j % 2))
    const new_ = simplex.project()

    draw(simplex, color, new_, coxeter)

    if (!new_) {
      continue
    }

    if (j % 2 == 0 && j <= coxeter.p) {
      faceRoots.push(simplex)
    }
  }
  return faceRoots
}

const renderCell = (simplex, coxeter) => {
  const cellRoots = []
  let faceRoots = [simplex]

  let newFaceRoots

  for (let j = 0; j < 10 && faceRoots.length; j++) {
    newFaceRoots = []
    for (let i = 0; i < faceRoots.length; i++) {
      const root = faceRoots[i]
      const color = new Color().setHSL(j / 5, 0.5, 0.5)
      let seed
      if (j > 0) {
        seed = root.reflect(2)

        const new_ = seed.project()

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
  let cellRoots = [simplex]

  let newCellRoots
  let iterations = 0

  while (cellRoots.length > 0 && iterations++ < 3) {
    newCellRoots = []
    for (let i = 0; i < cellRoots.length; i++) {
      const root = cellRoots[i]
      const color = new Color().setHSL(0, 0.5, 1)
      let seed
      if (iterations > 1) {
        seed = root.reflect(3)

        const new_ = seed.project()
        draw(seed, color, new_, coxeter)

        if (!new_) {
          continue
        }
      } else {
        seed = root
        draw(seed, color, true, coxeter)
      }
      newCellRoots.push(...renderCell(seed, coxeter))
    }

    cellRoots = newCellRoots
  }
}
