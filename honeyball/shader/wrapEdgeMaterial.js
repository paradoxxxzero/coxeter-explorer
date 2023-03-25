import { MeshBasicMaterial } from 'three'
import edgeVertexShader from './edgeVertexShader.glsl'

export const wrapEdgeMaterial = material => {
  material.vertexColors = true
  material.uniforms = {
    curvature: { value: 0 },
    projection: { value: 0 },
    thickness: { value: 1 },
    dimensions: { value: 3 },
    segments: { value: 3 },
  }
  material.onBeforeCompile = shader => {
    Object.assign(shader.uniforms, material.uniforms)
    if (material instanceof MeshBasicMaterial) {
      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        '#include <beginnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t\t#include <begin_vertex>'
      )
    }
    shader.vertexShader =
      edgeVertexShader.match(
        /\/\* BEGIN HEADER \*\/([\s\S]*?)\/\* END HEADER \*\//m
      )[1] +
      shader.vertexShader.replace(
        '#include <project_vertex>',
        edgeVertexShader.match(
          /\/\* BEGIN MAIN \*\/([\s\S]*?)\/\* END MAIN \*\//m
        )[1]
      )
  }
  return material
}
