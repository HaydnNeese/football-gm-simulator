import { InjurySeverity, InjuryTypeEnum } from "../enums";

export interface InjuryMetadata {
  severity: InjurySeverity;
  recoveryWeeksRange: [number, number]; // e.g. [2, 4] = 2 to 4 weeks
}

export const InjuryDetails: Record<InjuryTypeEnum, InjuryMetadata> = {
  // Head
  [InjuryTypeEnum.Concussion]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [1, 4],
  },
  [InjuryTypeEnum.NeckStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [1, 3],
  },
  [InjuryTypeEnum.Stinger]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 2],
  },

  // Upper Body
  [InjuryTypeEnum.ShoulderDislocation]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [4, 8],
  },
  [InjuryTypeEnum.RotatorCuffTear]: {
    severity: InjurySeverity.CareerThreatening,
    recoveryWeeksRange: [12, 52],
  },
  [InjuryTypeEnum.BrokenCollarbone]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [6, 10],
  },
  [InjuryTypeEnum.ACJointSprain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryTypeEnum.ElbowSprain]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 3],
  },
  [InjuryTypeEnum.BrokenArm]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [8, 12],
  },
  [InjuryTypeEnum.WristFracture]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [4, 8],
  },
  [InjuryTypeEnum.DislocatedFinger]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 2],
  },
  [InjuryTypeEnum.BrokenFinger]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryTypeEnum.ThumbSprain]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 2],
  },

  // Core
  [InjuryTypeEnum.RibFracture]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 6],
  },
  [InjuryTypeEnum.AbdominalStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryTypeEnum.Hernia]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [6, 12],
  },
  [InjuryTypeEnum.LowerBackStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },

  // Lower Body
  [InjuryTypeEnum.HipPointer]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 2],
  },
  [InjuryTypeEnum.GroinStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryTypeEnum.HamstringStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 6],
  },
  [InjuryTypeEnum.QuadStrain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryTypeEnum.KneeSprain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 6],
  },
  [InjuryTypeEnum.ACLTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [28, 52],
  },
  [InjuryTypeEnum.MCLTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [8, 24],
  },
  [InjuryTypeEnum.LCLTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [8, 24],
  },
  [InjuryTypeEnum.PCLTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [8, 24],
  },
  [InjuryTypeEnum.MeniscusTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [6, 12],
  },
  [InjuryTypeEnum.PatellarTendinitis]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 6],
  },
  [InjuryTypeEnum.AnkleSprain]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [1, 2],
  },
  [InjuryTypeEnum.HighAnkleSprain]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [3, 6],
  },
  [InjuryTypeEnum.AchillesTear]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [16, 52],
  },
  [InjuryTypeEnum.TurfToe]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },
  [InjuryTypeEnum.BrokenFoot]: {
    severity: InjurySeverity.Severe,
    recoveryWeeksRange: [6, 10],
  },
  [InjuryTypeEnum.ToeFracture]: {
    severity: InjurySeverity.Moderate,
    recoveryWeeksRange: [2, 4],
  },

  // General
  [InjuryTypeEnum.Contusion]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [0, 2],
  },
  [InjuryTypeEnum.Cramping]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [0, 1],
  },
  [InjuryTypeEnum.Fatigue]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [0, 1],
  },
  [InjuryTypeEnum.Dehydration]: {
    severity: InjurySeverity.Minor,
    recoveryWeeksRange: [0, 1],
  },
};
