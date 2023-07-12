import { useEffect, useRef } from 'react'
import {
  coxeterToGram,
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
  getSpaceType,
} from '../math/hypermath'
import { killRunningWorkers, workers } from '../workers/worker'

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
          vertices: [],
          edges: [],
          faces: [],
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
            vertices: [
              runtime.vertices.length,
              runtime.vertices.length + vertices.length,
            ],
            edges: [runtime.edges.length, runtime.edges.length + edges.length],
            faces: [runtime.faces.length, runtime.faces.length + faces.length],
          },
        ],
        vertices: runtime.vertices.concat(vertices),
        edges: runtime.edges.concat(edges),
        faces: runtime.faces.concat(faces),
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
      const curvature =
        spaceType === 'finite' ? 1 : spaceType === 'affine' ? 0 : -1

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
        vertices: [],
        edges: [],
        faces: [],
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

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.vertices.length > runtime.maxVertices) {
        return {
          ...runtime,
          maxVertices: runtime.vertices.length,
        }
      }
      return runtime
    })
  }, [runtime.vertices, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.edges.length > runtime.maxEdges) {
        return {
          ...runtime,
          maxEdges: runtime.edges.length,
        }
      }
      return runtime
    })
  }, [runtime.edges, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.easing === 'auto') {
        return {
          ...runtime,
          easing: runtime.spaceType.startsWith('hyperbolic')
            ? 'quintic'
            : 'linear',
        }
      }
      return runtime
    })
  }, [runtime.easing, runtime.spaceType, setRuntime])

  useEffect(() => {
    setRuntime(runtime => {
      let faces = 0
      for (let i = 0; i < runtime.faces.length; i++) {
        const vertices = runtime.faces[i].vertices.length
        faces += vertices === 3 ? 1 : vertices
      }
      if (faces > runtime.maxFaces) {
        return {
          ...runtime,
          maxFaces: faces,
        }
      }
      return runtime
    })
  }, [runtime.faces, setRuntime])
}
