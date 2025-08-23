/*
  Warnings:

  - Made the column `abbreviation` on table `team` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."team" ALTER COLUMN "abbreviation" SET NOT NULL;
