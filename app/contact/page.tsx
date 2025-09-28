"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Star } from "lucide-react"

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      const emailSubject = encodeURIComponent(`رسالة من موقع أناقة الحجاب: ${formData.subject}`)
      const emailBody = encodeURIComponent(`
الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}
الموضوع: ${formData.subject}

الرسالة:
${formData.message}

---
تم إرسال هذه الرسالة من موقع أناقة الحجاب
      `)

      // Open Gmail directly
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=asma_designer@outlook.com&su=${emailSubject}&body=${emailBody}`
      window.open(gmailUrl, "_blank")

      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const sendWhatsAppMessage = () => {
    const whatsappNumber = "0601449135"
    const message = encodeURIComponent(`مرحباً أسما، أريد التواصل معك بخصوص منتجات أناقة الحجاب`)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
            تواصلي معنا
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-arabic animate-bounce-in">
            نحن هنا للإجابة على جميع استفساراتك وتقديم أفضل خدمة لك
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="font-arabic text-2xl">أرسلي لنا رسالة</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8 animate-bounce-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-arabic">تم إرسال الرسالة بنجاح!</h3>
                  <p className="text-muted-foreground font-arabic">سيتم فتح Gmail لإرسال رسالتك إلى أسما</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-arabic">
                      الاسم الكامل *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="text-right transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-arabic">
                      البريد الإلكتروني *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="text-right transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-arabic">
                      رقم الهاتف
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="text-right transition-all duration-300 focus:scale-105"
                      placeholder="06xxxxxxxx"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-arabic">
                      الموضوع *
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="text-right transition-all duration-300 focus:scale-105"
                      placeholder="استفسار عن المنتجات، شكوى، اقتراح..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-arabic">
                      الرسالة *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="text-right min-h-[120px] transition-all duration-300 focus:scale-105"
                      placeholder="اكتبي رسالتك هنا..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-arabic transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="font-arabic text-2xl">معلومات التواصل</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-semibold font-arabic">البريد الإلكتروني</h3>
                    <p className="text-muted-foreground">asma_designer@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-semibold font-arabic">رقم الهاتف</h3>
                    <p className="text-muted-foreground">0601449135</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-semibold font-arabic">الموقع</h3>
                    <p className="text-muted-foreground">الرباط، المغرب</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-semibold font-arabic">ساعات العمل</h3>
                    <p className="text-muted-foreground">يومياً من 9 صباحاً إلى 8 مساءً</p>
                  </div>
                </div>

                <Button
                  onClick={sendWhatsAppMessage}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-arabic transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="h-4 w-4 ml-2" />
                  تواصلي عبر واتساب
                </Button>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle className="font-arabic text-2xl">لماذا تختارين أناقة الحجاب؟</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <Star className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div className="text-right">
                    <h4 className="font-semibold font-arabic">جودة عالية</h4>
                    <p className="text-sm text-muted-foreground font-arabic">
                      نختار أفضل الأقمشة والخامات لضمان الراحة والأناقة
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <Star className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div className="text-right">
                    <h4 className="font-semibold font-arabic">تصاميم عصرية</h4>
                    <p className="text-sm text-muted-foreground font-arabic">
                      مواكبة لأحدث صيحات الموضة مع الحفاظ على الطابع المحتشم
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <Star className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div className="text-right">
                    <h4 className="font-semibold font-arabic">خدمة عملاء ممتازة</h4>
                    <p className="text-sm text-muted-foreground font-arabic">
                      نحن هنا لمساعدتك في اختيار ما يناسبك والإجابة على استفساراتك
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 space-x-reverse">
                  <Star className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div className="text-right">
                    <h4 className="font-semibold font-arabic">توصيل سريع</h4>
                    <p className="text-sm text-muted-foreground font-arabic">
                      توصيل مجاني في الرباط وتوصيل سريع لجميع أنحاء المغرب
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12 font-arabic">الأسئلة الشائعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 font-arabic">كيف يمكنني طلب منتج؟</h3>
                <p className="text-muted-foreground text-sm font-arabic">
                  يمكنك إضافة المنتجات إلى السلة والانتقال لصفحة الدفع، أو التواصل معنا مباشرة عبر واتساب
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 font-arabic">ما هي طرق الدفع المتاحة؟</h3>
                <p className="text-muted-foreground text-sm font-arabic">
                  نقبل الدفع عند الاستلام (نقداً) لضمان راحتك وثقتك
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 font-arabic">كم تستغرق عملية التوصيل؟</h3>
                <p className="text-muted-foreground text-sm font-arabic">
                  التوصيل في الرباط خلال 24 ساعة، وباقي المدن خلال 2-3 أيام عمل
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 font-arabic">هل يمكن تبديل العباية ؟ </h3>
                <p className="text-muted-foreground text-sm font-arabic">
                  نعم ، نقبل التبديل خلال 48 ساعة من استلام الطلب ، بشرط أن تبقى القطعة بحالتها الأصلية وغير مستعملة.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
