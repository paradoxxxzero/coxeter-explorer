import { abs } from '../math'
import { normalize, reflect } from '../math/hypermath'
import { addV, mulV, transpose } from '../math/matrix'
import { wordToCoset } from '../math/toddcoxeter'
import { isSnub } from '../mirrors'

export const getBaseObjects = (rank, cached, shape, polytope) => {
  const objects = []
  const partials = []
  if (rank === 0) {
    for (const [cosetId, word] of cached.currentWords) {
      objects.push({
        word,
        vertices: [cached.vertices.get(cosetId)],
      })
      cached.currentWords.delete(cosetId)
    }
  } else if (rank === 1) {
    for (const [cosetId, word] of cached.currentWords) {
      const vertex = { word, vertices: [] }
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(polytope.root, word + cached.facet[i])
        if (vertexId && polytope.root.vertices.has(vertexId)) {
          vertex.vertices.push(polytope.root.vertices.get(vertexId))
        }
      }
      if (vertex.vertices.length < rank + 1) {
        continue
      }
      if (polytope.root.hosotope) {
        let hosotopeVertex
        if (!polytope.root.hosotopeVertex) {
          polytope.root.hosotopeVertex = normalize(
            transpose(polytope.root.rootVertices)[polytope.root.hosotope.index],
            polytope.root.metric
          )
          hosotopeVertex = polytope.root.hosotopeVertex
        } else {
          hosotopeVertex = word
            .split('')
            .reverse()
            .reduce(
              (a, b) =>
                reflect(
                  a,
                  polytope.root.rootNormals[polytope.root.gens.indexOf(b)],
                  polytope.root.metric
                ),
              polytope.root.hosotopeVertex
            )
        }
        objects.push({
          ...vertex,
          vertices: [vertex.vertices[0], hosotopeVertex],
        })
        objects.push({
          ...vertex,
          vertices: [hosotopeVertex, vertex.vertices[1]],
        })
      } else {
        objects.push(vertex)
      }
      cached.currentWords.delete(cosetId)
    }
  } else if (rank === 2) {
    polytope.root.hosotopePair = null
    for (const [cosetId, word] of cached.currentWords) {
      const parity = word.length % 2 ? 0 : 1

      const faceVertices = []
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(polytope.root, word + cached.facet[i])
        if (vertexId && polytope.root.vertices.has(vertexId)) {
          faceVertices.push(polytope.root.vertices.get(vertexId))
        }
      }
      if (polytope.root.hosotope) {
        let hosotopePair
        if (!polytope.root.hosotopePair) {
          const hosotopeVertex = normalize(
            transpose(polytope.root.rootVertices)[polytope.root.hosotope.index],
            polytope.root.metric
          )
          polytope.root.hosotopePair = [
            hosotopeVertex,
            reflect(
              hosotopeVertex,
              polytope.root.rootNormals[polytope.root.hosotope.index],
              polytope.root.metric
            ),
          ]
          hosotopePair = polytope.root.hosotopePair
        } else {
          hosotopePair = polytope.root.hosotopePair.map(hosotopeVertex =>
            word
              .split('')
              .reverse()
              .reduce(
                (a, b) =>
                  reflect(
                    a,
                    polytope.root.rootNormals[polytope.root.gens.indexOf(b)],
                    polytope.root.metric
                  ),
                hosotopeVertex
              )
          )
        }
        faceVertices.splice(1, 0, hosotopePair[0])
        faceVertices.push(hosotopePair[1])
      }
      if (faceVertices.length < rank + 1) {
        continue
      }

      const partial = faceVertices.length < cached.facet.length
      if (!partial) {
        cached.currentWords.delete(cosetId)
      }

      if (
        faceVertices.length === 3 &&
        !faceVertices
          .reduce((a, b) => addV(a, b), new Array(shape.dimensions).fill(0))
          .every(a => abs(a) < 1e-12)
      ) {
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
        }
        continue
      }

      let centroid = new Array(shape.dimensions).fill(0)
      for (let j = 0; j < faceVertices.length; j++) {
        const vertices = faceVertices[j]
        centroid = addV(centroid, vertices)
      }
      centroid = mulV(centroid, 1 / faceVertices.length)
      const centroids = []
      if (centroid.every(a => abs(a) < 1e-12)) {
        const zeroes = faceVertices[0]
          .map((a, i) => (a === 0 ? i : null))
          .filter(a => a !== null)
        if (!zeroes.length) {
          centroids.push(centroid)
        } else {
          for (let i = 0; i < zeroes.length; i++) {
            const zero = zeroes[i]
            for (let p = -1; p < 2; p += 2) {
              const point = centroid.map((a, j) => (j === zero ? p : a))
              centroids.push(point)
            }
          }
        }
      } else {
        centroids.push(centroid)
      }
      for (let j = 0; j < faceVertices.length; j++) {
        for (let k = 0; k < centroids.length; k++) {
          const vertex = {
            word,
            vertices: [
              faceVertices[(j + parity) % faceVertices.length],
              faceVertices[(j + (1 - parity)) % faceVertices.length],
              centroids[k],
            ],
            faceIndex: j,
            faceSize: faceVertices.length,
            partial,
          }

          if (partial) {
            partials.push(vertex)
          } else {
            objects.push(vertex)
          }
        }
      }
    }
  }
  return { objects, partials }
}
