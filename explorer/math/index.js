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
export const atoi = a => a.charCodeAt(0) - 97

export const getRels = (dimensions, coxeter, stellation, skips = []) => {
  const rules = []

  for (let i = 0; i < dimensions; i++) {
    if (!skips.includes(i)) {
      rules.push(itoa(i).repeat(2))
    }
  }
  for (let i = 1; i < dimensions; i++) {
    for (let j = 0; j < i; j++) {
      if (!skips.includes(i) && !skips.includes(j)) {
        const m = coxeter[i][j]
        if (m > 1) {
          rules.push((itoa(j) + itoa(i)).repeat(coxeter[i][j]))
        }
      }
    }
  }
  if (
    !skips.length && // TODO: Fix skips
    stellation &&
    !stellation.every(row => row.every(x => x === 1))
  ) {
    // TODO: Improve generalization
    if (
      dimensions === 4 &&
      stellation[0][1] > 1 !== stellation[2][3] > 1 &&
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
                coxeter[j + 1][i + 1],
                coxeter[j][i],
                coxeter[j][i + 1],
                stellation[j][i]
              )
              rules.push(
                (itoa(j) + itoa(i) + itoa(j + 2) + itoa(i)).repeat(angle)
              )
            }
            if (j - 1 >= 0) {
              const angle = getStellationSphericalOppositeAngle(
                coxeter[j - 1][i - 1],
                coxeter[j][i],
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
  return rules
}

export const getBaseRules = (dimensions, coxeter, stellation, mirrors) =>
  Object.fromEntries(
    getRels(
      dimensions,
      coxeter,
      /*stellation,*/
      null
    ).map(r => [r, ''])
  )

export const factorial = n => (n ? n * factorial(n - 1) : 1)
export const binomial = (n, k) =>
  factorial(n) / (factorial(k) * factorial(n - k))
