/*
  Warnings:

  - You are about to drop the column `short_desc` on the `Ability` table. All the data in the column will be lost.
  - Added the required column `shortDescription` to the `Ability` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ability" DROP COLUMN "short_desc",
ADD COLUMN     "shortDescription" TEXT NOT NULL;
