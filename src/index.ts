import { Checkout } from './business-logic/checkout'
import { freeVgaWithMbp } from './discount-rules/freeVgaWithMbp'
import { priceDropOnFourOrMoreIpad } from './discount-rules/priceDropOnFourOrMoreIpad'
import { threeForTwoAppleTvs } from './discount-rules/threeForTwoAppleTvs'
import { type Rule, type Item } from './domain/types'

const ipd: Item = {
  sku: 'ipd',
  name: 'Super iPad',
  price: 549.99
}
const mbp: Item = {
  sku: 'mbp',
  name: 'MacBook Pro',
  price: 1399.99
}
const atv: Item = {
  sku: 'atv',
  name: 'Apple TV',
  price: 109.50
}
const vga: Item = {
  sku: 'vga',
  name: 'VGA adapter',
  price: 30.00
}

const rules: Rule[] = [
  threeForTwoAppleTvs,
  priceDropOnFourOrMoreIpad,
  freeVgaWithMbp
]

const exampleOneCo = new Checkout(rules)
exampleOneCo.scan(atv)
exampleOneCo.scan(atv)
exampleOneCo.scan(atv)
exampleOneCo.scan(vga)
console.log('SKUs Scanned: atv, atv, atv, vga Total expected: $249.00', exampleOneCo.total())

const exampleTwoCo = new Checkout(rules)
exampleTwoCo.scan(atv)
exampleTwoCo.scan(ipd)
exampleTwoCo.scan(ipd)
exampleTwoCo.scan(atv)
exampleTwoCo.scan(ipd)
exampleTwoCo.scan(ipd)
exampleTwoCo.scan(ipd)
console.log('SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd Total expected: $2718.95', exampleTwoCo.total())

const exampleThreeCo = new Checkout(rules)
exampleThreeCo.scan(mbp)
exampleThreeCo.scan(vga)
exampleThreeCo.scan(ipd)
console.log('SKUs Scanned: mbp, vga, ipd Total expected: $1949.98', exampleThreeCo.total())
