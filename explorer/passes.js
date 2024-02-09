import { pass } from './helpers'
import { columnMajor, ident } from './math/matrix'
import { render } from './render'
import fragmentAfterimage from './shaders/afterImage/fragment.glsl?raw'
import vertexAfterimage from './shaders/afterImage/vertex.glsl?raw'
import fragmentBloom from './shaders/bloom/fragment.glsl?raw'
import vertexBloom from './shaders/bloom/vertex.glsl?raw'
import fragmentDown from './shaders/down/fragment.glsl?raw'
import vertexDown from './shaders/down/vertex.glsl?raw'
import fragmentOit from './shaders/oit/fragment.glsl?raw'
import vertexOit from './shaders/oit/vertex.glsl?raw'
import fragmentSkybox from './shaders/skybox/fragment.glsl?raw'
import vertexSkybox from './shaders/skybox/vertex.glsl?raw'
import fragmentUp from './shaders/up/fragment.glsl?raw'
import vertexUp from './shaders/up/vertex.glsl?raw'

export default function getPasses(rt) {
  return {
    ...pass(rt, 'oit', vertexOit, fragmentOit, [
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
    ...pass(rt, 'down', vertexDown, fragmentDown, [
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
    ...pass(rt, 'up', vertexUp, fragmentUp, [
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
    ...pass(rt, 'afterImage', vertexAfterimage, fragmentAfterimage, [
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
    ]),
    ...pass(rt, 'bloom', vertexBloom, fragmentBloom, [
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
    ...pass(rt, 'skybox', vertexSkybox, fragmentSkybox, [
      {
        name: 'cubeMap',
        type: '1i',
        value: 2,
      },
      {
        name: 'viewProjectionInverse',
        type: 'm4fv',
        value: columnMajor(ident(4)),
      },
    ]),
    updateUniforms(rt) {
      this.skybox.uniforms.viewProjectionInverse.update(
        rt.camera.viewProjectionInverse
      )
    },
  }
}

if (import.meta.hot) {
  const updatePassShader = (pass, type) => module => {
    const rt = window.rt
    console.debug('Accepting the new pass shader')
    rt.passes[pass][type] = module.default
    rt.passes[pass].recompileProgram(rt)
    rt.passes.updateUniforms(rt)
    render(rt)
  }
  import.meta.hot.accept(
    './shaders/afterImage/fragment.glsl?raw',
    updatePassShader('afterImage', 'fragment')
  )
  import.meta.hot.accept(
    './shaders/afterImage/vertex.glsl?raw',
    updatePassShader('afterImage', 'vertex')
  )
  import.meta.hot.accept(
    './shaders/bloom/fragment.glsl?raw',
    updatePassShader('bloom', 'fragment')
  )
  import.meta.hot.accept(
    './shaders/bloom/vertex.glsl?raw',
    updatePassShader('bloom', 'vertex')
  )
  import.meta.hot.accept(
    './shaders/down/fragment.glsl?raw',
    updatePassShader('down', 'fragment')
  )
  import.meta.hot.accept(
    './shaders/down/vertex.glsl?raw',
    updatePassShader('down', 'vertex')
  )
  import.meta.hot.accept(
    './shaders/oit/vertex.glsl?raw',
    updatePassShader('oit', 'vertex')
  )
  import.meta.hot.accept(
    './shaders/up/fragment.glsl?raw',
    updatePassShader('up', 'fragment')
  )
  import.meta.hot.accept(
    './shaders/up/vertex.glsl?raw',
    updatePassShader('up', 'vertex')
  )
}
