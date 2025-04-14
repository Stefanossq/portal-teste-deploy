-- CreateTable
CREATE TABLE "Evento" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "categoria" TEXT,
    "tipo" TEXT,
    "imagemUrl" TEXT,
    "link" TEXT,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Destaque" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagemUrl" TEXT,

    CONSTRAINT "Destaque_pkey" PRIMARY KEY ("id")
);
