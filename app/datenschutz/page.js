'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Cookie, Mail, Phone, MapPin, Calendar, FileText, Lock, Eye, Trash2, Download, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function DatenschutzPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push('/')} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5 text-[#4285F4]" />
              <span className="font-semibold text-gray-700">Zurück</span>
            </button>
            <a href="/">
              <picture><source srcSet="/logo-sm.webp" type="image/webp" /><img src="/logo.png" alt="Salih Maral Logo" className="h-10 w-auto" width="40" height="40" /></picture>
            </a>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center space-x-2 bg-[#4285F4]/10 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-[#4285F4]" />
            <span className="text-sm font-medium text-[#4285F4]">DSGVO-konform</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Datenschutzerklärung</h1>
          <p className="text-xl text-gray-500">Transparenz und Schutz Ihrer persönlichen Daten</p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-4 bg-white border-y">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#verantwortlicher" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <FileText className="h-5 w-5 text-[#4285F4]" />
              <span className="text-sm font-medium">Verantwortlicher</span>
            </a>
            <a href="#cookies" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <Cookie className="h-5 w-5 text-[#EA4335]" />
              <span className="text-sm font-medium">Cookies</span>
            </a>
            <a href="#rechte" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <Lock className="h-5 w-5 text-[#34A853]" />
              <span className="text-sm font-medium">Ihre Rechte</span>
            </a>
            <a href="#kontakt" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <Mail className="h-5 w-5 text-[#FBBC04]" />
              <span className="text-sm font-medium">Kontakt</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          
          {/* Verantwortlicher */}
          <Card id="verantwortlicher" className="overflow-hidden">
            <div className="bg-[#4285F4] p-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                1. Verantwortlicher
              </h2>
            </div>
            <CardContent className="pt-6 prose prose-gray max-w-none">
              <p className="text-gray-600 mb-4">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler 
                Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold text-gray-900 text-lg mb-2">Salih Maral</p>
                <p className="text-gray-600 mb-1">Digital Marketing Experte</p>
                <div className="space-y-2 mt-4">
                  <p className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-[#4285F4]" />
                    Hegelstr., 63303 Dreieich, Deutschland
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2 text-[#4285F4]" />
                    info@salihmaral.de
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Datenschutz auf einen Blick */}
          <Card>
            <div className="bg-[#34A853] p-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Eye className="h-5 w-5 mr-2" />
                2. Datenschutz auf einen Blick
              </h2>
            </div>
            <CardContent className="pt-6 prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Allgemeine Hinweise</h3>
              <p className="text-gray-600 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Datenerfassung auf dieser Website</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#4285F4]">
                  <p className="font-semibold text-gray-900 mb-1">Wer ist verantwortlich für die Datenerfassung?</p>
                  <p className="text-gray-600 text-sm">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber Salih Maral.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-[#34A853]">
                  <p className="font-semibold text-gray-900 mb-1">Wie erfassen wir Ihre Daten?</p>
                  <p className="text-gray-600 text-sm">
                    Ihre Daten werden erhoben, indem Sie uns diese mitteilen (z.B. Kontaktformular) oder automatisch 
                    durch unsere IT-Systeme (technische Daten wie Browser, Betriebssystem).
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-[#FBBC04]">
                  <p className="font-semibold text-gray-900 mb-1">Wofür nutzen wir Ihre Daten?</p>
                  <p className="text-gray-600 text-sm">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                    Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card id="cookies">
            <div className="bg-[#EA4335] p-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Cookie className="h-5 w-5 mr-2" />
                3. Cookies und Tracking
              </h2>
            </div>
            <CardContent className="pt-6 prose prose-gray max-w-none">
              <p className="text-gray-600 mb-6">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät 
                gespeichert werden und die Ihr Browser speichert. Sie richten keinen Schaden an und enthalten 
                keine Viren.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Arten von Cookies</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="font-semibold text-gray-900">Notwendige Cookies</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich und können 
                    nicht deaktiviert werden.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="font-semibold text-gray-900">Funktionale Cookies</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies ermöglichen erweiterte Funktionen wie das Speichern Ihrer Spracheinstellungen.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-semibold text-gray-900">Analytische Cookies</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO</p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span className="font-semibold text-gray-900">Marketing Cookies</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies werden verwendet, um Werbung relevanter für Sie zu machen.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie-Einstellungen ändern</h3>
              <p className="text-gray-600 mb-4">
                Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf den folgenden Button klicken:
              </p>
              <Button 
                onClick={() => {
                  localStorage.removeItem('cookieConsent')
                  localStorage.removeItem('cookieConsentDate')
                  window.location.reload()
                }}
                className="bg-[#4285F4] hover:bg-[#3367D6]"
              >
                <Cookie className="h-4 w-4 mr-2" />
                Cookie-Einstellungen öffnen
              </Button>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Verwendete Cookies</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left font-semibold">Cookie-Name</th>
                      <th className="p-3 text-left font-semibold">Zweck</th>
                      <th className="p-3 text-left font-semibold">Speicherdauer</th>
                      <th className="p-3 text-left font-semibold">Typ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-mono text-xs">cookieConsent</td>
                      <td className="p-3">Speichert Ihre Cookie-Präferenzen</td>
                      <td className="p-3">1 Jahr</td>
                      <td className="p-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Notwendig</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-mono text-xs">preferredLanguage</td>
                      <td className="p-3">Speichert Ihre Spracheinstellung</td>
                      <td className="p-3">1 Jahr</td>
                      <td className="p-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Funktional</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Datenerfassung */}
          <Card>
            <div className="bg-[#FBBC04] p-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Download className="h-5 w-5 mr-2" />
                4. Datenerfassung auf dieser Website
              </h2>
            </div>
            <CardContent className="pt-6 prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Kontaktformular</h3>
              <p className="text-gray-600 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600">
                  <strong>Erfasste Daten:</strong> Name, E-Mail-Adresse, Telefonnummer, Nachricht<br />
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)<br />
                  <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage, max. 3 Jahre
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Anfrage per E-Mail, Telefon oder WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive 
                aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres 
                Anliegens bei uns gespeichert und verarbeitet.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Server-Log-Dateien</h3>
              <p className="text-gray-600 mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p className="text-gray-600">
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und nach 7 Tagen automatisch gelöscht.
              </p>
            </CardContent>
          </Card>

          {/* Ihre Rechte */}
          <Card id="rechte">
            <div className="bg-[#4285F4] p-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                5. Ihre Rechte
              </h2>
            </div>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-6">
                Sie haben gemäß DSGVO umfangreiche Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Eye className="h-5 w-5 text-[#4285F4] mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Recht auf Auskunft</p>
                    <p className="text-sm text-gray-600">Art. 15 DSGVO</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <FileText className="h-5 w-5 text-[#34A853] mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Recht auf Berichtigung</p>
                    <p className="text-sm text-gray-600">Art. 16 DSGVO</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Trash2 className="h-5 w-5 text-[#EA4335] mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Recht auf Löschung</p>
                    <p className="text-sm text-gray-600">Art. 17 DSGVO</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Lock className="h-5 w-5 text-[#FBBC04] mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Recht auf Einschränkung</p>
                    <p className="text-sm text-gray-600">Art. 18 DSGVO</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <Download className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Recht auf Datenübertragbarkeit</p>
                    <p className="text-sm text-gray-600">Art. 20 DSGVO</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Recht auf Widerspruch</p>
                    <p className="text-sm text-gray-600">Art. 21 DSGVO</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="font-semibold text-gray-900 mb-2">Beschwerderecht bei der Aufsichtsbehörde</p>
                <p className="text-sm text-gray-600">
                  Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. 
                  Zuständig ist die Aufsichtsbehörde des Bundeslandes, in dem Sie Ihren Wohnsitz haben.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Kontakt */}
          <Card id="kontakt">
            <div className="bg-[#34A853] p-4">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                6. Kontakt für Datenschutzanfragen
              </h2>
            </div>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-6">
                Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte können Sie uns jederzeit kontaktieren:
              </p>
              
              <div className="grid md:grid-cols-1 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-4">Per E-Mail</h3>
                  <a href="mailto:info@salihmaral.de" className="flex items-center text-[#4285F4] hover:underline">
                    <Mail className="h-5 w-5 mr-2" />
                    info@salihmaral.de
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Info */}
          <div className="text-center text-sm text-gray-500 pt-8 border-t">
            <p className="flex items-center justify-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Stand: März 2026</span>
            </p>
            <p className="mt-2">
              Diese Datenschutzerklärung wurde gemäß den Anforderungen der DSGVO und des TTDSG erstellt.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-4 text-center">
          <a href="/" className="inline-block mb-4">
            <picture><source srcSet="/logo-md.webp" type="image/webp" /><img src="/logo.png" alt="Salih Maral Logo" className="h-12 w-auto mx-auto" width="48" height="48" loading="lazy" /></picture>
          </a>
          <p className="text-sm text-gray-400">© 2026 Salih Maral. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-400">
            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
