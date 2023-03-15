import { Color } from 'three'
import { C } from './C'
import { abs } from './math'
import { getRules, shorten } from './math/group'
import {
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
  reflect,
} from './math/hypermath'

const same = (v1, v2) => {
  for (let i = 0; i < v1.length; i++) {
    if (abs(v1[i] - v2[i]) > 1e-8) {
      return false
    }
  }
  return true
}

const debug = () => {
  const R = C.runtime

  R.vertices.push({ vertex: R.rootVertex, color: new Color(0x0000ff) })
  for (let i = 0; i < R.rootVertices.length; i++) {
    R.vertices.push({
      vertex: R.rootVertices[i],
      color: new Color(0x00ff00),
    })
    for (let j = 0; j < i; j++) {
      R.edges.push({
        vertex1: R.rootVertices[i],
        vertex2: R.rootVertices[j],
        color: new Color(0x00ff00),
      })
    }
  }
}

const reflectWord = word => {
  const R = C.runtime
  let v = R.rootVertex
  const reflections = word.split('').reverse().join('')
  // let reflection = ''
  let remaining = reflections
  // for (let i = reflections.length; i > 0; i--) {
  //   reflection = reflections.slice(0, i)
  //   if (R.reflections.has(reflection)) {
  //     v = R.reflections.get(reflection)
  //     remaining = reflections.slice(i)
  //     break
  //   }
  // }

  for (let i = 0; i < remaining.length; i++) {
    v = reflect(v, R.mirrors[remaining[i].charCodeAt(0) - 97])
    // R.reflections.set(reflection + remaining.slice(0, i + 1), v)
  }
  return v
}

const hash = v => {
  let s = ''
  for (let i = 0; i < v.length; i++) {
    s += v[i].toString().slice(0, 6) // toExponential(4)
    if (i < v.length - 1) {
      s += '|'
    }
  }
  return s
}

export const initTiling = () => {
  const R = (C.runtime = {
    vertices: [],
    edges: [],
    reflections: new Map(),
    words: new Map(),
    edgeHashes: new Set(),
    vertexHashes: new Set(),
    lastOrder: 0,
    wordsToConsider: [''],
    mirrors: getFundamentalSimplexMirrors(),
    rootVertices: null,
    rootVertex: null,
  })
  R.rootVertices = R.mirrors.map((_, i) =>
    getFundamentalVertex(
      R.mirrors,
      new Array(C.dimensions)
        .fill(0)
        .map((_, j) => (i === j ? C.curvature || 1 : 0))
    )
  )

  R.rootVertex = getFundamentalVertex(R.mirrors, [
    C.x ? 1 : 0,
    C.y ? 1 : 0,
    C.z ? 1 : 0,
    C.w ? 1 : 0,
  ])

  R.words.set('', R.rootVertex)

  // const shift = [1.0, 1]
  // translateVertex(vertex, shift)
  // R.mirrors.forEach(mirror => translateVertex(mirror, shift))
  // rootVertices.forEach(vertex =>
  //   vertices.push({ vertex, color: new Color(0x00ff00) })
  // )

  if (C.DEBUG) {
    debug()
  }

  try {
    R.rules = getRules()
  } catch (e) {
    console.log(e)
    return
  }
}

export const tile = () => {
  const R = C.runtime
  let fundamentalChamberWords = ['']
  for (let i = R.lastOrder; i < C.order; i++) {
    let futurewordsToConsider
    // Start by filing the fundamental chamber to equilibrate the tiling
    do {
      futurewordsToConsider = []
      for (let j = 0; j < R.wordsToConsider.length; j++) {
        const word = R.wordsToConsider[j]
        const v = R.words.get(word)

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
          if (R.words.has(newWord)) {
            const rv = R.words.get(newWord)
            link(word, newWord, v, rv, color)
          } else {
            const rv = reflectWord(newWord)
            R.words.set(newWord, rv)

            plot(rv, color)
            link(word, newWord, v, rv, color)
            futurewordsToConsider.push(newWord)
          }
        }
      }
      if (i === 0) {
        fundamentalChamberWords.push(...futurewordsToConsider)
        R.wordsToConsider = futurewordsToConsider
      }
    } while (i === 0 && futurewordsToConsider.length)
    if (i === 0) {
      R.wordsToConsider = fundamentalChamberWords
    } else {
      R.wordsToConsider = futurewordsToConsider
    }

    if (!R.wordsToConsider.length) {
      R.lastOrder = Infinity
      return
    }
    R.lastOrder = i + 1
  }
}

function plot(rv, color) {
  const R = C.runtime
  const vertexHash = hash(rv)
  if (!R.vertexHashes.has(vertexHash)) {
    R.vertexHashes.add(vertexHash)

    R.vertices.push({
      vertex: rv,
      color,
    })
  }
}

function link(word, newWord, v, rv, color) {
  const R = C.runtime
  const edgeHash =
    word.length < newWord.length ||
    (word.length === newWord.length && word < newWord)
      ? hash(v) + '/' + hash(rv)
      : hash(rv) + '/' + hash(v)

  if (!R.edgeHashes.has(edgeHash)) {
    R.edgeHashes.add(edgeHash)
    if (!same(v, rv)) {
      R.edges.push({
        vertex1: v,
        vertex2: rv,
        color: color,
      })
      return true
    }
  }
}
