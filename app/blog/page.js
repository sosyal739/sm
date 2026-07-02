'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Globe, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const translations = {
  tr: {
    home: 'Ana Sayfa',
    heroTitle: 'Dijital Pazarlama Blog',
    heroSubtitle: 'Google Ads, Meta Ads, SEO ve daha fazlasÃ„Â± hakkÃ„Â±nda gÃƒÂ¼ncel iÃƒÂ§erikler',
    readMore: 'DevamÃ„Â±nÃ„Â± Oku',
    readTime: 'dk okuma',
    footer: 'Ã‚Â© 2026 Salih Maral. TÃƒÂ¼m haklarÃ„Â± saklÃ„Â±dÃ„Â±r.'
  },
  de: {
    home: 'Startseite',
    heroTitle: 'Digital Marketing Blog',
    heroSubtitle: 'Aktuelle Inhalte ÃƒÂ¼ber Google Ads, Meta Ads, SEO und mehr',
    readMore: 'Weiterlesen',
    readTime: 'Min. Lesezeit',
    footer: 'Ã‚Â© 2026 Salih Maral. Alle Rechte vorbehalten.'
  },
  en: {
    home: 'Home',
    heroTitle: 'Digital Marketing Blog',
    heroSubtitle: 'Latest content about Google Ads, Meta Ads, SEO and more',
    readMore: 'Read More',
    readTime: 'min read',
    footer: 'Ã‚Â© 2026 Salih Maral. All rights reserved.'
  }
}

const blogPosts = {
  tr: [
    {
      id: 1,
      slug: 'google-ads-nedir',
      title: 'Google Ads Nedir ve Neden Yapilmalidir?',
      excerpt: 'Google Ads, isletmenizin dijital dÃ¼nyada gÃ¶rÃ¼nÃ¼r olmasinin en hizli yoludur. Dogru stratejilerle yatiriminizin karsiligini almanin yollarini kesfedin.',
      category: 'Google Ads',
      date: '2026-01-15',
      readTime: '5'
    },
    {
      id: 2,
      slug: 'meta-ads-basari',
      title: 'Meta Ads ile Basari: Facebook ve Instagram Reklamciligi',
      excerpt: 'Facebook ve Instagram\'da etkili reklam kampanyalari nasil olusturulur? Hedef kitle segmentasyonundan kreatif stratejilere kadar her sey.',
      category: 'Meta Ads',
      date: '2026-01-18',
      readTime: '6'
    },
    {
      id: 3,
      slug: 'tiktok-ads-rehber',
      title: 'TikTok Ads: GenÃ§ Kitleye Ulasmanin Yeni Yolu',
      excerpt: 'TikTok\'ta viral olmanin ve genÃ§ kitleye etkili sekilde ulasmanin stratejilerini Ã¶grenin.',
      category: 'TikTok Ads',
      date: '2026-01-20',
      readTime: '4'
    },
    {
      id: 4,
      slug: 'seo-stratejileri-2026',
      title: 'SEO Stratejileri 2026: Google\'in Yeni Algoritmasi',
      excerpt: 'Google\'in sÃ¼rekli degisen algoritmasinda Ã¼st siralarda kalmak iÃ§in yapmaniz gerekenler. Teknik SEO ipuÃ§lari.',
      category: 'SEO',
      date: '2026-01-22',
      readTime: '8'
    },
    {
      id: 5,
      slug: 'x-twitter-ads',
      title: 'X (Twitter) Reklamlari: GerÃ§ek Zamanli Pazarlama',
      excerpt: 'Trend konularda nasil Ã¶ne Ã§ikilir? X reklamlari ile gerÃ§ek zamanli pazarlama stratejileri.',
      category: 'X Ads',
      date: '2026-01-25',
      readTime: '5'
    },
    {
      id: 6,
      slug: 'olumsuz-yorum-yonetimi',
      title: 'Olumsuz Yorum YÃ¶netimi: Itibarinizi Koruyun',
      excerpt: 'Google Maps ve Trustpilot\'taki haksiz yorumlar isletmenize zarar veriyor mu? Yorum silme sÃ¼reÃ§leri hakkinda bilmeniz gerekenler.',
      category: 'Itibar YÃ¶netimi',
      date: '2026-01-28',
      readTime: '6'
    },
    {
      id: 7,
      slug: 'google-ads-roi-tracking',
      title: 'Google Ads DÃ¶nÃ¼sÃ¼m Takibi ve ROI Optimizasyonu',
      excerpt: 'Reklam bÃ¼tÃ§enizi bosa harcamayin. Google Ads\'te dogru dÃ¶nÃ¼sÃ¼m takibi kurarak ROI ve ROAS oranlarinizi nasil katlayacaginizi Ã¶grenin.',
      category: 'Google Ads',
      date: '2026-03-01',
      readTime: '6'
    },
    {
      id: 8,
      slug: 'meta-ads-retargeting-funnels',
      title: 'E-Ticaret IÃ§in Meta Ads Yeniden Hedefleme Hunileri',
      excerpt: 'Sitenizi ziyaret edip satin almayan kullanicilari kazanin. YÃ¼ksek dÃ¶nÃ¼sÃ¼mlÃ¼ Meta Ads retargeting reklam stratejileri.',
      category: 'Meta Ads',
      date: '2026-03-05',
      readTime: '5'
    },
    {
      id: 9,
      slug: 'ai-seo-geoptimierung',
      title: 'Yapay Zeka Arama Motorlari IÃ§in SEO (GEO) Rehberi 2026',
      excerpt: 'Google AI Overviews, Perplexity ve ChatGPT\'de markanizin nasil alintilanacagini ve Ã¼st siralarda Ã§ikacagini Ã¶grenin.',
      category: 'SEO',
      date: '2026-03-10',
      readTime: '7'
    },
    {
      id: 10,
      slug: 'google-ads-pmax-optimization',
      title: 'Google Ads PMax Optimizasyonu ile ROAS\'inizi 3 Katina Ã‡ikarin',
      excerpt: 'PMax kampanyalarinizdaki bÃ¼tÃ§e israfini nasil durduracaginizi Ã¶grenin. 2026\'nin en etkili Google Ads taktikleriyle asset gruplari ve kitle sinyallerini yapilandirin.',
      category: 'Google Ads',
      date: '2026-03-15',
      readTime: '6'
    },
    {
      id: 11,
      slug: 'tiktok-shop-social-commerce',
      title: 'TikTok Shop Rehberi: Sosyal Medyadan Dogrudan Satis Yapmanin Sirlari',
      excerpt: 'Sosyal ticaret pazarinda rakiplerinizin Ã¶nÃ¼ne geÃ§in. DÃ¶nÃ¼sÃ¼m oranlarini %40 artiran TikTok Shopping Ads entegrasyonu ve sosyal Ã¶deme optimizasyonu taktikleri.',
      category: 'TikTok Ads',
      date: '2026-03-20',
      readTime: '5'
    },
    {
      id: 12,
      slug: 'local-seo-google-maps',
      title: 'Yerel SEO ve Google Haritalar: BÃ¶lgesel Satislarinizi %300 Artirin',
      excerpt: 'Google Business Profile optimizasyonu ile magazaniza gelen trafigi katlayin. 2026 yerel SEO algoritmasi ve Google Maps siralama faktÃ¶rleri rehberi.',
      category: 'SEO',
      date: '2026-03-25',
      readTime: '6'
    },
    {
      id: 13,
      slug: 'first-party-data-marketing',
      title: 'Ã‡erezsiz Reklamcilik: Birinci Taraf Veri (1st-Party Data) ile Gelecege Hazirlanin',
      excerpt: 'ÃœÃ§Ã¼ncÃ¼ taraf Ã§erezlerin (3rd-party cookies) kalkmasi kampanyalarinizi vurmasin. Consent Mode V2 ve Server-Side Tracking ile veri kaybini nasil Ã¶nleyeceginizi kesfedin.',
      category: 'Teknoloji',
      date: '2026-03-30',
      readTime: '7'
    },
    {
      id: 14,
      slug: 'ai-content-marketing-scale',
      title: 'Yapay Zeka ile IÃ§erik Ãœretimi: Kaliteden Ã–dÃ¼n Vermeden Organik Trafigi Ã–lÃ§eklendirin',
      excerpt: 'AI kullanarak iÃ§erik Ã¼retirken Google\'dan ceza almayin. EEAT standartlarina uygun, insanilestirilmis (humanized) AI iÃ§erik Ã¼retme rehberi.',
      category: 'SEO',
      date: '2026-04-05',
      readTime: '6'
    },
    {
      id: 15,
      slug: 'pinterest-ads-visual-marketing',
      title: 'Pinterest Reklamlari ile E-Ticaret Sepet Ortalamasini 2x Katlayin',
      excerpt: 'GÃ¶rsel arama motoru Pinterest\'te kÃ¢rli kitlelere ulasin. E-ticaret katalog entegrasyonu ve uzun Ã¶mÃ¼rlÃ¼ (evergreen) mÃ¼steri kazanimi stratejileri.',
      category: 'SEO',
      date: '2026-04-10',
      readTime: '5'
    },
    {
      id: 16,
      slug: 'x-live-studio-streaming-rewards',
      title: 'X Live Studio Nedir? 1 Milyon Dolarlik Yayinci Ã–dÃ¼lÃ¼nÃ¼ Nasil Kazanirsiniz?',
      excerpt: 'X (Twitter), Twitch ve YouTube\'a rakip olan Live Studio\'yu duyurdu. 1 milyon dolarlik dev nakit havuzundan pay almak iÃ§in bilmeniz gereken tÃ¼m sartlar.',
      category: 'X Ads',
      date: '2026-07-03',
      readTime: '5'
    },
    {
      id: 17,
      slug: 'google-gemini-spark',
      title: 'Google Gemini Spark: Arka Planda 7/24 Ã‡alisan Kisisel Yapay Zeka Ajaniniz',
      excerpt: 'Google\'in yeni proaktif yapay zeka ajani Gemini Spark ile tanisin. Siz uyurken bile e-postalarinizi yÃ¶neten ve otomatik gÃ¶revler yÃ¼rÃ¼ten bu sistemin Ã¶zelliklerini kesfedin.',
      category: 'Teknoloji',
      date: '2026-07-03',
      readTime: '6'
    }
  ],
  de: [
    {
      id: 1,
      slug: 'google-ads-nedir',
      title: 'Was ist Google Ads und warum sollte man es nutzen?',
      excerpt: 'Google Ads ist der schnellste Weg, um Ihr Unternehmen in der digitalen Welt sichtbar zu machen. Entdecken Sie, wie Sie mit den richtigen Strategien Ihren ROI maximieren.',
      category: 'Google Ads',
      date: '2026-01-15',
      readTime: '5'
    },
    {
      id: 2,
      slug: 'meta-ads-basari',
      title: 'Erfolg mit Meta Ads: Facebook und Instagram Werbung',
      excerpt: 'Wie erstellt man effektive Werbekampagnen auf Facebook und Instagram? Von der Zielgruppensegmentierung bis zu kreativen Strategien.',
      category: 'Meta Ads',
      date: '2026-01-18',
      readTime: '6'
    },
    {
      id: 3,
      slug: 'tiktok-ads-rehber',
      title: 'TikTok Ads: Der neue Weg, die junge Zielgruppe zu erreichen',
      excerpt: 'Lernen Sie Strategien, um auf TikTok viral zu werden und junge Zielgruppen effektiv zu erreichen.',
      category: 'TikTok Ads',
      date: '2026-01-20',
      readTime: '4'
    },
    {
      id: 4,
      slug: 'seo-stratejileri-2026',
      title: 'SEO-Strategien 2026: Googles neuer Algorithmus',
      excerpt: 'Was Sie tun mÃ¼ssen, um bei Googles stÃ¤ndig wechselndem Algorithmus an der Spitze zu bleiben. Technische SEO-Tipps.',
      category: 'SEO',
      date: '2026-01-22',
      readTime: '8'
    },
    {
      id: 5,
      slug: 'x-twitter-ads',
      title: 'X (Twitter) Werbung: Echtzeit-Marketing',
      excerpt: 'Wie hebt man sich bei Trendthemen ab? Echtzeit-Marketingstrategien mit X Ads.',
      category: 'X Ads',
      date: '2026-01-25',
      readTime: '5'
    },
    {
      id: 6,
      slug: 'olumsuz-yorum-yonetimi',
      title: 'Bewertungsmanagement: SchÃ¼tzen Sie Ihren Ruf',
      excerpt: 'Schaden unfaire Bewertungen auf Google Maps und Trustpilot Ihrem Unternehmen? Alles Ã¼ber den LÃ¶schprozess.',
      category: 'Reputation',
      date: '2026-01-28',
      readTime: '6'
    },
    {
      id: 7,
      slug: 'google-ads-roi-tracking',
      title: 'Google Ads Conversion Tracking und ROI-Optimierung',
      excerpt: 'Verschwenden Sie kein Werbebudget. Erfahren Sie, wie Sie durch richtiges Conversion-Tracking in Google Ads Ihre ROI- und ROAS-Raten vervielfachen.',
      category: 'Google Ads',
      date: '2026-03-01',
      readTime: '6'
    },
    {
      id: 8,
      slug: 'meta-ads-retargeting-funnels',
      title: 'Meta Ads Retargeting-Funnels fÃ¼r E-Commerce',
      excerpt: 'Gewinnen Sie Nutzer zurÃ¼ck, die Ihre Website ohne Kauf verlassen haben. Meta Ads Retargeting-Strategien mit hoher Conversion.',
      category: 'Meta Ads',
      date: '2026-03-05',
      readTime: '5'
    },
    {
      id: 9,
      slug: 'ai-seo-geoptimierung',
      title: 'SEO fÃ¼r KI-Suchmaschinen (GEO) Leitfaden 2026',
      excerpt: 'Erfahren Sie, wie Ihre Marke in Google AI Overviews, Perplexity und ChatGPT zitiert und hervorgehoben wird.',
      category: 'SEO',
      date: '2026-03-10',
      readTime: '7'
    },
    {
      id: 10,
      slug: 'google-ads-pmax-optimization',
      title: 'Verdreifachen Sie Ihren ROAS mit Google Ads PMax-Optimierung',
      excerpt: 'Erfahren Sie, wie Sie die Budgetverschwendung in Ihren PMax-Kampagnen stoppen. Strukturieren Sie Asset-Gruppen und Zielgruppensignale mit den effektivsten Google Ads-Taktiken fÃ¼r 2026.',
      category: 'Google Ads',
      date: '2026-03-15',
      readTime: '6'
    },
    {
      id: 11,
      slug: 'tiktok-shop-social-commerce',
      title: 'TikTok Shop Guide: Geheimnisse des Direktverkaufs Ã¼ber Social Media',
      excerpt: 'Seien Sie Ihren Konkurrenten im Social-Commerce-Markt einen Schritt voraus. Integration von TikTok Shopping Ads und Taktiken zur Optimierung des Social Checkouts, die die Konversionsraten um 40 % steigern.',
      category: 'TikTok Ads',
      date: '2026-03-20',
      readTime: '5'
    },
    {
      id: 12,
      slug: 'local-seo-google-maps',
      title: 'Lokale SEO und Google Maps: Steigern Sie Ihre regionalen VerkÃ¤ufe um 300 %',
      excerpt: 'Vervielfachen Sie den Traffic zu Ihrem GeschÃ¤ft mit Google Business Profile Optimierung. Der Leitfaden zum lokalen SEO-Algorithmus 2026 und den Rankingfaktoren fÃ¼r Google Maps.',
      category: 'SEO',
      date: '2026-03-25',
      readTime: '6'
    },
    {
      id: 13,
      slug: 'first-party-data-marketing',
      title: 'Werbung ohne Cookies: Bereiten Sie sich mit First-Party-Daten auf die Zukunft vor',
      excerpt: 'Lassen Sie nicht zu, dass das Ende der Third-Party-Cookies Ihre Kampagnen beeintrÃ¤chtigt. Entdecken Sie, wie Sie Datenverluste mit Consent Mode V2 und Server-Side Tracking verhindern kÃ¶nnen.',
      category: 'Technologie',
      date: '2026-03-30',
      readTime: '7'
    },
    {
      id: 14,
      slug: 'ai-content-marketing-scale',
      title: 'Content-Erstellung mit KI: Skalieren Sie organischen Traffic ohne QualitÃ¤tseinbuÃŸen',
      excerpt: 'Vermeiden Sie Google-Strafen, wenn Sie Inhalte mit KI erstellen. Der Leitfaden zur Erstellung menschlicher KI-Inhalte gemÃ¤ÃŸ den EEAT-Standards.',
      category: 'SEO',
      date: '2026-04-05',
      readTime: '6'
    },
    {
      id: 15,
      slug: 'pinterest-ads-visual-marketing',
      title: 'Verdoppeln Sie Ihren durchschnittlichen E-Commerce-Warenkorb mit Pinterest Ads',
      excerpt: 'Erreichen Sie profitable Zielgruppen auf der visuellen Suchmaschine Pinterest. E-Commerce-Katalogintegration und Evergreen-Kundenakquisestrategien.',
      category: 'SEO',
      date: '2026-04-10',
      readTime: '5'
    },
    {
      id: 16,
      slug: 'x-live-studio-streaming-rewards',
      title: 'Was ist X Live Studio? Wie Sie den 1-Million-Dollar-Streamer-Preis gewinnen',
      excerpt: 'X (Twitter) hat Live Studio angekÃ¼ndigt, einen Konkurrenten fÃ¼r Twitch und YouTube. Alle Bedingungen, die Sie kennen mÃ¼ssen, um einen Anteil an dem riesigen Preispool von 1 Million US-Dollar zu erhalten.',
      category: 'X Ads',
      date: '2026-07-03',
      readTime: '5'
    },
    {
      id: 17,
      slug: 'google-gemini-spark',
      title: 'Google Gemini Spark: Ihr persÃ¶nlicher 24/7-Hintergrund-KI-Agent',
      excerpt: 'Lernen Sie Googles neuen proaktiven KI-Agenten Gemini Spark kennen. Entdecken Sie die Funktionen dieses Systems, das Ihre E-Mails verwaltet und automatisierte Aufgaben ausfÃ¼hrt, sogar wÃ¤hrend Sie schlafen.',
      category: 'Technologie',
      date: '2026-07-03',
      readTime: '6'
    }
  ],
  en: [
    {
      id: 1,
      slug: 'google-ads-nedir',
      title: 'What is Google Ads and Why Should You Use It?',
      excerpt: 'Google Ads is the fastest way to make your business visible in the digital world. Discover how to maximize your ROI with the right strategies.',
      category: 'Google Ads',
      date: '2026-01-15',
      readTime: '5'
    },
    {
      id: 2,
      slug: 'meta-ads-basari',
      title: 'Success with Meta Ads: Facebook and Instagram Advertising',
      excerpt: 'How to create effective ad campaigns on Facebook and Instagram? From audience segmentation to creative strategies.',
      category: 'Meta Ads',
      date: '2026-01-18',
      readTime: '6'
    },
    {
      id: 3,
      slug: 'tiktok-ads-rehber',
      title: 'TikTok Ads: The New Way to Reach Young Audiences',
      excerpt: 'Learn strategies to go viral on TikTok and effectively reach young audiences.',
      category: 'TikTok Ads',
      date: '2026-01-20',
      readTime: '4'
    },
    {
      id: 4,
      slug: 'seo-stratejileri-2026',
      title: 'SEO Strategies 2026: Google\'s New Algorithm',
      excerpt: 'What you need to do to stay at the top of Google\'s constantly changing algorithm. Technical SEO tips.',
      category: 'SEO',
      date: '2026-01-22',
      readTime: '8'
    },
    {
      id: 5,
      slug: 'x-twitter-ads',
      title: 'X (Twitter) Ads: Real-Time Marketing',
      excerpt: 'How to stand out in trending topics? Real-time marketing strategies with X Ads.',
      category: 'X Ads',
      date: '2026-01-25',
      readTime: '5'
    },
    {
      id: 6,
      slug: 'olumsuz-yorum-yonetimi',
      title: 'Review Management: Protect Your Reputation',
      excerpt: 'Are unfair reviews on Google Maps and Trustpilot hurting your business? Everything about the removal process.',
      category: 'Reputation',
      date: '2026-01-28',
      readTime: '6'
    },
    {
      id: 7,
      slug: 'google-ads-roi-tracking',
      title: 'Google Ads Conversion Tracking and ROI Optimization',
      excerpt: 'Don\'t waste your ad budget. Learn how to multiply your ROI and ROAS by setting up correct conversion tracking in Google Ads.',
      category: 'Google Ads',
      date: '2026-03-01',
      readTime: '6'
    },
    {
      id: 8,
      slug: 'meta-ads-retargeting-funnels',
      title: 'Meta Ads Retargeting Funnels for E-Commerce',
      excerpt: 'Win back users who visited your site but did not purchase. High-converting Meta Ads retargeting strategy guide.',
      category: 'Meta Ads',
      date: '2026-03-05',
      readTime: '5'
    },
    {
      id: 9,
      slug: 'ai-seo-geoptimierung',
      title: 'SEO for AI Search Engines (GEO) Guide 2026',
      excerpt: 'Learn how to get your brand cited and surfaced in Google AI Overviews, Perplexity, and ChatGPT.',
      category: 'SEO',
      date: '2026-03-10',
      readTime: '7'
    },
    {
      id: 10,
      slug: 'google-ads-pmax-optimization',
      title: 'Triple Your ROAS with Google Ads PMax Optimization',
      excerpt: 'Learn how to stop wasting budget in your PMax campaigns. Structure asset groups and audience signals with the most effective Google Ads tactics of 2026.',
      category: 'Google Ads',
      date: '2026-03-15',
      readTime: '6'
    },
    {
      id: 11,
      slug: 'tiktok-shop-social-commerce',
      title: 'TikTok Shop Guide: Secrets to Direct Selling on Social Media',
      excerpt: 'Get ahead of your competitors in the social commerce market. TikTok Shopping Ads integration and social checkout optimization tactics that increase conversion rates by 40%.',
      category: 'TikTok Ads',
      date: '2026-03-20',
      readTime: '5'
    },
    {
      id: 12,
      slug: 'local-seo-google-maps',
      title: 'Local SEO and Google Maps: Boost Your Regional Sales by 300%',
      excerpt: 'Multiply the traffic to your store with Google Business Profile optimization. The 2026 local SEO algorithm and Google Maps ranking factors guide.',
      category: 'SEO',
      date: '2026-03-25',
      readTime: '6'
    },
    {
      id: 13,
      slug: 'first-party-data-marketing',
      title: 'Cookie-less Advertising: Prepare for the Future with 1st-Party Data',
      excerpt: 'Don\'t let the deprecation of 3rd-party cookies hurt your campaigns. Discover how to prevent data loss with Consent Mode V2 and Server-Side Tracking.',
      category: 'Technology',
      date: '2026-03-30',
      readTime: '7'
    },
    {
      id: 14,
      slug: 'ai-content-marketing-scale',
      title: 'Content Creation with AI: Scale Organic Traffic Without Sacrificing Quality',
      excerpt: 'Avoid Google penalties when producing content with AI. The guide to creating humanized AI content compliant with EEAT standards.',
      category: 'SEO',
      date: '2026-04-05',
      readTime: '6'
    },
    {
      id: 15,
      slug: 'pinterest-ads-visual-marketing',
      title: 'Double Your E-Commerce Average Order Value with Pinterest Ads',
      excerpt: 'Reach profitable audiences on the visual search engine Pinterest. E-commerce catalog integration and evergreen customer acquisition strategies.',
      category: 'SEO',
      date: '2026-04-10',
      readTime: '5'
    },
    {
      id: 16,
      slug: 'x-live-studio-streaming-rewards',
      title: 'What is X Live Studio? How to Win the  Million Streamer Reward',
      excerpt: 'X (Twitter) announced Live Studio, a competitor to Twitch and YouTube. All the terms you need to know to get a share of the massive  million prize pool.',
      category: 'X Ads',
      date: '2026-07-03',
      readTime: '5'
    },
    {
      id: 17,
      slug: 'google-gemini-spark',
      title: 'Google Gemini Spark: Your 24/7 Background Personal AI Agent',
      excerpt: 'Meet Google\'s new proactive AI agent, Gemini Spark. Discover the features of this system that manages your emails and runs automated tasks even while you sleep.',
      category: 'Technology',
      date: '2026-07-03',
      readTime: '6'
    }
  ]
}

export default function BlogPage() {
  const router = useRouter()
  const [lang, setLang] = useState('de')

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage')
    if (savedLang && ['de', 'en', 'tr'].includes(savedLang)) {
      setLang(savedLang)
    }
  }, [])

  const handleLanguageChange = (newLang) => {
    setLang(newLang)
    localStorage.setItem('preferredLanguage', newLang)
  }

  const t = translations[lang]
  const posts = blogPosts[lang]

  const getCategoryImage = (slug) => {
    const images = {
      'google-ads-nedir': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80',
      'meta-ads-basari': 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=300&fit=crop&q=80',
      'tiktok-ads-rehber': 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=600&h=300&fit=crop&q=80',
      'seo-stratejileri-2026': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=300&fit=crop&q=80',
      'x-twitter-ads': 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=300&fit=crop&q=80',
      'olumsuz-yorum-yonetimi': 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=300&fit=crop&q=80',
      'google-ads-roi-tracking': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=300&fit=crop&q=80',
      'meta-ads-retargeting-funnels': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=300&fit=crop&q=80',
      'ai-seo-geoptimierung': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=300&fit=crop&q=80',
      'google-ads-pmax-optimization': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&q=80',
      'tiktok-shop-social-commerce': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop&q=80',
      'local-seo-google-maps': 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop&q=80',
      'first-party-data-marketing': 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=300&fit=crop&q=80',
      'ai-content-marketing-scale': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=300&fit=crop&q=80',
      'pinterest-ads-visual-marketing': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=300&fit=crop&q=80',
      'google-gemini-spark': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop&q=80',
    }
    return images[slug] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80'
  }

  const getCategoryLogo = (category) => {
    if (category.includes('Google')) return (
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="h-8 w-auto drop-shadow-lg" width="32" height="32" loading="lazy" />
    )
    if (category.includes('Meta') || category.includes('Facebook')) return (
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 w-auto drop-shadow-lg brightness-0 invert" width="80" height="24" loading="lazy" />
    )
    if (category.includes('TikTok')) return (
      <svg className="h-8 w-8 drop-shadow-lg" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
    )
    if (category.includes('SEO')) return (
      <svg className="h-8 w-8 drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    )
    if (category.includes('X') || category.includes('Twitter')) return (
      <svg className="h-8 w-8 drop-shadow-lg" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    )
    return (
      <svg className="h-8 w-8 drop-shadow-lg" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* SEO */}
      <head>
        <link rel="canonical" href="https://salihmaral.de/blog" />
        <title>Blog | Salih Maral Digital Marketing</title>
        <meta name="description" content="Dijital pazarlama, Google Ads, Meta Ads, SEO ve daha fazlasÃ„Â± hakkÃ„Â±nda gÃƒÂ¼ncel blog yazÃ„Â±larÃ„Â±." />
      </head>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href={lang === 'de' ? '/' : `/${lang}`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5 text-[#4285F4]" />
              <span className="font-semibold text-gray-700 hidden sm:inline">{t.home}</span>
            </a>
            <a href={lang === 'de' ? '/' : `/${lang}`}>
              <picture><source srcSet="/logo-sm.webp" type="image/webp" /><img src="/logo.png" alt="Salih Maral Logo" className="h-10 w-auto" width="40" height="40" /></picture>
            </a>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleLanguageChange('de')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${lang === 'de' ? 'bg-[#4285F4] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                DE
              </button>
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${lang === 'en' ? 'bg-[#4285F4] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('tr')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${lang === 'tr' ? 'bg-[#4285F4] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                TR
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-[#4285F4]/10 rounded-full px-4 py-2 mb-6">
            <Globe className="h-4 w-4 text-[#4285F4]" />
            <span className="text-sm font-medium text-[#4285F4]">Digital Marketing Insights</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">{t.heroSubtitle}</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <a key={post.id} href={`/blog/${post.slug}`} className="block h-full group">
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-white">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={getCategoryImage(post.slug)} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      width="600"
                      height="300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 right-4 opacity-80 group-hover:opacity-100 transition-opacity">
                      {getCategoryLogo(post.category)}
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800 hover:bg-white">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="pt-6 pb-8">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#4285F4] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <span>{post.date}</span>
                        <span className="mx-2">Ã¢â‚¬Â¢</span>
                        <span>{post.readTime} {t.readTime}</span>
                      </div>
                      <div className="flex items-center text-[#4285F4] font-medium text-sm group-hover:translate-x-1 transition-transform">
                        {t.readMore}
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-4 text-center">
          <a href={lang === 'de' ? '/' : `/${lang}`} className="inline-block">
            <picture><source srcSet="/logo-md.webp" type="image/webp" /><img src="/logo.png" alt="Salih Maral Logo" className="h-12 w-auto mx-auto" width="48" height="48" loading="lazy" /></picture>
          </a>
          <p className="text-sm text-gray-400 mt-4">{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}


