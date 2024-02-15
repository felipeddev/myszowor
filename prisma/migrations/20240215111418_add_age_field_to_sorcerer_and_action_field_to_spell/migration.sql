/*
  Warnings:

  - Added the required column `age` to the `sorcerers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `action` to the `spells` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `spells` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sorcerers" ADD COLUMN     "age" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "spells" ADD COLUMN     "action" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
