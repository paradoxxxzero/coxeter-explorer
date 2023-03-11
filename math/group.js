import { C } from '../c'

const MAX_ITERATIONS = 100

export const sorter = (a, b) => {
  const l = a.length - b.length
  if (l !== 0) {
    return l
  }
  return a <= b ? -1 : 1
}

const normalize = rules =>
  Object.entries(rules).reduce((newRules, rule) => {
    const [w, v] = rule.sort(sorter)

    if (!newRules[v]) {
      newRules[v] = w
    } else {
      newRules[v] = [w, newRules[v]].sort()[0]
    }
    return newRules
  }, [])

const length = rules =>
  Object.keys(rules)
    .map(k => k.length)
    .sort()

export const rewrite = (rules, word) => {
  let newWord = ''

  if (!word.length) {
    return newWord
  }
  const letters = word.split('').reverse()
  const lengths = length(rules)

  while (letters.length > 0) {
    newWord += letters.pop()
    for (let i = 0; i < lengths.length; i++) {
      const suffix = newWord.substring(newWord.length - lengths[i])
      const replacement = rules[suffix]
      if (replacement || replacement === '') {
        newWord = newWord.substring(0, newWord.length - lengths[i])
        for (let j = replacement.length - 1; j >= 0; j--) {
          letters.push(replacement[j])
        }
        continue
      }
    }
  }
  return newWord
}

const simplify = rules => {
  const newRules = { ...rules }
  rules = Object.entries(rules)

  while (rules.length > 0) {
    const [v, w] = rules.pop()
    delete newRules[v]

    const vv = rewrite(newRules, v)
    const ww = rewrite(newRules, w)

    let addBack = true
    if (vv === ww) {
      addBack = false
    } else {
      const [w1, v1] = [vv, ww].sort(sorter)
      if (v1 !== v && w1 !== w) {
        newRules[v1] = w1
        rules.push([v1, w1])
        addBack = false
      }
    }
    if (addBack) {
      newRules[v] = w
    }
  }
  return newRules
}

const overlap = function (s1, s2) {
  if (s2.length === 0) {
    return null
  }

  const istart = Math.max(0, s1.length - s2.length)
  for (
    let i = istart, end = s1.length, asc = istart <= end;
    asc ? i < end : i > end;
    asc ? i++ : i--
  ) {
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

  for (
    let i = 0, end = s1.length - s2.length + 1, asc = 0 <= end;
    asc ? i < end : i > end;
    asc ? i++ : i--
  ) {
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
  const newRules = { ...rules }
  Object.entries(rules).forEach(([v1, w1]) => {
    Object.entries(rules).forEach(([v2, w2]) => {
      const overlap = findOverlap(v1, w1, v2, w2)

      if (overlap) {
        const t1 = rewrite(rules, overlap.s1)
        const t2 = rewrite(rules, overlap.s2)

        if (t1 !== t2) {
          const [w, v] = [t1, t2].sort(sorter)
          newRules[v] = w
        }
      }
    })
  })
  return newRules
}

const reduce = rules => complete(simplify(rules))

const equals = (a, b) => {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)
  if (aKeys.length !== bKeys.length) {
    return false
  }
  for (let i = 0; i < aKeys.length; i++) {
    const key = aKeys[i]
    if (a[key] !== b[key]) {
      return false
    }
  }
  return true
}

export const knuthBendix = rules => {
  rules = normalize(rules)
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const newRules = reduce(rules)
    // console.log('iteration', i, Object.entries(newRules).sort())
    if (equals(newRules, rules)) {
      console.log('iterations', i)
      return newRules
    }
    rules = newRules
    if (Object.keys(rules).length > 100) {
      throw new Error('Too many rules')
    }
  }
  throw new Error('Max iterations reached')
}

export const setRules = () => {
  C.rules = knuthBendix(
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
}

export const shorten = word => rewrite(C.rules, word)
