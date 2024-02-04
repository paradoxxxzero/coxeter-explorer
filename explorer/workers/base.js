import { normalize, reflect } from '../math/hypermath'
import { transpose } from '../math/matrix'
import { wordToCoset } from '../math/toddcoxeter'

export const getBaseObjects = (rank, cached, root) => {
  const objects = []
  const partials = []
  if (!cached.currentWords) {
    return { objects, partials }
  }
  if (rank === 0) {
    for (const [cosetId, word] of cached.currentWords) {
      objects.push({
        key: cached.key,
        word,
        vertices: [cached.vertices.get(cosetId)],
      })
      cached.currentWords.delete(cosetId)
    }
  } else if (rank === 1) {
    for (const [cosetId, word] of cached.currentWords) {
      const vertex = {
        key: cached.key,
        word,
        vertices: [],
      }
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(root, word + cached.facet[i])
        if (vertexId && root.vertices.has(vertexId)) {
          vertex.vertices.push(root.vertices.get(vertexId))
        }
      }
      if (root.hosotope && root.vertices.size === 1) {
        // Monogon
        vertex.vertices.push(
          reflect(
            vertex.vertices[0],
            root.rootNormals[root.hosotope.index - 1],
            root.metric
          )
        )
      }
      if (vertex.vertices.length < rank + 1) {
        continue
      }
      if (root.hosotope) {
        let hosotopeVertex
        if (!root.hosotopeVertex) {
          root.hosotopeVertex = normalize(
            transpose(root.rootVertices)[root.hosotope.index],
            root.metric
          )
          hosotopeVertex = root.hosotopeVertex
        } else {
          hosotopeVertex = word
            .split('')
            .reverse()
            .reduce(
              (a, b) =>
                reflect(a, root.rootNormals[root.gens.indexOf(b)], root.metric),
              root.hosotopeVertex
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
        if (root.vertices.size === 1) {
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
    root.hosotopePair = null
    for (const [cosetId, word] of cached.currentWords) {
      const faceVertices = []
      for (let i = 0; i < cached.facet.length; i++) {
        const vertexId = wordToCoset(root, word + cached.facet[i])
        if (vertexId && root.vertices.has(vertexId)) {
          faceVertices.push(root.vertices.get(vertexId))
        }
      }
      if (root.hosotope) {
        // Monogon
        if (root.vertices.size === 1) {
          faceVertices.push(faceVertices[0].map(x => -x))
        }
        let hosotopePair
        if (!root.hosotopePair) {
          const hosotopeVertex = normalize(
            transpose(root.rootVertices)[root.hosotope.index],
            root.metric
          )
          root.hosotopePair = [
            hosotopeVertex,
            reflect(
              hosotopeVertex,
              root.rootNormals[root.hosotope.index],
              root.metric
            ),
          ]
          hosotopePair = root.hosotopePair
        } else {
          hosotopePair = root.hosotopePair.map(hosotopeVertex =>
            word
              .split('')
              .reverse()
              .reduce(
                (a, b) =>
                  reflect(
                    a,
                    root.rootNormals[root.gens.indexOf(b)],
                    root.metric
                  ),
                hosotopeVertex
              )
          )
        }
        faceVertices.splice(1, 0, hosotopePair[0])
        faceVertices.push(hosotopePair[1])
        // Monogon
        if (root.vertices.size === 1) {
          faceVertices[3] = faceVertices[1].map(x => -x)
        }
      }
      if (faceVertices.length < rank + 1) {
        continue
      }

      const partial =
        faceVertices.length < cached.facet.length || cached.partial
      if (!partial) {
        cached.currentWords.delete(cosetId)
      }

      const vertex = {
        key: cached.key,
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
        const vertexId = wordToCoset(root, word + cached.facet[i])
        if (vertexId && root.vertices.has(vertexId)) {
          cellVertices.push(root.vertices.get(vertexId))
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
        key: cached.key,
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
