import React from "react";

import {
  Typography,
  Divider,
  makeStyles,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import { StarRate, Build, Add } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({}) => {
  const classes = useStyles();

  return (
    <>
      <Typography gutterBottom component="h1" variant="h5" align="center">
        Stage who list
      </Typography>
      <Divider />

      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="Add"
        className={classes.margin}
        component={Link}
        to="/members-search"
      >
        <Add className={classes.extendedIcon} />
        <span className={classes.textAlign}>Stage who add</span>
      </Fab>
    </>
  );
};
