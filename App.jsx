import { Fragment, useCallback, useEffect, useState } from 'react'
import { useInteract } from './honeyball/hooks/useInteract'
import { useProcess } from './honeyball/hooks/useProcess'
import { useRender } from './honeyball/hooks/useRender'
import { floor, max, min, round } from './honeyball/math'
import { ambiances, filterParams, groupers, projections } from './statics'
import Link from './honeyball/components/Link'
import Node from './honeyball/components/Node'
import Value from './honeyball/components/Value'

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
  window.rt = runtime
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
      ...filterParams({
        order: params.order,
        controls: params.controls,
        controlsShift: params.controlsShift,
        ambiance: params.ambiance,
        showVertices: params.showVertices,
        showEdges: params.showEdges,
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

  // Reset plot
  useProcess(runtime, setRuntime)

  useRender(runtime)

  useInteract(runtime)

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
    <div className={runtime.error ? 'error' : ''} title={runtime.error}>
      <button className="control-indicator" onClick={handleControls}>
        {runtime.controls === 'orbit' ? '⇹' : '↭'}
        {runtime.controls === 'free' ? (
          <sup>{runtime.controlsShift + 1}</sup>
        ) : null}
      </button>
      <button
        className={`space-indicator${runtime.processing ? ' processing' : ''}`}
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
          {params.extended && (
            <label>
              Grouper
              <select
                name="grouper"
                value={params.grouper}
                onChange={handleChange}
              >
                {groupers.map(p => (
                  <option key={p} value={p}>
                    {p === ''
                      ? params.grouper === ''
                        ? `Auto [${runtime.grouper}]`
                        : 'Auto'
                      : p.replace(/_/g, ' ').replace(/./, c => c.toUpperCase())}
                  </option>
                ))}
              </select>
            </label>
          )}
          {(params.extended ||
            runtime.grouper === 'knuthbendix' ||
            runtime.curvature <= 0) && (
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
          )}
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
            Ambiance
            <select
              name="ambiance"
              value={params.ambiance}
              onChange={handleChange}
            >
              {(params.extended
                ? Object.keys(ambiances)
                : Object.entries(ambiances)
                    .filter(([k, { extended }]) => !extended)
                    .map(([k]) => k)
              ).map(a => (
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
            ? [...Array(params.dimensions - 3).keys()].map(i => (
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
          <div className="coxeter-matrix">
            {[...Array(params.dimensions).keys()].map(i => (
              <Fragment key={i}>
                {i > 0 && (
                  <div className="coxeter-column">
                    {[...Array(i).keys()].map(
                      j =>
                        (params.extended || i === j + 1) && (
                          <Value
                            i={i}
                            j={j}
                            value={params.coxeter[i][j]}
                            stellation={
                              params.stellated
                                ? params.stellation[i][j]
                                : undefined
                            }
                            key={`${i}x${j}`}
                            onChange={handleChange}
                          />
                        )
                    )}
                  </div>
                )}
                {i > 0 && <Link />}
                <Node
                  index={i}
                  value={params.mirrors[i]}
                  extended={params.extended}
                  onChange={handleMirrorChange}
                />
                {i < params.dimensions - 1 && <Link />}
              </Fragment>
            ))}
          </div>
          <div className="coxeter-toggles">
            <button
              className="button"
              onClick={handleStellated}
              title="stellated"
            >
              {params.stellated ? '⋇' : '÷'}
            </button>
            <button
              className="button"
              onClick={handleExtend}
              title="extended mode"
            >
              {params.extended ? '▲' : '▼'}
            </button>
          </div>
        </aside>
      )}
    </div>
  )
}
