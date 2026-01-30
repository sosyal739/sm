'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, MessageCircle, Phone, TrendingUp, BarChart3, Zap, CheckCircle, Star, ArrowRight, Sparkles, Search, Target, Rocket, Shield } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('seo')
  const [animationKey, setAnimationKey] = useState(0)

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Trigger animation on tab change
  useEffect(() => {
    setAnimationKey(prev => prev + 1)
  }, [activeTab])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Salih Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <div className="font-bold text-lg text-gray-900">SALIH</div>
              <div className="text-xs text-gray-600">Google Ads & SEO Uzmanı</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hizmetler')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Hizmetlerimiz
            </button>
            <button
              onClick={() => scrollToSection('neden-biz')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Neden Biz?
            </button>
            <button
              onClick={() => scrollToSection('referanslar')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Referanslar
            </button>
            <button
              onClick={() => scrollToSection('iletisim')}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              İletişim
            </button>
          </div>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('iletisim')}
            className="bg-black hover:bg-gray-900 text-white rounded-full px-6"
            size="sm"
          >
            Ücretsiz Analiz Al
          </Button>
        </nav>
      </header>

      {/* Hero Section - Enhanced with Professional Photo */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                <span className="text-blue-700 text-sm font-semibold">360° DİJİTAL BÜYÜME</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Markanızın Sesini Duyurun,
                <br />
                <span className="text-blue-600">Cironuzu Katlayın</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sadece trafik değil, "satış" getiren stratejiler kuruyoruz. SEO, Google Ads ve Sosyal Medya gücünü birleştirerek işletmenizi veriye dayalı olarak büyütüyoruz.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() => scrollToSection('iletisim')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-lg"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Hattı
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('iletisim')}
                  className="px-8 py-6 text-base border-gray-300 hover:bg-gray-50 rounded-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Hemen Arayın
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">%500+</div>
                  <p className="text-sm text-gray-600">Ortalama ROAS Artışı</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">10x</div>
                  <p className="text-sm text-gray-600">Dönüşüm Oranı</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                  <p className="text-sm text-gray-600">Sektörel Deneyim</p>
                </div>
              </div>
            </div>

            {/* Right - Professional Photo */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="relative w-full h-full max-w-sm">
                {/* Photo Container with Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-photo.jpg"
                    alt="Salih - Google Ads & SEO Uzmanı"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badge - ROAS */}
                <div className="absolute top-8 left-8 bg-white rounded-lg p-4 shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Ortalama</p>
                      <p className="text-sm font-bold text-gray-900">%500+ ROAS</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge - Experience */}
                <div className="absolute bottom-8 right-8 bg-white rounded-lg p-4 shadow-lg animate-bounce" style={{ animationDuration: '2.5s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Deneyim</p>
                      <p className="text-sm font-bold text-gray-900">15+ Sektör</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with Colors & Animations */}
      <section id="hizmetler" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Animation */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-bold">✨ HİZMETLERİMİZ</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Google Ads ve SEO'nun gücünü birleştirerek işletmenizin dijital performansını maksimize ediyoruz
            </p>
          </div>

          {/* Service Tabs with Enhanced Styling */}
          <div className="flex gap-4 mb-12 border-b-2 border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('seo')}
              className={`pb-4 px-8 font-bold transition-all duration-300 whitespace-nowrap text-lg relative ${
                activeTab === 'seo'
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🔍 SEO Hizmetleri
              {activeTab === 'seo' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('ads')}
              className={`pb-4 px-8 font-bold transition-all duration-300 whitespace-nowrap text-lg relative ${
                activeTab === 'ads'
                  ? 'text-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📢 Google Ads
              {activeTab === 'ads' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              )}
            </button>
          </div>

          {/* SEO Services */}
          {activeTab === 'seo' && (
            <div key={`seo-${animationKey}`} className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-blue-300/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Kapsamlı Anahtar Kelime Analizi</h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    Hacim değil, dönüşüm odaklı kelimeleri hedefliyoruz. Sektörünüzdeki fırsatları keşfedip sizi nokta atışı müşterilerle buluşturuyoruz.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Dönüşüm odaklı kelime araştırması</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Rakip kelime analizi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Fırsat keşfi ve stratejisi</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 via-purple-300/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Teknik SEO Optimizasyonu</h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    Site hızı, mobil uyumluluk ve tarama bütçesi optimizasyonu ile sitenizin Google botları tarafından kusursuzca okunmasını sağlıyoruz.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Site hızı optimizasyonu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Mobil uyumluluk</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Teknik SEO denetimi</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-green-300/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">İçerik Stratejisi & Üretimi</h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    Google'ın ve kullanıcıların seveceği, E-E-A-T uyumlu, otoriter ve özgün içeriklerle markanızın dijital sesini güçlendiriyoruz.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">İçerik stratejisi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">SEO uyumlu yazı</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Otorite inşası</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 via-orange-300/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Backlink & Otorite Yönetimi</h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    Zararlı link temizliği ve sektörünüzle alakalı kaliteli sitelerden gelen doğal backlinklerle alan adı otoritenizi zirveye taşıyoruz.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Backlink analizi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Kaliteli link inşası</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Domain otorite artışı</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Google Ads Services */}
          {activeTab === 'ads' && (
            <div key={`ads-${animationKey}`} className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-red-100 p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/0 via-red-300/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Google Search Ads</h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    Müşterileriniz sizi aradığında tam o anda karşılarına çıkıyoruz. Yüksek niyetli arama trafiğini dönüşüme çeviriyoruz.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Kampanya kurulumu ve yönetimi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Bid stratejisi optimizasyonu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">A/B test ve iyileştirme</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 p-8 border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400/0 via-pink-300/0 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Google Display Ads</h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    Milyonlarca web sitesinde görüntülü reklamlarla markanızı tanıtıyor, hedef kitlenizi yeniden hedefliyoruz.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Display kampanya tasarımı</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Yeniden hedefleme stratejisi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Görüntülü reklam optimizasyonu</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-300/0 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Google Shopping Ads</h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    E-ticaret işletmeniz için ürünlerinizi doğru müşterilerin karşısına getiriyoruz. Satış odaklı kampanyalar.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Shopping feed optimizasyonu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Ürün kampanya yönetimi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">ROI maksimizasyonu</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-300/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Kampanya Analizi & Raporlama</h3>
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    Karmaşık verilerle değil, anlaşılır ve sonuç odaklı raporlarla ilerliyoruz. Ayın sonunda ne kazandığınızı net göreceksiniz.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Aylık detaylı raporlar</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">ROI takibi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Strateji önerileri</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Us Section */}
      <section id="neden-biz" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Biz?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Google Ads ve SEO'nun gücünü birleştirerek işletmenizin dijital performansını maksimize ediyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">%100 Şeffaf Rapor</h3>
                  <p className="text-gray-600">Karmaşık verilerle değil, anlaşılır ve sonuç odaklı raporlarla ilerliyoruz. Ayın sonunda ne kazandığınızı net göreceksiniz.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">7/24 Canlı Veri</h3>
                  <p className="text-gray-600">Kampanyalarınızın performansını gerçek zamanlı olarak takip edebilirsiniz. Hiçbir şey gizli değildir.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">ROI Odaklı Bütçe</h3>
                  <p className="text-gray-600">Bütçenizi tek bir kanalda eritmek yerine, birbirini besleyen entegre bir pazarlama ağı kuruyoruz.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">360° Tam Kapsam</h3>
                  <p className="text-gray-600">SEO, Google Ads, Sosyal Medya, İçerik Pazarlaması ve E-posta - tüm dijital kanalları yönetiyoruz.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">15+ Sektörel Deneyim</h3>
                  <p className="text-gray-600">E-ticaret, SaaS, Fintech, Sağlık, Eğitim ve daha birçok sektörde başarılı kampanyalar yönetmiş tecrübeli bir uzman.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Proaktif Strateji</h3>
                  <p className="text-gray-600">Sadece kampanya yönetimi değil, işletmenizin büyümesi için proaktif stratejik öneriler sunuyoruz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="referanslar" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Müşterilerimizin Gözünden</h2>
            <p className="text-lg text-gray-600">Google Ads & SEO Uzmanı Deneyimi</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-8 border border-gray-200 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "E-ticaret sitemiz için profesyonel bir Google Ads uzmanı arayışındaydık. Salih Bey ile çalışmaya başladıktan sadece 3 ay sonra satışlarımız %250 arttı. Özellikle kampanya optimizasyonundaki hakimiyeti ve iletişim hızı mükemmel."
              </p>
              <div className="flex items-center gap-3 pt-6 border-t">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Mert Yılmaz</p>
                  <p className="text-xs text-gray-600">E-Ticaret İşletmecisi</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-8 border border-gray-200 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Diş kliniğimiz için yerel SEO çalışması yaptık. Eskiden Google haritalarında hiç çıkmazken şimdi 'Bağcılar dişçi' yazınca ilk sıradayız. Telefonlarımız susmuyor. İşini gerçekten bilen, dürüst ve şeffaf bir uzman."
              </p>
              <div className="flex items-center gap-3 pt-6 border-t">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Selin Demir</p>
                  <p className="text-xs text-gray-600">Diş Hekimi</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-8 border border-gray-200 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Daha önce 2 farklı ajansla çalıştık ama verim alamadık. Salih Bey ile çalışmaya başladığımızdan beri raporlamalar o kadar net ki paramızın nereye gittiğini biliyoruz. Kurumsal bir Google Ads uzmanı arıyorsanız kesinlikle öneririm."
              </p>
              <div className="flex items-center gap-3 pt-6 border-t">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">K</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Kemal Öztürk</p>
                  <p className="text-xs text-gray-600">İşletme Sahibi</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Dijital Varlığınız Ne Kadar Güçlü?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Web sitenizin SEO sağlığını, Google Ads potansiyelini ve sosyal medya eksiklerini bir Dijital Pazarlama Uzmanı gözüyle inceliyor, size özel 10 maddelik büyüme raporu hazırlıyorum. Üstelik tamamen ücretsiz.
          </p>
          <Button
            onClick={() => scrollToSection('iletisim')}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-6 text-base font-semibold rounded-lg"
          >
            Ücretsiz Analiz Al
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h2>
            <p className="text-lg text-gray-600">
              İşletmenizin dijital performansını artırmak için hemen iletişime geçin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Method 1 */}
            <Card className="p-8 border border-gray-200 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Direkt Mesaj</h3>
              <p className="text-gray-600 mb-4">WhatsApp üzerinden hızlı iletişim</p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg">
                WhatsApp'tan Yaz
              </Button>
            </Card>

            {/* Contact Method 2 */}
            <Card className="p-8 border border-gray-200 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Hemen Arayın</h3>
              <p className="text-gray-600 mb-4">Telefon ile doğrudan konuşun</p>
              <a href="tel:+905073313103" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  0507 331 3103
                </Button>
              </a>
            </Card>

            {/* Contact Method 3 */}
            <Card className="p-8 border border-gray-200 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Gönder</h3>
              <p className="text-gray-600 mb-4">Detaylı bilgi için email atın</p>
              <a href="mailto:sosyalmedyaevim@gmail.com">
                <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50 rounded-lg">
                  Email Gönder
                </Button>
              </a>
            </Card>
          </div>

          {/* Free Analysis Offer */}
          <Card className="mt-12 p-12 bg-gradient-to-r from-blue-50 to-teal-50 border-0 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ücretsiz Analiz Raporu</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Web sitenizin SEO performansını ve Google Ads potansiyelini ücretsiz olarak analiz ediyoruz. 
                Detaylı bir rapor hazırlayıp, iyileştirme önerileri sunuyoruz.
              </p>
              <Button
                onClick={() => scrollToSection('iletisim')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-lg"
              >
                Ücretsiz Analiz Al
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Salih Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="font-semibold text-white">SALIH</span>
              </div>
              <p className="text-sm">Google Ads ve SEO uzmanı. İşletmenizin dijital performansını maksimize ediyoruz.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Hizmetler</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#hizmetler" className="hover:text-white transition-colors">SEO Hizmetleri</a></li>
                <li><a href="#hizmetler" className="hover:text-white transition-colors">Google Ads</a></li>
                <li><a href="#neden-biz" className="hover:text-white transition-colors">Neden Biz?</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">İletişim</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+905073313103" className="hover:text-white transition-colors">0507 331 3103</a></li>
                <li><a href="mailto:sosyalmedyaevim@gmail.com" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Hakkında</h4>
              <p className="text-sm">15+ sektörel deneyim ile 150+ işletmeye dijital başarı sağladık.</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm">© 2024 Salih - Google Ads & SEO Uzmanı. Tüm hakları saklıdır.</p>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a href="#" className="text-sm hover:text-white transition-colors">Gizlilik Politikası</a>
                <a href="#" className="text-sm hover:text-white transition-colors">Kullanım Şartları</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
