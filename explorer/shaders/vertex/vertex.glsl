#include globals
#include dimensions
#define VERTEX

uniform float thickness;
uniform matN metric;
uniform matN matrix;

in vec2 uv;
in vec3 normal;
in vec3 color;

#if DIMENSIONS < 2
in float position;
#elif DIMENSIONS == 2
in vec2 position;
#elif DIMENSIONS == 3
in vec3 position;
#elif DIMENSIONS == 4
in vec4 position;
#elif DIMENSIONS >= 5
in mat3 position;
#endif

#include vertexouthead
#include project

void main() {
  vecN pos = multiplyMatrix(matrix, adapt(position));

  #if defined(SEGMENTS) && CURVATURE != 0 && DIMENSIONS >= 2
    // Normalization is done mainly to remove OOD points
  pos = xnormalize(pos);
  #endif

  vec3 proj = xproject(pos);
  vec3 norm = normal;
  #if (defined(TEXTURE) || (defined(SHADING) && SHADING == 3)) && DIMENSIONS >= 2
  vecN normN = multiplyMatrix(matrix, vecNFromVec3(normal));
  norm = normalize(pureproject(normN));
  #endif
  float size = thickness;
  #ifdef TEXTURE
  size += texture(displacementMap, uv).r;
  #endif
  proj = inflate(proj, pos, norm, size);
  #include vertexout
}
