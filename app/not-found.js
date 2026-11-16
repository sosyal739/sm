import Link from 'next/link'
import HtmlShell from '@/components/HtmlShell'

export default function NotFound() {
  return (
    <HtmlShell lang="de">
      <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-lg text-center space-y-5">
          <p className="text-sm font-bold uppercase tracking-widest text-[#4285F4]">404</p>
          <h1 className="text-3xl font-extrabold text-gray-900">Seite nicht gefunden</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Die angeforderte Seite wurde verschoben oder existiert nicht mehr. Nutzen Sie unsere Startseite oder entdecken Sie unsere Leitfäden im Blog.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/" className="px-5 py-2.5 rounded-xl bg-[#4285F4] text-white text-sm font-bold hover:bg-blue-600 transition-colors">
              Zur Startseite (DE)
            </Link>
            <Link href="/tr" className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors">
              Ana Sayfa (TR)
            </Link>
            <Link href="/blog" className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm font-bold hover:bg-slate-50 transition-colors">
              Blog &amp; Ratgeber
            </Link>
          </div>
        </div>
      </main>
    </HtmlShell>
  )
}
