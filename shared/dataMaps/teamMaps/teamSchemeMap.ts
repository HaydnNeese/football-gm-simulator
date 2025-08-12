import { DefensiveSchemeEnum } from "../../enums/DefensiveScheme";
import { OffensiveSchemeEnum } from "../../enums/OffensiveScheme";

export const TeamSchemeMap: {
  [key: string]: {
    offensiveScheme: OffensiveSchemeEnum;
    defensiveScheme: DefensiveSchemeEnum;
  };
} = {
  ARI: {
    offensiveScheme: OffensiveSchemeEnum.AIR_RAID,
    defensiveScheme: DefensiveSchemeEnum.HYBRID,
  },
  ATL: {
    offensiveScheme: OffensiveSchemeEnum.ZONE_RUN,
    defensiveScheme: DefensiveSchemeEnum.FOUR_THREE,
  },
  BAL: {
    offensiveScheme: OffensiveSchemeEnum.POWER_RUN,
    defensiveScheme: DefensiveSchemeEnum.MAN_BLITZ_HEAVY,
  },
  BUF: {
    offensiveScheme: OffensiveSchemeEnum.SPREAD,
    defensiveScheme: DefensiveSchemeEnum.ZONE_HEAVY,
  },
  CAR: {
    offensiveScheme: OffensiveSchemeEnum.WEST_COAST,
    defensiveScheme: DefensiveSchemeEnum.THREE_FOUR,
  },
  CHI: {
    offensiveScheme: OffensiveSchemeEnum.ZONE_RUN,
    defensiveScheme: DefensiveSchemeEnum.FOUR_THREE,
  },
  CIN: {
    offensiveScheme: OffensiveSchemeEnum.SPREAD,
    defensiveScheme: DefensiveSchemeEnum.NICKEL_BASED,
  },
  CLE: {
    offensiveScheme: OffensiveSchemeEnum.ZONE_RUN,
    defensiveScheme: DefensiveSchemeEnum.FOUR_THREE,
  },
  DAL: {
    offensiveScheme: OffensiveSchemeEnum.PRO_STYLE,
    defensiveScheme: DefensiveSchemeEnum.ZONE_HEAVY,
  },
  DEN: {
    offensiveScheme: OffensiveSchemeEnum.WEST_COAST,
    defensiveScheme: DefensiveSchemeEnum.HYBRID,
  },
  DET: {
    offensiveScheme: OffensiveSchemeEnum.POWER_RUN,
    defensiveScheme: DefensiveSchemeEnum.MULTIPLE,
  },
  GB: {
    offensiveScheme: OffensiveSchemeEnum.WEST_COAST,
    defensiveScheme: DefensiveSchemeEnum.HYBRID,
  },
  HOU: {
    offensiveScheme: OffensiveSchemeEnum.SPREAD,
    defensiveScheme: DefensiveSchemeEnum.COVER_2,
  },
  IND: {
    offensiveScheme: OffensiveSchemeEnum.SPREAD,
    defensiveScheme: DefensiveSchemeEnum.COVER_3,
  },
  JAX: {
    offensiveScheme: OffensiveSchemeEnum.SPREAD,
    defensiveScheme: DefensiveSchemeEnum.HYBRID,
  },
  KC: {
    offensiveScheme: OffensiveSchemeEnum.SPREAD,
    defensiveScheme: DefensiveSchemeEnum.MULTIPLE,
  },
  LV: {
    offensiveScheme: OffensiveSchemeEnum.POWER_RUN,
    defensiveScheme: DefensiveSchemeEnum.NICKEL_BASED,
  },
  LAC: {
    offensiveScheme: OffensiveSchemeEnum.WEST_COAST,
    defensiveScheme: DefensiveSchemeEnum.HYBRID,
  },
  LAR: {
    offensiveScheme: OffensiveSchemeEnum.ZONE_RUN,
    defensiveScheme: DefensiveSchemeEnum.HYBRID,
  },
  MIA: {
    offensiveScheme: OffensiveSchemeEnum.ZONE_RUN,
    defensiveScheme: DefensiveSchemeEnum.MAN_BLITZ_HEAVY,
  },
  MIN: {
    offensiveScheme: OffensiveSchemeEnum.WEST_COAST,
    defensiveScheme: DefensiveSchemeEnum.HYBRID,
  },
  NE: {
    offensiveScheme: OffensiveSchemeEnum.BALANCED,
    defensiveScheme: DefensiveSchemeEnum.MULTIPLE,
  },
  NO: {
    offensiveScheme: OffensiveSchemeEnum.WEST_COAST,
    defensiveScheme: DefensiveSchemeEnum.MAN_BLITZ_HEAVY,
  },
  NYG: {
    offensiveScheme: OffensiveSchemeEnum.SPREAD,
    defensiveScheme: DefensiveSchemeEnum.MAN_BLITZ_HEAVY,
  },
  NYJ: {
    offensiveScheme: OffensiveSchemeEnum.WEST_COAST,
    defensiveScheme: DefensiveSchemeEnum.COVER_3,
  },
  PHI: {
    offensiveScheme: OffensiveSchemeEnum.SPREAD,
    defensiveScheme: DefensiveSchemeEnum.HYBRID,
  },
  PIT: {
    offensiveScheme: OffensiveSchemeEnum.POWER_RUN,
    defensiveScheme: DefensiveSchemeEnum.THREE_FOUR,
  },
  SF: {
    offensiveScheme: OffensiveSchemeEnum.ZONE_RUN,
    defensiveScheme: DefensiveSchemeEnum.FOUR_THREE,
  },
  SEA: {
    offensiveScheme: OffensiveSchemeEnum.BALANCED,
    defensiveScheme: DefensiveSchemeEnum.COVER_3,
  },
  TB: {
    offensiveScheme: OffensiveSchemeEnum.PRO_STYLE,
    defensiveScheme: DefensiveSchemeEnum.MULTIPLE,
  },
  TEN: {
    offensiveScheme: OffensiveSchemeEnum.POWER_RUN,
    defensiveScheme: DefensiveSchemeEnum.ZONE_HEAVY,
  },
  WAS: {
    offensiveScheme: OffensiveSchemeEnum.WEST_COAST,
    defensiveScheme: DefensiveSchemeEnum.FOUR_THREE,
  },
};
