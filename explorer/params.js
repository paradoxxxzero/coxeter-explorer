import { types } from '../statics'
import { defaultParams } from './default'
import { abs, min, sign } from './math'
import { coxeterToGram } from './math/hypermath'
import { det, ident } from './math/matrix'
import { mirrorTypes } from './mirrors'

export const defaultProjection = (dimension, dimensions) =>
  dimension === 3
    ? 'perspective'
    : dimension === dimensions
    ? 'stereographic'
    : 'scale'

export const normalizeCoxeter = params => {
  if (
    params.coxeter.length !== params.dimensions ||
    params.coxeter.some(r => r.length !== params.dimensions)
  ) {
    const oldCoxeter = params.coxeter
    params.coxeter = new Array(params.dimensions)
      .fill()
      .map((row, i) =>
        new Array(params.dimensions)
          .fill()
          .map((_, j) => (i === j ? 1 : i === j + 1 || i + 1 === j ? 3 : 2))
      )

    for (let i = 0; i < min(oldCoxeter.length, params.dimensions); i++) {
      for (let j = 0; j < i; j++) {
        params.coxeter[i][j] = oldCoxeter[i][j]
        params.coxeter[j][i] = oldCoxeter[i][j]
      }
    }
  }
  if (params.mirrors.length !== params.dimensions) {
    const oldMirrors = params.mirrors
    params.mirrors = new Array(params.dimensions).fill(0)

    for (let i = 0; i < min(oldMirrors.length, params.dimensions); i++) {
      params.mirrors[i] = oldMirrors[i]
    }
  }
  if (
    params.stellation.length !== params.dimensions ||
    params.stellation.some(r => r.length !== params.dimensions)
  ) {
    const oldStellation = params.stellation
    params.stellation = new Array(params.dimensions)
      .fill()
      .map(() => new Array(params.dimensions).fill(1))

    for (let i = 0; i < min(oldStellation.length, params.dimensions); i++) {
      for (let j = 0; j < i; j++) {
        params.stellation[i][j] = oldStellation[i][j]
        params.stellation[j][i] = oldStellation[j][i]
      }
    }
  }
  return params
}

export const filterParams = (maybeBadParams, changed = [], oldParams) => {
  const params = {
    ...maybeBadParams,
  }
  const badParams = []
  // Remove bad params
  Object.entries(params).forEach(([key, value]) => {
    if (typeof defaultParams[key] === 'number' || key.startsWith('fov')) {
      if (value === '' || isNaN(value)) {
        delete params[key]
        badParams.push(key)
      }
    } else if (Array.isArray(defaultParams[key]) && key !== 'hidden') {
      // arrays of arrays of numbers
      if (Array.isArray(value[0])) {
        if (
          value.find(c =>
            c.find(d => value === '' || (key !== 'coxeter' && isNaN(d)))
          )
        ) {
          delete params[key]
          badParams.push(key)
        }
      } else {
        // arrays of numbers
        if (
          value.find(
            c =>
              value === '' ||
              (isNaN(c) &&
                !(key === 'mirrors' && Object.values(mirrorTypes).includes(c)))
          )
        ) {
          delete params[key]
          badParams.push(key)
        }
      }
    }
  })
  if (
    !changed.includes('limit') &&
    ['coxeter', 'dimensions', 'stellation', 'mirrors', 'centered'].some(c =>
      changed.includes(c)
    )
  ) {
    params.limit = params.start
  }

  if (
    ['coxeter', 'dimensions', 'stellation', 'mirrors'].some(c =>
      changed.includes(c)
    )
  ) {
    // Keep only hidden groups
    params.hidden = oldParams.hidden.filter(h => types.includes(h))
  }

  // Normalize params
  if (!badParams.includes('coxeter')) {
    normalizeCoxeter(params)
  }
  if (
    params.section.length !== params.dimensions + 1 ||
    ['coxeter', 'dimensions', 'stellation', 'mirrors', 'dimensions'].some(c =>
      changed.includes(c)
    )
  ) {
    params.section = new Array(params.dimensions + 1).fill(0)
    params.section[params.section.length - 2] = 1
    const newGram = coxeterToGram(params.coxeter, params.stellation)
    const newPseudoCurvature = det(newGram)
    params.section[params.section.length - 1] =
      newPseudoCurvature < 0 && abs(newPseudoCurvature) > 1e-6 ? 2 : 0
  }
  if (
    params.matrix.length !== params.dimensions ||
    params.matrix.some(r => r.length !== params.dimensions)
  ) {
    params.matrix = ident(params.dimensions)
  } else if (changed.includes('coxeter') || changed.includes('stellation')) {
    // Reset rotation matrix if curvature changed
    // We check curvature using only the gram determinant
    // It's not entirely correct but it's fast and works for most cases
    const oldGram = coxeterToGram(oldParams.coxeter, oldParams.stellation)
    const newGram = coxeterToGram(params.coxeter, params.stellation)
    const oldPseudoCurvature = det(oldGram)
    const newPseudoCurvature = det(newGram)
    if (oldPseudoCurvature !== newPseudoCurvature) {
      params.matrix = ident(params.dimensions)
    }
  }
  if (params.reciprocation > params.dimensions - 1) {
    params.reciprocation = params.dimensions - 1
  }

  for (let i = 3; i <= 9; i++) {
    if (i <= params.dimensions) {
      if (!params[`fov${i}`] && !badParams.includes(`fov${i}`)) {
        params[`fov${i}`] = 90
      }
      if (!params[`projection${i}`] && !badParams.includes(`projection${i}`)) {
        params[`projection${i}`] = 'perspective'
      }
    } else {
      if (`fov${i}` in params) {
        delete params[`fov${i}`]
      }
      if (`projection${i}` in params) {
        delete params[`projection${i}`]
      }
    }
  }

  if (oldParams && changed.includes('dimensions')) {
    // Shift projections from smallest
    const s = sign(oldParams.dimensions - params.dimensions)
    for (let i = 4; i <= params.dimensions; i++) {
      params[`projection${i}`] =
        i + s === 3 ? 'scale' : oldParams[`projection${i + s}`]
    }
    if (params.dimensions !== 3) {
      params.projection3 = 'perspective'
    }
    if (
      params.dimensions === 4 &&
      oldParams.dimensions === 3 &&
      oldParams.projection3 === 'perspective'
    ) {
      params.projection4 = 'stereographic'
    }
  }

  return { params, badParams }
}
