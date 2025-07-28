import { PlayerContract } from "./playerContract";

export interface SalaryByYear {
  id: string;
  contractId: string;
  year: number;
  amount: number;

  contract?: PlayerContract;
}
