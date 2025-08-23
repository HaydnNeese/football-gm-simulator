/*
  Warnings:

  - You are about to drop the `Agent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CapHitByYear` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContractBonus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContractClause` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContractDesires` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeadCapByYear` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OptOutYear` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OptionBonus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PerformanceBonus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlayerContract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rating` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RestructureEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RosterBonus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SalaryByYear` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StatMilestone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkoutBonus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CapHitByYear" DROP CONSTRAINT "CapHitByYear_contractId_fkey";

-- DropForeignKey
ALTER TABLE "ContractBonus" DROP CONSTRAINT "ContractBonus_contractId_fkey";

-- DropForeignKey
ALTER TABLE "ContractClause" DROP CONSTRAINT "ContractClause_contractId_fkey";

-- DropForeignKey
ALTER TABLE "DeadCapByYear" DROP CONSTRAINT "DeadCapByYear_contractId_fkey";

-- DropForeignKey
ALTER TABLE "OptOutYear" DROP CONSTRAINT "OptOutYear_contractId_fkey";

-- DropForeignKey
ALTER TABLE "OptionBonus" DROP CONSTRAINT "OptionBonus_clauseId_fkey";

-- DropForeignKey
ALTER TABLE "PerformanceBonus" DROP CONSTRAINT "PerformanceBonus_clauseId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_agentId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_contractDesiresId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_injuredReserveTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_practiceSquadTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_ratingsId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_statsId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_suspendedListTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Player" DROP CONSTRAINT "Player_teamId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerContract" DROP CONSTRAINT "PlayerContract_playerId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerContract" DROP CONSTRAINT "PlayerContract_teamId_fkey";

-- DropForeignKey
ALTER TABLE "RestructureEvent" DROP CONSTRAINT "RestructureEvent_contractId_fkey";

-- DropForeignKey
ALTER TABLE "RosterBonus" DROP CONSTRAINT "RosterBonus_clauseId_fkey";

-- DropForeignKey
ALTER TABLE "SalaryByYear" DROP CONSTRAINT "SalaryByYear_contractId_fkey";

-- DropForeignKey
ALTER TABLE "StatMilestone" DROP CONSTRAINT "StatMilestone_performanceId_fkey";

-- DropForeignKey
ALTER TABLE "WorkoutBonus" DROP CONSTRAINT "WorkoutBonus_clauseId_fkey";

-- DropTable
DROP TABLE "Agent";

-- DropTable
DROP TABLE "CapHitByYear";

-- DropTable
DROP TABLE "ContractBonus";

-- DropTable
DROP TABLE "ContractClause";

-- DropTable
DROP TABLE "ContractDesires";

-- DropTable
DROP TABLE "DeadCapByYear";

-- DropTable
DROP TABLE "OptOutYear";

-- DropTable
DROP TABLE "OptionBonus";

-- DropTable
DROP TABLE "PerformanceBonus";

-- DropTable
DROP TABLE "Player";

-- DropTable
DROP TABLE "PlayerContract";

-- DropTable
DROP TABLE "Rating";

-- DropTable
DROP TABLE "RestructureEvent";

-- DropTable
DROP TABLE "RosterBonus";

-- DropTable
DROP TABLE "SalaryByYear";

-- DropTable
DROP TABLE "Stat";

-- DropTable
DROP TABLE "StatMilestone";

-- DropTable
DROP TABLE "Team";

-- DropTable
DROP TABLE "WorkoutBonus";

-- CreateTable
CREATE TABLE "player" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "college" TEXT NOT NULL,
    "jerseyNumber" TEXT NOT NULL,
    "heightInInches" INTEGER NOT NULL,
    "weightInPounds" INTEGER NOT NULL,
    "teamId" TEXT,
    "practiceSquadTeamId" TEXT,
    "injuredReserveTeamId" TEXT,
    "suspendedListTeamId" TEXT,
    "currentContractId" TEXT,
    "agentId" TEXT,
    "ratingsId" TEXT,
    "statsId" TEXT,
    "position" "PlayerPositionEnum",
    "expectedRole" "PlayerRoleEnum",
    "actualRole" "PlayerRoleEnum",
    "recordsHeld" "FootballRecordEnum"[],
    "currentInjury" "InjuryTypeEnum",
    "injuryHistory" "InjuryTypeEnum"[],
    "personalityTraits" "PlayerPersonalityTraitEnum"[],
    "offFieldConcerns" "OffFieldConcernTypeEnum"[],
    "pastEvents" "PlayerEventEnum"[],
    "isStarter" BOOLEAN NOT NULL DEFAULT false,
    "isCaptain" BOOLEAN NOT NULL DEFAULT false,
    "isFreeAgent" BOOLEAN NOT NULL DEFAULT false,
    "isRetired" BOOLEAN NOT NULL DEFAULT false,
    "isSuspended" BOOLEAN NOT NULL DEFAULT false,
    "isPracticeSquad" BOOLEAN NOT NULL DEFAULT false,
    "isTradeBlock" BOOLEAN NOT NULL DEFAULT false,
    "offense" BOOLEAN NOT NULL DEFAULT false,
    "defense" BOOLEAN NOT NULL DEFAULT false,
    "specialTeams" BOOLEAN NOT NULL DEFAULT false,
    "draftYear" INTEGER,
    "draftRound" INTEGER,
    "isRecordHolder" BOOLEAN NOT NULL DEFAULT false,
    "contractDesiresId" TEXT,
    "contractNegotiationStatus" "ContractNegotiationStatusEnum",
    "lastContractUpdate" TIMESTAMP(3),
    "performanceRating" INTEGER,
    "impactRating" INTEGER,
    "potential" INTEGER,
    "experience" INTEGER,
    "isInjured" BOOLEAN NOT NULL DEFAULT false,
    "injuryProneness" BOOLEAN NOT NULL DEFAULT false,
    "expectedReturnFromInjury" TIMESTAMP(3),
    "morale" INTEGER,
    "leadership" INTEGER,
    "adaptability" INTEGER,
    "workEthic" INTEGER,
    "consistency" INTEGER,
    "clutchFactor" INTEGER,
    "footballIQ" INTEGER,
    "popularity" INTEGER,
    "trainingFocus" TEXT,
    "trainingProgress" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "stadium" TEXT NOT NULL,
    "logoUrl" TEXT,
    "colorPrimary" TEXT,
    "colorSecondary" TEXT,
    "colorTertiary" TEXT,
    "division" "DivisionEnum" NOT NULL,
    "conference" "ConferenceEnum" NOT NULL,
    "overallRating" INTEGER NOT NULL,
    "offensiveScheme" "OffensiveSchemeEnum" NOT NULL,
    "defensiveScheme" "DefensiveSchemeEnum" NOT NULL,
    "teamNeeds" "PlayerPositionEnum"[],
    "strategy" "StrategyEnum" NOT NULL,
    "wins" INTEGER NOT NULL,
    "losses" INTEGER NOT NULL,
    "ties" INTEGER NOT NULL,
    "currentStreak" INTEGER NOT NULL,
    "longestWinningStreak" INTEGER NOT NULL,
    "playoffAppearances" INTEGER NOT NULL,
    "superBowlAppearances" INTEGER NOT NULL,
    "championships" INTEGER NOT NULL,
    "capLimit" INTEGER NOT NULL,
    "totalPayroll" INTEGER NOT NULL,
    "financialHealth" "FinancialHealthEnum" NOT NULL,
    "yearFounded" INTEGER NOT NULL,
    "allTimeWins" INTEGER NOT NULL,
    "allTimeLosses" INTEGER NOT NULL,
    "allTimeTies" INTEGER NOT NULL,
    "retiredNumbers" INTEGER[],
    "fanBaseSize" INTEGER NOT NULL,
    "prestige" INTEGER NOT NULL,
    "rivalTeams" TEXT[],

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_contract" (
    "id" TEXT NOT NULL,
    "playerId" TEXT,
    "teamId" TEXT,
    "signedDate" TIMESTAMP(3),
    "startSeason" INTEGER,
    "endSeason" INTEGER,
    "totalValue" INTEGER,
    "averagePerYear" INTEGER,
    "totalGuaranteed" INTEGER,
    "isRookieContract" BOOLEAN,
    "isFranchiseTag" BOOLEAN,
    "isExtension" BOOLEAN,
    "isPlayerOptOut" BOOLEAN,
    "isTeamOptOut" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "player_contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contract_bonus" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "signingBonus" INTEGER,
    "rosterBonus" INTEGER,
    "workoutBonus" INTEGER,
    "incentiveBonus" INTEGER,

    CONSTRAINT "contract_bonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salary_by_year" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "salary_by_year_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cap_hit_by_year" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "cap_hit_by_year_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dead_cap_by_year" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "dead_cap_by_year_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opt_out_year" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "opt_out_year_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restructure_event" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER,
    "date" TIMESTAMP(3),
    "amountConvertedToBonus" INTEGER,
    "newCapHit" INTEGER,
    "newDeadCap" INTEGER,

    CONSTRAINT "restructure_event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contract_clause" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "noTradeClause" BOOLEAN,
    "injuryGuarantee" BOOLEAN,
    "restructureEligible" BOOLEAN,
    "earlyTerminationPenalty" DOUBLE PRECISION,
    "performanceBonusId" TEXT,
    "rosterBonusId" TEXT,
    "workoutBonusId" TEXT,
    "optionBonusId" TEXT,

    CONSTRAINT "contract_clause_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performance_bonus" (
    "id" TEXT NOT NULL,
    "clauseId" TEXT NOT NULL,
    "proBowl" INTEGER,
    "allPro" INTEGER,
    "mvp" INTEGER,
    "superBowlMVP" INTEGER,
    "playoffAppearance" INTEGER,

    CONSTRAINT "performance_bonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stat_milestone" (
    "id" TEXT NOT NULL,
    "performanceId" TEXT NOT NULL,
    "yards" INTEGER,
    "touchdowns" INTEGER,
    "sacks" INTEGER,
    "interceptions" INTEGER,

    CONSTRAINT "stat_milestone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roster_bonus" (
    "id" TEXT NOT NULL,
    "clauseId" TEXT NOT NULL,
    "amount" INTEGER,
    "perGame" BOOLEAN,

    CONSTRAINT "roster_bonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workout_bonus" (
    "id" TEXT NOT NULL,
    "clauseId" TEXT NOT NULL,
    "amount" INTEGER,
    "minWorkouts" INTEGER,

    CONSTRAINT "workout_bonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "option_bonus" (
    "id" TEXT NOT NULL,
    "clauseId" TEXT NOT NULL,
    "year" INTEGER,
    "amount" INTEGER,
    "type" "OptionType",

    CONSTRAINT "option_bonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agent" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "agencyName" TEXT,
    "reputation" INTEGER,
    "yearsOfExperience" INTEGER,

    CONSTRAINT "agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" TEXT NOT NULL,
    "playerId" TEXT,
    "speed" INTEGER,
    "acceleration" INTEGER,
    "agility" INTEGER,
    "changeOfDirection" INTEGER,
    "strength" INTEGER,
    "impactPower" INTEGER,
    "verticalJump" INTEGER,
    "stamina" INTEGER,
    "toughness" INTEGER,
    "awareness" INTEGER,
    "discipline" INTEGER,
    "injuryRecovery" INTEGER,
    "throwPower" INTEGER,
    "throwAccuracyShort" INTEGER,
    "throwAccuracyMedium" INTEGER,
    "throwAccuracyDeep" INTEGER,
    "throwOnRun" INTEGER,
    "playAction" INTEGER,
    "pocketPresence" INTEGER,
    "releaseTime" INTEGER,
    "decisionMaking" INTEGER,
    "scrambling" INTEGER,
    "breakSack" INTEGER,
    "fieldVision" INTEGER,
    "ballSecurity" INTEGER,
    "ballCarrierVision" INTEGER,
    "breakTackle" INTEGER,
    "topBallCarrierSpeed" INTEGER,
    "trucking" INTEGER,
    "elusiveness" INTEGER,
    "stiffArm" INTEGER,
    "spinMove" INTEGER,
    "jukeMove" INTEGER,
    "shortYardage" INTEGER,
    "goalLine" INTEGER,
    "openFieldRunning" INTEGER,
    "catching" INTEGER,
    "catchInTraffic" INTEGER,
    "spectacularCatch" INTEGER,
    "contestedCatches" INTEGER,
    "yardsAfterCatch" INTEGER,
    "jumpBallTiming" INTEGER,
    "routeRunning" INTEGER,
    "shortRoute" INTEGER,
    "mediumRoute" INTEGER,
    "deepRoute" INTEGER,
    "separation" INTEGER,
    "release" INTEGER,
    "runBlocking" INTEGER,
    "passBlocking" INTEGER,
    "pullBlocking" INTEGER,
    "scrambleBlocking" INTEGER,
    "playActionBlocking" INTEGER,
    "screenBlocking" INTEGER,
    "leadBlocking" INTEGER,
    "tackling" INTEGER,
    "blockShedding" INTEGER,
    "blitzing" INTEGER,
    "playRecognition" INTEGER,
    "openFieldTackling" INTEGER,
    "coverageAgainstTEsRBs" INTEGER,
    "coverageAgainstSlot" INTEGER,
    "deepCoverage" INTEGER,
    "runDefense" INTEGER,
    "passRush" INTEGER,
    "finessePassRush" INTEGER,
    "powerPassRush" INTEGER,
    "runStopping" INTEGER,
    "penetration" INTEGER,
    "edgeSetting" INTEGER,
    "disengagement" INTEGER,
    "offensiveLineRecognition" INTEGER,
    "hitPower" INTEGER,
    "pressCoverage" INTEGER,
    "offBallCoverage" INTEGER,
    "manCoverage" INTEGER,
    "zoneCoverage" INTEGER,
    "ballHawking" INTEGER,
    "interceptions" INTEGER,
    "passDeflection" INTEGER,
    "kickPower" INTEGER,
    "kickAccuracy" INTEGER,
    "puntPower" INTEGER,
    "puntAccuracy" INTEGER,
    "onsideKickAbility" INTEGER,
    "kickReturnVision" INTEGER,
    "puntReturnVision" INTEGER,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stat" (
    "id" TEXT NOT NULL,
    "season" INTEGER,
    "playerId" TEXT,
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

    CONSTRAINT "stat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contract_desires" (
    "id" TEXT NOT NULL,
    "years" INTEGER,
    "averageSalary" INTEGER,
    "totalGuaranteed" INTEGER,
    "bonuses" JSONB,
    "tradeClause" BOOLEAN,
    "injuryGuarantee" BOOLEAN,
    "rosterBonus" JSONB,
    "workoutBonus" JSONB,
    "incentives" JSONB,
    "optOutYears" INTEGER[],
    "isPlayerOptOut" BOOLEAN,
    "isTeamOptOut" BOOLEAN,
    "playerId" TEXT,

    CONSTRAINT "contract_desires_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "player_teamId_key" ON "player"("teamId");

-- CreateIndex
CREATE UNIQUE INDEX "player_currentContractId_key" ON "player"("currentContractId");

-- CreateIndex
CREATE UNIQUE INDEX "player_ratingsId_key" ON "player"("ratingsId");

-- CreateIndex
CREATE UNIQUE INDEX "player_statsId_key" ON "player"("statsId");

-- CreateIndex
CREATE UNIQUE INDEX "player_contractDesiresId_key" ON "player"("contractDesiresId");

-- CreateIndex
CREATE UNIQUE INDEX "team_name_key" ON "team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "team_nickname_key" ON "team"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "team_location_key" ON "team"("location");

-- CreateIndex
CREATE UNIQUE INDEX "team_abbreviation_key" ON "team"("abbreviation");

-- CreateIndex
CREATE UNIQUE INDEX "player_contract_playerId_key" ON "player_contract"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "player_contract_teamId_key" ON "player_contract"("teamId");

-- CreateIndex
CREATE UNIQUE INDEX "dead_cap_by_year_contractId_key" ON "dead_cap_by_year"("contractId");

-- CreateIndex
CREATE UNIQUE INDEX "opt_out_year_contractId_key" ON "opt_out_year"("contractId");

-- CreateIndex
CREATE UNIQUE INDEX "restructure_event_contractId_key" ON "restructure_event"("contractId");

-- CreateIndex
CREATE UNIQUE INDEX "contract_clause_contractId_key" ON "contract_clause"("contractId");

-- CreateIndex
CREATE UNIQUE INDEX "contract_clause_performanceBonusId_key" ON "contract_clause"("performanceBonusId");

-- CreateIndex
CREATE UNIQUE INDEX "contract_clause_rosterBonusId_key" ON "contract_clause"("rosterBonusId");

-- CreateIndex
CREATE UNIQUE INDEX "contract_clause_workoutBonusId_key" ON "contract_clause"("workoutBonusId");

-- CreateIndex
CREATE UNIQUE INDEX "contract_clause_optionBonusId_key" ON "contract_clause"("optionBonusId");

-- CreateIndex
CREATE UNIQUE INDEX "performance_bonus_clauseId_key" ON "performance_bonus"("clauseId");

-- CreateIndex
CREATE UNIQUE INDEX "stat_milestone_performanceId_key" ON "stat_milestone"("performanceId");

-- CreateIndex
CREATE UNIQUE INDEX "roster_bonus_clauseId_key" ON "roster_bonus"("clauseId");

-- CreateIndex
CREATE UNIQUE INDEX "workout_bonus_clauseId_key" ON "workout_bonus"("clauseId");

-- CreateIndex
CREATE UNIQUE INDEX "option_bonus_clauseId_key" ON "option_bonus"("clauseId");

-- CreateIndex
CREATE UNIQUE INDEX "rating_playerId_key" ON "rating"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "stat_playerId_key" ON "stat"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "stat_playerId_season_key" ON "stat"("playerId", "season");

-- CreateIndex
CREATE UNIQUE INDEX "contract_desires_playerId_key" ON "contract_desires"("playerId");

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_practiceSquadTeamId_fkey" FOREIGN KEY ("practiceSquadTeamId") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_injuredReserveTeamId_fkey" FOREIGN KEY ("injuredReserveTeamId") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_suspendedListTeamId_fkey" FOREIGN KEY ("suspendedListTeamId") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_ratingsId_fkey" FOREIGN KEY ("ratingsId") REFERENCES "rating"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_statsId_fkey" FOREIGN KEY ("statsId") REFERENCES "stat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player" ADD CONSTRAINT "player_contractDesiresId_fkey" FOREIGN KEY ("contractDesiresId") REFERENCES "contract_desires"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_contract" ADD CONSTRAINT "player_contract_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_contract" ADD CONSTRAINT "player_contract_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contract_bonus" ADD CONSTRAINT "contract_bonus_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "player_contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salary_by_year" ADD CONSTRAINT "salary_by_year_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "player_contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cap_hit_by_year" ADD CONSTRAINT "cap_hit_by_year_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "player_contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dead_cap_by_year" ADD CONSTRAINT "dead_cap_by_year_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "player_contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opt_out_year" ADD CONSTRAINT "opt_out_year_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "player_contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restructure_event" ADD CONSTRAINT "restructure_event_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "player_contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contract_clause" ADD CONSTRAINT "contract_clause_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "player_contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performance_bonus" ADD CONSTRAINT "performance_bonus_clauseId_fkey" FOREIGN KEY ("clauseId") REFERENCES "contract_clause"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stat_milestone" ADD CONSTRAINT "stat_milestone_performanceId_fkey" FOREIGN KEY ("performanceId") REFERENCES "performance_bonus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roster_bonus" ADD CONSTRAINT "roster_bonus_clauseId_fkey" FOREIGN KEY ("clauseId") REFERENCES "contract_clause"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout_bonus" ADD CONSTRAINT "workout_bonus_clauseId_fkey" FOREIGN KEY ("clauseId") REFERENCES "contract_clause"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "option_bonus" ADD CONSTRAINT "option_bonus_clauseId_fkey" FOREIGN KEY ("clauseId") REFERENCES "contract_clause"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
