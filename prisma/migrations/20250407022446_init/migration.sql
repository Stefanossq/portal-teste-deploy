/*
  Warnings:

  - You are about to drop the column `date` on the `Destaque` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Destaque` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Destaque` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Destaque` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `Destaque` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Destaque` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "categoria" TEXT,
    "tipo" TEXT,
    "imagemUrl" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Destaque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagemUrl" TEXT
);
INSERT INTO "new_Destaque" ("id") SELECT "id" FROM "Destaque";
DROP TABLE "Destaque";
ALTER TABLE "new_Destaque" RENAME TO "Destaque";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
