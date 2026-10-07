import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function sitemap() {
  const baseUrl = 'https://salihmaral.de'
  const currentDate = new Date().toISOString().split('T')[0]

  // 1. Static Core Pages (Root / is German; /tr and /en are localized)
  const staticRoutes = [
    '',
    '/tr',
    '/en',
    '/about',
    '/blog',
    '/impressum',
    '/datenschutz',
  ]

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route.startsWith('/de') || route.startsWith('/tr') ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/de') || route.startsWith('/tr') ? 0.9 : 0.8,
  }))

  // 2. Service Pages (3 Languages with complete x-default alternates)
  const services = ['google-ads', 'meta-ads', 'youtube-ads', 'server-side-tracking', 'tiktok-ads', 'x-ads', 'seo', 'yorum-yonetimi', 'islamic-charity-ngo-marketing']
  const serviceEntries = []

  services.forEach((slug) => {
    const deSlug = slug === 'yorum-yonetimi' ? 'bewertungsmanagement' : slug
    const enSlug = slug === 'yorum-yonetimi' ? 'review-management' : slug
    const trSlug = slug

    const languages = {
      de: `${baseUrl}/de/dienstleistungen/${deSlug}`,
      en: `${baseUrl}/en/services/${enSlug}`,
      tr: `${baseUrl}/tr/hizmetler/${trSlug}`,
      'x-default': `${baseUrl}/de/dienstleistungen/${deSlug}`,
    }

    // German
    serviceEntries.push({
      url: `${baseUrl}/de/dienstleistungen/${deSlug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages },
    })
    // Turkish
    serviceEntries.push({
      url: `${baseUrl}/tr/hizmetler/${trSlug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages },
    })
    // English
    serviceEntries.push({
      url: `${baseUrl}/en/services/${enSlug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: { languages },
    })
  })

  // 3. Germany Metropol Location Pages (Standorte - 3 Languages with x-default)
  const cities = ['frankfurt', 'duesseldorf', 'koeln', 'muenchen', 'stuttgart', 'berlin', 'hamburg', 'nuernberg', 'dortmund', 'leipzig', 'bonn', 'essen', 'duisburg', 'hannover', 'mannheim', 'wiesbaden', 'karlsruhe', 'muenster']
  const locationEntries = []

  // Add standorte hub pages
  ;['de', 'tr', 'en'].forEach((lang) => {
    locationEntries.push({
      url: `${baseUrl}/${lang}/standorte`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          de: `${baseUrl}/de/standorte`,
          tr: `${baseUrl}/tr/standorte`,
          en: `${baseUrl}/en/standorte`,
          'x-default': `${baseUrl}/de/standorte`,
        },
      },
    })
  })

  cities.forEach((city) => {
    const languages = {
      de: `${baseUrl}/de/standorte/${city}`,
      tr: `${baseUrl}/tr/standorte/${city}`,
      en: `${baseUrl}/en/standorte/${city}`,
      'x-default': `${baseUrl}/de/standorte/${city}`,
    }

    ;['de', 'tr', 'en'].forEach((lang) => {
      locationEntries.push({
        url: `${baseUrl}/${lang}/standorte/${city}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
        alternates: { languages },
      })
    })
  })

  // 4. Dynamic Blog Posts
  const blogEntries = []
  const postsDir = path.join(process.cwd(), 'content', 'blog')

  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'))
    const uniqueSlugs = new Set()

    files.forEach((file) => {
      const parts = file.split('.')
      if (parts.length >= 3) {
        const slug = parts.slice(0, -2).join('.')
        uniqueSlugs.add(slug)
      }
    })

    uniqueSlugs.forEach((slug) => {
      blogEntries.push({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    })
  }

  return [...staticEntries, ...serviceEntries, ...locationEntries, ...blogEntries]
}
