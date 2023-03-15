import { max } from './math'

let processing = 0
let process = () => {}

const uuid4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const setProcess = f => {
  process = f
}

export const kill = w => {
  w.terminate()
  processing = 0
  process(processing)
}

export const worker = async (w, data) => {
  data.uuid = uuid4()
  processing++
  process(processing)
  w.postMessage(data)

  return new Promise((resolve, reject) => {
    const receive = e => {
      if (e.data.uuid !== data.uuid) {
        return
      }
      w.removeEventListener('message', receive)
      processing--
      process(processing)

      resolve(e.data)
    }
    const error = e => {
      if (!e.uuid) {
        w.removeEventListener('error', error)
        processing--
        processing = max(0, processing) // FIXME
        process(processing, true)
        console.error("Can't call web worker", e)
        return
      }
      if (e.uuid !== data.uuid) {
        return
      }
      w.removeEventListener('error', error)
      processing--
      process(processing, true)

      reject(e)
    }
    w.addEventListener('message', receive)
    w.addEventListener('error', error)
  })
}
