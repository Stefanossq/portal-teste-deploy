import { PrismaClient } from '@prisma/client'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const prisma = new PrismaClient()

async function main() {
  try {
    const filePath = path.join(__dirname, 'eventos.json')
    const file = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(file)

    if (!Array.isArray(data)) {
      throw new Error('O JSON não contém um array de eventos válido.')
    }

    for (const item of data) {
      const acf = item.acf
      if (!acf || !acf.evento_nome || !acf.evento_descricao) continue

      const evento = {
        titulo: acf.evento_nome,
        descricao: acf.evento_descricao.replace(/<[^>]*>?/gm, ''),
        data: acf.evento_inicio || item.date || 'Data não informada',
        local: acf.evento_local || 'Local não informado',
        categoria: acf.evento_categoria || null,
        tipo: item.type || null,
        imagemUrl: acf.evento_banner?.url || null
      }

      await prisma.evento.create({ data: evento })
      console.log(`✅ Evento inserido: ${evento.titulo}`)
    }
  } catch (error) {
    console.error('❌ Erro ao executar seed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
