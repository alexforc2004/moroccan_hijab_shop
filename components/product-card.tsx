"use client"

import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useStore } from "@/lib/store"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore()

  const isWishlisted = isInWishlist(id)

  const handleWishlistToggle = () => {
    console.log("[v0] Wishlist toggle clicked for product:", id, "Current state:", isWishlisted)
    const product = { id, name, price, image }
    if (isWishlisted) {
      removeFromWishlist(id)
      console.log("[v0] Removed from wishlist:", id)
    } else {
      addToWishlist(product)
      console.log("[v0] Added to wishlist:", id)
    }
  }

  const handleAddToCart = () => {
    console.log("[v0] Add to cart clicked for product:", id)
    const product = { id, name, price, image }
    addToCart(product)
  }

  return (
    <Card className="product-card overflow-hidden group animate-fade-in hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>

      <CardContent className="p-4 bg-gradient-to-br from-white to-gray-50/50 group-hover:from-white group-hover:to-primary/5 transition-all duration-500">
        <h3 className="font-medium text-lg mb-3 text-right font-arabic line-clamp-2 group-hover:text-primary transition-all duration-300 group-hover:scale-105">
          {name}
        </h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
              {price} DH
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleAddToCart}
              variant="outline"
              className="flex-1 border-primary/20 text-primary hover:bg-primary hover:text-white font-arabic transition-all duration-300 hover:scale-105 text-sm px-4 py-2 bg-transparent"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 ml-1" />
              أضف إلى السلة
            </Button>
            <Button
              variant={isWishlisted ? "default" : "outline"}
              size="sm"
              className={`flex-1 transition-all duration-300 hover:scale-105 font-arabic text-sm px-4 py-2 ${
                isWishlisted
                  ? "bg-red-500 hover:bg-red-600 text-white border-red-500"
                  : "bg-transparent hover:bg-red-50 text-red-500 border-red-200 hover:border-red-300"
              }`}
              onClick={handleWishlistToggle}
            >
              <Heart
                className={`h-4 w-4 ml-1 transition-all duration-300 ${
                  isWishlisted ? "fill-white text-white" : "text-red-500"
                }`}
              />
              {isWishlisted ? "مضاف للمفضلة" : "أضف للمفضلة"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
