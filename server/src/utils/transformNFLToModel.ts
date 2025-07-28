import { Team } from '@shared/models'

export function transformTeam(apiTeam: any): Team {
    return {
        id: apiTeam.id,
        name: apiTeam.name,
        city: apiTeam.city,
        state: apiTeam.state,
        stadium: apiTeam.stadium,
        logoUrl: apiTeam.logoUrl,
        colorPrimary: apiTeam.colorPrimary,
        conference: apiTeam.conference,
        division: apiTeam.division
    };
} 