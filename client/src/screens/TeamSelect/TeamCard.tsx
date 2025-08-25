import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Team } from "@shared/models";

function TeamCard({
  team,
  selected,
  onSelect,
}: {
  team: Team;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <Grid
      onClick={() => onSelect(team.id!)}
      sx={{
        backgroundColor: team.colorPrimary,
        border: `3px solid ${team.colorSecondary}`,
      }}
      className="flex flex-col gap-1 items-center justify-center cursor-pointer text-white text-center p-4 rounded-lg h-[90vh] w-[90vw]"
    >
      <img
        src={team.logoUrl}
        alt={team.name}
        style={{ width: "300px", marginBottom: "0.5rem" }}
      />
      <Typography variant="h2">{team.location}</Typography>
      <Typography variant="h4">{team.nickname}</Typography>
    </Grid>
  );
}

export default TeamCard;
