'use client'

import { useParams, redirect, notFound } from 'next/navigation'
import Home from '../page'

export default function LangHomePage() {
  const { lang } = useParams()
  
  // Only allow tr and en; de redirects to root /; any other segment returns HTTP 404 (prevents Soft-404)
  if (!['tr', 'en', 'de'].includes(lang)) {
    notFound()
  }
  
  if (lang === 'de') {
    redirect('/')
  }

  return <Home initialLang={lang} />
}
