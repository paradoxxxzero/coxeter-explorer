import { MeshBasicMaterial, MeshDepthMaterial } from 'three'
import hyperMathVertexShader from './hyperMathVertex.glsl'
import projectionVertexShader from './projectionVertex.glsl'
import { C } from '../C'

export const hyperMathMaterial = material => {
  material.vertexColors = !(material instanceof MeshDepthMaterial)
  material._dimensions = C.dimensions
  material.uniforms = {
    curvature: { value: 0 },
    thickness: { value: 0 },
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
    } else if (material instanceof MeshDepthMaterial) {
      shader.vertexShader = shader.vertexShader
        .replace('#ifdef USE_DISPLACEMENTMAP', '')
        .replace('#endif', '')
    }

    shader.vertexShader = [
      ...defines,
      hyperMathVertexShader.match(
        /\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m
      )[1],
      projectionVertexShader.match(
        /\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m
      )[1],
      shader.vertexShader
        .replace('#include <begin_vertex>', '')
        .replace(
          '#include <beginnormal_vertex>',
          hyperMathVertexShader.match(
            /\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m
          )[1]
        ),
    ].join('\n')
  }
  material.customProgramCacheKey = () => {
    return `hypermathmaterial_${C.dimensions}_${C.projection}`
  }
  return material
}
