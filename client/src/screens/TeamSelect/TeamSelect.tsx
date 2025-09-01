import Box from "@mui/material/Box";
import { Team } from "@shared/models/team";
import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import CircularProgress from "@mui/material/CircularProgress";
import SelectorButton from "./SelectorButton";

function TeamSelect({ teamSelected }: { teamSelected: (team: Team) => void }) {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    // Fetch teams
    fetch("http://localhost:5000/api/teams?sort=location&order=asc")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        setSelectIndex(0);
        setSelectedTeam(data[selectIndex ?? 0]);
        teamSelected(data[selectIndex ?? 0]);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const nextTeam = () => {
    let newIndex;
    if (selectIndex >= teams.length - 1) {
      newIndex = 0;
    } else {
      newIndex = selectIndex + 1;
    }
    setSelectIndex(newIndex);
    setSelectedTeam(teams[newIndex]);
    teamSelected(teams[newIndex]);
  };

  const prevTeam = () => {
    let newIndex;
    if (selectIndex <= 0) {
      newIndex = teams.length - 1;
    } else {
      newIndex = selectIndex - 1;
    }
    setSelectIndex(newIndex);
    setSelectedTeam(teams[newIndex]);
    teamSelected(teams[newIndex]);
  };

  const selectTeam = (team: Team) => {
    setSelectedTeam(team);
    teamSelected(team);
  }

  return (
    <Box className="flex flex-col items-start  w-full gap-4">
      {/* <Typography variant="h4" component="div" className="pl-12">
          Select a Team
        </Typography> */}
      <Box
        className="flex flex-row items-start justify-center h-[12vh] w-full shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)]"
        sx={{
          borderTop: `3px solid ${selectedTeam?.colorSecondary!}`,
        }}
      >
        {!loading ? (
          <>
            <SelectorButton
              direction="left"
              bgColor={selectedTeam?.colorSecondary!}
              arrowColor={selectedTeam?.colorPrimary!}
              onClick={prevTeam}
            />
            {teams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                selected={selectedTeam?.id === team.id}
                onSelect={selectTeam}
              />
            ))}
            <SelectorButton
              direction="right"
              bgColor={selectedTeam?.colorSecondary!}
              arrowColor={selectedTeam?.colorPrimary!}
              onClick={nextTeam}
            />
          </>
        ) : (
          <CircularProgress size={180} />
        )}
      </Box>
    </Box>
  );
}

export default TeamSelect;
