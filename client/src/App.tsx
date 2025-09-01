import "./App.css";
import TeamSelect from "./screens/TeamSelect/TeamSelect";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Team } from "@shared/models";
import TeamDashboard from "./screens/TeamSelect/TeamDashboard/TeamDashboard";

function App() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  useEffect(() => {
    if (selectedTeam) {
      document.body.style.background = `linear-gradient(to bottom, ${
        selectedTeam!.colorPrimary
      }, white)`;
    } else {
      document.body.style.backgroundColor = `linear-gradient(to bottom, lightgray, white)`;
    }
  }, [selectedTeam]);

  return (
    <Box className="flex flex-col h-screen overflow-hidden">
      <TeamSelect teamSelected={setSelectedTeam} />
      <TeamDashboard team={selectedTeam!}></TeamDashboard>
    </Box>
  );
}

export default App;
