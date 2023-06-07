import { useCallback, useState } from 'react'
import { ambiances, groupers, projections } from '../../statics'
import { diagonal, ident } from '../math/matrix'
import Boolean from './Boolean'
import CoxeterMatrix from './CoxeterMatrix'
import Number from './Number'
import Presets from './Presets'
import Space from './Space'

export default function UI({
  runtime,
  params,
  rotations,
  updateParams,
  onControls,
}) {
  const [showUI, setShowUI] = useState(true)
  const [presets, setPresets] = useState(false)

  const closePresets = useCallback(() => setPresets(false), [])

  const handleRawChange = useCallback(
    e => {
      let { name, value } = e.target
      updateParams({ [name]: value })
    },
    [updateParams]
  )
  const handleChange = useCallback(
    (name, value) => {
      updateParams({ [name]: value })
    },
    [updateParams]
  )
  const handleUI = useCallback(() => setShowUI(showUI => !showUI), [])

  const handlePreset = useCallback(
    preset => {
      updateParams(preset)
      closePresets()
    },
    [updateParams, closePresets]
  )

  const handleMatrixReset = useCallback(() => {
    updateParams({
      matrix: ident(runtime.dimensions),
    })
  }, [updateParams, runtime.dimensions])

  return (
    <>
      <aside className={`presets ${presets ? 'shown' : 'hidden'}`}>
        <Presets onPreset={handlePreset} closePresets={closePresets} />
      </aside>
      <div className={runtime.error ? 'error' : ''} title={runtime.error}>
        {runtime.currentOrder < runtime.order ? (
          <aside className="processing-counter">
            {runtime.currentOrder}/{runtime.order}
          </aside>
        ) : null}
        <button
          className="preset-button"
          onClick={() => setPresets(presets => !presets)}
          title="Presets"
        >
          ◭
        </button>
        <button
          className="control-indicator"
          onClick={onControls}
          title="Rotation Mode"
        >
          <span
            style={{
              display: 'inline-block',
              transform: `rotate(${
                (runtime.controlsShift / rotations.maxShift) * 360
              }deg)`,
            }}
          >
            ⥁
          </span>
          <sup>{runtime.controlsShift + 1}</sup>
        </button>
        {!diagonal(runtime.matrix) && (
          <button
            className="button reset-view"
            onClick={handleMatrixReset}
            title="Reset View"
          >
            ⌖
          </button>
        )}
        <button
          className={`space-indicator${
            runtime.processing ? ' processing' : ''
          }`}
          onClick={handleUI}
          title={`Space ${runtime.spaceType}`}
        >
          <Space type={runtime.spaceType} dimensions={runtime.dimensions} />
        </button>
        {showUI && (
          <aside className="controls">
            {(params.extended || params.grouper !== '') && (
              <label>
                Grouper
                <select
                  name="grouper"
                  value={params.grouper}
                  onChange={handleRawChange}
                >
                  {groupers.map(p => (
                    <option key={p} value={p}>
                      {p === ''
                        ? params.grouper === ''
                          ? `Auto [${runtime.grouper.replace(/^auto-/, '')}]`
                          : 'Auto'
                        : p
                            .replace(/_/g, ' ')
                            .replace(/./, c => c.toUpperCase())}
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
                  onChange={handleChange}
                />
              </label>
            )}
            {(params.extended || runtime.curvature <= 0) && (
              <Number
                name="order"
                label="Precision"
                min={1}
                step={1}
                value={params.order}
                onChange={handleChange}
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
              onChange={handleChange}
            />
            <Number
              name="dimensions"
              label="Dimensions"
              min={2}
              max={9}
              step={1}
              value={params.dimensions}
              onChange={handleChange}
            />
            <label>
              Projection
              <select
                name="projection"
                value={params.projection}
                onChange={handleRawChange}
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
              onChange={handleChange}
            />
            <Number
              name="edgeThickness"
              label="Edges"
              min={0}
              step={1}
              value={params.edgeThickness}
              toggler={params.showEdges}
              togglerName="showEdges"
              onChange={handleChange}
            />
            {(runtime.grouper.replace(/^auto-/, '') === 'toddcoxeter' ||
              runtime.grouper === 'fundamental') && (
              <label>
                Faces
                <Boolean
                  name="showFaces"
                  value={params.showFaces}
                  onChange={handleChange}
                />
              </label>
            )}
            <label>
              Ambiance
              <select
                name="ambiance"
                value={params.ambiance}
                onChange={handleRawChange}
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
              onChange={handleChange}
            />
            <Number
              name="fov3"
              label="FOV3"
              min={0}
              step={1}
              value={params.fov3}
              onChange={handleChange}
            />
            {params.dimensions > 3
              ? [...Array(params.dimensions - 3).keys()].map(i => (
                  <Number
                    key={i}
                    label={`FOV${i + 4}`}
                    name={`fov${i + 4}`}
                    step={1}
                    value={params[`fov${i + 4}`]}
                    onChange={handleChange}
                  />
                ))
              : null}
          </aside>
        )}
        {showUI && (
          <CoxeterMatrix
            dimensions={params.dimensions}
            coxeter={params.coxeter}
            mirrors={params.mirrors}
            stellation={params.stellation}
            extended={params.extended}
            onChange={handleChange}
          />
        )}
      </div>
    </>
  )
}
