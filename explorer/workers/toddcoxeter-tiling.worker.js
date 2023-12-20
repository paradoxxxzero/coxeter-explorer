import { MAX_UINT_32, arrayEquals } from '../../utils'
import { atoi } from '../math'
import { getShape } from '../math/shape'
import { normalize, reflect } from '../math/hypermath'
import { multiplyVector } from '../math/matrix'
import { ToddCoxeter } from '../math/toddcoxeter'
import { mirrorValue } from '../mirrors'

let allVertices = null
let verticesParams = null
let edgesParams = null
let facesParams = null
let current = null

const initCosets = (dimensions, coxeter, stellation, mirrors) => {
  if (
    current &&
    dimensions === current.dimensions &&
    arrayEquals(coxeter, current.coxeter) &&
    arrayEquals(stellation, current.stellation) &&
    arrayEquals(mirrors, current.mirrors)
  ) {
    // Same group, no need to recompute, skip coset enumeration
    verticesParams.lastDrawn = 0
    verticesParams.params.done = false
    edgesParams.forEach(edgeParams => {
      edgeParams.lastDrawn = 0
      edgeParams.params.done = false
    })
    facesParams.forEach(faceParams => {
      faceParams.lastDrawn = 0
      faceParams.params.done = false
    })
    allVertices = []
    return
  }
  current = { dimensions, coxeter, stellation, mirrors }
  allVertices = []

  const shape = getShape(dimensions, coxeter, stellation, mirrors)
  verticesParams = null
  edgesParams = []
  facesParams = []
  const visit = subShape => {
    if (subShape.new) {
      if (subShape.dimensions === 2) {
        facesParams.push({
          shape,
          subShape,
          params: {
            ...shape,
            subgens: subShape.quotient,
          },
          lastDrawn: 0,
          toRetry: new Set(),
        })
      } else if (subShape.dimensions === 1) {
        edgesParams.push({
          shape,
          subShape,
          params: {
            ...shape,
            subgens: subShape.quotient,
          },
          lastDrawn: 0,
        })
      } else if (subShape.dimensions === 0) {
        verticesParams = {
          shape,
          subShape,
          params: {
            ...shape,
            subgens: subShape.quotient,
          },
          lastDrawn: 0,
        }
      }
    }
    if (subShape.children) {
      subShape.children.forEach(visit)
    }
  }
  visit(shape)
  // console.log(shape)
}

export const reflectToVertex = (word, index, gens) => {
  for (let i = 0; i < word.length; i++) {
    const j = gens.indexOf(word[i])
    const newIndex = verticesParams.params.cosets.normal[index][j]
    if (newIndex === MAX_UINT_32) {
      return
    }
    index = newIndex
  }
  return index
}

const reflectWord = (state, word) => {
  const { rootVertex, rootNormals, metric } = state

  let v = rootVertex

  for (let i = 0; i < word.length; i++) {
    v = reflect(v, rootNormals[word.charCodeAt(i) - 97], metric)
  }
  return v
}

onmessage = ({
  data: {
    order,
    curvature,
    metric,
    coxeter,
    stellation,
    mirrors,
    rootVertices,
    rootNormals,
    dimensions,
    uuid,
  },
}) => {
  if (order === 0) {
    initCosets(dimensions, coxeter, stellation, mirrors)
  }
  let rootVertex = normalize(
    multiplyVector(
      rootVertices,
      mirrors.map(v => mirrorValue(v))
    ),
    metric
  )
  const limit = (order + 1) * (curvature > 0 ? 500 : 100)
  try {
    let vertices = []
    let edges = []
    let faces = []
    let partials = []
    const params = verticesParams.params
    if (!params.done) {
      params.limit = limit
      ToddCoxeter(params)
      for (let i = verticesParams.lastDrawn; i < params.words.length; i++) {
        const word = params.words[i]
        let vertex
        if (word === '') {
          vertex = rootVertex
        } else {
          //   const index = reflectToVertex(
          //     word.slice(0, -1),
          //     0, // reflectToVertex(space[0], 0, shape.gens),
          //     params.gens
          //   )
          //   const reflects = Object.entries(params.replacements || {})
          //     .reduce(
          //       (acc, [key, value]) => acc.replace(new RegExp(key, 'g'), value),
          //       word.slice(-1)
          //     )
          //     .split('')
          //   vertex = allVertices[index]
          //   for (let i = 0; i < reflects.length; i++) {
          //     const j = atoi(reflects[i])
          //     const normal = rootNormals[j]
          //     vertex = reflect(vertex, normal, metric)
          //   }
          // }
          // allVertices.push(vertex)
          vertex = reflectWord({ rootVertex, rootNormals, metric }, word)
        }

        vertices.push({
          vertex,
          word,
          i,
        })
        verticesParams.lastDrawn = i + 1
      }
    }
    if (false) {
      for (let i = 0; i < edgesParams.length; i++) {
        const edgeParams = edgesParams[i]
        const params = edgeParams.params
        const shape = edgeParams.shape
        const subShape = edgeParams.subShape
        if (!params.done) {
          params.limit = limit * (curvature > 0 ? 1 : curvature < 0 ? 1.5 : 3) // ???
          ToddCoxeter(params)
        }
        // Get index of target vertex in base face
        const base = reflectToVertex(subShape.space[0], 0, shape.gens)
        const target = reflectToVertex(subShape.space[1], 0, shape.gens)

        for (let j = edgeParams.lastDrawn; j < params.words.length; j++) {
          const word = params.words[j]
          if (word === undefined) {
            continue
          }
          // Get the origin vertex after reflections
          const start = reflectToVertex(word, base, params.gens)
          // Get the target vertex after reflections
          const end = reflectToVertex(word, target, params.gens)

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
        const params = faceParams.params
        const shape = faceParams.shape
        const subShape = faceParams.subShape
        const double = subShape.mirrors.every(m => !!m)
        // const snub = subShape.mirrors.some(m => isSnub(m))
        // TODO: dimensions 2
        if (shape.dimensions === 2) {
          params.words = params.space
          subShape.space = verticesParams.params.words
          params.done = true
        }
        // if (faceParams.face.length === 1) {
        //   faceParams.words = faceParams.face
        //   faceParams.face = verticesParams.words
        //   faceParams.double = mirrors.every(m => !!m)
        //   faceParams.done = true
        // }
        if (!params.done) {
          params.limit = limit * (curvature > 0 ? 1 : curvature < 0 ? 1.5 : 2.5) // ???
          ToddCoxeter(params)
        }
        console.log(params.words)
        const face = []
        // Get vertices of the base face
        for (let j = 0; j < subShape.space.length; j++) {
          // These vertices can be undefined if the face is not yet closed or ever
          face.push(
            reflectToVertex(subShape.space[j], 0, verticesParams.params.gens)
          )
        }

        // Start by retrying last partial faces
        for (const j of faceParams.toRetry) {
          const word = params.words[j]
          const vertices = []
          for (let k = 0; k < face.length; k++) {
            const faceVertex = face[reorder(k, face.length, double)]
            if (faceVertex === undefined) {
              continue
            }
            const vertex = reflectToVertex(word, faceVertex, params.gens)
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
        for (let j = faceParams.lastDrawn; j < params.words.length; j++) {
          let fail = false
          const word = params.words[j]
          const vertices = []
          for (let k = 0; k < face.length; k++) {
            // const l = snub ? k : reorder(k, face.length, double)
            const l = reorder(k, face.length, double)
            const faceVertex = face[l]
            if (faceVertex === undefined) {
              fail = true
              continue
            }
            const vertex = reflectToVertex(word, faceVertex, params.gens)
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
