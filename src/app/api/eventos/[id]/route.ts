// src/app/api/eventos/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/eventos/[id]
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  try {
    const evento = await prisma.evento.findUnique({ where: { id } })

    if (!evento) {
      return NextResponse.json({ error: 'Evento não encontrado' }, { status: 404 })
    }

    return NextResponse.json(evento)
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar o evento' }, { status: 500 })
  }
}

// PUT /api/eventos/[id]
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const data = await req.json()

  try {
    const eventoAtualizado = await prisma.evento.update({
      where: { id },
      data,
    })

    return NextResponse.json(eventoAtualizado)
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar o evento' }, { status: 500 })
  }
}

// DELETE /api/eventos/[id]
export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params

  try {
    await prisma.evento.delete({ where: { id } })
    return NextResponse.json({ message: 'Evento deletado com sucesso' })
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao deletar o evento' }, { status: 500 })
  }
}
