import { useEffect, useState } from 'react'
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
    setRuntime(runtime => {
      const newRuntime = {
        ...runtime,
        iteration: 0,
        paused: false,
        limit: 1000,
      }
      if (runtime.processing) {
        runtime.shaper?.terminate()
        newRuntime.shaper = new Shaper()
      }
      return newRuntime
    })
  }, [
    runtime.shape,
    runtime.ambiance,
    runtime.drawVertex,
    runtime.drawEdge,
    runtime.drawFace,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      if (!runtime.shape || runtime.iteration < 0) {
        return runtime
      }

      runtime.shaper.postMessage({
        space: runtime.space,
        shape: runtime.shape,
        first: runtime.iteration === 0,
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
  }, [
    runtime.iteration,
    runtime.limit,
    runtime.shape,
    runtime.ambiance,
    runtime.drawVertex,
    runtime.drawEdge,
    runtime.drawFace,
    runtime.shaper,
    runtime.space,
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

    runtime.shaper.addEventListener('message', handleShape)
    return () => {
      runtime.shaper.removeEventListener('message', handleShape)
    }
  }, [runtime.shaper, runtime.paused, setRuntime])

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
}
