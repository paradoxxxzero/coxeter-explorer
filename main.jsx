import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './explorer/App.jsx'
import './index.css'
import { arrayEquals } from './utils.js'
import { ToddCoxeter } from './explorer/math/toddcoxeter.js'
import { filterParams } from './explorer/params.js'
import { defaultParams } from './explorer/default.js'
// import 'https://greggman.github.io/webgl-lint/webgl-lint.js'

const parseParams = () => {
  const { location } = window
  if (location.hash) {
    try {
      const hash = JSON.parse(atob(location.hash.slice(1)))
      return filterParams({ ...defaultParams, ...hash }).params
    } catch (e) {
      console.warn(e)
      location.hash = ''
    }
  }
  return filterParams(defaultParams).params
}
const syncParams = (params, replace = false) => {
  const hash = '#' + btoa(JSON.stringify(params))
  window.history[replace ? 'replaceState' : 'pushState'](null, null, hash)
}

const AppWithHistory = () => {
  const [params, setParams] = useState(parseParams())
  const popstate = useCallback(
    e => {
      const newParams = parseParams()
      if (newParams) {
        Object.entries(newParams).forEach(([k, v]) => {
          if (Array.isArray(v)) {
            if (arrayEquals(v, params[k])) {
              newParams[k] = params[k]
            }
          }
        })

        setParams(newParams)
      }
    },
    [params]
  )

  const updateParams = useCallback((newParams, full = false) => {
    setParams(params => {
      // Check if there is one new newParams
      if (
        !Object.entries(newParams).filter(([k, v]) => {
          if (Array.isArray(v) && !v._reset) {
            return !arrayEquals(v, params[k])
          }
          return params[k] !== v
        }).length
      ) {
        return params
      }
      const { params: finalParams, badParams } = filterParams(
        full
          ? newParams
          : {
              ...params,
              ...newParams,
            },
        full ? [] : Object.keys(newParams),
        params
      )
      if (!badParams.length) {
        syncParams(
          finalParams,
          Object.keys(newParams).length === 1 && newParams.matrix
        )
      }
      return finalParams
    })
  }, [])

  useEffect(() => {
    window.addEventListener('popstate', popstate)
    return () => {
      window.removeEventListener('popstate', popstate)
    }
  }, [popstate])

  return <App params={params} updateParams={updateParams} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AppWithHistory />
  // </React.StrictMode>
)

window.ToddCoxeter = ToddCoxeter
window.bench = () => {
  const t = performance.now()
  const p = ToddCoxeter({
    gens: 'abcdef',
    subgens: 'c',
    rels: [
      'aa',
      'bb',
      'cc',
      'dd',
      'ee',
      'ff',
      'abababab',
      'acac',
      'bcbcbc',
      'adad',
      'bdbd',
      'cdcdcd',
      'aeae',
      'bebe',
      'cece',
      'dedede',
      'afaf',
      'bfbf',
      'cfcf',
      'dfdf',
      'efefef',
    ],
    limit: 100000,
  })
  console.log(performance.now() - t, p.words.length)
  return p.tc
}
