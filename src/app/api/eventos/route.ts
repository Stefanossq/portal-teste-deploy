
// src/app/api/eventos/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const eventos = await prisma.evento.findMany({
      orderBy: { data: 'asc' },
    });
    return NextResponse.json(eventos);
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    return NextResponse.json({ error: 'Erro ao buscar eventos' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { titulo, descricao, data, local } = body;

    const novoEvento = await prisma.evento.create({
      data: { titulo, descricao, data, local },
    });

    return NextResponse.json(novoEvento, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar evento:', error);
    return NextResponse.json({ error: 'Erro ao criar evento' }, { status: 500 });
  }
}
