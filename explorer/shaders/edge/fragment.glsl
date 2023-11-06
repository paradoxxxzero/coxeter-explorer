#version 300 es
precision highp float;

#include config

uniform vec3 eye;

in vec3 vNormal;
in vec3 vPosition;
flat in vec3 vColor;
out vec4 outColor;

void main() {
  vec4 baseColor = vec4(vColor, 1.f);
  #ifdef LIGHTING
  vec3 eyeDirection = normalize(eye - vPosition);
  vec3 reflectionDirection = reflect(-eyeDirection, vNormal);
  float diffuse = max(dot(eyeDirection, vNormal), 0.0f);
  float ambient = 0.2f;
  float specular = pow(max(dot(reflectionDirection, eyeDirection), 0.0f), 20.0f);
  vec4 color = vec4((ambient + diffuse + specular) * baseColor.rgb, baseColor.a);
  #else
  vec4 color = baseColor;
  #endif
  outColor = color;
}
