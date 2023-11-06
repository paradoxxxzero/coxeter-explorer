#version 300 es
precision highp float;

uniform float curvature;
uniform mat4 viewProjection;
uniform mat4 matrix;

in vec3 vertex;
in vec2 uv;
in vec3 normal;

in vec4 position;
in vec4 center;
in vec4 target;
in vec3 color;

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;
const float EPS = .001f;

vec3 xproject(vec4 pos) {
  return pos.xyz / (pos.w + 1.f);
}
vec4 trix(in vec4 c, in vec4 p, in vec4 t, in vec2 a) {
  return a.x * p + a.y * t + c * (1.f - a.x - a.y);
}
float xdot(in vec4 v) {
  return dot(v.xyz, v.xyz) + curvature * v.w * v.w;
}
vec4 xnormalize(in vec4 v) {
  if(curvature == 0.0f) {
    return v;
  }
  float n = sqrt(curvature * xdot(v));
  return v / n;
}

void main() {
  vColor = color;
  vec4 iPosition = matrix * position;
  vec4 iTarget = matrix * target;
  vec4 iCentroid = matrix * center;

  vec4 pos = trix(iPosition, iCentroid, iTarget, uv);
  vec4 next = trix(iPosition, iCentroid, iTarget, uv + vec2(EPS, 0.f));
  vec4 other = trix(iPosition, iCentroid, iTarget, uv + vec2(0.f, EPS));

  pos = xnormalize(pos);
  next = xnormalize(next);
  other = xnormalize(other);

  vec3 position = xproject(pos);
  vec3 nn = xproject(next) - position;
  vec3 oo = xproject(other) - position;

  vPosition = position;
  vNormal = normalize(cross(nn, oo));
  gl_Position = viewProjection * vec4(position, 1.f);
}
