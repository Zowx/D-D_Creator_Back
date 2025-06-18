/*
  Warnings:

  - Added the required column `value` to the `CharacterAbility` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CharacterAbility" ADD COLUMN     "value" INTEGER NOT NULL;
