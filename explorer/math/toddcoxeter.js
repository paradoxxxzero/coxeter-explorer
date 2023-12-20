// From https://pi.math.cornell.edu/~kbrown/7350/toddcox.pdf
// (https://math.berkeley.edu/~kmill/tools/tc.html)

const invertCase = c => {
  const C = c.toUpperCase()
  return c === C ? c.toLowerCase() : C
}

const quotient = (params, cosetId) => {
  let minimalCosetId = cosetId
  while (params.quotientMap[minimalCosetId]) {
    minimalCosetId = params.quotientMap[minimalCosetId]
  }
  // Improve performance by caching but decrease memory efficiency
  if (minimalCosetId !== cosetId) {
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

const words = function (params, gens) {
  const start = quotient(params, 1)
  const names = new Map()
  names.set(start, '')

  const remaining = [start]
  while (remaining.length > 0) {
    const rawCosetId = remaining.shift()
    const cosetId = quotient(params, rawCosetId)

    for (let i = 0; i < gens.length; i++) {
      const generator = gens[i]
      const coset = params.cosets.get(cosetId)

      if (coset.size < params.gens.length * 2) {
        // Might be a coincidence stop here
        return names
      }

      const nextCosetId = quotient(params, coset.get(generator))
      if (!names.has(nextCosetId)) {
        const nextCoset = params.cosets.get(nextCosetId)
        if (nextCoset.size < params.gens.length * 2) {
          // Might be a coincidence stop here
          return names
        }
        names.set(nextCosetId, generator + names.get(cosetId))
        remaining.push(nextCosetId)
      }
    }
  }
  return names
}

export const wordToCoset = (params, word) => {
  // Start at 1
  let cosetId = 1
  for (let i = word.length - 1; i >= 0; i--) {
    cosetId = quotient(params, cosetId)
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
  return params.done ? params.cosets.size : NaN
}

export const ToddCoxeter = params => {
  iter(params)
  params.verticesWords = words(params, params.gens)
  params.words = Array.from(params.verticesWords.values())
  return params
}
