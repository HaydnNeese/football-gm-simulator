import { ContractDesires } from "./contractDesires";
import { PlayerPositionEnum, PlayerPersonalityTraitEnum, InjuryType, OffFieldConcernTypeEnum, PlayerRoleEnum, FootballRecordEnum } from "../enums";
import { PlayerContract } from "./playerContract";
import { PlayerRatings } from "./playerRatings";

// Define FootballRecord type or import it from its module
export interface Player {
    id?: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    heightInInches?: number;
    weightInPounds?: number;
    college?: string;
    position?: PlayerPositionEnum;
    ratings?: PlayerRatings;
    draftYear?: number;
    draftRound?: number;
    personalityTraits?: PlayerPersonalityTraitEnum[];
    contract?: PlayerContract;
    stats?: PlayerRatings;
    isInjured?: boolean;
    currentInjury?: InjuryType;
    injuryHistory?: InjuryType[];
    morale?: number; // 0–100
    potential?: number; // 0–100
    experience?: number; // 0–100
    teamId?: string; // Current team ID
    isStarter?: boolean; // If true, player is a starter for their team
    isCaptain?: boolean; // If true, player is a team captain
    isFreeAgent?: boolean; // If true, player is not currently signed to a team
    isRetired?: boolean; // If true, player has retired from professional football
    isSuspended?: boolean; // If true, player is currently suspended
    isPracticeSquad?: boolean; // If true, player is on the practice squad
    isTradeBlock?: boolean; // If true, player is available for trade
    isRecordHolder?: boolean;
    recordsHeld?: FootballRecordEnum[]
    lastContractUpdate?: string; // Date of last contract update
    offFieldConcerns?: OffFieldConcernTypeEnum[]; // List of off-field issues or concerns
    popularity?: number; // 0–100, how popular the player is with fans
    leadership?: number; // 0–100, how well the player leads teammates
    durability?: number; // 0–100, how durable the player is (resistance to injuries)
    adaptability?: number; // 0–100, how well the player adapts to new systems or roles
    workEthic?: number; // 0–100, how hard the player works in practice and games
    consistency?: number; // 0–100, how consistently the player performs
    clutchFactor?: number; // 0–100, how well the player performs in high-pressure situations
    footballIQ?: number; // 0–100, how well the player understands the game
    injuryProneness?: boolean; // If true, player is prone to injuries
    expectedReturnFromInjury?: Date; // Expected return date from current injury
    growthPotential?: number; // 0–100, potential for improvement in skills and ratings
    trainingFocus?: string; // Specific area player is focusing on in training (e.g., "throw accuracy", "route running")
    trainingProgress?: number; // 0–100, progress in training focus area
    agentId?: string; // ID of the player's agent
    contractNegotiationStatus?: string; // Current status of contract negotiations (e.g., "in progress", "completed", "rejected")
    contractDesires?: ContractDesires;
    expectedRole?: PlayerRoleEnum; // Specific role player is expected to fill (e.g., "starter, role player, backup, special teams, mentor")
    actualRole?: PlayerRoleEnum; // Actual role player is filling on the team
    performanceRating?: number; // 0–100, overall performance rating based on stats and impact
    lastGamePerformance?: {
        date?: string; // Date of the last game
        stats?: PlayerRatings; // Stats from the last game
        impact?: number; // 0–100, impact rating from the last game
    };
    impactRating?: number; // 0–100, overall impact rating based on performance, leadership, and intangibles
    offense?: boolean; // If true, player plays on offense; else defense
    defense?: boolean; // If true, player plays on defense; else offense
    specialTeams?: boolean; // If true, player plays on special teams
}
