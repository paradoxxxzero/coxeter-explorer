vec4 light(vec4 color, float ambient, float shininess) {
  #ifdef LIGHTING

  #if LIGHTING == 0
  // Lambert
  vec3 eyeDirection = normalize(eye - vPosition);
  vec3 lightDirection = eyeDirection;
  float diffuse = abs(dot(vNormal, lightDirection));
  return vec4((ambient + diffuse) * color.rgb, color.a);

  #elif LIGHTING == 1
  // Phong
  vec3 eyeDirection = normalize(eye - vPosition);
  vec3 lightDirection = eyeDirection;
  vec3 reflectDirection = reflect(-lightDirection, vNormal);
  float specular = pow(abs(dot(eyeDirection, reflectDirection)), shininess * .25);
  float diffuse = abs(dot(vNormal, lightDirection));
  return vec4((ambient + diffuse + specular) * color.rgb, color.a);

  #elif LIGHTING == 2
  // Blinn-phong
  vec3 eyeDirection = normalize(eye - vPosition);
  vec3 lightDirection = eyeDirection;
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  float specular = pow(abs(dot(vNormal, halfVector)), shininess);
  float diffuse = abs(dot(vNormal, lightDirection));
  return vec4((ambient + diffuse + specular) * color.rgb, color.a);
  #endif

  #else
  return color;
  #endif
}
