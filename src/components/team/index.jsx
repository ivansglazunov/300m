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
        Team Title
      </Typography>

      <List>
        <ListItem alignItems="flex-start" component={Link} to="/members-list">
          <ListItemText primary="Adjoins List" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem alignItems="flex-start" button component={Link} to="/user">
          <ListItemText primary="Team description" />
        </ListItem>
      </List>
    </>
  );
};
