import {
  ConferenceEnum,
  DefensiveSchemeEnum,
  DivisionEnum,
  OffensiveSchemeEnum,
} from "../enums";
import { Player } from "./player";
import { Position } from "./roster";
import { TeamStats } from "./teamStats";

export interface Team {
  id: string; // unique team identifier
  name: string;
  nickname: string;
  location: string;
  abbreviation: string; // e.g. "NYJ"
  logoUrl?: string;

  // League Info
  division: DivisionEnum;
  conference: ConferenceEnum;

  // Coaching Staff
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
  teamOwnerId?: string;
  teamPresidentId?: string;
  generalManagerId?: string;
  assistantGeneralManagerId?: string;
  mediaRelationsManagerId?: string;
  capSpecialistId?: string;

  // Scouting Staff
  directorOfPlayerPersonnelId?: string;
  directorOfProScoutingId?: string;
  directorOfCollegeScoutingId?: string;
  proScoutIds?: string[];
  nationalScoutId?: string;
  regionalScoutIds?: string[];
  combineScoutId?: string;

  // Medical Staff
  headAthleticTrainerId?: string;
  assistantAthleticTrainerIds?: string[];
  teamDoctorId?: string;
  physicalTherapistId?: string;
  sportsPsychologistId?: string;
  nutritionistId?: string;

  // Analytics Staff
  dataAnalystId?: string;
  gameAnalystId?: string;
  videoCoordinatorId?: string;

  // Facility Staff
  equipmentManagerId?: string;
  facilityManagerId?: string;
  groundskeeperId?: string;
  securityManagerId?: string;

  // Roster
  roster: Player[];
  practiceSquad: Player[];
  injuredReserve: Player[];
  suspendedList: Player[];

  // Team Attributes
  overallRating: number; // aggregate talent
  offensiveScheme: OffensiveSchemeEnum;
  defensiveScheme: DefensiveSchemeEnum;
  teamNeeds: Position[]; // e.g. ["WR", "CB", "OL"]

  // Performance
  seasonStats: TeamStats;
  record: [number, number, number]; // [wins, losses, ties]
  currentStreak: number; // e.g. 3 for a 3-game winning
  longestWinningStreak: number; // e.g. 5
  playoffAppearances: number;
  superBowlAppearances: number;
  championships: number;

  // Financials
  capSpace: number;
  capLimit: number;
  totalPayroll: number;
  financialHealth: "Excellent" | "Good" | "Moderate" | "Poor";

  // History
  yearFounded: number;
  allTimeWins: number;
  allTimeLosses: number;
  allTimeTies: number;
  retiredNumbers: number[];

  // Misc
  fanBaseSize: number;
  prestige: number; // influences free agency appeal
  rivalTeams: string[]; // list of team IDs
}
