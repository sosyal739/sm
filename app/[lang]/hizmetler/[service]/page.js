'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowLeft, Phone, MessageCircle, Mail, TrendingUp, Users, Target, Zap, Award, Eye } from 'lucide-react'

const serviceData = {
  tr: {
    'google-ads': {
      title: 'Google Ads Yönetimi',
      subtitle: 'Maksimum ROI ile Profesyonel Google Reklamcılığı',
      description: 'Google Ads ile işletmenizi büyütün. 15+ yıllık deneyimimizle, Google\'ın tüm reklam formatlarında uzmanız.',
      hero: 'Google\'da görünür olun, müşterilerinize anında ulaşın. Doğru stratejilerle reklam bütçenizi maksimum verimlilikte kullanın.',
      color: '#4285F4',
      gradient: 'from-[#4285F4] to-[#34A853]',
      icon: 'google-ads',
      features: [
        {
          title: 'Arama Ağı Reklamları (Search Ads)',
          description: 'Müşterilerin aktif olarak aradığı anda karşılarına çıkın. Anahtar kelime optimizasyonu ve teklif stratejileriyle en yüksek dönüşüm oranlarını yakalayın.',
          icon: 'search',
          details: [
            'Hedefli anahtar kelime araştırması ve seçimi',
            'Rekabet analizi ve teklif optimizasyonu',
            'A/B test ile reklam metni optimizasyonu',
            'Kalite skoru iyileştirme stratejileri',
            'Negatif anahtar kelime yönetimi',
            'Coğrafi ve demografik hedefleme'
          ]
        },
        {
          title: 'Display (Görüntülü) Reklamları',
          description: 'Google\'ın 2 milyondan fazla web sitesi ve uygulamasında görünün. Görsel çekiciliğinizle marka bilinirliğinizi artırın.',
          icon: 'display',
          details: [
            'Banner ve görsel reklam tasarımı',
            'Remarketing kampanyaları',
            'Responsive display reklamlar',
            'Hedef kitle segmentasyonu',
            'Placement hedefleme',
            'Frekans kontrolü ve optimizasyonu'
          ]
        },
        {
          title: 'Shopping Reklamları',
          description: 'E-ticaret işletmeniz için özel. Ürünlerinizi fotoğraf, fiyat ve mağaza bilgisiyle birlikte gösterin.',
          icon: 'shopping',
          details: [
            'Google Merchant Center kurulumu',
            'Ürün feed optimizasyonu',
            'Shopping kampanyası stratejisi',
            'ROAS (Reklam Harcaması Getirisi) optimizasyonu',
            'Otomatik ve manuel teklif yönetimi',
            'Ürün segmentasyonu ve bütçe dağıtımı'
          ]
        },
        {
          title: 'YouTube Video Reklamları',
          description: 'Dünyanın en büyük video platformunda milyonlarca kullanıcıya ulaşın. Video içeriklerinizle etkileyici kampanyalar yürütün.',
          icon: 'video',
          details: [
            'TrueView In-Stream reklamlar (atlanabilir)',
            'TrueView Discovery reklamlar',
            'Bumper ads (6 saniyelik kısa reklamlar)',
            'Non-skippable ads (atlanamayan reklamlar)',
            'Video remarketing',
            'YouTube kanalı büyütme stratejileri'
          ]
        },
        {
          title: 'Performance Max Kampanyaları',
          description: 'Google\'ın yapay zeka destekli en yeni kampanya tipi. Tüm Google ağlarında otomatik optimizasyon.',
          icon: 'ai',
          details: [
            'Çoklu kanal optimizasyonu (Arama, Display, YouTube, Gmail, Discover)',
            'Yapay zeka destekli hedef kitle bulma',
            'Otomatik reklam varyasyonları',
            'Gerçek zamanlı performans optimizasyonu',
            'Dönüşüm değeri maksimizasyonu',
            'Asset grupları yönetimi'
          ]
        },
        {
          title: 'Yerel Kampanyalar (Local Campaigns)',
          description: 'Fiziksel mağazanız varsa, yakınınızdaki müşterilere ulaşın. Google Maps ve yerel aramalarda öne çıkın.',
          icon: 'location',
          details: [
            'Google My Business entegrasyonu',
            'Store visits (mağaza ziyareti) optimizasyonu',
            'Yerel envanter reklamları',
            'Konum genişletmeleri',
            'Çağrı genişletmeleri',
            'Yakınlık hedefleme'
          ]
        }
      ],
      stats: [
        { value: '+250%', label: 'Ortalama ROI Artışı', icon: TrendingUp },
        { value: '500+', label: 'Başarılı Kampanya', icon: Award },
        { value: '%98', label: 'Müşteri Memnuniyeti', icon: Users },
        { value: '24/7', label: 'Kampanya İzleme', icon: Eye }
      ],
      process: {
        title: 'Çalışma Sürecimiz',
        steps: [
          {
            title: '1. Keşif ve Strateji',
            description: 'İşletmenizi, hedeflerinizi ve rekabetinizi analiz ediyoruz. Size özel bir Google Ads stratejisi oluşturuyoruz.',
            icon: Target
          },
          {
            title: '2. Kampanya Kurulumu',
            description: 'Hesap yapılandırması, dönüşüm takibi, anahtar kelime araştırması ve reklam metinleri hazırlıyoruz.',
            icon: Zap
          },
          {
            title: '3. Optimizasyon',
            description: 'Kampanyalarınızı sürekli izliyor, test ediyor ve optimize ediyoruz. Maksimum performans için ince ayarlar yapıyoruz.',
            icon: TrendingUp
          },
          {
            title: '4. Raporlama',
            description: 'Aylık detaylı raporlarla ne kadar harcadığınızı, ne kadar kazandığınızı şeffaf bir şekilde görüyorsunuz.',
            icon: Award
          }
        ]
      },
      why: {
        title: 'Neden Bizimle Çalışmalısınız?',
        reasons: [
          'Google Ads sertifikalı uzman ekip',
          '15+ yıllık kampanya yönetimi deneyimi',
          'Şeffaf raporlama ve performans takibi',
          'ROI odaklı strateji ve optimizasyon',
          'Sektör ortalamasının üzerinde dönüşüm oranları',
          '7/24 kampanya izleme ve müdahale'
        ]
      },
      cta: {
        title: 'Google Ads ile Büyümeye Başlayın',
        description: 'Ücretsiz Google Ads analizi için hemen iletişime geçin. Reklamlarınızın potansiyelini keşfedin.'
      }
    }
  }
}

const getIconComponent = (iconType) => {
  const iconProps = { className: "h-12 w-12", strokeWidth: 1.5 }
  switch(iconType) {
    case 'search': return <Target {...iconProps} />
    case 'display': return <Eye {...iconProps} />
    case 'shopping': return <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    case 'video': return <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    case 'ai': return <Zap {...iconProps} />
    case 'location': return <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    default: return <CheckCircle {...iconProps} />
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { lang = 'tr', service } = params

  const data = serviceData[lang]?.[service]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hizmet Bulunamadı</h1>
          <Button onClick={() => router.push('/')}>Ana Sayfaya Dön</Button>
        </div>
      </div>
    )
  }

  const scrollToContact = () => {
    router.push('/#contact')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push('/')} className="flex items-center space-x-2 hover:opacity-80">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Geri</span>
            </button>
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04] bg-clip-text text-transparent">
              Salih Maral
            </a>
            <div className="flex items-center space-x-4">
              <Button size="sm" variant="outline" asChild>
                <a href="tel:+491724106463">
                  <Phone className="h-4 w-4 mr-2" />
                  Ara
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Animated */}
      <section className={`pt-32 pb-20 px-4 bg-gradient-to-br ${data.gradient} text-white relative overflow-hidden`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Google Ads Logo */}
            <div className="mb-8 inline-block">
              <svg className="w-24 h-24 mx-auto animate-bounce-slow" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" fill="white" fillOpacity="0.2"/>
                <circle cx="24" cy="24" r="20" fill="white"/>
                <path d="M24 10L16 26H21L19 34L32 18H27L29 10H24Z" fill={data.color}/>
              </svg>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">{data.title}</h1>
            <p className="text-2xl mb-6 opacity-90 font-semibold">{data.subtitle}</p>
            <p className="text-xl mb-8 opacity-80 max-w-3xl mx-auto">{data.hero}</p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {data.stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
                    <IconComponent className="h-8 w-8 mx-auto mb-3" />
                    <p className="text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm opacity-80">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Button size="lg" className="bg-white text-[#4285F4] hover:bg-gray-100 shadow-xl transform hover:scale-105 transition-all" asChild>
                <a href="https://wa.me/491724106463" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp ile İletişim
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 shadow-xl" onClick={scrollToContact}>
                <Mail className="mr-2 h-5 w-5" />
                Ücretsiz Teklif Alın
              </Button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
        `}</style>
      </section>

      {/* Features Section - Card Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Google Ads Kampanya Türleri</h2>
            <p className="text-xl text-muted-foreground">Her işletme türü için özel kampanya stratejileri</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {data.features.map((feature, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4" style={{ borderLeftColor: data.color }}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br" style={{ background: `linear-gradient(135deg, ${data.color}20, ${data.color}10)` }}>
                      <div style={{ color: data.color }}>
                        {getIconComponent(feature.icon)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2" style={{ color: data.color }}>{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-3 mt-6">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: data.color }} />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">{data.process.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="relative group">
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="pt-8 text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br" style={{ background: `linear-gradient(135deg, ${data.color}, ${data.gradient.split('to-')[1].replace('[', '#').replace(']', '')})` }}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < data.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r" style={{ background: `linear-gradient(90deg, ${data.color}, transparent)` }}></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${data.color}10, transparent)` }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">{data.why.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {data.why.reasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${data.color}20` }}>
                    <CheckCircle className="h-5 w-5" style={{ color: data.color }} />
                  </div>
                  <span className="font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br" style={{ background: `linear-gradient(135deg, ${data.color}, ${data.gradient.split('to-')[1].replace('[', '#').replace(']', '')})` }}>
        <div className="container mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">{data.cta.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{data.cta.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all" style={{ color: data.color }} asChild>
              <a href="tel:+491724106463">
                <Phone className="mr-2 h-5 w-5" />
                01724106463
              </a>
            </Button>
            <Button size="lg" className="bg-[#34A853] hover:bg-[#2d9249] text-white shadow-2xl transform hover:scale-105 transition-all" asChild>
              <a href="https://wa.me/491724106463" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2026 Salih Maral. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

  tr: {
    'google-ads': {
      title: 'Google Ads Yönetimi',
      subtitle: 'Maksimum ROI ile Profesyonel Google Reklamcılığı',
      description: 'Google Ads ile işletmenizi büyütün. 15+ yıllık deneyimimizle, Google\'ın tüm reklam formatlarında uzmanız.',
      hero: 'Google\'da görünür olun, müşterilerinize anında ulaşın. Doğru stratejilerle reklam bütçenizi maksimum verimlilikte kullanın.',
      features: [
        {
          title: 'Arama Ağı Reklamları (Search Ads)',
          description: 'Müşterilerin aktif olarak aradığı anda karşılarına çıkın. Anahtar kelime optimizasyonu ve teklif stratejileriyle en yüksek dönüşüm oranlarını yakalayın.',
          details: [
            'Hedefli anahtar kelime araştırması ve seçimi',
            'Rekabet analizi ve teklif optimizasyonu',
            'A/B test ile reklam metni optimizasyonu',
            'Kalite skoru iyileştirme stratejileri',
            'Negatif anahtar kelime yönetimi',
            'Coğrafi ve demografik hedefleme'
          ]
        },
        {
          title: 'Display (Görüntülü) Reklamları',
          description: 'Google\'ın 2 milyondan fazla web sitesi ve uygulamasında görünün. Görsel çekiciliğinizle marka bilinirliğinizi artırın.',
          details: [
            'Banner ve görsel reklam tasarımı',
            'Remarketing kampanyaları',
            'Responsive display reklamlar',
            'Hedef kitle segmentasyonu',
            'Placement hedefleme',
            'Frekans kontrolü ve optimizasyonu'
          ]
        },
        {
          title: 'Shopping Reklamları',
          description: 'E-ticaret işletmeniz için özel. Ürünlerinizi fotoğraf, fiyat ve mağaza bilgisiyle birlikte gösterin.',
          details: [
            'Google Merchant Center kurulumu',
            'Ürün feed optimizasyonu',
            'Shopping kampanyası stratejisi',
            'ROAS (Reklam Harcaması Getirisi) optimizasyonu',
            'Otomatik ve manuel teklif yönetimi',
            'Ürün segmentasyonu ve bütçe dağıtımı'
          ]
        },
        {
          title: 'YouTube Video Reklamları',
          description: 'Dünyanın en büyük video platformunda milyonlarca kullanıcıya ulaşın. Video içeriklerinizle etkileyici kampanyalar yürütün.',
          details: [
            'TrueView In-Stream reklamlar (atlanabilir)',
            'TrueView Discovery reklamlar',
            'Bumper ads (6 saniyelik kısa reklamlar)',
            'Non-skippable ads (atlanamayan reklamlar)',
            'Video remarketing',
            'YouTube kanalı büyütme stratejileri'
          ]
        },
        {
          title: 'Performance Max Kampanyaları',
          description: 'Google\'ın yapay zeka destekli en yeni kampanya tipi. Tüm Google ağlarında otomatik optimizasyon.',
          details: [
            'Çoklu kanal optimizasyonu (Arama, Display, YouTube, Gmail, Discover)',
            'Yapay zeka destekli hedef kitle bulma',
            'Otomatik reklam varyasyonları',
            'Gerçek zamanlı performans optimizasyonu',
            'Dönüşüm değeri maksimizasyonu',
            'Asset grupları yönetimi'
          ]
        },
        {
          title: 'Yerel Kampanyalar (Local Campaigns)',
          description: 'Fiziksel mağazanız varsa, yakınınızdaki müşterilere ulaşın. Google Maps ve yerel aramalarda öne çıkın.',
          details: [
            'Google My Business entegrasyonu',
            'Store visits (mağaza ziyareti) optimizasyonu',
            'Yerel envanter reklamları',
            'Konum genişletmeleri',
            'Çağrı genişletmeleri',
            'Yakınlık hedefleme'
          ]
        }
      ],
      process: {
        title: 'Çalışma Sürecimiz',
        steps: [
          {
            title: '1. Keşif ve Strateji',
            description: 'İşletmenizi, hedeflerinizi ve rekabetinizi analiz ediyoruz. Size özel bir Google Ads stratejisi oluşturuyoruz.'
          },
          {
            title: '2. Kampanya Kurulumu',
            description: 'Hesap yapılandırması, dönüşüm takibi, anahtar kelime araştırması ve reklam metinleri hazırlıyoruz.'
          },
          {
            title: '3. Optimizasyon',
            description: 'Kampanyalarınızı sürekli izliyor, test ediyor ve optimize ediyoruz. Maksimum performans için ince ayarlar yapıyoruz.'
          },
          {
            title: '4. Raporlama',
            description: 'Aylık detaylı raporlarla ne kadar harcadığınızı, ne kadar kazandığınızı şeffaf bir şekilde görüyorsunuz.'
          }
        ]
      },
      why: {
        title: 'Neden Bizimle Çalışmalısınız?',
        reasons: [
          'Google Ads sertifikalı uzman ekip',
          '15+ yıllık kampanya yönetimi deneyimi',
          'Şeffaf raporlama ve performans takibi',
          'ROI odaklı strateji ve optimizasyon',
          'Sektör ortalamasının üzerinde dönüşüm oranları',
          '7/24 kampanya izleme ve müdahale'
        ]
      },
      cta: {
        title: 'Google Ads ile Büyümeye Başlayın',
        description: 'Ücretsiz Google Ads analizi için hemen iletişime geçin. Reklamlarınızın potansiyelini keşfedin.'
      }
    },
    'meta-ads': {
      title: 'Meta Ads (Facebook & Instagram)',
      subtitle: 'Facebook ve Instagram\'da Hedef Kitlenize Ulaşın',
      description: '3 milyardan fazla kullanıcıya sahip Meta platformlarında etkili reklam kampanyaları yürütün.',
      hero: 'Facebook ve Instagram\'ın güçlü hedefleme özellikleriyle tam olarak doğru kişilere ulaşın. Görsel hikayenizi anlatın, markanızı büyütün.',
      features: [
        {
          title: 'Facebook Reklamları',
          description: 'Dünyanın en büyük sosyal medya platformunda milyarlarca kullanıcıya ulaşın.',
          details: [
            'Feed reklamları (görsel ve video)',
            'Stories reklamları',
            'Marketplace reklamları',
            'Video akışı reklamları',
            'Messenger reklamları',
            'Right column reklamlar'
          ]
        },
        {
          title: 'Instagram Reklamları',
          description: 'Görsel odaklı platformda markanızı öne çıkarın ve genç kitleye ulaşın.',
          details: [
            'Instagram Feed reklamları',
            'Instagram Stories reklamları',
            'Instagram Reels reklamları',
            'Instagram Explorer reklamları',
            'Shopping reklamları',
            'IGTV reklamları'
          ]
        },
        {
          title: 'Hedef Kitle Stratejisi',
          description: 'Meta\'nın güçlü hedefleme seçenekleriyle tam olarak doğru kişilere ulaşın.',
          details: [
            'Demografik hedefleme (yaş, cinsiyet, konum)',
            'İlgi alanı tabanlı hedefleme',
            'Davranış bazlı hedefleme',
            'Lookalike (benzer) hedef kitleler',
            'Custom Audiences (özel kitleler)',
            'Retargeting kampanyaları'
          ]
        },
        {
          title: 'Kampanya Tipleri',
          description: 'Her iş hedefi için özel kampanya stratejileri.',
          details: [
            'Awareness (Farkındalık) kampanyaları',
            'Consideration (İlgi) kampanyaları',
            'Traffic (Trafik) kampanyaları',
            'Engagement (Etkileşim) kampanyaları',
            'Lead Generation (Potansiyel Müşteri) kampanyaları',
            'Conversions (Dönüşüm) kampanyaları'
          ]
        },
        {
          title: 'Kreatif ve İçerik',
          description: 'Dikkat çeken, etkileşim yaratan görsel ve video içerikler.',
          details: [
            'Profesyonel görsel tasarım önerileri',
            'Video içerik stratejisi',
            'Carousel (çoklu görsel) reklamlar',
            'Collection reklamlar',
            'Dynamic ads (dinamik reklamlar)',
            'A/B test ile kreatif optimizasyonu'
          ]
        },
        {
          title: 'Dönüşüm Optimizasyonu',
          description: 'Meta Pixel ile detaylı takip ve sürekli optimizasyon.',
          details: [
            'Meta Pixel kurulumu ve yapılandırma',
            'Event tracking (etkinlik takibi)',
            'Dönüşüm API entegrasyonu',
            'Attribution window optimizasyonu',
            'Bid strategy (teklif stratejisi) optimizasyonu',
            'Campaign Budget Optimization (CBO)'
          ]
        }
      ],
      process: {
        title: 'Çalışma Sürecimiz',
        steps: [
          {
            title: '1. Hedef Kitle Analizi',
            description: 'Hedef kitlenizi tanımak ve onların ilgi alanlarını, davranışlarını analiz ediyoruz.'
          },
          {
            title: '2. Kreatif Strateji',
            description: 'Markanızın hikayesini anlatan, dikkat çeken görsel ve video içerikler planlıyoruz.'
          },
          {
            title: '3. Kampanya Yönetimi',
            description: 'Meta Ads Manager\'da kampanyaları kuruyor, test ediyor ve optimize ediyoruz.'
          },
          {
            title: '4. Performans Analizi',
            description: 'Her kampanyanın detaylı analizini yapıyor ve aylık raporlarla paylaşıyoruz.'
          }
        ]
      },
      why: {
        title: 'Neden Bizimle Çalışmalısınız?',
        reasons: [
          'Meta Blueprint sertifikalı ekip',
          'Görsel ve video içerik danışmanlığı',
          'Detaylı hedef kitle segmentasyonu',
          'A/B test ile sürekli iyileştirme',
          'Düşük CPA (müşteri başına maliyet)',
          'Retargeting uzmanı ekip'
        ]
      },
      cta: {
        title: 'Meta Ads ile Markanızı Büyütün',
        description: 'Facebook ve Instagram\'da etkili kampanyalar için hemen iletişime geçin.'
      }
    },
    'tiktok-ads': {
      title: 'TikTok Ads',
      subtitle: 'Genç ve Dinamik Kitleye Ulaşın',
      description: 'Dünyanın en hızlı büyüyen sosyal medya platformunda viral kampanyalar yürütün.',
      hero: '1 milyardan fazla aktif kullanıcıya sahip TikTok\'ta markanızı öne çıkarın. Kısa videolarla büyük etki yaratın.',
      features: [
        {
          title: 'In-Feed Ads',
          description: 'Kullanıcıların For You sayfasında doğal olarak görünen video reklamlar.',
          details: [
            '9-15 saniye video reklamlar',
            'Tam ekran deneyim',
            'Call-to-action butonları',
            'App download veya website yönlendirme',
            'Yüksek etkileşim oranları',
            'Sound-on reklam deneyimi'
          ]
        },
        {
          title: 'TopView Ads',
          description: 'Uygulama açıldığında ilk görülen, maksimum etki yaratan premium reklam formatı.',
          details: [
            '60 saniyeye kadar video',
            'Tam ekran, ses açık format',
            'Garantili gösterim',
            'Yüksek marka bilinirliği',
            'Premium yerleşim',
            'Geniş erişim imkanı'
          ]
        },
        {
          title: 'Brand Takeover',
          description: 'Günde bir marka için özel, uygulama açılır açılmaz görünen reklam.',
          details: [
            'Günlük özel yerleşim',
            '3-5 saniyelik görsel veya video',
            'Anında dikkat çekme',
            'Landing page yönlendirme',
            'Hashtag challenge entegrasyonu',
            'Premium marka görünürlüğü'
          ]
        },
        {
          title: 'Branded Hashtag Challenge',
          description: 'Kullanıcıların markanızla etkileşime geçmesini sağlayan kampanyalar.',
          details: [
            'Viral potansiyeli yüksek',
            'User-generated content',
            'Özel hashtag ve sayfa',
            'Banner yerleşimi',
            'Discover sayfası görünürlüğü',
            'Topluluk katılımı'
          ]
        },
        {
          title: 'Branded Effects',
          description: 'Özel filtreler ve efektlerle kullanıcıların videolarında markanız.',
          details: [
            '2D, 3D ve AR efektler',
            'Özel markalı filtreler',
            'Yüz filtreleri',
            'Dünya efektleri',
            'Kullanıcı etkileşimi',
            'Virality potansiyeli'
          ]
        },
        {
          title: 'Spark Ads',
          description: 'Organik içerikleri reklama dönüştürün, gerçek etkileşimleri güçlendirin.',
          details: [
            'Mevcut TikTok videolarını boost',
            'Organik görünümlü reklamlar',
            'Yüksek engagement oranları',
            'Influencer işbirlikleri',
            'Authentic content',
            'Düşük production maliyeti'
          ]
        }
      ],
      process: {
        title: 'Çalışma Sürecimiz',
        steps: [
          {
            title: '1. Platform Analizi',
            description: 'TikTok trendlerini, hedef kitlenizi ve sektörünüzü analiz ediyoruz.'
          },
          {
            title: '2. İçerik Stratejisi',
            description: 'Viral potansiyeli yüksek, TikTok diline uygun içerik stratejisi oluşturuyoruz.'
          },
          {
            title: '3. Kampanya Yürütme',
            description: 'TikTok Ads Manager\'da kampanyaları kuruyor ve optimize ediyoruz.'
          },
          {
            title: '4. Performans Takibi',
            description: 'Engagement, reach ve conversion metriklerini detaylı takip ediyoruz.'
          }
        ]
      },
      why: {
        title: 'Neden Bizimle Çalışmalısınız?',
        reasons: [
          'TikTok Ads sertifikalı ekip',
          'Trend takibi ve içerik danışmanlığı',
          'Gen Z ve Millennial hedefleme uzmanlığı',
          'Viral kampanya deneyimi',
          'Influencer işbirliği yönetimi',
          'Creative studio desteği'
        ]
      },
      cta: {
        title: 'TikTok\'ta Viral Olun',
        description: 'Genç kitleye ulaşmak için TikTok Ads kampanyanızı başlatın.'
      }
    },
    'x-ads': {
      title: 'X (Twitter) Ads',
      subtitle: 'Gerçek Zamanlı Konuşmalara Katılın',
      description: 'Haberlerin ve trendlerin merkezi X\'te markanızı konuşturun.',
      hero: 'Anlık gelişmelerin ve viral konuşmaların yaşandığı X\'te, markanızı doğru zamanda doğru kişilere gösterin.',
      features: [
        {
          title: 'Promoted Tweets',
          description: 'Organik tweetlerinizi geniş kitlelere ulaştırın.',
          details: [
            'Timeline\'da öne çıkan tweetler',
            'Retweet ve like destekli yayılım',
            'Engagement artırma',
            'Thread promotion',
            'Video ve görsel destekli içerik',
            'Poll (anket) reklamları'
          ]
        },
        {
          title: 'Promoted Accounts',
          description: 'Takipçi sayınızı hızla artırın, topluluğunuzu büyütün.',
          details: [
            'Who to follow önerileri',
            'Hedefli takipçi kazanımı',
            'Profil görünürlüğü artırma',
            'Niche audience targeting',
            'Organik büyüme desteği',
            'Community building'
          ]
        },
        {
          title: 'Promoted Trends',
          description: 'Hashtag\'iniz Trending Topics\'te, maksimum görünürlük.',
          details: [
            '24 saat Explore tab\'de',
            'Özel hashtag ve açıklama',
            'Spotlight yerleşim',
            'Geniş erişim garantisi',
            'Yüksek engagement potansiyeli',
            'Event marketing için ideal'
          ]
        },
        {
          title: 'Twitter Amplify',
          description: 'Premium yayıncıların içeriğiyle markanızı eşleştirin.',
          details: [
            'Pre-roll ve mid-roll video reklamlar',
            'Premium içerik partnerlikleri',
            'Spor, haber, eğlence kategorileri',
            'Marka güvenliği',
            'Viewability garantisi',
            'Geniş erişim'
          ]
        },
        {
          title: 'Twitter Takeover',
          description: 'Günün belirli saatlerinde özel yerleşim ve maksimum dikkat.',
          details: [
            'Timeline ve Explore takeover',
            'First view yerleşimi',
            'Günlük özel konum',
            'Yüksek görünürlük',
            'Premium brand safety',
            'Özel target audience'
          ]
        },
        {
          title: 'Hedefleme Seçenekleri',
          description: 'X\'in güçlü hedefleme özellikleriyle doğru kişilere ulaşın.',
          details: [
            'Keyword targeting (anahtar kelime)',
            'Interest targeting (ilgi alanı)',
            'Follower lookalikes',
            'Conversation targeting',
            'Event targeting',
            'Behavioral ve demografik hedefleme'
          ]
        }
      ],
      process: {
        title: 'Çalışma Sürecimiz',
        steps: [
          {
            title: '1. Trend Analizi',
            description: 'Sektörünüzdeki konuşmaları, hashtag\'leri ve influencer\'ları analiz ediyoruz.'
          },
          {
            title: '2. İçerik Planı',
            description: 'X diline uygun, engagement odaklı tweet stratejisi oluşturuyoruz.'
          },
          {
            title: '3. Kampanya Yönetimi',
            description: 'X Ads Manager\'da kampanyaları kuruyor ve gerçek zamanlı optimize ediyoruz.'
          },
          {
            title: '4. Engagement Takibi',
            description: 'Retweet, reply, like ve mention metriklerini detaylı raporluyoruz.'
          }
        ]
      },
      why: {
        title: 'Neden Bizimle Çalışmalısınız?',
        reasons: [
          'X Ads Flight School sertifikalı',
          'Gerçek zamanlı kampanya optimizasyonu',
          'Trend takibi ve hızlı müdahale',
          'Influencer outreach deneyimi',
          'Crisis management uzmanlığı',
          'Conversation tracking'
        ]
      },
      cta: {
        title: 'X\'te Konuşulmaya Başlayın',
        description: 'Markanızı trendlerin merkezine taşıyalım. Hemen iletişime geçin.'
      }
    },
    'seo': {
      title: 'SEO Hizmetleri',
      subtitle: 'Google\'da Üst Sıralarda Yer Alın',
      description: 'Organik trafiğinizi artırın, rakiplerinizin önüne geçin. Sürdürülebilir büyüme için SEO.',
      hero: 'Reklam vermeden müşteri kazanın. Google\'ın sevdiği, kullanıcıların aradığı içeriklerle uzun vadeli başarı.',
      features: [
        {
          title: 'İç SEO (On-Page SEO)',
          description: 'Web sitenizin Google ve kullanıcılar için optimize edilmesi.',
          details: [
            'Anahtar kelime araştırması ve stratejisi',
            'Title tag ve meta description optimizasyonu',
            'H1, H2, H3 başlık yapısı',
            'İçerik optimizasyonu',
            'Internal linking (iç bağlantı) stratejisi',
            'URL yapısı optimizasyonu',
            'Görsel ve video SEO',
            'Schema markup (yapılandırılmış veri)',
            'Featured snippet optimizasyonu'
          ]
        },
        {
          title: 'Dış SEO (Off-Page SEO)',
          description: 'Web sitenizin otorite ve güvenilirliğini artıran dış faktörler.',
          details: [
            'Backlink stratejisi ve link building',
            'Guest posting ve içerik pazarlama',
            'Brand mention takibi',
            'Influencer outreach',
            'Social signals optimizasyonu',
            'Local citations (yerel kayıtlar)',
            'Online reputation management',
            'Directory submissions',
            'Competitor backlink analysis'
          ]
        },
        {
          title: 'Teknik SEO',
          description: 'Web sitenizin teknik altyapısının Google standardlarına uygun olması.',
          details: [
            'Site hızı optimizasyonu (Core Web Vitals)',
            'Mobile-first indexing uyumu',
            'SSL sertifikası ve HTTPS',
            'XML sitemap oluşturma',
            'Robots.txt optimizasyonu',
            'Canonical tag yönetimi',
            '404 hataları ve yönlendirmeler',
            'Crawlability (taranabilirlik) analizi',
            'JavaScript ve AJAX SEO',
            'International SEO (hreflang)'
          ]
        },
        {
          title: 'Yerel SEO (Local SEO)',
          description: 'Fiziksel mağazanız varsa, yerel aramalarda öne çıkın.',
          details: [
            'Google My Business optimizasyonu',
            'Yerel anahtar kelime stratejisi',
            'NAP (Name, Address, Phone) tutarlılığı',
            'Yerel citation building',
            'Google Maps optimizasyonu',
            'Müşteri yorumları yönetimi',
            'Yerel içerik oluşturma',
            'Location page optimizasyonu'
          ]
        },
        {
          title: 'İçerik SEO',
          description: 'Kaliteli, SEO uyumlu içeriklerle organik trafik çekin.',
          details: [
            'SEO-friendly blog yazıları',
            'Pillar page ve cluster stratejisi',
            'Long-form content (uzun içerik)',
            'Keyword clustering (kelime kümeleme)',
            'Topic authority oluşturma',
            'E-A-T (Expertise, Authority, Trust)',
            'Content gap analysis',
            'Content refresh ve güncelleme'
          ]
        },
        {
          title: 'E-Ticaret SEO',
          description: 'Online mağazanız için özel SEO stratejileri.',
          details: [
            'Ürün sayfası optimizasyonu',
            'Kategori sayfası SEO',
            'Product schema markup',
            'Faceted navigation optimizasyonu',
            'Duplicate content yönetimi',
            'Customer review SEO',
            'Rich snippets (zengin sonuçlar)',
            'Shopping feed optimizasyonu'
          ]
        }
      ],
      process: {
        title: 'SEO Çalışma Sürecimiz',
        steps: [
          {
            title: '1. SEO Audit (Denetim)',
            description: 'Web sitenizin mevcut durumunu analiz ediyor, sorunları tespit ediyor ve fırsatları belirliyoruz.'
          },
          {
            title: '2. Strateji Oluşturma',
            description: 'Sektörünüze ve hedeflerinize özel SEO yol haritası çıkarıyoruz.'
          },
          {
            title: '3. Uygulama',
            description: 'Teknik SEO, iç SEO ve dış SEO çalışmalarını adım adım uyguluyoruz.'
          },
          {
            title: '4. İzleme ve Raporlama',
            description: 'Google Analytics ve Search Console verileriyle aylık detaylı raporlar sunuyoruz.'
          }
        ]
      },
      why: {
        title: 'Neden Bizimle Çalışmalısınız?',
        reasons: [
          'White-hat SEO teknikleri (Google uyumlu)',
          '15+ yıllık SEO deneyimi',
          'Kanıtlanmış başarı hikayeleri',
          'Şeffaf raporlama ve metrik takibi',
          'Sürekli algoritma güncellemesi takibi',
          'Teknik ve içerik SEO uzmanlığı'
        ]
      },
      cta: {
        title: 'SEO ile Organik Trafiğinizi Katlayın',
        description: 'Ücretsiz SEO analizi için hemen iletişime geçin.'
      }
    },
    'yorum-yonetimi': {
      title: 'Olumsuz Yorum Yönetimi',
      subtitle: 'İtibarınızı Koruyun, Güveninizi Geri Kazanın',
      description: 'Google Maps ve Trustpilot\'taki haksız, sahte ve olumsuz yorumları profesyonel yöntemlerle kaldırın.',
      hero: 'Bir olumsuz yorum yüzünden müşteri kaybetmeyin. Hukuki süreçlerle haksız yorumları siliyoruz.',
      features: [
        {
          title: 'Google Maps Yorum Silme',
          description: 'Google My Business profilinizdeki haksız yorumları kaldırın.',
          details: [
            'Spam ve sahte yorum tespiti',
            'Hakaret ve iftira içeren yorumlar',
            'Rekabet kaynaklı olumsuz yorumlar',
            'Gerçek dışı iddialar',
            'Google richtlinelere aykırı yorumlar',
            'Hukuki süreç yönetimi',
            'Profesyonel avukat desteği',
            'Hızlı sonuç (ortalama 3-7 gün)'
          ]
        },
        {
          title: 'Trustpilot Yorum Yönetimi',
          description: 'Trustpilot platformundaki haksız değerlendirmeleri kaldırın.',
          details: [
            'Sahte müşteri yorumları',
            'Ticari karalama kampanyaları',
            'Gerçek olmayan deneyimler',
            'Trustpilot kurallarına aykırı içerik',
            'Platform iletişim yönetimi',
            'Kanıt ve belge hazırlama',
            'Takip ve sonuç garantisi'
          ]
        },
        {
          title: 'Hukuki Süreç',
          description: 'Tüm işlemler hukuki zemine dayalı, güvenli ve garantili.',
          details: [
            'Yorum analizi ve hukuki değerlendirme',
            'Platform kuralları incelemesi',
            'İhlal tespiti ve belgelendirme',
            'Resmi başvuru hazırlama',
            'Takip ve müdahale',
            'Kalıcı çözüm garantisi'
          ]
        },
        {
          title: 'İtibar Yönetimi',
          description: 'Sadece silmek değil, itibarınızı güçlendirmek.',
          details: [
            'Online reputation monitoring',
            'Pozitif yorum teşvik stratejileri',
            'Review response yönetimi',
            'SEO ile pozitif içerik öne çıkarma',
            'Kriz yönetimi danışmanlığı',
            'Sürekli izleme servisi'
          ]
        },
        {
          title: 'Diğer Platformlar',
          description: 'Google ve Trustpilot dışındaki platformlarda da hizmet.',
          details: [
            'Yelp yorum yönetimi',
            'TripAdvisor incelemeleri',
            'Facebook sayfa yorumları',
            'Foursquare ve Zomato',
            'Sektörel review siteleri',
            'Platform-specific süreçler'
          ]
        }
      ],
      process: {
        title: '4 Adımda Yorum Silme Süreci',
        steps: [
          {
            title: '1. Ücretsiz Analiz',
            description: 'Yorumu inceliyoruz ve silinebilirlik durumunu değerlendiriyoruz. Size ücretsiz rapor sunuyoruz.'
          },
          {
            title: '2. Teklif ve Onay',
            description: 'Silme işleminin maliyetini ve süresini netleştiriyoruz. Onayınızla süreci başlatıyoruz.'
          },
          {
            title: '3. Hukuki İşlem',
            description: 'Platformla iletişime geçiyor, gerekli belgeleri sunuyor ve takip ediyoruz.'
          },
          {
            title: '4. Sonuç ve Garanti',
            description: 'Yorum silindikten sonra 3 ay garanti veriyoruz. Tekrar ortaya çıkarsa ücretsiz müdahale ediyoruz.'
          }
        ]
      },
      why: {
        title: 'Neden Bizimle Çalışmalısınız?',
        reasons: [
          'Hukuki uzmanlık ve avukat desteği',
          '%95 başarı oranı',
          'Hızlı sonuç (ortalama 3-7 gün)',
          'Şeffaf fiyatlandırma',
          '3 ay garanti süresi',
          'Risk yok - başarısız olursak ücret iadesi'
        ]
      },
      cta: {
        title: 'Haksız Yorumları Hemen Silin',
        description: 'Ücretsiz analiz için yorumunuzun linkini gönderin. Hemen değerlendirelim.'
      }
    }
  },
  de: {
    // German translations - will be similar structure
    'google-ads': {
      title: 'Google Ads Management',
      subtitle: 'Professionelle Google-Werbung mit maximalem ROI',
      // ... rest of German content
    },
    // ... other services in German
  },
  en: {
    // English translations - will be similar structure
    'google-ads': {
      title: 'Google Ads Management',
      subtitle: 'Professional Google Advertising with Maximum ROI',
      // ... rest of English content
    },
    // ... other services in English
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { lang = 'tr', service } = params

  const data = serviceData[lang]?.[service]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hizmet Bulunamadı</h1>
          <Button onClick={() => router.push('/')}>Ana Sayfaya Dön</Button>
        </div>
      </div>
    )
  }

  const scrollToContact = () => {
    router.push('/#contact')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push('/')} className="flex items-center space-x-2 hover:opacity-80">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">{lang === 'de' ? 'Zurück' : lang === 'en' ? 'Back' : 'Geri'}</span>
            </button>
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04] bg-clip-text text-transparent">
              Salih Maral
            </a>
            <div className="flex items-center space-x-4">
              <Button size="sm" variant="outline" asChild>
                <a href="tel:+491724106463">
                  <Phone className="h-4 w-4 mr-2" />
                  {lang === 'de' ? 'Anrufen' : lang === 'en' ? 'Call' : 'Ara'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#4285F4]/10 to-[#34A853]/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">{data.title}</h1>
            <p className="text-2xl text-[#EA4335] font-semibold mb-6">{data.subtitle}</p>
            <p className="text-lg text-muted-foreground mb-8">{data.hero}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#34A853] hover:bg-[#2d9249]" asChild>
                <a href="https://wa.me/491724106463" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact}>
                <Mail className="mr-2 h-5 w-5" />
                {lang === 'de' ? 'Angebot erhalten' : lang === 'en' ? 'Get Quote' : 'Teklif Al'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8">
            {data.features.map((feature, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4 text-[#4285F4]">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-[#34A853] mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {data.process && (
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">{data.process.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.process.steps.map((step, index) => (
                <Card key={index} className="relative">
                  <CardContent className="pt-6">
                    <div className="text-6xl font-bold text-[#4285F4]/20 mb-4">{String(index + 1).padStart(2, '0')}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Us Section */}
      {data.why && (
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">{data.why.title}</h2>
              <div className="grid gap-4">
                {data.why.reasons.map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-6 w-6 text-[#34A853] flex-shrink-0" />
                    <span className="text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#4285F4] to-[#34A853] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{data.cta.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{data.cta.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#4285F4] hover:bg-gray-100" asChild>
              <a href="tel:+491724106463">
                <Phone className="mr-2 h-5 w-5" />
                01724106463
              </a>
            </Button>
            <Button size="lg" className="bg-[#34A853] hover:bg-[#2d9249]" asChild>
              <a href="https://wa.me/491724106463" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2026 Salih Maral. {lang === 'de' ? 'Alle Rechte vorbehalten.' : lang === 'en' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}</p>
        </div>
      </footer>
    </div>
  )
}
