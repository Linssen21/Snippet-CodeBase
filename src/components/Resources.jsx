import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}));

export default function Resources() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <List>
        <ListSubheader>
          <Typography variant="h5" component="h5">
            RESOURCES
          </Typography>
        </ListSubheader>
        <ListItem>
          <ListItemText>
            <Link href="#" color="primary">
              <Typography>Gutenberg</Typography>
            </Link>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta
              nostrum quas, iste cumque odit nihil laborum laudantium voluptatem
              cum repellendus aliquam necessitatibus ullam quaerat enim harum
              adipisci asperiores quae?
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}
