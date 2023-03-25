/**/
/* BEGIN HEADER */
uniform float curvature;
uniform float dimensions;
uniform float projection;
uniform float thickness;

attribute vec4 instancePositionStart;
attribute vec4 instancePositionEnd;
attribute vec3 instanceColor;

vec4 xproject(vec4 v) {
  if(dimensions == 4.0) {
    if(projection == 0.) { // stereographic
      v.xyz /= -curvature + v.w;
      v.w = 1.;
    } else if(projection == 1.) { // orthographic
      v.w = 1.;
    } else if(projection == 2.) { // klein
      v.xyz /= v.w;
      v.w = 1.;
    } else if(projection == 3.) { // inverted
      v.xyz /= curvature + v.w;
      v.w = 1.;
    } else if(projection == 4.) { // jemisphere
      v.xyz /= v.w;
      v.w = 1. / (1. + v.w);
    } else if(projection == 5.) { // upperhalf
      v.xyz /= v.w;
      v.w = 1. / v.w;

      v.xzw *= 2. / (1. + v.y);
      v.y = 1.;
      v.wxyz = v.yxzw;
      v.z *= -1.;
    }
    // mvNormal.xyz /= -curvature + mvNormal.w;
    // mvNormal.w = 1.;
  } else {
    if(projection == 0.) { // stereographic
      // Let the camera do the projection
      // v.xy /= -curvature + v.z;
      // v.z = 0.;
    } else if(projection == 1.) { // orthographic
      v.z = 0.;
    } else if(projection == 2.) { // klein
      v.xy /= v.z;
      v.z = 0.;
    } else if(projection == 3.) { // inverted
      v.xy /= curvature + v.z;
      v.z = 1.;
    } else if(projection == 4.) { // jemisphere
      v.xy /= v.z;
      v.z = 1. / v.z;
    } else if(projection == 5.) { // upperhalf
      v.xy /= v.z;
      v.z = 1. / v.z;

      v.xz *= 2. / (1. + v.y);
      v.y = 1.;
      v.zxy = v.yxz;
    }
  }
  return v;
}
/* END HEADER */

void main() {
  /* BEGIN MAIN */
  vColor.rgb = instanceColor.rgb;

  // float w0 = sqrt(1.0 - curvature * (transformed.x * transformed.x + transformed.y * transformed.y + transformed.z * transformed.z));
  // float w = dimensions == 4.0 ? w0 : 1.;
  vec4 mvNormal = vec4(normal, 0.);
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
    if(dimensions == 4.0) {
      mvPosition.xyzw /= sqrt(abs(mvPosition.x * mvPosition.x + mvPosition.y * mvPosition.y + mvPosition.z * mvPosition.z + curvature * mvPosition.w * mvPosition.w));
    } else if(dimensions == 3.0) {
      mvPosition.xyz /= sqrt(abs(mvPosition.x * mvPosition.x + mvPosition.y * mvPosition.y + curvature * mvPosition.z * mvPosition.z));
    }
  }

  mvPosition += .025 * thickness * mvNormal;
  mvPosition = xproject(mvPosition);

  mvPosition = modelViewMatrix * mvPosition;

  gl_Position = projectionMatrix * mvPosition;
  /* END MAIN */
  // gl_Position = projectionMatrix * modelViewMatrix * transformed;
}
