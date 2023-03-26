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

  vec4 pos = vec4(position, 0.);
  vec4 norm = vec4(normal, 0.);

  pos += instancePosition;

  pos += .1 * thickness * norm;
  pos = xproject(pos);

    // <begin_vertex>
  vec3 transformed = pos.xyz;
  //
  // <beginnormal_vertex>
  vec3 objectNormal = norm.xyz;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif

  /* END MAIN */
  // gl_Position = projectionMatrix * modelViewMatrix * transformed;
}
