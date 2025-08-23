import { seedTeamsWithIdMapping } from "../src/seed/seedTeams";
import { seedPlayers } from "../src/seed/seedPlayers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const teamUUIDMap = await seedTeamsWithIdMapping();

  await seedPlayers(teamUUIDMap);
}

main()
  .then(() => {
    console.log("✅ All seeding complete");
  })
  .catch((e) => {
    console.error("Error seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
