/*
  Warnings:

  - You are about to drop the `CharacterLanguage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CharacterSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CharacterLanguage" DROP CONSTRAINT "CharacterLanguage_characterId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterLanguage" DROP CONSTRAINT "CharacterLanguage_languageId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterSkill" DROP CONSTRAINT "CharacterSkill_characterId_fkey";

-- DropForeignKey
ALTER TABLE "CharacterSkill" DROP CONSTRAINT "CharacterSkill_skillId_fkey";

-- DropTable
DROP TABLE "CharacterLanguage";

-- DropTable
DROP TABLE "CharacterSkill";

-- CreateTable
CREATE TABLE "_CharacterSkills" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_CharacterSkills_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CharacterLanguage" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_CharacterLanguage_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CharacterSkills_B_index" ON "_CharacterSkills"("B");

-- CreateIndex
CREATE INDEX "_CharacterLanguage_B_index" ON "_CharacterLanguage"("B");

-- AddForeignKey
ALTER TABLE "_CharacterSkills" ADD CONSTRAINT "_CharacterSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterSkills" ADD CONSTRAINT "_CharacterSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterLanguage" ADD CONSTRAINT "_CharacterLanguage_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterLanguage" ADD CONSTRAINT "_CharacterLanguage_B_fkey" FOREIGN KEY ("B") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;
