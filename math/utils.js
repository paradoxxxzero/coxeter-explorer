export const floatToToken = f => {
  // if (f > 1) {
  //   throw new Error(`Can't token f: ${f} > 1`)
  // }

  // return ((f + 1) / 2).toFixed(3).replace('0.', '')
  return f.toExponential(4)
}
