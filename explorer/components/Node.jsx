import { useEffect, useRef, useState } from 'react'
import { sign } from '../math'
import { mirrorToType, mirrorTypes } from '../mirrors'
import Number from './Number'

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
  dual: (
    <>
      <circle cx="16" cy="16" r={dotSize} fill="currentColor" />
      <path d="M 16 2 L 16 10" />
      <path d="M 16 10 L 16 22" stroke="black" />
      <path d="M 16 22 L 16 30" />
    </>
  ),
  snub: (
    <>
      <circle cx="16" cy="16" r={circleSize} />
    </>
  ),
  snubDual: (
    <>
      <circle cx="16" cy="16" r={circleSize - 4} />
      <path d="M 16 0 L 16 32" />
    </>
  ),
  compound: (
    <>
      <circle cx="16" cy="16" r={circleSize - 4} />
      <circle cx="16" cy="16" r={dotSize - 2} fill="currentColor" />
      <path d="M 16 2 L 16 12" />
      <path d="M 16 12 L 16 20" stroke="black" />
      <path d="M 16 20 L 16 30" />
    </>
  ),
  snubCompound: (
    <>
      <circle cx="16" cy="16" r={circleSize - 2} />
      <circle cx="16" cy="16" r={circleSize - 6} />
      <path d="M 16 0 L 16 32" />
    </>
  ),
  custom: (
    <>
      <circle cx="16" cy="16" r={circleSize} />
      <path d="M 10 14 L 10 18 L 22 18 L 22 14" />
    </>
  ),
  void: (
    <>
      <circle cx="16" cy="16" r={circleSize - 4} />
      <path d="M 4 28 L 28 4" />
    </>
  ),
}

export default function Node({ index, value, boundness, disabled, onChange }) {
  const ref = useRef(null)
  const [menu, setMenu] = useState(false)

  const type = mirrorToType(value)

  const handleClick = () => {
    const next = type === 'inactive' ? 'active' : 'inactive'
    const newValue = mirrorTypes[next]
    onChange(index, newValue)
  }

  const handleWheel = e => {
    const types = Object.keys(mirrorTypes)
    const current = types.indexOf(type)
    const next = types[(types.length + current + sign(e.deltaY)) % types.length]
    const newValue = mirrorTypes[next]
    onChange(index, newValue)
  }

  const handleMenu = e => {
    e.preventDefault()
    setMenu(!menu)
  }

  useEffect(() => {
    const handleMouseUp = e => {
      if (!ref.current.contains(e.target)) {
        setMenu(false)
      }
    }
    if (menu) {
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [menu])

  const boundnessFlag = { ideal: '∞', ultraideal: '⊘' }[boundness]

  return (
    <div className="coxeter-node" title={type} ref={ref}>
      <svg
        className={`coxeter-graphic ${type}`}
        viewBox="0 0 32 32"
        width="1em"
        strokeWidth="2"
        stroke="currentColor"
        fill="black"
        onClick={disabled ? undefined : handleClick}
        onContextMenu={disabled ? undefined : handleMenu}
        onWheel={disabled ? undefined : handleWheel}
      >
        {mirrorSymbols[type]}
      </svg>
      {type === 'custom' && (
        <Number
          name={`custom${index}`}
          step={0.1}
          min={-Infinity}
          value={value}
          onChange={(_, value) =>
            onChange(index, [0, 1].includes(value) ? value.toString() : value)
          }
        />
      )}
      {boundnessFlag ? (
        <div className="boundness-flag" title={boundness}>
          {boundnessFlag}
        </div>
      ) : (
        ''
      )}
      {menu && (
        <div className="coxeter-node-menu">
          {Object.keys(mirrorTypes)

            .filter(subtype => subtype !== type)
            .map(type => (
              <div
                key={type}
                title={type}
                onClick={() => {
                  onChange(index, mirrorTypes[type])
                  setMenu(false)
                }}
              >
                <svg
                  className={`coxeter-graphic ${type}`}
                  viewBox="0 0 32 32"
                  width="1em"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="black"
                  onClick={() => {
                    onChange(index, mirrorTypes[type])
                    setMenu(false)
                  }}
                >
                  {mirrorSymbols[type]}
                </svg>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
