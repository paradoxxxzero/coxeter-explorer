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

export const worker = async (w, data) => {
  data.uuid = uuid4()
  console.log('POST', data.C.order)
  processing++
  process(processing)
  w.postMessage(data)

  return new Promise((resolve, reject) => {
    const receive = e => {
      if (e.data.uuid !== data.uuid) {
        return
      }
      console.log('GET', e.data.C.order)
      processing--
      process(processing)

      resolve(e.data)
      w.removeEventListener('message', receive)
    }
    const error = e => {
      if (e.data.uuid !== data.uuid) {
        return
      }
      processing--
      process(processing)

      reject(e)
      w.removeEventListener('error', error)
    }
    w.addEventListener('message', receive)
    w.addEventListener('error', error)
  })
}
