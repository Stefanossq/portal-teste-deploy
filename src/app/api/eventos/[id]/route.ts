// src/app/api/eventos/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface Params {
  params: { id: string };
}

export async function GET(_: Request, { params }: Params) {
  const id = Number(params.id);
  if (isNaN(id)) return NextResponse.json({ error: 'ID inválido' }, { status: 400 });

  try {
    const evento = await prisma.evento.findUnique({ where: { id } });
    if (!evento) return NextResponse.json({ error: 'Evento não encontrado' }, { status: 404 });

    return NextResponse.json(evento);
  } catch (error) {
    console.error('Erro ao buscar evento:', error);
    return NextResponse.json({ error: 'Erro ao buscar evento' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: Params) {
  const id = Number(params.id);
  if (isNaN(id)) return NextResponse.json({ error: 'ID inválido' }, { status: 400 });

  try {
    const body = await req.json();
    const { titulo, descricao, data, local } = body;

    const eventoAtualizado = await prisma.evento.update({
      where: { id },
      data: { titulo, descricao, data, local },
    });

    return NextResponse.json(eventoAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar evento:', error);
    return NextResponse.json({ error: 'Erro ao atualizar evento' }, { status: 500 });
  }
}

export async function DELETE(_: Request, context: { params: { id: string } }) {
    const id = Number(context.params.id);
    if (isNaN(id)) return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  
    try {
      await prisma.evento.delete({ where: { id } });
      return NextResponse.json({ message: 'Evento excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir evento:', error);
      return NextResponse.json({ error: 'Erro ao excluir evento' }, { status: 500 });
    }
  }
  