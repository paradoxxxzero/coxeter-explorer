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
if(triangulation.t == 3.) {
vUv.y = .5 - .5 * uv.x + uv.y;
} else {
float o = TAU / triangulation.t;
float n = o * (triangulation.s);
float m = o * (triangulation.s + 1.);
vec2 u = vec2(cos(n), sin(n));
vec2 v = vec2(cos(m), sin(m));
vec2 p = uv.x * u + uv.y * (v - u);
vUv.x = .5 * (p.x + 1.);
vUv.y = .5 * (p.y + 1.);
}
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
