import { C } from '../C.js'

const MAX_ITERATIONS = 100
let t

export const sorter = (a, b) => {
  const l = a.length - b.length
  if (l !== 0) {
    return l
  }
  return a <= b ? -1 : 1
}

const normalize = rules => {
  const ruleMap = new Map()
  const keys = Object.keys(rules).sort(sorter)
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i]
    const [w, v] = [k, rules[k]].sort(sorter)
    if (!ruleMap.has(v)) {
      ruleMap.set(v, w)
    } else {
      ruleMap.set(v, [w, ruleMap.get(v)].sort()[0])
    }
  }
  return ruleMap
}

export const rewrite = (rules, word) => {
  if (word.length === 0 || rules.size === 0) {
    return word
  }
  const re = rules._re_cache || new RegExp([...rules.keys()].join('|'), 'g')
  let rewrittenWord = word

  do {
    word = rewrittenWord
    rewrittenWord = word.replace(re, match => rules.get(match))
  } while (rewrittenWord !== word)
  return word
}

const simplify = rules => {
  const newRules = new Map(rules)
  rules = [...rules.entries()]

  while (rules.length > 0) {
    if (performance.now() - t > 5000) {
      throw new Error('Timeout')
    }
    const [v, w] = rules.pop()
    newRules.delete(v)

    const vv = rewrite(newRules, v)
    const ww = rewrite(newRules, w)

    let addBack = true
    if (vv === ww) {
      addBack = false
    } else {
      const [w1, v1] = [vv, ww].sort(sorter)
      if (v1 !== v && w1 !== w) {
        newRules.set(v1, w1)
        rules.push([v1, w1])
        addBack = false
      }
    }
    if (addBack) {
      newRules.set(v, w)
    }
  }
  return newRules
}

const overlap = function (s1, s2) {
  if (s2.length === 0) {
    return null
  }

  const istart = Math.max(0, s1.length - s2.length)

  for (let i = istart; i < s1.length; i++) {
    if (s1[i] === s2[0]) {
      if (s1.slice(i + 1) === s2.slice(1, s1.length - i)) {
        return {
          prefix: s1.slice(0, i),
          suffix: s2.slice(s1.length - i),
        }
      }
    }
  }
}

const splitBy = function (s1, s2) {
  if (s2.length === 0) {
    return null
  }

  for (let i = 0; i < s1.length - s2.length + 1; i++) {
    if (s1.slice(i, i + s2.length) === s2) {
      return {
        prefix: s1.slice(0, i),
        suffix: s1.slice(i + s2.length),
      }
    }
  }
}

const findOverlap = (v1, w1, v2, w2) => {
  const overlap_ = overlap(v1, v2)
  if (overlap_) {
    return { s1: overlap_.prefix + w2, s2: w1 + overlap_.suffix }
  }

  const split = splitBy(v1, v2)
  if (split) {
    return { s1: w1, s2: split.prefix + w2 + split.suffix }
  }
}

const complete = rules => {
  const newRules = new Map(rules)

  const entries = [...rules.entries()]
  for (let i = 0; i < entries.length; i++) {
    const [v1, w1] = entries[i]
    for (let j = 0; j < entries.length; j++) {
      if (i === j) continue
      const [v2, w2] = entries[j]
      const overlap = findOverlap(v1, w1, v2, w2)

      if (overlap) {
        const t1 = rewrite(rules, overlap.s1)
        const t2 = rewrite(rules, overlap.s2)

        if (t1 !== t2) {
          const [w, v] = [t1, t2].sort(sorter)
          newRules.set(v, w)
        }
      }
    }
  }
  return newRules
}

const reduce = rules => complete(simplify(rules))

const equals = (a, b) => {
  if (a.size !== b.size) {
    return false
  }
  const aKeys = a.keys()
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { done, value } = aKeys.next()
    if (done) {
      return true
    }
    if (a.get(value) !== b.get(value)) {
      return false
    }
  }
}

export const knuthBendix = rules => {
  t = performance.now()
  rules = normalize(rules)
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const newRules = reduce(rules)
    // console.log('iteration', i, Object.entries(newRules).sort())
    if (equals(newRules, rules)) {
      newRules._re_cache = new RegExp([...newRules.keys()].join('|'), 'g')
      return newRules
    }
    rules = newRules
    if (rules.size > 200) {
      throw new Error('Too many rules')
    }
  }
  throw new Error('Max iterations reached')
}

export const getRules = () =>
  knuthBendix(
    C.dimensions === 3
      ? {
          aa: '',
          bb: '',
          cc: '',
          ['ab'.repeat(C.p)]: '',
          ['ac'.repeat(C.q)]: '',
          ['bc'.repeat(C.r)]: '',
        }
      : {
          aa: '',
          bb: '',
          cc: '',
          dd: '',
          ['ab'.repeat(C.p)]: '',
          ['ac'.repeat(C.q)]: '',
          ['ad'.repeat(C.r)]: '',
          ['bc'.repeat(C.s)]: '',
          ['bd'.repeat(C.t)]: '',
          ['cd'.repeat(C.u)]: '',
        }
  )

export const shorten = word => rewrite(C.runtime.rules, word)
