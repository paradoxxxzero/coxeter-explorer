import { useEffect } from 'react'
import {
  coxeterToGram,
  getGeometry,
  getSpace,
  normalize,
} from '../math/hypermath'
import { dot, multiplyVector, transpose } from '../math/matrix'
import { mirrorValue } from '../mirrors'
import Shaper from '../workers/shape.worker?worker'
import { abs } from '../math'

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
      const easing =
        // If one and only one mirror's correpsonding vertex is ideal, use quintic
        mirrors.filter((m, i) => m && space.boundnesses[i] === 'ideal')
          .length === 1 ||
        // For fundamental polytopes, if one vertex is ideal, use quintic
        (fundamental && space.boundnesses.some(t => t === 'ideal'))
          ? 'quintic'
          : 'linear'

      return {
        ...runtime,
        space,
        easing,
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
      }
      if (runtime.processing) {
        runtime.shaper?.terminate()
        newRuntime.shaper = new Shaper()
      }
      return newRuntime
    })
  }, [
    runtime.space,
    runtime.ambiance,
    runtime.drawVertex,
    runtime.drawEdge,
    runtime.drawFace,
    runtime.hidden,
    runtime.reciprocation,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      const newRuntime = {
        ...runtime,
      }
      if (runtime.polytope.size > runtime.limit) {
        newRuntime.paused = true
      }
      return newRuntime
    })
  }, [runtime.polytope.size, runtime.limit, setRuntime])

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
        first: runtime.iteration === -1,
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
        batch: runtime.iteration === -1 ? 100 : runtime.batch,
        hidden: runtime.hidden,
        reciprocation: runtime.reciprocation,
      })
      return {
        ...runtime,
        iteration: runtime.iteration === -1 ? 0 : runtime.iteration,
        processing: true,
      }
    })
  }, [
    runtime.iteration,
    runtime.limit,
    runtime.ambiance,
    runtime.drawVertex,
    runtime.drawEdge,
    runtime.drawFace,
    runtime.batch,
    runtime.shaper,
    runtime.space,
    runtime.hidden,
    runtime.reciprocation,
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
          runtime.meshes.fillData(data)
          return {
            ...runtime,
            processing: !data.polytope.done,
            iteration:
              runtime.paused || data.polytope.done
                ? runtime.iteration
                : runtime.iteration + 1,
            polytope: data.polytope,
          }
        })
      } else {
        console.error(data.error)
      }
    }

    runtime.shaper.addEventListener('message', handleShape)
    return () => {
      runtime.shaper.removeEventListener('message', handleShape)
    }
  }, [runtime.shaper, runtime.paused, setRuntime])
}
