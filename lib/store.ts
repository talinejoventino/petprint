import { create } from 'zustand'

interface CustomizationState {
  selectedProduct: 'shirt' | 'mug' | null
  petImage: string | null
  selectedStyle: string | null
  designScale: number
  designPosY: number
  productColor: string
  generatedDesigns: string[]

  setSelectedProduct: (product: 'shirt' | 'mug') => void
  setPetImage: (image: string) => void
  setSelectedStyle: (style: string) => void
  setDesignScale: (scale: number) => void
  setDesignPosY: (pos: number) => void
  setProductColor: (color: string) => void
  setGeneratedDesigns: (designs: string[]) => void
  reset: () => void
}

export const useCustomizationStore = create<CustomizationState>((set) => ({
  selectedProduct: null,
  petImage: null,
  selectedStyle: null,
  designScale: 1,
  designPosY: 0,
  productColor: '#FFFFFF',
  generatedDesigns: [],

  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setPetImage: (image) => set({ petImage: image }),
  setSelectedStyle: (style) => set({ selectedStyle: style }),
  setDesignScale: (scale) => set({ designScale: scale }),
  setDesignPosY: (pos) => set({ designPosY: pos }),
  setProductColor: (color) => set({ productColor: color }),
  setGeneratedDesigns: (designs) => set({ generatedDesigns: designs }),
  reset: () => set({
    selectedProduct: null,
    petImage: null,
    selectedStyle: null,
    designScale: 1,
    designPosY: 0,
    productColor: '#FFFFFF',
    generatedDesigns: []
  })
}))
