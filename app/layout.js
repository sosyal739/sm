import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', preload: true })

export const metadata = {
  metadataBase: new URL('https://salihmaral.de'),
  title: {
    template: '%s | Salih Maral',
    default: 'Salih Maral – Google Ads & SEO Experte in Deutschland',
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
  alternates: {},
  openGraph: {
    title: 'Salih Maral - Digital Marketing Experte',
    description: 'Google Ads, Meta Ads & SEO Experte mit 15+ Jahren Erfahrung. Steigern Sie Ihren ROI mit professionellem Digital Marketing.',
    url: 'https://salihmaral.de',
    siteName: 'Salih Maral Digital Marketing',
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
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+49-172-4106463',
        contactType: 'customer service',
        availableLanguage: ['German', 'Turkish', 'English'],
        areaServed: 'DE'
      },
      sameAs: [
        'https://wa.me/491724106463',
        'https://www.linkedin.com/in/salihmaral',
        'https://x.com/salihmaral',
        'https://www.facebook.com/salihmaral.de',
        'https://www.instagram.com/salihmaral.de',
        'https://www.xing.com/profile/Salih_Maral'
      ]
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
      description: 'Professioneller Digital Marketing Experte mit 15+ Jahren Erfahrung in Google Ads, Meta Ads, TikTok Ads, X Ads, SEO und Generative Engine Optimization (GEO).',
      worksFor: { '@id': 'https://salihmaral.de/#organization' },
      knowsAbout: [
        'Google Ads',
        'Meta Ads',
        'TikTok Ads',
        'X Ads',
        'SEO',
        'Generative Engine Optimization (GEO)',
        'AI Search Visibility (AEO)',
        'Server-Side Tracking (sGTM & Meta CAPI)',
        'First-Party Data Attribution',
        'Performance Max Optimization',
        'PPC Management',
        'Digital Marketing Strategy',
        'Conversion Optimization',
        'Performance Marketing'
      ],
      knowsLanguage: ['de', 'tr', 'en'],
      sameAs: [
        'https://www.linkedin.com/in/salihmaral',
        'https://x.com/salihmaral',
        'https://www.xing.com/profile/Salih_Maral'
      ]
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://salihmaral.de/#localbusiness',
      name: 'Salih Maral Digital Marketing',
      url: 'https://salihmaral.de',
      telephone: '+49-172-4106463',
      email: 'info@salihmaral.de',
      image: 'https://salihmaral.de/logo.png',
      priceRange: '€€',
      areaServed: {
        '@type': 'Country',
        name: 'Germany'
      },
      serviceType: [
        'Google Ads Management',
        'Meta Ads Management',
        'TikTok Ads Management',
        'SEO Services',
        'Generative Engine Optimization (GEO)',
        'Server-Side Tracking',
        'Review Management'
      ],
      founder: { '@id': 'https://salihmaral.de/#person' },
      parentOrganization: { '@id': 'https://salihmaral.de/#organization' },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://salihmaral.de/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was kostet Google Ads Werbung?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Kosten für Google Ads variieren je nach Branche, Wettbewerb und Keywords. Der durchschnittliche CPC liegt zwischen 0,50 € und 5 €. Salih Maral hilft Ihnen, Ihr Budget optimal einzusetzen und den maximalen ROI zu erzielen.'
          }
        },
        {
          '@type': 'Question',
          name: 'Wie lange dauert es, bis SEO Ergebnisse zeigt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Erste SEO-Ergebnisse sind in der Regel nach 3–6 Monaten sichtbar. Für nachhaltige Top-Rankings bei Google sollten Sie mit 6–12 Monaten kontinuierlicher Optimierung rechnen.'
          }
        },
        {
          '@type': 'Question',
          name: 'Welche Plattformen bieten Sie für Werbung an?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wir bieten professionelles Kampagnenmanagement für Google Ads (Search, Display, Shopping, YouTube, Performance Max), Meta Ads (Facebook & Instagram), TikTok Ads und X (Twitter) Ads.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kann man negative Google-Bewertungen löschen lassen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, ungerechtfertigte oder gefälschte negative Bewertungen auf Google Maps und Trustpilot können gemeldet und entfernt werden. Wir übernehmen den gesamten Prozess für Sie.'
          }
        },
        {
          '@type': 'Question',
          name: 'Arbeiten Sie auch mit Kunden außerhalb Deutschlands?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, wir betreuen Kunden weltweit. Unsere Dienstleistungen sind in Deutsch, Türkisch und Englisch verfügbar. Die Zusammenarbeit erfolgt digital und flexibel.'
          }
        }
      ]
    },
    {
      '@type': 'AggregateRating',
      '@id': 'https://salihmaral.de/#rating',
      itemReviewed: { '@id': 'https://salihmaral.de/#organization' },
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '3',
      reviewCount: '3'
    },
    {
      '@type': 'Review',
      itemReviewed: { '@id': 'https://salihmaral.de/#organization' },
      author: { '@type': 'Person', name: 'Michael Schmidt' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Nur 2 Monate nach Beginn der Zusammenarbeit stiegen unsere Verkäufe um 180%. Seine Beherrschung des Kampagnenmanagements und der ROI-Optimierung ist ausgezeichnet.',
      datePublished: '2025-11-15'
    },
    {
      '@type': 'Review',
      itemReviewed: { '@id': 'https://salihmaral.de/#organization' },
      author: { '@type': 'Person', name: 'Anna Weber' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Früher erschienen wir nie auf Karten, jetzt sind wir in unserer Region an erster Stelle. Ein wirklich sachkundiger, ehrlicher und transparenter Experte.',
      datePublished: '2025-12-20'
    },
    {
      '@type': 'Review',
      itemReviewed: { '@id': 'https://salihmaral.de/#organization' },
      author: { '@type': 'Person', name: 'Thomas Müller' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Seit wir mit Herrn Maral arbeiten, sind die Berichte so klar, dass wir wissen, wohin unser Geld fließt. Ich empfehle ihn auf jeden Fall.',
      datePublished: '2026-01-10'
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
        
        {/* Preload critical hero image for faster LCP */}
        <link rel="preload" as="image" type="image/webp" href="/hero.webp" />
        <link rel="preload" as="image" type="image/webp" href="/logo-sm.webp" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
