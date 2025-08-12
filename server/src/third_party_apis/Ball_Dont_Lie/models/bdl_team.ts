import { ConferenceEnum } from "@shared/enums";

export interface BDLTeam {
    id: string;
    name: string;
    full_name: string;
    location: string; // city name
    abbreviation: string;
    conference: ConferenceEnum;
    division: string;
}
