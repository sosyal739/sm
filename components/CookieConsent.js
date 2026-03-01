'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X, Settings, Cookie, Shield, BarChart3, Target } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    functional: false,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a small delay
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    } else {
      // Load saved preferences
      try {
        const savedPrefs = JSON.parse(consent)
        setPreferences(savedPrefs)
      } catch (e) {
        setShowBanner(true)
      }
    }
  }, [])

  const savePreferences = (prefs) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs))
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setPreferences(prefs)
    setShowBanner(false)
    setShowSettings(false)
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
                und Ihnen personalisierte Inhalte anzuzeigen. Sie können Ihre Einstellungen jederzeit ändern.
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
                  <span className="text-gray-700">Analytik</span>
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

              <p className="text-xs text-gray-500 mt-4 text-center">
                Mehr erfahren in unserer{' '}
                <a href="/datenschutz" className="text-[#4285F4] hover:underline">Datenschutzerklärung</a>
              </p>
            </div>
          ) : (
            // Settings Panel
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#4285F4]/10 rounded-lg">
                    <Settings className="h-6 w-6 text-[#4285F4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Cookie-Einstellungen verwalten</h3>
                    <p className="text-sm text-gray-500">Wählen Sie Ihre Präferenzen</p>
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
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-gray-900">Notwendige Cookies</span>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Immer aktiv
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich und können nicht deaktiviert werden. 
                    Sie werden in der Regel nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt, wie z.B. das Festlegen 
                    Ihrer Datenschutzeinstellungen oder das Ausfüllen von Formularen.
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
                  <p className="text-sm text-gray-600">
                    Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, wie z.B. das Speichern Ihrer 
                    Spracheinstellungen. Ohne diese Cookies sind einige oder alle dieser Dienste möglicherweise nicht richtig verfügbar.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold text-gray-900">Analytische Cookies</span>
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
                  <p className="text-sm text-gray-600">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen 
                    anonym sammeln und melden. Dies hilft uns, die Website kontinuierlich zu verbessern.
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
                  <p className="text-sm text-gray-600">
                    Diese Cookies werden verwendet, um Werbung relevanter für Sie zu machen. Sie verhindern, dass dieselbe 
                    Werbung ständig wieder erscheint, und stellen sicher, dass Anzeigen richtig angezeigt werden.
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
            </div>
          )}
        </div>
      </div>
    </>
  )
}
