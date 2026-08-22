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
      title: 'Server-Side Tracking & Meta CAPI Setup | Salih Maral',
      description: 'Verlustfreies First-Party Tracking mit Server-Side GTM & Meta CAPI. 92%+ Match Quality für maximale Ad-Performance nach iOS 14+.',
    },
    en: {
      title: 'Server-Side Tracking & Meta CAPI Setup | Salih Maral',
      description: 'Zero-data-loss First-Party tracking with Server-Side GTM & Meta CAPI. 92%+ match quality for optimal post-iOS 14 ad scaling.',
    },
    tr: {
      title: 'Server-Side Tracking ve Meta CAPI Kurulumu | Salih Maral',
      description: 'iOS 14+ sonrası kaybolan satışları kurtarın. Server-Side GTM ve Meta CAPI ile %92+ eşleşme kalitesi ve sıfır veri kaybı.',
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
      title: 'X (Twitter) Ads Kampagnenmanagement | Salih Maral',
      description: 'Echtzeit-Engagement, Trendthemen-Sichtbarkeit und B2B-Lead-Generierung auf der Plattform X für maximale Markenwirkung.',
    },
    en: {
      title: 'X (Twitter) Advertising Services | Salih Maral',
      description: 'Real-time engagement, trending topic visibility, and high-impact B2B lead generation on X for enterprise brands.',
    },
    tr: {
      title: 'X (Twitter) Reklam Yönetimi | Salih Maral',
      description: 'Trend konularda marka görünürlüğü ve karar vericilere yönelik B2B potansiyel müşteri edinimi için profesyonel X reklamları.',
    },
  },
  'seo': {
    de: {
      title: 'SEO & GEO Dienstleistungen (Google Platz 1) | Salih Maral',
      description: 'Organische Top-Rankings bei Google und Sichtbarkeit in KI-Suchmaschinen (ChatGPT, Perplexity) mit 17+ Jahren Expertise.',
    },
    en: {
      title: 'SEO & GEO (AI Search Visibility) Services | Salih Maral',
      description: 'Achieve Google #1 organic rankings and prime citation in AI search engines (ChatGPT, Perplexity) with 17+ years experience.',
    },
    tr: {
      title: 'SEO ve GEO (Yapay Zeka SEO) Hizmetleri | Salih Maral',
      description: 'Google aramalarında 1. sıra hakimiyeti ve ChatGPT/Perplexity yapay zeka aramalarında birincil kaynak olma stratejileri.',
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
  try {
    const resolvedParams = params && typeof params.then === 'function' ? await params : params
    const { lang, service } = resolvedParams || {}
    const currentLang = lang || 'de'
    
    // Normalize service key
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

    console.log(`[SEO generateMetadata] Resolving for lang: ${currentLang}, service: ${service}, resolved key: ${key}, title: ${metaData.title}`)

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
  } catch (error) {
    console.error('[SEO generateMetadata] Error resolving metadata:', error)
    return {
      title: {
        absolute: 'Digital Marketing Dienstleistungen | Salih Maral',
      },
      description: 'Professionelle Google Ads, Meta Ads & SEO Dienstleistungen von Salih Maral.',
    }
  }
}

export default function ServiceLayout({ children }) {
  return <>{children}</>
}
