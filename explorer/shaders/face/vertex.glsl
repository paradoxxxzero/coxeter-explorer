#version 300 es
precision highp float;

#include config
#include globals

uniform float curvature;
uniform float segments;
uniform mat4 viewProjection;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS == 2
in vec2 position;
in vec2 target;
in vec2 center;
#elif DIMENSIONS == 3
in vec3 position;
in vec3 target;
in vec3 center;
#elif DIMENSIONS == 4
in vec4 position;
in vec4 target;
in vec4 center;
#elif DIMENSIONS >= 5
in mat3 position;
in mat3 target;
in mat3 center;
#endif

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include helpers
#include ease
#include project

void main() {
  #if DIMENSIONS > 4
  vecN iPosition = multiplyMatrix(matrix, fromMat(position));
  vecN iTarget = multiplyMatrix(matrix, fromMat(target));
  vecN iCenter = multiplyMatrix(matrix, fromMat(center));
  #else
  vecN iPosition = matrix * position;
  vecN iTarget = matrix * target;
  vecN iCenter = matrix * center;
  #endif

  vec2 t = ease(uv);
  vecN pos = trix(iPosition, iCenter, iTarget, t);
  vecN next = trix(iPosition, iCenter, iTarget, t + vec2(EPS, 0.f));
  vecN other = trix(iPosition, iCenter, iTarget, t + vec2(0.f, EPS));

  if(segments > 1.f) {
    pos = xnormalize(pos);
    next = xnormalize(next);
    other = xnormalize(other);
  }

  vec3 position = xproject(pos);

  vec3 nn = xproject(next) - position;
  vec3 oo = xproject(other) - position;

  // Refine if near collinearity
  //   if(length(nn) < .0001 || length(oo) < .0001) {
  //     next = trix(iCenter, iPosition, iTarget, t + vec2(.1, 0.));
  //     other = trix(iCenter, iPosition, iTarget, t + vec2(0., .1));

  //     if(length(t) != 0. || segments > 1.) {
  //       next = xnormalize(next);
  //       other = xnormalize(other);
  //     }

  //     nn = xproject(next) - position;
  //     oo = xproject(other) - position;
  //   }

  gl_Position = viewProjection * vec4(position, 1.f);

  vColor = color;
  vPosition = position;
  vNormal = normalize(cross(nn, oo));
}
