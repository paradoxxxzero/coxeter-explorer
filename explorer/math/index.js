import { range } from '../../utils'
import { isSnub } from '../mirrors'
import { getStellationOppositeAngle } from './hypermath'

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
  atan2,
  min,
  max,
  round,
  sqrt,
  cbrt,
  sign,
  ceil,
  floor,
  log,
  exp,
  hypot,
  pow,
  PI,
} = Math

export const TAU = PI * 2

export const eps = x => (abs(x) < 1e-9 ? 0 : x)

const kBuf = new ArrayBuffer(8)
const kBufAsF64 = new Float64Array(kBuf)
const kBufAsI32 = new Int32Array(kBuf)
function hashNumber(n) {
  if (~~n === n) {
    return ~~n
  }
  kBufAsF64[0] = n
  return kBufAsI32[0] ^ kBufAsI32[1]
}
const precision = 4
const order = 10 ** precision
export const hash = v => {
  let s = ''
  for (let i = 0; i < v.length; i++) {
    s += hashNumber(round(v[i] * order) / order).toString() // toExponential(4)
    if (i < v.length - 1) {
      s += '|'
    }
  }
  return s
}

function* genCombinations(arr, size) {
  if (size < 0 || arr.length < size) {
    return
  }
  const combIndices = Array.from(Array(size).keys())

  while (true) {
    yield combIndices.map(x => arr[x])

    let indexToUpdate = size - 1
    while (
      indexToUpdate >= 0 &&
      combIndices[indexToUpdate] >= arr.length - size + indexToUpdate
    ) {
      indexToUpdate--
    }

    if (indexToUpdate < 0) {
      return
    }

    for (
      let combIndex = combIndices[indexToUpdate] + 1;
      indexToUpdate < size;
      indexToUpdate++, combIndex++
    ) {
      combIndices[indexToUpdate] = combIndex
    }
  }
}

export const combinations = (array, len = 2) =>
  Array.from(genCombinations(array, len))

export const cartesian = (...a) =>
  a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())))

export const genPaths = (a, len) =>
  new Array(a.length ** len)
    .fill(0)
    .map((_, i) => i.toString(a.length).replace(/./g, c => a[c]))

export const itoa = i => String.fromCharCode(97 + i)
export const itor = i => String.fromCharCode(114 + i)
export const atoi = a => a.charCodeAt(0) - 97

export const getParams = (
  dimensions,
  coxeter,
  stellation,
  mirrors,
  space,
  skips = [],
  superTransforms = null
) => {
  let gens = ''

  const subgens = mirrors
    .map((m, i) => (skips.includes(i) || m ? '' : itoa(i)))
    .join('')

  const transforms = {}

  const rels = []

  if (mirrors.filter(m => isSnub(m)).length === 1) {
    // Same group but with the snubbed generator making reverse mirror transform:
    const snubbed = mirrors.findIndex(m => isSnub(m))
    const pair = (snubbed + 1) % dimensions
    for (let i = 0; i < dimensions; i++) {
      if (!skips.includes(i)) {
        const c = itoa(i)
        gens += c
        rels.push(c.repeat(2))
        if (i === snubbed) {
          transforms[c] = [snubbed, pair, snubbed]
        } else {
          transforms[c] = [i]
        }
      }
    }
    for (let i = 0; i < dimensions; i++) {
      for (let j = i + 1; j < dimensions; j++) {
        if (!skips.includes(i) && !skips.includes(j)) {
          let m = coxeter[i][j]
          if (m < 2) {
            continue
          }
          if ((i === snubbed && j === pair) || (i === pair && j === snubbed)) {
            if (m % 2 === 0) {
              rels.push((itoa(i) + itoa(j)).repeat(m / 2))
            } else {
              rels.push((itoa(i) + itoa(j)).repeat(m))
              // rels.push((itoa(i) + itoa(j) + itoa(j + 1) + itoa(j)).repeat(2))
            }
          } else {
            if (j - i > 1) {
              m = coxeter[j - 1][j]
            }
            rels.push((itoa(i) + itoa(j)).repeat(m))
          }
        }
      }
    }
    // } else if (mirrors.filter(m => isSnub(m)).length === 2) {
    //   // a = 01, b = 2
    //   const snubbeds = mirrors
    //     .map((m, i) => (isSnub(m) ? i : null))
    //     .filter(i => i !== null)

    //   for (let i = 0; i < dimensions - 1; i++) {
    //     if (!skips.includes(i)) {
    //       const c = itoa(i)
    //       gens += c
    //       if (i === snubbeds[0]) {
    //         transforms[c] = snubbeds
    //         rels.push(c.repeat(coxeter[snubbeds[0]][snubbeds[1]]))
    //       } else {
    //         rels.push(c.repeat(2))
    //         transforms[c] = [i]
    //       }
    //     }
    //   }

    //   if (skips.length === dimensions - 1) {
    //     const trans = Object.entries(superTransforms).find(
    //       ([k, v]) => v[0] === 0 && !skips.includes(v[1])
    //     )
    //     if (!trans) {
    //       return { gens: null }
    //     }
    //     gens = trans[0]

    //     rels.push(gens.repeat(2))
    //   } else {
    //     for (let i = 1; i < dimensions; i++) {
    //       for (let j = i + 1; j < dimensions; j++) {
    //         if (!skips.includes(i - 1) && !skips.includes(j - 1)) {
    //           let m = coxeter[i][j]
    //           if (i === snubbeds[0] || j === snubbeds[1] || j - i > 1 || m < 2) {
    //             continue
    //           }
    //           if (m % 2 === 0) {
    //             m /= 2
    //           }
    //           rels.push(
    //             (
    //               itoa(i - 1).toUpperCase() +
    //               itoa(j - 1) +
    //               itoa(i - 1) +
    //               itoa(j - 1)
    //             ).repeat(m)
    //           )
    //         }
    //       }
    //     }
    //   }
  } else if (mirrors.some(m => isSnub(m))) {
    // a = 01
    // b = 02
    // c = 12
    // a^p = b^r = c^q = aBc (b = ac)

    if (skips.length === dimensions - 1) {
      const trans = Object.entries(superTransforms).find(
        ([k, v]) => v[0] === 0 && !skips.includes(v[1])
      )
      if (!trans) {
        return { gens: null }
      }
      gens = trans[0]

      rels.push(gens.repeat(2))
    } else {
      let k = 0
      for (let i = 0; i < dimensions; i++) {
        for (let j = i + 1; j < dimensions; j++) {
          const c = itoa(k)
          if (!skips.includes(i) && !skips.includes(j)) {
            gens += c
            rels.push(c.repeat(coxeter[i][j]))
            transforms[c] = [i, j]
            for (let l = 0; l < j; l++) {
              const pair = [i, j]
                .map(x =>
                  Object.entries(transforms).find(
                    ([_, v]) => v[0] === l && v[1] === x
                  )
                )
                .filter(x => x)
              if (pair.length === 2) {
                // We have an inner relation (b = ac)
                rels.push(pair[0][0] + pair[1][0].toUpperCase() + c)
              }
            }
          }
          k++
        }
      }
    }
  } else {
    for (let i = 0; i < dimensions; i++) {
      if (!skips.includes(i)) {
        const c = itoa(i)
        gens += c
        rels.push(c.repeat(2))
        transforms[c] = [i]
      }
    }
    for (let i = 0; i < dimensions; i++) {
      for (let j = i + 1; j < dimensions; j++) {
        if (!skips.includes(i) && !skips.includes(j)) {
          const m = coxeter[i][j]
          if (m > 1) {
            rels.push((itoa(i) + itoa(j)).repeat(m))
          }
        }
      }
    }
  }

  if (
    !stellation.every(row => row.every(x => x === 1)) &&
    space.curvature > 0
  ) {
    // TODO: Improve generalization
    if (
      dimensions === 4 &&
      stellation[0][1] > 1 !== stellation[2][3] > 1 &&
      coxeter[0][1] > 3 &&
      coxeter[2][3] > 3
    ) {
      /// ?????????
      if (![0, 1, 2, 3].some(i => skips.includes(i))) {
        if (stellation[0][1] > 1) {
          rels.push(
            'abcdcb'.repeat(
              getStellationOppositeAngle(
                coxeter[0][1],
                coxeter[1][2],
                coxeter[0][2],
                stellation[0][1]
              )
            )
          )
        }
        if (stellation[2][3] > 1) {
          rels.push(
            'abcdcb'.repeat(
              getStellationOppositeAngle(
                coxeter[2][3],
                coxeter[1][2],
                coxeter[1][3],
                stellation[2][3]
              )
            )
          )
        }
      }
    } else {
      for (let i = 1; i < dimensions; i++) {
        for (let j = 0; j < i; j++) {
          if (stellation[j][i] > 1) {
            if (j + 2 < dimensions) {
              const angle = getStellationOppositeAngle(
                coxeter[j + 1][i + 1],
                coxeter[j][i],
                coxeter[j][i + 1],
                stellation[j][i]
              )
              if (
                angle &&
                !skips.includes(j) &&
                !skips.includes(i) &&
                !skips.includes(j + 2)
              ) {
                rels.push(
                  (itoa(j) + itoa(i) + itoa(j + 2) + itoa(i)).repeat(angle)
                )
              }
            }
            if (j - 1 >= 0) {
              const angle = getStellationOppositeAngle(
                coxeter[j - 1][i - 1],
                coxeter[j][i],
                coxeter[j - 1][i],
                stellation[j][i]
              )
              if (
                angle &&
                !skips.includes(j) &&
                !skips.includes(i) &&
                !skips.includes(j - 1)
              ) {
                rels.push(
                  (itoa(j) + itoa(i) + itoa(j) + itoa(j - 1)).repeat(angle)
                )
              }
            }
          }
        }
      }
    }
  }
  return { gens, subgens, rels, transforms: superTransforms || transforms }
}

export const factorial = n => (n ? n * factorial(n - 1) : 1)
export const binomial = (n, k) =>
  factorial(n) / (factorial(k) * factorial(n - k))
