#version 300 es
precision highp float;

uniform sampler2D hdri;
uniform int part;

in vec2 uv;
out vec4 fragColor;
const float PI = 3.14159265359;

vec3 uvToXYZ(int face, vec2 uv) {
  if(face == 0)
    return vec3(1., uv.y, -uv.x);

  else if(face == 1)
    return vec3(-1., uv.y, uv.x);

  else if(face == 2)
    return vec3(+uv.x, -1., +uv.y);

  else if(face == 3)
    return vec3(+uv.x, 1., -uv.y);

  else if(face == 4)
    return vec3(+uv.x, uv.y, 1.);

  else //if(face == 5)
  {
    return vec3(-uv.x, +uv.y, -1.);
  }
}
vec2 dirToUV(vec3 dir) {
  return vec2(0.5 + 0.5 * atan(dir.z, dir.x) / PI, 1. - acos(dir.y) / PI);
}

void main() {
  vec3 scan = uvToXYZ(part, uv * 2. - 1.);
  vec3 direction = normalize(scan);
  vec2 src = dirToUV(direction);

  fragColor = vec4(texture(hdri, src).rgb, 1.);
}
