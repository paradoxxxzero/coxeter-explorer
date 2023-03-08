import { rewrite } from './math/group'
import { reflect, intersect } from './math/hypermath'
import { Color } from 'three'
const MAX_ITERATIONS = 32
const simplices = new Map()

const letters = 'abcd'

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
  }
}

const plot = (simplex, coxeter, mirror, color, lastSimplex) => {
  simplex.vertices = [null, null, null, null]
  for (let i = 0; i < simplex.faces.length; i++) {
    if (i === mirror || !coxeter.activeMirrors.includes(i)) {
      if (lastSimplex && lastSimplex.vertices[i]) {
        simplex.vertices[i] = lastSimplex.vertices[i]
      }
      continue
    }

    const vertex = intersect(...simplex.faces.filter((_, j) => j !== i))
    simplex.vertices[i] = vertex
    coxeter.vertices.push({ vertex, color })
  }
}

const link = (simplex, lastSimplex, coxeter, color) => {
  const vertices = simplex.vertices || simplices.get(simplex.word).vertices
  const lastVertices =
    lastSimplex.vertices || simplices.get(lastSimplex.word).vertices
  for (let i = 0; i < vertices.length; i++) {
    if (!vertices[i] || !lastVertices[i]) continue
    coxeter.edges.push({
      vertex1: vertices[i],
      vertex2: lastVertices[i],
      color,
    })
  }
}

export const renderHoneyComb = (simplex, coxeter) => {
  let color = new Color().setHSL(0, 0.5, 0.5)
  simplices.clear()
  simplices.set('', simplex)
  plot(simplex, coxeter, null, color)
  // Draw first face
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    color = color.offsetHSL(0.1, 0, 0).clone()
    let lastSimplex = simplex
    let mirror = 1 - (i % 2)
    simplex = reflectSimplex(simplex, mirror, coxeter)
    if (!simplices.has(simplex.word)) {
      plot(simplex, coxeter, mirror, color, lastSimplex)
      simplices.set(simplex.word, simplex)
    }
    link(simplex, lastSimplex, coxeter, color)
  }
}
