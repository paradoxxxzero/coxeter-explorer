import { max } from './math'
import Tiling from './tiling.worker?worker'

let processing = 0
let tiling = new Tiling()

const uuid4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const kill = () => {
  if (processing > 0) {
    console.warn(`Killing worker (${processing})`)
    // tiling.addEventListener(
    //   'error',
    //   e => {
    //     e.stopImmediatePropagation()
    //   },
    //   { once: true }
    // )
    tiling.terminate()
    processing = 0
    tiling = new Tiling()
  }
}

export const process = data => {
  data.uuid = uuid4()
  processing++
  // console.debug('POST', data)
  tiling.postMessage(data)

  return new Promise((resolve, reject) => {
    const receive = e => {
      if (e.data.uuid !== data.uuid) {
        return
      }
      // console.debug('RECEIVE', e.data)
      processing--
      tiling.removeEventListener('message', receive)
      tiling.removeEventListener('error', error)

      if (e.data.error) {
        reject(e.data.error)
        return
      }

      resolve(e.data)
    }
    const error = e => {
      tiling.removeEventListener('message', receive)
      tiling.removeEventListener('error', error)
      if (processing <= 0) {
        return
      }
      processing--
      processing = max(0, processing) // FIXME
      console.error("Can't call web worker", e)
    }
    tiling.addEventListener('message', receive)
    tiling.addEventListener('error', error)
  })
}

export const range = (start, end) => {
  start = start || 0
  if (!end) {
    end = start
    start = 0
  }
  return new Array(end - start).fill().map((_, i) => i + start)
}
