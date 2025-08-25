import Box from "@mui/material/Box";
import { Team } from "@shared/models/team";
import { useEffect, useState } from "react";
import TeamCard from "../../components/cards/TeamCard/TeamCard";
import LinearProgress from "@mui/material/LinearProgress";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import SelectorButton from "./SelectorButton";

function TeamSelect() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);

  useEffect(() => {
    // Fetch teams
    fetch("http://localhost:5000/api/teams?sort=location&order=asc")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        setSelectIndex(0);
        setCurrentTeam(data[selectIndex]);
      })
      .catch((err) => console.error(err));
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
    <Box className="flex flex-row items-center justify-center gap-2 bg-gray-200 min-h-screen w-full">
      <SelectorButton direction="left" onClick={prevTeam} />
      {currentTeam ? (
        <TeamCard
          key={currentTeam.id}
          team={currentTeam}
          selected={selectedTeam === currentTeam.id}
          onSelect={setSelectedTeam}
        />
      ) : (
        <LinearProgress />
      )}
      <SelectorButton direction="right" onClick={nextTeam} />
    </Box>
  );
}

export default TeamSelect;
