import { useCallback, useState } from 'react'
import {
  ambiances,
  defaultParams,
  easings,
  groupers,
  projections,
} from '../../statics'
import { range } from '../../utils.js'
import {
  centerView,
  dampedRotation,
  freeRotation,
  presetsIcon,
  rotationShift,
} from '../icons.jsx'
import { diagonal, ident } from '../math/matrix'
import Boolean from './Boolean'
import CoxeterMatrix from './CoxeterMatrix'
import Number from './Number'
import Presets from './Presets'
import Rotation from './Rotation.jsx'
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
            advanced: 'full',
            full: 'empty',
            empty: 'simple',
          })[showUI]
      ),
    []
  )

  const handlePreset = useCallback(
    preset => {
      updateParams(preset, true)
      closePresets()
    },
    [updateParams, closePresets]
  )

  const handleMatrixReset = useCallback(() => {
    const matrix = ident(runtime.dimensions)
    matrix._reset = true
    updateParams({
      matrix,
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

  const exportImage = useCallback(async () => {
    const res = window.prompt('Select image resolution', '5000x5000')
    if (!res || !res.includes('x')) {
      console.error('Invalid resolution')
      return
    }
    const [width, height] = res.split('x').map(x => parseInt(x))
    if (isNaN(width) || isNaN(height)) {
      console.error('Invalid resolution')
      return
    }
    const dekapng = await import('../export.js')

    const blob = await dekapng.makeBigPng(runtime, width, height)
    if (blob) {
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.style.display = 'none'
      const url = window.URL.createObjectURL(blob)
      a.href = url
      a.download = `${document.title}-${width}x${height}`
      a.click()
    }
  }, [runtime])

  return (
    <>
      <Presets
        open={presets}
        onPreset={handlePreset}
        onExportImage={exportImage}
        closePresets={closePresets}
      />
      <div className={runtime.error ? 'error' : ''} title={runtime.error}>
        {runtime.currentOrder < runtime.order ? (
          <aside className="processing-counter">
            {runtime.currentOrder}/{runtime.order}
          </aside>
        ) : null}
        {['simple', 'advanced', 'full'].includes(showUI) ? (
          <button
            className="preset-button button"
            onClick={() => setPresets(presets => !presets)}
            title="Presets"
          >
            {presetsIcon}
          </button>
        ) : null}
        {['simple', 'advanced', 'full'].includes(showUI) ? (
          <aside className="controls">
            <button
              className="rotation-button button"
              onClick={handleShift}
              title="Rotation Mode"
            >
              <div
                className="rotation"
                style={{
                  transform: `rotate(${
                    (rotations.shift / rotations.maxShift) * 360
                  }deg)`,
                }}
              >
                {rotationShift}
              </div>
              <sup>{rotations.shift + 1}</sup>
              <Rotation
                rotations={rotations}
                spaceType={runtime.spaceType}
                axis={0}
              />

              <Rotation
                rotations={rotations}
                spaceType={runtime.spaceType}
                axis={1}
              />
            </button>
            <div className="subcontrols">
              <button
                className="button anim-view"
                onClick={handleAuto}
                title="Animate rotations"
              >
                {rotations.auto === 'free'
                  ? freeRotation
                  : rotations.auto === 'damp'
                  ? dampedRotation
                  : '?'}
              </button>
              {!diagonal(runtime.matrix) && (
                <button
                  className="button reset-view"
                  onClick={handleMatrixReset}
                  title="Reset View"
                >
                  {centerView}
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
        >
          <Space
            {...(runtime.spaceType || {})}
            dimensions={runtime.dimensions}
          />
        </button>
        {['advanced', 'full'].includes(showUI) && (
          <aside className="parameters">
            {showUI === 'full' && (
              <label className="select-label">
                Grouper
                <select
                  name="grouper"
                  value={params.grouper}
                  onChange={handleRawChange}
                >
                  {groupers.map(p => (
                    <option key={p} value={p}>
                      {p
                        .replace(/_/g, ' ')
                        .replace(/\b./g, c => c.toUpperCase())}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <label className="boolean-label">
              inCentered
              <Boolean
                name="centered"
                allowNull
                value={params.centered}
                onChange={handleChange}
              />
            </label>
            {(showUI === 'full' || runtime.spaceType.curvature <= 0) && (
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
            <label className="select-label">
              Easing
              <select
                name="easing"
                value={params.easing}
                onChange={handleRawChange}
              >
                {easings.map(p => (
                  <option key={p} value={p}>
                    {p.replace(/_/g, ' ').replace(/\b./g, c => c.toUpperCase())}
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
            {['toddcoxeter', 'fundamental'].includes(runtime.grouper) && (
              <label className="boolean-label">
                Faces
                <Boolean
                  name="showFaces"
                  value={params.showFaces}
                  onChange={handleChange}
                />
              </label>
            )}
            <label className="select-label">
              Ambiance
              <select
                name="ambiance"
                value={params.ambiance}
                onChange={handleRawChange}
              >
                {(showUI === 'full'
                  ? Object.keys(ambiances)
                  : Object.entries(ambiances)
                      .filter(
                        ([k, { extended }]) =>
                          !extended || k === params.ambiance
                      )
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
        {['advanced', 'full'].includes(showUI) && (
          <aside className="view">
            <Number
              name="msaaSamples"
              label="MSAA"
              min={0}
              step={1}
              max={defaultParams.msaaSamples}
              value={params.msaaSamples}
              toggler={params.msaa}
              togglerName="msaa"
              onChange={handleChange}
            />
            {showUI === 'full' && (
              <Number
                name="subsampling"
                label="subsampling"
                min={0.1}
                step={0.1}
                value={params.subsampling}
                onChange={handleChange}
              />
            )}
            {params.dimensions >= 3
              ? range(3, params.dimensions + 1).map(i => (
                  <div key={i} className="projection">
                    <Number
                      label={`${i}D FOV`}
                      name={`fov${i}`}
                      step={1}
                      value={params[`fov${i}`]}
                      onChange={handleChange}
                    />

                    <label className="number">
                      <span className="number-label">{i}D Projection</span>
                      <select
                        name={`projection${i}`}
                        value={params[`projection${i}`]}
                        onChange={handleRawChange}
                      >
                        {[
                          ...projections.filter(
                            (projection, n) => i === 3 || n < 8
                          ),
                        ].map(p => (
                          <option key={p} value={p}>
                            {p
                              .replace(/_/g, ' ')
                              .replace(/./, c => c.toUpperCase())}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                ))
              : null}
          </aside>
        )}
        {['simple', 'advanced', 'full'].includes(showUI) && (
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
