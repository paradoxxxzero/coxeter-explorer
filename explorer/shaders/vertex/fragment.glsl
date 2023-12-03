#version 300 es
precision highp float;

#include config

#ifdef OIT
layout(location = 0) out vec4 accumColor;
layout(location = 1) out float accumAlpha;

float weight(float z, float a) {
  float b = min(1.0f, a * 10.0f) + 0.01f;
  float c = 1.0f - z * 0.9f;
  return clamp(b * b * b * 1e8f * c * c * c, 1e-2f, 3e3f);
}

#else
out vec4 outColor;
#endif

#ifdef LIGHTING
#ifndef GOURAUD
#include lighting
in vec3 vNormal;
in vec3 vPosition;

flat
#endif
#endif 
in vec4 vColor;

void main() {

  #if !defined(LIGHTING) || defined(GOURAUD)
  vec4 color = vColor;
  #else
  vec4 color = light(vPosition, vNormal, vColor);
  #endif

  #ifdef OIT
  float w = weight(gl_FragCoord.z, color.a);
  accumColor = vec4(color.rgb * color.a * w, color.a);
  accumAlpha = color.a * w;
  #else
  outColor = color;
  #endif
}
