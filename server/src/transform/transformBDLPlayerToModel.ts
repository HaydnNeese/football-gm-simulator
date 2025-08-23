import { Player } from "../../../shared/models";
import { BDLPlayer } from "../third_party_apis/Ball_Dont_Lie/models/bdl_player";
import { playerPositionMap } from "../../../shared/dataMaps/playerMaps";
import { determineDraftYear, parseHeightToInches, parseWeightToPounds, parseExperienceToYears, determineBirthdateFromAge } from "../../../shared/utils/playerUtils";
import { InjuryStatus, PlayerRoleEnum } from "../../../shared/enums";

export function transformBDLPlayerToModelWithTeamId(apiPlayer: BDLPlayer, teamMap: Record<string, string>): Player {
    const transformedPlayer: Player = {
        externalId: apiPlayer.id.toString(),
        // --- Identity & Biographical ---
        firstName: apiPlayer.first_name,
        lastName: apiPlayer.last_name,
        fullName: `${apiPlayer.first_name} ${apiPlayer.last_name}`,
        age: apiPlayer.age,
        birthDate: determineBirthdateFromAge(apiPlayer.age),
        college: apiPlayer.college,
        jerseyNumber: apiPlayer.jersey_number ? parseInt(apiPlayer.jersey_number, 10) : undefined,
        
        // --- Physical Attributes ---
        heightInInches: parseHeightToInches(apiPlayer.height),
        weightInPounds: parseWeightToPounds(apiPlayer.weight),

        // --- Team & Role ---
        teamId: teamMap[apiPlayer.team?.abbreviation] || "",
        position: playerPositionMap[apiPlayer.position_abbreviation],
        positionAbbreviation: apiPlayer.position_abbreviation,
        expectedRole: PlayerRoleEnum.STARTER, // work this out in a future phase
        actualRole: PlayerRoleEnum.STARTER, // work this out in a future phase
        experience: parseExperienceToYears(apiPlayer.experience),
        isStarter: false,
        isCaptain: false,
        isFreeAgent: apiPlayer.team ? false : true,
        isRetired: false,
        isSuspended: false,
        isPracticeSquad: false,
        isTradeBlock: false,
        offense: ['QB', 'RB', 'WR', 'TE', 'FB', 'OT', 'G', 'C'].includes(apiPlayer.position_abbreviation),
        defense: ['DE', 'DT', 'LB', 'CB', 'S'].includes(apiPlayer.position_abbreviation),
        specialTeams: ['K', 'P', 'LS'].includes(apiPlayer.position_abbreviation),
        
        // --- Draft & Records ---
        draftYear: determineDraftYear(apiPlayer),
        draftRound: undefined,
        isRecordHolder: false,
        recordsHeld: [],

        // --- Contract & Agent ---
        contractId: undefined,
        contractDesiresId: undefined,
        contractNegotiationStatus: undefined,
        lastContractUpdate: undefined,
        agentId: undefined,

        // --- Ratings & Stats ---
        ratingsId: undefined,
        statsId: undefined,
        performanceRating: undefined,
        impactRating: undefined,
        potential: undefined,

        // --- Health & Injury ---
        isInjured: false,
        currentInjury: undefined,
        injuryProneness: false,
        expectedReturnFromInjury: undefined,
        injuryStatus: InjuryStatus.Active,

        // --- Personality & Intangibles ---
        personalityTraits: [],
        morale: 50, // Default morale
        leadership: 50, // Default leadership
        adaptability: 50, // Default adaptability
        workEthic: 50, // Default work ethic   
        consistency: 50, // Default consistency
        clutchFactor: 50, // Default clutch factor
        footballIQ: 50, // Default football IQ
        popularity: 50, // Default popularity
        
        // --- Training & Development ---
        trainingFocus: undefined,
        trainingProgress: 0
    };
    
    return transformedPlayer;
};
