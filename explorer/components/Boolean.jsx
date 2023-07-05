import { useCallback, useLayoutEffect, useRef } from 'react'

export default function Boolean({
  allowNull,
  name,
  value,
  onChange,
  ...props
}) {
  const handleChange = useCallback(
    e => {
      let { name, checked } = e.target
      let newValue
      if (allowNull) {
        newValue = value === false ? true : value ? null : false
      } else {
        newValue = checked
      }
      onChange(name, newValue)
    },
    [allowNull, onChange, value]
  )

  const inputRef = useRef(null)

  useLayoutEffect(() => {
    if (allowNull && inputRef.current) {
      if (value === null) {
        inputRef.current.indeterminate = true
      } else {
        inputRef.current.indeterminate = false
      }
    }
  }, [value, allowNull])

  return (
    <input
      type="checkbox"
      ref={inputRef}
      name={name}
      checked={value || false}
      onChange={handleChange}
    />
  )
}
