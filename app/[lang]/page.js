'use client'

import { useParams, redirect } from 'next/navigation'
import Home from '../page'

export default function LangHomePage() {
  const { lang } = useParams()
  
  // Only allow tr and en; de redirects to root /
  if (!['tr', 'en', 'de'].includes(lang)) {
    return null
  }
  
  if (lang === 'de') {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
      return null
    }
  }

  return <Home initialLang={lang} />
}
