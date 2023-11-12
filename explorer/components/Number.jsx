import { useCallback, useEffect, useState } from 'react'

export const parse = (raw, min, max, step, coxeter) => {
  let valid = true
  let value = 0
  let fraction = 1

  if (coxeter && ['∞', 'inf', 'Infinity'].includes(raw)) {
    raw = '∞'
    value = 0
  } else if (coxeter && raw.endsWith('i')) {
    const realRaw = raw.slice(0, -1)
    const real = realRaw === '' ? 1 : parseInt(realRaw)
    value = -real
    raw = `${value === -1 ? '' : -value}i`
  } else if (raw.includes('/')) {
    const [numerator, denominator] = raw.split('/')
    value = numerator === '' ? '' : parseInt(numerator)
    fraction = denominator === '' ? '' : parseInt(denominator)
    if (fraction === 1) {
      raw = `${value}`
    } else {
      raw = `${value}/${fraction}`
    }
  } else {
    value = raw === '' ? '' : parseInt(raw)
  }

  valid = !(
    (coxeter && value === 1) ||
    value === '' ||
    isNaN(value) ||
    value < min ||
    value > max ||
    (step % 1 === 0 && value % step !== 0) ||
    isNaN(fraction) ||
    fraction < min ||
    fraction > max ||
    (step % 1 === 0 && fraction % step !== 0)
  )

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
  coxeter,
  fraction,
  fractionName,
  toggler,
  togglerName,
  onChange,
  ...props
}) {
  if (coxeter) {
    min = -Infinity
  }
  const defaultValue = useCallback(
    () =>
      value < 0 && coxeter
        ? `${value === -1 ? '' : -value}i`
        : value === 0 && coxeter
        ? '∞'
        : fractionName && fraction > 1
        ? `${value}/${fraction}`
        : `${value}`,
    [coxeter, fraction, fractionName, value]
  )

  const [raw, setRaw] = useState(defaultValue)

  useEffect(() => {
    setRaw(defaultValue())
  }, [coxeter, defaultValue, fraction, fractionName, value])

  const [valid, setValid] = useState(true)

  const update = useCallback(
    newRaw => {
      const parsed = parse(newRaw, min, max, step, coxeter)
      setRaw(parsed.raw)
      setValid(parsed.valid)
      if (parsed.valid) {
        onChange(name, parsed.value)
        if (fractionName) {
          onChange(fractionName, parsed.fraction)
        }
      }
    },
    [coxeter, fractionName, max, min, name, onChange, step]
  )

  const handleMinus = useCallback(() => {
    if (!valid) {
      update(coxeter ? '3' : `${min}`)
      return
    }
    if (coxeter) {
      if (raw === '2') {
        update('∞')
        return
      }
      if (raw === '∞') {
        update('i')
        return
      }
      if (raw.endsWith('i')) {
        const realRaw = raw.slice(0, -1)
        let real = (realRaw === '' ? 1 : parseInt(realRaw)) + 1
        update(`${real}i`)
        return
      }
    }
    if (raw === `${min}`) {
      // pass
    } else if (raw.includes('/')) {
      update((parseInt(raw).split('/')[0] - step).toString())
    } else {
      const val = parseInt(raw) - step
      if (step > 0 && step < 1) {
        update(val.toFixed(step.toString().split('.')[1].length))
      } else {
        update(val.toString())
      }
    }
  }, [coxeter, min, raw, step, update, valid])

  const handlePlus = useCallback(() => {
    if (!valid) {
      update(`${min}`)
      return
    }
    if (coxeter) {
      if (raw === '∞') {
        update('2')
        return
      }
      if (raw === 'i') {
        update('∞')
        return
      }
      if (raw.endsWith('i')) {
        const realRaw = raw.slice(0, -1)
        let real = parseInt(realRaw) - 1
        if (real === 1) {
          real = ''
        }
        update(`${real}i`)
        return
      }
    }
    if (raw === `${max}`) {
      // pass
    } else if (raw.includes('/')) {
      update((parseInt(raw).split('/')[0] + step).toString())
    } else {
      const val = parseInt(raw) + step
      if (step > 0 && step < 1) {
        update(val.toFixed(step.toString().split('.')[1].length))
      } else {
        update(val.toString())
      }
    }
  }, [coxeter, max, min, raw, step, update, valid])

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
