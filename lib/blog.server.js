import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content', 'blog')

/**
 * Get all posts for a given language, sorted by date descending
 */
export function getAllPosts(lang = 'de') {
  if (!fs.existsSync(postsDir)) return []
  
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(`.${lang}.md`))
  
  const posts = files.map(file => {
    const filePath = path.join(postsDir, file)
    const raw = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(raw)
    return {
      slug: data.slug || file.replace(`.${lang}.md`, ''),
      title: data.title || '',
      excerpt: data.excerpt || '',
      category: data.category || '',
      date: data.date || '',
      readTime: data.readTime || '5',
      coverImage: data.coverImage || '',
      lang: data.lang || lang,
    }
  })

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

/**
 * Get a single post by slug and language
 */
export function getPostBySlug(slug, lang = 'de') {
  const filePath = path.join(postsDir, `${slug}.${lang}.md`)
  
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug: data.slug || slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    category: data.category || '',
    date: data.date || '',
    readTime: data.readTime || '5',
    coverImage: data.coverImage || '',
    lang: data.lang || lang,
    content: content || '',
  }
}

/**
 * Get all unique slugs
 */
export function getAllSlugs() {
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.de.md'))
  return files.map(f => f.replace('.de.md', ''))
}

/**
 * Velocity-Capped Whitelist for Gradual Turkish SSR Indexing (Zero-Spam Protocol: Max 3–5/batch)
 * Kademe 1 (Batch 1 - 3 URLs) + Kademe 2 (Batch 2 - 5 High-Intent Turkish Sector Guides, each 778–1,014 words)
 */
export const TR_INDEXED_BLOG_SLUGS = [
  // Batch 1 (Indexed)
  'almanyadaki-turk-isletmeleri-icin-google-ads-rehberi-2026',
  'almanyada-restoran-doner-google-ads-harita-rehberi-2026',
  'almanyada-handwerk-sanierung-musteri-bulma-rehberi-2026',
  // Batch 2 (5 Verified High-Intent Turkish Sector Guides — Zero-Spam Velocity Cap Compliant)
  'almanyada-dugun-salonu-restoran-reklam-rehberi-2026',
  'almanyada-kfz-gutachter-hasar-ekspertiz-google-ads-2026',
  'almanyada-turk-supermarket-helal-kasap-google-harita-rehberi-2026',
  'almanyada-kfz-werkstatt-oto-tamir-google-ads-rehberi-2026',
  'almanyada-turk-avukat-steuerberater-google-ads-rehberi-2026',
]
