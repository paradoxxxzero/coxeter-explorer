export const isDual = m => m === 'm' || m === 'b' || m === 'c' || m === 'd'
export const isCompound = m => m === 'c' || m === 'd'
export const isSnub = m => m === 's' || m === 'b' || m === 'd'
export const isHoloSnub = m => m === 'ß'

// active -> s, snub -> snubDual
export const dualize = m => (isDual(m) ? m : m ? { s: 'b' }[m] || 'm' : m)
export const undualize = m => ({ b: 's', m: 1 })[m] || m
// active -> c, snub -> snubCompound, dual -> compound, snubDual -> snubCompound
export const compoundize = m =>
  isCompound(m) ? m : m ? { s: 'd', b: 'd', m: 'c' }[m] || 'c' : m
export const uncompoundize = m => ({ d: 's', c: 1 })[m] || m

export const mirrorValue = m => (isNaN(m) ? 1 : +m)

export const mirrorTypes = {
  active: 1,
  inactive: 0,
  dual: 'm',
  snub: 's',
  snubDual: 'b',
  compound: 'c',
  snubCompound: 'd',
  custom: 0.5,
}

export const mirrorToType = v =>
  (Object.entries(mirrorTypes).find(([k, w]) => w === v) || ['custom'])[0]
