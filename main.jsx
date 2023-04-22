import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeGl } from './honeyball/render.js'

const gl = initializeGl()
Object.assign(window, gl)

const defaultParams = {
  dimensions: 4,
  coxeter: [
    [-1, 5, 2, 2],
    [5, -1, 3, 2],
    [2, 3, -1, 4],
    [2, 2, 4, -1],
  ],
  coxeterDiv: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  mirrors: [1, 0, 0, 0],
  extended: true,
  stellation: false,

  order: 10,
  segments: 32,
  curve: true,
  showVertices: false,
  vertexThickness: 75,
  showEdges: true,
  edgeThickness: 25,

  projection: 'stereographic',
  controls: 'orbit',
  ambiance: 'neon',
  msaa: false,
  msaaSamples: 8,
}

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
      const newParams2 = { ...params, ...newParams }
      setParams(newParams2)
      syncParams(newParams2)
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
