#include globals
#include dimensions

uniform mat4 viewProjection;
uniform matN metric;
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

#include vertexouthead
#include project

void main() {
  vecN positionN = multiplyMatrix(matrix, adapt(position));
  vecN targetN = multiplyMatrix(matrix, adapt(target));
  vecN centerN = multiplyMatrix(matrix, adapt(center));

  vec2 t = ease(uv);
  vecN pos = trix(centerN, positionN, targetN, t);
  vecN next = trix(centerN, positionN, targetN, t - vec2(DT, NOISE.y));
  vecN other = trix(centerN, positionN, targetN, t - vec2(NOISE.x, DT));

  #if defined(SEGMENTS) && CURVATURE != 0
  pos = xnormalize(pos);
  next = xnormalize(next);
  other = xnormalize(other);
  #endif

  vec3 proj = xproject(pos);

  vec3 drdx = (xproject(next) - proj);
  vec3 drdy = (xproject(other) - proj);

  // // if |drdx| or |drdy| is too small the norm will vary too much, see horoball example
  // if(length(drdx) < 1e-4f || length(drdy) < 1e-4f) {
  //   next = trix(positionN, centerN, targetN, t + vec2(DT / (1000.f * length(drdx)), 0.f));
  //   other = trix(positionN, centerN, targetN, t + vec2(0.f, DT / (1000.f * length(drdy))));
  // #if defined(SEGMENTS) && CURVATURE != 0
  //     next = xnormalize(next);
  //     other = xnormalize(other);
  // #endif

  //   drdx = (xproject(next) - proj);
  //   drdy = (xproject(other) - proj);
  // }

  vec3 norm = normalize(cross(drdx, drdy));
  #include vertexout
}
