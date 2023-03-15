// Unused
import { readFile, writeFile } from 'fs/promises'
import { getRules, sorter } from './honeyball/math/group.js'
import { C } from './honeyball/C.js'

const max = 20
const file = 'honeyball/math/rules'

const run = async dimensions => {
  let rules
  try {
    const rulesJson = await readFile(`${file}-${dimensions}d.json`)
    rules = JSON.parse(rulesJson)
  } catch (e) {
    console.warn('No rules file found, creating new one.')
    rules = {
      d3: {},
      d4: {},
    }
  }
  C.dimensions = dimensions
  for (let p = 2; p < max; p++) {
    for (let q = 2; q < max; q++) {
      for (let r = 2; r < max; r++) {
        if (rules[`d${C.dimensions}`][`${p}-${q}-${r}`]) {
          continue
        }
        console.log(`d3: ${p}-${q}-${r}`)
        C.p = p
        C.q = q
        C.r = r
        let result
        try {
          result = getRules()
        } catch (e) {
          console.warn(e)
          continue
        }
        const newRules = Object.fromEntries(
          [...result.entries()].sort(([a], [b]) => sorter(a, b))
        )
        rules[`d${C.dimensions}`][`${p}-${q}-${r}`] = newRules
        await writeFile(
          `${file}-${dimensions}.json`,
          JSON.stringify(rules, null, 2)
        )
      }
    }
  }
}

run(3)
