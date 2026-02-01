import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Salih Maral - Digital Marketing Expert | Google Ads, Meta Ads & SEO',
  description: 'Professionelle Digital Marketing Lösungen mit Google Ads, Facebook/Meta Ads und SEO. 15+ Jahre Erfahrung. Steigern Sie Ihren ROI und Traffic.',
  keywords: 'Google Ads, Meta Ads, Facebook Ads, SEO, Digital Marketing, Online Marketing, PPC, Social Media Marketing',
  authors: [{ name: 'Salih Maral' }],
  openGraph: {
    title: 'Salih Maral - Digital Marketing Expert',
    description: 'Google Ads, Meta Ads & SEO Experte mit 15+ Jahren Erfahrung',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}