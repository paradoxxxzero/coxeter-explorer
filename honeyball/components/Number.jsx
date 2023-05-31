import { useCallback, useEffect, useState } from 'react'

export const parse = (raw, min, max, step, allowInfinity) => {
  let valid = true
  let value = 0
  let fraction = 1

  if (['inf', 'Infinity'].includes(raw)) {
    raw = '∞'
  }
  if (raw === '∞' && allowInfinity) {
    value = Infinity
  } else if (raw.includes('/')) {
    const [numerator, denominator] = raw.split('/')
    value = numerator === '' ? '' : +numerator
    fraction = denominator === '' ? '' : +denominator
    if (fraction === 1) {
      raw = `${value}`
    }

    valid = !(
      value === '' ||
      isNaN(value) ||
      value < min ||
      value > max ||
      value % step !== 0 ||
      isNaN(fraction) ||
      fraction < min ||
      fraction > max ||
      fraction % step !== 0
    )
  } else {
    value = raw === '' ? '' : +raw
    valid = !(
      value === '' ||
      isNaN(value) ||
      value < min ||
      value > max ||
      value % step !== 0
    )
  }

  return {
    valid,
    raw,
    value,
    fraction,
  }
}

export default function Number({
  name,
  label,
  min = 0,
  max = Infinity,
  step = 1,
  value,
  allowInfinity,
  fraction,
  fractionName,
  toggler,
  togglerName,
  onChange,
  ...props
}) {
  const defaultValue = useCallback(
    () =>
      value === Infinity && allowInfinity
        ? '∞'
        : fractionName && fraction > 1
        ? `${value}/${fraction}`
        : `${value}`,
    [allowInfinity, fraction, fractionName, value]
  )

  const [raw, setRaw] = useState(defaultValue)

  useEffect(() => {
    setRaw(defaultValue())
  }, [allowInfinity, defaultValue, fraction, fractionName, value])

  const [valid, setValid] = useState(true)

  const update = useCallback(
    newRaw => {
      const parsed = parse(newRaw, min, max, step, allowInfinity)
      setRaw(parsed.raw)
      setValid(parsed.valid)
      if (parsed.valid) {
        onChange(name, parsed.value)
        if (fractionName) {
          onChange(fractionName, parsed.fraction)
        }
      }
    },
    [allowInfinity, fractionName, max, min, name, onChange, step]
  )

  const handleMinus = useCallback(() => {
    if (!valid) {
      update(`${min}`)
      return
    }
    if (raw === '∞') {
      return
    }
    if (raw === `${min}`) {
      allowInfinity && update('∞')
    } else if (raw.includes('/')) {
      update((+raw.split('/')[0] - step).toString())
    } else {
      update((+raw - step).toString())
    }
  }, [allowInfinity, min, raw, step, update, valid])

  const handlePlus = useCallback(() => {
    if (!valid) {
      update(`${min}`)
      return
    }
    if (raw === '∞') {
      allowInfinity && update(`${min}`)
    } else if (raw.includes('/')) {
      update((+raw.split('/')[0] + step).toString())
    } else {
      update((+raw + step).toString())
    }
  }, [allowInfinity, min, raw, step, update, valid])

  const handleChange = event => {
    const raw = event.target.value
    update(raw)
  }

  const handleCheckBoxChange = event => {
    onChange(event.target.name, event.target.checked)
  }

  return (
    <label className={`number ${valid ? 'valid' : 'invalid'}`}>
      {label && <span className="number-label">{label}</span>}
      {togglerName && (
        <input
          type="checkbox"
          name={togglerName}
          checked={toggler}
          onChange={handleCheckBoxChange}
        />
      )}
      {(!togglerName || toggler) && (
        <div className="number-control">
          <input
            type="text"
            name={name}
            value={raw}
            style={{ width: `${raw.length + 0.25}ch` }}
            onChange={handleChange}
            {...props}
          />
          <button
            className="plusminus minus"
            onClick={handleMinus}
            tabIndex={-1}
          >
            −
          </button>
          <button className="plusminus plus" onClick={handlePlus} tabIndex={-1}>
            +
          </button>
        </div>
      )}
    </label>
  )
}
