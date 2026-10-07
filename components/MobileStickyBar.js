'use client'

import React, { useState, useEffect } from 'react'
import { Phone, ArrowUpRight, Mail } from 'lucide-react'
import { trackPhoneClick } from '@/lib/analytics'

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

  const isTr = lang === 'tr'
  const isEn = lang === 'en'

  const handlePhone = () => {
    try {
      trackPhoneClick()
    } catch (e) {
      // analytics fail-safe
    }
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-2.5 transition-transform duration-300">
      {/* Telefon ile Ara */}
      <a
        href="tel:+491724106463"
        onClick={handlePhone}
        className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-3 px-3 rounded-xl transition-colors border border-slate-300/70 cursor-pointer"
        aria-label={isTr ? 'Doğrudan Ara' : isEn ? 'Call directly' : 'Direkt anrufen'}
      >
        <Phone className="w-3.5 h-3.5 text-[#4285F4]" />
        <span>{isTr ? 'Hemen Ara' : isEn ? 'Call Now' : 'Anrufen'}</span>
      </a>

      {/* Ücretsiz Teklif Alın */}
      <a
        href={contactHref}
        className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-[#4285F4] hover:bg-blue-700 text-white text-xs font-bold py-3 px-3 rounded-xl shadow-md transition-all cursor-pointer"
        aria-label={isTr ? 'Ücretsiz Teklif Alın' : isEn ? 'Get Free Proposal' : 'Kostenloses Angebot anfordern'}
      >
        <Mail className="w-3.5 h-3.5" />
        <span>{isTr ? 'Ücretsiz Teklif Alın' : isEn ? 'Free Proposal' : 'Kostenloses Angebot'}</span>
        <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
      </a>
    </div>
  )
}
