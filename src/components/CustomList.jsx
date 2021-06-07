import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { List, ListItem, ListItemText, Typography, Chip} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: 0
  },
  listContent: {
    margin: theme.spacing(2, 0, 2)
  }
}));

function CustomList() {
  const classes = useStyles();
  return (
    <List>
        <ListItem className={classes.listItem}>
          <ListItemText primary={
            <React.Fragment>
            <Typography className={classes.listContent}> <Chip size="small" label="Javascript"  color="primary" />  {" "}VATulator - Online VAT Calculator</Typography>
            <Typography className={classes.listContent}>  TAGS {" "} <Chip size="small" label="Javascript"  color="primary" /> </Typography>
            </React.Fragment>
          }/>
        </ListItem>
    </List>
  )
}

export default CustomList;
