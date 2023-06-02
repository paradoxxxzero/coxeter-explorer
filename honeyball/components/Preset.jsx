import { useEffect, useMemo, useState } from 'react'
import { defaultParams, filterParams } from '../../statics'
import CoxeterDiagram from './CoxeterDiagram'

const getNodeText = node => {
  if (['string', 'number'].includes(typeof node)) {
    return node
  }
  if (node instanceof Array) {
    return node.map(getNodeText).join('')
  }
  if (typeof node === 'object' && node) {
    return getNodeText(node.props.children)
  }
}

export default function Preset({ name, params, search, onPreset }) {
  const fullParams = useMemo(
    () => filterParams({ ...defaultParams, ...params }).params,
    [params]
  )
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    setDisplay(
      !search || getNodeText(name).toLowerCase().includes(search.toLowerCase())
    )
  }, [name, search])

  // const [spaceType, setSpaceType] = useState(null)
  // useEffect(() => {
  //   // setTimeout(() => {
  //   setSpaceType(getSpaceType(coxeterToGram(params.coxeter, params.stellation)))
  //   // }, 1000)
  // }, [params.coxeter, params.stellation])
  return display ? (
    <div className="preset" onClick={() => onPreset(fullParams)}>
      {/* <span className="preset-space">
        {spaceType ? (
          <Space type={spaceType} dimensions={params.dimensions} />
        ) : null}
      </span> */}
      <pre>{fullParams.coxeter.map((row, i) => row.join(' ')).join('\n')}</pre>
      <CoxeterDiagram
        coxeter={fullParams.coxeter}
        mirrors={fullParams.mirrors}
        stellation={fullParams.stellation}
      />
      <span className="preset-name">{name}</span>
    </div>
  ) : null
}
