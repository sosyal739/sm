import { getPostBySlug } from '@/lib/blog.server'

export async function generateMetadata({ params }) {
  try {
    const resolvedParams = params && typeof params.then === 'function' ? await params : params
    const { slug } = resolvedParams || {}
    
    if (!slug) {
      return {
        title: {
          absolute: 'Blog | Salih Maral',
        },
        description: 'Aktuelle Leitfäden über Google Ads, Meta Ads, SEO und GEO.',
      }
    }

    // Try de, then tr, then en
    let post = getPostBySlug(slug, 'de') || getPostBySlug(slug, 'tr') || getPostBySlug(slug, 'en')
    
    if (!post) {
      return {
        title: {
          absolute: 'Blog | Salih Maral',
        },
        description: 'Aktuelle Leitfäden über Google Ads, Meta Ads, SEO und GEO.',
      }
    }

    const title = post.title
    const description = post.excerpt || `${post.title} - Salih Maral Digital Marketing Blog`
    const canonicalUrl = `https://salihmaral.de/blog/${slug}`

    return {
      title: {
        absolute: title,
      },
      description: description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: title,
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
            alt: title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: [post.coverImage || 'https://salihmaral.de/logo.png'],
        creator: '@salihmaral',
      },
    }
  } catch (error) {
    console.error('[Blog generateMetadata] Error resolving metadata:', error)
    return {
      title: {
        absolute: 'Blog | Salih Maral',
      },
      description: 'Aktuelle Leitfäden über Google Ads, Meta Ads, SEO und GEO.',
    }
  }
}

export default function BlogSlugLayout({ children }) {
  return <>{children}</>
}
