import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hijab Elegance",
  description: "متجر أناقة الحجاب - أجمل الحجابات والأزياء المحتشمة",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${playfair.variable} ${notoArabic.variable} antialiased`}>
      <body className="font-arabic bg-background text-foreground">{children}</body>
    </html>
  )
}
