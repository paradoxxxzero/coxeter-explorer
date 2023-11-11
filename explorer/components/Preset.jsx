import { memo, useEffect, useState } from 'react'
import CoxeterDiagram from './CoxeterDiagram'

const getNodeText = node => {
  if (['string', 'number'].includes(typeof node)) {
    return node
  }
  if (node instanceof Array) {
    return node.map(getNodeText).join('')
  }
  if (typeof node === 'object' && node) {
    return getNodeText(node.props.children)
  }
}
const match = (name, search) => {
  if (typeof name === 'string') {
    return getNodeText(name).toLowerCase().includes(search.toLowerCase())
  }
  return false
}
export default memo(function Preset({
  name,
  params,
  search,
  subforms = [],
  sub = false,
  onPreset,
}) {
  const [visible, setVisible] = useState(true)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!search) {
      setVisible(true)
      setOpen(false)
      return
    }
    if (match(name, search)) {
      setVisible(true)
      return
    }
    if (subforms.length && subforms.some(({ name }) => match(name, search))) {
      setVisible(true)
      setOpen(true)
      return
    }
    setVisible(false)
    setOpen(false)
  }, [name, search, subforms])

  if (!visible) {
    return null
  }

  return (
    <>
      <div
        className={`preset${sub ? ' sub' : ''}`}
        onClick={() => onPreset(params)}
      >
        <div
          className={`preset-header preset-name-${
            subforms.length ? 'button' : 'only'
          }`}
        >
          {subforms.length ? (
            <button
              className={`preset-toggle ${open ? 'open' : 'closed'}`}
              onClick={e => {
                e.stopPropagation()
                setOpen(!open)
              }}
            >
              {open ? '-' : '+'}
            </button>
          ) : null}
          <span className="preset-name">{name}</span>
        </div>
        <CoxeterDiagram
          coxeter={params.coxeter}
          mirrors={params.mirrors}
          stellation={params.stellation}
        />
      </div>
      {open &&
        subforms.map((subform, i) => (
          <Preset
            key={i}
            {...subform}
            sub
            search={search}
            onPreset={onPreset}
          />
        ))}
    </>
  )
})
