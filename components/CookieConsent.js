'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X, Settings, Cookie, Shield, BarChart3, Target, ExternalLink } from 'lucide-react'

// Function to load Google Analytics
const loadGoogleAnalytics = () => {
  if (typeof window !== 'undefined' && !window.gaLoaded) {
    // Load gtag.js
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QT1CZE5BJK'
    script.async = true
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag() { window.dataLayer.push(arguments) }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', 'G-QT1CZE5BJK', {
      'anonymize_ip': true,
      'cookie_flags': 'SameSite=None;Secure'
    })
    
    window.gaLoaded = true
    console.log('Google Analytics loaded with consent')
  }
}

// Function to disable Google Analytics
const disableGoogleAnalytics = () => {
  if (typeof window !== 'undefined') {
    window['ga-disable-G-QT1CZE5BJK'] = true
    // Clear GA cookies
    document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = '_ga_QT1CZE5BJK=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // No consent yet - show banner after delay
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    } else {
      try {
        const savedPrefs = JSON.parse(consent)
        setPreferences(savedPrefs)
        // Load analytics if previously consented
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
    
    // Handle analytics based on consent
    if (prefs.analytics) {
      loadGoogleAnalytics()
    } else {
      disableGoogleAnalytics()
    }

    // Dispatch event for other components
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
                    <h3 className="text-lg font-bold text-gray-900">Cookie-Einstellungen</h3>
                    <p className="text-sm text-gray-500">Datenschutz ist uns wichtig</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Wir verwenden Cookies und ähnliche Technologien, um Ihnen das beste Erlebnis auf unserer Website zu bieten. 
                Einige sind notwendig, damit die Website funktioniert, während andere uns helfen, die Website zu verbessern 
                und Ihnen personalisierte Inhalte anzuzeigen. Gemäß der DSGVO (EU-Datenschutz-Grundverordnung) und dem TTDSG 
                benötigen wir Ihre Einwilligung für nicht-essenzielle Cookies.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Notwendig</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Settings className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">Funktional</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <BarChart3 className="h-4 w-4 text-purple-600" />
                  <span className="text-gray-700">Statistik</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Target className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-700">Marketing</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={acceptAll}
                  className="bg-[#4285F4] hover:bg-[#3367D6] text-white flex-1"
                >
                  Alle akzeptieren
                </Button>
                <Button 
                  onClick={rejectAll}
                  variant="outline"
                  className="flex-1"
                >
                  Nur Notwendige
                </Button>
                <Button 
                  onClick={() => setShowSettings(true)}
                  variant="ghost"
                  className="flex-1"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Einstellungen
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-gray-500">
                <a href="/datenschutz" className="flex items-center hover:text-[#4285F4] transition-colors">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Datenschutzerklärung
                </a>
                <span>|</span>
                <a href="/impressum" className="flex items-center hover:text-[#4285F4] transition-colors">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Impressum
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
                    <h3 className="text-lg font-bold text-gray-900">Cookie-Einstellungen verwalten</h3>
                    <p className="text-sm text-gray-500">DSGVO-konforme Auswahl</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
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
                      <span className="font-semibold text-gray-900">Notwendige Cookies</span>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Immer aktiv
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich und können nicht deaktiviert werden. 
                    Sie werden in der Regel nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Settings className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">Funktionale Cookies</span>
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
                  <p className="text-sm text-gray-600 mb-2">
                    Diese Cookies ermöglichen erweiterte Funktionen wie das Speichern Ihrer Spracheinstellungen.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold text-gray-900">Statistik / Analyse Cookies</span>
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
                  <p className="text-sm text-gray-600 mb-2">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics). 
                    Alle Daten werden anonymisiert erfasst.
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-orange-600" />
                      <span className="font-semibold text-gray-900">Marketing Cookies</span>
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
                  <p className="text-sm text-gray-600 mb-2">
                    Diese Cookies werden verwendet, um Werbung relevanter für Sie zu machen und die Effektivität von Werbekampagnen zu messen.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={acceptSelected}
                  className="bg-[#4285F4] hover:bg-[#3367D6] text-white flex-1"
                >
                  Auswahl speichern
                </Button>
                <Button 
                  onClick={acceptAll}
                  variant="outline"
                  className="flex-1"
                >
                  Alle akzeptieren
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Sie können Ihre Einwilligung jederzeit widerrufen. Weitere Informationen finden Sie in unserer{' '}
                <a href="/datenschutz" className="text-[#4285F4] hover:underline">Datenschutzerklärung</a>.
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
  localStorage.removeItem('cookieConsent')
  window.location.reload()
}
