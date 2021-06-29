import React from "react";
import { Divider, Typography, Grid, Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import Searchbar from "../components/Searchbar";
import Navigation from "../components/Navigation";
import CustomList from "../components/CustomList";
import LoginCard from "../components/LoginCard";
import Resources from "../components/Resources";

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
            {[0, 1, 2, 3, 4, 5].map((value) => {
              return <CustomList key={value} />;
            })}
            <Box p={4}>
              {" "}
              <Pagination count={10} color="primary" />
            </Box>
          </Grid>

          <Grid item md>
            <Typography variant="h5" component="h5">
              Recently Added
            </Typography>
            <Navigation />
            {[0, 1, 2, 3, 4, 5].map((value) => {
              return <CustomList key={value} />;
            })}
            <Box p={4}>
              {" "}
              <Pagination count={10} color="primary" />
            </Box>
          </Grid>

          <Grid item md={3}>
            <LoginCard />
            <Resources />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Home;
