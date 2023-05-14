import { getStellationSphericalOppositeAngle } from './hypermath'

export const {
  abs,
  cos,
  sin,
  tan,
  cosh,
  sinh,
  acos,
  acosh,
  atan,
  min,
  max,
  round,
  sqrt,
  sign,
  ceil,
  floor,
  log,
  exp,
  PI,
} = Math

export const combinations = array =>
  [].concat(...array.map((v, i) => array.slice(i + 1).map(w => [v, w])))

export const cartesian = (...a) =>
  a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())))

export const genPaths = (a, len) =>
  new Array(a.length ** len)
    .fill(0)
    .map((_, i) => i.toString(a.length).replace(/./g, c => a[c]))

export const itoa = i => String.fromCharCode(97 + i)
export const atoi = a => a.charCodeAt(0) - 97

export const getRels = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  curvature
) => {
  const rules = []

  for (let i = 0; i < dimensions; i++) {
    rules.push(itoa(i).repeat(2))
  }
  for (let i = 1; i < dimensions; i++) {
    for (let j = 0; j < i; j++) {
      const m = coxeter[i][j]
      if (m < Infinity) {
        rules.push((itoa(j) + itoa(i)).repeat(coxeter[i][j]))
      }
    }
  }
  if (stellation && !stellation.every(row => row.every(x => x === 1))) {
    // TODO: Improve generalization

    if (curvature > 0) {
      if (
        dimensions === 4 &&
        (stellation[0][1] > 1 || stellation[2][3] > 1) &&
        coxeter[0][1] > 3 &&
        coxeter[2][3] > 3
      ) {
        /// ?????????
        if (stellation[0][1] > 1) {
          rules.push(
            'abcdcb'.repeat(
              getStellationSphericalOppositeAngle(
                coxeter[0][1],
                coxeter[1][2],
                coxeter[0][2],
                stellation[0][1]
              )
            )
          )
        }
        if (stellation[2][3] > 1) {
          rules.push(
            'abcdcb'.repeat(
              getStellationSphericalOppositeAngle(
                coxeter[2][3],
                coxeter[1][2],
                coxeter[1][3],
                stellation[2][3]
              )
            )
          )
        }
      } else {
        for (let i = 1; i < dimensions; i++) {
          for (let j = 0; j < i; j++) {
            if (stellation[j][i] > 1) {
              if (j + 2 < dimensions) {
                const angle = getStellationSphericalOppositeAngle(
                  coxeter[j][i],
                  coxeter[j + 1][i + 1],
                  coxeter[j][i + 1],
                  stellation[j][i]
                )
                rules.push(
                  (itoa(j) + itoa(i) + itoa(j + 2) + itoa(i)).repeat(angle)
                )
              }
              if (j - 1 >= 0) {
                const angle = getStellationSphericalOppositeAngle(
                  coxeter[j][i],
                  coxeter[j - 1][i - 1],
                  coxeter[j - 1][i],
                  stellation[j][i]
                )
                rules.push(
                  (itoa(j) + itoa(i) + itoa(j) + itoa(j - 1)).repeat(angle)
                )
              }
            }
          }
        }
      }
    }
  }
  return rules
}

export const getBaseRules = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  curvature
) =>
  Object.fromEntries(
    getRels(
      dimensions,
      coxeter,
      /*stellation, mirrors*/
      null,
      null,
      curvature
    ).map(r => [r, ''])
  )
