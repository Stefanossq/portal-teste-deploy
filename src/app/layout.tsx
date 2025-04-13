// src/app/layout.tsx

import './globals.css'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="layout">
        <header>
          <div className="header-container">
            <Link href="/" className="logo">SI UFSM</Link>
            <nav>
              <ul className="nav-list">
                <li><Link href="/">Início</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="/disciplinas">Disciplinas</Link></li>
                <li className="contact-dropdown">
                  <span className="nav-link">Contato</span>
                  <div className="contact-info">
                    <a href="tel:+555532219999">55 3221 9999</a><br />
                    <a href="tel:+5555991234566">55 99123 - 4566</a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <div className="footer-container">
            <p>© {new Date().getFullYear()} UFSM. Stefanossq. Sistemas de Informação</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
