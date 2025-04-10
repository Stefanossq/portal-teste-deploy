import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <div className="header-container">
            <h1 className="header-title">SI UFSM</h1>
            <nav>
              <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Disciplinas</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <div className="footer-container">
            <p>© {new Date().getFullYear()} UFSM. Stefanossq.Sistemas de informacao</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
