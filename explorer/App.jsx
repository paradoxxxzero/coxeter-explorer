import { useCallback, useEffect, useState } from 'react'
import { filterParams } from '../statics'
import Runtime from './components/Runtime'
import UI from './components/UI'
import { binomial, ceil, combinations } from './math'
import { sortRotations } from './math/hypermath'
import { initializeGl } from './render'

export default function App({ params, updateParams }) {
  window.p = params
  const [runtime, setRuntime] = useState(() => {
    return {
      ...params,

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
    setRuntime(runtime => {
      try {
        return initializeGl(runtime)
      } catch (e) {
        console.error(e)
        return {
          ...runtime,
          error: e.message,
        }
      }
    })
  }, [])

  const [rotations, setRotations] = useState({
    shift: 0,
    maxShift: 0,
    combinations: [],
    auto: 'damp',
  })

  useEffect(() => {
    setRuntime(runtime => ({
      ...runtime,
      ...filterParams({
        order: params.order,
        ambiance: params.ambiance,
        showVertices: params.showVertices,
        showEdges: params.showEdges,
        showFaces: params.showFaces,
        vertexThickness: params.vertexThickness,
        edgeThickness: params.edgeThickness,
        projection: params.projection,
        msaa: params.msaa,
        msaaSamples: params.msaaSamples,
        subsampling: params.subsampling,
        matrix: params.matrix,
        fov3: params.fov3,
        fov4: params.fov4,
        fov5: params.fov5,
        fov6: params.fov6,
        fov7: params.fov7,
        fov8: params.fov8,
        fov9: params.fov9,
        zoom: params.zoom,
        curve: params.curve,
        segments: params.segments,
        easing: params.easing,
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
    params.easing,
    params.showEdges,
    params.showFaces,
    params.showVertices,
    params.stellation,
    params.subsampling,
    params.vertexThickness,
    params.zoom,
  ])
  useEffect(() => {
    setRotations(rotations => ({
      ...rotations,
      shift: 0,
      maxShift: ~~ceil(binomial(params.dimensions, 2) / 2),
      combinations: sortRotations(
        combinations(
          new Array(params.dimensions).fill().map((_, i) => i),
          2
        )
      ),
      auto: 'damp',
    }))
  }, [params.dimensions])

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

  const updateRotations = useCallback(
    (key, value) => {
      setRotations(rotations => ({
        ...rotations,
        [key]: value,
      }))
    },
    [setRotations]
  )
  return runtime.gl ? (
    <div
      className={runtime.error || runtime.renderError ? 'error' : ''}
      title={runtime.error || runtime.renderError}
    >
      <UI
        runtime={runtime}
        params={params}
        rotations={rotations}
        updateRotations={updateRotations}
        updateParams={updateParams}
      />
      <Runtime
        runtime={runtime}
        rotations={rotations}
        setRuntime={setRuntime}
        updateParams={updateParams}
      />
    </div>
  ) : null
}
