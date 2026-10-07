import { getPostBySlug, getAllPosts, getAllSlugs } from '@/lib/blog.server'
import BlogDetailClient from './BlogDetailClient'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map(slug => ({ slug }))
}

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
    const fullTitle = cleanTitle.length + 14 <= 60
      ? `${cleanTitle} | Salih Maral`
      : cleanTitle.length <= 60
      ? cleanTitle
      : cleanTitle.slice(0, 57).replace(/\s+\S*$/, '') + '...'

    let description = post.excerpt || `${cleanTitle} - Salih Maral Digital Marketing Blog`
    if (description.length < 120) {
      const suffix = post.lang === 'tr' 
        ? ' Detaylı rehber ve stratejik analiz Salih Maral ile.'
        : post.lang === 'en'
        ? ' In-depth guide and strategic insights by Salih Maral.'
        : ' Umfassender Leitfaden und strategische Best Practices von Salih Maral.'
      description = (description + suffix).trim()
    }
    if (description.length > 158) {
      description = description.slice(0, 155).replace(/\s+\S*$/, '') + '...'
    }
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

  const cleanTitle = post.title.replace(/\s*\|\s*Salih Maral.*$/i, '').trim()
  const canonicalUrl = `https://salihmaral.de/blog/${slug}`
  const homeUrl = initialLang === 'de' ? 'https://salihmaral.de' : `https://salihmaral.de/${initialLang}`
  const homeName = initialLang === 'de' ? 'Startseite' : initialLang === 'tr' ? 'Ana Sayfa' : 'Home'
  const inLang = initialLang === 'de' ? 'de-DE' : initialLang === 'tr' ? 'tr-TR' : 'en-US'

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#article`,
        url: canonicalUrl,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
        headline: cleanTitle,
        description: post.excerpt || cleanTitle,
        image: post.coverImage || 'https://salihmaral.de/logo.png',
        author: {
          '@type': 'Person',
          '@id': 'https://salihmaral.de/#person',
          name: 'Salih Maral',
          jobTitle: 'Offizieller Google Partner & Senior Digital Marketing Experte',
          url: 'https://salihmaral.de',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://salihmaral.de/#organization',
          name: 'Salih Maral Digital Marketing',
          url: 'https://salihmaral.de',
          logo: {
            '@type': 'ImageObject',
            url: 'https://salihmaral.de/logo.png',
          },
        },
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: inLang,
        articleSection: post.category || 'Digital Marketing',
        keywords: post.category ? `${post.category}, Digital Marketing, Salih Maral` : 'Digital Marketing, Salih Maral',
        isPartOf: { '@id': 'https://salihmaral.de/#website' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: homeName,
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://salihmaral.de/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: cleanTitle,
            item: canonicalUrl,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <BlogDetailClient initialPost={post} initialLang={initialLang} relatedPosts={relatedPosts} />
    </>
  )
}
