/*
  Warnings:

  - You are about to drop the `PlayerSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PlayerSkillToSkill` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Background` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `secret` to the `Language` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PlayerSkill" DROP CONSTRAINT "PlayerSkill_characterId_fkey";

-- DropForeignKey
ALTER TABLE "_PlayerSkillToSkill" DROP CONSTRAINT "_PlayerSkillToSkill_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlayerSkillToSkill" DROP CONSTRAINT "_PlayerSkillToSkill_B_fkey";

-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "secret" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "PlayerSkill";

-- DropTable
DROP TABLE "_PlayerSkillToSkill";

-- CreateTable
CREATE TABLE "CharacterSkill" (
    "id" BIGSERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "characterId" BIGINT NOT NULL,
    "skillId" BIGINT NOT NULL,

    CONSTRAINT "CharacterSkill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CharacterSkill_id_key" ON "CharacterSkill"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Background_name_key" ON "Background"("name");

-- AddForeignKey
ALTER TABLE "CharacterSkill" ADD CONSTRAINT "CharacterSkill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkill" ADD CONSTRAINT "CharacterSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
