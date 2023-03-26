import { MeshBasicMaterial } from 'three'
import edgeVertexShader from './edgeVertex.glsl'
import projectionVertexShader from './projectionVertex.glsl'
import { C } from '../C'

export const wrapEdgeMaterial = material => {
  material.vertexColors = true
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
      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <beginnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t\t#include <begin_vertex>'
      )
    }
    shader.vertexShader = [
      ...defines,
      edgeVertexShader.match(
        /\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m
      )[1],
      projectionVertexShader.match(
        /\/\* BEGIN INCLUDE \*\/([\s\S]*?)\/\* END INCLUDE \*\//m
      )[1],
      shader.vertexShader.replace(
        '#include <project_vertex>',
        edgeVertexShader.match(
          /\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m
        )[1]
      ),
    ].join('\n')
  }
  material.customProgramCacheKey = () => {
    return `edge_${C.dimensions}_${C.projection}`
  }
  return material
}
