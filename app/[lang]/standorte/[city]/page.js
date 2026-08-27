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
    tagline: 'Google Ads Agentur Köln, Meta Ads & Performance Marketing für NRW',
    description: 'Erreichen Sie Top-Rankings bei Google, profitable Google Ads und konvertierende Instagram Werbeanzeigen mit Ihrer Performance Marketing Agentur in Köln.',
    stats: { clients: '60+', roas: '4.3x', experience: '17+ Jahre' },
    industries: ['Medien & Kreativwirtschaft', 'E-Commerce & Startups', 'Gesundheitswesen & Ärzte', 'Handwerk, Kanzleien & B2B'],
    de: {
      heroTitle: 'Google Ads & Performance Marketing Agentur Köln',
      heroSub: 'Google Ads, Meta Ads (Instagram & Facebook) & SEO für Köln & das Rheinland',
      intro: 'Als offizieller Google Partner mit 17+ Jahren Erfahrung verbinden wir hochprofitables Suchmaschinenmarketing (Google Ads & AdWords Köln) mit zielgenauen Social Ads (Instagram & Facebook Werbeanzeigen Köln) für planbare Kundenanfragen und maximalen ROI.',
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
  },
  hamburg: {
    name: 'Hamburg',
    region: 'Hamburg',
    tagline: 'Umsatzstarke Google Ads & E-Commerce Betreuung für Hamburg und Norddeutschland',
    description: 'Generieren Sie messbar mehr Kunden und Shop-Bestellungen in Hamburg mit zertifiziertem Google Ads und Meta Ads Management.',
    stats: { clients: '75+', roas: '4.4x', experience: '17+ Jahre' },
    industries: ['Handel & E-Commerce', 'Logistik & B2B', 'Agenturen & Kanzleien', 'Gastronomie & Praxen'],
    de: {
      heroTitle: 'Google Ads Agentur Hamburg',
      heroSub: 'Zertifizierter Google Partner für Hamburg & Norddeutschland',
      intro: 'Hamburgs Handelsmetropole verlangt erstklassige Online-Präsenz. Als zertifizierter Google Partner mit 17+ Jahren Erfahrung steuern wir Ihre Google Ads und SEO-Kampagnen für maximale Profitabilität.',
      cta: 'Jetzt unverbindliches Angebot anfordern',
    },
    tr: {
      heroTitle: 'Hamburg Google Ads & Dijital Pazarlama Ajansı',
      heroSub: 'Hamburg ve Kuzey Almanya İçin Resmi Google Partneri',
      intro: 'Hamburg ve çevresindeki işletmeler için Google Ads, Meta Ads ve SEO danışmanlığı ile satışlarınızı ve organik görünürlüğünüzü katlıyoruz.',
      cta: 'Hamburg İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads Agency Hamburg',
      heroSub: 'Certified Google Partner for Hamburg & Northern Germany',
      intro: 'Scale your business in Hamburg with high-converting Google Ads and Meta Ads management from a certified 17+ year senior expert.',
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
      intro: 'Das Ruhrgebiet ist der größte Ballungsraum Deutschlands. Wir positionieren Ihr Unternehmen bei Google ganz oben und sichern Ihnen wertvolle Direktaufträge.',
      cta: 'Jetzt unverbindliches Angebot anfordern',
    },
    tr: {
      heroTitle: 'Dortmund & Ruhr Bölgesi Google Ads Ajansı',
      heroSub: 'Dortmund, Essen ve Ruhr Bölgesi İçin Kârlı Reklam Yönetimi',
      intro: 'Dortmund ve Ruhr bölgesindeki inşaat, ticaret ve hizmet firmaları için Google Ads ve yerel SEO ile cironuzu katlıyoruz.',
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
    name: 'Leipzig & Dresden',
    region: 'Sachsen / Mitteldeutschland',
    tagline: 'Google Ads & SEO für den dynamischen Wachstumsstandort Leipzig',
    description: 'Skalieren Sie Ihr Unternehmen in Leipzig, Dresden und ganz Mitteldeutschland mit datengetriebenen Google Ads und Performance-Kampagnen.',
    stats: { clients: '50+', roas: '4.2x', experience: '17+ Jahre' },
    industries: ['E-Commerce & Logistik', 'Start-ups & Tech', 'Immobilien & B2B', 'Praxen & Kanzleien'],
    de: {
      heroTitle: 'Google Ads Agentur Leipzig & Sachsen',
      heroSub: 'Zertifizierter Google Partner für Leipzig & Dresden',
      intro: 'Leipzig wächst rasant. Mit zielgerichteten Google Ads und SEO-Strategien sichern wir Ihrer Marke den entscheidenden Vorsprung im mitteldeutschen Wirtschaftsraum.',
      cta: 'Jetzt unverbindliches Angebot anfordern',
    },
    tr: {
      heroTitle: 'Leipzig & Saksonya Google Ads Ajansı',
      heroSub: 'Leipzig ve Dresden İçin Resmi Google Partneri',
      intro: 'Leipzig ve Saksonya bölgesindeki işletmeler için Google Ads ve Meta Ads yönetimi ile müşteri trafiğinizi katlıyoruz.',
      cta: 'Leipzig İçin Ücretsiz Teklif Alın',
    },
    en: {
      heroTitle: 'Google Ads Agency Leipzig & Saxony',
      heroSub: 'Certified Google Partner for Leipzig & Dresden',
      intro: 'Accelerate your growth in Leipzig and Central Germany with precision Google Ads and SEO campaigns.',
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
