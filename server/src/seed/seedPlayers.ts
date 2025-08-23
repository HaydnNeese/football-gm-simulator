import { BDLPlayer } from "../third_party_apis/Ball_Dont_Lie/models/bdl_player";
import { fetchAllPlayers } from "../third_party_apis/Ball_Dont_Lie/fetchNFLPlayerData";
import { transformBDLPlayerToModelWithTeamId } from "../transform/transformBDLPlayerToModel";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedPlayers(teamUUIDMap: Record<string, string>) {
  const apiPlayers = await fetchAllPlayers();

  console.log('Aaron Brewer Search', apiPlayers.filter((p: BDLPlayer) => p.first_name === 'Aaron' && p.last_name === 'Brewer'));
  const transformedPlayers = apiPlayers.map((player: BDLPlayer) =>
    transformBDLPlayerToModelWithTeamId(player, teamUUIDMap)
  );

  await prisma.player.createMany({
    data: transformedPlayers,
    skipDuplicates: true,
  });

  console.log(`✅ Seeded ${transformedPlayers.length} players`);
}
