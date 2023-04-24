import { abs, cos, PI, round } from './math'
import { getRules, shorten } from './math/group'
import {
  getCurvature,
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
  reflect,
} from './math/hypermath'
import { setW, W } from './W'

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
    v = reflect(v, W.mirrors[word.charCodeAt(i) - 97], W.curvature)
  }
  return v
}

const kBuf = new ArrayBuffer(8)
const kBufAsF64 = new Float64Array(kBuf)
const kBufAsI32 = new Int32Array(kBuf)
function hashNumber(n) {
  if (~~n === n) {
    return ~~n
  }
  kBufAsF64[0] = n
  return kBufAsI32[0] ^ kBufAsI32[1]
}
const precision = 4
const exp = 10 ** precision
const hash = v => {
  let s = ''
  for (let i = 0; i < v.length; i++) {
    s += hashNumber(round(v[i] * exp) / exp).toString() // toExponential(4)
    if (i < v.length - 1) {
      s += '|'
    }
  }
  return s
}

const matEq = (m1, m2) => {
  if (m1.length !== m2.length) {
    return false
  }
  if (m1[0].length !== m2[0].length) {
    return false
  }
  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m1[i].length; j++) {
      if (abs(m1[i][j] - m2[i][j]) > 1e-8) {
        return false
      }
    }
  }
  return true
}

export const initTiling = (
  dimensions,
  stellation,
  coxeter,
  coxeterDiv,
  mirrors
) => {
  // Rules gets computed on non stellated coxeter group
  const rules =
    W.rules.size && dimensions === W.dimensions && matEq(coxeter, W.coxeter)
      ? W.rules
      : getRules(dimensions, coxeter)
  if (stellation) {
    for (let i = 0; i < dimensions; i++) {
      for (let j = 0; j < dimensions; j++) {
        coxeter[i][j] /= coxeterDiv[i][j]
      }
    }
  }

  const newW = {
    dimensions,
    coxeter,
    vertices: [],
    edges: [],
    words: new Map(),
    edgeHashes: new Set(),
    vertexHashes: new Set(),
    wordsToConsider: [''],
    rootVertices: null,
    rootVertex: null,
    rules,
  }
  newW.gram = newW.coxeter.map(row => row.map(column => -cos(PI / column)))
  newW.curvature = getCurvature(newW.gram)
  newW.mirrors = getFundamentalSimplexMirrors(newW.gram, newW.curvature)

  newW.rootVertices = newW.mirrors.map((_, i) =>
    getFundamentalVertex(
      newW.mirrors,
      new Array(dimensions)
        .fill(0)
        .map((_, j) => (i === j ? newW.curvature || 1 : 0)),
      newW.curvature
    )
  )
  newW.rootVertex = getFundamentalVertex(newW.mirrors, mirrors, newW.curvature)
  newW.words.set('', newW.rootVertex)

  setW(newW)
}

const flip = (word, k, v) => {
  const m = String.fromCharCode(97 + k)
  if (word.slice(-1) === m) {
    return
  }
  const newWord = shorten(word + m)
  if (W.words.has(newWord)) {
    const rv = W.words.get(newWord)
    link(word, newWord, v, rv)
    return
  }
  const rv = reflectWord(newWord)
  W.words.set(newWord, rv)

  plot(rv, word)
  link(word, newWord, v, rv)
  return newWord
}

const tileFundamentalChamber = () => {
  let fundamentalChamberWords = ['']
  let futurewordsToConsider
  let max = 25
  const dimensions = W.rootVertex.length
  plot(W.rootVertex, '')
  // Start by filing the fundamental chamber to equilibrate the tiling
  do {
    futurewordsToConsider = []
    for (let j = 0; j < W.wordsToConsider.length; j++) {
      const word = W.wordsToConsider[j]
      const v = W.words.get(word)

      for (let k = 0; k < dimensions - 1; k++) {
        const rv = flip(word, k, v)
        rv && futurewordsToConsider.push(rv)
      }
    }
    fundamentalChamberWords.push(...futurewordsToConsider)
    W.wordsToConsider = futurewordsToConsider
  } while (futurewordsToConsider.length && max--)

  if (max < 0) {
    throw new Error('Could not tile fundamental chamber')
  }
  W.wordsToConsider = fundamentalChamberWords
}

export const tile = () => {
  let futurewordsToConsider
  // Start by filing the fundamental chamber to equilibrate the tiling
  futurewordsToConsider = []
  for (let j = 0; j < W.wordsToConsider.length; j++) {
    const word = W.wordsToConsider[j]
    const v = W.words.get(word)

    for (let k = 0; k < v.length; k++) {
      const rv = flip(word, k, v)
      rv && futurewordsToConsider.push(rv)
    }
  }
  W.wordsToConsider = futurewordsToConsider
}

function plot(rv, word) {
  const vertexHash = hash(rv)
  if (!W.vertexHashes.has(vertexHash)) {
    W.vertexHashes.add(vertexHash)
    W.vertices.push({
      vertex: rv,
      word,
    })
  }
}

function link(word, newWord, v, rv) {
  const vHash = hash(v)
  const rvHash = hash(rv)
  if (vHash === rvHash) {
    return
  }
  const edgeHash = [vHash, rvHash].sort().join('/')

  if (!W.edgeHashes.has(edgeHash)) {
    W.edgeHashes.add(edgeHash)
    if (!same(v, rv)) {
      const start = v.slice()
      const end = rv.slice()

      W.edges.push({
        start,
        end,
        word,
        // segments: xlerp(start, end),
      })
      return true
    }
  }
}

onmessage = ({
  data: {
    dimensions,
    coxeter,
    coxeterDiv,
    stellation,
    mirrors,
    currentOrder,
    uuid,
  },
}) => {
  try {
    if (currentOrder === 0) {
      initTiling(dimensions, stellation, coxeter, coxeterDiv, mirrors)
      try {
        tileFundamentalChamber()
      } catch (e) {
        if (e.message === 'Could not tile fundamental chamber') {
          initTiling(dimensions, stellation, coxeter, coxeterDiv, mirrors)
        }
      }
    } else {
      W.vertices = []
      W.edges = []
      tile()
    }
    postMessage(
      {
        curvature: W.curvature,
        vertices: W.vertices,
        edges: W.edges,
        currentOrder: currentOrder + 1,
        uuid: uuid,
      }
      // [W.vertices, W.edges]
    )
  } catch (e) {
    postMessage({ error: e.message, uuid: uuid })
  }
}
