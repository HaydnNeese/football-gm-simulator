import { PlayerContract } from "./playerContract";

export interface OptOutYear {
  id: string;
  contractId: string;
  year: number;

  contract?: PlayerContract;
}
