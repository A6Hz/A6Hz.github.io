import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { LocalRoutes } from "./routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export function Pages() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalRoutes />
    </ThemeProvider>
  );
}
