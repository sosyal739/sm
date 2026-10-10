'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X, Settings, Cookie, Shield, BarChart3, Target, ExternalLink } from 'lucide-react'

// Function to load Google Analytics
const loadGoogleAnalytics = () => {
  if (typeof window !== 'undefined' && !window.gaLoaded) {
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QT1CZE5BJK'
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', 'G-QT1CZE5BJK', {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    })
    
    window.gaLoaded = true
    console.log('Google Analytics loaded with consent')
  }
}

// Function to disable Google Analytics
const disableGoogleAnalytics = () => {
  if (typeof window !== 'undefined') {
    window['ga-disable-G-QT1CZE5BJK'] = true
    document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = '_ga_QT1CZE5BJK=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  }
}

const translations = {
  tr: {
    title: 'Çerez Tercihleri',
    subtitle: 'Gizliliğiniz bizim için önemlidir',
    description: 'Web sitemizde size en iyi deneyimi sunmak için çerezler ve benzeri teknolojiler kullanıyoruz. Bazıları web sitesinin sorunsuz çalışması için zorunludur; diğerleri ise performansı ölçmemize, siteyi geliştirmemize ve size kişiselleştirilmiş içerik sunmamıza yardımcı olur. KVKK ve GDPR kapsamında zorunlu olmayan çerezler için onayınıza ihtiyaç duyuyoruz.',
    categories: {
      necessary: 'Zorunlu',
      functional: 'İşlevsel',
      analytics: 'İstatistik',
      marketing: 'Pazarlama'
    },
    buttons: {
      acceptAll: 'Tümünü Kabul Et',
      rejectAll: 'Yalnızca Zorunluları Kabul Et',
      settings: 'Ayarlar',
      savePreferences: 'Seçimi Kaydet'
    },
    links: {
      privacy: 'Gizlilik Politikası',
      imprint: 'Künye & Yasal Bildirim'
    },
    settingsModal: {
      title: 'Çerez Tercihlerini Yönetin',
      subtitle: 'KVKK & GDPR Uyumlu Rıza Yönetimi',
      alwaysActive: 'Her Zaman Etkin',
      necessaryTitle: 'Zorunlu Çerezler',
      necessaryDesc: 'Bu çerezler web sitesinin temel işlevlerini (güvenlik, sayfa gezintisi ve tercih yönetimi) yerine getirebilmesi için kesinlikle gereklidir ve devre dışı bırakılamaz.',
      necessaryLegal: 'Yasal Dayanak: Meşru menfaat (GDPR Md. 6 (1) (f))',
      functionalTitle: 'İşlevsel Çerezler',
      functionalDesc: 'Bu çerezler dil seçimi ve kullanıcı tercihlerini hatırlayarak gelişmiş ve kişiselleştirilmiş özellikler sunmamızı sağlar.',
      functionalLegal: 'Yasal Dayanak: Açık rıza (GDPR Md. 6 (1) (a))',
      analyticsTitle: 'İstatistik / Analiz Çerezleri',
      analyticsDesc: 'Bu çerezler ziyaretçilerin sitemizle nasıl etkileşimde bulunduğunu anlamamıza yardımcı olur (Google Analytics). Tüm veriler anonimleştirilerek toplanır.',
      analyticsLegal: 'Yasal Dayanak: Açık rıza (GDPR Md. 6 (1) (a))',
      analyticsProvider: 'Sağlayıcı: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, İrlanda',
      marketingTitle: 'Pazarlama Çerezleri',
      marketingDesc: 'Bu çerezler ilgi alanlarınıza uygun reklamlar sunmak ve reklam kampanyalarının performansını ölçmek amacıyla kullanılır.',
      marketingLegal: 'Yasal Dayanak: Açık rıza (GDPR Md. 6 (1) (a))',
      footerText: 'Onayınızı dilediğiniz zaman geri alabilirsiniz. Ayrıntılı bilgi için lütfen ',
      footerLink: 'Gizlilik Politikası',
      footerTextEnd: ' sayfamızı inceleyin.'
    }
  },
  de: {
    title: 'Cookie-Einstellungen',
    subtitle: 'Datenschutz ist uns wichtig',
    description: 'Wir verwenden Cookies und ähnliche Technologien, um Ihnen das beste Erlebnis auf unserer Website zu bieten. Einige sind notwendig, damit die Website funktioniert, während andere uns helfen, die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen. Gemäß der DSGVO (EU-Datenschutz-Grundverordnung) und dem TTDSG benötigen wir Ihre Einwilligung für nicht-essenzielle Cookies.',
    categories: {
      necessary: 'Notwendig',
      functional: 'Funktional',
      analytics: 'Statistik',
      marketing: 'Marketing'
    },
    buttons: {
      acceptAll: 'Alle akzeptieren',
      rejectAll: 'Nur Notwendige',
      settings: 'Einstellungen',
      savePreferences: 'Auswahl speichern'
    },
    links: {
      privacy: 'Datenschutzerklärung',
      imprint: 'Impressum'
    },
    settingsModal: {
      title: 'Cookie-Einstellungen verwalten',
      subtitle: 'DSGVO-konforme Auswahl',
      alwaysActive: 'Immer aktiv',
      necessaryTitle: 'Notwendige Cookies',
      necessaryDesc: 'Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich und können nicht deaktiviert werden. Sie werden in der Regel nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt.',
      necessaryLegal: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)',
      functionalTitle: 'Funktionale Cookies',
      functionalDesc: 'Diese Cookies ermöglichen erweiterte Funktionen wie das Speichern Ihrer Spracheinstellungen.',
      functionalLegal: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
      analyticsTitle: 'Statistik / Analyse Cookies',
      analyticsDesc: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics). Alle Daten werden anonymisiert erfasst.',
      analyticsLegal: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
      analyticsProvider: 'Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland',
      marketingTitle: 'Marketing Cookies',
      marketingDesc: 'Diese Cookies werden verwendet, um Werbung relevanter für Sie zu machen und die Effektivität von Werbekampagnen zu messen.',
      marketingLegal: 'Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
      footerText: 'Sie können Ihre Einwilligung jederzeit widerrufen. Weitere Informationen finden Sie in unserer ',
      footerLink: 'Datenschutzerklärung',
      footerTextEnd: '.'
    }
  },
  en: {
    title: 'Cookie Settings',
    subtitle: 'Privacy is important to us',
    description: 'We use cookies and similar technologies to provide you with the best experience on our website. Some are strictly necessary for the website to function, while others help us improve the website and display personalized content. In accordance with GDPR and applicable privacy regulations, we require your consent for non-essential cookies.',
    categories: {
      necessary: 'Necessary',
      functional: 'Functional',
      analytics: 'Analytics',
      marketing: 'Marketing'
    },
    buttons: {
      acceptAll: 'Accept All',
      rejectAll: 'Only Necessary',
      settings: 'Preferences',
      savePreferences: 'Save Selection'
    },
    links: {
      privacy: 'Privacy Policy',
      imprint: 'Legal Notice'
    },
    settingsModal: {
      title: 'Manage Cookie Preferences',
      subtitle: 'GDPR-compliant selection',
      alwaysActive: 'Always Active',
      necessaryTitle: 'Necessary Cookies',
      necessaryDesc: 'These cookies are strictly necessary for the website to function properly and cannot be deactivated.',
      necessaryLegal: 'Legal Basis: Art. 6 (1) (f) GDPR (legitimate interest)',
      functionalTitle: 'Functional Cookies',
      functionalDesc: 'These cookies enable enhanced functionality such as remembering your language preferences.',
      functionalLegal: 'Legal Basis: Art. 6 (1) (a) GDPR (consent)',
      analyticsTitle: 'Analytics / Statistics Cookies',
      analyticsDesc: 'These cookies help us understand how visitors interact with the website (Google Analytics). All data is collected anonymously.',
      analyticsLegal: 'Legal Basis: Art. 6 (1) (a) GDPR (consent)',
      analyticsProvider: 'Provider: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland',
      marketingTitle: 'Marketing Cookies',
      marketingDesc: 'These cookies are used to make advertising more relevant to you and to measure the performance of advertising campaigns.',
      marketingLegal: 'Legal Basis: Art. 6 (1) (a) GDPR (consent)',
      footerText: 'You can withdraw your consent at any time. For more information, please see our ',
      footerLink: 'Privacy Policy',
      footerTextEnd: '.'
    }
  }
}

export default function CookieConsent({ currentLang }) {
  const [lang, setLang] = useState(currentLang || 'de')
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  })

  // Detect and synchronize active language
  useEffect(() => {
    const resolveLang = () => {
      if (currentLang && ['tr', 'de', 'en'].includes(currentLang)) {
        return currentLang
      }
      if (typeof window !== 'undefined') {
        const path = window.location.pathname
        if (path.startsWith('/tr')) return 'tr'
        if (path.startsWith('/en')) return 'en'
        if (path.startsWith('/de')) return 'de'

        const docLang = document.documentElement.lang
        if (docLang && ['tr', 'de', 'en'].includes(docLang)) {
          return docLang
        }

        const host = window.location.hostname
        if (host.includes('salihmaral.com')) return 'tr'
        if (host.includes('salihmaral.de')) return 'de'
      }
      return 'de'
    }

    setLang(resolveLang())
  }, [currentLang])

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 800)
      return () => clearTimeout(timer)
    } else {
      try {
        const savedPrefs = JSON.parse(consent)
        setPreferences(savedPrefs)
        if (savedPrefs.analytics) {
          loadGoogleAnalytics()
        } else {
          disableGoogleAnalytics()
        }
      } catch (e) {
        setShowBanner(true)
      }
    }
  }, [])

  const savePreferences = (prefs) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    localStorage.setItem('cookieConsentVersion', '1.0')
    setPreferences(prefs)
    setShowBanner(false)
    setShowSettings(false)
    
    if (prefs.analytics) {
      loadGoogleAnalytics()
    } else {
      disableGoogleAnalytics()
    }

    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: prefs }))
  }

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    })
  }

  const acceptSelected = () => {
    savePreferences(preferences)
  }

  const rejectAll = () => {
    savePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    })
  }

  if (!showBanner) return null

  const t = translations[lang] || translations.de

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-[9998]" onClick={() => {}} />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {!showSettings ? (
            // Main Banner
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#4285F4]/10 rounded-lg">
                    <Cookie className="h-6 w-6 text-[#4285F4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{t.title}</h3>
                    <p className="text-sm text-gray-500">{t.subtitle}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {t.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">{t.categories.necessary}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Settings className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{t.categories.functional}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <BarChart3 className="h-4 w-4 text-purple-600" />
                  <span className="text-gray-700">{t.categories.analytics}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Target className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-700">{t.categories.marketing}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={acceptAll}
                  className="bg-[#4285F4] hover:bg-[#3367D6] text-white flex-1 font-semibold"
                >
                  {t.buttons.acceptAll}
                </Button>
                <Button 
                  onClick={rejectAll}
                  variant="outline"
                  className="flex-1 font-semibold border-gray-300"
                >
                  {t.buttons.rejectAll}
                </Button>
                <Button 
                  onClick={() => setShowSettings(true)}
                  variant="ghost"
                  className="flex-1 font-semibold text-gray-700 hover:text-gray-900"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  {t.buttons.settings}
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-gray-500">
                <a href="/datenschutz" className="flex items-center hover:text-[#4285F4] transition-colors">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  {t.links.privacy}
                </a>
                <span>|</span>
                <a href="/impressum" className="flex items-center hover:text-[#4285F4] transition-colors">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  {t.links.imprint}
                </a>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#4285F4]/10 rounded-lg">
                    <Settings className="h-6 w-6 text-[#4285F4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{t.settingsModal.title}</h3>
                    <p className="text-sm text-gray-500">{t.settingsModal.subtitle}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                  aria-label="Schließen"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-gray-900">{t.settingsModal.necessaryTitle}</span>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      {t.settingsModal.alwaysActive}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                    {t.settingsModal.necessaryDesc}
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>{t.settingsModal.necessaryLegal}</strong>
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Settings className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">{t.settingsModal.functionalTitle}</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={preferences.functional}
                        onChange={(e) => setPreferences({...preferences, functional: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4285F4]"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                    {t.settingsModal.functionalDesc}
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>{t.settingsModal.functionalLegal}</strong>
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold text-gray-900">{t.settingsModal.analyticsTitle}</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4285F4]"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                    {t.settingsModal.analyticsDesc}
                  </p>
                  <p className="text-xs text-gray-500 mb-1">
                    <strong>{t.settingsModal.analyticsLegal}</strong>
                  </p>
                  <p className="text-xs text-gray-500">
                    {t.settingsModal.analyticsProvider}
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-orange-600" />
                      <span className="font-semibold text-gray-900">{t.settingsModal.marketingTitle}</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4285F4]"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                    {t.settingsModal.marketingDesc}
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>{t.settingsModal.marketingLegal}</strong>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={acceptSelected}
                  className="bg-[#4285F4] hover:bg-[#3367D6] text-white flex-1 font-semibold"
                >
                  {t.buttons.savePreferences}
                </Button>
                <Button 
                  onClick={acceptAll}
                  variant="outline"
                  className="flex-1 font-semibold border-gray-300"
                >
                  {t.buttons.acceptAll}
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                {t.settingsModal.footerText}
                <a href="/datenschutz" className="text-[#4285F4] hover:underline font-medium">
                  {t.settingsModal.footerLink}
                </a>
                {t.settingsModal.footerTextEnd}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// Export function to check consent status
export const getConsentStatus = () => {
  if (typeof window === 'undefined') return null
  const consent = localStorage.getItem('cookieConsent')
  if (!consent) return null
  try {
    return JSON.parse(consent)
  } catch {
    return null
  }
}

// Export function to open cookie settings
export const openCookieSettings = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('cookieConsent')
    window.location.reload()
  }
}
