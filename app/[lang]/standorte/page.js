'use client'

import React, { use } from 'react'
import Link from 'next/link'
import { MapPin, ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Sparkles, Building2 } from 'lucide-react'

const cities = [
  { id: 'frankfurt', regionKey: 'rhein-main', name: 'Frankfurt am Main', region: 'Hessen / Rhein-Main', clients: '85+', roas: '4.4x', focus: 'B2B, Finanzen & Kliniken' },
  { id: 'wiesbaden', regionKey: 'rhein-main', name: 'Wiesbaden', region: 'Hessen', clients: '50+', roas: '4.4x', focus: 'Kanzleien, Ärzte & Beratung' },
  { id: 'muenchen', regionKey: 'bayern', name: 'München', region: 'Bayern', clients: '90+', roas: '4.6x', focus: 'High-End E-Commerce & Tech' },
  { id: 'nuernberg', regionKey: 'bayern', name: 'Nürnberg', region: 'Bayern / Franken', clients: '55+', roas: '4.2x', focus: 'Tech, B2B & Handwerk' },
  { id: 'berlin', regionKey: 'berlin', name: 'Berlin', region: 'Berlin', clients: '80+', roas: '4.3x', focus: 'Start-ups, D2C & SaaS' },
  { id: 'hamburg', regionKey: 'nord', name: 'Hamburg', region: 'Hamburg', clients: '75+', roas: '4.4x', focus: 'E-Commerce & Handel' },
  { id: 'hannover', regionKey: 'nord', name: 'Hannover', region: 'Niedersachsen', clients: '50+', roas: '4.3x', focus: 'B2B, Messen & E-Commerce' },
  { id: 'koeln', regionKey: 'nrw', name: 'Köln', region: 'Nordrhein-Westfalen', clients: '60+', roas: '4.3x', focus: 'Medien, Praxen & Gastro' },
  { id: 'duesseldorf', regionKey: 'nrw', name: 'Düsseldorf', region: 'Nordrhein-Westfalen', clients: '70+', roas: '4.1x', focus: 'Mode, B2B & Handel' },
  { id: 'dortmund', regionKey: 'nrw', name: 'Dortmund & Ruhrgebiet', region: 'Nordrhein-Westfalen', clients: '65+', roas: '4.3x', focus: 'Handwerk, Sanierung & B2B' },
  { id: 'bonn', regionKey: 'nrw', name: 'Bonn', region: 'Nordrhein-Westfalen', clients: '45+', roas: '4.3x', focus: 'B2B, Dienstleister & Praxen' },
  { id: 'essen', regionKey: 'nrw', name: 'Essen & Ruhrgebiet', region: 'Nordrhein-Westfalen', clients: '55+', roas: '4.2x', focus: 'Industrie, Energie & Handwerk' },
  { id: 'duisburg', regionKey: 'nrw', name: 'Duisburg & Niederrhein', region: 'Nordrhein-Westfalen', clients: '40+', roas: '4.1x', focus: 'Logistik, Handel & Gewerbe' },
  { id: 'muenster', regionKey: 'nrw', name: 'Münster', region: 'Nordrhein-Westfalen', clients: '35+', roas: '4.2x', focus: 'Kliniken, E-Commerce & Bildung' },
  { id: 'stuttgart', regionKey: 'bw', name: 'Stuttgart', region: 'Baden-Württemberg', clients: '65+', roas: '4.2x', focus: 'Industrie, B2B & Mittelstand' },
  { id: 'mannheim', regionKey: 'bw', name: 'Mannheim & Rhein-Neckar', region: 'Baden-Württemberg', clients: '45+', roas: '4.2x', focus: 'Mittelstand, Pharma & Handel' },
  { id: 'karlsruhe', regionKey: 'bw', name: 'Karlsruhe', region: 'Baden-Württemberg', clients: '40+', roas: '4.3x', focus: 'IT, Software & B2B Leads' },
  { id: 'leipzig', regionKey: 'sachsen', name: 'Leipzig & Dresden', region: 'Sachsen', clients: '50+', roas: '4.2x', focus: 'E-Commerce & Scale-ups' },
]

const regionOrder = ['rhein-main', 'nrw', 'bw', 'bayern', 'nord', 'berlin', 'sachsen']

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
      contactBtn: 'Bundesweite Betreuung anfragen',
      regions: {
        'rhein-main': { title: 'Rhein-Main', text: 'Frankfurt und Wiesbaden teilen sich Pendler, Kliniken und Kanzleien, aber nicht dieselben Suchbegriffe. Dreieich, Offenbach, Mainz und der Rheingau bleiben eigene Ziele. Die Betreuung sitzt in Dreieich und arbeitet diese Städte mit Festpreis, nicht mit einem Radius um den Hauptbahnhof.' },
        nrw: { title: 'Nordrhein-Westfalen', text: 'Köln, Düsseldorf, Bonn und das Ruhrgebiet überschneiden sich auf der Karte und trennen sich in der Suche. Eine Kampagne für „NRW“ bezahlt den teuersten Klick und verfehlt den Ortsnamen, mit dem der Auftrag beginnt. Jede Stadt behält eigene Anzeigen, das Reporting bleibt eines.' },
        bw: { title: 'Baden-Württemberg', text: 'Stuttgart kauft über Maschinenbau und Mittelstand, Mannheim über Rhein-Neckar, Karlsruhe über IT. Drei Märkte, drei Gebotsstrategien. Esslingen, Heidelberg und Pforzheim werden nicht unter dem Namen der größten Stadt versteckt.' },
        bayern: { title: 'Bayern', text: 'München ist ein Hochpreis-Markt für Tech, Premium-Handel und Kliniken. Nürnberg, Fürth und Erlangen sind ein zweiter Markt mit eigenem Mittelstand. Wer beide mit Münchner Geboten steuert, verbrennt Franken und verliert in München trotzdem die Auktion.' },
        nord: { title: 'Norddeutschland', text: 'Hamburg trägt Handel, Hafen und E-Commerce. Hannover trägt Messen und die Region darum herum. Messe-Begriffe laufen zeitlich, die regionale Suche in Garbsen, Langenhagen, Altona und Harburg läuft durch.' },
        berlin: { title: 'Berlin', text: 'Berlin mischt internationale Marken und sehr lokale Bezirke. SaaS-Demos, D2C-Käufe und ein Dienstleister in Mitte sind drei Kampagnen. Ein einziges Berlin-Keyword ohne Bezirk ist entweder zu teuer oder zu unscharf.' },
        sachsen: { title: 'Sachsen', text: 'Leipzig und Dresden teilen das Bundesland, nicht die Lieferzeit und nicht den Klickpreis. E-Commerce aus Leipzig und lokale Betriebe in Plagwitz oder Halle werden getrennt geboten.' },
      }
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
      contactBtn: 'Genel Teklif Alın',
      regions: {
        'rhein-main': { title: 'Rhein-Main', text: 'Frankfurt ve Wiesbaden banliyöyü, klinikleri ve hukuk bürolarını paylaşır; arama kelimesini paylaşmaz. Dreieich, Offenbach, Mainz ve Rheingau ayrı hedeftir. Çalışma Dreieich’ten yürür ve bu şehirler sabit ücretle, ana garaj çevresindeki tek yarıçapla değil, ayrı kurulur.' },
        nrw: { title: 'Kuzey Ren-Vestfalya', text: 'Köln, Düsseldorf, Bonn ve Ruhr haritada iç içedir, aramada ayrıdır. “NRW” kampanyası en pahalı tıklamayı öder ve işin başladığı ilçe adını kaçırır. Her şehrin kendi reklamı vardır, rapor tektir.' },
        bw: { title: 'Baden-Württemberg', text: 'Stuttgart makine ve KOBİ, Mannheim Rhein-Neckar, Karlsruhe BT üzerinden satın alır. Üç pazar, üç teklif. Esslingen, Heidelberg ve Pforzheim en büyük şehrin adının altına gizlenmez.' },
        bayern: { title: 'Bavyera', text: 'Münih teknoloji, premium ticaret ve klinikler için yüksek fiyatlı bir pazardır. Nürnberg, Fürth ve Erlangen kendi KOBİ’si olan ikinci pazardır. İkisini Münih teklifiyle yönetmek Franken’i yakar ve Münih açık artırmasını da kaybettirir.' },
        nord: { title: 'Kuzey Almanya', text: 'Hamburg ticaret, liman ve e-ticaret taşır. Hannover fuarları ve çevresindeki bölgeyi taşır. Fuar kelimeleri tarihli açılır; Garbsen, Langenhagen, Altona ve Harburg araması sürer.' },
        berlin: { title: 'Berlin', text: 'Berlin uluslararası markalarla çok yerel ilçeleri aynı anda taşır. SaaS demosu, D2C satın alması ve Mitte’deki bir hizmet üç kampanyadır. İlçesiz tek bir Berlin kelimesi ya pahalı ya da bulanıktır.' },
        sachsen: { title: 'Saksonya', text: 'Leipzig ve Dresden eyaleti paylaşır, teslimat süresini ve tıklama fiyatını paylaşmaz. Leipzig’den e-ticaret ile Plagwitz veya Halle’deki yerel işletme ayrı tekliflenir.' },
      }
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
      contactBtn: 'Request Nationwide Consultation',
      regions: {
        'rhein-main': { title: 'Rhine-Main', text: 'Frankfurt and Wiesbaden share commuters, clinics and law firms, not the same queries. Dreieich, Offenbach, Mainz and the Rheingau stay separate targets. The work runs from Dreieich, on a flat fee, not as one radius around the central station.' },
        nrw: { title: 'North Rhine-Westphalia', text: 'Cologne, Düsseldorf, Bonn and the Ruhr overlap on the map and split in search. A campaign for “NRW” pays the most expensive click and misses the place name that starts the job. Each city keeps its own ads. The report stays one.' },
        bw: { title: 'Baden-Württemberg', text: 'Stuttgart buys through engineering and the mid-market, Mannheim through Rhine-Neckar, Karlsruhe through IT. Three markets, three bid strategies. Esslingen, Heidelberg and Pforzheim are not hidden under the largest city’s name.' },
        bayern: { title: 'Bavaria', text: 'Munich is a high-price market for tech, premium retail and clinics. Nuremberg, Fürth and Erlangen are a second market with their own mid-sized firms. Running both on Munich bids burns Franconia and still loses the Munich auction.' },
        nord: { title: 'Northern Germany', text: 'Hamburg carries trade, the port and e-commerce. Hanover carries trade fairs and the region around them. Fair terms run on a schedule. Regional search in Garbsen, Langenhagen, Altona and Harburg runs all year.' },
        berlin: { title: 'Berlin', text: 'Berlin mixes international brands and very local boroughs. A SaaS demo, a D2C purchase and a service in Mitte are three campaigns. One Berlin keyword with no borough is either too expensive or too vague.' },
        sachsen: { title: 'Saxony', text: 'Leipzig and Dresden share the state, not the delivery time and not the click price. E-commerce shipping from Leipzig and local businesses in Plagwitz or Halle are bid separately.' },
      }
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
          <div className="space-y-14">
          {regionOrder.map((key) => {
            const region = t.regions[key]
            const group = cities.filter((city) => city.regionKey === key)
            return (
            <section key={key}>
              <h2 className="text-2xl md:text-3xl font-black mb-3">{region.title}</h2>
              <p className="text-slate-300 max-w-3xl mb-6 leading-relaxed">{region.text}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.map((city) => (
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

                  <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#4285F4] transition-colors">
                    {city.name}
                  </h3>
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
            </section>
            )
          })}
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
