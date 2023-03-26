/**/
/* BEGIN HEADER */
uniform float curvature;
uniform float thickness;

attribute vec4 instancePositionStart;
attribute vec4 instancePositionEnd;
attribute vec3 instanceColor;
/* END HEADER */

void main() {
  /* BEGIN MAIN */
  vColor.rgb = instanceColor.rgb;

  // float w0 = sqrt(1.0 - curvature * (transformed.x * transformed.x + transformed.y * transformed.y + transformed.z * transformed.z));
  // float w = dimensions == 4.0 ? w0 : 1.;
  vec4 mvNormal = vec4(transformedNormal, 0.);
  vec4 mvPosition = vec4(transformed, 0.);
  vec4 u = vec4(0., 0., 1., 0.); // normalize(mvPosition) but this do not work for first vertices;
  vec4 mvSegment = instancePositionEnd - instancePositionStart;
  vec4 v = normalize(mvSegment);

  mvPosition.z *= length(mvSegment);

  // get the rotation matrix from u to v
  vec4 w = u + v;
  if(length(w) > 1e-6) {
    mat4 rotationMatrix = mat4(1.) - outerProduct(w / (1. + dot(u, v)), w) + 2. * outerProduct(v, u);
    // rotate the point
    mvPosition = rotationMatrix * mvPosition;
    mvNormal = rotationMatrix * mvNormal;
  } else {
    mvPosition *= -1.;
    mvNormal *= -1.;
  }

  mvPosition += instancePositionStart;

  if(curvature != 0.0) {
      // TODO: rotate normal
    mvPosition = xnormalize(mvPosition);
  }

  mvPosition += .025 * thickness * mvNormal;
  mvPosition = xproject(mvPosition);

  mvPosition = modelViewMatrix * mvPosition;

  gl_Position = projectionMatrix * mvPosition;

  // vNormal = transformedNormal = objectNormal = mvNormal.xyz;// mvNormal.w;
  /* END MAIN */
  // gl_Position = projectionMatrix * modelViewMatrix * transformed;
}
