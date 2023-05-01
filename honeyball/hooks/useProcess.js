import { useEffect } from 'react'
import { PI, cos } from '../math'
import {
  getCurvature,
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
} from '../math/hypermath'
import { knuthBendixTiler, toddCoxeterTiler } from '../workers/worker'

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
      const gram = runtime.coxeter.map((row, i) =>
        row.map(
          (column, j) =>
            -cos(
              ((runtime.stellated ? runtime.stellation[i][j] : 1) * PI) / column
            )
        )
      )
      const curvature = getCurvature(gram)
      const mirrorsPlanes = getFundamentalSimplexMirrors(gram, curvature)
      const rootVertex = getFundamentalVertex(
        runtime.mirrors,
        mirrorsPlanes,
        curvature
      )
      const grouper =
        runtime.grouper === ''
          ? curvature > 0 && !runtime.stellated
            ? 'toddcoxeter'
            : 'knuthbendix'
          : runtime.grouper
      return {
        ...runtime,
        currentOrder: 0,
        grouper,
        vertices: [],
        edges: [],
        ranges: [],
        curvature,
        mirrorsPlanes,
        rootVertex,
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
    if (runtime.order <= runtime.currentOrder) {
      return
    }
    if (!runtime.rootVertex) {
      return
    }
    if (runtime.ranges?.[runtime.order]) {
      setRuntime(runtime => ({
        ...runtime,
        currentOrder: runtime.order,
      }))
      return
    }
    ;(async () => {
      // Rules gets computed on non stellated coxeter group
      const worker =
        runtime.grouper === 'knuthbendix' ? knuthBendixTiler : toddCoxeterTiler
      setRuntime(runtime => ({
        ...runtime,
        processing: true,
        error: null,
      }))

      if (runtime.currentOrder === 0) {
        toddCoxeterTiler.kill()
        knuthBendixTiler.kill()
      }

      try {
        const { vertices, edges } = await worker.process({
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
                edges: [
                  runtime.edges.length,
                  runtime.edges.length + edges.length,
                ],
              },
            ],
            vertices: runtime.vertices.concat(vertices),
            edges: runtime.edges.concat(edges),
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
    })()
    // Can't have ranges here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    setRuntime,
    runtime.order,
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
}
