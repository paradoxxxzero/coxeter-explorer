bool nan(in vec2 v) {
  return isnan(v.x) || isnan(v.y);
}

bool nan(in vec3 v) {
  return nan(v.xy) || isnan(v.z);
}

bool nan(in vec4 v) {
  return nan(v.xyz) || isnan(v.w);
}

#if DIMENSIONS >= 5
bool nan(in vec5 v) {
  return nan(v.v) || isnan(v.u);
}
#endif

#if DIMENSIONS >= 6
bool nan(in vec6 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 7
bool nan(in vec7 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 8
bool nan(in vec8 v) {
  return nan(v.v) || nan(v.u);
}
#endif

#if DIMENSIONS >= 9
bool nan(in vec9 v) {
  return nan(v.v) || nan(v.u) || isnan(v.t);
}
#endif

float trix(in float c, in float p, in float t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec2 trix(in vec2 c, in vec2 p, in vec2 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec3 trix(in vec3 c, in vec3 p, in vec3 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}
vec4 trix(in vec4 c, in vec4 p, in vec4 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1. - a.x - a.y);
}

#if DIMENSIONS == 5
vec5 mix(in vec5 a, in vec5 b, in float t) {
  return vec5(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec5 trix(in vec5 c, in vec5 p, in vec5 t, in vec2 a) {
  return vec5(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 6
vec6 mix(in vec6 a, in vec6 b, in float t) {
  return vec6(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec6 trix(in vec6 c, in vec6 p, in vec6 t, in vec2 a) {
  return vec6(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 7
vec7 mix(in vec7 a, in vec7 b, in float t) {
  return vec7(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec7 trix(in vec7 c, in vec7 p, in vec7 t, in vec2 a) {
  return vec7(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 8
vec8 mix(in vec8 a, in vec8 b, in float t) {
  return vec8(mix(a.v, b.v, t), mix(a.u, b.u, t));
}
vec8 trix(in vec8 c, in vec8 p, in vec8 t, in vec2 a) {
  return vec8(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a));
}
#elif DIMENSIONS == 9
vec9 mix(in vec9 a, in vec9 b, in float t) {
  return vec9(mix(a.v, b.v, t), mix(a.u, b.u, t), mix(a.t, b.t, t));
}
vec9 trix(in vec9 c, in vec9 p, in vec9 t, in vec2 a) {
  return vec9(trix(c.v, p.v, t.v, a), trix(c.u, p.u, t.u, a), trix(c.t, p.t, t.t, a));
}
#endif

float len(in vec2 v) {
  return length(v);
}

float len(in vec3 v) {
  return length(v);
}

float len(in vec4 v) {
  return length(v);
}

#if DIMENSIONS == 5
float len(in vec5 v) {
  return sqrt(dot(v.v, v.v) + v.u * v.u);
}
#elif DIMENSIONS == 6
float len(in vec6 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u));
}
#elif DIMENSIONS == 7
float len(in vec7 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u));
}
#elif DIMENSIONS == 8
float len(in vec8 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u));
}
#elif DIMENSIONS == 9
float len(in vec9 v) {
  return sqrt(dot(v.v, v.v) + dot(v.u, v.u) + v.t * v.t);
}
#endif

float xdot(in vec2 v) {
  return v.x * v.x + curvature * v.y * v.y;
}

float xdot(in vec3 v) {
  return dot(v.xy, v.xy) + curvature * v.z * v.z;
}

float xdot(in vec4 v) {
  return dot(v.xyz, v.xyz) + curvature * v.w * v.w;
}

#if DIMENSIONS == 5
float xdot(in vec5 v) {
  return dot(v.v, v.v) + curvature * v.u * v.u;
}
#elif DIMENSIONS == 6
float xdot(in vec6 v) {
  return dot(v.v, v.v) + v.u.x * v.u.x + curvature * v.u.y * v.u.y;
}
#elif DIMENSIONS == 7
float xdot(in vec7 v) {
  return dot(v.v, v.v) + dot(v.u.xy, v.u.xy) + curvature * v.u.z * v.u.z;
}
#elif DIMENSIONS == 8
float xdot(in vec8 v) {
  return dot(v.v, v.v) + dot(v.u.xyz, v.u.xyz) + curvature * v.u.w * v.u.w;
}
#elif DIMENSIONS == 9
float xdot(in vec9 v) {
  return dot(v.v, v.v) + dot(v.u, v.u) + curvature * v.t * v.t;
}
#endif

#if DIMENSIONS == 5
float ndot(in vec5 v, in vec5 w) {
  return dot(v.v, w.v) + v.u * w.u;
}
#elif DIMENSIONS == 6
float ndot(in vec6 v, in vec6 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
#elif DIMENSIONS == 7
float ndot(in vec7 v, in vec7 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
#elif DIMENSIONS == 8
float ndot(in vec8 v, in vec8 w) {
  return dot(v.v, w.v) + dot(v.u, w.u);
}
#elif DIMENSIONS == 9
float ndot(in vec9 v, in vec9 w) {
  return dot(v.v, w.v) + dot(v.u, w.u) + v.t * w.t;
}
#endif

vec2 xnormalize(in vec2 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec3 xnormalize(in vec3 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

vec4 xnormalize(in vec4 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.w *= .999999;
  // float d = curvature * xdot(v);
  // if(d < 0.) {
  //   v.w = 0.;
  //   v.xyz /= sqrt(dot(v.xyz, v.xyz));
  //   return v;
  // }
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

#if DIMENSIONS == 5
vec5 xnormalize(in vec5 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec5(v.v / n, v.u / n);
}
#elif DIMENSIONS == 6
vec6 xnormalize(in vec6 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u.x *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec6(v.v / n, v.u / n);
}
#elif DIMENSIONS == 7
vec7 xnormalize(in vec7 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u.y *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec7(v.v / n, v.u / n);
}
#elif DIMENSIONS == 8
vec8 xnormalize(in vec8 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.u.z *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec8(v.v / n, v.u / n);
}
#elif DIMENSIONS == 9
vec9 xnormalize(in vec9 v) {
  if(curvature == 0.0) {
    return v;
  }
  // Unalias?
  // v.t *= .999999;
  float n = sqrt(curvature * xdot(v));
  return vec9(v.v / n, v.u / n, v.t / n);
}
#endif

vec3 xproject(in vec2 v) {
  return vec3(v, 0.);
}

vec3 xproject(in vec3 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  // Let the camera do the projection
  // return vec3(v.xy / (v.z - curvature), 0.);
  return v.xyz;
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return vec3(v.xy, 0.);
  #elif PROJECTION == 2 // KLEIN
  return vec3(v.xy / v.z, 0.);
  #elif PROJECTION == 3 // INVERTED
  return vec3(v.xy / (v.z - 1.), 1.);
  #elif PROJECTION == 4 // JEMISPHERE
  return vec3(v.xy / v.z, 1. / v.z);
  #elif PROJECTION == 5 // UPPERHALF
  v.xy /= v.z;
  v.z = 1. / v.z;

  v.yz *= 2. / (1. + v.x);
  v.x = 1.;
  v.z -= 2.;
  return v.zyx;
  #endif

  return v.xyz;
}

#if DIMENSIONS >= 4
vec3 xproject(in vec4 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  return v.xyz / (v.w * fov4 + 1.);
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return v.xyz;
  #elif PROJECTION == 2 // KLEIN
  return v.xyz / (v.w * fov4);
  #elif PROJECTION == 3 // INVERTED
  return v.xyz / (v.w * fov4 - 1.);
  #elif PROJECTION == 4 // JEMISPHERE
  return vec3(v.xyz / v.w) / (v.w * fov4 + 1.);
  #elif PROJECTION == 5 // UPPERHALF
  v.xyz /= v.w;
  v.w = 1. / v.w;

  v.yzw *= 2. / (1. + v.x);
  v.w -= 1.;
  return v.wyx;
  #endif
}
#endif

#if DIMENSIONS >= 5
vec3 xproject(in vec5 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  return xproject(v.v / (v.u * fov5 + 1.));
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return xproject(v.v);
  #elif PROJECTION == 2 // KLEIN
  return xproject(v.v / (v.u * fov5));
  #elif PROJECTION == 3 // INVERTED
  return xproject(v.v / (v.u * fov5 - 1.));
  #elif PROJECTION == 4 // JEMISPHERE
  return xproject(v.v);
  #elif PROJECTION == 5 // UPPERHALF
  return xproject(v.v);
  #endif
}
#endif

#if DIMENSIONS >= 6
vec3 xproject(in vec6 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  float nr = v.u.y * fov6 + 1.;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return xproject(vec5(v.v, v.u.x));
  #elif PROJECTION == 2 // KLEIN
  float nr = v.u.y * fov6;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 3 // INVERTED
  float nr = v.u.y * fov6 - 1.;
  return xproject(vec5(v.v / nr, v.u.x / nr));
  #elif PROJECTION == 4 // JEMISPHERE
  return xproject(vec5(v.v, v.u.x));
  #elif PROJECTION == 5 // UPPERHALF
  return xproject(vec5(v.v, v.u.x));
  #endif
}
#endif

#if DIMENSIONS >= 7
vec3 xproject(in vec7 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  float nr = v.u.z * fov7 + 1.;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return xproject(vec6(v.v, v.u.xy));
  #elif PROJECTION == 2 // KLEIN
  float nr = v.u.z * fov7;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 3 // INVERTED
  float nr = v.u.z * fov7 - 1.;
  return xproject(vec6(v.v / nr, v.u.xy / nr));
  #elif PROJECTION == 4 // JEMISPHERE
  return xproject(vec6(v.v, v.u.xy));
  #elif PROJECTION == 5 // UPPERHALF
  return xproject(vec6(v.v, v.u.xy));
  #endif
}
#endif

#if DIMENSIONS >= 8
vec3 xproject(in vec8 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  float nr = v.u.w * fov8 + 1.;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return xproject(vec7(v.v, v.u.xyz));
  #elif PROJECTION == 2 // KLEIN
  float nr = v.u.w * fov8;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 3 // INVERTED
  float nr = v.u.w * fov8 - 1.;
  return xproject(vec7(v.v / nr, v.u.xyz / nr));
  #elif PROJECTION == 4 // JEMISPHERE
  return xproject(vec7(v.v, v.u.xyz));
  #elif PROJECTION == 5 // UPPERHALF
  return xproject(vec7(v.v, v.u.xyz));
  #endif
}
#endif

#if DIMENSIONS >= 9
vec3 xproject(in vec9 v) {
  #if PROJECTION == 0 // STEREOGRAPHIC
  float nr = v.t * fov9 + 1.;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 1 // ORTHOGRAPHIC
  return xproject(vec8(v.v, v.u));
  #elif PROJECTION == 2 // KLEIN
  float nr = v.t * fov9;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 3 // INVERTED
  float nr = v.t * fov9 - 1.;
  return xproject(vec8(v.v / nr, v.u / nr));
  #elif PROJECTION == 4 // JEMISPHERE
  return xproject(vec8(v.v, v.u));
  #elif PROJECTION == 5 // UPPERHALF
  return xproject(vec8(v.v, v.u));
  #endif
}
#endif

#if DIMENSIONS == 5
vec5 fromMat(in mat3 m) {
  return vec5(vec4(m[0], m[1][0]), m[1][1]);
}
#elif DIMENSIONS == 6
vec6 fromMat(in mat3 m) {
  return vec6(vec4(m[0], m[1][0]), vec2(m[1][1], m[1][2]));
}
#elif DIMENSIONS == 7
vec7 fromMat(in mat3 m) {
  return vec7(vec4(m[0], m[1][0]), vec3(m[1][1], m[1][2], m[2][0]));
}
#elif DIMENSIONS == 8
vec8 fromMat(in mat3 m) {
  return vec8(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]));
}
#elif DIMENSIONS == 9
vec9 fromMat(in mat3 m) {
  return vec9(vec4(m[0], m[1][0]), vec4(m[1][1], m[1][2], m[2][0], m[2][1]), m[2][2]);
}
#endif
#if DIMENSIONS == 5
vec5 multiplyMatrix(mat5 m, vec5 v) {
  return vec5(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), ndot(m.c5, v));
}
#elif DIMENSIONS == 6
vec6 multiplyMatrix(mat6 m, vec6 v) {
  return vec6(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec2(ndot(m.c5, v), ndot(m.c6, v)));
}
#elif DIMENSIONS == 7
vec7 multiplyMatrix(mat7 m, vec7 v) {
  return vec7(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec3(ndot(m.c5, v), ndot(m.c6, v), ndot(m.c7, v)));
}
#elif DIMENSIONS == 8
vec8 multiplyMatrix(mat8 m, vec8 v) {
  return vec8(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec4(ndot(m.c5, v), ndot(m.c6, v), ndot(m.c7, v), ndot(m.c8, v)));
}
#elif DIMENSIONS == 9
vec9 multiplyMatrix(mat9 m, vec9 v) {
  return vec9(vec4(ndot(m.c1, v), ndot(m.c2, v), ndot(m.c3, v), ndot(m.c4, v)), vec4(ndot(m.c5, v), ndot(m.c6, v), ndot(m.c7, v), ndot(m.c8, v)), ndot(m.c9, v));
}
#endif
// mat4 findRotationMatrix(in vec4 u, in vec4 v) {
//   vec4 w = u + v;
//   if(length(w) < 0.0001) {
//     return mat4(-1.);
//   }

//   return 2. * outerProduct(w, w) / dot(w, w) - mat4(1.);
// }
// mat3 findRotationMatrix(in vec3 u, in vec3 v) {
//   vec3 w = u + v;
//   if(length(w) < 0.0001) {
//     return mat3(-1.);
//   }

//   return 2. * outerProduct(w, w) / dot(w, w) - mat3(1.);
// }

// vec3 xprojectnormal(in vec4 n, in vec4 p, in vec3 pp) {
//   #if DIMENSIONS == 4

//   vec4 np = p + n;
//   vec3 npp = xproject(np);

//   return npp - pp;
//   #else
//   return n.xyz;
//   #endif
// }

// vec4 xprojectnormal(in vec4 p, in vec4 n) {
//   #if DIMENSIONS == 4
//   vec4 v = xproject(n);
//   #if PROJECTION == 'STEREOGRAPHIC'
//   return vec4(v.xyz * (p.w - curvature) + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'ORTHOGRAPHIC'
//   return vec4(v.xyz + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'KLEIN'
//   return vec4(v.xyz * (p.w) + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'INVERTED'
//   return vec4(n.xyz * (p.w + curvature) + p.xyz, 1.);
//   #endif
//   #if PROJECTION == 'JEMISPHERE'
//   return vec4(v.xyz, 1.);
//   #endif
//   #if PROJECTION == 'UPPERHALF'
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

vec3 inflate(in vec3 point, in vecN pos, in vec3 norm, in float size, in float min) {
  // Removing 3d length in perspective computation
  #if DIMENSIONS < 5
  pos.xy = vec2(1.);
  #if DIMENSIONS >= 3 && PROJECTION == 0
  pos.z = 1.;
  #endif
  #else
  pos.v.xyz = vec3(1.);
  #endif

  float inv = max(min, 1. / len(pos));

  return size * SCALING * norm * inv + point;
}
