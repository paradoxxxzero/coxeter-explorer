import { PI, abs, atan2, cos, max, min, sin, sqrt } from '.'
import { circleSize, dotSize } from '../components/Node'
import { mirrorToType } from '../mirrors'

const baseSize = 32
const textSpacing = 18

export const getNodes = (mirrors, dimensions, coxeter) => {
  const nodes = mirrors.map((mirror, i) => {
    const type = mirrorToType(mirror)
    return {
      n: i,
      type,
      i,
      j: 0,
      r:
        {
          inactive: dotSize,
          dual: dotSize,
          snubDual: circleSize - 4,
          compound: circleSize - 4,
          snubCompound: circleSize - 2,
          void: 1,
        }[type] || circleSize,
    }
  })
  // TODO:
  // 3 3 2
  //   3 3
  //     3
  // TODO: Text anchoring for diagonal
  for (let i = 0; i < dimensions; i++) {
    for (let j = dimensions - 1; j > i + 1; j--) {
      if (coxeter[i][j] !== 2) {
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
    node.xtr = node.x - baseSize / 2
    node.ytr = node.y - baseSize / 2
    xmax = max(xmax, node.x)
    ymax = max(ymax, node.y)
  }
  const margin = 5
  nodes.xmin = -baseSize / 2 - margin
  nodes.ymin = -baseSize / 2 - margin
  nodes.xmax = xmax + baseSize + 2 * margin
  nodes.ymax = ymax + baseSize + 2 * margin
  const l = v => v + max(v - 1, 0)

  nodes.width = l(imax - imin + 1)
  nodes.height = l(jmax - jmin + 1) + 0.5
  return nodes
}

export const getLinks = (dimensions, coxeter, stellation, nodes) => {
  const links = []
  for (let i = 0; i < dimensions; i++) {
    for (let j = i + 1; j < dimensions; j++) {
      if (coxeter[i][j] !== 2) {
        const m = coxeter[i][j]
        const s = stellation[i][j]
        const source = nodes[i]
        const target = nodes[j]
        let value = `${m === 0 ? '∞' : m < 0 ? `${m === -1 ? '' : -m}i` : m}`
        if (s > 1) {
          value += `/${s}`
        }
        if (value === '3') {
          value = ''
        }
        const start = {
          x: source.x,
          y: source.y,
        }
        const end = {
          x: target.x,
          y: target.y,
        }
        const text = {}
        const angle = atan2(end.y - start.y, end.x - start.x)

        const shift = abs(angle) < 1e-6 ? PI / 2 : j - i > 1 ? PI / 2 : -PI / 2

        text.x =
          (start.x + end.x) / 2 +
          (textSpacing + (value.length - 2) * 5) * cos(angle + shift)
        text.y = (start.y + end.y) / 2 + textSpacing * sin(angle + shift)

        start.x += (source.r + 1) * cos(angle)
        start.y += (source.r + 1) * sin(angle)
        end.x -= (target.r + 1) * cos(angle)
        end.y -= (target.r + 1) * sin(angle)

        links.push({
          source,
          target,
          value,
          type: m < 0 ? 'dashed' : m === 0 ? 'bold' : 'solid',
          start,
          end,
          text,
        })
      }
    }
  }
  return links
}
