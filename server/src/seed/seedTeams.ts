import { fetchTeams } from "../third_party_apis/Ball_Dont_Lie/fetchNFLTeamData";
import { transformBDLTeamToModel } from "../transform/transformBDLTeamToModel";
import { BDLTeam } from "../third_party_apis/Ball_Dont_Lie/models/bdl_team";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedTeamsWithIdMapping() {
  const apiTeams = await fetchTeams();

  const transformedTeams = apiTeams.data.map((team: BDLTeam) =>
    transformBDLTeamToModel(team)
  );

  await prisma.team.createMany({
    data: transformedTeams,
    skipDuplicates: true,
  });

  // id isn't applied until after createMany, so wait to retrieve from DB
  const teamsInDb = (await prisma.team.findMany()).map((team) => ({
    id: team.id,
    abbreviation: team.abbreviation,
  }));

  console.log(`Seeded ${teamsInDb.length} teams`);

  const teamUUIDMap = mapTeamIds(teamsInDb);

  return teamUUIDMap; // This allows the seedPlayers function to map players to teams correctly
}

function mapTeamIds(dbTeams: Array<{ abbreviation: string; id: string }>): Record<string, string> {
  const teamUUIDMap: Record<string, string> = {};

  dbTeams.forEach((team) => {
    if (team.abbreviation !== undefined) {
      teamUUIDMap[team.abbreviation] = team.id || "";
    }
  });

  return teamUUIDMap;
}
