import { Fragment, useCallback, useState } from 'react'
import Link from './Link'
import Node from './Node'
import Value from './Value'
import { max, min, round } from '../math'
import { ambiances, groupers, projections } from '../../statics'

export default function UI({
  params,
  runtime,
  onChange,
  onExtend,
  onControls,
  onStellated,
  onMirrorChange,
}) {
  const [showUI, setShowUI] = useState(true)

  const handleUI = useCallback(() => setShowUI(showUI => !showUI), [])

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
      onChange(name, value)
    },
    [onChange]
  )

  return (
    <div className={runtime.error ? 'error' : ''} title={runtime.error}>
      <button className="control-indicator" onClick={onControls}>
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
                        ? `Auto [${runtime.grouper.replace(/^auto-/, '')}]`
                        : 'Auto'
                      : p.replace(/_/g, ' ').replace(/./, c => c.toUpperCase())}
                  </option>
                ))}
              </select>
            </label>
          )}
          {(params.extended ||
            runtime.grouper.replace(/^auto-/, '') === 'knuthbendix' ||
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
            Faces
            <input
              type="checkbox"
              name="showFaces"
              checked={params.showFaces}
              onChange={handleChange}
            />
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
                  onChange={onMirrorChange}
                />
                {i < params.dimensions - 1 && <Link />}
              </Fragment>
            ))}
          </div>
          <div className="coxeter-toggles">
            <button className="button" onClick={onStellated} title="stellated">
              {params.stellated ? '⋇' : '÷'}
            </button>
            <button className="button" onClick={onExtend} title="extended mode">
              {params.extended ? '▲' : '▼'}
            </button>
          </div>
        </aside>
      )}
    </div>
  )
}
