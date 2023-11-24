vec4 light(vec4 color, float ambient, float shininess) {
  #ifdef LIGHTING
  vec3 eyeDirection = eye - vPosition;
  float distance = length(eyeDirection);
  float attenuation = 1. / (1. + distance * distance * .005);
  eyeDirection = normalize(eyeDirection);
  vec3 lightDirection = eyeDirection;
  float diffuse = abs(dot(vNormal, lightDirection));
  float specular = 0.;
  #if LIGHTING == 0
  // Lambert
  specular = 0.;

  #elif LIGHTING == 1
  // Phong
  vec3 reflectDirection = reflect(-lightDirection, vNormal);
  specular = pow(max(dot(eyeDirection, reflectDirection), 0.), shininess * .25);

  #elif LIGHTING == 2
  // Blinn-phong
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  specular = pow(abs(dot(vNormal, halfVector)), shininess);

  #elif LIGHTING == 3
  // Toon
  specular = 0.;
  diffuse = floor(diffuse * 4.) / 4.;

  #elif LIGHTING == 4
  // Oren-Nayar
  float roughness = 0.5;
  float A = 1. - 0.5 * (roughness / (roughness + 0.33));
  float B = 0.45 * (roughness / (roughness + 0.09));
  float theta_i = acos(dot(vNormal, lightDirection));
  float theta_r = acos(dot(vNormal, eyeDirection));
  float alpha = max(theta_i, theta_r);
  float beta = min(theta_i, theta_r);
  diffuse = max(0., dot(lightDirection, vNormal)) * (A + B * max(0., cos(theta_i - theta_r)) * sin(alpha) * tan(beta));
  specular = 0.;

  #endif

  return vec4((ambient + diffuse + specular) * attenuation * color.rgb, color.a);
  #else
  return color;
  #endif
}
