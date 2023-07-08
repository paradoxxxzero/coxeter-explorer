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
  updateRotations,
}) {
  const [showUI, setShowUI] = useState('simple')
  const [presets, setPresets] = useState(false)

  const closePresets = useCallback(() => {
    setPresets(false)
  }, [])

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
  const handleUI = useCallback(
    () =>
      setShowUI(
        showUI =>
          ({
            simple: 'advanced',
            advanced: 'empty',
            empty: 'simple',
          }[showUI])
      ),
    []
  )

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

  const handleShift = useCallback(
    param => {
      updateRotations('shift', (rotations.shift + 1) % rotations.maxShift)
    },
    [rotations.maxShift, rotations.shift, updateRotations]
  )
  const handleAuto = useCallback(
    param => {
      updateRotations('auto', rotations.auto === 'free' ? 'damp' : 'free')
    },
    [rotations.auto, updateRotations]
  )

  return (
    <>
      <Presets
        open={presets}
        onPreset={handlePreset}
        closePresets={closePresets}
      />
      <div className={runtime.error ? 'error' : ''} title={runtime.error}>
        {runtime.currentOrder < runtime.order ? (
          <aside className="processing-counter">
            {runtime.currentOrder}/{runtime.order}
          </aside>
        ) : null}
        {['simple', 'advanced'].includes(showUI) ? (
          <button
            className="preset-button button"
            onClick={() => setPresets(presets => !presets)}
            title="Presets"
          >
            ◭
          </button>
        ) : null}
        {['simple', 'advanced'].includes(showUI) ? (
          <aside className="controls">
            <button
              className="controls-button button"
              onClick={handleShift}
              title="Rotation Mode"
            >
              <span
                style={{
                  display: 'inline-block',
                  transform: `rotate(${
                    (rotations.shift / rotations.maxShift) * 360
                  }deg)`,
                }}
              >
                ⥁
              </span>
              <sup>{rotations.shift + 1}</sup>
            </button>
            <div className="subcontrols">
              <button
                className="button anim-view"
                onClick={handleAuto}
                title="Animate rotations"
              >
                {rotations.auto === 'free'
                  ? '⤞'
                  : rotations.auto === 'damp'
                  ? '↠'
                  : '?'}
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
            </div>
          </aside>
        ) : null}
        <button
          className={`space-button button${
            runtime.processing ? ' processing' : ''
          }${showUI === 'empty' ? ' empty' : ''}`}
          onClick={handleUI}
          title={`Space ${runtime.spaceType}`}
        >
          <Space type={runtime.spaceType} dimensions={runtime.dimensions} />
        </button>
        {['advanced'].includes(showUI) && (
          <aside className="parameters">
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
        {showUI === 'advanced' && (
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
        {['simple', 'advanced'].includes(showUI) && (
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
