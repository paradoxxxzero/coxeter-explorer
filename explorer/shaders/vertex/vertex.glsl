#version 300 es
precision highp float;

#include globals

uniform float thickness;

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

#ifdef LIGHTING
#ifdef GOURAUD
#include lighting
#else
out vec3 vPosition;
out vec3 vNormal;

flat 
#endif
#endif
out vec4 vColor;

#include project

void main() {
  vecN pos = multiplyMatrix(matrix, adapt(position));

  if(segments > 1.f) {
    // Normalization is done mainly to remove OOD points
    pos = xnormalize(pos);
  }

  vec3 proj = xproject(pos);
  vec3 norm = normal;
  proj = inflate(proj, pos, normal, thickness);

  gl_Position = viewProject(proj);

  #ifndef LIGHTING
  vColor = vec4(color, opacity);
  #else

  #ifdef GOURAUD
  vColor = light(proj, norm, vec4(color, opacity));
  #else 
  vColor = vec4(color, opacity);

  vPosition = proj;
  vNormal = norm;
  #endif
  #endif
}
