export const {
  abs,
  cos,
  sin,
  cosh,
  sinh,
  acos,
  acosh,
  tan,
  min,
  max,
  round,
  sqrt,
  sign,
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

export const getRels = (dimensions, coxeter, stellation, mirrors) => {
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

export const getBaseRules = (dimensions, coxeter, stellation, mirrors) =>
  Object.fromEntries(
    getRels(dimensions, coxeter, stellation, mirrors).map(r => [r, ''])
  )
