import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Badge,
  makeStyles,
  withStyles
} from "@material-ui/core";

import {
  Person,
  People,
  GroupAdd,
  Notifications,
  Settings,
  Business,
  ListAlt
} from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledBadge = withStyles(theme => ({
  badge: {
    top: "45%",
    right: 5,
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
}))(Badge);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
    marginRight: theme.spacing(3)
  }
}));

export default ({}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <List>
        <ListItem button component={Link} to="/user">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary={t("user")} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary={t("settings")} />
        </ListItem>
        <ListItem button component={Link} to="/projects-list">
          <ListItemIcon>
            <Business />
          </ListItemIcon>
          <ListItemText primary={t("Project List")} />
        </ListItem>
        <ListItem button component={Link} to="/project-invites-list">
          <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
          <ListItemText primary={t("Project Invites List")} />
        </ListItem>
        <ListItem button component={Link} to="/teams-list">
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary={t("Teams List")} />
        </ListItem>
        <ListItem button disabled>
          <ListItemIcon>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary={t("Profile Notifications")} />
        </ListItem>
        <List>
          <StyledBadge badgeContent={2} color="primary">
            <ListItem disabled button>
              {t("Profile Notification")}
            </ListItem>
          </StyledBadge>
        </List>
      </List>
    </>
  );
};
