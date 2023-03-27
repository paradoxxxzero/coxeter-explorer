/**/
/* BEGIN HEADER */
uniform float curvature;
uniform float thickness;

attribute vec4 instancePosition;
attribute vec3 instanceColor;
/* END HEADER */

void main() {
  /* BEGIN MAIN */
  // Set color
  vColor.rgb = instanceColor.rgb;

  vec4 pos = vec4(instancePosition);

  // <begin_vertex>
  vec3 transformed = xproject(pos);

  vec3 norm = vec3(normal);
  transformed += .1 * thickness * norm / max(1., length(pos));

  // <beginnormal_vertex>
  vec3 objectNormal = norm;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif
  /* END MAIN */
}
