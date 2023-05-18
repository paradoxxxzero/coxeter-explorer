import { useEffect } from 'react'
import {
  coxeterToGram,
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
  getSpaceType,
} from '../math/hypermath'
import { killRunningWorkers, workers } from '../workers/worker'
import { ident } from '../math/matrix'

const asyncProcess = async (runtime, setRuntime) => {
  // Rules gets computed on non stellated coxeter group
  const worker = workers[runtime.grouper.replace(/^auto-/, '')]
  setRuntime(runtime => ({
    ...runtime,
    currentOrder: -1,
    processing: true,
    error: null,
  }))

  if (runtime.askedOrder === 0) {
    killRunningWorkers()
  }

  try {
    const { vertices, edges, faces } = await worker.process({
      order: runtime.askedOrder,
      coxeter: runtime.coxeter,
      curvature: runtime.curvature,
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
      const nt = {
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
        currentOrder: runtime.askedOrder + 1,
        processing: false,
        error: null,
      }
      return nt
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
      const mirrorsPlanes = getFundamentalSimplexMirrors(gram, curvature)
      const rootVertex = getFundamentalVertex(
        runtime.mirrors,
        mirrorsPlanes,
        curvature
      )
      const grouper =
        runtime.grouper === '' || runtime.grouper.startsWith('auto-')
          ? curvature > 0 &&
            !runtime.stellation.some(row => row.some(x => x > 1))
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
        spaceType,
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
    runtime.stellation,
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
        return {
          ...runtime,
          askedOrder: null,
        }
      }
      if (runtime.currentOrder < 0) {
        return runtime
      }
      if (runtime.ranges?.[runtime.order]) {
        return {
          ...runtime,
          currentOrder: runtime.order,
          askedOrder: null,
        }
      }
      return {
        ...runtime,
        askedOrder: runtime.currentOrder,
      }
    })

    // Can't have ranges here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRuntime, runtime.order, runtime.currentOrder])

  useEffect(() => {
    if (runtime.askedOrder !== null) {
      asyncProcess(runtime, setRuntime)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.askedOrder, setRuntime])

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
      let faces = 0
      for (let i = 0; i < runtime.faces.length; i++) {
        const vertices = runtime.faces[i].vertices.length
        faces += vertices === 3 ? 1 : vertices
      }
      // TODO: Count faces instances
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
