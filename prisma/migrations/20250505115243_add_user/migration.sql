-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "Userid" BIGINT;

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_Userid_fkey" FOREIGN KEY ("Userid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
