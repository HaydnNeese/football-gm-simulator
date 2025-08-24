import { Incentives } from "./incentives";

export interface ContractDesires {
    years?: number; // Desired contract length in years
    averageSalary?: number; // Desired average annual salary
    totalGuaranteed?: number; // Desired total guaranteed money
    signingBonusAmount?: number; // Desired signing bonus amount
    signingBonusPercentage?: number; // Percentage of contract as signing bonus
    signingBonusProrateYears?: number; // Number of years to prorate signing bonus
    tradeClause?: boolean; // If true, player wants a no-trade clause
    injuryGuarantee?: boolean; // If true, player wants injury guarantees in the contract
    rosterBonusAmount?: number; // Desired roster bonus amount
    rosterBonusDate?: Date; // Date when the roster bonus is paid
    workoutBonusAmount?: number; // Desired workout bonus amount
    workoutBonusPercentage?: number; // Percentage of salary tied to workout bonus
    incentives?: Incentives; // Incentives structure
    optOutYears?: number[]; // Years in which the player can opt out of the contract
    isPlayerOptOut?: boolean; // If true, player can opt out; else team
    isTeamOptOut?: boolean; // If true, team can opt out of the contract
}