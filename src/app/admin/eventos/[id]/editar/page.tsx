'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditarEventoPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    data: '',
    local: '',
  });

  useEffect(() => {
    fetch(`/api/eventos/${id}`)
      .then(res => res.json())
      .then(data => {
        setForm({
          titulo: data.titulo,
          descricao: data.descricao,
          data: data.data,
          local: data.local,
        });
      });
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/eventos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      router.push('/admin/eventos');
    } else {
      alert('Erro ao atualizar evento');
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Editar Evento</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-field">
          <label>Título</label>
          <input
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Título"
            required
          />
        </div>

        <div className="form-field">
          <label>Data</label>
          <input
            name="data"
            value={form.data}
            onChange={handleChange}
            type="date"
            required
          />
        </div>

        <div className="form-field">
          <label>Local</label>
          <input
            name="local"
            value={form.local}
            onChange={handleChange}
            placeholder="Local"
            required
          />
        </div>

        <div className="form-field">
          <label>Descrição</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Descrição"
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Salvar
        </button>
      </form>
    </div>
  );
}
