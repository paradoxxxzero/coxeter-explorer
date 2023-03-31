import {
  MeshBasicMaterial,
  MeshDepthMaterial,
  ShaderMaterial,
  MeshNormalMaterial,
  MeshDistanceMaterial,
} from 'three'
import hyperMathVertexShader from './hyperMathVertex.glsl'
import projectionVertexShader from './projectionVertex.glsl'
import { C } from '../C'

const header = hyperMathVertexShader.match(
  /\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m
)[1]
const main = hyperMathVertexShader.match(
  /\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m
)[1]
const include = projectionVertexShader.match(
  /\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m
)[1]

export const hyperMathMaterial = material => {
  material = material.clone()
  material.vertexColors = ![
    MeshDepthMaterial,
    ShaderMaterial,
    MeshNormalMaterial,
    MeshDistanceMaterial,
  ].find(cls => material instanceof cls)
  material._dimensions = C.dimensions
  material.uniforms = {
    ...(material.uniforms || {}),
    curvature: { value: 0 },
    edgeThickness: { value: 0 },
    vertexThickness: { value: 0 },
    segments: { value: 3 },
  }
  material.onBeforeCompile = shader => {
    const defines = [
      `#define D_${C.dimensions}`,
      `#define P_${C.projection.toUpperCase()}`,
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
    return `hypermath_${material.constructor.name}_${C.dimensions}_${C.projection}`
  }
  return material
}
