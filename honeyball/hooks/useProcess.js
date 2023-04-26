import { useEffect } from 'react'
import {
  getCurvature,
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
} from '../math/hypermath'
import { grouper, tiler } from '../worker'
import { PI, cos } from '../math'

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

      if (runtime.currentOrder === 0) {
        try {
          newTilingRuntime.rules = await grouper.process({
            dimensions: runtime.dimensions,
            coxeter: runtime.coxeter,
          })
        } catch (e) {
          console.warn(e)
        }
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
        const { vertices, edges } = await tiler.process({
          first: preprocessRuntime.currentOrder === 0,
          curvature: preprocessRuntime.curvature,
          rules:
            preprocessRuntime.currentOrder === 0
              ? preprocessRuntime.rules.rules
              : null,
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
