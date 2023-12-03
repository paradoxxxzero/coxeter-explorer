#include config

// Constants
const float PI = 3.14159265358979323846264338327950288;
const float TAU = 2. * PI;
const float ETA = PI / 2.;
const float DT = .001;
const float SCALING = .0005;
const vec3 NOISE = vec3(.000003, -.000002, .000017);

#include dimensions

// Global vertex uniforms
uniform float segments;
uniform mat4 viewProjection;
uniform matN metric;
uniform matN matrix;
uniform float curvature;
uniform float opacity;

#if DIMENSIONS >= 4
uniform float fov4;
#endif
#if DIMENSIONS >= 5
uniform float fov5;
#endif
#if DIMENSIONS >= 6
uniform float fov6;
#endif
#if DIMENSIONS >= 7
uniform float fov7;
#endif
#if DIMENSIONS >= 8
uniform float fov8;
#endif
#if DIMENSIONS >= 9
uniform float fov9;
#endif
uniform float zoom;
