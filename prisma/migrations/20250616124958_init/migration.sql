/*
  Warnings:

  - You are about to drop the `Background_Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SavingThrows` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RaceToTrait` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `abilityChoice` to the `Background` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adventuresAndAdvancement` to the `Background` table without a default value. This is not possible if the table is not empty.
  - Added the required column `connectionAndMemento` to the `Background` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languagesChoice` to the `Background` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillChoice` to the `Background` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Background_Skill" DROP CONSTRAINT "Background_Skill_backgroundId_fkey";

-- DropForeignKey
ALTER TABLE "Background_Skill" DROP CONSTRAINT "Background_Skill_skillId_fkey";

-- DropForeignKey
ALTER TABLE "_RaceToTrait" DROP CONSTRAINT "_RaceToTrait_A_fkey";

-- DropForeignKey
ALTER TABLE "_RaceToTrait" DROP CONSTRAINT "_RaceToTrait_B_fkey";

-- DropIndex
DROP INDEX "Background_id_key";

-- AlterTable
ALTER TABLE "Background" ADD COLUMN     "abilityChoice" INTEGER NOT NULL,
ADD COLUMN     "adventuresAndAdvancement" TEXT NOT NULL,
ADD COLUMN     "connectionAndMemento" TEXT NOT NULL,
ADD COLUMN     "featureDescription" TEXT,
ADD COLUMN     "featureName" TEXT,
ADD COLUMN     "languagesChoice" INTEGER NOT NULL,
ADD COLUMN     "skillChoice" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Background_Skill";

-- DropTable
DROP TABLE "SavingThrows";

-- DropTable
DROP TABLE "_RaceToTrait";

-- CreateTable
CREATE TABLE "BackgroundSkill" (
    "id" BIGSERIAL NOT NULL,
    "BackgroundId" BIGINT NOT NULL,
    "SkillId" BIGINT NOT NULL,

    CONSTRAINT "BackgroundSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BackgroundAbility" (
    "id" BIGSERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "BackgroundId" BIGINT NOT NULL,
    "AbilityId" BIGINT NOT NULL,

    CONSTRAINT "BackgroundAbility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BackgroundLanguage" (
    "id" BIGSERIAL NOT NULL,
    "LanguageId" BIGINT NOT NULL,
    "BackgroundId" BIGINT NOT NULL,

    CONSTRAINT "BackgroundLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RaceTraitsThroughDirectRelation" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_RaceTraitsThroughDirectRelation_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_RaceTraitsThroughDirectRelation_B_index" ON "_RaceTraitsThroughDirectRelation"("B");

-- AddForeignKey
ALTER TABLE "BackgroundSkill" ADD CONSTRAINT "BackgroundSkill_BackgroundId_fkey" FOREIGN KEY ("BackgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundSkill" ADD CONSTRAINT "BackgroundSkill_SkillId_fkey" FOREIGN KEY ("SkillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundAbility" ADD CONSTRAINT "BackgroundAbility_BackgroundId_fkey" FOREIGN KEY ("BackgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundAbility" ADD CONSTRAINT "BackgroundAbility_AbilityId_fkey" FOREIGN KEY ("AbilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundLanguage" ADD CONSTRAINT "BackgroundLanguage_LanguageId_fkey" FOREIGN KEY ("LanguageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundLanguage" ADD CONSTRAINT "BackgroundLanguage_BackgroundId_fkey" FOREIGN KEY ("BackgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceTraitsThroughDirectRelation" ADD CONSTRAINT "_RaceTraitsThroughDirectRelation_A_fkey" FOREIGN KEY ("A") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceTraitsThroughDirectRelation" ADD CONSTRAINT "_RaceTraitsThroughDirectRelation_B_fkey" FOREIGN KEY ("B") REFERENCES "Trait"("id") ON DELETE CASCADE ON UPDATE CASCADE;
