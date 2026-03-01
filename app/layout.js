import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://salihmaral.de'),
  title: {
    default: 'Salih Maral - Digital Marketing Experte | Google Ads, Meta Ads & SEO',
    template: '%s | Salih Maral Digital Marketing'
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
  alternates: {
    canonical: 'https://salihmaral.de',
    languages: {
      'de-DE': 'https://salihmaral.de',
      'en-US': 'https://salihmaral.de/en',
      'tr-TR': 'https://salihmaral.de/tr',
    },
  },
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
    google: 'your-google-verification-code',
  },
  category: 'Digital Marketing',
}

// JSON-LD Structured Data
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
        url: 'https://salihmaral.de/logo.png',
        width: 800,
        height: 800
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+49-172-410-6463',
        contactType: 'customer service',
        email: 'kontakt@salihmaral.de',
        availableLanguage: ['German', 'English', 'Turkish']
      },
      sameAs: [
        'https://wa.me/491724106463'
      ]
    },
    {
      '@type': 'Person',
      '@id': 'https://salihmaral.de/#person',
      name: 'Salih Maral',
      jobTitle: 'Digital Marketing Expert',
      description: 'Erfahrener Digital Marketing Experte spezialisiert auf Google Ads, Meta Ads und SEO mit über 15 Jahren Branchenerfahrung.',
      url: 'https://salihmaral.de',
      image: 'https://salihmaral.de/logo.png',
      worksFor: {
        '@id': 'https://salihmaral.de/#organization'
      },
      knowsAbout: [
        'Google Ads',
        'Meta Ads',
        'Facebook Advertising',
        'Instagram Advertising',
        'TikTok Ads',
        'SEO',
        'Search Engine Optimization',
        'PPC Management',
        'Digital Marketing Strategy',
        'Conversion Optimization'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': 'https://salihmaral.de/#website',
      url: 'https://salihmaral.de',
      name: 'Salih Maral Digital Marketing',
      description: 'Professionelle Digital Marketing Dienstleistungen',
      publisher: {
        '@id': 'https://salihmaral.de/#organization'
      },
      inLanguage: ['de-DE', 'en-US', 'tr-TR']
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://salihmaral.de/#service',
      name: 'Salih Maral Digital Marketing Services',
      description: 'Professionelle Digital Marketing Dienstleistungen: Google Ads, Meta Ads, TikTok Ads, X Ads, SEO und Bewertungsmanagement',
      url: 'https://salihmaral.de',
      telephone: '+49-172-410-6463',
      email: 'kontakt@salihmaral.de',
      priceRange: '€€',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 51.1657,
          longitude: 10.4515
        },
        geoRadius: '500000'
      },
      serviceType: [
        'Google Ads Management',
        'Meta Ads Management',
        'Facebook Advertising',
        'Instagram Advertising',
        'TikTok Advertising',
        'X (Twitter) Advertising',
        'SEO Services',
        'Review Management'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Google Ads Management',
              description: 'Professionelles Google Ads Management für maximalen ROI'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Meta Ads Management',
              description: 'Facebook und Instagram Werbekampagnen'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO Services',
              description: 'Suchmaschinenoptimierung für bessere Rankings'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'TikTok Ads',
              description: 'TikTok Werbekampagnen für junge Zielgruppen'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Review Management',
              description: 'Professionelles Bewertungsmanagement für Google Maps und Trustpilot'
            }
          }
        ]
      }
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4285F4" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Germany" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsentWrapper />
      </body>
    </html>
  )
}

// Client component wrapper for CookieConsent
function CookieConsentWrapper() {
  return null // Will be replaced with actual component
}
