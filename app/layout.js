import './globals.css'

export const metadata = {
  metadataBase: new URL('https://salihmaral.de'),
  title: {
    template: '%s | Salih Maral',
    default: 'Salih Maral – Google Ads, Meta Ads & SEO Experte',
  },
  description: 'Offizieller Google Partner & Digital Marketing Experte mit 17+ Jahren Erfahrung. Spezialisiert auf Google Ads, Meta Ads, SEO & messbaren ROI-Zuwachs.',
  keywords: [
    'Google Ads Agentur',
    'Google Ads Experte',
    'Google Partner',
    'Meta Ads',
    'Facebook Ads',
    'Instagram Ads',
    'TikTok Ads',
    'X Ads',
    'SEO Optimierung',
    'SEO Agentur',
    'Digital Marketing',
    'Online Marketing',
    'PPC Management',
    'Social Media Marketing',
    'ROI Optimierung',
    'Conversion Optimierung',
    'Performance Marketing',
    'Generative Engine Optimization',
    'GEO Experte',
    'AI SEO',
    'Server-Side Tracking',
    'Meta CAPI'
  ],
  authors: [{ name: 'Salih Maral', url: 'https://salihmaral.de' }],
  creator: 'Salih Maral',
  publisher: 'Salih Maral',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://salihmaral.de',
    languages: {
      'de': 'https://salihmaral.de',
      'tr': 'https://salihmaral.de/tr',
      'en': 'https://salihmaral.de/en',
      'x-default': 'https://salihmaral.de'
    }
  },
  openGraph: {
    title: 'Salih Maral - Digital Marketing Experte & Google Partner',
    description: 'Google Ads, Meta Ads & SEO Experte mit 17+ Jahren Erfahrung. Steigern Sie Ihren ROI mit professionellem Digital Marketing.',
    url: 'https://salihmaral.de',
    siteName: 'Salih Maral',
    images: [
      {
        url: '/logo-og.png',
        width: 1200,
        height: 630,
        alt: 'Salih Maral - Digital Marketing Expert',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salih Maral - Digital Marketing Experte & Google Partner',
    description: 'Google Ads, Meta Ads & SEO Experte mit 17+ Jahren Erfahrung',
    images: ['/logo.png'],
    creator: '@salihmaral',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'whtq1HyXz-OCz37bLsqEluKHd_fER1KbDyCT2J2kmj4',
  },
  category: 'Digital Marketing',
}

export default function RootLayout({ children }) {
  return children
}
