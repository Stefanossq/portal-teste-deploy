export default function QuickLinks() {
    const links = [
      { name: "Grade Curricular", url: "#" },
      { name: "Corpo Docente", url: "#" },
      { name: "Editais", url: "#" }
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-blue-900 mb-3">Links Rápidos</h3>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="text-blue-600 hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }