import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function sitemap() {
  const baseUrl = 'https://salihmaral.de'
  const currentDate = new Date().toISOString().split('T')[0]

  // 1. Static Core Pages
  const staticRoutes = [
    '',
    '/de',
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

  // 2. Service Pages (3 Languages)
  const services = ['google-ads', 'meta-ads', 'youtube-ads', 'server-side-tracking', 'tiktok-ads', 'x-ads', 'seo', 'yorum-yonetimi']
  const serviceEntries = []

  services.forEach((slug) => {
    // German
    const deSlug = slug === 'yorum-yonetimi' ? 'bewertungsmanagement' : slug
    serviceEntries.push({
      url: `${baseUrl}/de/dienstleistungen/${deSlug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
    // Turkish
    serviceEntries.push({
      url: `${baseUrl}/tr/hizmetler/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
    // English
    const enSlug = slug === 'yorum-yonetimi' ? 'review-management' : slug
    serviceEntries.push({
      url: `${baseUrl}/en/services/${enSlug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // 3. Germany Metropol Location Pages (Standorte - 3 Languages)
  const cities = ['frankfurt', 'duesseldorf', 'koeln', 'muenchen', 'stuttgart', 'berlin', 'hamburg', 'nuernberg', 'dortmund', 'leipzig']
  const locationEntries = []

  // Add standorte hub pages
  ;['de', 'tr', 'en'].forEach((lang) => {
    locationEntries.push({
      url: `${baseUrl}/${lang}/standorte`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })

  cities.forEach((city) => {
    ['de', 'tr', 'en'].forEach((lang) => {
      locationEntries.push({
        url: `${baseUrl}/${lang}/standorte/${city}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
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
