import { threeForTwoAppleTvs } from './threeForTwoAppleTvs'

describe('threeForTwoAppleTvs', () => {
  it('should not apply rule if atv not present', () => {
    const context = {
      foo: [{ sku: 'foo', name: 'Bar', price: 1 }]
    }
    const result = threeForTwoAppleTvs(context)
    expect(result).toEqual(0)
  })
  it('should apply rule if three atv present', () => {
    const context = {
      atv: [
        { sku: 'atv', name: 'Apple TV', price: 109.50 },
        { sku: 'atv', name: 'Apple TV', price: 109.50 },
        { sku: 'atv', name: 'Apple TV', price: 109.50 }
      ]
    }
    const result = threeForTwoAppleTvs(context)
    expect(result).toEqual(109.50)
  })
  it('should apply rule once when between discount ranges', () => {
    const context = {
      atv: [
        { sku: 'atv', name: 'Apple TV', price: 109.50 },
        { sku: 'atv', name: 'Apple TV', price: 109.50 },
        { sku: 'atv', name: 'Apple TV', price: 109.50 },
        { sku: 'atv', name: 'Apple TV', price: 109.50 }
      ]
    }
    const result = threeForTwoAppleTvs(context)
    expect(result).toEqual(109.50)
  })
  it('should apply rule twice when reaching the next threshold', () => {
    const context = {
      atv: [
        { sku: 'atv', name: 'Apple TV', price: 109.50 },
        { sku: 'atv', name: 'Apple TV', price: 109.50 },
        { sku: 'atv', name: 'Apple TV', price: 109.50 },
        { sku: 'atv', name: 'Apple TV', price: 109.50 },
        { sku: 'atv', name: 'Apple TV', price: 109.50 },
        { sku: 'atv', name: 'Apple TV', price: 109.50 }
      ]
    }
    const result = threeForTwoAppleTvs(context)
    expect(result).toEqual(219)
  })
})
