import { abs, round } from './math'
import { shorten } from './math/group'
import { reflect } from './math/hypermath'

const same = (v1, v2) => {
  for (let i = 0; i < v1.length; i++) {
    if (abs(v1[i] - v2[i]) > 1e-8) {
      return false
    }
  }
  return true
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

const reflectWord = (state, word) => {
  const { rootVertex, mirrorsPlanes, curvature } = state
  let v = rootVertex

  for (let i = word.length - 1; i >= 0; i--) {
    v = reflect(v, mirrorsPlanes[word.charCodeAt(i) - 97], curvature)
  }
  return v
}

function plot(state, rv, word) {
  const { vertexHashes } = state
  const vertexHash = hash(rv)
  if (!vertexHashes.has(vertexHash)) {
    vertexHashes.add(vertexHash)
    state.vertices.push({
      vertex: rv,
      word,
    })
    return true
  }
}

function link(state, word, v, rv) {
  const { edgeHashes } = state
  const vHash = hash(v)
  const rvHash = hash(rv)
  if (vHash === rvHash) {
    return
  }
  const edgeHash = [vHash, rvHash].sort().join('/')

  if (!edgeHashes.has(edgeHash)) {
    edgeHashes.add(edgeHash)
    if (!same(v, rv)) {
      const start = v.slice()
      const end = rv.slice()

      state.edges.push({
        start,
        end,
        word,
      })
      return true
    }
  }
}

const flip = (state, word, k, v) => {
  const { rules, words } = state

  const m = String.fromCharCode(97 + k)
  if (word.slice(-1) === m) {
    return
  }
  let newWord = word + m

  // Optimisation with word rewriting
  newWord = shorten(rules.rules, newWord)
  if (words.has(newWord)) {
    const rv = words.get(newWord)
    link(state, word, v, rv)
    return
  }
  const rv = reflectWord(state, newWord)

  words.set(newWord, rv)
  const existingVertex = plot(state, rv, newWord)
  link(state, word, v, rv)
  return newWord
}

const tileFundamentalChamber = state => {
  const { words, rootVertex, nextWords } = state
  let fundamentalChamberWords = ['']
  let futurewordsToConsider
  const maxChamberSize = 1000
  const dimensions = rootVertex.length
  plot(state, rootVertex, '')

  // Start by filing the fundamental chamber to equilibrate the tiling
  let currentWords = nextWords
  do {
    futurewordsToConsider = []
    for (let j = 0; j < currentWords.length; j++) {
      const word = currentWords[j]
      const v = words.get(word)

      for (let k = 0; k < dimensions - 1; k++) {
        const rv = flip(state, word, k, v)
        rv && futurewordsToConsider.push(rv)
      }
    }
    fundamentalChamberWords = fundamentalChamberWords.concat(
      futurewordsToConsider
    )
    currentWords = futurewordsToConsider
  } while (
    futurewordsToConsider.length &&
    fundamentalChamberWords.length <= maxChamberSize
  )

  if (fundamentalChamberWords.length > maxChamberSize) {
    throw new Error('Could not tile fundamental chamber')
  }
  return fundamentalChamberWords
}

export const tile = state => {
  const { words, nextWords, currentOrder } = state

  if (currentOrder === 0) {
    try {
      return tileFundamentalChamber(state)
    } catch (e) {
      console.warn(e)
    }
  }

  let futurewordsToConsider
  // Start by filing the fundamental chamber to equilibrate the tiling
  futurewordsToConsider = []
  for (let j = 0; j < nextWords.length; j++) {
    const word = nextWords[j]
    const v = words.get(word)

    for (let k = 0; k < v.length; k++) {
      const rv = flip(state, word, k, v)
      rv && futurewordsToConsider.push(rv)
    }
  }
  return futurewordsToConsider
}

onmessage = ({ data: state }) => {
  try {
    const initialVertexLength = state.vertices.length
    const initialEdgeLength = state.edges.length

    state.nextWords = tile(state)

    state.ranges[state.currentOrder] = {
      vertices: [initialVertexLength, state.vertices.length],
      edges: [initialEdgeLength, state.edges.length],
    }
    state.currentOrder++

    postMessage(state)
  } catch (e) {
    postMessage({ error: e.message, uuid: state.uuid })
  }
}
