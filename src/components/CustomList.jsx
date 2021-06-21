import React from "react";
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

export default function CustomList() {
  const classes = useStyles();

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
