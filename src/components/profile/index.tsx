import React from "react";

import { List, ListItem, Badge, makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
    marginRight: theme.spacing(3)
  }
}));

export default ({}) => {
  const classes = useStyles();

  return (
    <>
      <List>
        <ListItem button component={Link} to="/user">
          User
        </ListItem>
        <ListItem button>Settings</ListItem>
        <ListItem button component={Link} to="/projects-list">
          ProjectsListLink
        </ListItem>
        <ListItem button component={Link} to="/project-invites-list">
          ProjectInvitesListLink
        </ListItem>
        <ListItem button component={Link} to="/teams-list">
          TeamsListLink
        </ListItem>
        <ListItem button component={Link} to="/team-invites-list">
          TeamInvitesListLink
        </ListItem>
        <ListItem button>ProfileNotifications</ListItem>
        <List>
          <Badge className={classes.margin} badgeContent={2} color="primary">
            <ListItem button>ProfileNotification</ListItem>
          </Badge>
        </List>
      </List>
    </>
  );
};
