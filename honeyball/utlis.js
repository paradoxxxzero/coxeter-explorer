export const range = (start, end) => {
  start = start || 0
  if (!end) {
    end = start
    start = 0
  }
  return new Array(end - start).fill().map((_, i) => i + start)
}
