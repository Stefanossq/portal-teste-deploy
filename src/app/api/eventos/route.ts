// src/app/api/eventos/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

 // certifique-se que este caminho está certo no seu projeto

export async function GET() {
  try {
    const eventos = await prisma.evento.findMany();
    return NextResponse.json(eventos);
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    return NextResponse.json({ error: 'Erro ao buscar eventos' }, { status: 500 });
  }
}
