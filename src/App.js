import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Container,
} from "@material-ui/core";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Snippet from "./pages/Snippet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "highlight.js/styles/default.css";

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
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/snippets/:id" component={Snippet} />
            </Switch>
          </BrowserRouter>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}
