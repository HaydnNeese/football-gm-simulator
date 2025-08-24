import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { Team } from "@shared/models";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { getContrastTextColor } from "../../../utils/colors";


function TeamTable({ teams }: { teams: Team[] }) {
  return (
    <Card>
        <CardContent className="bg-blue-100">
            <Typography variant="h6">Team List</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Logo</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Conference</TableCell>
                            <TableCell>Division</TableCell>
                            <TableCell>Stadium</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teams.map((team) => {
                            const textColor = getContrastTextColor(team.colorPrimary!);
                             return (
                            <TableRow key={team.id} style={{ backgroundColor: team.colorPrimary}}>
                                <TableCell style={{ color: textColor }}>
                                    <img src={team.logoUrl} alt={team.name} height={50} width={50} />
                                </TableCell>
                                <TableCell style={{ color: textColor }}>{team.name}({team.abbreviation})</TableCell>
                                <TableCell style={{ color: textColor }}>{team.location}</TableCell>
                                <TableCell style={{ color: textColor }}>{team.conference}</TableCell>
                                <TableCell style={{ color: textColor }}>{team.division}</TableCell>
                                <TableCell style={{ color: textColor }}>{team.stadium}</TableCell>
                            </TableRow>
                            )
                        })}
                    </TableBody>
            </Table>
            </TableContainer>
        </CardContent>
    </Card>
  );
}

export default TeamTable;
