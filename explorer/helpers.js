import { ambiances, easings, lightings, projections } from '../statics'
import ease from './shaders/includes/ease.glsl?raw'
import globals from './shaders/includes/globals.glsl?raw'
import project from './shaders/includes/project.glsl?raw'
import lighting from './shaders/includes/lighting.glsl?raw'
import { min } from './math'

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
const includes = {
  globals,
  ease,
  project,
  lighting,
}
export const augment = (rt, vertex, fragment) => {
  const ambiance = ambiances[rt.ambiance]
  let config = ''
  if (ambiance.lighting) {
    config += `#define LIGHTING ${lightings.indexOf(ambiance.lighting)}\n`
  }
  const easing =
    rt.easing === 'auto'
      ? rt.spaceType?.startsWith('hyperbolic') && rt.projection !== 'inverted'
        ? 'quintic'
        : 'linear'
      : rt.easing
  config += `#define DIMENSIONS ${rt.dimensions}\n`
  config += `#define PROJECTION ${projections.indexOf(rt.projection)}\n`
  config += `#define EASING ${easings.indexOf(easing)}\n`
  Object.entries({ ...includes, config }).forEach(([key, value]) => {
    vertex = vertex.replace(`#include ${key}`, value)
    fragment = fragment.replace(`#include ${key}`, value)
  })
  vertex = vertex.replace(/\bvecN\b/g, `vec${rt.dimensions}`)
  fragment = fragment.replace(/\bvecN\b/g, `vec${rt.dimensions}`)
  return [vertex, fragment]
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

export const compileProgram = (rt, name, vertex, fragment) => {
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
  return { program, vertexShader, fragmentShader }
}

export const attribute = (
  rt,
  program,
  name,
  size,
  data,
  instances = null,
  type = null
) => {
  const { gl } = rt
  type = type || gl.FLOAT

  const attr = {
    name,
    indices,
    instances,
    data,
    size,
    type,
    update() {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
      gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW)
    },
    attach(program) {
      this.location = gl.getAttribLocation(program, this.name)
      if (this.location === -1) {
        return {
          location: this.location,
          name: this.name,
        }
      }
      const locSize = this.size > 4 ? 3 : 1
      for (let i = 0; i < locSize; i++) {
        gl.enableVertexAttribArray(this.location + i)
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
      for (let i = 0; i < locSize; i++) {
        gl.vertexAttribPointer(
          this.location + i,
          this.size / locSize,
          this.type,
          false,
          this.size * 4,
          (this.size / locSize) * i * 4
        )
      }
      if (this.instances) {
        for (let i = 0; i < locSize; i++) {
          gl.vertexAttribDivisor(this.location + i, this.instances)
        }
      }
    },
    extend(size, newData, copy = false) {
      this.size = size
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
      if (this.location >= 0) {
        const locSize = size > 4 ? 3 : 1
        for (let i = 0; i < locSize; i++) {
          gl.vertexAttribPointer(
            this.location + i,
            size / locSize,
            this.type,
            false,
            size * 4,
            (size / locSize) * i * 4
          )
        }
        if (this.instances) {
          for (let i = 0; i < locSize; i++) {
            gl.vertexAttribDivisor(this.location + i, this.instances)
          }
        }
      }
      copy && newData.length >= this.data.length && newData.set(this.data)
      this.data = newData
      this.update()
    },
  }

  attr.buffer = gl.createBuffer()
  attr.attach(program)
  attr.update()

  return attr
}

export const indices = (rt, indices) => {
  const { gl } = rt
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)
  return {
    buffer,
    indices,
    count: indices.length,
    update(newIndices) {
      this.indices = newIndices
      this.count = newIndices.length
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer)
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, newIndices, gl.STATIC_DRAW)
    },
  }
}

export const uniform = (rt, program, name, type) => {
  const { gl } = rt
  const location = gl.getUniformLocation(program, name)
  const uniform = {
    location,
    program,
    update(value) {
      gl.useProgram(this.program)
      if (type.startsWith('m')) {
        gl[`uniformMatrix${type.slice(1)}`](this.location, false, value)
      } else {
        gl[`uniform${type}`](this.location, value)
      }
    },
    get() {
      gl.useProgram(this.program)
      return gl.getUniform(this.program, this.location)
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

export const mesh = (
  rt,
  type,
  vertex,
  fragment,
  geometryFunc,
  size,
  arity,
  attributes = ['position']
) => {
  const { gl } = rt
  const geometry = geometryFunc(rt.curve ? rt.segments : 1)
  const mesh = {
    attributes: {},
    uniforms: {},
    ...compileProgram(rt, type, ...augment(rt, vertex, fragment)),
    bindUniforms(rt) {
      this.uniforms.viewProjection = uniform(
        rt,
        this.program,
        'viewProjection',
        'm4fv'
      )
      this.uniforms.matrix = uniform(
        rt,
        this.program,
        'matrix',
        `m${rt.dimensions}fv`
      )
      this.uniforms.eye = uniform(rt, this.program, 'eye', '3fv')
      this.uniforms.curvature = uniform(rt, this.program, 'curvature', '1f')
      if (['vertex', 'edge'].includes(type)) {
        this.uniforms.thickness = uniform(rt, this.program, 'thickness', '1f')
      }
      if (['edge', 'face'].includes(type)) {
        this.uniforms.segments = uniform(rt, this.program, 'segments', '1f')
      }
      for (let i = 4; i <= rt.dimensions; i++) {
        this.uniforms[`fov${i}`] = uniform(rt, this.program, `fov${i}`, '1f')
      }
    },
    recompile(rt) {
      const [newVertex, newFragment] = augment(rt, vertex, fragment)
      if (compileShader(rt, type, 'vertex', newVertex, this.vertexShader)) {
        return
      }
      if (
        compileShader(rt, type, 'fragment', newFragment, this.fragmentShader)
      ) {
        return
      }
      if (linkProgram(rt, type, this.program)) {
        return
      }

      gl.useProgram(this.program)
      this.bindUniforms(rt)
    },
    extendAttributes(rt, maxSize) {
      gl.bindVertexArray(mesh.vao)
      const arity = rt.dimensions > 4 ? 9 : rt.dimensions
      attributes.forEach(attr => {
        mesh.attributes[attr].extend(
          arity,
          new Float32Array(maxSize * arity),
          true
        )
      })
      mesh.attributes.color.extend(3, new Float32Array(maxSize * 3), true)
    },
    updateGeometry(rt) {
      gl.bindVertexArray(mesh.vao)
      const geometry = geometryFunc(rt.curve ? rt.segments : 1)
      mesh.indices.update(new Uint16Array(geometry.indices))
      mesh.attributes.vertex.extend(3, new Float32Array(geometry.vertices))
      mesh.attributes.uv.extend(2, new Float32Array(geometry.uvs))
      mesh.attributes.normal.extend(3, new Float32Array(geometry.normals))
    },
  }
  mesh.visible = true
  mesh.vao = gl.createVertexArray()
  gl.bindVertexArray(mesh.vao)
  mesh.bindUniforms(rt)

  mesh.attributes.vertex = attribute(
    rt,
    mesh.program,
    'vertex',
    3,
    new Float32Array(geometry.vertices)
  )
  mesh.attributes.uv = attribute(
    rt,
    mesh.program,
    'uv',
    2,
    new Float32Array(geometry.uvs)
  )
  mesh.attributes.normal = attribute(
    rt,
    mesh.program,
    'normal',
    3,
    new Float32Array(geometry.normals)
  )
  mesh.indices = indices(rt, new Uint16Array(geometry.indices))
  attributes.forEach(attr => {
    mesh.attributes[attr] = attribute(
      rt,
      mesh.program,
      attr,
      arity,
      new Float32Array(size * arity),
      1
    )
  })
  mesh.attributes.color = attribute(
    rt,
    mesh.program,
    'color',
    3,
    new Float32Array(size * 3),
    1
  )

  mesh.count = 0
  return mesh
}

export const renderMesh = (rt, type) => {
  const { gl } = rt
  gl.useProgram(rt.meshes[type].program)
  gl.bindVertexArray(rt.meshes[type].vao)
  gl.drawElementsInstanced(
    gl.TRIANGLES,
    rt.meshes[type].indices.count,
    gl.UNSIGNED_SHORT,
    0,
    rt.meshes[type].count
  )
}

export const storage = (rt, rb, type) => {
  const { gl } = rt
  gl.bindRenderbuffer(gl.RENDERBUFFER, rb)

  if (rt.msaa) {
    gl.renderbufferStorageMultisample(
      gl.RENDERBUFFER,
      min(rt.msaaSamples, rt.gl.getParameter(rt.gl.MAX_SAMPLES)),
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
