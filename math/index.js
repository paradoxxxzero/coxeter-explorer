export const {
  abs,
  cos,
  sin,
  cosh,
  sinh,
  acos,
  min,
  max,
  round,
  sqrt,
  floor,
  PI,
} = Math

export const combinations = array =>
  [].concat(...array.map((v, i) => array.slice(i + 1).map(w => [v, w])))

export const cartesian = (...a) =>
  a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())))
