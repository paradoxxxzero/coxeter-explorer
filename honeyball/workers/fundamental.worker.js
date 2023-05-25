import { combinations } from '../math'
import { getVerticesCosetsParams, solve } from '../math/coset'
import { getFundamentalVertex, reflect } from '../math/hypermath'

let verticesParams = null
let fundamentalVertices = null

const initCosets = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  mirrorsPlanes,
  curvature
) => {
  const defaultParams = () => ({
    cosets: {
      normal: [],
      reverse: [],
    },
    rows: [],
    words: [],
    done: false,
    lastDrawn: 0,
  })

  fundamentalVertices = new Array(dimensions).fill().map((_, i) =>
    getFundamentalVertex(
      new Array(dimensions).fill().map((_, j) => (j === i ? 1 : 0)),
      mirrorsPlanes,
      curvature
    )
  )

  verticesParams = {
    ...getVerticesCosetsParams(
      dimensions,
      coxeter,
      stellation,
      new Array(dimensions).fill(1),
      curvature
    ),
    ...defaultParams(),
  }
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
    stellation,
    mirrors,
    rootVertex,
    dimensions,
    uuid,
  },
}) => {
  if (order === 0) {
    initCosets(
      dimensions,
      coxeter,
      stellation,
      mirrors,
      mirrorsPlanes,
      curvature
    )
  }
  const limit = order === 0 ? 1 : (order + 1) * 50
  const edgeProduct = combinations(
    new Array(fundamentalVertices.length).fill().map((_, i) => i)
  )
  const faceProduct = combinations(
    new Array(fundamentalVertices.length).fill().map((_, i) => i),
    3
  )
  try {
    let vertices = []
    let edges = []
    let faces = []
    if (!verticesParams.done) {
      verticesParams.limit = limit
      const baseIndex = verticesParams.lastDrawn * fundamentalVertices.length
      solve(verticesParams)
      for (
        let i = verticesParams.lastDrawn;
        i < verticesParams.words.length;
        i++
      ) {
        const word = verticesParams.words[i]
        if (word === undefined) {
          continue
        }
        const indexes = []
        for (let j = 0; j < fundamentalVertices.length; j++) {
          const fundamentalVertex = fundamentalVertices[j]
          const vertex = reflectWord(
            { rootVertex: fundamentalVertex, mirrorsPlanes, curvature },
            word
          )
          vertices.push({
            vertex,
            word,
            i,
          })
          indexes.push(baseIndex + vertices.length - 1)
        }
        verticesParams.lastDrawn = i + 1

        for (let j = 0; j < edgeProduct.length; j++) {
          const [startIndex, endIndex] = edgeProduct[j]

          edges.push({
            start: indexes[startIndex],
            end: indexes[endIndex],
            word,
          })
        }
        for (let j = 0; j < faceProduct.length; j++) {
          faces.push({
            vertices: faceProduct[j].map(index => indexes[index]),
            word,
          })
        }
      }
    }

    postMessage({ vertices, edges, faces, order, uuid })
  } catch (e) {
    postMessage({ error: e.message, uuid })
  }
}
