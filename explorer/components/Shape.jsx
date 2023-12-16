import { useCallback, useEffect, useState } from 'react'
import { cogsIcon } from '../icons'
import Shaper from '../workers/shape.worker?worker'
import CoxeterDiagram from './CoxeterDiagram'
const shaper = new Shaper()

const icons = [
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
]
const nIcon = n => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9"
    />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="14"
    >
      {n}
    </text>
  </svg>
)

export default function Shape({ spaceType, shape, full, updateParams }) {
  const [limit, setLimit] = useState(10)
  const [visit, setVisit] = useState({})
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    setLimit(10)
  }, [shape])

  useEffect(() => {
    setProcessing(true)
    shaper.postMessage({
      spaceType,
      shape,
      limit,
    })
  }, [limit, shape, spaceType])

  useEffect(() => {
    const handleShape = ({ data }) => {
      setProcessing(false)
      if (!data.error) {
        setVisit(data)
      } else {
        console.error(data.error)
      }
    }
    shaper.addEventListener('message', handleShape)
    return () => {
      shaper.removeEventListener('message', handleShape)
    }
  }, [])

  const handleIncreaseLimit = useCallback(() => {
    setLimit(limit => limit + 1)
  }, [])

  const simple = Object.values(visit).every(
    subshape => subshape.detail.length < 2
  )
  const needsOrder = Object.values(visit).some(subshape =>
    subshape.detail.some(({ count }) => isNaN(count))
  )

  const formatCount = count =>
    isNaN(count) ? '…' : isFinite(count) ? count.toLocaleString() : '∞'
  return (
    <aside className={`shape${processing ? ' shape-processing' : ''}`}>
      {Object.values(visit)
        .reverse()
        .map(level => (
          <div key={`shape-${level.dimensions}`} className="shape-level">
            {level.dimensions < 4
              ? icons[level.dimensions]
              : nIcon(level.dimensions)}
            <div className="shape-count">{formatCount(level.count)}</div>

            {full && level.dimensions > 0 ? (
              <div
                className={`shape-detail${
                  level.detail.length > 1 ? ' shape-detail-split' : ''
                }`}
              >
                {level.detail.map(
                  ({ count, coxeter, stellation, mirrors }, i) => (
                    <div key={`detail-${i}`} className="shape-detail-line">
                      {simple ? null : (
                        <div className="shape-count">
                          {level.detail.length > 1 ? formatCount(count) : null}
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
      {needsOrder ? (
        <button
          className="increase-limit button"
          onClick={handleIncreaseLimit}
          title={`Increase limit in computation ${2 ** limit} → ${
            2 ** (limit + 1)
          }`}
        >
          {cogsIcon}
        </button>
      ) : null}
    </aside>
  )
}
