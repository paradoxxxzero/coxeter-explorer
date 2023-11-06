import { ambiances } from '../statics'
import { columnMajor } from './math/matrix'
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

const augment = (rt, shader) => {
  const config = ['']
  const ambiance = ambiances[rt.ambiance]
  if (ambiance.lighting) {
    config.push('#define LIGHTING')
  }
  return shader.replace(
    'precision highp float;',
    'precision highp float;' + config.join('\n')
  )
}

export const compileProgram = (rt, vertex, fragment) => {
  const { gl } = rt
  const compileShader = (shaderSource, shader) => {
    gl.shaderSource(shader, shaderSource)
    gl.compileShader(shader)
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
    if (!success) {
      const error = gl.getShaderInfoLog(shader)
      console.error(`An error occurred compiling the shaders: ${error}`)
      return error
    }
  }

  const linkProgram = program => {
    gl.linkProgram(program)

    const success = gl.getProgramParameter(program, gl.LINK_STATUS)
    if (!success) {
      const error = gl.getProgramInfoLog(program)
      console.error(`Unable to initialize the shader program: ${error}`)
      return error
    }
  }
  const program = gl.createProgram()

  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  let error = null
  if ((error = compileShader(augment(rt, vertex), vertexShader))) {
    console.error('vertex shader error', error)
    return
  }
  if (compileShader(augment(rt, fragment), fragmentShader)) {
    console.error('fragment shader error', error)
    return
  }

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)

  if (linkProgram(program)) {
    return
  }
  return program
}

export const attribute = (
  rt,
  program,
  name,
  size,
  data,
  instances = null,
  type = null,
  normalize = false
) => {
  const { gl } = rt
  type = type || gl.FLOAT
  const location = gl.getAttribLocation(program, name)
  if (location === -1) {
    return {
      location,
      buffer: null,
      indices: null,
      data: null,
      len: 0,
    }
  }
  const buffer = gl.createBuffer()
  gl.enableVertexAttribArray(location)
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.vertexAttribPointer(location, size, type, normalize, 0, 0)
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
  if (instances) {
    gl.vertexAttribDivisor(location, instances)
  }
  return {
    location,
    buffer,
    indices,
    data,
    len: data.length / size,
    update: () => {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
    },
  }
}

export const indices = (rt, indices) => {
  const { gl } = rt
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)
  return {
    buffer,
    len: indices.length,
  }
}

export const uniform = (rt, program, name) => {
  const { gl } = rt
  const location = gl.getUniformLocation(program, name)
  return { location }
}

export const texture = (rt, type, scale = null) => {
  const { gl } = rt

  const width = scale ? scale * gl.drawingBufferWidth : gl.drawingBufferWidth
  const height = scale ? scale * gl.drawingBufferHeight : gl.drawingBufferHeight
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
  program,
  geometry,
  size,
  arity,
  attributes = ['position']
) => {
  const { gl } = rt
  const mesh = {
    attributes: {},
    uniforms: {},
    program,
  }
  mesh.visible = true
  mesh.vao = gl.createVertexArray()
  gl.bindVertexArray(mesh.vao)

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
      new Float32Array(size),
      1
    )
  })
  mesh.attributes.color = attribute(
    rt,
    mesh.program,
    'color',
    3,
    new Float32Array(size),
    1
  )
  mesh.count = 0 //size / arity
  mesh.uniforms.viewProjection = uniform(rt, mesh.program, 'viewProjection')
  mesh.uniforms.matrix = uniform(rt, mesh.program, 'matrix')
  mesh.uniforms.eye = uniform(rt, mesh.program, 'eye')
  mesh.uniforms.curvature = uniform(rt, mesh.program, 'curvature')
  return mesh
}

export const renderMesh = (rt, type) => {
  const { gl } = rt
  gl.useProgram(rt.meshes[type].program)
  gl.bindVertexArray(rt.meshes[type].vao)
  gl.uniform1f(rt.meshes[type].uniforms.curvature.location, rt.curvature)
  gl.drawElementsInstanced(
    gl.TRIANGLES,
    rt.meshes[type].indices.len,
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
      rt.msaa,
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
