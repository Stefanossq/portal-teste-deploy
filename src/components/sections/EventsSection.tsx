export default function EventsSection() {
    const events = [
      { id: 1, name: "Nome do evento 1", date: "15/04/2023" }
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-blue-900 mb-3">Eventos</h3>
        <ul className="space-y-3">
          {events.map((event) => (
            <li key={event.id}>
              <a href="#" className="text-blue-600 hover:underline">
                {event.name}
              </a>
              <p className="text-sm text-gray-500">{event.date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }