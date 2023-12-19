import { MAX_UINT_32 } from '../../utils'

const learn = (cosets, row) => {
  if (row.left === row.right) {
    return false
  }

  while (row.left !== row.right) {
    const left_target = cosets.normal[row.left_coset][row.rel[row.left]]
    if (left_target === MAX_UINT_32) {
      break
    }

    row.left++
    row.left_coset = left_target
  }

  while (row.left !== row.right) {
    const right_coset = cosets.reverse[row.right_target][row.rel[row.right]]
    if (right_coset === MAX_UINT_32) {
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
function fillCosets(params) {
  if (!params.cosets) {
    params.cosets = {
      normal: [],
      reverse: [],
    }
    // snub(params)
  }
  if (!params.rows) {
    params.rows = []
  }

  if (!params.limit) {
    params.limit = 1000
  }

  if (!params.done) {
    params.done = false
  }
  const {
    gens,
    subgens: strSubgens,
    rels: strRels,
    cosets,
    rows,
    limit,
  } = params
  if (strSubgens.split('').some(c => !gens.includes(c))) {
    throw new Error(`Invalid subgens "${strSubgens}" <- "${gens}"`)
  }
  const dimensions = gens.length
  const rels = strRels.map(rel => [...rel].map(g => gens.indexOf(g)))
  const subgens = strSubgens.split('').map(g => gens.indexOf(g))

  if (cosets.normal.length === 0) {
    cosets.normal.push(new Uint32Array(dimensions).fill(MAX_UINT_32))
    cosets.reverse.push(new Uint32Array(dimensions).fill(MAX_UINT_32))

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
          rows[i] = rows[rows.length - 1]
          rows.pop()
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
        if (target === MAX_UINT_32) {
          target = cosets.normal.length
          cosets.normal.push(new Uint32Array(dimensions).fill(MAX_UINT_32))
          cosets.reverse.push(new Uint32Array(dimensions).fill(MAX_UINT_32))

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
  params.done = !rows.length
}

const remaining = (length, words) => {
  for (let i = 0; i < length; i++) {
    if (words[i] === undefined) {
      return true
    }
  }
  return false
}

function wordify(params) {
  if (!params.words) {
    params.words = []
  }
  const {
    gens,
    cosets: { normal: cosets },
    words,
  } = params

  if (words.length === 0) {
    words[0] = ''
  }
  let change = true,
    max = cosets.length
  while (remaining(cosets.length, words) && change && --max) {
    change = false
    for (let i = 0; i < words.length; i++) {
      if (words[i] === undefined) {
        continue
      }

      const coset = cosets[i]
      for (let gen = 0; gen < coset.length; gen++) {
        const target = coset[gen]

        if (target === MAX_UINT_32 || words[target] !== undefined) {
          continue
        }

        words[target] = words[i] + gens[gen]

        change = true
      }
    }
  }
  if (!change) {
    console.warn('Hole in the cosets')
  }
  if (max === 0) {
    console.warn('Max iterations reached')
  }
}

export const ToddCoxeter = params => {
  fillCosets(params)
  wordify(params)
  return params.words
}

export const countCosets = params => {
  fillCosets(params)
  return params.done ? params.cosets.normal.length : NaN
}
