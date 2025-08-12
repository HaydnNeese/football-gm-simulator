export const TeamRivalMap: Record<string, string[]> = {
  // AFC East
  BUF: ['MIA', 'NE', 'NYJ'],
  MIA: ['BUF', 'NE', 'NYJ'],
  NE: ['BUF', 'MIA', 'NYJ'],
  NYJ: ['BUF', 'MIA', 'NE'],

  // AFC North
  BAL: ['CIN', 'CLE', 'PIT'],
  CIN: ['BAL', 'CLE', 'PIT'],
  CLE: ['BAL', 'CIN', 'PIT'],
  PIT: ['BAL', 'CIN', 'CLE'],

  // AFC South
  HOU: ['IND', 'JAX', 'TEN'],
  IND: ['HOU', 'JAX', 'TEN'],
  JAX: ['HOU', 'IND', 'TEN'],
  TEN: ['HOU', 'IND', 'JAX'],

  // AFC West
  DEN: ['KC', 'LV', 'LAC'],
  KC: ['DEN', 'LV', 'LAC'],
  LV: ['DEN', 'KC', 'LAC'],
  LAC: ['DEN', 'KC', 'LV'],

  // NFC East
  DAL: ['NYG', 'PHI', 'WAS'],
  NYG: ['DAL', 'PHI', 'WAS'],
  PHI: ['DAL', 'NYG', 'WAS'],
  WAS: ['DAL', 'NYG', 'PHI'],

  // NFC North
  CHI: ['DET', 'GB', 'MIN'],
  DET: ['CHI', 'GB', 'MIN'],
  GB: ['CHI', 'DET', 'MIN'],
  MIN: ['CHI', 'DET', 'GB'],

  // NFC South
  ATL: ['CAR', 'NO', 'TB'],
  CAR: ['ATL', 'NO', 'TB'],
  NO: ['ATL', 'CAR', 'TB'],
  TB: ['ATL', 'CAR', 'NO'],

  // NFC West
  ARI: ['LAR', 'SEA', 'SF'],
  LAR: ['ARI', 'SEA', 'SF'],
  SEA: ['ARI', 'LAR', 'SF'],
  SF: ['ARI', 'LAR', 'SEA'],
};
