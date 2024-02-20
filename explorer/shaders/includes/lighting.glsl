#ifdef ENVMAP
uniform samplerCube envMap;
#endif

#ifdef TEXTURE
uniform sampler2D albedoMap;
uniform sampler2D normalMap;
uniform sampler2D armMap;
#endif

const float ambient = AMBIENT;
const float shininess = SHININESS;
const float opacity = OPACITY;

vec3 rgbToHsl(vec3 c) {
  vec4 K = vec4(0., -1. / 3., 2. / 3., -1.);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6. * d + e)), d / (q.x + e), (q.x + q.y) * .5);
}

vec3 hslToRgb(vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6. + vec3(0., 4., 2.), 6.) - 3.) - 1., 0., 1.);
  return c.z + c.y * (rgb - .5) * (1. - abs(2. * c.z - 1.));
}

vec3 hueRotate(vec3 color, float hue) {
  vec3 hsl = rgbToHsl(color);
  hsl.x += hue;
  return hslToRgb(hsl);
}

#ifdef TEXTURE
mat3 getTangentFrame(vec3 eye_pos, vec3 normal, vec2 uv) {
	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180
  vec3 q0 = dFdx(eye_pos);
  vec3 q1 = dFdy(eye_pos);
  vec2 st0 = dFdx(uv);
  vec2 st1 = dFdy(uv);

  vec3 N = normal;

  vec3 q1perp = cross(q1, N);
  vec3 q0perp = cross(N, q0);

  vec3 T = q1perp * st0.x + q0perp * st1.x;
  vec3 B = q1perp * st0.y + q0perp * st1.y;

  float det = max(dot(T, T), dot(B, B));
  float scale = (det == 0.0) ? 0.0 : inversesqrt(det);

  return mat3(T * scale, B * scale, N);
}
#endif

#ifdef DIFFUSE
float getDiffuse(in vec3 normal, in vec2 uv, in vec3 lightDirection, in vec3 eyeDirection) {
  // Diffuse
  #if DIFFUSE == 0
  // Lambert
  return abs(dot(normal, lightDirection));
  #elif DIFFUSE == 1
  // Oren-Nayar

  const float albedo = 1.;

  float LdotV = abs(dot(lightDirection, eyeDirection));
  float NdotL = abs(dot(lightDirection, normal));
  float NdotV = abs(dot(normal, eyeDirection));

  float s = LdotV - NdotL * NdotV;
  float t = mix(1.0, max(NdotL, NdotV), step(0.0, s));
    #ifdef TEXTURE
  float roughness = texture(armMap, uv).g;
    #else
  float roughness = ROUGHNESS;
    #endif
  float sigma2 = roughness * roughness;
  float A = 1.0 + sigma2 * (albedo / (sigma2 + 0.13) + 0.5 / (sigma2 + 0.33));
  float B = 0.45 * sigma2 / (sigma2 + 0.09);

  return albedo * max(0.0, NdotL) * (A + B * s / t) / 3.1415926535897932384626433832795;
  #elif DIFFUSE == 2
  // Minnaert
  float diffuse = abs(dot(normal, lightDirection));
  return diffuse * diffuse;
  #elif DIFFUSE == 3
  // Cel
  float diffuse = abs(dot(normal, lightDirection));
  return floor(diffuse * 4.) / 4.;
  #elif DIFFUSE == 4
  // Reverse
  float diffuse = abs(dot(normal, lightDirection));
  float p = 1. - diffuse;
  return p * p;
  #endif
}
#endif

#ifdef SPECULAR
float getSpecular(in vec3 normal, in vec2 uv, in vec3 lightDirection, in vec3 eyeDirection) {
  #if SPECULAR == 0
  // Phong
  vec3 reflectDirection = reflect(-lightDirection, normal);
  return pow(max(dot(eyeDirection, reflectDirection), 0.), shininess * .25);

  #elif SPECULAR == 1
  // Blinn-phong
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  return pow(abs(dot(normal, halfVector)), shininess);

  #elif SPECULAR == 2
  // Cook-Torrance
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  const float fresnel = 1.;

  float NdotL = dot(normal, lightDirection);
  float NdotV = dot(normal, eyeDirection);
  float NdotH = dot(normal, halfVector);
  float VdotH = dot(eyeDirection, halfVector);

  #ifdef TEXTURE
  float roughness = texture(armMap, uv).g;
  #else
  float roughness = ROUGHNESS;
  #endif
  float sigma2 = roughness * roughness;

  float cos2alpha = NdotH * NdotH;
  float D = exp((cos2alpha - 1.) / (cos2alpha * sigma2)) / (PI * sigma2 * cos2alpha * cos2alpha);

  float F = fresnel + (1. - fresnel) * pow(1. - NdotV, 5.);
  float G = min(1., min(2. * NdotH * NdotV / VdotH, 2. * NdotH * NdotL / VdotH));
  return D * F * G / (4. * NdotV * NdotL);

  #elif SPECULAR == 3
  // Ward anisotropic
  // TODO

  #endif
}
#endif

vec4 light(vec3 position, vec3 normal, vec3 rgb, vec2 uv) {

  #if SHADING == 0 // Input colors
  vec3 albedo = rgb;
  #elif SHADING == 1 // Normal colors
  vec3 albedo = normal * .5 + .5;
  #elif SHADING == 2 // Position colors
  vec3 albedo = position * .5 + .5;
  #elif SHADING == 3 // Uv colors
  vec3 albedo = vec3(uv.xy, 0.);
  #else
  vec3 albedo = rgb;
  #endif

  vec3 eyeDirection = eye - position;
  eyeDirection = normalize(eyeDirection);

  #ifdef REVERSED
  if(dot(eyeDirection, normal) < 0.) {
    albedo = 1. - albedo;
  }
  #endif

  #ifdef TEXTURE
  vec3 texAlbedo = texture(albedoMap, uv).rgb;

  // Get albedo hue
    #ifdef TINT
  vec3 hsl = rgbToHsl(albedo);
  // Apply albedo hue to texture albedo
  vec3 texHsl = rgbToHsl(texAlbedo);
  texHsl.r = hsl.r;
  albedo = hslToRgb(texHsl);
    #else
  albedo = texAlbedo;
    #endif

  mat3 tbn = getTangentFrame(eyeDirection, normal, uv);
  vec3 map = texture(normalMap, uv).xyz * 2. - 1.;
  normal = normalize(tbn * map);

  #endif

  vec3 lightDirection = eyeDirection;

  // ADS Ambient, Diffuse, Specular
  float diffuse = 1.;
  #ifdef DIFFUSE
  diffuse = getDiffuse(normal, uv, lightDirection, eyeDirection);
  #endif

  float specular = 0.;
  #ifdef SPECULAR
  specular = getSpecular(normal, uv, lightDirection, eyeDirection);
  #endif

  // TODO
  // #ifdef DIFFUSE
  //   #if DIFFUSE == 4
  // albedo.a += specular;
  //   #endif
  // #endif

  // TONE MAPPING
  #ifdef TONE
  albedo = pow(albedo, vec3(1. / 2.2));
  #endif

  #ifdef TEXTURE
  float metalness = texture(armMap, uv).b;
  #else
  float metalness = METALNESS;
  #endif

  #ifdef FRESNEL
  // Fresnel
  vec3 halfVector = normalize(lightDirection + eyeDirection);
  float p = abs(dot(normal, halfVector));
  float f0 = mix(0.04, diffuse, metalness); // 1 -> 1.5
  float fresnel = f0 + (1. - f0) * pow(1. - p, 3.);
  float reflectance = fresnel;
  float alpha = opacity * reflectance + specular; // For glass effect
  #else
  float reflectance = metalness;
  float alpha = opacity;
  #endif

  #ifdef ENVMAP
  vec3 envAlbedo = texture(envMap, reflect(-eyeDirection, normal)).rgb;

  albedo = mix(albedo, envAlbedo, reflectance);
  #endif

  float k = ambient + diffuse + specular;
  // Ambient occlusion
  #ifdef TEXTURE
  vec4 arm = texture(armMap, uv);
  k *= arm.r;
  #endif

  vec4 color = vec4(k * albedo, alpha);

  return color;
}
