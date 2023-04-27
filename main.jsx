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
  stellation: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  mirrors: [1, 0, 0, 0],
  extended: false,
  stellated: false,

  order: 10,
  segments: 32,
  curve: true,
  showVertices: false,
  vertexThickness: 75,
  showEdges: true,
  edgeThickness: 25,

  grouper: 'knuthbendix',
  projection: 'stereographic',
  controls: 'orbit',
  controlsShift: 0,
  ambiance: 'neon',

  fov3: 90,
  fov4: 90,
  msaa: window.devicePixelRatio <= 1,
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
      const finalParams = { ...params, ...newParams }
      setParams(finalParams)
      // console.log('updateParams', finalParams)
      if (
        !finalParams.dimensions ||
        finalParams.coxeter.find(c => c.find(d => !d)) ||
        finalParams.stellation.find(c => c.find(d => !d)) ||
        (finalParams.curve && !finalParams.segments) ||
        (finalParams.showVertices && !finalParams.vertexThickness) ||
        (finalParams.showEdges && !finalParams.edgeThickness) ||
        (finalParams.msaa && !finalParams.msaaSamples) ||
        !finalParams.order
      ) {
        // console.log('invalid params')
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
