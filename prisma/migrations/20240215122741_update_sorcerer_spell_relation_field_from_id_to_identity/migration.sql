/*
  Warnings:

  - You are about to drop the column `creatorId` on the `spells` table. All the data in the column will be lost.
  - Added the required column `creatorIdentity` to the `spells` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "spells" DROP CONSTRAINT "spells_creatorId_fkey";

-- AlterTable
ALTER TABLE "spells" DROP COLUMN "creatorId",
ADD COLUMN     "creatorIdentity" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "spells" ADD CONSTRAINT "spells_creatorIdentity_fkey" FOREIGN KEY ("creatorIdentity") REFERENCES "sorcerers"("identity") ON DELETE RESTRICT ON UPDATE CASCADE;
