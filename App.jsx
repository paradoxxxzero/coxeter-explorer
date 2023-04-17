import { Fragment, useCallback, useEffect, useState } from 'react'
import Tiling from './honeyball/tiling.worker?worker'
import {
  changeAmbiance,
  initialize3d,
  plot,
  resetComposerTarget,
  updateMaterials,
  render,
} from './honeyball/render'
import { Vector2 } from 'three'
import { defaultC, getC, setC as globalSetC } from './honeyball/C'
import { ambiances, projections } from './statics'
import { R, setR } from './honeyball/R'
import { range, worker } from './honeyball/utlis'
import { abs, min } from './honeyball/math'

let tiling = new Tiling()
const initialC = { ...(getC() || defaultC) }

export default function App() {
  const [C, _setC] = useState(initialC)
  const [space, setSpace] = useState({ E: '?', N: '?' })

  const setC = useCallback(
    async (newC, sync = true) => {
      const lastOrder = C.order
      const changed = Object.keys(newC).filter(key => newC[key] !== C[key])
      let mustRedraw = C === initialC

      _setC(newC)

      if (
        mustRedraw ||
        ['coxeter', 'coxeterDiv', 'stellation', 'dimensions'].some(key =>
          changed.includes(key)
        )
      ) {
        mustRedraw = true
      }

      globalSetC(newC, sync)
      window.C = newC
      updateMaterials()

      if (changed.includes('ambiance') || mustRedraw) {
        changeAmbiance()
      }
      if (
        changed.includes('msaa') ||
        changed.includes('msaaSamples') ||
        mustRedraw
      ) {
        resetComposerTarget()
      }

      if (
        mustRedraw ||
        ['mirrors', 'order'].some(key => changed.includes(key))
      ) {
        if (changed.includes('order') && R.ranges[newC.order - 1]) {
          plot(R.ranges[newC.order - 1])
          render()
        } else {
          const startOrder = changed.includes('order') ? lastOrder : 0

          for (let i = startOrder; i < newC.order; i++) {
            const {
              R: newR,
              vertices,
              edges,
            } = await worker(tiling, {
              C: newC,
              order: i,
            })

            if (i === 0) {
              setR({ ...newR, ranges: {} })
              window.R = R
              setSpace({
                E: R.curvature === 0 ? '𝔼' : R.curvature > 0 ? '𝕊' : 'ℍ',
                N: C.dimensions - abs(R.curvature),
              })
              updateMaterials()
            }

            if (vertices.length || edges.length) {
              const fromVertices = R.vertices.length
              R.vertices = R.vertices.concat(vertices)
              const toVertices = R.vertices.length
              const fromEdges = R.edges.length
              R.edges = R.edges.concat(edges)
              const toEdges = R.edges.length

              R.ranges[i] = {
                vertices: [fromVertices, toVertices],
                edges: [fromEdges, toEdges],
              }
              plot(R.ranges[i], changed.includes('dimensions') && i === 0)
              render()
            } else {
              R.ranges[i] = {
                vertices: [R.vertices.length, R.vertices.length],
                edges: [R.edges.length, R.edges.length],
              }
            }
          }
        }
      } else if (
        [
          'edges',
          'vertices',
          'vertexThickness',
          'edgeThickness',
          'projection',
          'curve',
          'segments',
        ].some(key => changed.includes(key))
      ) {
        plot(true, changed.includes('segments') || changed.includes('curve'))
      }

      render()
    },
    [C]
  )

  const [gl, setGl] = useState()
  useEffect(() => {
    globalSetC(initialC)
    const { renderer, camera, composer, controls, first } = initialize3d()
    controls.enabled = initialC.controls === 'orbit'
    if (first) {
      setC(initialC)
    }
    setGl({ renderer, camera, composer, controls })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const size = useCallback(() => {
    if (!gl) return
    const { renderer, camera, composer } = gl
    const subsampling = 1

    const width = window.innerWidth * subsampling
    const height = window.innerHeight * subsampling
    const currentCanvas = renderer.domElement
    if (currentCanvas.width !== width || currentCanvas.height !== height) {
      camera.aspect = width / height
      camera.zoom = Math.min(1, width / height)
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      composer.setSize(width, height)
      const pixelRatio = renderer.getPixelRatio()
      composer.setPixelRatio(pixelRatio)

      const w = width * pixelRatio
      const h = height * pixelRatio
      composer.passes.forEach(pass => {
        if (pass.material?.uniforms?.['resolution']) {
          let cw = w
          let ch = h
          if (pass.material.uniforms['resolution'].value.x <= 1) {
            cw = 1 / cw
            ch = 1 / ch
          }
          pass.material.uniforms['resolution'].value.x = cw
          pass.material.uniforms['resolution'].value.y = ch
        }
        if (pass.resolution) {
          pass.resolution = new Vector2(width, height)
        }
      })

      if (subsampling !== 1) {
        currentCanvas.style.width = null
        currentCanvas.style.height = null
      } else {
        currentCanvas.style.width = width + 'px'
        currentCanvas.style.height = height + 'px'
      }
    }

    render()
  }, [gl])

  useEffect(() => {
    window.addEventListener('resize', size)
    window.addEventListener('orientationchange', size)
    return () => {
      window.removeEventListener('resize', size)
      window.removeEventListener('orientationchange', size)
    }
  }, [size])

  const popstate = useCallback(() => {
    const newC = getC()
    console.log(newC)
    if (newC) {
      setC(newC, false)
    }
  }, [setC])

  useEffect(() => {
    window.addEventListener('popstate', popstate)
    return () => {
      window.removeEventListener('popstate', popstate)
    }
  }, [popstate])

  const handleExtend = useCallback(() => {
    const newC = { ...C }
    if (C.extended) {
      for (let i = 0; i < newC.dimensions; i++) {
        for (let j = 0; j < i - 1; j++) {
          newC.coxeter[i][j] = 2
          newC.coxeter[j][i] = 2
        }
      }
    }
    newC.extended = !C.extended
    setC(newC)
  }, [C, setC])

  const handleChange = useCallback(
    e => {
      let { name, checked, type, value } = e.target

      if (type === 'checkbox') {
        value = checked
      } else if (type === 'number') {
        value = +value
      }

      const newC = { ...C }
      if (name === 'dimensions') {
        newC.coxeter = new Array(value)
          .fill()
          .map(() => new Array(value).fill(2))
        newC.coxeterDiv = new Array(value)
          .fill()
          .map(() => new Array(value).fill(1))
        newC.mirrors = new Array(value).fill(0)

        for (let i = 0; i < min(C.dimensions, value); i++) {
          for (let j = 0; j < i; j++) {
            newC.coxeter[i][j] = C.coxeter[i][j]
            newC.coxeter[j][i] = C.coxeter[j][i]
          }
          newC.mirrors[i] = C.mirrors[i]
        }
        for (let i = 0; i < value; i++) {
          newC.coxeter[i][i] = -1
        }
      }

      if (name.startsWith('coxeter')) {
        const [i, j] = name
          .split('-')
          .slice(1)
          .map(x => +x)
        const coxeter = C.coxeter.map(x => x.slice())
        coxeter[i][j] = value
        coxeter[j][i] = value
        name = 'coxeter'
        value = coxeter
      }

      if (name.startsWith('mirror')) {
        const [i] = name
          .split('-')
          .slice(1)
          .map(x => +x)
        name = 'mirrors'
        value = C.mirrors.map((x, j) => ((j === i ? value : x) ? 1 : 0))
        if (value.reduce((a, b) => a + b, 0) === 0) {
          value[0] = 1
        }
      }

      newC[name] = value

      setC(newC)
    },
    [C, setC]
  )

  const handleControls = useCallback(() => {
    const newC = { ...C }
    newC.controls = C.controls === 'orbit' ? 'free' : 'orbit'
    setC(newC)
    const { controls } = gl
    controls.enabled = newC.controls === 'orbit'
  }, [C, gl, setC])

  return (
    <>
      <button id="controls" onClick={handleControls}>
        {C.controls === 'orbit' ? '⇹' : '↭'}
      </button>
      <button id="space">
        {space.E}
        <sup>{space.N}</sup>
      </button>
      <aside className="controls">
        <label>
          Order
          <input
            type="number"
            name="order"
            min="1"
            max="32"
            step="1"
            value={C.order}
            onChange={handleChange}
          />
        </label>
        <label>
          Segments
          <input
            type="checkbox"
            name="curve"
            checked={C.curve}
            onChange={handleChange}
          />
          {C.curve ? (
            <input
              type="number"
              name="segments"
              min="1"
              step="1"
              value={C.segments}
              onChange={handleChange}
            />
          ) : null}
        </label>
        <label>
          Dimensions
          <input
            type="number"
            name="dimensions"
            min="3"
            max="5"
            step="1"
            value={C.dimensions}
            onChange={handleChange}
          />
        </label>
        <label>
          Projection
          <select
            name="projection"
            value={C.projection}
            onChange={handleChange}
          >
            {projections.map(p => (
              <option key={p} value={p}>
                {p.replace(/_/g, ' ').replace(/./, c => c.toUpperCase())}
              </option>
            ))}
          </select>
        </label>
        <label>
          Vertices
          <input
            type="checkbox"
            name="vertices"
            checked={C.vertices}
            onChange={handleChange}
          />
          {C.vertices ? (
            <input
              type="number"
              name="vertexThickness"
              min="0"
              step="1"
              value={C.vertexThickness}
              onChange={handleChange}
            />
          ) : null}
        </label>
        <label>
          Edges
          <input
            type="checkbox"
            name="edges"
            checked={C.edges}
            onChange={handleChange}
          />
          {C.edges ? (
            <input
              type="number"
              name="edgeThickness"
              min="0"
              step="1"
              value={C.edgeThickness}
              onChange={handleChange}
            />
          ) : null}
        </label>
        <label>
          <input
            type="checkbox"
            name="stellation"
            checked={C.stellation}
            onChange={handleChange}
          />
          Stellation
        </label>
        <label>
          Ambiance
          <select name="ambiance" value={C.ambiance} onChange={handleChange}>
            {Object.keys(ambiances).map(a => (
              <option key={a} value={a}>
                {a.replace(/_/g, ' ').replace(/./, c => c.toUpperCase())}
              </option>
            ))}
          </select>
        </label>
        <label>
          MSAA
          <input
            type="checkbox"
            name="msaa"
            checked={C.msaa}
            onChange={handleChange}
          />
          {C.msaa ? (
            <input
              type="number"
              name="msaaSamples"
              min="0"
              step="1"
              value={C.msaaSamples}
              onChange={handleChange}
            />
          ) : null}
        </label>
      </aside>
      <aside className="coxeters">
        {range(C.dimensions).map(i => (
          <Fragment key={i}>
            {i > 0 && (
              <div className="number">
                {range(i).map(
                  j =>
                    (!C.extended || i === j + 1) && (
                      <label key={j}>
                        <input
                          type="number"
                          name={`coxeter-${i}-${j}`}
                          min="2"
                          step="1"
                          value={C.coxeter[i][j]}
                          onChange={handleChange}
                        />
                        {C.stellation && (
                          <div className="stellation">
                            <span className="divisor"> / </span>
                            <input
                              type="number"
                              name={`coxeter-${i}-${j}-div`}
                              min="1"
                              step="1"
                              value={C.coxeterDiv[i][j]}
                              onChange={handleChange}
                            />
                          </div>
                        )}
                      </label>
                    )
                )}
              </div>
            )}

            <label className="mirror">
              {i > 0 && <span className="coxeter">——</span>}
              <input
                type="checkbox"
                name={`mirror-${i}`}
                checked={!!C.mirrors[i]}
                onChange={handleChange}
              />
              {i < C.dimensions - 1 && <span className="coxeter">——</span>}
            </label>
          </Fragment>
        ))}
        <button onClick={handleExtend}>{C.extended ? 'v' : '^'}</button>
      </aside>
    </>
  )
}
