import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Salih - Google Ads & SEO Uzmanı | Profesyonel Dijital Pazarlama',
    template: '%s | Salih',
  },
  description: 'Google Ads ve SEO uzmanı. İşletmenizin dijital performansını maksimize ediyoruz. 10+ yıllık tecrübe, 150+ mutlu müşteri, +%200 ortalama trafik artışı.',
  keywords: ['Google Ads', 'SEO uzmanı', 'dijital pazarlama', 'Google Ads yönetimi', 'SEO hizmetleri', 'arama motoru optimizasyonu'],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://salih-portfolio.vercel.app',
    siteName: 'Salih - Google Ads & SEO Uzmanı',
    title: 'Salih - Google Ads & SEO Uzmanı',
    description: 'İşletmenizin dijital performansını maksimize ediyoruz. Google Ads ve SEO stratejileri ile satışlarınızı artırın.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Salih - Google Ads & SEO Uzmanı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salih - Google Ads & SEO Uzmanı',
    description: 'İşletmenizin dijital performansını maksimize ediyoruz',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
