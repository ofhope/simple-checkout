type SKU = string

interface Item {
  sku: SKU
  name: string
  price: number
}

type Cart = Record<SKU, Item[]>

export class Checkout {
  cart: Cart
  rules: string

  constructor (rules: string) {
    this.rules = rules
    this.cart = {}
  }

  scan (item: Item): void {
    this.cart[item.sku] = [...this.cart[item.sku], item]
  }

  total (): number {
    return 123.00
  }
}
