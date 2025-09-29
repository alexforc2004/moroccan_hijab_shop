"use client"

import Header from "@/components/header"
import ProductCard from "@/components/product-card"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Star, Sparkles, ShoppingBag, Heart } from "lucide-react"
import Link from "next/link"

// Sample products data
const products = [
  { id: 1, name: "حجاب حرير أنيق - أزرق", price: 120, image: "/elegant-blue-silk-hijab.jpg" },
  { id: 2, name: "حجاب قطني ناعم - وردي", price: 85, image: "/soft-pink-cotton-hijab.jpg" },
  { id: 3, name: "حجاب شيفون راقي - أبيض", price: 95, image: "/elegant-white-chiffon-hijab.jpg" },
  { id: 4, name: "حجاب مطرز - ذهبي", price: 150, image: "/embroidered-gold-hijab.jpg" },
  { id: 5, name: "حجاب كاجوال - أسود", price: 70, image: "/casual-black-hijab.jpg" },
  { id: 6, name: "حجاب مخملي - بنفسجي", price: 110, image: "/velvet-purple-hijab.jpg" },
  { id: 7, name: "حجاب صيفي - أخضر", price: 80, image: "/summer-green-hijab.jpg" },
  { id: 8, name: "حجاب رسمي - رمادي", price: 130, image: "/formal-grey-hijab.jpg" },
  { id: 9, name: "حجاب مطبوع - زهري", price: 90, image: "/floral-print-hijab.jpg" },
  { id: 10, name: "حجاب ساتان - أحمر", price: 125, image: "/red-satin-hijab.jpg" },
  { id: 11, name: "حجاب كريب - بيج", price: 100, image: "/beige-crepe-hijab.jpg" },
  { id: 12, name: "حجاب جورجيت - تركوازي", price: 115, image: "/turquoise-georgette-hijab.jpg" },
  { id: 13, name: "حجاب مقلم - أزرق وأبيض", price: 75, image: "/blue-white-striped-hijab.jpg" },
  { id: 14, name: "حجاب منقط - أسود وذهبي", price: 105, image: "/black-gold-polka-dot-hijab.jpg" },
  { id: 15, name: "حجاب شتوي - بني", price: 140, image: "/winter-brown-hijab.jpg" },
  { id: 16, name: "حجاب رياضي - رمادي فاتح", price: 65, image: "/light-gray-sports-hijab.jpg" },
  { id: 17, name: "حجاب مناسبات - فضي", price: 160, image: "/silver-occasion-hijab.jpg" },
  { id: 18, name: "حجاب يومي - كحلي", price: 85, image: "/navy-daily-hijab.jpg" },
  { id: 19, name: "حجاب مخطط - وردي وأبيض", price: 95, image: "/pink-white-striped-hijab.jpg" },
  { id: 20, name: "حجاب حريري - أخضر زيتوني", price: 135, image: "/olive-green-silk-hijab.jpg" },
  { id: 21, name: "حجاب قطني - أصفر فاتح", price: 80, image: "/light-yellow-cotton-hijab.jpg" },
  { id: 22, name: "حجاب شيفون - بنفسجي فاتح", price: 100, image: "/light-purple-chiffon-hijab.jpg" },
  { id: 23, name: "حجاب مطرز - أزرق داكن", price: 145, image: "/dark-blue-embroidered-hijab.jpg" },
  { id: 24, name: "حجاب كاجوال - أخضر فاتح", price: 70, image: "/light-green-casual-hijab.jpg" },
  { id: 25, name: "حجاب مخملي - أحمر داكن", price: 120, image: "/dark-red-velvet-hijab.jpg" },
  { id: 26, name: "حجاب صيفي - أزرق فاتح", price: 75, image: "/light-blue-summer-hijab.jpg" },
  { id: 27, name: "حجاب رسمي - أسود لامع", price: 155, image: "/shiny-black-formal-hijab.jpg" },
  { id: 28, name: "حجاب مطبوع - ورود حمراء", price: 110, image: "/red-roses-printed-hijab.jpg" },
  { id: 29, name: "حجاب ساتان - ذهبي فاتح", price: 130, image: "/light-gold-satin-hijab.jpg" },
  { id: 30, name: "حجاب كريب - أرجواني", price: 105, image: "/purple-crepe-hijab.jpg" },
  { id: 31, name: "حجاب أورجانزا - وردي باهت", price: 165, image: "/pale-pink-organza-hijab.jpg" },
  { id: 32, name: "حجاب مودال - أزرق سماوي", price: 95, image: "/sky-blue-modal-hijab.jpg" },
  { id: 33, name: "حجاب مطرز بالخرز - كريمي", price: 185, image: "/beaded-cream-hijab.jpg" },
  { id: 34, name: "حجاب جيرسي - رمادي أنثراسيت", price: 75, image: "/anthracite-jersey-hijab.jpg" },
  { id: 35, name: "حجاب تول - أبيض لؤلؤي", price: 140, image: "/pearl-white-tulle-hijab.jpg" },
]

// Fake reviews in Darija
const reviews = [
  { name: "فاطمة", rating: 5, comment: "والله حجابات زوينين بزاف، الجودة ممتازة والألوان زاهية" },
  { name: "خديجة", rating: 4.5, comment: "أسما ديما كتعطي أحسن الحجابات، راني راضية بزاف" },
  { name: "مريم", rating: 5, comment: "الحجاب وصل فالوقت والجودة فوق التوقعات، شكرا أسما" },
  { name: "زينب", rating: 4.5, comment: "حجابات راقية وأسعار معقولة، كنصح بيها كل البنات" },
  { name: "سعاد", rating: 5, comment: "الخدمة ممتازة والحجابات جميلة، الله يعطيك الصحة أسما" },
  { name: "نادية", rating: 4.5, comment: "كل مرة كنشري من عندها كنلقى الجودة والذوق الراقي" },
  { name: "حنان", rating: 5, comment: "أحسن محل للحجابات فالرباط، كنصح بيه كل وحدة" },
  { name: "ليلى", rating: 4.5, comment: "الحجابات ناعمين والألوان حلوة، راني مبسوطة بالشراء" },
  { name: "عائشة", rating: 5, comment: "أسما عندها ذوق راقي فاختيار الحجابات، كل شي عندها زوين" },
  { name: "رقية", rating: 4.5, comment: "التوصيل سريع والحجابات بجودة عالية، بارك الله فيك" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex flex-col justify-center items-center text-center py-20 md:py-32 relative">
        <div className="mb-8 z-10">
          <img
            src="/log.png"
            alt="Hijab Elegance Logo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto shadow-2xl border-4 border-white animate-bounce-in"
          />
        </div>
        
        {/* الفقرة */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty font-arabic animate-slide-up z-10">
          وجهتك للعبايات الفاخرة والجودة المضمونة
        </p>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in z-10">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 font-arabic transition-all duration-300 hover:scale-105"
            >
              <ShoppingBag className="h-5 w-5 ml-2" />
              تسوقي الآن
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 font-arabic border-2 hover:bg-primary/10 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Heart className="h-5 w-5 ml-2" />
              تواصلي معنا
            </Button>
          </Link>
        </div>

        {/* overlay optional لتفتيح الصورة على الخلفية */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">منتجاتنا المميزة</h2>
            <p className="text-muted-foreground font-arabic max-w-2xl mx-auto">
              مجموعة متنوعة من أجمل الحجابات بأفضل الأسعار وأعلى جودة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard id={product.id} name={product.name} price={product.price} image={product.image} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="font-arabic hover:bg-primary/10 transition-all duration-300 hover:scale-105 bg-transparent"
              >
                عرض جميع المنتجات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-muted/50 to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">آراء عملائنا</h2>
            <p className="text-muted-foreground font-arabic">ما يقوله عملاؤنا الكرام عن تجربتهم معنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-slide-up border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(review.rating)
                            ? "text-yellow-400 fill-current"
                            : i < review.rating
                              ? "text-yellow-400 fill-current opacity-50"
                              : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="mr-2 text-sm text-muted-foreground font-bold">{review.rating}</span>
                </div>
                <p className="text-foreground mb-4 text-right font-arabic leading-relaxed">{review.comment}</p>
                <p className="text-primary font-medium text-right font-arabic">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
