"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartDrawer from "./cart-drawer"
import WishlistDrawer from "./wishlist-drawer"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <Image src="/logo.png" alt="Hijab Elegance" width={60} height={60} className="rounded-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-all duration-300 font-arabic hover:scale-105"
            >
              الرئيسية
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition-all duration-300 font-arabic hover:scale-105"
            >
              المنتجات
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-all duration-300 font-arabic hover:scale-105"
            >
              من نحن
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 font-arabic hover:scale-105"
            >
              اتصل بنا
            </Link>
          </nav>

          {/* Cart and Wishlist */}
          <div className="flex items-center gap-4">
            <WishlistDrawer />
            <CartDrawer />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-arabic py-2 px-4 rounded-lg hover:bg-primary/10"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-colors font-arabic py-2 px-4 rounded-lg hover:bg-primary/10"
                onClick={() => setIsMenuOpen(false)}
              >
                المنتجات
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-arabic py-2 px-4 rounded-lg hover:bg-primary/10"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors font-arabic py-2 px-4 rounded-lg hover:bg-primary/10"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
