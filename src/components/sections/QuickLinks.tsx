'use client';

export default function QuickLinks() {
  const links = [
    { label: 'Ciência da Computação', icon: '🖥️', href: '#' },
    { label: 'Engenharia de Computação', icon: '💻', href: '#' },
    { label: 'CEI', icon: '💡', href: '#' },
    { label: 'Mapa Interno', icon: '📍', href: '#' },
    { label: 'Biblioteca', icon: '📖', href: '#' },
    { label: 'Moodle', icon: '🎓', href: '#' },
    { label: 'Contato dos Setores', icon: '📞', href: '#' },
    { label: 'Portal de Serviços', icon: '⚙️', href: '#' },
    { label: 'AdmRede', icon: '🛠️', href: '#' },
  ];

  return (
    <section className="quick-links">
      <h2>Acesso rápido</h2>
      <div className="quick-links-grid">
        {links.map((link, i) => (
          <a key={i} href={link.href} className="quick-link">
            <div className="icon">{link.icon}</div>
            <span className="label">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
