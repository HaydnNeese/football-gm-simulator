/*
  Warnings:

  - A unique constraint covering the columns `[externalId]` on the table `player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `externalId` to the `player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."player" ADD COLUMN     "externalId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "player_externalId_key" ON "public"."player"("externalId");
