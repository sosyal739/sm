'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Award, BarChart3, Globe, Users, Target, TrendingUp, CheckCircle, MessageCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

const translations = {
  de: {
    back: 'Zurück',
    badge: 'Google Partner Agentur',
    title: 'Über uns',
    subtitle: 'Ihr Partner für digitales Wachstum',
    intro: 'Salih Maral ist ein erfahrener Digital Marketing Experte mit Sitz in Deutschland. Mit über 15 Jahren Branchenerfahrung und als zertifizierter Google Partner unterstützen wir Unternehmen dabei, ihre Online-Präsenz zu maximieren und messbares Wachstum zu erzielen.',
    mission: {
      title: 'Unsere Mission',
      text: 'Wir helfen Unternehmen jeder Größe, im digitalen Zeitalter erfolgreich zu sein. Unser datengetriebener Ansatz und unsere tiefe Expertise in Google Ads, Meta Ads und SEO ermöglichen es uns, maßgeschneiderte Strategien zu entwickeln, die echte Ergebnisse liefern — nicht nur Klicks, sondern zahlende Kunden.'
    },
    identity: {
      title: 'Wer wir sind',
      items: [
        { title: 'Zertifizierter Google Partner', desc: 'Offiziell von Google als Partner-Agentur anerkannt. Wir erfüllen die strengen Anforderungen von Google an Kompetenz, Leistung und Kundenzufriedenheit.' },
        { title: '15+ Jahre Erfahrung', desc: 'Seit über 15 Jahren im digitalen Marketing tätig. Hunderte erfolgreiche Kampagnen in verschiedenen Branchen und Märkten.' },
        { title: '300+ Marken betreut', desc: 'Mehr als 300 Unternehmen und Marken haben uns ihr digitales Wachstum anvertraut — von lokalen KMUs bis zu internationalen Unternehmen.' },
        { title: 'Standort Deutschland', desc: 'Mit Sitz in Dreieich bei Frankfurt am Main betreuen wir Kunden in ganz Deutschland, Europa und der Türkei.' }
      ]
    },
    services: {
      title: 'Was wir tun',
      items: [
        'Google Ads Management (Search, Display, Shopping, YouTube)',
        'Meta Ads Management (Facebook & Instagram)',
        'TikTok & X (Twitter) Advertising',
        'Suchmaschinenoptimierung (SEO)',
        'Google Bewertungsmanagement',
        'Conversion-Optimierung & Webanalyse'
      ]
    },
    values: {
      title: 'Unsere Werte',
      items: [
        { title: 'Transparenz', desc: 'Klare, ehrliche Kommunikation und detaillierte Berichte — Sie wissen immer, wohin Ihr Budget fließt.' },
        { title: 'Ergebnisorientierung', desc: 'Wir messen Erfolg nicht an Klicks, sondern an Umsatz und ROI. Jede Strategie zielt auf messbare Geschäftsergebnisse ab.' },
        { title: 'Partnerschaft', desc: 'Wir betrachten unsere Kunden als Partner. Ihr Erfolg ist unser Erfolg — deshalb nehmen wir nur eine begrenzte Anzahl von Kunden an.' }
      ]
    },
    cta: {
      title: 'Bereit für digitales Wachstum?',
      desc: 'Kontaktieren Sie uns für eine kostenlose Erstberatung.',
      btn1: 'Kostenloses Angebot',
      btn2: 'WhatsApp'
    },
    footer: { rights: 'Alle Rechte vorbehalten.' }
  },
  tr: {
    back: 'Geri',
    badge: 'Google Partner Ajans',
    title: 'Hakkımızda',
    subtitle: 'Dijital büyümenizde güvenilir partneriniz',
    intro: 'Salih Maral, Almanya merkezli deneyimli bir Dijital Pazarlama Uzmanıdır. 15 yılı aşkın sektör deneyimi ve sertifikalı Google Partner statüsü ile işletmelerin online varlıklarını maksimize etmelerine ve ölçülebilir büyüme elde etmelerine yardımcı oluyoruz.',
    mission: {
      title: 'Misyonumuz',
      text: 'Her büyüklükteki işletmenin dijital çağda başarılı olmasına yardımcı oluyoruz. Veri odaklı yaklaşımımız ve Google Ads, Meta Ads ve SEO\'daki derin uzmanlığımız, gerçek sonuçlar sunan özelleştirilmiş stratejiler geliştirmemizi sağlıyor — sadece tıklama değil, ödeme yapan müşteriler.'
    },
    identity: {
      title: 'Biz Kimiz',
      items: [
        { title: 'Sertifikalı Google Partner', desc: 'Google tarafından resmi olarak Partner Ajans olarak tanınmaktayız. Yetkinlik, performans ve müşteri memnuniyeti konusunda Google\'ın katı gereksinimlerini karşılıyoruz.' },
        { title: '15+ Yıl Deneyim', desc: '15 yılı aşkın süredir dijital pazarlama alanında faaliyet gösteriyoruz. Farklı sektör ve pazarlarda yüzlerce başarılı kampanya.' },
        { title: '300+ Marka', desc: '300\'den fazla işletme ve marka dijital büyümelerini bize emanet etti — yerel KOBİ\'lerden uluslararası şirketlere kadar.' },
        { title: 'Almanya Merkezli', desc: 'Frankfurt am Main yakınlarında Dreieich\'te bulunan ofisimizden Almanya, Avrupa ve Türkiye genelinde müşterilere hizmet veriyoruz.' }
      ]
    },
    services: {
      title: 'Ne Yapıyoruz',
      items: [
        'Google Ads Yönetimi (Arama, Display, Shopping, YouTube)',
        'Meta Ads Yönetimi (Facebook & Instagram)',
        'TikTok & X (Twitter) Reklamları',
        'Arama Motoru Optimizasyonu (SEO)',
        'Google Yorum Yönetimi',
        'Dönüşüm Optimizasyonu & Web Analizi'
      ]
    },
    values: {
      title: 'Değerlerimiz',
      items: [
        { title: 'Şeffaflık', desc: 'Net, dürüst iletişim ve detaylı raporlar — bütçenizin nereye gittiğini her zaman bilirsiniz.' },
        { title: 'Sonuç Odaklılık', desc: 'Başarıyı tıklamalarla değil, ciro ve ROI ile ölçüyoruz. Her strateji ölçülebilir iş sonuçlarına yöneliktir.' },
        { title: 'Ortaklık', desc: 'Müşterilerimizi partner olarak görüyoruz. Başarınız bizim başarımızdır — bu yüzden sınırlı sayıda müşteri kabul ediyoruz.' }
      ]
    },
    cta: {
      title: 'Dijital büyümeye hazır mısınız?',
      desc: 'Ücretsiz ilk danışmanlık için bizimle iletişime geçin.',
      btn1: 'Ücretsiz Teklif Alın',
      btn2: 'WhatsApp'
    },
    footer: { rights: 'Tüm hakları saklıdır.' }
  },
  en: {
    back: 'Back',
    badge: 'Google Partner Agency',
    title: 'About Us',
    subtitle: 'Your trusted partner for digital growth',
    intro: 'Salih Maral is an experienced Digital Marketing Expert based in Germany. With over 15 years of industry experience and certified Google Partner status, we help businesses maximize their online presence and achieve measurable growth.',
    mission: {
      title: 'Our Mission',
      text: 'We help businesses of all sizes succeed in the digital age. Our data-driven approach and deep expertise in Google Ads, Meta Ads, and SEO allow us to develop customized strategies that deliver real results — not just clicks, but paying customers.'
    },
    identity: {
      title: 'Who We Are',
      items: [
        { title: 'Certified Google Partner', desc: 'Officially recognized by Google as a Partner Agency. We meet Google\'s strict requirements for competence, performance, and customer satisfaction.' },
        { title: '15+ Years Experience', desc: 'Active in digital marketing for over 15 years. Hundreds of successful campaigns across various industries and markets.' },
        { title: '300+ Brands Served', desc: 'More than 300 businesses and brands have entrusted us with their digital growth — from local SMEs to international companies.' },
        { title: 'Based in Germany', desc: 'Located in Obertshausen near Frankfurt am Main, we serve clients across Germany, Europe, and Turkey.' }
      ]
    },
    services: {
      title: 'What We Do',
      items: [
        'Google Ads Management (Search, Display, Shopping, YouTube)',
        'Meta Ads Management (Facebook & Instagram)',
        'TikTok & X (Twitter) Advertising',
        'Search Engine Optimization (SEO)',
        'Google Review Management',
        'Conversion Optimization & Web Analytics'
      ]
    },
    values: {
      title: 'Our Values',
      items: [
        { title: 'Transparency', desc: 'Clear, honest communication and detailed reports — you always know where your budget goes.' },
        { title: 'Results-Oriented', desc: 'We measure success not by clicks, but by revenue and ROI. Every strategy aims at measurable business results.' },
        { title: 'Partnership', desc: 'We view our clients as partners. Your success is our success — that\'s why we only take on a limited number of clients.' }
      ]
    },
    cta: {
      title: 'Ready for digital growth?',
      desc: 'Contact us for a free initial consultation.',
      btn1: 'Free Quote',
      btn2: 'WhatsApp'
    },
    footer: { rights: 'All rights reserved.' }
  }
}

export default function AboutPage() {
  const router = useRouter()
  const [lang, setLang] = useState('de')

  useEffect(() => {
    const saved = localStorage.getItem('preferredLanguage')
    if (saved && ['de', 'tr', 'en'].includes(saved)) setLang(saved)
  }, [])

  const t = translations[lang]

  const iconConfigs = [
    { icon: <Award className="h-8 w-8 text-[#4285F4]" />, color: 'border-[#4285F4]' },
    { icon: <BarChart3 className="h-8 w-8 text-[#EA4335]" />, color: 'border-[#EA4335]' },
    { icon: <Users className="h-8 w-8 text-[#FBBC04]" />, color: 'border-[#FBBC04]' },
    { icon: <Globe className="h-8 w-8 text-[#34A853]" />, color: 'border-[#34A853]' },
  ]

  const valueIcons = [
    <Target key={0} className="h-8 w-8 text-[#4285F4]" />,
    <TrendingUp key={1} className="h-8 w-8 text-[#34A853]" />,
    <Users key={2} className="h-8 w-8 text-[#FBBC04]" />,
  ]

  const whatsappUrl = `https://wa.me/491724106463?text=${lang === 'de' ? 'Hallo,%20ich%20interessiere%20mich%20für%20Ihre%20Digital%20Marketing%20Dienstleistungen.' : lang === 'en' ? 'Hello,%20I%20am%20interested%20in%20your%20digital%20marketing%20services.' : 'Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum.'}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push(lang === 'de' ? '/' : `/${lang}`)} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5 text-[#4285F4]" />
              <span className="font-semibold text-gray-700">{t.back}</span>
            </button>
            <a href={lang === 'de' ? '/' : `/${lang}`}>
              <img src="/logo.png" alt="Salih Maral Logo" className="h-10 w-auto" width="40" height="40" />
            </a>
            <div className="flex items-center space-x-2">
              <Button variant={lang === 'de' ? 'default' : 'outline'} size="sm" onClick={() => setLang('de')} className={lang === 'de' ? 'bg-[#4285F4]' : ''}>DE</Button>
              <Button variant={lang === 'en' ? 'default' : 'outline'} size="sm" onClick={() => setLang('en')} className={lang === 'en' ? 'bg-[#4285F4]' : ''}>EN</Button>
              <Button variant={lang === 'tr' ? 'default' : 'outline'} size="sm" onClick={() => setLang('tr')} className={lang === 'tr' ? 'bg-[#4285F4]' : ''}>TR</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center space-x-2 bg-[#4285F4]/10 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-[#4285F4]" />
            <span className="text-sm font-medium text-[#4285F4]">{t.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" data-testid="about-title">{t.title}</h1>
          <p className="text-xl text-gray-500 mb-8">{t.subtitle}</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.intro}</p>
          {/* Google Partners Badge */}
          <div className="mt-8">
            <a href="https://www.google.com/partners/agency?id=5868261912" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
              <img src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg" alt="Google Partner" className="h-24 w-auto mx-auto" width="163" height="96" />
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-[#4285F4]/20 overflow-hidden">
            <div className="bg-gradient-to-r from-[#4285F4] to-[#34A853] p-6">
              <h2 className="text-2xl font-bold text-white">{t.mission.title}</h2>
            </div>
            <CardContent className="pt-6">
              <p className="text-lg text-gray-600 leading-relaxed">{t.mission.text}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.identity.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.identity.items.map((item, idx) => (
              <Card key={idx} className={`border-l-4 ${iconConfigs[idx].color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    {iconConfigs[idx].icon}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#4285F4]/5 to-[#34A853]/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {t.services.items.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="h-5 w-5 text-[#34A853] flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.values.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.values.items.map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">{valueIcons[idx]}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4285F4] to-[#34A853] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{t.cta.desc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#4285F4] hover:bg-gray-100" onClick={() => router.push(lang === 'de' ? '/#contact' : `/${lang}#contact`)}>
              {t.cta.btn1}
            </Button>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#1da851] text-white" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.cta.btn2}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <a href={lang === 'de' ? '/' : `/${lang}`} className="inline-block mb-4">
            <img src="/logo.png" alt="Salih Maral Logo" className="h-12 w-auto mx-auto" width="48" height="48" loading="lazy" />
          </a>
          <p className="text-sm text-gray-400">© 2026 Salih Maral. {t.footer.rights}</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-400">
            <a href="/about" className="hover:text-white transition-colors">{t.title}</a>
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
