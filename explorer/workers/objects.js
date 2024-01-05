import { wordToCoset } from '../math/toddcoxeter'
import { isSnub } from '../mirrors'

const reorder = (i, n, double = false, snub = false) => {
  if (double) {
    if (snub) {
      return i
    }
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

export const getObjects = (cached, shape, rootCached) => {
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
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(rootCached, word + cached.facet[i])
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
      const double = cached.mirrors.every(m => !!m)
      const snub = cached.mirrors.some(m => isSnub(m))
      const parity = word.length % 2 ? 0 : 1

      const faceVertices = []
      for (let h = 0; h < cached.facet.length; h++) {
        const i = reorder(h, cached.facet.length, double, snub)
        const vertexId = wordToCoset(rootCached, word + cached.facet[i])
        if (vertexId && rootCached.vertices.has(vertexId)) {
          faceVertices.push(rootCached.vertices.get(vertexId))
        }
      }

      if (faceVertices.length < 3) {
        continue
      }
      const partial = faceVertices.length < cached.facet.length

      if (faceVertices.length === 3) {
        if (parity) {
          ;[faceVertices[2], faceVertices[1]] = [
            faceVertices[1],
            faceVertices[2],
          ]
        }
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
        const vertex = {
          word,
          vertices: [
            faceVertices[(j + parity) % faceVertices.length],
            faceVertices[(j + (1 - parity)) % faceVertices.length],
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
