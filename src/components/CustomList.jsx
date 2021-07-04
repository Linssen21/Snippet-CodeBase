import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Divider,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";
import handleAsync from "../utils/handleAsync";

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    boxShadow: 0,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  listItem: {
    padding: 0,
  },
  listContent: {
    margin: theme.spacing(2, 0, 2),
  },
}));

const { REACT_APP_WORDPRESS_API } = process.env;

// const getTerms = async (response) => {
//   const termObjects = {};

//   for (const taxonomyTerms of response._embedded["wp:term"]) {
//     for (const term of taxonomyTerms) {
//       termObjects[term.id] = term;
//     }
//   }
// };

export default function CustomList({ value }) {
  const classes = useStyles();
  const [categories, setCategories] = useState();

  function getTerms(taxonomy, response, termObjects) {
    const terms = [];

    for (const termId of response[taxonomy]) {
      terms.push(termObjects[termId]);
    }

    return terms;
  }

  useEffect(() => {
    const termObjects = {};

    // for (const taxonomyTerms of value._embedded["wp:term"]) {
    //   for (const term of taxonomyTerms) {
    //     termObjects[term.id] = term;
    //   }
    // }
    if (value) {
      console.log(value._embedded, "CustomList");
      // setCategories(getTerms("snippet_category", value, termObjects));
    }
  }, [value]);

  return (
    <Card elevation={0}>
      <CardContent>
        <Typography className={classes.listContent}>
          <Chip size="small" label="Javascript" color="primary" /> VATulator -
          Online VAT Calculator
        </Typography>

        <Typography className={classes.listContent}>
          {" "}
          TAGS <Chip size="small" label="Javascript" />{" "}
        </Typography>
        <Grid container>
          <VisibilityIcon /> <Typography> 231 views Posted By Niel</Typography>
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  );
}
