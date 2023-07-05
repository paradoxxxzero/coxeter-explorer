import { memo } from 'react'
import CoxeterDiagram from './CoxeterDiagram'

export default memo(function Preset({ name, params, onPreset }) {
  return (
    <div className="preset" onClick={() => onPreset(params)}>
      <span className="preset-name">{name}</span>
      <CoxeterDiagram
        coxeter={params.coxeter}
        mirrors={params.mirrors}
        stellation={params.stellation}
      />
    </div>
  )
})
