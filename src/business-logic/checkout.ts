import { type Cart, type Item, type Rule } from '../domain/types'
import { tallyDiscount } from './tallyDiscount'
import { tallyTotal } from './tallyTotal'

export class Checkout {
  cart: Cart
  rules: Rule[]

  constructor (rules: Rule[]) {
    this.rules = rules
    this.cart = {}
  }

  scan (item: Item): void {
    const items = this.cart[item.sku] ?? []
    this.cart[item.sku] = [...items, item]
  }

  total (): number {
    const discount = tallyDiscount(this.rules, this.cart)
    const total = tallyTotal(this.cart)
    return total - discount
  }
}
