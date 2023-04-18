import { max } from './math'

let processing = 0

const uuid4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const kill = w => {
  w.terminate()
  processing = 0
}

export const worker = async (w, data) => {
  data.uuid = uuid4()
  processing++
  w.postMessage(data)

  return new Promise((resolve, reject) => {
    const receive = e => {
      if (e.data.uuid !== data.uuid) {
        return
      }
      processing--
      w.removeEventListener('message', receive)
      w.removeEventListener('error', error)

      if (e.data.error) {
        reject(e.data.error)
        return
      }

      resolve(e.data)
    }
    const error = e => {
      w.removeEventListener('message', receive)
      w.removeEventListener('error', error)
      if (processing <= 0) {
        return
      }
      processing--
      processing = max(0, processing) // FIXME
      console.error("Can't call web worker", e)
    }
    w.addEventListener('message', receive)
    w.addEventListener('error', error)
  })
}

export const range = (start, end) => {
  if (!end) {
    end = start
    start = 0
  }
  return new Array(end - start).fill().map((_, i) => i + start)
}
