const langMeta = {
  de: {
    title: 'Salih Maral – Google Ads, Meta Ads & SEO Experte (17+ Jahre)',
    description: 'Zertifizierter Google Partner mit 17+ Jahren Erfahrung. Performance Marketing mit Google Ads, Meta Ads, TikTok Ads & SEO.',
    canonical: 'https://salihmaral.de/',
  },
  en: {
    title: 'Salih Maral – Digital Marketing Expert & Google Partner',
    description: 'Certified Google Partner with 17+ years experience. Scale revenue with Google Ads, Meta Ads, TikTok Ads, SEO & Server-Side Tracking.',
    canonical: 'https://salihmaral.de/en',
  },
  tr: {
    title: 'Salih Maral – Dijital Pazarlama Uzmanı & Resmi Google Partner',
    description: '17+ yıllık reklam tecrübesi ve Resmi Google Partner güvencesiyle Google Ads, Meta Ads, TikTok Ads, SEO & GEO ile cironuzu katlayın.',
    canonical: 'https://salihmaral.de/tr',
  },
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  const currentLang = lang || 'de'
  const meta = langMeta[currentLang] || langMeta.de

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
      languages: {
        de: 'https://salihmaral.de/',
        en: 'https://salihmaral.de/en',
        tr: 'https://salihmaral.de/tr',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
    },
  }
}

export default function LangLayout({ children }) {
  return <>{children}</>
}
