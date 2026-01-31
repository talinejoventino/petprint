export type ProductType = 'shirt' | 'mug'

export interface Product {
  id: string
  type: ProductType
  name: string
  description: string
  basePrice: number
  colors: ProductColor[]
  sizes?: string[]
}

export interface ProductColor {
  name: string
  hex: string
}

export const PRODUCT_COLORS: ProductColor[] = [
  { name: 'Branco', hex: '#FFFFFF' },
  { name: 'Preto', hex: '#000000' },
  { name: 'Laranja', hex: '#F86624' },
  { name: 'Azul', hex: '#43BCCD' },
  { name: 'Amarelo', hex: '#F9C60E' },
  { name: 'Verde', hex: '#95e1d3' },
  { name: 'Roxo', hex: '#aa96da' },
  { name: 'Coral', hex: '#ff9a76' },
]
