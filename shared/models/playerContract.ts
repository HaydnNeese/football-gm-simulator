import { CapHitByYear } from "./capHitByYear";
import { ContractBonus } from "./contractBonus";
import { DeadCapByYear } from "./deadCapByYear";
import { OptOutYear } from "./optOutYear";
import { SalaryByYear } from "./salaryByYear";

export interface PlayerContract {
  playerId?: string;
  teamId?: string;
  signedDate?: string;
  startSeason?: number;
  endSeason?: number;
  totalValue?: number;
  averagePerYear?: number;
  totalGuaranteed?: number;
  isRookieContract?: boolean;
  isFranchiseTag?: boolean;
  isExtension?: boolean;
  bonuses?: ContractBonus[];
  salaryByYear?: SalaryByYear;
  capHitByYear?: CapHitByYear;
  deadCapByYear?: DeadCapByYear;
  optOutYears?: OptOutYear[];
  isPlayerOptOut?: boolean;
  isTeamOptOut?: boolean;
  restructureHistory?: RestructureEvent[];
  clauses?: ContractClauses;
}

export interface RestructureEvent {
  id?: string;
  contractId?: string;
  year?: number;
  date?: string;
  amountConvertedToBonus?: number;
  newCapHit?: number;
  newDeadCap?: number;
}

export interface ContractClauses {
  noTradeClause?: boolean; // Player cannot be traded without their consent
  injuryGuarantee?: boolean; // Guarantees payment if player is injured
  performanceBonus?: {
    proBowl?: number; // Bonus for making the Pro Bowl
    allPro?: number; // Bonus for being selected All-Pro
    mvp?: number; // Bonus for winning league MVP
    superBowlMVP?: number; // Bonus for winning Super Bowl MVP
    playoffAppearance?: number; // Bonus for team making the playoffs
    statMilestones?: {
      yards?: number; // Bonus for surpassing X yards (QB/RB/WR)
      touchdowns?: number; // Bonus for reaching touchdown milestones
      sacks?: number; // For defensive players
      interceptions?: number; // For defensive players
    };
  };
  rosterBonus?: {
    amount?: number; // Bonus paid for being on the active roster
    perGame?: boolean; // If true, amount is per game; else lump sum
  };
  workoutBonus?: {
    amount?: number; // Bonus for participating in offseason workouts
    minWorkouts?: number; // Number of workouts required to receive bonus
  };
  voidYears?: number; // Number of fake years to spread out cap hit
  optionBonus?: {
    year?: number; // Which year the team/player has an option
    amount?: number; // Amount of the option bonus
    type?: "team" | "player"; // Who controls the option
  } | null;
  restructureEligible?: boolean; // Can contract be restructured?
  earlyTerminationPenalty?: number; // Cap penalty for cutting player early (in % of remaining contract)
}
