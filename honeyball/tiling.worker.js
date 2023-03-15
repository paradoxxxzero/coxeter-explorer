import { Color } from 'three'
import { abs, cos, PI } from './math'
import { getRules, shorten } from './math/group'
import {
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
  reflect,
  getCurvature,
  xlerp,
} from './math/hypermath'
import { C, setC } from './C'
import { R, setR } from './R'
import { W, setW } from './W'

const _color = new Color()

const same = (v1, v2) => {
  for (let i = 0; i < v1.length; i++) {
    if (abs(v1[i] - v2[i]) > 1e-8) {
      return false
    }
  }
  return true
}

const reflectWord = word => {
  let v = W.rootVertex

  for (let i = word.length - 1; i >= 0; i--) {
    v = reflect(v, W.mirrors[word.charCodeAt(i) - 97])
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

export const initTiling = ({ dimensions, p, q, r, s, t, u, x, y, z, w }) => {
  const newW = {
    coxeter:
      dimensions === 3
        ? [
            [-1, p, q],
            [p, -1, r],
            [q, r, -1],
          ]
        : dimensions === 4
        ? [
            [-1, p, q, r],
            [p, -1, s, t],
            [q, s, -1, u],
            [r, t, u, -1],
          ]
        : null,

    vertices: [],
    edges: [],
    words: new Map(),
    edgeHashes: new Set(),
    vertexHashes: new Set(),
    wordsToConsider: [''],
    rootVertices: null,
    rootVertex: null,
  }
  newW.gram = newW.coxeter.map(row => row.map(column => -cos(PI / column)))
  // We need curvature before doing computations
  setR({
    curvature: getCurvature(newW.gram),
  })

  newW.mirrors = getFundamentalSimplexMirrors(newW.gram)

  newW.rootVertices = newW.mirrors.map((_, i) =>
    getFundamentalVertex(
      newW.mirrors,
      new Array(dimensions)
        .fill(0)
        .map((_, j) => (i === j ? newW.curvature || 1 : 0))
    )
  )

  newW.rootVertex = getFundamentalVertex(newW.mirrors, [
    x ? 1 : 0,
    y ? 1 : 0,
    z ? 1 : 0,
    w ? 1 : 0,
  ])

  newW.words.set('', newW.rootVertex)

  newW.rules = getRules(dimensions, p, q, r, s, t, u)
  setW(newW)
}
const flip = (word, k, v) => {
  const m = String.fromCharCode(97 + k)
  if (word.slice(-1) === m) {
    return
  }
  const newWord = shorten(word + m)
  const color = _color.setHSL((newWord.length * 0.17) % 1, 0.5, 0.5).getHex()
  if (W.words.has(newWord)) {
    const rv = W.words.get(newWord)
    link(word, newWord, v, rv, color)
    return
  }
  const rv = reflectWord(newWord)
  W.words.set(newWord, rv)

  plot(rv, color)
  link(word, newWord, v, rv, color)
  return newWord
}

const tileFundamentalChamber = () => {
  let fundamentalChamberWords = ['']
  let futurewordsToConsider
  let max = 100
  // Start by filing the fundamental chamber to equilibrate the tiling
  do {
    futurewordsToConsider = []
    for (let j = 0; j < W.wordsToConsider.length; j++) {
      const word = W.wordsToConsider[j]
      const v = W.words.get(word)

      for (let k = 0; k < C.dimensions - 1; k++) {
        const rv = flip(word, k, v)
        rv && futurewordsToConsider.push(rv)
      }
    }
    fundamentalChamberWords.push(...futurewordsToConsider)
    W.wordsToConsider = futurewordsToConsider
  } while (futurewordsToConsider.length && max--)
  console.log(max)
  W.wordsToConsider = fundamentalChamberWords
}

export const tile = () => {
  let futurewordsToConsider
  // Start by filing the fundamental chamber to equilibrate the tiling
  futurewordsToConsider = []
  for (let j = 0; j < W.wordsToConsider.length; j++) {
    const word = W.wordsToConsider[j]
    const v = W.words.get(word)

    for (let k = 0; k < C.dimensions; k++) {
      const rv = flip(word, k, v)
      rv && futurewordsToConsider.push(rv)
    }
  }
  W.wordsToConsider = futurewordsToConsider
}

function plot(rv, color) {
  const vertexHash = hash(rv)
  if (!W.vertexHashes.has(vertexHash)) {
    W.vertexHashes.add(vertexHash)

    W.vertices.push({
      vertex: rv,
      color,
    })
  }
}

function link(word, newWord, v, rv, color) {
  const edgeHash =
    word.length < newWord.length ||
    (word.length === newWord.length && word < newWord)
      ? hash(v) + '/' + hash(rv)
      : hash(rv) + '/' + hash(v)

  if (!W.edgeHashes.has(edgeHash)) {
    W.edgeHashes.add(edgeHash)
    if (!same(v, rv)) {
      if (C.segments > 1 && C.curve) {
        const segmented = xlerp(v, rv, 1 / C.segments)
        for (let j = 0; j < segmented.length - 1; j++) {
          W.edges.push({
            vertex1: segmented[j],
            vertex2: segmented[j + 1],
            color: color,
          })
        }
      } else {
        W.edges.push({
          vertex1: v,
          vertex2: rv,
          color: color,
        })
      }
      return true
    }
  }
}

onmessage = ({ data: { C, order, uuid } }) => {
  try {
    setC(C)

    if (order === 0) {
      initTiling(C)
      tileFundamentalChamber()
    } else {
      W.vertices = []
      W.edges = []
      tile()
    }
    postMessage(
      {
        R,
        vertices: W.vertices,
        edges: W.edges,
        uuid: uuid,
      }
      // [W.vertices, W.edges]
    )
  } catch (e) {
    e.uuid = uuid
    throw e
  }
}
