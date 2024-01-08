import { useEffect, useRef } from 'react'
import { details } from '../../statics'
import { max } from '../math'

export const useAdaptative = (runtime, setRuntime) => {
  const adaptative = useRef({
    previous: null,
    anteprevious: null,
    start: null,
    stable: false,
  })

  useEffect(() => {
    const rate = 1000 / 60 // Base computations on a 60Hz screen

    if (runtime.adaptative) {
      let raf = null
      let frame = null
      let lasts = []
      const upsampling = 20
      const downsampling = 10
      const loop = now => {
        if (frame === null) {
          if (adaptative.current.start === null) {
            adaptative.current.start = now
          }
          frame = now
          raf = requestAnimationFrame(loop)
          return
        }
        lasts.push(now - frame)
        frame = now
        if (lasts.length > max(upsampling, downsampling)) {
          lasts.shift()
        }
        if (lasts.length >= downsampling) {
          const downavg =
            lasts.slice(-downsampling).reduce((a, b) => a + b, 0) / downsampling
          if (downavg > (adaptative.current.stable ? 2.01 : 1.51) * rate) {
            lasts = []
            adaptative.current.stable = false
            const currentDetail = details.indexOf(runtime.detail)
            if (currentDetail > 1) {
              // console.debug('Lowering details')
              adaptative.current.anteprevious = adaptative.current.previous
              adaptative.current.previous = runtime.detail
              const prevDetail = details[currentDetail - 1]
              setRuntime(runtime => ({ ...runtime, detail: prevDetail }))
            }
          }
        }

        if (lasts.length >= upsampling) {
          const upavg =
            lasts.slice(-upsampling).reduce((a, b) => a + b, 0) / upsampling
          if (upavg < (adaptative.current.stable ? 1.001 : 1.01) * rate) {
            lasts = []
            adaptative.current.stable = false
            const currentDetail = details.indexOf(runtime.detail)
            // Don't go ultra
            if (currentDetail < details.length - 2) {
              // console.debug('Increasing details')
              const nextDetail = details[currentDetail + 1]
              if (
                nextDetail === adaptative.current.previous &&
                runtime.detail === adaptative.current.anteprevious &&
                now - adaptative.current.start > 1000
              ) {
                // console.debug('Stabilized, not increasing details')
                adaptative.current.stable = true
              } else {
                adaptative.current.anteprevious = adaptative.current.previous
                adaptative.current.previous = runtime.detail
                setRuntime(runtime => ({ ...runtime, detail: nextDetail }))
              }
            }
          }
        }
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
      return () => cancelAnimationFrame(raf)
    }
  }, [
    runtime.detail,
    runtime.adaptative,
    runtime.ambiance,
    runtime.space,
    setRuntime,
  ])

  useEffect(() => {
    adaptative.current = {
      previous: null,
      anteprevious: null,
      stable: false,
      start: null,
    }
  }, [runtime.space, runtime.shaper, runtime.ambiance])
}
