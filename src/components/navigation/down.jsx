import React from "react";

import {
  Paper,
  Tabs,
  Tab,
  Badge,
  withStyles,
  makeStyles
} from "@material-ui/core";
import { Person, People, Business, Notifications } from "@material-ui/icons";

import { useTranslation } from "react-i18next";

const StyledBadgeUp = withStyles(theme => ({
  badge: {
    top: 5,
    right: -20,
    boxShadow: "0 0 2px 0 #DD2E34",
    backgroundColor: "#FFE20C",
    color: "#111f33"
  }
}))(Badge);

const StyledBadgeDown = withStyles(theme => ({
  badge: {
    top: 20,
    right: -20,
    boxShadow: "0 0 2px 0 #DD2E34",
    backgroundColor: "#DD2E34",
    color: "#111f33"
  }
}))(Badge);

const useStyles = makeStyles(theme => ({}));

export default ({
  onToProfile,
  onToTeams,
  onToProjects,
  onToNotification,
  selectedTab
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Paper square="false" elevation="2">
      <Tabs variant="fullWidth" centered value={selectedTab}>
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            opacity: 1
          }}
          value="profile"
          onClick={onToProfile}
          icon={<Person />}
          label={t("Profile")}
        />
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            opacity: 1
          }}
          value="team"
          onClick={onToTeams}
          icon={
            <StyledBadgeUp badgeContent={1} color="primary">
              <People />
            </StyledBadgeUp>
          }
          label={t("Teams")}
        />
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            opacity: 1
          }}
          value="project"
          onClick={onToProjects}
          icon={
            <StyledBadgeUp badgeContent={1} color="primary">
              <StyledBadgeDown badgeContent={1} color="secondary">
                <Business />
              </StyledBadgeDown>
            </StyledBadgeUp>
          }
          label={t("Projects")}
        />
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            opacity: 1
          }}
          value="activity"
          onClick={onToNotification}
          label={t("Add members to stages")}
          icon={<Notifications />}
          label={t("Notification")}
        />
      </Tabs>
    </Paper>
  );
};
