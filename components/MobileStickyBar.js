'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react'

export default function MobileStickyBar({ lang: propLang }) {
  const [lang, setLang] = useState(propLang || 'de')
  const [contactHref, setContactHref] = useState('#contact')

  useEffect(() => {
    let currentLang = propLang
    if (!currentLang && typeof window !== 'undefined') {
      const p = window.location.pathname
      if (p.startsWith('/tr')) currentLang = 'tr'
      else if (p.startsWith('/en')) currentLang = 'en'
      else currentLang = 'de'
    }
    if (currentLang) setLang(currentLang)

    if (typeof window !== 'undefined') {
      const p = window.location.pathname
      if (p === '/' || p === '/tr' || p === '/en') {
        setContactHref('#contact')
      } else {
        setContactHref(currentLang === 'tr' ? '/tr#contact' : currentLang === 'en' ? '/en#contact' : '/#contact')
      }
    }
  }, [propLang])

  const handleContactClick = (e) => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname
      if (p === '/' || p === '/tr' || p === '/en') {
        e.preventDefault()
        const el = document.getElementById('contact')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const isTr = lang === 'tr'
  const isEn = lang === 'en'

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 pt-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-2.5 transition-transform duration-300"
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))' }}
    >
      {/* E-Posta İletişim */}
      <a
        href="mailto:info@salihmaral.de"
        className="inline-flex items-center justify-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-3 px-3.5 rounded-xl transition-colors border border-slate-300/70 cursor-pointer min-h-[44px]"
        aria-label="E-Mail senden"
      >
        <Mail className="w-4 h-4 text-[#4285F4]" />
        <span>{isTr ? 'E-Posta' : 'E-Mail'}</span>
      </a>

      {/* Ücretsiz Teklif Alın */}
      <a
        href={contactHref}
        onClick={handleContactClick}
        className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-[#4285F4] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold py-3 px-3 sm:px-4 rounded-xl shadow-md transition-all cursor-pointer min-h-[44px] text-center"
        aria-label={isTr ? 'Ücretsiz Teklif Alın' : isEn ? 'Get Free Proposal' : 'Kostenloses Angebot anfordern'}
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
        <span className="truncate">{isTr ? 'Ücretsiz Teklif Alın' : isEn ? 'Get Free Proposal' : 'Kostenloses Angebot'}</span>
        <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 shrink-0" />
      </a>
    </div>
  )
}
