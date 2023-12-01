import { priceDropOnFourOrMoreIpad } from './priceDropOnFourOrMoreIpad'

describe('priceDropOnFourOrMoreIpad', () => {
  it('should not apply rule if ipd not present', () => {
    const context = {
      foo: [{ sku: 'foo', name: 'Bar', price: 1 }]
    }
    const result = priceDropOnFourOrMoreIpad(context)
    expect(result).toEqual(0)
  })
  it('should not apply rule if number of ipd in cart is less than four', () => {
    const context = {
      ipd: [
        { sku: 'ipd', name: 'Super iPad', price: 549.99 },
        { sku: 'ipd', name: 'Super iPad', price: 549.99 },
        { sku: 'ipd', name: 'Super iPad', price: 549.99 }
      ]
    }
    const result = priceDropOnFourOrMoreIpad(context)
    expect(result).toEqual(0)
  })
  it('should apply rule if number of ipd in cart is four', () => {
    const context = {
      ipd: [
        { sku: 'ipd', name: 'Super iPad', price: 549.99 },
        { sku: 'ipd', name: 'Super iPad', price: 549.99 },
        { sku: 'ipd', name: 'Super iPad', price: 549.99 },
        { sku: 'ipd', name: 'Super iPad', price: 549.99 }
      ]
    }
    const result = priceDropOnFourOrMoreIpad(context)
    expect(result).toEqual(200)
  })
  it('should apply rule if number of ipd in cart is more than four', () => {
    const context = {
      ipd: [
        { sku: 'ipd', name: 'Super iPad', price: 549.99 },
        { sku: 'ipd', name: 'Super iPad', price: 549.99 },
        { sku: 'ipd', name: 'Super iPad', price: 549.99 },
        { sku: 'ipd', name: 'Super iPad', price: 549.99 },
        { sku: 'ipd', name: 'Super iPad', price: 549.99 },
        { sku: 'ipd', name: 'Super iPad', price: 549.99 },
        { sku: 'ipd', name: 'Super iPad', price: 549.99 }
      ]
    }
    const result = priceDropOnFourOrMoreIpad(context)
    expect(result).toEqual(350)
  })
})
