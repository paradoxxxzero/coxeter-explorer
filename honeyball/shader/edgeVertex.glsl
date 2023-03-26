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

  vec4 pos = vec4(position, 0.);
  vec4 norm = vec4(normal, 0.);
  vec4 u = vec4(0., 0., 1., 0.); // normalize(pos) but this do not work for first vertices;
  vec4 segment = instancePositionEnd - instancePositionStart;
  vec4 v = normalize(segment);

  pos.z *= length(segment);

  // get the rotation matrix from u to v
  vec4 w = u + v;
  if(length(w) > 1e-6) {
    mat4 rotationMatrix = mat4(1.) - outerProduct(w / (1. + dot(u, v)), w) + 2. * outerProduct(v, u);
    // rotate the point
    pos = rotationMatrix * pos;
    norm = rotationMatrix * norm;
    #ifdef USE_TANGENT
    tangent = rotationMatrix * tangent;
    #endif
  } else {
    pos *= -1.;
    norm *= -1.;
  }

  pos += instancePositionStart;

  if(curvature != 0.0) {
      // TODO: rotate normal
    pos = xnormalize(pos);
  }

  pos += .025 * thickness * norm;
  pos = xproject(pos);

  // <begin_vertex>
  vec3 transformed = pos.xyz;
  //
  // <beginnormal_vertex>
  vec3 objectNormal = norm.xyz;

  #ifdef USE_TANGENT
  vec3 objectTangent = vec3(tangent.xyz);
  #endif

  // vNormal = transformedNormal = objectNormal = mvNormal.xyz;// mvNormal.w;
  /* END MAIN */
  // gl_Position = projectionMatrix * modelViewMatrix * transformed;
}
