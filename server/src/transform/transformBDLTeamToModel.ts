import { Team } from "../../../shared/models";
import {
  divisionMap,
  teamBrandingMap,
  TeamFanBaseSizeMap,
  TeamPrestigeMap,
  retiredNumbersMap,
  TeamRivalMap,
  TeamSchemeMap,
  teamHistoriesMap,
} from "../../../shared/dataMaps/teamMaps";
import { FinancialHealthEnum, NFLStadium, StrategyEnum } from "../../../shared/enums";
import { BDLTeam } from "../third_party_apis/Ball_Dont_Lie/models/bdl_team";

export function transformBDLTeamToModel(apiTeam: BDLTeam): Team {
  const transformedTeam: Team = {
    name: apiTeam.full_name,
    nickname: apiTeam.name,
    location: apiTeam.location,
    abbreviation: apiTeam.abbreviation,
    stadium: NFLStadium[apiTeam.abbreviation as keyof typeof NFLStadium],
    division: divisionMap[apiTeam.conference as keyof typeof divisionMap][apiTeam.division.toUpperCase()],
    conference: apiTeam.conference,
    colorPrimary: teamBrandingMap[apiTeam.abbreviation].colorPrimary,
    colorSecondary: teamBrandingMap[apiTeam.abbreviation].colorSecondary,
    colorTertiary: teamBrandingMap[apiTeam.abbreviation].colorTertiary,
    logoUrl: teamBrandingMap[apiTeam.abbreviation].logoUrl,
    overallRating: 0,
    offensiveScheme: TeamSchemeMap[apiTeam.abbreviation].offensiveScheme,
    defensiveScheme: TeamSchemeMap[apiTeam.abbreviation].defensiveScheme,
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
    yearFounded: teamHistoriesMap[apiTeam.abbreviation]?.yearFounded || 0, // placeholder, can be updated with historical data
    allTimeWins: teamHistoriesMap[apiTeam.abbreviation]?.allTimeWins || 0,
    allTimeLosses: teamHistoriesMap[apiTeam.abbreviation]?.allTimeLosses || 0,
    allTimeTies: teamHistoriesMap[apiTeam.abbreviation]?.allTimeTies || 0,
    retiredNumbers: retiredNumbersMap[apiTeam.abbreviation],
    fanBaseSize: TeamFanBaseSizeMap[apiTeam.abbreviation],
    prestige: TeamPrestigeMap[apiTeam.abbreviation],
    rivalTeams: TeamRivalMap[apiTeam.abbreviation],
    revenue: 0, // placeholder for annual revenue
    expenses: 0, // placeholder for annual expenses
    attendance: 0, // placeholder for average attendance
    merchandiseSales: 0, // placeholder for annual merchandise sales
    jerseySales: 0, // placeholder for annual jersey sales
    ticketSales: 0, // placeholder for annual ticket sales
    sponsorshipRevenue: 0, // placeholder for annual sponsorship revenue
    tvRevenue: 0, // placeholder for annual TV revenue
    concessionsRevenue: 0, // placeholder for annual concessions revenue
  };

  return transformedTeam;
}
