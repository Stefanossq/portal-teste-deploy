export default function NewsSection() {
    const news = [
      { id: 1, title: "Título da notícia 1", date: "10/04/2023" },
      { id: 2, title: "Título da notícia 2", date: "05/04/2023" }
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-blue-900 mb-3">Notícias</h3>
        <ul className="space-y-3">
          {news.map((item) => (
            <li key={item.id}>
              <a href="#" className="text-blue-600 hover:underline">
                {item.title}
              </a>
              <p className="text-sm text-gray-500">{item.date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }