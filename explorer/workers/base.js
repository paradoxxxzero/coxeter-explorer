import { normalize, reflect } from '../math/hypermath'
import { transpose } from '../math/matrix'
import { wordToCoset } from '../math/toddcoxeter'

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
      if (polytope.root.hosotope && polytope.root.vertices.size === 1) {
        // Monogon
        vertex.vertices.push(
          reflect(
            vertex.vertices[0],
            polytope.root.rootNormals[polytope.root.hosotope.index - 1],
            polytope.root.metric
          )
        )
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
        // Monogon
        if (polytope.root.vertices.size === 1) {
          const oppositeHosotopeVertex = hosotopeVertex.map(x => -x)
          objects.push({
            ...vertex,
            vertices: [vertex.vertices[0], oppositeHosotopeVertex],
          })
          objects.push({
            ...vertex,
            vertices: [oppositeHosotopeVertex, vertex.vertices[1]],
          })
        }
      } else {
        objects.push(vertex)
      }
      cached.currentWords.delete(cosetId)
    }
  } else if (rank === 2) {
    polytope.root.hosotopePair = null
    for (const [cosetId, word] of cached.currentWords) {
      const faceVertices = []
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(polytope.root, word + cached.facet[i])
        if (vertexId && polytope.root.vertices.has(vertexId)) {
          faceVertices.push(polytope.root.vertices.get(vertexId))
        }
      }
      if (polytope.root.hosotope) {
        // Monogon
        if (polytope.root.vertices.size === 1) {
          faceVertices.push(faceVertices[0].map(x => -x))
        }
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
        // Monogon
        if (polytope.root.vertices.size === 1) {
          faceVertices[3] = faceVertices[1].map(x => -x)
        }
      }
      if (faceVertices.length < rank + 1) {
        continue
      }

      const partial = faceVertices.length < cached.facet.length
      if (!partial) {
        cached.currentWords.delete(cosetId)
      }

      const vertex = {
        word,
        vertices: faceVertices,
        faceIndex: 0,
        faceSize: faceVertices.length,
        partial,
      }
      if (partial) {
        partials.push(vertex)
      } else {
        objects.push(vertex)
      }
    }
  } else if (rank === 3) {
    for (const [cosetId, word] of cached.currentWords) {
      const cellVertices = []
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(polytope.root, word + cached.facet[i])
        if (vertexId && polytope.root.vertices.has(vertexId)) {
          cellVertices.push(polytope.root.vertices.get(vertexId))
        }
      }
      if (cellVertices.length < rank + 1) {
        continue
      }
      const partial =
        cellVertices.length < cached.facet.length || cached.partial
      if (!partial) {
        cached.currentWords.delete(cosetId)
      }

      const vertex = {
        word,
        vertices: cellVertices,
        faceIndex: 0,
        faceSize: cellVertices.length,
        partial,
      }
      if (partial) {
        partials.push(vertex)
      } else {
        objects.push(vertex)
      }
    }
  }
  return { objects, partials }
}
