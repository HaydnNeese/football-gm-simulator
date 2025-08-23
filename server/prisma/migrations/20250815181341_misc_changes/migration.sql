/*
  Warnings:

  - The values [LT,LG,RG,RT,NT,EDGE,MLB,OLB,ILB,FS,SS,LS,KR,PR] on the enum `PlayerPositionEnum` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[teamId]` on the table `Player` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jerseyNumber` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PlayerPositionEnum_new" AS ENUM ('QB', 'RB', 'FB', 'WR', 'TE', 'OT', 'OG', 'C', 'DE', 'DT', 'LB', 'CB', 'S', 'K', 'P');
ALTER TABLE "Player" ALTER COLUMN "position" TYPE "PlayerPositionEnum_new" USING ("position"::text::"PlayerPositionEnum_new");
ALTER TABLE "Team" ALTER COLUMN "teamNeeds" TYPE "PlayerPositionEnum_new"[] USING ("teamNeeds"::text::"PlayerPositionEnum_new"[]);
ALTER TYPE "PlayerPositionEnum" RENAME TO "PlayerPositionEnum_old";
ALTER TYPE "PlayerPositionEnum_new" RENAME TO "PlayerPositionEnum";
DROP TYPE "PlayerPositionEnum_old";
COMMIT;

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "jerseyNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Player_teamId_key" ON "Player"("teamId");
