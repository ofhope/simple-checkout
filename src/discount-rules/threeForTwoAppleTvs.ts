import { type Rule } from '../domain/types'

const xForY = (x: number) => (y: number) => (y - (y % x)) / x
const threeForTwo = xForY(3)

// 3 for 2 deal on Apple TVs. For example, if you buy 3 Apple TVs, you will pay the price of 2 only
export const threeForTwoAppleTvs: Rule = (context) => {
  if ('atv' in context && context.atv.length >= 3) {
    return threeForTwo(context.atv.length) * 109.50
  }
  return 0
}
