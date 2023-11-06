#version 300 es
precision highp float;

uniform float curvature;
uniform mat4 viewProjection;
uniform mat4 matrix;

in vec3 vertex;
in vec2 uv;
in vec3 normal;

in vec4 position;
in vec4 target;
in vec3 color;

out vec3 vPosition;
out vec3 vNormal;
flat out vec3 vColor;

const float TAU = 6.28318530717958647692528676655900576f;
const float EPS = .001f;
const vec3 NOISE = vec3(.000003f, -.000002f, .000017f);

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
  vec4 iPosition = matrix * position;
  vec4 iTarget = matrix * target;

  vec4 pos = mix(iPosition, iTarget, uv.y);
  vec4 next = mix(iPosition, iTarget, uv.y + EPS);

  pos = xnormalize(pos);
  next = xnormalize(next);

  vec3 position = xproject(pos);

  vec3 n = xproject(next) + NOISE; // Avoid collinearity
  vec3 k = normalize(position - n); // current segment direction

    // Rodrigues' rotation formula
    // To rotate v around axis k by angle r:
  float r = (1.f - uv.x) * TAU;
  vec3 v = normalize(cross(n, position));
  vNormal = normalize(v * cos(r) + cross(k, v) * sin(r)); // + k * dot(k, v) * (1. - cos(r));

  float inv = max(0.f, 1.f / length(vec4(1.f, 1.f, pos.zw)));
  position = .025f * vNormal * inv + position;
  vPosition = position;

  gl_Position = viewProjection * vec4(position, 1.f);
}
