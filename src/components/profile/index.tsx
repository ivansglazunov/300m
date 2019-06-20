import React from "react";

import { List, ListItem } from "@material-ui/core";

import { Link } from "react-router-dom";

export default ({ currentUser, setCurrentUser, count, setCount }) => {
  return (
    <>
      <List>
        <ListItem button>User</ListItem>
        <ListItem button>Settings</ListItem>
        <ListItem button component={Link} to="/projects-list">
          ProjectsListLink
        </ListItem>
        <ListItem button>ProjectInvitesListLink</ListItem>
        <ListItem button>TeamsListLink</ListItem>
        <ListItem button>TeamInvitesListLink</ListItem>
        <ListItem button>ProfileNotifications</ListItem>
        <List>
          <ListItem button>ProfileNotification</ListItem>
        </List>
      </List>
    </>
  );
};
