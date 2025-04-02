'use client'; // Necessário para hooks e efeitos

import { useState, useEffect } from 'react';

type CarouselItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'news' | 'event';
};

export default function NewsCarousel() {
  // Mock de dados (substitua por API depois)
  const items: CarouselItem[] = [
    {
      id: 1,
      title: "Inscrições Abertas para Workshop",
      description: "Participe do nosso workshop de introdução ao curso.",
      date: "15/06/2024",
      type: 'event'
    },
    {
      id: 2,
      title: "Novo Laboratório Disponível",
      description: "Conheça nosso novo laboratório de pesquisas avançadas.",
      date: "10/06/2024",
      type: 'news'
    },
    {
      id: 3,
      title: "Edital de Bolsas Publicado",
      description: "Confira as oportunidades para o próximo semestre.",
      date: "05/06/2024",
      type: 'news'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Efeito para transição automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="bg-white p-6 rounded-lg shadow relative h-64 overflow-hidden">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Destaques</h2>
      
      <div className="relative h-full">
        {items.map((item, index) => (
          <div 
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className={`p-4 rounded-lg ${item.type === 'news' ? 'bg-blue-50' : 'bg-green-50'}`}>
              <span className={`px-2 py-1 rounded text-xs font-medium ${item.type === 'news' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                {item.type === 'news' ? 'Notícia' : 'Evento'}
              </span>
              <h3 className="text-xl font-semibold mt-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.description}</p>
              <p className="text-sm text-gray-500 mt-3">{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2 absolute bottom-4 left-0 right-0">
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