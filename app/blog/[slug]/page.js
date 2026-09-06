import { getPostBySlug, getAllPosts } from '@/lib/blog.server'
import BlogDetailClient from './BlogDetailClient'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  try {
    const resolvedParams = await params
    const { slug } = resolvedParams || {}
    
    if (!slug) {
      return {
        title: { absolute: 'Blog | Salih Maral' },
        description: 'Aktuelle Leitfäden über Google Ads, Meta Ads, SEO und GEO.',
      }
    }

    let post = getPostBySlug(slug, 'de') || getPostBySlug(slug, 'tr') || getPostBySlug(slug, 'en')
    if (!post) {
      return {
        title: { absolute: 'Blog | Salih Maral' },
        description: 'Aktuelle Leitfäden über Google Ads, Meta Ads, SEO und GEO.',
      }
    }

    const cleanTitle = post.title.replace(/\s*\|\s*Salih Maral.*$/i, '').trim()
    const fullTitle = `${cleanTitle} | Salih Maral`
    const description = post.excerpt || `${cleanTitle} - Salih Maral Digital Marketing Blog`
    const canonicalUrl = `https://salihmaral.de/blog/${slug}`

    return {
      title: {
        absolute: fullTitle,
      },
      description: description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: fullTitle,
        description: description,
        url: canonicalUrl,
        type: 'article',
        publishedTime: post.date,
        authors: ['Salih Maral'],
        images: [
          {
            url: post.coverImage || 'https://salihmaral.de/logo-og.png',
            width: 1200,
            height: 630,
            alt: cleanTitle,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: fullTitle,
        description: description,
        images: [post.coverImage || 'https://salihmaral.de/logo.png'],
        creator: '@salihmaral',
      },
    }
  } catch (err) {
    return {
      title: { absolute: 'Blog | Salih Maral' },
      description: 'Aktuelle Leitfäden über Google Ads, Meta Ads, SEO und GEO.',
    }
  }
}

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

  // Calculate internal related posts for strong SEO mesh
  const allPosts = getAllPosts(initialLang) || []
  const sameCategory = allPosts.filter(p => p.slug !== slug && p.category === post.category)
  const otherPosts = allPosts.filter(p => p.slug !== slug && p.category !== post.category)
  const relatedPosts = [...sameCategory, ...otherPosts].slice(0, 3)

  return (
    <BlogDetailClient initialPost={post} initialLang={initialLang} relatedPosts={relatedPosts} />
  )
}
