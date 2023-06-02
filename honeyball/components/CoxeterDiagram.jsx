import { abs, atan2, cos, max, min, sin, sqrt } from '../math'
import { circleSize, dotSize, mirrorSymbols, mirrorToType } from './Node'

const baseSize = 32

export default function CoxeterDiagram({ coxeter, mirrors, stellation }) {
  const dimensions = coxeter.length

  const nodes = mirrors.map((mirror, i) => {
    const type = mirrorToType(mirror)
    return {
      n: i,
      type,
      i,
      j: 0,
      r: type === 'inactive' ? dotSize : circleSize,
    }
  })
  // TODO:
  // 3 3 2
  //   3 3
  //     3
  // TODO: Text anchoring for diagonal
  for (let i = 0; i < dimensions; i++) {
    for (let j = dimensions - 1; j > i + 1; j--) {
      if (coxeter[i][j] > 2) {
        // Here's a loop from i to j, j stays at same height, i to j form a circle
        const start = i === 0
        const end = j === dimensions - 1
        const middle = !start && !end
        const n = j - i + 1
        const loopRadius = sqrt(n - 1) / 2
        const angle = (2 * Math.PI) / n
        const center = {
          i: nodes[i].i + loopRadius,
          j:
            nodes[i].j +
            (middle ? -loopRadius * sin(((2 + n) / 4) * angle) : 0),
        }

        for (let k = i; k <= j; k++) {
          let o = k - i + (start ? 1 : end ? n / 2 : (2 + n) / 4)
          nodes[k].i = center.i + loopRadius * cos(angle * o)
          nodes[k].j = center.j + loopRadius * sin(angle * o)
        }
        for (let k = j + 1; k < dimensions; k++) {
          nodes[k].i -= j - i
          nodes[k].i += 2 * loopRadius
        }
        i = j - 1
        break
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

  // TODO: Clean mono-branch:
  // o - o - o - o - o
  //         |
  //         o
  //         |
  //         o

  const is = nodes.map(({ i }) => i)
  const js = nodes.map(({ j }) => j)
  const imin = min(...is)
  const imax = max(...is)
  const jmin = min(...js)
  const jmax = max(...js)
  let xmax = 0
  let ymax = 0

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    node.x = (node.i - imin) * 2 * baseSize
    node.y = (node.j - jmin) * 2 * baseSize
    xmax = max(xmax, node.x)
    ymax = max(ymax, node.y)
  }
  const l = v => v + max(v - 1, 0)

  return (
    <svg
      className="coxeter-diagram"
      viewBox={`${-baseSize / 2} ${-baseSize / 2} ${xmax + baseSize} ${
        ymax + baseSize
      }`}
      width={`${l(imax - imin + 1)}em`}
      height={`${l(jmax - jmin + 1)}em`}
      strokeWidth="2"
      fill="transparent"
      stroke="currentColor"
    >
      {nodes.map(({ n, type, x, y, r }) => (
        <g
          key={n}
          className="coxeter-diagram-node"
          transform={`translate(${x - baseSize / 2} ${y - baseSize / 2})`}
          title={type}
        >
          {mirrorSymbols[type]}
        </g>
      ))}
      {links.map(({ source, target, value }) => {
        const start = {
          x: source.x,
          y: source.y,
        }
        const end = {
          x: target.x,
          y: target.y,
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
          <g key={`${source.n}-${target.n}`} className="coxeter-diagram-link">
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
