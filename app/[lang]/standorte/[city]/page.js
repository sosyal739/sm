'use client'

import React, { use, useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, TrendingUp, ShieldCheck, ArrowRight, Star, Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react'

const cityDetails = {
  frankfurt: {
    name: 'Frankfurt am Main',
    region: 'Hessen / Rhein-Main',
    tagline: 'Google Ads & Performance Marketing für die führende Finanz- und Wirtschaftsmetropole',
    description: 'Steigern Sie Ihren Umsatz in Frankfurt, Dreieich, Offenbach und dem gesamten Rhein-Main-Gebiet mit datengestützten Google Ads und Meta Ads Kampagnen.',
    stats: { clients: '85+', roas: '4.4x', experience: '17+ Jahre' },
    industries: ['B2B & Finanzdienstleister', 'E-Commerce & Handel', 'Kliniken & Praxen', 'Immobilien & Kanzleien'],
    de: {
      heroTitle: 'Google Ads & SEO Agentur Frankfurt am Main',
      heroSub: 'Zertifizierter Google Partner für Frankfurt & Hessen',
      intro: 'In einer hart umkämpften Wirtschaftsregion wie Frankfurt am Main reicht Standard-Werbung nicht aus. Als offizieller Google Partner und Performance Marketing Experte mit 17+ Jahren Erfahrung optimieren wir Ihre Google Ads, Meta Ads und SEO-Strategie für messbar höhere Verkaufsabschlüsse.',
      cta: 'Jetzt unverbindliches Angebot anfordern',
    },
    tr: {
      heroTitle: 'Frankfurt Google Ads & Dijital Pazarlama Ajansı',
      heroSub: 'Frankfurt, Dreieich & Rhein-Main Bölgesi Resmi Google Partneri',
      intro: 'Frankfurt ve çevresindeki rekabetçi pazarda işletmenizi Google aramalarında ve Meta reklamlarında 1. sıraya taşıyoruz. 17+ yıllık uzmanlıkla harcanan her reklam bütçesini kâra dönüştüren sistemler kuruyoruz.',
      cta: 'Frankfurt İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads & SEO Agency Frankfurt am Main',
      heroSub: 'Official Google Partner for Frankfurt & Rhine-Main Region',
      intro: 'Dominate search results in Frankfurt am Main with data-driven Google Ads, Meta Ads, and SEO. 17+ years of experience delivering high ROAS and customer acquisition for businesses in Germany.',
      cta: 'Request Free Frankfurt Proposal',
    }
  },
  duesseldorf: {
    name: 'Düsseldorf',
    region: 'Nordrhein-Westfalen (NRW)',
    tagline: 'Umsatzstarke Google Ads & Meta Ads Betreuung für Düsseldorf und NRW',
    description: 'Gewinnen Sie kaufbereite Neukunden in Düsseldorf, Neuss, Ratingen und ganz NRW mit hochprofitablen Performance-Marketing-Kampagnen.',
    stats: { clients: '70+', roas: '4.1x', experience: '17+ Jahre' },
    industries: ['Mode & E-Commerce', 'B2B & Dienstleister', 'Agenturen & Kanzleien', 'Handwerk & Industrie'],
    de: {
      heroTitle: 'Google Ads & Meta Ads Agentur Düsseldorf',
      heroSub: 'Performance Marketing & SEO für Düsseldorf & NRW',
      intro: 'Düsseldorf ist ein pulsierender Handels- und E-Commerce-Hub. Mit maßgeschneiderten Google Search, Performance Max und Instagram Reels Ads sorgen wir dafür, dass Ihre Marke in Düsseldorf die Marktführerschaft übernimmt.',
      cta: 'Jetzt unverbindliches Angebot anfordern',
    },
    tr: {
      heroTitle: 'Düsseldorf Google Ads & SEO Ajansı',
      heroSub: 'Düsseldorf & NRW Bölgesi İçin Kârlı Reklam Yönetimi',
      intro: 'Düsseldorf ve NRW bölgesindeki e-ticaret ve hizmet firmaları için Google Ads, Meta Ads ve SEO danışmanlığı ile satışlarınızı ve organik görünürlüğünüzü katlıyoruz.',
      cta: 'Düsseldorf İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads & Meta Ads Agency Düsseldorf',
      heroSub: 'Performance Marketing & SEO for Düsseldorf & NRW',
      intro: 'Scale your sales in Düsseldorf with high-converting Google Ads, Meta Ads, and SEO. Transparent ROI management with 17+ years of proven expertise.',
      cta: 'Request Free Düsseldorf Proposal',
    }
  },
  koeln: {
    name: 'Köln',
    region: 'Nordrhein-Westfalen (NRW)',
    tagline: 'Google Ads & SEO Dominanz für Köln, Bonn und das Rheinland',
    description: 'Erreichen Sie Top-Rankings bei Google und profitable Conversion-Raten mit professionellem Google Ads und Meta Ads Management in Köln.',
    stats: { clients: '60+', roas: '4.3x', experience: '17+ Jahre' },
    industries: ['Medien & Kreativwirtschaft', 'E-Commerce & Startups', 'Gesundheitswesen & Ärzte', 'Gastronomie & Hotellerie'],
    de: {
      heroTitle: 'Google Ads & Performance Agentur Köln',
      heroSub: 'Ihr Google Partner für Köln & das Rheinland',
      intro: 'Von der Kölner Innenstadt bis ins gesamte Umland: Wir machen Ihre Dienstleistungen und Produkte bei Google und Social Media sichtbar und wandeln Klicks in treue Kunden um.',
      cta: 'Jetzt unverbindliches Angebot anfordern',
    },
    tr: {
      heroTitle: 'Köln Google Ads & Dijital Pazarlama Danışmanlığı',
      heroSub: 'Köln, Bonn ve Rheinland İçin Resmi Google Partneri',
      intro: 'Köln ve çevresinde faaliyet gösteren işletmeler için Google Ads, Instagram/Facebook reklamları ve yerel SEO ile müşteri trafiğinizi zirveye taşıyoruz.',
      cta: 'Köln İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads & Performance Marketing Cologne',
      heroSub: 'Your Certified Google Partner in Cologne & Rhineland',
      intro: 'Transform paid advertising into predictable revenue in Cologne. Expert Google Ads, Meta Ads, and SEO optimization backed by 17+ years experience.',
      cta: 'Request Free Cologne Proposal',
    }
  },
  muenchen: {
    name: 'München',
    region: 'Bayern',
    tagline: 'High-End Google Ads & E-Commerce Performance für München und Bayern',
    description: 'Maximieren Sie Ihren ROAS in München und Süddeutschland mit datengetriebenen Google Ads, Meta Ads und Server-Side Tracking Kampagnen.',
    stats: { clients: '90+', roas: '4.6x', experience: '17+ Jahre' },
    industries: ['Tech & Software', 'Premium E-Commerce', 'B2B & Industrie', 'Privatkliniken & Praxen'],
    de: {
      heroTitle: 'Google Ads Agentur München',
      heroSub: 'Premium Performance Marketing & SEO für München & Bayern',
      intro: 'Münchens Premium-Markt verlangt erstklassige Werbestrategien. Als offizieller Google Partner bieten wir mathematisch präzise Kampagnensteuerung für maximalen Gewinn und planbare Skalierung.',
      cta: 'Jetzt unverbindliches Angebot anfordern',
    },
    tr: {
      heroTitle: 'Münih Google Ads & SEO Danışmanlığı',
      heroSub: 'Münih ve Bavyera Bölgesi İçin Premium Dijital Pazarlama',
      intro: 'Münih pazarında yüksek kârlılıkla büyümek isteyen markalar için Google Ads, Meta Ads ve SEO danışmanlığı ile satışlarınızı katlıyoruz.',
      cta: 'Münih İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads Agency Munich',
      heroSub: 'Premium Performance Marketing & SEO for Munich & Bavaria',
      intro: 'Scale your enterprise in Munich with high-ROAS Google Ads, Meta Ads, and SEO. Official Google Partner with 17+ years of track record.',
      cta: 'Request Free Munich Proposal',
    }
  },
  stuttgart: {
    name: 'Stuttgart',
    region: 'Baden-Württemberg',
    tagline: 'B2B & E-Commerce Google Ads Spezialist für Stuttgart & Baden-Württemberg',
    description: 'Generieren Sie qualifizierte B2B-Leads und E-Commerce-Umsätze in Stuttgart, Esslingen, Ludwigsburg und ganz Baden-Württemberg.',
    stats: { clients: '65+', roas: '4.2x', experience: '17+ Jahre' },
    industries: ['Maschinenbau & Industrie', 'B2B & IT-Dienstleister', 'E-Commerce & D2C', 'Handwerk & Gewerbe'],
    de: {
      heroTitle: 'Google Ads & B2B Agentur Stuttgart',
      heroSub: 'Performance Marketing & SEO für Stuttgart & den Mittelstand',
      intro: 'Der baden-württembergische Mittelstand braucht messbare Ergebnisse statt leerer Versprechen. Wir entwickeln passgenaue Google Ads und SEO-Funnels für die Industrie- und Handelsregion Stuttgart.',
      cta: 'Jetzt unverbindliches Angebot anfordern',
    },
    tr: {
      heroTitle: 'Stuttgart Google Ads & B2B Pazarlama Ajansı',
      heroSub: 'Stuttgart ve Baden-Württemberg Bölgesi Resmi Danışmanlığı',
      intro: 'Stuttgart bölgesindeki KOBİ, sanayi ve e-ticaret şirketleri için Google Ads, Meta Ads ve B2B dijital pazarlama ile yüksek dönüşümlü müşteri akışı sağlıyoruz.',
      cta: 'Stuttgart İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads & B2B Performance Stuttgart',
      heroSub: 'Performance Marketing & SEO for Stuttgart & German SMEs',
      intro: 'Generate high-value B2B leads and e-commerce revenue in Stuttgart with certified Google Ads and SEO management from a 17+ year expert.',
      cta: 'Request Free Stuttgart Proposal',
    }
  },
  berlin: {
    name: 'Berlin',
    region: 'Berlin',
    tagline: 'Skalierbare Google Ads & Growth Marketing Strategien für Berlin',
    description: 'Beschleunigen Sie das Wachstum Ihres Start-ups, E-Commerce-Shops oder Unternehmens in Berlin mit datengetriebenem Performance Marketing.',
    stats: { clients: '80+', roas: '4.3x', experience: '17+ Jahre' },
    industries: ['Start-ups & Scale-ups', 'D2C & E-Commerce', 'SaaS & Apps', 'Lokale Dienstleister'],
    de: {
      heroTitle: 'Google Ads & Growth Agentur Berlin',
      heroSub: 'Offizieller Google Partner für Start-ups & Unternehmen in Berlin',
      intro: 'In der dynamischen Berliner Wirtschaftswelt entscheiden Daten und Agilität. Wir optimieren Ihre Google Search, PMax und Meta Ads Kampagnen für rasanten und profitablen Markterfolg.',
      cta: 'Jetzt unverbindliches Angebot anfordern',
    },
    tr: {
      heroTitle: 'Berlin Google Ads & Dijital Büyüme Ajansı',
      heroSub: 'Berlin Genelindeki İşletmeler İçin Resmi Google Partneri',
      intro: 'Berlin genelindeki start-up, e-ticaret ve yerel firmalar için Google Ads, Meta Ads ve SEO ile bütçenizi en kârlı şekilde büyüten reklam stratejileri.',
      cta: 'Berlin İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads & Growth Marketing Berlin',
      heroSub: 'Certified Google Partner for Startups & Brands in Berlin',
      intro: 'Scale faster in Berlin with precision Google Ads, Meta Ads, and SEO. Data-driven customer acquisition built by a senior 17+ year specialist.',
      cta: 'Request Free Berlin Proposal',
    }
  }
}

export default function CityPage({ params }) {
  const resolvedParams = use(params)
  const lang = resolvedParams?.lang || 'de'
  const city = resolvedParams?.city || 'frankfurt'

  const currentLang = ['de', 'tr', 'en'].includes(lang) ? lang : 'de'
  const cityData = cityDetails[city] || cityDetails.frankfurt
  const content = cityData[currentLang] || cityData.de

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `[Standort: ${cityData.name}] Firma: ${formData.company || 'N/A'} - Nachricht: ${formData.message}`,
          language: currentLang
        })
      })

      const data = await res.json()
      if (res.ok) {
        setStatus({
          type: 'success',
          message: currentLang === 'tr'
            ? 'Talebiniz başarıyla alındı! En kısa sürede sizinle e-posta/telefon üzerinden iletişime geçeceğiz.'
            : currentLang === 'en'
            ? 'Thank you! Your request has been received. We will contact you via email shortly.'
            : 'Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns umgehend per E-Mail bei Ihnen.'
        })
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Fehler beim Senden.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Verbindungsfehler. Bitte versuchen Sie es erneut.' })
    } finally {
      setLoading(false)
    }
  }

  const scrollToForm = (e) => {
    e.preventDefault()
    const formElement = document.getElementById('anfrage-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Salih Maral Digital Marketing - ${cityData.name}`,
    url: `https://salihmaral.de/${currentLang}/standorte/${city}`,
    telephone: '+49-172-4106463',
    email: 'info@salihmaral.de',
    image: 'https://salihmaral.de/logo.png',
    priceRange: '€€',
    areaServed: {
      '@type': 'City',
      name: cityData.name
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '312',
      bestRating: '5'
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 selection:bg-blue-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>{cityData.name} &bull; {cityData.region}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            {content.heroTitle}
          </h1>

          <p className="text-xl text-blue-300 font-medium mb-4">
            {content.heroSub}
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            {content.intro}
          </p>

          {/* Princeton GEO Fact Sheet Box */}
          <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/30 max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              <span className="text-amber-400">✨</span>
              <span>{currentLang === 'tr' ? 'Doğrulanmış GEO & Performans Özeti' : currentLang === 'en' ? 'Verified GEO & Performance Fact Sheet' : 'Geprüftes GEO & Performance Fact Sheet'}</span>
            </div>
            <blockquote className="text-sm text-slate-200 border-l-2 border-blue-500 pl-3 italic">
              &ldquo;{cityData.tagline}&rdquo; &mdash; <strong>Salih Maral</strong> (Offizieller Google Partner, 17+ Jahre Erfahrung).
            </blockquote>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mb-10 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">{cityData.stats.clients}</div>
              <div className="text-xs text-slate-400">Betreute Projekte</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{cityData.stats.roas}</div>
              <div className="text-xs text-slate-400">Durchschnittlicher ROAS</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-400">{cityData.stats.experience}</div>
              <div className="text-xs text-slate-400">Erfahrung</div>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span>{content.cta}</span>
            </button>
            <a
              href="mailto:info@salihmaral.de"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-base transition-all"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>info@salihmaral.de</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Leistungsspektrum für {cityData.name}
        </h2>
        <p className="text-slate-400 mb-10 max-w-2xl">
          Wir decken alle Kernkanäle des datengestützten Performance Marketings ab:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-black text-xl mb-4">
              G
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Google Ads Management</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Search, Shopping, Performance Max und YouTube-Kampagnen. Gezielte Neukundengewinnung in {cityData.name}.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Smart Bidding Optimierung</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> 1. Platz Markenschutz</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-black text-xl mb-4">
              M
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Meta Ads (Facebook & IG)</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Advantage+ Shopping, Instagram Reels & UGC-Videoanzeigen mit serverseitigem Meta CAPI Tracking.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> 92%+ Match Quality (CAPI)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Kreativ-Tests & Skalierung</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-black text-xl mb-4">
              S
            </div>
            <h3 className="text-xl font-bold text-white mb-2">SEO & GEO (AI Search)</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Organische Google Platz 1 Rankings und Sichtbarkeit in KI-Suchmaschinen (ChatGPT Search & Perplexity).
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100/100 Technisches SEO</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Google Maps Dominanz</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-slate-200 mb-6">
            Branchenschwerpunkte in {cityData.name}:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cityData.industries.map((ind, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Email Proposal Form Section */}
      <section id="anfrage-form" className="py-16 max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-blue-500/30 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold mb-4">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 / 5.0 Google Bewertung (312+ Rezensionen)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              {currentLang === 'tr'
                ? `${cityData.name} İçin Ücretsiz Teklif & Analiz Alın`
                : currentLang === 'en'
                ? `Get Your Free Proposal for ${cityData.name}`
                : `Kostenlose Analyse & Angebot für ${cityData.name}`}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              {currentLang === 'tr'
                ? 'Formu doldurun, işletmenizin reklam potansiyeli ve kâr planı hakkında size e-posta ile detaylı analiz sunalım.'
                : currentLang === 'en'
                ? 'Fill out the form below. We will send you a tailored growth strategy directly to your inbox.'
                : 'Füllen Sie das Formular aus. Wir analysieren Ihre Potenziale und senden Ihnen ein maßgeschneidertes Angebot direkt per E-Mail zu.'}
            </p>
          </div>

          {status.message && (
            <div className={`p-4 rounded-xl mb-6 text-sm font-semibold text-center ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-300 border border-rose-500/30'}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {currentLang === 'tr' ? 'Adınız Soyadınız *' : currentLang === 'en' ? 'Full Name *' : 'Ihr Name / Ansprechpartner *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Max Mustermann"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {currentLang === 'tr' ? 'E-Posta Adresiniz *' : currentLang === 'en' ? 'Email Address *' : 'Ihre E-Mail-Adresse *'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@unternehmen.de"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {currentLang === 'tr' ? 'Telefon Numaranız' : currentLang === 'en' ? 'Phone Number' : 'Telefonnummer (optional)'}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+49 ..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {currentLang === 'tr' ? 'Firma Adı / Web Siteniz' : currentLang === 'en' ? 'Company / Website URL' : 'Firma / Website-URL (optional)'}
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="www.ihre-website.de"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                {currentLang === 'tr' ? 'Mesajınız / Hedefleriniz *' : currentLang === 'en' ? 'Your Message / Goals *' : 'Ihre Nachricht / Werbeziele *'}
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={currentLang === 'tr' ? 'Örn: Google Ads ve Meta Ads ile satışlarımızı artırmak istiyoruz...' : 'Z.B. Wir möchten unsere Google Ads Kampagnen in dieser Region optimieren und den ROAS steigern...'}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-sm transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Wird gesendet...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>
                    {currentLang === 'tr'
                      ? 'Ücretsiz Teklif Talebini Gönder ➔'
                      : currentLang === 'en'
                      ? 'Submit Free Proposal Request ➔'
                      : 'Kostenlose Anfrage absenden ➔'}
                  </span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
