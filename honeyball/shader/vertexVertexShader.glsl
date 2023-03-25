/**/
/* BEGIN HEADER */
uniform float curvature;
uniform float dimensions;
uniform float projection;
uniform float thickness;

attribute vec4 instancePosition;
attribute vec3 instanceColor;
/* END HEADER */

void main() {
  /* BEGIN MAIN */
  vColor.rgb = instanceColor.rgb;
  vec4 mvNormal = vec4(normal, 0.);
  vec4 mvPosition = vec4(transformed, 0.);
  mvPosition += instancePosition;

  if(dimensions == 4.0) {
    mvPosition.xyzw /= -curvature + mvPosition.w;
    mvPosition.w = 1.;
  }
  mvPosition.xyz += .1 * thickness * mvNormal.xyz;
  mvPosition = modelViewMatrix * mvPosition;

  gl_Position = projectionMatrix * mvPosition;
  /* END MAIN */
  // gl_Position = projectionMatrix * modelViewMatrix * transformed;
}
