import { diffuseLight, projections, shadings, specularLight } from '../statics'
import { range } from '../utils'
import { ambiances } from './ambiances'
import { min } from './math'
import { columnMajor, ident } from './math/matrix'
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
import { getArity } from './utils'

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
    envmap: v => (v ? 1 : 0),
  }
  Object.entries(ambienceDefines).forEach(([key, getter]) => {
    const value =
      Object.keys(ambiance).includes(type) &&
      Object.keys(ambiance[type]).includes(key)
        ? ambiance[type][key]
        : ambiance[key]
    if (value !== false) {
      config += `#define ${key.toUpperCase()} ${getter(value)}\n`
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
    update(array = null, start = null, size = null) {
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

const cubemapCache = {}

export const cubemap = (rt, name, texname, texi) => {
  const { gl } = rt
  gl.activeTexture(gl[`TEXTURE${texi}`])
  const cubeTexture = {
    texture: gl.createTexture(),
    width: 2048,
    height: 2048,
  }
  cubemapCache[name] = cubemapCache[name] || {}

  gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubeTexture.texture)

  const cube = Object.entries({
    px: gl.TEXTURE_CUBE_MAP_POSITIVE_X,
    nx: gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
    py: gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
    ny: gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
    pz: gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
    nz: gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
  })
  for (let i = 0; i < cube.length; i++) {
    const [face, target] = cube[i]
    const pixels = cubemapCache[name][face] || null
    gl.texImage2D(
      target,
      0,
      gl.RGBA,
      cubeTexture.width,
      cubeTexture.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      pixels
    )
    if (!Object.keys(cubemapCache[name]).includes(face)) {
      cubemapCache[name][face] = null // Prevent multi-load

      const image = new Image()
      image.src = `${name}/${face}.jpg`
      image.addEventListener('load', function () {
        cubemapCache[name][face] = image
        const texture = rt.textures[texname]?.texture // Get current texture if any
        if (texture) {
          render(rt)
          gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture)
          gl.texImage2D(target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
          gl.generateMipmap(gl.TEXTURE_CUBE_MAP)
        }
      })
    }
  }
  gl.generateMipmap(gl.TEXTURE_CUBE_MAP)
  gl.texParameteri(
    gl.TEXTURE_CUBE_MAP,
    gl.TEXTURE_MIN_FILTER,
    gl.LINEAR_MIPMAP_LINEAR
  )
  return cubeTexture
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
  varying = ['position']
) => {
  const { gl } = rt
  const geometry = geometryFunc(rt.space?.curvature && rt.curve, rt.detail)
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
    {
      name: 'eye',
      type: `3fv`,
      value: [0, 0, 0],
    },
    {
      name: 'metric',
      type: `m${rt.dimensions}fv`,
      value: columnMajor(ident(rt.dimensions)),
    },
    {
      name: 'zoom',
      type: '1f',
      value: 1,
    },
    {
      name: 'envMap',
      type: '1i',
      value: 3,
    },
    ...(['vertex', 'edge'].includes(type)
      ? [
          {
            name: 'thickness',
            type: '1f',
            value: 0,
          },
        ]
      : []),
    ...range(3, rt.dimensions + 1, 1, true).map(i => ({
      name: `fov${i}`,
      type: '1f',
      value: rt[`fov${i}`],
    })),
  ]

  arity = getArity(arity)
  const mesh = {
    attributes: {},
    varying,
    vertex,
    type,
    fragment,
    ...compileProgram(
      rt,
      type,
      ...augment(rt, vertex, fragment, type),
      uniforms(rt)
    ),
    recompileProgram(rt) {
      const [newVertex, newFragment] = augment(
        rt,
        this.vertex,
        this.fragment,
        this.type
      )
      this.recompile(rt, newVertex, newFragment, uniforms(rt))
    },
    changeArity(arity) {
      arity = getArity(arity)
      if (this.arity === arity) {
        return
      }
      this.arity = arity
      this.extendAttributes(this.instances)
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
      const geometry = geometryFunc(rt.space.curvature && rt.curve, rt.detail)
      this.indices.update(new Uint16Array(geometry.indices))
      this.attributes.vertex.extend(3, new Float32Array(geometry.vertices))
      this.attributes.uv.extend(2, new Float32Array(geometry.uvs))
      this.attributes.normal.extend(3, new Float32Array(geometry.normals))
    },
    fillGeometry(data, info) {
      if (info.arity !== this.arity) {
        return
      }
      this.count = info.start + info.size
      if (this.instances < this.count) {
        this.extendAttributes(this.count)
      }

      for (let i = 0; i < this.varying.length; i++) {
        const attr = this.varying[i]
        this.attributes[attr].update(data[i], info.start, info.size)
      }
    },
    fillColor(data, info) {
      if (info.arity !== this.arity) {
        return
      }
      this.count = info.start + info.size
      if (this.instances < this.count) {
        this.extendAttributes(this.count)
      }

      this.attributes.color.update(data, info.start, info.size)
    },
    render(rt) {
      if (!this.count) {
        return
      }
      const { gl } = rt
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
  mesh.type = type
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
