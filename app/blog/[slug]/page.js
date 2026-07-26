'use client'

import { useParams, useRouter } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from 'lucide-react'
import { useState, useEffect } from 'react'

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
      button1: 'Teklif Alın',
      button2: 'WhatsApp'
    },
    footer: '© 2026 Salih Maral. Tüm hakları saklıdır.'
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
      button1: 'Angebot anfordern',
      button2: 'WhatsApp'
    },
    footer: '© 2026 Salih Maral. Alle Rechte vorbehalten.'
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
      button1: 'Get a Quote',
      button2: 'WhatsApp'
    },
    footer: '© 2026 Salih Maral. All rights reserved.'
  }
}

export default function BlogDetailPage() {
  const params = useParams()
  const { slug } = params
  const [lang, setLang] = useState('de')
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  // Restore preferred language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage')
    if (savedLang && ['de', 'en', 'tr'].includes(savedLang)) {
      setLang(savedLang)
    }
  }, [])

  // Fetch post from API whenever slug or lang changes
  useEffect(() => {
    if (!slug) return
    setLoading(true)
    setPost(null)
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
    return () => controller.abort() // cancel if lang/slug changes before fetch completes
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

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://salihmaral.de/blog/${slug}#article`,
        "url": `https://salihmaral.de/blog/${slug}`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://salihmaral.de/blog/${slug}`
        },
        "headline": post.title,
        "description": post.excerpt || post.title,
        "image": post.coverImage || "https://salihmaral.de/logo.png",
        "author": {
          "@type": "Person",
          "@id": "https://salihmaral.de/#person",
          "name": "Salih Maral",
          "url": "https://salihmaral.de"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://salihmaral.de/#organization",
          "name": "Salih Maral Digital Marketing",
          "logo": {
            "@type": "ImageObject",
            "url": "https://salihmaral.de/logo.png"
          }
        },
        "datePublished": post.date,
        "dateModified": post.date,
        "inLanguage": lang === 'de' ? 'de-DE' : lang === 'tr' ? 'tr-TR' : 'en-US',
        "articleSection": post.category || "Digital Marketing",
        "keywords": post.category ? `${post.category}, Digital Marketing, Salih Maral` : "Digital Marketing, Salih Maral",
        "isPartOf": { "@id": "https://salihmaral.de/#website" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://salihmaral.de/blog/${slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": lang === 'de' ? 'Startseite' : lang === 'tr' ? 'Ana Sayfa' : 'Home',
            "item": `https://salihmaral.de${lang === 'de' ? '/' : `/${lang}`}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://salihmaral.de/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title
          }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* SEO */}
      <head>
        <link rel="canonical" href={`https://salihmaral.de/blog/${slug}`} />
        <title>{post.title} | Salih Maral Blog</title>
        <meta name="description" content={post.excerpt} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
      </head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/blog" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5 text-[#4285F4]" />
              <span className="font-semibold text-gray-700 hidden sm:inline">{t.backToBlog}</span>
            </a>
            <a href={lang === 'de' ? '/' : `/${lang}`}>
              <picture><source srcSet="/logo-sm.webp" type="image/webp" /><img src="/logo.png" alt="Salih Maral Logo" className="h-10 w-auto" width="40" height="40" /></picture>
            </a>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleLanguageChange('de')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${lang === 'de' ? 'bg-[#4285F4] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >DE</button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${lang === 'en' ? 'bg-[#4285F4] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >EN</button>
              <button
                onClick={() => handleLanguageChange('tr')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${lang === 'tr' ? 'bg-[#4285F4] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >TR</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-8 px-4">
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
                <p className="text-[11px] text-slate-500 font-medium">Google Ads & SEO Experte (15+ Jahre Erfahrung)</p>
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
              <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] font-semibold px-8" asChild>
                <a href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Digital%20Marketing%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.' : 'Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.'}`} target="_blank">{t.cta.button2}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-4 text-center">
          <a href={lang === 'de' ? '/' : `/${lang}`} className="inline-block">
            <picture><source srcSet="/logo-md.webp" type="image/webp" /><img src="/logo.png" alt="Salih Maral Logo" className="h-12 w-auto mx-auto" width="48" height="48" loading="lazy" /></picture>
          </a>
          <p className="text-sm text-gray-400 mt-4">{t.footer}</p>
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
