import { type Cart, type Rule } from '../domain/types'
import { sum } from './sum'

export const tallyDiscount = (rules: Rule[], context: Cart): number => {
  const ruleTotals = rules.map((rule) => rule(context))
  return sum(ruleTotals)
}
