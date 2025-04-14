'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

interface Evento {
  id: number;
  acf: {
    evento_nome: string;
    evento_inicio: string;
  };
}

export default function EventsSection() {
  const [events, setEvents] = useState<Evento[]>([]);
  const [showAll, setShowAll] = useState(false);
  const maxEvents = 5;

  useEffect(() => {
    fetch("https://www.ufsm.br/wp-json/wp/v2/eventos")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Erro ao buscar eventos:", err));
  }, []);

  const visibleEvents = showAll ? events : events.slice(0, maxEvents);

  const formatarData = (dataString: string) => {
    try {
      const [datePart, timePart] = dataString.split(' ');
      const [day, month, year] = datePart.split('/');
      return new Date(`${year}-${month}-${day}T${timePart}`).toLocaleDateString('pt-BR');
    } catch {
      return dataString;
    }
  };

  return (
    <div className="events-container bg-white p-4 rounded shadow">
      <h3 className="events-title font-medium text-lg mb-3">Próximos Eventos</h3>
      <ul className="space-y-2">
        {visibleEvents.length > 0 ? (
          <>
            {visibleEvents.map((event) => (
              <li key={event.id} className="pb-2 border-b border-gray-100 last:border-0">
                <Link 
                  href={`/eventos/detalhes?id=${event.id}`} 
                  className="events-link hover:text-blue-600 block"
                >
                  {event.acf.evento_nome}
                </Link>
                <p className="events-date text-sm text-gray-500">
                  {event.acf.evento_inicio
                    ? formatarData(event.acf.evento_inicio)
                    : "Data não informada"}
                </p>
              </li>
            ))}
            {events.length > maxEvents && (
              <li className="pt-1">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {showAll ? 'Mostrar menos' : `Ver mais (${events.length - maxEvents})`}
                </button>
              </li>
            )}
          </>
        ) : (
          <li className="text-gray-500">Nenhum evento disponível</li>
        )}
      </ul>
    </div>
  );
}
