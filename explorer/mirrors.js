export const mirrorChars = 'msbßx'

export const isEnabled = m => m !== '' && m !== 'x'
export const isDual = m => m === 'm' || m === 'b'
export const isSnub = m => m === 's' || m === 'b'
export const isHoloSnub = m => m === 'ß'
// Fix this mess:
export const mirrorValue = m => (isNaN(m) ? 1 : +m)

export const mirrorTypes = {
  active: 1,
  inactive: 0,
  dual: 'm',
  snub: 's',
  // holosnub: 'ß',
  snubdual: 'b',
  custom: 0.5,
  activeVoid: 'x',
  void: '',
}

export const mirrorToType = v =>
  v === 0
    ? 'inactive'
    : v === 1
    ? 'active'
    : v === 'm'
    ? 'dual'
    : v === 's'
    ? 'snub'
    : // : v === 'ß'
    // ? 'holosnub'
    v === 'b'
    ? 'snubdual'
    : v === 'x'
    ? 'activeVoid'
    : v === ''
    ? 'void'
    : 'custom'
