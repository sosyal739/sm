'use client'

import React, { useState, useEffect } from 'react'
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react'
import { trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics'

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

  const waText = isTr
    ? encodeURIComponent('Merhaba Salih Bey, Google Ads ve dijital pazarlama konusunda bilgi ve teklif almak istiyorum.')
    : isEn
    ? encodeURIComponent('Hello Salih, I would like to get an audit and proposal for Google Ads management.')
    : encodeURIComponent('Hallo Herr Maral, ich interessiere mich für eine Google Ads Betreuung und ein unverbindliches Erstgespräch.')

  const waUrl = `https://wa.me/491724106463?text=${waText}`

  const handleWhatsApp = () => {
    try {
      trackWhatsAppClick()
    } catch (e) {
      // analytics fail-safe
    }
  }

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
        className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 px-2 rounded-xl transition-colors border border-slate-300/70"
        aria-label={isTr ? 'Doğrudan Ara' : isEn ? 'Call directly' : 'Direkt anrufen'}
      >
        <Phone className="w-3.5 h-3.5 text-blue-600" />
        <span>{isTr ? 'Hemen Ara' : isEn ? 'Call Now' : 'Anrufen'}</span>
      </a>

      {/* WhatsApp Hızlı Danışma */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsApp}
        className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-2 rounded-xl shadow-md transition-all"
        aria-label="WhatsApp Nachricht senden"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>WhatsApp</span>
      </a>

      {/* Teklif / Erstgespräch */}
      <a
        href={contactHref}
        className="flex-1 inline-flex items-center justify-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-2 rounded-xl shadow-md transition-all"
        aria-label={isTr ? 'Ücretsiz Teklif Al' : isEn ? 'Request Free Audit' : 'Kostenloses Erstgespräch anfragen'}
      >
        <span>{isTr ? 'Teklif Al' : isEn ? 'Audit' : 'Angebot'}</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  )
}
