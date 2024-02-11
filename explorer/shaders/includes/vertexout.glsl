#ifdef SHADING
vPosition = proj;
vNormal = norm;
vUv = uv;

#if (TEXTURE == 1 || (defined(SHADING) && SHADING > 0)) && DIMENSIONS >= 2
#ifdef EDGE
const float repeat = 4.;
vUv.y = 2. * abs(vUv.y * repeat - floor(vUv.y * repeat + .5));
#endif

#ifdef FACE
vec2 thetas = TAU * triangulation;
vec2 u = vec2(cos(thetas.x), sin(thetas.x));
vec2 v = vec2(cos(thetas.y), sin(thetas.y));
vec2 p = uv.x * u + uv.y * (v - u);
vUv = .5 * (p + 1.);
#endif
#endif

#if TEXTURE == 1
proj += norm * texture(displacementMap, vUv).r * .06;
#endif
#endif

gl_Position = viewProject(proj);

#if defined(SHADING) && defined(GOURAUD)
vColor = light(proj, norm, color, uv);
#else
vColor = color;

#endif
