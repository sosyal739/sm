'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Globe, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const translations = {
  tr: {
    home: 'Ana Sayfa',
    heroTitle: 'Dijital Pazarlama Blog',
    heroSubtitle: 'Google Ads, Meta Ads, SEO ve daha fazlası hakkında güncel içerikler',
    readMore: 'Devamını Oku',
    readTime: 'dk okuma',
    footer: '© 2026 Salih Maral. Tüm hakları saklıdır.'
  },
  de: {
    home: 'Startseite',
    heroTitle: 'Digital Marketing Blog',
    heroSubtitle: 'Aktuelle Inhalte über Google Ads, Meta Ads, SEO und mehr',
    readMore: 'Weiterlesen',
    readTime: 'Min. Lesezeit',
    footer: '© 2026 Salih Maral. Alle Rechte vorbehalten.'
  },
  en: {
    home: 'Home',
    heroTitle: 'Digital Marketing Blog',
    heroSubtitle: 'Latest content about Google Ads, Meta Ads, SEO and more',
    readMore: 'Read More',
    readTime: 'min read',
    footer: '© 2026 Salih Maral. All rights reserved.'
  }
}

const blogPosts = {
  tr: [
    {
      id: 1,
      slug: 'google-ads-nedir',
      title: 'Google Ads Nedir ve Neden Yapılmalıdır?',
      excerpt: 'Google Ads, işletmenizin dijital dünyada görünür olmasının en hızlı yoludur. Doğru stratejilerle yatırımınızın karşılığını almanın yollarını keşfedin.',
      category: 'Google Ads',
      date: '2026-01-15',
      readTime: '5'
    },
    {
      id: 2,
      slug: 'meta-ads-basari',
      title: 'Meta Ads ile Başarı: Facebook ve Instagram Reklamcılığı',
      excerpt: 'Facebook ve Instagram\'da etkili reklam kampanyaları nasıl oluşturulur? Hedef kitle segmentasyonundan kreatif stratejilere kadar her şey.',
      category: 'Meta Ads',
      date: '2026-01-18',
      readTime: '6'
    },
    {
      id: 3,
      slug: 'tiktok-ads-rehber',
      title: 'TikTok Ads: Genç Kitleye Ulaşmanın Yeni Yolu',
      excerpt: 'TikTok\'ta viral olmanın ve genç kitleye etkili şekilde ulaşmanın stratejilerini öğrenin.',
      category: 'TikTok Ads',
      date: '2026-01-20',
      readTime: '4'
    },
    {
      id: 4,
      slug: 'seo-stratejileri-2026',
      title: 'SEO Stratejileri 2026: Google\'ın Yeni Algoritması',
      excerpt: 'Google\'ın sürekli değişen algoritmasında üst sıralarda kalmak için yapmanız gerekenler. Teknik SEO ipuçları.',
      category: 'SEO',
      date: '2026-01-22',
      readTime: '8'
    },
    {
      id: 5,
      slug: 'x-twitter-ads',
      title: 'X (Twitter) Reklamları: Gerçek Zamanlı Pazarlama',
      excerpt: 'Trend konularda nasıl öne çıkılır? X reklamları ile gerçek zamanlı pazarlama stratejileri.',
      category: 'X Ads',
      date: '2026-01-25',
      readTime: '5'
    },
    {
      id: 6,
      slug: 'olumsuz-yorum-yonetimi',
      title: 'Olumsuz Yorum Yönetimi: İtibarınızı Koruyun',
      excerpt: 'Google Maps ve Trustpilot\'taki haksız yorumlar işletmenize zarar veriyor mu? Yorum silme süreçleri hakkında bilmeniz gerekenler.',
      category: 'İtibar Yönetimi',
      date: '2026-01-28',
      readTime: '6'
    }
  ],
  de: [
    {
      id: 1,
      slug: 'google-ads-nedir',
      title: 'Was ist Google Ads und warum sollte man es nutzen?',
      excerpt: 'Google Ads ist der schnellste Weg, um Ihr Unternehmen in der digitalen Welt sichtbar zu machen. Entdecken Sie, wie Sie mit den richtigen Strategien Ihren ROI maximieren.',
      category: 'Google Ads',
      date: '2026-01-15',
      readTime: '5'
    },
    {
      id: 2,
      slug: 'meta-ads-basari',
      title: 'Erfolg mit Meta Ads: Facebook und Instagram Werbung',
      excerpt: 'Wie erstellt man effektive Werbekampagnen auf Facebook und Instagram? Von der Zielgruppensegmentierung bis zu kreativen Strategien.',
      category: 'Meta Ads',
      date: '2026-01-18',
      readTime: '6'
    },
    {
      id: 3,
      slug: 'tiktok-ads-rehber',
      title: 'TikTok Ads: Der neue Weg, die junge Zielgruppe zu erreichen',
      excerpt: 'Lernen Sie Strategien, um auf TikTok viral zu werden und junge Zielgruppen effektiv zu erreichen.',
      category: 'TikTok Ads',
      date: '2026-01-20',
      readTime: '4'
    },
    {
      id: 4,
      slug: 'seo-stratejileri-2026',
      title: 'SEO-Strategien 2026: Googles neuer Algorithmus',
      excerpt: 'Was Sie tun müssen, um bei Googles ständig wechselndem Algorithmus an der Spitze zu bleiben. Technische SEO-Tipps.',
      category: 'SEO',
      date: '2026-01-22',
      readTime: '8'
    },
    {
      id: 5,
      slug: 'x-twitter-ads',
      title: 'X (Twitter) Werbung: Echtzeit-Marketing',
      excerpt: 'Wie hebt man sich bei Trendthemen ab? Echtzeit-Marketingstrategien mit X Ads.',
      category: 'X Ads',
      date: '2026-01-25',
      readTime: '5'
    },
    {
      id: 6,
      slug: 'olumsuz-yorum-yonetimi',
      title: 'Bewertungsmanagement: Schützen Sie Ihren Ruf',
      excerpt: 'Schaden unfaire Bewertungen auf Google Maps und Trustpilot Ihrem Unternehmen? Alles über den Löschprozess.',
      category: 'Reputation',
      date: '2026-01-28',
      readTime: '6'
    }
  ],
  en: [
    {
      id: 1,
      slug: 'google-ads-nedir',
      title: 'What is Google Ads and Why Should You Use It?',
      excerpt: 'Google Ads is the fastest way to make your business visible in the digital world. Discover how to maximize your ROI with the right strategies.',
      category: 'Google Ads',
      date: '2026-01-15',
      readTime: '5'
    },
    {
      id: 2,
      slug: 'meta-ads-basari',
      title: 'Success with Meta Ads: Facebook and Instagram Advertising',
      excerpt: 'How to create effective ad campaigns on Facebook and Instagram? From audience segmentation to creative strategies.',
      category: 'Meta Ads',
      date: '2026-01-18',
      readTime: '6'
    },
    {
      id: 3,
      slug: 'tiktok-ads-rehber',
      title: 'TikTok Ads: The New Way to Reach Young Audiences',
      excerpt: 'Learn strategies to go viral on TikTok and effectively reach young audiences.',
      category: 'TikTok Ads',
      date: '2026-01-20',
      readTime: '4'
    },
    {
      id: 4,
      slug: 'seo-stratejileri-2026',
      title: 'SEO Strategies 2026: Google\'s New Algorithm',
      excerpt: 'What you need to do to stay at the top of Google\'s constantly changing algorithm. Technical SEO tips.',
      category: 'SEO',
      date: '2026-01-22',
      readTime: '8'
    },
    {
      id: 5,
      slug: 'x-twitter-ads',
      title: 'X (Twitter) Ads: Real-Time Marketing',
      excerpt: 'How to stand out in trending topics? Real-time marketing strategies with X Ads.',
      category: 'X Ads',
      date: '2026-01-25',
      readTime: '5'
    },
    {
      id: 6,
      slug: 'olumsuz-yorum-yonetimi',
      title: 'Review Management: Protect Your Reputation',
      excerpt: 'Are unfair reviews on Google Maps and Trustpilot hurting your business? Everything about the removal process.',
      category: 'Reputation',
      date: '2026-01-28',
      readTime: '6'
    }
  ]
}

export default function BlogPage() {
  const router = useRouter()
  const [lang, setLang] = useState('de')

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage')
    if (savedLang && ['de', 'en', 'tr'].includes(savedLang)) {
      setLang(savedLang)
    }
  }, [])

  const handleLanguageChange = (newLang) => {
    setLang(newLang)
    localStorage.setItem('preferredLanguage', newLang)
  }

  const t = translations[lang]
  const posts = blogPosts[lang]

  const getCategoryImage = (slug) => {
    const images = {
      'google-ads-nedir': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80',
      'meta-ads-basari': 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=300&fit=crop&q=80',
      'tiktok-ads-rehber': 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=600&h=300&fit=crop&q=80',
      'seo-stratejileri-2026': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=300&fit=crop&q=80',
      'x-twitter-ads': 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=300&fit=crop&q=80',
      'olumsuz-yorum-yonetimi': 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=300&fit=crop&q=80',
    }
    return images[slug] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80'
  }

  const getCategoryLogo = (category) => {
    if (category.includes('Google')) return (
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="h-8 w-auto drop-shadow-lg" />
    )
    if (category.includes('Meta') || category.includes('Facebook')) return (
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 w-auto drop-shadow-lg brightness-0 invert" />
    )
    if (category.includes('TikTok')) return (
      <svg className="h-8 w-8 drop-shadow-lg" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
    )
    if (category.includes('SEO')) return (
      <svg className="h-8 w-8 drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    )
    if (category.includes('X') || category.includes('Twitter')) return (
      <svg className="h-8 w-8 drop-shadow-lg" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    )
    return (
      <svg className="h-8 w-8 drop-shadow-lg" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* SEO */}
      <head>
        <link rel="canonical" href="https://salihmaral.de/blog" />
        <title>Blog | Salih Maral Digital Marketing</title>
        <meta name="description" content="Dijital pazarlama, Google Ads, Meta Ads, SEO ve daha fazlası hakkında güncel blog yazıları." />
      </head>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push('/')} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5 text-[#4285F4]" />
              <span className="font-semibold text-gray-700">{t.home}</span>
            </button>
            <a href="/">
              <img src="/logo.png" alt="Salih Maral Logo" className="h-10 w-auto" />
            </a>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleLanguageChange('de')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${lang === 'de' ? 'bg-[#4285F4] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                DE
              </button>
              <button 
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${lang === 'en' ? 'bg-[#4285F4] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                EN
              </button>
              <button 
                onClick={() => handleLanguageChange('tr')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${lang === 'tr' ? 'bg-[#4285F4] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                TR
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-[#4285F4]/10 rounded-full px-4 py-2 mb-6">
            <Globe className="h-4 w-4 text-[#4285F4]" />
            <span className="text-sm font-medium text-[#4285F4]">Digital Marketing Insights</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            {t.heroTitle}
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">{t.heroSubtitle}</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <a key={post.id} href={`/blog/${post.slug}`} className="block h-full group">
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-white">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={getCategoryImage(post.slug)} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 right-4 opacity-80 group-hover:opacity-100 transition-opacity">
                      {getCategoryLogo(post.category)}
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800 hover:bg-white">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="pt-6 pb-8">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#4285F4] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime} {t.readTime}</span>
                      </div>
                      <div className="flex items-center text-[#4285F4] font-medium text-sm group-hover:translate-x-1 transition-transform">
                        {t.readMore}
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-4 text-center">
          <a href="/" className="inline-block">
            <img src="/logo.png" alt="Salih Maral Logo" className="h-12 w-auto mx-auto" />
          </a>
          <p className="text-sm text-gray-400 mt-4">{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}
