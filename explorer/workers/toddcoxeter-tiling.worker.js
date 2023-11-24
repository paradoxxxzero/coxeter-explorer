import { atoi, floor } from '../math'
import {
  getEdgesCosetsParams,
  getFacesCosetsParams,
  getVerticesCosetsParams,
  solve,
} from '../math/coset'
import { normalize, reflect } from '../math/hypermath'
import { multiplyVector } from '../math/matrix'
import { mirrorValue } from '../mirrors'

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
    toRetry: new Set(),
  }))
}

const reflectWord = (state, word) => {
  const { rootVertex, rootNormals, curvature } = state

  let v = rootVertex

  for (let i = 0; i < word.length; i++) {
    v = reflect(v, rootNormals[word.charCodeAt(i) - 97], curvature)
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
    rootNormals,
    coxeter,
    stellation,
    mirrors,
    rootVertices,
    dimensions,
    uuid,
  },
}) => {
  if (order === 0) {
    initCosets(dimensions, coxeter, stellation, mirrors, curvature)
  }
  const rootVertex = normalize(
    multiplyVector(
      rootVertices,
      mirrors.map(v => mirrorValue(v))
    ),
    curvature
  )
  const limit = (order + 1) * (curvature > 0 ? 500 : 100)
  try {
    let vertices = []
    let edges = []
    let faces = []
    let partials = []

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
        const vertex = reflectWord({ rootVertex, rootNormals, curvature }, word)
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

      const face = []
      // Get vertices of the base face
      for (let j = 0; j < faceParams.face.length; j++) {
        // These vertices can be undefined if the face is not yet closed or ever
        face.push(reflectToVertex(faceParams.face[j], 0))
      }

      // Start by retrying last partial faces
      for (const j of faceParams.toRetry) {
        const word = faceParams.words[j]
        const vertices = []
        for (let k = 0; k < face.length; k++) {
          const faceVertex = face[reorder(k, face.length, faceParams.double)]
          if (faceVertex === undefined) {
            continue
          }
          const vertex = reflectToVertex(word, faceVertex)
          if (vertex === undefined) {
            continue
          }
          vertices.push(vertex)
        }
        if (vertices.length === face.length) {
          faces.push({
            vertices,
            word,
            len: face.length,
          })
          faceParams.toRetry.delete(j)
        } else {
          partials.push({
            vertices,
            word,
            len: face.length,
          })
        }
      }

      // Get these vertices after reflections
      for (let j = faceParams.lastDrawn; j < faceParams.words.length; j++) {
        let fail = false
        const word = faceParams.words[j]
        const vertices = []
        for (let k = 0; k < face.length; k++) {
          const faceVertex = face[reorder(k, face.length, faceParams.double)]
          if (faceVertex === undefined) {
            fail = true
            continue
          }
          const vertex = reflectToVertex(word, faceVertex)
          if (vertex === undefined) {
            fail = true
            continue
          }
          vertices.push(vertex)
        }
        if (fail) {
          partials.push({
            vertices,
            word,
            len: face.length,
          })
          faceParams.toRetry.add(j)
        } else {
          faces.push({
            vertices,
            word,
            len: face.length,
          })
        }
        faceParams.lastDrawn = j + 1
      }
    }

    postMessage({ vertices, edges, faces, partials, order, uuid })
  } catch (e) {
    postMessage({ error: e.message, uuid })
  }
}

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
