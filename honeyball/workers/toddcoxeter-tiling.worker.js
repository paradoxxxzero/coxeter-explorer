import { atoi, itoa } from '../math'
import {
  getEdgesCosetsParams,
  getFacesCosetsParams,
  getVerticesCosetsParams,
  solve,
} from '../math/coset'
import { reflect } from '../math/hypermath'

let verticesParams = null
let edgesParams = null
let facesParams = null

const initCosets = (dimensions, coxeter, stellation, mirrors, curvature) => {
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

  verticesParams = {
    ...getVerticesCosetsParams(
      dimensions,
      coxeter,
      stellation,
      mirrors,
      curvature
    ),
    ...defaultParams(),
  }
  edgesParams = getEdgesCosetsParams(
    dimensions,
    coxeter,
    stellation,
    mirrors,
    curvature
  ).map(edgeParams => ({
    ...edgeParams,
    ...defaultParams(),
  }))
  facesParams = getFacesCosetsParams(
    dimensions,
    coxeter,
    stellation,
    mirrors,
    curvature
  ).map(edgeParams => ({
    ...edgeParams,
    ...defaultParams(),
  }))
}

const reflectWord = (state, word) => {
  const { rootVertex, mirrorsPlanes, curvature } = state
  let v = rootVertex

  for (let i = 0; i < word.length; i++) {
    v = reflect(v, mirrorsPlanes[word.charCodeAt(i) - 97], curvature)
  }
  return v
}

export const vertexIndex = (word, index = 0) => {
  for (let i = 0; i < word.length; i++) {
    const j = atoi(word[i])
    const newIndex = verticesParams.cosets.normal[index][j]
    if (newIndex === undefined) {
      return
    }
    index = newIndex
  }
  return index
}

onmessage = ({
  data: {
    order,
    curvature,
    mirrorsPlanes,
    coxeter,
    stellated,
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
      stellated ? stellation : null,
      mirrors,
      curvature
    )
  }
  const limit = (order + 1) * (curvature > 0 ? 1000 : 250)
  try {
    let vertices = []
    let edges = []
    let faces = []
    if (!verticesParams.done) {
      verticesParams.limit = limit

      solve(verticesParams)
      console.log(verticesParams.words)
      for (
        let i = verticesParams.lastDrawn;
        i < verticesParams.words.length;
        i++
      ) {
        const word = verticesParams.words[i]
        if (word === undefined) {
          vertices.push({ vertex: new Array(dimensions).fill(NaN), word: '' })
          continue
        }
        const vertex = reflectWord(
          { rootVertex, mirrorsPlanes, curvature },
          word
        )
        vertices.push({
          vertex,
          word,
        })
        verticesParams.lastDrawn = i + 1
      }
    }

    for (let i = 0; i < edgesParams.length; i++) {
      const edgeParams = edgesParams[i]
      if (edgeParams.done) {
        continue
      }
      edgeParams.limit = limit
      solve(edgeParams)
      const startIndex = edgeParams.pair[0]
      const endIndex = vertexIndex(edgeParams.pair[1])
      for (let j = edgeParams.lastDrawn; j < edgeParams.words.length; j++) {
        const word = edgeParams.words[j]
        if (word === undefined) {
          continue
        }
        const start = vertexIndex(word, startIndex)
        const end = vertexIndex(word, endIndex)
        if (start === undefined || end === undefined) {
          edgeParams.lastDrawn = j
          break
        }
        edges.push({
          start,
          end,
          word,
        })
        edgeParams.lastDrawn = j + 1
      }
    }

    for (let i = 0; i < facesParams.length; i++) {
      const faceParams = facesParams[i]
      if (faceParams.done) {
        continue
      }
      faceParams.limit = limit
      solve(faceParams)

      let fail = false
      const indexes = []
      for (let j = 0; j < faceParams.face.length; j++) {
        const face = faceParams.face[j]
        const vIndex = vertexIndex(face)
        if (vIndex === undefined) {
          fail = true
          break
        }
        indexes.push(vIndex)
      }
      if (fail) {
        break
      }
      for (let j = faceParams.lastDrawn; j < faceParams.words.length; j++) {
        const word = faceParams.words[j]
        if (word === undefined) {
          // faceParams.lastDrawn = j ??
          continue
        }
        const vertices = []
        for (let k = 0; k < indexes.length; k++) {
          const vIndex = vertexIndex(word, indexes[k])
          if (vIndex === undefined) {
            fail = true
            break
          }
          vertices.push(vIndex)
        }
        if (fail) {
          faceParams.lastDrawn = j
          break
        }
        faces.push({
          vertices,
          word,
        })
        faceParams.lastDrawn = j + 1
      }
    }

    postMessage({ vertices, edges, faces, order, uuid })
  } catch (e) {
    postMessage({ error: e.message, uuid })
  }
}
