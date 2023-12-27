import { wordToCoset } from '../math/toddcoxeter'
import { isSnub } from '../mirrors'

const reorder = (i, n, double = false) => {
  if (double) {
    const parity = i > 0 ? 1 - (i % 2) : 0
    if (i >= n / 2 + parity) {
      return 2 * (n - i) - 1 + parity
    }
    return 2 * i - parity
  }
  if (i >= n / 2) {
    return 2 * (n - i) - 1
  }
  return 2 * i
}

export const getObjects = (cached, shape, space, rootCached) => {
  const objects = []
  const partials = []
  if (cached.subdimensions === 0) {
    for (const [cosetId, word] of cached.currentWords) {
      objects.push({
        word,
        vertices: [cached.vertices.get(cosetId)],
      })
      cached.currentWords.delete(cosetId)
    }
  } else if (cached.subdimensions === 1) {
    for (const [cosetId, word] of cached.currentWords) {
      const vertex = { word, vertices: [] }
      for (let i = 0; i < cached.space.length; i++) {
        const vertexId = wordToCoset(rootCached, word + cached.space[i])
        if (vertexId && rootCached.vertices.has(vertexId)) {
          vertex.vertices.push(rootCached.vertices.get(vertexId))
        }
      }
      if (vertex.vertices.length < 2) {
        continue
      }
      objects.push(vertex)
      cached.currentWords.delete(cosetId)
    }
  } else if (cached.subdimensions === 2) {
    for (const [cosetId, word] of cached.currentWords) {
      const faceVertices = []
      for (let h = 0; h < cached.space.length; h++) {
        const double = cached.mirrors.every(m => !!m)
        const snub = cached.mirrors.some(m => isSnub(m))
        const i = snub ? h : reorder(h, cached.space.length, double)
        const vertexId = wordToCoset(rootCached, word + cached.space[i])
        if (vertexId && rootCached.vertices.has(vertexId)) {
          faceVertices.push(rootCached.vertices.get(vertexId))
        }
      }
      if (faceVertices.length < 3) {
        continue
      }
      const partial = faceVertices.length < cached.space.length

      if (faceVertices.length === 3) {
        const vertex = {
          word,
          vertices: faceVertices,
          faceIndex: 0,
          faceSize: 3,
          partial,
        }
        if (partial) {
          partials.push(vertex)
        } else {
          objects.push(vertex)
          cached.currentWords.delete(cosetId)
        }
        continue
      }

      const center = new Array(shape.dimensions).fill(0)
      for (let j = 0; j < faceVertices.length; j++) {
        const vertices = faceVertices[j]
        for (let k = 0; k < vertices.length; k++) {
          center[k] += vertices[k]
        }
      }
      for (let j = 0; j < shape.dimensions; j++) {
        center[j] /= faceVertices.length
      }
      for (let j = 0; j < faceVertices.length; j++) {
        const p = word.length % 2 === space.curvature > 0 ? 0 : 1
        const vertex = {
          word,
          vertices: [
            faceVertices[(j + p) % faceVertices.length],
            faceVertices[(j + (1 - p)) % faceVertices.length],
            center,
          ],
          faceIndex: j,
          faceSize: faceVertices.length,
          partial,
        }
        if (partial) {
          partials.push(vertex)
        } else {
          objects.push(vertex)
          cached.currentWords.delete(cosetId)
        }
      }
    }
  }
  return { objects, partials }
}
