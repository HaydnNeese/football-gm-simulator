import './App.css'
import Typography from '@mui/material/Typography'
import TeamSelect from './screens/TeamSelect/TeamSelect'
import AppBar from '@mui/material/AppBar'

function App() {
  return (
    <div>
      <AppBar color="warning" position="static">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Football GM Simulator
        </Typography>
      </AppBar>
      <TeamSelect/>

      {/* {teams.length > 0 && <TeamTable teams={teams} />} */}
    </div>
  )
}

export default App
