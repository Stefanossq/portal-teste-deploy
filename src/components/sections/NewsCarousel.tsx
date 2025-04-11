'use client';

import { useState, useEffect } from 'react';

type CarouselItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'news' | 'event';
  image?: string;
};

export default function NewsCarousel() {
  const [items, setItems] = useState<CarouselItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/api/eventos')
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          console.error('Resposta da API não é um array:', data);
          return;
        }

        const formatted: CarouselItem[] = data.map((item: any) => ({
          id: item.id,
          title: item.titulo,
          description: item.descricao,
          date: item.data,
          type: 'event',
          image: item.imagemUrl || null,
        }));

        setItems(formatted);
      });
  }, []);

  useEffect(() => {
    if (items.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 10000); // muda a cada 10s
    return () => clearInterval(interval);
  }, [items]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  if (items.length === 0) {
    return <p className="carousel-description">Carregando destaques...</p>;
  }

  const item = items[currentIndex];

  return (
    <section className="news-carousel">
      <h2>Destaques</h2>

      <div className="carousel-card">
        {item.image && (
          <div className="carousel-image-wrapper">
            <img
              src={item.image}
              alt={`Imagem do evento ${item.title}`}
              className="carousel-image"
            />
          </div>
        )}

        <div className="carousel-content">
          <span className={`carousel-label ${item.type === 'news' ? 'news' : ''}`}>
            {item.type === 'news' ? 'Notícia' : 'Evento'}
          </span>
          <h3 className="carousel-title">{item.title}</h3>
          <p className="carousel-description">{item.description}</p>
          <p className="carousel-date">{item.date}</p>

          <div className="carousel-controls">
            <button onClick={handlePrev} className="carousel-arrow">
              ◀
            </button>
            <span className="carousel-position">
              {currentIndex + 1} / {items.length}
            </span>
            <button onClick={handleNext} className="carousel-arrow">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
