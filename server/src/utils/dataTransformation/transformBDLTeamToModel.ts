const { v4: uuidv4 } = require("uuid");

import { Team } from "@shared/models";
import {
  divisionMap,
  teamBrandingMap,
  TeamFanBaseSizeMap,
  TeamPrestigeMap,
  retiredNumbersMap,
  TeamRivalMap,
  TeamSchemeMap,
  teamHistoriesMap,
} from "@shared/dataMaps/teamMaps";
import { FinancialHealthEnum, NFLStadium, StrategyEnum } from "@shared/enums";
import { BDLTeam } from "src/third_party_apis/Ball_Dont_Lie/models/bdl_team";

export function transformBDLTeamToModel(apiTeam: BDLTeam): Team {
  const transformedTeam: Team = {
    id: "team-" + uuidv4(),
    name: apiTeam.full_name,
    nickname: apiTeam.name,
    location: apiTeam.location,
    abbreviation: apiTeam.abbreviation,
    stadium: NFLStadium[apiTeam.abbreviation as keyof typeof NFLStadium],
    division: divisionMap[apiTeam.conference][apiTeam.division.toUpperCase()],
    conference: apiTeam.conference,
    colorPrimary: teamBrandingMap[apiTeam.abbreviation].colorPrimary,
    colorSecondary: teamBrandingMap[apiTeam.abbreviation].colorSecondary,
    colorTertiary: teamBrandingMap[apiTeam.abbreviation].colorTertiary,
    logoUrl: teamBrandingMap[apiTeam.abbreviation].logoUrl,
    players: [],
    practiceSquad: [],
    injuredReserve: [],
    suspendedList: [],
    overallRating: 0,
    offensiveScheme: TeamSchemeMap[apiTeam.abbreviation].offensiveScheme,
    defensiveScheme: TeamSchemeMap[apiTeam.abbreviation].defensiveScheme,
    teamNeeds: [],
    wins: 0,
    losses: 0,
    ties: 0,
    currentStreak: 0,
    longestWinningStreak: 0,
    playoffAppearances: teamHistoriesMap[apiTeam.abbreviation]?.playoffAppearances || 0,
    superBowlAppearances: teamHistoriesMap[apiTeam.abbreviation]?.superBowlAppearances || 0,
    championships: teamHistoriesMap[apiTeam.abbreviation]?.championships || 0,
    financialHealth: FinancialHealthEnum.MODERATE,
    strategy: StrategyEnum.Contend,
    capLimit: 200000000, // default cap limit, can be adjusted later
    totalPayroll: 0, // will be calculated based on player contracts
    playerContracts: [],
    yearFounded: teamHistoriesMap[apiTeam.abbreviation]?.yearFounded || 0, // placeholder, can be updated with historical data
    allTimeWins: teamHistoriesMap[apiTeam.abbreviation]?.allTimeWins || 0,
    allTimeLosses: teamHistoriesMap[apiTeam.abbreviation]?.allTimeLosses || 0,
    allTimeTies: teamHistoriesMap[apiTeam.abbreviation]?.allTimeTies || 0,
    retiredNumbers: retiredNumbersMap[apiTeam.abbreviation],
    fanBaseSize: TeamFanBaseSizeMap[apiTeam.abbreviation],
    prestige: TeamPrestigeMap[apiTeam.abbreviation],
    rivalTeams: TeamRivalMap[apiTeam.abbreviation],
  };

  return transformedTeam;
}
