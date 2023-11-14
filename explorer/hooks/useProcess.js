import { useEffect, useRef } from 'react'
import {
  coxeterToGram,
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
  getSpaceType,
} from '../math/hypermath'
import { killRunningWorkers, workers } from '../workers/worker'
import { ident } from '../math/matrix'

const asyncProcess = async (runtime, running, setRuntime) => {
  // Rules gets computed on non stellated coxeter group
  const worker = workers[runtime.grouper.replace(/^auto-/, '')]
  if (runtime.currentOrder === 0) {
    killRunningWorkers()
    running.current = false
  }
  if (running.current === runtime.currentOrder) {
    console.log('already processing at ', runtime.currentOrder)
    return
  }
  try {
    running.current = runtime.currentOrder
    const { vertices, edges, faces, order } = await worker.process({
      order: runtime.currentOrder,
      coxeter: runtime.coxeter,
      curvature: runtime.curvature,
      stellation: runtime.stellation,
      mirrors: runtime.mirrors,
      mirrorsPlanes: runtime.mirrorsPlanes,
      rootVertex: runtime.rootVertex,
      dimensions: runtime.dimensions,
    })
    running.current = false
    setRuntime(runtime => {
      if (runtime.currentOrder !== order) {
        console.warn('Mismatched order, ignoring', runtime.currentOrder, order)
        return {
          ...runtime,
          currentOrder: 0,
          vertex: [],
          edge: [],
          face: [],
          ranges: [],
          renderError: null,
          processing: true,
          error: 'Mismatch Order',
        }
      }
      return {
        ...runtime,
        ranges: [
          ...runtime.ranges,
          {
            vertex: [
              runtime.vertex.length,
              runtime.vertex.length + vertices.length,
            ],
            edge: [runtime.edge.length, runtime.edge.length + edges.length],
            face: [runtime.face.length, runtime.face.length + faces.length],
          },
        ],
        vertex: runtime.vertex.concat(vertices),
        edge: runtime.edge.concat(edges),
        face: runtime.face.concat(faces),
        currentOrder: order + 1,
        processing: false,
        error: null,
      }
    })
  } catch (e) {
    // Change current order to allow user to retry
    running.current = false
    console.error(e)
    const newRuntime = {
      ...runtime,

      currentOrder: runtime.order,
      error: e.message,
      processing: false,
    }
    setRuntime(newRuntime)
  }
}

export const useProcess = (runtime, setRuntime) => {
  const running = useRef(false)

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.order < runtime.currentOrder) {
        return {
          ...runtime,
          currentOrder: runtime.order,
        }
      }
      return runtime
    })
  }, [runtime.order, runtime.currentOrder, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      const gram = coxeterToGram(runtime.coxeter, runtime.stellation)
      const spaceType = getSpaceType(gram)
      if (!spaceType) {
        return {
          ...runtime,
          spaceType,
        }
      }
      const curvature = spaceType.curvature

      const grouper =
        runtime.grouper === '' || runtime.grouper.startsWith('auto-')
          ? 'auto-toddcoxeter'
          : // curvature
            //   !runtime.stellation.some(row => row.some(x => x > 1))
            //   ? 'auto-toddcoxeter'
            //   : 'auto-knuthbendix'
            runtime.grouper

      const mirrorsPlanes = getFundamentalSimplexMirrors(
        gram,
        curvature,
        runtime.centered === null
          ? (grouper.replace(/^auto-/, '') === 'toddcoxeter' &&
              curvature <= 0) ||
              gram.some(row => row.some(x => x === -1))
          : runtime.centered
      )
      const rootVertex = getFundamentalVertex(
        runtime.mirrors,
        mirrorsPlanes,
        curvature
      )
      const newRuntime = {
        ...runtime,
        currentOrder: 0,
        grouper,
        vertex: [],
        edge: [],
        face: [],
        ranges: [],
        spaceType,
        curvature,
        mirrorsPlanes,
        rootVertex,
        renderError: null,
        processing: true,
        error: null,
      }
      asyncProcess(newRuntime, running, setRuntime)
      return newRuntime
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
      matrix: ident(runtime.dimensions),
    }))
  }, [runtime.curvature, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.order <= runtime.currentOrder) {
        return runtime
      }
      if (runtime.ranges?.[runtime.order]) {
        return {
          ...runtime,
          currentOrder: runtime.order,
          askedOrder: null,
        }
      }
      asyncProcess(runtime, running, setRuntime)
      return {
        ...runtime,
        error: null,
        processing: true,
      }
    })

    // Can't have ranges here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRuntime, runtime.order, runtime.currentOrder])
}
