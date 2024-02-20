#version 300 es
precision highp float;

uniform mat4 viewProjection;
uniform vec3 eye;
uniform float time;

#include config

// Constants
const float PI = 3.14159265358979323846264338327950288;
const float TAU = 2. * PI;
const float ETA = PI / 2.;
const float LN2 = 0.693147180559945309417232121458176568;
const float LN10 = 2.302585092994045684017991454684364208;
const vec3 NOISE = vec3(.000003, -.000002, .000017);
const float NaN = intBitsToFloat(-1);
const float SCALE = TAU;
const float curvature = float(CURVATURE);
const float DT = curvature == 0. ? .05 : .001;
