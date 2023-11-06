import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './explorer/App.jsx'
import './index.css'
import { defaultParams, filterParams } from './statics.js'

const parse = s => {
  const replacer = (k, v) => {
    if (v === 'Infinity') return Infinity
    return v
  }
  return JSON.parse(s, replacer)
}

const stringify = o => {
  const replacer = (k, v) => {
    if (v === Infinity) return 'Infinity'
    return v
  }
  return JSON.stringify(o, replacer)
}

const parseParams = (def = null) => {
  const { location } = window
  if (location.hash) {
    try {
      const hash = parse(atob(location.hash.slice(1)))
      return hash
    } catch (e) {
      console.warn(e)
      location.hash = ''
    }
  }
  return def
}
const syncParams = params => {
  window.history.pushState(null, null, '#' + btoa(stringify(params)))
}

const arrayEquals = (a, b) => {
  if (a.length !== b.length) return false
  return a.every((v, i) =>
    Array.isArray(v) ? arrayEquals(v, b[i]) : v === b[i]
  )
}

const AppWithHistory = () => {
  const [params, setParams] = useState(parseParams(defaultParams))
  const popstate = useCallback(() => {
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
  }, [params])

  const updateParams = useCallback(newParams => {
    setParams(params => {
      // Check if there is one new newParams
      if (
        !Object.entries(newParams).filter(([k, v]) => {
          if (Array.isArray(v)) {
            return !arrayEquals(v, params[k])
          }
          return params[k] !== v
        }).length
      ) {
        return params
      }
      const { params: finalParams, badParams } = filterParams({
        ...params,
        ...newParams,
      })
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

if (import.meta.hot) {
  import.meta.hot.accept('./explorer/render.js', module => {
    console.debug('Accepting the updated render module!')
  })
}
