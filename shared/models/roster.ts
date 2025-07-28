export interface Roster {
  id?: string; // Unique identifier for the roster
  teamId: string;
  season: number;
  players: RosterPlayer[];
  depthChart?: DepthChart;
  practiceSquad?: string[]; // playerIds
  injuredReserve?: string[]; // playerIds
  suspendedList?: string[]; // playerIds
}

export interface RosterPlayer {
  playerId: string;
  jerseyNumber?: number;
  position: Position;
  isStarter?: boolean;
  isCaptain?: boolean;
  contractId?: string;
  acquiredVia?: AcquisitionMethod;
}

export enum AcquisitionMethod {
  Drafted = "Drafted",
  FreeAgency = "FreeAgency",
  Trade = "Trade",
  Waivers = "Waivers",
  PracticeSquad = "PracticeSquad",
  UndraftedFreeAgent = "UndraftedFreeAgent",
  Retained = "Retained", // From prior year
}

export enum Position {
  QB = "Quarterback",
  RB = "Running Back",
  FB = "Fullback",
  WR = "Wide Receiver",
  TE = "Tight End",
  LOT = "Left Offensive Tackle",
  LOG = "Left Offensive Guard",
  C = "Center",
  ROG = "Right Offensive Guard",
  ROT = "Right Offensive Tackle",
  LDE = "Left Defensive End",
  RDE = "Right Defensive End",
  DT1 = "Defensive Tackle",
  DT2 = "Defensive Tackle 2",
  WILL = "Weakside Linebacker",
  MIKE = "Middle Linebacker",
  SAM = "Strongside Linebacker",
  CB1 = "Cornerback 1",
  CB2 = "Cornerback 2",
  FS = "Free Safety",
  SS = "Strong Safety",
  SLOT = "Slot Cornerback",
  THIRDRB = "Third Down Running Back",
  NT = "Nose Tackle",
  P = "Punter",
  K = "Kicker",
  LS = "Long Snapper",
  KR = "Kick Returner",
  PR = "Punt Returner",
  HOLDER = "Holder",
  GUNNER = "Gunner",
}

export interface DepthChart {
  offense: Record<OffensivePosition, string[]>; // playerIds
  defense: Record<DefensivePosition, string[]>;
  specialTeams: Record<SpecialTeamsPosition, string[]>;
}

export enum OffensivePosition {
  QB = "Quarterback",
  RB = "Running Back",
  THIRDRB = "Third Down Running Back",
  FB = "Fullback",
  WR = "Wide Receiver",
  TE = "Tight End",
  LOT = "Left Offensive Tackle",
  LOG = "Left Offensive Guard",
  C = "Center",
  ROG = "Right Offensive Guard",
  ROT = "Right Offensive Tackle",
}

export enum DefensivePosition {
  LDE = "Left Defensive End",
  RDE = "Right Defensive End",
  DT1 = "Defensive Tackle",
  DT2 = "Defensive Tackle 2",
  NT = "Nose Tackle",
  WILL = "Weakside Linebacker",
  MIKE = "Middle Linebacker",
  SAM = "Strongside Linebacker",
  CB1 = "Cornerback 1",
  CB2 = "Cornerback 2",
  SLOT = "Slot Cornerback",
  FS = "Free Safety",
  SS = "Strong Safety",
}

export enum SpecialTeamsPosition {
  P = "Punter",
  K = "Kicker",
  LS = "Long Snapper",
  KR = "Kick Returner",
  PR = "Punt Returner",
  HOLDER = "Holder",
  GUNNER = "Gunner",
}
