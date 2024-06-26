import { useCallback, useEffect, useMemo, useState } from 'react'

import {
  details,
  envmaps,
  projections,
  spaceLetters,
  textures,
} from '../../statics.js'
import { range } from '../../utils.js'
import { ambiances } from '../ambiances.js'
import { defaultParams } from '../default.js'
import {
  cameraIcon,
  cameraOffIcon,
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
import { expand, factor } from '../math/relators.js'
import { defaultProjection } from '../params.js'
import { presets } from '../presets/index.jsx'
import Boolean from './Boolean'
import CoxeterMatrix from './CoxeterMatrix'
import Number from './Number'
import Presets from './Presets'
import Rotation from './Rotation.jsx'
import Shape from './Shape.jsx'
import Space from './Space'
import { makeBigPng } from '../export.js'

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
    runtime.camera.center()
    updateParams({
      matrix,
      centered: true,
    })
  }, [runtime.dimensions, runtime.camera, updateParams])

  const handleCoxeter = useCallback(() => {
    const matrix = ident(runtime.dimensions)
    matrix._reset = true
    runtime.camera.center()
    updateParams({
      matrix,
      centered: false,
    })
  }, [runtime.dimensions, runtime.camera, updateParams])

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

  const handleCamera = useCallback(
    param => {
      updateRotations('camera', !rotations.camera)
    },
    [rotations.camera, updateRotations]
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
  const handleCleanExtraRels = useCallback(() => {
    if (!runtime.polytope || !params.extrarels) {
      return
    }
    const clean = r => {
      const expanded = expand(r)
      if (!expanded.split('').every(r => runtime.polytope.gens.includes(r))) {
        return r
      }
      return factor(expanded)
    }
    updateParams({
      extrarels: params.extrarels
        .split(',')
        .map(r => clean(r))
        .join(', '),
    })
  }, [params.extrarels, runtime.polytope, updateParams])

  const cleanRels = useMemo(
    () => runtime.polytope?.rels.map(r => factor(r)).join(', '),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [runtime.polytope?.rels.join(',')]
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

    const url = await makeBigPng(runtime, width, height)
    if (url) {
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.style.display = 'none'
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
      if (e.target.tagName === 'INPUT') {
        return
      }
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
              {rotations.maxShift > 1 ? (
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
              ) : null}

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
                <button
                  className="button"
                  onClick={handleCamera}
                  title="Rotate camera"
                >
                  {rotations.camera ? cameraIcon : cameraOffIcon}
                </button>
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
              preview
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

              {showUI === 'full' && (
                <>
                  <label className="boolean-label">
                    CrossSection
                    <Boolean
                      name="crosssection"
                      value={params.crosssection}
                      onChange={handleChange}
                    />
                  </label>
                  {params.crosssection
                    ? range(params.dimensions + 1).map(i => (
                        <div key={i} className="plane">
                          <Number
                            name={`section[${i}]`}
                            label={
                              i === params.dimensions ? 'd' : spaceLetters[i]
                            }
                            min={-Infinity}
                            step={0.1}
                            value={params.section[i]}
                            onChange={(_, s) =>
                              handleChange(
                                'section',
                                params.section.map((v, j) => (i === j ? s : v))
                              )
                            }
                          />
                        </div>
                      ))
                    : null}
                </>
              )}
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
              {(showUI === 'full' ||
                (showUI === 'advanced' && params.extrarels)) &&
              runtime.polytope?.gens.length ? (
                <div className="rels">
                  <label className="number-label">
                    <span>
                      {runtime.polytope.gens
                        .split('')
                        .map(g => (
                          <span className="generator" key={g}>
                            {g}
                            <sub>{runtime.polytope.transforms[g]}</sub>
                          </span>
                        ))
                        .reduce((a, b) => [a, ', ', b])}{' '}
                      / {runtime.polytope.subgens.split('').join(', ')} |{' '}
                    </span>
                    <div
                      data-autosize={
                        params.extrarels || runtime.polytope.extrarels
                      }
                    >
                      <input
                        name="extrarels"
                        size={4}
                        title={cleanRels}
                        placeholder={runtime.polytope.extrarels}
                        value={params.extrarels}
                        onChange={handleRawChange}
                      />
                    </div>
                  </label>
                  {params.extrarels && (
                    <button
                      className="button clean-rels-button"
                      onClick={handleCleanExtraRels}
                      title="Clean"
                    >
                      ^n
                    </button>
                  )}
                </div>
              ) : null}
              <label className="boolean-label">
                Normalize
                <Boolean
                  name="curve"
                  value={params.curve}
                  onChange={handleChange}
                />
              </label>
              {!runtime.hidden.includes('vertex') && (
                <Number
                  name="sizeVertex"
                  label="Vertices"
                  min={0}
                  step={1}
                  value={params.sizeVertex}
                  onChange={handleChange}
                />
              )}
              {!runtime.hidden.includes('edge') && (
                <Number
                  name="sizeEdge"
                  label="Edges"
                  min={0}
                  step={1}
                  value={params.sizeEdge}
                  onChange={handleChange}
                />
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
              {showUI === 'full' && ambiances[params.ambiance]?.envmap && (
                <label className="select-label">
                  Envmap
                  <select
                    name="envmap"
                    value={params.envmap}
                    onChange={handleRawChange}
                  >
                    {envmaps.map(e => (
                      <option key={e} value={e}>
                        {(e || 'default')
                          .replace(/_/g, ' ')
                          .replace(/./, c => c.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              {showUI === 'full' && ambiances[params.ambiance]?.skybox && (
                <label className="select-label">
                  Skybox
                  <select
                    name="skybox"
                    value={params.skybox}
                    onChange={handleRawChange}
                  >
                    {envmaps.map(e => (
                      <option key={e} value={e}>
                        {(e || 'default')
                          .replace(/_/g, ' ')
                          .replace(/./, c => c.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              {showUI === 'full' && ambiances[params.ambiance]?.texture && (
                <label className="select-label">
                  Texture
                  <select
                    name="texture"
                    value={params.texture}
                    onChange={handleRawChange}
                  >
                    {textures.map(e => (
                      <option key={e} value={e}>
                        {(e || 'default')
                          .replace(/_/g, ' ')
                          .replace(/./, c => c.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              {window.location.search.includes('debug') &&
                showUI === 'full' && (
                  <>
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
              runtime.processing ? ' processing' : ''
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
