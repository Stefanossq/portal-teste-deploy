// src/app/api/eventos/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Tipagem correta do parâmetro
type Context = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, context: Context) {
  const id = Number(context.params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  }

  try {
    const evento = await prisma.evento.findUnique({ where: { id } });

    if (!evento) {
      return NextResponse.json({ error: 'Evento não encontrado' }, { status: 404 });
    }

    return NextResponse.json(evento);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar evento' }, { status: 500 });
  }
}

export async function PUT(req: Request, context: Context) {
  const id = Number(context.params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  }

  try {
    const data = await req.json();

    const eventoAtualizado = await prisma.evento.update({
      where: { id },
      data,
    });

    return NextResponse.json(eventoAtualizado);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar evento' }, { status: 500 });
  }
}

export async function DELETE(_: Request, context: Context) {
  const id = Number(context.params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  }

  try {
    await prisma.evento.delete({ where: { id } });
    return NextResponse.json({ mensagem: 'Evento deletado com sucesso' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao deletar evento' }, { status: 500 });
  }
}
