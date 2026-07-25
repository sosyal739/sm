'use client'

import { useState, useEffect, useRef } from 'react'
import { Bot, X, Send, Sparkles, User, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function SalihMaralAiAdvisor({ currentLang = 'de' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef(null)

  const labels = {
    de: {
      title: 'Salih Maral AI Advisor',
      subtitle: 'Ihr digitaler Marketing- & SEO-Strategie-Berater',
      placeholder: 'Stellen Sie Ihre Frage zu Ads, SEO oder CRO...',
      welcome: 'Hallo! Ich bin der virtuelle Assistent von Salih Maral (Google Ads & SEO Experte). Wie kann ich Ihr digitales Wachstum heute unterstützen?',
      chip1: '📈 Google Ads Budget optimieren',
      chip2: '🔍 SEO & GEO Ranking steigern',
      chip3: '🎯 Conversion Rate (CRO) vervielfachen',
      recommended: 'Empfohlene Experten-Leitfäden:',
      readMore: 'Weiterlesen'
    },
    en: {
      title: 'Salih Maral AI Advisor',
      subtitle: 'Your Digital Marketing & SEO Strategy Assistant',
      placeholder: 'Ask a question about Ads, SEO, or CRO...',
      welcome: 'Hello! I am Salih Maral\'s AI Marketing Advisor. How can I help scale your online performance today?',
      chip1: '📈 Optimize Google Ads Budget',
      chip2: '🔍 Boost SEO & GEO Rankings',
      chip3: '🎯 Scale Conversion Rate (CRO)',
      recommended: 'Recommended Guides:',
      readMore: 'Read More'
    },
    tr: {
      title: 'Salih Maral AI Pazarlama Asistanı',
      subtitle: 'Dijital Pazarlama & SEO Strateji Danışmanınız',
      placeholder: 'Ads, SEO veya CRO hakkında bir soru sorun...',
      welcome: 'Merhaba! Ben Salih Maral\'ın yapay zeka destekli pazarlama asistanıyım. Dijital büyümenizi bugün nasıl destekleyebilirim?',
      chip1: '📈 Google Ads Bütçemi Nasıl Optimize Ederim?',
      chip2: '🔍 SEO & GEO Sıralamamı Nasıl Artırırım?',
      chip3: '🎯 Dönüşüm Oranımı (CRO) Nasıl Katlarım?',
      recommended: 'İlgili Uzman Rehberleri:',
      readMore: 'Devamını Oku'
    }
  }

  const l = labels[currentLang] || labels.de

  // Initialize welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          sender: 'ai',
          text: l.welcome,
          recommendedPosts: []
        }
      ])
    }
  }, [currentLang])

  // Scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const handleSend = async (textToSend) => {
    const query = textToSend || input
    if (!query.trim()) return

    const userMsg = { id: Date.now(), sender: 'user', text: query }
    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, language: currentLang })
      })

      const data = await res.json()
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: data.answer || l.welcome,
        recommendedPosts: data.recommendedPosts || []
      }
      setMessages((prev) => [...prev, aiMsg])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'ai', text: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.', recommendedPosts: [] }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button - Blue & White Theme */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#4285F4] hover:bg-blue-600 text-white font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <span className="text-sm font-semibold pr-1">{l.title}</span>
        </button>
      )}

      {/* AI Advisor Chat Modal - Blue & White Clean Theme */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[420px] h-[550px] bg-white border border-gray-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-gray-800 animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#4285F4] via-blue-600 to-indigo-600 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative p-2 rounded-2xl bg-white/20 border border-white/30 text-white">
                <Bot className="w-6 h-6" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#4285F4] rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  {l.title}
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/20 text-white border border-white/30 font-medium">
                    Pro
                  </span>
                </h4>
                <p className="text-[11px] text-blue-100">{l.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl text-blue-100 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-[#4285F4] shrink-0 mt-0.5 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}
                <div className={`max-w-[82%] text-xs leading-relaxed ${msg.sender === 'user' ? 'bg-[#4285F4] text-white rounded-2xl rounded-tr-none p-3.5 shadow-md font-medium' : 'bg-white text-gray-800 border border-gray-200/90 rounded-2xl rounded-tl-none p-3.5 shadow-sm'}`}>
                  <p>{msg.text}</p>

                  {/* Recommended Blog Cards */}
                  {msg.recommendedPosts && msg.recommendedPosts.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                      <p className="text-[11px] font-semibold text-[#4285F4] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {l.recommended}
                      </p>
                      {msg.recommendedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="block p-2.5 rounded-xl bg-blue-50/60 hover:bg-blue-100/80 border border-blue-200/70 transition-all group"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-semibold text-gray-900 group-hover:text-[#4285F4] truncate text-[11px]">
                              {post.title}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#4285F4] group-hover:translate-x-0.5 transition-transform shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-2xl bg-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-[#4285F4] py-2 font-medium">
                <Loader2 className="w-4 h-4 animate-spin text-[#4285F4]" />
                <span>Salih Maral AI analizi yapıyor...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="p-2.5 border-t border-gray-100 bg-white flex items-center gap-1.5 overflow-x-auto custom-scrollbar text-[11px]">
            <button
              onClick={() => handleSend(l.chip1)}
              className="px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium whitespace-nowrap border border-blue-200/80 transition-colors"
            >
              {l.chip1}
            </button>
            <button
              onClick={() => handleSend(l.chip2)}
              className="px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium whitespace-nowrap border border-blue-200/80 transition-colors"
            >
              {l.chip2}
            </button>
            <button
              onClick={() => handleSend(l.chip3)}
              className="px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium whitespace-nowrap border border-blue-200/80 transition-colors"
            >
              {l.chip3}
            </button>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="p-3 bg-white border-t border-gray-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={l.placeholder}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4285F4]/40 focus:border-[#4285F4] transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2.5 rounded-xl bg-[#4285F4] hover:bg-blue-600 disabled:opacity-50 text-white transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
