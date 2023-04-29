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
    setRuntime(runtime => ({
      ...runtime,
      currentOrder: 0,

      mirrorsPlanes: null,
      rootVertex: null,
      vertices: [],
      edges: [],
      ranges: [],
    }))
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
    if (runtime.order <= runtime.currentOrder) {
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
      const newTilingRuntime = {}
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

        // Initialize tiling
        const gram = runtime.coxeter.map((row, i) =>
          row.map(
            (column, j) =>
              -cos(
                ((runtime.stellated ? runtime.stellation[i][j] : 1) * PI) /
                  column
              )
          )
        )
        newTilingRuntime.curvature = getCurvature(gram)
        newTilingRuntime.mirrorsPlanes = getFundamentalSimplexMirrors(
          gram,
          newTilingRuntime.curvature
        )
        newTilingRuntime.rootVertex = getFundamentalVertex(
          runtime.mirrors,
          newTilingRuntime.mirrorsPlanes,
          newTilingRuntime.curvature
        )

        newTilingRuntime.ranges = []
      }

      try {
        const preprocessRuntime = {
          ...runtime,
          ...newTilingRuntime,
        }
        const { vertices, edges } = await worker.process({
          order: preprocessRuntime.currentOrder,
          coxeter: preprocessRuntime.coxeter,
          curvature: preprocessRuntime.curvature,
          mirrors: preprocessRuntime.mirrors,
          mirrorsPlanes: preprocessRuntime.mirrorsPlanes,
          rootVertex: preprocessRuntime.rootVertex,
          dimensions: preprocessRuntime.dimensions,
        })
        setRuntime(runtime => {
          if (!runtime.processing) {
            return runtime
          }
          return {
            ...runtime,
            ...preprocessRuntime,
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
}
