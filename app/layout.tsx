import Link from 'next/link'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-300 p-8 my-6 rounded-md">
        <Link href="/">
          <h1 className="text-2xl text-black font-bold mt-4">
            <code>
              <span className="text-6xl">K</span>unal Parekh
            </code>
          </h1>
        </Link>
        <p className="text-black">
          <code>
            Greetings and thank you for visiting my technology blog! 💻
          </code>
        </p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <code>Designed by Kunal | 2024</code>
      </div>
    </footer>
  )

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-7xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
