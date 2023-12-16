export const MAX_UINT_32 = 0xffffffff

export const debounce = (fn, delay) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)

    return () => clearTimeout(timeout)
  }
}

export const range = (start, end = null, step = 1, emptyIfReversed = false) => {
  if (end === null) {
    end = start
    start = 0
  }
  if (step === 0) {
    throw new Error('Step cannot be zero.')
  }
  if ((end < start && step > 0) || (end > start && step < 0)) {
    if (emptyIfReversed) {
      return []
    }
    step = -step
  }

  return new Array(Math.ceil((end - start) / step)).fill().map((_, i) => {
    return start + i * step
  })
}

export const arrayEquals = (a, b) => {
  if (a.length !== b.length) return false
  return a.every((v, i) =>
    Array.isArray(v) ? arrayEquals(v, b[i]) : v === b[i]
  )
}
