'use client'

import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, Target, Award, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export default function RoasCpaCalculator({ currentLang = 'de' }) {
  const [budget, setBudget] = useState(2500)
  const [cpc, setCpc] = useState(1.20)
  const [conversionRate, setConversionRate] = useState(2.5)
  const [orderValue, setOrderValue] = useState(85)

  const labels = {
    de: {
      title: 'Interaktiver ROAS & CPA Rechner',
      subtitle: 'Berechnen Sie den potenziellen Return on Ad Spend (ROAS) und die Kundenakquisitionskosten (CPA) Ihrer Werbekampagnen.',
      budgetLabel: 'Monatliches Werbebudget (€)',
      cpcLabel: 'Durchschn. Klickpreis / CPC (€)',
      crLabel: 'Conversion-Rate (%)',
      aovLabel: 'Durchschn. Bestellwert / AOV (€)',
      estClicks: 'Geschätzte Klicks',
      estSales: 'Geschätzte Conversions',
      estRevenue: 'Geschätzter Umsatz',
      roas: 'Erwarteter ROAS',
      cpa: 'Erwarteter CPA',
      netProfit: 'Geschätzter Bruttogewinn',
      expertAdviceTitle: 'Salih Maral Experten-Empfehlung:',
      ctaButton: 'Kostenlose Budget-Analyse anfordern',
      infraBadge: '2026 Infrastruktur',
      adviceLow: 'Ihr ROAS liegt unter 200%. Wir empfehlen eine umgehende Keyword-Bereinigung und Landingpage-Optimierung zur Vermeidung von Budgetverlusten.',
      adviceMid: 'Gute Performance! Mit Server-Side Tracking (CAPI) und CRO lässt sich Ihr ROAS nachhaltig über 400% skalieren.',
      adviceHigh: 'Hervorragender ROAS! Ihr Setup ist bereit für eine schrittweise Budget-Skalierung um 20-30% pro Woche.'
    },
    en: {
      title: 'Interactive ROAS & CPA Calculator',
      subtitle: 'Calculate your projected Return on Ad Spend (ROAS) and Cost Per Acquisition (CPA) in real-time.',
      budgetLabel: 'Monthly Ad Budget ($/€)',
      cpcLabel: 'Avg. Cost Per Click / CPC ($/€)',
      crLabel: 'Conversion Rate (%)',
      aovLabel: 'Avg. Order Value / AOV ($/€)',
      estClicks: 'Estimated Clicks',
      estSales: 'Estimated Conversions',
      estRevenue: 'Estimated Revenue',
      roas: 'Projected ROAS',
      cpa: 'Projected CPA',
      netProfit: 'Estimated Gross Profit',
      expertAdviceTitle: 'Salih Maral Expert Strategy:',
      ctaButton: 'Request Free Budget Audit',
      infraBadge: '2026 Infrastructure',
      adviceLow: 'Your projected ROAS is below 200%. We recommend immediate negative keyword filtering and landing page optimization to stop wasted spend.',
      adviceMid: 'Solid performance! By introducing Server-Side Tracking (CAPI) and CRO, your ROAS can scale beyond 400%.',
      adviceHigh: 'Outstanding ROAS! Your campaigns are primed for weekly 20-30% budget scaling.'
    },
    tr: {
      title: 'Canlı ROAS & CPA Hesaplama Aracı',
      subtitle: 'Reklam harcamalarınızın tahmini getirisini (ROAS) ve Müşteri Edinme Maliyetinizi (CPA) anında hesaplayın.',
      budgetLabel: 'Aylık Reklam Bütçesi (€ / ₺)',
      cpcLabel: 'Ort. Tıklama Başı Maliyet / CPC (€ / ₺)',
      crLabel: 'Dönüşüm Oranı (%)',
      aovLabel: 'Ortalama Sepet Tutarı / AOV (€ / ₺)',
      estClicks: 'Tahmini Tıklama',
      estSales: 'Tahmini Satış / Dönüşüm',
      estRevenue: 'Tahmini Toplam Ciro',
      roas: 'Tahmini ROAS',
      cpa: 'Tahmini CPA',
      netProfit: 'Tahmini Brüt Kar',
      expertAdviceTitle: 'Salih Maral Uzman Strateji Tavsiyesi:',
      ctaButton: 'Ücretsiz Bütçe İncelemesi İsteyin',
      infraBadge: '2026 Altyapısı',
      adviceLow: 'Tahmini ROAS %200\'ün altında. Bütçe israfını önlemek için acil negatif kelime temizliği ve dönüşüm odaklı açılış sayfası revizyonu önerilir.',
      adviceMid: 'Başarılı performans! Server-Side Tracking (CAPI) ve CRO çalışmalarıyla ROAS oranınızı %400+ seviyesine çıkarabiliriz.',
      adviceHigh: 'Mükemmel ROAS potansiyeli! Kampanyalarınız haftalık %20-30 oranında bütçe büyütmeye (scaling) hazır.'
    }
  }

  const l = labels[currentLang] || labels.de

  // Calculations
  const clicks = cpc > 0 ? Math.floor(budget / cpc) : 0
  const conversions = Math.floor(clicks * (conversionRate / 100))
  const revenue = Math.floor(conversions * orderValue)
  const roas = budget > 0 ? Math.round((revenue / budget) * 100) : 0
  const cpa = conversions > 0 ? (budget / conversions).toFixed(2) : 0
  const grossProfit = revenue - budget

  let adviceText = l.adviceLow
  let adviceColor = 'border-[#4285F4]/30 bg-[#4285F4]/10 text-slate-800'
  if (roas >= 200 && roas < 400) {
    adviceText = l.adviceMid
    adviceColor = 'border-[#4285F4]/30 bg-[#4285F4]/10 text-slate-800'
  } else if (roas >= 400) {
    adviceText = l.adviceHigh
    adviceColor = 'border-emerald-200 bg-emerald-50 text-emerald-900'
  }

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl overflow-hidden my-8 sm:my-12 p-4 sm:p-8 md:p-10">
      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4285F4]/10 text-[#4285F4] text-xs font-bold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>ROI & Growth Tool</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">{l.title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{l.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-2xl text-xs font-bold w-fit">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{l.infraBadge}</span>
          </div>
        </div>

        {/* Form Inputs & Sliders Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Ad Budget Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-gray-700">
                <label>{l.budgetLabel}</label>
                <span className="text-[#4285F4] font-bold text-sm">{budget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="250"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4285F4]"
              />
            </div>

            {/* CPC Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-gray-700">
                <label>{l.cpcLabel}</label>
                <span className="text-[#4285F4] font-bold text-sm">{cpc.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.20"
                max="10.00"
                step="0.10"
                value={cpc}
                onChange={(e) => setCpc(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4285F4]"
              />
            </div>

            {/* Conversion Rate Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-gray-700">
                <label>{l.crLabel}</label>
                <span className="text-[#4285F4] font-bold text-sm">%{conversionRate.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="15.0"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4285F4]"
              />
            </div>

            {/* AOV Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-gray-700">
                <label>{l.aovLabel}</label>
                <span className="text-[#4285F4] font-bold text-sm">{orderValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="5"
                value={orderValue}
                onChange={(e) => setOrderValue(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4285F4]"
              />
            </div>
          </div>

          {/* Dynamic Results Box */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 sm:space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pb-4 border-b border-slate-800">
                <div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-semibold">{l.estClicks}</p>
                  <p className="text-lg sm:text-xl font-bold text-white mt-0.5">{clicks.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-semibold">{l.estSales}</p>
                  <p className="text-lg sm:text-xl font-bold text-emerald-400 mt-0.5">{conversions.toLocaleString()}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-semibold">{l.roas}</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-blue-400 mt-1">%{roas.toLocaleString()}</p>
                </div>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-semibold">{l.cpa}</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-amber-400 mt-1">{cpa}</p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30">
                <p className="text-[10px] sm:text-[11px] text-emerald-300 font-semibold">{l.estRevenue}</p>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">{revenue.toLocaleString()}</p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800 text-xs flex justify-between items-center text-slate-300">
              <span>{l.netProfit}:</span>
              <span className={`font-bold text-sm ${grossProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {grossProfit.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Salih Maral Expert Strategy Banner */}
        <div className={`p-5 rounded-2xl border ${adviceColor} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300`}>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#4285F4]" />
              {l.expertAdviceTitle}
            </h4>
            <p className="text-xs sm:text-sm font-medium leading-relaxed">{adviceText}</p>
          </div>
          <a
            href={currentLang === 'de' ? '/#contact' : `/${currentLang}#contact`}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#4285F4] hover:bg-blue-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 group"
          >
            <span>{l.ctaButton}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  )
}
