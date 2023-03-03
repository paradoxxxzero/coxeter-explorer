import { Vector4 as ThreeVector4, Vector2 } from 'three'
import Vector3 from './Vector3'
import { floatToToken } from './utils'

export default class Vector4 extends ThreeVector4 {
  get xy() {
    return new Vector2(this.x, this.y)
  }
  get xz() {
    return new Vector2(this.x, this.z)
  }
  get xw() {
    return new Vector2(this.x, this.w)
  }
  get yz() {
    return new Vector2(this.y, this.z)
  }
  get yw() {
    return new Vector2(this.y, this.w)
  }
  get zw() {
    return new Vector2(this.z, this.w)
  }
  get xyz() {
    return new Vector3(this.x, this.y, this.z)
  }
  get xyw() {
    return new Vector3(this.x, this.y, this.w)
  }
  get xzw() {
    return new Vector3(this.x, this.z, this.w)
  }
  get yzw() {
    return new Vector3(this.y, this.z, this.w)
  }
  get xyzw() {
    return new Vector4(this.x, this.y, this.z, this.w)
  }
  get xywz() {
    return new Vector4(this.x, this.y, this.w, this.z)
  }
  get yzwx() {
    return new Vector4(this.y, this.z, this.w, this.x)
  }
  get zwxy() {
    return new Vector4(this.z, this.w, this.x, this.y)
  }
  get wzyx() {
    return new Vector4(this.w, this.z, this.y, this.x)
  }
  get token() {
    return 'xyzw'
      .split('')
      .map(c => floatToToken(this[c]))
      .join('|')
  }
}
