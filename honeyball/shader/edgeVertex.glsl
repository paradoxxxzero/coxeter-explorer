/**/
/* BEGIN HEADER */
uniform float curvature;
uniform float thickness;
uniform float segments;

attribute vec4 instancePositionStart;
attribute vec4 instancePositionEnd;
attribute vec3 instanceColor;

const float radial = 8.;
const float TAU = 6.28318530717958647692528676655900576;

/* END HEADER */

void main() {
  /* BEGIN MAIN */
  // Set color
  vColor.rgb = instanceColor.rgb;
  float vid = float(gl_VertexID);
  float h = floor(vid / (radial + 1.)) / (segments);
  float r = mod(vid, radial + 1.) / (radial);

  vec4 pos = mix(instancePositionStart, instancePositionEnd, h);
  vec4 next = mix(instancePositionStart, instancePositionEnd, h + .001);

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
  vec3 u = normalize(cross(n, p));
  if(isnan(u.x)) {
    u = normalize(vec3(3., 8., -128.));
  }
  // vec3 u = normalize(vec3(3., 8., -128.));
  vec3 v = normalize(cross(u, k));

  vec3 norm = v * cos(r * TAU) + cross(v, k) * sin(r * TAU);
  norm = normalize(norm);

  // <begin_vertex>
  vec3 transformed = xproject(pos);
  transformed += .025 * thickness * norm / max(1., length(pos));

  // <beginnormal_vertex>
  vec3 objectNormal = norm;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}
