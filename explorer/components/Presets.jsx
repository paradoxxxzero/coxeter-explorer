import { Fragment, useCallback, useState } from 'react'
import { presets } from '../presets'
import Preset from './Preset'
import { debounce } from '../../utils'

const backspaceIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M7.95 19L3 12l4.95-7H21v14H7.95Zm3.45-3l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"
    />
  </svg>
)
const authorIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"
    />
  </svg>
)
const exportIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6m-1 1.5L18.5 9H13m-4.07 3.22H16v7.07l-2.12-2.12L11.05 20l-2.83-2.83l2.83-2.82"
    />
  </svg>
)
const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
    />
  </svg>
)

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
