"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Product {
  id: number
  name: string
  price: number
  image: string
  quantity?: number
}

interface StoreState {
  cart: Product[]
  wishlist: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: number) => void
  isInWishlist: (productId: number) => boolean
  getTotalPrice: () => number
  getTotalItems: () => number
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],

      addToCart: (product) => {
        const { cart } = get()
        const existingItem = cart.find((item) => item.id === product.id)

        if (existingItem) {
          set({
            cart: cart.map((item) => (item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item)),
          })
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] })
        }
      },

      removeFromCart: (productId) => {
        set({ cart: get().cart.filter((item) => item.id !== productId) })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }

        set({
          cart: get().cart.map((item) => (item.id === productId ? { ...item, quantity } : item)),
        })
      },

      clearCart: () => set({ cart: [] }),

      addToWishlist: (product) => {
        const { wishlist } = get()
        if (!wishlist.find((item) => item.id === product.id)) {
          set({ wishlist: [...wishlist, product] })
        }
      },

      removeFromWishlist: (productId) => {
        set({ wishlist: get().wishlist.filter((item) => item.id !== productId) })
      },

      isInWishlist: (productId) => {
        return get().wishlist.some((item) => item.id === productId)
      },

      getTotalPrice: () => {
        return get().cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      },

      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + (item.quantity || 1), 0)
      },
    }),
    {
      name: "hijab-elegance-store",
    },
  ),
)
