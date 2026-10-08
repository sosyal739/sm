'use client'

import { useParams, useRouter } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Clock, Calendar, Menu, X, ChevronDown, MapPin, ArrowUpRight, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

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
    backToBlog: "Blog'a Dön",
    notFound: 'Blog Yazısı Bulunamadı',
    readTime: 'dk okuma',
    share: 'Paylaş',
    save: 'Kaydet',
    loading: 'Yükleniyor...',
    cta: {
      title: 'Profesyonel Dijital Pazarlama Hizmeti',
      subtitle: 'İşletmenizi büyütmek için hemen iletişime geçin!',
      button1: 'Ücretsiz Teklif Alın',
      button2: 'E-Posta Gönderin'
    },
    footer: '© 2026 Salih Maral. Tüm hakları saklıdır.',
    nav: {
      services: 'Hizmetler',
      standorte: 'Şehirler',
      blog: 'Blog',
      about: 'Hakkımda',
      contact: 'İletişim',
      home: 'Ana Sayfa'
    }
  },
  de: {
    backToBlog: 'Zurück zum Blog',
    notFound: 'Blogbeitrag nicht gefunden',
    readTime: 'Min. Lesezeit',
    share: 'Teilen',
    save: 'Speichern',
    loading: 'Laden...',
    cta: {
      title: 'Professioneller Digital Marketing Service',
      subtitle: 'Kontaktieren Sie uns jetzt, um Ihr Unternehmen zu vergrößern!',
      button1: 'Kostenloses Angebot',
      button2: 'E-Mail senden'
    },
    footer: '© 2026 Salih Maral. Alle Rechte vorbehalten.',
    nav: {
      services: 'Dienstleistungen',
      standorte: 'Standorte',
      blog: 'Blog',
      about: 'Über mich',
      contact: 'Kontakt',
      home: 'Startseite'
    }
  },
  en: {
    backToBlog: 'Back to Blog',
    notFound: 'Blog Post Not Found',
    readTime: 'min read',
    share: 'Share',
    save: 'Save',
    loading: 'Loading...',
    cta: {
      title: 'Professional Digital Marketing Service',
      subtitle: 'Contact us now to grow your business!',
      button1: 'Get Free Proposal',
      button2: 'Send E-Mail'
    },
    footer: '© 2026 Salih Maral. All rights reserved.',
    nav: {
      services: 'Services',
      standorte: 'Locations',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      home: 'Home'
    }
  }
}

export default function BlogDetailClient({ initialPost, initialLang, relatedPosts = [] }) {
  const params = useParams()
  const { slug } = params
  const [lang, setLang] = useState(initialLang || 'de')
  const [post, setPost] = useState(initialPost)
  const [loading, setLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  // Restore preferred language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage')
    if (savedLang && ['de', 'en', 'tr'].includes(savedLang)) {
      setLang(savedLang)
    }
  }, [])

  // Fetch post from API whenever slug or lang changes (skip if matches initial post loaded on server)
  useEffect(() => {
    if (!slug) return
    if (post && post.slug === slug && post.lang === lang) {
      setLoading(false)
      return
    }

    setLoading(true)
    const controller = new AbortController()
    fetch(`/api/blog/${slug}?lang=${lang}`, { signal: controller.signal })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        setPost(data)
        setLoading(false)
        if (data) {
          document.title = `${data.title} | Salih Maral Blog`
          const metaDesc = document.querySelector('meta[name="description"]')
          if (metaDesc) metaDesc.setAttribute('content', (data.excerpt || '').substring(0, 160))
        }
      })
      .catch(err => {
        if (err.name !== 'AbortError') setLoading(false)
      })
    return () => controller.abort()
  }, [slug, lang])

  const handleLanguageChange = (newLang) => {
    setLang(newLang)
    localStorage.setItem('preferredLanguage', newLang)
  }

  const t = translations[lang]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-[#4285F4] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-500">{t.loading}</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{t.notFound}</h1>
          <Button asChild className="bg-[#4285F4]">
            <a href="/blog">{t.backToBlog}</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
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

            {/* Right: Languages & Mobile Hamburger */}
            <div className="flex items-center space-x-2">
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
              <a href="/blog" className="text-gray-800 hover:text-[#4285F4] py-1" onClick={() => setMobileMenuOpen(false)}>
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
              {t.nav.home}
            </a>
            <span>/</span>
            <a href="/blog" className="hover:text-[#4285F4] font-medium transition-colors">
              Blog
            </a>
            {post.category && (
              <>
                <span>/</span>
                <span className="text-gray-600">{post.category}</span>
              </>
            )}
            <span>/</span>
            <span className="text-gray-900 font-semibold truncate max-w-[280px] sm:max-w-md">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* E-E-A-T Guardian Trust Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-[#4285F4]/10 text-[#4285F4] hover:bg-[#4285F4]/20 border border-[#4285F4]/20 font-semibold px-3 py-1">
              {post.category}
            </Badge>
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{lang === 'tr' ? 'Salih Maral Tarafından İnceledi & Doğrulandı' : lang === 'de' ? 'Von Salih Maral geprüft & verifiziert' : 'Reviewed & Verified by Salih Maral'}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">{post.title}</h1>
          
          {/* Author Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
            <div className="flex items-center gap-3">
              <img
                src="/hero.webp"
                alt="Salih Maral"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#4285F4]"
                onError={(e) => { e.target.src = '/logo.png' }}
              />
              <div>
                <p className="text-xs font-bold text-slate-900">Salih Maral</p>
                <p className="text-[11px] text-slate-500 font-medium">Google Ads & SEO Experte (17+ Jahre Erfahrung)</p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-xs text-slate-500">
              <div className="flex items-center space-x-1.5">
                <Calendar className="h-4 w-4 text-[#4285F4]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="h-4 w-4 text-[#4285F4]" />
                <span>{post.readTime} {t.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>

          {/* CTA */}
          <div className="mt-12 p-8 md:p-12 bg-gradient-to-br from-[#4285F4] via-[#3367d6] to-[#34A853] rounded-2xl text-white text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.cta.title}</h3>
            <p className="mb-8 text-white/80 text-lg">{t.cta.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#4285F4] hover:bg-gray-100 font-semibold px-8" asChild>
                <a href={`${lang === 'de' ? '' : `/${lang}`}/#contact`}>{t.cta.button1}</a>
              </Button>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 flex items-center gap-2" asChild>
                <a href="mailto:info@salihmaral.de">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>{t.cta.button2}</span>
                </a>
              </Button>
            </div>
          </div>

          {/* SEO Internal Linking Mesh: Services & Standorte & Guides */}
          <div className="mt-14 pt-10 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              {/* Pillar 1: Services */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
                  <span>{lang === 'de' ? 'Dienstleistungen' : lang === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}</span>
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href={`/${lang === 'de' ? 'de/dienstleistungen' : lang === 'tr' ? 'tr/hizmetler' : 'en/services'}/google-ads`} className="hover:text-[#4285F4] hover:underline">Google Ads Management</a></li>
                  <li><a href={`/${lang === 'de' ? 'de/dienstleistungen' : lang === 'tr' ? 'tr/hizmetler' : 'en/services'}/meta-ads`} className="hover:text-[#4285F4] hover:underline">Meta Ads (Facebook & Instagram)</a></li>
                  <li><a href={`/${lang === 'de' ? 'de/dienstleistungen' : lang === 'tr' ? 'tr/hizmetler' : 'en/services'}/youtube-ads`} className="hover:text-[#4285F4] hover:underline">YouTube Ads & Video Growth</a></li>
                  <li><a href={`/${lang === 'de' ? 'de/dienstleistungen' : lang === 'tr' ? 'tr/hizmetler' : 'en/services'}/server-side-tracking`} className="hover:text-[#4285F4] hover:underline">Server-Side Tracking (CAPI)</a></li>
                  <li><a href={`/${lang === 'de' ? 'de/dienstleistungen' : lang === 'tr' ? 'tr/hizmetler' : 'en/services'}/seo`} className="hover:text-[#4285F4] hover:underline">SEO & GEO Optimization</a></li>
                </ul>
              </div>

              {/* Pillar 2: German Metropoles */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{lang === 'de' ? 'Standorte in Deutschland' : lang === 'tr' ? 'Almanya Lokasyonları' : 'Locations in Germany'}</span>
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href={`/${lang}/standorte/frankfurt`} className="hover:text-[#4285F4] hover:underline">Frankfurt am Main (Hessen)</a></li>
                  <li><a href={`/${lang}/standorte/muenchen`} className="hover:text-[#4285F4] hover:underline">München (Bayern)</a></li>
                  <li><a href={`/${lang}/standorte/berlin`} className="hover:text-[#4285F4] hover:underline">Berlin (Hauptstadt)</a></li>
                  <li><a href={`/${lang}/standorte/koeln`} className="hover:text-[#4285F4] hover:underline">Köln & Bonn (Rheinland)</a></li>
                  <li><a href={`/${lang}/standorte/duesseldorf`} className="hover:text-[#4285F4] hover:underline">Düsseldorf (NRW)</a></li>
                  <li><a href={`/${lang}/standorte`} className="text-[#4285F4] font-semibold hover:underline block pt-1">{lang === 'de' ? 'Alle Standorte anzeigen →' : lang === 'tr' ? 'Tüm Şehirleri Gör →' : 'View all locations →'}</a></li>
                </ul>
              </div>

              {/* Pillar 3: High-Converting Conversion Guides */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>{lang === 'de' ? 'Empfohlene Leitfäden' : lang === 'tr' ? 'Popüler Rehberler' : 'Top Strategy Guides'}</span>
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/blog/google-ads-fixpreis-vs-prozent-agentur-modell-2026" className="hover:text-[#4285F4] hover:underline">Google Ads Fixpreis vs. Provision</a></li>
                  <li><a href="/blog/meta-reklamlarinda-para-kaybetmeyi-durdurun-2026" className="hover:text-[#4285F4] hover:underline">Meta Ads ROAS Skalierung</a></li>
                  <li><a href="/blog/sanatcilar-muzisyenler-youtube-ads-klip-tanitimi-2026" className="hover:text-[#4285F4] hover:underline">YouTube Ads Klip Tanıtımı</a></li>
                  <li><a href="/blog/server-side-gtm-meta-capi-setup-2026" className="hover:text-[#4285F4] hover:underline">Server-Side Tracking Kurulumu</a></li>
                  <li><a href="/blog" className="text-[#4285F4] font-semibold hover:underline block pt-1">{lang === 'de' ? 'Zum Blog-Archiv →' : lang === 'tr' ? 'Tüm Blog Yazıları →' : 'Explore all articles →'}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section for Internal Linking & Topical Mesh */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-12 bg-slate-50 border-t border-slate-200 mt-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4] block mb-1">
                  {lang === 'de' ? 'Weiterführende Fachartikel' : lang === 'tr' ? 'İlgili Uzman Rehberleri' : 'Related Strategy Guides'}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-gray-900">
                  {lang === 'de' ? 'Das könnte Sie auch interessieren' : lang === 'tr' ? 'İlginizi Çekebilecek Diğer Rehberler' : 'Recommended Reading'}
                </h3>
              </div>
              <a
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-[#4285F4] hover:underline"
              >
                {lang === 'de' ? 'Alle Artikel ansehen' : lang === 'tr' ? 'Tüm Rehberleri Gör' : 'View All Guides'} →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#4285F4]/40 hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {rel.category && (
                      <span className="inline-block text-[11px] font-bold text-[#4285F4] bg-blue-50 px-2.5 py-1 rounded-full mb-3">
                        {rel.category}
                      </span>
                    )}
                    <h4 className="font-bold text-gray-900 group-hover:text-[#4285F4] transition-colors line-clamp-2 mb-2 text-base leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-gray-500 mt-auto">
                    <span>⏱ {rel.readTime || 5} {lang === 'de' ? 'Min. Lesezeit' : lang === 'tr' ? 'dk okuma' : 'min read'}</span>
                    <span className="font-bold text-[#4285F4] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      {lang === 'de' ? 'Lesen' : lang === 'tr' ? 'Oku' : 'Read'} →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Rich Agency Footer */}
      <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12 mt-12">
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

      {/* Custom styles for blog content */}
      <style jsx global>{`
        .blog-content {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #374151;
          line-height: 1.8;
          font-size: 1.1rem;
        }
        .blog-content .lead {
          font-size: 1.25rem;
          color: #6B7280;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid #E5E7EB;
        }
        .blog-content .lead p { margin: 0; }
        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #111827;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid #4285F4;
          display: inline-block;
        }
        .blog-content h3 {
          font-size: 1.35rem;
          font-weight: 600;
          color: #1F2937;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content h4 {
          font-size: 1.15rem;
          font-weight: 600;
          color: #374151;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p { margin-bottom: 1.5rem; }
        .blog-content blockquote {
          background: linear-gradient(135deg, #4285F410 0%, #34A85310 100%);
          border-left: 4px solid #4285F4;
          padding: 1.5rem 2rem;
          margin: 2rem 0;
          border-radius: 0 12px 12px 0;
          font-style: italic;
          font-size: 1.2rem;
          color: #4B5563;
        }
        .blog-content blockquote p { margin: 0; }
        .blog-content ul, .blog-content ol {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.75rem;
          padding-left: 0.5rem;
        }
        .blog-content ol {
          counter-reset: item;
          list-style: none;
          padding-left: 0;
        }
        .blog-content ol > li {
          counter-increment: item;
          position: relative;
          padding-left: 3rem;
          margin-bottom: 1rem;
        }
        .blog-content ol > li:before {
          content: counter(item);
          position: absolute;
          left: 0;
          top: 0;
          width: 2rem;
          height: 2rem;
          background: linear-gradient(135deg, #4285F4, #34A853);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.875rem;
        }
        .blog-content strong { color: #111827; font-weight: 600; }
        .blog-content .feature-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          margin: 2rem 0;
        }
        .blog-content .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          background: #F9FAFB;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          transition: all 0.3s;
        }
        .blog-content .feature-item:hover {
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }
        .blog-content .feature-icon { font-size: 1.75rem; flex-shrink: 0; }
        .blog-content .feature-item strong { display: block; margin-bottom: 0.25rem; color: #111827; }
        .blog-content .feature-item p { margin: 0; font-size: 0.9rem; color: #6B7280; }
        .blog-content .highlight-box {
          background: linear-gradient(135deg, #4285F410 0%, #34A85310 100%);
          border: 1px solid #4285F430;
          border-radius: 16px;
          padding: 1.5rem 2rem;
          margin: 2rem 0;
        }
        .blog-content .highlight-box.warning {
          background: linear-gradient(135deg, #EA433510 0%, #FBBC0410 100%);
          border-color: #EA433530;
        }
        .blog-content .highlight-box.success {
          background: linear-gradient(135deg, #34A85310 0%, #4285F410 100%);
          border-color: #34A85330;
        }
        .blog-content .highlight-box h4 { margin-top: 0; color: #111827; }
        .blog-content .highlight-box p:last-child,
        .blog-content .highlight-box ul:last-child { margin-bottom: 0; }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          display: block;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
        }
        .blog-content th {
          background-color: #F9FAFB;
          font-weight: 600;
          color: #111827;
          border-bottom: 2px solid #E5E7EB;
        }
        .blog-content th, .blog-content td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #E5E7EB;
          min-width: 140px;
          font-size: 0.9rem;
        }
        .blog-content tr:last-child td { border-bottom: none; }
        @media (max-width: 640px) {
          .blog-content h1 { font-size: 1.6rem; }
          .blog-content h2 { font-size: 1.35rem; }
          .blog-content h3 { font-size: 1.15rem; }
          .blog-content blockquote {
            padding: 1rem 1.25rem;
            font-size: 1.05rem;
            margin: 1.25rem 0;
          }
          .blog-content .highlight-box {
            padding: 1.25rem;
            margin: 1.25rem 0;
          }
          .blog-content ol > li {
            padding-left: 2.25rem;
          }
          .blog-content ol > li:before {
            width: 1.6rem;
            height: 1.6rem;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  )
}
