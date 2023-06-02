import { Fragment, useCallback } from 'react'
import Value from './Value'
import Link from './Link'
import Node from './Node'

export default function CoxeterMatrix({
  dimensions,
  coxeter,
  mirrors,
  stellation,
  extended,
  onChange,
}) {
  const handleExtend = useCallback(() => {
    const newParams = {
      extended: !extended,
    }

    if (extended) {
      newParams.coxeter = coxeter.map(row => row.slice())
      for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < i - 1; j++) {
          newParams.coxeter[i][j] = 2
          newParams.coxeter[j][i] = 2
        }
      }
    }
    onChange(newParams)
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
  return (
    <aside className="coxeters">
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
            {i > 0 && <Link />}
            <Node
              index={i}
              value={mirrors[i]}
              extended={extended}
              onChange={handleMirrorChange}
            />
            {i < dimensions - 1 && <Link />}
          </Fragment>
        ))}
      </div>
      <div className="coxeter-toggles">
        <button className="button" onClick={handleExtend} title="extended mode">
          {extended ? '▲' : '▼'}
        </button>
      </div>
    </aside>
  )
}
