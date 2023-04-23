import { Fragment, useCallback, useEffect, useState } from 'react'
import { size } from './honeyball/event'
import { useInteractions } from './honeyball/interact'
import { floor, min } from './honeyball/math'
import {
  changeAmbiance,
  initEdge,
  initVertex,
  plot,
  reinitEdge,
  reinitVertex,
  resetComposerTarget,
  show,
  updateMaterials,
} from './honeyball/render'
import { kill, process, range } from './honeyball/utlis'
import { ambiances, projections } from './statics'

export default function App({ gl, params, updateParams }) {
  const [runtime, setRuntime] = useState(() => {
    const runtime = {
      curvature: 0,
      edges: [],
      vertices: [],
      ranges: [],
      currentOrder: 0,
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

  useEffect(() => {
    setRuntime(runtime => {
      if (params.msaa && !params.msaaSamples) {
        return runtime
      }
      const newRuntime = {
        ...runtime,
        msaa: params.msaa,
        msaaSamples: params.msaaSamples,
      }
      resetComposerTarget(newRuntime)
      return newRuntime
    })
  }, [params.msaa, params.msaaSamples])

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

  // Reset plot
  useEffect(() => {
    setRuntime(runtime => {
      if (
        !params.dimensions ||
        params.coxeter.find(c => c.find(d => !d)) ||
        params.coxeterDiv.find(c => c.find(d => !d)) ||
        (params.curve && !params.segments)
      ) {
        return runtime
      }
      return {
        ...runtime,
        dimensions: params.dimensions,
        curve: params.curve,
        segments: params.segments,
        coxeter: params.coxeter,
        coxeterDiv: params.coxeterDiv,
        stellation: params.stellation,
        mirrors: params.mirrors,
        currentOrder: 0,
        edges: [],
        vertices: [],
        ranges: [],
      }
    })
  }, [
    params.dimensions,
    params.curve,
    params.segments,
    params.coxeter,
    params.coxeterDiv,
    params.mirrors,
    params.stellation,
  ])

  useEffect(() => {
    reinitVertex(runtime)
    reinitEdge(runtime)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runtime.dimensions, runtime.curve, runtime.segments])

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
    if (runtime.ranges[runtime.order]) {
      setRuntime(runtime => ({
        ...runtime,
        currentOrder: runtime.order,
      }))
      return
    }
    kill()
    setProcessing(false)
    ;(async () => {
      setError(null)
      setProcessing(true)
      let rv
      try {
        rv = await process({
          dimensions: runtime.dimensions,
          coxeter: runtime.coxeter,
          coxeterDiv: runtime.coxeterDiv,
          stellation: runtime.stellation,
          mirrors: runtime.mirrors,
          currentOrder: runtime.currentOrder,
        })
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
      if (!rv) {
        return
      }
      setRuntime(runtime => {
        const newRuntime = {
          ...runtime,
          currentOrder: rv.currentOrder,
          curvature: rv.curvature,
          ranges: runtime.ranges.slice(),
          vertices: runtime.vertices.concat(rv.vertices),
          edges: runtime.edges.concat(rv.edges),
        }
        newRuntime.ranges[rv.currentOrder - 1] = {
          vertices: [runtime.vertices.length, newRuntime.vertices.length],
          edges: [runtime.edges.length, newRuntime.edges.length],
        }
        return newRuntime
      })
    })()
  }, [
    runtime.order,
    runtime.currentOrder,
    runtime.dimensions,
    runtime.curve,
    runtime.segments,
    runtime.coxeter,
    runtime.coxeterDiv,
    runtime.mirrors,
    runtime.stellation,
  ])

  useEffect(() => {
    setRuntime(runtime => {
      if (runtime.vertices.length > runtime.maxVertices) {
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
      if (runtime.edges.length > runtime.maxEdges) {
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
    if (runtime.currentOrder > 0) {
      plot(runtime, runtime.currentOrder - 1)
    }
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
      } else if (type === 'number' && value) {
        value = +value
      }

      const newParams = {}
      if (name === 'dimensions' && value) {
        newParams.coxeter = new Array(value)
          .fill()
          .map(() => new Array(value).fill(2))
        newParams.coxeterDiv = new Array(value)
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
        const coxeterDiv = params.coxeterDiv.map(x => x.slice())
        coxeterDiv[i][j] = value
        coxeterDiv[j][i] = value
        name = 'coxeterDiv'
        value = coxeterDiv
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
    <div className={error ? 'error' : ''} title={error}>
      <button id="controls" onClick={handleControls}>
        {runtime.controls === 'orbit' ? '⇹' : '↭'}
        {runtime.controls === 'free' ? (
          <sup>{runtime.controlsShift + 1}</sup>
        ) : null}
      </button>
      <button
        id="space"
        className={processing ? 'processing' : ''}
        onClick={() => setShowUI(!showUI)}
      >
        {runtime.curvature === 0 ? '𝔼' : runtime.curvature > 0 ? '𝕊' : 'ℍ'}
        <sup>{runtime.dimensions - 1}</sup>
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
              name="stellation"
              checked={params.stellation}
              onChange={handleChange}
            />
            Stellation
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
                          {params.stellation && (
                            <div className="stellation">
                              <span className="divisor"> / </span>
                              <input
                                type="number"
                                name={`div-${i}-${j}`}
                                min="1"
                                step="1"
                                value={params.coxeterDiv[i][j]}
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
          <button id="extend" onClick={handleExtend}>
            {params.extended ? '▼' : '▲'}
          </button>
        </aside>
      )}
    </div>
  )
}
