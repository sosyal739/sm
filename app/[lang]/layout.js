const langMeta = {
  de: {
    title: 'Salih Maral – Google Ads, Meta Ads & SEO Experte',
    description: 'Zertifizierter Google Partner mit 17+ Jahren Erfahrung. Performance Marketing mit Google Ads, Meta Ads, TikTok Ads & SEO.',
    canonical: 'https://salihmaral.de/de',
  },
  en: {
    title: 'Google Ads Agency Germany | Certified PPC & Meta Partner Frankfurt | Salih Maral',
    description: 'Scale your business in Germany with certified flat-fee Google Ads, Meta Ads, TikTok Ads & SEO management by an official 17+ yr Senior Google Partner.',
    canonical: 'https://salihmaral.de/en',
  },
  tr: {
    title: 'Almanya Google Ads Ajansı & Türk Dijital Pazarlama Uzmanı | Salih Maral',
    description: 'Almanya ve Avrupa pazarında büyümek isteyen markalar ve gurbetçi işletmeler için Resmi Google Partneri ile sabit fiyatlı Google Ads, Meta Ads & Yerel SEO.',
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
        de: 'https://salihmaral.de/de',
        en: 'https://salihmaral.de/en',
        tr: 'https://salihmaral.de/tr',
        'x-default': 'https://salihmaral.de',
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
