"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import ProductCard from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

// Sample products data
const products = [
  {
    id: 1,
    name: "حجاب حريري أزرق أنيق",
    price: 120,
    image: "/elegant-blue-silk-hijab.jpg",
    category: "حريري",
    color: "أزرق",
  },
  {
    id: 2,
    name: "حجاب قطني وردي ناعم",
    price: 85,
    image: "/soft-pink-cotton-hijab.jpg",
    category: "قطني",
    color: "وردي",
  },
  {
    id: 3,
    name: "حجاب شيفون أبيض أنيق",
    price: 95,
    image: "/elegant-white-chiffon-hijab.jpg",
    category: "شيفون",
    color: "أبيض",
  },
  {
    id: 4,
    name: "حجاب مطرز بالذهب",
    price: 180,
    image: "/embroidered-gold-hijab.jpg",
    category: "مطرز",
    color: "ذهبي",
  },
  {
    id: 5,
    name: "حجاب ساتان أحمر",
    price: 110,
    image: "/red-satin-hijab.jpg",
    category: "ساتان",
    color: "أحمر",
  },
  {
    id: 6,
    name: "حجاب صيفي أخضر",
    price: 75,
    image: "/summer-green-hijab.jpg",
    category: "صيفي",
    color: "أخضر",
  },
  {
    id: 31,
    name: "حجاب أورجانزا وردي باهت",
    price: 165,
    image: "/pale-pink-organza-hijab.jpg",
    category: "أورجانزا",
    color: "وردي",
  },
  {
    id: 32,
    name: "حجاب مودال أزرق سماوي",
    price: 95,
    image: "/sky-blue-modal-hijab.jpg",
    category: "مودال",
    color: "أزرق",
  },
  {
    id: 33,
    name: "حجاب مطرز بالخرز كريمي",
    price: 185,
    image: "/beaded-cream-hijab.jpg",
    category: "مطرز",
    color: "كريمي",
  },
  {
    id: 34,
    name: "حجاب جيرسي رمادي أنثراسيت",
    price: 75,
    image: "/anthracite-jersey-hijab.jpg",
    category: "جيرسي",
    color: "رمادي",
  },
  {
    id: 35,
    name: "حجاب تول أبيض لؤلؤي",
    price: 140,
    image: "/pearl-white-tulle-hijab.jpg",
    category: "تول",
    color: "أبيض",
  },
  {
    id: 101,
    name: "حجاب حرير فاخر - أزرق",
    price: 120,
    image: "/luxury-blue-silk-hijab.jpg",
    category: "حرير",
    color: "أزرق",
  },
  {
    id: 102,
    name: "حجاب قطني ناعم - وردي",
    price: 80,
    image: "/soft-pink-cotton-hijab.jpg",
    category: "قطن",
    color: "وردي",
  },
  {
    id: 103,
    name: "حجاب شيفون أنيق - أسود",
    price: 100,
    image: "/elegant-black-chiffon-hijab.jpg",
    category: "شيفون",
    color: "أسود",
  },
  {
    id: 104,
    name: "حجاب مودال فاخر - بيج",
    price: 150,
    image: "/luxury-beige-modal-hijab.jpg",
    category: "مودال",
    color: "بيج",
  },
  {
    id: 105,
    name: "حجاب جيرسي مريح - رمادي",
    price: 90,
    image: "/comfortable-gray-jersey-hijab.jpg",
    category: "جيرسي",
    color: "رمادي",
  },
  {
    id: 106,
    name: "حجاب أورجانزا راقي - ذهبي",
    price: 180,
    image: "/elegant-gold-organza-hijab.jpg",
    category: "أورجانزا",
    color: "ذهبي",
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedColor, setSelectedColor] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" || product.category === selectedCategory) &&
        (selectedColor === "all" || product.color === selectedColor),
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      return a.name.localeCompare(b.name)
    })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
            مجموعة المنتجات
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-arabic animate-bounce-in">
            اكتشفي أجمل مجموعة من الحجابات العصرية والأنيقة
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحثي عن المنتج..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 text-right"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="الفئة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الفئات</SelectItem>
                  <SelectItem value="حريري">حريري</SelectItem>
                  <SelectItem value="قطني">قطني</SelectItem>
                  <SelectItem value="شيفون">شيفون</SelectItem>
                  <SelectItem value="مطرز">مطرز</SelectItem>
                  <SelectItem value="ساتان">ساتان</SelectItem>
                  <SelectItem value="أورجانزا">أورجانزا</SelectItem>
                  <SelectItem value="مودال">مودال</SelectItem>
                  <SelectItem value="جيرسي">جيرسي</SelectItem>
                  <SelectItem value="تول">تول</SelectItem>
                  <SelectItem value="حرير">حرير</SelectItem>
                  <SelectItem value="قطن">قطن</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="اللون" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الألوان</SelectItem>
                  <SelectItem value="أزرق">أزرق</SelectItem>
                  <SelectItem value="وردي">وردي</SelectItem>
                  <SelectItem value="أبيض">أبيض</SelectItem>
                  <SelectItem value="ذهبي">ذهبي</SelectItem>
                  <SelectItem value="أحمر">أحمر</SelectItem>
                  <SelectItem value="أخضر">أخضر</SelectItem>
                  <SelectItem value="كريمي">كريمي</SelectItem>
                  <SelectItem value="رمادي">رمادي</SelectItem>
                  <SelectItem value="أسود">أسود</SelectItem>
                  <SelectItem value="بيج">بيج</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="ترتيب حسب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">الاسم</SelectItem>
                  <SelectItem value="price-low">السعر: من الأقل</SelectItem>
                  <SelectItem value="price-high">السعر: من الأعلى</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-arabic">لا توجد منتجات</h3>
              <p className="text-muted-foreground font-arabic">جربي تغيير معايير البحث</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
