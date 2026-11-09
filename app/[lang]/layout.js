import { notFound } from 'next/navigation'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ lang: 'tr' }, { lang: 'en' }, { lang: 'de' }]
}

const langMeta = {
  de: {
    title: 'Salih Maral – Google Ads, Meta Ads & SEO Experte',
    description: 'Zertifizierter Google Partner mit 17+ Jahren Erfahrung. Performance Marketing mit Google Ads, Meta Ads, TikTok Ads & SEO.',
    canonical: 'https://salihmaral.de',
  },
  en: {
    title: 'Google Ads Agency Germany & PPC Expert | Salih Maral',
    description: 'Scale your business in Germany with certified flat-fee Google Ads, Meta Ads, TikTok Ads & SEO management by an official 17+ yr Senior Google Partner.',
    canonical: 'https://salihmaral.de/en',
  },
  tr: {
    title: 'Almanya Google Ads Ajansı & SEO Uzmanı | Salih Maral',
    description: 'Almanya ve Avrupa pazarında büyümek isteyen markalar ve gurbetçi işletmeler için Resmi Google Partneri ile sabit fiyatlı Google Ads, Meta Ads & Yerel SEO.',
    canonical: 'https://salihmaral.de/tr',
  },
}

export async function generateMetadata({ params }) {
  const { lang } = await params
  if (!['de', 'en', 'tr'].includes(lang)) {
    return {}
  }
  const currentLang = lang || 'de'
  const meta = langMeta[currentLang] || langMeta.de

  return {
    title: {
      absolute: meta.title,
    },
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
      languages: {
        de: 'https://salihmaral.de',
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

export default async function LangLayout({ children, params }) {
  const { lang } = await params
  if (!['de', 'en', 'tr'].includes(lang)) {
    notFound()
  }
  return <>{children}</>
}
