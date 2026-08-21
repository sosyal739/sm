export const metadata = {
  title: 'Über uns | Salih Maral – Digital Marketing Experte & Google Partner',
  description: 'Erfahren Sie mehr über Salih Maral: Offizieller Google Partner mit 17+ Jahren Erfahrung in Google Ads, Meta Ads & SEO für nachhaltiges Unternehmenswachstum.',
  alternates: {
    canonical: 'https://salihmaral.de/about',
    languages: {
      'de': 'https://salihmaral.de/about',
      'x-default': 'https://salihmaral.de/about'
    }
  },
  openGraph: {
    title: 'Über uns | Salih Maral – Digital Marketing Experte',
    description: 'Erfahren Sie mehr über Salih Maral: Offizieller Google Partner mit 17+ Jahren Erfahrung in Google Ads, Meta Ads & SEO.',
    url: 'https://salihmaral.de/about',
    type: 'website'
  }
}

export default function AboutLayout({ children }) {
  return <>{children}</>
}
