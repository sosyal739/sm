'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MessageCircle, CheckCircle, BarChart3, Users, Award, TrendingUp, Globe, Star } from 'lucide-react'

const translations = {
  tr: {
    nav: {
      services: 'Hizmetler',
      success: 'Başarılar',
      about: 'Hakkımda',
      contact: 'İletişim'
    },
    hero: {
      title: 'Dijital Pazarlama Uzmanı',
      subtitle: 'Google Ads, Meta Ads & SEO ile İşletmenizi Büyütün',
      description: 'Dijital dünyadaki kaosun içinde kaybolmayın. İşletmeniz için değişime dirençli, ölçülebilir ve ticari dönüşüm odaklı bir başarı sistemi inşa ediyoruz.',
      cta1: 'WhatsApp Hattı',
      cta2: 'Teklif Alın',
      clients: 'Mutlu Müşteri & Firma'
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
        },
        {
          name: 'Sarah Mitchell',
          role: 'Mağaza Sahibi',
          text: 'Sadece reklam satmaya çalışanlardan değil, gerçekten strateji kuran birisi. Sektörümüz rekabetli olmasına rağmen 4 ayda hedeflediğimiz satış rakamlarına ulaştık. Güvenilir ve çalışkan.',
          rating: 5
        },
        {
          name: 'Thomas Schmidt',
          role: 'Startup Kurucusu',
          text: 'Startup projemiz için danışmanlık aldık. Bütçemizi en verimli şekilde kullanarak bize harika bir büyüme planı çizdi. Kendisiyle çalışmak bir uzman ile değil, bir iş ortağıyla çalışmak gibi.',
          rating: 5
        },
        {
          name: 'Elif Aksoy',
          role: 'Butik Otel',
          text: 'Otelimiz için Google Ads ve Meta reklamları yönetiyor. Rezervasyon sayımız inanılmaz arttı. Özellikle sezon dönemlerinde kampanya optimizasyonu sayesinde doluluk oranımız %95\'e çıktı.',
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
      rights: 'Tüm hakları saklıdır.'
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
      title: 'Digital Marketing Experte',
      subtitle: 'Lassen Sie Ihr Unternehmen mit Google Ads, Meta Ads & SEO wachsen',
      description: 'Verlieren Sie sich nicht im Chaos der digitalen Welt. Wir bauen ein veränderungsresistentes, messbares und konversionsorientiertes Erfolgssystem für Ihr Unternehmen auf.',
      cta1: 'WhatsApp-Hotline',
      cta2: 'Angebot Erhalten',
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
        },
        {
          name: 'Lisa Becker',
          role: 'Ladenbesitzerin',
          text: 'Er ist nicht einer von denen, die nur versuchen, Werbung zu verkaufen, sondern jemand, der wirklich Strategie aufbaut. Obwohl unsere Branche wettbewerbsfähig ist, haben wir in 4 Monaten unsere Verkaufsziele erreicht. Zuverlässig und fleißig.',
          rating: 5
        },
        {
          name: 'David Klein',
          role: 'Startup-Gründer',
          text: 'Wir haben Beratung für unser Startup-Projekt erhalten. Er hat uns einen großartigen Wachstumsplan erstellt, indem er unser Budget optimal nutzte. Mit ihm zu arbeiten ist wie mit einem Geschäftspartner zu arbeiten, nicht mit einem Experten.',
          rating: 5
        },
        {
          name: 'Sophie Wagner',
          role: 'Boutique-Hotel',
          text: 'Er verwaltet Google Ads und Meta-Anzeigen für unser Hotel. Die Anzahl der Reservierungen ist unglaublich gestiegen. Besonders in der Hochsaison stieg unsere Auslastung dank Kampagnenoptimierung auf 95%.',
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
      rights: 'Alle Rechte vorbehalten.'
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
      title: 'Digital Marketing Expert',
      subtitle: 'Grow Your Business with Google Ads, Meta Ads & SEO',
      description: "Don't get lost in the chaos of the digital world. We build a change-resistant, measurable and conversion-focused success system for your business.",
      cta1: 'WhatsApp Hotline',
      cta2: 'Get Quote',
      clients: 'Happy Clients & Companies'
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
        },
        {
          name: 'Emily Davis',
          role: 'Store Owner',
          text: 'He\'s not one of those who just tries to sell advertising, but someone who really builds strategy. Although our industry is competitive, we reached our sales targets in 4 months. Reliable and hardworking.',
          rating: 5
        },
        {
          name: 'Michael Wilson',
          role: 'Startup Founder',
          text: 'We received consultation for our startup project. He drew us a great growth plan by using our budget most efficiently. Working with him is like working with a business partner, not an expert.',
          rating: 5
        },
        {
          name: 'Jessica Miller',
          role: 'Boutique Hotel',
          text: 'He manages Google Ads and Meta ads for our hotel. The number of reservations has increased incredibly. Especially during the season, our occupancy rate rose to 95% thanks to campaign optimization.',
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
      rights: 'All rights reserved.'
    }
  }
}

export default function Home() {
  const [lang, setLang] = useState('de')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-[#4285F4]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04] bg-clip-text text-transparent">
                Salih Maral
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('services')} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{t.nav.services}</button>
              <button onClick={() => scrollToSection('success')} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{t.nav.success}</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{t.nav.about}</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{t.nav.contact}</button>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={lang === 'de' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLang('de')}
                className={lang === 'de' ? 'bg-[#4285F4]' : ''}
              >
                DE
              </Button>
              <Button
                variant={lang === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLang('en')}
                className={lang === 'en' ? 'bg-[#4285F4]' : ''}
              >
                EN
              </Button>
              <Button
                variant={lang === 'tr' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLang('tr')}
                className={lang === 'tr' ? 'bg-[#4285F4]' : ''}
              >
                TR
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white border-0">
                2026 {lang === 'de' ? 'Strategien Jetzt Bereit!' : lang === 'en' ? 'Strategies Ready Now!' : 'Stratejileri Şimdiden Hazır!'}
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-2xl font-semibold text-[#EA4335]">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-muted-foreground">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#34A853] hover:bg-[#2d9249] text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow" asChild>
                  <a href="https://wa.me/491724106463" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5 animate-bounce-slow" />
                    {t.hero.cta1}
                  </a>
                </Button>
                <Button size="lg" className="bg-[#4285F4] hover:bg-[#3367d6] text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300" onClick={() => scrollToSection('contact')}>
                  <Mail className="mr-2 h-5 w-5" />
                  {t.hero.cta2}
                </Button>
              </div>
              <style jsx>{`
                @keyframes pulse-slow {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(52, 168, 83, 0.7); }
                  50% { box-shadow: 0 0 0 10px rgba(52, 168, 83, 0); }
                }
                @keyframes bounce-slow {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-5px); }
                }
                .animate-pulse-slow {
                  animation: pulse-slow 2s infinite;
                }
                .animate-bounce-slow {
                  animation: bounce-slow 1s infinite;
                }
              `}</style>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853] border-2 border-white" />
                  ))}
                </div>
                <div>
                  <p className="text-2xl font-bold">+300</p>
                  <p className="text-sm text-muted-foreground">★★★★★</p>
                  <p className="text-xs text-muted-foreground">{t.hero.clients}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
                <img
                  src="https://customer-assets.emergentagent.com/job_maralpresence/artifacts/cnlyuz94__prompt_create_4k_202601290226%20%281%29.jpeg"
                  alt="Salih Maral - Digital Marketing Expert"
                  className="w-full h-auto"
                />
              </div>
              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
                .animate-float {
                  animation: float 6s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-br from-[#4285F4]/10 via-[#EA4335]/10 to-[#FBBC04]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card className="border-2 border-[#4285F4]/20">
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-[#4285F4]">15+</p>
                <p className="text-sm text-muted-foreground mt-2">{t.stats.experience}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#EA4335]/20">
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-[#EA4335]">500+</p>
                <p className="text-sm text-muted-foreground mt-2">{t.stats.keywords}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FBBC04]/20">
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-[#FBBC04]">300+</p>
                <p className="text-sm text-muted-foreground mt-2">{t.stats.brands}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#34A853]/20">
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-[#34A853]">+250%</p>
                <p className="text-sm text-muted-foreground mt-2">{t.stats.traffic}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#EA4335]/20">
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-[#EA4335]">+180%</p>
                <p className="text-sm text-muted-foreground mt-2">{t.stats.roi}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#4285F4]/20">
              <CardContent className="pt-6 text-center">
                <Award className="h-8 w-8 mx-auto text-[#4285F4] mb-2" />
                <p className="text-sm font-semibold">{t.stats.focus}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-12">{t.technologies.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Google Ads - REAL LOGO */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M93.8 18.7c-26.3 6.8-48 25.3-58.7 50.1-3.6 8.3-4.6 12.4-5.5 21.7-.6 6.2-.6 7.8.4 14 2.5 15.6 9.6 30.2 20.5 42.2 7.5 8.3 18.2 16.1 28.5 20.8 6.8 3.1 18.6 6.7 25 7.6 4.4.6 13.6.6 18 0 12.4-1.6 25.2-6.2 36-12.9 3.6-2.2 11-7.7 14-10.4 15.4-13.8 26.3-32.3 30.8-52.3 1.4-6.3 1.8-11.4 1.8-20.5 0-9.1-.4-14.2-1.8-20.5-4.5-20-15.4-38.5-30.8-52.3-13.8-12.4-30.7-21-48.2-24.5-6.3-1.3-24.7-1.3-30 0z" fill="#4285F4"/>
                  <path d="M86 96l14-28h8l-2 6 12-6h4l8 14-14 14h-8l2-6-12 6h-4z" fill="#FBBC04"/>
                  <path d="M86 96l14-28h8l-2 6 12-6h4l8 14-14 14h-8l2-6-12 6h-4z" fill="url(#ga_grad)" fillOpacity="0.3"/>
                  <defs>
                    <linearGradient id="ga_grad" x1="86" y1="68" x2="86" y2="110" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white"/>
                      <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">Google Ads</p>
            </div>

            {/* Facebook Logo */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" fill="#1877F2"/>
                  <path d="M29.5 15.5h-3.2c-2.3 0-3.8 1.5-3.8 3.8v2.9h-3.2v4h3.2V37h4.7V26.2h3.2l.5-4h-3.7v-2.5c0-1.1.3-1.8 1.8-1.8h2.2v-3.6c-.4 0-1.7-.2-3.2-.2z" fill="white"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">Facebook</p>
            </div>

            {/* Instagram Logo */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="url(#instagram_grad)"/>
                  <defs>
                    <radialGradient id="instagram_grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.5 51.5) scale(50)">
                      <stop offset="0" stopColor="#FD5"/>
                      <stop offset="0.328" stopColor="#FF543F"/>
                      <stop offset="0.348" stopColor="#FC5245"/>
                      <stop offset="0.504" stopColor="#E64771"/>
                      <stop offset="0.643" stopColor="#D53E91"/>
                      <stop offset="0.761" stopColor="#CC39A4"/>
                      <stop offset="0.841" stopColor="#C837AB"/>
                    </radialGradient>
                  </defs>
                  <rect x="14" y="14" width="20" height="20" rx="5" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="24" cy="24" r="5" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="35" cy="13" r="1.5" fill="white"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">Instagram</p>
            </div>
            {/* YouTube - REAL LOGO */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="8" fill="#FF0000"/>
                  <path d="M38.5 16.5c-.4-1.5-1.6-2.7-3.1-3.1C32.7 12.5 24 12.5 24 12.5s-8.7 0-11.4.9c-1.5.4-2.7 1.6-3.1 3.1C8.5 19.2 8.5 24 8.5 24s0 4.8.9 7.5c.4 1.5 1.6 2.7 3.1 3.1 2.7.9 11.4.9 11.4.9s8.7 0 11.4-.9c1.5-.4 2.7-1.6 3.1-3.1.9-2.7.9-7.5.9-7.5s0-4.8-.9-7.5z" fill="white"/>
                  <path d="M21 29V18l9 5.5-9 5.5z" fill="#FF0000"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">YouTube</p>
            </div>

            {/* TikTok - REAL LOGO */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="black"/>
                  <path d="M34.1 18.3c-2.4 0-4.5-1.3-5.6-3.2v11.5c0 5.8-4.7 10.5-10.5 10.5S7.5 32.4 7.5 26.6c0-5.8 4.7-10.5 10.5-10.5.4 0 .8 0 1.2.1v5.2c-.4-.1-.8-.1-1.2-.1-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2V8.5h5.2c0 .4.1.8.1 1.2.5 2.7 2.6 4.8 5.3 5.3.4.1.8.1 1.2.1v5.2c-.3 0-.6 0-.9 0z" fill="#00F2EA"/>
                  <path d="M28.5 15.1c1.1 1.9 3.2 3.2 5.6 3.2v-5.2c-1.3-.2-2.5-.9-3.4-1.7-1.7-1.6-2.8-3.9-2.8-6.4h-5.2v22c0 2.9-2.3 5.2-5.2 5.2s-5.2-2.3-5.2-5.2 2.3-5.2 5.2-5.2c.4 0 .8 0 1.2.1v-5.2c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5V18.3z" fill="#FF004F"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">TikTok</p>
            </div>

            {/* X (Twitter) - REAL LOGO */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="black"/>
                  <path d="M30.5 13h4.7l-10.3 11.8L37 35h-9.5l-7.4-9.7L11.7 35H7l11-12.6L7.7 13h9.8l6.7 8.9L30.5 13zm-1.7 19.8h2.6L17.4 15.7h-2.8l13.2 17.1z" fill="white"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">X (Twitter)</p>
            </div>

            {/* SEO Tools */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="13" stroke="#4285F4" strokeWidth="4" fill="none"/>
                  <path d="M29 29L40 40" stroke="#34A853" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="20" cy="20" r="8" fill="#4285F4" fillOpacity="0.2"/>
                  <path d="M15 20L18 23L25 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">SEO Tools</p>
            </div>

            {/* Analytics */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="4" fill="#F9AB00"/>
                  <path d="M24 12L12 18V30L24 36L36 30V18L24 12Z" fill="white"/>
                  <path d="M24 24V36L36 30V18L24 24Z" fill="#E37400"/>
                  <path d="M12 18L24 24V36L12 30V18Z" fill="#E8710A"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">Analytics</p>
            </div>

            {/* Creative Tools */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="8" fill="#EA4335"/>
                  <path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="white"/>
                  <circle cx="20" cy="20" r="3" fill="white"/>
                  <circle cx="28" cy="20" r="3" fill="white"/>
                  <circle cx="20" cy="28" r="3" fill="white"/>
                  <circle cx="28" cy="28" r="3" fill="white"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">Creative</p>
            </div>

            {/* Data Studio */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="4" fill="#FBBC04"/>
                  <rect x="12" y="12" width="24" height="24" rx="2" fill="white"/>
                  <rect x="16" y="16" width="6" height="6" fill="#4285F4"/>
                  <rect x="26" y="16" width="6" height="6" fill="#34A853"/>
                  <rect x="16" y="26" width="6" height="6" fill="#EA4335"/>
                  <rect x="26" y="26" width="6" height="6" fill="#FBBC04"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">Data Studio</p>
            </div>

            {/* Tag Manager */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="4" fill="#4285F4"/>
                  <path d="M14 24L18 20L22 24L26 20L30 24L34 20" stroke="white" strokeWidth="2.5" fill="none"/>
                  <rect x="16" y="28" width="4" height="6" fill="white"/>
                  <rect x="22" y="26" width="4" height="8" fill="white"/>
                  <rect x="28" y="24" width="4" height="10" fill="white"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">Tag Manager</p>
            </div>

            {/* Optimization */}
            <div className="group text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="24" fill="#34A853"/>
                  <path d="M20 24L24 28L32 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <p className="text-sm font-bold text-gray-800">Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#4285F4] mb-2">{t.why.subtitle}</p>
            <h2 className="text-4xl font-bold mb-4">{t.why.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.why.services.map((service, index) => (
              <a 
                key={index} 
                href={`/${lang}/hizmetler/${service.slug}`}
                className="block group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-[#4285F4] bg-gradient-to-br from-white to-gray-50 cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex items-center justify-center">
                      {service.icon === 'google-ads' && (
                        <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="24" cy="24" r="20" fill="#4285F4"/>
                          <path d="M24 14L18 28H22L20 34L30 20H26L28 14H24Z" fill="#FBBC04"/>
                          <path d="M24 14L18 28H22L20 34L30 20H26L28 14H24Z" fill="url(#paint0_linear)" fillOpacity="0.3"/>
                          <defs>
                            <linearGradient id="paint0_linear" x1="24" y1="14" x2="24" y2="34" gradientUnits="userSpaceOnUse">
                              <stop stopColor="white"/>
                              <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      )}
                      {service.icon === 'meta' && (
                        <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 4C12.95 4 4 12.95 4 24C4 33.93 11.19 42.08 20.63 43.73V29.69H15.28V24H20.63V19.77C20.63 14.48 23.62 11.72 28.43 11.72C30.75 11.72 33.17 12.13 33.17 12.13V17.31H30.52C27.91 17.31 27.06 18.95 27.06 20.63V24H32.94L32.01 29.69H27.06V43.73C36.5 42.08 43.69 33.93 43.69 24C43.69 12.95 34.74 4 23.69 4H24Z" fill="url(#paint0_linear_meta)"/>
                          <defs>
                            <linearGradient id="paint0_linear_meta" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#0081FB"/>
                              <stop offset="1" stopColor="#0044F8"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      )}
                      {service.icon === 'tiktok' && (
                        <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="12" fill="black"/>
                          <path d="M34.1 18.3c-2.4 0-4.5-1.3-5.6-3.2v11.5c0 5.8-4.7 10.5-10.5 10.5S7.5 32.4 7.5 26.6c0-5.8 4.7-10.5 10.5-10.5.4 0 .8 0 1.2.1v5.2c-.4-.1-.8-.1-1.2-.1-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2V8.5h5.2c0 .4.1.8.1 1.2.5 2.7 2.6 4.8 5.3 5.3.4.1.8.1 1.2.1v5.2c-.3 0-.6 0-.9 0z" fill="#00F2EA"/>
                          <path d="M28.5 15.1c1.1 1.9 3.2 3.2 5.6 3.2v-5.2c-1.3-.2-2.5-.9-3.4-1.7-1.7-1.6-2.8-3.9-2.8-6.4h-5.2v22c0 2.9-2.3 5.2-5.2 5.2s-5.2-2.3-5.2-5.2 2.3-5.2 5.2-5.2c.4 0 .8 0 1.2.1v-5.2c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5V18.3z" fill="#FF004F"/>
                        </svg>
                      )}
                      {service.icon === 'x' && (
                        <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="12" fill="black"/>
                          <path d="M30.5 13h4.7l-10.3 11.8L37 35h-9.5l-7.4-9.7L11.7 35H7l11-12.6L7.7 13h9.8l6.7 8.9L30.5 13zm-1.7 19.8h2.6L17.4 15.7h-2.8l13.2 17.1z" fill="white"/>
                        </svg>
                      )}
                      {service.icon === 'seo' && (
                        <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="13" stroke="#4285F4" strokeWidth="4" fill="none"/>
                          <path d="M29 29L40 40" stroke="#34A853" strokeWidth="4" strokeLinecap="round"/>
                          <circle cx="20" cy="20" r="8" fill="#4285F4" fillOpacity="0.2"/>
                          <path d="M15 20L18 23L25 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {service.icon === 'review' && (
                        <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="8" fill="#EA4335" fillOpacity="0.1"/>
                          <path d="M24 8L27.5 18.5H38.5L29.5 25.5L33 36L24 29L15 36L18.5 25.5L9.5 18.5H20.5L24 8Z" fill="#FBBC04"/>
                          <path d="M24 8L27.5 18.5H38.5L29.5 25.5L33 36L24 29L15 36L18.5 25.5L9.5 18.5H20.5L24 8Z" stroke="#EA4335" strokeWidth="2"/>
                          <rect x="20" y="30" width="8" height="2" rx="1" fill="#EA4335"/>
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#4285F4] transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center text-[#4285F4] font-semibold group-hover:translate-x-2 transition-transform">
                      <span>{lang === 'de' ? 'Mehr erfahren' : lang === 'en' ? 'Learn more' : 'Detayları Gör'}</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section id="success" className="py-20 bg-gradient-to-br from-[#4285F4]/5 to-[#34A853]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#34A853] mb-2">{t.success.subtitle}</p>
            <h2 className="text-4xl font-bold mb-4">{t.success.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.success.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.success.metrics.map((metric, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4">
                    {index === 0 && <svg className="h-12 w-12 mx-auto text-[#34A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    {index === 1 && <Award className="h-12 w-12 mx-auto text-[#FBBC04]" />}
                    {index === 2 && <svg className="h-12 w-12 mx-auto text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                    {index === 3 && <svg className="h-12 w-12 mx-auto text-[#EA4335]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{metric.subtitle}</p>
                  <h3 className="text-xl font-bold">{metric.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-20 bg-gradient-to-br from-[#4285F4] to-[#EA4335] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold mb-2 opacity-90">{t.corporate.subtitle}</p>
            <h2 className="text-4xl font-bold mb-4">{t.corporate.title}</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">{t.corporate.description}</p>
            <Button size="lg" className="mt-6 bg-white text-[#4285F4] hover:bg-gray-100" asChild>
              <a href="https://wa.me/491724106463" target="_blank" rel="noopener noreferrer">
                {t.corporate.cta}
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {t.corporate.features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-90">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#FBBC04] mb-2">{t.testimonials.subtitle}</p>
            <h2 className="text-4xl font-bold mb-4">{t.testimonials.title}</h2>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-5xl font-bold">5.0</span>
              <div>
                <div className="flex text-[#FBBC04]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-sm text-muted-foreground">{t.testimonials.rating}</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.testimonials.reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex text-[#FBBC04] mb-4">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm mb-4 text-muted-foreground italic">"{review.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853]" />
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#EA4335] mb-2">{t.about.subtitle}</p>
            <h2 className="text-4xl font-bold mb-4">{t.about.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.about.features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <CheckCircle className="h-10 w-10 text-[#34A853] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
              <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder={t.contact.form.name}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={t.contact.form.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder={t.contact.form.phone}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder={t.contact.form.message}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  {formStatus.message && (
                    <div className={`p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      {formStatus.message}
                    </div>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#4285F4] to-[#34A853] hover:from-[#3367d6] hover:to-[#2d9249] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (lang === 'de' ? 'Wird gesendet...' : lang === 'en' ? 'Sending...' : 'Gönderiliyor...') : t.contact.form.submit}
                  </Button>
                </form>
              </CardContent>
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
              <a href="https://wa.me/491724106463" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.contact.cta.whatsapp}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent">Salih Maral</h3>
              <p className="text-sm text-gray-400">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.nav.contact}</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>01724106463</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>kontakt@salihmaral.de</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.nav.services}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Google Ads</li>
                <li>Meta Ads</li>
                <li>SEO</li>
                <li>{lang === 'de' ? 'Beratung' : lang === 'en' ? 'Consulting' : 'Danışmanlık'}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Salih Maral. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}