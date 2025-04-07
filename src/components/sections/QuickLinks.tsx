export default function QuickLinks() {
  const links = [
    { name: "Grade Curricular", url: "#" },
    { name: "Corpo Docente", url: "#" },
    { name: "Editais", url: "#" }
  ];

  return (
    <div className="quick-links">
      <h3>Links Rápidos</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="quick-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
