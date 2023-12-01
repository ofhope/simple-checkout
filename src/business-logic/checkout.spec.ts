import { type Rule } from '../domain/types'
import { Checkout } from './checkout'

describe('Checkout', () => {
  it('should aggregate scanned items into a cart context and apply discounts', () => {
    const rules: Rule[] = [
      (context) => {
        if ('foo' in context) {
          return 1
        }
        return 0
      }
    ]
    const co = new Checkout(rules)
    co.scan({
      sku: 'foo',
      name: 'Bar',
      price: 10
    })
    const result = co.total()
    expect(result).toEqual(9)
  })
})
