import { PI, abs, atan, cos, sign, sin } from '.'

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
  return res
}

export const multiplyScalar = (m, s) => m.map(row => row.map(el => el * s))

export const set = (m, nm) => {
  // Set matrix m to nm
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[0].length; j++) {
      m[i][j] = nm[i][j]
    }
  }
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

export const eigen = matrix => {
  // Jacobi algorithm
  const dimensions = matrix[0].length
  let diag = matrix.map(row => row.slice())
  let rotation = ident(dimensions)

  let max = 1000
  while (!diagonal(diag) && max-- > 0) {
    let di = 0
    let dj = 1
    for (let i = 0; i < dimensions; i++) {
      for (let j = 0; j < dimensions; j++) {
        if (i !== j && abs(diag[i][j]) > abs(diag[di][dj])) {
          di = i
          dj = j
        }
      }
    }

    const theta =
      diag[di][di] === diag[dj][dj]
        ? (sign(diag[di][dj]) * PI) / 4
        : 0.5 * atan((2 * diag[di][dj]) / (diag[di][di] - diag[dj][dj]))

    const newRotation = ident(dimensions)
    newRotation[dj][dj] = newRotation[di][di] = cos(theta)
    newRotation[dj][di] = newRotation[di][dj] = -sin(theta)
    newRotation[dj][di] *= -1

    rotation = multiply(rotation, newRotation)
    diag = multiply(multiply(transpose(newRotation), diag), newRotation)
  }

  return {
    vectors: rotation,
    values: diag.map((row, i) => (abs(row[i]) < 1e-8 ? 0 : row[i])),
  }
}

export const inverse = m => {
  // Invert a matrix m using Gauss-Jordan elimination
  // https://en.wikipedia.org/wiki/Gaussian_elimination
  const n = m.length
  const aug = []
  for (let i = 0; i < n; i++) {
    aug.push([...m[i], ...ident(n)[i]])
  }

  // Forward elimination
  for (let i = 0; i < n; i++) {
    const pivot = aug[i][i]
    for (let j = i + 1; j < n; j++) {
      const factor = aug[j][i] / pivot
      for (let k = i; k < 2 * n; k++) {
        aug[j][k] -= factor * aug[i][k]
      }
    }
  }

  // Backward elimination
  for (let i = n - 1; i >= 0; i--) {
    const pivot = aug[i][i]
    for (let j = i - 1; j >= 0; j--) {
      const factor = aug[j][i] / pivot
      for (let k = 0; k < 2 * n; k++) {
        aug[j][k] -= factor * aug[i][k]
      }
    }
    for (let k = n; k < 2 * n; k++) {
      aug[i][k] /= pivot
    }
  }

  return aug.map(row => row.slice(n))
}

export const add = (m1, m2) =>
  m1.map((row, i) => row.map((_, j) => m1[i][j] + m2[i][j]))

export const equal = (m1, m2) =>
  m1.every((row, i) => row.every((_, j) => abs(m1[i][j] - m2[i][j]) < 1e-8))

export const squareRoot = m => {
  // Find the square root of a matrix m using Denman-Beavers iteration
  // https://en.wikipedia.org/wiki/Square_root_of_a_matrix#Denman%E2%80%93Beavers_iteration
  let y = m
  let z = ident(m.length)
  let prev = null
  let max = 1000
  while (prev === null || (!equal(y, prev) && max-- > 0)) {
    prev = y
    y = multiplyScalar(add(prev, inverse(z)), 0.5)
    z = multiplyScalar(add(z, inverse(prev)), 0.5)
  }
  if (max <= 0) {
    console.warn('Square root did not converge')
  }
  return y
}
