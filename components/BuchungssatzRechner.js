'use client'

import { useState } from 'react'
import { Calculator, ArrowRight, CheckCircle2, Info } from 'lucide-react'

const PLATFORMS = {
  google: {
    name: 'Google Ads (Google Ireland Ltd.)',
    vatType: 'reverse_charge',
    ustva: 'Kz. 84 (Bemessungsgrundlage) & Kz. 67 (Vorsteuerabzug)',
    skr03: '4600 (Werbekosten) / 4603 (EU § 13b) an Bank + Kz. 84 / 67',
    skr04: '6600 (Werbekosten) / 6603 (EU § 13b) an Bank + Kz. 84 / 67',
    note: 'IE6388047V · 0% USt-Ausweis mit gültiger DE-USt-IdNr.',
  },
  meta: {
    name: 'Meta Ads (Meta Platforms Ireland Ltd.)',
    vatType: 'reverse_charge',
    ustva: 'Kz. 46 / 84 (Bemessungsgrundlage) & Kz. 67 (Vorsteuerabzug)',
    skr03: '4600 (Werbekosten) mit Schlüssel BU 94 / § 13b EU-Erwerb',
    skr04: '6600 (Werbekosten) mit Schlüssel BU 94 / § 13b EU-Erwerb',
    note: 'IE9692928F · Facebook & Instagram Ads über Irland abgerechnet.',
  },
  linkedin: {
    name: 'LinkedIn Ads (LinkedIn Ireland Unlimited Co.)',
    vatType: 'reverse_charge',
    ustva: 'Kz. 84 & Kz. 67 (UStVA) — Reverse Charge EU',
    skr03: '4600 (Werbekosten, § 13b UStG EU-Dienstleistung)',
    skr04: '6600 (Werbekosten, § 13b UStG EU-Dienstleistung)',
    note: 'IE9740425P · B2B-Werbeausgaben aus Dublin.',
  },
  microsoft: {
    name: 'Microsoft / Bing Ads (Microsoft Ireland Operations Ltd.)',
    vatType: 'reverse_charge',
    ustva: 'Kz. 84 & Kz. 67 (UStVA) — Reverse Charge EU',
    skr03: '4600 (Werbekosten, § 13b UStG EU-Dienstleistung)',
    skr04: '6600 (Werbekosten, § 13b UStG EU-Dienstleistung)',
    note: 'IE8256796U · Steuer-ID im Zahlungsprofil erforderlich.',
  },
  tiktok: {
    name: 'TikTok Ads (TikTok Information Technologies UK Ltd.)',
    vatType: 'drittland',
    ustva: 'Kz. 52 / 53 (Leistungsort § 3a Abs. 2 UStG Drittland UK) & Kz. 67',
    skr03: '4600 (Werbekosten Drittland § 13b Abs. 2 Nr. 1 UStG)',
    skr04: '6600 (Werbekosten Drittland § 13b Abs. 2 Nr. 1 UStG)',
    note: 'UK-Drittland nach Brexit: § 13b UStG ohne Zusammenfassende Meldung (ZM).',
  },
}

export default function BuchungssatzRechner({ lang = 'de' }) {
  const [platformKey, setPlatformKey] = useState('google')
  const [rahmen, setRahmen] = useState('skr03')
  const [nettoRaw, setNettoRaw] = useState('1500')
  const [isKleinunternehmer, setIsKleinunternehmer] = useState(false)

  const netto = Math.max(0, parseFloat(nettoRaw) || 0)
  const plat = PLATFORMS[platformKey] || PLATFORMS.google
  const steuer19 = +(netto * 0.19).toFixed(2)
  const vorsteuer = isKleinunternehmer ? 0 : steuer19
  const effektiv = +(netto + steuer19 - vorsteuer).toFixed(2)
  const buchungssatz = rahmen === 'skr03' ? plat.skr03 : plat.skr04

  const fmt = (n) =>
    n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'

  return (
    <div className="my-8 rounded-2xl border-2 border-blue-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-6 md:p-8 text-white shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 block">
              {lang === 'tr' ? 'İnteraktif Vergi & Muhasebe Aracı' : lang === 'en' ? 'Interactive Accounting Tool' : 'Interaktiver Praxis-Rechner 2026'}
            </span>
            <h3 className="text-lg md:text-xl font-extrabold text-white m-0">
              {lang === 'tr'
                ? 'SKR03 / SKR04 & § 13b UStG Kayıt ve KDV Hesaplayıcı'
                : lang === 'en'
                ? 'SKR03 / SKR04 & § 13b Reverse Charge Calculator'
                : 'SKR03 / SKR04 & § 13b UStG Buchungssatz-Rechner'}
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            {lang === 'tr' ? 'Reklam Platformu' : 'Werbeplattform'}
          </label>
          <select
            value={platformKey}
            onChange={(e) => setPlatformKey(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2.5 text-sm text-white focus:border-blue-400 focus:outline-none"
          >
            <option value="google">Google Ads (Irland)</option>
            <option value="meta">Meta Ads (Irland)</option>
            <option value="linkedin">LinkedIn Ads (Irland)</option>
            <option value="microsoft">Microsoft / Bing Ads (Irland)</option>
            <option value="tiktok">TikTok Ads (UK / Drittland)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            {lang === 'tr' ? 'Hesap Planı' : 'Kontenrahmen'}
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setRahmen('skr03')}
              className={`py-2.5 rounded-xl text-sm font-bold border transition-colors ${
                rahmen === 'skr03'
                  ? 'bg-blue-600 border-blue-400 text-white'
                  : 'bg-slate-950 border-slate-700 text-slate-300 hover:border-slate-500'
              }`}
            >
              SKR03
            </button>
            <button
              type="button"
              onClick={() => setRahmen('skr04')}
              className={`py-2.5 rounded-xl text-sm font-bold border transition-colors ${
                rahmen === 'skr04'
                  ? 'bg-blue-600 border-blue-400 text-white'
                  : 'bg-slate-950 border-slate-700 text-slate-300 hover:border-slate-500'
              }`}
            >
              SKR04
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            {lang === 'tr' ? 'Net Fatura Tutarı (€)' : 'Rechnungsbetrag Netto (€)'}
          </label>
          <input
            type="number"
            min="0"
            step="50"
            value={nettoRaw}
            onChange={(e) => setNettoRaw(e.target.value)}
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2.5 text-sm text-white focus:border-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            {lang === 'tr' ? 'Vergi Statüsü' : 'Unternehmensstatus'}
          </label>
          <select
            value={isKleinunternehmer ? 'ku' : 'regel'}
            onChange={(e) => setIsKleinunternehmer(e.target.value === 'ku')}
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2.5 text-sm text-white focus:border-blue-400 focus:outline-none"
          >
            <option value="regel">Regelbesteuerung (Vorsteuerabzug)</option>
            <option value="ku">Kleinunternehmer (§ 19 UStG)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
          <span className="text-xs text-slate-400 block mb-1">§ 13b UStG (19 % Steuerschuld)</span>
          <span className="text-xl font-black text-amber-300">{fmt(steuer19)}</span>
        </div>
        <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
          <span className="text-xs text-slate-400 block mb-1">Vorsteuerabzug (UStVA)</span>
          <span className="text-xl font-black text-emerald-400">- {fmt(vorsteuer)}</span>
        </div>
        <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
          <span className="text-xs text-slate-400 block mb-1">Effektive Netto-Belastung</span>
          <span className="text-xl font-black text-white">{fmt(effektiv)}</span>
        </div>
      </div>

      <div className="rounded-xl bg-slate-950 border border-blue-500/30 p-4 space-y-2 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-bold text-blue-300">Buchungssatz ({rahmen.toUpperCase()}):</span>
          <span className="text-slate-100 font-mono text-xs sm:text-sm">{buchungssatz}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Info className="w-4 h-4 text-sky-400 shrink-0" />
          <span className="font-bold text-sky-300">ELSTER UStVA:</span>
          <span className="text-slate-200">{plat.ustva}</span>
        </div>
        <div className="text-xs text-slate-400 pt-1">
          {plat.note}{' '}
          {isKleinunternehmer
            ? 'Hinweis: Kleinunternehmer nach § 19 UStG schulden die 19% USt nach § 13b ans Finanzamt, dürfen aber keine Vorsteuer abziehen.'
            : 'Hinweis: Bei voller Vorsteuerabzugsberechtigung ist § 13b komplett liquiditätsneutral. Unverbindliche Orientierungshilfe (keine Steuerberatung).'}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
        <span className="text-xs text-slate-300">
          Monatlich bis zu 35 % Streuverlust im Google/Meta Konto vermeiden (Betreuung zum Fixpreis ab 590 €)
        </span>
        <a
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 text-xs font-bold text-white transition-colors"
        >
          <span>Kostenlosen Konto-Check anfragen</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}
