import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Team } from "../../../../../shared/models/team";
import { PlayerTransparentPhotoMap } from "../../../../../shared/dataMaps/playerMaps/playerTransparentPhotoMap";
import Button from "@mui/material/Button";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { TabPanel } from "src/components/tabs/TabPanel";

const maskStyle = {
  WebkitMaskImage:
    "linear-gradient(to top, transparent 0%, black 50%, black 100%)",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskImage: "linear-gradient(to top, transparent 0%, black 50%, black 100%)",
  maskRepeat: "no-repeat",
  maskSize: "100% 100%",
};

function TeamDashboard({ team }: { team: Team | null }) {
  const [tabValue, setTabValue] = React.useState("overview");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  return (
    <Box className="flex flex-row h-full w-full py-8 pr-8" sx={{fontFamily: 'Anton, sans-serif'}}>
      <Box className="basis-1/4">
        <img
          src={PlayerTransparentPhotoMap[team?.abbreviation!]}
          alt="Kyler Murray"
          className="w-full h-full object-cover"
          style={maskStyle}
        ></img>
      </Box>
      <Card
        className="flex-1 h-full rounded-2xl!"
        sx={{
          border: `3px solid ${team?.colorPrimary}`,
        }}
      >
        <Box
          className="flex flex-row gap-4 items-center justify-between pr-4 text-white"
          sx={{ backgroundColor: team?.colorPrimary }}
        >
          <Box className="flex flex-row gap-4 items-center p-4">
            <img src={team?.logoUrl} alt={team?.name} className="h-16 w-16" />
            <Typography variant="h5" className="caret-transparent">
              {team?.name ?? "Select a Team"}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            startIcon={<MonetizationOnIcon />}
            color="inherit"
          >
            Purchase Team
          </Button>
        </Box>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="team select tabs"
        >
          <Tab value="overview" label="Overview" />
          <Tab value="roster" label="Roster" />
          <Tab value="staff" label="Staff" />
          <Tab value="stadium" label="Stadium" />
          <Tab value="finance" label="Finance" />
          <Tab value="draft" label="Draft Picks" />
        </Tabs>

        <TabPanel value={tabValue} index="overview">
          <Typography variant="h6">Overview</Typography>
          <p>Quick summary: team identity, record, star players, fan base.</p>
        </TabPanel>

        <TabPanel value={tabValue} index="roster">
          <Typography variant="h6">Roster</Typography>
          <p>Player list, depth chart, positions.</p>
        </TabPanel>

        <TabPanel value={tabValue} index="staff">
          <Typography variant="h6">Staff</Typography>
          <p>Coaches, GM, coordinators.</p>
        </TabPanel>

        <TabPanel value={tabValue} index="stadium">
          <Typography variant="h6">Stadium</Typography>
          <p>Stadium name, capacity, facilities.</p>
        </TabPanel>

        <TabPanel value={tabValue} index="finance">
          <Typography variant="h6">Finance</Typography>
          <p>Salary cap, contracts, revenue streams.</p>
        </TabPanel>

        <TabPanel value={tabValue} index="draft">
          <Typography variant="h6">Draft Picks</Typography>
          <p>Upcoming draft picks and trade history.</p>
        </TabPanel>
      </Card>
    </Box>
  );
}

export default TeamDashboard;
