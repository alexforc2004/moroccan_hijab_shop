"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useStore } from "@/lib/store"

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useStore()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleCheckout = () => {
    setIsOpen(false)
    // Add a small delay for smooth drawer closing animation
    setTimeout(() => {
      router.push("/checkout")
    }, 200)
  }

  const handleOpenCart = () => {
    setIsOpen(true)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative transition-all duration-300 hover:scale-110 hover:bg-primary/10"
          onClick={handleOpenCart}
        >
          <ShoppingBag className="h-5 w-5" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-in">
              {getTotalItems()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:max-w-lg animate-slide-up">
        <SheetHeader>
          <SheetTitle className="text-right font-arabic text-2xl">سلة التسوق</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {cart.length === 0 ? (
              <div className="text-center py-8 animate-fade-in">
                <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground font-arabic text-lg">السلة فارغة</p>
                <p className="text-sm text-muted-foreground font-arabic mt-2">ابدئي التسوق لإضافة منتجات</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 space-x-reverse p-4 border rounded-lg transition-all duration-300 hover:shadow-md hover:border-primary/30 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1 text-right">
                      <h4 className="font-medium font-arabic text-sm md:text-base">{item.name}</h4>
                      <p className="text-primary font-bold">{item.price} DH</p>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent hover:bg-secondary/20 transition-all duration-200"
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity || 1}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent hover:bg-secondary/20 transition-all duration-200"
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:bg-destructive/10 transition-all duration-200"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t pt-4 space-y-4 animate-slide-up">
              <div className="flex justify-between items-center text-lg font-bold bg-muted/50 p-3 rounded-lg">
                <span className="text-primary">{getTotalPrice()} DH</span>
                <span className="font-arabic">المجموع:</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-arabic text-lg py-3 transition-all duration-300 hover:scale-105"
              >
                إتمام الشراء
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
