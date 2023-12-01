import { type Rule } from '../domain/types'

//  free VGA adapter free of charge with every MacBook Pro sold
export const freeVgaWithMbp: Rule = (context) => {
  if ('mbp' in context && 'vga' in context) {
    const numMbp = context.mbp.length
    const numVga = context.vga.length
    return Math.min(numMbp, numVga) * 30
  }
  return 0
}
