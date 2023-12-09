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
  vecN iPosition = multiplyMatrix(matrix, adapt(position));
  vecN iTarget = multiplyMatrix(matrix, adapt(target));

  float t = ease(uv.y);
  vecN pos = mix(iPosition, iTarget, t);
  vecN next = mix(iPosition, iTarget, t + DT);
  // Position segments on hypersurface

  #if defined(SEGMENTS) && CURVATURE != 0
  pos = xnormalize(pos);
  next = xnormalize(next);
  #endif

  vec3 proj = xproject(pos);
  vec3 nextProj = xproject(next) + NOISE;
  vec3 tangent = normalize(proj - nextProj);

  vec3 norm = cross(nextProj, proj);

  // // Find a stable norm for the whole tube
  // vecN mid = mix(iPosition, iTarget, .5f);

  // vec3 start = xproject(iPosition);
  // vec3 end = xproject(iTarget);
  // vec3 middle = xproject(xnormalize(mid));
  // vec3 norm = cross(end - start, middle - start);

  // // If there is no curvature the tube will be straight:
  // if(length(norm) < 0.001f) {
  //   middle += NOISE;
  //   norm = cross(end - start, middle - start);
  // }

  // Rodrigues' rotation formula: rotate norm around tangent by angle r:
  float r = uv.x * TAU;
  norm = normalize(norm * cos(r) + cross(tangent, norm) * sin(r));

  proj = inflate(proj, pos, norm, thickness);

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
