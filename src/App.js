import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Container,
} from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF822E",
      contrastText: "#FFFFFF",
    },
    background: "#FFFFFF",
  },
  typography: {
    h3: {
      fontSize: "24px",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  },
});

theme.typography.h3 = {
  fontSize: "24px",
  textTransform: "uppercase",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar />
        <Container maxWidth="xl">
          <Home />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}
