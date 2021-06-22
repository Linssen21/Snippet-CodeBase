import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputBase,
  IconButton,
  InputAdornment,
  FormControl,

} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2, 0, 2),
  },
}));

const Searchbar = () => {
  const classes = useStyles();
  return (
    <FormControl fullWidth className={classes.form}>
      <InputBase
        placeholder="Find by collection, tag, code..."
        id="standard-adornment-search"
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <IconButton type="submit" aria-label="search">
              <Search />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default Searchbar;
