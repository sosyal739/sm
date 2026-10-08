'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Globe, Heart, ArrowRight, ShieldCheck, Calendar, Clock, Sparkles, Flame, Cpu, Search, Layers, Zap, Menu, X, ChevronDown, MapPin, ArrowUpRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import AiSearchWidget from '@/components/AiSearchWidget'
import RoasCpaCalculator from '@/components/RoasCpaCalculator'

const servicesList = {
  de: [
    { title: 'Google Ads Management', slug: 'google-ads' },
    { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
    { title: 'Server-Side Tracking & CAPI', slug: 'server-side-tracking' },
    { title: 'YouTube Ads & Video Growth', slug: 'youtube-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO & GEO Optimierung', slug: 'seo' },
    { title: 'Bewertungsmanagement', slug: 'bewertungsmanagement' }
  ],
  tr: [
    { title: 'Google Ads Yönetimi', slug: 'google-ads' },
    { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
    { title: 'Server-Side Tracking & CAPI', slug: 'server-side-tracking' },
    { title: 'YouTube Ads & Video Büyüme', slug: 'youtube-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO & GEO Optimizasyonu', slug: 'seo' },
    { title: 'Yorum Yönetimi', slug: 'yorum-yonetimi' }
  ],
  en: [
    { title: 'Google Ads Management', slug: 'google-ads' },
    { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
    { title: 'Server-Side Tracking & CAPI', slug: 'server-side-tracking' },
    { title: 'YouTube Ads & Video Growth', slug: 'youtube-ads' },
    { title: 'TikTok Ads', slug: 'tiktok-ads' },
    { title: 'X (Twitter) Ads', slug: 'x-ads' },
    { title: 'SEO & GEO Services', slug: 'seo' },
    { title: 'Review Management', slug: 'review-management' }
  ]
}

const getLocalizedServiceUrl = (targetLang, serviceSlug) => {
  const pathSegment = targetLang === 'de' ? 'dienstleistungen' : targetLang === 'en' ? 'services' : 'hizmetler'
  let slug = serviceSlug
  if (serviceSlug === 'bewertungsmanagement' || serviceSlug === 'yorum-yonetimi' || serviceSlug === 'review-management') {
    slug = targetLang === 'de' ? 'bewertungsmanagement' : targetLang === 'en' ? 'review-management' : 'yorum-yonetimi'
  }
  return `/${targetLang}/${pathSegment}/${slug}`
}

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
    footer: '© 2026 Salih Maral. Tüm hakları saklıdır.',
    nav: {
      services: 'Hizmetler',
      standorte: 'Şehirler',
      about: 'Hakkımda',
      contact: 'İletişim'
    }
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
    footer: '© 2026 Salih Maral. Alle Rechte vorbehalten.',
    nav: {
      services: 'Dienstleistungen',
      standorte: 'Standorte',
      about: 'Über mich',
      contact: 'Kontakt'
    }
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
    footer: '© 2026 Salih Maral. All rights reserved.',
    nav: {
      services: 'Services',
      standorte: 'Locations',
      about: 'About',
      contact: 'Contact'
    }
  }
}

export default function BlogPageClient({ initialPosts = [] }) {
  const router = useRouter()
  const [lang, setLang] = useState('de')
  const [posts, setPosts] = useState(initialPosts || [])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage')
    if (savedLang && ['de', 'en', 'tr'].includes(savedLang)) {
      setLang(savedLang)
    } else {
      setLoading(true)
    }
  }, [])

  useEffect(() => {
    if (lang === 'de' && initialPosts && initialPosts.length > 0 && posts.length === initialPosts.length) {
      return
    }
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
  }, [lang, initialPosts])

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
      id: 'ngo-grants',
      name: lang === 'tr' ? 'İslami STK & Ad Grants' : lang === 'de' ? 'NGO & Hilfsorganisationen' : 'NGO & Charities',
      icon: Heart,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      activeShadow: 'shadow-emerald-500/30'
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

  const isNgoGrantsPost = (post) => {
    const catLower = (post.category || '').toLowerCase()
    const titleLower = (post.title || '').toLowerCase()
    const slugLower = (post.slug || '').toLowerCase()
    return (
      catLower.includes('stk') ||
      catLower.includes('ngo') ||
      catLower.includes('charit') ||
      catLower.includes('hilfsorganisation') ||
      slugLower.includes('ad-grants') ||
      slugLower.includes('ramazan') ||
      slugLower.includes('su-kuyusu') ||
      titleLower.includes('ad grants') ||
      titleLower.includes('ramazan') ||
      titleLower.includes('qurbani') ||
      titleLower.includes('su kuyusu') ||
      titleLower.includes('spenden') ||
      titleLower.includes('waisen')
    )
  }

  const filteredPosts = posts.filter(post => {
    const isDeBiz = isDeBusinessPost(post)
    const isNgo = isNgoGrantsPost(post)
    
    // When 'all' is selected, show general marketing guides (exclude niche Germany Turkish and NGO posts)
    if (selectedCategory === 'all') {
      return !isDeBiz && !isNgo
    }
    
    // Show Germany Turkish posts ONLY when its dedicated category tab is clicked
    if (selectedCategory === 'de-business') {
      return isDeBiz
    }

    // Show NGO & Islamic Charity posts ONLY when its dedicated category tab is clicked
    if (selectedCategory === 'ngo-grants') {
      return isNgo
    }

    const catLower = (post.category || '').toLowerCase()
    const titleLower = (post.title || '').toLowerCase()
    if (selectedCategory === 'google') return (catLower.includes('google') || titleLower.includes('google')) && !isNgo && !isDeBiz
    if (selectedCategory === 'meta') return (catLower.includes('meta') || titleLower.includes('meta')) && !isNgo && !isDeBiz
    if (selectedCategory === 'seo') return (catLower.includes('seo') || catLower.includes('geo') || titleLower.includes('seo')) && !isNgo && !isDeBiz
    if (selectedCategory === 'ai') return (catLower.includes('yapay') || catLower.includes('künstliche') || catLower.includes('artificial') || titleLower.includes('ai') || titleLower.includes('gemini')) && !isNgo && !isDeBiz
    if (selectedCategory === 'tracking') return (catLower.includes('tracking') || titleLower.includes('tracking') || titleLower.includes('capi')) && !isNgo && !isDeBiz
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-xs">
        <div className="container mx-auto px-4 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo & Partner Badge */}
            <div className="flex items-center gap-3">
              <a href={lang === 'de' ? '/' : `/${lang}`} className="flex items-center gap-2 group">
                <picture>
                  <source srcSet="/logo-sm.webp" type="image/webp" />
                  <img src="/logo.png" alt="Salih Maral Logo" className="h-9 w-auto" width="36" height="36" />
                </picture>
                <span className="text-xl font-black text-gray-900 tracking-tight group-hover:text-[#4285F4] transition-colors">
                  Salih Maral<span className="text-[#4285F4]">.</span>
                </span>
              </a>
              <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/70 text-[11px] font-semibold text-blue-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Offizieller Google Partner
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a href={lang === 'de' ? '/' : `/${lang}`} className="text-sm font-bold text-gray-700 hover:text-[#4285F4] transition-colors">
                {t.home}
              </a>
              <div 
                className="relative group"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors flex items-center py-2 cursor-pointer">
                  {t.nav.services}
                  <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>
                {servicesDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-72 bg-white rounded-xl shadow-2xl p-2 z-50 border border-gray-100 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="py-1">
                      {servicesList[lang].map((s, idx) => (
                        <a
                          key={idx}
                          href={getLocalizedServiceUrl(lang, s.slug)}
                          className="block px-3 py-2 text-xs font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-[#4285F4] transition-colors"
                        >
                          {s.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <a href={`/${lang}/standorte`} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">
                {t.nav.standorte}
              </a>
              <a href="/blog" className="text-sm font-bold text-[#4285F4] transition-colors">
                Blog
              </a>
              <a href={`${lang === 'de' ? '' : `/${lang}`}/#about`} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">
                {t.nav.about}
              </a>
              <a href={`${lang === 'de' ? '' : `/${lang}`}/#contact`} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">
                {t.nav.contact}
              </a>
            </div>

            {/* Right: Search, Languages & Mobile Hamburger */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <AiSearchWidget currentLang={lang} />
              <div className="hidden sm:flex items-center space-x-1 bg-gray-100 p-1 rounded-xl">
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

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                aria-label="Menü"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-4 shadow-xl animate-in fade-in max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between bg-slate-100 p-1.5 rounded-xl border border-slate-200/80">
              <button
                onClick={() => { handleLanguageChange('de'); setMobileMenuOpen(false); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg text-center transition-all ${lang === 'de' ? 'bg-[#4285F4] text-white shadow-xs' : 'text-slate-700'}`}
              >
                🇩🇪 DE
              </button>
              <button
                onClick={() => { handleLanguageChange('en'); setMobileMenuOpen(false); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg text-center transition-all ${lang === 'en' ? 'bg-[#4285F4] text-white shadow-xs' : 'text-slate-700'}`}
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => { handleLanguageChange('tr'); setMobileMenuOpen(false); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg text-center transition-all ${lang === 'tr' ? 'bg-[#4285F4] text-white shadow-xs' : 'text-slate-700'}`}
              >
                🇹🇷 TR
              </button>
            </div>

            <div className="font-bold text-xs uppercase tracking-wider text-gray-400">
              {t.nav.services}
            </div>
            <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-[#4285F4]">
              {servicesList[lang].map((s, idx) => (
                <a
                  key={idx}
                  href={getLocalizedServiceUrl(lang, s.slug)}
                  className="text-xs font-semibold text-gray-700 hover:text-[#4285F4] py-1.5 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {s.title}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-gray-100 flex flex-col space-y-2 text-sm font-semibold">
              <a href={`/${lang}/standorte`} className="text-[#4285F4] hover:underline py-1" onClick={() => setMobileMenuOpen(false)}>
                📍 {t.nav.standorte} (18 Metropolen)
              </a>
              <a href="/blog" className="text-[#4285F4] font-bold py-1" onClick={() => setMobileMenuOpen(false)}>
                📚 Blog & Ratgeber
              </a>
              <a href={`${lang === 'de' ? '' : `/${lang}`}/#about`} className="text-gray-800 hover:text-[#4285F4] py-1" onClick={() => setMobileMenuOpen(false)}>
                👤 {t.nav.about}
              </a>
              <a href={`${lang === 'de' ? '' : `/${lang}`}/#contact`} className="text-gray-800 hover:text-[#4285F4] py-1" onClick={() => setMobileMenuOpen(false)}>
                ✉️ {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Visual Breadcrumb Bar */}
      <div className="pt-20 bg-slate-50/80 border-b border-gray-200/60">
        <div className="container mx-auto px-4 py-2.5">
          <nav className="flex items-center space-x-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
            <a href={lang === 'de' ? '/' : `/${lang}`} className="hover:text-[#4285F4] font-medium transition-colors">
              {t.home}
            </a>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Blog</span>
          </nav>
        </div>
      </div>

      {/* Light Clean Hero Header */}
      <section className="pt-8 pb-12 px-4 bg-gradient-to-b from-blue-50/50 via-white to-transparent">
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

      {/* Regional German Metropolises & Standorte Hub Cross-Link */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200/70 mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>{lang === 'tr' ? 'Almanya Çapında Hizmet Ağı' : lang === 'en' ? 'Nationwide Coverage Across Germany' : 'Deutschlandweite Betreuung'}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              {lang === 'tr'
                ? "Almanya'nın 18 Metropolünde Performans Pazarlaması"
                : lang === 'en'
                ? "Performance Marketing Across Germany's 18 Metropolises"
                : "Performance Marketing in den Top-Metropolen Deutschlands"}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              {lang === 'tr'
                ? 'Dreieich / Frankfurt merkezli ajansımız, Almanya genelindeki işletmelere Google Ads, Meta Ads ve SEO ile ölçülebilir müşteri kazanımı sağlar.'
                : lang === 'en'
                ? 'Based in Dreieich near Frankfurt, we provide measurable customer acquisition via Google Ads, Meta Ads and SEO for businesses across Germany.'
                : 'Von unserem Standort bei Frankfurt betreuen wir Unternehmen und Mittelständler in allen deutschen Metropolregionen mit transparenten Performance-Strategien.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
            {[
              { name: 'Frankfurt am Main', slug: 'frankfurt' },
              { name: 'München', slug: 'muenchen' },
              { name: 'Düsseldorf', slug: 'duesseldorf' },
              { name: 'Köln', slug: 'koeln' },
              { name: 'Berlin', slug: 'berlin' },
              { name: 'Hamburg', slug: 'hamburg' },
              { name: 'Stuttgart', slug: 'stuttgart' },
              { name: 'Nürnberg', slug: 'nuernberg' },
              { name: 'Dortmund', slug: 'dortmund' },
              { name: 'Bonn', slug: 'bonn' },
              { name: 'Hannover', slug: 'hannover' },
              { name: 'Leipzig', slug: 'leipzig' }
            ].map((city) => (
              <a
                key={city.slug}
                href={`/${lang}/standorte/${city.slug}`}
                className="p-3 bg-white rounded-xl border border-gray-200/80 hover:border-[#4285F4] hover:shadow-md transition-all text-center group"
              >
                <div className="text-xs font-bold text-gray-900 group-hover:text-[#4285F4] transition-colors">
                  {city.name}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">
                  {lang === 'tr' ? 'Bölgesel Ajans' : lang === 'en' ? 'Regional Agency' : 'Regionale Betreuung'}
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href={`/${lang}/standorte`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#4285F4] hover:text-blue-700 bg-white border border-blue-200 px-5 py-2.5 rounded-xl shadow-xs hover:shadow transition-all"
            >
              <span>{lang === 'tr' ? 'Tüm 18 Şehir ve Bölge Rehberini Gör' : lang === 'en' ? 'Explore All 18 German Locations' : 'Alle 18 Standorte in Deutschland entdecken'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Rich Agency Footer */}
      <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand & E-E-A-T */}
            <div className="space-y-4">
              <a href={lang === 'de' ? '/' : `/${lang}`} className="inline-block group">
                <span className="text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  Salih Maral<span className="text-blue-500">.</span>
                </span>
              </a>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'tr'
                  ? 'Resmi Google Partner sertifikalı Salih Maral, 17+ yıllık tecrübesiyle Almanya ve Avrupa genelinde Google Ads, Meta Ads, SEO ve Server-Side Tracking ile kârlı büyüme sağlar.'
                  : lang === 'en'
                  ? 'Official Google Partner Salih Maral delivers scalable revenue growth across Germany & Europe through Google Ads, Meta Ads, SEO and Server-Side Tracking with 17+ years experience.'
                  : 'Offizieller Google Partner Salih Maral liefert planbares Umsatzwachstum in Deutschland und Europa durch Google Ads, Meta Ads, SEO und Server-Side Tracking mit über 17 Jahren Erfahrung.'}
              </p>

              {/* Turkish Entrepreneur Badge */}
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/50 text-[11px] text-blue-200">
                <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                  <span>🇩🇪 🇹🇷</span>
                  <span>Sprechen Sie Türkisch?</span>
                </div>
                <div>Bizimle Türkçe görüşebilirsiniz. Almanya'daki Türk işletmelerine ve ihracatçılara ana dilde stratejik danışmanlık sunuyoruz.</div>
              </div>

              <div className="text-xs text-slate-400 space-y-1.5 pt-1">
                <div>Dreieich / Frankfurt am Main &bull; Deutschland</div>
                <div>
                  <a href="mailto:info@salihmaral.de" className="hover:text-blue-400 transition-colors">
                    ✉️ info@salihmaral.de
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Services */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {lang === 'tr' ? 'Hizmetlerimiz' : lang === 'en' ? 'Core Services' : 'Dienstleistungen'}
              </div>
              <ul className="space-y-2 text-xs">
                {servicesList[lang].map((srv, idx) => (
                  <li key={idx}>
                    <a
                      href={getLocalizedServiceUrl(lang, srv.slug)}
                      className="text-slate-400 hover:text-blue-400 transition-colors block"
                    >
                      {srv.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: German Cities */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {lang === 'tr' ? 'Almanya Şehirleri' : lang === 'en' ? 'Locations in Germany' : 'Standorte Deutschland'}
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs">
                {[
                  { name: 'Frankfurt', slug: 'frankfurt' },
                  { name: 'München', slug: 'muenchen' },
                  { name: 'Düsseldorf', slug: 'duesseldorf' },
                  { name: 'Köln', slug: 'koeln' },
                  { name: 'Berlin', slug: 'berlin' },
                  { name: 'Hamburg', slug: 'hamburg' },
                  { name: 'Stuttgart', slug: 'stuttgart' },
                  { name: 'Nürnberg', slug: 'nuernberg' },
                  { name: 'Dortmund', slug: 'dortmund' },
                  { name: 'Bonn', slug: 'bonn' },
                  { name: 'Hannover', slug: 'hannover' },
                  { name: 'Leipzig', slug: 'leipzig' }
                ].map((c) => (
                  <a
                    key={c.slug}
                    href={`/${lang}/standorte/${c.slug}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {c.name}
                  </a>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800">
                <a
                  href={`/${lang}/standorte`}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300"
                >
                  {lang === 'tr' ? 'Tüm 18 Şehri İncele ➔' : lang === 'en' ? 'View All 18 Locations ➔' : 'Alle 18 Standorte ansehen ➔'}
                </a>
              </div>
            </div>

            {/* Col 4: Quick Links & Legal */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {lang === 'tr' ? 'Rehber & Şirket' : lang === 'en' ? 'Guides & Company' : 'Ratgeber & Unternehmen'}
              </div>
              <ul className="space-y-2.5 text-xs mb-6 text-slate-400">
                <li>
                  <a href={lang === 'de' ? '/' : `/${lang}`} className="hover:text-white transition-colors">
                    {lang === 'tr' ? 'Ana Sayfa' : lang === 'en' ? 'Home' : 'Startseite'}
                  </a>
                </li>
                <li>
                  <a href={`${lang === 'de' ? '' : `/${lang}`}/#about`} className="hover:text-white transition-colors">
                    {lang === 'tr' ? 'Hakkımda & Deneyim' : lang === 'en' ? 'About Salih Maral' : 'Über Salih Maral'}
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-blue-400 font-semibold">
                    {lang === 'tr' ? 'Blog & Stratejik Rehberler' : lang === 'en' ? 'Guides & Articles' : 'Ratgeber & Blog'}
                  </a>
                </li>
                <li>
                  <a href="/blog/google-ads-agentur-preise-kosten-deutschland-2026" className="hover:text-white transition-colors">
                    {lang === 'tr' ? 'Google Ads Maliyet & Fiyatlar' : lang === 'en' ? 'Google Ads Pricing 2026' : 'Google Ads Agentur Preise 2026'}
                  </a>
                </li>
                <li>
                  <a href={`${lang === 'de' ? '' : `/${lang}`}/#contact`} className="text-blue-400 hover:underline">
                    {lang === 'tr' ? 'Ücretsiz Analiz Talebi' : lang === 'en' ? 'Request Free Analysis' : 'Kostenlose Analyse anfordern'}
                  </a>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div>
                  <a href="/impressum" className="text-slate-400 hover:text-white transition-colors">
                    Impressum
                  </a>
                </div>
                <div>
                  <a href="/datenschutz" className="text-slate-400 hover:text-white transition-colors">
                    Datenschutz
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              &copy; 2026 Salih Maral &mdash; Offizieller Google Partner. {lang === 'tr' ? 'Tüm hakları saklıdır.' : lang === 'en' ? 'All rights reserved.' : 'Alle Rechte vorbehalten.'}
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>Frankfurt am Main &bull; Dreieich &bull; Deutschland</span>
              <span>&bull;</span>
              <span className="text-slate-400">100% DSGVO-konform</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
