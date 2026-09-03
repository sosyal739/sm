'use client'

import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowLeft, ArrowUpRight, TrendingUp, Search, Image, ShoppingCart, Play, Zap, MapPin, Users, Heart, Video, MessageSquare, Share2, Target, BarChart3, Globe, Link, FileText, Shield, ShieldCheck, Cpu, Database, Lock, Code, Activity, Star, ThumbsDown, AlertTriangle, Eye, Award, Flame } from 'lucide-react'
import ServiceDetailModules from '@/components/ServiceDetailModules'

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
    { title: 'Reklam & Tracking Kurulumu (Setup & CAPI)', slug: 'server-side-tracking' },
    { title: 'YouTube Ads & Video Büyüme', slug: 'youtube-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO Hizmetleri', slug: 'seo' },
    { title: 'Olumsuz Yorum Yönetimi', slug: 'yorum-yonetimi' }
  ],
  de: [
    { title: 'Google Ads Management', slug: 'google-ads' },
    { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
    { title: 'Werbekonto- & Tracking-Setup (Google & CAPI)', slug: 'server-side-tracking' },
    { title: 'YouTube Ads & Video-Wachstum', slug: 'youtube-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO Dienstleistungen', slug: 'seo' },
    { title: 'Bewertungsmanagement', slug: 'yorum-yonetimi' }
  ],
  en: [
    { title: 'Google Ads Management', slug: 'google-ads' },
    { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
    { title: 'Ad Account & Tracking Setup (Google & CAPI)', slug: 'server-side-tracking' },
    { title: 'YouTube Ads & Video Growth', slug: 'youtube-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO Services', slug: 'seo' },
    { title: 'Review Management', slug: 'yorum-yonetimi' }
  ]
}

export default function ServiceDetailClient({ initialService, initialLang }) {
  const router = useRouter()
  const params = useParams()
  const service = params?.service || initialService
  const urlLang = params?.lang || initialLang
  const lang = urlLang && ['de', 'en', 'tr'].includes(urlLang) ? urlLang : 'de'

  // Helper: get localized URL path for a given language and service slug
  const getLocalizedServiceUrl = (targetLang, serviceSlug) => {
    const pathSegment = targetLang === 'de' ? 'dienstleistungen' : targetLang === 'en' ? 'services' : 'hizmetler'
    // Map yorum-yonetimi to localized slug
    let localizedSlug = serviceSlug
    if (serviceSlug === 'yorum-yonetimi') {
      localizedSlug = targetLang === 'de' ? 'bewertungsmanagement' : targetLang === 'en' ? 'review-management' : 'yorum-yonetimi'
    }
    return `/${targetLang}/${pathSegment}/${localizedSlug}`
  }

  // Language change navigates to correct localized URL
  const handleLanguageChange = (newLang) => {
    localStorage.setItem('preferredLanguage', newLang)
    window.location.href = getLocalizedServiceUrl(newLang, service)
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
      subtitle: lang === 'de'
        ? 'Google Ads, der wirklich funktioniert — messbare Ergebnisse, kein Streuverlust.'
        : lang === 'en'
        ? 'Google Ads that actually works — measurable results, zero wasted budget.'
        : 'Gerçekten işe yarayan Google Ads — ölçülebilir sonuçlar, sıfır boşa harcama.',
      description: lang === 'de'
        ? 'Als zertifizierter Google Partner mit über 17 Jahren Erfahrung verwalten wir mehr als 720 Kampagnen — und jeder investierte Euro arbeitet für Ihre Umsatzziele. Sie sehen, was wir tun. Sie messen, was es bringt.'
        : lang === 'en'
        ? 'As a certified Google Partner with 17+ years of experience managing 720+ campaigns, every euro you invest works toward your revenue goals. You see what we do. You measure what it delivers.'
        : 'Google Partner sertifikalı, 17+ yıllık deneyimle 720\'den fazla kampanya yönetiyoruz. Yatırımınızın her eurosu gelir hedefleriniz için çalışır. Ne yaptığımızı görürsünüz. Ne getirdiğini ölçersiniz.',
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
        {
          value: '1,74M',
          label: lang === 'de' ? 'Klicks generiert' : lang === 'en' ? 'Clicks generated' : 'Üretilen tıklama',
          trend: lang === 'de' ? 'Seit 2016 · alle Kampagnen' : lang === 'en' ? 'Since 2016 · all campaigns' : '2016\'dan bu yana · tüm kampanyalar'
        },
        {
          value: '150M',
          label: lang === 'de' ? 'Anzeigen-Impressionen' : lang === 'en' ? 'Ad impressions' : 'Reklam gösterimi',
          trend: lang === 'de' ? 'Gesamte Reichweite' : lang === 'en' ? 'Total reach built' : 'Toplam erişim'
        },
        {
          value: '208K',
          label: lang === 'de' ? 'Conversions erzielt' : lang === 'en' ? 'Conversions achieved' : 'Elde edilen dönüşüm',
          trend: lang === 'de' ? 'Echte Kundenaktionen' : lang === 'en' ? 'Real customer actions' : 'Gerçek müşteri eylemleri'
        },
        {
          value: '€1,13M',
          label: lang === 'de' ? 'Werbebudget verwaltet' : lang === 'en' ? 'Ad budget managed' : 'Yönetilen reklam bütçesi',
          trend: lang === 'de' ? 'Effizient für Kunden' : lang === 'en' ? 'Efficiently for clients' : 'Müşteriler için verimli'
        }
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
          q: lang === 'de' ? 'Google Ads Agentur Preise & Kosten: Wie rechnen Sie ab (Fixpreis oder Prozent vom Ad Spend)?' : lang === 'en' ? 'Google Ads Agency Costs & Pricing: How do you charge (Flat fee or % of ad spend)?' : 'Google Ads Ajans Ücretleri & Maliyetleri: Nasıl çalışıyorsunuz (Sabit fiyat mı, bütçe yüzdesi mi)?',
          a: lang === 'de' ? 'Wir setzen bewusst auf eine transparente monatliche Betreuungspauschale (Fixpreis) statt prozentualer Umsatzprovisionen (10% - 15% Ad Spend). Das bedeutet: Unser Ziel ist es nicht, Ihr Werbebudget künstlich in die Höhe zu treiben, sondern Ihre Kosten pro Conversion (CPA) zu senken und Ihren ROAS zu maximieren. Keine versteckten Gebühren, volle Planungssicherheit.' : lang === 'en' ? 'We deliberately operate on a transparent monthly flat-fee (Fixpreis) model rather than taking a percentage of your ad spend (10% - 15%). This eliminates conflicts of interest: our objective is strictly to lower your CPA and maximize your ROAS rather than inflating your ad budget. 100% predictable costs.' : 'Yönetilen bütçeden %10 - %15 komisyon kesmek yerine şeffaf ve sabit aylık hizmet bedeli (Fixpreis) ile çalışıyoruz. Bu sayede ajansın bütçenizi gereksiz yere artırmasını engelliyor, doğrudan dönüşüm başı maliyetlerinizi (CPA) düşürmeye ve kârlılığınızı (ROAS) katlamaya odaklanıyoruz. Sıfır gizli maliyet, tam bütçe güvenliği.'
        },
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

    'youtube-ads': {
      title: lang === 'de' ? 'YouTube Ads & Video-Wachstum' : lang === 'en' ? 'YouTube Ads & Video Growth' : 'YouTube Ads & Video Büyüme',
      subtitle: lang === 'de'
        ? '23,1M+ verifizierte Aufrufe & 720+ Kampagnen — Maximale Video-Reichweite und echte Abonnenten.'
        : lang === 'en'
        ? '23.1M+ verified views & 720+ campaigns — Maximum video reach and real subscriber growth.'
        : '23.1M+ doğrulanmış izlenme & 720+ kampanya — Maksimum video erişimi ve gerçek kanal büyümesi.',
      description: lang === 'de'
        ? 'Als zertifizierter Google & YouTube Ads Partner mit über 23,1 Millionen verwalteten TrueView-Aufrufen und 720+ erfolgreichen Kampagnen bringen wir Ihre Videos, Musikclips und Produkte vor kaufbereite und engagierte Zuschauer. Keine Bots, sondern 100% echte Zielgruppen.'
        : lang === 'en'
        ? 'As a certified Google & YouTube Ads Partner managing over 23.1 million TrueView views across 720+ campaigns, we put your music videos, brand stories, and products in front of engaged audiences. Zero bots, 100% genuine viewers.'
        : '23.1 Milyon+ yönetilen YouTube TrueView izlenmesi ve 720+ başarılı kampanya ile müzik kliplerinizi, marka hikayelerinizi ve ürünlerinizi doğru kitleyle buluşturuyoruz. Sahte botlar değil; %100 gerçek, etkileşime geçen ve abone olan izleyiciler.',
      badge: lang === 'de' ? '23.1M+ YouTube Aufrufe & Google Partner' : lang === 'en' ? '23.1M+ YouTube Views & Google Partner' : '23.1M+ YouTube İzlenmesi & Google Partner',
      primaryColor: '#FF0000',
      secondaryColor: '#282828',
      accentColor: '#CC0000',
      gradientFrom: '#FF0000',
      gradientTo: '#282828',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF0000">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      stats: [
        {
          value: '23,1M+',
          label: lang === 'de' ? 'TrueView Aufrufe erzielt' : lang === 'en' ? 'TrueView views generated' : 'Üretilen TrueView izlenme',
          trend: lang === 'de' ? '720+ verifizierte Kampagnen' : lang === 'en' ? '720+ verified campaigns' : '720+ doğrulanmış kampanya'
        },
        {
          value: '%64,78',
          label: lang === 'de' ? 'Ø View-Through-Rate' : lang === 'en' ? 'Avg. View-Through Rate' : 'Ort. Video İzleme Oranı',
          trend: lang === 'de' ? 'Hohe Interaktionsrate' : lang === 'en' ? 'High engagement retention' : 'Yüksek izleyici bağlılığı'
        },
        {
          value: '0,01 €',
          label: lang === 'de' ? 'Optimale Kosten pro View (CPV)' : lang === 'en' ? 'Optimal Cost Per View (CPV)' : 'Optimum İzleme Başı Maliyet (CPV)',
          trend: lang === 'de' ? 'Maximale Budget-Effizienz' : lang === 'en' ? 'Maximum budget efficiency' : 'Maksimum bütçe verimi'
        },
        {
          value: '124M+',
          label: lang === 'de' ? 'Video-Impressionen' : lang === 'en' ? 'Video Impressions' : 'Video Gösterimi',
          trend: lang === 'de' ? 'Weltweite Zielgruppen-Präsenz' : lang === 'en' ? 'Global audience reach' : 'Küresel hedef kitle erişimi'
        }
      ],
      features: [
        {
          title: lang === 'de' ? 'YouTube Shorts Ads (Vertikal)' : lang === 'en' ? 'YouTube Shorts Ads (Vertical)' : 'YouTube Shorts Reklamları',
          subtitle: 'Shorts & 0. Sekunde',
          desc: lang === 'de' ? 'Nutzen Sie das rasante Wachstum von YouTube Shorts mit dynamischen Vollbild-Videoanzeigen und Sofort-Aufruf-Tracking ab der 1. Sekunde.' : lang === 'en' ? 'Harness the explosive growth of YouTube Shorts with immersive full-screen video ads and instant view counting from second 0.' : "YouTube Shorts\'un patlayıcı büyümesini dikey tam ekran video reklamları ve 24 Ağustos anında izlenme sayma kuralı ile avantaja çevirin.",
          icon: Flame,
          items: lang === 'de' ? ['Shorts Feed Platzierung', 'Dynamischer Call-to-Action', 'Viral Hook Optimierung', 'Reichweiten-Skalierung'] : lang === 'en' ? ['Shorts feed placement', 'Dynamic Call-to-Action', 'Viral hook optimization', 'Reach scaling'] : ['Shorts akışı yerleşimi', 'Dinamik Eylem Butonu', 'Viral kanca (hook) kurgusu', 'Erişim ölçekleme']
        },
        {
          title: lang === 'de' ? 'TrueView In-Stream Anzeigen' : lang === 'en' ? 'TrueView In-Stream Ads' : 'TrueView In-Stream Reklamları',
          subtitle: 'Überspringbar / Skippable',
          desc: lang === 'de' ? 'Zahlen Sie nur, wenn Nutzer Ihr Video mindestens 30 Sekunden lang ansehen oder mit der Anzeige interagieren. Maximale Budgetkontrolle.' : lang === 'en' ? 'Pay only when viewers watch at least 30 seconds or interact with your video. Maximum budget efficiency.' : 'İzleyiciler videonuzu en az 30 saniye izlediğinde veya tıkladığında ödeme yapın. Sıfır boşa harcama, maksimum bütçe kontrolü.',
          icon: Play,
          items: lang === 'de' ? ['30-Sekunden CPV Modell', 'Überspringbare Platzierung', 'Zielgruppen-Ausschlüsse', 'Frequenz-Deckelung'] : lang === 'en' ? ['30-second CPV model', 'Skippable placement', 'Audience exclusions', 'Frequency capping'] : ['30 saniye CPV modeli', 'Atlanabilir yerleşim', 'Negatif kitle filtreleme', 'Frekans sınırlama']
        },
        {
          title: lang === 'de' ? 'In-Feed Video Discovery Ads' : lang === 'en' ? 'In-Feed Video Discovery Ads' : 'In-Feed Keşfet Video Reklamları',
          subtitle: 'Suchergebnisse & Startseite',
          desc: lang === 'de' ? 'Platzieren Sie Ihre Videos ganz oben in den YouTube-Suchergebnissen und neben verwandten Videos für echte, kaufbereite Abonnenten.' : lang === 'en' ? 'Place your videos at the top of YouTube search results and alongside related videos to acquire genuine subscribers.' : 'YouTube arama sonuçlarının en başında ve ilgili videoların yanında yer alarak kanalınıza sadık aboneler kazandırın.',
          icon: Search,
          items: lang === 'de' ? ['YouTube Keyword-Suche', 'Ähnliche Video-Platzierung', 'Abonnenten-Gewinnung', 'Thumbnail A/B Testing'] : lang === 'en' ? ['YouTube search keywords', 'Related video placement', 'Subscriber acquisition', 'Thumbnail A/B testing'] : ['YouTube arama kelimeleri', 'Benzer video yerleşimi', 'Abone kazanımı', 'Küçük resim A/B testleri']
        },
        {
          title: lang === 'de' ? 'Musikclip & Künstler Promotion' : lang === 'en' ? 'Music Video & Artist Promotion' : 'Sanatçı & Klip Tanıtımı',
          subtitle: 'Musiker & Labels',
          desc: lang === 'de' ? '720+ erfolgreiche Musikclip-Kampagnen. Bringen Sie Ihren neuen Song in Trend-Listen und erreichen Sie Musikliebhaber in Deutschland, der Türkei und weltweit.' : lang === 'en' ? '720+ successful music video campaigns. Propel your new track onto trending charts across Germany, Turkey, and globally.' : 'Sanatçılar ve müzik yapım şirketleri için 720+ başarılı klip lansmanı. Şarkınızı trendlere taşıyın, gerçek dinleyicilere ulaşın.',
          icon: Award,
          items: lang === 'de' ? ['Musikgenre & Künstler-Targeting', 'Länder- & Regionen-Fokus', 'Trend-Charts Hebelwirkung', 'Spotify & Apple Music Traffic'] : lang === 'en' ? ['Genre & artist targeting', 'Country & regional targeting', 'Trending charts leverage', 'Spotify/Apple Music push'] : ['Müzik türü & sanatçı hedefleme', 'Ülke ve şehir filtreleme', 'Trend listelerine giriş desteği', 'Spotify & dijital platform yönlendirme']
        },
        {
          title: lang === 'de' ? 'Bumper Ads (6 Sekunden)' : lang === 'en' ? 'Bumper Ads (6 Seconds)' : 'Bumper Ads (6 Saniye)',
          subtitle: 'Nicht überspringbar',
          desc: lang === 'de' ? '6-sekündige, unüberspringbare Kurzanzeigen für maximale Markenbekanntheit und unvergessliche Botschaften zu geringen CPM-Kosten.' : lang === 'en' ? '6-second non-skippable bumper ads engineered for maximum brand recall and cost-effective CPM reach.' : 'Atlanamayan 6 saniyelik vurucu reklamlarla marka bilinirliğinizi zihinlere kazıyın. Düşük CPM ile devasa erişim.',
          icon: Zap,
          items: lang === 'de' ? ['Nicht überspringbar', 'Hohe Werbeerinnerung', 'Kosteneffizienter CPM', 'Cross-Device Reichweite'] : lang === 'en' ? ['Non-skippable impact', 'High brand recall', 'Cost-effective CPM', 'Cross-device reach'] : ['Atlanamaz format', 'Yüksek marka hatırlanırlığı', 'Maliyet odaklı CPM', 'Tüm cihazlarda yayın']
        },
        {
          title: lang === 'de' ? 'Video Remarketing & Funnel' : lang === 'en' ? 'Video Remarketing & Funnel' : 'Video Yeniden Pazarlama (Remarketing)',
          subtitle: 'Lead & Sale Funnel',
          desc: lang === 'de' ? 'Sprechen Sie Nutzer erneut an, die Ihre Videos bereits gesehen haben. Verwandeln Sie YouTube-Zuschauer in Kunden auf Ihrer Website.' : lang === 'en' ? 'Retarget viewers who previously watched your videos to drive high-intent website conversions and purchases.' : 'Videolarınızı izleyen veya kanalınızla etkileşime geçen kitleye özel teklifler sunarak web sitenizden satış yaptırın.',
          icon: TrendingUp,
          items: lang === 'de' ? ['Kanal-Abonnenten Retargeting', 'Video-Viewer Listen', 'Web-Conversion Verknüpfung', 'Google Ads GA4 Sync'] : lang === 'en' ? ['Channel subscriber retargeting', 'Video viewer audience lists', 'Website conversion sync', 'GA4 & Google Ads integration'] : ['Kanal abone yeniden hedefleme', 'Video izleyici kitle listeleri', 'Web satış entegrasyonu', 'GA4 ve Google Ads senkronizasyonu']
        }
      ],
      process: [
        { step: '01', title: lang === 'de' ? 'Zielgruppen- & Länderanalyse' : lang === 'en' ? 'Audience & Geo Analysis' : 'Hedef Kitle & Ülke Analizi', desc: lang === 'de' ? 'Wir definieren die exakte Zielgruppe, Musikinteressen, Alter, Demografie und Zielländer (DACH, TR, Global).' : lang === 'en' ? 'We define exact audience personas, music preferences, demographics, and target territories (DACH, TR, Global).' : 'Müzik türü, yaş, ilgi alanı ve yayınlanacak hedef ülkeleri (Almanya, Türkiye, Avrupa veya Dünya) netleştiriyoruz.' },
        { step: '02', title: lang === 'de' ? 'Kreativ- & Hook-Optimierung' : lang === 'en' ? 'Creative & Hook Optimization' : 'Kanca (Hook) & Kreatif Kurgusu', desc: lang === 'de' ? 'Wir optimieren Thumbnail, Titel und die ersten 5 Sekunden des Videos für maximale Wiedergabedauer und niedrigen CPV.' : lang === 'en' ? 'We optimize thumbnail, title, and the first 5 seconds of the video for high retention and low CPV.' : 'Kullanıcının videodan çıkmasını önlemek için ilk 5 saniyeyi, küçük resmi (thumbnail) ve başlığı optimize ediyoruz.' },
        { step: '03', title: lang === 'de' ? 'Kampagnen-Setup & Platzierungsfilter' : lang === 'en' ? 'Campaign Setup & Placement Filters' : 'Kampanya Kurulumu & Filtreleme', desc: lang === 'de' ? 'Einrichtung in Google Ads mit präzisen Ausschlüssen (keine Kinder-Kanäle, keine Fake-Traffic-Seiten) für 100% echte Menschen.' : lang === 'en' ? 'Google Ads setup with strict placement exclusions (blocking kids channels and low-quality placements) for 100% human traffic.' : 'Çocuk kanallarını ve kalitesiz içerikleri filtreleyerek bütçenizin sadece gerçek izleyicilere harcanmasını sağlıyoruz.' },
        { step: '04', title: lang === 'de' ? 'Skalierung & Kanalwachstum' : lang === 'en' ? 'Scaling & Channel Growth' : 'Ölçekleme & Abone Büyümesi', desc: lang === 'de' ? 'Kontinuierliche Gebotsoptimierung, Ausbau von Abonnenten und Auswertung der YouTube Analytics Kennzahlen.' : lang === 'en' ? 'Continuous bid optimization, subscriber acquisition growth, and deep YouTube Analytics reporting.' : 'İzleme başı maliyetleri düşürerek abone artışını ve organik keşfete düşme oranını en üst seviyeye çıkarıyoruz.' }
      ],
      benefits: [
        { title: lang === 'de' ? '23.1M+ Verifizierte Erfahrung' : lang === 'en' ? '23.1M+ Verified Track Record' : '23.1M+ Doğrulanmış Canlı Panel Verisi', desc: lang === 'de' ? '720+ başarıyla yönetilen kampanya ve resmi Google Partner güvencesi.' : lang === 'en' ? '720+ successfully executed campaigns backed by certified Google Partner expertise.' : '720+ yönetilen kampanya ve resmi Google Partner uzmanlığı.' },
        { title: lang === 'de' ? '100% Echte & Organische Zuschauer' : lang === 'en' ? '100% Real & Organic Viewers' : '%100 Gerçek İzleyici (Sıfır Bot)', desc: lang === 'de' ? 'Keine gekauften Fake-Klicks. Reale Menschen, die kommentieren, liken und abonnieren.' : lang === 'en' ? 'Zero purchased bot views. Real human viewers who engage, like, and subscribe.' : 'Kanalınızı riske atan sahte botlar değil; beğenen, yorum yapan ve abone olan gerçek kitle.' },
        { title: lang === 'de' ? 'Optimale Kosten pro View (CPV)' : lang === 'en' ? 'Optimal Cost Per View (CPV)' : 'Düşük İzleme Başı Maliyet (CPV)', desc: lang === 'de' ? '0,01 € bis 0,03 € CPV durch mathematisch präzise Gebotsstrategien.' : lang === 'en' ? '€0.01 to €0.03 CPV achieved through algorithmic bidding precision.' : '0.01€ seviyelerine kadar optimize edilmiş maliyetle bütçenizden maksimum izlenme çıkarma.' },
        { title: lang === 'de' ? 'Trend-Charts & Algorithmus-Push' : lang === 'en' ? 'Trending Charts & Algorithm Push' : 'Trendler & Önerilen Video Desteği', desc: lang === 'de' ? 'Schneller Start-Traffic signalisiert YouTube hohe Relevanz für organische Empfehlungen.' : lang === 'en' ? 'Rapid initial momentum signals high relevance to YouTube\'s recommendation engine.' : 'İlk günlerde sağlanan yüksek izlenme ivmesi ile YouTube organik önerilen videolara girme avantajı.' }
      ],
      faq: [
        {
          q: lang === 'de' ? 'Wie zählt YouTube Videoaufrufe ab dem 24. August 2026?' : lang === 'en' ? 'How does YouTube count views starting August 24, 2026?' : 'YouTube 24 Ağustos 2026 güncellemesi ile izlenmeleri nasıl sayacak?',
          a: lang === 'de' ? 'Ab dem 24. August 2026 zählt YouTube jeden Start eines Videos (Shorts, VOD, Livestreams) ab der ersten Sekunde als Aufruf. Dies erhöht die sichtbaren Aufrufzahlen, während die Monetarisierungsregeln (YPP) weiterhin an die echte Wiedergabezeit gebunden bleiben.' : lang === 'en' ? 'Starting August 24, 2026, YouTube registers views immediately upon video playback across Shorts, VOD, and Live formats. Public view counts increase rapidly while YPP monetization rules remain anchored to valid watch hours.' : '24 Ağustos 2026 itibarıyla Shorts, normal videolar ve canlı yayınlarda oynatma başladığı an (0. saniyede) görüntüleme sayılmaktadır. Bu sayaçtaki izlenme sayısını hızla yükseltirken, para kazanma hak edişi gerçek izlenme süresine göre hesaplanmaya devam eder.'
        },
        {
          q: lang === 'de' ? 'Kann YouTube-Werbung meinem Kanal oder Song schaden?' : lang === 'en' ? 'Can YouTube advertising harm my channel or music video?' : 'YouTube reklamları kanalıma veya klibime zarar verir mi?',
          a: lang === 'de' ? 'Nein, absolut nicht. Da wir ausschließlich die offizielle Google Ads Werbeplattform nutzen und Kinder- sowie minderwertige Kanäle strikt ausschließen, erhält Ihr Video nur authentische, interessierte Zielgruppen.' : lang === 'en' ? 'No, absolutely not. Because we advertise strictly through the official Google Ads network with stringent placement filters, your channel only gains authentic, high-relevance viewers.' : 'Kesinlikle hayır. Tamamen resmi Google Ads platformu üzerinden reklam verdiğimiz ve çocuk kanalları gibi verimsiz yerleşimleri elediğimiz için kanalınız %100 güvenli şekilde büyür.'
        },
        {
          q: lang === 'de' ? 'Wie viele Aufrufe kann ich mit meinem Budget erwarten?' : lang === 'en' ? 'How many views can I expect with my budget?' : 'Bütçem ile yaklaşık kaç izlenme elde edebilirim?',
          a: lang === 'de' ? 'Je nach Zielland und Musikgenre liegt der CPV (Cost-per-View) zwischen 0,01 € und 0,03 €. Mit einem Budget von 300 € lassen sich oft 15.000 bis 30.000+ echte Aufrufe erzielen. Wir berechnen Ihnen vorab eine exakte Reichweitenprognose.' : lang === 'en' ? 'Depending on target geography and genre, CPV ranges from €0.01 to €0.03. A €300 budget typically delivers 15,000 to 30,000+ genuine views. We provide a precise reach forecast before launch.' : 'Hedeflenen ülke ve müzik/sektör türüne göre izleme başı maliyet 0.01€ ile 0.03€ arasında değişir. Örneğin 300€ bütçe ile ortalama 15.000 - 30.000+ gerçek izlenme elde edilebilir.'
        },
        {
          q: lang === 'de' ? 'Schalten Sie auch YouTube Shorts Werbekampagnen?' : lang === 'en' ? 'Do you run YouTube Shorts ad campaigns?' : 'YouTube Shorts reklamları da yönetiyor musunuz?',
          a: lang === 'de' ? 'Ja, wir sind spezialisiert auf vertikale YouTube Shorts Ads und Demand Gen Video-Kampagnen, die besonders bei jungen Zielgruppen maximale Reichweite zu extrem niedrigen Klickpreisen erzielen.' : lang === 'en' ? 'Yes, we specialize in vertical YouTube Shorts ads and Demand Gen campaigns designed to capture massive Gen Z & millennial attention at ultra-low CPVs.' : 'Evet, dikey YouTube Shorts reklamları ve Demand Gen video kampanyalarında uzmanız. Özellikle mobil izleyicilerden rekor etkileşim ve abone dönüşümü sağlıyoruz.'
        }
      ]
    },
    'meta-ads': {
      title: lang === 'de' ? 'Meta Ads Management' : lang === 'en' ? 'Meta Ads Management' : 'Meta Ads Yönetimi',
      subtitle: lang === 'de'
        ? 'Facebook & Instagram Ads, die profitabel skalieren — von Advantage+ bis Retargeting.'
        : lang === 'en'
        ? 'Facebook & Instagram Ads that scale profitably — from Advantage+ to Retargeting.'
        : 'Kârlı ölçeklenen Facebook & Instagram reklamları — Advantage+\'tan Retargeting\'e.',
      description: lang === 'de'
        ? 'Mit präzisem demografischen Targeting, Conversions API (CAPI) und hochkonvertierenden Kreativ-Konzepten verwandeln wir Facebook- und Instagram-Nutzer in kaufende Kunden. Messbar, datenbasiert und mit maximalem ROAS.'
        : lang === 'en'
        ? 'With precision demographic targeting, Conversions API (CAPI), and high-converting creative frameworks, we turn Facebook and Instagram users into paying customers. Measurable, data-driven, and with maximum ROAS.'
        : 'Hassas demografik hedefleme, Conversions API (CAPI) ve yüksek dönüşümlü kreatif konseptlerle Facebook ve Instagram kullanıcılarını sadık müşterilere dönüştürüyoruz. Ölçülebilir, veri odaklı ve maksimum ROAS ile.',
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
        { value: '4,2x', label: lang === 'de' ? 'Ø Purchase ROAS' : lang === 'en' ? 'Avg. Purchase ROAS' : 'Ort. Satış ROAS', trend: lang === 'de' ? 'E-Commerce Kampagnen' : lang === 'en' ? 'E-Commerce campaigns' : 'E-Ticaret Kampanyaları' },
        { value: '85K+', label: lang === 'de' ? 'Generierte Leads' : lang === 'en' ? 'Leads Generated' : 'Üretilen Müşteri Talebi', trend: lang === 'de' ? 'Verifizierte Kontakte' : lang === 'en' ? 'Verified contacts' : 'Doğrulanmış İletişim' },
        { value: '%92+', label: lang === 'de' ? 'CAPI Event Match' : lang === 'en' ? 'CAPI Event Match' : 'CAPI Eşleşme Oranı', trend: lang === 'de' ? 'Server-Side Tracking' : lang === 'en' ? 'Server-side tracking' : 'Sunucu Taraflı Takip' },
        { value: '320+', label: lang === 'de' ? 'Skalierte Kampagnen' : lang === 'en' ? 'Scaled Campaigns' : 'Ölçeklenen Kampanya', trend: lang === 'de' ? 'Facebook & Instagram' : lang === 'en' ? 'Facebook & Instagram' : 'Facebook & Instagram' }
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

    'server-side-tracking': {
      title: lang === 'de' ? 'Werbekonto- & Tracking-Setup' : lang === 'en' ? 'Ad Account & Tracking Setup' : 'Reklam & Tracking Kurulum Hizmetleri',
      subtitle: lang === 'de'
        ? 'Google Ads, GA4, Search Console, GMC, Meta Pixel & CAPI — 100% lückenloses Setup.'
        : lang === 'en'
        ? 'Google Ads, GA4, Search Console, GMC, Meta Pixel & CAPI — 100% loss-free infrastructure setup.'
        : 'Google Ads, GA4, Search Console, GMC, Meta Pixel & CAPI — %100 eksiksiz altyapı kurulumu.',
      description: lang === 'de'
        ? 'Schluss mit Datenverlusten durch iOS- und Cookie-Blocker. Wir richten Ihre gesamte Werbe- und Tracking-Infrastruktur professionell ein: Von Google Ads, GA4 E-Commerce und Search Console über Merchant Center bis hin zu Meta Business Manager, Conversions API (CAPI) und Server-Side GTM.'
        : lang === 'en'
        ? 'Stop losing conversion data to iOS updates and ad blockers. We build and verify your entire advertising and measurement stack: From Google Ads, GA4 E-Commerce, and Search Console to Merchant Center, Meta Business Manager, CAPI, and Server-Side GTM.'
        : 'iOS güncellemeleri ve reklam engelleyiciler yüzünden veri kaybetmeye son. Tüm reklam ve ölçüm altyapınızı sıfırdan anahtar teslim kuruyoruz: Google Ads, GA4 E-Ticaret ve Search Console\'dan Merchant Center, Meta Business Manager, CAPI ve Server-Side GTM\'e kadar.',
      badge: lang === 'de' ? 'Server-Side & CAPI Spezialist' : lang === 'en' ? 'Server-Side & CAPI Specialist' : 'Server-Side & CAPI Uzmanı',
      primaryColor: '#0F9D58',
      secondaryColor: '#4285F4',
      accentColor: '#10B981',
      gradientFrom: '#0F9D58',
      gradientTo: '#4285F4',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0F9D58" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      ),
      stats: [
        { value: '%100', label: lang === 'de' ? 'Messgenauigkeit' : lang === 'en' ? 'Data Accuracy' : 'Ölçüm Doğruluğu', trend: lang === 'de' ? 'Server-Side sGTM' : lang === 'en' ? 'Server-side sGTM' : 'Sunucu Taraflı sGTM' },
        { value: '9.0+', label: lang === 'de' ? 'EMQ Match Quality' : lang === 'en' ? 'EMQ Match Quality' : 'Olay Eşleşme Skoru', trend: lang === 'de' ? 'Meta CAPI Score' : lang === 'en' ? 'Meta CAPI Score' : 'Meta CAPI Skoru' },
        { value: '24h', label: lang === 'de' ? 'Express-Setup' : lang === 'en' ? 'Express Setup' : 'Hızlı Kurulum', trend: lang === 'de' ? 'Schlüsselfertig' : lang === 'en' ? 'Turnkey integration' : 'Anahtar Teslim' },
        { value: '720+', label: lang === 'de' ? 'Integrierte Konten' : lang === 'en' ? 'Accounts Deployed' : 'Entegre Hesap', trend: lang === 'de' ? 'Google & Meta' : lang === 'en' ? 'Google & Meta' : 'Google & Meta' }
      ],
      features: [
        {
          title: lang === 'de' ? 'Google Altyapı & Analitik' : lang === 'en' ? 'Google Analytics & Ads Stack' : 'Google Reklam & Analitik Kurulumu',
          subtitle: 'Google Ads, GA4 & Console',
          desc: lang === 'de' ? 'Google Ads, GA4 E-Commerce, Search Console ve Merchant Center ürün besleme entegrasyonu.' : lang === 'en' ? 'Google Ads, GA4 E-Commerce, Search Console, and Merchant Center feed integration.' : 'Google Ads, GA4 E-Ticaret, Search Console ve Merchant Center ürün besleme entegrasyonu.',
          icon: BarChart3,
          items: lang === 'de' ? ['Google Ads Kontoeinrichtung', 'GA4 E-Commerce Setup', 'Search Console Verifizierung', 'Merchant Center Feed Sync'] : lang === 'en' ? ['Google Ads account setup', 'GA4 E-Commerce setup', 'Search Console verification', 'Merchant Center feed sync'] : ['Google Ads hesap kurulumu', 'GA4 E-Ticaret kurulumu', 'Search Console doğrulama', 'Merchant Center feed senkronizasyonu']
        },
        {
          title: lang === 'de' ? 'Meta Business & CAPI' : lang === 'en' ? 'Meta Business & CAPI Stack' : 'Meta Pixel & CAPI Kurulum Paketi',
          subtitle: 'Business Manager & CAPI',
          desc: lang === 'de' ? 'Meta Business Manager, 2FA güvenlik, Meta Pixel, Conversions API (CAPI) ve domain doğrulama.' : lang === 'en' ? 'Meta Business Manager, 2FA security, Meta Pixel, Conversions API (CAPI), and domain verification.' : 'Meta Business Manager, 2FA güvenlik, Meta Pixel, Conversions API (CAPI) ve domain doğrulama.',
          icon: ShieldCheck,
          items: lang === 'de' ? ['Business Manager Setup', 'Meta Pixel & CAPI', 'Domain-Verifizierung', 'Aggregated Event Config'] : lang === 'en' ? ['Business Manager setup', 'Meta Pixel & CAPI', 'Domain verification', 'Aggregated event config'] : ['Business Manager kurulumu', 'Meta Pixel & CAPI', 'Domain doğrulama', 'Öncelikli olay yapılandırması']
        },
        {
          title: lang === 'de' ? 'Server-Side GTM & sGTM' : lang === 'en' ? 'Server-Side GTM & Cloud' : 'İleri Seviye Server-Side Tracking',
          subtitle: 'Cloud Server & Privacy',
          desc: lang === 'de' ? 'Google Cloud ve Stape üzerinde 1. taraf çerez (first-party) altyapısı ve Google Consent Mode v2.' : lang === 'en' ? 'First-party server tracking deployed on Google Cloud/Stape and Google Consent Mode v2.' : 'Google Cloud ve Stape üzerinde 1. taraf çerez altyapısı ve Google Consent Mode v2 entegrasyonu.',
          icon: Cpu,
          items: lang === 'de' ? ['Server-Side sGTM', 'Consent Mode v2', 'Enhanced Conversions', 'Offline Conversion Tracking'] : lang === 'en' ? ['Server-Side sGTM', 'Consent Mode v2', 'Enhanced Conversions', 'Offline Conversion Tracking'] : ['Server-Side sGTM', 'Consent Mode v2', 'Gelişmiş Dönüşümler', 'Offline Dönüşüm Takibi']
        },
        {
          title: lang === 'de' ? 'Google Business & Maps Setup' : lang === 'en' ? 'Google Business & Maps Setup' : 'Google Business Profile & Haritalar',
          subtitle: 'Google Maps & Local Ads',
          desc: lang === 'de' ? 'Google Unternehmensprofil-Erstellung, Maps PIN-Verifizierung, Standort-Erweiterungen und 3-Pack Optimierung.' : lang === 'en' ? 'Google Business Profile creation, Maps PIN verification, Location Extensions, and Local 3-Pack ranking.' : 'Google İşletme Profili açılışı, Haritalar video/PIN doğrulaması, Google Ads yer uzantısı bağlantısı ve yerel sıralama.',
          icon: MapPin,
          items: lang === 'de' ? ['Unternehmensprofil Neuanlage', 'Google Maps Verifizierung', 'Google Ads Standorterweiterung', '3-Pack Local Ranking'] : lang === 'en' ? ['Business Profile setup', 'Google Maps verification', 'Google Ads location extension', '3-Pack local ranking'] : ['İşletme profili sıfırdan kurulum', 'Haritalar PIN/Video doğrulama', 'Google Ads yer uzantısı bağlama', 'Harita 3-Pack yerel sıralama']
        }
      ],
      process: [
        {
          step: '01',
          title: lang === 'de' ? 'Audit & Anforderungsanalyse' : lang === 'en' ? 'Audit & Requirements Analysis' : 'Denetim & İhtiyaç Analizi',
          desc: lang === 'de' ? 'Wir prüfen bestehende Konten, Website-Plattform (Shopify, WooCommerce, Custom) und Tracking-Lücken.' : lang === 'en' ? 'We audit existing accounts, website platforms (Shopify, WooCommerce, Custom), and tracking loss.' : 'Mevcut hesaplarınızı, web sitesi altyapınızı (Shopify, WooCommerce, Özel Yazılım) ve veri kayıplarını inceliyoruz.'
        },
        {
          step: '02',
          title: lang === 'de' ? 'Konten- & DataLayer-Setup' : lang === 'en' ? 'Account & DataLayer Setup' : 'Hesap & Veri Katmanı Kurulumu',
          desc: lang === 'de' ? 'Einrichtung aller Werbekonten, Google Tag Manager DataLayer und E-Commerce Ereignisse.' : lang === 'en' ? 'Configuration of all ad accounts, Google Tag Manager DataLayer, and e-commerce events.' : 'Tüm reklam hesaplarının açılması, Google Tag Manager DataLayer ve e-ticaret olaylarının yapılandırılması.'
        },
        {
          step: '03',
          title: lang === 'de' ? 'CAPI & Server-Side Deployment' : lang === 'en' ? 'CAPI & Server-Side Deployment' : 'CAPI & Sunucu Entegrasyonu',
          desc: lang === 'de' ? 'Bereitstellung des Server-GTM Containers auf Google Cloud/Stape und Verknüpfung der Conversions API.' : lang === 'en' ? 'Deployment of Server GTM container on Google Cloud/Stape and Conversions API connection.' : 'Google Cloud/Stape üzerinde Server GTM konteynerinin kurulması ve Conversions API entegrasyonu.'
        },
        {
          step: '04',
          title: lang === 'de' ? 'QA-Testing & Übergabe' : lang === 'en' ? 'QA Testing & Handover' : 'Test, Doğrulama & Teslimat',
          desc: lang === 'de' ? 'Live-Test aller Transaktionen, Event Match Quality Prüfung (9.0+) und schlüsselfertige Übergabe.' : lang === 'en' ? 'Live testing of all transactions, Event Match Quality verification (9.0+), and turnkey handover.' : 'Canlı test siparişleri, Event Match Quality (9.0+) skor doğrulaması ve anahtar teslim raporlama.'
        }
      ],
      benefits: [
        { title: lang === 'de' ? '100% Messgenauigkeit' : lang === 'en' ? '100% Data Accuracy' : '%100 Veri Doğruluğu', desc: lang === 'de' ? 'Beseitigung von bis zu 40% Datenverlust durch Ad-Blocker' : lang === 'en' ? 'Eliminate up to 40% data loss from ad blockers' : 'Reklam engelleyicilerden kaynaklanan %40 veri kaybını önleme' },
        { title: lang === 'de' ? 'Bessere KI-Gebote' : lang === 'en' ? 'Smarter AI Bidding' : 'Daha Güçlü Yapay Zeka', desc: lang === 'de' ? 'Höherer ROAS durch perfekte Algorithmus-Fütterung' : lang === 'en' ? 'Higher ROAS through perfect algorithm training' : 'Eksiksiz veri ile Meta ve Google yapay zekasından maksimum ROAS' },
        { title: lang === 'de' ? 'DSGVO & EU-Konform' : lang === 'en' ? 'GDPR & EU Compliant' : 'KVKK & GDPR Uyumu', desc: lang === 'de' ? 'Rechtssichere Consent Mode v2 Integration' : lang === 'en' ? 'Fully compliant Consent Mode v2 setup' : 'Avrupa ve KVKK standartlarında Consent Mode v2 altyapısı' },
        { title: lang === 'de' ? '24h Express-Lieferung' : lang === 'en' ? '24h Express Turnkey' : '24 Saatte Teslim', desc: lang === 'de' ? 'Schnelle und schlüsselfertige Integration' : lang === 'en' ? 'Fast and turnkey deployment' : 'Hızlı, test edilmiş ve anahtar teslim kurulum' }
      ],
      faq: [
        {
          q: lang === 'de' ? 'Warum brauche ich Server-Side Tracking?' : lang === 'en' ? 'Why do I need Server-Side Tracking?' : 'Neden Server-Side Tracking ve CAPI Kurulumu Gereklidir?',
          a: lang === 'de' ? 'Klassische Browser-Pixel verlieren durch Ad-Blocker und iOS-Restriktionen bis zu 30-40% der Kaufdaten. Mit Server-Side Tracking werden Daten direkt vom Server an Werbenetzwerke gesendet — ohne Datenverlust.' : lang === 'en' ? 'Standard browser pixels lose up to 30-40% of conversion data due to ad-blockers and iOS privacy restrictions. Server-Side Tracking sends data directly from your server to ad networks with zero loss.' : 'Geleneksel tarayıcı pikselleri, reklam engelleyiciler ve iOS gizlilik kısıtlamaları nedeniyle satış verilerinin %30-40\'ını kaçırır. Server-Side Tracking ile veriler doğrudan sunucudan reklam paneline iletilir, yapay zeka en doğru alıcıyı hedefler.'
        },
        {
          q: lang === 'de' ? 'Welche Plattformen werden unterstützt?' : lang === 'en' ? 'Which platforms are supported?' : 'Hangi e-ticaret ve web altyapıları destekleniyor?',
          a: lang === 'de' ? 'Wir richten Tracking für Shopify, WooCommerce, Magento, Shopware, Next.js, Laravel und individuelle Webapplikationen ein.' : lang === 'en' ? 'We deploy tracking setups for Shopify, WooCommerce, Magento, Shopware, Next.js, Laravel, and custom architectures.' : 'Shopify, WooCommerce, Magento, Shopware, Next.js, React, Laravel ve tüm özel e-ticaret yazılımları için kusursuz kurulum yapıyoruz.'
        }
      ]
    },

    'tiktok-ads': {
      title: lang === 'de' ? 'TikTok Ads Management' : lang === 'en' ? 'TikTok Ads Management' : 'TikTok Ads Yönetimi',
      subtitle: lang === 'de'
        ? 'Virale Reichweite & Social Commerce — skalieren Sie mit authentischen TikTok Ads.'
        : lang === 'en'
        ? 'Viral reach & social commerce — scale with high-converting TikTok Ads.'
        : 'Viral erişim & sosyal ticaret — yüksek dönüşümlü TikTok reklamlarıyla ölçeklenin.',
      description: lang === 'de'
        ? 'Nutzen Sie die algorithmische Power von TikTok: Mit nativen Kurzvideos, Spark Ads und TikTok Shop Integration verwandeln wir Aufmerksamkeit in messbare Umsätze und qualifizierte Leads für die Generation Z und junge Zielgruppen.'
        : lang === 'en'
        ? 'Harness TikTok\'s algorithmic power: With native short-form video, Spark Ads, and TikTok Shop integration, we turn attention into measurable revenue and qualified leads for Gen Z and modern audiences.'
        : 'TikTok\'un algoritmik gücünden yararlanın: Yerel kısa videolar, Spark Ads ve TikTok Shop entegrasyonu ile ilgiyi ölçülebilir ciroya ve nitelikli müşteri talebine dönüştürüyoruz.',
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
        { value: '18M+', label: lang === 'de' ? 'Video Aufrufe' : lang === 'en' ? 'Video Views' : 'Video İzlenme', trend: lang === 'de' ? 'Viral generiert' : lang === 'en' ? 'Virally generated' : 'Viral erişim' },
        { value: '1,80 €', label: lang === 'de' ? 'Ø CPM' : lang === 'en' ? 'Avg. CPM' : 'Ort. CPM', trend: lang === 'de' ? 'Günstige Reichweite' : lang === 'en' ? 'Cost-effective reach' : 'Düşük maliyetli erişim' },
        { value: '6,2x', label: lang === 'de' ? 'Top ROAS (Shop)' : lang === 'en' ? 'Top ROAS (Shop)' : 'En Yüksek ROAS (Shop)', trend: lang === 'de' ? 'Social Commerce' : lang === 'en' ? 'Social Commerce' : 'Sosyal Ticaret' },
        { value: '140+', label: lang === 'de' ? 'Kampagnen' : lang === 'en' ? 'Campaigns' : 'Kampanya', trend: lang === 'de' ? 'Skalierte Creator Ads' : lang === 'en' ? 'Scaled creator ads' : 'Ölçeklenen Kreatif Reklam' }
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
      subtitle: lang === 'de'
        ? 'B2B-Lead-Generierung & Thought Leadership — erreichen Sie Entscheider in Echtzeit.'
        : lang === 'en'
        ? 'B2B Lead Generation & Thought Leadership — reach decision-makers in real time.'
        : 'B2B Müşteri Kazanımı & Fikir Liderliği — karar vericilere gerçek zamanlı ulaşın.',
      description: lang === 'de'
        ? 'Auf X erreichen Sie verifizierte C-Level-Entscheider, Meinungsführer und kaufkräftige Geschäftskunden. Wir platzieren Ihre Botschaft in Trend-Konversationen und hochrelevanten Timelines mit maximaler Glaubwürdigkeit.'
        : lang === 'en'
        ? 'Reach verified C-level decision-makers, industry leaders, and high-value business clients on X. We position your message within trending conversations and targeted timelines with maximum credibility.'
        : 'X platformunda onaylı C-Level karar vericilere, sektör liderlerine ve yüksek bütçeli kurumsal müşterilere ulaşın. Mesajınızı anlık trendlere ve hedefli zaman akışlarına yerleştiriyoruz.',
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
        { value: '14,20 €', label: lang === 'de' ? 'Ø B2B CPL' : lang === 'en' ? 'Avg. B2B CPL' : 'Ort. B2B Lead Maliyeti', trend: lang === 'de' ? 'C-Level Kontakte' : lang === 'en' ? 'C-level contacts' : 'C-Level İletişim' },
        { value: '2,4M', label: lang === 'de' ? 'Trend-Impressionen' : lang === 'en' ? 'Trend Impressions' : 'Trend Gösterimi', trend: lang === 'de' ? 'Pro Takeover' : lang === 'en' ? 'Per Takeover' : 'Takeover Başına' },
        { value: '%8,4', label: lang === 'de' ? 'Engagement-Rate' : lang === 'en' ? 'Engagement Rate' : 'Etkileşim Oranı', trend: lang === 'de' ? 'Promoted Tweets' : lang === 'en' ? 'Promoted tweets' : 'Sponsorlu Tweetler' },
        { value: '95+', label: lang === 'de' ? 'B2B Kampagnen' : lang === 'en' ? 'B2B Campaigns' : 'B2B Kampanya', trend: lang === 'de' ? 'Erfolgreich skaliert' : lang === 'en' ? 'Successfully scaled' : 'Başarıyla Ölçeklendi' }
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
      subtitle: lang === 'de'
        ? 'Organisch auf Platz 1 bei Google — nachhaltiger Traffic ohne Klickkosten.'
        : lang === 'en'
        ? 'Rank #1 organically on Google — sustainable traffic without ad spend.'
        : 'Google\'da organik olarak 1. sıraya yükselin — tıklama maliyeti olmadan kalıcı trafik.',
      description: lang === 'de'
        ? 'Mit modernem Technical SEO, Princeton GEO (Generative Engine Optimization für ChatGPT & Perplexity) und inhaltsstarkem E-E-A-T Linkaufbau bringen wir Ihr Unternehmen auf die begehrten Top-Positionen der Suchergebnisse.'
        : lang === 'en'
        ? 'With advanced technical SEO, Princeton GEO (Generative Engine Optimization for ChatGPT & Perplexity), and authoritative E-E-A-T content strategy, we position your business at the top of organic search results.'
        : 'İleri düzey teknik SEO, Princeton GEO (ChatGPT ve Perplexity için AI Arama Optimizasyonu) ve güçlü E-E-A-T içerik stratejisiyle işletmenizi arama sonuçlarında zirveye taşıyoruz.',
      badge: lang === 'de' ? 'SEO Experte · 17+ Jahre' : lang === 'en' ? 'SEO Expert · 17+ Years' : 'SEO Uzmanı · 17+ Yıl',
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
        { value: '+450%', label: lang === 'de' ? 'Organischer Zuwachs' : lang === 'en' ? 'Organic Growth' : 'Organik Trafik Artışı', trend: lang === 'de' ? 'Ø nach 6 Monaten' : lang === 'en' ? 'Avg. after 6 months' : 'Ortalama 6 ayda' },
        { value: '#1.8', label: lang === 'de' ? 'Ø Keyword-Position' : lang === 'en' ? 'Avg. Keyword Position' : 'Ort. Anahtar Kelime Sırası', trend: lang === 'de' ? 'Fokus-Keywords' : lang === 'en' ? 'Focus keywords' : 'Hedef Kelimeler' },
        { value: '%8,4', label: lang === 'de' ? 'GSC Durchklickrate' : lang === 'en' ? 'GSC Click-Through Rate' : 'GSC Tıklama Oranı', trend: lang === 'de' ? 'Google Search Console' : lang === 'en' ? 'Google Search Console' : 'Google Search Console' },
        { value: '100/100', label: lang === 'de' ? 'Core Web Vitals' : lang === 'en' ? 'Core Web Vitals' : 'Core Web Vitals Skoru', trend: lang === 'de' ? 'Lighthouse Standard' : lang === 'en' ? 'Lighthouse standard' : 'Lighthouse Standardı' }
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
          title: lang === 'de' ? 'Content & GEO' : lang === 'en' ? 'Content & GEO' : 'İçerik & GEO',
          subtitle: 'AI Visibility',
          desc: lang === 'de' ? 'Wir erstellen E-E-A-T optimierte Inhalte für Google und KI-Suchmaschinen wie ChatGPT & Perplexity.' : lang === 'en' ? 'We create E-E-A-T optimized content for Google and AI engines like ChatGPT & Perplexity.' : 'Google ve ChatGPT/Perplexity gibi yapay zeka arama motorları için E-E-A-T uyumlu içerikler üretiyoruz.',
          icon: FileText,
          items: lang === 'de' ? ['Blogartikel & Pillar Content', 'llms.txt Standard', 'Princeton GEO Scoring', 'E-E-A-T Autorität'] : lang === 'en' ? ['Blog & pillar content', 'llms.txt standard', 'Princeton GEO scoring', 'E-E-A-T authority'] : ['Blog & pillar içerik', 'llms.txt standardı', 'Princeton GEO skorlama', 'E-E-A-T otoritesi']
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
        { step: '02', title: lang === 'de' ? 'Keyword & GEO' : lang === 'en' ? 'Keyword & GEO' : 'Keyword & GEO', desc: lang === 'de' ? 'Wir identifizieren profitable Suchbegriffe und KI-Zitierfähigkeiten.' : lang === 'en' ? 'We identify profitable search queries and AI citability.' : 'Kârlı arama terimlerini ve yapay zeka alıntılanabilirliğini belirliyoruz.' },
        { step: '03', title: lang === 'de' ? 'Optimierung' : lang === 'en' ? 'Optimization' : 'Optimizasyon', desc: lang === 'de' ? 'Wir führen technische, On-Page und Off-Page Optimierungen durch.' : lang === 'en' ? 'We implement technical, on-page and off-page optimizations.' : 'Teknik, on-page ve off-page optimizasyonları uyguluyoruz.' },
        { step: '04', title: lang === 'de' ? 'Überwachung' : lang === 'en' ? 'Monitoring' : 'İzleme', desc: lang === 'de' ? 'Wir überwachen Rankings und liefern monatliche transparente Berichte.' : lang === 'en' ? 'We monitor rankings and provide monthly transparent reports.' : 'Sıralamaları izliyor, aylık şeffaf raporlar sunuyoruz.' }
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
      subtitle: lang === 'de'
        ? '4.9★ Google Reputation aufbauen — unfaire Bewertungen rechtssicher entfernen.'
        : lang === 'en'
        ? 'Build a 4.9★ Google reputation — legally remove unfair reviews.'
        : '4.9★ Google itibarı oluşturun — haksız olumsuz yorumları yasal güvenceyle kaldırın.',
      description: lang === 'de'
        ? 'Wir schützen Ihren guten Ruf: Mit rechtssicherer Entfernung von unfairen Google- und Trustpilot-Bewertungen sowie automatisierten Bewertungskampagnen steigern wir Ihre Durchschnittsbewertung und Ihren Kundenstrom.'
        : lang === 'en'
        ? 'Protect and amplify your brand reputation: With legally compliant removal of fake Google/Trustpilot reviews and automated review generation funnels, we elevate your rating and local customer trust.'
        : 'İtibarınızı koruyor ve güçlendiriyoruz: Google Maps ve Trustpilot üzerindeki haksız/sahte yorumların yasal güvenceyle kaldırılması ve otomatik yorum toplama sistemleriyle puanınızı zirveye taşıyoruz.',
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
        { value: '4.9★', label: lang === 'de' ? 'Ziel-Bewertung' : lang === 'en' ? 'Target Rating' : 'Hedef Ortalama Puan', trend: lang === 'de' ? 'Google & Trustpilot' : lang === 'en' ? 'Google & Trustpilot' : 'Google & Trustpilot' },
        { value: '%95', label: lang === 'de' ? 'Erfolgsquote' : lang === 'en' ? 'Success Rate' : 'Kaldırma Başarısı', trend: lang === 'de' ? 'Unberechtigte Rezensionen' : lang === 'en' ? 'Unjustified reviews' : 'Haksız Yorumlar' },
        { value: '+320%', label: lang === 'de' ? 'Mehr Kundenanrufe' : lang === 'en' ? 'More Customer Calls' : 'Daha Fazla Müşteri Araması', trend: lang === 'de' ? 'Durch 4.8+ Sterne' : lang === 'en' ? 'Through 4.8+ stars' : '4.8+ Yıldız Etkisi' },
        { value: '24-72h', label: lang === 'de' ? 'Erste Reaktion' : lang === 'en' ? 'First Response' : 'İlk Müdahale Süresi', trend: lang === 'de' ? 'Express-Bearbeitung' : lang === 'en' ? 'Express processing' : 'Ekspres İşlem' }
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "description": data.description,
    "provider": {
      "@type": "Person",
      "name": "Salih Maral",
      "url": "https://salihmaral.de"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Germany"
    },
    "logo": "https://salihmaral.de/logo.png"
  }

  const faqSchema = data.faq && data.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  } : null

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": lang === 'de' ? 'Startseite' : lang === 'en' ? 'Home' : 'Ana Sayfa',
        "item": `https://salihmaral.de${lang === 'de' ? '' : '/' + lang}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": lang === 'de' ? 'Dienstleistungen' : lang === 'en' ? 'Services' : 'Hizmetler',
        "item": `https://salihmaral.de${lang === 'de' ? '/dienstleistungen' : lang === 'en' ? '/en/services' : '/tr/hizmetler'}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.title,
        "item": `https://salihmaral.de${getLocalizedServiceUrl(lang, service)}`
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Navigation - Same as Homepage */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href={lang === 'de' ? '/' : `/${lang}`} className="flex items-center">
              <picture><source srcSet="/logo-sm.webp" type="image/webp" /><img src="/logo.png" alt="Salih Maral Logo" className="h-10 w-auto" width="40" height="40" /></picture>
            </a>
            
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
                        href={getLocalizedServiceUrl(lang, s.slug)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#4285F4]/10 hover:text-[#4285F4] transition-colors"
                      >
                        <div className="font-semibold">{s.title}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <a href={`${lang === 'de' ? '' : `/${lang}`}/#success`} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{navT.success}</a>
              <a href={`${lang === 'de' ? '' : `/${lang}`}/#about`} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{navT.about}</a>
              <a href="/blog" className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">Blog</a>
              <a href={`${lang === 'de' ? '' : `/${lang}`}/#contact`} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{navT.contact}</a>
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

      {/* Hero Section (Ultra-Modern Agency Glassmorphism & High-Impact Typography) */}
      <section
        className="pt-32 pb-24 px-4 relative overflow-hidden"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${data.gradientFrom}18 0%, white 70%, ${data.gradientTo}10 100%)`
        }}
      >
        {/* Subtle Ambient Glow Spheres */}
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-3xl pointer-events-none -z-10 opacity-60"
          style={{ background: `linear-gradient(135deg, ${data.gradientFrom}25, ${data.gradientTo}25)` }}
        ></div>

        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top Partner Badge */}
            <div className="inline-flex items-center space-x-2.5 bg-white/90 border border-slate-200/90 rounded-full px-5 py-2 mb-8 shadow-sm backdrop-blur-md hover:border-slate-300 transition-colors">
              <span className="flex-shrink-0">{data.icon}</span>
              <span className="text-xs md:text-sm font-bold text-slate-800 tracking-wide">{data.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
              {data.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl font-semibold text-slate-800 mb-5 max-w-3xl mx-auto leading-snug">
              {data.subtitle}
            </p>

            {/* Detailed Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              {data.description}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
              <button
                onClick={scrollToContact}
                style={{ backgroundColor: data.primaryColor }}
                className="text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:opacity-95 flex items-center gap-2 cursor-pointer"
              >
                <span>{lang === 'de' ? 'Kostenlose Potenzialanalyse anfordern' : lang === 'en' ? 'Get Free Growth Audit' : 'Ücretsiz Analiz Al'}</span>
                <ArrowUpRight className="h-5 w-5" />
              </button>

              <a
                href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20möchte%20Informationen%20über%20Ihre%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20would%20like%20information%20about%20your%20services.' : 'Merhaba,%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-50 text-emerald-800 border border-emerald-200/90 hover:bg-emerald-100/90 font-bold text-base px-7 py-4 rounded-2xl shadow-sm hover:shadow transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
              >
                <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* High-Contrast Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {data.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 md:p-7 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-between text-center relative overflow-hidden group"
                >
                  {/* Subtle top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                    style={{ backgroundColor: data.primaryColor }}
                  ></div>

                  <div className="inline-flex items-center space-x-1.5 bg-slate-50 border border-slate-200/70 px-3 py-1 rounded-full mb-3 shadow-2xs">
                    <TrendingUp className="h-3.5 w-3.5" style={{ color: data.primaryColor }} />
                    <span className="text-[11px] font-bold text-slate-700">{stat.trend}</span>
                  </div>

                  <p className="text-3xl md:text-4xl font-black text-gray-900 mb-1.5 tracking-tight group-hover:scale-105 transition-transform duration-200">
                    {stat.value}
                  </p>

                  <p className="text-xs md:text-sm font-semibold text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Redesigned Modern Glass & Badge UI) */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">
                {lang === 'de' ? 'Umfassendes Leistungsportfolio' : lang === 'en' ? 'Comprehensive Service Portfolio' : 'Kapsamlı Hizmet Portföyü'}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              {lang === 'de' ? (
                <>Spezialisierte <span className="text-[#4285F4]">Google Ads</span> Kampagnenarten</>
              ) : lang === 'en' ? (
                <>Specialized <span className="text-[#4285F4]">Google Ads</span> Campaign Types</>
              ) : (
                <>Uzmanlaşmış <span className="text-[#4285F4]">Google Ads</span> Kampanya Modelleri</>
              )}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {lang === 'de'
                ? 'Jedes Kampagnenformat wird präzise auf Ihre Zielgruppe, Branche und Wachstumsziele abgestimmt.'
                : lang === 'en'
                ? 'Every campaign format is precisely calibrated to your target audience, industry, and revenue goals.'
                : 'Her kampanya formatı hedef kitlenize, sektörünüze ve büyüme hedeflerinize göre hassas şekilde kurgulanır.'}
            </p>
          </div>
          
          <div className={`grid gap-6 md:gap-8 ${
            data.features.length === 4 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
              : data.features.length === 3 || data.features.length === 6 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : data.features.length === 2 
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}>
            {data.features.map((f, i) => {
              const IconComponent = f.icon
              const cardThemes = [
                {
                  color: '#4285F4',
                  gradient: 'from-[#4285F4] to-[#2b75f0]',
                  bgHover: 'hover:border-blue-300 hover:shadow-blue-500/10',
                  badgeBg: 'bg-blue-50 text-[#4285F4] border-blue-200/60',
                  pillBg: 'bg-blue-50/50 hover:bg-blue-50 text-slate-800 border-blue-100/80',
                  focusTag: lang === 'de' ? '🎯 Hohe Kaufabsicht' : lang === 'en' ? '🎯 High Purchase Intent' : '🎯 Yüksek Satın Alma Niyeti'
                },
                {
                  color: '#EA4335',
                  gradient: 'from-[#EA4335] to-[#d93025]',
                  bgHover: 'hover:border-red-300 hover:shadow-red-500/10',
                  badgeBg: 'bg-red-50 text-[#EA4335] border-red-200/60',
                  pillBg: 'bg-red-50/50 hover:bg-red-50 text-slate-800 border-red-100/80',
                  focusTag: lang === 'de' ? '🌐 2M+ Websites Reichweite' : lang === 'en' ? '🌐 2M+ Sites Reach' : '🌐 2M+ Sitede Görünürlük'
                },
                {
                  color: '#FBBC04',
                  gradient: 'from-[#FBBC04] to-[#f59e0b]',
                  bgHover: 'hover:border-amber-300 hover:shadow-amber-500/10',
                  badgeBg: 'bg-amber-50 text-amber-700 border-amber-200/60',
                  pillBg: 'bg-amber-50/50 hover:bg-amber-50 text-slate-800 border-amber-100/80',
                  focusTag: lang === 'de' ? '🛍️ ROAS & E-Commerce Fokus' : lang === 'en' ? '🛍️ ROAS & E-Commerce' : '🛍️ E-Ticaret & Maksimum ROAS'
                },
                {
                  color: '#34A853',
                  gradient: 'from-[#34A853] to-[#1e8e3e]',
                  bgHover: 'hover:border-emerald-300 hover:shadow-emerald-500/10',
                  badgeBg: 'bg-emerald-50 text-[#34A853] border-emerald-200/60',
                  pillBg: 'bg-emerald-50/50 hover:bg-emerald-50 text-slate-800 border-emerald-100/80',
                  focusTag: lang === 'de' ? '🎬 Storytelling & Branding' : lang === 'en' ? '🎬 Storytelling & Reach' : '🎬 Hikaye Anlatımı & Marka'
                },
                {
                  color: '#4285F4',
                  gradient: 'from-[#4285F4] via-[#EA4335] to-[#FBBC04]',
                  bgHover: 'hover:border-indigo-300 hover:shadow-indigo-500/10',
                  badgeBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/60',
                  pillBg: 'bg-indigo-50/50 hover:bg-indigo-50 text-slate-800 border-indigo-100/80',
                  focusTag: lang === 'de' ? '⚡ Google AI & Smart Bidding' : lang === 'en' ? '⚡ Google AI & Multi-Channel' : '⚡ Google Yapay Zekası & Otomasyon'
                },
                {
                  color: '#FF6D00',
                  gradient: 'from-[#FF6D00] to-[#e65100]',
                  bgHover: 'hover:border-orange-300 hover:shadow-orange-500/10',
                  badgeBg: 'bg-orange-50 text-orange-600 border-orange-200/60',
                  pillBg: 'bg-orange-50/50 hover:bg-orange-50 text-slate-800 border-orange-100/80',
                  focusTag: lang === 'de' ? '📍 Google Maps & Regionale Kunden' : lang === 'en' ? '📍 Google Maps & Local Calls' : '📍 Google Haritalar & Yerel Müşteri'
                },
              ]
              const theme = cardThemes[i % cardThemes.length]

              return (
                <div
                  key={i}
                  data-testid={`feature-card-${i}`}
                  className={`group relative bg-white rounded-3xl p-7 md:p-8 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-between overflow-hidden ${theme.bgHover}`}
                >
                  {/* Top Subtle Color Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.gradient}`}></div>

                  <div>
                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br ${theme.gradient} text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]`}
                      >
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>

                      <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs ${theme.badgeBg}`}>
                        {f.subtitle}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#4285F4] transition-colors duration-200">
                      {f.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {f.desc}
                    </p>

                    {/* Feature Items as Clean Pills */}
                    <div className="space-y-2.5 mb-6">
                      {f.items.map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center space-x-3 px-3.5 py-2 rounded-xl border text-xs md:text-sm font-medium transition-colors ${theme.pillBg}`}
                        >
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                            style={{ backgroundColor: theme.color }}
                          >
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Goal / Strategic Focus Tag */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span className="font-semibold text-slate-700">{theme.focusTag}</span>
                    <span className="text-[#4285F4] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {lang === 'de' ? 'Details' : lang === 'en' ? 'Details' : 'İncele'} ➔
                    </span>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Princeton GEO Structured Comparison Table (High-Citability Pricing Model Factor) */}
      {service === 'google-ads' && (
        <section className="py-16 px-4 bg-slate-50/80 border-b border-slate-200/80">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1.5 mb-4 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  {lang === 'de' ? 'Transparente Preismodelle im Vergleich' : lang === 'en' ? 'Pricing Model Comparison' : 'Şeffaf Fiyatlandırma Karşılaştırması'}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                {lang === 'de' ? (
                  <>Google Ads Agentur Kosten: <span className="text-[#4285F4]">Fixpreis vs. Prozent</span> vom Ad Spend</>
                ) : lang === 'en' ? (
                  <>Google Ads Agency Pricing: <span className="text-[#4285F4]">Flat Fee vs. %</span> of Ad Spend</>
                ) : (
                  <>Google Ads Ajans Ücretleri: <span className="text-[#4285F4]">Sabit Fiyat vs. Bütçe</span> Yüzdesi</>
                )}
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {lang === 'de'
                  ? 'Warum zahlen Unternehmen 15% Provision auf ihr eigenes Werbebudget? Ein objektiver Vergleich der 3 gängigen Agentur-Vergütungsmodelle in Deutschland.'
                  : lang === 'en'
                  ? 'Why pay a 15% surcharge on your own ad spend? An objective comparison of the 3 primary agency pricing models in Germany.'
                  : 'Neden kendi reklam bütçeniz üzerinden ajansa %15 komisyon ödeyesiniz? Almanya pazarındaki 3 temel ajans çalışma modelinin karşılaştırması.'}
              </p>
            </div>

            {/* Responsive Structured Table (GEO High Citability - Multilingual) */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100/70 text-xs md:text-sm font-black text-slate-800">
                      <th className="p-4 md:p-5">
                        {lang === 'de' ? 'Vergütungsmodell' : lang === 'en' ? 'Pricing Model' : 'Ücret Modeli'}
                      </th>
                      <th className="p-4 md:p-5">
                        {lang === 'de' ? 'Kostenkontrolle' : lang === 'en' ? 'Cost Predictability' : 'Maliyet Güvencesi'}
                      </th>
                      <th className="p-4 md:p-5">
                        {lang === 'de' ? 'Interessenskonflikt' : lang === 'en' ? 'Conflict of Interest' : 'Çıkar Çatışması'}
                      </th>
                      <th className="p-4 md:p-5">
                        {lang === 'de' ? 'Betreuung & Seniorität' : lang === 'en' ? 'Seniority & Management' : 'Yönetim & Kıdem'}
                      </th>
                      <th className="p-4 md:p-5 text-right">
                        {lang === 'de' ? 'Rentabilität & ROAS' : lang === 'en' ? 'Profitability & ROAS' : 'Kârlılık & ROAS'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs md:text-sm">
                    {/* Salih Maral Flat Fee */}
                    <tr className="bg-blue-50/40 hover:bg-blue-50/70 transition-colors">
                      <td className="p-4 md:p-5 font-bold text-gray-900 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <strong>{lang === 'de' ? 'Salih Maral Fixpreis' : lang === 'en' ? 'Salih Maral Flat Fee' : 'Salih Maral Sabit Fiyat (Fixpreis)'}</strong>
                      </td>
                      <td className="p-4 md:p-5 text-emerald-700 font-semibold">
                        {lang === 'de' ? '🟢 100% Planbar, feste Monatspauschale' : lang === 'en' ? '🟢 100% Predictable, flat monthly retainer' : '🟢 %100 Güvenli, sabit aylık hizmet bedeli'}
                      </td>
                      <td className="p-4 md:p-5 text-emerald-700 font-semibold">
                        {lang === 'de' ? '🟢 Keiner: Fokus rein auf CPA-Senkung & hohen ROAS' : lang === 'en' ? '🟢 None: Strictly focused on lowering CPA & scaling ROAS' : '🟢 Sıfır Çıkar Çatışması: Hedef CPA düşürmek ve ROAS artırmak'}
                      </td>
                      <td className="p-4 md:p-5 text-slate-700">
                        {lang === 'de' ? '17+ Jahre Senior Google Partner direkt' : lang === 'en' ? 'Directly managed by 17+ yr Senior Google Partner' : 'Doğrudan 17+ yıllık Kıdemli Google Partneri'}
                      </td>
                      <td className="p-4 md:p-5 text-right font-black text-emerald-600">
                        {lang === 'de' ? '⭐⭐⭐⭐⭐ Maximaler ROI' : lang === 'en' ? '⭐⭐⭐⭐⭐ Maximum ROI' : '⭐⭐⭐⭐⭐ Maksimum Kârlılık'}
                      </td>
                    </tr>
                    {/* Percentage of Ad Spend */}
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 md:p-5 font-semibold text-gray-800">
                        {lang === 'de' ? 'Prozentual vom Ad Spend (10% – 15%)' : lang === 'en' ? '% of Ad Spend (10% – 15%)' : 'Bütçe Yüzdesi (%10 – %15 Ad Spend)'}
                      </td>
                      <td className="p-4 md:p-5 text-rose-600">
                        {lang === 'de' ? '🔴 Unkalkulierbar: Steigt bei Budgetwachstum' : lang === 'en' ? '🔴 Unpredictable: Cost inflates as budget scales' : '🔴 Belirsiz: Reklam bütçesi arttıkça ajans payı katlanır'}
                      </td>
                      <td className="p-4 md:p-5 text-rose-600">
                        {lang === 'de' ? '🔴 Hoch: Agentur verdient an mehr Ausgaben' : lang === 'en' ? '🔴 High: Agency profits from spending more money' : '🔴 Yüksek: Ajans daha çok harcamanızdan para kazanır'}
                      </td>
                      <td className="p-4 md:p-5 text-slate-600">
                        {lang === 'de' ? 'Oft wechselnde Junior Account Manager' : lang === 'en' ? 'Often passed to rotating junior account managers' : 'Sıklıkla değişen junior stajyer ekipler'}
                      </td>
                      <td className="p-4 md:p-5 text-right text-rose-600 font-semibold">
                        {lang === 'de' ? 'Teuer bei Skalierung' : lang === 'en' ? 'Expensive when scaling' : 'Büyüdükçe Aşırı Pahalı'}
                      </td>
                    </tr>
                    {/* Hourly Rate */}
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 md:p-5 font-semibold text-gray-800">
                        {lang === 'de' ? 'Stundensatz (150 € – 200 € / Std.)' : lang === 'en' ? 'Hourly Billing (150 € – 200 € / hr)' : 'Saatlik Ücret (150 € – 200 € / saat)'}
                      </td>
                      <td className="p-4 md:p-5 text-amber-600">
                        {lang === 'de' ? '🟡 Mäßig: Unvorhersehbare Monatsrechnungen' : lang === 'en' ? '🟡 Moderate: Unforeseen monthly invoice spikes' : '🟡 Zayıf: Ay sonu sürpriz ve kabarık faturalar'}
                      </td>
                      <td className="p-4 md:p-5 text-amber-600">
                        {lang === 'de' ? '🟡 Rechnungsaufwand statt Ergebnisorientierung' : lang === 'en' ? '🟡 Hours-spent focused instead of results-focused' : '🟡 Sonuç yerine harcanan zamana odaklanma'}
                      </td>
                      <td className="p-4 md:p-5 text-slate-600">
                        {lang === 'de' ? 'Je nach Agentur-Auslastung' : lang === 'en' ? 'Depends on agency workload' : 'Ajansın yoğunluğuna göre değişken'}
                      </td>
                      <td className="p-4 md:p-5 text-right text-amber-600 font-semibold">
                        {lang === 'de' ? 'Geringe Planbarkeit' : lang === 'en' ? 'Low predictability' : 'Düşük Planlanabilirlik'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 md:p-5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-3">
                <span>
                  💡 <strong>{lang === 'de' ? 'Fazit für Entscheider:' : lang === 'en' ? 'Key Takeaway:' : 'Yöneticiler İçin Sonuç:'}</strong>{' '}
                  {lang === 'de'
                    ? 'Ein transparentes Fixpreis-Modell schützt Ihr Marketingbudget vor unnötigen Mehrkosten.'
                    : lang === 'en'
                    ? 'A transparent flat-fee model shields your marketing budget from unnecessary agency markups.'
                    : 'Şeffaf ve sabit fiyatlı çalışma modeli, reklam bütçenizi ajans komisyonlarından korur ve doğrudan kârlılığa odaklanır.'}
                </span>
                <span className="font-bold text-[#4285F4]">
                  {lang === 'de' ? 'Geprüfter Princeton GEO Standard 2026' : lang === 'en' ? 'Verified Princeton GEO Standard 2026' : 'Doğrulanmış Princeton GEO Standardı 2026'}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section for All Services (Dynamic Platform Dashboard Mockups & Verified Proof) */}
      {(() => {
        const caseStudiesData = {

          'google-ads': {
            badge: lang === 'de' ? 'Transparente Erfolgsnachweise' : lang === 'en' ? 'Verified Proof of Success' : 'Doğrulanmış Başarı Kanıtları',
            title: lang === 'de' ? <>Echte Ergebnisse aus <span className="text-[#4285F4]">Google Ads</span> Konten</> : lang === 'en' ? <>Real Results from <span className="text-[#4285F4]">Google Ads</span> Accounts</> : <>Gerçek <span className="text-[#4285F4]">Google Ads</span> Hesap Sonuçları</>,
            desc: lang === 'de' ? 'Keine Versprechungen, sondern belegbare Zahlen: Vorher-Nachher-Vergleiche aus von Salih Maral optimierten Kampagnen.' : lang === 'en' ? 'No empty promises, only verified numbers: Before-and-after case studies from campaigns optimized by Salih Maral.' : 'Boş vaatler değil, kanıtlanmış rakamlar: Salih Maral tarafından optimize edilen kampanyalardan öncesi ve sonrası vaka analizleri.',
            accentColor: '#4285F4',
            ctaTitle: lang === 'de' ? 'Möchten Sie ähnliche Ergebnisse für Ihr Google Ads Konto?' : lang === 'en' ? 'Want similar results for your Google Ads account?' : 'Google Ads hesabınızda da benzer sonuçlar elde etmek ister misiniz?',
            ctaDesc: lang === 'de' ? 'Wir prüfen Ihr aktuelles Google Ads Konto und erstellen eine kostenlose Potenzialanalyse.' : lang === 'en' ? 'We review your existing Google Ads account and provide a free growth audit.' : 'Mevcut Google Ads hesabınızı inceliyor ve ücretsiz büyüme potansiyeli analizi sunuyoruz.',
            cards: [
              {
                tag: lang === 'de' ? 'Gesamtübersicht · 80+ Aktive Kampagnen' : lang === 'en' ? 'Master Overview · 80+ Active Campaigns' : 'Genel Özet · 80+ Aktif Kampanya',
                title: lang === 'de' ? '1,74 Mio. Klicks & 208.000 Conversions bei 1,13 Mio. € Budget' : lang === 'en' ? '1.74M Clicks & 208K Conversions across €1.13M budget' : '1,13 Milyon € bütçe ile 1,74 Milyon tıklama ve 208.000 dönüşüm',
                panelHeader: 'Google Ads · Home Overview',
                dateRange: '1. Mai 2016 – 15. Aug 2026',
                boxes: [
                  { label: 'Clicks', value: '1.74m', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'Impressions', value: '150m', bg: 'bg-[#EA4335]', text: 'text-white' },
                  { label: 'Conversions', value: '208k', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'Cost', value: '€1.13m', bg: 'bg-[#34A853]', text: 'text-white' }
                ],
                tagBefore: lang === 'de' ? '● 2. QUARTAL 2016' : lang === 'en' ? '● Q2 2016' : '● 2016 BAŞLANGIÇ',
                descBefore: lang === 'de' ? 'Start der Kampagnen' : lang === 'en' ? 'Campaign Start' : 'Kampanya Başlangıcı',
                tagAfter: lang === 'de' ? '● 3. QUARTAL 2026' : lang === 'en' ? '● Q3 2026' : '● 2026 GÜNCEL',
                descAfter: '1,74M Klicks · 208K Conv.',
                mult1: { val: '1,74M', label: lang === 'de' ? 'Klicks generiert' : lang === 'en' ? 'Clicks Generated' : 'Üretilen Tıklama' },
                mult2: { val: '208K', label: lang === 'de' ? 'Conversions' : lang === 'en' ? 'Conversions' : 'Dönüşüm' }
              },
              {
                tag: lang === 'de' ? 'Letzte 3 Jahre · Zirve Performans' : lang === 'en' ? 'Last 3 Years · Peak Performance' : 'Son 3 Yıl · Zirve Performans',
                title: lang === 'de' ? 'Interaktionsrate auf 64,78% gesteigert (+57,75% Wachstum)' : lang === 'en' ? 'Interaction Rate surged to 64.78% (+57.75% growth)' : 'Etkileşim oranı %64,78\'e yükseldi (+%57,75 büyüme)',
                panelHeader: 'Google Ads · Ads Performance',
                dateRange: '1. Mai 2023 – 15. Aug 2026',
                boxes: [
                  { label: 'Clicks', value: '128.205', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Impr.', value: '40,07M', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'TrueView', value: '19,31M', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'Interaktion', value: '64,78 %', bg: 'bg-[#EA4335]', text: 'text-white' }
                ],
                tagBefore: lang === 'de' ? '● MAI 2023 (START)' : lang === 'en' ? '● MAY 2023' : '● MAYIS 2023',
                descBefore: 'Interaktion: ~7,03%',
                tagAfter: lang === 'de' ? '● 2026 HEUTE' : lang === 'en' ? '● TODAY 2026' : '● 2026 GÜNCEL',
                descAfter: '64,78% Peak-Interaktion',
                mult1: { val: '64,78%', label: 'Interaktionsrate (Peak)' },
                mult2: { val: '+57,75%', label: lang === 'de' ? 'Wachstum' : lang === 'en' ? 'Growth' : 'Artış' }
              },
              {
                tag: lang === 'de' ? 'YouTube & Video-Ads Reichweite' : lang === 'en' ? 'YouTube & Video Ads Reach' : 'YouTube & Video Reklam Erişimi',
                title: lang === 'de' ? '23,12 Mio. TrueView Videoaufrufe bei 124,3 Mio. Impressionen' : lang === 'en' ? '23.12M TrueView Video Views across 124.3M impressions' : '124,3 Milyon gösterim ve 23,12 Milyon TrueView video izlenmesi',
                panelHeader: 'Google Ads · Video & Ads',
                dateRange: '1. Mai 2016 – 15. Aug 2026',
                boxes: [
                  { label: 'Clicks', value: '1.153.968', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Impr.', value: '124,3M', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'TrueView', value: '23,12M', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'Cost', value: '856.708 €', bg: 'bg-slate-800', text: 'text-white' }
                ],
                tagBefore: lang === 'de' ? '● REICHWEITEN-AUFBAU' : lang === 'en' ? '● REACH BUILDUP' : '● ERİŞİM OLUŞTURMA',
                descBefore: '124.339.285 Impressionen',
                tagAfter: lang === 'de' ? '● TRUEVIEW VIEWS' : lang === 'en' ? '● TRUEVIEW VIEWS' : '● TRUEVIEW İZLENME',
                descAfter: '23.126.141 Videoaufrufe',
                mult1: { val: '23,12M', label: 'TrueView Video Views' },
                mult2: { val: '124,3M', label: lang === 'de' ? 'Gesamtreichweite (Impr.)' : lang === 'en' ? 'Total Reach (Impr.)' : 'Toplam Gösterim' }
              },
              {
                tag: lang === 'de' ? '720 Kampagnen · Skalierungserfahrung' : lang === 'en' ? '720 Campaigns · Scaling Experience' : '720 Kampanya · Ölçekleme Deneyimi',
                title: lang === 'de' ? '720 Kampagnen mit 26,18% durchschnittlicher Interaktionsrate' : lang === 'en' ? '720 campaigns with 26.18% average interaction rate' : '720 kampanya ve %26,18 ortalama etkileşim oranı',
                panelHeader: 'Google Ads · All Campaigns (720)',
                dateRange: '10 Jahre Track-Record',
                boxes: [
                  { label: 'Clicks', value: '1.153.968', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Impr.', value: '124,3M', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'TrueView', value: '23,12M', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'Interaktion', value: '26,18 %', bg: 'bg-[#EA4335]', text: 'text-white' }
                ],
                tagBefore: lang === 'de' ? '● KAMPAGNEN-VIELFALT' : lang === 'en' ? '● CAMPAIGN SCALE' : '● KAMPANYA ÖLÇEĞİ',
                descBefore: '720 Kampagnen verwaltet',
                tagAfter: lang === 'de' ? '● Ø INTERAKTIONSRATE' : lang === 'en' ? '● AVG. INTERACTION' : '● ORT. ETKİLEŞİM',
                descAfter: '26,18% (10 Jahre Schnitt)',
                mult1: { val: '720+', label: lang === 'de' ? 'Kampagnen verwaltet' : lang === 'en' ? 'Campaigns Managed' : 'Yönetilen Kampanya' },
                mult2: { val: '26,18%', label: 'Ø Interaktionsrate' }
              }
            ]
          },

          'youtube-ads': {
            badge: lang === 'de' ? '23,1M+ Verifizierte YouTube Erfolge' : lang === 'en' ? '23.1M+ Verified YouTube Proof' : '23,1M+ Doğrulanmış YouTube Başarısı',
            title: lang === 'de' ? <>Echte Ergebnisse aus <span className="text-[#FF0000]">YouTube Ads</span> Kampagnen</> : lang === 'en' ? <>Real Results from <span className="text-[#FF0000]">YouTube Ads</span> Campaigns</> : <>Gerçek <span className="text-[#FF0000]">YouTube Ads</span> Kampanya Sonuçları</>,
            desc: lang === 'de' ? '720+ Kampagnen für Musiker, E-Commerce und Marken. 100% echte Menschen, extrem niedrige CPVs und Spitzen-Retention.' : lang === 'en' ? '720+ campaigns for artists, e-commerce, and brands. 100% human audiences, ultra-low CPVs, and peak retention.' : 'Sanatçılar, e-ticaret ve markalar için 720+ kampanya. %100 gerçek izleyiciler, düşük CPV ve yüksek izleme oranları.',
            accentColor: '#FF0000',
            ctaTitle: lang === 'de' ? 'Möchten Sie Millionen echte YouTube-Aufrufe generieren?' : lang === 'en' ? 'Want millions of real YouTube views for your videos?' : 'Videolarınız için milyonlarca gerçek YouTube izlenmesi ister misiniz?',
            ctaDesc: lang === 'de' ? 'Wir erstellen eine maßgeschneiderte YouTube Ads & Shorts Strategie für Ihren Kanal oder Musikclip.' : lang === 'en' ? 'We build a tailored YouTube Ads & Shorts strategy for your channel or music video.' : 'Kanalınız veya klibiniz için özel YouTube Ads & Shorts stratejisi oluşturuyoruz.',
            cards: [
              {
                tag: lang === 'de' ? 'Gesamtreichweite · 720+ Kampagnen' : lang === 'en' ? 'Total Reach · 720+ Campaigns' : 'Toplam Erişim · 720+ Kampanya',
                title: lang === 'de' ? '23,12 Mio. TrueView Aufrufe bei 124,3 Mio. Impressionen' : lang === 'en' ? '23.12M TrueView Views across 124.3M impressions' : '124,3 Milyon gösterim ve 23,12 Milyon TrueView izlenmesi',
                panelHeader: 'Google Ads · YouTube Master',
                dateRange: '1. Mai 2016 – 15. Aug 2026',
                boxes: [
                  { label: 'Clicks', value: '1.153.968', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Impr.', value: '124,3M', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'TrueView', value: '23,12M', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'Interaktion', value: '18,60 %', bg: 'bg-[#EA4335]', text: 'text-white' }
                ],
                tagBefore: lang === 'de' ? '● START 2016' : lang === 'en' ? '● LAUNCH 2016' : '● 2016 BAŞLANGIÇ',
                descBefore: 'Erste Video-Tests',
                tagAfter: lang === 'de' ? '● 2026 STATUS' : lang === 'en' ? '● 2026 STATUS' : '● 2026 GÜNCEL',
                descAfter: '23,12M Aufrufe Skalierung',
                mult1: { val: '23,12M', label: lang === 'de' ? 'TrueView Views' : lang === 'en' ? 'TrueView Views' : 'TrueView İzlenme' },
                mult2: { val: '720+', label: lang === 'de' ? 'Kampagnen' : lang === 'en' ? 'Campaigns' : 'Kampanya' }
              },
              {
                tag: lang === 'de' ? 'Spitzen-Interaktion · Musik & Künstler' : lang === 'en' ? 'Peak Retention · Music & Artists' : 'Zirve Etkileşim · Müzik & Sanatçı',
                title: lang === 'de' ? '64,78% View-Through Rate bei 19,31 Mio. Video-Aufrufen' : lang === 'en' ? '64.78% View-Through Rate with 19.31M Video Views' : '%64,78 İzleme Oranı ile 19,31 Milyon Video İzlenmesi',
                panelHeader: 'Google Ads · Video Engagement',
                dateRange: '1. Mai 2023 – 15. Aug 2026',
                boxes: [
                  { label: 'Clicks', value: '128.205', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Impr.', value: '40,07M', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'TrueView', value: '19,31M', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'Interaktion', value: '64,78 %', bg: 'bg-[#EA4335]', text: 'text-white' }
                ],
                tagBefore: lang === 'de' ? '● STANDARD CPV' : lang === 'en' ? '● STANDARD CPV' : '● STANDART CPV',
                descBefore: 'Interaktion: ~12%',
                tagAfter: lang === 'de' ? '● 64,78% PEAK' : lang === 'en' ? '● 64.78% PEAK' : '● %64,78 ZİRVE',
                descAfter: '19,31M Aufrufe',
                mult1: { val: '64,78%', label: 'Interaktionsrate (Peak)' },
                mult2: { val: '0,01 €', label: 'Optimale CPV' }
              }
            ]
          },
          'meta-ads': {
            badge: 'Meta Ads Manager · Facebook & Instagram',
            title: lang === 'de' ? <>Verifizierte Ergebnisse aus <span className="text-[#1877F2]">Meta Ads</span> Kampagnen</> : lang === 'en' ? <>Verified Results from <span className="text-[#1877F2]">Meta Ads</span> Campaigns</> : <>Doğrulanmış <span className="text-[#1877F2]">Meta Ads</span> Kampanya Sonuçları</>,
            desc: lang === 'de' ? 'Advantage+ Shopping, Instagram Reels Creatives und CAPI Server-Side Tracking: Skalierte ROAS-Erfolge unserer Kunden.' : lang === 'en' ? 'Advantage+ Shopping, Instagram Reels Creatives, and CAPI Server-Side Tracking: Scaled ROAS results for our clients.' : 'Advantage+ Alışveriş, Instagram Reels Kreatifleri ve CAPI Sunucu Taraflı Takip ile ölçeklenen ROAS başarıları.',
            accentColor: '#1877F2',
            ctaTitle: lang === 'de' ? 'Möchten Sie Ihren Meta Ads ROAS maximieren?' : lang === 'en' ? 'Want to maximize your Meta Ads ROAS?' : 'Meta Ads ROAS oranınızı maksimize etmek ister misiniz?',
            ctaDesc: lang === 'de' ? 'Wir auditieren Ihr Meta Werbekonto, Ihre Pixel/CAPI-Integration und Ihre Creative-Strategie kostenlos.' : lang === 'en' ? 'We audit your Meta ad account, Pixel/CAPI setup, and creative strategy for free.' : 'Meta reklam hesabınızı, Pixel/CAPI kurulumunuzu ve kreatif stratejinizi ücretsiz analiz ediyoruz.',
            cards: [
              {
                tag: lang === 'de' ? 'E-Commerce Skalierung · Advantage+' : lang === 'en' ? 'E-Commerce Scaling · Advantage+' : 'E-Ticaret Ölçekleme · Advantage+',
                title: lang === 'de' ? 'Advantage+ Shopping: Von 1,4x auf 4,8x ROAS bei 1.500 € Tagesbudget' : lang === 'en' ? 'Advantage+ Shopping: From 1.4x to 4.8x ROAS at €1,500 daily spend' : 'Advantage+ Alışveriş: Günlük 1.500 € bütçede 1,4x\'ten 4,8x ROAS\'a yükseliş',
                panelHeader: 'Meta Ads · Advantage+ Shopping Campaign',
                dateRange: 'Letzte 6 Monate',
                boxes: [
                  { label: 'Amount Spent', value: '45.200 €', bg: 'bg-[#1877F2]', text: 'text-white' },
                  { label: 'Purchases', value: '1.420', bg: 'bg-[#E4405F]', text: 'text-white' },
                  { label: 'Purchase ROAS', value: '4.82x', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'CPA', value: '31,80 €', bg: 'bg-slate-800', text: 'text-white' }
                ],
                tagBefore: '● VORHER (START)',
                descBefore: 'ROAS: ~1,4x · CPA 84 €',
                tagAfter: '● NACHHER (OPTIMIERT)',
                descAfter: '4,82x ROAS · 1.420 Käufe',
                mult1: { val: '4,82x', label: 'Purchase ROAS' },
                mult2: { val: '-62%', label: lang === 'de' ? 'CPA Reduzierung' : lang === 'en' ? 'CPA Reduction' : 'CPA Düşüşü' }
              },
              {
                tag: lang === 'de' ? 'B2B & Dienstleister · Instant Forms' : lang === 'en' ? 'B2B Lead Gen · Instant Forms' : 'B2B & Hizmet · Hızlı Formlar',
                title: lang === 'de' ? '450+ qualifizierte B2B-Leads/Monat bei 9,40 € Kosten pro Lead' : lang === 'en' ? '450+ qualified B2B leads/mo at €9.40 cost per lead' : 'Aylık 450+ nitelikli B2B müşteri talebi ve 9,40 € maliyet',
                panelHeader: 'Meta Ads · On-Facebook Lead Gen',
                dateRange: 'Q1-Q2 2026',
                boxes: [
                  { label: 'Leads', value: '2.740', bg: 'bg-[#1877F2]', text: 'text-white' },
                  { label: 'Cost / Lead', value: '9,40 €', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Lead Quality', value: '88,4%', bg: 'bg-[#833AB4]', text: 'text-white' },
                  { label: 'Impressions', value: '1,85M', bg: 'bg-[#E4405F]', text: 'text-white' }
                ],
                tagBefore: '● STARTPHASE',
                descBefore: 'Lead-Kosten: 28,50 €',
                tagAfter: '● INSTANT FORMS + REELS',
                descAfter: '9,40 € CPL · 2.740 Leads',
                mult1: { val: '2.740', label: lang === 'de' ? 'Leads generiert' : lang === 'en' ? 'Leads Generated' : 'Müşteri Talebi' },
                mult2: { val: '9,40 €', label: 'Ø Cost per Lead' }
              },
              {
                tag: lang === 'de' ? 'Instagram Reels · Creative Framework' : lang === 'en' ? 'Instagram Reels · Creative Framework' : 'Instagram Reels · Kreatif Kurgu',
                title: lang === 'de' ? '3,2 Mio. Videoaufrufe und 4,2x Engagement-Rate durch Hook-Testing' : lang === 'en' ? '3.2M video views and 4.2x engagement rate via Hook testing' : 'Hook testleriyle 3,2 Milyon video izlenmesi ve 4,2x etkileşim',
                panelHeader: 'Instagram Ads · Reels Placement',
                dateRange: '90 Tage Skalierung',
                boxes: [
                  { label: 'ThruPlays', value: '1.850.000', bg: 'bg-[#E4405F]', text: 'text-white' },
                  { label: 'Hook Rate (3s)', value: '42,6%', bg: 'bg-[#833AB4]', text: 'text-white' },
                  { label: 'Reach', value: '3,2M', bg: 'bg-[#1877F2]', text: 'text-white' },
                  { label: 'CTR (Link)', value: '3,84%', bg: 'bg-[#34A853]', text: 'text-white' }
                ],
                tagBefore: '● STATISCHE BILDER',
                descBefore: 'CTR: ~0,8% · Hook 12%',
                tagAfter: '● REELS HOOK FRAMEWORK',
                descAfter: 'CTR: 3,84% · Hook 42,6%',
                mult1: { val: '3,2M', label: lang === 'de' ? 'Reichweite (Accounts)' : lang === 'en' ? 'Accounts Reached' : 'Erişilen Hesap' },
                mult2: { val: '42,6%', label: '3-Sec Hook Rate' }
              },
              {
                tag: lang === 'de' ? 'CAPI & Server-Side Tracking' : lang === 'en' ? 'CAPI & Server-Side Tracking' : 'CAPI & Sunucu Takibi',
                title: lang === 'de' ? '92%+ Event Match Score durch CAPI — 28% mehr getrackte Käufe' : lang === 'en' ? '92%+ Event Match Score via CAPI — 28% more tracked purchases' : 'CAPI ile %92+ Event Match skoru — %28 daha fazla yakalanan dönüşüm',
                panelHeader: 'Meta Events Manager · CAPI Gateway',
                dateRange: 'Server-Side Setup',
                boxes: [
                  { label: 'Match Score', value: '9,2 / 10', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Data Recovery', value: '+28%', bg: 'bg-[#1877F2]', text: 'text-white' },
                  { label: 'Pixel Match', value: '100%', bg: 'bg-[#833AB4]', text: 'text-white' },
                  { label: 'ROAS Lift', value: '+35%', bg: 'bg-[#E4405F]', text: 'text-white' }
                ],
                tagBefore: '● NUR BROWSER PIXEL',
                descBefore: 'Match Score: 4.8 / 10',
                tagAfter: '● SERVER CAPI GATEWAY',
                descAfter: 'Match Score: 9.2 / 10',
                mult1: { val: '9,2/10', label: 'Event Match Score' },
                mult2: { val: '+28%', label: lang === 'de' ? 'Mehr Käufe getrackt' : lang === 'en' ? 'More Purchases Tracked' : 'Fazla Yakalanan Satış' }
              }
            ]
          },

          'tiktok-ads': {
            badge: 'TikTok Ads Manager · TikTok Shop & Spark Ads',
            title: lang === 'de' ? <>Verifizierte Ergebnisse aus <span className="text-[#FE2C55]">TikTok Ads</span> Kampagnen</> : lang === 'en' ? <>Verified Results from <span className="text-[#FE2C55]">TikTok Ads</span> Campaigns</> : <>Doğrulanmış <span className="text-[#FE2C55]">TikTok Ads</span> Kampanya Sonuçları</>,
            desc: lang === 'de' ? 'Spark Ads, Creator UGC und TikTok Shop GMV Skalierung: Maximale virale Reichweite zu unschlagbaren CPM-Kosten.' : lang === 'en' ? 'Spark Ads, Creator UGC, and TikTok Shop GMV scaling: Maximum viral reach with unbeatable CPM costs.' : 'Spark Ads, İçerik Üretici UGC ve TikTok Shop satışları: Rakipsiz CPM maliyetleriyle maksimum viral etki.',
            accentColor: '#FE2C55',
            ctaTitle: lang === 'de' ? 'Bereit für virales TikTok Ads Wachstum?' : lang === 'en' ? 'Ready for viral TikTok Ads growth?' : 'TikTok Ads ile viral büyümeye hazır mısınız?',
            ctaDesc: lang === 'de' ? 'Wir analysieren Ihre Zielgruppe und erstellen ein virales Content- und Kampagnenkonzept für Ihre Marke.' : lang === 'en' ? 'We analyze your target audience and develop a viral campaign framework for your brand.' : 'Hedef kitlenizi analiz ediyor, markanıza özel viral içerik ve kampanya konsepti sunuyoruz.',
            cards: [
              {
                tag: lang === 'de' ? 'E-Commerce & Spark Ads' : lang === 'en' ? 'E-Commerce & Spark Ads' : 'E-Ticaret & Spark Ads',
                title: lang === 'de' ? 'Spark Ads UGC-Boost: 18,4 Mio. Videoaufrufe und 6,2x ROAS' : lang === 'en' ? 'Spark Ads UGC Boost: 18.4M video views and 6.2x ROAS' : 'Spark Ads UGC desteği: 18,4 Milyon video izlenmesi ve 6,2x ROAS',
                panelHeader: 'TikTok Ads · Spark Ads Performance',
                dateRange: 'Letzte 90 Tage',
                boxes: [
                  { label: 'Video Views', value: '18,4M', bg: 'bg-[#FE2C55]', text: 'text-white' },
                  { label: 'Avg. CPM', value: '1,68 €', bg: 'bg-black', text: 'text-white' },
                  { label: 'Purchases', value: '3.890', bg: 'bg-[#25F4EE]', text: 'text-black' },
                  { label: 'ROAS', value: '6,20x', bg: 'bg-[#34A853]', text: 'text-white' }
                ],
                tagBefore: '● TRADITIONELLE ADS',
                descBefore: 'CPM: 6,40 € · ROAS: 1,8x',
                tagAfter: '● SPARK ADS + UGC',
                descAfter: 'CPM: 1,68 € · ROAS: 6,2x',
                mult1: { val: '18,4M', label: 'Video Aufrufe' },
                mult2: { val: '6,20x', label: 'TikTok ROAS' }
              },
              {
                tag: lang === 'de' ? 'TikTok Shop & Social Commerce' : lang === 'en' ? 'TikTok Shop & Social Commerce' : 'TikTok Shop & Sosyal Ticaret',
                title: lang === 'de' ? '124.000 € GMV über In-App TikTok Shop innerhalb von 45 Tagen' : lang === 'en' ? '€124,000 GMV generated via TikTok Shop within 45 days' : '45 günde TikTok Shop üzerinden 124.000 € doğrudan ciro',
                panelHeader: 'TikTok Shop · Seller Center Analytics',
                dateRange: '45 Tage Live',
                boxes: [
                  { label: 'GMV (Umsatz)', value: '124.500 €', bg: 'bg-[#FE2C55]', text: 'text-white' },
                  { label: 'Orders', value: '2.940', bg: 'bg-black', text: 'text-white' },
                  { label: 'Conversion Rate', value: '5,82%', bg: 'bg-[#25F4EE]', text: 'text-black' },
                  { label: 'Affiliate Creators', value: '48', bg: 'bg-[#34A853]', text: 'text-white' }
                ],
                tagBefore: '● WEBSEITE-REDIRECT',
                descBefore: 'Abbruchrate: ~68%',
                tagAfter: '● TIKTOK 1-CLICK SHOP',
                descAfter: '5,82% In-App CR · 124.500 €',
                mult1: { val: '124,5K €', label: 'TikTok Shop GMV' },
                mult2: { val: '5,82%', label: 'In-App Conversion Rate' }
              },
              {
                tag: lang === 'de' ? 'B2C & App-Installs' : lang === 'en' ? 'B2C & App Installs' : 'B2C & Mobil Uygulama Yükleme',
                title: lang === 'de' ? '0,42 € Cost-per-Install (CPI) bei über 85.000 App-Installationen' : lang === 'en' ? '€0.42 Cost-per-Install (CPI) across 85,000+ app installs' : '85.000+ uygulama yüklemesinde 0,42 € yükleme başı maliyet (CPI)',
                panelHeader: 'TikTok Ads · App Promotion Campaign',
                dateRange: 'Q2 2026',
                boxes: [
                  { label: 'Installs', value: '85.400', bg: 'bg-[#FE2C55]', text: 'text-white' },
                  { label: 'Cost / Install', value: '0,42 €', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'CTR', value: '4,12%', bg: 'bg-black', text: 'text-white' },
                  { label: 'Total Reach', value: '4,6M', bg: 'bg-[#25F4EE]', text: 'text-black' }
                ],
                tagBefore: '● GOOGLE / META CPI',
                descBefore: 'CPI: 1,85 €',
                tagAfter: '● TIKTOK SMART+ INSTALLS',
                descAfter: 'CPI: 0,42 € (-77% Ersparnis)',
                mult1: { val: '85.400', label: lang === 'de' ? 'App Downloads' : lang === 'en' ? 'App Downloads' : 'Uygulama İndirme' },
                mult2: { val: '0,42 €', label: 'Ø Cost per Install' }
              },
              {
                tag: lang === 'de' ? 'Branded Hashtag & Viral Loop' : lang === 'en' ? 'Branded Hashtag & Viral Loop' : 'Özel Hashtag & Viral Etki',
                title: lang === 'de' ? '8,4% durchschnittliche Engagement-Rate und 4.200 UGC Video-Uploads' : lang === 'en' ? '8.4% average engagement rate and 4,200 UGC video uploads' : '%8,4 ortalama etkileşim oranı ve 4.200 organik video paylaşımı',
                panelHeader: 'TikTok Ads · Hashtag Challenge Analytics',
                dateRange: 'Viral Challenge',
                boxes: [
                  { label: 'Engagement Rate', value: '8,42%', bg: 'bg-[#FE2C55]', text: 'text-white' },
                  { label: 'UGC Videos', value: '4.210', bg: 'bg-black', text: 'text-white' },
                  { label: 'Total Views', value: '32,4M', bg: 'bg-[#25F4EE]', text: 'text-black' },
                  { label: 'Shares', value: '185.000', bg: 'bg-[#34A853]', text: 'text-white' }
                ],
                tagBefore: '● NORMALE REICHWEITE',
                descBefore: 'Engagement: ~1,8%',
                tagAfter: '● VIRAL HASHTAG CHALLENGE',
                descAfter: 'Engagement: 8,42% · 32M Views',
                mult1: { val: '8,42%', label: 'Engagement Rate' },
                mult2: { val: '32,4M', label: 'Challenge Views' }
              }
            ]
          },

          'x-ads': {
            badge: 'X Ads Analytics · B2B Campaign Manager',
            title: lang === 'de' ? <>Verifizierte Ergebnisse aus <span className="text-slate-900">X (Twitter) Ads</span> Kampagnen</> : lang === 'en' ? <>Verified Results from <span className="text-slate-900">X (Twitter) Ads</span> Campaigns</> : <>Doğrulanmış <span className="text-slate-900">X (Twitter) Ads</span> Kampanya Sonuçları</>,
            desc: lang === 'de' ? 'Gezielte B2B Lead Generierung, Promoted Trends und C-Level Thought Leadership für maximale Marktpräsenz.' : lang === 'en' ? 'Targeted B2B lead generation, Promoted Trends, and C-level thought leadership for maximum market authority.' : 'Hedefli B2B müşteri talebi, Trend Takeover ve C-Level karar verici odaklı kampanyalar.',
            accentColor: '#000000',
            ctaTitle: lang === 'de' ? 'Möchten Sie C-Level Entscheider auf X erreichen?' : lang === 'en' ? 'Want to reach C-level decision-makers on X?' : 'X platformunda üst düzey karar vericilere ulaşmak ister misiniz?',
            ctaDesc: lang === 'de' ? 'Wir erstellen eine maßgeschneiderte B2B-Targeting-Strategie für Ihr Unternehmen.' : lang === 'en' ? 'We build a bespoke B2B targeting and conversation campaign for your company.' : 'İşletmenize özel B2B hedefleme ve sektör trendi stratejisi oluşturuyoruz.',
            cards: [
              {
                tag: lang === 'de' ? 'B2B & SaaS Lead Gen' : lang === 'en' ? 'B2B & SaaS Lead Gen' : 'B2B & SaaS Müşteri Kazanımı',
                title: lang === 'de' ? '14,20 € CPL bei verifizierten Geschäftsführern & IT-Entscheidern' : lang === 'en' ? '€14.20 CPL with verified CEOs & IT leaders' : 'Onaylı CEO ve IT yöneticilerinde 14,20 € potansiyel müşteri maliyeti',
                panelHeader: 'X Ads · B2B Conversation Cards',
                dateRange: 'Q1-Q2 2026',
                boxes: [
                  { label: 'B2B Leads', value: '840', bg: 'bg-black', text: 'text-white' },
                  { label: 'Cost / Lead', value: '14,20 €', bg: 'bg-[#1DA1F2]', text: 'text-white' },
                  { label: 'C-Level Share', value: '74,2%', bg: 'bg-slate-800', text: 'text-white' },
                  { label: 'Conversion Rate', value: '6,4%', bg: 'bg-[#34A853]', text: 'text-white' }
                ],
                tagBefore: '● LINKEDIN VERGLEICH',
                descBefore: 'CPL: 68 € - 95 €',
                tagAfter: '● X KEYWORD & FOLLOWER TARGETING',
                descAfter: 'CPL: 14,20 € · 840 Leads',
                mult1: { val: '14,20 €', label: 'Ø Cost per B2B Lead' },
                mult2: { val: '74,2%', label: 'C-Level Entscheider-Quote' }
              },
              {
                tag: lang === 'de' ? 'Trend Takeover & PR Launch' : lang === 'en' ? 'Trend Takeover & PR Launch' : 'Gündem Takeover & Lansman',
                title: lang === 'de' ? '2,4 Mio. Impressionen in 24 Stunden durch Platz 1 Trend-Sponsoring' : lang === 'en' ? '2.4M impressions in 24 hours via #1 Promoted Trend' : '1 Numara Trend Sponsorluğu ile 24 saatte 2,4 Milyon gösterim',
                panelHeader: 'X Ads · Promoted Trend Takeover',
                dateRange: '24-Stunden Event',
                boxes: [
                  { label: 'Impressions (24h)', value: '2.420.000', bg: 'bg-black', text: 'text-white' },
                  { label: 'Hashtag Tweets', value: '18.900', bg: 'bg-[#1DA1F2]', text: 'text-white' },
                  { label: 'CTR', value: '4,8%', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Brand Lift', value: '+142%', bg: 'bg-slate-800', text: 'text-white' }
                ],
                tagBefore: '● ORGANISCHE REICHWEITE',
                descBefore: 'Impressions: ~45K / Tag',
                tagAfter: '● TREND SPONSORING #1',
                descAfter: '2,42M Impressionen in 24h',
                mult1: { val: '2,42M', label: '24h Impressionen' },
                mult2: { val: '+142%', label: 'Brand Awareness Lift' }
              },
              {
                tag: lang === 'de' ? 'Thought Leadership & Account Growth' : lang === 'en' ? 'Thought Leadership & Account Growth' : 'Fikir Liderliği & Takipçi Büyütme',
                title: lang === 'de' ? '45.000+ neue Branchen-Follower bei 0,38 € Cost per Follower' : lang === 'en' ? '45,000+ new verified followers at €0.38 per follower' : '0,38 € takipçi maliyetiyle 45.000+ yeni nitelikli iş takibi',
                panelHeader: 'X Ads · Follower Growth Campaign',
                dateRange: '6 Monate Laufzeit',
                boxes: [
                  { label: 'New Followers', value: '45.200', bg: 'bg-black', text: 'text-white' },
                  { label: 'Cost / Follower', value: '0,38 €', bg: 'bg-[#1DA1F2]', text: 'text-white' },
                  { label: 'Engagement Rate', value: '8,4%', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Reposts', value: '24.600', bg: 'bg-slate-800', text: 'text-white' }
                ],
                tagBefore: '● ORGANISCHES WACHSTUM',
                descBefore: '+150 Follower / Monat',
                tagAfter: '● THOUGHT LEADER ADS',
                descAfter: '+7.500 Follower / Monat',
                mult1: { val: '+45.200', label: 'Neue Branchen-Follower' },
                mult2: { val: '0,38 €', label: 'Cost per Follower' }
              },
              {
                tag: lang === 'de' ? 'Webinar & Event Registration' : lang === 'en' ? 'Webinar & Event Registration' : 'Webinar & Etkinlik Kaydı',
                title: lang === 'de' ? '3.200+ Anmeldungen für exklusives B2B-Webinar über Pre-Roll Video' : lang === 'en' ? '3,200+ registrations for exclusive B2B webinar via Pre-Roll' : 'Pre-Roll video ile B2B webinara 3.200+ kayıt',
                panelHeader: 'X Ads · Video Website Card',
                dateRange: 'Event Promotion',
                boxes: [
                  { label: 'Registrations', value: '3.240', bg: 'bg-black', text: 'text-white' },
                  { label: 'Cost / Reg.', value: '6,80 €', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Video VTR', value: '54,2%', bg: 'bg-[#1DA1F2]', text: 'text-white' },
                  { label: 'Clicks', value: '48.900', bg: 'bg-slate-800', text: 'text-white' }
                ],
                tagBefore: '● STANDARD DISPLAY',
                descBefore: 'Cost / Reg: 24 €',
                tagAfter: '● PRE-ROLL VIDEO CARD',
                descAfter: 'Cost / Reg: 6,80 € · 3.240 Reg.',
                mult1: { val: '3.240', label: 'Webinar-Anmeldungen' },
                mult2: { val: '6,80 €', label: 'Cost per Registration' }
              }
            ]
          },

          'seo': {
            badge: 'Google Search Console & Core Web Vitals',
            title: lang === 'de' ? <>Verifizierte Ergebnisse aus <span className="text-[#0F9D58]">SEO & GEO</span> Kampagnen</> : lang === 'en' ? <>Verified Results from <span className="text-[#0F9D58]">SEO & GEO</span> Campaigns</> : <>Doğrulanmış <span className="text-[#0F9D58]">SEO & GEO</span> Başarı Sonuçları</>,
            desc: lang === 'de' ? 'Nachhaltiges organisches Wachstum, Top-100/100 Core Web Vitals und AI Search Citability (ChatGPT, Perplexity & Gemini).' : lang === 'en' ? 'Sustainable organic growth, top 100/100 Core Web Vitals, and AI Search Citability (ChatGPT, Perplexity & Gemini).' : 'Kalıcı organik büyüme, 100/100 Core Web Vitals ve Yapay Zeka Arama Alıntılanabilirliği.',
            accentColor: '#0F9D58',
            ctaTitle: lang === 'de' ? 'Möchten Sie auf Seite 1 bei Google stehen?' : lang === 'en' ? 'Want to rank on page 1 of Google?' : 'Google\'da 1. sayfaya yerleşmek ister misiniz?',
            ctaDesc: lang === 'de' ? 'Wir führen ein 200-Punkte Technical SEO Audit und eine AI Search Potenzialanalyse für Ihre Domain durch.' : lang === 'en' ? 'We perform a 200-point Technical SEO Audit and AI Search analysis for your domain.' : 'Siteniz için 200 faktörlü teknik SEO ve yapay zeka arama analizi hazırlıyoruz.',
            cards: [
              {
                tag: lang === 'de' ? 'Organischer Traffic · GSC Audit' : lang === 'en' ? 'Organic Traffic · GSC Audit' : 'Organik Trafik · GSC Analizi',
                title: lang === 'de' ? 'Von 2.100 auf 85.000 monatliche Klicks innerhalb von 9 Monaten' : lang === 'en' ? 'From 2,100 to 85,000 monthly clicks within 9 months' : '9 ay içinde aylık tıklamada 2.100\'den 85.000\'e büyük sıçrama',
                panelHeader: 'Google Search Console · Performance Report',
                dateRange: '9 Monate SEO-Betreuung',
                boxes: [
                  { label: 'Total Clicks', value: '85.400 / Mo', bg: 'bg-[#0F9D58]', text: 'text-white' },
                  { label: 'Impressions', value: '1,24M', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'Avg. CTR', value: '8,42%', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'Avg. Position', value: '#1.8', bg: 'bg-[#EA4335]', text: 'text-white' }
                ],
                tagBefore: '● STARTPHASE (TAG 1)',
                descBefore: 'Klicks: 2.100 / Mo · Pos: #28',
                tagAfter: '● MONAT 9 (HEUTE)',
                descAfter: 'Klicks: 85.400 / Mo · Pos: #1.8',
                mult1: { val: '+4.000%', label: 'Organisches Klick-Wachstum' },
                mult2: { val: '#1.8', label: 'Ø Position (Fokus-Keywords)' }
              },
              {
                tag: lang === 'de' ? 'Princeton GEO & AI Overviews' : lang === 'en' ? 'Princeton GEO & AI Overviews' : 'Princeton GEO & Yapay Zeka Araması',
                title: lang === 'de' ? 'Top-Zitierung in Perplexity, ChatGPT Search und Google AI Overviews' : lang === 'en' ? 'Top citation in Perplexity, ChatGPT Search, and Google AI Overviews' : 'Perplexity, ChatGPT ve Google AI özetlerinde 1 numaralı kaynak gösterimi',
                panelHeader: 'AI Search Visibility & llms.txt Index',
                dateRange: '2026 AI Search Standard',
                boxes: [
                  { label: 'AI Citations', value: '1.420 / Mo', bg: 'bg-[#0F9D58]', text: 'text-white' },
                  { label: 'llms.txt Score', value: '100 / 100', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'Brand Authority', value: '94%', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'AI Referral Visits', value: '4.850', bg: 'bg-slate-800', text: 'text-white' }
                ],
                tagBefore: '● KEINE KI-SICHTBARKEIT',
                descBefore: '0 Erwähnungen in KI-Antworten',
                tagAfter: '● GEO-FIRST STRATEGIE',
                descAfter: '1.420 KI-Zitierungen monatlich',
                mult1: { val: '1.420', label: 'Monatliche KI-Zitate' },
                mult2: { val: '100/100', label: 'llms.txt Standard' }
              },
              {
                tag: lang === 'de' ? 'Lokales SEO · Google Maps 3-Pack' : lang === 'en' ? 'Local SEO · Google Maps 3-Pack' : 'Yerel SEO · Google Haritalar İlk 3',
                title: lang === 'de' ? 'Platz #1 in regionalen Suchanfragen: 340+ monatliche Direktanrufe' : lang === 'en' ? 'Rank #1 in local search: 340+ monthly direct phone calls' : 'Bölgesel aramalarda 1. sıra: Aylık 340+ doğrudan telefon araması',
                panelHeader: 'Google Business Profile · Local Insights',
                dateRange: 'Regionale Kampagne',
                boxes: [
                  { label: 'Phone Calls', value: '342 / Mo', bg: 'bg-[#0F9D58]', text: 'text-white' },
                  { label: 'Direction Requests', value: '890 / Mo', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'Map Views', value: '42.000', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'Local Rank', value: '#1 (Map Pack)', bg: 'bg-[#34A853]', text: 'text-white' }
                ],
                tagBefore: '● MAPS POSITION #14',
                descBefore: 'Anrufe: ~12 / Monat',
                tagAfter: '● MAPS 3-PACK PLATZ #1',
                descAfter: 'Anrufe: 342 / Monat (+2.750%)',
                mult1: { val: '342', label: 'Monatliche Kundenanrufe' },
                mult2: { val: '#1', label: 'Google Maps 3-Pack' }
              },
              {
                tag: lang === 'de' ? 'Core Web Vitals & PageSpeed' : lang === 'en' ? 'Core Web Vitals & PageSpeed' : 'Site Hızı & Core Web Vitals',
                title: lang === 'de' ? '100/100 Google PageSpeed & 0.4s LCP — Maximale Indexierungsgeschwindigkeit' : lang === 'en' ? '100/100 Google PageSpeed & 0.4s LCP — Maximum crawl efficiency' : '100/100 Google PageSpeed ve 0.4s LCP ile anında indekslenme',
                panelHeader: 'Google Lighthouse · Audit Score',
                dateRange: 'Technical Optimization',
                boxes: [
                  { label: 'Performance', value: '100 / 100', bg: 'bg-[#0F9D58]', text: 'text-white' },
                  { label: 'LCP (Ladezeit)', value: '0,4s', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'CLS (Stabilität)', value: '0,00', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'SEO Score', value: '100 / 100', bg: 'bg-[#FBBC04]', text: 'text-gray-900' }
                ],
                tagBefore: '● ALTE WEBSEITE',
                descBefore: 'Lighthouse Score: 38 · LCP: 4.8s',
                tagAfter: '● NEXT.JS HIGH-SPEED SEO',
                descAfter: 'Lighthouse Score: 100 · LCP: 0.4s',
                mult1: { val: '100/100', label: 'Lighthouse Performance' },
                mult2: { val: '0,4s', label: 'LCP Ladezeit' }
              }
            ]
          },

          'yorum-yonetimi': {
            badge: 'Google Business & Trustpilot Reputation Management',
            title: lang === 'de' ? <>Verifizierte Ergebnisse aus <span className="text-[#EA4335]">Bewertungs-</span> Projekten</> : lang === 'en' ? <>Verified Results from <span className="text-[#EA4335]">Review Management</span> Cases</> : <>Doğrulanmış <span className="text-[#EA4335]">İtibar & Yorum</span> Başarıları</>,
            desc: lang === 'de' ? 'Rechtssichere Löschung unberechtigter 1-Stern-Bewertungen und automatisierte Generierung von 5-Sterne-Kundenstimmen.' : lang === 'en' ? 'Legally compliant removal of fake 1-star reviews and automated generation of verified 5-star customer feedback.' : 'Haksız 1 yıldızlı yorumların yasal olarak kaldırılması ve gerçek 5 yıldızlı müşteri yorumlarının artırılması.',
            accentColor: '#EA4335',
            ctaTitle: lang === 'de' ? 'Möchten Sie Ihren Google-Schnitt auf 4.9★ anheben?' : lang === 'en' ? 'Want to elevate your Google rating to 4.9★?' : 'Google puanınızı 4.9★ seviyesine yükseltmek ister misiniz?',
            ctaDesc: lang === 'de' ? 'Wir prüfen Ihre negativen Bewertungen kostenlos auf Richtlinienverstöße und Erfolgsaussichten.' : lang === 'en' ? 'We audit your negative reviews for policy violations and removal feasibility for free.' : 'Olumsuz yorumlarınızı platform kuralları ve kaldırılabilirlik açısından ücretsiz inceliyoruz.',
            cards: [
              {
                tag: lang === 'de' ? 'Reputations-Turnaround' : lang === 'en' ? 'Reputation Turnaround' : 'İtibar Dönüşümü',
                title: lang === 'de' ? 'Von 3.4★ auf 4.9★ Gesamtwertung in 60 Tagen — 18 unfaire Rezensionen entfernt' : lang === 'en' ? 'From 3.4★ to 4.9★ overall rating in 60 days — 18 fake reviews deleted' : '60 günde 3.4★\'tan 4.9★ puana yükseliş — 18 haksız yorum kaldırıldı',
                panelHeader: 'Google Maps · Rating Turnaround Case',
                dateRange: '60 Tage Prozess',
                boxes: [
                  { label: 'Rating Heute', value: '4.9 ★', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Gelöschte Fake-Reviews', value: '18', bg: 'bg-[#EA4335]', text: 'text-white' },
                  { label: 'Neue 5-Sterne Reviews', value: '+64', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'Customer Trust', value: '98%', bg: 'bg-[#4285F4]', text: 'text-white' }
                ],
                tagBefore: '● KRISENSTATUS (TAG 1)',
                descBefore: '3.4 Sterne · 18 Fake-Bewertungen',
                tagAfter: '● REPUTATION WIEDERHERGESTELLT',
                descAfter: '4.9 Sterne · 100% Bereinigt',
                mult1: { val: '4.9 ★', label: 'Neuer Google Schnitt' },
                mult2: { val: '-18', label: 'Fake-Rezensionen gelöscht' }
              },
              {
                tag: lang === 'de' ? 'Wettbewerber-Angriff Abwehr' : lang === 'en' ? 'Competitor Attack Defense' : 'Rakip Saldırısı Engelleme',
                title: lang === 'de' ? 'Organisierter 1-Stern-Angriff (32 Fake-Profile) innerhalb von 7 Tagen neutralisiert' : lang === 'en' ? 'Organized 1-star spam attack (32 fake profiles) neutralized within 7 days' : 'Organize sahte 1 yıldız saldırısı (32 sahte profil) 7 günde tamamen temizlendi',
                panelHeader: 'Google Anti-Spam · Legal Removal Request',
                dateRange: 'Express-Intervention (7 Tage)',
                boxes: [
                  { label: 'Attack Size', value: '32 Reviews', bg: 'bg-[#EA4335]', text: 'text-white' },
                  { label: 'Löschquote', value: '100%', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Bearbeitungszeit', value: '6 Tage', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'Geschützte Umsätze', value: '~45.000 €', bg: 'bg-slate-800', text: 'text-white' }
                ],
                tagBefore: '● SPAM-ATTACKE',
                descBefore: '32 Fake 1-Stern-Bewertungen',
                tagAfter: '● RICHTLINIEN-LÖSCHUNG',
                descAfter: '32 von 32 restlos entfernt',
                mult1: { val: '100%', label: 'Erfolgsquote (Spam)' },
                mult2: { val: '6 Tage', label: 'Löschdauer' }
              },
              {
                tag: lang === 'de' ? 'Automatisierter Review-Funnel' : lang === 'en' ? 'Automated Review Funnel' : 'Otomatik Yorum Toplama Hunisi',
                title: lang === 'de' ? 'QR & SMS Funnel: Monatlich +35 echte 5-Sterne-Bewertungen von zufriedenen Kunden' : lang === 'en' ? 'QR & SMS Funnel: Monthly +35 verified 5-star reviews from real clients' : 'QR & SMS sistemi ile her ay memnun müşterilerden +35 gerçek 5 yıldızlı yorum',
                panelHeader: 'Review Automation · QR Funnel Dashboard',
                dateRange: 'Monatlicher Zuwachs',
                boxes: [
                  { label: 'Monthly 5★ Reviews', value: '+35 / Mo', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Scan to Review Rate', value: '68%', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'Customer Retention', value: '92%', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'Trustpilot Rank', value: '#1 Branche', bg: 'bg-[#EA4335]', text: 'text-white' }
                ],
                tagBefore: '● MANUELLES FRAGEN',
                descBefore: '+2 Bewertungen / Monat',
                tagAfter: '● AUTOMATISIERTER QR-FUNNEL',
                descAfter: '+35 echte 5★ Bewertungen / Mo',
                mult1: { val: '+35', label: 'Echte 5★ Reviews / Monat' },
                mult2: { val: '68%', label: 'Feedback Conversion Rate' }
              },
              {
                tag: lang === 'de' ? 'Umsatzhebel durch Vertrauen' : lang === 'en' ? 'Revenue Lift via Trust' : 'Güven Sayesinde Ciro Artışı',
                title: lang === 'de' ? '+320% mehr Anrufe und Buchungen nach Erreichen der 4.9★ Marke' : lang === 'en' ? '+320% more customer calls and bookings after reaching 4.9★' : '4.9★ puanına ulaştıktan sonra müşteri aramalarında +%320 artış',
                panelHeader: 'Local Business · Conversion Correlation',
                dateRange: 'Vorher/Nachher Vergleich',
                boxes: [
                  { label: 'Customer Inquiries', value: '+320%', bg: 'bg-[#34A853]', text: 'text-white' },
                  { label: 'Average Ticket', value: '+24%', bg: 'bg-[#4285F4]', text: 'text-white' },
                  { label: 'Local Search Clicks', value: '4.800 / Mo', bg: 'bg-[#FBBC04]', text: 'text-gray-900' },
                  { label: 'Recommendation Rate', value: '96%', bg: 'bg-[#EA4335]', text: 'text-white' }
                ],
                tagBefore: '● 3.4 STERNE ZEITRAUM',
                descBefore: 'Anfragen: ~15 / Monat',
                tagAfter: '● 4.9 STERNE REPUTATION',
                descAfter: 'Anfragen: 63 / Monat (+320%)',
                mult1: { val: '+320%', label: 'Mehr Kundenanfragen' },
                mult2: { val: '4.9★', label: 'Dauerhafter Trust-Score' }
              }
            ]
          }
        }

        const cs = caseStudiesData[service] || caseStudiesData['google-ads']

        return (
          <section className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-y border-gray-100">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1.5 mb-4 shadow-sm">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: cs.accentColor }}></span>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: cs.accentColor }}>
                    {cs.badge}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                  {cs.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {cs.desc}
                </p>
              </div>

              {/* 2x2 Grid of Case Study Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                {cs.cards.map((card, idx) => (
                  <div key={idx} className="bg-white rounded-3xl border border-gray-200/80 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group">
                    <div className="p-6 md:p-8 pb-5 border-b border-gray-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
                        {card.tag}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                        {card.title}
                      </h3>
                    </div>

                    <div className="p-5 md:p-6 bg-slate-50/70 flex-grow">
                      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-4 md:p-5 overflow-hidden">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 text-xs text-gray-500">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                            </div>
                            <span className="font-semibold text-gray-800 flex items-center gap-1">
                              {card.panelHeader}
                            </span>
                          </div>
                          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[11px] font-mono">{card.dateRange}</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                          {card.boxes.map((b, bIdx) => (
                            <div key={bIdx} className={`${b.bg} ${b.text} p-2.5 rounded-lg`}>
                              <p className="text-[10px] uppercase font-semibold opacity-90">{b.label}</p>
                              <p className="text-sm md:text-base font-bold">{b.value}</p>
                            </div>
                          ))}
                        </div>

                        <div className="relative bg-slate-50/80 rounded-xl p-3 md:p-4 border border-gray-100">
                          <svg className="w-full h-32 md:h-36 overflow-visible" viewBox="0 0 500 130" fill="none">
                            <line x1="0" y1="20" x2="500" y2="20" stroke="#E2E8F0" strokeDasharray="3 3"/>
                            <line x1="0" y1="60" x2="500" y2="60" stroke="#E2E8F0" strokeDasharray="3 3"/>
                            <line x1="0" y1="100" x2="500" y2="100" stroke="#E2E8F0" strokeDasharray="3 3"/>
                            
                            <path d="M 0 118 Q 120 110 240 70 T 360 35 T 500 12" stroke={cs.accentColor} strokeWidth="3" fill="none"/>
                            <path d="M 0 120 Q 120 115 240 80 T 360 45 T 500 20" stroke="#4285F4" strokeWidth="2.5" fill="none"/>
                            <path d="M 0 122 Q 120 118 240 90 T 360 60 T 500 30" stroke="#34A853" strokeWidth="2" fill="none"/>
                          </svg>

                          <div className="absolute left-6 top-16 md:top-14 bg-white/95 border border-gray-200 text-gray-700 px-2.5 py-1 rounded-lg shadow-sm text-[11px]">
                            <span className="font-bold block text-gray-500 uppercase text-[9px]">{card.tagBefore}</span>
                            <span>{card.descBefore}</span>
                          </div>

                          <div className="absolute right-6 top-2 md:top-2 bg-white/95 border border-blue-300 text-blue-800 px-3 py-1 rounded-lg shadow-md text-[11px]">
                            <span className="font-bold block uppercase text-[9px]" style={{ color: cs.accentColor }}>{card.tagAfter}</span>
                            <span className="font-bold">{card.descAfter}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Blue Multiplier Banner */}
                    <div className="bg-[#4285F4] text-white p-5 md:p-6 grid grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl md:text-3xl font-black text-white">↗</span>
                          <span className="text-3xl md:text-4xl font-black tracking-tight text-white">{card.mult1.val}</span>
                        </div>
                        <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-blue-100 mt-0.5">
                          {card.mult1.label}
                        </span>
                      </div>
                      <div className="flex flex-col border-l border-white/20 pl-4">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl md:text-3xl font-black text-white">↗</span>
                          <span className="text-3xl md:text-4xl font-black tracking-tight text-white">{card.mult2.val}</span>
                        </div>
                        <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-blue-100 mt-0.5">
                          {card.mult2.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* Comprehensive Service & Module Catalog (Oğuz Erol Style Interactive Accordion) */}
      <ServiceDetailModules 
        serviceSlug={service} 
        lang={lang} 
        primaryColor={data.primaryColor || '#4285F4'} 
      />

      {/* Process Section (Connected Modern Step Cards) */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: data.primaryColor }}></span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: data.primaryColor }}>
                {lang === 'de' ? 'Strukturierter Prozess' : lang === 'en' ? 'Structured Workflow' : 'Yapılandırılmış Süreç'}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              {lang === 'de' ? (
                <>In 4 Schritten zu <span style={{ color: data.primaryColor }}>messbarem Erfolg</span></>
              ) : lang === 'en' ? (
                <>In 4 Steps to <span style={{ color: data.primaryColor }}>Measurable Success</span></>
              ) : (
                <>4 Adımda <span style={{ color: data.primaryColor }}>Ölçülebilir Başarı</span></>
              )}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {lang === 'de'
                ? 'Transparente, datengesteuerte und erprobte Prozesse für planbares Wachstum.'
                : lang === 'en'
                ? 'Transparent, data-driven, and proven processes designed for predictable revenue growth.'
                : 'Öngörülebilir büyüme için şeffaf, veri odaklı ve kanıtlanmış süreçler.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {data.process.map((step, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-7 md:p-8 border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Border Glow */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                  style={{ backgroundColor: data.primaryColor }}
                ></div>

                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg text-white shadow-md group-hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: data.primaryColor }}
                    >
                      {step.step}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                      PHASE {i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4285F4] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
                  <span>{lang === 'de' ? 'Schritt ' + (i + 1) + ' von 4' : lang === 'en' ? 'Step ' + (i + 1) + ' of 4' : 'Adım ' + (i + 1) + ' / 4'}</span>
                  <span className="ml-auto">➔</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section (Refined 3D Agency Tiles) */}
      <section className="py-24 px-4 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200/80 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {lang === 'de' ? 'Ihre Wettbewerbsvorteile' : lang === 'en' ? 'Your Competitive Advantages' : 'Rekabet Avantajlarınız'}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              {lang === 'de' ? (
                <>Warum führende Unternehmen <span className="text-slate-900">uns wählen</span></>
              ) : lang === 'en' ? (
                <>Why Leading Brands <span className="text-slate-900">Choose Us</span></>
              ) : (
                <>Neden Lider Markalar <span className="text-slate-900">Bizi Seçiyor?</span></>
              )}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {(data.benefits || []).map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-5 p-7 md:p-8 bg-slate-50/70 hover:bg-white rounded-3xl border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: `${data.secondaryColor}18` }}
                >
                  <CheckCircle className="h-7 w-7 flex-shrink-0" style={{ color: data.secondaryColor }} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (High-Contrast Clean Accordion) */}
      {data.faq && data.faq.length > 0 && (
        <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50/70 to-white border-t border-slate-100">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1.5 mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">
                  {lang === 'de' ? 'Transparenz & Klarheit' : lang === 'en' ? 'Transparency & Clarity' : 'Şeffaflık & Netlik'}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                {lang === 'de' ? 'Häufig gestellte Fragen' : lang === 'en' ? 'Frequently Asked Questions' : 'Sıkça Sorulan Sorular'}
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                {lang === 'de' ? 'Alles, was Sie über unsere Zusammenarbeit, Kosten und Ergebnisse wissen müssen.' : lang === 'en' ? 'Everything you need to know about our collaboration, costs, and timeline.' : 'İş birliğimiz, bütçeler ve süreç hakkında bilmeniz gereken her şey.'}
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-5">
              {data.faq.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl md:rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 md:p-7 cursor-pointer list-none select-none">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 pr-4 group-hover:text-[#4285F4] transition-colors">
                        {item.q}
                      </h3>
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-100 group-open:bg-blue-50 transition-colors"
                      >
                        <svg className="w-5 h-5 text-slate-700 group-open:text-[#4285F4] transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 md:px-7 pb-7 pt-2 border-t border-slate-100">
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                        {item.a}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Optimization Section for Google Ads */}
      {service === 'google-ads' && (
        <section className="py-24 px-4 bg-white border-t border-slate-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-widest mb-3 text-[#4285F4]">
                {lang === 'de' ? 'KONTINUIERLICHE VERBESSERUNG' : lang === 'en' ? 'CONTINUOUS IMPROVEMENT' : 'SÜREKLİ İYİLEŞTİRME'}
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                {lang === 'de' ? 'Wir schalten nicht nur Werbung,' : lang === 'en' ? "We Don't Just Run Ads," : 'Reklamı Açıp Bırakmıyoruz,'}
                <br />
                <span className="text-[#4285F4]">
                  {lang === 'de' ? 'Wir optimieren die Rentabilität.' : lang === 'en' ? 'We Optimize Profitability.' : 'Kârlılığı Optimize Ediyoruz.'}
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                <div key={i} className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center font-bold text-white bg-[#4285F4] shadow-md">
                      <span>{item.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Real Results — Metrics from real Google Ads account */}
            <div className="mt-16 rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl border border-slate-800">
              <div className="px-8 pt-8 pb-4 text-center">
                <p className="text-xs font-bold uppercase tracking-widest mb-1 text-[#4285F4]">
                  {lang === 'de' ? 'ECHTE DATEN AUS UNSEREM GOOGLE ADS KONTO' : lang === 'en' ? 'REAL DATA FROM OUR GOOGLE ADS ACCOUNT' : 'GERÇEK GOOGLE ADS HESAP VERİLERİMİZ'}
                </p>
                <p className="text-xs md:text-sm text-slate-400 mb-6">
                  {lang === 'de' ? 'Mai 2016 – Aug 2026 · 720+ verwaltete Kampagnen' : lang === 'en' ? 'May 2016 – Aug 2026 · 720+ managed campaigns' : 'Mayıs 2016 – Ağustos 2026 · 720\'den fazla yönetilen kampanya'}
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-slate-800">
                {[
                  { value: '1,74M', icon: '🖱️', label: lang === 'de' ? 'Klicks generiert' : lang === 'en' ? 'Clicks generated' : 'Üretilen tıklama', color: '#4285F4' },
                  { value: '150M', icon: '👁️', label: lang === 'de' ? 'Impressionen' : lang === 'en' ? 'Impressions' : 'Gösterim', color: '#EA4335' },
                  { value: '208K', icon: '✅', label: lang === 'de' ? 'Conversions' : lang === 'en' ? 'Conversions' : 'Dönüşüm', color: '#34A853' },
                  { value: '€1,13M', icon: '💰', label: lang === 'de' ? 'Budget verwaltet' : lang === 'en' ? 'Budget managed' : 'Yönetilen bütçe', color: '#FBBC05' },
                  { value: '720+', icon: '🚀', label: lang === 'de' ? 'Kampagnen' : lang === 'en' ? 'Campaigns' : 'Kampanya', color: '#4285F4' },
                  { value: '26%', icon: '⚡', label: lang === 'de' ? 'Ø Interaktionsrate' : lang === 'en' ? 'Avg. interaction rate' : 'Ort. etkileşim oranı', color: '#34A853' },
                ].map((m, i) => (
                  <div key={i} className="bg-slate-900 px-6 py-6 flex flex-col items-center text-center hover:bg-slate-800/80 transition-colors">
                    <span className="text-2xl mb-1">{m.icon}</span>
                    <p className="text-2xl md:text-3xl font-black mb-1" style={{ color: m.color }}>{m.value}</p>
                    <p className="text-xs text-slate-400 font-medium">{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="px-8 py-4 text-center border-t border-slate-800">
                <p className="text-xs text-slate-400 italic">
                  {lang === 'de'
                    ? 'Daten aus dem eigenen Google Ads & Analytics Konto von Salih Maral — keine fiktiven Zahlen.'
                    : lang === 'en'
                    ? "Data from Salih Maral's own Google Ads & Analytics account — no fictional numbers."
                    : 'Salih Maral\'ın kendi Google Ads & Analytics hesabından alınan gerçek veriler — kurgusal rakamlar değil.'}
                </p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Global Final CTA Section (Dark Luxury High-Converting Agency Banner) */}
      <section id="contact-section" className="py-24 px-4 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow ambient background */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: data.primaryColor }}
        ></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="bg-slate-900/90 border border-slate-800/90 rounded-3xl md:rounded-4xl p-8 md:p-14 text-center shadow-2xl backdrop-blur-xl">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">
                {lang === 'de' ? 'Unverbindlich & Kostenlos' : lang === 'en' ? 'No Obligation & 100% Free' : 'Ücretsiz & Taahhütsüz'}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
              {service === 'google-ads'
                ? (lang === 'de'
                    ? 'Kostenlose Google Ads Analyse — in 30 Minuten.'
                    : lang === 'en'
                    ? 'Free Google Ads Analysis — in 30 Minutes.'
                    : 'Ücretsiz Google Ads Analizi — 30 Dakikada.')
                : (lang === 'de' ? 'Bereit für planbares, profitables Wachstum?' : lang === 'en' ? 'Ready for Predictable, Profitable Growth?' : 'Planlı ve Kârlı Büyümeye Hazır mısınız?')}
            </h2>

            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              {service === 'google-ads'
                ? (lang === 'de'
                    ? 'Wir prüfen Ihre Kampagnen kostenlos und zeigen Ihnen genau, wo Ihr Budget verloren geht — und wie Sie es zurückgewinnen. Kein Fachjargon. Keine Verkaufsgespräche. Nur echte Handlungsempfehlungen.'
                    : lang === 'en'
                    ? 'We review your campaigns for free and show you exactly where your budget is being wasted — and how to win it back. No jargon. No sales pitch. Just real, actionable insights.'
                    : 'Kampanyalarınızı ücretsiz inceliyor ve bütçenizin tam olarak nerede heba olduğunu gösteriyoruz — ve bunu nasıl geri kazanabileceğinizi. Teknik jargon yok. Satış konuşması yok. Yalnızca somut öneriler.')
                : (lang === 'de' ? 'Wir analysieren Ihre aktuelle Situation und bieten Ihnen maßgeschneiderte Strategieempfehlungen. Keine Kosten, keine Verpflichtungen.' : lang === 'en' ? 'We analyze your current situation and offer you customized strategy recommendations. No costs, no commitments.' : 'Mevcut durumunuzu analiz ediyor, size özel strateji önerileri sunuyoruz. Hiçbir ücret veya taahhüt yok.')}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <button
                onClick={scrollToContact}
                style={{ backgroundColor: data.primaryColor }}
                className="text-white font-bold text-base px-9 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:opacity-95 flex items-center gap-2 cursor-pointer"
              >
                <span>{lang === 'de' ? 'Kostenlose Analyse anfordern' : lang === 'en' ? 'Get Free Analysis' : 'Ücretsiz Analiz Al'}</span>
                <ArrowUpRight className="h-5 w-5" />
              </button>

              <a
                href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20für%20' + encodeURIComponent(data.title) + '%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20' + encodeURIComponent(data.title) + '%20services.' : 'Merhaba,%20' + encodeURIComponent(data.title) + '%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum.'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2.5 cursor-pointer"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
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
