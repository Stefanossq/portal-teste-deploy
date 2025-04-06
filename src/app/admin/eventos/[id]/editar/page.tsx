'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Evento</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          placeholder="Título"
          className="w-full border p-2 rounded"
        />
        <input
          name="data"
          value={form.data}
          onChange={handleChange}
          placeholder="Data"
          type="date"
          className="w-full border p-2 rounded"
        />
        <input
          name="local"
          value={form.local}
          onChange={handleChange}
          placeholder="Local"
          className="w-full border p-2 rounded"
        />
        <textarea
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          placeholder="Descrição"
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Salvar
        </button>
      </form>
    </div>
  );
}
