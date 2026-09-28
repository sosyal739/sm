import { getCityMeta } from '@/lib/cityGrowth'

export async function generateMetadata({ params }) {
  const { lang = 'de', city = 'frankfurt' } = await params
  const currentLang = ['de', 'tr', 'en'].includes(lang) ? lang : 'de'
  
  const meta = getCityMeta(city, currentLang)

  const canonicalUrl = `https://salihmaral.de/${currentLang}/standorte/${city}`

  return {
    title: {
      absolute: meta.title,
    },
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
