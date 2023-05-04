import { useCallback, useEffect, useState } from 'react'
import { filterParams } from '../statics'
import Runtime from './components/Runtime'
import UI from './components/UI'
import { floor, min } from './math'
import { ErrorBoundary } from './components/ErrorBoundary'

export default function App({ gl, params, updateParams }) {
  const [runtime, setRuntime] = useState(() => {
    return {
      ...params,
      ...gl,

      currentOrder: 0,

      curvature: 0,
      mirrorsPlanes: null,
      rootVertex: null,
      vertices: [],
      edges: [],
      ranges: [],
      maxVertices: 30000,
      maxEdges: 50000,
      processing: true,
      error: null,
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
        fov3: params.fov3,
        fov4: params.fov4,
        fov5: params.fov5,
        fov6: params.fov6,
        fov7: params.fov7,
        fov8: params.fov8,
        fov9: params.fov9,
        curve: params.curve,
        segments: params.segments,
        dimensions: params.dimensions,
        coxeter: params.coxeter,
        mirrors: params.mirrors,
        stellated: params.stellated,
        stellation: params.stellation,
      }),
    }))
  }, [
    params.order,
    params.ambiance,
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
    params.mirrors,
    params.msaa,
    params.msaaSamples,
    params.projection,
    params.segments,
    params.showEdges,
    params.showFaces,
    params.showVertices,
    params.stellated,
    params.stellation,
    params.vertexThickness,
  ])
  useEffect(() => {
    setRuntime(runtime => ({
      ...runtime,
      grouper: params.grouper,
    }))
  }, [params.grouper])

  const handleControls = useCallback(() => {
    let controls, controlsShift
    const maxControlsShift = floor(params.dimensions / 2) - 1
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

  const handleExtend = useCallback(() => {
    const newParams = {
      extended: !params.extended,
    }

    if (!params.extended) {
      for (let i = 0; i < params.dimensions; i++) {
        for (let j = 0; j < i - 1; j++) {
          params.coxeter[i][j] = 2
          params.coxeter[j][i] = 2
        }
      }
    }
    updateParams(newParams)
  }, [params.extended, params.dimensions, params.coxeter, updateParams])

  const handleStellated = useCallback(() => {
    updateParams({ stellated: !params.stellated })
  }, [params.stellated, updateParams])

  const handleChange = useCallback(
    (name, value) => {
      const newParams = {}
      if (name === 'dimensions' && value) {
        newParams.coxeter = new Array(value)
          .fill()
          .map(() => new Array(value).fill(2))
        newParams.stellation = new Array(value)
          .fill()
          .map(() => new Array(value).fill(1))
        newParams.mirrors = new Array(value).fill(0)

        for (let i = 0; i < min(params.coxeter.length, value); i++) {
          for (let j = 0; j < i; j++) {
            newParams.coxeter[i][j] = params.coxeter[i][j]
            newParams.coxeter[j][i] = params.coxeter[j][i]
          }
          newParams.mirrors[i] = params.mirrors[i]
        }
        for (let i = 0; i < value; i++) {
          newParams.coxeter[i][i] = -1
        }
        for (let i = 4; i <= value; i++) {
          if (!params[`fov${i}`]) {
            newParams[`fov${i}`] = i === 4 ? 90 : 45
          }
        }
      }

      if (name.startsWith('coxeter')) {
        const [i, j] = name
          .split('-')
          .slice(1)
          .map(x => +x)
        const coxeter = params.coxeter.map(x => x.slice())
        coxeter[i][j] = value
        coxeter[j][i] = value
        name = 'coxeter'
        value = coxeter
      }

      if (name.startsWith('stellation')) {
        const [i, j] = name
          .split('-')
          .slice(1)
          .map(x => +x)
        const stellation = params.stellation.map(x => x.slice())
        stellation[i][j] = value
        stellation[j][i] = value
        name = 'stellation'
        value = stellation
      }

      newParams[name] = value

      updateParams(newParams)
    },
    [params, updateParams]
  )

  const handleMirrorChange = useCallback(
    (index, value) => {
      const mirrors = params.mirrors.slice()
      mirrors[index] = value
      updateParams({ mirrors })
    },
    [params.mirrors, updateParams]
  )

  const handleError = useCallback(
    error => {
      setRuntime(runtime => ({
        ...runtime,
        error: error.message,
      }))
    },
    [setRuntime]
  )

  return (
    <div className={runtime.error ? 'error' : ''} title={runtime.error}>
      <UI
        runtime={runtime}
        params={params}
        onChange={handleChange}
        onExtend={handleExtend}
        onControls={handleControls}
        onStellated={handleStellated}
        onMirrorChange={handleMirrorChange}
      />
      <ErrorBoundary error={runtime.error} onError={handleError}>
        <Runtime runtime={runtime} setRuntime={setRuntime} />
      </ErrorBoundary>
    </div>
  )
}
