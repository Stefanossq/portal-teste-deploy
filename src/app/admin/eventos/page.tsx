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
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">Gerenciar Eventos</h1>
        <Link href="/admin/eventos/novo" className="btn-novo-evento">
          Novo Evento
        </Link>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((evento) => (
            <tr key={evento.id}>
              <td>{evento.titulo}</td>
              <td>{evento.data}</td>
              <td>
                <Link href={`/admin/eventos/${evento.id}/editar`} className="action-link">
                  Editar
                </Link>
                {' '}
                <button onClick={() => handleDelete(evento.id)} className="action-delete">
                  Excluir
                </button>
              </td>
            </tr>
          ))}

          {eventos.length === 0 && (
            <tr>
              <td colSpan={3} className="empty-row">
                Nenhum evento cadastrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
