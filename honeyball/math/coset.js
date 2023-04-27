const itoa = i => String.fromCharCode(97 + i)

export const getRels = (dimensions, coxeter) => {
  const rules = []
  for (let i = 0; i < dimensions; i++) {
    rules.push(itoa(i).repeat(2))
  }
  for (let i = 1; i < dimensions; i++) {
    for (let j = 0; j < i; j++) {
      rules.push((itoa(j) + itoa(i)).repeat(coxeter[i][j]))
    }
  }
  return rules
}

export const getVerticesCosets = (dimensions, coxeter, mirrors, limit) => {
  const rels = getRels(dimensions, coxeter)
  const gens = [...Array(dimensions).keys()].map(i => itoa(i)).join('')
  const subgens = mirrors.map((m, i) => (m ? '' : itoa(i))).join('')
  return solve(gens, subgens, rels, limit)
}

export const getEdgesCosets = (dimensions, coxeter, mirrors, limit) => {
  const rels = getRels(dimensions, coxeter)
  const gens = [...Array(dimensions).keys()].map(i => itoa(i)).join('')
  const edges = {}

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
      edges[itoa(i)] = solve(gens, subgens, rels, limit)
    }
  }

  return edges
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

const solve = (gens, subgens, rels, limit) => {
  const dimensions = gens.length
  rels = rels.map(rel => [...rel].map(g => gens.indexOf(g)))
  subgens = subgens.split('').map(g => gens.indexOf(g))

  const cosets = {
    normal: [new Array(dimensions).fill()],
    reverse: [new Array(dimensions).fill()],
  }

  const rows = rels.map(rel => ({
    rel,
    left: 0,
    right: rel.length - 1,
    left_coset: 0,
    right_target: 0,
  }))

  for (const gen of subgens) {
    cosets.normal[0][gen] = 0
    cosets.reverse[0][gen] = 0
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

  const words = new Array(cosets.normal.length).fill()
  words[0] = ''

  while (words.some(x => x === undefined)) {
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
  return words
}
