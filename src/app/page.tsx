export default function Home() {
  return (
    <div className="space-y-8">
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Sobre o Curso</h2>
        <p className="text-gray-700">
          Aqui vai uma breve descrição do seu curso. Destaque os principais objetivos
          e diferenciais.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Notícias</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Título da notícia 1
              </a>
              <p className="text-sm text-gray-500">Data da publicação</p>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Título da notícia 2
              </a>
              <p className="text-sm text-gray-500">Data da publicação</p>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Eventos</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Nome do evento 1
              </a>
              <p className="text-sm text-gray-500">Data do evento</p>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Links Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Grade Curricular</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Corpo Docente</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Editais</a></li>
          </ul>
        </div>
      </section>
    </div>
  )
}