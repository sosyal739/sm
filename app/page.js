'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MessageCircle, CheckCircle, BarChart3, Users, Award, TrendingUp, Globe, Star, Sparkles, ArrowRight, Clock, Calendar, Flame, Cpu, Zap, Search, ShieldCheck, Layers, BookOpen, Menu, X, ChevronRight, MessageSquare } from 'lucide-react'
import CookieConsent from '@/components/CookieConsent'
import RoasCalculatorWidget from '@/components/RoasCalculatorWidget'
import LeadFunnelWizard from '@/components/LeadFunnelWizard'

const translations = {
  tr: {
    nav: {
      services: 'Hizmetler',
      success: 'Başarılar',
      about: 'Hakkımda',
      contact: 'İletişim'
    },
    hero: {
      title: 'Dijital Pazarlama & Google Ads Uzmanı',
      subtitle: 'Almanya & Avrupa Genelinde Google Ads, Meta Ads ve SEO ile Cironuzu Katlayın',
      description: 'Dijital dünyada kaybolmayın. 17+ yıllık tecrübe ve Resmi Google Partner güvencesiyle işletmeniz için ölçülebilir, yüksek ROAS sağlayan ve dönüşüm odaklı performans sistemleri kuruyoruz.',
      cta1: 'WhatsApp',
      cta2: 'Hemen Teklif Alın',
      clients: 'Mutlu Müşteri & Şirket'
    },
    stats: {
      experience: 'Yıllık Tecrübe',
      keywords: 'Kelimede 1. Sıra',
      brands: 'Marka Tecrübesi',
      traffic: 'Trafik Artışı',
      roi: 'ROI Artışı',
      focus: 'Dönüşüm & Satış'
    },
    technologies: {
      title: 'Kullanılan Profesyonel Teknolojiler'
    },
    why: {
      title: 'Dijital Pazarlama Hizmetlerimiz',
      subtitle: 'Hizmetlerimiz',
      services: [
        {
          title: 'Google Ads Yönetimi',
          description: 'Arama, Display, Shopping ve YouTube reklamlarında maksimum ROI. Profesyonel kampanya yönetimi ve optimizasyon.',
          slug: 'google-ads',
          icon: 'google-ads'
        },
        {
          title: 'Meta Ads (Facebook & Instagram)',
          description: 'Facebook ve Instagram\'da hedef kitlenize ulaşın. Detaylı hedefleme ve yüksek dönüşüm oranları.',
          slug: 'meta-ads',
          icon: 'meta'
        },
        {
          title: 'TikTok Ads',
          description: 'Genç ve dinamik kitleye ulaşın. Viral içerikler ve etkili kampanya yönetimiyle marka bilinirliğinizi artırın.',
          slug: 'tiktok-ads',
          icon: 'tiktok'
        },
        {
          title: 'X (Twitter) Ads',
          description: 'Trend konularda öne çıkın. Gerçek zamanlı etkileşim ve marka görünürlüğü için profesyonel X reklamları.',
          slug: 'x-ads',
          icon: 'x'
        },
        {
          title: 'SEO Hizmetleri',
          description: 'Google\'da üst sıralarda yer alın. İç SEO, dış SEO ve teknik SEO ile organik trafiğinizi katlamak.',
          slug: 'seo',
          icon: 'seo'
        },
        {
          title: 'Olumsuz Yorum Yönetimi',
          description: 'Google Maps ve Trustpilot\'taki haksız yorumları silin. İtibarınızı koruyun, güveninizi geri kazanın.',
          slug: 'yorum-yonetimi',
          icon: 'review'
        },
        {
          title: 'Reklam & Tracking Kurulumu',
          description: 'Google Ads, GA4 E-Ticaret, Search Console, GMC, Meta Pixel, CAPI, sGTM ve Google Haritalar anahtar teslim kurulumu.',
          slug: 'server-side-tracking',
          icon: 'tracking'
        },
        {
          title: 'YouTube Ads & Video Pazarlama',
          description: 'Sanatçılar, e-ticaret ve markalar için 23.1M+ izlenme tecrübesiyle YouTube Shorts, In-Stream ve Bumper reklam stratejileri.',
          slug: 'youtube-ads',
          icon: 'youtube'
        }
      ]
    },
    success: {
      title: 'Tahminlerle Değil, Verilerle Büyüyün',
      subtitle: 'Kanıtlanmış Başarı',
      description: 'Herkes "garanti" verirken, biz size gerçekleri sunuyoruz. Doğru bir dijital pazarlama uzmanı ile çalışmak; sadece tıklama sayısını artırmak değil, işletmenize giren potansiyel müşteri sayısını ve ciroyu katlamaktır.',
      metrics: [
        { title: 'Ciro Artışı', subtitle: 'E-Ticaret' },
        { title: '1. Sıra Hakimiyeti', subtitle: 'Google' },
        { title: 'Görünürlük Rekoru', subtitle: 'Marka' },
        { title: 'Trafik Patlaması', subtitle: 'Organik' }
      ]
    },
    proofGallery: {
      badge: 'GERÇEK GOOGLE ADS PANEL VERİLERİ',
      title: 'Tahminlerle Değil, 1.13M€+ Yönetilen Canlı Panel Verileriyle Konuşuyoruz',
      description: 'Yapay zeka şablonları veya süslü vaatler değil; bizzat yönettiğimiz Google Ads ve YouTube hesaplarından alınan doğrulanmış canlı sonuçlar.',
      cards: [
        {
          title: '1.13M€+ Yönetilen Bütçe & 208.000+ Dönüşüm',
          subtitle: 'Google Ads Arama & Alışveriş',
          stat: '1.74M Tıklama / 150M Gösterim',
          desc: '10 yıllık doğrulanmış kampanya verisi: 1.13 Milyon € yönetilen bütçe ile 208.000 adet onaylanmış sipariş ve müşteri dönüşümü.',
          image: '/proof/google-ads-1-13m-spend-208k-conv.png',
          badge: '1.13M€ SPEND'
        },
        {
          title: '%1.104,05 (11.04x) E-Ticaret Rekor ROAS',
          subtitle: 'Performans & Satış Zirvesi',
          stat: '119.000 Dönüşüm / 204K Tıklama',
          desc: 'Google Ads e-ticaret kampanyalarında %1.104 ROAS getiri oranı. Harcanan her 100€ için 1.104€ net ciro üretimi.',
          image: '/proof/google-ads-roas-1104.png',
          badge: '11.04x ROAS'
        },
        {
          title: '23.1 Milyon+ YouTube TrueView İzlenme & 720 Kampanya',
          subtitle: 'Sanatçılar & Prodüksiyon Şirketleri',
          stat: '124M Gösterim / 23.1M İzlenme',
          desc: 'Tanınmış sanatçıların ve müzik kliplerinin milyonlarca gerçek kitleye ulaşmasını sağlayan 720+ başarılı YouTube Ads kampanyası.',
          image: '/proof/youtube-ads-23m-views-720-campaigns.png',
          badge: '23.1M VIEWS'
        },
        {
          title: '%64.78 Video Etkileşim Oranı & 19.3M İzlenme',
          subtitle: 'YouTube Ads Hedef Kitle Hakimiyeti',
          stat: '40M Gösterim / 19.3M İzlenme',
          desc: 'Müzik ve kurumsal video tanıtımlarında %64.78 etkileşim oranıyla organik algoritmayı tetikleyen placement kurgusu.',
          image: '/proof/youtube-ads-19m-views.png',
          badge: '%64.78 INTERACTION'
        }
      ]
    },
    corporate: {
      title: 'Size Özel Büyüme Planı Hazırlayalım',
      subtitle: 'Standart Paketler Size Göre Değil mi?',
      description: 'Her işletmenin dinamikleri farklıdır. Hedeflerinize, bütçenize ve sektörünüze uygun; tamamen size özel kurgulanmış bir dijital pazarlama stratejisi için masaya oturalım.',
      cta: 'Hemen Teklif Alın',
      features: [
        { title: 'Sektörel Rekabet Analizi', description: 'Rakiplerinizin önüne geçmeniz için derinlemesine pazar araştırması.' },
        { title: '7/24 Öncelikli Destek', description: 'Sorularınız ve acil durumlar için her zaman ulaşılabilir özel danışmanlık.' },
        { title: 'Kapsamlı Teknik Denetim', description: 'Sitenizin altyapısındaki en ufak hatayı bile tespit edip düzeltiyoruz.' },
        { title: 'Dönüşüm Optimizasyonu', description: 'Sadece trafik değil, gelen ziyaretçiyi müşteriye çevirecek stratejiler.' }
      ]
    },
    testimonials: {
      title: 'Müşterilerimizin Gözünden Deneyim',
      subtitle: 'Müşteri Deneyimi',
      rating: 'Google İşletme Profili Puanı',
      reviews: [
        {
          name: 'Mehmet Yılmaz',
          role: 'E-Ticaret Sahibi',
          text: 'Google Ads kampanyalarımız için profesyonel bir uzman arayışındaydık. Salih Bey ile çalışmaya başladıktan sadece 2 ay sonra satışlarımız %180 arttı. Özellikle kampanya yönetimi ve ROI optimizasyonu konusundaki hakimiyeti mükemmel.',
          rating: 5
        },
        {
          name: 'Anna Weber',
          role: 'Klinik Sahibi',
          text: 'Kliniğimiz için Google ve Facebook reklamları yaptık. Eskiden haritalarda hiç çıkmazken şimdi bölgemizde ilk sıradayız. Telefonlarımız susmuyor. İşini gerçekten bilen, dürüst ve şeffaf bir uzman.',
          rating: 5
        },
        {
          name: 'Kemal Öztürk',
          role: 'Restoran Sahibi',
          text: 'Daha önce farklı ajanslarla çalıştık ama verim alamadık. Salih Bey ile çalışmaya başladığımızdan beri raporlamalar o kadar net ki paramızın nereye gittiğini biliyoruz. Kesinlikle öneririm.',
          rating: 5
        }
      ]
    },
    about: {
      title: 'Sıradan Bir Hizmet Değil, Dijital Hakimiyet Sunuyoruz',
      subtitle: 'Neden Salih Maral?',
      features: [
        {
          title: 'Veri Odaklı Strateji',
          description: 'Varsayımlarla hareket etmiyoruz. Rakiplerinizin her adımını ve reklam algoritmalarını analiz eden matematiksel bir yaklaşımla, başarınızı şansa bırakmıyoruz.'
        },
        {
          title: 'Teknik Mükemmellik',
          description: 'Kampanya kurulumundan hedef kitle segmentasyonuna kadar her detayı optimize ediyoruz. Maksimum ROI için sürekli test ve iyileştirme yapıyoruz.'
        },
        {
          title: 'Butik Hizmet',
          description: 'Fabrikasyon işler yapmıyoruz. Sınırlı sayıda müşteri kabul ederek, markanıza hak ettiği zamanı ayıran özel bir uzman ile birebir çalışırsınız.'
        },
        {
          title: 'Satış Odaklı Büyüme',
          description: 'Trafik bir araçtır, amaç ise satıştır. Hedefimiz sadece tıklama sayısını artırmak değil, dönüşüm oranlarını artırarak cironuzu maksimize etmektir.'
        },
        {
          title: 'Şeffaf Raporlama',
          description: 'Gizli saklı yok. "Ne yaptık, ne harcadık, ne kazandık?" sorularının cevabını her ay net, anlaşılır ve detaylı raporlarla masanıza koyuyoruz.'
        },
        {
          title: '7/24 Kesintisiz Destek',
          description: 'Ulaşılamayan ajanslardan sıkıldınız mı? Acil durumlarda ve aklınıza takılan her soruda, bir telefon kadar yakınınızda olan çözüm ortağınızız.'
        }
      ]
    },
    contact: {
      title: 'Dijital Pazarlama Uzmanı ile İletişime Geçin',
      subtitle: 'İşletmenizin büyümesine nasıl yardımcı olabileceğimizi keşfedin.',
      form: {
        name: 'Adınız Soyadınız',
        email: 'E-posta Adresiniz',
        phone: 'Telefon Numaranız',
        message: 'Mesajınız',
        submit: 'Mesajı Gönder',
        success: 'Mesajınız başarıyla gönderildi!',
        error: 'Bir hata oluştu. Lütfen tekrar deneyin.'
      },
      cta: {
        title: 'Bir Dijital Pazarlama Uzmanıyla Konuşmaya Hazır Mısınız?',
        description: 'Dijital dünyada kaybolmak yerine, doğru stratejilerle öne çıkın. Sorularınızı yanıtlamak ve size özel çözümler üretmek için buradayım.',
        call: 'Bizi Arayın',
        whatsapp: 'WhatsApp\'tan Yazın'
      }
    },
    footer: {
      description: 'Google Ads, Meta Ads ve SEO ile işletmenizi dijital dünyada zirveye taşıyoruz.',
      rights: 'Tüm hakları saklıdır.',
      about: 'Hakkımızda'
    }
  },
  de: {
    nav: {
      services: 'Dienstleistungen',
      success: 'Erfolge',
      about: 'Über mich',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Google Ads & Digital Marketing Experte',
      subtitle: 'Google Ads Agentur, Meta Ads & SEO für planbaren ROI in Deutschland',
      description: 'Verlieren Sie sich nicht im Chaos. Als offizieller Google Partner mit 17+ Jahren Erfahrung in Frankfurt & bundesweit bauen wir datengesteuerte, hochprofitable Performance-Systeme für Ihr Unternehmen auf.',
      cta1: 'WhatsApp',
      cta2: 'Kostenloses Angebot',
      clients: 'Zufriedene Kunden & Firmen'
    },
    stats: {
      experience: 'Jahre Erfahrung',
      keywords: 'Keywords auf Platz 1',
      brands: 'Markenerfahrung',
      traffic: 'Traffic-Steigerung',
      roi: 'ROI-Steigerung',
      focus: 'Konversion & Verkauf'
    },
    technologies: {
      title: 'Verwendete professionelle Technologien'
    },
    why: {
      title: 'Unsere Digital Marketing Dienstleistungen',
      subtitle: 'Unsere Dienstleistungen',
      services: [
        {
          title: 'Google Ads Management',
          description: 'Maximaler ROI in Such-, Display-, Shopping- und YouTube-Anzeigen. Professionelles Kampagnenmanagement.',
          slug: 'google-ads',
          icon: 'google-ads'
        },
        {
          title: 'Meta Ads (Facebook & Instagram)',
          description: 'Erreichen Sie Ihre Zielgruppe auf Facebook und Instagram. Detailliertes Targeting und hohe Conversion-Raten.',
          slug: 'meta-ads',
          icon: 'meta'
        },
        {
          title: 'TikTok Ads',
          description: 'Erreichen Sie ein junges, dynamisches Publikum. Steigern Sie Ihre Markenbekanntheit mit viralen Inhalten.',
          slug: 'tiktok-ads',
          icon: 'tiktok'
        },
        {
          title: 'X (Twitter) Ads',
          description: 'Heben Sie sich bei Trendthemen hervor. Professionelle X-Werbung für Echtzeit-Engagement und Markensichtbarkeit.',
          slug: 'x-ads',
          icon: 'x'
        },
        {
          title: 'SEO Dienstleistungen',
          description: 'Erreichen Sie Top-Rankings bei Google. On-Page, Off-Page und technisches SEO für mehr organischen Traffic.',
          slug: 'seo',
          icon: 'seo'
        },
        {
          title: 'Negative Bewertungen Löschen',
          description: 'Entfernen Sie ungerechte Bewertungen bei Google Maps und Trustpilot. Schützen Sie Ihren Ruf.',
          slug: 'yorum-yonetimi',
          icon: 'review'
        },
        {
          title: 'Werbekonto- & Tracking-Setup',
          description: 'Google Ads Eröffnung, Verifizierung, GA4, Search Console, GMC, Meta Pixel, CAPI, sGTM und Google Maps schlüsselfertig.',
          slug: 'server-side-tracking',
          icon: 'tracking'
        }
      ]
    },
    success: {
      title: 'Wachsen Sie mit Daten, nicht mit Schätzungen',
      subtitle: 'Bewährter Erfolg',
      description: 'Während jeder "Garantien" gibt, präsentieren wir Ihnen die Fakten. Die Arbeit mit dem richtigen Digital Marketing Experten bedeutet nicht nur die Erhöhung der Klickzahlen, sondern die Vervielfachung der potenziellen Kunden und des Umsatzes Ihres Unternehmens.',
      metrics: [
        { title: 'Umsatzsteigerung', subtitle: 'E-Commerce' },
        { title: 'Platz 1 Dominanz', subtitle: 'Google' },
        { title: 'Sichtbarkeitsrekord', subtitle: 'Marke' },
        { title: 'Traffic-Explosion', subtitle: 'Organisch' }
      ]
    },
    proofGallery: {
      badge: 'VERIFIZIERTE GOOGLE ADS DASHBOARDS',
      title: 'Keine Spekulationen: 1,13 Mio. €+ verwaltetes Werbebudget & Live-Dashboards',
      description: 'Keine KI-Versprechungen oder leere Worte: Verifizierte Live-Ergebnisse aus unseren direkt betreuten Google Ads- und YouTube-Konten.',
      cards: [
        {
          title: '1,13 Mio. € Budget & 208.000+ Conversions',
          subtitle: 'Google Ads Search & Shopping',
          stat: '1,74M Klicks / 150M Impressionen',
          desc: '10 Jahre verifizierte Kampagnenhistorie: Mit 1,13 Mio. € Budget wurden über 208.000 bestätigte Kundenanfragen und Verkäufe generiert.',
          image: '/proof/google-ads-1-13m-spend-208k-conv.png',
          badge: '1.13M€ BUDGET'
        },
        {
          title: '1.104,05 % (11,04x) E-Commerce Rekord-ROAS',
          subtitle: 'Performance & Umsatz-Skalierung',
          stat: '119.000 Conversions / 204K Klicks',
          desc: 'Google Ads E-Commerce Kampagne mit 1.104 % ROAS. Für jeden eingesetzten Euro Werbebudget wurden 11,04 € Netto-Umsatz erzielt.',
          image: '/proof/google-ads-roas-1104.png',
          badge: '11.04x ROAS'
        },
        {
          title: '23,1 Mio.+ YouTube TrueView Views & 720 Kampagnen',
          subtitle: 'Künstler, Musikvideos & Brands',
          stat: '124M Impressionen / 23,1M Views',
          desc: 'Über 720 erfolgreiche YouTube Ads Kampagnen für Musikkünstler und Unternehmen zur nachhaltigen organischen Skalierung.',
          image: '/proof/youtube-ads-23m-views-720-campaigns.png',
          badge: '23.1M VIEWS'
        },
        {
          title: '64,78 % Interaktionsrate & 19,3M Views',
          subtitle: 'YouTube Ads Zielgruppen-Präzision',
          stat: '40M Impressionen / 19,3M Views',
          desc: 'Extrem hohe Video-Engagement-Raten zur Aktivierung des YouTube-Empfehlungsalgorithmus.',
          image: '/proof/youtube-ads-19m-views.png',
          badge: '64.78% INTERACTION'
        }
      ]
    },
    corporate: {
      title: 'Lassen Sie uns einen maßgeschneiderten Wachstumsplan für Sie erstellen',
      subtitle: 'Passen Standard-Pakete nicht zu Ihnen?',
      description: 'Jedes Unternehmen hat unterschiedliche Dynamiken. Lassen Sie uns für eine auf Ihre Ziele, Ihr Budget und Ihre Branche zugeschnittene Digital Marketing Strategie zusammensetzen.',
      cta: 'Jetzt Angebot anfordern',
      features: [
        { title: 'Branchenwettbewerbsanalyse', description: 'Tiefgehende Marktforschung, damit Sie Ihre Konkurrenten überholen können.' },
        { title: '24/7 Prioritäts-Support', description: 'Immer erreichbare Spezialberatung für Ihre Fragen und Notfälle.' },
        { title: 'Umfassendes technisches Audit', description: 'Wir erkennen und beheben selbst den kleinsten Fehler in der Infrastruktur Ihrer Website.' },
        { title: 'Conversion-Optimierung', description: 'Nicht nur Traffic, sondern Strategien, die Besucher in Kunden verwandeln.' }
      ]
    },
    testimonials: {
      title: 'Erfahrung aus Sicht unserer Kunden',
      subtitle: 'Kundenerfahrung',
      rating: 'Google Business Profil Bewertung',
      reviews: [
        {
          name: 'Michael Schmidt',
          role: 'E-Commerce Inhaber',
          text: 'Wir suchten einen professionellen Experten für unsere Google Ads-Kampagnen. Nur 2 Monate nach Beginn der Zusammenarbeit mit Herrn Maral stiegen unsere Verkäufe um 180%. Seine Beherrschung des Kampagnenmanagements und der ROI-Optimierung ist ausgezeichnet.',
          rating: 5
        },
        {
          name: 'Anna Weber',
          role: 'Klinikbesitzerin',
          text: 'Wir haben Google- und Facebook-Anzeigen für unsere Klinik gemacht. Früher erschienen wir nie auf Karten, jetzt sind wir in unserer Region an erster Stelle. Unsere Telefone hören nicht auf zu klingeln. Ein wirklich sachkundiger, ehrlicher und transparenter Experte.',
          rating: 5
        },
        {
          name: 'Thomas Müller',
          role: 'Restaurant-Besitzer',
          text: 'Wir haben zuvor mit verschiedenen Agenturen zusammengearbeitet, aber keine Ergebnisse erzielt. Seit wir mit Herrn Maral arbeiten, sind die Berichte so klar, dass wir wissen, wohin unser Geld fließt. Ich empfehle ihn auf jeden Fall.',
          rating: 5
        }
      ]
    },
    about: {
      title: 'Kein gewöhnlicher Service, wir bieten digitale Dominanz',
      subtitle: 'Warum Salih Maral?',
      features: [
        {
          title: 'Datengetriebene Strategie',
          description: 'Wir handeln nicht mit Annahmen. Mit einem mathematischen Ansatz, der jeden Schritt Ihrer Konkurrenten und Werbealgorithmen analysiert, überlassen wir Ihren Erfolg nicht dem Zufall.'
        },
        {
          title: 'Technische Exzellenz',
          description: 'Wir optimieren jedes Detail vom Kampagnen-Setup bis zur Zielgruppensegmentierung. Wir führen kontinuierliche Tests und Verbesserungen für maximalen ROI durch.'
        },
        {
          title: 'Boutique-Service',
          description: 'Wir machen keine Fließbandarbeit. Durch die Annahme einer begrenzten Anzahl von Kunden arbeiten Sie direkt mit einem Spezialisten zusammen, der Ihrer Marke die Zeit widmet, die sie verdient.'
        },
        {
          title: 'Verkaufsorientiertes Wachstum',
          description: 'Traffic ist ein Werkzeug, das Ziel ist der Verkauf. Unser Ziel ist es nicht nur, die Anzahl der Klicks zu erhöhen, sondern Ihren Umsatz durch Erhöhung der Conversion-Raten zu maximieren.'
        },
        {
          title: 'Transparentes Reporting',
          description: 'Nichts Verstecktes. Die Antworten auf die Fragen "Was haben wir getan, was haben wir ausgegeben, was haben wir gewonnen?" legen wir Ihnen jeden Monat in klaren, verständlichen und detaillierten Berichten vor.'
        },
        {
          title: '24/7 ununterbrochener Support',
          description: 'Sind Sie es leid, unerreichbare Agenturen zu haben? Ihr Lösungspartner ist nur einen Anruf entfernt bei Notfällen und jeder Frage, die Ihnen in den Sinn kommt.'
        }
      ]
    },
    contact: {
      title: 'Kontaktieren Sie den Digital Marketing Experten',
      subtitle: 'Entdecken Sie, wie wir Ihrem Unternehmen beim Wachstum helfen können.',
      form: {
        name: 'Ihr Name',
        email: 'Ihre E-Mail-Adresse',
        phone: 'Ihre Telefonnummer',
        message: 'Ihre Nachricht',
        submit: 'Nachricht senden',
        success: 'Ihre Nachricht wurde erfolgreich gesendet!',
        error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
      },
      cta: {
        title: 'Sind Sie bereit, mit einem Digital Marketing Experten zu sprechen?',
        description: 'Anstatt in der digitalen Welt verloren zu gehen, heben Sie sich mit den richtigen Strategien ab. Ich bin hier, um Ihre Fragen zu beantworten und maßgeschneiderte Lösungen für Sie zu entwickeln.',
        call: 'Rufen Sie uns an',
        whatsapp: 'Schreiben Sie über WhatsApp'
      }
    },
    footer: {
      description: 'Wir bringen Ihr Unternehmen mit Google Ads, Meta Ads und SEO an die Spitze der digitalen Welt.',
      rights: 'Alle Rechte vorbehalten.',
      about: 'Über uns'
    }
  },
  en: {
    nav: {
      services: 'Services',
      success: 'Success',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Google Ads & Digital Marketing Specialist',
      subtitle: 'Scale Your Business in Germany & Europe with Google Ads, Meta Ads & SEO',
      description: 'Stop guessing your marketing spend. As an official Google Partner with 17+ years of experience, we build high-ROAS, data-driven customer acquisition systems that consistently grow your revenue.',
      cta1: 'WhatsApp',
      cta2: 'Get Free Proposal',
      clients: 'Happy Clients & Brands'
    },
    stats: {
      experience: 'Years of Experience',
      keywords: 'Keywords in 1st Place',
      brands: 'Brand Experience',
      traffic: 'Traffic Increase',
      roi: 'ROI Increase',
      focus: 'Conversion & Sales'
    },
    technologies: {
      title: 'Professional Technologies Used'
    },
    why: {
      title: 'Our Digital Marketing Services',
      subtitle: 'Our Services',
      services: [
        {
          title: 'Google Ads Management',
          description: 'Maximum ROI in Search, Display, Shopping and YouTube ads. Professional campaign management and optimization.',
          slug: 'google-ads',
          icon: 'google-ads'
        },
        {
          title: 'Meta Ads (Facebook & Instagram)',
          description: 'Reach your target audience on Facebook and Instagram. Detailed targeting and high conversion rates.',
          slug: 'meta-ads',
          icon: 'meta'
        },
        {
          title: 'TikTok Ads',
          description: 'Reach a young, dynamic audience. Increase your brand awareness with viral content and effective campaigns.',
          slug: 'tiktok-ads',
          icon: 'tiktok'
        },
        {
          title: 'X (Twitter) Ads',
          description: 'Stand out in trending topics. Professional X advertising for real-time engagement and brand visibility.',
          slug: 'x-ads',
          icon: 'x'
        },
        {
          title: 'SEO Services',
          description: 'Achieve top rankings on Google. On-page, off-page and technical SEO to multiply your organic traffic.',
          slug: 'seo',
          icon: 'seo'
        },
        {
          title: 'Negative Review Management',
          description: 'Remove unfair reviews on Google Maps and Trustpilot. Protect your reputation and restore trust.',
          slug: 'yorum-yonetimi',
          icon: 'review'
        },
        {
          title: 'Ad Account & Tracking Setup',
          description: 'Turnkey setup for Google Ads, advertiser verification, GA4 E-commerce, Search Console, GMC, Meta CAPI, sGTM and Google Maps.',
          slug: 'server-side-tracking',
          icon: 'tracking'
        }
      ]
    },
    success: {
      title: 'Grow with Data, Not Estimates',
      subtitle: 'Proven Success',
      description: 'While everyone gives "guarantees", we present you with the facts. Working with the right digital marketing expert means not just increasing click numbers, but multiplying the number of potential customers and revenue entering your business.',
      metrics: [
        { title: 'Revenue Growth', subtitle: 'E-Commerce' },
        { title: '1st Place Dominance', subtitle: 'Google' },
        { title: 'Visibility Record', subtitle: 'Brand' },
        { title: 'Traffic Explosion', subtitle: 'Organic' }
      ]
    },
    proofGallery: {
      badge: 'VERIFIED GOOGLE ADS DASHBOARDS',
      title: 'Proven Evidence: Over €1.13M+ Managed Ad Spend & Live Dashboards',
      description: 'No AI fluff or empty guarantees: Verified real-world campaign dashboards directly managed by Salih Maral (Google Partner).',
      cards: [
        {
          title: '€1.13M+ Managed Ad Spend & 208,000+ Conversions',
          subtitle: 'Google Ads Search & Shopping',
          stat: '1.74M Clicks / 150M Impressions',
          desc: '10-year verified track record: €1.13M in managed ad spend producing 208,000+ confirmed sales and qualified client inquiries.',
          image: '/proof/google-ads-1-13m-spend-208k-conv.png',
          badge: '€1.13M SPEND'
        },
        {
          title: '1,104.05% (11.04x) E-Commerce Record ROAS',
          subtitle: 'Performance & Revenue Peak',
          stat: '119,000 Conversions / 204K Clicks',
          desc: 'Google Ads e-commerce campaigns achieving 1,104% ROAS—generating €11.04 in revenue for every single Euro spent.',
          image: '/proof/google-ads-roas-1104.png',
          badge: '11.04x ROAS'
        },
        {
          title: '23.1M+ YouTube TrueView Views & 720 Campaigns',
          subtitle: 'Music Artists & Production Companies',
          stat: '124M Impressions / 23.1M Views',
          desc: '720+ campaigns scaling music video releases and brand spots to millions of engaged organic viewers.',
          image: '/proof/youtube-ads-23m-views-720-campaigns.png',
          badge: '23.1M VIEWS'
        },
        {
          title: '64.78% Video Interaction Rate & 19.3M Views',
          subtitle: 'YouTube Audience Precision',
          stat: '40M Impressions / 19.3M Views',
          desc: 'High-retention TrueView targeting designed to trigger YouTube algorithmic recommendations.',
          image: '/proof/youtube-ads-19m-views.png',
          badge: '64.78% INTERACTION'
        }
      ]
    },
    corporate: {
      title: "Let's Prepare a Custom Growth Plan for You",
      subtitle: 'Standard Packages Not for You?',
      description: 'Every business has different dynamics. Let\'s sit at the table for a digital marketing strategy completely tailored to your goals, budget and industry.',
      cta: 'Get a Quote Now',
      features: [
        { title: 'Industry Competition Analysis', description: 'In-depth market research for you to get ahead of your competitors.' },
        { title: '24/7 Priority Support', description: 'Always accessible special consulting for your questions and emergencies.' },
        { title: 'Comprehensive Technical Audit', description: 'We detect and fix even the smallest error in your website\'s infrastructure.' },
        { title: 'Conversion Optimization', description: 'Not just traffic, but strategies that will turn visitors into customers.' }
      ]
    },
    testimonials: {
      title: 'Experience from Our Clients\' Perspective',
      subtitle: 'Client Experience',
      rating: 'Google Business Profile Rating',
      reviews: [
        {
          name: 'John Smith',
          role: 'E-Commerce Owner',
          text: 'We were looking for a professional expert for our Google Ads campaigns. Just 2 months after starting to work with Mr. Maral, our sales increased by 180%. His mastery of campaign management and ROI optimization is excellent.',
          rating: 5
        },
        {
          name: 'Sarah Johnson',
          role: 'Clinic Owner',
          text: 'We did Google and Facebook ads for our clinic. We never appeared on maps before, now we are in first place in our region. Our phones don\'t stop ringing. A truly knowledgeable, honest and transparent expert.',
          rating: 5
        },
        {
          name: 'Robert Brown',
          role: 'Restaurant Owner',
          text: 'We worked with different agencies before but didn\'t get results. Since we started working with Mr. Maral, the reports are so clear that we know where our money is going. I definitely recommend him.',
          rating: 5
        }
      ]
    },
    about: {
      title: 'Not an Ordinary Service, We Offer Digital Dominance',
      subtitle: 'Why Salih Maral?',
      features: [
        {
          title: 'Data-Driven Strategy',
          description: "We don't act with assumptions. With a mathematical approach that analyzes every move of your competitors and advertising algorithms, we don't leave your success to chance."
        },
        {
          title: 'Technical Excellence',
          description: 'We optimize every detail from campaign setup to audience segmentation. We do continuous testing and improvement for maximum ROI.'
        },
        {
          title: 'Boutique Service',
          description: "We don't do assembly line work. By accepting a limited number of clients, you work directly with a specialist who dedicates the time your brand deserves."
        },
        {
          title: 'Sales-Oriented Growth',
          description: 'Traffic is a tool, the goal is sales. Our goal is not just to increase the number of clicks, but to maximize your revenue by increasing conversion rates.'
        },
        {
          title: 'Transparent Reporting',
          description: 'Nothing hidden. We put the answers to the questions "What did we do, what did we spend, what did we win?" on your table every month in clear, understandable and detailed reports.'
        },
        {
          title: '24/7 Uninterrupted Support',
          description: 'Tired of unreachable agencies? Your solution partner is just a phone call away in emergencies and any question that comes to your mind.'
        }
      ]
    },
    contact: {
      title: 'Get in Touch with the Digital Marketing Expert',
      subtitle: 'Discover how we can help your business grow.',
      form: {
        name: 'Your Name',
        email: 'Your Email Address',
        phone: 'Your Phone Number',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Your message has been sent successfully!',
        error: 'An error occurred. Please try again.'
      },
      cta: {
        title: 'Ready to Talk to a Digital Marketing Expert?',
        description: 'Instead of getting lost in the digital world, stand out with the right strategies. I am here to answer your questions and create customized solutions for you.',
        call: 'Call Us',
        whatsapp: 'Message on WhatsApp'
      }
    },
    footer: {
      description: 'We take your business to the top of the digital world with Google Ads, Meta Ads and SEO.',
      rights: 'All rights reserved.',
      about: 'About Us'
    }
  }
}

export default function Home({ initialLang = 'de' }) {
  const [lang, setLang] = useState(initialLang)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [latestPosts, setLatestPosts] = useState([])
  const [blogCategory, setBlogCategory] = useState('all')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Language change navigates to the correct URL
  const handleLanguageChange = (newLang) => {
    localStorage.setItem('preferredLanguage', newLang)
    if (newLang === 'de') {
      window.location.href = '/'
    } else {
      window.location.href = `/${newLang}`
    }
  }

  // Update html lang attribute for SEO
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Fetch real blog posts dynamically
  useEffect(() => {
    const controller = new AbortController()
    fetch(`/api/blog?lang=${lang}`, { signal: controller.signal })
      .then(res => res.ok ? res.json() : [])
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setLatestPosts(data)
        }
      })
      .catch(() => {})
    return () => controller.abort()
  }, [lang])

  // Helper: get localized service URL
  const svcUrl = (targetLang, slug) => {
    const path = targetLang === 'de' ? 'dienstleistungen' : targetLang === 'en' ? 'services' : 'hizmetler'
    let s = slug
    if (slug === 'yorum-yonetimi') {
      s = targetLang === 'de' ? 'bewertungsmanagement' : targetLang === 'en' ? 'review-management' : 'yorum-yonetimi'
    }
    return `/${targetLang}/${path}/${s}`
  }

  const t = translations[lang]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, language: lang })
      })

      if (response.ok) {
        setFormStatus({ type: 'success', message: t.contact.form.success })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setFormStatus({ type: 'error', message: t.contact.form.error })
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: t.contact.form.error })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* SEO JSON-LD & Metadata */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': `https://salihmaral.de${lang === 'de' ? '/' : `/${lang}`}#webpage`,
              url: `https://salihmaral.de${lang === 'de' ? '/' : `/${lang}`}`,
              name: lang === 'de' ? 'Salih Maral - Digital Marketing Experte' : lang === 'tr' ? 'Salih Maral - Dijital Pazarlama Uzmanı' : 'Salih Maral - Digital Marketing Expert',
              isPartOf: { '@id': 'https://salihmaral.de/#website' },
              about: { '@id': 'https://salihmaral.de/#organization' },
              description: t.hero.description,
              inLanguage: lang === 'de' ? 'de-DE' : lang === 'tr' ? 'tr-TR' : 'en-US'
            },
            {
              '@type': 'SiteNavigationElement',
              '@id': `https://salihmaral.de${lang === 'de' ? '/' : `/${lang}`}#navigation`,
              name: lang === 'de' ? 'Hauptnavigation' : lang === 'tr' ? 'Ana Navigasyon' : 'Main Navigation',
              hasPart: [
                {
                  '@type': 'SiteNavigationElement',
                  name: lang === 'de' ? 'Google Ads Management' : lang === 'tr' ? 'Google Ads Yönetimi' : 'Google Ads Management',
                  description: lang === 'de' ? 'Maximaler ROI in Such-, Display-, Shopping- und YouTube-Kampagnen' : lang === 'tr' ? 'Arama, Display, Shopping ve YouTube kampanyalarında maksimum ROI' : 'Maximum ROI in Search, Display, Shopping and YouTube campaigns',
                  url: `https://salihmaral.de/${lang}/${lang === 'de' ? 'dienstleistungen' : lang === 'en' ? 'services' : 'hizmetler'}/google-ads`
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: 'Meta Ads (Facebook & Instagram)',
                  description: lang === 'de' ? 'Erreichen Sie Ihre Zielgruppe auf Facebook und Instagram' : lang === 'tr' ? 'Facebook ve Instagram\'da hedef kitlenize ulaşın' : 'Reach your target audience on Facebook and Instagram',
                  url: `https://salihmaral.de/${lang}/${lang === 'de' ? 'dienstleistungen' : lang === 'en' ? 'services' : 'hizmetler'}/meta-ads`
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: 'TikTok Ads',
                  description: lang === 'de' ? 'Erreichen Sie ein junges, dynamisches Publikum' : lang === 'tr' ? 'Genç ve dinamik kitlelere ulaşın' : 'Reach a young, dynamic audience',
                  url: `https://salihmaral.de/${lang}/${lang === 'de' ? 'dienstleistungen' : lang === 'en' ? 'services' : 'hizmetler'}/tiktok-ads`
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: 'X (Twitter) Ads',
                  description: lang === 'de' ? 'Heben Sie sich bei Trendthemen hervor' : lang === 'tr' ? 'Trend konularda öne çıkın' : 'Stand out in trending topics',
                  url: `https://salihmaral.de/${lang}/${lang === 'de' ? 'dienstleistungen' : lang === 'en' ? 'services' : 'hizmetler'}/x-ads`
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: lang === 'de' ? 'SEO Dienstleistungen' : lang === 'tr' ? 'SEO Hizmetleri' : 'SEO Services',
                  description: lang === 'de' ? 'Erreichen Sie Top-Rankings bei Google' : lang === 'tr' ? 'Google\'da üst sıralara çıkın' : 'Achieve top rankings on Google',
                  url: `https://salihmaral.de/${lang}/${lang === 'de' ? 'dienstleistungen' : lang === 'en' ? 'services' : 'hizmetler'}/seo`
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: lang === 'de' ? 'Bewertungsmanagement' : lang === 'tr' ? 'Yorum Yönetimi' : 'Review Management',
                  description: lang === 'de' ? 'Professionelles Google Bewertungsmanagement' : lang === 'tr' ? 'Profesyonel Google yorum yönetimi' : 'Professional Google review management',
                  url: `https://salihmaral.de/${lang}/${lang === 'de' ? 'dienstleistungen' : lang === 'en' ? 'services' : 'hizmetler'}/${lang === 'de' ? 'bewertungsmanagement' : lang === 'en' ? 'review-management' : 'yorum-yonetimi'}`
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: 'Blog',
                  description: lang === 'de' ? 'Neueste Artikel über digitales Marketing' : lang === 'tr' ? 'Dijital pazarlama hakkında güncel makaleler' : 'Latest articles about digital marketing',
                  url: 'https://salihmaral.de/blog'
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: lang === 'de' ? 'Kontakt' : lang === 'tr' ? 'İletişim' : 'Contact',
                  description: lang === 'de' ? 'Kostenlose Beratung anfordern' : lang === 'tr' ? 'Ücretsiz danışmanlık talep edin' : 'Request a free consultation',
                  url: `https://salihmaral.de${lang === 'de' ? '/' : `/${lang}`}#contact`
                }
              ]
            },
            {
              '@type': 'ItemList',
              '@id': `https://salihmaral.de${lang === 'de' ? '/' : `/${lang}`}#services-list`,
              name: lang === 'de' ? 'Digital Marketing Dienstleistungen' : lang === 'tr' ? 'Dijital Pazarlama Hizmetleri' : 'Digital Marketing Services',
              numberOfItems: 6,
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: lang === 'de' ? 'Google Ads Management' : lang === 'tr' ? 'Google Ads Yönetimi' : 'Google Ads Management', url: `https://salihmaral.de${svcUrl(lang, 'google-ads')}` },
                { '@type': 'ListItem', position: 2, name: 'Meta Ads (Facebook & Instagram)', url: `https://salihmaral.de${svcUrl(lang, 'meta-ads')}` },
                { '@type': 'ListItem', position: 3, name: 'TikTok Ads', url: `https://salihmaral.de${svcUrl(lang, 'tiktok-ads')}` },
                { '@type': 'ListItem', position: 4, name: 'X (Twitter) Ads', url: `https://salihmaral.de${svcUrl(lang, 'x-ads')}` },
                { '@type': 'ListItem', position: 5, name: lang === 'de' ? 'SEO Dienstleistungen' : lang === 'tr' ? 'SEO Hizmetleri' : 'SEO Services', url: `https://salihmaral.de${svcUrl(lang, 'seo')}` },
                { '@type': 'ListItem', position: 6, name: lang === 'de' ? 'Bewertungsmanagement' : lang === 'tr' ? 'Yorum Yönetimi' : 'Review Management', url: `https://salihmaral.de${svcUrl(lang, 'yorum-yonetimi')}` }
              ]
            },
            {
              '@type': 'ProfessionalService',
              name: 'Salih Maral Digital Marketing',
              description: lang === 'de' ? 'Professionelle Digital Marketing Dienstleistungen' : lang === 'tr' ? 'Profesyonel Dijital Pazarlama Hizmetleri' : 'Professional Digital Marketing Services',
              url: `https://salihmaral.de${lang === 'de' ? '/' : `/${lang}`}`,
              priceRange: '€€',
              image: 'https://salihmaral.de/logo.png',
              areaServed: { '@type': 'Country', name: lang === 'de' ? 'Deutschland' : lang === 'tr' ? 'Almanya' : 'Germany' },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: lang === 'de' ? 'Digital Marketing Services' : lang === 'tr' ? 'Dijital Pazarlama Hizmetleri' : 'Digital Marketing Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads', url: `https://salihmaral.de${svcUrl(lang, 'google-ads')}` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads', url: `https://salihmaral.de${svcUrl(lang, 'meta-ads')}` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Ads', url: `https://salihmaral.de${svcUrl(lang, 'tiktok-ads')}` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'X Ads', url: `https://salihmaral.de${svcUrl(lang, 'x-ads')}` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO', url: `https://salihmaral.de${svcUrl(lang, 'seo')}` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: lang === 'de' ? 'Bewertungsmanagement' : lang === 'tr' ? 'Yorum Yönetimi' : 'Review Management', url: `https://salihmaral.de${svcUrl(lang, 'yorum-yonetimi')}` } }
                ]
              }
            }
          ]
        }) }} />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <a href={lang === 'de' ? '/' : `/${lang}`} className="flex items-center">
              <picture>
                <source srcSet="/logo-sm.webp" type="image/webp" />
                <img src="/logo.png" alt="Salih Maral Logo" className="h-9 sm:h-10 w-auto" width="40" height="40" />
              </picture>
            </a>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors flex items-center cursor-pointer">
                  {t.nav.services}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-slate-100 p-2">
                  <div className="space-y-1">
                    {t.why.services.map((service, idx) => (
                      <a
                        key={idx}
                        href={svcUrl(lang, service.slug)}
                        className="block px-3.5 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-[#4285F4]/10 hover:text-[#4285F4] transition-colors"
                      >
                        <div className="font-bold text-gray-900">{service.title}</div>
                        <div className="text-xs text-gray-500 line-clamp-1">{service.description}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <a href={lang === 'de' ? '/de/standorte' : lang === 'tr' ? '/tr/standorte' : '/en/standorte'} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">
                {lang === 'de' ? 'Standorte' : lang === 'tr' ? 'Şehirler' : 'Locations'}
              </a>
              <button onClick={() => scrollToSection('success')} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors cursor-pointer">{t.nav.success}</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors cursor-pointer">{t.nav.about}</button>
              <a href="/blog" className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">Blog</a>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors cursor-pointer">{t.nav.contact}</button>
            </div>

            {/* Right Side: Language Switcher + Mobile Hamburger Button */}
            <div className="flex items-center space-x-2">
              {/* Desktop Language Switcher */}
              <div className="hidden sm:flex items-center space-x-1.5 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
                <button
                  onClick={() => handleLanguageChange('de')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${lang === 'de' ? 'bg-[#4285F4] text-white shadow-xs' : 'text-slate-600 hover:text-gray-900'}`}
                >
                  DE
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${lang === 'en' ? 'bg-[#4285F4] text-white shadow-xs' : 'text-slate-600 hover:text-gray-900'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange('tr')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${lang === 'tr' ? 'bg-[#4285F4] text-white shadow-xs' : 'text-slate-600 hover:text-gray-900'}`}
                >
                  TR
                </button>
              </div>

              {/* Mobile Hamburger / Close Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl bg-slate-100 text-gray-900 hover:bg-slate-200 transition-colors cursor-pointer"
                aria-label="Toggle Mobile Navigation"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Mobile Drawer Menu (Ultra-Smooth Slide & Blur) */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-white/98 backdrop-blur-xl z-50 overflow-y-auto border-t border-slate-100 p-5 space-y-6 animate-in slide-in-from-top-4 duration-300 pb-28">
            {/* Mobile Language Switcher Tabs */}
            <div className="flex items-center justify-between bg-slate-100 p-1.5 rounded-2xl">
              <button
                onClick={() => { handleLanguageChange('de'); setIsMobileMenuOpen(false); }}
                className={`flex-1 py-2.5 text-xs font-bold rounded-xl text-center transition-all ${lang === 'de' ? 'bg-white text-[#4285F4] shadow-md' : 'text-slate-600'}`}
              >
                🇩🇪 Deutsch
              </button>
              <button
                onClick={() => { handleLanguageChange('en'); setIsMobileMenuOpen(false); }}
                className={`flex-1 py-2.5 text-xs font-bold rounded-xl text-center transition-all ${lang === 'en' ? 'bg-white text-[#4285F4] shadow-md' : 'text-slate-600'}`}
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => { handleLanguageChange('tr'); setIsMobileMenuOpen(false); }}
                className={`flex-1 py-2.5 text-xs font-bold rounded-xl text-center transition-all ${lang === 'tr' ? 'bg-white text-[#4285F4] shadow-md' : 'text-slate-600'}`}
              >
                🇹🇷 Türkçe
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 px-3">
                {lang === 'de' ? 'Dienstleistungen' : lang === 'tr' ? 'Hizmetlerimiz' : 'Services'}
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                {t.why.services.map((service, idx) => (
                  <a
                    key={idx}
                    href={svcUrl(lang, service.slug)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50/70 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-colors"
                  >
                    <span className="font-bold text-sm text-gray-900">{service.title}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Secondary Links */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 px-3">
                {lang === 'de' ? 'Navigation & Info' : lang === 'tr' ? 'Hızlı Erişim' : 'Quick Access'}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={lang === 'de' ? '/de/standorte' : lang === 'tr' ? '/tr/standorte' : '/en/standorte'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-slate-50 text-center font-bold text-sm text-gray-900 border border-slate-100"
                >
                  📍 {lang === 'de' ? '18 Standorte' : lang === 'tr' ? '18 Şehir' : '18 Locations'}
                </a>
                <a
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-slate-50 text-center font-bold text-sm text-gray-900 border border-slate-100"
                >
                  📚 Blog & News
                </a>
                <button
                  onClick={() => { scrollToSection('success'); setIsMobileMenuOpen(false); }}
                  className="p-3 rounded-xl bg-slate-50 text-center font-bold text-sm text-gray-900 border border-slate-100"
                >
                  🏆 {t.nav.success}
                </button>
                <button
                  onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }}
                  className="p-3 rounded-xl bg-slate-50 text-center font-bold text-sm text-gray-900 border border-slate-100"
                >
                  ℹ️ {t.nav.about}
                </button>
              </div>
            </div>

            {/* Quick Action CTA inside Drawer */}
            <div className="pt-2 space-y-2.5">
              <button
                onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
                className="w-full bg-[#4285F4] text-white font-black py-3.5 rounded-2xl shadow-lg flex items-center justify-center space-x-2 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{t.hero.cta2}</span>
              </button>
              <a
                href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20für%20Ihre%20Digital%20Marketing%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.' : 'Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-black py-3.5 rounded-2xl shadow-lg flex items-center justify-center space-x-2 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ({t.hero.cta1})</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section (Ultra-Modern Agency Glassmorphism & High-Impact Typography) */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50">
        {/* Ambient background glows */}
        <div className="absolute top-12 left-1/4 w-[600px] h-[350px] bg-blue-200/25 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-28 right-1/4 w-[500px] h-[300px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7 text-left">
              {/* Top Partner Badge */}
              <div className="inline-flex items-center space-x-2.5 bg-white/95 border border-slate-200/90 rounded-full px-5 py-2 shadow-sm backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
                  2026 {lang === 'de' ? 'Performance & Growth Strategien' : lang === 'en' ? 'Performance & Growth Strategies' : 'Performans & Büyüme Stratejileri'}
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-gray-900">
                {lang === 'de' ? (
                  <>Skalieren Sie Ihr Unternehmen mit <span className="text-[#4285F4]">Google Ads</span>, Meta Ads & SEO</>
                ) : lang === 'en' ? (
                  <>Scale Your Business with <span className="text-[#4285F4]">Google Ads</span>, Meta Ads & SEO</>
                ) : (
                  <>İşletmenizi <span className="text-[#4285F4]">Google Ads</span>, Meta Ads & SEO ile Büyütün</>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-2xl font-bold text-slate-800 leading-snug">
                {t.hero.subtitle}
              </p>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t.hero.description}
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#4285F4] hover:bg-[#3367d6] text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="h-5 w-5" />
                  <span>{t.hero.cta2}</span>
                  <ArrowRight className="h-5 w-5 ml-1" />
                </button>

                <a
                  href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20für%20Ihre%20Digital%20Marketing%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.' : 'Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 text-emerald-800 border border-emerald-200/90 hover:bg-emerald-100/90 font-bold text-base px-7 py-4 rounded-2xl shadow-sm hover:shadow transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  <span>{t.hero.cta1}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/70 max-w-md">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#4285F4] to-blue-400 border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-sm">SM</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#34A853] to-emerald-400 border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-sm">G</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1877F2] to-cyan-400 border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-sm">M</div>
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-bold text-gray-900">5.0</span>
                    <span className="text-amber-500 text-sm">★★★★★</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 ml-1">Doğrulanmış</span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">
                    {lang === 'de' ? '300+ Zufriedene Kunden & Unternehmen' : lang === 'en' ? '300+ Satisfied Clients & Brands' : '300+ Mutlu Müşteri & Marka'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual & Official Badges Showcase Column (Apple/Stripe Style Depth) */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              {/* Multi-layered ambient lighting behind photo */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

              {/* Main Showcase Container (Smooth 3D Floating Animation) */}
              <div className="relative w-full max-w-lg animate-hero-float">
                
                {/* Floating Top-Left Badge (Google Certified) */}
                <div className="hidden sm:flex absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-xl items-center gap-2.5 hover:scale-105 transition-transform duration-300 animate-badge-float1">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center p-1.5 shadow-xs">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="w-full h-full object-contain" width="24" height="24" loading="lazy" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-black text-gray-900">Google Ads Partner</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                    <p className="text-[10px] font-semibold text-slate-500">
                      {lang === 'de' ? 'Offiziell Zertifizierte Agentur' : lang === 'en' ? 'Officially Certified Agency' : 'Resmi Sertifikalı Ajans'}
                    </p>
                  </div>
                </div>

                {/* Hero Frame */}
                <div className="bg-white rounded-3xl p-3 sm:p-3.5 shadow-2xl border border-slate-200/90 overflow-hidden relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                    <picture>
                      <source media="(max-width: 640px)" srcSet="/hero-mobile.webp" type="image/webp" />
                      <source srcSet="/hero.webp" type="image/webp" />
                      <img
                        src="/hero.jpg"
                        alt="Salih Maral - Google Ads & Digital Marketing Expert"
                        className="w-full h-auto object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                        width="800"
                        height="447"
                        fetchPriority="high"
                      />
                    </picture>
                  </div>

                  {/* Google Ads Full-Width Official Partner Trust Strip */}
                  <div className="mt-3 bg-slate-50/90 border border-slate-200/70 rounded-2xl px-5 py-3.5">
                    <a
                      href="https://www.google.com/partners/agency?id=5868261912&_gl=1*18i960o*_ga*MTA1ODA5OTYxNS4xNzU4MDYxMzU4*_ga_V9K47ZG8NP*czE3NzgyODEzNzIkbzI1MyRnMSR0MTc3ODI4MzkyMiRqNjAkbDAkaDA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group/g hover:opacity-95 transition-opacity"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                          alt="Google"
                          className="h-5 w-auto"
                          width="64"
                          height="22"
                        />
                        <div className="border-l border-slate-300 pl-3">
                          <p className="text-xs sm:text-sm font-black text-slate-900 tracking-tight flex items-center gap-1.5">
                            <span>Partner</span>
                            <span className="text-[10px] font-bold text-[#4285F4] bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-full">Google Ads</span>
                          </p>
                          <p className="text-[10px] text-slate-500 font-medium">
                            {lang === 'de' ? 'Offizieller Google Partner Status' : lang === 'en' ? 'Official Google Partner Status' : 'Resmi Google Partner Durumu'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center text-xs font-bold text-[#4285F4] group-hover/g:translate-x-0.5 transition-transform">
                        <span>{lang === 'de' ? 'Verifizieren' : lang === 'en' ? 'Verify' : 'Doğrula'}</span>
                        <span className="ml-1 text-sm">↗</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Floating Animation Styles */}
                <style jsx>{`
                  @keyframes heroFloat {
                    0%, 100% {
                      transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                      transform: translateY(-15px) rotate(0.5deg);
                    }
                  }
                  @keyframes badgeFloat1 {
                    0%, 100% {
                      transform: translateY(0px) translateX(0px);
                    }
                    50% {
                      transform: translateY(-8px) translateX(5px);
                    }
                  }
                  .animate-hero-float {
                    animation: heroFloat 6s ease-in-out infinite;
                  }
                  .animate-badge-float1 {
                    animation: badgeFloat1 4.5s ease-in-out infinite;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (High-Contrast 6-Grid Modern Cards) */}
      <section className="py-14 bg-white border-y border-slate-200/80">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {[
              { val: '17+', label: t.stats.experience, color: '#4285F4', trend: '2008 – 2026' },
              { val: '500+', label: t.stats.keywords, color: '#EA4335', trend: 'Google #1. Sıra' },
              { val: '300+', label: t.stats.brands, color: '#FBBC04', trend: 'Global & Yerel' },
              { val: '+250%', label: t.stats.traffic, color: '#34A853', trend: 'Organik Büyüme' },
              { val: '+180%', label: t.stats.roi, color: '#4285F4', trend: 'Ort. ROI Artışı' },
              { val: '720+', label: lang === 'de' ? 'Verwaltete Kampagnen' : lang === 'en' ? 'Managed Campaigns' : 'Yönetilen Kampanya', color: '#34A853', trend: '1,74M+ Klicks' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-5 md:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between text-center relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: stat.color }}
                ></div>

                <div className="inline-flex items-center justify-center space-x-1 bg-white border border-slate-200/80 px-2.5 py-0.5 rounded-full mb-3 shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-700">{stat.trend}</span>
                </div>

                <p className="text-3xl lg:text-4xl font-black mb-1 tracking-tight" style={{ color: stat.color }}>
                  {stat.val}
                </p>

                <p className="text-xs font-semibold text-slate-600 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - ANIMATED CAROUSEL */}
      <section className="py-16 bg-slate-50/60 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">{lang === 'de' ? 'VERWENDETE PROFESSIONELLE TECHNOLOGIEN' : lang === 'en' ? 'PROFESSIONAL TECHNOLOGIES USED' : 'KULLANDIĞIMIZ PROFESYONEL TEKNOLOJİLER'}</h2>
          
          {/* Infinite scroll animation */}
          <div className="relative">
            <div className="flex animate-scroll items-center space-x-16">
              {/* Google */}
              <div className="flex-shrink-0 flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 w-auto" width="98" height="32" loading="lazy" />
              </div>

              {/* Analytics */}
              <div className="flex-shrink-0 flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" fill="#F9AB00"/>
                  <path d="M12 2v10l8.66 5" stroke="#E37400" strokeWidth="2"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">Analytics</span>
              </div>

              {/* WordPress */}
              <div className="flex-shrink-0 flex items-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" alt="WordPress" className="h-8 w-auto" width="32" height="32" loading="lazy" />
              </div>

              {/* Google Ads */}
              <div className="flex-shrink-0 flex items-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="h-8 w-auto" width="32" height="32" loading="lazy" />
              </div>

              {/* Screaming Frog */}
              <div className="flex-shrink-0 flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="#6DB33F">
                  <circle cx="12" cy="12" r="10" fill="#6DB33F"/>
                  <circle cx="9" cy="10" r="2" fill="white"/>
                  <circle cx="15" cy="10" r="2" fill="white"/>
                  <path d="M8 15c2 2 6 2 8 0" stroke="white" strokeWidth="1.5" fill="none"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">ScreamingFrog</span>
              </div>

              {/* Meta */}
              <div className="flex-shrink-0 flex items-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 w-auto" width="80" height="24" loading="lazy" />
              </div>

              {/* Semrush */}
              <div className="flex-shrink-0 flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="4" fill="#FF622D"/>
                  <text x="12" y="16" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">SE</text>
                </svg>
                <span className="text-sm font-medium text-gray-600">Semrush</span>
              </div>

              {/* Ahrefs */}
              <div className="flex-shrink-0 flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="4" fill="#FF6A3D"/>
                  <text x="12" y="17" fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">A</text>
                </svg>
                <span className="text-sm font-medium text-gray-600">Ahrefs</span>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex-shrink-0 flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 w-auto" width="98" height="32" loading="lazy" />
              </div>

              <div className="flex-shrink-0 flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" fill="#F9AB00"/>
                  <path d="M12 2v10l8.66 5" stroke="#E37400" strokeWidth="2"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">Analytics</span>
              </div>

              <div className="flex-shrink-0 flex items-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" alt="WordPress" className="h-8 w-auto" width="32" height="32" loading="lazy" />
              </div>

              <div className="flex-shrink-0 flex items-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="h-8 w-auto" width="32" height="32" loading="lazy" />
              </div>

              <div className="flex-shrink-0 flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="#6DB33F">
                  <circle cx="12" cy="12" r="10" fill="#6DB33F"/>
                  <circle cx="9" cy="10" r="2" fill="white"/>
                  <circle cx="15" cy="10" r="2" fill="white"/>
                  <path d="M8 15c2 2 6 2 8 0" stroke="white" strokeWidth="1.5" fill="none"/>
                </svg>
                <span className="text-sm font-medium text-gray-600">ScreamingFrog</span>
              </div>

              <div className="flex-shrink-0 flex items-center opacity-70 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 w-auto" width="80" height="24" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Ultra-Prestigious 6-Card Grid with High Readability & 3D Accents) */}
      <section id="services" className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">
                {lang === 'de' ? 'Spezialisierte Fachbereiche' : lang === 'en' ? 'Specialized Practice Areas' : 'Uzmanlık Alanlarımız'}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              {lang === 'de' ? (
                <>Umfassende <span className="text-[#4285F4]">Digital Marketing</span> Dienstleistungen</>
              ) : lang === 'en' ? (
                <>Comprehensive <span className="text-[#4285F4]">Digital Marketing</span> Services</>
              ) : (
                <>Kapsamlı <span className="text-[#4285F4]">Dijital Pazarlama</span> Hizmetlerimiz</>
              )}
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {lang === 'de'
                ? 'Maßgeschneiderte Strategien für planbaren ROI, Marktführerschaft und nachhaltiges Umsatzwachstum.'
                : lang === 'en'
                ? 'Tailored strategies designed for predictable ROI, market leadership, and sustainable revenue growth.'
                : 'Öngörülebilir ROI, pazar liderliği ve sürdürülebilir ciro artışı için özel kurgulanmış stratejiler.'}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {t.why.services.map((service, index) => {
              const metaBySlug = {
                'google-ads': {
                  accent: '#4285F4',
                  tag: lang === 'de' ? 'Search & Shopping' : lang === 'en' ? 'Search & Shopping' : 'Arama & Alışveriş',
                  pills: lang === 'de'
                    ? ['1,74M+ Klicks generiert', 'Search, Shopping & PMax', 'ROAS & CPA Optimierung']
                    : lang === 'en'
                    ? ['1.74M+ Clicks Generated', 'Search, Shopping & PMax', 'ROAS & CPA Optimization']
                    : ['1,74M+ Üretilen Tıklama', 'Search, Shopping & PMax', 'Maksimum ROAS & Kârlılık']
                },
                'meta-ads': {
                  accent: '#1877F2',
                  tag: lang === 'de' ? 'Instagram & Facebook' : lang === 'en' ? 'Instagram & Facebook' : 'Instagram & Facebook',
                  pills: lang === 'de'
                    ? ['Advantage+ Shopping & Reels', 'CAPI %92+ Match Score', 'B2B & B2C Instant Leads']
                    : lang === 'en'
                    ? ['Advantage+ Shopping & Reels', 'CAPI %92+ Match Score', 'B2B & B2C Instant Leads']
                    : ['Advantage+ Shopping & Reels', 'CAPI %92+ Eşleşme Oranı', 'B2B & B2C Müşteri Talebi']
                },
                'tiktok-ads': {
                  accent: '#000000',
                  tag: lang === 'de' ? 'Viral Video & Shop' : lang === 'en' ? 'Viral Video & Shop' : 'Viral Video & TikTok Shop',
                  pills: lang === 'de'
                    ? ['Spark Ads & UGC Kampagnen', 'TikTok Shop Seller Center', '18,4M+ Videoaufrufe']
                    : lang === 'en'
                    ? ['Spark Ads & Viral UGC', 'TikTok Shop Seller Center', '18.4M+ Video Views']
                    : ['Spark Ads & Viral UGC', 'TikTok Shop Satıcı Yönetimi', '18,4M+ Video İzlenme']
                },
                'x-ads': {
                  accent: '#1DA1F2',
                  tag: lang === 'de' ? 'B2B & Entscheider' : lang === 'en' ? 'B2B Decision Makers' : 'B2B & Karar Vericiler',
                  pills: lang === 'de'
                    ? ['B2B Entscheider-Targeting', 'Trend Takeover Kampagnen', '14,20 € CPL Skalierung']
                    : lang === 'en'
                    ? ['B2B Decision Maker Ads', 'Trend Takeover Campaigns', '€14.20 CPL Scalability']
                    : ['B2B Karar Verici Hedefleme', 'Gündem & Trend Reklamları', '14,20 € CPL Ölçekleme']
                },
                'seo': {
                  accent: '#0F9D58',
                  tag: lang === 'de' ? 'Princeton GEO & KI-Suche' : lang === 'en' ? 'Princeton GEO & AI Search' : 'Princeton GEO & Yapay Zeka',
                  pills: lang === 'de'
                    ? ['Google Maps #1 Rankings', 'ChatGPT & Perplexity (GEO)', '100/100 Core Web Vitals']
                    : lang === 'en'
                    ? ['Google Maps #1 Rankings', 'ChatGPT & Perplexity (GEO)', '100/100 Core Web Vitals']
                    : ['Google Haritalar #1. Sıra', 'ChatGPT & Perplexity (GEO)', '100/100 Core Web Vitals']
                },
                'yorum-yonetimi': {
                  accent: '#EA4335',
                  tag: lang === 'de' ? 'Reputation & Rechtsschutz' : lang === 'en' ? 'Reputation & Defense' : 'İtibar & Yasal Savunma',
                  pills: lang === 'de'
                    ? ['4.9★ Google & Trustpilot', '100% DSGVO & Fake-Schutz', 'Automatischer QR-Trichter']
                    : lang === 'en'
                    ? ['4.9★ Google & Trustpilot', '100% Fake Review Defense', 'Automated QR Review Funnel']
                    : ['4.9★ Google & Trustpilot', '%100 Sahte Yorum Savunması', 'Otomatik QR Yorum Hunisi']
                },
                'server-side-tracking': {
                  accent: '#0F9D58',
                  tag: lang === 'de' ? 'Setup & CAPI' : lang === 'en' ? 'Setup & CAPI' : 'Kurulum & CAPI',
                  pills: lang === 'de'
                    ? ['Google Ads & Maps Setup', 'GA4, GMC & Search Console', 'Meta CAPI & Server-GTM']
                    : lang === 'en'
                    ? ['Google Ads & Maps Setup', 'GA4, GMC & Search Console', 'Meta CAPI & Server-GTM']
                    : ['Google Ads & Harita Kurulumu', 'GA4, GMC & Search Console', 'Meta CAPI & Server-GTM']
                },
                'youtube-ads': {
                  accent: '#FF0000',
                  tag: lang === 'de' ? 'YouTube & Shorts Ads' : lang === 'en' ? 'YouTube & Shorts Ads' : 'YouTube & Shorts Reklamları',
                  pills: lang === 'de'
                    ? ['23,1M+ TrueView Aufrufe', '720+ Erfolgreiche Kampagnen', 'Shorts & In-Stream Ads']
                    : lang === 'en'
                    ? ['23.1M+ TrueView Views', '720+ Successful Campaigns', 'Shorts & In-Stream Ads']
                    : ['23,1M+ TrueView İzlenme', '720+ Başarılı Kampanya', 'Shorts & In-Stream Reklamı']
                }
              }
              const localizedMeta = metaBySlug[service.slug] || metaBySlug['google-ads']

              return (
                <a 
                  key={index} 
                  href={svcUrl(lang, service.slug)}
                  className="block group h-full"
                >
                  <div className="h-full bg-white rounded-3xl p-7 sm:p-8 md:p-9 border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden group">
                    {/* Top Accent Line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2.5"
                      style={{ backgroundColor: localizedMeta.accent }}
                    ></div>

                    <div className="flex flex-col flex-grow">
                      {/* Header: Icon + Category Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center p-3.5 shadow-md group-hover:scale-110 group-hover:rotate-1 transition-all duration-300"
                          style={{ backgroundColor: `${localizedMeta.accent}14` }}
                        >
                          {service.icon === 'google-ads' && (
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="w-9 h-9 object-contain" width="36" height="36" loading="lazy" />
                          )}
                          {service.icon === 'meta' && (
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="w-9 h-7 object-contain" width="36" height="28" loading="lazy" />
                          )}
                          {service.icon === 'tiktok' && (
                            <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" className="w-9 h-9 object-contain" width="36" height="36" loading="lazy" />
                          )}
                          {service.icon === 'x' && (
                            <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                          )}
                          {service.icon === 'tracking' && (
                            <svg className="w-9 h-9 text-[#0F9D58]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
                          )}
                          {service.icon === 'seo' && (
                            <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="#0F9D58" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                          )}
                          {service.icon === 'review' && (
                            <svg className="w-9 h-9" viewBox="0 0 24 24" fill="#FBBC04" stroke="#EA4335" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                          )}
                          {service.icon === 'youtube' && (
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="w-9 h-9 object-contain" width="36" height="36" loading="lazy" />
                          )}
                        </div>

                        <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-800 tracking-wide">
                          {localizedMeta.tag}
                        </span>
                      </div>

                      {/* Service Title with Fixed Min-Height for Strict Geometric Alignment */}
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-[#4285F4] transition-colors leading-snug min-h-[58px] flex items-start">
                        {service.title}
                      </h3>

                      {/* Description with Fixed Min-Height for Harmonized Vertical Flow */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal min-h-[72px]">
                        {service.description}
                      </p>

                      {/* 3 High-Impact Localized Benefit Pills */}
                      <div className="space-y-2.5 mb-6 mt-auto">
                        {localizedMeta.pills.map((pill, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-center space-x-2.5 bg-slate-50/90 rounded-xl px-3.5 py-2 border border-slate-100/90 group-hover:border-slate-200/70 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: localizedMeta.accent }}></span>
                            <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">{pill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Pill Button - Strictly Pin-Aligned at Bottom */}
                    <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#4285F4] transition-colors mt-2">
                      <span className="flex items-center gap-1.5">
                        {lang === 'de' ? 'Leistungsdetails & Strategie' : lang === 'en' ? 'Service Details & Strategy' : 'Hizmet Detayları & Strateji'}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#4285F4] group-hover:text-white flex items-center justify-center transition-all duration-300">
                        ➔
                      </span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success & Verified Growth Section */}
      <section id="success" className="py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 relative overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200/80 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">{t.success.subtitle}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">{t.success.title}</h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.success.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {t.success.metrics.map((metric, index) => {
              const borderAccents = ['#34A853', '#FBBC04', '#4285F4', '#EA4335']
              const accent = borderAccents[index]
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-7 md:p-8 border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group text-center flex flex-col justify-between"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: accent }}
                  ></div>

                  <div className="mb-6 flex justify-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: `${accent}15` }}
                    >
                      {index === 0 && <span className="text-2xl font-black" style={{ color: accent }}>📈</span>}
                      {index === 1 && <span className="text-2xl font-black" style={{ color: accent }}>🏆</span>}
                      {index === 2 && <span className="text-2xl font-black" style={{ color: accent }}>🚀</span>}
                      {index === 3 && <span className="text-2xl font-black" style={{ color: accent }}>⚡</span>}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-1 block">
                      {metric.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {metric.title}
                    </h3>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                    {lang === 'de' ? 'Geprüfte & verifizierte Ergebnisse' : lang === 'en' ? 'Verified performance metrics' : 'Doğrulanmış performans verisi'}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Verified Google Ads Live Dashboards Gallery */}
          {t.proofGallery && (
            <div className="mt-20 pt-16 border-t border-slate-200/80">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1.5 mb-3 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">{t.proofGallery.badge}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight">
                  {t.proofGallery.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  {t.proofGallery.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {t.proofGallery.cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold px-3 py-1 bg-slate-900 text-white rounded-full">
                          {card.badge}
                        </span>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                          ✓ {lang === 'de' ? 'Offizielles Google Dashboard' : lang === 'en' ? 'Verified Google Dashboard' : 'Doğrulanmış Google Paneli'}
                        </span>
                      </div>

                      {/* Dashboard Image with Zoom on Hover */}
                      <div className="rounded-2xl overflow-hidden border border-slate-100 mb-5 bg-slate-50 relative group-hover:border-blue-200 transition-colors shadow-inner">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      <div className="text-xs font-bold uppercase tracking-wider text-[#4285F4] mb-1 font-mono">
                        {card.subtitle}
                      </div>
                      <h4 className="text-lg font-black text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="flex items-center gap-1.5 text-slate-900 font-mono">
                        📊 {card.stat}
                      </span>
                      <span className="text-emerald-600 font-bold">
                        {lang === 'de' ? 'Live Verifiziert' : lang === 'en' ? 'Live Verified' : 'Canlı Doğrulandı'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive ROAS & ROI Calculator Lead Magnet */}
      <section className="py-12 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4">
          <RoasCalculatorWidget lang={lang} />
        </div>
      </section>

      {/* Corporate High-Converting Banner Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4285F4]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">{t.corporate.subtitle}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{t.corporate.title}</h2>
            <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">{t.corporate.description}</p>
            
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#4285F4] hover:bg-[#3367d6] text-white font-bold text-base px-9 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <span>{t.corporate.cta}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.corporate.features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-900/90 border border-slate-800/90 rounded-3xl p-7 hover:border-slate-700 shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-5 text-[#4285F4]">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200/80 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">{t.testimonials.subtitle}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">{t.testimonials.title}</h2>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <span className="text-4xl md:text-5xl font-black text-gray-900">5.0</span>
              <div className="text-left ml-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-xs font-semibold text-slate-500">{t.testimonials.rating}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.testimonials.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-500 mb-4">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm md:text-base text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-slate-200/60">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#4285F4] to-blue-400 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-xs text-slate-500 font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200/80 rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">{t.about.subtitle}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">{t.about.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {t.about.features.map((feature, index) => {
              const colors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853', '#4285F4', '#34A853']
              const color = colors[index] || '#4285F4'
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: color }}
                  ></div>

                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: `${color}15`, color: color }}
                  >
                    <CheckCircle className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4285F4] transition-colors">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Strategy & Lead Funnel Wizard */}
      <section className="py-8 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <LeadFunnelWizard lang={lang} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4285F4]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#34A853]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header with icon */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#4285F4] to-[#34A853] rounded-2xl mb-6 shadow-xl">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04] bg-clip-text text-transparent">{t.contact.title}</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">{t.contact.subtitle}</p>
            </div>
            
            {/* Main contact card with border */}
            <Card className="border-2 border-[#4285F4]/20 shadow-2xl bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left side - Contact info */}
                <div className="md:col-span-2 bg-gradient-to-br from-[#4285F4] to-[#34A853] p-8 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">{lang === 'de' ? 'Kontaktinformationen' : lang === 'en' ? 'Contact Information' : 'İletişim Bilgileri'}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm opacity-80">WhatsApp</p>
                        <a href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20für%20Ihre%20Digital%20Marketing%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.' : 'Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`} target="_blank" className="font-semibold hover:underline">{lang === 'de' ? 'Jetzt schreiben' : lang === 'en' ? 'Message Now' : 'Hemen Yaz'}</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-sm opacity-80">{lang === 'de' ? 'Antwort innerhalb von 24 Stunden' : lang === 'en' ? 'Response within 24 hours' : '24 saat içinde yanıt'}</p>
                  </div>
                </div>
                
                {/* Right side - Form */}
                <div className="md:col-span-3 p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">{lang === 'de' ? 'Nachricht senden' : lang === 'en' ? 'Send Message' : 'Mesaj Gönder'}</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder={t.contact.form.name}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="border-2 focus:border-[#4285F4] transition-colors"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder={t.contact.form.email}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="border-2 focus:border-[#4285F4] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder={t.contact.form.phone}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="border-2 focus:border-[#4285F4] transition-colors"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder={t.contact.form.message}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        required
                        className="border-2 focus:border-[#4285F4] transition-colors"
                      />
                    </div>
                    {formStatus.message && (
                      <div className={`p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                        {formStatus.message}
                      </div>
                    )}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:from-[#3367d6] hover:to-[#2d9249] text-white shadow-lg hover:shadow-xl transition-all"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (lang === 'de' ? 'Wird gesendet...' : lang === 'en' ? 'Sending...' : 'Gönderiliyor...') : t.contact.form.submit}
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#34A853] to-[#4285F4] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{t.contact.cta.title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{t.contact.cta.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#4285F4] hover:bg-gray-100" onClick={() => scrollToSection('contact')}>
              <Mail className="mr-2 h-5 w-5" />
              {lang === 'de' ? 'Kostenloses Angebot' : lang === 'en' ? 'Free Quote' : 'Ücretsiz Teklif Alın'}
            </Button>
            <Button size="lg" className="bg-[#34A853] hover:bg-[#2d9249] text-white" asChild>
              <a href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20für%20Ihre%20Digital%20Marketing%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.' : 'Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.contact.cta.whatsapp}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Dynamic & Interactive Blog Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#4285F4]/10 via-purple-500/5 to-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4285F4]/10 text-[#4285F4] border border-[#4285F4]/20 text-xs font-bold mb-4 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'de' ? '2026 DIGITAL MARKETING & KI BLOG' : lang === 'en' ? '2026 DIGITAL MARKETING & AI BLOG' : '2026 DİJİTAL PAZARLAMA & AI REHBERLERİ'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              {lang === 'de' ? 'Aktuelle Experten-Artikel & Trends' : lang === 'en' ? 'Latest Expert Insights & Trends' : 'Güncel Uzman Rehberleri & Trendler'}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {lang === 'de' 
                ? 'Praxisnahe Leitfäden über Google Ads, Meta Ads, SEO, GEO und KI-Automatisierung von Salih Maral.' 
                : lang === 'en' 
                ? 'Actionable guides on Google Ads, Meta Ads, SEO, GEO, and AI automation by Salih Maral.' 
                : 'Salih Maral tarafından hazırlanan Google Ads, Meta Ads, SEO, GEO ve Yapay Zeka stratejileri.'}
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: lang === 'de' ? 'Alle Themen' : lang === 'en' ? 'All Topics' : 'Tüm Konular', icon: Layers },
              { id: 'ai', label: lang === 'de' ? 'Künstliche Intelligenz' : lang === 'en' ? 'AI & Gemini' : 'Yapay Zeka', icon: Cpu },
              { id: 'google', label: 'Google Ads', icon: Zap },
              { id: 'meta', label: 'Meta Ads', icon: Flame },
              { id: 'seo', label: 'SEO & GEO', icon: Search },
              { id: 'tracking', label: 'Server-Side Tracking', icon: ShieldCheck },
            ].map(cat => {
              const IconComponent = cat.icon
              const isActive = blogCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setBlogCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#4285F4] text-white shadow-lg shadow-blue-500/25 scale-105 ring-2 ring-[#4285F4]/30'
                      : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-200/80 shadow-sm'
                  }`}
                >
                  <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#4285F4]'}`} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>

          {/* Dynamic Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(latestPosts.length > 0 ? latestPosts : [
              {
                slug: 'gemini-3-7-vs-gemini-3-6-ai-marketing-comparison',
                title: lang === 'de' ? 'Gemini 3.7 vs. 3.6: Hybrides Denken im Marketing' : lang === 'en' ? 'Gemini 3.7 vs. 3.6: Hybrid Reasoning for Marketing' : 'Gemini 3.7 vs. 3.6: Pazarlama ve SEO Kıyaslaması',
                excerpt: lang === 'de' ? 'Detaillierte Analyse des neuen Gemini 3.7 Thinking Mode für Google Ads & SEO.' : lang === 'en' ? 'In-depth analysis of the new Gemini 3.7 Thinking Mode for Google Ads & SEO.' : 'Google Ads ve SEO otomasyonu için yeni Gemini 3.7 Thinking Mode detaylı analizi.',
                category: lang === 'de' ? 'Künstliche Intelligenz' : lang === 'en' ? 'Artificial Intelligence' : 'Yapay Zeka',
                readTime: '14',
                coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop&q=80',
                date: '2026-08-14'
              },
              {
                slug: 'geo-ai-search-citation-factors-2026',
                title: lang === 'de' ? 'GEO 2026: Zitations-Leitfaden für ChatGPT & Perplexity' : lang === 'en' ? 'GEO 2026: How to Get Cited in ChatGPT & Perplexity' : 'GEO 2026: ChatGPT ve Perplexity\'de Zirveye Çıkma',
                excerpt: lang === 'de' ? 'Princeton KDD 2024 Ranking-Faktoren für maximale Sichtbarkeit in KI-Antworten.' : lang === 'en' ? 'Princeton KDD 2024 ranking factors for maximum visibility in generative AI.' : 'Yapay zeka arama motorlarında birincil kaynak olma stratejileri ve Princeton verileri.',
                category: 'SEO & GEO',
                readTime: '15',
                coverImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=300&fit=crop&q=80',
                date: '2026-08-14'
              },
              {
                slug: 'server-side-gtm-meta-capi-setup-2026',
                title: lang === 'de' ? 'Server-Side GTM & Meta CAPI: 30% Datenverlust verhindern' : lang === 'en' ? 'Server-Side GTM & Meta CAPI: Prevent 30% Data Loss' : 'Server-Side GTM & Meta CAPI: %30 Veri Kaybını Önleme',
                excerpt: lang === 'de' ? 'So überwinden Sie Ad-Blocker und iOS-Sperren mit deterministischer Event-Deduplizierung.' : lang === 'en' ? 'Overcome ad-blockers and iOS restrictions with deterministic event deduplication.' : 'Ad-blocker ve iOS engellerini aşarak Meta & Google Ads ROAS oranını artırma.',
                category: 'Server-Side Tracking',
                readTime: '16',
                coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&q=80',
                date: '2026-08-14'
              },
              {
                slug: 'meta-advantage-plus-creative-ai-2026',
                title: lang === 'de' ? 'Meta Advantage+ 2026: E-Commerce Skalierung & KI' : lang === 'en' ? 'Meta Advantage+ 2026: Scaling E-Commerce with AI' : 'Meta Advantage+ 2026: E-Ticaret Reklam Ölçekleme',
                excerpt: lang === 'de' ? 'Creative AI und ASC Kampagnen für niedrigere CPAs und planbar wachsende Shop-Umsätze.' : lang === 'en' ? 'Creative AI and ASC campaigns for lower CPAs and predictable direct revenue scale.' : 'Daha düşük CPA ve yüksek ROAS ile e-ticaret satışlarını katlama rehberi.',
                category: 'Meta Ads',
                readTime: '15',
                coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=300&fit=crop&q=80',
                date: '2026-08-14'
              },
              {
                slug: 'google-ads-pmax-smart-bidding-guide-2026',
                title: lang === 'de' ? 'Google Ads PMax 2026: 7 Strategien gegen Budgetverlust' : lang === 'en' ? 'Google Ads PMax 2026: 7 Strategies to Stop Budget Waste' : 'Google Ads PMax 2026: Bütçe İsrafını Önleyen 7 Taktik',
                excerpt: lang === 'de' ? 'Brand-Ausschlüsse und Margen-Segmentierung für echten Neukunden-ROAS.' : lang === 'en' ? 'Brand exclusions and margin tiering for genuine incremental customer acquisition.' : 'Marka yamyamlığını önleyip gerçek yeni müşteri getirisini katlayan PMax stratejileri.',
                category: 'Google Ads',
                readTime: '15',
                coverImage: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=300&fit=crop&q=80',
                date: '2026-08-14'
              },
              {
                slug: 'google-maps-local-seo-ranking-factors-2026',
                title: lang === 'de' ? 'Google Maps SEO 2026: Top-Rankings im Local 3-Pack' : lang === 'en' ? 'Google Maps SEO 2026: Dominate the Local 3-Pack' : 'Google Haritalar SEO 2026: Local 3-Pack Zirvesi',
                excerpt: lang === 'de' ? 'Lokale Rankings dominieren und gefälschte 1-Stern-Bewertungen rechtssicher entfernen.' : lang === 'en' ? 'Dominate regional searches and legally eliminate fake 1-star reviews.' : 'Bölgenizde 1. sıraya çıkma ve sahte 1 yıldızlı yorumları sildirme taktikleri.',
                category: 'SEO & GEO',
                readTime: '15',
                coverImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=300&fit=crop&q=80',
                date: '2026-08-14'
              }
            ])
            .filter(post => {
              if (blogCategory === 'all') return true
              const catLower = (post.category || '').toLowerCase()
              const titleLower = (post.title || '').toLowerCase()
              if (blogCategory === 'google') return catLower.includes('google') || titleLower.includes('google')
              if (blogCategory === 'meta') return catLower.includes('meta') || titleLower.includes('meta')
              if (blogCategory === 'seo') return catLower.includes('seo') || catLower.includes('geo') || titleLower.includes('seo') || titleLower.includes('maps')
              if (blogCategory === 'ai') return catLower.includes('yapay') || catLower.includes('künstliche') || catLower.includes('artificial') || titleLower.includes('ai') || titleLower.includes('gemini')
              if (blogCategory === 'tracking') return catLower.includes('tracking') || titleLower.includes('tracking') || titleLower.includes('capi')
              return true
            })
            .slice(0, 6)
            .map((post, idx) => (
              <a
                key={post.slug || idx}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#4285F4]/40 hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image Container with Zoom Effect */}
                <div className="h-48 sm:h-52 relative overflow-hidden bg-slate-100">
                  <img
                    src={post.coverImage || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&q=80'}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Floating Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-gray-900 shadow-md backdrop-blur-md">
                      {post.category || 'Digital Marketing'}
                    </span>
                  </div>

                  {/* Read time floating */}
                  <div className="absolute bottom-3 right-3 text-white/90 text-xs font-medium inline-flex items-center gap-1 drop-shadow-md bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{post.readTime || '10'} {lang === 'de' ? 'Min.' : lang === 'en' ? 'min' : 'dk'}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2.5 line-clamp-2 group-hover:text-[#4285F4] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-grow leading-relaxed">
                    {post.excerpt || post.title}
                  </p>

                  {/* Bottom Action Footer */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#4285F4] group-hover:text-blue-600">
                    <span className="inline-flex items-center gap-1">
                      <span>{lang === 'de' ? 'Rehber İncele' : lang === 'en' ? 'Read Guide' : 'Rehberi Oku'}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                    <span className="text-gray-400 font-normal">Salih Maral</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Call to Action Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#4285F4] to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold px-8 py-6 rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="/blog" className="inline-flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>{lang === 'de' ? 'Alle Fachartikel ansehen (45+ Leitfäden)' : lang === 'en' ? 'Explore All Blog Guides (45+ Articles)' : 'Tüm Blog Rehberlerini İncele (45+ Makale)'}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Floating Action Bar (High-Converting Thumb-Friendly Glassmorphism) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-2xl p-2.5 px-4 flex items-center gap-3">
        <a
          href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20für%20Ihre%20Digital%20Marketing%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.' : 'Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-black py-3 px-3 rounded-xl shadow-md flex items-center justify-center space-x-2 text-sm transition-all"
        >
          <MessageSquare className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>
        <button
          onClick={() => scrollToSection('contact')}
          className="flex-1 bg-[#4285F4] hover:bg-[#3367d6] active:scale-95 text-white font-black py-3 px-3 rounded-xl shadow-md flex items-center justify-center space-x-2 text-sm transition-all cursor-pointer"
        >
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{lang === 'de' ? 'Angebot' : lang === 'en' ? 'Get Quote' : 'Teklif Al'}</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="py-12 pb-24 md:pb-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <picture>
                <source srcSet="/logo-sm.webp" type="image/webp" />
                <img src="/logo.png" alt="Salih Maral Logo" className="h-12 w-auto mb-4" width="48" height="48" loading="lazy" />
              </picture>
              <p className="text-sm text-gray-400">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.nav.contact}</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <a href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20für%20Ihre%20Digital%20Marketing%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.' : 'Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`} target="_blank" className="hover:text-white transition-colors">WhatsApp</a>
                </p>
                <p className="text-xs text-gray-500 pt-2">Voltastraße 8, 63303 Dreieich (Hessen / Frankfurt)</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.nav.services}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href={svcUrl(lang, 'google-ads')} className="hover:text-white transition-colors">Google Ads</a></li>
                <li><a href={svcUrl(lang, 'meta-ads')} className="hover:text-white transition-colors">Meta Ads</a></li>
                <li><a href={svcUrl(lang, 'youtube-ads')} className="hover:text-white transition-colors">YouTube Ads</a></li>
                <li><a href={svcUrl(lang, 'server-side-tracking')} className="hover:text-white transition-colors">Server-Side Tracking</a></li>
                <li><a href={svcUrl(lang, 'tiktok-ads')} className="hover:text-white transition-colors">TikTok Ads</a></li>
                <li><a href={svcUrl(lang, 'seo')} className="hover:text-white transition-colors">SEO & GEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{lang === 'de' ? 'Standorte in Deutschland' : lang === 'en' ? 'Locations in Germany' : 'Almanya Lokasyonları'}</h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li><a href={`/${lang}/standorte/frankfurt`} className="hover:text-[#4285F4] transition-colors">Frankfurt am Main</a></li>
                <li><a href={`/${lang}/standorte/muenchen`} className="hover:text-[#4285F4] transition-colors">München</a></li>
                <li><a href={`/${lang}/standorte/berlin`} className="hover:text-[#4285F4] transition-colors">Berlin</a></li>
                <li><a href={`/${lang}/standorte/hamburg`} className="hover:text-[#4285F4] transition-colors">Hamburg</a></li>
                <li><a href={`/${lang}/standorte/koeln`} className="hover:text-[#4285F4] transition-colors">Köln & Bonn</a></li>
                <li><a href={`/${lang}/standorte/duesseldorf`} className="hover:text-[#4285F4] transition-colors">Düsseldorf</a></li>
                <li><a href={`/${lang}/standorte/stuttgart`} className="hover:text-[#4285F4] transition-colors">Stuttgart</a></li>
                <li><a href={`/${lang}/standorte`} className="text-[#4285F4] font-bold hover:underline block pt-1">{lang === 'de' ? 'Alle Standorte anzeigen →' : lang === 'en' ? 'View all locations →' : 'Tüm Şehirleri Gör →'}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-6">
              <p>© 2026 Salih Maral. {t.footer.rights}</p>
              {/* Google Partners Badge in Footer */}
              <a
                href="https://www.google.com/partners/agency?id=5868261912&_gl=1*18i960o*_ga*MTA1ODA5OTYxNS4xNzU4MDYxMzU4*_ga_V9K47ZG8NP*czE3NzgyODEzNzIkbzI1MyRnMSR0MTc3ODI4MzkyMiRqNjAkbDAkaDA"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="google-partners-badge-footer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                  alt="Google Partner"
                  className="h-16 w-auto"
                  width="109"
                  height="64"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="/about" className="hover:text-white transition-colors">{t.footer.about || 'Über uns'}</a>
              <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
              <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutzerklärung</a>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  )
}