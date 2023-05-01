const symbols = {
  active: (
    <>
      <circle cx="16" cy="16" r="14" strokeWidth="2" stroke="currentColor" />
      <circle cx="16" cy="16" r="8" fill="currentColor" />
    </>
  ),
  inactive: (
    <>
      <circle cx="16" cy="16" r="8" fill="currentColor" />
    </>
  ),
  removed: (
    <>
      <circle cx="16" cy="16" r="14" strokeWidth="2" stroke="currentColor" />
    </>
  ),
  custom: (
    <>
      <circle cx="16" cy="16" r="14" strokeWidth="2" stroke="currentColor" />
      <circle cx="16" cy="16" r="8" strokeWidth="2" stroke="currentColor" />
    </>
  ),
}

export default function Node({ index, value, extended, onChange }) {
  const type =
    value === 0
      ? 'inactive'
      : value === 1
      ? 'active'
      : value === -1
      ? 'removed'
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
      removed: -1,
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
