import { Vector3 as ThreeVector3 } from 'three'
import { floatToToken } from './utils'

export default class Vector3 extends ThreeVector3 {
  get token() {
    return 'xyz'
      .split('')
      .map(c => floatToToken(this[c]))
      .join('|')
  }
}
