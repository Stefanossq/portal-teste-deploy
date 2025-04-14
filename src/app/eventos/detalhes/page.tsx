'use client';

import { notFound } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import './EventoPage.css';

interface Evento {
  id: number;
  acf: {
    evento_nome: string;
    evento_inicio: string;
    evento_termino: string;
    evento_banner: {
      url: string;
      alt: string;
    };
    evento_categoria: string;
    evento_descricao: string;
    evento_programacao: string;
    evento_inscricao: string;
    evento_local: string;
    evento_contato: string;
  };
  link: string;
}

function DetalhesEvento() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [evento, setEvento] = useState<Evento | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('ID do evento não especificado');
      setLoading(false);
      return;
    }

    const fetchEvento = async () => {
      try {
        const res = await fetch(`https://www.ufsm.br/wp-json/wp/v2/eventos/${id}`);
        
        if (!res.ok) {
          throw new Error('Evento não encontrado');
        }

        const data: Evento = await res.json();
        setEvento(data);
      } catch (err) {
        console.error('Erro ao carregar evento:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchEvento();
  }, [id]);

  const formatarData = (dataString: string) => {
    try {
      const [datePart, timePart] = dataString.split(' ');
      const [day, month, year] = datePart.split('/');
      return new Date(`${year}-${month}-${day}T${timePart}`).toLocaleString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dataString;
    }
  };

  if (loading) {
    return (
      <div className="evento-loading">
        <p>Carregando informações do evento...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="evento-error">
        <p>Erro: {error}</p>
      </div>
    );
  }

  if (!evento) {
    notFound();
    return null;
  }

  return (
    <div className="evento-container">
      {/* Cabeçalho */}
      <div className="evento-header">
        <h1 className="evento-title">{evento.acf.evento_nome}</h1>
        <span className="evento-categoria">{evento.acf.evento_categoria}</span>
      </div>

      {/* Banner do evento */}
      {evento.acf.evento_banner?.url && (
        <div className="evento-banner">
          <img
            src={evento.acf.evento_banner.url}
            alt={evento.acf.evento_banner.alt || evento.acf.evento_nome}
            className="evento-imagem"
            loading="lazy"
          />
        </div>
      )}

      {/* Conteúdo principal */}
      <div className="evento-content">
        {/* Descrição */}
        <div className="evento-section">
          <h2>Sobre o Evento</h2>
          <div 
            className="evento-descricao" 
            dangerouslySetInnerHTML={{ __html: evento.acf.evento_descricao }} 
          />
        </div>

        {/* Programação */}
        {evento.acf.evento_programacao && (
          <div className="evento-section">
            <h2>Programação</h2>
            <div 
              className="evento-programacao" 
              dangerouslySetInnerHTML={{ __html: evento.acf.evento_programacao }} 
            />
          </div>
        )}

        {/* Informações */}
        <div className="evento-info">
          <h2>Informações</h2>
          
          <div className="info-item">
            <h3>Data e Horário</h3>
            <p>
              {formatarData(evento.acf.evento_inicio)}
              {evento.acf.evento_termino && ` até ${formatarData(evento.acf.evento_termino)}`}
            </p>
          </div>

          <div className="info-item">
            <h3>Local</h3>
            <p>{evento.acf.evento_local}</p>
          </div>

          <div className="info-item">
            <h3>Contato</h3>
            <div dangerouslySetInnerHTML={{ __html: evento.acf.evento_contato }} />
          </div>

          {/* Inscrição */}
          {evento.acf.evento_inscricao && (
            <div className="info-item">
              <h3>Inscrição</h3>
              <div dangerouslySetInnerHTML={{ __html: evento.acf.evento_inscricao }} />
            </div>
          )}

          {/* Link original */}
          <div className="info-item">
            <h3>Mais informações</h3>
            <a 
              href={evento.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="evento-link"
            >
              Ver no site da UFSM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventoPage() {
  return (
    <Suspense fallback={
      <div className="evento-loading">
        <p>Carregando...</p>
      </div>
    }>
      <DetalhesEvento />
    </Suspense>
  );
}