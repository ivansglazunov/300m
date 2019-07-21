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
    right: -25,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  }
}))(Badge);

const StyledBadgeDown = withStyles(theme => ({
  badge: {
    top: 20,
    right: -25,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
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
    <Paper
      square="false"
      elevation="2"
      style={{
        backgroundColor: "#3f51b5"
      }}
    >
      <Tabs variant="fullWidth" centered value={selectedTab}>
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            backgroundColor: "#3f51b5",
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
            backgroundColor: "#3f51b5",
            opacity: 1
          }}
          value="team"
          onClick={onToTeams}
          icon={
            <StyledBadgeUp badgeContent={1} color="primary">
              <StyledBadgeDown badgeContent={1} color="secondary">
                <People />
              </StyledBadgeDown>
            </StyledBadgeUp>
          }
          label={t("Teams")}
        />
        <Tab
          style={{
            color: "#fff",
            textTransform: "none",
            backgroundColor: "#3f51b5",
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
            backgroundColor: "#3f51b5",
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
