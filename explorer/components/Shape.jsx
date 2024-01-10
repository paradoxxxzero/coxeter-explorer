import { Fragment, useCallback } from 'react'
import {
  eyeIcon,
  pauseIcon,
  playIcon,
  eyeOffIcon,
  centerViewIcon,
  coxeterPlaneIcon,
} from '../icons'
import CoxeterDiagram from './CoxeterDiagram'
import { ident } from '../math/matrix'

const icons = n => {
  if (n < 4) {
    return [
      // Vertex
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2"
        />
      </svg>,
      // Edge
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7 2m12 9H5v2h14z" />
      </svg>,
      // Face
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M18 18H6V6h12m0-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
        />
      </svg>,
      // Volume
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38Z"
        />
      </svg>,
    ][n]
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9"
      />
      <text
        x="12"
        y="13.5"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="14"
      >
        {n}
      </text>
    </svg>
  )
}

export default function Shape({ runtime, setRuntime, showUI, updateParams }) {
  const handlePause = useCallback(() => {
    if (runtime.paused && runtime.polytope.size > runtime.limit) {
      updateParams({
        limit: runtime.limit + runtime.start,
      })
    }
    setRuntime(runtime => ({
      ...runtime,
      paused: !runtime.paused,
    }))
  }, [
    runtime.paused,
    runtime.polytope.size,
    runtime.limit,
    runtime.start,
    setRuntime,
    updateParams,
  ])

  const handleHiddenChange = useCallback(
    event => {
      const key = event.target.closest('button').dataset.key
      const keys = key.split(',')
      const shown = !keys.some(k => runtime.hidden.includes(k))
      const hidden = runtime.hidden.filter(v => !keys.includes(v))
      updateParams({
        hidden: shown ? [...hidden, ...keys] : hidden,
      })
    },
    [runtime.hidden, updateParams]
  )
  const handlereciprocationChange = useCallback(
    event => {
      const level = +event.target.closest('button').dataset.key
      updateParams({
        reciprocation: level,
      })
    },
    [updateParams]
  )

  const simple = runtime.polytope.every(subshape => subshape.detail.length < 2)

  const formatCount = count => (isFinite(count) ? count.toLocaleString() : '∞')
  if (showUI === 'empty') {
    return null
  }

  const detail = showUI === 'full' ? 'detail' : 'aggregated'
  return (
    <aside className="shape">
      {runtime.processing ? (
        <div className="buttons">
          {runtime.paused ? (
            <button
              className="iterate button"
              onClick={handlePause}
              title="Resume enumeration"
            >
              {playIcon}
            </button>
          ) : (
            <button
              className="iterate button"
              onClick={handlePause}
              title="Pause enumeration"
            >
              {pauseIcon}
            </button>
          )}
        </div>
      ) : null}
      <div
        className={`shape-info${
          runtime.processing && !runtime.paused ? ' shape-processing' : ''
        }${
          ['advanced', 'full'].includes(showUI) ? ' shape-info-expanded' : ''
        }`}
      >
        {[...runtime.polytope]
          .reverse()
          .filter(level => level)
          .map(level => (
            <Fragment key={`shape-${level.dimensions}`}>
              <div
                className="shape-icon"
                style={{
                  gridRow: `span ${level[detail].length}`,
                }}
              >
                {icons(level.dimensions)}
                {level.dual && !runtime.curve ? (
                  <button
                    className="shape-reciprocation button"
                    data-key={
                      runtime.reciprocation === level.dimensions
                        ? -1
                        : level.dimensions
                    }
                    onClick={handlereciprocationChange}
                  >
                    {runtime.reciprocation === level.dimensions
                      ? coxeterPlaneIcon
                      : centerViewIcon}
                  </button>
                ) : null}
              </div>
              <div
                className="shape-count"
                style={{
                  gridRow: `span ${level[detail].length}`,
                }}
              >
                {level.done || level.processing === undefined
                  ? null
                  : `${level.processing} / `}

                {formatCount(level.count)}
              </div>

              <div
                className={
                  level.dimensions > 0 &&
                  ['advanced', 'full'].includes(showUI) &&
                  level[detail].length > 1
                    ? ' shape-split'
                    : ''
                }
                style={{
                  gridRow: `span ${level[detail].length}`,
                }}
              />

              {['advanced', 'full'].includes(showUI)
                ? level[detail].map(
                    ({ count, coxeter, stellation, mirrors, key }) => (
                      <Fragment key={key}>
                        <div
                          className="shape-count shape-detail-count"
                          title={key}
                        >
                          {!simple && level[detail].length > 1
                            ? formatCount(count)
                            : null}
                        </div>
                        <div>
                          {[1, 2].includes(level.dimensions) ? (
                            <button
                              className="shape-hidden button"
                              data-key={key}
                              title={key}
                              onClick={handleHiddenChange}
                            >
                              {key
                                .split(',')
                                .some(k => runtime.hidden.includes(k))
                                ? eyeOffIcon
                                : eyeIcon}
                            </button>
                          ) : null}
                          <button
                            className="shape-detail-button"
                            disabled={coxeter.length < 2}
                            onClick={() =>
                              updateParams({
                                coxeter,
                                stellation,
                                mirrors,
                                dimensions: coxeter.length,
                                matrix: ident(coxeter.length),
                              })
                            }
                          >
                            <CoxeterDiagram
                              coxeter={coxeter}
                              stellation={stellation}
                              mirrors={mirrors}
                            />
                          </button>
                        </div>
                      </Fragment>
                    )
                  )
                : null}
            </Fragment>
          ))}
      </div>
    </aside>
  )
}
