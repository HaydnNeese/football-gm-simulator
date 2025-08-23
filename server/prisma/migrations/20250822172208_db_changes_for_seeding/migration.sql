/*
  Warnings:

  - You are about to drop the column `averageSalary` on the `contract_desires` table. All the data in the column will be lost.
  - You are about to drop the column `bonuses` on the `contract_desires` table. All the data in the column will be lost.
  - You are about to drop the column `injuryGuarantee` on the `contract_desires` table. All the data in the column will be lost.
  - You are about to drop the column `isPlayerOptOut` on the `contract_desires` table. All the data in the column will be lost.
  - You are about to drop the column `isTeamOptOut` on the `contract_desires` table. All the data in the column will be lost.
  - You are about to drop the column `optOutYears` on the `contract_desires` table. All the data in the column will be lost.
  - You are about to drop the column `playerId` on the `contract_desires` table. All the data in the column will be lost.
  - You are about to drop the column `rosterBonus` on the `contract_desires` table. All the data in the column will be lost.
  - You are about to drop the column `totalGuaranteed` on the `contract_desires` table. All the data in the column will be lost.
  - You are about to drop the column `tradeClause` on the `contract_desires` table. All the data in the column will be lost.
  - You are about to drop the column `workoutBonus` on the `contract_desires` table. All the data in the column will be lost.
  - You are about to drop the column `actualRole` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `agentId` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `contractDesiresId` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `contractNegotiationStatus` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `currentContractId` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `currentInjury` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `draftRound` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `draftYear` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `expectedReturnFromInjury` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `expectedRole` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `footballIQ` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `heightInInches` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `impactRating` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `injuredReserveTeamId` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `injuryHistory` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `injuryProneness` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `isCaptain` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `isFreeAgent` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `isInjured` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `isPracticeSquad` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `isRecordHolder` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `isRetired` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `isStarter` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `isSuspended` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `isTradeBlock` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `jerseyNumber` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `lastContractUpdate` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `offFieldConcerns` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `pastEvents` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `performanceRating` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `personalityTraits` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `practiceSquadTeamId` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `ratingsId` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `recordsHeld` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `specialTeams` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `statsId` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `suspendedListTeamId` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `trainingFocus` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `trainingProgress` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `weightInPounds` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `workEthic` on the `player` table. All the data in the column will be lost.
  - You are about to drop the column `colorPrimary` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `colorSecondary` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `colorTertiary` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `defensiveScheme` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `logoUrl` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `offensiveScheme` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `overallRating` on the `team` table. All the data in the column will be lost.
  - You are about to drop the column `teamNeeds` on the `team` table. All the data in the column will be lost.
  - You are about to drop the `stat` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[player_id]` on the table `contract_desires` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[team_id]` on the table `player` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[current_contract_id]` on the table `player` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ratings_id]` on the table `player` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stats_id]` on the table `player` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[contract_desires_id]` on the table `player` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[head_coach_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[assistant_head_coach_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[offensive_coordinator_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[defensive_coordinator_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[special_teams_coordinator_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[quarterback_coach_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[running_backs_coach_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[wide_receivers_coach_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tight_ends_coach_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[offensive_line_coach_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[defensive_line_coach_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[linebackers_coach_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[defensive_backs_coach_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[strength_and_conditioning_coach_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[quality_control_coach_offense_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[quality_control_coach_defense_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[team_owner_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[team_president_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[general_manager_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[assistant_general_manager_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[media_relations_manager_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cap_specialist_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[director_player_personnel_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[director_of_pro_scouting_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[director_of_college_scouting_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[head_athletic_trainer_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[assistant_athletic_trainer_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[team_doctor_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[physical_therapist_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sports_psychologist_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nutritionist_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[data_analyst_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[game_analyst_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[video_coordinator_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[equipment_manager_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[facility_manager_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[groundskeeper_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[security_manager_id]` on the table `team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birth_date` to the `player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height_in_inches` to the `player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jersey_number` to the `player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position_abbreviation` to the `player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight_in_pounds` to the `player` table without a default value. This is not possible if the table is not empty.
  - Made the column `playerId` on table `player_contract` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamId` on table `player_contract` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `attendance` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `concessionsRevenue` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defensive_scheme` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expenses` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jerseySales` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mascot` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `merchandiseSales` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `offensive_scheme` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overall_rating` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profit` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revenue` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sponsorshipRevenue` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticketSales` to the `team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tvRevenue` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RosterStatus" AS ENUM ('ACTIVE', 'PRACTICE_SQUAD', 'INJURED_RESERVE', 'SUSPENDED', 'RETIRED', 'FREE_AGENT');

-- CreateEnum
CREATE TYPE "PlayerStatus" AS ENUM ('Active', 'Probable', 'Questionable', 'Doubtful', 'Out');

-- CreateEnum
CREATE TYPE "ContractStatus" AS ENUM ('ACTIVE', 'TERMINATED', 'EXPIRED', 'INJURED_RESERVE', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "InjuryStatus" AS ENUM ('Active', 'Probable', 'Questionable', 'Doubtful', 'Out');

-- CreateEnum
CREATE TYPE "StaffRole" AS ENUM ('TEAM_OWNER', 'TEAM_PRESIDENT', 'GENERAL_MANAGER', 'ASSISTANT_GENERAL_MANAGER', 'MEDIA_RELATIONS_MANAGER', 'CAP_SPECIALIST', 'DIRECTOR_PLAYER_PERSONNEL', 'DIRECTOR_PRO_SCOUTING', 'DIRECTOR_COLLEGE_SCOUTING', 'PRO_SCOUT', 'NATIONAL_SCOUT', 'REGIONAL_SCOUT', 'COMBINE_SCOUT', 'HEAD_TRAINER', 'ASSISTANT_TRAINER', 'TEAM_DOCTOR', 'PHYSICAL_THERAPIST', 'SPORTS_PSYCHOLOGIST', 'NUTRITIONIST', 'DATA_ANALYST', 'GAME_ANALYST', 'VIDEO_COORDINATOR', 'EQUIPMENT_MANAGER', 'FACILITY_MANAGER', 'GROUNDSKEEPER', 'SECURITY_MANAGER');

-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_agentId_fkey";

-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_contractDesiresId_fkey";

-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_injuredReserveTeamId_fkey";

-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_practiceSquadTeamId_fkey";

-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_ratingsId_fkey";

-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_statsId_fkey";

-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_suspendedListTeamId_fkey";

-- DropForeignKey
ALTER TABLE "player" DROP CONSTRAINT "player_teamId_fkey";

-- DropForeignKey
ALTER TABLE "player_contract" DROP CONSTRAINT "player_contract_playerId_fkey";

-- DropForeignKey
ALTER TABLE "player_contract" DROP CONSTRAINT "player_contract_teamId_fkey";

-- DropIndex
DROP INDEX "contract_desires_playerId_key";

-- DropIndex
DROP INDEX "player_contractDesiresId_key";

-- DropIndex
DROP INDEX "player_currentContractId_key";

-- DropIndex
DROP INDEX "player_ratingsId_key";

-- DropIndex
DROP INDEX "player_statsId_key";

-- DropIndex
DROP INDEX "player_teamId_key";

-- AlterTable
ALTER TABLE "contract_desires" DROP COLUMN "averageSalary",
DROP COLUMN "bonuses",
DROP COLUMN "injuryGuarantee",
DROP COLUMN "isPlayerOptOut",
DROP COLUMN "isTeamOptOut",
DROP COLUMN "optOutYears",
DROP COLUMN "playerId",
DROP COLUMN "rosterBonus",
DROP COLUMN "totalGuaranteed",
DROP COLUMN "tradeClause",
DROP COLUMN "workoutBonus",
ADD COLUMN     "average_salary" INTEGER,
ADD COLUMN     "injury_guarantee" BOOLEAN,
ADD COLUMN     "is_player_opt_out" BOOLEAN,
ADD COLUMN     "is_team_opt_out" BOOLEAN,
ADD COLUMN     "opt_out_years" INTEGER[],
ADD COLUMN     "player_id" TEXT,
ADD COLUMN     "roster_bonus_amount" INTEGER,
ADD COLUMN     "roster_bonus_date" TIMESTAMP(3),
ADD COLUMN     "signing_bonus_amount" INTEGER,
ADD COLUMN     "signing_bonus_percentage" INTEGER,
ADD COLUMN     "signing_bonus_prorate_years" INTEGER,
ADD COLUMN     "total_guaranteed" INTEGER,
ADD COLUMN     "trade_clause" BOOLEAN,
ADD COLUMN     "workout_bonus_amount" INTEGER,
ADD COLUMN     "workout_bonus_percentage" INTEGER;

-- AlterTable
ALTER TABLE "player" DROP COLUMN "actualRole",
DROP COLUMN "agentId",
DROP COLUMN "contractDesiresId",
DROP COLUMN "contractNegotiationStatus",
DROP COLUMN "createdAt",
DROP COLUMN "currentContractId",
DROP COLUMN "currentInjury",
DROP COLUMN "draftRound",
DROP COLUMN "draftYear",
DROP COLUMN "expectedReturnFromInjury",
DROP COLUMN "expectedRole",
DROP COLUMN "firstName",
DROP COLUMN "footballIQ",
DROP COLUMN "fullName",
DROP COLUMN "heightInInches",
DROP COLUMN "impactRating",
DROP COLUMN "injuredReserveTeamId",
DROP COLUMN "injuryHistory",
DROP COLUMN "injuryProneness",
DROP COLUMN "isCaptain",
DROP COLUMN "isFreeAgent",
DROP COLUMN "isInjured",
DROP COLUMN "isPracticeSquad",
DROP COLUMN "isRecordHolder",
DROP COLUMN "isRetired",
DROP COLUMN "isStarter",
DROP COLUMN "isSuspended",
DROP COLUMN "isTradeBlock",
DROP COLUMN "jerseyNumber",
DROP COLUMN "lastContractUpdate",
DROP COLUMN "lastName",
DROP COLUMN "offFieldConcerns",
DROP COLUMN "pastEvents",
DROP COLUMN "performanceRating",
DROP COLUMN "personalityTraits",
DROP COLUMN "practiceSquadTeamId",
DROP COLUMN "ratingsId",
DROP COLUMN "recordsHeld",
DROP COLUMN "specialTeams",
DROP COLUMN "statsId",
DROP COLUMN "suspendedListTeamId",
DROP COLUMN "teamId",
DROP COLUMN "trainingFocus",
DROP COLUMN "trainingProgress",
DROP COLUMN "updatedAt",
DROP COLUMN "weightInPounds",
DROP COLUMN "workEthic",
ADD COLUMN     "actual_role" "PlayerRoleEnum",
ADD COLUMN     "agent_id" TEXT,
ADD COLUMN     "birth_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "contract_desires_id" TEXT,
ADD COLUMN     "contract_negotiation_status" "ContractNegotiationStatusEnum",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "current_contract_id" TEXT,
ADD COLUMN     "current_injury" "InjuryTypeEnum",
ADD COLUMN     "draft_round" INTEGER,
ADD COLUMN     "draft_year" INTEGER,
ADD COLUMN     "expected_return_from_injury" TIMESTAMP(3),
ADD COLUMN     "expected_role" "PlayerRoleEnum",
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "football_iq" INTEGER,
ADD COLUMN     "full_name" TEXT NOT NULL,
ADD COLUMN     "height_in_inches" INTEGER NOT NULL,
ADD COLUMN     "impact_rating" INTEGER,
ADD COLUMN     "injured_reserve_team_id" TEXT,
ADD COLUMN     "injuryStatus" "InjuryStatus" NOT NULL DEFAULT 'Active',
ADD COLUMN     "injury_history" "InjuryTypeEnum"[],
ADD COLUMN     "injury_proneness" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_captain" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_free_agent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_injured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_practice_squad" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_record_holder" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_retired" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_starter" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_suspended" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_trade_block" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "jersey_number" TEXT NOT NULL,
ADD COLUMN     "last_contract_update" TIMESTAMP(3),
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "off_field_concerns" "OffFieldConcernTypeEnum"[],
ADD COLUMN     "past_events" "PlayerEventEnum"[],
ADD COLUMN     "performance_rating" INTEGER,
ADD COLUMN     "personality_traits" "PlayerPersonalityTraitEnum"[],
ADD COLUMN     "position_abbreviation" TEXT NOT NULL,
ADD COLUMN     "practice_squad_team_id" TEXT,
ADD COLUMN     "ratings_id" TEXT,
ADD COLUMN     "records_held" "FootballRecordEnum"[],
ADD COLUMN     "special_teams" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "stats_id" TEXT,
ADD COLUMN     "suspended_list_team_id" TEXT,
ADD COLUMN     "team_id" TEXT,
ADD COLUMN     "training_focus" TEXT,
ADD COLUMN     "training_progress" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "weight_in_pounds" INTEGER NOT NULL,
ADD COLUMN     "work_ethic" INTEGER;

-- AlterTable
ALTER TABLE "player_contract" ALTER COLUMN "playerId" SET NOT NULL,
ALTER COLUMN "teamId" SET NOT NULL;

-- AlterTable
ALTER TABLE "team" DROP COLUMN "colorPrimary",
DROP COLUMN "colorSecondary",
DROP COLUMN "colorTertiary",
DROP COLUMN "defensiveScheme",
DROP COLUMN "logoUrl",
DROP COLUMN "offensiveScheme",
DROP COLUMN "overallRating",
DROP COLUMN "teamNeeds",
ADD COLUMN     "assistant_athletic_trainer_id" TEXT,
ADD COLUMN     "assistant_general_manager_id" TEXT,
ADD COLUMN     "assistant_head_coach_id" TEXT,
ADD COLUMN     "attendance" INTEGER NOT NULL,
ADD COLUMN     "cap_specialist_id" TEXT,
ADD COLUMN     "color_primary" TEXT,
ADD COLUMN     "color_secondary" TEXT,
ADD COLUMN     "color_tertiary" TEXT,
ADD COLUMN     "concessionsRevenue" INTEGER NOT NULL,
ADD COLUMN     "data_analyst_id" TEXT,
ADD COLUMN     "defensive_backs_coach_id" TEXT,
ADD COLUMN     "defensive_coordinator_id" TEXT,
ADD COLUMN     "defensive_line_coach_id" TEXT,
ADD COLUMN     "defensive_scheme" "DefensiveSchemeEnum" NOT NULL,
ADD COLUMN     "director_of_college_scouting_id" TEXT,
ADD COLUMN     "director_of_pro_scouting_id" TEXT,
ADD COLUMN     "director_player_personnel_id" TEXT,
ADD COLUMN     "draft_picks" INTEGER[],
ADD COLUMN     "equipment_manager_id" TEXT,
ADD COLUMN     "expenses" INTEGER NOT NULL,
ADD COLUMN     "facility_manager_id" TEXT,
ADD COLUMN     "game_analyst_id" TEXT,
ADD COLUMN     "general_manager_id" TEXT,
ADD COLUMN     "groundskeeper_id" TEXT,
ADD COLUMN     "head_athletic_trainer_id" TEXT,
ADD COLUMN     "head_coach_id" TEXT,
ADD COLUMN     "jerseySales" INTEGER NOT NULL,
ADD COLUMN     "linebackers_coach_id" TEXT,
ADD COLUMN     "logo_url" TEXT,
ADD COLUMN     "mascot" TEXT NOT NULL,
ADD COLUMN     "media_relations_manager_id" TEXT,
ADD COLUMN     "merchandiseSales" INTEGER NOT NULL,
ADD COLUMN     "nutritionist_id" TEXT,
ADD COLUMN     "offensive_coordinator_id" TEXT,
ADD COLUMN     "offensive_line_coach_id" TEXT,
ADD COLUMN     "offensive_scheme" "OffensiveSchemeEnum" NOT NULL,
ADD COLUMN     "overall_rating" INTEGER NOT NULL,
ADD COLUMN     "physical_therapist_id" TEXT,
ADD COLUMN     "profit" INTEGER NOT NULL,
ADD COLUMN     "quality_control_coach_defense_id" TEXT,
ADD COLUMN     "quality_control_coach_offense_id" TEXT,
ADD COLUMN     "quarterback_coach_id" TEXT,
ADD COLUMN     "revenue" INTEGER NOT NULL,
ADD COLUMN     "running_backs_coach_id" TEXT,
ADD COLUMN     "security_manager_id" TEXT,
ADD COLUMN     "special_teams_coordinator_id" TEXT,
ADD COLUMN     "sponsorshipRevenue" INTEGER NOT NULL,
ADD COLUMN     "sports_psychologist_id" TEXT,
ADD COLUMN     "strength_and_conditioning_coach_id" TEXT,
ADD COLUMN     "team_doctor_id" TEXT,
ADD COLUMN     "team_needs" "PlayerPositionEnum"[],
ADD COLUMN     "team_owner_id" TEXT,
ADD COLUMN     "team_president_id" TEXT,
ADD COLUMN     "ticketSales" INTEGER NOT NULL,
ADD COLUMN     "tight_ends_coach_id" TEXT,
ADD COLUMN     "tvRevenue" INTEGER NOT NULL,
ADD COLUMN     "video_coordinator_id" TEXT,
ADD COLUMN     "wide_receivers_coach_id" TEXT;

-- DropTable
DROP TABLE "stat";

-- CreateTable
CREATE TABLE "player_stats" (
    "id" TEXT NOT NULL,
    "season" INTEGER,
    "playerId" TEXT,
    "teamId" TEXT,
    "gamesPlayed" INTEGER,
    "gamesStarted" INTEGER,
    "snaps" INTEGER,
    "rushingAttempts" INTEGER,
    "rushingYards" INTEGER,
    "yardsPerCarry" DOUBLE PRECISION,
    "yardsAfterContact" INTEGER,
    "yardsPerGame" DOUBLE PRECISION,
    "rushingLong" INTEGER,
    "rushingTouchdowns" INTEGER,
    "fumblesLost" INTEGER,
    "receptions" INTEGER,
    "receivingYards" INTEGER,
    "yardsPerReception" DOUBLE PRECISION,
    "yardsAfterCatch" INTEGER,
    "yardsPerTarget" DOUBLE PRECISION,
    "airYards" INTEGER,
    "receivingLong" INTEGER,
    "targets" INTEGER,
    "receivingTouchdowns" INTEGER,
    "drops" INTEGER,
    "passingAttempts" INTEGER,
    "passingCompletions" INTEGER,
    "passingYards" INTEGER,
    "yardsPerPass" DOUBLE PRECISION,
    "yardsPerCompletion" DOUBLE PRECISION,
    "completionPercentage" DOUBLE PRECISION,
    "passingTouchdowns" INTEGER,
    "interceptions" INTEGER,
    "sacksTaken" INTEGER,
    "passerRating" DOUBLE PRECISION,
    "pancakes" INTEGER,
    "sacksAllowed" INTEGER,
    "hurriesAllowed" INTEGER,
    "tackles" INTEGER,
    "tacklesForLoss" INTEGER,
    "sacks" INTEGER,
    "interceptionsMade" INTEGER,
    "forcedFumbles" INTEGER,
    "fumbleRecoveries" INTEGER,
    "passesDefended" INTEGER,
    "defensiveTouchdowns" INTEGER,
    "fieldGoalsMade" INTEGER,
    "fieldGoalsAttempted" INTEGER,
    "extraPointsMade" INTEGER,
    "extraPointsAttempted" INTEGER,
    "punts" INTEGER,
    "puntYards" INTEGER,
    "kickReturns" INTEGER,
    "kickReturnYards" INTEGER,
    "puntReturns" INTEGER,
    "puntReturnYards" INTEGER,
    "specialTeamsTouchdowns" INTEGER,
    "penaltiesCommitted" INTEGER,
    "penaltyYards" INTEGER,

    CONSTRAINT "player_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coach" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "experience" INTEGER NOT NULL,
    "team_id" TEXT,

    CONSTRAINT "Coach_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" TEXT NOT NULL,
    "team_id" TEXT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "role" "StaffRole" NOT NULL,
    "hire_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contract_id" TEXT,
    "pro_scout_of_id" TEXT,
    "national_scout_of_id" TEXT,
    "regional_scout_of_id" TEXT,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "player_stats_playerId_key" ON "player_stats"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "player_stats_playerId_season_key" ON "player_stats"("playerId", "season");

-- CreateIndex
CREATE UNIQUE INDEX "contract_desires_player_id_key" ON "contract_desires"("player_id");

-- CreateIndex
CREATE UNIQUE INDEX "player_team_id_key" ON "player"("team_id");

-- CreateIndex
CREATE UNIQUE INDEX "player_current_contract_id_key" ON "player"("current_contract_id");

-- CreateIndex
CREATE UNIQUE INDEX "player_ratings_id_key" ON "player"("ratings_id");

-- CreateIndex
CREATE UNIQUE INDEX "player_stats_id_key" ON "player"("stats_id");

-- CreateIndex
CREATE UNIQUE INDEX "player_contract_desires_id_key" ON "player"("contract_desires_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_head_coach_id_key" ON "team"("head_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_assistant_head_coach_id_key" ON "team"("assistant_head_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_offensive_coordinator_id_key" ON "team"("offensive_coordinator_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_defensive_coordinator_id_key" ON "team"("defensive_coordinator_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_special_teams_coordinator_id_key" ON "team"("special_teams_coordinator_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_quarterback_coach_id_key" ON "team"("quarterback_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_running_backs_coach_id_key" ON "team"("running_backs_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_wide_receivers_coach_id_key" ON "team"("wide_receivers_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_tight_ends_coach_id_key" ON "team"("tight_ends_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_offensive_line_coach_id_key" ON "team"("offensive_line_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_defensive_line_coach_id_key" ON "team"("defensive_line_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_linebackers_coach_id_key" ON "team"("linebackers_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_defensive_backs_coach_id_key" ON "team"("defensive_backs_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_strength_and_conditioning_coach_id_key" ON "team"("strength_and_conditioning_coach_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_quality_control_coach_offense_id_key" ON "team"("quality_control_coach_offense_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_quality_control_coach_defense_id_key" ON "team"("quality_control_coach_defense_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_team_owner_id_key" ON "team"("team_owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_team_president_id_key" ON "team"("team_president_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_general_manager_id_key" ON "team"("general_manager_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_assistant_general_manager_id_key" ON "team"("assistant_general_manager_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_media_relations_manager_id_key" ON "team"("media_relations_manager_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_cap_specialist_id_key" ON "team"("cap_specialist_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_director_player_personnel_id_key" ON "team"("director_player_personnel_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_director_of_pro_scouting_id_key" ON "team"("director_of_pro_scouting_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_director_of_college_scouting_id_key" ON "team"("director_of_college_scouting_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_head_athletic_trainer_id_key" ON "team"("head_athletic_trainer_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_assistant_athletic_trainer_id_key" ON "team"("assistant_athletic_trainer_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_team_doctor_id_key" ON "team"("team_doctor_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_physical_therapist_id_key" ON "team"("physical_therapist_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_sports_psychologist_id_key" ON "team"("sports_psychologist_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_nutritionist_id_key" ON "team"("nutritionist_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_data_analyst_id_key" ON "team"("data_analyst_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_game_analyst_id_key" ON "team"("game_analyst_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_video_coordinator_id_key" ON "team"("video_coordinator_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_equipment_manager_id_key" ON "team"("equipment_manager_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_facility_manager_id_key" ON "team"("facility_manager_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_groundskeeper_id_key" ON "team"("groundskeeper_id");

-- CreateIndex
CREATE UNIQUE INDEX "team_security_manager_id_key" ON "team"("security_manager_id");

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_practice_squad_team_id_fkey" FOREIGN KEY ("practice_squad_team_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_injured_reserve_team_id_fkey" FOREIGN KEY ("injured_reserve_team_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_suspended_list_team_id_fkey" FOREIGN KEY ("suspended_list_team_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_current_contract_fkey" FOREIGN KEY ("current_contract_id") REFERENCES "player_contract"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_head_coach_id_fkey" FOREIGN KEY ("head_coach_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_assistant_head_coach_id_fkey" FOREIGN KEY ("assistant_head_coach_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_offensive_coordinator_id_fkey" FOREIGN KEY ("offensive_coordinator_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_defensive_coordinator_id_fkey" FOREIGN KEY ("defensive_coordinator_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_special_teams_coordinator_id_fkey" FOREIGN KEY ("special_teams_coordinator_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_quarterback_coach_id_fkey" FOREIGN KEY ("quarterback_coach_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_running_backs_coach_id_fkey" FOREIGN KEY ("running_backs_coach_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_wide_receivers_coach_id_fkey" FOREIGN KEY ("wide_receivers_coach_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_tight_ends_coach_id_fkey" FOREIGN KEY ("tight_ends_coach_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_offensive_line_coach_id_fkey" FOREIGN KEY ("offensive_line_coach_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_defensive_line_coach_id_fkey" FOREIGN KEY ("defensive_line_coach_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_linebackers_coach_id_fkey" FOREIGN KEY ("linebackers_coach_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_defensive_backs_coach_id_fkey" FOREIGN KEY ("defensive_backs_coach_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_strength_and_conditioning_coach_id_fkey" FOREIGN KEY ("strength_and_conditioning_coach_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_quality_control_coach_offense_id_fkey" FOREIGN KEY ("quality_control_coach_offense_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_quality_control_coach_defense_id_fkey" FOREIGN KEY ("quality_control_coach_defense_id") REFERENCES "Coach"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_team_owner_id_fkey" FOREIGN KEY ("team_owner_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_team_president_id_fkey" FOREIGN KEY ("team_president_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_general_manager_id_fkey" FOREIGN KEY ("general_manager_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_assistant_general_manager_id_fkey" FOREIGN KEY ("assistant_general_manager_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_media_relations_manager_id_fkey" FOREIGN KEY ("media_relations_manager_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_cap_specialist_id_fkey" FOREIGN KEY ("cap_specialist_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_director_player_personnel_id_fkey" FOREIGN KEY ("director_player_personnel_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_director_of_pro_scouting_id_fkey" FOREIGN KEY ("director_of_pro_scouting_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_director_of_college_scouting_id_fkey" FOREIGN KEY ("director_of_college_scouting_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_head_athletic_trainer_id_fkey" FOREIGN KEY ("head_athletic_trainer_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_assistant_athletic_trainer_id_fkey" FOREIGN KEY ("assistant_athletic_trainer_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_team_doctor_id_fkey" FOREIGN KEY ("team_doctor_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_physical_therapist_id_fkey" FOREIGN KEY ("physical_therapist_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_sports_psychologist_id_fkey" FOREIGN KEY ("sports_psychologist_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_nutritionist_id_fkey" FOREIGN KEY ("nutritionist_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_data_analyst_id_fkey" FOREIGN KEY ("data_analyst_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_game_analyst_id_fkey" FOREIGN KEY ("game_analyst_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_video_coordinator_id_fkey" FOREIGN KEY ("video_coordinator_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_equipment_manager_id_fkey" FOREIGN KEY ("equipment_manager_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_facility_manager_id_fkey" FOREIGN KEY ("facility_manager_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_groundskeeper_id_fkey" FOREIGN KEY ("groundskeeper_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_security_manager_id_fkey" FOREIGN KEY ("security_manager_id") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_contract" ADD CONSTRAINT "player_contract_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_contract" ADD CONSTRAINT "player_contract_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_stats" ADD CONSTRAINT "player_stats_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_stats" ADD CONSTRAINT "player_stats_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contract_desires" ADD CONSTRAINT "contract_desires_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coach" ADD CONSTRAINT "Coach_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "player_contract"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "staff_pro_scout_of_fkey" FOREIGN KEY ("pro_scout_of_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "staff_national_scout_of_fkey" FOREIGN KEY ("national_scout_of_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "staff_regional_scout_of_fkey" FOREIGN KEY ("regional_scout_of_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
