import { Fragment, useCallback, useEffect, useState } from 'react'
import { size } from './honeyball/event'
import { useInteractions } from './honeyball/interact'
import { PI, cos, floor, max, min, round } from './honeyball/math'
import {
  changeAmbiance,
  initEdge,
  initVertex,
  plot,
  reinitEdge,
  reinitVertex,
  resetComposerTarget,
  show,
  updateCameraFov,
  updateMaterials,
} from './honeyball/render'
import { range } from './honeyball/utlis'
import { ambiances, projections } from './statics'
import { grouper, tiler } from './honeyball/worker'
import {
  getCurvature,
  getFundamentalSimplexMirrors,
  getFundamentalVertex,
} from './honeyball/math/hypermath'

export default function App({ gl, params, updateParams }) {
  const [runtime, setRuntime] = useState(() => {
    const runtime = {
      currentOrder: 0,

      rules: null,
      curvature: 0,
      mirrorsPlanes: null,
      rootVertex: null,
      words: null,
      edgeHashes: null,
      vertexHashes: null,
      nextWords: null,
      vertices: null,
      edges: null,
      ranges: null,

      maxVertices: 5000,
      maxEdges: 50000,
      ...params,
      ...gl,
    }
    initVertex(runtime)
    initEdge(runtime)

    return runtime
  })
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState()
  const [showUI, setShowUI] = useState(true)

  const handleUI = useCallback(() => setShowUI(showUI => !showUI), [])

  // Controls
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

  useEffect(() => {
    setRuntime(runtime => ({
      ...runtime,
      controls: params.controls,
      controlsShift: params.controlsShift,
    }))
    runtime.orbitControls.enabled = params.controls === 'orbit'
  }, [runtime.orbitControls, params.controls, params.controlsShift])

  // Ambiance
  useEffect(() => {
    setRuntime(runtime => {
      const newRuntime = {
        ...runtime,
        ambiance: params.ambiance,
      }
      changeAmbiance(newRuntime)
      return newRuntime
    })
  }, [params.ambiance])

  useEffect(() => {
    setRuntime(runtime => {
      if (
        (params.showVertices && !params.vertexThickness) ||
        (params.showEdges && !params.edgeThickness)
      ) {
        return runtime
      }
      const newRuntime = {
        ...runtime,
        vertexThickness: params.vertexThickness,
        edgeThickness: params.edgeThickness,
        projection: params.projection,
      }
      updateMaterials(newRuntime)
      newRuntime.composer.render()
      return newRuntime
    })
  }, [
    params.showVertices,
    params.showEdges,
    params.vertexThickness,
    params.edgeThickness,
    params.projection,
    runtime.curvature,
  ])

  // View
  useEffect(() => {
    resetComposerTarget(runtime.composer, params.msaa, params.msaaSamples)
  }, [params.msaa, params.msaaSamples, runtime.composer])

  useEffect(() => {
    updateCameraFov(runtime.composer, runtime.camera, params.fov3)
  }, [params.fov3, runtime.camera, runtime.composer])

  useEffect(() => {
    setRuntime(runtime => {
      const newRuntime = {
        ...runtime,
        fov4: params.fov4,
        fov5: params.fov5,
        fov6: params.fov6,
        fov7: params.fov7,
        fov8: params.fov8,
        fov9: params.fov9,
      }
      updateMaterials(newRuntime)
      newRuntime.composer.render()
      return newRuntime
    })
  }, [
    params.fov4,
    params.fov5,
    params.fov6,
    params.fov7,
    params.fov8,
    params.fov9,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      const newRuntime = {
        ...runtime,
        showVertices: params.showVertices,
        showEdges: params.showEdges,
      }
      show(newRuntime, 'vertex')
      show(newRuntime, 'edge')
      return newRuntime
    })
  }, [params.showVertices, params.showEdges])

  useEffect(() => {
    setRuntime(runtime => {
      if (params.curve && !params.segments) {
        return runtime
      }
      const newRuntime = {
        ...runtime,
        curve: params.curve,
        segments: params.segments,
      }
      return newRuntime
    })
  }, [params.curve, params.segments])

  // Reset plot
  useEffect(() => {
    setRuntime(runtime => {
      if (
        !params.dimensions ||
        params.coxeter.find(c => c.find(d => !d)) ||
        params.stellation.find(c => c.find(d => !d))
      ) {
        return runtime
      }
      return {
        ...runtime,
        dimensions: params.dimensions,
        coxeter: params.coxeter,
        mirrors: params.mirrors,
        stellated: params.stellated,
        stellation: params.stellation,
        currentOrder: 0,

        rules: null,
        // curvature: 0,
        mirrorsPlanes: null,
        rootVertex: null,
        words: null,
        edgeHashes: null,
        vertexHashes: null,
        nextWords: null,
        vertices: null,
        edges: null,
        ranges: null,
      }
    })
  }, [
    params.dimensions,
    params.coxeter,
    params.mirrors,
    params.stellated,
    params.stellation,
  ])

  useEffect(() => {
    reinitVertex(runtime)
    reinitEdge(runtime)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.dimensions, runtime.curve, runtime.segments])

  useEffect(() => {
    tiler.kill()
    setProcessing(false)
  }, [
    runtime.dimensions,
    runtime.coxeter,
    runtime.stellated,
    runtime.mirrors,
    runtime.stellation,
  ])

  useEffect(() => {
    setRuntime(runtime =>
      params.order
        ? {
            ...runtime,
            order: params.order,
          }
        : runtime
    )
  }, [params.order])

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
  }, [runtime.order, runtime.currentOrder])

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
        console.log('Reiniting')
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

        newTilingRuntime.words = new Map([['', newTilingRuntime.rootVertex]])
        newTilingRuntime.edgeHashes = new Set()
        newTilingRuntime.vertexHashes = new Set()
        newTilingRuntime.nextWords = ['']
        newTilingRuntime.vertices = []
        newTilingRuntime.edges = []
        newTilingRuntime.ranges = []
      }

      try {
        const preprocessRuntime = {
          ...runtime,
          ...newTilingRuntime,
        }
        const processedRuntime = await tiler.process({
          currentOrder: preprocessRuntime.currentOrder,
          curvature: preprocessRuntime.curvature,
          vertices: preprocessRuntime.vertices,
          edges: preprocessRuntime.edges,
          ranges: preprocessRuntime.ranges,
          words: preprocessRuntime.words,
          edgeHashes: preprocessRuntime.edgeHashes,
          vertexHashes: preprocessRuntime.vertexHashes,
          nextWords: preprocessRuntime.nextWords,
          rules: preprocessRuntime.rules,
          mirrorsPlanes: preprocessRuntime.mirrorsPlanes,
          rootVertex: preprocessRuntime.rootVertex,
          dimensions: preprocessRuntime.dimensions,
        })
        setRuntime(runtime => ({
          ...runtime,
          ...processedRuntime,
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
      if (runtime.vertices?.length > runtime.maxVertices) {
        console.warn(`Extending vertex buffer to ${runtime.vertices.length}`)
        const newRuntime = {
          ...runtime,
          maxVertices: runtime.vertices.length,
        }
        reinitVertex(newRuntime)
        return newRuntime
      }
      return runtime
    })
  }, [runtime.vertices])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.edges?.length > runtime.maxEdges) {
        console.warn(`Extending edge buffer to ${runtime.edges.length}`)
        const newRuntime = {
          ...runtime,
          maxEdges: runtime.edges.length,
        }
        reinitEdge(newRuntime)
        return newRuntime
      }
      return runtime
    })
  }, [runtime.edges])

  useEffect(() => {
    // Order plot
    plot(runtime, runtime.currentOrder - 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    runtime.currentOrder,
    runtime.vertices,
    runtime.edges,
    runtime.ranges,
    runtime.showVertices,
    runtime.showEdges,
  ])

  useEffect(() => {
    // Full plot
    plot(runtime)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    runtime.ambiance,
    runtime.showVertices,
    runtime.showEdges,
    runtime.maxVertices,
    runtime.maxEdges,
    runtime.curve,
    runtime.segments,
  ])

  useEffect(() => {
    const onSize = () => {
      size(runtime)
    }
    window.addEventListener('resize', onSize)
    window.addEventListener('orientationchange', onSize)
    return () => {
      window.removeEventListener('resize', onSize)
      window.removeEventListener('orientationchange', onSize)
    }
  }, [runtime])

  // Interact
  useInteractions(runtime)

  const handleExtend = useCallback(() => {
    const newParams = {
      extended: !params.extended,
    }

    if (params.extended) {
      for (let i = 0; i < params.dimensions; i++) {
        for (let j = 0; j < i - 1; j++) {
          params.coxeter[i][j] = 2
          params.coxeter[j][i] = 2
        }
      }
    }
    updateParams(newParams)
  }, [params.extended, params.dimensions, params.coxeter, updateParams])

  const handleChange = useCallback(
    e => {
      let { name, checked, type, value } = e.target

      if (type === 'checkbox') {
        value = checked
      } else if (type === 'number' && value && !isNaN(value)) {
        value = +value
        if (e.target.min) {
          value = max(value, +e.target.min)
        }
        if (e.target.max) {
          value = min(value, +e.target.max)
        }
        if (e.target.step) {
          value = round(value / +e.target.step) * +e.target.step
        }
      }

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

      if (name.startsWith('div')) {
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
      if (name.startsWith('mirror')) {
        const [i] = name
          .split('-')
          .slice(1)
          .map(x => +x)
        name = 'mirrors'
        value = params.mirrors.map((x, j) => ((j === i ? value : x) ? 1 : 0))
        if (value.reduce((a, b) => a + b, 0) === 0) {
          value[0] = 1
        }
      }

      newParams[name] = value

      updateParams(newParams)
    },
    [params, updateParams]
  )
  return (
    <div
      className={[error ? 'error' : '', runtime.rules?.warn ? 'warning' : '']
        .filter(c => c)
        .join(' ')}
      title={error}
    >
      <button className="control-indicator" onClick={handleControls}>
        {runtime.controls === 'orbit' ? '⇹' : '↭'}
        {runtime.controls === 'free' ? (
          <sup>{runtime.controlsShift + 1}</sup>
        ) : null}
      </button>
      <button
        className={`space-indicator${processing ? ' processing' : ''}`}
        onClick={handleUI}
      >
        {runtime.curvature === 0 ? '𝔼' : runtime.curvature > 0 ? '𝕊' : 'ℍ'}
        <sup>{runtime.dimensions - 1}</sup>
        {runtime.currentOrder < runtime.order ? (
          <sub>
            {runtime.currentOrder}/{runtime.order}
          </sub>
        ) : null}
      </button>
      {showUI && (
        <aside className="controls">
          <label>
            Order
            <input
              type="number"
              name="order"
              min="1"
              step="1"
              value={params.order}
              onChange={handleChange}
            />
          </label>
          <label>
            Segments
            <input
              type="checkbox"
              name="curve"
              checked={params.curve}
              onChange={handleChange}
            />
            {params.curve ? (
              <input
                type="number"
                name="segments"
                min="1"
                step="1"
                value={params.segments}
                onChange={handleChange}
              />
            ) : null}
          </label>
          <label>
            Dimensions
            <input
              type="number"
              name="dimensions"
              min="2"
              max="9"
              step="1"
              value={params.dimensions}
              onChange={handleChange}
            />
          </label>
          <label>
            Projection
            <select
              name="projection"
              value={params.projection}
              onChange={handleChange}
            >
              {projections.map(p => (
                <option key={p} value={p}>
                  {p.replace(/_/g, ' ').replace(/./, c => c.toUpperCase())}
                </option>
              ))}
            </select>
          </label>
          <label>
            Vertices
            <input
              type="checkbox"
              name="showVertices"
              checked={params.showVertices}
              onChange={handleChange}
            />
            {params.showVertices ? (
              <input
                type="number"
                name="vertexThickness"
                min="0"
                step="1"
                value={params.vertexThickness}
                onChange={handleChange}
              />
            ) : null}
          </label>
          <label>
            Edges
            <input
              type="checkbox"
              name="showEdges"
              checked={params.showEdges}
              onChange={handleChange}
            />
            {params.showEdges ? (
              <input
                type="number"
                name="edgeThickness"
                min="0"
                step="1"
                value={params.edgeThickness}
                onChange={handleChange}
              />
            ) : null}
          </label>
          <label>
            <input
              type="checkbox"
              name="stellated"
              checked={params.stellated}
              onChange={handleChange}
            />
            Stellated
          </label>
          <label>
            Ambiance
            <select
              name="ambiance"
              value={params.ambiance}
              onChange={handleChange}
            >
              {Object.keys(ambiances).map(a => (
                <option key={a} value={a}>
                  {a.replace(/_/g, ' ').replace(/./, c => c.toUpperCase())}
                </option>
              ))}
            </select>
          </label>
        </aside>
      )}
      {showUI && (
        <aside className="view">
          <label>
            MSAA
            <input
              type="checkbox"
              name="msaa"
              checked={params.msaa}
              onChange={handleChange}
            />
            {params.msaa ? (
              <input
                type="number"
                name="msaaSamples"
                min="0"
                step="1"
                value={params.msaaSamples}
                onChange={handleChange}
              />
            ) : null}
          </label>
          <label>
            FOV3
            <input
              type="number"
              name="fov3"
              min="0"
              step="1"
              value={params.fov3}
              onChange={handleChange}
            />
          </label>
          {params.dimensions > 3
            ? range(params.dimensions - 3).map(i => (
                <label key={i}>
                  FOV{i + 4}
                  <input
                    type="number"
                    name={`fov${i + 4}`}
                    step="1"
                    value={params[`fov${i + 4}`]}
                    onChange={handleChange}
                  />
                </label>
              ))
            : null}
        </aside>
      )}
      {showUI && (
        <aside className="coxeters">
          {range(params.dimensions).map(i => (
            <Fragment key={i}>
              {i > 0 && (
                <div className="number">
                  {range(i).map(
                    j =>
                      (!params.extended || i === j + 1) && (
                        <label key={j}>
                          <input
                            type="number"
                            name={`coxeter-${i}-${j}`}
                            min="2"
                            step="1"
                            value={params.coxeter[i][j]}
                            onChange={handleChange}
                          />
                          {params.stellated && (
                            <div className="stellation">
                              <span className="divisor"> / </span>
                              <input
                                type="number"
                                name={`div-${i}-${j}`}
                                min="1"
                                step="1"
                                value={params.stellation[i][j]}
                                onChange={handleChange}
                              />
                            </div>
                          )}
                        </label>
                      )
                  )}
                </div>
              )}

              <label className="mirror">
                {i > 0 && <span className="coxeter">——</span>}
                <input
                  type="checkbox"
                  name={`mirror-${i}`}
                  checked={!!params.mirrors[i]}
                  onChange={handleChange}
                />
                {i < params.dimensions - 1 && (
                  <span className="coxeter">——</span>
                )}
              </label>
            </Fragment>
          ))}
          <button className="extend" onClick={handleExtend}>
            {params.extended ? '▼' : '▲'}
          </button>
        </aside>
      )}
    </div>
  )
}
