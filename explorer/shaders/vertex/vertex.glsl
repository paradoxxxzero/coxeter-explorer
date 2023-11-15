#version 300 es
precision highp float;

#include globals

uniform float curvature;
uniform float thickness;
uniform mat4 viewProjection;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS == 2
in vec2 position;
#elif DIMENSIONS == 3
in vec3 position;
#elif DIMENSIONS == 4
in vec4 position;
#elif DIMENSIONS >= 5
in mat3 position;
#endif

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include project

void main() {
  #if DIMENSIONS > 4
  vecN pos = multiplyMatrix(matrix, fromMat(position));
  #else
  vecN pos = matrix * position;
  #endif
  // pos = xnormalize(pos);

  vec3 proj = xproject(pos);
  proj = inflate(proj, pos, normal, thickness, .01f);

  gl_Position = viewProject(proj);

  vColor = color;
  vPosition = proj;
  vNormal = normal;
}
