'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NovoEventoPage() {
  const router = useRouter();

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/eventos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, descricao, data, local })
    });

    if (res.ok) {
      router.push('/admin/eventos');
    } else {
      alert('Erro ao criar evento');
    }
  };

  return (
    <div className="novo-evento-container">
      <h1 className="novo-evento-title">Novo Evento</h1>
      <form onSubmit={handleSubmit} className="novo-evento-form">
        <div className="form-group">
          <label className="form-label">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            className="form-textarea"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Data</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Local</label>
          <input
            type="text"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="form-button">
          Criar Evento
        </button>
      </form>
    </div>
  );
}
