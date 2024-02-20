import { diffuseLight, projections, shadings, specularLight } from '../statics'
import { ambiances } from './ambiances'
import { externEnvs, externTextures } from './externs'
import { max, min } from './math'
import { render } from './render'
import complex from './shaders/includes/complex.glsl?raw'
import dimensions from './shaders/includes/dimensions.glsl?raw'
import fragment from './shaders/includes/fragment.glsl?raw'
import globals from './shaders/includes/globals.glsl?raw'
import helpers from './shaders/includes/helpers.glsl?raw'
import lighting from './shaders/includes/lighting.glsl?raw'
import project from './shaders/includes/project.glsl?raw'
import vertexout from './shaders/includes/vertexout.glsl?raw'
import vertexouthead from './shaders/includes/vertexouthead.glsl?raw'
import hdritocubeVertex from './shaders/hdritocube/vertex.glsl?raw'
import hdritocubeFragment from './shaders/hdritocube/fragment.glsl?raw'

export const includes = {
  globals,
  dimensions,
  project,
  helpers,
  complex,
  fragment,
  vertexouthead,
  lighting,
  vertexout,
}

export const resizeCanvasToDisplaySize = (canvas, multiplier, forceSize) => {
  multiplier = forceSize ? 1 : multiplier || 1
  multiplier = Math.max(0, multiplier)

  const width = forceSize
    ? forceSize.width
    : (canvas.clientWidth * multiplier) | 0
  const height = forceSize
    ? forceSize.height
    : (canvas.clientHeight * multiplier) | 0
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
    return true
  }
  return !!forceSize
}

const preprocessDimensions = (source, dimensions) =>
  source
    .replace(/\bvecN\b/g, `vec${dimensions}`)
    .replace(/\bmatN\b/g, `mat${dimensions}`)
    .replace(/\bfovN\b/g, `fov${dimensions}`)
    .replace(/\bvecN_1\b/g, `vec${dimensions - 1}`)
    .replace(/\bvec1\b/g, `float`)
    .replace(/\b_N_\b/g, `${dimensions}`)
    .replace(/\b_Nf_\b/g, `${dimensions}.`)
    .replace(/\PROJECTION_N\b/g, `PROJECTION${dimensions}`)
    .replace(/\bvec[01]\b/g, `float`)
    .replace(/\bmat[01]\b/g, `float`)

const preprocess = (source, dimensions) =>
  preprocessDimensions(
    source.replace(/#loopN(\d)(.+?)#endloopN/gs, (_, n, code) => {
      const rv = []
      for (let i = n; i <= dimensions; i++) {
        rv.push(
          preprocessDimensions(
            code.replace(
              /#ifN(\d)(.+?)(#elseN(.+?)):?#endifN/gs,
              (_, n, code, __, else_) =>
                n === `${i}` ? preprocessDimensions(code, i) : else_ || ''
            ),
            i
          )
        )
      }
      return rv.join('\n')
    }),
    dimensions
  )

export const augment = (rt, vertex, fragment, type) => {
  const ambiance = ambiances[rt.ambiance]
  let config = ''
  const float = v => (v.toString().includes('.') ? v : `${v}.`)
  const ambienceDefines = {
    shading: v => shadings.indexOf(v),
    diffuse: v => diffuseLight.indexOf(v),
    specular: v => specularLight.indexOf(v),
    ambient: v => float(v),
    shininess: v => float(v),
    metalness: v => float(v),
    roughness: v => float(v),
    opacity: v => float(v),
    gouraud: v => '',
    envmap: v => (v ? true : null),
    texture: v => (v ? true : null),
    reversed: v => (v ? true : null),
    tint: v => (v ? true : null),
    fresnel: v => (v ? float(v) : null),
    tesselation: v => (v === 'full' ? 1 : 0),
  }
  Object.entries(ambienceDefines).forEach(([key, getter]) => {
    const value =
      Object.keys(ambiance).includes(type) &&
      Object.keys(ambiance[type]).includes(key)
        ? ambiance[type][key]
        : ambiance[key]

    if (value !== false) {
      let defval = getter(value)
      if (defval === true) {
        defval = ''
      }
      if (defval !== null) {
        config += `#define ${key.toUpperCase()} ${defval}\n`
      }
    }

    if (key === 'opacity' && value < 1) {
      ambiance.transparent[type] = true
      config += `#define TRANSPARENT\n`
      if (ambiance.transparency === 'oit') {
        config += `#define OIT\n`
      }
    }
  })

  config += `#define DIMENSIONS ${rt.dimensions}\n`
  for (let i = 3; i <= rt.dimensions; i++) {
    config += `#define PROJECTION${i} ${
      projections.indexOf(rt[`projection${i}`]) - 1
    }\n`
  }
  config += `#define CURVATURE ${rt.space?.curvature || 0}\n`
  if (rt.curve) {
    config += `#define SEGMENTS\n`
  }
  Object.entries({ ...includes, config }).forEach(([key, value]) => {
    vertex = vertex.replace(`#include ${key}`, value)
    fragment = fragment.replace(`#include ${key}`, value)
  })
  return [vertex, fragment].map(source => preprocess(source, rt.dimensions))
}

const compileShader = (gl, name, type, shaderSource, shader) => {
  gl.shaderSource(shader, shaderSource)
  gl.compileShader(shader)
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
  if (!success) {
    const error = gl.getShaderInfoLog(shader)
    let relevantSource = shaderSource
    const match = error.match(/ERROR: \d+:(\d+):/)?.[1]
    if (match) {
      const errlno = parseInt(match)
      const ctx = 5
      const lines = shaderSource.split('\n')
      const start = max(0, errlno - ctx)
      const end = min(lines.length, errlno + ctx)
      relevantSource = lines
        .slice(start, end)
        .map((s, i) => (i === ctx - 1 ? '=>' : '  ') + s)
        .join('\n')
    }
    console.error(
      `An error occurred compiling the ${name}->${type} shader: ${error}`,
      relevantSource
    )
    return error
  }
}

const linkProgram = (gl, name, program) => {
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
  if (compileShader(gl, name, 'vertex', vertex, vertexShader)) {
    return
  }
  if (compileShader(gl, name, 'fragment', fragment, fragmentShader)) {
    return
  }

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)

  if (linkProgram(gl, name, program)) {
    return
  }
  const rv = {
    program,
    vertexShader,
    fragmentShader,
    uniformsDef,
    recompile(rt, newVertex, newFragment, uniforms = null) {
      // gl.deleteShader(this.vertexShader)
      // gl.deleteShader(this.fragmentShader)
      // gl.deleteProgram(this.program)

      // this.program = gl.createProgram()
      // this.vertexShader = gl.createShader(gl.VERTEX_SHADER)
      // this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
      if (compileShader(gl, name, 'vertex', newVertex, this.vertexShader)) {
        return
      }
      if (
        compileShader(gl, name, 'fragment', newFragment, this.fragmentShader)
      ) {
        return
      }
      // gl.attachShader(this.program, this.vertexShader)
      // gl.attachShader(this.program, this.fragmentShader)

      if (linkProgram(gl, name, this.program)) {
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
    update(array = null, start = null, size = null) {
      if (this.location === -1) {
        return
      }
      gl.bindVertexArray(this.mesh.vao)
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
      if (array === null && start === null && size === null) {
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.STATIC_DRAW)
      } else {
        this.data.set(array, start * this.size)
        gl.bufferSubData(
          gl.ARRAY_BUFFER,
          start * this.size * byteSize,
          this.data,
          start * this.size,
          size * this.size
        )
      }
    },
    extend(size, newData, copy = false) {
      gl.bindVertexArray(this.mesh.vao)
      this.size = size
      if (newData) {
        if (copy) {
          if (newData.length >= this.data.length) {
            newData.set(this.data)
          }
        }
        this.data = newData
      }
      this.location = gl.getAttribLocation(this.mesh.program, this.name)
      if (this.location === -1) {
        return
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
      const locSize = size > 4 ? 3 : 1

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
      for (let i = 0; i < locSize; i++) {
        gl.vertexAttribDivisor(this.location + i, this.instances || 0)
      }
      this.update()
    },
    refresh() {
      this.extend(this.size, this.data)
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
      if (type.startsWith('m0')) {
        return
      }
      if (type.startsWith('m1')) {
        type = type.replace('m', '')
      }
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

export const textureFull = (rt, type, scale = null) => {
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

const imageTextureCache = {}

const parts = ['albedo', 'normal', 'arm', 'displacement']

export const texture = (rt, name, textureIndex) => {
  const { gl } = rt

  const texture = {
    width: 4096,
    height: 4096,
    listeners: [],
    index: textureIndex,
  }

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    gl.activeTexture(gl.TEXTURE0 + texture.index + i)
    const src = externTextures[name][part]

    texture[part] = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture[part])
    let pixels = (src && imageTextureCache[src]) || null

    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      texture.width,
      texture.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixels?.src && pixels?.complete ? pixels : null
    )
    gl.generateMipmap(gl.TEXTURE_2D)
    if (!src) {
      return texture
    }
    if (!pixels) {
      pixels = new Image()
      pixels.crossOrigin = 'anonymous'
      imageTextureCache[src] = pixels // Prevent multi-load
    }
    if (!pixels.src || !pixels.complete) {
      const onImageLoad = () => {
        texture.listeners.splice(
          texture.listeners.findIndex(([p]) => p === pixels),
          1
        )
        imageTextureCache[src] = pixels
        gl.activeTexture(gl.TEXTURE0 + texture.index + i)
        gl.bindTexture(gl.TEXTURE_2D, texture[part])
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          pixels
        )
        gl.generateMipmap(gl.TEXTURE_2D)
        render(rt)
      }
      pixels.addEventListener('load', onImageLoad)
      pixels.src = src
      texture.listeners.push([pixels, onImageLoad])
    }
  }
  return texture
}
export const deleteTextures = (rt, texture) => {
  const { gl } = rt
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    gl.deleteTexture(texture[part])
  }
}
export const cubemap = (rt, name, textureIndex) => {
  const { gl } = rt
  const cubeTexture = {
    texture: gl.createTexture(),
    width: 2048,
    height: 2048,
    index: textureIndex,
    listeners: [],
  }
  const src = externEnvs[name]

  gl.activeTexture(gl.TEXTURE0 + cubeTexture.index)
  gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeTexture.texture)
  for (let i = 0; i < 6; i++) {
    gl.texImage2D(
      gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
      0,
      gl.RGBA,
      cubeTexture.width,
      cubeTexture.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null
    )
  }
  let pixels = imageTextureCache[src]
  if (pixels?.src && pixels?.complete) {
    hdriToCubemap(rt.gl, pixels, cubeTexture)
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeTexture.texture)
    gl.texParameteri(
      gl.TEXTURE_CUBE_MAP,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    )
    gl.generateMipmap(gl.TEXTURE_CUBE_MAP)
  }

  if (!imageTextureCache[src]) {
    pixels = new Image()
    pixels.crossOrigin = 'anonymous'
    imageTextureCache[src] = pixels
  }
  if (!pixels.src || !pixels.complete) {
    const onImageLoad = () => {
      cubeTexture.listeners.splice(
        cubeTexture.listeners.findIndex(([p]) => p === pixels),
        1
      )
      gl.activeTexture(gl.TEXTURE0 + cubeTexture.index)
      gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeTexture.texture)

      // HDRI to cubemap
      hdriToCubemap(rt.gl, pixels, cubeTexture)
      gl.activeTexture(gl.TEXTURE0 + cubeTexture.index)
      gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeTexture.texture)
      gl.generateMipmap(gl.TEXTURE_CUBE_MAP)

      imageTextureCache[src] = pixels // ?
      render(rt)
    }
    pixels.addEventListener('load', onImageLoad)
    pixels.src = src
    cubeTexture.listeners.push([pixels, onImageLoad])
  }
  return cubeTexture
}

export const clearListeners = texture => {
  texture.listeners.forEach(([pixels, onImageLoad]) => {
    pixels.removeEventListener('load', onImageLoad)
  })
  texture.listeners = []
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

export const hdriToCubemap = (gl, pixels, texture) => {
  const fb = gl.createFramebuffer()
  const hdri = {
    width: pixels.width,
    height: pixels.height,
  }
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb)
  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  if (maxTextureSize < max(hdri.width, hdri.height)) {
    // Resize the image to gl.MAX_TEXTURE_SIZE
    const canvas = document.createElement('canvas')
    if (hdri.width > hdri.height) {
      canvas.width = gl.getParameter(gl.MAX_TEXTURE_SIZE)
      canvas.height = (maxTextureSize / hdri.width) * hdri.height
    } else {
      canvas.height = gl.getParameter(gl.MAX_TEXTURE_SIZE)
      canvas.width = (maxTextureSize / hdri.height) * hdri.width
    }
    hdri.width = canvas.width
    hdri.height = canvas.height

    const ctx = canvas.getContext('2d')
    ctx.drawImage(pixels, 0, 0, canvas.width, canvas.height)
    pixels = ctx.getImageData(0, 0, canvas.width, canvas.height)
  }

  const hdriTexture = gl.createTexture()
  gl.activeTexture(gl.TEXTURE7)
  gl.bindTexture(gl.TEXTURE_2D, hdriTexture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    hdri.width,
    hdri.height,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    pixels
  )
  gl.generateMipmap(gl.TEXTURE_2D)

  const program = gl.createProgram()
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  if (
    compileShader(gl, 'hdritocube', 'vertex', hdritocubeVertex, vertexShader)
  ) {
    return
  }
  if (
    compileShader(
      gl,
      'hdritocube',
      'fragment',
      hdritocubeFragment,
      fragmentShader
    )
  ) {
    return
  }

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  linkProgram(gl, 'hdritocube', program)
  gl.useProgram(program)
  gl.uniform1i(gl.getUniformLocation(program, 'hdri'), 7)
  gl.uniform1i(gl.getUniformLocation(program, 'part'), 0)
  gl.viewport(0, 0, texture.width, texture.height)
  gl.disable(gl.BLEND)
  gl.disable(gl.DEPTH_TEST)
  gl.disable(gl.CULL_FACE)
  for (let i = 0; i < 6; i++) {
    gl.uniform1i(gl.getUniformLocation(program, 'part'), i)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
      texture.texture,
      0
    )
    gl.uniform1i(gl.getUniformLocation(program, 'face'), i)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }
  gl.deleteTexture(hdriTexture)
  gl.deleteFramebuffer(fb)
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
  gl.bindFramebuffer(gl.FRAMEBUFFER, null)
  gl.bindRenderbuffer(gl.RENDERBUFFER, null)
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
  import.meta.hot.accept(
    './shaders/includes/complex.glsl?raw',
    updateIncludeShader('complex')
  )
  import.meta.hot.accept(
    './shaders/includes/fragment.glsl?raw',
    updateIncludeShader('fragment')
  )
  import.meta.hot.accept(
    './shaders/includes/vertexout.glsl?raw',
    updateIncludeShader('vertexout')
  )
  import.meta.hot.accept(
    './shaders/includes/vertexouthead.glsl?raw',
    updateIncludeShader('vertexouthead')
  )
}
