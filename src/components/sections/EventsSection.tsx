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
    <div className="events-container">
      <h3 className="events-title">Eventos</h3>
      <ul>
        {events.length > 0 ? (
          events.map((event) => (
            <li key={event.id}>
              <a href="#" className="events-link">
                {event.titulo}
              </a>
              <p className="events-date">{event.data}</p>
            </li>
          ))
        ) : (
          <li className="events-date">Nenhum evento disponível</li>
        )}
      </ul>
    </div>
  );
}
