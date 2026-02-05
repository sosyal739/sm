'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowLeft, ArrowUpRight, TrendingUp, BarChart3, Target, Search, Image, ShoppingCart, Play, Zap, MapPin } from 'lucide-react'

export default function ServiceDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { service } = params

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Google Ads verisi
  const googleAdsData = {
    title: 'Google Ads Yönetimi',
    subtitle: 'Veri odaklı stratejilerle işletmenizi büyütün',
    description: 'Google\'ın reklam platformunda 15 yıllık deneyimimizle, reklam bütçenizi en verimli şekilde kullanıyor ve ölçülebilir sonuçlar elde ediyoruz.',
    stats: [
      { value: '+250%', label: 'Ortalama ROI Artışı', trend: '+32% geçen aya göre' },
      { value: '500+', label: 'Başarılı Kampanya', trend: 'Aktif yönetim' },
      { value: '%98', label: 'Müşteri Memnuniyeti', trend: 'Son 12 ay' },
      { value: '15+', label: 'Yıllık Deneyim', trend: 'Sertifikalı uzman' }
    ],
    features: [
      {
        title: 'Arama Ağı Reklamları',
        subtitle: 'Search Ads',
        desc: 'Müşterileriniz Google\'da arama yaptığında tam karşılarına çıkın. Satın alma niyeti yüksek kullanıcılara ulaşın.',
        icon: Search,
        items: ['Anahtar kelime araştırması', 'Teklif optimizasyonu', 'A/B test stratejileri', 'Kalite skoru iyileştirme']
      },
      {
        title: 'Display Reklamları',
        subtitle: 'Görsel Ağ',
        desc: '2 milyondan fazla web sitesinde banner reklamlarınızla potansiyel müşterilerinize ulaşın.',
        icon: Image,
        items: ['Banner tasarım', 'Remarketing', 'Hedef kitle segmentasyonu', 'Responsive display ads']
      },
      {
        title: 'Shopping Reklamları',
        subtitle: 'E-Ticaret',
        desc: 'Ürün fotoğrafı, fiyat ve mağaza bilgisiyle Google\'da öne çıkın ve satışlarınızı artırın.',
        icon: ShoppingCart,
        items: ['Merchant Center kurulum', 'Feed optimizasyonu', 'ROAS maksimizasyonu', 'Ürün segmentasyonu']
      },
      {
        title: 'YouTube Reklamları',
        subtitle: 'Video Ads',
        desc: 'Dünyanın en büyük video platformunda milyarlarca izleyiciye hikayenizi anlatın.',
        icon: Play,
        items: ['TrueView reklamlar', 'Bumper ads', 'Discovery reklamlar', 'Video remarketing']
      },
      {
        title: 'Performance Max',
        subtitle: 'AI Destekli',
        desc: 'Google\'ın yapay zekası ile tüm platformlarda otomatik optimizasyon ve maksimum dönüşüm.',
        icon: Zap,
        items: ['Multi-kanal yönetim', 'Otomatik hedefleme', 'Dinamik reklamlar', 'Gerçek zamanlı optimizasyon']
      },
      {
        title: 'Yerel Reklamlar',
        subtitle: 'Local Ads',
        desc: 'Google Maps ve yerel aramalarda öne çıkarak yakınınızdaki müşterilere ulaşın.',
        icon: MapPin,
        items: ['Google My Business', 'Konum hedefleme', 'Store visits takibi', 'Çağrı uzantıları']
      }
    ],
    process: [
      { 
        step: '01',
        title: 'Analiz', 
        desc: 'İşletmenizi, rakiplerinizi ve hedef kitlenizi detaylı analiz ediyoruz.'
      },
      { 
        step: '02',
        title: 'Strateji', 
        desc: 'Veriye dayalı özel bir Google Ads stratejisi oluşturuyoruz.'
      },
      { 
        step: '03',
        title: 'Uygulama', 
        desc: 'Kampanyaları kuruyor, reklam metinlerini ve hedeflemeleri optimize ediyoruz.'
      },
      { 
        step: '04',
        title: 'Optimizasyon', 
        desc: 'Sürekli izleme ve A/B testleriyle performansı maksimize ediyoruz.'
      }
    ]
  }

  const data = googleAdsData

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push('/')} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Ana Sayfa</span>
            </button>
            <a href="/" className="text-xl font-bold text-gray-900">
              Salih Maral
            </a>
            <Button size="sm" className="bg-[#4285F4] hover:bg-[#3367D6] text-white" onClick={scrollToContact}>
              İletişime Geç
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean & Minimal */}
      <section className="pt-28 pb-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Google Ads Badge */}
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4285F4"/>
                <path d="M2 17L12 22L22 17" stroke="#34A853" strokeWidth="2"/>
                <path d="M2 12L12 17L22 12" stroke="#FBBC05" strokeWidth="2"/>
              </svg>
              <span className="text-sm font-medium text-gray-700">Google Partner Sertifikalı</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {data.subtitle}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
              {data.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button size="lg" className="bg-[#4285F4] hover:bg-[#3367D6] text-white px-8 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30" onClick={scrollToContact}>
                Ücretsiz Analiz Al
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                <a href="https://wa.me/491724106463?text=Merhaba,%20Google%20Ads%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="h-4 w-4 text-[#34A853] mr-1" />
                    <span className="text-xs text-[#34A853] font-medium">{stat.trend}</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Clean Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kampanya Türleri</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına göre en uygun Google Ads kampanya türünü belirliyoruz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f, i) => {
              const IconComponent = f.icon
              return (
                <Card key={i} className="bg-[#F8F9FA] border-0 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-[#4285F4]/10 flex items-center justify-center mb-6 group-hover:bg-[#4285F4] transition-colors">
                      <IconComponent className="h-7 w-7 text-[#4285F4] group-hover:text-white transition-colors" />
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs font-medium text-[#4285F4] uppercase tracking-wider mb-1">{f.subtitle}</p>
                      <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
                    </div>
                    
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{f.desc}</p>

                    <div className="space-y-2">
                      {f.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#34A853] flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
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

      {/* Process Section - Minimal */}
      <section className="py-20 px-4 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasıl Çalışıyoruz?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Şeffaf ve sistematik süreçlerimizle başarıya ulaşın
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {data.process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white border-2 border-[#4285F4] flex items-center justify-center shadow-sm">
                  <span className="text-lg font-bold text-[#4285F4]">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Google Partner Sertifikası', desc: 'Google tarafından onaylı resmi partner statüsü' },
                { title: 'Şeffaf Raporlama', desc: 'Haftalık ve aylık detaylı performans raporları' },
                { title: 'Kişiselleştirilmiş Strateji', desc: 'İşletmenize özel hazırlanmış kampanya planları' },
                { title: 'Sürekli Optimizasyon', desc: '7/24 kampanya izleme ve performans iyileştirme' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-[#F8F9FA] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#34A853]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[#34A853]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean */}
      <section id="contact-section" className="py-20 px-4 bg-[#4285F4]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ücretsiz Analiz ile Başlayın
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Mevcut kampanyalarınızı analiz ediyor, iyileştirme önerileri sunuyoruz. Hiçbir ücret veya taahhüt yok.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-white text-[#4285F4] hover:bg-gray-100 px-8 shadow-lg transition-all duration-300 hover:scale-105" asChild>
                <a href="mailto:kontakt@salihmaral.de?subject=Ücretsiz%20Google%20Ads%20Analizi">
                  Ücretsiz Analiz Al
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 shadow-lg transition-all duration-300 hover:scale-105" asChild>
                <a href="https://wa.me/491724106463?text=Merhaba,%20Google%20Ads%20için%20ücretsiz%20analiz%20istiyorum." target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </Button>
            </div>
            
            <p className="text-white/60 text-sm">
              kontakt@salihmaral.de • +49 172 410 6463
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-400">© 2026 Salih Maral. Tüm hakları saklıdır.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/impressum" className="text-xs text-gray-500 hover:text-gray-300">Impressum</a>
            <a href="/datenschutz" className="text-xs text-gray-500 hover:text-gray-300">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
