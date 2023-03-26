import { MeshBasicMaterial } from 'three'
import vertexVertexShader from './vertexVertex.glsl'
import projectionVertexShader from './projectionVertex.glsl'
import { C } from '../C'

export const wrapVertexMaterial = material => {
  material.vertexColors = true
  material.uniforms = {
    curvature: { value: 0 },
    thickness: { value: 0 },
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
    }
    shader.vertexShader = [
      ...defines,
      vertexVertexShader.match(
        /\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m
      )[1],
      projectionVertexShader.match(
        /\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m
      )[1],
      shader.vertexShader
        .replace('#include <begin_vertex>', '')
        .replace(
          '#include <beginnormal_vertex>',
          vertexVertexShader.match(
            /\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m
          )[1]
        ),
    ].join('\n')
  }
  material.customProgramCacheKey = () => {
    return `vertex_${C.dimensions}_${C.projection}`
  }
  return material
}
