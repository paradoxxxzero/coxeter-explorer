#version 300 es
precision highp float;

uniform samplerCube cubeMap;
uniform mat3 viewProjectionInverse;

in vec2 uv;
out vec4 fragColor;

void main() {
  vec3 position = vec3(2.0 * uv - 1.0, 1.0);
  position.x *= -1.0;
  vec3 t = normalize(viewProjectionInverse * position);
  fragColor = texture(cubeMap, t);
}
