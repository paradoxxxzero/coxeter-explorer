import Stats from 'stats.js'
import { ambiances, defaultParams } from '../statics'
import { sphere, tri, tube } from './geometries'
import {
  compileProgram,
  mesh,
  renderMesh,
  resizeCanvasToDisplaySize,
} from './helpers'
import { PI, min, tan } from './math'
import { columnMajor, lookAt, multiply, perspective } from './math/matrix'
import fragmentBloom from './shaders/bloom/fragment.glsl?raw'
import vertexBloom from './shaders/bloom/vertex.glsl?raw'
import fragmentAfterimage from './shaders/afterimage/fragment.glsl?raw'
import vertexAfterimage from './shaders/afterimage/vertex.glsl?raw'
import fragmentDown from './shaders/down/fragment.glsl?raw'
import vertexDown from './shaders/down/vertex.glsl?raw'
import fragmentEdge from './shaders/edge/fragment.glsl?raw'
import vertexEdge from './shaders/edge/vertex.glsl?raw'
import fragmentFace from './shaders/face/fragment.glsl?raw'
import vertexFace from './shaders/face/vertex.glsl?raw'
import fragmentOit from './shaders/oit/fragment.glsl?raw'
import vertexOit from './shaders/oit/vertex.glsl?raw'
import fragmentUp from './shaders/up/fragment.glsl?raw'
import vertexUp from './shaders/up/vertex.glsl?raw'
import fragmentVertex from './shaders/vertex/fragment.glsl?raw'
import vertexVertex from './shaders/vertex/vertex.glsl?raw'
import refreshTextures from './textures'

const showStats = window.location.search.includes('stats')
let stats
if (showStats) {
  stats = new Stats()
  stats.dom.id = 'stats'
  document.body.appendChild(stats.dom)
}

export const initializeGl = rt => {
  if (document.getElementById('webgl2')) {
    // Fast refresh
    console.warn('WebGL already initialized')
    updateCameraFov(rt)
    rt.meshes.updateGeometries(rt)
    rt.meshes.recompilePrograms(rt)
    changeAmbiance(rt)
    rt.meshes.updateUniforms(rt, true)
    render(rt)
    return rt
  }
  const canvas = document.createElement('canvas')
  canvas.id = 'webgl2'
  document.body.appendChild(canvas)

  const gl = canvas.getContext('webgl2', {
    // alpha: false,
    antialias: false,
    depth: true,
    stencil: false,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: false,
  })
  rt = { ...rt, gl }

  if (!gl) {
    console.error(
      'Unable to initialize WebGL. Your browser may not support it.'
    )
    return
  }
  gl.getExtension('EXT_color_buffer_float')
  gl.enable(gl.DEPTH_TEST)

  const camera = {
    zoom: 1,
    fov: PI / 3,
    position: [0, 0, 2],
    update() {
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight
      this.zoom = min(gl.canvas.clientWidth / gl.canvas.clientHeight, 1)
      this.eye = [0, 0, this.position[2] / this.zoom]
      const viewMatrix = lookAt(this.eye, [0, 0, 0], [0, 1, 0])
      const projectionMatrix = perspective(this.fov, aspect, 0.001, 1000)
      this.viewProjection = columnMajor(multiply(projectionMatrix, viewMatrix))
    },
  }
  camera.update()

  const passes = {
    oit: {
      attributes: {},
      ...compileProgram(rt, 'oit', vertexOit, fragmentOit, [
        {
          name: 'accumTexture',
          type: '1i',
          value: 0,
        },
        {
          name: 'revealageTexture',
          type: '1i',
          value: 1,
        },
      ]),
    },
    kawase: {
      down: {
        attributes: {},
        ...compileProgram(rt, 'kawase/down', vertexDown, fragmentDown, [
          {
            name: 'screen',
            type: '1i',
            value: 0,
          },
          {
            name: 'offset',
            type: '1f',
            value: 0,
          },
        ]),
      },

      up: {
        attributes: {},
        ...compileProgram(rt, 'kawase/up', vertexUp, fragmentUp, [
          {
            name: 'screen',
            type: '1i',
            value: 0,
          },
          {
            name: 'offset',
            type: '1f',
            value: 0,
          },
        ]),
      },
    },
    afterimage: {
      attributes: {},
      ...compileProgram(
        rt,
        'afterimage',
        vertexAfterimage,
        fragmentAfterimage,
        [
          {
            name: 'screen',
            type: '1i',
            value: 0,
          },
          {
            name: 'afterImage',
            type: '1i',
            value: 1,
          },
          {
            name: 'strength',
            type: '1f',
            value: 1,
          },
        ]
      ),
    },
    bloom: {
      attributes: {},
      ...compileProgram(rt, 'bloom', vertexBloom, fragmentBloom, [
        {
          name: 'screen',
          type: '1i',
          value: 0,
        },
        {
          name: 'bloom',
          type: '1i',
          value: 1,
        },
        {
          name: 'exposure',
          type: '1f',
          value: 1,
        },
        {
          name: 'strength',
          type: '1f',
          value: 1,
        },
      ]),
    },
  }

  const rb = {
    base: gl.createRenderbuffer(),
    depth: gl.createRenderbuffer(),
  }

  const fb = {
    base: gl.createFramebuffer(),
  }

  const arity = rt.dimensions > 4 ? 9 : rt.dimensions
  const geometries = {
    vertex: () => sphere(),
    edge: segments => tube({ segments }),
    face: segments => tri({ segments }),
  }

  const meshes = {
    vertex: mesh(
      rt,
      'vertex',
      vertexVertex,
      fragmentVertex,
      geometries.vertex,
      100,
      arity
    ),
    edge: mesh(
      rt,
      'edge',
      vertexEdge,
      fragmentEdge,
      geometries.edge,
      100,
      arity,
      ['position', 'target']
    ),
    face: mesh(
      rt,
      'face',
      vertexFace,
      fragmentFace,
      geometries.face,
      100,
      arity,
      ['position', 'target', 'center']
    ),
    changeArity(arity) {
      const meshes = ['vertex', 'edge', 'face']
      for (let i = 0; i < meshes.length; i++) {
        this[meshes[i]].changeArity(arity)
      }
    },
    updateGeometries(rt) {
      const meshes = ['vertex', 'edge', 'face']
      for (let i = 0; i < meshes.length; i++) {
        this[meshes[i]].updateGeometry(rt)
      }
    },
    recompilePrograms(rt) {
      const meshes = ['vertex', 'edge', 'face']
      for (let i = 0; i < meshes.length; i++) {
        this[meshes[i]].recompileProgram(rt)
      }
    },
    updateUniforms(rt, quick = false) {
      const meshes = ['vertex', 'edge', 'face']
      for (let i = 0; i < meshes.length; i++) {
        const type = meshes[i]
        const mesh = this[type]
        if (!quick) {
          mesh.uniforms.curvature.update(rt.curvature)
          mesh.uniforms.matrix.update(columnMajor(rt.matrix))
          for (let i = 4; i <= rt.dimensions; i++) {
            mesh.uniforms[`fov${i}`].update(
              tan((PI * rt[`fov${i}`] * 0.5) / 180)
            )
          }
          if (type === 'vertex') {
            mesh.uniforms.thickness.update(rt.vertexThickness)
          } else if (type === 'edge') {
            mesh.uniforms.thickness.update(rt.edgeThickness)
          } else {
            mesh.uniforms.segments.update(rt.curve ? rt.segments : 1)
            mesh.uniforms.opacity.update(ambiances[rt.ambiance].opacity)
          }
        }
        mesh.uniforms.viewProjection.update(rt.camera.viewProjection)
        if (mesh.uniforms.eye) {
          mesh.uniforms.eye.update(rt.camera.eye)
        }
      }
    },
    plotType(rt, type, range) {
      const mesh = this[type]
      const objects = rt[type]
      const { dimensions } = rt
      const ambiance = ambiances[rt.ambiance]

      let start = range ? range[0] : 0
      let stop = range ? range[1] : objects.length
      if (start === stop) {
        return
      }
      let startIdx = start
      let stopIdx = stop
      if (type === 'face') {
        let idx = 0
        for (let i = 0; i < start; i++) {
          const vertices = objects[i].vertices.length
          idx += vertices < 3 ? 0 : vertices === 3 ? 1 : vertices
        }
        startIdx = idx
        for (let i = start; i < stop; i++) {
          const vertices = objects[i].vertices.length
          idx += vertices < 3 ? 0 : vertices === 3 ? 1 : vertices
        }
        stopIdx = idx
      }

      if (mesh.instances < stopIdx * 3) {
        mesh.extendAttributes(stopIdx)
      }
      mesh.count = stopIdx
      const arity = dimensions > 4 ? 9 : dimensions

      let idx = startIdx
      for (let i = start; i < stop; i++) {
        let vertices = []
        const object = objects[i]
        if (type === 'vertex') {
          vertices.push({
            ...object,
            position: object.vertex,
            type,
          })
        } else if (type === 'edge') {
          vertices.push({
            ...object,
            position: rt.vertex[object.start].vertex,
            target: rt.vertex[object.end].vertex,
            type,
          })
        } else {
          if (object.vertices.length < 3) {
            continue
          }
          if (object.vertices.length === 3) {
            vertices.push({
              ...object,
              position: rt.vertex[object.vertices[0]].vertex,
              target: rt.vertex[object.vertices[1]].vertex,
              center: rt.vertex[object.vertices[2]].vertex,
            })
          } else {
            const faceVertices = new Array(object.vertices.length)
            for (let j = 0; j < object.vertices.length; j++) {
              faceVertices[j] = rt.vertex[object.vertices[j]].vertex
            }
            const center = new Array(dimensions).fill(0)
            for (let j = 0; j < faceVertices.length; j++) {
              const vertices = faceVertices[j]
              for (let k = 0; k < dimensions; k++) {
                center[k] += vertices[k]
              }
            }
            for (let j = 0; j < dimensions; j++) {
              center[j] /= faceVertices.length
            }
            for (let j = 0; j < faceVertices.length; j++) {
              const vertex = {
                ...object,
                position: faceVertices[j],
                target: faceVertices[(j + 1) % faceVertices.length],
                center,
              }
              if (object.word.length % 2 === (rt.curvature > 0 ? 0 : 1)) {
                ;[vertex.position, vertex.target] = [
                  vertex.target,
                  vertex.position,
                ]
              }
              vertices.push(vertex)
            }
          }
        }

        for (let j = 0; j < vertices.length; j++) {
          const vertex = vertices[j]
          for (let k = 0; k < dimensions; k++) {
            for (let l = 0; l < mesh.varying.length; l++) {
              const attr = mesh.varying[l]
              mesh.attributes[attr].data[idx * arity + k] = vertex[attr][k]
            }
          }
          const c = ambiance.color(vertex, type, rt)
          mesh.attributes.color.data[idx * 3 + 0] = c[0]
          mesh.attributes.color.data[idx * 3 + 1] = c[1]
          mesh.attributes.color.data[idx * 3 + 2] = c[2]
          idx++
        }
        for (let l = 0; l < mesh.varying.length; l++) {
          const attr = mesh.varying[l]
          mesh.attributes[attr].update(startIdx, stopIdx)
        }
        mesh.attributes.color.update(startIdx, stopIdx)
      }
    },
    plot(rt, ranges) {
      const meshes = ['vertex', 'edge', 'face']
      for (let i = 0; i < meshes.length; i++) {
        const type = meshes[i]
        const mesh = this[type]
        if (mesh.visible) {
          this.plotType(rt, type, ranges[type])
        }
      }
    },
  }

  meshes.edge.visible = rt.showEdges
  meshes.vertex.visible = rt.showVertices
  meshes.face.visible = rt.showFaces

  return {
    ...rt,
    gl,
    camera,
    meshes,
    passes,
    rb,
    fb,
  }
}

export const show = (rt, name) => {
  rt.meshes[name].visible =
    rt[
      name === 'vertex'
        ? 'showVertices'
        : name === 'edge'
        ? 'showEdges'
        : 'showFaces'
    ]
}

export const plot = (rt, order = null) => {
  if (rt.currentOrder === 0) {
    return
  }
  if (
    (order === null && rt.ranges.length === 0) ||
    (order !== null && order >= rt.ranges.length)
  ) {
    return
  }
  const ranges =
    order !== null
      ? rt.ranges[order]
      : {
          vertex: [
            rt.ranges[0].vertex[0],
            rt.ranges[rt.currentOrder - 1].vertex[1],
          ],
          edge: [rt.ranges[0].edge[0], rt.ranges[rt.currentOrder - 1].edge[1]],
          face: [rt.ranges[0].face[0], rt.ranges[rt.currentOrder - 1].face[1]],
        }

  rt.meshes.plot(rt, ranges)

  document.title = `Coxeter Explorer - ${
    rt.spaceType === 'finite' ? 'S' : rt.spaceType === 'affine' ? 'E' : 'H'
  }^${rt.dimensions} ${
    rt.currentOrder < rt.order ? `(${rt.currentOrder}/${rt.order})…` : ''
  }- ${rt.vertex.length} vertices, ${rt.edge.length} edges, ${
    rt.face.length
  } faces`
}

export const updateCameraFov = rt => {
  rt.camera.fov = (PI * rt.fov3) / 180
  rt.camera.update()
  rt.meshes.updateUniforms(rt, true)
}

export const changeAmbiance = rt => {
  const ambiance = ambiances[rt.ambiance]
  rt.gl.clearColor(...ambiance.background)
  if (ambiance.glow) {
    rt.passes.bloom.uniforms.exposure.update(ambiance.glow.exposure)
    rt.passes.bloom.uniforms.strength.update(ambiance.glow.strength)
    rt.passes.kawase.down.uniforms.offset.update(ambiance.glow.offset.down)
    rt.passes.kawase.up.uniforms.offset.update(ambiance.glow.offset.up)
  }
  if (ambiance.afterImage) {
    rt.passes.afterimage.uniforms.strength.update(ambiance.afterImage)
  }
}

export const render = rt => {
  if (showStats) {
    stats.update()
  }

  const { gl } = rt
  const ambiance = ambiances[rt.ambiance]
  if (resizeCanvasToDisplaySize(gl.canvas, rt.subsampling)) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
    refreshTextures(rt)
    rt.camera.update()
    rt.meshes.updateUniforms(rt, true)
  }

  // OPAQUE
  gl.disable(gl.BLEND)
  gl.enable(gl.DEPTH_TEST)
  gl.depthMask(true)
  gl.depthFunc(gl.LESS)

  gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.base)
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  renderMesh(rt, 'vertex')
  renderMesh(rt, 'edge')

  // TRANSPARENT
  if (
    rt.meshes.face.visible &&
    ambiance.opacity < 1 &&
    ambiance.transparency === 'oit'
  ) {
    gl.enable(gl.BLEND)
    gl.depthMask(false)
    gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ZERO, gl.ONE_MINUS_SRC_ALPHA)

    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.oit)
    gl.clear(gl.COLOR_BUFFER_BIT)

    renderMesh(rt, 'face')

    // COMPOSITE

    gl.depthMask(true)
    gl.depthFunc(gl.ALWAYS)
    gl.blendFunc(gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA)

    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.base)

    gl.useProgram(rt.passes.oit.program)
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, rt.passes.oit.accumTexture.texture)

    gl.activeTexture(gl.TEXTURE1)
    gl.bindTexture(gl.TEXTURE_2D, rt.passes.oit.revealTexture.texture)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  } else {
    if (ambiance.opacity < 1 && ambiance.transparency === 'blend') {
      gl.enable(gl.BLEND)
      gl.depthMask(false)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    }
    renderMesh(rt, 'face')
  }

  const out = ambiance.afterImage
    ? rt.fb.afterimage
    : ambiance.glow
    ? rt.fb.bloom
    : null
  // FINAL
  // Blit msaa to screen
  gl.bindFramebuffer(gl.READ_FRAMEBUFFER, rt.fb.base)
  gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, out)
  if (ambiance.afterImage) {
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      rt.passes.afterimage.screen.texture,
      0
    )
  }
  gl.blitFramebuffer(
    0,
    0,
    gl.drawingBufferWidth,
    gl.drawingBufferHeight,
    0,
    0,
    gl.drawingBufferWidth,
    gl.drawingBufferHeight,
    gl.COLOR_BUFFER_BIT,
    gl.NEAREST
  )

  let bloomIn = rt.passes.bloom.screen

  if (ambiance.afterImage) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.afterimage)
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      rt.passes.afterimage.outScreen.texture,
      0
    )
    gl.useProgram(rt.passes.afterimage.program)
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, rt.passes.afterimage.screen.texture)
    gl.activeTexture(gl.TEXTURE1)
    gl.bindTexture(gl.TEXTURE_2D, rt.passes.afterimage.lastScreen.texture)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    if (ambiance.glow) {
      bloomIn = rt.passes.afterimage.outScreen
    } else {
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, rt.fb.afterimage)
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        rt.passes.afterimage.outScreen.texture,
        0
      )
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null)
      gl.blitFramebuffer(
        0,
        0,
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
        0,
        0,
        gl.drawingBufferWidth,
        gl.drawingBufferHeight,
        gl.COLOR_BUFFER_BIT,
        gl.NEAREST
      )
    }
    ;[rt.passes.afterimage.outScreen, rt.passes.afterimage.lastScreen] = [
      rt.passes.afterimage.lastScreen,
      rt.passes.afterimage.outScreen,
    ]
  }

  if (ambiance.glow) {
    gl.disable(gl.BLEND)
    gl.enable(gl.DEPTH_TEST)
    gl.depthMask(true)
    gl.depthFunc(gl.LESS)

    gl.bindFramebuffer(gl.FRAMEBUFFER, rt.fb.kawase)

    gl.useProgram(rt.passes.kawase.down.program)
    for (let i = 0; i < ambiance.glow.steps; i++) {
      const inTexture = i === 0 ? bloomIn : rt.passes.kawase.textures[i - 1]
      const outTexture = rt.passes.kawase.textures[i]
      gl.viewport(0, 0, outTexture.width, outTexture.height)

      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, inTexture.texture)
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        outTexture.texture,
        0
      )
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    gl.useProgram(rt.passes.kawase.up.program)
    for (let i = ambiance.glow.steps - 1; i >= 0; i--) {
      const inTexture = rt.passes.kawase.textures[i]
      const outTexture =
        i === 0 ? rt.passes.kawase.blur : rt.passes.kawase.textures[i - 1]
      gl.viewport(0, 0, outTexture.width, outTexture.height)

      gl.activeTexture(gl.TEXTURE0)
      gl.bindTexture(gl.TEXTURE_2D, inTexture.texture)
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        outTexture.texture,
        0
      )
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    gl.useProgram(rt.passes.bloom.program)
    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, bloomIn.texture)
    gl.activeTexture(gl.TEXTURE1)
    gl.bindTexture(gl.TEXTURE_2D, rt.passes.kawase.blur.texture)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }
}
