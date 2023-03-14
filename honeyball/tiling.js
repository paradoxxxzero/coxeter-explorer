import { Color } from 'three'
import { C } from './C'
import { setRules, shorten } from './math/group'
import {
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
  normalize,
  reflect,
  translateVertex,
} from './math/hypermath'
import { floatToToken } from './math/utils'
import { sorter } from './math/group'
import { abs } from './math'

const same = (v1, v2) => {
  for (let i = 0; i < v1.length; i++) {
    if (abs(v1[i] - v2[i]) > 1e-8) {
      return false
    }
  }
  return true
}

export const tile = () => {
  C.runtime = {
    vertices: [],
    edges: [],
  }
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
  // const shift = [1.0, 1]
  // translateVertex(vertex, shift)
  // fundamentalSimplexMirrors.forEach(mirror => translateVertex(mirror, shift))
  const { vertices, edges } = C.runtime
  // fundamentalSimplexVertices.forEach(vertex =>
  //   vertices.push({ vertex, color: new Color(0x00ff00) })
  // )
  if (C.DEBUG) {
    vertices.push({ vertex, color: new Color(0x0000ff) })
    for (let i = 0; i < fundamentalSimplexVertices.length; i++) {
      vertices.push({
        vertex: fundamentalSimplexVertices[i],
        color: new Color(0x00ff00),
      })
      for (let j = 0; j < i; j++) {
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
  words.set('', vertex)
  let wordsToConsider = ['']

  let fundamentalChamberWords = ['']
  for (let i = 0; i < C.order; i++) {
    let futurewordsToConsider
    // Start by filing the fundamental chamber to equilibrate the tiling
    do {
      futurewordsToConsider = []
      for (let j = 0; j < wordsToConsider.length; j++) {
        const word = wordsToConsider[j]
        const v = words.get(word)

        for (let k = 0; k < C.dimensions - (i === 0 ? 1 : 0); k++) {
          if (word.slice(-1) === String.fromCharCode(97 + k)) {
            continue
          }
          const newWord = shorten(word + String.fromCharCode(97 + k))
          const color = new Color().setHSL(
            (newWord.length * 0.17) % 1,
            0.5,
            0.5
          )
          if (words.has(newWord)) {
            const rv = words.get(newWord)
            const edgeWords = [word, newWord].sort(sorter)
            const edgeHash = (
              edgeWords[0] === word ? [hash(v), hash(rv)] : [hash(rv), hash(v)]
            )
              .sort()
              .join('/')
            if (!edgeHashes.has(edgeHash)) {
              edgeHashes.add(edgeHash)
              if (!same(v, rv)) {
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
            const vertexHash = hash(normalized)
            if (!vertexHashes.has(vertexHash)) {
              vertexHashes.add(vertexHash)

              vertices.push({
                vertex: normalized,
                color,
              })
            }
            const edgeWords = [word, newWord].sort(sorter)
            const edgeHash = (
              edgeWords[0] === word ? [hash(v), hash(rv)] : [hash(rv), hash(v)]
            )
              .sort()
              .join('/')
            if (!edgeHashes.has(edgeHash)) {
              edgeHashes.add(edgeHash)
              if (!same(v, rv)) {
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
      if (i === 0) {
        fundamentalChamberWords.push(...futurewordsToConsider)
        wordsToConsider = futurewordsToConsider
      }
    } while (i === 0 && futurewordsToConsider.length)
    if (i === 0) {
      wordsToConsider = fundamentalChamberWords
    } else {
      wordsToConsider = futurewordsToConsider
    }

    if (!wordsToConsider.length) {
      break
    }
  }
}
