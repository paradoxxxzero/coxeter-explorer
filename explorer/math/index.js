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

export const avg = (...args) => args.reduce((a, b) => a + b, 0) / args.length

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
export const invertCase = c => {
  const C = c.toUpperCase()
  return c === C ? c.toLowerCase() : C
}

export const factorial = n => (n ? n * factorial(n - 1) : 1)
export const binomial = (n, k) =>
  factorial(n) / (factorial(k) * factorial(n - k))
