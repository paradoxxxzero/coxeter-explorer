export const {
  abs,
  cos,
  sin,
  cosh,
  sinh,
  acos,
  acosh,
  min,
  max,
  round,
  sqrt,
  sign,
  floor,
  log,
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
