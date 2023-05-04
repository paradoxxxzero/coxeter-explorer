import { useEffect } from 'react'
import {
  coxeterToGram,
  getCurvature,
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
} from '../math/hypermath'
import { killRunningWorkers, workers } from '../workers/worker'

const asyncProcess = async (runtime, setRuntime) => {
  // Rules gets computed on non stellated coxeter group
  const worker = workers[runtime.grouper.replace(/^auto-/, '')]
  setRuntime(runtime => ({
    ...runtime,
    processing: true,
    error: null,
  }))

  if (runtime.currentOrder === 0) {
    killRunningWorkers()
  }

  try {
    const { vertices, edges, faces } = await worker.process({
      order: runtime.currentOrder,
      coxeter: runtime.coxeter,
      curvature: runtime.curvature,
      stellated: runtime.stellated,
      stellation: runtime.stellation,
      mirrors: runtime.mirrors,
      mirrorsPlanes: runtime.mirrorsPlanes,
      rootVertex: runtime.rootVertex,
      dimensions: runtime.dimensions,
    })
    setRuntime(runtime => {
      if (!runtime.processing) {
        return runtime
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
        currentOrder: runtime.currentOrder + 1,
        processing: false,
        error: null,
      }
    })
  } catch (e) {
    // Change current order to allow user to retry
    console.warn(e)
    setRuntime(runtime => ({
      ...runtime,
      currentOrder: runtime.order,
      error: e.message,
      processing: false,
    }))
  }
}

export const useProcess = (runtime, setRuntime) => {
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
      const gram = coxeterToGram(
        runtime.coxeter,
        runtime.stellated ? runtime.stellation : null
      )
      const curvature = getCurvature(gram)
      const mirrorsPlanes = getFundamentalSimplexMirrors(gram, curvature)
      const rootVertex = getFundamentalVertex(
        runtime.mirrors,
        mirrorsPlanes,
        curvature
      )
      const grouper =
        runtime.grouper === '' || runtime.grouper.startsWith('auto-')
          ? curvature > 0 &&
            !runtime.stellated &&
            runtime.mirrors.every(m => !isNaN(m))
            ? 'auto-toddcoxeter'
            : 'auto-knuthbendix'
          : runtime.grouper
      return {
        ...runtime,
        currentOrder: 0,
        grouper,
        vertices: [],
        edges: [],
        faces: [],
        ranges: [],
        curvature,
        mirrorsPlanes,
        rootVertex,
        renderError: null,
      }
    })
  }, [
    runtime.dimensions,
    runtime.coxeter,
    runtime.mirrors,
    runtime.stellated,
    runtime.stellation,
    runtime.grouper,
    setRuntime,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.order <= runtime.currentOrder) {
        return runtime
      }
      if (!runtime.rootVertex || !runtime.grouper) {
        return runtime
      }
      if (runtime.ranges?.[runtime.order]) {
        return {
          ...runtime,
          currentOrder: runtime.order,
        }
      }
      asyncProcess(runtime, setRuntime)
      return runtime
    })

    // Can't have ranges here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    setRuntime,
    runtime.order,
    runtime.grouper,
    runtime.currentOrder,
    runtime.curvature,
    runtime.mirrorsPlanes,
    runtime.rootVertex,
  ])

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
      // TODO: Count faces instances
      if (runtime.faces.length > runtime.maxFaces) {
        return {
          ...runtime,
          maxFaces: runtime.faces.length,
        }
      }
      return runtime
    })
  }, [runtime.faces, setRuntime])
}
