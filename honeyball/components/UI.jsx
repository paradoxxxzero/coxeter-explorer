import { Fragment, useCallback, useState } from 'react'
import { ambiances, groupers, projections } from '../../statics'
import Link from './Link'
import Node from './Node'
import Value from './Value'
import Number from './Number'
import { diagonal } from '../math/matrix'
import Boolean from './Boolean'

export default function UI({
  params,
  runtime,
  onChange,
  onExtend,
  onControls,
  onMirrorChange,
  onMatrixReset,
}) {
  const [showUI, setShowUI] = useState(true)

  const handleChange = useCallback(
    e => {
      let { name, value } = e.target
      onChange(name, value)
    },
    [onChange]
  )
  const handleUI = useCallback(() => setShowUI(showUI => !showUI), [])

  return (
    <div className={runtime.error ? 'error' : ''} title={runtime.error}>
      {runtime.currentOrder < runtime.order ? (
        <aside className="processing-counter">
          {runtime.currentOrder}/{runtime.order}
        </aside>
      ) : null}
      <button
        className="control-indicator"
        onClick={onControls}
        title="Rotation Mode"
      >
        {runtime.controls === 'orbit' ? '⇹' : '↭'}
        {runtime.controls === 'free' ? (
          <sup>{runtime.controlsShift + 1}</sup>
        ) : null}
      </button>
      {!diagonal(runtime.matrix) && (
        <button
          className="button reset-view"
          onClick={onMatrixReset}
          title="Reset View"
        >
          ↻
        </button>
      )}
      <button
        className={`space-indicator${runtime.processing ? ' processing' : ''}`}
        onClick={handleUI}
        title={`Space ${runtime.spaceType}`}
      >
        <span className="space">
          {runtime.spaceType === null || runtime.spaceType === 'indefinite'
            ? '𝕏'
            : runtime.spaceType === 'affine'
            ? '𝔼'
            : runtime.spaceType === 'finite'
            ? '𝕊'
            : 'ℍ'}
        </span>
        <sup>{runtime.dimensions - 1}</sup>
        {runtime.spaceType?.startsWith('hyperbolic') ? (
          <sub>
            {{ compact: ' ', paracompact: '*' }[
              runtime.spaceType.replace(/^hyperbolic-/, '')
            ] ||
              (runtime.spaceType.startsWith('hyperbolic-level')
                ? `L${runtime.spaceType.replace(/^hyperbolic-level/, '')}`
                : null)}
          </sub>
        ) : null}
      </button>
      {showUI && (
        <aside className="controls">
          {(params.extended || params.grouper !== '') && (
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
          {(params.extended || params.grouper) && (
            <label>
              inCentered
              <Boolean
                name="centered"
                allowNull
                value={params.centered}
                onChange={onChange}
              />
            </label>
          )}
          {params.extended && (
            <Number
              name="order"
              label="Precision"
              min={1}
              step={1}
              value={params.order}
              onChange={onChange}
            />
          )}
          <Number
            name="segments"
            label="Segments"
            min={1}
            step={1}
            value={params.segments}
            toggler={params.curve}
            togglerName="curve"
            onChange={onChange}
          />
          <Number
            name="dimensions"
            label="Dimensions"
            min={2}
            max={9}
            step={1}
            value={params.dimensions}
            onChange={onChange}
          />
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
          <Number
            name="vertexThickness"
            label="Vertices"
            min={0}
            step={1}
            value={params.vertexThickness}
            toggler={params.showVertices}
            togglerName="showVertices"
            onChange={onChange}
          />
          <Number
            name="edgeThickness"
            label="Edges"
            min={0}
            step={1}
            value={params.edgeThickness}
            toggler={params.showEdges}
            togglerName="showEdges"
            onChange={onChange}
          />
          {(runtime.grouper.replace(/^auto-/, '') === 'toddcoxeter' ||
            runtime.grouper === 'fundamental') && (
            <label>
              Faces
              <Boolean
                name="showFaces"
                value={params.showFaces}
                onChange={onChange}
              />
            </label>
          )}
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
          <Number
            name="msaaSamples"
            label="MSAA"
            min={0}
            step={1}
            value={params.msaaSamples}
            toggler={params.msaa}
            togglerName="msaa"
            onChange={onChange}
          />
          <Number
            name="fov3"
            label="FOV3"
            min={0}
            step={1}
            value={params.fov3}
            onChange={onChange}
          />
          {params.dimensions > 3
            ? [...Array(params.dimensions - 3).keys()].map(i => (
                <Number
                  key={i}
                  label={`FOV${i + 4}`}
                  name={`fov${i + 4}`}
                  step={1}
                  value={params[`fov${i + 4}`]}
                  onChange={onChange}
                />
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
                            stellation={params.stellation[i][j]}
                            key={`${i}x${j}`}
                            onChange={onChange}
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
            <button className="button" onClick={onExtend} title="extended mode">
              {params.extended ? '▲' : '▼'}
            </button>
          </div>
        </aside>
      )}
    </div>
  )
}
