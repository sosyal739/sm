'use client'

import React, { use, useState } from 'react'
import Link from 'next/link'
import { 
  MapPin, ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Sparkles, Building2,
  ChevronRight, ChevronDown, Menu, X, ArrowUpRight, BookOpen, Star, Mail, Phone
} from 'lucide-react'

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

const getHomeUrl = (lang) => (lang === 'de' ? '/' : `/${lang}`)

const getServiceUrl = (lang, slug) => {
  if (lang === 'de') return `/de/dienstleistungen/${slug}`
  if (lang === 'en') return `/en/services/${slug === 'yorum-yonetimi' ? 'review-management' : slug}`
  return `/tr/hizmetler/${slug}`
}

const servicesList = [
  {
    slug: 'google-ads',
    short: 'G',
    color: 'from-blue-500/20 to-blue-600/10 text-blue-400 border-blue-500/30',
    de: {
      name: 'Google Ads Betreuung',
      desc: 'Search, Shopping, PMax & YouTube Kampagnen mit 17+ Jahren Senior-Erfahrung.',
      badge: 'Zertifizierter Google Partner',
      bullets: ['Smart Bidding & ROAS-Skalierung', 'Ausschluss teurer Klickfresser', 'Transparenter monatlicher Fixpreis']
    },
    tr: {
      name: 'Google Ads Yönetimi',
      desc: 'Arama, Alışveriş, PMax ve YouTube reklamları ile kârlı müşteri kazanımı.',
      badge: 'Resmi Google Partneri',
      bullets: ['Akıllı Teklif & ROAS Ölçekleme', 'Gereksiz Tıklama Engelleyici Liste', 'Komisyonsuz Şeffaf Sabit Fiyat']
    },
    en: {
      name: 'Google Ads Management',
      desc: 'High-converting Search, Shopping, PMax and YouTube campaigns with 17+ years exp.',
      badge: 'Certified Google Partner',
      bullets: ['Smart Bidding & ROAS Optimization', 'Zero-Wasted-Ad-Spend Negatives', 'Transparent Flat-Fee Retainer']
    }
  },
  {
    slug: 'meta-ads',
    short: 'M',
    color: 'from-indigo-500/20 to-purple-600/10 text-indigo-400 border-indigo-500/30',
    de: {
      name: 'Meta Ads (Facebook & IG)',
      desc: 'Advantage+ Shopping, Instagram Reels & UGC-Videoanzeigen mit CAPI-Tracking.',
      badge: 'Meta CAPI & Advantage+',
      bullets: ['92%+ Event Match Quality (CAPI)', 'High-Converting Creative Frameworks', 'DSGVO-konforme B2B & B2C Skalierung']
    },
    tr: {
      name: 'Meta Ads (Facebook & Instagram)',
      desc: 'Advantage+ Shopping, Reels video reklamları ve CAPI dönüşüm altyapısı.',
      badge: 'Meta CAPI & Advantage+',
      bullets: ['%92+ Eşleşme Kalitesi (CAPI)', 'Dönüşüm Odaklı Video Reklamlar', 'KVKK / DSGVO Uyumlu Ölçekleme']
    },
    en: {
      name: 'Meta Ads (Facebook & IG)',
      desc: 'Advantage+ Shopping, Instagram Reels & UGC video ads with server-side CAPI.',
      badge: 'Meta CAPI & Advantage+',
      bullets: ['92%+ Event Match Quality (CAPI)', 'High-Converting Creative Frameworks', 'GDPR-Compliant Scaling']
    }
  },
  {
    slug: 'server-side-tracking',
    short: 'T',
    color: 'from-emerald-500/20 to-teal-600/10 text-emerald-400 border-emerald-500/30',
    de: {
      name: 'Server-Side Tracking & CAPI',
      desc: 'Befreien Sie Ihre Kampagnen von Ad-Blockern & iOS-ITP — bis zu 35% mehr Daten.',
      badge: '100% DSGVO & First-Party',
      bullets: ['First-Party Server-Container (GTM)', 'Volle Datenkontrolle ohne Browser-Verlust', 'Consent Mode v2 & Enhanced Conversions']
    },
    tr: {
      name: 'Server-Side Tracking & CAPI',
      desc: 'Ad-blocker ve iOS kısıtlamalarını aşın, %35 daha fazla dönüşüm sinyali toplayın.',
      badge: '%100 DSGVO & First-Party',
      bullets: ['First-Party Sunucu Konteynırı (sGTM)', 'Kayıpsız Satış ve Lead Takibi', 'Consent Mode v2 & Gelişmiş Dönüşümler']
    },
    en: {
      name: 'Server-Side Tracking & CAPI',
      desc: 'Bypass ad blockers & iOS ITP restrictions to recover up to 35% lost conversion signals.',
      badge: '100% GDPR & First-Party',
      bullets: ['First-Party Server Container (sGTM)', 'Complete Data Accuracy & Zero Signal Loss', 'Consent Mode v2 & Enhanced Conversions']
    }
  },
  {
    slug: 'seo',
    short: 'S',
    color: 'from-amber-500/20 to-orange-600/10 text-amber-400 border-amber-500/30',
    de: {
      name: 'SEO & GEO (KI-Suchmaschinen)',
      desc: 'Organische Google Platz-1-Rankings und Zitierungen in ChatGPT, Perplexity & Gemini.',
      badge: 'Google & AI Visibility',
      bullets: ['100/100 Core Web Vitals & SSR Schema', 'Google Maps 3-Pack Lokale Dominanz', 'GEO: llms.txt & Princeton AI Citations']
    },
    tr: {
      name: 'SEO & GEO (Yapay Zeka Araması)',
      desc: 'Google organik 1. sıra ve ChatGPT, Perplexity, Gemini yapay zeka arama görünürlüğü.',
      badge: 'Google & AI Görünürlüğü',
      bullets: ['100/100 Core Web Vitals & Schema', 'Google Haritalar Yerel Zirve', 'GEO: llms.txt & AI Alıntılanabilirlik']
    },
    en: {
      name: 'SEO & GEO (AI Search Engines)',
      desc: 'Top organic Google rankings & verified citations in ChatGPT, Perplexity & Gemini.',
      badge: 'Google & AI Visibility',
      bullets: ['100/100 Core Web Vitals & SSR Schema', 'Google Maps Local 3-Pack Dominance', 'GEO: llms.txt & AI Overviews Citability']
    }
  },
  {
    slug: 'youtube-ads',
    short: 'Y',
    color: 'from-rose-500/20 to-red-600/10 text-rose-400 border-rose-500/30',
    de: {
      name: 'YouTube Ads & Video-Performance',
      desc: 'TrueView In-Stream & Shorts Anzeigen für starke Markenbekanntheit und direkte B2B Leads.',
      badge: 'High-Retention Video',
      bullets: ['Algorithmen-optimierte Hook-Formate', 'B2B & D2C Zielgruppen-Targeting', 'Messbare Leads & Anfragen über Video']
    },
    tr: {
      name: 'YouTube Ads & Video Reklamları',
      desc: 'TrueView ve Shorts reklamları ile güçlü marka bilinirliği ve doğrudan müşteri talebi.',
      badge: 'Yüksek Etkileşimli Video',
      bullets: ['Algoritma Odaklı Hook Kurguları', 'B2B & B2C Hedef Kitle Odaklaması', 'Video Üzerinden Ölçülebilir Satış']
    },
    en: {
      name: 'YouTube Ads & Video Performance',
      desc: 'TrueView In-Stream & Shorts video campaigns driving brand equity and qualified leads.',
      badge: 'High-Retention Video',
      bullets: ['Algorithm-Optimized Hook Formats', 'Precision B2B & D2C Audience Targeting', 'Measurable Pipeline & Video Inquiries']
    }
  },
  {
    slug: 'bewertungsmanagement',
    short: 'B',
    color: 'from-cyan-500/20 to-blue-600/10 text-cyan-400 border-cyan-500/30',
    de: {
      name: 'Google Bewertungsmanagement',
      desc: 'Entfernung unberechtigter 1-Stern-Rezensionen und Schutz Ihres guten Rufs.',
      badge: 'Reputationsschutz',
      bullets: ['Rechtssichere Löschung von Fake-Bewertungen', 'Sicherung des 4.8+ Sterne Durchschnitts', 'Steigerung der Conversion-Rate um bis zu 27%']
    },
    tr: {
      name: 'Google Yorum Yönetimi & İtibar',
      desc: 'Haksız ve sahte 1 yıldızlı yorumların silinmesi, işletme itibarının korunması.',
      badge: 'İtibar Koruması',
      bullets: ['Haksız ve Sahte Yorumların Kaldırılması', '4.8+ Yıldız Puanı Güvencesi', 'Müşteri Güveninde %27 Artış']
    },
    en: {
      name: 'Google Review & Reputation Management',
      desc: 'Legally compliant removal of fake 1-star reviews and stellar reputation protection.',
      badge: 'Reputation Protection',
      bullets: ['Removal of Defamatory & Fake Reviews', 'Securing 4.8+ Star Rating Average', 'Conversion Rate Lift by up to 27%']
    }
  }
]

const topCitiesNav = [
  { slug: 'frankfurt', name: 'Frankfurt am Main' },
  { slug: 'muenchen', name: 'München' },
  { slug: 'duesseldorf', name: 'Düsseldorf' },
  { slug: 'koeln', name: 'Köln' },
  { slug: 'berlin', name: 'Berlin' },
  { slug: 'hamburg', name: 'Hamburg' },
  { slug: 'stuttgart', name: 'Stuttgart' },
  { slug: 'nuernberg', name: 'Nürnberg' },
  { slug: 'dortmund', name: 'Dortmund' },
  { slug: 'bonn', name: 'Bonn' },
  { slug: 'hannover', name: 'Hannover' },
  { slug: 'leipzig', name: 'Leipzig' }
]

const strategicGuides = [
  {
    href: '/blog/google-ads-agentur-preise-kosten-deutschland-2026',
    title: {
      de: 'Google Ads Agentur Preise 2026: Was kostet professionelle Betreuung in Deutschland?',
      tr: 'Google Ads Ajans Ücretleri 2026: Almanya\'da Profesyonel Yönetim Ne Kadar?',
      en: 'Google Ads Agency Costs 2026: How Much Does Professional Management Cost in Germany?'
    },
    tag: {
      de: 'Preise & ROI Benchmark',
      tr: 'Fiyat & ROI Analizi',
      en: 'Pricing & ROI Benchmark'
    },
    readTime: '8 Min.'
  },
  {
    href: '/blog/google-ads-negative-keywords-ausschlussliste-deutschland-2026',
    title: {
      de: '500+ Google Ads Negativ-Keywords Liste: Ausschlussliste Deutschland 2026',
      tr: '500+ Negatif Anahtar Kelime Listesi: Almanya Reklamlarında Bütçe İsrafını Önleme 2026',
      en: '500+ Google Ads Negative Keywords List: Germany Master Exclusion 2026'
    },
    tag: {
      de: 'Budgetschutz & PMax',
      tr: 'Bütçe Koruma & PMax',
      en: 'Budget Protection & PMax'
    },
    readTime: '12 Min.'
  },
  {
    href: '/blog/google-ads-b2b-it-software-saas-deutschland-2026',
    title: {
      de: 'Google Ads für B2B, IT & Software SaaS in Deutschland: LinkedIn vs. Google Ads',
      tr: 'Almanya\'da B2B, IT ve Yazılım Şirketleri İçin Google Ads: LinkedIn vs. Google Ads',
      en: 'Google Ads for B2B, IT & Software SaaS in Germany: LinkedIn vs. Google Ads'
    },
    tag: {
      de: 'B2B Lead-Generierung',
      tr: 'B2B Müşteri Kazanımı',
      en: 'B2B Lead Generation'
    },
    readTime: '10 Min.'
  },
  {
    href: '/blog/almanyada-handwerk-sanierung-myhammer-vs-google-ads-2026',
    title: {
      de: 'Handwerker & Sanierung in Deutschland: MyHammer vs. Eigene Google Ads 2026',
      tr: 'Almanya\'da İnşaat & Usta Sektörü (Handwerk): MyHammer Bağımlılığı vs. Google Ads',
      en: 'Trades & Renovation in Germany: MyHammer Dependency vs. Own Google Ads 2026'
    },
    tag: {
      de: 'Handwerk & Bau',
      tr: 'İnşaat & Usta',
      en: 'Trades & Construction'
    },
    readTime: '9 Min.'
  }
]

export default function StandorteHubPage({ params }) {
  const resolvedParams = use(params)
  const lang = resolvedParams?.lang || 'de'
  const currentLang = ['de', 'tr', 'en'].includes(lang) ? lang : 'de'

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  const t = {
    de: {
      badge: 'STANDORTE IN DEUTSCHLAND',
      title: 'Google Ads & Performance Marketing nach Städten',
      subtitle: 'Finden Sie Ihren lokalen Google Ads und Meta Ads Experten für die führenden Wirtschaftsmetropolen in Deutschland.',
      clientBadge: 'Verifizierte Kunden',
      roasBadge: 'Ø ROAS',
      ctaCard: 'Standort-Analyse ansehen',
      contactTitle: 'Ihre Stadt ist nicht aufgeführt?',
      contactSub: 'Wir betreuen Kunden im gesamten deutschsprachigen Raum (DACH) zum planbaren Fixpreis ohne Budget-Provision.',
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
      clientBadge: 'Aktif Müşteri',
      roasBadge: 'Ort. ROAS',
      ctaCard: 'Şehir Stratejisini İncele',
      contactTitle: 'Şehriniz Listede Yok mu?',
      contactSub: 'Tüm Almanya, Avusturya ve İsviçre genelinde bütçeden komisyonsuz, sabit fiyatlı reklam yönetimi sunuyoruz.',
      contactBtn: 'Genel Teklif Alın',
      regions: {
        'rhein-main': { title: 'Rhein-Main', text: 'Frankfurt ve Wiesbaden banliyöyü, klinikleri ve hukuk bürolarını paylaşır; arama kelimesini paylaşmaz. Dreieich, Offenbach, Mainz ve Rheingau ayrı hedeftir. Çalışma Dreieich’ten yürür ve bu şehirler sabit ücretle, tek yarıçapla değil, ayrı kurulur.' },
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
      clientBadge: 'Verified Clients',
      roasBadge: 'Avg. ROAS',
      ctaCard: 'View City Strategy',
      contactTitle: 'Your City Not Listed?',
      contactSub: 'We manage performance campaigns nationwide across Germany, Austria, and Switzerland on a predictable flat-fee basis.',
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

  const schemaJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Salih Maral Google Ads & Performance Marketing - Standorte Deutschland',
      url: `https://salihmaral.de/${currentLang}/standorte`,
      telephone: '+49-172-4106463',
      email: 'info@salihmaral.de',
      image: 'https://salihmaral.de/logo.png',
      priceRange: '€€',
      founder: {
        '@type': 'Person',
        name: 'Salih Maral',
        jobTitle: 'Official Google Partner & Senior Digital Marketing Expert'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Germany'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: currentLang === 'tr' ? 'Ana Sayfa' : currentLang === 'en' ? 'Home' : 'Startseite',
          item: currentLang === 'de' ? 'https://salihmaral.de' : `https://salihmaral.de/${currentLang}`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: currentLang === 'tr' ? 'Şehirler' : currentLang === 'en' ? 'Locations' : 'Standorte',
          item: `https://salihmaral.de/${currentLang}/standorte`
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-600 selection:text-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Partner Badge */}
          <div className="flex items-center gap-3">
            <Link href={getHomeUrl(currentLang)} className="flex items-center gap-2 group">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Salih Maral<span className="text-blue-500">.</span>
              </span>
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-semibold text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              Offizieller Google Partner
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <Link href={getHomeUrl(currentLang)} className="hover:text-white transition-colors">
              {currentLang === 'tr' ? 'Ana Sayfa' : currentLang === 'en' ? 'Home' : 'Startseite'}
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-white py-2 transition-colors cursor-pointer">
                <span>{currentLang === 'tr' ? 'Hizmetler' : currentLang === 'en' ? 'Services' : 'Dienstleistungen'}</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 p-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="space-y-1">
                    {servicesList.map((srv) => (
                      <Link
                        key={srv.slug}
                        href={getServiceUrl(currentLang, srv.slug)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs shrink-0 mt-0.5 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                          {srv.short}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover/item:text-blue-400 transition-colors">
                            {srv[currentLang]?.name}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {srv[currentLang]?.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href={`/${currentLang}/standorte`} className="text-blue-400 font-bold hover:text-white transition-colors">
              {currentLang === 'tr' ? 'Şehirler' : currentLang === 'en' ? 'Locations' : 'Standorte'}
            </Link>

            <Link href="/blog" className="hover:text-white transition-colors">
              {currentLang === 'tr' ? 'Blog & Rehber' : currentLang === 'en' ? 'Guides & Blog' : 'Ratgeber & Blog'}
            </Link>

            <Link href={`${getHomeUrl(currentLang)}#about`} className="hover:text-white transition-colors">
              {currentLang === 'tr' ? 'Hakkımda' : currentLang === 'en' ? 'About' : 'Über mich'}
            </Link>
          </div>

          {/* Right: Language Switcher + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs font-bold">
              {['de', 'tr', 'en'].map((lng) => (
                <Link
                  key={lng}
                  href={`/${lng}/standorte`}
                  className={`px-2 py-1 rounded transition-colors ${
                    currentLang === lng
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lng.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href={`${getHomeUrl(currentLang)}#contact`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <span>{currentLang === 'tr' ? 'Teklif Al' : currentLang === 'en' ? 'Get Proposal' : 'Angebot anfordern'}</span>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Navigation öffnen"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-2">
              <Link
                href={getHomeUrl(currentLang)}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
              >
                {currentLang === 'tr' ? 'Startseite / Ana Sayfa' : currentLang === 'en' ? 'Home' : 'Startseite'}
              </Link>
              <Link
                href={`/${currentLang}/standorte`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-blue-400 font-bold hover:bg-slate-900"
              >
                {currentLang === 'tr' ? 'Şehirler (Standorte)' : currentLang === 'en' ? 'Locations' : 'Standorte Übersicht'}
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
              >
                {currentLang === 'tr' ? 'Blog & Rehberler' : currentLang === 'en' ? 'Guides & Blog' : 'Ratgeber & Blog'}
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <div className="text-xs font-bold uppercase text-slate-400 px-3 mb-2">
                {currentLang === 'tr' ? 'Hizmetlerimiz' : currentLang === 'en' ? 'Our Services' : 'Dienstleistungen'}
              </div>
              <div className="grid grid-cols-1 gap-1">
                {servicesList.map((srv) => (
                  <Link
                    key={srv.slug}
                    href={getServiceUrl(currentLang, srv.slug)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-blue-400"
                  >
                    <span>{srv[currentLang]?.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`${getHomeUrl(currentLang)}#contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg text-center cursor-pointer"
              >
                {currentLang === 'tr' ? 'Ücretsiz Teklif Alın ➔' : currentLang === 'en' ? 'Request Proposal ➔' : 'Kostenloses Angebot anfordern ➔'}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        {/* Breadcrumb Navigation Bar */}
        <div className="bg-slate-900/60 border-b border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
              <Link href={getHomeUrl(currentLang)} className="hover:text-blue-400 transition-colors flex items-center gap-1">
                <span>{currentLang === 'tr' ? 'Ana Sayfa' : currentLang === 'en' ? 'Home' : 'Startseite'}</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-white font-semibold">
                {currentLang === 'tr' ? 'Almanya Şehirleri (Standorte)' : currentLang === 'en' ? 'Locations' : 'Standorte Deutschland'}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Header */}
        <header className="pt-16 pb-16 relative overflow-hidden">
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

        {/* Cities Grid By Regions */}
        <div className="py-8 relative z-10">
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

            {/* Clickable Core Services Portfolio */}
            <div className="mt-20 pt-16 border-t border-slate-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    <span>{currentLang === 'tr' ? 'Tüm Hizmet Alanlarımız' : currentLang === 'en' ? 'Full Service Portfolio' : 'Full-Service Leistungsspektrum'}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white">
                    {currentLang === 'tr'
                      ? 'Almanya Genelinde Sunduğumuz Dijital Büyüme Hizmetleri'
                      : currentLang === 'en'
                      ? 'Digital Growth & Advertising Services Across Germany'
                      : 'Verzahnte Kernkanäle für alle Standorte'}
                  </h2>
                </div>
                <p className="text-slate-400 text-sm max-w-md mt-3 md:mt-0">
                  {currentLang === 'tr'
                    ? 'Bütçeden komisyonsuz, aylık şeffaf sabit fiyat (Fixpreis) modeliyle çalışıyoruz. İncelemek istediğiniz hizmete tıklayın:'
                    : currentLang === 'en'
                    ? 'Operating on a predictable flat-fee retainer with zero percentage conflicts. Click any service for full details:'
                    : 'Transparente Betreuung zum planbaren Fixpreis ohne Budget-Provision. Klicken Sie auf einen Bereich für Details:'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesList.map((srv) => {
                  const srvData = srv[currentLang] || srv.de
                  return (
                    <Link
                      key={srv.slug}
                      href={getServiceUrl(currentLang, srv.slug)}
                      className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/70 shadow-lg hover:shadow-blue-500/10 transition-all duration-200 hover:-translate-y-1"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${srv.color} border flex items-center justify-center font-black text-xl`}>
                            {srv.short}
                          </div>
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                            {srvData.badge}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2 flex items-center justify-between">
                          <span>{srvData.name}</span>
                          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </h3>

                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                          {srvData.desc}
                        </p>

                        <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                          {srvData.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-blue-300">
                        <span>{currentLang === 'tr' ? 'Hizmet detaylarını incele' : currentLang === 'en' ? 'View service details' : 'Dienstleistung ansehen'}</span>
                        <span>➔</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Strategic Guides & Blog Section */}
            <div className="mt-20 pt-16 border-t border-slate-800">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{currentLang === 'tr' ? 'Stratejik Bilgi Bankası' : currentLang === 'en' ? 'Knowledge Hub' : 'Praxis-Ratgeber & Leitfäden'}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {currentLang === 'tr'
                      ? 'Almanya Pazarı İçin Özel Rehberler ve Analizler'
                      : currentLang === 'en'
                      ? 'Essential Guides & Benchmarks for the German Market'
                      : 'Wichtige Leitfäden & Benchmarks für Deutschland'}
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 mt-3 md:mt-0"
                >
                  <span>{currentLang === 'tr' ? 'Tüm blog yazılarını oku ➔' : currentLang === 'en' ? 'View all guides in blog ➔' : 'Alle Ratgeber im Blog ansehen ➔'}</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {strategicGuides.map((guide, idx) => (
                  <Link
                    key={idx}
                    href={guide.href}
                    className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-3">
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {guide.tag[currentLang] || guide.tag.de}
                        </span>
                        <span>{guide.readTime}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug line-clamp-3 mb-3">
                        {guide.title[currentLang] || guide.title.de}
                      </h3>
                    </div>
                    <div className="text-xs font-semibold text-slate-400 group-hover:text-white flex items-center gap-1 pt-3 border-t border-slate-800/80">
                      <span>{currentLang === 'tr' ? 'Rehberi Oku' : currentLang === 'en' ? 'Read Guide' : 'Leitfaden lesen'}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Nationwide Banner */}
            <div className="mt-16 bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 rounded-3xl p-8 md:p-12 border border-blue-500/30 text-center">
              <h3 className="text-2xl md:text-3xl font-black mb-3">{t.contactTitle}</h3>
              <p className="text-slate-300 max-w-2xl mx-auto mb-6 text-sm md:text-base">{t.contactSub}</p>
              <Link
                href={`${getHomeUrl(currentLang)}#contact`}
                className="inline-block bg-[#4285F4] hover:bg-blue-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all"
              >
                {t.contactBtn} ➔
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Agency Footer */}
      <footer className="bg-slate-900/90 border-t border-slate-800 text-slate-400 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand & E-E-A-T */}
            <div className="space-y-4">
              <Link href={getHomeUrl(currentLang)} className="inline-block text-2xl font-black text-white hover:text-blue-400 transition-colors">
                Salih Maral<span className="text-blue-500">.</span>
              </Link>
              <p className="text-xs leading-relaxed text-slate-400">
                {currentLang === 'tr'
                  ? 'Resmi Google Partneri (17+ yıl tecrübe). Frankfurt, Rhein-Main ve Almanya genelinde sabit fiyatlı Google Ads, Meta Ads ve Server-Side Tracking danışmanlığı.'
                  : currentLang === 'en'
                  ? 'Official Google Partner (17+ years experience). High-ROAS Google Ads, Meta Ads, and Server-Side Tracking across Germany on a transparent flat-fee retainer.'
                  : 'Offizieller Google Partner mit 17+ Jahren Praxiserfahrung. Transparente Performance-Betreuung zum planbaren Fixpreis für Frankfurt am Main, Hessen und bundesweit.'}
              </p>
              
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1.5">
                <div className="font-bold text-slate-200">
                  🇩🇪 Offizieller Google Partner
                </div>
                <div className="text-[11px] text-slate-400">
                  Zertifiziert für Search, Shopping, Display & Video Ads
                </div>
              </div>

              {/* Primary Audience Mandate Badge */}
              <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-medium">
                💬 <strong>Sprechen Sie Türkisch?</strong> Bizimle Türkçe de görüşebilir, ana dilinizde danışmanlık alabilirsiniz.
              </div>

              <div className="pt-2 text-xs space-y-1.5">
                <div>
                  <a href="mailto:info@salihmaral.de" className="hover:text-blue-400 transition-colors">
                    ✉️ info@salihmaral.de
                  </a>
                </div>
                <div>
                  <a href="tel:+491724106463" className="hover:text-blue-400 transition-colors">
                    📞 +49 (0) 172 4106463
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Core Services */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {currentLang === 'tr' ? 'Hizmetlerimiz' : currentLang === 'en' ? 'Core Services' : 'Dienstleistungen'}
              </div>
              <ul className="space-y-2.5 text-xs">
                {servicesList.map((srv) => (
                  <li key={srv.slug}>
                    <Link
                      href={getServiceUrl(currentLang, srv.slug)}
                      className="hover:text-blue-400 transition-colors block"
                    >
                      {srv[currentLang]?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Standorte */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {currentLang === 'tr' ? 'Almanya Şehirleri' : currentLang === 'en' ? 'Locations in Germany' : 'Standorte Deutschland'}
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs">
                {topCitiesNav.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${currentLang}/standorte/${c.slug}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800">
                <Link
                  href={`/${currentLang}/standorte`}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300"
                >
                  {currentLang === 'tr' ? 'Tüm Şehirleri İncele ➔' : currentLang === 'en' ? 'View All Locations ➔' : 'Alle 18 Standorte ansehen ➔'}
                </Link>
              </div>
            </div>

            {/* Col 4: Quick Links & Legal */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {currentLang === 'tr' ? 'Hızlı Bağlantılar' : currentLang === 'en' ? 'Quick Links' : 'Unternehmen & Recht'}
              </div>
              <ul className="space-y-2.5 text-xs mb-6">
                <li>
                  <Link href={getHomeUrl(currentLang)} className="hover:text-white transition-colors">
                    {currentLang === 'tr' ? 'Startseite / Ana Sayfa' : currentLang === 'en' ? 'Home' : 'Startseite'}
                  </Link>
                </li>
                <li>
                  <Link href={`${getHomeUrl(currentLang)}#about`} className="hover:text-white transition-colors">
                    {currentLang === 'tr' ? 'Hakkımda & Deneyim' : currentLang === 'en' ? 'About Salih Maral' : 'Über Salih Maral'}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    {currentLang === 'tr' ? 'Blog & Rehberler' : currentLang === 'en' ? 'Guides & Articles' : 'Ratgeber & Blog'}
                  </Link>
                </li>
                <li>
                  <Link href={`${getHomeUrl(currentLang)}#contact`} className="text-blue-400 hover:underline">
                    {currentLang === 'tr' ? 'Ücretsiz Teklif Talebi' : currentLang === 'en' ? 'Request Proposal' : 'Kostenloses Angebot anfordern'}
                  </Link>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div>
                  <Link href="/impressum" className="hover:text-white transition-colors">
                    Impressum
                  </Link>
                </div>
                <div>
                  <Link href="/datenschutz" className="hover:text-white transition-colors">
                    Datenschutz
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              &copy; 2026 Salih Maral &mdash; Offizieller Google Partner. {currentLang === 'tr' ? 'Tüm hakları saklıdır.' : currentLang === 'en' ? 'All rights reserved.' : 'Alle Rechte vorbehalten.'}
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>Frankfurt am Main &bull; Dreieich &bull; Deutschland</span>
              <span>&bull;</span>
              <span className="text-slate-400">100% DSGVO-konform</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
