// components/sections/PublicationsSection.tsx
export default function PublicationsSection() {
    const publications = [
      {
        title: "Regenerating Networked Systems? Monitoring Traces Using N...",
        author: "Weverton Luis da Costa Cord...",
      },
      {
        title: "Enhancing classification with hybrid feature selection: A...",
        author: "Márcio Dorn",
      },
      {
        title: "Probabilistic Intersection-Over-Union for Training and Ev...",
        author: "Claudio Rosito Jung",
      },
      // adicione mais publicações aqui...
    ];
  
    return (
      <section className="publications-section">
        <h2 className="publications-title">Publicações</h2>
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div className="publication-card" key={index}>
              <div className="author-placeholder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <h3 className="publication-title">{pub.title}</h3>
              <p className="publication-author">{pub.author}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  