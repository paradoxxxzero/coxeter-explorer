import { useCallback, useEffect, useMemo, useState } from 'react'

import { range } from '../../utils.js'
import {
  centerViewIcon,
  coxeterPlaneIcon,
  cubeIcon,
  dampedRotationIcon,
  freeRotationIcon,
  lockIcon,
  presetsIcon,
  rotationShiftIcon,
  squareIcon,
  unlockIcon,
} from '../icons.jsx'
import { ident } from '../math/matrix'
import Boolean from './Boolean'
import CoxeterMatrix from './CoxeterMatrix'
import Number from './Number'
import Presets from './Presets'
import Rotation from './Rotation.jsx'
import Space from './Space'
import { presets } from '../presets/index.jsx'
import Shape from './Shape.jsx'
import { ambiances } from '../ambiances.js'
import { defaultProjection } from '../params.js'
import { details, easings, projections } from '../../statics.js'
import { defaultParams } from '../default.js'

const getShowUI = () => {
  try {
    return localStorage.getItem('showUI') || 'simple'
  } catch (e) {
    console.error(e)
    return 'simple'
  }
}

export default function UI({
  runtime,
  params,
  rotations,
  setRuntime,
  updateParams,
  updateRotations,
}) {
  const [showUI, setShowUI] = useState(getShowUI)
  const [showPresets, setShowPresets] = useState(false)
  const [presetIndex, setPresetIndex] = useState(0)

  const closePresets = useCallback(() => {
    setShowPresets(false)
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
      setShowUI(showUI => {
        const newShowUI = {
          simple: 'advanced',
          advanced: 'full',
          full: 'empty',
          empty: 'simple',
        }[showUI]
        try {
          localStorage.setItem('showUI', newShowUI)
        } catch (e) {
          console.error(e)
        }
        return newShowUI
      }),
    []
  )

  const handlePreset = useCallback(
    (preset, index) => {
      updateParams(preset, true)
      setPresetIndex(index)
      closePresets()
    },
    [updateParams, closePresets]
  )

  const handleCenter = useCallback(() => {
    const matrix = ident(runtime.dimensions)
    matrix._reset = true
    updateParams({
      matrix,
      centered: true,
    })
  }, [updateParams, runtime.dimensions])

  const handleCoxeter = useCallback(() => {
    const matrix = ident(runtime.dimensions)
    matrix._reset = true
    updateParams({
      matrix,
      centered: false,
    })
  }, [updateParams, runtime.dimensions])

  const handleOrtho = useCallback(() => {
    updateParams(
      Object.fromEntries(
        range(3, runtime.dimensions + 1)
          .map(i => [
            [`projection${i}`, 'orthographic'],
            [`fov${i}`, 90],
          ])
          .flat()
      )
    )
  }, [updateParams, runtime.dimensions])

  const handleStereo = useCallback(() => {
    updateParams(
      Object.fromEntries(
        range(3, runtime.dimensions + 1).map(i => [
          `projection${i}`,
          defaultProjection(i, runtime.dimensions),
        ])
      )
    )
  }, [updateParams, runtime.dimensions])

  const handleShift = useCallback(
    param => {
      updateRotations('shift', (rotations.shift + 1) % rotations.maxShift)
    },
    [rotations.maxShift, rotations.shift, updateRotations]
  )
  const handleLock = useCallback(
    param => {
      updateRotations('lock', !rotations.lock)
    },
    [rotations.lock, updateRotations]
  )
  const handleAuto = useCallback(
    param => {
      updateRotations('auto', rotations.auto === 'free' ? 'damp' : 'free')
    },
    [rotations.auto, updateRotations]
  )

  const exportImage = useCallback(async () => {
    closePresets()
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
  }, [closePresets, runtime])

  const showProjectionButtons = useMemo(() => {
    return {
      square: range(3, runtime.dimensions + 1).some(
        i => params[`projection${i}`] !== 'orthographic'
      ),
      cube: range(3, runtime.dimensions + 1).some(
        i =>
          params[`projection${i}`] !== defaultProjection(i, runtime.dimensions)
      ),
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    params.projection3,
    params.projection4,
    params.projection5,
    params.projection6,
    params.projection7,
    params.projection8,
    params.projection9,
    runtime.dimensions,
  ])

  useEffect(() => {
    const keydown = e => {
      if (e.key === 'ArrowLeft' && e.ctrlKey && presetIndex > 0) {
        let prevPreset = presetIndex - 1
        while (presets[prevPreset].type) {
          if (prevPreset < 2) {
            return
          }
          prevPreset--
        }
        handlePreset(presets[prevPreset].params, prevPreset)
      } else if (
        e.key === 'ArrowRight' &&
        e.ctrlKey &&
        presetIndex < presets.length - 1
      ) {
        let nextPresets = presetIndex + 1
        while (presets[nextPresets].type) {
          if (nextPresets > presets.length - 2) {
            return
          }
          nextPresets++
        }

        handlePreset(presets[nextPresets].params, nextPresets)
      }
    }
    window.addEventListener('keydown', keydown)
    return () => {
      window.removeEventListener('keydown', keydown)
    }
  }, [handlePreset, presetIndex])

  return (
    <>
      <Presets
        open={showPresets}
        onPreset={handlePreset}
        onExportImage={exportImage}
        closePresets={closePresets}
      />
      <main className={runtime.error ? 'error ui' : 'ui'} title={runtime.error}>
        <div className="ui-row ui-row-top">
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
                  {rotationShiftIcon}
                </div>
                <sup>{rotations.shift + 1}</sup>
                <Rotation
                  rotations={rotations}
                  space={runtime.space}
                  axis={0}
                />

                <Rotation
                  rotations={rotations}
                  space={runtime.space}
                  axis={1}
                />
              </button>

              <div className="subcontrols">
                <button className="button" onClick={handleLock}>
                  {rotations.lock ? lockIcon : unlockIcon}
                </button>
                <button
                  className="button anim-view"
                  onClick={handleAuto}
                  title="Animate rotations"
                >
                  {rotations.auto === 'free'
                    ? freeRotationIcon
                    : rotations.auto === 'damp'
                    ? dampedRotationIcon
                    : '?'}
                </button>

                <button
                  className="button"
                  onClick={handleCenter}
                  title="Center View"
                >
                  {centerViewIcon}
                </button>
                <button
                  className="button"
                  onClick={handleCoxeter}
                  title="Coxeter View"
                >
                  {coxeterPlaneIcon}
                </button>
                {['advanced', 'full'].includes(showUI) ? (
                  <>
                    {showProjectionButtons.square && (
                      <button
                        className="button"
                        onClick={handleOrtho}
                        title="Orthographic"
                      >
                        {squareIcon}
                      </button>
                    )}
                    {showProjectionButtons.cube && (
                      <button
                        className="button"
                        onClick={handleStereo}
                        title="Stereographic"
                      >
                        {cubeIcon}
                      </button>
                    )}
                  </>
                ) : null}
              </div>
            </aside>
          ) : null}
          {['simple', 'advanced', 'full'].includes(showUI) && (
            <CoxeterMatrix
              dimensions={params.dimensions}
              coxeter={params.coxeter}
              mirrors={params.mirrors}
              stellation={params.stellation}
              extended={params.extended}
              space={runtime.space}
              onChange={handleChange}
            />
          )}
        </div>
        <div className="ui-row ui-row-middle">
          <Shape
            runtime={runtime}
            setRuntime={setRuntime}
            showUI={showUI}
            updateParams={updateParams}
          />
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
              <div className="projection">
                <label className="number-label">
                  <span className="number-label">Detail</span>

                  <label className="boolean-label">
                    <Boolean
                      name="adaptative"
                      value={params.adaptative}
                      onChange={handleChange}
                    />
                    Auto
                  </label>
                  <select
                    name="detail"
                    value={runtime.detail}
                    onChange={event =>
                      setRuntime(runtime => ({
                        ...runtime,
                        detail: event.target.value,
                      }))
                    }
                  >
                    {details.map(a => (
                      <option key={a} value={a}>
                        {a
                          .replace(/_/g, ' ')
                          .replace(/./, c => c.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
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
                      {showUI === 'full' && (
                        <Number
                          label={`${i}D FOV`}
                          name={`fov${i}`}
                          step={1}
                          value={params[`fov${i}`]}
                          onChange={handleChange}
                        />
                      )}

                      <label className="number">
                        <span className="number-label">{i}D Projection</span>
                        <select
                          name={`projection${i}`}
                          value={params[`projection${i}`]}
                          onChange={handleRawChange}
                        >
                          {[
                            ...projections.filter(
                              (projection, n) =>
                                (i === 3 &&
                                  runtime.dimensions === 3 &&
                                  runtime.space?.curvature < 0) ||
                                n < 9
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
        </div>
        <div className="ui-row ui-row-bottom">
          {['simple', 'advanced', 'full'].includes(showUI) ? (
            <button
              className="preset-button button"
              onClick={() => setShowPresets(presets => !presets)}
              title="Presets"
            >
              {presetsIcon}
            </button>
          ) : null}

          {['advanced', 'full'].includes(showUI) && (
            <aside className="parameters">
              {runtime.space?.curvature ? (
                <label className="boolean-label">
                  Normalize
                  <Boolean
                    name="curve"
                    value={params.curve}
                    onChange={handleChange}
                  />
                </label>
              ) : null}
              <Number
                name="sizeVertex"
                label="Vertices"
                min={0}
                step={1}
                value={params.sizeVertex}
                toggler={params.drawVertex}
                togglerName="drawVertex"
                onChange={handleChange}
              />
              <Number
                name="sizeEdge"
                label="Edges"
                min={0}
                step={1}
                value={params.sizeEdge}
                toggler={params.drawEdge}
                togglerName="drawEdge"
                onChange={handleChange}
              />
              <label className="boolean-label">
                Faces
                <Boolean
                  name="drawFace"
                  value={params.drawFace}
                  onChange={handleChange}
                />
              </label>
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
              {window.location.search.includes('debug') &&
                showUI === 'full' && (
                  <>
                    <label className="select-label">
                      Easing
                      <select
                        name="easing"
                        value={runtime.easing}
                        onChange={handleRawChange}
                      >
                        {easings.map(p => (
                          <option key={p} value={p}>
                            {p
                              .replace(/_/g, ' ')
                              .replace(/\b./g, c => c.toUpperCase())}
                          </option>
                        ))}
                      </select>
                    </label>
                    <Number
                      name="start"
                      label="Start"
                      min={0}
                      step={1}
                      value={params.start}
                      onChange={handleChange}
                    />
                    <Number
                      name="limit"
                      label="Limit"
                      min={0}
                      step={1}
                      value={params.limit}
                      onChange={handleChange}
                    />
                    <Number
                      name="batch"
                      label="Batch"
                      min={0}
                      step={1}
                      value={params.batch}
                      onChange={handleChange}
                    />
                  </>
                )}
            </aside>
          )}

          {showUI === 'empty' ? <div className="spacer" /> : null}
          <button
            className={`space-button button${
              runtime.processing && !runtime.paused ? ' processing' : ''
            }${showUI === 'empty' ? ' empty' : ''}`}
            onClick={handleUI}
          >
            <Space {...(runtime.space || {})} dimensions={runtime.dimensions} />
          </button>
        </div>
      </main>
    </>
  )
}
