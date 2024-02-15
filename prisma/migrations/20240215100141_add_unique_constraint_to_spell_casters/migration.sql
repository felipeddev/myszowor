/*
  Warnings:

  - A unique constraint covering the columns `[sorcererId,spellId]` on the table `SpellCasters` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SpellCasters_sorcererId_spellId_key" ON "SpellCasters"("sorcererId", "spellId");
