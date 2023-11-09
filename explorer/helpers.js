import { ambiances, easings, lightings, projections } from '../statics'
import ease from './shaders/includes/ease.glsl?raw'
import globals from './shaders/includes/globals.glsl?raw'
import helpers from './shaders/includes/helpers.glsl?raw'
import project from './shaders/includes/project.glsl?raw'
import lighting from './shaders/includes/lighting.glsl?raw'
import { min } from './math'
import { range } from '../utils'
import { columnMajor, ident } from './math/matrix'
import { render } from './render'

export const hueToRgb = (p, q, t) => {
  if (t < 0) t += 1
  if (t > 1) t -= 1
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t
  }
  if (t < 1 / 2) {
    return q
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6
  }
  return p
}

export const hsl = (h, s, l) => {
  let r, g, b

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hueToRgb(p, q, h + 1 / 3)
    g = hueToRgb(p, q, h)
    b = hueToRgb(p, q, h - 1 / 3)
  }

  return [r, g, b]
}

export const resizeCanvasToDisplaySize = (canvas, multiplier) => {
  multiplier = multiplier || 1
  multiplier = Math.max(0, multiplier)
  const width = (canvas.clientWidth * multiplier) | 0
  const height = (canvas.clientHeight * multiplier) | 0
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
    return true
  }
  return false
}
export const includes = {
  globals,
  helpers,
  ease,
  project,
  lighting,
}
const preprocess = (source, dimensions) =>
  source
    .replace(/\bvecN\b/g, `vec${dimensions}`)
    .replace(/\bmatN\b/g, `mat${dimensions}`)

export const augment = (rt, vertex, fragment) => {
  const ambiance = ambiances[rt.ambiance]
  let config = ''
  if (ambiance.lighting) {
    config += `#define LIGHTING ${lightings.indexOf(ambiance.lighting)}\n`
  }
  const easing =
    rt.easing === 'auto' //FIXME
      ? rt.spaceType?.startsWith('hyperbolic') && rt.projection4 !== 'inverted'
        ? 'quintic'
        : 'linear'
      : rt.easing
  config += `#define DIMENSIONS ${rt.dimensions}\n`
  for (let i = 3; i <= rt.dimensions; i++) {
    config += `#define PROJECTION${i} ${projections.indexOf(
      rt[`projection${i}`]
    )}\n`
  }
  config += `#define EASING ${easings.indexOf(easing)}\n`
  if (ambiance.opacity < 1 && ambiance.transparency === 'oit') {
    config += `#define OIT\n`
  }
  Object.entries({ ...includes, config }).forEach(([key, value]) => {
    vertex = vertex.replace(`#include ${key}`, value)
    fragment = fragment.replace(`#include ${key}`, value)
  })
  return [vertex, fragment].map(source => preprocess(source, rt.dimensions))
}

const compileShader = (rt, name, type, shaderSource, shader) => {
  rt.gl.shaderSource(shader, shaderSource)
  rt.gl.compileShader(shader)
  const success = rt.gl.getShaderParameter(shader, rt.gl.COMPILE_STATUS)
  if (!success) {
    const error = rt.gl.getShaderInfoLog(shader)
    console.error(
      `An error occurred compiling the ${name}->${type} shader: ${error}`,
      { shaderSource }
    )
    return error
  }
}

const linkProgram = (rt, name, program) => {
  const { gl } = rt
  gl.linkProgram(program)

  const success = gl.getProgramParameter(program, gl.LINK_STATUS)
  if (!success) {
    const error = gl.getProgramInfoLog(program)
    console.error(`Unable to initialize the ${name} shader program: ${error}`)
    return error
  }
}

export const compileProgram = (
  rt,
  name,
  vertex,
  fragment,
  uniformsDef = []
) => {
  const { gl } = rt

  const program = gl.createProgram()

  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  if (compileShader(rt, name, 'vertex', vertex, vertexShader)) {
    return
  }
  if (compileShader(rt, name, 'fragment', fragment, fragmentShader)) {
    return
  }

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)

  if (linkProgram(rt, name, program)) {
    return
  }
  const rv = {
    program,
    vertexShader,
    fragmentShader,
    uniformsDef,
    recompile(rt, newVertex, newFragment, uniforms = null) {
      if (compileShader(rt, name, 'vertex', newVertex, this.vertexShader)) {
        return
      }
      if (
        compileShader(rt, name, 'fragment', newFragment, this.fragmentShader)
      ) {
        return
      }
      if (linkProgram(rt, name, this.program)) {
        return
      }
      if (uniforms) {
        this.uniformsDef = uniforms
      }
      this.bindUniforms(rt)
    },
    bindUniforms(rt) {
      this.uniforms = {}
      this.uniformsDef.forEach(({ name, type, value }) => {
        this.uniforms[name] = uniform(rt, this.program, name, type)
        this.uniforms[name].update(value)
      })
    },
    // resetUniforms() {
    //   this.uniformsDef.forEach(({ name, type, value }) => {
    //     this.uniforms[name].update(value)
    //   })
    // },
  }
  rv.bindUniforms(rt)
  return rv
}

export const attribute = (
  rt,
  mesh,
  name,
  size,
  data,
  instances = null,
  type = null
) => {
  const { gl } = rt
  type = type || gl.FLOAT
  const byteSize = type === gl.FLOAT ? 4 : 2

  const attr = {
    name,
    mesh,
    indices,
    instances,
    data,
    size,
    type,
    update(start = null, end = null) {
      gl.bindVertexArray(this.mesh.vao)
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
      if (start === null && end === null) {
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW)
      } else {
        gl.bufferSubData(
          gl.ARRAY_BUFFER,
          start * this.size * byteSize,
          this.data,
          start * this.size,
          (end - start) * this.size
        )
      }
    },
    extend(size, newData, copy = false) {
      gl.bindVertexArray(this.mesh.vao)
      this.size = size
      this.location = gl.getAttribLocation(this.mesh.program, this.name)
      if (this.location === -1) {
        return
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
      const locSize = size > 4 ? 3 : 1
      // Force location on target and center to account for attrib size change
      if (this.name === 'target') {
        this.location = size > 4 ? 6 : 4
      }
      if (this.name === 'center') {
        this.location = size > 4 ? 9 : 5
      }
      for (let i = 0; i < locSize; i++) {
        gl.enableVertexAttribArray(this.location + i)
      }
      for (let i = 0; i < locSize; i++) {
        gl.vertexAttribPointer(
          this.location + i,
          size / locSize,
          this.type,
          false,
          size * byteSize,
          (size / locSize) * i * byteSize
        )
      }
      if (this.instances) {
        for (let i = 0; i < locSize; i++) {
          gl.vertexAttribDivisor(this.location + i, this.instances)
        }
      }
      if (newData) {
        if (copy) {
          if (newData.length >= this.data.length) {
            newData.set(this.data)
          }
        }
        this.data = newData
      }
      this.update()
    },
    get() {
      gl.bindVertexArray(this.mesh.vao)
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
      const rv = new Float32Array(this.data.length)
      gl.getBufferSubData(gl.ARRAY_BUFFER, 0, rv)
      return rv
    },
  }

  attr.buffer = gl.createBuffer()
  attr.extend(size)

  return attr
}

export const indices = (rt, vao, indices) => {
  const { gl } = rt
  gl.bindVertexArray(vao)
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)
  return {
    buffer,
    vao,
    indices,
    count: indices.length,
    update(newIndices) {
      gl.bindVertexArray(this.vao)
      this.indices = newIndices
      this.count = newIndices.length
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer)
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, newIndices, gl.STATIC_DRAW)
    },
  }
}

export const uniform = (rt, program, name, type) => {
  const { gl } = rt
  const uniform = {
    program,
    update(value) {
      gl.useProgram(this.program)
      if (type.startsWith('m')) {
        const n = parseInt(type.slice(1, 2))
        if (n > 4) {
          for (let i = 0; i < n; i++) {
            const location = gl.getUniformLocation(
              program,
              `${name}.c${i + 1}.v`
            )
            if (location !== null) {
              gl.uniform4fv(location, value[i][0])
            }
            if (n - 4 === 1) {
              const location = gl.getUniformLocation(
                program,
                `${name}.c${i + 1}.u`
              )
              if (location !== null) {
                gl.uniform1f(location, value[i][1])
              }
            } else if (n - 4 > 1) {
              const location = gl.getUniformLocation(
                program,
                `${name}.c${i + 1}.u`
              )
              if (location !== null) {
                gl[`uniform${min(n - 4, 4)}fv`](location, value[i][1])
              }
              if (n - 8 === 1) {
                const location = gl.getUniformLocation(
                  program,
                  `${name}.c${i + 1}.t`
                )
                if (location !== null) {
                  gl.uniform1f(location, value[i][2])
                }
              }
            }
          }
        } else {
          const location = gl.getUniformLocation(program, name)
          if (location !== null) {
            gl[`uniformMatrix${type.slice(1)}`](location, false, value)
          }
        }
      } else {
        const location = gl.getUniformLocation(program, name)
        if (location !== null) {
          gl[`uniform${type}`](location, value)
        }
      }
    },
    get() {
      gl.useProgram(this.program)
      const location = gl.getUniformLocation(program, name)
      if (location !== null) {
        return gl.getUniform(this.program, location)
      }
    },
  }
  return uniform
}

export const texture = (rt, type, scale = null) => {
  const { gl } = rt

  const width = scale
    ? ~~(scale * gl.drawingBufferWidth)
    : gl.drawingBufferWidth
  const height = scale
    ? ~~(scale * gl.drawingBufferHeight)
    : gl.drawingBufferHeight
  const texture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false)
  gl.texParameteri(
    gl.TEXTURE_2D,
    gl.TEXTURE_MAG_FILTER,
    scale ? gl.LINEAR : gl.NEAREST
  )
  gl.texParameteri(
    gl.TEXTURE_2D,
    gl.TEXTURE_MIN_FILTER,
    scale ? gl.LINEAR : gl.NEAREST
  )
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texStorage2D(gl.TEXTURE_2D, 1, type, width, height)
  return { texture, width, height }
}

export const pass = (rt, name, vertex, fragment, uniforms = []) => {
  const pass = {
    name,
    vertex,
    fragment,
    ...compileProgram(rt, name, vertex, fragment, uniforms),
    recompileProgram(rt) {
      this.recompile(rt, this.vertex, this.fragment, uniforms)
    },
  }
  return { [name]: pass }
}
export const mesh = (
  rt,
  type,
  vertex,
  fragment,
  geometryFunc,
  size,
  arity,
  visible = true,
  varying = ['position']
) => {
  const { gl } = rt
  const geometry = geometryFunc(rt.curve ? rt.segments : 1)
  const uniforms = rt => [
    {
      name: 'viewProjection',
      type: 'm4fv',
      value: columnMajor(ident(4)),
    },
    {
      name: 'matrix',
      type: `m${rt.dimensions}fv`,
      value: columnMajor(rt.matrix),
    },
    ...(ambiances[rt.ambiance].lighting
      ? [
          {
            name: 'eye',
            type: `3fv`,
            value: [0, 0, 0],
          },
        ]
      : []),
    {
      name: 'curvature',
      type: '1f',
      value: 0,
    },
    ...(['vertex', 'edge'].includes(type)
      ? [
          {
            name: 'thickness',
            type: '1f',
            value: 0,
          },
        ]
      : [
          {
            name: 'segments',
            type: '1f',
            value: rt.curve ? rt.segments : 1,
          },
          {
            name: 'opacity',
            type: '1f',
            value: 0,
          },
        ]),
    ...range(4, rt.dimensions + 1, 1, true).map(i => ({
      name: `fov${i}`,
      type: '1f',
      value: rt[`fov${i}`],
    })),
  ]

  arity = arity > 4 ? 9 : arity
  const mesh = {
    attributes: {},
    varying,
    vertex,
    fragment,
    ...compileProgram(rt, type, ...augment(rt, vertex, fragment), uniforms(rt)),
    recompileProgram(rt) {
      const [newVertex, newFragment] = augment(rt, this.vertex, this.fragment)
      this.recompile(rt, newVertex, newFragment, uniforms(rt))
    },
    changeArity(arity) {
      arity = arity > 4 ? 9 : arity
      if (this.arity === arity) {
        return
      }
      this.arity = arity
      varying.forEach(attr => {
        this.attributes[attr].extend(
          arity,
          new Float32Array(this.instances * arity),
          false
        )
      })
    },
    extendAttributes(maxSize) {
      this.instances = maxSize
      varying.forEach(attr => {
        this.attributes[attr].extend(
          this.arity,
          new Float32Array(maxSize * this.arity),
          true
        )
      })
      this.attributes.color.extend(3, new Float32Array(maxSize * 3), true)
    },
    updateGeometry(rt) {
      const geometry = geometryFunc(rt.curve ? rt.segments : 1)
      this.indices.update(new Uint16Array(geometry.indices))
      this.attributes.vertex.extend(3, new Float32Array(geometry.vertices))
      this.attributes.uv.extend(2, new Float32Array(geometry.uvs))
      this.attributes.normal.extend(3, new Float32Array(geometry.normals))
    },
    render(rt) {
      if (!this.count || !this.visible) {
        return
      }
      gl.useProgram(this.program)
      gl.bindVertexArray(this.vao)
      gl.drawElementsInstanced(
        gl.TRIANGLES,
        this.indices.count,
        gl.UNSIGNED_SHORT,
        0,
        this.count
      )
    },
  }
  mesh.visible = visible
  mesh.vao = gl.createVertexArray()
  mesh.indices = indices(rt, mesh.vao, new Uint16Array(geometry.indices))

  mesh.attributes.vertex = attribute(
    rt,
    mesh,
    'vertex',
    3,
    new Float32Array(geometry.vertices)
  )
  mesh.attributes.uv = attribute(
    rt,
    mesh,
    'uv',
    2,
    new Float32Array(geometry.uvs)
  )
  mesh.attributes.normal = attribute(
    rt,
    mesh,
    'normal',
    3,
    new Float32Array(geometry.normals)
  )
  mesh.attributes.color = attribute(
    rt,
    mesh,
    'color',
    3,
    new Float32Array(size * 3),
    1
  )
  varying.forEach(attr => {
    mesh.attributes[attr] = attribute(
      rt,
      mesh,
      attr,
      arity,
      new Float32Array(size * arity),
      1
    )
  })
  mesh.arity = arity
  mesh.instances = size
  mesh.count = 0
  return { [type]: mesh }
}

export const storage = (rt, rb, type, msaa) => {
  const { gl } = rt
  gl.bindRenderbuffer(gl.RENDERBUFFER, rb)

  if (msaa) {
    gl.renderbufferStorageMultisample(
      gl.RENDERBUFFER,
      msaa,
      type,
      gl.drawingBufferWidth,
      gl.drawingBufferHeight
    )
  } else {
    gl.renderbufferStorage(
      gl.RENDERBUFFER,
      type,
      gl.drawingBufferWidth,
      gl.drawingBufferHeight
    )
  }
  gl.bindRenderbuffer(gl.RENDERBUFFER, null)
}

if (import.meta.hot) {
  const updateIncludeShader = name => module => {
    const rt = window.rt
    console.debug('Accepting the new include shader')
    includes[name] = module.default
    rt.meshes.recompilePrograms(rt)
    rt.meshes.updateUniforms(rt)

    render(rt)
  }

  import.meta.hot.accept(
    './shaders/includes/ease.glsl?raw',
    updateIncludeShader('ease')
  )
  import.meta.hot.accept(
    './shaders/includes/globals.glsl?raw',
    updateIncludeShader('globals')
  )
  import.meta.hot.accept(
    './shaders/includes/project.glsl?raw',
    updateIncludeShader('project')
  )
  import.meta.hot.accept(
    './shaders/includes/helpers.glsl?raw',
    updateIncludeShader('helpers')
  )
  import.meta.hot.accept(
    './shaders/includes/lighting.glsl?raw',
    updateIncludeShader('lighting')
  )
}
