import React from "react";
import { Divider, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Searchbar from "../components/Searchbar";
import Navigation from "../components/Navigation";
import CustomList from "../components/CustomList";
import LoginCard from "../components/LoginCard";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Searchbar />
      <Divider />
      <div className={classes.heroContent}>
        <Grid container spacing={5}>
          <Grid item md>
            <Typography variant="h5" component="h5">
              Recently Added
            </Typography>
            <Navigation />
            <CustomList />
          </Grid>

          <Grid item md>
            <Typography variant="h5" component="h5">
              Recently Added
            </Typography>
            <Navigation />
            <CustomList />
          </Grid>

          <Grid item md={3}>
            <LoginCard />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Home;
