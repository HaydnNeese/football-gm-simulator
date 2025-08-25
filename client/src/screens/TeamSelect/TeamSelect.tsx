import Box from "@mui/material/Box";
import { Team } from "@shared/models/team";
import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import CircularProgress from "@mui/material/CircularProgress";
import SelectorButton from "./SelectorButton";

function TeamSelect() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    // Fetch teams
    fetch("http://localhost:5000/api/teams?sort=location&order=asc")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        setSelectIndex(0);
        setCurrentTeam(data[selectIndex]);
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
    setCurrentTeam(teams[newIndex]);
  };

  const prevTeam = () => {
    let newIndex;
    if (selectIndex <= 0) {
      newIndex = teams.length - 1;
    } else {
      newIndex = selectIndex - 1;
    }
    setSelectIndex(newIndex);
    setCurrentTeam(teams[newIndex]);
  };

  return (
    <Box className="flex flex-row justify-center pt-11 gap-2 min-h-screen w-full">
      {!loading ? (
        <>
          <SelectorButton direction="left" onClick={prevTeam} />
          <TeamCard
            key={currentTeam!.id}
            team={currentTeam!}
            selected={selectedTeam === currentTeam!.id}
            onSelect={setSelectedTeam}
          />
          <SelectorButton direction="right" onClick={nextTeam} />
        </>
      ) : (
        <CircularProgress size={180} />
      )}
    </Box>
  );
}

export default TeamSelect;
