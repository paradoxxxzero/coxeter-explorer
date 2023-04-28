import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeGl } from './honeyball/render.js'
import { defaultParams, filterParams } from './statics.js'

const gl = initializeGl()
Object.assign(window, gl)

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
  const [params, setParams] = useState(parseParams(defaultParams))
  const popstate = useCallback(() => {
    const newParams = parseParams()
    if (newParams) {
      setParams(newParams)
    }
  }, [])

  const updateParams = useCallback(
    newParams => {
      const finalParams = { ...params, ...newParams }
      setParams(finalParams)
      // console.log('updateParams', finalParams)
      if (
        Object.keys(filterParams(finalParams)).length <
        Object.keys(defaultParams).length
      ) {
        return
      }
      syncParams(finalParams)
    },
    [params]
  )

  useEffect(() => {
    window.addEventListener('popstate', popstate)
    return () => {
      window.removeEventListener('popstate', popstate)
    }
  }, [popstate])

  return <App gl={gl} params={params} updateParams={updateParams} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AppWithHistory />
  // </React.StrictMode>
)

if (import.meta.hot) {
  import.meta.hot.accept('./honeyball/render.js', module => {
    console.debug('Accepting the updated render module!')
  })
}
