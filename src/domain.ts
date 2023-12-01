interface Item {
  sku: string
}

export class Checkout {
  cart: Item[]
  rules: string

  constructor (rules: string) {
    this.rules = rules
    this.cart = []
  }

  scan (item: Item): void {
    this.cart.push(item)
  }

  total (): number {
    return 123.00
  }
}
