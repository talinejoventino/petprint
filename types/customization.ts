export interface Customization {
  productType: 'shirt' | 'mug'
  productColor: string
  designStyle: string
  designScale: number
  designPosY: number
  size?: string
  quantity: number
}

export interface AIStyle {
  id: string
  name: string
  prompt: string
  thumbnail?: string
}

export const AI_STYLES: AIStyle[] = [
  {
    id: 'cool',
    name: 'Cool 😎',
    prompt: 'flat vector illustration, stylish pet wearing sunglasses, minimalist, cool colors',
  },
  {
    id: 'fashion',
    name: 'Fashion 🧣',
    prompt: 'flat vector illustration, fashionable pet with scarf and accessories, trendy',
  },
  {
    id: 'tropical',
    name: 'Tropical 🌺',
    prompt: 'flat vector illustration, pet with tropical theme, flowers, bright colors',
  },
  {
    id: 'vintage',
    name: 'Vintage 🎩',
    prompt: 'flat vector illustration, retro pet with hat, vintage aesthetic, warm tones',
  },
]
