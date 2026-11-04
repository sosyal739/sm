import { getPostBySlug, getAllPosts, TR_INDEXED_BLOG_SLUGS } from '@/lib/blog.server'
import BlogDetailClient from '@/app/blog/[slug]/BlogDetailClient'
import { notFound } from 'next/navigation'

export const dynamicParams = false

export async function generateStaticParams() {
  return TR_INDEXED_BLOG_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  try {
    const resolvedParams = await params
    const { slug } = resolvedParams || {}

    if (!slug || !TR_INDEXED_BLOG_SLUGS.includes(slug)) {
      return {
        title: { absolute: 'Blog | Salih Maral' },
        description: 'Almanya pazarında Google Ads, Meta Ads, Yerel SEO ve GEO rehberleri.',
      }
    }

    const post = getPostBySlug(slug, 'tr')
    if (!post) {
      return {
        title: { absolute: 'Blog | Salih Maral' },
        description: 'Almanya pazarında Google Ads, Meta Ads, Yerel SEO ve GEO rehberleri.',
      }
    }

    const cleanTitle = post.title.replace(/\s*\|\s*Salih Maral.*$/i, '').trim()
    const fullTitle = cleanTitle.length + 14 <= 60
      ? `${cleanTitle} | Salih Maral`
      : cleanTitle.length <= 60
      ? cleanTitle
      : cleanTitle.slice(0, 57).replace(/\s+\S*$/, '') + '...'

    let description = post.excerpt || `${cleanTitle} - Salih Maral Dijital Pazarlama Rehberi`
    if (description.length < 120) {
      description = `${description} Detaylı rehber ve stratejik analiz Salih Maral ile.`.trim()
    }
    if (description.length > 158) {
      description = description.slice(0, 155).replace(/\s+\S*$/, '') + '...'
    }

    const canonicalUrl = `https://salihmaral.de/tr/blog/${slug}`
    const deUrl = `https://salihmaral.de/blog/${slug}`

    return {
      title: {
        absolute: fullTitle,
      },
      description,
      alternates: {
        canonical: canonicalUrl,
        languages: {
          de: deUrl,
          tr: canonicalUrl,
          'x-default': deUrl,
        },
      },
      openGraph: {
        title: fullTitle,
        description,
        url: canonicalUrl,
        type: 'article',
        locale: 'tr_TR',
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
        description,
        images: [post.coverImage || 'https://salihmaral.de/logo.png'],
        creator: '@salihmaral',
      },
    }
  } catch (err) {
    return {
      title: { absolute: 'Blog | Salih Maral' },
      description: 'Almanya pazarında Google Ads, Meta Ads, Yerel SEO ve GEO rehberleri.',
    }
  }
}

export default async function TurkishBlogDetailPage({ params }) {
  const resolvedParams = await params
  const { slug } = resolvedParams || {}

  if (!slug || !TR_INDEXED_BLOG_SLUGS.includes(slug)) {
    notFound()
  }

  const post = getPostBySlug(slug, 'tr')
  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts('tr') || []
  const sameCategory = allPosts.filter(p => p.slug !== slug && p.category === post.category)
  const otherPosts = allPosts.filter(p => p.slug !== slug && p.category !== post.category)
  const relatedPosts = [...sameCategory, ...otherPosts].slice(0, 3)

  const cleanTitle = post.title.replace(/\s*\|\s*Salih Maral.*$/i, '').trim()
  const canonicalUrl = `https://salihmaral.de/tr/blog/${slug}`

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
          jobTitle: 'Resmi Google Partner & Kıdemli Dijital Pazarlama Uzmanı',
          url: 'https://salihmaral.de/tr',
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
        inLanguage: 'tr-TR',
        articleSection: post.category || 'Dijital Pazarlama',
        keywords: post.category ? `${post.category}, Almanya Google Ads, Salih Maral` : 'Almanya Google Ads, Salih Maral',
        isPartOf: { '@id': 'https://salihmaral.de/#website' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Ana Sayfa',
            item: 'https://salihmaral.de/tr',
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
      <BlogDetailClient initialPost={post} initialLang="tr" relatedPosts={relatedPosts} lockInitialLang={true} />
    </>
  )
}
