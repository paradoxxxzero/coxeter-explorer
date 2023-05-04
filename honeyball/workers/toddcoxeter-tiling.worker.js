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

const initCosets = (dimensions, coxeter, stellation, mirrors) => {
  const defaultParams = () => ({
    cosets: {
      normal: [],
      reverse: [],
    },
    rows: [],
    words: [],
    done: false,
  })

  verticesParams = {
    ...getVerticesCosetsParams(dimensions, coxeter, stellation, mirrors),
    ...defaultParams(),
  }
  edgesParams = getEdgesCosetsParams(
    dimensions,
    coxeter,
    stellation,
    mirrors
  ).map(edgeParams => ({
    ...edgeParams,
    ...defaultParams(),
  }))
  facesParams = getFacesCosetsParams(
    dimensions,
    coxeter,
    stellation,
    mirrors
  ).map(edgeParams => ({
    ...edgeParams,
    ...defaultParams(),
  }))
}

const reflectWord = (state, word, snub) => {
  if (snub) {
    // This is wrong, we need to better think about group
    word = word.replace(/./g, v => {
      return v === 'a' ? 'ab' : 'bc'
    })
  }
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
  const snub = mirrors.some(m => m === 's')
  if (order === 0) {
    initCosets(dimensions, coxeter, stellated ? stellation : null, mirrors)
  }
  const limit = (order + 1) * (curvature > 0 ? 2500 : 250)
  try {
    let vertices = []
    let edges = []
    let faces = []
    let wordIndexes = {}
    if (!verticesParams.done) {
      let previousLength = verticesParams.words.length
      verticesParams.limit = limit

      solve(verticesParams)
      // init(rootVertex, cosets)
      for (let i = previousLength; i < verticesParams.words.length; i++) {
        const word = verticesParams.words[i]
        const vertex = reflectWord(
          { rootVertex, mirrorsPlanes, curvature },
          word,
          snub
        )
        vertices.push({
          vertex,
          word,
        })
        wordIndexes[word] = vertices.length - 1
      }
    }
    for (let i = 0; i < edgesParams.length; i++) {
      const edgeParams = edgesParams[i]
      if (edgeParams.done) {
        continue
      }
      const previousLength = edgeParams.words.length
      edgeParams.limit = limit
      solve(edgeParams)
      const startIndex = edgeParams.pair[0]
      const endIndex = vertexIndex(edgeParams.pair[1])
      for (let j = previousLength; j < edgeParams.words.length; j++) {
        const word = edgeParams.words[j]
        const start = vertexIndex(word, startIndex)
        const end = vertexIndex(word, endIndex)
        edges.push({
          start,
          end,
          word,
        })
      }
    }

    for (let i = 0; i < facesParams.length; i++) {
      const faceParams = facesParams[i]
      if (faceParams.done) {
        continue
      }
      const previousLength = faceParams.words.length
      faceParams.limit = limit
      solve(faceParams)

      const indexes = []
      for (let j = 0; j < faceParams.face.length; j++) {
        const face = faceParams.face[j]
        indexes.push(vertexIndex(face))
      }
      let fail = false
      for (let j = previousLength; j < faceParams.words.length; j++) {
        const word = faceParams.words[j]
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
        } else {
          faces.push({
            vertices,
            word,
          })
        }
      }
    }
    // const pairs = combinations(verticesParams.gens.map(i => itoa(i)))
    // for (let i = 0; i < pairs.length; i++) {
    //   const [mirror1, mirror2] = pairs[i]
    //   const multiplier = coxeter[mirrors1][mirrors2]
    //   const indexes = []

    //   if (mirrors[mirror1] && mirrors[mirror2]) {
    //     for (let j = 0; j < multiplier; j++) {
    //       indexes.push([0], vertexIndex())

    //   }

    postMessage({ vertices, edges, faces, uuid })
  } catch (e) {
    postMessage({ error: e.message, uuid })
  }
}
