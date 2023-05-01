import { abs, getRels, itoa } from '.'

export const getVerticesCosetsParams = (
  dimensions,
  coxeter,
  stellation,
  mirrors
) => {
  const rels = getRels(dimensions, coxeter, stellation, mirrors)
  const gens = [...Array(dimensions).keys()].map(i => itoa(i)).join('')
  const subgens = mirrors.map((m, i) => (m ? '' : itoa(abs(i)))).join('')
  return { gens, subgens, rels }
}

export const getEdgesCosetsParams = (
  dimensions,
  coxeter,
  stellation,
  mirrors
) => {
  const rels = getRels(dimensions, coxeter, stellation, mirrors)
  const gens = [...Array(dimensions).keys()].map(i => itoa(i)).join('')
  const params = []

  for (let i = 0; i < mirrors.length; i++) {
    if (mirrors[i]) {
      let subgens = itoa(i)
      for (let j = 0; j < dimensions; j++) {
        if (coxeter[i][j] === 2) {
          if (!mirrors[j]) {
            subgens += itoa(j)
          }
        }
      }
      params.push({ gens, subgens, rels, edgeMirror: itoa(i) })
    }
  }

  return params
}

const learn = (cosets, row) => {
  if (row.left === row.right) {
    return false
  }

  while (row.left !== row.right) {
    const left_target = cosets.normal[row.left_coset][row.rel[row.left]]
    if (left_target === undefined) {
      break
    }

    row.left++
    row.left_coset = left_target
  }

  while (row.left !== row.right) {
    const right_coset = cosets.reverse[row.right_target][row.rel[row.right]]
    if (right_coset === undefined) {
      break
    }

    row.right--
    row.right_target = right_coset
  }
  if (row.left === row.right) {
    cosets.normal[row.left_coset][row.rel[row.right]] = row.right_target
    cosets.reverse[row.right_target][row.rel[row.right]] = row.left_coset
    return true
  }

  return false
}

export const solve = params => {
  const {
    gens,
    subgens: strSubgens,
    rels: strRels,
    cosets,
    rows,
    words,
    limit,
  } = params

  const dimensions = gens.length
  const rels = strRels.map(rel => [...rel].map(g => gens.indexOf(g)))
  const subgens = strSubgens.split('').map(g => gens.indexOf(g))

  if (cosets.normal.length === 0) {
    cosets.normal.push(new Array(dimensions).fill())
    cosets.reverse.push(new Array(dimensions).fill())

    for (let i = 0; i < subgens.length; i++) {
      cosets.normal[0][subgens[i]] = 0
      cosets.reverse[0][subgens[i]] = 0
    }
  }
  if (rows.length === 0) {
    rows.push(
      ...rels.map(rel => ({
        rel,
        left: 0,
        right: rel.length - 1,
        left_coset: 0,
        right_target: 0,
      }))
    )
  }

  while (rows.length && cosets.normal.length < limit) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      let learned = false
      for (let i = rows.length - 1; i >= 0; i--) {
        if (learn(cosets, rows[i])) {
          learned = true
          rows.splice(i, 1)
        }
      }
      if (!learned) {
        break
      }
    }

    const initialLength = cosets.normal.length
    let found = false
    for (let i = 0; i < cosets.normal.length; i++) {
      const coset = cosets.normal[i]
      for (let gen = 0; gen < coset.length; gen++) {
        let target = coset[gen]
        if (target === undefined) {
          target = cosets.normal.length
          cosets.normal.push(new Array(dimensions).fill())
          cosets.reverse.push(new Array(dimensions).fill())

          cosets.normal[i][gen] = target
          cosets.reverse[target][gen] = i
          rows.push(
            ...rels.map(rel => ({
              rel,
              left: 0,
              right: rel.length - 1,
              left_coset: initialLength,
              right_target: initialLength,
            }))
          )
          found = true
          break
        }
      }
      if (found) {
        break
      }
    }
  }
  if (!rows.length) {
    params.done = true
  }
  if (words.length === 0) {
    words[0] = ''
  }

  while (remaining(cosets.normal.length, words)) {
    for (let i = 0; i < words.length; i++) {
      if (words[i] === undefined) {
        continue
      }

      const coset = cosets.normal[i]
      for (let gen = 0; gen < coset.length; gen++) {
        const target = coset[gen]

        if (words[target] !== undefined) {
          continue
        }

        words[target] = words[i] + itoa(gen)
      }
    }
  }

  return { cosets, rows, words }
}

const remaining = (length, words) => {
  for (let i = 0; i < length; i++) {
    if (words[i] === undefined) {
      return true
    }
  }
  return false
}
