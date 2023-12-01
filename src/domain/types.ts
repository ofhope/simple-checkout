type SKU = string

export interface Item {
  sku: SKU
  name: string
  price: number
}

export type Cart = Record<SKU, Item[]>

export type Rule = (context: Cart) => number
