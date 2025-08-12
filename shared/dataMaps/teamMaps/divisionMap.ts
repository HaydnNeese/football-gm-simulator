
import { ConferenceEnum, DivisionEnum } from '../../enums';

export const divisionMap: Record<ConferenceEnum, Record<string, DivisionEnum>> = {
  [ConferenceEnum.AFC]: {
    EAST: DivisionEnum.AFC_EAST,
    NORTH: DivisionEnum.AFC_NORTH,
    SOUTH: DivisionEnum.AFC_SOUTH,
    WEST: DivisionEnum.AFC_WEST,
  },
  [ConferenceEnum.NFC]: {
    EAST: DivisionEnum.NFC_EAST,
    NORTH: DivisionEnum.NFC_NORTH,
    SOUTH: DivisionEnum.NFC_SOUTH,
    WEST: DivisionEnum.NFC_WEST,
  },
};