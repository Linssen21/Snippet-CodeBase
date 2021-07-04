import React, { useEffect, useState } from "react";
import { Divider, Typography, Grid, Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import Searchbar from "../components/Searchbar";
import Navigation from "../components/Navigation";
import CustomList from "../components/CustomList";
import LoginCard from "../components/LoginCard";
import Resources from "../components/Resources";
import axios from "axios";
import handleAsync from "../utils/handleAsync";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const { REACT_APP_WORDPRESS_API } = process.env;

const fetchSnippet = async () => {
  const [result, error] = await handleAsync(
    axios.get(
      `${REACT_APP_WORDPRESS_API}/snippets?_fields=id,title,slug,cmb2,snippet_category,snippet_tag,_links,_embedded&_embed`
    )
  );
  if (result) {
    return result;
  } else {
    return error;
  }
};

const Home = () => {
  const [data, setData] = useState();

  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchSnippet();
      const { data } = response;
      setData(data);
    }

    fetchData();
  }, []);

  console.log(data);

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
            {!!data &&
              data.map((value, index) => {
                return <CustomList value={value} key={index} />;
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
