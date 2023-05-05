/**/
/* BEGIN HEADER */
uniform float curvature;
uniform float vertexThickness;
uniform float edgeThickness;
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
attribute vec2 instancePosition;
attribute vec2 instanceTarget;
attribute vec2 instanceCentroid;
#elif DIMENSIONS == 3
attribute vec3 instancePosition;
attribute vec3 instanceTarget;
attribute vec3 instanceCentroid;
#elif DIMENSIONS == 4
attribute vec4 instancePosition;
attribute vec4 instanceTarget;
attribute vec4 instanceCentroid;
#elif DIMENSIONS >= 5
attribute mat3 instancePosition;
attribute mat3 instanceTarget;
attribute mat3 instanceCentroid;

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

attribute vec3 instanceColor;

const float radial = 8.;
const float TAU = 6.28318530717958647692528676655900576;
const float EPS = .001;
const vec3 NOISE = vec3(.000003, -.000002, .000017);

/* END HEADER */

void main() {
  /* BEGIN MAIN */
  // Set color

  #if defined( USE_COLOR_ALPHA ) || defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
  vColor.rgb = instanceColor.rgb;
  #endif

  #if DIMENSIONS == 2
  vec2 pos;
  vec2 next;
  vec2 other;
  #elif DIMENSIONS == 3
  vec3 pos;
  vec3 next;
  vec3 other;
  #elif DIMENSIONS == 4
  vec4 pos;
  vec4 next;
  vec4 other;
  #elif DIMENSIONS == 5
  vec5 pos;
  vec5 next;
  vec5 other;
  vec5 instancePosition = fromMat(instancePosition);
  vec5 instanceTarget = fromMat(instanceTarget);
  vec5 instanceCentroid = fromMat(instanceCentroid);
  #elif DIMENSIONS == 6
  vec6 pos;
  vec6 next;
  vec6 other;
  vec6 instancePosition = fromMat(instancePosition);
  vec6 instanceTarget = fromMat(instanceTarget);
  vec6 instanceCentroid = fromMat(instanceCentroid);
  #elif DIMENSIONS == 7
  vec7 pos;
  vec7 next;
  vec7 other;
  vec7 instancePosition = fromMat(instancePosition);
  vec7 instanceTarget = fromMat(instanceTarget);
  vec7 instanceCentroid = fromMat(instanceCentroid);
  #elif DIMENSIONS == 8
  vec8 pos;
  vec8 next;
  vec8 other;
  vec8 instancePosition = fromMat(instancePosition);
  vec8 instanceTarget = fromMat(instanceTarget);
  vec8 instanceCentroid = fromMat(instanceCentroid);
  #elif DIMENSIONS == 9
  vec9 pos;
  vec9 next;
  vec9 other;
  vec9 instancePosition = fromMat(instancePosition);
  vec9 instanceTarget = fromMat(instanceTarget);
  vec9 instanceCentroid = fromMat(instanceCentroid);
  #endif

  vec3 norm;
  // <begin_vertex>
  vec3 transformed;
  float vid = float(gl_VertexID);

  if(!nan(instanceCentroid)) {
    pos = trix(instanceCentroid, instancePosition, instanceTarget, uv);
    next = trix(instanceCentroid, instancePosition, instanceTarget, uv + vec2(EPS, 0.));
    other = trix(instanceCentroid, instancePosition, instanceTarget, uv + vec2(0., EPS));

    if(length(uv) != 0. || segments > 1.) {
      pos = xnormalize(pos);
      next = xnormalize(next);
      other = xnormalize(other);
    }
    transformed = xproject(pos);
    vec3 n = xproject(next);
    vec3 o = xproject(other);
    norm = cross(n - transformed, o - transformed);
  } else if(!nan(instanceTarget)) {

    float h = floor(vid / (radial + 1.)) / (segments);
    float r = mod(vid, radial + 1.) / (radial);

    pos = mix(instancePosition, instanceTarget, h);
    next = mix(instancePosition, instanceTarget, h + EPS);

  // vec4 u = vec4(1., 0., 0., 0.); // normalize(pos) but this do not work for first vertices;
  // vec4 v = normalize(segment);

  // // Get the rotation matrix from u to v
  // mat4 rotationMatrix = findRotationMatrix(u, v);

  // // Rotate everything according it
  // // pos = rotationMatrix * pos;
  // norm = rotationMatrix * norm;
  // #ifdef USE_TANGENT
  // tangent = rotationMatrix * tangent;
  // #endif

  // Position segments on hypersurface
    pos = xnormalize(pos);
    next = xnormalize(next);

    transformed = xproject(pos);
    vec3 n = xproject(next) + NOISE; // Avoid collinearity
    vec3 k = normalize(transformed - n); // current segment direction

    // Rodrigues' rotation formula
    // To rotate v around axis k by angle r:
    vec3 v = normalize(cross(n, transformed));
    norm = v * cos(r * TAU) + cross(k, v) * sin(r * TAU);// + k * dot(k, v) * (1. - cos(r * TAU));
    norm = normalize(norm);
    float sizeFactor = .001 * edgeThickness;
    transformed += sizeFactor * norm / len(pos);

  } else {
    pos = instancePosition;
    transformed = xproject(pos);
    norm = normal;
    float sizeFactor = .001 * vertexThickness;
    transformed += sizeFactor * norm / len(pos);
  }

  // <beginnormal_vertex>
  vec3 objectNormal = norm;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}
