import Grid from "@mui/material/Grid";
import { Team } from "@shared/models";

function TeamCard({
  team,
  selected,
  onSelect,
}: {
  team: Team;
  selected: boolean;
  onSelect: (team: Team) => void;
}) {
  return (
    <Grid
      onClick={() => onSelect(team)}
      sx={{
        backgroundColor: team.colorPrimary,
        caretColor: "transparent",
        width: `${selected ? "40vh" : "12vh"}`
      }}
      className="flex flex-row gap-6 items-center justify-center cursor-pointer text-white text-center h-full"
    >
      <img
        src={team.logoUrl}
        alt={team.name}
        style={{ width: `${selected ? "10vh" : "3vh"}`, marginBottom: ".25rem"}}
      />
    </Grid>
  );
}

export default TeamCard;
