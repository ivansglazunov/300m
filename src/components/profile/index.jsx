import React from "react";

import { List, ListItem, Badge, makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
          {t("user")}
        </ListItem>
        <ListItem button>{t("settings")}</ListItem>
        <ListItem button component={Link} to="/projects-list">
          {t("Project List")}
        </ListItem>
        <ListItem button component={Link} to="/project-invites-list">
          {t("Project Invites List")}
        </ListItem>
        <ListItem button component={Link} to="/teams-list">
          {t("Teams List")}
        </ListItem>
        <ListItem button component={Link} to="/team-invites-list">
          {t("Team Invites List")}
        </ListItem>
        <ListItem button>{t("Profile Notifications")}</ListItem>
        <List>
          <Badge className={classes.margin} badgeContent={2} color="primary">
            <ListItem button>{t("Profile Notification")}</ListItem>
          </Badge>
        </List>
      </List>
    </>
  );
};
