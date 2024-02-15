-- CreateTable
CREATE TABLE "sorcerers" (
    "id" TEXT NOT NULL,
    "identity" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sorcerers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spells" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorId" TEXT NOT NULL,

    CONSTRAINT "spells_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpellCasters" (
    "sorcererId" TEXT NOT NULL,
    "spellId" TEXT NOT NULL,

    CONSTRAINT "SpellCasters_pkey" PRIMARY KEY ("sorcererId","spellId")
);

-- CreateIndex
CREATE UNIQUE INDEX "sorcerers_identity_key" ON "sorcerers"("identity");

-- AddForeignKey
ALTER TABLE "spells" ADD CONSTRAINT "spells_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "sorcerers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellCasters" ADD CONSTRAINT "SpellCasters_sorcererId_fkey" FOREIGN KEY ("sorcererId") REFERENCES "sorcerers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpellCasters" ADD CONSTRAINT "SpellCasters_spellId_fkey" FOREIGN KEY ("spellId") REFERENCES "spells"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
