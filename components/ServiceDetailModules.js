'use client'

import React, { useState } from 'react'
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react'

export default function ServiceDetailModules({ serviceSlug, lang = 'de', primaryColor = '#4285F4' }) {
  const modulesCatalog = {
    'google-ads': {
      tr: [
        {
          id: 'campaign-types',
          title: 'Google Ads Kampanya Türleri',
          subtitle: 'Kampanya Türü Seçimi ve Profesyonel Yönetimi',
          count: 17,
          groups: [
            {
              categoryName: 'ARAMA & ALIŞVERİŞ',
              items: [
                { badge: 'GOOGLE ADS', title: 'Google Search Reklamları', desc: 'Satın alma niyetli aramalarda 1. sırada yer alma' },
                { badge: 'GOOGLE ADS', title: 'Google Harita Reklamları', desc: 'Yerel aramalarda rota ve arama çağrısı alma' },
                { badge: 'GOOGLE ADS', title: 'Performance Max (PMax)', desc: 'Tüm Google ağında yapay zeka ile otomatik dönüşüm' },
                { badge: 'GOOGLE ADS', title: 'Google Alışveriş Reklamları', desc: 'E-ticaret ürün vitrini ve Merchant Center entegrasyonu' },
                { badge: 'GOOGLE ADS', title: 'Dinamik Arama Ağı Reklamları', desc: 'Site içeriğine göre otomatik anahtar kelime eşleşmesi' },
                { badge: 'GOOGLE ADS', title: 'Duyarlı Arama Ağı Reklamları (RSA)', desc: '15 başlık ve 4 açıklama ile dinamik A/B optimizasyonu' }
              ]
            },
            {
              categoryName: 'VİDEO & GÖRÜNTÜLÜ',
              items: [
                { badge: 'GOOGLE ADS', title: 'YouTube Reklamları', desc: 'Hedef kitleye özel TrueView ve In-Feed video tanıtımı' },
                { badge: 'GOOGLE ADS', title: 'YouTube Shorts Reklamları', desc: 'Dikey tam ekran video ile genç kitleye doğrudan erişim' },
                { badge: 'GOOGLE ADS', title: 'Video Action Campaigns', desc: 'Video izleyenleri anında web sitesine ve satışa yönlendirme' },
                { badge: 'GOOGLE ADS', title: 'Demand Gen Reklamları', desc: 'Gmail, Discover ve YouTube akışında görsel etki yaratma' },
                { badge: 'GOOGLE ADS', title: 'Görüntülü Reklam Yönetimi (GDN)', desc: 'Milyonlarca web sitesinde görsel banner gösterimi' },
                { badge: 'GOOGLE ADS', title: 'Yeniden Pazarlama (Remarketing)', desc: 'Siteyi ziyaret edip ayrılanları geri getiren hatırlatma reklamları' },
                { badge: 'GOOGLE ADS', title: 'Dinamik Yeniden Pazarlama', desc: 'Kullanıcının incelediği spesifik ürünleri tekrar gösterme' },
                { badge: 'GOOGLE ADS', title: 'Haber Sitesi & Premium Yerleşimler', desc: 'Saygın haber sitelerinde prestijli marka konumlandırması' }
              ]
            },
            {
              categoryName: 'NİŞ & ÖZEL KAMPANYALAR',
              items: [
                { badge: 'GOOGLE ADS', title: 'Çağrı Odaklı Reklamlar (Call Ads)', desc: 'Doğrudan telefon araması üreten mobil reklamlar' },
                { badge: 'GOOGLE ADS', title: 'Mobil Uygulama Reklamları', desc: 'App Store ve Google Play indirme sayısı artırma' },
                { badge: 'GOOGLE ADS', title: 'Lead Generation Form Reklamları', desc: 'Kullanıcı siteden çıkmadan form toplama' }
              ]
            }
          ]
        },
        {
          id: 'management-strategy',
          title: 'Google Reklam Yönetimi & Strateji',
          subtitle: 'Kurulum / Optimizasyon / Sabit Fiyat Yönetimi',
          count: 14,
          groups: [
            {
              categoryName: 'HESAP YÖNETİMİ',
              items: [
                { badge: 'GOOGLE ADS', title: 'Google Ads Profesyonel Yönetimi', desc: '17+ yıllık uzmanlıkla sürekli günlük optimizasyon' },
                { badge: 'GOOGLE ADS', title: 'Sıfırdan Google Ads Kurulumu', desc: 'Kusursuz hesap mimarisi ve ilk kampanya lansmanı' },
                { badge: 'GOOGLE ADS', title: 'Google Ads Hesap Denetimi (Audit)', desc: 'Mevcut hesaplardaki para kaçaklarını tespit eden derin analiz' },
                { badge: 'GOOGLE ADS', title: 'Sabit Fiyatlı (Fixpreis) Yönetim', desc: 'Sürpriz komisyon olmadan net aylık sabit yönetim ücreti' },
                { badge: 'GOOGLE ADS', title: 'Google Reklam Danışmanlığı', desc: 'Birebir strateji geliştirme ve hesap koçluğu' }
              ]
            },
            {
              categoryName: 'FİYATLANDIRMA & MALİYET DÜŞÜRME',
              items: [
                { badge: 'GOOGLE ADS', title: 'Tıklama Başı Maliyet (CPC) Düşürme', desc: 'Gereksiz tıklamaları engelleyerek maliyetleri %40 düşürme' },
                { badge: 'GOOGLE ADS', title: 'Bütçe & Harcama Optimizasyonu', desc: 'Her harcanan 1 Eurodan maksimum dönüşüm alma' },
                { badge: 'GOOGLE ADS', title: 'Kalite Puanı (Quality Score) Yükseltme', desc: '10/10 kalite puanı ile rakiplerden daha ucuza üstte çıkma' },
                { badge: 'GOOGLE ADS', title: 'Tıklama Sahtekarlığı (Click Fraud) Koruması', desc: 'Bot ve rakip sahte tıklamalarını engelleme' }
              ]
            },
            {
              categoryName: 'SORUN GİDERME & ÇÖZÜMLER',
              items: [
                { badge: 'GOOGLE ADS', title: 'Reklam Onaylatma & İtiraz', desc: 'Reddedilen veya askıya alınan reklamları onaylatma' },
                { badge: 'GOOGLE ADS', title: 'Reklam Var Müşteri Yok Sorunu Çözümü', desc: 'Trafik gelip satış olmama problemini kökten çözme' },
                { badge: 'GOOGLE ADS', title: 'Rakip Marka Koruması', desc: 'Marka adınıza reklam veren rakiplere karşı savunma' },
                { badge: 'GOOGLE ADS', title: 'Google Ads Hata Kodları Çözümü', desc: 'Hesaptaki teknik politika ve uyarıların giderilmesi' },
                { badge: 'GOOGLE ADS', title: 'Negatif Anahtar Kelime Mimarisi', desc: 'Alakasız kelimeleri listeleyerek bütçeyi koruma' }
              ]
            }
          ]
        },
        {
          id: 'optimization-services',
          title: 'Optimizasyon & İleri Seviye Araçlar',
          subtitle: 'Teklif Stratejisi / Akıllı Hedefleme / Dönüşüm Testleri',
          count: 12,
          groups: [
            {
              categoryName: 'AKILLI TEKLİF & ROAS',
              items: [
                { badge: 'OPTIMİZASYON', title: 'Hedef ROAS (tROAS) Skalalama', desc: 'Belirlenen kârlılık oranında bütçeyi güvenle büyütme' },
                { badge: 'OPTIMİZASYON', title: 'Hedef CPA (tCPA) Optimizasyonu', desc: 'Müşteri kazanım maliyetini minimuma indirme' },
                { badge: 'OPTIMİZASYON', title: 'Dönüşümleri En Üst Düzeye Çıkarma', desc: 'Yapay zekanın en yüksek dönüşüm getiren anlara teklif vermesi' },
                { badge: 'OPTIMİZASYON', title: 'Dönüşüm Değeri Kuralları', desc: 'Yüksek değerli müşteri segmentlerine daha yüksek teklif' }
              ]
            },
            {
              categoryName: 'METİN & VARLIK OPTİMİZASYONU',
              items: [
                { badge: 'OPTIMİZASYON', title: 'Duyarlı Reklam A/B Metin Testi', desc: 'En yüksek tıklama oranına sahip başlık varyasyonlarını bulma' },
                { badge: 'OPTIMİZASYON', title: 'Site Bağlantısı & Açıklama Uzantıları', desc: 'Reklamın ekranda kapladığı alanı 2 katına çıkarma' },
                { badge: 'OPTIMİZASYON', title: 'Fiyat & Promosyon Uzantıları', desc: 'İndirim ve kampanyaları arama sonucunda doğrudan gösterme' },
                { badge: 'OPTIMİZASYON', title: 'Görsel & Logo Varlık Optimizasyonu', desc: 'Resmi logo ve yüksek kaliteli görsellerle marka güveni' }
              ]
            },
            {
              categoryName: 'HEDEF KİTLE & COĞRAFYA',
              items: [
                { badge: 'OPTIMİZASYON', title: 'Coğrafi Yarıçap & Şehir Hedeflemesi', desc: 'Sadece hizmet verdiğiniz posta kodu ve şehirlere reklam verme' },
                { badge: 'OPTIMİZASYON', title: 'Cihaz & Saat Dilimi Teklif Ayarları', desc: 'En çok satış getiren gün ve saatlere bütçe ayırma' },
                { badge: 'OPTIMİZASYON', title: 'Demografik Yaş & Gelir Filtreleme', desc: 'Doğru alım gücüne sahip kitleye odaklanma' },
                { badge: 'OPTIMİZASYON', title: 'Özel Segmentler (Custom Segments)', desc: 'Rakiplerinizi arayan veya ilgili siteleri gezenleri hedefleme' }
              ]
            }
          ]
        }
      ],
      de: [
        {
          id: 'campaign-types',
          title: 'Google Ads Kampagnentypen',
          subtitle: 'Auswahl & professionelle Steuerung aller Formate',
          count: 17,
          groups: [
            {
              categoryName: 'SUCHE & SHOPPING',
              items: [
                { badge: 'GOOGLE ADS', title: 'Google Suchanzeigen (Search)', desc: 'Platz 1 bei kaufbereiten Suchanfragen sichern' },
                { badge: 'GOOGLE ADS', title: 'Google Maps Lokalanzeigen', desc: 'Lokale Kunden über Google Maps und Routenplaner gewinnen' },
                { badge: 'GOOGLE ADS', title: 'Performance Max (PMax)', desc: 'KI-gesteuerte Omnichannel-Kampagnen über alle Google-Netzwerke' },
                { badge: 'GOOGLE ADS', title: 'Google Shopping Kampagnen', desc: 'E-Commerce Produktanzeigen mit Merchant Center Anbindung' },
                { badge: 'GOOGLE ADS', title: 'Dynamische Suchanzeigen (DSA)', desc: 'Automatische Keyword-Erkennung basierend auf Website-Inhalten' },
                { badge: 'GOOGLE ADS', title: 'Responsive Suchanzeigen (RSA)', desc: 'Dynamische A/B-Tests aus 15 Titeln und 4 Beschreibungen' }
              ]
            },
            {
              categoryName: 'VIDEO & DISPLAY',
              items: [
                { badge: 'GOOGLE ADS', title: 'YouTube Video Ads', desc: 'Zielgruppenpräzise TrueView & In-Feed Markenplatzierung' },
                { badge: 'GOOGLE ADS', title: 'YouTube Shorts Ads', desc: 'Vertikale Vollbild-Videoanzeigen für maximale mobile Reichweite' },
                { badge: 'GOOGLE ADS', title: 'Video Action Campaigns', desc: 'Zuschauer direkt zu Webseiten-Käufen und Leads konvertieren' },
                { badge: 'GOOGLE ADS', title: 'Demand Gen Kampagnen', desc: 'Visuelle Markenwirkung in Gmail, Discover und YouTube Feeds' },
                { badge: 'GOOGLE ADS', title: 'Google Display Netzwerk (GDN)', desc: 'Bannerwerbung auf über 3 Millionen Partner-Websites' },
                { badge: 'GOOGLE ADS', title: 'Klassisches Remarketing', desc: 'Website-Besucher gezielt wieder ansprechen und zurückholen' },
                { badge: 'GOOGLE ADS', title: 'Dynamisches Remarketing', desc: 'Zuvor angesehene Produkte automatisch erneut einblenden' },
                { badge: 'GOOGLE ADS', title: 'Premium-Medienplatzierungen', desc: 'Gezielte Ausspielung auf führenden Nachrichten- und Fachportalen' }
              ]
            },
            {
              categoryName: 'SPEZIAL- & NORMKAMPAGNEN',
              items: [
                { badge: 'GOOGLE ADS', title: 'Call-Only Anrufkampagnen', desc: 'Direkte Telefonanrufe für Handwerker, Ärzte und Dienstleister' },
                { badge: 'GOOGLE ADS', title: 'App-Installationskampagnen', desc: 'Mehr Downloads im App Store und Google Play Store' },
                { badge: 'GOOGLE ADS', title: 'Lead-Formular-Erweiterungen', desc: 'Kundenanfragen direkt in den Google-Suchergebnissen erfassen' }
              ]
            }
          ]
        },
        {
          id: 'management-strategy',
          title: 'Google Ads Betreuung & Strategie',
          subtitle: 'Setup / Audit / Fixpreis-Verwaltung',
          count: 14,
          groups: [
            {
              categoryName: 'KONTOBETREUUNG',
              items: [
                { badge: 'GOOGLE ADS', title: 'Full-Service Google Ads Betreuung', desc: 'Laufende Optimierung direkt vom zertifizierten Google Partner' },
                { badge: 'GOOGLE ADS', title: 'Neuanlage & Strukturierung', desc: 'Erstklassige Kontenarchitektur und sauberer Kampagnenstart' },
                { badge: 'GOOGLE ADS', title: 'Google Ads Konto-Audit', desc: 'Detaillierte Fehleranalyse zur Beseitigung von Budgetverschwendung' },
                { badge: 'GOOGLE ADS', title: 'Transparente Fixpreis-Betreuung', desc: 'Feste Monatspauschale ohne prozentuale Budget-Provision' },
                { badge: 'GOOGLE ADS', title: 'Strategische Beratung & Coaching', desc: 'Individuelle Sparringspartner-Begleitung für Ihr Marketingteam' }
              ]
            },
            {
              categoryName: 'KOSTENREDUKTION & CPC-SENKUNG',
              items: [
                { badge: 'GOOGLE ADS', title: 'Klickpreis (CPC) Reduktion', desc: 'Kostensenkung um bis zu 40% durch Ausschluss irrelevanter Klicks' },
                { badge: 'GOOGLE ADS', title: 'Budget- & Effizienzoptimierung', desc: 'Maximaler Ertrag aus jedem investierten Werbeeuro' },
                { badge: 'GOOGLE ADS', title: 'Qualitätsfaktor (Quality Score) Steigerung', desc: 'Günstigere Klicks und Top-Positionen durch 10/10 Relevanz' },
                { badge: 'GOOGLE ADS', title: 'Klickbetrug-Schutz (Click Fraud)', desc: 'Ausschluss von Bot-Netzwerken und unfairen Konkurrenzklicks' }
              ]
            },
            {
              categoryName: 'PROBLEMLÖSUNG & SCHUTZ',
              items: [
                { badge: 'GOOGLE ADS', title: 'Ablehnungen & Richtlinien-Freigabe', desc: 'Reaktivierung und Freigabe abgelehnter Werbeanzeigen' },
                { badge: 'GOOGLE ADS', title: 'Klicks ohne Verkäufe beheben', desc: 'Ursachenforschung und Conversion-Optimierung' },
                { badge: 'GOOGLE ADS', title: 'Markenschutz (Brand Protection)', desc: 'Verteidigung gegen Wettbewerber, die auf Ihren Namen werben' },
                { badge: 'GOOGLE ADS', title: 'Google Fehlercode-Behebung', desc: 'Beseitigung aller Systemwarnungen im Werbekonto' },
                { badge: 'GOOGLE ADS', title: 'Negative Keyword Architektur', desc: 'Umfassende Ausschlusslisten für 100% qualifizierten Traffic' }
              ]
            }
          ]
        },
        {
          id: 'optimization-services',
          title: 'Optimierung & Advanced Features',
          subtitle: 'Smart Bidding / Zielgruppen / A/B Testing',
          count: 12,
          groups: [
            {
              categoryName: 'SMART BIDDING & ROAS',
              items: [
                { badge: 'OPTIMIERUNG', title: 'Ziel-ROAS (tROAS) Skalierung', desc: 'Skalieren von Werbeausgaben bei garantierter Rentabilität' },
                { badge: 'OPTIMIERUNG', title: 'Ziel-CPA (tCPA) Optimierung', desc: 'Minimierung der Kosten pro Lead und Kundenanfrage' },
                { badge: 'OPTIMIERUNG', title: 'Conversions maximieren', desc: 'Intelligente KI-Gebote für kaufkräftige Nutzer' },
                { badge: 'OPTIMIERUNG', title: 'Conversion-Wert-Regeln', desc: 'Höhere Gebote für wertvollere Kundengruppen' }
              ]
            },
            {
              categoryName: 'TEXTE & ASSET-OPTIMIERUNG',
              items: [
                { badge: 'OPTIMIERUNG', title: 'Responsive Anzeigentexte A/B-Tests', desc: 'Ermittlung der conversion-stärksten Formulierungsvarianten' },
                { badge: 'OPTIMIERUNG', title: 'Sitelinks & Zusatzinformationen', desc: 'Verdoppelung der sichtbaren Werbefläche auf mobilen Geräten' },
                { badge: 'OPTIMIERUNG', title: 'Preis- & Aktionserweiterungen', desc: 'Rabatte und Konditionen direkt im Suchergebnis hervorheben' },
                { badge: 'OPTIMIERUNG', title: 'Logo- & Bilderweiterungen', desc: 'Visuelles Vertrauen durch verifizierte Marken-Assets' }
              ]
            },
            {
              categoryName: 'ZIELGRUPPEN & GEOTARGETING',
              items: [
                { badge: 'OPTIMIERUNG', title: 'Radius- & Postleitzahlen-Targeting', desc: 'Exakte regionale Aussteuerung ohne Streuverluste' },
                { badge: 'OPTIMIERUNG', title: 'Werbezeitenplaner & Wochentage', desc: 'Fokussierung auf umsatzstarke Geschäftszeiten' },
                { badge: 'OPTIMIERUNG', title: 'Demografische Filter (Alter/Einkommen)', desc: 'Zielgerichtete Ansprache der zahlungskräftigsten Zielgruppe' },
                { badge: 'OPTIMIERUNG', title: 'Benutzerdefinierte Segmente (Custom)', desc: 'Targeting von Nutzern, die Wettbewerber-Websites besuchen' }
              ]
            }
          ]
        }
      ],
      en: [
        {
          id: 'campaign-types',
          title: 'Google Ads Campaign Types',
          subtitle: 'Complete Management of All Search, Video & Shopping Formats',
          count: 17,
          groups: [
            {
              categoryName: 'SEARCH & SHOPPING',
              items: [
                { badge: 'GOOGLE ADS', title: 'Google Search Ads', desc: 'Rank #1 on high-intent buyer searches' },
                { badge: 'GOOGLE ADS', title: 'Google Maps Local Ads', desc: 'Drive local foot traffic and customer calls' },
                { badge: 'GOOGLE ADS', title: 'Performance Max (PMax)', desc: 'AI-driven full-funnel scaling across all Google channels' },
                { badge: 'GOOGLE ADS', title: 'Google Shopping Ads', desc: 'E-commerce product visual ads with Merchant Center' },
                { badge: 'GOOGLE ADS', title: 'Dynamic Search Ads (DSA)', desc: 'Automated search targeting mapped to site content' },
                { badge: 'GOOGLE ADS', title: 'Responsive Search Ads (RSA)', desc: 'Continuous machine learning multivariate copy tests' }
              ]
            },
            {
              categoryName: 'VIDEO & DISPLAY',
              items: [
                { badge: 'GOOGLE ADS', title: 'YouTube Video Ads', desc: 'Precision audience TrueView & In-Feed placements' },
                { badge: 'GOOGLE ADS', title: 'YouTube Shorts Ads', desc: 'Full-screen vertical mobile video ads' },
                { badge: 'GOOGLE ADS', title: 'Video Action Campaigns', desc: 'Direct-response video driving website sales and leads' },
                { badge: 'GOOGLE ADS', title: 'Demand Gen Campaigns', desc: 'Visual storytelling across Discover, Gmail, and YouTube' },
                { badge: 'GOOGLE ADS', title: 'Display Network (GDN)', desc: 'Banner ads across 3M+ high-authority publisher sites' },
                { badge: 'GOOGLE ADS', title: 'Standard Remarketing', desc: 'Re-engage lost visitors and drive return conversions' },
                { badge: 'GOOGLE ADS', title: 'Dynamic Remarketing', desc: 'Automatically show exact products viewed by users' },
                { badge: 'GOOGLE ADS', title: 'Premium Publisher Placements', desc: 'Elite positioning on premier news and media portals' }
              ]
            },
            {
              categoryName: 'NICHE CAMPAIGN TYPES',
              items: [
                { badge: 'GOOGLE ADS', title: 'Call-Only Ads', desc: 'Direct phone lead generation for high-urgency services' },
                { badge: 'GOOGLE ADS', title: 'Mobile App Promotion', desc: 'Accelerate downloads on App Store & Google Play' },
                { badge: 'GOOGLE ADS', title: 'Lead Form Extensions', desc: 'Capture customer inquiries directly in search results' }
              ]
            }
          ]
        },
        {
          id: 'management-strategy',
          title: 'Google Ads Management & Flat-Fee Strategy',
          subtitle: 'Setup / Account Audit / Transparent Retainer',
          count: 14,
          groups: [
            {
              categoryName: 'ACCOUNT MANAGEMENT',
              items: [
                { badge: 'GOOGLE ADS', title: 'Full-Service Google Ads Retainer', desc: 'Ongoing optimization by an official Google Partner with 17+ yrs exp.' },
                { badge: 'GOOGLE ADS', title: 'Zero-to-Hero Account Setup', desc: 'Best-practice architecture with zero wasted spend' },
                { badge: 'GOOGLE ADS', title: 'Comprehensive Account Audit', desc: 'Identify budget leaks and auction impression share waste' },
                { badge: 'GOOGLE ADS', title: 'Flat-Fee Management Model', desc: 'Predictable fixed fee without percentage-of-spend conflicts' },
                { badge: 'GOOGLE ADS', title: 'Strategic PPC Consulting', desc: 'Executive-level sparring for internal growth teams' }
              ]
            },
            {
              categoryName: 'COST REDUCTION & EFFICIENCY',
              items: [
                { badge: 'GOOGLE ADS', title: 'CPC Cost Reduction', desc: 'Cut cost per click by up to 40% with precision negatives' },
                { badge: 'GOOGLE ADS', title: 'Budget Pacing & Allocation', desc: 'Maximize profit return per euro of ad spend' },
                { badge: 'GOOGLE ADS', title: 'Quality Score Optimization', desc: 'Achieve 10/10 scores to outrank competitors at lower CPCs' },
                { badge: 'GOOGLE ADS', title: 'Click Fraud Protection', desc: 'Block bot networks and competitor click abuse' }
              ]
            },
            {
              categoryName: 'TROUBLESHOOTING & PROTECTION',
              items: [
                { badge: 'GOOGLE ADS', title: 'Policy Disapproval Resolution', desc: 'Overturn false disapprovals and restore paused campaigns' },
                { badge: 'GOOGLE ADS', title: 'Fix Clicks Without Conversions', desc: 'Root-cause analysis to turn traffic into paying clients' },
                { badge: 'GOOGLE ADS', title: 'Brand Defense Strategy', desc: 'Defend your branded terms against competitor hijacking' },
                { badge: 'GOOGLE ADS', title: 'System Error Remediation', desc: 'Resolve complex account warnings and tracking bugs' },
                { badge: 'GOOGLE ADS', title: 'Master Negative Keyword Architecture', desc: 'Multi-level shared lists to preserve ad spend' }
              ]
            }
          ]
        },
        {
          id: 'optimization-services',
          title: 'Advanced Optimization & Smart Bidding',
          subtitle: 'Target ROAS / Creative Testing / Audience Segments',
          count: 12,
          groups: [
            {
              categoryName: 'SMART BIDDING & ROAS',
              items: [
                { badge: 'OPTIMIZATION', title: 'Target ROAS (tROAS) Scaling', desc: 'Predictably scale ad budgets with guaranteed return ratios' },
                { badge: 'OPTIMIZATION', title: 'Target CPA (tCPA) Minimization', desc: 'Drive down cost per acquisition and lead cost' },
                { badge: 'OPTIMIZATION', title: 'Maximize Conversions AI Bidding', desc: 'Deploy machine learning to bid on highest-intent users' },
                { badge: 'OPTIMIZATION', title: 'Conversion Value Rules', desc: 'Bid higher on high-value demographic cohorts' }
              ]
            },
            {
              categoryName: 'AD ASSETS & MULTIVARIATE TESTING',
              items: [
                { badge: 'OPTIMIZATION', title: 'Responsive Search Ad A/B Copy Tests', desc: 'Identify winning emotional hooks and CTR multipliers' },
                { badge: 'OPTIMIZATION', title: 'Sitelinks & Callout Extensions', desc: 'Double your search result visual real estate on mobile' },
                { badge: 'OPTIMIZATION', title: 'Price & Promotion Assets', desc: 'Showcase discounts and price points directly in search' },
                { badge: 'OPTIMIZATION', title: 'Image & Business Logo Verification', desc: 'Build instant consumer trust with verified badges' }
              ]
            },
            {
              categoryName: 'AUDIENCE & GEO TARGETING',
              items: [
                { badge: 'OPTIMIZATION', title: 'Radius & Postal Code Geofencing', desc: 'Pinpoint delivery to profitable territories without waste' },
                { badge: 'OPTIMIZATION', title: 'Ad Scheduling & Dayparting', desc: 'Concentrate ad spend during peak revenue hours' },
                { badge: 'OPTIMIZATION', title: 'Demographic Filtering (Age/Income)', desc: 'Target highest purchasing power customer segments' },
                { badge: 'OPTIMIZATION', title: 'Custom Intent Segments', desc: 'Target users researching direct competitor domains' }
              ]
            }
          ]
        }
      ]
    },

    // META ADS (Facebook & Instagram)
    'meta-ads': {
      tr: [
        {
          id: 'meta-campaign-types',
          title: 'Meta Ads Kampanya & Reklam Formatları',
          subtitle: 'Facebook & Instagram Üzerinden Satış ve Lead Skalalama',
          count: 12,
          groups: [
            {
              categoryName: 'E-TİCARET & DÖNÜŞÜM',
              items: [
                { badge: 'META ADS', title: 'Advantage+ Alışveriş Kampanyaları (ASC)', desc: 'Yapay zeka ile minimum maliyetle maksimum e-ticaret satışı' },
                { badge: 'META ADS', title: 'Dinamik Ürün Reklamları (DPA)', desc: 'Kullanıcının sepette unuttuğu ürünleri tekrar gösterme' },
                { badge: 'META ADS', title: 'Katalog Satış Reklamları', desc: 'Binlerce ürünü otomatik olarak ilgili kitleyle eşleştirme' },
                { badge: 'META ADS', title: 'Koleksiyon & Instant Experience Reklamları', desc: 'Tam ekran hızlı yüklenen mobil vitrin deneyimi' }
              ]
            },
            {
              categoryName: 'VİDEO & REELS FUNNELS',
              items: [
                { badge: 'META ADS', title: 'Instagram Reels Video Reklamları', desc: 'Dikey 9:16 video ile viral izlenme ve doğrudan satın alma' },
                { badge: 'META ADS', title: 'UGC (User Generated Content) Reklamları', desc: 'Kullanıcı deneyim videolarıyla yüksek güven ve ROAS artışı' },
                { badge: 'META ADS', title: 'Story (Hikaye) Dönüşüm Reklamları', desc: 'Kaydırmalı hikaye formatlarıyla hızlı teklif sunumu' },
                { badge: 'META ADS', title: 'Video İzleme & Retargeting Hunisi', desc: 'Videonun %50 sini izleyenleri sıcak kitle olarak hedefleme' }
              ]
            },
            {
              categoryName: 'LEAD & MESAJLAŞMA',
              items: [
                { badge: 'META ADS', title: 'Hızlı Form (Instant Forms) Reklamları', desc: 'Siteye gitmeden Facebook/Instagram içinde form toplama' },
                { badge: 'META ADS', title: 'WhatsApp Doğrudan Mesaj Reklamları', desc: 'Tıklayan müşteriyi anında WhatsApp sohbetine bağlama' },
                { badge: 'META ADS', title: 'Instagram DM Otomasyon Reklamları', desc: 'DM üzerinden otomatik teklif ve randevu oluşturma' },
                { badge: 'META ADS', title: 'Yerel Mağaza Ziyareti Reklamları', desc: 'Fiziksel işletmenize yakın olan kişileri mağazaya çekme' }
              ]
            }
          ]
        },
        {
          id: 'meta-optimization',
          title: 'Meta Optimizasyon & Kreatif Test Motoru',
          subtitle: 'Hook Rate / CAPI Eşleşmesi / Geniş Hedefleme (Broad)',
          count: 10,
          groups: [
            {
              categoryName: 'KREATİF & İÇERİK OPTİMİZASYONU',
              items: [
                { badge: 'OPTIMİZASYON', title: '3 Saniye Kanca (Hook Rate) Testi', desc: 'İlk 3 saniyede izleyiciyi durduran video varyasyonları bulma' },
                { badge: 'OPTIMİZASYON', title: 'Kreatif Yorulma (Ad Fatigue) Takibi', desc: 'Doyuma ulaşan reklamları erken tespit edip yenileme' },
                { badge: 'OPTIMİZASYON', title: 'A/B Görsel ve Metin Deneyleri', desc: 'En yüksek ROAS getiren görsel açıları belirleme' }
              ]
            },
            {
              categoryName: 'TEKNİK TAKİP & CAPI',
              items: [
                { badge: 'OPTIMİZASYON', title: 'Meta Conversions API (CAPI) Entegrasyonu', desc: 'iOS engellerini aşarak %100 kayıpsız satış takibi' },
                { badge: 'OPTIMİZASYON', title: 'Olay Eşleşme Kalitesi (EMQ) Yükseltme', desc: '9.0+ kalite puanı ile algoritmayı en doğru alıcıya eğitme' },
                { badge: 'OPTIMİZASYON', title: 'Sunucu ve Tarayıcı Çiftleme (Deduplication)', desc: 'Aynı siparişin 2 kez sayılmasını önleme' }
              ]
            },
            {
              categoryName: 'KİTLE STRATEJİSİ',
              items: [
                { badge: 'OPTIMİZASYON', title: 'Geniş Hedefleme (Broad Targeting) Mimarisi', desc: 'Algoritmanın en kârlı alıcıyı serbestçe bulmasını sağlama' },
                { badge: 'OPTIMİZASYON', title: 'Benzer Kitleler (Lookalike Audiences)', desc: 'Mevcut en iyi müşterilerinizin ikizlerini bulma' },
                { badge: 'OPTIMİZASYON', title: 'Müşteri Listesi (LTV) Yükleme', desc: 'Yüksek bütçeli eski müşterileri VIP kampanyalarla hedefleme' },
                { badge: 'OPTIMİZASYON', title: 'Alıcı Hariç Tutma (Exclusion Lists)', desc: 'Son 30 günde satın alanlara boşuna para harcamama' }
              ]
            }
          ]
        }
      ],
      de: [
        {
          id: 'meta-campaign-types',
          title: 'Meta Ads Kampagnen & Anzeigenformate',
          subtitle: 'Skalierung von E-Commerce Verkäufen und B2B-Leads auf Facebook & Instagram',
          count: 12,
          groups: [
            {
              categoryName: 'E-COMMERCE & CONVERSIONS',
              items: [
                { badge: 'META ADS', title: 'Advantage+ Shopping Kampagnen (ASC)', desc: 'KI-optimierte E-Commerce Verkaufsförderung mit maximalem ROAS' },
                { badge: 'META ADS', title: 'Dynamische Produktanzeigen (DPA)', desc: 'Automatische Ausspielung von Warenkorbabbrechern' },
                { badge: 'META ADS', title: 'Katalog-Verkaufsanzeigen', desc: 'Tausende Produkte zielgenau für relevante Käufer aussteuern' },
                { badge: 'META ADS', title: 'Collection Ads & Instant Experience', desc: 'Schnell ladende mobile Produktkataloge direkt in der App' }
              ]
            },
            {
              categoryName: 'VIDEO & REELS FUNNELS',
              items: [
                { badge: 'META ADS', title: 'Instagram Reels Video Ads', desc: '9:16 Vollbild-Videoanzeigen für virale Markenreichweite' },
                { badge: 'META ADS', title: 'UGC (User Generated Content) Ads', desc: 'Authentische Kundenvideos für maximale Glaubwürdigkeit' },
                { badge: 'META ADS', title: 'Story Conversion Ads', desc: 'Swipe-Up Anzeigen mit direktem Verkaufsangebot' },
                { badge: 'META ADS', title: 'Video View & Retargeting Funnel', desc: 'Nutzer, die 50%+ geschaut haben, gezielt zum Kauf führen' }
              ]
            },
            {
              categoryName: 'LEAD GENERATION & MESSENGER',
              items: [
                { badge: 'META ADS', title: 'Sofortformulare (Instant Forms)', desc: 'Lead-Erfassung direkt auf Facebook & Instagram ohne Absprung' },
                { badge: 'META ADS', title: 'WhatsApp Direct Ads', desc: 'Kaufinteressenten direkt in den WhatsApp-Chat leiten' },
                { badge: 'META ADS', title: 'Instagram DM Automatisierung', desc: 'Automatisierte Erstberatung und Terminbuchung via Direct Message' },
                { badge: 'META ADS', title: 'Lokale Store-Visits Kampagnen', desc: 'Kunden aus dem direkten Umkreis in Ihr Ladengeschäft führen' }
              ]
            }
          ]
        },
        {
          id: 'meta-optimization',
          title: 'Meta Optimierung & Creative Testing Engine',
          subtitle: 'Hook Rate / CAPI Server-Side / Broad Scaling',
          count: 10,
          groups: [
            {
              categoryName: 'CREATIVE OPTIMIERUNG',
              items: [
                { badge: 'OPTIMIERUNG', title: '3-Sekunden Hook Rate Testing', desc: 'Ermittlung der conversion-stärksten Video-Eröffnungsszenen' },
                { badge: 'OPTIMIERUNG', title: 'Creative Fatigue Überwachung', desc: 'Rechtzeitiges Erkennen und Erneuern gesättigter Werbemittel' },
                { badge: 'OPTIMIERUNG', title: 'Multivariate A/B-Visual-Tests', desc: 'Wissenschaftlicher Vergleich von Farb- und Bildstilen' }
              ]
            },
            {
              categoryName: 'TRACKING & CONVERSIONS API',
              items: [
                { badge: 'OPTIMIERUNG', title: 'Meta Conversions API (CAPI)', desc: 'Server-Side Tracking zur Überwindung von iOS-Tracking-Blockaden' },
                { badge: 'OPTIMIERUNG', title: 'Event Match Quality (EMQ) 9.0+', desc: 'Bessere KI-Algorithmus-Fütterung durch First-Party-Daten' },
                { badge: 'OPTIMIERUNG', title: 'Browser/Server Deduplizierung', desc: 'Verhinderung doppelter Conversion-Zählungen' }
              ]
            },
            {
              categoryName: 'ZIELGRUPPENSTRATEGIE',
              items: [
                { badge: 'OPTIMIERUNG', title: 'Broad Targeting Skalierung', desc: 'Algorithmus-Freiheit für günstigste Akquisitionskosten' },
                { badge: 'OPTIMIERUNG', title: 'Lookalike Audiences (Zwillings-Käufer)', desc: 'Finden neuer Kunden, die Ihren besten Käufern ähneln' },
                { badge: 'OPTIMIERUNG', title: 'Kundenwert (LTV) Listen-Upload', desc: 'Gezielte Ansprache von VIP-Bestandskunden' },
                { badge: 'OPTIMIERUNG', title: 'Ausschlusslisten (Exclusions)', desc: 'Kein Budget für Kunden verschwenden, die bereits gekauft haben' }
              ]
            }
          ]
        }
      ],
      en: [
        {
          id: 'meta-campaign-types',
          title: 'Meta Ads Campaigns & Creative Formats',
          subtitle: 'Direct-Response Scaling Across Facebook & Instagram',
          count: 12,
          groups: [
            {
              categoryName: 'E-COMMERCE & CONVERSIONS',
              items: [
                { badge: 'META ADS', title: 'Advantage+ Shopping Campaigns (ASC)', desc: 'Machine learning automation driving highest return on ad spend' },
                { badge: 'META ADS', title: 'Dynamic Product Ads (DPA)', desc: 'Retarget abandoned cart users with exact matching SKUs' },
                { badge: 'META ADS', title: 'Catalog Sales Advertising', desc: 'Scale thousands of products to predictive buyers dynamically' },
                { badge: 'META ADS', title: 'Instant Experience & Collection Ads', desc: 'Fast-loading, immersive mobile storefront experiences' }
              ]
            },
            {
              categoryName: 'VIDEO & REELS FUNNELS',
              items: [
                { badge: 'META ADS', title: 'Instagram Reels Video Ads', desc: '9:16 vertical video driving viral reach and direct checkout' },
                { badge: 'META ADS', title: 'UGC (User Generated Content) Ads', desc: 'Authentic creator video creative for maximum conversion trust' },
                { badge: 'META ADS', title: 'Story Conversion Campaigns', desc: 'Seamless swipe-up mobile conversion flows' },
                { badge: 'META ADS', title: 'Video Retention & Retargeting Funnel', desc: 'Retarget 50%+ video watchers into high-converting buyers' }
              ]
            },
            {
              categoryName: 'LEAD GENERATION & DIRECT CHAT',
              items: [
                { badge: 'META ADS', title: 'Instant Lead Forms', desc: 'Frictionless lead generation without leaving the Instagram app' },
                { badge: 'META ADS', title: 'Click-to-WhatsApp Direct Ads', desc: 'Connect prospects immediately with your sales agents' },
                { badge: 'META ADS', title: 'Instagram DM Automation', desc: 'Automated consultation and appointment scheduling in DM' },
                { badge: 'META ADS', title: 'Store Foot-Traffic Ads', desc: 'Hyper-local radius advertising to drive physical store visits' }
              ]
            }
          ]
        },
        {
          id: 'meta-optimization',
          title: 'Meta Optimization & Creative Testing Engine',
          subtitle: 'Hook Rates / CAPI Server-Side / Broad Scaling',
          count: 10,
          groups: [
            {
              categoryName: 'CREATIVE OPTIMIZATION',
              items: [
                { badge: 'OPTIMIZATION', title: '3-Second Hook Rate Testing', desc: 'Isolate high-converting video opening hooks systematically' },
                { badge: 'OPTIMIZATION', title: 'Ad Fatigue Detection', desc: 'Proactively refresh creative before performance decays' },
                { badge: 'OPTIMIZATION', title: 'Multivariate A/B Creative Tests', desc: 'Scientific iteration on visual angles and headlines' }
              ]
            },
            {
              categoryName: 'SERVER-SIDE TRACKING & CAPI',
              items: [
                { badge: 'OPTIMIZATION', title: 'Meta Conversions API (CAPI)', desc: 'Bypass browser ad-blockers with direct server data feeds' },
                { badge: 'OPTIMIZATION', title: 'Event Match Quality (EMQ) 9.0+', desc: 'Maximize pixel match rates using advanced hashed parameters' },
                { badge: 'OPTIMIZATION', title: 'Browser/Server Deduplication', desc: 'Eliminate duplicate conversion tracking entirely' }
              ]
            },
            {
              categoryName: 'AUDIENCE ARCHITECTURE',
              items: [
                { badge: 'OPTIMIZATION', title: 'Broad Targeting Scaling', desc: 'Leverage Meta AI to find lowest-CPA buyers without restrictions' },
                { badge: 'OPTIMIZATION', title: 'High-Value Lookalike Audiences', desc: 'Scale lookalikes built from top 10% lifetime-value purchasers' },
                { badge: 'OPTIMIZATION', title: 'LTV First-Party Customer Uploads', desc: 'VIP remarketing and re-engagement campaigns' },
                { badge: 'OPTIMIZATION', title: 'Strict Conversion Exclusion Lists', desc: 'Zero wasted budget on recent customers' }
              ]
            }
          ]
        }
      ]
    }
  }

  const serviceCatalog = modulesCatalog[serviceSlug] ? modulesCatalog[serviceSlug][lang] || modulesCatalog[serviceSlug]['de'] : null

  const [openSections, setOpenSections] = useState({
    'campaign-types': true,
    'management-strategy': true,
    'optimization-services': true,
    'meta-campaign-types': true,
    'meta-optimization': true
  })

  const toggleSection = (id) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  if (!serviceCatalog) {
    return null
  }

  const scrollToContact = (title) => {
    const contactEl = document.getElementById('contact-section')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
      const msgInput = document.querySelector('textarea[name="message"]')
      if (msgInput) {
        msgInput.value = (lang === 'de' ? 'Hallo, ich interessiere mich für folgendes Modul: ' : lang === 'tr' ? 'Merhaba, şu hizmet modülü hakkında bilgi almak istiyorum: ' : 'Hello, I am interested in this service module: ') + title
      }
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/80 border-y border-slate-200/80 relative overflow-hidden">
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: primaryColor }}
      />
      <div 
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border shadow-sm"
            style={{ 
              backgroundColor: primaryColor + '10', 
              color: primaryColor,
              borderColor: primaryColor + '30' 
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'de' ? 'Vollständiges Leistungsverzeichnis' : lang === 'tr' ? 'Kapsamlı Hizmet & Modül Kataloğu' : 'Comprehensive Service & Module Catalog'}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            {lang === 'de' ? (
              <>Alle Module, Kampagnen & <span style={{ color: primaryColor }}>Optimierungsleistungen</span></>
            ) : lang === 'tr' ? (
              <>Tüm Kampanya Türleri & <span style={{ color: primaryColor }}>Optimizasyon Modülleri</span></>
            ) : (
              <>All Campaign Types & <span style={{ color: primaryColor }}>Optimization Modules</span></>
            )}
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {lang === 'de'
              ? 'Wählen Sie das gewünschte Themenfeld aus und entdecken Sie unsere modularen, hochspezialisierten Leistungsbausteine.'
              : lang === 'tr'
              ? 'İhtiyacınız olan modüle tıklayarak açın, uzmanlık alanlarımızın ve kampanya türlerimizin detaylarını inceleyin.'
              : 'Explore our modular, specialized service components and campaign architectures tailored to your goals.'}
          </p>
        </div>

        <div className="space-y-8">
          {serviceCatalog.map((section) => {
            const isOpen = openSections[section.id] !== false

            return (
              <div 
                key={section.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-slate-50/80 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-3.5 h-10 rounded-full transition-all duration-300 group-hover:scale-y-110"
                      style={{ backgroundColor: primaryColor }}
                    />
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-black text-gray-900 group-hover:text-[#4285F4] transition-colors">
                          {section.title}
                        </h3>
                        <span 
                          className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono text-white shadow-sm"
                          style={{ backgroundColor: primaryColor }}
                        >
                          {section.count}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-500 mt-1 font-medium">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 hidden sm:inline">
                      {isOpen ? (lang === 'de' ? 'Einklappen' : lang === 'tr' ? 'Kapat' : 'Collapse') : (lang === 'de' ? 'Details anzeigen' : lang === 'tr' ? 'Detayları Gör' : 'Expand')}
                    </span>
                    <div 
                      className={'w-10 h-10 rounded-2xl flex items-center justify-center border border-slate-200 transition-all duration-300 ' + (isOpen ? 'bg-slate-900 text-white rotate-180' : 'bg-slate-100 text-slate-600')}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="p-6 md:p-8 pt-2 border-t border-slate-100 bg-slate-50/40">
                    <div className="space-y-10">
                      {section.groups.map((group, gIdx) => (
                        <div key={gIdx}>
                          <div className="flex items-center gap-3 mb-5">
                            <div className="h-4 w-1 rounded-full" style={{ backgroundColor: primaryColor }} />
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 font-mono">
                              {group.categoryName}
                            </h4>
                            <span className="text-xs font-bold text-slate-400 font-mono bg-white px-2 py-0.5 rounded-md border border-slate-200">
                              {group.items.length}
                            </span>
                            <div className="h-px bg-slate-200 flex-grow ml-2" />
                          </div>

                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {group.items.map((item, iIdx) => (
                              <div
                                key={iIdx}
                                onClick={() => scrollToContact(item.title)}
                                className="group/item bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                              >
                                <div 
                                  className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                                  style={{ backgroundColor: primaryColor }}
                                />

                                <div>
                                  <span 
                                    className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md inline-block mb-2.5 font-mono"
                                    style={{ 
                                      backgroundColor: primaryColor + '15', 
                                      color: primaryColor 
                                    }}
                                  >
                                    {item.badge}
                                  </span>

                                  <h5 className="text-base font-bold text-gray-900 group-hover/item:text-[#4285F4] transition-colors leading-snug mb-1.5">
                                    {item.title}
                                  </h5>

                                  <p className="text-xs text-slate-500 leading-relaxed">
                                    {item.desc}
                                  </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover/item:text-[#4285F4] transition-colors">
                                  <span>{lang === 'de' ? 'Angebot anfordern' : lang === 'tr' ? 'Teklif İste' : 'Inquire Now'}</span>
                                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/item:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
