"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  const sendWhatsAppMessage = (messageType: "general" | "product" | "support") => {
    const whatsappNumber = "0601449135"
    let message = ""

    switch (messageType) {
      case "general":
        message = "مرحباً أسما، أريد التواصل معك بخصوص منتجات أناقة الحجاب 🌸"
        break
      case "product":
        message = "مرحباً أسما، أريد الاستفسار عن منتج معين من مجموعة أناقة الحجاب 🛍️"
        break
      case "support":
        message = "مرحباً أسما، أحتاج مساعدة بخصوص طلبي أو استفسار عام 💬"
        break
    }

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-xl border p-4 w-64 animate-bounce-in">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm font-arabic">تواصلي معنا</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-right font-arabic bg-transparent hover:bg-primary/10 transition-all duration-300"
                onClick={() => sendWhatsAppMessage("general")}
              >
                استفسار عام
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-right font-arabic bg-transparent hover:bg-secondary/10 transition-all duration-300"
                onClick={() => sendWhatsAppMessage("product")}
              >
                سؤال عن منتج
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-right font-arabic bg-transparent hover:bg-accent/10 transition-all duration-300"
                onClick={() => sendWhatsAppMessage("support")}
              >
                دعم فني
              </Button>
            </div>
          </div>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-in"
        >
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </div>
    </>
  )
}
