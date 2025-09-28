"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useStore } from "@/lib/store"

export default function WishlistDrawer() {
  const { wishlist, removeFromWishlist, addToCart } = useStore()
  const [isOpen, setIsOpen] = useState(false)

  const handleAddToCart = (product: any) => {
    addToCart(product)
    removeFromWishlist(product.id)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Heart className="h-5 w-5" />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-right font-arabic">قائمة الأمنيات</SheetTitle>
        </SheetHeader>

        <div className="py-4">
          {wishlist.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground font-arabic">قائمة الأمنيات فارغة</p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlist.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 space-x-reverse p-4 border rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1 text-right">
                    <h4 className="font-medium font-arabic">{item.name}</h4>
                    <p className="text-primary font-bold">{item.price} DH</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Button
                      size="sm"
                      onClick={() => handleAddToCart(item)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <ShoppingCart className="h-4 w-4 ml-1" />
                      أضف للسلة
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <X className="h-4 w-4 ml-1" />
                      إزالة
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
