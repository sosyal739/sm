'use client'

import React, { useState } from 'react'
import { 
  ChevronDown, Sparkles, ArrowRight, Zap, MapPin, Cpu, ShoppingCart, 
  Search, Play, Flame, Video, Layers, Radio, RefreshCw, Newspaper, 
  PhoneCall, Smartphone, UserCheck, ShieldCheck, DollarSign, Award, 
  ShieldAlert, CheckCircle2, TrendingUp, Target, Sliders, Globe, Clock, Users, BarChart3, Star, Heart, Lock, Database, Code, Activity
} from 'lucide-react'

// Icon mapping helper
const getModuleIcon = (title = '') => {
  const t = title.toLowerCase()
  if (t.includes('search console') || t.includes('console')) return Search
  if (t.includes('analytics') || t.includes('ga4') || t.includes('analitik')) return BarChart3
  if (t.includes('tag manager') || t.includes('gtm') || t.includes('sgtm')) return Code
  if (t.includes('merchant') || t.includes('feed') || t.includes('alışveriş') || t.includes('shopping')) return ShoppingCart
  if (t.includes('consent') || t.includes('gdpr') || t.includes('izin') || t.includes('çerez')) return Lock
  if (t.includes('search') || t.includes('suche')) return Search
  if (t.includes('harita') || t.includes('maps')) return MapPin
  if (t.includes('pmax') || t.includes('performance max')) return Sparkles
  if (t.includes('shorts') || t.includes('reels')) return Flame
  if (t.includes('video') || t.includes('youtube')) return Play
  if (t.includes('demand gen')) return Radio
  if (t.includes('görüntülü') || t.includes('display')) return Layers
  if (t.includes('remarketing') || t.includes('pazarlama') || t.includes('dpa')) return RefreshCw
  if (t.includes('haber') || t.includes('medien')) return Newspaper
  if (t.includes('çağrı') || t.includes('call') || t.includes('anruf')) return PhoneCall
  if (t.includes('mobil') || t.includes('app')) return Smartphone
  if (t.includes('lead') || t.includes('form') || t.includes('sofort')) return UserCheck
  if (t.includes('audit') || t.includes('denetim')) return Activity
  if (t.includes('fixpreis') || t.includes('sabit') || t.includes('pauschale') || t.includes('business manager')) return ShieldCheck
  if (t.includes('maliyet') || t.includes('cpc') || t.includes('preis') || t.includes('kosten')) return DollarSign
  if (t.includes('kalite') || t.includes('quality') || t.includes('score')) return Award
  if (t.includes('fraud') || t.includes('sahtekarlık') || t.includes('betrug') || t.includes('domain')) return ShieldAlert
  if (t.includes('roas') || t.includes('growth')) return TrendingUp
  if (t.includes('cpa') || t.includes('hedef') || t.includes('pixel')) return Target
  if (t.includes('radius') || t.includes('coğrafi') || t.includes('geo')) return Globe
  if (t.includes('saat') || t.includes('zaman') || t.includes('schedule')) return Clock
  if (t.includes('kitle') || t.includes('segment') || t.includes('audience')) return Users
  if (t.includes('ugc')) return Star
  if (t.includes('whatsapp') || t.includes('dm')) return PhoneCall
  if (t.includes('capi') || t.includes('server') || t.includes('tracking') || t.includes('offline') || t.includes('crm')) return Database
  if (t.includes('hook')) return Zap
  if (t.includes('stk') || t.includes('ngo') || t.includes('charity')) return Heart
  return Zap
}

export default function ServiceDetailModules({ serviceSlug, lang = 'de', primaryColor = '#4285F4' }) {
  const modulesCatalog = {
    // REKLAM & TRACKING KURULUM HİZMETLERİ (Google Ads, GA4, Console, GMC, Meta CAPI, sGTM)
    'server-side-tracking': {
      tr: [
        {
          id: 'google-setup',
          title: 'Google Reklam & Analitik Altyapı Kurulumu',
          subtitle: 'Google Ads / GA4 E-Ticaret / Search Console / Merchant Center',
          count: 6,
          themeGradient: 'from-blue-600 via-indigo-600 to-blue-800',
          badgeColor: 'bg-blue-500',
          groups: [
            {
              categoryName: 'GOOGLE ALTYAPI & ÖLÇÜM KURULUMU',
              accentColor: '#4285F4',
              items: [
                { badge: 'GOOGLE ADS', title: 'Sıfırdan Google Ads Hesap Kurulumu', desc: 'Doğru para birimi, faturalandırma, kampanya yapısı ve negatif anahtar kelime mimarisi' },
                { badge: 'GA4 SETUP', title: 'Google Analytics 4 (GA4) E-Ticaret Kurulumu', desc: 'Sepete ekleme, ödeme adımları ve satın alma etkinliklerinin eksiksiz yapılandırılması' },
                { badge: 'SEARCH CONSOLE', title: 'Google Search Console Doğrulama & Sitemap', desc: 'Mülk doğrulama, site haritası gönderimi ve teknik indeksleme kontrolleri' },
                { badge: 'GMC FEED', title: 'Google Merchant Center & Ürün Feed Entegrasyonu', desc: 'Alışveriş reklamları için ürün kataloğu onaylatma ve otomatik feed senkronizasyonu' },
                { badge: 'TAG MANAGER', title: 'Google Tag Manager (GTM) Veri Katmanı', desc: 'Web sitesi koduna dokunmadan esnek etiket ve olay takibi altyapısı' },
                { badge: 'CONSENT MODE', title: 'Google Consent Mode v2 (AB Çerez Uyumu)', desc: 'Avrupa GDPR mevzuatına uygun gelişmiş çerez izin modu ve modelleme' }
              ]
            }
          ]
        },
        {
          id: 'meta-setup',
          title: 'Meta (Facebook & Instagram) Kurulum Paketi',
          subtitle: 'Business Manager / Meta Pixel / CAPI / WhatsApp / Domain',
          count: 5,
          themeGradient: 'from-pink-600 via-rose-600 to-purple-700',
          badgeColor: 'bg-pink-500',
          groups: [
            {
              categoryName: 'META REKLAM & DÖNÜŞÜM ALTYAPISI',
              accentColor: '#EC4899',
              items: [
                { badge: 'BUSINESS MANAGER', title: 'Meta Business Manager & Güvenlik Kurulumu', desc: '2 faktörlü doğrulama, varlık paylaşımı, sayfa ve reklam hesabı mimarisi' },
                { badge: 'META PIXEL', title: 'Meta Pixel & Standart Olay Kurulumu', desc: 'ViewContent, AddToCart, InitiateCheckout ve Purchase olaylarının entegrasyonu' },
                { badge: 'META CAPI', title: 'Meta Conversions API (CAPI) Sunucu Kurulumu', desc: 'iOS reklam engelleyicilerini aşarak %100 kayıpsız sunucu taraflı satış takibi' },
                { badge: 'DOMAIN & AEM', title: 'Domain Doğrulama & Toplu Olay Yapılandırması', desc: 'DNS TXT kaydı ile alan adı onayı ve 8 öncelikli dönüşüm olayının tanımlanması' },
                { badge: 'WHATSAPP & DM', title: 'WhatsApp Business & Instagram DM Satış Hunisi', desc: 'Tıklayan müşteriyi anında WhatsApp ve DM sohbetine bağlayan hızlı dönüşüm altyapısı' }
              ]
            }
          ]
        },
        {
          id: 'advanced-tracking',
          title: 'İleri Seviye Server-Side Tracking & sGTM',
          subtitle: 'Cloud Server / Gelişmiş Eşleme / Çerezsiz Ölçüm',
          count: 5,
          themeGradient: 'from-emerald-600 via-teal-600 to-emerald-800',
          badgeColor: 'bg-emerald-500',
          groups: [
            {
              categoryName: 'SUNUCU TARAFLI ÖLÇÜM & BÜYÜK VERİ',
              accentColor: '#10B981',
              items: [
                { badge: 'SERVER GTM', title: 'Server-Side Google Tag Manager (sGTM) Kurulumu', desc: 'Google Cloud / Stape sunucuları üzerinde 1. taraf çerez (first-party data) altyapısı' },
                { badge: 'ENHANCED CONV.', title: 'Google Gelişmiş Dönüşümler (Enhanced Conversions)', desc: 'Şifreli müşteri verisi (SHA256) ile Google Ads teklif yapay zekasını maksimuma çıkarma' },
                { badge: 'OFFLINE TRACKING', title: 'Offline Dönüşüm (OCT) & CRM Entegrasyonu', desc: 'Telefonla veya mağazada gerçekleşen satışların reklam paneline otomatik aktarılması' },
                { badge: 'EVENT MATCH', title: 'Olay Eşleşme Kalitesi (EMQ 9.0+) Optimizasyonu', desc: 'Meta ve Google panellerinde 9.0+ kalite puanı ile en doğru alıcıyı hedefleme' },
                { badge: 'TIKTOK & PINTEREST', title: 'TikTok Events API & Pinterest CAPI Kurulumu', desc: 'Tüm sosyal medya kanalları için eksiksiz sunucu taraflı dönüşüm beslemesi' }
              ]
            }
          ]
        }
      ],
      de: [
        {
          id: 'google-setup',
          title: 'Google Ads & Analytics Infrastruktur-Setup',
          subtitle: 'Google Ads / GA4 E-Commerce / Search Console / Merchant Center',
          count: 6,
          themeGradient: 'from-blue-600 via-indigo-600 to-blue-800',
          badgeColor: 'bg-blue-500',
          groups: [
            {
              categoryName: 'GOOGLE SETUP & MESS-INFRASTRUKTUR',
              accentColor: '#4285F4',
              items: [
                { badge: 'GOOGLE ADS', title: 'Neuanlage & Strukturierung des Google Ads Kontos', desc: 'Optimale Kontenarchitektur, Abrechnungseinrichtung und Master-Ausschlusslisten' },
                { badge: 'GA4 SETUP', title: 'Google Analytics 4 (GA4) E-Commerce Tracking', desc: 'Vollständige Erfassung von Warenkorb-, Checkout- und Transaktions-Events' },
                { badge: 'SEARCH CONSOLE', title: 'Google Search Console Verifizierung & Sitemap', desc: 'Inhaberschaftsbestätigung, XML-Sitemap-Einreichung und Indexierungsüberwachung' },
                { badge: 'GMC FEED', title: 'Google Merchant Center & Produkt-Feed Integration', desc: 'Freischaltung von Shopping-Anzeigen und automatischer Produktdatenabgleich' },
                { badge: 'TAG MANAGER', title: 'Google Tag Manager (GTM) DataLayer Setup', desc: 'Saubere Ereigniserfassung ohne manuelle Eingriffe in den Quellcode' },
                { badge: 'CONSENT MODE', title: 'Google Consent Mode v2 (DSGVO & EU-Konform)', desc: 'Rechtssichere Einwilligungserfassung und KI-gestützte Conversion-Modellierung' }
              ]
            }
          ]
        },
        {
          id: 'meta-setup',
          title: 'Meta (Facebook & Instagram) Setup-Paket',
          subtitle: 'Business Manager / Meta Pixel / CAPI / WhatsApp / Domain',
          count: 5,
          themeGradient: 'from-pink-600 via-rose-600 to-purple-700',
          badgeColor: 'bg-pink-500',
          groups: [
            {
              categoryName: 'META SETUP & CONVERSION-INFRASTRUKTUR',
              accentColor: '#EC4899',
              items: [
                { badge: 'BUSINESS MANAGER', title: 'Meta Business Manager & Sicherheits-Setup', desc: '2-Faktor-Authentifizierung, Rechtestruktur, Seiten- und Kontoverknüpfungen' },
                { badge: 'META PIXEL', title: 'Meta Pixel & Standard-Event-Implementierung', desc: 'Lückenlose Integration von ViewContent, AddToCart, Lead und Purchase' },
                { badge: 'META CAPI', title: 'Meta Conversions API (CAPI) Server-Side Tracking', desc: '100% verlässliche Messung zur Überwindung von iOS-Werbeblockern' },
                { badge: 'DOMAIN & AEM', title: 'Domain-Verifizierung & Event-Konfiguration', desc: 'DNS-Verifizierung und Priorisierung der 8 wichtigsten Conversion-Ereignisse' },
                { badge: 'WHATSAPP & DM', title: 'WhatsApp Business & Instagram DM Funnel-Setup', desc: 'Direkter Chat-Einstieg für schnelle Kundenberatung und Lead-Abschlüsse' }
              ]
            }
          ]
        },
        {
          id: 'advanced-tracking',
          title: 'Advanced Server-Side Tracking & sGTM',
          subtitle: 'Cloud Server / Enhanced Conversions / CRM Tracking',
          count: 5,
          themeGradient: 'from-emerald-600 via-teal-600 to-emerald-800',
          badgeColor: 'bg-emerald-500',
          groups: [
            {
              categoryName: 'SERVER-SIDE MESSUNG & DATENQUALITÄT',
              accentColor: '#10B981',
              items: [
                { badge: 'SERVER GTM', title: 'Server-Side Google Tag Manager (sGTM) Setup', desc: 'First-Party Server-Infrastruktur auf Google Cloud oder Stape' },
                { badge: 'ENHANCED CONV.', title: 'Google Enhanced Conversions (Erweiterte Conversions)', desc: 'Verschlüsselte Kundendaten (SHA256) für maximale Smart-Bidding-Präzision' },
                { badge: 'OFFLINE TRACKING', title: 'Offline Conversion Tracking (OCT) & CRM-Anbindung', desc: 'Rückführung von Offline- und Telefonverkäufen in die Werbekonten' },
                { badge: 'EVENT MATCH', title: 'Event Match Quality (EMQ 9.0+) Optimierung', desc: 'Erreichen von Spitzenwerten (9.0+) für optimale Algorithmus-Fütterung' },
                { badge: 'TIKTOK & PINTEREST', title: 'TikTok Events API & Pinterest CAPI Setup', desc: 'Ganzheitliche Server-Side Abdeckung für alle aktiven Social-Kanäle' }
              ]
            }
          ]
        }
      ],
      en: [
        {
          id: 'google-setup',
          title: 'Google Ads & Analytics Infrastructure Setup',
          subtitle: 'Google Ads / GA4 E-Commerce / Search Console / Merchant Center',
          count: 6,
          themeGradient: 'from-blue-600 via-indigo-600 to-blue-800',
          badgeColor: 'bg-blue-500',
          groups: [
            {
              categoryName: 'GOOGLE SETUP & MEASUREMENT STACK',
              accentColor: '#4285F4',
              items: [
                { badge: 'GOOGLE ADS', title: 'Zero-to-Hero Google Ads Account Setup', desc: 'Proper currency, billing, best-practice structure, and master negative keyword lists' },
                { badge: 'GA4 SETUP', title: 'Google Analytics 4 (GA4) E-Commerce Tracking', desc: 'Complete tracking for add_to_cart, begin_checkout, and purchase transactions' },
                { badge: 'SEARCH CONSOLE', title: 'Google Search Console Verification & Sitemap', desc: 'Domain ownership validation, XML sitemap indexing, and coverage monitoring' },
                { badge: 'GMC FEED', title: 'Google Merchant Center & Product Feed Integration', desc: 'Product catalog approval for Shopping ads with automated sync' },
                { badge: 'TAG MANAGER', title: 'Google Tag Manager (GTM) DataLayer Setup', desc: 'Agile tag management without constant source code modifications' },
                { badge: 'CONSENT MODE', title: 'Google Consent Mode v2 (GDPR Compliant)', desc: 'Compliant consent handling with machine-learning conversion modeling' }
              ]
            }
          ]
        },
        {
          id: 'meta-setup',
          title: 'Meta (Facebook & Instagram) Setup Package',
          subtitle: 'Business Manager / Meta Pixel / CAPI / WhatsApp / Domain',
          count: 5,
          themeGradient: 'from-pink-600 via-rose-600 to-purple-700',
          badgeColor: 'bg-pink-500',
          groups: [
            {
              categoryName: 'META ADVERTISING & CONVERSION STACK',
              accentColor: '#EC4899',
              items: [
                { badge: 'BUSINESS MANAGER', title: 'Meta Business Manager & Security Setup', desc: '2FA security, asset permissions, page, and ad account architecture' },
                { badge: 'META PIXEL', title: 'Meta Pixel & Standard Event Deployment', desc: 'Full event tracking for ViewContent, AddToCart, Lead, and Purchase' },
                { badge: 'META CAPI', title: 'Meta Conversions API (CAPI) Server-Side Setup', desc: '100% loss-free server-side conversion tracking bypassing iOS blockers' },
                { badge: 'DOMAIN & AEM', title: 'Domain Verification & Event Configuration', desc: 'DNS TXT record validation and prioritization of 8 primary events' },
                { badge: 'WHATSAPP & DM', title: 'WhatsApp Business & Instagram DM Sales Funnel', desc: 'Direct-to-chat messaging funnels for immediate consultation and sales' }
              ]
            }
          ]
        },
        {
          id: 'advanced-tracking',
          title: 'Advanced Server-Side Tracking & sGTM',
          subtitle: 'Cloud Server / Enhanced Conversions / CRM Tracking',
          count: 5,
          themeGradient: 'from-emerald-600 via-teal-600 to-emerald-800',
          badgeColor: 'bg-emerald-500',
          groups: [
            {
              categoryName: 'SERVER-SIDE MEASUREMENT & DATA QUALITY',
              accentColor: '#10B981',
              items: [
                { badge: 'SERVER GTM', title: 'Server-Side Google Tag Manager (sGTM) Setup', desc: 'First-party server tracking infrastructure deployed on Google Cloud or Stape' },
                { badge: 'ENHANCED CONV.', title: 'Google Enhanced Conversions Configuration', desc: 'Hashed customer data (SHA256) maximizing AI Smart Bidding profitability' },
                { badge: 'OFFLINE TRACKING', title: 'Offline Conversion Tracking (OCT) & CRM Sync', desc: 'Feed phone and CRM offline sales back into ad auction bidding engines' },
                { badge: 'EVENT MATCH', title: 'Event Match Quality (EMQ 9.0+) Optimization', desc: 'Achieve 9.0+ match scores for optimal machine learning algorithms' },
                { badge: 'TIKTOK & PINTEREST', title: 'TikTok Events API & Pinterest CAPI Setup', desc: 'Complete server-side tracking coverage across all active ad networks' }
              ]
            }
          ]
        }
      ]
    },

    // GOOGLE ADS
    'google-ads': {
      tr: [
        {
          id: 'campaign-types',
          title: 'Google Ads Kampanya Türleri',
          subtitle: 'Kampanya Türü Seçimi ve Profesyonel Yönetimi',
          count: 17,
          themeGradient: 'from-blue-600 via-indigo-600 to-blue-800',
          badgeColor: 'bg-blue-500',
          groups: [
            {
              categoryName: 'ARAMA & ALIŞVERİŞ MODÜLLERİ',
              accentColor: '#4285F4',
              items: [
                { badge: 'SEARCH ADS', title: 'Google Search Reklamları', desc: 'Satın alma niyetli aramalarda 1. sırada yer alma' },
                { badge: 'LOCAL MAPS', title: 'Google Harita Reklamları', desc: 'Yerel aramalarda rota ve arama çağrısı alma' },
                { badge: 'AI OMNICHANNEL', title: 'Performance Max (PMax)', desc: 'Tüm Google ağında yapay zeka ile otomatik dönüşüm' },
                { badge: 'E-COMMERCE', title: 'Google Alışveriş Reklamları', desc: 'E-ticaret ürün vitrini ve Merchant Center entegrasyonu' },
                { badge: 'DYNAMIC SEARCH', title: 'Dinamik Arama Ağı Reklamları', desc: 'Site içeriğine göre otomatik anahtar kelime eşleşmesi' },
                { badge: 'RESPONSIVE', title: 'Duyarlı Arama Reklamları (RSA)', desc: '15 başlık ve 4 açıklama ile dinamik A/B optimizasyonu' }
              ]
            },
            {
              categoryName: 'VİDEO, SHORTS & GÖRÜNTÜLÜ',
              accentColor: '#EA4335',
              items: [
                { badge: 'YOUTUBE ADS', title: 'YouTube TrueView Reklamları', desc: 'Hedef kitleye özel video tanıtımı ve kanal büyütme' },
                { badge: 'YOUTUBE SHORTS', title: 'YouTube Shorts Reklamları', desc: 'Dikey tam ekran video ile genç kitleye doğrudan erişim' },
                { badge: 'DIRECT ACTION', title: 'Video Action Campaigns', desc: 'Video izleyenleri anında web sitesine ve satışa yönlendirme' },
                { badge: 'DEMAND GEN', title: 'Demand Gen Reklamları', desc: 'Gmail, Discover ve YouTube akışında görsel etki yaratma' },
                { badge: 'DISPLAY NETWORK', title: 'Görüntülü Reklam Yönetimi (GDN)', desc: 'Milyonlarca web sitesinde görsel banner gösterimi' },
                { badge: 'RETARGETING', title: 'Yeniden Pazarlama (Remarketing)', desc: 'Siteyi ziyaret edip ayrılanları geri getiren hatırlatma reklamları' },
                { badge: 'DYNAMIC RETARGET', title: 'Dinamik Yeniden Pazarlama', desc: 'Kullanıcının incelediği spesifik ürünleri tekrar gösterme' },
                { badge: 'PREMIUM MEDIA', title: 'Haber Sitesi & Premium Yerleşimler', desc: 'Saygın haber sitelerinde prestijli marka konumlandırması' }
              ]
            },
            {
              categoryName: 'NİŞ & ÖZEL KAMPANYALAR',
              accentColor: '#34A853',
              items: [
                { badge: 'CALL-ONLY', title: 'Çağrı Odaklı Reklamlar (Call Ads)', desc: 'Doğrudan telefon araması üreten mobil reklamlar' },
                { badge: 'APP PROMOTION', title: 'Mobil Uygulama Reklamları', desc: 'App Store ve Google Play indirme sayısı artırma' },
                { badge: 'LEAD FORMS', title: 'Lead Generation Form Reklamları', desc: 'Kullanıcı siteden çıkmadan form toplama' }
              ]
            }
          ]
        },
        {
          id: 'management-strategy',
          title: 'Google Reklam Yönetimi & Strateji',
          subtitle: 'Kurulum / Optimizasyon / Sabit Fiyat Yönetimi',
          count: 14,
          themeGradient: 'from-emerald-600 via-teal-600 to-emerald-800',
          badgeColor: 'bg-emerald-500',
          groups: [
            {
              categoryName: 'HESAP YÖNETİMİ & MİMARİ',
              accentColor: '#10B981',
              items: [
                { badge: 'FULL SERVICE', title: 'Google Ads Profesyonel Yönetimi', desc: '17+ yıllık uzmanlıkla sürekli günlük optimizasyon' },
                { badge: 'NEW SETUP', title: 'Sıfırdan Google Ads Kurulumu', desc: 'Kusursuz hesap mimarisi ve ilk kampanya lansmanı' },
                { badge: 'ACCOUNT AUDIT', title: 'Google Ads Hesap Denetimi (Audit)', desc: 'Mevcut hesaplardaki para kaçaklarını tespit eden derin analiz' },
                { badge: 'FIXPREIS RETAINER', title: 'Sabit Fiyatlı (Fixpreis) Yönetim', desc: 'Sürpriz komisyon olmadan net aylık sabit yönetim ücreti' },
                { badge: 'EXECUTIVE CONSULT', title: 'Google Reklam Danışmanlığı', desc: 'Birebir strateji geliştirme ve hesap koçluğu' }
              ]
            },
            {
              categoryName: 'FİYATLANDIRMA & MALİYET DÜŞÜRME',
              accentColor: '#F59E0B',
              items: [
                { badge: 'CPC REDUCTION', title: 'Tıklama Başı Maliyet (CPC) Düşürme', desc: 'Gereksiz tıklamaları engelleyerek maliyetleri %40 düşürme' },
                { badge: 'BUDGET PACING', title: 'Bütçe & Harcama Optimizasyonu', desc: 'Her harcanan 1 Eurodan maksimum dönüşüm alma' },
                { badge: 'QUALITY SCORE', title: 'Kalite Puanı (Quality Score) Yükseltme', desc: '10/10 kalite puanı ile rakiplerden daha ucuza üstte çıkma' },
                { badge: 'CLICK FRAUD', title: 'Tıklama Sahtekarlığı Koruması', desc: 'Bot ve rakip sahte tıklamalarını engelleme' }
              ]
            },
            {
              categoryName: 'SORUN GİDERME & KORUMA',
              accentColor: '#EF4444',
              items: [
                { badge: 'POLICY RECOVERY', title: 'Reklam Onaylatma & İtiraz', desc: 'Reddedilen veya askıya alınan reklamları onaylatma' },
                { badge: 'CONVERSION FIX', title: 'Reklam Var Müşteri Yok Çözümü', desc: 'Trafik gelip satış olmama problemini kökten çözme' },
                { badge: 'BRAND DEFENSE', title: 'Rakip Marka Koruması', desc: 'Marka adınıza reklam veren rakiplere karşı savunma' },
                { badge: 'SYSTEM ERRORS', title: 'Google Ads Hata Kodları Çözümü', desc: 'Hesaptaki teknik politika ve uyarıların giderilmesi' },
                { badge: 'NEGATIVE LISTS', title: 'Negatif Anahtar Kelime Mimarisi', desc: 'Alakasız kelimeleri listeleyerek bütçeyi koruma' }
              ]
            }
          ]
        },
        {
          id: 'optimization-services',
          title: 'Optimizasyon & İleri Seviye Araçlar',
          subtitle: 'Teklif Stratejisi / Akıllı Hedefleme / Dönüşüm Testleri',
          count: 12,
          themeGradient: 'from-purple-600 via-pink-600 to-purple-800',
          badgeColor: 'bg-purple-500',
          groups: [
            {
              categoryName: 'AKILLI TEKLİF & ROAS',
              accentColor: '#8B5CF6',
              items: [
                { badge: 'SMART BIDDING', title: 'Hedef ROAS (tROAS) Skalalama', desc: 'Belirlenen kârlılık oranında bütçeyi güvenle büyütme' },
                { badge: 'CPA CONTROL', title: 'Hedef CPA (tCPA) Optimizasyonu', desc: 'Müşteri kazanım maliyetini minimuma indirme' },
                { badge: 'MAX CONVERSIONS', title: 'Dönüşümleri En Üst Düzeye Çıkarma', desc: 'Yapay zekanın en yüksek dönüşüm getiren anlara teklif vermesi' },
                { badge: 'VALUE RULES', title: 'Dönüşüm Değeri Kuralları', desc: 'Yüksek değerli müşteri segmentlerine daha yüksek teklif' }
              ]
            },
            {
              categoryName: 'METİN & VARLIK OPTİMİZASYONU',
              accentColor: '#EC4899',
              items: [
                { badge: 'A/B TESTING', title: 'Duyarlı Reklam A/B Metin Testi', desc: 'En yüksek tıklama oranına sahip başlık varyasyonlarını bulma' },
                { badge: 'EXTENSIONS', title: 'Site Bağlantısı & Açıklama Uzantıları', desc: 'Reklamın ekranda kapladığı alanı 2 katına çıkarma' },
                { badge: 'PROMOTION', title: 'Fiyat & Promosyon Uzantıları', desc: 'İndirim ve kampanyaları arama sonucunda doğrudan gösterme' },
                { badge: 'VISUAL ASSETS', title: 'Görsel & Logo Varlık Optimizasyonu', desc: 'Resmi logo ve yüksek kaliteli görsellerle marka güveni' }
              ]
            },
            {
              categoryName: 'HEDEF KİTLE & COĞRAFYA',
              accentColor: '#3B82F6',
              items: [
                { badge: 'GEO RADIUS', title: 'Coğrafi Yarıçap & Şehir Hedeflemesi', desc: 'Sadece hizmet verdiğiniz posta kodu ve şehirlere reklam verme' },
                { badge: 'DAYPARTING', title: 'Cihaz & Saat Dilimi Teklif Ayarları', desc: 'En çok satış getiren gün ve saatlere bütçe ayırma' },
                { badge: 'DEMOGRAPHICS', title: 'Demografik Yaş & Gelir Filtreleme', desc: 'Doğru alım gücüne sahip kitleye odaklanma' },
                { badge: 'CUSTOM INTENT', title: 'Özel Segmentler (Custom Segments)', desc: 'Rakiplerinizi arayan veya ilgili siteleri gezenleri hedefleme' }
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
          themeGradient: 'from-blue-600 via-indigo-600 to-blue-800',
          badgeColor: 'bg-blue-500',
          groups: [
            {
              categoryName: 'SUCHE & SHOPPING FORMATE',
              accentColor: '#4285F4',
              items: [
                { badge: 'SEARCH ADS', title: 'Google Suchanzeigen (Search)', desc: 'Platz 1 bei kaufbereiten Suchanfragen sichern' },
                { badge: 'LOCAL MAPS', title: 'Google Maps Lokalanzeigen', desc: 'Lokale Kunden über Google Maps und Routenplaner gewinnen' },
                { badge: 'AI OMNICHANNEL', title: 'Performance Max (PMax)', desc: 'KI-gesteuerte Omnichannel-Kampagnen über alle Google-Netzwerke' },
                { badge: 'E-COMMERCE', title: 'Google Shopping Kampagnen', desc: 'E-Commerce Produktanzeigen mit Merchant Center Anbindung' },
                { badge: 'DYNAMIC SEARCH', title: 'Dynamische Suchanzeigen (DSA)', desc: 'Automatische Keyword-Erkennung basierend auf Website-Inhalten' },
                { badge: 'RESPONSIVE', title: 'Responsive Suchanzeigen (RSA)', desc: 'Dynamische A/B-Tests aus 15 Titeln und 4 Beschreibungen' }
              ]
            },
            {
              categoryName: 'VIDEO, SHORTS & DISPLAY',
              accentColor: '#EA4335',
              items: [
                { badge: 'YOUTUBE ADS', title: 'YouTube Video Ads', desc: 'Zielgruppenpräzise TrueView & In-Feed Markenplatzierung' },
                { badge: 'YOUTUBE SHORTS', title: 'YouTube Shorts Ads', desc: 'Vertikale Vollbild-Videoanzeigen für maximale mobile Reichweite' },
                { badge: 'DIRECT ACTION', title: 'Video Action Campaigns', desc: 'Zuschauer direkt zu Webseiten-Käufen und Leads konvertieren' },
                { badge: 'DEMAND GEN', title: 'Demand Gen Kampagnen', desc: 'Visuelle Markenwirkung in Gmail, Discover und YouTube Feeds' },
                { badge: 'DISPLAY NETWORK', title: 'Google Display Netzwerk (GDN)', desc: 'Bannerwerbung auf über 3 Millionen Partner-Websites' },
                { badge: 'RETARGETING', title: 'Klassisches Remarketing', desc: 'Website-Besucher gezielt wieder ansprechen und zurückholen' },
                { badge: 'DYNAMIC RETARGET', title: 'Dynamisches Remarketing', desc: 'Zuvor angesehene Produkte automatisch erneut einblenden' },
                { badge: 'PREMIUM MEDIA', title: 'Premium-Medienplatzierungen', desc: 'Gezielte Ausspielung auf führenden Nachrichten- und Fachportalen' }
              ]
            },
            {
              categoryName: 'SPEZIAL- & NORMKAMPAGNEN',
              accentColor: '#34A853',
              items: [
                { badge: 'CALL-ONLY', title: 'Call-Only Anrufkampagnen', desc: 'Direkte Telefonanrufe für Handwerker, Ärzte und Dienstleister' },
                { badge: 'APP PROMOTION', title: 'App-Installationskampagnen', desc: 'Mehr Downloads im App Store und Google Play Store' },
                { badge: 'LEAD FORMS', title: 'Lead-Formular-Erweiterungen', desc: 'Kundenanfragen direkt in den Google-Suchergebnissen erfassen' }
              ]
            }
          ]
        },
        {
          id: 'management-strategy',
          title: 'Google Ads Betreuung & Strategie',
          subtitle: 'Setup / Audit / Fixpreis-Verwaltung',
          count: 14,
          themeGradient: 'from-emerald-600 via-teal-600 to-emerald-800',
          badgeColor: 'bg-emerald-500',
          groups: [
            {
              categoryName: 'KONTOBETREUUNG & SETUP',
              accentColor: '#10B981',
              items: [
                { badge: 'FULL SERVICE', title: 'Full-Service Google Ads Betreuung', desc: 'Laufende Optimierung direkt vom zertifizierten Google Partner' },
                { badge: 'NEW SETUP', title: 'Neuanlage & Strukturierung', desc: 'Erstklassige Kontenarchitektur und sauberer Kampagnenstart' },
                { badge: 'ACCOUNT AUDIT', title: 'Google Ads Konto-Audit', desc: 'Detaillierte Fehleranalyse zur Beseitigung von Budgetverschwendung' },
                { badge: 'FIXPREIS RETAINER', title: 'Transparente Fixpreis-Betreuung', desc: 'Feste Monatspauschale ohne prozentuale Budget-Provision' },
                { badge: 'EXECUTIVE CONSULT', title: 'Strategische Beratung & Coaching', desc: 'Individuelle Sparringspartner-Begleitung für Ihr Marketingteam' }
              ]
            },
            {
              categoryName: 'KOSTENREDUKTION & EFFIZIENZ',
              accentColor: '#F59E0B',
              items: [
                { badge: 'CPC REDUCTION', title: 'Klickpreis (CPC) Reduktion', desc: 'Kostensenkung um bis zu 40% durch Ausschluss irrelevanter Klicks' },
                { badge: 'BUDGET PACING', title: 'Budget- & Effizienzoptimierung', desc: 'Maximaler Ertrag aus jedem investierten Werbeeuro' },
                { badge: 'QUALITY SCORE', title: 'Qualitätsfaktor Steigerung', desc: 'Günstigere Klicks und Top-Positionen durch 10/10 Relevanz' },
                { badge: 'CLICK FRAUD', title: 'Klickbetrug-Schutz (Click Fraud)', desc: 'Ausschluss von Bot-Netzwerken und unfairen Konkurrenzklicks' }
              ]
            },
            {
              categoryName: 'PROBLEMLÖSUNG & SCHUTZ',
              accentColor: '#EF4444',
              items: [
                { badge: 'POLICY RECOVERY', title: 'Ablehnungen & Richtlinien-Freigabe', desc: 'Reaktivierung und Freigabe abgelehnter Werbeanzeigen' },
                { badge: 'CONVERSION FIX', title: 'Klicks ohne Verkäufe beheben', desc: 'Ursachenforschung und Conversion-Optimierung' },
                { badge: 'BRAND DEFENSE', title: 'Markenschutz (Brand Protection)', desc: 'Verteidigung gegen Wettbewerber, die auf Ihren Namen werben' },
                { badge: 'SYSTEM ERRORS', title: 'Google Fehlercode-Behebung', desc: 'Beseitigung aller Systemwarnungen im Werbekonto' },
                { badge: 'NEGATIVE LISTS', title: 'Negative Keyword Architektur', desc: 'Umfassende Ausschlusslisten für 100% qualifizierten Traffic' }
              ]
            }
          ]
        },
        {
          id: 'optimization-services',
          title: 'Optimierung & Advanced Features',
          subtitle: 'Smart Bidding / Zielgruppen / A/B Testing',
          count: 12,
          themeGradient: 'from-purple-600 via-pink-600 to-purple-800',
          badgeColor: 'bg-purple-500',
          groups: [
            {
              categoryName: 'SMART BIDDING & ROAS',
              accentColor: '#8B5CF6',
              items: [
                { badge: 'SMART BIDDING', title: 'Ziel-ROAS (tROAS) Skalierung', desc: 'Skalieren von Werbeausgaben bei garantierter Rentabilität' },
                { badge: 'CPA CONTROL', title: 'Ziel-CPA (tCPA) Optimierung', desc: 'Minimierung der Kosten pro Lead und Kundenanfrage' },
                { badge: 'MAX CONVERSIONS', title: 'Conversions maximieren', desc: 'Intelligente KI-Gebote für kaufkräftige Nutzer' },
                { badge: 'VALUE RULES', title: 'Conversion-Wert-Regeln', desc: 'Höhere Gebote für wertvollere Kundengruppen' }
              ]
            },
            {
              categoryName: 'TEXTE & ASSETS',
              accentColor: '#EC4899',
              items: [
                { badge: 'A/B TESTING', title: 'Responsive Anzeigentexte A/B-Tests', desc: 'Ermittlung der conversion-stärksten Formulierungsvarianten' },
                { badge: 'EXTENSIONS', title: 'Sitelinks & Zusatzinformationen', desc: 'Verdoppelung der sichtbaren Werbefläche auf mobilen Geräten' },
                { badge: 'PROMOTION', title: 'Preis- & Aktionserweiterungen', desc: 'Rabatte und Konditionen direkt im Suchergebnis hervorheben' },
                { badge: 'VISUAL ASSETS', title: 'Logo- & Bilderweiterungen', desc: 'Visuelles Vertrauen durch verifizierte Marken-Assets' }
              ]
            },
            {
              categoryName: 'ZIELGRUPPEN & GEOTARGETING',
              accentColor: '#3B82F6',
              items: [
                { badge: 'GEO RADIUS', title: 'Radius- & Postleitzahlen-Targeting', desc: 'Exakte regionale Aussteuerung ohne Streuverluste' },
                { badge: 'DAYPARTING', title: 'Werbezeitenplaner & Wochentage', desc: 'Fokussierung auf umsatzstarke Geschäftszeiten' },
                { badge: 'DEMOGRAPHICS', title: 'Demografische Filter', desc: 'Zielgerichtete Ansprache der zahlungskräftigsten Zielgruppe' },
                { badge: 'CUSTOM INTENT', title: 'Benutzerdefinierte Segmente', desc: 'Targeting von Nutzern, die Wettbewerber-Websites besuchen' }
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
          themeGradient: 'from-blue-600 via-indigo-600 to-blue-800',
          badgeColor: 'bg-blue-500',
          groups: [
            {
              categoryName: 'SEARCH & SHOPPING FORMATS',
              accentColor: '#4285F4',
              items: [
                { badge: 'SEARCH ADS', title: 'Google Search Ads', desc: 'Rank #1 on high-intent buyer searches' },
                { badge: 'LOCAL MAPS', title: 'Google Maps Local Ads', desc: 'Drive local foot traffic and customer calls' },
                { badge: 'AI OMNICHANNEL', title: 'Performance Max (PMax)', desc: 'AI-driven full-funnel scaling across all Google channels' },
                { badge: 'E-COMMERCE', title: 'Google Shopping Ads', desc: 'E-commerce product visual ads with Merchant Center' },
                { badge: 'DYNAMIC SEARCH', title: 'Dynamic Search Ads (DSA)', desc: 'Automated search targeting mapped to site content' },
                { badge: 'RESPONSIVE', title: 'Responsive Search Ads (RSA)', desc: 'Continuous machine learning multivariate copy tests' }
              ]
            },
            {
              categoryName: 'VIDEO, SHORTS & DISPLAY',
              accentColor: '#EA4335',
              items: [
                { badge: 'YOUTUBE ADS', title: 'YouTube Video Ads', desc: 'Precision audience TrueView & In-Feed placements' },
                { badge: 'YOUTUBE SHORTS', title: 'YouTube Shorts Ads', desc: 'Full-screen vertical mobile video ads' },
                { badge: 'DIRECT ACTION', title: 'Video Action Campaigns', desc: 'Direct-response video driving website sales and leads' },
                { badge: 'DEMAND GEN', title: 'Demand Gen Campaigns', desc: 'Visual storytelling across Discover, Gmail, and YouTube' },
                { badge: 'DISPLAY NETWORK', title: 'Display Network (GDN)', desc: 'Banner ads across 3M+ high-authority publisher sites' },
                { badge: 'RETARGETING', title: 'Standard Remarketing', desc: 'Re-engage lost visitors and drive return conversions' },
                { badge: 'DYNAMIC RETARGET', title: 'Dynamic Remarketing', desc: 'Automatically show exact products viewed by users' },
                { badge: 'PREMIUM MEDIA', title: 'Premium Publisher Placements', desc: 'Elite positioning on premier news and media portals' }
              ]
            },
            {
              categoryName: 'NICHE CAMPAIGN TYPES',
              accentColor: '#34A853',
              items: [
                { badge: 'CALL-ONLY', title: 'Call-Only Ads', desc: 'Direct phone lead generation for high-urgency services' },
                { badge: 'APP PROMOTION', title: 'Mobile App Promotion', desc: 'Accelerate downloads on App Store & Google Play' },
                { badge: 'LEAD FORMS', title: 'Lead Form Extensions', desc: 'Capture customer inquiries directly in search results' }
              ]
            }
          ]
        },
        {
          id: 'management-strategy',
          title: 'Google Ads Management & Strategy',
          subtitle: 'Setup / Account Audit / Flat-Fee Model',
          count: 14,
          themeGradient: 'from-emerald-600 via-teal-600 to-emerald-800',
          badgeColor: 'bg-emerald-500',
          groups: [
            {
              categoryName: 'ACCOUNT MANAGEMENT & SETUP',
              accentColor: '#10B981',
              items: [
                { badge: 'FULL SERVICE', title: 'Full-Service Google Ads Retainer', desc: 'Ongoing optimization by an official Google Partner with 17+ yrs exp.' },
                { badge: 'NEW SETUP', title: 'Zero-to-Hero Account Setup', desc: 'Best-practice architecture with zero wasted spend' },
                { badge: 'ACCOUNT AUDIT', title: 'Comprehensive Account Audit', desc: 'Identify budget leaks and auction impression share waste' },
                { badge: 'FIXPREIS RETAINER', title: 'Flat-Fee Management Model', desc: 'Predictable fixed fee without percentage-of-spend conflicts' },
                { badge: 'EXECUTIVE CONSULT', title: 'Strategic PPC Consulting', desc: 'Executive-level sparring for internal growth teams' }
              ]
            },
            {
              categoryName: 'COST REDUCTION & EFFICIENCY',
              accentColor: '#F59E0B',
              items: [
                { badge: 'CPC REDUCTION', title: 'CPC Cost Reduction', desc: 'Cut cost per click by up to 40% with precision negatives' },
                { badge: 'BUDGET PACING', title: 'Budget Pacing & Allocation', desc: 'Maximize profit return per euro of ad spend' },
                { badge: 'QUALITY SCORE', title: 'Quality Score Optimization', desc: 'Achieve 10/10 scores to outrank competitors at lower CPCs' },
                { badge: 'CLICK FRAUD', title: 'Click Fraud Protection', desc: 'Block bot networks and competitor click abuse' }
              ]
            },
            {
              categoryName: 'TROUBLESHOOTING & PROTECTION',
              accentColor: '#EF4444',
              items: [
                { badge: 'POLICY RECOVERY', title: 'Policy Disapproval Resolution', desc: 'Overturn false disapprovals and restore paused campaigns' },
                { badge: 'CONVERSION FIX', title: 'Fix Clicks Without Conversions', desc: 'Root-cause analysis to turn traffic into paying clients' },
                { badge: 'BRAND DEFENSE', title: 'Brand Defense Strategy', desc: 'Defend your branded terms against competitor hijacking' },
                { badge: 'SYSTEM ERRORS', title: 'System Error Remediation', desc: 'Resolve complex account warnings and tracking bugs' },
                { badge: 'NEGATIVE LISTS', title: 'Master Negative Keyword Architecture', desc: 'Multi-level shared lists to preserve ad spend' }
              ]
            }
          ]
        },
        {
          id: 'optimization-services',
          title: 'Advanced Optimization & Smart Bidding',
          subtitle: 'Target ROAS / Creative Testing / Audience Segments',
          count: 12,
          themeGradient: 'from-purple-600 via-pink-600 to-purple-800',
          badgeColor: 'bg-purple-500',
          groups: [
            {
              categoryName: 'SMART BIDDING & ROAS',
              accentColor: '#8B5CF6',
              items: [
                { badge: 'SMART BIDDING', title: 'Target ROAS (tROAS) Scaling', desc: 'Predictably scale ad budgets with guaranteed return ratios' },
                { badge: 'CPA CONTROL', title: 'Target CPA (tCPA) Minimization', desc: 'Drive down cost per acquisition and lead cost' },
                { badge: 'MAX CONVERSIONS', title: 'Maximize Conversions AI Bidding', desc: 'Deploy machine learning to bid on highest-intent users' },
                { badge: 'VALUE RULES', title: 'Conversion Value Rules', desc: 'Bid higher on high-value demographic cohorts' }
              ]
            },
            {
              categoryName: 'AD ASSETS & TESTING',
              accentColor: '#EC4899',
              items: [
                { badge: 'A/B TESTING', title: 'Responsive Search Ad A/B Copy Tests', desc: 'Identify winning emotional hooks and CTR multipliers' },
                { badge: 'EXTENSIONS', title: 'Sitelinks & Callout Extensions', desc: 'Double your search result visual real estate on mobile' },
                { badge: 'PROMOTION', title: 'Price & Promotion Assets', desc: 'Showcase discounts and price points directly in search' },
                { badge: 'VISUAL ASSETS', title: 'Image & Business Logo Verification', desc: 'Build instant consumer trust with verified badges' }
              ]
            },
            {
              categoryName: 'AUDIENCE & GEO TARGETING',
              accentColor: '#3B82F6',
              items: [
                { badge: 'GEO RADIUS', title: 'Radius & Postal Code Geofencing', desc: 'Pinpoint delivery to profitable territories without waste' },
                { badge: 'DAYPARTING', title: 'Ad Scheduling & Dayparting', desc: 'Concentrate ad spend during peak revenue hours' },
                { badge: 'DEMOGRAPHICS', title: 'Demographic Filtering', desc: 'Target highest purchasing power customer segments' },
                { badge: 'CUSTOM INTENT', title: 'Custom Intent Segments', desc: 'Target users researching direct competitor domains' }
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
          themeGradient: 'from-pink-600 via-rose-600 to-purple-700',
          badgeColor: 'bg-pink-500',
          groups: [
            {
              categoryName: 'E-TİCARET & DÖNÜŞÜM',
              accentColor: '#EC4899',
              items: [
                { badge: 'ADVANTAGE+', title: 'Advantage+ Alışveriş Kampanyaları (ASC)', desc: 'Yapay zeka ile minimum maliyetle maksimum e-ticaret satışı' },
                { badge: 'DYNAMIC ADS', title: 'Dinamik Ürün Reklamları (DPA)', desc: 'Kullanıcının sepette unuttuğu ürünleri tekrar gösterme' },
                { badge: 'CATALOG SALES', title: 'Katalog Satış Reklamları', desc: 'Binlerce ürünü otomatik olarak ilgili kitleyle eşleştirme' },
                { badge: 'COLLECTION', title: 'Koleksiyon & Instant Experience', desc: 'Tam ekran hızlı yüklenen mobil vitrin deneyimi' }
              ]
            },
            {
              categoryName: 'VİDEO & REELS FUNNELS',
              accentColor: '#8B5CF6',
              items: [
                { badge: 'REELS ADS', title: 'Instagram Reels Video Reklamları', desc: 'Dikey 9:16 video ile viral izlenme ve doğrudan satın alma' },
                { badge: 'UGC VIDEO', title: 'UGC (User Generated Content) Reklamları', desc: 'Kullanıcı deneyim videolarıyla yüksek güven ve ROAS artışı' },
                { badge: 'STORY ADS', title: 'Story (Hikaye) Dönüşüm Reklamları', desc: 'Kaydırmalı hikaye formatlarıyla hızlı teklif sunumu' },
                { badge: 'RETARGETING', title: 'Video İzleme & Retargeting Hunisi', desc: 'Videonun %50 sini izleyenleri sıcak kitle olarak hedefleme' }
              ]
            },
            {
              categoryName: 'LEAD & MESAJLAŞMA',
              accentColor: '#10B981',
              items: [
                { badge: 'INSTANT FORMS', title: 'Hızlı Form (Instant Forms) Reklamları', desc: 'Siteye gitmeden Facebook/Instagram içinde form toplama' },
                { badge: 'WHATSAPP ADS', title: 'WhatsApp Doğrudan Mesaj Reklamları', desc: 'Tıklayan müşteriyi anında WhatsApp sohbetine bağlama' },
                { badge: 'INSTAGRAM DM', title: 'Instagram DM Otomasyon Reklamları', desc: 'DM üzerinden otomatik teklif ve randevu oluşturma' },
                { badge: 'STORE VISITS', title: 'Yerel Mağaza Ziyareti Reklamları', desc: 'Fiziksel işletmenize yakın olan kişileri mağazaya çekme' }
              ]
            }
          ]
        },
        {
          id: 'meta-optimization',
          title: 'Meta Optimizasyon & Kreatif Test Motoru',
          subtitle: 'Hook Rate / CAPI Eşleşmesi / Geniş Hedefleme (Broad)',
          count: 10,
          themeGradient: 'from-purple-600 via-indigo-600 to-blue-700',
          badgeColor: 'bg-purple-500',
          groups: [
            {
              categoryName: 'KREATİF & İÇERİK OPTİMİZASYONU',
              accentColor: '#F43F5E',
              items: [
                { badge: 'HOOK RATE', title: '3 Saniye Kanca (Hook Rate) Testi', desc: 'İlk 3 saniyede izleyiciyi durduran video varyasyonları bulma' },
                { badge: 'FATIGUE ALERT', title: 'Kreatif Yorulma (Ad Fatigue) Takibi', desc: 'Doyuma ulaşan reklamları erken tespit edip yenileme' },
                { badge: 'MULTIVARIATE', title: 'A/B Görsel ve Metin Deneyleri', desc: 'En yüksek ROAS getiren görsel açıları belirleme' }
              ]
            },
            {
              categoryName: 'TEKNİK TAKİP & CAPI',
              accentColor: '#3B82F6',
              items: [
                { badge: 'META CAPI', title: 'Meta Conversions API Entegrasyonu', desc: 'iOS engellerini aşarak %100 kayıpsız satış takibi' },
                { badge: 'MATCH QUALITY', title: 'Olay Eşleşme Kalitesi (EMQ 9.0+)', desc: '9.0+ kalite puanı ile algoritmayı en doğru alıcıya eğitme' },
                { badge: 'DEDUPLICATION', title: 'Sunucu ve Tarayıcı Çiftleme', desc: 'Aynı siparişin 2 kez sayılmasını önleme' }
              ]
            },
            {
              categoryName: 'KİTLE STRATEJİSİ',
              accentColor: '#10B981',
              items: [
                { badge: 'BROAD TARGET', title: 'Geniş Hedefleme (Broad) Mimarisi', desc: 'Algoritmanın en kârlı alıcıyı serbestçe bulmasını sağlama' },
                { badge: 'LOOKALIKE', title: 'Benzer Kitleler (Lookalike Audiences)', desc: 'Mevcut en iyi müşterilerinizin ikizlerini bulma' },
                { badge: 'LTV UPLOAD', title: 'Müşteri Listesi (LTV) Yükleme', desc: 'Yüksek bütçeli eski müşterileri VIP kampanyalarla hedefleme' },
                { badge: 'EXCLUSIONS', title: 'Alıcı Hariç Tutma (Exclusion Lists)', desc: 'Son 30 günde satın alanlara boşuna para harcamama' }
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
          themeGradient: 'from-pink-600 via-rose-600 to-purple-700',
          badgeColor: 'bg-pink-500',
          groups: [
            {
              categoryName: 'E-COMMERCE & CONVERSIONS',
              accentColor: '#EC4899',
              items: [
                { badge: 'ADVANTAGE+', title: 'Advantage+ Shopping Kampagnen (ASC)', desc: 'KI-optimierte E-Commerce Verkaufsförderung mit maximalem ROAS' },
                { badge: 'DYNAMIC ADS', title: 'Dynamische Produktanzeigen (DPA)', desc: 'Automatische Ausspielung von Warenkorbabbrechern' },
                { badge: 'CATALOG SALES', title: 'Katalog-Verkaufsanzeigen', desc: 'Tausende Produkte zielgenau für relevante Käufer aussteuern' },
                { badge: 'COLLECTION', title: 'Collection Ads & Instant Experience', desc: 'Schnell ladende mobile Produktkataloge direkt in der App' }
              ]
            },
            {
              categoryName: 'VIDEO & REELS FUNNELS',
              accentColor: '#8B5CF6',
              items: [
                { badge: 'REELS ADS', title: 'Instagram Reels Video Ads', desc: '9:16 Vollbild-Videoanzeigen für virale Markenreichweite' },
                { badge: 'UGC VIDEO', title: 'UGC (User Generated Content) Ads', desc: 'Authentische Kundenvideos für maximale Glaubwürdigkeit' },
                { badge: 'STORY ADS', title: 'Story Conversion Ads', desc: 'Swipe-Up Anzeigen mit direktem Verkaufsangebot' },
                { badge: 'RETARGETING', title: 'Video View & Retargeting Funnel', desc: 'Nutzer, die 50%+ geschaut haben, gezielt zum Kauf führen' }
              ]
            },
            {
              categoryName: 'LEAD GENERATION & MESSENGER',
              accentColor: '#10B981',
              items: [
                { badge: 'INSTANT FORMS', title: 'Sofortformulare (Instant Forms)', desc: 'Lead-Erfassung direkt auf Facebook & Instagram ohne Absprung' },
                { badge: 'WHATSAPP ADS', title: 'WhatsApp Direct Ads', desc: 'Kaufinteressenten direkt in den WhatsApp-Chat leiten' },
                { badge: 'INSTAGRAM DM', title: 'Instagram DM Automatisierung', desc: 'Automatisierte Erstberatung und Terminbuchung via Direct Message' },
                { badge: 'STORE VISITS', title: 'Lokale Store-Visits Kampagnen', desc: 'Kunden aus dem direkten Umkreis in Ihr Ladengeschäft führen' }
              ]
            }
          ]
        },
        {
          id: 'meta-optimization',
          title: 'Meta Optimierung & Creative Testing Engine',
          subtitle: 'Hook Rate / CAPI Server-Side / Broad Scaling',
          count: 10,
          themeGradient: 'from-purple-600 via-indigo-600 to-blue-700',
          badgeColor: 'bg-purple-500',
          groups: [
            {
              categoryName: 'CREATIVE OPTIMIERUNG',
              accentColor: '#F43F5E',
              items: [
                { badge: 'HOOK RATE', title: '3-Sekunden Hook Rate Testing', desc: 'Ermittlung der conversion-stärksten Video-Eröffnungsszenen' },
                { badge: 'FATIGUE ALERT', title: 'Creative Fatigue Überwachung', desc: 'Rechtzeitiges Erkennen und Erneuern gesättigter Werbemittel' },
                { badge: 'MULTIVARIATE', title: 'Multivariate A/B-Visual-Tests', desc: 'Wissenschaftlicher Vergleich von Farb- und Bildstilen' }
              ]
            },
            {
              categoryName: 'TRACKING & CONVERSIONS API',
              accentColor: '#3B82F6',
              items: [
                { badge: 'META CAPI', title: 'Meta Conversions API (CAPI)', desc: 'Server-Side Tracking zur Überwindung von iOS-Tracking-Blockaden' },
                { badge: 'MATCH QUALITY', title: 'Event Match Quality (EMQ 9.0+)', desc: 'Bessere KI-Algorithmus-Fütterung durch First-Party-Daten' },
                { badge: 'DEDUPLICATION', title: 'Browser/Server Deduplizierung', desc: 'Verhinderung doppelter Conversion-Zählungen' }
              ]
            },
            {
              categoryName: 'ZIELGRUPPENSTRATEGIE',
              accentColor: '#10B981',
              items: [
                { badge: 'BROAD TARGET', title: 'Broad Targeting Skalierung', desc: 'Algorithmus-Freiheit für günstigste Akquisitionskosten' },
                { badge: 'LOOKALIKE', title: 'Lookalike Audiences', desc: 'Finden neuer Kunden, die Ihren besten Käufern ähneln' },
                { badge: 'LTV UPLOAD', title: 'Kundenwert (LTV) Listen-Upload', desc: 'Gezielte Ansprache von VIP-Bestandskunden' },
                { badge: 'EXCLUSIONS', title: 'Ausschlusslisten (Exclusions)', desc: 'Kein Budget für Kunden verschwenden, die bereits gekauft haben' }
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
          themeGradient: 'from-pink-600 via-rose-600 to-purple-700',
          badgeColor: 'bg-pink-500',
          groups: [
            {
              categoryName: 'E-COMMERCE & CONVERSIONS',
              accentColor: '#EC4899',
              items: [
                { badge: 'ADVANTAGE+', title: 'Advantage+ Shopping Campaigns (ASC)', desc: 'Machine learning automation driving highest return on ad spend' },
                { badge: 'DYNAMIC ADS', title: 'Dynamic Product Ads (DPA)', desc: 'Retarget abandoned cart users with exact matching SKUs' },
                { badge: 'CATALOG SALES', title: 'Catalog Sales Advertising', desc: 'Scale thousands of products to predictive buyers dynamically' },
                { badge: 'COLLECTION', title: 'Instant Experience & Collection Ads', desc: 'Fast-loading, immersive mobile storefront experiences' }
              ]
            },
            {
              categoryName: 'VIDEO & REELS FUNNELS',
              accentColor: '#8B5CF6',
              items: [
                { badge: 'REELS ADS', title: 'Instagram Reels Video Ads', desc: '9:16 vertical video driving viral reach and direct checkout' },
                { badge: 'UGC VIDEO', title: 'UGC (User Generated Content) Ads', desc: 'Authentic creator video creative for maximum conversion trust' },
                { badge: 'STORY ADS', title: 'Story Conversion Campaigns', desc: 'Seamless swipe-up mobile conversion flows' },
                { badge: 'RETARGETING', title: 'Video Retention & Retargeting Funnel', desc: 'Retarget 50%+ video watchers into high-converting buyers' }
              ]
            },
            {
              categoryName: 'LEAD GENERATION & DIRECT CHAT',
              accentColor: '#10B981',
              items: [
                { badge: 'INSTANT FORMS', title: 'Instant Lead Forms', desc: 'Frictionless lead generation without leaving the Instagram app' },
                { badge: 'WHATSAPP ADS', title: 'Click-to-WhatsApp Direct Ads', desc: 'Connect prospects immediately with your sales agents' },
                { badge: 'INSTAGRAM DM', title: 'Instagram DM Automation', desc: 'Automated consultation and appointment scheduling in DM' },
                { badge: 'STORE VISITS', title: 'Store Foot-Traffic Ads', desc: 'Hyper-local radius advertising to drive physical store visits' }
              ]
            }
          ]
        },
        {
          id: 'meta-optimization',
          title: 'Meta Optimization & Creative Testing Engine',
          subtitle: 'Hook Rates / CAPI Server-Side / Broad Scaling',
          count: 10,
          themeGradient: 'from-purple-600 via-indigo-600 to-blue-700',
          badgeColor: 'bg-purple-500',
          groups: [
            {
              categoryName: 'CREATIVE OPTIMIZATION',
              accentColor: '#F43F5E',
              items: [
                { badge: 'HOOK RATE', title: '3-Second Hook Rate Testing', desc: 'Isolate high-converting video opening hooks systematically' },
                { badge: 'FATIGUE ALERT', title: 'Ad Fatigue Detection', desc: 'Proactively refresh creative before performance decays' },
                { badge: 'MULTIVARIATE', title: 'Multivariate A/B Creative Tests', desc: 'Scientific iteration on visual angles and headlines' }
              ]
            },
            {
              categoryName: 'SERVER-SIDE TRACKING & CAPI',
              accentColor: '#3B82F6',
              items: [
                { badge: 'META CAPI', title: 'Meta Conversions API (CAPI)', desc: 'Bypass browser ad-blockers with direct server data feeds' },
                { badge: 'MATCH QUALITY', title: 'Event Match Quality (EMQ 9.0+)', desc: 'Maximize pixel match rates using advanced hashed parameters' },
                { badge: 'DEDUPLICATION', title: 'Browser/Server Deduplication', desc: 'Eliminate duplicate conversion tracking entirely' }
              ]
            },
            {
              categoryName: 'AUDIENCE ARCHITECTURE',
              accentColor: '#10B981',
              items: [
                { badge: 'BROAD TARGET', title: 'Broad Targeting Scaling', desc: 'Leverage Meta AI to find lowest-CPA buyers without restrictions' },
                { badge: 'LOOKALIKE', title: 'High-Value Lookalike Audiences', desc: 'Scale lookalikes built from top 10% lifetime-value purchasers' },
                { badge: 'LTV UPLOAD', title: 'LTV First-Party Customer Uploads', desc: 'VIP remarketing and re-engagement campaigns' },
                { badge: 'EXCLUSIONS', title: 'Strict Conversion Exclusion Lists', desc: 'Zero wasted budget on recent customers' }
              ]
            }
          ]
        }
      ]
    }
  }

  const serviceCatalog = modulesCatalog[serviceSlug] ? modulesCatalog[serviceSlug][lang] || modulesCatalog[serviceSlug]['de'] : null

  const [openSections, setOpenSections] = useState({
    'google-setup': true,
    'meta-setup': true,
    'advanced-tracking': true,
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
        msgInput.value = (lang === 'de' ? 'Hallo, ich interessiere mich für folgendes Modul: ' : lang === 'tr' ? 'Merhaba, şu kurulum / hizmet modülü hakkında bilgi almak istiyorum: ' : 'Hello, I am interested in this setup / service module: ') + title
      }
    }
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Background Neon Light Orbs */}
      <div 
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 pointer-events-none animate-pulse"
        style={{ backgroundColor: primaryColor }}
      />
      <div 
        className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none animate-pulse"
        style={{ backgroundColor: '#8B5CF6' }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header with Neon Accent */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-5 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-blue-500/10 text-white">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">
              {lang === 'de' ? 'Interaktives Leistungs- & Setup-Verzeichnis 2026' : lang === 'tr' ? 'İnteraktif Reklam, Setup & Modül Kataloğu' : '2026 Interactive Setup & Module Directory'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            {lang === 'de' ? (
              <>Modulare Kampagnen & <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Setup-Leistungen</span></>
            ) : lang === 'tr' ? (
              <>Tüm Reklam Altyapı & <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Kurulum Modülleri</span></>
            ) : (
              <>Ad Infrastructure & <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Setup Modules</span></>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {lang === 'de'
              ? 'Klicken Sie auf die Kategorien, um alle spezialisierten Setup-Bausteine, Tracking-Systeme und Kampagnenformate im Detail zu erkunden.'
              : lang === 'tr'
              ? 'Aşağıdaki renkli bölümlere tıklayarak tüm reklam hesabı, GA4, Search Console, CAPI ve sunucu takip kurulum detaylarını inceleyin.'
              : 'Click on each category to explore detailed ad account setups, GA4 tracking, CAPI integrations, and advanced optimization workflows.'}
          </p>
        </div>

        {/* Collapsible Accordion Sections with Glowing Gradient Borders */}
        <div className="space-y-8">
          {serviceCatalog.map((section) => {
            const isOpen = openSections[section.id] !== false

            return (
              <div 
                key={section.id}
                className="bg-slate-900/90 backdrop-blur-xl rounded-[2.5rem] border border-slate-700/80 shadow-2xl hover:border-slate-600 transition-all duration-300 overflow-hidden"
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  className={`w-full p-6 sm:p-8 flex items-center justify-between text-left transition-all duration-300 group cursor-pointer ${
                    isOpen ? 'bg-gradient-to-r ' + (section.themeGradient || 'from-blue-900/60 to-slate-900/60') : 'hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-amber-300" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors">
                          {section.title}
                        </h3>
                        <span className={"px-3 py-1 rounded-full text-xs font-black font-mono text-white shadow-lg " + (section.badgeColor || 'bg-blue-500')}>
                          {section.count} {lang === 'de' ? 'Module' : lang === 'tr' ? 'Modül' : 'Modules'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-300 hidden md:inline">
                      {isOpen ? (lang === 'de' ? 'Einklappen' : lang === 'tr' ? 'Kapat' : 'Collapse') : (lang === 'de' ? 'Details anzeigen' : lang === 'tr' ? 'Aç & İncele' : 'Expand')}
                    </span>
                    <div 
                      className={'w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300 ' + (isOpen ? 'bg-white text-slate-900 border-white rotate-180 shadow-lg shadow-white/20' : 'bg-white/10 text-white border-white/20 group-hover:bg-white/20')}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Accordion Content Body (Colorful Glowing Cards Grid) */}
                {isOpen && (
                  <div className="p-6 sm:p-8 pt-4 border-t border-slate-800 bg-slate-950/70">
                    <div className="space-y-12">
                      {section.groups.map((group, gIdx) => (
                        <div key={gIdx}>
                          {/* Group Sub-Heading */}
                          <div className="flex items-center gap-3 mb-6">
                            <span 
                              className="px-3.5 py-1 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-md"
                              style={{ backgroundColor: group.accentColor }}
                            >
                              {group.categoryName}
                            </span>
                            <span className="text-xs font-bold font-mono text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-800">
                              {group.items.length}
                            </span>
                            <div className="h-px bg-gradient-to-r from-slate-700 to-transparent flex-grow ml-2" />
                          </div>

                          {/* Items Grid (Lively Dynamic Cards) */}
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                            {group.items.map((item, iIdx) => {
                              const IconComponent = getModuleIcon(item.title)

                              return (
                                <div
                                  key={iIdx}
                                  onClick={() => scrollToContact(item.title)}
                                  className="group/item relative bg-gradient-to-b from-slate-800/90 via-slate-900/90 to-slate-950/90 hover:from-slate-800 hover:to-slate-900 p-6 rounded-3xl border border-slate-700/70 hover:border-cyan-400/80 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
                                >
                                  {/* Top Ambient Glow Line */}
                                  <div 
                                    className="absolute top-0 left-0 right-0 h-1 opacity-40 group-hover/item:opacity-100 group-hover/item:h-1.5 transition-all duration-300"
                                    style={{ backgroundColor: group.accentColor }}
                                  />

                                  <div>
                                    {/* Icon & Badge Header */}
                                    <div className="flex items-center justify-between mb-4">
                                      <div 
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md group-hover/item:scale-110 transition-transform duration-200"
                                        style={{ backgroundColor: group.accentColor }}
                                      >
                                        <IconComponent className="w-5 h-5" />
                                      </div>

                                      <span 
                                        className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border font-mono transition-all duration-200"
                                        style={{ 
                                          backgroundColor: group.accentColor + '20', 
                                          color: group.accentColor,
                                          borderColor: group.accentColor + '40'
                                        }}
                                      >
                                        {item.badge}
                                      </span>
                                    </div>

                                    {/* Title */}
                                    <h5 className="text-base sm:text-lg font-bold text-white group-hover/item:text-cyan-300 transition-colors leading-snug mb-2">
                                      {item.title}
                                    </h5>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-slate-400 group-hover/item:text-slate-300 leading-relaxed">
                                      {item.desc}
                                    </p>
                                  </div>

                                  {/* Bottom Action Link */}
                                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-400 group-hover/item:text-cyan-400 transition-colors">
                                    <span className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                      <span>{lang === 'de' ? 'Setup anfragen' : lang === 'tr' ? 'Kurulum İste' : 'Inquire Setup'}</span>
                                    </span>
                                    <div className="w-7 h-7 rounded-lg bg-white/5 group-hover/item:bg-cyan-500 group-hover/item:text-slate-950 flex items-center justify-center transition-all duration-200">
                                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/item:translate-x-0.5 transition-transform" />
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
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
