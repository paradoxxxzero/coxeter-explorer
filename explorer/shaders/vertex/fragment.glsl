#version 300 es
precision highp float;

#include config

uniform vec3 eye;

in vec3 vNormal;
in vec3 vPosition;
flat in vec3 vColor;
out vec4 outColor;

#include lighting

void main() {
  outColor = vec4(1.f, 0.f, 1.f, 1.f);//light(vec4(vColor, 1.f), .2f, 20.f);
}
