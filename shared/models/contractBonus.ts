import { PlayerContract } from "./playerContract";

export interface ContractBonus {
  id: string;
  contractId: string;
  year: number;
  signingBonus?: number;
  rosterBonus?: number;
  workoutBonus?: number;
  incentiveBonus?: number;

  // Nested relationship
  contract?: PlayerContract;
}
