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
        const formatted = data.map((item: any, index: number) => ({
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
    }, 8000); // tempo mais longo para leitura
    return () => clearInterval(interval);
  }, [items]);

  if (items.length === 0) {
    return <p className="text-gray-500">Carregando destaques...</p>;
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Destaques</h2>

      <div className="relative">
        {items.map((item, index) => (
          <div
            key={item.id}
            aria-hidden={index !== currentIndex}
            className={`transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            <div className={`p-4 rounded-lg ${item.type === 'news' ? 'bg-blue-50' : 'bg-green-50'}`}>
              <span className={`px-2 py-1 rounded text-xs font-medium ${item.type === 'news' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                {item.type === 'news' ? 'Notícia' : 'Evento'}
              </span>
              <h3 className="text-xl font-semibold mt-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-1 whitespace-pre-line break-words">{item.description}</p>
              <p className="text-sm text-gray-500 mt-3">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
            aria-label={`Ir para item ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
