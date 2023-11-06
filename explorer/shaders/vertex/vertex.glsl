#version 300 es
precision highp float;

#include config
#include globals

uniform float curvature;
uniform float thickness;
uniform mat4 viewProjection;

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
#elif DIMENSIONS == 3
uniform mat3 matrix;
in vec3 position;
#elif DIMENSIONS == 4
uniform mat4 matrix;
in vec4 position;
#elif DIMENSIONS >= 5
in mat3 position;

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
  vecN pos = fromMat(position);
  #else
  vecN pos = matrix * position;
  #endif
  pos = xnormalize(pos);

  vec3 position = xproject(pos);
  position = inflate(position, pos, normal, thickness, .01f);

  gl_Position = viewProjection * vec4(position, 1.f);

  vPosition = position;
  vColor = color;
  vNormal = normal;
}
