/**/
/* BEGIN HEADER */
uniform float curvature;
uniform float vertexThickness;
uniform float edgeThickness;
uniform float segments;

#if DIMENSIONS == 3
attribute vec3 instancePosition;
attribute vec3 instanceTarget;
#elif DIMENSIONS == 4
attribute vec4 instancePosition;
attribute vec4 instanceTarget;
#elif DIMENSIONS >= 5
attribute mat3 instancePosition;
attribute mat3 instanceTarget;

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

attribute vec3 instanceColor;

const float radial = 8.;
const float TAU = 6.28318530717958647692528676655900576;

/* END HEADER */

void main() {
  /* BEGIN MAIN */
  // Set color

  #if defined( USE_COLOR_ALPHA ) || defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
  vColor.rgb = instanceColor.rgb;
  #endif

  #if DIMENSIONS == 3
  vec3 pos;
  #elif DIMENSIONS == 4
  vec4 pos;
  #elif DIMENSIONS == 5
  vec5 pos;
  vec5 instancePosition = fromMat(instancePosition);
  vec5 instanceTarget = fromMat(instanceTarget);
  #elif DIMENSIONS == 6
  vec6 pos;
  vec6 instancePosition = fromMat(instancePosition);
  vec6 instanceTarget = fromMat(instanceTarget);
  #endif

  vec3 norm;
  float sizeFactor;

  if(!nan(instanceTarget)) {
    float vid = float(gl_VertexID);
    float h = floor(vid / (radial + 1.)) / (segments);
    float r = mod(vid, radial + 1.) / (radial);

    pos = mix(instancePosition, instanceTarget, h);

    #if DIMENSIONS == 3
    vec3 next;
    #elif DIMENSIONS == 4
    vec4 next;
    #elif DIMENSIONS == 5
    vec5 next;
    #elif DIMENSIONS == 6
    vec6 next;
    #endif

    next = mix(instancePosition, instanceTarget, h + .001);

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

    vec3 p = xproject(pos);
    vec3 n = xproject(next);

    vec3 k = normalize(n - p); // current segment direction

  // Inflate
    vec3 u = cross(n, p);
    if(len(u) < .000001) {
      u = p + vec3(n.y, 0, n.z);
    }
    u = normalize(u);
    vec3 v = normalize(cross(u, k));

    norm = v * cos(r * TAU) + cross(v, k) * sin(r * TAU);
    norm = normalize(norm);
    sizeFactor = .001 * edgeThickness;
  } else {
    pos = instancePosition;
    norm = normal;
    sizeFactor = .001 * vertexThickness;
  }
  // <begin_vertex>
  vec3 transformed = xproject(pos);
  transformed += sizeFactor * norm / max(1., len(pos));

  // <beginnormal_vertex>
  vec3 objectNormal = norm;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}
