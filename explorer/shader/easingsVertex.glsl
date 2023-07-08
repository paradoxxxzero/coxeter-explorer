/* BEGIN INCLUDE */

#define PI 3.141592653589793
#define HALF_PI 1.5707963267948966

float ease(float t) {
  #if EASING == 0  // linear
  return t;
  #elif EASING == 1 // circular
  return t < 0.5 ? 0.5 * (1. - sqrt(1. - 4. * t * t)) : 0.5 * (sqrt((3. - 2. * t) * (2. * t - 1.)) + 1.);
  #elif EASING == 2 // cubic
  return t < 0.5 ? 4. * t * t * t : 1. - pow(-2. * t + 2., 3.) / 2.;
  #elif EASING == 3 // quadratic
  float p = 2. * t * t;
  return t < 0.5 ? p : -p + (4. * t) - 1.;
  #elif EASING == 4 // quartic
  return t < 0.5 ? +8. * pow(t, 4.) : -8. * pow(t - 1., 4.) + 1.;
  #elif EASING == 5 // quintic
  return t < 0.5 ? 16. * pow(t, 5.) : 1. - pow(-2. * t + 2., 5.) / 2.;
  #elif EASING == 6 // sine
  return -0.5 * (cos(PI * t) - 1.);
  #elif EASING == 7 // exponential
  return t == 0. || t == 1. ? t : t < 0.5 ? +0.5 * pow(2., (20. * t) - 10.) : -0.5 * pow(2., 10. - (t * 20.)) + 1.;
  #elif EASING == 8 // back
  float f = t < 0.5 ? 2. * t : 1. - (2. * t - 1.);
  float g = pow(f, 3.) - f * sin(f * PI);
  return t < 0.5 ? 0.5 * g : 0.5 * (1. - g) + 0.5;
  #elif EASING == 9 // elastic
  float p = 0.3;
  float s = p / 4.;
  float f = t == 0. || t == 1. ? t : -pow(2., 10. * t - 10.) * sin((t * 10. - 10.75) * s);
  return t == 0. || t == 1. ? t : f;
  #elif EASING == 10 // bounce
  float s = 7.5625;
  float p = 2.75;
  float l;
  if(t < (1. / p)) {
    l = s * pow(t, 2.);
  } else {
    if(t < (2. / p)) {
      t -= (1.5 / p);
      l = s * pow(t, 2.) + 0.75;
    } else {
      if(t < (2.5 / p)) {
        t -= (2.25 / p);
        l = s * pow(t, 2.) + 0.9375;
      } else {
        t -= (2.625 / p);
        l = s * pow(t, 2.) + 0.984375;
      }
    }
  }
  return l;
  #else
  return t;
  #endif
}

vec2 ease(vec2 t) {
  return vec2(ease(t.x), ease(t.y));
}
/* END INCLUDE */
