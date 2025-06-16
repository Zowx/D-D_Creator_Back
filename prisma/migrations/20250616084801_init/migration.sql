/*
  Warnings:

  - You are about to drop the column `skillid` on the `Ability` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ability" DROP CONSTRAINT "Ability_skillid_fkey";

-- AlterTable
ALTER TABLE "Ability" DROP COLUMN "skillid";

-- CreateTable
CREATE TABLE "_AbilityToSkill" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_AbilityToSkill_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AbilityToSkill_B_index" ON "_AbilityToSkill"("B");

-- AddForeignKey
ALTER TABLE "_AbilityToSkill" ADD CONSTRAINT "_AbilityToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToSkill" ADD CONSTRAINT "_AbilityToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
