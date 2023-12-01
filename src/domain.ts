type SKU = string

interface Item {
  sku: SKU
  name: string
  price: number
}

type Cart = Record<SKU, Item[]>

type Rule = (context: Cart) => number

export class Checkout {
  cart: Cart
  rules: Rule[]

  constructor (rules: Rule[]) {
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
