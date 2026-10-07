'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Menu, X, ChevronDown, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const germanCities = [
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

const servicesList = [
  { title: 'Google Ads Management', slug: 'google-ads' },
  { title: 'Meta Ads (Facebook & Instagram)', slug: 'meta-ads' },
  { title: 'Server-Side Tracking & CAPI', slug: 'server-side-tracking' },
  { title: 'YouTube Ads & Video Growth', slug: 'youtube-ads' },
  { title: 'TikTok Ads', slug: 'tiktok-ads' },
  { title: 'SEO & GEO Optimierung', slug: 'seo' }
]

export default function ImpressumPage() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Fixed Agency Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Logo & Google Partner Badge */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href="/" className="flex items-center">
                <picture>
                  <source srcSet="/logo-sm.webp" type="image/webp" />
                  <img src="/logo.png" alt="Salih Maral Logo" className="h-9 sm:h-10 w-auto" width="40" height="40" />
                </picture>
              </a>
              <div className="hidden lg:flex items-center pl-3 border-l border-slate-200">
                <a
                  href="https://www.google.com/partners/agency?id=5868261912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 hover:opacity-80 transition-opacity"
                >
                  <img
                    src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                    alt="Offizieller Google Partner"
                    className="h-7 w-auto"
                    width="48"
                    height="28"
                  />
                  <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                    Offizieller Google Partner
                  </span>
                </a>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-700">
              <a href="/" className="hover:text-blue-600 transition-colors">
                Startseite
              </a>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className="flex items-center space-x-1 hover:text-blue-600 transition-colors py-2"
                >
                  <span>Dienstleistungen</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {servicesDropdownOpen && (
                  <div
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                  >
                    {servicesList.map((svc) => (
                      <a
                        key={svc.slug}
                        href={`/de/dienstleistungen/${svc.slug}`}
                        className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {svc.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/de/standorte" className="hover:text-blue-600 transition-colors">
                Standorte
              </a>
              <a href="/about" className="hover:text-blue-600 transition-colors">
                Über Salih Maral
              </a>
              <a href="/blog" className="hover:text-blue-600 transition-colors">
                Ratgeber & Blog
              </a>
              <a href="/#contact" className="hover:text-blue-600 transition-colors">
                Kontakt
              </a>
            </div>

            {/* Right: CTA & Mobile Hamburger */}
            <div className="flex items-center space-x-3">
              <a
                href="/#contact"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-xs"
              >
                Analyse anfordern
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Menü öffnen"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-3 border-t border-slate-200 mt-3 space-y-2">
              <a href="/" className="block py-2 text-sm font-semibold text-slate-800">
                Startseite
              </a>
              <div className="py-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Dienstleistungen</span>
                <div className="pl-3 mt-1 space-y-1">
                  {servicesList.map((svc) => (
                    <a
                      key={svc.slug}
                      href={`/de/dienstleistungen/${svc.slug}`}
                      className="block py-1 text-xs text-slate-600 hover:text-blue-600"
                    >
                      {svc.title}
                    </a>
                  ))}
                </div>
              </div>
              <a href="/de/standorte" className="block py-2 text-sm font-semibold text-slate-800">
                Standorte in Deutschland
              </a>
              <a href="/about" className="block py-2 text-sm font-semibold text-slate-800">
                Über Salih Maral
              </a>
              <a href="/blog" className="block py-2 text-sm font-semibold text-slate-800">
                Ratgeber & Blog
              </a>
              <a href="/#contact" className="block py-2 text-sm font-semibold text-blue-600">
                Kostenlose Analyse anfordern
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Visual Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2">
          <a href="/" className="hover:text-blue-600 transition-colors">Startseite</a>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Impressum</span>
        </div>
      </div>

      {/* Content */}
      <section className="py-12 px-4 flex-1">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Impressum</h1>
          
          <Card className="bg-white shadow-xs border border-slate-200">
            <CardContent className="pt-8 pb-8 px-6 md:px-10 prose prose-lg max-w-none text-slate-700">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h2>
              <p>
                <strong>Salih Maral</strong><br />
                Freiberuflicher Digital Marketing Berater<br />
                Zertifizierter Google Partner
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Anschrift</h2>
              <p>
                Hegelstr. 32<br />
                63303 Dreieich<br />
                Deutschland
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Kontakt</h2>
              <p>
                E-Mail: <a href="mailto:info@salihmaral.de" className="text-blue-600 hover:underline">info@salihmaral.de</a><br />
                Elektronische Kontaktaufnahme: <a href="/#contact" className="text-blue-600 hover:underline">Kontaktformular</a>
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Handelsregister</h2>
              <p>
                Registernummer: HRB 55857
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE361707461
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Digital Marketing Berater / Consultant<br />
                Zuständige Kammer: Keine Kammerpflicht (freiberufliche Tätigkeit)
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a><br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu 
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese 
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                der Seiten verantwortlich.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-6 mb-2">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
                jeweiligen Autors bzw. Erstellers.
              </p>

              <p className="text-sm text-slate-500 mt-8 pt-4 border-t border-slate-200">
                Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">eRecht24</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rich Agency Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand & E-E-A-T */}
            <div className="space-y-4">
              <picture>
                <source srcSet="/logo-sm.webp" type="image/webp" />
                <img src="/logo.png" alt="Salih Maral Logo" className="h-10 w-auto" width="40" height="40" />
              </picture>
              <p className="text-xs text-slate-400 leading-relaxed">
                Salih Maral ist offizieller Google Partner und Performance-Marketing-Spezialist mit 17+ Jahren Erfahrung. 
                Fokussiert auf Google Ads, Meta Ads, Server-Side Tracking und messbaren Return on Ad Spend (ROAS).
              </p>
              <div className="pt-2">
                <a
                  href="https://www.google.com/partners/agency?id=5868261912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-85 transition-opacity"
                >
                  <img
                    src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                    alt="Offizieller Google Partner"
                    className="h-12 w-auto"
                    width="80"
                    height="48"
                  />
                </a>
              </div>
            </div>

            {/* Col 2: Core Services */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Dienstleistungen
              </div>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {servicesList.map((svc) => (
                  <li key={svc.slug}>
                    <a href={`/de/dienstleistungen/${svc.slug}`} className="hover:text-white transition-colors">
                      {svc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: German Cities */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Standorte in Deutschland
              </div>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-slate-400">
                {germanCities.map((c) => (
                  <li key={c.slug}>
                    <a href={`/de/standorte/${c.slug}`} className="hover:text-blue-400 transition-colors flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-slate-500" />
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-800">
                <a href="/de/standorte" className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center">
                  Alle 18 Standorte ansehen ➔
                </a>
              </div>
            </div>

            {/* Col 4: Quick Links & Legal */}
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Rehber & Unternehmen
              </div>
              <ul className="space-y-2.5 text-xs mb-6 text-slate-400">
                <li><a href="/" className="hover:text-white transition-colors">Startseite</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">Über Salih Maral</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Ratgeber & Blog</a></li>
                <li><a href="/blog/google-ads-agentur-preise-kosten-deutschland-2026" className="hover:text-white transition-colors">Google Ads Agentur Preise 2026</a></li>
                <li><a href="/#contact" className="text-blue-400 hover:underline">Kostenlose Analyse anfordern</a></li>
              </ul>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div><a href="/impressum" className="text-blue-400 font-semibold">Impressum</a></div>
                <div><a href="/datenschutz" className="text-slate-400 hover:text-white transition-colors">Datenschutz</a></div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              &copy; 2026 Salih Maral &mdash; Offizieller Google Partner. Alle Rechte vorbehalten.
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
