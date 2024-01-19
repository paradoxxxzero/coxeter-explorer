import { useCallback, useEffect, useState } from 'react'
import CoxeterDiagram from '../explorer/components/CoxeterDiagram'
import CoxeterMatrix from '../explorer/components/CoxeterMatrix'
import { getGroupType } from '../explorer/math/hypermath'
import { normalizeCoxeter } from '../explorer/params'

const diagram = () => {
  const saved = localStorage.getItem('diagram')
  if (saved) {
    return JSON.parse(saved)
  }
  return {
    dimensions: 5,
    coxeter: [
      [1, 4, 2, 3, 3],
      [4, 1, 3, 2, 2],
      [2, 3, 1, 5, 2],
      [3, 2, 5, 1, 3],
      [3, 2, 2, 3, 1],
    ],
    mirrors: [1, 0, 's', 'c', 0.5],
    stellation: [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 2, 1],
      [1, 1, 2, 1, 1],
      [1, 1, 1, 1, 1],
    ],
    extended: true,
  }
}

export default function CoxeterDiagramGenerator() {
  const [groupType, setGroupType] = useState(false)
  const [params, setParams] = useState(diagram)

  const handleChange = useCallback((name, value) => {
    const params = typeof name === 'string' ? { [name]: value } : name
    setParams(oldParams => {
      const newParams = normalizeCoxeter({ ...oldParams, ...params })
      localStorage.setItem('diagram', JSON.stringify(newParams))
      return newParams
    })
  }, [])

  useEffect(() => {
    setGroupType(getGroupType(params.coxeter))
  }, [params])

  return (
    <main>
      <div className="parameters">
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
      {groupType && groupType.type !== 'other' ? (
        <div className="groupType">
          {groupType.description} {groupType.group.join(', ')}{' '}
          <small>({groupType.pairs.map(c => c.join('')).join(', ')})</small>
        </div>
      ) : null}
    </main>
  )
}
