import ServiceDetailClient from './ServiceDetailClient'
import { notFound } from 'next/navigation'

const serviceMeta = {
  'google-ads': {
    de: {
      title: 'Google Ads Betreuung & Management | Salih Maral',
      description: 'Zertifizierter Google Partner mit 17+ Jahren Erfahrung. Performance Max, Search & Shopping Kampagnen für maximalen ROAS und Neukunden.',
    },
    en: {
      title: 'Google Ads Management Services | Salih Maral',
      description: 'Certified Google Partner with 17+ years experience. Search, Performance Max, and Shopping campaigns for maximum ROAS and customer growth.',
    },
    tr: {
      title: 'Google Ads Yönetimi ve Danışmanlığı | Salih Maral',
      description: 'Resmi Google Partneri ve 17+ yıllık tecrübe. Arama, PMax ve Alışveriş reklamlarında maksimum ciro, kâr ve ROAS artışı.',
    },
  },
  'meta-ads': {
    de: {
      title: 'Meta Ads Agentur (Facebook & Instagram) | Salih Maral',
      description: 'Advantage+ Shopping Kampagnen und Creative AI für planbare E-Commerce Skalierung und niedrigere CPAs auf Instagram & Facebook.',
    },
    en: {
      title: 'Meta Ads Management (Facebook & Instagram) | Salih Maral',
      description: 'Advantage+ Shopping Campaigns and Creative AI for predictable e-commerce scaling and lower CPAs across Instagram & Facebook.',
    },
    tr: {
      title: 'Meta Ads Yönetimi (Facebook & Instagram) | Salih Maral',
      description: 'Advantage+ Alışveriş Kampanyaları ve Yapay Zeka Kreatifleri ile Instagram ve Facebook satışlarınızı kârlı şekilde ölçekleyin.',
    },
  },
  'youtube-ads': {
    de: {
      title: 'YouTube Ads Betreuung & Video-Wachstum | Salih Maral',
      description: 'Erreichen Sie echte Zuschauer und loyale Abonnenten mit zielgerichteten In-Feed & Shorts Video Ads auf YouTube.',
    },
    en: {
      title: 'YouTube Ads & Video Growth Services | Salih Maral',
      description: 'Reach real viewers and loyal subscribers with targeted In-Feed & Shorts video ads to drive organic YouTube channel growth.',
    },
    tr: {
      title: 'YouTube Ads ve Video Reklam Yönetimi | Salih Maral',
      description: 'Videolarınızı doğru insanlara izletin. Ülke hedefli YouTube Ads ve Shorts reklamları ile gerçek izlenme ve kanal büyümesi.',
    },
  },
  'server-side-tracking': {
    de: {
      title: 'Werbekonto- & Tracking-Setup (Google Ads, GA4, CAPI) | Salih Maral',
      description: 'Lückenloses Werbe- und Tracking-Setup: Google Ads, GA4 E-Commerce, Search Console, Merchant Center, Meta Pixel, Conversions API (CAPI) & Server-Side GTM.',
    },
    en: {
      title: 'Ad Account & Tracking Setup (Google Ads, GA4, CAPI) | Salih Maral',
      description: 'Full-funnel ad and tracking setup: Google Ads, GA4 E-Commerce, Search Console, Merchant Center, Meta Pixel, Conversions API (CAPI), and Server-Side GTM.',
    },
    tr: {
      title: 'Reklam & Tracking Kurulum Hizmetleri (Google Ads, GA4, CAPI) | Salih Maral',
      description: 'Anahtar teslim reklam ve ölçüm altyapı kurulumu: Google Ads, GA4 E-Ticaret, Search Console, Merchant Center, Meta Pixel, CAPI ve Server-Side GTM.',
    },
  },
  'tiktok-ads': {
    de: {
      title: 'TikTok Ads Betreuung & E-Commerce | Salih Maral',
      description: 'Virale Performance-Kampagnen und Spark Ads für dynamisches E-Commerce-Wachstum und hohe Conversion-Raten auf TikTok.',
    },
    en: {
      title: 'TikTok Ads Management Services | Salih Maral',
      description: 'Viral direct-response campaigns and Spark Ads for rapid e-commerce growth and high conversion rates on TikTok.',
    },
    tr: {
      title: 'TikTok Ads Reklam Yönetimi | Salih Maral',
      description: 'Viral kreatif kurguları ve Spark Ads ile genç kitleyi müşteriye dönüştüren doğrudan satış odaklı TikTok reklamları.',
    },
  },
  'x-ads': {
    de: {
      title: 'X (Twitter) Ads Betreuung & B2B Lead Gen | Salih Maral',
      description: 'Positionieren Sie Ihre Marke bei Trendthemen und Entscheidern. B2B Lead-Generierung und Reichweite auf X.',
    },
    en: {
      title: 'X (Twitter) Ads Management & B2B Leads | Salih Maral',
      description: 'Position your brand in front of decision-makers. B2B lead generation, app installs, and viral reach on X (Twitter).',
    },
    tr: {
      title: 'X (Twitter) Ads Reklam Yönetimi ve B2B Büyüme | Salih Maral',
      description: 'Karar vericilere ve trend konulara doğrudan ulaşın. B2B müşteri kazanımı ve yüksek etkileşimli X reklamları.',
    },
  },
  'seo': {
    de: {
      title: 'SEO Agentur & Princeton GEO Optimierung | Salih Maral',
      description: 'Top-Rankings bei Google und KI-Suchmaschinen (Perplexity, ChatGPT, Claude). Technisches SEO, Content-Hubs und Local SEO.',
    },
    en: {
      title: 'SEO & Generative Engine Optimization (GEO) | Salih Maral',
      description: 'Dominate Google and AI search engines (Perplexity, ChatGPT, Claude). Technical SEO, programmatic content hubs, and Local SEO.',
    },
    tr: {
      title: 'SEO ve Generative Engine Optimization (GEO) | Salih Maral',
      description: 'Google ilk sıra ve yapay zeka arama motorlarında (Perplexity, ChatGPT, Gemini) zirveye çıkın. Teknik SEO ve İçerik Motoru.',
    },
  },
  'islamic-charity-ngo-marketing': {
    de: {
      title: 'Spendenmarketing & Google Ad Grants für NGOs | Salih Maral',
      description: 'Digitale Spendenkampagnen für Brunnen, Waisen und Nothilfe. Bis zu $10.000/Monat kostenlose Google Werbebudgets (Ad Grants).',
    },
    en: {
      title: 'Donation Marketing & Google Ad Grants for NGOs | Salih Maral',
      description: 'Scale donations for water wells, orphan sponsorships, and Ramadan appeals. Up to $10,000/month in free Google Ad Grants.',
    },
    tr: {
      title: 'İnsani Yardım Dernekleri İçin Dijital Pazarlama | Salih Maral',
      description: 'Su kuyusu, yetim ve Ramazan/Kurban bağış hunileri. $10.000/aylık ücretsiz Google Ad Grants hibe reklam yönetimi.',
    },
  },
  'yorum-yonetimi': {
    de: {
      title: 'Bewertungsmanagement & Google Maps SEO | Salih Maral',
      description: 'Löschung unberechtigter 1-Stern-Bewertungen auf Google Maps und Trustpilot. Schützen Sie Ihre digitale Unternehmensreputation.',
    },
    en: {
      title: 'Review & Online Reputation Management | Salih Maral',
      description: 'Legally remove unfair 1-star reviews on Google Maps and Trustpilot. Protect your reputation and win customer trust.',
    },
    tr: {
      title: 'Olumsuz Yorum ve İtibar Yönetimi | Salih Maral',
      description: 'Google Haritalar ve Trustpilot üzerindeki haksız, sahte 1 yıldızlı yorumların yasal zeminde hızlıca kaldırılması.',
    },
  },
}

export async function generateMetadata({ params }) {
  const resolvedParams = params && typeof params.then === 'function' ? await params : params
  const { lang, service } = resolvedParams || {}
  const currentLang = lang || 'de'
  
  let key = service || ''
  if (service === 'bewertungsmanagement' || service === 'review-management') {
    key = 'yorum-yonetimi'
  }

  const metaData = serviceMeta[key]?.[currentLang] || {
    title: `${service || 'Dienstleistungen'} | Salih Maral`,
    description: 'Professionelle Digital Marketing Dienstleistungen von Salih Maral.',
  }

  const pathPrefix = currentLang === 'de' ? 'de/dienstleistungen' : currentLang === 'en' ? 'en/services' : 'tr/hizmetler'
  const serviceSlug = key === 'yorum-yonetimi' 
    ? (currentLang === 'de' ? 'bewertungsmanagement' : currentLang === 'en' ? 'review-management' : 'yorum-yonetimi')
    : key
  const canonicalUrl = `https://salihmaral.de/${pathPrefix}/${serviceSlug}`

  return {
    title: {
      absolute: metaData.title,
    },
    description: metaData.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        de: `https://salihmaral.de/de/dienstleistungen/${key === 'yorum-yonetimi' ? 'bewertungsmanagement' : key}`,
        en: `https://salihmaral.de/en/services/${key === 'yorum-yonetimi' ? 'review-management' : key}`,
        tr: `https://salihmaral.de/tr/hizmetler/${key === 'yorum-yonetimi' ? 'yorum-yonetimi' : key}`,
      }
    },
    openGraph: {
      title: metaData.title,
      description: metaData.description,
      url: canonicalUrl,
      images: [
        {
          url: 'https://salihmaral.de/logo-og.png',
          width: 1200,
          height: 630,
          alt: metaData.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaData.title,
      description: metaData.description,
      images: ['https://salihmaral.de/logo.png'],
      creator: '@salihmaral',
    },
  }
}

export default async function ServicePage({ params }) {
  const resolvedParams = params && typeof params.then === 'function' ? await params : params
  const { lang, service } = resolvedParams || {}
  
  if (!service) {
    notFound()
  }

  return <ServiceDetailClient initialService={service} initialLang={lang || 'de'} />
}
