/*
  Warnings:

  - You are about to drop the column `Userid` on the `Character` table. All the data in the column will be lost.
  - Added the required column `user` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_Userid_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "Userid",
ADD COLUMN     "user" TEXT NOT NULL;
