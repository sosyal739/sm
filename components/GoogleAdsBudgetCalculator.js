'use client'

import React, { useState } from 'react'
import { Calculator, TrendingUp, CheckCircle2, ArrowRight, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react'
import { trackLead, trackWhatsAppClick } from '@/lib/analytics'

export default function GoogleAdsBudgetCalculator({ lang = 'de', defaultCity = '' }) {
  const [monthlyBudget, setMonthlyBudget] = useState(2500)
  const [modelType, setModelType] = useState('b2b') // 'b2b' | 'ecommerce' | 'local'

  // Calculations based on industry benchmarks
  const benchmarks = {
    b2b: {
      labelDe: 'B2B & Industrie / Dienstleister',
      labelTr: 'B2B, Sanayi & Kurumsal Hizmet',
      labelEn: 'B2B & Industrial Services',
      avgCpc: 2.80,
      convRate: 0.045, // 4.5% conversion rate
      avgLeadValue: 850,
      typicalFixpreis: 790,
    },
    ecommerce: {
      labelDe: 'E-Commerce & Online-Shop',
      labelTr: 'E-Ticaret & Online Mağaza',
      labelEn: 'E-Commerce & D2C Brands',
      avgCpc: 0.85,
      convRate: 0.032, // 3.2% purchase conversion rate
      avgLeadValue: 120, // avg order value
      typicalFixpreis: 690,
    },
    local: {
      labelDe: 'Lokale Betriebe, Ärzte & Kanzleien',
      labelTr: 'Yerel İşletmeler, Klinikler & Hukuk',
      labelEn: 'Local Businesses, Clinics & Law Firms',
      avgCpc: 1.90,
      convRate: 0.065, // 6.5% contact conversion rate
      avgLeadValue: 450,
      typicalFixpreis: 590,
    }
  }

  const selected = benchmarks[modelType]
  const estClicks = Math.round(monthlyBudget / selected.avgCpc)
  const estConversions = Math.max(1, Math.round(estClicks * selected.convRate))
  const estRevenueImpact = Math.round(estConversions * selected.avgLeadValue)
  
  // Agency comparison: 15% provision vs. Salih Maral Fixpreis
  const agencyCommissionCost = Math.round(monthlyBudget * 0.15)
  const salihMaralFixpreis = selected.typicalFixpreis
  const monthlySavings = Math.max(0, agencyCommissionCost - salihMaralFixpreis)

  const cityText = defaultCity ? ` in ${defaultCity}` : ''

  const t = {
    de: {
      badge: 'Interaktiver Budget- & Kostenrechner 2026',
      title: `Google Ads Budget & Agenturkosten Rechner${cityText}`,
      subtitle: 'Berechnen Sie in Echtzeit, ab welchem Werbebudget sich eine professionelle Google Ads & AdWords Betreuung rechnet und wie viele Kundenanfragen Sie erwarten können.',
      budgetLabel: 'Monatliches Werbebudget:',
      industryLabel: 'Geschäftsmodell / Branche wählen:',
      estClicksLabel: 'Geschätzte Klicks:',
      estConversionsLabel: modelType === 'ecommerce' ? 'Erwartete Shop-Bestellungen:' : 'Erwartete B2B/Kunden-Leads:',
      estValueLabel: modelType === 'ecommerce' ? 'Prognostizierter Bruttoumsatz:' : 'Geschätzter Pipeline-Wert:',
      agencyCostHeader: 'Vergleich der Betreuungskosten:',
      compProvision: 'Typische Agentur (15% Provision):',
      compFixpreis: 'Salih Maral (Transparenter Fixpreis):',
      savingsBadge: `Sie sparen ca. ${monthlySavings} € monatlich an Agenturgebühren!`,
      noCommissionBadge: '100% Ihres Budgets fließt direkt in Klicks, nicht in Agenturprovision!',
      whatsappCta: 'Potenzial jetzt direkt via WhatsApp besprechen',
      formCta: 'Unverbindliche Budget-Analyse anfordern',
      guarantee: 'Offizieller Google Partner • 17+ Jahre Erfahrung • Keine 12-Monats-Knebelverträge'
    },
    tr: {
      badge: 'İnteraktif Bütçe & Ajans Ücreti Hesaplayıcı 2026',
      title: `Google Ads Bütçe & Maliyet Hesaplama Aracı${cityText ? ` (${defaultCity})` : ''}`,
      subtitle: 'Hangi bütçeyle kaç müşteri veya sipariş kazanabileceğinizi ve Salih Maral sabit fiyat (Fixpreis) avantajıyla ne kadar tasarruf edeceğinizi anında görün.',
      budgetLabel: 'Aylık Reklam Bütçeniz:',
      industryLabel: 'İş Modeli / Sektör Seçin:',
      estClicksLabel: 'Tahmini Ziyaretçi (Tıklama):',
      estConversionsLabel: modelType === 'ecommerce' ? 'Beklenen Sipariş Sayısı:' : 'Beklenen Müşteri Talebi (Lead):',
      estValueLabel: modelType === 'ecommerce' ? 'Tahmini Ciro Getirisi:' : 'Tahmini Satış Hacmi:',
      agencyCostHeader: 'Ajans Yönetim Ücreti Karşılaştırması:',
      compProvision: 'Klasik Ajanslar (%15 Bütçe Komisyonu):',
      compFixpreis: 'Salih Maral (Şeffaf Sabit Fiyat):',
      savingsBadge: `Ayda yaklaşık ${monthlySavings} € ajans komisyonundan tasarruf edersiniz!`,
      noCommissionBadge: 'Bütçeniz komisyona değil, doğrudan gerçek müşteriye harcanır!',
      whatsappCta: 'Bu Bütçeyi WhatsApp\'tan Danışın',
      formCta: 'Ücretsiz Teklif & Bütçe Analizi İsteyin',
      guarantee: 'Resmi Google Partneri • 17+ Yıllık Tecrübe • Bağlayıcı Sözleşme Yok'
    },
    en: {
      badge: 'Interactive Budget & Cost Calculator 2026',
      title: `Google Ads Budget & Agency Cost Calculator${cityText}`,
      subtitle: 'Calculate your projected clicks, qualified customer leads, and compare flat-fee pricing against traditional agency commission models.',
      budgetLabel: 'Monthly Advertising Budget:',
      industryLabel: 'Select Business Model:',
      estClicksLabel: 'Estimated Clicks:',
      estConversionsLabel: modelType === 'ecommerce' ? 'Projected Orders:' : 'Projected Qualified Leads:',
      estValueLabel: modelType === 'ecommerce' ? 'Projected Revenue Impact:' : 'Estimated Pipeline Value:',
      agencyCostHeader: 'Agency Cost Comparison:',
      compProvision: 'Standard Agency (15% Commission):',
      compFixpreis: 'Salih Maral (Predictable Flat-Fee):',
      savingsBadge: `You save approx. ${monthlySavings} €/month in management fees!`,
      noCommissionBadge: '100% of your budget goes to real traffic, zero hidden fees!',
      whatsappCta: 'Discuss This Budget on WhatsApp',
      formCta: 'Request Free Budget Strategy',
      guarantee: 'Official Google Partner • 17+ Years Expertise • No 12-Month Lock-in'
    }
  }

  const currentT = t[lang] || t.de

  const handleWhatsAppClick = () => {
    trackWhatsAppClick({ location: 'budget_calculator', label: `Budget: ${monthlyBudget} EUR (${modelType})` })
    trackLead({ formName: 'budget_calculator_whatsapp', method: 'whatsapp', value: monthlyBudget })
    
    const message = lang === 'tr'
      ? `Merhaba Salih Bey, aylık ${monthlyBudget}€ bütçeyle ${selected.labelTr} sektöründe Google Ads reklamları başlatmak istiyorum. Detayları görüşebilir miyiz?`
      : lang === 'en'
      ? `Hello Salih, I have an ad budget of ${monthlyBudget}€ for ${selected.labelEn} and would like to scale my Google Ads campaigns. Can we discuss?`
      : `Hallo Salih, ich interessiere mich für eine Google Ads Betreuung mit einem Monatsbudget von ${monthlyBudget} € im Bereich ${selected.labelDe}. Können wir mein Potenzial besprechen?`

    const url = `https://wa.me/491724106463?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleScrollToForm = () => {
    trackLead({ formName: 'budget_calculator_cta', method: 'scroll_to_form', value: monthlyBudget })
    const el = document.getElementById('anfrage-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto my-12 p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-blue-500/30 shadow-2xl backdrop-blur-md relative overflow-hidden text-slate-100">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Calculator className="w-4 h-4 text-blue-400" />
          <span>{currentT.badge}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
          {currentT.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          {currentT.subtitle}
        </p>
      </div>

      {/* Main interactive area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Controls & Sliders (7 cols) */}
        <div className="lg:col-span-7 space-y-6 bg-slate-950/70 p-6 sm:p-8 rounded-2xl border border-slate-800">
          {/* Industry Model Selector */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-3">
              {currentT.industryLabel}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'b2b', label: lang === 'tr' ? 'B2B & Sanayi' : lang === 'en' ? 'B2B / Industry' : 'B2B & Industrie' },
                { id: 'ecommerce', label: lang === 'tr' ? 'E-Ticaret' : lang === 'en' ? 'E-Commerce' : 'E-Commerce' },
                { id: 'local', label: lang === 'tr' ? 'Hizmet & Kanzlei' : lang === 'en' ? 'Local / Services' : 'Dienstleister / Praxen' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setModelType(item.id)}
                  className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                    modelType === item.id
                      ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-500/20'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Slider */}
          <div className="pt-2">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                {currentT.budgetLabel}
              </label>
              <span className="text-xl sm:text-2xl font-black text-blue-400 tracking-tight">
                {monthlyBudget.toLocaleString()} € <span className="text-xs text-slate-400 font-normal">/ Monat</span>
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="20000"
              step="500"
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
              <span>1.000 € (Start)</span>
              <span>5.000 € (Mittelstand)</span>
              <span>10.000 €+</span>
              <span>20.000 €</span>
            </div>
          </div>

          {/* Live Metric Cards Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 uppercase font-semibold mb-1">
                {currentT.estClicksLabel}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">
                ~{estClicks.toLocaleString()} <span className="text-xs text-slate-400 font-normal">Klicks</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                Ø CPC: ~{selected.avgCpc.toFixed(2)} €
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/40">
              <div className="text-[11px] text-blue-300 uppercase font-semibold mb-1">
                {currentT.estConversionsLabel}
              </div>
              <div className="text-lg sm:text-xl font-black text-emerald-400 flex items-center gap-1">
                <span>~{estConversions}</span>
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 inline" />
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                Ø Conversion-Rate: {(selected.convRate * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>

        {/* Right column: ROI & Agency Cost Comparison (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 p-6 sm:p-8 rounded-2xl border border-blue-500/20 flex flex-col justify-between space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4">
              {currentT.agencyCostHeader}
            </h4>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center text-xs sm:text-sm">
                <span className="text-slate-400">{currentT.compProvision}</span>
                <span className="font-bold text-rose-400 line-through">~{agencyCommissionCost} € / Mo.</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 flex justify-between items-center text-xs sm:text-sm shadow-sm">
                <div>
                  <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Salih Maral Fixpreis</span>
                  </div>
                  <div className="text-[10px] text-slate-400">Keine prozentuale Beteiligung</div>
                </div>
                <span className="font-black text-base text-emerald-400">ab {salihMaralFixpreis} € / Mo.</span>
              </div>
            </div>

            {monthlySavings > 0 && (
              <div className="mt-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{currentT.savingsBadge}</span>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-2">
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/30 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{currentT.whatsappCta}</span>
            </button>

            <button
              type="button"
              onClick={handleScrollToForm}
              className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>{currentT.formCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Guarantee footer */}
          <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5 justify-center">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>{currentT.guarantee}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
