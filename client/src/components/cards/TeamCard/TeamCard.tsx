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
        cursor: "pointer",
        border: `3px solid ${team.colorSecondary}`,
        borderRadius: "8px",
        height: "80vh",
        width: "70vw", 
        textAlign: "center",
        padding: "1rem",
        backgroundColor: team.colorPrimary,
        color: "#fff",
      }}
      className="flex flex-col gap-1 items-center justify-center"
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
