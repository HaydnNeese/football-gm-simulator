import './App.css'
import Typography from '@mui/material/Typography'
import TeamSelect from './screens/TeamSelect/TeamSelect'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'

function App() {
  return (
    <Box className='max-h-screen overflow-hidden bg-gray-900'>
      <AppBar color="primary" position="sticky">
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Football GM Simulator
        </Typography>
      </AppBar>
      <TeamSelect/>
    </Box>
  )
}

export default App
