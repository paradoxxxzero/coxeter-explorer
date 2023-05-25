/**/
/* BEGIN INCLUDE */

const float TAU = 6.28318530717958647692528676655900576;
const float EPS = .001;
const vec3 NOISE = vec3(.000003, -.000002, .000017);

#if DIMENSIONS == 2
vec2 pos;
vec2 iPosition;
#if HYPERTYPE > 0
vec2 next;
vec2 iTarget;
#endif
#if HYPERTYPE > 1
vec2 other;
vec2 iCentroid;
#endif

#elif DIMENSIONS == 3
vec3 pos;
vec3 iPosition;
#if HYPERTYPE > 0
vec3 next;
vec3 iTarget;
#endif
#if HYPERTYPE > 1
vec3 other;
vec3 iCentroid;
#endif

#elif DIMENSIONS == 4
vec4 pos;
vec4 iPosition;
#if HYPERTYPE > 0
vec4 next;
vec4 iTarget;
#endif
#if HYPERTYPE > 1
vec4 other;
vec4 iCentroid;
#endif

#elif DIMENSIONS == 5
vec5 pos;
vec5 iPosition;
#if HYPERTYPE > 0
vec5 next;
vec5 iTarget;
#endif
#if HYPERTYPE > 1
vec5 other;
vec5 iCentroid;
#endif

#elif DIMENSIONS == 6
vec6 pos;
vec6 iPosition;
#if HYPERTYPE > 0
vec6 next;
vec6 iTarget;
#endif
#if HYPERTYPE > 1
vec6 other;
vec6 iCentroid;
#endif

#elif DIMENSIONS == 7
vec7 pos;
vec7 iPosition;
#if HYPERTYPE > 0
vec7 next;
vec7 iTarget;
#endif
#if HYPERTYPE > 1
vec7 other;
vec7 iCentroid;
#endif

#elif DIMENSIONS == 8
vec8 pos;
vec8 iPosition;
#if HYPERTYPE > 0
vec8 next;
vec8 iTarget;
#endif
#if HYPERTYPE > 1
vec8 other;
vec8 iCentroid;
#endif

#elif DIMENSIONS == 9
vec9 pos;
vec9 iPosition;
#if HYPERTYPE > 0
vec9 next;
vec9 iTarget;
#endif
#if HYPERTYPE > 1
vec9 other;
vec9 iCentroid;
#endif
#endif

#if HYPERTYPE == 2 || HYPERTYPE == 3
void faceVertex(out vec3 transformed, out vec3 objectNormal) {
  #if DIMENSIONS > 4
  iPosition = fromMat(instancePosition);
  iTarget = fromMat(instanceTarget);
  iCentroid = fromMat(instanceCentroid);
  #else
  iPosition = instancePosition;
  iTarget = instanceTarget;
  iCentroid = instanceCentroid;
  #endif

  pos = trix(iCentroid, iPosition, iTarget, uv);
  next = trix(iCentroid, iPosition, iTarget, uv + vec2(EPS, 0.));
  other = trix(iCentroid, iPosition, iTarget, uv + vec2(0., EPS));

  if(length(uv) != 0. || segments > 1.) {
    pos = xnormalize(pos);
    next = xnormalize(next);
    other = xnormalize(other);
  }

  transformed = xproject(pos);
  objectNormal = cross(xproject(next) - transformed, xproject(other) - transformed);
}
#endif

#if HYPERTYPE == 1 || HYPERTYPE == 3
void edgeVertex(out vec3 transformed, out vec3 objectNormal) {
  #if DIMENSIONS > 4
  iPosition = fromMat(instancePosition);
  iTarget = fromMat(instanceTarget);
  #else
  iPosition = instancePosition;
  iTarget = instanceTarget;
  #endif

  pos = mix(iPosition, iTarget, uv.y);
  next = mix(iPosition, iTarget, uv.y + EPS);
  // Position segments on hypersurface
  pos = xnormalize(pos);
  next = xnormalize(next);

  transformed = xproject(pos);

  vec3 n = xproject(next) + NOISE; // Avoid collinearity
  vec3 k = normalize(transformed - n); // current segment direction

    // Rodrigues' rotation formula
    // To rotate v around axis k by angle r:
  float r = (1. - uv.x) * TAU;
  vec3 v = normalize(cross(n, transformed));
  objectNormal = v * cos(r) + cross(k, v) * sin(r);// + k * dot(k, v) * (1. - cos(r));
  objectNormal = normalize(objectNormal);
  float sizeFactor = .001 * edgeThickness;

    // Removing 3d length in perspective computation
  #if DIMENSIONS < 5
  pos.xy = vec2(1.);
  #if DIMENSIONS >= 3
  pos.z = 1.;
  #endif
  #else
  pos.v.xyz = vec3(1.);
  #endif

  transformed += sizeFactor * objectNormal / len(pos);
}
#endif

#if HYPERTYPE == 0 || HYPERTYPE == 3
void vertexVertex(out vec3 transformed, out vec3 objectNormal) {
  #if DIMENSIONS > 4
  iPosition = fromMat(instancePosition);
  #else
  iPosition = instancePosition;
  #endif

  pos = iPosition;
  transformed = xproject(pos);
  objectNormal = normal;

  float sizeFactor = .001 * vertexThickness;
  // Removing 3d length in perspective computation
  #if DIMENSIONS < 5
  pos.xy = vec2(1.);
  #if DIMENSIONS >= 3
  pos.z = 1.;
  #endif
  #else
  pos.v.xyz = vec3(1.);
  #endif

  transformed += sizeFactor * objectNormal / len(pos);
}
#endif
/* END INCLUDE */
