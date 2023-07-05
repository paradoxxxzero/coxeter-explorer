import { useCallback, useState } from 'react'
import CoxeterDiagram from '../explorer/components/CoxeterDiagram'
import CoxeterMatrix from '../explorer/components/CoxeterMatrix'
import Number from '../explorer/components/Number'
import { normalizeCoxeter } from '../statics'

export default function CoxeterDiagramGenerator() {
  const [params, setParams] = useState({
    dimensions: 5,
    coxeter: [
      [1, 4, 2, 3, 3],
      [4, 1, 3, 2, 2],
      [2, 3, 1, 5, 2],
      [3, 2, 5, 1, 3],
      [3, 2, 2, 3, 1],
    ],
    mirrors: [1, 0, 's', 'ß', 0.5],
    stellation: [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 2, 1],
      [1, 1, 2, 1, 1],
      [1, 1, 1, 1, 1],
    ],
    extended: true,
  })

  const handleChange = useCallback((name, value) => {
    const params = typeof name === 'string' ? { [name]: value } : name

    setParams(oldParams => normalizeCoxeter({ ...oldParams, ...params }))
  }, [])

  return (
    <main>
      <div className="parameters">
        <Number
          name="dimensions"
          label="Dimensions"
          min={2}
          max={9}
          step={1}
          value={params.dimensions}
          onChange={handleChange}
        />
        <CoxeterMatrix
          dimensions={params.dimensions}
          coxeter={params.coxeter}
          mirrors={params.mirrors}
          stellation={params.stellation}
          extended={params.extended}
          onChange={handleChange}
        />
      </div>
      <CoxeterDiagram
        coxeter={params.coxeter}
        mirrors={params.mirrors}
        stellation={params.stellation}
      />
    </main>
  )
}
