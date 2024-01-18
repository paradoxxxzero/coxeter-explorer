import { range } from '../../utils'
import Space from '../components/Space'
import { min } from '../math'
import { ident } from '../math/matrix'
import { defaultProjection } from '../params'
import { defaultParams } from '../default'

const coxeter_ = (...args) => {
  // Simple coxeter shortcut
  if (Array.isArray(args[0])) {
    return { coxeter: args, dimensions: args.length, extended: true }
  }
  const dimensions = args.length + 1
  const coxeter = new Array(dimensions)
    .fill()
    .map((_, i) =>
      new Array(dimensions)
        .fill()
        .map((_, j) =>
          i === j ? 1 : i === j + 1 || j === i + 1 ? args[min(i, j)] : 2
        )
    )
  return { coxeter, dimensions }
}
const stellation_ = (...args) => {
  // Simple stellatoin shortcut
  const dimensions = args.length + 1
  const stellation = new Array(dimensions)
    .fill()
    .map((_, i) =>
      new Array(dimensions)
        .fill()
        .map((_, j) =>
          i === j ? 1 : i === j + 1 || j === i + 1 ? args[min(i, j)] : 1
        )
    )
  return { stellation }
}

const polytope = (coxeterArgs, mirrors, stellationArgs, extra) => {
  const coxeterParams = coxeter_(...coxeterArgs)
  if (stellationArgs && !Array.isArray(stellationArgs)) {
    extra = stellationArgs
    stellationArgs = null
  }
  const { dimensions } = coxeterParams
  const params = {
    ...defaultParams,
    ...coxeterParams,
    drawVertex: dimensions <= 4,
    drawFace: dimensions <= 4,
    curve: dimensions > 3,
    ambiance: 'colorful',
    matrix: ident(dimensions),
    zoom: dimensions <= 3 ? 2 : dimensions > 4 ? 3 : 5,
    centered: true,
    ...Object.fromEntries(
      range(3, dimensions + 1).map(i => [
        `projection${i}`,
        defaultProjection(i, dimensions),
      ])
    ),
    ...(extra || {}),
  }
  if (mirrors) {
    params.mirrors = mirrors
  } else {
    params.mirrors = new Array(dimensions)
      .fill()
      .map((_, i) => (i === 0 ? 1 : 0))
  }
  if (stellationArgs) {
    params.stellation = stellation_(...stellationArgs).stellation
  } else {
    params.stellation = new Array(dimensions)
      .fill()
      .map((_, i) => new Array(dimensions).fill(1))
  }
  return params
}

const withSubforms = preset => {
  return {
    ...preset,
    subforms: Object.entries(getOperators(preset.params.dimensions)).map(
      ([name, mirrors]) => {
        return {
          name: `${name} ${preset.name}`,
          params: {
            ...preset.params,
            mirrors,
          },
        }
      }
    ),
  }
}
const ngonal = {
  0: 'Apeirogonal',
  3: 'Triangular',
  4: 'Square',
  5: 'Pentagonal',
  6: 'Hexagonal',
  7: 'Heptagonal',
  8: 'Octagonal',
  9: 'Nonagonal',
  10: 'Decagonal',
  11: 'Hendecagonal',
  12: 'Dodecagonal',
}
const nmul = {
  0: 'Apeiro',
  3: 'Tri',
  4: 'Tetra',
  5: 'Penta',
  6: 'Hexa',
  7: 'Hepta',
  8: 'Octa',
  9: 'Nona',
  10: 'Deca',
  11: 'Hendeca',
  12: 'Dodeca',
}

const tilings = ([p, q, r]) => {
  const o = m => (m === 0 ? 'infinite' : m)
  const pqr = (p, q, r) =>
    `${nmul[p]}${nmul[q].toLowerCase()}${nmul[r].toLowerCase()}gonal`
  const dipqr = (p, q, r) =>
    `Di${nmul[p].toLowerCase()}gonal ${nmul[q]}${nmul[r].toLowerCase()}gonal`
  const coxeter = r
    ? [
        [1, p, r],
        [p, 1, q],
        [r, q, 1],
      ]
    : [p, q]
  return {
    name: (r
      ? `Di${nmul[q].toLowerCase()}gonal ${nmul[r]}${nmul[
          p
        ].toLowerCase()}gonal`
      : p === q
      ? `${nmul[p]}${ngonal[q].toLowerCase()}`
      : `${ngonal[p]} ${ngonal[q]}`
    ).replace(/aa/g, 'a'),
    params: tiling(coxeter, [1, 0, 0]),
    subforms: [
      {
        name: r ? pqr(r, q, p) : `Truncated Order-${o(q)} ${ngonal[p]}`,
        params: tiling(coxeter, [1, 1, 0]),
      },
      {
        name: r ? dipqr(r, q, p) : `${nmul[q]}${ngonal[p].toLowerCase()}`,
        params: tiling(coxeter, [0, 1, 0]),
      },
      {
        name: r ? pqr(r, p, q) : `Truncated Order-${o(p)} ${ngonal[q]}`,
        params: tiling(coxeter, [0, 1, 1]),
      },
      {
        name: r ? dipqr(p, r, q) : `Order-${o(p)} ${ngonal[q]}`,
        params: tiling(coxeter, [0, 0, 1]),
      },
      {
        name: r
          ? pqr(q, p, r)
          : `Rhombi${nmul[q].toLowerCase()}${ngonal[p].toLowerCase()}`,
        params: tiling(coxeter, [1, 0, 1]),
      },
      {
        name: r
          ? `${nmul[r]}gonally Truncated ${nmul[q]}${nmul[
              p
            ].toLowerCase()}gonal`
          : `Truncated ${nmul[q]}${ngonal[p].toLowerCase()}`,
        params: tiling(coxeter, [1, 1, 1]),
      },
      {
        name: r ? `Snub ${pqr(r, q, p)}` : `Order-${o(q)} Snub ${ngonal[p]}`,
        params: tiling(coxeter, ['s', 's', 's']),
      },
      {
        name: r
          ? `${pqr(r, q, p)} Dual`
          : `Order-${o(p)} ${nmul[q]}akis ${ngonal[q]}`,
        params: tiling(coxeter, ['m', 'm', 0]),
      },
      {
        name: r ? `${dipqr(r, q, p)} Dual` : `Order-${o(p)}-${o(q)} Rhombille`,
        params: tiling(coxeter, [0, 'm', 0]),
      },
      {
        name: r
          ? `${pqr(r, p, q)} Dual`
          : `Order-${o(q)} ${nmul[p]}kis ${ngonal[p]}`,
        params: tiling(coxeter, [0, 'm', 'm']),
      },
      {
        name: r
          ? `${pqr(q, p, r)} Dual`
          : `Deltoidal ${nmul[q]}${ngonal[p].toLowerCase()}`,
        params: tiling(coxeter, ['m', 0, 'm']),
      },
      {
        name: r
          ? `${nmul[r]}gonally Truncated ${nmul[q]}${nmul[
              p
            ].toLowerCase()}gonal Dual`
          : `Order-${o(q)}-${o(p)} Kisrhombille`,
        params: tiling(coxeter, ['m', 'm', 'm']),
      },
      {
        name: r
          ? `Snub ${pqr(r, q, p)} Dual`
          : `Order-${o(p)}-${o(q)} Floret Pentagonal`,
        params: tiling(coxeter, ['b', 'b', 'b']),
      },
    ].map(({ name, params }) => ({ name: name.replace(/aa/g, 'a'), params })),
  }
}

const tiling = (coxeterArgs, mirrors, stellationArgs, extra) => {
  if (stellationArgs && !Array.isArray(stellationArgs)) {
    extra = stellationArgs
    stellationArgs = null
  }
  return {
    ...polytope(coxeterArgs, mirrors, stellationArgs),
    ambiance: 'cathedral',
    sizeEdge: 40,
    sizeVertex: 50,
    drawVertex: false,
    curve: true,
    zoom: 1,
    ...extra,
  }
}
const ehoneycomb = (coxeterArgs, mirrors, stellationArgs, extra) => {
  if (stellationArgs && !Array.isArray(stellationArgs)) {
    extra = stellationArgs
    stellationArgs = null
  }
  return {
    ...polytope(coxeterArgs, mirrors, stellationArgs),
    ambiance: 'neon',
    drawFace: false,
    drawVertex: false,
    centered: false,
    sizeEdge: 20,
    zoom: 2,
    ...extra,
  }
}
const honeycomb = (coxeterArgs, mirrors, stellationArgs, extra) => {
  if (stellationArgs && !Array.isArray(stellationArgs)) {
    extra = stellationArgs
    stellationArgs = null
  }
  const poly = polytope(coxeterArgs, mirrors, stellationArgs)
  const dimensions = poly.matrix.length
  return {
    ...poly,
    ambiance: 'neon',
    drawFace: false,
    drawVertex: false,
    curve: true,
    centered: false,
    sizeEdge: dimensions > 4 ? 15 : 25,
    zoom: 1.5,
    ...extra,
  }
}

const getOperators = d => {
  if (d === 4) {
    return {
      Rectified: [0, 1, 0, 0],
      Truncated: [1, 1, 0, 0],
      Cantellated: [1, 0, 1, 0],
      Cantitruncated: [1, 1, 1, 0],
      Runcitruncated: [1, 1, 0, 1],
      Runcinated: [1, 0, 0, 1],
      Bitruncated: [0, 1, 1, 0],
      Omnitruncated: [1, 1, 1, 1],
      // Birectified: [0, 0, 1, 0],
      // 'Trirectified': [0, 0, 0, 1] ,
      Omnisnub: ['s', 's', 's', 's'],
    }
  }
  if (d === 5) {
    return {
      Rectified: [0, 1, 0, 0, 0],
      Birectified: [0, 0, 1, 0, 0],
      // Trirectified: [0, 0, 0, 1, 0],
      // Quadrirectified: [0, 0, 0, 0, 1],
      Truncated: [1, 1, 0, 0, 0],
      Cantellated: [1, 0, 1, 0, 0],
      Runcinated: [1, 0, 0, 1, 0],
      Stericated: [1, 0, 0, 0, 1],
      Omnitruncated: [1, 1, 1, 1, 1],
      Omnisnub: ['s', 's', 's', 's', 's'],
    }
  }
  if (d === 6) {
    return {
      Rectified: [0, 1, 0, 0, 0, 0],
      Birectified: [0, 0, 1, 0, 0, 0],
      Truncated: [1, 1, 0, 0, 0, 0],
      Bitruncated: [0, 1, 1, 0, 0, 0],
      Tritruncated: [0, 0, 1, 1, 0, 0],
      Cantellated: [1, 0, 1, 0, 0, 0],
      Bicantellated: [0, 1, 0, 1, 0, 0],
      Runcinated: [1, 0, 0, 1, 0, 0],
      Biruncinated: [0, 1, 0, 0, 1, 0],
      Stericated: [1, 0, 0, 0, 1, 0],
      Pentellated: [1, 0, 0, 0, 0, 1],
      Omnitruncated: [1, 1, 1, 1, 1, 1],
      // Omnisnub: ['s', 's', 's', 's', 's', 's'],
    }
  }
  if (d === 7) {
    return {
      Rectified: [0, 1, 0, 0, 0, 0, 0],
      Birectified: [0, 0, 1, 0, 0, 0, 0],
      Truncated: [1, 1, 0, 0, 0, 0, 0],
      Bitruncated: [0, 1, 1, 0, 0, 0, 0],
      Tritruncated: [0, 0, 1, 1, 0, 0, 0],
      Cantellated: [1, 0, 1, 0, 0, 0, 0],
      Bicantellated: [0, 1, 0, 1, 0, 0, 0],
      Runcinated: [1, 0, 0, 1, 0, 0, 0],
      Biruncinated: [0, 1, 0, 0, 1, 0, 0],
      Stericated: [1, 0, 0, 0, 1, 0, 0],
      Pentellated: [1, 0, 0, 0, 0, 1, 0],
      Hexicated: [1, 0, 0, 0, 0, 0, 1],
      Omnitruncated: [1, 1, 1, 1, 1, 1, 1],
      // Omnisnub: ['s', 's', 's', 's', 's', 's', 's'],
    }
  }
  if (d === 8) {
    return {
      Rectified: [0, 1, 0, 0, 0, 0, 0, 0],
      Birectified: [0, 0, 1, 0, 0, 0, 0, 0],
      Truncated: [1, 1, 0, 0, 0, 0, 0, 0],
      Bitruncated: [0, 1, 1, 0, 0, 0, 0, 0],
      Tritruncated: [0, 0, 1, 1, 0, 0, 0, 0],
      Quadritruncated: [0, 0, 0, 1, 1, 0, 0, 0],
      Cantellated: [1, 0, 1, 0, 0, 0, 0, 0],
      Bicantellated: [0, 1, 0, 1, 0, 0, 0, 0],
      Tricantellated: [0, 0, 1, 0, 1, 0, 0, 0],
      Runcinated: [1, 0, 0, 1, 0, 0, 0, 0],
      Biruncinated: [0, 1, 0, 0, 1, 0, 0, 0],
      Triruncinated: [0, 0, 1, 0, 0, 1, 0, 0],
      Stericated: [1, 0, 0, 0, 1, 0, 0, 0],
      Pentellated: [1, 0, 0, 0, 0, 1, 0, 0],
      Hexicated: [1, 0, 0, 0, 0, 0, 1, 0],
      Heptellated: [1, 0, 0, 0, 0, 0, 0, 1],
      Omnitruncated: [1, 1, 1, 1, 1, 1, 1, 1],
      // Omnisnub: ['s', 's', 's', 's', 's', 's', 's', 's'],
    }
  }
  if (d === 9) {
    return {
      Rectified: [0, 1, 0, 0, 0, 0, 0, 0, 0],
      Birectified: [0, 0, 1, 0, 0, 0, 0, 0, 0],
      Truncated: [1, 1, 0, 0, 0, 0, 0, 0, 0],
      Bitruncated: [0, 1, 1, 0, 0, 0, 0, 0, 0],
      Tritruncated: [0, 0, 1, 1, 0, 0, 0, 0, 0],
      Quadritruncated: [0, 0, 0, 1, 1, 0, 0, 0, 0],
      Cantellated: [1, 0, 1, 0, 0, 0, 0, 0, 0],
      Bicantellated: [0, 1, 0, 1, 0, 0, 0, 0, 0],
      Tricantellated: [0, 0, 1, 0, 1, 0, 0, 0, 0],
      Runcinated: [1, 0, 0, 1, 0, 0, 0, 0, 0],
      Biruncinated: [0, 1, 0, 0, 1, 0, 0, 0, 0],
      Triruncinated: [0, 0, 1, 0, 0, 1, 0, 0, 0],
      Stericated: [1, 0, 0, 0, 1, 0, 0, 0, 0],
      Pentellated: [1, 0, 0, 0, 0, 1, 0, 0, 0],
      Hexicated: [1, 0, 0, 0, 0, 0, 1, 0, 0],
      Heptellated: [1, 0, 0, 0, 0, 0, 0, 1, 0],
      Octellated: [1, 0, 0, 0, 0, 0, 0, 0, 1],
      Omnitruncated: [1, 1, 1, 1, 1, 1, 1, 1, 1],
      // Omnisnub: ['s', 's', 's', 's', 's', 's', 's', 's', 's'],
    }
  }
}

export const presets = [
  {
    type: 'title',
    content: (
      <>
        <span style={{ color: 'orange' }}>★</span> Highlights
      </>
    ),
  },
  {
    name: (
      <>
        <Space type="finite" dimensions={4} /> Tesseract
      </>
    ),
    params: polytope([4, 3, 3], [1, 0, 0, 0], {
      drawVertex: true,
      sizeVertex: 40,
      drawFace: true,
      curve: true,
      ambiance: 'neon',
      zoom: 4.2,
    }),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" dimensions={3} /> Heptagonal Tiling
      </>
    ),
    params: tiling([7, 3], [1, 0, 0], {
      drawVertex: false,
      drawFace: true,
      curve: true,
      ambiance: 'neon',
    }),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" subtype="paracompact" dimensions={3} /> Ideal
        Triangles
      </>
    ),
    params: tiling(
      [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      [0, 0, 0],

      {
        drawVertex: false,
        drawFace: true,
        curve: true,
        ambiance: 'neon',
        centered: true,
      }
    ),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" dimensions={4} /> Inverted Alternated Order-5
        Cubic Honeycomb
      </>
    ),
    params: honeycomb(
      [
        [1, 2, 3, 2],
        [2, 1, 3, 2],
        [3, 3, 1, 5],
        [2, 2, 5, 1],
      ],
      [1, 0, 0, 0],

      {
        projection4: 'inverted',
        ambiance: 'disco',
        zoom: 3,
      }
    ),
  },
  {
    name: (
      <>
        <Space type="finite" dimensions={8} /> E6 (1<sub>22</sub>)
      </>
    ),
    params: polytope(
      [
        [1, 3, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2],
        [2, 3, 1, 3, 3, 2],
        [2, 2, 3, 1, 2, 2],
        [2, 2, 3, 2, 1, 3],
        [2, 2, 2, 2, 3, 1],
      ],
      [0, 0, 0, 1, 0, 0],

      {
        sizeVertex: 25,
        sizeEdge: 15,
        ambiance: 'colorful',
        drawVertex: true,
        projection3: 'orthographic',
        projection4: 'orthographic',
        projection5: 'orthographic',
        projection6: 'orthographic',
        zoom: 1,
        centered: false,
      }
    ),
  },
  {
    name: (
      <>
        <Space type="finite" dimensions={8} /> E8 (4<sub>21</sub>)
      </>
    ),
    params: polytope(
      [
        [1, 3, 2, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2, 2],
        [2, 3, 1, 3, 3, 2, 2, 2],
        [2, 2, 3, 1, 2, 2, 2, 2],
        [2, 2, 3, 2, 1, 3, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 2, 3, 1, 3],
        [2, 2, 2, 2, 2, 2, 3, 1],
      ],
      [0, 0, 0, 0, 0, 0, 0, 1],

      {
        sizeVertex: 20,
        sizeEdge: 6,
        curve: false,
        ambiance: 'neon',
        drawVertex: true,
        projection3: 'orthographic',
        projection4: 'orthographic',
        projection5: 'orthographic',
        projection6: 'orthographic',
        projection7: 'orthographic',
        projection8: 'orthographic',
        zoom: 1,
        centered: false,
      }
    ),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" subtype="paracompact" dimensions={4} /> Ideal
        Tetrahedron
      </>
    ),
    params: tiling([3, 3, 6], [1, 0, 0, ''], {
      drawVertex: false,
      drawFace: true,
      curve: true,
      centered: true,
      ambiance: 'pure',
    }),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" subtype="paracompact" dimensions={4} />{' '}
        Horoball
      </>
    ),
    params: tiling([6, 3, 4], [1, 0, 0, ''], {
      drawVertex: false,
      drawFace: true,
      curve: true,
      centered: false,
      ambiance: 'colorful',
    }),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" dimensions={4} /> Order-4 Dodecahedral
        Honeycomb
      </>
    ),
    params: honeycomb([5, 3, 4], [1, 0, 0, 0], {
      zoom: 1.5,
    }),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" subtype="hypercompact" dimensions={4} />{' '}
        Hypercompact Order 3-6 Heptagonal Honeycomb
      </>
    ),
    params: honeycomb([7, 3, 3], [1, 0, 0, 0], {
      zoom: 1.5,
      drawFace: true,
      drawVertex: true,
    }),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" subtype="paracompact" dimensions={4} /> Ideal
        Pentahedron
      </>
    ),
    params: tiling([5, 3, 6], [1, 0, 0, ''], {
      drawVertex: false,
      drawFace: true,
      curve: true,
      centered: true,
      ambiance: 'pure',
      zoom: 1.5,
    }),
  },
  {
    name: (
      <>
        <Space type="finite" dimensions={4} /> Flat Torus
      </>
    ),
    params: polytope([32, 2, 32], [1, 0, 0, 1], {
      drawVertex: false,
      drawFace: false,
      curve: true,
      ambiance: 'neon',
      zoom: 3,
      sizeEdge: 10,
    }),
  },
  {
    name: (
      <>
        <Space type="affine" dimensions={5} /> Tesseract Stack
      </>
    ),
    params: polytope(
      [
        [1, 2, 2, 2, 0],
        [2, 1, 2, 2, 2],
        [2, 2, 1, 2, 2],
        [2, 2, 2, 1, 2],
        [0, 2, 2, 2, 1],
      ],
      [1, 1, 1, 1, 0],

      {
        drawVertex: false,
        drawFace: true,
        ambiance: 'neon',
        sizeEdge: 20,
        projection4: 'sterographic',
      }
    ),
  },
  {
    name: (
      <>
        <Space
          type="hyperbolic"
          subtype="hypercompact"
          order={2}
          dimensions={4}
        />{' '}
        Ultra-Hyperbolic Surface (Anti-de Sitter Ads3)
      </>
    ),
    params: polytope([-1, 2, -1], [1, 0, 0, 1], [10, 1, 10], {
      drawVertex: false,
      drawFace: false,
      curve: true,
      ambiance: 'neon',
      centered: false,
      sizeEdge: 15,
      zoom: 1,
    }),
  },
  {
    name: (
      <>
        <Space
          type="hyperbolic"
          subtype="hypercompact"
          order={2}
          dimensions={5}
        />{' '}
        Ultra-Hyperbolic Honeycomb (Anti-de Sitter Ads4)
      </>
    ),
    params: polytope([-1, 3, 3, -1], [1, 0, 0, 0, 1], [10, 1, 1, 10], {
      drawVertex: false,
      drawFace: false,
      curve: true,
      ambiance: 'neon',
      centered: false,
      zoom: 2,
    }),
  },
  {
    name: (
      <>
        <Space
          type="hyperbolic"
          subtype="hypercompact"
          order={3}
          dimensions={6}
        />{' '}
        Ultra-Ultra-Hyperbolic
      </>
    ),
    params: polytope(
      [-1, 2, -1, 2, -1],
      [0, 0, 0, 0, 0, 0],
      [10, 1, 10, 1, 10],
      {
        drawVertex: false,
        drawFace: false,
        curve: true,
        ambiance: 'neon',
        centered: false,
        zoom: 2,
        sizeEdge: 15,
      }
    ),
  },
  {
    type: 'title',
    content: (
      <>
        <Space type="finite" /> Spherical Space
      </>
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="finite" dimensions={3} /> Polyedra
      </>
    ),
  },
  {
    name: 'Triangular Prism',
    params: polytope([3, 2], [0, 1, 1]),
    subforms: [
      {
        name: 'Square Prism',
        params: polytope([4, 2], [0, 1, 1]),
      },
      {
        name: 'Pentagonal Prism',
        params: polytope([5, 2], [0, 1, 1]),
      },
      {
        name: 'Hexagonal Prism',
        params: polytope([6, 2], [0, 1, 1]),
      },
      {
        name: 'Square Bipyramid',
        params: polytope([4, 2], [0, 'm', 'm'], { reciprocation: 1 }),
      },
      {
        name: 'Pentagonal Bipyramid',
        params: polytope([5, 2], [0, 'm', 'm'], { reciprocation: 1 }),
      },
      {
        name: 'Hexagonal Bipyramid',
        params: polytope([6, 2], [0, 'm', 'm'], { reciprocation: 1 }),
      },
      {
        name: 'Pentagrammic Prism',
        params: polytope([5, 2], [1, 0, 1], [2, 1]),
      },
      {
        name: 'Heptagrammic Prism',
        params: polytope([7, 2], [1, 0, 1], [2, 1]),
      },
      {
        name: 'Octagrammic Prism',
        params: polytope([8, 2], [1, 0, 1], [3, 1]),
      },
      {
        name: 'Pentagrammic Bipyramid',
        params: polytope([5, 2], ['m', 0, 'm'], [2, 1], { reciprocation: 1 }),
      },
      {
        name: 'Heptagrammic Bipyramid',
        params: polytope([7, 2], ['m', 0, 'm'], [2, 1], { reciprocation: 1 }),
      },
      {
        name: 'Octagrammic Bipyramid',
        params: polytope([8, 2], ['m', 0, 'm'], [3, 1], { reciprocation: 1 }),
      },
    ],
  },
  {
    name: 'Triangular Antiprism',
    params: polytope([3, 2], ['s', 's', 's']),
    subforms: [
      {
        name: 'Square Antiprism',
        params: polytope([4, 2], ['s', 's', 's']),
      },
      {
        name: 'Pentagonal Antiprism',
        params: polytope([5, 2], ['s', 's', 's']),
      },
      {
        name: 'Hexagonal Antiprism',
        params: polytope([6, 2], ['s', 's', 's']),
      },
      {
        name: 'Pentagrammic Antiprism',
        params: polytope([5, 2], ['s', 's', 's'], [2, 1]),
      },
      {
        name: 'Penatagrammic Crossed Antiprism',
        params: polytope([5, 2], ['s', 's', 's'], [3, 1]),
      },
      {
        name: 'Heptagrammic Antiprism',
        params: polytope([7, 2], ['s', 's', 's'], [2, 1]),
      },
      {
        name: 'Heptagrammic Crossed Antiprism',
        params: polytope([7, 2], ['s', 's', 's'], [4, 1]),
      },
      {
        name: 'Octagrammic Antiprism',
        params: polytope([8, 2], ['s', 's', 's'], [3, 1]),
      },
      {
        name: 'Octagrammic Crossed Antiprism',
        params: polytope([8, 2], ['s', 's', 's'], [5, 1]),
      },
    ],
  },
  {
    name: 'Tetrahedron',
    params: polytope([3, 3]),
    subforms: [
      {
        name: 'Truncated Tetrahedron',
        params: polytope([3, 3], [1, 1, 0]),
      },
      {
        name: 'Triakis Tetrahedron',
        params: polytope([3, 3], ['m', 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Two Tetrahedra Compound',
        params: polytope([3, 3], ['c', 0, 0], { reciprocation: 1 }),
      },
      {
        name: 'Snub Tetrahedron',
        params: polytope([3, 3], ['s', 's', 's']),
      },
    ],
  },
  {
    name: 'Cube',
    params: polytope([4, 3]),
    subforms: [
      {
        name: 'Cuboctahedron',
        params: polytope([4, 3], [0, 1, 0]),
      },
      {
        name: 'Truncated Cube',
        params: polytope([4, 3], [1, 1, 0]),
      },
      {
        name: 'Rhombicuboctahedron',
        params: polytope([4, 3], [1, 0, 1]),
      },
      {
        name: 'Truncated Octahedron',
        params: polytope([3, 4], [1, 1, 0]),
      },
      {
        name: 'Truncated Cuboctahedron',
        params: polytope([4, 3], [1, 1, 1]),
      },
      {
        name: 'Octahedron',
        params: polytope([3, 4]),
      },
      {
        name: 'Snub Cube',
        params: polytope([4, 3], ['s', 's', 's']),
      },
      {
        name: 'Snub Octahedron',
        params: polytope([3, 4], ['s', 's', 0]),
      },
      {
        name: 'Rhombic Dodecahedron',
        params: polytope([4, 3], [0, 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Triakis Octahedron',
        params: polytope([4, 3], ['m', 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Triakis Hexahedron',
        params: polytope([3, 4], ['m', 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Deltoidal Icositetrahedron',
        params: polytope([4, 3], ['m', 0, 'm'], { reciprocation: 1 }),
      },
      {
        name: 'Disdyakis Dodecahedron',
        params: polytope([4, 3], ['m', 'm', 'm'], { reciprocation: 1 }),
      },
      {
        name: 'Pentagonal Icositetrahedron',
        params: polytope([4, 3], ['b', 'b', 'b'], { reciprocation: 1 }),
      },
      {
        name: 'Cube Octahedron Compound',
        params: polytope([4, 3], ['c', 0, 0], { reciprocation: 1 }),
      },
    ],
  },
  {
    name: 'Dodecahedron',
    params: polytope([5, 3]),
    subforms: [
      {
        name: 'Icosidodecahedron',
        params: polytope([5, 3], [0, 1, 0]),
      },
      {
        name: 'Truncate Dodecahedron',
        params: polytope([5, 3], [1, 1, 0]),
      },
      {
        name: 'Rhombicosidodecahedron',
        params: polytope([5, 3], [1, 0, 1]),
      },
      {
        name: 'Truncate Icosahedron',
        params: polytope([3, 5], [1, 1, 0]),
      },
      {
        name: 'Truncated Icosidodecahedron',
        params: polytope([5, 3], [1, 1, 1]),
      },
      {
        name: 'Icosahedron',
        params: polytope([3, 5]),
      },
      {
        name: 'Snub Dodecahedron',
        params: polytope([5, 3], ['s', 's', 's']),
      },
      {
        name: 'Rhombic Triacontahedron',
        params: polytope([5, 3], [0, 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Triakis Icosahedron',
        params: polytope([5, 3], ['m', 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Pentakis Docecahedron',
        params: polytope([3, 5], ['m', 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Deltoidal Hexecontahedron',
        params: polytope([5, 3], ['m', 0, 'm'], { reciprocation: 1 }),
      },
      {
        name: 'Disdyakis Triacontahedron',
        params: polytope([5, 3], ['m', 'm', 'm'], { reciprocation: 1 }),
      },
      {
        name: 'Pentagonal Hexecontahedron',
        params: polytope([5, 3], ['b', 'b', 'b'], { reciprocation: 1 }),
      },
      {
        name: 'Dodecahedron Icosahedron Compound',
        params: polytope([5, 3], ['c', 0, 0], { reciprocation: 1 }),
      },
    ],
  },
  {
    name: 'Great Dodecahedron',
    params: polytope([5, 5], [1, 0, 0], [1, 2]),
    subforms: [
      {
        name: 'Small Stellated Docecahedron Great Docecahedron Compound',
        params: polytope([5, 5], ['c', 0, 0], [1, 2], { reciprocation: 1 }),
      },
    ],
  },
  {
    name: 'Great Icosahedron',
    params: polytope([3, 5], [1, 0, 0], [1, 2]),
    subforms: [
      {
        name: 'Great Icosahedron Great Stellated Dodecahedron Compound',
        params: polytope([3, 5], ['c', 0, 0], [1, 2], { reciprocation: 1 }),
      },
    ],
  },
  {
    name: 'Small Stellated Dodecahedron',
    params: polytope([5, 5], [1, 0, 0], [2, 1]),
  },
  {
    name: 'Great Stellated Dodecahedron',
    params: polytope([5, 3], [1, 0, 0], [2, 1]),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="finite" dimensions={4} /> Polychora
      </>
    ),
  },
  {
    name: 'Tetrahedral Prism',
    params: polytope([3, 3, 2], [1, 0, 0, 1]),
    subforms: [
      {
        name: 'Truncated Tetrahedral Prism',
        params: polytope([3, 3, 2], [1, 1, 0, 1]),
      },
      {
        name: 'Snub Tetrahedral Prism',
        params: polytope([3, 3, 2], ['s', 's', 's', 1]),
      },
      {
        name: 'Omnisnub Tetrahedral Antiprism',
        params: polytope([3, 3, 2], ['s', 's', 's', 's']),
      },
      {
        name: 'Cubic Prism',
        params: polytope([4, 3, 2], [1, 0, 0, 1]),
      },
      {
        name: 'Cuboctahedral Prism',
        params: polytope([4, 3, 2], [0, 1, 0, 1]),
      },
      {
        name: 'Rhombicubochedral Prism',
        params: polytope([4, 3, 2], [1, 0, 1, 1]),
      },
      {
        name: 'Truncated Cubic Prism',
        params: polytope([4, 3, 2], [1, 1, 0, 1]),
      },
      {
        name: 'Octahedral Prism',
        params: polytope([4, 3, 2], [0, 0, 1, 1]),
      },
      {
        name: 'Truncated Octahedral Prism',
        params: polytope([4, 3, 2], [0, 1, 1, 1]),
      },
      {
        name: 'Truncated Cuboctahedral Prism',
        params: polytope([4, 3, 2], [1, 1, 1, 1]),
      },
      {
        name: 'Snub Cubic Prism',
        params: polytope([4, 3, 2], ['s', 's', 's', 1]),
      },
      {
        name: 'Omnisnub Cubic Antiprism',
        params: polytope([4, 3, 2], ['s', 's', 's', 's']),
      },
      {
        name: 'Snub Rhombicubochedral 24-cell',
        params: polytope([2, 4, 3], ['s', 's', 0, 1]),
      },
      {
        name: 'Dodecahedral Prism',
        params: polytope([5, 3, 2], [1, 0, 0, 1]),
      },
      {
        name: 'Icosidodecahedral Prism',
        params: polytope([5, 3, 2], [0, 1, 0, 1]),
      },
      {
        name: 'Icosahedral Prism',
        params: polytope([5, 3, 2], [0, 0, 1, 1]),
      },
      {
        name: 'Truncated Dodacahedral Prism',
        params: polytope([5, 3, 2], [1, 1, 0, 1]),
      },
      {
        name: 'Rhombicosidodecahedral Prism',
        params: polytope([5, 3, 2], [1, 0, 1, 1]),
      },
      {
        name: 'Truncated Icosahedral Prism',
        params: polytope([5, 3, 2], [0, 1, 1, 1]),
      },
      {
        name: 'Truncated Icosidodecahedral Prism',
        params: polytope([5, 3, 2], [1, 1, 1, 1]),
      },
      {
        name: 'Snub Dodecahedral Prism',
        params: polytope([5, 3, 2], ['s', 's', 's', 1]),
      },
      {
        name: 'Omnisnub Dodecahedral Antiprism',
        params: polytope([5, 3, 2], ['s', 's', 's', 's']),
      },
      {
        name: 'Great Dodecahedral Prism',
        params: polytope([5, 5, 2], [1, 0, 0, 1], [1, 2, 1]),
      },
      {
        name: 'Great Icosahedral Prism',
        params: polytope([3, 5, 2], [1, 0, 0, 1], [1, 2, 1]),
      },
      {
        name: 'Small Stellated Dodecahedral Prism',
        params: polytope([5, 5, 2], [1, 0, 0, 1], [2, 1, 1]),
      },
      {
        name: 'Great Stellated Dodecahedral Prism',
        params: polytope([5, 3, 2], [1, 0, 0, 1], [2, 1, 1]),
      },
    ],
  },
  {
    name: 'Square Antiprismatic Prism',
    params: polytope([4, 2, 2], ['s', 's', 's', 1]),
    subforms: [
      {
        name: 'Petagonal Antiprismatic Prism',
        params: polytope([5, 2, 2], ['s', 's', 's', 1]),
      },
      {
        name: 'Hexagonal Antiprismatic Prism',
        params: polytope([6, 2, 2], ['s', 's', 's', 1]),
      },
      {
        name: 'Heptaogonal Antiprismatic Prism',
        params: polytope([7, 2, 2], ['s', 's', 's', 1]),
      },
      {
        name: 'Octagonal Antiprismatic Prism',
        params: polytope([8, 2, 2], ['s', 's', 's', 1]),
      },
    ],
  },
  {
    name: 'Triangular Triangular Duoprism',
    params: polytope([3, 2, 3], [1, 0, 1, 0]),
    subforms: [
      {
        name: 'Triangular Cubic Duoprism',
        params: polytope([3, 2, 4], [1, 0, 1, 0]),
      },
      {
        name: 'Triangular Pentagonal Duoprism',
        params: polytope([3, 2, 5], [1, 0, 1, 0]),
      },
      {
        name: 'Triangular Hexagonal Duoprism',
        params: polytope([3, 2, 6], [1, 0, 1, 0]),
      },
      {
        name: 'Cubic Cubic Duoprism',
        params: polytope([4, 2, 4], [1, 0, 1, 0]),
      },
      {
        name: 'Cubic Pentagonal Duoprism',
        params: polytope([4, 2, 5], [1, 0, 1, 0]),
      },
      {
        name: 'Cubic Hexagonal Duoprism',
        params: polytope([4, 2, 6], [1, 0, 1, 0]),
      },
      {
        name: 'Pentagonal Pentagonal Duoprism',
        params: polytope([5, 2, 5], [1, 0, 1, 0]),
      },
      {
        name: 'Pentagonal Hexagonal Duoprism',
        params: polytope([5, 2, 6], [1, 0, 1, 0]),
      },
      {
        name: 'Hexagonal Hexagonal Duoprism',
        params: polytope([6, 2, 6], [1, 0, 1, 0]),
      },
      {
        name: 'Triangular Cubic Duopyramid',
        params: polytope([3, 2, 4], ['m', 0, 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Triangular Pentagonal Duopyramid',
        params: polytope([3, 2, 5], ['m', 0, 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Triangular Hexagonal Duopyramid',
        params: polytope([3, 2, 6], ['m', 0, 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Cubic Cubic Duopyramid',
        params: polytope([4, 2, 4], ['m', 0, 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Cubic Pentagonal Duopyramid',
        params: polytope([4, 2, 5], ['m', 0, 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Cubic Hexagonal Duopyramid',
        params: polytope([4, 2, 6], ['m', 0, 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Pentagonal Pentagonal Duopyramid',
        params: polytope([5, 2, 5], ['m', 0, 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Pentagonal Hexagonal Duopyramid',
        params: polytope([5, 2, 6], ['m', 0, 'm', 0], { reciprocation: 1 }),
      },
      {
        name: 'Hexagonal Hexagonal Duopyramid',
        params: polytope([6, 2, 6], ['m', 0, 'm', 0], { reciprocation: 1 }),
      },
    ],
  },

  withSubforms({
    name: '5-cell',
    params: polytope([3, 3, 3]),
  }),
  withSubforms({
    name: '8-cell',
    params: polytope([4, 3, 3]),
  }),
  withSubforms({
    name: '16-cell',
    params: polytope([3, 3, 4]),
  }),
  withSubforms({
    name: '24-cell',
    params: polytope([3, 4, 3]),
  }),
  withSubforms({
    name: '120-cell',
    params: polytope([5, 3, 3]),
  }),
  withSubforms({
    name: '600-cell',
    params: polytope([3, 3, 5]),
  }),
  {
    name: 'Snub 24-cell',
    params: polytope(
      [
        [1, 3, 2, 2],
        [3, 1, 3, 3],
        [2, 3, 1, 2],
        [2, 3, 2, 1],
      ],
      ['s', 's', 's', 's']
    ),
  },
  {
    name: 'Snub Runcitruncated 24-cell',
    params: polytope([3, 4, 3], ['s', 's', 0, 1]),
  },
  {
    name: 'Icosahedral 120-cell',
    params: polytope([3, 5, 5], [1, 0, 0, 0], [1, 1, 2], {
      curve: false,
    }),
    subforms: [
      {
        name: 'Small Stellated 120-cell',
        params: polytope([3, 5, 5], [0, 0, 0, 1], [1, 1, 2], {
          curve: false,
        }),
      },
      {
        name: 'Great 120-cell',
        params: polytope([5, 5, 5], [1, 0, 0, 0], [1, 2, 1], {
          curve: false,
        }),
      },
      {
        name: 'Grand 120-cell',
        params: polytope([5, 3, 5], [1, 0, 0, 0], [1, 1, 2], {
          curve: false,
        }),
      },
      {
        name: 'Great Stellated 120-cell',
        params: polytope([5, 3, 5], [0, 0, 0, 1], [1, 1, 2], {
          curve: false,
        }),
      },
      // FIXME
      {
        name: 'Grand Stellated 120-cell',
        params: polytope([5, 5, 5], [1, 0, 0, 0], [2, 1, 2], {
          curve: false,
        }),
      },
      {
        name: 'Great grand 120-cell',
        params: polytope([5, 5, 3], [1, 0, 0, 0], [1, 2, 1], {
          curve: false,
        }),
      },
      {
        name: 'Great Icosahedral 120-cell',
        params: polytope([5, 5, 3], [0, 0, 0, 1], [1, 2, 1], {
          curve: false,
        }),
      },
      {
        name: 'Great grand Stellated 120-cell',
        params: polytope([5, 3, 3], [1, 0, 0, 0], [2, 1, 1], {
          curve: false,
        }),
      },
    ],
  },
  {
    name: 'Grand 600-cell',
    params: polytope([3, 3, 5], [1, 0, 0, 0], [1, 1, 2], {
      curve: false,
    }),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="finite" dimensions={5} /> Polytera
      </>
    ),
  },
  withSubforms({
    name: '5-simplex',
    params: polytope([3, 3, 3, 3]),
  }),
  withSubforms({
    name: '5-cube',
    params: polytope([4, 3, 3, 3]),
  }),
  withSubforms({
    name: '5-orthoplex',
    params: polytope([3, 3, 3, 4]),
  }),
  withSubforms({
    name: '5-demicube',
    params: polytope([
      [1, 2, 3, 2, 2],
      [2, 1, 3, 2, 2],
      [3, 3, 1, 3, 2],
      [2, 2, 3, 1, 3],
      [2, 2, 2, 3, 1],
    ]),
  }),
  {
    type: 'group',
    content: (
      <>
        <Space type="finite" dimensions={6} /> Polypeta
      </>
    ),
  },
  withSubforms({
    name: '6-simplex',
    params: polytope([3, 3, 3, 3, 3]),
  }),
  withSubforms({
    name: '6-cube',
    params: polytope([4, 3, 3, 3, 3]),
  }),
  withSubforms({
    name: '6-orthoplex',
    params: polytope([3, 3, 3, 3, 4]),
  }),
  withSubforms({
    name: '6-demicube',
    params: polytope([
      [1, 2, 3, 2, 2, 2],
      [2, 1, 3, 2, 2, 2],
      [3, 3, 1, 3, 2, 2],
      [2, 2, 3, 1, 3, 2],
      [2, 2, 2, 3, 1, 3],
      [2, 2, 2, 2, 3, 1],
    ]),
  }),
  {
    name: (
      <>
        2<sub>21</sub>
      </>
    ),
    params: polytope(
      [
        [1, 3, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2],
        [2, 3, 1, 3, 3, 2],
        [2, 2, 3, 1, 2, 2],
        [2, 2, 3, 2, 1, 3],
        [2, 2, 2, 2, 3, 1],
      ],
      [1, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: (
      <>
        1<sub>22</sub>
      </>
    ),
    params: polytope(
      [
        [1, 3, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2],
        [2, 3, 1, 3, 3, 2],
        [2, 2, 3, 1, 2, 2],
        [2, 2, 3, 2, 1, 3],
        [2, 2, 2, 2, 3, 1],
      ],
      [0, 0, 0, 1, 0, 0]
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="finite" dimensions={7} /> Polyexa
      </>
    ),
  },
  withSubforms({
    name: '7-simplex',
    params: polytope([3, 3, 3, 3, 3, 3]),
  }),
  withSubforms({
    name: '7-cube',
    params: polytope([4, 3, 3, 3, 3, 3]),
  }),
  withSubforms({
    name: '7-orthoplex',
    params: polytope([3, 3, 3, 3, 3, 4]),
  }),
  withSubforms({
    name: '7-demicube',
    params: polytope([
      [1, 2, 3, 2, 2, 2, 2],
      [2, 1, 3, 2, 2, 2, 2],
      [3, 3, 1, 3, 2, 2, 2],
      [2, 2, 3, 1, 3, 2, 2],
      [2, 2, 2, 3, 1, 3, 2],
      [2, 2, 2, 2, 3, 1, 3],
      [2, 2, 2, 2, 2, 3, 1],
    ]),
  }),
  {
    name: (
      <>
        3<sub>21</sub>
      </>
    ),
    params: polytope(
      [
        [1, 3, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2],
        [2, 3, 1, 3, 2, 2, 2],
        [2, 2, 3, 1, 3, 3, 2],
        [2, 2, 2, 3, 1, 2, 2],
        [2, 2, 2, 3, 2, 1, 3],
        [2, 2, 2, 2, 2, 3, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: (
      <>
        2<sub>31</sub>
      </>
    ),
    params: polytope(
      [
        [1, 3, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2],
        [2, 3, 1, 3, 2, 2, 2],
        [2, 2, 3, 1, 3, 3, 2],
        [2, 2, 2, 3, 1, 2, 2],
        [2, 2, 2, 3, 2, 1, 3],
        [2, 2, 2, 2, 2, 3, 1],
      ],
      [0, 0, 0, 0, 0, 0, 1]
    ),
  },
  {
    name: (
      <>
        1<sub>32</sub>
      </>
    ),
    params: polytope(
      [
        [1, 3, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2],
        [2, 3, 1, 3, 2, 2, 2],
        [2, 2, 3, 1, 3, 3, 2],
        [2, 2, 2, 3, 1, 2, 2],
        [2, 2, 2, 3, 2, 1, 3],
        [2, 2, 2, 2, 2, 3, 1],
      ],
      [0, 0, 0, 0, 1, 0, 0]
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="finite" dimensions={8} /> Polyzetta
      </>
    ),
  },
  withSubforms({
    name: '8-simplex',
    params: polytope([3, 3, 3, 3, 3, 3, 3]),
  }),
  withSubforms({
    name: '8-cube',
    params: polytope([4, 3, 3, 3, 3, 3, 3]),
  }),
  withSubforms({
    name: '8-orthoplex',
    params: polytope([3, 3, 3, 3, 3, 3, 4]),
  }),
  withSubforms({
    name: '8-demicube',
    params: polytope([
      [1, 2, 3, 2, 2, 2, 2, 2],
      [2, 1, 3, 2, 2, 2, 2, 2],
      [3, 3, 1, 3, 2, 2, 2, 2],
      [2, 2, 3, 1, 3, 2, 2, 2],
      [2, 2, 2, 3, 1, 3, 2, 2],
      [2, 2, 2, 2, 3, 1, 3, 2],
      [2, 2, 2, 2, 2, 3, 1, 3],
      [2, 2, 2, 2, 2, 2, 3, 1],
    ]),
  }),
  {
    name: (
      <>
        1<sub>42</sub>
      </>
    ),
    params: polytope(
      [
        [1, 3, 2, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2, 2],
        [2, 3, 1, 3, 3, 2, 2, 2],
        [2, 2, 3, 1, 2, 2, 2, 2],
        [2, 2, 3, 2, 1, 3, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 2, 3, 1, 3],
        [2, 2, 2, 2, 2, 2, 3, 1],
      ],
      [0, 0, 0, 1, 0, 0, 0, 0]
    ),
  },
  {
    name: (
      <>
        2<sub>41</sub>
      </>
    ),
    params: polytope(
      [
        [1, 3, 2, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2, 2],
        [2, 3, 1, 3, 3, 2, 2, 2],
        [2, 2, 3, 1, 2, 2, 2, 2],
        [2, 2, 3, 2, 1, 3, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 2, 3, 1, 3],
        [2, 2, 2, 2, 2, 2, 3, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: (
      <>
        4<sub>21</sub>
      </>
    ),
    params: polytope(
      [
        [1, 3, 2, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2, 2],
        [2, 3, 1, 3, 3, 2, 2, 2],
        [2, 2, 3, 1, 2, 2, 2, 2],
        [2, 2, 3, 2, 1, 3, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 2, 3, 1, 3],
        [2, 2, 2, 2, 2, 2, 3, 1],
      ],
      [0, 0, 0, 0, 0, 0, 0, 1]
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="finite" dimensions={9} /> Polyyotta
      </>
    ),
  },
  withSubforms({
    name: '9-simplex',
    params: polytope([3, 3, 3, 3, 3, 3, 3, 3]),
  }),
  withSubforms({
    name: '9-cube',
    params: polytope([4, 3, 3, 3, 3, 3, 3, 3]),
  }),
  withSubforms({
    name: '9-orthoplex',
    params: polytope([3, 3, 3, 3, 3, 3, 3, 4]),
  }),
  withSubforms({
    name: '9-demicube',
    params: polytope([
      [1, 2, 3, 2, 2, 2, 2, 2, 2],
      [2, 1, 3, 2, 2, 2, 2, 2, 2],
      [3, 3, 1, 3, 2, 2, 2, 2, 2],
      [2, 2, 3, 1, 3, 2, 2, 2, 2],
      [2, 2, 2, 3, 1, 3, 2, 2, 2],
      [2, 2, 2, 2, 3, 1, 3, 2, 2],
      [2, 2, 2, 2, 2, 3, 1, 3, 2],
      [2, 2, 2, 2, 2, 2, 3, 1, 3],
      [2, 2, 2, 2, 2, 2, 2, 3, 1],
    ]),
  }),
  {
    type: 'title',
    content: (
      <>
        <Space type="affine" /> Euclidean Space
      </>
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="affine" dimensions={3} /> Tilings
      </>
    ),
  },
  {
    name: 'Triangle',
    params: polytope(
      [
        [1, 3, 3],
        [3, 1, 3],
        [3, 3, 1],
      ],
      [1, 0, 0]
    ),
  },
  {
    name: 'Square',
    params: polytope([4, 4], [1, 0, 0]),
  },
  {
    name: 'Hexagonal',
    params: polytope([6, 3], [1, 0, 0]),
  },
  {
    name: 'Snub Square',
    params: tiling([4, 4], ['s', 's', 0]),
  },
  {
    name: 'Snub Trihexagonal',
    params: tiling([6, 3], ['s', 's', 's']),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="affine" dimensions={4} /> Honeycombs
      </>
    ),
  },
  {
    name: 'Cubic',
    params: ehoneycomb([4, 3, 4], [1, 0, 0, 0]),
  },
  {
    name: 'Octet',
    params: ehoneycomb(
      [
        [1, 3, 2, 2],
        [3, 1, 3, 4],
        [2, 3, 1, 2],
        [2, 4, 2, 1],
      ],
      [1, 0, 0, 0]
    ),
  },
  {
    name: 'Quarter Cubic',
    params: ehoneycomb(
      [
        [1, 3, 2, 3],
        [3, 1, 3, 2],
        [2, 3, 1, 3],
        [3, 2, 3, 1],
      ],
      [1, 0, 0, 1]
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="affine" dimensions={5} /> 4-Honeycombs
      </>
    ),
  },
  {
    name: 'Tesseractic',
    params: ehoneycomb([4, 3, 3, 4], [1, 0, 0, 0, 0]),
  },
  {
    name: '16-cellic',
    params: ehoneycomb([3, 3, 4, 3], [1, 0, 0, 0, 0]),
  },
  {
    name: '24-cellic',
    params: ehoneycomb([3, 4, 3, 3], [1, 0, 0, 0, 0]),
  },
  {
    name: '4-simpletic',
    params: ehoneycomb(
      [
        [1, 3, 2, 2, 3],
        [3, 1, 3, 2, 2],
        [2, 3, 1, 3, 2],
        [2, 2, 3, 1, 3],
        [3, 2, 2, 3, 1],
      ],
      [1, 0, 0, 0, 0]
    ),
  },
  {
    name: 'Quarter Tesseractic',
    params: ehoneycomb(
      [
        [1, 2, 3, 2, 2],
        [2, 1, 3, 2, 2],
        [3, 3, 1, 3, 3],
        [2, 2, 3, 1, 2],
        [2, 2, 3, 2, 1],
      ],
      [1, 0, 0, 1, 0]
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="affine" dimensions={6} /> 5-Honeycombs
      </>
    ),
  },
  {
    name: '5-simplex',
    params: ehoneycomb(
      [
        [1, 3, 2, 2, 2, 3],
        [3, 1, 3, 2, 2, 2],
        [2, 3, 1, 3, 2, 2],
        [2, 2, 3, 1, 3, 2],
        [2, 2, 2, 3, 1, 3],
        [3, 2, 2, 2, 3, 1],
      ],
      [1, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: '5-cubic',
    params: ehoneycomb([4, 3, 3, 3, 4], [1, 0, 0, 0, 0, 0]),
  },
  {
    name: '5-demicubic',
    params: ehoneycomb(
      [
        [1, 2, 3, 2, 2, 2],
        [2, 1, 3, 2, 2, 2],
        [3, 3, 1, 3, 2, 2],
        [2, 2, 3, 1, 3, 2],
        [2, 2, 2, 3, 1, 4],
        [2, 2, 2, 2, 4, 1],
      ],
      [1, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: 'Quarter 5-cubic',
    params: ehoneycomb(
      [
        [1, 2, 3, 2, 2, 2],
        [2, 1, 3, 2, 2, 2],
        [3, 3, 1, 3, 2, 2],
        [2, 2, 3, 1, 3, 3],
        [2, 2, 2, 3, 1, 2],
        [2, 2, 2, 3, 2, 1],
      ],
      [1, 0, 0, 0, 0, 1]
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="affine" dimensions={7} /> 6-Honeycombs
      </>
    ),
  },
  {
    name: '6-simplex',
    params: ehoneycomb(
      [
        [1, 3, 2, 2, 2, 2, 3],
        [3, 1, 3, 2, 2, 2, 2],
        [2, 3, 1, 3, 2, 2, 2],
        [2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 3, 1, 3],
        [3, 2, 2, 2, 2, 3, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: '6-cubic',
    params: ehoneycomb([4, 3, 3, 3, 3, 4], [1, 0, 0, 0, 0, 0, 0]),
  },
  {
    name: '6-demicubic',
    params: ehoneycomb(
      [
        [1, 2, 3, 2, 2, 2, 2],
        [2, 1, 3, 2, 2, 2, 2],
        [3, 3, 1, 3, 2, 2, 2],
        [2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 3, 1, 4],
        [2, 2, 2, 2, 2, 4, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: 'Quarter 6-cubic',
    params: ehoneycomb(
      [
        [1, 2, 3, 2, 2, 2, 2],
        [2, 1, 3, 2, 2, 2, 2],
        [3, 3, 1, 3, 2, 2, 2],
        [2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 3, 1, 3, 3],
        [2, 2, 2, 2, 3, 1, 2],
        [2, 2, 2, 2, 3, 2, 1],
      ],
      [1, 0, 0, 0, 0, 0, 1]
    ),
  },
  {
    name: (
      <>
        2<sub>22</sub>
      </>
    ),
    params: ehoneycomb(
      [
        [1, 3, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2],
        [2, 3, 1, 3, 2, 3, 2],
        [2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 3, 1, 2, 2],
        [2, 2, 3, 2, 2, 1, 3],
        [2, 2, 2, 2, 2, 3, 1],
      ],
      [0, 0, 0, 0, 1, 0, 0]
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="affine" dimensions={8} /> 7-Honeycombs
      </>
    ),
  },
  {
    name: '7-simplex',
    params: ehoneycomb(
      [
        [1, 3, 2, 2, 2, 2, 2, 3],
        [3, 1, 3, 2, 2, 2, 2, 2],
        [2, 3, 1, 3, 2, 2, 2, 2],
        [2, 2, 3, 1, 3, 2, 2, 2],
        [2, 2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 2, 3, 1, 3],
        [3, 2, 2, 2, 2, 2, 3, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: '7-cubic',
    params: ehoneycomb([4, 3, 3, 3, 3, 3, 4], [1, 0, 0, 0, 0, 0, 0, 0]),
  },
  {
    name: '7-demicubic',
    params: ehoneycomb(
      [
        [1, 2, 3, 2, 2, 2, 2, 2],
        [2, 1, 3, 2, 2, 2, 2, 2],
        [3, 3, 1, 3, 2, 2, 2, 2],
        [2, 2, 3, 1, 3, 2, 2, 2],
        [2, 2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 2, 3, 1, 4],
        [2, 2, 2, 2, 2, 2, 4, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: 'Quarter 7-cubic',
    params: ehoneycomb(
      [
        [1, 2, 3, 2, 2, 2, 2, 2],
        [2, 1, 3, 2, 2, 2, 2, 2],
        [3, 3, 1, 3, 2, 2, 2, 2],
        [2, 2, 3, 1, 3, 2, 2, 2],
        [2, 2, 3, 3, 1, 3, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 3],
        [2, 2, 2, 2, 2, 3, 1, 2],
        [2, 2, 2, 2, 2, 3, 2, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0, 1]
    ),
  },
  {
    name: (
      <>
        1<sub>33</sub>
      </>
    ),
    params: ehoneycomb(
      [
        [1, 3, 2, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2, 2],
        [2, 3, 1, 3, 2, 2, 2, 2],
        [2, 2, 3, 1, 3, 3, 2, 2],
        [2, 2, 2, 3, 1, 2, 2, 2],
        [2, 2, 2, 3, 2, 1, 3, 2],
        [2, 2, 2, 2, 2, 3, 1, 3],
        [2, 2, 2, 2, 2, 2, 3, 1],
      ],
      [0, 0, 0, 0, 1, 0, 0, 0]
    ),
  },
  {
    name: (
      <>
        3<sub>31</sub>
      </>
    ),
    params: ehoneycomb(
      [
        [1, 3, 2, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2, 2],
        [2, 3, 1, 3, 2, 2, 2, 2],
        [2, 2, 3, 1, 3, 3, 2, 2],
        [2, 2, 2, 3, 1, 2, 2, 2],
        [2, 2, 2, 3, 2, 1, 3, 2],
        [2, 2, 2, 2, 2, 3, 1, 3],
        [2, 2, 2, 2, 2, 2, 3, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0, 0]
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="affine" dimensions={9} /> 8-Honeycombs
      </>
    ),
  },
  {
    name: '8-simplex',
    params: ehoneycomb(
      [
        [1, 3, 2, 2, 2, 2, 2, 2, 3],
        [3, 1, 3, 2, 2, 2, 2, 2, 2],
        [2, 3, 1, 3, 2, 2, 2, 2, 2],
        [2, 2, 3, 1, 3, 2, 2, 2, 2],
        [2, 2, 2, 3, 1, 3, 2, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 2, 2, 3, 1, 3],
        [3, 2, 2, 2, 2, 2, 2, 3, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: '8-cubic',
    params: ehoneycomb([4, 3, 3, 3, 3, 3, 3, 4], [1, 0, 0, 0, 0, 0, 0, 0, 0]),
  },
  {
    name: '8-demicubic',
    params: ehoneycomb(
      [
        [1, 2, 3, 2, 2, 2, 2, 2, 2],
        [2, 1, 3, 2, 2, 2, 2, 2, 2],
        [3, 3, 1, 3, 2, 2, 2, 2, 2],
        [2, 2, 3, 1, 3, 2, 2, 2, 2],
        [2, 2, 2, 3, 1, 3, 2, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 2, 2, 3, 1, 4],
        [2, 2, 2, 2, 2, 2, 2, 4, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: 'Quarter 8-cubic',
    params: ehoneycomb(
      [
        [1, 2, 3, 2, 2, 2, 2, 2, 2],
        [2, 1, 3, 2, 2, 2, 2, 2, 2],
        [3, 3, 1, 3, 2, 2, 2, 2, 2],
        [2, 2, 3, 1, 3, 2, 2, 2, 2],
        [2, 2, 2, 3, 1, 3, 2, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 2, 2, 3, 1, 3, 3],
        [2, 2, 2, 2, 2, 2, 3, 1, 2],
        [2, 2, 2, 2, 2, 2, 3, 2, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0, 0, 1]
    ),
  },
  {
    name: (
      <>
        1<sub>52</sub>
      </>
    ),
    params: ehoneycomb(
      [
        [1, 3, 2, 2, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2, 2, 2],
        [2, 3, 1, 3, 3, 2, 2, 2, 2],
        [2, 2, 3, 1, 2, 2, 2, 2, 2],
        [2, 2, 3, 2, 1, 3, 2, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 2, 2, 3, 1, 3],
        [2, 2, 2, 2, 2, 2, 2, 3, 1],
      ],
      [0, 0, 0, 1, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: (
      <>
        2<sub>51</sub>
      </>
    ),
    params: ehoneycomb(
      [
        [1, 3, 2, 2, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2, 2, 2],
        [2, 3, 1, 3, 3, 2, 2, 2, 2],
        [2, 2, 3, 1, 2, 2, 2, 2, 2],
        [2, 2, 3, 2, 1, 3, 2, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 2, 2, 3, 1, 3],
        [2, 2, 2, 2, 2, 2, 2, 3, 1],
      ],
      [1, 0, 0, 0, 0, 0, 0, 0, 0]
    ),
  },
  {
    name: (
      <>
        5<sub>21</sub>
      </>
    ),
    params: ehoneycomb(
      [
        [1, 3, 2, 2, 2, 2, 2, 2, 2],
        [3, 1, 3, 2, 2, 2, 2, 2, 2],
        [2, 3, 1, 3, 3, 2, 2, 2, 2],
        [2, 2, 3, 1, 2, 2, 2, 2, 2],
        [2, 2, 3, 2, 1, 3, 2, 2, 2],
        [2, 2, 2, 2, 3, 1, 3, 2, 2],
        [2, 2, 2, 2, 2, 3, 1, 3, 2],
        [2, 2, 2, 2, 2, 2, 3, 1, 3],
        [2, 2, 2, 2, 2, 2, 2, 3, 1],
      ],
      [0, 0, 0, 0, 0, 0, 0, 0, 1]
    ),
  },
  {
    type: 'title',
    content: (
      <>
        <Space type="hyperbolic" /> Hyperbolic Space
      </>
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="hyperbolic" dimensions={3} /> Tilings
      </>
    ),
  },
  tilings([7, 3]),
  tilings([8, 3]),
  tilings([5, 4]),
  tilings([6, 4]),
  tilings([7, 4]),
  tilings([8, 4]),
  tilings([6, 5]),
  tilings([6, 6]),
  tilings([8, 6]),
  tilings([7, 7]),
  tilings([8, 8]),
  tilings([0, 3]),
  tilings([0, 4]),
  tilings([0, 5]),
  tilings([0, 0]),
  tilings([4, 3, 3]),
  tilings([4, 4, 3]),
  tilings([4, 4, 4]),
  tilings([5, 3, 3]),
  tilings([5, 4, 3]),
  tilings([5, 4, 4]),
  tilings([6, 3, 3]),
  tilings([6, 4, 3]),
  tilings([6, 4, 4]),
  tilings([0, 3, 3]),
  tilings([0, 4, 3]),
  tilings([0, 4, 4]),
  tilings([0, 0, 3]),
  tilings([0, 0, 4]),
  tilings([0, 0, 0]),
  {
    name: 'Infinite Order Apeirogonal',
    params: tiling([0, 0], [1, 0, 0]),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="hyperbolic" subtype="compact" dimensions={4} /> Compact
        Hyperbolic Honeycombs
      </>
    ),
  },
  {
    name: 'Icosahedral',
    params: honeycomb([3, 5, 3], [1, 0, 0, 0]),
  },
  {
    name: 'Order-4 Dodecahedral',
    params: honeycomb([5, 3, 4], [1, 0, 0, 0]),
  },
  {
    name: 'Order-5 Dodecahedral',
    params: honeycomb([5, 3, 5], [1, 0, 0, 0]),
  },
  {
    name: 'Alternated Order-5 Cubic',
    params: honeycomb(
      [
        [1, 2, 3, 2],
        [2, 1, 3, 2],
        [3, 3, 1, 5],
        [2, 2, 5, 1],
      ],
      [1, 0, 0, 0]
    ),
  },
  {
    name: 'Tetrahedral Cubic',
    params: honeycomb(
      [
        [1, 4, 2, 3],
        [4, 1, 3, 2],
        [2, 3, 1, 3],
        [3, 2, 3, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Tetrahedral Dodecahedral',
    params: honeycomb(
      [
        [1, 3, 2, 5],
        [3, 1, 3, 2],
        [2, 3, 1, 3],
        [5, 2, 3, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Cubic Octahedral',
    params: honeycomb(
      [
        [1, 3, 2, 4],
        [3, 1, 4, 2],
        [2, 4, 1, 3],
        [4, 2, 3, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Octahedral Dodcahedral',
    params: honeycomb(
      [
        [1, 3, 2, 5],
        [3, 1, 4, 2],
        [2, 4, 1, 3],
        [5, 2, 3, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Octahedral Icosahedral',
    params: honeycomb(
      [
        [1, 3, 2, 5],
        [3, 1, 5, 2],
        [2, 5, 1, 3],
        [5, 2, 3, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="hyperbolic" subtype="paracompact" dimensions={4} />{' '}
        Paracompact Hyperbolic Honeycombs
      </>
    ),
  },
  {
    name: 'Triangular',
    params: honeycomb([3, 6, 3], [1, 0, 0, 0]),
  },
  {
    name: 'Hexagonal',
    params: honeycomb([6, 3, 3], [1, 0, 0, 0]),
  },
  {
    name: 'Order-6 Tetrahedral',
    params: honeycomb([3, 3, 6], [1, 0, 0, 0]),
  },
  {
    name: 'Alternated Order-6 Cubic',
    params: honeycomb(
      [
        [1, 2, 3, 2],
        [2, 1, 3, 2],
        [3, 3, 1, 6],
        [2, 2, 6, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Order-5 Hexagonal',
    params: honeycomb([6, 3, 5], [1, 0, 0, 0]),
  },
  {
    name: 'Alternated Order-5 Hexagonal',
    params: honeycomb(
      [
        [1, 2, 3, 2],
        [2, 1, 3, 2],
        [3, 3, 1, 5],
        [2, 2, 5, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Order-6 Hexagonal',
    params: honeycomb([6, 3, 6], [0, 0, 0, 1]),
  },
  {
    name: 'Square',
    params: honeycomb([4, 4, 3], [1, 0, 0, 0]),
  },
  {
    name: 'Alternated Square',
    params: honeycomb(
      [
        [1, 2, 4, 2],
        [2, 1, 4, 2],
        [4, 4, 1, 3],
        [2, 2, 3, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Order-4 Square',
    params: honeycomb([4, 4, 4], [0, 1, 0, 0]),
  },
  {
    name: 'Tetrahedral Square',
    params: honeycomb(
      [
        [1, 4, 2, 4],
        [4, 1, 3, 2],
        [2, 3, 1, 3],
        [4, 2, 3, 1],
      ],
      [0, 1, 0, 0],

      {}
    ),
  },
  {
    name: 'Cubic Square',
    params: honeycomb(
      [
        [1, 4, 2, 4],
        [4, 1, 3, 2],
        [2, 3, 1, 4],
        [4, 2, 4, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Alternated Cubic Square',
    params: honeycomb(
      [
        [1, 2, 4, 3],
        [2, 1, 3, 2],
        [4, 3, 1, 4],
        [3, 2, 4, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Quarter order Square',
    params: honeycomb(
      [
        [1, 4, 2, 4],
        [4, 1, 4, 2],
        [2, 4, 1, 4],
        [4, 2, 4, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Tetrahedral Hexagonal',
    params: honeycomb(
      [
        [1, 3, 2, 6],
        [3, 1, 3, 2],
        [2, 3, 1, 3],
        [6, 2, 3, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Octahedral Hexagonal',
    params: honeycomb(
      [
        [1, 3, 2, 6],
        [3, 1, 4, 2],
        [2, 4, 1, 3],
        [6, 2, 3, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Icosahedral Hexagonal',
    params: honeycomb(
      [
        [1, 3, 2, 6],
        [3, 1, 5, 2],
        [2, 5, 1, 3],
        [6, 2, 3, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Hexagonal Triangular',
    params: honeycomb(
      [
        [1, 3, 2, 6],
        [3, 1, 6, 2],
        [2, 6, 1, 3],
        [6, 2, 3, 1],
      ],
      [0, 0, 0, 1],

      {}
    ),
  },
  {
    name: 'Alternated Hexagonal',
    params: honeycomb(
      [
        [1, 3, 3, 2],
        [3, 1, 3, 2],
        [3, 3, 1, 3],
        [2, 2, 3, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Alternated Order-4 Hexagonal',
    params: honeycomb(
      [
        [1, 3, 3, 2],
        [3, 1, 3, 2],
        [3, 3, 1, 4],
        [2, 2, 4, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Alternated Order-5 Hexagonal',
    params: honeycomb(
      [
        [1, 3, 3, 2],
        [3, 1, 3, 2],
        [3, 3, 1, 5],
        [2, 2, 5, 1],
      ],
      [1, 0, 0, 0],

      {}
    ),
  },
  {
    name: 'Runcic Order-6 Hexagonal',
    params: honeycomb(
      [
        [1, 3, 3, 2],
        [3, 1, 3, 2],
        [3, 3, 1, 6],
        [2, 2, 6, 1],
      ],
      [1, 0, 0, 1],

      {}
    ),
  },
  {
    name: 'Quarter Order-4 Hexagonal',
    params: honeycomb(
      [
        [1, 3, 3, 2],
        [3, 1, 3, 3],
        [3, 3, 1, 3],
        [2, 3, 3, 1],
      ],
      [1, 1, 0, 0],

      {}
    ),
  },
  {
    name: 'Hexagonal',
    params: honeycomb(
      [
        [1, 3, 3, 3],
        [3, 1, 3, 3],
        [3, 3, 1, 3],
        [3, 3, 3, 1],
      ],
      [1, 1, 1, 1],

      {}
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="hyperbolic" subtype="hypercompact" dimensions={4} />{' '}
        Hypercompact Hyperbolic Honeycombs
      </>
    ),
  },
  {
    name: 'Order 7-3 Triangular',
    params: honeycomb([3, 7, 3], [1, 0, 0, 0]),
  },
  {
    name: 'Order 3-6 Heptagonal',
    params: honeycomb([7, 3, 6], [1, 0, 0, 0]),
  },
  {
    name: 'Order-7 Dodecahedral',
    params: honeycomb([5, 3, 7], [1, 0, 0, 0]),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="hyperbolic" dimensions={5} /> Compact Hyperbolic
        4-Honeycombs
      </>
    ),
  },
  {
    name: 'Order-5 5-cell',
    params: honeycomb([3, 3, 3, 5], [1, 0, 0, 0, 0]),
  },
  {
    name: '120-cell',
    params: honeycomb([5, 3, 3, 3], [1, 0, 0, 0, 0]),
  },
  {
    name: 'Order-5 Tesseratic',
    params: honeycomb([4, 3, 3, 5], [1, 0, 0, 0, 0]),
  },
  {
    name: 'Order-4 120-cell',
    params: honeycomb([4, 3, 3, 5], [1, 0, 0, 0, 0]),
  },
  {
    name: 'Order-5 120-cell',
    params: honeycomb([5, 3, 3, 5], [1, 0, 0, 0, 0]),
  },
  {
    name: 'Small Stellated 120-cell',
    params: honeycomb([5, 5, 3, 3], [1, 0, 0, 0, 0], [2, 1, 1, 1]),
  },
  {
    name: 'Pentagrammic-order 600-cell',
    params: honeycomb([3, 3, 5, 5], [1, 0, 0, 0, 0], [1, 1, 1, 2]),
  },
  {
    name: 'Order-5 Icosahedral 120-cell',
    params: honeycomb([3, 5, 5, 5], [1, 0, 0, 0, 0], [1, 1, 2, 1]),
  },
  {
    name: 'Great 120-cell',
    params: honeycomb([5, 5, 5, 3], [1, 0, 0, 0, 0], [1, 2, 1, 1]),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="hyperbolic" subtype="paracompact" dimensions={5} />{' '}
        Paracompact Hyperbolic 4-Honeycombs
      </>
    ),
  },
  {
    name: 'Order-4 24-cell',
    params: honeycomb([3, 4, 3, 4], [1, 0, 0, 0, 0]),
  },
  {
    name: 'Cubic Honeycomb',
    params: honeycomb([4, 3, 4, 3], [1, 0, 0, 0, 0]),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="hyperbolic" subtype="paracompact" dimensions={6} />{' '}
        Paracompact Hyperbolic 5-Honeycombs
      </>
    ),
  },
  {
    name: '5-orthoplex',
    params: honeycomb([3, 3, 3, 4, 3], [1, 0, 0, 0, 0, 0]),
  },
  {
    name: '24-cell Honeycomb',
    params: honeycomb([3, 4, 3, 3, 3], [1, 0, 0, 0, 0, 0]),
  },
  {
    name: '16-cell Honeycomb',
    params: honeycomb([3, 3, 4, 3, 3], [1, 0, 0, 0, 0, 0]),
  },
  {
    name: 'Order-4 24-cell Honeycomb',
    params: honeycomb([3, 4, 3, 3, 4], [1, 0, 0, 0, 0, 0]),
  },
  {
    name: 'Tesseratic Honeycomb',
    params: honeycomb([4, 3, 3, 4, 3], [1, 0, 0, 0, 0, 0]),
  },
]
