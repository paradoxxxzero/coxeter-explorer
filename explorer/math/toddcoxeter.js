// From https://pi.math.cornell.edu/~kbrown/7350/toddcox.pdf
// (https://math.berkeley.edu/~kmill/tools/tc.html)

import { reflect } from './hypermath'

const invertCase = c => {
  const C = c.toUpperCase()
  return c === C ? c.toLowerCase() : C
}

const quotient = (params, cosetId) => {
  let minimalCosetId = cosetId
  let indirections = 0
  while (params.quotientMap[minimalCosetId]) {
    indirections++
    minimalCosetId = params.quotientMap[minimalCosetId]
  }
  // Improve performance by caching but decrease memory efficiency
  if (indirections > 1) {
    params.quotientMap[cosetId] = minimalCosetId
  }
  return minimalCosetId
}

const resolveCoincidence = (params, cosetId, otherCosetId) => {
  const rightCosetId = cosetId
  const remaining = [[cosetId, otherCosetId]]
  while (remaining.length > 0) {
    ;[cosetId, otherCosetId] = remaining.pop()
    cosetId = quotient(params, cosetId)
    otherCosetId = quotient(params, otherCosetId)

    if (cosetId !== otherCosetId) {
      params.quotientMap[otherCosetId] = cosetId
      if (params.seen.has(otherCosetId) && !params.seen.has(cosetId)) {
        params.seen.add(cosetId)
      }
      const coset = params.cosets.get(cosetId)
      const otherCoset = params.cosets.get(otherCosetId)

      params.cosets.delete(otherCosetId)
      if (params.currentWords?.has(otherCosetId)) {
        params.currentWords.set(cosetId, params.currentWords.get(otherCosetId))
        params.currentWords.delete(otherCosetId)
      }
      if (params.words?.has(otherCosetId)) {
        params.words.set(cosetId, params.words.get(otherCosetId))
        params.words.delete(otherCosetId)
      }
      if (params.vertices?.has(otherCosetId)) {
        params.vertices.set(cosetId, params.vertices.get(otherCosetId))
        params.vertices.delete(otherCosetId)
      }

      for (const [generator, otherCosetTargetCosetId] of otherCoset) {
        if (coset.has(generator)) {
          remaining.push([coset.get(generator), otherCosetTargetCosetId])
        } else {
          coset.set(generator, otherCosetTargetCosetId)
        }
      }
    }
  }
  return quotient(params, rightCosetId)
}
const link = (params, cosetId, generator, otherCosetId) => {
  cosetId = quotient(params, cosetId)
  const coset = params.cosets.get(cosetId)
  if (!coset.has(generator)) {
    coset.set(generator, otherCosetId)
  } else {
    resolveCoincidence(params, coset.get(generator), otherCosetId)
  }
}

const follow = (params, cosetId, generator, expectedCosetId) => {
  cosetId = quotient(params, cosetId)
  let rightCoset
  const coset = params.cosets.get(cosetId)
  if (!coset.has(generator)) {
    if (expectedCosetId) {
      rightCoset = expectedCosetId
    } else {
      // Create a new vertex
      rightCoset = params.nextVertex++
      params.cosets.set(rightCoset, new Map())
      params.unvisited.push(rightCoset)
    }
    link(params, cosetId, generator, rightCoset)
    link(params, rightCoset, invertCase(generator), cosetId)
  } else {
    rightCoset = quotient(params, coset.get(generator))
    if (expectedCosetId !== undefined && rightCoset !== expectedCosetId) {
      resolveCoincidence(params, expectedCosetId, rightCoset)
    }
  }
  return rightCoset
}

const scan = function (params, relators, cosetId) {
  let currentCosetId = cosetId
  for (let j = relators.length - 1; j > 0; j--) {
    currentCosetId = follow(params, currentCosetId, relators[j])
  }
  follow(params, currentCosetId, relators[0], cosetId)
}

const words = function (params) {
  if (!params.words) {
    const start = quotient(params, 1)
    params.words = new Map()
    params.words.set(start, '')
    params.currentWords = new Map()
    params.currentWords.set(start, '')
    params.lastWord = ''
    params.lastCoset = start
    params.remaining = [start]
    if (params.rootVertex && params.rootNormals && params.metric) {
      params.vertices = new Map()
      params.vertices.set(start, params.rootVertex)
    }
  }

  while (params.remaining.length > 0) {
    const rawCosetId = params.remaining[0]
    const cosetId = quotient(params, rawCosetId)
    const coset = params.cosets.get(cosetId)
    const word = params.words.get(cosetId)

    if (coset.size < params.gens.length * 2) {
      // Might be a coincidence stop here
      return
    }

    const genCoset = []
    for (let i = 0; i < params.gens.length; i++) {
      const generator = params.gens[i]

      const nextCosetId = quotient(params, coset.get(generator))
      if (!params.words.has(nextCosetId)) {
        const nextCoset = params.cosets.get(nextCosetId)
        if (nextCoset.size < params.gens.length * 2) {
          // Might be a coincidence stop here
          return
        }
        genCoset.push([generator, nextCosetId])
      }
    }

    params.remaining.shift()

    for (let i = 0; i < genCoset.length; i++) {
      const [generator, nextCosetId] = genCoset[i]

      const newWord = generator + word
      params.words.set(nextCosetId, newWord)
      params.currentWords.set(nextCosetId, newWord)
      params.lastCoset = nextCosetId
      params.lastWord = newWord
      params.remaining.push(nextCosetId)
      if (params.vertices) {
        let vertex = params.vertices.get(cosetId)
        for (let j = 0; j < params.transforms[generator].length; j++) {
          const idx = params.transforms[generator][j]
          vertex = reflect(vertex, params.rootNormals[idx], params.metric)
        }
        params.vertices.set(nextCosetId, vertex)
      }
    }
  }
}

export const wordToCoset = (params, word) => {
  // Start at 1
  let cosetId = quotient(params, 1)
  for (let i = word.length - 1; i >= 0; i--) {
    const coset = params.cosets.get(cosetId)
    if (coset.size < params.gens.length * 2) {
      return
    }
    cosetId = quotient(params, coset.get(word[i]))
    const nextCoset = params.cosets.get(cosetId)
    if (nextCoset.size < params.gens.length * 2) {
      return
    }
  }
  return cosetId
}

const iter = params => {
  if (!params.cosets) {
    params.unvisited = [1]
    params.cosets = new Map([[1, new Map()]]) // id -> (gen -> id)
    params.nextVertex = 2

    params.seen = new Set()
    params.quotientMap = {} // tracks quotiented cosets

    // Start by scanning first coset (1) under all generators of H
    // (Here what we called subgens)
    // (3) in the paper under 7.
    for (let i = 0; i < params.subgens.length; i++) {
      // Each subgen is a rel of length 1
      scan(params, params.subgens[i], 1)
    }
  }

  params.limit = params.limit || 1000
  params.done = false

  for (let i = 0; i < params.limit; i++) {
    // Look for unvisited coset
    let coset = null

    while (params.unvisited.length > 0) {
      const id = quotient(params, params.unvisited.shift())
      if (!params.seen.has(id)) {
        params.seen.add(id)
        coset = id
        break
      }
    }
    if (coset === null) {
      params.done = true
      break
    }

    // (1) Scan the coset under all generators
    for (let i = 0; i < params.gens.length; i++) {
      follow(params, coset, params.gens[i].toUpperCase())
      follow(params, coset, params.gens[i])
    }
    // (2) Scan the coset under all relators
    for (let i = 0; i < params.rels.length; i++) {
      scan(params, params.rels[i], coset)
    }
  }
}

export const countCosets = params => {
  iter(params)
  return params.cosets.size
}

export const ToddCoxeter = params => {
  iter(params)
  words(params)
  return params
}
