import { Player } from "../../../shared/models/player";
export enum PlayerEventEnum {
  // Personal - Positive
  BirthOfChild = "BirthOfChild",
  Married = "Married",
  CharityRecognition = "CharityRecognition",
  PersonalMilestone = "PersonalMilestone",
  MediaPraise = "MediaPraise",
  InjuryRecovery = "InjuryRecovery",
  MediaDaySuccess = "MediaDaySuccess",
  RevengeGameSuccess = "RevengeGameSuccess",

  // Personal - Neutral
  NewAgent = "NewAgent",
  RoleChange = "RoleChange",

  // Personal - Negative
  LegalTrouble = "LegalTrouble",
  FamilyIllness = "FamilyIllness",
  PersonalLoss = "PersonalLoss",
  MediaScandal = "MediaScandal",
  MediaCriticism = "MediaCriticism",
  Suspension = "Suspension",
  ContractHoldout = "ContractHoldout",
  TradeRequest = "TradeRequest",
  OffFieldIncident = "OffFieldIncident",

  // Career - Positive
  DraftedHigh = "DraftedHigh",
  BreakoutSeason = "BreakoutSeason",
  WonAward = "WonAward",
  AllProSelection = "AllProSelection",
  MVP = "MVP",
  ProBowl = "ProBowl",
  SuperBowlWin = "SuperBowlWin",
  RecordBroken = "RecordBroken",
  ContractExtension = "ContractExtension",
  BigContractSigning = "BigContractSigning",
  PlayerOfTheWeek = "PlayerOfTheWeek",
  PlayerOfTheMonth = "PlayerOfTheMonth",
  BigGamePerformance = "BigGamePerformance",
  NewCareerHigh = "NewCareerHigh",
  NewTeamConnection = "NewTeamConnection",

  // Career - Neutral
  ContractYear = "ContractYear",
  ApproachingFreeAgency = "ApproachingFreeAgency",
  ApproachingRetirement = "ApproachingRetirement",
  Traded = "Traded",

  // Career - Negative
  Benched = "Benched",
  Injured = "Injured",
  MajorInjury = "MajorInjury",
  MinorInjury = "MinorInjury",
  Released = "Released",
  CutFromTeam = "CutFromTeam",
  LostStartingJob = "LostStartingJob",
  ContractDispute = "ContractDispute",
  DroppedInDraft = "DroppedInDraft",

  // Team - Positive
  TeamChampionship = "TeamChampionship",
  CoachPraise = "CoachPraise",
  NewQBConnection = "NewQBConnection",
  TeamChemistry = "TeamChemistry",
  TrainingCampSuccess = "TrainingCampSuccess",
  NewTeamAcquisition = "NewTeamAcquisition",
  TeamPlayoffRun = "TeamPlayoffRun",

  // Team - Neutral
  TrainingCampBuzz = "TrainingCampBuzz",
  TrainingCampBattle = "TrainingCampBattle",
  StadiumRenovation = "StadiumRenovation",
  NewTeamFacilities = "NewTeamFacilities",
  TrainingCampStart = "TrainingCampStart",

  // Team - Negative
  TeamCollapse = "TeamCollapse",
  CoachFired = "CoachFired",
  CoachingChange = "CoachingChange",
  LockerRoomDrama = "LockerRoomDrama",
  MissedPlayoffs = "MissedPlayoffs",
  TeammateDeparture = "TeammateDeparture",
  TradeRumors = "TradeRumors",
  LostPlayoffGame = "LostPlayoffGame",
  LostSuperBowl = "LostSuperBowl",
  TeamRebuilding = "TeamRebuilding",
  TeamRelocation = "TeamRelocation",
  TeamStruggles = "TeamStruggles",
}
