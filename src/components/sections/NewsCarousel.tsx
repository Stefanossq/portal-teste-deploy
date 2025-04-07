'use client';

import { useState, useEffect } from 'react';

type CarouselItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'news' | 'event';
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
          type: 'event'
        }));

        setItems(formatted);
      });
  }, []);

  useEffect(() => {
    if (items.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [items]);

  if (items.length === 0) {
    return <p className="carousel-description">Carregando destaques...</p>;
  }

  return (
    <section className="news-carousel">
      <h2>Destaques</h2>

      <div className="carousel-wrapper">
        {items.map((item, index) => (
          <div
            key={item.id}
            aria-hidden={index !== currentIndex}
            className={`carousel-item ${index === currentIndex ? 'visible' : 'hidden'}`}
          >
            <div className={`carousel-box ${item.type === 'news' ? 'news' : ''}`}>
              <span className={`carousel-label ${item.type === 'news' ? 'news' : ''}`}>
                {item.type === 'news' ? 'Notícia' : 'Evento'}
              </span>
              <h3 className="carousel-title">{item.title}</h3>
              <p className="carousel-description">{item.description}</p>
              <p className="carousel-date">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Ir para item ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
