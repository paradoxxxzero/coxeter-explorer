#version 300 es
precision highp float;

#include globals

uniform mat4 viewProjection;
uniform float curvature;
uniform float segments;
uniform float thickness;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS == 2
in vec2 position;
in vec2 target;
#elif DIMENSIONS == 3
in vec3 position;
in vec3 target;
#elif DIMENSIONS == 4
in vec4 position;
in vec4 target;
#elif DIMENSIONS >= 5
in mat3 position;
in mat3 target;
#endif

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include project

void main() {
  #if DIMENSIONS > 4
  vecN iPosition = multiplyMatrix(matrix, fromMat(position));
  vecN iTarget = multiplyMatrix(matrix, fromMat(target));
  #else
  vecN iPosition = matrix * position;
  vecN iTarget = matrix * target;
  #endif

  float t = ease(uv.y);
  vecN pos = mix(iPosition, iTarget, t);
  vecN next = mix(iPosition, iTarget, t + EPS);
  vec3 start = xproject(iPosition);
  vec3 end = xproject(iTarget);
  vec3 direction = normalize(end - start);
  vec3 up = vec3(0.f);
  float min = 1.f;
  if(abs(direction.x) < min) {
    min = abs(direction.x);
    up = vec3(1.f, 0.f, 0.f);
  }
  if(abs(direction.y) < min) {
    min = abs(direction.y);
    up = vec3(0.f, 1.f, 0.f);
  }
  if(abs(direction.z) < min) {
    min = abs(direction.z);
    up = vec3(0.f, 0.f, 1.f);
  }

  // Position segments on hypersurface
  if(segments > 1.f) {
    pos = xnormalize(pos);
    next = xnormalize(next);
  }

  vec3 proj = xproject(pos);
  vec3 nextProj = xproject(next);

  vec3 tangent = normalize(proj - nextProj);
  vec3 norm = cross(tangent, cross(tangent, up));

  // Rodrigues' rotation formula: rotate norm around tangent by angle r:
  float r = (1.f - uv.x) * TAU;
  norm = normalize(norm * cos(r) + cross(tangent, norm) * sin(r));

  vec3 finalPosition = inflate(proj, pos, norm, thickness, 0.f);

  gl_Position = viewProject(finalPosition);

  vColor = color;
  vPosition = finalPosition;
  vNormal = norm;
}
