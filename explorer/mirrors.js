export const mirrorChars = 'dsbßx'

export const isEnabled = m => m !== '' && m !== 'x'
export const isDual = m => m === 'd' || m === 'b'
export const isSnub = m => m === 's' || m === 'b'
export const isHoloSnub = m => m === 'ß'
// Fix this mess:
export const mirrorValue = m => (isNaN(m) ? 1 : +m)

export const mirrorTypes = {
  active: 1,
  inactive: 0,
  dual: 'd',
  snub: 's',
  holosnub: 'ß',
  dualsnub: 'b',
  custom: 0.5,
  activeVoid: 'x',
  void: '',
}

export const mirrorToType = v =>
  v === 0
    ? 'inactive'
    : v === 1
    ? 'active'
    : v === 'd'
    ? 'dual'
    : v === 's'
    ? 'snub'
    : v === 'ß'
    ? 'holosnub'
    : v === 'b'
    ? 'dualsnub'
    : v === 'x'
    ? 'activeVoid'
    : v === ''
    ? 'void'
    : 'custom'
