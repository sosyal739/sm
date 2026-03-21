import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', preload: true })

export const metadata = {
  metadataBase: new URL('https://salihmaral.de'),
  title: {
    template: '%s',
    default: '',
  },
  description: 'Professioneller Digital Marketing Experte mit 15+ Jahren Erfahrung. Spezialisiert auf Google Ads, Meta Ads (Facebook & Instagram), TikTok Ads, X Ads und SEO. Maximieren Sie Ihren ROI mit datengesteuerten Strategien.',
  keywords: [
    'Google Ads Agentur',
    'Google Ads Experte',
    'Meta Ads',
    'Facebook Ads',
    'Instagram Ads',
    'TikTok Ads',
    'X Ads',
    'Twitter Ads',
    'SEO Optimierung',
    'SEO Agentur',
    'Digital Marketing',
    'Online Marketing',
    'PPC Management',
    'Social Media Marketing',
    'Bewertungsmanagement',
    'Google Maps Bewertungen',
    'Trustpilot Bewertungen',
    'ROI Optimierung',
    'Conversion Optimierung',
    'Performance Marketing'
  ],
  authors: [{ name: 'Salih Maral', url: 'https://salihmaral.de' }],
  creator: 'Salih Maral',
  publisher: 'Salih Maral',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {},
  openGraph: {
    title: 'Salih Maral - Digital Marketing Experte',
    description: 'Google Ads, Meta Ads & SEO Experte mit 15+ Jahren Erfahrung. Steigern Sie Ihren ROI mit professionellem Digital Marketing.',
    url: 'https://salihmaral.de',
    siteName: 'Salih Maral Digital Marketing',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Salih Maral - Digital Marketing Expert',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salih Maral - Digital Marketing Experte',
    description: 'Google Ads, Meta Ads & SEO Experte mit 15+ Jahren Erfahrung',
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

// JSON-LD Structured Data - Language-neutral only (language-specific in page components)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://salihmaral.de/#organization',
      name: 'Salih Maral Digital Marketing',
      url: 'https://salihmaral.de',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://salihmaral.de/#logo',
        url: 'https://salihmaral.de/logo.png',
        width: 800,
        height: 800,
        caption: 'Salih Maral Digital Marketing'
      },
      image: { '@id': 'https://salihmaral.de/#logo' },
      sameAs: ['https://wa.me/491724106463']
    },
    {
      '@type': 'WebSite',
      '@id': 'https://salihmaral.de/#website',
      url: 'https://salihmaral.de',
      name: 'Salih Maral Digital Marketing',
      publisher: { '@id': 'https://salihmaral.de/#organization' },
      inLanguage: ['de-DE', 'en-US', 'tr-TR']
    },
    {
      '@type': 'Person',
      '@id': 'https://salihmaral.de/#person',
      name: 'Salih Maral',
      jobTitle: 'Digital Marketing Expert',
      url: 'https://salihmaral.de',
      image: 'https://salihmaral.de/logo.png',
      worksFor: { '@id': 'https://salihmaral.de/#organization' },
      knowsAbout: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'SEO', 'PPC Management', 'Digital Marketing Strategy']
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/* Google Analytics - Loaded conditionally via CookieConsent component based on user consent */}
        {/* DSGVO/GDPR Compliant - Only loads after explicit user consent */}
        <meta name="google-site-verification" content="whtq1HyXz-OCz37bLsqEluKHd_fER1KbDyCT2J2kmj4" />
        
        {/* Favicon - Multiple sizes for different devices and Google Search */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <meta name="theme-color" content="#4285F4" />
        <meta name="msapplication-TileColor" content="#4285F4" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Germany" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
