/*
  Warnings:

  - The `jersey_number` column on the `player` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."player" DROP COLUMN "jersey_number",
ADD COLUMN     "jersey_number" INTEGER;
