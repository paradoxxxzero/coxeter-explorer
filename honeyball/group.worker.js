import { getBaseRules, knuthBendix } from './math/group'

onmessage = ({ data: { dimensions, coxeter, uuid } }) => {
  const baseRules = getBaseRules(dimensions, coxeter)
  try {
    const rules = knuthBendix(baseRules, dimensions)
    postMessage({ rules, uuid })
  } catch (e) {
    postMessage({
      rules: new Map(Object.entries(baseRules)),
      warn: e.message || 'Empty error',
      uuid: uuid,
    })
  }
}
