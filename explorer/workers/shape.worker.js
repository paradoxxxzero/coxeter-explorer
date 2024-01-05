import { types } from '../../statics'
import { arrayEquals, range } from '../../utils'
import { ambiances } from '../ambiances'
import { getShape } from '../math/shape'
import { ToddCoxeter, countCosets } from '../math/toddcoxeter'
import { getFundamentalObjects } from './fundamentalObjects'
import { getObjects } from './objects'

let cache, lasts, shape

onmessage = ({
  data: {
    first,
    space,
    dimensions,
    coxeter,
    stellation,
    mirrors,
    ambiance,
    draw,
    batch,
    hidden,
  },
}) => {
  try {
    let allDone = true
    if (first) {
      cache = new Map()
      lasts = [0, 0, 0]
      shape = getShape(dimensions, coxeter, stellation, mirrors, space)
    }
    const rootKey = range(shape.dimensions).join('-')
    const polytope = []
    const fundamental = mirrors.every(m => !m)

    const computeWords = {
      0: true,
      1: draw.edge && !fundamental,
      2: draw.face && !fundamental,
    }

    const visitShape = subshape => {
      subshape.children.forEach(visitShape)
      const compute = computeWords[subshape.dimensions]
      const type = types[subshape.dimensions]

      if (subshape?.new) {
        if (!polytope[subshape.dimensions]) {
          polytope[subshape.dimensions] = {
            dimensions: subshape.dimensions,
            processing: draw[type] ? 0 : undefined,
            count: 0,
            detail: [],
            aggregated: [],
            done: true,
          }
        }
        const eiqenvalues = space.eigens.values

        if (!cache.has(subshape.key)) {
          let limit = compute ? batch : 5
          if (type === 'edge' && space.curvature <= 0) {
            limit *= 1.5
          }
          const cached = {
            ...shape,
            keys: [subshape.key],
            subgens: subshape.quotient,
            facet: subshape.facet,
            subdimensions: subshape.dimensions,
            mirrors: subshape.mirrors,
            limit,
            ...(subshape.dimensions === 0 && !fundamental
              ? {
                  rootVertex: space.rootVertex,
                  rootNormals: space.rootNormals,
                  metric: space.metric,
                }
              : {}),
          }
          cache.set(subshape.key, cached)
        } else {
          cache.get(subshape.key).keys.push(subshape.key)
        }

        const cached = cache.get(subshape.key)
        if (!cached.done) {
          if (compute) {
            // Also extract words to generate the shape
            ToddCoxeter(cached)
            if (eiqenvalues.some(x => x <= 0)) {
              cached.count = Infinity
            } else {
              cached.count = cached.cosets.size
            }
          } else {
            if (eiqenvalues.some(x => x <= 0)) {
              cached.count = Infinity
              cached.done = true
            } else {
              cached.count = countCosets(cached)
            }
          }
        }

        polytope[subshape.dimensions].detail.push({
          key: subshape.key,
          coxeter: subshape.coxeter,
          stellation: subshape.stellation,
          mirrors: subshape.mirrors,

          count: cached.count,
          done: cached.done,
        })

        const aggregated = polytope[subshape.dimensions].aggregated.find(
          ({ coxeter, stellation, mirrors }) =>
            arrayEquals(coxeter, subshape.coxeter) &&
            arrayEquals(stellation, subshape.stellation) &&
            arrayEquals(mirrors, subshape.mirrors)
        )
        if (aggregated) {
          aggregated.done = aggregated.done && cached.done
          aggregated.count += cached.count
          aggregated.key += ',' + subshape.key
        } else {
          polytope[subshape.dimensions].aggregated.push({
            key: subshape.key,
            coxeter: subshape.coxeter,
            stellation: subshape.stellation,
            mirrors: subshape.mirrors,

            count: cached.count,
            done: cached.done,
          })
        }
        if (draw[type] && cached.words) {
          polytope[subshape.dimensions].processing += cached.words.size
        }
        polytope[subshape.dimensions].count += cached.count
        polytope[subshape.dimensions].done =
          polytope[subshape.dimensions].done && cached.done

        allDone = allDone && cached.done
      }
    }

    shape.children.forEach(visitShape)

    const rootCached = cache.get(rootKey)
    if (shape.dimensions === 2) {
      shape.currentWords = new Map([[1, '']])
      shape.facet = Array.from(rootCached.words.values())
      shape.done = true
      cache.set('', {
        ...shape,
        subgens: shape.subgens,
        facet: shape.facet,
        subdimensions: shape.dimensions,
        mirrors: shape.mirrors,
      })
      polytope[2] = {
        dimensions: 2,
        processing: 1,
        count: 0,
        detail: [
          {
            key: '',
            coxeter: shape.coxeter,
            stellation: shape.stellation,
            mirrors: shape.mirrors,

            count: 1,
            done: true,
          },
        ],
        aggregated: [],
        done: true,
      }
    }

    if (
      polytope[0].done &&
      (!draw.edge || polytope[1]?.done) &&
      (!draw.face || polytope[2]?.done)
    ) {
      for (let cached of cache.values()) {
        cached.limit = 200
      }
    }

    const objects = []
    if (fundamental) {
      const fundamentalObjects = getFundamentalObjects(rootCached, shape, space)
      for (let i = 0; i < fundamentalObjects.length; i++) {
        if (draw[types[i]]) {
          objects.push({
            start: lasts[i],
            size: fundamentalObjects[i].length,
            objects: [fundamentalObjects[i]],
            partials: [],
          })
          lasts[i] += fundamentalObjects[i].length
        } else {
          objects.push(null)
        }
      }
    } else {
      for (let i = 0; i < 3; i++) {
        if (!draw[types[i]] || !polytope[i]) {
          objects.push(null)
          continue
        }
        const parts = {
          start: lasts[i],
          size: 0,
          objects: [],
          partials: [],
        }
        for (let j = 0; j < polytope[i].detail.length; j++) {
          const detail = polytope[i].detail[j]
          if (hidden.includes(detail.key)) {
            continue
          }
          const cached = cache.get(detail.key)

          if (cached.currentWords.size) {
            const { objects, partials } = getObjects(
              cached,
              shape,
              space,
              rootCached
            )
            parts.objects.push(objects)
            parts.size += objects.length + partials.length
            lasts[i] += objects.length
            parts.partials.push(partials)
          }
        }
        objects.push(parts)
      }
    }

    const data = []
    const infos = []
    const arity = shape.dimensions > 4 ? 9 : shape.dimensions
    for (let i = 0; i < objects.length; i++) {
      const parts = objects[i]
      if (!parts) {
        data.push(null)
        infos.push(null)
        continue
      }
      const buffers = [new Float32Array(parts.size * 3)]
      for (let j = 0; j < i + 1; j++) {
        buffers.push(new Float32Array(parts.size * arity))
      }
      let idx = 0
      const allObjects = parts.objects.concat(parts.partials)
      for (let j = 0; j < allObjects.length; j++) {
        const objects = allObjects[j]

        for (let k = 0; k < objects.length; k++) {
          const object = objects[k]

          for (let l = 0; l < object.vertices.length; l++) {
            const vertex = object.vertices[l]
            for (let m = 0; m < vertex.length; m++) {
              buffers[l + 1][idx * arity + m] = vertex[m]
            }
          }
          const c = ambiances[ambiance].color({
            word: object.word,
            key: object.key,
            subShape: j % parts.objects.length, // For partials
            faceIndex: object.faceIndex,
            faceSize: object.faceSize,
            dimensions: shape.dimensions,
            draw,
            idx,
            size: parts.size,
            type: types[i],
          })
          buffers[0][idx * 3 + 0] = c[0]
          buffers[0][idx * 3 + 1] = c[1]
          buffers[0][idx * 3 + 2] = c[2]
          idx++
        }
      }
      data.push(buffers)
      infos.push({
        start: parts.start,
        size: parts.size,
      })
    }

    // Used for limiting
    polytope.size = fundamental
      ? rootCached.words.size
      : rootCached.vertices.size
    polytope.done = allDone

    postMessage(
      { polytope, infos, data },
      { options: { transfer: [data.flat(1)] } }
    )
  } catch (e) {
    postMessage({ error: e.message })
  }
}
