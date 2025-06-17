-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

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
    "Userid" BIGINT,

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
    "hitDice" TEXT,
    "subclassId" BIGINT,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "abilityId" BIGINT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Background" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "abilityChoice" INTEGER NOT NULL,
    "skillChoice" INTEGER NOT NULL,
    "languagesChoice" INTEGER NOT NULL,
    "connectionAndMemento" TEXT,
    "adventuresAndAdvancement" TEXT,
    "featureName" TEXT,
    "featureDescription" TEXT,

    CONSTRAINT "Background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BackgroundSkill" (
    "id" BIGSERIAL NOT NULL,
    "BackgroundId" BIGINT NOT NULL,

    CONSTRAINT "BackgroundSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BackgroundSkillSkill" (
    "id" BIGSERIAL NOT NULL,
    "BackgroundSkillId" BIGINT NOT NULL,
    "SkillId" BIGINT NOT NULL,

    CONSTRAINT "BackgroundSkillSkill_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Alignment" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Alignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterSkill" (
    "id" BIGSERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "characterId" BIGINT NOT NULL,
    "skillId" BIGINT NOT NULL,

    CONSTRAINT "CharacterSkill_pkey" PRIMARY KEY ("id")
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
    "secret" BOOLEAN NOT NULL,

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
CREATE TABLE "_RaceTraitsThroughDirectRelation" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_RaceTraitsThroughDirectRelation_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_SavingThrows" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_SavingThrows_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_RaceTraitsThroughDirectRelation_B_index" ON "_RaceTraitsThroughDirectRelation"("B");

-- CreateIndex
CREATE INDEX "_SavingThrows_B_index" ON "_SavingThrows"("B");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_alignmentId_fkey" FOREIGN KEY ("alignmentId") REFERENCES "Alignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_Userid_fkey" FOREIGN KEY ("Userid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Race" ADD CONSTRAINT "Race_subraceOfId_fkey" FOREIGN KEY ("subraceOfId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceTrait" ADD CONSTRAINT "RaceTrait_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RaceTrait" ADD CONSTRAINT "RaceTrait_traitId_fkey" FOREIGN KEY ("traitId") REFERENCES "Trait"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_subclassId_fkey" FOREIGN KEY ("subclassId") REFERENCES "Class"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundSkill" ADD CONSTRAINT "BackgroundSkill_BackgroundId_fkey" FOREIGN KEY ("BackgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundSkillSkill" ADD CONSTRAINT "BackgroundSkillSkill_BackgroundSkillId_fkey" FOREIGN KEY ("BackgroundSkillId") REFERENCES "BackgroundSkill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundSkillSkill" ADD CONSTRAINT "BackgroundSkillSkill_SkillId_fkey" FOREIGN KEY ("SkillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundAbility" ADD CONSTRAINT "BackgroundAbility_BackgroundId_fkey" FOREIGN KEY ("BackgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundAbility" ADD CONSTRAINT "BackgroundAbility_AbilityId_fkey" FOREIGN KEY ("AbilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundLanguage" ADD CONSTRAINT "BackgroundLanguage_LanguageId_fkey" FOREIGN KEY ("LanguageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BackgroundLanguage" ADD CONSTRAINT "BackgroundLanguage_BackgroundId_fkey" FOREIGN KEY ("BackgroundId") REFERENCES "Background"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkill" ADD CONSTRAINT "CharacterSkill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkill" ADD CONSTRAINT "CharacterSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterAbility" ADD CONSTRAINT "CharacterAbility_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterAbility" ADD CONSTRAINT "CharacterAbility_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterLanguage" ADD CONSTRAINT "CharacterLanguage_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterLanguage" ADD CONSTRAINT "CharacterLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceTraitsThroughDirectRelation" ADD CONSTRAINT "_RaceTraitsThroughDirectRelation_A_fkey" FOREIGN KEY ("A") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RaceTraitsThroughDirectRelation" ADD CONSTRAINT "_RaceTraitsThroughDirectRelation_B_fkey" FOREIGN KEY ("B") REFERENCES "Trait"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SavingThrows" ADD CONSTRAINT "_SavingThrows_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SavingThrows" ADD CONSTRAINT "_SavingThrows_B_fkey" FOREIGN KEY ("B") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;
