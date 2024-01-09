import { useEffect, useRef, useState } from 'react'
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
  snubdual: (
    <>
      <circle cx="16" cy="16" r={circleSize - 4} />
      <path d="M 16 0 L 16 32" />
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

export default function Node({ index, value, onChange }) {
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

  return (
    <div className="coxeter-node" title={type} ref={ref}>
      <svg
        className={`coxeter-graphic ${type}`}
        viewBox="0 0 32 32"
        width="1em"
        strokeWidth="2"
        stroke="currentColor"
        fill="black"
        onClick={handleClick}
        onContextMenu={handleMenu}
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
