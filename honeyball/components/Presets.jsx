import { defaultParams } from '../../statics'
import { presetsGroups } from '../presets'

export default function Presets({ onPreset, closePresets }) {
  return (
    <div className="presets-modal">
      <button className="presets-close" onClick={closePresets}>
        X
      </button>
      <input className="presets-search" type="text" placeholder="Search" />
      <div className="presets-list">
        {Object.entries(presetsGroups).map(([group, presets]) => (
          <div key={group} className="presets-group">
            <h3>{group}</h3>
            <div className="preset-list">
              {presets.map(preset => (
                <div
                  key={preset.coxeter}
                  className="preset"
                  onClick={() =>
                    onPreset({ ...defaultParams, ...preset.params })
                  }
                >
                  {preset.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
