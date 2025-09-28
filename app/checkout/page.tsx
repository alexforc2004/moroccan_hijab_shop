"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useStore } from "@/lib/store"
import { MapPin, Phone, Mail, User, Copy, MessageCircle } from "lucide-react"

interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  deliveryOption: "rabat" | "other"
}

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useStore()
  const router = useRouter()
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    deliveryOption: "rabat",
  })
  const [showOrderSummary, setShowOrderSummary] = useState(false)
  const [orderText, setOrderText] = useState("")

  const deliveryFee = customerInfo.deliveryOption === "rabat" ? 0 : 50
  const totalPrice = getTotalPrice() + deliveryFee

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }))
  }

  const generateOrderText = () => {
    const orderItems = cart
      .map((item) => `• ${item.name} - الكمية: ${item.quantity} - السعر: ${item.price * (item.quantity || 1)} DH`)
      .join("\n")

    const deliveryText =
      customerInfo.deliveryOption === "rabat" ? "التوصيل مجاني (الرباط)" : `رسوم التوصيل: ${deliveryFee} DH`

    return `🌸 طلب جديد من أناقة الحجاب 🌸

👤 معلومات العميلة:
الاسم: ${customerInfo.firstName} ${customerInfo.lastName}
البريد الإلكتروني: ${customerInfo.email}
رقم الهاتف: ${customerInfo.phone}
العنوان: ${customerInfo.address}
المدينة: ${customerInfo.city}

🛍️ تفاصيل الطلب:
${orderItems}

💰 ملخص الفاتورة:
المجموع الفرعي: ${getTotalPrice()} DH
${deliveryText}
المجموع الإجمالي: ${totalPrice} DH

💳 طريقة الدفع: الدفع عند الاستلام

شكراً لاختياركم أناقة الحجاب! 💕`
  }

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault()

    if (cart.length === 0) {
      alert("السلة فارغة!")
      return
    }

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "email", "phone", "address", "city"]
    const missingFields = requiredFields.filter((field) => !customerInfo[field as keyof CustomerInfo])

    if (missingFields.length > 0) {
      alert("يرجى ملء جميع الحقول المطلوبة")
      return
    }

    const orderSummary = generateOrderText()
    setOrderText(orderSummary)
    setShowOrderSummary(true)
  }

  const copyOrderText = () => {
    navigator.clipboard.writeText(orderText)
    alert("تم نسخ تفاصيل الطلب!")
  }

  const sendWhatsApp = () => {
    const whatsappNumber = "0601449135"
    const encodedMessage = encodeURIComponent(orderText)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")

    // Clear cart after sending to WhatsApp
    clearCart()

    // Redirect to home page after a short delay
    setTimeout(() => {
      router.push("/")
    }, 2000)
  }

  if (cart.length === 0 && !showOrderSummary) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4 font-arabic">السلة فارغة</h1>
          <p className="text-muted-foreground mb-8 font-arabic">يرجى إضافة منتجات إلى السلة أولاً</p>
          <Button onClick={() => router.push("/")} className="font-arabic">
            العودة للتسوق
          </Button>
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    )
  }

  if (showOrderSummary) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center font-arabic text-2xl">ملخص الطلب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted p-4 rounded-lg">
                <pre className="whitespace-pre-wrap text-sm font-arabic text-right">{orderText}</pre>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={copyOrderText} variant="outline" className="flex-1 font-arabic bg-transparent">
                  <Copy className="h-4 w-4 ml-2" />
                  نسخ تفاصيل الطلب
                </Button>

                <Button
                  onClick={sendWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-arabic"
                >
                  <MessageCircle className="h-4 w-4 ml-2" />
                  إرسال عبر واتساب
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground font-arabic">
                انقري على "نسخ تفاصيل الطلب" ثم "إرسال عبر واتساب" للتواصل مع أسما
              </p>
            </CardContent>
          </Card>
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 font-arabic">إتمام الطلب</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Information Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-arabic">معلومات العميلة</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitOrder} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-arabic">
                      الاسم الأول *
                    </Label>
                    <div className="relative">
                      <User className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        type="text"
                        value={customerInfo.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="pr-10 text-right"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-arabic">
                      اسم العائلة *
                    </Label>
                    <div className="relative">
                      <User className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="lastName"
                        type="text"
                        value={customerInfo.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="pr-10 text-right"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-arabic">
                    البريد الإلكتروني *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pr-10 text-right"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-arabic">
                    رقم الهاتف *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pr-10 text-right"
                      placeholder="06xxxxxxxx"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="font-arabic">
                    العنوان الكامل *
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      id="address"
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="pr-10 text-right min-h-[80px]"
                      placeholder="الشارع، الحي، المدينة..."
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="font-arabic">
                    المدينة *
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    value={customerInfo.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="text-right"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label className="font-arabic">خيارات التوصيل</Label>
                  <RadioGroup
                    value={customerInfo.deliveryOption}
                    onValueChange={(value) => handleInputChange("deliveryOption", value)}
                  >
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="rabat" id="rabat" />
                      <Label htmlFor="rabat" className="font-arabic">
                        توصيل مجاني داخل الرباط
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="font-arabic">
                        توصيل خارج الرباط (50 DH)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 font-arabic">طريقة الدفع</h3>
                  <p className="text-sm text-muted-foreground font-arabic">الدفع عند الاستلام (نقداً)</p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-arabic"
                >
                  تأكيد الطلب
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="font-arabic">ملخص الطلب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 space-x-reverse">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1 text-right">
                    <h4 className="font-medium font-arabic">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">الكمية: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{item.price * (item.quantity || 1)} DH</p>
                  </div>
                </div>
              ))}

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>{getTotalPrice()} DH</span>
                  <span className="font-arabic">المجموع الفرعي:</span>
                </div>
                <div className="flex justify-between">
                  <span>{deliveryFee} DH</span>
                  <span className="font-arabic">رسوم التوصيل:</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>{totalPrice} DH</span>
                  <span className="font-arabic">المجموع الإجمالي:</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
