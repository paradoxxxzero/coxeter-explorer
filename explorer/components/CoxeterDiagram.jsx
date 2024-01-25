import { useMemo } from 'react'
import { getLinks, getNodes } from '../math/diagram'
import { mirrorSymbols } from './Node'

export default function CoxeterDiagram({ coxeter, stellation, mirrors }) {
  const dimensions = coxeter.length

  const [nodes, links] = useMemo(() => {
    const nodes = getNodes(mirrors, dimensions, coxeter)
    const links = getLinks(dimensions, coxeter, stellation, nodes)
    return [nodes, links]
  }, [mirrors, dimensions, coxeter, stellation])

  return (
    <svg
      className="coxeter-diagram"
      viewBox={`${nodes.xmin} ${nodes.ymin} ${nodes.xmax} ${nodes.ymax}`}
      width={`${nodes.width}em`}
      height={`${nodes.height}em`}
      strokeWidth="2"
      fill="transparent"
      stroke="currentColor"
    >
      {links.map(({ source, target, value, type, start, end, text }) => {
        return (
          <g key={`${source.n}-${target.n}`} className="coxeter-diagram-link">
            <path
              d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
              strokeWidth={type === 'bold' ? '4' : '2'}
              stroke="currentColor"
              strokeDasharray={type === 'dashed' ? '1 1' : ''}
            />
            <text
              style={{ fontSize: '1.25rem' }}
              stroke="none"
              fill="currentColor"
              textAnchor="middle"
              dominantBaseline="middle"
              x={text.x}
              y={text.y}
            >
              {value}
            </text>
          </g>
        )
      })}

      {nodes.map(({ n, type, xtr, ytr }) => (
        <g
          key={n}
          className="coxeter-diagram-node"
          transform={`translate(${xtr} ${ytr})`}
          title={type}
        >
          {mirrorSymbols[type]}
        </g>
      ))}
    </svg>
  )
}
