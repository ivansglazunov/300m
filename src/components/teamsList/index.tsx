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

const useStyles: any = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default ({}) => {
  const classes = useStyles();

  return (
    <>
      <Typography gutterBottom component="h1" variant="h5" align="center">
        Teams List
      </Typography>

      <List>
        <ListItem alignItems="flex-start" button component={Link} to="/team">
          <ListItemText primary="Team short description" />
          <ListItemAvatar>
            <StarRate />
          </ListItemAvatar>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem alignItems="flex-start" button component={Link} to="/team">
          <ListItemText primary="Team short description" />
          <ListItemAvatar>
            <Build />
          </ListItemAvatar>
        </ListItem>
      </List>
      <Fab
        variant="extended"
        size="small"
        color="primary"
        aria-label="Add"
        className={classes.margin}
      >
        <Add className={classes.extendedIcon} />
        <span className={classes.textAlign}>Project add</span>
      </Fab>
    </>
  );
};
