import { getCityMeta, getCityGrowth } from '@/lib/cityGrowth'

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

export default async function CityLayout({ children, params }) {
  const { lang = 'de', city = 'frankfurt' } = await params
  const currentLang = ['de', 'tr', 'en'].includes(lang) ? lang : 'de'
  const meta = getCityMeta(city, currentLang)
  
  const cityName = city.charAt(0).toUpperCase() + city.slice(1)
  const pageUrl = `https://salihmaral.de/${currentLang}/standorte/${city}`

  const faqData = currentLang === 'tr' ? [
    {
      q: `${cityName} Google Ads yönetimi maliyeti nedir?`,
      a: `Salih Maral ile ${cityName} için Google Ads yönetimi, reklam bütçenizden yüzde komisyon almadan, aylık 590 €'dan başlayan şeffaf sabit fiyatla (Fixpreis) sunulur.`
    },
    {
      q: `${cityName} bölgesinde Google reklamları ne kadar sürede sonuç verir?`,
      a: `Arama ağı reklamları yayınlandığı ilk günden itibaren telefon ve form talepleri getirmeye başlar. Negatif kelime optimizasyonu ve Server-Side Tracking ile ilk 14-30 gün içinde en yüksek kârlılığa ulaşılır.`
    },
    {
      q: `${cityName} için Türkçe ve Almanca çift dilli danışmanlık veriyor musunuz?`,
      a: `Evet. 17+ yıllık deneyime sahip Resmi Google Partneri Salih Maral olarak işletmelerimize hem Türkçe hem Almanca kusursuz danışmanlık sunuyoruz.`
    }
  ] : currentLang === 'en' ? [
    {
      q: `What are the costs for Google Ads management in ${cityName}?`,
      a: `At Salih Maral, Google Ads management for ${cityName} starts at a transparent monthly flat fee from €590/month — with zero percentage commissions on your ad spend.`
    },
    {
      q: `How fast can businesses in ${cityName} see results with Google Ads?`,
      a: `Search campaigns generate qualified commercial clicks and leads from day one. With server-side tracking and weekly negative keyword pruning, optimal CPA is typically achieved within 14 to 30 days.`
    },
    {
      q: `Do you provide multilingual support in ${cityName}?`,
      a: `Yes. As an Official Google Partner with 17+ years of experience, we support clients across Germany in German, Turkish, and English.`
    }
  ] : [
    {
      q: `Was kostet die Google Ads Betreuung für ${cityName}?`,
      a: `Bei Salih Maral betreuen wir Google Ads Kampagnen in ${cityName} zu transparenten monatlichen Fixpreisen ab 590 €/Monat – ohne prozentuale Umsatzbeteiligung am Werbebudget.`
    },
    {
      q: `Warum ist eine spezialisierte Google Ads Betreuung in ${cityName} entscheidend?`,
      a: `In wirtschaftsstarken Regionen wie ${cityName} sind Klickpreise (CPC) hart umkämpft. Wir trennen Stadtzentrum, Gewerbegebiete und Umland mit präzisen Negativlisten und Server-Side Tracking, um Streuverluste zu eliminieren und den CPL um bis zu 40% zu senken.`
    },
    {
      q: `Wie schnell stellen sich erste messbare Erfolge in ${cityName} ein?`,
      a: `Suchkampagnen generieren ab dem ersten Tag qualifizierte Klicks. Durch kontinuierliche Suchbegriffsanalyse und Conversion-Tracking stabilisieren sich Anfragen in der Regel innerhalb von 14 bis 30 Tagen.`
    },
    {
      q: `Bieten Sie in ${cityName} auch mehrsprachige Betreuung an?`,
      a: `Ja, als zertifizierter Google Partner mit über 17 Jahren Praxiserfahrung beraten wir Unternehmen in ${cityName} fließend auf Deutsch, Türkisch und Englisch.`
    }
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${pageUrl}#service`,
        name: `Salih Maral – Google Ads & Performance Marketing ${cityName}`,
        url: pageUrl,
        description: meta.description,
        telephone: '+49 172 4106463',
        priceRange: '€€',
        image: 'https://salihmaral.de/hero.webp',
        address: {
          '@type': 'PostalAddress',
          addressLocality: cityName,
          addressCountry: 'DE'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          bestRating: '5',
          ratingCount: '312'
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: currentLang === 'tr' ? 'Ana Sayfa' : currentLang === 'en' ? 'Home' : 'Startseite',
            item: `https://salihmaral.de/${currentLang}`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: currentLang === 'tr' ? 'Bölgeler' : currentLang === 'en' ? 'Locations' : 'Standorte',
            item: `https://salihmaral.de/${currentLang}/standorte`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: cityName,
            item: pageUrl
          }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqData.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
