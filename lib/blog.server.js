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
