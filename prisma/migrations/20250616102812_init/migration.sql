/*
  Warnings:

  - You are about to drop the `_AbilityToSkill` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `abilityId` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AbilityToSkill" DROP CONSTRAINT "_AbilityToSkill_A_fkey";

-- DropForeignKey
ALTER TABLE "_AbilityToSkill" DROP CONSTRAINT "_AbilityToSkill_B_fkey";

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "abilityId" BIGINT NOT NULL;

-- DropTable
DROP TABLE "_AbilityToSkill";

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
