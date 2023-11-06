#version 300 es
precision highp float;

uniform float curvature;
uniform mat4 viewProjection;
uniform mat4 matrix;

in vec3 vertex;
in vec2 uv;
in vec3 normal;

in vec4 position;
in vec3 color;

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

vec3 xproject(vec4 pos) {
  return pos.xyz / (pos.w + 1.f);
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
  vNormal = normal;
  vec4 pos = matrix * position;
  pos = xnormalize(pos);
  vec3 position = xproject(pos);

  float inv = max(.01f, 1.f / length(vec4(1.f, 1.f, pos.zw)));
  position = .1f * vNormal * inv + position;

  vPosition = position;
  gl_Position = viewProjection * vec4(position, 1.f);
}
