import { useCallback, useEffect, useState } from 'react'
import { pauseIcon, playIcon, stopIcon } from '../icons'
import Shaper from '../workers/shape.worker?worker'
import CoxeterDiagram from './CoxeterDiagram'

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

export default function Shape({ space, shape, full, updateParams }) {
  const [iteration, setIteration] = useState(0)
  const [visit, setVisit] = useState({})
  const [processing, setProcessing] = useState(false)
  const [paused, setPaused] = useState(false)
  const [shaper, setShaper] = useState(() => new Shaper())

  useEffect(() => {
    setIteration(0)
  }, [shape])

  useEffect(() => {
    if (!shape || iteration < 0) {
      return
    }
    setProcessing(true)
    shaper.postMessage({
      space,
      shape,
      first: iteration === 0,
    })
  }, [iteration, shape, shaper, space])

  useEffect(() => {
    const handleShape = ({ data }) => {
      if (!data.error) {
        if (data.done) {
          setProcessing(false)
        } else if (!paused) {
          setIteration(iteration => iteration + 1)
        }
        setVisit(data.visit)
      } else {
        console.error(data.error)
      }
    }
    shaper.addEventListener('message', handleShape)
    return () => {
      shaper.removeEventListener('message', handleShape)
    }
  }, [shaper, paused])

  const handlePause = useCallback(() => {
    setPaused(paused => !paused)
  }, [])

  useEffect(() => {
    if (!paused) {
      setIteration(iteration => iteration + 1)
    }
  }, [paused])

  const handleStop = useCallback(() => {
    shaper.terminate()
    setProcessing(false)
    setShaper(new Shaper())
    setIteration(-1)
  }, [shaper])

  const simple = Object.values(visit).every(
    subshape => subshape.detail.length < 2
  )

  const formatCount = count => (isFinite(count) ? count.toLocaleString() : '∞')

  return (
    <aside
      className={`shape${processing && !paused ? ' shape-processing' : ''}`}
    >
      {Object.values(visit)
        .reverse()
        .map(level => (
          <div key={`shape-${level.dimensions}`} className="shape-level">
            {icons(level.dimensions)}
            <div className="shape-count">
              {formatCount(level.count)}
              {level.done ? null : '…'}
            </div>

            {full && level.dimensions > 0 ? (
              <div
                className={`shape-detail${
                  level.detail.length > 1 ? ' shape-detail-split' : ''
                }`}
              >
                {level.detail.map(
                  ({ count, coxeter, stellation, mirrors, done }, i) => (
                    <div key={`detail-${i}`} className="shape-detail-line">
                      {simple ? null : (
                        <div className="shape-count">
                          {level.detail.length > 1
                            ? formatCount(count) + (done ? '' : '…')
                            : null}
                        </div>
                      )}
                      {level.dimensions > 0 ? (
                        <button
                          className="shape-detail-button"
                          disabled={level.dimensions < 2}
                          onClick={() =>
                            updateParams({
                              coxeter,
                              stellation,
                              mirrors,
                              dimensions: level.dimensions,
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
                  )
                )}
              </div>
            ) : null}
          </div>
        ))}
      {processing ? (
        <div className="buttons">
          {paused ? (
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
          <button
            className="iterate button"
            onClick={handleStop}
            title="Stop enumeration"
          >
            {stopIcon}
          </button>
        </div>
      ) : null}
    </aside>
  )
}
