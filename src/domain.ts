// Checkout co = new Checkout(pricingRules);
//   co.scan(item1);
//   co.scan(item2);
//   co.total();

export class Checkout {
  cart: string[]
  rules: string

  constructor (rules: string) {
    this.rules = rules
    this.cart = ['']
  }

  scan (item: string): void {
    this.cart.push(item)
  }

  total (): number {
    return 123.00
  }
}
