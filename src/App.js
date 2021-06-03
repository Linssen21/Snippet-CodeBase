import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF822E",
      contrastText: "#FFFFFF",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar />
        <Home />
      </CssBaseline>
    </ThemeProvider>
  );
}
