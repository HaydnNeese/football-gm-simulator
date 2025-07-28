import {
  PlayerPositionEnum,
  PlayerPersonalityTraitEnum,
  OffFieldConcernTypeEnum,
  PlayerRoleEnum,
  FootballRecordEnum,
  InjuryTypeEnum,
  PlayerEventEnum,
} from "../../client/src/enums";

// Define FootballRecord type or import it from its module
export interface Player {
  // --- Identity & Biographical ---
  id?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  college?: string;

  // --- Physical Attributes ---
  heightInInches?: number;
  weightInPounds?: number;

  // --- Team & Role ---
  teamId?: string; // Current team ID
  practiceSquadTeamId?: string; // Current practice squad team ID
  injuredReserveTeamId?: string; // Current injured reserve team ID
  suspendedListTeamId?: string; // Current suspended list team ID
  position?: PlayerPositionEnum;
  expectedRole?: PlayerRoleEnum; // Expected role (e.g., starter, backup)
  actualRole?: PlayerRoleEnum; // Actual role on the team
  isStarter?: boolean;
  isCaptain?: boolean;
  isFreeAgent?: boolean;
  isRetired?: boolean;
  isSuspended?: boolean;
  isPracticeSquad?: boolean;
  isTradeBlock?: boolean;
  offense?: boolean;
  defense?: boolean;
  specialTeams?: boolean;

  // --- Draft & Records ---
  draftYear?: number;
  draftRound?: number;
  isRecordHolder?: boolean;
  recordsHeld?: FootballRecordEnum[];

  // --- Contract & Agent ---
  contractId?: string;
  contractDesiresId?: string;
  contractNegotiationStatus?: string;
  lastContractUpdate?: string;
  agentId?: string;

  // --- Ratings & Stats ---
  ratingsId?: string;
  statsId?: string;
  performanceRating?: number; // 0–100, overall performance rating
  impactRating?: number; // 0–100, overall impact rating
  potential?: number; // 0–100
  experience?: number; // 0–100
  // lastGamePerformance?: {
  //     date?: string;
  //     stats?: PlayerRatings;
  //     impact?: number;
  // };

  // --- Health & Injury ---
  isInjured?: boolean;
  currentInjury?: InjuryTypeEnum;
  injuryHistory?: InjuryTypeEnum[];
  injuryProneness?: boolean;
  expectedReturnFromInjury?: Date;

  // --- Personality & Intangibles ---
  personalityTraits?: PlayerPersonalityTraitEnum[];
  morale?: number; // 0–100
  leadership?: number; // 0–100
  adaptability?: number; // 0–100
  workEthic?: number; // 0–100
  consistency?: number; // 0–100
  clutchFactor?: number; // 0–100
  footballIQ?: number; // 0–100
  popularity?: number; // 0–100

  // --- Training & Development ---
  trainingFocus?: string;
  trainingProgress?: number; // 0–100

  // --- Off-field & Miscellaneous ---
  offFieldConcerns?: OffFieldConcernTypeEnum[];
  pastEvents?: PlayerEventEnum[]; // Array of past events affecting the player
}
