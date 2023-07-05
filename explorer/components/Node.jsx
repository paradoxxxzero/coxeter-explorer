import { sign } from '../math'
import { mirrorToType, mirrorTypes } from '../mirrors'

export const dotSize = 6
export const circleSize = 14

export const mirrorSymbols = {
  active: (
    <>
      <circle cx="16" cy="16" r={circleSize} />
      <circle cx="16" cy="16" r={dotSize} fill="currentColor" />
    </>
  ),
  inactive: (
    <>
      <circle cx="16" cy="16" r={dotSize} fill="currentColor" />
    </>
  ),
  snub: (
    <>
      <circle cx="16" cy="16" r={circleSize} />
    </>
  ),
  holosnub: (
    <>
      <circle cx="16" cy="16" r={circleSize} />
      <circle cx="16" cy="16" r={dotSize} />
    </>
  ),
  custom: (
    <>
      <circle cx="16" cy="16" r={circleSize} />
      <path d="M 10 14 L 10 18 L 22 18 L 22 14" />
    </>
  ),
  activeVoid: (
    <>
      <circle cx="16" cy="16" r={circleSize} />
      <path d="M 6 6 L 26 26" />
      <path d="M 6 26 L 26 6" />
    </>
  ),
  void: (
    <>
      <path d="M 10 10 L 22 22" />
      <path d="M 10 22 L 22 10" />
    </>
  ),
}

export default function Node({ index, value, extended, onChange }) {
  const type = mirrorToType(value)

  const handleClick = () => {
    const types = Object.keys(mirrorSymbols)
    const current = types.indexOf(type)
    const next = extended
      ? types[(current + 1) % types.length]
      : type === 'active'
      ? 'inactive'
      : 'active'
    const newValue = mirrorTypes[next]
    onChange(index, newValue)
  }

  const handleWheel = e => {
    const types = Object.keys(mirrorSymbols)
    const current = types.indexOf(type)
    const next = types[(types.length + current + sign(e.deltaY)) % types.length]
    const newValue = mirrorTypes[next]
    onChange(index, newValue)
  }

  return (
    <div className="coxeter-node" title={type}>
      <svg
        className={`coxeter-graphic ${type}`}
        viewBox="0 0 32 32"
        width="1em"
        strokeWidth="2"
        stroke="currentColor"
        fill="black"
        onClick={handleClick}
        onWheel={handleWheel}
      >
        {mirrorSymbols[type]}
      </svg>
      {type === 'custom' && (
        <input
          type="number"
          value={value}
          step=".01"
          style={{ width: `${value.toString().length + 1.5}ch` }}
          onChange={e => onChange(index, e.target.value)}
        />
      )}
    </div>
  )
}
