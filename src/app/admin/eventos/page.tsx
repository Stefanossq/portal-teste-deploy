'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Evento {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
}

export default function AdminEventosPage() {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    fetch('/api/eventos')
      .then((res) => res.json())
      .then((data) => setEventos(data))
      .catch((err) => console.error('Erro ao carregar eventos:', err));
  }, []);

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Tem certeza que deseja excluir este evento?');
    if (!confirm) return;

    const res = await fetch(`/api/eventos/${id}`, {
      method: 'DELETE'
    });

    if (res.ok) {
      setEventos((prev) => prev.filter((e) => e.id !== id));
    } else {
      alert('Erro ao excluir evento');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-900">Gerenciar Eventos</h1>
        <Link href="/admin/eventos/novo" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Novo Evento
        </Link>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2 border">Título</th>
            <th className="text-left p-2 border">Data</th>
            <th className="text-left p-2 border">Ações</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((evento) => (
            <tr key={evento.id} className="border-t hover:bg-gray-50">
              <td className="p-2 border">{evento.titulo}</td>
              <td className="p-2 border">{evento.data}</td>
              <td className="p-2 border space-x-2">
                <Link
                  href={`/admin/eventos/${evento.id}/editar`}
                  className="text-blue-600 hover:underline"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(evento.id)}
                  className="text-red-600 hover:underline"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}

          {eventos.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center text-gray-500 p-4">
                Nenhum evento cadastrado.
                </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
