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

const findPaths = (rotations, word = '', chain = []) => {
  const paths = []
  for (let i = 0; i < rotations.length; i++) {
    const [key, rotation] = rotations[i]
    const otherRotations = rotations.filter((_, j) => j !== i)
    if (chain.length) {
      const last = chain[chain.length - 1]

      if (rotation.some(r => r === last)) {
        const reverse = rotation[1] === last
        const char = reverse ? key.toUpperCase() : key
        const rot = reverse ? [...rotation].reverse() : rotation
        if (rot[1] === chain[0]) {
          return [word + char]
        }
        if (otherRotations.length) {
          paths.push(
            ...findPaths(
              otherRotations,
              word + char,
              chain.concat(rot.slice(1))
            )
          )
        }
      }
    } else {
      paths.push(...findPaths(otherRotations, key, rotation))
    }
  }
  return paths
}

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

  for (let i = 0; i < dimensions; i++) {
    if (skips.includes(i)) {
      continue
    }

    if (!isSnub(mirrors[i])) {
      const c = itoa(i)
      gens += c
      // Case of not snub => Normal reflection
      transforms[c] = [i]
      rels.push(c.repeat(2))
    }

    for (let j = i + 1; j < dimensions; j++) {
      if (skips.includes(j)) {
        continue
      }
      const m = coxeter[i][j]

      if (isSnub(mirrors[i]) && isSnub(mirrors[j])) {
        // Case of snub + snub => rotation
        const c = itoa((i + 1) * dimensions + j)
        gens += c
        transforms[c] = [i, j]
        rels.push(c.repeat(m))
      } else if (isSnub(mirrors[i]) && !isSnub(mirrors[j])) {
        // Case of snub + not snub => conjugate reflection
        const c = itoa((i + 1) * dimensions + j)
        gens += c
        transforms[c] = [i, j, i]
        rels.push(c.repeat(2))
        rels.push((c + itoa(j)).repeat(m % 2 === 0 ? m / 2 : m))
      } else if (!isSnub(mirrors[i]) && isSnub(mirrors[j])) {
        // Case of snub + not snub => conjugate reflection
        const c = itoa((i + 1) * dimensions + j)
        gens += c
        transforms[c] = [j, i, j]
        rels.push(c.repeat(2))
        rels.push((c + itoa(i)).repeat(m % 2 === 0 ? m / 2 : m))
      } else if (m > 1) {
        // Case of not snub + not snub
        rels.push((itoa(i) + itoa(j)).repeat(m))
      }
    }
  }
  const conjugaisons = Object.entries(transforms).filter(
    ([k, v]) => v.length === 3
  )
  const rotations = Object.entries(transforms).filter(
    ([k, v]) => v.length === 2
  )
  if (rotations.length > 1) {
    // Find closed path in rotations
    const paths = findPaths(rotations)
    // Paths should be reversed for some reason
    rels.push(...paths.map(p => p.split('').reverse().join('')))
  }
  if (conjugaisons.length > 1) {
    // Find relationsn between conjugate reflections
    for (let i = 0; i < conjugaisons.length; i++) {
      const [gen1, conjugate1] = conjugaisons[i]
      for (let j = i + 1; j < conjugaisons.length; j++) {
        const [gen2, conjugate2] = conjugaisons[j]
        if (conjugate1[1] === conjugate2[1]) {
          const conjugatesRotation = rotations.find(
            ([_, rotation]) =>
              rotation[0] === conjugate1[0] && rotation[1] === conjugate2[0]
          )
          if (conjugatesRotation) {
            const genRotation = conjugatesRotation[0]
            rels.push(
              gen1.toUpperCase() +
                genRotation.toUpperCase() +
                gen2 +
                genRotation
            )
          }
        }
      }
    }
  }

  if (
    !mirrors.some(m => isSnub(m)) &&
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
