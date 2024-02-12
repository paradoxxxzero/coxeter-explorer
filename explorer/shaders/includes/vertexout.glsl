#ifdef SHADING
vPosition = proj;
vNormal = norm;
vUv = uv;

#if (defined(TEXTURE) || (defined(SHADING) && SHADING > 0)) && DIMENSIONS >= 2
#ifdef EDGE
const float repeat = 4.;
vUv.y = 2. * abs(vUv.y * repeat - floor(vUv.y * repeat + .5));
#endif

#ifdef FACE
vec2 thetas = TAU * triangulation;
vec2 u = vec2(cos(thetas.x), sin(thetas.x));
vec2 v = vec2(cos(thetas.y), sin(thetas.y));

#if TESSELATION == 1
// We have right triangles so we need to adjust the u and v vectors
float f = cos(thetas.y - thetas.x);
if(gl_InstanceID % 2 == (sign(thetas.y - thetas.x) > 0. ? 1 : 0)) {
u *= f;
} else {
v *= f;
}
#endif

vec2 p = uv.x * u + uv.y * (v - u);
vUv = .5 * (p + 1.);
#endif
#endif

#ifdef TEXTURE
proj += norm * texture(displacementMap, vUv).r * .06;
#endif
#endif

gl_Position = viewProject(proj);

#if defined(SHADING) && defined(GOURAUD)
vColor = light(proj, norm, color, uv);
#else
vColor = color;

#endif
