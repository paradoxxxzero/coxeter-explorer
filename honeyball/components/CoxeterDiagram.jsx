import { abs, atan2, ceil, cos, floor, max, min, sin } from '../math'
import { circleSize, dotSize, mirrorSymbols, mirrorToType } from './Node'

const baseSize = 32

export default function CoxeterDiagram({ coxeter, mirrors, stellation }) {
  const dimensions = coxeter.length

  const nodes = mirrors.map((mirror, i) => {
    const type = mirrorToType(mirror)
    return {
      index: i,
      type,
      x: i,
      y: 0,
      r: type === 'inactive' ? dotSize : circleSize,
    }
  })
  const mirrorRels = mirrors.map((mirror, i) =>
    coxeter[i].map((m, j) => (m > 2 ? j : null)).filter(x => x !== null)
  )
  console.log(mirrorRels)
  if (mirrorRels[0].includes(mirrorRels.length - 1)) {
    // Split into two rows
    for (let i = ceil(dimensions / 2); i < dimensions; i++) {
      nodes[i].x = dimensions - i - 1
      nodes[i].y = 1
    }
    if (dimensions % 2 === 1) {
      nodes[floor(dimensions / 2)].y = 0.5
    }
  } else {
    for (let i = 0; i < dimensions; i++) {
      const mirrorRel = mirrorRels[i]
      if (mirrorRel.length === 3 || (mirrorRel.length === 2 && i === 0)) {
        // TODO: debugger
        const prev = mirrorRel.filter(x => x < i).sort()
        const next = mirrorRel.filter(x => x > i).sort()
        const isPrev = prev.length > next.length
        const a = isPrev ? prev[0] : next[1]
        const b = isPrev ? prev[1] : next[0]

        nodes[b].y++
        for (let j = b; j < dimensions; j++) {
          nodes[j].x--
        }
        if (nodes[b].x !== nodes[i].x) {
          for (let j = 0; j < dimensions; j++) {
            if (j !== b && j !== a) {
              nodes[j].y += 0.5
            }
          }
        }
      }
    }
  }

  const links = []
  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < i; j++) {
      if (coxeter[i][j] > 2) {
        const m = coxeter[i][j]
        const s = stellation[i][j]
        if (m === 2) {
          return null
        }
        let value = `${m === Infinity ? '∞' : m}`
        if (s > 1) {
          value += `/${s}`
        }
        if (value === '3') {
          value = ''
        }
        links.push({
          source: nodes[i],
          target: nodes[j],
          value,
        })
      }
    }
  }

  const width = max(...nodes.map(({ x }) => x)) + 1
  const height = max(...nodes.map(({ y }) => y)) + 1

  return (
    <svg
      className="coxeter-diagram"
      viewBox={`0 0 ${(2 * width - 1) * baseSize} ${
        (2 * height - 1) * baseSize
      }`}
      width={`${width}em`}
      height={`${height + 0.5}em`}
      strokeWidth="2"
      fill="transparent"
      stroke="currentColor"
    >
      {nodes.map(({ index, type, x, y, r }) => (
        <g
          key={index}
          className="coxeter-diagram-node"
          transform={`translate(${x * 2 * baseSize} ${y * 2 * baseSize})`}
          title={type}
        >
          {mirrorSymbols[type]}
        </g>
      ))}
      {links.map(({ source, target, value }) => {
        const start = {
          x: source.x * 2 * baseSize + baseSize / 2,
          y: source.y * 2 * baseSize + baseSize / 2,
        }
        const end = {
          x: target.x * 2 * baseSize + baseSize / 2,
          y: target.y * 2 * baseSize + baseSize / 2,
        }
        const text = {}
        if (abs(start.x - end.x) < abs(start.y - end.y)) {
          text.x = (start.x + end.x) / 2 - 8
          text.y = (start.y + end.y) / 2
          text.textAnchor = 'middle'
          text.dominantBaseline = 'middle'
        } else {
          text.x = (start.x + end.x) / 2
          text.y = (start.y + end.y) / 2 + 8
          text.textAnchor = 'middle'
          text.dominantBaseline = 'hanging'
        }
        const angle = atan2(end.y - start.y, end.x - start.x)
        start.x += (source.r + 1) * cos(angle)
        start.y += (source.r + 1) * sin(angle)
        end.x -= (target.r + 1) * cos(angle)
        end.y -= (target.r + 1) * sin(angle)

        return (
          <g
            key={`${source.index}-${target.index}`}
            className="coxeter-diagram-link"
          >
            <path
              d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
              strokeWidth="1"
              stroke="currentColor"
            />
            <text
              {...text}
              style={{ fontSize: '.35em' }}
              stroke="none"
              fill="currentColor"
            >
              {value}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
