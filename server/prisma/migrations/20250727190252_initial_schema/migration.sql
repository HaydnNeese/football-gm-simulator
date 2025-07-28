-- CreateEnum
CREATE TYPE "PlayerRoleEnum" AS ENUM ('STARTER', 'ROLE_PLAYER', 'BACKUP', 'SPECIAL_TEAMS', 'MENTOR');

-- CreateEnum
CREATE TYPE "FootballRecordEnum" AS ENUM ('CareerPassingYards', 'CareerPassingTouchdowns', 'SingleSeasonPassingYards', 'SingleSeasonPassingTouchdowns', 'SingleGamePassingYards', 'SingleGamePassingTouchdowns', 'CareerRushingYards', 'CareerRushingTouchdowns', 'SingleSeasonRushingYards', 'SingleSeasonRushingTouchdowns', 'SingleGameRushingYards', 'SingleGameRushingTouchdowns', 'CareerReceivingYards', 'CareerReceivingTouchdowns', 'SingleSeasonReceivingYards', 'SingleSeasonReceivingTouchdowns', 'SingleGameReceivingYards', 'SingleGameReceivingTouchdowns', 'CareerSacks', 'CareerInterceptions', 'SingleSeasonSacks', 'SingleSeasonInterceptions', 'SingleGameSacks', 'SingleGameInterceptions', 'LongestFieldGoal', 'MostFieldGoalsSingleGame', 'MostFieldGoalsSeason', 'CareerFieldGoalsMade', 'LongestKickReturn', 'LongestPuntReturn', 'MostKickReturnTouchdowns', 'MostPuntReturnTouchdowns', 'LongestWinStreak', 'MostWinsSeason', 'MostPointsScoredSeason', 'MostPointsScoredGame', 'MostGamesPlayed', 'MostProBowls', 'MostMVPs', 'MostChampionships');

-- CreateEnum
CREATE TYPE "InjuryTypeEnum" AS ENUM ('Concussion', 'NeckStrain', 'Stinger', 'ShoulderDislocation', 'RotatorCuffTear', 'BrokenCollarbone', 'ACJointSprain', 'ElbowSprain', 'BrokenArm', 'WristFracture', 'DislocatedFinger', 'BrokenFinger', 'ThumbSprain', 'RibFracture', 'AbdominalStrain', 'Hernia', 'LowerBackStrain', 'HipPointer', 'GroinStrain', 'HamstringStrain', 'QuadStrain', 'KneeSprain', 'ACLTear', 'MCLTear', 'LCLTear', 'PCLTear', 'MeniscusTear', 'PatellarTendinitis', 'AnkleSprain', 'HighAnkleSprain', 'AchillesTear', 'TurfToe', 'BrokenFoot', 'ToeFracture', 'Contusion', 'Cramping', 'Fatigue', 'Dehydration');

-- CreateEnum
CREATE TYPE "OffFieldConcernTypeEnum" AS ENUM ('LegalTrouble', 'BehavioralIssues', 'CommitmentConcerns', 'MediaDistractions', 'LockerRoomTension', 'CoachingConflict', 'SubstanceIssues', 'MotivationConcerns', 'ConditioningIssues', 'ReputationRisk', 'ContractDispute', 'AgentConflict', 'MaturityQuestions', 'FocusConcerns');

-- CreateEnum
CREATE TYPE "PlayerPersonalityTraitEnum" AS ENUM ('Leader', 'HardWorker', 'Lazy', 'Coachable', 'Uncoachable', 'Perfectionist', 'Slacker', 'Mentor', 'Respected', 'Delegator', 'Micromanager', 'Punctual', 'ChronicallyLate', 'Humble', 'Arrogant', 'Diva', 'TeamPlayer', 'Selfish', 'FameDriven', 'MoneyDriven', 'GloryHunter', 'Loyal', 'Disloyal', 'Entitled', 'SelfMotivated', 'NeedsValidation', 'PeoplePleaser', 'ClutchPerformer', 'Choker', 'Inconsistent', 'GameChanger', 'Dependable', 'MomentumPlayer', 'ConfidenceDriven', 'PressureResistant', 'Overthinks', 'GameManager', 'Disruptive', 'LockerRoomCancer', 'Mediator', 'Comedian', 'SilentProfessional', 'DramaSeeker', 'TeamDad', 'Bully', 'Instigator', 'Unifier', 'PartyAnimal', 'CleanLiving', 'RuleFollower', 'RuleBreaker', 'Focused', 'Distracted', 'OffFieldIssues', 'MediaTrained', 'Reckless', 'StraightEdge', 'WorkLifeBalanced', 'Overworked', 'NightOwl', 'EarlyRiser', 'HighFootballIQ', 'LowFootballIQ', 'FilmJunkie', 'Unprepared', 'Studious', 'Forgetful', 'SystemThinker', 'Instinctive', 'VisualLearner', 'NeedsRepetition', 'InjuryProne', 'Durable', 'SlowStarter', 'HotStarter', 'AlwaysWarmedUp', 'StrugglesWithConditioning', 'BodyLanguageProblem', 'VocalMotivator', 'FanFavorite', 'MediaDarling', 'MediaNightmare', 'Marketable', 'Forgettable', 'SocialMediaSavvy', 'BrandBuilder', 'AntiMedia', 'ReluctantStar', 'Flashy', 'WantsChampionships', 'WantsStats', 'WantsLegacy', 'RingChaser', 'CareerFocused', 'FamilyFocused', 'PassionForGame', 'WantsToCoach', 'WantsOut', 'LookingForNextContract', 'Resilient', 'Moody', 'Calm', 'ShortTempered', 'Anxious', 'Optimist', 'Pessimist', 'Adaptable', 'SystemDependent', 'ThrivesInChaos', 'NeedsStructure');

-- CreateEnum
CREATE TYPE "PlayerEventEnum" AS ENUM ('BirthOfChild', 'Married', 'CharityRecognition', 'PersonalMilestone', 'MediaPraise', 'InjuryRecovery', 'MediaDaySuccess', 'RevengeGameSuccess', 'NewAgent', 'RoleChange', 'LegalTrouble', 'FamilyIllness', 'PersonalLoss', 'MediaScandal', 'MediaCriticism', 'Suspension', 'ContractHoldout', 'TradeRequest', 'OffFieldIncident', 'DraftedHigh', 'BreakoutSeason', 'WonAward', 'AllProSelection', 'MVP', 'ProBowl', 'SuperBowlWin', 'RecordBroken', 'ContractExtension', 'BigContractSigning', 'PlayerOfTheWeek', 'PlayerOfTheMonth', 'BigGamePerformance', 'NewCareerHigh', 'NewTeamConnection', 'ContractYear', 'ApproachingFreeAgency', 'ApproachingRetirement', 'Traded', 'Benched', 'Injured', 'MajorInjury', 'MinorInjury', 'Released', 'CutFromTeam', 'LostStartingJob', 'ContractDispute', 'DroppedInDraft', 'TeamChampionship', 'CoachPraise', 'NewQBConnection', 'TeamChemistry', 'TrainingCampSuccess', 'NewTeamAcquisition', 'TeamPlayoffRun', 'TrainingCampBuzz', 'TrainingCampBattle', 'StadiumRenovation', 'NewTeamFacilities', 'TrainingCampStart', 'TeamCollapse', 'CoachFired', 'CoachingChange', 'LockerRoomDrama', 'MissedPlayoffs', 'TeammateDeparture', 'TradeRumors', 'LostPlayoffGame', 'LostSuperBowl', 'TeamRebuilding', 'TeamRelocation', 'TeamStruggles');

-- CreateEnum
CREATE TYPE "DivisionEnum" AS ENUM ('AFC_EAST', 'AFC_NORTH', 'AFC_SOUTH', 'AFC_WEST', 'NFC_EAST', 'NFC_NORTH', 'NFC_SOUTH', 'NFC_WEST');

-- CreateEnum
CREATE TYPE "ConferenceEnum" AS ENUM ('AFC', 'NFC');

-- CreateEnum
CREATE TYPE "OffensiveSchemeEnum" AS ENUM ('WEST_COAST', 'AIR_RAID', 'PRO_STYLE', 'WILDCAT', 'SPREAD', 'POWER_RUN', 'ZONE_RUN', 'BALANCED', 'PISTOL', 'RUN_AND_SHOOT');

-- CreateEnum
CREATE TYPE "DefensiveSchemeEnum" AS ENUM ('FOUR_THREE', 'THREE_FOUR', 'HYBRID', 'NICKEL_BASED', 'COVER_2', 'COVER_3', 'MULTIPLE', 'MAN_BLITZ_HEAVY', 'ZONE_HEAVY');

-- CreateEnum
CREATE TYPE "PlayerPositionEnum" AS ENUM ('QB', 'RB', 'FB', 'WR', 'TE', 'LT', 'LG', 'C', 'RG', 'RT', 'DE', 'DT', 'NT', 'EDGE', 'LB', 'MLB', 'OLB', 'ILB', 'CB', 'FS', 'SS', 'K', 'P', 'LS', 'KR', 'PR');

-- CreateEnum
CREATE TYPE "FinancialHealthEnum" AS ENUM ('EXCELLENT', 'GOOD', 'MODERATE', 'POOR');

-- CreateEnum
CREATE TYPE "ContractNegotiationStatusEnum" AS ENUM ('NotStarted', 'InProgress', 'OfferMade', 'OfferRejected', 'OfferAccepted', 'CounterOffer', 'Completed', 'Withdrawn', 'Expired', 'Stalled', 'Failed');

-- CreateEnum
CREATE TYPE "OptionType" AS ENUM ('TEAM', 'PLAYER');

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "college" TEXT NOT NULL,
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

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "logoUrl" TEXT,
    "division" "DivisionEnum" NOT NULL,
    "conference" "ConferenceEnum" NOT NULL,
    "overallRating" INTEGER NOT NULL,
    "offensiveScheme" "OffensiveSchemeEnum" NOT NULL,
    "defensiveScheme" "DefensiveSchemeEnum" NOT NULL,
    "teamNeeds" "PlayerPositionEnum"[],
    "wins" INTEGER NOT NULL,
    "losses" INTEGER NOT NULL,
    "ties" INTEGER NOT NULL,
    "currentStreak" INTEGER NOT NULL,
    "longestWinningStreak" INTEGER NOT NULL,
    "playoffAppearances" INTEGER NOT NULL,
    "superBowlAppearances" INTEGER NOT NULL,
    "championships" INTEGER NOT NULL,
    "capSpace" INTEGER NOT NULL,
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

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerContract" (
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

    CONSTRAINT "PlayerContract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractBonus" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "signingBonus" INTEGER,
    "rosterBonus" INTEGER,
    "workoutBonus" INTEGER,
    "incentiveBonus" INTEGER,

    CONSTRAINT "ContractBonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalaryByYear" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "SalaryByYear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CapHitByYear" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "CapHitByYear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeadCapByYear" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "DeadCapByYear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptOutYear" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "OptOutYear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestructureEvent" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "year" INTEGER,
    "date" TIMESTAMP(3),
    "amountConvertedToBonus" INTEGER,
    "newCapHit" INTEGER,
    "newDeadCap" INTEGER,

    CONSTRAINT "RestructureEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractClause" (
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

    CONSTRAINT "ContractClause_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerformanceBonus" (
    "id" TEXT NOT NULL,
    "clauseId" TEXT NOT NULL,
    "proBowl" INTEGER,
    "allPro" INTEGER,
    "mvp" INTEGER,
    "superBowlMVP" INTEGER,
    "playoffAppearance" INTEGER,

    CONSTRAINT "PerformanceBonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StatMilestone" (
    "id" TEXT NOT NULL,
    "performanceId" TEXT NOT NULL,
    "yards" INTEGER,
    "touchdowns" INTEGER,
    "sacks" INTEGER,
    "interceptions" INTEGER,

    CONSTRAINT "StatMilestone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RosterBonus" (
    "id" TEXT NOT NULL,
    "clauseId" TEXT NOT NULL,
    "amount" INTEGER,
    "perGame" BOOLEAN,

    CONSTRAINT "RosterBonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutBonus" (
    "id" TEXT NOT NULL,
    "clauseId" TEXT NOT NULL,
    "amount" INTEGER,
    "minWorkouts" INTEGER,

    CONSTRAINT "WorkoutBonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptionBonus" (
    "id" TEXT NOT NULL,
    "clauseId" TEXT NOT NULL,
    "year" INTEGER,
    "amount" INTEGER,
    "type" "OptionType",

    CONSTRAINT "OptionBonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agent" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "agencyName" TEXT,
    "reputation" INTEGER,
    "yearsOfExperience" INTEGER,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
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

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stat" (
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

    CONSTRAINT "Stat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractDesires" (
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

    CONSTRAINT "ContractDesires_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_currentContractId_key" ON "Player"("currentContractId");

-- CreateIndex
CREATE UNIQUE INDEX "Player_ratingsId_key" ON "Player"("ratingsId");

-- CreateIndex
CREATE UNIQUE INDEX "Player_statsId_key" ON "Player"("statsId");

-- CreateIndex
CREATE UNIQUE INDEX "Player_contractDesiresId_key" ON "Player"("contractDesiresId");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team_nickname_key" ON "Team"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "Team_location_key" ON "Team"("location");

-- CreateIndex
CREATE UNIQUE INDEX "Team_abbreviation_key" ON "Team"("abbreviation");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerContract_playerId_key" ON "PlayerContract"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "PlayerContract_teamId_key" ON "PlayerContract"("teamId");

-- CreateIndex
CREATE UNIQUE INDEX "DeadCapByYear_contractId_key" ON "DeadCapByYear"("contractId");

-- CreateIndex
CREATE UNIQUE INDEX "OptOutYear_contractId_key" ON "OptOutYear"("contractId");

-- CreateIndex
CREATE UNIQUE INDEX "RestructureEvent_contractId_key" ON "RestructureEvent"("contractId");

-- CreateIndex
CREATE UNIQUE INDEX "ContractClause_contractId_key" ON "ContractClause"("contractId");

-- CreateIndex
CREATE UNIQUE INDEX "ContractClause_performanceBonusId_key" ON "ContractClause"("performanceBonusId");

-- CreateIndex
CREATE UNIQUE INDEX "ContractClause_rosterBonusId_key" ON "ContractClause"("rosterBonusId");

-- CreateIndex
CREATE UNIQUE INDEX "ContractClause_workoutBonusId_key" ON "ContractClause"("workoutBonusId");

-- CreateIndex
CREATE UNIQUE INDEX "ContractClause_optionBonusId_key" ON "ContractClause"("optionBonusId");

-- CreateIndex
CREATE UNIQUE INDEX "PerformanceBonus_clauseId_key" ON "PerformanceBonus"("clauseId");

-- CreateIndex
CREATE UNIQUE INDEX "StatMilestone_performanceId_key" ON "StatMilestone"("performanceId");

-- CreateIndex
CREATE UNIQUE INDEX "RosterBonus_clauseId_key" ON "RosterBonus"("clauseId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutBonus_clauseId_key" ON "WorkoutBonus"("clauseId");

-- CreateIndex
CREATE UNIQUE INDEX "OptionBonus_clauseId_key" ON "OptionBonus"("clauseId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_playerId_key" ON "Rating"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Stat_playerId_key" ON "Stat"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "Stat_playerId_season_key" ON "Stat"("playerId", "season");

-- CreateIndex
CREATE UNIQUE INDEX "ContractDesires_playerId_key" ON "ContractDesires"("playerId");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_practiceSquadTeamId_fkey" FOREIGN KEY ("practiceSquadTeamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_injuredReserveTeamId_fkey" FOREIGN KEY ("injuredReserveTeamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_suspendedListTeamId_fkey" FOREIGN KEY ("suspendedListTeamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_ratingsId_fkey" FOREIGN KEY ("ratingsId") REFERENCES "Rating"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_statsId_fkey" FOREIGN KEY ("statsId") REFERENCES "Stat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_contractDesiresId_fkey" FOREIGN KEY ("contractDesiresId") REFERENCES "ContractDesires"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerContract" ADD CONSTRAINT "PlayerContract_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlayerContract" ADD CONSTRAINT "PlayerContract_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractBonus" ADD CONSTRAINT "ContractBonus_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "PlayerContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalaryByYear" ADD CONSTRAINT "SalaryByYear_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "PlayerContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CapHitByYear" ADD CONSTRAINT "CapHitByYear_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "PlayerContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeadCapByYear" ADD CONSTRAINT "DeadCapByYear_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "PlayerContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptOutYear" ADD CONSTRAINT "OptOutYear_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "PlayerContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestructureEvent" ADD CONSTRAINT "RestructureEvent_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "PlayerContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractClause" ADD CONSTRAINT "ContractClause_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "PlayerContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerformanceBonus" ADD CONSTRAINT "PerformanceBonus_clauseId_fkey" FOREIGN KEY ("clauseId") REFERENCES "ContractClause"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StatMilestone" ADD CONSTRAINT "StatMilestone_performanceId_fkey" FOREIGN KEY ("performanceId") REFERENCES "PerformanceBonus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RosterBonus" ADD CONSTRAINT "RosterBonus_clauseId_fkey" FOREIGN KEY ("clauseId") REFERENCES "ContractClause"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutBonus" ADD CONSTRAINT "WorkoutBonus_clauseId_fkey" FOREIGN KEY ("clauseId") REFERENCES "ContractClause"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionBonus" ADD CONSTRAINT "OptionBonus_clauseId_fkey" FOREIGN KEY ("clauseId") REFERENCES "ContractClause"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
