'use client'

import React, { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, ArrowRight, CheckCircle2, Sparkles, Send, Loader2 } from 'lucide-react'

export default function RoasCalculatorWidget({ lang = 'de' }) {
  const [budget, setBudget] = useState(2500)
  const [currentRoas, setCurrentRoas] = useState(1.8)
  const [targetRoas, setTargetRoas] = useState(4.2)
  const [industry, setIndustry] = useState('ecommerce')

  // Form Lead state
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', website: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Calculations
  const currentRevenue = Math.round(budget * currentRoas)
  const projectedRevenue = Math.round(budget * targetRoas)
  const additionalRevenue = Math.round(projectedRevenue - currentRevenue)
  const extraProfit = Math.round(additionalRevenue * 0.4) // approx 40% gross margin

  const t = {
    de: {
      badge: 'Interaktiver ROI & ROAS Rechner',
      title: 'Wie viel Mehrumsatz steckt in Ihrem Werbebudget?',
      subtitle: 'Berechnen Sie in Echtzeit Ihr ungenutztes Umsatzpotenzial mit Google Ads & Meta Ads.',
      budgetLabel: 'Monatliches Werbebudget:',
      currentRoasLabel: 'Aktueller ROAS:',
      targetRoasLabel: 'Ziel-ROAS mit Salih Maral:',
      industryLabel: 'Branche:',
      indEcommerce: 'E-Commerce / Online-Shop',
      indB2B: 'B2B & Dienstleister',
      indLocal: 'Kliniken & Lokale Services',
      currentRevLabel: 'Aktueller Monatsumsatz:',
      projectedRevLabel: 'Prognostizierter Umsatz:',
      additionalRevLabel: 'Möglicher Mehrumsatz / Monat:',
      ctaButton: 'Diesen Wachstumsplan per E-Mail anfordern',
      formTitle: 'Erhalten Sie Ihre detaillierte ROI-Potenzialanalyse',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'Ihre E-Mail-Adresse',
      webPlaceholder: 'Ihre Website-URL',
      submitBtn: 'Kostenlose Potenzialanalyse anfordern ➔',
      successMsg: 'Vielen Dank! Ihre maßgeschneiderte Analyse wird für Sie erstellt und per E-Mail versendet.'
    },
    tr: {
      badge: 'İnteraktif ROI & ROAS Hesaplayıcı',
      title: 'Reklam Bütçenizde Ne Kadar Gizli Ciro Potansiyeli Var?',
      subtitle: 'Google Ads ve Meta Ads ile işletmenizin yakalayabileceği ek ciroyu anlık hesaplayın.',
      budgetLabel: 'Aylık Reklam Bütçeniz:',
      currentRoasLabel: 'Mevcut ROAS Oranınız:',
      targetRoasLabel: 'Salih Maral ile Hedef ROAS:',
      industryLabel: 'Sektörünüz:',
      indEcommerce: 'E-Ticaret / Online Mağaza',
      indB2B: 'B2B & Kurumsal Hizmetler',
      indLocal: 'Klinik, Sağlık & Yerel İşletmeler',
      currentRevLabel: 'Mevcut Aylık Ciro:',
      projectedRevLabel: 'Hedeflenen Aylık Ciro:',
      additionalRevLabel: 'Aylık Ekstra Ciro Kazancı:',
      ctaButton: 'Bu Büyüme Planını E-Posta ile Alın',
      formTitle: 'Size Özel Detaylı ROI Analizini Gönderelim',
      namePlaceholder: 'Adınız Soyadınız',
      emailPlaceholder: 'E-Posta Adresiniz',
      webPlaceholder: 'Web Siteniz (örn: www.site.com)',
      submitBtn: 'Ücretsiz Analiz Raporunu Al ➔',
      successMsg: 'Talebiniz alındı! İşletmenize özel detaylı büyüme ve kâr analizi e-posta adresinize gönderilecektir.'
    },
    en: {
      badge: 'Interactive ROI & ROAS Calculator',
      title: 'How Much Extra Revenue is Hidden in Your Ad Spend?',
      subtitle: 'Calculate your untapped growth potential with Google Ads & Meta Ads in real time.',
      budgetLabel: 'Monthly Advertising Budget:',
      currentRoasLabel: 'Current ROAS:',
      targetRoasLabel: 'Target ROAS with Salih Maral:',
      industryLabel: 'Industry:',
      indEcommerce: 'E-Commerce / Online Store',
      indB2B: 'B2B & High-Ticket Services',
      indLocal: 'Clinics & Local Businesses',
      currentRevLabel: 'Current Monthly Revenue:',
      projectedRevLabel: 'Projected Monthly Revenue:',
      additionalRevLabel: 'Potential Extra Monthly Revenue:',
      ctaButton: 'Request This Growth Plan via Email',
      formTitle: 'Receive Your Custom ROI Growth Breakdown',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email Address',
      webPlaceholder: 'Your Website URL',
      submitBtn: 'Get Free ROI Breakdown ➔',
      successMsg: 'Thank you! Your customized revenue growth analysis will be sent to your email.'
    }
  }

  const currentT = t[lang] || t.de

  const handleLeadSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `[ROAS Hesaplayıcı] Bütçe: ${budget}€, Mevcut ROAS: ${currentRoas}x, Hedef ROAS: ${targetRoas}x, Ek Ciro: ${additionalRevenue}€, Web: ${formData.website || 'N/A'}`,
          language: lang
        })
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-6 sm:p-10 rounded-3xl bg-slate-900 border border-blue-500/30 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>{currentT.badge}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {currentT.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          {currentT.subtitle}
        </p>
      </div>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Sliders Area */}
        <div className="space-y-6 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
          {/* Budget Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                {currentT.budgetLabel}
              </label>
              <span className="text-base font-bold text-blue-400">
                {budget.toLocaleString()} €
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="50000"
              step="500"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* Current ROAS Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                {currentT.currentRoasLabel}
              </label>
              <span className="text-base font-bold text-slate-300">
                {currentRoas}x
              </span>
            </div>
            <input
              type="range"
              min="1.0"
              max="3.5"
              step="0.1"
              value={currentRoas}
              onChange={(e) => setCurrentRoas(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
            />
          </div>

          {/* Target ROAS Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>{currentT.targetRoasLabel}</span>
              </label>
              <span className="text-base font-bold text-emerald-400">
                {targetRoas}x
              </span>
            </div>
            <input
              type="range"
              min="3.0"
              max="6.5"
              step="0.1"
              value={targetRoas}
              onChange={(e) => setTargetRoas(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
        </div>

        {/* Results Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-950/40 to-slate-950 border border-blue-500/40 space-y-4 text-center sm:text-left">
          <div>
            <div className="text-xs text-slate-400 mb-1">{currentT.currentRevLabel}</div>
            <div className="text-lg font-bold text-slate-300">{currentRevenue.toLocaleString()} €</div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <div className="text-xs text-slate-400 mb-1">{currentT.projectedRevLabel}</div>
            <div className="text-xl font-black text-white">{projectedRevenue.toLocaleString()} €</div>
          </div>

          <div className="pt-3 border-t border-blue-500/30 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <div className="text-xs text-emerald-300 font-medium mb-0.5">{currentT.additionalRevLabel}</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">
              +{additionalRevenue.toLocaleString()} € <span className="text-xs text-emerald-300/80 font-normal">/ ay</span>
            </div>
          </div>

          {!showLeadForm ? (
            <button
              onClick={() => setShowLeadForm(true)}
              className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              <span>{currentT.ctaButton}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : submitted ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold text-center mt-4">
              {currentT.successMsg}
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} className="space-y-3 mt-4 text-left">
              <input
                type="text"
                required
                placeholder={currentT.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                required
                placeholder={currentT.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder={currentT.webPlaceholder}
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                <span>{currentT.submitBtn}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
