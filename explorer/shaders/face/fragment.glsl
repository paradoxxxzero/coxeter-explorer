#version 300 es
precision highp float;

#include config

uniform vec3 eye;

in vec3 vNormal;
in vec3 vPosition;
flat in vec3 vColor;

layout(location = 0) out vec4 accumColor;
layout(location = 1) out float accumAlpha;

float weight(float z, float a) {
  return clamp(pow(min(1.0f, a * 10.0f) + 0.01f, 3.0f) * 1e8f * pow(1.0f - z * 0.9f, 3.0f), 1e-2f, 3e3f);
}

#include lighting

void main() {
  vec4 color = light(vec4(vColor, .2f), .5f, 40.f);

  float w = weight(gl_FragCoord.z, color.a);
  accumColor = vec4(color.rgb * color.a * w, color.a);
  accumAlpha = color.a * w;
}
