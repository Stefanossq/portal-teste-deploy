import { PrismaClient } from '@prisma/client'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const prisma = new PrismaClient()

function formatData(dataStr: string): string {
  if (!dataStr) return 'Data não informada'
  // Se for dd/mm/yyyy HH:mm
  const [datePart] = dataStr.split(' ')
  if (datePart.includes('/')) {
    const iso = datePart.split('/').reverse().join('-')
    return iso
  }
  return dataStr // já está em ISO ou outro formato
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>?/gm, '')
}

async function main() {
  let sucesso = 0
  let erro = 0

  try {
    const filePath = path.join(__dirname, 'eventos.json')
    const file = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(file)

    if (!Array.isArray(data)) {
      throw new Error('O JSON não contém um array de eventos válido.')
    }

    for (const item of data) {
      try {
        const acf = item.acf
        if (!acf || !acf.evento_nome || !acf.evento_descricao) {
          console.warn('⚠️ Evento ignorado por falta de dados essenciais.')
          continue
        }

        const evento = {
          id: String(item.id),
          titulo: acf.evento_nome,
          descricao: stripHtml(acf.evento_descricao || ''),
          data: formatData(acf.evento_inicio || item.date),
          local: acf.evento_local || 'Local não informado',
          categoria: acf.evento_categoria || null,
          tipo: item.type || null,
          imagemUrl: acf.evento_banner?.url || null,
          link: item.link || null
        }

        await prisma.evento.upsert({
          where: { id: evento.id },
          update: evento,
          create: evento
        })

        console.log(`✅ Evento inserido: ${evento.titulo}`)
        sucesso++
      } catch (err) {
        console.error(`❌ Erro ao inserir evento ID ${item.id}:`, err)
        erro++
      }
    }

    console.log(`\n✅ Importação concluída. ${sucesso} inseridos, ${erro} com erro.`)
  } catch (error) {
    console.error('❌ Erro geral no seed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
