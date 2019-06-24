import React from "react";

import {
  List,
  ListItem,
  makeStyles,
  Badge,
  Typography
} from "@material-ui/core";
import { Star, Add } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles: any = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  textAlign: {
    position: "relative",
    top: 2
  }
}));

export default ({}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Project Title
      </Typography>
      <Typography variant="body1" component="div">
        Project Description
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
      <List>
        <ListItem component={Link} button to="/members-list">
          Members List
        </ListItem>
        <ListItem component={Link} button to="/project-stages-list">
          Stages List
        </ListItem>
        <Badge className={classes.margin} badgeContent={2} color="primary">
          <ListItem button>ProfileNotification</ListItem>
        </Badge>
      </List>
    </>
  );
};
