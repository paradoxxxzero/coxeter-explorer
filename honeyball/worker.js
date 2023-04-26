import Tiling from './tiling.worker?worker'
import Group from './group.worker?worker'
import { max } from './math'

class Worker {
  constructor(name, workerClass) {
    this.workerClass = workerClass
    this.name = name
    this.init()
    this.times = {}
  }

  static uuid4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  init() {
    this.processing = 0
    this.worker = new this.workerClass()
  }

  kill() {
    if (this.processing > 0) {
      console.warn(`Killing worker ${this.name} (${this.processing})`)
      this.worker.terminate()
      this.init()
    }
  }

  process(data) {
    data.uuid = Worker.uuid4()
    this.processing++
    // console.debug('POST', data)
    this.times[data.uuid] = performance.now()
    this.worker.postMessage(data)

    return new Promise((resolve, reject) => {
      const receive = e => {
        if (e.data.uuid !== data.uuid) {
          return
        }
        const time = performance.now() - this.times[data.uuid]
        delete this.times[data.uuid]
        console.debug(`Worker ${this.name} took ${time}ms`)
        // console.debug('RECEIVE', e.data)
        this.processing--
        this.worker.removeEventListener('message', receive)
        this.worker.removeEventListener('error', error)

        if (e.data.error) {
          reject(e.data.error)
          return
        }

        resolve(e.data)
      }
      const error = e => {
        this.worker.removeEventListener('message', receive)
        this.worker.removeEventListener('error', error)
        if (this.processing <= 0) {
          return
        }
        delete this.times[data.uuid]
        this.processing--
        this.processing = max(0, this.processing) // FIXME
        console.error(`Can't call web worker ${this.name}`, e)
      }
      this.worker.addEventListener('message', receive)
      this.worker.addEventListener('error', error)
    })
  }
}

export const tiler = new Worker('tiler', Tiling)
export const grouper = new Worker('grouper', Group)
