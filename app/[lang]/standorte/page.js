'use client'

import React, { use } from 'react'
import Link from 'next/link'
import { MapPin, ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Sparkles, Building2 } from 'lucide-react'

const cities = [
  { id: 'frankfurt', name: 'Frankfurt am Main', region: 'Hessen / Rhein-Main', clients: '85+', roas: '4.4x', focus: 'B2B, Finanzen & Kliniken' },
  { id: 'muenchen', name: 'München', region: 'Bayern', clients: '90+', roas: '4.6x', focus: 'High-End E-Commerce & Tech' },
  { id: 'berlin', name: 'Berlin', region: 'Berlin', clients: '80+', roas: '4.3x', focus: 'Start-ups, D2C & SaaS' },
  { id: 'hamburg', name: 'Hamburg', region: 'Hamburg', clients: '75+', roas: '4.4x', focus: 'E-Commerce & Handel' },
  { id: 'koeln', name: 'Köln', region: 'Nordrhein-Westfalen', clients: '60+', roas: '4.3x', focus: 'Medien, Praxen & Gastro' },
  { id: 'duesseldorf', name: 'Düsseldorf', region: 'Nordrhein-Westfalen', clients: '70+', roas: '4.1x', focus: 'Mode, B2B & Handel' },
  { id: 'stuttgart', name: 'Stuttgart', region: 'Baden-Württemberg', clients: '65+', roas: '4.2x', focus: 'Industrie, B2B & Mittelstand' },
  { id: 'nuernberg', name: 'Nürnberg', region: 'Bayern / Franken', clients: '55+', roas: '4.2x', focus: 'Tech, B2B & Handwerk' },
  { id: 'dortmund', name: 'Dortmund & Ruhrgebiet', region: 'Nordrhein-Westfalen', clients: '65+', roas: '4.3x', focus: 'Handwerk, Sanierung & B2B' },
  { id: 'leipzig', name: 'Leipzig & Dresden', region: 'Sachsen', clients: '50+', roas: '4.2x', focus: 'E-Commerce & Scale-ups' },
]

export default function StandorteHubPage({ params }) {
  const resolvedParams = use(params)
  const lang = resolvedParams?.lang || 'de'
  const currentLang = ['de', 'tr', 'en'].includes(lang) ? lang : 'de'

  const t = {
    de: {
      badge: 'STANDORTE IN DEUTSCHLAND',
      title: 'Google Ads & Performance Marketing nach Städten',
      subtitle: 'Finden Sie Ihren lokalen Google Ads und Meta Ads Experten für die führenden Wirtschaftsmetropolen in Deutschland.',
      metaDesc: 'Zertifizierter Google Partner mit Sitz in Dreieich / Frankfurt am Main. Lokale Google Ads Betreuung für Frankfurt, München, Berlin, Hamburg, Köln und ganz Deutschland.',
      clientBadge: 'Verifizierte Kunden',
      roasBadge: 'Ø ROAS',
      ctaCard: 'Standort-Analyse ansehen',
      contactTitle: 'Ihre Stadt ist nicht aufgeführt?',
      contactSub: 'Wir betreuen Kunden im gesamten deutschsprachigen Raum (DACH).',
      contactBtn: 'Bundesweite Betreuung anfragen'
    },
    tr: {
      badge: 'ALMANYA ŞEHİRLERİ VE LOKASYONLAR',
      title: 'Almanya Genelinde Şehirlere Özel Google Ads ve Pazarlama',
      subtitle: 'Almanya\'nın önde gelen ticaret merkezlerinde işletmenizi 1. sıraya taşıyan resmi Google Partner danışmanlığı.',
      metaDesc: 'Frankfurt, Münih, Berlin, Hamburg, Köln ve tüm Almanya metropollerinde yerel Google Ads ve Meta Ads yönetimi.',
      clientBadge: 'Aktif Müşteri',
      roasBadge: 'Ort. ROAS',
      ctaCard: 'Şehir Stratejisini İncele',
      contactTitle: 'Şehriniz Listede Yok mu?',
      contactSub: 'Tüm Almanya, Avusturya ve İsviçre genelinde profesyonel reklam yönetimi sunuyoruz.',
      contactBtn: 'Genel Teklif Alın'
    },
    en: {
      badge: 'LOCATIONS ACROSS GERMANY',
      title: 'Google Ads & Performance Marketing by City',
      subtitle: 'Discover certified Google Ads and Meta Ads management tailored to Germany\'s premier metropolitan economic hubs.',
      metaDesc: 'Official Google Partner based in Frankfurt am Main. Dedicated performance advertising for Munich, Berlin, Hamburg, Cologne and across Germany.',
      clientBadge: 'Verified Clients',
      roasBadge: 'Avg. ROAS',
      ctaCard: 'View City Strategy',
      contactTitle: 'Your City Not Listed?',
      contactSub: 'We manage performance campaigns nationwide across Germany, Austria, and Switzerland.',
      contactBtn: 'Request Nationwide Consultation'
    }
  }[currentLang]

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={`/${currentLang}`} className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
            <span className="font-bold">← {currentLang === 'de' ? 'Startseite' : currentLang === 'en' ? 'Home' : 'Ana Sayfa'}</span>
          </Link>
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold px-3 py-1 bg-blue-500/20 text-[#4285F4] rounded-full border border-blue-400/30">
              🇩🇪 Google Partner Deutschland
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <MapPin className="w-4 h-4 text-[#4285F4]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">{t.badge}</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            {t.title}
          </h1>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </header>

      {/* Cities Grid */}
      <main className="py-12 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.id}
                href={`/${currentLang}/standorte/${city.id}`}
                className="bg-slate-900/90 rounded-3xl p-7 border border-slate-800 hover:border-blue-500/80 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
                      {city.region}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800">
                      {city.roas} ROAS
                    </span>
                  </div>

                  <h2 className="text-2xl font-black mb-2 text-white group-hover:text-[#4285F4] transition-colors">
                    {city.name}
                  </h2>
                  <p className="text-xs text-slate-400 mb-6 font-mono">
                    🎯 {city.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white">
                  <span>{t.ctaCard}</span>
                  <span className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-[#4285F4] group-hover:text-white flex items-center justify-center transition-colors">
                    ➔
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Nationwide Banner */}
          <div className="mt-16 bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 rounded-3xl p-8 md:p-12 border border-blue-500/30 text-center">
            <h3 className="text-2xl md:text-3xl font-black mb-3">{t.contactTitle}</h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-6 text-sm md:text-base">{t.contactSub}</p>
            <Link
              href={`/${currentLang}#contact`}
              className="inline-block bg-[#4285F4] hover:bg-blue-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              {t.contactBtn} ➔
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
