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
        title: 'Arama Ağı Reklamları (Search Ads)',
        desc: 'Müşterileriniz Google\'da arama yaptığında tam onların karşısına çıkın. Kullanıcıların satın alma niyeti en yüksek olduğu anda, aradıkları kelimelerle reklamınız görünsün. Yüksek kalite skoruyla düşük maliyetle maksimum dönüşüm.',
        icon: '🎯',
        color: '#4285F4',
        items: ['Hedefli anahtar kelime araştırması', 'Teklif ve bütçe optimizasyonu', 'A/B test ile reklam metni geliştirme', 'Kalite skoru iyileştirme', 'Negatif kelime yönetimi', 'Coğrafi hedefleme']
      },
      {
        title: 'Display Ağı Reklamları',
        desc: 'Google\'ın ortağı 2 milyondan fazla web sitesi ve uygulamada görsel banner reklamlarınız görünsün. YouTube, Gmail ve milyonlarca popüler sitede potansiyel müşterilerinize ulaşın. Remarketing ile ziyaretçilerinizi geri çağırın.',
        icon: '🖼️',
        color: '#FBBC04',
        items: ['Banner tasarım ve optimizasyon', 'Remarketing kampanyaları', 'Responsive display ads', 'Hedef kitle segmentasyonu', 'Placement stratejisi', 'Frekans capping']
      },
      {
        title: 'Shopping Reklamları',
        desc: 'E-ticaret siteniz için özel tasarlanmış ürün reklamları. Müşteriler Google\'da ürün aradığında, ürün fotoğrafı, fiyat, mağaza adı ve değerlendirme puanıyla öne çıkın. Görsel alışveriş deneyimiyle dönüşüm oranlarını katlayın.',
        icon: '🛒',
        color: '#34A853',
        items: ['Merchant Center kurulum', 'Ürün feed optimizasyonu', 'ROAS optimizasyonu', 'Otomatik teklif stratejileri', 'Ürün grupları segmentasyonu', 'Rekabetçi fiyat analizi']
      },
      {
        title: 'YouTube Video Reklamları',
        desc: 'Dünyanın en büyük video platformunda milyarlarca izlenmeye ulaşın. Video içeriklerinizle hikaye anlatın, marka bilinirliği yaratın ve dönüşüm sağlayın. İzleyicilerin ilgisine göre hedefleme yaparak maksimum etki yaratın.',
        icon: '📺',
        color: '#EA4335',
        items: ['TrueView In-Stream (atlanabilir)', 'Bumper ads (6 saniye)', 'Discovery reklamlar', 'Video remarketing', 'YouTube analytics', 'Kanalı büyütme stratejisi']
      },
      {
        title: 'Performance Max Kampanyaları',
        desc: 'Google\'ın yapay zeka teknolojisiyle tüm Google platformlarında (Arama, Display, YouTube, Gmail, Discover, Maps) otomatik optimizasyon. AI, en yüksek dönüşüm potansiyeli olan yerlerde reklamlarınızı gösterir. Maksimum performans, minimum efor.',
        icon: '⚡',
        color: '#4285F4',
        items: ['AI destekli multi-kanal', 'Otomatik hedef kitle bulma', 'Dinamik reklam oluşturma', 'Gerçek zamanlı optimizasyon', 'Dönüşüm maksimizasyonu', 'Kapsamlı raporlama']
      },
      {
        title: 'Yerel Kampanyalar (Local Ads)',
        desc: 'Fiziksel mağazanız veya ofis varsa, Google Maps\'te ve yerel aramalarda öne çıkın. Yakınınızdaki müşteriler sizi aradığında hemen görünsün. Mağaza ziyareti artırın, telefon araması alın, yol tarifi isteyenlere ulaşın.',
        icon: '📍',
        color: '#34A853',
        items: ['Google My Business optimizasyonu', 'Store visits takibi', 'Yerel envanter reklamları', 'Konum uzantıları', 'Çağrı uzantıları', 'Yakınlık bazlı hedefleme']
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
            {data.features.map((f, i) => {
              // Her kampanya tipi için farklı ikonlar
              const icons = [
                { emoji: '🔍', bg: 'bg-[#4285F4]/10', color: 'text-[#4285F4]' },
                { emoji: '🖼️', bg: 'bg-[#FBBC04]/10', color: 'text-[#FBBC04]' },
                { emoji: '🛍️', bg: 'bg-[#34A853]/10', color: 'text-[#34A853]' },
                { emoji: '📹', bg: 'bg-[#EA4335]/10', color: 'text-[#EA4335]' },
                { emoji: '⚡', bg: 'bg-[#4285F4]/10', color: 'text-[#4285F4]' },
                { emoji: '📍', bg: 'bg-[#34A853]/10', color: 'text-[#34A853]' }
              ]
              const icon = icons[i]
              
              return (
                <Card key={i} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-[#4285F4]">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`p-6 rounded-2xl ${icon.bg} text-6xl flex items-center justify-center`}>
                        {icon.emoji}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-[#4285F4]">{f.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {f.items.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${icon.color}`} />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Çalışma Sürecimiz</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            15 yıllık tecrübemizle, her projeyi sistematik ve şeffaf bir süreçle yönetiyoruz
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                title: 'Keşif & Strateji', 
                desc: 'İşletmenizi, hedeflerinizi ve rakiplerinizi analiz ederek özel bir dijital pazarlama stratejisi oluşturuyoruz.',
                icon: '🎯'
              },
              { 
                title: 'Kampanya Kurulumu', 
                desc: 'Google Ads hesabınızı optimize ediyor, hedef kitleler belirleniyor ve etkili reklam metinleri yazıyoruz.',
                icon: '⚙️'
              },
              { 
                title: 'Optimizasyon', 
                desc: 'Kampanyalarınızı 7/24 izliyor, teklif ayarlamaları yapıyor ve A/B testleriyle performansı artırıyoruz.',
                icon: '📈'
              },
              { 
                title: 'Raporlama', 
                desc: 'Haftalık ve aylık detaylı raporlarla ROI, dönüşüm ve maliyet verilerini şeffaf şekilde paylaşıyoruz.',
                icon: '📊'
              }
            ].map((step, i) => (
              <Card key={i} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-[#4285F4]">
                <CardContent className="pt-8 pb-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853] flex items-center justify-center shadow-lg">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#4285F4]">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#4285F4] via-[#FBBC04] to-[#34A853] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Google Ads ile Büyümeye Başlayın</h2>
          <p className="text-xl mb-4 opacity-90">Ücretsiz analiz ve teklif için hemen iletişime geçin</p>
          <p className="text-lg mb-8 opacity-80">15 yıllık tecrübe • 500+ başarılı kampanya • %98 müşteri memnuniyeti</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#4285F4] hover:bg-gray-100 shadow-2xl transition-all duration-300 hover:scale-105" asChild>
              <a href="mailto:kontakt@salihmaral.de">
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                E-posta Gönder
              </a>
            </Button>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-2xl transition-all duration-300 hover:scale-105" asChild>
              <a href="https://wa.me/491724106463?text=Merhaba,%20Google%20Ads%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp ile Yaz
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 shadow-2xl transition-all duration-300 hover:scale-105" asChild>
              <a href="tel:+491724106463">
                <Phone className="mr-2 h-5 w-5" />
                Hemen Ara
              </a>
            </Button>
          </div>
          <p className="mt-8 text-sm opacity-70">kontakt@salihmaral.de • +49 172 410 6463</p>
        </div>
      </section>

      <footer className="py-12 bg-gray-900 text-white text-center">
        <p className="text-sm text-gray-400">© 2026 Salih Maral</p>
      </footer>
    </div>
  )
}
