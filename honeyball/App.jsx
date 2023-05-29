import { useCallback, useEffect, useState } from 'react'
import { filterParams } from '../statics'
import Runtime from './components/Runtime'
import UI from './components/UI'
import { binomial, min, round } from './math'
import { ident } from './math/matrix'

export default function App({ gl, params, updateParams }) {
  const [runtime, setRuntime] = useState(() => {
    return {
      ...params,
      ...gl,

      currentOrder: 0,
      askedOrder: null,
      spaceType: null,
      curvature: 0,
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

  useEffect(() => {
    setRuntime(runtime => {
      return {
        ...runtime,
        matrix: params.matrix,
      }
    })
  }, [params.matrix])

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

  const handleExtend = useCallback(() => {
    const newParams = {
      extended: !params.extended,
    }

    if (params.extended) {
      newParams.coxeter = params.coxeter.map(row => row.slice())
      for (let i = 0; i < params.dimensions; i++) {
        for (let j = 0; j < i - 1; j++) {
          newParams.coxeter[i][j] = 2
          newParams.coxeter[j][i] = 2
        }
      }
    }
    updateParams(newParams)
  }, [params.extended, params.dimensions, params.coxeter, updateParams])

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
            newParams.stellation[i][j] = params.stellation[i][j]
            newParams.stellation[j][i] = params.stellation[j][i]
          }
          newParams.mirrors[i] = params.mirrors[i]
        }
        for (let i = 0; i < value; i++) {
          newParams.coxeter[i][i] = 1
        }
        newParams.matrix = ident(value)
        for (let i = 4; i <= value; i++) {
          if (!params[`fov${i}`]) {
            newParams[`fov${i}`] = i === 4 ? 90 : 45
          }
        }
        newParams.controlsShift = min(
          params.controlsShift,
          round(binomial(value, 2) / 2 - 1)
        )
      }
      if (name === 'grouper') {
        newParams.centered = value !== 'knuthbendix'
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

  return (
    <div
      className={runtime.error || runtime.renderError ? 'error' : ''}
      title={runtime.error || runtime.renderError}
    >
      <UI
        runtime={runtime}
        params={params}
        onChange={handleChange}
        onExtend={handleExtend}
        onControls={handleControls}
        onMirrorChange={handleMirrorChange}
        onMatrixReset={handleMatrixReset}
      />
      <Runtime
        runtime={runtime}
        setRuntime={setRuntime}
        onUpdateMatrix={handleMatrixUpdate}
      />
    </div>
  )
}
