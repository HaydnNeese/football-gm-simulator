const { v4: uuidv4 } = require("uuid");
import { Player } from "@shared/models";
import { BDLPlayer } from "src/third_party_apis/Ball_Dont_Lie/models/bdl_player";
import { playerPositionMap } from "@shared/dataMaps/playerMaps";

// Converts experience string like "3rd Season" to a number of years
function parseExperienceToYears(expStr: string | undefined): number | undefined {
    if (!expStr) return undefined;

    const match = expStr.match(/(\d+)/);
    if (!match) return undefined;

    return parseInt(match[1], 10);
}

// Converts weight string like "251 lbs" to number
function parseWeightToPounds(weightStr: string | undefined): number | undefined {
    if (!weightStr) return undefined;

    const match = weightStr.match(/(\d+)/);
    if (!match) return undefined;

    return parseInt(match[1], 10);
}

// Converts height string like "6' 4\"" to inches
function parseHeightToInches(heightStr: string | undefined): number | undefined {
    if (!heightStr) return undefined;

    const match = heightStr.match(/(\d+)'\s*(\d+)?/);
    if (!match) return undefined;

    const feet = parseInt(match[1], 10);
    const inches = match[2] ? parseInt(match[2], 10) : 0;

    return feet * 12 + inches;
}

function determineDraftYear(apiPlayer: BDLPlayer): number | undefined {
    const experienceYears = parseExperienceToYears(apiPlayer.experience);
    if (experienceYears === undefined) return 0;

    const currentYear = new Date().getFullYear();
    return currentYear - experienceYears;
}

export function transformBDLPlayerToModel(apiPlayer: BDLPlayer): Player {
    const transformedPlayer: Player = {
        id: 'player-' + uuidv4(),
        firstName: apiPlayer.first_name,
        lastName: apiPlayer.last_name,
        fullName: `${apiPlayer.first_name} ${apiPlayer.last_name}`,
        position: playerPositionMap[apiPlayer.position_abbreviation],
        positionAbbreviation: apiPlayer.position_abbreviation,
        heightInInches: parseHeightToInches(apiPlayer.height),
        weightInPounds: parseWeightToPounds(apiPlayer.weight),
        jerseyNumber: apiPlayer.jersey_number ? parseInt(apiPlayer.jersey_number, 10) : undefined,
        college: apiPlayer.college,
        experience: parseExperienceToYears(apiPlayer.experience),
        age: apiPlayer.age,
        teamId: apiPlayer.team?.abbreviation,
        practiceSquadTeamId: undefined,
        injuredReserveTeamId: undefined,
        suspendedListTeamId: undefined,
        expectedRole: undefined,
        actualRole: undefined,
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
        draftYear: determineDraftYear(apiPlayer),
        draftRound: undefined,
        isRecordHolder: false,
        recordsHeld: [],
        contractId: undefined,
        contractDesiresId: undefined,
        contractNegotiationStatus: undefined,
        lastContractUpdate: undefined,
        ratingsId: undefined,
        statsId: undefined,
        performanceRating: undefined,
        impactRating: undefined,
        potential: undefined,
        isInjured: false,
        currentInjury: undefined,
        injuryHistory: [],
        injuryProneness: false,
        expectedReturnFromInjury: undefined,
        personalityTraits: [],
        morale: 50, // Default morale
        leadership: 50, // Default leadership
        adaptability: 50, // Default adaptability
        workEthic: 50, // Default work ethic   
        consistency: 50, // Default consistency
        clutchFactor: 50, // Default clutch factor
        footballIQ: 50, // Default football IQ
        popularity: 50, // Default popularity
        trainingFocus: undefined,
        trainingProgress: 0,
        offFieldConcerns: [],
        pastEvents: []
    };
    
    return transformedPlayer;
};
