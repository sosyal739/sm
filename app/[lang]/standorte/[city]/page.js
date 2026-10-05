'use client'

import { trackLead, trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics'
import GoogleAdsBudgetCalculator from '@/components/GoogleAdsBudgetCalculator'
import { getCityGrowth } from '@/lib/cityGrowth'

import React, { use, useState } from 'react'
import Link from 'next/link'
import { 
  CheckCircle2, TrendingUp, ShieldCheck, ArrowRight, Star, Phone, Mail, MapPin, Send, Loader2,
  ChevronRight, ChevronDown, Menu, X, ArrowUpRight, BookOpen
} from 'lucide-react'

const cityDetails = {
  frankfurt: {
    name: 'Frankfurt am Main',
    region: 'Hessen / Rhein-Main',
    tagline: 'Google Ads & AdWords Agentur Frankfurt am Main — Performance Marketing für Hessen',
    description: 'Zertifizierte Google Ads Betreuung & Performance Marketing für Frankfurt am Main, Dreieich, Offenbach und die Rhein-Main-Metropolregion.',
    stats: { clients: '85+', roas: '4.4x', experience: '17+ Jahre' },
    industries: ['B2B & Finanzdienstleister', 'E-Commerce & Handel', 'Kliniken & Praxen', 'Immobilien & Kanzleien'],
    de: {
      heroTitle: 'Google Ads & AdWords Agentur Frankfurt am Main',
      heroSub: 'Zertifizierter Google Partner & Performance Marketing für Frankfurt, Dreieich & Rhein-Main',
      intro: 'Als führende Google Ads & AdWords Agentur in Frankfurt am Main unterstützen wir Unternehmen, Finanzdienstleister, Kanzleien und E-Commerce-Brands mit datengestütztem Performance Marketing. Ob Google Search, Google Ads Betreuung zum fairen Fixpreis, Performance Max oder B2B Lead-Generierung: Mit 17+ Jahren Praxiserfahrung als offizieller Google Partner verwandeln wir jeden investierten Werbeeuro in messbaren Unternehmensgewinn ohne Streuverlust.',
      cta: 'Jetzt unverbindliches Angebot für Frankfurt anfordern',
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
    tagline: 'Google Ads & Meta Ads Agentur Düsseldorf — Performance Marketing für NRW',
    description: 'Zertifizierte Google Ads Betreuung & Meta Ads für Düsseldorf, Neuss, Ratingen und ganz Nordrhein-Westfalen.',
    stats: { clients: '70+', roas: '4.1x', experience: '17+ Jahre' },
    industries: ['Mode & E-Commerce', 'B2B & Dienstleister', 'Agenturen & Kanzleien', 'Handwerk & Industrie'],
    de: {
      heroTitle: 'Google Ads & Performance Marketing Agentur Düsseldorf',
      heroSub: 'Offizieller Google & Meta Ads Partner für Düsseldorf, Neuss & NRW',
      intro: 'Düsseldorf ist ein führender Handels-, Mode- und E-Commerce-Standort. Als spezialisierte Google Ads Agentur in Düsseldorf steuern wir Ihre Google Search, PMax und Meta Ads (Instagram & Facebook) Kampagnen für maximale Kaufabschlüsse. Transparente Betreuung zum monatlichen Fixpreis mit 17+ Jahren Senior-Erfahrung.',
      cta: 'Jetzt unverbindliches Angebot für Düsseldorf anfordern',
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
    tagline: 'Google Ads Agentur Köln, Meta Ads (Facebook & Instagram) & Performance Marketing',
    description: 'Erreichen Sie Top-Rankings bei Google, profitable Google Ads Betreuung und konvertierende Facebook & Instagram Ads mit Ihrer Performance Marketing Agentur in Köln.',
    stats: { clients: '60+', roas: '4.3x', experience: '17+ Jahre' },
    industries: ['Medien & Kreativwirtschaft', 'E-Commerce & Startups', 'Gesundheitswesen & Ärzte', 'Handwerk, Kanzleien & B2B'],
    de: {
      heroTitle: 'Google Ads, Meta & Performance Marketing Agentur Köln',
      heroSub: 'Zertifizierte Google Ads Betreuung & Social Ads (Facebook & Instagram) für Köln & Rheinland',
      intro: 'Als spezialisierte Performance Marketing Agentur in Köln verbinden wir profitables Suchmaschinenmarketing (Google Ads & AdWords Köln) mit hochkonvertierenden Social Media Kampagnen (Facebook Ads Agentur Köln & Instagram Ads Köln). Mit 17+ Jahren Erfahrung als offizieller Google Partner bieten wir Kölner Unternehmen transparente Betreuung zum Fixpreis, modernes Server-Side Tracking und maximale ROAS-Steigerung.',
      cta: 'Jetzt unverbindliches Angebot für Köln anfordern',
    },
    tr: {
      heroTitle: 'Köln Google Ads & Performans Pazarlama Ajansı',
      heroSub: 'Google Ads, Meta Ads (Instagram & Facebook) ve Yerel SEO | Köln & NRW',
      intro: 'Köln, Bonn ve NRW bölgesindeki işletmeler için Google Ads (Arama, Alışveriş, PMax) ve Instagram/Facebook reklamları ile müşteri akışınızı ve cironuzu katlıyoruz.',
      cta: 'Köln İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads & Performance Marketing Agency Cologne',
      heroSub: 'Google Ads, Meta Ads (Instagram & Facebook) & SEO in Cologne & Rhineland',
      intro: 'Dominate Google search results and scale profitable Instagram & Facebook Ads in Cologne. Certified Google Partner with 17+ years of experience delivering high ROAS.',
      cta: 'Request Free Cologne Proposal',
    }
  },
  muenchen: {
    name: 'München',
    region: 'Bayern',
    tagline: 'Google Ads Agentur München — High-End Performance Marketing für Bayern',
    description: 'Zertifizierte Google Ads Betreuung zum Fixpreis & Performance Marketing für München, Nürnberg, Augsburg und ganz Bayern.',
    stats: { clients: '90+', roas: '4.6x', experience: '17+ Jahre' },
    industries: ['Tech & Software', 'Premium E-Commerce', 'B2B & Industrie', 'Privatkliniken & Praxen'],
    de: {
      heroTitle: 'Google Ads & Performance Marketing Agentur München',
      heroSub: 'Offizieller Google Ads Partner für München, Oberbayern & Süddeutschland',
      intro: 'Als führende Google Ads Agentur in München entwickeln wir datenbasierte Werbestrategien für anspruchsvolle B2B-Unternehmen, Kanzleien, Ärzte und E-Commerce-Brands in Bayern. Mit 17+ Jahren Erfahrung bieten wir transparente Google Ads Betreuung zum Fixpreis ohne Prozent-Aufschläge, präzises CAPI-Tracking und maximale ROAS-Steigerung.',
      cta: 'Jetzt unverbindliches Angebot für München anfordern',
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
    tagline: 'Google Ads Agentur Stuttgart — B2B & E-Commerce Spezialist für Baden-Württemberg',
    description: 'Zertifizierte Google Ads Betreuung & B2B Performance Marketing für Stuttgart, Esslingen, Ludwigsburg und ganz Baden-Württemberg.',
    stats: { clients: '65+', roas: '4.2x', experience: '17+ Jahre' },
    industries: ['Maschinenbau & Industrie', 'B2B & IT-Dienstleister', 'E-Commerce & D2C', 'Handwerk & Gewerbe'],
    de: {
      heroTitle: 'Google Ads Agentur Stuttgart & B2B Performance',
      heroSub: 'Zertifizierte Google Ads Betreuung für Stuttgart, Esslingen & Baden-Württemberg',
      intro: 'Als offizielle Google Ads Agentur in Stuttgart entwickeln wir hochrentable Werbestrategien für den baden-württembergischen Mittelstand, Industrie, Maschinenbau und E-Commerce. Messbare B2B-Leads, planbare Kosten durch faire Fixpreis-Modelle und 17+ Jahre Praxiserfahrung direkt vom Senior Google Partner.',
      cta: 'Jetzt unverbindliches Angebot für Stuttgart anfordern',
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
    tagline: 'Google Ads Agentur Berlin — Performance Marketing & Skalierung',
    description: 'Zertifizierte Google Ads Betreuung zum Fixpreis & Performance Marketing für Start-ups, E-Commerce und KMUs in Berlin.',
    stats: { clients: '80+', roas: '4.3x', experience: '17+ Jahre' },
    industries: ['Start-ups & Scale-ups', 'D2C & E-Commerce', 'SaaS & Apps', 'Lokale Dienstleister'],
    de: {
      heroTitle: 'Google Ads & Performance Marketing Agentur Berlin',
      heroSub: 'Zertifizierter Google Partner für Start-ups, E-Commerce & KMUs in Berlin',
      intro: 'In der dynamischen Berliner Start-up- und Handelswelt entscheiden mathematische Präzision und schnelle Skalierung. Als zertifizierte Google Ads Agentur in Berlin optimieren wir Ihre Google Search, PMax und Meta Ads Kampagnen mit klarem Fokus auf niedrigen CPA und maximalen Gewinn. Senior-Betreuung zum fairen monatlichen Fixpreis.',
      cta: 'Jetzt unverbindliches Angebot für Berlin anfordern',
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
  },
  hamburg: {
    name: 'Hamburg',
    region: 'Hamburg / Norddeutschland',
    tagline: 'Google Ads & E-Commerce Agentur Hamburg — Performance Marketing für Norddeutschland',
    description: 'Zertifizierte Google Ads Betreuung, Google Shopping PMax & Meta Ads zum transparenten Fixpreis für Hamburg, Altona, HafenCity und ganz Norddeutschland.',
    stats: { clients: '75+', roas: '4.4x', experience: '17+ Jahre' },
    industries: ['Handel & E-Commerce', 'Logistik & Transport', 'Kanzleien & Beratung', 'Medizin & Kliniken'],
    de: {
      heroTitle: 'Google Ads & E-Commerce Agentur Hamburg',
      heroSub: 'Zertifizierter Google Partner für Hamburg, HafenCity & Norddeutschland',
      intro: 'Hamburgs dynamische Handels- und Logistikmetropole verlangt kompromisslose Performance. Als zertifizierter Google Partner mit 17+ Jahren Senior-Erfahrung steuern wir Ihre Google Search, Google Shopping (PMax) und Social Ads für maximale Kaufabschlüsse und B2B-Leads. Wir setzen auf transparente monatliche Fixpreise ohne prozentuale Budgetaufschläge, modernes Server-Side CAPI Tracking und kontinuierliche ROAS-Optimierung für Hamburger Unternehmen.',
      cta: 'Jetzt unverbindliches Angebot für Hamburg anfordern',
    },
    tr: {
      heroTitle: 'Hamburg Google Ads & E-Ticaret Reklam Ajansı',
      heroSub: 'Hamburg, HafenCity ve Kuzey Almanya Resmi Google Partneri',
      intro: 'Hamburg ve çevresindeki e-ticaret markaları, lojistik ve yerel işletmeler için Google Arama, Alışveriş ve Meta reklamlarını sabit fiyatlı (Fixpreis) şeffaf modelle yönetiyoruz. 17+ yıllık uzmanlıkla bütçenizi israf etmeden yüksek kârlılıkla cironuzu katlıyoruz.',
      cta: 'Hamburg İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads & E-Commerce Agency Hamburg',
      heroSub: 'Certified Google Partner for Hamburg & Northern Germany',
      intro: 'Dominate search results and scale profitable Google Shopping and Meta Ads in Hamburg. Official Google Partner with 17+ years of track record delivering high ROAS and predictable customer acquisition with zero percentage-of-ad-spend conflicts.',
      cta: 'Request Free Hamburg Proposal',
    }
  },
  nuernberg: {
    name: 'Nürnberg',
    region: 'Bayern / Franken',
    tagline: 'Performance Marketing & Google Ads für Nürnberg, Fürth, Erlangen & Franken',
    description: 'Gewinnen Sie qualifizierte B2B-Leads und Kunden in der Metropolregion Nürnberg mit datengestützten Google Ads und SEO Kampagnen.',
    stats: { clients: '55+', roas: '4.2x', experience: '17+ Jahre' },
    industries: ['Mittelstand & B2B', 'Tech & IT-Dienstleister', 'Handwerk & Industrie', 'Kliniken & Praxen'],
    de: {
      heroTitle: 'Google Ads Agentur Nürnberg',
      heroSub: 'Ihr Google Partner für Nürnberg, Fürth & Erlangen',
      intro: 'In der Metropolregion Nürnberg optimieren wir Ihre Google Ads, Meta Ads und SEO-Funnels für messbare Kundenanfragen und planbare Neukundengewinnung.',
      cta: 'Jetzt unverbindliches Angebot anfordern',
    },
    tr: {
      heroTitle: 'Nürnberg Google Ads & SEO Danışmanlığı',
      heroSub: 'Nürnberg ve Franken Bölgesi İçin Resmi Google Partneri',
      intro: 'Nürnberg, Fürth ve Erlangen bölgesindeki işletmeler için Google Ads ve Meta Ads yönetimi ile müşteri trafiğinizi katlıyoruz.',
      cta: 'Nürnberg İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads Agency Nuremberg',
      heroSub: 'Your Certified Google Partner for Nuremberg & Franconia',
      intro: 'Drive predictable B2B leads and e-commerce revenue in Nuremberg with precision Google Ads and SEO management.',
      cta: 'Request Free Nuremberg Proposal',
    }
  },
  dortmund: {
    name: 'Dortmund / Ruhrgebiet',
    region: 'Nordrhein-Westfalen (Ruhrgebiet)',
    tagline: 'Google Ads & B2B Performance für Dortmund, Essen, Bochum & das Ruhrgebiet',
    description: 'Erzielen Sie maximale Sichtbarkeit im Ruhrgebiet mit maßgeschneiderten Google Ads, Meta Ads und Handwerk-Kampagnen.',
    stats: { clients: '65+', roas: '4.3x', experience: '17+ Jahre' },
    industries: ['Handwerk & Sanierung', 'B2B & Logistik', 'E-Commerce & Handel', 'Lokale Dienstleister'],
    de: {
      heroTitle: 'Google Ads Agentur Dortmund & Ruhrgebiet',
      heroSub: 'Performance Marketing für Dortmund, Essen & das Ruhrgebiet',
      intro: 'Das Ruhrgebiet (Dortmund, Essen, Bochum, Marl und Kreis Recklinghausen) ist der dynamischste Ballungsraum in NRW. Wir positionieren Ihr Unternehmen bei Google ganz oben und sichern Ihnen planbare Direktaufträge.',
      cta: 'Jetzt unverbindliches Angebot anfordern',
    },
    tr: {
      heroTitle: 'Dortmund & Ruhr Bölgesi Google Ads Ajansı',
      heroSub: 'Dortmund, Essen ve Ruhr Bölgesi İçin Kârlı Reklam Yönetimi',
      intro: 'Dortmund, Essen, Marl ve Ruhr bölgesindeki sanayi, inşaat ve hizmet firmaları için Google Ads ve bölgesel SEO ile cironuzu katlıyoruz.',
      cta: 'Dortmund İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads Agency Dortmund & Ruhr Area',
      heroSub: 'Performance Marketing for Dortmund, Essen & Ruhr Region',
      intro: 'Dominate the Ruhr metropolitan area with high-ROI Google Ads and Meta Ads management from a certified Google Partner.',
      cta: 'Request Free Dortmund Proposal',
    }
  },
  leipzig: {
    name: 'Leipzig & Mitteldeutschland',
    region: 'Sachsen / Mitteldeutschland',
    tagline: 'Google Ads & Performance Marketing für Leipzig, Dresden & Mitteldeutschland',
    description: 'Skalieren Sie Ihr Unternehmen in Leipzig, Dresden und ganz Mitteldeutschland mit datengetriebenen Google Ads und Performance-Kampagnen.',
    stats: { clients: '50+', roas: '4.2x', experience: '17+ Jahre' },
    industries: ['E-Commerce & Logistik', 'Start-ups & Tech', 'Immobilien & B2B', 'Praxen & Kanzleien'],
    de: {
      heroTitle: 'Google Ads Agentur Leipzig & Sachsen',
      heroSub: 'Zertifizierter Google Partner für Leipzig, Halle & Dresden',
      intro: 'Leipzig wächst als mitteldeutsches Wirtschafts- und Logistikzentrum rasant. Als offizieller Google Partner mit 17+ Jahren Praxiserfahrung unterstützen wir Start-ups, E-Commerce-Brands und mittelständische Unternehmen mit datenbasiertem Performance Marketing. Mit planbaren monatlichen Fixpreisen, exakter Conversion-Messung und strategischer Suchmaschinenoptimierung sichern wir Ihnen Top-Rankings und planbare Neukundengewinnung.',
      cta: 'Jetzt unverbindliches Angebot für Leipzig anfordern',
    },
    tr: {
      heroTitle: 'Leipzig & Saksonya Google Ads Reklam Ajansı',
      heroSub: 'Leipzig, Halle ve Dresden İçin Resmi Google Partneri',
      intro: 'Leipzig ve Mitteldeutschland bölgesindeki e-ticaret, teknoloji ve yerel hizmet firmaları için sabit fiyatlı Google Ads ve Meta reklam yönetimi ile kârlı büyüme sağlıyoruz.',
      cta: 'Leipzig İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads Agency Leipzig & Central Germany',
      heroSub: 'Certified Google Partner for Leipzig, Halle & Dresden',
      intro: 'Accelerate your growth in Leipzig and Central Germany with precision Google Ads and SEO campaigns. 17+ years experience delivering scalable ROAS with transparent flat-fee retainers.',
      cta: 'Request Free Leipzig Proposal',
    }
  },
  bonn: {
    name: 'Bonn',
    region: 'Nordrhein-Westfalen (NRW)',
    tagline: 'Google Ads & Performance Marketing für Bonn und den Rhein-Sieg-Kreis',
    description: 'Generieren Sie kaufbereite Neukunden und B2B-Anfragen in Bonn, Sankt Augustin, Siegburg, Troisdorf und der gesamten Region.',
    stats: { clients: '45+', roas: '4.3x', experience: '17+ Jahre' },
    industries: ['B2B & Dienstleister', 'Kanzleien & Beratung', 'Gesundheitswesen & Kliniken', 'E-Commerce & Handel'],
    de: {
      heroTitle: 'Google Ads & Meta Ads Agentur Bonn',
      heroSub: 'Performance Marketing & SEO für Bonn & Rhein-Sieg',
      intro: 'Bonn ist ein bedeutender Standort für Konzerne, Mittelstand und qualifizierte Dienstleister. Als offizieller Google Partner maximieren wir Ihre Sichtbarkeit in der Google-Suche und auf Social Media für planbaren Kundenzuwachs.',
      cta: 'Jetzt unverbindliches Angebot für Bonn anfordern',
    },
    tr: {
      heroTitle: 'Bonn Google Ads & Dijital Pazarlama Danışmanlığı',
      heroSub: 'Bonn ve Rhein-Sieg Bölgesi İçin Resmi Google Partneri',
      intro: 'Bonn ve çevresindeki işletmeler için Google Ads, Instagram/Facebook reklamları ve yerel SEO ile müşteri trafiğinizi zirveye taşıyoruz.',
      cta: 'Bonn İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads & Performance Marketing Agency Bonn',
      heroSub: 'Google Ads, Meta Ads & SEO in Bonn & Rhine-Sieg',
      intro: 'Scale customer acquisition in Bonn with high-converting Google Ads, Meta Ads, and local SEO backed by 17+ years of track record.',
      cta: 'Request Free Bonn Proposal',
    }
  },
  essen: {
    name: 'Essen',
    region: 'Nordrhein-Westfalen (Ruhrgebiet)',
    tagline: 'Google Ads Agentur Essen & Performance Marketing im Ruhrgebiet',
    description: 'Erreichen Sie Top-Rankings und planbare Neukunden in Essen, Mülheim an der Ruhr, Oberhausen und dem gesamten Ruhrgebiet.',
    stats: { clients: '55+', roas: '4.2x', experience: '17+ Jahre' },
    industries: ['Industrie & Energie', 'Handwerk & Sanierung', 'B2B & Dienstleister', 'E-Commerce & Handel'],
    de: {
      heroTitle: 'Google Ads Agentur Essen',
      heroSub: 'Performance Marketing & SEO für Essen & das Ruhrgebiet',
      intro: 'Als Wirtschaftszentrum des Ruhrgebiets bietet Essen riesige Marktchancen. Wir positionieren Ihr Unternehmen bei Google und Social Media direkt vor kaufbereiten Kunden.',
      cta: 'Jetzt Angebot für Essen anfordern',
    },
    tr: {
      heroTitle: 'Essen Google Ads & SEO Ajansı',
      heroSub: 'Essen ve Ruhr Bölgesi İçin Kârlı Reklam Yönetimi',
      intro: 'Essen ve Ruhr bölgesinde faaliyet gösteren sanayi, e-ticaret ve yerel hizmet firmaları için Google Ads ve Meta Ads danışmanlığı sunuyoruz.',
      cta: 'Essen İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads Agency Essen',
      heroSub: 'Performance Marketing & SEO for Essen & Ruhr Area',
      intro: 'Capture high-intent search demand and scale revenue in Essen with proven Google Ads, Meta Ads, and SEO strategies.',
      cta: 'Request Free Essen Proposal',
    }
  },
  duisburg: {
    name: 'Duisburg',
    region: 'Nordrhein-Westfalen (Niederrhein)',
    tagline: 'Google Ads & Online-Marketing für Duisburg und den Niederrhein',
    description: 'Steigern Sie Aufträge und Umsatz in Duisburg, Moers, Dinslaken und Krefeld mit messbarem Performance Marketing.',
    stats: { clients: '40+', roas: '4.1x', experience: '17+ Jahre' },
    industries: ['Logistik & Transport', 'Handwerk & Baugewerbe', 'Groß- & Einzelhandel', 'Dienstleistungen & Praxen'],
    de: {
      heroTitle: 'Google Ads & Performance Agentur Duisburg',
      heroSub: 'Google Ads, Meta Ads & SEO für Duisburg & Niederrhein',
      intro: 'Nutzen Sie die Wirtschaftskraft des Logistik-Hubs Duisburg. Mit gezielten Google Ads und regionalem Social Media Marketing gewinnen Sie kontinuierlich lukrative Aufträge.',
      cta: 'Jetzt Angebot für Duisburg anfordern',
    },
    tr: {
      heroTitle: 'Duisburg Google Ads & Reklam Yönetimi',
      heroSub: 'Duisburg ve Niederrhein Bölgesi Resmi Google Partneri',
      intro: 'Duisburg ve çevresindeki işletmeler için Google arama reklamları, harita optimizasyonu ve sosyal medya reklamları ile cironuzu katlıyoruz.',
      cta: 'Duisburg İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads & Performance Marketing Duisburg',
      heroSub: 'Google Ads, Meta Ads & SEO in Duisburg',
      intro: 'Grow your business in Duisburg with data-driven PPC campaigns and conversion-optimized performance funnels.',
      cta: 'Request Free Duisburg Proposal',
    }
  },
  hannover: {
    name: 'Hannover',
    region: 'Niedersachsen',
    tagline: 'Google Ads & B2B Performance Marketing für Hannover und Niedersachsen',
    description: 'Gewinnen Sie kaufbereite Kunden und B2B-Aufträge in Hannover, Garbsen, Langenhagen und ganz Niedersachsen.',
    stats: { clients: '50+', roas: '4.3x', experience: '17+ Jahre' },
    industries: ['Messen & B2B-Services', 'Handwerk & Sanierung', 'E-Commerce & Handel', 'Kanzleien & Ärzte'],
    de: {
      heroTitle: 'Google Ads Agentur Hannover',
      heroSub: 'Zertifizierter Google Partner für Hannover & Niedersachsen',
      intro: 'Hannover als bedeutende Messe- und Handelsstadt verlangt präzises Zielgruppen-Targeting. Wir optimieren Ihre Google Ads und Meta Ads Kampagnen für maximalen Return on Ad Spend.',
      cta: 'Jetzt Angebot für Hannover anfordern',
    },
    tr: {
      heroTitle: 'Hannover Google Ads & Dijital Pazarlama Danışmanlığı',
      heroSub: 'Hannover ve Aşağı Saksonya İçin Resmi Google Partneri',
      intro: 'Hannover pazarında Google aramalarında ve sosyal medyada 1. sıraya çıkmanız için profesyonel reklam ve SEO yönetimi sunuyoruz.',
      cta: 'Hannover İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads Agency Hanover (Hannover)',
      heroSub: 'Performance Marketing & SEO in Hanover & Lower Saxony',
      intro: 'Scale qualified B2B leads and e-commerce transactions in Hanover with high-converting Google Ads and Meta Ads.',
      cta: 'Request Free Hanover Proposal',
    }
  },
  mannheim: {
    name: 'Mannheim',
    region: 'Baden-Württemberg (Rhein-Neckar)',
    tagline: 'Google Ads & Performance Marketing für Mannheim, Heidelberg und Ludwigshafen',
    description: 'Dominieren Sie die Google-Suche in der Metropolregion Rhein-Neckar mit datengetriebenen Google Ads und Meta Ads Kampagnen.',
    stats: { clients: '45+', roas: '4.2x', experience: '17+ Jahre' },
    industries: ['Industrie & Pharma', 'Mittelstand & Handel', 'Gastronomie & Praxen', 'B2B & IT'],
    de: {
      heroTitle: 'Google Ads Agentur Mannheim',
      heroSub: 'Performance Marketing für Mannheim & Rhein-Neckar',
      intro: 'In der dynamischen Wirtschaftsregion Rhein-Neckar sorgen wir dafür, dass Ihre Produkte und Dienstleistungen bei Google und Instagram herausragen und planbare Neukunden generieren.',
      cta: 'Jetzt Angebot für Mannheim anfordern',
    },
    tr: {
      heroTitle: 'Mannheim Google Ads & SEO Ajansı',
      heroSub: 'Mannheim, Heidelberg ve Rhein-Neckar Bölgesi İçin Reklam Yönetimi',
      intro: 'Mannheim ve çevresindeki işletmeler için Google Ads, Instagram/Facebook reklamları ve harita yönetimi ile müşteri akışını artırıyoruz.',
      cta: 'Mannheim İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads Agency Mannheim',
      heroSub: 'Performance Marketing & SEO in Mannheim & Rhine-Neckar',
      intro: 'Capture local and B2B market demand across Mannheim, Heidelberg, and Ludwigshafen with expert Google Ads management.',
      cta: 'Request Free Mannheim Proposal',
    }
  },
  wiesbaden: {
    name: 'Wiesbaden',
    region: 'Hessen (Rhein-Main)',
    tagline: 'High-End Google Ads & Lead-Generierung für Wiesbaden und Mainz',
    description: 'Gewinnen Sie anspruchsvolle Kunden und B2B-Mandanten in Wiesbaden, Mainz, Taunusstein und dem Rheingau.',
    stats: { clients: '50+', roas: '4.4x', experience: '17+ Jahre' },
    industries: ['Kanzleien & Wirtschaftsprüfung', 'Privatkliniken & Ärzte', 'Immobilien & Finanzen', 'Boutique E-Commerce'],
    de: {
      heroTitle: 'Google Ads & Performance Agentur Wiesbaden',
      heroSub: 'Ihr Google Partner für Wiesbaden, Mainz & Rhein-Main',
      intro: 'Wiesbadens kaufkräftige Zielgruppen und Kanzleien erfordern exzellente Werbestrategien. Als offizieller Google Partner mit 17+ Jahren Erfahrung optimieren wir Ihre Kampagnen für messbaren Erfolg.',
      cta: 'Jetzt Angebot für Wiesbaden anfordern',
    },
    tr: {
      heroTitle: 'Wiesbaden Google Ads & Dijital Danışmanlık',
      heroSub: 'Wiesbaden, Mainz ve Rhein-Main İçin Resmi Google Partneri',
      intro: 'Wiesbaden ve Mainz bölgesindeki klinikler, hukuk büroları ve işletmeler için yüksek getirili Google Ads ve yerel SEO hizmetleri.',
      cta: 'Wiesbaden İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads Agency Wiesbaden',
      heroSub: 'Performance Marketing for Wiesbaden & Mainz',
      intro: 'Reach high-value clients and drive predictable customer growth in Wiesbaden with premium Google Ads and Meta Ads management.',
      cta: 'Request Free Wiesbaden Proposal',
    }
  },
  karlsruhe: {
    name: 'Karlsruhe',
    region: 'Baden-Württemberg',
    tagline: 'Google Ads & B2B Tech Lead-Generierung für Karlsruhe und Baden',
    description: 'Generieren Sie qualifizierte B2B-Leads und E-Commerce-Umsätze in Karlsruhe, Ettlingen, Rastatt und Pforzheim.',
    stats: { clients: '40+', roas: '4.3x', experience: '17+ Jahre' },
    industries: ['IT & Software / SaaS', 'B2B & Technologie', 'Handwerk & Sanierung', 'Kanzleien & Praxen'],
    de: {
      heroTitle: 'Google Ads & B2B Agentur Karlsruhe',
      heroSub: 'Performance Marketing & SEO für Karlsruhe & Baden',
      intro: 'Karlsruhe ist Deutschlands IT- und Innovationszentrum. Wir entwickeln hochperformante Google Search, YouTube und LinkedIn/Meta Ads Kampagnen zur gezielten B2B-Leadgenerierung.',
      cta: 'Jetzt Angebot für Karlsruhe anfordern',
    },
    tr: {
      heroTitle: 'Karlsruhe Google Ads & B2B Pazarlama Ajansı',
      heroSub: 'Karlsruhe ve Baden Bölgesi İçin Resmi Google Partneri',
      intro: "Karlsruhe'deki teknoloji, yazılım, e-ticaret ve yerel hizmet firmaları için kârlı Google Ads ve dijital pazarlama stratejileri.",
      cta: 'Karlsruhe İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads & B2B Agency Karlsruhe',
      heroSub: 'Performance Marketing & SEO for Karlsruhe & Baden',
      intro: 'Generate high-intent B2B leads and e-commerce conversions in Karlsruhe with certified Google Ads and Meta Ads expertise.',
      cta: 'Request Free Karlsruhe Proposal',
    }
  },
  muenster: {
    name: 'Münster',
    region: 'Nordrhein-Westfalen (Münsterland)',
    tagline: 'Google Ads & SEO Betreuung für Münster und das Münsterland',
    description: 'Erreichen Sie Top-Rankings und kaufbereite Kunden in Münster, Greven, Warendorf und ganz Westfalen.',
    stats: { clients: '35+', roas: '4.2x', experience: '17+ Jahre' },
    industries: ['Gesundheitswesen & Kliniken', 'E-Commerce & D2C', 'Dienstleistungen & Beratung', 'Handwerk & Handel'],
    de: {
      heroTitle: 'Google Ads Agentur Münster',
      heroSub: 'Performance Marketing & SEO für Münster & Westfalen',
      intro: 'Münster verbindet starke Wissenschaft, erstklassige Medizin und florierenden Mittelstand. Wir helfen Kanzleien, Praxen und Unternehmen, online als klare Nummer 1 wahrgenommen zu werden.',
      cta: 'Jetzt Angebot für Münster anfordern',
    },
    tr: {
      heroTitle: 'Münster Google Ads & SEO Danışmanlığı',
      heroSub: 'Münster ve Münsterland Bölgesi İçin Resmi Google Partneri',
      intro: 'Münster ve çevresindeki işletmeler için Google Ads, Instagram reklamları ve yerel SEO ile müşteri sayınızı katlıyoruz.',
      cta: 'Münster İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads Agency Münster',
      heroSub: 'Performance Marketing & SEO for Münster & Westphalia',
      intro: 'Elevate your online presence and acquire high-intent customers in Münster with data-driven Google Ads and local SEO.',
      cta: 'Request Free Münster Proposal',
    }
  },
}

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

export default function CityPage({ params }) {
  const resolvedParams = use(params)
  const lang = resolvedParams?.lang || 'de'
  const city = resolvedParams?.city || 'frankfurt'

  const currentLang = ['de', 'tr', 'en'].includes(lang) ? lang : 'de'
  const cityData = cityDetails[city] || cityDetails.frankfurt
  const content = cityData[currentLang] || cityData.de
  const growth = getCityGrowth(city, currentLang)

  // Navigation & Dropdown State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

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
          language: currentLang,
          b_check: formData.b_check || ''
        })
      })

      const data = await res.json()
      if (res.ok) {
        trackLead({ formName: 'city_contact_form', city: cityData.name, method: 'standorte_form' })
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
    if (e && e.preventDefault) e.preventDefault()
    const formElement = document.getElementById('anfrage-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const schemaJsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: `Salih Maral Google Ads & Performance Marketing - ${cityData.name}`,
      url: `https://salihmaral.de/${currentLang}/standorte/${city}`,
      telephone: '+49-172-4106463',
      email: 'info@salihmaral.de',
      image: 'https://salihmaral.de/logo.png',
      priceRange: '€€',
      founder: {
        '@type': 'Person',
        name: 'Salih Maral',
        jobTitle: 'Official Google Partner & Senior Digital Marketing Expert'
      },
      areaServed: city === 'dortmund'
        ? [
            { '@type': 'City', name: 'Dortmund' },
            { '@type': 'City', name: 'Essen' },
            { '@type': 'City', name: 'Bochum' },
            { '@type': 'City', name: 'Marl' },
            { '@type': 'AdministrativeArea', name: 'Kreis Recklinghausen' },
            { '@type': 'AdministrativeArea', name: 'Ruhrgebiet' }
          ]
        : {
            '@type': 'City',
            name: cityData.name
          },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '312',
        bestRating: '5'
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
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: cityData.name,
          item: `https://salihmaral.de/${currentLang}/standorte/${city}`
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: currentLang === 'tr'
            ? `${cityData.name} Google Ads ajansı yönetim ücreti ne kadardır?`
            : currentLang === 'en'
            ? `How much does Google Ads management cost in ${cityData.name}?`
            : `Was kostet eine professionelle Google Ads Betreuung in ${cityData.name}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: currentLang === 'tr'
              ? `${cityData.name} ve çevresindeki işletmeler için Google Ads yönetimini bütçeden komisyon almadan, aylık şeffaf sabit fiyat (Fixpreis) modeliyle yürütüyoruz. Sürpriz ek maliyet yoktur.`
              : currentLang === 'en'
              ? `We manage Google Ads for businesses in ${cityData.name} on a predictable flat-fee retainer with zero percentage-of-ad-spend conflicts.`
              : `Wir betreuen Google Ads für Unternehmen in ${cityData.name} zum fairen und planbaren monatlichen Fixpreis (Pauschale) statt unberechenbarer Prozent-Provisionen auf Ihr Werbebudget.`
          }
        },
        {
          '@type': 'Question',
          name: currentLang === 'tr'
            ? 'Bir Google Ads ajansı ile çalışmak için hangi bütçeden başlamak mantıklıdır?'
            : currentLang === 'en'
            ? 'From what budget does a Google Ads agency make sense?'
            : 'Ab welchem Budget lohnt sich eine professionelle Google Ads & AdWords Agentur?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: currentLang === 'tr'
              ? 'Aylık 1.000 € ile 1.500 € reklam bütçesinden itibaren profesyonel ajans yönetimi kendini hızlıca amorti eder. Sabit fiyatlı modelimizle harcanan her euronun kâra dönüşmesini sağlıyoruz.'
              : currentLang === 'en'
              ? 'Starting from a monthly ad spend of 1,000 € to 1,500 €, hiring a certified Google Ads agency yields a strong positive ROI with our transparent flat-fee model.'
              : 'Bereits ab einem monatlichen Werbebudget von 1.000 € bis 1.500 € rechnet sich eine professionelle Google Ads Agentur für KMUs und Dienstleister. Durch unser transparentes Fixpreis-Modell fließt Ihr Budget zu 100% in kaufbereite Kundenkontakte statt teure Agenturprovisionen.'
          }
        },
        {
          '@type': 'Question',
          name: currentLang === 'tr'
            ? 'Bir işletme ne zaman Google Ads ajansı tutmalıdır?'
            : currentLang === 'en'
            ? 'When should a business hire a Google Ads agency?'
            : 'Ab wann sollte ein Unternehmen eine Google Ads & AdWords Agentur beauftragen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: currentLang === 'tr'
              ? 'Mevcut reklam maliyetleriniz (CPA) yükseldiğinde, şirket içi zaman yetersiz kaldığında veya profesyonel Server-Side dönüşüm takibi ile ölçeklenmek istediğinizde ajans desteği şarttır.'
              : currentLang === 'en'
              ? 'You should hire an agency when internal time is constrained, CPA is too high, or you require expert Smart Bidding and Server-Side tracking to scale.'
              : 'Unternehmen sollten eine Agentur beauftragen, sobald interne Ressourcen an Grenzen stoßen, Klickpreise ohne ausreichende Leads steigen oder Conversion-Tracking (Consent Mode v2 & Server-Side CAPI) professionell eingerichtet werden muss, um Streuverluste zu stoppen.'
          }
        },
        {
          '@type': 'Question',
          name: currentLang === 'tr'
            ? `${cityData.name} pazarında Google Ads sonuçlarını ne zaman görürüm?`
            : currentLang === 'en'
            ? `How quickly can I see results in ${cityData.name}?`
            : `Wie schnell sind messbare Ergebnisse bei Google Ads in ${cityData.name} sichtbar?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: currentLang === 'tr'
              ? 'Kampanyalar yayına girdikten sonra ilk 24-48 saat içinde hedef kitlenizden gerçek tıklamalar ve müşteri talepleri gelmeye başlar. Algoritmik Smart Bidding optimizasyonu ile 14-30 gün içinde en yüksek kârlılığa (ROAS) ulaşılır.'
              : currentLang === 'en'
              ? 'First qualified leads start coming within 24 to 48 hours of campaign launch. Full Smart Bidding efficiency is typically unlocked within 14 to 30 days.'
              : 'Erste Klicks und qualifizierte Anfragen treffen bereits in den ersten 24 bis 48 Stunden nach Kampagnenstart ein. Nach 14 bis 30 Tagen Smart-Bidding-Lernphase erreicht die Kampagne ihren vollen ROAS.'
          }
        },
        {
          '@type': 'Question',
          name: currentLang === 'tr'
            ? `${cityData.name} için uzun süreli sözleşme zorunluluğu var mı?`
            : currentLang === 'en'
            ? `Are there long-term lock-in contracts?`
            : `Gibt es langfristige Knebelverträge?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: currentLang === 'tr'
              ? 'Hayır. Müşterilerimizi 12 aylık bağlayıcı sözleşmelerle değil, her ay ürettiğimiz kârlılık ve ciro artışı ile yanımızda tutuyoruz.'
              : currentLang === 'en'
              ? 'No. We work on flexible terms without 12-month lock-ins. You stay because of measurable results.'
              : 'Nein. Wir verzichten auf starre 12-Monats-Verträge. Unsere Kunden bleiben durch nachweisbaren ROAS und kontinuierliche Neukundengewinnung.'
          }
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Fixed Top Navigation Bar */}
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

            <Link href={`/${currentLang}/standorte`} className="hover:text-white transition-colors">
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
                  href={`/${lng}/standorte/${city}`}
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
            <button
              onClick={scrollToForm}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <span>{currentLang === 'tr' ? 'Teklif Al' : currentLang === 'en' ? 'Get Proposal' : 'Angebot anfordern'}</span>
            </button>

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
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
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
              <button
                onClick={(e) => {
                  setMobileMenuOpen(false)
                  scrollToForm(e)
                }}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg text-center cursor-pointer"
              >
                {currentLang === 'tr' ? 'Ücretsiz Teklif Alın ➔' : currentLang === 'en' ? 'Request Proposal ➔' : 'Kostenloses Angebot anfordern ➔'}
              </button>
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
              <Link href={`/${currentLang}/standorte`} className="hover:text-blue-400 transition-colors">
                <span>{currentLang === 'tr' ? 'Şehirler' : currentLang === 'en' ? 'Locations' : 'Standorte'}</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-white font-semibold">{cityData.name}</span>
            </nav>
          </div>
        </div>

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

      {/* Clickable Services Grid */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>{currentLang === 'tr' ? 'Tüm Hizmet Alanlarımız' : currentLang === 'en' ? 'Full Service Portfolio' : 'Full-Service Leistungsspektrum'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              {currentLang === 'tr'
                ? `${cityData.name} İçin Dijital Büyüme ve Reklam Hizmetleri`
                : currentLang === 'en'
                ? `Digital Growth & Advertising Services for ${cityData.name}`
                : `Leistungsspektrum & Kernkanäle für ${cityData.name}`}
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-3 md:mt-0">
            {currentLang === 'tr'
              ? 'Tüm kanallarda şeffaf, ölçülebilir ve sabit fiyatlı danışmanlık sunuyoruz. İncelemek istediğiniz hizmete tıklayın:'
              : currentLang === 'en'
              ? 'Transparent flat-fee execution across all high-intent channels. Click any service to view full technical details:'
              : 'Verzahnte Performance-Kanäle ohne Silo-Denken zum planbaren Fixpreis. Klicken Sie auf einen Bereich für Details:'}
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

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">{growth.catchmentTitle}</h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl mb-12">{growth.catchment}</p>

        <h2 className="text-3xl font-bold text-white mb-6">{growth.sectorsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {growth.sectors.map((sector) => (
            <div key={sector.name} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-3">{sector.name}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{sector.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">{growth.campaignTitle}</h2>
        <ol className="space-y-4 mb-14">
          {growth.steps.map((step, index) => (
            <li key={step.title} className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">{index + 1}. {step.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>

        <h2 className="text-3xl font-bold text-white mb-4">{growth.mapsTitle}</h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl mb-12">{growth.maps}</p>

        <h2 className="text-3xl font-bold text-white mb-4">{growth.budgetTitle}</h2>
        <p className="text-slate-300 leading-relaxed max-w-3xl mb-6">{growth.budget}</p>
        <p className="text-slate-300 leading-relaxed max-w-3xl mb-12">{growth.firstMonth}</p>

        <h2 className="text-2xl font-bold text-white mb-4">{growth.linksTitle}</h2>
        <div className="flex flex-wrap gap-3">
          {growth.links.map((link) => (
            <Link key={link.href} href={link.href} className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-200 hover:border-blue-500 hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href={`/${currentLang}/standorte`} className="px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/40 text-sm text-blue-200 hover:bg-blue-600/30">
            {currentLang === 'tr' ? 'Tüm şehirler' : currentLang === 'en' ? 'All cities' : 'Alle Städte'}
          </Link>
        </div>
      </section>

      {/* Local Case Study Section */}
      <section className="py-14 bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-950 border border-blue-500/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span>🏆 {currentLang === 'tr' ? 'Bölgesel Başarı Analizi' : currentLang === 'en' ? 'Local Case Study' : 'Regionale Fallstudie'}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {currentLang === 'tr'
                    ? `${cityData.name} Bölgesinde Müşteri Edinme Maliyeti (CPA) %38 Düşürüldü`
                    : currentLang === 'en'
                    ? `Cost-Per-Lead (CPA) Slashed by 38% for ${cityData.name} Business`
                    : `CPA um 38% gesenkt: Mehr qualifizierte Leads für Unternehmen in ${cityData.name}`}
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  {currentLang === 'tr'
                    ? `${cityData.name} pazarında faaliyet gösteren bir şirket için negatif anahtar kelime filtrelemesi ve sunucu taraflı dönüşüm takibi (CAPI) kurarak ortalama ${cityData.stats.roas} ROAS elde ettik.`
                    : currentLang === 'en'
                    ? `By implementing negative keyword pruning and Server-Side CAPI tracking, we generated an average ${cityData.stats.roas} ROAS for a ${cityData.name}-based business.`
                    : `Durch präzises Negative-Keyword-Management, Server-Side CAPI Tracking und zielgerichtete Suchanzeigen erzielten wir für einen Kunden in ${cityData.name} einen Durchschnitts-ROAS von ${cityData.stats.roas}.`}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center shrink-0">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="block text-2xl font-black text-blue-400">{cityData.stats.roas}</span>
                  <span className="text-xs text-slate-400 uppercase font-semibold">ROAS</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="block text-2xl font-black text-emerald-400">-38%</span>
                  <span className="text-xs text-slate-400 uppercase font-semibold">CPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Budget & Cost Calculator Section */}
      <section className="py-14 bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleAdsBudgetCalculator lang={currentLang} defaultCity={cityData.name} />
        </div>
      </section>

      {/* Local FAQ Section with Direct SERP Answers */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
              FAQ & Transparenz
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              {currentLang === 'tr'
                ? `${cityData.name} Google Ads Hakkında Sıkça Sorulan Sorular`
                : currentLang === 'en'
                ? `Frequently Asked Questions in ${cityData.name}`
                : `Häufige Fragen zu Google Ads in ${cityData.name}`}
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-lg text-white mb-2">
                {currentLang === 'tr'
                  ? `${cityData.name} Google Ads ajansı yönetim ücreti ne kadardır?`
                  : currentLang === 'en'
                  ? `How much does Google Ads management cost in ${cityData.name}?`
                  : `Was kostet eine professionelle Google Ads Betreuung in ${cityData.name}?`}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentLang === 'tr'
                  ? `${cityData.name} ve çevresindeki işletmeler için Google Ads yönetimini bütçeden komisyon almadan, aylık şeffaf sabit fiyat (Fixpreis) modeliyle yürütüyoruz. Detaylı piyasa analizi için `
                  : currentLang === 'en'
                  ? `We manage Google Ads for businesses in ${cityData.name} on a predictable flat-fee retainer. For a detailed breakdown, read our `
                  : `Wir betreuen Google Ads für Unternehmen in ${cityData.name} zum fairen und planbaren monatlichen Fixpreis statt unberechenbarer Prozent-Provisionen. Lesen Sie dazu unseren `}
                <a href="/blog/google-ads-agentur-preise-kosten-deutschland-2026" className="text-blue-400 underline hover:text-blue-300">
                  {currentLang === 'tr' ? 'Almanya Google Ads Fiyat Rehberi 2026' : currentLang === 'en' ? 'Germany Pricing Guide 2026' : 'Google Ads Agentur Kosten & Preise Leitfaden 2026'}
                </a>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-lg text-white mb-2">
                {currentLang === 'tr'
                  ? 'Bir Google Ads ajansı ile çalışmak için hangi bütçeden başlamak mantıklıdır?'
                  : currentLang === 'en'
                  ? 'From what budget does a Google Ads agency make sense?'
                  : 'Ab welchem Budget lohnt sich eine Google Ads & AdWords Agentur?'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentLang === 'tr'
                  ? 'Aylık 1.000 € ile 1.500 € reklam bütçesinden itibaren profesyonel ajans yönetimi kendini hızlıca amorti eder. Sabit fiyatlı modelimizle harcanan her euronun doğrudan ciroya dönüşmesini sağlıyoruz.'
                  : currentLang === 'en'
                  ? 'Starting from a monthly budget of 1,000 € to 1,500 €, hiring an agency generates positive ROI. Our flat fee ensures 100% of your ad spend directly targets buying customers.'
                  : 'Bereits ab einem monatlichen Werbebudget von 1.000 € bis 1.500 € rechnet sich eine professionelle Google Ads Agentur für die meisten Unternehmen und Kanzleien. Durch unser transparentes Fixpreis-Modell fließt Ihr Werbeetat zu 100% in Kundenklicks statt prozentuale Agenturprovisionen.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-lg text-white mb-2">
                {currentLang === 'tr'
                  ? 'Bir işletme ne zaman Google Ads ajansı tutmalıdır?'
                  : currentLang === 'en'
                  ? 'When should a business hire a Google Ads agency?'
                  : 'Ab wann sollte ein Unternehmen eine Google Ads & AdWords Agentur beauftragen?'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentLang === 'tr'
                  ? 'Mevcut reklam maliyetleriniz (CPA) yükseldiğinde, şirket içi zaman yetersiz kaldığında veya profesyonel Server-Side dönüşüm takibi ile ölçeklenmek istediğinizde ajans desteği şarttır.'
                  : currentLang === 'en'
                  ? 'Hire an agency when internal time is constrained, CPA is too high, or you require expert Smart Bidding and Server-Side tracking to scale.'
                  : 'Unternehmen sollten eine Agentur beauftragen, sobald interne Ressourcen an Grenzen stoßen, Klickpreise ohne ausreichende Leads steigen oder Conversion-Tracking (Consent Mode v2 & Server-Side CAPI) professionell eingerichtet werden muss, um Streuverluste zu stoppen.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-lg text-white mb-2">
                {currentLang === 'tr'
                  ? `${cityData.name} pazarında Google Ads sonuçlarını ne zaman görürüm?`
                  : currentLang === 'en'
                  ? `How quickly can I see results in ${cityData.name}?`
                  : `Wie schnell sind messbare Ergebnisse bei Google Ads in ${cityData.name} sichtbar?`}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentLang === 'tr'
                  ? 'Kampanyalar yayına girdikten sonra ilk 24-48 saat içinde hedef kitlenizden gerçek tıklamalar ve müşteri talepleri gelmeye başlar. Algoritmik Smart Bidding optimizasyonu ile 14-30 gün içinde en yüksek kârlılığa (ROAS) ulaşılır.'
                  : currentLang === 'en'
                  ? 'First qualified leads start coming within 24 to 48 hours of campaign launch. Full Smart Bidding efficiency is typically unlocked within 14 to 30 days.'
                  : 'Erste Klicks und qualifizierte Anfragen treffen bereits in den ersten 24 bis 48 Stunden nach Kampagnenstart ein. Nach 14 bis 30 Tagen Smart-Bidding-Lernphase erreicht die Kampagne ihren vollen ROAS.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-lg text-white mb-2">
                {currentLang === 'tr'
                  ? `${cityData.name} için uzun süreli sözleşme zorunluluğu var mı?`
                  : currentLang === 'en'
                  ? `Are there long-term lock-in contracts?`
                  : `Gibt es langfristige Knebelverträge?`}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {currentLang === 'tr'
                  ? 'Hayır. Müşterilerimizi 12 aylık bağlayıcı sözleşmelerle değil, her ay ürettiğimiz kârlılık ve ciro artışı ile yanımızda tutuyoruz.'
                  : currentLang === 'en'
                  ? 'No. We work on flexible terms without 12-month lock-ins. You stay because of measurable results.'
                  : 'Nein. Wir verzichten auf starre 12-Monats-Verträge. Unsere Kunden bleiben durch nachweisbaren ROAS und kontinuierliche Neukundengewinnung.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Guides & Blog Section */}
      <section className="py-16 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  : `Wichtige Leitfäden & Benchmarks für ${cityData.name}`}
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
            {/* Anti-bot Honeypot trap - invisible to humans, traps automated spam bots */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none', position: 'absolute', left: '-9999px' }}>
              <label htmlFor="b_check_city">Do not fill this</label>
              <input
                type="text"
                id="b_check_city"
                name="b_check"
                value={formData.b_check || ''}
                onChange={(e) => setFormData({ ...formData, b_check: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
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
                  className={`hover:text-blue-400 transition-colors ${
                    c.slug === city ? 'text-blue-400 font-bold' : ''
                  }`}
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
                <a href="#anfrage-form" onClick={scrollToForm} className="text-blue-400 hover:underline">
                  {currentLang === 'tr' ? 'Ücretsiz Teklif Talebi' : currentLang === 'en' ? 'Request Proposal' : 'Kostenloses Angebot anfordern'}
                </a>
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
