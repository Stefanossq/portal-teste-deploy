import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.destaque.createMany({
    data: [
      {
        title: "sera q bgues",
        description: "Participe do nossobalance.",
        date: "15/06/2024",
        type: "event"
      },
      {
        title: "No npx curs KKKKKKKKAKAKAAK22 Disponível",
        description: "Conheça nosso novo laboratório de pesquisas avançadas.",
        date: "10/06/2024",
        type: "news"
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
