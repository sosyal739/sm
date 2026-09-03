const cityData = {
  frankfurt: {
    name: 'Frankfurt am Main',
    region: 'Hessen',
    lat: 50.1109,
    lng: 8.6821,
    de: {
      title: 'Google Ads & AdWords Agentur Frankfurt am Main | Salih Maral',
      description: 'Google Ads & AdWords Agentur Frankfurt am Main: Zertifizierte Google Ads Betreuung, Performance Marketing & SEO für Frankfurt, Dreieich & Rhein-Main.',
    },
    en: {
      title: 'Google Ads & SEO Agency Frankfurt am Main | Salih Maral',
      description: 'Certified Google Partner in Frankfurt am Main. Performance Marketing with Google Ads, Meta Ads & SEO to scale your company revenue.',
    },
    tr: {
      title: 'Frankfurt Google Ads & Dijital Pazarlama Ajansı | Salih Maral',
      description: 'Frankfurt ve Rhein-Main bölgesinde Resmi Google Partner güvencesiyle Google Ads, Meta Ads ve SEO danışmanlığı ile cironuzu katlayın.',
    }
  },
  duesseldorf: {
    name: 'Düsseldorf',
    region: 'Nordrhein-Westfalen (NRW)',
    lat: 51.2277,
    lng: 6.7735,
    de: {
      title: 'Google Ads & Performance Marketing Agentur Düsseldorf | Salih Maral',
      description: 'Google Ads & Meta Ads Agentur Düsseldorf: Professionelle Google Ads Betreuung, Instagram Ads & SEO für Düsseldorf & ganz NRW mit 17+ Jahren Erfahrung.',
    },
    en: {
      title: 'Google Ads & Meta Ads Agency Düsseldorf | Salih Maral',
      description: 'Official Google Partner serving Düsseldorf & NRW. Scalable Google Ads, Meta Ads & SEO campaigns for measurable ROI growth.',
    },
    tr: {
      title: 'Düsseldorf Google Ads & SEO Ajansı | Salih Maral',
      description: 'Düsseldorf ve NRW bölgesindeki işletmeler için Google Ads, Meta Ads ve SEO danışmanlığı ile yüksek kârlı büyüme stratejileri.',
    }
  },
  koeln: {
    name: 'Köln',
    region: 'Nordrhein-Westfalen (NRW)',
    lat: 50.9375,
    lng: 6.9603,
    de: {
      title: 'Google Ads, Meta & Performance Marketing Agentur Köln | Salih Maral',
      description: 'Performance Marketing & Google Ads Agentur Köln: Facebook Ads, Instagram Ads & Google Ads Betreuung für Köln, Bonn und das Rheinland mit 17+ Jahren Expertise.',
    },
    en: {
      title: 'Google Ads & Performance Marketing Agency Cologne | Salih Maral',
      description: 'Professional campaign management for Cologne & Rhineland. High-ROAS Google Ads, Meta Ads & SEO with 17+ years expertise.',
    },
    tr: {
      title: 'Köln Google Ads & Dijital Pazarlama Danışmanlığı | Salih Maral',
      description: 'Köln ve çevresindeki firmalar için Google Ads, Meta Ads ve SEO danışmanlığı. 17+ yıllık uzmanlıkla kârlı reklam yönetimi.',
    }
  },
  muenchen: {
    name: 'München',
    region: 'Bayern',
    lat: 48.1351,
    lng: 11.5820,
    de: {
      title: 'Google Ads & Performance Marketing Agentur München | Salih Maral',
      description: 'Google Ads Agentur München: Zertifizierte Google Ads Betreuung zum Fixpreis, E-Commerce Performance & SEO für München & Bayern mit 17+ Jahren Expertise.',
    },
    en: {
      title: 'Google Ads Agency Munich | Performance & SEO | Salih Maral',
      description: 'Certified Google Partner for Munich & Bavaria. High-profit Google Ads, Meta Ads & SEO scaling backed by 17+ years experience.',
    },
    tr: {
      title: 'Münih Google Ads & SEO Danışmanlığı | Salih Maral',
      description: 'Münih ve Bavyera bölgesindeki işletmeler için Google Ads, Meta Ads ve SEO ile ölçülebilir ve yüksek dönüşümlü reklam yönetimi.',
    }
  },
  stuttgart: {
    name: 'Stuttgart',
    region: 'Baden-Württemberg',
    lat: 48.7758,
    lng: 9.1829,
    de: {
      title: 'Google Ads Agentur Stuttgart | B2B & Performance Marketing | Salih Maral',
      description: 'Zertifizierte Google Ads Agentur Stuttgart: Professionelle Google Ads Betreuung & B2B Performance Marketing für Stuttgart, Esslingen und Baden-Württemberg.',
    },
    en: {
      title: 'Google Ads & B2B Performance Agency Stuttgart | Salih Maral',
      description: 'Certified Google Ads & SEO consulting for Stuttgart & Baden-Württemberg. Specialized in B2B, industry, and e-commerce growth.',
    },
    tr: {
      title: 'Stuttgart Google Ads & B2B Pazarlama Ajansı | Salih Maral',
      description: 'Stuttgart ve Baden-Württemberg bölgesinde B2B ve e-ticaret işletmeleri için Google Ads, Meta Ads ve SEO danışmanlığı.',
    }
  },
  berlin: {
    name: 'Berlin',
    region: 'Berlin',
    lat: 52.5200,
    lng: 13.4050,
    de: {
      title: 'Google Ads & Performance Marketing Agentur Berlin | Salih Maral',
      description: 'Google Ads Agentur Berlin: Zertifizierte Google Ads Betreuung zum fairen Fixpreis, Meta Ads & SEO für Start-ups, E-Commerce und KMUs in Berlin.',
    },
    en: {
      title: 'Google Ads & Growth Marketing Agency Berlin | Salih Maral',
      description: 'Official Google Partner serving Berlin. Scalable Google Ads, Meta Ads & SEO strategies for startups, e-commerce, and enterprises.',
    },
    tr: {
      title: 'Berlin Google Ads & Dijital Büyüme Ajansı | Salih Maral',
      description: 'Berlin genelindeki start-up ve e-ticaret markaları için Google Ads, Meta Ads ve SEO ile sürdürülebilir büyüme danışmanlığı.',
    }
  }
}

export async function generateMetadata({ params }) {
  const { lang = 'de', city = 'frankfurt' } = await params
  const currentLang = ['de', 'tr', 'en'].includes(lang) ? lang : 'de'
  const cityInfo = cityData[city] || cityData.frankfurt
  const meta = cityInfo[currentLang] || cityInfo.de

  const canonicalUrl = `https://salihmaral.de/${currentLang}/standorte/${city}`

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        de: `https://salihmaral.de/de/standorte/${city}`,
        tr: `https://salihmaral.de/tr/standorte/${city}`,
        en: `https://salihmaral.de/en/standorte/${city}`,
        'x-default': `https://salihmaral.de/de/standorte/${city}`
      }
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      type: 'website'
    }
  }
}

export default function CityLayout({ children }) {
  return <>{children}</>
}
