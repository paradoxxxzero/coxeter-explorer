import { PI, abs, atan, cos, sign, sin } from '.'

const ident = dimensions =>
  new Array(dimensions)
    .fill()
    .map((_, i) =>
      new Array(dimensions).fill().map((_, j) => (i === j ? 1 : 0))
    )

const transpose = m => m.map((row, i) => row.map((_, j) => m[j][i]))

const multiply = (m1, m2) =>
  m1.map((row, i) =>
    row.map((_, j) => row.reduce((acc, _, k) => acc + m1[i][k] * m2[k][j], 0))
  )
const diagonal = m =>
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
