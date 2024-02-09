#version 300 es
precision highp float;

uniform samplerCube cubeMap;
uniform mat4 viewProjectionInverse;

in vec2 uv;
out vec4 fragColor;

void main() {
  vec4 position = vec4(2.0 * uv - 1.0, 1.0, 1.0);
  vec4 t = viewProjectionInverse * position;
  vec3 dir = normalize(t.xyz / t.w);
  fragColor = texture(cubeMap, dir);
}
