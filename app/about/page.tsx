import { Calendar, Heart, Shield, Truck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 font-arabic">تأسست في 2025</Badge>
            <h1 className="text-5xl font-bold text-gray-800 mb-6 font-arabic">حجاب إليجانس</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-arabic">
              متجرك المتخصص في عالم الحجاب والأزياء المحتشمة، حيث نجمع بين الأناقة والجودة لنقدم لك أجمل التصاميم التي
              تعكس شخصيتك المميزة
            </p>
          </div>

          {/* Mission Section */}
          <Card className="mb-12 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl text-center font-arabic">رسالتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 text-center leading-relaxed font-arabic">
                نسعى لأن نكون الوجهة الأولى للمرأة العربية في عالم الحجاب والأزياء المحتشمة، من خلال تقديم منتجات عالية
                الجودة بتصاميم عصرية تواكب أحدث صيحات الموضة، مع الحفاظ على القيم والتقاليد الأصيلة
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-arabic">صنع بحب</h3>
                <p className="text-gray-600 font-arabic">كل قطعة مصنوعة بعناية فائقة وحب لتناسب ذوقك الرفيع</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-arabic">جودة مضمونة</h3>
                <p className="text-gray-600 font-arabic">نستخدم أجود الخامات لضمان الراحة والمتانة</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Truck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-arabic">توصيل سريع</h3>
                <p className="text-gray-600 font-arabic">توصيل مجاني في الرباط وتوصيل سريع لجميع أنحاء المغرب</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-arabic">تصاميم حديثة</h3>
                <p className="text-gray-600 font-arabic">نواكب أحدث صيحات الموضة العالمية والمحلية</p>
              </CardContent>
            </Card>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-arabic">قصتنا</h2>
              <div className="space-y-4 text-gray-700 font-arabic">
                <p className="leading-relaxed">
                  بدأت رحلتنا في عام 2025 برؤية واضحة: تقديم أجمل وأرقى أنواع الحجابات والأزياء المحتشمة للمرأة العربية.
                  انطلقنا من إيماننا العميق بأن الأناقة والاحتشام يمكن أن يجتمعا في تناغم مثالي.
                </p>
                <p className="leading-relaxed">
                  نحن فريق من المصممين والحرفيين المتخصصين الذين يعملون بشغف لابتكار تصاميم فريدة تعكس جمال وأناقة
                  المرأة المسلمة المعاصرة.
                </p>
                <p className="leading-relaxed">
                  اليوم، نفخر بخدمة آلاف العميلات في جميع أنحاء المنطقة، ونسعى دائماً لتطوير منتجاتنا وخدماتنا لنبقى في
                  المقدمة.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/elegant-hijab-store-interior-with-beautiful-displa.jpg"
                alt="متجر حجاب إليجانس"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Values Section */}
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8 font-arabic">قيمنا</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 font-arabic">الجودة</h3>
                  <p className="font-arabic">نلتزم بأعلى معايير الجودة في كل منتج نقدمه</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 font-arabic">الأصالة</h3>
                  <p className="font-arabic">نحافظ على التراث والقيم الأصيلة في تصاميمنا</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 font-arabic">الابتكار</h3>
                  <p className="font-arabic">نبتكر دائماً لنقدم الأفضل والأحدث لعميلاتنا</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4 font-arabic">تواصلي معنا</h2>
            <p className="text-lg text-gray-600 mb-6 font-arabic">نحن هنا لخدمتك ومساعدتك في اختيار ما يناسبك</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-arabic"
              >
                اتصلي بنا
              </a>
              <a
                href="/products"
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-arabic"
              >
                تسوقي الآن
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
