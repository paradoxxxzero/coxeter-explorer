import { Vector3 as ThreeVector3 } from 'three'
import { sqrt } from './index'
import { floatToToken } from './utils'
import Vector4 from './Vector4'

export default class Vector3 extends ThreeVector3 {
  raise() {
    return new Vector4(this.x, this.y, this.z, sqrt(1 + this.lengthSq()))
  }

  get token() {
    return 'xyz'
      .split('')
      .map(c => floatToToken(this[c]))
      .join('|')
  }
}
