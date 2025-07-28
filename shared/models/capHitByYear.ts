import { PlayerContract } from "./playerContract";

export interface CapHitByYear {
  id: string;
  contractId: string;
  year: number;
  amount: number;

  contract?: PlayerContract;
}
