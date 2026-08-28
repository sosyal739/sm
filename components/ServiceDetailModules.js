'use client'

import React, { useState } from 'react'
import { 
  ChevronDown, Sparkles, ArrowRight, Zap, MapPin, Cpu, ShoppingCart, 
  Search, Play, Flame, Video, Layers, Radio, RefreshCw, Newspaper, 
  PhoneCall, Smartphone, UserCheck, ShieldCheck, DollarSign, Award, 
  ShieldAlert, CheckCircle2, TrendingUp, Target, Sliders, Globe, Clock, Users, BarChart3, Star, Heart, Lock, Database, Code, Activity, Building2, CheckSquare, FileCheck, QrCode, Store, ShieldX, Wrench
} from 'lucide-react'

// Icon mapping helper
const getModuleIcon = (title = '') => {
  const t = title.toLowerCase()
  if (t.includes('qr') || t.includes('nfc') || t.includes('yorum')) return QrCode
  if (t.includes('mağaza') || t.includes('shop') || t.includes('katalog')) return Store
  if (t.includes('kurtarma') || t.includes('kısıtlama') || t.includes('sperre') || t.includes('reaktivierung') || t.includes('recovery')) return ShieldAlert
  if (t.includes('business profile') || t.includes('işletme profili') || t.includes('unternehmensprofil') || t.includes('şube')) return Building2
  if (t.includes('harita') || t.includes('maps') || t.includes('standort') || t.includes('pin')) return MapPin
  if (t.includes('doğrulama') || t.includes('verifizierung') || t.includes('verification') || t.includes('kimlik') || t.includes('identität')) return FileCheck
  if (t.includes('search console') || t.includes('console')) return Search
  if (t.includes('analytics') || t.includes('ga4') || t.includes('analitik')) return BarChart3
  if (t.includes('tag manager') || t.includes('gtm') || t.includes('sgtm') || t.includes('datalayer')) return Code
  if (t.includes('merchant') || t.includes('feed') || t.includes('alışveriş') || t.includes('shopping')) return ShoppingCart
  if (t.includes('consent') || t.includes('gdpr') || t.includes('izin') || t.includes('çerez') || t.includes('cookieless')) return Lock
  if (t.includes('search') || t.includes('suche')) return Search
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
  if (t.includes('kitle') || t.includes('segment') || t.includes('audience') || t.includes('lookalike')) return Users
  if (t.includes('ugc')) return Star
  if (t.includes('whatsapp') || t.includes('dm')) return PhoneCall
  if (t.includes('capi') || t.includes('server') || t.includes('tracking') || t.includes('offline') || t.includes('crm') || t.includes('cloud')) return Database
  if (t.includes('hook')) return Zap
  if (t.includes('stk') || t.includes('ngo') || t.includes('charity')) return Heart
  return Zap
}

export default function ServiceDetailModules({ serviceSlug, lang = 'de', primaryColor = '#4285F4' }) {
  const modulesCatalog = {
    // YOUTUBE ADS & VIDEO MARKETING HİZMETLERİ
    'youtube-ads': {
      tr: [
        {
          id: 'youtube-formats',
          title: 'YouTube Reklam Formatları & Shorts Mimarisi',
          subtitle: 'Shorts Ads / TrueView In-Stream / In-Feed Discovery / Bumper Ads (6s)',
          count: 8,
          themeGradient: 'from-red-600 via-rose-600 to-red-800',
          badgeColor: 'bg-red-500',
          groups: [
            {
              categoryName: 'YOUTUBE REKLAM FORMATLARI & YAYIN MODELİ',
              accentColor: '#FF0000',
              items: [
                { badge: 'SHORTS ADS', title: 'YouTube Shorts Dikey Video Reklamları', desc: 'Tam ekran dikey video deneyimi ve 24 Ağustos anında görüntüleme algoritması ile maksimum mobil etkileşim' },
                { badge: 'IN-STREAM', title: 'TrueView Atlanabilir Video Reklamları (Skippable)', desc: '30 saniye izleme veya tıklama başına ücretlendirme modeliyle sıfır bütçe israfı' },
                { badge: 'DISCOVERY', title: 'In-Feed Keşfet Video Reklamları', desc: 'YouTube arama sonuçları ve ilgili video önerilerinde en üstte yer alarak gerçek abone kazanımı' },
                { badge: 'BUMPER ADS', title: '6 Saniyelik Atlanamayan Bumper Reklamlar', desc: 'Marka hatırlanırlığını zirveye taşıyan düşük maliyetli yüksek erişim formatı' },
                { badge: 'DEMAND GEN', title: 'YouTube Demand Gen Yapay Zeka Video Kampanyaları', desc: 'Shorts, Gmail ve Keşfet alanlarında yapay zeka ile en doğru müşterilere video gösterimi' },
                { badge: 'YERLEŞİM FİLTRESİ', title: 'Negatif Kanal & Çocuk Kanalı Filtreleme', desc: 'Çocuk kanalları ve kalitesiz siteleri hariç tutarak bütçeyi sadece gerçek izleyicilere harcama' },
                { badge: 'KANCA KURGUSU', title: 'İlk 5 Saniye Kanca (Hook) Optimizasyonu', desc: 'Atla butonuna basılmasını önleyen, izleyiciyi videoda tutan kreatif senaryo kurgusu' },
                { badge: 'CPV OPTİMİZASYON', title: '0.01€ Hedefli İzleme Başı Maliyet (CPV) Yönetimi', desc: 'Teklif algoritmalarını optimize ederek minimum bütçe ile maksimum gerçek izlenme üretimi' }
              ]
            }
          ]
        },
        {
          id: 'youtube-artist-brand',
          title: 'Sanatçı, Klip Tanıtımı & E-Ticaret Video Büyümesi',
          subtitle: 'Müzik Klipleri / Şarkı Lansmanı / Trendler / Video Remarketing / Abone Kazanımı',
          count: 8,
          themeGradient: 'from-amber-600 via-red-600 to-amber-800',
          badgeColor: 'bg-amber-500',
          groups: [
            {
              categoryName: 'SANATÇI, KLİP TANITIMI & DÖNÜŞÜM HUNİSİ',
              accentColor: '#F59E0B',
              items: [
                { badge: 'KLİP LANSMANI', title: 'Yeni Şarkı & Müzik Klibi Lansman Kampanyası', desc: 'Klibin ilk 48 saatinde yüksek izlenme ivmesi yaratarak YouTube trendlerine girme desteği' },
                { badge: 'TÜR HEDEFLEME', title: 'Müzik Türü & Benzer Sanatçı Hedeflemesi', desc: 'Pop, Rap, Rock, Arabesk veya Etnik müzik dinleyicilerini nokta atışı hedefleme' },
                { badge: 'ÜLKE VE ŞEHİR', title: 'Almanya, Türkiye & Global Bölgesel Yayın', desc: 'Hedeflenen gurbetçi kitleye, Türkiye geneline veya Avrupa metropollerine özel video yayını' },
                { badge: 'SPOTIFY PUSH', title: 'Spotify & Apple Music Dinlenme Yönlendirmesi', desc: 'YouTube video izleyicilerini dijital müzik platformlarındaki şarkıya yönlendiren CTA kurgusu' },
                { badge: 'ABONE HUNİSİ', title: 'Kanal Abone Sayısını Organik Katlama', desc: 'Videoyu beğenen ve sonuna kadar izleyen kullanıcıları kanal abonesine dönüştürme' },
                { badge: 'REMARKETING', title: 'Video İzleyicilerini Web Sitesine Çekme (Remarketing)', desc: 'Videoları izleyen sıcak kitleye web sitenizden ürün veya hizmet satışı yaptırma' },
                { badge: 'CANLI YAYIN', title: 'YouTube Canlı Yayın & Prömiyer Reklamları', desc: 'Yeni video prömiyerlerine ve canlı konserlere anlık binlerce izleyici toplama' },
                { badge: 'ANALİTİK RAPOR', title: 'YouTube Studio & Google Ads Şeffaf Raporlama', desc: 'İzleyici tutma grafikleri, kitle demografisi ve gerçek etkileşim raporları' }
              ]
            }
          ]
        }
      ],
      de: [
        {
          id: 'youtube-formats',
          title: 'YouTube Werbeformate & Shorts Architektur',
          subtitle: 'Shorts Ads / TrueView In-Stream / In-Feed Discovery / Bumper Ads (6s)',
          count: 8,
          themeGradient: 'from-red-600 via-rose-600 to-red-800',
          badgeColor: 'bg-red-500',
          groups: [
            {
              categoryName: 'YOUTUBE WERBEFORMATE & REICHWEITEN-MODELLE',
              accentColor: '#FF0000',
              items: [
                { badge: 'SHORTS ADS', title: 'YouTube Shorts Vertikale Videoanzeigen', desc: 'Vollbild-Storytelling mit sofortiger Aufrufzählung ab Sekunde 0 für maximale mobile Interaktion' },
                { badge: 'IN-STREAM', title: 'TrueView Überspringbare In-Stream Anzeigen', desc: 'Abrechnung erst ab 30 Sekunden Wiedergabedauer — 100% Budgetkontrolle und null Streuverlust' },
                { badge: 'DISCOVERY', title: 'In-Feed Video Discovery Anzeigen', desc: 'Top-Platzierungen in der YouTube-Suche und neben ähnlichen Videos für loyale Abonnenten' },
                { badge: 'BUMPER ADS', title: '6-Sekunden Bumper Ads (Unüberspringbar)', desc: 'Maximale Werbeerinnerung und extrem niedrige CPM-Kosten für breite Markenbekanntheit' },
                { badge: 'DEMAND GEN', title: 'YouTube Demand Gen KI-Videokampagnen', desc: 'Automatische KI-Ausspielung über Shorts, Gmail und Discover an kaufbereite Nutzer' },
                { badge: 'FILTERUNG', title: 'Strikter Ausschluss von Kinder- & Spamkanälen', desc: 'Schutz Ihres Budgets durch gezieltes Sperren irrelevanter Platzierungen' },
                { badge: 'HOOK-DESIGN', title: 'Erste-5-Sekunden Hook-Optimierung', desc: 'Kreativkonzepte, die den Skip-Button verhindern und Zuschauer fesseln' },
                { badge: 'CPV OPTIMIERUNG', title: 'Kostengünstige Aufrufe ab 0,01 € CPV', desc: 'Präzise Gebotssteuerung für maximale Reichweite bei minimalem Budgeteinsatz' }
              ]
            }
          ]
        },
        {
          id: 'youtube-artist-brand',
          title: 'Künstler, Musikclips & E-Commerce Video-Wachstum',
          subtitle: 'Musikvideos / Song-Release / Trend-Charts / Video-Remarketing / Abonnenten',
          count: 8,
          themeGradient: 'from-amber-600 via-red-600 to-amber-800',
          badgeColor: 'bg-amber-500',
          groups: [
            {
              categoryName: 'KÜNSTLER-PROMOTION & CONVERSION-FUNNEL',
              accentColor: '#F59E0B',
              items: [
                { badge: 'SONG-RELEASE', title: 'Musikclip Launch & Trend-Push', desc: 'Initialer Aufruf-Schub in den ersten 48 Stunden zur Unterstützung von Chart-Rankings' },
                { badge: 'GENRE-TARGETING', title: 'Genre- & Künstler-Affinitäts-Targeting', desc: 'Treffsicheres Ausspielen an Fans ähnlicher Musiker und Stilrichtungen' },
                { badge: 'GEO-FOKUS', title: 'Gezielte Länder- & Regionenauswahl', desc: 'Ausstrahlung in Deutschland, Österreich, Schweiz, Türkei oder weltweit' },
                { badge: 'STREAMING PUSH', title: 'Weiterleitung zu Spotify & Apple Music', desc: 'Interaktive Call-to-Actions leiten YouTube-Zuschauer direkt zu Streaming-Plattformen' },
                { badge: 'ABONNENTEN', title: 'Nachhaltiges Kanal-Abonnentenwachstum', desc: 'Gezielte Ansprache zur Verwandlung von Einmal-Zuschauern in treue Abonnenten' },
                { badge: 'REMARKETING', title: 'Video-Viewer Remarketing auf der Website', desc: 'Verkauf von Produkten, Tickets oder Dienstleistungen an bestehende Videozuschauer' },
                { badge: 'LIVESTREAMS', title: 'Livestream & Premieren-Bewerbung', desc: 'Tausende Live-Zuschauer für neue Veröffentlichungen und Online-Events gewinnen' },
                { badge: 'REPORTING', title: 'Transparente YouTube Studio & Ads Analysen', desc: 'Einsicht in Zuschauerbindung, Demografie und tatsächliche Interaktionswerte' }
              ]
            }
          ]
        }
      ],
      en: [
        {
          id: 'youtube-formats',
          title: 'YouTube Ad Formats & Shorts Architecture',
          subtitle: 'Shorts Ads / TrueView In-Stream / In-Feed Discovery / Bumper Ads (6s)',
          count: 8,
          themeGradient: 'from-red-600 via-rose-600 to-red-800',
          badgeColor: 'bg-red-500',
          groups: [
            {
              categoryName: 'YOUTUBE AD FORMATS & DELIVERY MODELS',
              accentColor: '#FF0000',
              items: [
                { badge: 'SHORTS ADS', title: 'YouTube Shorts Vertical Video Ads', desc: 'Full-screen vertical immersive video storytelling with instant view counting from second 0' },
                { badge: 'IN-STREAM', title: 'TrueView Skippable In-Stream Ads', desc: 'Pay only after 30 seconds of watch time or viewer interaction — zero wasted spend' },
                { badge: 'DISCOVERY', title: 'In-Feed Video Discovery Ads', desc: 'Top placement in YouTube search results and related video feeds for organic subscriber growth' },
                { badge: 'BUMPER ADS', title: '6-Second Non-Skippable Bumper Ads', desc: 'High-impact brand recall and cost-effective CPM reach across all smart devices' },
                { badge: 'DEMAND GEN', title: 'YouTube Demand Gen AI Video Campaigns', desc: 'Multi-surface AI optimization spanning Shorts, Gmail, and Discover feeds' },
                { badge: 'EXCLUSIONS', title: 'Placement Filters & Kids Channel Blocking', desc: 'Strict negative filtering ensuring 100% human, relevant, and brand-safe audiences' },
                { badge: 'HOOK DESIGN', title: 'First 5-Second Hook Optimization', desc: 'Creative frameworks crafted to stop the skip button and maximize retention' },
                { badge: 'CPV BIDDING', title: 'Low Cost-Per-View from €0.01 CPV', desc: 'Algorithmic bid management maximizing real audience volume per euro spent' }
              ]
            }
          ]
        },
        {
          id: 'youtube-artist-brand',
          title: 'Artist Promotion, Music Videos & E-Commerce Scale',
          subtitle: 'Music Releases / Trending Charts / Video Retargeting / Subscriber Growth',
          count: 8,
          themeGradient: 'from-amber-600 via-red-600 to-amber-800',
          badgeColor: 'bg-amber-500',
          groups: [
            {
              categoryName: 'ARTIST PROMOTION & VIDEO CONVERSION FUNNELS',
              accentColor: '#F59E0B',
              items: [
                { badge: 'MUSIC RELEASE', title: 'Music Video Launch & Trending Momentum', desc: 'High-velocity initial launch momentum supporting trending charts recognition' },
                { badge: 'GENRE TARGETING', title: 'Genre & Similar Artist Audience Affinity', desc: 'Pinpoint targeting aimed at fans of comparable artists and music genres' },
                { badge: 'GEO FOCUS', title: 'Territorial Targeting (DACH, TR & Global)', desc: 'Custom geographic delivery across Germany, diaspora communities, or worldwide' },
                { badge: 'STREAMING PUSH', title: 'Spotify & Apple Music Traffic Funnels', desc: 'Seamless interactive CTAs directing YouTube viewers straight to streaming platforms' },
                { badge: 'SUBSCRIBERS', title: 'Long-Term Organic Channel Subscriber Scale', desc: 'Converting casual viewers into dedicated subscribers and loyal fans' },
                { badge: 'REMARKETING', title: 'Video Viewer Retargeting & Website Sales', desc: 'Retarget engaged viewers to drive e-commerce sales, tickets, or qualified leads' },
                { badge: 'LIVESTREAMS', title: 'Livestream & Premiere Audience Gathering', desc: 'Driving thousands of live viewers to premieres and scheduled online events' },
                { badge: 'REPORTING', title: 'Transparent YouTube Studio & Ads Analytics', desc: 'Comprehensive reporting covering retention curves, demographics, and true ROI' }
              ]
            }
          ]
        }
      ]
    },

    // REKLAM & TRACKING KURULUM HİZMETLERİ
    'server-side-tracking': {
      tr: [
        {
          id: 'google-setup',
          title: 'Google Reklam, Hesap Açılışı & Doğrulama Altyapısı',
          subtitle: 'Google Ads Açılışı / Reklamveren Doğrulaması / GA4 / Console / GMC / Consent v2',
          count: 8,
          themeGradient: 'from-blue-600 via-indigo-600 to-blue-800',
          badgeColor: 'bg-blue-500',
          groups: [
            {
              categoryName: 'HESAP AÇILIŞI, DOĞRULAMA & GOOGLE ALTYAPISI',
              accentColor: '#4285F4',
              items: [
                { badge: 'ADS AÇILIŞI', title: 'Sıfırdan Google Ads Hesap Kurulumu', desc: 'Doğru para birimi, faturalandırma, kampanya yapısı ve negatif anahtar kelime mimarisi' },
                { badge: 'DOĞRULAMA', title: 'Google Reklamveren Kimlik Doğrulaması (Advertiser Verification)', desc: 'Şirket evrakları ve kimlik onayı ile reklamveren şeffaflık rozeti kazanımı ve askıya alınmayı önleme' },
                { badge: 'GA4 SETUP', title: 'Google Analytics 4 (GA4) E-Ticaret Kurulumu', desc: 'Sepete ekleme, ödeme adımları ve satın alma etkinliklerinin eksiksiz yapılandırılması' },
                { badge: 'SEARCH CONSOLE', title: 'Google Search Console Doğrulama & Sitemap', desc: 'Mülk doğrulama, site haritası gönderimi ve teknik indeksleme kontrolleri' },
                { badge: 'GMC FEED', title: 'Google Merchant Center & Ürün Feed Entegrasyonu', desc: 'Alışveriş reklamları için ürün kataloğu onaylatma ve otomatik feed senkronizasyonu' },
                { badge: 'TAG MANAGER', title: 'Google Tag Manager (GTM) Veri Katmanı', desc: 'Web sitesi koduna dokunmadan esnek etiket ve olay takibi altyapısı' },
                { badge: 'CONSENT MODE', title: 'Google Consent Mode v2 (AB Çerez Uyumu)', desc: 'Avrupa GDPR mevzuatına uygun gelişmiş çerez izin modu ve modelleme' },
                { badge: 'ÖDEME & GÜVENLİK', title: 'Google Ads Ödeme & 3D Secure Yapılandırması', desc: 'Otomatik fatura limitleri, kurumsal vergi numarası ve kesintisiz reklam yayını güvencesi' }
              ]
            }
          ]
        },
        {
          id: 'business-maps-setup',
          title: 'Google Business Profile & Haritalar Kurulumu',
          subtitle: 'İşletme Profili / Harita PIN Doğrulama / Yerel Reklam Entegrasyonu / Yorum Altyapısı',
          count: 8,
          themeGradient: 'from-amber-600 via-orange-600 to-amber-800',
          badgeColor: 'bg-amber-500',
          groups: [
            {
              categoryName: 'GOOGLE HARİTALAR & YEREL İŞLETME ALTYAPISI',
              accentColor: '#F59E0B',
              items: [
                { badge: 'GBP AÇILIŞI', title: 'Google İşletme Profili (GBP) Sıfırdan Kurulumu', desc: 'Resmi işletme adı, ana ve alt kategoriler, çalışma saatleri ve hizmet bölgeleri yapılandırması' },
                { badge: 'PIN & DOĞRULAMA', title: 'Google Haritalar Konum & Video/Posta Doğrulaması', desc: 'Google tarafından talep edilen video kaydı, resmi evrak veya posta kodu ile profil doğrulama' },
                { badge: 'ADS ENTEGRASYONU', title: 'Google Ads Yer Uzantısı & Harita Reklam Bağlantısı', desc: 'İşletme profilini Google Ads hesabına bağlayarak harita aramalarında 1. sırada çıkma' },
                { badge: 'ASKI ÇÖZÜMÜ', title: 'Askıya Alınan / Kapatılan İşletme Profili Kurtarma', desc: 'Google politikalarına uygun itiraz dosyası hazırlayarak askıya alınan profili yeniden açtırma' },
                { badge: 'YEREL SEO', title: 'Google Haritalar Yerel Sıralama (Local Pack) Optimizasyonu', desc: 'Bölgesel aramalarda Google Haritalar 3 lü vitrininde (3-Pack) en üstte yer alma' },
                { badge: 'YORUM QR & NFC', title: 'Google Haritalar Yorum ve Puan QR/NFC Sistemi', desc: 'Müşterilerden Google Haritalar üzerinden anında 5 yıldızlı yorum toplayan temassız altyapı' },
                { badge: 'ÇOKLU ŞUBE', title: 'Çoklu Şube & Konum Yönetimi (Multi-Location)', desc: 'Birden fazla lokasyonu olan markalar için merkezi mağaza ve harita koordinasyonu' },
                { badge: 'ÜRÜN VİTRİNİ', title: 'Google Haritalar Ürün & Menü Kataloğu Ekleme', desc: 'İşletme profili içinde ürün, hizmet ve fiyat listelerinin görsel olarak sergilenmesi' }
              ]
            }
          ]
        },
        {
          id: 'meta-setup',
          title: 'Meta (Facebook & Instagram) Kurulum Paketi',
          subtitle: 'Business Manager / Meta Pixel / CAPI / WhatsApp / Domain / Katalog / Hesap Güvenliği',
          count: 8,
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
                { badge: 'WHATSAPP & DM', title: 'WhatsApp Business & Instagram DM Satış Hunisi', desc: 'Tıklayan müşteriyi anında WhatsApp ve DM sohbetine bağlayan hızlı dönüşüm altyapısı' },
                { badge: 'KATALOG & SHOP', title: 'Instagram & Facebook Mağaza ve Katalog Entegrasyonu', desc: 'E-ticaret ürünlerini doğrudan Instagram gönderilerinde etiketleyip satma altyapısı' },
                { badge: 'ÖZEL KİTLE', title: 'Özel Kitle & Lookalike Hedefleme Mimarisi', desc: 'Müşteri e-posta listeleri ve en iyi alıcılarınızın ikiz kitlelerinin oluşturulması' },
                { badge: 'HESAP KURTARMA', title: 'Kısıtlanan Meta Reklam Hesabı & BM İtiraz Desteği', desc: 'Politika ihlali nedeniyle kapanan Meta hesapları için resmi itiraz ve kurtarma süreci' }
              ]
            }
          ]
        },
        {
          id: 'advanced-tracking',
          title: 'İleri Seviye Server-Side Tracking & sGTM',
          subtitle: 'Cloud Server / Gelişmiş Eşleme / Çerezsiz Ölçüm / Offline CRM / Multi-Platform',
          count: 8,
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
                { badge: 'TIKTOK & PINTEREST', title: 'TikTok Events API & Pinterest CAPI Kurulumu', desc: 'Tüm sosyal medya kanalları için eksiksiz sunucu taraflı dönüşüm beslemesi' },
                { badge: 'CLOUD SPEED', title: 'Google Cloud / Stape Sunucu Hız & Maliyet Optimizasyonu', desc: 'Yüksek trafikli sitelerde milisaniyelik veri iletimi ve ekonomik sunucu ölçekleme' },
                { badge: 'ÖZEL DATALAYER', title: 'Özel Veri Katmanı (Custom DataLayer) Mimarisi', desc: 'Form doldurma, buton tıklama ve özel e-ticaret adımlarını hatasız takip etme' },
                { badge: 'ÇEREZSİZ MODELLEME', title: 'Çerezsiz Ölçüm & Yapay Zeka Dönüşüm Modellemesi', desc: 'Çerez reddeden kullanıcılardan makine öğrenimi ile kayıp veriyi geri kazanma' }
              ]
            }
          ]
        }
      ],
      de: [
        {
          id: 'google-setup',
          title: 'Google Ads Konto-Setup & Werbetreibenden-Verifizierung',
          subtitle: 'Google Ads Eröffnung / Identitätsprüfung / GA4 / Search Console / GMC / Consent v2',
          count: 8,
          themeGradient: 'from-blue-600 via-indigo-600 to-blue-800',
          badgeColor: 'bg-blue-500',
          groups: [
            {
              categoryName: 'KONTOEINRICHTUNG, VERIFIZIERUNG & GOOGLE INFRASTRUKTUR',
              accentColor: '#4285F4',
              items: [
                { badge: 'ADS SETUP', title: 'Neuanlage & Strukturierung des Google Ads Kontos', desc: 'Optimale Kontenarchitektur, Währungseinrichtung und Master-Ausschlusslisten' },
                { badge: 'VERIFIZIERUNG', title: 'Google Werbetreibenden-Verifizierung (Advertiser Identity)', desc: 'Einreichung offizieller Unternehmensdokumente zur Freischaltung des Transparenz-Badges' },
                { badge: 'GA4 SETUP', title: 'Google Analytics 4 (GA4) E-Commerce Tracking', desc: 'Vollständige Erfassung von Warenkorb-, Checkout- und Transaktions-Events' },
                { badge: 'SEARCH CONSOLE', title: 'Google Search Console Verifizierung & Sitemap', desc: 'Inhaberschaftsbestätigung, XML-Sitemap-Einreichung und Indexierungsüberwachung' },
                { badge: 'GMC FEED', title: 'Google Merchant Center & Produkt-Feed Integration', desc: 'Freischaltung von Shopping-Anzeigen und automatischer Produktdatenabgleich' },
                { badge: 'TAG MANAGER', title: 'Google Tag Manager (GTM) DataLayer Setup', desc: 'Saubere Ereigniserfassung ohne manuelle Eingriffe in den Quellcode' },
                { badge: 'CONSENT MODE', title: 'Google Consent Mode v2 (DSGVO & EU-Konform)', desc: 'Rechtssichere Einwilligungserfassung und KI-gestützte Conversion-Modellierung' },
                { badge: 'ZAHLUNG & SICHERHEIT', title: 'Zahlungs- & 3D-Secure-Einrichtung', desc: 'Hinterlegung von Abrechnungsdaten, USt-IdNr. und Absicherung gegen Kontosperren' }
              ]
            }
          ]
        },
        {
          id: 'business-maps-setup',
          title: 'Google Unternehmensprofil & Google Maps Setup',
          subtitle: 'Brancheneintrag / Maps-Verifizierung / Standorterweiterungen / Bewertungs-QR',
          count: 8,
          themeGradient: 'from-amber-600 via-orange-600 to-amber-800',
          badgeColor: 'bg-amber-500',
          groups: [
            {
              categoryName: 'GOOGLE MAPS & LOKALE UNTERNEHMENS-PRÄSENZ',
              accentColor: '#F59E0B',
              items: [
                { badge: 'GBP SETUP', title: 'Google Unternehmensprofil (GBP) Neuanlage', desc: 'Kategorien, Öffnungszeiten, Leistungsbereiche und professionelle Unternehmenspräsentation' },
                { badge: 'MAPS PIN', title: 'Google Maps Standort- & Videoverifizierung', desc: 'Offizielle Bestätigung der Inhaberschaft via Video, Dokument oder Postkarte' },
                { badge: 'ADS LINK', title: 'Google Ads Standorterweiterung & Maps-Anzeigen', desc: 'Verknüpfung mit Google Ads für Spitzenplatzierungen in lokalen Google Maps Suchen' },
                { badge: 'REAKTIVIERUNG', title: 'Wiederherstellung gesperrter Unternehmensprofile', desc: 'Einspruchsverfahren und Richtlinienbereinigung bei fälschlichen Suspendierungen' },
                { badge: 'LOCAL SEO', title: 'Google Maps 3-Pack Lokale Ranking-Optimierung', desc: 'Top-Platzierung im Google Maps 3-Pack für maximale Kundenanrufe vor Ort' },
                { badge: 'BEWERTUNGS-QR', title: 'Google Maps Bewertungs-QR & NFC-Karten', desc: 'Kontaktlose Systeme für schnelle 5-Sterne Google-Bewertungen zufriedener Kunden' },
                { badge: 'FILIAL-MANAGEMENT', title: 'Multi-Location & Filialnetz-Verwaltung', desc: 'Zentrale Koordination und Pflege mehrerer Standorte in einem Unternehmens-Dashboard' },
                { badge: 'PRODUKTKATALOG', title: 'Google Maps Produkt- & Speisekarten-Einbindung', desc: 'Präsentation von Produkten, Services und Preisen direkt auf Ihrem Maps-Eintrag' }
              ]
            }
          ]
        },
        {
          id: 'meta-setup',
          title: 'Meta (Facebook & Instagram) Setup-Paket',
          subtitle: 'Business Manager / Meta Pixel / CAPI / WhatsApp / Domain / Katalog / Accountsicherheit',
          count: 8,
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
                { badge: 'WHATSAPP & DM', title: 'WhatsApp Business & Instagram DM Funnel-Setup', desc: 'Direkter Chat-Einstieg für schnelle Kundenberatung und Lead-Abschlüsse' },
                { badge: 'SHOP & KATALOG', title: 'Instagram & Facebook Shop Katalog-Integration', desc: 'Produkt-Tagging in Beiträgen und nahtloses Shopping-Erlebnis auf Social Media' },
                { badge: 'CUSTOM AUDIENCES', title: 'Custom Audiences & Lookalike-Architektur', desc: 'Aufbau hochkonvertierender Zielgruppen aus Ihren besten Käuferdaten' },
                { badge: 'KONTOSCHUTZ', title: 'Wiederherstellung eingeschränkter Werbekonten', desc: 'Offizielle Einspruchsführung bei gesperrten Business Managern und Konten' }
              ]
            }
          ]
        },
        {
          id: 'advanced-tracking',
          title: 'Advanced Server-Side Tracking & sGTM',
          subtitle: 'Cloud Server / Enhanced Conversions / CRM Tracking / Cookieless AI / Multi-Plattform',
          count: 8,
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
                { badge: 'TIKTOK & PINTEREST', title: 'TikTok Events API & Pinterest CAPI Setup', desc: 'Ganzheitliche Server-Side Abdeckung für alle aktiven Social-Kanäle' },
                { badge: 'CLOUD SPEED', title: 'Google Cloud & Stape Performance-Optimierung', desc: 'Millisekundenschnelle Server-Übertragung und kosteneffiziente Server-Skalierung' },
                { badge: 'CUSTOM DATALAYER', title: 'Custom DataLayer & Event-Architektur', desc: 'Exakte Erfassung von Formularen, Button-Klicks und komplexen E-Commerce Schritten' },
                { badge: 'COOKIELESS AI', title: 'Cookieless Tracking & Conversion-Modellierung', desc: 'Wiederherstellung verlorener Daten bei Cookie-Ablehnung durch KI-Modelle' }
              ]
            }
          ]
        }
      ],
      en: [
        {
          id: 'google-setup',
          title: 'Google Ads Account Setup & Advertiser Verification',
          subtitle: 'Account Opening / Identity Verification / GA4 / Console / GMC / Consent v2',
          count: 8,
          themeGradient: 'from-blue-600 via-indigo-600 to-blue-800',
          badgeColor: 'bg-blue-500',
          groups: [
            {
              categoryName: 'ACCOUNT OPENING, VERIFICATION & GOOGLE STACK',
              accentColor: '#4285F4',
              items: [
                { badge: 'ADS SETUP', title: 'Zero-to-Hero Google Ads Account Setup', desc: 'Proper currency, billing, best-practice structure, and master negative keyword lists' },
                { badge: 'VERIFICATION', title: 'Google Advertiser Identity Verification', desc: 'Official documentation and ID validation for verified advertiser transparency badges' },
                { badge: 'GA4 SETUP', title: 'Google Analytics 4 (GA4) E-Commerce Tracking', desc: 'Complete tracking for add_to_cart, begin_checkout, and purchase transactions' },
                { badge: 'SEARCH CONSOLE', title: 'Google Search Console Verification & Sitemap', desc: 'Domain ownership validation, XML sitemap indexing, and coverage monitoring' },
                { badge: 'GMC FEED', title: 'Google Merchant Center & Product Feed Integration', desc: 'Product catalog approval for Shopping ads with automated sync' },
                { badge: 'TAG MANAGER', title: 'Google Tag Manager (GTM) DataLayer Setup', desc: 'Agile tag management without constant source code modifications' },
                { badge: 'CONSENT MODE', title: 'Google Consent Mode v2 (GDPR Compliant)', desc: 'Compliant consent handling with machine-learning conversion modeling' },
                { badge: 'BILLING & 3D SECURE', title: 'Billing & 3D Secure Configuration', desc: 'Tax ID registration, payment thresholds, and account suspension protection' }
              ]
            }
          ]
        },
        {
          id: 'business-maps-setup',
          title: 'Google Business Profile & Google Maps Setup',
          subtitle: 'Profile Creation / Maps Verification / Location Extensions / Review QR Systems',
          count: 8,
          themeGradient: 'from-amber-600 via-orange-600 to-amber-800',
          badgeColor: 'bg-amber-500',
          groups: [
            {
              categoryName: 'GOOGLE MAPS & LOCAL BUSINESS INFRASTRUCTURE',
              accentColor: '#F59E0B',
              items: [
                { badge: 'GBP SETUP', title: 'Google Business Profile (GBP) Setup from Scratch', desc: 'Primary categories, operational hours, service areas, and company branding' },
                { badge: 'MAPS PIN', title: 'Google Maps Video & Postal PIN Verification', desc: 'Official ownership verification through video recording, business docs, or PIN' },
                { badge: 'ADS LINK', title: 'Google Ads Location Extension & Maps Ads Integration', desc: 'Connect your business profile to Google Ads to rank #1 on Google Maps searches' },
                { badge: 'RECOVERY', title: 'Suspended Business Profile Reinstatement', desc: 'Professional appeals and policy fixes to restore disabled profiles quickly' },
                { badge: 'LOCAL SEO', title: 'Google Maps 3-Pack Ranking Optimization', desc: 'Achieve top 3-pack visibility for high-intent local customer calls and foot traffic' },
                { badge: 'REVIEW QR & NFC', title: 'Google Maps Review QR & NFC Card Solutions', desc: 'Contactless review gathering systems to collect 5-star Google ratings effortlessly' },
                { badge: 'MULTI-LOCATION', title: 'Multi-Location Enterprise GBP Management', desc: 'Centralized location and store coordination for multi-branch companies' },
                { badge: 'PRODUCT SHOWCASE', title: 'Google Maps Product & Menu Catalog Integration', desc: 'Showcase your products, services, and price menus directly in Maps results' }
              ]
            }
          ]
        },
        {
          id: 'meta-setup',
          title: 'Meta (Facebook & Instagram) Setup Package',
          subtitle: 'Business Manager / Meta Pixel / CAPI / WhatsApp / Domain / Catalog / Account Safety',
          count: 8,
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
                { badge: 'WHATSAPP & DM', title: 'WhatsApp Business & Instagram DM Sales Funnel', desc: 'Direct-to-chat messaging funnels for immediate consultation and sales' },
                { badge: 'SHOP & CATALOG', title: 'Instagram & Facebook Shop Catalog Integration', desc: 'Product tagging in organic posts and frictionless social commerce checkouts' },
                { badge: 'CUSTOM AUDIENCES', title: 'High-Value Custom & Lookalike Audience Engine', desc: 'Generate high-ROAS lookalike segments based on top 10% LTV customers' },
                { badge: 'RECOVERY', title: 'Disabled Ad Account & Business Manager Appeals', desc: 'Official policy review and account reinstatement representation' }
              ]
            }
          ]
        },
        {
          id: 'advanced-tracking',
          title: 'Advanced Server-Side Tracking & sGTM',
          subtitle: 'Cloud Server / Enhanced Conversions / CRM Tracking / Cookieless AI / Multi-Platform',
          count: 8,
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
                { badge: 'TIKTOK & PINTEREST', title: 'TikTok Events API & Pinterest CAPI Setup', desc: 'Complete server-side tracking coverage across all active ad networks' },
                { badge: 'CLOUD SPEED', title: 'Google Cloud & Stape Latency & Cost Optimization', desc: 'Sub-millisecond data routing with minimal cloud infrastructure costs' },
                { badge: 'CUSTOM DATALAYER', title: 'Custom DataLayer & Form Tracking Architecture', desc: 'Precision tracking for complex lead forms, button clicks, and funnel steps' },
                { badge: 'COOKIELESS AI', title: 'Cookieless Tracking & AI Conversion Modeling', desc: 'Recover consent-denied signal loss using advanced machine learning models' }
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
          count: 16,
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
                { badge: 'RESPONSIVE', title: 'Duyarlı Arama Reklamları (RSA)', desc: '15 başlık ve 4 açıklama ile dinamik A/B optimizasyonu' },
                { badge: 'CALL-ONLY', title: 'Çağrı Odaklı Reklamlar (Call Ads)', desc: 'Doğrudan telefon araması üreten mobil reklamlar' },
                { badge: 'APP PROMOTION', title: 'Mobil Uygulama Reklamları', desc: 'App Store ve Google Play indirme sayısı artırma' }
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
            }
          ]
        },
        {
          id: 'management-strategy',
          title: 'Google Reklam Yönetimi & Strateji',
          subtitle: 'Kurulum / Optimizasyon / Sabit Fiyat Yönetimi',
          count: 12,
          themeGradient: 'from-emerald-600 via-teal-600 to-emerald-800',
          badgeColor: 'bg-emerald-500',
          groups: [
            {
              categoryName: 'HESAP YÖNETİMİ & MALİYET DÜŞÜRME',
              accentColor: '#10B981',
              items: [
                { badge: 'FULL SERVICE', title: 'Google Ads Profesyonel Yönetimi', desc: '17+ yıllık uzmanlıkla sürekli günlük optimizasyon' },
                { badge: 'NEW SETUP', title: 'Sıfırdan Google Ads Kurulumu', desc: 'Kusursuz hesap mimarisi ve ilk kampanya lansmanı' },
                { badge: 'ACCOUNT AUDIT', title: 'Google Ads Hesap Denetimi (Audit)', desc: 'Mevcut hesaplardaki para kaçaklarını tespit eden derin analiz' },
                { badge: 'FIXPREIS RETAINER', title: 'Sabit Fiyatlı (Fixpreis) Yönetim', desc: 'Sürpriz komisyon olmadan net aylık sabit yönetim ücreti' },
                { badge: 'EXECUTIVE CONSULT', title: 'Google Reklam Danışmanlığı', desc: 'Birebir strateji geliştirme ve hesap koçluğu' },
                { badge: 'CPC REDUCTION', title: 'Tıklama Başı Maliyet (CPC) Düşürme', desc: 'Gereksiz tıklamaları engelleyerek maliyetleri %40 düşürme' }
              ]
            },
            {
              categoryName: 'SORUN GİDERME & KORUMA',
              accentColor: '#EF4444',
              items: [
                { badge: 'QUALITY SCORE', title: 'Kalite Puanı (Quality Score) Yükseltme', desc: '10/10 kalite puanı ile rakiplerden daha ucuza üstte çıkma' },
                { badge: 'CLICK FRAUD', title: 'Tıklama Sahtekarlığı Koruması', desc: 'Bot ve rakip sahte tıklamalarını engelleme' },
                { badge: 'POLICY RECOVERY', title: 'Reklam Onaylatma & İtiraz', desc: 'Reddedilen veya askıya alınan reklamları onaylatma' },
                { badge: 'CONVERSION FIX', title: 'Reklam Var Müşteri Yok Çözümü', desc: 'Trafik gelip satış olmama problemini kökten çözme' },
                { badge: 'BRAND DEFENSE', title: 'Rakip Marka Koruması', desc: 'Marka adınıza reklam veren rakiplere karşı savunma' },
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
                { badge: 'VALUE RULES', title: 'Dönüşüm Değeri Kuralları', desc: 'Yüksek değerli müşteri segmentlerine daha yüksek teklif' },
                { badge: 'A/B TESTING', title: 'Duyarlı Reklam A/B Metin Testi', desc: 'En yüksek tıklama oranına sahip başlık varyasyonlarını bulma' },
                { badge: 'EXTENSIONS', title: 'Site Bağlantısı & Açıklama Uzantıları', desc: 'Reklamın ekranda kapladığı alanı 2 katına çıkarma' }
              ]
            },
            {
              categoryName: 'HEDEF KİTLE & COĞRAFYA',
              accentColor: '#3B82F6',
              items: [
                { badge: 'PROMOTION', title: 'Fiyat & Promosyon Uzantıları', desc: 'İndirim ve kampanyaları arama sonucunda doğrudan gösterme' },
                { badge: 'VISUAL ASSETS', title: 'Görsel & Logo Varlık Optimizasyonu', desc: 'Resmi logo ve yüksek kaliteli görsellerle marka güveni' },
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
          count: 16,
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
                { badge: 'RESPONSIVE', title: 'Responsive Suchanzeigen (RSA)', desc: 'Dynamische A/B-Tests aus 15 Titeln und 4 Beschreibungen' },
                { badge: 'CALL-ONLY', title: 'Call-Only Anrufkampagnen', desc: 'Direkte Telefonanrufe für Handwerker, Ärzte und Dienstleister' },
                { badge: 'APP PROMOTION', title: 'App-Installationskampagnen', desc: 'Mehr Downloads im App Store und Google Play Store' }
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
            }
          ]
        },
        {
          id: 'management-strategy',
          title: 'Google Ads Betreuung & Strategie',
          subtitle: 'Setup / Audit / Fixpreis-Verwaltung',
          count: 12,
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
                { badge: 'EXECUTIVE CONSULT', title: 'Strategische Beratung & Coaching', desc: 'Individuelle Sparringspartner-Begleitung für Ihr Marketingteam' },
                { badge: 'CPC REDUCTION', title: 'Klickpreis (CPC) Reduktion', desc: 'Kostensenkung um bis zu 40% durch Ausschluss irrelevanter Klicks' }
              ]
            },
            {
              categoryName: 'PROBLEMLÖSUNG & SCHUTZ',
              accentColor: '#EF4444',
              items: [
                { badge: 'QUALITY SCORE', title: 'Qualitätsfaktor Steigerung', desc: 'Günstigere Klicks und Top-Positionen durch 10/10 Relevanz' },
                { badge: 'CLICK FRAUD', title: 'Klickbetrug-Schutz (Click Fraud)', desc: 'Ausschluss von Bot-Netzwerken und unfairen Konkurrenzklicks' },
                { badge: 'POLICY RECOVERY', title: 'Ablehnungen & Richtlinien-Freigabe', desc: 'Reaktivierung und Freigabe abgelehnter Werbeanzeigen' },
                { badge: 'CONVERSION FIX', title: 'Klicks ohne Verkäufe beheben', desc: 'Ursachenforschung und Conversion-Optimierung' },
                { badge: 'BRAND DEFENSE', title: 'Markenschutz (Brand Protection)', desc: 'Verteidigung gegen Wettbewerber, die auf Ihren Namen werben' },
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
                { badge: 'VALUE RULES', title: 'Conversion-Wert-Regeln', desc: 'Höhere Gebote für wertvollere Kundengruppen' },
                { badge: 'A/B TESTING', title: 'Responsive Anzeigentexte A/B-Tests', desc: 'Ermittlung der conversion-stärksten Formulierungsvarianten' },
                { badge: 'EXTENSIONS', title: 'Sitelinks & Zusatzinformationen', desc: 'Verdoppelung der sichtbaren Werbefläche auf mobilen Geräten' }
              ]
            },
            {
              categoryName: 'ZIELGRUPPEN & GEOTARGETING',
              accentColor: '#3B82F6',
              items: [
                { badge: 'PROMOTION', title: 'Preis- & Aktionserweiterungen', desc: 'Rabatte und Konditionen direkt im Suchergebnis hervorheben' },
                { badge: 'VISUAL ASSETS', title: 'Logo- & Bilderweiterungen', desc: 'Visuelles Vertrauen durch verifizierte Marken-Assets' },
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
          count: 16,
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
                { badge: 'RESPONSIVE', title: 'Responsive Search Ads (RSA)', desc: 'Continuous machine learning multivariate copy tests' },
                { badge: 'CALL-ONLY', title: 'Call-Only Ads', desc: 'Direct phone lead generation for high-urgency services' },
                { badge: 'APP PROMOTION', title: 'Mobile App Promotion', desc: 'Accelerate downloads on App Store & Google Play' }
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
            }
          ]
        },
        {
          id: 'management-strategy',
          title: 'Google Ads Management & Strategy',
          subtitle: 'Setup / Account Audit / Flat-Fee Model',
          count: 12,
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
                { badge: 'EXECUTIVE CONSULT', title: 'Strategic PPC Consulting', desc: 'Executive-level sparring for internal growth teams' },
                { badge: 'CPC REDUCTION', title: 'CPC Cost Reduction', desc: 'Cut cost per click by up to 40% with precision negatives' }
              ]
            },
            {
              categoryName: 'TROUBLESHOOTING & PROTECTION',
              accentColor: '#EF4444',
              items: [
                { badge: 'QUALITY SCORE', title: 'Quality Score Optimization', desc: 'Achieve 10/10 scores to outrank competitors at lower CPCs' },
                { badge: 'CLICK FRAUD', title: 'Click Fraud Protection', desc: 'Block bot networks and competitor click abuse' },
                { badge: 'POLICY RECOVERY', title: 'Policy Disapproval Resolution', desc: 'Overturn false disapprovals and restore paused campaigns' },
                { badge: 'CONVERSION FIX', title: 'Fix Clicks Without Conversions', desc: 'Root-cause analysis to turn traffic into paying clients' },
                { badge: 'BRAND DEFENSE', title: 'Brand Defense Strategy', desc: 'Defend your branded terms against competitor hijacking' },
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
                { badge: 'VALUE RULES', title: 'Conversion Value Rules', desc: 'Bid higher on high-value demographic cohorts' },
                { badge: 'A/B TESTING', title: 'Responsive Search Ad A/B Copy Tests', desc: 'Identify winning emotional hooks and CTR multipliers' },
                { badge: 'EXTENSIONS', title: 'Sitelinks & Callout Extensions', desc: 'Double your search result visual real estate on mobile' }
              ]
            },
            {
              categoryName: 'AUDIENCE & GEO TARGETING',
              accentColor: '#3B82F6',
              items: [
                { badge: 'PROMOTION', title: 'Price & Promotion Assets', desc: 'Showcase discounts and price points directly in search' },
                { badge: 'VISUAL ASSETS', title: 'Image & Business Logo Verification', desc: 'Build instant consumer trust with verified badges' },
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
              categoryName: 'E-TİCARET, VİDEO & DÖNÜŞÜM',
              accentColor: '#EC4899',
              items: [
                { badge: 'ADVANTAGE+', title: 'Advantage+ Alışveriş Kampanyaları (ASC)', desc: 'Yapay zeka ile minimum maliyetle maksimum e-ticaret satışı' },
                { badge: 'DYNAMIC ADS', title: 'Dinamik Ürün Reklamları (DPA)', desc: 'Kullanıcının sepette unuttuğu ürünleri tekrar gösterme' },
                { badge: 'CATALOG SALES', title: 'Katalog Satış Reklamları', desc: 'Binlerce ürünü otomatik olarak ilgili kitleyle eşleştirme' },
                { badge: 'COLLECTION', title: 'Koleksiyon & Instant Experience', desc: 'Tam ekran hızlı yüklenen mobil vitrin deneyimi' },
                { badge: 'REELS ADS', title: 'Instagram Reels Video Reklamları', desc: 'Dikey 9:16 video ile viral izlenme ve doğrudan satın alma' },
                { badge: 'UGC VIDEO', title: 'UGC (User Generated Content) Reklamları', desc: 'Kullanıcı deneyim videolarıyla yüksek güven ve ROAS artışı' }
              ]
            },
            {
              categoryName: 'LEAD, MESAJLAŞMA & RETARGETING',
              accentColor: '#8B5CF6',
              items: [
                { badge: 'STORY ADS', title: 'Story (Hikaye) Dönüşüm Reklamları', desc: 'Kaydırmalı hikaye formatlarıyla hızlı teklif sunumu' },
                { badge: 'RETARGETING', title: 'Video İzleme & Retargeting Hunisi', desc: 'Videonun %50 sini izleyenleri sıcak kitle olarak hedefleme' },
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
          count: 12,
          themeGradient: 'from-purple-600 via-indigo-600 to-blue-700',
          badgeColor: 'bg-purple-500',
          groups: [
            {
              categoryName: 'KREATİF & İÇERİK OPTİMİZASYONU',
              accentColor: '#F43F5E',
              items: [
                { badge: 'HOOK RATE', title: '3 Saniye Kanca (Hook Rate) Testi', desc: 'İlk 3 saniyede izleyiciyi durduran video varyasyonları bulma' },
                { badge: 'FATIGUE ALERT', title: 'Kreatif Yorulma (Ad Fatigue) Takibi', desc: 'Doyuma ulaşan reklamları erken tespit edip yenileme' },
                { badge: 'MULTIVARIATE', title: 'A/B Görsel ve Metin Deneyleri', desc: 'En yüksek ROAS getiren görsel açıları belirleme' },
                { badge: 'META CAPI', title: 'Meta Conversions API Entegrasyonu', desc: 'iOS engellerini aşarak %100 kayıpsız satış takibi' },
                { badge: 'MATCH QUALITY', title: 'Olay Eşleşme Kalitesi (EMQ 9.0+)', desc: '9.0+ kalite puanı ile algoritmayı en doğru alıcıya eğitme' },
                { badge: 'DEDUPLICATION', title: 'Sunucu ve Tarayıcı Çiftleme', desc: 'Aynı siparişin 2 kez sayılmasını önleme' }
              ]
            },
            {
              categoryName: 'KİTLE STRATEJİSİ & ÖLÇEKLENME',
              accentColor: '#10B981',
              items: [
                { badge: 'BROAD TARGET', title: 'Geniş Hedefleme (Broad) Mimarisi', desc: 'Algoritmanın en kârlı alıcıyı serbestçe bulmasını sağlama' },
                { badge: 'LOOKALIKE', title: 'Benzer Kitleler (Lookalike Audiences)', desc: 'Mevcut en iyi müşterilerinizin ikizlerini bulma' },
                { badge: 'LTV UPLOAD', title: 'Müşteri Listesi (LTV) Yükleme', desc: 'Yüksek bütçeli eski müşterileri VIP kampanyalarla hedefleme' },
                { badge: 'EXCLUSIONS', title: 'Alıcı Hariç Tutma (Exclusion Lists)', desc: 'Son 30 günde satın alanlara boşuna para harcamama' },
                { badge: 'ADVANTAGE AUDIENCE', title: 'Advantage+ Kitle Genişletme', desc: 'Yapay zeka ile en uygun maliyetli yeni müşterilere ulaşma' },
                { badge: 'CREATIVE SCALING', title: 'Dinamik Kreatif Ölçekleme (DCT)', desc: 'Metin, başlık ve görselleri otomatik harmanlayarak ölçekleme' }
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
                { badge: 'COLLECTION', title: 'Collection Ads & Instant Experience', desc: 'Schnell ladende mobile Produktkataloge direkt in der App' },
                { badge: 'REELS ADS', title: 'Instagram Reels Video Ads', desc: '9:16 Vollbild-Videoanzeigen für virale Markenreichweite' },
                { badge: 'UGC VIDEO', title: 'UGC (User Generated Content) Ads', desc: 'Authentische Kundenvideos für maximale Glaubwürdigkeit' }
              ]
            },
            {
              categoryName: 'LEAD GENERATION & MESSENGER',
              accentColor: '#8B5CF6',
              items: [
                { badge: 'STORY ADS', title: 'Story Conversion Ads', desc: 'Swipe-Up Anzeigen mit direktem Verkaufsangebot' },
                { badge: 'RETARGETING', title: 'Video View & Retargeting Funnel', desc: 'Nutzer, die 50%+ geschaut haben, gezielt zum Kauf führen' },
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
          count: 12,
          themeGradient: 'from-purple-600 via-indigo-600 to-blue-700',
          badgeColor: 'bg-purple-500',
          groups: [
            {
              categoryName: 'CREATIVE OPTIMIERUNG & TRACKING',
              accentColor: '#F43F5E',
              items: [
                { badge: 'HOOK RATE', title: '3-Sekunden Hook Rate Testing', desc: 'Ermittlung der conversion-stärksten Video-Eröffnungsszenen' },
                { badge: 'FATIGUE ALERT', title: 'Creative Fatigue Überwachung', desc: 'Rechtzeitiges Erkennen und Erneuern gesättigter Werbemittel' },
                { badge: 'MULTIVARIATE', title: 'Multivariate A/B-Visual-Tests', desc: 'Wissenschaftlicher Vergleich von Farb- und Bildstilen' },
                { badge: 'META CAPI', title: 'Meta Conversions API (CAPI)', desc: 'Server-Side Tracking zur Überwindung von iOS-Tracking-Blockaden' },
                { badge: 'MATCH QUALITY', title: 'Event Match Quality (EMQ 9.0+)', desc: 'Bessere KI-Algorithmus-Fütterung durch First-Party-Daten' },
                { badge: 'DEDUPLICATION', title: 'Browser/Server Deduplizierung', desc: 'Verhinderung doppelter Conversion-Zählungen' }
              ]
            },
            {
              categoryName: 'ZIELGRUPPENSTRATEGIE & SKALIERUNG',
              accentColor: '#10B981',
              items: [
                { badge: 'BROAD TARGET', title: 'Broad Targeting Skalierung', desc: 'Algorithmus-Freiheit für günstigste Akquisitionskosten' },
                { badge: 'LOOKALIKE', title: 'Lookalike Audiences', desc: 'Finden neuer Kunden, die Ihren besten Käufern ähneln' },
                { badge: 'LTV UPLOAD', title: 'Kundenwert (LTV) Listen-Upload', desc: 'Gezielte Ansprache von VIP-Bestandskunden' },
                { badge: 'EXCLUSIONS', title: 'Ausschlusslisten (Exclusions)', desc: 'Kein Budget für Kunden verschwenden, die bereits gekauft haben' },
                { badge: 'ADVANTAGE AUDIENCE', title: 'Advantage+ Zielgruppenerweiterung', desc: 'KI-gestützte Erschließung profitabler Neukundensegmente' },
                { badge: 'CREATIVE SCALING', title: 'Dynamic Creative Testing (DCT)', desc: 'Automatisierte Kombination von Texten und Assets zur Skalierung' }
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
                { badge: 'COLLECTION', title: 'Instant Experience & Collection Ads', desc: 'Fast-loading, immersive mobile storefront experiences' },
                { badge: 'REELS ADS', title: 'Instagram Reels Video Ads', desc: '9:16 vertical video driving viral reach and direct checkout' },
                { badge: 'UGC VIDEO', title: 'UGC (User Generated Content) Ads', desc: 'Authentic creator video creative for maximum conversion trust' }
              ]
            },
            {
              categoryName: 'LEAD GENERATION & DIRECT CHAT',
              accentColor: '#8B5CF6',
              items: [
                { badge: 'STORY ADS', title: 'Story Conversion Campaigns', desc: 'Seamless swipe-up mobile conversion flows' },
                { badge: 'RETARGETING', title: 'Video Retention & Retargeting Funnel', desc: 'Retarget 50%+ video watchers into high-converting buyers' },
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
          count: 12,
          themeGradient: 'from-purple-600 via-indigo-600 to-blue-700',
          badgeColor: 'bg-purple-500',
          groups: [
            {
              categoryName: 'CREATIVE OPTIMIZATION & TRACKING',
              accentColor: '#F43F5E',
              items: [
                { badge: 'HOOK RATE', title: '3-Second Hook Rate Testing', desc: 'Isolate high-converting video opening hooks systematically' },
                { badge: 'FATIGUE ALERT', title: 'Ad Fatigue Detection', desc: 'Proactively refresh creative before performance decays' },
                { badge: 'MULTIVARIATE', title: 'Multivariate A/B Creative Tests', desc: 'Scientific iteration on visual angles and headlines' },
                { badge: 'META CAPI', title: 'Meta Conversions API (CAPI)', desc: 'Bypass browser ad-blockers with direct server data feeds' },
                { badge: 'MATCH QUALITY', title: 'Event Match Quality (EMQ 9.0+)', desc: 'Maximize pixel match rates using advanced hashed parameters' },
                { badge: 'DEDUPLICATION', title: 'Browser/Server Deduplication', desc: 'Eliminate duplicate conversion tracking entirely' }
              ]
            },
            {
              categoryName: 'AUDIENCE ARCHITECTURE & SCALING',
              accentColor: '#10B981',
              items: [
                { badge: 'BROAD TARGET', title: 'Broad Targeting Scaling', desc: 'Leverage Meta AI to find lowest-CPA buyers without restrictions' },
                { badge: 'LOOKALIKE', title: 'High-Value Lookalike Audiences', desc: 'Scale lookalikes built from top 10% lifetime-value purchasers' },
                { badge: 'LTV UPLOAD', title: 'LTV First-Party Customer Uploads', desc: 'VIP remarketing and re-engagement campaigns' },
                { badge: 'EXCLUSIONS', title: 'Strict Conversion Exclusion Lists', desc: 'Zero wasted budget on recent customers' },
                { badge: 'ADVANTAGE AUDIENCE', title: 'Advantage+ Audience Expansion', desc: 'AI-driven expansion targeting fresh high-intent prospects' },
                { badge: 'CREATIVE SCALING', title: 'Dynamic Creative Testing (DCT)', desc: 'Multivariate asset blending to scale winning angles' }
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
    'business-maps-setup': true,
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

  // Dynamic grid class generator: Prevents any orphan card on any screen!
  const getDynamicGridCols = (itemCount) => {
    if (itemCount === 8) {
      return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' // 2 rows x 4 cols = perfectly filled
    }
    if (itemCount === 6) {
      return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' // 2 rows x 3 cols = perfectly filled
    }
    if (itemCount === 4) {
      return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' // 1 row x 4 cols = perfectly filled
    }
    if (itemCount === 3) {
      return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' // 1 row x 3 cols = perfectly filled
    }
    if (itemCount === 2) {
      return 'grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto'
    }
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
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
        style={{ backgroundColor: '#F59E0B' }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header with Neon Accent */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider mb-5 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-blue-500/10 text-white">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
            <span className="bg-gradient-to-r from-blue-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              {lang === 'de' ? 'Interaktives Setup- & Leistungsverzeichnis 2026' : lang === 'tr' ? 'İnteraktif Reklam, Harita & Setup Kataloğu' : '2026 Interactive Setup & Module Directory'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            {lang === 'de' ? (
              <>Google Ads, Maps & <span className="bg-gradient-to-r from-blue-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">Setup-Leistungen</span></>
            ) : lang === 'tr' ? (
              <>Google Ads, Haritalar & <span className="bg-gradient-to-r from-blue-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">Kurulum Modülleri</span></>
            ) : (
              <>Google Ads, Maps & <span className="bg-gradient-to-r from-blue-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">Setup Modules</span></>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {lang === 'de'
              ? 'Klicken Sie auf die Kategorien, um alle spezialisierten Setup-Bausteine, Google Unternehmensprofile, Verifizierungen und Tracking-Systeme zu erkunden.'
              : lang === 'tr'
              ? 'Aşağıdaki renkli bölümlere tıklayarak tüm Google Ads açılış ve doğrulaması, Google İşletme Profili & Haritalar, CAPI ve analitik kurulumlarını inceleyin.'
              : 'Click on each category to explore detailed ad account setups, Google Business Profile & Maps verifications, CAPI integrations, and analytics stacks.'}
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
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white group-hover:text-amber-300 transition-colors">
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

                          {/* Items Grid (Lively Dynamic Cards - Zero Orphaned Boxes!) */}
                          <div className={`grid gap-4 sm:gap-5 ${getDynamicGridCols(group.items.length)}`}>
                            {group.items.map((item, iIdx) => {
                              const IconComponent = getModuleIcon(item.title)

                              return (
                                <div
                                  key={iIdx}
                                  onClick={() => scrollToContact(item.title)}
                                  className="group/item relative bg-gradient-to-b from-slate-800/90 via-slate-900/90 to-slate-950/90 hover:from-slate-800 hover:to-slate-900 p-6 rounded-3xl border border-slate-700/70 hover:border-amber-400/80 shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
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
                                    <h5 className="text-base sm:text-lg font-bold text-white group-hover/item:text-amber-300 transition-colors leading-snug mb-2">
                                      {item.title}
                                    </h5>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-slate-400 group-hover/item:text-slate-300 leading-relaxed">
                                      {item.desc}
                                    </p>
                                  </div>

                                  {/* Bottom Action Link */}
                                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-400 group-hover/item:text-amber-400 transition-colors">
                                    <span className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                      <span>{lang === 'de' ? 'Setup anfragen' : lang === 'tr' ? 'Kurulum İste' : 'Inquire Setup'}</span>
                                    </span>
                                    <div className="w-7 h-7 rounded-lg bg-white/5 group-hover/item:bg-amber-500 group-hover/item:text-slate-950 flex items-center justify-center transition-all duration-200">
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
