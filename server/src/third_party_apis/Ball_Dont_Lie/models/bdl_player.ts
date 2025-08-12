import { BDLTeam } from "./bdl_team";

export interface BDLPlayer {
    id: string;
    first_name: string;
    last_name: string;
    position: string;
    position_abbreviation: string;
    height: string;
    weight: string;
    jersey_number: string;
    college: string;
    experience: string;
    age: number;
    team: BDLTeam;   
}