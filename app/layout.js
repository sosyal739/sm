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
    google: 'whtq1HyXz-OCz37bLsqEluKHd_fER1KbDyCT2J2kmj4',
  },
  category: 'Digital Marketing',
}

// JSON-LD Structured Data - Optimized for Google Sitelinks
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // Organization
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
      sameAs: [
        'https://wa.me/491724106463'
      ]
    },
    // WebSite with SearchAction for Sitelinks Search Box
    {
      '@type': 'WebSite',
      '@id': 'https://salihmaral.de/#website',
      url: 'https://salihmaral.de',
      name: 'Salih Maral Digital Marketing',
      description: 'Professionelle Digital Marketing Dienstleistungen - Google Ads, Meta Ads, TikTok Ads, X Ads, SEO',
      publisher: { '@id': 'https://salihmaral.de/#organization' },
      inLanguage: ['de-DE', 'en-US', 'tr-TR'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://salihmaral.de/?s={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    },
    // WebPage - Main page
    {
      '@type': 'WebPage',
      '@id': 'https://salihmaral.de/#webpage',
      url: 'https://salihmaral.de',
      name: 'Salih Maral - Digital Marketing Experte',
      isPartOf: { '@id': 'https://salihmaral.de/#website' },
      about: { '@id': 'https://salihmaral.de/#organization' },
      description: 'Professioneller Digital Marketing Experte - Google Ads, Meta Ads, TikTok Ads, X Ads, SEO und Bewertungsmanagement',
      inLanguage: 'de-DE'
    },
    // SiteNavigationElement - For Sitelinks (German)
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://salihmaral.de/#navigation',
      name: 'Hauptnavigation',
      hasPart: [
        {
          '@type': 'SiteNavigationElement',
          name: 'Dienstleistungen',
          description: 'Unsere Digital Marketing Dienstleistungen',
          url: 'https://salihmaral.de/#services'
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Google Ads Management',
          description: 'Maximaler ROI in Such-, Display-, Shopping- und YouTube-Kampagnen',
          url: 'https://salihmaral.de/de/hizmetler/google-ads'
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Meta Ads (Facebook & Instagram)',
          description: 'Erreichen Sie Ihre Zielgruppe auf Facebook und Instagram',
          url: 'https://salihmaral.de/de/hizmetler/meta-ads'
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'TikTok Ads',
          description: 'Erreichen Sie ein junges, dynamisches Publikum',
          url: 'https://salihmaral.de/de/hizmetler/tiktok-ads'
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'X (Twitter) Ads',
          description: 'Heben Sie sich bei Trendthemen hervor',
          url: 'https://salihmaral.de/de/hizmetler/x-ads'
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'SEO Dienstleistungen',
          description: 'Erreichen Sie Top-Rankings bei Google',
          url: 'https://salihmaral.de/de/hizmetler/seo'
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Negative Bewertungen Löschen',
          description: 'Entfernen Sie ungerechte Bewertungen bei Google Maps',
          url: 'https://salihmaral.de/de/hizmetler/yorum-yonetimi'
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Blog',
          description: 'Neueste Artikel über digitales Marketing',
          url: 'https://salihmaral.de/blog'
        },
        {
          '@type': 'SiteNavigationElement',
          name: 'Kontakt',
          description: 'Kontaktieren Sie uns für eine kostenlose Beratung',
          url: 'https://salihmaral.de/#contact'
        }
      ]
    },
    // ItemList - Services List for Rich Results
    {
      '@type': 'ItemList',
      '@id': 'https://salihmaral.de/#services-list',
      name: 'Digital Marketing Dienstleistungen',
      description: 'Unsere professionellen Digital Marketing Services',
      numberOfItems: 6,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Google Ads Management',
          description: 'Maximaler ROI in Such-, Display-, Shopping- und YouTube-Kampagnen. Professionelles Google Ads Management.',
          url: 'https://salihmaral.de/de/hizmetler/google-ads',
          item: {
            '@type': 'Service',
            name: 'Google Ads Management',
            description: 'Maximaler ROI in Such-, Display-, Shopping- und YouTube-Kampagnen',
            provider: { '@id': 'https://salihmaral.de/#organization' },
            serviceType: 'Google Ads Management',
            areaServed: 'DE'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Meta Ads (Facebook & Instagram)',
          description: 'Erreichen Sie Ihre Zielgruppe auf Facebook und Instagram mit gezielten Werbekampagnen.',
          url: 'https://salihmaral.de/de/hizmetler/meta-ads',
          item: {
            '@type': 'Service',
            name: 'Meta Ads Management',
            description: 'Facebook und Instagram Werbekampagnen',
            provider: { '@id': 'https://salihmaral.de/#organization' },
            serviceType: 'Social Media Advertising',
            areaServed: 'DE'
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'TikTok Ads',
          description: 'Erreichen Sie ein junges, dynamisches Publikum. Starten Sie erfolgreiche TikTok Kampagnen.',
          url: 'https://salihmaral.de/de/hizmetler/tiktok-ads',
          item: {
            '@type': 'Service',
            name: 'TikTok Ads Management',
            description: 'TikTok Werbekampagnen für junge Zielgruppen',
            provider: { '@id': 'https://salihmaral.de/#organization' },
            serviceType: 'TikTok Advertising',
            areaServed: 'DE'
          }
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'X (Twitter) Ads',
          description: 'Heben Sie sich bei Trendthemen hervor. Professionelle X/Twitter Werbekampagnen.',
          url: 'https://salihmaral.de/de/hizmetler/x-ads',
          item: {
            '@type': 'Service',
            name: 'X Ads Management',
            description: 'Twitter/X Werbekampagnen',
            provider: { '@id': 'https://salihmaral.de/#organization' },
            serviceType: 'Twitter Advertising',
            areaServed: 'DE'
          }
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'SEO Dienstleistungen',
          description: 'Erreichen Sie Top-Rankings bei Google. On-Page, Off-Page und technische SEO.',
          url: 'https://salihmaral.de/de/hizmetler/seo',
          item: {
            '@type': 'Service',
            name: 'SEO Services',
            description: 'Suchmaschinenoptimierung für bessere Rankings',
            provider: { '@id': 'https://salihmaral.de/#organization' },
            serviceType: 'Search Engine Optimization',
            areaServed: 'DE'
          }
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Negative Bewertungen Löschen',
          description: 'Entfernen Sie ungerechte Bewertungen bei Google Maps und Trustpilot.',
          url: 'https://salihmaral.de/de/hizmetler/yorum-yonetimi',
          item: {
            '@type': 'Service',
            name: 'Review Management',
            description: 'Professionelles Bewertungsmanagement',
            provider: { '@id': 'https://salihmaral.de/#organization' },
            serviceType: 'Reputation Management',
            areaServed: 'DE'
          }
        }
      ]
    },
    // BreadcrumbList for better navigation understanding
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://salihmaral.de/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://salihmaral.de'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Dienstleistungen',
          item: 'https://salihmaral.de/#services'
        }
      ]
    },
    // Person
    {
      '@type': 'Person',
      '@id': 'https://salihmaral.de/#person',
      name: 'Salih Maral',
      jobTitle: 'Digital Marketing Expert',
      description: 'Erfahrener Digital Marketing Experte spezialisiert auf Google Ads, Meta Ads und SEO mit über 15 Jahren Branchenerfahrung.',
      url: 'https://salihmaral.de',
      image: 'https://salihmaral.de/logo.png',
      worksFor: { '@id': 'https://salihmaral.de/#organization' },
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
    // ProfessionalService
    {
      '@type': 'ProfessionalService',
      '@id': 'https://salihmaral.de/#professionalservice',
      name: 'Salih Maral Digital Marketing',
      description: 'Professionelle Digital Marketing Dienstleistungen: Google Ads, Meta Ads, TikTok Ads, X Ads, SEO und Bewertungsmanagement',
      url: 'https://salihmaral.de',
      priceRange: '€€',
      image: 'https://salihmaral.de/logo.png',
      areaServed: {
        '@type': 'Country',
        name: 'Germany'
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Advertising Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Google Ads Management',
                  url: 'https://salihmaral.de/de/hizmetler/google-ads'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Meta Ads Management',
                  url: 'https://salihmaral.de/de/hizmetler/meta-ads'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'TikTok Ads',
                  url: 'https://salihmaral.de/de/hizmetler/tiktok-ads'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'X Ads',
                  url: 'https://salihmaral.de/de/hizmetler/x-ads'
                }
              }
            ]
          },
          {
            '@type': 'OfferCatalog',
            name: 'SEO & Reputation',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'SEO Services',
                  url: 'https://salihmaral.de/de/hizmetler/seo'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Review Management',
                  url: 'https://salihmaral.de/de/hizmetler/yorum-yonetimi'
                }
              }
            ]
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
