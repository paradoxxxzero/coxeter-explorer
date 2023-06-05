import { useCallback, useEffect, useState } from 'react'
import { filterParams } from '../statics'
import Runtime from './components/Runtime'
import UI from './components/UI'
import { abs, binomial } from './math'
import { ident } from './math/matrix'

export default function App({ gl, params, updateParams }) {
  window.p = params
  const [runtime, setRuntime] = useState(() => {
    return {
      ...params,
      ...gl,

      currentOrder: 0,
      askedOrder: null,
      spaceType: null,
      curvature: null,
      mirrorsPlanes: null,
      rootVertex: null,
      vertices: [],
      edges: [],
      ranges: [],
      faces: [],
      maxVertices: 30000,
      maxEdges: 50000,
      maxFaces: 50000,
      processing: true,
      error: null,
      renderError: null,
    }
  })

  useEffect(() => {
    setRuntime(runtime => ({
      ...runtime,
      ...filterParams({
        order: params.order,
        controls: params.controls,
        controlsShift: params.controlsShift,
        ambiance: params.ambiance,
        showVertices: params.showVertices,
        showEdges: params.showEdges,
        showFaces: params.showFaces,
        vertexThickness: params.vertexThickness,
        edgeThickness: params.edgeThickness,
        projection: params.projection,
        msaa: params.msaa,
        msaaSamples: params.msaaSamples,
        matrix: params.matrix,
        fov3: params.fov3,
        fov4: params.fov4,
        fov5: params.fov5,
        fov6: params.fov6,
        fov7: params.fov7,
        fov8: params.fov8,
        fov9: params.fov9,
        view: params.view,
        curve: params.curve,
        segments: params.segments,
        dimensions: params.dimensions,
        coxeter: params.coxeter,
        mirrors: params.mirrors,
        stellation: params.stellation,
        centered: params.centered,
      }).params,
    }))
  }, [
    params.order,
    params.ambiance,
    params.centered,
    params.controls,
    params.controlsShift,
    params.coxeter,
    params.curve,
    params.dimensions,
    params.edgeThickness,
    params.fov3,
    params.fov4,
    params.fov5,
    params.fov6,
    params.fov7,
    params.fov8,
    params.fov9,
    params.matrix,
    params.mirrors,
    params.msaa,
    params.msaaSamples,
    params.projection,
    params.segments,
    params.showEdges,
    params.showFaces,
    params.showVertices,
    params.stellation,
    params.vertexThickness,
    params.view,
  ])
  useEffect(() => {
    setRuntime(runtime => {
      if (params.grouper === '' && runtime.grouper.startsWith('auto-')) {
        return runtime
      }
      return {
        ...runtime,
        grouper: params.grouper,
      }
    })
  }, [params.grouper])

  const handleControls = useCallback(() => {
    let controls, controlsShift
    const maxControlsShift = binomial(params.dimensions, 2) / 2 - 1
    if (params.controls === 'orbit') {
      controls = 'free'
      controlsShift = 0
    } else {
      if (params.controlsShift >= maxControlsShift) {
        controls = 'orbit'
        controlsShift = 0
      } else {
        controls = 'free'
        controlsShift = params.controlsShift + 1
      }
    }
    updateParams({ controls, controlsShift })
  }, [params.controls, params.controlsShift, params.dimensions, updateParams])

  const handleMatrixReset = useCallback(() => {
    updateParams({
      matrix: ident(runtime.dimensions),
    })
  }, [updateParams, runtime.dimensions])

  const handleMatrixUpdate = useCallback(
    matrix => {
      updateParams({
        matrix,
      })
    },
    [updateParams]
  )
  const handleViewUpdate = useCallback(
    view => {
      if (params.view.find((v, i) => abs(v - view[i]) > 1e-4)) {
        updateParams({
          view,
        })
      }
    },
    [params.view, updateParams]
  )

  const handleChange = useCallback(
    (name, value) => {
      const params = typeof name === 'string' ? { [name]: value } : name
      updateParams(params)
    },
    [updateParams]
  )

  useEffect(() => {
    return () => {
      if (runtime.curvature !== null) {
        handleMatrixReset()
      }
    }
  }, [runtime.curvature])

  return (
    <div
      className={runtime.error || runtime.renderError ? 'error' : ''}
      title={runtime.error || runtime.renderError}
    >
      <UI
        runtime={runtime}
        params={params}
        onChange={handleChange}
        onControls={handleControls}
        onMatrixReset={handleMatrixReset}
      />
      <Runtime
        runtime={runtime}
        setRuntime={setRuntime}
        onUpdateMatrix={handleMatrixUpdate}
        onUpdateView={handleViewUpdate}
      />
    </div>
  )
}
