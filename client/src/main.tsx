import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    mode: "light", // or "dark"
    info: { main: "#1976d2" },
    error: { main: "#dc0000"},
    warning: { main: "#dca900"},
    success: { main: "#41e01d"}
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: { fontFamily: "Anton, sans-serif" },
    h2: { fontFamily: "Anton, sans-serif" },
    h3: { fontFamily: "Anton, sans-serif" },
    h4: { fontFamily: "Anton, sans-serif" },
    h5: { fontFamily: "Anton, sans-serif" },
    h6: { fontFamily: "Anton, sans-serif" },
    subtitle1: { fontFamily: "Anton, sans-serif" },
    subtitle2: { fontFamily: "Anton, sans-serif" },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes styles across browsers */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
