import { useCallback, useEffect, useState } from 'react'

export const parse = (raw, min, max, step, coxeter) => {
  let valid = true
  let value = 0
  let fraction = null
  const float = parseInt(step) !== parseFloat(step)
  if (coxeter && ['∞', 'inf', 'Infinity'].includes(raw)) {
    raw = '∞'
    value = 0
  } else if (coxeter && raw.endsWith('i')) {
    value = -parseInt(raw.slice(0, -1) || '1')
    raw = `${value === -1 ? '' : -value}i`
  } else if (raw.includes('/')) {
    const [numerator, denominator] = raw.split('/')
    let numeratorRaw
    if (coxeter && numerator.endsWith('i')) {
      value = -parseInt(numerator.slice(0, -1) || '1')
      numeratorRaw = `${value === -1 ? '' : -value}i`
    } else {
      value = numerator === '' ? '' : parseInt(numerator)
      numeratorRaw = `${value}`
    }
    fraction = denominator === '' ? '' : parseInt(denominator)
    raw = `${numeratorRaw}/${isNaN(fraction) ? denominator : fraction}`
  } else if (float) {
    value = raw === '' ? '' : parseFloat(raw)
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
    fraction === '' ||
    fraction === 0 ||
    fraction === 1 ||
    (fraction !== null && fraction < min) ||
    (fraction !== null && fraction > max) ||
    (step % 1 === 0 && fraction % step !== 0) ||
    // Consider x.  as invalid to prevent auto deletion
    (step % 1 !== 0 && raw.endsWith('.'))
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
        ? `${value === -1 ? '' : -value}i` +
          (fraction > 1 ? `/${fraction}` : '')
        : value === 0 && coxeter
        ? '∞'
        : fractionName && fraction > 1
        ? `${value}/${fraction}`
        : `${value}`,
    [coxeter, fraction, fractionName, step, value]
  )

  const [raw, setRaw] = useState(defaultValue)

  useEffect(() => {
    setRaw(defaultValue())
  }, [coxeter, defaultValue, fraction, fractionName, value])

  const [valid, setValid] = useState(true)

  const update = useCallback(
    (newRaw, input = false) => {
      const parsed = parse(newRaw, min, max, step, coxeter)
      setRaw(parsed.raw)
      setValid(parsed.valid)
      if (parsed.valid) {
        onChange(name, parsed.value)
        if (fractionName) {
          onChange(fractionName, parsed.fraction || 1)
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
    if (coxeter && raw === '2') {
      update('∞')
      return
    }
    if (coxeter && raw === '∞') {
      update('i')
      return
    }
    if (coxeter && raw.endsWith('i')) {
      update(`${parseInt(raw.slice(0, -1) || '1') + step}i`)
      return
    }
    if (raw === `${min}`) {
      // pass
    } else if (raw.includes('/')) {
      const [numerator, denominator] = raw.split('/')
      let numeratorRaw
      if (coxeter && numerator.endsWith('i')) {
        const val = -parseInt(numerator.slice(0, -1) || '1') - step
        numeratorRaw = `${-val}i`
      } else {
        const val = numerator === '' ? '' : parseInt(numerator) - step
        numeratorRaw = `${val}`
      }
      update(`${numeratorRaw}/${denominator}`)
    } else {
      const val =
        (parseInt(step) === parseFloat(step)
          ? parseInt(raw)
          : parseFloat(raw)) - step
      if (step > 0 && step < 1) {
        update(val.toFixed(step.toString().split('.')[1].length))
      } else {
        update(val.toString())
      }
    }
  }, [coxeter, min, raw, step, update, valid])

  const handlePlus = useCallback(() => {
    if (!valid) {
      update(coxeter ? '3' : `${min}`)
      return
    }
    if (coxeter && raw === '∞') {
      update('2')
      return
    }
    if (coxeter && raw === 'i') {
      update('∞')
      return
    }

    if (coxeter && raw.endsWith('i')) {
      let real = parseInt(raw.slice(0, -1)) - step
      if (real === 1) {
        real = 'i'
      } else {
        real = `${real}i`
      }
      update(real)
      return
    }
    if (raw === `${max}`) {
      // pass
    } else if (raw.includes('/')) {
      const [numerator, denominator] = raw.split('/')
      let numeratorRaw
      if (coxeter && numerator.endsWith('i')) {
        if (numerator === 'i') {
          update('∞')
          return
        }

        const val = -parseInt(numerator.slice(0, -1) || '1') + step
        numeratorRaw = `${val === -1 ? '' : -val}i`
      } else {
        const val = numerator === '' ? '' : parseInt(numerator) + step
        numeratorRaw = `${val}`
      }
      update(`${numeratorRaw}/${denominator}`)
    } else {
      const val =
        (parseInt(step) === parseFloat(step)
          ? parseInt(raw)
          : parseFloat(raw)) + step
      if (step > 0 && step < 1) {
        update(val.toFixed(step.toString().split('.')[1].length))
      } else {
        update(val.toString())
      }
    }
  }, [coxeter, max, min, raw, step, update, valid])

  const handleChange = event => {
    const raw = event.target.value
    update(raw, true)
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
            style={{
              width: `${
                Math.max(
                  ...[step, raw].map(c => c.toString().replace('.', '').length)
                ) + 0.3
              }ch`,
            }}
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
