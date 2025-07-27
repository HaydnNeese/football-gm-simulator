import { InjurySeverity, InjuryType } from "../enums";

export interface InjuryMetadata {
  severity: InjurySeverity;
  recoveryWeeksRange: [number, number]; // e.g. [2, 4] = 2 to 4 weeks
}

export const InjuryDetails: Record<InjuryType, InjuryMetadata> = {
  // Head
  [InjuryType.Concussion]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [1, 4],
  },
  [InjuryType.NeckStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [1, 3],
  },
  [InjuryType.Stinger]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 2],
  },

  // Upper Body
  [InjuryType.ShoulderDislocation]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [4, 8],
  },
  [InjuryType.RotatorCuffTear]: {
    severity: InjurySeverity.CareerThreatening,
    recoveryWeeksRange: [12, 52],
  },
  [InjuryType.BrokenCollarbone]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [6, 10],
  },
  [InjuryType.ACJointSprain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryType.ElbowSprain]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 3],
  },
  [InjuryType.BrokenArm]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [8, 12],
  },
  [InjuryType.WristFracture]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [4, 8],
  },
  [InjuryType.DislocatedFinger]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 2],
  },
  [InjuryType.BrokenFinger]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryType.ThumbSprain]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 2],
  },

  // Core
  [InjuryType.RibFracture]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 6],
  },
  [InjuryType.AbdominalStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryType.Hernia]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [6, 12],
  },
  [InjuryType.LowerBackStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },

  // Lower Body
  [InjuryType.HipPointer]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 2],
  },
  [InjuryType.GroinStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryType.HamstringStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 6],
  },
  [InjuryType.QuadStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryType.KneeSprain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 6],
  },
  [InjuryType.ACLTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [28, 52],
  },
  [InjuryType.MCLTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [8, 24],
  },
  [InjuryType.LCLTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [8, 24],
  },
  [InjuryType.PCLTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [8, 24],
  },
  [InjuryType.MeniscusTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [6, 12],
  },
  [InjuryType.PatellarTendinitis]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 6],
  },
  [InjuryType.AnkleSprain]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 2],
  },
  [InjuryType.HighAnkleSprain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [3, 6],
  },
  [InjuryType.AchillesTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [16, 52],
  },
  [InjuryType.TurfToe]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryType.BrokenFoot]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [6, 10],
  },
  [InjuryType.ToeFracture]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },

  // General
  [InjuryType.Contusion]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [0, 2],
  },
  [InjuryType.Cramping]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [0, 1],
  },
  [InjuryType.Fatigue]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [0, 1],
  },
  [InjuryType.Dehydration]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [0, 1],
  },
};
