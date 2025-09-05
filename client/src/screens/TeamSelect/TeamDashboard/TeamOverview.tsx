import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Team } from "@shared/models";
import React from "react";
import LabelValue from "src/components/layout/LabelValue";

function TeamOverview({ team }: { team: Team | null }) {
    return (
        <Box className="flex flex-row gap-2 h-full">
            <Paper elevation={3} className="flex flex-col h-full p-4">
                <img src={team?.logoUrl} alt={team?.name} className="h-20 w-20" />
                <Box>
                    <LabelValue label="Abbreviation" value={team?.abbreviation!}></LabelValue>
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
    )
}

export default TeamOverview;
