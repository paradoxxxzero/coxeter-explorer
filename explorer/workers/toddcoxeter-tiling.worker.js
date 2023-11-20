import { atoi } from '../math'
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

export const reflectToVertex = (word, index) => {
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
    stellation,
    mirrors,
    rootVertex,
    dimensions,
    uuid,
  },
}) => {
  if (order === 0) {
    initCosets(dimensions, coxeter, stellation, mirrors, curvature)
  }
  const limit = (order + 1) * (curvature > 0 ? 500 : 100)
  try {
    let vertices = []
    let edges = []
    let faces = []

    if (!verticesParams.done) {
      verticesParams.limit = limit

      solve(verticesParams)
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
          i,
        })
        verticesParams.lastDrawn = i + 1
      }
    }

    for (let i = 0; i < edgesParams.length; i++) {
      const edgeParams = edgesParams[i]
      if (!edgeParams.done) {
        edgeParams.limit = limit * (curvature > 0 ? 1 : curvature < 0 ? 1.5 : 3) // ???
        solve(edgeParams)
      }
      // Get index of target vertex in base face
      const target = reflectToVertex(edgeParams.target, 0)
      for (let j = edgeParams.lastDrawn; j < edgeParams.words.length; j++) {
        const word = edgeParams.words[j]
        if (word === undefined) {
          continue
        }
        // Get the origin vertex after reflections
        const start = reflectToVertex(word, 0)
        // Get the target vertex after reflections
        const end = reflectToVertex(word, target)

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
      if (!faceParams.done) {
        faceParams.limit =
          limit * (curvature > 0 ? 1 : curvature < 0 ? 1.5 : 2.5) // ???
        solve(faceParams)
      }

      let fail = false
      const face = []
      // Get vertices of the base face
      for (let j = 0; j < faceParams.face.length; j++) {
        const faceWord = faceParams.face[j]
        const vIndex = reflectToVertex(faceWord, 0)
        if (vIndex === undefined) {
          fail = true
          break
        }
        face.push(vIndex)
      }
      if (fail) {
        continue
      }
      // Get these vertices after reflections
      for (let j = faceParams.lastDrawn; j < faceParams.words.length; j++) {
        const word = faceParams.words[j]
        const vertices = []
        for (let k = 0; k < face.length; k++) {
          const vIndex = reflectToVertex(word, face[k])
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
