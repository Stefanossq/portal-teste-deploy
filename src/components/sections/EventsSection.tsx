'use client';

import { useEffect, useState } from "react";

interface Evento {
  id: number;
  titulo: string;
  data: string;
}

export default function EventsSection() {
  const [events, setEvents] = useState<Evento[]>([]);

  useEffect(() => {
    fetch("/api/eventos")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Erro ao buscar eventos:", err));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold text-blue-900 mb-3">Eventos</h3>
      <ul className="space-y-3">
        {events.length > 0 ? (
          events.map((event) => (
            <li key={event.id}>
              <a href="#" className="text-blue-600 hover:underline">
                {event.titulo}
              </a>
              <p className="text-sm text-gray-500">{event.data}</p>
            </li>
          ))
        ) : (
          <li className="text-gray-500">Nenhum evento disponível</li>
        )}
      </ul>
    </div>
  );
}
