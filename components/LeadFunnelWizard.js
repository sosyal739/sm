'use client'

import React, { useState } from 'react'
import { CheckCircle, ArrowRight, ArrowLeft, Phone, ShoppingCart, Target, MapPin, Sparkles, Send, MessageSquare, Loader2 } from 'lucide-react'

export default function LeadFunnelWizard({ lang = 'de' }) {
  const [step, setStep] = useState(1)
  const [goal, setGoal] = useState('')
  const [budget, setBudget] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    note: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const t = {
    de: {
      badge: 'INTERAKTIVER STRATEGIE-FINDER',
      title: 'In 3 Schritten zu Ihrer maßgeschneiderten Werbestrategie',
      subtitle: 'Beantworten Sie 2 kurze Fragen und erhalten Sie ein unverbindliches, transparentes Angebot von Salih Maral.',
      step1Title: '1. Was ist Ihr primäres Marketing-Ziel?',
      step2Title: '2. Wie hoch ist Ihr geplantes monatliches Werbebudget?',
      step3Title: '3. Wohin dürfen wir Ihre Strategie & Analyse senden?',
      goals: [
        { id: 'leads', icon: Phone, title: 'Mehr Kundenanrufe & Termine', desc: 'Dienstleister, Praxen, Kanzleien & Handwerk' },
        { id: 'ecommerce', icon: ShoppingCart, title: 'E-Commerce Verkäufe & ROAS steigern', desc: 'Online-Shops, D2C Brands & Amazon' },
        { id: 'b2b', icon: Target, title: 'B2B Neukunden & Projektanfragen', desc: 'Industrie, IT, Software & Beratung' },
        { id: 'maps', icon: MapPin, title: 'Google Maps #1 & Bewertungsschutz', desc: 'Lokale Betriebe, Gastronomie & Filialen' },
      ],
      budgets: [
        { id: 'b1', title: '500 € – 1.500 € / Monat', desc: 'Optimal für lokale Betriebe & Neustart' },
        { id: 'b2', title: '1.500 € – 5.000 € / Monat', desc: 'Wachstum für KMUs & regionale Marktführer' },
        { id: 'b3', title: '5.000 € – 15.000 € / Monat', desc: 'Skalierung für E-Commerce & B2B' },
        { id: 'b4', title: 'Über 15.000 € / Monat', desc: 'Dominanz & Enterprise Performance' },
      ],
      labels: {
        website: 'Ihre Website / Shop-URL',
        websitePlaceholder: 'https://ihre-website.de',
        name: 'Ihr Name / Ansprechpartner',
        phone: 'Telefon / WhatsApp (für schnelle Rückfragen)',
        email: 'E-Mail-Adresse für das Angebot',
        note: 'Haben Sie bereits aktive Werbekonten? (Optional)',
        submitBtn: 'Kostenlose Strategie & Angebot anfordern',
        backBtn: 'Zurück',
        nextBtn: 'Weiter',
        successTitle: 'Vielen Dank! Ihre Anfrage ist eingegangen.',
        successSub: 'Salih Maral analysiert Ihre Angaben und meldet sich innerhalb von 2–4 Stunden mit einem maßgeschneiderten Konzept.',
        whatsappBtn: 'Direkt per WhatsApp kontaktieren',
      }
    },
    tr: {
      badge: 'AKILLI BÜYÜME SİHİRBAZI',
      title: '3 Adımda Size Özel Dijital Pazarlama Stratejisi',
      subtitle: '2 kısa soruyu yanıtlayın, Salih Maral\'dan şeffaf ve kârlı büyüme teklifinizi hemen alın.',
      step1Title: '1. İşletmenizin birincil büyüme hedefi nedir?',
      step2Title: '2. Aylık planlanan reklam bütçeniz ne kadar?',
      step3Title: '3. Teklif ve analiz raporunu kime iletelim?',
      goals: [
        { id: 'leads', icon: Phone, title: 'Daha Çok Telefon & Randevu', desc: 'Klinik, Hizmet, Hukuk, Usta & Restoran' },
        { id: 'ecommerce', icon: ShoppingCart, title: 'E-Ticaret Satışlarını & ROAS Artırma', desc: 'Online Mağazalar & D2C Markalar' },
        { id: 'b2b', icon: Target, title: 'B2B Müşteri & Proje Talepleri', desc: 'Sanayi, İhracat, Yazılım & Kurumsal' },
        { id: 'maps', icon: MapPin, title: 'Google Haritalar 1. Sıra & Yorum', desc: 'Yerel İşletmeler, Çoklu Şubeler & Zincirler' },
      ],
      budgets: [
        { id: 'b1', title: '500 € – 1.500 € / Ay', desc: 'Yerel işletmeler ve başlangıç için ideal' },
        { id: 'b2', title: '1.500 € – 5.000 € / Ay', desc: 'Bölgesel liderlik ve KOBİ büyümesi' },
        { id: 'b3', title: '5.000 € – 15.000 € / Ay', desc: 'E-ticaret ve B2B ölçekleme' },
        { id: 'b4', title: '15.000 €+ / Ay', desc: 'Pazar hakimiyeti ve kurumsal hacim' },
      ],
      labels: {
        website: 'Web Siteniz / Mağaza URL',
        websitePlaceholder: 'https://site-adresiniz.com',
        name: 'Adınız Soyadınız / Yetkili',
        phone: 'Telefon / WhatsApp Numarası',
        email: 'E-posta Adresiniz',
        note: 'Mevcut reklam hesabınız var mı? (İsteğe bağlı)',
        submitBtn: 'Ücretsiz Strateji & Teklif Alın',
        backBtn: 'Geri',
        nextBtn: 'Devam Et',
        successTitle: 'Talebiniz Başarıyla Alındı!',
        successSub: 'Salih Maral verilerinizi inceleyecek ve 2-4 saat içinde işletmenize özel ciro büyüme planını iletecektir.',
        whatsappBtn: 'WhatsApp ile Hemen Görüşün',
      }
    },
    en: {
      badge: 'INTERACTIVE STRATEGY FINDER',
      title: 'Your Custom Growth Strategy in 3 Simple Steps',
      subtitle: 'Answer 2 quick questions to get a transparent, high-ROI proposal directly from Salih Maral.',
      step1Title: '1. What is your primary growth objective?',
      step2Title: '2. What is your planned monthly ad budget?',
      step3Title: '3. Where should we send your strategy & proposal?',
      goals: [
        { id: 'leads', icon: Phone, title: 'More Calls, Inquiries & Appointments', desc: 'Clinics, Legal, Contractors & Services' },
        { id: 'ecommerce', icon: ShoppingCart, title: 'Scale E-Commerce Sales & ROAS', desc: 'Online Stores, D2C Brands & Retail' },
        { id: 'b2b', icon: Target, title: 'B2B Client Leads & Enterprise Deals', desc: 'Tech, SaaS, Manufacturing & Consulting' },
        { id: 'maps', icon: MapPin, title: 'Google Maps #1 & Reputation Defense', desc: 'Multi-Location Chains & Local Retail' },
      ],
      budgets: [
        { id: 'b1', title: '€500 – €1,500 / Month', desc: 'Ideal for local businesses and initial traction' },
        { id: 'b2', title: '€1,500 – €5,000 / Month', desc: 'Growth for SMBs & regional leaders' },
        { id: 'b3', title: '€5,000 – €15,000 / Month', desc: 'Scaling for E-Commerce & B2B brands' },
        { id: 'b4', title: 'Over €15,000 / Month', desc: 'Market leadership & high-volume scale' },
      ],
      labels: {
        website: 'Website / Store URL',
        websitePlaceholder: 'https://your-website.com',
        name: 'Full Name / Contact Person',
        phone: 'Phone / WhatsApp Number',
        email: 'Business Email Address',
        note: 'Do you have existing ad accounts? (Optional)',
        submitBtn: 'Get Free Strategy & Quote',
        backBtn: 'Back',
        nextBtn: 'Continue',
        successTitle: 'Thank You! Your Request is Received.',
        successSub: 'Salih Maral will review your business data and respond within 2–4 hours with a custom strategy.',
        whatsappBtn: 'Chat Directly on WhatsApp',
      }
    }
  }

  const content = t[lang] || t['de']

  const handleGoalSelect = (id) => {
    setGoal(id)
    setStep(2)
  }

  const handleBudgetSelect = (id) => {
    setBudget(id)
    setStep(3)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) {
      setError(lang === 'tr' ? 'Lütfen zorunlu alanları doldurun.' : lang === 'en' ? 'Please fill in all required fields.' : 'Bitte füllen Sie alle Pflichtfelder aus.')
      return
    }

    setLoading(true)
    setError('')

    const fullMessage = `[Funnel Wizard]\nHedef/Ziel: ${goal}\nBütçe/Budget: ${budget}\nWeb: ${formData.website}\nNot: ${formData.note || 'Yok'}`

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: fullMessage,
          lang: lang
        })
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        setSubmitted(true)
      }
    } catch (err) {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const whatsappMessage = encodeURIComponent(
    `Hallo Salih Maral, ich habe den Strategie-Finder auf Ihrer Website ausgefüllt:\n- Ziel: ${goal}\n- Budget: ${budget}\n- Website: ${formData.website || 'Noch keine'}\n- Name: ${formData.name || ''}\nIch bitte um ein unverbindliches Angebot.`
  )

  return (
    <div className="bg-white rounded-3xl border-2 border-blue-100 shadow-2xl p-6 sm:p-10 max-w-4xl mx-auto my-12 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center mb-8 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1.5 mb-3 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#4285F4]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">
            {content.badge}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          {content.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mt-2">
          {content.subtitle}
        </p>

        {!submitted && (
          <div className="flex items-center justify-center space-x-3 mt-6">
            <div className={`h-2.5 rounded-full transition-all duration-300 ${step >= 1 ? 'w-12 bg-[#4285F4]' : 'w-4 bg-gray-200'}`}></div>
            <div className={`h-2.5 rounded-full transition-all duration-300 ${step >= 2 ? 'w-12 bg-[#4285F4]' : 'w-4 bg-gray-200'}`}></div>
            <div className={`h-2.5 rounded-full transition-all duration-300 ${step >= 3 ? 'w-12 bg-[#4285F4]' : 'w-4 bg-gray-200'}`}></div>
          </div>
        )}
      </div>

      {!submitted && step === 1 && (
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-gray-900 text-center mb-6">{content.step1Title}</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {content.goals.map((item) => {
              const IconComp = item.icon
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleGoalSelect(item.title)}
                  className="flex items-start p-5 rounded-2xl border-2 border-slate-100 hover:border-[#4285F4] hover:bg-blue-50/40 text-left transition-all duration-200 group shadow-sm hover:shadow-md cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-[#4285F4] flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-[#4285F4] transition-colors">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {!submitted && step === 2 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs font-semibold text-gray-500 hover:text-gray-900 flex items-center cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> {content.labels.backBtn}
            </button>
            <h4 className="text-lg font-bold text-gray-900 text-center">{content.step2Title}</h4>
            <div className="w-12"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {content.budgets.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleBudgetSelect(item.title)}
                className="flex flex-col p-5 rounded-2xl border-2 border-slate-100 hover:border-[#34A853] hover:bg-emerald-50/40 text-left transition-all duration-200 group shadow-sm hover:shadow-md cursor-pointer"
              >
                <div className="font-black text-lg text-gray-900 group-hover:text-[#34A853] transition-colors">{item.title}</div>
                <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {!submitted && step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs font-semibold text-gray-500 hover:text-gray-900 flex items-center cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> {content.labels.backBtn}
            </button>
            <h4 className="text-lg font-bold text-gray-900 text-center">{content.step3Title}</h4>
            <div className="w-12"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">{content.labels.name} *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4285F4] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">{content.labels.website}</label>
              <input
                type="text"
                placeholder={content.labels.websitePlaceholder}
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4285F4] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">{content.labels.phone} *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4285F4] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">{content.labels.email} *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4285F4] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">{content.labels.note}</label>
            <input
              type="text"
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4285F4] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
            />
          </div>

          {error && <div className="text-red-500 text-xs font-bold text-center">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4285F4] hover:bg-[#3367d6] text-white font-black py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 text-base mt-4 cursor-pointer"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>{content.labels.submitBtn}</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      )}

      {submitted && (
        <div className="text-center py-8 space-y-6">
          <div className="w-20 h-20 bg-emerald-100 text-[#34A853] rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="w-10 h-10" />
          </div>
          <div>
            <h4 className="text-2xl font-black text-gray-900">{content.labels.successTitle}</h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto mt-2">{content.labels.successSub}</p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/491724106463?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{content.labels.whatsappBtn}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
