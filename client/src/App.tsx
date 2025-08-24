import { useEffect, useState } from 'react'
import './App.css'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Team } from '@shared/models'
import TeamTable from './components/tables/team-table/TeamTable'

function App() {
  const [teams, setTeams] = useState<Team[]>([])

    const getTeams = (() => {
    fetch('http://localhost:5000/api/teams')
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((err) => console.error(err));
  });

  return (
    <div style={{ padding: 24 }}>
      <Card variant="outlined">
        <CardContent className="bg-gray-500">
          <Typography variant="h5" component="div">
            Welcome to Your Football GM Simulator
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Material UI is working!
          </Typography>
          <Button variant="contained" color="primary" onClick={getTeams}>
            Get Teams
          </Button>
        </CardContent>
      </Card>

      {teams.length > 0 && <TeamTable teams={teams} />}
    </div>
  )
}

export default App
