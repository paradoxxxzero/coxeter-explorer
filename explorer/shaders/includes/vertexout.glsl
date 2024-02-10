#ifdef SHADING
vPosition = proj;
vNormal = norm;
vUv = uv;

#ifdef EDGE
const float repeat = 4.;
vUv.t = 2. * abs(vUv.t * repeat - floor(vUv.t * repeat + .5));
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
