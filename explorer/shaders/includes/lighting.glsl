uniform vec3 eye;
uniform float ambient;
uniform float shininess;

vec4 light(vec3 position, vec3 normal, vec4 color) {
  #ifdef LIGHTING
  vec3 eyeDirection = eye - position;
  eyeDirection = normalize(eyeDirection);
  vec3 lightDirection = eyeDirection;
  float diffuse = abs(dot(normal, lightDirection));
  float specular = 0.;
  #if LIGHTING == 0
  // Lambert
  specular = 0.;

  #elif LIGHTING == 1
  // Phong
  vec3 reflectDirection = reflect(-lightDirection, normal);
  specular = pow(max(dot(eyeDirection, reflectDirection), 0.), shininess * .25);

  #elif LIGHTING == 2
  // Blinn-phong
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  specular = pow(abs(dot(normal, halfVector)), shininess);

  #elif LIGHTING == 3
  // Toon
  specular = 0.;
  diffuse = floor(diffuse * 4.) / 4.;

  #elif LIGHTING == 4
  // Oren-Nayar
  float roughness = 0.5;
  float A = 1. - 0.5 * (roughness / (roughness + 0.33));
  float B = 0.45 * (roughness / (roughness + 0.09));
  float theta_i = acos(dot(normal, lightDirection));
  float theta_r = acos(dot(normal, eyeDirection));
  float alpha = max(theta_i, theta_r);
  float beta = min(theta_i, theta_r);
  diffuse = max(0., dot(lightDirection, normal)) * (A + B * max(0., cos(theta_i - theta_r)) * sin(alpha) * tan(beta));

  #elif LIGHTING == 5
  // Fresnel
  float p = 1. - diffuse;
  color.a = clamp(p * p * p, color.a, 1.);
  diffuse = 1. - ambient;
  #elif LIGHTING == 6
  // Reverse
  float p = 1. - diffuse;
  diffuse = p * p;
  #endif

  return vec4((ambient + diffuse + specular) * color.rgb, color.a);
  #else

  return color;
  #endif
}
