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
import { types } from '../../statics'

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

const addHidden = (hidden, key, polytope) => {
  // We add a specific key
  if (!types.includes(key)) {
    const type = key.split(/_/)[0]
    const allkeys = polytope.facets[types.indexOf(type)].parts.map(
      ({ key }) => key
    )

    // If the group is hidden, we add all keys of the group and remove the current
    if (hidden.includes(type)) {
      return hidden.concat(allkeys).filter(k => ![type, key].includes(k))
    }
    // If all keys of the group are hidden, we hide the group also
    if (allkeys.every(k => hidden.includes(k) || k === key)) {
      hidden = hidden.concat(type)
    }
  }
  return hidden.concat(key)
}

const removeHidden = (hidden, key, polytope) => {
  // We remove a specific key
  if (!types.includes(key)) {
    //remove the group if it was hidden
    const type = key.split(/_/)[0]
    hidden = hidden.filter(k => k !== type)
  } else {
    // We remove a group
    // If all specific keys of the group are hidden, we remove them
    const allkeys = polytope.facets[types.indexOf(key)].parts.map(
      ({ key }) => key
    )
    if (allkeys.every(k => hidden.includes(k))) {
      hidden = hidden.filter(k => !allkeys.includes(k))
    }
  }

  return hidden.filter(k => k !== key)
}

export default function Shape({ runtime, setRuntime, showUI, updateParams }) {
  const handlePause = useCallback(() => {
    if (runtime.paused && runtime.polytope?.size > runtime.limit) {
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
    runtime.polytope,
    runtime.limit,
    runtime.start,
    setRuntime,
    updateParams,
  ])

  const handleHiddenChange = useCallback(
    event => {
      const dataset = event.target.closest('button').dataset
      const rank = +dataset.rank
      const key = types[rank]

      const shown = !runtime.hidden.includes(key)

      const hidden = shown
        ? addHidden(runtime.hidden, key, runtime.polytope)
        : removeHidden(runtime.hidden, key, runtime.polytope)

      updateParams({ hidden })
    },
    [runtime.hidden, runtime.polytope, updateParams]
  )
  const handleHiddenKeyChange = useCallback(
    event => {
      const dataset = event.target.closest('button').dataset
      const key = dataset.key

      const shown = !runtime.hidden.includes(key)

      const hidden = shown
        ? addHidden(runtime.hidden, key, runtime.polytope)
        : removeHidden(runtime.hidden, key, runtime.polytope)

      updateParams({ hidden })
    },
    [runtime.hidden, runtime.polytope, updateParams]
  )
  const handleReciprocationChange = useCallback(
    event => {
      const level = +event.target.closest('button').dataset.key
      updateParams({
        reciprocation: level,
      })
    },
    [updateParams]
  )

  if (!runtime.polytope) {
    return <aside className="shape" />
  }
  const simple = runtime.polytope.facets.every(
    subshape => subshape.parts.length < 2
  )

  const formatCount = count => {
    if (!isFinite(count)) {
      return '∞'
    }
    if (count === 0) {
      return runtime.polytope.infinite ? '∞' : ''
    }
    let s = count.toLocaleString()
    if (runtime.polytope.infinite) {
      s += ' (∞)'
    }
    return s
  }

  if (showUI === 'empty') {
    return null
  }

  // const detail = showUI === 'full' ? 'parts' : 'aggregated'
  // TODO: Reaggregate facets
  // const aggregated = polytope.facets[rank].aggregated.find(
  //   ({ coxeter, stellation, mirrors }) =>
  //     arrayEquals(coxeter, subshape.coxeter) &&
  //     arrayEquals(stellation, subshape.stellation) &&
  //     arrayEquals(mirrors, subShapeMirrors)
  // )
  // if (aggregated) {
  //   aggregated.done = aggregated.done && tcParam.done
  //   aggregated.count += tcParam.count
  //   aggregated.key += ',' + key
  // } else {
  //   polytope.facets[rank].aggregated.push({
  //     key,
  //     coxeter: subshape.coxeter,
  //     stellation: subshape.stellation,
  //     mirrors: subShapeMirrors,

  //     count: tcParam.count,
  //     done: tcParam.done,
  //   })
  // }
  return (
    <aside className="shape">
      {!runtime.done ? (
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
        className={`shape-info${runtime.processing ? ' shape-processing' : ''}${
          ['advanced', 'full'].includes(showUI) && !runtime.polytope.fundamental
            ? ' shape-info-expanded'
            : ''
        }`}
      >
        {[...runtime.polytope.facets]
          .reverse()
          .filter(level => level)
          .map(level => (
            <Fragment key={`shape-${level.dimensions}`}>
              <div
                className="shape-icon"
                style={{
                  gridRow: `span ${level.parts.length}`,
                }}
              >
                {icons(level.dimensions)}
                {runtime.polytope.dual && !runtime.curve ? (
                  <button
                    className="shape-reciprocation button"
                    data-key={
                      runtime.reciprocation === level.dimensions
                        ? -1
                        : level.dimensions
                    }
                    onClick={handleReciprocationChange}
                  >
                    {runtime.reciprocation === level.dimensions
                      ? coxeterPlaneIcon
                      : centerViewIcon}
                  </button>
                ) : null}
                {level.dimensions < 3 ? (
                  //   &&
                  // (level.parts.length > 1 ||
                  //     level.fundamental)
                  <button
                    title={types[level.dimensions]}
                    className="shape-hidden button"
                    data-rank={level.dimensions}
                    onClick={handleHiddenChange}
                  >
                    {runtime.hidden.includes(types[level.dimensions])
                      ? eyeOffIcon
                      : eyeIcon}
                  </button>
                ) : null}
              </div>
              <div
                className="shape-count"
                style={{
                  gridRow: `span ${level.parts.length}`,
                }}
              >
                {level.processing && level.processing !== level.count ? (
                  <small>{formatCount(level.processing)} / </small>
                ) : null}
                {formatCount(level.count)}
              </div>

              <div
                className={
                  level.dimensions > 0 &&
                  ['advanced', 'full'].includes(showUI) &&
                  !level.fundamental &&
                  level.parts.length > 1
                    ? ' shape-split'
                    : ''
                }
                style={{
                  gridRow: `span ${level.parts.length}`,
                }}
              />

              {['advanced', 'full'].includes(showUI) &&
              !runtime.polytope.fundamental
                ? level.parts.map(
                    ({ count, coxeter, stellation, mirrors, key }) => (
                      <Fragment key={key}>
                        <div
                          className="shape-count shape-detail-count"
                          title={key}
                        >
                          {!simple && level.parts.length > 1
                            ? formatCount(count)
                            : null}
                        </div>
                        <div
                          className={`shape-view-diagram ${
                            key.startsWith('s') ? ' shape-snub' : ''
                          }`}
                        >
                          {level.dimensions < 3 && level.parts.length > 1 ? (
                            <button
                              className="shape-hidden button"
                              data-key={key}
                              title={key}
                              onClick={handleHiddenKeyChange}
                            >
                              {runtime.hidden.includes(key) ||
                              runtime.hidden.includes(types[level.dimensions])
                                ? eyeOffIcon
                                : eyeIcon}
                            </button>
                          ) : (
                            <div />
                          )}
                          {coxeter && level.count ? (
                            <button
                              className="shape-detail-button"
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
                          ) : null}
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
