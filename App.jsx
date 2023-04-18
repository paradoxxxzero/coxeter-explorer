import {
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { defaultC, getC, setC as globalSetC } from './honeyball/C'
import { R, setR } from './honeyball/R'
import { min } from './honeyball/math'
import {
  changeAmbiance,
  initialize3d,
  plot,
  render,
  resetComposerTarget,
  updateMaterials,
} from './honeyball/render'
import Tiling from './honeyball/tiling.worker?worker'
import { range, worker } from './honeyball/utlis'
import { ambiances, projections } from './statics'
import { dragMove, gestureMove, keydown, wheel } from './honeyball/interact'
import interact from 'interactjs'

let tiling = new Tiling()
const initialC = { ...(getC() || defaultC) }

export default function App() {
  const [C, _setC] = useState(initialC)
  const [space, setSpace] = useState({ E: '?', N: '?' })
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState()
  const [showUI, setShowUI] = useState(true)
  const pointers = useRef([])
  const [gl, setGl] = useState()

  useEffect(() => {
    const onWheel = e => {
      if (C.controls === 'orbit') {
        return
      }
      wheel(e)
    }

    document.addEventListener('wheel', onWheel, { passive: false })
    return () => document.removeEventListener('wheel', onWheel)
  }, [C.controls])

  useEffect(() => {
    document.addEventListener('keydown', keydown)
    return () => document.removeEventListener('keydown', keydown)
  }, [])

  useLayoutEffect(() => {
    if (!gl) {
      return
    }

    const pointerdown = e => {
      pointers.current.push(e.pointerId)
    }
    const pointerup = e => {
      pointers.current = pointers.current.filter(id => id !== e.pointerId)
    }

    gl.renderer.domElement.addEventListener('pointerdown', pointerdown)
    gl.renderer.domElement.addEventListener('pointerup', pointerup)
    const handle = interact(gl.renderer.domElement)
      .draggable({
        listeners: {
          move: e => {
            if (C.controls !== 'free') {
              return
            }
            dragMove(e, pointers.current)
          },
        },
      })
      .gesturable({
        onmove: e => {
          if (C.controls !== 'free') {
            return
          }
          gestureMove(e, pointers.current)
        },
      })

    return () => {
      gl.renderer.domElement.removeEventListener('pointerdown', pointerdown)
      gl.renderer.domElement.removeEventListener('pointerup', pointerup)
      handle.unset()
    }
  }, [C.controls, gl])

  const setC = useCallback(
    async (newC, sync = true) => {
      if (processing) {
        setProcessing(false)
        tiling.terminate()
        tiling = new Tiling()
      }
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
            setError(null)
            setProcessing(true)
            let newR, vertices, edges
            try {
              ;({
                R: newR,
                vertices,
                edges,
              } = await worker(tiling, {
                C: newC,
                order: i,
              }))
            } catch (e) {
              setError(e)
              return
            } finally {
              setProcessing(false)
            }

            if (i === 0) {
              setR({ ...newR, ranges: {} })
              window.R = R
              setSpace({
                E: R.curvature === 0 ? '𝔼' : R.curvature > 0 ? '𝕊' : 'ℍ',
                N: C.dimensions - 1,
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
    [C, processing]
  )

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
    size()
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
    <div className={error ? 'error' : ''} title={error}>
      <button id="controls" onClick={handleControls}>
        {C.controls === 'orbit' ? '⇹' : '↭'}
      </button>
      <button
        id="space"
        className={processing ? 'processing' : ''}
        onClick={() => setShowUI(!showUI)}
      >
        {space.E}
        <sup>{space.N}</sup>
      </button>
      {showUI && (
        <aside className="controls">
          <label>
            Order
            <input
              type="number"
              name="order"
              min="1"
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
      )}
      {showUI && (
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
          <button id="extend" onClick={handleExtend}>
            {C.extended ? '⮟' : '⮝'}
          </button>
        </aside>
      )}
    </div>
  )
}
