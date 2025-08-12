/*
  Warnings:

  - Added the required column `strategy` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StrategyEnum" AS ENUM ('Rebuild', 'Contend', 'WinNow');

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "strategy" "StrategyEnum" NOT NULL;
