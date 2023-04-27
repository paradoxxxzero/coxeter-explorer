import { getEdgesCosets, getVerticesCosets } from '../math/coset'
import { reflect } from '../math/hypermath'

const reflectWord = (state, word) => {
  const { rootVertex, mirrorsPlanes, curvature } = state
  let v = rootVertex

  for (let i = 0; i < word.length; i++) {
    v = reflect(v, mirrorsPlanes[word.charCodeAt(i) - 97], curvature)
  }
  return v
}

onmessage = ({
  data: {
    order,
    curvature,
    mirrorsPlanes,
    coxeter,
    mirrors,
    rootVertex,
    dimensions,
    uuid,
  },
}) => {
  const previousLimit = order * 100
  const limit = (order + 1) * 100
  try {
    let vertices = []
    let edges = []
    const verticesWords = getVerticesCosets(dimensions, coxeter, mirrors, limit)
    // init(rootVertex, cosets)
    for (let i = 0; i < verticesWords.length; i++) {
      const word = verticesWords[i]
      const vertex = reflectWord({ rootVertex, mirrorsPlanes, curvature }, word)
      if (i > previousLimit) {
        vertices.push({
          vertex,
          word,
        })
      }
    }

    const cosetsEdges = getEdgesCosets(dimensions, coxeter, mirrors, limit)
    const entries = Object.entries(cosetsEdges)
    for (let i = 0; i < entries.length; i++) {
      const [word, edgeWords] = entries[i]
      const rootStart = rootVertex
      const rootEnd = reflectWord(
        { rootVertex: rootStart, mirrorsPlanes, curvature },
        word
      )
      // TODO: reuse vertices
      for (let j = 0; j < edgeWords.length; j++) {
        const word = edgeWords[j]
        const start = reflectWord(
          { rootVertex: rootStart, mirrorsPlanes, curvature },
          word
        )
        const end = reflectWord(
          { rootVertex: rootEnd, mirrorsPlanes, curvature },
          word
        )
        if (j > previousLimit) {
          edges.push({
            start,
            end,
            word,
          })
        }
      }
    }

    postMessage({ vertices, edges, uuid })
  } catch (e) {
    postMessage({ error: e.message, uuid })
  }
}
