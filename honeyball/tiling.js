import { Color } from 'three'
import { C } from './C'
import { setRules, shorten } from './math/group'
import {
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
  normalize,
  reflect,
} from './math/hypermath'
import { floatToToken } from './math/utils'

export const tile = () => {
  const fundamentalSimplexMirrors = getFundamentalSimplexMirrors()
  const fundamentalSimplexVertices = fundamentalSimplexMirrors.map(
    (mirror, i) =>
      getFundamentalVertex(
        fundamentalSimplexMirrors,
        new Array(C.dimensions)
          .fill(0)
          .map((_, j) => (i === j ? C.curvature || 1 : 0))
      )
  )
  const vertex = getFundamentalVertex(fundamentalSimplexMirrors, [
    C.x ? 1 : 0,
    C.y ? 1 : 0,
    C.z ? 1 : 0,
    C.w ? 1 : 0,
  ])
  const { vertices, edges } = C.runtime
  C.vertices && vertices.push({ vertex, color: new Color(0x0000ff) })
  // fundamentalSimplexVertices.forEach(vertex =>
  //   vertices.push({ vertex, color: new Color(0x00ff00) })
  // )
  if (C.DEBUG) {
    for (let i = 0; i < fundamentalSimplexVertices.length; i++) {
      C.vertices &&
        vertices.push({
          vertex: fundamentalSimplexVertices[i],
          color: new Color(0x00ff00),
        })
      for (let j = 0; j < i; j++) {
        C.edges &&
          edges.push({
            vertex1: fundamentalSimplexVertices[i],
            vertex2: fundamentalSimplexVertices[j],
            color: new Color(0x00ff00),
          })
      }
    }
  }

  try {
    setRules()
  } catch (e) {
    console.log(e)
    return
  }

  const reflectionCache = new Map()
  const reflectWord = word => {
    let v = vertex
    const reflections = word.split('').reverse().join('')
    let reflection = ''
    let remaining = reflections
    for (let i = reflections.length; i > 0; i--) {
      reflection = reflections.slice(0, i)
      if (reflectionCache.has(reflection)) {
        v = reflectionCache.get(reflection)
        remaining = reflections.slice(i)
        break
      }
    }

    for (let i = 0; i < remaining.length; i++) {
      v = reflect(v, fundamentalSimplexMirrors[remaining[i].charCodeAt(0) - 97])
      reflectionCache.set(reflection + remaining.slice(0, i + 1), v)
    }
    return v
  }
  const hash = v =>
    new Array(C.dimensions)
      .fill(0)
      .map((_, i) => floatToToken(v[i]))
      .join('|')

  const words = new Map()
  const edgeHashes = new Set()
  const vertexHashes = new Set()
  let currentWord = ''
  words.set(currentWord, vertex)
  let wordsToConsider = [currentWord]

  for (let i = 0; i < C.order; i++) {
    let futurewordsToConsider = []

    for (let j = 0; j < wordsToConsider.length; j++) {
      const word = wordsToConsider[j]
      const v = words.get(word)

      for (let k = 0; k < C.dimensions; k++) {
        if (word.slice(-1) === String.fromCharCode(97 + k)) {
          continue
        }
        const newWord = shorten(word + String.fromCharCode(97 + k))
        const color = new Color().setHSL(newWord.length / C.order, 0.5, 0.5)
        if (words.has(newWord)) {
          const edgeHash = (v + words.get(newWord)) * 0.5
          if (edgeHashes.has(edgeHash)) {
            continue
          }
          if (C.edges) {
            const rv = words.get(newWord)
            const edgeHash = [hash(v), hash(rv)].sort().join('/')
            if (!edgeHashes.has(edgeHash)) {
              edgeHashes.add(edgeHash)
              edges.push({
                vertex1: v,
                vertex2: rv,
                color: color,
              })
            }
          }
        } else {
          const rv = reflectWord(newWord)
          words.set(newWord, rv)
          const normalized = normalize(rv)
          if (C.vertices) {
            const vertexHash = hash(normalized)
            if (!vertexHashes.has(vertexHash)) {
              vertexHashes.add(vertexHash)

              vertices.push({
                vertex: normalized,
                color,
              })
            }
          }
          if (C.edges) {
            const edgeHash = [hash(v), hash(rv)].sort().join('/')
            if (!edgeHashes.has(edgeHash)) {
              edgeHashes.add(edgeHash)
              edges.push({
                vertex1: v,
                vertex2: rv,
                color,
              })
            }
          }
          futurewordsToConsider.push(newWord)
        }
      }
    }
    wordsToConsider = futurewordsToConsider
  }
}
