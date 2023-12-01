import { tallyTotal } from './tallyTotal'

describe('tallyTotal', () => {
  it('should calulate the total of all cart items', () => {
    const input = {
      foo: [{ sku: 'foo', name: 'Bar', price: 1 }]
    }
    const result = tallyTotal(input)
    expect(result).toEqual(1)
  })
  it('should handle multi sku carts', () => {
    const input = {
      foo: [{ sku: 'foo', name: 'Bar', price: 1 }],
      bar: [{ sku: 'bar', name: 'Foo', price: 1 }]
    }
    const result = tallyTotal(input)
    expect(result).toEqual(2)
  })
  it('should handle multiple items of a single sku', () => {
    const input = {
      foo: [{ sku: 'foo', name: 'Bar', price: 1 }, { sku: 'foo', name: 'Bar', price: 1 }, { sku: 'foo', name: 'Bar', price: 1 }]
    }
    const result = tallyTotal(input)
    expect(result).toEqual(3)
  })
})
