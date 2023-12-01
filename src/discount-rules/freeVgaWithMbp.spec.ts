import { freeVgaWithMbp } from './freeVgaWithMbp'

describe('freeVgaWithMbp', () => {
  it('should not apply rule if mbp not present', () => {
    const context = {
      foo: [{ sku: 'foo', name: 'Bar', price: 1 }]
    }
    const result = freeVgaWithMbp(context)
    expect(result).toEqual(0)
  })
  it('should not apply rule when mbp present but vga is not', () => {
    const context = {
      mbp: [{ sku: 'mbp', name: 'MacBook Pro', price: 1399.99 }]
    }
    const result = freeVgaWithMbp(context)
    expect(result).toEqual(0)
  })
  it('should apply rule when mbp present but vga is not', () => {
    const context = {
      mbp: [{ sku: 'mbp', name: 'MacBook Pro', price: 1399.99 }],
      vga: [{ sku: 'vga', name: 'VGA adapter', price: 30.00 }]
    }
    const result = freeVgaWithMbp(context)
    expect(result).toEqual(30)
  })
  it('should not apply rule for additional mbp without corresponding vga', () => {
    const context = {
      mbp: [{ sku: 'mbp', name: 'MacBook Pro', price: 1399.99 }, { sku: 'mbp', name: 'MacBook Pro', price: 1399.99 }],
      vga: [{ sku: 'vga', name: 'VGA adapter', price: 30.00 }]
    }
    const result = freeVgaWithMbp(context)
    expect(result).toEqual(30)
  })
  it('should apply rule for additional vga if corresponding mbp', () => {
    const context = {
      mbp: [{ sku: 'mbp', name: 'MacBook Pro', price: 1399.99 }, { sku: 'mbp', name: 'MacBook Pro', price: 1399.99 }],
      vga: [{ sku: 'vga', name: 'VGA adapter', price: 30.00 }, { sku: 'vga', name: 'VGA adapter', price: 30.00 }]
    }
    const result = freeVgaWithMbp(context)
    expect(result).toEqual(60)
  })
  it('should not apply rule for additional vga without corresponding mbp', () => {
    const context = {
      mbp: [{ sku: 'mbp', name: 'MacBook Pro', price: 1399.99 }, { sku: 'mbp', name: 'MacBook Pro', price: 1399.99 }],
      vga: [{ sku: 'vga', name: 'VGA adapter', price: 30.00 }, { sku: 'vga', name: 'VGA adapter', price: 30.00 }, { sku: 'vga', name: 'VGA adapter', price: 30.00 }]
    }
    const result = freeVgaWithMbp(context)
    expect(result).toEqual(60)
  })
})
