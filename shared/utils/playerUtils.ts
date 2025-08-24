import { BDLPlayer } from "src/third_party_apis/Ball_Dont_Lie/models/bdl_player";

// Converts experience string like "3rd Season" to a number of years
export function parseExperienceToYears(expStr: string | undefined): number | undefined {
    if (!expStr){
        return undefined
    };

    const match = expStr.match(/(\d+)/);
    if (!match) {
        return undefined
    }

    return parseInt(match[1], 10);
}

// Converts weight string like "251 lbs" to number
export function parseWeightToPounds(weightStr: string | undefined): number | undefined {
    if (!weightStr) {
        return undefined
    }

    const match = weightStr.match(/(\d+)/);
    if (!match) {
        return undefined
    }

    return parseInt(match[1], 10);
}

// Converts height string like "6' 4\"" to inches
export function parseHeightToInches(heightStr: string | undefined): number | undefined {
    if (!heightStr) {
        return undefined
    }

    const match = heightStr.match(/(\d+)'\s*(\d+)?/);
    if (!match) {
        return undefined
    }

    const feet = parseInt(match[1], 10);
    const inches = match[2] ? parseInt(match[2], 10) : 0;

    return feet * 12 + inches;
}

// Determines the draft year based on the player's experience
export function determineDraftYear(apiPlayer: BDLPlayer): number | undefined {
    const experienceYears = parseExperienceToYears(apiPlayer.experience);
    if (experienceYears === undefined) {
        return 0;
    }

    const currentYear = new Date().getFullYear();
    return currentYear - experienceYears;
}

export function determineBirthdateFromAge(age: number | undefined): Date | undefined {
    if (age === undefined) {
        return undefined;
    }

    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;

    // Random month (0 = January, 11 = December)
    const month = Math.floor(Math.random() * 12);

    // Days in that month (handles leap years for February too)
    const daysInMonth = new Date(birthYear, month + 1, 0).getDate();
    const day = Math.floor(Math.random() * daysInMonth) + 1;

    return new Date(birthYear, month, day);
}

