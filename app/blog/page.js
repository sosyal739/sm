'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Globe, ArrowRight, ShieldCheck, Calendar, Clock, Sparkles, Flame, Cpu, Search, Layers, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import AiSearchWidget from '@/components/AiSearchWidget'
import RoasCpaCalculator from '@/components/RoasCpaCalculator'

const translations = {
  tr: {
    home: 'Ana Sayfa',
    heroTitle: 'Dijital Pazarlama & AI Blog',
    heroSubtitle: 'Google Ads, Meta Ads, SEO, GEO ve Yapay Zeka hakkında güncel uzman rehberler',
    readMore: 'Devamını Oku',
    readTime: 'dk okuma',
    featured: '🔥 ÖNE ÇIKAN BAŞ MAKALE',
    verified: 'Salih Maral Tarafından İnceledi & Doğrulandı',
    topicHubs: 'TOPIC HUBS (KONU MERKEZLERİ)',
    footer: '© 2026 Salih Maral. Tüm hakları saklıdır.'
  },
  de: {
    home: 'Startseite',
    heroTitle: 'Digital Marketing & KI Blog',
    heroSubtitle: 'Experten-Leitfäden über Google Ads, Meta Ads, SEO, GEO und KI',
    readMore: 'Weiterlesen',
    readTime: 'Min. Lesezeit',
    featured: '🔥 EMPFOHLENER LEITBEITRAG',
    verified: 'Von Salih Maral geprüft & verifiziert',
    topicHubs: 'TOPIC HUBS (THEMEN-ZENTREN)',
    footer: '© 2026 Salih Maral. Alle Rechte vorbehalten.'
  },
  en: {
    home: 'Home',
    heroTitle: 'Digital Marketing & AI Blog',
    heroSubtitle: 'Expert guides on Google Ads, Meta Ads, SEO, GEO, and AI',
    readMore: 'Read More',
    readTime: 'min read',
    featured: '🔥 FEATURED LEAD STORY',
    verified: 'Reviewed & Verified by Salih Maral',
    topicHubs: 'TOPIC HUBS',
    footer: '© 2026 Salih Maral. All rights reserved.'
  }
}

export default function BlogPage() {
  const router = useRouter()
  const [lang, setLang] = useState('de')
  const [posts, setPosts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage')
    if (savedLang && ['de', 'en', 'tr'].includes(savedLang)) {
      setLang(savedLang)
    } else {
      setLoading(true)
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()
    fetch(`/api/blog?lang=${lang}`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => {
        setPosts(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(err => {
        if (err.name !== 'AbortError') setLoading(false)
      })
    return () => controller.abort()
  }, [lang])

  const handleLanguageChange = (newLang) => {
    setLang(newLang)
    localStorage.setItem('preferredLanguage', newLang)
  }

  const t = translations[lang]

  const categories = [
    {
      id: 'all',
      name: lang === 'tr' ? 'Tüm Konular' : lang === 'de' ? 'Alle Themen' : 'All Topics',
      icon: Layers,
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      activeShadow: 'shadow-indigo-500/30'
    },
    {
      id: 'de-business',
      name: lang === 'tr' ? 'Almanya Türk İşletmeleri' : lang === 'de' ? 'Türkische Unternehmen in DE' : 'Turkish Businesses in DE',
      icon: Globe,
      gradient: 'from-red-600 via-rose-600 to-amber-600',
      activeShadow: 'shadow-red-500/30'
    },
    {
      id: 'google',
      name: 'Google Ads',
      icon: Zap,
      gradient: 'from-blue-500 via-cyan-500 to-emerald-500',
      activeShadow: 'shadow-cyan-500/30'
    },
    {
      id: 'meta',
      name: 'Meta Ads',
      icon: Flame,
      gradient: 'from-purple-600 via-pink-600 to-rose-500',
      activeShadow: 'shadow-pink-500/30'
    },
    {
      id: 'seo',
      name: 'SEO & GEO',
      icon: Search,
      gradient: 'from-emerald-500 via-[#4285F4] to-blue-600',
      activeShadow: 'shadow-emerald-500/30'
    },
    {
      id: 'ai',
      name: lang === 'tr' ? 'Yapay Zeka' : lang === 'de' ? 'Künstliche Intelligenz' : 'Artificial Intelligence',
      icon: Cpu,
      gradient: 'from-amber-500 via-orange-500 to-rose-500',
      activeShadow: 'shadow-orange-500/30'
    },
    {
      id: 'tracking',
      name: 'Server-Side Tracking',
      icon: ShieldCheck,
      gradient: 'from-slate-700 via-indigo-800 to-blue-900',
      activeShadow: 'shadow-indigo-800/30'
    },
  ]

  const isDeBusinessPost = (post) => {
    const catLower = (post.category || '').toLowerCase()
    const titleLower = (post.title || '').toLowerCase()
    const slugLower = (post.slug || '').toLowerCase()
    return (
      catLower.includes('türk') ||
      catLower.includes('almanya') ||
      catLower.includes('turkish') ||
      slugLower.includes('almanya') ||
      titleLower.includes('almanya') ||
      titleLower.includes('deutschland')
    )
  }

  const filteredPosts = posts.filter(post => {
    const isDeBiz = isDeBusinessPost(post)
    
    // When 'all' is selected, show general marketing, Google Ads, Meta, SEO, AI guides (exclude niche Germany Turkish posts)
    if (selectedCategory === 'all') {
      return !isDeBiz
    }
    
    // Show Germany Turkish posts ONLY when its dedicated category tab is clicked
    if (selectedCategory === 'de-business') {
      return isDeBiz
    }

    const catLower = (post.category || '').toLowerCase()
    const titleLower = (post.title || '').toLowerCase()
    if (selectedCategory === 'google') return catLower.includes('google') || titleLower.includes('google')
    if (selectedCategory === 'meta') return catLower.includes('meta') || titleLower.includes('meta')
    if (selectedCategory === 'seo') return catLower.includes('seo') || catLower.includes('geo') || titleLower.includes('seo')
    if (selectedCategory === 'ai') return catLower.includes('yapay') || catLower.includes('künstliche') || catLower.includes('artificial') || titleLower.includes('ai') || titleLower.includes('gemini')
    if (selectedCategory === 'tracking') return catLower.includes('tracking') || titleLower.includes('tracking') || titleLower.includes('capi')
    return true
  })

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null
  const gridPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : filteredPosts

  const getCategoryImage = (post) => {
    if (post.coverImage) return post.coverImage
    return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900">
      {/* Light Clean Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
        <div className="container mx-auto px-4 py-3.5">
          <div className="flex items-center justify-between">
            <a href={lang === 'de' ? '/' : `/${lang}`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5 text-[#4285F4]" />
              <span className="font-semibold text-gray-700 hidden sm:inline">{t.home}</span>
            </a>
            <a href={lang === 'de' ? '/' : `/${lang}`}>
              <picture>
                <source srcSet="/logo-sm.webp" type="image/webp" />
                <img src="/logo.png" alt="Salih Maral Logo" className="h-9 w-auto" width="36" height="36" />
              </picture>
            </a>
            <div className="flex items-center space-x-3">
              <AiSearchWidget currentLang={lang} />
              <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => handleLanguageChange('de')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${lang === 'de' ? 'bg-[#4285F4] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  DE
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${lang === 'en' ? 'bg-[#4285F4] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange('tr')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${lang === 'tr' ? 'bg-[#4285F4] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  TR
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Light Clean Hero Header */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-blue-50/50 via-white to-transparent">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-[#4285F4]/10 border border-[#4285F4]/20 rounded-full px-4 py-1.5 mb-5 text-[#4285F4]">
            <Globe className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Digital Marketing Insights</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-3 text-gray-900 tracking-tight leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">{t.heroSubtitle}</p>
        </div>
      </section>

      {/* ULTRA VIBRANT & COLORFUL TOPIC HUBS BAR */}
      <section className="sticky top-[65px] z-40 bg-white/95 backdrop-blur-xl border-y border-gray-200/90 py-4 px-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between gap-4 overflow-x-auto custom-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4285F4]"></span>
            </span>
            <span className="text-xs font-extrabold text-[#4285F4] uppercase tracking-widest hidden md:inline">
              {t.topicHubs}
            </span>
          </div>

          {/* Ultra-Vibrant Colorful Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto custom-scrollbar py-1">
            {categories.map((cat) => {
              const IconComp = cat.icon
              const isActive = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-300 transform hover:-translate-y-0.5 ${isActive ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg ${cat.activeShadow} scale-105 border border-white/30` : 'bg-gray-100/90 text-gray-700 hover:text-gray-900 hover:bg-gray-200 border border-gray-200/80'}`}
                >
                  <IconComp className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-[#4285F4]'}`} />
                  <span>{cat.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area (Clean Light Grid) */}
      <section className="py-12 px-4">
        <div className="container mx-auto space-y-12">
          {/* Guardian Featured Lead Story Banner */}
          {!loading && featuredPost && selectedCategory === 'all' && (
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden">
                  <img
                    src={getCategoryImage(featuredPost)}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80' }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#4285F4] text-white font-bold px-3.5 py-1.5 shadow-md">
                      {t.featured}
                    </Badge>
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    {/* E-E-A-T Trust Badge */}
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full w-fit mb-4">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>{t.verified}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 group-hover:text-[#4285F4] transition-colors leading-tight">
                      <a href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</a>
                    </h2>
                    <p className="text-gray-600 text-sm mt-3 line-clamp-3 leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {featuredPost.readTime} {t.readTime}
                      </span>
                    </div>
                    <a
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1 text-[#4285F4] font-bold text-xs hover:translate-x-1 transition-transform"
                    >
                      {t.readMore} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-200 overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                  </div>
                </div>
              ))
            ) : gridPosts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="block h-full group">
                <Card className="h-full border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden bg-white rounded-3xl flex flex-col justify-between">
                  <div>
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={getCategoryImage(post)}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-white/90 text-gray-800 font-semibold shadow-sm backdrop-blur-sm">
                          {post.category || 'Rehber'}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      {/* E-E-A-T Verified Small Badge */}
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 mb-2.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Salih Maral Verifiziert</span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#4285F4] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-xs mt-2.5 line-clamp-3 leading-relaxed font-normal">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </div>

                  <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 text-xs text-gray-400 mt-auto">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {post.readTime} {t.readTime}
                    </span>
                    <span className="inline-flex items-center text-[#4285F4] font-semibold group-hover:translate-x-1 transition-transform">
                      {t.readMore}
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </span>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          {/* Interactive ROAS & CPA ROI Calculator */}
          <RoasCpaCalculator currentLang={lang} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white mt-16 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <a href={lang === 'de' ? '/' : `/${lang}`} className="inline-block mb-4">
            <picture>
              <source srcSet="/logo-md.webp" type="image/webp" />
              <img src="/logo.png" alt="Salih Maral Logo" className="h-12 w-auto mx-auto" width="48" height="48" loading="lazy" />
            </picture>
          </a>
          <p className="text-xs text-gray-400">{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}
