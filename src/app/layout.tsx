import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 font-sans">
        <header className="bg-blue-900 text-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold">Nome do Seu Curso</h1>
              </div>
              <nav>
                <ul className="flex space-x-6">
                  <li><a href="#" className="hover:underline">Início</a></li>
                  <li><a href="#" className="hover:underline">Sobre</a></li>
                  <li><a href="#" className="hover:underline">Disciplinas</a></li>
                  <li><a href="#" className="hover:underline">Contato</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Nome do Seu Curso. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}