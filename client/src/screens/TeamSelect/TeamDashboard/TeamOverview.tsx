import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Team } from "@shared/models";
import LabelValue from "src/components/layout/LabelValue";

function TeamOverview({ team }: { team: Team | null }) {
  return (
    <Box className="flex flex-row gap-2">
      <Paper elevation={3} className="flex flex-col p-4">
        <Box className="flex flex-col gap-2">
          <Box
            className="flex flex-col items-center rounded-lg p-4"
            sx={{ backgroundColor: `${team?.colorPrimary}` }}
          >
            <Typography
              variant="h5"
              sx={{ color: team?.colorTertiary ?? team?.colorSecondary }}
            >
              {team?.abbreviation!}
            </Typography>
            <img src={team?.logoUrl} alt={team?.name} className="h-48 w-96" />
          </Box>
          <LabelValue label="Conference" value={team?.conference!}></LabelValue>
          <LabelValue label="Division" value={team?.division!}></LabelValue>
          <LabelValue
            label="W/L/T"
            value={
              team?.allTimeWins! +
              "/" +
              team?.allTimeLosses +
              "/" +
              team?.allTimeTies
            }
          ></LabelValue>
          <LabelValue
            label="Win %"
            value={`${Math.round(
              (team?.allTimeWins! /
                (team?.allTimeWins! +
                  team?.allTimeLosses! +
                  team?.allTimeTies!)) *
                100
            )}%`}
          ></LabelValue>
          <LabelValue
            label="Playoff Appearances"
            value={team?.playoffAppearances!}
          ></LabelValue>
          <LabelValue
            label="Superbowl Appearances"
            value={team?.superBowlAppearances!}
          ></LabelValue>
          <LabelValue
            label="Championships"
            value={team?.championships!}
          ></LabelValue>
          <LabelValue label="Founded" value={team?.yearFounded!}></LabelValue>
          {/* <LabelValue label="Rivals" value={team?.rivalTeams!}></LabelValue> this is a list, need to map through and possibly show team icons, maybe put this in another Paper element */}
        </Box>
      </Paper>
      {/* Team Logo */}
      {/* Team Abbreviation */}
      {/* Founded Year */}
      {/* Historical Team Record */}
      {/* Playoff Appearances */}
      {/* Superbowl Appearances */}
      {/* Championships */}
      {/* Confrerence */}
      {/* Division */}
      {/* Rival Teams (with team ratings)*/}
      {/* OVR rating */}
      {/* OFF rating */}
      {/* DEF rating */}
      {/* Offensive Scheme */}
      {/* Defensive Scheme */}
      {/* Top 3 players | Team Captains */}
    </Box>
  );
}

export default TeamOverview;
