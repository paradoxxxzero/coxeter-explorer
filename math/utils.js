import { round, abs } from './index.js'

const tokenPrecision = 1
const tokenSize = 10 ** tokenPrecision
const tokenEpsilon = 10 ** -tokenPrecision

export const floatToToken = f => {
  return String(
    (f >= -tokenEpsilon ? '_' : '-') + ~~round(tokenSize * abs(f))
  ).padStart(tokenPrecision, '0')
}
