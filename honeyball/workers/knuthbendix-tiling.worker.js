import { abs, atoi, getBaseRules, itoa, round } from '../math'
import { knuthBendix, shorten } from '../math/group'
import { reflect } from '../math/hypermath'

let vertexHashes = new Set()
let edgeHashes = new Set()
let vertices = []
let edges = []
let words = new Map()
let nextWords = []
let mirrors = null
let snub = false
let rules = null

const init = (rootVertex, newRules, newMirrors) => {
  vertexHashes.clear()
  edgeHashes.clear()
  words.clear()
  words.set('', rootVertex)
  vertices = []
  edges = []
  nextWords = ['']
  mirrors = newMirrors
  rules = newRules
  const snubWord = mirrors.map((m, i) => (m === 's' ? itoa(i) : '')).join('')
  snub = snubWord.length > 0 ? new RegExp(`[^${snubWord}]`, 'g') : null
}

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

function plot(word) {
  const vertex = words.get(word)
  const vertexHash = hash(vertex)
  if (!vertexHashes.has(vertexHash)) {
    // console.log(word)
    vertexHashes.add(vertexHash)
    vertices.push({
      vertex,
      word,
    })
    return true
  }
}

function link(word, newWord) {
  const vertex = words.get(word)
  const newVertex = words.get(newWord)
  if (vertex === newVertex) {
    return
  }
  const vHash = hash(vertex)
  const rvHash = hash(newVertex)
  if (vHash === rvHash) {
    return
  }
  const edgeHash = vHash > rvHash ? `${rvHash}/${vHash}` : `${vHash}/${rvHash}` // vHash > rvHash ? `${rvHash}/${vHash}` : `${vHash}/${rvHash}

  if (!edgeHashes.has(edgeHash)) {
    edgeHashes.add(edgeHash)
    // console.log(word, '<->', newWord)
    if (!same(vertex, newVertex)) {
      // TODO: Remove slice
      const start = vertex.slice()
      const end = newVertex.slice()

      edges.push({
        start,
        end,
        word,
        newWord,
      })
      return true
    }
  }
}

const draw = (state, word, newWord) => {
  if (word === newWord) {
    return
  }
  // Word has been drawn, we may need to link it to the last word
  if (words.has(newWord)) {
    link(word, newWord)
    return
  }
  // Compute vertex
  words.set(newWord, reflectWord(state, newWord))

  // Plot vertex
  plot(newWord)
  // Link to the last vertex
  link(word, newWord)
  return newWord
}

export const tile = state => {
  const { dimensions } = state
  let futurewordsToConsider
  // Start by filing the fundamental chamber to equilibrate the tiling
  futurewordsToConsider = []
  for (let j = 0; j < nextWords.length; j++) {
    const word = nextWords[j]
    // Try each mirror, if the reflected word is not already processed
    // add it to the list of words to consider
    for (let mirror = 0; mirror < dimensions; mirror++) {
      const m = itoa(mirror)

      const newWord = shorten(rules, word + m)
      // In case of a snub, activate vertex only on even number of reflections
      if (snub && newWord.replace(snub, '').length % 2) {
        // Link to the last vertex
        for (let mirror = 0; mirror < mirrors.length; mirror++) {
          const m = itoa(mirror)

          const postSnubWord = shorten(rules, newWord + m)
          // If the post snub word is also a snub
          if (postSnubWord.replace(snub, '').length % 2) {
            // check at 2nd level (some snubs are linked from 2 reflections)
            for (let subMirror = 0; subMirror < mirrors.length; subMirror++) {
              const m = itoa(subMirror)
              const postPostSnubWord = shorten(rules, postSnubWord + m)
              // If the post snub word is also a snub, skip for now
              if (postPostSnubWord.replace(snub, '').length % 2) {
                continue
              }
              const postPostSnubWordToConsider = draw(
                state,
                word,
                postPostSnubWord
              )
              postPostSnubWordToConsider &&
                futurewordsToConsider.push(postPostSnubWordToConsider)
            }
          } else {
            const postSnubWordToConsider = draw(state, word, postSnubWord)
            postSnubWordToConsider &&
              futurewordsToConsider.push(postSnubWordToConsider)
          }
        }
      } else {
        const newWordToConsider = draw(state, word, newWord)
        newWordToConsider && futurewordsToConsider.push(newWordToConsider)
      }
    }
  }
  return futurewordsToConsider
}

const tileFundamentalChamber = state => {
  const { dimensions } = state
  let fundamentalChamberWords = ['']
  let futurewordsToConsider
  const maxChamberSize = 10000

  // Start by filing the fundamental chamber to equilibrate the tiling
  let currentWords = nextWords
  do {
    futurewordsToConsider = []
    for (let j = 0; j < currentWords.length; j++) {
      const word = currentWords[j]

      for (let mirror = 0; mirror < dimensions - 1; mirror++) {
        const m = itoa(mirror)

        const newWord = shorten(rules, word + m)
        const newWordToConsider = draw(state, word, newWord)
        newWordToConsider && futurewordsToConsider.push(newWordToConsider)
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

onmessage = ({
  data: {
    order,
    curvature,
    coxeter,
    stellated,
    stellation,
    mirrors,
    mirrorsPlanes,
    rootVertex,
    dimensions,
    uuid,
  },
}) => {
  try {
    let failed = false
    if (order === 0) {
      const baseRules = getBaseRules(
        dimensions,
        coxeter,
        stellated ? stellation : null,
        mirrors
      )
      try {
        rules = knuthBendix(baseRules, dimensions)
      } catch (e) {
        // TODO: Report warning
        rules = new Map(Object.entries(baseRules))
      }

      init(rootVertex, rules, mirrors)
      plot('')

      if (snub) {
        failed = true
      } else {
        try {
          nextWords = tileFundamentalChamber({
            curvature,
            mirrorsPlanes,
            rootVertex,
            dimensions,
          })
        } catch (e) {
          failed = true
          init(rootVertex, rules, mirrors)
          plot('')
          console.warn(e)
        }
      }
    }
    if (order > 0 || failed) {
      nextWords = tile({
        curvature,
        mirrorsPlanes,
        rootVertex,
        dimensions,
      })
    }

    postMessage({ vertices, edges, uuid })
    vertices = []
    edges = []
  } catch (e) {
    postMessage({ error: e.message, uuid })
  }
}
