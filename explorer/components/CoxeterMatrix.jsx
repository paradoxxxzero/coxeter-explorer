import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import Value from './Value'
import Link from './Link'
import Node from './Node'
import { min } from '../math'

const getType = (coxeter, i) =>
  coxeter[i].some((m, j) => j < i && m < 0)
    ? 'dashed'
    : coxeter[i].some((m, j) => j < i && m === 0)
    ? 'bold'
    : 'solid'

export default function CoxeterMatrix({
  dimensions,
  coxeter,
  mirrors,
  stellation,
  extended,
  onChange,
}) {
  const [scale, setScale] = useState(1)
  const ref = useRef()

  const handleExtend = useCallback(() => {
    onChange('extended', !extended)

    if (extended) {
      const coxeter_ = coxeter.map(row => row.slice())
      for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < i - 1; j++) {
          coxeter_[i][j] = 2
          coxeter_[j][i] = 2
        }
      }
      onChange('coxeter', coxeter_)
    }
  }, [extended, onChange, coxeter, dimensions])

  const handleChange = useCallback(
    (name, value) => {
      if (name.startsWith('coxeter')) {
        const [i, j] = name
          .split('-')
          .slice(1)
          .map(x => +x)
        const newCoxeter = coxeter.map(x => x.slice())
        newCoxeter[i][j] = value
        newCoxeter[j][i] = value
        onChange('coxeter', newCoxeter)
      }

      if (name.startsWith('stellation')) {
        const [i, j] = name
          .split('-')
          .slice(1)
          .map(x => +x)
        const newStellation = stellation.map(x => x.slice())
        newStellation[i][j] = value
        newStellation[j][i] = value
        onChange('stellation', newStellation)
      }
    },
    [coxeter, onChange, stellation]
  )

  const handleMirrorChange = useCallback(
    (index, value) => {
      const newMirrors = mirrors.slice()
      newMirrors[index] = value
      onChange('mirrors', newMirrors)
    },
    [mirrors, onChange]
  )

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current) {
        return
      }
      const newScale = min(
        1,
        (window.innerWidth - 125) / ref.current.offsetWidth
      )
      setScale(newScale)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [dimensions])

  return (
    <aside
      className="coxeters"
      style={scale === 1 ? undefined : { transform: `scale(${scale})` }}
      ref={ref}
    >
      <div className="coxeter-matrix">
        {[...Array(dimensions).keys()].map(i => (
          <Fragment key={i}>
            {i > 0 && (
              <div className="coxeter-column">
                {[...Array(i).keys()].map(
                  j =>
                    (extended || i === j + 1) && (
                      <Value
                        i={i}
                        j={j}
                        value={coxeter[i][j]}
                        stellation={stellation[i][j]}
                        key={`${i}x${j}`}
                        onChange={handleChange}
                      />
                    )
                )}
              </div>
            )}
            {i > 0 && <Link type={getType(coxeter, i)} />}
            <Node index={i} value={mirrors[i]} onChange={handleMirrorChange} />
            {i < dimensions - 1 && <Link type={getType(coxeter, i + 1)} />}
          </Fragment>
        ))}
      </div>
      <div className="coxeter-toggles">
        {dimensions > 2 && (
          <button
            className="button"
            onClick={() => onChange('dimensions', dimensions - 1)}
            title="Decrease dimensions"
          >
            −
          </button>
        )}
        {dimensions < 9 && (
          <button
            className="button"
            onClick={() => onChange('dimensions', dimensions + 1)}
            title="Increase dimensions"
          >
            +
          </button>
        )}
        <button className="button" onClick={handleExtend} title="extended mode">
          {extended ? '▲' : '▼'}
        </button>
      </div>
    </aside>
  )
}
