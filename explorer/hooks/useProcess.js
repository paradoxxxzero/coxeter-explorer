import { useEffect } from 'react'
import { abs, max } from '../math'
import {
  coxeterToGram,
  getGeometry,
  getSpace,
  normalize,
} from '../math/hypermath'
import { dot, multiplyVector, transpose } from '../math/matrix'
import { mirrorValue } from '../mirrors'
import Shaper from '../workers/shape.worker?worker'

export const useProcess = (runtime, setRuntime) => {
  useEffect(() => {
    setRuntime(runtime => {
      runtime.meshes.reset()
      const gram = coxeterToGram(runtime.coxeter, runtime.stellation)
      // const cartan = multiplyScalar(gram, 2)

      const space = getSpace(gram)

      const { vertices: rootVertices, normals: rootNormals } = getGeometry(
        space,
        runtime.centered
      )
      // Handle no mirrors = fundamental
      const fundamental = runtime.mirrors.every(m => !m)
      const mirrors = fundamental
        ? runtime.mirrors.map(() => 1)
        : runtime.mirrors.map(v => mirrorValue(v))
      const rootVertex = normalize(
        multiplyVector(rootVertices, mirrors),
        space.metric
      )
      space.rootVertex = rootVertex
      space.rootVertices = rootVertices
      space.rootNormals = rootNormals
      space.boundnesses = transpose(rootVertices)
        .map(v => dot(multiplyVector(space.metric, v), v))
        .map(d =>
          abs(d) < 1e-9
            ? 'ideal'
            : space.curvature * d < -1e-9
            ? 'ultraideal'
            : 'inside'
        )
      return {
        ...runtime,
        space,
        error: null,
      }
    })
  }, [
    runtime.dimensions,
    runtime.coxeter,
    runtime.mirrors,
    runtime.stellation,
    runtime.centered,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      const newRuntime = {
        ...runtime,
        iteration: -1,
        paused: false,
        done: false,
      }
      if (runtime.processing || runtime.error) {
        runtime.shaper?.terminate()
        newRuntime.shaper = new Shaper()
      }
      return newRuntime
    })
  }, [
    runtime.crosssection,
    runtime.space,
    runtime.extrarels,
    runtime.reciprocation,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      const newRuntime = {
        ...runtime,
      }
      if (runtime.polytope?.size > runtime.limit) {
        newRuntime.paused = true
      }
      return newRuntime
    })
  }, [runtime.polytope, runtime.limit, setRuntime])

  useEffect(() => {
    setRuntime(runtime => ({
      ...runtime,
      paused: false,
    }))
  }, [runtime.limit, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.iteration === 0) {
        // Was done in -1
        return runtime
      }

      runtime.shaper.postMessage({
        type: runtime.iteration === -1 ? 'first' : 'iteration',
        space: runtime.space,
        dimensions: runtime.dimensions,
        coxeter: runtime.coxeter,
        stellation: runtime.stellation,
        mirrors: runtime.mirrors,
        ambiance: runtime.ambiance,
        draw: {
          vertex: runtime.drawVertex,
          edge: runtime.drawEdge,
          face: runtime.drawFace,
        },
        batch:
          runtime.iteration === -1
            ? max(1, ~~(runtime.batch / 10))
            : runtime.batch,
        hidden: runtime.hidden,
        reciprocation: runtime.reciprocation,
        extrarels: runtime.extrarels,
        section: runtime.crosssection ? runtime.section : null,
      })
      return {
        ...runtime,
        iteration: runtime.iteration === -1 ? 0 : runtime.iteration,
        processing: true,
      }
    })
  }, [
    runtime.crosssection,
    runtime.iteration,
    runtime.limit,
    runtime.extrarels,
    runtime.batch,
    runtime.shaper,
    runtime.space,
    runtime.reciprocation,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.shaper.postMessage({
        type: 'paint',
        ambiance: runtime.ambiance,
        draw: {
          vertex: runtime.drawVertex,
          edge: runtime.drawEdge,
          face: runtime.drawFace,
        },
      })
      return {
        ...runtime,
        processing: true,
      }
    })
  }, [runtime.ambiance, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.shaper.postMessage({
        type: 'section',
        section: runtime.crosssection ? runtime.section : null,
        ambiance: runtime.ambiance,
        draw: {
          vertex: runtime.drawVertex,
          edge: runtime.drawEdge,
          face: runtime.drawFace,
        },
      })
      return {
        ...runtime,
        processing: true,
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.crosssection ? runtime.section : null, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      runtime.shaper.postMessage({
        type: 'display',
        space: runtime.space,
        dimensions: runtime.dimensions,
        coxeter: runtime.coxeter,
        stellation: runtime.stellation,
        mirrors: runtime.mirrors,
        ambiance: runtime.ambiance,
        draw: {
          vertex: runtime.drawVertex,
          edge: runtime.drawEdge,
          face: runtime.drawFace,
        },
        batch:
          runtime.iteration === -1
            ? max(1, ~~(runtime.batch / 10))
            : runtime.batch,
        hidden: runtime.hidden,
        reciprocation: runtime.reciprocation,
        extrarels: runtime.extrarels,
        section: runtime.crosssection ? runtime.section : null,
      })
      return {
        ...runtime,
        processing: true,
      }
    })
  }, [
    runtime.drawVertex,
    runtime.drawEdge,
    runtime.drawFace,
    runtime.hidden,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => ({
      ...runtime,
      iteration: runtime.paused ? runtime.iteration : runtime.iteration + 1,
    }))
  }, [runtime.paused, setRuntime])

  useEffect(() => {
    if (!runtime.shaper) {
      return
    }
    const handleShape = ({ data }) => {
      if (!data.error) {
        setRuntime(runtime => {
          const newRuntime = {
            ...runtime,
            processing: false,
          }

          if (data.polytope) {
            newRuntime.done = data.polytope.done
            newRuntime.polytope = data.polytope
            newRuntime.iteration =
              runtime.paused || data.polytope.done
                ? runtime.iteration
                : runtime.iteration + 1
          }

          if (data.geometry) {
            newRuntime.meshes.fillGeometry(data.geometry)
          }

          if (data.color) {
            newRuntime.meshes.fillColor(data.color)
          }

          return newRuntime
        })
      } else {
        console.error(data.error)
      }
    }
    const handleError = error => {
      console.error(error)
      setRuntime(runtime => ({
        ...runtime,
        error,
        processing: false,
        done: true,
        iteration: 0,
      }))
    }

    runtime.shaper.addEventListener('message', handleShape)
    runtime.shaper.addEventListener('error', handleError)
    return () => {
      runtime.shaper.removeEventListener('message', handleShape)
      runtime.shaper.removeEventListener('error', handleError)
    }
  }, [runtime.shaper, runtime.paused, setRuntime])
}
