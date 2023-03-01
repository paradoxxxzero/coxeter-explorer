export const { abs, cos, sin, min, max, round, sqrt, PI } = Math

export const combinations = array =>
  [].concat(...array.map((v, i) => array.slice(i + 1).map(w => [v, w])))
