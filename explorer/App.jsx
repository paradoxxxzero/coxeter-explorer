import { useCallback, useEffect, useState } from 'react'
import { filterParams } from '../statics'
import Runtime from './components/Runtime'
import UI from './components/UI'
import { binomial, ceil, combinations } from './math'
import { sortRotations } from './math/hypermath'
import { initializeGl } from './render'
import { range } from '../utils'

export default function App({ params, updateParams }) {
  const [runtime, setRuntime] = useState({
    ...params,

    currentOrder: 0,
    askedOrder: null,
    spaceType: null,
    rootNormals: null,
    rootVertices: null,
    vertex: [],
    edge: [],
    ranges: [],
    face: [],
    processing: true,
    error: null,
    renderError: null,
  })

  useEffect(() => {
    setRuntime(rt => {
      try {
        if (!rt.gl) {
          return initializeGl(rt)
        }
        return rt
      } catch (e) {
        console.error(e)
        return {
          ...rt,
          error: e.message,
        }
      }
    })
  }, [runtime.gl])

  const [rotations, setRotations] = useState({
    shift: 0,
    maxShift: 0,
    combinations: [],
    auto: 'damp',
  })

  useEffect(() => {
    setRuntime(rt => ({
      ...rt,
      ...filterParams({
        order: params.order,
        ambiance: params.ambiance,
        showVertices: params.showVertices,
        showEdges: params.showEdges,
        showFaces: params.showFaces,
        vertexThickness: params.vertexThickness,
        edgeThickness: params.edgeThickness,
        projection3: params.projection3,
        projection4: params.projection4,
        projection5: params.projection5,
        projection6: params.projection6,
        projection7: params.projection7,
        projection8: params.projection8,
        projection9: params.projection9,
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
    params.projection3,
    params.projection4,
    params.projection5,
    params.projection6,
    params.projection7,
    params.projection8,
    params.projection9,
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
      combinations: sortRotations(combinations(range(params.dimensions), 2)),
      auto: 'damp',
    }))
  }, [params.dimensions])
  useEffect(() => {
    setRuntime(rt => {
      if (params.grouper === '' && rt.grouper.startsWith('auto-')) {
        return rt
      }
      return {
        ...rt,
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
        updateRotations={updateRotations}
        updateParams={updateParams}
      />
    </div>
  ) : null
}

if (import.meta.hot) {
  import.meta.hot.accept('./render.js', module => {})
}
