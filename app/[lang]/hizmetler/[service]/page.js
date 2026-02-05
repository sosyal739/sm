'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowLeft, Phone, MessageCircle, TrendingUp, Users, Award, Eye, Target, Zap } from 'lucide-react'

export default function ServiceDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { service } = params

  // Google Ads verisi
  const googleAdsData = {
    title: 'Google Ads Yönetimi',
    subtitle: 'Maksimum ROI ile Profesyonel Google Reklamcılığı',
    color: '#4285F4',
    stats: [
      { value: '+250%', label: 'Ortalama ROI Artışı' },
      { value: '500+', label: 'Başarılı Kampanya' },
      { value: '%98', label: 'Müşteri Memnuniyeti' },
      { value: '24/7', label: 'Kampanya İzleme' }
    ],
    features: [
      {
        title: 'Arama Ağı Reklamları',
        desc: 'Müşterilerin aktif aradığı anda karşılarına çıkın',
        items: ['Anahtar kelime araştırması', 'Teklif optimizasyonu', 'A/B testing', 'Kalite skoru iyileştirme']
      },
      {
        title: 'Display Reklamları',
        desc: '2M+ web sitesinde görsel reklamlar',
        items: ['Banner tasarım', 'Remarketing', 'Responsive ads', 'Hedef kitle segmentasyonu']
      },
      {
        title: 'Shopping Reklamları',
        desc: 'E-ticaret için ürün reklamları',
        items: ['Merchant Center', 'Feed optimizasyonu', 'ROAS optimizasyonu', 'Ürün segmentasyonu']
      },
      {
        title: 'YouTube Video Reklamları',
        desc: 'Video içeriklerle milyonlara ulaşın',
        items: ['TrueView reklamlar', 'Bumper ads', 'Video remarketing', 'YouTube kanal büyütme']
      },
      {
        title: 'Performance Max',
        desc: 'AI destekli otomatik optimizasyon',
        items: ['Çoklu kanal', 'AI hedef kitle', 'Otomatik varyasyonlar', 'Gerçek zamanlı optimizasyon']
      },
      {
        title: 'Yerel Kampanyalar',
        desc: 'Google Maps ve yerel aramalarda öne çıkın',
        items: ['Google My Business', 'Store visits', 'Yerel envanter', 'Konum hedefleme']
      }
    ]
  }

  const data = googleAdsData

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push('/')} className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Geri</span>
            </button>
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04] bg-clip-text text-transparent">
              Salih Maral
            </a>
            <Button size="sm" variant="outline" asChild>
              <a href="tel:+491724106463"><Phone className="h-4 w-4 mr-2" />Ara</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#4285F4] to-[#34A853] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-24 h-24 mx-auto" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="white"/>
                <path d="M24 10L16 26H21L19 34L32 18H27L29 10H24Z" fill="#4285F4"/>
              </svg>
            </div>

            <h1 className="text-6xl font-bold mb-6">{data.title}</h1>
            <p className="text-2xl mb-8 opacity-90">{data.subtitle}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {data.stats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Button size="lg" className="bg-white text-[#4285F4] hover:bg-gray-100 shadow-xl" asChild>
                <a href="https://wa.me/491724106463" target="_blank"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Ücretsiz Teklif
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Google Ads Kampanya Türleri</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {data.features.map((f, i) => (
              <Card key={i} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-[#4285F4]">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-4 rounded-xl bg-[#4285F4]/10">
                      <Target className="h-12 w-12 text-[#4285F4]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-[#4285F4]">{f.title}</h3>
                      <p className="text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {f.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                        <CheckCircle className="h-5 w-5 text-[#4285F4] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Çalışma Sürecimiz</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Keşif & Strateji', 'Kampanya Kurulumu', 'Optimizasyon', 'Raporlama'].map((step, i) => (
              <Card key={i} className="text-center hover:shadow-xl transition-all">
                <CardContent className="pt-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853] flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#4285F4] to-[#34A853] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Google Ads ile Büyümeye Başlayın</h2>
          <p className="text-xl mb-8 opacity-90">Ücretsiz analiz için hemen iletişime geçin</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#4285F4] shadow-2xl" asChild>
              <a href="tel:+491724106463"><Phone className="mr-2 h-5 w-5" />01724106463</a>
            </Button>
            <Button size="lg" className="bg-[#34A853] text-white shadow-2xl" asChild>
              <a href="https://wa.me/491724106463" target="_blank"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gray-900 text-white text-center">
        <p className="text-sm text-gray-400">© 2026 Salih Maral</p>
      </footer>
    </div>
  )
}
