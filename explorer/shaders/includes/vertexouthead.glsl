#ifdef TEXTURE
uniform sampler2D displacementMap;
#endif

#ifdef SHADING
#ifdef GOURAUD
#include lighting
#endif

out vec3 vPosition;
out vec3 vNormal;
out vec2 vUv;
#endif

#if defined(GOURAUD)
out vec4 vColor;
#else
flat out vec3 vColor;
#endif

#ifdef SHADING
  #if SHADING == 5
flat out float vId;
  #elif SHADING == 6
flat out float vId;
  #endif
#endif
