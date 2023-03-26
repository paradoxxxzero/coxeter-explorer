/**/
/* BEGIN INCLUDE */
float xdot(in vec4 v) {
  #ifdef D_4
  return dot(v.xyz, v.xyz) + curvature * v.w * v.w;
  #else 
  return dot(v.xy, v.xy) + curvature * v.z * v.z;
  #endif
}

vec4 xnormalize(in vec4 v) {
  #ifdef D_4
  return v.xyzw / sqrt(abs(xdot(v)));
  #else 
  return vec4(v.xyz / sqrt(abs(xdot(v))), 1.);
  #endif
}

vec4 xproject(in vec4 v) {
  #ifdef D_4
  #ifdef P_STEREOGRAPHIC
  return vec4(v.xyz / (-curvature + v.w), 1.0);
  #endif
  #ifdef P_ORTHOGRAPHIC
  return vec4(v.xyz, 1.0);
  #endif
  #ifdef P_KLEIN
  return vec4(v.xyz / v.w, 1.0);
  #endif
  #ifdef P_INVERTED
  return vec4(v.xyz / (curvature + v.w), 1.0);
  #endif
  #ifdef P_JEMISPHERE
  return vec4(v.xyz / v.w, 1.0 / v.w);
  #endif
  #ifdef P_UPPERHALF
  v.xyz /= v.w;
  v.w = 1. / v.w;

  v.xzw *= 2. / (1. + v.y);
  v.y = 1.;
  v.wxyz = v.yxzw;
  v.z *= -1.;
  return v;
  #endif
  #else
  #ifdef P_STEREOGRAPHIC
  // Let the camera do the projection
  // v.xy /= -curvature + v.z;
  // v.z = 0.;
  return v;
  #endif
  #ifdef P_ORTHOGRAPHIC
  return vec4(v.xy, 0., 1.);
  #endif
  #ifdef P_KLEIN
  return vec4(v.xy / v.z, 0., 1.);
  #endif
  #ifdef P_INVERTED
  return vec4(v.xy / (curvature + v.z), 1., 1.);
  #endif
  #ifdef P_JEMISPHERE
  return vec4(v.xy / v.z, 1. / v.z, 1.);
  #endif
  #ifdef P_UPPERHALF
  v.xy /= v.z;
  v.z = 1. / v.z;

  v.xz *= 2. / (1. + v.y);
  v.y = 1.;
  v.zxy = v.yxz;
  return v;
  #endif
  #endif
  return v;
}
/* END INCLUDE */
