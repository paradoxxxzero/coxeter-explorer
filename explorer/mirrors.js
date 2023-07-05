export const enabled = m => m !== '' && m !== 'x'
export const mirrorChars = 'sßx'

export const mirrorTypes = {
  active: 1,
  inactive: 0,
  snub: 's',
  holosnub: 'ß',
  custom: 0.5,
  activeVoid: 'x',
  void: '',
}

export const mirrorToType = v =>
  v === 0
    ? 'inactive'
    : v === 1
    ? 'active'
    : v === 's'
    ? 'snub'
    : v === 'ß'
    ? 'holosnub'
    : v === 'x'
    ? 'activeVoid'
    : v === ''
    ? 'void'
    : 'custom'
