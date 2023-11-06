#version 300 es
precision highp float;

#include config
#include globals

uniform float curvature;
uniform mat4 viewProjection;
uniform float segments;

#if DIMENSIONS >= 4
uniform float fov4;
#endif
#if DIMENSIONS >= 5
uniform float fov5;
#endif
#if DIMENSIONS >= 6
uniform float fov6;
#endif
#if DIMENSIONS >= 7
uniform float fov7;
#endif
#if DIMENSIONS >= 8
uniform float fov8;
#endif
#if DIMENSIONS >= 9
uniform float fov9;
#endif

#if DIMENSIONS == 2
uniform mat2 matrix;
in vec2 position;
in vec2 target;
in vec2 center;
#elif DIMENSIONS == 3
uniform mat3 matrix;
in vec3 position;
in vec3 target;
in vec3 center;
#elif DIMENSIONS == 4
uniform mat4 matrix;
in vec4 position;
in vec4 target;
in vec4 center;
#elif DIMENSIONS >= 5
in mat3 position;
in mat3 target;
in mat3 center;

struct vec5 {
  vec4 v;
  float u;
};
#endif
#if DIMENSIONS >= 6
struct vec6 {
  vec4 v;
  vec2 u;
};
#endif
#if DIMENSIONS >= 7
struct vec7 {
  vec4 v;
  vec3 u;
};
#endif
#if DIMENSIONS >= 8
struct vec8 {
  vec4 v;
  vec4 u;
};
#endif
#if DIMENSIONS >= 9
struct vec9 {
  vec4 v;
  vec4 u;
  float t;
};
#endif

in vec2 uv;
in vec3 normal;

in vec3 color;

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

#include ease
#include project

void main() {
  #if DIMENSIONS > 4
  vecN iPosition = fromMat(position);
  vecN iTarget = fromMat(target);
  vecN iCenter = fromMat(center);
  #else
  vecN iPosition = matrix * position;
  vecN iTarget = matrix * target;
  vecN iCenter = matrix * center;
  #endif

  vec2 t = ease(uv);
  vecN pos = trix(iPosition, iCenter, iTarget, t);
  vecN next = trix(iPosition, iCenter, iTarget, t + vec2(EPS, 0.f));
  vecN other = trix(iPosition, iCenter, iTarget, t + vec2(0.f, EPS));

  if(length(t) != 0.f || segments > 1.f) {
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
