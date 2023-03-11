import { rewrite, sorter } from './math/group'
import { reflect, intersect } from './math/hypermath'
import { Color } from 'three'
const MAX_ITERATIONS = 32
const simplices = new Map()
const edges = new Set()
const vertices = new Set()

const letters = 'abcd'

export const reset = () => {
  simplices.clear()
  edges.clear()
}

const reflectSimplex = (simplex, mirror, coxeter) => {
  const newFaces = []
  for (let i = 0; i < simplex.faces.length; i++) {
    const face = simplex.faces[i]
    if (i === mirror) {
      newFaces.push(face)
      continue
    }
    newFaces.push(reflect(face, simplex.faces[mirror]))
  }

  return {
    faces: newFaces,
    word: rewrite(coxeter.rules, simplex.word + letters[mirror]),
    fromMirror: mirror,
  }
}

const plot = (simplex, coxeter, color) => {
  simplex.vertices = [null, null, null, null]
  simplex.linking = [null, null, null, null]
  for (let i = 0; i < simplex.faces.length; i++) {
    if (!coxeter.activeMirrors.includes(i) && !coxeter.DEBUG) {
      continue
    }

    const vertex = intersect(...simplex.faces.filter((_, j) => j !== i))
    simplex.vertices[i] = vertex
    if (i === simplex.fromMirror || !simplex.fromMirror) {
      // rewrite(coxeter.rules, simplex.word + letters[i])
      simplex.linking[i] = true
      // console.log('plot', simplex.word, i)
      coxeter.vertices.push({ vertex, color })
    }
  }
}

const link = (simplex, lastSimplex, coxeter, color) => {
  const edgeWord = [simplex.word, lastSimplex.word].sort(sorter).join('/')
  if (edges.has(edgeWord)) {
    return
  }
  edges.add(edgeWord)
  if (!simplex.vertices) {
    simplex = simplices.get(simplex.word)
  }
  if (!lastSimplex.vertices) {
    lastSimplex = simplices.get(lastSimplex.word)
  }

  for (let i = 0; i < simplex.vertices.length; i++) {
    if (
      !simplex.vertices[i] ||
      !lastSimplex.vertices[i] ||
      !simplex.linking[i]
    ) {
      continue
    }
    // console.log('link', simplex.word, lastSimplex.word)
    coxeter.edges.push({
      vertex1: simplex.vertices[i],
      vertex2: lastSimplex.vertices[i],
      color,
    })
    if (coxeter.DEBUG) {
      for (let j = 0; j < simplex.vertices.length; j++) {
        if (!simplex.vertices[j] || i === j) {
          continue
        }
        coxeter.edges.push({
          vertex1: simplex.vertices[i],
          vertex2: simplex.vertices[j],
          color,
        })
      }
    }
  }
}

const renderFace = (simplex, color, coxeter, faceSimplices) => {
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const lastSimplex = simplex
    const mirror = 1 - (i % 2)
    simplex = reflectSimplex(simplex, mirror, coxeter)
    const isNew = !simplices.has(simplex.word)
    if (isNew) {
      plot(simplex, coxeter, color)
      simplices.set(simplex.word, simplex)
    }
    link(simplex, lastSimplex, coxeter, color)
    if (!isNew) break
    faceSimplices.push(simplex)
  }
}

const renderCell = (simplex, color, coxeter, cellSimplices) => {
  let faceSimplices = [simplex]
  renderFace(simplex, color, coxeter, faceSimplices)
  cellSimplices.push(...faceSimplices)
  let lastFaceSimplices = faceSimplices

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    faceSimplices = []

    for (let j = 0; j < lastFaceSimplices.length; j++) {
      simplex = lastFaceSimplices[j]

      const lastSimplex = simplex
      const mirror = 2
      simplex = reflectSimplex(simplex, mirror, coxeter)
      const isNew = !simplices.has(simplex.word)
      if (isNew) {
        plot(simplex, coxeter, color)
        simplices.set(simplex.word, simplex)
        faceSimplices.push(simplex)
        renderFace(simplex, color, coxeter, faceSimplices)
        cellSimplices.push(...faceSimplices)
      }
      link(simplex, lastSimplex, coxeter, color)
    }

    if (!faceSimplices.length) {
      break
    }
    lastFaceSimplices = faceSimplices
  }
}

export const renderHoneyComb = (simplex, coxeter) => {
  let color = new Color().setHSL(0, 0.5, 0.5)
  simplices.set('', simplex)

  plot(simplex, coxeter, color.clone())

  let cellSimplices = [simplex]
  renderCell(simplex, color, coxeter, cellSimplices)
  let lastCellSimplices = cellSimplices
  for (let i = 0; i < coxeter.order - 1; i++) {
    cellSimplices = []
    for (let j = 0; j < lastCellSimplices.length; j++) {
      simplex = lastCellSimplices[j]

      color = color.offsetHSL(0.1, 0, 0).clone()
      const lastSimplex = simplex
      const mirror = 3
      simplex = reflectSimplex(simplex, mirror, coxeter)
      const isNew = !simplices.has(simplex.word)
      if (isNew) {
        plot(simplex, coxeter, color)
        simplices.set(simplex.word, simplex)
        renderCell(simplex, color, coxeter, cellSimplices)
      }
      link(simplex, lastSimplex, coxeter, color)
    }

    if (!cellSimplices.length) {
      break
    }
    lastCellSimplices = cellSimplices
  }
}

// export const renderHoneyComb = (simplex, coxeter) => {
//   let color = new Color().setHSL(0, 0.5, 0.5)
//   simplices.set('', simplex)
//   plot(simplex, coxeter, color)
//   let current = [simplex]
//   renderCell(simplex, color.clone(), coxeter, current)

//   if (coxeter.order > 1) {
//     let lastCurrent = current
//     current = []
//     color = color.offsetHSL(0.1, 0, 0).clone()
//     for (let i = 0; i < lastCurrent.length; i++) {
//       simplex = lastCurrent[i]
//       const lastSimplex = simplex
//       const mirror = 3
//       simplex = reflectSimplex(simplex, mirror, coxeter)
//       const isNew = !simplices.has(simplex.word)
//       if (isNew) {
//         plot(simplex, coxeter, color)
//         simplices.set(simplex.word, simplex)
//         current.push(simplex)
//       }
//       link(simplex, lastSimplex, coxeter, color)
//     }
//   }

//   let lastCurrent = current
//   for (let i = 0; i < coxeter.order - 2; i++) {
//     color = color.offsetHSL(0.1, 0, 0).clone()
//     current = []
//     for (let j = 0; j < lastCurrent.length; j++) {
//       simplex = lastCurrent[j]
//       for (let k = 0; k < simplex.faces.length; k++) {
//         if (k === simplex.fromMirror) {
//           continue
//         }
//         const mirror = k
//         const newSimplex = reflectSimplex(simplex, mirror, coxeter)
//         const isNew = !simplices.has(newSimplex.word)
//         if (isNew) {
//           plot(newSimplex, coxeter, color)
//           simplices.set(newSimplex.word, newSimplex)
//           current.push(newSimplex)
//         }
//         link(newSimplex, simplex, coxeter, color)
//       }
//     }
//     lastCurrent = current
//   }
// }
