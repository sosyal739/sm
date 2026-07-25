'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, Sparkles, BookOpen, Clock, ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function AiSearchWidget({ currentLang = 'de' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)

  const labels = {
    de: {
      button: 'AI Suche & Blog',
      placeholder: 'Suchen Sie nach AI, Gemini 3.6, SEO, Google Ads...',
      empty: 'Keine Ergebnisse gefunden.',
      title: 'Yapay Zeka & Blog İçi Akıllı Arama',
      subtitle: 'Sitemizdeki tüm AI, SEO ve Dijital Pazarlama rehberlerinde arama yapın',
      read: 'Weiterlesen'
    },
    en: {
      button: 'AI Search & Blog',
      placeholder: 'Search for AI, Gemini 3.6, SEO, Google Ads...',
      empty: 'No results found.',
      title: 'AI & Smart Blog Search',
      subtitle: 'Search across all AI, SEO, and Digital Marketing guides on our site',
      read: 'Read More'
    },
    tr: {
      button: 'AI Arama & Blog',
      placeholder: 'AI, Gemini 3.6, SEO, Google Ads konularında arayın...',
      empty: 'Sonuç bulunamadı.',
      title: 'Yapay Zeka & Akıllı İçerik Araması',
      subtitle: 'Sitemizdeki tüm Yapay Zeka, SEO ve Dijital Pazarlama rehberlerinde arayın',
      read: 'Devamını Oku'
    }
  }

  const l = labels[currentLang] || labels.de

  // Keyboard shortcut listener (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Auto focus on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Fetch search results on query change
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setLoading(false)
      return
    }

    setLoading(true)
    const timer = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query)}&lang=${currentLang}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.results || [])
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }, 250)

    return () => clearTimeout(timer)
  }, [query, currentLang])

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90 hover:from-blue-500 hover:to-purple-500 text-white font-medium text-sm shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all duration-300 transform hover:-translate-y-0.5 border border-white/10"
        title="Cmd + K / Ctrl + K"
      >
        <Sparkles className="w-4 h-4 animate-pulse text-yellow-300" />
        <span>{l.button}</span>
        <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-semibold bg-white/20 rounded border border-white/30">
          ⌘K
        </kbd>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md transition-opacity">
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden text-slate-100 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/50 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white">{l.title}</h3>
                <p className="text-xs text-slate-400">{l.subtitle}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Input Bar */}
            <div className="relative p-4 border-b border-slate-800 bg-slate-950/40">
              <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={l.placeholder}
                className="w-full pl-11 pr-10 py-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm transition-all"
              />
              {loading ? (
                <Loader2 className="absolute right-7 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400 animate-spin" />
              ) : query ? (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-7 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : null}
            </div>

            {/* Results Container */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {query && !loading && results.length === 0 && (
                <div className="text-center py-8 text-slate-400 text-sm">
                  {l.empty}
                </div>
              )}

              {results.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="group block p-4 rounded-xl bg-slate-800/40 hover:bg-slate-800/90 border border-slate-800 hover:border-indigo-500/40 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {post.category || 'Rehber'}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-slate-400">
                          <Clock className="w-3 h-3" />
                          {post.readTime} min
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors line-clamp-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                        {post.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                  </div>
                </Link>
              ))}

              {!query && (
                <div className="p-4 text-center text-xs text-slate-500">
                  💡 Hızlı ipucu: Gemini 3.6, SEO 2026 veya Ads yazarak hızlı arama yapın.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
