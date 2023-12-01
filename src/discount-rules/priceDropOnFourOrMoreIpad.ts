import { type Rule } from '../domain/types'

// Super iPad will have a bulk discounted applied, where the price will drop to $499.99 each, if someone buys more than 4
export const priceDropOnFourOrMoreIpad: Rule = (context) => {
  if ('ipd' in context && context.ipd.length >= 4) {
    return context.ipd.length * 50
  }
  return 0
}
