import { PI, abs, atan, cos, sign, sin, sqrt } from '.'

export const dot = (v1, v2) => {
  let sum = 0
  for (let i = 0; i < v1.length; i++) {
    sum += v1[i] * v2[i]
  }
  return sum
}
export const cross = (v1, v2) => [
  v1[1] * v2[2] - v1[2] * v2[1],
  v1[2] * v2[0] - v1[0] * v2[2],
  v1[0] * v2[1] - v1[1] * v2[0],
]

export const addV = (a, b) => {
  const result = []
  for (let i = 0; i < a.length; i++) {
    result[i] = a[i] + b[i]
  }
  return result
}

export const subV = (a, b) => {
  const result = []
  for (let i = 0; i < a.length; i++) {
    result[i] = a[i] - b[i]
  }
  return result
}

export const mulV = (v, s) => {
  const result = []
  for (let i = 0; i < v.length; i++) {
    result[i] = v[i] * s
  }
  return result
}

export const transpose = m => {
  // Transpose matrix m (swap rows and columns)
  const res = []
  for (let i = 0; i < m[0].length; i++) {
    res.push([])
    for (let j = 0; j < m.length; j++) {
      res[i].push(m[j][i])
    }
  }
  return res
}

export const epsize = m => {
  // Set very small values to zero
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      m[i][j] = eps(m[i][j])
    }
  }
  return m
}

export const multiply = (m1, m2) => {
  // Multiply two matrices m1, m2
  // if (m1.length === 0 || m2.length === 0) {
  //   return []
  // }
  // if (!Array.isArray(m1[0])) {
  //   m1 = [m1]
  // }
  // if (!Array.isArray(m2[0])) {
  //   m2 = [m2]
  // }
  // if (m1[0].length !== m2.length) {
  //   throw new Error(
  //     `Matrix dimensions do not match (${m1[0].length} != ${m2.length})`
  //   )
  // }

  const res = new Array(m1.length)
  for (let i = 0; i < m1.length; i++) {
    res[i] = new Array(m2[0].length)
    for (let j = 0; j < m2[0].length; j++) {
      let sum = 0
      for (let k = 0; k < m2.length; k++) {
        sum += m1[i][k] * m2[k][j]
      }
      res[i][j] = sum
    }
  }
  return res
}

export const multiplyVector = (m, v) => {
  // Multiply matrix m and vector v
  const res = new Array(m.length)
  for (let i = 0; i < m.length; i++) {
    let sum = 0
    for (let j = 0; j < m[0].length; j++) {
      sum += m[i][j] * v[j]
    }
    res[i] = sum
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
  return m
}

export const diag = v => {
  const d = new Array(v.length)
  for (let i = 0; i < v.length; i++) {
    d[i] = new Array(v.length).fill(0)
    d[i][i] = v[i]
  }
  return d
}

export const ident = dimensions => {
  const id = new Array(dimensions).fill(1)
  return diag(id)
}

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
  const values = diag.map((row, i) => (abs(row[i]) < 1e-8 ? 0 : row[i]))
  const order = values
    .map((v, i) => [v, i])
    .sort((a, b) => b[0] - a[0])
    .map(v => v[1])
  const vectors = transpose(rotation)
  return {
    values: order.map(i => values[i]),
    vectors: order.map(i => vectors[i]),
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

export const cholesky = m => {
  // Cholesky decomposition
  // https://en.wikipedia.org/wiki/Cholesky_decomposition
  const n = m.length
  const l = ident(n)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = 0
      for (let k = 0; k < j; k++) {
        sum += l[i][k] * l[j][k]
      }
      l[i][j] = i === j ? sqrt(m[i][i] - sum) : (1 / l[j][j]) * (m[i][j] - sum)
    }
  }
  return l
}
export const eps = x => (abs(x) < 1e-9 ? 0 : x)

export const ldl = m => {
  // LDL decomposition
  // https://en.wikipedia.org/wiki/Cholesky_decomposition#LDL_decomposition
  const n = m.length
  const D = ident(n)
  const L = ident(n)
  for (let i = 0; i < n; i++) {
    D[i][i] = m[i][i]
    for (let j = 0; j < i; j++) {
      D[i][i] -= L[i][j] ** 2 * D[j][j]
    }
    for (let j = i + 1; j < n; j++) {
      let sum = 0
      for (let k = 0; k < i; k++) {
        sum += L[i][k] * L[j][k] * D[k][k]
      }
      L[j][i] = (m[j][i] - sum) / D[i][i]
    }
  }
  epsize(D)
  epsize(L)
  return {
    L,
    D,
  }
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

export const logm = m => {
  const n = m.length
  const A = add(multiply(transpose(m), m), multiplyScalar(ident(n), -1))
  return multiplyScalar(
    multiply(
      add(A, multiplyScalar(multiply(A, A), 0.5)),
      inverse(add(ident(n), add(A, multiplyScalar(multiply(A, A), 1 / 6))))
    ),
    0.5
  )
}

export const det = m => {
  if (m.length === 1) {
    return m[0][0]
  }
  let sum = 0
  for (let i = 0; i < m.length; i++) {
    const cofactor = new Array(m.length - 1)
      .fill()
      .map(() => new Array(m.length - 1).fill(0))
    // Compute the cofactor of m[0][i]:
    for (let j = 1; j < m.length; j++) {
      for (let k = 0; k < m.length; k++) {
        if (k < i) {
          cofactor[j - 1][k] = m[j][k]
        } else if (k > i) {
          cofactor[j - 1][k - 1] = m[j][k]
        }
      }
    }

    const sign = i % 2 === 0 ? 1 : -1
    sum += m[0][i] * sign * det(cofactor)
  }
  return sum
}
export const columnMajor = m => {
  if (m.length === 2) {
    // prettier-ignore
    return [
      m[0][0], m[1][0],
      m[0][1], m[1][1]
    ]
  }
  if (m.length === 3) {
    // prettier-ignore
    return [
      m[0][0], m[1][0], m[2][0],
      m[0][1], m[1][1], m[2][1],
      m[0][2], m[1][2], m[2][2],
    ]
  }
  if (m.length === 4) {
    // prettier-ignore
    return [
      m[0][0], m[1][0], m[2][0], m[3][0],
      m[0][1], m[1][1], m[2][1], m[3][1],
      m[0][2], m[1][2], m[2][2], m[3][2],
      m[0][3], m[1][3], m[2][3], m[3][3],
    ]
  }
  // From now on these are transposed
  if (m.length === 5) {
    return [
      [[m[0][0], m[0][1], m[0][2], m[0][3]], m[0][4]],
      [[m[1][0], m[1][1], m[1][2], m[1][3]], m[1][4]],
      [[m[2][0], m[2][1], m[2][2], m[2][3]], m[2][4]],
      [[m[3][0], m[3][1], m[3][2], m[3][3]], m[3][4]],
      [[m[4][0], m[4][1], m[4][2], m[4][3]], m[4][4]],
    ]
  }
  if (m.length === 6) {
    // prettier-ignore
    return [
      [[m[0][0], m[0][1], m[0][2], m[0][3]], [m[0][4], m[0][5]]],
      [[m[1][0], m[1][1], m[1][2], m[1][3]], [m[1][4], m[1][5]]],
      [[m[2][0], m[2][1], m[2][2], m[2][3]], [m[2][4], m[2][5]]],
      [[m[3][0], m[3][1], m[3][2], m[3][3]], [m[3][4], m[3][5]]],
      [[m[4][0], m[4][1], m[4][2], m[4][3]], [m[4][4], m[4][5]]],
      [[m[5][0], m[5][1], m[5][2], m[5][3]], [m[5][4], m[5][5]]],
    ]
  }
  if (m.length === 7) {
    // prettier-ignore
    return [
      [[m[0][0], m[0][1], m[0][2], m[0][3]], [m[0][4], m[0][5], m[0][6]]],
      [[m[1][0], m[1][1], m[1][2], m[1][3]], [m[1][4], m[1][5], m[1][6]]],
      [[m[2][0], m[2][1], m[2][2], m[2][3]], [m[2][4], m[2][5], m[2][6]]],
      [[m[3][0], m[3][1], m[3][2], m[3][3]], [m[3][4], m[3][5], m[3][6]]],
      [[m[4][0], m[4][1], m[4][2], m[4][3]], [m[4][4], m[4][5], m[4][6]]],
      [[m[5][0], m[5][1], m[5][2], m[5][3]], [m[5][4], m[5][5], m[5][6]]],
      [[m[6][0], m[6][1], m[6][2], m[6][3]], [m[6][4], m[6][5], m[6][6]]],
    ]
  }
  if (m.length === 8) {
    // prettier-ignore
    return [
      [[m[0][0], m[0][1], m[0][2], m[0][3]], [m[0][4], m[0][5], m[0][6], m[0][7]]],
      [[m[1][0], m[1][1], m[1][2], m[1][3]], [m[1][4], m[1][5], m[1][6], m[1][7]]],
      [[m[2][0], m[2][1], m[2][2], m[2][3]], [m[2][4], m[2][5], m[2][6], m[2][7]]],
      [[m[3][0], m[3][1], m[3][2], m[3][3]], [m[3][4], m[3][5], m[3][6], m[3][7]]],
      [[m[4][0], m[4][1], m[4][2], m[4][3]], [m[4][4], m[4][5], m[4][6], m[4][7]]],
      [[m[5][0], m[5][1], m[5][2], m[5][3]], [m[5][4], m[5][5], m[5][6], m[5][7]]],
      [[m[6][0], m[6][1], m[6][2], m[6][3]], [m[6][4], m[6][5], m[6][6], m[6][7]]],
      [[m[7][0], m[7][1], m[7][2], m[7][3]], [m[7][4], m[7][5], m[7][6], m[7][7]]],
    ]
  }
  if (m.length === 9) {
    // prettier-ignore
    return [
      [[m[0][0], m[0][1], m[0][2], m[0][3]], [m[0][4], m[0][5], m[0][6], m[0][7]], m[0][8]],
      [[m[1][0], m[1][1], m[1][2], m[1][3]], [m[1][4], m[1][5], m[1][6], m[1][7]], m[1][8]],
      [[m[2][0], m[2][1], m[2][2], m[2][3]], [m[2][4], m[2][5], m[2][6], m[2][7]], m[2][8]],
      [[m[3][0], m[3][1], m[3][2], m[3][3]], [m[3][4], m[3][5], m[3][6], m[3][7]], m[3][8]],
      [[m[4][0], m[4][1], m[4][2], m[4][3]], [m[4][4], m[4][5], m[4][6], m[4][7]], m[4][8]],
      [[m[5][0], m[5][1], m[5][2], m[5][3]], [m[5][4], m[5][5], m[5][6], m[5][7]], m[5][8]],
      [[m[6][0], m[6][1], m[6][2], m[6][3]], [m[6][4], m[6][5], m[6][6], m[6][7]], m[6][8]],
      [[m[7][0], m[7][1], m[7][2], m[7][3]], [m[7][4], m[7][5], m[7][6], m[7][7]], m[7][8]],
      [[m[8][0], m[8][1], m[8][2], m[8][3]], [m[8][4], m[8][5], m[8][6], m[8][7]], m[8][8]],
    ]
  }
  throw new Error('Unsupported matrix size')
}

export const frustum = ({ left, right, top, bottom, near, far }) => {
  const out = ident(4)
  out[0][0] = (2 * near) / (right - left)
  out[0][2] = (right + left) / (right - left)
  out[1][1] = (2 * near) / (top - bottom)
  out[1][2] = (top + bottom) / (top - bottom)
  out[2][2] = -(far + near) / (far - near)
  out[2][3] = (-2 * near * far) / (far - near)
  out[3][2] = -1
  out[3][3] = 0
  return out
}

export const lookAt = (eye, center, up) => {
  if (
    abs(eye[0] - center[0]) < 0.0001 &&
    abs(eye[1] - center[1]) < 0.0001 &&
    abs(eye[2] - center[2]) < 0.0001
  ) {
    return ident(4)
  }

  let z0 = eye[0] - center[0]
  let z1 = eye[1] - center[1]
  let z2 = eye[2] - center[2]

  let len = 1 / sqrt(z0 * z0 + z1 * z1 + z2 * z2)
  z0 *= len
  z1 *= len
  z2 *= len

  let x0 = up[1] * z2 - up[2] * z1
  let x1 = up[2] * z0 - up[0] * z2
  let x2 = up[0] * z1 - up[1] * z0
  len = sqrt(x0 * x0 + x1 * x1 + x2 * x2)
  if (!len) {
    x0 = 0
    x1 = 0
    x2 = 0
  } else {
    len = 1 / len
    x0 *= len
    x1 *= len
    x2 *= len
  }

  let y0 = z1 * x2 - z2 * x1
  let y1 = z2 * x0 - z0 * x2
  let y2 = z0 * x1 - z1 * x0

  len = sqrt(y0 * y0 + y1 * y1 + y2 * y2)
  if (!len) {
    y0 = 0
    y1 = 0
    y2 = 0
  } else {
    len = 1 / len
    y0 *= len
    y1 *= len
    y2 *= len
  }

  const out = ident(4)

  out[0][0] = x0
  out[1][0] = y0
  out[2][0] = z0
  out[0][1] = x1
  out[1][1] = y1
  out[2][1] = z1
  out[0][2] = x2
  out[1][2] = y2
  out[2][2] = z2
  out[0][3] = -(x0 * eye[0] + x1 * eye[1] + x2 * eye[2])
  out[1][3] = -(y0 * eye[0] + y1 * eye[1] + y2 * eye[2])
  out[2][3] = -(z0 * eye[0] + z1 * eye[1] + z2 * eye[2])

  return out
}

export const subvector = (vector, removed) =>
  vector.filter((_, i) => !removed.includes(i))

export const submatrix = (matrix, removed) =>
  subvector(matrix, removed).map(row => subvector(row, removed))
