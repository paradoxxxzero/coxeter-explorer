const dot = 6
const circle = 14

const symbols = {
  active: (
    <>
      <circle cx="16" cy="16" r={circle} />
      <circle cx="16" cy="16" r={dot} fill="currentColor" />
    </>
  ),
  inactive: (
    <>
      <circle cx="16" cy="16" r={dot} fill="currentColor" />
    </>
  ),
  snub: (
    <>
      <circle cx="16" cy="16" r={circle} />
    </>
  ),
  holosnub: (
    <>
      <circle cx="16" cy="16" r={circle} />
      <circle cx="16" cy="16" r={dot} />
    </>
  ),
  custom: (
    <>
      <circle cx="16" cy="16" r={circle} />
      <path d="M 10 14 L 10 18 L 22 18 L 22 14" />
    </>
  ),
}

export default function Node({ index, value, extended, onChange }) {
  const type =
    value === 0
      ? 'inactive'
      : value === 1
      ? 'active'
      : value === 's'
      ? 'snub'
      : value === 'h'
      ? 'holosnub'
      : 'custom'

  const handleClick = () => {
    const types = Object.keys(symbols)
    const current = types.indexOf(type)
    const next = extended
      ? types[(current + 1) % types.length]
      : type === 'active'
      ? 'inactive'
      : 'active'
    const newValue = {
      active: 1,
      inactive: 0,
      snub: 's',
      holosnub: 'h',
      custom: 0.5,
    }[next]
    onChange(index, newValue)
  }

  return (
    <div className="coxeter-node">
      <svg
        className={`coxeter-graphic ${type}`}
        viewBox="0 0 32 32"
        width="1em"
        strokeWidth="2"
        stroke="currentColor"
        onClick={handleClick}
      >
        {symbols[type]}
      </svg>
      {type === 'custom' && (
        <input
          type="number"
          value={value}
          min="0"
          step=".1"
          onChange={e => onChange(index, e.target.value)}
        />
      )}
    </div>
  )
}
