import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light", // or "dark"
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
  typography: {
    fontFamily: "Anton, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Anton, sans-serif",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "Anton, sans-serif",
        },
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes styles across browsers */}
      <App /> 
    </ThemeProvider>
  </StrictMode>,
)
