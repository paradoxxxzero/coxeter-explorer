/**/
/* BEGIN INCLUDE */
mat4 findRotationMatrix(in vec4 u, in vec4 v) {
  vec4 w = u + v;
  if(length(w) < 0.0001) {
    return mat4(-1.);
  }

  return 2. * outerProduct(w, w) / dot(w, w) - mat4(1.);
}
mat3 findRotationMatrix(in vec3 u, in vec3 v) {
  vec3 w = u + v;
  if(length(w) < 0.0001) {
    return mat3(-1.);
  }

  return 2. * outerProduct(w, w) / dot(w, w) - mat3(1.);
}

float invert(in float v) {
  float sign_v = sign(v);
  float sign_v_sq = sign_v * sign_v;
  return sign_v_sq / (v + sign_v_sq - 1.0);
}

float xdot(in vec4 v) {
  #ifdef D_4
  return dot(v.xyz, v.xyz) + curvature * v.w * v.w;
  #else 
  return dot(v.xy, v.xy) + curvature * v.z * v.z;
  #endif
}

vec4 xnormalize(in vec4 v) {
  if(curvature == 0.0) {
    return v;
  }
  #ifdef D_4
  return v.xyzw * invert(sqrt(abs(xdot(v))));
  #else 
  return vec4(v.xyz * invert(sqrt(abs(xdot(v)))), 1.);
  #endif
}

vec3 xproject(in vec4 v) {
  #ifdef D_4
  #ifdef P_STEREOGRAPHIC
  return v.xyz * invert(v.w - curvature);
  #endif
  #ifdef P_ORTHOGRAPHIC
  return v.xyz;
  #endif
  #ifdef P_KLEIN
  return v.xyz * invert(v.w);
  #endif
  #ifdef P_INVERTED
  return v.xyz * invert(v.w + curvature);
  #endif
  #ifdef P_JEMISPHERE
  return v.xyz;
  #endif
  #ifdef P_UPPERHALF
  v.xyz *= invert(v.w);
  v.w = invert(v.w);

  v.xzw *= 2. * invert(1. + v.y);
  v.w *= -1.;
  return v.xzw;
  #endif
  #else
  #ifdef P_STEREOGRAPHIC
  // Let the camera do the projection
  // return vec3(v.xy / (v.z - curvature), 0.);
  return v.xyz;
  #endif
  #ifdef P_ORTHOGRAPHIC
  return vec3(v.xy, 0.);
  #endif
  #ifdef P_KLEIN
  return vec3(v.xy * invert(v.z), 0.);
  #endif
  #ifdef P_INVERTED
  return vec3(v.xy * invert(curvature + v.z), 1.);
  #endif
  #ifdef P_JEMISPHERE
  return vec3(v.xy * invert(v.z), invert(v.z));
  #endif
  #ifdef P_UPPERHALF
  v.xy *= invert(v.z);
  v.z = invert(v.z);

  v.xz *= 2. * invert(1. + v.y);
  v.y = 1.;
  return v.xzy;
  #endif
  #endif
  return v.xyz;
}

vec3 xprojectnormal(in vec4 n, in vec4 p, in vec3 pp) {
  #ifdef D_4

  vec4 np = p + n;
  vec3 npp = xproject(np);

  return npp - pp;
  #else
  return n.xyz;
  #endif
}
// vec4 xprojectnormal(in vec4 p, in vec4 n) {
//   #ifdef D_4
//   vec4 v = xproject(n);
//   #ifdef P_STEREOGRAPHIC
//   return vec4(v.xyz * (p.w - curvature) + p.xyz, 1.);
//   #endif
//   #ifdef P_ORTHOGRAPHIC
//   return vec4(v.xyz + p.xyz, 1.);
//   #endif
//   #ifdef P_KLEIN
//   return vec4(v.xyz * (p.w) + p.xyz, 1.);
//   #endif
//   #ifdef P_INVERTED
//   return vec4(n.xyz * (p.w + curvature) + p.xyz, 1.);
//   #endif
//   #ifdef P_JEMISPHERE
//   return vec4(v.xyz, 1.);
//   #endif
//   #ifdef P_UPPERHALF
//   v.xyz /= v.w;
//   v.w = 1. / v.w;

//   v.xzw *= 2. / (1. + v.y);
//   v.y = 1.;
//   v.wxyz = v.yxzw;
//   v.z *= -1.;
//   return v;
//   #endif
//   #else
//   return n;
//   #endif
// }

// vec4 cross4(in vec4 v1, in vec4 v2, in vec4 v3) {
//   return vec4(v2.y * v3.z * v1.w -
//     v3.y * v2.z * v1.w -
//     v1.y * v3.z * v2.w +
//     v3.y * v1.z * v2.w +
//     v3.w * v1.y * v2.z -
//     v3.w * v2.y * v1.z, -v2.x * v3.z * v1.w +
//     v3.x * v2.z * v1.w +
//     v1.x * v3.z * v2.w -
//     v3.x * v1.z * v2.w -
//     v3.w * v1.x * v2.z +
//     v3.w * v2.x * v1.z, v2.x * v3.y * v1.w -
//     v3.x * v2.y * v1.w -
//     v1.x * v3.y * v2.w +
//     v3.x * v1.y * v2.w +
//     v3.w * v1.x * v2.y -
//     v3.w * v2.x * v1.y, -v1.x * v2.y * v3.z +
//     v1.x * v3.y * v2.z +
//     v2.x * v1.y * v3.z -
//     v2.x * v3.y * v1.z -
//     v3.x * v1.y * v2.z +
//     v3.x * v2.y * v1.z);
// }
/* END INCLUDE */
