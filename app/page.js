'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MessageCircle, CheckCircle, BarChart3, Users, Award, TrendingUp, Globe, Star } from 'lucide-react'
import CookieConsent from '@/components/CookieConsent'

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
      cta1: 'WhatsApp',
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
      cta1: 'WhatsApp',
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
      cta1: 'WhatsApp',
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

export default function Home({ initialLang = 'de' }) {
  const [lang, setLang] = useState(initialLang)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      {/* SEO */}
      <head>
        <link rel="canonical" href={lang === 'de' ? 'https://salihmaral.de/' : `https://salihmaral.de/${lang}`} />
        <link rel="alternate" hrefLang="de" href="https://salihmaral.de/" />
        <link rel="alternate" hrefLang="tr" href="https://salihmaral.de/tr" />
        <link rel="alternate" hrefLang="en" href="https://salihmaral.de/en" />
        <link rel="alternate" hrefLang="x-default" href="https://salihmaral.de/" />
        <meta httpEquiv="content-language" content={lang} />
        <meta name="description" content={t.hero.description} />
        <title>{lang === 'de' ? 'Salih Maral - Digital Marketing Experte | Google Ads, Meta Ads & SEO' : lang === 'tr' ? 'Salih Maral - Dijital Pazarlama Uzmanı | Google Ads, Meta Ads & SEO' : 'Salih Maral - Digital Marketing Expert | Google Ads, Meta Ads & SEO'}</title>
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
                  url: `https://salihmaral.de/${lang}/hizmetler/google-ads`
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: 'Meta Ads (Facebook & Instagram)',
                  description: lang === 'de' ? 'Erreichen Sie Ihre Zielgruppe auf Facebook und Instagram' : lang === 'tr' ? 'Facebook ve Instagram\'da hedef kitlenize ulaşın' : 'Reach your target audience on Facebook and Instagram',
                  url: `https://salihmaral.de/${lang}/hizmetler/meta-ads`
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: 'TikTok Ads',
                  description: lang === 'de' ? 'Erreichen Sie ein junges, dynamisches Publikum' : lang === 'tr' ? 'Genç ve dinamik kitlelere ulaşın' : 'Reach a young, dynamic audience',
                  url: `https://salihmaral.de/${lang}/hizmetler/tiktok-ads`
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: 'X (Twitter) Ads',
                  description: lang === 'de' ? 'Heben Sie sich bei Trendthemen hervor' : lang === 'tr' ? 'Trend konularda öne çıkın' : 'Stand out in trending topics',
                  url: `https://salihmaral.de/${lang}/hizmetler/x-ads`
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: lang === 'de' ? 'SEO Dienstleistungen' : lang === 'tr' ? 'SEO Hizmetleri' : 'SEO Services',
                  description: lang === 'de' ? 'Erreichen Sie Top-Rankings bei Google' : lang === 'tr' ? 'Google\'da üst sıralara çıkın' : 'Achieve top rankings on Google',
                  url: `https://salihmaral.de/${lang}/hizmetler/seo`
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: lang === 'de' ? 'Bewertungsmanagement' : lang === 'tr' ? 'Yorum Yönetimi' : 'Review Management',
                  description: lang === 'de' ? 'Professionelles Google Bewertungsmanagement' : lang === 'tr' ? 'Profesyonel Google yorum yönetimi' : 'Professional Google review management',
                  url: `https://salihmaral.de/${lang}/hizmetler/yorum-yonetimi`
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
                { '@type': 'ListItem', position: 1, name: lang === 'de' ? 'Google Ads Management' : lang === 'tr' ? 'Google Ads Yönetimi' : 'Google Ads Management', url: `https://salihmaral.de/${lang}/hizmetler/google-ads` },
                { '@type': 'ListItem', position: 2, name: 'Meta Ads (Facebook & Instagram)', url: `https://salihmaral.de/${lang}/hizmetler/meta-ads` },
                { '@type': 'ListItem', position: 3, name: 'TikTok Ads', url: `https://salihmaral.de/${lang}/hizmetler/tiktok-ads` },
                { '@type': 'ListItem', position: 4, name: 'X (Twitter) Ads', url: `https://salihmaral.de/${lang}/hizmetler/x-ads` },
                { '@type': 'ListItem', position: 5, name: lang === 'de' ? 'SEO Dienstleistungen' : lang === 'tr' ? 'SEO Hizmetleri' : 'SEO Services', url: `https://salihmaral.de/${lang}/hizmetler/seo` },
                { '@type': 'ListItem', position: 6, name: lang === 'de' ? 'Bewertungsmanagement' : lang === 'tr' ? 'Yorum Yönetimi' : 'Review Management', url: `https://salihmaral.de/${lang}/hizmetler/yorum-yonetimi` }
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
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads', url: `https://salihmaral.de/${lang}/hizmetler/google-ads` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads', url: `https://salihmaral.de/${lang}/hizmetler/meta-ads` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TikTok Ads', url: `https://salihmaral.de/${lang}/hizmetler/tiktok-ads` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'X Ads', url: `https://salihmaral.de/${lang}/hizmetler/x-ads` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO', url: `https://salihmaral.de/${lang}/hizmetler/seo` } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: lang === 'de' ? 'Bewertungsmanagement' : lang === 'tr' ? 'Yorum Yönetimi' : 'Review Management', url: `https://salihmaral.de/${lang}/hizmetler/yorum-yonetimi` } }
                ]
              }
            }
          ]
        }) }} />
      </head>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href={lang === 'de' ? '/' : `/${lang}`} className="flex items-center">
              <img src="/logo.png" alt="Salih Maral Logo" className="h-10 w-auto" width="40" height="40" />
            </a>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors flex items-center">
                  {t.nav.services}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <div className="py-2">
                    {t.why.services.map((service, idx) => (
                      <a
                        key={idx}
                        href={svcUrl(lang, service.slug)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#4285F4]/10 hover:text-[#4285F4] transition-colors"
                      >
                        <div className="font-semibold">{service.title}</div>
                        <div className="text-xs text-gray-500 mt-1">{service.description.substring(0, 50)}...</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={() => scrollToSection('success')} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{t.nav.success}</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{t.nav.about}</button>
              <a href="/blog" className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">Blog</a>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-bold text-gray-900 hover:text-[#4285F4] transition-colors">{t.nav.contact}</button>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={lang === 'de' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleLanguageChange('de')}
                className={lang === 'de' ? 'bg-[#4285F4]' : ''}
              >
                DE
              </Button>
              <Button
                variant={lang === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleLanguageChange('en')}
                className={lang === 'en' ? 'bg-[#4285F4]' : ''}
              >
                EN
              </Button>
              <Button
                variant={lang === 'tr' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleLanguageChange('tr')}
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
                  <a href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20für%20Ihre%20Digital%20Marketing%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.' : 'Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`} target="_blank" rel="noopener noreferrer">
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
                  width="600"
                  height="400"
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

      {/* Technologies Section - ANIMATED CAROUSEL */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-bold text-gray-500 tracking-widest mb-10">{lang === 'de' ? 'VERWENDETE PROFESSIONELLE TECHNOLOGIEN' : lang === 'en' ? 'PROFESSIONAL TECHNOLOGIES USED' : 'KULLANDIĞIMIZ PROFESYONEL TEKNOLOJİLER'}</h2>
          
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
        
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Services Section - ENHANCED */}
      <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/5 via-transparent to-[#34A853]/5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#4285F4] mb-2">{t.why.subtitle}</p>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04] bg-clip-text text-transparent">{t.why.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4285F4] to-[#34A853] mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {t.why.services.map((service, index) => {
              // Her hizmet için özel renk şeması
              const colorSchemes = [
                { // Google Ads - Mavi/Sarı/Yeşil/Kırmızı
                  gradient: 'from-[#4285F4]/10 via-[#FBBC04]/5 to-[#34A853]/10',
                  hoverGradient: 'group-hover:from-[#4285F4]/20 group-hover:via-[#FBBC04]/10 group-hover:to-[#34A853]/20',
                  border: 'border-[#4285F4]/30',
                  hoverBorder: 'group-hover:border-[#4285F4]',
                  shadow: 'shadow-[#4285F4]/10',
                  hoverShadow: 'hover:shadow-[#4285F4]/30',
                  accent: 'bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04]',
                  text: 'text-[#4285F4]',
                  glow: 'before:bg-[#4285F4]/20'
                },
                { // Meta - Mavi
                  gradient: 'from-[#1877F2]/10 via-[#1877F2]/5 to-[#00C6FF]/10',
                  hoverGradient: 'group-hover:from-[#1877F2]/20 group-hover:via-[#1877F2]/10 group-hover:to-[#00C6FF]/20',
                  border: 'border-[#1877F2]/30',
                  hoverBorder: 'group-hover:border-[#1877F2]',
                  shadow: 'shadow-[#1877F2]/10',
                  hoverShadow: 'hover:shadow-[#1877F2]/30',
                  accent: 'bg-gradient-to-r from-[#1877F2] to-[#00C6FF]',
                  text: 'text-[#1877F2]',
                  glow: 'before:bg-[#1877F2]/20'
                },
                { // TikTok - Siyah/Pembe/Cyan
                  gradient: 'from-[#ff0050]/10 via-black/5 to-[#00f2ea]/10',
                  hoverGradient: 'group-hover:from-[#ff0050]/20 group-hover:via-black/10 group-hover:to-[#00f2ea]/20',
                  border: 'border-black/30',
                  hoverBorder: 'group-hover:border-black',
                  shadow: 'shadow-black/10',
                  hoverShadow: 'hover:shadow-black/30',
                  accent: 'bg-gradient-to-r from-[#ff0050] via-black to-[#00f2ea]',
                  text: 'text-black',
                  glow: 'before:bg-black/20'
                },
                { // X - Siyah
                  gradient: 'from-black/10 via-gray-500/5 to-black/10',
                  hoverGradient: 'group-hover:from-black/15 group-hover:via-gray-500/10 group-hover:to-black/15',
                  border: 'border-black/30',
                  hoverBorder: 'group-hover:border-black',
                  shadow: 'shadow-black/10',
                  hoverShadow: 'hover:shadow-black/30',
                  accent: 'bg-gradient-to-r from-gray-800 to-black',
                  text: 'text-black',
                  glow: 'before:bg-black/20'
                },
                { // SEO - Yeşil
                  gradient: 'from-[#34A853]/10 via-[#34A853]/5 to-[#0F9D58]/10',
                  hoverGradient: 'group-hover:from-[#34A853]/20 group-hover:via-[#34A853]/10 group-hover:to-[#0F9D58]/20',
                  border: 'border-[#34A853]/30',
                  hoverBorder: 'group-hover:border-[#34A853]',
                  shadow: 'shadow-[#34A853]/10',
                  hoverShadow: 'hover:shadow-[#34A853]/30',
                  accent: 'bg-gradient-to-r from-[#34A853] to-[#0F9D58]',
                  text: 'text-[#34A853]',
                  glow: 'before:bg-[#34A853]/20'
                },
                { // Reviews - Sarı/Kırmızı
                  gradient: 'from-[#FBBC04]/10 via-[#EA4335]/5 to-[#FBBC04]/10',
                  hoverGradient: 'group-hover:from-[#FBBC04]/20 group-hover:via-[#EA4335]/10 group-hover:to-[#FBBC04]/20',
                  border: 'border-[#FBBC04]/30',
                  hoverBorder: 'group-hover:border-[#FBBC04]',
                  shadow: 'shadow-[#FBBC04]/10',
                  hoverShadow: 'hover:shadow-[#FBBC04]/30',
                  accent: 'bg-gradient-to-r from-[#FBBC04] via-[#EA4335] to-[#FBBC04]',
                  text: 'text-[#EA4335]',
                  glow: 'before:bg-[#FBBC04]/20'
                },
              ]
              const colors = colorSchemes[index]
              
              return (
                <a 
                  key={index} 
                  href={svcUrl(lang, service.slug)}
                  className="block group h-full"
                >
                  <Card className={`
                    h-full relative overflow-hidden cursor-pointer
                    bg-gradient-to-br ${colors.gradient} ${colors.hoverGradient}
                    border ${colors.border} ${colors.hoverBorder}
                    shadow-lg ${colors.shadow} ${colors.hoverShadow} hover:shadow-2xl
                    transition-all duration-500 ease-out
                    hover:-translate-y-3 hover:scale-[1.02]
                    before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500
                    ${colors.glow} group-hover:before:opacity-100
                    before:blur-3xl before:-z-10
                  `}>
                    {/* Animated accent line */}
                    <div className={`h-1.5 ${colors.accent} w-full transform origin-left scale-x-100 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    
                    {/* Floating particles effect on hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${colors.accent} animate-pulse`}></div>
                      <div className={`absolute top-8 right-12 w-1.5 h-1.5 rounded-full ${colors.accent} animate-pulse delay-100`}></div>
                      <div className={`absolute top-12 right-6 w-1 h-1 rounded-full ${colors.accent} animate-pulse delay-200`}></div>
                    </div>
                    
                    <CardContent className="p-6 lg:p-8 flex flex-col h-full relative z-10">
                      {/* Icon Container - Centered with glow effect */}
                      <div className="flex justify-center mb-6">
                        <div className={`
                          p-4 rounded-2xl bg-white/80 backdrop-blur-sm
                          shadow-lg group-hover:shadow-xl
                          transform group-hover:scale-110 group-hover:-rotate-3
                          transition-all duration-500 ease-out
                          relative
                        `}>
                          {/* Icon glow on hover */}
                          <div className={`absolute inset-0 rounded-2xl ${colors.accent} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                          
                          {service.icon === 'google-ads' && (
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" 
                              alt="Google Ads" 
                              className="w-14 h-14 object-contain relative z-10"
                              width="56" height="56" loading="lazy"
                            />
                          )}
                          {service.icon === 'meta' && (
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" 
                              alt="Meta" 
                              className="w-14 h-10 object-contain relative z-10"
                              width="56" height="40" loading="lazy"
                            />
                          )}
                          {service.icon === 'tiktok' && (
                            <img 
                              src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" 
                              alt="TikTok" 
                              className="w-14 h-14 object-contain relative z-10"
                              width="56" height="56" loading="lazy"
                            />
                          )}
                          {service.icon === 'x' && (
                            <svg className="w-14 h-14 relative z-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="48" height="48" rx="12" fill="black"/>
                              <path d="M30.5 13h4.7l-10.3 11.8L37 35h-9.5l-7.4-9.7L11.7 35H7l11-12.6L7.7 13h9.8l6.7 8.9L30.5 13zm-1.7 19.8h2.6L17.4 15.7h-2.8l13.2 17.1z" fill="white"/>
                            </svg>
                          )}
                          {service.icon === 'seo' && (
                            <svg className="w-14 h-14 relative z-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="20" cy="20" r="13" stroke="#34A853" strokeWidth="4" fill="none"/>
                              <path d="M29 29L40 40" stroke="#34A853" strokeWidth="4" strokeLinecap="round"/>
                              <path d="M15 20L18 23L25 16" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                          {service.icon === 'review' && (
                            <svg className="w-14 h-14 relative z-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M24 8L27.5 18.5H38.5L29.5 25.5L33 36L24 29L15 36L18.5 25.5L9.5 18.5H20.5L24 8Z" fill="#FBBC04"/>
                              <path d="M24 8L27.5 18.5H38.5L29.5 25.5L33 36L24 29L15 36L18.5 25.5L9.5 18.5H20.5L24 8Z" stroke="#EA4335" strokeWidth="2"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      {/* Title - Centered */}
                      <h3 className={`text-xl lg:text-2xl font-bold mb-3 text-gray-800 text-center group-hover:${colors.text} transition-colors duration-300`}>
                        {service.title}
                      </h3>
                      
                      {/* Description - Centered */}
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed text-center flex-grow mb-6">
                        {service.description}
                      </p>
                      
                      {/* CTA Button - Bottom with animated arrow */}
                      <div className="flex items-center justify-center pt-4 border-t border-gray-200/50">
                        <span className={`text-sm font-semibold ${colors.text} flex items-center gap-2 group-hover:gap-4 transition-all duration-300`}>
                          {lang === 'de' ? 'Mehr erfahren' : lang === 'en' ? 'Learn more' : 'Detayları Gör'}
                          <svg 
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 ease-out" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              )
            })}
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
            {t.success.metrics.map((metric, index) => {
              const borderColors = [
                'border-t-4 border-t-[#34A853] hover:shadow-[#34A853]/20',
                'border-t-4 border-t-[#FBBC04] hover:shadow-[#FBBC04]/20',
                'border-t-4 border-t-[#4285F4] hover:shadow-[#4285F4]/20',
                'border-t-4 border-t-[#EA4335] hover:shadow-[#EA4335]/20'
              ]
              return (
                <Card key={index} className={`bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${borderColors[index]}`}>
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
              )
            })}
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
              <a href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20für%20Ihre%20Digital%20Marketing%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.' : 'Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`} target="_blank" rel="noopener noreferrer">
                {t.corporate.cta}
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {t.corporate.features.map((feature, index) => {
              const borderColors = [
                'border-l-4 border-l-[#34A853]',
                'border-l-4 border-l-[#FBBC04]',
                'border-l-4 border-l-[#4285F4]',
                'border-l-4 border-l-white',
                'border-l-4 border-l-[#EA4335]',
                'border-l-4 border-l-[#00C6FF]'
              ]
              return (
                <Card key={index} className={`bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 ${borderColors[index]}`}>
                  <CardContent className="pt-6">
                    <CheckCircle className="h-8 w-8 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm opacity-90">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
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
            {t.about.features.map((feature, index) => {
              // Her özellik için farklı ikon ve renk
              const iconConfigs = [
                { icon: <BarChart3 key={0} className="h-10 w-10 text-[#4285F4] mb-4" />, border: 'border-l-4 border-l-[#4285F4]', shadow: 'hover:shadow-[#4285F4]/20' },
                { icon: <svg key={1} className="h-10 w-10 text-[#EA4335] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, border: 'border-l-4 border-l-[#EA4335]', shadow: 'hover:shadow-[#EA4335]/20' },
                { icon: <Award key={2} className="h-10 w-10 text-[#FBBC04] mb-4" />, border: 'border-l-4 border-l-[#FBBC04]', shadow: 'hover:shadow-[#FBBC04]/20' },
                { icon: <TrendingUp key={3} className="h-10 w-10 text-[#34A853] mb-4" />, border: 'border-l-4 border-l-[#34A853]', shadow: 'hover:shadow-[#34A853]/20' },
                { icon: <svg key={4} className="h-10 w-10 text-[#4285F4] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, border: 'border-l-4 border-l-[#4285F4]', shadow: 'hover:shadow-[#4285F4]/20' },
                { icon: <Phone key={5} className="h-10 w-10 text-[#34A853] mb-4" />, border: 'border-l-4 border-l-[#34A853]', shadow: 'hover:shadow-[#34A853]/20' }
              ]
              const config = iconConfigs[index] || { icon: <CheckCircle className="h-10 w-10 text-[#34A853] mb-4" />, border: 'border-l-4 border-l-[#34A853]', shadow: 'hover:shadow-[#34A853]/20' }
              
              return (
                <Card key={index} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${config.border} ${config.shadow}`}>
                  <CardContent className="pt-6">
                    {config.icon}
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
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

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{lang === 'de' ? 'Unser Blog' : lang === 'en' ? 'Our Blog' : 'Blog Yazılarımız'}</h2>
            <p className="text-lg text-muted-foreground">{lang === 'de' ? 'Neueste Artikel über digitales Marketing' : lang === 'en' ? 'Latest articles about digital marketing' : 'Dijital pazarlama hakkında güncel makaleler'}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/blog" className="block group">
              <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="h-44 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=250&fit=crop&q=80" alt="Google Ads" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width="500" height="250" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 right-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="h-6 w-auto drop-shadow-lg" width="24" height="24" loading="lazy" />
                  </div>
                </div>
                <CardContent className="pt-5 pb-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#4285F4] transition-colors">Google Ads {lang === 'de' ? 'Leitfaden' : lang === 'en' ? 'Guide' : 'Rehberi'}</h3>
                  <p className="text-sm text-muted-foreground">{lang === 'de' ? 'Alles über Google Ads Kampagnen' : lang === 'en' ? 'Everything about Google Ads campaigns' : 'Google Ads kampanyaları hakkında her şey'}</p>
                </CardContent>
              </Card>
            </a>
            <a href="/blog" className="block group">
              <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="h-44 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=250&fit=crop&q=80" alt="Meta Ads" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width="500" height="250" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 right-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-4 w-auto drop-shadow-lg brightness-0 invert" width="53" height="16" loading="lazy" />
                  </div>
                </div>
                <CardContent className="pt-5 pb-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#1877F2] transition-colors">Meta Ads {lang === 'de' ? 'Erfolg' : lang === 'en' ? 'Success' : 'Başarısı'}</h3>
                  <p className="text-sm text-muted-foreground">{lang === 'de' ? 'Facebook & Instagram Strategien' : lang === 'en' ? 'Facebook & Instagram strategies' : 'Facebook & Instagram stratejileri'}</p>
                </CardContent>
              </Card>
            </a>
            <a href="/blog" className="block group">
              <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="h-44 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=250&fit=crop&q=80" alt="SEO" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width="500" height="250" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 right-3">
                    <svg className="h-7 w-7 drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                  </div>
                </div>
                <CardContent className="pt-5 pb-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#34A853] transition-colors">SEO {lang === 'de' ? 'Tipps' : lang === 'en' ? 'Tips' : 'İpuçları'} 2026</h3>
                  <p className="text-sm text-muted-foreground">{lang === 'de' ? 'Top Rankings bei Google' : lang === 'en' ? 'Top rankings on Google' : 'Google\'da üst sıralarda'}</p>
                </CardContent>
              </Card>
            </a>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <a href="/blog">{lang === 'de' ? 'Alle Artikel ansehen' : lang === 'en' ? 'View all articles' : 'Tüm Yazıları Gör'}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/logo.png" alt="Salih Maral Logo" className="h-12 w-auto mb-4" width="48" height="48" loading="lazy" />
              <p className="text-sm text-gray-400">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.nav.contact}</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <a href={`https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20für%20Ihre%20Digital%20Marketing%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.' : 'Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`} target="_blank" className="hover:text-white transition-colors">WhatsApp</a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t.nav.services}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href={svcUrl(lang, 'google-ads')} className="hover:text-white transition-colors">Google Ads</a></li>
                <li><a href={svcUrl(lang, 'meta-ads')} className="hover:text-white transition-colors">Meta Ads</a></li>
                <li><a href={svcUrl(lang, 'tiktok-ads')} className="hover:text-white transition-colors">TikTok Ads</a></li>
                <li><a href={svcUrl(lang, 'x-ads')} className="hover:text-white transition-colors">X Ads</a></li>
                <li><a href={svcUrl(lang, 'seo')} className="hover:text-white transition-colors">SEO</a></li>
                <li><a href={svcUrl(lang, 'yorum-yonetimi')} className="hover:text-white transition-colors">{lang === 'de' ? 'Bewertungen' : lang === 'en' ? 'Reviews' : 'Yorum Yönetimi'}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>© 2026 Salih Maral. {t.footer.rights}</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
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