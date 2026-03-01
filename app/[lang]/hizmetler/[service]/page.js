'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowLeft, ArrowUpRight, TrendingUp, Search, Image, ShoppingCart, Play, Zap, MapPin, Users, Heart, Video, MessageSquare, Share2, Target, BarChart3, Globe, Link, FileText, Shield, Star, ThumbsDown, AlertTriangle, Eye, Award } from 'lucide-react'

// Translations for navbar
const navTranslations = {
  tr: { services: 'Hizmetler', success: 'Başarılar', about: 'Hakkımda', contact: 'İletişim', home: 'Ana Sayfa' },
  de: { services: 'Dienstleistungen', success: 'Erfolge', about: 'Über mich', contact: 'Kontakt', home: 'Startseite' },
  en: { services: 'Services', success: 'Success', about: 'About', contact: 'Contact', home: 'Home' }
}

// Service slugs for dropdown
const servicesList = {
  tr: [
    { title: 'Google Ads Yönetimi', slug: 'google-ads' },
    { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO Hizmetleri', slug: 'seo' },
    { title: 'Olumsuz Yorum Yönetimi', slug: 'yorum-yonetimi' }
  ],
  de: [
    { title: 'Google Ads Management', slug: 'google-ads' },
    { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO Dienstleistungen', slug: 'seo' },
    { title: 'Bewertungsmanagement', slug: 'yorum-yonetimi' }
  ],
  en: [
    { title: 'Google Ads Management', slug: 'google-ads' },
    { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO Services', slug: 'seo' },
    { title: 'Review Management', slug: 'yorum-yonetimi' }
  ]
}

export default function ServiceDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { service, lang: urlLang } = params
  const [lang, setLang] = useState('de')

  // Load language from URL first, then localStorage
  useEffect(() => {
    // Priority: URL param > localStorage > default 'de'
    if (urlLang && ['de', 'en', 'tr'].includes(urlLang)) {
      setLang(urlLang)
      localStorage.setItem('preferredLanguage', urlLang)
    } else {
      const savedLang = localStorage.getItem('preferredLanguage')
      if (savedLang && ['de', 'en', 'tr'].includes(savedLang)) {
        setLang(savedLang)
      }
    }
  }, [urlLang])

  // Save language to localStorage when changed
  const handleLanguageChange = (newLang) => {
    setLang(newLang)
    localStorage.setItem('preferredLanguage', newLang)
  }

  const navT = navTranslations[lang]
  const services = servicesList[lang]

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  // TÜM HİZMETLER VERİSİ - ÇOK DİLLİ
  const servicesData = {
    'google-ads': {
      title: lang === 'de' ? 'Google Ads Management' : lang === 'en' ? 'Google Ads Management' : 'Google Ads Yönetimi',
      subtitle: lang === 'de' ? 'Mit datengesteuerten Strategien Ihr Unternehmen wachsen lassen' : lang === 'en' ? 'Grow your business with data-driven strategies' : 'Veri odaklı stratejilerle işletmenizi büyütün',
      description: lang === 'de' ? 'Mit 15 Jahren Erfahrung auf Googles Werbeplattform nutzen wir Ihr Werbebudget am effizientesten und erzielen messbare Ergebnisse.' : lang === 'en' ? 'With 15 years of experience on Google\'s advertising platform, we use your ad budget most efficiently and achieve measurable results.' : 'Google\'ın reklam platformunda 15 yıllık deneyimimizle, reklam bütçenizi en verimli şekilde kullanıyor ve ölçülebilir sonuçlar elde ediyoruz.',
      badge: lang === 'de' ? 'Google Partner Zertifiziert' : lang === 'en' ? 'Google Partner Certified' : 'Google Partner Sertifikalı',
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
        { value: '+250%', label: lang === 'de' ? 'Durchschn. ROI-Steigerung' : lang === 'en' ? 'Average ROI Increase' : 'Ortalama ROI Artışı', trend: lang === 'de' ? '+32% ggü. Vormonat' : lang === 'en' ? '+32% vs last month' : '+32% geçen aya göre' },
        { value: '500+', label: lang === 'de' ? 'Erfolgreiche Kampagnen' : lang === 'en' ? 'Successful Campaigns' : 'Başarılı Kampanya', trend: lang === 'de' ? 'Aktives Management' : lang === 'en' ? 'Active management' : 'Aktif yönetim' },
        { value: '%98', label: lang === 'de' ? 'Kundenzufriedenheit' : lang === 'en' ? 'Customer Satisfaction' : 'Müşteri Memnuniyeti', trend: lang === 'de' ? 'Letzte 12 Monate' : lang === 'en' ? 'Last 12 months' : 'Son 12 ay' },
        { value: '15+', label: lang === 'de' ? 'Jahre Erfahrung' : lang === 'en' ? 'Years Experience' : 'Yıllık Deneyim', trend: lang === 'de' ? 'Zertifizierter Experte' : lang === 'en' ? 'Certified expert' : 'Sertifikalı uzman' }
      ],
      features: [
        {
          title: lang === 'de' ? 'Suchnetzwerk-Anzeigen' : lang === 'en' ? 'Search Network Ads' : 'Arama Ağı Reklamları',
          subtitle: 'Search Ads',
          desc: lang === 'de' ? 'Erscheinen Sie direkt vor Ihren Kunden, wenn sie bei Google suchen. Erreichen Sie Nutzer mit hoher Kaufabsicht.' : lang === 'en' ? 'Appear directly in front of your customers when they search on Google. Reach users with high purchase intent.' : 'Müşterileriniz Google\'da arama yaptığında tam karşılarına çıkın. Satın alma niyeti yüksek kullanıcılara ulaşın.',
          icon: Search,
          items: lang === 'de' ? ['Keyword-Recherche', 'Gebotsoptimierung', 'A/B-Test-Strategien', 'Qualitätsfaktor-Verbesserung'] : lang === 'en' ? ['Keyword research', 'Bid optimization', 'A/B test strategies', 'Quality score improvement'] : ['Anahtar kelime araştırması', 'Teklif optimizasyonu', 'A/B test stratejileri', 'Kalite skoru iyileştirme']
        },
        {
          title: lang === 'de' ? 'Display-Anzeigen' : lang === 'en' ? 'Display Ads' : 'Display Reklamları',
          subtitle: lang === 'de' ? 'Visuelles Netzwerk' : lang === 'en' ? 'Visual Network' : 'Görsel Ağ',
          desc: lang === 'de' ? 'Erreichen Sie potenzielle Kunden mit Bannerwerbung auf über 2 Millionen Websites.' : lang === 'en' ? 'Reach potential customers with banner ads on over 2 million websites.' : '2 milyondan fazla web sitesinde banner reklamlarınızla potansiyel müşterilerinize ulaşın.',
          icon: Image,
          items: lang === 'de' ? ['Banner-Design', 'Remarketing', 'Zielgruppensegmentierung', 'Responsive Display Ads'] : lang === 'en' ? ['Banner design', 'Remarketing', 'Audience segmentation', 'Responsive display ads'] : ['Banner tasarım', 'Remarketing', 'Hedef kitle segmentasyonu', 'Responsive display ads']
        },
        {
          title: lang === 'de' ? 'Shopping-Anzeigen' : lang === 'en' ? 'Shopping Ads' : 'Shopping Reklamları',
          subtitle: 'E-Commerce',
          desc: lang === 'de' ? 'Heben Sie sich bei Google mit Produktfoto, Preis und Geschäftsinformationen ab und steigern Sie Ihren Umsatz.' : lang === 'en' ? 'Stand out on Google with product photo, price and store information and increase your sales.' : 'Ürün fotoğrafı, fiyat ve mağaza bilgisiyle Google\'da öne çıkın ve satışlarınızı artırın.',
          icon: ShoppingCart,
          items: lang === 'de' ? ['Merchant Center Setup', 'Feed-Optimierung', 'ROAS-Maximierung', 'Produktsegmentierung'] : lang === 'en' ? ['Merchant Center setup', 'Feed optimization', 'ROAS maximization', 'Product segmentation'] : ['Merchant Center kurulum', 'Feed optimizasyonu', 'ROAS maksimizasyonu', 'Ürün segmentasyonu']
        },
        {
          title: lang === 'de' ? 'YouTube-Anzeigen' : lang === 'en' ? 'YouTube Ads' : 'YouTube Reklamları',
          subtitle: 'Video Ads',
          desc: lang === 'de' ? 'Erzählen Sie Ihre Geschichte Milliarden von Zuschauern auf der größten Videoplattform der Welt.' : lang === 'en' ? 'Tell your story to billions of viewers on the world\'s largest video platform.' : 'Dünyanın en büyük video platformunda milyarlarca izleyiciye hikayenizi anlatın.',
          icon: Play,
          items: lang === 'de' ? ['TrueView-Anzeigen', 'Bumper Ads', 'Discovery-Anzeigen', 'Video-Remarketing'] : lang === 'en' ? ['TrueView ads', 'Bumper ads', 'Discovery ads', 'Video remarketing'] : ['TrueView reklamlar', 'Bumper ads', 'Discovery reklamlar', 'Video remarketing']
        },
        {
          title: 'Performance Max',
          subtitle: lang === 'de' ? 'KI-gestützt' : lang === 'en' ? 'AI-Powered' : 'AI Destekli',
          desc: lang === 'de' ? 'Automatische Optimierung und maximale Conversion auf allen Plattformen mit Googles KI.' : lang === 'en' ? 'Automatic optimization and maximum conversion across all platforms with Google\'s AI.' : 'Google\'ın yapay zekası ile tüm platformlarda otomatik optimizasyon ve maksimum dönüşüm.',
          icon: Zap,
          items: lang === 'de' ? ['Multi-Kanal-Management', 'Auto-Targeting', 'Dynamische Anzeigen', 'Echtzeit-Optimierung'] : lang === 'en' ? ['Multi-channel management', 'Auto targeting', 'Dynamic ads', 'Real-time optimization'] : ['Multi-kanal yönetim', 'Otomatik hedefleme', 'Dinamik reklamlar', 'Gerçek zamanlı optimizasyon']
        },
        {
          title: lang === 'de' ? 'Lokale Anzeigen' : lang === 'en' ? 'Local Ads' : 'Yerel Reklamlar',
          subtitle: 'Local Ads',
          desc: lang === 'de' ? 'Erreichen Sie Kunden in Ihrer Nähe durch Google Maps und lokale Suchergebnisse.' : lang === 'en' ? 'Reach customers near you through Google Maps and local search results.' : 'Google Maps ve yerel aramalarda öne çıkarak yakınınızdaki müşterilere ulaşın.',
          icon: MapPin,
          items: lang === 'de' ? ['Google My Business', 'Standort-Targeting', 'Store Visits Tracking', 'Anruferweiterungen'] : lang === 'en' ? ['Google My Business', 'Location targeting', 'Store visits tracking', 'Call extensions'] : ['Google My Business', 'Konum hedefleme', 'Store visits takibi', 'Çağrı uzantıları']
        }
      ],
      process: [
        { step: '01', title: lang === 'de' ? 'Analyse' : lang === 'en' ? 'Analysis' : 'Analiz', desc: lang === 'de' ? 'Wir analysieren Ihr Unternehmen, Ihre Konkurrenten und Ihre Zielgruppe im Detail.' : lang === 'en' ? 'We analyze your business, competitors and target audience in detail.' : 'İşletmenizi, rakiplerinizi ve hedef kitlenizi detaylı analiz ediyoruz.' },
        { step: '02', title: lang === 'de' ? 'Strategie' : lang === 'en' ? 'Strategy' : 'Strateji', desc: lang === 'de' ? 'Wir erstellen eine datengesteuerte Google Ads-Strategie.' : lang === 'en' ? 'We create a data-driven Google Ads strategy.' : 'Veriye dayalı özel bir Google Ads stratejisi oluşturuyoruz.' },
        { step: '03', title: lang === 'de' ? 'Umsetzung' : lang === 'en' ? 'Implementation' : 'Uygulama', desc: lang === 'de' ? 'Wir richten Kampagnen ein und optimieren Anzeigentexte.' : lang === 'en' ? 'We set up campaigns and optimize ad copy.' : 'Kampanyaları kuruyor, reklam metinlerini optimize ediyoruz.' },
        { step: '04', title: lang === 'de' ? 'Optimierung' : lang === 'en' ? 'Optimization' : 'Optimizasyon', desc: lang === 'de' ? 'Wir maximieren die Leistung durch kontinuierliche Überwachung und A/B-Tests.' : lang === 'en' ? 'We maximize performance through continuous monitoring and A/B testing.' : 'Sürekli izleme ve A/B testleriyle performansı maksimize ediyoruz.' }
      ],
      benefits: [
        { title: lang === 'de' ? 'Google Partner Zertifikat' : lang === 'en' ? 'Google Partner Certificate' : 'Google Partner Sertifikası', desc: lang === 'de' ? 'Offizieller von Google genehmigter Partnerstatus' : lang === 'en' ? 'Official Google-approved partner status' : 'Google tarafından onaylı resmi partner statüsü' },
        { title: lang === 'de' ? 'Transparente Berichterstattung' : lang === 'en' ? 'Transparent Reporting' : 'Şeffaf Raporlama', desc: lang === 'de' ? 'Wöchentliche und monatliche detaillierte Leistungsberichte' : lang === 'en' ? 'Weekly and monthly detailed performance reports' : 'Haftalık ve aylık detaylı performans raporları' },
        { title: lang === 'de' ? 'Personalisierte Strategie' : lang === 'en' ? 'Personalized Strategy' : 'Kişiselleştirilmiş Strateji', desc: lang === 'de' ? 'Speziell für Ihr Unternehmen erstellte Kampagnenpläne' : lang === 'en' ? 'Campaign plans specially prepared for your business' : 'İşletmenize özel hazırlanmış kampanya planları' },
        { title: lang === 'de' ? 'Kontinuierliche Optimierung' : lang === 'en' ? 'Continuous Optimization' : 'Sürekli Optimizasyon', desc: lang === 'de' ? '24/7 Kampagnenüberwachung und Leistungsverbesserung' : lang === 'en' ? '24/7 campaign monitoring and performance improvement' : '7/24 kampanya izleme ve performans iyileştirme' }
      ],
      faq: [
        { 
          q: lang === 'de' ? 'Wie hoch sollte mein tägliches Werbebudget sein?' : lang === 'en' ? 'How much should my daily ad budget be?' : 'Günlük reklam bütçem ne kadar olmalı?',
          a: lang === 'de' ? 'Es gibt kein Mindestbudget, aber um wettbewerbsfähig zu sein, müssen wir die Kosten pro Klick in Ihrer Branche analysieren. Wir empfehlen ein optimales Testbudget, um Daten zu sammeln. Wenn Kampagnen profitabel werden, erhöhen wir das Budget schrittweise.' : lang === 'en' ? 'There is no minimum budget, but to be competitive, we need to analyze the cost per click in your industry. We recommend an optimal test budget to collect data. As campaigns become profitable, we gradually increase the budget.' : 'Google Ads\'te minimum bütçe şartı yoktur, ancak rekabetçi olabilmek için sektörünüzün tıklama başı maliyet oranlarına bakmak gerekir. Veriyi toplamak için optimum bir test bütçesi öneriyoruz. Kampanyalar kârlı hale geldikçe bütçeyi kademeli artırıyoruz.'
        },
        { 
          q: lang === 'de' ? 'Kann ich Anzeigen unter dem Namen meiner Konkurrenten schalten?' : lang === 'en' ? 'Can I advertise under my competitors\' names?' : 'Rakiplerimin isminde reklam verebilir miyim?',
          a: lang === 'de' ? 'Ja, dies ist eine häufig verwendete und effektive Strategie. Sie können Kunden ansprechen, die nach Ihren Konkurrenten suchen. Allerdings müssen wir darauf achten, den Namen des Konkurrenten nicht im Anzeigentext zu verwenden.' : lang === 'en' ? 'Yes, this is a commonly used and effective strategy. You can target customers searching for your competitors. However, we must be careful not to use the competitor\'s name in the ad text.' : 'Evet, bu sık kullanılan ve etkili bir stratejidir. Rakiplerinizi arayan müşterilere kendi teklifinizi sunabilirsiniz. Ancak marka ihlali yapmamak için reklam metinlerinde rakibin adını geçirmiyoruz.'
        },
        { 
          q: lang === 'de' ? 'Wann werden meine Anzeigen veröffentlicht?' : lang === 'en' ? 'When will my ads be published?' : 'Reklamlarım ne zaman yayınlanır?',
          a: lang === 'de' ? 'Nach Abschluss der Kontoeinrichtung werden Anzeigen zur Genehmigung an Google gesendet. In der Regel werden sie innerhalb von 24 Stunden genehmigt und Sie beginnen sofort, Traffic zu erhalten.' : lang === 'en' ? 'After account setup is complete, ads are sent to Google for approval. They are usually approved within 24 hours and you start receiving traffic immediately.' : 'Hesap kurulumu tamamlandıktan sonra reklamlar Google onayına gönderilir. Genellikle 24 saat içinde onaylanır ve hemen trafik almaya başlarsınız.'
        },
        { 
          q: lang === 'de' ? 'Kann ich meine Werbung nicht selbst verwalten?' : lang === 'en' ? 'Can\'t I manage my ads myself?' : 'Kendi reklamımı kendim yönetemez miyim?',
          a: lang === 'de' ? 'Natürlich können Sie, aber das Google Ads-Panel ist sehr detailliert. Eine falsche Auswahl kann dazu führen, dass 50% Ihres Budgets für irrelevante Klicks ausgegeben wird. Die Zusammenarbeit mit einem Experten spart Ihnen mehr.' : lang === 'en' ? 'Of course you can, but the Google Ads panel is very detailed. A wrong selection can cause 50% of your budget to go to irrelevant clicks. Working with an expert saves you more.' : 'Elbette yönetebilirsiniz, ancak Google Ads paneli çok detaylıdır. Yanlış bir seçim, bütçenizin %50\'sinin ilgisiz tıklamalara gitmesine neden olabilir. Bir uzmanla çalışmak size daha fazlasını kazandırır.'
        }
      ]
    },

    'meta-ads': {
      title: lang === 'de' ? 'Meta Ads Management' : lang === 'en' ? 'Meta Ads Management' : 'Meta Ads Yönetimi',
      subtitle: lang === 'de' ? 'Erreichen Sie Millionen auf Facebook & Instagram' : lang === 'en' ? 'Reach millions on Facebook & Instagram' : 'Facebook & Instagram\'da milyonlara ulaşın',
      description: lang === 'de' ? 'Erreichen Sie Ihre Zielgruppe auf Facebook und Instagram mit Metas leistungsstarker Werbeplattform. Steigern Sie Ihre Markenbekanntheit mit detailliertem demografischem Targeting und visuell ausgerichteten Kampagnen.' : lang === 'en' ? 'Reach your target audience on Facebook and Instagram with Meta\'s powerful advertising platform. Increase your brand awareness with detailed demographic targeting and visually focused campaigns.' : 'Meta\'nın güçlü reklam platformuyla Facebook ve Instagram\'da hedef kitlenize ulaşın. Detaylı demografik hedefleme ve görsel odaklı kampanyalarla marka bilinirliğinizi artırın.',
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
        { value: '3.5B+', label: lang === 'de' ? 'Aktive Nutzer' : lang === 'en' ? 'Active Users' : 'Aktif Kullanıcı', trend: 'Facebook + Instagram' },
        { value: '+180%', label: lang === 'de' ? 'Engagement-Steigerung' : lang === 'en' ? 'Engagement Increase' : 'Etkileşim Artışı', trend: lang === 'de' ? 'Durchschnittsergebnis' : lang === 'en' ? 'Average result' : 'Ortalama sonuç' },
        { value: '%94', label: lang === 'de' ? 'Zielgruppengenauigkeit' : lang === 'en' ? 'Target Audience Accuracy' : 'Hedef Kitle Doğruluğu', trend: lang === 'de' ? 'Demografisches Targeting' : lang === 'en' ? 'Demographic targeting' : 'Demografik hedefleme' },
        { value: '200+', label: lang === 'de' ? 'Erfolgreiche Kampagnen' : lang === 'en' ? 'Successful Campaigns' : 'Başarılı Kampanya', trend: lang === 'de' ? 'Abgeschlossene Projekte' : lang === 'en' ? 'Completed projects' : 'Tamamlanan proje' }
      ],
      features: [
        {
          title: lang === 'de' ? 'Facebook-Anzeigen' : lang === 'en' ? 'Facebook Ads' : 'Facebook Reklamları',
          subtitle: 'Feed & Stories',
          desc: lang === 'de' ? 'Erreichen Sie Facebooks 2,9 Milliarden Nutzer. Seien Sie im News Feed, Stories und Marketplace sichtbar.' : lang === 'en' ? 'Reach Facebook\'s 2.9 billion users. Be visible in News Feed, Stories and Marketplace.' : 'Facebook\'un 2.9 milyar kullanıcısına ulaşın. Haber akışı, hikayeler ve Marketplace\'te görünür olun.',
          icon: Users,
          items: lang === 'de' ? ['Carousel-Anzeigen', 'Video-Anzeigen', 'Lead-Generierung', 'Dynamische Produktanzeigen'] : lang === 'en' ? ['Carousel ads', 'Video ads', 'Lead generation', 'Dynamic product ads'] : ['Carousel reklamlar', 'Video reklamlar', 'Lead generation', 'Dinamik ürün reklamları']
        },
        {
          title: lang === 'de' ? 'Instagram-Anzeigen' : lang === 'en' ? 'Instagram Ads' : 'Instagram Reklamları',
          subtitle: lang === 'de' ? 'Visuelles Marketing' : lang === 'en' ? 'Visual Marketing' : 'Görsel Pazarlama',
          desc: lang === 'de' ? 'Heben Sie Ihre Marke auf der visuellen Plattform hervor. Seien Sie in Feed, Stories, Reels und Explore präsent.' : lang === 'en' ? 'Highlight your brand on the visual platform. Be present in Feed, Stories, Reels and Explore.' : 'Görsel odaklı platformda markanızı öne çıkarın. Feed, Stories, Reels ve Explore\'da yer alın.',
          icon: Heart,
          items: lang === 'de' ? ['Story-Anzeigen', 'Reels-Anzeigen', 'Shopping-Anzeigen', 'Influencer-Kooperationen'] : lang === 'en' ? ['Story ads', 'Reels ads', 'Shopping ads', 'Influencer collaborations'] : ['Story reklamları', 'Reels reklamları', 'Shopping reklamları', 'Influencer işbirlikleri']
        },
        {
          title: lang === 'de' ? 'Messenger-Anzeigen' : lang === 'en' ? 'Messenger Ads' : 'Messenger Reklamları',
          subtitle: lang === 'de' ? 'Direkte Kommunikation' : lang === 'en' ? 'Direct Communication' : 'Direkt İletişim',
          desc: lang === 'de' ? 'Starten Sie Einzelgespräche mit potenziellen Kunden. 24/7 Support mit Chatbot-Integration.' : lang === 'en' ? 'Start one-on-one conversations with potential customers. 24/7 support with chatbot integration.' : 'Potansiyel müşterilerle birebir sohbet başlatın. Chatbot entegrasyonu ile 7/24 destek.',
          icon: MessageSquare,
          items: ['Click-to-Messenger', 'Sponsored messages', lang === 'de' ? 'Chatbot-Integration' : lang === 'en' ? 'Chatbot integration' : 'Chatbot entegrasyonu', lang === 'de' ? 'Automatische Antworten' : lang === 'en' ? 'Automatic responses' : 'Otomatik yanıtlar']
        },
        {
          title: 'Audience Network',
          subtitle: lang === 'de' ? 'Erweiterte Reichweite' : lang === 'en' ? 'Extended Reach' : 'Genişletilmiş Erişim',
          desc: lang === 'de' ? 'Zeigen Sie Ihre Anzeigen auf Tausenden von Apps und Websites im Meta-Partnernetzwerk.' : lang === 'en' ? 'Show your ads on thousands of apps and websites in Meta\'s partner network.' : 'Meta\'nın partner ağında binlerce uygulama ve web sitesinde reklamlarınızı gösterin.',
          icon: Globe,
          items: ['Native ads', 'Banner ads', 'Interstitial ads', 'Rewarded video']
        },
        {
          title: 'Remarketing',
          subtitle: lang === 'de' ? 'Retargeting' : lang === 'en' ? 'Retargeting' : 'Yeniden Hedefleme',
          desc: lang === 'de' ? 'Erreichen Sie erneut Personen, die Ihre Website besucht oder Ihre App genutzt haben.' : lang === 'en' ? 'Reach again people who visited your website or used your app.' : 'Web sitenizi ziyaret eden veya uygulamanızı kullanan kişilere tekrar ulaşın.',
          icon: Target,
          items: ['Website custom audiences', 'App activity targeting', 'Customer list targeting', 'Lookalike audiences']
        },
        {
          title: lang === 'de' ? 'Katalogverkäufe' : lang === 'en' ? 'Catalog Sales' : 'Katalog Satışları',
          subtitle: 'E-Commerce',
          desc: lang === 'de' ? 'Synchronisieren Sie Ihren Produktkatalog mit Meta und erstellen Sie dynamische Produktanzeigen.' : lang === 'en' ? 'Sync your product catalog with Meta and create dynamic product ads.' : 'Ürün kataloğunuzu Meta ile senkronize edin ve dinamik ürün reklamları oluşturun.',
          icon: ShoppingCart,
          items: lang === 'de' ? ['Dynamische Anzeigen', 'Kollektionsanzeigen', 'Instagram Shopping', 'Facebook Shops'] : lang === 'en' ? ['Dynamic ads', 'Collection ads', 'Instagram Shopping', 'Facebook Shops'] : ['Dinamik reklamlar', 'Koleksiyon reklamları', 'Instagram Shopping', 'Facebook Shops']
        }
      ],
      process: [
        { step: '01', title: lang === 'de' ? 'Zielgruppenanalyse' : lang === 'en' ? 'Audience Analysis' : 'Hedef Kitle Analizi', desc: lang === 'de' ? 'Wir analysieren demografische, Interessen- und Verhaltensdaten.' : lang === 'en' ? 'We analyze demographic, interest and behavior data.' : 'Demografik, ilgi alanı ve davranış verilerini analiz ediyoruz.' },
        { step: '02', title: lang === 'de' ? 'Kreativstrategie' : lang === 'en' ? 'Creative Strategy' : 'Kreatif Strateji', desc: lang === 'de' ? 'Wir erstellen plattformspezifische visuelle und Videoinhalte.' : lang === 'en' ? 'We prepare platform-specific visual and video content.' : 'Platformlara özel görsel ve video içerikler hazırlıyoruz.' },
        { step: '03', title: lang === 'de' ? 'Kampagnenstart' : lang === 'en' ? 'Campaign Launch' : 'Kampanya Lansmanı', desc: lang === 'de' ? 'Wir ermitteln die effektivsten Anzeigensets durch A/B-Tests.' : lang === 'en' ? 'We determine the most effective ad sets through A/B testing.' : 'A/B testleriyle en etkili reklam setlerini belirliyoruz.' },
        { step: '04', title: lang === 'de' ? 'Leistungsverfolgung' : lang === 'en' ? 'Performance Tracking' : 'Performans Takibi', desc: lang === 'de' ? 'Wir verfolgen und optimieren Conversions mit Meta Pixel.' : lang === 'en' ? 'We track and optimize conversions with Meta Pixel.' : 'Meta Pixel ile dönüşümleri izliyor, optimize ediyoruz.' }
      ],
      benefits: [
        { title: lang === 'de' ? 'Detailliertes Targeting' : lang === 'en' ? 'Detailed Targeting' : 'Detaylı Hedefleme', desc: lang === 'de' ? 'Targeting nach Alter, Geschlecht, Interessen, Verhalten' : lang === 'en' ? 'Targeting by age, gender, interests, behavior' : 'Yaş, cinsiyet, ilgi alanı, davranış bazlı hedefleme' },
        { title: lang === 'de' ? 'Visuell fokussiert' : lang === 'en' ? 'Visual Focus' : 'Görsel Odaklı', desc: lang === 'de' ? 'Aufmerksamkeitsstarke visuelle und Videoformate' : lang === 'en' ? 'Attention-grabbing visual and video formats' : 'Dikkat çekici görsel ve video formatları' },
        { title: lang === 'de' ? 'Große Reichweite' : lang === 'en' ? 'Wide Reach' : 'Geniş Erişim', desc: lang === 'de' ? 'Zugang zu über 3,5 Milliarden aktiven Nutzern' : lang === 'en' ? 'Access to over 3.5 billion active users' : '3.5 milyardan fazla aktif kullanıcıya erişim' },
        { title: lang === 'de' ? 'E-Commerce-Integration' : lang === 'en' ? 'E-Commerce Integration' : 'E-Ticaret Entegrasyonu', desc: lang === 'de' ? 'Shopify, WooCommerce Integrationen' : lang === 'en' ? 'Shopify, WooCommerce integrations' : 'Shopify, WooCommerce entegrasyonları' }
      ],
      faq: [
        { 
          q: lang === 'de' ? 'Auf welcher Plattform sollte ich werben - Facebook oder Instagram?' : lang === 'en' ? 'Which platform should I advertise on - Facebook or Instagram?' : 'Hangi platformda reklam vermeliyim - Facebook mu Instagram mı?',
          a: lang === 'de' ? 'Es hängt von Ihrer Zielgruppe ab. Instagram ist effektiver für jüngere Zielgruppen und visuelle Produkte. Facebook erreicht eine breitere Altersspanne und eignet sich besser für B2B. Wir analysieren Ihre Zielgruppe und empfehlen die optimale Verteilung.' : lang === 'en' ? 'It depends on your target audience. Instagram is more effective for younger audiences and visual products. Facebook reaches a wider age range and is better for B2B. We analyze your audience and recommend the optimal distribution.' : 'Hedef kitlenize bağlı. Instagram genç kitleler ve görsel ürünler için daha etkili. Facebook daha geniş yaş aralığına ulaşır ve B2B için daha iyi. Hedef kitlenizi analiz edip optimum dağılımı öneriyoruz.'
        },
        { 
          q: lang === 'de' ? 'Wie viel sollte das Werbebudget sein?' : lang === 'en' ? 'How much should the advertising budget be?' : 'Reklam bütçesi ne kadar olmalı?',
          a: lang === 'de' ? 'Für erste Tests empfehlen wir ein Budget, das genügend Daten sammeln kann. Meta\'s Algorithmus lernt aus Daten und optimiert entsprechend. Nach den Tests erhöhen wir das Budget für erfolgreiche Kampagnen.' : lang === 'en' ? 'For initial tests, we recommend a budget that can collect enough data. Meta\'s algorithm learns from data and optimizes accordingly. After tests, we increase budget for successful campaigns.' : 'İlk testler için yeterli veri toplayabilecek bir bütçe öneriyoruz. Meta\'nın algoritması veriden öğrenir ve buna göre optimize eder. Testlerden sonra başarılı kampanyaların bütçesini artırıyoruz.'
        },
        { 
          q: lang === 'de' ? 'Ist die Erstellung von Inhalten in Ihrem Service enthalten?' : lang === 'en' ? 'Is content creation included in your service?' : 'İçerik üretimi hizmetinize dahil mi?',
          a: lang === 'de' ? 'Ja, unser kreatives Team erstellt professionelle Grafiken und Videoinhalte. Wir können auch mit Ihren vorhandenen Inhalten arbeiten und diese für Werbezwecke optimieren.' : lang === 'en' ? 'Yes, our creative team produces professional graphics and video content. We can also work with your existing content and optimize it for advertising purposes.' : 'Evet, kreatif ekibimiz profesyonel grafik ve video içerikler üretiyor. Mevcut içeriklerinizi de kullanarak reklam için optimize edebiliyoruz.'
        }
      ]
    },

    'tiktok-ads': {
      title: lang === 'de' ? 'TikTok Ads Management' : lang === 'en' ? 'TikTok Ads Management' : 'TikTok Ads Yönetimi',
      subtitle: lang === 'de' ? 'Der effektivste Weg, die Generation Z zu erreichen' : lang === 'en' ? 'The most effective way to reach Gen Z' : 'Z kuşağına ulaşmanın en etkili yolu',
      description: lang === 'de' ? 'Nutzen Sie die virale Kraft von TikTok. Erreichen Sie ein junges Publikum mit Kurzvideoformaten und steigern Sie Ihre Markenbekanntheit mit trendigen Inhalten.' : lang === 'en' ? 'Leverage TikTok\'s viral power. Reach young audiences with short video formats and multiply your brand awareness with trending content.' : 'TikTok\'un viral gücünden yararlanın. Kısa video formatıyla genç kitleye ulaşın, trend olan içeriklerle marka bilinirliğinizi katlayın.',
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
        { value: '1B+', label: lang === 'de' ? 'Aktive Nutzer' : lang === 'en' ? 'Active Users' : 'Aktif Kullanıcı', trend: lang === 'de' ? 'Monatlich aktiv' : lang === 'en' ? 'Monthly active' : 'Aylık aktif' },
        { value: '+300%', label: lang === 'de' ? 'Engagement-Rate' : lang === 'en' ? 'Engagement Rate' : 'Etkileşim Oranı', trend: lang === 'de' ? 'Im Vergleich zu anderen Plattformen' : lang === 'en' ? 'Compared to other platforms' : 'Diğer platformlara göre' },
        { value: '52 min', label: lang === 'de' ? 'Tägliche Nutzung' : lang === 'en' ? 'Daily Usage' : 'Günlük Kullanım', trend: lang === 'de' ? 'Durchschnittliche Zeit' : lang === 'en' ? 'Average time' : 'Ortalama süre' },
        { value: '%60', label: lang === 'de' ? 'Generation Z' : lang === 'en' ? 'Gen Z' : 'Z Kuşağı', trend: lang === 'de' ? 'Alter 16-24' : lang === 'en' ? 'Age 16-24' : '16-24 yaş arası' }
      ],
      features: [
        {
          title: lang === 'de' ? 'In-Feed-Anzeigen' : lang === 'en' ? 'In-Feed Ads' : 'In-Feed Reklamları',
          subtitle: 'For You Page',
          desc: lang === 'de' ? 'Erscheinen Sie im "For You"-Feed der Nutzer zwischen organischen Inhalten.' : lang === 'en' ? 'Appear in users\' "For You" feed among organic content.' : 'Kullanıcıların "For You" akışında organik içerikler arasında görünün.',
          icon: Play,
          items: lang === 'de' ? ['9-15 Sekunden Videos', 'Vollbild-Erlebnis', 'CTA-Buttons', 'Audio-Inhalte'] : lang === 'en' ? ['9-15 second videos', 'Full screen experience', 'CTA buttons', 'Audio content'] : ['9-15 saniye videolar', 'Tam ekran deneyim', 'CTA butonları', 'Sesli içerik']
        },
        {
          title: lang === 'de' ? 'TopView-Anzeigen' : lang === 'en' ? 'TopView Ads' : 'TopView Reklamları',
          subtitle: lang === 'de' ? 'Premium-Sichtbarkeit' : lang === 'en' ? 'Premium Visibility' : 'Premium Görünürlük',
          desc: lang === 'de' ? 'Seien Sie die erste Anzeige beim App-Start. Maximale Sichtbarkeit und Wirkung.' : lang === 'en' ? 'Be the first ad when the app opens. Maximum visibility and impact.' : 'Uygulama açılışında ilk görünen reklam olun. Maksimum görünürlük ve etki.',
          icon: Eye,
          items: lang === 'de' ? ['Bis zu 60 Sekunden', 'Ton an beim Start', 'Vollbild', 'Täglich 1 Marke'] : lang === 'en' ? ['Up to 60 seconds', 'Sound on start', 'Full screen', 'Daily 1 brand'] : ['60 saniyeye kadar', 'Ses açık başlangıç', 'Tam ekran', 'Günlük 1 marka']
        },
        {
          title: 'Branded Hashtag Challenge',
          subtitle: lang === 'de' ? 'Virale Kampagnen' : lang === 'en' ? 'Viral Campaigns' : 'Viral Kampanyalar',
          desc: lang === 'de' ? 'Erstellen Sie eine spezielle Hashtag-Challenge für Ihre Marke, lösen Sie nutzergenerierte Inhalte aus.' : lang === 'en' ? 'Create a special hashtag challenge for your brand, trigger user-generated content.' : 'Markanız için özel hashtag challenge oluşturun, kullanıcı içeriklerini tetikleyin.',
          icon: Share2,
          items: lang === 'de' ? ['Spezielle Hashtag-Seite', 'Nutzerbeteiligung', 'Virales Potenzial', 'UGC-Inhalte'] : lang === 'en' ? ['Custom hashtag page', 'User participation', 'Viral potential', 'UGC content'] : ['Özel hashtag sayfası', 'Kullanıcı katılımı', 'Viral potansiyel', 'UGC içerik']
        },
        {
          title: 'Branded Effects',
          subtitle: lang === 'de' ? 'AR-Filter' : lang === 'en' ? 'AR Filters' : 'AR Filtreler',
          desc: lang === 'de' ? 'Erstellen Sie markenspezifische AR-Filter und Effekte. Lassen Sie Nutzer Inhalte erstellen.' : lang === 'en' ? 'Create brand-specific AR filters and effects. Let users create content.' : 'Markanıza özel AR filtreleri ve efektler oluşturun. Kullanıcılar içerik üretsin.',
          icon: Zap,
          items: lang === 'de' ? ['2D/3D-Effekte', 'Gesichtsfilter', 'Gamification', 'Markenintegration'] : lang === 'en' ? ['2D/3D effects', 'Face filters', 'Gamification', 'Brand integration'] : ['2D/3D efektler', 'Yüz filtreleri', 'Oyunlaştırma', 'Marka entegrasyonu']
        },
        {
          title: 'Spark Ads',
          subtitle: lang === 'de' ? 'Organischer Boost' : lang === 'en' ? 'Organic Boost' : 'Organik Boost',
          desc: lang === 'de' ? 'Boosten Sie Ihre bestehenden organischen TikTok-Inhalte oder Influencer-Inhalte.' : lang === 'en' ? 'Boost your existing organic TikTok content or influencer content.' : 'Mevcut organik TikTok içeriklerinizi veya influencer içeriklerini boost edin.',
          icon: TrendingUp,
          items: lang === 'de' ? ['Organischer Content-Boost', 'Influencer-Inhalte', 'Authentisches Aussehen', 'Hohes Engagement'] : lang === 'en' ? ['Organic content boost', 'Influencer content', 'Authentic look', 'High engagement'] : ['Organik içerik boost', 'Influencer içerikleri', 'Otantik görünüm', 'Yüksek etkileşim']
        },
        {
          title: 'TikTok Shop',
          subtitle: lang === 'de' ? 'Social Commerce' : lang === 'en' ? 'Social Commerce' : 'Sosyal Ticaret',
          desc: lang === 'de' ? 'In-App-Shopping-Erlebnis. Verkaufen Sie direkt aus Videos.' : lang === 'en' ? 'In-app shopping experience. Sell directly from videos.' : 'Uygulama içi alışveriş deneyimi. Videolardan direkt satış yapın.',
          icon: ShoppingCart,
          items: lang === 'de' ? ['Live-Shopping', 'Produktvitrinen', 'Affiliate Marketing', 'Checkout-Integration'] : lang === 'en' ? ['Live shopping', 'Product showcases', 'Affiliate marketing', 'Checkout integration'] : ['Canlı alışveriş', 'Ürün vitrinleri', 'Affiliate marketing', 'Checkout entegrasyonu']
        }
      ],
      process: [
        { step: '01', title: lang === 'de' ? 'Trendanalyse' : lang === 'en' ? 'Trend Analysis' : 'Trend Analizi', desc: lang === 'de' ? 'Wir analysieren TikTok-Trends und virale Inhalte.' : lang === 'en' ? 'We analyze TikTok trends and viral content.' : 'TikTok trendlerini ve viral içerikleri analiz ediyoruz.' },
        { step: '02', title: lang === 'de' ? 'Content-Produktion' : lang === 'en' ? 'Content Production' : 'İçerik Üretimi', desc: lang === 'de' ? 'Wir erstellen plattformspezifische, aufmerksamkeitsstarke Videos.' : lang === 'en' ? 'We create platform-specific, attention-grabbing videos.' : 'Platforma özgü, dikkat çekici videolar hazırlıyoruz.' },
        { step: '03', title: lang === 'de' ? 'Influencer-Matching' : lang === 'en' ? 'Influencer Matching' : 'Influencer Eşleştirme', desc: lang === 'de' ? 'Wir finden passende TikTok-Creator für Ihre Marke.' : lang === 'en' ? 'We find suitable TikTok creators for your brand.' : 'Markanıza uygun TikTok creator\'ları buluyoruz.' },
        { step: '04', title: lang === 'de' ? 'Virale Optimierung' : lang === 'en' ? 'Viral Optimization' : 'Viral Optimizasyon', desc: lang === 'de' ? 'Wir maximieren die Reichweite mit algorithmusfreundlichen Inhalten.' : lang === 'en' ? 'We maximize reach with algorithm-friendly content.' : 'Algoritma dostu içeriklerle erişimi maksimize ediyoruz.' }
      ],
      benefits: [
        { title: lang === 'de' ? 'Zugang zu jungem Publikum' : lang === 'en' ? 'Young Audience Access' : 'Genç Kitleye Erişim', desc: lang === 'de' ? 'Direkter Zugang zu Gen Z und jungen Millennials' : lang === 'en' ? 'Direct access to Gen Z and young millennials' : 'Z kuşağı ve genç millennials\'a direkt ulaşım' },
        { title: lang === 'de' ? 'Virales Potenzial' : lang === 'en' ? 'Viral Potential' : 'Viral Potansiyel', desc: lang === 'de' ? 'Möglichkeit organischer viraler Verbreitung' : lang === 'en' ? 'Possibility of organic viral spread' : 'Organik viral yayılım imkanı' },
        { title: lang === 'de' ? 'Hohes Engagement' : lang === 'en' ? 'High Engagement' : 'Yüksek Etkileşim', desc: lang === 'de' ? '3x mehr Engagement als andere Plattformen' : lang === 'en' ? '3x more engagement than other platforms' : 'Diğer platformlardan 3x daha fazla etkileşim' },
        { title: lang === 'de' ? 'Niedrige Kosten' : lang === 'en' ? 'Low Cost' : 'Düşük Maliyet', desc: lang === 'de' ? 'Wettbewerbsfähige Preise bei CPM und CPC' : lang === 'en' ? 'Competitive prices in CPM and CPC' : 'CPM ve CPC\'de rekabetçi fiyatlar' }
      ],
      faq: [
        { 
          q: lang === 'de' ? 'Ist TikTok nur für junge Zielgruppen geeignet?' : lang === 'en' ? 'Is TikTok only suitable for young audiences?' : 'TikTok sadece genç kitleler için mi uygun?',
          a: lang === 'de' ? 'Obwohl 60% der Nutzer zur Generation Z gehören, wächst auch das ältere Publikum schnell. Besonders für Produkte und Dienstleistungen mit visuellem und unterhaltsamen Potenzial eignet sich TikTok für alle Altersgruppen.' : lang === 'en' ? 'Although 60% of users are Gen Z, the older audience is also growing rapidly. Especially for products and services with visual and entertaining potential, TikTok is suitable for all ages.' : 'Kullanıcıların %60\'ı Z kuşağı olsa da, daha yaşlı kitle de hızla büyüyor. Özellikle görsel ve eğlenceli potansiyeli olan ürün ve hizmetler için TikTok her yaş grubuna hitap edebilir.'
        },
        { 
          q: lang === 'de' ? 'Ist professionelle Videoproduktion erforderlich?' : lang === 'en' ? 'Is professional video production required?' : 'Profesyonel video prodüksiyonu gerekli mi?',
          a: lang === 'de' ? 'Nein! TikTok bevorzugt authentische, natürliche Inhalte. Mit einem Smartphone aufgenommene, kreative und trendige Videos erzielen oft bessere Ergebnisse als professionelle Produktionen.' : lang === 'en' ? 'No! TikTok favors authentic, natural content. Creative and trendy videos shot with a smartphone often perform better than professional productions.' : 'Hayır! TikTok otantik, doğal içerikleri tercih ediyor. Telefonla çekilen yaratıcı ve trend içerikler, profesyonel prodüksiyonlardan daha iyi performans gösterebilir.'
        },
        { 
          q: lang === 'de' ? 'Wie lange dauert es, Ergebnisse zu sehen?' : lang === 'en' ? 'How long does it take to see results?' : 'Sonuç almak ne kadar sürer?',
          a: lang === 'de' ? 'TikTok ist eine der schnellsten Plattformen. Mit dem richtigen Inhalt können Sie innerhalb von 24-48 Stunden virale Reichweite erzielen.' : lang === 'en' ? 'TikTok is one of the fastest platforms. With the right content, you can achieve viral reach within 24-48 hours.' : 'TikTok en hızlı sonuç veren platformlardan biri. Doğru içerikle 24-48 saat içinde viral erişim yakalayabilirsiniz.'
        }
      ]
    },

    'x-ads': {
      title: lang === 'de' ? 'X (Twitter) Ads Management' : lang === 'en' ? 'X (Twitter) Ads Management' : 'X (Twitter) Ads Yönetimi',
      subtitle: lang === 'de' ? 'Echtzeit-Marketing und Trend-Erfassung' : lang === 'en' ? 'Real-time marketing and trend catching' : 'Gerçek zamanlı pazarlama ve trend yakalama',
      description: lang === 'de' ? 'Nehmen Sie an aktuellen Trends auf der X-Plattform teil, setzen Sie die Agenda und erreichen Sie ein professionelles Publikum. Die ideale Plattform für B2B-Marketing und Thought Leadership.' : lang === 'en' ? 'Join instant trends on the X platform, set the agenda and reach professional audiences. The ideal platform for B2B marketing and thought leadership.' : 'X platformunda anlık trendlere katılın, gündem oluşturun ve profesyonel kitleye ulaşın. B2B pazarlama ve thought leadership için ideal platform.',
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
        { value: '500M+', label: lang === 'de' ? 'Aktive Nutzer' : lang === 'en' ? 'Active Users' : 'Aktif Kullanıcı', trend: lang === 'de' ? 'Monatlich aktiv' : lang === 'en' ? 'Monthly active' : 'Aylık aktif' },
        { value: '%80', label: lang === 'de' ? 'Professionelles Publikum' : lang === 'en' ? 'Professional Audience' : 'Profesyonel Kitle', trend: lang === 'de' ? 'Geschäftsnutzer' : lang === 'en' ? 'Business users' : 'İş dünyası kullanıcıları' },
        { value: '6000', label: lang === 'de' ? 'Tweets/Sekunde' : lang === 'en' ? 'Tweets/Second' : 'Tweet/Saniye', trend: lang === 'de' ? 'Echtzeit' : lang === 'en' ? 'Real-time' : 'Gerçek zamanlı' },
        { value: '+150%', label: lang === 'de' ? 'B2B-Conversion' : lang === 'en' ? 'B2B Conversion' : 'B2B Dönüşüm', trend: lang === 'de' ? 'Durchschnittliche Steigerung' : lang === 'en' ? 'Average increase' : 'Ortalama artış' }
      ],
      features: [
        {
          title: 'Promoted Tweets',
          subtitle: lang === 'de' ? 'Gesponserte Tweets' : lang === 'en' ? 'Sponsored Tweets' : 'Sponsorlu Tweetler',
          desc: lang === 'de' ? 'Erreichen Sie mit Ihren Tweets ein breiteres Publikum. Organisches Aussehen in der Timeline.' : lang === 'en' ? 'Reach a wider audience with your tweets. Organic appearance in the timeline.' : 'Tweetlerinizi daha geniş kitlelere ulaştırın. Timeline\'da organik görünüm.',
          icon: MessageSquare,
          items: lang === 'de' ? ['Text + Medien', 'Thread-Anzeigen', 'Poll-Anzeigen', 'Conversation Cards'] : lang === 'en' ? ['Text + media', 'Thread ads', 'Poll ads', 'Conversation cards'] : ['Metin + medya', 'Thread reklamları', 'Poll reklamları', 'Conversation cards']
        },
        {
          title: 'Promoted Accounts',
          subtitle: lang === 'de' ? 'Konto-Wachstum' : lang === 'en' ? 'Account Growth' : 'Hesap Büyütme',
          desc: lang === 'de' ? 'Erhöhen Sie Ihre Followerzahl. Erscheinen Sie in "Wem folgen"-Empfehlungen.' : lang === 'en' ? 'Increase your follower count. Appear in "Who to follow" recommendations.' : 'Takipçi sayınızı artırın. "Kimi takip etmeli" önerilerinde görünün.',
          icon: Users,
          items: lang === 'de' ? ['Follower-Gewinnung', 'Gezielte Empfehlungen', 'Branchen-Targeting', 'Interessenbasiert'] : lang === 'en' ? ['Follower acquisition', 'Targeted recommendations', 'Industry targeting', 'Interest-based'] : ['Takipçi kazanımı', 'Hedefli öneriler', 'Sektörel hedefleme', 'İlgi alanı bazlı']
        },
        {
          title: 'Promoted Trends',
          subtitle: lang === 'de' ? 'Agenda setzen' : lang === 'en' ? 'Set the Agenda' : 'Gündem Oluşturma',
          desc: lang === 'de' ? 'Erscheinen Sie auf Platz 1 der Trendliste. Maximale Sichtbarkeit und Wirkung.' : lang === 'en' ? 'Appear #1 on the trend list. Maximum visibility and impact.' : 'Trend listesinde 1 numarada görünün. Maksimum görünürlük ve etki.',
          icon: TrendingUp,
          items: lang === 'de' ? ['24 Stunden Trend', 'Spezieller Hashtag', 'Explore-Seite', 'Maximale Reichweite'] : lang === 'en' ? ['24-hour trend', 'Custom hashtag', 'Explore page', 'Maximum reach'] : ['24 saat trend', 'Özel hashtag', 'Explore sayfası', 'Maksimum erişim']
        },
        {
          title: lang === 'de' ? 'Video-Anzeigen' : lang === 'en' ? 'Video Ads' : 'Video Reklamları',
          subtitle: 'Video Ads',
          desc: lang === 'de' ? 'Erregen Sie Aufmerksamkeit mit automatisch abspielenden Videoanzeigen und vermitteln Sie Ihre Botschaft.' : lang === 'en' ? 'Grab attention with auto-playing video ads and convey your message.' : 'Otomatik oynatılan video reklamlarla dikkat çekin ve mesajınızı iletin.',
          icon: Video,
          items: lang === 'de' ? ['Pre-roll Videos', 'Amplify-Sponsoring', 'Video Website Cards', 'Live-Stream Boost'] : lang === 'en' ? ['Pre-roll videos', 'Amplify sponsorship', 'Video website cards', 'Live stream boost'] : ['Pre-roll videolar', 'Amplify sponsorluk', 'Video website cards', 'Canlı yayın boost']
        },
        {
          title: lang === 'de' ? 'Takeover-Anzeigen' : lang === 'en' ? 'Takeover Ads' : 'Takeover Reklamları',
          subtitle: lang === 'de' ? 'Premium-Platzierung' : lang === 'en' ? 'Premium Placement' : 'Premium Yerleşim',
          desc: lang === 'de' ? 'Premium-Sichtbarkeit ganz oben auf der Timeline oder Explore-Seite.' : lang === 'en' ? 'Premium visibility at the top of the Timeline or Explore page.' : 'Timeline veya Explore sayfasının en üstünde premium görünürlük.',
          icon: Award,
          items: lang === 'de' ? ['Timeline Takeover', 'Explore Takeover', 'Trend Takeover+', 'Spezielle Events'] : lang === 'en' ? ['Timeline takeover', 'Explore takeover', 'Trend takeover+', 'Special events'] : ['Timeline takeover', 'Explore takeover', 'Trend takeover+', 'Özel etkinlikler']
        },
        {
          title: 'Carousel Ads',
          subtitle: lang === 'de' ? 'Mehrere Inhalte' : lang === 'en' ? 'Multiple Content' : 'Çoklu İçerik',
          desc: lang === 'de' ? 'Erzählen Sie eine Geschichte mit bis zu 6 Bildern oder Videos in einem Tweet.' : lang === 'en' ? 'Tell a story with up to 6 images or videos in a single tweet.' : 'Tek tweet\'te 6\'ya kadar görsel veya video ile hikaye anlatın.',
          icon: Image,
          items: lang === 'de' ? ['6 Karten Kapazität', 'Swipe-Erlebnis', 'Verschiedene CTAs', 'Produktvitrine'] : lang === 'en' ? ['6 card capacity', 'Swipe experience', 'Different CTAs', 'Product showcase'] : ['6 kart kapasitesi', 'Swipe deneyimi', 'Farklı CTA\'lar', 'Ürün vitrini']
        }
      ],
      process: [
        { step: '01', title: lang === 'de' ? 'Trendverfolgung' : lang === 'en' ? 'Trend Tracking' : 'Gündem Takibi', desc: lang === 'de' ? 'Wir verfolgen Trends und Gespräche in Ihrer Branche.' : lang === 'en' ? 'We track trends and conversations in your industry.' : 'Sektörünüzle ilgili trendleri ve konuşmaları izliyoruz.' },
        { step: '02', title: lang === 'de' ? 'Content-Strategie' : lang === 'en' ? 'Content Strategy' : 'İçerik Stratejisi', desc: lang === 'de' ? 'Wir erstellen einen Tweet-Kalender und Echtzeit-Marketingplan.' : lang === 'en' ? 'We create a tweet calendar and real-time marketing plan.' : 'Tweet takvimi ve real-time marketing planı oluşturuyoruz.' },
        { step: '03', title: 'Targeting', desc: lang === 'de' ? 'Wir führen Targeting nach Interessen, Keywords und Follower-Lookalikes durch.' : lang === 'en' ? 'We perform targeting by interests, keywords and follower lookalikes.' : 'İlgi alanı, keyword ve follower lookalike hedefleme yapıyoruz.' },
        { step: '04', title: lang === 'de' ? 'Analyse' : lang === 'en' ? 'Analysis' : 'Analiz', desc: lang === 'de' ? 'Wir verfolgen Engagement-, Reichweiten- und Conversion-Metriken.' : lang === 'en' ? 'We track engagement, reach and conversion metrics.' : 'Engagement, reach ve dönüşüm metriklerini takip ediyoruz.' }
      ],
      benefits: [
        { title: lang === 'de' ? 'Echtzeit' : lang === 'en' ? 'Real-Time' : 'Gerçek Zamanlı', desc: lang === 'de' ? 'Schnelle Reaktion auf aktuelle Trends und Ereignisse' : lang === 'en' ? 'Quick response to current trends and events' : 'Anlık trendlere ve olaylara hızlı tepki' },
        { title: lang === 'de' ? 'B2B stark' : lang === 'en' ? 'B2B Strong' : 'B2B Güçlü', desc: lang === 'de' ? 'Zugang zu professionellem und entscheidungstreffendem Publikum' : lang === 'en' ? 'Access to professional and decision-making audience' : 'Profesyonel ve karar verici kitleye erişim' },
        { title: 'Thought Leadership', desc: lang === 'de' ? 'Position als Meinungsführer in der Branche aufbauen' : lang === 'en' ? 'Build thought leader position in the industry' : 'Sektörde fikir lideri konumu oluşturma' },
        { title: lang === 'de' ? 'Virales Potenzial' : lang === 'en' ? 'Viral Potential' : 'Viral Potansiyel', desc: lang === 'de' ? 'Organische Verbreitung durch Retweets' : lang === 'en' ? 'Organic spread through retweets' : 'Retweet ile organik yayılım' }
      ],
      faq: [
        { 
          q: lang === 'de' ? 'Ist X (Twitter) für B2C-Unternehmen geeignet?' : lang === 'en' ? 'Is X (Twitter) suitable for B2C companies?' : 'X (Twitter) B2C şirketler için uygun mu?',
          a: lang === 'de' ? 'Ja, aber X ist besonders stark für B2B und Dienstleistungen. Für B2C ist es effektiv für schnelle Kampagnen, Eventmarketing und Kundenservice.' : lang === 'en' ? 'Yes, but X is particularly strong for B2B and services. For B2C, it\'s effective for quick campaigns, event marketing, and customer service.' : 'Evet, ancak X özellikle B2B ve hizmetler için güçlü. B2C için hızlı kampanyalar, etkinlik pazarlaması ve müşteri hizmetlerinde etkili.'
        },
        { 
          q: lang === 'de' ? 'Wie kann ich Trends verfolgen?' : lang === 'en' ? 'How can I track trends?' : 'Trendleri nasıl takip edebilirim?',
          a: lang === 'de' ? 'Wir überwachen kontinuierlich branchenspezifische Keywords und Hashtags. Mit Echtzeit-Benachrichtigungen informieren wir Sie über relevante Trends.' : lang === 'en' ? 'We continuously monitor industry-specific keywords and hashtags. With real-time alerts, we inform you about relevant trends.' : 'Sektöre özel anahtar kelimeleri ve hashtag\'leri sürekli izliyoruz. Gerçek zamanlı bildirimlerle ilgili trendlerden haberdar ediyoruz.'
        },
        { 
          q: lang === 'de' ? 'Was ist der Unterschied zwischen organisch und bezahlt?' : lang === 'en' ? 'What is the difference between organic and paid?' : 'Organik ve ücretli arasındaki fark nedir?',
          a: lang === 'de' ? 'Organisch sind kostenlose Posts, die durch Retweets verbreitet werden. Bezahlte Anzeigen erhöhen gezielt Ihre Reichweite.' : lang === 'en' ? 'Organic are free posts spread through retweets. Paid ads increase your reach in a targeted way.' : 'Organik, retweet\'lerle yayılan ücretsiz paylaşımlar. Ücretli reklamlar hedefli şekilde erişiminizi artırır.'
        }
      ]
    },

    'seo': {
      title: lang === 'de' ? 'SEO Dienstleistungen' : lang === 'en' ? 'SEO Services' : 'SEO Hizmetleri',
      subtitle: lang === 'de' ? 'Organisch auf Seite 1 bei Google erscheinen' : lang === 'en' ? 'Appear organically on page 1 of Google' : 'Google\'da organik olarak 1. sayfada yer alın',
      description: lang === 'de' ? 'Mit Suchmaschinenoptimierung bringen wir Ihre Website auf die erste Seite von Google. Professionelle SEO-Lösungen für nachhaltigen organischen Traffic und langfristige digitale Präsenz.' : lang === 'en' ? 'With search engine optimization, we bring your website to Google\'s first page. Professional SEO solutions for sustainable organic traffic and long-term digital presence.' : 'Arama motoru optimizasyonu ile web sitenizi Google\'ın ilk sayfasına taşıyoruz. Sürdürülebilir organik trafik ve uzun vadeli dijital varlık için profesyonel SEO çözümleri.',
      badge: lang === 'de' ? 'SEO Experte - 15 Jahre' : lang === 'en' ? 'SEO Expert - 15 Years' : 'SEO Uzmanı - 15 Yıl',
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
        { value: '+400%', label: lang === 'de' ? 'Organischer Traffic' : lang === 'en' ? 'Organic Traffic' : 'Organik Trafik', trend: lang === 'de' ? 'Durchschnittliche Steigerung' : lang === 'en' ? 'Average increase' : 'Ortalama artış' },
        { value: '150+', label: lang === 'de' ? 'Top-Ranking Keywords' : lang === 'en' ? 'Top-Ranking Keywords' : 'Üst Sıra Anahtar Kelime', trend: lang === 'de' ? 'Erste Seite' : lang === 'en' ? 'First page' : 'İlk sayfa' },
        { value: '%85', label: lang === 'de' ? 'Kundenbindung' : lang === 'en' ? 'Customer Retention' : 'Müşteri Kalıcılığı', trend: lang === 'de' ? 'Langfristig' : lang === 'en' ? 'Long-term' : 'Uzun vadeli' },
        { value: lang === 'de' ? '6 Monate' : lang === 'en' ? '6 Months' : '6 Ay', label: lang === 'de' ? 'Ergebniszeit' : lang === 'en' ? 'Result Time' : 'Sonuç Süresi', trend: lang === 'de' ? 'Durchschnitt' : lang === 'en' ? 'Average' : 'Ortalama' }
      ],
      features: [
        {
          title: lang === 'de' ? 'Technisches SEO' : lang === 'en' ? 'Technical SEO' : 'Teknik SEO',
          subtitle: lang === 'de' ? 'Website-Infrastruktur' : lang === 'en' ? 'Site Infrastructure' : 'Site Altyapısı',
          desc: lang === 'de' ? 'Wir optimieren die technische Infrastruktur Ihrer Website so, wie Google sie liebt.' : lang === 'en' ? 'We optimize your website\'s technical infrastructure the way Google loves it.' : 'Web sitenizin teknik altyapısını Google\'ın sevdiği şekilde optimize ediyoruz.',
          icon: Zap,
          items: lang === 'de' ? ['Website-Geschwindigkeitsoptimierung', 'Mobile-first Indexierung', 'Core Web Vitals', 'Schema Markup'] : lang === 'en' ? ['Site speed optimization', 'Mobile-first indexing', 'Core Web Vitals', 'Schema markup'] : ['Site hızı optimizasyonu', 'Mobile-first indexing', 'Core Web Vitals', 'Schema markup']
        },
        {
          title: 'On-Page SEO',
          subtitle: lang === 'de' ? 'Seitenoptimierung' : lang === 'en' ? 'Page Optimization' : 'Sayfa İçi',
          desc: lang === 'de' ? 'Wir optimieren Inhalte, Meta-Tags und Seitenstruktur für Suchmaschinen.' : lang === 'en' ? 'We optimize content, meta tags and page structure for search engines.' : 'İçerik, meta etiketler ve sayfa yapısını arama motorları için optimize ediyoruz.',
          icon: FileText,
          items: lang === 'de' ? ['Meta-Titel & Beschreibung', 'Überschriftenhierarchie', 'Interne Links', 'Bildoptimierung'] : lang === 'en' ? ['Meta title & description', 'Heading hierarchy', 'Internal links', 'Image optimization'] : ['Meta title & description', 'Başlık hiyerarşisi', 'İç linkler', 'Görsel optimizasyonu']
        },
        {
          title: 'Off-Page SEO',
          subtitle: lang === 'de' ? 'Externe Faktoren' : lang === 'en' ? 'External Factors' : 'Dış Faktörler',
          desc: lang === 'de' ? 'Wir erhöhen die Autorität Ihrer Website durch hochwertige Backlinks und Markensignale.' : lang === 'en' ? 'We increase your site\'s authority with quality backlinks and brand signals.' : 'Kaliteli backlink\'ler ve marka sinyalleriyle sitenizin otoritesini artırıyoruz.',
          icon: Link,
          items: lang === 'de' ? ['Linkaufbau', 'Gastbeiträge', 'Digital PR', 'Markenerwähnungen'] : lang === 'en' ? ['Link building', 'Guest posting', 'Digital PR', 'Brand mentions'] : ['Link building', 'Guest posting', 'Digital PR', 'Marka bahsetmeleri']
        },
        {
          title: lang === 'de' ? 'Content SEO' : lang === 'en' ? 'Content SEO' : 'İçerik SEO',
          subtitle: 'Content Marketing',
          desc: lang === 'de' ? 'Wir erstellen SEO-optimierte, wertvolle Inhalte für Ihre Ziel-Keywords.' : lang === 'en' ? 'We create SEO-optimized, valuable content for your target keywords.' : 'Hedef kelimeleriniz için SEO uyumlu, değerli içerikler üretiyoruz.',
          icon: FileText,
          items: lang === 'de' ? ['Blogartikel', 'Pillar Content', 'Content Cluster', 'E-A-T Optimierung'] : lang === 'en' ? ['Blog articles', 'Pillar content', 'Content cluster', 'E-A-T optimization'] : ['Blog yazıları', 'Pillar content', 'Content cluster', 'E-A-T optimizasyonu']
        },
        {
          title: lang === 'de' ? 'Lokales SEO' : lang === 'en' ? 'Local SEO' : 'Yerel SEO',
          subtitle: 'Local Search',
          desc: lang === 'de' ? 'Wir heben Ihr Unternehmen in Google Maps und lokalen Suchanfragen hervor.' : lang === 'en' ? 'We highlight your business in Google Maps and local searches.' : 'Google Maps ve yerel aramalarda işletmenizi öne çıkarıyoruz.',
          icon: MapPin,
          items: lang === 'de' ? ['Google My Business', 'Lokale Verzeichnisse', 'NAP-Konsistenz', 'Kundenbewertungen'] : lang === 'en' ? ['Google My Business', 'Local directories', 'NAP consistency', 'Customer reviews'] : ['Google My Business', 'Yerel dizinler', 'NAP tutarlılığı', 'Müşteri yorumları']
        },
        {
          title: lang === 'de' ? 'SEO Analytics' : lang === 'en' ? 'SEO Analytics' : 'SEO Analitik',
          subtitle: lang === 'de' ? 'Berichterstattung' : lang === 'en' ? 'Reporting' : 'Raporlama',
          desc: lang === 'de' ? 'Wir berichten detailliert über Rankings, Traffic und Conversion-Daten.' : lang === 'en' ? 'We report in detail on rankings, traffic and conversion data.' : 'Sıralama, trafik ve dönüşüm verilerini detaylı raporluyoruz.',
          icon: BarChart3,
          items: lang === 'de' ? ['Google Search Console', 'Ranking-Tracking', 'Wettbewerbsanalyse', 'Monatliche Berichte'] : lang === 'en' ? ['Google Search Console', 'Ranking tracking', 'Competitor analysis', 'Monthly reports'] : ['Google Search Console', 'Sıralama takibi', 'Rakip analizi', 'Aylık raporlar']
        }
      ],
      process: [
        { step: '01', title: 'SEO Audit', desc: lang === 'de' ? 'Wir analysieren Ihre Website detailliert nach 200+ Faktoren.' : lang === 'en' ? 'We analyze your website in detail with 200+ factors.' : 'Mevcut sitenizi 200+ faktörde detaylı analiz ediyoruz.' },
        { step: '02', title: lang === 'de' ? 'Keyword-Recherche' : lang === 'en' ? 'Keyword Research' : 'Keyword Araştırma', desc: lang === 'de' ? 'Wir identifizieren die Keywords, nach denen Ihre Zielgruppe sucht.' : lang === 'en' ? 'We identify the keywords your target audience is searching for.' : 'Hedef kitlenizin aradığı kelimeleri belirliyoruz.' },
        { step: '03', title: lang === 'de' ? 'Optimierung' : lang === 'en' ? 'Optimization' : 'Optimizasyon', desc: lang === 'de' ? 'Wir führen technische, On-Page und Off-Page Optimierungen durch.' : lang === 'en' ? 'We implement technical, on-page and off-page optimizations.' : 'Teknik, on-page ve off-page optimizasyonları uyguluyoruz.' },
        { step: '04', title: lang === 'de' ? 'Überwachung & Berichterstattung' : lang === 'en' ? 'Monitoring & Reporting' : 'İzleme & Raporlama', desc: lang === 'de' ? 'Wir überwachen Rankings und liefern monatliche detaillierte Berichte.' : lang === 'en' ? 'We monitor rankings and provide monthly detailed reports.' : 'Sıralamaları izliyor, aylık detaylı raporlar sunuyoruz.' }
      ],
      benefits: [
        { title: lang === 'de' ? 'Nachhaltiger Traffic' : lang === 'en' ? 'Sustainable Traffic' : 'Sürdürülebilir Trafik', desc: lang === 'de' ? 'Organische Besucher ohne Werbebudget' : lang === 'en' ? 'Organic visitors without ad budget' : 'Reklam bütçesi olmadan organik ziyaretçi' },
        { title: lang === 'de' ? 'Hoher ROI' : lang === 'en' ? 'High ROI' : 'Yüksek ROI', desc: lang === 'de' ? 'Langfristig niedrigste Kundenakquisitionskosten' : lang === 'en' ? 'Lowest customer acquisition cost in the long term' : 'Uzun vadede en düşük müşteri edinme maliyeti' },
        { title: lang === 'de' ? 'Vertrauenswürdigkeit' : lang === 'en' ? 'Trustworthiness' : 'Güvenilirlik', desc: lang === 'de' ? 'Nutzer vertrauen organischen Ergebnissen mehr' : lang === 'en' ? 'Users trust organic results more' : 'Organik sonuçlara kullanıcılar daha çok güvenir' },
        { title: lang === 'de' ? '24/7 Sichtbarkeit' : lang === 'en' ? '24/7 Visibility' : '7/24 Görünürlük', desc: lang === 'de' ? 'Traffic fließt weiter, auch wenn Anzeigen stoppen' : lang === 'en' ? 'Traffic continues even when ads stop' : 'Reklamlar dursa bile trafik devam eder' }
      ],
      faq: [
        { 
          q: lang === 'de' ? 'Wann werde ich Ergebnisse von SEO-Arbeiten sehen?' : lang === 'en' ? 'When will I see results from SEO work?' : 'SEO çalışmalarından ne zaman sonuç alırım?',
          a: lang === 'de' ? 'SEO ist ein Marathon, kein Sprint. Je nach Wettbewerbssituation Ihrer Branche und der Geschichte Ihrer Website sehen Sie die ersten Auswirkungen technischer Verbesserungen in 1-3 Monaten. Nachhaltiges Verkehrswachstum gewinnt jedoch normalerweise ab dem 6. Monat an Dynamik.' : lang === 'en' ? 'SEO is a marathon, not a sprint. Depending on your industry\'s competition and your site\'s history, you\'ll start seeing the first effects of technical improvements in 1-3 months. However, sustainable traffic growth typically gains momentum from the 6th month onwards.' : 'SEO bir sprint değil, maratondur. Sektörünüzün rekabet durumuna ve sitenizin geçmişine bağlı olarak, ilk teknik iyileştirmelerin etkisini 1-3 ay içinde görmeye başlarsınız. Ancak kalıcı trafik artışı genellikle 6. aydan itibaren ivme kazanır.'
        },
        { 
          q: lang === 'de' ? 'Garantieren Sie den 1. Platz?' : lang === 'en' ? 'Do you guarantee 1st place ranking?' : '1. sıra garantisi veriyor musunuz?',
          a: lang === 'de' ? 'Da sich die Algorithmen von Google ständig ändern und niemand ein Monopol hat, ist "garantierte SEO" nicht professionell oder ethisch. Allerdings garantieren wir mit bewährten Strategien und datengesteuerten Arbeiten, dass Ihre Sichtbarkeit und Ihr Traffic steigen werden.' : lang === 'en' ? 'Since Google\'s algorithms constantly change and no one has a monopoly, "guaranteed SEO" is not professional or ethical. However, with proven strategies and data-driven work, we guarantee that your visibility and traffic will increase.' : 'Google\'ın algoritmaları sürekli değiştiği ve kimsenin tekelinde olmadığı için "garantili SEO" profesyonel ve etik değildir. Ancak kanıtlanmış stratejiler ve veri odaklı çalışmalarla görünürlüğünüzü ve trafiğinizi artırma garantisi veriyoruz.'
        },
        { 
          q: lang === 'de' ? 'Wie funktioniert Ihr Berichtsprozess?' : lang === 'en' ? 'How does your reporting process work?' : 'Raporlama süreciniz nasıl işliyor?',
          a: lang === 'de' ? 'Transparenz ist für uns das wichtigste Prinzip. Am Ende jedes Monats präsentieren wir Ihnen einen speziellen, verständlichen Bericht. Dieser Bericht enthält die durchgeführten Arbeiten, den erhöhten Traffic, Änderungen in den Keyword-Rankings und die Planung für den nächsten Monat.' : lang === 'en' ? 'Transparency is the most important principle for us. At the end of each month, we present you with a special, understandable report. This report includes the work done, increased traffic, changes in keyword rankings, and planning for the next month.' : 'Şeffaflık bizim için en önemli ilkedir. Her ayın sonunda size özel, anlaşılır bir rapor sunuyoruz. Bu raporda yapılan işlemler, artan trafik, anahtar kelime sıralamalarındaki değişimler ve bir sonraki ayın planlaması yer alır.'
        },
        { 
          q: lang === 'de' ? 'Machen Sie nur technische Arbeiten?' : lang === 'en' ? 'Do you only do technical work?' : 'Sadece teknik çalışma mı yapıyorsunuz?',
          a: lang === 'de' ? 'Nein, wir verfolgen einen ganzheitlichen Ansatz. Technische Infrastrukturverbesserungen (Geschwindigkeit, mobile Kompatibilität), Content-Strategie (Blog, Kategorietexte) und Off-Site-Autoritätsarbeiten (Backlink, PR) werden gemeinsam durchgeführt. Erfolgreiche SEO erfordert die ausgewogene Verwaltung dieser drei Säulen.' : lang === 'en' ? 'No, we take a holistic approach. Technical infrastructure improvements (speed, mobile compatibility), content strategy (blog, category texts), and off-site authority work (backlink, PR) are conducted together. Successful SEO requires balanced management of these three pillars.' : 'Hayır, bütüncül bir yaklaşım benimsiyoruz. Teknik altyapı iyileştirmeleri (hız, mobil uyum), içerik stratejisi (blog, kategori yazıları) ve site dışı otorite çalışmaları (backlink, PR) bir arada yürütülür. Başarılı SEO bu üç ayağın dengeli yönetilmesini gerektirir.'
        }
      ]
    },

    'yorum-yonetimi': {
      title: lang === 'de' ? 'Bewertungsmanagement' : lang === 'en' ? 'Review Management' : 'Olumsuz Yorum Yönetimi',
      subtitle: lang === 'de' ? 'Schützen und stärken Sie Ihre Online-Reputation' : lang === 'en' ? 'Protect and strengthen your online reputation' : 'Online itibarınızı koruyun ve güçlendirin',
      description: lang === 'de' ? 'Wir entfernen unfaire, gefälschte oder manipulative Bewertungen auf Google Maps, Trustpilot und anderen Plattformen. Wir schützen Ihre Marke mit Reputationsmanagement und Krisenkommunikation.' : lang === 'en' ? 'We remove unfair, fake or manipulative reviews on Google Maps, Trustpilot and other platforms. We protect your brand with reputation management and crisis communication.' : 'Google Maps, Trustpilot ve diğer platformlardaki haksız, sahte veya manipülatif yorumları kaldırıyoruz. İtibar yönetimi ve kriz iletişimi ile markanızı koruyoruz.',
      badge: lang === 'de' ? 'Reputationsmanagement-Experte' : lang === 'en' ? 'Reputation Management Expert' : 'İtibar Yönetimi Uzmanı',
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
        { value: '%95', label: lang === 'de' ? 'Entfernungserfolg' : lang === 'en' ? 'Removal Success' : 'Kaldırma Başarısı', trend: lang === 'de' ? 'Unfaire Bewertungen' : lang === 'en' ? 'Unfair reviews' : 'Haksız yorumlar' },
        { value: '500+', label: lang === 'de' ? 'Entfernte Bewertungen' : lang === 'en' ? 'Removed Reviews' : 'Kaldırılan Yorum', trend: lang === 'de' ? 'Gesamt' : lang === 'en' ? 'Total' : 'Toplam' },
        { value: lang === 'de' ? '48 Std.' : lang === 'en' ? '48 Hours' : '48 Saat', label: lang === 'de' ? 'Durchschnittliche Zeit' : lang === 'en' ? 'Average Time' : 'Ortalama Süre', trend: lang === 'de' ? 'Bearbeitungszeit' : lang === 'en' ? 'Processing time' : 'İşlem süresi' },
        { value: '+2.5', label: lang === 'de' ? 'Bewertungsanstieg' : lang === 'en' ? 'Rating Increase' : 'Puan Artışı', trend: lang === 'de' ? 'Durchschnittliche Verbesserung' : lang === 'en' ? 'Average improvement' : 'Ortalama iyileşme' }
      ],
      features: [
        {
          title: lang === 'de' ? 'Google Bewertungsentfernung' : lang === 'en' ? 'Google Review Removal' : 'Google Yorum Kaldırma',
          subtitle: 'Google Maps & Business',
          desc: lang === 'de' ? 'Wir identifizieren Bewertungen, die gegen Google-Richtlinien verstoßen, und beantragen deren Entfernung.' : lang === 'en' ? 'We identify reviews that violate Google policies and apply for their removal.' : 'Google politikalarına aykırı yorumları tespit edip kaldırma başvurusu yapıyoruz.',
          icon: MapPin,
          items: lang === 'de' ? ['Erkennung gefälschter Bewertungen', 'Analyse von Richtlinienverstößen', 'Offizielle Beschwerde', 'Nachverfolgung'] : lang === 'en' ? ['Fake review detection', 'Policy violation analysis', 'Official complaint', 'Follow-up process'] : ['Sahte yorum tespiti', 'Politika ihlali analizi', 'Resmi başvuru', 'Takip süreci']
        },
        {
          title: lang === 'de' ? 'Trustpilot Management' : lang === 'en' ? 'Trustpilot Management' : 'Trustpilot Yönetimi',
          subtitle: lang === 'de' ? 'E-Commerce Reputation' : lang === 'en' ? 'E-Commerce Reputation' : 'E-Ticaret İtibarı',
          desc: lang === 'de' ? 'Wir entfernen unfaire Bewertungen auf Trustpilot und verwalten Ihre Reputation.' : lang === 'en' ? 'We remove unfair reviews on Trustpilot and manage your reputation.' : 'Trustpilot\'ta haksız yorumları kaldırıyor, itibarınızı yönetiyoruz.',
          icon: Star,
          items: lang === 'de' ? ['Bewertungsanalyse', 'Entfernungsantrag', 'Antwortstrategie', 'Bewertungsverbesserung'] : lang === 'en' ? ['Review analysis', 'Removal request', 'Response strategy', 'Rating improvement'] : ['Yorum analizi', 'Kaldırma başvurusu', 'Yanıt stratejisi', 'Puan iyileştirme']
        },
        {
          title: lang === 'de' ? 'Social Media Reputation' : lang === 'en' ? 'Social Media Reputation' : 'Sosyal Medya İtibarı',
          subtitle: 'Facebook, Instagram',
          desc: lang === 'de' ? 'Wir verwalten negative Inhalte und Kommentare auf Social-Media-Plattformen.' : lang === 'en' ? 'We manage negative content and comments on social media platforms.' : 'Sosyal medya platformlarındaki olumsuz içerik ve yorumları yönetiyoruz.',
          icon: Users,
          items: lang === 'de' ? ['Kommentarmoderation', 'Krisenmanagement', 'Community Management', 'Markenfürsprache'] : lang === 'en' ? ['Comment moderation', 'Crisis management', 'Community management', 'Brand advocacy'] : ['Yorum moderasyonu', 'Kriz yönetimi', 'Topluluk yönetimi', 'Marka savunuculuğu']
        },
        {
          title: lang === 'de' ? 'Wettbewerber-Sabotage-Erkennung' : lang === 'en' ? 'Competitor Sabotage Detection' : 'Rakip Sabotajı Tespiti',
          subtitle: lang === 'de' ? 'Analyse gefälschter Bewertungen' : lang === 'en' ? 'Fake Review Analysis' : 'Sahte Yorum Analizi',
          desc: lang === 'de' ? 'Wir erkennen und dokumentieren organisierte Angriffe Ihrer Wettbewerber.' : lang === 'en' ? 'We detect and document organized attacks from your competitors.' : 'Rakiplerinizin organize saldırılarını tespit edip kanıtlıyoruz.',
          icon: AlertTriangle,
          items: lang === 'de' ? ['Musteranalyse', 'IP-Erkennung', 'Beweissammlung', 'Rechtliche Unterstützung'] : lang === 'en' ? ['Pattern analysis', 'IP detection', 'Evidence collection', 'Legal support'] : ['Pattern analizi', 'IP tespiti', 'Kanıt toplama', 'Hukuki destek']
        },
        {
          title: lang === 'de' ? 'Positive Bewertungsstrategie' : lang === 'en' ? 'Positive Review Strategy' : 'Olumlu Yorum Stratejisi',
          subtitle: 'Reputation Building',
          desc: lang === 'de' ? 'Wir helfen Ihnen, organische positive Bewertungen von zufriedenen Kunden zu erhalten.' : lang === 'en' ? 'We help you get organic positive reviews from satisfied customers.' : 'Memnun müşterilerinizden organik olumlu yorumlar almanızı sağlıyoruz.',
          icon: ThumbsDown,
          items: lang === 'de' ? ['Bewertungskampagnen', 'QR-Code-Systeme', 'E-Mail-Automatisierung', 'Kundenbetreuung'] : lang === 'en' ? ['Review campaigns', 'QR code systems', 'Email automation', 'Customer follow-up'] : ['Review kampanyaları', 'QR kod sistemleri', 'E-posta otomasyonu', 'Müşteri takibi']
        },
        {
          title: lang === 'de' ? 'Krisenkommunikation' : lang === 'en' ? 'Crisis Communication' : 'Kriz İletişimi',
          subtitle: 'Damage Control',
          desc: lang === 'de' ? 'Professionelles Krisenmanagement bei viralen negativen Inhalten.' : lang === 'en' ? 'Professional crisis management for viral negative content.' : 'Viral olumsuz içerik durumlarında profesyonel kriz yönetimi.',
          icon: Shield,
          items: lang === 'de' ? ['Schnelle Reaktion', 'Pressemitteilung', 'SEO Suppress', 'Image-Reparatur'] : lang === 'en' ? ['Quick response', 'Press release', 'SEO suppress', 'Image repair'] : ['Hızlı müdahale', 'Basın açıklaması', 'SEO suppress', 'İmaj onarımı']
        }
      ],
      process: [
        { step: '01', title: lang === 'de' ? 'Analyse' : lang === 'en' ? 'Analysis' : 'Analiz', desc: lang === 'de' ? 'Wir analysieren Ihre Bewertungen auf allen Plattformen detailliert.' : lang === 'en' ? 'We analyze your reviews on all platforms in detail.' : 'Tüm platformlardaki yorumlarınızı detaylı analiz ediyoruz.' },
        { step: '02', title: lang === 'de' ? 'Strategie' : lang === 'en' ? 'Strategy' : 'Strateji', desc: lang === 'de' ? 'Wir erstellen einen geeigneten Aktionsplan für jede Bewertung.' : lang === 'en' ? 'We create an appropriate action plan for each review.' : 'Her yorum için uygun aksiyon planı oluşturuyoruz.' },
        { step: '03', title: lang === 'de' ? 'Umsetzung' : lang === 'en' ? 'Implementation' : 'Uygulama', desc: lang === 'de' ? 'Wir verwalten Entfernungsanträge und Einspruchsprozesse.' : lang === 'en' ? 'We manage removal applications and appeal processes.' : 'Kaldırma başvuruları ve itiraz süreçlerini yönetiyoruz.' },
        { step: '04', title: lang === 'de' ? 'Überwachung' : lang === 'en' ? 'Monitoring' : 'İzleme', desc: lang === 'de' ? 'Wir verfolgen neue Bewertungen durch kontinuierliches Monitoring.' : lang === 'en' ? 'We track new reviews through continuous monitoring.' : 'Sürekli monitoring ile yeni yorumları takip ediyoruz.' }
      ],
      benefits: [
        { title: lang === 'de' ? 'Schnelle Ergebnisse' : lang === 'en' ? 'Fast Results' : 'Hızlı Sonuç', desc: lang === 'de' ? 'Erste Aktionen innerhalb von 24-72 Stunden' : lang === 'en' ? 'First actions within 24-72 hours' : '24-72 saat içinde ilk aksiyonlar' },
        { title: lang === 'de' ? 'Rechtlicher Prozess' : lang === 'en' ? 'Legal Process' : 'Yasal Süreç', desc: lang === 'de' ? 'Rechtliche Unterstützung bei Bedarf' : lang === 'en' ? 'Legal support when needed' : 'Gerektiğinde hukuki destek' },
        { title: lang === 'de' ? 'Vertraulichkeit' : lang === 'en' ? 'Confidentiality' : 'Gizlilik', desc: lang === 'de' ? 'Alle Prozesse werden vertraulich durchgeführt' : lang === 'en' ? 'All processes are conducted confidentially' : 'Tüm süreçler gizli yürütülür' },
        { title: lang === 'de' ? 'Garantie' : lang === 'en' ? 'Guarantee' : 'Garanti', desc: lang === 'de' ? 'Rückerstattung bei Misserfolg' : lang === 'en' ? 'Refund if unsuccessful' : 'Sonuç alınamazsa ücret iadesi' }
      ],
      faq: [
        { 
          q: lang === 'de' ? 'Können Sie alle negativen Bewertungen entfernen?' : lang === 'en' ? 'Can you remove all negative reviews?' : 'Tüm olumsuz yorumları kaldırabilir misiniz?',
          a: lang === 'de' ? 'Wir können nur Bewertungen entfernen, die gegen die Plattformrichtlinien verstoßen (gefälschte Bewertungen, Spam, Beleidigungen usw.). Echte, faktenbasierte negative Bewertungen können nicht entfernt werden, aber wir helfen Ihnen, darauf professionell zu reagieren.' : lang === 'en' ? 'We can only remove reviews that violate platform policies (fake reviews, spam, insults, etc.). Genuine, fact-based negative reviews cannot be removed, but we help you respond to them professionally.' : 'Sadece platform politikalarını ihlal eden yorumları kaldırabiliriz (sahte yorumlar, spam, hakaret vb.). Gerçek, olgulara dayalı olumsuz yorumlar kaldırılamaz ancak profesyonel yanıt vermenize yardımcı oluyoruz.'
        },
        { 
          q: lang === 'de' ? 'Wie lange dauert der Entfernungsprozess?' : lang === 'en' ? 'How long does the removal process take?' : 'Kaldırma süreci ne kadar sürer?',
          a: lang === 'de' ? 'Der Prozess variiert je nach Plattform. Bei Google dauert es normalerweise 3-14 Tage. Bei Trustpilot kann es bis zu 30 Tage dauern. Wir halten Sie während des gesamten Prozesses auf dem Laufenden.' : lang === 'en' ? 'The process varies by platform. For Google, it typically takes 3-14 days. For Trustpilot, it can take up to 30 days. We keep you informed throughout the entire process.' : 'Süreç platforma göre değişir. Google için genellikle 3-14 gün sürer. Trustpilot için 30 güne kadar sürebilir. Süreç boyunca sizi bilgilendiriyoruz.'
        },
        { 
          q: lang === 'de' ? 'Was passiert, wenn die Bewertung nicht entfernt wird?' : lang === 'en' ? 'What happens if the review is not removed?' : 'Yorum kaldırılmazsa ne olur?',
          a: lang === 'de' ? 'Wenn wir die Bewertung nicht entfernen können, helfen wir Ihnen mit alternativen Strategien: professionelle Antwort schreiben, positive Bewertungen fördern oder rechtliche Schritte einleiten. Bei Misserfolg bieten wir je nach Vereinbarung eine Rückerstattung an.' : lang === 'en' ? 'If we can\'t remove the review, we help you with alternative strategies: writing a professional response, encouraging positive reviews, or initiating legal action. In case of failure, we offer a refund depending on the agreement.' : 'Yorumu kaldıramazsak alternatif stratejilerle yardımcı oluyoruz: profesyonel yanıt yazma, olumlu yorum teşviki veya hukuki süreç başlatma. Başarısızlık durumunda anlaşmaya göre ücret iadesi sunuyoruz.'
        },
        { 
          q: lang === 'de' ? 'Ist der Service vertraulich?' : lang === 'en' ? 'Is the service confidential?' : 'Hizmet gizli mi?',
          a: lang === 'de' ? 'Absolut. Alle unsere Prozesse werden vertraulich durchgeführt. Wir geben niemals Informationen über unsere Kunden oder unsere Arbeit an Dritte weiter. Vertraulichkeit ist unser Grundprinzip.' : lang === 'en' ? 'Absolutely. All our processes are conducted confidentially. We never share information about our clients or our work with third parties. Confidentiality is our core principle.' : 'Kesinlikle. Tüm süreçlerimiz gizli yürütülür. Müşterilerimiz veya çalışmalarımız hakkında üçüncü taraflarla asla bilgi paylaşmıyoruz. Gizlilik temel ilkemizdir.'
        }
      ]
    }
  }

  // Servis verisini al
  const data = servicesData[service] || servicesData['google-ads']

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as Homepage */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-[#4285F4]" />
              <a href="/" className="text-xl font-bold bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04] bg-clip-text text-transparent">
                Salih Maral
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors flex items-center">
                  {navT.services}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <div className="py-2">
                    {services.map((s, idx) => (
                      <a
                        key={idx}
                        href={`/${lang}/hizmetler/${s.slug}`}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#4285F4]/10 hover:text-[#4285F4] transition-colors"
                      >
                        <div className="font-semibold">{s.title}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <a href="/#success" className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{navT.success}</a>
              <a href="/#about" className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{navT.about}</a>
              <a href="/blog" className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">Blog</a>
              <a href="/#contact" className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{navT.contact}</a>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={lang === 'de' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleLanguageChange('de')}
                className={lang === 'de' ? 'bg-[#4285F4]' : ''}
              >
                DE
              </Button>
              <Button
                variant={lang === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleLanguageChange('en')}
                className={lang === 'en' ? 'bg-[#4285F4]' : ''}
              >
                EN
              </Button>
              <Button
                variant={lang === 'tr' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleLanguageChange('tr')}
                className={lang === 'tr' ? 'bg-[#4285F4]' : ''}
              >
                TR
              </Button>
            </div>
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
                {lang === 'de' ? 'Kostenlose Analyse anfordern' : lang === 'en' ? 'Get Free Analysis' : 'Ücretsiz Analiz Al'}
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8" asChild>
                <a href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20möchte%20Informationen%20über%20Ihre%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20would%20like%20information%20about%20your%20services.' : 'Merhaba,%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`} target="_blank" rel="noopener noreferrer">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'de' ? 'Servicedetails' : lang === 'en' ? 'Service Details' : 'Hizmet Detayları'}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {lang === 'de' ? 'Wir bieten umfassende Lösungen nach den Bedürfnissen Ihres Unternehmens' : lang === 'en' ? 'We offer comprehensive solutions based on your business needs' : 'İşletmenizin ihtiyaçlarına göre kapsamlı çözümler sunuyoruz'}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'de' ? 'Wie arbeiten wir?' : lang === 'en' ? 'How do we work?' : 'Nasıl Çalışıyoruz?'}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {lang === 'de' ? 'Erreichen Sie Erfolg mit unseren transparenten und systematischen Prozessen' : lang === 'en' ? 'Achieve success with our transparent and systematic processes' : 'Şeffaf ve sistematik süreçlerimizle başarıya ulaşın'}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {lang === 'de' ? 'Warum uns wählen?' : lang === 'en' ? 'Why Choose Us?' : 'Neden Bizi Tercih Etmelisiniz?'}
              </h2>
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

      {/* FAQ Section */}
      {data.faq && data.faq.length > 0 && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {lang === 'de' ? 'Häufig gestellte Fragen' : lang === 'en' ? 'Frequently Asked Questions' : 'Sıkça Sorulan Sorular'}
                </h2>
                <p className="text-lg text-gray-500">
                  {lang === 'de' ? 'Ihre Fragen, unsere Antworten' : lang === 'en' ? 'Your questions, our answers' : 'Merak ettiklerinizi yanıtlıyoruz'}
                </p>
              </div>
              
              <div className="space-y-4">
                {data.faq.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <details className="group">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.q}</h3>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors" style={{ backgroundColor: `${data.primaryColor}15` }}>
                          <svg className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: data.primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </summary>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600 leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Optimization Section for Google Ads */}
      {service === 'google-ads' && (
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: data.primaryColor }}>
                  {lang === 'de' ? 'KONTINUIERLICHE VERBESSERUNG' : lang === 'en' ? 'CONTINUOUS IMPROVEMENT' : 'SÜREKLİ İYİLEŞTİRME'}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {lang === 'de' ? 'Wir schalten nicht nur Werbung,' : lang === 'en' ? "We Don't Just Run Ads," : 'Reklamı Açıp Bırakmıyoruz,'}
                  <br />
                  <span style={{ color: data.primaryColor }}>
                    {lang === 'de' ? 'Wir optimieren die Rentabilität.' : lang === 'en' ? 'We Optimize Profitability.' : 'Kârlılığı Optimize Ediyoruz.'}
                  </span>
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                  {lang === 'de' ? 'Der Unterschied, mit einem erfahrenen Experten zu arbeiten, zeigt sich nicht in der Kampagneneinrichtung, sondern im anschließenden Optimierungs- und Krisenmanagementprozess.' : lang === 'en' ? 'The difference of working with an experienced expert is not in campaign setup, but in the subsequent optimization and crisis management process.' : 'Deneyimli bir uzmanla çalışmanın farkı, kampanya kurulumunda değil, sonrasındaki optimizasyon ve kriz yönetimi sürecinde ortaya çıkar.'}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: '01',
                    title: lang === 'de' ? 'Analyse & Setup' : lang === 'en' ? 'Analysis & Setup' : 'Analiz & Kurulum',
                    desc: lang === 'de' ? 'Wir analysieren die Kosten pro Klick in Ihrer Branche und erstellen von Anfang an negative Keyword-Listen.' : lang === 'en' ? 'We analyze the cost per click in your industry and create negative keyword lists from the start.' : 'Sektörünüzün tıklama başı maliyet analizini yapar, negatif anahtar kelime listelerini baştan oluşturarak bütçenizin boşa gitmesini engelliyoruz.'
                  },
                  {
                    step: '02',
                    title: lang === 'de' ? 'A/B Tests' : lang === 'en' ? 'A/B Tests' : 'A/B Testleri',
                    desc: lang === 'de' ? 'Wir begnügen uns nicht mit einer einzigen Anzeige. Mit verschiedenen Titeln und Bildern finden wir die beste Kombination.' : lang === 'en' ? 'We don\'t settle for a single ad. With different titles and images, we find the best combination.' : 'Tek bir reklam metniyle yetinmiyoruz. Farklı başlıklar ve görseller deneyerek kazanan kombinasyonu buluyoruz.'
                  },
                  {
                    step: '03',
                    title: lang === 'de' ? 'Qualitätsfaktor' : lang === 'en' ? 'Quality Score' : 'Kalite Puanı',
                    desc: lang === 'de' ? 'Durch die Erhöhung der Anzeigen- und Landingpage-Harmonie zahlen Sie weniger als Ihre Konkurrenten und erscheinen höher.' : lang === 'en' ? 'By increasing ad and landing page harmony, you pay less than competitors and appear higher.' : 'Reklam ve açılış sayfası uyumunu artırarak, rakiplerinizden daha az ödeyip daha üst sırada çıkmanızı sağlıyoruz.'
                  },
                  {
                    step: '04',
                    title: lang === 'de' ? 'Skalierung' : lang === 'en' ? 'Scaling' : 'Ölçekleme',
                    desc: lang === 'de' ? 'Nachdem wir profitable Kampagnen identifiziert haben, erhöhen wir das Budget kontrolliert und stoppen Verlustkampagnen.' : lang === 'en' ? 'After identifying profitable campaigns, we increase budget in a controlled manner and stop losing campaigns.' : 'Kâr getiren kampanyaları tespit edip bütçeyi kontrollü artırıyor, zarar edenleri anında durduruyoruz.'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: data.primaryColor }}>
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <p className="text-3xl font-bold" style={{ color: data.primaryColor }}>%98</p>
                  <p className="text-sm text-gray-500">{lang === 'de' ? 'Kundenzufriedenheit' : lang === 'en' ? 'Customer Satisfaction' : 'Müşteri Memnuniyeti'}</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <p className="text-3xl font-bold" style={{ color: data.secondaryColor }}>4.5x</p>
                  <p className="text-sm text-gray-500">{lang === 'de' ? 'Durchschnittlicher ROAS' : lang === 'en' ? 'Average ROAS' : 'Ortalama ROAS'}</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <p className="text-3xl font-bold" style={{ color: data.accentColor }}>7/24</p>
                  <p className="text-sm text-gray-500">{lang === 'de' ? 'Kontoüberwachung' : lang === 'en' ? 'Account Monitoring' : 'Hesap Takibi'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="contact-section" className="py-20 px-4" style={{ backgroundColor: data.primaryColor }}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {lang === 'de' ? 'Starten Sie mit einer kostenlosen Analyse' : lang === 'en' ? 'Start with a Free Analysis' : 'Ücretsiz Analiz ile Başlayın'}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {lang === 'de' ? 'Wir analysieren Ihre aktuelle Situation und bieten Ihnen maßgeschneiderte Strategieempfehlungen. Keine Kosten, keine Verpflichtungen.' : lang === 'en' ? 'We analyze your current situation and offer you customized strategy recommendations. No costs, no commitments.' : 'Mevcut durumunuzu analiz ediyor, size özel strateji önerileri sunuyoruz. Hiçbir ücret veya taahhüt yok.'}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-white hover:bg-gray-100 px-8 shadow-lg transition-all duration-300 hover:scale-105" style={{ color: data.primaryColor }} asChild>
                <a href={`mailto:kontakt@salihmaral.de?subject=${lang === 'de' ? 'Kostenlose' : lang === 'en' ? 'Free' : 'Ücretsiz'}%20${encodeURIComponent(data.title)}%20${lang === 'de' ? 'Analyse' : lang === 'en' ? 'Analysis' : 'Analizi'}`}>
                  {lang === 'de' ? 'Kostenlose Analyse anfordern' : lang === 'en' ? 'Get Free Analysis' : 'Ücretsiz Analiz Al'}
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
          <p className="text-sm text-gray-400">© 2026 Salih Maral. {lang === 'de' ? 'Alle Rechte vorbehalten.' : lang === 'en' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/impressum" className="text-xs text-gray-500 hover:text-gray-300">Impressum</a>
            <a href="/datenschutz" className="text-xs text-gray-500 hover:text-gray-300">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
