import { min } from '../math'

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
  const { dimensions } = coxeterParams
  const params = {
    ...coxeterParams,
    showVertices: dimensions <= 3,
    showFaces: dimensions <= 4,
    curve: dimensions > 3,
    grouper: 'toddcoxeter',
    ambiance: dimensions > 3 ? 'colorful' : 'colorfulDepth',
    ...(extra || {}),
  }
  if (mirrors) {
    params.mirrors = mirrors
  }
  if (stellationArgs) {
    params.stellation = stellation_(...stellationArgs).stellation
  }
  if (dimensions > 4) {
    for (let i = 4; i <= dimensions; i++) {
      params[`fov${i}`] = (10 - i) * 10
    }
  }
  return params
}

const honeycomb = (coxeterArgs, mirrors, stellationArgs, extra) => {
  return {
    ...polytope(coxeterArgs, mirrors, stellationArgs),
    ambiance: 'neon',
    showFaces: false,
    grouper: '',
    edgeThickness: 10,
    ...extra,
  }
}

export const presetsGroups = {
  Spherical: {
    'Polyedra (3d)': [
      {
        name: 'Tetrahedron',
        params: polytope([3, 3]),
      },
      {
        name: 'Cube',
        params: polytope([4, 3]),
      },
      {
        name: 'Octahedron',
        params: polytope([3, 4]),
      },
      {
        name: 'Dodecahedron',
        params: polytope([5, 3]),
      },
      {
        name: 'Icosahedron',
        params: polytope([3, 5]),
      },
      {
        name: 'Cuboctahedron',
        params: polytope([4, 3], [0, 1, 0]),
      },
      {
        name: 'Icosidodecahedron',
        params: polytope([5, 3], [0, 1, 0]),
      },
      {
        name: 'Truncated Tetrahedron',
        params: polytope([3, 3], [1, 1, 0]),
      },
      {
        name: 'Truncated Cube',
        params: polytope([4, 3], [1, 1, 0]),
      },
      { name: 'Truncate Octahedron', params: polytope([3, 4], [1, 1, 0]) },
      { name: 'Truncate Dodecahedron', params: polytope([5, 3], [1, 1, 0]) },
      { name: 'Truncate Icosahedron', params: polytope([3, 5], [1, 1, 0]) },
      {
        name: 'Rhombicuboctahedron',
        params: polytope([4, 3], [1, 0, 1]),
      },
      {
        name: 'Rhombicosidodecahedron',
        params: polytope([5, 3], [1, 0, 1]),
      },
      {
        name: 'Truncated Cuboctahedron',
        params: polytope([4, 3], [1, 1, 1]),
      },
      {
        name: 'Truncated Icosidodecahedron',
        params: polytope([5, 3], [1, 1, 1]),
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
    ],
    'Polychora (4d)': [
      {
        name: '5-cell',
        params: polytope([3, 3, 3]),
      },
      {
        name: '8-cell',
        params: polytope([4, 3, 3]),
      },
      {
        name: '16-cell',
        params: polytope([3, 3, 4]),
      },
      {
        name: '24-cell',
        params: polytope([3, 4, 3]),
      },
      {
        name: '120-cell',
        params: polytope([5, 3, 3]),
      },
      {
        name: '600-cell',
        params: polytope([3, 3, 5]),
      },
      {
        name: 'Rectified 5-cell',
        params: polytope([3, 3, 3], [0, 1, 0, 0]),
      },
      {
        name: 'Rectified 8-cell',
        params: polytope([4, 3, 3], [0, 1, 0, 0]),
      },
      {
        name: 'Rectified 16-cell',
        params: polytope([3, 3, 4], [0, 1, 0, 0]),
      },
      {
        name: 'Rectified 24-cell',
        params: polytope([3, 4, 3], [0, 1, 0, 0]),
      },
      {
        name: 'Rectified 120-cell',
        params: polytope([5, 3, 3], [0, 1, 0, 0]),
      },
      {
        name: 'Rectified 600-cell',
        params: polytope([3, 3, 5], [0, 1, 0, 0]),
      },
      {
        name: 'Birectified 5-cell',
        params: polytope([3, 3, 3], [0, 0, 1, 0]),
      },
      {
        name: 'Birectified 8-cell',
        params: polytope([4, 3, 3], [0, 0, 1, 0]),
      },
      {
        name: 'Birectified 16-cell',
        params: polytope([3, 3, 4], [0, 0, 1, 0]),
      },
      {
        name: 'Birectified 24-cell',
        params: polytope([3, 4, 3], [0, 0, 1, 0]),
      },
      {
        name: 'Birectified 120-cell',
        params: polytope([5, 3, 3], [0, 0, 1, 0]),
      },
      {
        name: 'Birectified 600-cell',
        params: polytope([3, 3, 5], [0, 0, 1, 0]),
      },
      {
        name: 'Truncated 5-cell',
        params: polytope([3, 3, 3], [1, 1, 0, 0]),
      },
      {
        name: 'Truncated 8-cell',
        params: polytope([4, 3, 3], [1, 1, 0, 0]),
      },
      {
        name: 'Truncated 16-cell',
        params: polytope([3, 3, 4], [1, 1, 0, 0]),
      },
      {
        name: 'Truncated 24-cell',
        params: polytope([3, 4, 3], [1, 1, 0, 0]),
      },
      {
        name: 'Truncated 120-cell',
        params: polytope([5, 3, 3], [1, 1, 0, 0]),
      },
      {
        name: 'Truncated 600-cell',
        params: polytope([3, 3, 5], [1, 1, 0, 0]),
      },
      {
        name: 'Cantellated 5-cell',
        params: polytope([3, 3, 3], [1, 0, 1, 0]),
      },
      {
        name: 'Cantellated 8-cell',
        params: polytope([4, 3, 3], [1, 0, 1, 0]),
      },
      {
        name: 'Cantellated 16-cell',
        params: polytope([3, 3, 4], [1, 0, 1, 0]),
      },
      {
        name: 'Cantellated 24-cell',
        params: polytope([3, 4, 3], [1, 0, 1, 0]),
      },
      {
        name: 'Cantellated 120-cell',
        params: polytope([5, 3, 3], [1, 0, 1, 0]),
      },
      {
        name: 'Cantellated 600-cell',
        params: polytope([3, 3, 5], [1, 0, 1, 0]),
      },
      {
        name: 'Bitruncated 5-cell',
        params: polytope([3, 3, 3], [0, 1, 1, 0]),
      },
      {
        name: 'Bitruncated 8-cell',
        params: polytope([4, 3, 3], [0, 1, 1, 0]),
      },
      {
        name: 'Bitruncated 16-cell',
        params: polytope([3, 3, 4], [0, 1, 1, 0]),
      },
      {
        name: 'Bitruncated 24-cell',
        params: polytope([3, 4, 3], [0, 1, 1, 0]),
      },
      {
        name: 'Bitruncated 120-cell',
        params: polytope([5, 3, 3], [0, 1, 1, 0]),
      },
      {
        name: 'Bitruncated 600-cell',
        params: polytope([3, 3, 5], [0, 1, 1, 0]),
      },
      {
        name: 'Runcinated 5-cell',
        params: polytope([3, 3, 3], [1, 0, 0, 1]),
      },
      {
        name: 'Runcinated 8-cell',
        params: polytope([4, 3, 3], [1, 0, 0, 1]),
      },
      {
        name: 'Runcinated 16-cell',
        params: polytope([3, 3, 4], [1, 0, 0, 1]),
      },
      {
        name: 'Runcinated 24-cell',
        params: polytope([3, 4, 3], [1, 0, 0, 1]),
      },
      {
        name: 'Runcinated 120-cell',
        params: polytope([5, 3, 3], [1, 0, 0, 1]),
      },
      {
        name: 'Runcinated 600-cell',
        params: polytope([3, 3, 5], [1, 0, 0, 1]),
      },
      {
        name: 'Runcitruncated 5-cell',
        params: polytope([3, 3, 3], [1, 1, 0, 1]),
      },
      {
        name: 'Runcitruncated 8-cell',
        params: polytope([4, 3, 3], [1, 1, 0, 1]),
      },
      {
        name: 'Runcitruncated 16-cell',
        params: polytope([3, 3, 4], [1, 1, 0, 1]),
      },
      {
        name: 'Runcitruncated 24-cell',
        params: polytope([3, 4, 3], [1, 1, 0, 1]),
      },
      {
        name: 'Runcitruncated 120-cell',
        params: polytope([5, 3, 3], [1, 1, 0, 1]),
      },
      {
        name: 'Runcitruncated 600-cell',
        params: polytope([3, 3, 5], [1, 1, 0, 1]),
      },
      {
        name: 'Omnitruncated 5-cell',
        params: polytope([3, 3, 3], [1, 1, 1, 1]),
      },
      {
        name: 'Omnitruncated 8-cell',
        params: polytope([4, 3, 3], [1, 1, 1, 1]),
      },
      {
        name: 'Omnitruncated 16-cell',
        params: polytope([3, 3, 4], [1, 1, 1, 1]),
      },
      {
        name: 'Omnitruncated 24-cell',
        params: polytope([3, 4, 3], [1, 1, 1, 1]),
      },
      {
        name: 'Omnitruncated 120-cell',
        params: polytope([5, 3, 3], [1, 1, 1, 1]),
      },
      {
        name: 'Omnitruncated 600-cell',
        params: polytope([3, 3, 5], [1, 1, 1, 1]),
      },
      {
        name: 'Snub 24-cell',
        params: polytope([3, 4, 3], ['s', 's', 0, 0]),
      },
    ],
    'Polytera (5d)': [
      {
        name: '5-simplex',
        params: polytope([3, 3, 3, 3], [1, 0, 0, 0, 0]),
      },
      {
        name: '5-cube',
        params: polytope([4, 3, 3, 3], [1, 0, 0, 0, 0]),
      },
      {
        name: '5-orthoplex',
        params: polytope([3, 3, 3, 4], [1, 0, 0, 0, 0]),
      },
      {
        name: '5-demicube',
        params: polytope(
          [
            [1, 2, 3, 2, 2],
            [2, 1, 3, 2, 2],
            [3, 3, 1, 3, 2],
            [2, 2, 3, 1, 3],
            [2, 2, 2, 3, 1],
          ],
          [1, 0, 0, 0, 0]
        ),
      },
    ],
    'Polypeta (6d)': [
      {
        name: '6-simplex',
        params: polytope([3, 3, 3, 3, 3], [1, 0, 0, 0, 0, 0]),
      },
      {
        name: '6-cube',
        params: polytope([4, 3, 3, 3, 3], [1, 0, 0, 0, 0, 0]),
      },
      {
        name: '6-orthoplex',
        params: polytope([3, 3, 3, 3, 4], [1, 0, 0, 0, 0, 0]),
      },
      {
        name: '6-demicube',
        params: polytope(
          [
            [1, 2, 3, 2, 2, 2],
            [2, 1, 3, 2, 2, 2],
            [3, 3, 1, 3, 2, 2],
            [2, 2, 3, 1, 3, 2],
            [2, 2, 2, 3, 1, 3],
            [2, 2, 2, 2, 3, 1],
          ],
          [1, 0, 0, 0, 0, 0]
        ),
      },
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
    ],
    'Polypexa (7d)': [
      {
        name: '7-simplex',
        params: polytope([3, 3, 3, 3, 3, 3], [1, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: '7-cube',
        params: polytope([4, 3, 3, 3, 3, 3], [1, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: '7-orthoplex',
        params: polytope([3, 3, 3, 3, 3, 4], [1, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: '7-demicube',
        params: polytope(
          [
            [1, 2, 3, 2, 2, 2, 2],
            [2, 1, 3, 2, 2, 2, 2],
            [3, 3, 1, 3, 2, 2, 2],
            [2, 2, 3, 1, 3, 2, 2],
            [2, 2, 2, 3, 1, 3, 2],
            [2, 2, 2, 2, 3, 1, 3],
            [2, 2, 2, 2, 2, 3, 1],
          ],
          [1, 0, 0, 0, 0, 0, 0]
        ),
      },
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
    ],
    'Polyzetta (8d)': [
      {
        name: '8-simplex',
        params: polytope([3, 3, 3, 3, 3, 3, 3], [1, 0, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: '8-cube',
        params: polytope([4, 3, 3, 3, 3, 3, 3], [1, 0, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: '8-orthoplex',
        params: polytope([3, 3, 3, 3, 3, 3, 4], [1, 0, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: '8-demicube',
        params: polytope(
          [
            [1, 2, 3, 2, 2, 2, 2, 2],
            [2, 1, 3, 2, 2, 2, 2, 2],
            [3, 3, 1, 3, 2, 2, 2, 2],
            [2, 2, 3, 1, 3, 2, 2, 2],
            [2, 2, 2, 3, 1, 3, 2, 2],
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
    ],
    'Polyyotta (9d)': [
      {
        name: '9-simplex',
        params: polytope([3, 3, 3, 3, 3, 3, 3, 3], [1, 0, 0, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: '9-cube',
        params: polytope([4, 3, 3, 3, 3, 3, 3, 3], [1, 0, 0, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: '9-orthoplex',
        params: polytope([3, 3, 3, 3, 3, 3, 3, 4], [1, 0, 0, 0, 0, 0, 0, 0, 0]),
      },
      {
        name: '9-demicube',
        params: polytope(
          [
            [1, 2, 3, 2, 2, 2, 2, 2, 2],
            [2, 1, 3, 2, 2, 2, 2, 2, 2],
            [3, 3, 1, 3, 2, 2, 2, 2, 2],
            [2, 2, 3, 1, 3, 2, 2, 2, 2],
            [2, 2, 2, 3, 1, 3, 2, 2, 2],
            [2, 2, 2, 2, 3, 1, 3, 2, 2],
            [2, 2, 2, 2, 2, 3, 1, 3, 2],
            [2, 2, 2, 2, 2, 2, 3, 1, 3],
            [2, 2, 2, 2, 2, 2, 2, 3, 1],
          ],
          [1, 0, 0, 0, 0, 0, 0, 0]
        ),
      },
    ],
  },
  Euclidean: {
    '2d': [
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
    ],
    '3d': [
      {
        name: 'Cubic',
        params: honeycomb([4, 3, 4], [1, 0, 0, 0]),
      },
      {
        name: 'Octet',
        params: honeycomb(
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
        params: honeycomb(
          [
            [1, 3, 2, 3],
            [3, 1, 3, 2],
            [2, 3, 1, 3],
            [3, 2, 3, 1],
          ],
          [1, 0, 0, 1]
        ),
      },
    ],
    '4d': [
      {
        name: 'Tesseractic',
        params: honeycomb([4, 3, 3, 4], [1, 0, 0, 0, 0]),
      },
      {
        name: '16-cellic',
        params: honeycomb([3, 3, 4, 3], [1, 0, 0, 0, 0], null, {
          grouper: 'toddcoxeter',
        }),
      },
      {
        name: '24-cellic',
        params: honeycomb([3, 4, 3, 3], [1, 0, 0, 0, 0], null, {
          grouper: 'toddcoxeter',
        }),
      },
      {
        name: '4-simpletic',
        params: honeycomb(
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
        params: honeycomb(
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
    ],
  },
  Hyperbolic: {
    '2d': [
      {
        name: 'Order-7 triangular',
        params: polytope([3, 7], [1, 0, 0]),
      },
      {
        name: 'Order-8 triangular',
        params: polytope([3, 8], [1, 0, 0]),
      },
      {
        name: 'Infinite Order triangular',
        params: polytope([3, Infinity], [1, 0, 0]),
      },
      {
        name: 'Order-5 square',
        params: polytope([4, 5], [1, 0, 0]),
      },
      {
        name: 'Order-6 square',
        params: polytope([4, 6], [1, 0, 0]),
      },
      {
        name: 'Order-7 square',
        params: polytope([4, 7], [1, 0, 0]),
      },
      {
        name: 'Order-8 square',
        params: polytope([4, 8], [1, 0, 0]),
      },
      {
        name: 'Infinite Order square',
        params: polytope([4, Infinity], [1, 0, 0]),
      },
      {
        name: 'Order-4 pentagonal',
        params: polytope([5, 4], [1, 0, 0]),
      },
      {
        name: 'Order-5 pentagonal',
        params: polytope([5, 5], [1, 0, 0]),
      },
      {
        name: 'Order-6 pentagonal',
        params: polytope([5, 6], [1, 0, 0]),
      },
      {
        name: 'Order-7 pentagonal',
        params: polytope([5, 7], [1, 0, 0]),
      },
      {
        name: 'Order-8 pentagonal',
        params: polytope([5, 8], [1, 0, 0]),
      },
      {
        name: 'Infinite Order pentagonal',
        params: polytope([5, Infinity], [1, 0, 0]),
      },
      {
        name: 'Order-4 hexagonal',
        params: polytope([6, 4], [1, 0, 0]),
      },
      {
        name: 'Order-5 hexagonal',
        params: polytope([6, 5], [1, 0, 0]),
      },
      {
        name: 'Order-6 hexagonal',
        params: polytope([6, 6], [1, 0, 0]),
      },
      {
        name: 'Order-7 hexagonal',
        params: polytope([6, 7], [1, 0, 0]),
      },
      {
        name: 'Order-8 hexagonal',
        params: polytope([6, 8], [1, 0, 0]),
      },
      {
        name: 'Infinite Order hexagonal',
        params: polytope([6, Infinity], [1, 0, 0]),
      },
      {
        name: 'Order-3 heptagonal',
        params: polytope([7, 3], [1, 0, 0]),
      },
      {
        name: 'Order-4 heptagonal',
        params: polytope([7, 4], [1, 0, 0]),
      },
      {
        name: 'Order-5 heptagonal',
        params: polytope([7, 5], [1, 0, 0]),
      },
      {
        name: 'Order-6 heptagonal',
        params: polytope([7, 6], [1, 0, 0]),
      },
      {
        name: 'Order-7 heptagonal',
        params: polytope([7, 7], [1, 0, 0]),
      },
      {
        name: 'Order-8 heptagonal',
        params: polytope([7, 8], [1, 0, 0]),
      },
      {
        name: 'Infinite Order heptagonal',
        params: polytope([7, Infinity], [1, 0, 0]),
      },
      {
        name: 'Order-3 octagonal',
        params: polytope([8, 3], [1, 0, 0]),
      },
      {
        name: 'Order-4 octagonal',
        params: polytope([8, 4], [1, 0, 0]),
      },
      {
        name: 'Order-5 octagonal',
        params: polytope([8, 5], [1, 0, 0]),
      },
      {
        name: 'Order-6 octagonal',
        params: polytope([8, 6], [1, 0, 0]),
      },
      {
        name: 'Order-7 octagonal',
        params: polytope([8, 7], [1, 0, 0]),
      },
      {
        name: 'Order-8 octagonal',
        params: polytope([8, 8], [1, 0, 0]),
      },
      {
        name: 'Infinite Order octagonal',
        params: polytope([8, Infinity], [1, 0, 0]),
      },
      {
        name: 'Order-3 apeirogonal',
        params: polytope([Infinity, 3], [1, 0, 0]),
      },
      {
        name: 'Order-4 apeirogonal',
        params: polytope([Infinity, 4], [1, 0, 0]),
      },
      {
        name: 'Order-5 apeirogonal',
        params: polytope([Infinity, 5], [1, 0, 0]),
      },
      {
        name: 'Order-6 apeirogonal',
        params: polytope([Infinity, 6], [1, 0, 0]),
      },
      {
        name: 'Order-7 apeirogonal',
        params: polytope([Infinity, 7], [1, 0, 0]),
      },
      {
        name: 'Order-8 apeirogonal',
        params: polytope([Infinity, 8], [1, 0, 0]),
      },
      {
        name: 'Infinite Order apeirogonal',
        params: polytope([Infinity, Infinity], [1, 0, 0]),
      },
    ],
  },
}
