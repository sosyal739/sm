const standorteMeta = {
  de: {
    title: 'Google Ads Agentur nach Städten | Salih Maral',
    description: 'Lokale Google Ads Betreuung für führende Wirtschaftsmetropolen: Frankfurt am Main, München, Berlin, Hamburg, Köln und ganz Deutschland.',
  },
  tr: {
    title: 'Almanya Şehirleri Google Ads Rehberi | Salih Maral',
    description: 'Almanya metropollerinde (Frankfurt, Köln, Düsseldorf, Stuttgart, Berlin) işletmenizi 1. sıraya taşıyan resmi Google Partner reklam ajansı.',
  },
  en: {
    title: 'Google Ads Agency by City in Germany | Salih Maral',
    description: 'Certified Google Ads and Meta Ads management across major German cities: Frankfurt, Munich, Berlin, Hamburg, Cologne, Stuttgart, and more.',
  },
}

export async function generateMetadata({ params }) {
  const resolvedParams = params && typeof params.then === 'function' ? await params : params
  const { lang } = resolvedParams || {}
  const currentLang = ['de', 'tr', 'en'].includes(lang) ? lang : 'de'
  const meta = standorteMeta[currentLang] || standorteMeta.de

  const canonicalUrl = `https://salihmaral.de/${currentLang}/standorte`

  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        de: 'https://salihmaral.de/de/standorte',
        tr: 'https://salihmaral.de/tr/standorte',
        en: 'https://salihmaral.de/en/standorte',
        'x-default': 'https://salihmaral.de/de/standorte',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      type: 'website',
    },
  }
}

export default function StandorteLayout({ children }) {
  return <>{children}</>
}
