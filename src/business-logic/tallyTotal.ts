import { type Cart } from '../domain/types'
import { sum } from './sum'

export const tallyTotal = (context: Cart): number => {
  let result = 0
  for (const [, items] of Object.entries(context)) {
    result += sum(items.map(item => item.price))
  }
  return result
}
