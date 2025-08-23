/*
  Warnings:

  - A unique constraint covering the columns `[agent_id]` on the table `player` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."dead_cap_by_year_contractId_key";

-- DropIndex
DROP INDEX "public"."opt_out_year_contractId_key";

-- DropIndex
DROP INDEX "public"."player_team_id_key";

-- DropIndex
DROP INDEX "public"."player_contract_teamId_key";

-- DropIndex
DROP INDEX "public"."restructure_event_contractId_key";

-- CreateIndex
CREATE UNIQUE INDEX "player_agent_id_key" ON "public"."player"("agent_id");
