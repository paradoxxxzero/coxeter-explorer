export const floatToToken = f => {
  if (f > 1) {
    throw new Error(`Can't token f: ${f} > 1`)
  }

  return ((f + 1) / 4).toFixed(2).replace('0.', '')
}
