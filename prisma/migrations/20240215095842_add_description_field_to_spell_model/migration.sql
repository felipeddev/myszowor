/*
  Warnings:

  - Added the required column `description` to the `spells` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "spells" ADD COLUMN     "description" TEXT NOT NULL;
