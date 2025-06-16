/*
  Warnings:

  - You are about to drop the column `SkillId` on the `BackgroundSkill` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BackgroundSkill" DROP CONSTRAINT "BackgroundSkill_SkillId_fkey";

-- AlterTable
ALTER TABLE "BackgroundSkill" DROP COLUMN "SkillId";

-- CreateTable
CREATE TABLE "BackgroundSkillSkill" (
    "id" BIGSERIAL NOT NULL,
    "BackgroundSkillId" BIGINT NOT NULL,
    "SkillId" BIGINT NOT NULL,

    CONSTRAINT "BackgroundSkillSkill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BackgroundSkillSkill" ADD CONSTRAINT "BackgroundSkillSkill_BackgroundSkillId_fkey" FOREIGN KEY ("BackgroundSkillId") REFERENCES "BackgroundSkill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundSkillSkill" ADD CONSTRAINT "BackgroundSkillSkill_SkillId_fkey" FOREIGN KEY ("SkillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
