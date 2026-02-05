'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowLeft, ArrowUpRight, TrendingUp, Search, Image, ShoppingCart, Play, Zap, MapPin, Users, Heart, Video, MessageSquare, Share2, Target, BarChart3, Globe, Link, FileText, Shield, Star, ThumbsDown, AlertTriangle, Eye, Award } from 'lucide-react'

export default function ServiceDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { service } = params

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  // TÜM HİZMETLER VERİSİ
  const servicesData = {
    'google-ads': {
      title: 'Google Ads Yönetimi',
      subtitle: 'Veri odaklı stratejilerle işletmenizi büyütün',
      description: 'Google\'ın reklam platformunda 15 yıllık deneyimimizle, reklam bütçenizi en verimli şekilde kullanıyor ve ölçülebilir sonuçlar elde ediyoruz.',
      badge: 'Google Partner Sertifikalı',
      primaryColor: '#4285F4',
      secondaryColor: '#34A853',
      accentColor: '#FBBC05',
      gradientFrom: '#4285F4',
      gradientTo: '#34A853',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4285F4"/>
          <path d="M2 17L12 22L22 17" stroke="#34A853" strokeWidth="2"/>
          <path d="M2 12L12 17L22 12" stroke="#FBBC05" strokeWidth="2"/>
        </svg>
      ),
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
        { step: '01', title: 'Analiz', desc: 'İşletmenizi, rakiplerinizi ve hedef kitlenizi detaylı analiz ediyoruz.' },
        { step: '02', title: 'Strateji', desc: 'Veriye dayalı özel bir Google Ads stratejisi oluşturuyoruz.' },
        { step: '03', title: 'Uygulama', desc: 'Kampanyaları kuruyor, reklam metinlerini optimize ediyoruz.' },
        { step: '04', title: 'Optimizasyon', desc: 'Sürekli izleme ve A/B testleriyle performansı maksimize ediyoruz.' }
      ],
      benefits: [
        { title: 'Google Partner Sertifikası', desc: 'Google tarafından onaylı resmi partner statüsü' },
        { title: 'Şeffaf Raporlama', desc: 'Haftalık ve aylık detaylı performans raporları' },
        { title: 'Kişiselleştirilmiş Strateji', desc: 'İşletmenize özel hazırlanmış kampanya planları' },
        { title: 'Sürekli Optimizasyon', desc: '7/24 kampanya izleme ve performans iyileştirme' }
      ]
    },

    'meta-ads': {
      title: 'Meta Ads Yönetimi',
      subtitle: 'Facebook & Instagram\'da milyonlara ulaşın',
      description: 'Meta\'nın güçlü reklam platformuyla Facebook ve Instagram\'da hedef kitlenize ulaşın. Detaylı demografik hedefleme ve görsel odaklı kampanyalarla marka bilinirliğinizi artırın.',
      badge: 'Meta Business Partner',
      primaryColor: '#1877F2',
      secondaryColor: '#E4405F',
      accentColor: '#833AB4',
      gradientFrom: '#1877F2',
      gradientTo: '#E4405F',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      stats: [
        { value: '3.5B+', label: 'Aktif Kullanıcı', trend: 'Facebook + Instagram' },
        { value: '+180%', label: 'Etkileşim Artışı', trend: 'Ortalama sonuç' },
        { value: '%94', label: 'Hedef Kitle Doğruluğu', trend: 'Demografik hedefleme' },
        { value: '200+', label: 'Başarılı Kampanya', trend: 'Tamamlanan proje' }
      ],
      features: [
        {
          title: 'Facebook Reklamları',
          subtitle: 'Feed & Stories',
          desc: 'Facebook\'un 2.9 milyar kullanıcısına ulaşın. Haber akışı, hikayeler ve Marketplace\'te görünür olun.',
          icon: Users,
          items: ['Carousel reklamlar', 'Video reklamlar', 'Lead generation', 'Dinamik ürün reklamları']
        },
        {
          title: 'Instagram Reklamları',
          subtitle: 'Görsel Pazarlama',
          desc: 'Görsel odaklı platformda markanızı öne çıkarın. Feed, Stories, Reels ve Explore\'da yer alın.',
          icon: Heart,
          items: ['Story reklamları', 'Reels reklamları', 'Shopping reklamları', 'Influencer işbirlikleri']
        },
        {
          title: 'Messenger Reklamları',
          subtitle: 'Direkt İletişim',
          desc: 'Potansiyel müşterilerle birebir sohbet başlatın. Chatbot entegrasyonu ile 7/24 destek.',
          icon: MessageSquare,
          items: ['Click-to-Messenger', 'Sponsored messages', 'Chatbot entegrasyonu', 'Otomatik yanıtlar']
        },
        {
          title: 'Audience Network',
          subtitle: 'Genişletilmiş Erişim',
          desc: 'Meta\'nın partner ağında binlerce uygulama ve web sitesinde reklamlarınızı gösterin.',
          icon: Globe,
          items: ['Native reklamlar', 'Banner reklamlar', 'Interstitial ads', 'Rewarded video']
        },
        {
          title: 'Remarketing',
          subtitle: 'Yeniden Hedefleme',
          desc: 'Web sitenizi ziyaret eden veya uygulamanızı kullanan kişilere tekrar ulaşın.',
          icon: Target,
          items: ['Website custom audiences', 'App activity targeting', 'Customer list targeting', 'Lookalike audiences']
        },
        {
          title: 'Katalog Satışları',
          subtitle: 'E-Ticaret',
          desc: 'Ürün kataloğunuzu Meta ile senkronize edin ve dinamik ürün reklamları oluşturun.',
          icon: ShoppingCart,
          items: ['Dinamik reklamlar', 'Koleksiyon reklamları', 'Instagram Shopping', 'Facebook Shops']
        }
      ],
      process: [
        { step: '01', title: 'Hedef Kitle Analizi', desc: 'Demografik, ilgi alanı ve davranış verilerini analiz ediyoruz.' },
        { step: '02', title: 'Kreatif Strateji', desc: 'Platformlara özel görsel ve video içerikler hazırlıyoruz.' },
        { step: '03', title: 'Kampanya Lansmanı', desc: 'A/B testleriyle en etkili reklam setlerini belirliyoruz.' },
        { step: '04', title: 'Performans Takibi', desc: 'Meta Pixel ile dönüşümleri izliyor, optimize ediyoruz.' }
      ],
      benefits: [
        { title: 'Detaylı Hedefleme', desc: 'Yaş, cinsiyet, ilgi alanı, davranış bazlı hedefleme' },
        { title: 'Görsel Odaklı', desc: 'Dikkat çekici görsel ve video formatları' },
        { title: 'Geniş Erişim', desc: '3.5 milyardan fazla aktif kullanıcıya erişim' },
        { title: 'E-Ticaret Entegrasyonu', desc: 'Shopify, WooCommerce entegrasyonları' }
      ]
    },

    'tiktok-ads': {
      title: 'TikTok Ads Yönetimi',
      subtitle: 'Z kuşağına ulaşmanın en etkili yolu',
      description: 'TikTok\'un viral gücünden yararlanın. Kısa video formatıyla genç kitleye ulaşın, trend olan içeriklerle marka bilinirliğinizi katlayın.',
      badge: 'TikTok Marketing Partner',
      primaryColor: '#000000',
      secondaryColor: '#FE2C55',
      accentColor: '#25F4EE',
      gradientFrom: '#000000',
      gradientTo: '#FE2C55',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      stats: [
        { value: '1B+', label: 'Aktif Kullanıcı', trend: 'Aylık aktif' },
        { value: '+300%', label: 'Etkileşim Oranı', trend: 'Diğer platformlara göre' },
        { value: '52 dk', label: 'Günlük Kullanım', trend: 'Ortalama süre' },
        { value: '%60', label: 'Z Kuşağı', trend: '16-24 yaş arası' }
      ],
      features: [
        {
          title: 'In-Feed Reklamları',
          subtitle: 'For You Page',
          desc: 'Kullanıcıların "For You" akışında organik içerikler arasında görünün.',
          icon: Play,
          items: ['9-15 saniye videolar', 'Tam ekran deneyim', 'CTA butonları', 'Sesli içerik']
        },
        {
          title: 'TopView Reklamları',
          subtitle: 'Premium Görünürlük',
          desc: 'Uygulama açılışında ilk görünen reklam olun. Maksimum görünürlük ve etki.',
          icon: Eye,
          items: ['60 saniyeye kadar', 'Ses açık başlangıç', 'Tam ekran', 'Günlük 1 marka']
        },
        {
          title: 'Branded Hashtag Challenge',
          subtitle: 'Viral Kampanyalar',
          desc: 'Markanız için özel hashtag challenge oluşturun, kullanıcı içeriklerini tetikleyin.',
          icon: Share2,
          items: ['Özel hashtag sayfası', 'Kullanıcı katılımı', 'Viral potansiyel', 'UGC içerik']
        },
        {
          title: 'Branded Effects',
          subtitle: 'AR Filtreler',
          desc: 'Markanıza özel AR filtreleri ve efektler oluşturun. Kullanıcılar içerik üretsin.',
          icon: Zap,
          items: ['2D/3D efektler', 'Yüz filtreleri', 'Oyunlaştırma', 'Marka entegrasyonu']
        },
        {
          title: 'Spark Ads',
          subtitle: 'Organik Boost',
          desc: 'Mevcut organik TikTok içeriklerinizi veya influencer içeriklerini boost edin.',
          icon: TrendingUp,
          items: ['Organik içerik boost', 'Influencer içerikleri', 'Otantik görünüm', 'Yüksek etkileşim']
        },
        {
          title: 'TikTok Shop',
          subtitle: 'Sosyal Ticaret',
          desc: 'Uygulama içi alışveriş deneyimi. Videolardan direkt satış yapın.',
          icon: ShoppingCart,
          items: ['Canlı alışveriş', 'Ürün vitrinleri', 'Affiliate marketing', 'Checkout entegrasyonu']
        }
      ],
      process: [
        { step: '01', title: 'Trend Analizi', desc: 'TikTok trendlerini ve viral içerikleri analiz ediyoruz.' },
        { step: '02', title: 'İçerik Üretimi', desc: 'Platforma özgü, dikkat çekici videolar hazırlıyoruz.' },
        { step: '03', title: 'Influencer Eşleştirme', desc: 'Markanıza uygun TikTok creator\'ları buluyoruz.' },
        { step: '04', title: 'Viral Optimizasyon', desc: 'Algoritma dostu içeriklerle erişimi maksimize ediyoruz.' }
      ],
      benefits: [
        { title: 'Genç Kitleye Erişim', desc: 'Z kuşağı ve genç millennials\'a direkt ulaşım' },
        { title: 'Viral Potansiyel', desc: 'Organik viral yayılım imkanı' },
        { title: 'Yüksek Etkileşim', desc: 'Diğer platformlardan 3x daha fazla etkileşim' },
        { title: 'Düşük Maliyet', desc: 'CPM ve CPC\'de rekabetçi fiyatlar' }
      ]
    },

    'x-ads': {
      title: 'X (Twitter) Ads Yönetimi',
      subtitle: 'Gerçek zamanlı pazarlama ve trend yakalama',
      description: 'X platformunda anlık trendlere katılın, gündem oluşturun ve profesyonel kitleye ulaşın. B2B pazarlama ve thought leadership için ideal platform.',
      badge: 'X Ads Certified',
      primaryColor: '#000000',
      secondaryColor: '#1DA1F2',
      accentColor: '#794BC4',
      gradientFrom: '#000000',
      gradientTo: '#14171A',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      stats: [
        { value: '500M+', label: 'Aktif Kullanıcı', trend: 'Aylık aktif' },
        { value: '%80', label: 'Profesyonel Kitle', trend: 'İş dünyası kullanıcıları' },
        { value: '6000', label: 'Tweet/Saniye', trend: 'Gerçek zamanlı' },
        { value: '+150%', label: 'B2B Dönüşüm', trend: 'Ortalama artış' }
      ],
      features: [
        {
          title: 'Promoted Tweets',
          subtitle: 'Sponsorlu Tweetler',
          desc: 'Tweetlerinizi daha geniş kitlelere ulaştırın. Timeline\'da organik görünüm.',
          icon: MessageSquare,
          items: ['Metin + medya', 'Thread reklamları', 'Poll reklamları', 'Conversation cards']
        },
        {
          title: 'Promoted Accounts',
          subtitle: 'Hesap Büyütme',
          desc: 'Takipçi sayınızı artırın. "Kimi takip etmeli" önerilerinde görünün.',
          icon: Users,
          items: ['Takipçi kazanımı', 'Hedefli öneriler', 'Sektörel hedefleme', 'İlgi alanı bazlı']
        },
        {
          title: 'Promoted Trends',
          subtitle: 'Gündem Oluşturma',
          desc: 'Trend listesinde 1 numarada görünün. Maksimum görünürlük ve etki.',
          icon: TrendingUp,
          items: ['24 saat trend', 'Özel hashtag', 'Explore sayfası', 'Maksimum erişim']
        },
        {
          title: 'Video Reklamları',
          subtitle: 'Video Ads',
          desc: 'Otomatik oynatılan video reklamlarla dikkat çekin ve mesajınızı iletin.',
          icon: Video,
          items: ['Pre-roll videolar', 'Amplify sponsorluk', 'Video website cards', 'Canlı yayın boost']
        },
        {
          title: 'Takeover Reklamları',
          subtitle: 'Premium Yerleşim',
          desc: 'Timeline veya Explore sayfasının en üstünde premium görünürlük.',
          icon: Award,
          items: ['Timeline takeover', 'Explore takeover', 'Trend takeover+', 'Özel etkinlikler']
        },
        {
          title: 'Carousel Ads',
          subtitle: 'Çoklu İçerik',
          desc: 'Tek tweet\'te 6\'ya kadar görsel veya video ile hikaye anlatın.',
          icon: Image,
          items: ['6 kart kapasitesi', 'Swipe deneyimi', 'Farklı CTA\'lar', 'Ürün vitrini']
        }
      ],
      process: [
        { step: '01', title: 'Gündem Takibi', desc: 'Sektörünüzle ilgili trendleri ve konuşmaları izliyoruz.' },
        { step: '02', title: 'İçerik Stratejisi', desc: 'Tweet takvimi ve real-time marketing planı oluşturuyoruz.' },
        { step: '03', title: 'Hedefleme', desc: 'İlgi alanı, keyword ve follower lookalike hedefleme yapıyoruz.' },
        { step: '04', title: 'Analiz', desc: 'Engagement, reach ve dönüşüm metriklerini takip ediyoruz.' }
      ],
      benefits: [
        { title: 'Gerçek Zamanlı', desc: 'Anlık trendlere ve olaylara hızlı tepki' },
        { title: 'B2B Güçlü', desc: 'Profesyonel ve karar verici kitleye erişim' },
        { title: 'Thought Leadership', desc: 'Sektörde fikir lideri konumu oluşturma' },
        { title: 'Viral Potansiyel', desc: 'Retweet ile organik yayılım' }
      ]
    },

    'seo': {
      title: 'SEO Hizmetleri',
      subtitle: 'Google\'da organik olarak 1. sayfada yer alın',
      description: 'Arama motoru optimizasyonu ile web sitenizi Google\'ın ilk sayfasına taşıyoruz. Sürdürülebilir organik trafik ve uzun vadeli dijital varlık için profesyonel SEO çözümleri.',
      badge: 'SEO Uzmanı - 15 Yıl',
      primaryColor: '#0F9D58',
      secondaryColor: '#4285F4',
      accentColor: '#F4B400',
      gradientFrom: '#0F9D58',
      gradientTo: '#4285F4',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0F9D58" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      ),
      stats: [
        { value: '+400%', label: 'Organik Trafik', trend: 'Ortalama artış' },
        { value: '150+', label: 'Üst Sıra Anahtar Kelime', trend: 'İlk sayfa' },
        { value: '%85', label: 'Müşteri Kalıcılığı', trend: 'Uzun vadeli' },
        { value: '6 Ay', label: 'Sonuç Süresi', trend: 'Ortalama' }
      ],
      features: [
        {
          title: 'Teknik SEO',
          subtitle: 'Site Altyapısı',
          desc: 'Web sitenizin teknik altyapısını Google\'ın sevdiği şekilde optimize ediyoruz.',
          icon: Zap,
          items: ['Site hızı optimizasyonu', 'Mobile-first indexing', 'Core Web Vitals', 'Schema markup']
        },
        {
          title: 'On-Page SEO',
          subtitle: 'Sayfa İçi',
          desc: 'İçerik, meta etiketler ve sayfa yapısını arama motorları için optimize ediyoruz.',
          icon: FileText,
          items: ['Meta title & description', 'Başlık hiyerarşisi', 'İç linkler', 'Görsel optimizasyonu']
        },
        {
          title: 'Off-Page SEO',
          subtitle: 'Dış Faktörler',
          desc: 'Kaliteli backlink\'ler ve marka sinyalleriyle sitenizin otoritesini artırıyoruz.',
          icon: Link,
          items: ['Link building', 'Guest posting', 'Digital PR', 'Marka bahsetmeleri']
        },
        {
          title: 'İçerik SEO',
          subtitle: 'Content Marketing',
          desc: 'Hedef kelimeleriniz için SEO uyumlu, değerli içerikler üretiyoruz.',
          icon: FileText,
          items: ['Blog yazıları', 'Pillar content', 'Content cluster', 'E-A-T optimizasyonu']
        },
        {
          title: 'Yerel SEO',
          subtitle: 'Local Search',
          desc: 'Google Maps ve yerel aramalarda işletmenizi öne çıkarıyoruz.',
          icon: MapPin,
          items: ['Google My Business', 'Yerel dizinler', 'NAP tutarlılığı', 'Müşteri yorumları']
        },
        {
          title: 'SEO Analitik',
          subtitle: 'Raporlama',
          desc: 'Sıralama, trafik ve dönüşüm verilerini detaylı raporluyoruz.',
          icon: BarChart3,
          items: ['Google Search Console', 'Sıralama takibi', 'Rakip analizi', 'Aylık raporlar']
        }
      ],
      process: [
        { step: '01', title: 'SEO Audit', desc: 'Mevcut sitenizi 200+ faktörde detaylı analiz ediyoruz.' },
        { step: '02', title: 'Keyword Araştırma', desc: 'Hedef kitlenizin aradığı kelimeleri belirliyoruz.' },
        { step: '03', title: 'Optimizasyon', desc: 'Teknik, on-page ve off-page optimizasyonları uyguluyoruz.' },
        { step: '04', title: 'İzleme & Raporlama', desc: 'Sıralamaları izliyor, aylık detaylı raporlar sunuyoruz.' }
      ],
      benefits: [
        { title: 'Sürdürülebilir Trafik', desc: 'Reklam bütçesi olmadan organik ziyaretçi' },
        { title: 'Yüksek ROI', desc: 'Uzun vadede en düşük müşteri edinme maliyeti' },
        { title: 'Güvenilirlik', desc: 'Organik sonuçlara kullanıcılar daha çok güvenir' },
        { title: '7/24 Görünürlük', desc: 'Reklamlar dursa bile trafik devam eder' }
      ]
    },

    'review-management': {
      title: 'Olumsuz Yorum Yönetimi',
      subtitle: 'Online itibarınızı koruyun ve güçlendirin',
      description: 'Google Maps, Trustpilot ve diğer platformlardaki haksız, sahte veya manipülatif yorumları kaldırıyoruz. İtibar yönetimi ve kriz iletişimi ile markanızı koruyoruz.',
      badge: 'İtibar Yönetimi Uzmanı',
      primaryColor: '#EA4335',
      secondaryColor: '#FBBC04',
      accentColor: '#34A853',
      gradientFrom: '#EA4335',
      gradientTo: '#FBBC04',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      stats: [
        { value: '%95', label: 'Kaldırma Başarısı', trend: 'Haksız yorumlar' },
        { value: '500+', label: 'Kaldırılan Yorum', trend: 'Toplam' },
        { value: '48 Saat', label: 'Ortalama Süre', trend: 'İşlem süresi' },
        { value: '+2.5', label: 'Puan Artışı', trend: 'Ortalama iyileşme' }
      ],
      features: [
        {
          title: 'Google Yorum Kaldırma',
          subtitle: 'Google Maps & Business',
          desc: 'Google politikalarına aykırı yorumları tespit edip kaldırma başvurusu yapıyoruz.',
          icon: MapPin,
          items: ['Sahte yorum tespiti', 'Politika ihlali analizi', 'Resmi başvuru', 'Takip süreci']
        },
        {
          title: 'Trustpilot Yönetimi',
          subtitle: 'E-Ticaret İtibarı',
          desc: 'Trustpilot\'ta haksız yorumları kaldırıyor, itibarınızı yönetiyoruz.',
          icon: Star,
          items: ['Yorum analizi', 'Kaldırma başvurusu', 'Yanıt stratejisi', 'Puan iyileştirme']
        },
        {
          title: 'Sosyal Medya İtibarı',
          subtitle: 'Facebook, Instagram',
          desc: 'Sosyal medya platformlarındaki olumsuz içerik ve yorumları yönetiyoruz.',
          icon: Users,
          items: ['Yorum moderasyonu', 'Kriz yönetimi', 'Topluluk yönetimi', 'Marka savunuculuğu']
        },
        {
          title: 'Rakip Sabotajı Tespiti',
          subtitle: 'Sahte Yorum Analizi',
          desc: 'Rakiplerinizin organize saldırılarını tespit edip kanıtlıyoruz.',
          icon: AlertTriangle,
          items: ['Pattern analizi', 'IP tespiti', 'Kanıt toplama', 'Hukuki destek']
        },
        {
          title: 'Olumlu Yorum Stratejisi',
          subtitle: 'Reputation Building',
          desc: 'Memnun müşterilerinizden organik olumlu yorumlar almanızı sağlıyoruz.',
          icon: ThumbsDown,
          items: ['Review kampanyaları', 'QR kod sistemleri', 'E-posta otomasyonu', 'Müşteri takibi']
        },
        {
          title: 'Kriz İletişimi',
          subtitle: 'Damage Control',
          desc: 'Viral olumsuz içerik durumlarında profesyonel kriz yönetimi.',
          icon: Shield,
          items: ['Hızlı müdahale', 'Basın açıklaması', 'SEO suppress', 'İmaj onarımı']
        }
      ],
      process: [
        { step: '01', title: 'Analiz', desc: 'Tüm platformlardaki yorumlarınızı detaylı analiz ediyoruz.' },
        { step: '02', title: 'Strateji', desc: 'Her yorum için uygun aksiyon planı oluşturuyoruz.' },
        { step: '03', title: 'Uygulama', desc: 'Kaldırma başvuruları ve itiraz süreçlerini yönetiyoruz.' },
        { step: '04', title: 'İzleme', desc: 'Sürekli monitoring ile yeni yorumları takip ediyoruz.' }
      ],
      benefits: [
        { title: 'Hızlı Sonuç', desc: '24-72 saat içinde ilk aksiyonlar' },
        { title: 'Yasal Süreç', desc: 'Gerektiğinde hukuki destek' },
        { title: 'Gizlilik', desc: 'Tüm süreçler gizli yürütülür' },
        { title: 'Garanti', desc: 'Sonuç alınamazsa ücret iadesi' }
      ]
    }
  }

  // Servis verisini al
  const data = servicesData[service] || servicesData['google-ads']

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
            <Button size="sm" style={{ backgroundColor: data.primaryColor }} className="text-white hover:opacity-90" onClick={scrollToContact}>
              İletişime Geç
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4" style={{ background: `linear-gradient(135deg, ${data.gradientFrom}15 0%, ${data.accentColor}10 50%, ${data.gradientTo}15 100%)` }}>
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              {data.icon}
              <span className="text-sm font-medium text-gray-700">{data.badge}</span>
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
              <Button size="lg" style={{ backgroundColor: data.primaryColor }} className="text-white px-8 shadow-lg transition-all duration-300 hover:opacity-90 hover:scale-105" onClick={scrollToContact}>
                Ücretsiz Analiz Al
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                <a href="https://wa.me/491724106463?text=Merhaba,%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer">
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
                    <TrendingUp className="h-4 w-4 mr-1" style={{ color: data.secondaryColor }} />
                    <span className="text-xs font-medium" style={{ color: data.secondaryColor }}>{stat.trend}</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${data.gradientFrom}05 0%, white 50%, ${data.gradientTo}05 100%)` }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hizmet Detayları</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına göre kapsamlı çözümler sunuyoruz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f, i) => {
              const IconComponent = f.icon
              return (
                <Card key={i} className="bg-white border-2 hover:shadow-xl transition-all duration-300 group rounded-xl" style={{ borderColor: `${data.primaryColor}20` }}>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors" style={{ backgroundColor: `${data.primaryColor}15` }}>
                      <IconComponent className="h-7 w-7" style={{ color: data.primaryColor }} />
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: data.primaryColor }}>{f.subtitle}</p>
                      <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
                    </div>
                    
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{f.desc}</p>

                    <div className="space-y-2">
                      {f.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: data.secondaryColor }} />
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
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
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white border-2 flex items-center justify-center shadow-sm" style={{ borderColor: data.primaryColor }}>
                  <span className="text-lg font-bold" style={{ color: data.primaryColor }}>{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {data.benefits.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${data.secondaryColor}15` }}>
                    <CheckCircle className="h-5 w-5" style={{ color: data.secondaryColor }} />
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

      {/* CTA Section */}
      <section id="contact-section" className="py-20 px-4" style={{ backgroundColor: data.primaryColor }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ücretsiz Analiz ile Başlayın
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Mevcut durumunuzu analiz ediyor, size özel strateji önerileri sunuyoruz. Hiçbir ücret veya taahhüt yok.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-white hover:bg-gray-100 px-8 shadow-lg transition-all duration-300 hover:scale-105" style={{ color: data.primaryColor }} asChild>
                <a href={`mailto:kontakt@salihmaral.de?subject=Ücretsiz%20${encodeURIComponent(data.title)}%20Analizi`}>
                  Ücretsiz Analiz Al
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 shadow-lg transition-all duration-300 hover:scale-105" asChild>
                <a href={`https://wa.me/491724106463?text=Merhaba,%20${encodeURIComponent(data.title)}%20hakkında%20bilgi%20almak%20istiyorum.`} target="_blank" rel="noopener noreferrer">
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
