import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './explorer/App.jsx'
import './index.css'
import { defaultParams, filterParams } from './statics.js'
import { arrayEquals } from './utils.js'
// import 'https://greggman.github.io/webgl-lint/webgl-lint.js'

const parseParams = (def = null) => {
  const { location } = window
  if (location.hash) {
    try {
      const hash = JSON.parse(atob(location.hash.slice(1)))
      return hash
    } catch (e) {
      console.warn(e)
      location.hash = ''
    }
  }
  return def
}
const syncParams = params => {
  window.history.pushState(null, null, '#' + btoa(JSON.stringify(params)))
}

const AppWithHistory = () => {
  const [params, setParams] = useState(
    parseParams(filterParams(defaultParams).params)
  )
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
        syncParams(finalParams)
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
