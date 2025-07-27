export interface TeamStats {
  teamId: string;
  season: number;
  gamesPlayed: number;
  wins: number;
  losses: number;
  ties: number;

  pointsFor: number;
  pointsAgainst: number;
  pointDifferential: number;

  totalYards: number;
  passingYards: number;
  rushingYards: number;
  turnoversLost: number;

  totalYardsAllowed: number;
  passingYardsAllowed: number;
  rushingYardsAllowed: number;
  turnoversGained: number;

  thirdDownConversionRate: number; // e.g. 0.412
  redZoneEfficiency: number;       // e.g. 0.625
  averageTimeOfPossession: string; // "31:42"

  penaltyYards: number;
  sacks: number;
  sacksAllowed: number;

  homeRecord: [number, number, number]; // [wins, losses, ties]
  awayRecord: [number, number, number];
  divisionRecord: [number, number, number];
  conferenceRecord: [number, number, number];
}
