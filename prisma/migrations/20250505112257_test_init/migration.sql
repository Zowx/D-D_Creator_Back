-- CreateTable
CREATE TABLE "Character" (
    "id" BIGSERIAL NOT NULL,
    "raceId" BIGINT NOT NULL,
    "classId" BIGINT NOT NULL,
    "backgroundId" BIGINT NOT NULL,
    "alignmentId" BIGINT NOT NULL,
    "xp" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "player" TEXT NOT NULL,
    "AC" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "max_hp" INTEGER NOT NULL,
    "temp_hp" INTEGER NOT NULL,
    "personality" TEXT NOT NULL,
    "ideals" TEXT NOT NULL,
    "bonds" TEXT NOT NULL,
    "flaws" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "eyes" TEXT NOT NULL,
    "skin" TEXT NOT NULL,
    "hair" TEXT NOT NULL,
    "appearance" TEXT NOT NULL,
    "allies" TEXT NOT NULL,
    "backstory" TEXT NOT NULL,
    "treasure" TEXT NOT NULL,
    "traits" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Race" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "subraceOfId" BIGINT,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trait" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Trait_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RaceTrait" (
    "id" SERIAL NOT NULL,
    "raceId" BIGINT NOT NULL,
    "traitId" BIGINT NOT NULL,

    CONSTRAINT "RaceTrait_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "caster_type" TEXT NOT NULL,
    "subclass" TEXT NOT NULL,
    "hit_dice" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "short_desc" TEXT NOT NULL,
    "skillid" BIGINT,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Background" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Background_Skill" (
    "id" BIGSERIAL NOT NULL,
    "skillId" BIGINT NOT NULL,
    "backgroundId" BIGINT NOT NULL,

    CONSTRAINT "Background_Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alignment" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Alignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerSkill" (
    "id" BIGSERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "characterId" BIGINT NOT NULL,

    CONSTRAINT "PlayerSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavingThrows" (
    "id" SERIAL NOT NULL,
    "skill" TEXT NOT NULL,
    "character" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CharacterAbility" (
    "id" BIGSERIAL NOT NULL,
    "characterId" BIGINT NOT NULL,
    "abilityId" BIGINT NOT NULL,

    CONSTRAINT "CharacterAbility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "exotic" BOOLEAN NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterLanguage" (
    "id" BIGSERIAL NOT NULL,
    "characterId" BIGINT NOT NULL,
    "languageId" BIGINT NOT NULL,

    CONSTRAINT "CharacterLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RaceToTrait" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_RaceToTrait_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_SavingThrows" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_SavingThrows_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PlayerSkillToSkill" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_PlayerSkillToSkill_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_backgroundId_key" ON "Character"("backgroundId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_id_key" ON "Skill"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Background_id_key" ON "Background"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Background_Skill_backgroundId_key" ON "Background_Skill"("backgroundId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerSkill_id_key" ON "PlayerSkill"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SavingThrows_id_key" ON "SavingThrows"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterAbility_id_key" ON "CharacterAbility"("id");

-- CreateIndex
CREATE INDEX "_RaceToTrait_B_index" ON "_RaceToTrait"("B");

-- CreateIndex
CREATE INDEX "_SavingThrows_B_index" ON "_SavingThrows"("B");

-- CreateIndex
CREATE INDEX "_PlayerSkillToSkill_B_index" ON "_PlayerSkillToSkill"("B");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_alignmentId_fkey" FOREIGN KEY ("alignmentId") REFERENCES "Alignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_subraceOfId_fkey" FOREIGN KEY ("subraceOfId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceTrait" ADD CONSTRAINT "RaceTrait_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceTrait" ADD CONSTRAINT "RaceTrait_traitId_fkey" FOREIGN KEY ("traitId") REFERENCES "Trait"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_skillid_fkey" FOREIGN KEY ("skillid") REFERENCES "Skill"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Background_Skill" ADD CONSTRAINT "Background_Skill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Background_Skill" ADD CONSTRAINT "Background_Skill_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerSkill" ADD CONSTRAINT "PlayerSkill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterAbility" ADD CONSTRAINT "CharacterAbility_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterAbility" ADD CONSTRAINT "CharacterAbility_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterLanguage" ADD CONSTRAINT "CharacterLanguage_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterLanguage" ADD CONSTRAINT "CharacterLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceToTrait" ADD CONSTRAINT "_RaceToTrait_A_fkey" FOREIGN KEY ("A") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceToTrait" ADD CONSTRAINT "_RaceToTrait_B_fkey" FOREIGN KEY ("B") REFERENCES "Trait"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SavingThrows" ADD CONSTRAINT "_SavingThrows_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SavingThrows" ADD CONSTRAINT "_SavingThrows_B_fkey" FOREIGN KEY ("B") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerSkillToSkill" ADD CONSTRAINT "_PlayerSkillToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "PlayerSkill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlayerSkillToSkill" ADD CONSTRAINT "_PlayerSkillToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
