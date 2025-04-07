export default function NewsSection() {
  const news = [
    { id: 1, title: "Título da notícia 1", date: "10/04/2023" },
    { id: 2, title: "Título da notícia 2", date: "05/04/2023" }
  ];

  return (
    <div className="news-section">
      <h3>Notícias</h3>
      <ul className="news-list">
        {news.map((item) => (
          <li key={item.id}>
            <a href="#" className="news-link">
              {item.title}
            </a>
            <p className="news-date">{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
