import { Fragment, useCallback, useState } from 'react'
import { presets } from '../presets'
import Preset from './Preset'
import { debounce } from '../../utils'

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
export default function Presets({ onPreset, closePresets }) {
  const [search, setSearch] = useState('')
  const [rawSearch, setRawSearch] = useState('')
  const handleSearch = useCallback(e => {
    setRawSearch(e.target.value)
    debounce(setSearch(e.target.value), 50)
  }, [])

  return (
    <div className="presets-modal">
      <div className="presets-header">
        <div className="presets-search">
          <input
            type="text"
            placeholder="Search"
            value={rawSearch}
            onChange={handleSearch}
          />
          <button
            className="presets-clear"
            onClick={() => {
              setSearch('')
              setRawSearch('')
            }}
          >
            ⌫
          </button>
        </div>
        <div className="presets-actions">
          <a className="presets-author" href="https://florian.mounier.dev/">
            ❓
          </a>
          <button className="presets-close" onClick={closePresets}>
            ✖️
          </button>
        </div>
      </div>
      <div className="presets-list">
        {presets.map(({ type, content, name, params }, i) => (
          <Fragment key={i}>
            {type === 'title' ? (
              <h2>{content}</h2>
            ) : type === 'group' ? (
              <h4>{content}</h4>
            ) : !search ||
              getNodeText(name).toLowerCase().includes(search.toLowerCase()) ? (
              <Preset
                name={name}
                params={params}
                search={search}
                onPreset={onPreset}
              />
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
