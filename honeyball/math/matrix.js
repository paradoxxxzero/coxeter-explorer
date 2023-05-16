export const multiply = (m1, m2) => {
  // Multiply two matrices m1, m2 and store result in m1
  const res = []
  for (let i = 0; i < m1.length; i++) {
    res.push([])
    for (let j = 0; j < m2[0].length; j++) {
      let sum = 0
      for (let k = 0; k < m2.length; k++) {
        sum += m1[i][k] * m2[k][j]
      }
      res[i].push(sum)
    }
  }
  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m2[0].length; j++) {
      m1[i][j] = res[i][j]
    }
  }

  return m1
}

export const multiplyVector = (v, m) => {
  const res = []
  for (let i = 0; i < m.length; i++) {
    let sum = 0
    for (let j = 0; j < m[0].length; j++) {
      sum += m[i][j] * v[j]
    }
    res.push(sum)
  }
  return res
}

export const ident = dimensions =>
  new Array(dimensions)
    .fill()
    .map((_, i) =>
      new Array(dimensions).fill().map((_, j) => (i === j ? 1 : 0))
    )

export const transpose = m => m.map((row, i) => row.map((_, j) => m[j][i]))

export const diagonal = m =>
  m.every((row, i) => row.every((_, j) => i === j || m[i][j] === 0))
