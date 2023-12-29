import { useEffect } from 'react'
import {
  coxeterToGram,
  getGeometry,
  getSpace,
  normalize,
} from '../math/hypermath'
import { multiplyVector } from '../math/matrix'
import { mirrorValue } from '../mirrors'
import Shaper from '../workers/shape.worker?worker'

export const useProcess = (runtime, setRuntime) => {
  useEffect(() => {
    setRuntime(runtime => {
      const gram = coxeterToGram(runtime.coxeter, runtime.stellation)
      // const cartan = multiplyScalar(gram, 2)

      const space = getSpace(gram)

      const { vertices: rootVertices, normals: rootNormals } = getGeometry(
        space,
        runtime.centered
      )
      // Handle no mirrors = fundamental
      const mirrors = runtime.mirrors.every(m => !m)
        ? runtime.mirrors.map(() => 1)
        : runtime.mirrors.map(v => mirrorValue(v))
      const rootVertex = normalize(
        multiplyVector(rootVertices, mirrors),
        space.metric
      )
      space.rootVertex = rootVertex
      space.rootVertices = rootVertices
      space.rootNormals = rootNormals

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
      if (!runtime.iteration < 0) {
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
        batch: runtime.batch,
        hidden: runtime.hidden,
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
    runtime.shaper,
    runtime.space,
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
          for (let i = 0; i < data.infos.length; i++) {
            const mesh = runtime.meshes[runtime.meshes.meshes[i]]
            const info = data.infos[i]
            if (!info) {
              mesh.count = 0
              continue
            }

            mesh.count = info.start + info.size
            if (mesh.instances < mesh.count) {
              mesh.extendAttributes(mesh.count)
            }

            mesh.attributes.color.update(data.data[i][0], info.start, info.size)

            for (let j = 0; j < mesh.varying.length; j++) {
              const attr = mesh.varying[j]
              mesh.attributes[attr].update(
                data.data[i][j + 1],
                info.start,
                info.size
              )
            }
          }

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
