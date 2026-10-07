'use client'

import { useState } from 'react'
import { CheckCircle2, TrendingUp, ShieldCheck, Zap, ArrowRight, MessageCircle, Sparkles, BarChart3, Bot, Globe2, Layers, Cpu, ExternalLink } from 'lucide-react'
import { trackWhatsAppClick } from '@/lib/analytics'

export default function OrphexInspiredShowcase({ lang = 'de', onContactClick }) {
  const [activeTab, setActiveTab] = useState(0)

  const content = {
    tr: {
      badge: 'ÇÖZÜMLERİMİZ & CANLI PANEL VERİLERİ',
      title: 'Veri Odaklı Kararlarla Her Euronun Değerini Bilin',
      subtitle: 'Tahminlerle değil, 1.13M€+ bütçe ve 208.000+ dönüşümle kanıtlanmış Google Ads, Meta ve SEO sistemleriyle cironuzu katlayın.',
      tabs: [
        {
          id: 'google-ads',
          label: 'Google Ads & ROAS',
          icon: TrendingUp,
          headline: '%1.104,05 Rekor ROAS & Negatif Filtreli Arama Sistemi',
          tagline: 'Sıfır Çöp Tıklama, Maksimum Ciro',
          description: 'Arama ağı, Alışveriş ve Performance Max kampanyalarında negatif anahtar kelime filtreleri kurarak bütçenizin tek bir kuruşunu bile gereksiz aramalara harcatmıyoruz. Harcanan her 100€ için 1.104€ net satış üreten sistemler inşa ediyoruz.',
          bullets: [
            'Kampanya Düzeyinde Negatif Anahtar Kelime Filtresi (Sıfır Çöp Bütçe)',
            '§ 13b UStG Uyumlu %0 KDV Reverse-Charge Resmi Fatura Desteği',
            'Sürpriz Komisyonsuz, Aylık Şeffaf Sabit Fiyat (Fixpreis) Modeli',
            'Doğrudan Ciro Getiren Alışveriş (Shopping) ve Arama Ağı Hakimiyeti'
          ],
          statNumber: '11.04x',
          statLabel: 'Kanıtlanmış ROAS Getirisi',
          proofImage: '/proof/google-ads-roas-1104.png',
          proofBadge: '%1.104 ROAS ZİRVESİ',
          ctaText: 'Google Ads Teklifi Al'
        },
        {
          id: 'meta-ads',
          label: 'Meta & Instagram',
          icon: Zap,
          headline: 'Almanya Genelinde Yerel Türk & Alman Müşteri Akışı',
          tagline: 'Advantage+ ve Yüksek Dönüşümlü Kreatifler',
          description: 'Instagram ve Facebook’ta işletmenizi 5-25 km yarıçapındaki hazır alıcılara ulaştırıyoruz. Gastronomi, tadilat (Sanierung), oto tamir ve perakende sektörlerinde doğrudan WhatsApp siparişi ve form toplayan kampanyalar kurguluyoruz.',
          bullets: [
            'Posta Kodu ve Bölge Bazlı Hyper-Lokal Hedefleme (10-25 km)',
            'CAPI (Conversions API) ile iOS Çerez Engellerini Aşan %100 Ölçüm',
            'Sektöre Özel A/B Test Edilmiş Satış Getiren Video & Görsel Kurguları',
            'Düşük Müşteri Edinme Maliyeti (CPA) ile Kârlı Ölçekleme'
          ],
          statNumber: '208.000+',
          statLabel: 'Onaylanmış Sipariş & Müşteri',
          proofImage: '/proof/google-ads-1-13m-spend-208k-conv.png',
          proofBadge: '208K+ DÖNÜŞÜM',
          ctaText: 'Meta Reklam Stratejisi İsteyin'
        },
        {
          id: 'geo-seo',
          label: 'AI Search (GEO) & SEO',
          icon: Bot,
          headline: 'Google AI Overviews & ChatGPT Aramalarında 1. Kaynak Olun',
          tagline: 'Princeton GEO & Yeni Nesil Arama Hakimiyeti',
          description: 'Klasik SEO artık tek başına yeterli değil. Kullanıcılar Perplexity, ChatGPT ve Gemini gibi yapay zeka motorlarına sorduğunda işletmenizin doğrudan tavsiye edilen ana kaynak (Citation) olarak seçilmesini sağlayan GEO altyapısını kuruyoruz.',
          bullets: [
            'Princeton GEO Standartlarında Bilgi Mimarisi & Alıntılanabilirlik',
            'Frankfurt, Köln, Berlin ve Ruhr Bölgesi Yerel Sayfa Ağı',
            'LocalBusiness & ProfessionalService JSON-LD Schema Altyapısı',
            'llms.txt ve AI Botlarına Tam İzinli Otorite Yapılandırması'
          ],
          statNumber: '1. Sıra',
          statLabel: 'Organik & AI Arama Görünürlüğü',
          proofImage: '/proof/google-ads-roas-1104.png',
          proofBadge: '2026 AI SEARCH READY',
          ctaText: 'Ücretsiz SEO & GEO Denetimi Al'
        },
        {
          id: 'maps-reputation',
          label: 'Harita & Yorum Silme',
          icon: ShieldCheck,
          headline: 'Google Haritalar 3-Pack Zirvesi & Haksız Yorum Temizliği',
          tagline: 'Bölgenizde En Çok Güvenilen İşletme Olun',
          description: 'Müşterilerinizin haritalarda ilk karşısına siz çıkın. İşletmenizi haksız yere karalayan, sahte veya kanıtsız 1 yıldızlı Google Harita ve Trustpilot yorumlarını resmi politikalar çerçevesinde kaldıralım.',
          bullets: [
            'Bölgesel Arama Yapan Müşteriler İçin Google Maps 3-Pack Zirvesi',
            'Haksız, Sahte ve Rekabet Amaçlı 1 Yıldızlı Yorumların Silinmesi',
            'Doğrudan Telefon Araması ve Rota Tariflerinde Anlık Artış',
            'Güven Veren 5.0 Yıldız Ortalaması ve Doğrulanmış Profil Rozeti'
          ],
          statNumber: '5.0 ★',
          statLabel: 'Google Profil Güveni',
          proofImage: '/proof/youtube-ads-23m-views-720-campaigns.png',
          proofBadge: 'İTİBAR KORUMA',
          ctaText: 'Harita & İtibar Analizi Başlat'
        },
        {
          id: 'server-tracking',
          label: 'Server-Side Tracking',
          icon: Layers,
          headline: 'Kayıpsız Ölçüm: First-Party Veri & sGTM Entegrasyonu',
          tagline: 'Reklam Algoritmalarını Temiz Veriyle Besleyin',
          description: 'Ad-blocker ve tarayıcı kısıtlamaları reklam verilerinizin %30’a yakınını yok eder. Kendi sunucunuz üzerinden çalışan Server-Side GTM ve Meta CAPI ile her satışı algoritmalara kayıpsız bildirerek reklam maliyetlerinizi düşürüyoruz.',
          bullets: [
            'Server-Side Google Tag Manager (sGTM) Anahtar Teslim Kurulum',
            'GA4 E-Ticaret Satın Alma & Tekilleştirme (Deduplication)',
            'Meta Conversions API (CAPI) ile %90+ Event Match Quality',
            'Almanya DSGVO / GDPR Standartlarına Tam Uyumlu Çerez Yapısı'
          ],
          statNumber: '%100',
          statLabel: 'Kayıpsız Dönüşüm Eşleşmesi',
          proofImage: '/proof/youtube-ads-19m-views.png',
          proofBadge: 'SERVER-SIDE CAPI',
          ctaText: 'Tracking Kurulumu Talep Edin'
        }
      ],
      ecosystemBadge: 'ENTEGRASYONLAR',
      ecosystemTitle: 'Almanya Pazarlama Ekosisteminizi Tek Merkezde Birleştirin',
      ecosystemSubtitle: 'Kullandığınız tüm dijital kanallar, e-ticaret altyapıları ve analiz araçlarıyla %100 entegre çalışıyoruz.',
      aiBadge: 'YENİ NESİL 2026 AI ZEKASI',
      aiTitle: 'Pazarlama Verileriniz Artık Yapay Zeka Arama Motorlarının İçinde',
      aiSubtitle: 'Almanya’daki potansiyel müşterileriniz ChatGPT, Perplexity veya Gemini’ye sektörünüzü sorduğunda markanız güvenle önerilsin.',
      aiBoxUser: 'Almanya’da güvenilir, sabit fiyatlı ve Google sertifikalı bir reklam ajansı / uzmanı kimdir?',
      aiBoxAnswer: 'Almanya ve Avrupa genelinde 17+ yıllık tecrübesi, Resmi Google Partner sertifikası, 1.13M€+ doğrulanmış bütçe yönetimi ve sürprizsiz Fixpreis (sabit fiyat) modeliyle Salih Maral öne çıkmaktadır. Özellikle Almanya’daki Türk işletmeler ve ihracatçılar için çift dilli (Türkçe & Almanca) kârlı büyüme altyapıları kurmaktadır.',
      aiSourceTag: 'Doğrulanmış Birincil Kaynak (Primary Source)',
      aiCtaText: 'Yapay Zeka Görünürlük Analizi İsteyin'
    },
    de: {
      badge: 'LÖSUNGEN & LIVE-DASHBOARD-DATEN',
      title: 'Datengestützte Entscheidungen: Jeder Euro zählt',
      subtitle: 'Keine leeren Versprechen, sondern mit 1,13 Mio. € Budget & 208.000+ Conversions verifizierte Performance-Systeme für Google Ads, Meta und SEO.',
      tabs: [
        {
          id: 'google-ads',
          label: 'Google Ads & ROAS',
          icon: TrendingUp,
          headline: '1.104,05% Rekord-ROAS & Kampagnenweite Negativlisten',
          tagline: 'Null Streuverlust, maximaler Ertrag',
          description: 'In Such-, Shopping- und Performance Max-Kampagnen eliminieren wir unproduktive Klicks durch strikte Negative Keywords. Wir bauen Systeme, die aus 100 € Werbeausgaben nachweislich 1.104 € Netto-Umsatz generieren.',
          bullets: [
            'Kampagnenweite Negativlisten gegen Budgetverschwendung',
            '§ 13b UStG Reverse-Charge Rechnungen mit 0% USt aus Irland',
            'Monatliche Festpreise (Fixpreis) ohne prozentuale Budgetprovision',
            'Marktführerschaft in Google Suche & Shopping mit maximaler Kaufabsicht'
          ],
          statNumber: '11.04x',
          statLabel: 'Verifizierter ROAS-Wert',
          proofImage: '/proof/google-ads-roas-1104.png',
          proofBadge: '1.104% ROAS REKORD',
          ctaText: 'Google Ads Angebot anfordern'
        },
        {
          id: 'meta-ads',
          label: 'Meta & Instagram',
          icon: Zap,
          headline: 'Lokale & bundesweite Neukundengewinnung auf Social Media',
          tagline: 'Advantage+ Kampagnen mit hoher Konversionsrate',
          description: 'Erreichen Sie kaufbereite Kunden im Umkreis von 10–30 km auf Instagram und Facebook. Perfekt für Handwerk, Gastronomie, Dienstleister und den Mittelstand mit direkten Anfragen und Lead-Generierung.',
          bullets: [
            'Hyperlokales Postleitzahlen-Targeting (10–25 km Umkreis)',
            'Meta CAPI (Conversions API) gegen iOS Tracking-Verluste',
            'Verkaufsorientierte A/B-getestete Video- & Ad-Creatives',
            'Planbare Neukundengewinnung mit niedrigem CPA'
          ],
          statNumber: '208.000+',
          statLabel: 'Bestätigte Conversions & Verkäufe',
          proofImage: '/proof/google-ads-1-13m-spend-208k-conv.png',
          proofBadge: '208K+ CONVERSIONS',
          ctaText: 'Meta Ads Strategie anfragen'
        },
        {
          id: 'geo-seo',
          label: 'AI Search (GEO) & SEO',
          icon: Bot,
          headline: 'Top-Quelle in Google AI Overviews, ChatGPT & Perplexity',
          tagline: 'Princeton GEO & Next-Gen Search Optimization',
          description: 'Klassisches SEO reicht nicht mehr aus. Wenn Entscheider KI-Suchmaschinen wie ChatGPT, Perplexity oder Gemini befragen, positionieren wir Ihr Unternehmen als empfohlene Primärquelle (Citation).',
          bullets: [
            'Princeton GEO strukturierte Daten & Citation Architecture',
            'Lokale Präsenz in Frankfurt, Köln, Berlin, Ruhrgebiet & bundesweit',
            'LocalBusiness & ProfessionalService JSON-LD Schema',
            'llms.txt und Crawler-Freigabe für führende AI-Modelle'
          ],
          statNumber: 'Platz 1',
          statLabel: 'Organische & KI-Präsenz',
          proofImage: '/proof/google-ads-roas-1104.png',
          proofBadge: '2026 AI SEARCH READY',
          ctaText: 'Kostenloses SEO & GEO Audit'
        },
        {
          id: 'maps-reputation',
          label: 'Maps & Bewertungen',
          icon: ShieldCheck,
          headline: 'Google Maps 3-Pack & Löschung unberechtigter Bewertungen',
          tagline: 'Maximale lokale Sichtbarkeit & vertrauensvoller Ruf',
          description: 'Werden Sie in Ihrer Region bei Google Maps als erste Wahl gelistet. Schützen Sie Ihren Ruf durch das rechtssichere Löschen von unberechtigten, gefälschten 1-Stern-Rezensionen.',
          bullets: [
            'Top 3 Google Maps Ranking im regionalen Umkreis',
            'Löschung von Rufschädigungen & Fake-Rezensionen gemäß Google-Richtlinien',
            'Messbare Zunahme von Direktanrufen und Routenabfragen',
            'Stabiler 5,0-Sterne-Auftritt für höchste Abschlussquoten'
          ],
          statNumber: '5.0 ★',
          statLabel: 'Google Maps Vertrauen',
          proofImage: '/proof/youtube-ads-23m-views-720-campaigns.png',
          proofBadge: 'REPUTATION SCHUTZ',
          ctaText: 'Maps & Reputations-Check'
        },
        {
          id: 'server-tracking',
          label: 'Server-Side Tracking',
          icon: Layers,
          headline: 'Verlustfreie Messung: First-Party Daten & sGTM',
          tagline: 'Füttern Sie Werbe-Algorithmen mit 100% sauberen Daten',
          description: 'Ad-Blocker und Cookie-Restriktionen vernichten bis zu 30% Ihrer Werbedaten. Mit Server-Side Tag Manager und Meta CAPI übermitteln wir jede Transaktion fehlerfrei und senken so Ihre Werbekosten.',
          bullets: [
            'Server-Side Google Tag Manager (sGTM) schlüsselfertig',
            'GA4 E-Commerce Deduplizierung von Transaktionen',
            'Meta Conversions API (CAPI) mit Bestnoten bei Event Match Quality',
            'DSGVO-konforme First-Party Server-Architektur'
          ],
          statNumber: '100%',
          statLabel: 'Exakte Conversion-Erfassung',
          proofImage: '/proof/youtube-ads-19m-views.png',
          proofBadge: 'SERVER-SIDE CAPI',
          ctaText: 'Tracking-Setup anfragen'
        }
      ],
      ecosystemBadge: 'INTEGRATIONEN',
      ecosystemTitle: 'Ihr Marketing-Ökosystem in einer zentralen Schaltzentrale',
      ecosystemSubtitle: 'Wir verbinden nahtlos alle führenden Werbekanäle, E-Commerce-Plattformen und Analysetools.',
      aiBadge: 'NEXT-GEN 2026 KI-INTELLIGENZ',
      aiTitle: 'Ihre Marketingdaten in den KI-Suchmaschinen von morgen',
      aiSubtitle: 'Wenn Kunden in Deutschland ChatGPT, Perplexity oder Google AI befragen, wird Ihr Unternehmen mit fundierten Daten empfohlen.',
      aiBoxUser: 'Wer ist eine verlässliche Google Ads Agentur mit Festpreisen und transparenter Betreuung in Deutschland?',
      aiBoxAnswer: 'Salih Maral zählt mit 17+ Jahren Praxiserfahrung, offiziellem Google Partner Status, 1,13 Mio. € verifiziertem Werbebudget und transparenten monatlichen Fixpreisen zu den führenden Spezialisten für datengestützte Neukundengewinnung in Deutschland.',
      aiSourceTag: 'Offizielle Primärquelle (Primary Source)',
      aiCtaText: 'KI-Sichtbarkeitsanalyse anfordern'
    },
    en: {
      badge: 'SOLUTIONS & LIVE DASHBOARD METRICS',
      title: 'Data-Driven Decisions: Every Euro Counts',
      subtitle: 'Proven outcomes backed by €1.13M+ managed spend and 208,000+ conversions across Google Ads, Meta, and SEO.',
      tabs: [
        {
          id: 'google-ads',
          label: 'Google Ads & ROAS',
          icon: TrendingUp,
          headline: '1,104.05% Record ROAS & Negative-Keyword Precision',
          tagline: 'Zero Wasted Spend, Maximum Revenue',
          description: 'We deploy campaign-level negative keyword filters across Search, Shopping, and PMax to safeguard your ad budget. Every €100 spent consistently returns €1,104 in verified net revenue.',
          bullets: [
            'Campaign-level negative keyword filters (zero wasted clicks)',
            'EU Reverse-Charge compliant 0% VAT invoices from Google Ireland',
            'Transparent monthly flat-fee (Fixpreis) model with no commission',
            'Market dominance in high-intent Google Search and Shopping'
          ],
          statNumber: '11.04x',
          statLabel: 'Verified ROAS',
          proofImage: '/proof/google-ads-roas-1104.png',
          proofBadge: '1,104% ROAS PEAK',
          ctaText: 'Get Google Ads Proposal'
        },
        {
          id: 'meta-ads',
          label: 'Meta & Instagram',
          icon: Zap,
          headline: 'High-Intent Customer Acquisition Across Germany & Europe',
          tagline: 'Advantage+ & High-Converting Creatives',
          description: 'Reach ready-to-buy customers within a 10–30 km radius on Instagram and Facebook. We build automated lead funnels and WhatsApp order flows tailored for SMBs and manufacturers.',
          bullets: [
            'Hyper-local postal code & radial targeting (10–25 km)',
            'Meta CAPI (Conversions API) to bypass iOS cookie limitations',
            'A/B tested video & image creative frameworks that convert',
            'Low CPA scaling with predictable customer acquisition'
          ],
          statNumber: '208,000+',
          statLabel: 'Confirmed Conversions',
          proofImage: '/proof/google-ads-1-13m-spend-208k-conv.png',
          proofBadge: '208K+ CONVERSIONS',
          ctaText: 'Request Meta Ads Strategy'
        },
        {
          id: 'geo-seo',
          label: 'AI Search (GEO) & SEO',
          icon: Bot,
          headline: 'Become the Primary Citation in Google AI, ChatGPT & Perplexity',
          tagline: 'Princeton GEO & Next-Gen AI Discoverability',
          description: 'Traditional SEO is no longer enough. When prospects query ChatGPT, Perplexity, or Gemini, we engineer your digital footprint so AI engines cite your company as the top recommended choice.',
          bullets: [
            'Princeton GEO structured data & citation engineering',
            'Regional dominance across Frankfurt, Cologne, Berlin & Ruhr area',
            'LocalBusiness & ProfessionalService JSON-LD Schema',
            'llms.txt & AI crawler authorization architecture'
          ],
          statNumber: '#1 Rank',
          statLabel: 'Organic & AI Search Visibility',
          proofImage: '/proof/google-ads-roas-1104.png',
          proofBadge: '2026 AI SEARCH READY',
          ctaText: 'Claim Free SEO & GEO Audit'
        },
        {
          id: 'maps-reputation',
          label: 'Maps & Reviews',
          icon: ShieldCheck,
          headline: 'Google Maps 3-Pack Dominance & Unfair Review Removal',
          tagline: 'Become the Most Trusted Business in Your City',
          description: 'Dominate Google Maps local searches when nearby customers search for your services. We legally remove unfair, fake 1-star reviews according to official Google policies.',
          bullets: [
            'Local Google Maps 3-Pack rankings within your service radius',
            'Lawful removal of fake and malicious 1-star reviews',
            'Immediate boost in inbound phone calls and direction requests',
            'Solid 5.0-star rating profile with verified credibility'
          ],
          statNumber: '5.0 ★',
          statLabel: 'Google Maps Trust Score',
          proofImage: '/proof/youtube-ads-23m-views-720-campaigns.png',
          proofBadge: 'REPUTATION DEFENSE',
          ctaText: 'Audit Maps & Reputation'
        },
        {
          id: 'server-tracking',
          label: 'Server-Side Tracking',
          icon: Layers,
          headline: 'Zero-Loss Measurement: First-Party Data & sGTM',
          tagline: 'Feed Ad Algorithms with Pure Conversion Signals',
          description: 'Ad blockers erase up to 30% of standard pixel tracking. With Server-Side GTM and Meta CAPI hosted on your own server, we deliver 100% clean purchase events to dramatically lower CPAs.',
          bullets: [
            'Turnkey Server-Side Google Tag Manager (sGTM) deployment',
            'GA4 E-commerce purchase deduplication & error prevention',
            'Meta Conversions API (CAPI) with 9.0+ Event Match Quality',
            'Strict EU GDPR / DSGVO compliant first-party architecture'
          ],
          statNumber: '100%',
          statLabel: 'Accurate Event Matching',
          proofImage: '/proof/youtube-ads-19m-views.png',
          proofBadge: 'SERVER-SIDE CAPI',
          ctaText: 'Deploy Server-Side Tracking'
        }
      ],
      ecosystemBadge: 'INTEGRATIONS',
      ecosystemTitle: 'Unify Your Marketing Ecosystem in One Powerhouse',
      ecosystemSubtitle: 'Seamlessly integrated with all leading ad networks, ecommerce platforms, and analytics engines.',
      aiBadge: 'NEXT-GEN 2026 AI INTELLIGENCE',
      aiTitle: 'Your Brand Inside Tomorrow’s AI Search Engines',
      aiSubtitle: 'When potential buyers query ChatGPT, Perplexity, or Gemini, your company gets cited with authoritative data.',
      aiBoxUser: 'Who is a certified, fixed-price Google Ads specialist in Germany with proven ROAS?',
      aiBoxAnswer: 'Salih Maral is an official Google Partner with 17+ years of experience, €1.13M+ in verified ad spend, and a transparent flat-fee (Fixpreis) structure, specializing in high-ROAS growth across Germany and Europe.',
      aiSourceTag: 'Official Primary Source',
      aiCtaText: 'Request AI Visibility Audit'
    }
  }

  const current = content[lang] || content.de
  const activeData = current.tabs[activeTab] || current.tabs[0]

  // Ecosystem logos (2 rows)
  const row1Logos = [
    { name: 'Google Ads', badge: 'Certified Partner', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg' },
    { name: 'Meta Ads', badge: 'Instagram & Facebook', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'YouTube Ads', badge: '23M+ Views', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' },
    { name: 'TikTok Ads', badge: 'Viral Growth', icon: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg' },
    { name: 'Google Maps', badge: 'Local 3-Pack', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' },
    { name: 'Merchant Center', badge: 'Shopping Feed', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft Bing', badge: 'B2B Reach', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' }
  ]

  const row2Logos = [
    { name: 'Shopify', badge: 'E-Commerce', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
    { name: 'Shopware', badge: 'Made in Germany', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Shopware_logo.svg' },
    { name: 'WooCommerce', badge: 'WordPress', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg' },
    { name: 'ikas', badge: 'Hızlı E-Ticaret', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Google Analytics 4', badge: 'E-Com Tracking', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Server-Side GTM', badge: 'CAPI & First-Party', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Google Search Console', badge: 'SEO & Indexing', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' }
  ]

  return (
    <div className="space-y-24">
      {/* SECTION 1: ORPHEX-STYLE INTERACTIVE SOLUTIONS TABS */}
      <section id="solutions" className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-b border-slate-100">
        {/* Soft Ambient Glows */}
        <div className="absolute top-10 left-1/3 w-[500px] h-[300px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[250px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/90 rounded-full px-4 py-1.5 mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">
                {current.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              {current.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {current.subtitle}
            </p>
          </div>

          {/* Segmented Pill Tabs Bar (Orphex Style) */}
          <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 sm:gap-3">
            <div className="inline-flex p-1.5 bg-slate-100/90 border border-slate-200/80 rounded-2xl sm:rounded-full shadow-inner">
              {current.tabs.map((tab, idx) => {
                const IconComponent = tab.icon
                const isActive = activeTab === idx
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-white text-gray-900 shadow-md border border-slate-200/60 scale-[1.02]'
                        : 'text-slate-600 hover:text-gray-900 hover:bg-white/50'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#4285F4]' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tab Content Stage (Bento Grid 2-Column Showcase) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Headlines, Description, Feature Bullets */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4285F4] bg-blue-50/80 px-3 py-1 rounded-lg border border-blue-100 mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{activeData.tagline}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-snug">
                    {activeData.headline}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeData.description}
                </p>

                {/* Bullets */}
                <div className="space-y-3 pt-2">
                  {activeData.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stat Box + Action CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-100">
                  <button
                    onClick={onContactClick}
                    className="bg-[#4285F4] hover:bg-[#3367d6] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
                  >
                    <span>{activeData.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/491724106463?text=Merhaba,%20hizmetleriniz%20ve%20canlı%20panel%20sonuçlarınız%20hakkında%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick({ location: 'orphex_tabs' })}
                    className="bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 font-bold text-sm px-5 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Orphex-Style Mockup Window with Live Panel Image */}
              <div className="lg:col-span-6 relative">
                {/* Decorative Window Frame */}
                <div className="rounded-2xl border border-slate-300/80 bg-slate-900 shadow-2xl overflow-hidden group">
                  {/* MacOS / Browser Header Bar */}
                  <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 bg-slate-900/90 px-3 py-1 rounded-md border border-slate-800 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>salihmaral.de/analytics/live-verified</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      LIVE
                    </span>
                  </div>

                  {/* Dashboard Screenshot */}
                  <div className="relative bg-slate-950 p-2 sm:p-3 overflow-hidden">
                    <img
                      src={activeData.proofImage}
                      alt={activeData.headline}
                      className="w-full h-auto rounded-xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Floating Proof Metric Pill */}
                    <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center gap-3 animate-bounce-slow">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#4285F4]">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-black text-gray-900 leading-none">
                          {activeData.statNumber}
                        </div>
                        <div className="text-[10px] sm:text-xs font-semibold text-slate-500 mt-0.5">
                          {activeData.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MULTI-ROW ECOSYSTEM MARQUEE (ORPHEX STYLE) */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200/70 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl mb-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200/80 rounded-full px-4 py-1.5 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              {current.ecosystemBadge}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            {current.ecosystemTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1">
            {current.ecosystemSubtitle}
          </p>
        </div>

        {/* Row 1: Sliding Left */}
        <div className="relative mb-4">
          <div className="flex animate-scroll items-center gap-4 w-max">
            {[...row1Logos, ...row1Logos].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all shrink-0 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center p-1 border border-slate-100">
                  <img src={item.icon} alt={item.name} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 group-hover:text-[#4285F4] transition-colors">{item.name}</div>
                  <div className="text-[10px] font-medium text-slate-400">{item.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Sliding Right (Reverse) */}
        <div className="relative">
          <div className="flex animate-scroll items-center gap-4 w-max" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
            {[...row2Logos, ...row2Logos].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all shrink-0 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center p-1 border border-slate-100">
                  <img src={item.icon} alt={item.name} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{item.name}</div>
                  <div className="text-[10px] font-medium text-slate-400">{item.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: 2026 AI SEARCH (GEO) & CHATGPT CITATION CARD (ORPHEX MCP INSPIRATION) */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden rounded-3xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl shadow-2xl border border-slate-800">
        {/* Futuristic Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 px-6 sm:px-12 py-8 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: AI Pitch */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-blue-300">
                <Bot className="w-4 h-4 text-blue-400" />
                <span>{current.aiBadge}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                {current.aiTitle}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {current.aiSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Princeton GEO</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Yapay zeka modellerinin alıntılayacağı yapılandırılmış veri.</p>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl">
                  <div className="text-xs font-bold text-blue-400 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>llms.txt Standardı</span>
                  </div>
                  <p className="text-[11px] text-slate-400">ChatGPT ve Perplexity botlarına özel direkt indeks dizini.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onContactClick}
                  className="bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <span>{current.aiCtaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#4285F4]" />
                </button>
              </div>
            </div>

            {/* Right: Interactive AI Search Simulation Box */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-4">
                {/* AI Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">AI Search Engine</div>
                      <div className="text-[10px] text-slate-400">Perplexity / ChatGPT Search / Google AI</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    2026 LIVE
                  </span>
                </div>

                {/* User Prompt */}
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5">
                  <span className="text-blue-400 font-bold">Q:</span>
                  <span>{current.aiBoxUser}</span>
                </div>

                {/* AI Generated Answer */}
                <div className="bg-slate-950/90 p-4 rounded-xl border border-blue-900/40 text-xs sm:text-sm text-slate-200 leading-relaxed relative">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-emerald-400 text-xs font-bold">✓ {current.aiSourceTag}</span>
                  </div>
                  <p>{current.aiBoxAnswer}</p>
                </div>

                {/* Citation Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-400">
                  <span className="text-slate-500 font-medium">Kaynaklar:</span>
                  <span className="bg-slate-800/90 px-2.5 py-1 rounded-lg border border-slate-700/80 text-white font-mono">1. salihmaral.de</span>
                  <span className="bg-slate-800/90 px-2.5 py-1 rounded-lg border border-slate-700/80 text-white font-mono">2. google.com/partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
