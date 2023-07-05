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
let snub = null
let holosnub = null

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
  snub = new Map()
  holosnub = [new Map(), new Map()]
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
      if (!faceParams.done) {
        faceParams.limit =
          limit * (curvature > 0 ? 1 : curvature < 0 ? 1.5 : 2.5) // ???
        solve(faceParams)
      }

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

    // Post Process
    if (mirrors.some(mirror => mirror === 's')) {
      const snubWord = mirrors
        .map((m, i) => (m === 's' ? itoa(i) : ''))
        .join('')
      const snubRe =
        snubWord.length > 0 ? new RegExp(`[^${snubWord}]`, 'g') : null

      for (let i = 0; i < vertices.length; i++) {
        const vertex = vertices[i]
        if (vertex.word.replace(snubRe, '').length % 2 === 1) {
          vertex.vertex = NaN
          snub.set(vertex.i, [])
        }
      }
      const finalEdges = []
      const newSnub = new Map()

      for (let i = 0; i < edges.length; i++) {
        if (snub.has(edges[i].start)) {
          if (!newSnub.has(edges[i].start)) {
            newSnub.set(edges[i].start, [])
          }
          const kern = snub.get(edges[i].start)
          kern.push(edges[i].end)
          if (!kern.word) {
            kern.word = edges[i].word
          }
          newSnub.get(edges[i].start).push(edges[i].end)
        } else if (snub.has(edges[i].end)) {
          if (!newSnub.has(edges[i].end)) {
            newSnub.set(edges[i].end, [])
          }
          const kern = snub.get(edges[i].end)
          kern.push(edges[i].start)
          if (!kern.word) {
            kern.word = edges[i].word
          }
          newSnub.get(edges[i].end).push(edges[i].start)
        } else {
          finalEdges.push(edges[i])
        }
      }

      const keys = Array.from(newSnub.keys())
      for (let i = 0; i < newSnub.size; i++) {
        const key = keys[i]
        const newValues = newSnub.get(key)
        const values = snub.get(key)
        for (let j = 0; j < newValues.length; j++) {
          for (let k = 0; k < values.length; k++) {
            if (newValues[j] <= values[k]) {
              continue
            }
            finalEdges.push({
              start: newValues[j],
              end: values[k],
              word: values.word,
            })
          }
        }
      }
      edges = finalEdges

      const finalFaces = []
      for (let i = 0; i < faces.length; i++) {
        const face = faces[i]
        const newVertices = []
        for (let j = 0; j < face.vertices.length; j++) {
          if (!snub.has(face.vertices[j])) {
            newVertices.push(face.vertices[j])
          }
        }
        finalFaces.push({
          ...face,
          vertices: newVertices,
        })
      }
      for (let i = 0; i < newSnub.size; i++) {
        const key = keys[i]
        const values = snub.get(key)
        finalFaces.push({
          vertices: values,
          word: values.word,
        })
      }

      faces = finalFaces
    }
    if (mirrors.some(mirror => mirror === 'ß')) {
      const holosnubWord = mirrors
        .map((m, i) => (m === 'ß' ? itoa(i) : ''))
        .join('')
      const holosnubRe =
        holosnubWord.length > 0 ? new RegExp(`[^${holosnubWord}]`, 'g') : null

      for (let i = 0; i < vertices.length; i++) {
        const vertex = vertices[i]
        holosnub[vertex.word.replace(holosnubRe, '').length % 2].set(
          vertex.i,
          []
        )
      }
      const finalEdges = []
      const newSnub = [new Map(), new Map()]

      for (let p = 0; p < 2; p++) {
        for (let i = 0; i < edges.length; i++) {
          if (holosnub[p].has(edges[i].start)) {
            if (!newSnub[p].has(edges[i].start)) {
              newSnub[p].set(edges[i].start, [])
            }
            const kern = holosnub[p].get(edges[i].start)
            kern.push(edges[i].end)
            if (!kern.word) {
              kern.word = edges[i].word
            }
            newSnub[p].get(edges[i].start).push(edges[i].end)
          } else if (holosnub[p].has(edges[i].end)) {
            if (!newSnub[p].has(edges[i].end)) {
              newSnub[p].set(edges[i].end, [])
            }
            const kern = holosnub[p].get(edges[i].end)
            kern.push(edges[i].start)
            if (!kern.word) {
              kern.word = edges[i].word
            }
            newSnub[p].get(edges[i].end).push(edges[i].start)
          } else {
            finalEdges.push(edges[i])
          }
        }

        const keys = Array.from(newSnub[p].keys())
        for (let i = 0; i < newSnub[p].size; i++) {
          const key = keys[i]
          const newValues = newSnub[p].get(key)
          const values = holosnub[p].get(key)
          for (let j = 0; j < newValues.length; j++) {
            for (let k = 0; k < values.length; k++) {
              if (newValues[j] <= values[k]) {
                continue
              }
              finalEdges.push({
                start: newValues[j],
                end: values[k],
                word: values.word,
              })
            }
          }
        }
      }
      edges = finalEdges

      const finalFaces = []
      for (let p = 0; p < 2; p++) {
        const keys = Array.from(newSnub[p].keys())
        for (let i = 0; i < faces.length; i++) {
          const face = faces[i]
          const newVertices = []
          for (let j = 0; j < face.vertices.length; j++) {
            if (!holosnub[p].has(face.vertices[j])) {
              newVertices.push(face.vertices[j])
            }
          }
          finalFaces.push({
            ...face,
            vertices: newVertices,
          })
        }

        for (let i = 0; i < newSnub[p].size; i++) {
          const key = keys[i]
          const values = holosnub[p].get(key)
          finalFaces.push({
            vertices: values,
            word: values.word,
          })
        }
      }
      faces = finalFaces
    }
    postMessage({ vertices, edges, faces, order, uuid })
  } catch (e) {
    postMessage({ error: e.message, uuid })
  }
}
