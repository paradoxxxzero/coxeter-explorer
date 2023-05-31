import { getBaseRules, hash, itoa, round } from '../math'
import { knuthBendix, shorten } from '../math/group'
import { reflect } from '../math/hypermath'

let vertexHashes = new Map()
let edgeHashes = new Set()
let vertices = []
let edges = []
let faces = []
let verticesIndex = 0
let words = new Map()
let nextWords = []
let mirrors = null
let snub = false
let rules = null
// let cleanInactive = null

const init = (rootVertex, newRules, newMirrors) => {
  verticesIndex = 0
  vertices = []
  edges = []
  faces = []
  vertexHashes.clear()
  edgeHashes.clear()
  words.clear()
  words.set('', plot('', rootVertex))
  nextWords = ['']
  mirrors = newMirrors
  rules = newRules
  const snubWord = mirrors.map((m, i) => (m === 's' ? itoa(i) : '')).join('')
  snub = snubWord.length > 0 ? new RegExp(`[^${snubWord}]`, 'g') : null
  // cleanInactive = new RegExp(
  //   `[${mirrors.map((m, i) => (m ? '' : itoa(i))).join('')}]*$`
  // )
}

const reflectWord = (state, word) => {
  const { rootVertex, mirrorsPlanes, curvature } = state
  let v = rootVertex

  for (let i = word.length - 1; i >= 0; i--) {
    v = reflect(v, mirrorsPlanes[word.charCodeAt(i) - 97], curvature)
  }
  return v
}

function plot(word, vertex) {
  const vertexHash = hash(vertex)
  if (!vertexHashes.has(vertexHash)) {
    const index = verticesIndex + vertices.length
    vertexHashes.set(vertexHash, index)
    vertices.push({
      vertex,
      word,
    })
    return index
  } else {
    return vertexHashes.get(vertexHash)
  }
}

function link(word, newWord) {
  const vertex = words.get(word)
  const newVertex = words.get(newWord)
  if (vertex === newVertex) {
    return
  }
  const hash =
    vertex > newVertex ? `${newVertex}-${vertex}` : `${vertex}-${newVertex}`
  if (edgeHashes.has(hash)) {
    return
  }
  edgeHashes.add(hash)
  edges.push({
    start: vertex,
    end: newVertex,
    word,
    newWord,
  })
  return true
}

const draw = (state, word, newWord) => {
  if (word === newWord) {
    return
  }
  // const cleanedWord = word.replace(cleanInactive, '')
  // const cleanedNewWord = newWord.replace(cleanInactive, '')
  // if (cleanedWord === cleanedNewWord) {
  //   return newWord
  // }
  // word = cleanedWord
  // newWord = cleanedNewWord
  // Word has been drawn, we may need to link it to the last word
  if (words.has(newWord)) {
    link(word, newWord)
    return
  }
  // Compute vertex
  const newVertex = reflectWord(state, newWord)
  // Plot vertex
  const idx = plot(newWord, newVertex)
  words.set(newWord, idx)
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
        for (let subMirror = 0; subMirror < mirrors.length; subMirror++) {
          const m = itoa(subMirror)

          const postSnubWord = shorten(rules, newWord + m)
          // If the post snub word is also a snub
          if (postSnubWord.replace(snub, '').length % 2) {
            // check at 2nd level (some snubs are linked from 2 reflections)
            for (
              let subSubMirror = 0;
              subSubMirror < mirrors.length;
              subSubMirror++
            ) {
              const m = itoa(subSubMirror)
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
        stellation,
        mirrors,
        curvature
      )
      try {
        rules = knuthBendix(baseRules, dimensions)
      } catch (e) {
        rules = new Map(Object.entries(baseRules))
      }

      init(rootVertex, rules, mirrors)

      if (snub || rules.size <= dimensions) {
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

    postMessage({ vertices, edges, faces, order, uuid })
    verticesIndex += vertices.length
    vertices = []
    edges = []
    faces = []
  } catch (e) {
    postMessage({ error: e.message, uuid })
  }
}
