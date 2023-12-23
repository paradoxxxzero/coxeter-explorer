import { useEffect, useRef, useState } from 'react'
import {
  coxeterToGram,
  getGeometry,
  getSpace,
  normalize,
} from '../math/hypermath'
import { multiplyVector } from '../math/matrix'
import { getShape } from '../math/shape'
import { mirrorValue } from '../mirrors'
import Shaper from '../workers/shape.worker?worker'

export const useProcess = (runtime, setRuntime) => {
  const [shaper, setShaper] = useState(() => new Shaper())

  useEffect(() => {
    setRuntime(runtime => {
      const gram = coxeterToGram(runtime.coxeter, runtime.stellation)
      // const cartan = multiplyScalar(gram, 2)

      const space = getSpace(gram)

      const { vertices: rootVertices, normals: rootNormals } = getGeometry(
        space,
        runtime.centered
      )
      const rootVertex = normalize(
        multiplyVector(
          rootVertices,
          runtime.mirrors.map(v => mirrorValue(v))
        ),
        space.metric
      )
      space.rootVertex = rootVertex
      space.rootVertices = rootVertices
      space.rootNormals = rootNormals

      const shape = getShape(
        runtime.dimensions,
        runtime.coxeter,
        runtime.stellation,
        runtime.mirrors
      )

      return {
        ...runtime,
        space,
        shape,
        error: null,
      }
    })
  }, [
    runtime.dimensions,
    runtime.coxeter,
    runtime.mirrors,
    runtime.stellation,
    runtime.centered,
    runtime.grouper,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => ({
      ...runtime,
      iteration: 0,
      paused: false,
      limit: 1000,
    }))
  }, [runtime.shape, runtime.ambiance, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      if (!runtime.shape || runtime.iteration < 0) {
        return runtime
      }

      shaper.postMessage({
        space: runtime.space,
        shape: runtime.shape,
        first: runtime.iteration === 0,
      })
      return {
        ...runtime,
        processing: true,
      }
    })
  }, [
    runtime.iteration,
    runtime.limit,
    runtime.shape,
    shaper,
    runtime.space,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => ({
      ...runtime,
      iteration: runtime.paused ? runtime.iteration : runtime.iteration + 1,
    }))

    const handleShape = ({ data }) => {
      if (!data.error) {
        setRuntime(runtime => {
          runtime.meshes.plot(runtime, data.objects)
          return {
            ...runtime,
            processing: !data.visit.done,
            iteration:
              runtime.paused || data.visit.done
                ? runtime.iteration
                : runtime.iteration + 1,
            visit: data.visit,
          }
        })
      } else {
        console.error(data.error)
      }
    }

    shaper.addEventListener('message', handleShape)
    return () => {
      shaper.removeEventListener('message', handleShape)
    }
  }, [shaper, runtime.paused, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      const newRuntime = {
        ...runtime,
      }
      if (runtime.visit.top > runtime.limit) {
        newRuntime.paused = true
      }
      return newRuntime
    })
  }, [runtime.visit, runtime.limit, setRuntime])

  // const handleStop = useCallback(() => {
  //   shaper.terminate()
  //   setProcessing(false)
  //   setShaper(new Shaper())
  //   setIteration(-1)
  // }, [shaper])
}
