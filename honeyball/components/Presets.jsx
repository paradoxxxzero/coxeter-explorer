import { Fragment, useCallback, useState } from 'react'
import { defaultParams } from '../../statics'
import { presetsGroups } from '../presets'

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
        {Object.entries(presetsGroups).map(([group, presetsGroup]) => (
          <Fragment key={group}>
            <h2>{group}</h2>
            {Object.entries(presetsGroup).map(([name, presets]) => (
              <Fragment key={name}>
                <h4>{name}</h4>
                <div className="preset-list">
                  {presets
                    .filter(
                      ({ name }) => !search || getNodeText(name).match(search)
                    )
                    .map((preset, i) => (
                      <div
                        key={`${group}-${i}`}
                        className="preset"
                        onClick={() =>
                          onPreset({ ...defaultParams, ...preset.params })
                        }
                      >
                        {preset.name}
                      </div>
                    ))}
                </div>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
