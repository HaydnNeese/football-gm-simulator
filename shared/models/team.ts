import { NFLStadium } from "@shared/enums/NFLStadiums";
import {
  ConferenceEnum,
  DefensiveSchemeEnum,
  DivisionEnum,
  FinancialHealthEnum,
  OffensiveSchemeEnum,
  PlayerPositionEnum,
  StrategyEnum
} from "../enums";
import { Player } from "./player";
import { PlayerContract } from "./playerContract";

export interface Team {
  id: string; // unique team identifier
  name?: string;
  nickname?: string;
  location?: string;
  abbreviation?: string; // e.g. "NYJ"
  stadium?: NFLStadium;
  draftPicks?: string[]; // list of draft pick IDs
  //TODO add draftpicks to database
  //TODO create draftpicks enum

  // League Info
  division?: DivisionEnum;
  conference?: ConferenceEnum;

  // branding
  colorPrimary?: string;
  colorSecondary?: string;
  colorTertiary?: string; // optional third color
  logoUrl?: string;

  // Coaching Staff
  //TODO needs added to database
  headCoachId?: string;
  assistantHeadCoachId?: string;
  offensiveCoordinatorId?: string;
  defensiveCoordinatorId?: string;
  specialTeamsCoordinatorId?: string;
  quarterbacksCoachId?: string;
  runningBacksCoachId?: string;
  wideReceiversCoachId?: string;
  tightEndsCoachId?: string;
  offensiveLineCoachId?: string;
  defensiveLineCoachId?: string;
  linebackersCoachId?: string;
  defensiveBacksCoachId?: string;
  strengthAndConditioningCoachId?: string;
  qualityControlCoachOffenseId?: string;
  qualityControlCoachDefenseId?: string;

  // Front Office Staff
  //TODO needs added to database
  teamOwnerId?: string;
  teamPresidentId?: string;
  generalManagerId?: string;
  assistantGeneralManagerId?: string;
  mediaRelationsManagerId?: string;
  capSpecialistId?: string;

  // Scouting Staff
  //TODO needs added to database
  directorOfPlayerPersonnelId?: string;
  directorOfProScoutingId?: string;
  directorOfCollegeScoutingId?: string;
  proScoutIds?: string[];
  nationalScoutId?: string;
  regionalScoutIds?: string[];
  combineScoutId?: string;

  // Medical Staff
  //TODO needs added to database
  headAthleticTrainerId?: string;
  assistantAthleticTrainerIds?: string[];
  teamDoctorId?: string;
  physicalTherapistId?: string;
  sportsPsychologistId?: string;
  nutritionistId?: string;

  // Analytics Staff
  //TODO needs added to database
  dataAnalystId?: string;
  gameAnalystId?: string;
  videoCoordinatorId?: string;

  // Facility Staff
  //TODO needs added to database
  equipmentManagerId?: string;
  facilityManagerId?: string;
  groundskeeperId?: string;
  securityManagerId?: string;

  // Roster
  players?: Player[];
  practiceSquad?: Player[];
  injuredReserve?: Player[];
  suspendedList?: Player[];

  // Team Attributes
  overallRating?: number; // aggregate talent
  offensiveScheme?: OffensiveSchemeEnum;
  defensiveScheme?: DefensiveSchemeEnum;
  teamNeeds?: PlayerPositionEnum[]; // e.g. ["WR", "CB", "OL"]
  strategy?: StrategyEnum; // e.g. "rebuild", "win now", "contend"

  // Performance
  wins?: number;
  losses?: number;
  ties?: number;
  currentStreak?: number; // e.g. 3 for a 3-game winning
  longestWinningStreak?: number; // e.g. 5
  playoffAppearances?: number;
  superBowlAppearances?: number;
  championships?: number;

  // Financials
  capSpace?: number;
  capLimit?: number;
  totalPayroll?: number;
  financialHealth?: FinancialHealthEnum;
  playerContracts?: PlayerContract[];

  // History
  yearFounded?: number;
  allTimeWins?: number;
  allTimeLosses?: number;
  allTimeTies?: number;
  retiredNumbers?: number[];

  // Misc
  fanBaseSize?: number;
  prestige?: number; // influences free agency appeal
  rivalTeams?: string[]; // list of team IDs
}
