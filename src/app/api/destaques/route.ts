// app/api/destaques/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  const destaques = await prisma.destaque.findMany();
  return NextResponse.json(destaques);
}
