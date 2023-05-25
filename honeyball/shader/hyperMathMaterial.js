import {
  MeshBasicMaterial,
  MeshDepthMaterial,
  ShaderMaterial,
  MeshNormalMaterial,
  MeshDistanceMaterial,
} from 'three'
import hyperMathVertexShader from './hyperMathVertex.glsl'
import projectionVertexShader from './projectionVertex.glsl'
import normalizationVertexShader from './normalizationVertex.glsl'
import { projections } from '../../statics'

const header = hyperMathVertexShader.match(
  /\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m
)[1]
const main = hyperMathVertexShader.match(
  /\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m
)[1]
const include =
  projectionVertexShader.match(
    /\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m
  )[1] +
  '\n' +
  normalizationVertexShader.match(
    /\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m
  )[1]

export const hyperMathMaterial = (material, rt, type = 'universal') => {
  material = material.clone()
  material.vertexColors = ![
    MeshDepthMaterial,
    ShaderMaterial,
    MeshNormalMaterial,
    MeshDistanceMaterial,
  ].find(cls => material instanceof cls)
  material._rt = rt
  material._type = type
  material.uniforms = {
    ...(material.uniforms || {}),
    curvature: { value: 0 },
    edgeThickness: { value: 0 },
    vertexThickness: { value: 0 },
    segments: { value: 1 },
  }
  for (let i = 4; i <= rt.dimensions; i++) {
    material.uniforms[`fov${i}`] = { value: 90 }
  }

  material.onBeforeCompile = shader => {
    const { dimensions, projection } = material._rt
    const defines = [
      `#define DIMENSIONS ${dimensions}`,
      `#define PROJECTION ${projections.indexOf(projection)}`,
      `#define HYPERTYPE ${['vertex', 'edge', 'face', 'universal'].indexOf(
        material._type
      )}`,
    ]

    Object.assign(shader.uniforms, material.uniforms)
    if (material instanceof MeshBasicMaterial) {
      shader.vertexShader = shader.vertexShader
        .replace('#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )', '')
        .replace('#endif', '')
    } else if (
      material instanceof MeshDepthMaterial ||
      material instanceof MeshDistanceMaterial
    ) {
      shader.vertexShader = shader.vertexShader
        .replace('#ifdef USE_DISPLACEMENTMAP', '')
        .replace('#endif', '')
    } else if (material instanceof ShaderMaterial) {
      shader.vertexShader = shader.vertexShader.replace(
        'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
        main +
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );'
      )
    }
    shader.vertexShader = [
      ...defines,
      header,
      include,
      shader.vertexShader
        .replace('#include <begin_vertex>', '')
        .replace('#include <beginnormal_vertex>', main),
    ].join('\n')
  }
  material.customProgramCacheKey = () => {
    return `hypermath_${material._type}_${material.constructor.name}_${material._rt.dimensions}_${material._rt.projection}`
  }
  return material
}
