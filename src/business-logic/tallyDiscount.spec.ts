import { type Rule } from '../domain/types'
import { tallyDiscount } from './tallyDiscount'

describe('tallyDiscount', () => {
  it('should calculate the sum of all discount rules', () => {
    const cartInput = {
      foo: [{ sku: 'foo', name: 'Bar', price: 1 }]
    }
    const rules = [
      () => 123,
      () => 111
    ]
    const result = tallyDiscount(rules, cartInput)
    expect(result).toEqual(234)
  })
  it('should provide the cart as context to evaluated rules', () => {
    const cartInput = {
      foo: [{ sku: 'foo', name: 'Bar', price: 1 }]
    }
    const rules: Rule[] = [
      (context) => {
        if ('foo' in context) {
          return 1
        }
        return 0
      }
    ]
    const result = tallyDiscount(rules, cartInput)
    expect(result).toEqual(1)
  })
})
