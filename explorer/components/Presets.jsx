import { Fragment, useCallback, useState } from 'react'
import { presets } from '../presets'
import Preset from './Preset'
import { debounce } from '../../utils'
import { authorIcon, backspaceIcon, closeIcon, exportIcon } from '../icons'

export default function Presets({
  open,
  onPreset,
  onExportImage,
  closePresets,
}) {
  const [search, setSearch] = useState('')
  const [rawSearch, setRawSearch] = useState('')
  const handleSearch = useCallback(e => {
    setRawSearch(e.target.value)
    debounce(setSearch(e.target.value), 50)
  }, [])

  return (
    <>
      <div
        className={`presets-overlay ${open ? 'shown' : 'hidden'}`}
        onClick={closePresets}
      />
      <div className={`presets ${open ? 'shown' : 'hidden'}`}>
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
                {backspaceIcon}
              </button>
            </div>
            <div className="presets-actions">
              <a className="presets-action" href="https://florian.mounier.dev/">
                {authorIcon}
              </a>
              <button className="presets-action" onClick={onExportImage}>
                {exportIcon}
              </button>
              <button className="presets-action" onClick={closePresets}>
                {closeIcon}
              </button>
            </div>
          </div>
          <div className="presets-list">
            {presets.map(({ type, content, name, params, subforms }, i) => (
              <Fragment key={i}>
                {type === 'title' ? (
                  <h2>{content}</h2>
                ) : type === 'group' ? (
                  <h4>{content}</h4>
                ) : (
                  <Preset
                    name={name}
                    index={i}
                    params={params}
                    search={search}
                    subforms={subforms}
                    onPreset={onPreset}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
