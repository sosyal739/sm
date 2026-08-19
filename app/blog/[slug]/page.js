import { getPostBySlug } from '@/lib/blog.server'
import BlogDetailClient from './BlogDetailClient'
import { notFound } from 'next/navigation'

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params
  const { slug } = resolvedParams || {}
  
  if (!slug) {
    notFound()
  }

  // Try de, then tr, then en
  let initialLang = 'de'
  let post = getPostBySlug(slug, 'de')
  
  if (!post) {
    post = getPostBySlug(slug, 'tr')
    if (post) initialLang = 'tr'
  }
  
  if (!post) {
    post = getPostBySlug(slug, 'en')
    if (post) initialLang = 'en'
  }

  if (!post) {
    notFound()
  }

  return (
    <BlogDetailClient initialPost={post} initialLang={initialLang} />
  )
}
