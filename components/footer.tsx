"use client"

import { Facebook, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  const openWhatsApp = () => {
    const whatsappNumber = "0601449135"
    const message = encodeURIComponent("مرحباً أسما، أريد التواصل معك بخصوص Hijab Elegance 🌸")
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const openFacebook = () => {
    window.open("https://www.facebook.com/share/1BC12YQ7ad/", "_blank")
  }

  const openInstagram = () => {
    window.open("https://www.instagram.com/hijab.elegance.by.asma?igsh=MWJlbDRydmRpejdreg==", "_blank")
  }

  return (
   <footer className="bg-[linear-gradient(135deg,#e0bfc4_0%,#d67d8c_50%,#d6c7c7_100%)] text-white py-12">
  <div className="container mx-auto px-4">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center md:text-right animate-fade-in">
        <h3 className="font-serif text-2xl font-bold mb-4">Hijab Elegance</h3>
        <p className="text-white/90 font-arabic">
          متجرك المفضل للعبايات الأنيقة والعصرية
        </p>
      </div>

      <div className="text-center animate-slide-up">
        <h4 className="font-semibold mb-4 font-arabic">تواصلي معنا</h4>
        <p className="text-white/90 mb-2">asma_designer@outlook.com</p>
        <p className="text-white/90">0601449135</p>
      </div>

      <div className="text-center md:text-left animate-bounce-in">
        <h4 className="font-semibold mb-4 font-arabic">تابعينا</h4>
        <div className="flex justify-center md:justify-start gap-2">
          <button
            onClick={openFacebook}
            className="text-white/90 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-white/20 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </button>
          <button
            onClick={openInstagram}
            className="text-white/90 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-white/20 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </button>
          <button
            onClick={openWhatsApp}
            className="text-white/90 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-white/20 hover:scale-110"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <div className="border-t border-white/20 mt-8 pt-8 text-center">
      <p className="text-white/80 font-arabic">
        © 2025 HIJAB ELEGANCE BY ASMA. جميع الحقوق محفوظة.
      </p>
    </div>
  </div>
</footer>

  )
}
