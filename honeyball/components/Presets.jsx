import { Fragment, useCallback, useState } from 'react'
import { presets } from '../presets'
import Preset from './Preset'

export default function Presets({ onPreset, closePresets }) {
  const [search, setSearch] = useState('')
  const handleSearch = useCallback(e => setSearch(e.target.value), [])

  return (
    <div className="presets-modal">
      <button className="presets-close" onClick={closePresets}>
        X
      </button>
      <input
        className="presets-search"
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
      <div className="presets-list">
        {presets.map(({ type, content, name, params }, i) => (
          <Fragment key={i}>
            {type === 'title' ? (
              <h2>{content}</h2>
            ) : type === 'group' ? (
              <h4>{content}</h4>
            ) : (
              <Preset
                name={name}
                params={params}
                search={search}
                onPreset={onPreset}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
