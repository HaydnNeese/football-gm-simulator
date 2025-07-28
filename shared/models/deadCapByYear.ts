import { PlayerContract } from "./playerContract";

export interface DeadCapByYear {
  id: string;
  contractId: string;
  year: number;
  amount: number;

  contract?: PlayerContract;
}
