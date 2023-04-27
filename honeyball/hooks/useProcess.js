import { useEffect } from 'react'
import { PI, cos } from '../math'
import {
  getCurvature,
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
} from '../math/hypermath'
import { knuthBendixTiler, toddCoxeterTiler } from '../workers/worker'

export const useProcess = (runtime, setRuntime, setProcessing, setError) => {
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
      setError(null)
      setProcessing(true)
      // Rules gets computed on non stellated coxeter group
      const newTilingRuntime = {}
      const worker =
        runtime.grouper === 'knuthbendix' ? knuthBendixTiler : toddCoxeterTiler

      if (runtime.currentOrder === 0) {
        // console.log(
        //   getCosets(runtime.dimensions, runtime.coxeter, runtime.mirrors)
        // )

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
        setRuntime(runtime => ({
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
        }))
      } catch (e) {
        setError(e)
        // Change current order to allow user to retry
        console.warn(e)
        setRuntime(runtime => ({
          ...runtime,
          currentOrder: runtime.order,
        }))
      } finally {
        setProcessing(false)
      }
    })()
    // Can't have ranges here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    setRuntime,
    setProcessing,
    setError,
    runtime.order,
    runtime.currentOrder,
    runtime.dimensions,
    runtime.coxeter,
    runtime.mirrors,
    runtime.stellated,
    runtime.stellation,
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
