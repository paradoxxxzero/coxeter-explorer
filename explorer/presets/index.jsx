import { defaultParams } from '../../statics'
import Space from '../components/Space'
import { min } from '../math'
import {
  coxeterPlane,
  coxeterToGram,
  getFundamentalSimplexMirrors,
  getSpaceType,
} from '../math/hypermath'
import { ident } from '../math/matrix'

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

const polytope = (
  coxeterArgs,
  mirrors,
  stellationArgs,
  extra,
  onCoxeterPlane
) => {
  const coxeterParams = coxeter_(...coxeterArgs)
  const { dimensions } = coxeterParams
  const params = {
    ...defaultParams,
    ...coxeterParams,
    showVertices: dimensions <= 3,
    showFaces: dimensions <= 4,
    curve: dimensions > 3,
    grouper: 'toddcoxeter',
    ambiance: 'colorful',
    matrix: ident(dimensions),
    zoom: dimensions <= 3 ? 2 : dimensions > 4 ? 3 : 5,
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
  if (onCoxeterPlane) {
    const gram = coxeterToGram(params.coxeter, params.stellation)

    const spaceType = getSpaceType(gram)
    const mirrorsPlanes = getFundamentalSimplexMirrors(
      gram,
      spaceType.curvature,
      false
    )
    params.matrix = coxeterPlane(spaceType, mirrorsPlanes, dimensions)
    params.matrix._preset = true
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

const tiling = (coxeterArgs, mirrors, stellationArgs, extra) => {
  return {
    ...polytope(coxeterArgs, mirrors, stellationArgs),
    ambiance: 'plain',
    showVertices: false,
    curve: true,
    zoom: 1,
    ...extra,
  }
}
const ehoneycomb = (coxeterArgs, mirrors, stellationArgs, extra) => {
  return {
    ...polytope(coxeterArgs, mirrors, stellationArgs),
    ambiance: 'neon',
    showFaces: false,
    showVertices: false,
    grouper: '',
    edgeThickness: 10,
    zoom: 2,
    ...extra,
  }
}
const honeycomb = (coxeterArgs, mirrors, stellationArgs, extra) => {
  return {
    ...polytope(coxeterArgs, mirrors, stellationArgs),
    ambiance: 'neon',
    showFaces: false,
    showVertices: false,
    curve: true,
    grouper: '',
    edgeThickness: 10,
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
      // Omnisub: ['s', 's', 's', 's'],
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
      // Omnisub: ['s', 's', 's', 's', 's'],
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
      // Omnisub: ['s', 's', 's', 's', 's', 's'],
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
      // Omnisub: ['s', 's', 's', 's', 's', 's', 's'],
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
      // Omnisub: ['s', 's', 's', 's', 's', 's', 's', 's'],
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
      // Omnisub: ['s', 's', 's', 's', 's', 's', 's', 's', 's'],
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
    params: polytope([4, 3, 3], [1, 0, 0, 0], null, {
      showVertices: true,
      vertexThickness: 150,
      showFaces: true,
      curve: true,
      ambiance: 'neon',
      centered: false,
      zoom: 4.2,
    }),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" dimensions={3} /> 7-3-2 tiling
      </>
    ),
    params: tiling([7, 3], [1, 0, 0], null, {
      showVertices: false,
      showFaces: true,
      curve: true,
      ambiance: 'neon',
    }),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" subtype="paracompact" dimensions={3} /> Ideal
        triangles
      </>
    ),
    params: tiling(
      [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      [1, 1, 1],
      null,
      {
        grouper: 'fundamental',
        showVertices: false,
        showFaces: true,
        curve: true,
        segments: 64,
        easing: 'quartic',
        ambiance: 'neon',
      }
    ),
  },
  {
    name: (
      <>
        <Space type="finite" dimensions={8} /> 1<sub>22</sub>
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
      null,
      {
        vertexThickness: 40,
        edgeThickness: 10,
        ambiance: 'colorful',
        showVertices: true,
        projection3: 'orthographic',
        projection4: 'orthographic',
        projection5: 'orthographic',
        projection6: 'orthographic',
        zoom: 1,
      },
      true
    ),
  },
  {
    name: (
      <>
        <Space type="finite" dimensions={8} /> E8 lattice (4<sub>21</sub>)
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
      null,
      {
        vertexThickness: 30,
        edgeThickness: 1,
        curve: false,
        ambiance: 'neon',
        showVertices: true,
        projection3: 'orthographic',
        projection4: 'orthographic',
        projection5: 'orthographic',
        projection6: 'orthographic',
        projection7: 'orthographic',
        projection8: 'orthographic',
        order: 20,
        zoom: 1,
      },
      true
    ),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" subtype="paracompact" dimensions={4} /> Ideal
        tetrahedron
      </>
    ),
    params: tiling([3, 3, 6], [1, 0, 0, ''], null, {
      showVertices: false,
      showFaces: true,
      curve: true,
      order: 1,
      centered: false,
      segments: 64,
      easing: 'quartic',
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
    params: tiling([6, 3, 4], [1, 0, 0, ''], null, {
      showVertices: false,
      showFaces: true,
      curve: true,
      order: 20,
      centered: false,
      ambiance: 'colorful',
    }),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" dimensions={4} /> 5-3-4 honeycomb
      </>
    ),
    params: honeycomb([5, 3, 4], [1, 0, 0, 0], null, {
      zoom: 1.5,
    }),
  },
  {
    name: (
      <>
        <Space
          type="hyperbolic"
          subtype="lorentzian"
          level={2}
          dimensions={4}
        />{' '}
        7-3-3 paracompact honeycomb
      </>
    ),
    params: honeycomb([7, 3, 3], [1, 0, 0, 0], null, {
      zoom: 1.5,
      showFaces: true,
      showVertices: true,
      segments: 16,
    }),
  },
  {
    name: (
      <>
        <Space type="hyperbolic" subtype="paracompact" dimensions={4} /> Ideal
        Pentahedron
      </>
    ),
    params: tiling([5, 3, 6], [1, 0, 0, ''], null, {
      showVertices: false,
      showFaces: true,
      curve: true,
      order: 1,
      centered: false,
      segments: 32,
      easing: 'quartic',
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
    params: polytope([32, 2, 32], [1, 0, 0, 1], null, {
      showVertices: false,
      showFaces: false,
      curve: true,
      ambiance: 'neon',
      zoom: 3,
      edgeThickness: 5,
    }),
  },

  {
    type: 'title',
    content: (
      <>
        <Space type="finite" /> Spherical space
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
    name: 'Tetrahedron',
    params: polytope([3, 3]),
    subforms: [
      {
        name: 'Truncated Tetrahedron',
        params: polytope([3, 3], [1, 1, 0]),
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
    ],
  },

  {
    name: 'Snub Cube',
    params: polytope([4, 3], ['s', 's', 's']),
  },
  {
    name: 'Snub Dodecahedron',
    params: polytope([5, 3], ['s', 's', 's']),
  },
  {
    name: 'Great Dodecahedron',
    params: polytope([5, 5], [1, 0, 0], [1, 2]),
  },
  {
    name: 'Great Icosahedron',
    params: polytope([3, 5], [1, 0, 0], [1, 2]),
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
    name: 'Stellated Octahedron',
    params: polytope([2, 2], ['ß', 'ß', 'ß']),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="finite" dimensions={4} /> Polychora
      </>
    ),
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
    params: polytope([3, 4, 3], ['s', 's', 0, 0]),
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
      [0, 0, 1, 0, 0, 0, 0, 0]
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
        <Space type="finite" dimensions={9} />
        Polyyotta
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
        <Space type="affine" /> Euclidean space
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
    name: 'Quarter cubic',
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
    params: ehoneycomb([3, 3, 4, 3], [1, 0, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
  {
    name: '24-cellic',
    params: ehoneycomb([3, 4, 3, 3], [1, 0, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
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
      [1, 0, 0, 0, 0],
      null,
      { grouper: 'toddcoxeter' }
    ),
  },
  {
    name: 'Quarter tesseractic',
    params: ehoneycomb(
      [
        [1, 2, 3, 2, 2],
        [2, 1, 3, 2, 2],
        [3, 3, 1, 3, 3],
        [2, 2, 3, 1, 2],
        [2, 2, 3, 2, 1],
      ],
      [1, 0, 0, 1, 0],
      null,
      { grouper: 'toddcoxeter' }
    ),
  },
  {
    type: 'title',
    content: (
      <>
        <Space type="hyperbolic" /> Hyperbolic space
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
  {
    name: 'Order-7 triangular',
    params: tiling([3, 7], [1, 0, 0]),
  },
  {
    name: 'Order-8 triangular',
    params: tiling([3, 8], [1, 0, 0]),
  },
  {
    name: 'Infinite Order triangular',
    params: tiling([3, 0], [1, 0, 0]),
  },
  {
    name: 'Order-5 square',
    params: tiling([4, 5], [1, 0, 0]),
  },
  {
    name: 'Order-6 square',
    params: tiling([4, 6], [1, 0, 0]),
  },
  {
    name: 'Order-7 square',
    params: tiling([4, 7], [1, 0, 0]),
  },
  {
    name: 'Order-8 square',
    params: tiling([4, 8], [1, 0, 0]),
  },
  {
    name: 'Infinite Order square',
    params: tiling([4, 0], [1, 0, 0]),
  },
  {
    name: 'Order-4 pentagonal',
    params: tiling([5, 4], [1, 0, 0]),
  },
  {
    name: 'Order-5 pentagonal',
    params: tiling([5, 5], [1, 0, 0]),
  },
  {
    name: 'Order-6 pentagonal',
    params: tiling([5, 6], [1, 0, 0]),
  },
  {
    name: 'Order-7 pentagonal',
    params: tiling([5, 7], [1, 0, 0]),
  },
  {
    name: 'Order-8 pentagonal',
    params: tiling([5, 8], [1, 0, 0]),
  },
  {
    name: 'Infinite Order pentagonal',
    params: tiling([5, 0], [1, 0, 0]),
  },
  {
    name: 'Order-4 hexagonal',
    params: tiling([6, 4], [1, 0, 0]),
  },
  {
    name: 'Order-5 hexagonal',
    params: tiling([6, 5], [1, 0, 0]),
  },
  {
    name: 'Order-6 hexagonal',
    params: tiling([6, 6], [1, 0, 0]),
  },
  {
    name: 'Order-7 hexagonal',
    params: tiling([6, 7], [1, 0, 0]),
  },
  {
    name: 'Order-8 hexagonal',
    params: tiling([6, 8], [1, 0, 0]),
  },
  {
    name: 'Infinite Order hexagonal',
    params: tiling([6, 0], [1, 0, 0]),
  },
  {
    name: 'Order-3 heptagonal',
    params: tiling([7, 3], [1, 0, 0]),
  },
  {
    name: 'Order-4 heptagonal',
    params: tiling([7, 4], [1, 0, 0]),
  },
  {
    name: 'Order-5 heptagonal',
    params: tiling([7, 5], [1, 0, 0]),
  },
  {
    name: 'Order-6 heptagonal',
    params: tiling([7, 6], [1, 0, 0]),
  },
  {
    name: 'Order-7 heptagonal',
    params: tiling([7, 7], [1, 0, 0]),
  },
  {
    name: 'Order-8 heptagonal',
    params: tiling([7, 8], [1, 0, 0]),
  },
  {
    name: 'Infinite Order heptagonal',
    params: tiling([7, 0], [1, 0, 0]),
  },
  {
    name: 'Order-3 octagonal',
    params: tiling([8, 3], [1, 0, 0]),
  },
  {
    name: 'Order-4 octagonal',
    params: tiling([8, 4], [1, 0, 0]),
  },
  {
    name: 'Order-5 octagonal',
    params: tiling([8, 5], [1, 0, 0]),
  },
  {
    name: 'Order-6 octagonal',
    params: tiling([8, 6], [1, 0, 0]),
  },
  {
    name: 'Order-7 octagonal',
    params: tiling([8, 7], [1, 0, 0]),
  },
  {
    name: 'Order-8 octagonal',
    params: tiling([8, 8], [1, 0, 0]),
  },
  {
    name: 'Infinite Order octagonal',
    params: tiling([8, 0], [1, 0, 0]),
  },
  {
    name: 'Order-3 apeirogonal',
    params: tiling([0, 3], [1, 0, 0]),
  },
  {
    name: 'Order-4 apeirogonal',
    params: tiling([0, 4], [1, 0, 0]),
  },
  {
    name: 'Order-5 apeirogonal',
    params: tiling([0, 5], [1, 0, 0]),
  },
  {
    name: 'Order-6 apeirogonal',
    params: tiling([0, 6], [1, 0, 0]),
  },
  {
    name: 'Order-7 apeirogonal',
    params: tiling([0, 7], [1, 0, 0]),
  },
  {
    name: 'Order-8 apeirogonal',
    params: tiling([0, 8], [1, 0, 0]),
  },
  {
    name: 'Infinite Order apeirogonal',
    params: tiling([0, 0], [1, 0, 0]),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="hyperbolic" subtype="compact" dimensions={4} /> Honeycombs
        compacts
      </>
    ),
  },
  {
    name: 'Icosahedral',
    params: honeycomb([3, 5, 3], [1, 0, 0, 0]),
  },
  {
    name: 'Order-4 dodecahedral',
    params: honeycomb([5, 3, 4], [1, 0, 0, 0]),
  },
  {
    name: 'Order-5 dodecahedral',
    params: honeycomb([5, 3, 5], [1, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
  {
    name: 'Alternated Order-5 cubic',
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
    name: 'Tetrahedral cubic',
    params: honeycomb(
      [
        [1, 4, 2, 3],
        [4, 1, 3, 2],
        [2, 3, 1, 3],
        [3, 2, 3, 1],
      ],
      [1, 0, 0, 0],
      null,
      {
        grouper: 'toddcoxeter',
      }
    ),
  },
  {
    name: 'Tetrahedral dodecahedral',
    params: honeycomb(
      [
        [1, 3, 2, 5],
        [3, 1, 3, 2],
        [2, 3, 1, 3],
        [5, 2, 3, 1],
      ],
      [1, 0, 0, 0],
      null,
      {
        grouper: 'toddcoxeter',
      }
    ),
  },
  {
    name: 'Cubic octahedral',
    params: honeycomb(
      [
        [1, 3, 2, 4],
        [3, 1, 4, 2],
        [2, 4, 1, 3],
        [4, 2, 3, 1],
      ],
      [1, 0, 0, 0],
      null,
      {
        grouper: 'toddcoxeter',
      }
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
      null,
      {
        grouper: 'toddcoxeter',
      }
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
      null,
      {
        grouper: 'toddcoxeter',
      }
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space type="hyperbolic" subtype="paracompact" dimensions={4} />{' '}
        Honeycombs paracompacts
      </>
    ),
  },
  {
    name: 'Triangular',
    params: honeycomb([3, 6, 3], [1, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
  {
    name: 'Hexagonal',
    params: honeycomb([6, 3, 3], [1, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
  {
    name: 'Order-6 tetrahedral',
    params: honeycomb([3, 3, 6], [1, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
  {
    name: 'Alternated Order-6 cubic',
    params: honeycomb(
      [
        [1, 2, 3, 2],
        [2, 1, 3, 2],
        [3, 3, 1, 6],
        [2, 2, 6, 1],
      ],
      [1, 0, 0, 0],
      null,
      {
        grouper: 'toddcoxeter',
      }
    ),
  },
  {
    name: 'Order-5 hexagonal',
    params: honeycomb([6, 3, 5], [1, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
  {
    name: 'Alternated Order-5 hexagonal',
    params: honeycomb(
      [
        [1, 2, 3, 2],
        [2, 1, 3, 2],
        [3, 3, 1, 5],
        [2, 2, 5, 1],
      ],
      [1, 0, 0, 0],
      null,
      {
        grouper: 'toddcoxeter',
      }
    ),
  },
  {
    name: 'Order-6 hexagonal',
    params: honeycomb([6, 3, 6], [1, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
  {
    name: 'Square',
    params: honeycomb([4, 4, 3], [1, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
  {
    name: 'Alternated square',
    params: honeycomb(
      [
        [1, 2, 4, 2],
        [2, 1, 4, 2],
        [4, 4, 1, 3],
        [2, 2, 3, 1],
      ],
      [1, 0, 0, 0],
      null,
      {
        grouper: 'toddcoxeter',
      }
    ),
  },
  {
    name: 'Order-4 square',
    params: honeycomb([4, 4, 4], [0, 1, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
  {
    name: 'Tetrahedral square',
    params: honeycomb(
      [
        [1, 4, 2, 4],
        [4, 1, 3, 2],
        [2, 3, 1, 3],
        [4, 2, 3, 1],
      ],
      [0, 1, 0, 0],
      null,
      {
        grouper: 'toddcoxeter',
      }
    ),
  },
  {
    name: 'Cubic square',
    params: honeycomb(
      [
        [1, 4, 2, 4],
        [4, 1, 3, 2],
        [2, 3, 1, 4],
        [4, 2, 4, 1],
      ],
      [1, 0, 0, 0],
      null,
      {
        grouper: 'toddcoxeter',
      }
    ),
  },
  // {
  //   name: 'Alternated Cubic square',
  //   params: honeycomb(
  //     [
  //       [1, 2, 4, 3],
  //       [2, 1, 3, 2],
  //       [4, 3, 1, 4],
  //       [3, 2, 4, 1],
  //     ],
  //     [1, 0, 0, 0, 1],
  //     null,
  //     {
  //       grouper: 'toddcoxeter',
  //     }
  //   ),
  // },
  {
    name: 'Quarter order square',
    params: honeycomb(
      [
        [1, 4, 2, 4],
        [4, 1, 4, 2],
        [2, 4, 1, 4],
        [4, 2, 4, 1],
      ],
      [1, 0, 0, 0],
      null,
      {
        grouper: 'toddcoxeter',
      }
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
      null,
      {
        grouper: 'toddcoxeter',
      }
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
      null,
      {
        grouper: 'toddcoxeter',
      }
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
      null,
      {
        grouper: 'toddcoxeter',
      }
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
      [1, 0, 0, 0],
      null,
      {
        grouper: 'toddcoxeter',
      }
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
      null,
      {
        grouper: 'toddcoxeter',
      }
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
      null,
      {
        grouper: 'toddcoxeter',
      }
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
      null,
      {
        grouper: 'toddcoxeter',
      }
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
      null,
      {
        grouper: 'toddcoxeter',
      }
    ),
  },
  {
    name: 'Quarter Order-4 hexagonal',
    params: honeycomb(
      [
        [1, 3, 3, 2],
        [3, 1, 3, 3],
        [3, 3, 1, 3],
        [2, 3, 3, 1],
      ],
      [1, 1, 0, 0],
      null,
      {
        grouper: 'toddcoxeter',
      }
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
      null,
      {
        grouper: 'toddcoxeter',
      }
    ),
  },
  {
    type: 'group',
    content: (
      <>
        <Space
          type="hyperbolic"
          subtype="lorentzian"
          level={2}
          dimensions={4}
        />{' '}
        Honeycombs lorentzians
      </>
    ),
  },
  {
    name: '3-3-7',
    params: honeycomb([3, 3, 7], [1, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
  {
    name: '3-4-7',
    params: honeycomb([3, 3, 7], [1, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
  {
    name: '3-5-7',
    params: honeycomb([3, 5, 7], [1, 0, 0, 0], null, {
      grouper: 'toddcoxeter',
    }),
  },
]
