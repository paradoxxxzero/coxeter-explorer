import {
  getEdgesCosetsParams,
  getVerticesCosetsParams,
  solve,
} from '../math/coset'
import { reflect } from '../math/hypermath'

let verticesParams = null
let edgesParams = null

const initCosets = (dimensions, coxeter, mirrors) => {
  const defaultParams = () => ({
    cosets: {
      normal: [],
      reverse: [],
    },
    rows: [],
    words: [],
  })

  verticesParams = {
    ...getVerticesCosetsParams(dimensions, coxeter, mirrors),
    ...defaultParams(),
  }
  edgesParams = getEdgesCosetsParams(dimensions, coxeter, mirrors).map(
    edgeParams => ({
      ...edgeParams,
      ...defaultParams(),
    })
  )
}

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
  if (order === 0) {
    initCosets(dimensions, coxeter, mirrors)
  }
  const limit = (order + 1) * 250
  try {
    let vertices = []
    let edges = []
    let previousLength = verticesParams.words.length
    verticesParams.limit = limit

    solve(verticesParams)
    // init(rootVertex, cosets)
    for (let i = previousLength; i < verticesParams.words.length; i++) {
      const word = verticesParams.words[i]
      const vertex = reflectWord({ rootVertex, mirrorsPlanes, curvature }, word)
      vertices.push({
        vertex,
        word,
      })
    }
    for (let i = 0; i < edgesParams.length; i++) {
      const edgeParams = edgesParams[i]
      const previousLength = edgeParams.words.length
      edgeParams.limit = limit
      solve(edgeParams)
      const rootStart = rootVertex
      const rootEnd = reflectWord(
        { rootVertex: rootStart, mirrorsPlanes, curvature },
        edgeParams.edgeMirror
      )
      for (let j = previousLength; j < edgeParams.words.length; j++) {
        const word = edgeParams.words[j]
        const start = reflectWord(
          { rootVertex: rootStart, mirrorsPlanes, curvature },
          word
        )
        const end = reflectWord(
          { rootVertex: rootEnd, mirrorsPlanes, curvature },
          word
        )
        edges.push({
          start,
          end,
          word,
        })
      }
    }

    // const cosetsEdges = getEdgesCosets(dimensions, coxeter, mirrors, limit)
    // const entries = Object.entries(cosetsEdges)
    // for (let i = 0; i < entries.length; i++) {
    //   const [word, edgeWords] = entries[i]
    //   const rootStart = rootVertex
    //   const rootEnd = reflectWord(
    //     { rootVertex: rootStart, mirrorsPlanes, curvature },
    //     word
    //   )
    //   // TODO: reuse vertices
    //   for (let j = 0; j < edgeWords.length; j++) {
    //     const word = edgeWords[j]
    //     const start = reflectWord(
    //       { rootVertex: rootStart, mirrorsPlanes, curvature },
    //       word
    //     )
    //     const end = reflectWord(
    //       { rootVertex: rootEnd, mirrorsPlanes, curvature },
    //       word
    //     )
    //     edges.push({
    //       start,
    //       end,
    //       word,
    //     })
    //   }
    // }

    postMessage({ vertices, edges, uuid })
  } catch (e) {
    postMessage({ error: e.message, uuid })
  }
}
