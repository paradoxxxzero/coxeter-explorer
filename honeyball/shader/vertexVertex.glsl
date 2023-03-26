/**/
/* BEGIN HEADER */
uniform float curvature;
uniform float thickness;

attribute vec4 instancePosition;
attribute vec3 instanceColor;
/* END HEADER */

void main() {
  /* BEGIN MAIN */
  vColor.rgb = instanceColor.rgb;

  vec4 mvNormal = vec4(transformedNormal, 0.);
  vec4 mvPosition = vec4(transformed, 0.);

  mvPosition += instancePosition;

  mvPosition += .1 * thickness * mvNormal;
  mvPosition = xproject(mvPosition);
  mvPosition = modelViewMatrix * mvPosition;

  gl_Position = projectionMatrix * mvPosition;
  /* END MAIN */
  // gl_Position = projectionMatrix * modelViewMatrix * transformed;
}
