import { sum } from './sum'

describe('sum', () => {
  it('should calulate the total from a number array', () => {
    const input = [1, 1, 1]
    const result = sum(input)
    expect(result).toEqual(3)
  })
  it('should handle zero values', () => {
    const input = [0, 0, 1]
    const result = sum(input)
    expect(result).toEqual(1)
  })
  it('should handle negative values', () => {
    const input = [-1, 0, 1]
    const result = sum(input)
    expect(result).toEqual(0)
  })
  it('should handle floating point values', () => {
    const input = [0.01, 1, 3]
    const result = sum(input)
    expect(result).toEqual(4.01)
  })
})
