#include globals
#include dimensions

uniform float thickness;
uniform mat4 viewProjection;
uniform matN metric;
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

#if defined(DIFFUSE) || defined(SPECULAR)
#ifdef GOURAUD
#include lighting
#endif

out vec3 vPosition;
out vec3 vNormal;
#endif

#if defined(GOURAUD)
out vec4 vColor;
#else
flat out vec3 vColor;
#endif

#include project

void main() {
  vecN pos = multiplyMatrix(matrix, adapt(position));

  #if defined(SEGMENTS) && CURVATURE != 0
    // Normalization is done mainly to remove OOD points
  pos = xnormalize(pos);
  #endif

  vec3 proj = xproject(pos);
  vec3 norm = normal;
  proj = inflate(proj, pos, normal, thickness);

  gl_Position = viewProject(proj);

  #if (defined(DIFFUSE) || defined(SPECULAR)) && defined(GOURAUD)
  vColor = light(proj, norm, color);
  #else
  vColor = color;

  #if defined(DIFFUSE) || defined(SPECULAR)
  vPosition = proj;
  vNormal = norm;
  #endif
  #endif
}
