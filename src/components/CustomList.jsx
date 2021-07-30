import React from "react";
import { Link } from "react-router-dom";
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
import _ from "lodash";

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
  marginRight: {
    marginRight: "12px",
  },
}));

export default function CustomList({ value }) {
  const classes = useStyles();

  const { id, _embedded, title } = value;

  console.log(value.id);

  function getCategory() {
    let category;
    if (_embedded) {
      category = _.map(_embedded, (value, key) => {
        if (key === "wp:term") {
          return value[0][0];
        }
      });
      return category[1];
    }
    return category;
  }

  function getAuthor() {
    if (_embedded) {
      let author = _.map(_embedded, (value, key) => {
        if (key === "author") {
          return value[0];
        }
      });
      return author[0];
    }
  }

  const { name: categoryName } = getCategory();
  const { name: authorName } = getAuthor();

  return (
    <Card elevation={0}>
      <CardContent>
        <Typography className={classes.listContent}>
          <Chip size="small" label={categoryName} color="primary" />{" "}
          <Link to={`/snippets/${id}`}>{title.rendered}</Link>
        </Typography>

        <Typography className={classes.listContent}>
          {" "}
          TAGS <Chip size="small" label="Javascript" />{" "}
        </Typography>
        <Grid container>
          <VisibilityIcon className={classes.marginRight} />
          <Typography> Posted By {authorName} </Typography>
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  );
}
